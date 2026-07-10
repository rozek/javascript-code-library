# JCL.net — API Reference

See [`net-programming-manual.md`](net-programming-manual.md) for a
narrative introduction with examples. All members are also available as
named exports of the package (e.g. `import { fetched } from
'javascript-code-library'`), `JCL.net.*` is just a curated bundle of them.

## Connectivity

### `InternetIsAvailable(ServerURL?: string, Timeout?: number): Promise<boolean>`

Checks `navigator.onLine` first, then calls `ServerIsReachable`.
`ServerURL` defaults to `https://cloudflare.com/cdn-cgi/trace`, `Timeout`
to `5000` ms. Never throws.

### `ServerIsReachable(ServerURL: string, Timeout?: number): Promise<boolean>`

Issues a `HEAD` request against the *origin* of `ServerURL` and resolves to
`true`/`false`. `Timeout` defaults to `5000` ms. Never throws.

## Fetching

### `fetched(ResourceURL: string, OptionSet?: object): Promise<Response>`

`fetch()` wrapper with timeout, optional retries and structured errors.
`OptionSet` accepts all standard `fetch()` options plus:

| Option | Type | Default | Meaning |
|---|---|---|---|
| `timeout` | `number` | `10000` | abort after this many milliseconds |
| `allowRetries` | `boolean` | `false` | retry on HTTP `429`/`503` |
| `maxRetries` | `number` | `3` | maximum number of retries (honours `Retry-After`) |
| `signal` | `AbortSignal` | — | your own abort signal, combined with the internal timeout |

Throws an `Error` whose `message` is prefixed with one of:
`NotConnected`, `ServerUnreachable`, `RequestAborted`, `CORSblocked`,
`AuthorizationFailure` (401), `ForbiddenRequest` (403),
`MissingResource` (404), `RequestTimeout` (408), `RateLimitExceeded` (429),
`InternalServerError` (500), `BadGateway` (502),
`ServiceUnavailable` (503), `GatewayTimeout` (504), or the generic
`HTTPError` for any other `status >= 400`.

### `fetchedText(URL: string, OptionSet?: object): Promise<string>`

`fetched()` + `Response.text()`.

### `fetchedJSON(URL: string, OptionSet?: object): Promise<any>`

`fetched()` + `Response.json()`.

### `fetchedBinary(URL: string, OptionSet?: object): Promise<ArrayBuffer>`

`fetched()` + `Response.arrayBuffer()`.

### `fetchedBlob(URL: string, OptionSet?: object): Promise<Blob>`

`fetched()` + `Response.blob()`.

### `fetchedDataURL(URL: string, OptionSet?: object): Promise<string>`

`fetched()`, then converts the response body to a `data:` URL via
`FileReader.readAsDataURL`.

### `fetchedAsText(URL: string, OptionSet?: object): Promise<string>`

Fetches `URL` and converts its body to plain text, dispatching on the
response's `Content-Type`: HTML → [`HTMLasText`](misc-api-reference.md),
DOCX → [`DOCXasText`](misc-api-reference.md), PDF →
[`PDFasText`](misc-api-reference.md), Markdown →
[`MarkdownAsText`](misc-api-reference.md); any other `text/*`,
`*javascript*`, `*typescript*`, `*json*`, `*css*`, `*svg*` or `*xml*` type is
returned as-is. Throws `UnsupportedMIMEType` for anything else.

### `fetchedAsHTML(URL: string, OptionSet?: object): Promise<string>`

Like `fetchedAsText`, but converts to HTML (`text/html` is returned as-is,
DOCX via `DOCXasHTML`, Markdown via `MarkdownAsHTML`). Throws
`UnsupportedMIMEType` for anything else.

### `fetchedAsMarkdown(URL: string, OptionSet?: object): Promise<string>`

Like `fetchedAsText`, but converts to Markdown (HTML via `HTMLasMarkdown`,
DOCX via `DOCXasMarkdown`, `text/markdown` is returned as-is). Throws
`UnsupportedMIMEType` for anything else.

## HTTP status

### `DescriptionOfHTTPStatus(StatusCode: number): string`

Returns the standard reason phrase for an HTTP status code in the range
100-599 (e.g. `404` → `'Not Found'`), or `''` if unknown.

### `HTTPMessageForStatus: { [code: number]: string }`

The raw lookup table backing `DescriptionOfHTTPStatus`, covering the
standard 1xx-5xx status codes.

## SearXNG client (`SearXNG`)

A stateful object (not a class - use it as a singleton, or read/copy its
configuration if you need multiple independent setups).

### `Configuration: object` (getter/setter)

```typescript
{
  ServerChoice:    'public' | 'custom',
  customServer:    { ServerURL?: string, Authentication:'none'|'basic'|'bearer', Credentials?: string },
  ServerBlacklist: string[],
  ServerWhitelist: string[],
  ResultBlacklist: string[],
  ResultWhitelist: string[],
}
```

### `preserveConfiguration(): void`

Persists `Configuration` to `localStorage['SearXNG-Configuration']`.

### `restoreConfiguration(): void`

Restores `Configuration` from `localStorage`, if present. Logs a warning
and leaves the current configuration untouched on parse failure.

### `hasPreservedConfiguration: boolean` (read-only)

Whether a configuration is currently stored in `localStorage`.

### `customServer`, `customServerURL`, `customServerAuthentication`, `customServerCredentials`

Individual getters/setters for the `'custom'` server entry.

### `publicServers(OptionSet?: { ServiceURL?: string, Signal?: AbortSignal, ...fetch options }): Promise<string[]>`

Fetches and returns the list of public SearXNG server URLs (default source:
`https://searx.space/data/instances.json`), pre-filtered through
`ServerIsAcceptable`.

### `ServerBlacklist`, `ServerWhitelist`: `string[]` (getter/setter)

### `ServerIsBlacklisted(ServerURL: string): boolean`
### `ServerIsWhitelisted(ServerURL: string): boolean`
### `ServerIsAcceptable(ServerURL: string): boolean`

`true` when the server is `https://` (or explicitly whitelisted) **and**
not blacklisted.

### `ServerChoice: 'public' | 'custom'` (getter/setter)

### `nextServer(): Promise<{ ServerURL, Authentication, Credentials }>`

Picks the next server to use for a query, according to `ServerChoice`
(random public server, or the configured custom server).

### `query(SearchPhrase: string, Options?: object): Promise<string[]>`

```typescript
Options?: {
  ServerURL?: string, ServerAuthentication?: 'none'|'basic'|'bearer', ServerCredentials?: string,
  language?: string,           // ISO language code, default 'en'
  categories?: 'general',      // currently only 'general' is accepted
  num_results?: number,        // default 20
}
```

Runs a search against a SearXNG instance and returns the list of result
URLs (filtered through `ResultIsAcceptable`). On a server-side failure the
server is blacklisted and an empty array is returned instead of throwing
(network/parse-level failures are logged but likewise resolve to `[]`);
only an explicit `Aborted`/`InternalError` from within `query()` itself
throws.

### `ResultBlacklist`, `ResultWhitelist`: `string[]` (getter/setter)

Compared without the URL's query string.

### `ResultIsBlacklisted(ResultURL: string): boolean`
### `ResultIsWhitelisted(ResultURL: string): boolean`
### `ResultIsAcceptable(ResultURL: string): boolean`

`true` when not blacklisted **and** (the whitelist is empty **or** the URL
is whitelisted).
