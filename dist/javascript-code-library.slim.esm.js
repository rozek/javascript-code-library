import { ValueIsObject as xl, ValueIsPlainObject as wl, quoted as vt, ValueIsStringMatching as Bt, ValueIsString as rt, ValueIsTextline as Ne, ValueIsEMailAddress as Xn, ValueIsListSatisfying as je, ValueIsOneOf as fe, ValueIsFunction as Nt, expectURL as ii, expectCardinal as vl, expectPlainObject as xt, allowedCardinal as zr, expectIntegerInRange as Cl, ValueIsURL as ot, allowListSatisfying as zt, expectTextline as Xt, allowURL as Wn, allowOneOf as St, allowTextline as ln, allowCardinal as va, expectOneOf as Gn, ValueIsIntegerInRange as Ca, allowPlainObject as si, ValueIsFiniteNumber as li, expectFunction as Wt, ValueIsBoolean as gn, ValueIsNumber as wt, ValueIsText as $n, ValueIsColor as Yn, ValueIsOrdinal as kn, expectStringMatching as kl, allowFunction as Re, expectString as jl, ValueIsArray as ci, allowBoolean as Kt, expectText as Ye, expectBoolean as di, allowString as ka, allowOrdinal as $l, ValueIsNumberInRange as no, expectOrdinal as Jn, expectInstanceOf as No, ValueIsCardinal as Il, ValueIsInteger as Dl, ValidatorForClassifier as Or, acceptNil as Ll, rejectNil as Sl } from "javascript-interface-library";
export * from "javascript-interface-library";
import { supportsPassiveEvents as Db, supportsPointerEvents as Lb, supportsTouchEvents as Sb, deviceType as Mb, primaryInput as Tb } from "detect-it";
import { html as b, render as ia } from "htm/preact";
import { isValidElement as ui, cloneElement as Ml, toChildArray as Yt, createContext as Jt, createRef as Tl, Component as Rl } from "preact";
import { createPortal as Dn } from "preact/compat";
import { useErrorBoundary as ja, useContext as lt, useMemo as Zt, useCallback as se, useLayoutEffect as $a, useEffect as Ce, useState as Be, useRef as q, useId as Dt } from "preact/hooks";
function qn(e) {
  return xl(e);
}
function De(e) {
  return wl(e);
}
const Al = (async () => {
}).constructor;
function Fl() {
  typeof window < "u" && window.addEventListener("unhandledrejection", (e) => {
    console.error(
      "caught unhandled error in Promise:",
      e.reason?.stack ?? e.reason?.message,
      e
    );
  });
}
function ce(e) {
  debugger;
  const t = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);
  if (t == null)
    throw new Error(e);
  {
    const n = new Error(t[2]);
    throw n.name = t[1], n;
  }
}
function zl(e) {
  return ce(
    "ReadOnlyProperty: property " + vt(e) + " must not be set"
  );
}
function et(e, t) {
  const n = Or(e, Ll, t), o = Or(e, Sl, t);
  return [n, n, o, o];
}
const Ol = /^[a-z$_][a-z$_0-9]*$/i;
function Vl(e) {
  return Bt(e, Ol);
}
const [Yg, Jg, El, Zg] = /* @__PURE__ */ et(Vl, "JCL identifier");
function Ia(e) {
  return rt(e) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e);
}
const [Nl, Qg, dn, Pg] = /* @__PURE__ */ et(Ia, "name");
function pi(e) {
  return rt(e) && /^[a-zA-Z][a-zA-Z0-9_-]*(\.[a-zA-Z][a-zA-Z0-9_-]*)*$/.test(e);
}
const [em, tm, hi, nm] = /* @__PURE__ */ et(pi, "path");
function Bo(e) {
  return rt(e) && /^[+]?[\d\s()\-.]{7,}$/.test(e) && e.replace(/\D/g, "").length >= 3;
}
const [om, am, rm, im] = /* @__PURE__ */ et(Bo, "phone number");
function sm(e) {
  return Ne(e) && (e.indexOf(",") < 0 ? Xn(e) : je(
    e.replace(/\s*,\s*/g, ",").split(","),
    Xn
  ));
}
const Bl = /* @__PURE__ */ new Set([
  "aa",
  "ab",
  "ae",
  "af",
  "ak",
  "am",
  "an",
  "ar",
  "as",
  "av",
  "ay",
  "az",
  "ba",
  "be",
  "bg",
  "bh",
  "bi",
  "bm",
  "bn",
  "bo",
  "br",
  "bs",
  "ca",
  "ce",
  "ch",
  "co",
  "cr",
  "cs",
  "cu",
  "cv",
  "cy",
  "da",
  "de",
  "dv",
  "dz",
  "ee",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fj",
  "fo",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "gn",
  "gu",
  "gv",
  "ha",
  "he",
  "hi",
  "ho",
  "hr",
  "ht",
  "hu",
  "hy",
  "hz",
  "ia",
  "id",
  "ie",
  "ig",
  "ii",
  "ik",
  "io",
  "is",
  "it",
  "iu",
  "ja",
  "jv",
  "ka",
  "kg",
  "ki",
  "kj",
  "kk",
  "kl",
  "km",
  "kn",
  "ko",
  "kr",
  "ks",
  "ku",
  "kv",
  "kw",
  "ky",
  "la",
  "lb",
  "lg",
  "li",
  "ln",
  "lo",
  "lt",
  "lu",
  "lv",
  "mg",
  "mh",
  "mi",
  "mk",
  "ml",
  "mn",
  "mr",
  "ms",
  "mt",
  "my",
  "na",
  "nb",
  "nd",
  "ne",
  "ng",
  "nl",
  "nn",
  "no",
  "nr",
  "nv",
  "ny",
  "oc",
  "oj",
  "om",
  "or",
  "os",
  "pa",
  "pi",
  "pl",
  "ps",
  "pt",
  "qu",
  "rm",
  "rn",
  "ro",
  "ru",
  "rw",
  "sa",
  "sc",
  "sd",
  "se",
  "sg",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "ss",
  "st",
  "su",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "ti",
  "tk",
  "tl",
  "tn",
  "to",
  "tr",
  "ts",
  "tt",
  "tw",
  "ty",
  "ug",
  "uk",
  "ur",
  "uz",
  "ve",
  "vi",
  "vo",
  "wa",
  "wo",
  "xh",
  "yi",
  "yo",
  "za",
  "zh",
  "zu"
]);
function Wl(e) {
  return rt(e) && Bl.has(e.toLowerCase());
}
const [Hl, lm, cm, dm] = /* @__PURE__ */ et(Wl, "ISO 639-1 Language Code"), _l = /^[a-z0-9]+([._+-][a-z0-9]+)*\/[a-z0-9]+([._+-][a-z0-9]+)*(\s*;\s*[a-z0-9-]+=[a-z0-9.+-]+)*$/i;
function Zn(e) {
  return Bt(e, _l);
}
const [um, pm, Gl, hm] = /* @__PURE__ */ et(Zn, "MIME type"), Kl = [
  "application/javascript",
  "application/typescript",
  "application/json",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function fm(e) {
  return fe(e, Kl);
}
const Ul = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function gm(e) {
  return fe(e, Ul);
}
const ql = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/markdown",
  "text/plain"
];
function mm(e) {
  return fe(e, ql);
}
const Xl = [
  "image/apng",
  "image/avif",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
function bm(e) {
  return fe(e, Xl);
}
const Yl = new RegExp(
  "^[^\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F-\\x9F\\u2028\\u2029\\uFFF9-\\uFFFB]*$"
);
function oo(e) {
  return rt(e) && Yl.test(e);
}
function fi(e) {
  return (qn(e) || Nt(e)) && Nt(e.then);
}
const [ym, xm, wm, vm] = /* @__PURE__ */ et(fi, "JavaScript Promise or thenable");
function Jl(e) {
  return typeof e == "object" && e != null && typeof e.aborted == "boolean" && typeof e.addEventListener == "function";
}
const [Zl, Cm, km, jm] = /* @__PURE__ */ et(Jl, "JavaScript abort signal");
function Ql() {
  return typeof window < "u" && "__TAURI_INTERNALS__" in window;
}
function $m() {
  return typeof window < "u" && !Ql();
}
async function Pl(e = "https://cloudflare.com/cdn-cgi/trace", t = 5e3) {
  return typeof navigator < "u" && !navigator.onLine ? !1 : await gi(e, t);
}
async function gi(e, t = 5e3) {
  ii("server URL", e), vl("timeout", t);
  const n = new URL(e).origin;
  if (n === window.location.origin)
    return !0;
  const o = new AbortController(), a = setTimeout(
    () => o.abort(),
    t
  );
  try {
    const r = await fetch(n, {
      method: "HEAD",
      signal: o.signal,
      mode: "no-cors",
      cache: "no-cache"
    });
    return clearTimeout(a), r.type === "basic" || r.type === "opaque";
  } catch {
    return clearTimeout(a), !1;
  }
}
async function It(e, t = {}) {
  ii("resource URL", e), xt("option set", t), t = { ...t }, typeof navigator < "u" && !navigator.onLine && ce(
    "NotConnected: the browser is not connected"
  );
  const n = zr("request timeout", t.timeout) ?? 10 * 1e3, o = t.allowRetries === !0, a = zr("maximum retries", t.maxRetries) ?? 3;
  delete t.timeout, delete t.allowRetries, delete t.maxRetries;
  const r = t.signal;
  function i(l, c) {
    const d = l.headers.get("Retry-After");
    if (d != null) {
      const u = parseInt(d, 10);
      if (!isNaN(u))
        return Math.max(0, u * 1e3);
      const p = Date.parse(d);
      if (!isNaN(p))
        return Math.max(0, p - Date.now());
    }
    return Math.min(30 * 1e3, 500 * 2 ** c);
  }
  let s = 0;
  for (; ; ) {
    const l = new AbortController();
    t.signal = r != null ? AbortSignal.any([l.signal, r]) : l.signal;
    let c = !1;
    const d = setTimeout(() => {
      c = !0, l.abort();
    }, n);
    let u;
    try {
      u = await fetch(e, t), clearTimeout(d);
    } catch (p) {
      clearTimeout(d);
      const h = p?.message ?? "";
      // timeout by fetch or cancellation by internal timer
      (c || h.includes("timeout")) && ce("ServerUnreachable: the server is unreachable"), // explicit cancellation
      (p?.name === "AbortError" || h.includes("The user aborted a request")) && ce(
        "RequestAborted: request was aborted"
      ), (h.includes("Failed to fetch") || h.includes("CORS")) && ce("CORSblocked: cross-origin request blocked"), p?.name === "TypeError" && typeof navigator < "u" && !navigator.onLine && ce(
        "NotConnected: the browser is offline"
      ), ce("ServerUnreachable: the server is unreachable");
    }
    if (o && s < a && (u.status === 429 || u.status === 503)) {
      await new Promise(
        (p) => setTimeout(p, i(u, s))
      ), s++;
      continue;
    }
    switch (!0) {
      case u.status === 401:
        ce("AuthorizationFailure: authorization failed");
      case u.status === 403:
        ce("ForbiddenRequest: request is forbidden");
      case u.status === 404:
        ce("MissingResource: resource not found");
      case u.status === 408:
        ce("RequestTimeout: request timed out");
      case u.status === 429:
        ce("RateLimitExceeded: too many requests");
      case u.status === 500:
        ce("InternalServerError: internal server error");
      case u.status === 502:
        ce("BadGateway: bad gateway");
      case u.status === 503:
        ce("ServiceUnavailable: service is currently not available");
      case u.status === 504:
        ce("GatewayTimeout: gateway timed out");
      case u.status >= 400:
        ce(
          "HTTPError: request failed with status " + u.status
        );
    }
    return u;
  }
}
async function ec(e, t = {}) {
  return await (await It(e, t)).text();
}
async function tc(e, t = {}) {
  return await (await It(e, t)).json();
}
async function nc(e, t = {}) {
  return await (await It(e, t)).arrayBuffer();
}
async function oc(e, t = {}) {
  return await (await It(e, t)).blob();
}
async function ac(e, t = {}) {
  const n = await (await It(e, t)).blob();
  return new Promise((o, a) => {
    const r = new FileReader();
    r.onloadend = () => o(r.result), r.onerror = a, r.readAsDataURL(n);
  });
}
async function rc(e, t = {}) {
  const n = await It(e, t), o = (n.headers.get("content-type") ?? "").split(";")[0].trim();
  switch (!0) {
    case o.startsWith("text/html"):
      return await ur(await n.text());
    case o === "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await mr(await n.arrayBuffer());
    case o === "application/pdf":
      return await xr(await n.arrayBuffer());
    case o.startsWith("text/markdown"):
      return await hr(await n.text());
    case o.startsWith("text/"):
    case o.includes("javascript"):
    case o.includes("typescript"):
    case o.includes("json"):
    case o.includes("css"):
    case o.includes("svg"):
    case o.includes("xml"):
      return await n.text();
    default:
      ce(`UnsupportedMIMEType: cannot convert content of type "${o}" into plain text`);
  }
}
async function ic(e, t = {}) {
  const n = await It(e, t), o = (n.headers.get("content-type") ?? "").split(";")[0].trim();
  switch (!0) {
    case o.startsWith("text/html"):
      return await n.text();
    case o === "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await br(await n.arrayBuffer());
    case o.startsWith("text/markdown"):
      return await fr(await n.text());
    default:
      ce(`UnsupportedMIMEType: cannot convert content of type "${o}" into HTML`);
  }
}
async function sc(e, t = {}) {
  const n = await It(e, t), o = (n.headers.get("content-type") ?? "").split(";")[0].trim();
  switch (!0) {
    case o.startsWith("text/html"):
      return await pr(await n.text());
    case o === "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await yr(await n.arrayBuffer());
    case o.startsWith("text/markdown"):
      return await n.text();
    default:
      ce(`UnsupportedMIMEType: cannot convert content of type "${o}" into Markdown`);
  }
}
function mi(e) {
  return Cl("HTTP status code", e, 100, 599), bi[e] ?? "";
}
const bi = {
  /**** 1xx Informational ****/
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  /**** 2xx Success ****/
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  /**** 3xx Redirection ****/
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  /**** 4xx Client Error ****/
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  /**** 5xx Server Error ****/
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required"
}, he = {
  /**** Configuration ****/
  get Configuration() {
    return {
      ServerChoice: he._ServerChoice,
      customServer: he.customServer,
      ServerBlacklist: he.ServerBlacklist,
      ServerWhitelist: he.ServerWhitelist,
      ResultBlacklist: he.ResultBlacklist,
      ResultWhitelist: he.ResultWhitelist
    };
  },
  set Configuration(e) {
    xt("SearXNG configuration", e);
    const {
      ServerChoice: t,
      customServer: n,
      ServerBlacklist: o,
      ServerWhitelist: a,
      ResultBlacklist: r,
      ResultWhitelist: i
    } = e;
    if (St("SearXNG server choice", t, ["custom", "public"]), si("SearXNG custom Server", n), zt('SearXNG configuration "ServerBlacklist"', o, ot), zt('SearXNG configuration "ServerWhitelist"', a, ot), zt('SearXNG configuration "ResultBlacklist"', r, ot), zt('SearXNG configuration "ResultWhitelist"', i, ot), n != null) {
      const { ServerURL: s, Authentication: l, Credentials: c } = n;
      Wn("SearXNG custom server url", s), St("SearXNG custom server authentication", l, ["none", "basic", "bearer"]), ln("SearXNG custom server credentials", c);
    }
    he.ServerChoice = t ?? "public", he.customServer = n ?? { Authentication: "none" }, he.ServerBlacklist = o ?? [], he.ServerWhitelist = a ?? [], he.ResultBlacklist = r ?? [], he.ResultWhitelist = i ?? [];
  },
  /**** preserveConfiguration ****/
  preserveConfiguration: function() {
    localStorage["SearXNG-Configuration"] = JSON.stringify(he.Configuration);
  },
  /**** restoreConfiguration ****/
  restoreConfiguration: function() {
    if (localStorage["SearXNG-Configuration"] != null)
      try {
        const e = JSON.parse(localStorage["SearXNG-Configuration"]);
        he.Configuration = e;
      } catch (e) {
        console.warn('"SearXNG.restoreConfiguration" failed with ' + e);
      }
  },
  /**** hasPreservedConfiguration ****/
  get hasPreservedConfiguration() {
    return localStorage["SearXNG-Configuration"] != null;
  },
  set hasPreservedConfiguration(e) {
    zl("SearXNG.hasPreservedConfiguration");
  },
  /**** customServer[URL/Authentication/Credentials] ****/
  _customServer: {
    ServerURL: void 0,
    Authentication: "none",
    Credentials: void 0
  },
  get customServer() {
    return { ...he._customServer };
  },
  set customServer(e) {
    xt("SearXNG custom server setting", e), Wn("SearXNG custom server url", e.ServerURL), St("SearXNG custom server authentication", e.Authentication, ["none", "basic", "bearer"]), ln("SearXNG custom server credentials", e.Credentials), he._customServer = {
      ServerURL: e.ServerURL,
      Authentication: e.Authentication ?? "none",
      Credentials: e.Credentials
    };
  },
  get customServerURL() {
    return he._customServer.ServerURL;
  },
  set customServerURL(e) {
    Wn("SearXNG custom server url", e), he._customServer.ServerURL = e;
  },
  get customServerAuthentication() {
    return he._customServer.Authentication;
  },
  set customServerAuthentication(e) {
    St("SearXNG custom server authentication", e, ["none", "basic", "bearer"]), he._customServer.Authentication = e;
  },
  get customServerCredentials() {
    return he._customServer.Credentials;
  },
  set customServerCredentials(e) {
    ln("SearXNG custom server credentials", e), he._customServer.Credentials = e;
  },
  /**** publicServers - fetches the list of registered public SearXNG servers ****/
  publicServers: async function(e = {}) {
    xt("option set", e);
    const { ServiceURL: t, Signal: n, ...o } = e;
    Wn("SearXNG service URL", t), Zl("fetch abort signal", n);
    let a;
    try {
      if (a = await It(
        t ?? "https://searx.space/data/instances.json",
        {
          ...o,
          ...n != null ? { signal: n } : {}
        }
      ), a.ok) {
        const i = await a.json();
        return !De(i) || !De(i.instances) ? [] : Object.keys(i.instances).filter(he.ServerIsAcceptable);
      }
    } catch (i) {
      i.name === "AbortError" ? ce("Aborted: SearXNG server scan was aborted") : ce("InternalError: SearXNG server scan failed with " + i);
    }
    const r = Ca(a.status, 100, 599) ? mi(a.status) : "(unknown)";
    ce(
      "InternalError: SearXNG server scan failed with HTTP status " + a.status + " " + r
    );
  },
  /**** ServerBlacklist (for SearXNG servers) ****/
  _ServerBlacklist: {},
  get ServerBlacklist() {
    return Object.keys(he._ServerBlacklist);
  },
  set ServerBlacklist(e) {
    zt("SearXNG server blacklist", e, ot), he._ServerBlacklist = {}, (e ?? []).forEach(
      (t) => he._ServerBlacklist[t] = !0
    );
  },
  // note: caller should probably rescan the list of public SearXNG servers
  /**** ServerWhitelist (for SearXNG servers) ****/
  _ServerWhitelist: {
    "http://127.0.0.1:8080": !0,
    "http://127.0.0.1:8888": !0,
    "http://localhost:8080": !0,
    "http://localhost:8888": !0,
    "http://[::1]:8080": !0,
    "http://[::1]:8888": !0
  },
  get ServerWhitelist() {
    return Array.from(Object.keys(he._ServerWhitelist));
  },
  set ServerWhitelist(e) {
    zt("SearXNG server whitelist", e, ot), he._ServerWhitelist = {}, (e ?? []).forEach(
      (t) => he._ServerWhitelist[t] = !0
    );
  },
  // note: caller should probably rescan the list of public SearXNG servers
  /**** ServerIsBlacklisted ****/
  ServerIsBlacklisted: function(e) {
    return ot(e) && e in he._ServerBlacklist;
  },
  /**** ServerIsWhitelisted ****/
  ServerIsWhitelisted: function(e) {
    return ot(e) && e in he._ServerWhitelist;
  },
  /**** ServerIsAcceptable ****/
  ServerIsAcceptable: function(e) {
    return ot(e) && (e.startsWith("https://") || e in he._ServerWhitelist) && !(e in he._ServerBlacklist);
  },
  /**** ServerChoice ****/
  _ServerChoice: "public",
  get ServerChoice() {
    return he._ServerChoice;
  },
  set ServerChoice(e) {
    Gn("SearXNG server choice setting", e, ["public", "custom"]), he._ServerChoice = e;
  },
  /**** nextServer ****/
  _publicServers: [],
  nextServer: async function() {
    if (he._ServerChoice === "custom")
      return he._customServer.ServerURL == null && ce(
        "MissingCustomServer: custom SearXNG server is missing"
      ), he.customServer;
    {
      let e = he._publicServers;
      if (e.length === 0 && (e = he._publicServers = await he.publicServers()), e.length === 0)
        ce(
          "MissingPublicServer: could not find any public SearXNG server"
        );
      else {
        const t = Math.floor(Math.random() * e.length);
        return {
          ServerURL: e.splice(t, 1)[0],
          Authentication: "none",
          Credentials: void 0
        };
      }
    }
  },
  /**** query - uses SearXNG to perform a given query ****/
  query: async function(e, t = {}) {
    Xt("search phrase", e), xt("search options", t);
    const {
      ServerURL: n,
      ServerAuthentication: o,
      ServerCredentials: a,
      language: r,
      categories: i,
      num_results: s
    } = t;
    Wn("SearXNG server URL", n), St("SearXNG server authentication", o, ["none", "basic", "bearer"]), ln("SearXNG server credentials", a), Hl("SearXNG query language", r), St("SearXNG query categories", i, ["general"]), va("SearXNG query result limit", s);
    const l = n == null ? await he.nextServer() : {
      ServerURL: n,
      Authentication: o ?? "none",
      Credentials: a
    };
    l.ServerURL == null && ce(
      "MissingSearXNGServer: no SearXNG server given"
    ), l.Authentication !== "none" && l.Credentials == null && ce(
      "MissingCredentials: no SearXNG server credentials given"
    );
    const c = {};
    if (l.Authentication !== "none") {
      const u = new Headers();
      u.set("Authorization", `${_g(l.Authentication)} ${l.Credentials}`), c.headers = u;
    }
    e = e.trim(), e === "" && ce(
      "EmptyArgument: the given search phrase is empty"
    );
    const d = new URLSearchParams({
      q: e,
      language: r ?? "en",
      format: "html",
      categories: i ?? "general",
      num_results: "" + (s ?? 20)
    });
    try {
      const p = await (await It(
        `${l.ServerURL}/search?${d}`,
        c
      )).text();
      return Array.from(p.matchAll(/<h3><a href="([^"]+)"/g)).map((g) => g[1]).filter((g) => g != null && g.trim() !== "").filter(he.ResultIsAcceptable);
    } catch (u) {
      [
        "ServerUnreachable",
        "AuthorizationFailure",
        "ForbiddenRequest",
        "InternalServerError"
      ].includes(u.name) ? (he.ServerBlacklist = [...he.ServerBlacklist, l.ServerURL], console.warn("SearXNG search failed with", u, `

>>>> server was blacklisted
`)) : console.warn("SearXNG search failed with", u);
    }
    return [];
  },
  /**** _withoutQueryString - strips any query string from a given URL ****/
  _withoutQueryString: function(e) {
    return e.replace(/\?.*$/, "");
  },
  /**** ResultBlacklist (for query results) ****/
  _ResultBlacklist: { "https://www.sjmed.com": !0 },
  get ResultBlacklist() {
    return Object.keys(he._ResultBlacklist);
  },
  set ResultBlacklist(e) {
    zt("SearXNG result blacklist", e, ot), he._ResultBlacklist = {}, (e ?? []).forEach(
      (t) => he._ResultBlacklist[he._withoutQueryString(t)] = !0
    );
  },
  /**** ResultWhitelist (for query results) ****/
  _ResultWhitelist: {},
  get ResultWhitelist() {
    return Object.keys(he._ResultWhitelist);
  },
  set ResultWhitelist(e) {
    zt("SearXNG result whitelist", e, ot), he._ResultWhitelist = {}, (e ?? []).forEach(
      (t) => he._ResultWhitelist[he._withoutQueryString(t)] = !0
    );
  },
  /**** ResultIsBlacklisted ****/
  ResultIsBlacklisted: function(e) {
    return ot(e) && he._withoutQueryString(e) in he._ResultBlacklist;
  },
  /**** ResultIsWhitelisted ****/
  ResultIsWhitelisted: function(e) {
    return ot(e) && he._withoutQueryString(e) in he._ResultWhitelist;
  },
  /**** ResultIsAcceptable ****/
  ResultIsAcceptable: function(e) {
    return !ot(e) || he.ResultIsBlacklisted(e) ? !1 : Object.keys(he._ResultWhitelist).length === 0 || he.ResultIsWhitelisted(e);
  }
}, Im = {
  InternetIsAvailable: Pl,
  ServerIsReachable: gi,
  fetched: It,
  fetchedText: ec,
  fetchedJSON: tc,
  fetchedBinary: nc,
  fetchedBlob: oc,
  fetchedDataURL: ac,
  fetchedAsText: rc,
  fetchedAsHTML: ic,
  fetchedAsMarkdown: sc,
  DescriptionOfHTTPStatus: mi,
  HTTPMessageForStatus: bi,
  SearXNG: he
}, un = /* @__PURE__ */ Symbol("normalizedName"), Mo = /* @__PURE__ */ Symbol("L10nDictionary"), lc = "/", To = lc + "icons/", ut = { Placeholder: "(empty)", disabled: !1 }, cc = { Placeholder: "(no Selection)", disabled: !0 }, dc = { Placeholder: "(mixed Values)", disabled: !1 };
function Ke(e) {
  return e === ut || e === cc || e === dc;
}
function Ze(e, t, n) {
  return Ke(e) ? {
    actualValue: void 0,
    actualPlaceholder: e === ut ? n ?? e.Placeholder : e.Placeholder,
    actualDisabling: t || e.disabled
  } : { actualValue: e, actualPlaceholder: n, actualDisabling: t };
}
const ct = "-webkit-mask-size:contain; mask-size:contain; -webkit-mask-position:center center; mask-position:center center; -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;";
function Ln(e, t = 2) {
  const n = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='${t}' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='${e}'/%3E%3C/svg%3E")`;
  return `-webkit-mask-image:${n}; mask-image:${n};`;
}
const ao = Ln("m6 9 6 6 6-6"), uc = Ln("m18 15-6-6-6 6"), Da = Ln("m15 18-6-6 6-6"), ro = Ln("m9 18 6-6-6-6"), pc = Ln("M20 6 9 17l-5-5"), hc = Ln("M18 6 6 18M6 6l12 12");
function Qn(e) {
  return li(e);
}
const [Ro, Dm, Lm, Sm] = /* @__PURE__ */ et(Qn, "JCL coordinate");
function Pn(e) {
  return li(e) && e >= 0;
}
const [yt, Mm, Tm, Rm] = /* @__PURE__ */ et(Pn, "JCL dimension");
function fc(e) {
  return De(e) && Qn(e.x) && Qn(e.y);
}
const [Am, Fm, zm, Om] = /* @__PURE__ */ et(fc, "JCL position");
function gc(e) {
  return De(e) && Pn(e.Width) && Pn(e.Height);
}
const [Vm, Em, Nm, Bm] = /* @__PURE__ */ et(gc, "JCL size");
function mc(e) {
  return De(e) && Qn(e.x) && Pn(e.Width) && Qn(e.y) && Pn(e.Height);
}
const [Wm, Hm, _m, Gm] = /* @__PURE__ */ et(mc, "JCL geometry"), Km = ui;
function Qt(e) {
  return De(e) && "current" in e;
}
const [Um, qm, Wo, Xm] = /* @__PURE__ */ et(Qt, "preact component reference");
function Sn(e) {
  return new RegExp("^(?:" + e + ")$");
}
function bc(e) {
  return dn("name", e), Rt(e);
}
function Rt(e) {
  return e.replaceAll(".", "-");
}
function Ct(e) {
  let t = e.replace(/:.*$/, "").trim(), n = e.replace(/^[^:]*:/, "").trim();
  const o = /^[-]+$/.test(n), a = n[0] === "-";
  return t === e && (t = t.replace(/^-/, "")), a && (n = n.replace(/^-/, "")), { Value: t, Label: n, disabled: a, isRuler: o };
}
function U(e) {
  xt("PropSet", e);
  const t = {};
  for (const o of Object.keys(e))
    t[Qo(o)] = e[o];
  t.children = Yt(e.children);
  const n = {};
  for (const o of Object.keys(t))
    o !== "children" && o !== "RestProps" && (n[o] = t[o]);
  return t.RestProps = n, new Proxy(t, {
    get(o, a) {
      if (typeof a == "symbol")
        return o[a];
      switch (!0) {
        case a === "children":
          return [...o.children];
        // was normalised into an array
        case a === "RestProps":
          return n;
        // as a reference (to be modified externally)
        default: {
          const r = Qo(a);
          return delete o.RestProps[r], o[r];
        }
      }
    },
    set() {
      ce('TypeError: "PropSet" is read-only');
    },
    deleteProperty() {
      ce('TypeError: "PropSet" is read-only');
    },
    defineProperty() {
      ce('TypeError: "PropSet" is read-only');
    },
    has(o, a) {
      if (typeof a == "symbol")
        return a in o;
      switch (!0) {
        case a === "children":
          return "children" in o;
        case a === "RestProps":
          return "RestProps" in o;
        default:
          return Qo(a) in o;
      }
    },
    ownKeys(o) {
      return Reflect.ownKeys(o);
    },
    getOwnPropertyDescriptor(o, a) {
      const r = Object.getOwnPropertyDescriptor(o, a);
      return r != null && (r.writable = !1, r.configurable = !0), r;
    }
  });
}
function Qo(e) {
  return e.replace(/[-_]/g, "").trim().toLowerCase();
}
function E(e, t) {
  if (Wt("Validator", t), t(e) === !0)
    return e;
}
function J(e) {
  switch (!0) {
    case gn(e):
      return e;
    case e === "false":
      return !1;
    case e === "true":
      return !0;
  }
}
function _e(e) {
  if (wt(e) || rt(e) && (e = parseFloat(e), !isNaN(e)))
    return e;
}
function Et(e, t, n, o, a) {
  return io(
    e,
    (r) => no(r, t, n, o, a)
  );
}
function Ym(e) {
  return io(e, Dl);
}
function Ao(e, t, n) {
  return io(
    e,
    (o) => Ca(o, t, n)
  );
}
function ve(e) {
  return io(e, kn);
}
function qt(e) {
  return io(e, Il);
}
function pn(e) {
  return E(e, rt);
}
function Jm(e, t) {
  return E(e, (n) => Bt(n, t));
}
function ae(e) {
  return E(e, $n);
}
function S(e) {
  return E(e, Ne);
}
function A(e) {
  return E(e, Nt);
}
function bt(e) {
  return E(e, Yn);
}
function Zm(e) {
  return E(e, Xn);
}
function Qm(e) {
  return E(e, Bo);
}
function mn(e) {
  return E(e, ot);
}
function Pm(e) {
  return E(e, Ia);
}
function eb(e) {
  return E(e, (t) => Ia(t) || kn(t));
}
function tb(e) {
  return E(e, pi);
}
function Se(e) {
  El("Identifier", e), ce("MissingArgument: no " + vt(e) + " given");
}
function io(e, t) {
  if (t(e) === !0 || rt(e) && (e = parseFloat(e), t(e) === !0))
    return e;
}
const yi = [
  "--jcl-bg-color",
  "--jcl-fg-color",
  "--jcl-primary-bg-color",
  "--jcl-primary-fg-color",
  "--jcl-secondary-bg-color",
  "--jcl-secondary-fg-color",
  "--jcl-muted-bg-color",
  "--jcl-muted-fg-color",
  "--jcl-destructive-bg-color",
  "--jcl-destructive-fg-color",
  "--jcl-accent-bg-color",
  "--jcl-accent-fg-color",
  "--jcl-success-bg-color",
  "--jcl-success-fg-color",
  "--jcl-warning-bg-color",
  "--jcl-warning-fg-color",
  "--jcl-border-color",
  "--jcl-input-border-color",
  // border for outline-only controls (Check-
  // box, Radiobutton, Switch); falls back to
  // "--jcl-border-color"
  "--jcl-ring-color"
], xi = ["--jcl-border-radius"], wi = [
  "--jcl-font",
  "--jcl-serif-font",
  "--jcl-sans-serif-font",
  "--jcl-monospace-font"
], nb = [
  ...yi,
  ...xi,
  ...wi
];
function yc(e) {
  return typeof e != "string" ? !1 : typeof CSS > "u" ? !0 : CSS.supports("color", e);
}
function xc(e) {
  return typeof e != "string" ? !1 : typeof CSS > "u" ? !0 : CSS.supports("border-radius", e);
}
function sa(e) {
  if (!De(e))
    return !1;
  const t = (n, o) => e[n] === void 0 || o(e[n]);
  return yi.every((n) => t(n, yc)) && xi.every((n) => t(n, xc)) && wi.every((n) => t(n, rt));
}
const [ob, ab, rb, ib] = /* @__PURE__ */ et(sa, "JCL swatch");
function wc(e) {
  return De(e) && sa(e.light) && sa(e.dark);
}
const [vc, sb, Cc, lb] = /* @__PURE__ */ et(wc, "set of JCL swatches");
function so(e, t) {
  if (St("UI theme", e, [...ji]), vc("set of UI swatches", t), e == null && (e = "light"), t == null)
    return "";
  e === "auto" && (e = Tt("(prefers-color-scheme: dark)") ? "dark" : "light");
  const n = t[e];
  return n == null ? "" : Object.entries(n).filter(([a]) => /^--[-a-zA-Z0-9_]+$/.test(a)).map(([a, r]) => `${a}:${String(r).replace(/[;}]/g, "")}`).join(";") + ";";
}
const kc = ["ltr", "rtl"];
function vi(e) {
  return rt(e) && e.toLowerCase() in ki;
}
const [cb, db, Mn, ub] = /* @__PURE__ */ et(vi, "supported locale"), jc = /* @__PURE__ */ new Set([
  "ar",
  // Arabic
  "he",
  // Hebrew
  "fa"
  // Persian / Farsi
]);
function Ci(e) {
  Mn("Locale", e);
  const t = e.toLowerCase().replace(/-.*$/, "");
  return jc.has(t) ? "rtl" : "ltr";
}
const $c = {
  en: "gb",
  "en-us": "us",
  "en-ca": "ca",
  "en-au": "au",
  "en-gb": "gb",
  "en-nz": "nz",
  de: "de",
  "de-ch": "ch",
  "de-li": "li",
  fr: "fr",
  "fr-ch": "ch",
  it: "it",
  "it-ch": "ch",
  es: "es",
  nl: "nl",
  pt: "pt",
  el: "gr",
  fi: "fi",
  sk: "sk",
  si: "si",
  mt: "mt",
  sv: "se",
  no: "no",
  da: "dk",
  is: "is",
  ja: "jp",
  zh: "cn",
  "zh-tw": "tw",
  "zh-hk": "hk",
  ko: "kr",
  ru: "ru",
  pl: "pl",
  cs: "cz",
  hu: "hu",
  ro: "ro",
  bg: "bg",
  hr: "hr",
  tr: "tr",
  ar: "ae",
  he: "il",
  fa: "ir",
  hi: "in",
  th: "th",
  id: "id",
  ms: "my",
  uk: "ua",
  vi: "vn"
}, Ic = /^[a-z]{2}$/i;
function Dc(e) {
  return kl("ISO Country Code", e, Ic), [...e.toUpperCase()].map(
    (t) => String.fromCodePoint(t.charCodeAt(0) + 127397)
  ).join("");
}
function pb(e) {
  Mn("Locale", e), e = e.toLowerCase();
  const t = La($c, e);
  return t != null ? Dc(t) : "🏳";
}
function La(e, t) {
  return e[t] ?? e[t.split("-")[0]];
}
const ki = {
  en: "English",
  "en-us": "English (US)",
  "en-ca": "English (CA)",
  "en-au": "English (AU)",
  "en-gb": "English (UK)",
  "en-nz": "English (NZ)",
  de: "Deutsch",
  "de-ch": "Deutsch (CH)",
  "de-li": "Deutsch (LI)",
  fr: "Français",
  "fr-ch": "Français (CH)",
  it: "Italiano",
  "it-ch": "Italiano (CH)",
  es: "Español",
  nl: "Nederlands",
  pt: "Português",
  el: "Ελληνικά",
  fi: "Suomi",
  sk: "Slovenčina",
  si: "Slovenščina",
  mt: "Malti",
  sv: "Svenska",
  no: "Norsk",
  da: "Dansk",
  is: "Íslenska",
  ja: "日本語",
  zh: "中文",
  "zh-tw": "中文 (TW)",
  "zh-hk": "中文 (HK)",
  ko: "한국어",
  ru: "Русский",
  pl: "Polski",
  cs: "Čeština",
  hu: "Magyar",
  ro: "Română",
  bg: "Български",
  hr: "Hrvatski",
  tr: "Türkçe",
  ar: "العربية",
  he: "עברית",
  fa: "فارسی",
  hi: "हिन्दी",
  th: "ไทย",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  uk: "Українська",
  vi: "Tiếng Việt"
};
function hb(e) {
  return Mn("Locale", e), e = e.toLowerCase(), La(ki, e) ?? e;
}
const Lc = {
  "en-us": "USD",
  "en-ca": "CAD",
  "en-au": "AUD",
  "en-gb": "GBP",
  "en-nz": "NZD",
  de: "EUR",
  "de-ch": "CHF",
  "de-li": "CHF",
  fr: "EUR",
  "fr-ch": "CHF",
  it: "EUR",
  "it-ch": "CHF",
  es: "EUR",
  nl: "EUR",
  pt: "EUR",
  el: "EUR",
  fi: "EUR",
  sk: "EUR",
  si: "EUR",
  mt: "EUR",
  sv: "SEK",
  no: "NOK",
  da: "DKK",
  is: "ISK",
  ja: "JPY",
  zh: "CNY",
  "zh-tw": "TWD",
  "zh-hk": "HKD",
  ko: "KRW",
  ru: "RUB",
  pl: "PLN",
  cs: "CZK",
  hu: "HUF",
  ro: "RON",
  bg: "BGN",
  hr: "EUR",
  tr: "TRY",
  ar: "AED",
  he: "ILS",
  fa: "IRR",
  hi: "INR",
  th: "THB",
  id: "IDR",
  ms: "MYR",
  uk: "UAH",
  vi: "VND"
};
function Sc(e) {
  return e = e.toLowerCase(), La(Lc, e) ?? "USD";
}
function Ho(e) {
  const t = /* @__PURE__ */ new Map();
  return (n, o) => {
    const a = n + "|" + JSON.stringify(o);
    let r = t.get(a);
    return r == null && t.set(a, r = new e(n, o)), r;
  };
}
const Mc = Ho(Intl.PluralRules), Vr = Ho(Intl.NumberFormat), Tc = Ho(Intl.DateTimeFormat), Rc = Ho(Intl.RelativeTimeFormat);
function Ac(e, t) {
  return e.replace(
    /\{\{(\w+)\}\}/g,
    (n, o) => t[o] != null ? String(t[o]) : n
    // keep {{Key}} if variable is missing
  );
}
const Sa = {}, Fc = /^[^\x00-\x1F\x7F\x80-\x9F]+$/;
function vo(e) {
  return rt(e) && Fc.test(e);
}
function zc(e) {
  return De(e) ? Object.entries(e).every(([t, n]) => vo(t) && (vo(n) || De(n) && Object.entries(n).every(([o, a]) => vo(o) && vo(a)))) : !1;
}
const [fb, gb, Oc, mb] = /* @__PURE__ */ et(zc, "localization dictionary");
function Vc(e) {
  const t = Object.create(e);
  for (const n in t)
    t[n] = Object.create(t[n]);
  return t;
}
function Fo(e, t, n = Sa) {
  Mn("Locale", e), Oc("Dictionary", t), e = e.toLowerCase(), n[e] == null ? n[e] = { ...t } : Object.assign(n[e], t);
}
function la(e, t, n = Sa) {
  Xt("localization key", e), Mn("locale", t), t = t.toLowerCase();
  let o = n[t]?.[e];
  if (o != null)
    return o;
  const a = t.split("-");
  for (; a.length > 1; )
    if (a.pop(), o = n[a.join("-")]?.[e], o != null)
      return o;
  if (t !== "en" && (o = n.en?.[e], o != null))
    return o;
}
const ji = ["auto", "light", "dark"], Ec = ["coarse", "fine"], Nc = ["none", "hover"], Bc = ["reduced"], Wc = ["less", "more"];
function Hc(e) {
  if (typeof e != "string")
    return "en";
  let t = e.toLowerCase();
  for (; ; ) {
    if (vi(t))
      return t;
    const n = t.lastIndexOf("-");
    if (n < 0)
      break;
    t = t.slice(0, n);
  }
  return "en";
}
const _c = {
  light: {
    "--jcl-bg-color": "oklch(1 0 0)",
    "--jcl-fg-color": "oklch(0.145 0 0)",
    "--jcl-primary-bg-color": "#0075FF",
    // Chrome's accent blue
    "--jcl-primary-fg-color": "oklch(1 0 0)",
    // white
    "--jcl-secondary-bg-color": "oklch(0.97 0 0)",
    "--jcl-secondary-fg-color": "oklch(0.205 0 0)",
    "--jcl-muted-bg-color": "oklch(0.97 0 0)",
    "--jcl-muted-fg-color": "oklch(0.556 0 0)",
    "--jcl-destructive-bg-color": "oklch(0.577 0.245 27.325)",
    "--jcl-destructive-fg-color": "oklch(0.985 0 0)",
    "--jcl-accent-bg-color": "oklch(0.97 0 0)",
    "--jcl-accent-fg-color": "oklch(0.205 0 0)",
    "--jcl-success-bg-color": "oklch(0.627 0.194 149.214)",
    // green-600
    "--jcl-success-fg-color": "oklch(0.985 0 0)",
    "--jcl-warning-bg-color": "oklch(0.769 0.188 70.08)",
    // amber-500
    "--jcl-warning-fg-color": "oklch(0.145 0 0)",
    "--jcl-border-color": "oklch(0.922 0 0)",
    "--jcl-ring-color": "#0075FF",
    // Chrome's accent blue
    "--jcl-border-radius": "8px",
    // shadcn "rounded-md" equivalent
    "--jcl-font": "ui-sans-serif, system-ui, sans-serif",
    "--jcl-serif-font": 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    "--jcl-sans-serif-font": "ui-sans-serif, system-ui, sans-serif",
    "--jcl-monospace-font": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  },
  dark: {
    "--jcl-bg-color": "oklch(0.145 0 0)",
    "--jcl-fg-color": "oklch(0.985 0 0)",
    "--jcl-primary-bg-color": "#4D9FFF",
    // lighter variant of #0075FF
    "--jcl-primary-fg-color": "oklch(1 0 0)",
    // white
    "--jcl-secondary-bg-color": "oklch(0.269 0 0)",
    "--jcl-secondary-fg-color": "oklch(0.985 0 0)",
    "--jcl-muted-bg-color": "oklch(0.269 0 0)",
    "--jcl-muted-fg-color": "oklch(0.708 0 0)",
    "--jcl-destructive-bg-color": "oklch(0.704 0.191 22.216)",
    "--jcl-destructive-fg-color": "oklch(0.985 0 0)",
    "--jcl-accent-bg-color": "oklch(0.269 0 0)",
    "--jcl-accent-fg-color": "oklch(0.985 0 0)",
    "--jcl-success-bg-color": "oklch(0.723 0.219 149.579)",
    // green-500
    "--jcl-success-fg-color": "oklch(0.145 0 0)",
    "--jcl-warning-bg-color": "oklch(0.828 0.189 84.429)",
    // amber-400
    "--jcl-warning-fg-color": "oklch(0.145 0 0)",
    "--jcl-border-color": "oklch(1 0 0 / 10%)",
    // "--jcl-border-color" alone is too faint for outline-only controls
    // (Checkbox, Radiobutton, Switch), whose border is their only visual
    // cue when unchecked - so those get a brighter, dedicated border:
    "--jcl-input-border-color": "oklch(1 0 0 / 20%)",
    "--jcl-ring-color": "#4D9FFF",
    // lighter variant of #0075FF
    "--jcl-border-radius": "8px",
    // shadcn "rounded-md" equivalent
    "--jcl-font": "ui-sans-serif, system-ui, sans-serif",
    "--jcl-serif-font": 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    "--jcl-sans-serif-font": "ui-sans-serif, system-ui, sans-serif",
    "--jcl-monospace-font": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  }
};
function Gc() {
  const e = Hc(
    typeof navigator < "u" ? navigator.language : "en"
  );
  return {
    Theme: "auto",
    // which means: "use OS setting"
    SwatchSet: structuredClone(_c),
    PointerAccuracy: Tt("(pointer: coarse)") ? "coarse" : "fine",
    HoverCapability: Tt("(hover: none)") ? "none" : "hover",
    preferredMotion: Tt("(prefers-reduced-motion: reduce)") ? "reduced" : void 0,
    preferredContrast: Tt("(prefers-contrast: more)") ? "more" : Tt("(prefers-contrast: less)") ? "less" : void 0,
    Locale: e,
    Direction: Ci(e),
    TooltipDelay: 600,
    [Mo]: Sa
  };
}
const _o = /* @__PURE__ */ Gc(), gt = /* @__PURE__ */ Jt(void 0);
function lo(e) {
  const [t, n] = Be(e.Theme), [o, a] = Be(e.SwatchSet), [r, i] = Be(e.PointerAccuracy), [s, l] = Be(e.HoverCapability), [c, d] = Be(e.preferredMotion), [u, p] = Be(e.preferredContrast), [h, f] = Be(e.Locale), [g, x] = Be(e.Direction), [m, C] = Be(e.TooltipDelay), [k, L] = Be(
    Vc(e[Mo])
  );
  function $(B) {
    Gn("UI theme", B, [...ji]), n(B);
  }
  function y(B) {
    Cc("UI swatch set", B), a(B);
  }
  function w(B) {
    Gn("UI pointer accuracy", B, [...Ec]), i(B);
  }
  function O(B) {
    Gn("UI hover capability", B, [...Nc]), l(B);
  }
  function T(B) {
    St("preferred UI motion", B, [...Bc]), d(B);
  }
  function j(B) {
    St("preferred UI contrast", B, [...Wc]), p(B);
  }
  function I(B) {
    Mn("Locale", B), f(B);
  }
  function M(B) {
    Gn("text direction", B, [...kc]), x(B);
  }
  function D(B) {
    Jn("tooltip delay", B), C(B);
  }
  function V(B, Y) {
    Fo(B, Y, k), L({ ...k });
  }
  return Zt(() => ({
    Theme: t,
    setTheme: $,
    SwatchSet: o,
    setSwatchSet: y,
    PointerAccuracy: r,
    setPointerAccuracy: w,
    HoverCapability: s,
    setHoverCapability: O,
    preferredMotion: c,
    setPreferredMotion: T,
    preferredContrast: u,
    setPreferredContrast: j,
    Locale: h,
    setLocale: I,
    Direction: g,
    setDirection: M,
    TooltipDelay: m,
    setTooltipDelay: D,
    [Mo]: k,
    registerL10n: V
  }), [
    t,
    o,
    r,
    s,
    c,
    u,
    h,
    g,
    m,
    k
  ]);
}
const Kc = /* @__PURE__ */ Object.create(null);
function at(e) {
  return Xt("module specifier", e), Kc[e] ??= import(e);
}
function co(e) {
  let t;
  return () => t ??= e();
}
const Er = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap();
function Tn(e) {
  Wt("library loader", e);
  const [t, n] = Be(Co.get(e));
  switch (Ce(() => {
    if (Co.get(e) === "loaded")
      return;
    let o = !1, a = Er.get(e);
    return a == null && (a = e(), Er.set(e, a)), a.then(() => {
      Co.set(e, "loaded"), o || n("loaded");
    }, (r) => {
      Co.set(e, r), o || n(r);
    }), () => {
      o = !0;
    };
  }, []), !0) {
    case t == null:
      return !1;
    case t === "loaded":
      return !0;
    default:
      ce(
        "LibraryNotLoadable: a required library could not be loaded, reason: " + (t?.message ?? t)
      );
  }
}
function Uc() {
  const [e, t] = Be(
    // SSR-ready
    () => typeof navigator < "u" ? navigator.onLine : !0
  );
  return Ce(() => {
    const n = new AbortController(), o = () => t(!0), a = () => t(!1);
    return window.addEventListener("online", o, { signal: n.signal }), window.addEventListener("offline", a, { signal: n.signal }), () => n.abort();
  }, []), e;
}
function qc() {
  const [e, t] = Be(() => ({
    // SSR-ready
    Width: typeof window < "u" ? window.innerWidth : 0,
    Height: typeof window < "u" ? window.innerHeight : 0
  })), n = q(0), o = se(() => {
    cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
      t({ Width: window.innerWidth, Height: window.innerHeight });
    });
  }, []);
  return Ce(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), cancelAnimationFrame(n.current);
  }), [o]), e;
}
function tt() {
  const [e, t] = Be({});
  return se(() => t({}), []);
}
function Go() {
  const e = lt(gt);
  return e == null && ce(
    'InvalidContext: "useCustomization" must only be used inside a "JCL_Applet", "JCL_Overlay", "JCL_Dialog" or "JCL_Customizable"'
  ), e;
}
function Xc() {
  return Ma(Go());
}
function Ma(e) {
  const { Locale: t, Direction: n, [Mo]: o } = e, a = Sc(t);
  function r(d, u, p) {
    const h = la(d, t, o);
    if (h == null)
      return d;
    let f;
    if (typeof h == "string")
      f = h;
    else {
      const g = Mc(t).select(p ?? 0);
      f = h[g] ?? h.other ?? d;
    }
    return u == null ? f : Ac(f, u);
  }
  function i(d, u) {
    return Vr(t, u).format(d);
  }
  function s(d, u) {
    return Tc(t, u).format(d);
  }
  function l(d, u, p) {
    return Rc(t, p).format(d, u);
  }
  function c(d, u) {
    return Vr(t, {
      style: "currency",
      currency: a,
      ...u
    }).format(d);
  }
  return {
    Locale: t,
    Direction: n,
    Currency: a,
    localized: r,
    formattedNumber: i,
    formattedDate: s,
    formattedRelativeDate: l,
    formattedCurrency: c
  };
}
function Yc(e = {}) {
  !Nt(e) && !De(e) && ce(
    "InvalidArgument:the given initial configuration is neither a plain object nor a function"
  );
  const t = q(void 0);
  t.current == null && (Nt(e) && (e = He(
    'component callback "initialConfiguration"',
    e
  ), De(e) || ce(
    "InvalidArgument:the result of the initial configuration callback is not a plain object"
  )), t.current = { ...e });
  const n = se((o) => {
    if (si("configuration change set", o), o != null)
      for (const [a, r] of Object.entries(o))
        r === void 0 ? delete t.current[a] : De(r) ? De(t.current[a]) ? Object.assign(t.current[a], r) : t.current[a] = { ...r } : ce(
          "InvalidArgument: configuration[" + vt(a) + "] is no plain JavaScript object"
        );
  }, []);
  return [t.current, n];
}
let vn;
function $i(e) {
  typeof document > "u" || (vn == null && (vn = document.createElement("style"), document.head.appendChild(vn)), vn.textContent = "* { cursor:" + e + " !important }");
}
function Jc(e) {
  if (typeof document > "u")
    return;
  eo();
  const t = getComputedStyle(e).cursor;
  t === "" || t === "auto" || $i(t);
}
function eo() {
  vn?.remove(), vn = void 0;
}
function Ta(e) {
  e != null && !Ne(e) && !(e instanceof HTMLElement) && !Nt(e) && ce(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  );
}
function In(e, t) {
  t != null && !Ne(t) && !(t instanceof HTMLElement) && ce(
    `InvalidArgument: "${e}" is neither a CSS selector nor an HTML element`
  );
}
function Ra(e, t) {
  switch (!0) {
    case t == null:
      return e.parentElement ?? void 0;
    case t === "self":
      return e;
    case Ne(t):
      return e.parentElement?.closest(t);
    case Nt(t): {
      const n = t();
      return n instanceof HTMLElement ? n : void 0;
    }
    default:
      return t;
  }
}
function Aa(e) {
  switch (e.pointerType) {
    case "mouse":
      return e.buttons === 1;
    case "touch":
      return e.isPrimary;
    case "pen":
      return e.buttons === 1;
    default:
      return !0;
  }
}
function hn({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  onDragStart: a,
  onDragContinuation: r,
  onDragFinish: i,
  onDragCancellation: s
}) {
  Wo("ViewRef", e), Ta(t), In("onlyFrom", n), In("neverFrom", o), Re('"onDragStart" callback', a), Re('"onDragContinuation" callback', r), Re('"onDragFinish" callback', i), Re('"onDragCancellation" callback', s);
  const l = a != null && r != null && i != null && s != null, c = q();
  c.current = { onDragStart: a, onDragContinuation: r, onDragFinish: i, onDragCancellation: s };
  const d = q(!1);
  d.current = l;
  const u = q(), p = q(), h = q(!1);
  Ce(() => {
    e.current != null && (u.current = Ra(e.current, t));
  }, [
    e.current
    /* Container */
  ]), Ce(() => () => {
    window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", m), window.removeEventListener("blur", C), h.current && (h.current = !1, eo());
  }, []);
  const f = se((y) => {
    if (!(y.target instanceof HTMLElement) || !Aa(y) || !l || u.current == null || n != null && !$(y.target, n) || o != null && $(y.target, o))
      return;
    window.addEventListener("pointermove", g), window.addEventListener("pointerup", x), window.addEventListener("pointercancel", m), window.addEventListener("blur", C), e.current.setPointerCapture?.(y.pointerId), Jc(y.target);
    const w = u.current, O = w.getBoundingClientRect(), T = y.clientX - O.left + w.scrollLeft, j = y.clientY - O.top + w.scrollTop;
    p.current = { x: T, y: j }, h.current = !0, N('useDragging callback "onDragStart"', c.current?.onDragStart, 0, 0, T, j, y);
  }, [e, l, n, o]), g = se((y) => {
    if (h.current !== !1) {
      if (y.pointerType === "mouse" && y.buttons === 0) {
        k(y, !1);
        return;
      }
      u.current != null && N('useDragging callback "onDragContinuation"', c.current?.onDragContinuation, ...L(y));
    }
  }, []), x = se((y) => {
    k(y, !1);
  }, []), m = se((y) => {
    k(y, !0);
  }, []), C = se(() => {
    k(null, !0);
  }, []), k = se((y, w) => {
    if (h.current !== !1) {
      if (h.current = !1, eo(), y != null && e.current?.hasPointerCapture?.(y.pointerId) && e.current.releasePointerCapture(y.pointerId), window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", m), window.removeEventListener("blur", C), w) {
        N('useDragging callback "onDragCancellation"', c.current?.onDragCancellation, 0, 0, p.current.x, p.current.y, y);
        return;
      }
      u.current != null && d.current && N('useDragging callback "onDragFinish"', c.current?.onDragFinish, ...L(y));
    }
  }, []);
  function L(y) {
    const w = u.current;
    if (w == null)
      return [0, 0, 0, 0, y];
    const O = w.getBoundingClientRect(), T = y.clientX - O.left + w.scrollLeft, j = y.clientY - O.top + w.scrollTop, I = T - p.current.x, M = j - p.current.y;
    return [I, M, T, j, y];
  }
  function $(y, w) {
    switch (!0) {
      // matching element (e.g. the title
      case w == null:
        return !0;
      case typeof w == "string":
        return y.closest(w) != null;
      default:
        return w.contains(y);
    }
  }
  return l ? f : void 0;
}
function Rn({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  Threshold: a = 4,
  onClick: r,
  onDragStart: i,
  onDragContinuation: s,
  onDragFinish: l,
  onDragCancellation: c
}) {
  Wo("ViewRef", e), Ta(t), In("onlyFrom", n), In("neverFrom", o), va("drag threshold", a), Re('"onClick" callback', r), Re('"onDragStart" callback', i), Re('"onDragContinuation" callback', s), Re('"onDragFinish" callback', l), Re('"onDragCancellation" callback', c);
  const d = r != null, u = i != null && s != null && l != null && c != null, p = d || u, h = q();
  h.current = { onClick: r, onDragStart: i, onDragContinuation: s, onDragFinish: l, onDragCancellation: c };
  const f = q(!1);
  f.current = d;
  const g = q(!1);
  g.current = u;
  const x = q(a);
  x.current = a;
  const m = q(), C = q(), k = q(), L = q(!1), $ = q(!1);
  Ce(() => {
    e.current != null && (m.current = Ra(e.current, t));
  }, [
    e.current
    /* Container */
  ]), Ce(() => () => {
    window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", T);
  }, []);
  const y = se((D) => {
    if (!(D.target instanceof HTMLElement) || !Aa(D) || !p || m.current == null || n != null && !M(D.target, n) || o != null && M(D.target, o))
      return;
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", O), window.addEventListener("pointercancel", T), e.current.setPointerCapture?.(D.pointerId);
    const V = m.current, B = V.getBoundingClientRect(), Y = D.clientX - B.left + V.scrollLeft, Q = D.clientY - B.top + V.scrollTop;
    C.current = { x: Y, y: Q }, k.current = D, L.current = !0, $.current = !1;
  }, [e, p, n, o]), w = se((D) => {
    if (L.current === !1 || m.current == null)
      return;
    const [V, B, Y, Q] = I(D);
    if (!$.current) {
      if (Math.sqrt(V * V + B * B) < x.current)
        return;
      $.current = !0, g.current && N('useClickDragging callback "onDragStart"', h.current?.onDragStart, 0, 0, C.current.x, C.current.y, k.current);
    }
    g.current && N('useClickDragging callback "onDragContinuation"', h.current?.onDragContinuation, V, B, Y, Q, D);
  }, []), O = se((D) => {
    j(D, !1);
  }, []), T = se((D) => {
    j(D, !0);
  }, []), j = se((D, V) => {
    if (L.current !== !1) {
      if (L.current = !1, e.current?.hasPointerCapture?.(D.pointerId) && e.current.releasePointerCapture(D.pointerId), window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", T), V) {
        $.current && g.current && N('useClickDragging callback "onDragCancellation"', h.current?.onDragCancellation, 0, 0, C.current.x, C.current.y, D), $.current = !1;
        return;
      }
      if ($.current)
        g.current && N('useClickDragging callback "onDragFinish"', h.current?.onDragFinish, ...I(D));
      else if (f.current && m.current != null) {
        const B = m.current, Y = B.getBoundingClientRect(), Q = D.clientX - Y.left + B.scrollLeft, pe = D.clientY - Y.top + B.scrollTop;
        N('useClickDragging callback "onClick"', h.current?.onClick, Q, pe, D);
      }
      $.current = !1;
    }
  }, []);
  function I(D) {
    const V = m.current;
    if (V == null)
      return [0, 0, 0, 0, D];
    const B = V.getBoundingClientRect(), Y = D.clientX - B.left + V.scrollLeft, Q = D.clientY - B.top + V.scrollTop, pe = Y - C.current.x, P = Q - C.current.y;
    return [pe, P, Y, Q, D];
  }
  function M(D, V) {
    switch (!0) {
      case V == null:
        return !0;
      case typeof V == "string":
        return D.matches(V);
      default:
        return D === V;
    }
  }
  return p ? y : void 0;
}
const Fa = [
  "none",
  "copy",
  "copyLink",
  "copyMove",
  "link",
  "linkMove",
  "move",
  "all"
];
function Zc(e, t, { Effect: n, draggedGhost: o, onDropped: a } = {}) {
  jl("Data", e), Gl("MIMEType", t), St("Effect", n, [...Fa]), Re('"draggedGhost" callback', o), Re('"onDropped" callback', a);
  const r = q(e);
  r.current = e;
  const i = q(t);
  i.current = t;
  const s = q();
  s.current = n;
  const l = q({});
  l.current = { draggedGhost: o, onDropped: a };
  const c = se((u) => {
    const p = u.dataTransfer;
    if (p == null)
      return;
    p.setData(i.current, r.current), s.current != null && (p.effectAllowed = s.current);
    const h = He('useDataDragSupport callback "draggedGhost"', l.current.draggedGhost, u) ?? null;
    h != null && (document.body.appendChild(h), p.setDragImage(h, h.offsetWidth / 2, h.offsetHeight / 2), requestAnimationFrame(() => h.remove()));
  }, []), d = se((u) => {
    const p = u.dataTransfer?.dropEffect ?? "none";
    p !== "none" && N('useDataDragSupport callback "onDropped"', l.current.onDropped, p, u);
  }, []);
  return { draggable: !0, onDragStart: c, onDragEnd: d };
}
function Ii(e) {
  const { Name: t, DragDepth: n, setIsOver: o, accepts: a, CallbacksOf: r, processedDrop: i } = e;
  function s(u) {
    a(u) && (u.preventDefault(), N(t + ' callback "onDragOver"', r().onDragOver, u));
  }
  function l(u) {
    a(u) && (u.preventDefault(), ++n.current === 1 && (o(!0), N(t + ' callback "onDragEnter"', r().onDragEnter, u)));
  }
  function c(u) {
    n.current > 0 && --n.current === 0 && (o(!1), N(t + ' callback "onDragLeave"', r().onDragLeave, u));
  }
  function d(u) {
    const p = i(u);
    p != null && (u.preventDefault(), n.current = 0, o(!1), N(t + ' callback "onDrop"', r().onDrop, ...p, u));
  }
  return { handleDragEnter: l, handleDragOver: s, handleDragLeave: c, handleDrop: d };
}
function Qc(e, {
  onDragEnter: t,
  onDragOver: n,
  onDragLeave: o,
  onDrop: a
} = {}) {
  switch (!0) {
    case Zn(e):
      e = [e];
      break;
    case ci(e):
      for (const f of e)
        Zn(f) || ce(
          'InvalidArgument: each entry in "MIMETypes" must be a non-empty string without line breaks'
        );
      break;
    default:
      ce(
        'InvalidArgument: "MIMETypes" must be a MIME type string or a non-empty array of MIME type strings'
      );
  }
  Re('"onDragEnter" callback', t), Re('"onDragOver" callback', n), Re('"onDragLeave" callback', o), Re('"onDrop" callback', a);
  const [r, i] = Be(!1), s = q(0), l = q({});
  l.current = { onDragEnter: t, onDragOver: n, onDragLeave: o, onDrop: a };
  const c = e.join(","), { handleDragEnter: d, handleDragOver: u, handleDragLeave: p, handleDrop: h } = Zt(() => {
    function f(g) {
      return g == null ? !1 : [...g.types].some((x) => e.includes(x));
    }
    return Ii({
      Name: "useDataDropSupport",
      DragDepth: s,
      setIsOver: i,
      accepts: (g) => f(g.dataTransfer),
      CallbacksOf: () => l.current,
      processedDrop: (g) => f(g.dataTransfer) ? [g.dataTransfer] : void 0
    });
  }, [c]);
  return {
    isOver: r,
    onDragEnter: d,
    onDragOver: u,
    onDragLeave: p,
    onDrop: h
  };
}
const Pc = ["move", "copy", "alias"];
function ed({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  Threshold: a = 4,
  Data: r,
  allowedEffects: i,
  GrabCursor: s = "grab",
  GrabbedCursor: l = "grabbing",
  onClick: c,
  onDragStart: d,
  onDragContinuation: u,
  onDragFinish: p,
  onDragCancellation: h,
  onDrop: f
}) {
  Wo("preact component reference", e), Ta(t), In("onlyFrom", n), In("neverFrom", o), va("drag threshold", a), zt("allowedEffects", i, (ee) => fe(ee, Pc), "list of drop effects", 1), ln('"GrabCursor" CSS cursor', s), ln('"GrabbedCursor" CSS cursor', l), Re('"onClick" callback', c), Re('"onDragStart" callback', d), Re('"onDragContinuation" callback', u), Re('"onDragFinish" callback', p), Re('"onDragCancellation" callback', h), Re('"onDrop" callback', f);
  const g = c != null, x = d != null && u != null && p != null && h != null, m = g || x, C = q();
  C.current = { onClick: c, onDragStart: d, onDragContinuation: u, onDragFinish: p, onDragCancellation: h, onDrop: f };
  const k = q(!1);
  k.current = g;
  const L = q(!1);
  L.current = x;
  const $ = q(a);
  $.current = a;
  const y = q(r);
  y.current = r;
  const w = i ?? ["move"], O = q(w);
  O.current = w;
  const T = q(l);
  T.current = l;
  const { closestDropTarget: j } = lt(za), I = q(j);
  I.current = j;
  const M = q(), D = q(), V = q(), B = q(!1), Y = q(!1), Q = q(), pe = q(), P = q();
  Ce(() => {
    e.current != null && (M.current = Ra(e.current, t));
  }, [
    e.current
    /* Container */
  ]), Ce(() => {
    if (!(!x || e.current == null))
      return e.current.style.cursor = s, () => {
        e.current != null && (e.current.style.cursor = "");
      };
  }, [e, x, s]), Ce(() => () => {
    window.removeEventListener("pointermove", te), window.removeEventListener("pointerup", ue), window.removeEventListener("pointercancel", xe), B.current && (B.current = !1, eo());
  }, []);
  const X = se((ee) => {
    if (!(ee.target instanceof HTMLElement) || !Aa(ee) || !m || M.current == null || n != null && !oe(ee.target, n) || o != null && oe(ee.target, o))
      return;
    window.addEventListener("pointermove", te), window.addEventListener("pointerup", ue), window.addEventListener("pointercancel", xe), e.current.setPointerCapture?.(ee.pointerId);
    const re = M.current, ie = re.getBoundingClientRect(), me = ee.clientX - ie.left + re.scrollLeft, ge = ee.clientY - ie.top + re.scrollTop;
    D.current = { x: me, y: ge }, V.current = ee, B.current = !0, Y.current = !1, Q.current = void 0, pe.current = void 0, P.current = void 0;
  }, [e, m, n, o]), te = se((ee) => {
    if (!B.current || M.current == null)
      return;
    const [re, ie, me, ge] = Ge(ee);
    if (!Y.current) {
      if (Math.sqrt(re * re + ie * ie) < $.current)
        return;
      Y.current = !0, L.current && C.current.onDragStart?.(0, 0, D.current.x, D.current.y, V.current);
    }
    if (L.current) {
      const Ie = ee.altKey && O.current.includes("copy") ? ["copy"] : O.current, Me = I.current(ee.clientX, ee.clientY), Ae = Me?.[0], st = Me?.[1];
      if (Ae !== Q.current) {
        Q.current != null && pe.current.onLeave?.(y.current);
        const we = Ae != null ? st.accepts(y.current, Ie) : !1;
        we !== !1 ? (st.onEnter?.(y.current, we, me, ge), Q.current = Ae, pe.current = st, P.current = we) : (Q.current = void 0, pe.current = void 0, P.current = void 0);
      } else if (Q.current != null) {
        const we = pe.current.accepts(y.current, Ie);
        we !== !1 ? (P.current = we, pe.current.onOver?.(y.current, we, me, ge)) : (pe.current.onLeave?.(y.current), Q.current = void 0, pe.current = void 0, P.current = void 0);
      }
      $i(
        // shares the singleton of "useDragging"
        Q.current != null ? Je(P.current) : it(ee.clientX, ee.clientY) ? T.current : "no-drop"
      ), C.current.onDragContinuation?.(re, ie, me, ge, ee);
    }
  }, []), ue = se((ee) => {
    ze(ee, !1);
  }, []), xe = se((ee) => {
    ze(ee, !0);
  }, []), ze = se((ee, re) => {
    if (B.current) {
      if (B.current = !1, e.current?.hasPointerCapture?.(ee.pointerId) && e.current.releasePointerCapture(ee.pointerId), window.removeEventListener("pointermove", te), window.removeEventListener("pointerup", ue), window.removeEventListener("pointercancel", xe), Y.current && eo(), re) {
        Y.current && L.current && (Q.current != null && (pe.current.onLeave?.(y.current), Q.current = void 0, pe.current = void 0, P.current = void 0), C.current.onDragCancellation?.(0, 0, D.current.x, D.current.y, ee)), Y.current = !1;
        return;
      }
      if (Y.current) {
        if (L.current)
          if (Q.current != null) {
            const ie = Q.current, me = pe.current, ge = P.current, Ie = ie.getBoundingClientRect(), Me = ee.clientX - Ie.left + ie.scrollLeft, Ae = ee.clientY - Ie.top + ie.scrollTop;
            Q.current = void 0, pe.current = void 0, P.current = void 0, me.onDrop?.(y.current, ge, Me, Ae), C.current.onDrop?.(0, 0, D.current.x, D.current.y, ee, ie, ge);
          } else
            C.current.onDragFinish?.apply(null, Ge(ee));
      } else if (k.current && M.current != null) {
        const ie = M.current, me = ie.getBoundingClientRect(), ge = ee.clientX - me.left + ie.scrollLeft, Ie = ee.clientY - me.top + ie.scrollTop;
        C.current.onClick?.(ge, Ie, ee);
      }
      Y.current = !1;
    }
  }, []);
  function Ge(ee) {
    const re = M.current;
    if (re == null)
      return [0, 0, 0, 0, ee];
    const ie = re.getBoundingClientRect(), me = ee.clientX - ie.left + re.scrollLeft, ge = ee.clientY - ie.top + re.scrollTop, Ie = me - D.current.x, Me = ge - D.current.y;
    return [Ie, Me, me, ge, ee];
  }
  function Je(ee) {
    switch (ee) {
      case "copy":
        return "copy";
      case "alias":
        return "alias";
      case "move":
        return "move";
      default:
        return T.current;
    }
  }
  function it(ee, re) {
    if (e.current == null)
      return !1;
    const ie = e.current.getBoundingClientRect();
    return ee >= ie.left && ee <= ie.right && re >= ie.top && re <= ie.bottom;
  }
  function oe(ee, re) {
    switch (!0) {
      case re == null:
        return !0;
      case typeof re == "string":
        return ee.matches(re);
      default:
        return ee === re;
    }
  }
  return m ? X : void 0;
}
function td({
  ViewRef: e,
  accepts: t,
  onEnter: n,
  onOver: o,
  onLeave: a,
  onDrop: r
}) {
  Wo("preact component reference", e), Wt("accepts", t), Re('"onEnter" callback', n), Re('"onOver" callback', o), Re('"onLeave" callback', a), Re('"onDrop" callback', r);
  const [i, s] = Be(!1), l = q(
    { accepts: t, onEnter: n, onOver: o, onLeave: a, onDrop: r }
  );
  l.current = { accepts: t, onEnter: n, onOver: o, onLeave: a, onDrop: r };
  const { registerDropTarget: c } = lt(za);
  return Ce(() => {
    if (e.current != null)
      return c(e.current, {
        accepts: (d, u) => l.current.accepts(d, u),
        onEnter: (d, u, p, h) => {
          s(!0), N('usePointerDropSupport callback "onEnter"', l.current.onEnter, d, u, p, h);
        },
        onOver: (d, u, p, h) => N('usePointerDropSupport callback "onOver"', l.current.onOver, d, u, p, h),
        onLeave: (d) => {
          s(!1), N('usePointerDropSupport callback "onLeave"', l.current.onLeave, d);
        },
        onDrop: (d, u, p, h) => {
          s(!1), N('usePointerDropSupport callback "onDrop"', l.current.onDrop, d, u, p, h);
        }
      });
  }, [e.current]), { isOver: i };
}
const ca = /* @__PURE__ */ new WeakMap();
function nd(e, t) {
  return ca.set(e, t), () => ca.delete(e);
}
function od(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n != null; ) {
    const o = ca.get(n);
    if (o != null)
      return [n, o];
    n = n.parentElement;
  }
}
const za = /* @__PURE__ */ Jt({
  registerDropTarget: nd,
  closestDropTarget: od
});
function ad(e, {
  multiple: t,
  disabled: n,
  onDragEnter: o,
  onDragOver: a,
  onDragLeave: r,
  onDrop: i
} = {}) {
  switch (e == null && (e = "*/*"), !0) {
    case Ne(e):
      e = e.trim().replace(/[,\s]+/g, " ").split(" ");
      break;
    case je(e, Ne):
      break;
    default:
      ce(
        'InvalidArgument: "accept" must be a file type string or a non-empty array of file type strings'
      );
  }
  Kt('"multiple" flag', t), Kt('"disabled" flag', n), Re('"onDragEnter" callback', o), Re('"onDragOver" callback', a), Re('"onDragLeave" callback', r), Re('"onDrop" callback', i);
  const s = e.map(
    (C) => C.replace(/;.*$/, "").trim().toLowerCase()
  ).filter((C) => C !== "");
  s.length === 0 && s.push("*/*");
  const l = (
    // also allows for "*" wildcards
    /^(\*\/\*|[a-z0-9]+([._+-][a-z0-9]+)*\/(\*|[a-z0-9]+([._+-][a-z0-9]+)*))$/
  );
  s.every(
    (C) => l.test(C)
  ) || ce(
    "InvalidArgument: the given list of accepted file types is invalid"
  );
  const [c, d] = Be(!1), u = q(0), p = q({});
  p.current = { multiple: t, disabled: n, onDragEnter: o, onDragOver: a, onDragLeave: r, onDrop: i };
  const h = s.join(","), { handleDragEnter: f, handleDragOver: g, handleDragLeave: x, handleDrop: m } = Zt(() => {
    function C(L) {
      return s.some(($) => $ === "*/*" ? !0 : $.endsWith("/*") ? L.startsWith($.slice(0, -1)) : L === $);
    }
    function k(L) {
      if (L == null)
        return !1;
      const $ = L.items;
      return $ == null ? [...L.types].includes("Files") : Array.from($).some(
        (y) => y.kind === "file" && C(y.type.toLowerCase())
      );
    }
    return Ii({
      Name: "useFileDropSupport",
      DragDepth: u,
      setIsOver: d,
      accepts: (L) => p.current.disabled != !0 && k(L.dataTransfer),
      CallbacksOf: () => p.current,
      processedDrop: (L) => {
        if (p.current.disabled == !0)
          return;
        const $ = L.dataTransfer?.files;
        if ($ == null)
          return;
        let y = Array.from($).filter(
          (w) => C(w.type.toLowerCase())
        );
        return p.current.multiple != !0 && (y = y.slice(0, 1)), y.length === 0 ? void 0 : [y];
      }
    });
  }, [h]);
  return {
    isOver: c,
    onDragEnter: f,
    onDragOver: g,
    onDragLeave: x,
    onDrop: m
  };
}
function Pt(e, t) {
  const n = q(), o = q(void 0);
  let a = e ?? ut;
  return n.current != null && document.activeElement === n.current ? a = o.current : (t != null && (a = t(a)), o.current = a), { ViewRef: n, shownValue: o, ValueToShow: a };
}
function jt(e, t) {
  const n = q(e ?? t), o = q(e ?? t);
  return e != null && e !== n.current && (o.current = e, n.current = e), o;
}
function en(e) {
  const {
    Name: t,
    actualDisabling: n,
    shownValue: o,
    onInput: a,
    onValueInput: r,
    onBlur: i,
    processedInput: s
  } = e, l = tt(), c = se((u) => {
    if (Le(u), n == !0)
      return;
    N(t + ' callback "onInput"', a, u);
    let p;
    s == null ? (p = u.target.value, o.current = p === "" ? ut : p) : p = s(u), N(t + ' callback "onValueInput"', r, p, u);
  }, [n, a, r]), d = se((u) => {
    l(), N(t + ' callback "onBlur"', i, u);
  }, [i]);
  return { _onInput: c, _onBlur: d, rerender: l };
}
function tn(e, t) {
  const n = Dt();
  let o = "", a;
  if (e != null && e.length > 0) {
    a = n + "-Suggestions";
    const r = t ?? ((i) => b`<option value=${i}></option>`);
    o = b`<datalist id=${a}>
        ${e.map((i) => r(i))}
      </datalist>`;
  }
  return { SuggestionId: a, SuggestionList: o };
}
function Di(e) {
  const [t, n] = Be({
    Width: 0,
    Height: 0
  });
  return $a(() => {
    const o = e.current;
    if (o == null)
      return;
    const a = new ResizeObserver(() => n(
      (r) => {
        const i = o.clientWidth, s = o.clientHeight;
        return r.Width === i && r.Height === s ? r : { Width: i, Height: s };
      }
    ));
    return a.observe(o), () => a.disconnect();
  }, []), t;
}
function bb(e) {
  let t = Math.round(Math.random() * 1e4).toString();
  return t += "0000".slice(t.length), e = (e || "This operation can not be undone.") + `

Please, enter the following number if you want to proceed:

   ` + t + `

Otherwise, the operation will be cancelled`, window.prompt(e, "") === t ? !0 : (window.alert("Operation will be cancelled"), !1);
}
const to = /* @__PURE__ */ Object.create(null);
function Z(e, t) {
  let n = !1;
  return () => {
    n || (n = !0, Oa(e, t));
  };
}
let Nr = !1;
function rd() {
  if (Nr || typeof document > "u")
    return;
  Nr = !0;
  let e = document.getElementById("JCL-Stylesheet");
  e == null && (e = document.createElement("style"), e.id = "JCL-Stylesheet", e.textContent = `
/*******************************************************************************
*                                                                              *
*                        JavaScript Code Library (JCL)                         *
*                                                                              *
*******************************************************************************/

  :not(:defined) { visibility:hidden }

/**** some basic settings ****/

  .jcl-component {
    display:block; position:relative;
    box-sizing:border-box;
  }

/**** OverlayView ****/

  .jcl-overlay-view {
    box-sizing:border-box;
    display:block; position:fixed;
    background:white; color:black;
    box-shadow:0px 0px 5px 0px black;
    z-index:1000000;
  }
  .jcl-overlay-view.in-dialog {
    z-index:3000000;
  }

/**** Underlay ****/

  .jcl-underlay {
    display:block; position:fixed;
    left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    z-index:1000000;
    pointer-events:auto;
  }
  .jcl-underlay.modal {
    background-image:repeating-linear-gradient(-45deg,
      rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
      rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
    ); background-size:11.31px 11.31px;
    opacity:0.4;
  }
  .jcl-underlay.in-dialog.modal {
    opacity:0.1;
  }
  .jcl-underlay.in-dialog {
    z-index:3000000;
  }

/**** DialogView ****/

  .jcl-dialog-view {
    box-sizing:border-box;
    display:flex; flex-flow:column nowrap; align-items:stretch;
    position:fixed; overflow:hidden;
    border:solid 1px #000000; border-radius:4px;
    background:white; color:black;
    box-shadow:0px 0px 10px 0px rgba(0,0,0,0.5);
    z-index:2000000;
    pointer-events:auto;
  }
  .jcl-dialog-view * {
    box-sizing:border-box;
  }

/**** DialogView Controls ****/

  .jcl-dialog-view > .titlebar {
    display:flex; flex-flow:row nowrap; align-items:center; flex:0 0 auto;
    position:relative; left:0px; top:0px; right:0px; height:30px; overflow:hidden;
    background:#EEEEEE; border:none; border-bottom:solid 1px gray;
    border-radius:3px 3px 0px 0px;
    user-select:none; pointer-events:auto;

    -webkit-touch-callout:none;
    -ms-touch-action:none; touch-action:none;
  }

  .jcl-dialog-view > .titlebar > .title {
    display:inline-block; position:relative; flex:1 0 auto;
    margin-left:6px; margin-top:3px; margin-right:10px; width:auto; height:24px;
    border:none;
    font-weight:bold; color:black; line-height:24px;
    user-select:none;
  }

  .jcl-dialog-view.draggable > .titlebar > .title {
    cursor:grab;
  }

  .jcl-dialog-view > .titlebar > .close-button {
    display:inline-block; position:relative;
    margin-top:3px; margin-right:4px; width:24px; height:24px;
    border:none;
    background-color:currentColor; ${ct} ${hc}
    cursor:pointer;
    user-select:none; pointer-events:auto;
  }

  .jcl-dialog-view > .titlebar > .close-button:focus-visible {
    outline:none; border-radius:4px;
    box-shadow:0px 0px 0px 3px color-mix(
      in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
    );
  }

  .jcl-dialog-view > .content-pane {
    display:inline-block; position:relative; flex:1 1 auto;
    left:0px; top:0px; width:auto; height:auto; overflow:auto;
    border:none; border-radius:0px 0px 3px 3px;
  }

  .jcl-dialog-view.resizable > .content-pane {
    border-radius:0px;
  }

  .jcl-dialog-view > .resizer {
    display:flex; flex-flow:row nowrap; align-items:center; flex:0 0 auto;
    position:relative; left:0px; top:0px; width:auto; height:10px;
    border:none; border-top:solid 1px gray; border-radius:0px 0px 3px 3px;
  }

  .jcl-dialog-view > .resizer > .left-resizer {
    display:inline-block; position:relative;
    left:0px; bottom:0px; width:20px; height:10px;
    border:none; border-right:solid 1px gray;
    border-radius:0px 0px 0px 3px;
    cursor:nesw-resize; pointer-events:auto;

    -webkit-touch-callout:none;
    -ms-touch-action:none; touch-action:none;
  }

  .jcl-dialog-view > .resizer > .middle-resizer {
    display:inline-block; flex:1 0 auto;
    position:relative; left:0px; top:0px; width:auto; height:10px;
    border:none; border-radius:0px;
    cursor:ns-resize; pointer-events:auto;

    -webkit-touch-callout:none;
    -ms-touch-action:none; touch-action:none;
  }

  .jcl-dialog-view > .resizer > .right-resizer {
    display:inline-block; position:relative;
    left:0px; top:0px; width:20px; height:10px;
    border:none; border-left:solid 1px gray; border-radius:0px 0px 3px 0px;
    cursor:nwse-resize; pointer-events:auto;

    -webkit-touch-callout:none;
    -ms-touch-action:none; touch-action:none;
  }

/**** ModalLayer ****/

  .jcl-modal-layer {
    display:block; position:fixed;
    left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    background-image:repeating-linear-gradient(-45deg,
      rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
      rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
    ); background-size:11.31px 11.31px;
    opacity:0.4;
    z-index:1999999;
    pointer-events:auto;
  }



/**** some common settings ****/

  :is(:disabled, .disabled, [disabled]):not(
    :is(:disabled, .disabled, [disabled]) *
  ) { opacity:0.4 }
  .readonly        { background:none }
  .pointer-unaware { pointer-events:none }

/**** some special settings ****/

  .jcl-component.with-outline {
    outline:dotted 1px blue;
    outline-offset:2px;
  }

      `.trim(), document.head.prepend(e)), Object.keys(to).forEach((t) => {
    Oa(t, to[t], !0);
  });
}
function Oa(e, t, n = !1) {
  if (hi("stylesheet name", e), Ye("stylesheet", t), di("mode flag", n), typeof document > "u")
    return;
  const o = "Stylesheet-for-" + Rt(e);
  let a = document.head.querySelector('style[id="' + o + '"]');
  if (a == null) {
    a = document.createElement("style"), a.id = o, a.textContent = t;
    const r = document.head.querySelectorAll(
      'style[id^="Stylesheet-for-"]'
    ), i = r.length > 0 ? r[r.length - 1] : document.getElementById("JCL-Stylesheet");
    i == null ? document.head.prepend(a) : i.after(a), to[e] = t;
  } else
    n ? (a.textContent = t, to[e] = t) : console.warn('multiple definitions for stylesheet "' + e + '"');
}
function id(e) {
  if (hi("stylesheet name", e), typeof document > "u")
    return;
  const t = "Stylesheet-for-" + Rt(e);
  let n = document.head.querySelector('style[id="' + t + '"]');
  n?.remove(), delete to[e];
}
function Ut(e) {
  return K(() => {
    sd(), e = U(e);
    let t = E(
      e.Error,
      (a) => a instanceof Error || $n(a)
    ), n = A(e.ErrorResetter);
    switch (!0) {
      case t instanceof Error:
        break;
      case $n(t):
        if (/^[^\n]+\n\n[^\n]+/.test(t)) {
          const a = t.replace(/\n\n.*$/, ""), r = t.replace(/^[^\n]+\n\n/, "");
          t = new Error(r), t.name = a;
        } else
          t = new Error(t), t.name = "Unexpected Failure";
        break;
      default:
        t = new Error("" + t), t.name = "Unexpected Failure";
    }
    return b`<div class="jcl-error-indicator" onClick=${() => {
      console.warn(t), window.alert(ld(t));
    }}/>`;
  });
}
const sd = /* @__PURE__ */ Z("jcl-error-indicator", `
    .jcl-error-indicator {
      display:inline-block; position:relative;
      width:24px; height:24px;
    }

    .jcl-error-indicator::after {
      content:'';
      display:block; position:absolute; overflow:hidden;
      left:0px; top:0px; width:24px; height:24px;
      background:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E");
      pointer-events:auto;
    }
  `);
function ld(e) {
  let t = e.name, n = e.message || "(unidentified error)", o = e.stack ?? "";
  const a = t.replace(/([a-z])([A-Z])/g, "$1 $2"), r = n.charAt(0).toUpperCase() + n.slice(1);
  return o === "" ? `${a}

${r}` : `${a}

${r}

${o}`;
}
function cd(e) {
  return { current: e };
}
let Br = !1;
function K(e) {
  Br || (Br = !0, rd(), Fl()), Wt("rendering function", e);
  const [t, n] = ja();
  if (t != null) {
    const o = e.name ?? "";
    return o.trim() === "" ? console.warn("rendering error within preact component: " + t) : console.warn(
      "rendering error within " + vt(o) + ": " + t
    ), b`<${Ut} Error=${t} ErrorResetter=${n}/>`;
  }
  try {
    return e();
  } catch (o) {
    const a = e.name ?? "";
    return a.trim() === "" ? console.warn("error while rendering a preact component: " + o) : console.warn(
      "error while rendering component " + vt(a) + ": " + o
    ), b`<${Ut} Error=${o} ErrorResetter=${n}/>`;
  }
}
function dd(e) {
  return K(() => {
    const t = Go(), n = lo(t), { Theme: o, SwatchSet: a, Locale: r, Direction: i } = n, s = so(o, a);
    return b`<div class="jcl-component customizable"
        dir=${i} lang=${r} style=${s}
      >
        <${gt.Provider} value=${n}>
          ${e.children}
        </>
      </>`;
  });
}
function Va(e) {
  return e = { ...e }, Object.keys(e).forEach((t) => {
    e[t] === void 0 && delete e[t];
  }), e;
}
function Ea(e, t, n) {
  Object.assign(e, n), t != null && (t.current == null && (t.current = {}), Object.assign(t.current, n));
}
function Na(e) {
  return () => {
    ce("MissingArgument:function not in " + e);
  };
}
function Ba(e) {
  const t = q([]), n = tt();
  function o(s) {
    dn(e + " name", s);
    const l = Rt(s), c = t.current;
    if (c.length === 0)
      return;
    const d = c.findIndex(
      (u) => u[un] === l
    );
    d < 0 || (t.current = c.filter(
      (u, p) => p !== d
    ), n());
  }
  function a() {
    t.current.length !== 0 && (t.current = [], n());
  }
  function r(s) {
    dn(e + " name", s);
    const l = Rt(s);
    return t.current.findIndex(
      (c) => c[un] === l
    ) >= 0;
  }
  const i = t.current.map(
    (s) => s.Name
  );
  return { ListRef: t, rerender: n, closeEntity: o, closeAllEntities: a, EntityIsOpen: r, openEntities: i };
}
function Wa(e, t, n) {
  De(e) || ce(
    "InvalidArgument: the given " + t + " descriptor is no plain JavaScript object"
  );
  const o = e.Name == null ? t + " descriptor" : "descriptor for " + t + " " + vt(e.Name);
  try {
    n(e);
  } catch (a) {
    throw (a.name === "MissingArgument" || a.name === "InvalidArgument") && (a.message += " in " + o), a;
  }
}
function Li(e, t, n, o, a) {
  return se((r) => {
    if (r.key === "Escape") {
      r.stopPropagation(), t.isModal || n(t.Name);
      return;
    }
    if (t.isModal && r.key === "Tab") {
      const i = e.current;
      if (i == null)
        return;
      const s = Array.from(
        i.querySelectorAll(Ha)
      ).filter((u) => u.tabIndex >= 0);
      if (s.length === 0) {
        r.preventDefault();
        return;
      }
      const l = s[0], c = s[s.length - 1], d = o && document.activeElement === i;
      switch (!0) {
        case (r.shiftKey && (document.activeElement === l || d)):
          r.preventDefault(), c.focus();
          break;
        case (!r.shiftKey && document.activeElement === c):
          r.preventDefault(), l.focus();
          break;
      }
    }
  }, a);
}
function Si(e, t) {
  Ce(() => {
    const n = e.current;
    if (n != null)
      return t.forEach((o) => {
        n.addEventListener(o, Le);
      }), () => {
        t.forEach((o) => {
          n.removeEventListener(o, Le);
        });
      };
  }, []);
}
let Wr = !1;
function Mi() {
  if (Wr)
    return;
  Wr = !0;
  const e = {
    en: "Close",
    de: "Schließen",
    fr: "Fermer",
    es: "Cerrar",
    it: "Chiudi",
    pt: "Fechar"
  };
  Object.keys(e).forEach((t) => {
    Fo(t, {
      "jcl.overlay.close": e[t],
      "jcl.dialog.close": e[t]
    });
  });
}
function ud(e) {
  return K(() => {
    Mi(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.APIRef, Qt), o = e.children, a = q(), {
      // s. "shared Base Helpers" for these commons
      ListRef: r,
      rerender: i,
      closeEntity: s,
      closeAllEntities: l,
      EntityIsOpen: c,
      openEntities: d
    } = Ba("overlay");
    function u(m) {
      xt("overlay descriptor", m), m = Va(m), h(m);
      let {
        Name: C,
        isModal: k,
        Renderer: L,
        onOpen: $,
        onClose: y,
        OffsetX: w,
        OffsetY: O,
        Width: T,
        Height: j,
        minWidth: I,
        minHeight: M,
        maxWidth: D,
        maxHeight: V,
        Role: B,
        Label: Y
      } = m;
      const Q = Rt(C);
      c(C) && ce(
        "OverlayAlreadyOpen: there is already an overlay called " + vt(C)
      ), r.current.push({
        Name: C,
        [un]: Q,
        isModal: k ?? !1,
        Renderer: L,
        onOpen: $,
        onClose: y,
        OffsetX: w ?? 0,
        OffsetY: O ?? 0,
        Width: T,
        Height: j,
        minWidth: I ?? 0,
        minHeight: M ?? 0,
        maxWidth: D,
        maxHeight: V,
        Role: B,
        Label: Y
      }), i();
    }
    function p(m, C) {
      xt("overlay descriptor", m), C instanceof PointerEvent || ce(
        'InvalidArgument: "Event" must be a PointerEvent'
      );
      const k = a.current;
      if (k != null) {
        const L = k.getBoundingClientRect(), $ = C.clientX - L.left + k.scrollLeft, y = C.clientY - L.top + k.scrollTop;
        m = { ...m, OffsetX: $, OffsetY: y };
      }
      u(m);
    }
    function h(m) {
      Wa(m, "overlay", () => {
        dn("Name", m.Name), Kt("isModal", m.isModal), Wt("Renderer", m.Renderer), Re("onOpen", m.onOpen), Re("onClose", m.onClose), Ro("OffsetX", m.OffsetX), Ro("OffsetY", m.OffsetY), yt("Width", m.Width), yt("Height", m.Height), yt("minWidth", m.minWidth), yt("minHeight", m.minHeight), yt("maxWidth", m.maxWidth), yt("maxHeight", m.maxHeight), ka("Role", m.Role), ln("Label", m.Label);
      });
    }
    const f = {
      openOverlay: u,
      openOverlayAtPointer: p,
      closeOverlay: s,
      closeAllOverlays: l,
      openOverlays: d,
      OverlayIsOpen: c
    }, g = An();
    Ea(g, n, f);
    const x = se((m) => {
      if (m.key !== "Escape")
        return;
      const C = r.current;
      for (let k = C.length - 1; k >= 0; k--)
        if (!C[k].isModal) {
          Le(m), s(C[k].Name);
          break;
        }
    }, []);
    return b`<${Ko.Provider} value=${g}>
        <div class="jcl-component overlay-base ${t}" ref=${a}
          onKeyDown=${x} ...${e.RestProps}
        >
          ${o}
          <${pd} OverlayList=${r.current} BaseRef=${a}/>
        </>
      </>`;
  });
}
function pd(e) {
  return K(() => {
    e = U(e);
    const t = E(e.OverlayList, (r) => je(r, De)), n = E(e.BaseRef, (r) => Qt(r)) ?? Se("BaseRef");
    if (t == null || t.length === 0)
      return;
    const { closeOverlay: o } = An(), a = t.length - 1;
    return b`
        ${t.map((r, i) => i === a ? b`
              <${hd} key=${"underlay:" + r.Name}
                Overlay=${r} closeOverlay=${o}
              />
              <${Hr} key=${"view:" + r.Name}
                Overlay=${r} BaseRef=${n}
              />
            ` : b`
              <${Hr} key=${"view:" + r.Name}
                Overlay=${r} BaseRef=${n}
              />
            `)}
      `;
  });
}
const Ti = [
  "click",
  "dblclick",
  /*'mousedown',*/
  "mouseup",
  "mousemove",
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  /*'touchstart',*/
  "touchend",
  "touchmove",
  "touchcancel",
  /*'pointerdown',*/
  "pointerup",
  "pointermove",
  "pointerover",
  "pointerout",
  "pointerenter",
  "pointerleave",
  "pointercancel",
  "keydown",
  "keyup",
  "keypress",
  "wheel",
  "contextmenu",
  "focus",
  "blur"
];
function hd(e) {
  return K(() => {
    e = U(e);
    const t = E(e.Overlay, De) ?? Se("Overlay"), n = A(e.closeOverlay) ?? Se("closeOverlay"), o = q();
    Si(o, Ti);
    const a = se((s) => {
      Le(s), t.isModal || n(t.Name);
    }, [t.isModal, t.Name, n]), i = Fn().DialogName != null;
    return Dn(b`<div
        class="jcl-underlay ${t.isModal ? "modal" : ""} ${i ? "in-dialog" : ""}"
        aria-hidden="true"
        ref=${o}
        onPointerDown=${a}
      />`, document.body);
  });
}
const Ha = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "details",
  "summary",
  "audio[controls]",
  "video[controls]",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function Hr(e) {
  return K(() => {
    e = U(e);
    const t = E(e.Overlay, De) ?? Se("Overlay"), o = (E(e.BaseRef, Qt) ?? Se("BaseRef")).current;
    if (o == null)
      return null;
    const a = tt(), r = q(), i = lt(gt), s = lo(_o), l = i ?? s, { Theme: c, SwatchSet: d, Locale: u, Direction: p } = l, h = so(c, d);
    Ce(() => {
      N(
        `"onOpen" callback of overlay ${t.Name}`,
        t.onOpen,
        t.Name,
        { ...t }
      );
      const Q = setTimeout(a, 0);
      return () => {
        clearTimeout(Q), N(
          `"onClose" callback of overlay ${t.Name}`,
          t.onClose,
          t.Name,
          { ...t }
        );
      };
    }, []), Ce(() => {
      const Q = r.current;
      if (Q == null)
        return;
      const pe = document.activeElement, P = setTimeout(() => {
        (Q.querySelector(Ha) ?? Q).focus();
      }, 50);
      return () => {
        clearTimeout(P), pe?.focus();
      };
    }, []);
    let {
      OffsetX: f,
      OffsetY: g,
      Width: x,
      Height: m,
      minWidth: C,
      minHeight: k,
      maxWidth: L,
      maxHeight: $
    } = t;
    const { left: y, top: w } = o.getBoundingClientRect();
    let O = y, T = w;
    if (r.current == null)
      O += f ?? 0, T += g ?? 0;
    else {
      let { width: Q, height: pe } = r.current.getBoundingClientRect();
      x = Math.max(C ?? 0, Math.min(Q, window.innerWidth, L ?? 1 / 0)), m = Math.max(k ?? 0, Math.min(pe, window.innerHeight, $ ?? 1 / 0)), O = Math.max(0, Math.min(O + (f ?? 0), window.innerWidth - x)), T = Math.max(0, Math.min(T + (g ?? 0), window.innerHeight - m));
    }
    Object.assign(t, {
      // modifies Overlay in-situ (positional hack)
      OffsetX: O - y,
      OffsetY: T - w,
      Width: x,
      Height: m
    });
    const j = An(), I = Li(
      r,
      t,
      (Q) => j.closeOverlay?.(Q),
      !1,
      [t.isModal, t.Name, j]
    ), M = se(() => N(
      `"Renderer" callback of overlay ${t.Name}`,
      t.Renderer,
      t.Name,
      { ...t }
    ), [t]), V = Fn().DialogName != null, B = t.Role ?? "dialog", Y = t.Label ?? t.Name;
    return Dn(b`
        <${Ko.Provider} value=${{
      ...j,
      OverlayName: t.Name
    }}>
        <${gt.Provider} value=${l}>
          <div
            class="jcl-overlay-view ${V ? "in-dialog" : ""}"
            role=${B} aria-modal=${t.isModal ? "true" : void 0}
            aria-label=${Y}
            tabIndex=${-1} dir=${p} lang=${u}
            style="
              visibility:${r.current == null ? "hidden" : "visible"};
              left:${O}px; top:${T}px;
              width: ${x == null ? "auto" : `${x}px`};
              height:${m == null ? "auto" : `${m}px`};
              min-width:${C ?? 0}px; min-height:${k ?? 0}px;
              max-width: ${L == null ? "none" : `${L}px`};
              max-height:${$ == null ? "none" : `${$}px`};
              ${h}
            "
            key="overlay:${t.Name}" ref=${r}
            onKeyDown=${I}
          >
            <${M}/>
          </>
        </>
        </>
      `, document.body);
  });
}
const Hn = Na("OverlayContext"), Ko = /* @__PURE__ */ Jt({
  openOverlay: Hn,
  openOverlayAtPointer: Hn,
  closeOverlay: Hn,
  closeAllOverlays: Hn,
  openOverlays: [],
  OverlayIsOpen: Hn
});
function An() {
  return lt(Ko);
}
function fd(e) {
  return K(() => {
    Mi(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.APIRef, Qt), o = e.children, a = q(), {
      // s. "shared Base Helpers" for these commons
      ListRef: r,
      rerender: i,
      closeEntity: s,
      closeAllEntities: l,
      EntityIsOpen: c,
      openEntities: d
    } = Ba("dialog");
    function u(m) {
      xt("dialog descriptor", m), m = Va(m), f(m);
      const {
        Name: C,
        Title: k,
        isModal: L,
        hasCloseButton: $,
        isResizable: y,
        isDraggable: w,
        dontShrink: O,
        Renderer: T,
        onOpen: j,
        onClose: I,
        OffsetX: M,
        OffsetY: D,
        Width: V,
        Height: B,
        minWidth: Y,
        minHeight: Q,
        maxWidth: pe,
        maxHeight: P
      } = m, X = Rt(C);
      c(C) && ce(
        "DialogAlreadyOpen: there is already a dialog called " + vt(C)
      ), r.current.push({
        Name: C,
        [un]: X,
        Title: k,
        isModal: L ?? !1,
        hasCloseButton: $,
        isResizable: y,
        isDraggable: w,
        dontShrink: O,
        Renderer: T,
        onOpen: j,
        onClose: I,
        OffsetX: M,
        OffsetY: D,
        Width: V,
        Height: B,
        minWidth: Y ?? 0,
        minHeight: Q ?? 0,
        maxWidth: pe,
        maxHeight: P
      }), i();
    }
    function p(m) {
      dn("dialog name", m);
      const C = Rt(m), k = r.current;
      return k[k.length - 1]?.[un] === C;
    }
    function h(m) {
      dn("dialog name", m);
      const C = Rt(m), k = r.current, L = k.findIndex(
        (y) => y[un] === C
      );
      if (L < 0 || L === k.length - 1)
        return;
      const $ = k[L];
      r.current = [
        ...k.filter((y, w) => w !== L),
        $
      ], i();
    }
    function f(m) {
      Wa(m, "dialog", () => {
        dn("Name", m.Name), Kt("isModal", m.isModal), Kt("hasCloseButton", m.hasCloseButton), Kt("isResizable", m.isResizable), Kt("isDraggable", m.isDraggable), Kt("dontShrink", m.dontShrink), Wt("Renderer", m.Renderer), Re("onOpen", m.onOpen), Re("onClose", m.onClose), Ro("OffsetX", m.OffsetX), Ro("OffsetY", m.OffsetY), yt("Width", m.Width), yt("Height", m.Height), yt("minWidth", m.minWidth), yt("minHeight", m.minHeight), yt("maxWidth", m.maxWidth), yt("maxHeight", m.maxHeight);
      });
    }
    const g = {
      openDialog: u,
      closeDialog: s,
      closeAllDialogs: l,
      openDialogs: d,
      DialogIsOpen: c,
      DialogIsFrontmost: p,
      bringDialogToFront: h
    }, x = Fn();
    return Ea(x, n, g), b`<${Uo.Provider} value=${x}>
        <div class="jcl-component dialog-base ${t ?? ""}"
          ref=${a} ...${e.RestProps}
        >
          ${o}
          <${gd}
            DialogList=${r.current}
            BaseRef=${a} rerender=${i}
          />
        </div>
      </>`;
  });
}
function gd(e) {
  return K(() => {
    e = U(e);
    const t = E(e.DialogList, (r) => je(r, De)), n = E(e.BaseRef, (r) => Qt(r)) ?? Se("BaseRef"), o = A(e.rerender) ?? Se("rerender");
    if (t == null || t.length === 0)
      return;
    const a = t.length - 1;
    return b`
        ${t.map((r, i) => b`
          ${i === a && r.isModal && b`
            <${bd} key=${"modal:" + r.Name}/>
          `}
          <${yd} key=${"view:" + r.Name}
            Dialog=${r} BaseRef=${n} rerender=${o}
          />
        `)}
      `;
  });
}
const md = [
  ...Ti,
  "mousedown",
  "touchstart",
  "pointerdown"
];
function bd(e) {
  return K(() => {
    const t = q();
    return Si(t, md), Dn(
      b`<div class="jcl-modal-layer" ref=${t} aria-hidden="true"/>`,
      document.body
    );
  });
}
function yd(e) {
  return K(() => {
    e = U(e);
    const t = E(e.Dialog, De) ?? Se("Dialog"), n = E(e.BaseRef, (we) => Qt(we)) ?? Se("BaseRef"), o = A(e.rerender), a = n.current;
    if (a == null)
      return null;
    const r = lt(gt), i = lo(_o), s = r ?? i, { Theme: l, SwatchSet: c, Locale: d, Direction: u } = s, p = so(l, c), { localized: h } = Ma(s), f = tt(), g = h("jcl.dialog.close"), x = Dt() + "-dlg-title";
    let {
      Name: m,
      Title: C,
      hasCloseButton: k,
      isResizable: L,
      isDraggable: $,
      OffsetX: y,
      OffsetY: w,
      Width: O,
      Height: T,
      minWidth: j,
      minHeight: I,
      maxWidth: M,
      maxHeight: D,
      dontShrink: V
    } = t;
    const B = C != null || k === !0 || $ === !0, Y = L ? "resizable" : "", Q = $ ? "draggable" : "";
    j == null && (j = 0), I == null && (I = 0);
    const pe = 0, P = (B ? 30 : 0) + (L ? 10 : 0);
    (B || L) && (I += P, T != null && (T += P)), k && (j = Math.max(40, j)), L && (j = Math.max(60, j));
    const X = q(), { left: te, top: ue } = a.getBoundingClientRect();
    let xe = te, ze = ue;
    if (X.current == null)
      xe += y ?? 0, ze += w ?? 0;
    else {
      const { width: we, height: Ve } = X.current.getBoundingClientRect(), { width: qe, height: ke } = a.getBoundingClientRect();
      O = Math.min(O ?? we, window.innerWidth), T = Math.min(T ?? Ve, window.innerHeight), y == null && (t.OffsetX = y = (qe - O) / 2), w == null && (t.OffsetY = w = (ke - T) / 2), xe = Math.max(0, Math.min(xe + y, window.innerWidth - O)), ze = Math.max(0, Math.min(ze + w, window.innerHeight - T)), t.OffsetX = xe - te, t.OffsetY = ze - ue, V === !0 && (j = t.minWidth = Math.max(j, O) - pe, I = t.minHeight = Math.max(I, T) - P, delete t.dontShrink), t.Width = O, t.Height = T - P;
    }
    const Ge = Fn(), { closeDialog: Je, DialogIsFrontmost: it, bringDialogToFront: oe } = Ge, ee = Li(
      X,
      t,
      Je,
      !0,
      [t, Je]
    );
    $a(() => {
      f();
    }, []);
    const re = q(null);
    Ce(() => {
      re.current = document.activeElement, N(
        `"onOpen" callback of dialog ${t.Name}`,
        t.onOpen,
        t.Name,
        { ...t }
      );
      const we = setTimeout(() => {
        const Ve = X.current;
        if (Ve == null)
          return;
        (Ve.querySelector(Ha) ?? Ve).focus();
      }, 50);
      return () => {
        clearTimeout(we), N(
          `"onClose" callback of dialog ${t.Name}`,
          t.onClose,
          t.Name,
          { ...t }
        ), re.current?.focus();
      };
    }, []);
    const ie = q({ Mode: void 0, x: 0, y: 0, Width: 0, Height: 0 }), me = se((we, Ve) => {
      t.OffsetX = ie.current.x + we, t.OffsetY = ie.current.y + Ve, it(t.Name) || (oe(t.Name), o?.()), f();
    }, [t, it, oe, f, o]), ge = hn({
      ViewRef: X,
      ...$ ? {
        onlyFrom: ".titlebar",
        neverFrom: ".close-button",
        onDragStart: () => {
          ie.current = { x: t.OffsetX, y: t.OffsetY };
        },
        onDragContinuation: (we, Ve) => me(we, Ve),
        onDragFinish: (we, Ve) => me(we, Ve),
        onDragCancellation: (we, Ve) => me(we, Ve)
      } : {}
    }), Ie = se((we) => {
      if (we == null)
        return;
      const Ve = we.target.classList;
      let qe;
      switch (!0) {
        case Ve.contains("left-resizer"):
          qe = "resize-sw";
          break;
        case Ve.contains("middle-resizer"):
          qe = "resize-s";
          break;
        case Ve.contains("right-resizer"):
          qe = "resize-se";
          break;
      }
      ie.current = {
        Mode: qe,
        x: t.OffsetX,
        Width: t.Width,
        y: t.OffsetY,
        Height: t.Height
      };
    }, [t]), Me = se((we, Ve) => {
      const { minWidth: qe, maxWidth: ke, minHeight: Xe, maxHeight: Qe } = t;
      let $e = ie.current.Width;
      switch (ie.current.Mode) {
        case "resize-sw":
          $e = Math.max(qe ?? 0, Math.min($e - we, ke ?? 1 / 0)), we = $e - ie.current.Width, t.OffsetX = ie.current.x - we, t.Width = ie.current.Width + we;
          break;
        case "resize-se":
          t.Width = Math.max(qe ?? 0, Math.min(ie.current.Width + we, ke ?? 1 / 0));
          break;
      }
      t.Height = Math.max(Xe ?? 0, Math.min(ie.current.Height + Ve, Qe ?? 1 / 0)), it(t.Name) || (oe(t.Name), o?.()), f();
    }, [t, it, oe, f, o]), Ae = hn({
      ViewRef: X,
      ...L ? {
        onlyFrom: ".left-resizer,.middle-resizer,.right-resizer",
        onDragStart: (we, Ve, qe, ke, Xe) => Ie(Xe),
        onDragContinuation: (we, Ve) => Me(we, Ve),
        onDragFinish: (we, Ve) => Me(we, Ve),
        onDragCancellation: (we, Ve) => Me(we, Ve)
      } : {}
    }), st = se(
      () => He(
        `"Renderer" callback of dialog ${t.Name}`,
        t.Renderer,
        t.Name,
        { ...t }
      ),
      [t]
    );
    return Dn(b`
        <${Uo.Provider} value=${{ ...Ge, DialogName: t.Name }}>
        <${gt.Provider} value=${s}>
          <div class="jcl-dialog-view ${Y} ${Q}"
            role="dialog"
            aria-modal=${t.isModal ? "true" : void 0}
            aria-labelledby=${B ? x : void 0}
            aria-label=${B ? void 0 : C ?? m}

            tabIndex=${-1} key=${"dialog:" + m} ref=${X}
            dir=${u} lang=${d}
            style="
              visibility:${X.current == null ? "hidden" : "visible"};
              left:${xe}px; top:${ze}px;
              width:${O == null ? "auto" : `${O}px`};
              height:${T == null ? "auto" : `${T}px`};
              min-width:${j}px; min-height:${I}px;
              max-width:${M == null ? "none" : `${M}px`};
              max-height:${D == null ? "none" : `${D}px`};
              ${p}
            "
            onPointerDown=${() => oe(m)}
            onKeyDown=${ee}
          >
            ${B && b`
              <div class="titlebar" onPointerDown=${ge}>
                <span id=${x} class="title">${C ?? ""}</span>
                ${k && b`
                  <button type="button" class="close-button"
                    aria-label=${g}
                    onClick=${() => Je(t.Name)}
                  />
                `}
              </div>
            `}
            <div class="content-pane">
              <${st}/>
            </div>
            ${L && b`
              <div class="resizer" aria-hidden="true">
                <div class="left-resizer"   onPointerDown=${Ae}/>
                <div class="middle-resizer" onPointerDown=${Ae}/>
                <div class="right-resizer"  onPointerDown=${Ae}/>
              </div>
            `}
          </div>
        </>
        </>
      `, document.body);
  });
}
const xn = Na("DialogContext"), Uo = /* @__PURE__ */ Jt({
  openDialog: xn,
  closeDialog: xn,
  closeAllDialogs: xn,
  openDialogs: [],
  DialogIsOpen: xn,
  DialogIsFrontmost: xn,
  bringDialogToFront: xn
});
function Fn() {
  return lt(Uo);
}
let xd = 0;
function wd(e) {
  return K(() => {
    vd(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.APIRef, Qt), o = E(e.Placement, (g) => fe(g, ["top-left", "top-right", "bottom-left", "bottom-right"])) ?? "bottom-right", a = e.children, {
      // s. "shared Base Helpers" for these commons
      ListRef: r,
      rerender: i,
      closeEntity: s,
      closeAllEntities: l,
      EntityIsOpen: c,
      openEntities: d
    } = Ba("toast");
    function u(g) {
      xt("toast descriptor", g), g = Va(g), p(g);
      let { Name: x, Renderer: m, Duration: C, onOpen: k, onClose: L } = g;
      x == null && (x = "Toast-" + ++xd);
      const $ = Rt(x);
      return c(x) && ce(
        "ToastAlreadyOpen: there is already a toast called " + vt(x)
      ), r.current.push({
        Name: x,
        [un]: $,
        Renderer: m,
        Duration: C ?? 5e3,
        onOpen: k,
        onClose: L
      }), i(), x;
    }
    function p(g) {
      Wa(g, "toast", () => {
        Nl("Name", g.Name), Wt("Renderer", g.Renderer), $l("Duration", g.Duration), Re("onOpen", g.onOpen), Re("onClose", g.onClose);
      });
    }
    const h = {
      showToast: u,
      closeToast: s,
      closeAllToasts: l,
      openToasts: d,
      ToastIsOpen: c
    }, f = Ga();
    return Ea(f, n, h), b`<${_a.Provider} value=${f}>
        <div class="jcl-component toast-base ${t}" ...${e.RestProps}>
          ${a}
          <div class="jcl-toast-viewport placement-${o}" aria-live="polite">
            <${Cd} ToastList=${r.current}/>
          </>
        </>
      </>`;
  });
}
const vd = /* @__PURE__ */ Z("jcl-component.toast-base", `
    .jcl-component.toast-base {
      display:contents;
    }

    .jcl-toast-viewport {
      display:flex; flex-flow:column nowrap;
      gap:8px;
      position:fixed; z-index:5000000; /* above everything else */
      pointer-events:none;
    }

  /**** near the top, the newest toast appears first ****/

    .jcl-toast-viewport.placement-top-left,
    .jcl-toast-viewport.placement-top-right {
      flex-flow:column-reverse nowrap;
    }

    .jcl-toast-viewport.placement-top-left     { left:16px;  top:16px    }
    .jcl-toast-viewport.placement-top-right    { right:16px; top:16px    }
    .jcl-toast-viewport.placement-bottom-left  { left:16px;  bottom:16px }
    .jcl-toast-viewport.placement-bottom-right { right:16px; bottom:16px }
  `);
function Cd(e) {
  return K(() => {
    e = U(e);
    const t = E(e.ToastList, (n) => je(n, De));
    if (!(t == null || t.length === 0))
      return b`${t.map(
        (n) => b`
          <${kd} key=${"view:" + n.Name} Toast=${n}/>
        `
      )}`;
  });
}
const Ri = /* @__PURE__ */ Jt(void 0);
function kd(e) {
  return K(() => {
    jd(), e = U(e);
    const t = E(e.Toast, De) ?? Se("Toast"), { closeToast: n } = Ga(), [o, a] = Be(!1), r = q(void 0), i = q(0);
    function s() {
      r.current != null && (clearTimeout(r.current), r.current = void 0);
    }
    function l() {
      s(), t.Duration > 0 && (r.current = setTimeout(() => n(t.Name), t.Duration));
    }
    function c() {
      s(), a(!0);
    }
    function d() {
      i.current++, l(), a(!1);
    }
    return Ce(() => (l(), N('toast callback "onOpen"', t.onOpen), () => {
      s(), N('toast callback "onClose"', t.onClose);
    }), []), b`<div class="jcl-toast-view" role="status"
        onMouseEnter=${c} onMouseLeave=${d}
      >
        <${Ri.Provider} value=${{ Name: t.Name, closeToast: n }}>
          ${t.Renderer({})}
        </>
        ${t.Duration > 0 && b`<div class="remaining-time"
          key=${i.current} aria-hidden="true"
          style="animation-duration:${t.Duration}ms; animation-play-state:${o ? "paused" : "running"}"
        />`}
      </>`;
  });
}
const jd = /* @__PURE__ */ Z("jcl-toast-view", `
    @keyframes jcl-toast-in {
      from { opacity:0; transform:translateY(8px) }
      to   { opacity:1; transform:none }
    }

    .jcl-toast-view {
      position:relative;         /* anchors the "remaining time" progress bar */
      width:360px; max-width:calc(100vw - 32px);
      pointer-events:auto;
      animation:jcl-toast-in 0.2s ease;
    }

  /**** a discreet progress bar shows the remaining time ****/

    @keyframes jcl-toast-countdown {
      from { transform:scaleX(1) }
      to   { transform:scaleX(0) }
    }

    .jcl-toast-view > .remaining-time {
      position:absolute; left:12px; right:12px; bottom:5px;
      height:2px; border-radius:1px;
      background:color-mix(
        in srgb, var(--jcl-muted-fg-color,#737373) 40%, transparent
      );
      transform-origin:left center;
      animation:jcl-toast-countdown linear forwards;
      pointer-events:none;
    }
  `), ko = Na("ToastContext"), _a = /* @__PURE__ */ Jt({
  showToast: ko,
  closeToast: ko,
  closeAllToasts: ko,
  openToasts: [],
  ToastIsOpen: ko
});
function Ga() {
  return lt(_a);
}
function $d(e) {
  return Id(), Ai("fullsized", e);
}
const Id = /* @__PURE__ */ Z("jcl-component.fullsized", `
    .jcl-component.fullsized {
      flex:1 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    }
    .jcl-component.fullsized > * {
      position:absolute;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    }
  `);
function Ka(e) {
  return Dd(), Ai("centered", e);
}
const Dd = /* @__PURE__ */ Z("jcl-component.centered", `
    .jcl-component.centered {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:center !important; justify-content:center !important;
      flex:1 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    }
    .jcl-component.centered > * {
      position:relative; flex:0 0 auto;
    }
  `);
function Ld(e) {
  return Sd(), Fi("horizontal", e);
}
const Sd = /* @__PURE__ */ Z("jcl-component.horizontal", `
    .jcl-component.horizontal {
      display:flex !important; flex-flow:row nowrap !important;
        align-items:center;
    }
    .jcl-component.horizontal > * {
      position:relative; flex:0 0 auto;
    }
  `);
function Md(e) {
  return Td(), Fi("vertical", e);
}
const Td = /* @__PURE__ */ Z("jcl-component.vertical", `
    .jcl-component.vertical {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:start;
    }
    .jcl-component.vertical > * {
      position:relative; flex:0 0 auto;
    }
  `);
function Rd(e) {
  return K(() => {
    Ad(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style) ?? "", o = qt(e.Columns) ?? 2, a = ve(e.RowGap) ?? 0, r = ve(e.ColGap) ?? 0, i = S(e.ColumnClasses) ?? "", s = Yt(e.children);
    function l(g) {
      if (typeof g == "string")
        return 1;
      {
        const x = g.props.colspan;
        return kn(x) ? x : 1;
      }
    }
    const c = s.filter(
      (g) => typeof g != "string" ? g != null && g.type != null : g.trim() !== ""
    ), d = c.length, u = [[]];
    let p = 0, h = 0;
    c.forEach((g, x) => {
      u[p].push(g), h += l(g), h >= o && x < d - 1 && (u.push([]), p++, h = 0);
    });
    const f = i.trim() === "" ? "" : b`<colgroup>${i.split(" ").map(
      (g) => b`<col class="${g}"/>`
    )}</>`;
    return b`<table class="jcl-component tabular ${t}" style="
        ${n};
        border-spacing:${r}px ${a}px;
        margin:-${a}px -${r}px -${a}px -${r}px
      " ...${e.RestProps}
      >${f}<tbody>
        ${d > 0 && u.map((g) => b`<tr>
          ${g.map(
      (x) => b`<td colspan=${l(x)}>${x}</>`
    )}
        </tr>`)}
      </tbody></table>`;
  });
}
const Ad = /* @__PURE__ */ Z("jcl-component.tabular", `
    .jcl-component.tabular {
      display:table !important;
      border:none; border-collapse:separate; border-spacing:0px;
    }
    .jcl-component.tabular > tbody {
      position:relative;
      vertical-align:top;
    }
    .jcl-component.tabular > tbody > tr > td {
      display:table-cell;
      margin:0px; padding:0px;
    }

    .jcl-component.tabular > colgroup > col.expanding { width:100% }
    .jcl-component.tabular > colgroup > col.shrinking { width:1px }
  `);
function Fd(e) {
  return K(() => {
    zd(), e = U(e);
    const t = S(e.Class) ?? "";
    let n = ve(e.activeIndex) ?? 0, o = Yt(e.children).filter(
      (r) => typeof r != "string" || r.trim() !== ""
    );
    const a = o.length;
    return n = a === 0 ? 0 : Math.max(0, Math.min(n, a - 1)), b`<div class="jcl-component selective ${t}"
        ...${e.RestProps}>${o[n]}</>`;
  });
}
const zd = /* @__PURE__ */ Z("jcl-component.selective", `
    .jcl-component.selective {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:stretch !important; justify-content:stretch !important;
      flex:1 0 auto;
    }
    .jcl-component.selective > * {
      display:block; position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    }
  `);
function Od(e) {
  return K(() => {
    Vd(), e = U(e);
    const t = S(e.Class) ?? "", n = e.children;
    return b`<div class="jcl-component stacked ${t}" ...${e.RestProps}>
        ${n}
      </>`;
  });
}
const Vd = /* @__PURE__ */ Z("jcl-component.stacked", `
    .jcl-component.stacked > *:first-child {
      position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
    .jcl-component.stacked > *:not(:first-child) {
      position:absolute; top:0px;
    }
  `);
function Ai(e, t) {
  return K(() => {
    t = U(t);
    const n = S(t.Class) ?? "", o = t.children;
    return b`<div class="jcl-component ${e} ${n}" ...${t.RestProps}>
        ${o}
      </>`;
  });
}
function Fi(e, t) {
  return K(() => {
    t = U(t);
    const n = S(t.Class) ?? "", o = ae(t.Style) ?? "", a = ve(t.Gap) ?? 0, r = t.children;
    return b`<div class="jcl-component ${e} ${n}"
        style="gap:${a}px; ${o}" ...${t.RestProps}
      >${r}</>`;
  });
}
function Ed(e) {
  return K(() => {
    Nd(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value) ?? "", o = J(e.visiblePattern) ?? !1;
    return b`<div
        class="jcl-component dummy ${o ? "visible-pattern" : ""} ${t}"
        aria-hidden="true"
        ...${e.RestProps} dangerouslySetInnerHTML=${{ __html: n }}
      />`;
  });
}
const Nd = /* @__PURE__ */ Z("jcl-component.dummy", `
    .jcl-component.dummy.visible-pattern {
      background-image:repeating-linear-gradient(-45deg,
        rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
        rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
      ); background-size:11.31px 11.31px;
    }
  `);
function Bd(e) {
  return K(() => {
    zi(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style) ?? "", o = ve(e.Width), a = ve(e.Height), r = (o == null ? "" : `width:${o}px;`) + (a == null ? "" : `height:${a}px;`) + n;
    return b`<div class="jcl-component spacer ${t}"
        style=${r} aria-hidden="true" ...${e.RestProps}/>`;
  });
}
function Wd(e) {
  return K(() => {
    zi(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style) ?? "", o = ve(e.Width), a = ve(e.Height), r = (o == null ? "" : `width:${o}px;`) + (a == null ? "" : `height:${a}px;`) + n;
    return b`<div class="jcl-component expanding-spacer ${t}"
        style=${r} aria-hidden="true" ...${e.RestProps}/>`;
  });
}
const zi = /* @__PURE__ */ Z("jcl-component.expanding-spacer", `
    .jcl-component.expanding-spacer {
      flex:1 0 auto !important;
    }
  `);
function Hd(e) {
  return K(() => {
    Oi(), Vi(), e = U(e);
    const t = S(e.Class) ?? "";
    return b`<div class="jcl-component horizontal-separator ${t}"
        role="separator" aria-orientation="horizontal" ...${e.RestProps}/>`;
  });
}
const Oi = /* @__PURE__ */ Z("jcl-component.horizontal-separator", `
    .jcl-component.horizontal-separator {
      position:relative;
      flex:1 0 auto;
      width:100%; min-width:1px; min-height:1px;
    }
    .jcl-component.horizontal-separator::before {
      content: "";
      position:absolute; left:0px; right:0px; width:100%; height:1px;
      top:50%; transform:translateY(-50%);
      background:gray;
    }
    @media (prefers-contrast: more) {
      .jcl-component.horizontal-separator::before { background:currentColor; height:2px }
    }
  `);
function _d(e) {
  return K(() => {
    Oi(), Vi(), e = U(e);
    const t = S(e.Class) ?? "";
    return b`<div class="jcl-component vertical-separator ${t}"
        role="separator" aria-orientation="vertical" ...${e.RestProps}/>`;
  });
}
const Vi = /* @__PURE__ */ Z("jcl-component.vertical-separator", `
    .jcl-component.vertical-separator {
      position:relative;
      flex:1 0 auto;
      height:100%; min-width:1px; min-height:1px;
    }
    .jcl-component.vertical-separator::before {
      content: "";
      position:absolute; top:0px; bottom:0px; width:1px; height:100%;
      left:50%; transform:translateX(-50%);
      background:gray;
    }
    @media (prefers-contrast: more) {
      .jcl-component.vertical-separator::before { background:currentColor; width:2px }
    }
  `);
function qo(e) {
  return K(() => {
    Kd(), qd(), Yd(), Zd(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Value), o = qt(e.ARIALevel);
    return b`<div class=${t} aria-level=${o} ...${e.RestProps}>
        ${n ?? e.children}
      </>`;
  });
}
function Gd(e) {
  return e = {
    role: "heading",
    "aria-level": 1,
    ...e,
    class: `jcl-component title ${e.class ?? ""}`
  }, qo(e);
}
const Kd = /* @__PURE__ */ Z("jcl-component.title", `
    .jcl-component.title {
      font-size:22px; font-weight:bold; line-height:32px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Ud(e) {
  return e = {
    role: "heading",
    "aria-level": 2,
    ...e,
    class: `jcl-component subtitle ${e.class ?? ""}`
  }, qo(e);
}
const qd = /* @__PURE__ */ Z("jcl-component.subtitle", `
    .jcl-component.subtitle {
      font-size:18px; font-weight:bold; line-height:27px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Xd(e) {
  return e = { ...e, class: `jcl-component label ${e.class ?? ""}` }, qo(e);
}
const Yd = /* @__PURE__ */ Z("jcl-component.label", `
    .jcl-component.label {
      height:30px;
      font-size:14px; font-weight:bold; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Jd(e) {
  return e = { ...e, class: `jcl-component textlineview ${e.class ?? ""}` }, qo(e);
}
const Zd = /* @__PURE__ */ Z("jcl-component.textlineview", `
    .jcl-component.textlineview {
      height:30px;
      font-size:14px; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Ei(e) {
  return K(() => {
    Qd(), eu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value);
    return b`<div class=${t} ...${e.RestProps}>
        ${n ?? e.children}
      </>`;
  });
}
function Ua(e) {
  return e = { ...e, class: `jcl-component description ${e.class ?? ""}` }, Ei(e);
}
const Qd = /* @__PURE__ */ Z("jcl-component.description", `
    .jcl-component.description {
      font-size:14px; font-weight:normal; line-height:21px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Pd(e) {
  return e = { ...e, class: `jcl-component fineprint ${e.class ?? ""}` }, Ei(e);
}
const eu = /* @__PURE__ */ Z("jcl-component.fineprint", `
    .jcl-component.fineprint {
      font-size:12px; font-weight:normal; line-height:18px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function tu(e) {
  return K(() => {
    nu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = J(e.preformatted) ?? !1;
    return b`<div class="jcl-component textview ${t} ${o ? "preformatted" : ""}"
        ...${e.RestProps}
      >${n ?? ""}</>`;
  });
}
const nu = /* @__PURE__ */ Z("jcl-component.textview", `
    .jcl-component.textview {
      overflow:auto; overscroll-behavior:contain;
      font-size:14px; font-weight:normal; line-height:21px;
    }
    .jcl-component.textview.preformatted {
      white-space:pre;
      font-family:"Courier New",Courier,"Lucida Sans Typewriter","Lucida Console",Monaco,Consolas,monospace;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
function ou(e) {
  return K(() => {
    au(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value) ?? "";
    return b`<div class="jcl-component htmlview ${t}" ...${e.RestProps}
        dangerouslySetInnerHTML=${{ __html: n }}
      />`;
  });
}
const au = /* @__PURE__ */ Z("jcl-component.htmlview", `
    .jcl-component.htmlview {
      overflow:auto; overscroll-behavior:contain;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
let zo, Oo, da, Cn;
const ru = co(async () => {
  const [
    e,
    t,
    n,
    o
  ] = await Promise.all([
    at("marked"),
    at("marked-katex-extension"),
    at("marked-highlight"),
    at("highlight.js/lib/core")
  ]);
  zo = e.Marked, Oo = t.default ?? t, da = n.markedHighlight, Cn = o.default ?? o;
  const a = [
    // 'python' is not registered
    "css",
    "javascript",
    "java",
    "json",
    "typescript",
    "xml"
  ], r = await Promise.all(a.map(
    (i) => at("highlight.js/lib/languages/" + i)
  ));
  a.forEach((i, s) => {
    Cn.registerLanguage(i, r[s].default);
  }), cn = new zo(), cn.setOptions({
    gfm: !0,
    breaks: !0,
    pedantic: !1
  }), cn.use(Oo({
    throwOnError: !1,
    nonStandard: !1
    // "$...$" needs a blank/punctuation around it
  })), cn.use(da({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(i, s) {
      const l = Cn.getLanguage(s) ? s : "plaintext";
      return Cn.highlight(i, { language: l }).value;
    }
  }));
});
function uo() {
  return ru();
}
let cn;
async function iu() {
  return await uo(), cn;
}
function Ni(e) {
  return K(() => {
    su();
    const t = Tn(uo);
    e = U(e);
    const n = S(e.Class) ?? "", o = E(e.Value, oo) ?? "", a = Zt(() => t ? cn.parse(o) : "", [t, o]);
    return b`<div class="jcl-component markdownview ${n}"
        ...${e.RestProps}
        dangerouslySetInnerHTML=${{ __html: a }}
      />`;
  });
}
const su = /* @__PURE__ */ Z("jcl-component.markdownview", `
    .jcl-component.markdownview {
      overflow:auto; overscroll-behavior:contain;
      font-size:14px; font-weight:normal; line-height:21px;
    }

    .jcl-component.markdownview > h1 { font-size:22px; font-weight:bold; line-height:1.5; margin:0px }
    .jcl-component.markdownview > h2 { font-size:20px; font-weight:bold; line-height:1.5; margin:0px }
    .jcl-component.markdownview > h3 { font-size:18px; font-weight:bold; line-height:1.5; margin:0px }
    .jcl-component.markdownview > h4 { font-size:16px; font-weight:bold; line-height:1.5; margin:0px }
    .jcl-component.markdownview > h5 { font-size:15px; font-weight:bold; line-height:1.5; margin:0px }
    .jcl-component.markdownview > h6 { font-size:14px; font-weight:bold; line-height:1.5; margin:0px }

    .jcl-component.markdownview > h1:not(:first-child) { margin-top:11px }
    .jcl-component.markdownview > h2:not(:first-child) { margin-top:10px }
    .jcl-component.markdownview > h3:not(:first-child) { margin-top:9px }
    .jcl-component.markdownview > h4:not(:first-child) { margin-top:8px }
    .jcl-component.markdownview > h5:not(:first-child) { margin-top:8px }
    .jcl-component.markdownview > h6:not(:first-child) { margin-top:7px }

    .jcl-component.markdownview > p { font-size:14px; font-weight:normal; line-height:1.5; margin:0px }
    .jcl-component.markdownview > p:not(:first-child) { margin-top:7px }

    .jcl-component.markdownview > ul { font-size:14px; font-weight:normal; line-height:1.5; margin:0px; padding-left:20px }
    .jcl-component.markdownview > ul:not(:first-child) { margin-top:7px }

    .jcl-component.markdownview > ol { font-size:14px; font-weight:normal; line-height:1.5; margin:0px; padding-left:20px }
    .jcl-component.markdownview > ol:not(:first-child) { margin-top:7px }

    .jcl-component.markdownview ul ul, .jcl-component.markdownview ul ol,
    .jcl-component.markdownview ol ul, .jcl-component.markdownview ol ol { padding-left:20px }

    .jcl-component.markdownview > blockquote {
      margin:7px 0px 0px 10px;
      padding:0px 0px 0px 6px;
      border:none; border-left:solid 4px lightgray;
    }

    .jcl-component.markdownview :not(pre) > code {
      font-family:Menlo,Courier,monospace;
      font-size:13px; font-weight:normal; line-height:1.5; margin:0px;
      padding:2px; background-color:#EEEEEE;
    }

    .jcl-component.markdownview > pre { background-color:#EEEEEE; padding:2px 0px 2px 6px }
    .jcl-component.markdownview > pre:not(:first-child) { margin-top:7px }
    .jcl-component.markdownview > pre > code { padding:0px }

    .jcl-component.markdownview > table {
      font-size:14px; font-weight:normal; line-height:1.5; margin:0px;
      border-collapse:collapse;
    }
    .jcl-component.markdownview > table:not(:first-child) { margin-top:7px }
    .jcl-component.markdownview > table th, .jcl-component.markdownview > table td {
      border:solid 1px lightgray; padding:4px 6px; text-align:left;
    }
    .jcl-component.markdownview > table th { background-color:#EEEEEE; font-weight:bold }

    .jcl-component.markdownview > hr {
      margin:7px 0px 0px 0px; height:0px;
      border:none; border-top:solid 1px lightgray;
    }

    .jcl-component.markdownview img { max-width:100%; height:auto }

  /**** Syntax Highlighting ****/

    .hljs {
      display:block;
      overflow-x:auto;
      padding:0.5em;
      background:#f0f0f0;
      color:#444444;
    }

    .hljs-comment, .hljs-quote                     { font-style:italic;  color:#999988 }
    .hljs-keyword, .hljs-selector-tag, .hljs-subst { font-weight:bold;   color:#333333 }
    .hljs-string,  .hljs-doctag                    { color:#dd1144 }
    .hljs-number                                   { color:#009999 }
    .hljs-title, .hljs-section, .hljs-selector-id  { font-weight:bold;   color:#990000 }
    .hljs-class .hljs-title, .hljs-type            { font-weight:bold;   color:#445588 }
    .hljs-variable, .hljs-template-variable        { color:#336699 }
    .hljs-attr                                     { color:#007700 }
    .hljs-tag, .hljs-name                          { font-weight:normal; color:#000080}
    .hljs-regexp                                   { color:#009926 }
    .hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-pseudo { color:#990073 }
    .hljs-built_in, .hljs-builtin-name             { color:#0086b3 }
    .hljs-deletion                                 { background:#ffdddd }
    .hljs-addition                                 { background:#ddffdd }
    .hljs-emphasis                                 { font-style:italic }
    .hljs-strong                                   { font-weight:bold }
    .hljs.language-html, .hljs.language-xml        { color:#333333 }
    .hljs.language-css .hljs-selector-class,
    .hljs.language-css .hljs-selector-tag,
    .hljs.language-css .hljs-attribute             { color:#1e347b }
    .hljs.language-javascript .hljs-keyword        { color:#0000aa }
    .hljs.language-typescript .hljs-keyword        { color:#0000aa }
    .hljs.language-java .hljs-keyword              { color:#bb9966 }
    .hljs.language-json .hljs-attribute            { color:#0000aa }
  `), Bi = ["none", "stretch", "cover", "contain"], Wi = [
  "left top",
  "center top",
  "right top",
  "left center",
  "center center",
  "right center",
  "left bottom",
  "center bottom",
  "right bottom"
];
function lu(e) {
  return K(() => {
    cu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style) ?? "", o = mn(e.Value), a = pn(e.alt) ?? "(image)", r = pn(e.Placeholder) ?? "(empty)", i = E(e.Scaling, (d) => fe(d, Bi)), s = E(e.Alignment, (d) => fe(d, Wi)), l = (i === "stretch" ? "fill" : i) ?? "contain", c = s ?? "center center";
    return o == null ? b`<${Ka} class="jcl-component imageview ${t}" style=${n}
          role="img" aria-label=${r}
          ...${e.RestProps}
        >
          <${Ua} value=${r}/>
        </>` : b`<img class="jcl-component imageview ${t ?? ""}"
          src=${o} alt=${a}
          style="object-fit:${l}; object-position:${c}; ${n}"
          ...${e.RestProps}
        />`;
  });
}
const cu = /* @__PURE__ */ Z("jcl-component.imageview", `
    div.jcl-component.imageview {
      display:flex; align-items:center; justify-content:center;
    }
    img.jcl-component.imageview {
      object-fit:contain; object-position:center;
    }
  `);
function du(e) {
  return K(() => {
    uu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style) ?? "", o = ae(e.Value), a = pn(e.alt) ?? "SVG image", r = pn(e.Placeholder) ?? "(empty)", i = E(e.Scaling, (u) => fe(u, Bi)), s = E(e.Alignment, (u) => fe(u, Wi)), l = Zt(
      () => "data:image/svg+xml," + encodeURIComponent(o ?? ""),
      [o]
    ), c = (i === "stretch" ? "fill" : i) ?? "contain", d = s ?? "center center";
    return o == null ? b`<${Ka} class="jcl-component svgview ${t}" style=${n}
          role="img" aria-label=${r}
          ...${e.RestProps}
        >
          <${Ua} value=${r}/>
        </>` : b`<img class="jcl-component svgview ${t ?? ""}"
          src=${l} alt=${a}
          style="object-fit:${c}; object-position:${d}; ${n ?? ""}"
          ...${e.RestProps}
        />`;
  });
}
const uu = /* @__PURE__ */ Z("jcl-component.svgview", `
    .jcl-component.svgview {
      object-fit:contain; object-position:center;
    }
  `), pu = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-scripts", hu = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "origin-when-cross-origin",
  "same-origin",
  "strict-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
];
function fu(e) {
  return K(() => {
    gu(), e = U(e);
    const t = S(e.Class) ?? "", n = mn(e.Value), o = S(e.Title), a = S(e.allow), r = J(e.allowFullscreen), i = E(e.ReferrerPolicy, (c) => fe(c, hu)), s = S(e.Sandbox);
    return b`<iframe class="jcl-component webview ${t}" src=${n}
        title=${o} allow=${a} allowfullscreen=${r}
        sandbox=${s === "none" ? void 0 : s ?? pu} referrerpolicy=${i}
        ...${e.RestProps}
      />`;
  });
}
const gu = /* @__PURE__ */ Z("jcl-component.webview", `
    .jcl-component.webview {
      overflow:auto;
    }
  `);
function Hi(e, t, n) {
  const o = n != null, a = se((s) => {
    if (t)
      return nn(s);
    N(e + ' callback "onClick"', n, s);
  }, [t, n]), r = se((s) => {
    (s.key === "Enter" || s.key === " ") && (s.preventDefault(), t || N(e + ' callback "onClick"', n, s));
  }, [t, n]);
  return { isInteractive: o, _onClick: a, _onKeyDown: r, Cursor: t ? "not-allowed" : o ? "pointer" : "auto" };
}
function mu(e) {
  return K(() => {
    bu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = mn(e.Value) ?? `${To}/circle-information.png`, a = bt(e.Color) ?? "black";
    const r = pn(e.Label), i = J(e.active) ?? !1, s = J(e.disabled) ?? !1, l = A(e.onClick), { isInteractive: c, _onClick: d, _onKeyDown: u, Cursor: p } = Hi("Icon", s, l);
    return b`<div
        class="jcl-component icon ${s ? "disabled" : ""} ${i ? "active" : ""} ${t}"
        style=${n} tabIndex=${c ? s ? -1 : 0 : void 0}
        role=${c ? "button" : void 0}
        aria-label=${r}
        aria-disabled=${c && s ? "true" : void 0}
        onClick=${d}
        onKeyDown=${c ? u : void 0}
        ...${e.RestProps}
      >
        <div style="
          -webkit-mask-image:url(${o}); mask-image:url(${o});
          background-color:${a};
          cursor:${p};
        "/>
      </>`;
  });
}
const bu = /* @__PURE__ */ Z("jcl-component.icon", `
    .jcl-component.icon {
      width:24px !important; height:24px !important;
    }

    .jcl-component.icon > div {
      width:24px; height:24px;
      overflow:hidden; pointer-events:auto;
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
    }

    .jcl-component.icon.active,
    .jcl-component.fa-icon.active {
      background:#e8f0ff;
      outline:solid 2px lightgray; border-radius:4px;
    }
    .jcl-component.icon[role="button"]:focus-visible,
    .jcl-component.fa-icon[role="button"]:focus-visible {
      outline:solid 2px #6366f1; border-radius:4px;
    }
    @media (prefers-contrast: more) {
      .jcl-component.icon.active,
      .jcl-component.fa-icon.active { outline:solid 3px currentColor }
      .jcl-component.icon[role="button"]:focus-visible,
      .jcl-component.fa-icon[role="button"]:focus-visible { outline:solid 3px currentColor }
    }
  `), qa = [
  // modified version from https://gist.github.com/zwinnie/3ed8e7970240962bc29227533c3ae047
  "fa-500px",
  "fa-address-book",
  "fa-address-book-o",
  "fa-address-card",
  "fa-address-card-o",
  "fa-adjust",
  "fa-adn",
  "fa-align-center",
  "fa-align-justify",
  "fa-align-left",
  "fa-align-right",
  "fa-amazon",
  "fa-ambulance",
  "fa-american-sign-language-interpreting",
  "fa-anchor",
  "fa-android",
  "fa-angellist",
  "fa-angle-double-down",
  "fa-angle-double-left",
  "fa-angle-double-right",
  "fa-angle-double-up",
  "fa-angle-down",
  "fa-angle-left",
  "fa-angle-right",
  "fa-angle-up",
  "fa-apple",
  "fa-archive",
  "fa-area-chart",
  "fa-arrow-circle-down",
  "fa-arrow-circle-left",
  "fa-arrow-circle-o-down",
  "fa-arrow-circle-o-left",
  "fa-arrow-circle-o-right",
  "fa-arrow-circle-o-up",
  "fa-arrow-circle-right",
  "fa-arrow-circle-up",
  "fa-arrow-down",
  "fa-arrow-left",
  "fa-arrow-right",
  "fa-arrow-up",
  "fa-arrows",
  "fa-arrows-alt",
  "fa-arrows-h",
  "fa-arrows-v",
  "fa-asl-interpreting",
  "fa-assistive-listening-systems",
  "fa-asterisk",
  "fa-at",
  "fa-audio-description",
  "fa-automobile",
  "fa-backward",
  "fa-balance-scale",
  "fa-ban",
  "fa-bandcamp",
  "fa-bank",
  "fa-bar-chart",
  "fa-bar-chart-o",
  "fa-barcode",
  "fa-bars",
  "fa-bath",
  "fa-bathtub",
  "fa-battery",
  "fa-battery-0",
  "fa-battery-1",
  "fa-battery-2",
  "fa-battery-3",
  "fa-battery-4",
  "fa-battery-empty",
  "fa-battery-full",
  "fa-battery-half",
  "fa-battery-quarter",
  "fa-battery-three-quarters",
  "fa-bed",
  "fa-beer",
  "fa-behance",
  "fa-behance-square",
  "fa-bell",
  "fa-bell-o",
  "fa-bell-slash",
  "fa-bell-slash-o",
  "fa-bicycle",
  "fa-binoculars",
  "fa-birthday-cake",
  "fa-bitbucket",
  "fa-bitbucket-square",
  "fa-bitcoin",
  "fa-black-tie",
  "fa-blind",
  "fa-bluetooth",
  "fa-bluetooth-b",
  "fa-bold",
  "fa-bolt",
  "fa-bomb",
  "fa-book",
  "fa-bookmark",
  "fa-bookmark-o",
  "fa-braille",
  "fa-briefcase",
  "fa-btc",
  "fa-bug",
  "fa-building",
  "fa-building-o",
  "fa-bullhorn",
  "fa-bullseye",
  "fa-bus",
  "fa-buysellads",
  "fa-cab",
  "fa-calculator",
  "fa-calendar",
  "fa-calendar-check-o",
  "fa-calendar-minus-o",
  "fa-calendar-o",
  "fa-calendar-plus-o",
  "fa-calendar-times-o",
  "fa-camera",
  "fa-camera-retro",
  "fa-car",
  "fa-caret-down",
  "fa-caret-left",
  "fa-caret-right",
  "fa-caret-square-o-down",
  "fa-caret-square-o-left",
  "fa-caret-square-o-right",
  "fa-caret-square-o-up",
  "fa-caret-up",
  "fa-cart-arrow-down",
  "fa-cart-plus",
  "fa-cc",
  "fa-cc-amex",
  "fa-cc-diners-club",
  "fa-cc-discover",
  "fa-cc-jcb",
  "fa-cc-mastercard",
  "fa-cc-paypal",
  "fa-cc-stripe",
  "fa-cc-visa",
  "fa-certificate",
  "fa-chain",
  "fa-chain-broken",
  "fa-check",
  "fa-check-circle",
  "fa-check-circle-o",
  "fa-check-square",
  "fa-check-square-o",
  "fa-chevron-circle-down",
  "fa-chevron-circle-left",
  "fa-chevron-circle-right",
  "fa-chevron-circle-up",
  "fa-chevron-down",
  "fa-chevron-left",
  "fa-chevron-right",
  "fa-chevron-up",
  "fa-child",
  "fa-chrome",
  "fa-circle",
  "fa-circle-o",
  "fa-circle-o-notch",
  "fa-circle-thin",
  "fa-clipboard",
  "fa-clock-o",
  "fa-clone",
  "fa-close",
  "fa-cloud",
  "fa-cloud-download",
  "fa-cloud-upload",
  "fa-cny",
  "fa-code",
  "fa-code-fork",
  "fa-codepen",
  "fa-codiepie",
  "fa-coffee",
  "fa-cog",
  "fa-cogs",
  "fa-columns",
  "fa-comment",
  "fa-comment-o",
  "fa-commenting",
  "fa-commenting-o",
  "fa-comments",
  "fa-comments-o",
  "fa-compass",
  "fa-compress",
  "fa-connectdevelop",
  "fa-contao",
  "fa-copy",
  "fa-copyright",
  "fa-creative-commons",
  "fa-credit-card",
  "fa-credit-card-alt",
  "fa-crop",
  "fa-crosshairs",
  "fa-css3",
  "fa-cube",
  "fa-cubes",
  "fa-cut",
  "fa-cutlery",
  "fa-dashboard",
  "fa-dashcube",
  "fa-database",
  "fa-deaf",
  "fa-deafness",
  "fa-dedent",
  "fa-delicious",
  "fa-desktop",
  "fa-deviantart",
  "fa-diamond",
  "fa-digg",
  "fa-dollar",
  "fa-dot-circle-o",
  "fa-download",
  "fa-dribbble",
  "fa-drivers-license",
  "fa-drivers-license-o",
  "fa-dropbox",
  "fa-drupal",
  "fa-edge",
  "fa-edit",
  "fa-eercast",
  "fa-eject",
  "fa-ellipsis-h",
  "fa-ellipsis-v",
  "fa-empire",
  "fa-envelope",
  "fa-envelope-o",
  "fa-envelope-open",
  "fa-envelope-open-o",
  "fa-envelope-square",
  "fa-envira",
  "fa-eraser",
  "fa-etsy",
  "fa-eur",
  "fa-euro",
  "fa-exchange",
  "fa-exclamation",
  "fa-exclamation-circle",
  "fa-exclamation-triangle",
  "fa-expand",
  "fa-expeditedssl",
  "fa-external-link",
  "fa-external-link-square",
  "fa-eye",
  "fa-eye-slash",
  "fa-eyedropper",
  "fa-fa",
  "fa-facebook",
  "fa-facebook-f",
  "fa-facebook-official",
  "fa-facebook-square",
  "fa-fast-backward",
  "fa-fast-forward",
  "fa-fax",
  "fa-feed",
  "fa-female",
  "fa-fighter-jet",
  "fa-file",
  "fa-file-archive-o",
  "fa-file-audio-o",
  "fa-file-code-o",
  "fa-file-excel-o",
  "fa-file-image-o",
  "fa-file-movie-o",
  "fa-file-o",
  "fa-file-pdf-o",
  "fa-file-photo-o",
  "fa-file-picture-o",
  "fa-file-powerpoint-o",
  "fa-file-sound-o",
  "fa-file-text",
  "fa-file-text-o",
  "fa-file-video-o",
  "fa-file-word-o",
  "fa-file-zip-o",
  "fa-files-o",
  "fa-film",
  "fa-filter",
  "fa-fire",
  "fa-fire-extinguisher",
  "fa-firefox",
  "fa-first-order",
  "fa-flag",
  "fa-flag-checkered",
  "fa-flag-o",
  "fa-flash",
  "fa-flask",
  "fa-flickr",
  "fa-floppy-o",
  "fa-folder",
  "fa-folder-o",
  "fa-folder-open",
  "fa-folder-open-o",
  "fa-font",
  "fa-font-awesome",
  "fa-fonticons",
  "fa-fort-awesome",
  "fa-forumbee",
  "fa-forward",
  "fa-foursquare",
  "fa-free-code-camp",
  "fa-frown-o",
  "fa-futbol-o",
  "fa-gamepad",
  "fa-gavel",
  "fa-gbp",
  "fa-ge",
  "fa-gear",
  "fa-gears",
  "fa-genderless",
  "fa-get-pocket",
  "fa-gg",
  "fa-gg-circle",
  "fa-gift",
  "fa-git",
  "fa-git-square",
  "fa-github",
  "fa-github-alt",
  "fa-github-square",
  "fa-gitlab",
  "fa-gittip",
  "fa-glass",
  "fa-glide",
  "fa-glide-g",
  "fa-globe",
  "fa-google",
  "fa-google-plus",
  "fa-google-plus-circle",
  "fa-google-plus-official",
  "fa-google-plus-square",
  "fa-google-wallet",
  "fa-graduation-cap",
  "fa-gratipay",
  "fa-grav",
  "fa-group",
  "fa-h-square",
  "fa-hacker-news",
  "fa-hand-grab-o",
  "fa-hand-lizard-o",
  "fa-hand-o-down",
  "fa-hand-o-left",
  "fa-hand-o-right",
  "fa-hand-o-up",
  "fa-hand-paper-o",
  "fa-hand-peace-o",
  "fa-hand-pointer-o",
  "fa-hand-rock-o",
  "fa-hand-scissors-o",
  "fa-hand-spock-o",
  "fa-hand-stop-o",
  "fa-handshake-o",
  "fa-hard-of-hearing",
  "fa-hashtag",
  "fa-hdd-o",
  "fa-header",
  "fa-headphones",
  "fa-heart",
  "fa-heart-o",
  "fa-heartbeat",
  "fa-history",
  "fa-home",
  "fa-hospital-o",
  "fa-hotel",
  "fa-hourglass",
  "fa-hourglass-1",
  "fa-hourglass-2",
  "fa-hourglass-3",
  "fa-hourglass-end",
  "fa-hourglass-half",
  "fa-hourglass-o",
  "fa-hourglass-start",
  "fa-houzz",
  "fa-html5",
  "fa-i-cursor",
  "fa-id-badge",
  "fa-id-card",
  "fa-id-card-o",
  "fa-ils",
  "fa-image",
  "fa-imdb",
  "fa-inbox",
  "fa-indent",
  "fa-industry",
  "fa-info",
  "fa-info-circle",
  "fa-inr",
  "fa-instagram",
  "fa-institution",
  "fa-internet-explorer",
  "fa-intersex",
  "fa-ioxhost",
  "fa-italic",
  "fa-joomla",
  "fa-jpy",
  "fa-jsfiddle",
  "fa-key",
  "fa-keyboard-o",
  "fa-krw",
  "fa-language",
  "fa-laptop",
  "fa-lastfm",
  "fa-lastfm-square",
  "fa-leaf",
  "fa-leanpub",
  "fa-legal",
  "fa-lemon-o",
  "fa-level-down",
  "fa-level-up",
  "fa-life-bouy",
  "fa-life-buoy",
  "fa-life-ring",
  "fa-life-saver",
  "fa-lightbulb-o",
  "fa-line-chart",
  "fa-link",
  "fa-linkedin",
  "fa-linkedin-square",
  "fa-linode",
  "fa-linux",
  "fa-list",
  "fa-list-alt",
  "fa-list-ol",
  "fa-list-ul",
  "fa-location-arrow",
  "fa-lock",
  "fa-long-arrow-down",
  "fa-long-arrow-left",
  "fa-long-arrow-right",
  "fa-long-arrow-up",
  "fa-low-vision",
  "fa-magic",
  "fa-magnet",
  "fa-mail-forward",
  "fa-mail-reply",
  "fa-mail-reply-all",
  "fa-male",
  "fa-map",
  "fa-map-marker",
  "fa-map-o",
  "fa-map-pin",
  "fa-map-signs",
  "fa-mars",
  "fa-mars-double",
  "fa-mars-stroke",
  "fa-mars-stroke-h",
  "fa-mars-stroke-v",
  "fa-maxcdn",
  "fa-meanpath",
  "fa-medium",
  "fa-medkit",
  "fa-meetup",
  "fa-meh-o",
  "fa-mercury",
  "fa-microchip",
  "fa-microphone",
  "fa-microphone-slash",
  "fa-minus",
  "fa-minus-circle",
  "fa-minus-square",
  "fa-minus-square-o",
  "fa-mixcloud",
  "fa-mobile",
  "fa-mobile-phone",
  "fa-modx",
  "fa-money",
  "fa-moon-o",
  "fa-mortar-board",
  "fa-motorcycle",
  "fa-mouse-pointer",
  "fa-music",
  "fa-navicon",
  "fa-neuter",
  "fa-newspaper-o",
  "fa-object-group",
  "fa-object-ungroup",
  "fa-odnoklassniki",
  "fa-odnoklassniki-square",
  "fa-opencart",
  "fa-openid",
  "fa-opera",
  "fa-optin-monster",
  "fa-outdent",
  "fa-pagelines",
  "fa-paint-brush",
  "fa-paper-plane",
  "fa-paper-plane-o",
  "fa-paperclip",
  "fa-paragraph",
  "fa-paste",
  "fa-pause",
  "fa-pause-circle",
  "fa-pause-circle-o",
  "fa-paw",
  "fa-paypal",
  "fa-pencil",
  "fa-pencil-square",
  "fa-pencil-square-o",
  "fa-percent",
  "fa-phone",
  "fa-phone-square",
  "fa-photo",
  "fa-picture-o",
  "fa-pie-chart",
  "fa-pied-piper",
  "fa-pied-piper-alt",
  "fa-pied-piper-pp",
  "fa-pinterest",
  "fa-pinterest-p",
  "fa-pinterest-square",
  "fa-plane",
  "fa-play",
  "fa-play-circle",
  "fa-play-circle-o",
  "fa-plug",
  "fa-plus",
  "fa-plus-circle",
  "fa-plus-square",
  "fa-plus-square-o",
  "fa-podcast",
  "fa-power-off",
  "fa-print",
  "fa-product-hunt",
  "fa-puzzle-piece",
  "fa-qq",
  "fa-qrcode",
  "fa-question",
  "fa-question-circle",
  "fa-question-circle-o",
  "fa-quora",
  "fa-quote-left",
  "fa-quote-right",
  "fa-ra",
  "fa-random",
  "fa-ravelry",
  "fa-rebel",
  "fa-recycle",
  "fa-reddit",
  "fa-reddit-alien",
  "fa-reddit-square",
  "fa-refresh",
  "fa-registered",
  "fa-remove",
  "fa-renren",
  "fa-reorder",
  "fa-repeat",
  "fa-reply",
  "fa-reply-all",
  "fa-resistance",
  "fa-retweet",
  "fa-rmb",
  "fa-road",
  "fa-rocket",
  "fa-rotate-left",
  "fa-rotate-right",
  "fa-rouble",
  "fa-rss",
  "fa-rss-square",
  "fa-rub",
  "fa-ruble",
  "fa-rupee",
  "fa-s15",
  "fa-safari",
  "fa-save",
  "fa-scissors",
  "fa-scribd",
  "fa-search",
  "fa-search-minus",
  "fa-search-plus",
  "fa-sellsy",
  "fa-send",
  "fa-send-o",
  "fa-server",
  "fa-share",
  "fa-share-alt",
  "fa-share-alt-square",
  "fa-share-square",
  "fa-share-square-o",
  "fa-shekel",
  "fa-sheqel",
  "fa-shield",
  "fa-ship",
  "fa-shirtsinbulk",
  "fa-shopping-bag",
  "fa-shopping-basket",
  "fa-shopping-cart",
  "fa-shower",
  "fa-sign-in",
  "fa-sign-language",
  "fa-sign-out",
  "fa-signal",
  "fa-signing",
  "fa-simplybuilt",
  "fa-sitemap",
  "fa-skyatlas",
  "fa-skype",
  "fa-slack",
  "fa-sliders",
  "fa-slideshare",
  "fa-smile-o",
  "fa-snapchat",
  "fa-snapchat-ghost",
  "fa-snapchat-square",
  "fa-snowflake-o",
  "fa-soccer-ball-o",
  "fa-sort",
  "fa-sort-alpha-asc",
  "fa-sort-alpha-desc",
  "fa-sort-amount-asc",
  "fa-sort-amount-desc",
  "fa-sort-asc",
  "fa-sort-desc",
  "fa-sort-down",
  "fa-sort-numeric-asc",
  "fa-sort-numeric-desc",
  "fa-sort-up",
  "fa-soundcloud",
  "fa-space-shuttle",
  "fa-spinner",
  "fa-spoon",
  "fa-spotify",
  "fa-square",
  "fa-square-o",
  "fa-stack-exchange",
  "fa-stack-overflow",
  "fa-star",
  "fa-star-half",
  "fa-star-half-empty",
  "fa-star-half-full",
  "fa-star-half-o",
  "fa-star-o",
  "fa-steam",
  "fa-steam-square",
  "fa-step-backward",
  "fa-step-forward",
  "fa-stethoscope",
  "fa-sticky-note",
  "fa-sticky-note-o",
  "fa-stop",
  "fa-stop-circle",
  "fa-stop-circle-o",
  "fa-street-view",
  "fa-strikethrough",
  "fa-stumbleupon",
  "fa-stumbleupon-circle",
  "fa-subscript",
  "fa-subway",
  "fa-suitcase",
  "fa-sun-o",
  "fa-superpowers",
  "fa-superscript",
  "fa-support",
  "fa-table",
  "fa-tablet",
  "fa-tachometer",
  "fa-tag",
  "fa-tags",
  "fa-tasks",
  "fa-taxi",
  "fa-telegram",
  "fa-television",
  "fa-tencent-weibo",
  "fa-terminal",
  "fa-text-height",
  "fa-text-width",
  "fa-th",
  "fa-th-large",
  "fa-th-list",
  "fa-themeisle",
  "fa-thermometer",
  "fa-thermometer-0",
  "fa-thermometer-1",
  "fa-thermometer-2",
  "fa-thermometer-3",
  "fa-thermometer-4",
  "fa-thermometer-empty",
  "fa-thermometer-full",
  "fa-thermometer-half",
  "fa-thermometer-quarter",
  "fa-thermometer-three-quarters",
  "fa-thumb-tack",
  "fa-thumbs-down",
  "fa-thumbs-o-down",
  "fa-thumbs-o-up",
  "fa-thumbs-up",
  "fa-ticket",
  "fa-times",
  "fa-times-circle",
  "fa-times-circle-o",
  "fa-times-rectangle",
  "fa-times-rectangle-o",
  "fa-tint",
  "fa-toggle-down",
  "fa-toggle-left",
  "fa-toggle-off",
  "fa-toggle-on",
  "fa-toggle-right",
  "fa-toggle-up",
  "fa-trademark",
  "fa-train",
  "fa-transgender",
  "fa-transgender-alt",
  "fa-trash",
  "fa-trash-o",
  "fa-tree",
  "fa-trello",
  "fa-tripadvisor",
  "fa-trophy",
  "fa-truck",
  "fa-try",
  "fa-tty",
  "fa-tumblr",
  "fa-tumblr-square",
  "fa-turkish-lira",
  "fa-tv",
  "fa-twitch",
  "fa-twitter",
  "fa-twitter-square",
  "fa-umbrella",
  "fa-underline",
  "fa-undo",
  "fa-universal-access",
  "fa-university",
  "fa-unlink",
  "fa-unlock",
  "fa-unlock-alt",
  "fa-unsorted",
  "fa-upload",
  "fa-usb",
  "fa-usd",
  "fa-user",
  "fa-user-circle",
  "fa-user-circle-o",
  "fa-user-md",
  "fa-user-o",
  "fa-user-plus",
  "fa-user-secret",
  "fa-user-times",
  "fa-users",
  "fa-vcard",
  "fa-vcard-o",
  "fa-venus",
  "fa-venus-double",
  "fa-venus-mars",
  "fa-viacoin",
  "fa-video",
  "fa-video-square",
  "fa-video-camera",
  "fa-vimeo",
  "fa-vimeo-square",
  "fa-vine",
  "fa-vk",
  "fa-volume-control-phone",
  "fa-volume-down",
  "fa-volume-off",
  "fa-volume-up",
  "fa-warning",
  "fa-wechat",
  "fa-weibo",
  "fa-weixin",
  "fa-whatsapp",
  "fa-wheelchair",
  "fa-wheelchair-alt",
  "fa-wifi",
  "fa-wikipedia-w",
  "fa-window-close",
  "fa-window-close-o",
  "fa-window-maximize",
  "fa-window-minimize",
  "fa-window-restore",
  "fa-windows",
  "fa-won",
  "fa-wordpress",
  "fa-wpbeginner",
  "fa-wpexplorer",
  "fa-wpforms",
  "fa-wrench",
  "fa-xing",
  "fa-xing-square",
  "fa-y-combinator",
  "fa-y-combinator-square",
  "fa-yahoo",
  "fa-yc",
  "fa-yc-square",
  "fa-yelp",
  "fa-yen",
  "fa-yoast",
  "fa-youtube",
  "fa-youtube-play",
  "fa-youtube-square"
];
function yu(e) {
  return K(() => {
    xu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = E(e.Value, (h) => fe(h, qa)) ?? "fa-question-circle-o", a = bt(e.Color) ?? "black";
    const r = pn(e.Label), i = J(e.active) ?? !1, s = J(e.disabled) ?? !1, l = A(e.onClick), { isInteractive: c, _onClick: d, _onKeyDown: u, Cursor: p } = Hi("FAIcon", s, l);
    return b`<div
        class="jcl-component fa-icon fa ${o} ${s ? "disabled" : ""} ${i ? "active" : ""} ${t}"
        role=${c ? "button" : void 0}
        tabIndex=${c ? s ? -1 : 0 : void 0}
        aria-label=${r}
        aria-disabled=${c && s ? "true" : void 0}
        style="${n}; color:${a}; cursor:${p};"
        onClick=${d}
        onKeyDown=${c ? u : void 0}
        ...${e.RestProps}
      />`;
  });
}
const xu = /* @__PURE__ */ Z("jcl-component.fa-icon", `
    .jcl-component.fa-icon {
      width:24px !important; height:24px !important;
      font-size:18px; line-height:24px; text-align:center;
      pointer-events:auto;
    }
  `);
function wu(e) {
  return K(() => {
    vu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return n == null ? b`<button class="jcl-component native-button ${t}" ...${e.RestProps}>
          ${o}
        </>` : b`<button class="jcl-component native-button ${t}" ...${e.RestProps}
          dangerouslySetInnerHTML=${{ __html: n }}
        />`;
  });
}
const vu = /* @__PURE__ */ Z("jcl-component.native-button", `
    .jcl-component.native-button {
      height:30px;
      border:solid 1px black; border-radius:4px;
      background:white;
      font-weight:bold; color:black;
      cursor:pointer; pointer-events:auto;
    }
    .jcl-component.native-button:disabled {
      cursor:not-allowed;
    }
  `);
function Cu(e) {
  return K(() => {
    ku(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = E(e.Value, (p) => gn(p) || Ke(p));
    const a = J(e.disabled), r = A(e.onValueInput), i = A(e.onClick);
    o = o ?? ut;
    const { actualValue: s, actualDisabling: l } = Ze(o, a), c = s == !0, d = s == null || Ke(o), u = se((p) => {
      if (Le(p, l), l == !0)
        return;
      N('nativeCheckbox callback "onClick"', i, p);
      const h = p.target.checked;
      N(
        'nativeCheckbox callback "onValueInput"',
        r,
        h,
        p
      );
    }, [l, i, r]);
    return b`<div class="jcl-component native-checkbox ${l ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="checkbox"
          checked=${c} indeterminate=${d}
          disabled=${l} onClick=${u} ...${e.RestProps}
        />
      </>`;
  });
}
const ku = /* @__PURE__ */ Z("jcl-component.native-checkbox", `
    .jcl-component.native-checkbox {
      height:30px;
      min-width:20px; min-height:20px;
    }
    .jcl-component.native-checkbox > input {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .jcl-component.native-checkbox > input:disabled {
      cursor:not-allowed;
    }
  `);
function ju(e) {
  return K(() => {
    $u(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = E(e.Value, (u) => gn(u) || Ke(u));
    const a = J(e.disabled), r = A(e.onValueInput), i = A(e.onClick);
    o = o ?? ut;
    const { actualValue: s, actualDisabling: l } = Ze(o, a), c = s == !0, d = se((u) => {
      if (Le(u, l), l == !0)
        return;
      N('nativeRadiobutton callback "onClick"', i, u);
      const p = u.target.checked;
      N(
        'nativeRadiobutton callback "onValueInput"',
        r,
        p,
        u
      );
    }, [l, i, r]);
    return b`<div class="jcl-component native-radiobutton ${l ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="radio" checked=${c} disabled=${l} onClick=${d} ...${e.RestProps}/>
      </>`;
  });
}
const $u = /* @__PURE__ */ Z("jcl-component.native-radiobutton", `
    .jcl-component.native-radiobutton {
      height:30px;
      min-width:20px; min-height:20px;
    }
    .jcl-component.native-radiobutton > input {
      position:absolute;
      left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .jcl-component.native-radiobutton > input:disabled {
      cursor:not-allowed;
    }
  `);
function Iu(e) {
  return K(() => {
    Du(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = _e(e.Value), a = _e(e.Min ?? e.Minimum), r = _e(e.Low ?? e.lowerBound), i = _e(e.Opt ?? e.Optimum), s = _e(e.High ?? e.upperBound), l = _e(e.Max ?? e.Maximum);
    return b`<div class="jcl-component native-gauge ${t}" style=${n}>
        <meter
          value=${o} min=${a} low=${r} opt=${i}
          high=${s} max=${l} ...${e.RestProps}
        />
      </>`;
  });
}
const Du = /* @__PURE__ */ Z("jcl-component.native-gauge", `
    .jcl-component.native-gauge {
      height:30px;
      min-width:40px; min-height:20px;
    }
    .jcl-component.native-gauge > meter {
      position:absolute;
      left:50%; top:50%; width:100%; height:16px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
  `);
function Lu(e) {
  return K(() => {
    Su(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = _e(e.Value), a = _e(e.Max ?? e.Maximum);
    return b`<div class="jcl-component native-progressbar ${t}" style=${n}>
        <progress value=${o} max=${a} ...${e.RestProps}/>
      </>`;
  });
}
const Su = /* @__PURE__ */ Z("jcl-component.native-progressbar", `
    .jcl-component.native-progressbar {
      height:30px;
      min-width:40px; min-height:20px;
    }
    .jcl-component.native-progressbar > progress {
      position:absolute;
      left:50%; top:50%; width:100%; height:16px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .jcl-component.native-progressbar > progress::-webkit-progress-bar {
      background-color:#EEEEEE;
      border:solid 1px #E0E0E0; border-radius:2px;
    }
    .jcl-component.native-progressbar > progress::-webkit-progress-value,
    .jcl-component.native-progressbar > progress::-moz-progress-bar {
      background-color:dodgerblue;
      border:none; border-radius:2px;
    }
  `);
function Mu(e) {
  return K(() => {
    Tu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, ($) => wt($) || Ke($)), a = _e(e.Min ?? e.Minimum), r = E(e.Step, ($) => no($, 0, 1 / 0, !1, !1)), i = _e(e.Max ?? e.Maximum), s = E(e.Hashmarks, ($) => je($, Ne)), l = J(e.disabled) ?? !1, c = A(e.onValueInput), d = A(e.onInput), u = A(e.onBlur), { ViewRef: p, shownValue: h, ValueToShow: f } = Pt(
      Ke(o) || o != null && !isNaN(o) ? o : ut
    ), { actualValue: g, actualDisabling: x } = Ze(f, l), { _onInput: m, _onBlur: C } = en({
      Name: "nativeSlider",
      actualDisabling: x,
      shownValue: h,
      onInput: d,
      onValueInput: c,
      onBlur: u,
      processedInput: ($) => h.current = parseFloat($.target.value)
    }), { SuggestionId: k, SuggestionList: L } = tn(
      s,
      ($) => {
        const { Value: y, Label: w } = Ct($);
        return b`<option value=${y}>${w}</option>`;
      }
    );
    return b`<div class="jcl-component native-slider ${t}" style=${n}>
        <input type="range" ref=${p} disabled=${x}
          value=${g} min=${a} max=${i} step=${r}
          list=${k}
          onInput=${m} onBlur=${C} ...${e.RestProps}
        />${L}
      </>`;
  });
}
const Tu = /* @__PURE__ */ Z("jcl-component.native-slider", `
    .jcl-component.native-slider {
      height:30px;
      min-width:40px; min-height:20px;
    }
    .jcl-component.native-slider > input {
      position:absolute;
      left:50%; top:50%; width:100%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .jcl-component.native-slider > input:disabled {
      cursor:not-allowed;
    }
  `);
function kt(e) {
  const {
    Name: t,
    InputType: n,
    ClassName: o,
    ValueIsValid: a,
    withSpellChecking: r = !1,
    withMultiple: i = !1,
    withSuggestions: s = !0,
    Styled: l = !1
  } = e;
  return function(d) {
    return K(() => {
      (l ? bn : Xa)(), d = U(d);
      const u = S(d.Class) ?? "", p = E(d.Value, (ue) => a(ue) || Ke(ue)), h = i ? J(d.multiple) : void 0, f = J(d.invalid), g = S(d.Placeholder), x = J(d.readonly), m = ve(d.minLength), C = ve(d.maxLength), k = S(d.Pattern), L = r ? J(d.SpellCheck) : void 0, $ = s ? E(d.Suggestions, (ue) => je(ue, a)) : void 0, y = l ? E(d.Size, (ue) => fe(ue, ["small", "normal", "large"])) ?? "normal" : void 0, w = J(d.disabled) ?? !1, O = A(d.onValueInput), T = A(d.onInput), j = A(d.onBlur), { ViewRef: I, shownValue: M, ValueToShow: D } = Pt(p), { actualValue: V, actualPlaceholder: B, actualDisabling: Y } = Ze(D, w, g), { _onInput: Q, _onBlur: pe } = en({
        Name: t,
        actualDisabling: Y,
        shownValue: M,
        onInput: T,
        onValueInput: O,
        onBlur: j
      }), { SuggestionId: P, SuggestionList: X } = tn($), te = l ? `jcl-component styled-input ${o} ${nt(y)}` : `jcl-component native-textual-input ${o}`;
      return b`<input type=${n} class="${te} ${u} ${f ? "invalid" : ""}" ref=${I}
          value=${V ?? ""} minlength=${m} maxlength=${C}
          multiple=${h} readOnly=${x} placeholder=${B}
          pattern=${k} spellcheck=${L}
          disabled=${Y} list=${P}
          aria-invalid=${l && f == !0 ? "true" : void 0}
          onInput=${Q} onBlur=${pe} ...${d.RestProps}
        />${X}`;
    });
  };
}
function At(e) {
  const { Name: t, InputType: n, ClassName: o, ValueIsValid: a, Pattern: r, Styled: i = !1 } = e, s = r == null;
  return function(c) {
    return K(() => {
      (i ? bn : Xa)(), c = U(c);
      const d = S(c.Class) ?? "", u = E(c.Value, (Y) => a(Y) || Ke(Y)), p = J(c.readonly), h = s ? J(c.withSeconds) : void 0, f = E(c.Min ?? c.Minimum, a), g = E(c.Max ?? c.Maximum, a), x = E(c.Suggestions, (Y) => je(Y, a)), m = i ? E(c.Size, (Y) => fe(Y, ["small", "normal", "large"])) ?? "normal" : void 0, C = J(c.disabled) ?? !1, k = A(c.onValueInput), L = A(c.onInput), $ = A(c.onBlur), { ViewRef: y, shownValue: w, ValueToShow: O } = Pt(u), { actualValue: T, actualDisabling: j } = Ze(O, C), { _onInput: I, _onBlur: M } = en({
        Name: t,
        actualDisabling: j,
        shownValue: w,
        onInput: L,
        onValueInput: k,
        onBlur: $
      }), { SuggestionId: D, SuggestionList: V } = tn(x), B = i ? `jcl-component styled-input ${o} ${nt(m)}` : `jcl-component native-temporal-input ${o}`;
      return b`<input type=${n} class="${B} ${d}" ref=${y}
          value=${T ?? ""} min=${f} max=${g}
          step=${s ? h ? 1 : 60 : void 0} pattern=${r}
          readOnly=${p}
          disabled=${j} list=${D}
          onInput=${I} onBlur=${M} ...${c.RestProps}
        />${V}`;
    });
  };
}
const Xa = /* @__PURE__ */ Z("jcl-component.native-textual-input", `
    .jcl-component.native-textual-input,
    .jcl-component.native-temporal-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .jcl-component.native-textual-input:invalid,
    .jcl-component.native-textual-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .jcl-component.native-textual-input:read-only,
    .jcl-component.native-temporal-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .jcl-component.native-textual-input:disabled,
    .jcl-component.native-temporal-input:disabled {
      cursor:not-allowed;
    }
  `), Ru = /* @__PURE__ */ kt({
  Name: "nativeTextlineInput",
  InputType: "text",
  ClassName: "native-textline-input",
  ValueIsValid: Ne,
  withSpellChecking: !0
}), Au = /* @__PURE__ */ kt({
  Name: "nativePasswordInput",
  InputType: "password",
  ClassName: "native-password-input",
  ValueIsValid: Ne,
  withSuggestions: !1
});
function Fu(e) {
  return K(() => {
    Xa(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Value, (I) => wt(I) || Ke(I)), o = J(e.invalid), a = S(e.Placeholder), r = J(e.readonly), i = _e(e.Min ?? e.Minimum), s = E(e.Step, (I) => no(I, 0, 1 / 0, !1, !1)), l = _e(e.Max ?? e.Maximum), c = Ao(e.Digits, 0, 15), d = J(e.withoutTrailingZeros) ?? !1, u = E(e.Suggestions, (I) => je(I, wt)), p = J(e.disabled) ?? !1, h = A(e.onValueInput), f = A(e.onInput), g = A(e.onBlur);
    let x = s;
    if (c != null) {
      const I = Math.pow(10, -c);
      x = Math.max(s ?? I, I);
    }
    const { ViewRef: m, shownValue: C, ValueToShow: k } = Pt(
      Ke(n) || n != null && !isNaN(n) ? n : ut,
      (I) => (c != null && wt(I) && (I = I.toFixed(c), d && (I = parseFloat(I))), I)
    ), { actualValue: L, actualPlaceholder: $, actualDisabling: y } = Ze(k, p, a), { _onInput: w, _onBlur: O } = en({
      Name: "nativeNumberInput",
      actualDisabling: y,
      shownValue: C,
      onInput: f,
      onValueInput: h,
      onBlur: g,
      processedInput: (I) => {
        const M = parseFloat(I.target.value);
        return C.current = isNaN(M) ? void 0 : M, C.current;
      }
    }), { SuggestionId: T, SuggestionList: j } = tn(u);
    return b`<input type="number" ref=${m}
        class="jcl-component native-textual-input native-number-input ${t} ${o ? "invalid" : ""}"
        value=${L ?? ""} min=${i} max=${l} step=${x}
        readOnly=${r} placeholder=${$}
        disabled=${y} list=${T}
        onInput=${w} onBlur=${O} ...${e.RestProps}
      />${j}`;
  });
}
const zu = /* @__PURE__ */ kt({
  Name: "nativeEMailAddressInput",
  InputType: "email",
  ClassName: "native-emailaddress-input",
  ValueIsValid: Xn,
  withMultiple: !0
}), Ou = /* @__PURE__ */ kt({
  Name: "nativePhoneNumberInput",
  InputType: "tel",
  ClassName: "native-phonenumber-input",
  ValueIsValid: Bo
}), Vu = /* @__PURE__ */ kt({
  Name: "nativeURLInput",
  InputType: "url",
  ClassName: "native-url-input",
  ValueIsValid: ot
}), Eu = "([01]\\d|2[0-3]):[0-5]\\d(:[0-5]\\d)?", Nu = /* @__PURE__ */ Sn(Eu);
function _i(e) {
  return Bt(e, Nu);
}
const Bu = /* @__PURE__ */ At({
  Name: "nativeTimeInput",
  InputType: "time",
  ClassName: "native-time-input",
  ValueIsValid: _i
}), Wu = "\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])T([01]\\d|2[0-3]):[0-5]\\d(:[0-5]\\d)?", Hu = /* @__PURE__ */ Sn(Wu);
function Gi(e) {
  return Bt(e, Hu);
}
const _u = /* @__PURE__ */ At({
  Name: "nativeDateTimeInput",
  InputType: "datetime-local",
  ClassName: "native-datetime-input",
  ValueIsValid: Gi
}), Ya = "\\d{4}-\\d{2}-\\d{2}", Gu = /* @__PURE__ */ Sn(Ya);
function $t(e) {
  return Bt(e, Gu);
}
const Ku = /* @__PURE__ */ At({
  Name: "nativeDateInput",
  InputType: "date",
  ClassName: "native-date-input",
  ValueIsValid: $t,
  Pattern: Ya
}), Ja = "\\d{4}-W\\d{2}", Uu = /* @__PURE__ */ Sn(Ja);
function Ki(e) {
  return Bt(e, Uu);
}
const qu = /* @__PURE__ */ At({
  Name: "nativeWeekInput",
  InputType: "week",
  ClassName: "native-week-input",
  ValueIsValid: Ki,
  Pattern: Ja
}), Za = "\\d{4}-\\d{2}", Xu = /* @__PURE__ */ Sn(Za);
function Qa(e) {
  return Bt(e, Xu);
}
const Yu = /* @__PURE__ */ At({
  Name: "nativeMonthInput",
  InputType: "month",
  ClassName: "native-month-input",
  ValueIsValid: Qa,
  Pattern: Za
}), Ju = /* @__PURE__ */ kt({
  Name: "nativeSearchInput",
  InputType: "search",
  ClassName: "native-search-input",
  ValueIsValid: Ne,
  withSpellChecking: !0
});
function Zu(e) {
  return K(() => {
    Qu(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (g) => Ne(g) || Ke(g)), a = S(e.Placeholder), r = J(e.multiple), i = S(e.Accept), s = J(e.disabled) ?? !1, l = A(e.onValueInput), c = A(e.onInput), d = o ?? ut, { actualValue: u, actualPlaceholder: p, actualDisabling: h } = Ze(d, s, a), f = se((g) => {
      if (Le(g), h == !0)
        return;
      N('nativeFileInput callback "onInput"', c, g);
      let x = Array.from(g.target.files);
      N(
        'nativeFileInput callback "onValueInput"',
        l,
        x,
        g
      ), g.target.value = "";
    }, [h, c, l]);
    return b`<label class="jcl-component native-file-input ${t} ${h ? "disabled" : ""}"
        style=${n}
      >
        ${u == null ? b`<span>${p ?? ""}</span>` : b`<span>${u}</span>`}
        <input type="file" style="display:none"
          multiple=${r} accept=${i}
          disabled=${h} onInput=${f} ...${e.RestProps}
        />
      </label>`;
  });
}
const Qu = /* @__PURE__ */ Z("jcl-component.native-file-input", `
    .jcl-component.native-file-input {
      display:inline-block;
      height:30px;
        min-width:60px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
      overflow:hidden;
    }
    .jcl-component.native-file-input > span {
      display:inline-block; width:100%;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }

    .jcl-component.native-file-input.disabled {
      border:solid 1px #DDDDDD;
      background:#F0F0F0;
      color:#808080;
      cursor:not-allowed;
    }
  `);
function Pu(e) {
  return K(() => {
    ep(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (g) => Yn(g) || Ke(g)), a = J(e.readonly), r = E(e.Suggestions, (g) => je(g, Yn));
    let i = ve(e.minWidth);
    const s = J(e.disabled) ?? !1, l = A(e.onValueInput), c = A(e.onInput), { actualValue: d, actualDisabling: u } = Ze(o, s), p = se((g) => {
      if (Le(g), u == !0)
        return;
      N('nativeColorInput callback "onInput"', c, g);
      const x = g.target.value;
      N(
        'nativeColorInput callback "onValueInput"',
        l,
        x,
        g
      );
    }, [u, c, l]), { SuggestionId: h, SuggestionList: f } = tn(r);
    return i == null && (i = 40 + (r != null && r.length > 0 ? 20 : 0)), b`<input type="color" class="jcl-component native-color-input ${t}"
        style="min-width:${i}px; ${n}"
        value=${d} list=${h}
        disabled=${u} onInput=${p} ...${e.RestProps}
      />${f}`;
  });
}
const ep = /* @__PURE__ */ Z("jcl-component.native-color-input", `
    .jcl-component.native-color-input {
      height:30px;
        min-width:40px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
    }

    .jcl-component.native-color-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .jcl-component.native-color-input:disabled {
      cursor:not-allowed;
    }
  `);
function tp(e) {
  return K(() => {
    np(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Value, (f) => Ne(f) || Ke(f)), o = S(e.Placeholder), a = E(e.Options, (f) => je(f, Ne)) ?? Se("Options"), r = J(e.disabled) ?? !1, i = A(e.onValueInput), s = A(e.onInput), { actualValue: l, actualPlaceholder: c, actualDisabling: d } = Ze(n, r, o), u = se((f) => {
      if (Le(f), d == !0)
        return;
      N('nativeDropDown callback "onInput"', s, f);
      let g = f.target.value;
      N(
        'nativeDropDown callback "onValueInput"',
        i,
        g,
        f
      );
    }, [d, s, i]), h = !a.some((f) => {
      const { Value: g, isRuler: x } = Ct(f);
      return !x && g === l;
    }) && c != null;
    return b`<select class="jcl-component native-dropdown ${t}"
        disabled=${d} onInput=${u} ...${e.RestProps}
      >${h ? b`<option value="" selected disabled>${c}</option>` : ""}${a.map(
      (f) => {
        const {
          Value: g,
          Label: x,
          disabled: m,
          isRuler: C
        } = Ct(f);
        return C ? b`<hr/>` : b`<option value=${g}
                selected=${g === l} disabled=${m}
              >${x}</option>`;
      }
    )}</select>`;
  });
}
const np = /* @__PURE__ */ Z("jcl-component.native-dropdown", `
    .jcl-component.native-dropdown {
      height:30px;
        min-width:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .jcl-component.native-dropdown:disabled {
      cursor:not-allowed;
    }
  `);
function Pa(e) {
  return K(() => {
    op(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (T) => oo(T) || Ke(T)), a = J(e.invalid), r = S(e.Placeholder), i = J(e.readonly), s = ve(e.minLength), l = ve(e.maxLength), c = J(e.wrap), d = E(e.Resizability, (T) => fe(T, ["none", "horizontal", "vertical", "both"])), u = J(e.SpellCheck), p = J(e.disabled) ?? !1, h = A(e.onValueInput), f = A(e.onInput), g = A(e.onBlur), { ViewRef: x, shownValue: m, ValueToShow: C } = Pt(o), { actualValue: k, actualPlaceholder: L, actualDisabling: $ } = Ze(C, p, r), { _onInput: y, _onBlur: w } = en({
      Name: "nativeTextInput",
      actualDisabling: $,
      shownValue: m,
      onInput: f,
      onValueInput: h,
      onBlur: g
    }), O = Dt();
    return b`<textarea class="jcl-component native-text-input ${t} ${a ? "invalid" : ""}"
        key=${O} ref=${x}
        style="${c == !0 ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${d ?? "none"}; ${n}"
        value=${k ?? ""} minlength=${s} maxlength=${l}
        readOnly=${i} placeholder=${L}
        spellcheck=${u} disabled=${$}
        onInput=${y} onBlur=${w} ...${e.RestProps}
      />`;
  });
}
const op = /* @__PURE__ */ Z("jcl-component.native-text-input", `
    .jcl-component.native-text-input {
      resize:none;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:4px 2px 0px 2px;
    }

    .jcl-component.native-text-input:invalid, .jcl-component.native-text-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .jcl-component.native-text-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .jcl-component.native-text-input:disabled {
      cursor:not-allowed;
    }
  `);
function ap(e) {
  return K(() => {
    rp(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = mn(e.Icon) ?? Se("Icon"), a = bt(e.Color), r = J(e.multiple), i = S(e.Accept), s = J(e.disabled) ?? !1, l = A(e.onValueInput), c = A(e.onInput), d = se((u) => {
      if (Le(u), s == !0)
        return;
      N('nativePseudoFileInput callback "onInput"', c, u);
      let p = Array.from(u.target.files);
      N(
        'nativePseudoFileInput callback "onValueInput"',
        l,
        p,
        u
      ), u.target.value = "";
    }, [s, c, l]);
    return b`<label
        class="jcl-component legacy-pseudo-file-input ${s ? "disabled" : ""} ${t}"
        style=${n}
      >
        <div style="
          -webkit-mask-image:url(${o}); mask-image:url(${o});
          background-color:${a ?? "black"};
        "/>
        <input type="file" style="display:none"
          multiple=${r} accept=${i}
          disabled=${s} onInput=${d} ...${e.RestProps}
        />
      </label>`;
  });
}
const rp = /* @__PURE__ */ Z("jcl-component.legacy-pseudo-file-input", `
    .jcl-component.legacy-pseudo-file-input {
      display:flex ! important; justify-content:center ! important;
        align-items:center ! important;
      overflow:hidden;
    }
    .jcl-component.legacy-pseudo-file-input > div {
      display:block; position:relative;
      width:24px; height:24px;
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
    }

    .jcl-component.legacy-pseudo-file-input > div.disabled {
      cursor:not-allowed;
    }
  `);
function ip(e) {
  return K(() => {
    sp(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (f) => Ne(f) || Ke(f)), a = mn(e.Icon) ?? Se("Icon"), r = bt(e.Color), i = E(e.Options, (f) => je(f, Ne)) ?? Se("Options"), s = J(e.disabled) ?? !1, l = A(e.onValueInput), c = A(e.onInput), { actualValue: d, actualDisabling: u } = Ze(o, s), p = se((f) => {
      if (Le(f), u == !0)
        return;
      N('legacyPseudoDropDown callback "onInput"', c, f);
      let g = f.target.value;
      N(
        'legacyPseudoDropDown callback "onValueInput"',
        l,
        g,
        f
      );
    }, [u, c, l]), h = i.some((f) => {
      const { Value: g, isRuler: x } = Ct(f);
      return !x && g === d;
    });
    return b`<label
        class="jcl-component legacy-pseudo-dropdown ${s ? "disabled" : ""} ${t}"
        style=${n}
      >
        <div style="
          -webkit-mask-image:url(${a}); mask-image:url(${a});
          background-color:${r ?? "black"};
        "/>
        <select
          disabled=${u} onInput=${p} ...${e.RestProps}
        >${h ? "" : b`<option hidden selected value=""></option>`}${i.map(
      (f) => {
        const {
          Value: g,
          Label: x,
          disabled: m,
          isRuler: C
        } = Ct(f);
        return C ? b`<hr/>` : b`<option value=${g}
                  selected=${g === d} disabled=${m}
                >${x}</option>`;
      }
    )}</select>
      </label>`;
  });
}
const sp = /* @__PURE__ */ Z("jcl-component.legacy-pseudo-dropdown", `
    .jcl-component.legacy-pseudo-dropdown {
      display:flex ! important; justify-content:center ! important;
        align-items:center ! important;
      overflow:hidden;
    }
    .jcl-component.legacy-pseudo-dropdown > div {
      display:block; position:relative;
      width:24px; height:24px;
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
    }
    .jcl-component.legacy-pseudo-dropdown > select {
      display:block; position:absolute;
      left:0px; top:0px; right:0px; bottom:0px;
      opacity:0.01;
    }

    .jcl-component.legacy-pseudo-dropdown > select:disabled {
      cursor:not-allowed;
    }
  `);
function lp(e) {
  return K(() => {
    cp(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Placeholder), a = J(e.multiple) ?? !1, r = E(e.Accept, (g) => je(g, Ne)) ?? [], i = J(e.disabled) ?? !1, s = A(e.onValueInput), l = A(e.onInput), c = A(e.onDrop), d = (g) => {
      let x = Array.from(g);
      return r.length > 0 && (x = x.filter((m) => r.some((C) => (C = C.trim().toLowerCase(), C.startsWith(".") ? m.name.toLowerCase().endsWith(C) : C.endsWith("/*") ? m.type.toLowerCase().startsWith(C.slice(0, -1)) : m.type.toLowerCase() === C)))), !a && x.length > 1 && (x = x.slice(0, 1)), x;
    }, u = se((g) => {
      if (Le(g), i == !0)
        return;
      const x = d(g.target.files);
      if (x.length === 0) {
        g.target.value = "";
        return;
      }
      N('legacyFileDropArea callback "onInput"', l, g), N(
        'legacyFileDropArea callback "onValueInput"',
        s,
        x,
        g
      ), g.target.value = "";
    }, [i, a, r, l, s]), p = se((g) => Le(g), []), h = se((g) => Le(g), []), f = se((g) => {
      if (Le(g), i == !0)
        return;
      const x = d(g.dataTransfer.files);
      x.length !== 0 && (N('legacyFileDropArea callback "onDrop"', c, g), N(
        'legacyFileDropArea callback "onValueInput"',
        s,
        x,
        g
      ));
    }, [i, a, r, c, s]);
    return b`<label class="jcl-component legacy-file-drop-area ${t} ${i ? "disabled" : ""}"
        style=${n}
        onDragEnter=${p} onDragOver=${h} onDrop=${f}
      >
        <span>${o ?? ""}</span>
        <input type="file"
          multiple=${a} accept=${r.join(",")}
          disabled=${i} onInput=${u} ...${e.RestProps}
        />
      </label>`;
  });
}
const cp = /* @__PURE__ */ Z("jcl-component.legacy-file-drop-area", `
    .jcl-component.legacy-file-drop-area {
      display:flex; flex-flow:column nowrap;
        justify-content:center; align-items:center;
      min-width:60px; min-height:40px;
      border:dashed 4px #DDDDDD; border-radius:4px;
      color:#DDDDDD; background:white;
    }

    .jcl-component.legacy-file-drop-area * { pointer-events:none }

    .jcl-component.legacy-file-drop-area > input[type="file"] {
      display:block; position:absolute; appearance:none;
      left:0px; top:0px; right:0px; bottom:0px;
      opacity:0.01;
    }

    .jcl-component.legacy-file-drop-area.disabled {
      cursor:not-allowed;
    }
  `);
function dp(e) {
  return K(() => {
    up(), e = U(e);
    const t = S(e.Class) ?? "";
    let n = ve(e.activeIndex);
    const o = ve(e.GapIndex), a = J(e.disabled) ?? !1, r = A(e.onActivationChange), i = tt(), s = jt(n, 0);
    n = s.current;
    const l = se((u, p) => {
      if (a)
        return nn(p);
      s.current = u, i(), N('TabStrip callback "onActivationChange"', r, u);
    }, [a, r, i]), c = se((u, p) => {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), l(u, p));
    }, [l]), d = Yt(e.children).filter((u) => u?.type != null || typeof u == "number" || typeof u == "string" && u.trim() !== "");
    return b`<div
        class="jcl-component tabstrip ${a ? "disabled" : ""} ${t}"
        role="tablist" aria-disabled=${a ? "true" : void 0}
        ...${e.RestProps}
      >
        ${d.map((u, p) => {
      const h = p === o ? b`<div class="gap"/>` : "", f = p === n;
      return b`${h}<div
            class="${f ? "active" : ""} ${a ? "disabled" : ""} tab"
            role="tab" aria-selected=${f ? "true" : "false"}
            tabIndex=${a || f ? -1 : 0}
            onClick=${f ? void 0 : (g) => l(p, g)}
            onKeyDown=${f ? void 0 : (g) => c(p, g)}
          >${u}</>`;
    })}
      </>`;
  });
}
const up = /* @__PURE__ */ Z("jcl-component.tabstrip", `
    .jcl-component.tabstrip {
      display:flex !important; flex-flow:row nowrap !important;
        align-items:center;
      font-size:14px; font-weight:bold;
    }

    .jcl-component.tabstrip > .gap {
      flex:1 0 auto;
    }

    .jcl-component.tabstrip > .tab {
      display:inline-block; position:relative;
      margin:4px 0px 4px 0px;
      border:none; border-bottom:solid 2px transparent;
      cursor:pointer; pointer-events:auto;
    }
    .jcl-component.tabstrip > .tab:not(:first-child) {
      margin-left:20px;
    }
    .jcl-component.tabstrip > .active.tab {
      border-bottom:solid 2px gray;
      cursor:auto;
    }
    .jcl-component.tabstrip > .disabled.tab {
      pointer-events:none;
    }
    .jcl-component.tabstrip > .tab:focus-visible {
      outline:solid 2px #6366f1; border-radius:4px;
    }
    @media (prefers-contrast: more) {
      .jcl-component.tabstrip > .tab:focus-visible { outline:solid 3px currentColor }
    }
  `);
function pp(e) {
  return K(() => {
    hp(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Header) ?? Se("Header");
    let o = J(e.expanded);
    const a = J(e.disabled) ?? !1, r = A(e.onExpansionChange), i = tt(), s = Dt(), l = s + "-fold-header", c = s + "-fold-content", d = jt(o, !1);
    o = d.current;
    const u = se((h) => {
      if (Le(h), a)
        return;
      const f = !d.current;
      d.current = f, i(), N('AccordionFold callback "onExpansionChange"', r, f);
    }, [a, r, i]), p = se((h) => {
      (h.key === "Enter" || h.key === " ") && (h.preventDefault(), u(h));
    }, [u]);
    return b`<div
        class="jcl-component accordion-fold ${a ? "disabled" : ""} ${t}"
        ...${e.RestProps}
      >
        <div class="header">
          <div
            class="expander ${o ? "expanded" : "collapsed"}"
            role="button" aria-expanded=${o ? "true" : "false"}
            aria-controls=${c} aria-label=${n}
            aria-disabled=${a ? "true" : void 0}
            tabIndex=${a ? -1 : 0}
            onClick=${u} onKeyDown=${p}
          />
          <div id=${l} class="title">${n}</>
        </>
        ${o ? b`<div
          id=${c} class="content"
          role="region" aria-labelledby=${l}
        >${e.children}</>` : ""}
      </>`;
  });
}
const hp = /* @__PURE__ */ Z("jcl-component.accordion-fold", `
    .jcl-component.accordion-fold {
      flex:1 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:auto;
    }

    .jcl-component.accordion-fold > .header {
      display:flex; flex-flow:row nowrap; align-items:center;
      position:relative; left:0px; top:0px; width:100%; height:30px;
      border:none; background:#EEEEEE;
      border-top:   solid 1px #FFFFFF;
      border-bottom:solid 1px #AAAAAA;
      pointer-events:none;
    }
    .jcl-component.accordion-fold > .header > .expander {
      display:inline-block;
      position:relative; width:24px; height:24px;
      margin:3px 4px 3px 2px;
      border:none;
      cursor:pointer;
      user-select:none; pointer-events:auto;
    }
    .jcl-component.accordion-fold > .header > .expander.expanded {
      background:url(${To}/caret-down.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .jcl-component.accordion-fold > .header > .expander.collapsed {
      background:url(${To}/caret-right.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .jcl-component.accordion-fold > .header > .expander:focus-visible {
      outline:solid 2px #6366f1; border-radius:4px;
    }
    .jcl-component.accordion-fold > .header > .title {
      display:inline-block;
      position:relative; width:auto; height:24px;
      margin:3px 4px 3px 4px;
      font-size:14px; font-weight:bold; color:black; line-height:24px;
    }

    .jcl-component.accordion-fold > .content {
      display:inline-block;
      position:relative; width:100%; height:auto;
    }

    @media (prefers-contrast: more) {
      .jcl-component.accordion-fold > .header > .expander:focus-visible {
        outline:solid 3px currentColor;
      }
    }
  `);
function Ui(e, t) {
  return e == null ? [] : e.filter((n) => t.has(n) ? !1 : (t.add(n), !0));
}
let Po = 0;
const ea = /* @__PURE__ */ new WeakMap();
function er(e, t, n) {
  return ea.has(e) ? "" + ea.get(e) : (Po++, ea.set(e, Po), "" + Po);
}
function qi(e, t, n, o = !1, a = "") {
  return typeof e.toHTML == "function" ? b`<div class="default" dangerouslySetInnerHTML=${{ __html: e.toHTML() }}/>` : b`<div class="default">${"" + e}</>`;
}
function Xi(e) {
  return K(() => {
    fp(), e = U(e);
    const t = S(e.Class) ?? "";
    let n = E(e.List, (P) => je(P, De)) ?? Se("List");
    const o = S(e.Placeholder), a = A(e.KeyOfListItem) ?? er, r = A(e.ListItemRenderer) ?? qi, i = A(e.onListItemClick);
    let s = E(e.selectedItems, (P) => je(P, De));
    const l = ve(e.SelectionLimit) ?? 1 / 0, c = A(e.onSelectionChange), d = A(e.onListItemMove), u = E(e.DragMIMEType, Zn), p = A(e.SerializeListItems) ?? JSON.stringify, h = A(e.onListItemsDropped), f = E(e.DragEffect, (P) => Fa.includes(P)), g = c != null, x = g && d != null, m = g && u != null, C = x || m, k = /* @__PURE__ */ new Set();
    n.forEach((P) => {
      k.has(P) && ce(
        'InvalidArguments: the given "List" contains double entries'
      ), k.add(P);
    });
    const L = /* @__PURE__ */ new Set();
    g && (s = Ui(s, L), s.length > l && (s.slice(l).forEach(
      (P) => L.delete(P)
    ), s.length = l));
    const [$, y] = Be({
      dragging: !1,
      DropTargetItem: void 0,
      DropMode: void 0
    });
    function w(P) {
      y((X) => ({ ...X, ...P }));
    }
    const O = q([]), T = q(!1), j = (P) => {
      P.stopImmediatePropagation();
      const X = P.target.Item, te = P.target.Index;
      if (N(
        'FlatListView callback "onListItemClick"',
        i,
        X,
        n,
        te,
        P
      ), g) {
        const ue = P.pointerType !== "mouse" || P.ctrlKey || P.metaKey;
        I(X, n, te, ue);
      }
    }, I = (P, X, te, ue) => {
      if (l === 0)
        return s;
      let xe = s;
      return ue ? L.has(P) ? xe = s.filter(
        (ze) => ze !== P
      ) : s.length === l ? xe = [P] : xe = [...s, P] : xe = [P], N(
        'FlatListView callback "onSelectionChange"',
        c,
        xe,
        X
      ), xe;
    }, M = (P) => {
      const X = P.target.Item, te = P.target.Index;
      let ue = s;
      if (!L.has(X)) {
        const xe = P.ctrlKey || P.metaKey;
        ue = I(X, n, te, xe);
      }
      O.current = ue, T.current = !1, P.dataTransfer.effectAllowed = f ?? (m ? "copyMove" : "move"), m && P.dataTransfer.setData(
        u,
        p(ue)
      ), w({ dragging: !0 });
    }, D = (P) => {
      const X = P.target, te = X.Item;
      if (te != null) {
        if (L.has(te)) {
          $.DropTargetItem != null && w({ DropTargetItem: void 0, DropMode: void 0 });
          return;
        }
        const xe = X.getBoundingClientRect().top + X.offsetHeight / 2, ze = P.clientY < xe ? "before" : "after";
        P.preventDefault(), ($.DropTargetItem !== te || $.DropMode !== ze) && w({ DropTargetItem: te, DropMode: ze });
        return;
      }
      let ue;
      for (let xe = n.length - 1; xe >= 0; xe--)
        if (!L.has(n[xe])) {
          ue = n[xe];
          break;
        }
      if (ue == null) {
        $.DropTargetItem != null && w({ DropTargetItem: void 0, DropMode: void 0 });
        return;
      }
      P.preventDefault(), ($.DropTargetItem !== ue || $.DropMode !== "after") && w({ DropTargetItem: ue, DropMode: "after" });
    }, V = (P) => {
      if (!T.current) {
        const X = P.dataTransfer?.dropEffect ?? "none";
        X !== "none" && m && N(
          'FlatListView callback "onListItemsDropped"',
          h,
          X,
          O.current,
          n
        );
      }
      w({ dragging: !1, DropTargetItem: void 0, DropMode: void 0 });
    }, B = (P) => {
      const { DropTargetItem: X, DropMode: te } = $;
      if (X != null) {
        T.current = !0;
        const ue = n.filter(
          // in original order!
          (Ge) => L.has(Ge)
        ), xe = n.filter(
          (Ge) => !L.has(Ge)
        ), ze = xe.indexOf(X) + (te === "before" ? 0 : 1);
        xe.splice(ze, 0, ...ue), n = xe, N(
          'FlatListView callback "onListItemMove"',
          d,
          n,
          ue,
          X,
          te
        ), w({ DropTargetItem: void 0, DropMode: void 0 });
      }
    };
    if (n.length === 0)
      return b`<div
          class="jcl-component flatlistview placeholder ${t}"
          ...${e.RestProps}
        >
          <div dangerouslySetInnerHTML=${{ __html: o ?? "(empty)" }}/>
        </>`;
    const { dragging: Y, DropTargetItem: Q, DropMode: pe } = $;
    return b`<div
        class="jcl-component flatlistview ${Y ? "dragging" : ""} ${t}"
        role=${g ? "listbox" : "list"}
        aria-multiselectable=${g && l !== 1 ? "true" : void 0}
            onClick=${j}
        onDragStart=${C ? M : void 0}
         onDragOver=${x ? D : void 0}
          onDragEnd=${C ? V : void 0}
             onDrop=${x ? B : void 0}
        ...${e.RestProps}
      >
        ${n.map((P, X) => {
      const te = He(
        'FlatListView callback "KeyOfListItem"',
        a,
        P,
        n,
        X
      ), ue = L.has(P), xe = P === Q ? pe : "";
      return b`<div
            class=${"itemview" + (ue ? " selected" : "") + (P === Q ? ` DropTarget ${pe}` : "")}
            role=${g ? "option" : "listitem"}
            aria-selected=${g ? ue ? "true" : "false" : void 0}
            key=${te} draggable=${C}
            ref=${(ze) => {
        ze != null && (ze.Item = P, ze.Index = X);
      }}
          >
            ${He(
        'FlatListView callback "ListItemRenderer"',
        r,
        P,
        n,
        X,
        ue,
        xe
      )}
          </>`;
    })}
      </>`;
  });
}
const fp = /* @__PURE__ */ Z("jcl-component.flatlistview", `
    .jcl-component.flatlistview {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:stretch !important;
      overflow-x:auto; overflow-y:scroll; overscroll-behavior-y:contain;
      border:solid 1px #888888; border-radius:2px;
      background:#DDDDDD; padding:0px;
    }

    .jcl-component.flatlistview > .itemview {
      display:block; position:relative; overflow:hidden; flex:0 0 auto;
      left:0px; top:0px; width:100%; height:auto; line-height:22px;
      background:white; color:black;
      border:none; border-bottom:solid 1px lightgray;
      padding:2px 4px 2px 4px;
      white-space:nowrap; text-overflow:ellipsis;
      user-select:none; pointer-events:auto;
    }
    .jcl-component.flatlistview > .itemview:last-child {
      border:none; border-bottom:solid 1px transparent;
    }

    .jcl-component.flatlistview > .itemview > .default {
      height:30px; line-height:29px; overflow:hidden; text-overflow:ellipsis;
      padding-left:4px; padding-right:4px;
    }

    .jcl-component.flatlistview > .itemview * {
      pointer-events:none;
    }

    .jcl-component.flatlistview > .itemview.selected {
      background:dodgerblue; color:white;
    }
    .jcl-component.flatlistview.dragging > .itemview.selected {
      opacity:0.3;
    }

    .jcl-component.flatlistview > .itemview.before {
      border-top:solid 20px #DDDDDD;
    }
    .jcl-component.flatlistview > .itemview.after {
      border-bottom:solid 21px #DDDDDD;
    }

    .jcl-component.flatlistview.placeholder {
      display:flex; flex-flow:column nowrap;
      align-items:center !important; justify-content:center;
      flex:1 0 auto; width:100%; height:100%; overflow:hidden;
      background-color:#EEEEEE;
    }
    .jcl-component.flatlistview.placeholder > * {
      display:inline-block; position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function gp(e) {
  return er(e);
}
function mp(e, t = !1, n = !1, o = !1, a = "") {
  return qi(e);
}
function bp(e) {
  return K(() => {
    yp();
    const t = q([]), n = q(() => !0);
    e = U(e);
    const o = S(e.Class) ?? "", a = E(e.List, (F) => je(F, De)) ?? Se("List"), r = S(e.Placeholder), i = A(e.KeyOfListItem) ?? gp, s = A(e.ListItemRenderer) ?? mp, l = A(e.ContentOfListItem), c = A(e.ContainerOfListItem), d = A(e.onListItemClick), u = A(e.ItemMayBeSelected) ?? n.current;
    let p = E(e.selectedItems, (F) => je(F, De));
    const h = ve(e.SelectionLimit) ?? 1 / 0, f = A(e.onSelectionChange), g = A(e.ItemMayBeExpanded) ?? n.current;
    let x = E(e.expandedItems, (F) => je(F, De)) ?? t.current;
    const m = A(e.onExpansionChange), C = A(e.ListItemMayAccept) ?? n.current, k = A(e.ListItemMayContain), L = A(e.onListItemMove), $ = E(e.DragMIMEType, Zn), y = A(e.SerializeListItems) ?? JSON.stringify, w = A(e.onListItemsDropped), O = E(e.DragEffect, (F) => Fa.includes(F)), T = f != null, j = T && L != null, I = T && $ != null, M = j || I, D = /* @__PURE__ */ new Set();
    function V(F) {
      F.forEach((G) => {
        D.has(G) && ce(
          'InvalidArguments: the given "List" contains double entries'
        ), D.add(G);
        const ne = He(
          'NestedListView callback "ContentOfListItem"',
          l,
          G
        );
        ne != null && V(ne);
      });
    }
    V(a);
    function B(F, G) {
      let ne = He(
        'NestedListView callback "ContainerOfListItem"',
        c,
        G
      );
      switch (ne) {
        case null:
        case void 0:
          return !1;
        case F:
          return !0;
        default:
          return B(F, ne);
      }
    }
    const Y = /* @__PURE__ */ new Set();
    if (T) {
      p = Ui(p, Y);
      for (let F = p.length - 1; F >= 0; F--) {
        const G = p[F];
        p.some((ne, be) => be !== F && B(ne, G)) && (p.splice(F, 1), Y.delete(G));
      }
      p.length > h && (p.slice(h).forEach(
        (F) => Y.delete(F)
      ), p.length = h);
    }
    function Q(F) {
      return p.some(
        (G) => B(G, F)
      );
    }
    function pe(F) {
      for (let G = p.length - 1; G >= 0; G--) {
        const ne = p[G];
        B(F, ne) && (p.splice(G, 1), Y.delete(ne));
      }
    }
    function P(F, G) {
      if (h === 0)
        return p;
      let ne = p;
      return G ? Y.has(F) ? ne = p.filter(
        (be) => be !== F
      ) : p.length === h ? ne = [F] : ne = [...p.filter(
        (be) => !B(F, be)
      ), F] : ne = [F], N(
        'NestedListView callback "onSelectionChange"',
        f,
        ne
      ), ne;
    }
    const X = Zt(() => {
      const F = /* @__PURE__ */ new Map();
      return x == null ? x = [] : x = x.filter((G) => F.has(G) ? !1 : (F.set(G, "explicit"), !0)), F;
    }, [x]);
    function te(F) {
      X.has(F) ? xe(F) : ue(F);
    }
    function ue(F) {
      X.set(F, "explicit");
      let G = [...x, F], ne = He(
        'NestedListView callback "ContainerOfListItem"',
        c,
        F
      );
      for (; ne != null; )
        X.has(ne) || (X.set(ne, "explicit"), G.push(ne)), ne = He(
          'NestedListView callback "ContainerOfListItem"',
          c,
          ne
        );
      N(
        'NestedListView callback "onExpansionChange"',
        m,
        G
      );
    }
    function xe(F) {
      X.delete(F);
      const G = x.filter(
        (ne) => ne !== F
      );
      N(
        'NestedListView callback "onExpansionChange"',
        m,
        G
      );
    }
    function ze(F) {
      X.has(F) || X.set(F, "automatic");
      let G = He(
        'NestedListView callback "ContainerOfListItem"',
        c,
        F
      );
      for (; G != null; )
        X.has(G) || X.set(G, "automatic"), G = He(
          'NestedListView callback "ContainerOfListItem"',
          c,
          G
        );
    }
    function Ge(F) {
      X.get(F) === "automatic" && X.delete(F);
      let G = He(
        'NestedListView callback "ContainerOfListItem"',
        c,
        F
      );
      for (; G != null; )
        X.get(G) === "automatic" && X.delete(G), G = He(
          'NestedListView callback "ContainerOfListItem"',
          c,
          G
        );
    }
    const Je = q(/* @__PURE__ */ Object.create(null)), it = q({
      dragging: !1,
      DropTargetItem: void 0,
      DropMode: void 0,
      DropTargetTimer: void 0,
      TargetMayContain: !1
    }), oe = q([]), ee = q(!1);
    function re(F) {
      const G = F.target.getAttribute("data-key"), ne = Je.current[G];
      if (ne == null)
        return;
      let be = p;
      Y.has(ne) || (be = P(ne, F.shiftKey || F.metaKey)), oe.current = be, ee.current = !1, F.dataTransfer.effectAllowed = O ?? (I ? "copyMove" : "move"), I && F.dataTransfer.setData(
        $,
        y(be)
      ), $e.State.dragging = !0, $e.State.DropTargetItem = void 0, $e.State.DropTargetTimer = void 0, Qe();
    }
    function ie(F) {
      const G = F.target.getAttribute("data-key"), ne = Je.current[G], { DropTargetItem: be } = $e.State;
      if (be === ne)
        F.preventDefault(), qe(F, ne);
      else {
        if (be != null && ke(F), ne == null)
          return;
        if (!Y.has(ne) && !Q(ne)) {
          if (He(
            'NestedListView callback "ListItemMayAccept"',
            $e.ListItemMayAccept,
            ne,
            p
          ) != !0)
            return;
          F.preventDefault(), Ve(F, ne);
        }
      }
    }
    const me = ie;
    function ge(F) {
      const G = F.target.getAttribute("data-key"), ne = Je.current[G], { DropTargetItem: be } = $e.State;
      (be === ne || ne == null) && ke(F);
    }
    function Ie(F) {
      if (ge(F), !ee.current) {
        const G = F.dataTransfer?.dropEffect ?? "none";
        G !== "none" && I && N(
          'NestedListView callback "onListItemsDropped"',
          w,
          G,
          oe.current,
          a
        );
      }
      $e.State.dragging = !1, $e.State.DropMode = void 0, Qe();
    }
    function Me(F) {
      const { ListItemMayContain: G } = $e;
      return G == null ? !1 : He(
        'NestedListView callback "ListItemMayContain"',
        G,
        F,
        p
      ) == !0;
    }
    function Ae() {
      return $e.State.TargetMayContain ? "into" : "after";
    }
    function st(F) {
      $e.State.DropTargetTimer = setTimeout(() => {
        $e.State.DropTargetTimer = void 0, $e.State.DropMode === Ae() && (ze(F), Qe());
      }, 2e3);
    }
    function we(F) {
      const G = F.target, ne = G.querySelector(":scope > .labelline"), { top: be, height: We } = (ne ?? G).getBoundingClientRect(), dt = F.clientY - be;
      if (!$e.State.TargetMayContain)
        return dt < We / 2 ? "before" : "after";
      switch (!0) {
        case dt < We / 3:
          return "before";
        case dt >= We * 2 / 3:
          return "after";
        default:
          return "into";
      }
    }
    function Ve(F, G) {
      const { DropTargetTimer: ne } = $e.State;
      ne != null && (clearTimeout(ne), $e.State.DropTargetTimer = void 0), $e.State.DropTargetItem = G, $e.State.TargetMayContain = Me(G), st(G);
      let be = He(
        'NestedListView callback "ContainerOfListItem"',
        c,
        G
      );
      be != null && (ze(be), Qe()), qe(F, G);
    }
    function qe(F, G) {
      const ne = we(F);
      $e.State.DropMode !== ne && (ne === Ae() && $e.State.DropTargetTimer == null && st(G), $e.State.DropMode = ne, Qe());
    }
    function ke(F) {
      const { DropTargetItem: G, DropTargetTimer: ne } = $e.State;
      ne != null && (clearTimeout(ne), $e.State.DropTargetTimer = void 0), G != null && (Ge(G), $e.State.DropTargetItem = void 0, $e.State.TargetMayContain = !1), setTimeout(Qe, 500);
    }
    function Xe(F) {
      const { DropTargetItem: G, DropMode: ne } = $e.State;
      G != null && (ee.current = !0, N(
        'NestedListView callback "onListItemMove"',
        L,
        p,
        G,
        ne
      ), $e.State.dragging = !1, $e.State.DropTargetItem = void 0, $e.State.DropMode = void 0, $e.State.TargetMayContain = !1);
    }
    const Qe = tt(), $e = {
      List: a,
      ListIsSortable: j,
      ListIsDraggable: M,
      KeyOfListItem: i,
      ListItemRenderer: s,
      ContentOfListItem: l,
      ListIsSelectable: T,
      ListItemMayBeSelected: u,
      onListItemClick: d,
      SelectionSet: Y,
      anyOuterItemIsSelected: Q,
      changeSelection: P,
      ExpansionMap: X,
      ListItemMayBeExpanded: g,
      toggleExpansionOf: te,
      ListItemWithKey: Je.current,
      ListItemMayAccept: C,
      ListItemMayContain: k,
      State: it.current,
      rerender: Qe
    };
    if (a.length === 0)
      return b`<div
          class="jcl-component nestedlistview placeholder ${o}"
          ...${e.RestProps}
        >
          <div dangerouslySetInnerHTML=${{ __html: r ?? "(empty)" }}/>
        </>`;
    const { dragging: z } = $e.State;
    return b`<div
        class="jcl-component nestedlistview ${z ? "dragging" : ""} ${o}"
        role="tree"
        aria-multiselectable=${T && h !== 1 ? "true" : void 0}
        onDragStart=${M ? re : void 0}
        onDragEnter=${j ? ie : void 0}
         onDragOver=${j ? me : void 0}
        onDragLeave=${j ? ge : void 0}
          onDragEnd=${M ? Ie : void 0}
             onDrop=${j ? Xe : void 0}
        ...${e.RestProps}
      >
        <${Yi} List=${a} ListContext=${$e}/>
      </>`;
  });
}
const yp = /* @__PURE__ */ Z("jcl-component.nestedlistview", `
    .jcl-component.nestedlistview {
      overflow-x:auto; overflow-y:scroll; overscroll-behavior-y:contain;
      border:solid 1px #888888; border-radius:2px;
      background:#DDDDDD; padding:0px;
    }

  /**** actual ListView ****/

    .jcl-component.nestedlistview .listview {
      display:flex; position:relative; flex-flow:column nowrap; align-items:stretch;
      overflow:visible;
      margin:0px; margin-left:10px;
    }
    .jcl-component.nestedlistview > .listview {
      margin-left:0px;
    }

  /**** full ListItemView ****/

    .jcl-component.nestedlistview .listitemview {
      display:block; position:relative; overflow:hidden; flex:0 0 auto;
      left:0px; top:0px; width:100%; height:auto; line-height:0px;
      background:white; color:black;
      border:none;
      white-space:nowrap; text-overflow:ellipsis;
      user-select:none; pointer-events:auto;
    }

  /**** LabelLine in ListItemView ****/

    .jcl-component.nestedlistview .listitemview > .labelline {
      display:block; position:relative;
      width:100%;
      border:none;
      pointer-events:none;
    }
    .jcl-component.nestedlistview .listitemview:not(:last-child) > .labelline {
      border-bottom:solid 1px lightgray;
    }

  /**** Drop Indicators ****/

  /* deliberately, none of these rules may affect the layout: the drop zones */
  /* are measured while dragging, and their boundaries must not move around  */
  /* underneath the pointer which is currently being hovered over them       */

    .jcl-component.nestedlistview .listitemview > .labelline::after {
      content:''; display:none; position:absolute; z-index:1;
      left:0px; right:0px; height:3px;
      background-color:dodgerblue;
      pointer-events:none;
    }
    .jcl-component.nestedlistview .listitemview.before > .labelline::after {
      display:block; top:0px;
    }
    .jcl-component.nestedlistview .listitemview.after > .labelline::after {
      display:block; bottom:0px;
    }
    .jcl-component.nestedlistview .listitemview.into > .labelline {
      background-color:rgba(30,144,255, 0.25);
      outline:solid 2px dodgerblue; outline-offset:-2px;
    }

  /**** LabelLine ExpansionMarker ****/

    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker {
      display:inline-block; position:absolute;
      left:0px; top:0px; width:20px; height:30px; text-align:center;
      background-color:currentColor; ${ct}
      pointer-events:auto;
    }
    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker.plain {
      width:6px; height:6px; left:7px; top:12px; border-radius:50%;
    }
    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker.collapsed { ${ro} }
    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker.expanded  { ${ao} }

  /* while dragging, the marker must not swallow the drag events of its item */

    .jcl-component.nestedlistview.dragging .listitemview > .labelline > .expansion-marker {
      pointer-events:none;
    }

  /**** LabelLine LabelView ****/

    .jcl-component.nestedlistview .listitemview > .labelline > .labelview {
      display:inline-block; position:relative;
      left:20px; top:0px; right:0px; bottom:0px;
      padding:0px; padding-left:4px; padding-right:4px;
      overflow:hidden; text-overflow:ellipsis;
      white-space:nowrap; line-height:30px;
    }
    .jcl-component.nestedlistview .listitemview.selected > .labelline {
      background-color:dodgerblue; color:white;
    }
    .jcl-component.nestedlistview .listitemview.selected > .listview .labelline {
      background-color:rgba(30,144,255, 0.3); color:black;
    }

  /**** Default LabelView ****/

    .jcl-component.nestedlistview .listitemview > .labelline > .labelview > .default {
      height:30px; line-height:29px; overflow:hidden; text-overflow:ellipsis;
      padding-left:4px; padding-right:4px;
    }

  /**** Placeholder ****/

    .jcl-component.nestedlistview.placeholder {
      display:flex; flex-flow:column nowrap; align-items:center; justify-content:center;
      flex:1 0 auto; width:100%; height:100%; overflow:hidden;
      background-color:#EEEEEE;
    }
    .jcl-component.nestedlistview.placeholder > * {
      display:inline-block; position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Yi(e) {
  return K(() => {
    const { List: t, ListContext: n } = e;
    return b`<div class="listview" role="group">${t.map((o) => b`<${xp}
          ListItem=${o} ListContext=${n}
        />`)}</>`;
  });
}
function xp(e) {
  return K(() => {
    const { ListItem: t, ListContext: n } = e, { KeyOfListItem: o, ContentOfListItem: a } = n, r = He(
      'NestedListView callback "ContentOfListItem"',
      a,
      t
    ), i = r == null, s = n.ExpansionMap.has(t), l = n.SelectionSet.has(t), c = He(
      'NestedListView callback "KeyOfListItem"',
      o,
      t
    );
    n.ListItemWithKey[c] = t;
    const d = ($) => {
      if ($.stopPropagation(), N(
        'NestedListView callback "onListItemClick"',
        n.onListItemClick,
        t,
        $
      ), !n.anyOuterItemIsSelected(t) && n.ListIsSelectable) {
        if (He(
          'NestedListView callback "ListItemMayBeSelected"',
          n.ListItemMayBeSelected,
          t
        ) != !0)
          return;
        const y = $.pointerType !== "mouse" || $.ctrlKey || $.metaKey;
        n.changeSelection(t, y);
      }
    }, u = ($) => {
      $.stopPropagation(), He(
        'NestedListView callback "ContentOfListItem"',
        a,
        t
      ) != null && (n.toggleExpansionOf(t), n.rerender());
    }, p = i ? "plain" : s ? "expanded" : "collapsed", h = He(
      'NestedListView callback "ListItemMayBeExpanded"',
      n.ListItemMayBeExpanded,
      t
    ), f = b`<div
        class="expansion-marker ${p} ${h ? "" : "disabled"}"
        onClick=${h ? u : void 0}
      />`, g = !i && s && !(n.State.dragging && l) ? b`<${Yi} List=${r} ListContext=${n}/>` : "", { DropTargetItem: x, DropMode: m } = n.State, C = t === x, k = n.ListIsSortable, L = n.ListIsDraggable;
    return b`<div
        class=${"listitemview" + (l ? " selected" : "") + (C ? ` DropTarget ${m}` : "")}
        role="treeitem"
        aria-expanded=${i ? void 0 : s ? "true" : "false"}
        aria-selected=${n.ListIsSelectable ? l ? "true" : "false" : void 0}
        key=${c} data-key=${c}
        draggable=${L} onClick=${d}
      > <div class="labelline">
          ${f}
          <div class="labelview">${He(
      'NestedListView callback "ListItemRenderer"',
      n.ListItemRenderer,
      t,
      l,
      i,
      s,
      C ? m : ""
    )}</>
        </>
        ${g}
      </>`;
  });
}
let Ji, Zi;
const wp = co(() => Promise.all([
  at("squire-rte"),
  at("dompurify")
]).then(([e, t]) => {
  Ji = e.Squire ?? e.default, Zi = t.default ?? t;
})), tr = "jcl-custom:", vp = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
function Cp(e) {
  const t = new DOMParser().parseFromString(
    "<body>" + e + "</body>",
    "text/html"
  ), n = t.body;
  return Array.from(n.querySelectorAll("*")).forEach((o) => {
    if (!/^CUSTOM-/.test(o.tagName))
      return;
    const a = {};
    Array.from(o.attributes).forEach((i) => {
      a[i.name] = i.value;
    });
    const r = t.createElement("img");
    r.setAttribute("src", vp), r.setAttribute("alt", tr + JSON.stringify({
      Tag: o.tagName.toLowerCase(),
      Attributes: a,
      innerHTML: o.innerHTML
    })), o.replaceWith(r);
  }), n.innerHTML;
}
function ua(e) {
  const t = Zi.sanitize(Cp(e), {
    USE_PROFILES: { html: !0 },
    RETURN_DOM_FRAGMENT: !0,
    ADD_TAGS: ["iframe"],
    // iframes are deliberately permitted
    ADD_ATTR: [
      // with any (even insecure) settings
      "allow",
      "sandbox",
      "referrerpolicy",
      "allowfullscreen",
      "frameborder",
      "loading",
      "contenteditable"
    ]
  });
  return document.importNode(t, !0);
}
function kp(e) {
  let t;
  try {
    t = JSON.parse(
      (e.getAttribute("alt") ?? "").slice(tr.length)
    );
  } catch {
    return;
  }
  if (t == null || !/^custom-/.test(t.Tag ?? ""))
    return;
  const n = document.createElement(t.Tag);
  return Object.keys(t.Attributes ?? {}).forEach((o) => {
    /^on/i.test(o) || n.setAttribute(o, t.Attributes[o]);
  }), n.setAttribute("contenteditable", "false"), n.appendChild(ua(t.innerHTML ?? "")), nr(n), n;
}
function nr(e) {
  Array.from(e.querySelectorAll('img[alt^="' + tr + '"]')).forEach((t) => {
    const n = kp(t);
    n != null && t.replaceWith(n);
  });
}
function Qi(e, t) {
  e.classList.toggle("empty", t.textContent === "");
}
function ta(e, t, n, o) {
  return e.setHTML(o), nr(t), Qi(n, t), e.getHTML();
}
function _r(e, t, n) {
  switch (!0) {
    case n === "":
      e[t] = "";
      break;
    case /^\d+$/.test(n):
      e[t] = n + "px";
      break;
    default:
      e[t] = n;
  }
}
function jp(e) {
  const t = {
    // Tag, "set" and "remove" methods
    toggleBold: ["B", "bold", "removeBold"],
    toggleItalic: ["I", "italic", "removeItalic"],
    toggleUnderline: ["U", "underline", "removeUnderline"],
    toggleStrikethrough: ["S", "strikethrough", "removeStrikethrough"],
    toggleSubscript: ["SUB", "subscript", "removeSubscript"],
    toggleSuperscript: ["SUP", "superscript", "removeSuperscript"]
  }, n = {};
  return Object.keys(t).forEach((o) => {
    const [a, r, i] = t[o];
    n[o] = () => e.hasFormat(a) ? e[i]() : e[r]();
  }), n;
}
function Pi(e) {
  return K(() => {
    $p();
    const t = Tn(wp);
    e = U(e);
    const n = S(e.Class) ?? "";
    let o = ae(e.Value);
    const a = S(e.Placeholder) ?? "", r = J(e.readonly) ?? !1, i = J(e.disabled) ?? !1, s = A(e.onValueChange), l = A(e.onSelectionChange), c = A(e.onUndoStateChange), d = A(e.onPaste), u = A(e.onImagePaste), p = A(e.onMount), h = A(e.onUnmount), f = q(null), g = q(void 0), x = q(void 0), m = q({});
    m.current = {
      onValueChange: s,
      onSelectionChange: l,
      onUndoStateChange: c,
      onPaste: d,
      onImagePaste: u,
      onUnmount: h
    };
    const C = q(o ?? ""), k = q(o ?? ""), L = q(!1);
    return o != null && o !== C.current && (C.current = o, k.current = o, L.current = !0), Ce(() => {
      if (!t)
        return;
      const $ = f.current, y = document.createElement("div");
      y.className = "rte-root", $.appendChild(y), x.current = y;
      const w = new Ji(y, {
        blockTag: "DIV",
        sanitizeToDOMFragment: ua
      });
      g.current = w, k.current = ta(
        w,
        y,
        $,
        k.current
      );
      function O() {
        Qi($, y);
      }
      function T() {
        return {
          Text: w.getSelectedText(),
          isCollapsed: w.getSelection().collapsed,
          Path: w.getPath()
        };
      }
      function j() {
        const z = w.getHTML();
        k.current = z, O(), N(
          'RichTextEditor callback "onValueChange"',
          m.current.onValueChange,
          z
        );
      }
      let I = !1, M = !1;
      function D(z) {
        z.target instanceof Element && z.target.classList.contains("squire-resize-handle") && (I = !0);
      }
      function V() {
        I && (I = !1, M && (M = !1, j()));
      }
      y.addEventListener("pointerdown", D, !0), document.addEventListener("pointerup", V, !0), document.addEventListener("pointercancel", V, !0), w.addEventListener("input", () => {
        if (I) {
          M = !0;
          return;
        }
        j();
      });
      function B() {
        N(
          'RichTextEditor callback "onSelectionChange"',
          m.current.onSelectionChange,
          T()
        );
      }
      w.addEventListener("select", B), w.addEventListener("cursor", B), w.addEventListener("undoStateChange", (z) => {
        const { canUndo: F, canRedo: G } = z.detail ?? {};
        N(
          // payload in a
          'RichTextEditor callback "onUndoStateChange"',
          // CustomEvent
          m.current.onUndoStateChange,
          F === !0,
          G === !0
        );
      }), w.addEventListener("willPaste", (z) => {
        const F = m.current.onPaste;
        F != null && N(
          // ..."Event.detail" (fragment or text)
          'RichTextEditor callback "onPaste"',
          F,
          z
        );
      }), w.addEventListener("pasteImage", (z) => {
        const { clipboardData: F } = z.detail ?? {};
        if (F == null)
          return;
        const G = m.current.onImagePaste;
        if (G != null) {
          N(
            'RichTextEditor callback "onImagePaste"',
            G,
            F
          );
          return;
        }
        Array.from(F.files ?? []).filter((ne) => ne.type.startsWith("image/")).forEach((ne) => {
          const be = new FileReader();
          be.onload = () => w.insertImage(be.result, {}), be.readAsDataURL(ne);
        });
      });
      function Y(z) {
        for (; z != null && z !== y; ) {
          if (z.nodeName === "TD" || z.nodeName === "TH")
            return z;
          z = z.parentNode;
        }
      }
      w.addEventListener("keydown", (z) => {
        if (z.key !== "Tab" || z.defaultPrevented)
          return;
        const F = Y(w.getSelection().startContainer);
        if (F == null)
          return;
        const G = Array.from(y.querySelectorAll("td,th")), ne = G[G.indexOf(F) + (z.shiftKey ? -1 : 1)];
        ne != null && (z.preventDefault(), X(ne));
      });
      function Q(z) {
        for (; z != null && z !== y; ) {
          if (z.nodeName === "TABLE")
            return z;
          z = z.parentNode;
        }
      }
      function pe() {
        return Y(w.getSelection().startContainer);
      }
      function P() {
        const z = document.createElement("td");
        return z.appendChild(document.createElement("br")), z;
      }
      function X(z) {
        const F = document.createRange();
        F.selectNodeContents(z), F.collapse(!0), w.setSelection(F);
      }
      function te() {
        const z = Q(w.getSelection().startContainer);
        return z == null ? void 0 : {
          Rows: z.rows.length,
          Columns: z.rows[0] == null ? 0 : z.rows[0].cells.length
        };
      }
      function ue() {
        const z = pe();
        if (z == null)
          return;
        w.saveUndoState();
        const F = z.parentNode, G = document.createElement("tr");
        for (let ne = 0; ne < F.cells.length; ne++)
          G.appendChild(P());
        F.parentNode.insertBefore(G, F.nextSibling), X(G.cells[z.cellIndex] ?? G.cells[0]);
      }
      function xe() {
        const z = pe();
        if (z == null)
          return;
        const F = z.parentNode, G = Q(F);
        if (G == null || G.rows.length <= 1)
          return;
        w.saveUndoState();
        const ne = F.rowIndex, be = z.cellIndex;
        F.remove();
        const We = G.rows[Math.min(ne, G.rows.length - 1)];
        X(
          We.cells[Math.min(be, We.cells.length - 1)]
        );
      }
      function ze() {
        const z = pe();
        if (z == null)
          return;
        const F = Q(z);
        if (F == null)
          return;
        w.saveUndoState();
        const G = z.cellIndex;
        Array.from(F.rows).forEach((ne) => {
          ne.cells[Math.min(G, ne.cells.length - 1)].after(P());
        }), X(z.parentNode.cells[G + 1]);
      }
      function Ge() {
        const z = pe();
        if (z == null)
          return;
        const F = z.parentNode, G = Q(z);
        if (G == null || F.cells.length <= 1)
          return;
        w.saveUndoState();
        const ne = z.cellIndex;
        Array.from(G.rows).forEach((be) => {
          be.cells.length > ne && be.deleteCell(ne);
        }), X(F.cells[Math.min(ne, F.cells.length - 1)]);
      }
      function Je(z, F) {
        const G = Q(w.getSelection().startContainer);
        if (G == null)
          return;
        const ne = Math.max(1, Math.floor(z)), be = Math.max(1, Math.floor(F));
        for (w.saveUndoState(); G.rows.length > ne; )
          G.deleteRow(-1);
        for (; G.rows.length < ne; ) {
          const We = G.insertRow(-1);
          for (let dt = 0; dt < be; dt++)
            We.appendChild(P());
        }
        Array.from(G.rows).forEach((We) => {
          for (; We.cells.length > be; )
            We.deleteCell(-1);
          for (; We.cells.length < be; )
            We.appendChild(P());
        }), X(G.rows[0].cells[0]);
      }
      function it(z) {
        const F = Q(w.getSelection().startContainer);
        if (F != null)
          switch (w.saveUndoState(), z) {
            // ..."setTextAlignment" only affects text
            case "center":
              F.style.marginLeft = "auto", F.style.marginRight = "auto";
              break;
            case "right":
              F.style.marginLeft = "auto", F.style.marginRight = "0";
              break;
            default:
              F.style.marginLeft = "0", F.style.marginRight = "auto";
          }
      }
      let oe;
      y.addEventListener("pointerdown", (z) => {
        oe = z.target.nodeName === "IMG" ? z.target : void 0;
      });
      function ee() {
        if (oe != null && oe.isConnected)
          return oe;
        const z = w.getSelection(), F = z.startContainer;
        if (F instanceof Element) {
          const G = F.childNodes[z.startOffset];
          if (G != null && G.nodeName === "IMG")
            return G;
        }
      }
      function re() {
        const z = ee();
        return z == null ? void 0 : {
          URL: z.getAttribute("src") ?? "",
          Width: z.style.width || (z.getAttribute("width") ?? ""),
          AltText: z.getAttribute("alt") ?? ""
        };
      }
      function ie(z) {
        const { URL: F, Width: G, AltText: ne } = z;
        let be = ee();
        if (be == null) {
          if (F == null || F === "")
            return;
          be = w.insertImage(F, {});
        } else
          w.saveUndoState(), F != null && F !== "" && be.setAttribute("src", F);
        if (ne != null && be.setAttribute("alt", ne), G != null) {
          const We = String(G).trim();
          _r(be.style, "width", We), be.style.height = We === "" ? "" : "auto";
        }
        oe = be;
      }
      let me;
      y.addEventListener("pointerdown", (z) => {
        me = z.target.nodeName === "IFRAME" ? z.target : void 0;
      });
      function ge() {
        if (me != null && me.isConnected)
          return me;
        const z = w.getSelection(), F = z.startContainer;
        if (F instanceof Element) {
          const G = F.childNodes[z.startOffset];
          if (G != null && G.nodeName === "IFRAME")
            return G;
        }
      }
      function Ie() {
        const z = ge();
        return z == null ? void 0 : {
          URL: z.getAttribute("src") ?? "",
          Width: z.style.width || (z.getAttribute("width") ?? ""),
          Height: z.style.height || (z.getAttribute("height") ?? ""),
          allow: z.getAttribute("allow") ?? "",
          Sandbox: z.getAttribute("sandbox") ?? "",
          ReferrerPolicy: z.getAttribute("referrerpolicy") ?? ""
        };
      }
      function Me(z, F, G) {
        G != null && (G === "" ? z.removeAttribute(F) : z.setAttribute(F, G));
      }
      function Ae(z, F, G) {
        G != null && _r(z.style, F, String(G).trim());
      }
      function st(z) {
        const { URL: F, Width: G, Height: ne, allow: be, Sandbox: We, ReferrerPolicy: dt } = z;
        let pt = ge();
        if (pt == null) {
          if (F == null || F === "")
            return;
          pt = document.createElement("iframe"), pt.setAttribute("src", F), w.insertElement(pt);
        } else
          w.saveUndoState(), F != null && F !== "" && pt.setAttribute("src", F);
        Me(pt, "allow", be), Me(pt, "sandbox", We), Me(pt, "referrerpolicy", dt), Ae(pt, "width", G), Ae(pt, "height", ne), me = pt;
      }
      function we(z) {
        return z != null && z.nodeType === 1 && /^custom-/i.test(z.nodeName);
      }
      function Ve(z) {
        for (; z != null && z !== y; ) {
          if (we(z))
            return z;
          z = z.parentNode;
        }
      }
      let qe;
      y.addEventListener("pointerdown", (z) => {
        qe = Ve(z.target);
      });
      function ke() {
        if (qe != null && qe.isConnected)
          return qe;
        const z = w.getSelection(), F = z.startContainer;
        if (F instanceof Element) {
          const G = F.childNodes[z.startOffset];
          if (we(G))
            return G;
        }
      }
      function Xe() {
        const z = ke();
        if (z == null)
          return;
        const F = {};
        for (const G of Array.from(z.attributes))
          G.name !== "contenteditable" && (F[G.name] = G.value);
        return {
          Tag: z.tagName.toLowerCase(),
          Attributes: F,
          innerHTML: z.innerHTML
        };
      }
      function Qe(z) {
        const { Tag: F, Attributes: G, innerHTML: ne } = z;
        let be = ke();
        if (be == null) {
          const We = String(F ?? "").trim().toLowerCase();
          if (!/^custom-/.test(We))
            return;
          be = document.createElement(We), w.insertElement(be);
        } else
          w.saveUndoState();
        if (G != null)
          for (const We of Object.keys(G)) {
            if (We === "contenteditable" || /^on/i.test(We))
              continue;
            const dt = G[We];
            dt != null && (dt === "" ? be.removeAttribute(We) : be.setAttribute(We, dt));
          }
        ne != null && (be.innerHTML = "", be.appendChild(ua(ne)), nr(be)), be.setAttribute("contenteditable", "false"), qe = be;
      }
      const $e = {
        Editor: w,
        // grants access to full Squire API
        focus: () => w.focus(),
        blur: () => w.blur(),
        moveCursorToStart: () => w.moveCursorToStart(),
        moveCursorToEnd: () => w.moveCursorToEnd(),
        getValue: () => w.getHTML(),
        setValue: (z) => {
          Ye("editor value", z), k.current = ta(
            w,
            y,
            $,
            z
          );
        },
        insertHTML: (z) => {
          Ye("HTML to insert", z), w.insertHTML(z);
        },
        insertPlainText: (z) => {
          Ye("text to insert", z), w.insertPlainText(z, !1);
        },
        insertImage: (z, F) => {
          Ye("image URL", z), w.insertImage(z, F ?? {});
        },
        ImageAtCursor: () => re(),
        updateImage: (z) => ie(z ?? {}),
        IFrameAtCursor: () => Ie(),
        updateIFrame: (z) => st(z ?? {}),
        CustomComponentAtCursor: () => Xe(),
        updateCustomComponent: (z) => Qe(z ?? {}),
        insertTable: (z = 2, F = 2) => {
          const G = Math.max(1, Math.floor(z)), ne = Math.max(1, Math.floor(F));
          w.insertHTML("<table><tbody>" + ("<tr>" + "<td><br/></td>".repeat(ne) + "</tr>").repeat(G) + "</tbody></table>");
        },
        TableDimensions: () => te(),
        resizeTable: (z, F) => Je(z, F),
        alignTable: (z) => it(z),
        insertTableRow: ue,
        deleteTableRow: xe,
        insertTableColumn: ze,
        deleteTableColumn: Ge,
        getSelection: () => T(),
        CursorPosition: () => w.getCursorPosition(),
        hasFormat: (z) => w.hasFormat(z.toUpperCase()),
        FontInfo: () => w.getFontInfo(),
        ...jp(w),
        // toggleBold ... toggleSuperscript
        toggleCode: () => w.toggleCode(),
        setFontFace: (z) => w.setFontFace(z ?? null),
        setFontSize: (z) => w.setFontSize(z ?? null),
        setTextColor: (z) => (
          // American spellings, like...
          w.setTextColor(z ?? null)
        ),
        // ...Squire itself
        setHighlightColor: (z) => w.setHighlightColor(z ?? null),
        setLink: (z) => {
          Ye("link URL", z), w.makeLink(z);
        },
        removeLink: () => w.removeLink(),
        makeUnorderedList: () => w.makeUnorderedList(),
        makeOrderedList: () => w.makeOrderedList(),
        removeList: () => w.removeList(),
        indentListItem: () => w.increaseListLevel(),
        outdentListItem: () => w.decreaseListLevel(),
        increaseListLevel: () => w.increaseListLevel(),
        decreaseListLevel: () => w.decreaseListLevel(),
        increaseQuoteLevel: () => w.increaseQuoteLevel(),
        decreaseQuoteLevel: () => w.decreaseQuoteLevel(),
        setTextAlignment: (z) => w.setTextAlignment(z),
        setTextDirection: (z) => w.setTextDirection(z),
        setKeyHandler: (z, F) => w.setKeyHandler(z, F),
        removeAllFormatting: () => w.removeAllFormatting(),
        undo: () => {
          w.undo(), k.current = w.getHTML(), O();
        },
        redo: () => {
          w.redo(), k.current = w.getHTML(), O();
        }
      };
      return N('RichTextEditor callback "onMount"', p, $e), () => {
        N(
          'RichTextEditor callback "onUnmount"',
          m.current.onUnmount
        ), y.removeEventListener("pointerdown", D, !0), document.removeEventListener("pointerup", V, !0), document.removeEventListener("pointercancel", V, !0), g.current = void 0, x.current = void 0, w.destroy(), y.remove();
      };
    }, [t]), Ce(() => {
      if (!L.current)
        return;
      L.current = !1;
      const $ = g.current;
      if ($ == null)
        return;
      const y = $.getHTML();
      k.current !== y && (k.current = ta(
        $,
        x.current,
        f.current,
        k.current
      ));
    }), Ce(() => {
      const $ = g.current, y = x.current;
      if ($ == null || y == null)
        return;
      const w = r || i ? "false" : "true";
      y.getAttribute("contenteditable") !== w && $.modifyDocument(
        // otherwise, Squire's MutationObserver
        () => y.setAttribute("contenteditable", w)
      );
    }, [t, r, i]), b`<div
        class="jcl-component richtexteditor ${i ? "disabled" : ""} ${n}"
        data-placeholder="${a}"
        ...${e.RestProps} ref=${f}
      />`;
  });
}
const $p = /* @__PURE__ */ Z("jcl-component.richtexteditor", `
    .jcl-component.richtexteditor {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:stretch !important;
      position:relative; overflow:hidden;
      border:solid 1px #888888; border-radius:2px;
      background:white; color:black;
      font-size:14px;
    }

    .jcl-component.richtexteditor > .rte-root {
      flex:1 1 auto; overflow:auto; overscroll-behavior:contain;
      position:relative;         /* anchors Squire's image-resize handles */
      width:100%; height:100%; padding:4px 6px;
      outline:none; cursor:text;
      white-space:pre-wrap; overflow-wrap:break-word;
    }
    .jcl-component.richtexteditor:focus-within {
      outline:solid 2px #6366f1; outline-offset:-2px;
    }

    .jcl-component.richtexteditor.empty::before {
      content:attr(data-placeholder);
      position:absolute; top:4px; left:6px;
      color:#999999; pointer-events:none;
    }

    .jcl-component.richtexteditor > .rte-root blockquote {
      margin:0 0 0 8px; padding:0 0 0 8px;
      border-left:solid 2px #cccccc;
    }
    .jcl-component.richtexteditor > .rte-root ul,
    .jcl-component.richtexteditor > .rte-root ol {
      margin:0; padding:0 0 0 24px;
    }

    .jcl-component.richtexteditor > .rte-root table {
      border-collapse:collapse; margin:4px 0px;
    }
    .jcl-component.richtexteditor > .rte-root td,
    .jcl-component.richtexteditor > .rte-root th {
      border:solid 1px #cccccc; padding:2px 6px; min-width:40px;
    }

    .jcl-component.richtexteditor > .rte-root img {
      max-width:100%;
    }

    .jcl-component.richtexteditor > .rte-root iframe {
      max-width:100%; border:solid 1px #cccccc;
    }
    .jcl-component.richtexteditor > .rte-root[contenteditable="true"] iframe {
      pointer-events:none;      /* makes iframes clickable while editing */
    }

    .jcl-component.richtexteditor > .rte-root [contenteditable="false"] {
      max-width:100%;   /* applies to "custom-*" components (see JS part) */
    }
    .jcl-component.richtexteditor > .rte-root[contenteditable="true"] [contenteditable="false"] {
      pointer-events:none;   /* same trick as used for iframes above, makes
                                 custom components clickable while editing */
    }

    .jcl-component.richtexteditor.disabled {
      opacity:0.6; pointer-events:none;
    }

    @media (prefers-contrast: more) {
      .jcl-component.richtexteditor:focus-within { outline:solid 3px currentColor }
    }
  `);
let Io, an, Kn, es, ts, ns, os, as, rs, is, ss, ls, cs, ds, us, ps, hs, fs, gs, ms, pa;
const Ip = co(
  () => Promise.all([
    at("@codemirror/state"),
    at("@codemirror/view"),
    at("@codemirror/language"),
    at("@codemirror/commands"),
    at("@codemirror/lint")
  ]).then(([
    e,
    t,
    n,
    o,
    a
  ]) => {
    Io = e.EditorState, an = e.Compartment, Kn = t.EditorView, es = t.keymap, ts = t.lineNumbers, ns = t.drawSelection, os = t.highlightSpecialChars, as = n.syntaxHighlighting, rs = n.defaultHighlightStyle, is = n.indentUnit, ss = n.syntaxTree, ls = n.ensureSyntaxTree, cs = o.defaultKeymap, ds = o.historyKeymap, us = o.indentWithTab, ps = o.history, hs = o.undo, fs = o.redo, gs = a.setDiagnostics, ms = a.lintGutter, pa = a.linter;
  })
), bs = /* @__PURE__ */ Object.create(null);
function Dp(e, t) {
  Xt("language name", e), Wt("language support loader", t), bs[e.toLowerCase()] = t;
}
const Gr = {
  javascript: ["@codemirror/lang-javascript", "javascript"],
  typescript: ["@codemirror/lang-javascript", "javascript", { typescript: !0 }],
  html: ["@codemirror/lang-html", "html"],
  css: ["@codemirror/lang-css", "css"],
  json: ["@codemirror/lang-json", "json"],
  markdown: ["@codemirror/lang-markdown", "markdown"],
  python: ["@codemirror/lang-python", "python"],
  xml: ["@codemirror/lang-xml", "xml"],
  java: ["@codemirror/lang-java", "java"],
  yaml: ["@codemirror/lang-yaml", "yaml"]
};
let Kr = !1;
function Lp() {
  Kr || (Kr = !0, Object.keys(Gr).forEach((e) => {
    const [t, n, o] = Gr[e];
    Dp(e, async () => (await at(t))[n](
      ...o == null ? [] : [o]
    ));
  }));
}
function Ur(e, t, n) {
  const o = Math.max(1, Math.min(Math.round(t), e.lines)), a = e.line(o), r = Math.max(1, Math.min(Math.round(n), a.length + 1));
  return a.from + r - 1;
}
function qr(e, t) {
  return t.map((n) => {
    const { Line: o, Column: a, EndLine: r, EndColumn: i, Message: s, Severity: l } = n, c = Ur(e, o ?? 1, a ?? 1), d = r == null && i == null ? e.line(Math.max(1, Math.min(Math.round(o ?? 1), e.lines))).to : Ur(e, r ?? o ?? 1, i ?? (a ?? 1) + 1);
    return {
      from: c,
      to: Math.max(c, d),
      severity: ["error", "warning", "info"].includes(l) ? l : "error",
      message: String(s ?? "(no message)")
    };
  });
}
function Sp(e) {
  return K(() => {
    Mp();
    const t = Tn(Ip);
    e = U(e);
    const n = S(e.Class) ?? "";
    let o = ae(e.Value);
    const a = (S(e.Language) ?? "").toLowerCase(), r = J(e.readonly) ?? !1, i = J(e.disabled) ?? !1, s = qt(e.TabSize) ?? 2, l = J(e.withLineNumbers) ?? !0, c = J(e.withLineWrapping) ?? !1, d = J(e.withSyntaxCheck) ?? !1, u = E(e.Errors, (T) => je(T, De)) ?? [], p = A(e.Linter), h = qt(e.LintDelay) ?? 750, f = A(e.onValueChange), g = A(e.onSelectionChange), x = A(e.onMount), m = A(e.onUnmount), C = q(null), k = q(void 0), L = q({});
    L.current = { onValueChange: f, onSelectionChange: g, onUnmount: m, Linter: p };
    const $ = q(o ?? ""), y = q(o ?? "");
    o != null && o !== $.current && ($.current = o, y.current = o);
    const w = q(void 0);
    Ce(() => {
      if (!t)
        return;
      w.current == null && (w.current = {
        Language: new an(),
        Readability: new an(),
        Indentation: new an(),
        LineNumbers: new an(),
        Wrapping: new an(),
        Linting: new an()
      });
      const T = w.current, j = new Kn({
        parent: C.current,
        state: Io.create({
          doc: y.current,
          extensions: [
            os(),
            ns(),
            ps(),
            as(rs, { fallback: !0 }),
            ms(),
            es.of([...cs, ...ds, us]),
            T.LineNumbers.of([]),
            T.Language.of([]),
            T.Readability.of([]),
            T.Indentation.of([]),
            T.Wrapping.of([]),
            T.Linting.of([]),
            Kn.updateListener.of((M) => {
              if (M.docChanged) {
                const D = M.state.doc.toString();
                y.current = D, N(
                  'CodeEditor callback "onValueChange"',
                  L.current.onValueChange,
                  D
                );
              }
              if (M.selectionSet) {
                const { from: D, to: V } = M.state.selection.main;
                N(
                  'CodeEditor callback "onSelectionChange"',
                  L.current.onSelectionChange,
                  D,
                  V
                );
              }
            })
          ]
        })
      });
      return k.current = j, N('CodeEditor callback "onMount"', x, {
        View: j,
        // grants access to full CM API
        focus: () => j.focus(),
        getValue: () => j.state.doc.toString(),
        setValue: (M) => {
          Ye("editor value", M), j.dispatch({
            changes: { from: 0, to: j.state.doc.length, insert: M }
          });
        },
        getSelection: () => {
          const { from: M, to: D } = j.state.selection.main;
          return { from: M, to: D, Text: j.state.sliceDoc(M, D) };
        },
        setSelection: (M, D = M) => {
          const V = j.state.doc.length, B = Math.max(0, Math.min(M, V)), Y = Math.max(B, Math.min(D, V));
          j.dispatch({
            selection: { anchor: B, head: Y },
            scrollIntoView: !0
          });
        },
        replaceSelection: (M) => {
          Ye("replacement", M), j.dispatch(j.state.replaceSelection(M));
        },
        undo: () => hs(j),
        redo: () => fs(j)
      }), () => {
        N(
          'CodeEditor callback "onUnmount"',
          L.current.onUnmount
        ), k.current = void 0, j.destroy();
      };
    }, [t]), Ce(() => {
      const T = k.current;
      if (T == null)
        return;
      const j = T.state.doc.toString();
      y.current !== j && T.dispatch({
        changes: { from: 0, to: j.length, insert: y.current }
      });
    }), Ce(() => {
      const T = k.current;
      if (T == null)
        return;
      const { Language: j } = w.current;
      if (a === "" || a === "text") {
        T.dispatch({ effects: j.reconfigure([]) });
        return;
      }
      Lp();
      const I = bs[a];
      if (I == null) {
        console.warn("CodeEditor: unsupported language " + vt(a)), T.dispatch({ effects: j.reconfigure([]) });
        return;
      }
      let M = !1;
      return I().then((D) => {
        M || k.current !== T || T.dispatch({
          effects: j.reconfigure(D)
        });
      }).catch((D) => console.error(
        "CodeEditor: could not load support for language " + vt(a),
        D
      )), () => {
        M = !0;
      };
    }, [t, a]), Ce(() => {
      const T = k.current;
      T?.dispatch({
        effects: w.current.Readability.reconfigure([
          Io.readOnly.of(r || i),
          Kn.editable.of(!i)
        ])
      });
    }, [t, r, i]), Ce(() => {
      const T = k.current;
      if (T == null)
        return;
      const j = Math.max(1, s);
      T.dispatch({
        effects: w.current.Indentation.reconfigure([
          Io.tabSize.of(j),
          is.of(" ".repeat(j))
        ])
      });
    }, [t, s]), Ce(() => {
      const T = k.current;
      if (T == null)
        return;
      const j = w.current;
      T.dispatch({ effects: [
        j.LineNumbers.reconfigure(
          l ? ts() : []
        ),
        j.Wrapping.reconfigure(
          c ? Kn.lineWrapping : []
        )
      ] });
    }, [t, l, c]), Ce(() => {
      const T = k.current;
      T == null || p != null || d || T.dispatch(
        gs(T.state, qr(T.state.doc, u))
      );
    }, [t, JSON.stringify(u), p != null, d]);
    const O = p != null;
    return Ce(() => {
      const T = k.current;
      if (T == null)
        return;
      const { Linting: j } = w.current, I = async (D) => {
        try {
          const V = await L.current.Linter(
            D.state.doc.toString()
          );
          return qr(D.state.doc, V ?? []);
        } catch (V) {
          return console.error("CodeEditor: linting failed with", V), [];
        }
      }, M = (D) => {
        const V = D.state.doc.length, B = ls(D.state, V, 500) ?? ss(D.state), Y = [];
        return B.iterate({
          enter: (Q) => {
            if (Q.type.isError) {
              const pe = Math.min(Q.from, Math.max(0, V - 1)), P = Math.min(Math.max(Q.to, Q.from + 1), V);
              Y.push({
                from: pe,
                to: Math.max(pe, P),
                severity: "error",
                message: "syntax error"
              });
            }
          }
        }), Y;
      };
      switch (!0) {
        case O:
          T.dispatch({ effects: j.reconfigure(
            pa(I, { delay: h })
          ) });
          break;
        case d:
          T.dispatch({ effects: j.reconfigure(
            pa(M, { delay: h })
          ) });
          break;
        default:
          T.dispatch({ effects: j.reconfigure([]) });
      }
    }, [t, O, d, h]), b`<div
        class="jcl-component codeeditor ${i ? "disabled" : ""} ${n}"
        ...${e.RestProps} ref=${C}
      />`;
  });
}
const Mp = /* @__PURE__ */ Z("jcl-component.codeeditor", `
    .jcl-component.codeeditor {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:stretch !important;
      position:relative; overflow:hidden;
      border:solid 1px #888888; border-radius:2px;
      background:white; color:black;
      font-size:14px;
    }

    .jcl-component.codeeditor > .cm-editor {
      flex:1 1 auto; overflow:hidden;
      width:100%; height:100%;
    }
    .jcl-component.codeeditor > .cm-editor.cm-focused {
      outline:solid 2px #6366f1; outline-offset:-2px;
    }

    .jcl-component.codeeditor.disabled {
      opacity:0.6; pointer-events:none;
    }

    @media (prefers-contrast: more) {
      .jcl-component.codeeditor > .cm-editor.cm-focused { outline:solid 3px currentColor }
    }
  `), ha = "http://www.w3.org/2000/svg";
function Ee(e, t) {
  const n = document.createElementNS(ha, e);
  for (const o in t ?? {})
    n.setAttribute(o, String(t[o]));
  return n;
}
function ht(e) {
  const t = e.transform?.baseVal?.consolidate?.();
  return t == null ? new DOMMatrix() : DOMMatrix.fromMatrix(t.matrix);
}
function on(e, t) {
  const { a: n, b: o, c: a, d: r, e: i, f: s } = t;
  e.setAttribute("transform", `matrix(${n} ${o} ${a} ${r} ${i} ${s})`);
}
function Xr(e) {
  const t = Math.hypot(e.a, e.b) || 1, n = Math.hypot(e.c, e.d) || 1;
  return { ScaleX: t, ScaleY: n };
}
function jo(e) {
  const t = e.getBBox?.();
  return t == null ? void 0 : { x: t.x, y: t.y, Width: t.width, Height: t.height };
}
function _n(e) {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, a = -1 / 0;
  if (e.forEach((r) => {
    const i = r.getBBox(), s = ht(r);
    [
      [i.x, i.y],
      [i.x + i.width, i.y],
      [i.x, i.y + i.height],
      [i.x + i.width, i.y + i.height]
    ].forEach(([l, c]) => {
      const d = new DOMPoint(l, c).matrixTransform(s);
      t = Math.min(t, d.x), o = Math.max(o, d.x), n = Math.min(n, d.y), a = Math.max(a, d.y);
    });
  }), !(t > o))
    return { x: t, y: n, Width: o - t, Height: a - n };
}
function fa(e, t) {
  return e.x <= t.x + t.Width && t.x <= e.x + e.Width && e.y <= t.y + t.Height && t.y <= e.y + e.Height;
}
function ga(e) {
  return {
    xEdges: [e.x, e.x + e.Width],
    xCenter: e.x + e.Width / 2,
    yEdges: [e.y, e.y + e.Height],
    yCenter: e.y + e.Height / 2
  };
}
function ys(e, t, n) {
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = (l, c) => Math.abs(l - c) <= n, i = (l, c, d) => {
    const u = Math.round(c / n) * n;
    (d === "dashed" || l.get(u) == null) && l.set(u, d);
  }, s = (l, c, d) => {
    e.forEach((u) => {
      t.forEach((p) => {
        u[c].forEach((h) => {
          p[c].forEach((f) => {
            r(h, f) && i(l, f, "dashed");
          }), r(h, p[d]) && i(l, p[d], "dotted");
        }), p[c].forEach((h) => {
          r(u[d], h) && i(l, h, "dotted");
        });
      });
    });
  };
  return s(o, "xEdges", "xCenter"), s(a, "yEdges", "yCenter"), { vertical: o, horizontal: a };
}
let Tp = 1;
function Mt(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n };
}
function na(e) {
  if (!/^\s*M[0-9\s.,eE+-]+(?:C[0-9\s.,eE+-]+)+Z?\s*$/.test(e))
    return;
  const t = /Z\s*$/.test(e), n = e.replace(/[MCZ]/g, " ").trim().split(/[\s,]+/).map(parseFloat);
  if (n.length < 8 || (n.length - 2) % 6 !== 0 || n.some((r) => isNaN(r)))
    return;
  const o = [{ x: n[0], y: n[1] }], a = [];
  for (let r = 2; r < n.length; r += 6)
    a.push({
      c1: { x: n[r], y: n[r + 1] },
      c2: { x: n[r + 2], y: n[r + 3] }
    }), o.push({ x: n[r + 4], y: n[r + 5] });
  if (t) {
    const r = o[0], i = o.at(-1);
    if (Math.abs(i.x - r.x) > 1e-3 || Math.abs(i.y - r.y) > 1e-3)
      return;
    o.pop();
  }
  return { Anchors: o, Controls: a, closed: t };
}
function Yr(e, t = !1) {
  const n = e.map((r) => ({ x: r.x, y: r.y })), o = [], a = t ? n.length : n.length - 1;
  for (let r = 0; r < a; r++) {
    const i = n[r], s = n[(r + 1) % n.length];
    o.push({
      c1: Mt(i, s, 1 / 3),
      c2: Mt(i, s, 2 / 3)
    });
  }
  return { Anchors: n, Controls: o, closed: t };
}
function rn(e) {
  const { Anchors: t, Controls: n, closed: o } = e;
  let a = `M ${t[0].x} ${t[0].y}`;
  return n.forEach((r, i) => {
    const s = t[(i + 1) % t.length];
    a += ` C ${r.c1.x} ${r.c1.y} ${r.c2.x} ${r.c2.y} ${s.x} ${s.y}`;
  }), a + (o ? " Z" : "");
}
function Jr(e, t, n, o) {
  const a = Mt(e, t, 0.5), r = Mt(t, n, 0.5), i = Mt(n, o, 0.5), s = Mt(a, r, 0.5), l = Mt(r, i, 0.5);
  return {
    Midpoint: Mt(s, l, 0.5),
    leftControls: { c1: a, c2: s },
    rightControls: { c1: l, c2: i }
  };
}
const Rp = /* @__PURE__ */ new Set([
  "script",
  "foreignObject",
  "iframe",
  "embed",
  "object",
  "audio",
  "video"
]);
function Zr(e) {
  return Array.from(e.querySelectorAll("*")).forEach((t) => {
    if (Rp.has(t.nodeName)) {
      t.remove();
      return;
    }
    Array.from(t.attributes).forEach((n) => {
      const o = n.name.toLowerCase();
      switch (!0) {
        case o.startsWith("on"):
          t.removeAttribute(n.name);
          break;
        case (o === "href" || o === "xlink:href"):
          n.value.trim().toLowerCase().startsWith("javascript:") && t.removeAttribute(n.name);
      }
    });
  }), e;
}
class Ap {
  /**** editor state ****/
  View;
  Container;
  Callbacks;
  GridLayer;
  ContentLayer;
  OverlayLayer;
  Size = { Width: 800, Height: 600 };
  ViewBox = { x: 0, y: 0, Width: 800, Height: 600 };
  Tool = "select";
  readonly = !1;
  GridSize = 10;
  snapToGrid = !1;
  showsGrid = !1;
  HitTolerance = 6;
  // grab radius around thin strokes (screen px)
  CurrentStyle = {
    StrokeColor: "#000000",
    StrokeWidth: 2,
    StrokeDashes: "",
    FillColor: "none",
    Opacity: 1,
    StartArrow: !1,
    EndArrow: !1,
    FontFamily: "sans-serif",
    FontSize: 14,
    FontWeight: "normal",
    FontStyle: "normal"
  };
  Selection = [];
  PointSelection = void 0;
  PendingPolyline = void 0;
  PendingPoints = [];
  DragState = void 0;
  DownTarget = void 0;
  // last "pointerdown" target, see "dblclick"
  GuideTimer = void 0;
  // removes transient guides, see "guides"
  Snapshots = [""];
  SnapshotIndex = 0;
  ClipboardContent = "";
  IdCounter = 0;
  GridPatternId = "jcl-de-pattern-" + Tp++;
  /**** constructor ****/
  constructor(t, n) {
    xs(), this.Container = t, this.Callbacks = n ?? {}, this.View = Ee("svg", {
      class: "jcl-de-view",
      tabindex: 0,
      viewBox: "0 0 800 600",
      preserveAspectRatio: "xMidYMid meet"
    }), this.GridLayer = Ee("g", { class: "jcl-de-grid" }), this.ContentLayer = Ee("g", { class: "jcl-de-content" }), this.OverlayLayer = Ee("g", { class: "jcl-de-overlay" }), this.View.append(this.GridLayer, this.ContentLayer, this.OverlayLayer), t.appendChild(this.View), this.installArrowMarker(), this.View.addEventListener("pointerdown", (o) => this.onPointerDown(o)), this.View.addEventListener("pointermove", (o) => this.onPointerMove(o)), this.View.addEventListener("pointerup", (o) => this.onPointerUp(o)), this.View.addEventListener("dblclick", (o) => this.onDoubleClick(o)), this.View.addEventListener("keydown", (o) => this.onKeyDown(o)), this.View.addEventListener(
      "wheel",
      (o) => this.onWheel(o),
      { passive: !1 }
    );
  }
  /**** destroy ****/
  destroy() {
    clearTimeout(this.GuideTimer), this.GuideTimer = void 0, this.DragState = void 0, this.View.remove();
  }
  /**** UnitsPerPixel - content units per screen pixel ****/
  UnitsPerPixel() {
    const t = this.Container.clientWidth || 1;
    return this.ViewBox.Width / t;
  }
  /**** IdFor - ensures that the given element carries a unique id ****/
  IdFor(t) {
    if (t.id === "") {
      do
        this.IdCounter += 1;
      while (this.View.querySelector("#jcl-de-" + this.IdCounter) != null);
      t.id = "jcl-de-" + this.IdCounter;
    }
    return t.id;
  }
  /**** getValue - serialises the drawing into a standalone SVG document ****/
  getValue() {
    const { Width: t, Height: n } = this.Size, o = this.ContentLayer.innerHTML, a = this.View.querySelector("#jcl-de-arrow"), r = (
      // keeps exported documents self-contained
      o.includes("url(#jcl-de-arrow)") && a != null ? "<defs>" + a.outerHTML + "</defs>" : ""
    );
    return `<svg xmlns="${ha}" width="${t}" height="${n}" viewBox="0 0 ${t} ${n}">` + r + o + "</svg>";
  }
  /**** setValue - replaces the drawing without firing "onValueChange" ****/
  setValue(t) {
    Ye("drawing value", t);
    let n;
    if (t.trim() !== "") {
      n = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, n.nodeName !== "svg" && ce(
        "InvalidArgument: the given value is no valid SVG document"
      ), Zr(n);
      const a = parseFloat(n.getAttribute("width") ?? ""), r = parseFloat(n.getAttribute("height") ?? "");
      !isNaN(a) && !isNaN(r) && (this.Size = { Width: a, Height: r });
    }
    this.clearSelection(), this.PointSelection = void 0, this.cancelPolyline(), this.DragState = void 0, this.ContentLayer.innerHTML = "", n != null && (Array.from(n.children).forEach((o) => {
      this.ContentLayer.appendChild(document.importNode(o, !0));
    }), Array.from(
      // editor-owned markers come from the live...
      this.ContentLayer.querySelectorAll('marker[id^="jcl-de-"]')
    ).forEach((o) => {
      const a = o.parentNode;
      o.remove(), a?.nodeName === "defs" && a.children.length === 0 && a.remove();
    }), Array.from(this.ContentLayer.children).forEach(
      (o) => this.IdFor(o)
    )), this.ViewBox = { x: 0, y: 0, Width: this.Size.Width, Height: this.Size.Height }, this.applyViewBox(), this.Snapshots = [this.ContentLayer.innerHTML], this.SnapshotIndex = 0, this.announceUndoState(), this.refreshOverlay();
  }
  /**** announceChange - captures a snapshot and reports the new value ****/
  announceChange() {
    this.captureSnapshot(), N(
      'DrawingEditor callback "onValueChange"',
      this.Callbacks.onValueChange,
      this.getValue()
    );
  }
  /**** snapshot management ****/
  captureSnapshot() {
    this.Snapshots.length = this.SnapshotIndex + 1, this.Snapshots.push(this.ContentLayer.innerHTML), this.Snapshots.length > 100 && this.Snapshots.shift(), this.SnapshotIndex = this.Snapshots.length - 1, this.announceUndoState();
  }
  restoreSnapshotAt(t) {
    const n = this.SelectedIds();
    this.SnapshotIndex = t, this.ContentLayer.innerHTML = this.Snapshots[t], this.PointSelection = void 0, this.selectIds(n), this.announceUndoState(), N(
      'DrawingEditor callback "onValueChange"',
      this.Callbacks.onValueChange,
      this.getValue()
    );
  }
  /**** undo/redo ****/
  canUndo() {
    return this.SnapshotIndex > 0;
  }
  canRedo() {
    return this.SnapshotIndex < this.Snapshots.length - 1;
  }
  undo() {
    this.canUndo() && this.restoreSnapshotAt(this.SnapshotIndex - 1);
  }
  redo() {
    this.canRedo() && this.restoreSnapshotAt(this.SnapshotIndex + 1);
  }
  announceUndoState() {
    N(
      'DrawingEditor callback "onUndoStateChange"',
      this.Callbacks.onUndoStateChange,
      this.canUndo(),
      this.canRedo()
    );
  }
  /**** ElementAt - the top-level element containing the given event target ****/
  ElementAt(t) {
    let n = t;
    for (; n != null && n !== this.View; ) {
      if (n.parentNode === this.ContentLayer)
        return n;
      n = n.parentNode;
    }
  }
  /**** ElementNear - the topmost element whose stroke is close to a point ****/
  ElementNear(t) {
    const n = this.HitTolerance * this.UnitsPerPixel(), o = "rect,circle,ellipse,line,polyline,polygon,path";
    return Array.from(this.ContentLayer.children).reverse().find((a) => (a.matches?.(o) ? [a] : Array.from(a.querySelectorAll?.(o) ?? [])).some(
      (i) => this.hitsStrokeOf(i, t, n)
    ));
  }
  /**** hitsStrokeOf - tests a point against a temporarily widened stroke ****/
  hitsStrokeOf(t, n, o) {
    if (typeof t.isPointInStroke != "function")
      return !1;
    const a = this.View.getScreenCTM?.(), r = t.getScreenCTM?.();
    if (a == null || r == null)
      return !1;
    const i = a.inverse().multiply(r), s = new DOMPoint(n.x, n.y).matrixTransform(i.inverse()), l = this.View.createSVGPoint();
    l.x = s.x, l.y = s.y;
    const { ScaleX: c, ScaleY: d } = Xr(i), p = (parseFloat(getComputedStyle(t).strokeWidth) || 0) + 2 * o / Math.max(c, d), h = t.getAttribute("stroke-width");
    t.setAttribute("stroke-width", String(p));
    try {
      return t.isPointInStroke(l);
    } finally {
      h == null ? t.removeAttribute("stroke-width") : t.setAttribute("stroke-width", h);
    }
  }
  /**** selection primitives ****/
  isSelected(t) {
    return this.Selection.includes(t);
  }
  select(t, n = !1) {
    const o = n ? this.Selection.slice() : [];
    t.forEach((a) => {
      a != null && !o.includes(a) && o.push(a);
    }), this.Selection = o, this.reportSelection();
  }
  toggle(t) {
    this.Selection = this.isSelected(t) ? this.Selection.filter((n) => n !== t) : [...this.Selection, t], this.reportSelection();
  }
  selectAll() {
    this.Selection = Array.from(this.ContentLayer.children), this.reportSelection();
  }
  clearSelection() {
    this.Selection.length > 0 && (this.Selection = [], this.reportSelection());
  }
  selectIds(t) {
    this.Selection = t.map((n) => this.ContentLayer.querySelector("#" + CSS.escape(n))).filter((n) => n != null && n.parentNode === this.ContentLayer), this.reportSelection();
  }
  SelectedIds() {
    return this.Selection.map((t) => t.id);
  }
  /**** deleteSelection ****/
  deleteSelection() {
    this.readonly || this.Selection.length === 0 || (this.Selection.forEach((t) => t.remove()), this.Selection = [], this.reportSelection(), this.announceChange());
  }
  /**** reportSelection ****/
  reportSelection() {
    this.refreshOverlay(), N(
      'DrawingEditor callback "onSelectionChange"',
      this.Callbacks.onSelectionChange,
      this.SelectedIds()
    );
  }
  /**** CursorForHandle - resize cursor matching the *apparent* direction ****/
  /**** in which a handle acts (i.e., considering the element's rotation) ****/
  CursorForHandle(t, n) {
    if (t === "rotate")
      return "move";
    const o = {
      nw: [-1, -1],
      n: [0, -1],
      ne: [1, -1],
      e: [1, 0],
      se: [1, 1],
      s: [0, 1],
      sw: [-1, 1],
      w: [-1, 0]
    }, [a, r] = o[t], i = n.a * a + n.c * r, s = n.b * a + n.d * r;
    let l = Math.atan2(s, i) * 180 / Math.PI;
    return l < 0 && (l += 180), ["ew-resize", "nwse-resize", "ns-resize", "nesw-resize"][Math.round(l / 45) % 4];
  }
  /**** refreshOverlay - redraws selection frames, handles and point handles ****/
  refreshOverlay() {
    if (this.OverlayLayer.removeAttribute("transform"), this.OverlayLayer.innerHTML = "", this.Tool === "editPoints") {
      this.drawPointHandles();
      return;
    }
    const t = this.UnitsPerPixel(), n = 8 * t;
    this.Selection.forEach((o, a) => {
      const r = jo(o);
      if (r == null)
        return;
      const i = ht(o), s = Ee("g", {});
      on(s, i), this.OverlayLayer.appendChild(s);
      const { ScaleX: l, ScaleY: c } = Xr(i), d = n / l, u = n / c, p = t / Math.max(l, c);
      s.appendChild(Ee("rect", {
        class: "jcl-de-frame",
        "stroke-width": p,
        x: r.x,
        y: r.y,
        width: r.Width,
        height: r.Height
      }));
      const h = r.x + r.Width / 2, f = this.HandlePositionsFor(r);
      for (const x in f) {
        const [m, C] = f[x];
        s.appendChild(Ee("rect", {
          class: "jcl-de-handle",
          "data-handle": x,
          "data-index": a,
          "stroke-width": p,
          style: "cursor:" + this.CursorForHandle(x, i),
          x: m - d / 2,
          y: C - u / 2,
          width: d,
          height: u
        }));
      }
      const g = r.y - 24 * t / c;
      s.appendChild(Ee("line", {
        class: "jcl-de-frame",
        "stroke-width": p,
        x1: h,
        y1: r.y,
        x2: h,
        y2: g
      })), s.appendChild(Ee("circle", {
        class: "jcl-de-handle",
        "data-handle": "rotate",
        "data-index": a,
        "stroke-width": p,
        cx: h,
        cy: g,
        r: d / 2
      }));
    });
  }
  /**** refreshGrid ****/
  refreshGrid() {
    if (this.GridLayer.innerHTML = "", !this.showsGrid)
      return;
    const t = this.GridSize, n = Ee("pattern", {
      id: this.GridPatternId,
      width: t,
      height: t,
      patternUnits: "userSpaceOnUse"
    });
    n.appendChild(Ee("path", {
      d: `M ${t} 0 L 0 0 0 ${t}`,
      fill: "none",
      stroke: "#00000022",
      "stroke-width": this.UnitsPerPixel()
    }));
    const o = Ee("defs");
    o.appendChild(n);
    const { x: a, y: r, Width: i, Height: s } = this.ViewBox;
    this.GridLayer.append(o, Ee("rect", {
      x: a,
      y: r,
      width: i,
      height: s,
      fill: `url(#${this.GridPatternId})`
    }));
  }
  /**** drawMoveGuides - alignment guides for moved (vs. unmoved) elements ****/
  /**** - the actual collection logic is shared (s. "Geometry Utilities")  ****/
  drawMoveGuides() {
    const t = this.UnitsPerPixel(), n = (h) => {
      const f = _n([h]);
      return f == null ? void 0 : ga(f);
    }, o = this.Selection.map(n).filter((h) => h != null), a = Array.from(this.ContentLayer.children).filter((h) => !this.Selection.includes(h)).map(n).filter((h) => h != null);
    if (o.length === 0 || a.length === 0)
      return;
    const { vertical: r, horizontal: i } = ys(o, a, t), s = t, l = {
      dashed: `${6 * s} ${4 * s}`,
      dotted: `${s} ${3 * s}`
    }, { x: c, y: d, Width: u, Height: p } = this.ViewBox;
    r.forEach((h, f) => {
      this.OverlayLayer.appendChild(Ee("line", {
        class: "jcl-de-guide",
        "stroke-width": s,
        "stroke-dasharray": l[h],
        x1: f,
        y1: d,
        x2: f,
        y2: d + p
      }));
    }), i.forEach((h, f) => {
      this.OverlayLayer.appendChild(Ee("line", {
        class: "jcl-de-guide",
        "stroke-width": s,
        "stroke-dasharray": l[h],
        x1: c,
        y1: f,
        x2: c + u,
        y2: f
      }));
    });
  }
  /**** showTransientGuides - draws guides and removes them again after a ****/
  /**** while (meant for keyboard-triggered movements)                    ****/
  showTransientGuides(t = 3e3) {
    this.drawMoveGuides(), clearTimeout(this.GuideTimer), this.GuideTimer = setTimeout(() => {
      this.GuideTimer = void 0, this.refreshOverlay();
    }, t);
  }
  /**** setTool ****/
  setTool(t) {
    if ([
      "select",
      "editPoints",
      "pan",
      "rect",
      "ellipse",
      "line",
      "polyline",
      "bezier",
      "freehand",
      "text"
    ].includes(t) || ce(
      'InvalidArgument: invalid drawing tool "' + t + '" given'
    ), t === this.Tool)
      return;
    this.cancelPolyline(), this.DragState = void 0, t === "editPoints" ? this.PointSelection = this.Selection.find(
      (a) => this.isPointEditable(a)
    ) : this.PointSelection = void 0, this.Tool = t;
    const o = {
      select: "default",
      editPoints: "default",
      pan: "grab",
      text: "text",
      rect: "crosshair",
      ellipse: "crosshair",
      line: "crosshair",
      polyline: "crosshair",
      bezier: "crosshair",
      freehand: "crosshair"
    };
    this.View.style.cursor = o[t], this.refreshOverlay(), N(
      'DrawingEditor callback "onToolChange"',
      this.Callbacks.onToolChange,
      t
    );
  }
  /**** updateCursor - signals movability underneath the mouse pointer ****/
  updateCursor(t) {
    if (this.Tool !== "select" || t.target.dataset?.handle != null)
      return;
    const n = this.ElementAt(t.target) ?? this.ElementNear(this.PointFor(t));
    this.View.style.cursor = n != null && !this.readonly ? "move" : "default";
  }
  /**** coordinate conversion and snapping ****/
  PointFor(t) {
    const n = new DOMPoint(t.clientX, t.clientY).matrixTransform(this.View.getScreenCTM().inverse());
    return { x: n.x, y: n.y };
  }
  snapped(t) {
    if (!this.snapToGrid)
      return t;
    const n = this.GridSize;
    return {
      x: Math.round(t.x / n) * n,
      y: Math.round(t.y / n) * n
    };
  }
  /**** onPointerDown ****/
  onPointerDown(t) {
    if (this.View.focus(), t.button !== 0)
      return;
    t.preventDefault(), this.DownTarget = t.target, this.View.setPointerCapture(t.pointerId);
    const n = this.PointFor(t), o = !this.readonly;
    switch (this.Tool) {
      case "pan":
        this.beginPan(t);
        break;
      case "select":
        this.beginSelection(n, t);
        break;
      case "editPoints":
        o && this.beginPointEditing(n, t);
        break;
      case "polyline":
      case "bezier":
        o && this.extendPolyline(n);
        break;
      case "text":
        o && this.requestTextAt(n);
        break;
      default:
        o && this.beginCreation(n, t);
    }
  }
  /**** beginSelection - handles "pointerdown" for the "select" tool ****/
  beginSelection(t, n) {
    const o = n.target.dataset?.handle;
    if (o != null && !this.readonly) {
      this.View.style.cursor = // keeps the handle's own cursor...
      n.target.style?.cursor || "move";
      const r = parseInt(n.target.dataset?.index ?? "", 10);
      o === "rotate" ? this.beginRotation(t, r) : this.beginResizing(t, o, r);
      return;
    }
    const a = this.ElementAt(n.target) ?? this.ElementNear(t);
    switch (!0) {
      case a == null:
        n.shiftKey || this.clearSelection(), this.beginRubberBand(t, n.shiftKey);
        break;
      case n.shiftKey:
        this.toggle(a);
        break;
      default:
        this.isSelected(a) || this.select([a]), this.readonly || this.beginMove(t);
    }
  }
  /**** rubber band selection ****/
  beginRubberBand(t, n) {
    const o = Ee("rect", {
      class: "jcl-de-rubberband",
      "stroke-width": this.UnitsPerPixel(),
      x: t.x,
      y: t.y,
      width: 0,
      height: 0
    });
    this.OverlayLayer.appendChild(o), this.DragState = { Type: "rubberband", StartPoint: t, Band: o, extending: n };
  }
  continueRubberBand(t) {
    const { StartPoint: n, Band: o } = this.DragState, a = {
      x: Math.min(n.x, t.x),
      y: Math.min(n.y, t.y),
      Width: Math.abs(t.x - n.x),
      Height: Math.abs(t.y - n.y)
    };
    o.setAttribute("x", a.x), o.setAttribute("y", a.y), o.setAttribute("width", a.Width), o.setAttribute("height", a.Height), this.DragState.Box = a;
  }
  endRubberBand(t) {
    t.Band.remove();
    const n = t.Box;
    if (n == null || n.Width < 1 && n.Height < 1)
      return;
    const o = Array.from(this.ContentLayer.children).filter((a) => {
      const r = _n([a]);
      return r != null && fa(n, r);
    });
    this.select(o, t.extending);
  }
  /**** onPointerMove ****/
  onPointerMove(t) {
    if (this.DragState == null) {
      this.PendingPolyline != null && this.previewPolylineAt(this.PointFor(t)), this.updateCursor(t);
      return;
    }
    const n = this.PointFor(t);
    switch (this.DragState.Type) {
      case "pan":
        this.continuePan(t);
        break;
      case "rubberband":
        this.continueRubberBand(n);
        break;
      case "move":
        this.continueMove(n);
        break;
      case "resize":
        this.continueResizing(n, t);
        break;
      case "rotate":
        this.continueRotation(n, t);
        break;
      case "create":
        this.continueCreation(n, t);
        break;
      case "editPoint":
        this.continuePointDrag(n);
        break;
    }
  }
  /**** onPointerUp ****/
  onPointerUp(t) {
    const n = this.DragState;
    if (n != null)
      switch (this.DragState = void 0, n.Type) {
        case "rubberband":
          this.endRubberBand(n);
          break;
        case "create":
          this.endCreation(n);
          break;
        case "move":
        case "resize":
        case "rotate":
        case "editPoint":
          this.View.style.cursor = "default", this.refreshOverlay(), n.modified && this.announceChange();
          break;
        case "pan":
          this.View.style.cursor = "grab";
      }
  }
  /**** onDoubleClick ****/
  onDoubleClick(t) {
    if (this.PendingPolyline != null) {
      this.finishPolyline();
      return;
    }
    if (this.Tool !== "select" || this.readonly)
      return;
    const n = this.ElementAt(this.DownTarget ?? t.target) ?? this.ElementNear(this.PointFor(t));
    switch (!0) {
      case n == null:
        break;
      case n.nodeName === "text":
        this.requestTextFor(n);
        break;
      case this.isPointEditable(n):
        this.setTool("editPoints"), this.PointSelection = n, this.refreshOverlay();
    }
  }
  /**** beginCreation - for "rect", "ellipse", "line" and "freehand" shapes ****/
  beginCreation(t, n) {
    const o = this.snapped(t);
    let a;
    switch (this.Tool) {
      case "rect":
        a = Ee("rect", {
          x: o.x,
          y: o.y,
          width: 0,
          height: 0
        });
        break;
      case "ellipse":
        a = Ee("ellipse", {
          cx: o.x,
          cy: o.y,
          rx: 0,
          ry: 0
        });
        break;
      case "line":
        a = Ee("line", {
          x1: o.x,
          y1: o.y,
          x2: o.x,
          y2: o.y
        });
        break;
      case "freehand":
        a = Ee("path", { d: `M ${t.x} ${t.y}` });
        break;
      default:
        return;
    }
    this.applyStyleTo(a, this.CurrentStyle), (this.Tool === "line" || this.Tool === "freehand") && a.setAttribute("fill", "none"), this.ContentLayer.appendChild(a), this.DragState = {
      Type: "create",
      Tool: this.Tool,
      Element: a,
      StartPoint: o,
      PointList: [t]
    };
  }
  /**** continueCreation ****/
  continueCreation(t, n) {
    const { Tool: o, Element: a, StartPoint: r, PointList: i } = this.DragState, s = this.snapped(t);
    switch (o) {
      case "rect": {
        let l = Math.abs(s.x - r.x), c = Math.abs(s.y - r.y);
        n.shiftKey && (l = c = Math.max(l, c));
        const d = s.x < r.x ? r.x - l : r.x, u = s.y < r.y ? r.y - c : r.y;
        a.setAttribute("x", d), a.setAttribute("width", l), a.setAttribute("y", u), a.setAttribute("height", c);
        break;
      }
      case "ellipse": {
        let l = Math.abs(s.x - r.x) / 2, c = Math.abs(s.y - r.y) / 2;
        n.shiftKey && (l = c = Math.max(l, c));
        const d = r.x + (s.x < r.x ? -l : l), u = r.y + (s.y < r.y ? -c : c);
        a.setAttribute("cx", d), a.setAttribute("rx", l), a.setAttribute("cy", u), a.setAttribute("ry", c);
        break;
      }
      case "line": {
        if (n.shiftKey) {
          const l = s.x - r.x, c = s.y - r.y, d = Math.round(Math.atan2(c, l) / (Math.PI / 4)) * (Math.PI / 4), u = Math.hypot(l, c);
          s.x = r.x + u * Math.cos(d), s.y = r.y + u * Math.sin(d);
        }
        a.setAttribute("x2", s.x), a.setAttribute("y2", s.y);
        break;
      }
      case "freehand": {
        const l = i.at(-1);
        Math.hypot(t.x - l.x, t.y - l.y) >= 2 * this.UnitsPerPixel() && (i.push(t), a.setAttribute(
          "d",
          "M " + i.map((c) => `${c.x} ${c.y}`).join(" L ")
        ));
      }
    }
  }
  /**** endCreation ****/
  endCreation(t) {
    const { Element: n } = t, o = _n([n]);
    if (o == null || o.Width < 1 && o.Height < 1) {
      n.remove();
      return;
    }
    this.IdFor(n), this.select([n]), this.announceChange();
  }
  /**** polyline/bezier construction (click-based rather than drag-based) ****/
  extendPolyline(t) {
    const n = this.snapped(t);
    this.PendingPolyline == null ? (this.PendingPoints = [n, n], this.PendingPolyline = Ee(
      this.Tool === "bezier" ? "path" : "polyline"
    ), this.applyStyleTo(this.PendingPolyline, this.CurrentStyle), this.PendingPolyline.setAttribute("fill", "none"), this.writePolylinePoints(), this.ContentLayer.appendChild(this.PendingPolyline)) : (this.PendingPoints.push(n), this.writePolylinePoints());
  }
  previewPolylineAt(t) {
    this.PendingPoints[this.PendingPoints.length - 1] = this.snapped(t), this.writePolylinePoints();
  }
  writePolylinePoints() {
    this.PendingPolyline.nodeName === "path" ? this.PendingPolyline.setAttribute(
      "d",
      rn(Yr(this.PendingPoints))
    ) : this.PendingPolyline.setAttribute(
      "points",
      this.PendingPoints.map((t) => `${t.x},${t.y}`).join(" ")
    );
  }
  finishPolyline() {
    const t = this.PendingPolyline;
    if (t == null)
      return;
    this.PendingPoints.pop();
    const n = this.PendingPoints, o = this.HitTolerance * this.UnitsPerPixel();
    let a = !1;
    for (
      ;
      // ...polyline (or bezier) into a loop
      n.length > 2 && Math.hypot(
        n.at(-1).x - n[0].x,
        n.at(-1).y - n[0].y
      ) <= o;
    )
      n.pop(), a = !0;
    if (n.length < 3 && (a = !1), n.length < 2)
      t.remove();
    else {
      let r = t;
      switch (!0) {
        case t.nodeName === "path":
          t.setAttribute(
            "d",
            rn(Yr(n, a))
          ), a && (t.removeAttribute("marker-start"), t.removeAttribute("marker-end"));
          break;
        case a: {
          r = Ee("polygon"), Array.from(t.attributes).forEach((i) => {
            i.name.startsWith("marker-") || r.setAttribute(i.name, i.value);
          }), r.setAttribute(
            "points",
            n.map((i) => `${i.x},${i.y}`).join(" ")
          ), t.replaceWith(r);
          break;
        }
        default:
          t.setAttribute(
            "points",
            n.map((i) => `${i.x},${i.y}`).join(" ")
          );
      }
      this.IdFor(r), this.select([r]), this.announceChange();
    }
    this.PendingPolyline = void 0, this.PendingPoints = [];
  }
  cancelPolyline() {
    this.PendingPolyline != null && (this.PendingPolyline.remove(), this.PendingPolyline = void 0, this.PendingPoints = []);
  }
  /**** text creation and editing (texts come from the "onTextRequest" host) ****/
  requestTextAt(t) {
    const n = this.Callbacks.onTextRequest;
    if (n == null)
      return;
    const o = this.snapped(t);
    Promise.resolve(n("")).then((a) => {
      a == null || String(a).trim() === "" || this.insertText(String(a), o.x, o.y);
    }).catch((a) => {
      console.warn("DrawingEditor: text request failed", a);
    });
  }
  requestTextFor(t) {
    const n = this.Callbacks.onTextRequest;
    n != null && Promise.resolve(n(t.textContent)).then((o) => {
      o != null && (String(o).trim() === "" ? (t.remove(), this.clearSelection()) : t.textContent = String(o), this.refreshOverlay(), this.announceChange());
    }).catch((o) => {
      console.warn("DrawingEditor: text request failed", o);
    });
  }
  insertText(t, n, o) {
    Ye("text content", t);
    const a = Ee("text", { x: n, y: o });
    a.textContent = t, this.applyStyleTo(a, this.CurrentStyle), a.setAttribute("fill", this.CurrentStyle.StrokeColor ?? "#000000"), a.setAttribute("stroke", "none"), this.ContentLayer.appendChild(a), this.IdFor(a), this.select([a]), this.announceChange();
  }
  /**** moving - always moves the whole selection ****/
  beginMove(t) {
    this.DragState = {
      Type: "move",
      StartPoint: t,
      modified: !1,
      BaseMatrices: new Map(this.Selection.map(
        (n) => [n, ht(n)]
      ))
    };
  }
  continueMove(t) {
    const { StartPoint: n, BaseMatrices: o } = this.DragState;
    let a = t.x - n.x, r = t.y - n.y;
    if (this.snapToGrid) {
      const i = this.GridSize;
      a = Math.round(a / i) * i, r = Math.round(r / i) * i;
    }
    this.Selection.forEach((i) => {
      on(
        i,
        new DOMMatrix().translate(a, r).multiply(o.get(i))
      );
    }), this.DragState.modified ||= a !== 0 || r !== 0, this.refreshOverlay(), this.drawMoveGuides();
  }
  moveSelectionBy(t, n) {
    this.readonly || this.Selection.length === 0 || (this.Selection.forEach((o) => {
      on(
        o,
        new DOMMatrix().translate(t, n).multiply(ht(o))
      );
    }), this.refreshOverlay(), this.showTransientGuides(), this.announceChange());
  }
  /**** HandlePositionsFor - handle positions for a given bounding box ****/
  HandlePositionsFor(t) {
    const n = t.x + t.Width / 2, o = t.y + t.Height / 2;
    return {
      nw: [t.x, t.y],
      n: [n, t.y],
      ne: [t.x + t.Width, t.y],
      e: [t.x + t.Width, o],
      se: [t.x + t.Width, t.y + t.Height],
      s: [n, t.y + t.Height],
      sw: [t.x, t.y + t.Height],
      w: [t.x, o]
    };
  }
  /**** resizing - the dragged handle belongs to a single element, but the ****/
  /**** scaling is applied to every selected element around its own anchor ****/
  /**** - and in its own local coordinate system, so that even rotated     ****/
  /**** elements resize along their own axes (without being skewed)        ****/
  beginResizing(t, n, o) {
    const a = this.Selection[o] ?? this.Selection[0];
    if (a == null)
      return;
    const r = jo(a);
    if (r == null)
      return;
    const i = {
      nw: "se",
      n: "s",
      ne: "sw",
      e: "w",
      se: "nw",
      s: "n",
      sw: "ne",
      w: "e"
    }, s = this.HandlePositionsFor(r), [l, c] = s[n], [d, u] = s[i[n]], p = new Map(this.Selection.map((h) => {
      const f = jo(h);
      return [h, f == null ? [d, u] : this.HandlePositionsFor(f)[i[n]]];
    }));
    this.DragState = {
      Type: "resize",
      Handle: n,
      HandleX: l,
      HandleY: c,
      AnchorX: d,
      AnchorY: u,
      InverseReferenceMatrix: ht(a).inverse(),
      ElementAnchors: p,
      modified: !1,
      BaseMatrices: new Map(this.Selection.map(
        (h) => [h, ht(h)]
      ))
    };
  }
  continueResizing(t, n) {
    const {
      HandleX: o,
      HandleY: a,
      AnchorX: r,
      AnchorY: i,
      InverseReferenceMatrix: s,
      ElementAnchors: l,
      BaseMatrices: c
    } = this.DragState, d = this.snapped(t), u = new DOMPoint(d.x, d.y).matrixTransform(s);
    let p = o === r ? 1 : (u.x - r) / (o - r), h = a === i ? 1 : (u.y - i) / (a - i);
    if (n.shiftKey) {
      const f = o === r ? Math.abs(h) : a === i ? Math.abs(p) : Math.max(Math.abs(p), Math.abs(h));
      p = p < 0 ? -f : f, h = h < 0 ? -f : f;
    }
    Math.abs(p) < 0.01 && (p = p < 0 ? -0.01 : 0.01), Math.abs(h) < 0.01 && (h = h < 0 ? -0.01 : 0.01), this.Selection.forEach((f) => {
      const [g, x] = l.get(f), m = new DOMMatrix().translate(g, x).scale(p, h).translate(-g, -x);
      on(f, c.get(f).multiply(m));
    }), this.DragState.modified = !0, this.refreshOverlay();
  }
  /**** rotating - the dragged handle belongs to a single element, but the ****/
  /**** rotation is applied to every selected element around its own centre ****/
  beginRotation(t, n) {
    const o = this.Selection[n] ?? this.Selection[0];
    if (o == null)
      return;
    const a = (c) => {
      const d = jo(c);
      if (d == null)
        return;
      const u = new DOMPoint(d.x + d.Width / 2, d.y + d.Height / 2).matrixTransform(ht(c));
      return [u.x, u.y];
    }, r = a(o);
    if (r == null)
      return;
    const [i, s] = r, l = new Map(this.Selection.map((c) => [
      c,
      a(c) ?? [i, s]
    ]));
    this.DragState = {
      Type: "rotate",
      CenterX: i,
      CenterY: s,
      ElementCenters: l,
      modified: !1,
      StartAngle: Math.atan2(t.y - s, t.x - i),
      BaseMatrices: new Map(this.Selection.map(
        (c) => [c, ht(c)]
      ))
    };
  }
  continueRotation(t, n) {
    const {
      CenterX: o,
      CenterY: a,
      StartAngle: r,
      ElementCenters: i,
      BaseMatrices: s
    } = this.DragState;
    let c = (Math.atan2(t.y - a, t.x - o) - r) * 180 / Math.PI;
    (n.shiftKey || this.snapToGrid) && (c = Math.round(c / 15) * 15), this.Selection.forEach((d) => {
      const [u, p] = i.get(d), h = new DOMMatrix().translate(u, p).rotate(c).translate(-u, -p);
      on(d, h.multiply(s.get(d)));
    }), this.DragState.modified = !0, this.refreshOverlay();
  }
  // ...and therefore rotate along automatically
  /**** isPointEditable - lines, poly*s, simple "M...L...Z?" and bezier paths ****/
  isPointEditable(t) {
    switch (t?.nodeName) {
      case "line":
      case "polyline":
      case "polygon":
        return !0;
      case "path": {
        const n = t.getAttribute("d") ?? "";
        return /^\s*M[0-9\s.,eE+-]+(?:L[0-9\s.,eE+-]+)*Z?\s*$/.test(n) || na(n) != null;
      }
      default:
        return !1;
    }
  }
  /**** BezierModelOf - the bezier model of a path element (or undefined) ****/
  BezierModelOf(t) {
    return t?.nodeName === "path" ? na(t.getAttribute("d") ?? "") : void 0;
  }
  /**** PointListOf / setPointListOf - in element-local coordinates ****/
  PointListOf(t) {
    const n = this.BezierModelOf(t);
    if (n != null)
      return n.Anchors;
    if (t.nodeName === "line")
      return [
        {
          x: parseFloat(t.getAttribute("x1") ?? "0"),
          y: parseFloat(t.getAttribute("y1") ?? "0")
        },
        {
          x: parseFloat(t.getAttribute("x2") ?? "0"),
          y: parseFloat(t.getAttribute("y2") ?? "0")
        }
      ];
    const a = (t.nodeName === "path" ? (t.getAttribute("d") ?? "").replace(/[MLZ]/g, " ") : t.getAttribute("points") ?? "").trim().split(/[\s,]+/).map(parseFloat), r = [];
    for (let i = 0; i + 1 < a.length; i += 2)
      r.push({ x: a[i], y: a[i + 1] });
    return r;
  }
  setPointListOf(t, n) {
    switch (t.nodeName) {
      case "line":
        t.setAttribute("x1", n[0].x), t.setAttribute("y1", n[0].y), t.setAttribute("x2", n[1].x), t.setAttribute("y2", n[1].y);
        break;
      case "polyline":
      case "polygon":
        t.setAttribute(
          "points",
          n.map((o) => `${o.x},${o.y}`).join(" ")
        );
        break;
      case "path": {
        const o = /Z\s*$/.test(t.getAttribute("d") ?? "");
        t.setAttribute(
          "d",
          "M " + n.map((a) => `${a.x} ${a.y}`).join(" L ") + (o ? " Z" : "")
        );
      }
    }
  }
  /**** drawPointHandles - shown instead of the usual selection handles ****/
  drawPointHandles() {
    const t = this.PointSelection;
    if (t == null || t.parentNode !== this.ContentLayer) {
      this.PointSelection = void 0;
      return;
    }
    const n = ht(t), o = this.UnitsPerPixel(), a = this.BezierModelOf(t), r = this.PointListOf(t), i = r.map(
      (d) => new DOMPoint(d.x, d.y).matrixTransform(n)
    ), s = t.nodeName === "polygon" || (a != null ? a.closed : /Z\s*$/.test(t.getAttribute("d") ?? "")), l = _n([t]);
    l != null && this.OverlayLayer.appendChild(Ee("rect", {
      class: "jcl-de-frame",
      "stroke-width": o,
      x: l.x,
      y: l.y,
      width: l.Width,
      height: l.Height
    })), a?.Controls.forEach((d, u) => {
      const p = i[u], h = i[(u + 1) % i.length];
      [["c1", p], ["c2", h]].forEach(([f, g]) => {
        const x = new DOMPoint(d[f].x, d[f].y).matrixTransform(n);
        this.OverlayLayer.appendChild(Ee("line", {
          class: "jcl-de-frame",
          "stroke-width": o,
          x1: g.x,
          y1: g.y,
          x2: x.x,
          y2: x.y
        })), this.OverlayLayer.appendChild(Ee("circle", {
          class: "jcl-de-handle",
          "data-control-index": u,
          "data-control-part": f,
          "stroke-width": o,
          cx: x.x,
          cy: x.y,
          r: 3 * o,
          opacity: 0.8
        }));
      });
    });
    const c = t.nodeName === "line" ? 0 : a != null ? a.Controls.length : s ? i.length : i.length - 1;
    for (let d = 0; d < c; d++) {
      const u = i[d], p = i[(d + 1) % i.length];
      let h = { x: (u.x + p.x) / 2, y: (u.y + p.y) / 2 };
      if (a != null) {
        const { c1: f, c2: g } = a.Controls[d], x = Jr(
          r[d],
          f,
          g,
          r[(d + 1) % r.length]
        ).Midpoint;
        h = new DOMPoint(x.x, x.y).matrixTransform(n);
      }
      this.OverlayLayer.appendChild(Ee("rect", {
        class: "jcl-de-handle",
        "data-midpoint-index": d,
        "stroke-width": o,
        x: h.x - 3 * o,
        y: h.y - 3 * o,
        width: 6 * o,
        height: 6 * o,
        opacity: 0.7
      }));
    }
    i.forEach((d, u) => {
      this.OverlayLayer.appendChild(Ee("circle", {
        class: "jcl-de-handle",
        "data-point-index": u,
        "stroke-width": o,
        cx: d.x,
        cy: d.y,
        r: 4 * o
      }));
    });
  }
  /**** beginPointEditing - handles "pointerdown" for the "editPoints" tool ****/
  beginPointEditing(t, n) {
    const o = n.target.dataset ?? {};
    switch (!0) {
      case o.pointIndex != null: {
        const a = parseInt(o.pointIndex, 10);
        n.altKey ? this.removePointAt(a) : this.DragState = {
          Type: "editPoint",
          Kind: "anchor",
          Index: a,
          modified: !1
        };
        break;
      }
      case o.controlIndex != null: {
        const a = parseInt(o.controlIndex, 10);
        this.DragState = {
          Type: "editPoint",
          Kind: "control",
          Index: a,
          Part: o.controlPart,
          modified: !1
        };
        break;
      }
      case o.midpointIndex != null: {
        const a = parseInt(o.midpointIndex, 10);
        this.insertPointAfter(a, t), this.DragState = {
          Type: "editPoint",
          Kind: "anchor",
          Index: a + 1,
          modified: !0
        };
        break;
      }
      default: {
        const a = this.ElementAt(n.target) ?? this.ElementNear(t);
        this.PointSelection = a != null && this.isPointEditable(a) ? a : void 0, this.select(
          // element and point selection stay in sync so...
          this.PointSelection == null ? [] : [this.PointSelection]
        );
      }
    }
  }
  /**** point manipulation ****/
  continuePointDrag(t) {
    const n = this.PointSelection;
    if (n == null)
      return;
    const o = new DOMPoint(t.x, t.y).matrixTransform(ht(n).inverse()), a = this.snapped({ x: o.x, y: o.y }), r = this.BezierModelOf(n);
    if (r == null) {
      const i = this.PointListOf(n);
      i[this.DragState.Index] = a, this.setPointListOf(n, i);
    } else
      this.dragBezierPointTo(n, r, a);
    this.DragState.modified = !0, this.refreshOverlay();
  }
  /**** dragBezierPointTo - anchors take their control points along ****/
  dragBezierPointTo(t, n, o) {
    const { Kind: a, Index: r, Part: i } = this.DragState;
    if (a === "control")
      n.Controls[r][i] = o;
    else {
      const s = n.Anchors[r], l = o.x - s.x, c = o.y - s.y;
      s.x = o.x, s.y = o.y;
      const d = n.Controls.length, u = r < d ? r : void 0, p = r > 0 ? r - 1 : n.closed ? d - 1 : void 0;
      u != null && (n.Controls[u].c1.x += l, n.Controls[u].c1.y += c), p != null && (n.Controls[p].c2.x += l, n.Controls[p].c2.y += c);
    }
    t.setAttribute("d", rn(n));
  }
  removePointAt(t) {
    const n = this.PointSelection, o = this.BezierModelOf(n);
    if (o != null) {
      this.removeBezierAnchorAt(n, o, t);
      return;
    }
    const a = this.PointListOf(n);
    a.length <= 2 || (a.splice(t, 1), this.setPointListOf(n, a), this.refreshOverlay(), this.announceChange());
  }
  /**** removeBezierAnchorAt - merges the two segments meeting at an anchor ****/
  removeBezierAnchorAt(t, n, o) {
    const { Anchors: a, Controls: r, closed: i } = n;
    if (!(a.length <= (i ? 3 : 2))) {
      switch (!0) {
        case i: {
          const s = (o + a.length - 1) % a.length;
          r[s] = { c1: r[s].c1, c2: r[o].c2 }, r.splice(o, 1), a.splice(o, 1);
          break;
        }
        case o === 0:
          a.shift(), r.shift();
          break;
        case o === a.length - 1:
          a.pop(), r.pop();
          break;
        default:
          r[o - 1] = { c1: r[o - 1].c1, c2: r[o].c2 }, r.splice(o, 1), a.splice(o, 1);
      }
      t.setAttribute("d", rn(n)), this.refreshOverlay(), this.announceChange();
    }
  }
  insertPointAfter(t, n) {
    const o = this.PointSelection, a = this.BezierModelOf(o);
    if (a != null) {
      const { Anchors: s, Controls: l } = a, c = Jr(
        s[t],
        l[t].c1,
        l[t].c2,
        s[(t + 1) % s.length]
      );
      l.splice(t, 1, c.leftControls, c.rightControls), s.splice(t + 1, 0, c.Midpoint), o.setAttribute("d", rn(a)), this.refreshOverlay();
      return;
    }
    const r = new DOMPoint(n.x, n.y).matrixTransform(ht(o).inverse()), i = this.PointListOf(o);
    i.splice(t + 1, 0, { x: r.x, y: r.y }), this.setPointListOf(o, i), this.refreshOverlay();
  }
  /**** toggleClosed - closes open polylines/paths and re-opens closed ones ****/
  toggleClosed() {
    if (this.readonly || this.Selection.length === 0)
      return;
    let t = !1;
    this.Selection = this.Selection.map((n) => {
      switch (n.nodeName) {
        case "polyline":
        case "polygon": {
          const o = Ee(
            n.nodeName === "polyline" ? "polygon" : "polyline"
          );
          return Array.from(n.attributes).forEach((a) => {
            // closed shapes carry no arrowheads
            n.nodeName === "polyline" && a.name.startsWith("marker-") || o.setAttribute(a.name, a.value);
          }), n.replaceWith(o), this.PointSelection === n && (this.PointSelection = o), t = !0, o;
        }
        case "path": {
          const o = n.getAttribute("d") ?? "", a = na(o);
          switch (!0) {
            case a != null: {
              if (a.closed)
                a.Controls.pop(), a.closed = !1;
              else {
                const r = a.Anchors.at(-1);
                a.Controls.push({
                  c1: Mt(r, a.Anchors[0], 1 / 3),
                  c2: Mt(r, a.Anchors[0], 2 / 3)
                }), a.closed = !0, n.removeAttribute("marker-start"), n.removeAttribute("marker-end");
              }
              n.setAttribute("d", rn(a)), t = !0;
              break;
            }
            case /^\s*M[0-9\s.,eE+-]+(?:L[0-9\s.,eE+-]+)+Z?\s*$/.test(o):
              /Z\s*$/.test(o) ? n.setAttribute("d", o.replace(/\s*Z\s*$/, "")) : (n.setAttribute("d", o.trim() + " Z"), n.removeAttribute("marker-start"), n.removeAttribute("marker-end")), t = !0;
          }
          return n;
        }
        default:
          return n;
      }
    }), t && (this.reportSelection(), this.announceChange());
  }
  /**** view box management ****/
  applyViewBox() {
    const { x: t, y: n, Width: o, Height: a } = this.ViewBox;
    this.View.setAttribute("viewBox", `${t} ${n} ${o} ${a}`), this.refreshGrid(), this.refreshOverlay();
  }
  setViewBox(t) {
    const { x: n, y: o, Width: a, Height: r } = t ?? {};
    isFinite(n) && isFinite(o) && isFinite(a) && a > 0 && isFinite(r) && r > 0 || ce("InvalidArgument: invalid view box given"), this.ViewBox = { x: n, y: o, Width: a, Height: r }, this.applyViewBox();
  }
  /**** zooming ****/
  ZoomFactor() {
    return (this.Container.clientWidth || 1) / this.ViewBox.Width;
  }
  setZoom(t) {
    isFinite(t) && t > 0 || ce(
      "InvalidArgument: invalid zoom factor given"
    );
    const n = this.ViewBox.x + this.ViewBox.Width / 2, o = this.ViewBox.y + this.ViewBox.Height / 2, a = (this.Container.clientWidth || 1) / t, r = (this.Container.clientHeight || 1) / t;
    this.setViewBox({ x: n - a / 2, y: o - r / 2, Width: a, Height: r });
  }
  zoomBy(t, n) {
    const { x: o, y: a, Width: r, Height: i } = this.ViewBox, s = Math.max(
      this.Size.Width / 50,
      Math.min(r / t, this.Size.Width * 20)
    ), l = r / s, c = n ?? { x: o + r / 2, y: a + i / 2 };
    this.setViewBox({
      x: c.x - (c.x - o) / l,
      y: c.y - (c.y - a) / l,
      Width: s,
      Height: i / l
    });
  }
  zoomToFit() {
    const t = _n(Array.from(this.ContentLayer.children)) ?? {
      x: 0,
      y: 0,
      Width: this.Size.Width,
      Height: this.Size.Height
    }, n = Math.max(t.Width, t.Height) * 0.05 || 10;
    let o = t.Width + 2 * n, a = t.Height + 2 * n;
    const r = (this.Container.clientWidth || 1) / (this.Container.clientHeight || 1);
    o / a > r ? a = o / r : o = a * r, this.setViewBox({
      x: t.x + t.Width / 2 - o / 2,
      y: t.y + t.Height / 2 - a / 2,
      Width: o,
      Height: a
    });
  }
  /**** panning ****/
  beginPan(t) {
    this.View.style.cursor = "grabbing", this.DragState = {
      Type: "pan",
      StartX: t.clientX,
      StartY: t.clientY,
      StartViewBox: { ...this.ViewBox }
    };
  }
  continuePan(t) {
    const { StartX: n, StartY: o, StartViewBox: a } = this.DragState, r = this.UnitsPerPixel();
    this.ViewBox = {
      ...this.ViewBox,
      x: a.x - (t.clientX - n) * r,
      y: a.y - (t.clientY - o) * r
    }, this.applyViewBox();
  }
  /**** onWheel - zooms with Ctrl/Cmd pressed, pans otherwise ****/
  onWheel(t) {
    if (t.preventDefault(), t.ctrlKey || t.metaKey)
      this.zoomBy(t.deltaY < 0 ? 1.1 : 1 / 1.1, this.PointFor(t));
    else {
      const n = this.UnitsPerPixel();
      this.setViewBox({
        ...this.ViewBox,
        x: this.ViewBox.x + t.deltaX * n,
        y: this.ViewBox.y + t.deltaY * n
      });
    }
  }
  /**** onKeyDown ****/
  onKeyDown(t) {
    const n = t.ctrlKey || t.metaKey, o = t.key.length === 1 ? t.key.toLowerCase() : t.key, a = (t.shiftKey ? 10 : 1) * (this.snapToGrid ? this.GridSize : 1);
    let r = !0;
    switch (!0) {
      case o === "Escape":
        switch (!0) {
          case this.PendingPolyline != null:
            this.cancelPolyline();
            break;
          case this.PointSelection != null:
            this.PointSelection = void 0, this.refreshOverlay();
            break;
          default:
            this.clearSelection();
        }
        break;
      case (o === "Enter" && this.PendingPolyline != null):
        this.finishPolyline();
        break;
      case (o === "Delete" || o === "Backspace"):
        this.deleteSelection();
        break;
      case (n && o === "z" && t.shiftKey):
        this.readonly || this.redo();
        break;
      case (n && o === "z"):
        this.readonly || this.undo();
        break;
      case (n && o === "y"):
        this.readonly || this.redo();
        break;
      case (n && o === "a"):
        this.selectAll();
        break;
      case (n && o === "c"):
        this.copySelection();
        break;
      case (n && o === "x"):
        this.cutSelection();
        break;
      case (n && o === "v"):
        this.pasteClipboard();
        break;
      case (n && o === "d"):
        this.duplicateSelection();
        break;
      case o === "ArrowLeft":
        this.moveSelectionBy(-a, 0);
        break;
      case o === "ArrowRight":
        this.moveSelectionBy(a, 0);
        break;
      case o === "ArrowUp":
        this.moveSelectionBy(0, -a);
        break;
      case o === "ArrowDown":
        this.moveSelectionBy(0, a);
        break;
      default:
        r = !1;
    }
    r && t.preventDefault();
  }
  /**** internal clipboard operations (deliberately not the system clipboard) ****/
  copySelection() {
    if (this.Selection.length === 0)
      return;
    const t = Array.from(this.ContentLayer.children).filter((n) => this.isSelected(n));
    this.ClipboardContent = t.map((n) => n.outerHTML).join("");
  }
  cutSelection() {
    this.readonly || (this.copySelection(), this.deleteSelection());
  }
  pasteClipboard() {
    if (this.readonly || this.ClipboardContent === "")
      return;
    const t = new DOMParser().parseFromString(
      `<svg xmlns="${ha}">` + this.ClipboardContent + "</svg>",
      "image/svg+xml"
    );
    Zr(t.documentElement);
    const n = this.snapToGrid ? this.GridSize : 10, o = [];
    Array.from(t.documentElement.children).forEach((a) => {
      const r = document.importNode(a, !0);
      r.removeAttribute("id"), on(
        r,
        new DOMMatrix().translate(n, n).multiply(ht(r))
      ), this.ContentLayer.appendChild(r), this.IdFor(r), o.push(r);
    }), o.length !== 0 && (this.ClipboardContent = o.map((a) => a.outerHTML).join(""), this.select(o), this.announceChange());
  }
  duplicateSelection() {
    if (this.readonly || this.Selection.length === 0)
      return;
    const t = this.ClipboardContent;
    this.copySelection(), this.pasteClipboard(), this.ClipboardContent = t;
  }
  /**** grouping ****/
  groupSelection() {
    if (this.readonly || this.Selection.length < 2)
      return;
    const t = Array.from(this.ContentLayer.children).filter((o) => this.isSelected(o)), n = Ee("g");
    this.ContentLayer.insertBefore(n, t.at(-1).nextSibling), t.forEach((o) => n.appendChild(o)), this.IdFor(n), this.select([n]), this.announceChange();
  }
  ungroupSelection() {
    if (this.readonly)
      return;
    const t = [];
    let n = !1;
    this.Selection.forEach((o) => {
      if (o.nodeName !== "g") {
        t.push(o);
        return;
      }
      const a = ht(o);
      Array.from(o.children).forEach((r) => {
        on(r, a.multiply(ht(r))), this.ContentLayer.insertBefore(r, o), this.IdFor(r), t.push(r);
      }), o.remove(), n = !0;
    }), n && (this.select(t), this.announceChange());
  }
  /**** z-order management ****/
  bringToFront() {
    if (this.readonly || this.Selection.length === 0)
      return;
    Array.from(this.ContentLayer.children).filter((n) => this.isSelected(n)).forEach((n) => this.ContentLayer.appendChild(n)), this.announceChange();
  }
  sendToBack() {
    if (this.readonly || this.Selection.length === 0)
      return;
    Array.from(this.ContentLayer.children).filter((n) => this.isSelected(n)).reverse().forEach((n) => {
      this.ContentLayer.insertBefore(n, this.ContentLayer.firstChild);
    }), this.announceChange();
  }
  raiseSelection() {
    if (this.readonly || this.Selection.length === 0)
      return;
    const t = Array.from(this.ContentLayer.children);
    for (let n = t.length - 2; n >= 0; n--)
      this.isSelected(t[n]) && !this.isSelected(t[n + 1]) && (this.ContentLayer.insertBefore(t[n + 1], t[n]), [t[n], t[n + 1]] = [t[n + 1], t[n]]);
    this.announceChange();
  }
  lowerSelection() {
    if (this.readonly || this.Selection.length === 0)
      return;
    const t = Array.from(this.ContentLayer.children);
    for (let n = 1; n < t.length; n++)
      this.isSelected(t[n]) && !this.isSelected(t[n - 1]) && (this.ContentLayer.insertBefore(t[n], t[n - 1]), [t[n - 1], t[n]] = [t[n], t[n - 1]]);
    this.announceChange();
  }
  /**** getStyle/setStyle - defaults for new shapes, applied to any selection ****/
  getStyle() {
    return { ...this.CurrentStyle };
  }
  setStyle(t) {
    const n = {}, o = bt(t?.StrokeColor), a = Et(t?.StrokeWidth, 0, 100), r = S(t?.StrokeDashes), i = t?.FillColor === "none" ? "none" : bt(t?.FillColor), s = Et(t?.Opacity, 0, 1), l = J(t?.StartArrow), c = J(t?.EndArrow), d = S(t?.FontFamily), u = Et(t?.FontSize, 1, 1e3), p = fe(t?.FontWeight, ["normal", "bold"]) ? t?.FontWeight : void 0, h = fe(t?.FontStyle, ["normal", "italic"]) ? t?.FontStyle : void 0;
    o != null && (n.StrokeColor = o), a != null && (n.StrokeWidth = a), r != null && (n.StrokeDashes = r), i != null && (n.FillColor = i), s != null && (n.Opacity = s), l != null && (n.StartArrow = l), c != null && (n.EndArrow = c), d != null && (n.FontFamily = d), u != null && (n.FontSize = u), p != null && (n.FontWeight = p), h != null && (n.FontStyle = h), this.CurrentStyle = { ...this.CurrentStyle, ...n }, !this.readonly && this.Selection.length > 0 && (this.Selection.forEach(
      (f) => this.applyStyleTo(f, n)
    ), this.refreshOverlay(), this.announceChange());
  }
  /**** StyleOfElement - reads the style-relevant attributes of an element ****/
  StyleOfElement(t) {
    const n = {}, o = parseFloat(t.getAttribute("stroke-width") ?? "");
    isNaN(o) || (n.StrokeWidth = o);
    const a = t.getAttribute("stroke-dasharray");
    a != null && (n.StrokeDashes = a);
    const r = parseFloat(t.getAttribute("opacity") ?? "");
    if (isNaN(r) || (n.Opacity = r), t.nodeName === "text") {
      const d = t.getAttribute("fill");
      d != null && (n.StrokeColor = d);
    } else {
      const d = t.getAttribute("stroke");
      d != null && (n.StrokeColor = d);
      const u = t.getAttribute("fill");
      u != null && (n.FillColor = u);
    }
    ["line", "polyline", "path"].includes(t.nodeName) && (n.StartArrow = t.getAttribute("marker-start") != null, n.EndArrow = t.getAttribute("marker-end") != null);
    const i = t.getAttribute("font-family");
    i != null && (n.FontFamily = i);
    const s = parseFloat(t.getAttribute("font-size") ?? "");
    isNaN(s) || (n.FontSize = s);
    const l = t.getAttribute("font-weight");
    (l === "normal" || l === "bold") && (n.FontWeight = l);
    const c = t.getAttribute("font-style");
    return (c === "normal" || c === "italic") && (n.FontStyle = c), n;
  }
  /**** SelectionStyle - common style of the selection (null = indifferent) ****/
  SelectionStyle() {
    const t = {};
    return this.Selection.forEach((n) => {
      const o = this.StyleOfElement(n);
      for (const a in o)
        switch (!0) {
          case !(a in t):
            t[a] = o[a];
            break;
          case t[a] !== o[a]:
            t[a] = null;
        }
    }), t;
  }
  /**** applyStyleTo - only applies the explicitly given style settings ****/
  applyStyleTo(t, n) {
    const o = {
      StrokeColor: "stroke",
      StrokeWidth: "stroke-width",
      StrokeDashes: "stroke-dasharray",
      FillColor: "fill",
      Opacity: "opacity",
      FontFamily: "font-family",
      FontSize: "font-size",
      FontWeight: "font-weight",
      FontStyle: "font-style"
    };
    for (const a in n) {
      const r = n[a];
      r != null && o[a] != null && (r === "" ? t.removeAttribute(o[a]) : t.setAttribute(o[a], String(r)));
    }
    if (["line", "polyline", "path"].includes(t.nodeName)) {
      const a = {
        // arrowheads apply to open shapes only
        StartArrow: "marker-start",
        EndArrow: "marker-end"
      };
      for (const r in a)
        n[r] != null && (n[r] ? t.setAttribute(a[r], "url(#jcl-de-arrow)") : t.removeAttribute(a[r]));
    }
    t.nodeName === "text" && n.StrokeColor != null && (t.setAttribute("fill", String(n.StrokeColor)), t.setAttribute("stroke", "none"));
  }
  /**** installArrowMarker - a single marker serves all arrowheads ****/
  installArrowMarker() {
    if (this.View.querySelector("#jcl-de-arrow") != null)
      return;
    const t = Ee("marker", {
      id: "jcl-de-arrow",
      viewBox: "0 0 10 10",
      refX: 9,
      refY: 5,
      markerWidth: 7,
      markerHeight: 7,
      markerUnits: "strokeWidth",
      orient: "auto-start-reverse"
    });
    t.appendChild(Ee("path", {
      d: "M 0 0 L 10 5 L 0 10 Z",
      fill: "context-stroke",
      stroke: "none"
    }));
    const n = Ee("defs");
    n.appendChild(t), this.View.insertBefore(n, this.GridLayer);
  }
}
function Fp(e) {
  return K(() => {
    xs(), e = U(e);
    const t = S(e.Class) ?? "";
    let n = ae(e.Value);
    const o = J(e.readonly) ?? !1, a = J(e.disabled) ?? !1, r = qt(e.Width) ?? 800, i = qt(e.Height) ?? 600, s = Et(e.GridSize, 0.01, 1e3) ?? 10, l = J(e.snapToGrid) ?? !1, c = J(e.showGrid) ?? !1, d = A(e.onValueChange), u = A(e.onSelectionChange), p = A(e.onToolChange), h = A(e.onUndoStateChange), f = A(e.onTextRequest), g = A(e.onMount), x = A(e.onUnmount), m = q(null), C = q(void 0), k = q({});
    k.current = {
      onValueChange: d,
      onSelectionChange: u,
      onToolChange: p,
      onUndoStateChange: h,
      onTextRequest: f,
      onUnmount: x
    };
    const L = q(n ?? ""), $ = q(n ?? "");
    return n != null && n !== L.current && (L.current = n, $.current = n), Ce(() => {
      const y = new Ap(m.current, {
        onValueChange: (O) => {
          $.current = O, k.current.onValueChange?.(O);
        },
        onSelectionChange: (O) => {
          k.current.onSelectionChange?.(O);
        },
        onToolChange: (O) => {
          k.current.onToolChange?.(O);
        },
        onUndoStateChange: (O, T) => {
          k.current.onUndoStateChange?.(O, T);
        },
        onTextRequest: (O) => k.current.onTextRequest?.(O)
      });
      return C.current = y, N('DrawingEditor callback "onMount"', g, {
        Editor: y,
        // grants access to the full internal API
        focus: () => y.View.focus(),
        getValue: () => y.getValue(),
        setValue: (O) => {
          y.setValue(O), $.current = O;
        },
        Tool: () => y.Tool,
        setTool: (O) => y.setTool(O),
        Style: () => y.getStyle(),
        setStyle: (O) => y.setStyle(O),
        SelectionStyle: () => y.SelectionStyle(),
        SelectedIds: () => y.SelectedIds(),
        select: (O) => y.selectIds(O),
        selectAll: () => y.selectAll(),
        deselectAll: () => y.clearSelection(),
        deleteSelection: () => y.deleteSelection(),
        toggleClosed: () => y.toggleClosed(),
        group: () => y.groupSelection(),
        ungroup: () => y.ungroupSelection(),
        bringToFront: () => y.bringToFront(),
        sendToBack: () => y.sendToBack(),
        raise: () => y.raiseSelection(),
        lower: () => y.lowerSelection(),
        copy: () => y.copySelection(),
        cut: () => y.cutSelection(),
        paste: () => y.pasteClipboard(),
        duplicate: () => y.duplicateSelection(),
        undo: () => y.undo(),
        canUndo: () => y.canUndo(),
        redo: () => y.redo(),
        canRedo: () => y.canRedo(),
        ViewBox: () => ({ ...y.ViewBox }),
        setViewBox: (O) => y.setViewBox(O),
        ZoomFactor: () => y.ZoomFactor(),
        setZoom: (O) => y.setZoom(O),
        zoomToFit: () => y.zoomToFit(),
        insertText: (O, T, j) => y.insertText(O, T, j)
      }), () => {
        N(
          'DrawingEditor callback "onUnmount"',
          k.current.onUnmount
        ), C.current = void 0, y.destroy();
      };
    }, []), Ce(() => {
      const y = C.current;
      y != null && (y.readonly = o, o && (y.cancelPolyline(), y.DragState = void 0));
    }, [o]), Ce(() => {
      const y = C.current;
      y != null && (y.Size = { Width: r, Height: i }, y.setViewBox({ x: 0, y: 0, Width: r, Height: i }));
    }, [r, i]), Ce(() => {
      const y = C.current;
      y != null && (y.GridSize = s, y.snapToGrid = l, y.showsGrid = c, y.refreshGrid());
    }, [s, l, c]), Ce(() => {
      const y = C.current;
      if (!(y == null || n == null) && y.getValue() !== $.current)
        try {
          y.setValue($.current);
        } catch (w) {
          console.warn("DrawingEditor: invalid value given", w);
        }
    }, [n]), b`<div
        class="jcl-component drawingeditor ${a ? "disabled" : ""} ${t}"
        ...${e.RestProps} ref=${m}
      />`;
  });
}
const xs = /* @__PURE__ */ Z("jcl-component.drawingeditor", `
    .jcl-component.drawingeditor {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:stretch !important;
      position:relative; overflow:hidden;
      border:solid 1px #888888; border-radius:2px;
      background:white; color:black;
    }

    .jcl-component.drawingeditor > .jcl-de-view {
      flex:1 1 auto; overflow:hidden;
      width:100%; height:100%;
      outline:none; touch-action:none;
    }
    .jcl-component.drawingeditor > .jcl-de-view:focus {
      outline:solid 2px #6366f1; outline-offset:-2px;
    }

    .jcl-component.drawingeditor .jcl-de-grid,
    .jcl-component.drawingeditor .jcl-de-overlay {
      pointer-events:none;
    }
    .jcl-component.drawingeditor .jcl-de-frame {
      fill:none; stroke:#6366f1; stroke-dasharray:4 3;
    }
    .jcl-component.drawingeditor .jcl-de-handle {
      fill:white; stroke:#6366f1; pointer-events:all;
    }
    .jcl-component.drawingeditor .jcl-de-handle[data-handle="rotate"],
    .jcl-component.drawingeditor .jcl-de-handle[data-point-index],
    .jcl-component.drawingeditor .jcl-de-handle[data-control-index],
    .jcl-component.drawingeditor .jcl-de-handle[data-midpoint-index] { cursor:move }
    .jcl-component.drawingeditor .jcl-de-rubberband {
      fill:rgba(99,102,241,0.1); stroke:#6366f1; stroke-dasharray:4 3;
    }
    .jcl-component.drawingeditor .jcl-de-guide {
      fill:none; stroke:#6366f1;
    }

    .jcl-component.drawingeditor.disabled {
      opacity:0.6; pointer-events:none;
    }

    @media (prefers-contrast: more) {
      .jcl-component.drawingeditor > .jcl-de-view:focus { outline:solid 3px currentColor }
    }
  `), zp = [
  "brush",
  "eraser",
  "line",
  "rectangle",
  "filledRectangle",
  "ellipse",
  "filledEllipse",
  "text",
  "fill",
  "eyeDropper",
  "pan",
  "select"
];
class Op {
  /**** document and layer model ****/
  Width = 0;
  Height = 0;
  LayerList = [];
  activeLayerIndex = -1;
  CallbackSet = {};
  // patched from the outside, if need be
  #v = 0;
  /**** activeLayer ****/
  get activeLayer() {
    return this.LayerList[this.activeLayerIndex];
  }
  /**** initialiseDocument ****/
  initialiseDocument(t, n) {
    Jn("document width", t), Jn("document height", n), this.Width = t, this.Height = n, this.LayerList = [], this.activeLayerIndex = -1, this.newLayerNamed("Background"), this.requestRendering();
  }
  /**** newLayerNamed ****/
  newLayerNamed(t, n = this.LayerList.length) {
    Xt("layer name", t);
    const o = new OffscreenCanvas(this.Width, this.Height), a = o.getContext("2d");
    a == null && ce(
      "CanvasFailure: could not create a 2d rendering context"
    );
    const r = {
      Id: `layer-${++this.#v}`,
      Name: t,
      isVisible: !0,
      Opacity: 1,
      BlendMode: "source-over",
      Canvas: o,
      Context: a
    };
    return this.LayerList.splice(n, 0, r), this.activeLayerIndex = this.LayerList.indexOf(r), this.requestRendering(), r;
  }
  /**** removeLayer ****/
  removeLayer(t) {
    const n = this.LayerList.indexOf(t);
    n < 0 || (this.LayerList.splice(n, 1), this.activeLayerIndex = Math.min(
      this.activeLayerIndex,
      this.LayerList.length - 1
    ), this.requestRendering());
  }
  /**** configureLayer - patches visibility, opacity and blend mode ****/
  configureLayer(t, n) {
    const { isVisible: o, Opacity: a, BlendMode: r } = n;
    o != null && (t.isVisible = o == !0), a != null && (t.Opacity = Math.max(0, Math.min(a, 1))), r != null && (t.BlendMode = r), this.requestRendering();
  }
  /**** rendering and compositing ****/
  ViewCanvas = void 0;
  #d = void 0;
  #a = !1;
  /**** requestRendering - renders at most once per animation frame ****/
  requestRendering() {
    this.#a || this.ViewCanvas == null || (this.#a = !0, requestAnimationFrame(() => {
      this.#a = !1, this.render();
    }));
  }
  /**** render ****/
  render() {
    const t = this.ViewCanvas, n = this.#d;
    if (t == null || n == null)
      return;
    const o = window.devicePixelRatio ?? 1;
    n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, t.width, t.height);
    const a = this.ZoomFactor * o;
    n.setTransform(
      a,
      0,
      0,
      a,
      -this.OffsetX * a,
      -this.OffsetY * a
    ), n.imageSmoothingEnabled = this.ZoomFactor < 1, this.LayerList.forEach((r) => {
      r.isVisible && (n.globalAlpha = r.Opacity, n.globalCompositeOperation = r.BlendMode, n.drawImage(r.Canvas, 0, 0));
    }), n.globalAlpha = 1, n.globalCompositeOperation = "source-over", this.renderOverlay(n);
  }
  /**** viewport handling ****/
  OffsetX = 0;
  // in document coordinates
  OffsetY = 0;
  ZoomFactor = 1;
  /**** attachTo - binds this editor to its (visible) view canvas ****/
  attachTo(t) {
    ws(), this.ViewCanvas = t, this.#d = t.getContext("2d") ?? void 0, this.#d == null && ce(
      "CanvasFailure: could not create a 2d rendering context"
    ), this.installInputHandlersOn(t), this.resizeViewCanvas();
  }
  /**** resizeViewCanvas - keeps the canvas backing store HiDPI-crisp ****/
  resizeViewCanvas() {
    const t = this.ViewCanvas;
    if (t == null)
      return;
    const n = window.devicePixelRatio ?? 1, { width: o, height: a } = t.getBoundingClientRect();
    t.width = Math.round(o * n), t.height = Math.round(a * n), this.requestRendering();
  }
  /**** DocumentPointFor - maps view coordinates to document coordinates ****/
  DocumentPointFor(t, n) {
    return {
      x: t / this.ZoomFactor + this.OffsetX,
      y: n / this.ZoomFactor + this.OffsetY
    };
  }
  /**** panBy - shifts the viewport by the given view distances ****/
  panBy(t, n) {
    this.OffsetX += t / this.ZoomFactor, this.OffsetY += n / this.ZoomFactor, this.reportViewportChange(), this.requestRendering();
  }
  /**** zoomTo - zooms the viewport, keeping a given view point stable ****/
  zoomTo(t, n, o) {
    const a = Math.max(0.05, Math.min(t, 32));
    if (n != null && o != null) {
      const r = this.DocumentPointFor(n, o);
      this.OffsetX = r.x - n / a, this.OffsetY = r.y - o / a;
    }
    this.ZoomFactor = a, this.reportViewportChange(), this.requestRendering();
  }
  /**** reportViewportChange ****/
  reportViewportChange() {
    N(
      'BitmapEditor callback "onViewportChange"',
      this.CallbackSet.onViewportChange,
      this.OffsetX,
      this.OffsetY,
      this.ZoomFactor
    );
  }
  /**** pointer and wheel input handling ****/
  currentTool = "brush";
  currentColor = "#000000";
  // a.k.a. the "foreground" colour
  backgroundColor = "#ffffff";
  // used by right-click, cut, delete etc.
  BrushSize = 10;
  BrushOpacity = 1;
  #u = void 0;
  #t = !1;
  #n = void 0;
  #r = void 0;
  // per-stroke colour (FG or BG)
  #f = void 0;
  // for filled shapes (BG or FG)
  #s = void 0;
  /**** installInputHandlersOn ****/
  installInputHandlersOn(t) {
    this.#u?.abort(), this.#u = new AbortController();
    const { signal: n } = this.#u;
    t.addEventListener(
      "pointerdown",
      (o) => this.#i(o),
      { signal: n }
    ), t.addEventListener(
      "pointermove",
      (o) => this.#j(o),
      { signal: n }
    ), t.addEventListener(
      "pointerup",
      (o) => this.#g(o),
      { signal: n }
    ), t.addEventListener(
      "pointercancel",
      (o) => this.#g(o),
      { signal: n }
    ), t.addEventListener(
      "wheel",
      (o) => this.#D(o),
      { passive: !1, signal: n }
    ), t.addEventListener(
      // the right button paints, thus, do not open
      "contextmenu",
      (o) => o.preventDefault(),
      { signal: n }
      // any menu
    );
  }
  /**** #onPointerDown ****/
  #i(t) {
    const n = this.ViewCanvas;
    if (n == null)
      return;
    n.setPointerCapture(t.pointerId), this.#t = !0;
    const o = t.button === 2;
    this.#r = // like MS Paint: the right button swaps the
    o ? this.backgroundColor : this.currentColor, this.#f = o ? this.currentColor : this.backgroundColor;
    const a = this.DocumentPointFor(t.offsetX, t.offsetY);
    switch (this.#n = a, this.currentTool) {
      case "brush":
      case "eraser":
        this.memoizeLayerForUndo(), this.beginStrokeAt(a, t.pressure);
        break;
      case "line":
      case "rectangle":
      case "ellipse":
      case "filledRectangle":
      case "filledEllipse":
        this.memoizeLayerForUndo(), this.beginShapeAt(a);
        break;
      case "text":
        this.enterTextAt(a, this.#r);
        break;
      // pointer handling need not wait
      case "fill":
        this.memoizeLayerForUndo(), this.fillAt(a, this.#r);
        break;
      case "eyeDropper":
        this.pickColorAt(a, o);
        break;
      case "select":
        this.#p(a);
        break;
    }
    t.preventDefault();
  }
  /**** #beginSelectionDragAt - moves a floating bitmap, lifts a selected ****/
  /**** region or starts a new selection frame (just like MS Paint)       ****/
  #p(t) {
    switch (!0) {
      case this.#k(t):
        this.#s = "floating";
        break;
      case this.FloatingBitmap != null:
        this.anchorFloatingBitmap(), this.beginSelectionAt(t), this.#s = "selection";
        break;
      case this.#C(t):
        this.liftSelection(), this.#s = "floating";
        break;
      default:
        this.beginSelectionAt(t), this.#s = "selection";
    }
  }
  #C(t) {
    const n = this.Selection;
    return n != null && t.x >= n.x && t.x < n.x + n.Width && t.y >= n.y && t.y < n.y + n.Height;
  }
  #k(t) {
    const n = this.FloatingBitmap;
    return n != null && t.x >= n.x && t.x < n.x + n.Canvas.width && t.y >= n.y && t.y < n.y + n.Canvas.height;
  }
  /**** #onPointerMove ****/
  #j(t) {
    if (this.#t) {
      switch (this.currentTool) {
        case "brush":
        case "eraser": {
          (t.getCoalescedEvents?.() ?? [t]).forEach((o) => this.continueStrokeAt(
            this.DocumentPointFor(o.offsetX, o.offsetY),
            o.pressure
          ));
          break;
        }
        case "line":
        case "rectangle":
        case "ellipse":
        case "filledRectangle":
        case "filledEllipse":
          this.continueShapeAt(this.DocumentPointFor(t.offsetX, t.offsetY));
          break;
        case "select": {
          const n = this.DocumentPointFor(t.offsetX, t.offsetY);
          if (this.#s === "floating") {
            const o = this.#n ?? n;
            this.moveFloatingBitmapBy(
              n.x - o.x,
              n.y - o.y
            ), this.#n = n;
          } else
            this.continueSelectionAt(n);
          break;
        }
        case "pan":
          this.panBy(-t.movementX, -t.movementY);
          break;
      }
      t.preventDefault();
    }
  }
  /**** #onPointerUp ****/
  #g(t) {
    if (this.#t) {
      switch (this.#t = !1, this.currentTool) {
        case "brush":
        case "eraser":
          this.endStroke();
          break;
        case "line":
        case "rectangle":
        case "ellipse":
        case "filledRectangle":
        case "filledEllipse":
          this.endShape();
          break;
        case "select":
          this.#s !== "floating" && this.endSelection();
          break;
      }
      this.#s = void 0, this.#r = void 0, this.#f = void 0, t.preventDefault();
    }
  }
  /**** #onWheel - zooms around the current pointer position ****/
  #D(t) {
    const n = this.ZoomFactor * (t.deltaY < 0 ? 1.1 : 0.9090909090909091);
    this.zoomTo(n, t.offsetX, t.offsetY), t.preventDefault();
  }
  /**** destroy ****/
  destroy() {
    this.#u?.abort(), this.ViewCanvas = void 0, this.#d = void 0;
  }
  /**** brush engine - stamp-based and pressure-aware ****/
  beginStrokeAt(t, n = 0.5) {
    const o = this.activeLayer;
    o != null && (this.#m(o.Context, t, n), this.#n = t, this.requestRendering());
  }
  /**** continueStrokeAt ****/
  continueStrokeAt(t, n = 0.5) {
    const o = this.activeLayer, a = this.#n;
    if (o == null || a == null)
      return;
    const r = Math.hypot(t.x - a.x, t.y - a.y), i = Math.max(this.BrushSize / 4, 1), s = Math.max(Math.ceil(r / i), 1);
    for (let l = 1; l <= s; l++)
      this.#m(o.Context, {
        x: a.x + (t.x - a.x) * l / s,
        y: a.y + (t.y - a.y) * l / s
      }, n);
    this.#n = t, this.requestRendering();
  }
  /**** endStroke ****/
  endStroke() {
    this.#n = void 0, this.reportValueChange();
  }
  /**** #stampOn - a single (round) brush stamp, using the per-stroke  ****/
  /**** colour (foreground or background, depending on the button) -   ****/
  /**** painting with "transparent" erases instead                     ****/
  // custom brush tips, textures and stroke smoothing are still missing <<<<
  #m(t, n, o) {
    const a = this.#r ?? this.currentColor, r = this.currentTool === "eraser" || a === "transparent";
    t.save(), this.applySelectionClippingTo(t), t.globalAlpha = this.BrushOpacity, t.globalCompositeOperation = r ? "destination-out" : "source-over", t.fillStyle = r ? "#000000" : a, t.beginPath(), t.arc(n.x, n.y, this.BrushSize / 2 * (0.5 + o), 0, 2 * Math.PI), t.fill(), t.restore();
  }
  /**** reportValueChange ****/
  reportValueChange() {
    N(
      'BitmapEditor callback "onValueChange"',
      this.CallbackSet.onValueChange
    );
  }
  /**** shape tools - preview while dragging, committed upon release ****/
  #c = void 0;
  #h = void 0;
  beginShapeAt(t) {
    this.#c = t, this.#h = t, this.requestRendering();
  }
  continueShapeAt(t) {
    this.#c != null && (this.#h = t, this.requestRendering());
  }
  endShape() {
    const t = this.activeLayer;
    t == null || this.#c == null || (t.Context.save(), this.applySelectionClippingTo(t.Context), this.drawPendingShapeOn(t.Context), t.Context.restore(), this.#c = this.#h = void 0, this.requestRendering(), this.reportValueChange());
  }
  /**** drawPendingShapeOn - strokes with the per-stroke colour          ****/
  /**** (foreground or background, depending on the button), "filled"    ****/
  /**** variants fill with the respective other colour (like MS Paint) - ****/
  /**** "transparent" as a colour erases instead (previews on the view   ****/
  /**** canvas then punch a hole into the composite which reveals the    ****/
  /**** CSS background underneath, i.e. the expected outcome)            ****/
  drawPendingShapeOn(t) {
    const n = this.#c, o = this.#h;
    if (n == null || o == null)
      return;
    const a = this.#r ?? this.currentColor, r = this.#f ?? this.backgroundColor, i = this.currentTool === "filledRectangle" || this.currentTool === "filledEllipse";
    switch (t.save(), t.lineWidth = this.BrushSize, t.globalAlpha = this.BrushOpacity, t.beginPath(), this.currentTool) {
      case "line":
        t.moveTo(n.x, n.y), t.lineTo(o.x, o.y);
        break;
      case "rectangle":
      case "filledRectangle":
        t.rect(
          Math.min(n.x, o.x),
          Math.min(n.y, o.y),
          Math.abs(o.x - n.x),
          Math.abs(o.y - n.y)
        );
        break;
      case "ellipse":
      case "filledEllipse":
        t.ellipse(
          (n.x + o.x) / 2,
          (n.y + o.y) / 2,
          Math.abs(o.x - n.x) / 2,
          Math.abs(o.y - n.y) / 2,
          0,
          0,
          2 * Math.PI
        );
        break;
    }
    i && (t.globalCompositeOperation = r === "transparent" ? "destination-out" : "source-over", t.fillStyle = r === "transparent" ? "#000000" : r, t.fill()), t.globalCompositeOperation = a === "transparent" ? "destination-out" : "source-over", t.strokeStyle = a === "transparent" ? "#000000" : a, t.stroke(), t.restore();
  }
  /**** text tool - the text itself is provided from the outside (via ****/
  /**** the "onTextRequest" callback), the engine renders it into a   ****/
  /**** floating bitmap which may then be dragged into place          ****/
  FontFamily = "sans-serif";
  FontSize = 24;
  // in document pixels
  FontWeight = "normal";
  FontStyle = "normal";
  lastText = "";
  // will be preset in the next text request
  /**** CSSFont - the settings above as a CSS font specification ****/
  get CSSFont() {
    return `${this.FontStyle} ${this.FontWeight} ${this.FontSize}px ${this.FontFamily}`;
  }
  /**** enterTextAt - asks the environment for a text and renders it into ****/
  /**** a floating bitmap with its top-left corner at the given point     ****/
  async enterTextAt(t, n = this.currentColor) {
    const o = this.activeLayer, a = this.CallbackSet.onTextRequest;
    if (!(o == null || a == null))
      try {
        const r = await a(this.lastText);
        if (r == null || r === "")
          return;
        if (this.lastText = r, n === "transparent") {
          this.#S(t, r);
          return;
        }
        this.floatBitmap(this.#L(r, n), t.x, t.y);
      } catch (r) {
        console.error("BitmapEditor: text entry failed", r);
      }
  }
  /**** #renderedText - renders a given text into a (floatable) bitmap ****/
  #L(t, n) {
    const o = t.split(`
`), a = this.FontSize * 1.2, i = new OffscreenCanvas(1, 1).getContext("2d");
    i.font = this.CSSFont;
    const s = Math.max(1, Math.ceil(Math.max(
      ...o.map((u) => i.measureText(u).width)
    )) + Math.ceil(this.FontSize * 0.2)), l = Math.max(1, Math.ceil(o.length * a)), c = new OffscreenCanvas(s, l), d = c.getContext("2d");
    return d.globalAlpha = this.BrushOpacity, d.fillStyle = n, d.font = this.CSSFont, d.textBaseline = "top", o.forEach((u, p) => {
      d.fillText(u, 0, p * a);
    }), c;
  }
  /**** #drawTextDirectlyAt - "erasing" text bypasses any floating and ****/
  /**** is drawn (i.e. erased) right away                              ****/
  #S(t, n) {
    const o = this.activeLayer;
    if (o == null)
      return;
    this.memoizeLayerForUndo();
    const a = o.Context;
    a.save(), this.applySelectionClippingTo(a), a.globalAlpha = this.BrushOpacity, a.globalCompositeOperation = "destination-out", a.fillStyle = "#000000", a.font = this.CSSFont, a.textBaseline = "top", n.split(`
`).forEach((r, i) => {
      a.fillText(r, t.x, t.y + i * this.FontSize * 1.2);
    }), a.restore(), this.requestRendering(), this.reportValueChange();
  }
  /**** fillAt - a simple 4-connected flood fill ****/
  // TODO: fill tolerance and anti-aliased edges are still missing <<<<
  fillAt(t, n = this.currentColor) {
    const o = this.activeLayer;
    if (o == null)
      return;
    const { Width: a, Height: r } = this, i = Math.floor(t.x), s = Math.floor(t.y);
    if (i < 0 || i >= a || s < 0 || s >= r)
      return;
    const l = o.Context.getImageData(0, 0, a, r), c = new Uint32Array(l.data.buffer), d = this.#M(n), u = c[s * a + i];
    if (u === d)
      return;
    const p = [s * a + i];
    for (; p.length > 0; ) {
      const h = p.pop();
      if (c[h] !== u)
        continue;
      c[h] = d;
      const f = h % a;
      f > 0 && p.push(h - 1), f < a - 1 && p.push(h + 1), h >= a && p.push(h - a), h < a * (r - 1) && p.push(h + a);
    }
    o.Context.putImageData(l, 0, 0), this.requestRendering(), this.reportValueChange();
  }
  /**** pickColorAt - picks from the composited document, optionally   ****/
  /**** for the background colour (i.e. after a right-click) - fully   ****/
  /**** transparent pixels are reported as "transparent", partially    ****/
  /**** transparent ones as "#RRGGBBAA" and opaque ones as "#RRGGBB"   ****/
  pickColorAt(t, n = !1) {
    const a = this.compositedCanvas().getContext("2d"), [r, i, s, l] = a.getImageData(
      Math.floor(t.x),
      Math.floor(t.y),
      1,
      1
    ).data, c = (u) => u.toString(16).padStart(2, "0");
    let d;
    switch (!0) {
      case l === 0:
        d = "transparent";
        break;
      case l === 255:
        d = `#${c(r)}${c(i)}${c(s)}`;
        break;
      default:
        d = `#${c(r)}${c(i)}${c(s)}${c(l)}`;
    }
    N(
      'BitmapEditor callback "onColorPicked"',
      this.CallbackSet.onColorPicked,
      d,
      n
    );
  }
  /**** #ABGRValueOf - converts a CSS colour into a little-endian pixel ****/
  #M(t) {
    const o = new OffscreenCanvas(1, 1).getContext("2d");
    o.fillStyle = t, o.fillRect(0, 0, 1, 1);
    const [a, r, i, s] = o.getImageData(0, 0, 1, 1).data;
    return (s << 24 | i << 16 | r << 8 | a) >>> 0;
  }
  /**** selection handling - rectangular selections only, for now ****/
  // TODO: lasso and "magic wand" selections (i.e. masks) are still missing <<<<
  Selection = void 0;
  #b = void 0;
  beginSelectionAt(t) {
    this.#b = t, this.continueSelectionAt(t);
  }
  continueSelectionAt(t) {
    const n = this.#b;
    n != null && (this.Selection = {
      x: Math.min(n.x, t.x),
      y: Math.min(n.y, t.y),
      Width: Math.abs(t.x - n.x),
      Height: Math.abs(t.y - n.y)
    }, this.requestRendering());
  }
  endSelection() {
    this.#b = void 0;
    const t = this.Selection;
    t != null && (t.Width < 1 || t.Height < 1) && (this.Selection = void 0), this.reportSelectionChange(), this.requestRendering();
  }
  clearSelection() {
    this.Selection = void 0, this.reportSelectionChange(), this.requestRendering();
  }
  /**** applySelectionClippingTo - restricts painting to the selection ****/
  applySelectionClippingTo(t) {
    const n = this.Selection;
    n != null && (t.beginPath(), t.rect(n.x, n.y, n.Width, n.Height), t.clip());
  }
  /**** renderOverlay - floating bitmap, selection marquee and pending ****/
  /**** shape previews                                                 ****/
  renderOverlay(t) {
    this.#c != null && this.drawPendingShapeOn(t);
    const n = this.FloatingBitmap;
    n != null && t.drawImage(n.Canvas, n.x, n.y);
    const o = this.Selection;
    o != null && (t.save(), t.lineWidth = 1 / this.ZoomFactor, t.setLineDash([4 / this.ZoomFactor, 4 / this.ZoomFactor]), t.strokeStyle = "#ffffff", t.strokeRect(
      o.x,
      o.y,
      o.Width,
      o.Height
    ), t.strokeStyle = "#000000", t.lineDashOffset = 4 / this.ZoomFactor, t.strokeRect(
      o.x,
      o.y,
      o.Width,
      o.Height
    ), t.restore());
  }
  /**** reportSelectionChange ****/
  reportSelectionChange() {
    N(
      'BitmapEditor callback "onSelectionChange"',
      this.CallbackSet.onSelectionChange,
      this.Selection
    );
  }
  /**** clipboard operations - editor-internal clipboard, for now ****/
  // system clipboard integration ("navigator.clipboard") is still missing <<<<
  #y = void 0;
  #o = void 0;
  get canCopy() {
    return this.Selection != null && this.activeLayer != null;
  }
  get canPaste() {
    return this.#y != null;
  }
  get FloatingBitmap() {
    return this.#o;
  }
  /**** #normalizedSelection - integer bounds, clamped to the document ****/
  #x() {
    const t = this.Selection;
    if (t == null)
      return;
    const n = Math.max(0, Math.round(t.x)), o = Math.max(0, Math.round(t.y)), a = Math.min(Math.round(t.Width), this.Width - n), r = Math.min(Math.round(t.Height), this.Height - o);
    return a > 0 && r > 0 ? { x: n, y: o, Width: a, Height: r } : void 0;
  }
  /**** #fillRegionOn - fills with the background colour (Paint-style), ****/
  /**** or clears the region if that colour is "transparent"            ****/
  #$(t, n) {
    this.backgroundColor === "transparent" ? t.clearRect(n.x, n.y, n.Width, n.Height) : (t.save(), t.fillStyle = this.backgroundColor, t.fillRect(n.x, n.y, n.Width, n.Height), t.restore());
  }
  /**** copySelection - copies from the active layer, not the composite ****/
  copySelection() {
    const t = this.activeLayer, n = this.#x();
    if (t == null || n == null)
      return;
    const { x: o, y: a, Width: r, Height: i } = n, s = new OffscreenCanvas(r, i);
    s.getContext("2d").drawImage(t.Canvas, o, a, r, i, 0, 0, r, i), this.#y = { Canvas: s, x: o, y: a };
  }
  /**** cutSelection / deleteSelection - both fill with the background ****/
  /**** colour, just like MS Paint                                     ****/
  cutSelection() {
    this.canCopy && (this.copySelection(), this.deleteSelection());
  }
  deleteSelection() {
    const t = this.activeLayer, n = this.#x();
    t == null || n == null || (this.memoizeLayerForUndo(), this.#$(t.Context, n), this.requestRendering(), this.reportValueChange());
  }
  /**** floatBitmap - makes a given bitmap "float" at a given position, ****/
  /**** from where it may be dragged around until it is finally         ****/
  /**** anchored (a click outside anchors it as well)                   ****/
  floatBitmap(t, n, o) {
    this.anchorFloatingBitmap(), this.#o = { Canvas: t, x: Math.round(n), y: Math.round(o) }, this.currentTool = "select", this.#w(), this.requestRendering();
  }
  /**** pasteClipboard - creates a "floating" bitmap in the visible corner ****/
  pasteClipboard() {
    const t = this.#y;
    t != null && this.floatBitmap(
      t.Canvas,
      Math.max(0, Math.round(this.OffsetX)),
      Math.max(0, Math.round(this.OffsetY))
    );
  }
  /**** liftSelection - turns the selected region into a floating bitmap, ****/
  /**** filling its origin with the background colour (like MS Paint)     ****/
  liftSelection() {
    const t = this.activeLayer, n = this.#x();
    if (t == null || n == null)
      return;
    const { x: o, y: a, Width: r, Height: i } = n, s = new OffscreenCanvas(r, i);
    s.getContext("2d").drawImage(t.Canvas, o, a, r, i, 0, 0, r, i), this.memoizeLayerForUndo(), this.#$(t.Context, n), this.#o = { Canvas: s, x: o, y: a }, this.#w(), this.requestRendering(), this.reportValueChange();
  }
  /**** moveFloatingBitmapBy ****/
  moveFloatingBitmapBy(t, n) {
    const o = this.#o;
    o != null && (o.x += t, o.y += n, this.#w(), this.requestRendering());
  }
  /**** anchorFloatingBitmap - draws the floating bitmap onto the layer ****/
  anchorFloatingBitmap() {
    const t = this.activeLayer, n = this.#o;
    t == null || n == null || (this.memoizeLayerForUndo(), t.Context.drawImage(n.Canvas, n.x, n.y), this.#o = void 0, this.requestRendering(), this.reportValueChange());
  }
  /**** dropFloatingBitmap - discards the floating bitmap ****/
  dropFloatingBitmap() {
    this.#o != null && (this.#o = void 0, this.clearSelection());
  }
  /**** #syncSelectionWithFloatingBitmap - the selection frame always ****/
  /**** surrounds a floating bitmap while one exists                  ****/
  #w() {
    const t = this.#o;
    t != null && (this.Selection = {
      x: t.x,
      y: t.y,
      Width: t.Canvas.width,
      Height: t.Canvas.height
    }, this.reportSelectionChange());
  }
  /**** change history - full-layer snapshots, for now ****/
  // tile- or region-based deltas would reduce the memory footprint <<<<
  #e = [];
  #l = [];
  #I = 50;
  get canUndo() {
    return this.#e.length > 0;
  }
  get canRedo() {
    return this.#l.length > 0;
  }
  /**** memoizeLayerForUndo - snapshots the active layer before a change ****/
  memoizeLayerForUndo() {
    const t = this.activeLayer;
    t != null && (this.#e.push({
      Layer: t,
      Snapshot: t.Context.getImageData(0, 0, this.Width, this.Height)
    }), this.#e.length > this.#I && this.#e.shift(), this.#l.length = 0, this.reportUndoStateChange());
  }
  /**** undo/redo ****/
  undo() {
    this.#T(this.#e, this.#l);
  }
  redo() {
    this.#T(this.#l, this.#e);
  }
  #T(t, n) {
    const o = t.pop();
    if (o == null)
      return;
    const { Layer: a, Snapshot: r } = o;
    n.push({
      Layer: a,
      Snapshot: a.Context.getImageData(0, 0, this.Width, this.Height)
    }), a.Context.putImageData(r, 0, 0), this.reportUndoStateChange(), this.requestRendering(), this.reportValueChange();
  }
  /**** reportUndoStateChange ****/
  reportUndoStateChange() {
    N(
      'BitmapEditor callback "onUndoStateChange"',
      this.CallbackSet.onUndoStateChange,
      this.canUndo,
      this.canRedo
    );
  }
  /**** compositedCanvas - all visible layers flattened into one canvas ****/
  compositedCanvas() {
    const t = new OffscreenCanvas(this.Width, this.Height), n = t.getContext("2d");
    return this.LayerList.forEach((o) => {
      o.isVisible && (n.globalAlpha = o.Opacity, n.globalCompositeOperation = o.BlendMode, n.drawImage(o.Canvas, 0, 0));
    }), t;
  }
  /**** exportedBlob ****/
  async exportedBlob(t = "image/png", n) {
    return await this.compositedCanvas().convertToBlob({
      type: t,
      quality: n
    });
  }
  /**** importImage - draws a given image onto the active layer ****/
  async importImage(t) {
    const n = this.activeLayer;
    if (n != null)
      try {
        const o = await createImageBitmap(
          t instanceof Blob ? t : await (await fetch(t)).blob()
        );
        this.memoizeLayerForUndo(), n.Context.drawImage(o, 0, 0), o.close(), this.requestRendering(), this.reportValueChange();
      } catch (o) {
        ce(`ImportFailure: could not import the given image (${o})`);
      }
  }
  /**** #DataURLFor - converts a given blob into a data URL ****/
  async #R(t) {
    return await new Promise((n, o) => {
      const a = new FileReader();
      a.onload = () => n(a.result), a.onerror = () => o(new Error("could not read the given blob")), a.readAsDataURL(t);
    });
  }
  /**** getDocument - serialises the complete layer structure ****/
  // the format is self-describing JSON with one (lossless) PNG data URL per
  // layer - suitable for interrupting and resuming a painting session
  async getDocument() {
    const t = await Promise.all(this.LayerList.map(
      async (n) => ({
        Name: n.Name,
        isVisible: n.isVisible,
        Opacity: n.Opacity,
        BlendMode: n.BlendMode,
        Bitmap: await this.#R(
          await n.Canvas.convertToBlob({ type: "image/png" })
        )
      })
    ));
    return JSON.stringify({
      Format: "jcl-bitmap-document@1",
      Width: this.Width,
      Height: this.Height,
      activeLayerIndex: this.activeLayerIndex,
      Layers: t
    });
  }
  /**** setDocument - restores a formerly serialised layer structure ****/
  // replaces the current document and clears the change history - without
  // firing "onValueChange" (like "setValue" in the DrawingEditor)
  async setDocument(t) {
    let n = t;
    if (rt(n))
      try {
        n = JSON.parse(n);
      } catch {
        ce("InvalidArgument: the given document is no valid JSON");
      }
    (!De(n) || n.Format !== "jcl-bitmap-document@1" || !kn(n.Width) || !kn(n.Height) || !je(n.Layers, De) || n.Layers.length === 0) && ce(
      "InvalidArgument: the given document is no valid bitmap document"
    );
    const o = await Promise.all(n.Layers.map(
      async (a) => {
        if (a.Bitmap != null)
          try {
            return await createImageBitmap(
              await (await fetch(a.Bitmap)).blob()
            );
          } catch (r) {
            ce(`ImportFailure: could not decode a layer bitmap (${r})`);
          }
      }
    ));
    this.Width = n.Width, this.Height = n.Height, this.LayerList = [], this.activeLayerIndex = -1, n.Layers.forEach((a, r) => {
      const i = this.newLayerNamed(
        Ne(a.Name) ? a.Name : "Layer " + (r + 1)
      );
      this.configureLayer(i, a);
      const s = o[r];
      s != null && (i.Context.drawImage(s, 0, 0), s.close());
    }), this.activeLayerIndex = kn(n.activeLayerIndex) ? Math.min(n.activeLayerIndex, this.LayerList.length - 1) : this.LayerList.length - 1, this.#e.length = 0, this.#l.length = 0, this.reportUndoStateChange(), this.requestRendering();
  }
  /**** setValue - accepts a layer document or a plain image data URL ****/
  // a plain bitmap becomes a single-layer document of the bitmap's own size
  async setValue(t) {
    if (Ye("bitmap editor value", t), t.trim().startsWith("{"))
      return await this.setDocument(t);
    try {
      const n = await createImageBitmap(await (await fetch(t)).blob());
      this.Width = n.width, this.Height = n.height, this.LayerList = [], this.activeLayerIndex = -1, this.newLayerNamed("Background").Context.drawImage(n, 0, 0), n.close();
    } catch (n) {
      ce(`ImportFailure: could not import the given image (${n})`);
    }
    this.#e.length = 0, this.#l.length = 0, this.reportUndoStateChange(), this.requestRendering();
  }
  /**** Snapshot - flattens all visible layers into a single bitmap ****/
  // "Type" may be "png", "jpeg" or "webp" (GIF is deliberately unsupported -
  // "convertToBlob" cannot encode it), "BackgroundColor" fills the ground
  // ("transparent" or "none" keep the alpha channel, JPEG snapshots default
  // to white), "Width"/"Height" scale the result (a single dimension keeps
  // the aspect ratio)
  async Snapshot(t) {
    const { Type: n, Quality: o, BackgroundColor: a, Width: r, Height: i } = t ?? {};
    n != null && !fe(n, ["png", "jpeg", "webp"]) && ce(
      "InvalidArgument: unsupported image type " + vt("" + n)
    );
    const s = n ?? "png", l = Et(o, 0, 1), c = (C) => {
      const k = ve(C);
      return k == null || k < 1 ? void 0 : k;
    }, d = c(r), u = c(i), p = d ?? (u == null ? this.Width : Math.max(1, Math.round(u * this.Width / this.Height))), h = u ?? (d == null ? this.Height : Math.max(1, Math.round(d * this.Height / this.Width)));
    let f = a;
    f == null && s === "jpeg" && (f = "#ffffff");
    const g = f != null && f !== "transparent" && f !== "none", x = new OffscreenCanvas(p, h), m = x.getContext("2d");
    return g && (m.fillStyle = bt(f) ?? "#ffffff", m.fillRect(0, 0, p, h)), m.imageSmoothingEnabled = !0, m.imageSmoothingQuality = "high", m.drawImage(
      this.compositedCanvas(),
      0,
      0,
      this.Width,
      this.Height,
      0,
      0,
      p,
      h
    ), await x.convertToBlob({
      type: "image/" + s,
      quality: l
    });
  }
}
function Vp(e) {
  return K(() => {
    ws(), e = U(e);
    const t = S(e.Class) ?? "", n = ve(e.Width) ?? 800, o = ve(e.Height) ?? 600, a = ae(e.Value), r = S(e.Tool) ?? "brush", i = bt(e.Color) ?? "#000000", s = bt(e.BackgroundColor) ?? "#ffffff", l = Et(e.BrushSize, 1, 1e3) ?? 10, c = Et(e.BrushOpacity, 0, 1) ?? 1, d = S(e.FontFamily) ?? "sans-serif", u = Et(e.FontSize, 4, 400) ?? 24, p = fe(e.FontWeight, ["normal", "bold"]) ? e.FontWeight : "normal", h = fe(e.FontStyle, ["normal", "italic"]) ? e.FontStyle : "normal", f = J(e.disabled) ?? !1, g = A(e.onValueChange), x = A(e.onSelectionChange), m = A(e.onUndoStateChange), C = A(e.onColorPicked), k = A(e.onViewportChange), L = A(e.onTextRequest), $ = A(e.onMount), y = A(e.onUnmount), w = q(null), O = q(void 0), T = q({});
    return T.current = {
      onValueChange: g,
      onSelectionChange: x,
      onUndoStateChange: m,
      onColorPicked: C,
      onViewportChange: k,
      onTextRequest: L,
      onUnmount: y
    }, Ce(() => {
      const j = w.current, I = document.createElement("canvas");
      j.appendChild(I);
      const M = new Op();
      M.CallbackSet = {
        onValueChange: (...B) => T.current.onValueChange?.(...B),
        onSelectionChange: (...B) => T.current.onSelectionChange?.(...B),
        onUndoStateChange: (...B) => T.current.onUndoStateChange?.(...B),
        onColorPicked: (...B) => T.current.onColorPicked?.(...B),
        onViewportChange: (...B) => T.current.onViewportChange?.(...B),
        onTextRequest: (...B) => (
          // returns the entered
          T.current.onTextRequest?.(...B)
        )
        // text!
      }, M.initialiseDocument(n, o), M.attachTo(I), a != null && M.setValue(a).catch((B) => console.warn(
        'BitmapEditor: could not apply the given "Value"',
        B
      )), O.current = M;
      const D = new ResizeObserver(() => M.resizeViewCanvas());
      return D.observe(j), N('BitmapEditor callback "onMount"', $, {
        Editor: M,
        // grants access to the full engine
        undo: () => M.undo(),
        redo: () => M.redo(),
        newLayerNamed: (B) => M.newLayerNamed(B),
        importImage: (B) => M.importImage(B),
        exportedBlob: (B) => M.exportedBlob(B),
        getDocument: () => M.getDocument(),
        setDocument: (B) => M.setDocument(B),
        setValue: (B) => M.setValue(B),
        Snapshot: (B) => M.Snapshot(B),
        clearSelection: () => M.clearSelection(),
        cutSelection: () => M.cutSelection(),
        copySelection: () => M.copySelection(),
        pasteClipboard: () => M.pasteClipboard(),
        deleteSelection: () => M.deleteSelection(),
        anchorFloatingBitmap: () => M.anchorFloatingBitmap(),
        dropFloatingBitmap: () => M.dropFloatingBitmap(),
        zoomTo: (B) => M.zoomTo(B)
      }), () => {
        N(
          'BitmapEditor callback "onUnmount"',
          T.current.onUnmount
        ), D.disconnect(), O.current = void 0, M.destroy(), I.remove();
      };
    }, []), Ce(() => {
      const j = O.current;
      j != null && (zp.includes(r) && (j.currentTool = r), j.currentColor = i, j.backgroundColor = s, j.BrushSize = l, j.BrushOpacity = c, j.FontFamily = d, j.FontSize = u, j.FontWeight = p, j.FontStyle = h);
    }, [
      r,
      i,
      s,
      l,
      c,
      d,
      u,
      p,
      h
    ]), b`<div
        class="jcl-component bitmapeditor ${f ? "disabled" : ""} ${t}"
        ...${e.RestProps} ref=${w}
      />`;
  });
}
const ws = /* @__PURE__ */ Z("jcl-component.bitmapeditor", `
    .jcl-component.bitmapeditor {
      display:block !important;
      position:relative; overflow:hidden;
      border:solid 1px #888888; border-radius:2px;
      background:#404040; touch-action:none;
    }

    .jcl-component.bitmapeditor > canvas {
      display:block; width:100%; height:100%;
    }

    .jcl-component.bitmapeditor.disabled {
      opacity:0.6; pointer-events:none;
    }
  `), Ep = [
  "select",
  "rect",
  "ellipse",
  "polygon",
  "text",
  "image"
];
class ft {
  static #v = /* @__PURE__ */ new Map();
  static registerEffect(t) {
    ft.#v.set(t.Type, t);
  }
  static effectPluginFor(t) {
    return Np(), ft.#v.get(t);
  }
  /**** object and scene model ****/
  Width = 800;
  Height = 600;
  ObjectList = [];
  #d = 0;
  Callbacks = {};
  /**** initialiseScene ****/
  initialiseScene(t, n) {
    Jn("scene width", t), Jn("scene height", n), this.Width = t, this.Height = n, this.ObjectList = [], this.SelectedIds = [], this.Snapshots = ["[]"], this.SnapshotIndex = 0, this.requestRendering();
  }
  /**** objectWithId ****/
  objectWithId(t) {
    return this.ObjectList.find((n) => n.Id === t);
  }
  /**** addObject ****/
  addObject(t) {
    const n = {
      Id: `obj-${++this.#d}`,
      Type: t.Type ?? "rect",
      X: t.X ?? 0,
      Y: t.Y ?? 0,
      Width: t.Width ?? 100,
      Height: t.Height ?? 100,
      Rotation: t.Rotation ?? 0,
      Opacity: t.Opacity ?? 1,
      BlendMode: t.BlendMode ?? "normal",
      FillColor: t.FillColor ?? (t.Type === "text" ? "#000000" : "#ffffff"),
      StrokeColor: t.StrokeColor ?? "#000000",
      StrokeWidth: t.StrokeWidth ?? (t.Type === "text" ? 0 : 1),
      Effects: (t.Effects ?? []).map((o) => ({ ...o })),
      ...t.Type === "text" ? {
        Text: t.Text ?? "Text",
        FontFamily: t.FontFamily ?? "sans-serif",
        FontSize: t.FontSize ?? 24,
        FontWeight: t.FontWeight ?? "normal",
        FontStyle: t.FontStyle ?? "normal"
      } : {},
      ...t.Type === "image" ? { ImageData: t.ImageData ?? "" } : {},
      ...t.Type === "polygon" ? {
        Points: (t.Points ?? []).map((o) => ({ ...o }))
      } : {}
    };
    return this.ObjectList.push(n), n.Type === "image" && this.loadImageForObject(n), this.announceChange(), this.requestRendering(), n;
  }
  /**** removeObject ****/
  removeObject(t) {
    const n = this.ObjectList.findIndex((o) => o.Id === t);
    n < 0 || (this.ObjectList.splice(n, 1), this.#t.delete(t), this.SelectedIds = this.SelectedIds.filter((o) => o !== t), this.announceChange(), this.requestRendering());
  }
  /**** configureObject ****/
  configureObject(t, n) {
    const o = this.objectWithId(t);
    if (o == null)
      return;
    const a = o.Type === "image";
    Object.assign(o, n), o.Id = t, o.Type === "image" && (n.ImageData != null || !a) && (this.#t.delete(t), this.loadImageForObject(o)), this.announceChange(), this.requestRendering();
  }
  /**** canvas, overlay and rendering ****/
  Canvas;
  Context;
  #a;
  #u;
  Overlay;
  #t = /* @__PURE__ */ new Map();
  #n = !1;
  /**** attachTo ****/
  attachTo(t, n) {
    vs(), this.Canvas = t, this.Context = t.getContext("2d"), this.Overlay = n, this.#a = new OffscreenCanvas(1, 1), this.#u = this.#a.getContext("2d"), t.addEventListener("pointerdown", this.#p), n.addEventListener("pointerdown", this.#p), t.addEventListener("pointermove", this.#C), t.addEventListener("pointerup", this.#k), t.addEventListener("dblclick", this.#j), window.addEventListener("keydown", this.#g), this.resizeViewCanvas();
  }
  /**** resizeViewCanvas ****/
  resizeViewCanvas() {
    const t = this.Canvas.parentElement;
    this.Canvas.width = t.clientWidth, this.Canvas.height = t.clientHeight, this.#a.width = this.Canvas.width, this.#a.height = this.Canvas.height, this.requestRendering();
  }
  /**** loadImageForObject ****/
  loadImageForObject(t) {
    if (!t.ImageData || this.#t.has(t.Id))
      return;
    const n = new Image();
    n.onload = () => {
      this.#t.set(t.Id, n), this.requestRendering();
    }, n.src = t.ImageData;
  }
  /**** requestRendering ****/
  requestRendering() {
    this.#n || (this.#n = !0, requestAnimationFrame(() => {
      this.#n = !1, this.render();
    }));
  }
  /**** render ****/
  render() {
    const t = this.Context, { width: n, height: o } = this.Canvas;
    t.clearRect(0, 0, n, o), t.save();
    const { ox: a, oy: r, scale: i } = this.Viewport;
    t.translate(a, r), t.scale(i, i), t.fillStyle = "#ffffff", t.fillRect(0, 0, this.Width, this.Height), this.showsGrid && this.#s(t);
    for (const s of this.ObjectList)
      s.Opacity > 0 && this.#r(t, s);
    t.restore(), this.refreshOverlay();
  }
  /**** #renderObject ****/
  #r(t, n) {
    const o = n.GroupMembers;
    if (o != null) {
      for (const i of o)
        i.Opacity > 0 && this.#r(t, i);
      return;
    }
    t.save(), t.globalAlpha = n.Opacity, t.globalCompositeOperation = n.BlendMode;
    const a = n.X + n.Width / 2, r = n.Y + n.Height / 2;
    t.translate(a, r), t.rotate(n.Rotation * Math.PI / 180), t.translate(-a, -r);
    for (const i of n.Effects) {
      if (!i.enabled)
        continue;
      const s = ft.effectPluginFor(i.Type);
      s?.Phase === "before" && s.render(t, n, i, this.#a);
    }
    this.#f(t, n);
    for (const i of n.Effects) {
      if (!i.enabled)
        continue;
      const s = ft.effectPluginFor(i.Type);
      s != null && s.Phase !== "before" && s.render(t, n, i, this.#a);
    }
    t.restore();
  }
  /**** #renderObjectBase ****/
  #f(t, n) {
    switch (n.Type) {
      case "text":
        t.font = `${n.FontStyle ?? "normal"} ${n.FontWeight ?? "normal"} ${n.FontSize ?? 24}px ${n.FontFamily ?? "sans-serif"}`, t.fillStyle = n.FillColor, t.textBaseline = "top", t.fillText(n.Text ?? "", n.X, n.Y);
        return;
      case "image": {
        const o = this.#t.get(n.Id);
        o && t.drawImage(o, n.X, n.Y, n.Width, n.Height);
        return;
      }
    }
    Ot(t, n), n.FillColor !== "none" && (t.fillStyle = n.FillColor, t.fill()), n.StrokeWidth > 0 && (t.strokeStyle = n.StrokeColor, t.lineWidth = n.StrokeWidth, t.stroke());
  }
  /**** #renderGrid ****/
  #s(t) {
    t.save(), t.strokeStyle = "rgba(0,0,0,0.12)", t.lineWidth = 0.5 / this.Viewport.scale;
    for (let n = 0; n <= this.Width; n += this.GridSize)
      t.beginPath(), t.moveTo(n, 0), t.lineTo(n, this.Height), t.stroke();
    for (let n = 0; n <= this.Height; n += this.GridSize)
      t.beginPath(), t.moveTo(0, n), t.lineTo(this.Width, n), t.stroke();
    t.restore();
  }
  /**** refreshOverlay - creation preview + SVG handles for selection ****/
  refreshOverlay() {
    const t = this.Overlay, n = "http://www.w3.org/2000/svg";
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
    const { ox: o, oy: a, scale: r } = this.Viewport, i = (d, u) => ({ x: o + d * r, y: a + u * r }), s = (d) => o + d * r, l = (d) => a + d * r;
    if (this.DragState?.mode === "create") {
      const d = this.DragState, u = s(Math.min(d.startX, d.currentX)), p = l(Math.min(d.startY, d.currentY)), h = s(Math.max(d.startX, d.currentX)), f = l(Math.max(d.startY, d.currentY)), g = h - u, x = f - p;
      switch (d.tool) {
        case "rect": {
          const m = document.createElementNS(n, "rect");
          m.setAttribute("x", String(u)), m.setAttribute("y", String(p)), m.setAttribute("width", String(g)), m.setAttribute("height", String(x)), m.setAttribute("fill", "rgba(255,255,255,0.25)"), m.setAttribute("stroke", "#6366f1"), m.setAttribute("stroke-dasharray", "4 3"), t.appendChild(m);
          break;
        }
        case "ellipse": {
          const m = document.createElementNS(n, "ellipse");
          m.setAttribute("cx", String(u + g / 2)), m.setAttribute("cy", String(p + x / 2)), m.setAttribute("rx", String(g / 2)), m.setAttribute("ry", String(x / 2)), m.setAttribute("fill", "rgba(255,255,255,0.25)"), m.setAttribute("stroke", "#6366f1"), m.setAttribute("stroke-dasharray", "4 3"), t.appendChild(m);
          break;
        }
        case "polygon": {
          const m = d.polygonPoints;
          if (m.length > 0) {
            const C = m.map((y) => `${s(y.X)},${l(y.Y)}`).join(" "), k = document.createElementNS(n, "polyline");
            k.setAttribute("points", C), k.setAttribute("fill", "none"), k.setAttribute("stroke", "#6366f1"), k.setAttribute("stroke-dasharray", "4 3"), t.appendChild(k);
            const L = m[m.length - 1], $ = document.createElementNS(n, "line");
            $.setAttribute("x1", String(s(L.X))), $.setAttribute("y1", String(l(L.Y))), $.setAttribute("x2", String(s(d.currentX))), $.setAttribute("y2", String(l(d.currentY))), $.setAttribute("stroke", "#6366f1"), $.setAttribute("stroke-dasharray", "4 3"), $.setAttribute("fill", "none"), t.appendChild($);
          }
          break;
        }
      }
    }
    if (this.DragState?.mode === "rubberband" && this.DragState.endX != null) {
      const d = this.DragState, u = s(Math.min(d.startX, d.endX)), p = l(Math.min(d.startY, d.endY)), h = Math.abs(s(d.endX) - s(d.startX)), f = Math.abs(l(d.endY) - l(d.startY)), g = document.createElementNS(n, "rect");
      g.setAttribute("class", "jcl-rde-rubberband"), g.setAttribute("x", String(u)), g.setAttribute("y", String(p)), g.setAttribute("width", String(h)), g.setAttribute("height", String(f)), t.appendChild(g);
    }
    if (this.SelectedIds.length === 0)
      return;
    const c = (d, u, p, h, f) => {
      const g = f * Math.PI / 180, x = d - p, m = u - h;
      return {
        x: p + x * Math.cos(g) - m * Math.sin(g),
        y: h + x * Math.sin(g) + m * Math.cos(g)
      };
    };
    for (const d of this.SelectedIds) {
      const u = this.objectWithId(d);
      if (u == null)
        continue;
      const p = i(u.X, u.Y), h = u.Width * r, f = u.Height * r, g = p.x + h / 2, x = p.y + f / 2, m = u.Rotation, C = document.createElementNS(n, "rect");
      C.setAttribute("class", "jcl-rde-frame"), C.setAttribute("x", String(p.x)), C.setAttribute("y", String(p.y)), C.setAttribute("width", String(h)), C.setAttribute("height", String(f)), C.setAttribute("transform", `rotate(${m},${g},${x})`), t.appendChild(C);
      const k = [
        ["nw", p.x, p.y],
        ["n", g, p.y],
        ["ne", p.x + h, p.y],
        ["e", p.x + h, x],
        ["se", p.x + h, p.y + f],
        ["s", g, p.y + f],
        ["sw", p.x, p.y + f],
        ["w", p.x, x]
      ];
      for (const [O, T, j] of k) {
        const I = c(T, j, g, x, m), M = document.createElementNS(n, "rect");
        M.setAttribute("class", "jcl-rde-handle"), M.setAttribute("data-handle", O), M.setAttribute("data-id", d), M.setAttribute("x", String(I.x - 4)), M.setAttribute("y", String(I.y - 4)), M.setAttribute("width", "8"), M.setAttribute("height", "8"), M.setAttribute("transform", `rotate(${m},${I.x},${I.y})`), t.appendChild(M);
      }
      const L = c(g, p.y, g, x, m), $ = c(g, p.y - 24, g, x, m), y = document.createElementNS(n, "line");
      y.setAttribute("x1", String(L.x)), y.setAttribute("y1", String(L.y)), y.setAttribute("x2", String($.x)), y.setAttribute("y2", String($.y)), y.setAttribute("stroke", "#6366f1"), y.setAttribute("stroke-dasharray", "3 2"), t.appendChild(y);
      const w = document.createElementNS(n, "circle");
      w.setAttribute("class", "jcl-rde-handle"), w.setAttribute("data-handle", "rotate"), w.setAttribute("data-id", d), w.setAttribute("cx", String($.x)), w.setAttribute("cy", String($.y)), w.setAttribute("r", "5"), t.appendChild(w);
    }
  }
  /**** viewport ****/
  Viewport = { ox: 0, oy: 0, scale: 1 };
  GridSize = 10;
  snapToGrid = !1;
  showsGrid = !1;
  /**** canvasToScene - converts a canvas-space point to scene space ****/
  canvasToScene(t, n) {
    const { ox: o, oy: a, scale: r } = this.Viewport;
    return { x: (t - o) / r, y: (n - a) / r };
  }
  /**** sceneToCanvas ****/
  sceneToCanvas(t, n) {
    const { ox: o, oy: a, scale: r } = this.Viewport;
    return { x: o + t * r, y: a + n * r };
  }
  /**** snapped ****/
  snapped(t, n) {
    return !this.snapToGrid || this.GridSize <= 0 ? { x: t, y: n } : {
      x: Math.round(t / this.GridSize) * this.GridSize,
      y: Math.round(n / this.GridSize) * this.GridSize
    };
  }
  /**** setZoom ****/
  setZoom(t) {
    const { width: n, height: o } = this.Canvas, a = n / 2, r = o / 2, { ox: i, oy: s, scale: l } = this.Viewport, c = (a - i) / l, d = (r - s) / l;
    this.Viewport = {
      scale: Math.max(0.05, Math.min(t, 32)),
      ox: a - c * t,
      oy: r - d * t
    }, this.requestRendering();
  }
  /**** get ZoomFactor ****/
  get ZoomFactor() {
    return this.Viewport.scale;
  }
  /**** zoomToFit ****/
  zoomToFit() {
    const { width: t, height: n } = this.Canvas, o = Math.min(
      (t - 40) / this.Width,
      (n - 40) / this.Height
    );
    this.Viewport = {
      scale: o,
      ox: (t - this.Width * o) / 2,
      oy: (n - this.Height * o) / 2
    }, this.requestRendering();
  }
  /**** pan ****/
  pan(t, n) {
    this.Viewport = { ...this.Viewport, ox: this.Viewport.ox + t, oy: this.Viewport.oy + n }, this.requestRendering();
  }
  /**** pointer input ****/
  currentTool = "select";
  readonly = !1;
  DragState = void 0;
  #i = (t) => {
    const n = this.Canvas.getBoundingClientRect();
    return { x: t.clientX - n.left, y: t.clientY - n.top };
  };
  #p = (t) => {
    if (this.readonly)
      return;
    const n = this.canvasToScene(this.#i(t).x, this.#i(t).y);
    this.currentTool === "select" ? this.#D(n, t) : this.#S(n, t), this.DragState != null && this.Canvas.setPointerCapture(t.pointerId);
  };
  #C = (t) => {
    if (this.DragState == null)
      return;
    const n = this.canvasToScene(this.#i(t).x, this.#i(t).y);
    switch (this.DragState.mode) {
      case "move":
        this.#o(n);
        break;
      case "resize":
        this.#x(n);
        break;
      case "rotate":
        this.#$(n, t);
        break;
      case "create":
        this.#M(n);
        break;
      case "pan":
        this.#c(t);
        break;
      case "rubberband":
        this.#h(n);
        break;
    }
  };
  #k = (t) => {
    try {
      this.Canvas.releasePointerCapture(t.pointerId);
    } catch {
    }
    if (this.DragState == null)
      return;
    const n = this.canvasToScene(this.#i(t).x, this.#i(t).y);
    switch (this.DragState.mode) {
      case "create":
        this.#b(n);
        break;
      case "move":
      case "resize":
      case "rotate":
        this.announceChange();
        break;
      case "rubberband":
        this.#L(n);
        break;
    }
    this.DragState = void 0, this.refreshOverlay();
  };
  #j = (t) => {
    if (this.readonly)
      return;
    const n = this.canvasToScene(this.#i(t).x, this.#i(t).y), o = this.#m(n);
    o != null && (o.Type === "text" ? this.#w(o) : this.DragState?.mode === "create" && this.DragState.tool === "polygon" && this.finishPolygon());
  };
  #g = (t) => {
    if (this.readonly)
      return;
    const n = t.shiftKey ? 10 : 1;
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t.key)) {
      t.preventDefault();
      const o = t.key === "ArrowLeft" ? -n : t.key === "ArrowRight" ? n : 0, a = t.key === "ArrowUp" ? -n : t.key === "ArrowDown" ? n : 0;
      for (const r of this.SelectedIds) {
        const i = this.objectWithId(r);
        i && (i.X += o, i.Y += a);
      }
      this.announceChange(), this.requestRendering();
      return;
    }
    (t.key === "Delete" || t.key === "Backspace") && this.SelectedIds.length > 0 && (t.preventDefault(), this.deleteSelection()), (t.ctrlKey || t.metaKey) && (t.key === "z" && (t.preventDefault(), t.shiftKey ? this.redo() : this.undo()), t.key === "c" && (t.preventDefault(), this.copySelection()), t.key === "x" && (t.preventDefault(), this.cutSelection()), t.key === "v" && (t.preventDefault(), this.pasteClipboard()), t.key === "d" && (t.preventDefault(), this.duplicateSelection()), t.key === "a" && (t.preventDefault(), this.selectAll()));
  };
  /**** #handleSelectPointerDown ****/
  #D(t, n) {
    const o = n.target;
    if (o.dataset?.handle && o.dataset?.id) {
      const r = this.objectWithId(o.dataset.id);
      if (r) {
        if (this.SelectedIds.includes(r.Id) || this.selectIds(n.shiftKey ? [...this.SelectedIds, r.Id] : [r.Id]), o.dataset.handle === "rotate") {
          const i = r.X + r.Width / 2, s = r.Y + r.Height / 2;
          this.DragState = {
            mode: "rotate",
            centerX: i,
            centerY: s,
            startAngle: Math.atan2(t.y - s, t.x - i),
            origins: this.SelectedIds.map((l) => {
              const c = this.objectWithId(l);
              return { Id: l, Rotation: c.Rotation };
            })
          };
        } else
          this.DragState = {
            mode: "resize",
            handle: o.dataset.handle,
            startX: t.x,
            startY: t.y,
            refX: r.X,
            refY: r.Y,
            refW: r.Width,
            refH: r.Height,
            origins: this.SelectedIds.map((i) => {
              const s = this.objectWithId(i);
              return { Id: i, X: s.X, Y: s.Y, Width: s.Width, Height: s.Height };
            })
          };
        return;
      }
    }
    const a = this.#m(t);
    if (a != null) {
      if (n.shiftKey && this.SelectedIds.includes(a.Id)) {
        this.selectIds(this.SelectedIds.filter((r) => r !== a.Id));
        return;
      }
      this.SelectedIds.includes(a.Id) || this.selectIds(n.shiftKey ? [...this.SelectedIds, a.Id] : [a.Id]), this.DragState = {
        mode: "move",
        startX: t.x,
        startY: t.y,
        origins: this.SelectedIds.map((r) => {
          const i = this.objectWithId(r);
          return { Id: r, X: i.X, Y: i.Y };
        })
      };
    } else
      n.shiftKey || this.clearSelection(), this.DragState = { mode: "rubberband", startX: t.x, startY: t.y };
  }
  /**** #hitTest ****/
  #m(t) {
    for (let n = this.ObjectList.length - 1; n >= 0; n--) {
      const o = this.ObjectList[n], a = t.x - (o.X + o.Width / 2), r = t.y - (o.Y + o.Height / 2), i = -o.Rotation * Math.PI / 180, s = a * Math.cos(i) - r * Math.sin(i) + o.Width / 2, l = a * Math.sin(i) + r * Math.cos(i) + o.Height / 2;
      if (s >= 0 && s <= o.Width && l >= 0 && l <= o.Height)
        return o;
    }
  }
  /**** pan drag ****/
  #c(t) {
    this.pan(t.movementX, t.movementY);
  }
  /**** rubberband ****/
  #h(t) {
    this.DragState.endX = t.x, this.DragState.endY = t.y, this.refreshOverlay();
  }
  #L(t) {
    const { startX: n, startY: o } = this.DragState, a = Math.min(n, t.x), r = Math.min(o, t.y), i = Math.max(n, t.x), s = Math.max(o, t.y), l = this.ObjectList.filter((c) => c.X + c.Width > a && c.X < i && c.Y + c.Height > r && c.Y < s).map((c) => c.Id);
    this.selectIds(l);
  }
  /**** object creation tools ****/
  setTool(t) {
    this.currentTool = t, this.DragState = void 0, N(
      'RealDrawEditor callback "onToolChange"',
      this.Callbacks.onToolChange,
      t
    );
  }
  /**** #handleCreatePointerDown ****/
  #S(t, n) {
    if (this.currentTool === "image")
      return;
    const o = this.snapped(t.x, t.y);
    this.DragState = {
      mode: "create",
      tool: this.currentTool,
      startX: o.x,
      startY: o.y,
      currentX: o.x,
      currentY: o.y,
      polygonPoints: this.currentTool === "polygon" ? [{ X: o.x, Y: o.y }] : void 0,
      previewObj: null
    };
  }
  /**** #handleCreatePointerMove ****/
  #M(t) {
    const n = this.DragState, o = this.snapped(t.x, t.y);
    n.currentX = o.x, n.currentY = o.y, this.refreshOverlay();
  }
  /**** #handleCreatePointerUp ****/
  #b(t) {
    const n = this.DragState, o = this.snapped(t.x, t.y), a = Math.min(n.startX, o.x), r = Math.min(n.startY, o.y), i = Math.abs(o.x - n.startX), s = Math.abs(o.y - n.startY);
    if (n.tool === "polygon") {
      n.polygonPoints.push({ X: o.x, Y: o.y });
      return;
    }
    const l = 4;
    if (i < l && s < l && n.tool !== "text")
      return;
    let c;
    switch (n.tool) {
      case "rect":
        c = this.addObject({ Type: "rect", X: a, Y: r, Width: i || l, Height: s || l });
        break;
      case "ellipse":
        c = this.addObject({ Type: "ellipse", X: a, Y: r, Width: i || l, Height: s || l });
        break;
      case "text":
        this.#y(o.x, o.y);
        return;
    }
    c && this.selectIds([c.Id]);
  }
  /**** #requestTextAndCreate ****/
  async #y(t, n) {
    const a = await (this.Callbacks.onTextRequest ?? ((i) => window.prompt("Text:", i)))("");
    if (!a)
      return;
    const r = this.addObject({ Type: "text", X: t, Y: n, Text: a });
    this.selectIds([r.Id]), this.announceChange();
  }
  /**** finishPolygon - called externally (e.g. double-click or Enter) ****/
  finishPolygon() {
    if (this.DragState?.mode !== "create" || this.DragState.tool !== "polygon")
      return;
    const t = this.DragState.polygonPoints;
    if (t.length < 3) {
      this.DragState = void 0;
      return;
    }
    const n = t.map((c) => c.X), o = t.map((c) => c.Y), a = Math.min(...n), r = Math.min(...o), i = Math.max(...n) - a, s = Math.max(...o) - r, l = this.addObject({ Type: "polygon", X: a, Y: r, Width: i || 1, Height: s || 1, Points: t });
    this.DragState = void 0, this.selectIds([l.Id]);
  }
  /**** move ****/
  #o(t) {
    const n = this.DragState, o = t.x - n.startX, a = t.y - n.startY;
    for (const { Id: r, X: i, Y: s } of n.origins) {
      const l = this.objectWithId(r);
      if (l == null)
        continue;
      const c = this.snapped(i + o, s + a);
      l.X = c.x, l.Y = c.y;
    }
    this.requestRendering();
  }
  /**** resize ****/
  #x(t) {
    const n = this.DragState, o = t.x - n.startX, a = t.y - n.startY;
    let { refX: r, refY: i, refW: s, refH: l } = n;
    switch (n.handle) {
      case "nw":
        r += o, i += a, s -= o, l -= a;
        break;
      case "n":
        i += a, l -= a;
        break;
      case "ne":
        i += a, s += o, l -= a;
        break;
      case "e":
        s += o;
        break;
      case "se":
        s += o, l += a;
        break;
      case "s":
        l += a;
        break;
      case "sw":
        r += o, s -= o, l += a;
        break;
      case "w":
        r += o, s -= o;
        break;
    }
    if ((n.handle === "nw" || n.handle === "ne" || n.handle === "se" || n.handle === "sw") && n.refW > 0 && n.refH > 0) {
      const g = n.refW / n.refH;
      Math.abs(s - n.refW) >= Math.abs(l - n.refH) * g ? (l = s / g, n.handle.includes("n") && (i = n.refY + n.refH - l)) : (s = l * g, n.handle.includes("w") && (r = n.refX + n.refW - s));
    }
    const d = 4;
    s < d && (s = d, n.handle.includes("w") && (r = n.refX + n.refW - d)), l < d && (l = d, n.handle.includes("n") && (i = n.refY + n.refH - d));
    const u = r - n.refX, p = i - n.refY, h = s - n.refW, f = l - n.refH;
    for (const g of n.origins) {
      const x = this.objectWithId(g.Id);
      if (x == null)
        continue;
      const m = this.snapped(g.X + u, g.Y + p);
      x.X = m.x, x.Y = m.y, x.Width = Math.max(d, g.Width + h), x.Height = Math.max(d, g.Height + f);
    }
    this.requestRendering();
  }
  /**** rotate ****/
  #$(t, n) {
    const o = this.DragState;
    let r = (Math.atan2(t.y - o.centerY, t.x - o.centerX) - o.startAngle) * 180 / Math.PI;
    (n.shiftKey || this.snapToGrid) && (r = Math.round(r / 15) * 15);
    for (const { Id: i, Rotation: s } of o.origins) {
      const l = this.objectWithId(i);
      l && (l.Rotation = ((s + r) % 360 + 360) % 360);
    }
    this.requestRendering();
  }
  /**** rotateSelection ****/
  rotateSelection(t) {
    for (const n of this.SelectedIds) {
      const o = this.objectWithId(n);
      o && (o.Rotation = (o.Rotation + t) % 360);
    }
    this.announceChange(), this.requestRendering();
  }
  /**** selection ****/
  SelectedIds = [];
  /**** selectIds ****/
  selectIds(t) {
    this.SelectedIds = t.filter((n) => this.objectWithId(n) != null), N(
      'RealDrawEditor callback "onSelectionChange"',
      this.Callbacks.onSelectionChange,
      [...this.SelectedIds]
    ), this.refreshOverlay();
  }
  /**** selectAll ****/
  selectAll() {
    this.selectIds(this.ObjectList.map((t) => t.Id));
  }
  /**** clearSelection ****/
  clearSelection() {
    this.selectIds([]);
  }
  /**** deleteSelection ****/
  deleteSelection() {
    const t = [...this.SelectedIds];
    this.clearSelection();
    for (const n of t)
      this.removeObject(n);
    this.announceChange();
  }
  /**** text tool ****/
  insertText(t, n, o) {
    const a = this.addObject({ Type: "text", X: n, Y: o, Text: t });
    return this.selectIds([a.Id]), a;
  }
  /**** #requestTextEdit - opens dialog for an existing text object ****/
  async #w(t) {
    const o = await (this.Callbacks.onTextRequest ?? ((a) => window.prompt("Text:", a)))(t.Text ?? "");
    o != null && (this.configureObject(t.Id, { Text: o }), this.announceChange());
  }
  /**** clipboard ****/
  #e = [];
  /**** copySelection ****/
  copySelection() {
    this.#e = this.SelectedIds.map((t) => this.objectWithId(t)).filter((t) => t != null).map((t) => JSON.parse(JSON.stringify(t)));
  }
  /**** cutSelection ****/
  cutSelection() {
    this.copySelection(), this.deleteSelection();
  }
  /**** pasteClipboard ****/
  pasteClipboard() {
    if (this.#e.length === 0)
      return;
    const t = [];
    for (const n of this.#e) {
      const o = this.addObject({ ...n, X: n.X + 10, Y: n.Y + 10 });
      t.push(o.Id);
    }
    this.selectIds(t);
  }
  /**** duplicateSelection ****/
  duplicateSelection() {
    this.copySelection(), this.pasteClipboard();
  }
  /**** z-order ****/
  bringToFront() {
    for (const t of this.SelectedIds) {
      const n = this.ObjectList.findIndex((o) => o.Id === t);
      n >= 0 && this.ObjectList.push(...this.ObjectList.splice(n, 1));
    }
    this.announceChange(), this.requestRendering();
  }
  sendToBack() {
    for (const t of [...this.SelectedIds].reverse()) {
      const n = this.ObjectList.findIndex((o) => o.Id === t);
      n >= 0 && this.ObjectList.unshift(...this.ObjectList.splice(n, 1));
    }
    this.announceChange(), this.requestRendering();
  }
  raiseSelection() {
    for (const t of [...this.SelectedIds].reverse()) {
      const n = this.ObjectList.findIndex((o) => o.Id === t);
      if (n >= 0 && n < this.ObjectList.length - 1) {
        const o = this.ObjectList[n];
        this.ObjectList[n] = this.ObjectList[n + 1], this.ObjectList[n + 1] = o;
      }
    }
    this.announceChange(), this.requestRendering();
  }
  lowerSelection() {
    for (const t of this.SelectedIds) {
      const n = this.ObjectList.findIndex((o) => o.Id === t);
      if (n > 0) {
        const o = this.ObjectList[n];
        this.ObjectList[n] = this.ObjectList[n - 1], this.ObjectList[n - 1] = o;
      }
    }
    this.announceChange(), this.requestRendering();
  }
  /**** grouping - groups are represented as a single 'rect' object with    ****/
  /**** a special 'GroupMembers' extra property (lightweight implementation) ****/
  groupSelection() {
    if (this.SelectedIds.length < 2)
      return;
    const t = this.SelectedIds.map((p) => this.objectWithId(p)).filter((p) => p != null), n = t.map((p) => p.X), o = t.map((p) => p.Y), a = t.map((p) => p.X + p.Width), r = t.map((p) => p.Y + p.Height), i = Math.min(...n), s = Math.min(...o), l = Math.max(...a) - i, c = Math.max(...r) - s, d = t.map((p) => ({
      ...p,
      Effects: p.Effects.map((h) => ({ ...h })),
      ...p.Points ? { Points: p.Points.map((h) => ({ ...h })) } : {}
    })), u = this.addObject({
      Type: "rect",
      X: i,
      Y: s,
      Width: l,
      Height: c,
      FillColor: "none",
      StrokeColor: "none",
      StrokeWidth: 0
    });
    u.GroupMembers = d;
    for (const p of this.SelectedIds)
      this.removeObject(p);
    this.selectIds([u.Id]), this.announceChange();
  }
  ungroupSelection() {
    const t = [];
    for (const n of this.SelectedIds) {
      const o = this.objectWithId(n);
      if (!o?.GroupMembers) {
        t.push(n);
        continue;
      }
      for (const a of o.GroupMembers) {
        const r = this.addObject(a);
        t.push(r.Id);
      }
      this.removeObject(n);
    }
    this.selectIds(t), this.announceChange();
  }
  /**** change history (undo / redo) ****/
  Snapshots = ["[]"];
  SnapshotIndex = 0;
  /**** captureSnapshot ****/
  captureSnapshot() {
    const t = JSON.stringify(this.ObjectList);
    t !== this.Snapshots[this.SnapshotIndex] && (this.Snapshots.splice(this.SnapshotIndex + 1), this.Snapshots.push(t), this.Snapshots.length > 100 ? this.Snapshots.shift() : this.SnapshotIndex++, this.announceUndoState());
  }
  /**** undo ****/
  undo() {
    this.canUndo() && (this.SnapshotIndex--, this.#l(), this.announceUndoState());
  }
  /**** redo ****/
  redo() {
    this.canRedo() && (this.SnapshotIndex++, this.#l(), this.announceUndoState());
  }
  /**** canUndo / canRedo ****/
  canUndo() {
    return this.SnapshotIndex > 0;
  }
  canRedo() {
    return this.SnapshotIndex < this.Snapshots.length - 1;
  }
  /**** #restoreSnapshot ****/
  #l() {
    this.#I(JSON.parse(this.Snapshots[this.SnapshotIndex]));
  }
  // "#adoptObjectList" s. "Import and Export"
  /**** announceUndoState ****/
  announceUndoState() {
    N(
      'RealDrawEditor callback "onUndoStateChange"',
      this.Callbacks.onUndoStateChange,
      this.canUndo(),
      this.canRedo()
    );
  }
  /**** announceChange ****/
  announceChange() {
    this.captureSnapshot(), N(
      'RealDrawEditor callback "onValueChange"',
      this.Callbacks.onValueChange,
      this.getValue()
    );
  }
  /**** getValue - serialises the scene to a JSON string ****/
  getValue() {
    return JSON.stringify(this.ObjectList);
  }
  /**** #adoptObjectList - installs a new scene, rebuilds derived state ****/
  // shared by "setValue" and "#restoreSnapshot" (see "Change History")
  #I(t) {
    this.ObjectList = t, this.#d = t.reduce((n, o) => {
      const a = parseInt(o.Id.replace(/^obj-/, ""), 10);
      return isNaN(a) ? n : Math.max(n, a);
    }, 0), this.SelectedIds = this.SelectedIds.filter((n) => this.objectWithId(n) != null), this.#t.clear();
    for (const n of this.ObjectList)
      n.Type === "image" && this.loadImageForObject(n);
    this.requestRendering();
  }
  /**** setValue - replaces the scene without firing "onValueChange" ****/
  setValue(t) {
    Ye("scene value", t);
    let n = [];
    if (t.trim() !== "") {
      try {
        n = JSON.parse(t);
      } catch {
        ce("InvalidArgument: the given value is not valid JSON");
      }
      Array.isArray(n) || ce("InvalidArgument: the given value is not a JSON array");
    }
    this.SelectedIds = [], this.#I(n), this.Snapshots = [t.trim() === "" ? "[]" : t], this.SnapshotIndex = 0, this.announceUndoState();
  }
  /**** importImage - adds an image object from a data URL or Blob ****/
  async importImage(t) {
    let n;
    t instanceof Blob ? n = await new Promise((a) => {
      const r = new FileReader();
      r.onload = () => a(r.result), r.readAsDataURL(t);
    }) : n = t;
    const o = this.addObject({
      Type: "image",
      X: 0,
      Y: 0,
      Width: this.Width,
      Height: this.Height,
      ImageData: n
    });
    return this.selectIds([o.Id]), o;
  }
  /**** exportedBlob - flattens the scene to a Blob ****/
  exportedBlob(t = "image/png") {
    const n = new OffscreenCanvas(this.Width, this.Height), o = n.getContext("2d");
    o.fillStyle = "#ffffff", o.fillRect(0, 0, this.Width, this.Height);
    const a = this.Viewport;
    this.Viewport = { ox: 0, oy: 0, scale: 1 };
    for (const r of this.ObjectList)
      r.Opacity > 0 && this.#r(o, r);
    return this.Viewport = a, n.convertToBlob({ type: t });
  }
  destroy() {
    this.Canvas?.removeEventListener("pointerdown", this.#p), this.Overlay?.removeEventListener("pointerdown", this.#p), this.Canvas?.removeEventListener("pointermove", this.#C), this.Canvas?.removeEventListener("pointerup", this.#k), this.Canvas?.removeEventListener("dblclick", this.#j), window.removeEventListener("keydown", this.#g);
  }
}
function Ot(e, t) {
  switch (e.beginPath(), t.Type) {
    case "rect":
      e.rect(t.X, t.Y, t.Width, t.Height);
      break;
    case "ellipse":
      e.ellipse(
        t.X + t.Width / 2,
        t.Y + t.Height / 2,
        t.Width / 2,
        t.Height / 2,
        0,
        0,
        Math.PI * 2
      );
      break;
    case "polygon":
      if ((t.Points?.length ?? 0) >= 2) {
        e.moveTo(t.Points[0].X, t.Points[0].Y);
        for (let n = 1; n < t.Points.length; n++)
          e.lineTo(t.Points[n].X, t.Points[n].Y);
        e.closePath();
      }
      break;
  }
}
let Qr = !1;
function Np() {
  Qr || (Qr = !0, ft.registerEffect({
    Type: "DropShadow",
    Label: "Drop Shadow",
    Phase: "before",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "rgba(0,0,0,0.5)" },
      { Name: "Angle", Type: "angle", Label: "Winkel", Default: 135, Min: 0, Max: 360 },
      { Name: "Distance", Type: "number", Label: "Abstand", Default: 5, Min: 0, Max: 200 },
      { Name: "Blur", Type: "number", Label: "Weichheit", Default: 5, Min: 0, Max: 100 }
    ],
    render(e, t, n) {
      const o = (n.Angle ?? 135) * Math.PI / 180, a = n.Distance ?? 5;
      e.save(), e.shadowColor = n.Color ?? "rgba(0,0,0,0.5)", e.shadowBlur = n.Blur ?? 5, e.shadowOffsetX = Math.cos(o) * a, e.shadowOffsetY = Math.sin(o) * a, Ot(e, t), e.fillStyle = "#000", e.fill(), e.restore();
    }
  }), ft.registerEffect({
    Type: "OuterGlow",
    Label: "Outer Glow",
    Phase: "before",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "rgba(255,255,0,0.8)" },
      { Name: "Blur", Type: "number", Label: "Weichheit", Default: 10, Min: 0, Max: 100 },
      { Name: "Spread", Type: "number", Label: "Ausdehnung", Default: 0, Min: 0, Max: 50 }
    ],
    render(e, t, n) {
      e.save(), e.shadowColor = n.Color ?? "rgba(255,255,0,0.8)", e.shadowBlur = n.Blur ?? 10, e.shadowOffsetX = 0, e.shadowOffsetY = 0, Ot(e, t), e.fillStyle = n.Color ?? "rgba(255,255,0,0.8)", e.fill(), e.restore();
    }
  }), ft.registerEffect({
    Type: "ColorOverlay",
    Label: "Color Overlay",
    Phase: "overlay",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "#ff0000" },
      { Name: "Opacity", Type: "number", Label: "Deckkraft", Default: 1, Min: 0, Max: 1 }
    ],
    render(e, t, n) {
      e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = n.Opacity ?? 1, Ot(e, t), e.fillStyle = n.Color ?? "#ff0000", e.fill(), e.restore();
    }
  }), ft.registerEffect({
    Type: "GradientOverlay",
    Label: "Gradient Overlay",
    Phase: "overlay",
    Parameters: [
      { Name: "StartColor", Type: "color", Label: "Startfarbe", Default: "#ff0000" },
      { Name: "EndColor", Type: "color", Label: "Endfarbe", Default: "#0000ff" },
      { Name: "GradientAngle", Type: "angle", Label: "Winkel", Default: 0, Min: 0, Max: 360 },
      { Name: "Opacity", Type: "number", Label: "Deckkraft", Default: 1, Min: 0, Max: 1 }
    ],
    render(e, t, n) {
      const o = (n.GradientAngle ?? 0) * Math.PI / 180, a = t.X + t.Width / 2, r = t.Y + t.Height / 2, i = Math.sqrt(t.Width ** 2 + t.Height ** 2) / 2, s = e.createLinearGradient(
        a - Math.cos(o) * i,
        r - Math.sin(o) * i,
        a + Math.cos(o) * i,
        r + Math.sin(o) * i
      );
      s.addColorStop(0, n.StartColor ?? "#ff0000"), s.addColorStop(1, n.EndColor ?? "#0000ff"), e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = n.Opacity ?? 1, Ot(e, t), e.fillStyle = s, e.fill(), e.restore();
    }
  }), ft.registerEffect({
    Type: "Stroke",
    Label: "Stroke",
    Phase: "after",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "#000000" },
      { Name: "Width", Type: "number", Label: "Breite", Default: 2, Min: 0.5, Max: 50 },
      {
        Name: "Position",
        Type: "select",
        Label: "Position",
        Default: "outside",
        Options: ["outside", "inside", "center"]
      }
    ],
    render(e, t, n) {
      const o = n.Width ?? 2, a = n.Position ?? "outside";
      e.save(), a !== "center" && (e.globalCompositeOperation = a === "outside" ? "destination-over" : "source-atop"), Ot(e, t), e.strokeStyle = n.Color ?? "#000000", e.lineWidth = a === "center" ? o : o * 2, e.stroke(), e.restore();
    }
  }), ft.registerEffect({
    Type: "InnerGlow",
    Label: "Inner Glow",
    Phase: "after",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "rgba(255,255,255,0.8)" },
      { Name: "Blur", Type: "number", Label: "Weichheit", Default: 8, Min: 0, Max: 100 },
      { Name: "Spread", Type: "number", Label: "Ausdehnung", Default: 0, Min: 0, Max: 50 }
    ],
    render(e, t, n, o) {
      const a = o.getContext("2d");
      a.clearRect(0, 0, o.width, o.height), a.save(), a.shadowColor = n.Color ?? "rgba(255,255,255,0.8)", a.shadowBlur = n.Blur ?? 8, a.shadowOffsetX = 0, a.shadowOffsetY = 0, Ot(a, t), a.fillStyle = n.Color ?? "rgba(255,255,255,0.8)", a.fill(), a.restore(), e.save(), e.globalCompositeOperation = "source-atop", e.drawImage(o, 0, 0), e.restore();
    }
  }), ft.registerEffect({
    Type: "InnerShadow",
    Label: "Inner Shadow",
    Phase: "after",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "rgba(0,0,0,0.5)" },
      { Name: "Angle", Type: "angle", Label: "Winkel", Default: 135, Min: 0, Max: 360 },
      { Name: "Distance", Type: "number", Label: "Abstand", Default: 5, Min: 0, Max: 100 },
      { Name: "Blur", Type: "number", Label: "Weichheit", Default: 5, Min: 0, Max: 100 }
    ],
    render(e, t, n, o) {
      const a = (n.Angle ?? 135) * Math.PI / 180, r = n.Distance ?? 5, i = o.getContext("2d");
      i.clearRect(0, 0, o.width, o.height), Ot(i, t), i.fill(), i.save(), i.globalCompositeOperation = "source-out", i.shadowColor = n.Color ?? "rgba(0,0,0,0.5)", i.shadowBlur = n.Blur ?? 5, i.shadowOffsetX = Math.cos(a) * r, i.shadowOffsetY = Math.sin(a) * r, Ot(i, t), i.fill(), i.restore(), e.save(), e.globalCompositeOperation = "source-atop", e.drawImage(o, 0, 0), e.restore();
    }
  }));
}
function Bp(e) {
  return K(() => {
    vs(), e = U(e);
    const t = S(e.Class) ?? "";
    let n = ae(e.Value);
    const o = ve(e.Width) ?? 800, a = ve(e.Height) ?? 600, r = J(e.readonly) ?? !1, i = J(e.disabled) ?? !1, s = S(e.Tool) ?? "select", l = Et(e.GridSize, 0.01, 1e3) ?? 10, c = J(e.snapToGrid) ?? !1, d = J(e.showGrid) ?? !1, u = Array.isArray(e.extraEffects) ? e.extraEffects : [], p = A(e.onValueChange), h = A(e.onSelectionChange), f = A(e.onToolChange), g = A(e.onUndoStateChange), x = A(e.onTextRequest), m = A(e.onMount), C = A(e.onUnmount), k = q(null), L = q(void 0), $ = q({});
    $.current = {
      onValueChange: p,
      onSelectionChange: h,
      onToolChange: f,
      onUndoStateChange: g,
      onTextRequest: x,
      onUnmount: C
    };
    const y = q(n ?? ""), w = q(n ?? "");
    return n != null && n !== y.current && (y.current = n, w.current = n), Ce(() => {
      const O = k.current, T = document.createElement("canvas");
      O.appendChild(T);
      const j = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      j.setAttribute("class", "jcl-rde-overlay"), O.appendChild(j), u.forEach((V) => ft.registerEffect(V));
      const I = new ft();
      if (I.Callbacks = {
        ...Lg($, [
          // s. "auxiliary functions"
          "onSelectionChange",
          "onToolChange",
          "onUndoStateChange",
          "onTextRequest"
        ]),
        onValueChange: (V) => {
          w.current = V, $.current.onValueChange?.(V);
        }
      }, I.initialiseScene(o, a), I.attachTo(T, j), n != null)
        try {
          I.setValue(n);
        } catch {
        }
      L.current = I;
      const M = new ResizeObserver(() => I.resizeViewCanvas());
      return M.observe(O), N('RealDrawEditor callback "onMount"', m, {
        Editor: I,
        getValue: () => I.getValue(),
        setValue: (V) => I.setValue(V),
        Tool: () => I.currentTool,
        setTool: (V) => I.setTool(V),
        ObjectList: () => [...I.ObjectList],
        addObject: (V) => I.addObject(V),
        removeObject: (V) => I.removeObject(V),
        configureObject: (V, B) => I.configureObject(V, B),
        SelectedIds: () => I.SelectedIds,
        select: (V) => I.selectIds(V),
        selectAll: () => I.selectAll(),
        deselectAll: () => I.clearSelection(),
        deleteSelection: () => I.deleteSelection(),
        bringToFront: () => I.bringToFront(),
        sendToBack: () => I.sendToBack(),
        raise: () => I.raiseSelection(),
        lower: () => I.lowerSelection(),
        group: () => I.groupSelection(),
        ungroup: () => I.ungroupSelection(),
        copy: () => I.copySelection(),
        cut: () => I.cutSelection(),
        paste: () => I.pasteClipboard(),
        duplicate: () => I.duplicateSelection(),
        undo: () => I.undo(),
        canUndo: () => I.canUndo(),
        redo: () => I.redo(),
        canRedo: () => I.canRedo(),
        ZoomFactor: () => I.ZoomFactor,
        setZoom: (V) => I.setZoom(V),
        zoomToFit: () => I.zoomToFit(),
        importImage: (V) => I.importImage(V),
        exportedBlob: (V) => I.exportedBlob(V),
        insertText: (V, B, Y) => I.insertText(V, B, Y)
      }), () => {
        N(
          'RealDrawEditor callback "onUnmount"',
          $.current.onUnmount
        ), M.disconnect(), L.current = void 0, I.destroy(), T.remove(), j.remove();
      };
    }, []), Ce(() => {
      const O = L.current;
      O != null && Ep.includes(s) && O.setTool(s);
    }, [s]), Ce(() => {
      const O = L.current;
      O != null && (O.readonly = r, r && (O.DragState = void 0));
    }, [r]), Ce(() => {
      const O = L.current;
      O != null && (O.GridSize = l, O.snapToGrid = c, O.showsGrid = d, O.requestRendering());
    }, [l, c, d]), Ce(() => {
      const O = L.current;
      if (!(O == null || n == null) && n !== w.current) {
        w.current = n;
        try {
          O.setValue(n);
        } catch (T) {
          console.warn("RealDrawEditor: invalid value given", T);
        }
      }
    }, [n]), b`<div
        class="jcl-component realdraweditor ${i ? "disabled" : ""} ${t}"
        ...${e.RestProps} ref=${k}
      />`;
  });
}
const vs = /* @__PURE__ */ Z("jcl-component.realdraweditor", `
    .jcl-component.realdraweditor {
      display:block !important;
      position:relative; overflow:hidden;
      border:solid 1px #888888; border-radius:2px;
      background:#404040; touch-action:none;
    }
    .jcl-component.realdraweditor > canvas {
      display:block; position:absolute; top:0; left:0; width:100%; height:100%;
    }
    .jcl-component.realdraweditor > .jcl-rde-overlay {
      position:absolute; top:0; left:0; width:100%; height:100%;
      pointer-events:none; overflow:hidden;
    }
    .jcl-component.realdraweditor .jcl-rde-frame {
      fill:none; stroke:#6366f1; stroke-dasharray:4 3;
    }
    .jcl-component.realdraweditor .jcl-rde-handle {
      fill:white; stroke:#6366f1; pointer-events:all;
    }
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="nw"],
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="se"] { cursor:nwse-resize }
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="ne"],
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="sw"] { cursor:nesw-resize }
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="n"],
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="s"]  { cursor:ns-resize }
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="e"],
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="w"]  { cursor:ew-resize }
    .jcl-component.realdraweditor .jcl-rde-handle[data-handle="rotate"] { cursor:grab }
    .jcl-component.realdraweditor.disabled { opacity:0.6; pointer-events:none; }
    @media (prefers-contrast: more) {
      .jcl-component.realdraweditor:focus { outline:solid 3px currentColor }
    }
  `), Vo = 80, Eo = 50;
function Wp(e) {
  return "" + e.Key;
}
function po(e) {
  let t = "";
  return e.FontFamily != null && (t += `font-family:${e.FontFamily}; `), e.FontSize != null && (t += `font-size:${e.FontSize}px; `), e.FontWeight != null && (t += `font-weight:${e.FontWeight}; `), e.LineHeight != null && (t += `line-height:${e.LineHeight}; `), e.ForegroundColor != null && (t += `color:${e.ForegroundColor}; `), e.BackgroundColor != null && (t += `background-color:${e.BackgroundColor}; `), t;
}
function Cs(e) {
  if (e.key !== "Tab" || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey)
    return;
  const t = e.target;
  if (!(t instanceof HTMLTextAreaElement) || t.readOnly || t.disabled)
    return;
  e.preventDefault();
  let n = !1;
  try {
    n = document.execCommand("insertText", !1, "	");
  } catch {
  }
  if (!n) {
    const { selectionStart: o, selectionEnd: a, value: r } = t;
    t.value = r.slice(0, o) + "	" + r.slice(a), t.selectionStart = t.selectionEnd = o + 1, t.dispatchEvent(new InputEvent("input", { bubbles: !0 }));
  }
}
function Hp(e, t, n) {
  return (o, a) => {
    const r = {
      Content: o.Content ?? "",
      onContentChange: n == null ? void 0 : ((i) => N(
        'NoteBoard callback "onNoteContentChange"',
        n,
        e(o),
        i
      )),
      FontFamily: o.FontFamily ?? t.FontFamily,
      FontSize: o.FontSize ?? t.FontSize,
      FontWeight: o.FontWeight ?? t.FontWeight,
      LineHeight: o.LineHeight ?? t.LineHeight,
      ForegroundColor: o.ForegroundColor ?? t.ForegroundColor,
      BackgroundColor: o.BackgroundColor ?? t.BackgroundColor
    };
    switch (o.Type) {
      case "html":
        return b`<${or}     ...${r}/>`;
      case "markdown":
        return b`<${js} ...${r}/>`;
      default:
        return b`<${ks}     ...${r}/>`;
    }
  };
}
function _p(e) {
  return K(() => {
    Kp(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Notes, (oe) => je(oe, De)) ?? Se("Notes"), o = A(e.KeyOfNote) ?? Wp, a = ve(e.PaneWidth), r = ve(e.PaneHeight), i = S(e.DefaultFontFamily), s = _e(e.DefaultFontSize), l = E(e.DefaultFontWeight, (oe) => wt(oe) || Ne(oe)), c = _e(e.DefaultLineHeight), d = S(e.DefaultForegroundColor), u = S(e.DefaultBackgroundColor);
    let p = E(e.selectedKeys, (oe) => je(oe, rt)) ?? [];
    const h = A(e.onSelectionChange), f = A(e.onNotesChange), g = A(e.onNoteContentChange), x = ve(e.SensorWidth) ?? 20, m = ve(e.maxPanningSpeed) ?? 400, C = h != null, k = f != null, L = {
      FontFamily: i,
      FontSize: s,
      FontWeight: l,
      LineHeight: c,
      ForegroundColor: d,
      BackgroundColor: u
    }, $ = A(e.NoteRenderer) ?? Hp(o, L, g), y = n.map((oe) => String(
      He('NoteBoard callback "KeyOfNote"', o, oe)
    )), w = qs(y, '"Notes"'), O = /* @__PURE__ */ new Set();
    C && (p = Un(p, w), p.forEach((oe) => O.add(oe)));
    function T(oe, ee) {
      let re;
      return ee ? re = O.has(oe) ? p.filter(
        (ie) => ie !== oe
      ) : [...p, oe] : re = [oe], N(
        'NoteBoard callback "onSelectionChange"',
        h,
        re
      ), re;
    }
    const j = q(null), I = q(void 0), M = tt();
    Ce(() => () => {
      const oe = I.current;
      oe != null && (oe.ChangeRAF != null && cancelAnimationFrame(oe.ChangeRAF), oe.PanningRAF != null && cancelAnimationFrame(oe.PanningRAF), I.current = void 0);
    }, []);
    function D(oe) {
      const { Mode: ee, dx: re, dy: ie } = I.current, { x: me, y: ge, Width: Ie, Height: Me } = oe;
      return ee === "move" ? {
        x: Pe(me + re, 0, Ge - Ie),
        y: Pe(ge + ie, 0, Je - Me),
        Width: Ie,
        Height: Me
      } : {
        // in "DialogView"s resizing logic
        x: me,
        y: ge,
        Width: Pe(Ie + re, Vo, Ge - me),
        Height: Pe(Me + ie, Eo, Je - ge)
      };
    }
    function V(oe, ee) {
      const re = I.current?.StartGeometryByKey[ee];
      return re == null ? {
        x: oe.Position.x,
        y: oe.Position.y,
        Width: oe.Size.Width,
        Height: oe.Size.Height
      } : D(re);
    }
    function B() {
      const oe = I.current;
      if (oe == null)
        return [];
      const ee = [];
      return n.forEach((re, ie) => {
        const me = oe.StartGeometryByKey[y[ie]];
        if (me != null) {
          const { x: ge, y: Ie, Width: Me, Height: Ae } = D(me);
          ee.push({ ...re, Position: { x: ge, y: Ie }, Size: { Width: Me, Height: Ae } });
        }
      }), ee;
    }
    function Y() {
      const oe = I.current;
      oe == null || oe.ChangeRAF != null || (oe.ChangeRAF = requestAnimationFrame(() => {
        const ee = I.current;
        if (ee == null)
          return;
        ee.ChangeRAF = void 0;
        const re = B();
        re.length > 0 && N(
          'NoteBoard callback "onNotesChange"',
          f,
          re
        );
      }));
    }
    function Q(oe, ee, re) {
      let ie = [ee];
      if (C) {
        let ge = p;
        if (!O.has(ee)) {
          const Ie = sn(re);
          ge = T(ee, Ie);
        }
        ge.includes(ee) && (ie = ge);
      }
      const me = {};
      n.forEach((ge, Ie) => {
        ie.includes(y[Ie]) && (me[y[Ie]] = {
          x: ge.Position.x,
          y: ge.Position.y,
          Width: ge.Size.Width,
          Height: ge.Size.Height
        });
      }), I.current = {
        Mode: oe,
        StartGeometryByKey: me,
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, M();
    }
    function pe(oe, ee, re) {
      const ie = I.current;
      ie != null && (ie.dx = oe, ie.dy = ee, re != null && (ie.lastClientX = re.clientX, ie.lastClientY = re.clientY), ie.Mode === "move" && ie.PanningRAF == null && (ie.PanningTimestamp = void 0, ie.PanningRAF = requestAnimationFrame(
        (me) => ue.current?.(me)
      )), M(), Y());
    }
    function P(oe, ee) {
      const re = I.current;
      if (re == null)
        return;
      re.dx = oe, re.dy = ee, re.ChangeRAF != null && cancelAnimationFrame(re.ChangeRAF), re.PanningRAF != null && cancelAnimationFrame(re.PanningRAF);
      const ie = B();
      I.current = void 0, ie.length > 0 && N(
        // the final, non-throttled batch update
        'NoteBoard callback "onNotesChange"',
        f,
        ie
      ), M();
    }
    function X() {
      const oe = I.current;
      if (oe == null)
        return;
      oe.ChangeRAF != null && cancelAnimationFrame(oe.ChangeRAF), oe.PanningRAF != null && cancelAnimationFrame(oe.PanningRAF);
      const ee = [];
      n.forEach((re, ie) => {
        const me = oe.StartGeometryByKey[y[ie]];
        if (me != null) {
          const { x: ge, y: Ie, Width: Me, Height: Ae } = me;
          ee.push({ ...re, Position: { x: ge, y: Ie }, Size: { Width: Me, Height: Ae } });
        }
      }), I.current = void 0, ee.length > 0 && N(
        'NoteBoard callback "onNotesChange"',
        f,
        ee
      ), M();
    }
    function te(oe) {
      const ee = I.current, re = j.current;
      if (ee == null || ee.Mode !== "move" || re == null)
        return;
      const { lastClientX: ie, lastClientY: me } = ee;
      if (ie == null || me == null) {
        ee.PanningRAF = void 0, ee.PanningTimestamp = void 0;
        return;
      }
      const { vx: ge, vy: Ie } = Xs(
        re.getBoundingClientRect(),
        ie,
        me,
        x,
        m
      );
      if (ge === 0 && Ie === 0) {
        ee.PanningRAF = void 0, ee.PanningTimestamp = void 0;
        return;
      }
      const Me = Ys(ee, oe), Ae = re.scrollLeft, st = re.scrollTop;
      re.scrollLeft = Ae + ge * Me, re.scrollTop = st + Ie * Me, ee.dx += re.scrollLeft - Ae, ee.dy += re.scrollTop - st, M(), xe.current?.(), ee.PanningRAF = requestAnimationFrame(
        (we) => ue.current?.(we)
      );
    }
    const ue = q();
    ue.current = te;
    const xe = q();
    xe.current = Y;
    const ze = Di(j), Ge = a ?? ze.Width, Je = r ?? ze.Height;
    function it(oe) {
      return po({
        FontFamily: oe.FontFamily ?? i,
        FontSize: oe.FontSize ?? s,
        FontWeight: oe.FontWeight ?? l,
        LineHeight: oe.LineHeight ?? c,
        ForegroundColor: oe.ForegroundColor ?? d,
        BackgroundColor: oe.BackgroundColor ?? u
      });
    }
    return b`<div
        class="jcl-component noteboard ${t}"
        ref=${j} ...${e.RestProps}
      >
        <div class="notepane"
          style="width:${Ge}px; height:${Je}px"
        >
          ${n.map((oe, ee) => {
      const re = y[ee], ie = O.has(re);
      return b`<${Gp} key=${re}
              NoteKey=${re} Geometry=${V(oe, re)}
              isSelected=${ie} isSelectable=${C}
              isDraggable=${k} NoteStyle=${it(oe)}
              ScrollerOf=${() => j.current}
              renderedContent=${He(
        'NoteBoard callback "NoteRenderer"',
        $,
        oe,
        ie
      )}
              onNoteClick=${(me, ge, Ie) => T(
        re,
        sn(Ie)
      )}
              onMoveStart=${(me, ge, Ie, Me, Ae) => Q("move", re, Ae)}
              onMoveContinuation=${(me, ge, Ie, Me, Ae) => pe(me, ge, Ae)}
              onMoveFinish=${(me, ge) => P(me, ge)}
              onMoveCancellation=${() => X()}
              onResizeStart=${(me, ge, Ie, Me, Ae) => Q("resize", re, Ae)}
              onResizeContinuation=${(me, ge, Ie, Me, Ae) => pe(me, ge, Ae)}
              onResizeFinish=${(me, ge) => P(me, ge)}
              onResizeCancellation=${() => X()}
            />`;
    })}
        </>
      </>`;
  });
}
function Gp(e) {
  const {
    NoteKey: t,
    Geometry: n,
    isSelected: o,
    isSelectable: a,
    isDraggable: r,
    NoteStyle: i,
    ScrollerOf: s,
    renderedContent: l,
    onNoteClick: c,
    onMoveStart: d,
    onMoveContinuation: u,
    onMoveFinish: p,
    onMoveCancellation: h,
    onResizeStart: f,
    onResizeContinuation: g,
    onResizeFinish: x,
    onResizeCancellation: m
  } = e, C = q(null), k = Rn({
    ViewRef: C,
    Container: s,
    onlyFrom: ".titlebar",
    onClick: a ? c : void 0,
    onDragStart: r ? d : void 0,
    onDragContinuation: r ? u : void 0,
    onDragFinish: r ? p : void 0,
    onDragCancellation: r ? h : void 0
  }), L = hn({
    ViewRef: C,
    Container: s,
    onlyFrom: ".resize-handle",
    onDragStart: r ? f : void 0,
    onDragContinuation: r ? g : void 0,
    onDragFinish: r ? x : void 0,
    onDragCancellation: r ? m : void 0
  });
  return b`<div
      class="stickynote${o ? " selected" : ""}"
      style="left:${n.x}px; top:${n.y}px; width:${n.Width}px; height:${n.Height}px; ${i}"
      ref=${C} data-note-key=${t}
      onPointerDown=${($) => {
    L?.($), k?.($);
  }}
    >
      <div class="titlebar"/>
      <div class="content-area">${l}</>
      ${r && b`<div class="resize-handle" aria-hidden="true"/>`}
    </>`;
}
const Kp = /* @__PURE__ */ Z("jcl-component.noteboard", `
    .jcl-component.noteboard {
      display:block !important; position:relative;
      overflow:auto; overscroll-behavior:contain;
      border:solid 1px #888888; border-radius:2px;
      background-color:#EEEEEE; /* fills spare areas beside/below the pane */
      padding:0px;
    }

    .jcl-component.noteboard > .notepane {
      display:block; position:relative; overflow:hidden;
      background:white;
    }

    .jcl-component.noteboard .stickynote {
      display:flex; flex-flow:column nowrap; align-items:stretch;
      position:absolute;             /* siblings stack in "Notes" order */
      background:#FFFFA8; color:black;
      border:solid 1px #888888; border-radius:4px;
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.25);
      font-size:14px;
    }
    .jcl-component.noteboard .stickynote.selected {
      outline:solid 2px dodgerblue;
    }

    .jcl-component.noteboard .stickynote > .titlebar {
      flex:0 0 16px; cursor:grab; user-select:none;
      background:rgba(0,0,0,0.06);
      border-bottom:solid 1px rgba(0,0,0,0.15);
      border-radius:3px 3px 0px 0px;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }

    .jcl-component.noteboard .stickynote > .content-area {
      display:flex; flex-flow:column nowrap; align-items:stretch;
      flex:1 1 auto; position:relative; overflow:hidden;
      border-radius:0px 0px 3px 3px;
    }
    .jcl-component.noteboard .stickynote > .content-area > .sticky-note-content {
      flex:1 1 auto; width:100%; min-height:0px;
    }

    .jcl-component.noteboard .stickynote .sticky-text-note {
      border:none; border-radius:0px; background:transparent;
      padding:4px;
    }
    .jcl-component.noteboard .stickynote .sticky-html-note {
      border:none; border-radius:0px; background:transparent;
    }
    .jcl-component.noteboard .stickynote .sticky-markdown-note {
      padding:4px; cursor:default;
    }

    .jcl-component.noteboard .stickynote > .resize-handle {
      position:absolute; right:0px; bottom:0px; width:24px; height:24px;
      background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAbUlEQVRIS9WTwQ0AIAgDZV0GYl2NP2KMEWmjOkAvPawU8hNGvpnVnquq8ifAW6E0gAO88/GmkAZ0wOonQhrAASslHZbeAR0QWf8bN4goOdoBHRBxftQADsgo2doBHZBRcucGSCXTBnQA0vmY1QDfJWAZ8ODrpQAAAABJRU5ErkJggg==");
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
      cursor:nwse-resize; pointer-events:auto;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }

    .sticky-markdown-editor {          /* lives in a dialog, not in the board */
      display:block; width:100%; height:100%;
      min-width:240px; min-height:180px;
      resize:none;
    }
  `);
function ks(e) {
  return K(() => {
    e = U(e);
    const t = E(e.Content, oo) ?? "", n = A(e.onContentChange), o = ve(e.TabWidth) ?? 10, a = !t.includes("	");
    return b`<${Pa}
        Class="sticky-note-content sticky-text-note"
        Style=${po(e) + (a ? "" : `tab-size:${o}px;`)}
        Value=${t} wrap=${a}
        readonly=${n == null}
        onKeyDown=${Cs}
        onValueInput=${(r) => N(
      'stickyTextNote callback "onContentChange"',
      n,
      r
    )}
      />`;
  });
}
function or(e) {
  return K(() => {
    e = U(e);
    const t = E(e.Content, oo) ?? "", n = A(e.onContentChange);
    return b`<${Pi}
        Class="sticky-note-content sticky-html-note"
        style=${po(e)}
        Value=${t} readonly=${n == null}
        onValueChange=${(o) => N(
      'stickyHTMLNote callback "onContentChange"',
      n,
      o
    )}
      />`;
  });
}
function js(e) {
  return K(() => {
    e = U(e);
    const t = E(e.Content, oo) ?? "", n = A(e.onContentChange), { openDialog: o } = Fn(), a = Dt(), r = q("");
    r.current = t;
    function i() {
      n != null && o({
        Name: "stickyMarkdownNote-" + a,
        Title: "Markdown",
        isModal: !1,
        isDraggable: !0,
        hasCloseButton: !0,
        isResizable: !0,
        Renderer: () => b`<${Pa}
            Class="sticky-markdown-editor"
            Value=${r.current}
            onKeyDown=${Cs}
            onValueInput=${(s) => {
          r.current = s, N(
            'stickyMarkdownNote callback "onContentChange"',
            n,
            s
          );
        }}
          />`
      });
    }
    return b`<${Ni}
        Class="sticky-note-content sticky-markdown-note"
        style=${po(e)}
        Value=${t}
        onDblClick=${i}
      />`;
  });
}
const fn = 6, Pr = 2, ei = 9, ti = 9, Up = 80, qp = Vo, Xp = Eo, $o = 16, ni = 20;
function jn(e, t) {
  const { x: n, y: o } = e.Position, { Width: a, Height: r } = e.Size;
  switch (t.Direction) {
    case "n":
      return { x: n + t.Offset, y: o };
    case "s":
      return { x: n + t.Offset, y: o + r };
    case "w":
      return { x: n, y: o + t.Offset };
    default:
      return { x: n + a, y: o + t.Offset };
  }
}
function ma(e) {
  switch (e) {
    case "n":
      return { x: 0, y: -1 };
    case "s":
      return { x: 0, y: 1 };
    case "w":
      return { x: -1, y: 0 };
    default:
      return { x: 1, y: 0 };
  }
}
function oi(e, t, n, o) {
  const a = Math.hypot(n.x - e.x, n.y - e.y), r = Math.min(a / 2, Up), i = ma(t), s = {
    x: e.x + r * i.x,
    y: e.y + r * i.y
  };
  let l = n;
  if (o != null) {
    const u = ma(o);
    l = { x: n.x + r * u.x, y: n.y + r * u.y };
  }
  const c = rn({
    Anchors: [e, n],
    Controls: [{ c1: s, c2: l }],
    closed: !1
  }), d = (Math.abs(n.x - l.x) + Math.abs(n.y - l.y) < 1e-3 ? Math.atan2(n.y - s.y, n.x - s.x) : Math.atan2(n.y - l.y, n.x - l.x)) * 180 / Math.PI;
  return { Path: c, ArrowAngle: d };
}
function Vt(e) {
  return {
    x: e.Position.x,
    y: e.Position.y,
    Width: e.Size.Width,
    Height: e.Size.Height
  };
}
function Yp(e, t) {
  return e.length === 0 || t.length === 0 ? { vertical: /* @__PURE__ */ new Map(), horizontal: /* @__PURE__ */ new Map() } : ys(
    e.map(ga),
    t.map(ga),
    1
    // [px] - no zooming here
  );
}
function Jp(e) {
  return K(() => {
    ah(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Nodes, (v) => je(v, De)) ?? Se("Nodes"), o = E(e.Edges, (v) => je(v, De)) ?? Se("Edges"), a = E(e.StickyNotes, (v) => je(v, De)) ?? [], r = E(e.Groups, (v) => je(v, De)) ?? [], i = ve(e.PaneWidth), s = ve(e.PaneHeight);
    let l = E(e.selectedNodeKeys, (v) => je(v, rt)) ?? [], c = E(e.selectedEdgeKeys, (v) => je(v, rt)) ?? [], d = E(e.selectedStickyNoteKeys, (v) => je(v, rt)) ?? [], u = E(e.selectedGroupKeys, (v) => je(v, rt)) ?? [];
    const p = A(e.onSelectionChange), h = A(e.onNodesChange), f = A(e.onEdgesChange), g = A(e.onStickyNotesChange), x = A(e.onStickyNoteContentChange), m = A(e.onGroupsChange), C = A(e.onEdgeCreate), k = A(e.onNodeDoubleClick), L = A(e.PortIsValidTarget), $ = S(e.InputFillColor) ?? "#B3E5FC", y = S(e.OutputFillColor) ?? "#FFE0B2", w = S(e.DefaultEdgeColor) ?? "#666666", O = S(e.DefaultFontFamily), T = _e(e.DefaultFontSize), j = E(e.DefaultFontWeight, (v) => wt(v) || Ne(v)), I = _e(e.DefaultLineHeight), M = S(e.DefaultForegroundColor), D = S(e.DefaultBackgroundColor), V = ve(e.SensorWidth) ?? 20, B = ve(e.maxPanningSpeed) ?? 400, Y = J(e.SnapToGrid) ?? !1, Q = ve(e.GridWidth) ?? 10, pe = ve(e.GridHeight) ?? 10, P = p != null, X = h != null, te = g != null, ue = C != null, xe = X || te, ze = {
      // pure fallbacks for StickyNotes
      FontFamily: O,
      FontSize: T,
      FontWeight: j,
      LineHeight: I,
      ForegroundColor: M,
      BackgroundColor: D
    };
    function Ge(v, R) {
      return qs(
        v.map((H) => String(H.Key)),
        R
      );
    }
    const Je = Ge(n, '"Nodes"'), it = Ge(o, '"Edges"'), oe = Ge(a, '"StickyNotes"'), ee = Ge(r, '"Groups"');
    n.forEach((v) => {
      Ge(v.InputPorts ?? [], `input ports of node "${v.Key}"`), Ge(v.OutputPorts ?? [], `output ports of node "${v.Key}"`);
    });
    function re(v, R = /* @__PURE__ */ new Set()) {
      if (R.has(v))
        return { NodeKeys: [], StickyNoteKeys: [] };
      const H = r.find((de) => String(de.Key) === v);
      if (H == null)
        return { NodeKeys: [], StickyNoteKeys: [] };
      R.add(v);
      const W = [...H.NodeKeys ?? []], _ = [...H.StickyNoteKeys ?? []];
      return (H.GroupKeys ?? []).forEach((de) => {
        const le = re(String(de), R);
        W.push(...le.NodeKeys), _.push(...le.StickyNoteKeys);
      }), R.delete(v), { NodeKeys: W, StickyNoteKeys: _ };
    }
    P ? (l = Un(l, Je), c = Un(c, it), d = Un(d, oe), u = Un(u, ee)) : (l = [], c = [], d = [], u = []);
    const ie = new Set(l), me = new Set(c), ge = new Set(d), Ie = new Set(u);
    function Me(v, R, H) {
      function W(de, le) {
        return le.has(R) ? de.filter((ye) => ye !== R) : [...de, R];
      }
      let _;
      return H ? _ = {
        selectedNodeKeys: v === "node" ? W(l, ie) : l,
        selectedEdgeKeys: v === "edge" ? W(c, me) : c,
        selectedStickyNoteKeys: v === "stickyNote" ? W(d, ge) : d,
        selectedGroupKeys: v === "group" ? W(u, Ie) : u
      } : _ = {
        selectedNodeKeys: v === "node" ? [R] : [],
        selectedEdgeKeys: v === "edge" ? [R] : [],
        selectedStickyNoteKeys: v === "stickyNote" ? [R] : [],
        selectedGroupKeys: v === "group" ? [R] : []
      }, Ae(
        _.selectedNodeKeys,
        _.selectedEdgeKeys,
        _.selectedStickyNoteKeys,
        _.selectedGroupKeys
      ), _;
    }
    function Ae(v, R, H, W) {
      N(
        'DataFlowProcessView callback "onSelectionChange"',
        p,
        v,
        R,
        H,
        W
      );
    }
    function st() {
      (l.length > 0 || c.length > 0 || d.length > 0 || u.length > 0) && Ae([], [], [], []);
    }
    const we = q(null), Ve = q(null), qe = q(null), ke = q(void 0), Xe = tt();
    Ce(() => () => {
      const v = ke.current;
      v != null && (v.ChangeRAF != null && cancelAnimationFrame(v.ChangeRAF), v.PanningRAF != null && cancelAnimationFrame(v.PanningRAF), ke.current = void 0), Nn.current != null && clearTimeout(Nn.current);
    }, []);
    function Qe(v, R) {
      return Y && R > 0 ? Math.round(v / R) * R : v;
    }
    function $e(v) {
      return {
        minWidth: v.minSize?.Width ?? qp,
        minHeight: v.minSize?.Height ?? Xp,
        maxWidth: v.maxSize?.Width ?? 1 / 0,
        maxHeight: v.maxSize?.Height ?? 1 / 0
      };
    }
    const z = {
      // NoteBoard's minimal sizes
      minWidth: Vo,
      minHeight: Eo,
      maxWidth: 1 / 0,
      maxHeight: 1 / 0
    };
    function F(v, R) {
      const { Mode: H, Direction: W, dx: _, dy: de } = ke.current;
      let { x: le, y: ye, Width: Oe, Height: Ue } = v;
      if (H === "move")
        return le = Pe(Qe(le + _, Q), 0, _t - Oe), ye = Pe(Qe(ye + de, pe), 0, Gt - Ue), { x: le, y: ye, Width: Oe, Height: Ue };
      const Fe = le + Oe, Te = ye + Ue;
      if (W.includes("e") && (Oe = Pe(
        Qe(Fe + _, Q),
        le + R.minWidth,
        Math.min(le + R.maxWidth, _t)
      ) - le), W.includes("w")) {
        const mt = Pe(
          Qe(le + _, Q),
          Math.max(0, Fe - R.maxWidth),
          Fe - R.minWidth
        );
        Oe = Fe - mt, le = mt;
      }
      if (W.includes("s") && (Ue = Pe(
        Qe(Te + de, pe),
        ye + R.minHeight,
        Math.min(ye + R.maxHeight, Gt)
      ) - ye), W.includes("n")) {
        const mt = Pe(
          Qe(ye + de, pe),
          Math.max(0, Te - R.maxHeight),
          Te - R.minHeight
        );
        Ue = Te - mt, ye = mt;
      }
      return { x: le, y: ye, Width: Oe, Height: Ue };
    }
    function G(v, R, H) {
      const W = ke.current?.StartGeometryByKey?.[v];
      return W == null ? {
        x: R.Position.x,
        y: R.Position.y,
        Width: R.Size.Width,
        Height: R.Size.Height
      } : F(W, H);
    }
    function ne() {
      return n.map((v) => {
        const R = ke.current?.StartGeometryByKey?.["node:" + v.Key];
        if (R == null)
          return v;
        const { x: H, y: W, Width: _, Height: de } = F(
          R,
          $e(v)
        );
        return { ...v, Position: { x: H, y: W }, Size: { Width: _, Height: de } };
      });
    }
    function be() {
      return a.map((v) => {
        const R = ke.current?.StartGeometryByKey?.["stickyNote:" + v.Key];
        if (R == null)
          return v;
        const { x: H, y: W, Width: _, Height: de } = F(
          R,
          z
        );
        return { ...v, Position: { x: H, y: W }, Size: { Width: _, Height: de } };
      });
    }
    function We() {
      const v = ke.current?.StartGeometryByKey ?? {};
      return Object.keys(v).some(
        (R) => R.startsWith("node:")
      );
    }
    function dt() {
      const v = ke.current?.StartGeometryByKey ?? {};
      return Object.keys(v).some(
        (R) => R.startsWith("stickyNote:")
      );
    }
    function pt() {
      const v = ke.current;
      v == null || v.ChangeRAF != null || (v.ChangeRAF = requestAnimationFrame(() => {
        const R = ke.current;
        R != null && (R.ChangeRAF = void 0, Cr());
      }));
    }
    function Cr() {
      We() && N(
        'DataFlowProcessView callback "onNodesChange"',
        h,
        ne()
      ), dt() && N(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        be()
      );
    }
    function zn(v, R, H, W, _) {
      let de = R === "node" ? [H] : [], le = R === "stickyNote" ? [H] : [], ye = R === "group" ? [H] : [];
      if (P) {
        let Te = {
          selectedNodeKeys: l,
          selectedEdgeKeys: c,
          selectedStickyNoteKeys: d,
          selectedGroupKeys: u
        };
        if (!(R === "node" ? ie : R === "group" ? Ie : ge).has(H)) {
          const yl = sn(_);
          Te = Me(R, H, yl);
        }
        (R === "node" ? Te.selectedNodeKeys : R === "group" ? Te.selectedGroupKeys : Te.selectedStickyNoteKeys).includes(H) && (de = Te.selectedNodeKeys, le = Te.selectedStickyNoteKeys, ye = Te.selectedGroupKeys);
      }
      const Oe = new Set(de), Ue = new Set(le);
      ye.forEach((Te) => {
        const mt = re(Te);
        mt.NodeKeys.forEach(
          (wo) => Oe.add(String(wo))
        ), mt.StickyNoteKeys.forEach(
          (wo) => Ue.add(String(wo))
        );
      });
      const Fe = {};
      n.forEach((Te) => {
        Oe.has(String(Te.Key)) && (Fe["node:" + Te.Key] = Vt(Te));
      }), a.forEach((Te) => {
        Ue.has(String(Te.Key)) && (Fe["stickyNote:" + Te.Key] = Vt(Te));
      }), ke.current = {
        Mode: v,
        Direction: W,
        StartGeometryByKey: Fe,
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, Xe();
    }
    function On(v, R, H) {
      const W = ke.current;
      W != null && (W.dx = v, W.dy = R, H != null && (W.lastClientX = H.clientX, W.lastClientY = H.clientY), W.Mode === "move" && W.PanningRAF == null && (W.PanningTimestamp = void 0, W.PanningRAF = requestAnimationFrame(
        (_) => mo.current?.(_)
      )), Xe(), pt());
    }
    function Vn(v, R) {
      const H = ke.current;
      H != null && (H.dx = v, H.dy = R, H.ChangeRAF != null && cancelAnimationFrame(H.ChangeRAF), H.PanningRAF != null && cancelAnimationFrame(H.PanningRAF), Cr(), ke.current = void 0, Xe());
    }
    function En() {
      const v = ke.current;
      if (v == null)
        return;
      v.ChangeRAF != null && cancelAnimationFrame(v.ChangeRAF), v.PanningRAF != null && cancelAnimationFrame(v.PanningRAF);
      const { StartGeometryByKey: R } = v;
      We() && N(
        'DataFlowProcessView callback "onNodesChange"',
        h,
        n.map((H) => {
          const W = R["node:" + H.Key];
          return W == null ? H : {
            ...H,
            Position: { x: W.x, y: W.y },
            Size: { Width: W.Width, Height: W.Height }
          };
        })
      ), dt() && N(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        a.map((H) => {
          const W = R["stickyNote:" + H.Key];
          return W == null ? H : {
            ...H,
            Position: { x: W.x, y: W.y },
            Size: { Width: W.Width, Height: W.Height }
          };
        })
      ), ke.current = void 0, Xe();
    }
    function el(v, R, H, W) {
      ke.current = {
        Mode: "rubberEdge",
        Source: { NodeKey: v, PortKey: R },
        hasMoved: !1,
        PointerPosition: { x: H, y: W },
        StartGeometryByKey: {},
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, Xe();
    }
    function tl(v, R, H) {
      const W = ke.current;
      W == null || W.Mode !== "rubberEdge" || (W.hasMoved = !0, W.PointerPosition = { x: v, y: R }, H != null && (W.lastClientX = H.clientX, W.lastClientY = H.clientY), W.PanningRAF == null && (W.PanningTimestamp = void 0, W.PanningRAF = requestAnimationFrame(
        (_) => mo.current?.(_)
      )), Xe());
    }
    function nl(v, R) {
      const H = ke.current;
      if (H == null || H.Mode !== "rubberEdge")
        return;
      H.PanningRAF != null && cancelAnimationFrame(H.PanningRAF);
      const W = H.Source;
      ke.current = void 0;
      const _ = al(v, R, W);
      _ != null && N(
        'DataFlowProcessView callback "onEdgeCreate"',
        C,
        { Source: W, Target: _ }
      ), Xe();
    }
    function ol() {
      const v = ke.current;
      v == null || v.Mode !== "rubberEdge" || (v.PanningRAF != null && cancelAnimationFrame(v.PanningRAF), ke.current = void 0, Xe());
    }
    function kr(v, R, H) {
      return H.disabled == !0 ? !1 : L == null ? !0 : He(
        'DataFlowProcessView callback "PortIsValidTarget"',
        L,
        v,
        R
      ) == !0;
    }
    function al(v, R, H) {
      const W = fn + Pr;
      for (let _ = Ft.length - 1; _ >= 0; _--) {
        const de = Ft[_], le = (de.InputPorts ?? []).find((ye) => {
          const Oe = jn(de, ye);
          return Math.hypot(Oe.x - v, Oe.y - R) <= W;
        });
        if (le != null) {
          const ye = { NodeKey: String(de.Key), PortKey: String(le.Key) };
          return kr(H, ye, le) ? ye : void 0;
        }
      }
    }
    function rl(v, R) {
      ke.current = {
        Mode: "lasso",
        LassoStart: { x: v, y: R },
        PointerPosition: { x: v, y: R },
        StartGeometryByKey: {},
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, Xe();
    }
    function il(v, R) {
      const H = ke.current;
      H == null || H.Mode !== "lasso" || (H.PointerPosition = { x: v, y: R }, Xe());
    }
    function jr(v) {
      const { LassoStart: R, PointerPosition: H } = v;
      return {
        x: Math.min(R.x, H.x),
        y: Math.min(R.y, H.y),
        Width: Math.abs(H.x - R.x),
        Height: Math.abs(H.y - R.y)
      };
    }
    function sl(v, R) {
      const H = ke.current;
      if (H == null || H.Mode !== "lasso")
        return;
      H.PointerPosition = { x: v, y: R };
      const W = jr(H);
      ke.current = void 0;
      const _ = Ft.filter(
        (le) => fa(W, Vt(le))
      ).map((le) => String(le.Key)), de = xo.filter(
        (le) => fa(W, Vt(le))
      ).map((le) => String(le.Key));
      Ae(_, [], de, []), Xe();
    }
    function ll() {
      ke.current?.Mode === "lasso" && (ke.current = void 0, Xe());
    }
    function cl(v, R, H) {
      const W = sn(H), _ = dl(v, R);
      switch (!0) {
        case _ != null:
          Me("edge", _, W);
          break;
        case !W:
          st();
          break;
        default:
      }
    }
    function dl(v, R) {
      const H = qe.current;
      if (H == null)
        return;
      const W = Array.from(H.querySelectorAll("path[data-edge-key]"));
      for (let _ = W.length - 1; _ >= 0; _--) {
        const de = W[_];
        if (typeof de.isPointInStroke != "function")
          return;
        const le = H.createSVGPoint();
        le.x = v, le.y = R;
        const ye = parseFloat(getComputedStyle(de).strokeWidth) || 0, Oe = de.getAttribute("stroke-width");
        de.setAttribute("stroke-width", String(ye + 2 * Pr));
        try {
          if (de.isPointInStroke(le))
            return de.getAttribute("data-edge-key") ?? void 0;
        } finally {
          Oe == null ? de.removeAttribute("stroke-width") : de.setAttribute("stroke-width", Oe);
        }
      }
    }
    const ul = Rn({
      ViewRef: Ve,
      Container: () => we.current,
      onlyFrom: ".dfp-pane",
      onClick: P ? cl : void 0,
      onDragStart: P ? (v, R, H, W) => rl(H, W) : void 0,
      onDragContinuation: P ? (v, R, H, W) => il(H, W) : void 0,
      onDragFinish: P ? (v, R, H, W) => sl(H, W) : void 0,
      onDragCancellation: P ? () => ll() : void 0
    });
    function pl(v) {
      const R = ke.current, H = we.current;
      if (R == null || H == null || R.Mode !== "move" && R.Mode !== "rubberEdge")
        return;
      const { lastClientX: W, lastClientY: _ } = R;
      if (W == null || _ == null) {
        R.PanningRAF = void 0, R.PanningTimestamp = void 0;
        return;
      }
      const { vx: de, vy: le } = Xs(
        H.getBoundingClientRect(),
        W,
        _,
        V,
        B
      );
      if (de === 0 && le === 0) {
        R.PanningRAF = void 0, R.PanningTimestamp = void 0;
        return;
      }
      const ye = Ys(R, v), Oe = H.scrollLeft, Ue = H.scrollTop;
      H.scrollLeft = Oe + de * ye, H.scrollTop = Ue + le * ye;
      const Fe = H.scrollLeft - Oe, Te = H.scrollTop - Ue;
      R.Mode === "move" ? (R.dx += Fe, R.dy += Te, $r.current?.()) : R.PointerPosition = {
        // ...is kept in content coordinates
        x: R.PointerPosition.x + Fe,
        y: R.PointerPosition.y + Te
      }, Xe(), R.PanningRAF = requestAnimationFrame(
        (mt) => mo.current?.(mt)
      );
    }
    const mo = q();
    mo.current = pl;
    const $r = q();
    $r.current = pt;
    const Zo = q(!1), Nn = q(void 0);
    function Ir(v = 3e3) {
      Zo.current = !0, Xe(), clearTimeout(Nn.current), Nn.current = setTimeout(() => {
        Nn.current = void 0, Zo.current = !1, Xe();
      }, v);
    }
    function bo(v, R) {
      const H = new Set(l), W = new Set(d);
      u.forEach((_) => {
        const de = re(_);
        de.NodeKeys.forEach(
          (le) => H.add(String(le))
        ), de.StickyNoteKeys.forEach(
          (le) => W.add(String(le))
        );
      }), X && H.size > 0 && N(
        'DataFlowProcessView callback "onNodesChange"',
        h,
        n.map((_) => {
          if (!H.has(String(_.Key)))
            return _;
          const { Width: de, Height: le } = _.Size;
          return { ..._, Position: {
            x: Pe(_.Position.x + v, 0, _t - de),
            y: Pe(_.Position.y + R, 0, Gt - le)
          } };
        })
      ), te && W.size > 0 && N(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        a.map((_) => {
          if (!W.has(String(_.Key)))
            return _;
          const { Width: de, Height: le } = _.Size;
          return { ..._, Position: {
            x: Pe(_.Position.x + v, 0, _t - de),
            y: Pe(_.Position.y + R, 0, Gt - le)
          } };
        })
      ), Ir();
    }
    function yo(v, R) {
      X && l.length > 0 && N(
        'DataFlowProcessView callback "onNodesChange"',
        h,
        n.map((H) => {
          if (!ie.has(String(H.Key)))
            return H;
          const W = $e(H), { x: _, y: de } = H.Position;
          return { ...H, Size: {
            Width: Pe(
              H.Size.Width + v,
              W.minWidth,
              Math.min(W.maxWidth, _t - _)
            ),
            Height: Pe(
              H.Size.Height + R,
              W.minHeight,
              Math.min(W.maxHeight, Gt - de)
            )
          } };
        })
      ), te && d.length > 0 && N(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        a.map((H) => {
          if (!ge.has(String(H.Key)))
            return H;
          const { x: W, y: _ } = H.Position;
          return { ...H, Size: {
            Width: Pe(
              H.Size.Width + v,
              Vo,
              _t - W
            ),
            Height: Pe(
              H.Size.Height + R,
              Eo,
              Gt - _
            )
          } };
        })
      ), Ir();
    }
    function hl(v, R, H, W) {
      let _ = v.filter((le) => !R.has(String(le.Key))).map((le) => H.size === 0 && W.size === 0 ? le : {
        ...le,
        NodeKeys: H.size === 0 ? le.NodeKeys ?? [] : (le.NodeKeys ?? []).filter(
          (ye) => !H.has(String(ye))
        ),
        StickyNoteKeys: W.size === 0 ? le.StickyNoteKeys ?? [] : (le.StickyNoteKeys ?? []).filter(
          (ye) => !W.has(String(ye))
        )
      }), de = !0;
      for (; de; ) {
        de = !1;
        const le = new Set(
          _.map((Oe) => String(Oe.Key))
        );
        _ = _.map((Oe) => {
          const Ue = (Oe.GroupKeys ?? []).filter(
            (Fe) => le.has(String(Fe))
          );
          return Ue.length === (Oe.GroupKeys ?? []).length ? Oe : (de = !0, { ...Oe, GroupKeys: Ue });
        });
        const ye = _.filter((Oe) => (Oe.NodeKeys ?? []).length > 0 || (Oe.StickyNoteKeys ?? []).length > 0 || (Oe.GroupKeys ?? []).length > 0);
        ye.length !== _.length && (de = !0, _ = ye);
      }
      return _;
    }
    function fl() {
      const v = new Set(X ? l : []), R = new Set(te ? d : []), H = new Set(m != null ? u : []), W = /* @__PURE__ */ new Set();
      f != null && (c.forEach((_) => W.add(_)), o.forEach((_) => {
        (v.has(String(_.Source?.NodeKey)) || v.has(String(_.Target?.NodeKey))) && W.add(String(_.Key));
      })), v.size > 0 && N(
        'DataFlowProcessView callback "onNodesChange"',
        h,
        n.filter((_) => !v.has(String(_.Key)))
      ), W.size > 0 && N(
        'DataFlowProcessView callback "onEdgesChange"',
        f,
        o.filter((_) => !W.has(String(_.Key)))
      ), R.size > 0 && N(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        a.filter((_) => !R.has(String(_.Key)))
      ), m != null && (H.size > 0 || v.size > 0 || R.size > 0) && N(
        'DataFlowProcessView callback "onGroupsChange"',
        m,
        hl(r, H, v, R)
      ), P && (v.size > 0 || W.size > 0 || R.size > 0 || H.size > 0) && Ae(
        l.filter((_) => !v.has(_)),
        c.filter((_) => !W.has(_)),
        d.filter((_) => !R.has(_)),
        u.filter((_) => !H.has(_))
      );
    }
    function gl(v) {
      const R = v.target;
      if (
        // for embedded controls
        R != null && R.closest?.(".dfp-content-area, input, textarea, [contenteditable]") != null
      )
        return;
      const H = (v.shiftKey ? 10 : 1) * (Y ? Q : 1), W = (v.shiftKey ? 10 : 1) * (Y ? pe : 1);
      let _ = !0;
      switch (!0) {
        case v.key === "Escape":
          st();
          break;
        case (v.key === "Delete" || v.key === "Backspace"):
          fl();
          break;
        case v.key === "ArrowLeft":
          v.altKey ? yo(-H, 0) : bo(-H, 0);
          break;
        case v.key === "ArrowRight":
          v.altKey ? yo(H, 0) : bo(H, 0);
          break;
        case v.key === "ArrowUp":
          v.altKey ? yo(0, -W) : bo(0, -W);
          break;
        case v.key === "ArrowDown":
          v.altKey ? yo(0, W) : bo(0, W);
          break;
        default:
          _ = !1;
      }
      _ && v.preventDefault();
    }
    const Dr = Di(we), _t = i ?? Dr.Width, Gt = s ?? Dr.Height, Ft = n.map((v) => {
      const { x: R, y: H, Width: W, Height: _ } = G(
        "node:" + v.Key,
        v,
        $e(v)
      );
      return { ...v, Position: { x: R, y: H }, Size: { Width: W, Height: _ } };
    }), xo = a.map((v) => {
      const { x: R, y: H, Width: W, Height: _ } = G(
        "stickyNote:" + v.Key,
        v,
        z
      );
      return { ...v, Position: { x: R, y: H }, Size: { Width: W, Height: _ } };
    }), Lr = {};
    Ft.forEach(
      (v) => {
        Lr[String(v.Key)] = v;
      }
    );
    const Sr = {};
    xo.forEach(
      (v) => {
        Sr[String(v.Key)] = v;
      }
    );
    const Mr = {};
    r.forEach(
      (v) => {
        Mr[String(v.Key)] = v;
      }
    );
    const Bn = {};
    function Tr(v, R) {
      if (v in Bn)
        return Bn[v];
      if (R.has(v))
        return;
      const H = Mr[v];
      if (H == null) {
        Bn[v] = void 0;
        return;
      }
      R.add(v);
      const W = [];
      let _ = -1;
      if ((H.NodeKeys ?? []).forEach((Fe) => {
        const Te = Lr[String(Fe)];
        Te != null && W.push(Vt(Te));
      }), (H.StickyNoteKeys ?? []).forEach((Fe) => {
        const Te = Sr[String(Fe)];
        Te != null && W.push(Vt(Te));
      }), (H.GroupKeys ?? []).forEach((Fe) => {
        const Te = Tr(String(Fe), R);
        Te != null && (W.push(Te), _ = Math.max(_, Te.Depth));
      }), R.delete(v), W.length === 0) {
        Bn[v] = void 0;
        return;
      }
      const de = Math.min(...W.map((Fe) => Fe.x)), le = Math.min(...W.map((Fe) => Fe.y)), ye = Math.max(...W.map((Fe) => Fe.x + Fe.Width)), Oe = Math.max(...W.map((Fe) => Fe.y + Fe.Height)), Ue = {
        x: de - $o,
        y: le - $o - ni,
        Width: ye - de + 2 * $o,
        Height: Oe - le + 2 * $o + ni,
        Depth: _ + 1
      };
      return Bn[v] = Ue, Ue;
    }
    const ml = r.map((v) => {
      const R = Tr(String(v.Key), /* @__PURE__ */ new Set());
      if (R != null)
        return {
          ...v,
          Position: { x: R.x, y: R.y },
          Size: { Width: R.Width, Height: R.Height },
          Depth: R.Depth
        };
    }).filter(
      (v) => v != null
    ).sort((v, R) => R.Depth - v.Depth), Lt = ke.current;
    let Rr;
    if (Lt?.Mode === "move" || Zo.current) {
      const v = [], R = [], H = (W, _, de) => {
        W.forEach((le) => {
          ((Lt?.Mode === "move" ? Lt.StartGeometryByKey[_ + le.Key] != null : de.has(String(le.Key))) ? v : R).push(Vt(le));
        });
      };
      H(Ft, "node:", ie), H(xo, "stickyNote:", ge), Rr = Yp(v, R);
    }
    const Ar = Lt?.Mode === "rubberEdge";
    let Fr;
    if (Ar && Lt?.hasMoved === !0) {
      const v = Ft.find(
        (H) => String(H.Key) === Lt.Source.NodeKey
      ), R = (v?.OutputPorts ?? []).find(
        (H) => String(H.Key) === Lt.Source.PortKey
      );
      v != null && R != null && (Fr = {
        from: jn(v, R),
        fromDirection: R.Direction,
        to: Lt.PointerPosition
      });
    }
    const bl = Lt?.Mode === "lasso" ? jr(Lt) : void 0;
    return b`<div
        class="jcl-component dataflow-process-view ${t}"
        ref=${we} tabindex="0" onKeyDown=${gl}
        ...${e.RestProps}
      >
        <div class="dfp-pane" ref=${Ve}
          style="width:${_t}px; height:${Gt}px"
          onPointerDown=${ul}
        >
          <div class="dfp-group-layer">
            ${ml.map((v) => {
      const R = String(v.Key), H = Ie.has(R);
      return b`<${th} key=${R}
                Group=${v} GroupKey=${R}
                isSelected=${H} isSelectable=${P}
                isDraggable=${xe}
                ScrollerOf=${() => we.current}
                onGroupClick=${(W, _, de) => Me(
        "group",
        R,
        sn(de)
      )}
                onMoveStart=${(W, _, de, le, ye) => zn("move", "group", R, void 0, ye)}
                onMoveContinuation=${(W, _, de, le, ye) => On(W, _, ye)}
                onMoveFinish=${(W, _) => Vn(W, _)}
                onMoveCancellation=${() => En()}
              />`;
    })}
          </>

          <${oh}
            SVGRef=${qe}
            PaneWidth=${_t} PaneHeight=${Gt}
            Nodes=${Ft} Edges=${o}
            EdgeSelectionSet=${me}
            DefaultEdgeColor=${w}
            RubberEdge=${Fr} LassoBox=${bl}
            GuideLines=${Rr}
          />

          <div class="dfp-stickynote-layer">
            ${xo.map((v) => {
      const R = String(v.Key), H = ge.has(R);
      return b`<${eh} key=${R}
                Note=${v} NoteKey=${R} Defaults=${ze}
                isSelected=${H} isSelectable=${P}
                isDraggable=${te}
                onContentChange=${x == null ? void 0 : ((W) => N(
        'DataFlowProcessView callback "onStickyNoteContentChange"',
        x,
        R,
        W
      ))}
                ScrollerOf=${() => we.current}
                onNoteClick=${(W, _, de) => Me(
        "stickyNote",
        R,
        sn(de)
      )}
                onMoveStart=${(W, _, de, le, ye) => zn("move", "stickyNote", R, void 0, ye)}
                onMoveContinuation=${(W, _, de, le, ye) => On(W, _, ye)}
                onMoveFinish=${(W, _) => Vn(W, _)}
                onMoveCancellation=${() => En()}
                onResizeStart=${(W, _, de, le, ye) => zn("resize", "stickyNote", R, "se", ye)}
                onResizeContinuation=${(W, _, de, le, ye) => On(W, _, ye)}
                onResizeFinish=${(W, _) => Vn(W, _)}
                onResizeCancellation=${() => En()}
              />`;
    })}
          </>

          <div class="dfp-node-layer">
            ${Ft.map((v) => {
      const R = String(v.Key), H = ie.has(R);
      return b`<${Qp} key=${R}
                NodeKey=${R} Title=${v.Title ?? ""}
                Geometry=${Vt(v)}
                BackgroundColor=${v.BackgroundColor}
                isDisabled=${v.disabled == !0}
                isSelected=${H} isSelectable=${P}
                isDraggable=${X}
                renderedContent=${Nt(v.Content) ? He(
        'DataFlowProcessView callback "Node.Content"',
        v.Content,
        v,
        H
      ) : void 0}
                ScrollerOf=${() => we.current}
                onNodeClick=${(W, _, de) => Me(
        "node",
        R,
        sn(de)
      )}
                onNodeDoubleClick=${k == null ? void 0 : ((W) => N(
        'DataFlowProcessView callback "onNodeDoubleClick"',
        k,
        R,
        W
      ))}
                onMoveStart=${(W, _, de, le, ye) => zn("move", "node", R, void 0, ye)}
                onMoveContinuation=${(W, _, de, le, ye) => On(W, _, ye)}
                onMoveFinish=${(W, _) => Vn(W, _)}
                onMoveCancellation=${() => En()}
                onResizeStart=${(W, _) => zn("resize", "node", R, W, _)}
                onResizeContinuation=${(W, _, de, le, ye) => On(W, _, ye)}
                onResizeFinish=${(W, _) => Vn(W, _)}
                onResizeCancellation=${() => En()}
              />`;
    })}
          </>

          <div class="dfp-port-layer">
            ${Ft.map((v) => {
      const R = String(v.Key), H = (W, _) => W.map((de) => {
        const le = String(de.Key), ye = jn(v, de);
        let Oe;
        return Ar && _ === "input" && (Oe = kr(
          ke.current.Source,
          { NodeKey: R, PortKey: le },
          de
        ) ? "valid-target" : "locked"), b`<${nh}
                    key=${R + ":" + _ + ":" + le}
                    Port=${de} Kind=${_} Position=${ye}
                    FillColor=${_ === "input" ? $ : y}
                    TargetState=${Oe}
                    mayStartEdges=${ue}
                    ScrollerOf=${() => we.current}
                    onRubberEdgeStart=${(Ue, Fe) => el(R, le, Ue, Fe)}
                    onRubberEdgeContinuation=${(Ue, Fe, Te) => tl(Ue, Fe, Te)}
                    onRubberEdgeFinish=${(Ue, Fe) => nl(Ue, Fe)}
                    onRubberEdgeCancellation=${() => ol()}
                  />`;
      });
      return b`
                ${H(v.InputPorts ?? [], "input")}
                ${H(v.OutputPorts ?? [], "output")}
              `;
    })}
          </>
        </>
      </>`;
  });
}
const Zp = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
function Qp(e) {
  const {
    NodeKey: t,
    Title: n,
    Geometry: o,
    BackgroundColor: a,
    isDisabled: r,
    isSelected: i,
    isSelectable: s,
    isDraggable: l,
    renderedContent: c,
    ScrollerOf: d,
    onNodeClick: u,
    onNodeDoubleClick: p,
    onMoveStart: h,
    onMoveContinuation: f,
    onMoveFinish: g,
    onMoveCancellation: x,
    onResizeStart: m,
    onResizeContinuation: C,
    onResizeFinish: k,
    onResizeCancellation: L
  } = e, $ = q(null), y = Rn({
    ViewRef: $,
    Container: d,
    onlyFrom: ".dfp-titlebar",
    onClick: s ? u : void 0,
    onDragStart: l ? h : void 0,
    onDragContinuation: l ? f : void 0,
    onDragFinish: l ? g : void 0,
    onDragCancellation: l ? x : void 0
  });
  return b`<div
      class="dfp-node${i ? " selected" : ""}${r ? " disabled" : ""}"
      style="left:${o.x}px; top:${o.y}px; width:${o.Width}px; height:${o.Height}px; ${a == null ? "" : `background-color:${a};`}"
      ref=${$} data-node-key=${t}
      onPointerDown=${y}
      onDblClick=${p}
    >
      <div class="dfp-titlebar">${n}</>
      <div class="dfp-content-area">${c}</>
      ${i && l && Zp.map(
    (w) => b`<${Pp} key=${w}
          Direction=${w} ScrollerOf=${d}
          onResizeStart=${m}
          onResizeContinuation=${C}
          onResizeFinish=${k}
          onResizeCancellation=${L}
        />`
  )}
    </>`;
}
function Pp(e) {
  const {
    Direction: t,
    ScrollerOf: n,
    onResizeStart: o,
    onResizeContinuation: a,
    onResizeFinish: r,
    onResizeCancellation: i
  } = e, s = q(null), l = hn({
    ViewRef: s,
    Container: n,
    onlyFrom: `[data-handle="${t}"]`,
    onDragStart: ((c, d, u, p, h) => o(t, h)),
    onDragContinuation: a,
    onDragFinish: r,
    onDragCancellation: i
  });
  return b`<div
      class="dfp-handle handle-${t}" data-handle=${t}
      ref=${s} onPointerDown=${l} aria-hidden="true"
    />`;
}
function eh(e) {
  const {
    Note: t,
    NoteKey: n,
    Defaults: o,
    isSelected: a,
    isSelectable: r,
    isDraggable: i,
    onContentChange: s,
    ScrollerOf: l,
    onNoteClick: c,
    onMoveStart: d,
    onMoveContinuation: u,
    onMoveFinish: p,
    onMoveCancellation: h,
    onResizeStart: f,
    onResizeContinuation: g,
    onResizeFinish: x,
    onResizeCancellation: m
  } = e, C = q(null), k = Rn({
    ViewRef: C,
    Container: l,
    onlyFrom: ".dfp-titlebar",
    onClick: r ? c : void 0,
    onDragStart: i ? d : void 0,
    onDragContinuation: i ? u : void 0,
    onDragFinish: i ? p : void 0,
    onDragCancellation: i ? h : void 0
  }), L = hn({
    ViewRef: C,
    Container: l,
    onlyFrom: ".dfp-resize-handle",
    onDragStart: i ? f : void 0,
    onDragContinuation: i ? g : void 0,
    onDragFinish: i ? x : void 0,
    onDragCancellation: i ? m : void 0
  }), $ = {
    // note settings first, defaults second
    FontFamily: t.FontFamily ?? o.FontFamily,
    FontSize: t.FontSize ?? o.FontSize,
    FontWeight: t.FontWeight ?? o.FontWeight,
    LineHeight: t.LineHeight ?? o.LineHeight,
    ForegroundColor: t.ForegroundColor ?? o.ForegroundColor,
    BackgroundColor: t.BackgroundColor ?? o.BackgroundColor
  }, y = Vt(t);
  return b`<div
      class="dfp-stickynote${a ? " selected" : ""}"
      style="left:${y.x}px; top:${y.y}px; width:${y.Width}px; height:${y.Height}px; ${po($)}"
      ref=${C} data-note-key=${n}
      onPointerDown=${(w) => {
    L?.(w), k?.(w);
  }}
    >
      <div class="dfp-titlebar"/>
      <div class="dfp-content-area">
        <${or} ...${$}
          Content=${t.Content ?? ""} onContentChange=${s}
        />
      </>
      ${a && i && b`<div class="dfp-resize-handle" aria-hidden="true"/>`}
    </>`;
}
function th(e) {
  const {
    Group: t,
    GroupKey: n,
    isSelected: o,
    isSelectable: a,
    isDraggable: r,
    ScrollerOf: i,
    onGroupClick: s,
    onMoveStart: l,
    onMoveContinuation: c,
    onMoveFinish: d,
    onMoveCancellation: u
  } = e, p = q(null), h = Rn({
    ViewRef: p,
    Container: i,
    onlyFrom: ".dfp-group",
    onClick: a ? s : void 0,
    onDragStart: r ? l : void 0,
    onDragContinuation: r ? c : void 0,
    onDragFinish: r ? d : void 0,
    onDragCancellation: r ? u : void 0
  }), f = (t.BorderColor == null ? "" : `border-color:${t.BorderColor};`) + (t.BackgroundColor == null ? "" : `background-color:${t.BackgroundColor};`);
  return b`<div
      class="dfp-group${o ? " selected" : ""}"
      style="left:${t.Position.x}px; top:${t.Position.y}px; width:${t.Size.Width}px; height:${t.Size.Height}px; ${f}"
      ref=${p} data-group-key=${n}
      onPointerDown=${h}
    >${t.Label ?? ""}</>`;
}
function nh(e) {
  const {
    Port: t,
    Kind: n,
    Position: o,
    FillColor: a,
    TargetState: r,
    mayStartEdges: i,
    ScrollerOf: s,
    onRubberEdgeStart: l,
    onRubberEdgeContinuation: c,
    onRubberEdgeFinish: d,
    onRubberEdgeCancellation: u
  } = e, p = t.disabled == !0, h = n === "output" && i && !p, f = q(null), g = hn({
    // "capability follows callback...
    ViewRef: f,
    Container: s,
    onlyFrom: ".dfp-port.output",
    // ...presence"
    onDragStart: h ? (
      // - disabled ports are not wired up
      ((m, C, k, L) => l(k, L))
    ) : void 0,
    onDragContinuation: h ? ((m, C, k, L, $) => c(k, L, $)) : void 0,
    onDragFinish: h ? ((m, C, k, L) => d(k, L)) : void 0,
    onDragCancellation: h ? (() => u()) : void 0
  });
  let x = "";
  return p && (x += " disabled"), h && (x += " draggable"), r != null && (x += " " + r), b`<${Rs} Class="dfp-port-wrapper"
      Value=${t.Label ?? String(t.Key)}
      Style="left:${o.x - fn}px; top:${o.y - fn}px"
    >
      <div class="dfp-port ${n}${x}"
        style="background-color:${a}"
        ref=${f} tabindex=${p ? -1 : 0}
        data-port-key=${t.Key}
        onPointerDown=${g}
      />
    </>`;
}
function oh(e) {
  const {
    SVGRef: t,
    PaneWidth: n,
    PaneHeight: o,
    Nodes: a,
    Edges: r,
    EdgeSelectionSet: i,
    DefaultEdgeColor: s,
    RubberEdge: l,
    LassoBox: c,
    GuideLines: d
  } = e, u = {};
  a.forEach((f) => {
    u[String(f.Key)] = f;
  });
  const p = (f, g) => {
    const x = ma(g);
    return {
      x: f.x + fn * x.x,
      y: f.y + fn * x.y
    };
  }, h = r.map((f) => {
    const g = u[String(f.Source?.NodeKey)], x = u[String(f.Target?.NodeKey)], m = (g?.OutputPorts ?? []).find(
      (j) => String(j.Key) === String(f.Source?.PortKey)
    ), C = (x?.InputPorts ?? []).find(
      (j) => String(j.Key) === String(f.Target?.PortKey)
    );
    if (m == null || C == null)
      return;
    const k = p(
      jn(g, m),
      m.Direction
    ), L = p(
      jn(x, C),
      C.Direction
    ), { Path: $, ArrowAngle: y } = oi(
      k,
      m.Direction,
      L,
      C.Direction
    ), w = f.Color ?? s, O = i.has(String(f.Key)), T = f.disabled == !0;
    return b`
        ${O && b`<path class="dfp-edge-halo" d=${$}/>`}
        <path class="dfp-edge${O ? " selected" : ""}${T ? " disabled" : ""}"
          data-edge-key=${f.Key} d=${$}
          stroke=${w} stroke-width="2"
        />
        <polygon class="dfp-arrowhead${T ? " disabled" : ""}"
          points="0,0 -${ei},${ti / 2} -${ei},-${ti / 2}"
          fill=${w}
          transform="translate(${L.x},${L.y}) rotate(${y})"
        />
      `;
  });
  return b`<svg class="dfp-edge-layer" ref=${t}
      width=${n} height=${o}
      viewBox="0 0 ${n} ${o}"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${h}

      ${d != null && b`
        ${Array.from(d.vertical.entries()).map(
    ([f, g]) => b`<line
            class="dfp-guide ${g}"
            x1=${f} y1="0" x2=${f} y2=${o}
          />`
  )}
        ${Array.from(d.horizontal.entries()).map(
    ([f, g]) => b`<line
            class="dfp-guide ${g}"
            x1="0" y1=${f} x2=${n} y2=${f}
          />`
  )}
      `}

      ${l != null && b`<path class="dfp-rubber-edge"
        d=${oi(
    p(l.from, l.fromDirection),
    l.fromDirection,
    l.to
  ).Path}
      />`}

      ${c != null && b`<rect class="dfp-lasso"
        x=${c.x} y=${c.y}
        width=${c.Width} height=${c.Height}
      />`}
    </>`;
}
const ah = /* @__PURE__ */ Z("jcl-component.dataflow-process-view", `
    .jcl-component.dataflow-process-view {
      display:block !important; position:relative;
      overflow:auto; overscroll-behavior:contain;
      border:solid 1px #888888; border-radius:2px;
      background-color:#EEEEEE; /* fills spare areas beside/below the pane */
      padding:0px; outline:none;
    }
    .jcl-component.dataflow-process-view:focus-visible {
      outline:solid 2px dodgerblue; outline-offset:-2px;
    }

    .jcl-component.dataflow-process-view > .dfp-pane {
      display:block; position:relative; overflow:hidden;
      background:white;
    }

    /* the five stacked layers share the pane's pixel coordinate base -     */
    /* they are "transparent" for pointer events, only their interactive    */
    /* children re-enable them ("dfp-group-layer" is bottommost, so a group */
    /* only ever intercepts clicks that land on none of the other four)     */

    .jcl-component.dataflow-process-view .dfp-group-layer,
    .jcl-component.dataflow-process-view .dfp-edge-layer,
    .jcl-component.dataflow-process-view .dfp-stickynote-layer,
    .jcl-component.dataflow-process-view .dfp-node-layer,
    .jcl-component.dataflow-process-view .dfp-port-layer {
      display:block; position:absolute; left:0px; top:0px;
      width:100%; height:100%; overflow:visible;
      pointer-events:none;
    }

    /* groups */

    .jcl-component.dataflow-process-view .dfp-group {
      display:block; position:absolute;     /* siblings stack in "Groups" order */
      box-sizing:border-box; pointer-events:auto; cursor:grab;
      border:solid 2px #AAAAAA; border-radius:6px;
      background-color:rgba(0,0,0,0.04);
      padding:2px 6px; font-size:12px; font-weight:bold; color:#666666;
      user-select:none;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }
    .jcl-component.dataflow-process-view .dfp-group.selected {
      outline:solid 2px dodgerblue; outline-offset:1px;
    }

    /* nodes */

    .jcl-component.dataflow-process-view .dfp-node {
      display:flex; flex-flow:column nowrap; align-items:stretch;
      position:absolute;               /* siblings stack in "Nodes" order */
      pointer-events:auto;
      background:white; color:black;
      border:solid 1px #888888; border-radius:4px;
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.25);
      font-size:14px;
    }
    .jcl-component.dataflow-process-view .dfp-node.selected {
      outline:solid 2px dodgerblue;
    }
    .jcl-component.dataflow-process-view .dfp-node.disabled {
      opacity:0.45;
    }

    .jcl-component.dataflow-process-view .dfp-node > .dfp-titlebar {
      flex:0 0 20px; cursor:grab; user-select:none;
      background:rgba(0,0,0,0.06);
      border-bottom:solid 1px rgba(0,0,0,0.15);
      border-radius:3px 3px 0px 0px;
      padding:0px 6px; font-size:12px; line-height:20px; text-align:left;
      overflow:hidden; white-space:nowrap; text-overflow:ellipsis;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }

    .jcl-component.dataflow-process-view .dfp-node > .dfp-content-area,
    .jcl-component.dataflow-process-view .dfp-stickynote > .dfp-content-area {
      display:flex; flex-flow:column nowrap; align-items:stretch;
      flex:1 1 auto; position:relative; overflow:hidden;
      border-radius:0px 0px 3px 3px;
    }

    /* the eight resize handles of a selected node */

    .jcl-component.dataflow-process-view .dfp-handle {
      position:absolute; width:8px; height:8px;
      background:white; border:solid 1px dodgerblue;
      pointer-events:auto;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }
    .jcl-component.dataflow-process-view .dfp-handle.handle-nw { left:-4px;             top:-4px;              cursor:nwse-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-n  { left:calc(50% - 4px);  top:-4px;              cursor:ns-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-ne { right:-4px;            top:-4px;              cursor:nesw-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-e  { right:-4px;            top:calc(50% - 4px);   cursor:ew-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-se { right:-4px;            bottom:-4px;           cursor:nwse-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-s  { left:calc(50% - 4px);  bottom:-4px;           cursor:ns-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-sw { left:-4px;             bottom:-4px;           cursor:nesw-resize }
    .jcl-component.dataflow-process-view .dfp-handle.handle-w  { left:-4px;             top:calc(50% - 4px);   cursor:ew-resize }

    /* sticky notes (visuals follow NoteBoard) */

    .jcl-component.dataflow-process-view .dfp-stickynote {
      display:flex; flex-flow:column nowrap; align-items:stretch;
      position:absolute;          /* siblings stack in "StickyNotes" order */
      pointer-events:auto;
      background:#FFFFA8; color:black;
      border:solid 1px #888888; border-radius:4px;
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.25);
      font-size:14px;
    }
    .jcl-component.dataflow-process-view .dfp-stickynote.selected {
      outline:solid 2px dodgerblue;
    }

    .jcl-component.dataflow-process-view .dfp-stickynote > .dfp-titlebar {
      flex:0 0 16px; cursor:grab; user-select:none;
      background:rgba(0,0,0,0.06);
      border-bottom:solid 1px rgba(0,0,0,0.15);
      border-radius:3px 3px 0px 0px;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }

    .jcl-component.dataflow-process-view .dfp-content-area > .sticky-note-content {
      flex:1 1 auto; width:100%; min-height:0px;
    }
    .jcl-component.dataflow-process-view .dfp-stickynote .sticky-html-note {
      border:none; border-radius:0px; background:transparent;
    }

    .jcl-component.dataflow-process-view .dfp-stickynote > .dfp-resize-handle {
      position:absolute; right:0px; bottom:0px; width:24px; height:24px;
      background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAbUlEQVRIS9WTwQ0AIAgDZV0GYl2NP2KMEWmjOkAvPawU8hNGvpnVnquq8ifAW6E0gAO88/GmkAZ0wOonQhrAASslHZbeAR0QWf8bN4goOdoBHRBxftQADsgo2doBHZBRcucGSCXTBnQA0vmY1QDfJWAZ8ODrpQAAAABJRU5ErkJggg==");
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
      cursor:nwse-resize; pointer-events:auto;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }

    /* ports (wrapped into "styledTooltip"s) */

    .jcl-component.styled-tooltip.dfp-port-wrapper {
      position:absolute; pointer-events:auto;
    }

    .jcl-component.dataflow-process-view .dfp-port {
      display:block; width:${2 * fn}px; height:${2 * fn}px;
      box-sizing:border-box;
      border:solid 1px #888888; border-radius:50%;
      cursor:default; outline:none;
      transition:transform 0.1s ease, box-shadow 0.1s ease;

      -webkit-touch-callout:none;
      -ms-touch-action:none; touch-action:none;
    }
    .jcl-component.dataflow-process-view .dfp-port.input:not(.disabled):not(.locked):hover,
    .jcl-component.dataflow-process-view .dfp-port.output.draggable:hover,
    .jcl-component.dataflow-process-view .dfp-port.valid-target {
      transform:scale(1.3);
      box-shadow:0px 0px 0px 3px rgba(30,144,255,0.35);
    }
    .jcl-component.dataflow-process-view .dfp-port.output.draggable { cursor:grab }
    .jcl-component.dataflow-process-view .dfp-port.valid-target     { cursor:copy }
    .jcl-component.dataflow-process-view .dfp-port.locked {
      opacity:0.4; cursor:not-allowed;
    }
    .jcl-component.dataflow-process-view .dfp-port.disabled { cursor:not-allowed }

    /* edges, rubber edge, guides and lasso (all within the EdgeLayer) */

    .jcl-component.dataflow-process-view .dfp-edge      { fill:none }
    .jcl-component.dataflow-process-view .dfp-edge.disabled,
    .jcl-component.dataflow-process-view .dfp-arrowhead.disabled {
      opacity:0.35;
    }
    .jcl-component.dataflow-process-view .dfp-edge.disabled {
      stroke-dasharray:5 4;
    }
    .jcl-component.dataflow-process-view .dfp-edge-halo {
      fill:none; stroke:dodgerblue; stroke-width:6px; stroke-opacity:0.4;
    }
    .jcl-component.dataflow-process-view .dfp-arrowhead { stroke:none }
    .jcl-component.dataflow-process-view .dfp-rubber-edge {
      fill:none; stroke:#4682B4; stroke-width:2px; stroke-dasharray:6 4;
    }
    .jcl-component.dataflow-process-view .dfp-guide {
      stroke:dodgerblue; stroke-width:1px;
    }
    .jcl-component.dataflow-process-view .dfp-guide.dashed { stroke-dasharray:6 4 }
    .jcl-component.dataflow-process-view .dfp-guide.dotted { stroke-dasharray:1 3 }
    .jcl-component.dataflow-process-view .dfp-lasso {
      fill:rgba(30,144,255,0.10); stroke:dodgerblue;
      stroke-width:1px; stroke-dasharray:4 3;
    }
  `);
function rh(e) {
  return $n(e) || qn(e) && (fe(e.Type, ["user", "assistant"]) && $n(e.Text) || e.Type === "annotation" && Nt(e.Renderer));
}
function ih({ Renderer: e }) {
  return K(e);
}
function sh(e) {
  return K(() => {
    lh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = ae(e.HelloMessage), a = E(e.Messages, (V) => je(V, rh)) ?? [], r = S(e.Placeholder) ?? "type a message...", i = ve(e.Rows) ?? 3, s = ae(e.Value), l = S(e.SubmitLabel), c = J(e.disabled) ?? !1, d = A(e.onInput), u = A(e.onValueInput), p = A(e.onSubmit), [h, f] = Be(""), g = s != null, x = g ? s : h, m = q(void 0);
    function C(V) {
      g || f(V.target.value), N('legacyChatView callback "onInput"', d, V), N(
        'legacyChatView callback "onValueInput"',
        u,
        V.target.value,
        V
      );
    }
    function k(V) {
      V.key === "Enter" && !V.shiftKey && !c && (V.preventDefault(), L(V));
    }
    function L(V) {
      c || x.trim() === "" || (N(
        'legacyChatView callback "onSubmit"',
        p,
        x,
        V
      ), g || f(""), m.current?.focus());
    }
    const $ = Yt(e.children), y = (V) => $.find((B) => B?.type === V), w = y(Is), O = y($s), T = w == null ? void 0 : U(w.props).Renderer, j = O == null ? void 0 : U(O.props).Renderer, I = y(Ds), M = [];
    o != null && M.push({ Kind: "message", Text: o, isUser: !1, Index: -1 });
    let D = !1;
    return a.forEach((V, B) => {
      if (qn(V) && V.Type === "annotation")
        M.push({ Kind: "annotation", Renderer: V.Renderer, isUser: D, Index: B });
      else {
        const Y = qn(V) ? V.Type === "user" : !D, Q = qn(V) ? V.Text : V;
        M.push({ Kind: "message", Text: Q, isUser: Y, Index: B }), D = Y;
      }
    }), b`<div class="jcl-component legacy-chatview ${t}"
        style=${n} ...${e.RestProps}
      >
        <div class="turns">
          ${M.map((V) => {
      if (V.Kind === "annotation")
        return b`<div class="turn ${V.isUser ? "from-user" : "from-assistant"}">
                <${ih} Renderer=${V.Renderer}/>
              </>`;
      const B = V.isUser ? T : j, Y = B?.(V.Index);
      return b`<div class="turn ${V.isUser ? "from-user" : "from-assistant"}">
              <div class="bubble">${V.Text}</div>
              ${Y == null ? "" : b`<div class="extra">${Y}</div>`}
            </>`;
    })}
        </>
        <div class="footer">
          <textarea ref=${m}
            placeholder=${r} disabled=${c}
            rows=${i} value=${x}
            onInput=${C} onKeyDown=${k}
          />
          <div class="bottom-row">
            ${I ?? b`<div class="controls"/>`}
            <button class="submit" aria-label=${l ?? "send"}
              disabled=${c || x.trim() === ""}
              onClick=${L}
            >
              <span class="send-icon"/>
              ${l == null ? "" : b`<span>${l}</span>`}
            </>
          </>
        </>
      </>`;
  });
}
const lh = /* @__PURE__ */ Z("jcl-component.legacy-chatview", `
    .jcl-component.legacy-chatview {
      display:flex; flex-flow:column nowrap;
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      font-size:14px;
    }

  /**** the scrollable area with the chat bubbles ****/

    .jcl-component.legacy-chatview > .turns {
      display:flex; flex-flow:column nowrap;
      flex:1 1 auto; min-height:0px; overflow-y:auto; overscroll-behavior-y:contain;
      gap:12px; padding:16px;
    }

    .jcl-component.legacy-chatview .turn {
      display:flex; flex-flow:column nowrap;
      gap:4px; max-width:calc(100% - 32px);
    }

    .jcl-component.legacy-chatview .turn.from-user {
      align-self:flex-end; align-items:flex-end;
    }
    .jcl-component.legacy-chatview .turn.from-assistant {
      align-self:flex-start; align-items:flex-start;
    }

    .jcl-component.legacy-chatview .bubble {
      padding:8px 14px; border-radius:16px;
      line-height:1.5;
      white-space:pre-wrap; overflow-wrap:break-word;
    }

    .jcl-component.legacy-chatview .turn.from-user > .bubble {
      background:var(--jcl-primary-bg-color,#0075ff);
      color:var(--jcl-primary-fg-color,#ffffff);
      border-bottom-right-radius:4px;
    }
    .jcl-component.legacy-chatview .turn.from-assistant > .bubble {
      background:var(--jcl-muted-bg-color,#f5f5f5);
      color:var(--jcl-fg-color,#0a0a0a);
      border-bottom-left-radius:4px;
    }

    .jcl-component.legacy-chatview .extra {
      font-size:12.8px;
      color:var(--jcl-muted-fg-color,#737373);
    }

    .jcl-component.legacy-chatview .annotation {
      max-width:100%;
    }

  /**** the footer with text area, controls and submit button ****/

    .jcl-component.legacy-chatview > .footer {
      display:flex; flex-flow:column nowrap; flex-shrink:0;
      gap:8px;
      border-top:solid 1px var(--jcl-border-color,#ebebeb);
      padding:10px 12px;
    }

    .jcl-component.legacy-chatview > .footer > textarea {
      width:100%;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:calc(var(--jcl-border-radius,8px) - 2px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      padding:8px 12px;
      font:inherit; font-size:14px; line-height:1.5;
      resize:none; outline:none;
      transition:border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .jcl-component.legacy-chatview > .footer > textarea::placeholder {
      color:var(--jcl-muted-fg-color,#737373);
    }
    .jcl-component.legacy-chatview > .footer > textarea:focus-visible {
      border-color:var(--jcl-ring-color,#0075ff);
      box-shadow:0px 0px 0px 3px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
      );
    }
    .jcl-component.legacy-chatview > .footer > textarea:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

    .jcl-component.legacy-chatview .bottom-row {
      display:flex; align-items:center;
      gap:8px;
    }

  /**** the submit button, showing a paper plane ****/

    .jcl-component.legacy-chatview .submit {
      display:inline-flex; align-items:center; justify-content:center;
      gap:6px; flex-shrink:0;
      height:36px; min-width:36px;
      border:none; border-radius:calc(var(--jcl-border-radius,8px) - 2px);
      background:var(--jcl-primary-bg-color,#0075ff);
      color:var(--jcl-primary-fg-color,#ffffff);
      padding:0px 10px;
      font:inherit; font-size:14px; font-weight:500; white-space:nowrap;
      cursor:pointer; outline:none;
      transition:background-color 0.15s ease, box-shadow 0.15s ease;
    }
    .jcl-component.legacy-chatview .submit:hover:not(:disabled) {
      background:color-mix(
        in srgb, var(--jcl-primary-bg-color,#0075ff) 85%, black
      );
    }
    .jcl-component.legacy-chatview .submit:focus-visible {
      box-shadow:0px 0px 0px 3px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
      );
    }
    .jcl-component.legacy-chatview .submit:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

    .jcl-component.legacy-chatview .submit > .send-icon {
      display:inline-block; flex-shrink:0;
      width:16px; height:16px;
      background:currentColor;
      pointer-events:none;
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m22 2-7 20-4-9-9-4Z'/%3E%3Cpath d='M22 2 11 13'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m22 2-7 20-4-9-9-4Z'/%3E%3Cpath d='M22 2 11 13'/%3E%3C/svg%3E");
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
      -webkit-mask-repeat:no-repeat;       mask-repeat:no-repeat;
    }
  `);
function $s(e) {
  return "";
}
function Is(e) {
  return "";
}
function Ds(e) {
  return K(() => {
    ch(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    return b`<div class="controls ${t}"
        style=${n} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
const ch = /* @__PURE__ */ Z("jcl-component.legacy-chatview-controls", `
    .jcl-component.legacy-chatview .controls {
      display:flex; align-items:center; flex-wrap:wrap;
      flex:1 1 auto;
      gap:6px;
    }
  `);
let ba, Do;
const dh = co(() => Promise.all([
  at("jspreadsheet-ce"),
  at("@jspreadsheet/formula")
]).then(([e, t]) => {
  ba = e.default ?? e, Do = t.default ?? t, uh();
})), ya = [];
function uh() {
  for (; ya.length > 0; )
    ar(ya.shift());
}
function ar(e) {
  return Do == null ? (ya.push(e), !0) : typeof Do?.setFormula != "function" ? (console.warn(
    '@jspreadsheet/formula: "setFormula" is unavailable - custom formulas could not be registered'
  ), !1) : (Do.setFormula(e), !0);
}
function ph(e, t) {
  Xt("formula name", e), Wt("formula function", t), ar({ [e.toUpperCase()]: t });
}
function hh(e) {
  xt("formula set", e);
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, o] of Object.entries(e))
    typeof o == "function" && (t[n.toUpperCase()] = o);
  ar(t);
}
function fh(e) {
  return K(() => {
    gh();
    const t = Tn(dh);
    e = U(e);
    const n = S(e.Class) ?? "", o = E(e.Data, (C) => Array.isArray(C)) ?? [[]], a = E(e.Columns, (C) => Array.isArray(C)), r = qt(e.minRows) ?? 5, i = qt(e.minColumns), s = J(e.readonly) ?? !1, l = J(e.disabled) ?? !1, c = A(e.onDataChange), d = A(e.onCellChange), u = A(e.onMount), p = A(e.onUnmount), h = q(null), f = q(void 0), g = q(o), x = q(e.Data), m = q({});
    return m.current = { onDataChange: c, onCellChange: d, onUnmount: p }, Ce(() => {
      if (!t)
        return;
      const C = h.current;
      if (C == null)
        return;
      const L = ba(C, {
        worksheets: [{
          data: g.current,
          columns: a,
          minDimensions: [i ?? a?.length ?? 4, r],
          onchange: (O, T, j, I, M) => {
            const D = f.current;
            g.current = D.getData(), N(
              'Spreadsheet callback "onCellChange"',
              m.current.onCellChange,
              j,
              I,
              M
            ), N(
              'Spreadsheet callback "onDataChange"',
              m.current.onDataChange,
              g.current
            );
          }
        }]
      })[0];
      f.current = L;
      const $ = (O) => {
        const T = O.querySelector(
          "input, textarea"
        );
        if (T == null || T.value !== "")
          return;
        const j = Number(O.getAttribute("data-x")), I = Number(O.getAttribute("data-y")), M = L.getValueFromCoords(j, I);
        typeof M == "string" && M !== "" && (T.value = M);
      }, y = new MutationObserver((O) => {
        for (const T of O)
          for (const j of T.addedNodes) {
            if (!(j instanceof HTMLElement) || j.tagName !== "INPUT" && j.tagName !== "TEXTAREA")
              continue;
            const I = j.closest("td[data-x][data-y]");
            I instanceof HTMLElement && $(I);
          }
      });
      return y.observe(C, { childList: !0, subtree: !0 }), N(
        'Spreadsheet callback "onMount"',
        u,
        {
          instance: L,
          getData: () => L.getData(),
          setData: (O) => {
            g.current = O, x.current = O, L.setData(O);
          },
          getCell: (O, T) => L.getValueFromCoords(O, T),
          setCell: (O, T, j) => {
            L.setValueFromCoords(O, T, j), g.current = L.getData();
          },
          focus: () => h.current?.querySelector("td")?.focus()
        }
      ), () => {
        y.disconnect(), N(
          'Spreadsheet callback "onUnmount"',
          m.current.onUnmount
        ), ba.destroy(C), f.current = void 0;
      };
    }, [t]), Ce(() => {
      const C = f.current;
      C != null && e.Data !== x.current && (x.current = e.Data, g.current = e.Data ?? [[]], C.setData(g.current));
    }), Ce(() => {
      const C = h.current;
      C != null && (C.style.opacity = l ? "0.5" : "", C.style.pointerEvents = s || l ? "none" : "");
    }, [s, l]), b`<div
        class="jcl-component spreadsheeteditor ${l ? "disabled" : ""} ${n}"
        ...${e.RestProps} ref=${h}
      />`;
  });
}
const gh = /* @__PURE__ */ Z("jcl-component.spreadsheeteditor", `
    .jcl-component.spreadsheeteditor {
      position:relative; overflow:auto;
      background:white; color:black;
      font-size:14px;
    }

    .jcl-component.spreadsheeteditor.disabled {
      opacity:0.6; pointer-events:none;
    }
  `), oa = "application/x-jcl-kanban-task+json";
function mh(e, t, n) {
  return e.Id != null ? "" + e.Id : er(e);
}
function bh(e, t, n, o = !1, a = "") {
  return typeof e.toHTML == "function" ? b`<div class="default" dangerouslySetInnerHTML=${{ __html: e.toHTML() }}/>` : b`<div class="default">
        <div class="title">${e.Title ?? "" + e}</>
        ${e.Description != null && b`<div class="description">${e.Description}</>`}
      </>`;
}
function yh(e, t) {
  return b`<div class="default">
      <div class="title">${e.Title ?? "" + e}</>
      <div class="count">${t.length}${e.Limit != null ? `/${e.Limit}` : ""}</>
    </>`;
}
function xh(e) {
  return K(() => {
    wh(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Columns, (D) => je(D, De)) ?? Se("Columns"), o = E(e.Tasks, (D) => je(D, De)) ?? Se("Tasks"), a = S(e.Placeholder), r = A(e.KeyOfTask) ?? mh, i = A(e.TaskRenderer) ?? bh, s = A(e.ColumnHeaderRenderer) ?? yh, l = A(e.onTaskClick), c = A(e.onColumnClick), d = J(e.allowsReorder) ?? !0, u = J(e.allowsCrossColumnDrag) ?? !0, p = ve(e.SelectionLimit) ?? 1, h = A(e.TaskMayBeDropped), f = A(e.onTaskMove), g = d && f != null, x = u && f != null;
    ri(n, '"Columns"'), ri(o, '"Tasks"');
    const [m, C] = Be({}), k = q([]);
    function L(D) {
      k.current = [...k.current, D];
    }
    function $(D) {
      const V = [];
      k.current.forEach((B) => {
        B.FromColumn.Id === D ? N(
          'KanbanBoard callback "onTaskMove"',
          f,
          B.Task,
          B.FromColumn,
          B.ToColumn,
          B.ToIndex
        ) : V.push(B);
      }), k.current = V;
    }
    const y = {};
    n.forEach((D) => {
      y[D.Id] = D;
    });
    const w = {};
    o.forEach((D, V) => {
      w[r(D, o, V)] = D;
    });
    function O(D) {
      return y[D.ColumnId];
    }
    function T(D) {
      return o.filter((V) => V.ColumnId === D);
    }
    function j(D, V) {
      const B = D.target.closest?.(".itemview");
      if (B?.Item == null)
        return V.length;
      const Y = B.getBoundingClientRect().top + B.offsetHeight / 2, Q = D.clientY < Y ? "before" : "after", pe = V.indexOf(B.Item);
      return pe < 0 ? V.length : pe + (Q === "before" ? 0 : 1);
    }
    function I(D) {
      x && D.dataTransfer?.types.includes(oa) && D.preventDefault();
    }
    function M(D, V) {
      return (B) => {
        if (!x)
          return;
        const Y = B.dataTransfer?.getData(oa);
        if (Y == null || Y === "")
          return;
        let Q;
        try {
          Q = JSON.parse(Y);
        } catch {
          return;
        }
        const pe = j(B, V);
        Q.forEach((P, X) => {
          const te = w[P];
          if (te == null)
            return;
          const ue = O(te);
          if (ue == null || ue === D)
            return;
          const xe = pe + X;
          h != null && !He(
            'KanbanBoard callback "TaskMayBeDropped"',
            h,
            te,
            D,
            xe
          ) || L({ Task: te, FromColumn: ue, ToColumn: D, ToIndex: xe });
        });
      };
    }
    return b`<div class="jcl-component kanbanboard ${t}" ...${e.RestProps}>
        ${n.map((D) => {
      const V = T(D.Id), B = m[D.Id] ?? [];
      return b`<div class="column" key=${D.Id}
            onDragOver=${I} onDrop=${M(D, V)}
            onDragEnd=${() => $(D.Id)}
          >
            <div class="column-header" onClick=${(Y) => N(
        'KanbanBoard callback "onColumnClick"',
        c,
        D,
        Y
      )}>
              ${He(
        'KanbanBoard callback "ColumnHeaderRenderer"',
        s,
        D,
        V
      )}
            </div>
            <${Xi}
              Class="column-body"
              List=${V} Placeholder=${a}
              KeyOfListItem=${r} ListItemRenderer=${i}
              onListItemClick=${(Y, Q, pe, P) => N('KanbanBoard callback "onTaskClick"', l, Y, D, P)}
              selectedItems=${B} SelectionLimit=${p}
              onSelectionChange=${(Y) => C(
        (Q) => ({ ...Q, [D.Id]: Y })
      )}
              onListItemMove=${g ? (Y, Q) => {
        Q.length !== 0 && Q.forEach((pe) => N(
          'KanbanBoard callback "onTaskMove"',
          f,
          pe,
          D,
          D,
          Y.indexOf(pe)
        ));
      } : void 0}
              DragMIMEType=${x ? oa : void 0}
              SerializeListItems=${(Y) => JSON.stringify(
        Y.map((Q, pe) => r(Q, Y, pe))
      )}
            />
          </>`;
    })}
      </>`;
  });
}
const wh = /* @__PURE__ */ Z("jcl-component.kanbanboard", `
    .jcl-component.kanbanboard {
      display:flex !important; flex-flow:row nowrap !important; align-items:stretch !important;
      gap:10px; overflow-x:auto; overflow-y:hidden; overscroll-behavior-x:contain;
      padding:0px;
    }

    .jcl-component.kanbanboard > .column {
      display:flex; flex-flow:column nowrap; align-items:stretch;
      flex:0 0 260px; min-width:200px; max-height:100%;
      background:#EEEEEE; border:solid 1px #888888; border-radius:4px;
      overflow:hidden;
    }

    .jcl-component.kanbanboard > .column > .column-header {
      flex:0 0 auto; padding:6px 8px; cursor:pointer;
      border-bottom:solid 1px #888888; background:#E0E0E0;
      user-select:none;
    }
    .jcl-component.kanbanboard > .column > .column-header > .default {
      display:flex; flex-flow:row nowrap; align-items:center; justify-content:space-between;
    }
    .jcl-component.kanbanboard > .column > .column-header > .default > .title {
      font-weight:bold; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
    }
    .jcl-component.kanbanboard > .column > .column-header > .default > .count {
      color:#666666; font-size:12px; margin-left:8px; flex:0 0 auto;
    }

    .jcl-component.kanbanboard > .column > .jcl-component.flatlistview.column-body {
      flex:1 1 auto; border:none; border-radius:0px; background:transparent;
    }

    .jcl-component.kanbanboard .itemview > .default {
      height:auto; line-height:normal; padding:6px 8px;
      white-space:normal;
    }
    .jcl-component.kanbanboard .itemview > .default > .title {
      font-weight:600;
    }
    .jcl-component.kanbanboard .itemview > .default > .description {
      color:#666666; font-size:12px; margin-top:2px;
    }
  `);
let Ls;
const vh = co(() => at("uqr").then((e) => {
  Ls = e.renderSVG;
})), Ch = ["L", "M", "Q", "H"];
function kh(e) {
  return K(() => {
    jh();
    const t = Tn(vh);
    e = U(e);
    const n = S(e.Class) ?? "", o = ae(e.Value) ?? Se("Value"), a = E(e.ECCLevel, (p) => fe(p, [...Ch])) ?? "M", r = ve(e.BorderWidth) ?? 1, i = Ao(e.minVersion, 1, 40) ?? 1, s = Ao(e.maxVersion, i, 40) ?? 40, l = bt(e.ForegroundColor) ?? "currentColor", c = bt(e.BackgroundColor) ?? "transparent", d = S(e.Label), u = Zt(() => t ? Ls(o, {
      ecc: a,
      border: r,
      minVersion: i,
      maxVersion: s,
      blackColor: l,
      whiteColor: c
    }) : "", [
      t,
      o,
      a,
      r,
      i,
      s,
      l,
      c
    ]);
    return b`<div
        class="jcl-component legacy-qrcode-view ${n}"
        role="img" aria-label=${d ?? o}
        dangerouslySetInnerHTML=${{ __html: u }}
        ...${e.RestProps}
      />`;
  });
}
const jh = /* @__PURE__ */ Z("jcl-component.qrcodeview", `
    .jcl-component.legacy-qrcode-view {
      display:inline-block; position:relative;
      width:160px; height:160px;
    }

    .jcl-component.legacy-qrcode-view > svg {
      display:block;
      width:100%; height:100%;
    }
  `), bn = /* @__PURE__ */ Z("jcl-component.styled-input", `
    .jcl-component.styled-input {
      height:36px; min-width:0px;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      background:color-mix(              /* slight tint for editable fields */
        in srgb, var(--jcl-primary-bg-color,#1e90ff) 12%, transparent
      );        /* with "dodgerblue" over white, this comes close to #e8f0ff */
      color:var(--jcl-fg-color,#0a0a0a);
      padding:4px 12px;
      font:inherit; font-size:14px; line-height:1.5;
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
      outline:none;
      transition:color 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .jcl-component.styled-input::placeholder {
      color:var(--jcl-muted-fg-color,#737373);
    }

    .jcl-component.styled-input::selection {
      background:var(--jcl-primary-bg-color,#1e90ff);
      color:var(--jcl-primary-fg-color,#ffffff);
    }

    .jcl-component.styled-input:focus-visible {
      border-color:var(--jcl-ring-color,#1e90ff);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-ring-color,#1e90ff) 20%, transparent
        );
    }

    .jcl-component.styled-input:invalid,
    .jcl-component.styled-input.invalid {
      border-color:var(--jcl-destructive-bg-color,#e7000b);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-destructive-bg-color,#e7000b) 20%, transparent
        );
    }

    .jcl-component.styled-input[readonly] {
      background:transparent;
    }

  /**** "disabled" also overrides JCL's general "[disabled]" opacity rule ****/

    .jcl-component.styled-input:disabled {
      pointer-events:none; cursor:not-allowed;
      background:var(--jcl-muted-bg-color,#f5f5f5);
      color:var(--jcl-muted-fg-color,#737373);
      opacity:1;
    }

  /**** size variants (following the shadcn size scale "sm"/"lg") ****/

    .jcl-component.styled-input.size-small {
      height:32px; padding:2px 10px; font-size:13px;
    }

    .jcl-component.styled-input.size-large {
      height:40px; padding:6px 16px; font-size:16px;
    }
  `);
function Ss(e) {
  return K(() => {
    Xo(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = E(e.Variant, (s) => fe(s, ["default", "destructive", "outline", "secondary", "ghost"])) ?? "default", a = E(e.Size, (s) => fe(s, ["xs", "small", "normal", "large"])) ?? "normal", r = e.children, i = nt(a);
    return ho("button", `jcl-component styled-button variant-${o} ${i} ${t}`, void 0, e.RestProps, n, r);
  });
}
const Xo = /* @__PURE__ */ Z("jcl-component.styled-button", `
    .jcl-component.styled-button {
      display:inline-flex; align-items:center; justify-content:center;
      gap:8px; flex-shrink:0;
      height:36px; padding:8px 16px;
      border:none; border-radius:var(--jcl-border-radius,8px);
      font:inherit; font-size:14px; font-weight:500; white-space:nowrap;
      cursor:pointer; pointer-events:auto;
      outline:none;
      transition:color 0.15s ease, background-color 0.15s ease,
        border-color 0.15s ease, box-shadow 0.15s ease;
    }

    .jcl-component.styled-button:focus-visible {
      box-shadow:0px 0px 0px 3px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
      );
    }

  /**** "disabled" also overrides JCL's general "[disabled]" opacity rule ****/

    .jcl-component.styled-button:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

  /**** button variants ****/

    .jcl-component.styled-button.variant-default {
      background:var(--jcl-primary-bg-color,#0075ff);
      color:var(--jcl-primary-fg-color,#ffffff);
    }
    .jcl-component.styled-button.variant-default:hover {
      background:color-mix(  /* darkens on hover, like Chrome's own controls */
        in srgb, var(--jcl-primary-bg-color,#0075ff) 85%, black
      );
    }

    .jcl-component.styled-button.variant-destructive {
      background:var(--jcl-destructive-bg-color,#e7000b);
      color:var(--jcl-destructive-fg-color,#ffffff);
    }
    .jcl-component.styled-button.variant-destructive:hover {
      background:color-mix(
        in srgb, var(--jcl-destructive-bg-color,#e7000b) 90%, transparent
      );
    }
    .jcl-component.styled-button.variant-destructive:focus-visible {
      box-shadow:0px 0px 0px 3px color-mix(
        in srgb, var(--jcl-destructive-bg-color,#e7000b) 20%, transparent
      );
    }

    .jcl-component.styled-button.variant-outline {
      border:solid 1px var(--jcl-border-color,#ebebeb);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
    }
    .jcl-component.styled-button.variant-outline:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

    .jcl-component.styled-button.variant-secondary {
      background:var(--jcl-secondary-bg-color,#f7f7f7);
      color:var(--jcl-secondary-fg-color,#171717);
    }
    .jcl-component.styled-button.variant-secondary:hover {
      background:color-mix(
        in srgb, var(--jcl-secondary-bg-color,#f7f7f7) 80%, transparent
      );
    }

    .jcl-component.styled-button.variant-ghost {
      background:transparent;
      color:var(--jcl-fg-color,#0a0a0a);
    }
    .jcl-component.styled-button.variant-ghost:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

  /**** size variants (following the shadcn size scale "xs"/"sm"/"lg") ****/

    .jcl-component.styled-button.size-xs {
      height:24px; padding:0px 8px; gap:4px; font-size:12px;
    }

    .jcl-component.styled-button.size-small {
      height:32px; padding:0px 12px; gap:6px;
    }

    .jcl-component.styled-button.size-large {
      height:40px; padding:0px 24px;
    }
  `);
function xa(e) {
  return K(() => {
    $h(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = E(e.Value, (f) => gn(f) || Ke(f));
    const a = E(e.Size, (f) => fe(f, ["small", "normal", "large"])) ?? "normal", r = J(e.disabled), i = A(e.onValueInput), s = A(e.onClick);
    o = o ?? ut;
    const { actualValue: l, actualDisabling: c } = Ze(o, r), d = l == !0, u = l == null || Ke(o), p = se((f) => {
      if (Le(f, c), c == !0)
        return;
      N('styledCheckbox callback "onClick"', s, f);
      const g = f.target.checked;
      N(
        'styledCheckbox callback "onValueInput"',
        i,
        g,
        f
      );
    }, [c, s, i]), h = nt(a);
    return b`<div class="jcl-component styled-checkbox ${h} ${c ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="checkbox"
          checked=${d} indeterminate=${u}
          disabled=${c} onClick=${p} ...${e.RestProps}
        />
      </>`;
  });
}
const $h = /* @__PURE__ */ Z("jcl-component.styled-checkbox", `
    .jcl-component.styled-checkbox {
      height:36px;
      min-width:20px; min-height:20px;
    }

  /**** "disabled" also overrides JCL's general ".disabled" opacity rule ****/

    .jcl-component.styled-checkbox.disabled {
      opacity:0.5;
    }

    .jcl-component.styled-checkbox > input {
      -webkit-appearance:none; appearance:none;
      position:absolute; left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
      width:16px; height:16px;
      border:solid 1px var(--jcl-input-border-color,var(--jcl-border-color,#ebebeb));
      border-radius:4px;
      background:transparent;
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
      outline:none;
      cursor:pointer;
      transition:background-color 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .jcl-component.styled-checkbox > input:focus-visible {
      border-color:var(--jcl-ring-color,#2563eb);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-ring-color,#2563eb) 20%, transparent
        );
    }

    .jcl-component.styled-checkbox > input:disabled {
      pointer-events:none; cursor:not-allowed;
    }

  /**** checked and indeterminate states use the primary color ****/

    .jcl-component.styled-checkbox > input:checked,
    .jcl-component.styled-checkbox > input:indeterminate {
      border-color:var(--jcl-primary-bg-color,#171717);
      background:var(--jcl-primary-bg-color,#171717);
    }

    .jcl-component.styled-checkbox > input::after {
      content:''; display:block;
      width:100%; height:100%;
      background:transparent;
      -webkit-mask-size:80%;               mask-size:80%;
      -webkit-mask-position:center center; mask-position:center center;
      -webkit-mask-repeat:no-repeat;       mask-repeat:no-repeat;
    }

    .jcl-component.styled-checkbox > input:checked::after {
      background:var(--jcl-primary-fg-color,#fafafa);
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
    }

    .jcl-component.styled-checkbox > input:indeterminate::after {
      background:var(--jcl-primary-fg-color,#fafafa);
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
    }

  /**** size variants ****/

    .jcl-component.styled-checkbox.size-small > input {
      width:14px; height:14px; border-radius:3px;
    }

    .jcl-component.styled-checkbox.size-large > input {
      width:20px; height:20px; border-radius:5px;
    }
  `);
function Ms(e) {
  return K(() => {
    Ih(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = E(e.Value, (h) => gn(h) || Ke(h));
    const a = E(e.Size, (h) => fe(h, ["small", "normal", "large"])) ?? "normal", r = J(e.disabled), i = A(e.onValueInput), s = A(e.onClick);
    o = o ?? ut;
    const { actualValue: l, actualDisabling: c } = Ze(o, r), d = l == !0, u = se((h) => {
      if (Le(h, c), c == !0)
        return;
      N('styledRadiobutton callback "onClick"', s, h);
      const f = h.target.checked;
      N(
        'styledRadiobutton callback "onValueInput"',
        i,
        f,
        h
      );
    }, [c, s, i]), p = nt(a);
    return b`<div class="jcl-component styled-radiobutton ${p} ${c ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="radio" checked=${d} disabled=${c} onClick=${u} ...${e.RestProps}/>
      </>`;
  });
}
const Ih = /* @__PURE__ */ Z("jcl-component.styled-radiobutton", `
    .jcl-component.styled-radiobutton {
      height:36px;
      min-width:20px; min-height:20px;
    }

  /**** "disabled" also overrides JCL's general ".disabled" opacity rule ****/

    .jcl-component.styled-radiobutton.disabled {
      opacity:0.5;
    }

    .jcl-component.styled-radiobutton > input {
      -webkit-appearance:none; appearance:none;
      position:absolute; left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
      width:16px; height:16px;
      border:solid 1px var(--jcl-input-border-color,var(--jcl-border-color,#ebebeb));
      border-radius:50%;
      background:transparent;
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
      outline:none;
      cursor:pointer;
      transition:border-color 0.15s ease, box-shadow 0.15s ease;
    }

    .jcl-component.styled-radiobutton > input:focus-visible {
      border-color:var(--jcl-ring-color,#2563eb);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-ring-color,#2563eb) 20%, transparent
        );
    }

    .jcl-component.styled-radiobutton > input:disabled {
      pointer-events:none; cursor:not-allowed;
    }

  /**** when checked, just a small primary-coloured dot appears ****/

    .jcl-component.styled-radiobutton > input::after {
      content:''; display:block;
      position:absolute; left:50%; top:50%;
      transform:translate(-50%,-50%);
      width:8px; height:8px;
      border-radius:50%;
      background:transparent;
      transition:background-color 0.15s ease;
    }

    .jcl-component.styled-radiobutton > input:checked::after {
      background:var(--jcl-primary-bg-color,#171717);
    }

  /**** size variants ****/

    .jcl-component.styled-radiobutton.size-small > input {
      width:14px; height:14px;
    }
    .jcl-component.styled-radiobutton.size-small > input::after {
      width:7px; height:7px;
    }

    .jcl-component.styled-radiobutton.size-large > input {
      width:20px; height:20px;
    }
    .jcl-component.styled-radiobutton.size-large > input::after {
      width:10px; height:10px;
    }
  `);
function Dh(e) {
  return K(() => {
    Lh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = _e(e.Value), a = _e(e.Min ?? e.Minimum), r = _e(e.Low ?? e.lowerBound), i = _e(e.Opt ?? e.Optimum), s = _e(e.High ?? e.upperBound), l = _e(e.Max ?? e.Maximum), c = E(e.Size, (u) => fe(u, ["small", "normal", "large"])) ?? "normal", d = nt(c);
    return b`<div class="jcl-component styled-gauge ${d} ${t}" style=${n}>
        <meter
          value=${o} min=${a} low=${r} opt=${i}
          high=${s} max=${l} ...${e.RestProps}
        />
      </>`;
  });
}
const Lh = /* @__PURE__ */ Z("jcl-component.styled-gauge", `
    .jcl-component.styled-gauge {
      height:36px;
      min-width:40px; min-height:20px;
    }

    .jcl-component.styled-gauge > meter {
      position:absolute;
      left:50%; top:50%; width:100%; height:8px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
      -webkit-appearance:none; appearance:none;
      border:none; border-radius:9999px;
      background:color-mix(
        in srgb, var(--jcl-primary-bg-color,#171717) 20%, transparent
      );
      overflow:hidden;
    }

  /**** WebKit/Blink: track and the three value states ****/

    .jcl-component.styled-gauge > meter::-webkit-meter-bar {
      border:none; border-radius:9999px;
      background:color-mix(
        in srgb, var(--jcl-primary-bg-color,#171717) 20%, transparent
      );
    }

    .jcl-component.styled-gauge > meter::-webkit-meter-optimum-value {
      background:var(--jcl-success-bg-color,#00a63e);
    }

    .jcl-component.styled-gauge > meter::-webkit-meter-suboptimum-value {
      background:var(--jcl-warning-bg-color,#fd9a00);
    }

    .jcl-component.styled-gauge > meter::-webkit-meter-even-less-good-value {
      background:var(--jcl-destructive-bg-color,#e7000b);
    }

  /**** Firefox: one bar pseudo element, states as classes on the meter ****/

    .jcl-component.styled-gauge > meter::-moz-meter-bar {
      border:none;
      background:var(--jcl-success-bg-color,#00a63e);
    }

    .jcl-component.styled-gauge > meter:-moz-meter-sub-optimum::-moz-meter-bar {
      background:var(--jcl-warning-bg-color,#fd9a00);
    }

    .jcl-component.styled-gauge > meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
      background:var(--jcl-destructive-bg-color,#e7000b);
    }

  /**** size variants ****/

    .jcl-component.styled-gauge.size-small > meter {
      height:6px;
    }

    .jcl-component.styled-gauge.size-large > meter {
      height:12px;
    }
  `);
function Sh(e) {
  return K(() => {
    Mh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = _e(e.Value), a = _e(e.Max ?? e.Maximum), r = E(e.Size, (s) => fe(s, ["small", "normal", "large"])) ?? "normal", i = nt(r);
    return b`<div class="jcl-component styled-progressbar ${i} ${t}" style=${n}>
        <progress value=${o} max=${a} ...${e.RestProps}/>
      </>`;
  });
}
const Mh = /* @__PURE__ */ Z("jcl-component.styled-progressbar", `
    .jcl-component.styled-progressbar {
      height:36px;
      min-width:40px; min-height:20px;
    }

    .jcl-component.styled-progressbar > progress {
      position:absolute;
      left:50%; top:50%; width:100%; height:8px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
      -webkit-appearance:none; appearance:none;
      border:none; border-radius:9999px;
      background:color-mix(               /* also the track color in Firefox */
        in srgb, var(--jcl-primary-bg-color,#171717) 20%, transparent
      );
      overflow:hidden;
    }

  /**** WebKit/Blink: track and fill ****/

    .jcl-component.styled-progressbar > progress::-webkit-progress-bar {
      border:none; border-radius:9999px;
      background:color-mix(
        in srgb, var(--jcl-primary-bg-color,#171717) 20%, transparent
      );
    }

    .jcl-component.styled-progressbar > progress::-webkit-progress-value {
      border:none;
      background:var(--jcl-primary-bg-color,#171717);
      transition:width 0.15s ease;
    }

  /**** Firefox: fill only (the track is the progress background itself) ****/

    .jcl-component.styled-progressbar > progress::-moz-progress-bar {
      border:none;
      background:var(--jcl-primary-bg-color,#171717);
    }

  /**** size variants ****/

    .jcl-component.styled-progressbar.size-small > progress {
      height:6px;
    }

    .jcl-component.styled-progressbar.size-large > progress {
      height:12px;
    }
  `);
function Th(e) {
  return K(() => {
    Rh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (I) => wt(I) || Ke(I)), a = _e(e.Min ?? e.Minimum), r = E(e.Step, (I) => no(I, 0, 1 / 0, !1, !1)), i = _e(e.Max ?? e.Maximum), s = E(e.Hashmarks, (I) => je(I, Ne)), l = E(e.Size, (I) => fe(I, ["small", "normal", "large"])) ?? "normal", c = J(e.disabled) ?? !1, d = A(e.onValueInput), u = A(e.onInput), p = A(e.onBlur), { ViewRef: h, shownValue: f, ValueToShow: g } = Pt(
      Ke(o) || o != null && !isNaN(o) ? o : ut
    ), { actualValue: x, actualDisabling: m } = Ze(g, c), C = tt(), { _onInput: k, _onBlur: L } = en({
      Name: "styledSlider",
      actualDisabling: m,
      shownValue: f,
      onInput: u,
      onValueInput: d,
      onBlur: p,
      processedInput: (I) => {
        const M = f.current = parseFloat(I.target.value);
        return C(), M;
      }
    }), $ = a ?? 0, y = i ?? 100;
    let w = 0;
    wt(x) && y > $ && (w = Math.max(0, Math.min(
      100,
      (x - $) * 100 / (y - $)
    )));
    const { SuggestionId: O, SuggestionList: T } = tn(
      s,
      (I) => {
        const { Value: M, Label: D } = Ct(I);
        return b`<option value=${M}>${D}</option>`;
      }
    ), j = nt(l);
    return b`<div class="jcl-component styled-slider ${j} ${t}" style=${n}>
        <input type="range" ref=${h} disabled=${m}
          style="--jcl-slider-fill:${w}%"
          value=${x} min=${a} max=${i} step=${r}
          list=${O}
          onInput=${k} onBlur=${L} ...${e.RestProps}
        />${T}
      </>`;
  });
}
const Rh = /* @__PURE__ */ Z("jcl-component.styled-slider", `
    .jcl-component.styled-slider {
      height:36px;
      min-width:40px; min-height:20px;
    }

    .jcl-component.styled-slider > input {
      position:absolute;
      left:50%; top:50%; width:100%; height:20px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
      -webkit-appearance:none; appearance:none;
      background:transparent;
      outline:none;
      cursor:pointer;
    }

  /**** "disabled" also overrides JCL's general "[disabled]" opacity rule ****/

    .jcl-component.styled-slider > input:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

  /**** WebKit/Blink: track (with fill gradient) and thumb ****/

    .jcl-component.styled-slider > input::-webkit-slider-runnable-track {
      height:6px; border-radius:9999px;
      background:linear-gradient(to right,
        var(--jcl-primary-bg-color,#171717) var(--jcl-slider-fill,0%),
        var(--jcl-muted-bg-color,#f5f5f5)   var(--jcl-slider-fill,0%)
      );
    }

    .jcl-component.styled-slider > input::-webkit-slider-thumb {
      -webkit-appearance:none; appearance:none;
      margin-top:-5px;                            /* (thumb - track) / 2 */
      width:16px; height:16px; border-radius:50%;
      border:solid 1px var(--jcl-primary-bg-color,#171717);
      background:#ffffff;
      box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1),
        0px 1px 2px -1px rgba(0,0,0,0.1);
      transition:box-shadow 0.15s ease;
    }

    .jcl-component.styled-slider > input:hover::-webkit-slider-thumb,
    .jcl-component.styled-slider > input:focus-visible::-webkit-slider-thumb {
      box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1),
        0px 1px 2px -1px rgba(0,0,0,0.1),
        0px 0px 0px 4px color-mix(
          in srgb, var(--jcl-ring-color,#2563eb) 50%, transparent
        );
    }

  /**** Firefox: track, filled range and thumb ****/

    .jcl-component.styled-slider > input::-moz-range-track {
      height:6px; border-radius:9999px;
      background:var(--jcl-muted-bg-color,#f5f5f5);
    }

    .jcl-component.styled-slider > input::-moz-range-progress {
      height:6px; border-radius:9999px;
      background:var(--jcl-primary-bg-color,#171717);
    }

    .jcl-component.styled-slider > input::-moz-range-thumb {
      width:16px; height:16px; border-radius:50%;
      border:solid 1px var(--jcl-primary-bg-color,#171717);
      background:#ffffff;
      box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1),
        0px 1px 2px -1px rgba(0,0,0,0.1);
      transition:box-shadow 0.15s ease;
    }

    .jcl-component.styled-slider > input:hover::-moz-range-thumb,
    .jcl-component.styled-slider > input:focus-visible::-moz-range-thumb {
      box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1),
        0px 1px 2px -1px rgba(0,0,0,0.1),
        0px 0px 0px 4px color-mix(
          in srgb, var(--jcl-ring-color,#2563eb) 50%, transparent
        );
    }

  /**** size variants ****/

    .jcl-component.styled-slider.size-small > input::-webkit-slider-runnable-track {
      height:4px;
    }
    .jcl-component.styled-slider.size-small > input::-webkit-slider-thumb {
      margin-top:-5px;
      width:14px; height:14px;
    }
    .jcl-component.styled-slider.size-small > input::-moz-range-track,
    .jcl-component.styled-slider.size-small > input::-moz-range-progress {
      height:4px;
    }
    .jcl-component.styled-slider.size-small > input::-moz-range-thumb {
      width:14px; height:14px;
    }

    .jcl-component.styled-slider.size-large > input::-webkit-slider-runnable-track {
      height:8px;
    }
    .jcl-component.styled-slider.size-large > input::-webkit-slider-thumb {
      margin-top:-6px;
      width:20px; height:20px;
    }
    .jcl-component.styled-slider.size-large > input::-moz-range-track,
    .jcl-component.styled-slider.size-large > input::-moz-range-progress {
      height:8px;
    }
    .jcl-component.styled-slider.size-large > input::-moz-range-thumb {
      width:20px; height:20px;
    }
  `), Ah = /* @__PURE__ */ kt({
  Name: "styledTextlineInput",
  InputType: "text",
  ClassName: "styled-textline-input",
  ValueIsValid: Ne,
  withSpellChecking: !0,
  Styled: !0
}), Fh = /* @__PURE__ */ kt({
  Name: "styledPasswordInput",
  InputType: "password",
  ClassName: "styled-password-input",
  ValueIsValid: Ne,
  withSuggestions: !1,
  Styled: !0
});
function zh(e) {
  return K(() => {
    bn(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Value, (D) => wt(D) || Ke(D)), o = J(e.invalid), a = S(e.Placeholder), r = J(e.readonly), i = _e(e.Min ?? e.Minimum), s = E(e.Step, (D) => no(D, 0, 1 / 0, !1, !1)), l = _e(e.Max ?? e.Maximum), c = Ao(e.Digits, 0, 15), d = J(e.withoutTrailingZeros) ?? !1, u = E(e.Suggestions, (D) => je(D, wt)), p = E(e.Size, (D) => fe(D, ["small", "normal", "large"])) ?? "normal", h = J(e.disabled) ?? !1, f = A(e.onValueInput), g = A(e.onInput), x = A(e.onBlur);
    let m = s;
    if (c != null) {
      const D = Math.pow(10, -c);
      m = Math.max(s ?? D, D);
    }
    const { ViewRef: C, shownValue: k, ValueToShow: L } = Pt(
      Ke(n) || n != null && !isNaN(n) ? n : ut,
      (D) => (c != null && wt(D) && (D = D.toFixed(c), d && (D = parseFloat(D))), D)
    ), { actualValue: $, actualPlaceholder: y, actualDisabling: w } = Ze(L, h, a), { _onInput: O, _onBlur: T } = en({
      Name: "styledNumberInput",
      actualDisabling: w,
      shownValue: k,
      onInput: g,
      onValueInput: f,
      onBlur: x,
      processedInput: (D) => {
        const V = parseFloat(D.target.value);
        return k.current = isNaN(V) ? void 0 : V, k.current;
      }
    }), { SuggestionId: j, SuggestionList: I } = tn(u), M = nt(p);
    return b`<input type="number" ref=${C}
        class="jcl-component styled-input styled-number-input ${M} ${t} ${o ? "invalid" : ""}"
        value=${$ ?? ""} min=${i} max=${l} step=${m}
        readOnly=${r} placeholder=${y}
        disabled=${w} list=${j}
        aria-invalid=${o ? "true" : void 0}
        onInput=${O} onBlur=${T} ...${e.RestProps}
      />${I}`;
  });
}
const Oh = /* @__PURE__ */ kt({
  Name: "styledEMailAddressInput",
  InputType: "email",
  ClassName: "styled-emailaddress-input",
  ValueIsValid: Xn,
  withMultiple: !0,
  Styled: !0
}), Vh = /* @__PURE__ */ kt({
  Name: "styledPhoneNumberInput",
  InputType: "tel",
  ClassName: "styled-phonenumber-input",
  ValueIsValid: Bo,
  Styled: !0
}), Eh = /* @__PURE__ */ kt({
  Name: "styledURLInput",
  InputType: "url",
  ClassName: "styled-url-input",
  ValueIsValid: ot,
  Styled: !0
}), Nh = /* @__PURE__ */ At({
  Name: "styledTimeInput",
  InputType: "time",
  ClassName: "styled-time-input",
  ValueIsValid: _i,
  Styled: !0
}), Bh = /* @__PURE__ */ At({
  Name: "styledDateTimeInput",
  InputType: "datetime-local",
  ClassName: "styled-datetime-input",
  ValueIsValid: Gi,
  Styled: !0
}), Wh = /* @__PURE__ */ At({
  Name: "styledDateInput",
  InputType: "date",
  ClassName: "styled-date-input",
  ValueIsValid: $t,
  Pattern: Ya,
  Styled: !0
}), Hh = /* @__PURE__ */ At({
  Name: "styledWeekInput",
  InputType: "week",
  ClassName: "styled-week-input",
  ValueIsValid: Ki,
  Pattern: Ja,
  Styled: !0
}), _h = /* @__PURE__ */ At({
  Name: "styledMonthInput",
  InputType: "month",
  ClassName: "styled-month-input",
  ValueIsValid: Qa,
  Pattern: Za,
  Styled: !0
}), Gh = /* @__PURE__ */ kt({
  Name: "styledSearchInput",
  InputType: "search",
  ClassName: "styled-search-input",
  ValueIsValid: Ne,
  withSpellChecking: !0,
  Styled: !0
});
function Kh(e) {
  return K(() => {
    bn(), Uh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (m) => Yn(m) || Ke(m)), a = J(e.readonly), r = E(e.Suggestions, (m) => je(m, Yn));
    let i = ve(e.minWidth);
    const s = E(e.Size, (m) => fe(m, ["small", "normal", "large"])) ?? "normal", l = J(e.disabled) ?? !1, c = A(e.onValueInput), d = A(e.onInput), { actualValue: u, actualDisabling: p } = Ze(o, l), h = se((m) => {
      if (Le(m), p == !0)
        return;
      N('styledColorInput callback "onInput"', d, m);
      const C = m.target.value;
      N(
        'styledColorInput callback "onValueInput"',
        c,
        C,
        m
      );
    }, [p, d, c]), { SuggestionId: f, SuggestionList: g } = tn(r);
    i == null && (i = 40 + (r != null && r.length > 0 ? 20 : 0));
    const x = nt(s);
    return b`<input type="color" class="jcl-component styled-input styled-color-input ${x} ${t}"
        style="min-width:${i}px; ${n}"
        value=${u} list=${f}
        disabled=${p} onInput=${h} ...${e.RestProps}
      />${g}`;
  });
}
const Uh = /* @__PURE__ */ Z("jcl-component.styled-color-input", `
    .jcl-component.styled-color-input {
      min-width:40px;
      padding:4px;
      cursor:pointer;
    }

  /**** the swatch keeps its color even when disabled - dim it instead ****/

    .jcl-component.styled-color-input:disabled {
      opacity:0.5;
    }

  /**** WebKit/Blink: remove wrapper padding, round the swatch ****/

    .jcl-component.styled-color-input::-webkit-color-swatch-wrapper {
      padding:0px;
    }

    .jcl-component.styled-color-input::-webkit-color-swatch {
      border:none;
      border-radius:calc(var(--jcl-border-radius,8px) - 4px);
    }

  /**** Firefox: dto. ****/

    .jcl-component.styled-color-input::-moz-color-swatch {
      border:none;
      border-radius:calc(var(--jcl-border-radius,8px) - 4px);
    }

  /**** size variants just need adjusted paddings ****/

    .jcl-component.styled-color-input.size-small {
      padding:3px;
    }

    .jcl-component.styled-color-input.size-large {
      padding:5px;
    }
  `);
function qh(e) {
  return K(() => {
    bn(), Xh(), e = U(e);
    const t = S(e.Class) ?? "", n = E(e.Value, (p) => Ne(p) || Ke(p)), o = E(e.Options, (p) => je(p, Ne)) ?? Se("Options"), a = E(e.Size, (p) => fe(p, ["small", "normal", "large"])) ?? "normal", r = J(e.disabled) ?? !1, i = A(e.onValueInput), s = A(e.onInput), { actualValue: l, actualDisabling: c } = Ze(n, r), d = se((p) => {
      if (Le(p), c == !0)
        return;
      N('styledDropDown callback "onInput"', s, p);
      let h = p.target.value;
      N(
        'styledDropDown callback "onValueInput"',
        i,
        h,
        p
      );
    }, [c, s, i]), u = nt(a);
    return b`<div class="jcl-component styled-dropdown ${t}">
        <select class="jcl-component styled-input ${u}"
          disabled=${c} onInput=${d} ...${e.RestProps}
        >${o.map(
      (p) => {
        const {
          Value: h,
          Label: f,
          disabled: g,
          isRuler: x
        } = Ct(p);
        return x ? b`<hr/>` : b`<option value=${h}
                  selected=${h === l} disabled=${g}
                >${f}</option>`;
      }
    )}</select>
      </>`;
  });
}
const Xh = /* @__PURE__ */ Z("jcl-component.styled-dropdown", `
    .jcl-component.styled-dropdown {
      display:inline-block;
      width:fit-content; height:fit-content;
      min-width:30px;
    }

    .jcl-component.styled-dropdown > select {
      -webkit-appearance:none; appearance:none;
      width:100%;
      padding-right:36px;
      cursor:pointer;
    }

    .jcl-component.styled-dropdown > select.size-small,
    .jcl-component.styled-dropdown > select.size-large {
      padding-right:36px;
    }

  /**** a self-drawn chevron replaces the hidden native arrow ****/

    .jcl-component.styled-dropdown::after {
      content:''; display:block; position:absolute;
      right:12px; top:50%; transform:translateY(-50%);
      width:16px; height:16px;
      background:var(--jcl-muted-fg-color,#737373);
      opacity:0.5;
      pointer-events:none;
      ${ao}
      ${ct}
    }

  /**** like shadcn, "disabled" dims the whole wrapper (incl. chevron) ****/

    .jcl-component.styled-dropdown:has(> select:disabled) {
      opacity:0.5;
    }

  /**** options use system colors to stay readable in dark mode ****/

    .jcl-component.styled-dropdown option,
    .jcl-component.styled-dropdown optgroup {
      background:Canvas; color:CanvasText;
    }
  `);
function Yh(e) {
  return K(() => {
    bn(), Jh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (m) => Ne(m) || Ke(m)), a = S(e.Placeholder), r = J(e.multiple), i = S(e.Accept), s = E(e.Size, (m) => fe(m, ["small", "normal", "large"])) ?? "normal", l = J(e.disabled) ?? !1, c = A(e.onValueInput), d = A(e.onInput), u = o ?? ut, { actualValue: p, actualPlaceholder: h, actualDisabling: f } = Ze(u, l, a), g = se((m) => {
      if (Le(m), f == !0)
        return;
      N('styledFileInput callback "onInput"', d, m);
      let C = Array.from(m.target.files);
      N(
        'styledFileInput callback "onValueInput"',
        c,
        C,
        m
      ), m.target.value = "";
    }, [f, d, c]), x = nt(s);
    return b`<label class="jcl-component styled-input styled-file-input ${x} ${t} ${f ? "disabled" : ""}"
        style=${n}
      >
        ${p == null ? b`<span class="placeholder">${h ?? ""}</span>` : b`<span>${p}</span>`}
        <input type="file" style="display:none"
          multiple=${r} accept=${i}
          disabled=${f} onInput=${g} ...${e.RestProps}
        />
      </label>`;
  });
}
const Jh = /* @__PURE__ */ Z("jcl-component.styled-file-input", `
    .jcl-component.styled-file-input {
      display:inline-block;
      min-width:60px;
      line-height:26px;              /* centres the text in all three sizes */
      overflow:hidden;
      cursor:pointer;
    }
    .jcl-component.styled-file-input > span {
      display:inline-block; width:100%;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }

    .jcl-component.styled-file-input > span.placeholder {
      color:var(--jcl-muted-fg-color,#737373);
    }

  /**** "disabled" also overrides JCL's general ".disabled" opacity rule ****/

    .jcl-component.styled-file-input.disabled {
      pointer-events:none; cursor:not-allowed;
      background:var(--jcl-muted-bg-color,#f5f5f5);
      color:var(--jcl-muted-fg-color,#737373);
      opacity:1;
    }
  `);
function Zh(e) {
  return K(() => {
    bn(), Qh(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, (T) => $n(T) || Ke(T)), a = J(e.invalid), r = S(e.Placeholder), i = J(e.readonly), s = ve(e.minLength), l = ve(e.maxLength), c = J(e.wrap), d = E(e.Resizability, (T) => fe(T, ["none", "horizontal", "vertical", "both"])), u = J(e.SpellCheck), p = J(e.disabled) ?? !1, h = A(e.onValueInput), f = A(e.onInput), g = A(e.onBlur), { ViewRef: x, shownValue: m, ValueToShow: C } = Pt(o), { actualValue: k, actualPlaceholder: L, actualDisabling: $ } = Ze(C, p, r), { _onInput: y, _onBlur: w } = en({
      Name: "styledTextInput",
      actualDisabling: $,
      shownValue: m,
      onInput: f,
      onValueInput: h,
      onBlur: g
    }), O = Dt();
    return b`<textarea class="jcl-component styled-input styled-text-input ${t} ${a ? "invalid" : ""}"
        key=${O} ref=${x}
        style="${c == !0 ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${d ?? "none"}; ${n}"
        value=${k ?? ""} minlength=${s} maxlength=${l}
        readOnly=${i} placeholder=${L}
        spellcheck=${u} disabled=${$}
        aria-invalid=${a ? "true" : void 0}
        onInput=${y} onBlur=${w} ...${e.RestProps}
      />`;
  });
}
const Qh = /* @__PURE__ */ Z("jcl-component.styled-text-input", `
    .jcl-component.styled-text-input {
      height:auto; min-height:64px;      /* shadcn "Textarea" uses "min-h-16" */
      padding:8px 12px;
    }
  `);
function Ts(e, t, n, o) {
  const a = S(n.Class) ?? "", r = ae(n.Style), i = bt(n.Color), s = pn(n.Label), l = J(n.active) ?? !1, c = J(n.disabled) ?? !1, d = E(n.Variant, (g) => fe(g, ["default", "destructive", "outline", "secondary", "ghost"])) ?? "ghost", u = E(n.Size, (g) => fe(g, ["xs", "small", "normal", "large"])) ?? "normal", p = A(n.onClick), h = se((g) => {
    if (c)
      return nn(g);
    N(e + ' callback "onClick"', p, g);
  }, [c, p]), f = nt(u);
  return b`<button
      class="jcl-component styled-button ${t} variant-${d} ${f} ${l ? "active" : ""} ${a}"
      style=${r} disabled=${c}
      aria-label=${s} aria-pressed=${l ? "true" : void 0}
      onClick=${h} ...${n.RestProps}
    >${o(i)}</>`;
}
function Ph(e) {
  return K(() => {
    Xo(), ef(), e = U(e);
    const t = mn(e.Value) ?? `${To}/circle-information.png`;
    return Ts(
      "styledIcon",
      "styled-icon",
      e,
      (n) => b`<span style="
          -webkit-mask-image:url(${t}); mask-image:url(${t});
          background-color:${n ?? "currentColor"};
        "/>`
    );
  });
}
const ef = /* @__PURE__ */ Z("jcl-component.styled-icon", `
    .jcl-component.styled-icon {
      width:36px; height:36px; padding:0px;
    }

    .jcl-component.styled-icon > span {
      display:inline-block; width:16px; height:16px;
      overflow:hidden; pointer-events:none;
      ${ct}
    }

    .jcl-component.styled-icon.active {
      background:var(--jcl-accent-bg-color,#2563eb);
      color:var(--jcl-accent-fg-color,#ffffff);
    }

  /**** size variants ****/

    .jcl-component.styled-icon.size-xs {
      width:24px; height:24px; padding:0px;
    }
    .jcl-component.styled-icon.size-xs > span {
      width:12px; height:12px;
    }

    .jcl-component.styled-icon.size-small {
      width:32px; height:32px; padding:0px;
    }

    .jcl-component.styled-icon.size-large {
      width:40px; height:40px; padding:0px;
    }
  `);
function tf(e) {
  return K(() => {
    Xo(), nf(), e = U(e);
    const t = E(
      e.Value,
      (n) => fe(n, qa)
    ) ?? "fa-question-circle-o";
    return Ts(
      "styledFAIcon",
      "styled-fa-icon",
      e,
      (n) => b`<span class="fa ${t}" style="color:${n ?? "currentColor"}"/>`
    );
  });
}
const nf = /* @__PURE__ */ Z("jcl-component.styled-fa-icon", `
    .jcl-component.styled-fa-icon {
      width:36px; height:36px; padding:0px;
    }

    .jcl-component.styled-fa-icon > .fa {
      font-size:16px; line-height:16px;
      pointer-events:none;
    }

    .jcl-component.styled-fa-icon.active {
      background:var(--jcl-accent-bg-color,#2563eb);
      color:var(--jcl-accent-fg-color,#ffffff);
    }

  /**** size variants ****/

    .jcl-component.styled-fa-icon.size-xs {
      width:24px; height:24px; padding:0px;
    }
    .jcl-component.styled-fa-icon.size-xs > .fa {
      font-size:12px; line-height:12px;
    }

    .jcl-component.styled-fa-icon.size-small {
      width:32px; height:32px; padding:0px;
    }

    .jcl-component.styled-fa-icon.size-large {
      width:40px; height:40px; padding:0px;
    }
  `);
function Ht(e, t, n) {
  return K(() => {
    n = U(n);
    const o = S(n.Class) ?? "", a = ae(n.Style);
    return b`<${e} class="jcl-component ${t} ${o}"
        style=${a} ...${n.RestProps}
      >
        ${n.children}
      </>`;
  });
}
function ho(e, t, n, o, a, r) {
  return a == null ? b`<${e} class="${t}" style=${n} ...${o}>
        ${r}
      </>` : b`<${e} class="${t}" style=${n} ...${o}
        dangerouslySetInnerHTML=${{ __html: a }}
      />`;
}
function of(e) {
  return K(() => {
    af(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = E(e.Variant, (r) => fe(r, ["default", "destructive", "outline", "secondary"])) ?? "default", a = e.children;
    return ho("span", `jcl-component styled-badge variant-${o} ${t}`, void 0, e.RestProps, n, a);
  });
}
const af = /* @__PURE__ */ Z("jcl-component.styled-badge", `
    .jcl-component.styled-badge {
      display:inline-flex; align-items:center; justify-content:center;
      gap:4px; flex-shrink:0;
      width:fit-content; overflow:hidden;
      border:solid 1px transparent; border-radius:9999px;
      padding:2px 8px;
      font:inherit; font-size:12px; font-weight:500; white-space:nowrap;
    }

  /**** badge variants ****/

    .jcl-component.styled-badge.variant-default {
      background:var(--jcl-primary-bg-color,#0075ff);
      color:var(--jcl-primary-fg-color,#ffffff);
    }

    .jcl-component.styled-badge.variant-destructive {
      background:var(--jcl-destructive-bg-color,#e7000b);
      color:var(--jcl-destructive-fg-color,#ffffff);
    }

    .jcl-component.styled-badge.variant-outline {
      border-color:var(--jcl-border-color,#ebebeb);
      background:transparent;
      color:var(--jcl-fg-color,#0a0a0a);
    }

    .jcl-component.styled-badge.variant-secondary {
      background:var(--jcl-secondary-bg-color,#f7f7f7);
      color:var(--jcl-secondary-fg-color,#171717);
    }
  `);
function rf(e) {
  return K(() => {
    sf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = bt(e.Color), a = S(e.Label) ?? "Loading", r = E(e.Size, (s) => fe(s, ["small", "normal", "large"])) ?? "normal", i = nt(r);
    return b`<svg class="jcl-component styled-spinner ${i} ${t}"
        style=${n} role="status" aria-label=${a}
        viewBox="0 0 24 24" fill="none" stroke=${o ?? "currentColor"}
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        ...${e.RestProps}
      ><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`;
  });
}
const sf = /* @__PURE__ */ Z("jcl-component.styled-spinner", `
    @keyframes jcl-spin {
      to { transform:rotate(360deg) }
    }

    .jcl-component.styled-spinner {
      display:inline-block;
      width:16px; height:16px;
      animation:jcl-spin 1s linear infinite;
    }

  /**** size variants ****/

    .jcl-component.styled-spinner.size-small {
      width:12px; height:12px;
    }

    .jcl-component.styled-spinner.size-large {
      width:24px; height:24px;
    }
  `);
function lf(e) {
  return K(() => {
    cf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return ho("kbd", `jcl-component styled-kbd ${t}`, void 0, e.RestProps, n, o);
  });
}
const cf = /* @__PURE__ */ Z("jcl-component.styled-kbd", `
    .jcl-component.styled-kbd {
      display:inline-flex; align-items:center; justify-content:center;
      gap:4px;
      width:fit-content;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-bottom-width:2px;
      border-radius:calc(var(--jcl-border-radius,8px) - 4px);
      background:var(--jcl-muted-bg-color,#f5f5f5);
      color:var(--jcl-fg-color,#0a0a0a);
      padding:2px 6px;
      font-family:var(--jcl-sans-serif-font,ui-sans-serif,system-ui,sans-serif);
      font-size:12px; font-weight:500; line-height:1.4;
      white-space:nowrap;
      user-select:none; pointer-events:none;
    }
  `);
function df(e) {
  return K(() => {
    uf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = mn(e.Value), a = S(e.Alt), r = S(e.Fallback), i = E(e.Size, (h) => fe(h, ["small", "normal", "large"])) ?? "normal", [s, l] = Be(!1), c = q(void 0);
    c.current !== o && (c.current = o, s && l(!1));
    const d = se(() => l(!0), []), u = o != null && !s, p = nt(i);
    return b`<div class="jcl-component styled-avatar ${p} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${u ? b`<img src=${o} alt=${a} onError=${d}/>` : b`<span>${r ?? ""}</span>`}
      </>`;
  });
}
const uf = /* @__PURE__ */ Z("jcl-component.styled-avatar", `
    .jcl-component.styled-avatar {
      display:flex; flex-shrink:0;
      width:40px; height:40px;
      border-radius:50%; overflow:hidden;
      user-select:none;
    }

    .jcl-component.styled-avatar > img {
      width:100%; height:100%;
      aspect-ratio:1/1; object-fit:cover;
    }

    .jcl-component.styled-avatar > span {
      display:flex; align-items:center; justify-content:center;
      width:100%; height:100%;
      border-radius:50%;
      background:var(--jcl-muted-bg-color,#f5f5f5);
      color:var(--jcl-muted-fg-color,#737373);
      font-size:14px; font-weight:500;
    }

  /**** size variants (following the shadcn size scale "sm"/"lg") ****/

    .jcl-component.styled-avatar.size-small {
      width:32px; height:32px;
    }
    .jcl-component.styled-avatar.size-small > span {
      font-size:12px;
    }

    .jcl-component.styled-avatar.size-large {
      width:48px; height:48px;
    }
    .jcl-component.styled-avatar.size-large > span {
      font-size:16px;
    }
  `);
function pf(e) {
  return K(() => {
    hf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    return b`<div class="jcl-component styled-skeleton ${t}"
        style=${n} aria-hidden="true" ...${e.RestProps}
      />`;
  });
}
const hf = /* @__PURE__ */ Z("jcl-component.styled-skeleton", `
    @keyframes jcl-pulse {
      0%, 100% { opacity:1 }
      50%      { opacity:0.5 }
    }

    .jcl-component.styled-skeleton {
      display:inline-block;
      width:100%; height:16px;
      border-radius:var(--jcl-border-radius,8px);
      background:var(--jcl-accent-bg-color,#f7f7f7);
      animation:jcl-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;
    }
  `);
function Rs(e) {
  return K(() => {
    ff(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = ae(e.Value) ?? Se("Value"), a = E(e.Placement, (x) => fe(x, ["top", "bottom", "left", "right"])) ?? "top", r = ve(e.Delay), i = lt(gt), s = r ?? i?.TooltipDelay ?? 600, l = Dt(), [c, d] = Be(!1), u = q(void 0);
    function p() {
      u.current != null && (clearTimeout(u.current), u.current = void 0);
    }
    function h() {
      p(), u.current = setTimeout(() => d(!0), s);
    }
    function f() {
      p(), d(!0);
    }
    function g() {
      p(), d(!1);
    }
    return Ce(() => p, []), b`<span class="jcl-component styled-tooltip ${t}"
        style=${n} aria-describedby=${c ? l : void 0}
        onMouseEnter=${h} onMouseLeave=${g}
        onFocusIn=${f} onFocusOut=${g}
        ...${e.RestProps}
      >
        ${e.children}
        ${c && b`<div class="tooltip placement-${a}"
          id=${l} role="tooltip"
        >${o}</div>`}
      </>`;
  });
}
const ff = /* @__PURE__ */ Z("jcl-component.styled-tooltip", `
    .jcl-component.styled-tooltip {
      display:inline-block;
      width:fit-content;
    }

    @keyframes jcl-tooltip-in {
      from { opacity:0 }
      to   { opacity:1 }
    }

    .jcl-component.styled-tooltip > .tooltip {
      position:absolute; z-index:4000000;   /* even above JCL dialogs */
      width:max-content; max-width:280px;
      border-radius:var(--jcl-border-radius,8px);
      background:var(--jcl-fg-color,#0a0a0a);
      color:var(--jcl-bg-color,#ffffff);
      padding:6px 12px;
      font-size:12px; line-height:1.4; text-wrap:balance;
      pointer-events:none;
      animation:jcl-tooltip-in 0.15s ease;
    }

  /**** placements (incl. a small arrow, drawn as a rotated square) ****/

    .jcl-component.styled-tooltip > .tooltip::after {
      content:''; position:absolute;
      width:8px; height:8px;
      border-radius:2px;
      background:inherit;
    }

    .jcl-component.styled-tooltip > .tooltip.placement-top {
      bottom:calc(100% + 8px); left:50%;
      transform:translateX(-50%);
    }
    .jcl-component.styled-tooltip > .tooltip.placement-top::after {
      left:50%; top:100%;
      transform:translate(-50%,-50%) rotate(45deg);
    }

    .jcl-component.styled-tooltip > .tooltip.placement-bottom {
      top:calc(100% + 8px); left:50%;
      transform:translateX(-50%);
    }
    .jcl-component.styled-tooltip > .tooltip.placement-bottom::after {
      left:50%; bottom:100%;
      transform:translate(-50%,50%) rotate(45deg);
    }

    .jcl-component.styled-tooltip > .tooltip.placement-left {
      right:calc(100% + 8px); top:50%;
      transform:translateY(-50%);
    }
    .jcl-component.styled-tooltip > .tooltip.placement-left::after {
      left:100%; top:50%;
      transform:translate(-50%,-50%) rotate(45deg);
    }

    .jcl-component.styled-tooltip > .tooltip.placement-right {
      left:calc(100% + 8px); top:50%;
      transform:translateY(-50%);
    }
    .jcl-component.styled-tooltip > .tooltip.placement-right::after {
      right:100%; top:50%;
      transform:translate(50%,-50%) rotate(45deg);
    }
  `);
function rr(e) {
  const { ComponentName: t, Name: n, NamePrefix: o, onOpenChange: a, OverlayFor: r } = e, i = Dt(), s = n ?? o + i, l = q(void 0), { openOverlay: c, closeOverlay: d, OverlayIsOpen: u } = An();
  function p() {
    if (u(s)) {
      d(s);
      return;
    }
    const h = l.current, f = h?.closest(".jcl-component.overlay-base");
    (h == null || f == null) && ce(
      `MissingOverlayBase: "${t}" must be used within an "OverlayBase"`
    ), c({
      Name: s,
      isModal: !1,
      ...r(h, f),
      onOpen: () => N(
        t + ' callback "onOpenChange"',
        a,
        !0
      ),
      onClose: () => N(
        t + ' callback "onOpenChange"',
        a,
        !1
      )
    });
  }
  return { OverlayName: s, ViewRef: l, closeOverlay: d, _onClick: p };
}
function As(e) {
  return K(() => {
    gf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Name), a = A(e.Renderer) ?? Se("Renderer"), r = E(e.Placement, (u) => fe(u, ["top", "bottom", "left", "right"])) ?? "bottom", i = ve(e.Width) ?? 288, s = ve(e.Height), l = A(e.onOpenChange), { ViewRef: c, _onClick: d } = rr({
      ComponentName: "styledPopover",
      Name: o,
      NamePrefix: "styled-popover-",
      onOpenChange: l,
      /**** compute the overlay position from the trigger geometry ****/
      OverlayFor: (u, p) => {
        const h = u.getBoundingClientRect(), f = p.getBoundingClientRect(), g = h.left - f.left + p.scrollLeft, x = h.top - f.top + p.scrollTop;
        let m, C;
        switch (!0) {
          case (r === "top" && s != null):
            m = g + h.width / 2 - i / 2, C = x - s - 4;
            break;
          case r === "left":
            m = g - i - 4, C = x + (s == null ? 0 : h.height / 2 - s / 2);
            break;
          case r === "right":
            m = g + h.width + 4, C = x + (s == null ? 0 : h.height / 2 - s / 2);
            break;
          default:
            m = g + h.width / 2 - i / 2, C = x + h.height + 4;
        }
        return {
          Renderer: () => b`<div class="jcl-component styled-popover-panel">
              ${a({})}
            </>`,
          OffsetX: m,
          OffsetY: C,
          Width: i,
          Height: s
        };
      }
    });
    return b`<span ref=${c}
        class="jcl-component styled-popover ${t}"
        style=${n} onClick=${d} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
const gf = /* @__PURE__ */ Z("jcl-component.styled-popover", `
    .jcl-component.styled-popover {
      display:inline-block;
      width:fit-content;
    }

    .jcl-component.styled-popover-panel {
      padding:16px;
      font-size:14px;
    }

  /**** restyle the hosting OverlayView in the shadcn/ui way ****/
  /**** (shared with "styledDropDownMenu")                    ****/

    .jcl-overlay-view:has(.styled-popover-panel),
    .jcl-overlay-view:has(.styled-dropdown-menu-panel) {
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 4px 6px -1px rgba(0,0,0,0.1),
        0px 2px 4px -2px rgba(0,0,0,0.1);
    }
  `);
function mf(e) {
  return K(() => {
    yn(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Name), a = A(e.Renderer) ?? Se("Renderer"), r = A(e.onOpenChange), { OverlayName: i, ViewRef: s, closeOverlay: l, _onClick: c } = rr({
      ComponentName: "styledDropDownMenu",
      Name: o,
      NamePrefix: "styled-dropdown-menu-",
      onOpenChange: r,
      /**** the menu panel opens below the trigger, left-aligned ****/
      OverlayFor: (u, p) => {
        const h = u.getBoundingClientRect(), f = p.getBoundingClientRect(), g = h.left - f.left + p.scrollLeft, x = h.top - f.top + p.scrollTop + h.height + 4;
        return {
          Renderer: () => b`<div class="jcl-component styled-dropdown-menu-panel"
              role="menu" onClick=${d}
            >
              ${a({})}
            </>`,
          OffsetX: g,
          OffsetY: x,
          minWidth: 128
        };
      }
    });
    function d(u) {
      const p = u.target.closest(".styled-dropdown-menu-item");
      p != null && !p.disabled && l(i);
    }
    return b`<span ref=${s}
        class="jcl-component styled-dropdown-menu ${t}"
        style=${n} onClick=${c} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
function bf(e) {
  return K(() => {
    yn(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Icon), o = S(e.Shortcut), a = E(e.Variant, (l) => fe(l, ["default", "destructive"])) ?? "default", r = J(e.disabled) ?? !1, i = A(e.onClick), s = se((l) => {
      if (r)
        return nn(l);
      N('styledDropDownMenuItem callback "onClick"', i, l);
    }, [r, i]);
    return b`<button role="menuitem"
        class="styled-dropdown-menu-item variant-${a} ${t}"
        disabled=${r} onClick=${s} ...${e.RestProps}
      >
        ${n == null ? "" : b`<span class="icon" aria-hidden="true">${n}</>`}
        ${e.children}
        ${o == null ? "" : b`<span class="shortcut">${o}</span>`}
      </>`;
  });
}
function yf(e) {
  return K(() => {
    yn(), e = U(e);
    const t = S(e.Class) ?? "";
    return b`<div class="styled-dropdown-menu-separator ${t}"
        role="separator" aria-hidden="true" ...${e.RestProps}
      />`;
  });
}
function xf(e) {
  return K(() => {
    yn(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Label);
    return b`<div class="styled-dropdown-menu-group ${t}"
        role="group" ...${e.RestProps}
      >
        ${n == null ? "" : b`<div class="label">${n}</div>`}
        ${e.children}
      </>`;
  });
}
function wf(e) {
  return K(() => {
    yn(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Icon), o = S(e.Label) ?? Se("Label"), a = J(e.disabled) ?? !1, [r, i] = Be(!1), s = se((l) => {
      Le(l), a || i((c) => !c);
    }, [a]);
    return b`<div class="styled-dropdown-menu-submenu ${t}"
        onMouseEnter=${a ? void 0 : () => i(!0)}
        onMouseLeave=${() => i(!1)}
        ...${e.RestProps}
      >
        <button class="submenu-trigger" aria-haspopup="menu"
          aria-expanded=${r ? "true" : "false"}
          disabled=${a} onClick=${s}
        >
          ${n == null ? "" : b`<span class="icon" aria-hidden="true">${n}</>`}
          <span>${o}</span>
          <span class="chevron"/>
        </>
        ${r && b`<div class="submenu-panel" role="menu">
          ${e.children}
        </>`}
      </>`;
  });
}
const yn = /* @__PURE__ */ Z("jcl-component.styled-dropdown-menu", `
    .jcl-component.styled-dropdown-menu {
      display:inline-block;
      width:fit-content;
    }

    .jcl-component.styled-dropdown-menu-panel {
      padding:4px;
      font-size:14px;
    }

  /**** menu items (and submenu triggers, which look just like them) ****/

    .styled-dropdown-menu-item,
    .styled-dropdown-menu-submenu > .submenu-trigger,
    .styled-command-item {
      display:flex; align-items:center;
      gap:8px; width:100%;
      border:none; border-radius:calc(var(--jcl-border-radius,8px) - 4px);
      background:transparent;
      color:var(--jcl-fg-color,#0a0a0a);
      padding:6px 8px;
      font:inherit; font-size:14px; text-align:left;
      white-space:nowrap;
      cursor:pointer; user-select:none;
      outline:none;
      transition:background-color 0.15s ease, color 0.15s ease;
    }

    .styled-dropdown-menu-item > .icon,
    .styled-dropdown-menu-submenu > .submenu-trigger > .icon,
    .styled-command-item > .icon {
      display:inline-flex; align-items:center; justify-content:center;
      flex-shrink:0; width:18px;
    }

    .styled-dropdown-menu-item:hover,
    .styled-dropdown-menu-item:focus-visible,
    .styled-dropdown-menu-submenu > .submenu-trigger:hover,
    .styled-dropdown-menu-submenu > .submenu-trigger:focus-visible,
    .styled-dropdown-menu-submenu.open > .submenu-trigger,
    .styled-command-item:hover,
    .styled-command-item:focus-visible,
    .styled-command-item.highlighted {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

    .styled-dropdown-menu-item.variant-destructive {
      color:var(--jcl-destructive-bg-color,#e7000b);
    }
    .styled-dropdown-menu-item.variant-destructive:hover,
    .styled-dropdown-menu-item.variant-destructive:focus-visible {
      background:color-mix(
        in srgb, var(--jcl-destructive-bg-color,#e7000b) 10%, transparent
      );
      color:var(--jcl-destructive-bg-color,#e7000b);
    }

    .styled-dropdown-menu-item:disabled,
    .styled-dropdown-menu-submenu > .submenu-trigger:disabled,
    .styled-command-item:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

    .styled-dropdown-menu-item > .shortcut,
    .styled-command-item > .shortcut {
      margin-left:auto;
      font-size:12px;
      color:var(--jcl-muted-fg-color,#737373);
    }

  /**** separators and groups ****/

    .styled-dropdown-menu-separator {
      height:1px; margin:4px -4px;
      background:var(--jcl-border-color,#ebebeb);
    }

    .styled-dropdown-menu-group > .label {
      padding:6px 8px;
      font-size:14px; font-weight:normal;
      user-select:none;
    }

  /**** submenus open as flyouts to the right ****/

    .styled-dropdown-menu-submenu {
      position:relative;
    }

    .styled-dropdown-menu-submenu > .submenu-trigger > .chevron {
      display:inline-block; flex-shrink:0;
      width:16px; height:16px; margin-left:auto;
      background:currentColor;
      pointer-events:none;
      ${ro}
      ${ct}
    }

    .styled-dropdown-menu-submenu > .submenu-panel {
      position:absolute; left:100%; top:-4px; z-index:1;
      min-width:128px;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 4px 6px -1px rgba(0,0,0,0.1),
        0px 2px 4px -2px rgba(0,0,0,0.1);
      padding:4px;
    }
  `), Fs = /* @__PURE__ */ Jt("");
function vf(e) {
  return K(() => {
    Yo(), e = U(e);
    const t = A(e.Renderer) ?? Se("Renderer"), n = S(e.Placeholder) ?? "type a command or search...", o = S(e.EmptyText) ?? "no results found", [a, r] = Be(""), i = q(void 0);
    function s(l) {
      const c = i.current;
      if (c == null)
        return;
      const d = Array.from(
        c.querySelectorAll(".styled-command-item:not([disabled])")
      );
      if (d.length === 0)
        return;
      const u = d.findIndex(
        (h) => h.classList.contains("highlighted")
      );
      function p(h) {
        u >= 0 && d[u].classList.remove("highlighted"), d[h].classList.add("highlighted"), d[h].scrollIntoView({ block: "nearest" });
      }
      switch (!0) {
        case l.key === "ArrowDown":
          l.preventDefault(), p(Math.min(u + 1, d.length - 1));
          break;
        case l.key === "ArrowUp":
          l.preventDefault(), p(Math.max(u - 1, 0));
          break;
        case l.key === "Enter":
          u >= 0 && (l.preventDefault(), d[u].click());
      }
    }
    return b`<div class="panel" ref=${i}>
        <div class="search">
          <span class="search-icon"/>
          <input type="text" autofocus
            value=${a} placeholder=${n}
            onInput=${(l) => r(l.target.value)}
            onKeyDown=${s}
          />
        </>
        <div class="list">
          <${Fs.Provider} value=${a}>
            ${t({ Filter: a })}
          </>
        </>
        <div class="empty">${o}</div>
      </>`;
  });
}
function Cf(e) {
  return K(() => {
    Yo(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Name), a = A(e.Renderer) ?? Se("Renderer"), r = S(e.Placeholder), i = S(e.EmptyText), s = ve(e.Width) ?? 512, l = A(e.onOpenChange), { OverlayName: c, ViewRef: d, closeOverlay: u, _onClick: p } = rr({
      ComponentName: "styledCommandPalette",
      Name: o,
      NamePrefix: "styled-command-palette-",
      onOpenChange: l,
      /**** the palette opens horizontally centered, at 15% from the top ****/
      OverlayFor: (f, g) => {
        const x = g.scrollLeft + Math.max(0, (g.clientWidth - s) / 2), m = g.scrollTop + g.clientHeight * 0.15;
        return {
          Renderer: () => b`<div class="jcl-component styled-command-palette"
              onClick=${h}
            >
              <${vf}
                Renderer=${a} Placeholder=${r} EmptyText=${i}
              />
            </>`,
          OffsetX: x,
          OffsetY: m,
          Width: s
        };
      }
    });
    function h(f) {
      const g = f.target.closest(".styled-command-item");
      g != null && !g.disabled && u(c);
    }
    return b`<span ref=${d}
        class="jcl-component styled-command-palette-trigger ${t}"
        style=${n} onClick=${p} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
function kf(e) {
  return K(() => {
    Yo(), yn(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Icon), o = S(e.Value) ?? Se("Value"), a = S(e.Keywords), r = S(e.Shortcut), i = J(e.disabled) ?? !1, s = A(e.onClick), l = lt(Fs);
    if (l.trim() !== "" && !(o + " " + (a ?? "")).toLowerCase().includes(l.toLowerCase().trim()))
      return "";
    const c = se((u) => {
      if (i)
        return nn(u);
      N('styledCommandItem callback "onClick"', s, u);
    }, [i, s]), d = Yt(e.children);
    return b`<button role="option"
        class="styled-command-item ${t}"
        disabled=${i} onClick=${c}
      >
        ${n == null ? "" : b`<span class="icon" aria-hidden="true">${n}</>`}
        ${d.length === 0 ? o : d}
        ${r == null ? "" : b`<span class="shortcut">${r}</span>`}
      </>`;
  });
}
function jf(e) {
  return K(() => {
    Yo(), yn(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Label);
    return b`<div class="styled-command-group ${t}" role="group"
        ...${e.RestProps}
      >
        ${n == null ? "" : b`<div class="label">${n}</div>`}
        ${e.children}
      </>`;
  });
}
const Yo = /* @__PURE__ */ Z("jcl-component.styled-command-palette", `
    .jcl-component.styled-command-palette-trigger {
      display:inline-block;
      width:fit-content;
    }

  /**** restyle the hosting OverlayView in the shadcn/ui way ****/

    .jcl-overlay-view:has(.styled-command-palette) {
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:calc(var(--jcl-border-radius,8px) + 4px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 10px 15px -3px rgba(0,0,0,0.1),
        0px 4px 6px -4px rgba(0,0,0,0.1);
      overflow:hidden;
    }

    .jcl-component.styled-command-palette .panel {
      display:flex; flex-flow:column nowrap;
      font-size:14px;
    }

  /**** the search input on top ****/

    .jcl-component.styled-command-palette .search {
      display:flex; align-items:center;
      gap:8px; height:44px;
      border-bottom:solid 1px var(--jcl-border-color,#ebebeb);
      padding:0px 12px;
    }

    .jcl-component.styled-command-palette .search > .search-icon {
      display:inline-block; flex-shrink:0;
      width:16px; height:16px;
      background:var(--jcl-muted-fg-color,#737373);
      opacity:0.5;
      pointer-events:none;
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
      ${ct}
    }

    .jcl-component.styled-command-palette .search > input {
      flex:1 1 auto;
      border:none; background:transparent;
      color:inherit;
      font:inherit; font-size:14px;
      outline:none;
    }
    .jcl-component.styled-command-palette .search > input::placeholder {
      color:var(--jcl-muted-fg-color,#737373);
    }

  /**** the scrollable list of groups and items ****/

    .jcl-component.styled-command-palette .list {
      max-height:300px; overflow-y:auto; overscroll-behavior-y:contain;
      padding:4px;
    }

    .styled-command-group > .label {
      padding:6px 8px;
      font-size:12px; font-weight:500;
      color:var(--jcl-muted-fg-color,#737373);
      user-select:none;
    }

    .styled-command-group:not(:has(.styled-command-item)) {
      display:none;
    }

  /**** the "empty" message appears when nothing matches at all ****/

    .jcl-component.styled-command-palette .empty {
      display:none;
    }

    .jcl-component.styled-command-palette
      .list:not(:has(.styled-command-item)) + .empty {
      display:flex; align-items:center; justify-content:center;
      padding:24px 12px;
      font-size:14px;
      color:var(--jcl-muted-fg-color,#737373);
    }
  `);
function $f(e) {
  return K(() => {
    If(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Title), a = ae(e.Description), r = E(e.Variant, (c) => fe(c, ["default", "info", "success", "warning", "destructive"])) ?? "default", i = J(e.closable) ?? !0, s = lt(Ri), l = se((c) => {
      Le(c), s?.closeToast(s.Name);
    }, [s]);
    return b`<div class="jcl-component styled-toast variant-${r} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${r === "default" ? "" : b`<span class="icon"/>`}
        <div class="body">
          ${o == null ? "" : b`<div class="title">${o}</div>`}
          ${a == null ? "" : b`<div class="description">${a}</div>`}
          ${e.children}
        </>
        ${i && b`<button class="close" aria-label="close"
          onClick=${l}
        />`}
      </>`;
  });
}
const If = /* @__PURE__ */ Z("jcl-component.styled-toast", `
    .jcl-component.styled-toast {
      display:flex; align-items:flex-start;
      gap:8px; width:100%;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      padding:12px 14px;
      box-shadow:0px 10px 15px -3px rgba(0,0,0,0.1),
        0px 4px 6px -4px rgba(0,0,0,0.1);
      font-size:14px;
    }

    .jcl-component.styled-toast > .body {
      flex:1 1 auto; min-width:0px;
    }

    .jcl-component.styled-toast .title {
      font-weight:500;
    }

    .jcl-component.styled-toast .description {
      margin-top:2px;
      font-size:13px;
      color:var(--jcl-muted-fg-color,#737373);
    }

  /**** the variant icons, drawn as CSS masks in their state colors ****/

    .jcl-component.styled-toast > .icon {
      display:inline-block; flex-shrink:0;
      width:16px; height:16px; margin-top:1px;
      pointer-events:none;
      ${ct}
    }

    .jcl-component.styled-toast.variant-info > .icon {
      background:var(--jcl-primary-bg-color,#0075ff);
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
    }

    .jcl-component.styled-toast.variant-success > .icon {
      background:var(--jcl-success-bg-color,#00a63e);
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
    }

    .jcl-component.styled-toast.variant-warning > .icon {
      background:var(--jcl-warning-bg-color,#fd9a00);
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 20h16a2 2 0 0 0 1.73-2Z'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 20h16a2 2 0 0 0 1.73-2Z'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
    }

    .jcl-component.styled-toast.variant-destructive > .icon {
      background:var(--jcl-destructive-bg-color,#e7000b);
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m15 9-6 6'/%3E%3Cpath d='m9 9 6 6'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m15 9-6 6'/%3E%3Cpath d='m9 9 6 6'/%3E%3C/svg%3E");
    }

  /**** the close button ****/

    .jcl-component.styled-toast > .close {
      display:inline-block; flex-shrink:0;
      width:20px; height:20px;
      border:none; background:var(--jcl-muted-fg-color,#737373);
      padding:0px;
      cursor:pointer; outline:none;
      transition:background-color 0.15s ease;
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
      -webkit-mask-size:14px;              mask-size:14px;
      -webkit-mask-position:center center; mask-position:center center;
      -webkit-mask-repeat:no-repeat;       mask-repeat:no-repeat;
    }

    .jcl-component.styled-toast > .close:hover {
      background:var(--jcl-fg-color,#0a0a0a);
    }
  `);
function Df(e) {
  return Lf(), Ht("div", "styled-card", e);
}
const Lf = /* @__PURE__ */ Z("jcl-component.styled-card", `
    .jcl-component.styled-card {
      display:flex; flex-flow:column nowrap;
      gap:24px;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:calc(var(--jcl-border-radius,8px) + 4px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      padding:24px 0px;
      box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1),
        0px 1px 2px -1px rgba(0,0,0,0.1);
    }
  `);
function Sf(e) {
  return Jo(), Ht("div", "styled-card-header", e);
}
function Mf(e) {
  return Jo(), Ht("div", "styled-card-action", e);
}
function Tf(e) {
  return Jo(), Ht("div", "styled-card-content", e);
}
function Rf(e) {
  return Jo(), Ht("div", "styled-card-footer", e);
}
const Jo = /* @__PURE__ */ Z("jcl-component.styled-card-parts", `
    .jcl-component.styled-card-header {
      display:grid;
      grid-template-rows:auto auto; grid-auto-rows:min-content;
      align-items:start; gap:8px;
      padding:0px 24px;
    }

    .jcl-component.styled-card-header:has(> .styled-card-action) {
      grid-template-columns:1fr auto;
    }

    .jcl-component.styled-card-action {
      grid-column-start:2; grid-row:1 / span 2;
      align-self:start; justify-self:end;
    }

    .jcl-component.styled-card-content {
      padding:0px 24px;
    }

    .jcl-component.styled-card-footer {
      display:flex; align-items:center;
      padding:0px 24px;
    }
  `);
function Af(e) {
  return K(() => {
    zs(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return ho("div", `jcl-component styled-card-title ${t}`, void 0, e.RestProps, n, o);
  });
}
function Ff(e) {
  return K(() => {
    zs(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return ho("div", `jcl-component styled-card-description ${t}`, void 0, e.RestProps, n, o);
  });
}
const zs = /* @__PURE__ */ Z("jcl-component.styled-card-texts", `
    .jcl-component.styled-card-title {
      font-weight:600; line-height:1;
    }

    .jcl-component.styled-card-description {
      font-size:14px;
      color:var(--jcl-muted-fg-color,#737373);
    }
  `);
function zf(e) {
  return K(() => {
    Of(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Side, (f) => fe(f, ["left", "right"])) ?? "left", a = E(e.Variant, (f) => fe(f, ["default", "floating", "inset"])) ?? "default";
    let r = E(e.collapsible, (f) => gn(f) || fe(f, ["none", "icon", "offcanvas"])) ?? "icon";
    const i = J(e.overlaid) ?? !1;
    let s = J(e.collapsed);
    const l = A(e.onCollapseChange);
    switch (r) {
      // booleans remain supported, but are
      case !0:
        r = "icon";
        break;
      // mapped onto modes
      case !1:
        r = "none";
    }
    const c = r !== "none", d = tt(), u = jt(s, !1);
    s = u.current;
    const p = se((f) => {
      Le(f);
      const g = !u.current;
      u.current = g, d(), N(
        'styledSidebar callback "onCollapseChange"',
        l,
        g
      );
    }, [l, d]), h = `jcl-component styled-sidebar side-${o} variant-${a} ` + (c ? `collapsible collapse-${r} ` : "") + (i && c ? "overlaid " : "") + (s && c ? "collapsed " : "") + t;
    return b`<aside class="${h}" style=${n} ...${e.RestProps}>
        ${c && b`<button class="collapse-button"
          aria-label=${s ? "expand sidebar" : "collapse sidebar"}
          aria-expanded=${s ? "false" : "true"}
          onClick=${p}
        ><span class="chevron"/></>`}
        ${e.children}
      </>`;
  });
}
const Of = /* @__PURE__ */ Z("jcl-component.styled-sidebar", `
    .jcl-component.styled-sidebar {
      display:flex; flex-flow:column nowrap; flex-shrink:0;
      position:relative;               /* anchors the collapse button */
      width:256px; height:100%; min-height:0px;
      background:color-mix(       /* shadcn's slightly muted "sidebar" color */
        in srgb, var(--jcl-muted-bg-color,#f5f5f5) 50%, var(--jcl-bg-color,#ffffff)
      );
      color:var(--jcl-fg-color,#0a0a0a);
      transition:width 0.2s ease, margin 0.2s ease;
    }

    .jcl-component.styled-sidebar.side-left {
      border-right:solid 1px var(--jcl-border-color,#ebebeb);
    }

    .jcl-component.styled-sidebar.side-right {
      border-left:solid 1px var(--jcl-border-color,#ebebeb);
    }

  /**** the collapse button (an arrow, pointing outwards when collapsed) ****/

    .jcl-component.styled-sidebar > .collapse-button {
      display:inline-flex; align-items:center; justify-content:center;
      position:absolute; top:10px; right:8px; z-index:1;
      width:28px; height:28px;
      border:none; border-radius:var(--jcl-border-radius,8px);
      background:transparent;
      color:var(--jcl-muted-fg-color,#737373);
      cursor:pointer; outline:none;
      transition:background-color 0.15s ease, color 0.15s ease;
    }
    .jcl-component.styled-sidebar > .collapse-button:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }
    .jcl-component.styled-sidebar > .collapse-button:focus-visible {
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }

    .jcl-component.styled-sidebar > .collapse-button > .chevron {
      display:inline-block;
      width:16px; height:16px;
      background:currentColor;
      pointer-events:none;
      transition:transform 0.2s ease;
      ${Da}
      ${ct}
    }

    .jcl-component.styled-sidebar.collapsed > .collapse-button > .chevron {
      transform:rotate(180deg);
    }

  /**** on right-hand sidebars, button and arrow are mirrored ****/

    .jcl-component.styled-sidebar.side-right > .collapse-button {
      left:8px; right:auto;
    }

    .jcl-component.styled-sidebar.side-right > .collapse-button > .chevron {
      transform:rotate(180deg);
    }

    .jcl-component.styled-sidebar.side-right.collapsed > .collapse-button > .chevron {
      transform:rotate(0deg);
    }

  /**** the header content must leave some room for the button ****/

    .jcl-component.styled-sidebar.collapsible > .styled-sidebar-header {
      padding-right:40px;
    }

    .jcl-component.styled-sidebar.collapsible.side-right > .styled-sidebar-header {
      padding-right:8px; padding-left:40px;
    }

  /**** "icon" collapse: only item icons (and the button) remain ****/

    .jcl-component.styled-sidebar.collapse-icon.collapsed {
      width:56px;
    }

    .jcl-component.styled-sidebar.collapse-icon.collapsed > .collapse-button {
      right:14px;
    }

    .jcl-component.styled-sidebar.side-right.collapse-icon.collapsed > .collapse-button {
      left:14px; right:auto;
    }

    .jcl-component.styled-sidebar.collapse-icon.collapsed > .styled-sidebar-header,
    .jcl-component.styled-sidebar.collapse-icon.collapsed > .styled-sidebar-footer,
    .jcl-component.styled-sidebar.collapse-icon.collapsed .styled-sidebar-group > .label {
      display:none;
    }

    .jcl-component.styled-sidebar.collapse-icon.collapsed > .styled-sidebar-content {
      margin-top:44px;              /* keeps clear of the collapse button */
    }

  /**** "offcanvas" collapse: the whole sidebar disappears, only a small ****/
  /**** expand button remains, sticking into the adjacent pane           ****/

    .jcl-component.styled-sidebar.collapse-offcanvas.collapsed {
      width:0px;
      border:none; overflow:visible;
    }

    .jcl-component.styled-sidebar.collapse-offcanvas.collapsed > .styled-sidebar-header,
    .jcl-component.styled-sidebar.collapse-offcanvas.collapsed > .styled-sidebar-content,
    .jcl-component.styled-sidebar.collapse-offcanvas.collapsed > .styled-sidebar-footer {
      display:none;
    }

    .jcl-component.styled-sidebar.collapse-offcanvas.collapsed > .collapse-button {
      left:4px; right:auto;
      background:var(--jcl-bg-color,#ffffff);
      border:solid 1px var(--jcl-border-color,#ebebeb);
      box-shadow:0px 1px 2px rgba(0,0,0,0.08);
    }
    .jcl-component.styled-sidebar.collapse-offcanvas.collapsed > .collapse-button:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
    }

    .jcl-component.styled-sidebar.side-right.collapse-offcanvas.collapsed > .collapse-button {
      left:auto; right:4px;
    }

  /**** "floating" variant: an inset, rounded and shadowed box ****/

    .jcl-component.styled-sidebar.variant-floating {
      margin:8px; height:calc(100% - 16px);
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      box-shadow:0px 2px 8px rgba(0,0,0,0.08);
    }

    .jcl-component.styled-sidebar.variant-floating.collapse-offcanvas.collapsed {
      margin-left:0px; margin-right:0px;
      border:none; box-shadow:none;
    }

  /**** "inset" variant: the sidebar blends into its surroundings while ****/
  /**** the adjacent main pane becomes an inset card                    ****/

    .jcl-component.styled-sidebar.variant-inset {
      background:transparent;
      border:none;
    }

    .jcl-component.styled-sidebar.variant-inset.side-left + *,
    *:has(+ .jcl-component.styled-sidebar.variant-inset.side-right) {
      margin:8px;
      background:var(--jcl-bg-color,#ffffff);
      border-radius:var(--jcl-border-radius,8px);
      box-shadow:0px 1px 4px rgba(0,0,0,0.08);
      overflow:auto;
    }

  /**** "overlaid" sidebars keep their collapsed footprint in the layout ****/
  /**** and let the expanded version overlay the adjacent pane - this is ****/
  /**** achieved with negative margins which compensate for the          ****/
  /**** difference between expanded and collapsed width, so the adjacent ****/
  /**** pane never moves and the width transition still works            ****/

    .jcl-component.styled-sidebar.overlaid {
      z-index:10;
    }

    .jcl-component.styled-sidebar.overlaid:not(.collapsed) {
      box-shadow:0px 4px 12px rgba(0,0,0,0.12);
    }

  /**** footprints: 'icon' keeps its 56px rail (256px - 56px = 200px), ****/
  /**** 'offcanvas' keeps nothing at all (256px)                       ****/

    .jcl-component.styled-sidebar.overlaid.collapse-icon.side-left:not(.collapsed) {
      margin-right:-200px;
    }
    .jcl-component.styled-sidebar.overlaid.collapse-icon.side-right:not(.collapsed) {
      margin-left:-200px;
    }

    .jcl-component.styled-sidebar.overlaid.collapse-offcanvas.side-left:not(.collapsed) {
      margin-right:-256px;
    }
    .jcl-component.styled-sidebar.overlaid.collapse-offcanvas.side-right:not(.collapsed) {
      margin-left:-256px;
    }

  /**** floating sidebars carry 8px margins: their icon rail footprint ****/
  /**** is 72px (8px + 256px - 72px = 192px), their offcanvas one is   ****/
  /**** 0px (8px + 256px = 264px)                                      ****/

    .jcl-component.styled-sidebar.overlaid.variant-floating.collapse-icon.side-left:not(.collapsed) {
      margin-right:-192px;
    }
    .jcl-component.styled-sidebar.overlaid.variant-floating.collapse-icon.side-right:not(.collapsed) {
      margin-left:-192px;
    }

    .jcl-component.styled-sidebar.overlaid.variant-floating.collapse-offcanvas.side-left:not(.collapsed) {
      margin-right:-264px;
    }
    .jcl-component.styled-sidebar.overlaid.variant-floating.collapse-offcanvas.side-right:not(.collapsed) {
      margin-left:-264px;
    }

  /**** an expanded, overlaid "inset" sidebar floats above the inset ****/
  /**** card and therefore needs a surface of its own                ****/

    .jcl-component.styled-sidebar.overlaid.variant-inset:not(.collapsed) {
      background:color-mix(
        in srgb, var(--jcl-muted-bg-color,#f5f5f5) 50%, var(--jcl-bg-color,#ffffff)
      );
    }
  `);
function Vf(e) {
  return ir(), Ht("div", "styled-sidebar-header", e);
}
function Ef(e) {
  return ir(), Ht("div", "styled-sidebar-content", e);
}
function Nf(e) {
  return ir(), Ht("div", "styled-sidebar-footer", e);
}
const ir = /* @__PURE__ */ Z("jcl-component.styled-sidebar-sections", `
    .jcl-component.styled-sidebar-header {
      display:flex; flex-flow:column nowrap; flex-shrink:0;
      gap:8px; padding:8px;
    }

    .jcl-component.styled-sidebar-content {
      display:flex; flex-flow:column nowrap;
      flex:1 1 auto; min-height:0px;
      gap:8px; padding:8px;
      overflow-y:auto; overscroll-behavior-y:contain;
    }

    .jcl-component.styled-sidebar-footer {
      display:flex; flex-flow:column nowrap; flex-shrink:0;
      gap:8px; padding:8px;
    }
  `);
function Bf(e) {
  return K(() => {
    sr(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Icon), o = ae(e.Value), a = J(e.active) ?? !1, r = J(e.disabled) ?? !1, i = A(e.onClick), s = e.children, l = se((d) => {
      if (r)
        return nn(d);
      N('styledSidebarItem callback "onClick"', i, d);
    }, [r, i]), c = "jcl-component styled-sidebar-item " + (a ? "active " : "") + t;
    return b`<button class="${c}" disabled=${r}
        aria-current=${a ? "true" : void 0}
        onClick=${l} ...${e.RestProps}
      >
        ${n == null ? "" : b`<span class="icon" aria-hidden="true">${n}</>`}
        ${o == null ? b`<span class="label">${s}</>` : b`<span class="label" dangerouslySetInnerHTML=${{ __html: o }}/>`}
      </>`;
  });
}
function Wf(e) {
  return K(() => {
    sr(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    return b`<div class="jcl-component styled-sidebar-separator ${t}"
        style=${n} role="separator" aria-hidden="true" ...${e.RestProps}
      />`;
  });
}
function Hf(e) {
  return K(() => {
    sr(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Label);
    return b`<div class="jcl-component styled-sidebar-group ${t}"
        style=${n} ...${e.RestProps}
      >
        ${o == null ? "" : b`<div class="label">${o}</div>`}
        ${e.children}
      </>`;
  });
}
const sr = /* @__PURE__ */ Z("jcl-component.styled-sidebar-parts", `
    .jcl-component.styled-sidebar-item {
      display:flex; align-items:center; flex-shrink:0;
      gap:8px; width:100%; height:32px;
      border:none; border-radius:var(--jcl-border-radius,8px);
      background:transparent;
      color:inherit;
      padding:0px 8px;
      font:inherit; font-size:14px; text-align:left;
      white-space:nowrap; overflow:hidden;
      cursor:pointer; user-select:none;
      outline:none;
      transition:background-color 0.15s ease, color 0.15s ease;
    }

    .jcl-component.styled-sidebar-item > .icon {
      display:inline-flex; align-items:center; justify-content:center;
      flex-shrink:0; width:18px;
    }

    .jcl-component.styled-sidebar-item > .label {
      flex:1 1 auto; min-width:0px;
      overflow:hidden; text-overflow:ellipsis;
    }

    .jcl-component.styled-sidebar-item:hover,
    .jcl-component.styled-sidebar-item.active {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

    .jcl-component.styled-sidebar-item.active {
      font-weight:500;
    }

    .jcl-component.styled-sidebar-item:focus-visible {
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }

  /**** "disabled" also overrides JCL's general "[disabled]" opacity rule ****/

    .jcl-component.styled-sidebar-item:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

  /**** in a collapsed sidebar, items shrink to their (centered) icons ****/

    .jcl-component.styled-sidebar.collapsed .jcl-component.styled-sidebar-item {
      justify-content:center;
      padding:0px;
    }

    .jcl-component.styled-sidebar.collapsed .jcl-component.styled-sidebar-item > .label {
      display:none;
    }

    .jcl-component.styled-sidebar-separator {
      flex-shrink:0;
      height:1px; margin:0px 8px;
      background:var(--jcl-border-color,#ebebeb);
    }

    .jcl-component.styled-sidebar-group {
      display:flex; flex-flow:column nowrap; flex-shrink:0;
      min-width:0px; width:100%;
    }

    .jcl-component.styled-sidebar-group > .label {
      display:flex; align-items:center; flex-shrink:0;
      height:32px; padding:0px 8px;
      font-size:12px; font-weight:500;
      color:var(--jcl-muted-fg-color,#737373);
      user-select:none;
    }
  `);
function _f(e) {
  return K(() => {
    Gf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Label), a = ae(e.Description), r = ae(e.Error), i = S(e.for), s = E(e.Orientation, (u) => fe(u, ["vertical", "horizontal"])) ?? "vertical", l = J(e.required) ?? !1, c = J(e.disabled) ?? !1, d = r != null && r.trim() !== "";
    return b`<div role="group"
        class="jcl-component styled-field ${s === "horizontal" ? "horizontal" : ""} ${d ? "invalid" : ""} ${c ? "disabled" : ""} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${o == null ? "" : b`<label for=${i}
          class=${l ? "required" : void 0}
        >${o}</label>`}
        ${e.children}
        ${a == null ? "" : b`<p class="description">${a}</p>`}
        ${d ? b`<div class="error" role="alert">${r}</div>` : ""}
      </>`;
  });
}
const Gf = /* @__PURE__ */ Z("jcl-component.styled-field", `
    .jcl-component.styled-field {
      display:flex; flex-flow:column nowrap;
      gap:12px; width:100%;
    }

    .jcl-component.styled-field.horizontal {
      flex-flow:row nowrap; align-items:center;
    }
    .jcl-component.styled-field.horizontal > label {
      flex:1 1 auto;
    }

    .jcl-component.styled-field > label {
      width:fit-content;
      font-size:14px; font-weight:500; line-height:1.375;
      user-select:none;
    }

  /**** "required" labels are marked with an asterisk ****/

    .jcl-component.styled-field > label.required::after {
      content:' *';
      color:var(--jcl-destructive-bg-color,#e7000b);
    }

    .jcl-component.styled-field > .description {
      margin:0px;
      font-size:14px; font-weight:400; line-height:1.5;
      color:var(--jcl-muted-fg-color,#737373);
    }

    .jcl-component.styled-field > .error {
      font-size:14px; font-weight:400;
      color:var(--jcl-destructive-bg-color,#e7000b);
    }

  /**** like shadcn, "disabled" just dims the label - the general JCL   ****/
  /**** ".disabled" opacity rule must not dim the whole field, though   ****/

    .jcl-component.styled-field.disabled {
      opacity:1;
    }

    .jcl-component.styled-field.disabled > label {
      opacity:0.5;
    }
  `);
function Kf(e) {
  return K(() => {
    Os(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    return b`<div role="group"
        class="jcl-component styled-input-group ${t}"
        style=${n} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
function Uf(e) {
  return K(() => {
    Os(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.align ?? e.Alignment, (r) => fe(r, ["start", "end", "top", "bottom"])) ?? "start", a = se((r) => {
      if (r.target.closest("button") != null)
        return;
      r.currentTarget.parentElement?.querySelector("input, textarea, select")?.focus();
    }, []);
    return b`<div role="group"
        class="jcl-component styled-input-group-addon align-${o} ${t}"
        style=${n} onClick=${a} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
const Os = /* @__PURE__ */ Z("jcl-component.styled-input-group", `
    .jcl-component.styled-input-group {
      display:flex; flex-flow:row nowrap; align-items:center;
      width:100%; min-width:0px; height:36px;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      background:color-mix(
        in srgb, var(--jcl-primary-bg-color,#0075ff) 12%, transparent
      );
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
      overflow:hidden;            /* clips the addon backgrounds at corners */
      transition:border-color 0.15s ease, box-shadow 0.15s ease;
    }

  /**** block addons (and text areas) switch to a column layout ****/

    .jcl-component.styled-input-group:has(> .align-top),
    .jcl-component.styled-input-group:has(> .align-bottom),
    .jcl-component.styled-input-group:has(> .styled-text-input) {
      height:auto;
      flex-flow:column nowrap; align-items:stretch;
    }

  /**** the inner control loses its own frame, tint and focus ring ****/

    .jcl-component.styled-input-group .styled-input {
      flex:1 1 auto;
      border:none; border-radius:0px;
      background:transparent;
      box-shadow:none;
    }

    .jcl-component.styled-input-group .styled-input:focus-visible {
      border:none;
      box-shadow:none;
    }

  /**** ... instead, the group frame mirrors focus and invalidity ****/

    .jcl-component.styled-input-group:has(.styled-input:focus-visible) {
      border-color:var(--jcl-ring-color,#0075ff);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
        );
    }

    .jcl-component.styled-input-group:has(.styled-input:invalid),
    .jcl-component.styled-input-group:has(.styled-input.invalid) {
      border-color:var(--jcl-destructive-bg-color,#e7000b);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-destructive-bg-color,#e7000b) 20%, transparent
        );
    }

    .jcl-component.styled-input-group:has(.styled-input:disabled) {
      background:var(--jcl-muted-bg-color,#f5f5f5);
    }
    .jcl-component.styled-input-group:has(.styled-input:disabled)
      > .styled-input-group-addon {
      opacity:0.5;
    }

  /**** the addons themselves sit on a muted background ****/

    .jcl-component.styled-input-group-addon {
      display:flex; align-items:center; justify-content:center;
      align-self:stretch;
      gap:8px;
      background:var(--jcl-muted-bg-color,#f5f5f5);
      padding:6px 12px;
      font-size:14px; font-weight:500;
      color:var(--jcl-muted-fg-color,#737373);
      cursor:text; user-select:none;
    }

    .jcl-component.styled-input-group-addon.align-start {
      order:-9999;
      border-right:solid 1px var(--jcl-border-color,#ebebeb);
    }
    .jcl-component.styled-input-group:has(> .align-start) .styled-input {
      padding-left:8px;
    }

    .jcl-component.styled-input-group-addon.align-end {
      order:9999;
      border-left:solid 1px var(--jcl-border-color,#ebebeb);
    }
    .jcl-component.styled-input-group:has(> .align-end) .styled-input {
      padding-right:8px;
    }

    .jcl-component.styled-input-group-addon.align-top {
      order:-9999;
      width:100%; justify-content:flex-start;
      border-bottom:solid 1px var(--jcl-border-color,#ebebeb);
      padding:8px 12px;
    }

    .jcl-component.styled-input-group-addon.align-bottom {
      order:9999;
      width:100%; justify-content:flex-start;
      border-top:solid 1px var(--jcl-border-color,#ebebeb);
      padding:8px 12px;
    }
  `);
function qf(e) {
  return K(() => {
    Xf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style);
    let o = E(e.Value, (h) => gn(h) || Ke(h));
    const a = E(e.Size, (h) => fe(h, ["small", "normal", "large"])) ?? "normal", r = J(e.disabled), i = A(e.onValueInput), s = A(e.onClick);
    o = o ?? ut;
    const { actualValue: l, actualDisabling: c } = Ze(o, r), d = l == !0, u = se((h) => {
      if (Le(h, c), c == !0)
        return;
      N('styledSwitch callback "onClick"', s, h);
      const f = h.target.checked;
      N(
        'styledSwitch callback "onValueInput"',
        i,
        f,
        h
      );
    }, [c, s, i]), p = nt(a);
    return b`<div class="jcl-component styled-switch ${p} ${c ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="checkbox" role="switch"
          checked=${d} disabled=${c}
          onClick=${u} ...${e.RestProps}
        />
      </>`;
  });
}
const Xf = /* @__PURE__ */ Z("jcl-component.styled-switch", `
    .jcl-component.styled-switch {
      height:36px;
      min-width:36px; min-height:20px;
    }

  /**** "disabled" also overrides JCL's general ".disabled" opacity rule ****/

    .jcl-component.styled-switch.disabled {
      opacity:0.5;
    }

    .jcl-component.styled-switch > input {
      -webkit-appearance:none; appearance:none;
      position:absolute; left:50%; top:50%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
      width:32px; height:18px;
      border:solid 1px transparent;
      border-radius:9999px;
      background:var(--jcl-input-border-color,var(--jcl-border-color,#ebebeb));
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
      outline:none;
      cursor:pointer;
      transition:background-color 0.15s ease, box-shadow 0.15s ease;
    }

    .jcl-component.styled-switch > input:focus-visible {
      border-color:var(--jcl-ring-color,#0075ff);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),
        0px 0px 0px 3px color-mix(
          in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
        );
    }

    .jcl-component.styled-switch > input:checked {
      background:var(--jcl-primary-bg-color,#0075ff);
    }

    .jcl-component.styled-switch > input:disabled {
      pointer-events:none; cursor:not-allowed;
    }

  /**** the sliding thumb ****/

    .jcl-component.styled-switch > input::after {
      content:''; display:block;
      position:absolute; left:2px; top:50%;
      transform:translateY(-50%);
      width:14px; height:14px;
      border-radius:50%;
      background:var(--jcl-bg-color,#ffffff);
      transition:left 0.15s ease;
    }

    .jcl-component.styled-switch > input:checked::after {
      left:calc(100% - 16px);
    }

  /**** size variants ****/

    .jcl-component.styled-switch.size-small > input {
      width:24px; height:14px;
    }
    .jcl-component.styled-switch.size-small > input::after {
      width:10px; height:10px;
    }
    .jcl-component.styled-switch.size-small > input:checked::after {
      left:calc(100% - 12px);
    }

    .jcl-component.styled-switch.size-large > input {
      width:40px; height:22px;
    }
    .jcl-component.styled-switch.size-large > input::after {
      width:18px; height:18px;
    }
    .jcl-component.styled-switch.size-large > input:checked::after {
      left:calc(100% - 20px);
    }
  `);
function Vs(e) {
  return K(() => {
    Es(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Value), a = E(e.Options, (d) => je(d, Ne)) ?? Se("Options"), r = E(e.Size, (d) => fe(d, ["small", "normal", "large"])) ?? "normal", i = J(e.disabled) ?? !1, s = A(e.onValueInput), l = se((d, u) => {
      Le(u), N(
        'styledMultiSwitch callback "onValueInput"',
        s,
        d,
        u
      );
    }, [s]), c = nt(r);
    return b`<div role="radiogroup"
        class="jcl-component styled-multi-switch ${c} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${a.map((d) => {
      const {
        Value: u,
        Label: p,
        disabled: h
      } = Ct(d), f = fe(p, qa);
      return b`<button type="button" role="radio"
            class="option ${u === o ? "selected" : ""}"
            aria-checked=${u === o} aria-label=${u}
            disabled=${i || h}
            onClick=${(g) => l(u, g)}
          >${f ? b`<span class="fa ${p}"/>` : b`<span>${p}</span>`}</>`;
    })}
      </>`;
  });
}
function Yf(e) {
  return K(() => {
    Es(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Size, (i) => fe(i, ["small", "normal", "large"])) ?? "normal", { Theme: a, setTheme: r } = Go();
    return b`<${Vs}
        Class=${t} Style=${n} Size=${o}
        Options=${["auto:fa-adjust", "light:fa-sun-o", "dark:fa-moon-o"]}
        Value=${a}
        onValueInput=${(i) => r(i)}
        ...${e.RestProps}
      />`;
  });
}
const Es = /* @__PURE__ */ Z("jcl-component.styled-multi-switch", `
    .jcl-component.styled-multi-switch {
      display:inline-flex; align-items:center;
      gap:2px; width:fit-content;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:9999px;
      background:var(--jcl-muted-bg-color,#f5f5f5);
      padding:2px;
    }

    .jcl-component.styled-multi-switch > .option {
      display:inline-flex; align-items:center; justify-content:center;
      min-width:28px; height:28px;
      border:none; border-radius:9999px;
      background:transparent;
      color:var(--jcl-muted-fg-color,#737373);
      padding:0px 8px;
      font:inherit; font-size:14px;
      cursor:pointer; user-select:none;
      outline:none;
      transition:background-color 0.15s ease, color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .jcl-component.styled-multi-switch > .option > .fa {
      font-size:14px; line-height:1;
      pointer-events:none;
    }

    .jcl-component.styled-multi-switch > .option:hover {
      color:var(--jcl-fg-color,#0a0a0a);
    }

  /**** the selected option becomes a "pill" on the background color ****/

    .jcl-component.styled-multi-switch > .option.selected {
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);
    }

    .jcl-component.styled-multi-switch > .option:focus-visible {
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }

  /**** "disabled" also overrides JCL's general "[disabled]" opacity rule ****/

    .jcl-component.styled-multi-switch > .option:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

  /**** size variants ****/

    .jcl-component.styled-multi-switch.size-small > .option {
      min-width:24px; height:24px; padding:0px 6px; font-size:12px;
    }
    .jcl-component.styled-multi-switch.size-small > .option > .fa {
      font-size:12px;
    }

    .jcl-component.styled-multi-switch.size-large > .option {
      min-width:32px; height:32px; padding:0px 10px; font-size:16px;
    }
    .jcl-component.styled-multi-switch.size-large > .option > .fa {
      font-size:16px;
    }
  `);
function Jf(e) {
  return K(() => {
    Zf(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Value), a = E(e.Options, (d) => je(d, Ne)) ?? Se("Options"), r = E(e.Orientation, (d) => fe(d, ["vertical", "horizontal"])) ?? "vertical", i = E(e.Size, (d) => fe(d, ["small", "normal", "large"])) ?? "normal", s = J(e.disabled) ?? !1, l = A(e.onValueInput), c = se((d, u) => {
      N(
        'styledRadioGroup callback "onValueInput"',
        l,
        d,
        u
      );
    }, [l]);
    return b`<div role="radiogroup"
        class="jcl-component styled-radio-group ${r === "horizontal" ? "horizontal" : ""} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${a.map((d) => {
      const {
        Value: u,
        Label: p,
        disabled: h
      } = Ct(d);
      return b`<label class="option">
            <${Ms} Size=${i}
              value=${u === o} disabled=${s || h}
              onClick=${(f) => c(u, f)}
            />
            <span>${p}</span>
          </label>`;
    })}
      </>`;
  });
}
const Zf = /* @__PURE__ */ Z("jcl-component.styled-radio-group", `
    .jcl-component.styled-radio-group {
      display:flex; flex-flow:column nowrap;
      gap:12px; width:fit-content;
    }

    .jcl-component.styled-radio-group.horizontal {
      flex-flow:row wrap; align-items:center;
      gap:16px;
    }

    .jcl-component.styled-radio-group > .option {
      display:inline-flex; align-items:center;
      gap:8px; width:fit-content;
      font-size:14px; line-height:1.375;
      cursor:pointer; user-select:none;
    }

    .jcl-component.styled-radio-group > .option:has(input:disabled) {
      color:var(--jcl-muted-fg-color,#737373);
      cursor:not-allowed;
    }

  /**** the radiobutton wrappers must not blow up the line height ****/

    .jcl-component.styled-radio-group .styled-radiobutton {
      height:20px; min-width:16px;
    }
  `);
function Qf(e) {
  return K(() => {
    Pf(), eg(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Value), a = E(e.Options, (te) => je(te, Ne)) ?? Se("Options"), r = S(e.Placeholder), i = S(e.EmptyText) ?? "no items found", s = E(e.Size, (te) => fe(te, ["small", "normal", "large"])) ?? "normal", l = J(e.disabled) ?? !1, c = A(e.onValueInput), d = a.map((te) => {
      const { Value: ue, Label: xe } = Ct(te);
      return { Value: ue, Label: xe };
    }), u = (te) => d.find((ue) => ue.Value === te)?.Label, [p, h] = Be(!1), [f, g] = Be(void 0), [x, m] = Be(-1), C = q(), k = tt(), L = f ?? u(o) ?? "", $ = f == null || f.trim() === "" ? d : d.filter(
      (te) => te.Label.toLowerCase().includes(f.toLowerCase().trim())
    ), y = lt(gt), w = lo(_o), O = y ?? w, { Theme: T, SwatchSet: j, Locale: I, Direction: M } = O, D = so(T, j);
    Ce(() => {
      if (p)
        return window.addEventListener("scroll", k, !0), window.addEventListener("resize", k), () => {
          window.removeEventListener("scroll", k, !0), window.removeEventListener("resize", k);
        };
    }, [p]);
    function V() {
      !p && !l && (h(!0), m(-1));
    }
    function B() {
      h(!1), g(void 0), m(-1);
    }
    function Y(te, ue) {
      Le(ue), B(), N(
        'styledCombobox callback "onValueInput"',
        c,
        te.Value,
        ue
      );
    }
    function Q(te) {
      l || (g(te.target.value), h(!0), m(0));
    }
    function pe(te) {
      switch (!0) {
        case te.key === "ArrowDown":
          te.preventDefault(), V(), m(Math.min(x + 1, $.length - 1));
          break;
        case te.key === "ArrowUp":
          te.preventDefault(), m(Math.max(x - 1, 0));
          break;
        case te.key === "Enter":
          p && x >= 0 && x < $.length && Y($[x], te);
          break;
        case te.key === "Escape":
          B();
      }
    }
    function P() {
      const te = C.current;
      if (te == null)
        return;
      const ue = te.getBoundingClientRect(), xe = window.innerHeight - ue.bottom - 8, ze = ue.top - 8, Ge = xe < 160 && ze > xe, Je = Math.max(
        40,
        Math.min(240, Ge ? ze : xe)
      ), it = Ge ? `left:${ue.left}px; bottom:${window.innerHeight - ue.top + 4}px;` : `left:${ue.left}px; top:${ue.bottom + 4}px;`;
      return Dn(b`
          <${gt.Provider} value=${O}>
            <div class="jcl-combobox-popup" role="listbox"
              dir=${M} lang=${I}
              style="
                ${it} width:${ue.width}px;
                max-height:${Je}px;
                ${D}
              "
            >
              ${$.length === 0 ? b`<div class="empty">${i}</div>` : $.map((oe, ee) => b`<div
                    class="option ${ee === x ? "highlighted" : ""} ${oe.Value === o ? "selected" : ""}"
                    role="option" aria-selected=${oe.Value === o}
                    onMouseDown=${(re) => Y(oe, re)}
                    onMouseEnter=${() => m(ee)}
                  >
                    <span>${oe.Label}</span>
                  </div>`)}
            </>
          </>
        `, document.body);
    }
    const X = nt(s);
    return b`<div class="jcl-component styled-combobox ${t}" style=${n}>
        <input type="text" class="jcl-component styled-input ${X}"
          role="combobox" aria-expanded=${p} aria-autocomplete="list"
          value=${L} placeholder=${r} disabled=${l}
          ref=${C}
          onClick=${V} onInput=${Q} onKeyDown=${pe}
          onBlur=${B} ...${e.RestProps}
        />
        ${p && P()}
      </>`;
  });
}
const Pf = /* @__PURE__ */ Z("jcl-component.styled-combobox", `
    .jcl-component.styled-combobox {
      display:inline-block;
    }

    .jcl-component.styled-combobox > input {
      width:100%;
      padding-right:36px;
    }

  /**** a self-drawn chevron, like in "styledDropDown" ****/

    .jcl-component.styled-combobox::after {
      content:''; display:block; position:absolute;
      right:12px; top:18px; transform:translateY(-50%);
      width:16px; height:16px;
      background:var(--jcl-muted-fg-color,#737373);
      opacity:0.5;
      pointer-events:none;
      ${ao}
      ${ct}
    }
  `), eg = /* @__PURE__ */ Z("jcl-combobox-popup", `
    .jcl-combobox-popup {
      box-sizing:border-box;
      display:block; position:fixed; overflow-y:auto; overscroll-behavior-y:contain;
      z-index:4000000;   /* above overlays, even those living within dialogs */
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 4px 6px -1px rgba(0,0,0,0.1),
        0px 2px 4px -2px rgba(0,0,0,0.1);
      padding:4px;
    }

    .jcl-combobox-popup > .option {
      display:flex; align-items:center; gap:8px;
      padding:6px 8px;
      border-radius:calc(var(--jcl-border-radius,8px) - 4px);
      font-size:14px;
      cursor:pointer; user-select:none;
    }

    .jcl-combobox-popup > .option.highlighted {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

    .jcl-combobox-popup > .option.selected::after {
      content:''; display:block;
      width:16px; height:16px; margin-left:auto;
      background:currentColor;
      ${pc}
      ${ct}
    }

    .jcl-combobox-popup > .empty {
      padding:6px 8px;
      font-size:14px; text-align:center;
      color:var(--jcl-muted-fg-color,#737373);
    }
  `);
function tg(e) {
  return K(() => {
    ng(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Name), a = E(e.Value, $t), r = E(e.Min ?? e.Minimum, $t), i = E(e.Max ?? e.Maximum, $t), s = S(e.Placeholder) ?? "pick a date", l = J(e.disabled) ?? !1, c = A(e.onValueInput), d = A(e.onOpenChange), u = Dt(), p = o ?? "styled-date-picker-" + u, { closeOverlay: h } = An(), f = lt(gt)?.Locale ?? "en";
    let g = "";
    if (a != null) {
      const [C, k, L] = a.split("-").map(Number);
      g = new Intl.DateTimeFormat(f, { dateStyle: "medium" }).format(new Date(C, k - 1, L));
    }
    const x = () => b`<${dr}
        Value=${a} Min=${r} Max=${i}
        onValueInput=${(C, k) => {
      h(p), N(
        'styledDatePicker callback "onValueInput"',
        c,
        C,
        k
      );
    }}
      />`, m = b`<${Ss} Variant="outline"
        Class="styled-date-picker-trigger" disabled=${l}
      >
        <span class="calendar-icon"/>
        ${a == null ? b`<span class="placeholder">${s}</span>` : b`<span>${g}</span>`}
      </>`;
    return l ? b`<span class="jcl-component styled-date-picker ${t}" style=${n}>
          ${m}
        </>` : b`<${As}
        Class="styled-date-picker ${t}" Style=${n}
        Name=${p} Renderer=${x} Width=${262}
        onOpenChange=${d}
      >
        ${m}
      </>`;
  });
}
const ng = /* @__PURE__ */ Z("jcl-component.styled-date-picker", `
    .jcl-component.styled-date-picker .styled-date-picker-trigger {
      width:240px; justify-content:flex-start;
      font-weight:400;
    }

    .jcl-component.styled-date-picker .styled-date-picker-trigger .placeholder {
      color:var(--jcl-muted-fg-color,#737373);
    }

    .jcl-component.styled-date-picker .calendar-icon {
      display:inline-block; flex-shrink:0;
      width:16px; height:16px;
      background:var(--jcl-muted-fg-color,#737373);
      pointer-events:none;
      -webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
              mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
      ${ct}
    }

  /**** the month view needs no extra panel padding ****/

    .jcl-component.styled-popover-panel:has(.styled-month-view) {
      padding:0px;
    }
  `);
function og(e) {
  return K(() => {
    ag(), e = U(e);
    const t = S(e.Class) ?? "";
    let n = ve(e.activeIndex);
    const o = ve(e.GapIndex), a = E(e.Variant, (h) => fe(h, ["default", "line"])) ?? "default", r = J(e.accented) ?? !1, i = J(e.disabled) ?? !1, s = A(e.onActivationChange), l = tt(), c = jt(n, 0);
    n = c.current;
    const d = se((h, f) => {
      if (i)
        return nn(f);
      c.current = h, l(), N('styledTabStrip callback "onActivationChange"', s, h);
    }, [i, s, l]), u = se((h, f) => {
      (f.key === "Enter" || f.key === " ") && (f.preventDefault(), d(h, f));
    }, [d]), p = Yt(e.children).filter((h) => h?.type != null || typeof h == "number" || typeof h == "string" && h.trim() !== "");
    return b`<div
        class="jcl-component styled-tabstrip variant-${a} ${r ? "accented" : ""} ${i ? "disabled" : ""} ${t}"
        role="tablist" aria-disabled=${i ? "true" : void 0}
        ...${e.RestProps}
      >
        ${p.map((h, f) => {
      const g = f === o ? b`<div class="gap"/>` : "", x = f === n;
      return b`${g}<div
            class="${x ? "active" : ""} ${i ? "disabled" : ""} tab"
            role="tab" aria-selected=${x ? "true" : "false"}
            tabIndex=${i || x ? -1 : 0}
            onClick=${x ? void 0 : (m) => d(f, m)}
            onKeyDown=${x ? void 0 : (m) => u(f, m)}
          >${h}</>`;
    })}
      </>`;
  });
}
const ag = /* @__PURE__ */ Z("jcl-component.styled-tabstrip", `
    .jcl-component.styled-tabstrip {
      display:inline-flex; flex-flow:row nowrap; align-items:center;
      width:fit-content; height:36px;
      border-radius:calc(var(--jcl-border-radius,8px) + 2px);
      background:var(--jcl-muted-bg-color,#f5f5f5);
      color:var(--jcl-muted-fg-color,#737373);
      padding:3px;
      font-size:14px; font-weight:500;
    }

    .jcl-component.styled-tabstrip.variant-line {
      border-radius:0px;
      background:transparent;
      padding:0px; gap:4px;
    }

  /**** "disabled" also overrides JCL's general ".disabled" opacity rule ****/

    .jcl-component.styled-tabstrip.disabled {
      opacity:0.5;
    }

    .jcl-component.styled-tabstrip > .gap {
      flex:1 0 auto;
    }

  /**** the tabs themselves ****/

    .jcl-component.styled-tabstrip > .tab {
      display:inline-flex; align-items:center; justify-content:center;
      position:relative; gap:6px;
      height:100%;
      border:solid 1px transparent;
      border-radius:var(--jcl-border-radius,8px);
      padding:0px 8px;
      white-space:nowrap;
      cursor:pointer; user-select:none; pointer-events:auto;
      outline:none;
      transition:background-color 0.15s ease, color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .jcl-component.styled-tabstrip > .tab:hover {
      color:var(--jcl-fg-color,#0a0a0a);
    }

    .jcl-component.styled-tabstrip > .tab:focus-visible {
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }

    .jcl-component.styled-tabstrip > .disabled.tab {
      pointer-events:none;
    }

  /**** 'default': the active tab is raised on the background color ****/

    .jcl-component.styled-tabstrip.variant-default > .active.tab {
      background:var(--jcl-bg-color,#ffffff);
      color:var(--jcl-fg-color,#0a0a0a);
      box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1),
        0px 1px 2px -1px rgba(0,0,0,0.1);
      cursor:auto;
    }

  /**** 'line': the active tab gets an underline instead ****/

    .jcl-component.styled-tabstrip.variant-line > .tab::after {
      content:''; position:absolute;
      left:0px; right:0px; bottom:0px; height:2px;
      background:var(--jcl-fg-color,#0a0a0a);
      opacity:0;
      transition:opacity 0.15s ease;
    }

    .jcl-component.styled-tabstrip.variant-line > .active.tab {
      color:var(--jcl-fg-color,#0a0a0a);
      cursor:auto;
    }

    .jcl-component.styled-tabstrip.variant-line > .active.tab::after {
      opacity:1;
    }

  /**** "accented" renders the active tab in the primary color ****/

    .jcl-component.styled-tabstrip.accented.variant-default > .active.tab {
      background:var(--jcl-primary-bg-color,#0075ff);
      color:var(--jcl-primary-fg-color,#ffffff);
    }

    .jcl-component.styled-tabstrip.accented.variant-line > .active.tab {
      color:var(--jcl-primary-bg-color,#0075ff);
    }

    .jcl-component.styled-tabstrip.accented.variant-line > .active.tab::after {
      background:var(--jcl-primary-bg-color,#0075ff);
    }
  `);
function rg(e) {
  return K(() => {
    ig(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Items, (s) => je(s, Ne)) ?? Se("Items"), a = A(e.onItemClick), r = se((s, l) => {
      Le(l), N('styledBreadcrumb callback "onItemClick"', a, s, l);
    }, [a]), i = o.length - 1;
    return b`<nav class="jcl-component styled-breadcrumb ${t}"
        style=${n} aria-label="breadcrumb" ...${e.RestProps}
      ><ol>
        ${o.map((s, l) => {
      const { Value: c, Label: d } = Ct(s), u = d === "..." ? b`<li class="ellipsis" role="presentation" aria-hidden="true">…</li>` : l === i ? b`<li><span role="link" aria-disabled="true" aria-current="page">${d}</span></li>` : b`<li><a href="#" onClick=${(p) => r(c, p)}>${d}</a></li>`;
      return l === 0 ? u : b`<li class="separator" role="presentation" aria-hidden="true"></li>${u}`;
    })}
      </ol></nav>`;
  });
}
const ig = /* @__PURE__ */ Z("jcl-component.styled-breadcrumb", `
    .jcl-component.styled-breadcrumb > ol {
      display:flex; flex-flow:row wrap; align-items:center;
      gap:6px;
      margin:0px; padding:0px; list-style:none;
      font-size:14px; overflow-wrap:break-word;
      color:var(--jcl-muted-fg-color,#737373);
    }

    .jcl-component.styled-breadcrumb li {
      display:inline-flex; align-items:center; gap:6px;
    }

    .jcl-component.styled-breadcrumb a {
      color:inherit; text-decoration:none;
      cursor:pointer; outline:none;
      transition:color 0.15s ease;
    }

    .jcl-component.styled-breadcrumb a:hover {
      color:var(--jcl-fg-color,#0a0a0a);
    }

    .jcl-component.styled-breadcrumb a:focus-visible {
      border-radius:4px;
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }

    .jcl-component.styled-breadcrumb [aria-current="page"] {
      color:var(--jcl-fg-color,#0a0a0a);
      font-weight:500;
    }

  /**** a chevron separator, drawn as a CSS mask ****/

    .jcl-component.styled-breadcrumb li.separator::before {
      content:''; display:block;
      width:14px; height:14px;
      background:currentColor;
      ${ro}
      ${ct}
    }
  `);
function Ns(e) {
  return K(() => {
    Xo(), sg(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = ve(e.Value) ?? 1, a = ve(e.Count) ?? Se("Count"), r = J(e.accented) ?? !1, i = J(e.disabled) ?? !1, s = A(e.onValueInput), l = Math.min(Math.max(1, o), a), c = r ? "default" : "outline", d = se((p, h) => {
      Le(h), N(
        'styledPagination callback "onValueInput"',
        s,
        p,
        h
      );
    }, [s]), u = [];
    if (a <= 7)
      for (let p = 1; p <= a; p++)
        u.push(p);
    else {
      u.push(1), l > 3 && u.push("...");
      const p = Math.max(2, l - 1), h = Math.min(a - 1, l + 1);
      for (let f = p; f <= h; f++)
        u.push(f);
      l < a - 2 && u.push("..."), u.push(a);
    }
    return b`<nav role="navigation" aria-label="pagination"
        class="jcl-component styled-pagination ${t}"
        style=${n} ...${e.RestProps}
      ><ul>
        <li><button
          class="jcl-component styled-button variant-ghost page"
          aria-label="go to previous page"
          disabled=${i || l <= 1}
          onClick=${(p) => d(l - 1, p)}
        ><span class="chevron-left"/></></li>

        ${u.map((p) => p === "..." ? b`<li><span class="ellipsis" aria-hidden="true">…</span></li>` : b`<li><button
              class="jcl-component styled-button variant-${p === l ? c : "ghost"} page"
              aria-current=${p === l ? "page" : void 0}
              disabled=${i}
              onClick=${p === l ? void 0 : (h) => d(p, h)}
            >${p}</></li>`)}

        <li><button
          class="jcl-component styled-button variant-ghost page"
          aria-label="go to next page"
          disabled=${i || l >= a}
          onClick=${(p) => d(l + 1, p)}
        ><span class="chevron-right"/></></li>
      </ul></nav>`;
  });
}
const sg = /* @__PURE__ */ Z("jcl-component.styled-pagination", `
    .jcl-component.styled-pagination {
      display:flex; justify-content:center;
      width:fit-content;
    }

    .jcl-component.styled-pagination > ul {
      display:flex; flex-flow:row nowrap; align-items:center;
      gap:4px;
      margin:0px; padding:0px; list-style:none;
    }

    .jcl-component.styled-pagination .page {
      width:36px; padding:0px;
    }

    .jcl-component.styled-pagination .ellipsis {
      display:flex; align-items:center; justify-content:center;
      width:36px; height:36px;
      color:var(--jcl-muted-fg-color,#737373);
      user-select:none;
    }

  /**** the chevrons for "previous" and "next", drawn as CSS masks ****/

    .jcl-component.styled-pagination .chevron-left,
    .jcl-component.styled-pagination .chevron-right {
      display:inline-block;
      width:16px; height:16px;
      background:currentColor;
      pointer-events:none;
      ${ct}
    }

    .jcl-component.styled-pagination .chevron-left {
      ${Da}
    }

    .jcl-component.styled-pagination .chevron-right {
      ${ro}
    }
  `);
function lg(e) {
  return Ht("div", "styled-accordion", e);
}
function cg(e) {
  return K(() => {
    dg(), e = U(e);
    const t = S(e.Class) ?? "", n = S(e.Header) ?? Se("Header");
    let o = J(e.expanded);
    const a = J(e.disabled) ?? !1, r = A(e.onExpansionChange), i = tt(), s = Dt(), l = s + "-fold-header", c = s + "-fold-content", d = jt(o, !1);
    o = d.current;
    const u = se((p) => {
      if (Le(p), a)
        return;
      const h = !d.current;
      d.current = h, i(), N('styledAccordionFold callback "onExpansionChange"', r, h);
    }, [a, r, i]);
    return b`<div
        class="jcl-component styled-accordion-fold ${a ? "disabled" : ""} ${t}"
        ...${e.RestProps}
      >
        <button class="trigger" id=${l}
          aria-expanded=${o ? "true" : "false"} aria-controls=${c}
          disabled=${a}
          onClick=${u}
        >
          <span class="title">${n}</span>
          <span class="chevron"/>
        </>
        ${o ? b`<div
          id=${c} class="content"
          role="region" aria-labelledby=${l}
        >${e.children}</>` : ""}
      </>`;
  });
}
const dg = /* @__PURE__ */ Z("jcl-component.styled-accordion", `
    .jcl-component.styled-accordion {
      display:flex; flex-flow:column nowrap;
      width:100%;
      border:solid 1px var(--jcl-border-color,#ebebeb);
      border-radius:var(--jcl-border-radius,8px);
      overflow:hidden;
    }

    .jcl-component.styled-accordion > .styled-accordion-fold {
      border-bottom:solid 1px var(--jcl-border-color,#ebebeb);
    }
    .jcl-component.styled-accordion > .styled-accordion-fold:last-child {
      border-bottom:none;
    }

    .jcl-component.styled-accordion > .styled-accordion-fold > .trigger {
      padding:16px;
    }
    .jcl-component.styled-accordion > .styled-accordion-fold > .content {
      padding:0px 16px 16px 16px;
    }

    .jcl-component.styled-accordion-fold {
      width:100%;
    }

  /**** the global ".disabled" rule must not dim the whole fold ****/

    .jcl-component.styled-accordion-fold.disabled {
      opacity:1;
    }

  /**** the whole header row acts as the trigger ****/

    .jcl-component.styled-accordion-fold > .trigger {
      display:flex; align-items:flex-start; justify-content:space-between;
      gap:16px; width:100%;
      border:none; border-radius:var(--jcl-border-radius,8px);
      background:transparent;
      color:inherit;
      padding:16px 0px;
      font:inherit; font-size:14px; font-weight:500; text-align:left;
      cursor:pointer;
      outline:none;
      transition:box-shadow 0.15s ease;
    }

    .jcl-component.styled-accordion-fold > .trigger:hover {
      text-decoration:underline;
    }

    .jcl-component.styled-accordion-fold > .trigger:focus-visible {
      box-shadow:0px 0px 0px 3px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 20%, transparent
      );
    }

    .jcl-component.styled-accordion-fold > .trigger:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

  /**** a chevron on the right rotates when the fold is expanded ****/

    .jcl-component.styled-accordion-fold > .trigger > .chevron {
      display:inline-block; flex-shrink:0;
      width:16px; height:16px;
      margin-top:2px;
      background:var(--jcl-muted-fg-color,#737373);
      pointer-events:none;
      transition:transform 0.2s ease;
      ${ao}
      ${ct}
    }

    .jcl-component.styled-accordion-fold > .trigger[aria-expanded="true"] > .chevron {
      transform:rotate(180deg);
    }

    .jcl-component.styled-accordion-fold > .content {
      padding:0px 0px 16px 0px;
      font-size:14px;
    }
  `);
function Bs(e) {
  return K(() => {
    ug(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = S(e.Caption), a = ve(e.maxHeight), r = J(e.striped) ?? !1, i = (a == null ? "" : "max-height:" + a + "px; ") + (n ?? "");
    return b`<div class="jcl-component styled-table-container ${t}"
        style=${i} ...${e.RestProps}
      >
        <table class="styled-table ${r ? "striped" : ""}">
          ${o == null ? "" : b`<caption>${o}</caption>`}
          ${e.children}
        </table>
      </>`;
  });
}
const ug = /* @__PURE__ */ Z("jcl-component.styled-table", `
    .jcl-component.styled-table-container {
      position:relative;
      width:100%; overflow:auto; overscroll-behavior:contain;
    }

    .jcl-component.styled-table-container > .styled-table {
      width:100%;
      border-collapse:separate; border-spacing:0px;
      caption-side:bottom;
      font-size:14px; text-align:left;
    }

    .jcl-component.styled-table-container > .styled-table > caption {
      margin-top:16px;
      font-size:14px;
      color:var(--jcl-muted-fg-color,#737373);
    }
  `);
function lr(e, t) {
  return function(o) {
    return K(() => {
      o = U(o);
      const a = S(o.Class) ?? "", r = ae(o.Style);
      return b`<${e} class="${t} ${a}"
          style=${r} ...${o.RestProps}
        >${o.children}</>`;
    });
  };
}
const Ws = /* @__PURE__ */ lr("thead", "styled-table-header"), Hs = /* @__PURE__ */ lr("tbody", "styled-table-body"), pg = /* @__PURE__ */ lr("tfoot", "styled-table-footer");
function Lo(e) {
  return K(() => {
    cr(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = J(e.selected) ?? !1, a = A(e.onClick);
    return b`<tr class="styled-table-row ${o ? "selected" : ""} ${a == null ? "" : "clickable"} ${t}"
        style=${n} aria-selected=${o ? "true" : void 0}
        onClick=${a} ...${e.RestProps}
      >${e.children}</>`;
  });
}
function wa(e) {
  return K(() => {
    cr(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.align ?? e.Alignment, (i) => fe(i, ["left", "center", "right"])), a = ve(e.Width), r = (o == null ? "" : "text-align:" + o + "; ") + (a == null ? "" : "width:" + a + "px; ") + (n ?? "");
    return b`<th class="styled-table-head ${t}"
        style=${r} ...${e.RestProps}
      >${e.children}</>`;
  });
}
function So(e) {
  return K(() => {
    cr(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.align ?? e.Alignment, (r) => fe(r, ["left", "center", "right"])), a = (o == null ? "" : "text-align:" + o + "; ") + (n ?? "");
    return b`<td class="styled-table-cell ${t}"
        style=${a} ...${e.RestProps}
      >${e.children}</>`;
  });
}
const cr = /* @__PURE__ */ Z("jcl-component.styled-table-parts", `
    .styled-table .styled-table-head {
      height:40px; padding:0px 8px;
      border-bottom:solid 1px var(--jcl-border-color,#ebebeb);
      font-weight:500; vertical-align:middle;
      color:var(--jcl-muted-fg-color,#737373);
      position:sticky; top:0px; z-index:1;      /* sticky header */
      background:var(--jcl-muted-bg-color,#f5f5f5);
    }

    .styled-table .styled-table-cell {
      padding:8px;
      border-bottom:solid 1px var(--jcl-border-color,#ebebeb);
      vertical-align:middle;
    }

    .styled-table .styled-table-row {
      transition:background-color 0.15s ease;
    }

  /**** "striped" tables tint every other body row ****/

    .styled-table.striped .styled-table-body > .styled-table-row:nth-child(even) {
      background:color-mix(
        in srgb, var(--jcl-muted-bg-color,#f5f5f5) 50%, transparent
      );
    }

    .styled-table .styled-table-body > .styled-table-row:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
    }

    .styled-table .styled-table-row.selected {
      background:var(--jcl-muted-bg-color,#f5f5f5);
    }

    .styled-table .styled-table-row.clickable {
      cursor:pointer;
    }

    .styled-table .styled-table-footer {
      background:color-mix(
        in srgb, var(--jcl-muted-bg-color,#f5f5f5) 50%, transparent
      );
      font-weight:500;
    }
    .styled-table .styled-table-footer .styled-table-cell {
      border-bottom:none;
      border-top:solid 1px var(--jcl-border-color,#ebebeb);
    }
  `);
function hg(e) {
  return K(() => {
    fg(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Columns, (X) => je(X, (te) => Ne(te) || De(te))) ?? Se("Columns"), a = E(e.Data, (X) => je(X, De)) ?? Se("Data");
    let r = S(e.SortKey), i = E(e.SortOrder, (X) => fe(X, ["ascending", "descending"]));
    const s = J(e.selectable) ?? !1, l = J(e.striped) ?? !1;
    let c = E(e.Selection, ci);
    const d = ve(e.PageSize);
    let u = ve(e.Page);
    const p = ve(e.maxHeight), h = S(e.EmptyText) ?? "no entries", f = J(e.disabled) ?? !1, g = A(e.onSortChange), x = A(e.onSelectionChange), m = A(e.onPageChange), C = A(e.onRowClick), k = tt(), L = o.map((X) => {
      if (!Ne(X))
        return X;
      const { Value: te, Label: ue } = Ct(X);
      return { Key: te, Label: ue };
    }), $ = jt(r), y = jt(i, "ascending");
    r = $.current, i = y.current;
    const w = se((X, te) => {
      Le(te), $.current === X.Key ? y.current = y.current === "ascending" ? "descending" : "ascending" : ($.current = X.Key, y.current = "ascending"), k(), N(
        'styledDataTable callback "onSortChange"',
        g,
        $.current,
        y.current
      );
    }, [g, k]), O = jt(c, []);
    c = O.current;
    function T(X, te) {
      O.current = X, k(), N(
        'styledDataTable callback "onSelectionChange"',
        x,
        X,
        te
      );
    }
    function j(X, te) {
      T(
        c.includes(X) ? c.filter((ue) => ue !== X) : [...c, X],
        te
      );
    }
    function I(X) {
      const te = a.filter((ue) => c.includes(ue)).length;
      T(te === a.length ? [] : [...a], X);
    }
    const M = lt(gt)?.Locale ?? "en", D = (X, te) => String(X ?? "").localeCompare(String(te ?? ""), M);
    let V = [...a];
    if (r != null) {
      const te = L.find((xe) => xe.Key === r)?.Comparator ?? D, ue = i === "descending" ? -1 : 1;
      V.sort((xe, ze) => ue * te(xe[r], ze[r]));
    }
    const B = d == null ? 1 : Math.max(1, Math.ceil(V.length / d)), Y = jt(u, 1);
    u = Math.min(Math.max(1, Y.current), B);
    const Q = se((X, te) => {
      Y.current = X, k(), N(
        'styledDataTable callback "onPageChange"',
        m,
        X,
        te
      );
    }, [m, k]);
    d != null && (V = V.slice((u - 1) * d, u * d));
    const pe = a.filter((X) => c.includes(X)).length, P = L.length + (s ? 1 : 0);
    return b`<div class="jcl-component styled-data-table ${t}" style=${n}
        ...${e.RestProps}
      >
        <${Bs} maxHeight=${p} striped=${l}>
          <${Ws}>
            <${Lo}>
              ${s && b`<${wa} Width=${36} onClick=${Le}>
                <${xa}
                  value=${pe === 0 ? !1 : pe === a.length ? !0 : null}
                  disabled=${f} onValueInput=${(X, te) => I(te)}
                />
              </>`}
              ${L.map((X) => b`<${wa}
                Align=${X.Align} Width=${X.Width}
              >${X.sortable == !0 ? b`<button class="sorter" disabled=${f}
                      onClick=${(te) => w(X, te)}
                    >
                      <span>${X.Label ?? X.Key}</span>
                      <span class="indicator ${r === X.Key ? i : ""}"/>
                    </>` : X.Label ?? X.Key}</>`)}
            </>
          </>
          <${Hs}>
            ${V.length === 0 ? b`<${Lo}>
                  <${So} Class="empty" colspan=${P}>${h}</>
                </>` : V.map((X) => b`<${Lo}
                  selected=${c.includes(X)}
                  onClick=${C == null ? void 0 : (te) => N(
      'styledDataTable callback "onRowClick"',
      C,
      X,
      te
    )}
                >
                  ${s && b`<${So} onClick=${Le}>
                    <${xa}
                      value=${c.includes(X)} disabled=${f}
                      onValueInput=${(te, ue) => j(X, ue)}
                    />
                  </>`}
                  ${L.map((te) => b`<${So} Align=${te.Align}>
                    ${te.Renderer != null ? te.Renderer(X) : X[te.Key]}
                  </>`)}
                </>`)}
          </>
        </>
        ${d != null && B > 1 && b`<${Ns}
          Value=${u} Count=${B} disabled=${f}
          onValueInput=${Q}
        />`}
      </>`;
  });
}
const fg = /* @__PURE__ */ Z("jcl-component.styled-data-table", `
    .jcl-component.styled-data-table {
      display:flex; flex-flow:column nowrap;
      gap:8px; width:100%;
    }

    .jcl-component.styled-data-table > .jcl-component.styled-pagination {
      align-self:center;
    }

    .jcl-component.styled-data-table .styled-table-cell.empty {
      text-align:center;
      color:var(--jcl-muted-fg-color,#737373);
    }

  /**** the checkbox wrappers must not blow up the row height ****/

    .jcl-component.styled-data-table .styled-checkbox {
      height:20px; min-width:16px;
    }

  /**** sortable column headers (with sort direction indicators) ****/

    .jcl-component.styled-data-table .sorter {
      display:inline-flex; align-items:center;
      gap:4px;
      border:none; background:transparent;
      color:inherit; padding:0px;
      font:inherit; font-weight:500;
      cursor:pointer; user-select:none;
      outline:none;
    }
    .jcl-component.styled-data-table .sorter:hover {
      color:var(--jcl-fg-color,#0a0a0a);
    }
    .jcl-component.styled-data-table .sorter:focus-visible {
      border-radius:4px;
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }
    .jcl-component.styled-data-table .sorter:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

    .jcl-component.styled-data-table .sorter > .indicator {
      display:inline-block;
      width:14px; height:14px;
      background:currentColor;
      opacity:0;
      pointer-events:none;
      ${ct}
      ${ao}
    }

    .jcl-component.styled-data-table .sorter > .indicator.ascending {
      opacity:1;
      ${uc}
    }

    .jcl-component.styled-data-table .sorter > .indicator.descending {
      opacity:1;
    }
  `);
function dr(e) {
  return K(() => {
    _s(), gg(), e = U(e);
    const t = S(e.Class) ?? "", n = ae(e.Style), o = E(e.Value, $t);
    let a = E(e.Month, Qa);
    const r = E(e.Min ?? e.Minimum, $t), i = E(e.Max ?? e.Maximum, $t), s = J(e.disabled) ?? !1, l = A(e.onValueInput), c = A(e.onMonthChange), d = tt(), u = (M) => M.getFullYear() + "-" + String(M.getMonth() + 1).padStart(2, "0") + "-" + String(M.getDate()).padStart(2, "0"), p = u(/* @__PURE__ */ new Date()), h = o != null ? o.slice(0, 7) : p.slice(0, 7), f = jt(a, h);
    a = f.current;
    const [g, x] = a.split("-").map(Number), m = se((M, D) => {
      Le(D);
      const [V, B] = f.current.split("-").map(Number), Y = new Date(V, B - 1 + M, 1), Q = Y.getFullYear() + "-" + String(Y.getMonth() + 1).padStart(2, "0");
      f.current = Q, d(), N(
        'styledMonthView callback "onMonthChange"',
        c,
        Q
      );
    }, [c, d]), C = se((M, D) => {
      Le(D), N(
        'styledMonthView callback "onValueInput"',
        l,
        M,
        D
      );
    }, [l]), k = lt(gt)?.Locale ?? "en";
    let L = 1;
    try {
      const M = new Intl.Locale(k);
      L = (M.getWeekInfo?.() ?? M.weekInfo)?.firstDay ?? 1;
    } catch {
    }
    const $ = new Intl.DateTimeFormat(k, { month: "long", year: "numeric" }), y = new Intl.DateTimeFormat(k, { weekday: "short" }), w = [];
    for (let M = 0; M < 7; M++) {
      const D = (L - 1 + M) % 7;
      w.push(
        // 2024-01-01 was a Monday
        y.format(new Date(2024, 0, 1 + D))
      );
    }
    const O = new Date(g, x - 1, 1), j = ((O.getDay() + 6) % 7 - (L - 1) + 7) % 7, I = [];
    for (let M = 0; M < 42; M++) {
      const D = new Date(g, x - 1, 1 - j + M), V = u(D);
      I.push({
        ISODate: V,
        Day: D.getDate(),
        inMonth: D.getMonth() === x - 1,
        isDisabled: s || r != null && V < r || i != null && V > i
      });
    }
    return b`<div class="jcl-component styled-calendar-view styled-month-view ${t}"
        style=${n} ...${e.RestProps}
      >
        <div class="header">
          <button class="nav" aria-label="go to previous month"
            disabled=${s} onClick=${(M) => m(-1, M)}
          ><span class="chevron-left"/></>
          <div class="caption">${$.format(O)}</div>
          <button class="nav" aria-label="go to next month"
            disabled=${s} onClick=${(M) => m(1, M)}
          ><span class="chevron-right"/></>
        </>
        <div class="grid" role="grid">
          ${w.map((M) => b`<div class="weekday">${M}</div>`)}
          ${I.map((M) => b`<button
            class="day ${M.inMonth ? "" : "outside"} ${M.ISODate === o ? "selected" : ""} ${M.ISODate === p ? "today" : ""}"
            aria-selected=${M.ISODate === o ? "true" : void 0}
            disabled=${M.isDisabled}
            onClick=${(D) => C(M.ISODate, D)}
          >${M.Day}</>`)}
        </>
      </>`;
  });
}
const _s = /* @__PURE__ */ Z("jcl-component.styled-calendar-view", `
    .jcl-component.styled-calendar-view {
      display:inline-block;
      width:fit-content;
      padding:12px;
      font-size:14px;
    }

    .jcl-component.styled-calendar-view > .header {
      display:flex; align-items:center; justify-content:space-between;
      margin-bottom:8px;
    }

    .jcl-component.styled-calendar-view > .header > .caption {
      font-weight:500;
      user-select:none;
    }

    .jcl-component.styled-calendar-view > .header > .nav {
      display:inline-flex; align-items:center; justify-content:center;
      width:28px; height:28px;
      border:none; border-radius:var(--jcl-border-radius,8px);
      background:transparent;
      color:var(--jcl-muted-fg-color,#737373);
      cursor:pointer; outline:none;
      transition:background-color 0.15s ease, color 0.15s ease;
    }
    .jcl-component.styled-calendar-view > .header > .nav:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }
    .jcl-component.styled-calendar-view > .header > .nav:focus-visible {
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }
    .jcl-component.styled-calendar-view > .header > .nav:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }

    .jcl-component.styled-calendar-view .chevron-left,
    .jcl-component.styled-calendar-view .chevron-right {
      display:inline-block;
      width:16px; height:16px;
      background:currentColor;
      pointer-events:none;
      ${ct}
    }
    .jcl-component.styled-calendar-view .chevron-left {
      ${Da}
    }
    .jcl-component.styled-calendar-view .chevron-right {
      ${ro}
    }

  /**** multi-month views hide the navigation of their inner month views ****/

    .jcl-component.styled-calendar-view .styled-month-view > .header > .nav {
      display:none;
    }
    .jcl-component.styled-calendar-view .styled-month-view > .header {
      justify-content:center;
    }
  `), gg = /* @__PURE__ */ Z("jcl-component.styled-month-view", `
    .jcl-component.styled-month-view > .grid {
      display:grid;
      grid-template-columns:repeat(7,32px);
      gap:2px;
    }

    .jcl-component.styled-month-view > .grid > .weekday {
      display:flex; align-items:center; justify-content:center;
      height:32px;
      font-size:12.8px;
      color:var(--jcl-muted-fg-color,#737373);
      user-select:none;
    }

    .jcl-component.styled-month-view > .grid > .day {
      display:flex; align-items:center; justify-content:center;
      width:32px; height:32px;
      border:none; border-radius:var(--jcl-border-radius,8px);
      background:transparent;
      color:inherit;
      font:inherit; font-size:14px;
      cursor:pointer; user-select:none;
      outline:none;
      transition:background-color 0.15s ease, color 0.15s ease;
    }

    .jcl-component.styled-month-view > .grid > .day:hover {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

    .jcl-component.styled-month-view > .grid > .day:focus-visible {
      box-shadow:0px 0px 0px 2px color-mix(
        in srgb, var(--jcl-ring-color,#0075ff) 50%, transparent
      );
    }

    .jcl-component.styled-month-view > .grid > .day.outside {
      color:var(--jcl-muted-fg-color,#737373);
      opacity:0.6;
    }

    .jcl-component.styled-month-view > .grid > .day.today {
      background:var(--jcl-accent-bg-color,#f7f7f7);
      color:var(--jcl-accent-fg-color,#171717);
    }

    .jcl-component.styled-month-view > .grid > .day.selected {
      background:var(--jcl-primary-bg-color,#0075ff);
      color:var(--jcl-primary-fg-color,#ffffff);
    }

  /**** "disabled" also overrides JCL's general "[disabled]" opacity rule ****/

    .jcl-component.styled-month-view > .grid > .day:disabled {
      pointer-events:none; cursor:not-allowed;
      opacity:0.5;
    }
  `);
function Gs(e) {
  const {
    Name: t,
    ClassName: n,
    PeriodKey: o,
    ValueIsPeriod: a,
    defaultPeriodFor: r,
    shiftedPeriod: i,
    CaptionFor: s,
    MonthsOf: l,
    withOrientation: c = !1,
    ensureStyles: d
  } = e, u = "on" + o + "Change";
  return function(h) {
    return K(() => {
      _s(), d?.(), h = U(h);
      const f = S(h.Class) ?? "", g = ae(h.Style), x = E(h.Value, $t);
      let m = E(h[o], a);
      const C = E(h.Min ?? h.Minimum, $t), k = E(h.Max ?? h.Maximum, $t), L = c ? E(h.Orientation, (Y) => fe(Y, ["horizontal", "vertical"])) ?? "horizontal" : void 0, $ = J(h.disabled) ?? !1, y = A(h.onValueInput), w = A(h[u]), O = tt(), T = (/* @__PURE__ */ new Date()).toLocaleDateString("sv"), j = r(x ?? T), I = jt(m, j);
      m = I.current;
      const M = se((Y, Q) => {
        Le(Q);
        const pe = i(I.current, Y);
        I.current = pe, O(), N(
          t + ' callback "' + u + '"',
          w,
          pe
        );
      }, [w, O]), D = se((Y, Q) => {
        N(
          t + ' callback "onValueInput"',
          y,
          Y,
          Q
        );
      }, [y]), V = l(m), B = n + (c ? ` orientation-${L}` : "");
      return b`<div class="jcl-component styled-calendar-view ${B} ${f}"
          style=${g} ...${h.RestProps}
        >
          <div class="header">
            <button class="nav" aria-label=${"go to previous " + o.toLowerCase()}
              disabled=${$} onClick=${(Y) => M(-1, Y)}
            ><span class="chevron-left"/></>
            <div class="caption">${s(m)}</div>
            <button class="nav" aria-label=${"go to next " + o.toLowerCase()}
              disabled=${$} onClick=${(Y) => M(1, Y)}
            ><span class="chevron-right"/></>
          </>
          <div class="months">
            ${V.map((Y) => b`<${dr}
              Value=${x} Month=${Y} Min=${C} Max=${k}
              disabled=${$} onValueInput=${D}
            />`)}
          </>
        </>`;
    });
  };
}
const mg = "\\d{4}-Q[1-4]", bg = /* @__PURE__ */ Sn(mg);
function yg(e) {
  return Bt(e, bg);
}
const xg = (e) => e.slice(0, 4) + "-Q" + (Math.floor((Number(e.slice(5, 7)) - 1) / 3) + 1), wg = /* @__PURE__ */ Z("jcl-component.styled-quarter-view", `
    .jcl-component.styled-quarter-view > .months {
      display:flex; flex-flow:row nowrap; align-items:flex-start;
      gap:8px;
    }

    .jcl-component.styled-quarter-view.orientation-vertical > .months {
      flex-flow:column nowrap; align-items:center;
    }
  `), vg = /* @__PURE__ */ Gs({
  Name: "styledQuarterView",
  ClassName: "styled-quarter-view",
  PeriodKey: "Quarter",
  ValueIsPeriod: yg,
  defaultPeriodFor: xg,
  shiftedPeriod: (e, t) => {
    const n = Number(e.slice(0, 4)), o = Number(e.slice(6)), a = n * 4 + (o - 1) + t;
    return Math.floor(a / 4) + "-Q" + (a % 4 + 1);
  },
  CaptionFor: (e) => "Q" + e.slice(6) + " " + e.slice(0, 4),
  MonthsOf: (e) => {
    const t = Number(e.slice(0, 4)), n = Number(e.slice(6)), o = [];
    for (let a = 0; a < 3; a++) {
      const r = (n - 1) * 3 + 1 + a;
      o.push(t + "-" + String(r).padStart(2, "0"));
    }
    return o;
  },
  withOrientation: !0,
  ensureStyles: wg
}), Cg = /* @__PURE__ */ Z("jcl-component.styled-year-view", `
    .jcl-component.styled-year-view > .months {
      display:grid;
      grid-template-columns:repeat(3,min-content);
      gap:8px;
    }
  `), kg = /* @__PURE__ */ Gs({
  Name: "styledYearView",
  ClassName: "styled-year-view",
  PeriodKey: "Year",
  ValueIsPeriod: (e) => Ca(e, 1, 9999),
  defaultPeriodFor: (e) => Number(e.slice(0, 4)),
  shiftedPeriod: (e, t) => e + t,
  CaptionFor: (e) => String(e),
  MonthsOf: (e) => {
    const t = [];
    for (let n = 1; n <= 12; n++)
      t.push(e + "-" + String(n).padStart(2, "0"));
    return t;
  },
  ensureStyles: Cg
});
let ai = !1;
function jg() {
  ai || (ai = !0, Fo("en", {
    "jcl.applet.compilation-error.title": "Compilation Error",
    "jcl.applet.compilation-error.prefix": 'Compiling Applet "src" failed with ',
    "jcl.applet.runtime-error.title": "Applet Failure",
    "jcl.applet.runtime-error.prefix": "JCL Applet failed with "
  }), Fo("de", {
    "jcl.applet.compilation-error.title": "Kompilierungsfehler",
    "jcl.applet.compilation-error.prefix": "Kompilieren des Applet-Skripts fehlgeschlagen: ",
    "jcl.applet.runtime-error.title": "Laufzeitfehler",
    "jcl.applet.runtime-error.prefix": "JCL-Applet fehlgeschlagen: "
  }));
}
class $g extends HTMLElement {
  _Renderer;
  constructor() {
    super(), jg();
    const t = Ps(this.getAttribute("src") ?? "");
    if (t.trim() === "") {
      this._Renderer = Ks("");
      return;
    }
    try {
      this._Renderer = new Al("PropSet", t);
    } catch (n) {
      this._Renderer = Ig(
        "compilation-error",
        n.stack ?? n.message ?? String(n)
      );
    }
  }
  connectedCallback() {
    ia(b`<${Us} renderer=${this._Renderer}/>`, this);
  }
  disconnectedCallback() {
    ia(null, this);
  }
}
function yb() {
  customElements.get("jcl-applet") == null && customElements.define("jcl-applet", $g);
}
function Ks(e) {
  return e.trim() === "" ? function(t) {
    return "";
  } : function(t) {
    return b`<${Ut} Error=${e}/>`;
  };
}
function Ig(e, t) {
  return function(n) {
    const o = typeof navigator < "u" ? navigator.language : "en", a = la(`jcl.applet.${e}.title`, o) ?? "Error", r = la(`jcl.applet.${e}.prefix`, o) ?? "", i = a + `

` + r + t;
    return b`<${Ut} Error=${i}/>`;
  };
}
function Us(e) {
  Dg();
  const [t, n] = Be(void 0), o = q(void 0), a = q(!1), r = lo(_o), { Locale: i, Direction: s, Theme: l, SwatchSet: c } = r, d = so(l, c);
  Ce(() => {
    const {
      setLocale: f,
      setDirection: g,
      setTheme: x,
      setPointerAccuracy: m,
      setHoverCapability: C,
      setPreferredMotion: k,
      setPreferredContrast: L
    } = r, $ = new AbortController();
    if (window.addEventListener("languagechange", () => {
      const y = navigator.language;
      f(y), g(Ci(y));
    }, { signal: $.signal }), typeof window.matchMedia == "function") {
      const y = (Q) => x(Q.matches ? "dark" : "light"), w = (Q) => m(Q.matches ? "coarse" : "fine"), O = (Q) => C(Q.matches ? "hover" : "none"), T = () => k(
        Tt("(prefers-reduced-motion: reduce)") ? "reduced" : void 0
      ), j = () => L(
        Tt("(prefers-contrast: more)") ? "more" : Tt("(prefers-contrast: less)") ? "less" : void 0
      ), I = window.matchMedia("(prefers-color-scheme: dark)"), M = window.matchMedia("(pointer: coarse)"), D = window.matchMedia("(hover: hover)"), V = window.matchMedia("(prefers-reduced-motion: reduce)"), B = window.matchMedia("(prefers-contrast: more)"), Y = window.matchMedia("(prefers-contrast: less)");
      I.addEventListener("change", y), M.addEventListener("change", w), D.addEventListener("change", O), V.addEventListener("change", T), B.addEventListener("change", j), Y.addEventListener("change", j), $.signal.addEventListener("abort", () => {
        I.removeEventListener("change", y), M.removeEventListener("change", w), D.removeEventListener("change", O), V.removeEventListener("change", T), B.removeEventListener("change", j), Y.removeEventListener("change", j);
      });
    }
    return () => $.abort();
  }, [r]);
  const [u] = ja(), { localized: p } = Ma(r);
  let h;
  switch (!0) {
    case u != null: {
      const f = p("jcl.applet.runtime-error.title"), g = p("jcl.applet.runtime-error.prefix"), x = f + `

` + g + (u.stack ?? u.message ?? String(u));
      h = b`<${Ut} Error=${x}/>`;
      break;
    }
    case o.current !== t:
      o.current = t, a.current = !0, h = t;
      break;
    case a.current:
      h = t;
      break;
    default: {
      let f;
      try {
        f = e.renderer({});
      } catch (g) {
        const x = p("jcl.applet.runtime-error.title"), m = p("jcl.applet.runtime-error.prefix"), C = x + `

` + m + (g.stack ?? g.message ?? String(g));
        return h = b`<${Ut} Error=${C}/>`, b`<div
              class="jcl-component jcl-applet"
              dir=${s} lang=${i} style=${d}
              role="alert" aria-live="assertive"
            >
             <${gt.Provider} value=${r}>
              ${h}
             </>
            </div>`;
      }
      if (fi(f))
        return f.then((g) => n(g)).catch((g) => {
          const x = p("jcl.applet.runtime-error.title"), m = p("jcl.applet.runtime-error.prefix"), C = x + `

` + m + (g.stack ?? g.message ?? String(g));
          n(b`<${Ut} Error=${C}/>`);
        }), b`<div
              class="jcl-component jcl-applet" dir=${s}
              aria-busy="true" aria-live="polite"
            />`;
      h = f;
    }
  }
  return b`<div
      class="jcl-component jcl-applet"
      dir=${s} lang=${i} style=${d}
      aria-live=${u == null ? "polite" : "assertive"}
    >
     <${gt.Provider} value=${r}>
      ${h}
     </>
    </div>`;
}
const Dg = /* @__PURE__ */ Z("jcl-component.jcl-applet", `
    .jcl-component.jcl-applet {
      display:contents;
    }
  `);
function qs(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.has(o) && ce(
      `InvalidArguments: the given ${t} contain entries with identical keys`
    ), n.add(o);
  }), n;
}
function ri(e, t) {
  const n = /* @__PURE__ */ new Set();
  e.forEach((o) => {
    n.has(o) && ce(
      `InvalidArguments: the given ${t} contain double entries`
    ), n.add(o);
  });
}
function Un(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.filter((o) => t.has(o) && !n.has(o) ? (n.add(o), !0) : !1);
}
function sn(e) {
  return e != null && (e.shiftKey || e.metaKey || e.ctrlKey);
}
function Pe(e, t, n) {
  return Math.max(t, Math.min(e, Math.max(t, n)));
}
function nt(e) {
  return e === "normal" ? "" : "size-" + e;
}
function Xs(e, t, n, o, a) {
  function r(l, c) {
    switch (!0) {
      case l > 0:
        return -a * Math.min(1, l / o);
      case c > 0:
        return a * Math.min(1, c / o);
      default:
        return 0;
    }
  }
  const i = o === 0 ? 0 : r(
    o - (t - e.left),
    o - (e.right - t)
  ), s = o === 0 ? 0 : r(
    o - (n - e.top),
    o - (e.bottom - n)
  );
  return { vx: i, vy: s };
}
function Ys(e, t) {
  const n = Math.min(0.1, e.PanningTimestamp == null ? 0 : (t - e.PanningTimestamp) / 1e3);
  return e.PanningTimestamp = t, n;
}
function Lg(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = ((...a) => e.current[o]?.(...a));
  }), n;
}
function Le(e, t = !1) {
  e.stopPropagation(), t == !0 && e.preventDefault();
}
const nn = Le;
function Tt(e) {
  return typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia(e).matches : !1;
}
function Sg(e) {
  return ka("value", e), e?.replace(/\n[\s\S]*$/, "").replace(/[\x00-\x1F\x7F]/g, "");
}
function Mg(e) {
  return ka("value", e), e?.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, "").replace(/\r\n/g, `
`);
}
const xb = {
  render: ia,
  html: b,
  Component: Rl,
  createRef: Tl,
  createContext: Jt,
  toChildArray: Yt,
  cloneElement: Ml,
  isValidElement: ui,
  createPortal: Dn,
  useId: Dt,
  useRef: q,
  useState: Be,
  useEffect: Ce,
  useLayoutEffect: $a,
  useCallback: se,
  useMemo: Zt,
  useContext: lt,
  useErrorBoundary: ja,
  loadedLibrary: at,
  useLibraries: Tn,
  useOnlineStatus: Uc,
  useWindowSize: qc,
  useRerenderer: tt,
  useCustomization: Go,
  useI18n: Xc,
  useConfiguration: Yc,
  useDragging: hn,
  useClickDragging: Rn,
  useDataDragSupport: Zc,
  useDataDropSupport: Qc,
  usePointerDragSupport: ed,
  usePointerDropSupport: td,
  useFileDropSupport: ad,
  useOverlayContext: An,
  useDialogContext: Fn,
  useToastContext: Ga,
  JCL_PointerDnDContext: za,
  JCL_OverlayContext: Ko,
  JCL_DialogContext: Uo,
  JCL_ToastContext: _a,
  installStylesheetFor: Oa,
  uninstallStylesheetFor: id,
  safelyRendered: K,
  consumeEvent: Le,
  consumingEvent: nn,
  MediaQueryMatches: Tt,
  PseudoRef: cd,
  JCL_ErrorIndicator: Ut,
  normalizedName: bc,
  parseablePropSet: U,
  TextlineFromString: Sg,
  TextFromString: Mg,
  Customizable: dd,
  OverlayBase: ud,
  DialogBase: fd,
  ToastBase: wd,
  fullsized: $d,
  centered: Ka,
  horizontal: Ld,
  vertical: Md,
  tabular: Rd,
  selective: Fd,
  stacked: Od,
  Dummy: Ed,
  Spacer: Bd,
  expandingSpacer: Wd,
  horizontalSeparator: Hd,
  verticalSeparator: _d,
  Title: Gd,
  Subtitle: Ud,
  Label: Xd,
  Description: Ua,
  Fineprint: Pd,
  TextlineView: Jd,
  TextView: tu,
  HTMLView: ou,
  MarkdownView: Ni,
  get MarkdownRenderer() {
    return cn;
  },
  // lazily initialised
  loadMarkdownLibraries: uo,
  loadedMarkdownRenderer: iu,
  ImageView: lu,
  SVGView: du,
  WebView: fu,
  Icon: mu,
  FAIcon: yu,
  native: {
    Button: wu,
    Checkbox: Cu,
    Radiobutton: ju,
    Gauge: Iu,
    Progressbar: Lu,
    Slider: Mu,
    TextlineInput: Ru,
    PasswordInput: Au,
    NumberInput: Fu,
    EMailAddressInput: zu,
    PhoneNumberInput: Ou,
    URLInput: Vu,
    TimeInput: Bu,
    DateTimeInput: _u,
    DateInput: Ku,
    WeekInput: qu,
    MonthInput: Yu,
    SearchInput: Ju,
    FileInput: Zu,
    ColorInput: Pu,
    DropDown: tp,
    TextInput: Pa
  },
  styled: {
    Button: Ss,
    Icon: Ph,
    FAIcon: tf,
    Checkbox: xa,
    Radiobutton: Ms,
    Gauge: Dh,
    Progressbar: Sh,
    Slider: Th,
    TextlineInput: Ah,
    PasswordInput: Fh,
    NumberInput: zh,
    EMailAddressInput: Oh,
    PhoneNumberInput: Vh,
    URLInput: Eh,
    TimeInput: Nh,
    DateTimeInput: Bh,
    DateInput: Wh,
    WeekInput: Hh,
    MonthInput: _h,
    SearchInput: Gh,
    FileInput: Yh,
    ColorInput: Kh,
    DropDown: qh,
    TextInput: Zh,
    Badge: of,
    Spinner: rf,
    Kbd: lf,
    Avatar: df,
    Skeleton: pf,
    Breadcrumb: rg,
    Pagination: Ns,
    Tooltip: Rs,
    Popover: As,
    DropDownMenu: mf,
    DropDownMenuItem: bf,
    DropDownMenuSeparator: yf,
    DropDownMenuGroup: xf,
    DropDownMenuSubMenu: wf,
    CommandPalette: Cf,
    CommandItem: kf,
    CommandGroup: jf,
    Toast: $f,
    Card: Df,
    CardHeader: Sf,
    CardTitle: Af,
    CardDescription: Ff,
    CardAction: Mf,
    CardContent: Tf,
    CardFooter: Rf,
    Sidebar: zf,
    SidebarHeader: Vf,
    SidebarContent: Ef,
    SidebarFooter: Nf,
    SidebarItem: Bf,
    SidebarSeparator: Wf,
    SidebarGroup: Hf,
    Table: Bs,
    TableHeader: Ws,
    TableBody: Hs,
    TableFooter: pg,
    TableRow: Lo,
    TableHead: wa,
    TableCell: So,
    DataTable: hg,
    Field: _f,
    InputGroup: Kf,
    InputGroupAddon: Uf,
    Switch: qf,
    MultiSwitch: Vs,
    ThemeSwitch: Yf,
    RadioGroup: Jf,
    Combobox: Qf,
    MonthView: dr,
    QuarterView: vg,
    YearView: kg,
    DatePicker: tg,
    TabStrip: og,
    Accordion: lg,
    AccordionFold: cg
  },
  legacy: {
    PseudoFileInput: ap,
    PseudoDropDown: ip,
    FileDropArea: lp,
    TabStrip: dp,
    AccordionFold: pp,
    FlatListView: Xi,
    NestedListView: bp,
    RichTextEditor: Pi,
    CodeEditor: Sp,
    DrawingEditor: Fp,
    BitmapEditor: Vp,
    RealDrawEditor: Bp,
    Spreadsheet: fh,
    KanbanBoard: xh,
    registerSpreadsheetFormula: ph,
    registerSpreadsheetFormulas: hh,
    NoteBoard: _p,
    ChatView: sh,
    ChatViewAssistantExtra: $s,
    ChatViewUserExtra: Is,
    ChatViewControls: Ds,
    stickyTextNote: ks,
    stickyHTMLNote: or,
    stickyMarkdownNote: js,
    DataFlowProcessView: Jp,
    WorldPositionOfPort: jn,
    QRCodeView: kh
  },
  AppletView: Us,
  AppletFailingWith: Ks
};
function Js(e, t = !0) {
  return Ye("text to be fenced", e), di("fence insertion flag", t), e = e.replace(/\\/g, "\\\\").replace(/»/g, "\\xBB").replace(/«/g, "\\xAB"), t ? `»»»
${e}
«««` : e;
}
function Tg(e) {
  return Ye("text to be unfenced", e), e = e.replace(/^[\s\S]*?»»»/, "").replace(/«««[\s\S]*$/, ""), e.replace(/\\\\|\\xBB|\\xAB/g, (t) => t === "\\\\" ? "\\" : t === "\\xBB" ? "»" : "«").replace(/^\s*\n/, "").replace(/\n\s*$/, `
`);
}
function Rg(e, t) {
  return Ye("text to be filled", e), xt("variable set", t), e.replace(/\{\{([^}]+)\}\}/g, (n, o) => o === "" ? "{{" : o.startsWith("~") ? (o = o.slice(1), t[o] == null ? n : Js(t[o])) : t[o] == null ? n : t[o]);
}
const wb = {
  fencedText: Js,
  unfencedText: Tg,
  TextFilledFrom: Rg
};
async function fo(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = () => n(o.error ?? new Error("Loading failed")), o.onabort = () => n(new Error("Loading was aborted")), o.readAsText(e);
  });
}
async function go(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = () => n(o.error ?? new Error("Loading failed")), o.onabort = () => n(new Error("Loading was aborted")), o.readAsArrayBuffer(e);
  });
}
async function Ag(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = () => n(o.error ?? new Error("Loading failed")), o.onabort = () => n(new Error("Loading was aborted")), o.readAsDataURL(e);
  });
}
async function Fg(e) {
  const t = await fo(e);
  return ur(t);
}
async function ur(e) {
  return Ye("HTML document", e), Zs(e);
}
async function zg(e) {
  const t = await fo(e);
  return pr(t);
}
async function pr(e) {
  return Ye("HTML document", e), wr(e);
}
async function Og(e) {
  const t = await fo(e);
  return hr(t);
}
async function hr(e) {
  Ye("markdown document", e);
  try {
    await uo();
    let t = 0;
    const n = new zo();
    return n.use({
      gfm: !0,
      breaks: !0,
      renderer: {
        heading(o) {
          return `
${wn(this.parser.parseInline(o.tokens))}

`;
        },
        paragraph(o) {
          return `${wn(this.parser.parseInline(o.tokens))}

`;
        },
        list(o) {
          t++;
          let a = "";
          for (const r of o.items)
            a += this.listitem(r);
          return t--, a + `
`;
        },
        listitem(o) {
          const a = "  ".repeat(t - 1), i = o.tokens.some((s) => s.type === "list") ? wn(this.parser.parse(o.tokens)).trim() : wn(this.parser.parseInline(o.tokens));
          return `${a}- ${i}
`;
        },
        link(o) {
          return wn(this.parser.parseInline(o.tokens));
        },
        image(o) {
          return `[${o.text}]`;
        },
        code(o) {
          return `${o.text}

`;
        },
        blockquote(o) {
          return `${wn(this.parser.parse(o.tokens))}

`;
        },
        br() {
          return `
`;
        },
        html() {
          return "";
        },
        hr() {
          return `----

`;
        }
      }
    }), n.use(Oo({ nonStandard: !1 })), (await n.parse(e)).replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, `

`);
  } catch (t) {
    ce("ConversionError: could not convert the given Markdown into plain text, reason: " + t);
  }
}
async function Vg(e) {
  const t = await fo(e);
  return fr(t);
}
async function fr(e) {
  Ye("markdown document", e);
  try {
    await uo();
    const t = new zo();
    return t.use(da({
      langPrefix: "hljs language-",
      highlight(n, o) {
        const a = Cn.getLanguage(o) ? o : "plaintext";
        return Cn.highlight(n, { language: a }).value;
      }
    })), t.setOptions({
      gfm: !0,
      breaks: !0
    }), t.use(Oo({ nonStandard: !1 })), await t.parse(e);
  } catch (t) {
    ce("ConversionError: could not convert the given Markdown into HTML, reason: " + t);
  }
}
function wn(e) {
  return e.replace(/<[^>]+>/g, "");
}
let aa;
async function gr() {
  return aa == null && (aa = (await import("mammoth")).default), aa;
}
async function Eg(e) {
  const t = await go(e);
  return mr(t);
}
async function mr(e) {
  No("DOCX document", e, ArrayBuffer, "binary buffer");
  try {
    return (await (await gr()).extractRawText({ arrayBuffer: e })).value;
  } catch (t) {
    ce("ConversionError: could not convert the given DOCX file into plain text, reason: " + t);
  }
}
async function Ng(e) {
  const t = await go(e);
  return br(t);
}
async function br(e) {
  No("DOCX document", e, ArrayBuffer, "binary buffer");
  try {
    return (await (await gr()).convertToHtml({ arrayBuffer: e })).value;
  } catch (t) {
    ce("ConversionError: could not convert the given DOCX file into HTML, reason: " + t);
  }
}
async function Bg(e) {
  const t = await go(e);
  return yr(t);
}
async function yr(e) {
  No("DOCX document", e, ArrayBuffer, "binary buffer");
  try {
    const n = (await (await gr()).convertToHtml({ arrayBuffer: e })).value;
    return wr(n);
  } catch (t) {
    ce("ConversionError: could not convert the given DOCX file into Markdown, reason: " + t);
  }
}
let ra;
async function Wg() {
  if (ra == null) {
    const { getDocument: e, GlobalWorkerOptions: t } = await import("pdfjs-dist");
    t.workerSrc = new URL(
      /* @vite-ignore */
      "./pdf.worker.min.mjs",
      import.meta.url
    ).href, ra = e;
  }
  return ra;
}
async function Hg(e) {
  const t = await go(e);
  return xr(t);
}
async function xr(e) {
  No("PDF document", e, ArrayBuffer, "binary buffer");
  try {
    const n = await (await Wg())({
      data: e,
      wasmUrl: new URL(
        /* @vite-ignore */
        "./vendors/",
        import.meta.url
      ).href
    }).promise;
    let o = "";
    for (let a = 1; a <= n.numPages; a++) {
      const i = await (await n.getPage(a)).getTextContent();
      o += i.items.map((s) => s.str + (s.hasEOL ? `
` : " ")).join("").replace(/ +/g, " ") + `
`;
    }
    return o;
  } catch (t) {
    ce("ConversionError: could not convert the given PDF file into plain text, reason: " + t);
  }
}
function Zs(e) {
  Ye("HTML document", e), /^\s*<!DOCTYPE/i.test(e) && (e = e.replace(/^\s*<!DOCTYPE[^>]*>/i, "").trim());
  const t = {
    head: !0,
    base: !0,
    link: !0,
    meta: !0,
    noscript: !0,
    script: !0,
    style: !0,
    title: !0
  };
  let n = "", o = [], a = [], r = !1, i = !1, s = !1, l = !0;
  const c = {
    processStartTag: function(f, g, x, m) {
      if (t[f]) {
        c.ignoredTag = f;
        return;
      }
      if (c.ignoredTag == null)
        switch (f) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            l || u(f === "h1" ? 3 : 2), l = !1;
            break;
          case "section":
            u();
            break;
          case "ul":
            u(), o.push("-");
            break;
          case "ol":
            u(), o.push("1"), a.push(1);
            break;
          case "li":
            switch (u(), n += p(), o[o.length - 1]) {
              case "-":
                n += "- ";
                break;
              case "1":
                n += a[a.length - 1]++ + ". ";
                break;
            }
            break;
          case "table":
            u();
            break;
          case "tr":
            u(), n += "|", s = !0;
            break;
          case "td":
          case "th":
            s || (n += "|", s = !0), n += " ";
            break;
          case "blockquote":
            u();
            break;
          case "pre":
            r = !0, u();
            break;
          case "code":
            i = !0;
            break;
          case "br":
            u();
            break;
          case "hr":
            u(2), n += "----", u(2);
            break;
          case "a":
            c.href = (g.find(
              (L) => L.Name === "href"
            ) || {}).Value;
            break;
          case "img":
            let C = (g.find((L) => L.Name === "alt") || {}).Value || "", k = (g.find((L) => L.Name === "src") || {}).Value || "";
            n += ` (${C}) [${k}] `;
            break;
        }
    },
    processEndTag: function(f) {
      if (c.ignoredTag != null) {
        c.ignoredTag === f && delete c.ignoredTag;
        return;
      }
      switch (f) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          u(2);
          break;
        case "ul":
          o.pop(), u();
          break;
        case "ol":
          o.pop(), a.pop(), u();
          break;
        case "tr":
          n += "|", s = !1;
          break;
        case "td":
        case "th":
          n += "|";
          break;
        case "table":
          u();
          break;
        case "pre":
          u(), r = !1;
          break;
        case "code":
          i = !1;
          break;
        case "a":
          c.href != null && (n += ` [${c.href}]`), delete c.href;
      }
    },
    processText: function(f, g) {
      c.ignoredTag == null && (f.trim() === "" && !r && !i || (d(h(f)), l = !1));
    },
    processComment: function(f) {
    }
  };
  return vr(e, c), n.replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, `

`);
  function d(f) {
    r || i ? n += f : n += f.replace(/\s+/g, " ");
  }
  function u(f = 1) {
    n = n.replace(r ? /\n*$/ : /\s*$/, ""), n += `
`.repeat(f);
  }
  function p() {
    return "  ".repeat(o.length);
  }
  function h(f) {
    if (typeof document < "u") {
      const g = document.createElement("textarea");
      return g.innerHTML = f, g.value;
    } else
      return f.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (g, x) => String.fromCodePoint(Number(x))).replace(/&#x([0-9a-fA-F]+);/g, (g, x) => String.fromCodePoint(parseInt(x, 16)));
  }
}
function wr(e) {
  Ye("HTML document", e), /^\s*<!DOCTYPE/i.test(e) && (e = e.replace(/^\s*<!DOCTYPE[^>]*>/i, "").trim());
  const t = {
    head: !0,
    base: !0,
    link: !0,
    meta: !0,
    noscript: !0,
    script: !0,
    style: !0,
    title: !0,
    svg: !0,
    semantics: !0
  };
  let n = "", o = "", a = [], r = [], i = !1, s = !1, l = !1, c = !1, d = !1, u = [], p = [], h = "";
  const f = {
    processStartTag: function(k, L, $, y) {
      if (f.ignoredTag == null) {
        if (t[k]) {
          f.ignoredTag = k;
          return;
        }
        switch (o = "", k) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            g(2), o += "#".repeat(Number(k[1])) + " ";
            break;
          case "section":
            g(2);
            break;
          case "ul":
            g(), a.push("-");
            break;
          case "ol":
            g(), a.push("1"), r.push(1);
            break;
          case "li":
            switch (g(), o += x(), a[a.length - 1]) {
              case "-":
                o += "- ";
                break;
              case "1":
                o += r[r.length - 1]++ + ". ";
                break;
            }
            break;
          case "table":
            l = !0, u = [];
            break;
          case "tr":
            c = l, p = [];
            break;
          case "th":
            d = !0, h = "";
            break;
          case "td":
            l && c && u.length === 0 && u.push([]), d = !0, h = "";
            break;
          case "blockquote":
            g(), o += "> ";
            break;
          case "pre":
            g(2), o += "```", i = !0;
            break;
          case "code":
            i || (o += "`"), s = !0;
            break;
          case "br":
            o += "  ", g();
            break;
          case "hr":
            g(2), o += "---", g(2);
            break;
          case "a":
            f.href = (L.find(
              (w) => w.Name === "href"
            ) || {}).Value, o += "[";
            break;
          case "img": {
            let w = (L.find((T) => T.Name === "alt") || {}).Value || "", O = (L.find((T) => T.Name === "src") || {}).Value || "";
            o += `![${w}](${O})`;
            break;
          }
          case "strong":
          case "b":
            o += "**";
            break;
          case "em":
          case "i":
            o += "_";
            break;
        }
        d ? h += o : n += o;
      }
    },
    processEndTag: function(k) {
      if (f.ignoredTag != null) {
        f.ignoredTag === k && delete f.ignoredTag;
        return;
      }
      switch (o = "", k) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          o += " " + "#".repeat(Number(k[1])), g(2);
          break;
        case "ul":
          a.pop(), g();
          break;
        case "ol":
          a.pop(), r.pop(), g();
          break;
        case "li":
          break;
        // nothing extra
        case "table":
          u.length > 0 && (g(), o += C(u), u = [], g()), l = c = d = !1;
          break;
        case "tr":
          l && u.push(p), c = d = !1, p = [];
          break;
        case "th":
        case "td":
          c && p.push(h), d = !1, h = "";
          break;
        case "p":
        case "blockquote":
          g();
          break;
        case "pre":
          i = !1, o += (n.endsWith(`
`) ? "" : `
`) + "```\n", g();
          break;
        case "code":
          i || (o += "`"), s = !1;
          break;
        case "a":
          f.href != null && (o += `](${f.href})`, delete f.href);
          break;
        case "strong":
        case "b":
          o += "**";
          break;
        case "em":
        case "i":
          o += "_";
          break;
      }
      d ? h += o : n += o;
    },
    processText: function(k, L) {
      if (f.ignoredTag == null && !(k.trim() === "" && !i && !s)) {
        switch (!0) {
          case i:
            o = k;
            break;
          case s:
            o = k.replace(/`/g, "\\`");
            break;
          default:
            o = m(k).replace(/\s+/g, " ");
        }
        d ? h += o : n += o;
      }
    },
    processComment: function(k) {
    }
  };
  return vr(e, f), n.replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, `

`);
  function g(k = 1) {
    o = o.trimEnd() + `
`.repeat(k);
  }
  function x() {
    return "  ".repeat(a.length - 1);
  }
  function m(k) {
    if (typeof document < "u") {
      const L = document.createElement("textarea");
      return L.innerHTML = k, L.value;
    } else
      return k.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (L, $) => String.fromCodePoint(Number($))).replace(/&#x([0-9a-fA-F]+);/g, (L, $) => String.fromCodePoint(parseInt($, 16)));
  }
  function C(k) {
    if (k.length === 0)
      return "";
    let L, $;
    if (k[0].length > 0)
      L = k[0], $ = 1;
    else {
      const O = Math.max(...k.map((T) => T.length));
      L = new Array(O).fill(""), $ = 1;
    }
    const y = L.map(() => "---");
    let w = [
      "| " + L.join(" | ") + " |",
      "| " + y.join(" | ") + " |"
    ];
    for (let O = $; O < k.length; O++)
      w.push("| " + k[O].join(" | ") + " |");
    return w.join(`
`) + `
`;
  }
}
function vr(e, t) {
  const n = /^<([-a-z0-9]+)((?:[\s\xA0]+[-a-z0-9_$:]+(?:[\s\xA0]*=[\s\xA0]*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s\xA0]+))?)*)[\s\xA0]*(\/?)>/i, o = /^<\/([-a-z0-9_]+)[^>]*>/i, a = /([-a-z0-9_$:]+)(?:[\s\xA0]*=[\s\xA0]*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s\xA0]+)))?/gi;
  function r(T) {
    let j = T.split(","), I = /* @__PURE__ */ Object.create(null);
    for (let M = 0, D = j.length; M < D; M++)
      I[j[M]] = !0;
    return I;
  }
  const i = r(
    "area,base,basefont,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
  ), s = r(
    "address,article,aside,audio,blockquote,canvas,center,dd,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,isindex,li,main,menu,nav,noframes,noscript,ol,output,p,pre,section,semantics,table,tbody,td,tfoot,th,thead,tr,ul,video,svg,g,defs,symbol,clippath,mask,pattern,lineargradient,radialgradient,filter,switch,text,tspan,textpath,foreignobject"
  ), l = r(
    "a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
  ), c = r(
    "area,base,basefont,bgsound,br,col,colgroup,dd,dt,embed,frame,hr,img,input,isindex,keygen,li,link,menuitem,meta,options,p,param,source,td,tfoot,th,thead,tr,track,wbr,rect,circle,ellipse,line,polyline,polygon,path,stop,use,marker,animate,animatemotion,animatetransform,set,desc,title,feblend,fecolormatrix,fecomponenttransfer,fecomposite,feconvolvematrix,fediffuselighting,fedisplacementmap,fedropshadow,feflood,fegaussianblur,feimage,femerge,femorphology,feoffset,fespecularlighting,fetile,feturbulence,fedistantlight,fepointlight,fespotlight"
  ), d = r(
    "script,style"
  ), u = r(
    "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
  );
  let p = function() {
  }, h = t.processStartTag || p, f = t.processEndTag || p, g = t.processText || p, x = t.processComment || p, m = [];
  m.last = function() {
    return this[this.length - 1];
  };
  let C = "", k = !1;
  function L() {
    C !== "" && (g(C, k), C = "");
  }
  function $(T, j) {
    C !== "" && j !== k && L(), C += T, k = j;
  }
  function y(T, j, I, M) {
    if (j = j.toLowerCase(), s[j])
      for (; m.last() != null && l[m.last()]; )
        w("", m.last());
    c[j] && m.last() === j && w("", j);
    let D = i[j] || !!M;
    if (D || m.push(j), h !== p) {
      let V = [];
      I.replace(a, function(B, Y, ...Q) {
        let pe = Q[0] ? Q[0] : Q[1] ? Q[1] : Q[2] ? Q[2] : u[Y] ? Y : "";
        return V.push({
          Name: Y,
          Value: pe,
          escapedValue: Qs(pe)
        }), "";
      }), L(), h(
        j,
        V,
        D,
        m.length === (D ? 0 : 1)
      );
    }
    return "";
  }
  function w(T, j) {
    let I;
    if (j == null)
      I = 0;
    else
      for (j = j.toLowerCase(), I = m.length - 1; I >= 0 && m[I] !== j; I--)
        ;
    if (I >= 0) {
      L();
      for (let M = m.length - 1; M >= I; M--)
        f(m[M], M === 0);
      m.length = I;
    }
    return "";
  }
  let O = e;
  for (; e !== ""; ) {
    let T = !0;
    if (m.last() == null || !d[m.last()]) {
      if (e.startsWith("<!--")) {
        let j = e.indexOf("-->", 4);
        j > 0 && (L(), x(e.slice(4, j)), e = e.slice(j + 3), T = !1);
      } else if (e.startsWith("<?")) {
        let j = e.indexOf("?>");
        j >= 0 && (e = e.slice(j + 2), T = !1);
      } else if (e.startsWith("<!")) {
        let j = e.indexOf(">");
        j >= 0 && (e = e.slice(j + 1), T = !1);
      } else if (e.startsWith("</")) {
        let j = e.match(o);
        j != null && (e = e.slice(j[0].length), j[0].replace(o, w), T = !1);
      } else if (e.startsWith("<")) {
        let j = e.match(n);
        j != null && (e = e.slice(j[0].length), j[0].replace(n, y), T = !1);
      }
      if (T) {
        let j = e.indexOf("<"), I = j < 0 ? e : e.slice(0, j);
        e = j < 0 ? "" : e.slice(j), $(I, m.length === 0);
      }
    } else
      e = e.replace(
        new RegExp(`^((?:.|
)*?)<\\/` + m.last() + "[^>]*>", "i"),
        function(j, I) {
          return I = I.replace(/<!--(.*?)-->/g, "$1").replace(/<!\[CDATA\[(.*?)]]>/g, "$1"), $(I, m.length === 0), "";
        }
      ), w("", m.last());
    if (e === O)
      switch (!0) {
        case e.startsWith("<"):
          e = e.slice(1), $("<", m.length === 0);
          break;
        default:
          throw new Error('HTMLParseError: could not parse "' + e + '"');
      }
    O = e;
  }
  L(), w();
}
function vb(e, t) {
  for (let n = 0, o = t.length; n < o; n++) {
    let a = t[n];
    if (a.Name === e)
      return a.Value;
  }
}
function Cb(e, t, n) {
  let o = "<" + e;
  for (let a = 0, r = t.length; a < r; a++) {
    let i = t[a];
    o += " " + i.Name + '="' + i.escapedValue + '"';
  }
  return o + (n ? "/>" : ">");
}
function Qs(e) {
  return e.replace(
    /[&<>"'\x00-\x1F\x7F-\x9F\\]/g,
    function(t) {
      switch (t) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        case `
`:
          return `
`;
        // allows line feeds to be preserved
        case "\\":
          return "&#92;";
        default:
          let n = t.charCodeAt(0).toString(16);
          return "&#x0000".substring(0, 7 - n.length) + n + ";";
      }
    }
  );
}
function Ps(e) {
  return e.replace(
    /&(amp|lt|gt|quot|apos|#92|#x[0-9a-fA-F]{1,6}|#[0-9]{1,7});/g,
    function(t) {
      switch (t) {
        case "&amp;":
          return "&";
        case "&lt;":
          return "<";
        case "&gt;":
          return ">";
        case "&quot;":
          return '"';
        case "&apos;":
          return "'";
        case "&#92;":
          return "\\";
        default:
          const o = t.charAt(2) === "x" || t.charAt(2) === "X" ? parseInt(t.slice(3, -1), 16) : parseInt(t.slice(2, -1), 10);
          return String.fromCodePoint(o);
      }
    }
  );
}
const kb = {
  readFileAsText: fo,
  readFileAsBinary: go,
  readFileAsDataURL: Ag,
  HTMLasText: ur,
  HTMLasMarkdown: pr,
  HTMLFileReadAsText: Fg,
  HTMLFileReadAsMarkdown: zg,
  MarkdownAsText: hr,
  MarkdownAsHTML: fr,
  MarkdownFileReadAsText: Og,
  MarkdownFileReadAsHTML: Vg,
  DOCXasText: mr,
  DOCXasHTML: br,
  DOCXasMarkdown: yr,
  DOCXFileReadAsText: Eg,
  DOCXFileReadAsHTML: Ng,
  DOCXFileReadAsMarkdown: Bg,
  PDFasText: xr,
  PDFFileReadAsText: Hg,
  HTMLtoText: Zs,
  HTMLtoMarkdown: wr,
  parseHTML: vr,
  escapedHTMLAttribute: Qs,
  unescapedHTMLAttribute: Ps
};
function N(e, t, ...n) {
  if (Xt("callback description", e), Re("callback", t), t != null)
    try {
      return t(...n);
    } catch (o) {
      ce(`CallbackFailure: ${e} failed with ${"" + o}`);
    }
}
const He = N;
function _g(e) {
  return Xt("Textline", e), e.length === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1);
}
export {
  Ks as AppletFailingWith,
  Us as AppletView,
  Al as AsyncFunction,
  vb as AttributeFrom,
  dd as Customizable,
  Ng as DOCXFileReadAsHTML,
  Bg as DOCXFileReadAsMarkdown,
  Eg as DOCXFileReadAsText,
  br as DOCXasHTML,
  yr as DOCXasMarkdown,
  mr as DOCXasText,
  _c as DefaultSwatchSet,
  Ua as Description,
  mi as DescriptionOfHTTPStatus,
  Db as DeviceSupportsPassiveEvents,
  Lb as DeviceSupportsPointerEvents,
  Sb as DeviceSupportsTouchEvents,
  fd as DialogBase,
  Ci as DirectionOfLocale,
  Ed as Dummy,
  $m as EnvironmentIsBrowser,
  Ql as EnvironmentIsTauri,
  yu as FAIcon,
  Pd as Fineprint,
  Dc as FlagEmojiForISOCode,
  pb as FlagEmojiForLocale,
  zg as HTMLFileReadAsMarkdown,
  Fg as HTMLFileReadAsText,
  ou as HTMLView,
  pr as HTMLasMarkdown,
  ur as HTMLasText,
  wr as HTMLtoMarkdown,
  Zs as HTMLtoText,
  bi as HTTPMessageForStatus,
  mu as Icon,
  lu as ImageView,
  Pl as InternetIsAvailable,
  $g as JCL_AppletElement,
  Op as JCL_BitmapEditor,
  zp as JCL_BitmapEditorTools,
  Fa as JCL_DataDropEffects,
  Ya as JCL_DatePattern,
  Gu as JCL_DateRegExp,
  Wu as JCL_DateTimePattern,
  Hu as JCL_DateTimeRegExp,
  pu as JCL_DefaultSandboxPermissions,
  Uo as JCL_DialogContext,
  yd as JCL_DialogView,
  kc as JCL_Directions,
  Ap as JCL_DrawingEditor,
  Ut as JCL_ErrorIndicator,
  qa as JCL_FAIconNames,
  Nc as JCL_HoverCapabilities,
  Wi as JCL_ImageAlignments,
  Bi as JCL_ImageScalings,
  bd as JCL_ModalLayer,
  Za as JCL_MonthPattern,
  Xu as JCL_MonthRegExp,
  Ko as JCL_OverlayContext,
  Hr as JCL_OverlayView,
  Ec as JCL_PointerAccuracies,
  za as JCL_PointerDnDContext,
  Pc as JCL_PointerDropEffects,
  Wc as JCL_PreferredContrasts,
  Bc as JCL_PreferredMotions,
  Ch as JCL_QRCodeECCLevels,
  mg as JCL_QuarterPattern,
  bg as JCL_QuarterRegExp,
  ft as JCL_RealDrawEditor,
  Ep as JCL_RealDrawEditorTools,
  hu as JCL_ReferrerPolicies,
  nb as JCL_SwatchKeys,
  ji as JCL_Themes,
  Eu as JCL_TimePattern,
  Nu as JCL_TimeRegExp,
  _a as JCL_ToastContext,
  hd as JCL_Underlay,
  Ja as JCL_WeekPattern,
  Uu as JCL_WeekRegExp,
  ut as JCL_empty,
  dc as JCL_mixedValues,
  cc as JCL_noSelection,
  Ul as JCL_supportedHTMLFormats,
  Xl as JCL_supportedImageFormats,
  ql as JCL_supportedMarkdownFormats,
  Kl as JCL_supportedTextFormats,
  Xd as Label,
  fr as MarkdownAsHTML,
  hr as MarkdownAsText,
  Vg as MarkdownFileReadAsHTML,
  Og as MarkdownFileReadAsText,
  cn as MarkdownRenderer,
  Ni as MarkdownView,
  Tt as MediaQueryMatches,
  bb as OperationWasConfirmed,
  ud as OverlayBase,
  Hg as PDFFileReadAsText,
  xr as PDFasText,
  Mb as PointerType,
  cd as PseudoRef,
  Sn as RegExpForPattern,
  du as SVGView,
  he as SearXNG,
  gi as ServerIsReachable,
  Bd as Spacer,
  Z as StylesheetInstallerFor,
  Ud as Subtitle,
  Rg as TextFilledFrom,
  Mg as TextFromString,
  tu as TextView,
  Sg as TextlineFromString,
  Jd as TextlineView,
  Gd as Title,
  wd as ToastBase,
  Jl as ValueIsAbortSignal,
  $t as ValueIsDate,
  Gi as ValueIsDateTime,
  Pn as ValueIsDimension,
  mc as ValueIsGeometry,
  gm as ValueIsHTMLFormat,
  Wl as ValueIsISOLanguageCode,
  Vl as ValueIsIdentifier,
  bm as ValueIsImageFormat,
  sm as ValueIsListOfEMailAddresses,
  vi as ValueIsLocale,
  Qn as ValueIsLocation,
  Zn as ValueIsMIMEType,
  mm as ValueIsMarkdownFormat,
  Qa as ValueIsMonth,
  Ia as ValueIsName,
  qn as ValueIsObject,
  pi as ValueIsPath,
  Bo as ValueIsPhoneNumber,
  De as ValueIsPlainObject,
  fc as ValueIsPosition,
  Qt as ValueIsPreactRef,
  fi as ValueIsPromise,
  yg as ValueIsQuarter,
  gc as ValueIsSize,
  Ke as ValueIsSpecial,
  sa as ValueIsSwatch,
  wc as ValueIsSwatchSet,
  fm as ValueIsTextFormat,
  oo as ValueIsTextWithTabs,
  _i as ValueIsTime,
  Km as ValueIsVNode,
  Ki as ValueIsWeek,
  fu as WebView,
  jn as WorldPositionOfPort,
  J as acceptableBoolean,
  qt as acceptableCardinal,
  bt as acceptableColor,
  Zm as acceptableEMailAddress,
  A as acceptableFunction,
  Ym as acceptableInteger,
  Ao as acceptableIntegerInRange,
  Pm as acceptableName,
  eb as acceptableNameOrIndex,
  _e as acceptableNumber,
  Et as acceptableNumberInRange,
  ve as acceptableOrdinal,
  tb as acceptablePath,
  Qm as acceptablePhoneNumber,
  pn as acceptableString,
  Jm as acceptableStringMatching,
  ae as acceptableText,
  S as acceptableTextline,
  mn as acceptableURL,
  E as acceptableValue,
  wb as ai,
  Zl as allowAbortSignal,
  fb as allowDictionary,
  yt as allowDimension,
  Wm as allowGeometry,
  Hl as allowISOLanguageCode,
  Yg as allowIdentifier,
  cb as allowLocale,
  Ro as allowLocation,
  um as allowMIMEType,
  Nl as allowName,
  em as allowPath,
  om as allowPhoneNumber,
  Am as allowPosition,
  Um as allowPreactRef,
  ym as allowPromise,
  Vm as allowSize,
  ob as allowSwatch,
  vc as allowSwatchSet,
  Cm as allowedAbortSignal,
  gb as allowedDictionary,
  Mm as allowedDimension,
  Hm as allowedGeometry,
  lm as allowedISOLanguageCode,
  Jg as allowedIdentifier,
  db as allowedLocale,
  Dm as allowedLocation,
  pm as allowedMIMEType,
  Qg as allowedName,
  tm as allowedPath,
  am as allowedPhoneNumber,
  Fm as allowedPosition,
  qm as allowedPreactRef,
  xm as allowedPromise,
  Em as allowedSize,
  ab as allowedSwatch,
  sb as allowedSwatchSet,
  _g as capitalized,
  Ka as centered,
  io as coercedNumberSatisfying,
  Le as consumeEvent,
  nn as consumingEvent,
  yb as defineJCLApplet,
  Qs as escapedHTMLAttribute,
  N as executeCallback,
  He as executedCallback,
  Wd as expandingSpacer,
  km as expectAbortSignal,
  Oc as expectDictionary,
  Tm as expectDimension,
  _m as expectGeometry,
  cm as expectISOLanguageCode,
  El as expectIdentifier,
  Mn as expectLocale,
  Lm as expectLocation,
  Gl as expectMIMEType,
  dn as expectName,
  hi as expectPath,
  rm as expectPhoneNumber,
  zm as expectPosition,
  Wo as expectPreactRef,
  wm as expectPromise,
  Nm as expectSize,
  rb as expectSwatch,
  Cc as expectSwatchSet,
  jm as expectedAbortSignal,
  mb as expectedDictionary,
  Rm as expectedDimension,
  Gm as expectedGeometry,
  dm as expectedISOLanguageCode,
  Zg as expectedIdentifier,
  ub as expectedLocale,
  Sm as expectedLocation,
  hm as expectedMIMEType,
  Pg as expectedName,
  nm as expectedPath,
  im as expectedPhoneNumber,
  Om as expectedPosition,
  Xm as expectedPreactRef,
  vm as expectedPromise,
  Bm as expectedSize,
  ib as expectedSwatch,
  lb as expectedSwatchSet,
  Js as fencedText,
  It as fetched,
  ic as fetchedAsHTML,
  sc as fetchedAsMarkdown,
  rc as fetchedAsText,
  nc as fetchedBinary,
  oc as fetchedBlob,
  ac as fetchedDataURL,
  tc as fetchedJSON,
  ec as fetchedText,
  $d as fullsized,
  Ld as horizontal,
  Hd as horizontalSeparator,
  Oa as installStylesheetFor,
  pp as legacyAccordionFold,
  Vp as legacyBitmapEditor,
  sh as legacyChatView,
  $s as legacyChatViewAssistantExtra,
  Ds as legacyChatViewControls,
  Is as legacyChatViewUserExtra,
  Sp as legacyCodeEditor,
  Jp as legacyDataFlowProcessView,
  Fp as legacyDrawingEditor,
  lp as legacyFileDropArea,
  Xi as legacyFlatListView,
  xh as legacyKanbanBoard,
  bp as legacyNestedListView,
  _p as legacyNoteBoard,
  ip as legacyPseudoDropDown,
  ap as legacyPseudoFileInput,
  kh as legacyQRCodeView,
  Bp as legacyRealDrawEditor,
  Pi as legacyRichTextEditor,
  fh as legacySpreadsheetEditor,
  dp as legacyTabStrip,
  uo as loadMarkdownLibraries,
  at as loadedLibrary,
  iu as loadedMarkdownRenderer,
  co as memoizedLoader,
  kb as misc,
  Se as missingProperty,
  wu as nativeButton,
  Cu as nativeCheckbox,
  Pu as nativeColorInput,
  Ku as nativeDateInput,
  _u as nativeDateTimeInput,
  tp as nativeDropDown,
  zu as nativeEMailAddressInput,
  Zu as nativeFileInput,
  Iu as nativeGauge,
  Yu as nativeMonthInput,
  hb as nativeNameForLocale,
  Fu as nativeNumberInput,
  Au as nativePasswordInput,
  Ou as nativePhoneNumberInput,
  Lu as nativeProgressbar,
  ju as nativeRadiobutton,
  Ju as nativeSearchInput,
  Mu as nativeSlider,
  Pa as nativeTextInput,
  Ru as nativeTextlineInput,
  Bu as nativeTimeInput,
  Vu as nativeURLInput,
  qu as nativeWeekInput,
  Im as net,
  bc as normalizedName,
  vr as parseHTML,
  U as parseablePropSet,
  Ct as parsedOption,
  Tb as primaryInput,
  go as readFileAsBinary,
  Ag as readFileAsDataURL,
  fo as readFileAsText,
  Dp as registerCodeEditorLanguage,
  ph as registerSpreadsheetFormula,
  hh as registerSpreadsheetFormulas,
  Ze as resolvedSpecialValue,
  K as safelyRendered,
  Fd as selective,
  Cb as serializedTag,
  Od as stacked,
  or as stickyHTMLNote,
  js as stickyMarkdownNote,
  ks as stickyTextNote,
  lg as styledAccordion,
  cg as styledAccordionFold,
  df as styledAvatar,
  of as styledBadge,
  rg as styledBreadcrumb,
  Ss as styledButton,
  Df as styledCard,
  Mf as styledCardAction,
  Tf as styledCardContent,
  Ff as styledCardDescription,
  Rf as styledCardFooter,
  Sf as styledCardHeader,
  Af as styledCardTitle,
  xa as styledCheckbox,
  Kh as styledColorInput,
  Qf as styledCombobox,
  jf as styledCommandGroup,
  kf as styledCommandItem,
  Cf as styledCommandPalette,
  hg as styledDataTable,
  Wh as styledDateInput,
  tg as styledDatePicker,
  Bh as styledDateTimeInput,
  qh as styledDropDown,
  mf as styledDropDownMenu,
  xf as styledDropDownMenuGroup,
  bf as styledDropDownMenuItem,
  yf as styledDropDownMenuSeparator,
  wf as styledDropDownMenuSubMenu,
  Oh as styledEMailAddressInput,
  tf as styledFAIcon,
  _f as styledField,
  Yh as styledFileInput,
  Dh as styledGauge,
  Ph as styledIcon,
  Kf as styledInputGroup,
  Uf as styledInputGroupAddon,
  lf as styledKbd,
  _h as styledMonthInput,
  dr as styledMonthView,
  Vs as styledMultiSwitch,
  zh as styledNumberInput,
  Ns as styledPagination,
  Fh as styledPasswordInput,
  Vh as styledPhoneNumberInput,
  As as styledPopover,
  Sh as styledProgressbar,
  vg as styledQuarterView,
  Jf as styledRadioGroup,
  Ms as styledRadiobutton,
  Gh as styledSearchInput,
  zf as styledSidebar,
  Ef as styledSidebarContent,
  Nf as styledSidebarFooter,
  Hf as styledSidebarGroup,
  Vf as styledSidebarHeader,
  Bf as styledSidebarItem,
  Wf as styledSidebarSeparator,
  pf as styledSkeleton,
  Th as styledSlider,
  rf as styledSpinner,
  qf as styledSwitch,
  og as styledTabStrip,
  Bs as styledTable,
  Hs as styledTableBody,
  So as styledTableCell,
  pg as styledTableFooter,
  wa as styledTableHead,
  Ws as styledTableHeader,
  Lo as styledTableRow,
  Zh as styledTextInput,
  Ah as styledTextlineInput,
  Yf as styledThemeSwitch,
  Nh as styledTimeInput,
  $f as styledToast,
  Rs as styledTooltip,
  Eh as styledURLInput,
  Hh as styledWeekInput,
  kg as styledYearView,
  Rd as tabular,
  ce as throwError,
  zl as throwReadOnlyError,
  xb as ui,
  Ps as unescapedHTMLAttribute,
  Tg as unfencedText,
  id as uninstallStylesheetFor,
  Rn as useClickDragging,
  Yc as useConfiguration,
  Go as useCustomization,
  Zc as useDataDragSupport,
  Qc as useDataDropSupport,
  tn as useDatalist,
  Fn as useDialogContext,
  hn as useDragging,
  ad as useFileDropSupport,
  jt as useHybridValue,
  Xc as useI18n,
  en as useInputCallbacks,
  Tn as useLibraries,
  Di as useMeasuredPaneSize,
  Uc as useOnlineStatus,
  An as useOverlayContext,
  ed as usePointerDragSupport,
  td as usePointerDropSupport,
  tt as useRerenderer,
  Pt as useShownValue,
  Ga as useToastContext,
  qc as useWindowSize,
  Md as vertical,
  _d as verticalSeparator
};
//# sourceMappingURL=javascript-code-library.slim.esm.js.map
