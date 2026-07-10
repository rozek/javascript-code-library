# Bundling npm packages as standalone ESMs

This guide describes how to turn any npm package into a single,
dependency-free ESM file that can be hosted on your own server (e.g. under
`/js/`) and loaded on demand via an Import Map.

## Prerequisites

- Node.js (≥ 18) and npm
- an empty working directory

## Step 1: install the package(s)

```bash
mkdir esm-build && cd esm-build
npm init -y
npm install <paketname> esbuild
```

Example:

```bash
npm install squire-rte dompurify esbuild
```

Tip: check the version and entry points of the installed package —

```bash
node -e "
const pkg = require('./node_modules/<paketname>/package.json')
console.log(pkg.version, pkg.main, pkg.module, JSON.stringify(pkg.exports))
"
```

## Step 2: create an entry file

A tiny file unifies the export shape: it re-exports the default export
additionally under a descriptive name (a named export). This way, both
import variants work later on:

```js
// entry.js
export { default, default as Squire } from 'squire-rte'
```

If a package (also) has named exports, these are passed through completely:

```js
// entry.js
export * from '<paketname>'
export { default } from '<paketname>'   // only if a default export exists
```

## Step 3: bundle with esbuild

```bash
npx esbuild entry.js --bundle --format=esm --target=es2020 \
  --minify --legal-comments=inline \
  --banner:js='/* <paketname> <version> (<repo-url>) - <lizenz> - bundled as a standalone ESM */' \
  --outfile=<paketname>.esm.js
```

The most important options:

| Option | Purpose |
|---|---|
| `--bundle` | pulls all dependencies into the file — the result is self-contained |
| `--format=esm` | produces an ECMAScript module (`import`/`export`) |
| `--target=es2020` | defined language baseline, transpiles newer syntax as needed |
| `--minify` | shrinks the file for delivery |
| `--legal-comments=inline` | preserves license comments from the source code |
| `--banner:js='…'` | prepends a custom header comment with name, version and license |

Notes:

- Browser APIs (`document`, `window`, etc.) are left untouched — esbuild
  only bundles modules, not a runtime environment.
- If a dependency should deliberately *not* be bundled in (because it is
  hosted as its own ESM), `--external:<paketname>` helps; the import then
  remains a bare specifier and is resolved at runtime via the Import Map.
- esbuild automatically converts CommonJS packages to ESM; the default
  export is then `module.exports`.

## Step 4: verify the bundle

Before uploading, the bundle should be actually imported and executed once.
Node is enough for pure logic packages; packages with DOM access need jsdom
as the environment:

```bash
npm install jsdom
node --input-type=module -e "
import { JSDOM } from 'jsdom'
const DOM = new JSDOM('<div id=\"root\"></div>')
globalThis.window = DOM.window
for (const Key of [
  'navigator','document','Node','Element','HTMLElement','Text',
  'CharacterData','DocumentFragment','InputEvent','MutationObserver',
  'ClipboardEvent','KeyboardEvent','CustomEvent','DOMParser',
  'getComputedStyle'
]) {
  Object.defineProperty(globalThis, Key, {
    value:DOM.window[Key], configurable:true
  })
}

const { default:Squire } = await import('./squire-rte.esm.js')
const Editor = new Squire(DOM.window.document.getElementById('root'))
Editor.setHTML('<div>Hello <b>World</b></div>')
console.log(Editor.getHTML())     // check the expected output
"
```

Meaningful checks: do the expected exports exist? Does a roundtrip of the
core API work? Do method names match your own usage? (This is how, for
example, it turned out that Squire 2.x uses `setTextColor` instead of
`setTextColour`.)

## Step 5: upload and register in the Import Map

Place the finished file in the server's `/js/` directory and register it in
the Import Map:

```html
<script type="importmap">
{
  "imports": {
    "squire-rte":"/js/squire-rte.esm.js",
    "dompurify": "/js/dompurify.esm.js"
  }
}
</script>
```

The application code continues to import via the bare specifier and thus
remains independent of the storage location:

```js
import Squire    from 'squire-rte'
import DOMPurify from 'dompurify'
```

## Special cases

- **Package already ships a ready-made single-file ESM** (recognizable by
  `dist/*.mjs` without its own `import` statements): a download alone would
  suffice — the esbuild step is still worthwhile for uniform exports,
  minification, a banner, and as a safeguard against hidden dependencies.
- **Multiple packages in one bundle** (like `codemirror-core.esm.js`): a
  shared entry file re-exports all sub-packages; in the Import Map, several
  specifiers then point to the same file.
- **Package with peer dependencies** (e.g. Preact components): exclude the
  peer dependency via `--external:preact`, so that at runtime all modules
  use the same instance from the Import Map — otherwise two copies end up
  existing side by side.
- **Worker or WASM files** (e.g. `pdfjs-dist`): such assets must be hosted
  separately; use the bundler approach only for the JS part here and set the
  asset paths in the package configuration.
