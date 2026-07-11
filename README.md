# javascript-code-library #

[![CI](https://github.com/rozek/javascript-code-library/actions/workflows/ci.yml/badge.svg)](https://github.com/rozek/javascript-code-library/actions/workflows/ci.yml)

a growing collection of ready-to-use UI components (built on [preact](https://preactjs.com/)+[htm](https://github.com/developit/htm)) and utility functions for JavaScript and TypeScript

This library contains the functions and preact components I am using to build my tools and web apps

> **work-in-progress**: this library is currently modified quite often - and sometimes there may be even breaking changes. As a consequence, you may probably do not want to use it yourself right now - it exists just to allow for its import into other code

Input components protect, where needed, against external changes (e.g. from
other CRDT nodes) overwriting a user's in-progress local input.

## Installation ##

`javascript-code-library` is a pure ECMAScript module (ESM).

You may either install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install javascript-code-library
```

and bundle it with your application - in that case, no code needs to be
loaded from any third party at runtime for the "core" of the library
(preact, htm, zod, detect-it, javascript-interface-library, mammoth and
pdfjs-dist are already bundled into the single ESM file).

For buildless setups, it is recommended to **host the module yourself**:
simply download the ready-made file
[javascript-code-library.esm.js](https://raw.githubusercontent.com/rozek/javascript-code-library/main/dist/javascript-code-library.esm.js)
and serve it from your own web server:

```html
<script type="module">
  import * as JCL from '/js/javascript-code-library.esm.js'
</script>
```

Serving the file from your own origin keeps your visitors' IP addresses away
from third-party servers - which **may be relevant for GDPR compliance**:
loading assets from public CDNs (such as unpkg, jsDelivr or cdnjs) or other
third-party hosts discloses visitor IPs to those parties and may require
consent. For quick experiments, importing the module directly from
`rozek.github.io` (also a third-party host) is still the fastest way to get
started.

### Optional, lazily-loaded peer libraries ###

A few of the heavier UI components (`RichTextEditor`, `CodeEditor`,
`Spreadsheet`, ...) do **not** bundle their underlying third-party libraries
(`squire-rte`, `dompurify`, CodeMirror, `jspreadsheet-ce`, `jsuites`, ...).
Instead, they are loaded lazily at runtime via plain, bare-specifier
`import()` calls, which are resolved through an
[Import Map](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap)
on the hosting page - no bundler required for them, and unused components
never pay their cost. See [`docs/`](docs/) for step-by-step instructions on
how to build and host these optional bundles yourself:

* [`docs/bundling-npm-packages-as-esm.md`](docs/bundling-npm-packages-as-esm.md) - general recipe (e.g. for `squire-rte`+`dompurify`)
* [`docs/bundling-jspreadsheet.md`](docs/bundling-jspreadsheet.md) - `jspreadsheet-ce`+`jsuites`+`formulajs`
* [`docs/codemirror-bundles.md`](docs/codemirror-bundles.md) - CodeMirror 6 core + per-language bundles

## Access ##

Import the functions and values you actually need

```javascript
import { ValueIsListSatisfying, ValueIsOrdinal, capitalized } from 'javascript-code-library'
```

or import the complete module as a namespace

```javascript
import * as JCL from 'javascript-code-library'
```

All module functions and values are exported individually, thus allowing
your bundler to perform some "tree-shaking" in order to include actually
used functions or values (together with their dependencies) only.

## Usage of the UI components ##

UI components are built with [preact](https://preactjs.com/) and
[htm](https://github.com/developit/htm) and are rendered through JCL's own,
already bundled `render`/`html` functions (exported as `JCL.ui.render`/
`JCL.ui.html`) - you do not need to install preact or htm yourself:

```javascript
import * as JCL from 'javascript-code-library'
const { render, html } = JCL.ui

render(html`
  <${JCL.ui.vertical}>
    <${JCL.ui.Title} Value="Hello, World!"/>
  <//>
`, document.getElementById('rendering-target'))
```

## Documentation ##

`javascript-code-library` bundles its exports into four curated
namespaces - `JCL.net`, `JCL.misc`, `JCL.ui` and `JCL.ai` (all individual
members are also available as named exports). Each has its own Programming
Manual and API Reference:

| Package | Contains | Programming Manual | API Reference |
|---|---|---|---|
| `JCL.net` | connectivity checks, a hardened `fetch()` wrapper, content-negotiated fetchers, HTTP status helpers, a SearXNG search client | [net-programming-manual.md](docs/net-programming-manual.md) | [net-api-reference.md](docs/net-api-reference.md) |
| `JCL.misc` | reading `File`s, HTML/Markdown/DOCX/PDF conversion, a small HTML parser, HTML-attribute (un)escaping | [misc-programming-manual.md](docs/misc-programming-manual.md) | [misc-api-reference.md](docs/misc-api-reference.md) |
| `JCL.ui` | preact/htm re-exports, hooks, layout & content primitives, and ~120 `native`/`styled`/`legacy` UI components, plus the `<jcl-applet>` custom element | [ui-programming-manual.md](docs/ui-programming-manual.md) | [ui-api-reference.md](docs/ui-api-reference.md) |

Everything else exported by the package (mostly re-exported from
[`javascript-interface-library`](https://github.com/rozek/javascript-interface-library))
is documented in that library's own README.

> **Status:** these guides were generated from the current source as a
> first cut and will be extended over time - in particular, the ~120
> `native`/`styled`/`legacy` components in `JCL.ui` are so far only listed
> by name in the API reference, without individual prop signatures, and
> `JCL.ai` (its most recent addition) has no dedicated guide yet.

## Build Instructions ##

You may easily build this package yourself.

Just install the [NPM](https://docs.npmjs.com/) package manager for
[node.js](https://nodejs.org/), if you have not already done so, and follow
these steps:

1. clone the [GitHub repository](https://github.com/rozek/javascript-code-library) of this package
2. open a terminal window and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build (from TypeScript sources)

You may also change the source code and run `npm run test:run` in order to
run a quick sanity/smoke test suite (found in `src/*.test.ts`) - the more
extensive, interactive smoke tests and demo applets that live alongside the
original sources (BBN) are not (yet) part of this repository.

### Notes on the build ###

* unlike `javascript-interface-library`, this package is **not** checked
  with [`agadoo`](https://github.com/Rich-Harris/agadoo): JCL intentionally
  contains module-level side effects (it registers the `jcl-applet` custom
  element and lets individual components inject their own, scoped
  `<style>` rules on first use) - such side effects are exactly what
  `agadoo`/pure ESM tree-shaking is meant to flag, so the check does not
  apply here and would only ever fail.
* `pdfjs-dist`'s worker file is copied into `dist/` as part of the build
  (see `vite.config.ts`), since `PDFFileReadAsText`/`PDFasText` resolve it
  relative to the bundle's own URL at runtime.
* a handful of pre-existing strict-mode TypeScript diagnostics remain in
  `src/javascript-code-library.ts` (mostly `Set<unknown>` vs. `Set<string>`
  and DOM event-listener overload mismatches) - they do not stop `npm run
  build` (which only transpiles, it does not type-check) but are worth
  cleaning up over time.

## License ##

[MIT License](LICENSE.md)
