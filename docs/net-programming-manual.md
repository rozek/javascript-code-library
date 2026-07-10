# JCL.net — Programming Manual

`JCL.net` bundles JCL's networking helpers: connectivity checks, a hardened
`fetch()` wrapper with timeouts/retries/structured errors, a handful of
content-negotiated convenience fetchers, an HTTP status lookup table, and a
small client for searching the web via [SearXNG](https://docs.searxng.org/)
instances.

```javascript
import * as JCL from 'javascript-code-library'
const { net } = JCL
// or: import { net } from 'javascript-code-library'
```

> **Status:** like the rest of JCL, this package is under active
> development. The functions below reflect the current source and are
> considered reasonably stable, but signatures may still change.

## Checking connectivity

```javascript
if (await net.InternetIsAvailable()) {
  // ...
}

if (await net.ServerIsReachable('https://api.example.com')) {
  // ...
}
```

`InternetIsAvailable` first does a cheap, synchronous `navigator.onLine`
check and, if that passes, calls `ServerIsReachable` against a well-known
public endpoint (`https://cloudflare.com/cdn-cgi/trace` by default).
`ServerIsReachable` issues a `HEAD` request against the *origin* of the
given URL (so it does not matter which path you pass) and resolves to
`true`/`false` - it never throws, and it aborts (resolving to `false`) after
`Timeout` milliseconds (default `5000`).

## Fetching resources

`fetched()` is a drop-in replacement for the browser's `fetch()` that adds:

- a **timeout** (`OptionSet.timeout`, milliseconds, default `10000`)
- optional **retries** on `429`/`503` responses, honouring the `Retry-After`
  header when present (`OptionSet.allowRetries`, `OptionSet.maxRetries`,
  default `3`)
- **structured errors**: instead of a generic network error, `fetched()`
  throws with descriptive names such as `ServerUnreachable`,
  `NotConnected`, `CORSblocked`, `RequestAborted`, `AuthorizationFailure`,
  `ForbiddenRequest`, `MissingResource`, `RateLimitExceeded`,
  `InternalServerError`, `ServiceUnavailable`, `GatewayTimeout` or the
  generic `HTTPError` (all raised via
  [`javascript-interface-library`'s](https://github.com/rozek/javascript-interface-library)
  `throwError`, i.e. as `Error`s whose `message` starts with the name above)
- you may still pass your own `AbortSignal` via `OptionSet.signal` - it is
  combined with the internal timeout signal

```javascript
try {
  const Response = await net.fetched('https://api.example.com/data', {
    timeout:5000, allowRetries:true, maxRetries:5,
  })
} catch (Signal) {
  console.error(Signal.message)   // e.g. "ServerUnreachable: ..."
}
```

On top of `fetched()`, a set of convenience functions fetch *and* decode a
resource in one step:

```javascript
const Text   = await net.fetchedText  (URL)   // -> string
const JSON   = await net.fetchedJSON  (URL)   // -> parsed JSON value
const Buffer = await net.fetchedBinary(URL)   // -> ArrayBuffer
const Blob   = await net.fetchedBlob  (URL)   // -> Blob
const DataURL= await net.fetchedDataURL(URL)  // -> "data:...;base64,..."
```

Each accepts the same `(URL, OptionSet)` signature as `fetched()`.

### Content-negotiated fetching

`fetchedAsText`, `fetchedAsHTML` and `fetchedAsMarkdown` inspect the
response's `Content-Type` header and convert HTML, DOCX, PDF or Markdown
documents accordingly (reusing the converters from [`JCL.misc`](misc-programming-manual.md)),
falling back to plain text for other textual MIME types:

```javascript
const PlainText = await net.fetchedAsText('https://example.com/report.docx')
const HTML      = await net.fetchedAsHTML('https://example.com/notes.md')
const Markdown  = await net.fetchedAsMarkdown('https://example.com/page.html')
```

Unsupported content types throw an `UnsupportedMIMEType` error.

## HTTP status helpers

```javascript
net.DescriptionOfHTTPStatus(404)     // -> 'Not Found'
net.HTTPMessageForStatus[404]        // -> 'Not Found' (the raw lookup table)
```

## Searching the web with SearXNG

`net.SearXNG` is a small, stateful client for querying public or
self-hosted [SearXNG](https://docs.searxng.org/) instances (a
privacy-respecting metasearch engine) and returning a plain list of result
URLs.

### Configuration

```javascript
net.SearXNG.Configuration = {
  ServerChoice:'public',            // 'public' | 'custom'
  customServer:{ Authentication:'none' },     // used when ServerChoice === 'custom'
  ServerBlacklist:[],               // SearXNG server URLs to never use
  ServerWhitelist:[ 'http://localhost:8080' ],// non-https servers that are still trusted
  ResultBlacklist:[],               // result URLs (hosts) to always filter out
  ResultWhitelist:[],               // if non-empty, only these result URLs are allowed
}
```

You can also read/write individual settings (`net.SearXNG.ServerChoice`,
`net.SearXNG.customServer`, `net.SearXNG.customServerURL`, `...Authentication`,
`...Credentials`, `net.SearXNG.ServerBlacklist`/`ServerWhitelist`,
`net.SearXNG.ResultBlacklist`/`ResultWhitelist`) and persist the whole
configuration in `localStorage`:

```javascript
net.SearXNG.preserveConfiguration()          // saves to localStorage
net.SearXNG.hasPreservedConfiguration        // boolean
net.SearXNG.restoreConfiguration()           // loads from localStorage (if any)
```

### Querying

```javascript
const ResultURLs = await net.SearXNG.query('javascript interface library', {
  language:'en', categories:'general', num_results:20,
})
```

When `ServerChoice` is `'public'`, `query()` automatically picks a random
server from the list of public SearXNG instances (fetched once via
`net.SearXNG.publicServers()` and cached for the session), skipping
blacklisted/non-whitelisted servers. When a query fails with a server-side
error (unreachable, unauthorized, forbidden, or an internal server error),
that server is automatically added to the blacklist so the next query picks
a different one. On any other failure, `query()` logs a warning and resolves
to an empty array rather than throwing.

Result URLs are filtered through `ResultBlacklist`/`ResultWhitelist`
(compared without their query string) via `net.SearXNG.ResultIsAcceptable`,
which you can also call directly, along with `ServerIsAcceptable`,
`ServerIsBlacklisted`/`ServerIsWhitelisted` and
`ResultIsBlacklisted`/`ResultIsWhitelisted`.

See [`net-api-reference.md`](net-api-reference.md) for the complete list of
members.
