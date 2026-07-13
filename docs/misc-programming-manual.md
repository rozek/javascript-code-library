# JCL.misc — Programming Manual

`JCL.misc` bundles JCL's document-conversion and HTML-processing helpers:
reading `File` objects, converting between HTML/Markdown/DOCX/PDF and
plain text/HTML/Markdown, a small dependency-free HTML parser, and two
HTML-attribute (un)escaping functions.

```javascript
import * as JCL from 'javascript-code-library'
const { misc } = JCL
// or: import { misc } from 'javascript-code-library'
```

> **Status:** like the rest of JCL, this package is under active
> development; signatures may still change.

## Reading files

```javascript
const Text     = await misc.readFileAsText(File)      // -> string
const Buffer   = await misc.readFileAsBinary(File)     // -> ArrayBuffer
const DataURL  = await misc.readFileAsDataURL(File)    // -> "data:...;base64,..."
```

These three wrap the browser's `FileReader` in a `Promise` and are the
common basis for all `*FileReadAs*` functions below.

## Converting documents

Four document "shapes" are supported - **HTML**, **Markdown**, **DOCX**
and **PDF** - each convertible into plain text, HTML and/or Markdown
(PDF only into text, since it has no native structure to preserve). Every
conversion comes in two flavours: one that takes the already-loaded content
(`*asText`/`*asHTML`/`*asMarkdown`, taking a `string` for HTML/Markdown or
an `ArrayBuffer` for DOCX/PDF), and one that reads a `File` object first
(`*FileReadAs*`):

```javascript
// HTML
const Text     = await misc.HTMLasText(HTMLString)
const Text2    = await misc.HTMLFileReadAsText(File)
const Markdown = await misc.HTMLasMarkdown(HTMLString)
const Markdown2= await misc.HTMLFileReadAsMarkdown(File)

// Markdown
const Text3    = await misc.MarkdownAsText(MarkdownString)
const HTML     = await misc.MarkdownAsHTML(MarkdownString)

// DOCX (from an ArrayBuffer, e.g. via readFileAsBinary)
const Text4    = await misc.DOCXasText(Buffer)
const HTML2    = await misc.DOCXasHTML(Buffer)
const Markdown3= await misc.DOCXasMarkdown(Buffer)
const Text5    = await misc.DOCXFileReadAsText(File)

// PDF (text extraction only)
const Text6    = await misc.PDFasText(Buffer)
const Text7    = await misc.PDFFileReadAsText(File)
```

Implementation notes worth knowing when debugging conversions:

- **Markdown → text/HTML** is rendered with [`marked`](https://marked.js.org/)
  (lazily loaded, together with `marked-katex-extension` for math and
  `marked-highlight` + `highlight.js` for code blocks in the HTML variant),
  loaded via [`JCL.ui`'s](ui-programming-manual.md) `loadMarkdownLibraries`/
  `loadedMarkdownRenderer`. The *text* variant uses a custom `marked`
  renderer that strips inline formatting and reflows lists/blockquotes
  instead of just stripping all HTML tags, to keep the output readable.
- **KaTeX math** is only recognized as such when the `$...$`/`$$...$$` span
  is set off by whitespace, punctuation or a line boundary
  (`marked-katex-extension`'s `nonStandard:false`, its default) - text
  directly adjacent to a `$` (e.g. a price like `Preis$5-3$Rabatt`) is left
  untouched instead of risking a misparse.
- **DOCX** conversion is delegated entirely to
  [`mammoth`](https://github.com/mwilliamson/mammoth.js) (bundled with the
  package); `DOCXasMarkdown` internally converts to HTML first, then
  through `HTMLtoMarkdown`.
- **PDF** text extraction uses [`pdfjs-dist`](https://mozilla.github.io/pdf.js/)
  (bundled) and concatenates each page's text items, inserting a newline
  wherever pdf.js reports an end-of-line.
- all conversions throw a `ConversionError: ...` on failure (with the
  underlying error's message appended), rather than propagating the raw
  library error.

## Working with HTML directly

### `HTMLtoText(HTMLContent: string): string`

Renders arbitrary HTML into readable plain text - not just tag-stripping:
it understands block vs. inline elements, renders `<table>`s as pipe-style
Markdown-like tables, keeps list markers, etc. This is what `HTMLasText`
uses internally, and it is synchronous (no library loading involved).

### `HTMLtoMarkdown(HTMLContent: string): string`

Renders arbitrary HTML into Markdown. Used internally by `HTMLasMarkdown`
and `DOCXasMarkdown`. Also synchronous.

### `parseHTML(HTML: string, Callbacks: HTMLParserCallbackSet): void`

A small, dependency-free HTML parser (the author's own variant of the
well-known ["John Resig HTML Parser"](https://johnresig.com/blog/pure-javascript-html-parser/)),
used internally by `HTMLtoText`/`HTMLtoMarkdown`. You can use it directly
for custom HTML processing:

```javascript
misc.parseHTML(HTML, {
  processStartTag (TagName, Attributes, isUnary, isTopLevel) { /* ... */ },
  processEndTag   (TagName, isTopLevel)                      { /* ... */ },
  processText     (Text, isTopLevel)                          { /* ... */ },
  processComment  (Comment)                                   { /* ... */ },
})
```

`Attributes` is an array of `{ Name, Value, escapedValue }` objects.

### `escapedHTMLAttribute(OriginalValue: string): string`
### `unescapedHTMLAttribute(OriginalValue: string): string`

Escape/unescape a string for safe use as (or reading back from) an HTML
attribute value - handling `&<>"'`, control characters, backslashes and
numeric character references. These are also what
[`JCL_AppletElement`](ui-programming-manual.md#the-jcl-applet-custom-element)
uses to store an applet's source code inside a `src="..."` attribute.

See [`misc-api-reference.md`](misc-api-reference.md) for the complete list
of members.
