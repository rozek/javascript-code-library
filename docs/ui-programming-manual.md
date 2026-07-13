# JCL.ui — Programming Manual

`JCL.ui` is JCL's UI toolkit: it re-exports [preact](https://preactjs.com/)
and [htm](https://github.com/developit/htm) plus around 200 hooks,
layout/content primitives and ready-made components (in three tiers -
"native", "styled" and "legacy", see below), and the `<jcl-applet>` custom
element for embedding JCL-based applets declaratively into plain HTML.

```javascript
import * as JCL from 'javascript-code-library'
const { ui } = JCL
// or: import { ui } from 'javascript-code-library'
```

> **Status:** this is by far JCL's largest and most actively evolving
> package - expect frequent additions and occasional breaking changes.
> This manual covers the concepts and the "core" API; the full, currently
> ~200-strong component catalogue is listed in
> [`ui-api-reference.md`](ui-api-reference.md).

## Do not bundle your own preact+htm!

You do not need to install `preact` or `htm` yourself - `JCL.ui` re-exports
its own, already-bundled `render`/`html` (plus `createContext`,
`toChildArray`, `cloneElement`, `isValidElement`, `createPortal`, and the
`preact/hooks` functions `useId`/`useRef`/`useState`/`useEffect`/
`useLayoutEffect`/`useCallback`/`useMemo`/`useContext`/`useErrorBoundary`).
**Importing preact directly yourself alongside JCL would create a second
preact instance and break hooks/context** - always go through `JCL.ui`:

```javascript
import * as JCL from 'javascript-code-library'
const { render, html } = JCL.ui

render(html`
  <${JCL.ui.vertical} Gap=${10}>
    <${JCL.ui.Title} Value="Hello, World!"/>
    <${JCL.ui.native.Button} onClick=${() => alert('Hi!')}>Click me<//>
  <//>
`, document.getElementById('rendering-target'))
```

## Prop-set conventions

Nearly every JCL UI component (the layout primitives, content views, and
all `native`/`styled`/`legacy` components) is a plain function
`(PropSet) => VNode` following the same conventions:

- **`Class`** (not `class`/`className`) - additional CSS class name(s)
- **`Style`** (not `style`) - additional inline CSS, appended after the
  component's own styling
- **`RestProps`** - an object of extra HTML attributes/event handlers
  spread directly onto the component's root DOM element (JCL does *not*
  spread the whole `PropSet` to avoid leaking internal props)
- **`children`** - nested content (standard preact/htm children); some
  components additionally accept an explicit **`Value`**
- components generally validate their props (via
  [`javascript-interface-library`](https://github.com/rozek/javascript-interface-library)'s
  `expect*`/`allow*` functions) and render a `JCL_ErrorIndicator` instead
  of throwing when rendering fails, so a broken prop rarely crashes the
  whole page - see `safelyRendered` below.

Every component is scoped with the CSS class `jcl-component` plus a
component-specific class (e.g. `jcl-component horizontal`, `jcl-component
native-button`); most install their own, component-scoped `<style>` rule on
first use via `installStylesheetFor` (see below) - some shared/base rules
also live in the central stylesheet assembled into this module.

## Layout primitives

Flex-based containers that arrange their `children`:

| Component | Behaviour |
|---|---|
| `fullsized` | fills its parent (`position:absolute` at `0/0/100%/100%`) |
| `centered` | centers its children (both axes) |
| `horizontal` | flex row, `Gap` prop for spacing |
| `vertical` | flex column, `Gap` prop for spacing |
| `tabular` | grid/table-like arrangement |
| `selective` | shows only one child at a time (e.g. for tab panels) |
| `stacked` | stacks children on top of each other (z-order) |

```javascript
html`<${ui.horizontal} Gap=${8}>
  <${ui.Icon} Value="star"/>
  <${ui.Label} Value="Favourite"/>
<//>`
```

## Typography & content views

`Dummy`, `Spacer`, `expandingSpacer`, `horizontalSeparator`,
`verticalSeparator` - spacing/structural helpers.

`Title`, `Subtitle`, `Label`, `Description`, `Fineprint` - single-line
typographic roles (`Title`/`Subtitle` render as `role="heading"`).

`TextlineView`, `TextView` - render plain (single-line / multi-line) text
from a `Value` prop.

`HTMLView`, `MarkdownView` - render (sanitized) HTML or Markdown from a
`Value` prop; `MarkdownView` lazily loads its rendering libraries on first
use via `loadMarkdownLibraries`/`loadedMarkdownRenderer` (see
[`JCL.misc`](misc-programming-manual.md) for the underlying Markdown/HTML
conversion functions). Its KaTeX math (`marked-katex-extension`) only
recognizes `$...$`/`$$...$$` when set off by whitespace, punctuation or a
line boundary - text directly adjacent to a `$` is left as plain text.

`ImageView`, `SVGView`, `WebView` - render an `<img>`, inline SVG, or
`<iframe>` respectively.

`Icon`, `FAIcon` - a JCL icon (from JCL's own icon set) and a
[Font Awesome](https://fontawesome.com/) icon.

## Hooks

### Environment

- **`useOnlineStatus(): boolean`** - tracks `navigator.onLine`
- **`useWindowSize(): { Width, Height }`** - tracks the viewport size
  (debounced via `requestAnimationFrame`)
- **`useRerenderer(): Function`** - returns a stable function that forces a
  re-render when called

### Customization & i18n

- **`useCustomization(): JCL_CustomizationContext`** - the current theme,
  swatch set, pointer/hover capability, motion/contrast preference, locale,
  direction and tooltip delay; must be called inside a
  `Customizable`/`OverlayBase`/`DialogBase`/applet subtree
- **`useI18n(): { Locale, Direction, Currency, localized, formattedNumber,
  formattedDate, formattedRelativeDate, formattedCurrency }`** - localized
  formatting/translation, built on top of `useCustomization`
- **`useConfiguration(initial?): [config, configure]`** - a small
  two-level-deep-merging configuration store (`initial` may be a plain
  object or a function returning one); `configure(ChangeSet)` merges
  `ChangeSet` into the current configuration (a key set to `undefined`
  deletes it)

### Drag & drop

- **`useDragging({ ViewRef, Container?, onlyFrom?, neverFrom?,
  onDragStart?, onDragContinuation?, onDragFinish?, onDragCancellation? })`**
  - generic pointer-based dragging (returns an `onPointerDown` handler)
- **`useClickDragging({ ... })`** - a click-driven variant of the above
- **`useDataDragSupport(...)` / `useDataDropSupport(...)`** - HTML5
  `dataTransfer`-based drag source/target support
- **`usePointerDragSupport({ ... })` / `usePointerDropSupport({ ... })`** -
  Pointer-Events-based drag source/target support (works for touch/pen too)
- **`useFileDropSupport(accept?, { multiple?, disabled?, onDragEnter?,
  onDragOver?, onDragLeave?, onDrop? })`** → `{ isOver, onDragEnter,
  onDragOver, onDragLeave, onDrop }` - file-drop-zone support, filtering by
  MIME type/extension via `accept` (comma/space-separated, like the HTML
  `accept` attribute)

### Overlay / Dialog / Toast context

- **`useOverlayContext()`**, **`useDialogContext()`**, **`useToastContext()`**
  - read the nearest `OverlayBase`/`DialogBase`/`ToastBase` context (e.g.
  to close the overlay/dialog/toast that hosts the current component)

### Library loading

- **`loadedLibrary(Specifier: string): Promise<any>`** - dynamically
  imports a bare-specifier module (resolved through the page's Import Map),
  cached per specifier - the mechanism several heavier components use to
  lazily load their optional third-party dependency (rich text/code
  editors, spreadsheet, ...) without ever bundling it; see
  [`bundling-npm-packages-as-esm.md`](bundling-npm-packages-as-esm.md)
  for how to host such a dependency yourself
- **`useLibraries(Loader: () => Promise<any>): boolean`** - a hook wrapper
  around `loadedLibrary` calls: returns `false` while loading, `true` once
  done, and (re-)throws into the calling component (to be caught by
  `safelyRendered`) if loading failed

## Building blocks

### `Customizable`

Provides a `JCL_CustomizationContext` (theme, swatches, locale, ...) to its
subtree - wrap a fragment of your UI in `<${ui.Customizable}>...<//>` to
give it its own, independent customization scope.

### `OverlayBase` / `DialogBase` / `ToastBase`

The building blocks behind JCL's overlay/dialog/toast system - not
typically used directly, but what `styled.Popover`/`styled.Tooltip`,
`legacy` dialog-like components etc. are built upon. `OverlayBase` accepts
a `JCL_Overlay` descriptor:

```typescript
type JCL_Overlay = {
  Name: string, isModal: boolean, Renderer: (PropSet) => any,
  onOpen?: Function, onClose?: Function,
  OffsetX?: number, OffsetY?: number,
  Width?: number, Height?: number,
  minWidth?: number, minHeight?: number, maxWidth?: number, maxHeight?: number,
  Role?: 'dialog'|'alertdialog', Label?: string,
}
```

## The three component tiers: `native`, `styled`, `legacy`

`JCL.ui` ships the same set of common form controls (buttons, checkboxes,
inputs, date/time pickers, drop-downs, ...) in up to three flavours,
accessible as `ui.native.*`, `ui.styled.*` and `ui.legacy.*`:

- **`native`** - thin wrappers around the browser's own `<input>`/`<button>`/...
  elements, styled minimally. Cheapest, most accessible-by-default, but
  limited to what native HTML form controls can do.
- **`styled`** - JCL's own, richer design-system components (buttons,
  badges, cards, sidebars, tables, command palettes, calendars, ...), built
  on the primitives above. This is the largest and fastest-growing tier -
  see [`ui-api-reference.md`](ui-api-reference.md#styled-components-uistyled)
  for the full, current list.
- **`legacy`** - components that wrap a heavier, optional third-party
  library loaded on demand via `loadedLibrary`/`useLibraries` - a rich text
  editor (`squire-rte`), a code editor (CodeMirror 6), a spreadsheet
  (`jspreadsheet-ce`), drawing/bitmap editors, a Kanban board, a chat view,
  a data-flow process view, a QR code view, and a couple of small
  drop-in replacements for native controls that need broader
  cross-browser/cross-device consistency (`PseudoFileInput`,
  `PseudoDropDown`). See
  [`bundling-npm-packages-as-esm.md`](bundling-npm-packages-as-esm.md),
  [`bundling-jspreadsheet.md`](bundling-jspreadsheet.md) and
  [`codemirror-bundles.md`](codemirror-bundles.md) for how to host their
  underlying libraries.

```javascript
html`<${ui.native.TextlineInput} Value=${Name} onInput=${(e) => setName(e.target.value)}/>`
html`<${ui.styled.Button} Variant="primary">Save<//>`
html`<${ui.legacy.CodeEditor} Value=${Source} Language="typescript"/>`
```

Input components protect, where needed, against an external change (e.g.
from another CRDT node) overwriting the user's in-progress local input.

## Error handling: `safelyRendered`

Most components wrap their render logic in `safelyRendered(() => ...)`,
which catches any exception thrown while rendering and shows a
`JCL_ErrorIndicator` in its place instead of letting the error propagate
and take down the rest of the page. You can use the same pattern in your
own components.

## The `<jcl-applet>` custom element

For buildless / declarative use, `JCL.ui` registers a `jcl-applet` custom
element (`JCL_AppletElement`). Its `src` attribute holds JavaScript source
(HTML-attribute-escaped, see
[`escapedHTMLAttribute`](misc-api-reference.md#escapedhtmlattributeoriginalvalue-string-string))
which is compiled into an `async (PropSet) => ...` function and rendered
via `AppletView` as soon as the element is connected to the document:

```html
<jcl-applet src="return html`&lt;${ui.Title} Value=&quot;Hi from an applet!&quot;/&gt;`"></jcl-applet>
```

- **`AppletView(PropSet)`** - hosts a `Renderer` function, wires up
  `Customizable` and tracks OS-level customization changes (color scheme,
  pointer/hover capability, reduced motion, contrast preference, locale)
- **`AppletFailingWith(Message: string): Renderer`** - returns a renderer
  that just displays `Message` via `JCL_ErrorIndicator` (used internally
  when compiling or running an applet's script fails)

See [`ui-api-reference.md`](ui-api-reference.md) for the complete,
categorized list of every `JCL.ui` member.
