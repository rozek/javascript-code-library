# JCL.misc — API Reference

See [`misc-programming-manual.md`](misc-programming-manual.md) for a
narrative introduction with examples. All members are also available as
named exports of the package (e.g. `import { HTMLtoText } from
'javascript-code-library'`), `JCL.misc.*` is just a curated bundle of them.

## Reading files

### `readFileAsText(File: File): Promise<string>`
### `readFileAsBinary(File: File): Promise<ArrayBuffer>`
### `readFileAsDataURL(File: File): Promise<string>`

Wrap the browser's `FileReader` (`readAsText`/`readAsArrayBuffer`/
`readAsDataURL`) in a `Promise`. Reject with the `FileReader`'s error, or a
generic `Error` on abort.

## HTML conversion

### `HTMLasText(HTMLContent: string): Promise<string>`

Equivalent to `HTMLtoText(HTMLContent)`, wrapped in a `Promise` for a
consistent async API. Validates that `HTMLContent` is text via
`expectText`.

### `HTMLFileReadAsText(File: File): Promise<string>`

`readFileAsText` + `HTMLasText`.

### `HTMLasMarkdown(HTMLContent: string): Promise<string>`

Equivalent to `HTMLtoMarkdown(HTMLContent)`, wrapped in a `Promise`.

### `HTMLFileReadAsMarkdown(File: File): Promise<string>`

`readFileAsText` + `HTMLasMarkdown`.

## Markdown conversion

### `MarkdownFileReadAsText(File: File): Promise<string>`

`readFileAsText` + `MarkdownAsText`.

### `MarkdownAsText(Markdown: string): Promise<string>`

Renders Markdown into plain text using a custom [`marked`](https://marked.js.org/)
renderer (GFM + line breaks enabled, KaTeX math via
`marked-katex-extension`, requiring a blank/punctuation around `$...$`) that
strips inline formatting instead of the underlying HTML tags, so
lists/blockquotes/headings remain readable. Collapses runs of 3+ newlines to
a single blank line. Throws `ConversionError` on failure.

### `MarkdownFileReadAsHTML(File: File): Promise<string>`

`readFileAsText` + `MarkdownAsHTML`.

### `MarkdownAsHTML(Markdown: string): Promise<string>`

Renders Markdown into HTML via `marked` (GFM + line breaks, syntax
highlighting through `marked-highlight`/`highlight.js`, KaTeX math via
`marked-katex-extension`, requiring a blank/punctuation around `$...$`).
Throws `ConversionError` on failure.

## DOCX conversion

All DOCX functions take/read a `.docx` file's raw bytes and delegate to
[`mammoth`](https://github.com/mwilliamson/mammoth.js) (bundled). They
throw `ConversionError` on failure.

### `DOCXFileReadAsText(File: File): Promise<string>`
### `DOCXasText(Buffer: ArrayBuffer): Promise<string>`

Extracts raw text (`mammoth.extractRawText`).

### `DOCXFileReadAsHTML(File: File): Promise<string>`
### `DOCXasHTML(Buffer: ArrayBuffer): Promise<string>`

Converts to HTML (`mammoth.convertToHtml`).

### `DOCXFileReadAsMarkdown(File: File): Promise<string>`
### `DOCXasMarkdown(Buffer: ArrayBuffer): Promise<string>`

Converts to HTML via `mammoth`, then to Markdown via `HTMLtoMarkdown`.

## PDF conversion

### `PDFFileReadAsText(File: File): Promise<string>`
### `PDFasText(Buffer: ArrayBuffer): Promise<string>`

Extracts plain text from every page of a PDF document using
[`pdfjs-dist`](https://mozilla.github.io/pdf.js/) (bundled). Text items are
joined per page, with a newline inserted wherever pdf.js reports an
end-of-line, and pages are separated by a trailing newline. Throws
`ConversionError` on failure.

## HTML utilities

### `HTMLtoText(HTMLContent: string): string`

Synchronously renders HTML into readable plain text (block/inline-aware,
turns `<table>`s into pipe-style text tables, preserves list markers).
Throws (via `expectText`) if `HTMLContent` is not a string.

### `HTMLtoMarkdown(HTMLContent: string): string`

Synchronously renders HTML into Markdown.

### `parseHTML(HTML: string, Callbacks: HTMLParserCallbackSet): void`

A small, dependency-free HTML tokenizer/parser.

```typescript
type HTMLAttribute = { Name: string, Value: string, escapedValue: string }

type HTMLParserCallbackSet = {
  processStartTag?: (TagName: string, Attributes: HTMLAttribute[], isUnary: boolean, isTopLevel: boolean) => any,
  processEndTag?:   (TagName: string, isTopLevel: boolean) => any,
  processText?:     (Text: string, isTopLevel: boolean) => any,
  processComment?:  (Comment: string) => any,
}
```

Knows about HTML's empty ("void") elements (`br`, `img`, `input`, ...) and
block-level elements, and normalizes accordingly.

### `escapedHTMLAttribute(OriginalValue: string): string`

Escapes `&`, `<`, `>`, `"`, `'`, `\`, control characters (`\x00`-`\x1F`,
`\x7F`-`\x9F`) and non-ASCII-adjacent characters as needed, so the result
can safely be used as an HTML attribute value (`\n` is preserved verbatim).

### `unescapedHTMLAttribute(OriginalValue: string): string`

The inverse of `escapedHTMLAttribute`: decodes `&amp;`, `&lt;`, `&gt;`,
`&quot;`, `&apos;`, `&#92;` and numeric character references
(`&#NNN;`/`&#xHHHH;`) back to their original characters.
