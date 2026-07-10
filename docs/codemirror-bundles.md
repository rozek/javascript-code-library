# Building CodeMirror 6 bundles yourself

This guide describes how the ESM bundles for the CodeEditor component are
built reproducibly — e.g. after a version change of the CodeMirror packages
or to add further languages.

The result of a build then lives in the `dist/` subfolder:

* `codemirror-core.esm.js` — a single, completely dependency-free ESM with
  all core packages
* `lang-*.esm.js` — one small ESM per language, whose imports point
  exclusively to the core specifiers
* `codemirror-import-map.json` — the matching, automatically generated
  Import Map template

## Prerequisites

Node.js version 20 or later (because of top-level `await` and
`fetch`-free esbuild) and npm. Nothing else — esbuild is installed as an
npm package.

## One-time setup

1. create an empty project folder (e.g. `codemirror-bundles/`)
2. place the files `package.json` and `build-codemirror-bundles.mjs` in it
3. run `npm install` in the project folder

## Building

In the project folder:

```bash
npm run build
```

The script independently carries out all the necessary steps: it checks
whether the export names of the core packages overlap (see below), builds
the core bundle and all language modules, verifies that the language
modules contain only the expected external imports, runs a smoke test of
all exports, generates the Import Map, and finally prints all file sizes.
If any of the checks fail, the build aborts with a descriptive error
message — in that case, please don't use anything from `dist/`.

## After a version change

```bash
npm update        # fetches the latest versions within the caret ranges
npm run build
```

For a major change (e.g. `7.x`), adjust the version specifications in
`package.json` and run `npm install` plus `npm run build` again. The
versions actually bundled are listed after every build in the header
comment of each generated file.

## Adding a new language

1. install the package, e.g. `npm install @codemirror/lang-sql`
2. add an entry to the `LanguagePackages` constant in
   `build-codemirror-bundles.mjs`, e.g.
   `sql:{ Package:'@codemirror/lang-sql', Export:'sql' }`
   (`Export` is the name of the exported function that provides the
   `LanguageSupport` object)
3. `npm run build` — the new `lang-sql.esm.js` and the Import Map entry
   are created automatically
4. ship the module together with the others and adopt the new Import Map
   key
5. register the language in the `Language Registry` of the CodeEditor
   component:

   ```typescript
   registerCodeEditorLanguage('sql', async () => (
     (await import('@codemirror/lang-sql')).sql()
   ))
   ```

Note: TypeScript doesn't need its own module — it is contained in
`lang-javascript.esm.js` and is activated via `javascript({ typescript:true })`.

## Background: why the core bundle contains nine packages

Strictly speaking, the CodeEditor component only needs `@codemirror/state`,
`view`, `language`, `commands` and `lint`. However, the language packages
internally also import `@codemirror/autocomplete` as well as
`@lezer/common`, `@lezer/highlight` and `@lezer/lr` — and these four must
under no circumstances be bundled twice (once in the core, once per
language module): CodeMirror relies on object identities (`Tag` and
`NodeProp` instances, `instanceof` checks against `Parser`). Two copies of
the same class subtly break highlighting. That's why they move into the
core bundle, the language modules import them externally, and the Import
Map directs all nine specifiers to the same file — the browser still only
loads it once.

For the re-export of all nine packages from one file to work, no export
name may occur twice (ambiguous `export *` names are silently suppressed
under ES semantics!). That's exactly what the script checks before every
build — should a future package version introduce a collision, the build
aborts instead of producing a subtly broken bundle.

The `@lezer` grammar of the respective language (e.g. `@lezer/python`), on
the other hand, is deliberately embedded into the respective language
module — it is used by no one else, so each language module remains a
single, self-contained file.

---

**Note:** The actual build script `build-codemirror-bundles.mjs` and its
`package.json` live as a separate, small helper project in the BBN note
`javascript-code-library ⭐️ | Anleitung zum Bau der CodeMirror-Pakete` and
were deliberately not carried over here, since they are not part of this
npm package but a standalone, one-off build tool for the (externally
hosted) CodeMirror bundles.
