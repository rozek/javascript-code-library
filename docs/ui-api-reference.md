# JCL.ui — API Reference

See [`ui-programming-manual.md`](ui-programming-manual.md) for a narrative
introduction, prop-set conventions, and concrete examples. This document
lists every member currently bundled under `JCL.ui`, grouped exactly as
they appear in the source's `export const ui = { ... }` declaration. All
members are also available as named exports of the package (e.g. `import {
horizontal } from 'javascript-code-library'`).

> Unless noted otherwise, every component below follows the common
> prop-set conventions (`Class`, `Style`, `RestProps`, `children`/`Value`)
> described in the [Programming Manual](ui-programming-manual.md#prop-set-conventions)
> and returns a preact `VNode`. Full per-prop signatures for the ~150
> `native`/`styled`/`legacy` components are not yet reproduced here -
> follow the "Where defined" hint (function name) to look them up in
> `src/javascript-code-library.ts` until a generated reference exists.

## Re-exported preact/htm

`render`, `html`, `createContext`, `toChildArray`, `cloneElement`,
`isValidElement`, `createPortal`, `useId`, `useRef`, `useState`,
`useEffect`, `useLayoutEffect`, `useCallback`, `useMemo`, `useContext`,
`useErrorBoundary` - straight re-exports of `htm/preact`, `preact`,
`preact/compat` and `preact/hooks`. See the
[preact](https://preactjs.com/guide/v10/api-reference) and
[htm](https://github.com/developit/htm) documentation.

## Library loading

| Name | Signature |
|---|---|
| `loadedLibrary` | `(Specifier: string) => Promise<any>` |
| `useLibraries` | `(Loader: () => Promise<any>) => boolean` |

## Hooks

| Name | Signature |
|---|---|
| `useOnlineStatus` | `() => boolean` |
| `useWindowSize` | `() => { Width: number, Height: number }` |
| `useRerenderer` | `() => Function` |
| `useCustomization` | `() => JCL_CustomizationContext` |
| `useI18n` | `() => JCL_i18n` |
| `useConfiguration` | `(initial?: object \| (() => object)) => [object, (ChangeSet: object) => void]` |
| `useDragging` | `({ ViewRef, Container?, onlyFrom?, neverFrom?, onDragStart?, onDragContinuation?, onDragFinish?, onDragCancellation? }) => Function \| undefined` |
| `useClickDragging` | same shape as `useDragging` |
| `useDataDragSupport` | `(...)` - HTML5 `dataTransfer` drag-source support |
| `useDataDropSupport` | `(...)` - HTML5 `dataTransfer` drop-target support |
| `usePointerDragSupport` | `({ ... }) => ...` - Pointer-Events drag-source support |
| `usePointerDropSupport` | `({ ... }) => ...` - Pointer-Events drop-target support |
| `useFileDropSupport` | `(accept?: string \| string[], { multiple?, disabled?, onDragEnter?, onDragOver?, onDragLeave?, onDrop? }?) => { isOver: boolean, onDragEnter, onDragOver, onDragLeave, onDrop }` |
| `useOverlayContext` | `() => JCL_OverlayContext` |
| `useDialogContext` | `() => JCL_DialogContext` |
| `useToastContext` | `() => JCL_ToastContext` |

## Contexts (types/values)

`JCL_PointerDnDContext`, `JCL_OverlayContext`, `JCL_DialogContext`,
`JCL_ToastContext` - preact Context objects backing the hooks above.

## Low-level utilities

| Name | Signature |
|---|---|
| `installStylesheetFor` | `(Name: string, CSS: string) => void` — installs a component-scoped `<style>` once per `Name` |
| `uninstallStylesheetFor` | `(Name: string) => void` |
| `safelyRendered` | `(Renderer: () => any) => any` — catches render-time errors, shows `JCL_ErrorIndicator` instead |
| `consumeEvent` (alias `consumingEvent`) | `(Event: Event, completely?: boolean) => void` — `preventDefault()` (+ `stopPropagation()` if `completely`) |
| `MediaQueryMatches` | `(Query: string) => boolean` — one-shot `window.matchMedia(Query).matches` |
| `PseudoRef` | `(Value?: any) => { current: any }` — a plain, non-reactive ref-like object |
| `JCL_ErrorIndicator` | `(PropSet: { Error, ErrorResetter? }) => VNode` — renders a caught error |
| `normalizedName` | `(Name: string) => string` |
| `parseablePropSet` | `(PropSet: object) => object` — normalizes a raw `PropSet` before destructuring |
| `TextlineFromString` | `(Value?: string) => string \| undefined` |
| `TextFromString` | `(Value?: string) => string \| undefined` |

## Building blocks

| Name | Signature | Notes |
|---|---|---|
| `Customizable` | `(PropSet: { children }) => VNode` | provides a fresh `JCL_CustomizationContext` to its subtree |
| `OverlayBase` | `(PropSet: JCL_Overlay) => VNode` | see the Programming Manual for the `JCL_Overlay` shape |
| `DialogBase` | `(PropSet) => VNode` | modal dialog, built on `OverlayBase` |
| `ToastBase` | `(PropSet) => VNode` | transient notification, built on `OverlayBase` |

## Layout primitives

`fullsized`, `centered`, `horizontal`, `vertical`, `tabular`, `selective`,
`stacked` - all `(PropSet: { Class?, Style?, Gap?, RestProps?, children }) => VNode`.
See the [Programming Manual](ui-programming-manual.md#layout-primitives)
for what each does.

## Typography & content views

| Name | Signature | Notes |
|---|---|---|
| `Dummy` | `(PropSet) => VNode` | renders nothing (structural placeholder) |
| `Spacer` | `(PropSet) => VNode` | fixed-size gap |
| `expandingSpacer` | `(PropSet) => VNode` | flex-growing gap |
| `horizontalSeparator` | `(PropSet) => VNode` | horizontal rule/divider |
| `verticalSeparator` | `(PropSet) => VNode` | vertical rule/divider |
| `Title` | `(PropSet: { Value?, Class?, ... }) => VNode` | `role="heading"` `aria-level="1"` |
| `Subtitle` | same shape as `Title` | `aria-level="2"` |
| `Label` | `(PropSet) => VNode` | single-line label text |
| `Description` | `(PropSet) => VNode` | secondary/muted text |
| `Fineprint` | `(PropSet) => VNode` | small print |
| `TextlineView` | `(PropSet: { Value? }) => VNode` | single-line text |
| `TextView` | `(PropSet: { Value? }) => VNode` | multi-line text |
| `HTMLView` | `(PropSet: { Value? }) => VNode` | renders (sanitized) HTML |
| `MarkdownView` | `(PropSet: { Value? }) => VNode` | renders Markdown, lazily loads its renderer |
| `MarkdownRenderer` | *(getter)* `=> any` | the underlying `marked` instance, once loaded |
| `loadMarkdownLibraries` | `() => Promise<void>` | pre-loads `marked` + extensions |
| `loadedMarkdownRenderer` | `() => Promise<any>` | resolves once the renderer is ready |
| `ImageView` | `(PropSet: { Value?/Src? }) => VNode` | renders an `<img>` |
| `SVGView` | `(PropSet: { Value? }) => VNode` | renders inline SVG |
| `WebView` | `(PropSet: { Value?/Src? }) => VNode` | renders an `<iframe>` |
| `Icon` | `(PropSet: { Value }) => VNode` | JCL's own icon set |
| `FAIcon` | `(PropSet: { Value }) => VNode` | Font Awesome icon |

## Applet support

| Name | Signature |
|---|---|
| `AppletView` | `(PropSet: { renderer: JCL_Renderer, ... }) => VNode` |
| `AppletFailingWith` | `(Message: string) => JCL_Renderer` |
| `JCL_AppletElement` *(class, not part of the `ui` bundle itself — registered as `<jcl-applet>`)* | `extends HTMLElement`, reads its `src` attribute (see [`unescapedHTMLAttribute`](misc-api-reference.md)) |

## `native` components (`ui.native.*`)

Thin wrappers around native HTML form controls (`(PropSet) => VNode`,
common conventions apply):

`Button`, `Checkbox`, `Radiobutton`, `Gauge`, `Progressbar`, `Slider`,
`TextlineInput`, `PasswordInput`, `NumberInput`, `EMailAddressInput`,
`PhoneNumberInput`, `URLInput`, `TimeInput`, `DateTimeInput`, `DateInput`,
`WeekInput`, `MonthInput`, `SearchInput`, `FileInput`, `ColorInput`,
`DropDown`, `TextInput`.

The input elements have a special protection which prevents external changes (e.g. made by an AI assistant or another peer in a CRDT session) from overwriting local input while the element has the keyvoard focus.

## `styled` components (`ui.styled.*`)

JCL's own design-system tier, grouped by area:

**Form controls** - `Button`, `Icon`, `FAIcon`, `Checkbox`, `Radiobutton`,
`Gauge`, `Progressbar`, `Slider`, `TextlineInput`, `PasswordInput`,
`NumberInput`, `EMailAddressInput`, `PhoneNumberInput`, `URLInput`,
`TimeInput`, `DateTimeInput`, `DateInput`, `WeekInput`, `MonthInput`,
`SearchInput`, `FileInput`, `ColorInput`, `DropDown`, `TextInput`,
`Switch`, `MultiSwitch`, `ThemeSwitch`, `RadioGroup`, `Combobox`, `Field`,
`InputGroup`, `InputGroupAddon`

Again, the input elements have a special protection which prevents external changes (e.g. made by an AI assistant or another peer in a CRDT session) from overwriting local input while the element has the keyvoard focus.

**Feedback & status** - `Badge`, `Spinner`, `Kbd`, `Avatar`, `Skeleton`,
`Toast`, `Tooltip`, `Popover`

**Navigation** - `Breadcrumb`, `Pagination`, `TabStrip`

**Menus & commands** - `DropDownMenu`, `DropDownMenuItem`,
`DropDownMenuSeparator`, `DropDownMenuGroup`, `DropDownMenuSubMenu`,
`CommandPalette`, `CommandItem`, `CommandGroup`

**Cards** - `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
`CardAction`, `CardContent`, `CardFooter`

**Sidebar** - `Sidebar`, `SidebarHeader`, `SidebarContent`,
`SidebarFooter`, `SidebarItem`, `SidebarSeparator`, `SidebarGroup`

**Tables** - `Table`, `TableHeader`, `TableBody`, `TableFooter`,
`TableRow`, `TableHead`, `TableCell`, `DataTable`

**Date/time** - `MonthView`, `QuarterView`, `YearView`, `DatePicker`

**Disclosure** - `Accordion`, `AccordionFold`

## `legacy` components (`ui.legacy.*`)

Components wrapping a heavier, optional third-party library, lazily loaded
via `loadedLibrary`/`useLibraries` (see the bundling guides linked from the
[Programming Manual](ui-programming-manual.md#the-three-component-tiers-native-styled-legacy)):

| Name | Backing library |
|---|---|
| `PseudoFileInput` | — (pure JCL, cross-browser-consistent file input) |
| `PseudoDropDown` | — (pure JCL, cross-browser-consistent drop-down) |
| `TabStrip` | — |
| `AccordionFold` | — |
| `FlatListView` | — |
| `NestedListView` | — |
| `RichTextEditor` | `squire-rte` + `dompurify` |
| `CodeEditor` | CodeMirror 6 |
| `DrawingEditor` | — |
| `BitmapEditor` | — |
| `RealDrawEditor` | — |
| `Spreadsheet` | `jspreadsheet-ce` + `jsuites` (+ optional `@formulajs/formulajs`) |
| `KanbanBoard` | — |
| `NoteBoard` | — |
| `ChatView` | — |
| `DataFlowProcessView` | — |
| `QRCodeView` | `uqr` |

Plus two spreadsheet-specific helpers exported alongside `Spreadsheet`:

| Name | Signature |
|---|---|
| `registerSpreadsheetFormula` | `(Name: string, Fn: Function) => void` — e.g. `registerSpreadsheetFormula('MWST', (netto, rate=19) => netto*rate/100)`, then use `=MWST(A1)` in a cell |
| `registerSpreadsheetFormulas` | `(FormulaSet: object) => void` — bulk-registers a whole module, e.g. `registerSpreadsheetFormulas(await import('@formulajs/formulajs'))` |
| `WorldPositionOfPort` | `(Node, Port) => { x, y }` — used by `DataFlowProcessView` |
