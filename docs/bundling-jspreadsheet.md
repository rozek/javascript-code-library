# Bundling jspreadsheet-ce + jsuites + formulajs as ESMs

jspreadsheet-ce requires jsuites as a companion library. In addition,
@formulajs/formulajs can be included as an optional formula library.

The procedure corresponds to the general guide
["Bundling npm packages as ESM"](bundling-npm-packages-as-esm.md),
with one important deviation in step 2 (see the warning below).

> **Known bug: empty input field on double-click on formatted
> cells (e.g. `format:'#,##0.00 €'`), value is lost when leaving without
> input.** Cause: jspreadsheet-ce internally loads jsuites via
> `var jSuites; !jSuites && typeof require==="function" && (jSuites=require("jsuites"))`
> - a leftover from the UMD/CommonJS build. If jsuites is factored out during
> bundling via `--external:jsuites` (as recommended in an earlier version of
> this guide), this `require("jsuites")` call remains in place at runtime:
> - In a normal browser, `require` is not defined → esbuild's require shim
>   throws `Dynamic require of "jsuites" is not supported`
>   (a blocking error while loading).
> - **In Node-integrated environments such as NW.js (or Electron with
>   nodeIntegration enabled), however, a real, working `require` exists.**
>   The call then loads `jsuites` via Node's own module resolution from
>   disk - **not** via the Import Map and **not** necessarily the
>   just-built `/js/jsuites.esm.js`, but e.g. an older copy found by chance
>   on the file system. That is exactly what triggers the bug: the jsuites
>   version found there has broken mask rendering for cells with
>   `format`/`mask`/`locale`
>   (reproduced and verified via a jsdom test: jspreadsheet-ce 5.0.0 +
>   jsuites 5.8.5 throws an exception in `Mask.render`/`Helpers.focus`;
>   columns without `format` are not affected, so unformatted text/number
>   columns work normally).
>
> **Fix:** do NOT factor jsuites out as `--external` when bundling
> `jspreadsheet.esm.js` - instead, bundle it in (no more `--external:jsuites`
> in step 2 below). This eliminates the `require("jsuites")` call at
> runtime entirely, regardless of whether the runtime environment provides
> a real `require`. `jsuites.esm.js` is still built separately in case other
> parts of the library import `jsuites` directly - this costs some extra
> bundle size (jspreadsheet.esm.js), but in return the behavior is identical
> and predictable in every environment.
> Verified via a jsdom test against jspreadsheet-ce 5.0.4 + jsuites 6.4.2:
> all four example columns (text, number without format, number with format,
> formula with format) return the correct value when the editor is opened.

## Step 1: install packages

```bash
mkdir jspreadsheet-build && cd jspreadsheet-build
npm init -y
npm install jspreadsheet-ce@5.0.4 jsuites@6.4.2 @formulajs/formulajs@latest esbuild
```

Check versions:

```bash
node -e "
['jspreadsheet-ce','jsuites','@formulajs/formulajs'].forEach(p => {
  const v = require('./node_modules/' + p + '/package.json').version
  console.log(p + '@' + v)
})"
```

## Step 2: build the bundle

### jsuites.esm.js

```bash
printf "export * from 'jsuites'\nexport { default } from 'jsuites'" | \
npx esbuild --bundle --format=esm --target=es2020 --minify \
  --legal-comments=inline \
  --banner:js="/* jsuites.esm.js */" \
  --outfile=jsuites.esm.js \
  --sourcefile=entry.js
```

### jspreadsheet.esm.js (jsuites is bundled in, NOT factored out externally)

```bash
printf "export { default } from 'jspreadsheet-ce'" | \
npx esbuild --bundle --format=esm --target=es2020 --minify \
  --legal-comments=inline \
  --banner:js="/* jspreadsheet.esm.js */" \
  --outfile=jspreadsheet.esm.js \
  --sourcefile=entry.js
```

Deliberately **no** `--external:jsuites` anymore (see the warning above) -
this avoids a `require("jsuites")` fallback executed at runtime, which in
Node-integrated runtime environments (e.g. NW.js) can load an incorrect,
locally found jsuites version instead of the one actually intended.

### formulajs.esm.js (optional)

```bash
printf "export * from '@formulajs/formulajs'" | \
npx esbuild --bundle --format=esm --target=es2020 --minify \
  --legal-comments=inline \
  --banner:js="/* formulajs.esm.js */" \
  --outfile=formulajs.esm.js \
  --stdin --sourcefile=entry.js
```

## Step 3: copy CSS files

jspreadsheet-ce requires two CSS files (unlike CodeMirror, which injects its
styling via JS):

```bash
cp node_modules/jsuites/dist/jsuites.css .
cp node_modules/jspreadsheet-ce/dist/jspreadsheet.css .
```

These must be made available on the server under `/js/` and included in the
HTML template via a `<link>` tag (e.g. in the HTML prologue):

```html
<link rel="stylesheet" href="/js/jsuites.css"/>
<link rel="stylesheet" href="/js/jspreadsheet.css"/>
```

## Step 4: Import Map entries

```json
{
  "imports": {
    "jsuites":              "/js/jsuites.esm.js",
    "jspreadsheet-ce":      "/js/jspreadsheet.esm.js",
    "@formulajs/formulajs": "/js/formulajs.esm.js"
  }
}
```

## Verification

```bash
node --input-type=module -e "
import { JSDOM } from 'jsdom'
const DOM = new JSDOM('<div id=\"root\"></div>')
globalThis.window = DOM.window
globalThis.document = DOM.window.document
for (const k of ['navigator','Node','Element','HTMLElement','Text','Event','CustomEvent','MutationObserver']) {
  Object.defineProperty(globalThis, k, { value: DOM.window[k], configurable:true })
}

const jsuites = (await import('./jsuites.esm.js')).default
const jspreadsheet = (await import('./jspreadsheet.esm.js')).default
const formulajs = await import('./formulajs.esm.js')

console.log('SUM via formulajs:', formulajs.SUM(1,2,3))     // → 6

// regression check for the double-click-on-formatted-cell bug:
const ws = jspreadsheet(document.getElementById('root'), {
  worksheets: [{
    data: [['x', 0.89]],
    columns: [{ type:'text' }, { type:'numeric', format:'#,##0.00 €' }],
    minDimensions: [2, 3],
  }]
})[0]
const cell = ws.records[0][1].element
ws.openEditor(cell, undefined, {})
const value = cell.querySelector('input')?.value
console.log('formatted cell in editor:', JSON.stringify(value), value === '0.89 €' ? 'OK' : 'FAILED')
"
```

## Sizes (rough guidance, with step 2 as above, jsuites bundled into jspreadsheet.esm.js)

| File | approx. minified | approx. gzip |
|---|---|---|
| jsuites.esm.js | ~280 KB | ~80 KB |
| jspreadsheet.esm.js | ~480 KB | ~140 KB |
| formulajs.esm.js | ~140 KB | ~35 KB |
| jsuites.css | ~110 KB | ~15 KB |
| jspreadsheet.css | ~20 KB | ~5 KB |
