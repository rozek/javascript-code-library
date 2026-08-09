const ov = globalThis;
function Ao(e) {
  return Ca(function(t, ...n) {
    return t == null || // let these methods crash like their originals
    e in t && typeof t[e] == "function" ? t[e](...n) : Object.prototype[e].apply(t, n);
  }, "Object_" + e);
}
const lu = /* @__PURE__ */ Ao(
  "hasOwnProperty"
), cu = /* @__PURE__ */ Ao(
  "isPrototypeOf"
), rv = /* @__PURE__ */ Ao(
  "propertyIsEnumerable"
), du = /* @__PURE__ */ Ao(
  "toString"
);
function av(e) {
  return e == null || // let this method crash like its original
  "toLocaleString" in e && typeof e.toLocaleString == "function" ? e.toLocaleString() : du(e);
}
const iv = /* @__PURE__ */ Ao(
  "valueOf"
);
function sv(e, ...t) {
  for (let n = 0, o = t.length; n < o; n++) {
    let r = t[n];
    if (r != null)
      if (typeof r == "object") {
        const a = Object.getOwnPropertyDescriptors(r);
        for (const i of Reflect.ownKeys(a)) {
          const s = a[i];
          s.enumerable && Object.defineProperty(e, i, s);
        }
      } else
        it("InvalidArgument: argument #" + (n + 1) + " is not an object");
  }
  return e;
}
function it(e) {
  let t = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);
  if (t == null)
    throw new Error(e);
  {
    let n = new Error(t[2]);
    throw n.name = t[1], n;
  }
}
function Yt(e) {
  it(`MissingArgument: no ${Pe(e)} given`);
}
function lv(e) {
  return e != null;
}
function cv(e) {
  return e == null;
}
function Jt(e) {
  return typeof e == "boolean" || e instanceof Boolean;
}
function ut(e) {
  return typeof e == "number" || e instanceof Number;
}
function an(e) {
  return ut(e) && isFinite(e.valueOf());
}
function Us(e) {
  return ut(e) && isNaN(e.valueOf());
}
function To(e, t, n, o = !0, r = !0) {
  if (!ut(e))
    return !1;
  const a = e.valueOf();
  return isNaN(a) ? !1 : !// "ValueIsFiniteNumber" is more robust than "isFinite"
  (an(t) && (a < t || !o && a === t) || an(n) && (a > n || !r && a === n));
}
function Pn(e) {
  if (!ut(e))
    return !1;
  const t = e.valueOf();
  return isFinite(t) && Math.round(t) === t;
}
function Sr(e, t, n) {
  if (!Pn(e))
    return !1;
  const o = e.valueOf();
  return !// "ValueIsFiniteNumber" is more robust than "isFinite"
  (an(t) && o < t || an(n) && o > n);
}
function hn(e) {
  return Pn(e) && e.valueOf() >= 0;
}
function ya(e) {
  return Pn(e) && e.valueOf() >= 1;
}
function Ze(e) {
  return typeof e == "string" || e instanceof String;
}
const Ks = /^\s*$/;
function dv(e) {
  return st(e, Ks);
}
function qs(e) {
  return Ze(e) && !Ks.test(e.valueOf());
}
function st(e, t) {
  return (typeof e == "string" || e instanceof String) && t.test(e.valueOf());
}
const uu = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function mn(e) {
  return st(e, uu);
}
const pu = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Ee(e) {
  return st(e, pu);
}
function Vt(e) {
  return typeof e == "function";
}
function xa(e) {
  return typeof e == "function" && (e.name ?? "") === "";
}
function Xs(e) {
  return typeof e == "function" && !xa(e);
}
const fu = /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/;
function va(e) {
  return typeof e == "function" && fu.test(e.toString()) && !e.name.startsWith("bound ");
}
function Ys(e) {
  return typeof e == "function" && !va(e);
}
function wa(e) {
  return e != null && typeof e == "object";
}
function Ro(e) {
  return e != null && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function Js(e) {
  return e != null && typeof e == "object" && !(e instanceof Object);
}
const _r = Array.isArray;
function Zs(e, t, n) {
  return $e(
    e,
    (o) => o !== void 0,
    t,
    n
  );
}
function $e(e, t, n, o) {
  if (!_r(e))
    return !1;
  try {
    for (let r = 0, a = e.length; r < a; r++)
      if (!t(e[r]))
        return !1;
    return !(n != null && e.length < n || o != null && e.length > o);
  } catch {
    return !1;
  }
}
function hu(e, t) {
  return $e(e, (n) => he(n, t));
}
function uv(e, t) {
  return e instanceof t;
}
function pv(e, t) {
  return cu(t, e);
}
function Qs(e) {
  return e instanceof Date;
}
function Ps(e) {
  return e instanceof Error;
}
function el(e) {
  return e instanceof RegExp;
}
function he(e, t) {
  return t.indexOf(e) >= 0;
}
function An(e) {
  if (!Ze(e))
    return !1;
  let t = e.valueOf().toLowerCase();
  return $o.hasOwnProperty(t) || La.test(t) || Ma.test(t) || Aa.test(t) || Ta.test(t);
}
const gu = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
function Tn(e) {
  return st(e, gu);
}
const mu = (
  // URL characters after RFC 3986
  /^[A-Za-z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+$/
), bu = /%(?![0-9A-Fa-f]{2})/;
function at(e) {
  if (!Ze(e))
    return !1;
  const t = e.valueOf();
  if (!mu.test(t) || // also rejects '' + whitespace
  bu.test(t))
    return !1;
  try {
    return new URL(t, "file://"), !0;
  } catch {
    return !1;
  }
}
function yu(e) {
  return e.toLowerCase().replace(/:?$/, ":");
}
function xu(e, t) {
  if (!at(e))
    return !1;
  let n;
  try {
    n = new URL(e.valueOf());
  } catch {
    return !1;
  }
  return t == null ? !0 : t.some(
    // "parsedURL.protocol" already
    (o) => yu(o) === n.protocol
  );
}
const vu = /^\+[1-9][0-9]{6,14}$/;
function tl(e) {
  return st(e, vu);
}
function nl(e) {
  return typeof e == "bigint";
}
function ol(e) {
  return typeof e == "symbol";
}
function rl(e) {
  return e instanceof Map;
}
function al(e) {
  return e instanceof Set;
}
function il(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function sl(e) {
  return e instanceof ArrayBuffer;
}
const wu = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function ll(e) {
  return st(e, wu);
}
const ku = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
function cl(e) {
  if (!Ze(e))
    return !1;
  const t = ku.exec(e.valueOf());
  if (t == null)
    return !1;
  const [n, o, r] = [t[1], t[2], t[3]].map(Number), a = new Date(Date.UTC(n, o - 1, r));
  return (
    // detects overflows like 02-31
    a.getUTCFullYear() === n && a.getUTCMonth() === o - 1 && a.getUTCDate() === r
  );
}
const Cu = new RegExp(
  "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}([.][0-9]+)?)?(Z|[+-][0-9]{2}:[0-9]{2})?$"
);
function dl(e) {
  return st(e, Cu) && !isNaN(Date.parse(e.valueOf()));
}
const $u = new RegExp(
  "^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])[.]){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$"
);
function ul(e) {
  return st(e, $u);
}
const ju = /^[0-9a-fA-F:.]+$/;
function pl(e) {
  if (!Ze(e) || !ju.test(e.valueOf()))
    return !1;
  try {
    return new URL("http://[" + e.valueOf() + "]/"), !0;
  } catch {
    return !1;
  }
}
const Iu = new RegExp(
  "^(?=.{1,253}$)[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$",
  "i"
);
function fl(e) {
  return st(e, Iu);
}
function hl(e) {
  return Sr(e, 1, 65535);
}
function Co(e, t = /* @__PURE__ */ new WeakSet()) {
  switch (!0) {
    case e == null:
    // deliberately also allows undefined
    case Jt(e):
    case an(e):
    // NaN/Infinity are not serializable
    case Ze(e):
      return !0;
    case Zs(e):
      if (t.has(e))
        return !1;
      t.add(e);
      try {
        return $e(
          e,
          (n) => n === void 0 ? !1 : Co(n, t)
        );
      } finally {
        t.delete(e);
      }
    case Ro(e):
      if (t.has(e))
        return !1;
      t.add(e);
      try {
        for (let n in e)
          if (e.hasOwnProperty(n) && !Co(e[n], t))
            return !1;
        return !0;
      } finally {
        t.delete(e);
      }
  }
  return !1;
}
function gl(e) {
  return Ro(e) && Co(e);
}
function ml(e) {
  if (!Ze(e))
    return !1;
  try {
    return JSON.parse(e.valueOf()), !0;
  } catch {
    return !1;
  }
}
const Su = new RegExp(
  "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
);
function bl(e) {
  return st(e, Su);
}
const _u = /^[0-9a-fA-F]+$/;
function yl(e) {
  return st(e, _u);
}
const je = !1, Ie = !0;
function ka(e) {
  return (
    // "valueOf" may return other values for
    e instanceof Boolean || // other objects (e.g. Dates)
    e instanceof Number || e instanceof String ? e.valueOf() : e
  );
}
function Du(e, t, n, o, r) {
  if (t == null) {
    if (o)
      return t;
    Yt(e);
  }
  if (n(t))
    return ka(t);
  it(
    `InvalidArgument: the given ${Pe(e)} is no valid ${Pe(r)}`
  );
}
function ne(e, t, n) {
  let o = function(a, i) {
    return Du(
      a,
      i,
      e,
      t,
      n
    );
  }, r = e.name;
  if (r != null && /^ValueIs/.test(r)) {
    let a = r.replace(
      // derive name from validator
      /^ValueIs/,
      t ? "allow" : "expect"
    );
    return Ca(o, a);
  } else
    return o;
}
function Ca(e, t) {
  return e == null && it("MissingArgument: no function given"), typeof e != "function" && it("InvalidArgument: the given 1st Argument is not a JavaScript function"), t == null && it("MissingArgument: no desired name given"), typeof t != "string" && !(t instanceof String) && it("InvalidArgument: the given desired name is not a string"), e.name === t || Object.defineProperty(e, "name", {
    value: t.valueOf()
  }), e;
}
function Nt(e, t) {
  return Ca(
    (n, o, ...r) => o == null ? o : e(n, o, ...r),
    t
  );
}
function Lu(e, t, n) {
  return t == null ? void 0 : Au(e, t, n);
}
const fv = Lu;
function Mu(e, t, n) {
  t == null && Yt(e);
  const o = ka(t);
  if (n == null || n(o) === !0)
    return o;
  it(`InvalidArgument: the given ${Pe(e)} is invalid`);
}
const Au = Mu, on = /* @__PURE__ */ ne(
  Jt,
  Ie,
  "boolean value"
), hv = on, $a = /* @__PURE__ */ ne(
  Jt,
  je,
  "boolean value"
), gv = $a, Tu = /* @__PURE__ */ ne(
  ut,
  Ie,
  "numeric value"
), mv = Tu, xl = /* @__PURE__ */ ne(
  ut,
  je,
  "numeric value"
), bv = xl, Ru = /* @__PURE__ */ ne(
  an,
  Ie,
  "finite numeric value"
), yv = Ru, Fu = /* @__PURE__ */ ne(
  an,
  je,
  "finite numeric value"
), xv = Fu, Ou = /* @__PURE__ */ ne(
  Us,
  Ie,
  "NaN value"
), vv = Ou, zu = /* @__PURE__ */ ne(
  Us,
  je,
  "NaN value"
), wv = zu, Vu = /* @__PURE__ */ Nt(
  vl,
  "allowNumberInRange"
), kv = Vu;
function vl(e, t, n, o, r, a) {
  xl(e, t), isNaN(t) && it(
    `InvalidArgument: the given ${Pe(e)} is not-a-number`
  ), r ?? (r = !0), a ?? (a = !0);
  const i = n != null && isFinite(n), s = o != null && isFinite(o), c = i && (t < n || !r && t === n), d = s && (t > o || !a && t === o);
  switch (!0) {
    case (c && s || d && i):
      throw new RangeError(
        `the given ${Pe(e)} (${t}) is outside the allowed range (${n}...${o})`
      );
    case c:
      throw new RangeError(
        `the given ${Pe(e)} is below the allowed minimum (${t} ${r ? "<" : "<="} ${n})`
      );
    case d:
      throw new RangeError(
        `the given ${Pe(e)} exceeds the allowed maximum (${t} ${a ? ">" : ">="} ${o})`
      );
  }
  return t.valueOf();
}
const Cv = vl, Eu = /* @__PURE__ */ ne(
  Pn,
  Ie,
  "integral numeric value"
), $v = Eu, wl = /* @__PURE__ */ ne(
  Pn,
  je,
  "integral numeric value"
), jv = wl, Nu = /* @__PURE__ */ Nt(
  ja,
  "allowIntegerInRange"
), Iv = Nu;
function ja(e, t, n, o) {
  wl(e, t);
  const r = n != null && isFinite(n), a = o != null && isFinite(o), i = r && t < n, s = a && t > o;
  switch (!0) {
    case (i && a || s && r):
      throw new RangeError(
        `the given ${Pe(e)} (${t}) is outside the allowed range (${n}...${o})`
      );
    case i:
      throw new RangeError(
        `the given ${Pe(e)} is below the allowed minimum (${t} < ${n})`
      );
    case s:
      throw new RangeError(
        `the given ${Pe(e)} exceeds the allowed maximum (${t} > ${o})`
      );
  }
  return t.valueOf();
}
const Sv = ja, kl = /* @__PURE__ */ ne(
  hn,
  Ie,
  "ordinal number"
), _v = kl, qn = /* @__PURE__ */ ne(
  hn,
  je,
  "ordinal number"
), Dv = qn, Dr = /* @__PURE__ */ ne(
  ya,
  Ie,
  "cardinal number"
), Qi = Dr, Cl = /* @__PURE__ */ ne(
  ya,
  je,
  "cardinal number"
), Lv = Cl, Lr = /* @__PURE__ */ ne(
  Ze,
  Ie,
  "literal string"
), Mv = Lr, Ia = /* @__PURE__ */ ne(
  Ze,
  je,
  "literal string"
), Av = Ia, Bu = /* @__PURE__ */ ne(
  qs,
  Ie,
  "non-empty literal string"
), Tv = Bu, Wu = /* @__PURE__ */ ne(
  qs,
  je,
  "non-empty literal string"
), Rv = Wu, Hu = /* @__PURE__ */ Nt(
  Sa,
  "allowStringMatching"
), Fv = Hu;
function Sa(e, t, n) {
  if (Ia(e, t), n.test(t))
    return t.valueOf();
  it(
    `InvalidArgument: the given ${Pe(e)} does not match the specified pattern`
  );
}
const Ov = Sa, Gu = /* @__PURE__ */ ne(
  mn,
  Ie,
  "literal text"
), zv = Gu, nt = /* @__PURE__ */ ne(
  mn,
  je,
  "literal text"
), Vv = nt, fn = /* @__PURE__ */ ne(
  Ee,
  Ie,
  "single line of text"
), Ev = fn, ln = /* @__PURE__ */ ne(
  Ee,
  je,
  "single line of text"
), Nv = ln, Oe = /* @__PURE__ */ ne(
  Vt,
  Ie,
  "JavaScript function"
), Bv = Oe, Zt = /* @__PURE__ */ ne(
  Vt,
  je,
  "JavaScript function"
), Wv = Zt, Uu = /* @__PURE__ */ ne(
  xa,
  Ie,
  "anonymous JavaScript function"
), Hv = Uu, Ku = /* @__PURE__ */ ne(
  xa,
  je,
  "anonymous JavaScript function"
), Gv = Ku, qu = /* @__PURE__ */ ne(
  Xs,
  Ie,
  "named JavaScript function"
), Uv = qu, Xu = /* @__PURE__ */ ne(
  Xs,
  je,
  "named JavaScript function"
), Kv = Xu, Yu = /* @__PURE__ */ ne(
  va,
  Ie,
  "native JavaScript function"
), qv = Yu, Ju = /* @__PURE__ */ ne(
  va,
  je,
  "native JavaScript function"
), Xv = Ju, Zu = /* @__PURE__ */ ne(
  Ys,
  Ie,
  "scripted JavaScript function"
), Yv = Zu, Qu = /* @__PURE__ */ ne(
  Ys,
  je,
  "scripted JavaScript function"
), Jv = Qu, Pu = /* @__PURE__ */ ne(
  wa,
  Ie,
  "JavaScript object"
), Zv = Pu, $l = /* @__PURE__ */ ne(
  wa,
  je,
  "JavaScript object"
), Qv = $l, _a = /* @__PURE__ */ ne(
  Ro,
  Ie,
  '"plain" JavaScript object'
), Pv = _a, St = /* @__PURE__ */ ne(
  Ro,
  je,
  '"plain" JavaScript object'
), ew = St, ep = /* @__PURE__ */ ne(
  Js,
  Ie,
  '"vanilla" JavaScript object'
), tw = ep, tp = /* @__PURE__ */ ne(
  Js,
  je,
  '"vanilla" JavaScript object'
), nw = tp, np = /* @__PURE__ */ Nt(
  jl,
  "allowArray"
), ow = np;
function jl(e, t) {
  if (t == null && Yt(e), _r(t))
    return t;
  it(
    `InvalidArgument: the given ${Pe(e)} is no JavaScript array`
  );
}
const rw = jl, op = /* @__PURE__ */ Nt(
  Il,
  "allowList"
), aw = op;
function Il(e, t, n, o, r) {
  if (t == null && Yt(e), Zs(t, o, r))
    return t;
  it(
    `InvalidArgument: the given ${Pe(e)} is ` + (n == null ? "either not a list or contains an invalid number of elements" : "no " + Pe(n))
  );
}
const iw = Il, Ht = /* @__PURE__ */ Nt(
  Sl,
  "allowListSatisfying"
), sw = Ht;
function Sl(e, t, n, o, r, a) {
  if (t == null && Yt(e), $e(t, n, r, a))
    return t;
  it(
    `InvalidArgument: the given ${Pe(e)} is ` + (o == null ? "either not a list or contains invalid elements" : "no " + Pe(o))
  );
}
const lw = Sl, rp = /* @__PURE__ */ Nt(
  _l,
  "allowListOf"
), cw = rp;
function _l(e, t, n) {
  if (t == null && Yt(e), hu(t, n))
    return t;
  it(`InvalidArgument: the given value is no ${Pe(e)}`);
}
const dw = _l, ap = /* @__PURE__ */ Nt(
  eo,
  "allowInstanceOf"
), uw = ap;
function eo(e, t, n, o) {
  if (t == null && Yt(e), t instanceof n)
    return t;
  it(
    `InvalidArgument: the given ${Pe(e)} is no ${Pe(o)}`
  );
}
const pw = eo, ip = /* @__PURE__ */ Nt(
  Dl,
  "allowValueInheritingFrom"
), fw = ip;
function Dl(e, t, n, o) {
  if (t == null && Yt(e), n.isPrototypeOf(t))
    return t;
  it(
    `InvalidArgument: the given ${Pe(e)} is no ${Pe(o)}`
  );
}
const hw = Dl, sp = /* @__PURE__ */ ne(
  Qs,
  Ie,
  "JavaScript Date object"
), gw = sp, lp = /* @__PURE__ */ ne(
  Qs,
  je,
  "JavaScript Date object"
), mw = lp, cp = /* @__PURE__ */ ne(
  Ps,
  Ie,
  "JavaScript Error object"
), bw = cp, dp = /* @__PURE__ */ ne(
  Ps,
  je,
  "JavaScript Error object"
), yw = dp, up = /* @__PURE__ */ ne(
  el,
  Ie,
  "JavaScript RegExp object"
), xw = up, pp = /* @__PURE__ */ ne(
  el,
  je,
  "JavaScript RegExp object"
), vw = pp, Ft = /* @__PURE__ */ Nt(
  _n,
  "allowOneOf"
), ww = Ft;
function _n(e, t, n) {
  if (t == null && Yt(e), he(t, n))
    return ka(t);
  it(
    `InvalidArgument: the given ${Pe(e)} is not among the supported values`
  );
}
const kw = _n, fp = /* @__PURE__ */ ne(
  An,
  Ie,
  "CSS color specification"
), Cw = fp, hp = /* @__PURE__ */ ne(
  An,
  je,
  "CSS color specification"
), $w = hp, gp = /* @__PURE__ */ ne(
  Tn,
  Ie,
  "EMail address"
), jw = gp, mp = /* @__PURE__ */ ne(
  Tn,
  je,
  "EMail address"
), Iw = mp, Hn = /* @__PURE__ */ ne(
  at,
  Ie,
  "URL"
), Sw = Hn, Da = /* @__PURE__ */ ne(
  at,
  je,
  "URL"
), _w = Da, bp = /* @__PURE__ */ Nt(
  Ll,
  "allowAbsoluteURL"
), Dw = bp;
function Ll(e, t, n) {
  if (t == null && Yt(e), xu(t, n))
    return t.valueOf();
  it(
    `InvalidArgument: the given ${Pe(e)} is no valid absolute URL`
  );
}
const Lw = Ll, yp = /* @__PURE__ */ ne(
  tl,
  Ie,
  "phone number in E.164 format"
), Mw = yp, xp = /* @__PURE__ */ ne(
  tl,
  je,
  "phone number in E.164 format"
), Aw = xp, vp = /* @__PURE__ */ ne(
  nl,
  Ie,
  "BigInt value"
), Tw = vp, wp = /* @__PURE__ */ ne(
  nl,
  je,
  "BigInt value"
), Rw = wp, kp = /* @__PURE__ */ ne(
  ol,
  Ie,
  "symbol"
), Fw = kp, Cp = /* @__PURE__ */ ne(
  ol,
  je,
  "symbol"
), Ow = Cp, $p = /* @__PURE__ */ ne(
  rl,
  Ie,
  "JavaScript Map"
), zw = $p, jp = /* @__PURE__ */ ne(
  rl,
  je,
  "JavaScript Map"
), Vw = jp, Ip = /* @__PURE__ */ ne(
  al,
  Ie,
  "JavaScript Set"
), Ew = Ip, Sp = /* @__PURE__ */ ne(
  al,
  je,
  "JavaScript Set"
), Nw = Sp, _p = /* @__PURE__ */ ne(
  il,
  Ie,
  "typed array"
), Bw = _p, Dp = /* @__PURE__ */ ne(
  il,
  je,
  "typed array"
), Ww = Dp, Lp = /* @__PURE__ */ ne(
  sl,
  Ie,
  "ArrayBuffer"
), Hw = Lp, Mp = /* @__PURE__ */ ne(
  sl,
  je,
  "ArrayBuffer"
), Gw = Mp, Ap = /* @__PURE__ */ ne(
  ll,
  Ie,
  "UUID"
), Uw = Ap, Tp = /* @__PURE__ */ ne(
  ll,
  je,
  "UUID"
), Kw = Tp, Rp = /* @__PURE__ */ ne(
  cl,
  Ie,
  "ISO 8601 date"
), qw = Rp, Fp = /* @__PURE__ */ ne(
  cl,
  je,
  "ISO 8601 date"
), Xw = Fp, Op = /* @__PURE__ */ ne(
  dl,
  Ie,
  "ISO 8601 timestamp"
), Yw = Op, zp = /* @__PURE__ */ ne(
  dl,
  je,
  "ISO 8601 timestamp"
), Jw = zp, Vp = /* @__PURE__ */ ne(
  ul,
  Ie,
  "IPv4 address"
), Zw = Vp, Ep = /* @__PURE__ */ ne(
  ul,
  je,
  "IPv4 address"
), Qw = Ep, Np = /* @__PURE__ */ ne(
  pl,
  Ie,
  "IPv6 address"
), Pw = Np, Bp = /* @__PURE__ */ ne(
  pl,
  je,
  "IPv6 address"
), ek = Bp, Wp = /* @__PURE__ */ ne(
  fl,
  Ie,
  "host name"
), tk = Wp, Hp = /* @__PURE__ */ ne(
  fl,
  je,
  "host name"
), nk = Hp, Gp = /* @__PURE__ */ ne(
  hl,
  Ie,
  "port number"
), ok = Gp, Up = /* @__PURE__ */ ne(
  hl,
  je,
  "port number"
), rk = Up, Kp = /* @__PURE__ */ ne(
  Co,
  Ie,
  "serializable value"
), ak = Kp, qp = /* @__PURE__ */ ne(
  Co,
  je,
  "serializable value"
), ik = qp, Xp = /* @__PURE__ */ ne(
  gl,
  Ie,
  "serializable object"
), sk = Xp, Yp = /* @__PURE__ */ ne(
  gl,
  je,
  "serializable object"
), lk = Yp, Jp = /* @__PURE__ */ ne(
  ml,
  Ie,
  "JSON string"
), ck = Jp, Zp = /* @__PURE__ */ ne(
  ml,
  je,
  "JSON string"
), dk = Zp, Qp = /* @__PURE__ */ ne(
  bl,
  Ie,
  "Base64-encoded string"
), uk = Qp, Pp = /* @__PURE__ */ ne(
  bl,
  je,
  "Base64-encoded string"
), pk = Pp, ef = /* @__PURE__ */ ne(
  yl,
  Ie,
  "hexadecimal string"
), fk = ef, tf = /* @__PURE__ */ ne(
  yl,
  je,
  "hexadecimal string"
), hk = tf, Fo = (
  // core of several escaping patterns below
  String.raw`\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|` + String.raw`\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]`
), nf = new RegExp(Fo + "?", "g"), Ml = /[\x00-\x1f\x7f-\x9f]/g, of = {
  "\0": "\\0",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\v": "\\v"
};
function Al(e) {
  return of[e] ?? "\\x" + e.charCodeAt(0).toString(16).padStart(2, "0");
}
function Pe(e) {
  return e.replace(nf, (t) => t === "\\" ? "\\\\" : t).replace(Ml, Al);
}
const rf = new RegExp(Fo, "g"), af = {
  "\\0": "\0",
  "\\b": "\b",
  "\\f": "\f",
  "\\n": `
`,
  "\\r": "\r",
  "\\t": "	",
  "\\v": "\v",
  "\\'": "'",
  '\\"': '"',
  "\\\\": "\\"
};
function sf(e) {
  const t = e.charAt(2) === "{" ? parseInt(e.slice(3, -1), 16) : parseInt(e.slice(2), 16);
  return t <= 1114111 ? String.fromCodePoint(t) : e;
}
function gk(e) {
  return e.replace(rf, (t) => af[t] ?? sf(t));
}
const lf = new RegExp(Fo + "?|'", "g"), cf = new RegExp(Fo + '?|"', "g"), df = new RegExp(Fo + "?|`|\\$\\{", "g"), uf = {
  "'": "\\'",
  '"': '\\"',
  "`": "\\`",
  "${": "\\${",
  "\\": "\\\\"
};
function pf(e, t = '"') {
  const n = t === "'" ? lf : t === "`" ? df : cf;
  return e.replace(n, (o) => uf[o] ?? o).replace(Ml, Al);
}
function Mt(e, t = '"') {
  return t + pf(e, t) + t;
}
const ff = /[&<>"'\x00-\x1F\x7F-\x9F\\]/g;
function hf(e, t) {
  return t = (t || "").trim() || "<br/>", e.replace(ff, (n) => {
    switch (n) {
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
      case "\b":
        return "&#92;b";
      case "\f":
        return "&#92;f";
      case `
`:
        return t;
      case "\r":
        return "&#92;r";
      case "	":
        return "&#92;t";
      case "\v":
        return "&#92;v";
      case "\\":
        return "&#92;";
      default:
        return "&#x" + n.charCodeAt(0).toString(16).padStart(4, "0") + ";";
    }
  });
}
const gf = /[:`*_\[\]#|~]/g;
function mk(e, t) {
  return hf(e, t).replace(
    gf,
    (n) => "&#" + n.charCodeAt(0) + ";"
  );
}
function lr(e, t, n, o) {
  if (e === t)
    return !1;
  let r, a;
  typeof n == "string" ? r = n : n != null && (r = n.Mode, a = n.Tolerance);
  let i = typeof e;
  if (i !== typeof t)
    return !0;
  function s(l, f, h, g) {
    if (!Array.isArray(f) || l.length !== f.length)
      return !0;
    for (let b = 0, m = l.length; b < m; b++)
      if (lr(l[b], f[b], h, g))
        return !0;
    return !1;
  }
  function c(l, f, h, g) {
    if (!(f instanceof Map) || l.size !== f.size)
      return !0;
    let b = !1;
    return l.forEach(function(m, v) {
      b || (b = !f.has(v) || lr(m, f.get(v), h, g));
    }), b;
  }
  function d(l, f) {
    if (!(f instanceof Set) || l.size !== f.size)
      return !0;
    let h = !1;
    return l.forEach(function(g) {
      !h && !f.has(g) && (h = !0);
    }), h;
  }
  function u(l, f) {
    if (Object.getPrototypeOf(l) !== Object.getPrototypeOf(f) || l.byteLength !== f.byteLength)
      return !0;
    let h = new Uint8Array(
      l.buffer,
      l.byteOffset,
      l.byteLength
    ), g = new Uint8Array(
      f.buffer,
      f.byteOffset,
      f.byteLength
    );
    for (let b = 0, m = h.length; b < m; b++)
      if (h[b] !== g[b])
        return !0;
    return !1;
  }
  function p(l, f, h, g) {
    if (Object.getPrototypeOf(l) !== Object.getPrototypeOf(f))
      return !0;
    for (let b in l)
      if (!(b in f))
        return !0;
    for (let b in f)
      if (!(b in l) || lr(l[b], f[b], h, g))
        return !0;
    return !1;
  }
  switch (i) {
    case "undefined":
    case "boolean":
    case "string":
    case "bigint":
    case "symbol":
    case "function":
      return !0;
    // most primitives are compared using "==="
    case "number": {
      if (isNaN(e) !== isNaN(t))
        return !0;
      if (a != null)
        return Math.abs(e - t) > a;
      const f = Number.EPSILON * Math.max(
        // default is relative!
        1,
        Math.abs(e),
        Math.abs(t)
      );
      return Math.abs(e - t) > f;
    }
    case "object":
      if (e == null || t == null)
        return !0;
      if (
        // boxed primitives are compared by their values
        e instanceof Boolean || e instanceof Number || e instanceof String
      )
        return r === "by-reference" ? !0 : Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) || e.valueOf() !== t.valueOf();
      if (e instanceof Date) {
        if (r === "by-reference" || !(t instanceof Date))
          return !0;
        let f = e.getTime(), h = t.getTime();
        return f !== h && !(isNaN(f) && isNaN(h));
      }
      if (e instanceof RegExp)
        return r === "by-reference" ? !0 : !(t instanceof RegExp) || e.source !== t.source || e.flags !== t.flags;
      o == null && (o = /* @__PURE__ */ new WeakMap());
      let l = o.get(e);
      return l == null && o.set(e, l = /* @__PURE__ */ new WeakSet()), l.has(t) ? !1 : (l.add(t), Array.isArray(e) ? s(e, t, n, o) : e instanceof Map ? r === "by-reference" ? !0 : c(e, t, n, o) : e instanceof Set ? r === "by-reference" ? !0 : d(e, t) : ArrayBuffer.isView(e) ? r === "by-reference" ? !0 : u(e, t) : r === "by-reference" ? !0 : p(e, t, n, o));
    default:
      return !0;
  }
}
function bk(e, t, n) {
  return !lr(e, t, n);
}
function mf(e) {
  $l("candidate", e);
  for (let t in e)
    if (lu(e, t))
      return !1;
  return !0;
}
function yk(e) {
  return !mf(e);
}
function bf(e) {
  return /^\s*$/.test(e);
}
function xk(e) {
  return !bf(e);
}
function vk(e, t = -1 / 0, n = 1 / 0) {
  return Math.max(t, Math.min(e, n));
}
const $o = /* @__PURE__ */ Object.freeze({
  transparent: "rgba(0,0,0,0.0)",
  aliceblue: "rgba(240,248,255,1.0)",
  lightpink: "rgba(255,182,193,1.0)",
  antiquewhite: "rgba(250,235,215,1.0)",
  lightsalmon: "rgba(255,160,122,1.0)",
  aqua: "rgba(0,255,255,1.0)",
  lightseagreen: "rgba(32,178,170,1.0)",
  aquamarine: "rgba(127,255,212,1.0)",
  lightskyblue: "rgba(135,206,250,1.0)",
  azure: "rgba(240,255,255,1.0)",
  lightslategray: "rgba(119,136,153,1.0)",
  beige: "rgba(245,245,220,1.0)",
  lightslategrey: "rgba(119,136,153,1.0)",
  bisque: "rgba(255,228,196,1.0)",
  lightsteelblue: "rgba(176,196,222,1.0)",
  black: "rgba(0,0,0,1.0)",
  lightyellow: "rgba(255,255,224,1.0)",
  blanchedalmond: "rgba(255,235,205,1.0)",
  lime: "rgba(0,255,0,1.0)",
  blue: "rgba(0,0,255,1.0)",
  limegreen: "rgba(50,205,50,1.0)",
  blueviolet: "rgba(138,43,226,1.0)",
  linen: "rgba(250,240,230,1.0)",
  brown: "rgba(165,42,42,1.0)",
  magenta: "rgba(255,0,255,1.0)",
  burlywood: "rgba(222,184,135,1.0)",
  maroon: "rgba(128,0,0,1.0)",
  cadetblue: "rgba(95,158,160,1.0)",
  mediumaquamarine: "rgba(102,205,170,1.0)",
  chartreuse: "rgba(127,255,0,1.0)",
  mediumblue: "rgba(0,0,205,1.0)",
  chocolate: "rgba(210,105,30,1.0)",
  mediumorchid: "rgba(186,85,211,1.0)",
  coral: "rgba(255,127,80,1.0)",
  mediumpurple: "rgba(147,112,219,1.0)",
  cornflowerblue: "rgba(100,149,237,1.0)",
  mediumseagreen: "rgba(60,179,113,1.0)",
  cornsilk: "rgba(255,248,220,1.0)",
  mediumslateblue: "rgba(123,104,238,1.0)",
  crimson: "rgba(220,20,60,1.0)",
  mediumspringgreen: "rgba(0,250,154,1.0)",
  cyan: "rgba(0,255,255,1.0)",
  mediumturquoise: "rgba(72,209,204,1.0)",
  darkblue: "rgba(0,0,139,1.0)",
  mediumvioletred: "rgba(199,21,133,1.0)",
  darkcyan: "rgba(0,139,139,1.0)",
  midnightblue: "rgba(25,25,112,1.0)",
  darkgoldenrod: "rgba(184,134,11,1.0)",
  mintcream: "rgba(245,255,250,1.0)",
  darkgray: "rgba(169,169,169,1.0)",
  mistyrose: "rgba(255,228,225,1.0)",
  darkgreen: "rgba(0,100,0,1.0)",
  moccasin: "rgba(255,228,181,1.0)",
  darkgrey: "rgba(169,169,169,1.0)",
  navajowhite: "rgba(255,222,173,1.0)",
  darkkhaki: "rgba(189,183,107,1.0)",
  navy: "rgba(0,0,128,1.0)",
  darkmagenta: "rgba(139,0,139,1.0)",
  oldlace: "rgba(253,245,230,1.0)",
  darkolivegreen: "rgba(85,107,47,1.0)",
  olive: "rgba(128,128,0,1.0)",
  darkorange: "rgba(255,140,0,1.0)",
  olivedrab: "rgba(107,142,35,1.0)",
  darkorchid: "rgba(153,50,204,1.0)",
  orange: "rgba(255,165,0,1.0)",
  darkred: "rgba(139,0,0,1.0)",
  orangered: "rgba(255,69,0,1.0)",
  darksalmon: "rgba(233,150,122,1.0)",
  orchid: "rgba(218,112,214,1.0)",
  darkseagreen: "rgba(143,188,143,1.0)",
  palegoldenrod: "rgba(238,232,170,1.0)",
  darkslateblue: "rgba(72,61,139,1.0)",
  palegreen: "rgba(152,251,152,1.0)",
  darkslategray: "rgba(47,79,79,1.0)",
  paleturquoise: "rgba(175,238,238,1.0)",
  darkslategrey: "rgba(47,79,79,1.0)",
  palevioletred: "rgba(219,112,147,1.0)",
  darkturquoise: "rgba(0,206,209,1.0)",
  papayawhip: "rgba(255,239,213,1.0)",
  darkviolet: "rgba(148,0,211,1.0)",
  peachpuff: "rgba(255,218,185,1.0)",
  deeppink: "rgba(255,20,147,1.0)",
  peru: "rgba(205,133,63,1.0)",
  deepskyblue: "rgba(0,191,255,1.0)",
  pink: "rgba(255,192,203,1.0)",
  dimgray: "rgba(105,105,105,1.0)",
  plum: "rgba(221,160,221,1.0)",
  dimgrey: "rgba(105,105,105,1.0)",
  powderblue: "rgba(176,224,230,1.0)",
  dodgerblue: "rgba(30,144,255,1.0)",
  purple: "rgba(128,0,128,1.0)",
  firebrick: "rgba(178,34,34,1.0)",
  red: "rgba(255,0,0,1.0)",
  floralwhite: "rgba(255,250,240,1.0)",
  rosybrown: "rgba(188,143,143,1.0)",
  forestgreen: "rgba(34,139,34,1.0)",
  royalblue: "rgba(65,105,225,1.0)",
  fuchsia: "rgba(255,0,255,1.0)",
  saddlebrown: "rgba(139,69,19,1.0)",
  gainsboro: "rgba(220,220,220,1.0)",
  salmon: "rgba(250,128,114,1.0)",
  ghostwhite: "rgba(248,248,255,1.0)",
  sandybrown: "rgba(244,164,96,1.0)",
  gold: "rgba(255,215,0,1.0)",
  seagreen: "rgba(46,139,87,1.0)",
  goldenrod: "rgba(218,165,32,1.0)",
  seashell: "rgba(255,245,238,1.0)",
  gray: "rgba(128,128,128,1.0)",
  sienna: "rgba(160,82,45,1.0)",
  green: "rgba(0,128,0,1.0)",
  silver: "rgba(192,192,192,1.0)",
  greenyellow: "rgba(173,255,47,1.0)",
  skyblue: "rgba(135,206,235,1.0)",
  grey: "rgba(128,128,128,1.0)",
  slateblue: "rgba(106,90,205,1.0)",
  honeydew: "rgba(240,255,240,1.0)",
  slategray: "rgba(112,128,144,1.0)",
  hotpink: "rgba(255,105,180,1.0)",
  slategrey: "rgba(112,128,144,1.0)",
  indianred: "rgba(205,92,92,1.0)",
  snow: "rgba(255,250,250,1.0)",
  indigo: "rgba(75,0,130,1.0)",
  springgreen: "rgba(0,255,127,1.0)",
  ivory: "rgba(255,255,240,1.0)",
  steelblue: "rgba(70,130,180,1.0)",
  khaki: "rgba(240,230,140,1.0)",
  tan: "rgba(210,180,140,1.0)",
  lavender: "rgba(230,230,250,1.0)",
  teal: "rgba(0,128,128,1.0)",
  lavenderblush: "rgba(255,240,245,1.0)",
  thistle: "rgba(216,191,216,1.0)",
  lawngreen: "rgba(124,252,0,1.0)",
  tomato: "rgba(255,99,71,1.0)",
  lemonchiffon: "rgba(255,250,205,1.0)",
  turquoise: "rgba(64,224,208,1.0)",
  lightblue: "rgba(173,216,230,1.0)",
  violet: "rgba(238,130,238,1.0)",
  lightcoral: "rgba(240,128,128,1.0)",
  wheat: "rgba(245,222,179,1.0)",
  lightcyan: "rgba(224,255,255,1.0)",
  white: "rgba(255,255,255,1.0)",
  lightgoldenrodyellow: "rgba(250,250,210,1.0)",
  whitesmoke: "rgba(245,245,245,1.0)",
  lightgray: "rgba(211,211,211,1.0)",
  yellow: "rgba(255,255,0,1.0)",
  lightgreen: "rgba(144,238,144,1.0)",
  yellowgreen: "rgba(154,205,50,1.0)",
  lightgrey: "rgba(211,211,211,1.0)"
}), La = /^#[a-fA-F0-9]{6}$/, Ma = /^#[a-fA-F0-9]{8}$/, Aa = (
  // not perfect
  /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i
), Ta = (
  // not perfect
  /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i
);
function yf(e) {
  let t = e.toLowerCase();
  if ($o.hasOwnProperty(t) && (e = $o[t]), La.test(e))
    return e + "FF";
  if (Ma.test(e))
    return e;
  function n(r) {
    return r = Math.max(0, Math.min(255, Math.round(r))), r.toString(16).toUpperCase().padStart(2, "0");
  }
  let o = Aa.exec(e);
  if (o != null)
    return "#" + n(parseInt(o[1], 10)) + n(parseInt(o[2], 10)) + n(parseInt(o[3], 10)) + "FF";
  if (o = Ta.exec(e), o != null)
    return "#" + n(parseInt(o[1], 10)) + n(parseInt(o[2], 10)) + n(parseInt(o[3], 10)) + n(parseFloat(o[4]) * 255);
  it("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function wk(e) {
  let t = e.toLowerCase();
  if ($o.hasOwnProperty(t))
    return $o[t];
  if (La.test(e))
    return "rgba(" + parseInt(e.slice(1, 3), 16) + "," + parseInt(e.slice(3, 5), 16) + "," + parseInt(e.slice(5, 7), 16) + ",1)";
  if (Ma.test(e))
    return "rgba(" + parseInt(e.slice(1, 3), 16) + "," + parseInt(e.slice(3, 5), 16) + "," + parseInt(e.slice(5, 7), 16) + "," + parseInt(e.slice(7), 16) / 255 + ")";
  if (Aa.test(e))
    return e.slice(0, e.length - 1) + ",1)";
  if (Ta.test(e))
    return e;
  it("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function kk(e) {
  return yf(e).slice(0, 7);
}
var _t = typeof window < "u" ? window : { screen: {}, navigator: {} }, Xn = (_t.matchMedia || (function() {
  return { matches: !1 };
})).bind(_t), Tl = !1, xf = {
  get passive() {
    return Tl = !0;
  }
}, Rl = function() {
};
_t.addEventListener && _t.addEventListener("p", Rl, xf);
_t.removeEventListener && _t.removeEventListener("p", Rl, !1);
var Ck = Tl, $k = "PointerEvent" in _t, Ra = "ontouchstart" in _t, vf = "TouchEvent" in _t, wf = Ra || vf && Xn("(any-pointer: coarse)").matches, Pi = (_t.navigator.maxTouchPoints || 0) > 0 || wf, Fl = _t.navigator.userAgent || "", kf = Xn("(pointer: coarse)").matches && // both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(Fl) && Math.min(_t.screen.width || 0, _t.screen.height || 0) >= 768, Ol = (Xn("(pointer: coarse)").matches || // if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!Xn("(pointer: fine)").matches && Ra) && // bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(Fl), Cf = Xn("(any-pointer: fine)").matches || Xn("(any-hover: hover)").matches || // iPads might have an input device that can hover, so assume it has anyHover
kf || // if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!Ra, es = Pi && (Cf || !Ol) ? "hybrid" : Pi ? "touchOnly" : "mouseOnly", jk = es === "mouseOnly" ? "mouse" : es === "touchOnly" || // if the device is a hybrid, then if the primary pointer is coarse
// assume the primaryInput is touch, otherwise assume it's mouse
Ol ? "touch" : "mouse", Oo, Le, zl, Fa, pn, ts, Vl, El, Hr, cr, vo, Nl, Oa, ea, ta, Bl, gr = {}, mr = [], $f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, zo = Array.isArray;
function Kt(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function za(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Yn(e, t, n) {
  var o, r, a, i = {};
  for (a in t) a == "key" ? o = t[a] : a == "ref" ? r = t[a] : i[a] = t[a];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? Oo.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) i[a] === void 0 && (i[a] = e.defaultProps[a]);
  return wo(e, i, o, r, null);
}
function wo(e, t, n, o, r) {
  var a = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++zl, __i: -1, __u: 0 };
  return r == null && Le.vnode != null && Le.vnode(a), a;
}
function jf() {
  return { current: null };
}
function Jn(e) {
  return e.children;
}
function qt(e, t) {
  this.props = e, this.context = t;
}
function Zn(e, t) {
  if (t == null) return e.__ ? Zn(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Zn(e) : null;
}
function If(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, o = [], r = [], a = Kt({}, t);
    a.__v = t.__v + 1, Le.vnode && Le.vnode(a), Va(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, o, n ?? Zn(t), !!(32 & t.__u), r), a.__v = t.__v, a.__.__k[a.__i] = a, Kl(o, a, r), t.__e = t.__ = null, a.__e != n && Wl(a);
  }
}
function Wl(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Wl(e);
}
function na(e) {
  (!e.__d && (e.__d = !0) && pn.push(e) && !br.__r++ || ts != Le.debounceRendering) && ((ts = Le.debounceRendering) || Vl)(br);
}
function br() {
  try {
    for (var e, t = 1; pn.length; ) pn.length > t && pn.sort(El), e = pn.shift(), t = pn.length, If(e);
  } finally {
    pn.length = br.__r = 0;
  }
}
function Hl(e, t, n, o, r, a, i, s, c, d, u) {
  var p, l, f, h, g, b, m, v = o && o.__k || mr, C = t.length;
  for (c = Sf(n, t, v, c, C), p = 0; p < C; p++) (f = n.__k[p]) != null && (l = f.__i != -1 && v[f.__i] || gr, f.__i = p, b = Va(e, f, l, r, a, i, s, c, d, u), h = f.__e, f.ref && l.ref != f.ref && (l.ref && Ea(l.ref, null, f), u.push(f.ref, f.__c || h, f)), g == null && h != null && (g = h), (m = !!(4 & f.__u)) || l.__k === f.__k ? (c = Gl(f, c, e, m), m && l.__e && (l.__e = null)) : typeof f.type == "function" && b !== void 0 ? c = b : h && (c = h.nextSibling), f.__u &= -7);
  return n.__e = g, c;
}
function Sf(e, t, n, o, r) {
  var a, i, s, c, d, u = n.length, p = u, l = 0;
  for (e.__k = new Array(r), a = 0; a < r; a++) (i = t[a]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[a] = wo(null, i, null, null, null) : zo(i) ? i = e.__k[a] = wo(Jn, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? i = e.__k[a] = wo(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[a] = i, c = a + l, i.__ = e, i.__b = e.__b + 1, s = null, (d = i.__i = _f(i, n, c, p)) != -1 && (p--, (s = n[d]) && (s.__u |= 2)), s == null || s.__v == null ? (d == -1 && (r > u ? l-- : r < u && l++), typeof i.type != "function" && (i.__u |= 4)) : d != c && (d == c - 1 ? l-- : d == c + 1 ? l++ : (d > c ? l-- : l++, i.__u |= 4))) : e.__k[a] = null;
  if (p) for (a = 0; a < u; a++) (s = n[a]) != null && (2 & s.__u) == 0 && (s.__e == o && (o = Zn(s)), Xl(s, s));
  return o;
}
function Gl(e, t, n, o) {
  var r, a;
  if (typeof e.type == "function") {
    for (r = e.__k, a = 0; r && a < r.length; a++) r[a] && (r[a].__ = e, t = Gl(r[a], t, n, o));
    return t;
  }
  e.__e != t && (o && (t && e.type && !t.parentNode && (t = Zn(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function At(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (zo(e) ? e.some(function(n) {
    At(n, t);
  }) : t.push(e)), t;
}
function _f(e, t, n, o) {
  var r, a, i, s = e.key, c = e.type, d = t[n], u = d != null && (2 & d.__u) == 0;
  if (d === null && s == null || u && s == d.key && c == d.type) return n;
  if (o > (u ? 1 : 0)) {
    for (r = n - 1, a = n + 1; r >= 0 || a < t.length; ) if ((d = t[i = r >= 0 ? r-- : a++]) != null && (2 & d.__u) == 0 && s == d.key && c == d.type) return i;
  }
  return -1;
}
function ns(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || $f.test(t) ? n : n + "px";
}
function tr(e, t, n, o, r) {
  var a, i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof o == "string" && (e.style.cssText = o = ""), o) for (t in o) n && t in n || ns(e.style, t, "");
    if (n) for (t in n) o && n[t] == o[t] || ns(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Nl, "$1")), i = t.toLowerCase(), t = i in e || t == "onFocusOut" || t == "onFocusIn" ? i.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? o ? n[vo] = o[vo] : (n[vo] = Oa, e.addEventListener(t, a ? ta : ea, a)) : e.removeEventListener(t, a ? ta : ea, a);
  else {
    if (r == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function os(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[cr] == null) t[cr] = Oa++;
      else if (t[cr] < n[vo]) return;
      return n(Le.event ? Le.event(t) : t);
    }
  };
}
function Va(e, t, n, o, r, a, i, s, c, d) {
  var u, p, l, f, h, g, b, m, v, C, S, j, x, w, R, L, $ = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (u = Le.__b) && u(t);
  e: if (typeof $ == "function") {
    p = i.length;
    try {
      if (v = t.props, C = $.prototype && $.prototype.render, S = (u = $.contextType) && o[u.__c], j = u ? S ? S.props.value : u.__ : o, n.__c ? m = (l = t.__c = n.__c).__ = l.__E : (C ? t.__c = l = new $(v, j) : (t.__c = l = new qt(v, j), l.constructor = $, l.render = Lf), S && S.sub(l), l.state || (l.state = {}), l.__n = o, f = l.__d = !0, l.__h = [], l._sb = []), C && l.__s == null && (l.__s = l.state), C && $.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Kt({}, l.__s)), Kt(l.__s, $.getDerivedStateFromProps(v, l.__s))), h = l.props, g = l.state, l.__v = t, f) C && $.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), C && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (C && $.getDerivedStateFromProps == null && v !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, j), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l.__s, j) === !1) {
          t.__v != n.__v && (l.props = v, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(I) {
            I && (I.__ = t);
          }), mr.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && i.push(l);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, j), C && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(h, g, b);
        });
      }
      if (l.context = j, l.props = v, l.__P = e, l.__e = !1, x = Le.__r, w = 0, C) l.state = l.__s, l.__d = !1, x && x(t), u = l.render(l.props, l.state, l.context), mr.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, x && x(t), u = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++w < 25);
      l.state = l.__s, l.getChildContext != null && (o = Kt(Kt({}, o), l.getChildContext())), C && !f && l.getSnapshotBeforeUpdate != null && (b = l.getSnapshotBeforeUpdate(h, g)), R = u != null && u.type === Jn && u.key == null ? ql(u.props.children) : u, s = Hl(e, zo(R) ? R : [R], t, n, o, r, a, i, s, c, d), l.base = t.__e, t.__u &= -161, l.__h.length && i.push(l), m && (l.__E = l.__ = null);
    } catch (I) {
      if (i.length = p, t.__v = null, c || a != null) {
        if (I.then) {
          for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
          a != null && (a[a.indexOf(s)] = null), t.__e = s;
        } else if (a != null) for (L = a.length; L--; ) za(a[L]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), I.then || Ul(t), Le.__e(I, t, n);
    }
  } else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Df(n.__e, t, n, o, r, a, i, c, d);
  return (u = Le.diffed) && u(t), 128 & t.__u ? void 0 : s;
}
function Ul(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Ul));
}
function Kl(e, t, n) {
  for (var o = 0; o < n.length; o++) Ea(n[o], n[++o], n[++o]);
  Le.__c && Le.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(a) {
        a.call(r);
      });
    } catch (a) {
      Le.__e(a, r.__v);
    }
  });
}
function ql(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : zo(e) ? e.map(ql) : e.constructor !== void 0 ? null : Kt({}, e);
}
function Df(e, t, n, o, r, a, i, s, c) {
  var d, u, p, l, f, h, g, b = n.props || gr, m = t.props, v = t.type;
  if (v == "svg" ? r = "http://www.w3.org/2000/svg" : v == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((f = a[d]) && "setAttribute" in f == !!v && (v ? f.localName == v : f.nodeType == 3)) {
      e = f, a[d] = null;
      break;
    }
  }
  if (e == null) {
    if (v == null) return document.createTextNode(m);
    e = document.createElementNS(r, v, m.is && m), s && (Le.__m && Le.__m(t, a), s = !1), a = null;
  }
  if (v == null) b === m || s && e.data == m || (e.data = m);
  else {
    if (a = v == "textarea" && m.defaultValue != null ? null : a && Oo.call(e.childNodes), !s && a != null) for (b = {}, d = 0; d < e.attributes.length; d++) b[(f = e.attributes[d]).name] = f.value;
    for (d in b) f = b[d], d == "dangerouslySetInnerHTML" ? p = f : d == "children" || d in m || d == "value" && "defaultValue" in m || d == "checked" && "defaultChecked" in m || tr(e, d, null, f, r);
    for (d in m) f = m[d], d == "children" ? l = f : d == "dangerouslySetInnerHTML" ? u = f : d == "value" ? h = f : d == "checked" ? g = f : s && typeof f != "function" || b[d] === f || tr(e, d, f, b[d], r);
    if (u) s || p && (u.__html == p.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (p && (e.innerHTML = ""), Hl(t.type == "template" ? e.content : e, zo(l) ? l : [l], t, n, o, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, a, i, a ? a[0] : n.__k && Zn(n, 0), s, c), a != null) for (d = a.length; d--; ) za(a[d]);
    s && v != "textarea" || (d = "value", v == "progress" && h == null ? e.removeAttribute("value") : h != null && (h !== e[d] || v == "progress" && !h || v == "option" && h != b[d]) && tr(e, d, h, b[d], r), d = "checked", g != null && g != e[d] && tr(e, d, g, b[d], r));
  }
  return e;
}
function Ea(e, t, n) {
  try {
    if (typeof e == "function") {
      var o = typeof e.__u == "function";
      o && e.__u(), o && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (r) {
    Le.__e(r, n);
  }
}
function Xl(e, t, n) {
  var o, r;
  if (Le.unmount && Le.unmount(e), (o = e.ref) && (o.current && o.current != e.__e || Ea(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount) try {
      o.componentWillUnmount();
    } catch (a) {
      Le.__e(a, t);
    }
    o.base = o.__P = o.__n = null;
  }
  if (o = e.__k) for (r = 0; r < o.length; r++) o[r] && Xl(o[r], t, n || typeof e.type != "function");
  n || za(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Lf(e, t, n) {
  return this.constructor(e, n);
}
function jo(e, t, n) {
  var o, r, a, i;
  t == document && (t = document.documentElement), Le.__ && Le.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, a = [], i = [], Va(t, e = (!o && n || t).__k = Yn(Jn, null, [e]), r || gr, gr, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? Oo.call(t.childNodes) : null, a, !o && n ? n : r ? r.__e : t.firstChild, o, i), Kl(a, e, i), e.props.children = null;
}
function Mf(e, t, n) {
  var o, r, a, i, s = Kt({}, e.props);
  for (a in e.type && e.type.defaultProps && (i = e.type.defaultProps), t) a == "key" ? o = t[a] : a == "ref" ? r = t[a] : s[a] = t[a] === void 0 && i != null ? i[a] : t[a];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Oo.call(arguments, 2) : n), wo(e.type, s, o || e.key, r || e.ref, null);
}
function yn(e) {
  function t(n) {
    var o, r;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && o.forEach(function(i) {
        i.__e = !0, na(i);
      });
    }, this.sub = function(a) {
      o.add(a);
      var i = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o && o.delete(a), i && i.call(a);
      };
    }), n.children;
  }
  return t.__c = "__cC" + Bl++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, o) {
    return n.children(o);
  }).contextType = t, t;
}
Oo = mr.slice, Le = { __e: function(e, t, n, o) {
  for (var r, a, i; t = t.__; ) if ((r = t.__c) && !r.__) try {
    if ((a = r.constructor) && a.getDerivedStateFromError != null && (r.setState(a.getDerivedStateFromError(e)), i = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), i = r.__d), i) return r.__E = r;
  } catch (s) {
    e = s;
  }
  throw e;
} }, zl = 0, Fa = function(e) {
  return e != null && e.constructor === void 0;
}, qt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Kt({}, this.state), typeof e == "function" && (e = e(Kt({}, n), this.props)), e && Kt(n, e), e != null && this.__v && (t && this._sb.push(t), na(this));
}, qt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), na(this));
}, qt.prototype.render = Jn, pn = [], Vl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, El = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, br.__r = 0, Hr = Math.random().toString(8), cr = "__d" + Hr, vo = "__a" + Hr, Nl = /(PointerCapture)$|Capture$/i, Oa = 0, ea = os(!1), ta = os(!0), Bl = 0;
var Yl = function(e, t, n, o) {
  var r;
  t[0] = 0;
  for (var a = 1; a < t.length; a++) {
    var i = t[a++], s = t[a] ? (t[0] |= i ? 1 : 2, n[t[a++]]) : t[++a];
    i === 3 ? o[0] = s : i === 4 ? o[1] = Object.assign(o[1] || {}, s) : i === 5 ? (o[1] = o[1] || {})[t[++a]] = s : i === 6 ? o[1][t[++a]] += s + "" : i ? (r = e.apply(s, Yl(e, s, n, ["", null])), o.push(r), s[0] ? t[0] |= 2 : (t[a - 2] = 0, t[a] = r)) : o.push(s);
  }
  return o;
}, rs = /* @__PURE__ */ new Map();
function Af(e) {
  var t = rs.get(this);
  return t || (t = /* @__PURE__ */ new Map(), rs.set(this, t)), (t = Yl(this, t.get(e) || (t.set(e, t = (function(n) {
    for (var o, r, a = 1, i = "", s = "", c = [0], d = function(l) {
      a === 1 && (l || (i = i.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, l, i) : a === 3 && (l || i) ? (c.push(3, l, i), a = 2) : a === 2 && i === "..." && l ? c.push(4, l, 0) : a === 2 && i && !l ? c.push(5, 0, !0, i) : a >= 5 && ((i || !l && a === 5) && (c.push(a, 0, i, r), a = 6), l && (c.push(a, l, 0, r), a = 6)), i = "";
    }, u = 0; u < n.length; u++) {
      u && (a === 1 && d(), d(u));
      for (var p = 0; p < n[u].length; p++) o = n[u][p], a === 1 ? o === "<" ? (d(), c = [c], a = 3) : i += o : a === 4 ? i === "--" && o === ">" ? (a = 1, i = "") : i = o + i[0] : s ? o === s ? s = "" : i += o : o === '"' || o === "'" ? s = o : o === ">" ? (d(), a = 1) : a && (o === "=" ? (a = 5, r = i, i = "") : o === "/" && (a < 5 || n[u][p + 1] === ">") ? (d(), a === 3 && (c = c[0]), a = c, (c = c[0]).push(2, 0, a), a = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (d(), a = 2) : i += o), a === 3 && i === "!--" && (a = 4, c = c[0]);
    }
    return d(), c;
  })(e)), t), arguments, [])).length > 1 ? t : t[0];
}
var y = Af.bind(Yn), sn, Ye, Gr, as, Io = 0, Jl = [], ot = Le, is = ot.__b, ss = ot.__r, ls = ot.diffed, cs = ot.__c, ds = ot.unmount, us = ot.__;
function zn(e, t) {
  ot.__h && ot.__h(Ye, e, Io || t), Io = 0;
  var n = Ye.__H || (Ye.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Ge(e) {
  return Io = 1, Tf(Zl, e);
}
function Tf(e, t, n) {
  var o = zn(sn++, 2);
  if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Zl(void 0, t), function(s) {
    var c = o.__N ? o.__N[0] : o.__[0], d = o.t(c, s);
    c !== d && (o.__N = [d, o.__[1]], o.__c.setState({}));
  }], o.__c = Ye, !Ye.__f)) {
    var r = function(s, c, d) {
      if (!o.__c.__H) return !0;
      var u = !1, p = o.__c.props !== s;
      if (o.__c.__H.__.some(function(f) {
        if (f.__N) {
          u = !0;
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (p = !0);
        }
      }), a) {
        var l = a.call(this, s, c, d);
        return u ? l || p : l;
      }
      return !u || p;
    };
    Ye.__f = !0;
    var a = Ye.shouldComponentUpdate, i = Ye.componentWillUpdate;
    Ye.componentWillUpdate = function(s, c, d) {
      if (this.__e) {
        var u = a;
        a = void 0, r(s, c, d), a = u;
      }
      i && i.call(this, s, c, d);
    }, Ye.shouldComponentUpdate = r;
  }
  return o.__N || o.__;
}
function Ce(e, t) {
  var n = zn(sn++, 3);
  !ot.__s && Wa(n.__H, t) && (n.__ = e, n.u = t, Ye.__H.__h.push(n));
}
function Na(e, t) {
  var n = zn(sn++, 4);
  !ot.__s && Wa(n.__H, t) && (n.__ = e, n.u = t, Ye.__h.push(n));
}
function q(e) {
  return Io = 5, Qt(function() {
    return { current: e };
  }, []);
}
function Qt(e, t) {
  var n = zn(sn++, 7);
  return Wa(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function le(e, t) {
  return Io = 8, Qt(function() {
    return e;
  }, t);
}
function yt(e) {
  var t = Ye.context[e.__c], n = zn(sn++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(Ye)), t.props.value) : e.__;
}
function Ba(e) {
  var t = zn(sn++, 10), n = Ge();
  return t.__ = e, Ye.componentDidCatch || (Ye.componentDidCatch = function(o, r) {
    t.__ && t.__(o, r), n[1](o);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Bt() {
  var e = zn(sn++, 11);
  if (!e.__) {
    for (var t = Ye.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Rf() {
  for (var e; e = Jl.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(dr), t.__h.some(oa), t.__h = [];
    } catch (n) {
      t.__h = [], ot.__e(n, e.__v);
    }
  }
}
ot.__b = function(e) {
  Ye = null, is && is(e);
}, ot.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), us && us(e, t);
}, ot.__r = function(e) {
  ss && ss(e), sn = 0;
  var t = (Ye = e.__c).__H;
  t && (Gr === Ye ? (t.__h = [], Ye.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(dr), t.__h.some(oa), t.__h = [], sn = 0)), Gr = Ye;
}, ot.diffed = function(e) {
  ls && ls(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Jl.push(t) !== 1 && as === ot.requestAnimationFrame || ((as = ot.requestAnimationFrame) || Ff)(Rf)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Gr = Ye = null;
}, ot.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(dr), n.__h = n.__h.filter(function(o) {
        return !o.__ || oa(o);
      });
    } catch (o) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], ot.__e(o, n.__v);
    }
  }), cs && cs(e, t);
}, ot.unmount = function(e) {
  ds && ds(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(o) {
    try {
      dr(o);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && ot.__e(t, n.__v));
};
var ps = typeof requestAnimationFrame == "function";
function Ff(e) {
  var t, n = function() {
    clearTimeout(o), ps && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  ps && (t = requestAnimationFrame(n));
}
function dr(e) {
  var t = Ye, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), Ye = t;
}
function oa(e) {
  var t = Ye;
  e.__c = e.__(), Ye = t;
}
function Wa(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function Zl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Of(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function fs(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
  return !1;
}
function hs(e, t) {
  this.props = e, this.context = t;
}
(hs.prototype = new qt()).isPureReactComponent = !0, hs.prototype.shouldComponentUpdate = function(e, t) {
  return fs(this.props, e) || fs(this.state, t);
};
var gs = Le.__b;
Le.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), gs && gs(e);
};
var zf = Le.__e;
Le.__e = function(e, t, n, o) {
  if (e.then) {
    for (var r, a = t; a = a.__; ) if ((r = a.__c) && r.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k || []), r.__c(e, t);
  }
  zf(e, t, n, o);
};
var ms = Le.unmount;
function Ql(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
    typeof o.__c == "function" && o.__c();
  }), e.__c.__H = null), (e = Of({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
    return Ql(o, t, n);
  })), e;
}
function Pl(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
    return Pl(o, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ur() {
  this.__u = 0, this.o = null, this.__b = null;
}
function ec(e) {
  var t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function nr() {
  this.i = null, this.l = null;
}
Le.unmount = function(e) {
  var t = e.__c;
  t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), ms && ms(e);
}, (Ur.prototype = new qt()).__c = function(e, t) {
  var n = t.__c, o = this;
  o.o == null && (o.o = []), o.o.push(n);
  var r = ec(o.__v), a = !1, i = function() {
    a || o.__z || (a = !0, n.__R = null, r ? r(c) : c());
  };
  n.__R = i;
  var s = n.__P;
  n.__P = null;
  var c = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var d = o.state.__a;
        o.__v.__k[0] = Pl(d, d.__c.__P, d.__c.__O);
      }
      var u;
      for (o.setState({ __a: o.__b = null }); u = o.o.pop(); ) u.__P = s, u.forceUpdate();
    }
  };
  o.__u++ || 32 & t.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(i, i);
}, Ur.prototype.componentWillUnmount = function() {
  this.o = [];
}, Ur.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = Ql(this.__b, n, o.__O = o.__P);
    }
    this.__b = null;
  }
  var r = t.__a && Yn(Jn, null, e.fallback);
  return r && (r.__u &= -33), [Yn(Jn, null, t.__a ? null : e.children), r];
};
var bs = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Vf(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Ef(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    jo(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
    for (var o = t.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: o.__m }, contains: function() {
      return !0;
    }, namespaceURI: n.namespaceURI, insertBefore: function(r, a) {
      this.childNodes.push(r), t.h.insertBefore(r, a);
    }, removeChild: function(r) {
      this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
    } };
  }
  jo(Yn(Vf, { context: t.context }, e.__v), t.v);
}
function to(e, t) {
  var n = Yn(Ef, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(nr.prototype = new qt()).__a = function(e) {
  var t = this, n = ec(t.__v), o = t.l.get(e);
  return o[0]++, function(r) {
    var a = function() {
      t.props.revealOrder ? (o.push(r), bs(t, e, o)) : r();
    };
    n ? n(a) : a();
  };
}, nr.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = At(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, nr.prototype.componentDidUpdate = nr.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    bs(e, n, t);
  });
};
var Nf = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Bf = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Wf = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Hf = /[A-Z0-9]/g, Gf = typeof document < "u", Uf = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
qt.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(qt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var ys = Le.event;
Le.event = function(e) {
  return ys && (e = ys(e)), e.persist = function() {
  }, e.isPropagationStopped = function() {
    return this.cancelBubble;
  }, e.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, e.nativeEvent = e;
};
var Kf = { configurable: !0, get: function() {
  return this.class;
} }, xs = Le.vnode;
Le.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, o = t.type, r = {}, a = o.indexOf("-") == -1;
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || Gf && i === "children" && o === "noscript" || i === "class" || i === "className")) {
        var c = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : c === "translate" && s === "no" ? s = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? i = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Uf(n.type) ? c === "onfocus" ? i = "onfocusin" : c === "onblur" ? i = "onfocusout" : Wf.test(i) && (i = c) : c = i = "oninput" : a && Bf.test(i) ? i = i.replace(Hf, "-$&").toLowerCase() : s === null && (s = void 0), c === "oninput" && r[i = c] && (i = "oninputCapture"), r[i] = s;
      }
    }
    o == "select" && (r.multiple && Array.isArray(r.value) && (r.value = At(n.children).forEach(function(d) {
      d.props.selected = r.value.indexOf(d.props.value) != -1;
    })), r.defaultValue != null && (r.value = At(n.children).forEach(function(d) {
      d.props.selected = r.multiple ? r.defaultValue.indexOf(d.props.value) != -1 : r.defaultValue == d.props.value;
    }))), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Kf)) : n.className && (r.class = r.className = n.className), t.props = r;
  })(e), e.$$typeof = Nf, xs && xs(e);
};
var vs = Le.__r;
Le.__r = function(e) {
  vs && vs(e), e.__c;
};
var ws = Le.diffed;
Le.diffed = function(e) {
  ws && ws(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
function ko(e) {
  return wa(e);
}
function Me(e) {
  return Ro(e);
}
const qf = (async () => {
}).constructor;
function Xf() {
  typeof window < "u" && window.addEventListener("unhandledrejection", (e) => {
    console.error(
      "caught unhandled error in Promise:",
      e.reason?.stack ?? e.reason?.message,
      e
    );
  });
}
function de(e) {
  debugger;
  const t = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);
  if (t == null)
    throw new Error(e);
  {
    const n = new Error(t[2]);
    throw n.name = t[1], n;
  }
}
function Yf(e) {
  return de(
    "ReadOnlyProperty: property " + Mt(e) + " must not be set"
  );
}
function pt(e, t) {
  const n = ne(e, Ie, t), o = ne(e, je, t);
  return [n, n, o, o];
}
const Jf = /^[a-z$_][a-z$_0-9]*$/i;
function Zf(e) {
  return st(e, Jf);
}
const [Ik, Sk, Qf, _k] = /* @__PURE__ */ pt(Zf, "JCL identifier");
function Ha(e) {
  return Ze(e) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(e);
}
const [Pf, Dk, Ln, Lk] = /* @__PURE__ */ pt(Ha, "name");
function tc(e) {
  return Ze(e) && /^[a-zA-Z][a-zA-Z0-9_-]*(\.[a-zA-Z][a-zA-Z0-9_-]*)*$/.test(e);
}
const [Mk, Ak, nc, Tk] = /* @__PURE__ */ pt(tc, "path");
function Mr(e) {
  return Ze(e) && /^[+]?[\d\s()\-.]{7,}$/.test(e) && e.replace(/\D/g, "").length >= 3;
}
const [Rk, Fk, Ok, zk] = /* @__PURE__ */ pt(Mr, "phone number");
function Vk(e) {
  return Ee(e) && (e.indexOf(",") < 0 ? Tn(e) : $e(
    e.replace(/\s*,\s*/g, ",").split(","),
    Tn
  ));
}
const eh = /* @__PURE__ */ new Set([
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
function th(e) {
  return Ze(e) && eh.has(e.toLowerCase());
}
const [nh, Ek, Nk, Bk] = /* @__PURE__ */ pt(th, "ISO 639-1 Language Code"), oh = /^[a-z0-9]+([._+-][a-z0-9]+)*\/[a-z0-9]+([._+-][a-z0-9]+)*(\s*;\s*[a-z0-9-]+=[a-z0-9.+-]+)*$/i;
function So(e) {
  return st(e, oh);
}
const [Wk, Hk, rh, Gk] = /* @__PURE__ */ pt(So, "MIME type"), ah = [
  "application/javascript",
  "application/typescript",
  "application/json",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function Uk(e) {
  return he(e, ah);
}
const ih = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function Kk(e) {
  return he(e, ih);
}
const sh = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/markdown",
  "text/plain"
];
function qk(e) {
  return he(e, sh);
}
const lh = [
  "image/apng",
  "image/avif",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
function Xk(e) {
  return he(e, lh);
}
const ch = new RegExp(
  "^[^\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F-\\x9F\\u2028\\u2029\\uFFF9-\\uFFFB]*$"
);
function Vo(e) {
  return Ze(e) && ch.test(e);
}
function oc(e) {
  return (ko(e) || Vt(e)) && Vt(e.then);
}
const [Yk, Jk, Zk, Qk] = /* @__PURE__ */ pt(oc, "JavaScript Promise or thenable");
function dh(e) {
  return typeof e == "object" && e != null && typeof e.aborted == "boolean" && typeof e.addEventListener == "function";
}
const [uh, Pk, eC, tC] = /* @__PURE__ */ pt(dh, "JavaScript abort signal");
function ph() {
  return typeof window < "u" && "__TAURI_INTERNALS__" in window;
}
function nC() {
  return typeof window < "u" && !ph();
}
async function fh(e = "https://cloudflare.com/cdn-cgi/trace", t = 5e3) {
  return typeof navigator < "u" && !navigator.onLine ? !1 : await rc(e, t);
}
async function rc(e, t = 5e3) {
  Da("server URL", e), Cl("timeout", t);
  const n = new URL(e).origin;
  if (n === window.location.origin)
    return !0;
  const o = new AbortController(), r = setTimeout(
    () => o.abort(),
    t
  );
  try {
    const a = await fetch(n, {
      method: "HEAD",
      signal: o.signal,
      mode: "no-cors",
      cache: "no-cache"
    });
    return clearTimeout(r), a.type === "basic" || a.type === "opaque";
  } catch {
    return clearTimeout(r), !1;
  }
}
async function Et(e, t = {}) {
  Da("resource URL", e), St("option set", t), t = { ...t }, typeof navigator < "u" && !navigator.onLine && de(
    "NotConnected: the browser is not connected"
  );
  const n = Qi("request timeout", t.timeout) ?? 10 * 1e3, o = t.allowRetries === !0, r = Qi("maximum retries", t.maxRetries) ?? 3;
  delete t.timeout, delete t.allowRetries, delete t.maxRetries;
  const a = t.signal;
  function i(c, d) {
    const u = c.headers.get("Retry-After");
    if (u != null) {
      const p = parseInt(u, 10);
      if (!isNaN(p))
        return Math.max(0, p * 1e3);
      const l = Date.parse(u);
      if (!isNaN(l))
        return Math.max(0, l - Date.now());
    }
    return Math.min(30 * 1e3, 500 * 2 ** d);
  }
  let s = 0;
  for (; ; ) {
    const c = new AbortController();
    t.signal = a != null ? AbortSignal.any([c.signal, a]) : c.signal;
    let d = !1;
    const u = setTimeout(() => {
      d = !0, c.abort();
    }, n);
    let p;
    try {
      p = await fetch(e, t), clearTimeout(u);
    } catch (l) {
      clearTimeout(u);
      const f = l?.message ?? "";
      // timeout by fetch or cancellation by internal timer
      (d || f.includes("timeout")) && de("ServerUnreachable: the server is unreachable"), // explicit cancellation
      (l?.name === "AbortError" || f.includes("The user aborted a request")) && de(
        "RequestAborted: request was aborted"
      ), (f.includes("Failed to fetch") || f.includes("CORS")) && de("CORSblocked: cross-origin request blocked"), l?.name === "TypeError" && typeof navigator < "u" && !navigator.onLine && de(
        "NotConnected: the browser is offline"
      ), de("ServerUnreachable: the server is unreachable");
    }
    if (o && s < r && (p.status === 429 || p.status === 503)) {
      await new Promise(
        (l) => setTimeout(l, i(p, s))
      ), s++;
      continue;
    }
    switch (!0) {
      case p.status === 401:
        de("AuthorizationFailure: authorization failed");
      case p.status === 403:
        de("ForbiddenRequest: request is forbidden");
      case p.status === 404:
        de("MissingResource: resource not found");
      case p.status === 408:
        de("RequestTimeout: request timed out");
      case p.status === 429:
        de("RateLimitExceeded: too many requests");
      case p.status === 500:
        de("InternalServerError: internal server error");
      case p.status === 502:
        de("BadGateway: bad gateway");
      case p.status === 503:
        de("ServiceUnavailable: service is currently not available");
      case p.status === 504:
        de("GatewayTimeout: gateway timed out");
      case p.status >= 400:
        de(
          "HTTPError: request failed with status " + p.status
        );
    }
    return p;
  }
}
async function hh(e, t = {}) {
  return await (await Et(e, t)).text();
}
async function gh(e, t = {}) {
  return await (await Et(e, t)).json();
}
async function mh(e, t = {}) {
  return await (await Et(e, t)).arrayBuffer();
}
async function bh(e, t = {}) {
  return await (await Et(e, t)).blob();
}
async function yh(e, t = {}) {
  const n = await (await Et(e, t)).blob();
  return new Promise((o, r) => {
    const a = new FileReader();
    a.onloadend = () => o(a.result), a.onerror = r, a.readAsDataURL(n);
  });
}
async function xh(e, t = {}) {
  const n = await Et(e, t), o = (n.headers.get("content-type") ?? "").split(";")[0].trim();
  switch (!0) {
    case o.startsWith("text/html"):
      return await _i(await n.text());
    case o === "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await Ti(await n.arrayBuffer());
    case o === "application/pdf":
      return await Oi(await n.arrayBuffer());
    case o.startsWith("text/markdown"):
      return await Li(await n.text());
    case o.startsWith("text/"):
    case o.includes("javascript"):
    case o.includes("typescript"):
    case o.includes("json"):
    case o.includes("css"):
    case o.includes("svg"):
    case o.includes("xml"):
      return await n.text();
    default:
      de(`UnsupportedMIMEType: cannot convert content of type "${o}" into plain text`);
  }
}
async function vh(e, t = {}) {
  const n = await Et(e, t), o = (n.headers.get("content-type") ?? "").split(";")[0].trim();
  switch (!0) {
    case o.startsWith("text/html"):
      return await n.text();
    case o === "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await Ri(await n.arrayBuffer());
    case o.startsWith("text/markdown"):
      return await Mi(await n.text());
    default:
      de(`UnsupportedMIMEType: cannot convert content of type "${o}" into HTML`);
  }
}
async function wh(e, t = {}) {
  const n = await Et(e, t), o = (n.headers.get("content-type") ?? "").split(";")[0].trim();
  switch (!0) {
    case o.startsWith("text/html"):
      return await Di(await n.text());
    case o === "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await Fi(await n.arrayBuffer());
    case o.startsWith("text/markdown"):
      return await n.text();
    default:
      de(`UnsupportedMIMEType: cannot convert content of type "${o}" into Markdown`);
  }
}
function ac(e) {
  return ja("HTTP status code", e, 100, 599), ic[e] ?? "";
}
const ic = {
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
}, ge = {
  /**** Configuration ****/
  get Configuration() {
    return {
      ServerChoice: ge._ServerChoice,
      customServer: ge.customServer,
      ServerBlacklist: ge.ServerBlacklist,
      ServerWhitelist: ge.ServerWhitelist,
      ResultBlacklist: ge.ResultBlacklist,
      ResultWhitelist: ge.ResultWhitelist
    };
  },
  set Configuration(e) {
    St("SearXNG configuration", e);
    const {
      ServerChoice: t,
      customServer: n,
      ServerBlacklist: o,
      ServerWhitelist: r,
      ResultBlacklist: a,
      ResultWhitelist: i
    } = e;
    if (Ft("SearXNG server choice", t, ["custom", "public"]), _a("SearXNG custom Server", n), Ht('SearXNG configuration "ServerBlacklist"', o, at), Ht('SearXNG configuration "ServerWhitelist"', r, at), Ht('SearXNG configuration "ResultBlacklist"', a, at), Ht('SearXNG configuration "ResultWhitelist"', i, at), n != null) {
      const { ServerURL: s, Authentication: c, Credentials: d } = n;
      Hn("SearXNG custom server url", s), Ft("SearXNG custom server authentication", c, ["none", "basic", "bearer"]), fn("SearXNG custom server credentials", d);
    }
    ge.ServerChoice = t ?? "public", ge.customServer = n ?? { Authentication: "none" }, ge.ServerBlacklist = o ?? [], ge.ServerWhitelist = r ?? [], ge.ResultBlacklist = a ?? [], ge.ResultWhitelist = i ?? [];
  },
  /**** preserveConfiguration ****/
  preserveConfiguration: function() {
    localStorage["SearXNG-Configuration"] = JSON.stringify(ge.Configuration);
  },
  /**** restoreConfiguration ****/
  restoreConfiguration: function() {
    if (localStorage["SearXNG-Configuration"] != null)
      try {
        const e = JSON.parse(localStorage["SearXNG-Configuration"]);
        ge.Configuration = e;
      } catch (e) {
        console.warn('"SearXNG.restoreConfiguration" failed with ' + e);
      }
  },
  /**** hasPreservedConfiguration ****/
  get hasPreservedConfiguration() {
    return localStorage["SearXNG-Configuration"] != null;
  },
  set hasPreservedConfiguration(e) {
    Yf("SearXNG.hasPreservedConfiguration");
  },
  /**** customServer[URL/Authentication/Credentials] ****/
  _customServer: {
    ServerURL: void 0,
    Authentication: "none",
    Credentials: void 0
  },
  get customServer() {
    return { ...ge._customServer };
  },
  set customServer(e) {
    St("SearXNG custom server setting", e), Hn("SearXNG custom server url", e.ServerURL), Ft("SearXNG custom server authentication", e.Authentication, ["none", "basic", "bearer"]), fn("SearXNG custom server credentials", e.Credentials), ge._customServer = {
      ServerURL: e.ServerURL,
      Authentication: e.Authentication ?? "none",
      Credentials: e.Credentials
    };
  },
  get customServerURL() {
    return ge._customServer.ServerURL;
  },
  set customServerURL(e) {
    Hn("SearXNG custom server url", e), ge._customServer.ServerURL = e;
  },
  get customServerAuthentication() {
    return ge._customServer.Authentication;
  },
  set customServerAuthentication(e) {
    Ft("SearXNG custom server authentication", e, ["none", "basic", "bearer"]), ge._customServer.Authentication = e;
  },
  get customServerCredentials() {
    return ge._customServer.Credentials;
  },
  set customServerCredentials(e) {
    fn("SearXNG custom server credentials", e), ge._customServer.Credentials = e;
  },
  /**** publicServers - fetches the list of registered public SearXNG servers ****/
  publicServers: async function(e = {}) {
    St("option set", e);
    const { ServiceURL: t, Signal: n, ...o } = e;
    Hn("SearXNG service URL", t), uh("fetch abort signal", n);
    let r;
    try {
      if (r = await Et(
        t ?? "https://searx.space/data/instances.json",
        {
          ...o,
          ...n != null ? { signal: n } : {}
        }
      ), r.ok) {
        const i = await r.json();
        return !Me(i) || !Me(i.instances) ? [] : Object.keys(i.instances).filter(ge.ServerIsAcceptable);
      }
    } catch (i) {
      i.name === "AbortError" ? de("Aborted: SearXNG server scan was aborted") : de("InternalError: SearXNG server scan failed with " + i);
    }
    const a = Sr(r.status, 100, 599) ? ac(r.status) : "(unknown)";
    de(
      "InternalError: SearXNG server scan failed with HTTP status " + r.status + " " + a
    );
  },
  /**** ServerBlacklist (for SearXNG servers) ****/
  _ServerBlacklist: {},
  get ServerBlacklist() {
    return Object.keys(ge._ServerBlacklist);
  },
  set ServerBlacklist(e) {
    Ht("SearXNG server blacklist", e, at), ge._ServerBlacklist = {}, (e ?? []).forEach(
      (t) => ge._ServerBlacklist[t] = !0
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
    return Array.from(Object.keys(ge._ServerWhitelist));
  },
  set ServerWhitelist(e) {
    Ht("SearXNG server whitelist", e, at), ge._ServerWhitelist = {}, (e ?? []).forEach(
      (t) => ge._ServerWhitelist[t] = !0
    );
  },
  // note: caller should probably rescan the list of public SearXNG servers
  /**** ServerIsBlacklisted ****/
  ServerIsBlacklisted: function(e) {
    return at(e) && e in ge._ServerBlacklist;
  },
  /**** ServerIsWhitelisted ****/
  ServerIsWhitelisted: function(e) {
    return at(e) && e in ge._ServerWhitelist;
  },
  /**** ServerIsAcceptable ****/
  ServerIsAcceptable: function(e) {
    return at(e) && (e.startsWith("https://") || e in ge._ServerWhitelist) && !(e in ge._ServerBlacklist);
  },
  /**** ServerChoice ****/
  _ServerChoice: "public",
  get ServerChoice() {
    return ge._ServerChoice;
  },
  set ServerChoice(e) {
    _n("SearXNG server choice setting", e, ["public", "custom"]), ge._ServerChoice = e;
  },
  /**** nextServer ****/
  _publicServers: [],
  nextServer: async function() {
    if (ge._ServerChoice === "custom")
      return ge._customServer.ServerURL == null && de(
        "MissingCustomServer: custom SearXNG server is missing"
      ), ge.customServer;
    {
      let e = ge._publicServers;
      if (e.length === 0 && (e = ge._publicServers = await ge.publicServers()), e.length === 0)
        de(
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
    ln("search phrase", e), St("search options", t);
    const {
      ServerURL: n,
      ServerAuthentication: o,
      ServerCredentials: r,
      language: a,
      categories: i,
      num_results: s
    } = t;
    Hn("SearXNG server URL", n), Ft("SearXNG server authentication", o, ["none", "basic", "bearer"]), fn("SearXNG server credentials", r), nh("SearXNG query language", a), Ft("SearXNG query categories", i, ["general"]), Dr("SearXNG query result limit", s);
    const c = n == null ? await ge.nextServer() : {
      ServerURL: n,
      Authentication: o ?? "none",
      Credentials: r
    };
    c.ServerURL == null && de(
      "MissingSearXNGServer: no SearXNG server given"
    ), c.Authentication !== "none" && c.Credentials == null && de(
      "MissingCredentials: no SearXNG server credentials given"
    );
    const d = {};
    if (c.Authentication !== "none") {
      const p = new Headers();
      p.set("Authorization", `${nv(c.Authentication)} ${c.Credentials}`), d.headers = p;
    }
    e = e.trim(), e === "" && de(
      "EmptyArgument: the given search phrase is empty"
    );
    const u = new URLSearchParams({
      q: e,
      language: a ?? "en",
      format: "html",
      categories: i ?? "general",
      num_results: "" + (s ?? 20)
    });
    try {
      const l = await (await Et(
        `${c.ServerURL}/search?${u}`,
        d
      )).text();
      return Array.from(l.matchAll(/<h3><a href="([^"]+)"/g)).map((g) => g[1]).filter((g) => g != null && g.trim() !== "").filter(ge.ResultIsAcceptable);
    } catch (p) {
      [
        "ServerUnreachable",
        "AuthorizationFailure",
        "ForbiddenRequest",
        "InternalServerError"
      ].includes(p.name) ? (ge.ServerBlacklist = [...ge.ServerBlacklist, c.ServerURL], console.warn("SearXNG search failed with", p, `

>>>> server was blacklisted
`)) : console.warn("SearXNG search failed with", p);
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
    return Object.keys(ge._ResultBlacklist);
  },
  set ResultBlacklist(e) {
    Ht("SearXNG result blacklist", e, at), ge._ResultBlacklist = {}, (e ?? []).forEach(
      (t) => ge._ResultBlacklist[ge._withoutQueryString(t)] = !0
    );
  },
  /**** ResultWhitelist (for query results) ****/
  _ResultWhitelist: {},
  get ResultWhitelist() {
    return Object.keys(ge._ResultWhitelist);
  },
  set ResultWhitelist(e) {
    Ht("SearXNG result whitelist", e, at), ge._ResultWhitelist = {}, (e ?? []).forEach(
      (t) => ge._ResultWhitelist[ge._withoutQueryString(t)] = !0
    );
  },
  /**** ResultIsBlacklisted ****/
  ResultIsBlacklisted: function(e) {
    return at(e) && ge._withoutQueryString(e) in ge._ResultBlacklist;
  },
  /**** ResultIsWhitelisted ****/
  ResultIsWhitelisted: function(e) {
    return at(e) && ge._withoutQueryString(e) in ge._ResultWhitelist;
  },
  /**** ResultIsAcceptable ****/
  ResultIsAcceptable: function(e) {
    return !at(e) || ge.ResultIsBlacklisted(e) ? !1 : Object.keys(ge._ResultWhitelist).length === 0 || ge.ResultIsWhitelisted(e);
  }
}, oC = {
  InternetIsAvailable: fh,
  ServerIsReachable: rc,
  fetched: Et,
  fetchedText: hh,
  fetchedJSON: gh,
  fetchedBinary: mh,
  fetchedBlob: bh,
  fetchedDataURL: yh,
  fetchedAsText: xh,
  fetchedAsHTML: vh,
  fetchedAsMarkdown: wh,
  DescriptionOfHTTPStatus: ac,
  HTTPMessageForStatus: ic,
  SearXNG: ge
}, Mn = /* @__PURE__ */ Symbol("normalizedName"), yr = /* @__PURE__ */ Symbol("L10nDictionary"), kh = "/", xr = kh + "icons/", wt = { Placeholder: "(empty)", disabled: !1 }, Ch = { Placeholder: "(no Selection)", disabled: !0 }, $h = { Placeholder: "(mixed Values)", disabled: !1 };
function Je(e) {
  return e === wt || e === Ch || e === $h;
}
function lt(e, t, n) {
  return Je(e) ? {
    actualValue: void 0,
    actualPlaceholder: e === wt ? n ?? e.Placeholder : e.Placeholder,
    actualDisabling: t || e.disabled
  } : { actualValue: e, actualPlaceholder: n, actualDisabling: t };
}
const xt = "-webkit-mask-size:contain; mask-size:contain; -webkit-mask-position:center center; mask-position:center center; -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;";
function no(e, t = 2) {
  const n = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='${t}' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='${e}'/%3E%3C/svg%3E")`;
  return `-webkit-mask-image:${n}; mask-image:${n};`;
}
const Eo = no("m6 9 6 6 6-6"), jh = no("m18 15-6-6-6 6"), Ga = no("m15 18-6-6 6-6"), No = no("m9 18 6-6-6-6"), Ih = no("M20 6 9 17l-5-5"), Sh = no("M18 6 6 18M6 6l12 12");
function _o(e) {
  return an(e);
}
const [vr, rC, aC, iC] = /* @__PURE__ */ pt(_o, "JCL coordinate");
function Do(e) {
  return an(e) && e >= 0;
}
const [Lt, sC, lC, cC] = /* @__PURE__ */ pt(Do, "JCL dimension");
function _h(e) {
  return Me(e) && _o(e.x) && _o(e.y);
}
const [dC, uC, pC, fC] = /* @__PURE__ */ pt(_h, "JCL position");
function Dh(e) {
  return Me(e) && Do(e.Width) && Do(e.Height);
}
const [hC, gC, mC, bC] = /* @__PURE__ */ pt(Dh, "JCL size");
function Lh(e) {
  return Me(e) && _o(e.x) && Do(e.Width) && _o(e.y) && Do(e.Height);
}
const [yC, xC, vC, wC] = /* @__PURE__ */ pt(Lh, "JCL geometry"), kC = Fa;
function xn(e) {
  return Me(e) && "current" in e;
}
const [CC, $C, Ar, jC] = /* @__PURE__ */ pt(xn, "preact component reference");
function oo(e) {
  return new RegExp("^(?:" + e + ")$");
}
function Mh(e) {
  return Ln("name", e), Xt(e);
}
function Xt(e) {
  return e.replaceAll(".", "-");
}
function Tt(e) {
  let t = e.replace(/:.*$/, "").trim(), n = e.replace(/^[^:]*:/, "").trim();
  const o = /^[-]+$/.test(n), r = n[0] === "-";
  return t === e && (t = t.replace(/^-/, "")), r && (n = n.replace(/^-/, "")), { Value: t, Label: n, disabled: r, isRuler: o };
}
function K(e) {
  St("PropSet", e);
  const t = {};
  for (const o of Object.keys(e))
    t[Kr(o)] = e[o];
  t.children = At(e.children);
  const n = {};
  for (const o of Object.keys(t))
    o !== "children" && o !== "RestProps" && (n[o] = t[o]);
  return t.RestProps = n, new Proxy(t, {
    get(o, r) {
      if (typeof r == "symbol")
        return o[r];
      switch (!0) {
        case r === "children":
          return [...o.children];
        // was normalised into an array
        case r === "RestProps":
          return n;
        // as a reference (to be modified externally)
        default: {
          const a = Kr(r);
          return delete o.RestProps[a], o[a];
        }
      }
    },
    set() {
      de('TypeError: "PropSet" is read-only');
    },
    deleteProperty() {
      de('TypeError: "PropSet" is read-only');
    },
    defineProperty() {
      de('TypeError: "PropSet" is read-only');
    },
    has(o, r) {
      if (typeof r == "symbol")
        return r in o;
      switch (!0) {
        case r === "children":
          return "children" in o;
        case r === "RestProps":
          return "RestProps" in o;
        default:
          return Kr(r) in o;
      }
    },
    ownKeys(o) {
      return Reflect.ownKeys(o);
    },
    getOwnPropertyDescriptor(o, r) {
      const a = Object.getOwnPropertyDescriptor(o, r);
      return a != null && (a.writable = !1, a.configurable = !0), a;
    }
  });
}
function Kr(e) {
  return e.replace(/[-_]/g, "").trim().toLowerCase();
}
function V(e, t) {
  if (Zt("Validator", t), t(e) === !0)
    return e;
}
function J(e) {
  switch (!0) {
    case Jt(e):
      return e;
    case e === "false":
      return !1;
    case e === "true":
      return !0;
  }
}
function qe(e) {
  if (ut(e) || Ze(e) && (e = parseFloat(e), !isNaN(e)))
    return e;
}
function rn(e, t, n, o, r) {
  return Bo(
    e,
    (a) => To(a, t, n, o, r)
  );
}
function IC(e) {
  return Bo(e, Pn);
}
function wr(e, t, n) {
  return Bo(
    e,
    (o) => Sr(o, t, n)
  );
}
function ke(e) {
  return Bo(e, hn);
}
function bn(e) {
  return Bo(e, ya);
}
function Rn(e) {
  return V(e, Ze);
}
function SC(e, t) {
  return V(e, (n) => st(n, t));
}
function ae(e) {
  return V(e, mn);
}
function D(e) {
  return V(e, Ee);
}
function T(e) {
  return V(e, Vt);
}
function Dt(e) {
  return V(e, An);
}
function _C(e) {
  return V(e, Tn);
}
function DC(e) {
  return V(e, Mr);
}
function Vn(e) {
  return V(e, at);
}
function LC(e) {
  return V(e, Ha);
}
function MC(e) {
  return V(e, (t) => Ha(t) || hn(t));
}
function AC(e) {
  return V(e, tc);
}
function Te(e) {
  Qf("Identifier", e), de("MissingArgument: no " + Mt(e) + " given");
}
function Bo(e, t) {
  if (t(e) === !0 || Ze(e) && (e = parseFloat(e), t(e) === !0))
    return e;
}
const sc = [
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
], lc = ["--jcl-border-radius"], cc = [
  "--jcl-font",
  "--jcl-serif-font",
  "--jcl-sans-serif-font",
  "--jcl-monospace-font"
], TC = [
  ...sc,
  ...lc,
  ...cc
];
function Ah(e) {
  return typeof e != "string" ? !1 : typeof CSS > "u" ? !0 : CSS.supports("color", e);
}
function Th(e) {
  return typeof e != "string" ? !1 : typeof CSS > "u" ? !0 : CSS.supports("border-radius", e);
}
function ra(e) {
  if (!Me(e))
    return !1;
  const t = (n, o) => e[n] === void 0 || o(e[n]);
  return sc.every((n) => t(n, Ah)) && lc.every((n) => t(n, Th)) && cc.every((n) => t(n, Ze));
}
const [RC, FC, OC, zC] = /* @__PURE__ */ pt(ra, "JCL swatch");
function Rh(e) {
  return Me(e) && ra(e.light) && ra(e.dark);
}
const [Fh, VC, Oh, EC] = /* @__PURE__ */ pt(Rh, "set of JCL swatches");
function Wo(e, t) {
  if (Ft("UI theme", e, [...fc]), Fh("set of UI swatches", t), e == null && (e = "light"), t == null)
    return "";
  e === "auto" && (e = Ut("(prefers-color-scheme: dark)") ? "dark" : "light");
  const n = t[e];
  return n == null ? "" : Object.entries(n).filter(([r]) => /^--[-a-zA-Z0-9_]+$/.test(r)).map(([r, a]) => `${r}:${String(a).replace(/[;}]/g, "")}`).join(";") + ";";
}
const zh = ["ltr", "rtl"];
function dc(e) {
  return Ze(e) && e.toLowerCase() in pc;
}
const [NC, BC, ro, WC] = /* @__PURE__ */ pt(dc, "supported locale"), Vh = /* @__PURE__ */ new Set([
  "ar",
  // Arabic
  "he",
  // Hebrew
  "fa"
  // Persian / Farsi
]);
function uc(e) {
  ro("Locale", e);
  const t = e.toLowerCase().replace(/-.*$/, "");
  return Vh.has(t) ? "rtl" : "ltr";
}
const Eh = {
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
}, Nh = /^[a-z]{2}$/i;
function Bh(e) {
  return Sa("ISO Country Code", e, Nh), [...e.toUpperCase()].map(
    (t) => String.fromCodePoint(t.charCodeAt(0) + 127397)
  ).join("");
}
function HC(e) {
  ro("Locale", e), e = e.toLowerCase();
  const t = Ua(Eh, e);
  return t != null ? Bh(t) : "🏳";
}
function Ua(e, t) {
  return e[t] ?? e[t.split("-")[0]];
}
const pc = {
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
function GC(e) {
  return ro("Locale", e), e = e.toLowerCase(), Ua(pc, e) ?? e;
}
const Wh = {
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
function Hh(e) {
  return e = e.toLowerCase(), Ua(Wh, e) ?? "USD";
}
function Tr(e) {
  const t = /* @__PURE__ */ new Map();
  return (n, o) => {
    const r = n + "|" + JSON.stringify(o);
    let a = t.get(r);
    return a == null && t.set(r, a = new e(n, o)), a;
  };
}
const Gh = Tr(Intl.PluralRules), ks = Tr(Intl.NumberFormat), Uh = Tr(Intl.DateTimeFormat), Kh = Tr(Intl.RelativeTimeFormat);
function qh(e, t) {
  return e.replace(
    /\{\{(\w+)\}\}/g,
    (n, o) => t[o] != null ? String(t[o]) : n
    // keep {{Key}} if variable is missing
  );
}
const Ka = {}, Xh = /^[^\x00-\x1F\x7F\x80-\x9F]+$/;
function or(e) {
  return Ze(e) && Xh.test(e);
}
function Yh(e) {
  return Me(e) ? Object.entries(e).every(([t, n]) => or(t) && (or(n) || Me(n) && Object.entries(n).every(([o, r]) => or(o) && or(r)))) : !1;
}
const [UC, KC, Jh, qC] = /* @__PURE__ */ pt(Yh, "localization dictionary");
function Zh(e) {
  const t = Object.create(e);
  for (const n in t)
    t[n] = Object.create(t[n]);
  return t;
}
function kr(e, t, n = Ka) {
  ro("Locale", e), Jh("Dictionary", t), e = e.toLowerCase(), n[e] == null ? n[e] = { ...t } : Object.assign(n[e], t);
}
function aa(e, t, n = Ka) {
  ln("localization key", e), ro("locale", t), t = t.toLowerCase();
  let o = n[t]?.[e];
  if (o != null)
    return o;
  const r = t.split("-");
  for (; r.length > 1; )
    if (r.pop(), o = n[r.join("-")]?.[e], o != null)
      return o;
  if (t !== "en" && (o = n.en?.[e], o != null))
    return o;
}
const fc = ["auto", "light", "dark"], Qh = ["coarse", "fine"], Ph = ["none", "hover"], eg = ["reduced"], tg = ["less", "more"];
function ng(e) {
  if (typeof e != "string")
    return "en";
  let t = e.toLowerCase();
  for (; ; ) {
    if (dc(t))
      return t;
    const n = t.lastIndexOf("-");
    if (n < 0)
      break;
    t = t.slice(0, n);
  }
  return "en";
}
const og = {
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
function rg() {
  const e = ng(
    typeof navigator < "u" ? navigator.language : "en"
  );
  return {
    Theme: "auto",
    // which means: "use OS setting"
    SwatchSet: structuredClone(og),
    PointerAccuracy: Ut("(pointer: coarse)") ? "coarse" : "fine",
    HoverCapability: Ut("(hover: none)") ? "none" : "hover",
    preferredMotion: Ut("(prefers-reduced-motion: reduce)") ? "reduced" : void 0,
    preferredContrast: Ut("(prefers-contrast: more)") ? "more" : Ut("(prefers-contrast: less)") ? "less" : void 0,
    Locale: e,
    Direction: uc(e),
    TooltipDelay: 600,
    [yr]: Ka
  };
}
const Rr = /* @__PURE__ */ rg(), jt = /* @__PURE__ */ yn(void 0);
function Ho(e) {
  const [t, n] = Ge(e.Theme), [o, r] = Ge(e.SwatchSet), [a, i] = Ge(e.PointerAccuracy), [s, c] = Ge(e.HoverCapability), [d, u] = Ge(e.preferredMotion), [p, l] = Ge(e.preferredContrast), [f, h] = Ge(e.Locale), [g, b] = Ge(e.Direction), [m, v] = Ge(e.TooltipDelay), [C, S] = Ge(
    Zh(e[yr])
  );
  function j(N) {
    _n("UI theme", N, [...fc]), n(N);
  }
  function x(N) {
    Oh("UI swatch set", N), r(N);
  }
  function w(N) {
    _n("UI pointer accuracy", N, [...Qh]), i(N);
  }
  function R(N) {
    _n("UI hover capability", N, [...Ph]), c(N);
  }
  function L(N) {
    Ft("preferred UI motion", N, [...eg]), u(N);
  }
  function $(N) {
    Ft("preferred UI contrast", N, [...tg]), l(N);
  }
  function I(N) {
    ro("Locale", N), h(N);
  }
  function M(N) {
    _n("text direction", N, [...zh]), b(N);
  }
  function _(N) {
    qn("tooltip delay", N), v(N);
  }
  function z(N, Y) {
    kr(N, Y, C), S({ ...C });
  }
  return Qt(() => ({
    Theme: t,
    setTheme: j,
    SwatchSet: o,
    setSwatchSet: x,
    PointerAccuracy: a,
    setPointerAccuracy: w,
    HoverCapability: s,
    setHoverCapability: R,
    preferredMotion: d,
    setPreferredMotion: L,
    preferredContrast: p,
    setPreferredContrast: $,
    Locale: f,
    setLocale: I,
    Direction: g,
    setDirection: M,
    TooltipDelay: m,
    setTooltipDelay: _,
    [yr]: C,
    registerL10n: z
  }), [
    t,
    o,
    a,
    s,
    d,
    p,
    f,
    g,
    m,
    C
  ]);
}
const ag = /* @__PURE__ */ Object.create(null);
function gt(e) {
  return ln("module specifier", e), ag[e] ??= import(e);
}
function Go(e) {
  let t;
  return () => t ??= e();
}
const Cs = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap();
function ao(e) {
  Zt("library loader", e);
  const [t, n] = Ge(rr.get(e));
  switch (Ce(() => {
    if (rr.get(e) === "loaded")
      return;
    let o = !1, r = Cs.get(e);
    return r == null && (r = e(), Cs.set(e, r)), r.then(() => {
      rr.set(e, "loaded"), o || n("loaded");
    }, (a) => {
      rr.set(e, a), o || n(a);
    }), () => {
      o = !0;
    };
  }, []), !0) {
    case t == null:
      return !1;
    case t === "loaded":
      return !0;
    default:
      de(
        "LibraryNotLoadable: a required library could not be loaded, reason: " + (t?.message ?? t)
      );
  }
}
function ig() {
  const [e, t] = Ge(
    // SSR-ready
    () => typeof navigator < "u" ? navigator.onLine : !0
  );
  return Ce(() => {
    const n = new AbortController(), o = () => t(!0), r = () => t(!1);
    return window.addEventListener("online", o, { signal: n.signal }), window.addEventListener("offline", r, { signal: n.signal }), () => n.abort();
  }, []), e;
}
function sg() {
  const [e, t] = Ge(() => ({
    // SSR-ready
    Width: typeof window < "u" ? window.innerWidth : 0,
    Height: typeof window < "u" ? window.innerHeight : 0
  })), n = q(0), o = le(() => {
    cancelAnimationFrame(n.current), n.current = requestAnimationFrame(() => {
      t({ Width: window.innerWidth, Height: window.innerHeight });
    });
  }, []);
  return Ce(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o), cancelAnimationFrame(n.current);
  }), [o]), e;
}
function ft() {
  const [e, t] = Ge({});
  return le(() => t({}), []);
}
function Fr() {
  const e = yt(jt);
  return e == null && de(
    'InvalidContext: "useCustomization" must only be used inside a "JCL_Applet", "JCL_Overlay", "JCL_Dialog" or "JCL_Customizable"'
  ), e;
}
function lg() {
  return qa(Fr());
}
function qa(e) {
  const { Locale: t, Direction: n, [yr]: o } = e, r = Hh(t);
  function a(u, p, l) {
    const f = aa(u, t, o);
    if (f == null)
      return u;
    let h;
    if (typeof f == "string")
      h = f;
    else {
      const g = Gh(t).select(l ?? 0);
      h = f[g] ?? f.other ?? u;
    }
    return p == null ? h : qh(h, p);
  }
  function i(u, p) {
    return ks(t, p).format(u);
  }
  function s(u, p) {
    return Uh(t, p).format(u);
  }
  function c(u, p, l) {
    return Kh(t, l).format(u, p);
  }
  function d(u, p) {
    return ks(t, {
      style: "currency",
      currency: r,
      ...p
    }).format(u);
  }
  return {
    Locale: t,
    Direction: n,
    Currency: r,
    localized: a,
    formattedNumber: i,
    formattedDate: s,
    formattedRelativeDate: c,
    formattedCurrency: d
  };
}
function cg(e = {}) {
  !Vt(e) && !Me(e) && de(
    "InvalidArgument:the given initial configuration is neither a plain object nor a function"
  );
  const t = q(void 0);
  t.current == null && (Vt(e) && (e = Ke(
    'component callback "initialConfiguration"',
    e
  ), Me(e) || de(
    "InvalidArgument:the result of the initial configuration callback is not a plain object"
  )), t.current = { ...e });
  const n = le((o) => {
    if (_a("configuration change set", o), o != null)
      for (const [r, a] of Object.entries(o))
        a === void 0 ? delete t.current[r] : Me(a) ? Me(t.current[r]) ? Object.assign(t.current[r], a) : t.current[r] = { ...a } : de(
          "InvalidArgument: configuration[" + Mt(r) + "] is no plain JavaScript object"
        );
  }, []);
  return [t.current, n];
}
let Gn;
function hc(e) {
  typeof document > "u" || (Gn == null && (Gn = document.createElement("style"), document.head.appendChild(Gn)), Gn.textContent = "* { cursor:" + e + " !important }");
}
function dg(e) {
  if (typeof document > "u")
    return;
  Lo();
  const t = getComputedStyle(e).cursor;
  t === "" || t === "auto" || hc(t);
}
function Lo() {
  Gn?.remove(), Gn = void 0;
}
function Xa(e) {
  e != null && !Ee(e) && !(e instanceof HTMLElement) && !Vt(e) && de(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  );
}
function Qn(e, t) {
  t != null && !Ee(t) && !(t instanceof HTMLElement) && de(
    `InvalidArgument: "${e}" is neither a CSS selector nor an HTML element`
  );
}
function Ya(e, t) {
  switch (!0) {
    case t == null:
      return e.parentElement ?? void 0;
    case t === "self":
      return e;
    case Ee(t):
      return e.parentElement?.closest(t);
    case Vt(t): {
      const n = t();
      return n instanceof HTMLElement ? n : void 0;
    }
    default:
      return t;
  }
}
function Ja(e) {
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
function Fn({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  onDragStart: r,
  onDragContinuation: a,
  onDragFinish: i,
  onDragCancellation: s
}) {
  Ar("ViewRef", e), Xa(t), Qn("onlyFrom", n), Qn("neverFrom", o), Oe('"onDragStart" callback', r), Oe('"onDragContinuation" callback', a), Oe('"onDragFinish" callback', i), Oe('"onDragCancellation" callback', s);
  const c = r != null && a != null && i != null && s != null, d = q();
  d.current = { onDragStart: r, onDragContinuation: a, onDragFinish: i, onDragCancellation: s };
  const u = q(!1);
  u.current = c;
  const p = q(), l = q(), f = q(!1);
  Ce(() => {
    e.current != null && (p.current = Ya(e.current, t));
  }, [
    e.current
    /* Container */
  ]), Ce(() => () => {
    window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", m), window.removeEventListener("blur", v), f.current && (f.current = !1, Lo());
  }, []);
  const h = le((x) => {
    if (!(x.target instanceof HTMLElement) || !Ja(x) || !c || p.current == null || n != null && !j(x.target, n) || o != null && j(x.target, o))
      return;
    window.addEventListener("pointermove", g), window.addEventListener("pointerup", b), window.addEventListener("pointercancel", m), window.addEventListener("blur", v), e.current.setPointerCapture?.(x.pointerId), dg(x.target);
    const w = p.current, R = w.getBoundingClientRect(), L = x.clientX - R.left + w.scrollLeft, $ = x.clientY - R.top + w.scrollTop;
    l.current = { x: L, y: $ }, f.current = !0, E('useDragging callback "onDragStart"', d.current?.onDragStart, 0, 0, L, $, x);
  }, [e, c, n, o]), g = le((x) => {
    if (f.current !== !1) {
      if (x.pointerType === "mouse" && x.buttons === 0) {
        C(x, !1);
        return;
      }
      p.current != null && E('useDragging callback "onDragContinuation"', d.current?.onDragContinuation, ...S(x));
    }
  }, []), b = le((x) => {
    C(x, !1);
  }, []), m = le((x) => {
    C(x, !0);
  }, []), v = le(() => {
    C(null, !0);
  }, []), C = le((x, w) => {
    if (f.current !== !1) {
      if (f.current = !1, Lo(), x != null && e.current?.hasPointerCapture?.(x.pointerId) && e.current.releasePointerCapture(x.pointerId), window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", m), window.removeEventListener("blur", v), w) {
        E('useDragging callback "onDragCancellation"', d.current?.onDragCancellation, 0, 0, l.current.x, l.current.y, x);
        return;
      }
      p.current != null && u.current && E('useDragging callback "onDragFinish"', d.current?.onDragFinish, ...S(x));
    }
  }, []);
  function S(x) {
    const w = p.current;
    if (w == null)
      return [0, 0, 0, 0, x];
    const R = w.getBoundingClientRect(), L = x.clientX - R.left + w.scrollLeft, $ = x.clientY - R.top + w.scrollTop, I = L - l.current.x, M = $ - l.current.y;
    return [I, M, L, $, x];
  }
  function j(x, w) {
    switch (!0) {
      // matching element (e.g. the title
      case w == null:
        return !0;
      case typeof w == "string":
        return x.closest(w) != null;
      default:
        return w.contains(x);
    }
  }
  return c ? h : void 0;
}
function io({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  Threshold: r = 4,
  onClick: a,
  onDragStart: i,
  onDragContinuation: s,
  onDragFinish: c,
  onDragCancellation: d
}) {
  Ar("ViewRef", e), Xa(t), Qn("onlyFrom", n), Qn("neverFrom", o), Dr("drag threshold", r), Oe('"onClick" callback', a), Oe('"onDragStart" callback', i), Oe('"onDragContinuation" callback', s), Oe('"onDragFinish" callback', c), Oe('"onDragCancellation" callback', d);
  const u = a != null, p = i != null && s != null && c != null && d != null, l = u || p, f = q();
  f.current = { onClick: a, onDragStart: i, onDragContinuation: s, onDragFinish: c, onDragCancellation: d };
  const h = q(!1);
  h.current = u;
  const g = q(!1);
  g.current = p;
  const b = q(r);
  b.current = r;
  const m = q(), v = q(), C = q(), S = q(!1), j = q(!1);
  Ce(() => {
    e.current != null && (m.current = Ya(e.current, t));
  }, [
    e.current
    /* Container */
  ]), Ce(() => () => {
    window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", L);
  }, []);
  const x = le((_) => {
    if (!(_.target instanceof HTMLElement) || !Ja(_) || !l || m.current == null || n != null && !M(_.target, n) || o != null && M(_.target, o))
      return;
    window.addEventListener("pointermove", w), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", L), e.current.setPointerCapture?.(_.pointerId);
    const z = m.current, N = z.getBoundingClientRect(), Y = _.clientX - N.left + z.scrollLeft, Q = _.clientY - N.top + z.scrollTop;
    v.current = { x: Y, y: Q }, C.current = _, S.current = !0, j.current = !1;
  }, [e, l, n, o]), w = le((_) => {
    if (S.current === !1 || m.current == null)
      return;
    const [z, N, Y, Q] = I(_);
    if (!j.current) {
      if (Math.sqrt(z * z + N * N) < b.current)
        return;
      j.current = !0, g.current && E('useClickDragging callback "onDragStart"', f.current?.onDragStart, 0, 0, v.current.x, v.current.y, C.current);
    }
    g.current && E('useClickDragging callback "onDragContinuation"', f.current?.onDragContinuation, z, N, Y, Q, _);
  }, []), R = le((_) => {
    $(_, !1);
  }, []), L = le((_) => {
    $(_, !0);
  }, []), $ = le((_, z) => {
    if (S.current !== !1) {
      if (S.current = !1, e.current?.hasPointerCapture?.(_.pointerId) && e.current.releasePointerCapture(_.pointerId), window.removeEventListener("pointermove", w), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", L), z) {
        j.current && g.current && E('useClickDragging callback "onDragCancellation"', f.current?.onDragCancellation, 0, 0, v.current.x, v.current.y, _), j.current = !1;
        return;
      }
      if (j.current)
        g.current && E('useClickDragging callback "onDragFinish"', f.current?.onDragFinish, ...I(_));
      else if (h.current && m.current != null) {
        const N = m.current, Y = N.getBoundingClientRect(), Q = _.clientX - Y.left + N.scrollLeft, fe = _.clientY - Y.top + N.scrollTop;
        E('useClickDragging callback "onClick"', f.current?.onClick, Q, fe, _);
      }
      j.current = !1;
    }
  }, []);
  function I(_) {
    const z = m.current;
    if (z == null)
      return [0, 0, 0, 0, _];
    const N = z.getBoundingClientRect(), Y = _.clientX - N.left + z.scrollLeft, Q = _.clientY - N.top + z.scrollTop, fe = Y - v.current.x, P = Q - v.current.y;
    return [fe, P, Y, Q, _];
  }
  function M(_, z) {
    switch (!0) {
      case z == null:
        return !0;
      case typeof z == "string":
        return _.matches(z);
      default:
        return _ === z;
    }
  }
  return l ? x : void 0;
}
const Za = [
  "none",
  "copy",
  "copyLink",
  "copyMove",
  "link",
  "linkMove",
  "move",
  "all"
];
function ug(e, t, { Effect: n, draggedGhost: o, onDropped: r } = {}) {
  Ia("Data", e), rh("MIMEType", t), Ft("Effect", n, [...Za]), Oe('"draggedGhost" callback', o), Oe('"onDropped" callback', r);
  const a = q(e);
  a.current = e;
  const i = q(t);
  i.current = t;
  const s = q();
  s.current = n;
  const c = q({});
  c.current = { draggedGhost: o, onDropped: r };
  const d = le((p) => {
    const l = p.dataTransfer;
    if (l == null)
      return;
    l.setData(i.current, a.current), s.current != null && (l.effectAllowed = s.current);
    const f = Ke('useDataDragSupport callback "draggedGhost"', c.current.draggedGhost, p) ?? null;
    f != null && (document.body.appendChild(f), l.setDragImage(f, f.offsetWidth / 2, f.offsetHeight / 2), requestAnimationFrame(() => f.remove()));
  }, []), u = le((p) => {
    const l = p.dataTransfer?.dropEffect ?? "none";
    l !== "none" && E('useDataDragSupport callback "onDropped"', c.current.onDropped, l, p);
  }, []);
  return { draggable: !0, onDragStart: d, onDragEnd: u };
}
function gc(e) {
  const { Name: t, DragDepth: n, setIsOver: o, accepts: r, CallbacksOf: a, processedDrop: i } = e;
  function s(p) {
    r(p) && (p.preventDefault(), E(t + ' callback "onDragOver"', a().onDragOver, p));
  }
  function c(p) {
    r(p) && (p.preventDefault(), ++n.current === 1 && (o(!0), E(t + ' callback "onDragEnter"', a().onDragEnter, p)));
  }
  function d(p) {
    n.current > 0 && --n.current === 0 && (o(!1), E(t + ' callback "onDragLeave"', a().onDragLeave, p));
  }
  function u(p) {
    const l = i(p);
    l != null && (p.preventDefault(), n.current = 0, o(!1), E(t + ' callback "onDrop"', a().onDrop, ...l, p));
  }
  return { handleDragEnter: c, handleDragOver: s, handleDragLeave: d, handleDrop: u };
}
function pg(e, {
  onDragEnter: t,
  onDragOver: n,
  onDragLeave: o,
  onDrop: r
} = {}) {
  switch (!0) {
    case So(e):
      e = [e];
      break;
    case _r(e):
      for (const h of e)
        So(h) || de(
          'InvalidArgument: each entry in "MIMETypes" must be a non-empty string without line breaks'
        );
      break;
    default:
      de(
        'InvalidArgument: "MIMETypes" must be a MIME type string or a non-empty array of MIME type strings'
      );
  }
  Oe('"onDragEnter" callback', t), Oe('"onDragOver" callback', n), Oe('"onDragLeave" callback', o), Oe('"onDrop" callback', r);
  const [a, i] = Ge(!1), s = q(0), c = q({});
  c.current = { onDragEnter: t, onDragOver: n, onDragLeave: o, onDrop: r };
  const d = e.join(","), { handleDragEnter: u, handleDragOver: p, handleDragLeave: l, handleDrop: f } = Qt(() => {
    function h(g) {
      return g == null ? !1 : [...g.types].some((b) => e.includes(b));
    }
    return gc({
      Name: "useDataDropSupport",
      DragDepth: s,
      setIsOver: i,
      accepts: (g) => h(g.dataTransfer),
      CallbacksOf: () => c.current,
      processedDrop: (g) => h(g.dataTransfer) ? [g.dataTransfer] : void 0
    });
  }, [d]);
  return {
    isOver: a,
    onDragEnter: u,
    onDragOver: p,
    onDragLeave: l,
    onDrop: f
  };
}
const fg = ["move", "copy", "alias"];
function hg({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  Threshold: r = 4,
  Data: a,
  allowedEffects: i,
  GrabCursor: s = "grab",
  GrabbedCursor: c = "grabbing",
  onClick: d,
  onDragStart: u,
  onDragContinuation: p,
  onDragFinish: l,
  onDragCancellation: f,
  onDrop: h
}) {
  Ar("preact component reference", e), Xa(t), Qn("onlyFrom", n), Qn("neverFrom", o), Dr("drag threshold", r), Ht("allowedEffects", i, (ee) => he(ee, fg), "list of drop effects", 1), fn('"GrabCursor" CSS cursor', s), fn('"GrabbedCursor" CSS cursor', c), Oe('"onClick" callback', d), Oe('"onDragStart" callback', u), Oe('"onDragContinuation" callback', p), Oe('"onDragFinish" callback', l), Oe('"onDragCancellation" callback', f), Oe('"onDrop" callback', h);
  const g = d != null, b = u != null && p != null && l != null && f != null, m = g || b, v = q();
  v.current = { onClick: d, onDragStart: u, onDragContinuation: p, onDragFinish: l, onDragCancellation: f, onDrop: h };
  const C = q(!1);
  C.current = g;
  const S = q(!1);
  S.current = b;
  const j = q(r);
  j.current = r;
  const x = q(a);
  x.current = a;
  const w = i ?? ["move"], R = q(w);
  R.current = w;
  const L = q(c);
  L.current = c;
  const { closestDropTarget: $ } = yt(Qa), I = q($);
  I.current = $;
  const M = q(), _ = q(), z = q(), N = q(!1), Y = q(!1), Q = q(), fe = q(), P = q();
  Ce(() => {
    e.current != null && (M.current = Ya(e.current, t));
  }, [
    e.current
    /* Container */
  ]), Ce(() => {
    if (!(!b || e.current == null))
      return e.current.style.cursor = s, () => {
        e.current != null && (e.current.style.cursor = "");
      };
  }, [e, b, s]), Ce(() => () => {
    window.removeEventListener("pointermove", te), window.removeEventListener("pointerup", pe), window.removeEventListener("pointercancel", ve), N.current && (N.current = !1, Lo());
  }, []);
  const X = le((ee) => {
    if (!(ee.target instanceof HTMLElement) || !Ja(ee) || !m || M.current == null || n != null && !re(ee.target, n) || o != null && re(ee.target, o))
      return;
    window.addEventListener("pointermove", te), window.addEventListener("pointerup", pe), window.addEventListener("pointercancel", ve), e.current.setPointerCapture?.(ee.pointerId);
    const ie = M.current, se = ie.getBoundingClientRect(), be = ee.clientX - se.left + ie.scrollLeft, me = ee.clientY - se.top + ie.scrollTop;
    _.current = { x: be, y: me }, z.current = ee, N.current = !0, Y.current = !1, Q.current = void 0, fe.current = void 0, P.current = void 0;
  }, [e, m, n, o]), te = le((ee) => {
    if (!N.current || M.current == null)
      return;
    const [ie, se, be, me] = Xe(ee);
    if (!Y.current) {
      if (Math.sqrt(ie * ie + se * se) < j.current)
        return;
      Y.current = !0, S.current && v.current.onDragStart?.(0, 0, _.current.x, _.current.y, z.current);
    }
    if (S.current) {
      const De = ee.altKey && R.current.includes("copy") ? ["copy"] : R.current, Re = I.current(ee.clientX, ee.clientY), ze = Re?.[0], bt = Re?.[1];
      if (ze !== Q.current) {
        Q.current != null && fe.current.onLeave?.(x.current);
        const we = ze != null ? bt.accepts(x.current, De) : !1;
        we !== !1 ? (bt.onEnter?.(x.current, we, be, me), Q.current = ze, fe.current = bt, P.current = we) : (Q.current = void 0, fe.current = void 0, P.current = void 0);
      } else if (Q.current != null) {
        const we = fe.current.accepts(x.current, De);
        we !== !1 ? (P.current = we, fe.current.onOver?.(x.current, we, be, me)) : (fe.current.onLeave?.(x.current), Q.current = void 0, fe.current = void 0, P.current = void 0);
      }
      hc(
        // shares the singleton of "useDragging"
        Q.current != null ? rt(P.current) : mt(ee.clientX, ee.clientY) ? L.current : "no-drop"
      ), v.current.onDragContinuation?.(ie, se, be, me, ee);
    }
  }, []), pe = le((ee) => {
    Ne(ee, !1);
  }, []), ve = le((ee) => {
    Ne(ee, !0);
  }, []), Ne = le((ee, ie) => {
    if (N.current) {
      if (N.current = !1, e.current?.hasPointerCapture?.(ee.pointerId) && e.current.releasePointerCapture(ee.pointerId), window.removeEventListener("pointermove", te), window.removeEventListener("pointerup", pe), window.removeEventListener("pointercancel", ve), Y.current && Lo(), ie) {
        Y.current && S.current && (Q.current != null && (fe.current.onLeave?.(x.current), Q.current = void 0, fe.current = void 0, P.current = void 0), v.current.onDragCancellation?.(0, 0, _.current.x, _.current.y, ee)), Y.current = !1;
        return;
      }
      if (Y.current) {
        if (S.current)
          if (Q.current != null) {
            const se = Q.current, be = fe.current, me = P.current, De = se.getBoundingClientRect(), Re = ee.clientX - De.left + se.scrollLeft, ze = ee.clientY - De.top + se.scrollTop;
            Q.current = void 0, fe.current = void 0, P.current = void 0, be.onDrop?.(x.current, me, Re, ze), v.current.onDrop?.(0, 0, _.current.x, _.current.y, ee, se, me);
          } else
            v.current.onDragFinish?.apply(null, Xe(ee));
      } else if (C.current && M.current != null) {
        const se = M.current, be = se.getBoundingClientRect(), me = ee.clientX - be.left + se.scrollLeft, De = ee.clientY - be.top + se.scrollTop;
        v.current.onClick?.(me, De, ee);
      }
      Y.current = !1;
    }
  }, []);
  function Xe(ee) {
    const ie = M.current;
    if (ie == null)
      return [0, 0, 0, 0, ee];
    const se = ie.getBoundingClientRect(), be = ee.clientX - se.left + ie.scrollLeft, me = ee.clientY - se.top + ie.scrollTop, De = be - _.current.x, Re = me - _.current.y;
    return [De, Re, be, me, ee];
  }
  function rt(ee) {
    switch (ee) {
      case "copy":
        return "copy";
      case "alias":
        return "alias";
      case "move":
        return "move";
      default:
        return L.current;
    }
  }
  function mt(ee, ie) {
    if (e.current == null)
      return !1;
    const se = e.current.getBoundingClientRect();
    return ee >= se.left && ee <= se.right && ie >= se.top && ie <= se.bottom;
  }
  function re(ee, ie) {
    switch (!0) {
      case ie == null:
        return !0;
      case typeof ie == "string":
        return ee.matches(ie);
      default:
        return ee === ie;
    }
  }
  return m ? X : void 0;
}
function gg({
  ViewRef: e,
  accepts: t,
  onEnter: n,
  onOver: o,
  onLeave: r,
  onDrop: a
}) {
  Ar("preact component reference", e), Zt("accepts", t), Oe('"onEnter" callback', n), Oe('"onOver" callback', o), Oe('"onLeave" callback', r), Oe('"onDrop" callback', a);
  const [i, s] = Ge(!1), c = q(
    { accepts: t, onEnter: n, onOver: o, onLeave: r, onDrop: a }
  );
  c.current = { accepts: t, onEnter: n, onOver: o, onLeave: r, onDrop: a };
  const { registerDropTarget: d } = yt(Qa);
  return Ce(() => {
    if (e.current != null)
      return d(e.current, {
        accepts: (u, p) => c.current.accepts(u, p),
        onEnter: (u, p, l, f) => {
          s(!0), E('usePointerDropSupport callback "onEnter"', c.current.onEnter, u, p, l, f);
        },
        onOver: (u, p, l, f) => E('usePointerDropSupport callback "onOver"', c.current.onOver, u, p, l, f),
        onLeave: (u) => {
          s(!1), E('usePointerDropSupport callback "onLeave"', c.current.onLeave, u);
        },
        onDrop: (u, p, l, f) => {
          s(!1), E('usePointerDropSupport callback "onDrop"', c.current.onDrop, u, p, l, f);
        }
      });
  }, [e.current]), { isOver: i };
}
const ia = /* @__PURE__ */ new WeakMap();
function mg(e, t) {
  return ia.set(e, t), () => ia.delete(e);
}
function bg(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n != null; ) {
    const o = ia.get(n);
    if (o != null)
      return [n, o];
    n = n.parentElement;
  }
}
const Qa = /* @__PURE__ */ yn({
  registerDropTarget: mg,
  closestDropTarget: bg
});
function yg(e, {
  multiple: t,
  disabled: n,
  onDragEnter: o,
  onDragOver: r,
  onDragLeave: a,
  onDrop: i
} = {}) {
  switch (e == null && (e = "*/*"), !0) {
    case Ee(e):
      e = e.trim().replace(/[,\s]+/g, " ").split(" ");
      break;
    case $e(e, Ee):
      break;
    default:
      de(
        'InvalidArgument: "accept" must be a file type string or a non-empty array of file type strings'
      );
  }
  on('"multiple" flag', t), on('"disabled" flag', n), Oe('"onDragEnter" callback', o), Oe('"onDragOver" callback', r), Oe('"onDragLeave" callback', a), Oe('"onDrop" callback', i);
  const s = e.map(
    (v) => v.replace(/;.*$/, "").trim().toLowerCase()
  ).filter((v) => v !== "");
  s.length === 0 && s.push("*/*");
  const c = (
    // also allows for "*" wildcards
    /^(\*\/\*|[a-z0-9]+([._+-][a-z0-9]+)*\/(\*|[a-z0-9]+([._+-][a-z0-9]+)*))$/
  );
  s.every(
    (v) => c.test(v)
  ) || de(
    "InvalidArgument: the given list of accepted file types is invalid"
  );
  const [d, u] = Ge(!1), p = q(0), l = q({});
  l.current = { multiple: t, disabled: n, onDragEnter: o, onDragOver: r, onDragLeave: a, onDrop: i };
  const f = s.join(","), { handleDragEnter: h, handleDragOver: g, handleDragLeave: b, handleDrop: m } = Qt(() => {
    function v(S) {
      return s.some((j) => j === "*/*" ? !0 : j.endsWith("/*") ? S.startsWith(j.slice(0, -1)) : S === j);
    }
    function C(S) {
      if (S == null)
        return !1;
      const j = S.items;
      return j == null ? [...S.types].includes("Files") : Array.from(j).some(
        (x) => x.kind === "file" && v(x.type.toLowerCase())
      );
    }
    return gc({
      Name: "useFileDropSupport",
      DragDepth: p,
      setIsOver: u,
      accepts: (S) => l.current.disabled != !0 && C(S.dataTransfer),
      CallbacksOf: () => l.current,
      processedDrop: (S) => {
        if (l.current.disabled == !0)
          return;
        const j = S.dataTransfer?.files;
        if (j == null)
          return;
        let x = Array.from(j).filter(
          (w) => v(w.type.toLowerCase())
        );
        return l.current.multiple != !0 && (x = x.slice(0, 1)), x.length === 0 ? void 0 : [x];
      }
    });
  }, [f]);
  return {
    isOver: d,
    onDragEnter: h,
    onDragOver: g,
    onDragLeave: b,
    onDrop: m
  };
}
function vn(e, t) {
  const n = q(), o = q(void 0);
  let r = e ?? wt;
  return n.current != null && document.activeElement === n.current ? r = o.current : (t != null && (r = t(r)), o.current = r), { ViewRef: n, shownValue: o, ValueToShow: r };
}
function Ot(e, t) {
  const n = q(e ?? t), o = q(e ?? t);
  return e != null && e !== n.current && (o.current = e, n.current = e), o;
}
function wn(e) {
  const {
    Name: t,
    actualDisabling: n,
    shownValue: o,
    onInput: r,
    onValueInput: a,
    onBlur: i,
    processedInput: s
  } = e, c = ft(), d = le((p) => {
    if (Ae(p), n == !0)
      return;
    E(t + ' callback "onInput"', r, p);
    let l;
    s == null ? (l = p.target.value, o.current = l === "" ? wt : l) : l = s(p), E(t + ' callback "onValueInput"', a, l, p);
  }, [n, r, a]), u = le((p) => {
    c(), E(t + ' callback "onBlur"', i, p);
  }, [i]);
  return { _onInput: d, _onBlur: u, rerender: c };
}
function kn(e, t) {
  const n = Bt();
  let o = "", r;
  if (e != null && e.length > 0) {
    r = n + "-Suggestions";
    const a = t ?? ((i) => y`<option value=${i}></option>`);
    o = y`<datalist id=${r}>
        ${e.map((i) => a(i))}
      </datalist>`;
  }
  return { SuggestionId: r, SuggestionList: o };
}
function mc(e) {
  const [t, n] = Ge({
    Width: 0,
    Height: 0
  });
  return Na(() => {
    const o = e.current;
    if (o == null)
      return;
    const r = new ResizeObserver(() => n(
      (a) => {
        const i = o.clientWidth, s = o.clientHeight;
        return a.Width === i && a.Height === s ? a : { Width: i, Height: s };
      }
    ));
    return r.observe(o), () => r.disconnect();
  }, []), t;
}
function XC(e) {
  let t = Math.round(Math.random() * 1e4).toString();
  return t += "0000".slice(t.length), e = (e || "This operation can not be undone.") + `

Please, enter the following number if you want to proceed:

   ` + t + `

Otherwise, the operation will be cancelled`, window.prompt(e, "") === t ? !0 : (window.alert("Operation will be cancelled"), !1);
}
const Mo = /* @__PURE__ */ Object.create(null);
function Z(e, t) {
  let n = !1;
  return () => {
    n || (n = !0, Pa(e, t));
  };
}
let $s = !1;
function xg() {
  if ($s || typeof document > "u")
    return;
  $s = !0;
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
    background-color:currentColor; ${xt} ${Sh}
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

      `.trim(), document.head.prepend(e)), Object.keys(Mo).forEach((t) => {
    Pa(t, Mo[t], !0);
  });
}
function Pa(e, t, n = !1) {
  if (nc("stylesheet name", e), nt("stylesheet", t), $a("mode flag", n), typeof document > "u")
    return;
  const o = "Stylesheet-for-" + Xt(e);
  let r = document.head.querySelector('style[id="' + o + '"]');
  if (r == null) {
    r = document.createElement("style"), r.id = o, r.textContent = t;
    const a = document.head.querySelectorAll(
      'style[id^="Stylesheet-for-"]'
    ), i = a.length > 0 ? a[a.length - 1] : document.getElementById("JCL-Stylesheet");
    i == null ? document.head.prepend(r) : i.after(r), Mo[e] = t;
  } else
    n ? (r.textContent = t, Mo[e] = t) : console.warn('multiple definitions for stylesheet "' + e + '"');
}
function vg(e) {
  if (nc("stylesheet name", e), typeof document > "u")
    return;
  const t = "Stylesheet-for-" + Xt(e);
  let n = document.head.querySelector('style[id="' + t + '"]');
  n?.remove(), delete Mo[e];
}
function gn(e) {
  return U(() => {
    wg(), e = K(e);
    let t = V(
      e.Error,
      (r) => r instanceof Error || mn(r)
    ), n = T(e.ErrorResetter);
    switch (!0) {
      case t instanceof Error:
        break;
      case mn(t):
        if (/^[^\n]+\n\n[^\n]+/.test(t)) {
          const r = t.replace(/\n\n.*$/, ""), a = t.replace(/^[^\n]+\n\n/, "");
          t = new Error(a), t.name = r;
        } else
          t = new Error(t), t.name = "Unexpected Failure";
        break;
      default:
        t = new Error("" + t), t.name = "Unexpected Failure";
    }
    return y`<div class="jcl-error-indicator" onClick=${() => {
      console.warn(t), window.alert(kg(t));
    }}/>`;
  });
}
const wg = /* @__PURE__ */ Z("jcl-error-indicator", `
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
function kg(e) {
  let t = e.name, n = e.message || "(unidentified error)", o = e.stack ?? "";
  const r = t.replace(/([a-z])([A-Z])/g, "$1 $2"), a = n.charAt(0).toUpperCase() + n.slice(1);
  return o === "" ? `${r}

${a}` : `${r}

${a}

${o}`;
}
function Cg(e) {
  return { current: e };
}
let js = !1;
function U(e) {
  js || (js = !0, xg(), Xf()), Zt("rendering function", e);
  const [t, n] = Ba();
  if (t != null) {
    const o = e.name ?? "";
    return o.trim() === "" ? console.warn("rendering error within preact component: " + t) : console.warn(
      "rendering error within " + Mt(o) + ": " + t
    ), y`<${gn} Error=${t} ErrorResetter=${n}/>`;
  }
  try {
    return e();
  } catch (o) {
    const r = e.name ?? "";
    return r.trim() === "" ? console.warn("error while rendering a preact component: " + o) : console.warn(
      "error while rendering component " + Mt(r) + ": " + o
    ), y`<${gn} Error=${o} ErrorResetter=${n}/>`;
  }
}
function $g(e) {
  return U(() => {
    const t = Fr(), n = Ho(t), { Theme: o, SwatchSet: r, Locale: a, Direction: i } = n, s = Wo(o, r);
    return y`<div class="jcl-component customizable"
        dir=${i} lang=${a} style=${s}
      >
        <${jt.Provider} value=${n}>
          ${e.children}
        </>
      </>`;
  });
}
function ei(e) {
  return e = { ...e }, Object.keys(e).forEach((t) => {
    e[t] === void 0 && delete e[t];
  }), e;
}
function ti(e, t, n) {
  Object.assign(e, n), t != null && (t.current == null && (t.current = {}), Object.assign(t.current, n));
}
function ni(e) {
  return () => {
    de("MissingArgument:function not in " + e);
  };
}
function oi(e) {
  const t = q([]), n = ft();
  function o(s) {
    Ln(e + " name", s);
    const c = Xt(s), d = t.current;
    if (d.length === 0)
      return;
    const u = d.findIndex(
      (p) => p[Mn] === c
    );
    u < 0 || (t.current = d.filter(
      (p, l) => l !== u
    ), n());
  }
  function r() {
    t.current.length !== 0 && (t.current = [], n());
  }
  function a(s) {
    Ln(e + " name", s);
    const c = Xt(s);
    return t.current.findIndex(
      (d) => d[Mn] === c
    ) >= 0;
  }
  const i = t.current.map(
    (s) => s.Name
  );
  return { ListRef: t, rerender: n, closeEntity: o, closeAllEntities: r, EntityIsOpen: a, openEntities: i };
}
function ri(e, t, n) {
  Me(e) || de(
    "InvalidArgument: the given " + t + " descriptor is no plain JavaScript object"
  );
  const o = e.Name == null ? t + " descriptor" : "descriptor for " + t + " " + Mt(e.Name);
  try {
    n(e);
  } catch (r) {
    throw (r.name === "MissingArgument" || r.name === "InvalidArgument") && (r.message += " in " + o), r;
  }
}
function bc(e, t, n, o, r) {
  return le((a) => {
    if (a.key === "Escape") {
      a.stopPropagation(), t.isModal || n(t.Name);
      return;
    }
    if (t.isModal && a.key === "Tab") {
      const i = e.current;
      if (i == null)
        return;
      const s = Array.from(
        i.querySelectorAll(ai)
      ).filter((p) => p.tabIndex >= 0);
      if (s.length === 0) {
        a.preventDefault();
        return;
      }
      const c = s[0], d = s[s.length - 1], u = o && document.activeElement === i;
      switch (!0) {
        case (a.shiftKey && (document.activeElement === c || u)):
          a.preventDefault(), d.focus();
          break;
        case (!a.shiftKey && document.activeElement === d):
          a.preventDefault(), c.focus();
          break;
      }
    }
  }, r);
}
function yc(e, t) {
  Ce(() => {
    const n = e.current;
    if (n != null)
      return t.forEach((o) => {
        n.addEventListener(o, Ae);
      }), () => {
        t.forEach((o) => {
          n.removeEventListener(o, Ae);
        });
      };
  }, []);
}
let Is = !1;
function xc() {
  if (Is)
    return;
  Is = !0;
  const e = {
    en: "Close",
    de: "Schließen",
    fr: "Fermer",
    es: "Cerrar",
    it: "Chiudi",
    pt: "Fechar"
  };
  Object.keys(e).forEach((t) => {
    kr(t, {
      "jcl.overlay.close": e[t],
      "jcl.dialog.close": e[t]
    });
  });
}
function jg(e) {
  return U(() => {
    xc(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.APIRef, xn), o = e.children, r = q(), {
      // s. "shared Base Helpers" for these commons
      ListRef: a,
      rerender: i,
      closeEntity: s,
      closeAllEntities: c,
      EntityIsOpen: d,
      openEntities: u
    } = oi("overlay");
    function p(m) {
      St("overlay descriptor", m), m = ei(m), f(m);
      let {
        Name: v,
        isModal: C,
        Renderer: S,
        onOpen: j,
        onClose: x,
        OffsetX: w,
        OffsetY: R,
        Width: L,
        Height: $,
        minWidth: I,
        minHeight: M,
        maxWidth: _,
        maxHeight: z,
        Role: N,
        Label: Y
      } = m;
      const Q = Xt(v);
      d(v) && de(
        "OverlayAlreadyOpen: there is already an overlay called " + Mt(v)
      ), a.current.push({
        Name: v,
        [Mn]: Q,
        isModal: C ?? !1,
        Renderer: S,
        onOpen: j,
        onClose: x,
        OffsetX: w ?? 0,
        OffsetY: R ?? 0,
        Width: L,
        Height: $,
        minWidth: I ?? 0,
        minHeight: M ?? 0,
        maxWidth: _,
        maxHeight: z,
        Role: N,
        Label: Y
      }), i();
    }
    function l(m, v) {
      St("overlay descriptor", m), v instanceof PointerEvent || de(
        'InvalidArgument: "Event" must be a PointerEvent'
      );
      const C = r.current;
      if (C != null) {
        const S = C.getBoundingClientRect(), j = v.clientX - S.left + C.scrollLeft, x = v.clientY - S.top + C.scrollTop;
        m = { ...m, OffsetX: j, OffsetY: x };
      }
      p(m);
    }
    function f(m) {
      ri(m, "overlay", () => {
        Ln("Name", m.Name), on("isModal", m.isModal), Zt("Renderer", m.Renderer), Oe("onOpen", m.onOpen), Oe("onClose", m.onClose), vr("OffsetX", m.OffsetX), vr("OffsetY", m.OffsetY), Lt("Width", m.Width), Lt("Height", m.Height), Lt("minWidth", m.minWidth), Lt("minHeight", m.minHeight), Lt("maxWidth", m.maxWidth), Lt("maxHeight", m.maxHeight), Lr("Role", m.Role), fn("Label", m.Label);
      });
    }
    const h = {
      openOverlay: p,
      openOverlayAtPointer: l,
      closeOverlay: s,
      closeAllOverlays: c,
      openOverlays: u,
      OverlayIsOpen: d
    }, g = so();
    ti(g, n, h);
    const b = le((m) => {
      if (m.key !== "Escape")
        return;
      const v = a.current;
      for (let C = v.length - 1; C >= 0; C--)
        if (!v[C].isModal) {
          Ae(m), s(v[C].Name);
          break;
        }
    }, []);
    return y`<${Or.Provider} value=${g}>
        <div class="jcl-component overlay-base ${t}" ref=${r}
          onKeyDown=${b} ...${e.RestProps}
        >
          ${o}
          <${Ig} OverlayList=${a.current} BaseRef=${r}/>
        </>
      </>`;
  });
}
function Ig(e) {
  return U(() => {
    e = K(e);
    const t = V(e.OverlayList, (a) => $e(a, Me)), n = V(e.BaseRef, (a) => xn(a)) ?? Te("BaseRef");
    if (t == null || t.length === 0)
      return;
    const { closeOverlay: o } = so(), r = t.length - 1;
    return y`
        ${t.map((a, i) => i === r ? y`
              <${Sg} key=${"underlay:" + a.Name}
                Overlay=${a} closeOverlay=${o}
              />
              <${Ss} key=${"view:" + a.Name}
                Overlay=${a} BaseRef=${n}
              />
            ` : y`
              <${Ss} key=${"view:" + a.Name}
                Overlay=${a} BaseRef=${n}
              />
            `)}
      `;
  });
}
const vc = [
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
function Sg(e) {
  return U(() => {
    e = K(e);
    const t = V(e.Overlay, Me) ?? Te("Overlay"), n = T(e.closeOverlay) ?? Te("closeOverlay"), o = q();
    yc(o, vc);
    const r = le((s) => {
      Ae(s), t.isModal || n(t.Name);
    }, [t.isModal, t.Name, n]), i = lo().DialogName != null;
    return to(y`<div
        class="jcl-underlay ${t.isModal ? "modal" : ""} ${i ? "in-dialog" : ""}"
        aria-hidden="true"
        ref=${o}
        onPointerDown=${r}
      />`, document.body);
  });
}
const ai = [
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
function Ss(e) {
  return U(() => {
    e = K(e);
    const t = V(e.Overlay, Me) ?? Te("Overlay"), o = (V(e.BaseRef, xn) ?? Te("BaseRef")).current;
    if (o == null)
      return null;
    const r = ft(), a = q(), i = yt(jt), s = Ho(Rr), c = i ?? s, { Theme: d, SwatchSet: u, Locale: p, Direction: l } = c, f = Wo(d, u);
    Ce(() => {
      E(
        `"onOpen" callback of overlay ${t.Name}`,
        t.onOpen,
        t.Name,
        { ...t }
      );
      const Q = setTimeout(r, 0);
      return () => {
        clearTimeout(Q), E(
          `"onClose" callback of overlay ${t.Name}`,
          t.onClose,
          t.Name,
          { ...t }
        );
      };
    }, []), Ce(() => {
      const Q = a.current;
      if (Q == null)
        return;
      const fe = document.activeElement, P = setTimeout(() => {
        (Q.querySelector(ai) ?? Q).focus();
      }, 50);
      return () => {
        clearTimeout(P), fe?.focus();
      };
    }, []);
    let {
      OffsetX: h,
      OffsetY: g,
      Width: b,
      Height: m,
      minWidth: v,
      minHeight: C,
      maxWidth: S,
      maxHeight: j
    } = t;
    const { left: x, top: w } = o.getBoundingClientRect();
    let R = x, L = w;
    if (a.current == null)
      R += h ?? 0, L += g ?? 0;
    else {
      let { width: Q, height: fe } = a.current.getBoundingClientRect();
      b = Math.max(v ?? 0, Math.min(Q, window.innerWidth, S ?? 1 / 0)), m = Math.max(C ?? 0, Math.min(fe, window.innerHeight, j ?? 1 / 0)), R = Math.max(0, Math.min(R + (h ?? 0), window.innerWidth - b)), L = Math.max(0, Math.min(L + (g ?? 0), window.innerHeight - m));
    }
    Object.assign(t, {
      // modifies Overlay in-situ (positional hack)
      OffsetX: R - x,
      OffsetY: L - w,
      Width: b,
      Height: m
    });
    const $ = so(), I = bc(
      a,
      t,
      (Q) => $.closeOverlay?.(Q),
      !1,
      [t.isModal, t.Name, $]
    ), M = le(() => E(
      `"Renderer" callback of overlay ${t.Name}`,
      t.Renderer,
      t.Name,
      { ...t }
    ), [t]), z = lo().DialogName != null, N = t.Role ?? "dialog", Y = t.Label ?? t.Name;
    return to(y`
        <${Or.Provider} value=${{
      ...$,
      OverlayName: t.Name
    }}>
        <${jt.Provider} value=${c}>
          <div
            class="jcl-overlay-view ${z ? "in-dialog" : ""}"
            role=${N} aria-modal=${t.isModal ? "true" : void 0}
            aria-label=${Y}
            tabIndex=${-1} dir=${l} lang=${p}
            style="
              visibility:${a.current == null ? "hidden" : "visible"};
              left:${R}px; top:${L}px;
              width: ${b == null ? "auto" : `${b}px`};
              height:${m == null ? "auto" : `${m}px`};
              min-width:${v ?? 0}px; min-height:${C ?? 0}px;
              max-width: ${S == null ? "none" : `${S}px`};
              max-height:${j == null ? "none" : `${j}px`};
              ${f}
            "
            key="overlay:${t.Name}" ref=${a}
            onKeyDown=${I}
          >
            <${M}/>
          </>
        </>
        </>
      `, document.body);
  });
}
const mo = ni("OverlayContext"), Or = /* @__PURE__ */ yn({
  openOverlay: mo,
  openOverlayAtPointer: mo,
  closeOverlay: mo,
  closeAllOverlays: mo,
  openOverlays: [],
  OverlayIsOpen: mo
});
function so() {
  return yt(Or);
}
function _g(e) {
  return U(() => {
    xc(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.APIRef, xn), o = e.children, r = q(), {
      // s. "shared Base Helpers" for these commons
      ListRef: a,
      rerender: i,
      closeEntity: s,
      closeAllEntities: c,
      EntityIsOpen: d,
      openEntities: u
    } = oi("dialog");
    function p(m) {
      St("dialog descriptor", m), m = ei(m), h(m);
      const {
        Name: v,
        Title: C,
        isModal: S,
        hasCloseButton: j,
        isResizable: x,
        isDraggable: w,
        dontShrink: R,
        Renderer: L,
        onOpen: $,
        onClose: I,
        OffsetX: M,
        OffsetY: _,
        Width: z,
        Height: N,
        minWidth: Y,
        minHeight: Q,
        maxWidth: fe,
        maxHeight: P
      } = m, X = Xt(v);
      d(v) && de(
        "DialogAlreadyOpen: there is already a dialog called " + Mt(v)
      ), a.current.push({
        Name: v,
        [Mn]: X,
        Title: C,
        isModal: S ?? !1,
        hasCloseButton: j,
        isResizable: x,
        isDraggable: w,
        dontShrink: R,
        Renderer: L,
        onOpen: $,
        onClose: I,
        OffsetX: M,
        OffsetY: _,
        Width: z,
        Height: N,
        minWidth: Y ?? 0,
        minHeight: Q ?? 0,
        maxWidth: fe,
        maxHeight: P
      }), i();
    }
    function l(m) {
      Ln("dialog name", m);
      const v = Xt(m), C = a.current;
      return C[C.length - 1]?.[Mn] === v;
    }
    function f(m) {
      Ln("dialog name", m);
      const v = Xt(m), C = a.current, S = C.findIndex(
        (x) => x[Mn] === v
      );
      if (S < 0 || S === C.length - 1)
        return;
      const j = C[S];
      a.current = [
        ...C.filter((x, w) => w !== S),
        j
      ], i();
    }
    function h(m) {
      ri(m, "dialog", () => {
        Ln("Name", m.Name), on("isModal", m.isModal), on("hasCloseButton", m.hasCloseButton), on("isResizable", m.isResizable), on("isDraggable", m.isDraggable), on("dontShrink", m.dontShrink), Zt("Renderer", m.Renderer), Oe("onOpen", m.onOpen), Oe("onClose", m.onClose), vr("OffsetX", m.OffsetX), vr("OffsetY", m.OffsetY), Lt("Width", m.Width), Lt("Height", m.Height), Lt("minWidth", m.minWidth), Lt("minHeight", m.minHeight), Lt("maxWidth", m.maxWidth), Lt("maxHeight", m.maxHeight);
      });
    }
    const g = {
      openDialog: p,
      closeDialog: s,
      closeAllDialogs: c,
      openDialogs: u,
      DialogIsOpen: d,
      DialogIsFrontmost: l,
      bringDialogToFront: f
    }, b = lo();
    return ti(b, n, g), y`<${zr.Provider} value=${b}>
        <div class="jcl-component dialog-base ${t ?? ""}"
          ref=${r} ...${e.RestProps}
        >
          ${o}
          <${Dg}
            DialogList=${a.current}
            BaseRef=${r} rerender=${i}
          />
        </div>
      </>`;
  });
}
function Dg(e) {
  return U(() => {
    e = K(e);
    const t = V(e.DialogList, (a) => $e(a, Me)), n = V(e.BaseRef, (a) => xn(a)) ?? Te("BaseRef"), o = T(e.rerender) ?? Te("rerender");
    if (t == null || t.length === 0)
      return;
    const r = t.length - 1;
    return y`
        ${t.map((a, i) => y`
          ${i === r && a.isModal && y`
            <${Mg} key=${"modal:" + a.Name}/>
          `}
          <${Ag} key=${"view:" + a.Name}
            Dialog=${a} BaseRef=${n} rerender=${o}
          />
        `)}
      `;
  });
}
const Lg = [
  ...vc,
  "mousedown",
  "touchstart",
  "pointerdown"
];
function Mg(e) {
  return U(() => {
    const t = q();
    return yc(t, Lg), to(
      y`<div class="jcl-modal-layer" ref=${t} aria-hidden="true"/>`,
      document.body
    );
  });
}
function Ag(e) {
  return U(() => {
    e = K(e);
    const t = V(e.Dialog, Me) ?? Te("Dialog"), n = V(e.BaseRef, (we) => xn(we)) ?? Te("BaseRef"), o = T(e.rerender), r = n.current;
    if (r == null)
      return null;
    const a = yt(jt), i = Ho(Rr), s = a ?? i, { Theme: c, SwatchSet: d, Locale: u, Direction: p } = s, l = Wo(c, d), { localized: f } = qa(s), h = ft(), g = f("jcl.dialog.close"), b = Bt() + "-dlg-title";
    let {
      Name: m,
      Title: v,
      hasCloseButton: C,
      isResizable: S,
      isDraggable: j,
      OffsetX: x,
      OffsetY: w,
      Width: R,
      Height: L,
      minWidth: $,
      minHeight: I,
      maxWidth: M,
      maxHeight: _,
      dontShrink: z
    } = t;
    const N = v != null || C === !0 || j === !0, Y = S ? "resizable" : "", Q = j ? "draggable" : "";
    $ == null && ($ = 0), I == null && (I = 0);
    const fe = 0, P = (N ? 30 : 0) + (S ? 10 : 0);
    (N || S) && (I += P, L != null && (L += P)), C && ($ = Math.max(40, $)), S && ($ = Math.max(60, $));
    const X = q(), { left: te, top: pe } = r.getBoundingClientRect();
    let ve = te, Ne = pe;
    if (X.current == null)
      ve += x ?? 0, Ne += w ?? 0;
    else {
      const { width: we, height: We } = X.current.getBoundingClientRect(), { width: et, height: Se } = r.getBoundingClientRect();
      R = Math.min(R ?? we, window.innerWidth), L = Math.min(L ?? We, window.innerHeight), x == null && (t.OffsetX = x = (et - R) / 2), w == null && (t.OffsetY = w = (Se - L) / 2), ve = Math.max(0, Math.min(ve + x, window.innerWidth - R)), Ne = Math.max(0, Math.min(Ne + w, window.innerHeight - L)), t.OffsetX = ve - te, t.OffsetY = Ne - pe, z === !0 && ($ = t.minWidth = Math.max($, R) - fe, I = t.minHeight = Math.max(I, L) - P, delete t.dontShrink), t.Width = R, t.Height = L - P;
    }
    const Xe = lo(), { closeDialog: rt, DialogIsFrontmost: mt, bringDialogToFront: re } = Xe, ee = bc(
      X,
      t,
      rt,
      !0,
      [t, rt]
    );
    Na(() => {
      h();
    }, []);
    const ie = q(null);
    Ce(() => {
      ie.current = document.activeElement, E(
        `"onOpen" callback of dialog ${t.Name}`,
        t.onOpen,
        t.Name,
        { ...t }
      );
      const we = setTimeout(() => {
        const We = X.current;
        if (We == null)
          return;
        (We.querySelector(ai) ?? We).focus();
      }, 50);
      return () => {
        clearTimeout(we), E(
          `"onClose" callback of dialog ${t.Name}`,
          t.onClose,
          t.Name,
          { ...t }
        ), ie.current?.focus();
      };
    }, []);
    const se = q({ Mode: void 0, x: 0, y: 0, Width: 0, Height: 0 }), be = le((we, We) => {
      t.OffsetX = se.current.x + we, t.OffsetY = se.current.y + We, mt(t.Name) || (re(t.Name), o?.()), h();
    }, [t, mt, re, h, o]), me = Fn({
      ViewRef: X,
      ...j ? {
        onlyFrom: ".titlebar",
        neverFrom: ".close-button",
        onDragStart: () => {
          se.current = { x: t.OffsetX, y: t.OffsetY };
        },
        onDragContinuation: (we, We) => be(we, We),
        onDragFinish: (we, We) => be(we, We),
        onDragCancellation: (we, We) => be(we, We)
      } : {}
    }), De = le((we) => {
      if (we == null)
        return;
      const We = we.target.classList;
      let et;
      switch (!0) {
        case We.contains("left-resizer"):
          et = "resize-sw";
          break;
        case We.contains("middle-resizer"):
          et = "resize-s";
          break;
        case We.contains("right-resizer"):
          et = "resize-se";
          break;
      }
      se.current = {
        Mode: et,
        x: t.OffsetX,
        Width: t.Width,
        y: t.OffsetY,
        Height: t.Height
      };
    }, [t]), Re = le((we, We) => {
      const { minWidth: et, maxWidth: Se, minHeight: tt, maxHeight: ct } = t;
      let _e = se.current.Width;
      switch (se.current.Mode) {
        case "resize-sw":
          _e = Math.max(et ?? 0, Math.min(_e - we, Se ?? 1 / 0)), we = _e - se.current.Width, t.OffsetX = se.current.x - we, t.Width = se.current.Width + we;
          break;
        case "resize-se":
          t.Width = Math.max(et ?? 0, Math.min(se.current.Width + we, Se ?? 1 / 0));
          break;
      }
      t.Height = Math.max(tt ?? 0, Math.min(se.current.Height + We, ct ?? 1 / 0)), mt(t.Name) || (re(t.Name), o?.()), h();
    }, [t, mt, re, h, o]), ze = Fn({
      ViewRef: X,
      ...S ? {
        onlyFrom: ".left-resizer,.middle-resizer,.right-resizer",
        onDragStart: (we, We, et, Se, tt) => De(tt),
        onDragContinuation: (we, We) => Re(we, We),
        onDragFinish: (we, We) => Re(we, We),
        onDragCancellation: (we, We) => Re(we, We)
      } : {}
    }), bt = le(
      () => Ke(
        `"Renderer" callback of dialog ${t.Name}`,
        t.Renderer,
        t.Name,
        { ...t }
      ),
      [t]
    );
    return to(y`
        <${zr.Provider} value=${{ ...Xe, DialogName: t.Name }}>
        <${jt.Provider} value=${s}>
          <div class="jcl-dialog-view ${Y} ${Q}"
            role="dialog"
            aria-modal=${t.isModal ? "true" : void 0}
            aria-labelledby=${N ? b : void 0}
            aria-label=${N ? void 0 : v ?? m}

            tabIndex=${-1} key=${"dialog:" + m} ref=${X}
            dir=${p} lang=${u}
            style="
              visibility:${X.current == null ? "hidden" : "visible"};
              left:${ve}px; top:${Ne}px;
              width:${R == null ? "auto" : `${R}px`};
              height:${L == null ? "auto" : `${L}px`};
              min-width:${$}px; min-height:${I}px;
              max-width:${M == null ? "none" : `${M}px`};
              max-height:${_ == null ? "none" : `${_}px`};
              ${l}
            "
            onPointerDown=${() => re(m)}
            onKeyDown=${ee}
          >
            ${N && y`
              <div class="titlebar" onPointerDown=${me}>
                <span id=${b} class="title">${v ?? ""}</span>
                ${C && y`
                  <button type="button" class="close-button"
                    aria-label=${g}
                    onClick=${() => rt(t.Name)}
                  />
                `}
              </div>
            `}
            <div class="content-pane">
              <${bt}/>
            </div>
            ${S && y`
              <div class="resizer" aria-hidden="true">
                <div class="left-resizer"   onPointerDown=${ze}/>
                <div class="middle-resizer" onPointerDown=${ze}/>
                <div class="right-resizer"  onPointerDown=${ze}/>
              </div>
            `}
          </div>
        </>
        </>
      `, document.body);
  });
}
const Bn = ni("DialogContext"), zr = /* @__PURE__ */ yn({
  openDialog: Bn,
  closeDialog: Bn,
  closeAllDialogs: Bn,
  openDialogs: [],
  DialogIsOpen: Bn,
  DialogIsFrontmost: Bn,
  bringDialogToFront: Bn
});
function lo() {
  return yt(zr);
}
let Tg = 0;
function Rg(e) {
  return U(() => {
    Fg(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.APIRef, xn), o = V(e.Placement, (g) => he(g, ["top-left", "top-right", "bottom-left", "bottom-right"])) ?? "bottom-right", r = e.children, {
      // s. "shared Base Helpers" for these commons
      ListRef: a,
      rerender: i,
      closeEntity: s,
      closeAllEntities: c,
      EntityIsOpen: d,
      openEntities: u
    } = oi("toast");
    function p(g) {
      St("toast descriptor", g), g = ei(g), l(g);
      let { Name: b, Renderer: m, Duration: v, onOpen: C, onClose: S } = g;
      b == null && (b = "Toast-" + ++Tg);
      const j = Xt(b);
      return d(b) && de(
        "ToastAlreadyOpen: there is already a toast called " + Mt(b)
      ), a.current.push({
        Name: b,
        [Mn]: j,
        Renderer: m,
        Duration: v ?? 5e3,
        onOpen: C,
        onClose: S
      }), i(), b;
    }
    function l(g) {
      ri(g, "toast", () => {
        Pf("Name", g.Name), Zt("Renderer", g.Renderer), kl("Duration", g.Duration), Oe("onOpen", g.onOpen), Oe("onClose", g.onClose);
      });
    }
    const f = {
      showToast: p,
      closeToast: s,
      closeAllToasts: c,
      openToasts: u,
      ToastIsOpen: d
    }, h = si();
    return ti(h, n, f), y`<${ii.Provider} value=${h}>
        <div class="jcl-component toast-base ${t}" ...${e.RestProps}>
          ${r}
          <div class="jcl-toast-viewport placement-${o}" aria-live="polite">
            <${Og} ToastList=${a.current}/>
          </>
        </>
      </>`;
  });
}
const Fg = /* @__PURE__ */ Z("jcl-component.toast-base", `
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
function Og(e) {
  return U(() => {
    e = K(e);
    const t = V(e.ToastList, (n) => $e(n, Me));
    if (!(t == null || t.length === 0))
      return y`${t.map(
        (n) => y`
          <${zg} key=${"view:" + n.Name} Toast=${n}/>
        `
      )}`;
  });
}
const wc = /* @__PURE__ */ yn(void 0);
function zg(e) {
  return U(() => {
    Vg(), e = K(e);
    const t = V(e.Toast, Me) ?? Te("Toast"), { closeToast: n } = si(), [o, r] = Ge(!1), a = q(void 0), i = q(0);
    function s() {
      a.current != null && (clearTimeout(a.current), a.current = void 0);
    }
    function c() {
      s(), t.Duration > 0 && (a.current = setTimeout(() => n(t.Name), t.Duration));
    }
    function d() {
      s(), r(!0);
    }
    function u() {
      i.current++, c(), r(!1);
    }
    return Ce(() => (c(), E('toast callback "onOpen"', t.onOpen), () => {
      s(), E('toast callback "onClose"', t.onClose);
    }), []), y`<div class="jcl-toast-view" role="status"
        onMouseEnter=${d} onMouseLeave=${u}
      >
        <${wc.Provider} value=${{ Name: t.Name, closeToast: n }}>
          ${t.Renderer({})}
        </>
        ${t.Duration > 0 && y`<div class="remaining-time"
          key=${i.current} aria-hidden="true"
          style="animation-duration:${t.Duration}ms; animation-play-state:${o ? "paused" : "running"}"
        />`}
      </>`;
  });
}
const Vg = /* @__PURE__ */ Z("jcl-toast-view", `
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
  `), ar = ni("ToastContext"), ii = /* @__PURE__ */ yn({
  showToast: ar,
  closeToast: ar,
  closeAllToasts: ar,
  openToasts: [],
  ToastIsOpen: ar
});
function si() {
  return yt(ii);
}
function Eg(e) {
  return Ng(), kc("fullsized", e);
}
const Ng = /* @__PURE__ */ Z("jcl-component.fullsized", `
    .jcl-component.fullsized {
      flex:1 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    }
    .jcl-component.fullsized > * {
      position:absolute;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:100%;
    }
  `);
function li(e) {
  return Bg(), kc("centered", e);
}
const Bg = /* @__PURE__ */ Z("jcl-component.centered", `
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
function Wg(e) {
  return Hg(), Cc("horizontal", e);
}
const Hg = /* @__PURE__ */ Z("jcl-component.horizontal", `
    .jcl-component.horizontal {
      display:flex !important; flex-flow:row nowrap !important;
        align-items:center;
    }
    .jcl-component.horizontal > * {
      position:relative; flex:0 0 auto;
    }
  `);
function Gg(e) {
  return Ug(), Cc("vertical", e);
}
const Ug = /* @__PURE__ */ Z("jcl-component.vertical", `
    .jcl-component.vertical {
      display:flex !important; flex-flow:column nowrap !important;
        align-items:start;
    }
    .jcl-component.vertical > * {
      position:relative; flex:0 0 auto;
    }
  `);
function Kg(e) {
  return U(() => {
    qg(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style) ?? "", o = bn(e.Columns) ?? 2, r = ke(e.RowGap) ?? 0, a = ke(e.ColGap) ?? 0, i = D(e.ColumnClasses) ?? "", s = At(e.children);
    function c(g) {
      if (typeof g == "string")
        return 1;
      {
        const b = g.props.colspan;
        return hn(b) ? b : 1;
      }
    }
    const d = s.filter(
      (g) => typeof g != "string" ? g != null && g.type != null : g.trim() !== ""
    ), u = d.length, p = [[]];
    let l = 0, f = 0;
    d.forEach((g, b) => {
      p[l].push(g), f += c(g), f >= o && b < u - 1 && (p.push([]), l++, f = 0);
    });
    const h = i.trim() === "" ? "" : y`<colgroup>${i.split(" ").map(
      (g) => y`<col class="${g}"/>`
    )}</>`;
    return y`<table class="jcl-component tabular ${t}" style="
        ${n};
        border-spacing:${a}px ${r}px;
        margin:-${r}px -${a}px -${r}px -${a}px
      " ...${e.RestProps}
      >${h}<tbody>
        ${u > 0 && p.map((g) => y`<tr>
          ${g.map(
      (b) => y`<td colspan=${c(b)}>${b}</>`
    )}
        </tr>`)}
      </tbody></table>`;
  });
}
const qg = /* @__PURE__ */ Z("jcl-component.tabular", `
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
function Xg(e) {
  return U(() => {
    Yg(), e = K(e);
    const t = D(e.Class) ?? "";
    let n = ke(e.activeIndex) ?? 0, o = At(e.children).filter(
      (a) => typeof a != "string" || a.trim() !== ""
    );
    const r = o.length;
    return n = r === 0 ? 0 : Math.max(0, Math.min(n, r - 1)), y`<div class="jcl-component selective ${t}"
        ...${e.RestProps}>${o[n]}</>`;
  });
}
const Yg = /* @__PURE__ */ Z("jcl-component.selective", `
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
function Jg(e) {
  return U(() => {
    Zg(), e = K(e);
    const t = D(e.Class) ?? "", n = e.children;
    return y`<div class="jcl-component stacked ${t}" ...${e.RestProps}>
        ${n}
      </>`;
  });
}
const Zg = /* @__PURE__ */ Z("jcl-component.stacked", `
    .jcl-component.stacked > *:first-child {
      position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
    .jcl-component.stacked > *:not(:first-child) {
      position:absolute; top:0px;
    }
  `);
function kc(e, t) {
  return U(() => {
    t = K(t);
    const n = D(t.Class) ?? "", o = t.children;
    return y`<div class="jcl-component ${e} ${n}" ...${t.RestProps}>
        ${o}
      </>`;
  });
}
function Cc(e, t) {
  return U(() => {
    t = K(t);
    const n = D(t.Class) ?? "", o = ae(t.Style) ?? "", r = ke(t.Gap) ?? 0, a = t.children;
    return y`<div class="jcl-component ${e} ${n}"
        style="gap:${r}px; ${o}" ...${t.RestProps}
      >${a}</>`;
  });
}
function Qg(e) {
  return U(() => {
    Pg(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value) ?? "", o = J(e.visiblePattern) ?? !1;
    return y`<div
        class="jcl-component dummy ${o ? "visible-pattern" : ""} ${t}"
        aria-hidden="true"
        ...${e.RestProps} dangerouslySetInnerHTML=${{ __html: n }}
      />`;
  });
}
const Pg = /* @__PURE__ */ Z("jcl-component.dummy", `
    .jcl-component.dummy.visible-pattern {
      background-image:repeating-linear-gradient(-45deg,
        rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
        rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
      ); background-size:11.31px 11.31px;
    }
  `);
function em(e) {
  return U(() => {
    $c(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style) ?? "", o = ke(e.Width), r = ke(e.Height), a = (o == null ? "" : `width:${o}px;`) + (r == null ? "" : `height:${r}px;`) + n;
    return y`<div class="jcl-component spacer ${t}"
        style=${a} aria-hidden="true" ...${e.RestProps}/>`;
  });
}
function tm(e) {
  return U(() => {
    $c(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style) ?? "", o = ke(e.Width), r = ke(e.Height), a = (o == null ? "" : `width:${o}px;`) + (r == null ? "" : `height:${r}px;`) + n;
    return y`<div class="jcl-component expanding-spacer ${t}"
        style=${a} aria-hidden="true" ...${e.RestProps}/>`;
  });
}
const $c = /* @__PURE__ */ Z("jcl-component.expanding-spacer", `
    .jcl-component.expanding-spacer {
      flex:1 0 auto !important;
    }
  `);
function nm(e) {
  return U(() => {
    jc(), Ic(), e = K(e);
    const t = D(e.Class) ?? "";
    return y`<div class="jcl-component horizontal-separator ${t}"
        role="separator" aria-orientation="horizontal" ...${e.RestProps}/>`;
  });
}
const jc = /* @__PURE__ */ Z("jcl-component.horizontal-separator", `
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
function om(e) {
  return U(() => {
    jc(), Ic(), e = K(e);
    const t = D(e.Class) ?? "";
    return y`<div class="jcl-component vertical-separator ${t}"
        role="separator" aria-orientation="vertical" ...${e.RestProps}/>`;
  });
}
const Ic = /* @__PURE__ */ Z("jcl-component.vertical-separator", `
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
function Vr(e) {
  return U(() => {
    am(), sm(), cm(), um(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Value), o = bn(e.ARIALevel);
    return y`<div class=${t} aria-level=${o} ...${e.RestProps}>
        ${n ?? e.children}
      </>`;
  });
}
function rm(e) {
  return e = {
    role: "heading",
    "aria-level": 1,
    ...e,
    class: `jcl-component title ${e.class ?? ""}`
  }, Vr(e);
}
const am = /* @__PURE__ */ Z("jcl-component.title", `
    .jcl-component.title {
      font-size:22px; font-weight:bold; line-height:32px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function im(e) {
  return e = {
    role: "heading",
    "aria-level": 2,
    ...e,
    class: `jcl-component subtitle ${e.class ?? ""}`
  }, Vr(e);
}
const sm = /* @__PURE__ */ Z("jcl-component.subtitle", `
    .jcl-component.subtitle {
      font-size:18px; font-weight:bold; line-height:27px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function lm(e) {
  return e = { ...e, class: `jcl-component label ${e.class ?? ""}` }, Vr(e);
}
const cm = /* @__PURE__ */ Z("jcl-component.label", `
    .jcl-component.label {
      height:30px;
      font-size:14px; font-weight:bold; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function dm(e) {
  return e = { ...e, class: `jcl-component textlineview ${e.class ?? ""}` }, Vr(e);
}
const um = /* @__PURE__ */ Z("jcl-component.textlineview", `
    .jcl-component.textlineview {
      height:30px;
      font-size:14px; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Sc(e) {
  return U(() => {
    pm(), hm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value);
    return y`<div class=${t} ...${e.RestProps}>
        ${n ?? e.children}
      </>`;
  });
}
function ci(e) {
  return e = { ...e, class: `jcl-component description ${e.class ?? ""}` }, Sc(e);
}
const pm = /* @__PURE__ */ Z("jcl-component.description", `
    .jcl-component.description {
      font-size:14px; font-weight:normal; line-height:21px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function fm(e) {
  return e = { ...e, class: `jcl-component fineprint ${e.class ?? ""}` }, Sc(e);
}
const hm = /* @__PURE__ */ Z("jcl-component.fineprint", `
    .jcl-component.fineprint {
      font-size:12px; font-weight:normal; line-height:18px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function gm(e) {
  return U(() => {
    mm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = J(e.preformatted) ?? !1;
    return y`<div class="jcl-component textview ${t} ${o ? "preformatted" : ""}"
        ...${e.RestProps}
      >${n ?? ""}</>`;
  });
}
const mm = /* @__PURE__ */ Z("jcl-component.textview", `
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
function bm(e) {
  return U(() => {
    ym(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value) ?? "";
    return y`<div class="jcl-component htmlview ${t}" ...${e.RestProps}
        dangerouslySetInnerHTML=${{ __html: n }}
      />`;
  });
}
const ym = /* @__PURE__ */ Z("jcl-component.htmlview", `
    .jcl-component.htmlview {
      overflow:auto; overscroll-behavior:contain;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
let Cr, $r, sa, Un;
const xm = Go(async () => {
  const [
    e,
    t,
    n,
    o
  ] = await Promise.all([
    gt("marked"),
    gt("marked-katex-extension"),
    gt("marked-highlight"),
    gt("highlight.js/lib/core")
  ]);
  Cr = e.Marked, $r = t.default ?? t, sa = n.markedHighlight, Un = o.default ?? o;
  const r = [
    // 'python' is not registered
    "css",
    "javascript",
    "java",
    "json",
    "typescript",
    "xml"
  ], a = await Promise.all(r.map(
    (i) => gt("highlight.js/lib/languages/" + i)
  ));
  r.forEach((i, s) => {
    Un.registerLanguage(i, a[s].default);
  }), Dn = new Cr(), Dn.setOptions({
    gfm: !0,
    breaks: !0,
    pedantic: !1
  }), Dn.use($r({
    throwOnError: !1,
    nonStandard: !1
    // "$...$" needs a blank/punctuation around it
  })), Dn.use(sa({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(i, s) {
      const c = Un.getLanguage(s) ? s : "plaintext";
      return Un.highlight(i, { language: c }).value;
    }
  }));
});
function Uo() {
  return xm();
}
let Dn;
async function vm() {
  return await Uo(), Dn;
}
function _c(e) {
  return U(() => {
    wm();
    const t = ao(Uo);
    e = K(e);
    const n = D(e.Class) ?? "", o = V(e.Value, Vo) ?? "", r = Qt(() => t ? Dn.parse(o) : "", [t, o]);
    return y`<div class="jcl-component markdownview ${n}"
        ...${e.RestProps}
        dangerouslySetInnerHTML=${{ __html: r }}
      />`;
  });
}
const wm = /* @__PURE__ */ Z("jcl-component.markdownview", `
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
  `), Dc = ["none", "stretch", "cover", "contain"], Lc = [
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
function km(e) {
  return U(() => {
    Cm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style) ?? "", o = Vn(e.Value), r = Rn(e.alt) ?? "(image)", a = Rn(e.Placeholder) ?? "(empty)", i = V(e.Scaling, (u) => he(u, Dc)), s = V(e.Alignment, (u) => he(u, Lc)), c = (i === "stretch" ? "fill" : i) ?? "contain", d = s ?? "center center";
    return o == null ? y`<${li} class="jcl-component imageview ${t}" style=${n}
          role="img" aria-label=${a}
          ...${e.RestProps}
        >
          <${ci} value=${a}/>
        </>` : y`<img class="jcl-component imageview ${t ?? ""}"
          src=${o} alt=${r}
          style="object-fit:${c}; object-position:${d}; ${n}"
          ...${e.RestProps}
        />`;
  });
}
const Cm = /* @__PURE__ */ Z("jcl-component.imageview", `
    div.jcl-component.imageview {
      display:flex; align-items:center; justify-content:center;
    }
    img.jcl-component.imageview {
      object-fit:contain; object-position:center;
    }
  `);
function $m(e) {
  return U(() => {
    jm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style) ?? "", o = ae(e.Value), r = Rn(e.alt) ?? "SVG image", a = Rn(e.Placeholder) ?? "(empty)", i = V(e.Scaling, (p) => he(p, Dc)), s = V(e.Alignment, (p) => he(p, Lc)), c = Qt(
      () => "data:image/svg+xml," + encodeURIComponent(o ?? ""),
      [o]
    ), d = (i === "stretch" ? "fill" : i) ?? "contain", u = s ?? "center center";
    return o == null ? y`<${li} class="jcl-component svgview ${t}" style=${n}
          role="img" aria-label=${a}
          ...${e.RestProps}
        >
          <${ci} value=${a}/>
        </>` : y`<img class="jcl-component svgview ${t ?? ""}"
          src=${c} alt=${r}
          style="object-fit:${d}; object-position:${u}; ${n ?? ""}"
          ...${e.RestProps}
        />`;
  });
}
const jm = /* @__PURE__ */ Z("jcl-component.svgview", `
    .jcl-component.svgview {
      object-fit:contain; object-position:center;
    }
  `), Im = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-scripts", Sm = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "origin-when-cross-origin",
  "same-origin",
  "strict-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
];
function _m(e) {
  return U(() => {
    Dm(), e = K(e);
    const t = D(e.Class) ?? "", n = Vn(e.Value), o = D(e.Title), r = D(e.allow), a = J(e.allowFullscreen), i = V(e.ReferrerPolicy, (d) => he(d, Sm)), s = D(e.Sandbox);
    return y`<iframe class="jcl-component webview ${t}" src=${n}
        title=${o} allow=${r} allowfullscreen=${a}
        sandbox=${s === "none" ? void 0 : s ?? Im} referrerpolicy=${i}
        ...${e.RestProps}
      />`;
  });
}
const Dm = /* @__PURE__ */ Z("jcl-component.webview", `
    .jcl-component.webview {
      overflow:auto;
    }
  `);
function Mc(e, t, n) {
  const o = n != null, r = le((s) => {
    if (t)
      return Cn(s);
    E(e + ' callback "onClick"', n, s);
  }, [t, n]), a = le((s) => {
    (s.key === "Enter" || s.key === " ") && (s.preventDefault(), t || E(e + ' callback "onClick"', n, s));
  }, [t, n]);
  return { isInteractive: o, _onClick: r, _onKeyDown: a, Cursor: t ? "not-allowed" : o ? "pointer" : "auto" };
}
function Lm(e) {
  return U(() => {
    Mm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = Vn(e.Value) ?? `${xr}/circle-information.png`, r = Dt(e.Color) ?? "black";
    const a = Rn(e.Label), i = J(e.active) ?? !1, s = J(e.disabled) ?? !1, c = T(e.onClick), { isInteractive: d, _onClick: u, _onKeyDown: p, Cursor: l } = Mc("Icon", s, c);
    return y`<div
        class="jcl-component icon ${s ? "disabled" : ""} ${i ? "active" : ""} ${t}"
        style=${n} tabIndex=${d ? s ? -1 : 0 : void 0}
        role=${d ? "button" : void 0}
        aria-label=${a}
        aria-disabled=${d && s ? "true" : void 0}
        onClick=${u}
        onKeyDown=${d ? p : void 0}
        ...${e.RestProps}
      >
        <div style="
          -webkit-mask-image:url(${o}); mask-image:url(${o});
          background-color:${r};
          cursor:${l};
        "/>
      </>`;
  });
}
const Mm = /* @__PURE__ */ Z("jcl-component.icon", `
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
  `), di = [
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
function Am(e) {
  return U(() => {
    Tm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = V(e.Value, (f) => he(f, di)) ?? "fa-question-circle-o", r = Dt(e.Color) ?? "black";
    const a = Rn(e.Label), i = J(e.active) ?? !1, s = J(e.disabled) ?? !1, c = T(e.onClick), { isInteractive: d, _onClick: u, _onKeyDown: p, Cursor: l } = Mc("FAIcon", s, c);
    return y`<div
        class="jcl-component fa-icon fa ${o} ${s ? "disabled" : ""} ${i ? "active" : ""} ${t}"
        role=${d ? "button" : void 0}
        tabIndex=${d ? s ? -1 : 0 : void 0}
        aria-label=${a}
        aria-disabled=${d && s ? "true" : void 0}
        style="${n}; color:${r}; cursor:${l};"
        onClick=${u}
        onKeyDown=${d ? p : void 0}
        ...${e.RestProps}
      />`;
  });
}
const Tm = /* @__PURE__ */ Z("jcl-component.fa-icon", `
    .jcl-component.fa-icon {
      width:24px !important; height:24px !important;
      font-size:18px; line-height:24px; text-align:center;
      pointer-events:auto;
    }
  `);
function Rm(e) {
  return U(() => {
    Fm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return n == null ? y`<button class="jcl-component native-button ${t}" ...${e.RestProps}>
          ${o}
        </>` : y`<button class="jcl-component native-button ${t}" ...${e.RestProps}
          dangerouslySetInnerHTML=${{ __html: n }}
        />`;
  });
}
const Fm = /* @__PURE__ */ Z("jcl-component.native-button", `
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
function Om(e) {
  return U(() => {
    zm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = V(e.Value, (l) => Jt(l) || Je(l));
    const r = J(e.disabled), a = T(e.onValueInput), i = T(e.onClick);
    o = o ?? wt;
    const { actualValue: s, actualDisabling: c } = lt(o, r), d = s == !0, u = s == null || Je(o), p = le((l) => {
      if (Ae(l, c), c == !0)
        return;
      E('nativeCheckbox callback "onClick"', i, l);
      const f = l.target.checked;
      E(
        'nativeCheckbox callback "onValueInput"',
        a,
        f,
        l
      );
    }, [c, i, a]);
    return y`<div class="jcl-component native-checkbox ${c ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="checkbox"
          checked=${d} indeterminate=${u}
          disabled=${c} onClick=${p} ...${e.RestProps}
        />
      </>`;
  });
}
const zm = /* @__PURE__ */ Z("jcl-component.native-checkbox", `
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
function Vm(e) {
  return U(() => {
    Em(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = V(e.Value, (p) => Jt(p) || Je(p));
    const r = J(e.disabled), a = T(e.onValueInput), i = T(e.onClick);
    o = o ?? wt;
    const { actualValue: s, actualDisabling: c } = lt(o, r), d = s == !0, u = le((p) => {
      if (Ae(p, c), c == !0)
        return;
      E('nativeRadiobutton callback "onClick"', i, p);
      const l = p.target.checked;
      E(
        'nativeRadiobutton callback "onValueInput"',
        a,
        l,
        p
      );
    }, [c, i, a]);
    return y`<div class="jcl-component native-radiobutton ${c ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="radio" checked=${d} disabled=${c} onClick=${u} ...${e.RestProps}/>
      </>`;
  });
}
const Em = /* @__PURE__ */ Z("jcl-component.native-radiobutton", `
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
function Nm(e) {
  return U(() => {
    Bm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = qe(e.Value), r = qe(e.Min ?? e.Minimum), a = qe(e.Low ?? e.lowerBound), i = qe(e.Opt ?? e.Optimum), s = qe(e.High ?? e.upperBound), c = qe(e.Max ?? e.Maximum);
    return y`<div class="jcl-component native-gauge ${t}" style=${n}>
        <meter
          value=${o} min=${r} low=${a} opt=${i}
          high=${s} max=${c} ...${e.RestProps}
        />
      </>`;
  });
}
const Bm = /* @__PURE__ */ Z("jcl-component.native-gauge", `
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
function Wm(e) {
  return U(() => {
    Hm(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = qe(e.Value), r = qe(e.Max ?? e.Maximum);
    return y`<div class="jcl-component native-progressbar ${t}" style=${n}>
        <progress value=${o} max=${r} ...${e.RestProps}/>
      </>`;
  });
}
const Hm = /* @__PURE__ */ Z("jcl-component.native-progressbar", `
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
function Gm(e) {
  return U(() => {
    Um(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (j) => ut(j) || Je(j)), r = qe(e.Min ?? e.Minimum), a = V(e.Step, (j) => To(j, 0, 1 / 0, !1, !1)), i = qe(e.Max ?? e.Maximum), s = V(e.Hashmarks, (j) => $e(j, Ee)), c = J(e.disabled) ?? !1, d = T(e.onValueInput), u = T(e.onInput), p = T(e.onBlur), { ViewRef: l, shownValue: f, ValueToShow: h } = vn(
      Je(o) || o != null && !isNaN(o) ? o : wt
    ), { actualValue: g, actualDisabling: b } = lt(h, c), { _onInput: m, _onBlur: v } = wn({
      Name: "nativeSlider",
      actualDisabling: b,
      shownValue: f,
      onInput: u,
      onValueInput: d,
      onBlur: p,
      processedInput: (j) => f.current = parseFloat(j.target.value)
    }), { SuggestionId: C, SuggestionList: S } = kn(
      s,
      (j) => {
        const { Value: x, Label: w } = Tt(j);
        return y`<option value=${x}>${w}</option>`;
      }
    );
    return y`<div class="jcl-component native-slider ${t}" style=${n}>
        <input type="range" ref=${l} disabled=${b}
          value=${g} min=${r} max=${i} step=${a}
          list=${C}
          onInput=${m} onBlur=${v} ...${e.RestProps}
        />${S}
      </>`;
  });
}
const Um = /* @__PURE__ */ Z("jcl-component.native-slider", `
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
function Rt(e) {
  const {
    Name: t,
    InputType: n,
    ClassName: o,
    ValueIsValid: r,
    withSpellChecking: a = !1,
    withMultiple: i = !1,
    withSuggestions: s = !0,
    Styled: c = !1
  } = e;
  return function(u) {
    return U(() => {
      (c ? En : ui)(), u = K(u);
      const p = D(u.Class) ?? "", l = V(u.Value, (pe) => r(pe) || Je(pe)), f = i ? J(u.multiple) : void 0, h = J(u.invalid), g = D(u.Placeholder), b = J(u.readonly), m = ke(u.minLength), v = ke(u.maxLength), C = D(u.Pattern), S = a ? J(u.SpellCheck) : void 0, j = s ? V(u.Suggestions, (pe) => $e(pe, r)) : void 0, x = c ? V(u.Size, (pe) => he(pe, ["small", "normal", "large"])) ?? "normal" : void 0, w = J(u.disabled) ?? !1, R = T(u.onValueInput), L = T(u.onInput), $ = T(u.onBlur), { ViewRef: I, shownValue: M, ValueToShow: _ } = vn(l), { actualValue: z, actualPlaceholder: N, actualDisabling: Y } = lt(_, w, g), { _onInput: Q, _onBlur: fe } = wn({
        Name: t,
        actualDisabling: Y,
        shownValue: M,
        onInput: L,
        onValueInput: R,
        onBlur: $
      }), { SuggestionId: P, SuggestionList: X } = kn(j), te = c ? `jcl-component styled-input ${o} ${ht(x)}` : `jcl-component native-textual-input ${o}`;
      return y`<input type=${n} class="${te} ${p} ${h ? "invalid" : ""}" ref=${I}
          value=${z ?? ""} minlength=${m} maxlength=${v}
          multiple=${f} readOnly=${b} placeholder=${N}
          pattern=${C} spellcheck=${S}
          disabled=${Y} list=${P}
          aria-invalid=${c && h == !0 ? "true" : void 0}
          onInput=${Q} onBlur=${fe} ...${u.RestProps}
        />${X}`;
    });
  };
}
function Pt(e) {
  const { Name: t, InputType: n, ClassName: o, ValueIsValid: r, Pattern: a, Styled: i = !1 } = e, s = a == null;
  return function(d) {
    return U(() => {
      (i ? En : ui)(), d = K(d);
      const u = D(d.Class) ?? "", p = V(d.Value, (Y) => r(Y) || Je(Y)), l = J(d.readonly), f = s ? J(d.withSeconds) : void 0, h = V(d.Min ?? d.Minimum, r), g = V(d.Max ?? d.Maximum, r), b = V(d.Suggestions, (Y) => $e(Y, r)), m = i ? V(d.Size, (Y) => he(Y, ["small", "normal", "large"])) ?? "normal" : void 0, v = J(d.disabled) ?? !1, C = T(d.onValueInput), S = T(d.onInput), j = T(d.onBlur), { ViewRef: x, shownValue: w, ValueToShow: R } = vn(p), { actualValue: L, actualDisabling: $ } = lt(R, v), { _onInput: I, _onBlur: M } = wn({
        Name: t,
        actualDisabling: $,
        shownValue: w,
        onInput: S,
        onValueInput: C,
        onBlur: j
      }), { SuggestionId: _, SuggestionList: z } = kn(b), N = i ? `jcl-component styled-input ${o} ${ht(m)}` : `jcl-component native-temporal-input ${o}`;
      return y`<input type=${n} class="${N} ${u}" ref=${x}
          value=${L ?? ""} min=${h} max=${g}
          step=${s ? f ? 1 : 60 : void 0} pattern=${a}
          readOnly=${l}
          disabled=${$} list=${_}
          onInput=${I} onBlur=${M} ...${d.RestProps}
        />${z}`;
    });
  };
}
const ui = /* @__PURE__ */ Z("jcl-component.native-textual-input", `
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
  `), Km = /* @__PURE__ */ Rt({
  Name: "nativeTextlineInput",
  InputType: "text",
  ClassName: "native-textline-input",
  ValueIsValid: Ee,
  withSpellChecking: !0
}), qm = /* @__PURE__ */ Rt({
  Name: "nativePasswordInput",
  InputType: "password",
  ClassName: "native-password-input",
  ValueIsValid: Ee,
  withSuggestions: !1
});
function Xm(e) {
  return U(() => {
    ui(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Value, (I) => ut(I) || Je(I)), o = J(e.invalid), r = D(e.Placeholder), a = J(e.readonly), i = qe(e.Min ?? e.Minimum), s = V(e.Step, (I) => To(I, 0, 1 / 0, !1, !1)), c = qe(e.Max ?? e.Maximum), d = wr(e.Digits, 0, 15), u = J(e.withoutTrailingZeros) ?? !1, p = V(e.Suggestions, (I) => $e(I, ut)), l = J(e.disabled) ?? !1, f = T(e.onValueInput), h = T(e.onInput), g = T(e.onBlur);
    let b = s;
    if (d != null) {
      const I = Math.pow(10, -d);
      b = Math.max(s ?? I, I);
    }
    const { ViewRef: m, shownValue: v, ValueToShow: C } = vn(
      Je(n) || n != null && !isNaN(n) ? n : wt,
      (I) => (d != null && ut(I) && (I = I.toFixed(d), u && (I = parseFloat(I))), I)
    ), { actualValue: S, actualPlaceholder: j, actualDisabling: x } = lt(C, l, r), { _onInput: w, _onBlur: R } = wn({
      Name: "nativeNumberInput",
      actualDisabling: x,
      shownValue: v,
      onInput: h,
      onValueInput: f,
      onBlur: g,
      processedInput: (I) => {
        const M = parseFloat(I.target.value);
        return v.current = isNaN(M) ? void 0 : M, v.current;
      }
    }), { SuggestionId: L, SuggestionList: $ } = kn(p);
    return y`<input type="number" ref=${m}
        class="jcl-component native-textual-input native-number-input ${t} ${o ? "invalid" : ""}"
        value=${S ?? ""} min=${i} max=${c} step=${b}
        readOnly=${a} placeholder=${j}
        disabled=${x} list=${L}
        onInput=${w} onBlur=${R} ...${e.RestProps}
      />${$}`;
  });
}
const Ym = /* @__PURE__ */ Rt({
  Name: "nativeEMailAddressInput",
  InputType: "email",
  ClassName: "native-emailaddress-input",
  ValueIsValid: Tn,
  withMultiple: !0
}), Jm = /* @__PURE__ */ Rt({
  Name: "nativePhoneNumberInput",
  InputType: "tel",
  ClassName: "native-phonenumber-input",
  ValueIsValid: Mr
}), Zm = /* @__PURE__ */ Rt({
  Name: "nativeURLInput",
  InputType: "url",
  ClassName: "native-url-input",
  ValueIsValid: at
}), Qm = "([01]\\d|2[0-3]):[0-5]\\d(:[0-5]\\d)?", Pm = /* @__PURE__ */ oo(Qm);
function Ac(e) {
  return st(e, Pm);
}
const eb = /* @__PURE__ */ Pt({
  Name: "nativeTimeInput",
  InputType: "time",
  ClassName: "native-time-input",
  ValueIsValid: Ac
}), tb = "\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])T([01]\\d|2[0-3]):[0-5]\\d(:[0-5]\\d)?", nb = /* @__PURE__ */ oo(tb);
function Tc(e) {
  return st(e, nb);
}
const ob = /* @__PURE__ */ Pt({
  Name: "nativeDateTimeInput",
  InputType: "datetime-local",
  ClassName: "native-datetime-input",
  ValueIsValid: Tc
}), pi = "\\d{4}-\\d{2}-\\d{2}", rb = /* @__PURE__ */ oo(pi);
function zt(e) {
  return st(e, rb);
}
const ab = /* @__PURE__ */ Pt({
  Name: "nativeDateInput",
  InputType: "date",
  ClassName: "native-date-input",
  ValueIsValid: zt,
  Pattern: pi
}), fi = "\\d{4}-W\\d{2}", ib = /* @__PURE__ */ oo(fi);
function Rc(e) {
  return st(e, ib);
}
const sb = /* @__PURE__ */ Pt({
  Name: "nativeWeekInput",
  InputType: "week",
  ClassName: "native-week-input",
  ValueIsValid: Rc,
  Pattern: fi
}), hi = "\\d{4}-\\d{2}", lb = /* @__PURE__ */ oo(hi);
function gi(e) {
  return st(e, lb);
}
const cb = /* @__PURE__ */ Pt({
  Name: "nativeMonthInput",
  InputType: "month",
  ClassName: "native-month-input",
  ValueIsValid: gi,
  Pattern: hi
}), db = /* @__PURE__ */ Rt({
  Name: "nativeSearchInput",
  InputType: "search",
  ClassName: "native-search-input",
  ValueIsValid: Ee,
  withSpellChecking: !0
});
function ub(e) {
  return U(() => {
    pb(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (g) => Ee(g) || Je(g)), r = D(e.Placeholder), a = J(e.multiple), i = D(e.Accept), s = J(e.disabled) ?? !1, c = T(e.onValueInput), d = T(e.onInput), u = o ?? wt, { actualValue: p, actualPlaceholder: l, actualDisabling: f } = lt(u, s, r), h = le((g) => {
      if (Ae(g), f == !0)
        return;
      E('nativeFileInput callback "onInput"', d, g);
      let b = Array.from(g.target.files);
      E(
        'nativeFileInput callback "onValueInput"',
        c,
        b,
        g
      ), g.target.value = "";
    }, [f, d, c]);
    return y`<label class="jcl-component native-file-input ${t} ${f ? "disabled" : ""}"
        style=${n}
      >
        ${p == null ? y`<span>${l ?? ""}</span>` : y`<span>${p}</span>`}
        <input type="file" style="display:none"
          multiple=${a} accept=${i}
          disabled=${f} onInput=${h} ...${e.RestProps}
        />
      </label>`;
  });
}
const pb = /* @__PURE__ */ Z("jcl-component.native-file-input", `
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
function fb(e) {
  return U(() => {
    hb(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (g) => An(g) || Je(g)), r = J(e.readonly), a = V(e.Suggestions, (g) => $e(g, An));
    let i = ke(e.minWidth);
    const s = J(e.disabled) ?? !1, c = T(e.onValueInput), d = T(e.onInput), { actualValue: u, actualDisabling: p } = lt(o, s), l = le((g) => {
      if (Ae(g), p == !0)
        return;
      E('nativeColorInput callback "onInput"', d, g);
      const b = g.target.value;
      E(
        'nativeColorInput callback "onValueInput"',
        c,
        b,
        g
      );
    }, [p, d, c]), { SuggestionId: f, SuggestionList: h } = kn(a);
    return i == null && (i = 40 + (a != null && a.length > 0 ? 20 : 0)), y`<input type="color" class="jcl-component native-color-input ${t}"
        style="min-width:${i}px; ${n}"
        value=${u} list=${f}
        disabled=${p} onInput=${l} ...${e.RestProps}
      />${h}`;
  });
}
const hb = /* @__PURE__ */ Z("jcl-component.native-color-input", `
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
function gb(e) {
  return U(() => {
    mb(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Value, (h) => Ee(h) || Je(h)), o = D(e.Placeholder), r = V(e.Options, (h) => $e(h, Ee)) ?? Te("Options"), a = J(e.disabled) ?? !1, i = T(e.onValueInput), s = T(e.onInput), { actualValue: c, actualPlaceholder: d, actualDisabling: u } = lt(n, a, o), p = le((h) => {
      if (Ae(h), u == !0)
        return;
      E('nativeDropDown callback "onInput"', s, h);
      let g = h.target.value;
      E(
        'nativeDropDown callback "onValueInput"',
        i,
        g,
        h
      );
    }, [u, s, i]), f = !r.some((h) => {
      const { Value: g, isRuler: b } = Tt(h);
      return !b && g === c;
    }) && d != null;
    return y`<select class="jcl-component native-dropdown ${t}"
        disabled=${u} onInput=${p} ...${e.RestProps}
      >${f ? y`<option value="" selected disabled>${d}</option>` : ""}${r.map(
      (h) => {
        const {
          Value: g,
          Label: b,
          disabled: m,
          isRuler: v
        } = Tt(h);
        return v ? y`<hr/>` : y`<option value=${g}
                selected=${g === c} disabled=${m}
              >${b}</option>`;
      }
    )}</select>`;
  });
}
const mb = /* @__PURE__ */ Z("jcl-component.native-dropdown", `
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
function mi(e) {
  return U(() => {
    bb(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (L) => Vo(L) || Je(L)), r = J(e.invalid), a = D(e.Placeholder), i = J(e.readonly), s = ke(e.minLength), c = ke(e.maxLength), d = J(e.wrap), u = V(e.Resizability, (L) => he(L, ["none", "horizontal", "vertical", "both"])), p = J(e.SpellCheck), l = J(e.disabled) ?? !1, f = T(e.onValueInput), h = T(e.onInput), g = T(e.onBlur), { ViewRef: b, shownValue: m, ValueToShow: v } = vn(o), { actualValue: C, actualPlaceholder: S, actualDisabling: j } = lt(v, l, a), { _onInput: x, _onBlur: w } = wn({
      Name: "nativeTextInput",
      actualDisabling: j,
      shownValue: m,
      onInput: h,
      onValueInput: f,
      onBlur: g
    }), R = Bt();
    return y`<textarea class="jcl-component native-text-input ${t} ${r ? "invalid" : ""}"
        key=${R} ref=${b}
        style="${d == !0 ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${u ?? "none"}; ${n}"
        value=${C ?? ""} minlength=${s} maxlength=${c}
        readOnly=${i} placeholder=${S}
        spellcheck=${p} disabled=${j}
        onInput=${x} onBlur=${w} ...${e.RestProps}
      />`;
  });
}
const bb = /* @__PURE__ */ Z("jcl-component.native-text-input", `
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
function yb(e) {
  return U(() => {
    xb(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = Vn(e.Icon) ?? Te("Icon"), r = Dt(e.Color), a = J(e.multiple), i = D(e.Accept), s = J(e.disabled) ?? !1, c = T(e.onValueInput), d = T(e.onInput), u = le((p) => {
      if (Ae(p), s == !0)
        return;
      E('nativePseudoFileInput callback "onInput"', d, p);
      let l = Array.from(p.target.files);
      E(
        'nativePseudoFileInput callback "onValueInput"',
        c,
        l,
        p
      ), p.target.value = "";
    }, [s, d, c]);
    return y`<label
        class="jcl-component legacy-pseudo-file-input ${s ? "disabled" : ""} ${t}"
        style=${n}
      >
        <div style="
          -webkit-mask-image:url(${o}); mask-image:url(${o});
          background-color:${r ?? "black"};
        "/>
        <input type="file" style="display:none"
          multiple=${a} accept=${i}
          disabled=${s} onInput=${u} ...${e.RestProps}
        />
      </label>`;
  });
}
const xb = /* @__PURE__ */ Z("jcl-component.legacy-pseudo-file-input", `
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
function vb(e) {
  return U(() => {
    wb(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (h) => Ee(h) || Je(h)), r = Vn(e.Icon) ?? Te("Icon"), a = Dt(e.Color), i = V(e.Options, (h) => $e(h, Ee)) ?? Te("Options"), s = J(e.disabled) ?? !1, c = T(e.onValueInput), d = T(e.onInput), { actualValue: u, actualDisabling: p } = lt(o, s), l = le((h) => {
      if (Ae(h), p == !0)
        return;
      E('legacyPseudoDropDown callback "onInput"', d, h);
      let g = h.target.value;
      E(
        'legacyPseudoDropDown callback "onValueInput"',
        c,
        g,
        h
      );
    }, [p, d, c]), f = i.some((h) => {
      const { Value: g, isRuler: b } = Tt(h);
      return !b && g === u;
    });
    return y`<label
        class="jcl-component legacy-pseudo-dropdown ${s ? "disabled" : ""} ${t}"
        style=${n}
      >
        <div style="
          -webkit-mask-image:url(${r}); mask-image:url(${r});
          background-color:${a ?? "black"};
        "/>
        <select
          disabled=${p} onInput=${l} ...${e.RestProps}
        >${f ? "" : y`<option hidden selected value=""></option>`}${i.map(
      (h) => {
        const {
          Value: g,
          Label: b,
          disabled: m,
          isRuler: v
        } = Tt(h);
        return v ? y`<hr/>` : y`<option value=${g}
                  selected=${g === u} disabled=${m}
                >${b}</option>`;
      }
    )}</select>
      </label>`;
  });
}
const wb = /* @__PURE__ */ Z("jcl-component.legacy-pseudo-dropdown", `
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
function kb(e) {
  return U(() => {
    Cb(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Placeholder), r = J(e.multiple) ?? !1, a = V(e.Accept, (g) => $e(g, Ee)) ?? [], i = J(e.disabled) ?? !1, s = T(e.onValueInput), c = T(e.onInput), d = T(e.onDrop), u = (g) => {
      let b = Array.from(g);
      return a.length > 0 && (b = b.filter((m) => a.some((v) => (v = v.trim().toLowerCase(), v.startsWith(".") ? m.name.toLowerCase().endsWith(v) : v.endsWith("/*") ? m.type.toLowerCase().startsWith(v.slice(0, -1)) : m.type.toLowerCase() === v)))), !r && b.length > 1 && (b = b.slice(0, 1)), b;
    }, p = le((g) => {
      if (Ae(g), i == !0)
        return;
      const b = u(g.target.files);
      if (b.length === 0) {
        g.target.value = "";
        return;
      }
      E('legacyFileDropArea callback "onInput"', c, g), E(
        'legacyFileDropArea callback "onValueInput"',
        s,
        b,
        g
      ), g.target.value = "";
    }, [i, r, a, c, s]), l = le((g) => Ae(g), []), f = le((g) => Ae(g), []), h = le((g) => {
      if (Ae(g), i == !0)
        return;
      const b = u(g.dataTransfer.files);
      b.length !== 0 && (E('legacyFileDropArea callback "onDrop"', d, g), E(
        'legacyFileDropArea callback "onValueInput"',
        s,
        b,
        g
      ));
    }, [i, r, a, d, s]);
    return y`<label class="jcl-component legacy-file-drop-area ${t} ${i ? "disabled" : ""}"
        style=${n}
        onDragEnter=${l} onDragOver=${f} onDrop=${h}
      >
        <span>${o ?? ""}</span>
        <input type="file"
          multiple=${r} accept=${a.join(",")}
          disabled=${i} onInput=${p} ...${e.RestProps}
        />
      </label>`;
  });
}
const Cb = /* @__PURE__ */ Z("jcl-component.legacy-file-drop-area", `
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
function $b(e) {
  return U(() => {
    jb(), e = K(e);
    const t = D(e.Class) ?? "";
    let n = ke(e.activeIndex);
    const o = ke(e.GapIndex), r = J(e.disabled) ?? !1, a = T(e.onActivationChange), i = ft(), s = Ot(n, 0);
    n = s.current;
    const c = le((p, l) => {
      if (r)
        return Cn(l);
      s.current = p, i(), E('TabStrip callback "onActivationChange"', a, p);
    }, [r, a, i]), d = le((p, l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), c(p, l));
    }, [c]), u = At(e.children).filter((p) => p?.type != null || typeof p == "number" || typeof p == "string" && p.trim() !== "");
    return y`<div
        class="jcl-component tabstrip ${r ? "disabled" : ""} ${t}"
        role="tablist" aria-disabled=${r ? "true" : void 0}
        ...${e.RestProps}
      >
        ${u.map((p, l) => {
      const f = l === o ? y`<div class="gap"/>` : "", h = l === n;
      return y`${f}<div
            class="${h ? "active" : ""} ${r ? "disabled" : ""} tab"
            role="tab" aria-selected=${h ? "true" : "false"}
            tabIndex=${r || h ? -1 : 0}
            onClick=${h ? void 0 : (g) => c(l, g)}
            onKeyDown=${h ? void 0 : (g) => d(l, g)}
          >${p}</>`;
    })}
      </>`;
  });
}
const jb = /* @__PURE__ */ Z("jcl-component.tabstrip", `
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
function Ib(e) {
  return U(() => {
    Sb(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Header) ?? Te("Header");
    let o = J(e.expanded);
    const r = J(e.disabled) ?? !1, a = T(e.onExpansionChange), i = ft(), s = Bt(), c = s + "-fold-header", d = s + "-fold-content", u = Ot(o, !1);
    o = u.current;
    const p = le((f) => {
      if (Ae(f), r)
        return;
      const h = !u.current;
      u.current = h, i(), E('AccordionFold callback "onExpansionChange"', a, h);
    }, [r, a, i]), l = le((f) => {
      (f.key === "Enter" || f.key === " ") && (f.preventDefault(), p(f));
    }, [p]);
    return y`<div
        class="jcl-component accordion-fold ${r ? "disabled" : ""} ${t}"
        ...${e.RestProps}
      >
        <div class="header">
          <div
            class="expander ${o ? "expanded" : "collapsed"}"
            role="button" aria-expanded=${o ? "true" : "false"}
            aria-controls=${d} aria-label=${n}
            aria-disabled=${r ? "true" : void 0}
            tabIndex=${r ? -1 : 0}
            onClick=${p} onKeyDown=${l}
          />
          <div id=${c} class="title">${n}</>
        </>
        ${o ? y`<div
          id=${d} class="content"
          role="region" aria-labelledby=${c}
        >${e.children}</>` : ""}
      </>`;
  });
}
const Sb = /* @__PURE__ */ Z("jcl-component.accordion-fold", `
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
      background:url(${xr}/caret-down.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .jcl-component.accordion-fold > .header > .expander.collapsed {
      background:url(${xr}/caret-right.png);
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
function Fc(e, t) {
  return e == null ? [] : e.filter((n) => t.has(n) ? !1 : (t.add(n), !0));
}
let qr = 0;
const Xr = /* @__PURE__ */ new WeakMap();
function bi(e, t, n) {
  return Xr.has(e) ? "" + Xr.get(e) : (qr++, Xr.set(e, qr), "" + qr);
}
function Oc(e, t, n, o = !1, r = "") {
  return typeof e.toHTML == "function" ? y`<div class="default" dangerouslySetInnerHTML=${{ __html: e.toHTML() }}/>` : y`<div class="default">${"" + e}</>`;
}
function zc(e) {
  return U(() => {
    _b(), e = K(e);
    const t = D(e.Class) ?? "";
    let n = V(e.List, (P) => $e(P, Me)) ?? Te("List");
    const o = D(e.Placeholder), r = T(e.KeyOfListItem) ?? bi, a = T(e.ListItemRenderer) ?? Oc, i = T(e.onListItemClick);
    let s = V(e.selectedItems, (P) => $e(P, Me));
    const c = ke(e.SelectionLimit) ?? 1 / 0, d = T(e.onSelectionChange), u = T(e.onListItemMove), p = V(e.DragMIMEType, So), l = T(e.SerializeListItems) ?? JSON.stringify, f = T(e.onListItemsDropped), h = V(e.DragEffect, (P) => Za.includes(P)), g = d != null, b = g && u != null, m = g && p != null, v = b || m, C = /* @__PURE__ */ new Set();
    n.forEach((P) => {
      C.has(P) && de(
        'InvalidArguments: the given "List" contains double entries'
      ), C.add(P);
    });
    const S = /* @__PURE__ */ new Set();
    g && (s = Fc(s, S), s.length > c && (s.slice(c).forEach(
      (P) => S.delete(P)
    ), s.length = c));
    const [j, x] = Ge({
      dragging: !1,
      DropTargetItem: void 0,
      DropMode: void 0
    });
    function w(P) {
      x((X) => ({ ...X, ...P }));
    }
    const R = q([]), L = q(!1), $ = (P) => {
      P.stopImmediatePropagation();
      const X = P.target.Item, te = P.target.Index;
      if (E(
        'FlatListView callback "onListItemClick"',
        i,
        X,
        n,
        te,
        P
      ), g) {
        const pe = P.pointerType !== "mouse" || P.ctrlKey || P.metaKey;
        I(X, n, te, pe);
      }
    }, I = (P, X, te, pe) => {
      if (c === 0)
        return s;
      let ve = s;
      return pe ? S.has(P) ? ve = s.filter(
        (Ne) => Ne !== P
      ) : s.length === c ? ve = [P] : ve = [...s, P] : ve = [P], E(
        'FlatListView callback "onSelectionChange"',
        d,
        ve,
        X
      ), ve;
    }, M = (P) => {
      const X = P.target.Item, te = P.target.Index;
      let pe = s;
      if (!S.has(X)) {
        const ve = P.ctrlKey || P.metaKey;
        pe = I(X, n, te, ve);
      }
      R.current = pe, L.current = !1, P.dataTransfer.effectAllowed = h ?? (m ? "copyMove" : "move"), m && P.dataTransfer.setData(
        p,
        l(pe)
      ), w({ dragging: !0 });
    }, _ = (P) => {
      const X = P.target, te = X.Item;
      if (te != null) {
        if (S.has(te)) {
          j.DropTargetItem != null && w({ DropTargetItem: void 0, DropMode: void 0 });
          return;
        }
        const ve = X.getBoundingClientRect().top + X.offsetHeight / 2, Ne = P.clientY < ve ? "before" : "after";
        P.preventDefault(), (j.DropTargetItem !== te || j.DropMode !== Ne) && w({ DropTargetItem: te, DropMode: Ne });
        return;
      }
      let pe;
      for (let ve = n.length - 1; ve >= 0; ve--)
        if (!S.has(n[ve])) {
          pe = n[ve];
          break;
        }
      if (pe == null) {
        j.DropTargetItem != null && w({ DropTargetItem: void 0, DropMode: void 0 });
        return;
      }
      P.preventDefault(), (j.DropTargetItem !== pe || j.DropMode !== "after") && w({ DropTargetItem: pe, DropMode: "after" });
    }, z = (P) => {
      if (!L.current) {
        const X = P.dataTransfer?.dropEffect ?? "none";
        X !== "none" && m && E(
          'FlatListView callback "onListItemsDropped"',
          f,
          X,
          R.current,
          n
        );
      }
      w({ dragging: !1, DropTargetItem: void 0, DropMode: void 0 });
    }, N = (P) => {
      const { DropTargetItem: X, DropMode: te } = j;
      if (X != null) {
        L.current = !0;
        const pe = n.filter(
          // in original order!
          (Xe) => S.has(Xe)
        ), ve = n.filter(
          (Xe) => !S.has(Xe)
        ), Ne = ve.indexOf(X) + (te === "before" ? 0 : 1);
        ve.splice(Ne, 0, ...pe), n = ve, E(
          'FlatListView callback "onListItemMove"',
          u,
          n,
          pe,
          X,
          te
        ), w({ DropTargetItem: void 0, DropMode: void 0 });
      }
    };
    if (n.length === 0)
      return y`<div
          class="jcl-component flatlistview placeholder ${t}"
          ...${e.RestProps}
        >
          <div dangerouslySetInnerHTML=${{ __html: o ?? "(empty)" }}/>
        </>`;
    const { dragging: Y, DropTargetItem: Q, DropMode: fe } = j;
    return y`<div
        class="jcl-component flatlistview ${Y ? "dragging" : ""} ${t}"
        role=${g ? "listbox" : "list"}
        aria-multiselectable=${g && c !== 1 ? "true" : void 0}
            onClick=${$}
        onDragStart=${v ? M : void 0}
         onDragOver=${b ? _ : void 0}
          onDragEnd=${v ? z : void 0}
             onDrop=${b ? N : void 0}
        ...${e.RestProps}
      >
        ${n.map((P, X) => {
      const te = Ke(
        'FlatListView callback "KeyOfListItem"',
        r,
        P,
        n,
        X
      ), pe = S.has(P), ve = P === Q ? fe : "";
      return y`<div
            class=${"itemview" + (pe ? " selected" : "") + (P === Q ? ` DropTarget ${fe}` : "")}
            role=${g ? "option" : "listitem"}
            aria-selected=${g ? pe ? "true" : "false" : void 0}
            key=${te} draggable=${v}
            ref=${(Ne) => {
        Ne != null && (Ne.Item = P, Ne.Index = X);
      }}
          >
            ${Ke(
        'FlatListView callback "ListItemRenderer"',
        a,
        P,
        n,
        X,
        pe,
        ve
      )}
          </>`;
    })}
      </>`;
  });
}
const _b = /* @__PURE__ */ Z("jcl-component.flatlistview", `
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
function Db(e) {
  return bi(e);
}
function Lb(e, t = !1, n = !1, o = !1, r = "") {
  return Oc(e);
}
function Mb(e) {
  return U(() => {
    Ab();
    const t = q([]), n = q(() => !0);
    e = K(e);
    const o = D(e.Class) ?? "", r = V(e.List, (F) => $e(F, Me)) ?? Te("List"), a = D(e.Placeholder), i = T(e.KeyOfListItem) ?? Db, s = T(e.ListItemRenderer) ?? Lb, c = T(e.ContentOfListItem), d = T(e.ContainerOfListItem), u = T(e.onListItemClick), p = T(e.ItemMayBeSelected) ?? n.current;
    let l = V(e.selectedItems, (F) => $e(F, Me));
    const f = ke(e.SelectionLimit) ?? 1 / 0, h = T(e.onSelectionChange), g = T(e.ItemMayBeExpanded) ?? n.current;
    let b = V(e.expandedItems, (F) => $e(F, Me)) ?? t.current;
    const m = T(e.onExpansionChange), v = T(e.ListItemMayAccept) ?? n.current, C = T(e.ListItemMayContain), S = T(e.onListItemMove), j = V(e.DragMIMEType, So), x = T(e.SerializeListItems) ?? JSON.stringify, w = T(e.onListItemsDropped), R = V(e.DragEffect, (F) => Za.includes(F)), L = h != null, $ = L && S != null, I = L && j != null, M = $ || I, _ = /* @__PURE__ */ new Set();
    function z(F) {
      F.forEach((G) => {
        _.has(G) && de(
          'InvalidArguments: the given "List" contains double entries'
        ), _.add(G);
        const oe = Ke(
          'NestedListView callback "ContentOfListItem"',
          c,
          G
        );
        oe != null && z(oe);
      });
    }
    z(r);
    function N(F, G) {
      let oe = Ke(
        'NestedListView callback "ContainerOfListItem"',
        d,
        G
      );
      switch (oe) {
        case null:
        case void 0:
          return !1;
        case F:
          return !0;
        default:
          return N(F, oe);
      }
    }
    const Y = /* @__PURE__ */ new Set();
    if (L) {
      l = Fc(l, Y);
      for (let F = l.length - 1; F >= 0; F--) {
        const G = l[F];
        l.some((oe, ye) => ye !== F && N(oe, G)) && (l.splice(F, 1), Y.delete(G));
      }
      l.length > f && (l.slice(f).forEach(
        (F) => Y.delete(F)
      ), l.length = f);
    }
    function Q(F) {
      return l.some(
        (G) => N(G, F)
      );
    }
    function fe(F) {
      for (let G = l.length - 1; G >= 0; G--) {
        const oe = l[G];
        N(F, oe) && (l.splice(G, 1), Y.delete(oe));
      }
    }
    function P(F, G) {
      if (f === 0)
        return l;
      let oe = l;
      return G ? Y.has(F) ? oe = l.filter(
        (ye) => ye !== F
      ) : l.length === f ? oe = [F] : oe = [...l.filter(
        (ye) => !N(F, ye)
      ), F] : oe = [F], E(
        'NestedListView callback "onSelectionChange"',
        h,
        oe
      ), oe;
    }
    const X = Qt(() => {
      const F = /* @__PURE__ */ new Map();
      return b == null ? b = [] : b = b.filter((G) => F.has(G) ? !1 : (F.set(G, "explicit"), !0)), F;
    }, [b]);
    function te(F) {
      X.has(F) ? ve(F) : pe(F);
    }
    function pe(F) {
      X.set(F, "explicit");
      let G = [...b, F], oe = Ke(
        'NestedListView callback "ContainerOfListItem"',
        d,
        F
      );
      for (; oe != null; )
        X.has(oe) || (X.set(oe, "explicit"), G.push(oe)), oe = Ke(
          'NestedListView callback "ContainerOfListItem"',
          d,
          oe
        );
      E(
        'NestedListView callback "onExpansionChange"',
        m,
        G
      );
    }
    function ve(F) {
      X.delete(F);
      const G = b.filter(
        (oe) => oe !== F
      );
      E(
        'NestedListView callback "onExpansionChange"',
        m,
        G
      );
    }
    function Ne(F) {
      X.has(F) || X.set(F, "automatic");
      let G = Ke(
        'NestedListView callback "ContainerOfListItem"',
        d,
        F
      );
      for (; G != null; )
        X.has(G) || X.set(G, "automatic"), G = Ke(
          'NestedListView callback "ContainerOfListItem"',
          d,
          G
        );
    }
    function Xe(F) {
      X.get(F) === "automatic" && X.delete(F);
      let G = Ke(
        'NestedListView callback "ContainerOfListItem"',
        d,
        F
      );
      for (; G != null; )
        X.get(G) === "automatic" && X.delete(G), G = Ke(
          'NestedListView callback "ContainerOfListItem"',
          d,
          G
        );
    }
    const rt = q(/* @__PURE__ */ Object.create(null)), mt = q({
      dragging: !1,
      DropTargetItem: void 0,
      DropMode: void 0,
      DropTargetTimer: void 0,
      TargetMayContain: !1
    }), re = q([]), ee = q(!1);
    function ie(F) {
      const G = F.target.getAttribute("data-key"), oe = rt.current[G];
      if (oe == null)
        return;
      let ye = l;
      Y.has(oe) || (ye = P(oe, F.shiftKey || F.metaKey)), re.current = ye, ee.current = !1, F.dataTransfer.effectAllowed = R ?? (I ? "copyMove" : "move"), I && F.dataTransfer.setData(
        j,
        x(ye)
      ), _e.State.dragging = !0, _e.State.DropTargetItem = void 0, _e.State.DropTargetTimer = void 0, ct();
    }
    function se(F) {
      const G = F.target.getAttribute("data-key"), oe = rt.current[G], { DropTargetItem: ye } = _e.State;
      if (ye === oe)
        F.preventDefault(), et(F, oe);
      else {
        if (ye != null && Se(F), oe == null)
          return;
        if (!Y.has(oe) && !Q(oe)) {
          if (Ke(
            'NestedListView callback "ListItemMayAccept"',
            _e.ListItemMayAccept,
            oe,
            l
          ) != !0)
            return;
          F.preventDefault(), We(F, oe);
        }
      }
    }
    const be = se;
    function me(F) {
      const G = F.target.getAttribute("data-key"), oe = rt.current[G], { DropTargetItem: ye } = _e.State;
      (ye === oe || oe == null) && Se(F);
    }
    function De(F) {
      if (me(F), !ee.current) {
        const G = F.dataTransfer?.dropEffect ?? "none";
        G !== "none" && I && E(
          'NestedListView callback "onListItemsDropped"',
          w,
          G,
          re.current,
          r
        );
      }
      _e.State.dragging = !1, _e.State.DropMode = void 0, ct();
    }
    function Re(F) {
      const { ListItemMayContain: G } = _e;
      return G == null ? !1 : Ke(
        'NestedListView callback "ListItemMayContain"',
        G,
        F,
        l
      ) == !0;
    }
    function ze() {
      return _e.State.TargetMayContain ? "into" : "after";
    }
    function bt(F) {
      _e.State.DropTargetTimer = setTimeout(() => {
        _e.State.DropTargetTimer = void 0, _e.State.DropMode === ze() && (Ne(F), ct());
      }, 2e3);
    }
    function we(F) {
      const G = F.target, oe = G.querySelector(":scope > .labelline"), { top: ye, height: Ue } = (oe ?? G).getBoundingClientRect(), vt = F.clientY - ye;
      if (!_e.State.TargetMayContain)
        return vt < Ue / 2 ? "before" : "after";
      switch (!0) {
        case vt < Ue / 3:
          return "before";
        case vt >= Ue * 2 / 3:
          return "after";
        default:
          return "into";
      }
    }
    function We(F, G) {
      const { DropTargetTimer: oe } = _e.State;
      oe != null && (clearTimeout(oe), _e.State.DropTargetTimer = void 0), _e.State.DropTargetItem = G, _e.State.TargetMayContain = Re(G), bt(G);
      let ye = Ke(
        'NestedListView callback "ContainerOfListItem"',
        d,
        G
      );
      ye != null && (Ne(ye), ct()), et(F, G);
    }
    function et(F, G) {
      const oe = we(F);
      _e.State.DropMode !== oe && (oe === ze() && _e.State.DropTargetTimer == null && bt(G), _e.State.DropMode = oe, ct());
    }
    function Se(F) {
      const { DropTargetItem: G, DropTargetTimer: oe } = _e.State;
      oe != null && (clearTimeout(oe), _e.State.DropTargetTimer = void 0), G != null && (Xe(G), _e.State.DropTargetItem = void 0, _e.State.TargetMayContain = !1), setTimeout(ct, 500);
    }
    function tt(F) {
      const { DropTargetItem: G, DropMode: oe } = _e.State;
      G != null && (ee.current = !0, E(
        'NestedListView callback "onListItemMove"',
        S,
        l,
        G,
        oe
      ), _e.State.dragging = !1, _e.State.DropTargetItem = void 0, _e.State.DropMode = void 0, _e.State.TargetMayContain = !1);
    }
    const ct = ft(), _e = {
      List: r,
      ListIsSortable: $,
      ListIsDraggable: M,
      KeyOfListItem: i,
      ListItemRenderer: s,
      ContentOfListItem: c,
      ListIsSelectable: L,
      ListItemMayBeSelected: p,
      onListItemClick: u,
      SelectionSet: Y,
      anyOuterItemIsSelected: Q,
      changeSelection: P,
      ExpansionMap: X,
      ListItemMayBeExpanded: g,
      toggleExpansionOf: te,
      ListItemWithKey: rt.current,
      ListItemMayAccept: v,
      ListItemMayContain: C,
      State: mt.current,
      rerender: ct
    };
    if (r.length === 0)
      return y`<div
          class="jcl-component nestedlistview placeholder ${o}"
          ...${e.RestProps}
        >
          <div dangerouslySetInnerHTML=${{ __html: a ?? "(empty)" }}/>
        </>`;
    const { dragging: O } = _e.State;
    return y`<div
        class="jcl-component nestedlistview ${O ? "dragging" : ""} ${o}"
        role="tree"
        aria-multiselectable=${L && f !== 1 ? "true" : void 0}
        onDragStart=${M ? ie : void 0}
        onDragEnter=${$ ? se : void 0}
         onDragOver=${$ ? be : void 0}
        onDragLeave=${$ ? me : void 0}
          onDragEnd=${M ? De : void 0}
             onDrop=${$ ? tt : void 0}
        ...${e.RestProps}
      >
        <${Vc} List=${r} ListContext=${_e}/>
      </>`;
  });
}
const Ab = /* @__PURE__ */ Z("jcl-component.nestedlistview", `
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
      background-color:currentColor; ${xt}
      pointer-events:auto;
    }
    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker.plain {
      width:6px; height:6px; left:7px; top:12px; border-radius:50%;
    }
    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker.collapsed { ${No} }
    .jcl-component.nestedlistview .listitemview > .labelline > .expansion-marker.expanded  { ${Eo} }

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
function Vc(e) {
  return U(() => {
    const { List: t, ListContext: n } = e;
    return y`<div class="listview" role="group">${t.map((o) => y`<${Tb}
          ListItem=${o} ListContext=${n}
        />`)}</>`;
  });
}
function Tb(e) {
  return U(() => {
    const { ListItem: t, ListContext: n } = e, { KeyOfListItem: o, ContentOfListItem: r } = n, a = Ke(
      'NestedListView callback "ContentOfListItem"',
      r,
      t
    ), i = a == null, s = n.ExpansionMap.has(t), c = n.SelectionSet.has(t), d = Ke(
      'NestedListView callback "KeyOfListItem"',
      o,
      t
    );
    n.ListItemWithKey[d] = t;
    const u = (j) => {
      if (j.stopPropagation(), E(
        'NestedListView callback "onListItemClick"',
        n.onListItemClick,
        t,
        j
      ), !n.anyOuterItemIsSelected(t) && n.ListIsSelectable) {
        if (Ke(
          'NestedListView callback "ListItemMayBeSelected"',
          n.ListItemMayBeSelected,
          t
        ) != !0)
          return;
        const x = j.pointerType !== "mouse" || j.ctrlKey || j.metaKey;
        n.changeSelection(t, x);
      }
    }, p = (j) => {
      j.stopPropagation(), Ke(
        'NestedListView callback "ContentOfListItem"',
        r,
        t
      ) != null && (n.toggleExpansionOf(t), n.rerender());
    }, l = i ? "plain" : s ? "expanded" : "collapsed", f = Ke(
      'NestedListView callback "ListItemMayBeExpanded"',
      n.ListItemMayBeExpanded,
      t
    ), h = y`<div
        class="expansion-marker ${l} ${f ? "" : "disabled"}"
        onClick=${f ? p : void 0}
      />`, g = !i && s && !(n.State.dragging && c) ? y`<${Vc} List=${a} ListContext=${n}/>` : "", { DropTargetItem: b, DropMode: m } = n.State, v = t === b, C = n.ListIsSortable, S = n.ListIsDraggable;
    return y`<div
        class=${"listitemview" + (c ? " selected" : "") + (v ? ` DropTarget ${m}` : "")}
        role="treeitem"
        aria-expanded=${i ? void 0 : s ? "true" : "false"}
        aria-selected=${n.ListIsSelectable ? c ? "true" : "false" : void 0}
        key=${d} data-key=${d}
        draggable=${S} onClick=${u}
      > <div class="labelline">
          ${h}
          <div class="labelview">${Ke(
      'NestedListView callback "ListItemRenderer"',
      n.ListItemRenderer,
      t,
      c,
      i,
      s,
      v ? m : ""
    )}</>
        </>
        ${g}
      </>`;
  });
}
let Ec, Nc;
const Rb = Go(() => Promise.all([
  gt("squire-rte"),
  gt("dompurify")
]).then(([e, t]) => {
  Ec = e.Squire ?? e.default, Nc = t.default ?? t;
})), yi = "jcl-custom:", Fb = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
function Ob(e) {
  const t = new DOMParser().parseFromString(
    "<body>" + e + "</body>",
    "text/html"
  ), n = t.body;
  return Array.from(n.querySelectorAll("*")).forEach((o) => {
    if (!/^CUSTOM-/.test(o.tagName))
      return;
    const r = {};
    Array.from(o.attributes).forEach((i) => {
      r[i.name] = i.value;
    });
    const a = t.createElement("img");
    a.setAttribute("src", Fb), a.setAttribute("alt", yi + JSON.stringify({
      Tag: o.tagName.toLowerCase(),
      Attributes: r,
      innerHTML: o.innerHTML
    })), o.replaceWith(a);
  }), n.innerHTML;
}
function la(e) {
  const t = Nc.sanitize(Ob(e), {
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
function zb(e) {
  let t;
  try {
    t = JSON.parse(
      (e.getAttribute("alt") ?? "").slice(yi.length)
    );
  } catch {
    return;
  }
  if (t == null || !/^custom-/.test(t.Tag ?? ""))
    return;
  const n = document.createElement(t.Tag);
  return Object.keys(t.Attributes ?? {}).forEach((o) => {
    /^on/i.test(o) || n.setAttribute(o, t.Attributes[o]);
  }), n.setAttribute("contenteditable", "false"), n.appendChild(la(t.innerHTML ?? "")), xi(n), n;
}
function xi(e) {
  Array.from(e.querySelectorAll('img[alt^="' + yi + '"]')).forEach((t) => {
    const n = zb(t);
    n != null && t.replaceWith(n);
  });
}
function Bc(e, t) {
  e.classList.toggle("empty", t.textContent === "");
}
function Yr(e, t, n, o) {
  return e.setHTML(o), xi(t), Bc(n, t), e.getHTML();
}
function _s(e, t, n) {
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
function Vb(e) {
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
    const [r, a, i] = t[o];
    n[o] = () => e.hasFormat(r) ? e[i]() : e[a]();
  }), n;
}
function Wc(e) {
  return U(() => {
    Eb();
    const t = ao(Rb);
    e = K(e);
    const n = D(e.Class) ?? "";
    let o = ae(e.Value);
    const r = D(e.Placeholder) ?? "", a = J(e.readonly) ?? !1, i = J(e.disabled) ?? !1, s = T(e.onValueChange), c = T(e.onSelectionChange), d = T(e.onUndoStateChange), u = T(e.onPaste), p = T(e.onImagePaste), l = T(e.onMount), f = T(e.onUnmount), h = q(null), g = q(void 0), b = q(void 0), m = q({});
    m.current = {
      onValueChange: s,
      onSelectionChange: c,
      onUndoStateChange: d,
      onPaste: u,
      onImagePaste: p,
      onUnmount: f
    };
    const v = q(o ?? ""), C = q(o ?? ""), S = q(!1);
    return o != null && o !== v.current && (v.current = o, C.current = o, S.current = !0), Ce(() => {
      if (!t)
        return;
      const j = h.current, x = document.createElement("div");
      x.className = "rte-root", j.appendChild(x), b.current = x;
      const w = new Ec(x, {
        blockTag: "DIV",
        sanitizeToDOMFragment: la
      });
      g.current = w, C.current = Yr(
        w,
        x,
        j,
        C.current
      );
      function R() {
        Bc(j, x);
      }
      function L() {
        return {
          Text: w.getSelectedText(),
          isCollapsed: w.getSelection().collapsed,
          Path: w.getPath()
        };
      }
      function $() {
        const O = w.getHTML();
        C.current = O, R(), E(
          'RichTextEditor callback "onValueChange"',
          m.current.onValueChange,
          O
        );
      }
      let I = !1, M = !1;
      function _(O) {
        O.target instanceof Element && O.target.classList.contains("squire-resize-handle") && (I = !0);
      }
      function z() {
        I && (I = !1, M && (M = !1, $()));
      }
      x.addEventListener("pointerdown", _, !0), document.addEventListener("pointerup", z, !0), document.addEventListener("pointercancel", z, !0), w.addEventListener("input", () => {
        if (I) {
          M = !0;
          return;
        }
        $();
      });
      function N() {
        E(
          'RichTextEditor callback "onSelectionChange"',
          m.current.onSelectionChange,
          L()
        );
      }
      w.addEventListener("select", N), w.addEventListener("cursor", N), w.addEventListener("undoStateChange", (O) => {
        const { canUndo: F, canRedo: G } = O.detail ?? {};
        E(
          // payload in a
          'RichTextEditor callback "onUndoStateChange"',
          // CustomEvent
          m.current.onUndoStateChange,
          F === !0,
          G === !0
        );
      }), w.addEventListener("willPaste", (O) => {
        const F = m.current.onPaste;
        F != null && E(
          // ..."Event.detail" (fragment or text)
          'RichTextEditor callback "onPaste"',
          F,
          O
        );
      }), w.addEventListener("pasteImage", (O) => {
        const { clipboardData: F } = O.detail ?? {};
        if (F == null)
          return;
        const G = m.current.onImagePaste;
        if (G != null) {
          E(
            'RichTextEditor callback "onImagePaste"',
            G,
            F
          );
          return;
        }
        Array.from(F.files ?? []).filter((oe) => oe.type.startsWith("image/")).forEach((oe) => {
          const ye = new FileReader();
          ye.onload = () => w.insertImage(ye.result, {}), ye.readAsDataURL(oe);
        });
      });
      function Y(O) {
        for (; O != null && O !== x; ) {
          if (O.nodeName === "TD" || O.nodeName === "TH")
            return O;
          O = O.parentNode;
        }
      }
      w.addEventListener("keydown", (O) => {
        if (O.key !== "Tab" || O.defaultPrevented)
          return;
        const F = Y(w.getSelection().startContainer);
        if (F == null)
          return;
        const G = Array.from(x.querySelectorAll("td,th")), oe = G[G.indexOf(F) + (O.shiftKey ? -1 : 1)];
        oe != null && (O.preventDefault(), X(oe));
      });
      function Q(O) {
        for (; O != null && O !== x; ) {
          if (O.nodeName === "TABLE")
            return O;
          O = O.parentNode;
        }
      }
      function fe() {
        return Y(w.getSelection().startContainer);
      }
      function P() {
        const O = document.createElement("td");
        return O.appendChild(document.createElement("br")), O;
      }
      function X(O) {
        const F = document.createRange();
        F.selectNodeContents(O), F.collapse(!0), w.setSelection(F);
      }
      function te() {
        const O = Q(w.getSelection().startContainer);
        return O == null ? void 0 : {
          Rows: O.rows.length,
          Columns: O.rows[0] == null ? 0 : O.rows[0].cells.length
        };
      }
      function pe() {
        const O = fe();
        if (O == null)
          return;
        w.saveUndoState();
        const F = O.parentNode, G = document.createElement("tr");
        for (let oe = 0; oe < F.cells.length; oe++)
          G.appendChild(P());
        F.parentNode.insertBefore(G, F.nextSibling), X(G.cells[O.cellIndex] ?? G.cells[0]);
      }
      function ve() {
        const O = fe();
        if (O == null)
          return;
        const F = O.parentNode, G = Q(F);
        if (G == null || G.rows.length <= 1)
          return;
        w.saveUndoState();
        const oe = F.rowIndex, ye = O.cellIndex;
        F.remove();
        const Ue = G.rows[Math.min(oe, G.rows.length - 1)];
        X(
          Ue.cells[Math.min(ye, Ue.cells.length - 1)]
        );
      }
      function Ne() {
        const O = fe();
        if (O == null)
          return;
        const F = Q(O);
        if (F == null)
          return;
        w.saveUndoState();
        const G = O.cellIndex;
        Array.from(F.rows).forEach((oe) => {
          oe.cells[Math.min(G, oe.cells.length - 1)].after(P());
        }), X(O.parentNode.cells[G + 1]);
      }
      function Xe() {
        const O = fe();
        if (O == null)
          return;
        const F = O.parentNode, G = Q(O);
        if (G == null || F.cells.length <= 1)
          return;
        w.saveUndoState();
        const oe = O.cellIndex;
        Array.from(G.rows).forEach((ye) => {
          ye.cells.length > oe && ye.deleteCell(oe);
        }), X(F.cells[Math.min(oe, F.cells.length - 1)]);
      }
      function rt(O, F) {
        const G = Q(w.getSelection().startContainer);
        if (G == null)
          return;
        const oe = Math.max(1, Math.floor(O)), ye = Math.max(1, Math.floor(F));
        for (w.saveUndoState(); G.rows.length > oe; )
          G.deleteRow(-1);
        for (; G.rows.length < oe; ) {
          const Ue = G.insertRow(-1);
          for (let vt = 0; vt < ye; vt++)
            Ue.appendChild(P());
        }
        Array.from(G.rows).forEach((Ue) => {
          for (; Ue.cells.length > ye; )
            Ue.deleteCell(-1);
          for (; Ue.cells.length < ye; )
            Ue.appendChild(P());
        }), X(G.rows[0].cells[0]);
      }
      function mt(O) {
        const F = Q(w.getSelection().startContainer);
        if (F != null)
          switch (w.saveUndoState(), O) {
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
      let re;
      x.addEventListener("pointerdown", (O) => {
        re = O.target.nodeName === "IMG" ? O.target : void 0;
      });
      function ee() {
        if (re != null && re.isConnected)
          return re;
        const O = w.getSelection(), F = O.startContainer;
        if (F instanceof Element) {
          const G = F.childNodes[O.startOffset];
          if (G != null && G.nodeName === "IMG")
            return G;
        }
      }
      function ie() {
        const O = ee();
        return O == null ? void 0 : {
          URL: O.getAttribute("src") ?? "",
          Width: O.style.width || (O.getAttribute("width") ?? ""),
          AltText: O.getAttribute("alt") ?? ""
        };
      }
      function se(O) {
        const { URL: F, Width: G, AltText: oe } = O;
        let ye = ee();
        if (ye == null) {
          if (F == null || F === "")
            return;
          ye = w.insertImage(F, {});
        } else
          w.saveUndoState(), F != null && F !== "" && ye.setAttribute("src", F);
        if (oe != null && ye.setAttribute("alt", oe), G != null) {
          const Ue = String(G).trim();
          _s(ye.style, "width", Ue), ye.style.height = Ue === "" ? "" : "auto";
        }
        re = ye;
      }
      let be;
      x.addEventListener("pointerdown", (O) => {
        be = O.target.nodeName === "IFRAME" ? O.target : void 0;
      });
      function me() {
        if (be != null && be.isConnected)
          return be;
        const O = w.getSelection(), F = O.startContainer;
        if (F instanceof Element) {
          const G = F.childNodes[O.startOffset];
          if (G != null && G.nodeName === "IFRAME")
            return G;
        }
      }
      function De() {
        const O = me();
        return O == null ? void 0 : {
          URL: O.getAttribute("src") ?? "",
          Width: O.style.width || (O.getAttribute("width") ?? ""),
          Height: O.style.height || (O.getAttribute("height") ?? ""),
          allow: O.getAttribute("allow") ?? "",
          Sandbox: O.getAttribute("sandbox") ?? "",
          ReferrerPolicy: O.getAttribute("referrerpolicy") ?? ""
        };
      }
      function Re(O, F, G) {
        G != null && (G === "" ? O.removeAttribute(F) : O.setAttribute(F, G));
      }
      function ze(O, F, G) {
        G != null && _s(O.style, F, String(G).trim());
      }
      function bt(O) {
        const { URL: F, Width: G, Height: oe, allow: ye, Sandbox: Ue, ReferrerPolicy: vt } = O;
        let kt = me();
        if (kt == null) {
          if (F == null || F === "")
            return;
          kt = document.createElement("iframe"), kt.setAttribute("src", F), w.insertElement(kt);
        } else
          w.saveUndoState(), F != null && F !== "" && kt.setAttribute("src", F);
        Re(kt, "allow", ye), Re(kt, "sandbox", Ue), Re(kt, "referrerpolicy", vt), ze(kt, "width", G), ze(kt, "height", oe), be = kt;
      }
      function we(O) {
        return O != null && O.nodeType === 1 && /^custom-/i.test(O.nodeName);
      }
      function We(O) {
        for (; O != null && O !== x; ) {
          if (we(O))
            return O;
          O = O.parentNode;
        }
      }
      let et;
      x.addEventListener("pointerdown", (O) => {
        et = We(O.target);
      });
      function Se() {
        if (et != null && et.isConnected)
          return et;
        const O = w.getSelection(), F = O.startContainer;
        if (F instanceof Element) {
          const G = F.childNodes[O.startOffset];
          if (we(G))
            return G;
        }
      }
      function tt() {
        const O = Se();
        if (O == null)
          return;
        const F = {};
        for (const G of Array.from(O.attributes))
          G.name !== "contenteditable" && (F[G.name] = G.value);
        return {
          Tag: O.tagName.toLowerCase(),
          Attributes: F,
          innerHTML: O.innerHTML
        };
      }
      function ct(O) {
        const { Tag: F, Attributes: G, innerHTML: oe } = O;
        let ye = Se();
        if (ye == null) {
          const Ue = String(F ?? "").trim().toLowerCase();
          if (!/^custom-/.test(Ue))
            return;
          ye = document.createElement(Ue), w.insertElement(ye);
        } else
          w.saveUndoState();
        if (G != null)
          for (const Ue of Object.keys(G)) {
            if (Ue === "contenteditable" || /^on/i.test(Ue))
              continue;
            const vt = G[Ue];
            vt != null && (vt === "" ? ye.removeAttribute(Ue) : ye.setAttribute(Ue, vt));
          }
        oe != null && (ye.innerHTML = "", ye.appendChild(la(oe)), xi(ye)), ye.setAttribute("contenteditable", "false"), et = ye;
      }
      const _e = {
        Editor: w,
        // grants access to full Squire API
        focus: () => w.focus(),
        blur: () => w.blur(),
        moveCursorToStart: () => w.moveCursorToStart(),
        moveCursorToEnd: () => w.moveCursorToEnd(),
        getValue: () => w.getHTML(),
        setValue: (O) => {
          nt("editor value", O), C.current = Yr(
            w,
            x,
            j,
            O
          );
        },
        insertHTML: (O) => {
          nt("HTML to insert", O), w.insertHTML(O);
        },
        insertPlainText: (O) => {
          nt("text to insert", O), w.insertPlainText(O, !1);
        },
        insertImage: (O, F) => {
          nt("image URL", O), w.insertImage(O, F ?? {});
        },
        ImageAtCursor: () => ie(),
        updateImage: (O) => se(O ?? {}),
        IFrameAtCursor: () => De(),
        updateIFrame: (O) => bt(O ?? {}),
        CustomComponentAtCursor: () => tt(),
        updateCustomComponent: (O) => ct(O ?? {}),
        insertTable: (O = 2, F = 2) => {
          const G = Math.max(1, Math.floor(O)), oe = Math.max(1, Math.floor(F));
          w.insertHTML("<table><tbody>" + ("<tr>" + "<td><br/></td>".repeat(oe) + "</tr>").repeat(G) + "</tbody></table>");
        },
        TableDimensions: () => te(),
        resizeTable: (O, F) => rt(O, F),
        alignTable: (O) => mt(O),
        insertTableRow: pe,
        deleteTableRow: ve,
        insertTableColumn: Ne,
        deleteTableColumn: Xe,
        getSelection: () => L(),
        CursorPosition: () => w.getCursorPosition(),
        hasFormat: (O) => w.hasFormat(O.toUpperCase()),
        FontInfo: () => w.getFontInfo(),
        ...Vb(w),
        // toggleBold ... toggleSuperscript
        toggleCode: () => w.toggleCode(),
        setFontFace: (O) => w.setFontFace(O ?? null),
        setFontSize: (O) => w.setFontSize(O ?? null),
        setTextColor: (O) => (
          // American spellings, like...
          w.setTextColor(O ?? null)
        ),
        // ...Squire itself
        setHighlightColor: (O) => w.setHighlightColor(O ?? null),
        setLink: (O) => {
          nt("link URL", O), w.makeLink(O);
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
        setTextAlignment: (O) => w.setTextAlignment(O),
        setTextDirection: (O) => w.setTextDirection(O),
        setKeyHandler: (O, F) => w.setKeyHandler(O, F),
        removeAllFormatting: () => w.removeAllFormatting(),
        undo: () => {
          w.undo(), C.current = w.getHTML(), R();
        },
        redo: () => {
          w.redo(), C.current = w.getHTML(), R();
        }
      };
      return E('RichTextEditor callback "onMount"', l, _e), () => {
        E(
          'RichTextEditor callback "onUnmount"',
          m.current.onUnmount
        ), x.removeEventListener("pointerdown", _, !0), document.removeEventListener("pointerup", z, !0), document.removeEventListener("pointercancel", z, !0), g.current = void 0, b.current = void 0, w.destroy(), x.remove();
      };
    }, [t]), Ce(() => {
      if (!S.current)
        return;
      S.current = !1;
      const j = g.current;
      if (j == null)
        return;
      const x = j.getHTML();
      C.current !== x && (C.current = Yr(
        j,
        b.current,
        h.current,
        C.current
      ));
    }), Ce(() => {
      const j = g.current, x = b.current;
      if (j == null || x == null)
        return;
      const w = a || i ? "false" : "true";
      x.getAttribute("contenteditable") !== w && j.modifyDocument(
        // otherwise, Squire's MutationObserver
        () => x.setAttribute("contenteditable", w)
      );
    }, [t, a, i]), y`<div
        class="jcl-component richtexteditor ${i ? "disabled" : ""} ${n}"
        data-placeholder="${r}"
        ...${e.RestProps} ref=${h}
      />`;
  });
}
const Eb = /* @__PURE__ */ Z("jcl-component.richtexteditor", `
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
let ur, jn, yo, Hc, Gc, Uc, Kc, qc, Xc, Yc, Jc, Zc, Qc, Pc, ed, td, nd, od, rd, ad, ca;
const Nb = Go(
  () => Promise.all([
    gt("@codemirror/state"),
    gt("@codemirror/view"),
    gt("@codemirror/language"),
    gt("@codemirror/commands"),
    gt("@codemirror/lint")
  ]).then(([
    e,
    t,
    n,
    o,
    r
  ]) => {
    ur = e.EditorState, jn = e.Compartment, yo = t.EditorView, Hc = t.keymap, Gc = t.lineNumbers, Uc = t.drawSelection, Kc = t.highlightSpecialChars, qc = n.syntaxHighlighting, Xc = n.defaultHighlightStyle, Yc = n.indentUnit, Jc = n.syntaxTree, Zc = n.ensureSyntaxTree, Qc = o.defaultKeymap, Pc = o.historyKeymap, ed = o.indentWithTab, td = o.history, nd = o.undo, od = o.redo, rd = r.setDiagnostics, ad = r.lintGutter, ca = r.linter;
  })
), id = /* @__PURE__ */ Object.create(null);
function Bb(e, t) {
  ln("language name", e), Zt("language support loader", t), id[e.toLowerCase()] = t;
}
const Ds = {
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
let Ls = !1;
function Wb() {
  Ls || (Ls = !0, Object.keys(Ds).forEach((e) => {
    const [t, n, o] = Ds[e];
    Bb(e, async () => (await gt(t))[n](
      ...o == null ? [] : [o]
    ));
  }));
}
function Ms(e, t, n) {
  const o = Math.max(1, Math.min(Math.round(t), e.lines)), r = e.line(o), a = Math.max(1, Math.min(Math.round(n), r.length + 1));
  return r.from + a - 1;
}
function As(e, t) {
  return t.map((n) => {
    const { Line: o, Column: r, EndLine: a, EndColumn: i, Message: s, Severity: c } = n, d = Ms(e, o ?? 1, r ?? 1), u = a == null && i == null ? e.line(Math.max(1, Math.min(Math.round(o ?? 1), e.lines))).to : Ms(e, a ?? o ?? 1, i ?? (r ?? 1) + 1);
    return {
      from: d,
      to: Math.max(d, u),
      severity: ["error", "warning", "info"].includes(c) ? c : "error",
      message: String(s ?? "(no message)")
    };
  });
}
function Hb(e) {
  return U(() => {
    Gb();
    const t = ao(Nb);
    e = K(e);
    const n = D(e.Class) ?? "";
    let o = ae(e.Value);
    const r = (D(e.Language) ?? "").toLowerCase(), a = J(e.readonly) ?? !1, i = J(e.disabled) ?? !1, s = bn(e.TabSize) ?? 2, c = J(e.withLineNumbers) ?? !0, d = J(e.withLineWrapping) ?? !1, u = J(e.withSyntaxCheck) ?? !1, p = V(e.Errors, (L) => $e(L, Me)) ?? [], l = T(e.Linter), f = bn(e.LintDelay) ?? 750, h = T(e.onValueChange), g = T(e.onSelectionChange), b = T(e.onMount), m = T(e.onUnmount), v = q(null), C = q(void 0), S = q({});
    S.current = { onValueChange: h, onSelectionChange: g, onUnmount: m, Linter: l };
    const j = q(o ?? ""), x = q(o ?? "");
    o != null && o !== j.current && (j.current = o, x.current = o);
    const w = q(void 0);
    Ce(() => {
      if (!t)
        return;
      w.current == null && (w.current = {
        Language: new jn(),
        Readability: new jn(),
        Indentation: new jn(),
        LineNumbers: new jn(),
        Wrapping: new jn(),
        Linting: new jn()
      });
      const L = w.current, $ = new yo({
        parent: v.current,
        state: ur.create({
          doc: x.current,
          extensions: [
            Kc(),
            Uc(),
            td(),
            qc(Xc, { fallback: !0 }),
            ad(),
            Hc.of([...Qc, ...Pc, ed]),
            L.LineNumbers.of([]),
            L.Language.of([]),
            L.Readability.of([]),
            L.Indentation.of([]),
            L.Wrapping.of([]),
            L.Linting.of([]),
            yo.updateListener.of((M) => {
              if (M.docChanged) {
                const _ = M.state.doc.toString();
                x.current = _, E(
                  'CodeEditor callback "onValueChange"',
                  S.current.onValueChange,
                  _
                );
              }
              if (M.selectionSet) {
                const { from: _, to: z } = M.state.selection.main;
                E(
                  'CodeEditor callback "onSelectionChange"',
                  S.current.onSelectionChange,
                  _,
                  z
                );
              }
            })
          ]
        })
      });
      return C.current = $, E('CodeEditor callback "onMount"', b, {
        View: $,
        // grants access to full CM API
        focus: () => $.focus(),
        getValue: () => $.state.doc.toString(),
        setValue: (M) => {
          nt("editor value", M), $.dispatch({
            changes: { from: 0, to: $.state.doc.length, insert: M }
          });
        },
        getSelection: () => {
          const { from: M, to: _ } = $.state.selection.main;
          return { from: M, to: _, Text: $.state.sliceDoc(M, _) };
        },
        setSelection: (M, _ = M) => {
          const z = $.state.doc.length, N = Math.max(0, Math.min(M, z)), Y = Math.max(N, Math.min(_, z));
          $.dispatch({
            selection: { anchor: N, head: Y },
            scrollIntoView: !0
          });
        },
        replaceSelection: (M) => {
          nt("replacement", M), $.dispatch($.state.replaceSelection(M));
        },
        undo: () => nd($),
        redo: () => od($)
      }), () => {
        E(
          'CodeEditor callback "onUnmount"',
          S.current.onUnmount
        ), C.current = void 0, $.destroy();
      };
    }, [t]), Ce(() => {
      const L = C.current;
      if (L == null)
        return;
      const $ = L.state.doc.toString();
      x.current !== $ && L.dispatch({
        changes: { from: 0, to: $.length, insert: x.current }
      });
    }), Ce(() => {
      const L = C.current;
      if (L == null)
        return;
      const { Language: $ } = w.current;
      if (r === "" || r === "text") {
        L.dispatch({ effects: $.reconfigure([]) });
        return;
      }
      Wb();
      const I = id[r];
      if (I == null) {
        console.warn("CodeEditor: unsupported language " + Mt(r)), L.dispatch({ effects: $.reconfigure([]) });
        return;
      }
      let M = !1;
      return I().then((_) => {
        M || C.current !== L || L.dispatch({
          effects: $.reconfigure(_)
        });
      }).catch((_) => console.error(
        "CodeEditor: could not load support for language " + Mt(r),
        _
      )), () => {
        M = !0;
      };
    }, [t, r]), Ce(() => {
      const L = C.current;
      L?.dispatch({
        effects: w.current.Readability.reconfigure([
          ur.readOnly.of(a || i),
          yo.editable.of(!i)
        ])
      });
    }, [t, a, i]), Ce(() => {
      const L = C.current;
      if (L == null)
        return;
      const $ = Math.max(1, s);
      L.dispatch({
        effects: w.current.Indentation.reconfigure([
          ur.tabSize.of($),
          Yc.of(" ".repeat($))
        ])
      });
    }, [t, s]), Ce(() => {
      const L = C.current;
      if (L == null)
        return;
      const $ = w.current;
      L.dispatch({ effects: [
        $.LineNumbers.reconfigure(
          c ? Gc() : []
        ),
        $.Wrapping.reconfigure(
          d ? yo.lineWrapping : []
        )
      ] });
    }, [t, c, d]), Ce(() => {
      const L = C.current;
      L == null || l != null || u || L.dispatch(
        rd(L.state, As(L.state.doc, p))
      );
    }, [t, JSON.stringify(p), l != null, u]);
    const R = l != null;
    return Ce(() => {
      const L = C.current;
      if (L == null)
        return;
      const { Linting: $ } = w.current, I = async (_) => {
        try {
          const z = await S.current.Linter(
            _.state.doc.toString()
          );
          return As(_.state.doc, z ?? []);
        } catch (z) {
          return console.error("CodeEditor: linting failed with", z), [];
        }
      }, M = (_) => {
        const z = _.state.doc.length, N = Zc(_.state, z, 500) ?? Jc(_.state), Y = [];
        return N.iterate({
          enter: (Q) => {
            if (Q.type.isError) {
              const fe = Math.min(Q.from, Math.max(0, z - 1)), P = Math.min(Math.max(Q.to, Q.from + 1), z);
              Y.push({
                from: fe,
                to: Math.max(fe, P),
                severity: "error",
                message: "syntax error"
              });
            }
          }
        }), Y;
      };
      switch (!0) {
        case R:
          L.dispatch({ effects: $.reconfigure(
            ca(I, { delay: f })
          ) });
          break;
        case u:
          L.dispatch({ effects: $.reconfigure(
            ca(M, { delay: f })
          ) });
          break;
        default:
          L.dispatch({ effects: $.reconfigure([]) });
      }
    }, [t, R, u, f]), y`<div
        class="jcl-component codeeditor ${i ? "disabled" : ""} ${n}"
        ...${e.RestProps} ref=${v}
      />`;
  });
}
const Gb = /* @__PURE__ */ Z("jcl-component.codeeditor", `
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
  `), da = "http://www.w3.org/2000/svg";
function He(e, t) {
  const n = document.createElementNS(da, e);
  for (const o in t ?? {})
    n.setAttribute(o, String(t[o]));
  return n;
}
function Ct(e) {
  const t = e.transform?.baseVal?.consolidate?.();
  return t == null ? new DOMMatrix() : DOMMatrix.fromMatrix(t.matrix);
}
function $n(e, t) {
  const { a: n, b: o, c: r, d: a, e: i, f: s } = t;
  e.setAttribute("transform", `matrix(${n} ${o} ${r} ${a} ${i} ${s})`);
}
function Ts(e) {
  const t = Math.hypot(e.a, e.b) || 1, n = Math.hypot(e.c, e.d) || 1;
  return { ScaleX: t, ScaleY: n };
}
function ir(e) {
  const t = e.getBBox?.();
  return t == null ? void 0 : { x: t.x, y: t.y, Width: t.width, Height: t.height };
}
function bo(e) {
  let t = 1 / 0, n = 1 / 0, o = -1 / 0, r = -1 / 0;
  if (e.forEach((a) => {
    const i = a.getBBox(), s = Ct(a);
    [
      [i.x, i.y],
      [i.x + i.width, i.y],
      [i.x, i.y + i.height],
      [i.x + i.width, i.y + i.height]
    ].forEach(([c, d]) => {
      const u = new DOMPoint(c, d).matrixTransform(s);
      t = Math.min(t, u.x), o = Math.max(o, u.x), n = Math.min(n, u.y), r = Math.max(r, u.y);
    });
  }), !(t > o))
    return { x: t, y: n, Width: o - t, Height: r - n };
}
function ua(e, t) {
  return e.x <= t.x + t.Width && t.x <= e.x + e.Width && e.y <= t.y + t.Height && t.y <= e.y + e.Height;
}
function pa(e) {
  return {
    xEdges: [e.x, e.x + e.Width],
    xCenter: e.x + e.Width / 2,
    yEdges: [e.y, e.y + e.Height],
    yCenter: e.y + e.Height / 2
  };
}
function sd(e, t, n) {
  const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = (c, d) => Math.abs(c - d) <= n, i = (c, d, u) => {
    const p = Math.round(d / n) * n;
    (u === "dashed" || c.get(p) == null) && c.set(p, u);
  }, s = (c, d, u) => {
    e.forEach((p) => {
      t.forEach((l) => {
        p[d].forEach((f) => {
          l[d].forEach((h) => {
            a(f, h) && i(c, h, "dashed");
          }), a(f, l[u]) && i(c, l[u], "dotted");
        }), l[d].forEach((f) => {
          a(p[u], f) && i(c, f, "dotted");
        });
      });
    });
  };
  return s(o, "xEdges", "xCenter"), s(r, "yEdges", "yCenter"), { vertical: o, horizontal: r };
}
let Ub = 1;
function Gt(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n };
}
function Jr(e) {
  if (!/^\s*M[0-9\s.,eE+-]+(?:C[0-9\s.,eE+-]+)+Z?\s*$/.test(e))
    return;
  const t = /Z\s*$/.test(e), n = e.replace(/[MCZ]/g, " ").trim().split(/[\s,]+/).map(parseFloat);
  if (n.length < 8 || (n.length - 2) % 6 !== 0 || n.some((a) => isNaN(a)))
    return;
  const o = [{ x: n[0], y: n[1] }], r = [];
  for (let a = 2; a < n.length; a += 6)
    r.push({
      c1: { x: n[a], y: n[a + 1] },
      c2: { x: n[a + 2], y: n[a + 3] }
    }), o.push({ x: n[a + 4], y: n[a + 5] });
  if (t) {
    const a = o[0], i = o.at(-1);
    if (Math.abs(i.x - a.x) > 1e-3 || Math.abs(i.y - a.y) > 1e-3)
      return;
    o.pop();
  }
  return { Anchors: o, Controls: r, closed: t };
}
function Rs(e, t = !1) {
  const n = e.map((a) => ({ x: a.x, y: a.y })), o = [], r = t ? n.length : n.length - 1;
  for (let a = 0; a < r; a++) {
    const i = n[a], s = n[(a + 1) % n.length];
    o.push({
      c1: Gt(i, s, 1 / 3),
      c2: Gt(i, s, 2 / 3)
    });
  }
  return { Anchors: n, Controls: o, closed: t };
}
function In(e) {
  const { Anchors: t, Controls: n, closed: o } = e;
  let r = `M ${t[0].x} ${t[0].y}`;
  return n.forEach((a, i) => {
    const s = t[(i + 1) % t.length];
    r += ` C ${a.c1.x} ${a.c1.y} ${a.c2.x} ${a.c2.y} ${s.x} ${s.y}`;
  }), r + (o ? " Z" : "");
}
function Fs(e, t, n, o) {
  const r = Gt(e, t, 0.5), a = Gt(t, n, 0.5), i = Gt(n, o, 0.5), s = Gt(r, a, 0.5), c = Gt(a, i, 0.5);
  return {
    Midpoint: Gt(s, c, 0.5),
    leftControls: { c1: r, c2: s },
    rightControls: { c1: c, c2: i }
  };
}
const Kb = /* @__PURE__ */ new Set([
  "script",
  "foreignObject",
  "iframe",
  "embed",
  "object",
  "audio",
  "video"
]);
function Os(e) {
  return Array.from(e.querySelectorAll("*")).forEach((t) => {
    if (Kb.has(t.nodeName)) {
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
class qb {
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
  GridPatternId = "jcl-de-pattern-" + Ub++;
  /**** constructor ****/
  constructor(t, n) {
    ld(), this.Container = t, this.Callbacks = n ?? {}, this.View = He("svg", {
      class: "jcl-de-view",
      tabindex: 0,
      viewBox: "0 0 800 600",
      preserveAspectRatio: "xMidYMid meet"
    }), this.GridLayer = He("g", { class: "jcl-de-grid" }), this.ContentLayer = He("g", { class: "jcl-de-content" }), this.OverlayLayer = He("g", { class: "jcl-de-overlay" }), this.View.append(this.GridLayer, this.ContentLayer, this.OverlayLayer), t.appendChild(this.View), this.installArrowMarker(), this.View.addEventListener("pointerdown", (o) => this.onPointerDown(o)), this.View.addEventListener("pointermove", (o) => this.onPointerMove(o)), this.View.addEventListener("pointerup", (o) => this.onPointerUp(o)), this.View.addEventListener("dblclick", (o) => this.onDoubleClick(o)), this.View.addEventListener("keydown", (o) => this.onKeyDown(o)), this.View.addEventListener(
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
    const { Width: t, Height: n } = this.Size, o = this.ContentLayer.innerHTML, r = this.View.querySelector("#jcl-de-arrow"), a = (
      // keeps exported documents self-contained
      o.includes("url(#jcl-de-arrow)") && r != null ? "<defs>" + r.outerHTML + "</defs>" : ""
    );
    return `<svg xmlns="${da}" width="${t}" height="${n}" viewBox="0 0 ${t} ${n}">` + a + o + "</svg>";
  }
  /**** setValue - replaces the drawing without firing "onValueChange" ****/
  setValue(t) {
    nt("drawing value", t);
    let n;
    if (t.trim() !== "") {
      n = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, n.nodeName !== "svg" && de(
        "InvalidArgument: the given value is no valid SVG document"
      ), Os(n);
      const r = parseFloat(n.getAttribute("width") ?? ""), a = parseFloat(n.getAttribute("height") ?? "");
      !isNaN(r) && !isNaN(a) && (this.Size = { Width: r, Height: a });
    }
    this.clearSelection(), this.PointSelection = void 0, this.cancelPolyline(), this.DragState = void 0, this.ContentLayer.innerHTML = "", n != null && (Array.from(n.children).forEach((o) => {
      this.ContentLayer.appendChild(document.importNode(o, !0));
    }), Array.from(
      // editor-owned markers come from the live...
      this.ContentLayer.querySelectorAll('marker[id^="jcl-de-"]')
    ).forEach((o) => {
      const r = o.parentNode;
      o.remove(), r?.nodeName === "defs" && r.children.length === 0 && r.remove();
    }), Array.from(this.ContentLayer.children).forEach(
      (o) => this.IdFor(o)
    )), this.ViewBox = { x: 0, y: 0, Width: this.Size.Width, Height: this.Size.Height }, this.applyViewBox(), this.Snapshots = [this.ContentLayer.innerHTML], this.SnapshotIndex = 0, this.announceUndoState(), this.refreshOverlay();
  }
  /**** announceChange - captures a snapshot and reports the new value ****/
  announceChange() {
    this.captureSnapshot(), E(
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
    this.SnapshotIndex = t, this.ContentLayer.innerHTML = this.Snapshots[t], this.PointSelection = void 0, this.selectIds(n), this.announceUndoState(), E(
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
    E(
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
    return Array.from(this.ContentLayer.children).reverse().find((r) => (r.matches?.(o) ? [r] : Array.from(r.querySelectorAll?.(o) ?? [])).some(
      (i) => this.hitsStrokeOf(i, t, n)
    ));
  }
  /**** hitsStrokeOf - tests a point against a temporarily widened stroke ****/
  hitsStrokeOf(t, n, o) {
    if (typeof t.isPointInStroke != "function")
      return !1;
    const r = this.View.getScreenCTM?.(), a = t.getScreenCTM?.();
    if (r == null || a == null)
      return !1;
    const i = r.inverse().multiply(a), s = new DOMPoint(n.x, n.y).matrixTransform(i.inverse()), c = this.View.createSVGPoint();
    c.x = s.x, c.y = s.y;
    const { ScaleX: d, ScaleY: u } = Ts(i), l = (parseFloat(getComputedStyle(t).strokeWidth) || 0) + 2 * o / Math.max(d, u), f = t.getAttribute("stroke-width");
    t.setAttribute("stroke-width", String(l));
    try {
      return t.isPointInStroke(c);
    } finally {
      f == null ? t.removeAttribute("stroke-width") : t.setAttribute("stroke-width", f);
    }
  }
  /**** selection primitives ****/
  isSelected(t) {
    return this.Selection.includes(t);
  }
  select(t, n = !1) {
    const o = n ? this.Selection.slice() : [];
    t.forEach((r) => {
      r != null && !o.includes(r) && o.push(r);
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
    this.refreshOverlay(), E(
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
    }, [r, a] = o[t], i = n.a * r + n.c * a, s = n.b * r + n.d * a;
    let c = Math.atan2(s, i) * 180 / Math.PI;
    return c < 0 && (c += 180), ["ew-resize", "nwse-resize", "ns-resize", "nesw-resize"][Math.round(c / 45) % 4];
  }
  /**** refreshOverlay - redraws selection frames, handles and point handles ****/
  refreshOverlay() {
    if (this.OverlayLayer.removeAttribute("transform"), this.OverlayLayer.innerHTML = "", this.Tool === "editPoints") {
      this.drawPointHandles();
      return;
    }
    const t = this.UnitsPerPixel(), n = 8 * t;
    this.Selection.forEach((o, r) => {
      const a = ir(o);
      if (a == null)
        return;
      const i = Ct(o), s = He("g", {});
      $n(s, i), this.OverlayLayer.appendChild(s);
      const { ScaleX: c, ScaleY: d } = Ts(i), u = n / c, p = n / d, l = t / Math.max(c, d);
      s.appendChild(He("rect", {
        class: "jcl-de-frame",
        "stroke-width": l,
        x: a.x,
        y: a.y,
        width: a.Width,
        height: a.Height
      }));
      const f = a.x + a.Width / 2, h = this.HandlePositionsFor(a);
      for (const b in h) {
        const [m, v] = h[b];
        s.appendChild(He("rect", {
          class: "jcl-de-handle",
          "data-handle": b,
          "data-index": r,
          "stroke-width": l,
          style: "cursor:" + this.CursorForHandle(b, i),
          x: m - u / 2,
          y: v - p / 2,
          width: u,
          height: p
        }));
      }
      const g = a.y - 24 * t / d;
      s.appendChild(He("line", {
        class: "jcl-de-frame",
        "stroke-width": l,
        x1: f,
        y1: a.y,
        x2: f,
        y2: g
      })), s.appendChild(He("circle", {
        class: "jcl-de-handle",
        "data-handle": "rotate",
        "data-index": r,
        "stroke-width": l,
        cx: f,
        cy: g,
        r: u / 2
      }));
    });
  }
  /**** refreshGrid ****/
  refreshGrid() {
    if (this.GridLayer.innerHTML = "", !this.showsGrid)
      return;
    const t = this.GridSize, n = He("pattern", {
      id: this.GridPatternId,
      width: t,
      height: t,
      patternUnits: "userSpaceOnUse"
    });
    n.appendChild(He("path", {
      d: `M ${t} 0 L 0 0 0 ${t}`,
      fill: "none",
      stroke: "#00000022",
      "stroke-width": this.UnitsPerPixel()
    }));
    const o = He("defs");
    o.appendChild(n);
    const { x: r, y: a, Width: i, Height: s } = this.ViewBox;
    this.GridLayer.append(o, He("rect", {
      x: r,
      y: a,
      width: i,
      height: s,
      fill: `url(#${this.GridPatternId})`
    }));
  }
  /**** drawMoveGuides - alignment guides for moved (vs. unmoved) elements ****/
  /**** - the actual collection logic is shared (s. "Geometry Utilities")  ****/
  drawMoveGuides() {
    const t = this.UnitsPerPixel(), n = (f) => {
      const h = bo([f]);
      return h == null ? void 0 : pa(h);
    }, o = this.Selection.map(n).filter((f) => f != null), r = Array.from(this.ContentLayer.children).filter((f) => !this.Selection.includes(f)).map(n).filter((f) => f != null);
    if (o.length === 0 || r.length === 0)
      return;
    const { vertical: a, horizontal: i } = sd(o, r, t), s = t, c = {
      dashed: `${6 * s} ${4 * s}`,
      dotted: `${s} ${3 * s}`
    }, { x: d, y: u, Width: p, Height: l } = this.ViewBox;
    a.forEach((f, h) => {
      this.OverlayLayer.appendChild(He("line", {
        class: "jcl-de-guide",
        "stroke-width": s,
        "stroke-dasharray": c[f],
        x1: h,
        y1: u,
        x2: h,
        y2: u + l
      }));
    }), i.forEach((f, h) => {
      this.OverlayLayer.appendChild(He("line", {
        class: "jcl-de-guide",
        "stroke-width": s,
        "stroke-dasharray": c[f],
        x1: d,
        y1: h,
        x2: d + p,
        y2: h
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
    ].includes(t) || de(
      'InvalidArgument: invalid drawing tool "' + t + '" given'
    ), t === this.Tool)
      return;
    this.cancelPolyline(), this.DragState = void 0, t === "editPoints" ? this.PointSelection = this.Selection.find(
      (r) => this.isPointEditable(r)
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
    this.View.style.cursor = o[t], this.refreshOverlay(), E(
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
      const a = parseInt(n.target.dataset?.index ?? "", 10);
      o === "rotate" ? this.beginRotation(t, a) : this.beginResizing(t, o, a);
      return;
    }
    const r = this.ElementAt(n.target) ?? this.ElementNear(t);
    switch (!0) {
      case r == null:
        n.shiftKey || this.clearSelection(), this.beginRubberBand(t, n.shiftKey);
        break;
      case n.shiftKey:
        this.toggle(r);
        break;
      default:
        this.isSelected(r) || this.select([r]), this.readonly || this.beginMove(t);
    }
  }
  /**** rubber band selection ****/
  beginRubberBand(t, n) {
    const o = He("rect", {
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
    const { StartPoint: n, Band: o } = this.DragState, r = {
      x: Math.min(n.x, t.x),
      y: Math.min(n.y, t.y),
      Width: Math.abs(t.x - n.x),
      Height: Math.abs(t.y - n.y)
    };
    o.setAttribute("x", r.x), o.setAttribute("y", r.y), o.setAttribute("width", r.Width), o.setAttribute("height", r.Height), this.DragState.Box = r;
  }
  endRubberBand(t) {
    t.Band.remove();
    const n = t.Box;
    if (n == null || n.Width < 1 && n.Height < 1)
      return;
    const o = Array.from(this.ContentLayer.children).filter((r) => {
      const a = bo([r]);
      return a != null && ua(n, a);
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
    let r;
    switch (this.Tool) {
      case "rect":
        r = He("rect", {
          x: o.x,
          y: o.y,
          width: 0,
          height: 0
        });
        break;
      case "ellipse":
        r = He("ellipse", {
          cx: o.x,
          cy: o.y,
          rx: 0,
          ry: 0
        });
        break;
      case "line":
        r = He("line", {
          x1: o.x,
          y1: o.y,
          x2: o.x,
          y2: o.y
        });
        break;
      case "freehand":
        r = He("path", { d: `M ${t.x} ${t.y}` });
        break;
      default:
        return;
    }
    this.applyStyleTo(r, this.CurrentStyle), (this.Tool === "line" || this.Tool === "freehand") && r.setAttribute("fill", "none"), this.ContentLayer.appendChild(r), this.DragState = {
      Type: "create",
      Tool: this.Tool,
      Element: r,
      StartPoint: o,
      PointList: [t]
    };
  }
  /**** continueCreation ****/
  continueCreation(t, n) {
    const { Tool: o, Element: r, StartPoint: a, PointList: i } = this.DragState, s = this.snapped(t);
    switch (o) {
      case "rect": {
        let c = Math.abs(s.x - a.x), d = Math.abs(s.y - a.y);
        n.shiftKey && (c = d = Math.max(c, d));
        const u = s.x < a.x ? a.x - c : a.x, p = s.y < a.y ? a.y - d : a.y;
        r.setAttribute("x", u), r.setAttribute("width", c), r.setAttribute("y", p), r.setAttribute("height", d);
        break;
      }
      case "ellipse": {
        let c = Math.abs(s.x - a.x) / 2, d = Math.abs(s.y - a.y) / 2;
        n.shiftKey && (c = d = Math.max(c, d));
        const u = a.x + (s.x < a.x ? -c : c), p = a.y + (s.y < a.y ? -d : d);
        r.setAttribute("cx", u), r.setAttribute("rx", c), r.setAttribute("cy", p), r.setAttribute("ry", d);
        break;
      }
      case "line": {
        if (n.shiftKey) {
          const c = s.x - a.x, d = s.y - a.y, u = Math.round(Math.atan2(d, c) / (Math.PI / 4)) * (Math.PI / 4), p = Math.hypot(c, d);
          s.x = a.x + p * Math.cos(u), s.y = a.y + p * Math.sin(u);
        }
        r.setAttribute("x2", s.x), r.setAttribute("y2", s.y);
        break;
      }
      case "freehand": {
        const c = i.at(-1);
        Math.hypot(t.x - c.x, t.y - c.y) >= 2 * this.UnitsPerPixel() && (i.push(t), r.setAttribute(
          "d",
          "M " + i.map((d) => `${d.x} ${d.y}`).join(" L ")
        ));
      }
    }
  }
  /**** endCreation ****/
  endCreation(t) {
    const { Element: n } = t, o = bo([n]);
    if (o == null || o.Width < 1 && o.Height < 1) {
      n.remove();
      return;
    }
    this.IdFor(n), this.select([n]), this.announceChange();
  }
  /**** polyline/bezier construction (click-based rather than drag-based) ****/
  extendPolyline(t) {
    const n = this.snapped(t);
    this.PendingPolyline == null ? (this.PendingPoints = [n, n], this.PendingPolyline = He(
      this.Tool === "bezier" ? "path" : "polyline"
    ), this.applyStyleTo(this.PendingPolyline, this.CurrentStyle), this.PendingPolyline.setAttribute("fill", "none"), this.writePolylinePoints(), this.ContentLayer.appendChild(this.PendingPolyline)) : (this.PendingPoints.push(n), this.writePolylinePoints());
  }
  previewPolylineAt(t) {
    this.PendingPoints[this.PendingPoints.length - 1] = this.snapped(t), this.writePolylinePoints();
  }
  writePolylinePoints() {
    this.PendingPolyline.nodeName === "path" ? this.PendingPolyline.setAttribute(
      "d",
      In(Rs(this.PendingPoints))
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
    let r = !1;
    for (
      ;
      // ...polyline (or bezier) into a loop
      n.length > 2 && Math.hypot(
        n.at(-1).x - n[0].x,
        n.at(-1).y - n[0].y
      ) <= o;
    )
      n.pop(), r = !0;
    if (n.length < 3 && (r = !1), n.length < 2)
      t.remove();
    else {
      let a = t;
      switch (!0) {
        case t.nodeName === "path":
          t.setAttribute(
            "d",
            In(Rs(n, r))
          ), r && (t.removeAttribute("marker-start"), t.removeAttribute("marker-end"));
          break;
        case r: {
          a = He("polygon"), Array.from(t.attributes).forEach((i) => {
            i.name.startsWith("marker-") || a.setAttribute(i.name, i.value);
          }), a.setAttribute(
            "points",
            n.map((i) => `${i.x},${i.y}`).join(" ")
          ), t.replaceWith(a);
          break;
        }
        default:
          t.setAttribute(
            "points",
            n.map((i) => `${i.x},${i.y}`).join(" ")
          );
      }
      this.IdFor(a), this.select([a]), this.announceChange();
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
    Promise.resolve(n("")).then((r) => {
      r == null || String(r).trim() === "" || this.insertText(String(r), o.x, o.y);
    }).catch((r) => {
      console.warn("DrawingEditor: text request failed", r);
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
    nt("text content", t);
    const r = He("text", { x: n, y: o });
    r.textContent = t, this.applyStyleTo(r, this.CurrentStyle), r.setAttribute("fill", this.CurrentStyle.StrokeColor ?? "#000000"), r.setAttribute("stroke", "none"), this.ContentLayer.appendChild(r), this.IdFor(r), this.select([r]), this.announceChange();
  }
  /**** moving - always moves the whole selection ****/
  beginMove(t) {
    this.DragState = {
      Type: "move",
      StartPoint: t,
      modified: !1,
      BaseMatrices: new Map(this.Selection.map(
        (n) => [n, Ct(n)]
      ))
    };
  }
  continueMove(t) {
    const { StartPoint: n, BaseMatrices: o } = this.DragState;
    let r = t.x - n.x, a = t.y - n.y;
    if (this.snapToGrid) {
      const i = this.GridSize;
      r = Math.round(r / i) * i, a = Math.round(a / i) * i;
    }
    this.Selection.forEach((i) => {
      $n(
        i,
        new DOMMatrix().translate(r, a).multiply(o.get(i))
      );
    }), this.DragState.modified ||= r !== 0 || a !== 0, this.refreshOverlay(), this.drawMoveGuides();
  }
  moveSelectionBy(t, n) {
    this.readonly || this.Selection.length === 0 || (this.Selection.forEach((o) => {
      $n(
        o,
        new DOMMatrix().translate(t, n).multiply(Ct(o))
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
    const r = this.Selection[o] ?? this.Selection[0];
    if (r == null)
      return;
    const a = ir(r);
    if (a == null)
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
    }, s = this.HandlePositionsFor(a), [c, d] = s[n], [u, p] = s[i[n]], l = new Map(this.Selection.map((f) => {
      const h = ir(f);
      return [f, h == null ? [u, p] : this.HandlePositionsFor(h)[i[n]]];
    }));
    this.DragState = {
      Type: "resize",
      Handle: n,
      HandleX: c,
      HandleY: d,
      AnchorX: u,
      AnchorY: p,
      InverseReferenceMatrix: Ct(r).inverse(),
      ElementAnchors: l,
      modified: !1,
      BaseMatrices: new Map(this.Selection.map(
        (f) => [f, Ct(f)]
      ))
    };
  }
  continueResizing(t, n) {
    const {
      HandleX: o,
      HandleY: r,
      AnchorX: a,
      AnchorY: i,
      InverseReferenceMatrix: s,
      ElementAnchors: c,
      BaseMatrices: d
    } = this.DragState, u = this.snapped(t), p = new DOMPoint(u.x, u.y).matrixTransform(s);
    let l = o === a ? 1 : (p.x - a) / (o - a), f = r === i ? 1 : (p.y - i) / (r - i);
    if (n.shiftKey) {
      const h = o === a ? Math.abs(f) : r === i ? Math.abs(l) : Math.max(Math.abs(l), Math.abs(f));
      l = l < 0 ? -h : h, f = f < 0 ? -h : h;
    }
    Math.abs(l) < 0.01 && (l = l < 0 ? -0.01 : 0.01), Math.abs(f) < 0.01 && (f = f < 0 ? -0.01 : 0.01), this.Selection.forEach((h) => {
      const [g, b] = c.get(h), m = new DOMMatrix().translate(g, b).scale(l, f).translate(-g, -b);
      $n(h, d.get(h).multiply(m));
    }), this.DragState.modified = !0, this.refreshOverlay();
  }
  /**** rotating - the dragged handle belongs to a single element, but the ****/
  /**** rotation is applied to every selected element around its own centre ****/
  beginRotation(t, n) {
    const o = this.Selection[n] ?? this.Selection[0];
    if (o == null)
      return;
    const r = (d) => {
      const u = ir(d);
      if (u == null)
        return;
      const p = new DOMPoint(u.x + u.Width / 2, u.y + u.Height / 2).matrixTransform(Ct(d));
      return [p.x, p.y];
    }, a = r(o);
    if (a == null)
      return;
    const [i, s] = a, c = new Map(this.Selection.map((d) => [
      d,
      r(d) ?? [i, s]
    ]));
    this.DragState = {
      Type: "rotate",
      CenterX: i,
      CenterY: s,
      ElementCenters: c,
      modified: !1,
      StartAngle: Math.atan2(t.y - s, t.x - i),
      BaseMatrices: new Map(this.Selection.map(
        (d) => [d, Ct(d)]
      ))
    };
  }
  continueRotation(t, n) {
    const {
      CenterX: o,
      CenterY: r,
      StartAngle: a,
      ElementCenters: i,
      BaseMatrices: s
    } = this.DragState;
    let d = (Math.atan2(t.y - r, t.x - o) - a) * 180 / Math.PI;
    (n.shiftKey || this.snapToGrid) && (d = Math.round(d / 15) * 15), this.Selection.forEach((u) => {
      const [p, l] = i.get(u), f = new DOMMatrix().translate(p, l).rotate(d).translate(-p, -l);
      $n(u, f.multiply(s.get(u)));
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
        return /^\s*M[0-9\s.,eE+-]+(?:L[0-9\s.,eE+-]+)*Z?\s*$/.test(n) || Jr(n) != null;
      }
      default:
        return !1;
    }
  }
  /**** BezierModelOf - the bezier model of a path element (or undefined) ****/
  BezierModelOf(t) {
    return t?.nodeName === "path" ? Jr(t.getAttribute("d") ?? "") : void 0;
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
    const r = (t.nodeName === "path" ? (t.getAttribute("d") ?? "").replace(/[MLZ]/g, " ") : t.getAttribute("points") ?? "").trim().split(/[\s,]+/).map(parseFloat), a = [];
    for (let i = 0; i + 1 < r.length; i += 2)
      a.push({ x: r[i], y: r[i + 1] });
    return a;
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
          "M " + n.map((r) => `${r.x} ${r.y}`).join(" L ") + (o ? " Z" : "")
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
    const n = Ct(t), o = this.UnitsPerPixel(), r = this.BezierModelOf(t), a = this.PointListOf(t), i = a.map(
      (u) => new DOMPoint(u.x, u.y).matrixTransform(n)
    ), s = t.nodeName === "polygon" || (r != null ? r.closed : /Z\s*$/.test(t.getAttribute("d") ?? "")), c = bo([t]);
    c != null && this.OverlayLayer.appendChild(He("rect", {
      class: "jcl-de-frame",
      "stroke-width": o,
      x: c.x,
      y: c.y,
      width: c.Width,
      height: c.Height
    })), r?.Controls.forEach((u, p) => {
      const l = i[p], f = i[(p + 1) % i.length];
      [["c1", l], ["c2", f]].forEach(([h, g]) => {
        const b = new DOMPoint(u[h].x, u[h].y).matrixTransform(n);
        this.OverlayLayer.appendChild(He("line", {
          class: "jcl-de-frame",
          "stroke-width": o,
          x1: g.x,
          y1: g.y,
          x2: b.x,
          y2: b.y
        })), this.OverlayLayer.appendChild(He("circle", {
          class: "jcl-de-handle",
          "data-control-index": p,
          "data-control-part": h,
          "stroke-width": o,
          cx: b.x,
          cy: b.y,
          r: 3 * o,
          opacity: 0.8
        }));
      });
    });
    const d = t.nodeName === "line" ? 0 : r != null ? r.Controls.length : s ? i.length : i.length - 1;
    for (let u = 0; u < d; u++) {
      const p = i[u], l = i[(u + 1) % i.length];
      let f = { x: (p.x + l.x) / 2, y: (p.y + l.y) / 2 };
      if (r != null) {
        const { c1: h, c2: g } = r.Controls[u], b = Fs(
          a[u],
          h,
          g,
          a[(u + 1) % a.length]
        ).Midpoint;
        f = new DOMPoint(b.x, b.y).matrixTransform(n);
      }
      this.OverlayLayer.appendChild(He("rect", {
        class: "jcl-de-handle",
        "data-midpoint-index": u,
        "stroke-width": o,
        x: f.x - 3 * o,
        y: f.y - 3 * o,
        width: 6 * o,
        height: 6 * o,
        opacity: 0.7
      }));
    }
    i.forEach((u, p) => {
      this.OverlayLayer.appendChild(He("circle", {
        class: "jcl-de-handle",
        "data-point-index": p,
        "stroke-width": o,
        cx: u.x,
        cy: u.y,
        r: 4 * o
      }));
    });
  }
  /**** beginPointEditing - handles "pointerdown" for the "editPoints" tool ****/
  beginPointEditing(t, n) {
    const o = n.target.dataset ?? {};
    switch (!0) {
      case o.pointIndex != null: {
        const r = parseInt(o.pointIndex, 10);
        n.altKey ? this.removePointAt(r) : this.DragState = {
          Type: "editPoint",
          Kind: "anchor",
          Index: r,
          modified: !1
        };
        break;
      }
      case o.controlIndex != null: {
        const r = parseInt(o.controlIndex, 10);
        this.DragState = {
          Type: "editPoint",
          Kind: "control",
          Index: r,
          Part: o.controlPart,
          modified: !1
        };
        break;
      }
      case o.midpointIndex != null: {
        const r = parseInt(o.midpointIndex, 10);
        this.insertPointAfter(r, t), this.DragState = {
          Type: "editPoint",
          Kind: "anchor",
          Index: r + 1,
          modified: !0
        };
        break;
      }
      default: {
        const r = this.ElementAt(n.target) ?? this.ElementNear(t);
        this.PointSelection = r != null && this.isPointEditable(r) ? r : void 0, this.select(
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
    const o = new DOMPoint(t.x, t.y).matrixTransform(Ct(n).inverse()), r = this.snapped({ x: o.x, y: o.y }), a = this.BezierModelOf(n);
    if (a == null) {
      const i = this.PointListOf(n);
      i[this.DragState.Index] = r, this.setPointListOf(n, i);
    } else
      this.dragBezierPointTo(n, a, r);
    this.DragState.modified = !0, this.refreshOverlay();
  }
  /**** dragBezierPointTo - anchors take their control points along ****/
  dragBezierPointTo(t, n, o) {
    const { Kind: r, Index: a, Part: i } = this.DragState;
    if (r === "control")
      n.Controls[a][i] = o;
    else {
      const s = n.Anchors[a], c = o.x - s.x, d = o.y - s.y;
      s.x = o.x, s.y = o.y;
      const u = n.Controls.length, p = a < u ? a : void 0, l = a > 0 ? a - 1 : n.closed ? u - 1 : void 0;
      p != null && (n.Controls[p].c1.x += c, n.Controls[p].c1.y += d), l != null && (n.Controls[l].c2.x += c, n.Controls[l].c2.y += d);
    }
    t.setAttribute("d", In(n));
  }
  removePointAt(t) {
    const n = this.PointSelection, o = this.BezierModelOf(n);
    if (o != null) {
      this.removeBezierAnchorAt(n, o, t);
      return;
    }
    const r = this.PointListOf(n);
    r.length <= 2 || (r.splice(t, 1), this.setPointListOf(n, r), this.refreshOverlay(), this.announceChange());
  }
  /**** removeBezierAnchorAt - merges the two segments meeting at an anchor ****/
  removeBezierAnchorAt(t, n, o) {
    const { Anchors: r, Controls: a, closed: i } = n;
    if (!(r.length <= (i ? 3 : 2))) {
      switch (!0) {
        case i: {
          const s = (o + r.length - 1) % r.length;
          a[s] = { c1: a[s].c1, c2: a[o].c2 }, a.splice(o, 1), r.splice(o, 1);
          break;
        }
        case o === 0:
          r.shift(), a.shift();
          break;
        case o === r.length - 1:
          r.pop(), a.pop();
          break;
        default:
          a[o - 1] = { c1: a[o - 1].c1, c2: a[o].c2 }, a.splice(o, 1), r.splice(o, 1);
      }
      t.setAttribute("d", In(n)), this.refreshOverlay(), this.announceChange();
    }
  }
  insertPointAfter(t, n) {
    const o = this.PointSelection, r = this.BezierModelOf(o);
    if (r != null) {
      const { Anchors: s, Controls: c } = r, d = Fs(
        s[t],
        c[t].c1,
        c[t].c2,
        s[(t + 1) % s.length]
      );
      c.splice(t, 1, d.leftControls, d.rightControls), s.splice(t + 1, 0, d.Midpoint), o.setAttribute("d", In(r)), this.refreshOverlay();
      return;
    }
    const a = new DOMPoint(n.x, n.y).matrixTransform(Ct(o).inverse()), i = this.PointListOf(o);
    i.splice(t + 1, 0, { x: a.x, y: a.y }), this.setPointListOf(o, i), this.refreshOverlay();
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
          const o = He(
            n.nodeName === "polyline" ? "polygon" : "polyline"
          );
          return Array.from(n.attributes).forEach((r) => {
            // closed shapes carry no arrowheads
            n.nodeName === "polyline" && r.name.startsWith("marker-") || o.setAttribute(r.name, r.value);
          }), n.replaceWith(o), this.PointSelection === n && (this.PointSelection = o), t = !0, o;
        }
        case "path": {
          const o = n.getAttribute("d") ?? "", r = Jr(o);
          switch (!0) {
            case r != null: {
              if (r.closed)
                r.Controls.pop(), r.closed = !1;
              else {
                const a = r.Anchors.at(-1);
                r.Controls.push({
                  c1: Gt(a, r.Anchors[0], 1 / 3),
                  c2: Gt(a, r.Anchors[0], 2 / 3)
                }), r.closed = !0, n.removeAttribute("marker-start"), n.removeAttribute("marker-end");
              }
              n.setAttribute("d", In(r)), t = !0;
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
    const { x: t, y: n, Width: o, Height: r } = this.ViewBox;
    this.View.setAttribute("viewBox", `${t} ${n} ${o} ${r}`), this.refreshGrid(), this.refreshOverlay();
  }
  setViewBox(t) {
    const { x: n, y: o, Width: r, Height: a } = t ?? {};
    isFinite(n) && isFinite(o) && isFinite(r) && r > 0 && isFinite(a) && a > 0 || de("InvalidArgument: invalid view box given"), this.ViewBox = { x: n, y: o, Width: r, Height: a }, this.applyViewBox();
  }
  /**** zooming ****/
  ZoomFactor() {
    return (this.Container.clientWidth || 1) / this.ViewBox.Width;
  }
  setZoom(t) {
    isFinite(t) && t > 0 || de(
      "InvalidArgument: invalid zoom factor given"
    );
    const n = this.ViewBox.x + this.ViewBox.Width / 2, o = this.ViewBox.y + this.ViewBox.Height / 2, r = (this.Container.clientWidth || 1) / t, a = (this.Container.clientHeight || 1) / t;
    this.setViewBox({ x: n - r / 2, y: o - a / 2, Width: r, Height: a });
  }
  zoomBy(t, n) {
    const { x: o, y: r, Width: a, Height: i } = this.ViewBox, s = Math.max(
      this.Size.Width / 50,
      Math.min(a / t, this.Size.Width * 20)
    ), c = a / s, d = n ?? { x: o + a / 2, y: r + i / 2 };
    this.setViewBox({
      x: d.x - (d.x - o) / c,
      y: d.y - (d.y - r) / c,
      Width: s,
      Height: i / c
    });
  }
  zoomToFit() {
    const t = bo(Array.from(this.ContentLayer.children)) ?? {
      x: 0,
      y: 0,
      Width: this.Size.Width,
      Height: this.Size.Height
    }, n = Math.max(t.Width, t.Height) * 0.05 || 10;
    let o = t.Width + 2 * n, r = t.Height + 2 * n;
    const a = (this.Container.clientWidth || 1) / (this.Container.clientHeight || 1);
    o / r > a ? r = o / a : o = r * a, this.setViewBox({
      x: t.x + t.Width / 2 - o / 2,
      y: t.y + t.Height / 2 - r / 2,
      Width: o,
      Height: r
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
    const { StartX: n, StartY: o, StartViewBox: r } = this.DragState, a = this.UnitsPerPixel();
    this.ViewBox = {
      ...this.ViewBox,
      x: r.x - (t.clientX - n) * a,
      y: r.y - (t.clientY - o) * a
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
    const n = t.ctrlKey || t.metaKey, o = t.key.length === 1 ? t.key.toLowerCase() : t.key, r = (t.shiftKey ? 10 : 1) * (this.snapToGrid ? this.GridSize : 1);
    let a = !0;
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
        this.moveSelectionBy(-r, 0);
        break;
      case o === "ArrowRight":
        this.moveSelectionBy(r, 0);
        break;
      case o === "ArrowUp":
        this.moveSelectionBy(0, -r);
        break;
      case o === "ArrowDown":
        this.moveSelectionBy(0, r);
        break;
      default:
        a = !1;
    }
    a && t.preventDefault();
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
      `<svg xmlns="${da}">` + this.ClipboardContent + "</svg>",
      "image/svg+xml"
    );
    Os(t.documentElement);
    const n = this.snapToGrid ? this.GridSize : 10, o = [];
    Array.from(t.documentElement.children).forEach((r) => {
      const a = document.importNode(r, !0);
      a.removeAttribute("id"), $n(
        a,
        new DOMMatrix().translate(n, n).multiply(Ct(a))
      ), this.ContentLayer.appendChild(a), this.IdFor(a), o.push(a);
    }), o.length !== 0 && (this.ClipboardContent = o.map((r) => r.outerHTML).join(""), this.select(o), this.announceChange());
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
    const t = Array.from(this.ContentLayer.children).filter((o) => this.isSelected(o)), n = He("g");
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
      const r = Ct(o);
      Array.from(o.children).forEach((a) => {
        $n(a, r.multiply(Ct(a))), this.ContentLayer.insertBefore(a, o), this.IdFor(a), t.push(a);
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
    const n = {}, o = Dt(t?.StrokeColor), r = rn(t?.StrokeWidth, 0, 100), a = D(t?.StrokeDashes), i = t?.FillColor === "none" ? "none" : Dt(t?.FillColor), s = rn(t?.Opacity, 0, 1), c = J(t?.StartArrow), d = J(t?.EndArrow), u = D(t?.FontFamily), p = rn(t?.FontSize, 1, 1e3), l = he(t?.FontWeight, ["normal", "bold"]) ? t?.FontWeight : void 0, f = he(t?.FontStyle, ["normal", "italic"]) ? t?.FontStyle : void 0;
    o != null && (n.StrokeColor = o), r != null && (n.StrokeWidth = r), a != null && (n.StrokeDashes = a), i != null && (n.FillColor = i), s != null && (n.Opacity = s), c != null && (n.StartArrow = c), d != null && (n.EndArrow = d), u != null && (n.FontFamily = u), p != null && (n.FontSize = p), l != null && (n.FontWeight = l), f != null && (n.FontStyle = f), this.CurrentStyle = { ...this.CurrentStyle, ...n }, !this.readonly && this.Selection.length > 0 && (this.Selection.forEach(
      (h) => this.applyStyleTo(h, n)
    ), this.refreshOverlay(), this.announceChange());
  }
  /**** StyleOfElement - reads the style-relevant attributes of an element ****/
  StyleOfElement(t) {
    const n = {}, o = parseFloat(t.getAttribute("stroke-width") ?? "");
    isNaN(o) || (n.StrokeWidth = o);
    const r = t.getAttribute("stroke-dasharray");
    r != null && (n.StrokeDashes = r);
    const a = parseFloat(t.getAttribute("opacity") ?? "");
    if (isNaN(a) || (n.Opacity = a), t.nodeName === "text") {
      const u = t.getAttribute("fill");
      u != null && (n.StrokeColor = u);
    } else {
      const u = t.getAttribute("stroke");
      u != null && (n.StrokeColor = u);
      const p = t.getAttribute("fill");
      p != null && (n.FillColor = p);
    }
    ["line", "polyline", "path"].includes(t.nodeName) && (n.StartArrow = t.getAttribute("marker-start") != null, n.EndArrow = t.getAttribute("marker-end") != null);
    const i = t.getAttribute("font-family");
    i != null && (n.FontFamily = i);
    const s = parseFloat(t.getAttribute("font-size") ?? "");
    isNaN(s) || (n.FontSize = s);
    const c = t.getAttribute("font-weight");
    (c === "normal" || c === "bold") && (n.FontWeight = c);
    const d = t.getAttribute("font-style");
    return (d === "normal" || d === "italic") && (n.FontStyle = d), n;
  }
  /**** SelectionStyle - common style of the selection (null = indifferent) ****/
  SelectionStyle() {
    const t = {};
    return this.Selection.forEach((n) => {
      const o = this.StyleOfElement(n);
      for (const r in o)
        switch (!0) {
          case !(r in t):
            t[r] = o[r];
            break;
          case t[r] !== o[r]:
            t[r] = null;
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
    for (const r in n) {
      const a = n[r];
      a != null && o[r] != null && (a === "" ? t.removeAttribute(o[r]) : t.setAttribute(o[r], String(a)));
    }
    if (["line", "polyline", "path"].includes(t.nodeName)) {
      const r = {
        // arrowheads apply to open shapes only
        StartArrow: "marker-start",
        EndArrow: "marker-end"
      };
      for (const a in r)
        n[a] != null && (n[a] ? t.setAttribute(r[a], "url(#jcl-de-arrow)") : t.removeAttribute(r[a]));
    }
    t.nodeName === "text" && n.StrokeColor != null && (t.setAttribute("fill", String(n.StrokeColor)), t.setAttribute("stroke", "none"));
  }
  /**** installArrowMarker - a single marker serves all arrowheads ****/
  installArrowMarker() {
    if (this.View.querySelector("#jcl-de-arrow") != null)
      return;
    const t = He("marker", {
      id: "jcl-de-arrow",
      viewBox: "0 0 10 10",
      refX: 9,
      refY: 5,
      markerWidth: 7,
      markerHeight: 7,
      markerUnits: "strokeWidth",
      orient: "auto-start-reverse"
    });
    t.appendChild(He("path", {
      d: "M 0 0 L 10 5 L 0 10 Z",
      fill: "context-stroke",
      stroke: "none"
    }));
    const n = He("defs");
    n.appendChild(t), this.View.insertBefore(n, this.GridLayer);
  }
}
function Xb(e) {
  return U(() => {
    ld(), e = K(e);
    const t = D(e.Class) ?? "";
    let n = ae(e.Value);
    const o = J(e.readonly) ?? !1, r = J(e.disabled) ?? !1, a = bn(e.Width) ?? 800, i = bn(e.Height) ?? 600, s = rn(e.GridSize, 0.01, 1e3) ?? 10, c = J(e.snapToGrid) ?? !1, d = J(e.showGrid) ?? !1, u = T(e.onValueChange), p = T(e.onSelectionChange), l = T(e.onToolChange), f = T(e.onUndoStateChange), h = T(e.onTextRequest), g = T(e.onMount), b = T(e.onUnmount), m = q(null), v = q(void 0), C = q({});
    C.current = {
      onValueChange: u,
      onSelectionChange: p,
      onToolChange: l,
      onUndoStateChange: f,
      onTextRequest: h,
      onUnmount: b
    };
    const S = q(n ?? ""), j = q(n ?? "");
    return n != null && n !== S.current && (S.current = n, j.current = n), Ce(() => {
      const x = new qb(m.current, {
        onValueChange: (R) => {
          j.current = R, C.current.onValueChange?.(R);
        },
        onSelectionChange: (R) => {
          C.current.onSelectionChange?.(R);
        },
        onToolChange: (R) => {
          C.current.onToolChange?.(R);
        },
        onUndoStateChange: (R, L) => {
          C.current.onUndoStateChange?.(R, L);
        },
        onTextRequest: (R) => C.current.onTextRequest?.(R)
      });
      return v.current = x, E('DrawingEditor callback "onMount"', g, {
        Editor: x,
        // grants access to the full internal API
        focus: () => x.View.focus(),
        getValue: () => x.getValue(),
        setValue: (R) => {
          x.setValue(R), j.current = R;
        },
        Tool: () => x.Tool,
        setTool: (R) => x.setTool(R),
        Style: () => x.getStyle(),
        setStyle: (R) => x.setStyle(R),
        SelectionStyle: () => x.SelectionStyle(),
        SelectedIds: () => x.SelectedIds(),
        select: (R) => x.selectIds(R),
        selectAll: () => x.selectAll(),
        deselectAll: () => x.clearSelection(),
        deleteSelection: () => x.deleteSelection(),
        toggleClosed: () => x.toggleClosed(),
        group: () => x.groupSelection(),
        ungroup: () => x.ungroupSelection(),
        bringToFront: () => x.bringToFront(),
        sendToBack: () => x.sendToBack(),
        raise: () => x.raiseSelection(),
        lower: () => x.lowerSelection(),
        copy: () => x.copySelection(),
        cut: () => x.cutSelection(),
        paste: () => x.pasteClipboard(),
        duplicate: () => x.duplicateSelection(),
        undo: () => x.undo(),
        canUndo: () => x.canUndo(),
        redo: () => x.redo(),
        canRedo: () => x.canRedo(),
        ViewBox: () => ({ ...x.ViewBox }),
        setViewBox: (R) => x.setViewBox(R),
        ZoomFactor: () => x.ZoomFactor(),
        setZoom: (R) => x.setZoom(R),
        zoomToFit: () => x.zoomToFit(),
        insertText: (R, L, $) => x.insertText(R, L, $)
      }), () => {
        E(
          'DrawingEditor callback "onUnmount"',
          C.current.onUnmount
        ), v.current = void 0, x.destroy();
      };
    }, []), Ce(() => {
      const x = v.current;
      x != null && (x.readonly = o, o && (x.cancelPolyline(), x.DragState = void 0));
    }, [o]), Ce(() => {
      const x = v.current;
      x != null && (x.Size = { Width: a, Height: i }, x.setViewBox({ x: 0, y: 0, Width: a, Height: i }));
    }, [a, i]), Ce(() => {
      const x = v.current;
      x != null && (x.GridSize = s, x.snapToGrid = c, x.showsGrid = d, x.refreshGrid());
    }, [s, c, d]), Ce(() => {
      const x = v.current;
      if (!(x == null || n == null) && x.getValue() !== j.current)
        try {
          x.setValue(j.current);
        } catch (w) {
          console.warn("DrawingEditor: invalid value given", w);
        }
    }, [n]), y`<div
        class="jcl-component drawingeditor ${r ? "disabled" : ""} ${t}"
        ...${e.RestProps} ref=${m}
      />`;
  });
}
const ld = /* @__PURE__ */ Z("jcl-component.drawingeditor", `
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
  `), Yb = [
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
class Jb {
  /**** document and layer model ****/
  Width = 0;
  Height = 0;
  LayerList = [];
  activeLayerIndex = -1;
  CallbackSet = {};
  // patched from the outside, if need be
  #w = 0;
  /**** activeLayer ****/
  get activeLayer() {
    return this.LayerList[this.activeLayerIndex];
  }
  /**** initialiseDocument ****/
  initialiseDocument(t, n) {
    qn("document width", t), qn("document height", n), this.Width = t, this.Height = n, this.LayerList = [], this.activeLayerIndex = -1, this.newLayerNamed("Background"), this.requestRendering();
  }
  /**** newLayerNamed ****/
  newLayerNamed(t, n = this.LayerList.length) {
    ln("layer name", t);
    const o = new OffscreenCanvas(this.Width, this.Height), r = o.getContext("2d");
    r == null && de(
      "CanvasFailure: could not create a 2d rendering context"
    );
    const a = {
      Id: `layer-${++this.#w}`,
      Name: t,
      isVisible: !0,
      Opacity: 1,
      BlendMode: "source-over",
      Canvas: o,
      Context: r
    };
    return this.LayerList.splice(n, 0, a), this.activeLayerIndex = this.LayerList.indexOf(a), this.requestRendering(), a;
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
    const { isVisible: o, Opacity: r, BlendMode: a } = n;
    o != null && (t.isVisible = o == !0), r != null && (t.Opacity = Math.max(0, Math.min(r, 1))), a != null && (t.BlendMode = a), this.requestRendering();
  }
  /**** rendering and compositing ****/
  ViewCanvas = void 0;
  #d = void 0;
  #r = !1;
  /**** requestRendering - renders at most once per animation frame ****/
  requestRendering() {
    this.#r || this.ViewCanvas == null || (this.#r = !0, requestAnimationFrame(() => {
      this.#r = !1, this.render();
    }));
  }
  /**** render ****/
  render() {
    const t = this.ViewCanvas, n = this.#d;
    if (t == null || n == null)
      return;
    const o = window.devicePixelRatio ?? 1;
    n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, t.width, t.height);
    const r = this.ZoomFactor * o;
    n.setTransform(
      r,
      0,
      0,
      r,
      -this.OffsetX * r,
      -this.OffsetY * r
    ), n.imageSmoothingEnabled = this.ZoomFactor < 1, this.LayerList.forEach((a) => {
      a.isVisible && (n.globalAlpha = a.Opacity, n.globalCompositeOperation = a.BlendMode, n.drawImage(a.Canvas, 0, 0));
    }), n.globalAlpha = 1, n.globalCompositeOperation = "source-over", this.renderOverlay(n);
  }
  /**** viewport handling ****/
  OffsetX = 0;
  // in document coordinates
  OffsetY = 0;
  ZoomFactor = 1;
  /**** attachTo - binds this editor to its (visible) view canvas ****/
  attachTo(t) {
    cd(), this.ViewCanvas = t, this.#d = t.getContext("2d") ?? void 0, this.#d == null && de(
      "CanvasFailure: could not create a 2d rendering context"
    ), this.installInputHandlersOn(t), this.resizeViewCanvas();
  }
  /**** resizeViewCanvas - keeps the canvas backing store HiDPI-crisp ****/
  resizeViewCanvas() {
    const t = this.ViewCanvas;
    if (t == null)
      return;
    const n = window.devicePixelRatio ?? 1, { width: o, height: r } = t.getBoundingClientRect();
    t.width = Math.round(o * n), t.height = Math.round(r * n), this.requestRendering();
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
    const r = Math.max(0.05, Math.min(t, 32));
    if (n != null && o != null) {
      const a = this.DocumentPointFor(n, o);
      this.OffsetX = a.x - n / r, this.OffsetY = a.y - o / r;
    }
    this.ZoomFactor = r, this.reportViewportChange(), this.requestRendering();
  }
  /**** reportViewportChange ****/
  reportViewportChange() {
    E(
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
  #a = void 0;
  // per-stroke colour (FG or BG)
  #h = void 0;
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
      (o) => this.#$(o),
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
      (o) => this.#S(o),
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
    this.#a = // like MS Paint: the right button swaps the
    o ? this.backgroundColor : this.currentColor, this.#h = o ? this.currentColor : this.backgroundColor;
    const r = this.DocumentPointFor(t.offsetX, t.offsetY);
    switch (this.#n = r, this.currentTool) {
      case "brush":
      case "eraser":
        this.memoizeLayerForUndo(), this.beginStrokeAt(r, t.pressure);
        break;
      case "line":
      case "rectangle":
      case "ellipse":
      case "filledRectangle":
      case "filledEllipse":
        this.memoizeLayerForUndo(), this.beginShapeAt(r);
        break;
      case "text":
        this.enterTextAt(r, this.#a);
        break;
      // pointer handling need not wait
      case "fill":
        this.memoizeLayerForUndo(), this.fillAt(r, this.#a);
        break;
      case "eyeDropper":
        this.pickColorAt(r, o);
        break;
      case "select":
        this.#p(r);
        break;
    }
    t.preventDefault();
  }
  /**** #beginSelectionDragAt - moves a floating bitmap, lifts a selected ****/
  /**** region or starts a new selection frame (just like MS Paint)       ****/
  #p(t) {
    switch (!0) {
      case this.#C(t):
        this.#s = "floating";
        break;
      case this.FloatingBitmap != null:
        this.anchorFloatingBitmap(), this.beginSelectionAt(t), this.#s = "selection";
        break;
      case this.#k(t):
        this.liftSelection(), this.#s = "floating";
        break;
      default:
        this.beginSelectionAt(t), this.#s = "selection";
    }
  }
  #k(t) {
    const n = this.Selection;
    return n != null && t.x >= n.x && t.x < n.x + n.Width && t.y >= n.y && t.y < n.y + n.Height;
  }
  #C(t) {
    const n = this.FloatingBitmap;
    return n != null && t.x >= n.x && t.x < n.x + n.Canvas.width && t.y >= n.y && t.y < n.y + n.Canvas.height;
  }
  /**** #onPointerMove ****/
  #$(t) {
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
      this.#s = void 0, this.#a = void 0, this.#h = void 0, t.preventDefault();
    }
  }
  /**** #onWheel - zooms around the current pointer position ****/
  #S(t) {
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
    const o = this.activeLayer, r = this.#n;
    if (o == null || r == null)
      return;
    const a = Math.hypot(t.x - r.x, t.y - r.y), i = Math.max(this.BrushSize / 4, 1), s = Math.max(Math.ceil(a / i), 1);
    for (let c = 1; c <= s; c++)
      this.#m(o.Context, {
        x: r.x + (t.x - r.x) * c / s,
        y: r.y + (t.y - r.y) * c / s
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
    const r = this.#a ?? this.currentColor, a = this.currentTool === "eraser" || r === "transparent";
    t.save(), this.applySelectionClippingTo(t), t.globalAlpha = this.BrushOpacity, t.globalCompositeOperation = a ? "destination-out" : "source-over", t.fillStyle = a ? "#000000" : r, t.beginPath(), t.arc(n.x, n.y, this.BrushSize / 2 * (0.5 + o), 0, 2 * Math.PI), t.fill(), t.restore();
  }
  /**** reportValueChange ****/
  reportValueChange() {
    E(
      'BitmapEditor callback "onValueChange"',
      this.CallbackSet.onValueChange
    );
  }
  /**** shape tools - preview while dragging, committed upon release ****/
  #c = void 0;
  #f = void 0;
  beginShapeAt(t) {
    this.#c = t, this.#f = t, this.requestRendering();
  }
  continueShapeAt(t) {
    this.#c != null && (this.#f = t, this.requestRendering());
  }
  endShape() {
    const t = this.activeLayer;
    t == null || this.#c == null || (t.Context.save(), this.applySelectionClippingTo(t.Context), this.drawPendingShapeOn(t.Context), t.Context.restore(), this.#c = this.#f = void 0, this.requestRendering(), this.reportValueChange());
  }
  /**** drawPendingShapeOn - strokes with the per-stroke colour          ****/
  /**** (foreground or background, depending on the button), "filled"    ****/
  /**** variants fill with the respective other colour (like MS Paint) - ****/
  /**** "transparent" as a colour erases instead (previews on the view   ****/
  /**** canvas then punch a hole into the composite which reveals the    ****/
  /**** CSS background underneath, i.e. the expected outcome)            ****/
  drawPendingShapeOn(t) {
    const n = this.#c, o = this.#f;
    if (n == null || o == null)
      return;
    const r = this.#a ?? this.currentColor, a = this.#h ?? this.backgroundColor, i = this.currentTool === "filledRectangle" || this.currentTool === "filledEllipse";
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
    i && (t.globalCompositeOperation = a === "transparent" ? "destination-out" : "source-over", t.fillStyle = a === "transparent" ? "#000000" : a, t.fill()), t.globalCompositeOperation = r === "transparent" ? "destination-out" : "source-over", t.strokeStyle = r === "transparent" ? "#000000" : r, t.stroke(), t.restore();
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
    const o = this.activeLayer, r = this.CallbackSet.onTextRequest;
    if (!(o == null || r == null))
      try {
        const a = await r(this.lastText);
        if (a == null || a === "")
          return;
        if (this.lastText = a, n === "transparent") {
          this.#D(t, a);
          return;
        }
        this.floatBitmap(this.#_(a, n), t.x, t.y);
      } catch (a) {
        console.error("BitmapEditor: text entry failed", a);
      }
  }
  /**** #renderedText - renders a given text into a (floatable) bitmap ****/
  #_(t, n) {
    const o = t.split(`
`), r = this.FontSize * 1.2, i = new OffscreenCanvas(1, 1).getContext("2d");
    i.font = this.CSSFont;
    const s = Math.max(1, Math.ceil(Math.max(
      ...o.map((p) => i.measureText(p).width)
    )) + Math.ceil(this.FontSize * 0.2)), c = Math.max(1, Math.ceil(o.length * r)), d = new OffscreenCanvas(s, c), u = d.getContext("2d");
    return u.globalAlpha = this.BrushOpacity, u.fillStyle = n, u.font = this.CSSFont, u.textBaseline = "top", o.forEach((p, l) => {
      u.fillText(p, 0, l * r);
    }), d;
  }
  /**** #drawTextDirectlyAt - "erasing" text bypasses any floating and ****/
  /**** is drawn (i.e. erased) right away                              ****/
  #D(t, n) {
    const o = this.activeLayer;
    if (o == null)
      return;
    this.memoizeLayerForUndo();
    const r = o.Context;
    r.save(), this.applySelectionClippingTo(r), r.globalAlpha = this.BrushOpacity, r.globalCompositeOperation = "destination-out", r.fillStyle = "#000000", r.font = this.CSSFont, r.textBaseline = "top", n.split(`
`).forEach((a, i) => {
      r.fillText(a, t.x, t.y + i * this.FontSize * 1.2);
    }), r.restore(), this.requestRendering(), this.reportValueChange();
  }
  /**** fillAt - a simple 4-connected flood fill ****/
  // TODO: fill tolerance and anti-aliased edges are still missing <<<<
  fillAt(t, n = this.currentColor) {
    const o = this.activeLayer;
    if (o == null)
      return;
    const { Width: r, Height: a } = this, i = Math.floor(t.x), s = Math.floor(t.y);
    if (i < 0 || i >= r || s < 0 || s >= a)
      return;
    const c = o.Context.getImageData(0, 0, r, a), d = new Uint32Array(c.data.buffer), u = this.#L(n), p = d[s * r + i];
    if (p === u)
      return;
    const l = [s * r + i];
    for (; l.length > 0; ) {
      const f = l.pop();
      if (d[f] !== p)
        continue;
      d[f] = u;
      const h = f % r;
      h > 0 && l.push(f - 1), h < r - 1 && l.push(f + 1), f >= r && l.push(f - r), f < r * (a - 1) && l.push(f + r);
    }
    o.Context.putImageData(c, 0, 0), this.requestRendering(), this.reportValueChange();
  }
  /**** pickColorAt - picks from the composited document, optionally   ****/
  /**** for the background colour (i.e. after a right-click) - fully   ****/
  /**** transparent pixels are reported as "transparent", partially    ****/
  /**** transparent ones as "#RRGGBBAA" and opaque ones as "#RRGGBB"   ****/
  pickColorAt(t, n = !1) {
    const r = this.compositedCanvas().getContext("2d"), [a, i, s, c] = r.getImageData(
      Math.floor(t.x),
      Math.floor(t.y),
      1,
      1
    ).data, d = (p) => p.toString(16).padStart(2, "0");
    let u;
    switch (!0) {
      case c === 0:
        u = "transparent";
        break;
      case c === 255:
        u = `#${d(a)}${d(i)}${d(s)}`;
        break;
      default:
        u = `#${d(a)}${d(i)}${d(s)}${d(c)}`;
    }
    E(
      'BitmapEditor callback "onColorPicked"',
      this.CallbackSet.onColorPicked,
      u,
      n
    );
  }
  /**** #ABGRValueOf - converts a CSS colour into a little-endian pixel ****/
  #L(t) {
    const o = new OffscreenCanvas(1, 1).getContext("2d");
    o.fillStyle = t, o.fillRect(0, 0, 1, 1);
    const [r, a, i, s] = o.getImageData(0, 0, 1, 1).data;
    return (s << 24 | i << 16 | a << 8 | r) >>> 0;
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
    E(
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
    const n = Math.max(0, Math.round(t.x)), o = Math.max(0, Math.round(t.y)), r = Math.min(Math.round(t.Width), this.Width - n), a = Math.min(Math.round(t.Height), this.Height - o);
    return r > 0 && a > 0 ? { x: n, y: o, Width: r, Height: a } : void 0;
  }
  /**** #fillRegionOn - fills with the background colour (Paint-style), ****/
  /**** or clears the region if that colour is "transparent"            ****/
  #j(t, n) {
    this.backgroundColor === "transparent" ? t.clearRect(n.x, n.y, n.Width, n.Height) : (t.save(), t.fillStyle = this.backgroundColor, t.fillRect(n.x, n.y, n.Width, n.Height), t.restore());
  }
  /**** copySelection - copies from the active layer, not the composite ****/
  copySelection() {
    const t = this.activeLayer, n = this.#x();
    if (t == null || n == null)
      return;
    const { x: o, y: r, Width: a, Height: i } = n, s = new OffscreenCanvas(a, i);
    s.getContext("2d").drawImage(t.Canvas, o, r, a, i, 0, 0, a, i), this.#y = { Canvas: s, x: o, y: r };
  }
  /**** cutSelection / deleteSelection - both fill with the background ****/
  /**** colour, just like MS Paint                                     ****/
  cutSelection() {
    this.canCopy && (this.copySelection(), this.deleteSelection());
  }
  deleteSelection() {
    const t = this.activeLayer, n = this.#x();
    t == null || n == null || (this.memoizeLayerForUndo(), this.#j(t.Context, n), this.requestRendering(), this.reportValueChange());
  }
  /**** floatBitmap - makes a given bitmap "float" at a given position, ****/
  /**** from where it may be dragged around until it is finally         ****/
  /**** anchored (a click outside anchors it as well)                   ****/
  floatBitmap(t, n, o) {
    this.anchorFloatingBitmap(), this.#o = { Canvas: t, x: Math.round(n), y: Math.round(o) }, this.currentTool = "select", this.#v(), this.requestRendering();
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
    const { x: o, y: r, Width: a, Height: i } = n, s = new OffscreenCanvas(a, i);
    s.getContext("2d").drawImage(t.Canvas, o, r, a, i, 0, 0, a, i), this.memoizeLayerForUndo(), this.#j(t.Context, n), this.#o = { Canvas: s, x: o, y: r }, this.#v(), this.requestRendering(), this.reportValueChange();
  }
  /**** moveFloatingBitmapBy ****/
  moveFloatingBitmapBy(t, n) {
    const o = this.#o;
    o != null && (o.x += t, o.y += n, this.#v(), this.requestRendering());
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
  #v() {
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
    this.#M(this.#e, this.#l);
  }
  redo() {
    this.#M(this.#l, this.#e);
  }
  #M(t, n) {
    const o = t.pop();
    if (o == null)
      return;
    const { Layer: r, Snapshot: a } = o;
    n.push({
      Layer: r,
      Snapshot: r.Context.getImageData(0, 0, this.Width, this.Height)
    }), r.Context.putImageData(a, 0, 0), this.reportUndoStateChange(), this.requestRendering(), this.reportValueChange();
  }
  /**** reportUndoStateChange ****/
  reportUndoStateChange() {
    E(
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
        de(`ImportFailure: could not import the given image (${o})`);
      }
  }
  /**** #DataURLFor - converts a given blob into a data URL ****/
  async #A(t) {
    return await new Promise((n, o) => {
      const r = new FileReader();
      r.onload = () => n(r.result), r.onerror = () => o(new Error("could not read the given blob")), r.readAsDataURL(t);
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
        Bitmap: await this.#A(
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
    if (Ze(n))
      try {
        n = JSON.parse(n);
      } catch {
        de("InvalidArgument: the given document is no valid JSON");
      }
    (!Me(n) || n.Format !== "jcl-bitmap-document@1" || !hn(n.Width) || !hn(n.Height) || !$e(n.Layers, Me) || n.Layers.length === 0) && de(
      "InvalidArgument: the given document is no valid bitmap document"
    );
    const o = await Promise.all(n.Layers.map(
      async (r) => {
        if (r.Bitmap != null)
          try {
            return await createImageBitmap(
              await (await fetch(r.Bitmap)).blob()
            );
          } catch (a) {
            de(`ImportFailure: could not decode a layer bitmap (${a})`);
          }
      }
    ));
    this.Width = n.Width, this.Height = n.Height, this.LayerList = [], this.activeLayerIndex = -1, n.Layers.forEach((r, a) => {
      const i = this.newLayerNamed(
        Ee(r.Name) ? r.Name : "Layer " + (a + 1)
      );
      this.configureLayer(i, r);
      const s = o[a];
      s != null && (i.Context.drawImage(s, 0, 0), s.close());
    }), this.activeLayerIndex = hn(n.activeLayerIndex) ? Math.min(n.activeLayerIndex, this.LayerList.length - 1) : this.LayerList.length - 1, this.#e.length = 0, this.#l.length = 0, this.reportUndoStateChange(), this.requestRendering();
  }
  /**** setValue - accepts a layer document or a plain image data URL ****/
  // a plain bitmap becomes a single-layer document of the bitmap's own size
  async setValue(t) {
    if (nt("bitmap editor value", t), t.trim().startsWith("{"))
      return await this.setDocument(t);
    try {
      const n = await createImageBitmap(await (await fetch(t)).blob());
      this.Width = n.width, this.Height = n.height, this.LayerList = [], this.activeLayerIndex = -1, this.newLayerNamed("Background").Context.drawImage(n, 0, 0), n.close();
    } catch (n) {
      de(`ImportFailure: could not import the given image (${n})`);
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
    const { Type: n, Quality: o, BackgroundColor: r, Width: a, Height: i } = t ?? {};
    n != null && !he(n, ["png", "jpeg", "webp"]) && de(
      "InvalidArgument: unsupported image type " + Mt("" + n)
    );
    const s = n ?? "png", c = rn(o, 0, 1), d = (v) => {
      const C = ke(v);
      return C == null || C < 1 ? void 0 : C;
    }, u = d(a), p = d(i), l = u ?? (p == null ? this.Width : Math.max(1, Math.round(p * this.Width / this.Height))), f = p ?? (u == null ? this.Height : Math.max(1, Math.round(u * this.Height / this.Width)));
    let h = r;
    h == null && s === "jpeg" && (h = "#ffffff");
    const g = h != null && h !== "transparent" && h !== "none", b = new OffscreenCanvas(l, f), m = b.getContext("2d");
    return g && (m.fillStyle = Dt(h) ?? "#ffffff", m.fillRect(0, 0, l, f)), m.imageSmoothingEnabled = !0, m.imageSmoothingQuality = "high", m.drawImage(
      this.compositedCanvas(),
      0,
      0,
      this.Width,
      this.Height,
      0,
      0,
      l,
      f
    ), await b.convertToBlob({
      type: "image/" + s,
      quality: c
    });
  }
}
function Zb(e) {
  return U(() => {
    cd(), e = K(e);
    const t = D(e.Class) ?? "", n = ke(e.Width) ?? 800, o = ke(e.Height) ?? 600, r = ae(e.Value), a = D(e.Tool) ?? "brush", i = Dt(e.Color) ?? "#000000", s = Dt(e.BackgroundColor) ?? "#ffffff", c = rn(e.BrushSize, 1, 1e3) ?? 10, d = rn(e.BrushOpacity, 0, 1) ?? 1, u = D(e.FontFamily) ?? "sans-serif", p = rn(e.FontSize, 4, 400) ?? 24, l = he(e.FontWeight, ["normal", "bold"]) ? e.FontWeight : "normal", f = he(e.FontStyle, ["normal", "italic"]) ? e.FontStyle : "normal", h = J(e.disabled) ?? !1, g = T(e.onValueChange), b = T(e.onSelectionChange), m = T(e.onUndoStateChange), v = T(e.onColorPicked), C = T(e.onViewportChange), S = T(e.onTextRequest), j = T(e.onMount), x = T(e.onUnmount), w = q(null), R = q(void 0), L = q({});
    return L.current = {
      onValueChange: g,
      onSelectionChange: b,
      onUndoStateChange: m,
      onColorPicked: v,
      onViewportChange: C,
      onTextRequest: S,
      onUnmount: x
    }, Ce(() => {
      const $ = w.current, I = document.createElement("canvas");
      $.appendChild(I);
      const M = new Jb();
      M.CallbackSet = {
        onValueChange: (...N) => L.current.onValueChange?.(...N),
        onSelectionChange: (...N) => L.current.onSelectionChange?.(...N),
        onUndoStateChange: (...N) => L.current.onUndoStateChange?.(...N),
        onColorPicked: (...N) => L.current.onColorPicked?.(...N),
        onViewportChange: (...N) => L.current.onViewportChange?.(...N),
        onTextRequest: (...N) => (
          // returns the entered
          L.current.onTextRequest?.(...N)
        )
        // text!
      }, M.initialiseDocument(n, o), M.attachTo(I), r != null && M.setValue(r).catch((N) => console.warn(
        'BitmapEditor: could not apply the given "Value"',
        N
      )), R.current = M;
      const _ = new ResizeObserver(() => M.resizeViewCanvas());
      return _.observe($), E('BitmapEditor callback "onMount"', j, {
        Editor: M,
        // grants access to the full engine
        undo: () => M.undo(),
        redo: () => M.redo(),
        newLayerNamed: (N) => M.newLayerNamed(N),
        importImage: (N) => M.importImage(N),
        exportedBlob: (N) => M.exportedBlob(N),
        getDocument: () => M.getDocument(),
        setDocument: (N) => M.setDocument(N),
        setValue: (N) => M.setValue(N),
        Snapshot: (N) => M.Snapshot(N),
        clearSelection: () => M.clearSelection(),
        cutSelection: () => M.cutSelection(),
        copySelection: () => M.copySelection(),
        pasteClipboard: () => M.pasteClipboard(),
        deleteSelection: () => M.deleteSelection(),
        anchorFloatingBitmap: () => M.anchorFloatingBitmap(),
        dropFloatingBitmap: () => M.dropFloatingBitmap(),
        zoomTo: (N) => M.zoomTo(N)
      }), () => {
        E(
          'BitmapEditor callback "onUnmount"',
          L.current.onUnmount
        ), _.disconnect(), R.current = void 0, M.destroy(), I.remove();
      };
    }, []), Ce(() => {
      const $ = R.current;
      $ != null && (Yb.includes(a) && ($.currentTool = a), $.currentColor = i, $.backgroundColor = s, $.BrushSize = c, $.BrushOpacity = d, $.FontFamily = u, $.FontSize = p, $.FontWeight = l, $.FontStyle = f);
    }, [
      a,
      i,
      s,
      c,
      d,
      u,
      p,
      l,
      f
    ]), y`<div
        class="jcl-component bitmapeditor ${h ? "disabled" : ""} ${t}"
        ...${e.RestProps} ref=${w}
      />`;
  });
}
const cd = /* @__PURE__ */ Z("jcl-component.bitmapeditor", `
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
  `), Qb = [
  "select",
  "rect",
  "ellipse",
  "polygon",
  "text",
  "image"
];
class $t {
  static #w = /* @__PURE__ */ new Map();
  static registerEffect(t) {
    $t.#w.set(t.Type, t);
  }
  static effectPluginFor(t) {
    return Pb(), $t.#w.get(t);
  }
  /**** object and scene model ****/
  Width = 800;
  Height = 600;
  ObjectList = [];
  #d = 0;
  Callbacks = {};
  /**** initialiseScene ****/
  initialiseScene(t, n) {
    qn("scene width", t), qn("scene height", n), this.Width = t, this.Height = n, this.ObjectList = [], this.SelectedIds = [], this.Snapshots = ["[]"], this.SnapshotIndex = 0, this.requestRendering();
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
    const r = o.Type === "image";
    Object.assign(o, n), o.Id = t, o.Type === "image" && (n.ImageData != null || !r) && (this.#t.delete(t), this.loadImageForObject(o)), this.announceChange(), this.requestRendering();
  }
  /**** canvas, overlay and rendering ****/
  Canvas;
  Context;
  #r;
  #u;
  Overlay;
  #t = /* @__PURE__ */ new Map();
  #n = !1;
  /**** attachTo ****/
  attachTo(t, n) {
    dd(), this.Canvas = t, this.Context = t.getContext("2d"), this.Overlay = n, this.#r = new OffscreenCanvas(1, 1), this.#u = this.#r.getContext("2d"), t.addEventListener("pointerdown", this.#p), n.addEventListener("pointerdown", this.#p), t.addEventListener("pointermove", this.#k), t.addEventListener("pointerup", this.#C), t.addEventListener("dblclick", this.#$), window.addEventListener("keydown", this.#g), this.resizeViewCanvas();
  }
  /**** resizeViewCanvas ****/
  resizeViewCanvas() {
    const t = this.Canvas.parentElement;
    this.Canvas.width = t.clientWidth, this.Canvas.height = t.clientHeight, this.#r.width = this.Canvas.width, this.#r.height = this.Canvas.height, this.requestRendering();
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
    const { ox: r, oy: a, scale: i } = this.Viewport;
    t.translate(r, a), t.scale(i, i), t.fillStyle = "#ffffff", t.fillRect(0, 0, this.Width, this.Height), this.showsGrid && this.#s(t);
    for (const s of this.ObjectList)
      s.Opacity > 0 && this.#a(t, s);
    t.restore(), this.refreshOverlay();
  }
  /**** #renderObject ****/
  #a(t, n) {
    const o = n.GroupMembers;
    if (o != null) {
      for (const i of o)
        i.Opacity > 0 && this.#a(t, i);
      return;
    }
    t.save(), t.globalAlpha = n.Opacity, t.globalCompositeOperation = n.BlendMode;
    const r = n.X + n.Width / 2, a = n.Y + n.Height / 2;
    t.translate(r, a), t.rotate(n.Rotation * Math.PI / 180), t.translate(-r, -a);
    for (const i of n.Effects) {
      if (!i.enabled)
        continue;
      const s = $t.effectPluginFor(i.Type);
      s?.Phase === "before" && s.render(t, n, i, this.#r);
    }
    this.#h(t, n);
    for (const i of n.Effects) {
      if (!i.enabled)
        continue;
      const s = $t.effectPluginFor(i.Type);
      s != null && s.Phase !== "before" && s.render(t, n, i, this.#r);
    }
    t.restore();
  }
  /**** #renderObjectBase ****/
  #h(t, n) {
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
    tn(t, n), n.FillColor !== "none" && (t.fillStyle = n.FillColor, t.fill()), n.StrokeWidth > 0 && (t.strokeStyle = n.StrokeColor, t.lineWidth = n.StrokeWidth, t.stroke());
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
    const { ox: o, oy: r, scale: a } = this.Viewport, i = (u, p) => ({ x: o + u * a, y: r + p * a }), s = (u) => o + u * a, c = (u) => r + u * a;
    if (this.DragState?.mode === "create") {
      const u = this.DragState, p = s(Math.min(u.startX, u.currentX)), l = c(Math.min(u.startY, u.currentY)), f = s(Math.max(u.startX, u.currentX)), h = c(Math.max(u.startY, u.currentY)), g = f - p, b = h - l;
      switch (u.tool) {
        case "rect": {
          const m = document.createElementNS(n, "rect");
          m.setAttribute("x", String(p)), m.setAttribute("y", String(l)), m.setAttribute("width", String(g)), m.setAttribute("height", String(b)), m.setAttribute("fill", "rgba(255,255,255,0.25)"), m.setAttribute("stroke", "#6366f1"), m.setAttribute("stroke-dasharray", "4 3"), t.appendChild(m);
          break;
        }
        case "ellipse": {
          const m = document.createElementNS(n, "ellipse");
          m.setAttribute("cx", String(p + g / 2)), m.setAttribute("cy", String(l + b / 2)), m.setAttribute("rx", String(g / 2)), m.setAttribute("ry", String(b / 2)), m.setAttribute("fill", "rgba(255,255,255,0.25)"), m.setAttribute("stroke", "#6366f1"), m.setAttribute("stroke-dasharray", "4 3"), t.appendChild(m);
          break;
        }
        case "polygon": {
          const m = u.polygonPoints;
          if (m.length > 0) {
            const v = m.map((x) => `${s(x.X)},${c(x.Y)}`).join(" "), C = document.createElementNS(n, "polyline");
            C.setAttribute("points", v), C.setAttribute("fill", "none"), C.setAttribute("stroke", "#6366f1"), C.setAttribute("stroke-dasharray", "4 3"), t.appendChild(C);
            const S = m[m.length - 1], j = document.createElementNS(n, "line");
            j.setAttribute("x1", String(s(S.X))), j.setAttribute("y1", String(c(S.Y))), j.setAttribute("x2", String(s(u.currentX))), j.setAttribute("y2", String(c(u.currentY))), j.setAttribute("stroke", "#6366f1"), j.setAttribute("stroke-dasharray", "4 3"), j.setAttribute("fill", "none"), t.appendChild(j);
          }
          break;
        }
      }
    }
    if (this.DragState?.mode === "rubberband" && this.DragState.endX != null) {
      const u = this.DragState, p = s(Math.min(u.startX, u.endX)), l = c(Math.min(u.startY, u.endY)), f = Math.abs(s(u.endX) - s(u.startX)), h = Math.abs(c(u.endY) - c(u.startY)), g = document.createElementNS(n, "rect");
      g.setAttribute("class", "jcl-rde-rubberband"), g.setAttribute("x", String(p)), g.setAttribute("y", String(l)), g.setAttribute("width", String(f)), g.setAttribute("height", String(h)), t.appendChild(g);
    }
    if (this.SelectedIds.length === 0)
      return;
    const d = (u, p, l, f, h) => {
      const g = h * Math.PI / 180, b = u - l, m = p - f;
      return {
        x: l + b * Math.cos(g) - m * Math.sin(g),
        y: f + b * Math.sin(g) + m * Math.cos(g)
      };
    };
    for (const u of this.SelectedIds) {
      const p = this.objectWithId(u);
      if (p == null)
        continue;
      const l = i(p.X, p.Y), f = p.Width * a, h = p.Height * a, g = l.x + f / 2, b = l.y + h / 2, m = p.Rotation, v = document.createElementNS(n, "rect");
      v.setAttribute("class", "jcl-rde-frame"), v.setAttribute("x", String(l.x)), v.setAttribute("y", String(l.y)), v.setAttribute("width", String(f)), v.setAttribute("height", String(h)), v.setAttribute("transform", `rotate(${m},${g},${b})`), t.appendChild(v);
      const C = [
        ["nw", l.x, l.y],
        ["n", g, l.y],
        ["ne", l.x + f, l.y],
        ["e", l.x + f, b],
        ["se", l.x + f, l.y + h],
        ["s", g, l.y + h],
        ["sw", l.x, l.y + h],
        ["w", l.x, b]
      ];
      for (const [R, L, $] of C) {
        const I = d(L, $, g, b, m), M = document.createElementNS(n, "rect");
        M.setAttribute("class", "jcl-rde-handle"), M.setAttribute("data-handle", R), M.setAttribute("data-id", u), M.setAttribute("x", String(I.x - 4)), M.setAttribute("y", String(I.y - 4)), M.setAttribute("width", "8"), M.setAttribute("height", "8"), M.setAttribute("transform", `rotate(${m},${I.x},${I.y})`), t.appendChild(M);
      }
      const S = d(g, l.y, g, b, m), j = d(g, l.y - 24, g, b, m), x = document.createElementNS(n, "line");
      x.setAttribute("x1", String(S.x)), x.setAttribute("y1", String(S.y)), x.setAttribute("x2", String(j.x)), x.setAttribute("y2", String(j.y)), x.setAttribute("stroke", "#6366f1"), x.setAttribute("stroke-dasharray", "3 2"), t.appendChild(x);
      const w = document.createElementNS(n, "circle");
      w.setAttribute("class", "jcl-rde-handle"), w.setAttribute("data-handle", "rotate"), w.setAttribute("data-id", u), w.setAttribute("cx", String(j.x)), w.setAttribute("cy", String(j.y)), w.setAttribute("r", "5"), t.appendChild(w);
    }
  }
  /**** viewport ****/
  Viewport = { ox: 0, oy: 0, scale: 1 };
  GridSize = 10;
  snapToGrid = !1;
  showsGrid = !1;
  /**** canvasToScene - converts a canvas-space point to scene space ****/
  canvasToScene(t, n) {
    const { ox: o, oy: r, scale: a } = this.Viewport;
    return { x: (t - o) / a, y: (n - r) / a };
  }
  /**** sceneToCanvas ****/
  sceneToCanvas(t, n) {
    const { ox: o, oy: r, scale: a } = this.Viewport;
    return { x: o + t * a, y: r + n * a };
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
    const { width: n, height: o } = this.Canvas, r = n / 2, a = o / 2, { ox: i, oy: s, scale: c } = this.Viewport, d = (r - i) / c, u = (a - s) / c;
    this.Viewport = {
      scale: Math.max(0.05, Math.min(t, 32)),
      ox: r - d * t,
      oy: a - u * t
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
    this.currentTool === "select" ? this.#S(n, t) : this.#D(n, t), this.DragState != null && this.Canvas.setPointerCapture(t.pointerId);
  };
  #k = (t) => {
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
        this.#j(n, t);
        break;
      case "create":
        this.#L(n);
        break;
      case "pan":
        this.#c(t);
        break;
      case "rubberband":
        this.#f(n);
        break;
    }
  };
  #C = (t) => {
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
        this.#_(n);
        break;
    }
    this.DragState = void 0, this.refreshOverlay();
  };
  #$ = (t) => {
    if (this.readonly)
      return;
    const n = this.canvasToScene(this.#i(t).x, this.#i(t).y), o = this.#m(n);
    o != null && (o.Type === "text" ? this.#v(o) : this.DragState?.mode === "create" && this.DragState.tool === "polygon" && this.finishPolygon());
  };
  #g = (t) => {
    if (this.readonly)
      return;
    const n = t.shiftKey ? 10 : 1;
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t.key)) {
      t.preventDefault();
      const o = t.key === "ArrowLeft" ? -n : t.key === "ArrowRight" ? n : 0, r = t.key === "ArrowUp" ? -n : t.key === "ArrowDown" ? n : 0;
      for (const a of this.SelectedIds) {
        const i = this.objectWithId(a);
        i && (i.X += o, i.Y += r);
      }
      this.announceChange(), this.requestRendering();
      return;
    }
    (t.key === "Delete" || t.key === "Backspace") && this.SelectedIds.length > 0 && (t.preventDefault(), this.deleteSelection()), (t.ctrlKey || t.metaKey) && (t.key === "z" && (t.preventDefault(), t.shiftKey ? this.redo() : this.undo()), t.key === "c" && (t.preventDefault(), this.copySelection()), t.key === "x" && (t.preventDefault(), this.cutSelection()), t.key === "v" && (t.preventDefault(), this.pasteClipboard()), t.key === "d" && (t.preventDefault(), this.duplicateSelection()), t.key === "a" && (t.preventDefault(), this.selectAll()));
  };
  /**** #handleSelectPointerDown ****/
  #S(t, n) {
    const o = n.target;
    if (o.dataset?.handle && o.dataset?.id) {
      const a = this.objectWithId(o.dataset.id);
      if (a) {
        if (this.SelectedIds.includes(a.Id) || this.selectIds(n.shiftKey ? [...this.SelectedIds, a.Id] : [a.Id]), o.dataset.handle === "rotate") {
          const i = a.X + a.Width / 2, s = a.Y + a.Height / 2;
          this.DragState = {
            mode: "rotate",
            centerX: i,
            centerY: s,
            startAngle: Math.atan2(t.y - s, t.x - i),
            origins: this.SelectedIds.map((c) => {
              const d = this.objectWithId(c);
              return { Id: c, Rotation: d.Rotation };
            })
          };
        } else
          this.DragState = {
            mode: "resize",
            handle: o.dataset.handle,
            startX: t.x,
            startY: t.y,
            refX: a.X,
            refY: a.Y,
            refW: a.Width,
            refH: a.Height,
            origins: this.SelectedIds.map((i) => {
              const s = this.objectWithId(i);
              return { Id: i, X: s.X, Y: s.Y, Width: s.Width, Height: s.Height };
            })
          };
        return;
      }
    }
    const r = this.#m(t);
    if (r != null) {
      if (n.shiftKey && this.SelectedIds.includes(r.Id)) {
        this.selectIds(this.SelectedIds.filter((a) => a !== r.Id));
        return;
      }
      this.SelectedIds.includes(r.Id) || this.selectIds(n.shiftKey ? [...this.SelectedIds, r.Id] : [r.Id]), this.DragState = {
        mode: "move",
        startX: t.x,
        startY: t.y,
        origins: this.SelectedIds.map((a) => {
          const i = this.objectWithId(a);
          return { Id: a, X: i.X, Y: i.Y };
        })
      };
    } else
      n.shiftKey || this.clearSelection(), this.DragState = { mode: "rubberband", startX: t.x, startY: t.y };
  }
  /**** #hitTest ****/
  #m(t) {
    for (let n = this.ObjectList.length - 1; n >= 0; n--) {
      const o = this.ObjectList[n], r = t.x - (o.X + o.Width / 2), a = t.y - (o.Y + o.Height / 2), i = -o.Rotation * Math.PI / 180, s = r * Math.cos(i) - a * Math.sin(i) + o.Width / 2, c = r * Math.sin(i) + a * Math.cos(i) + o.Height / 2;
      if (s >= 0 && s <= o.Width && c >= 0 && c <= o.Height)
        return o;
    }
  }
  /**** pan drag ****/
  #c(t) {
    this.pan(t.movementX, t.movementY);
  }
  /**** rubberband ****/
  #f(t) {
    this.DragState.endX = t.x, this.DragState.endY = t.y, this.refreshOverlay();
  }
  #_(t) {
    const { startX: n, startY: o } = this.DragState, r = Math.min(n, t.x), a = Math.min(o, t.y), i = Math.max(n, t.x), s = Math.max(o, t.y), c = this.ObjectList.filter((d) => d.X + d.Width > r && d.X < i && d.Y + d.Height > a && d.Y < s).map((d) => d.Id);
    this.selectIds(c);
  }
  /**** object creation tools ****/
  setTool(t) {
    this.currentTool = t, this.DragState = void 0, E(
      'RealDrawEditor callback "onToolChange"',
      this.Callbacks.onToolChange,
      t
    );
  }
  /**** #handleCreatePointerDown ****/
  #D(t, n) {
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
  #L(t) {
    const n = this.DragState, o = this.snapped(t.x, t.y);
    n.currentX = o.x, n.currentY = o.y, this.refreshOverlay();
  }
  /**** #handleCreatePointerUp ****/
  #b(t) {
    const n = this.DragState, o = this.snapped(t.x, t.y), r = Math.min(n.startX, o.x), a = Math.min(n.startY, o.y), i = Math.abs(o.x - n.startX), s = Math.abs(o.y - n.startY);
    if (n.tool === "polygon") {
      n.polygonPoints.push({ X: o.x, Y: o.y });
      return;
    }
    const c = 4;
    if (i < c && s < c && n.tool !== "text")
      return;
    let d;
    switch (n.tool) {
      case "rect":
        d = this.addObject({ Type: "rect", X: r, Y: a, Width: i || c, Height: s || c });
        break;
      case "ellipse":
        d = this.addObject({ Type: "ellipse", X: r, Y: a, Width: i || c, Height: s || c });
        break;
      case "text":
        this.#y(o.x, o.y);
        return;
    }
    d && this.selectIds([d.Id]);
  }
  /**** #requestTextAndCreate ****/
  async #y(t, n) {
    const r = await (this.Callbacks.onTextRequest ?? ((i) => window.prompt("Text:", i)))("");
    if (!r)
      return;
    const a = this.addObject({ Type: "text", X: t, Y: n, Text: r });
    this.selectIds([a.Id]), this.announceChange();
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
    const n = t.map((d) => d.X), o = t.map((d) => d.Y), r = Math.min(...n), a = Math.min(...o), i = Math.max(...n) - r, s = Math.max(...o) - a, c = this.addObject({ Type: "polygon", X: r, Y: a, Width: i || 1, Height: s || 1, Points: t });
    this.DragState = void 0, this.selectIds([c.Id]);
  }
  /**** move ****/
  #o(t) {
    const n = this.DragState, o = t.x - n.startX, r = t.y - n.startY;
    for (const { Id: a, X: i, Y: s } of n.origins) {
      const c = this.objectWithId(a);
      if (c == null)
        continue;
      const d = this.snapped(i + o, s + r);
      c.X = d.x, c.Y = d.y;
    }
    this.requestRendering();
  }
  /**** resize ****/
  #x(t) {
    const n = this.DragState, o = t.x - n.startX, r = t.y - n.startY;
    let { refX: a, refY: i, refW: s, refH: c } = n;
    switch (n.handle) {
      case "nw":
        a += o, i += r, s -= o, c -= r;
        break;
      case "n":
        i += r, c -= r;
        break;
      case "ne":
        i += r, s += o, c -= r;
        break;
      case "e":
        s += o;
        break;
      case "se":
        s += o, c += r;
        break;
      case "s":
        c += r;
        break;
      case "sw":
        a += o, s -= o, c += r;
        break;
      case "w":
        a += o, s -= o;
        break;
    }
    if ((n.handle === "nw" || n.handle === "ne" || n.handle === "se" || n.handle === "sw") && n.refW > 0 && n.refH > 0) {
      const g = n.refW / n.refH;
      Math.abs(s - n.refW) >= Math.abs(c - n.refH) * g ? (c = s / g, n.handle.includes("n") && (i = n.refY + n.refH - c)) : (s = c * g, n.handle.includes("w") && (a = n.refX + n.refW - s));
    }
    const u = 4;
    s < u && (s = u, n.handle.includes("w") && (a = n.refX + n.refW - u)), c < u && (c = u, n.handle.includes("n") && (i = n.refY + n.refH - u));
    const p = a - n.refX, l = i - n.refY, f = s - n.refW, h = c - n.refH;
    for (const g of n.origins) {
      const b = this.objectWithId(g.Id);
      if (b == null)
        continue;
      const m = this.snapped(g.X + p, g.Y + l);
      b.X = m.x, b.Y = m.y, b.Width = Math.max(u, g.Width + f), b.Height = Math.max(u, g.Height + h);
    }
    this.requestRendering();
  }
  /**** rotate ****/
  #j(t, n) {
    const o = this.DragState;
    let a = (Math.atan2(t.y - o.centerY, t.x - o.centerX) - o.startAngle) * 180 / Math.PI;
    (n.shiftKey || this.snapToGrid) && (a = Math.round(a / 15) * 15);
    for (const { Id: i, Rotation: s } of o.origins) {
      const c = this.objectWithId(i);
      c && (c.Rotation = ((s + a) % 360 + 360) % 360);
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
    this.SelectedIds = t.filter((n) => this.objectWithId(n) != null), E(
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
    const r = this.addObject({ Type: "text", X: n, Y: o, Text: t });
    return this.selectIds([r.Id]), r;
  }
  /**** #requestTextEdit - opens dialog for an existing text object ****/
  async #v(t) {
    const o = await (this.Callbacks.onTextRequest ?? ((r) => window.prompt("Text:", r)))(t.Text ?? "");
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
    const t = this.SelectedIds.map((l) => this.objectWithId(l)).filter((l) => l != null), n = t.map((l) => l.X), o = t.map((l) => l.Y), r = t.map((l) => l.X + l.Width), a = t.map((l) => l.Y + l.Height), i = Math.min(...n), s = Math.min(...o), c = Math.max(...r) - i, d = Math.max(...a) - s, u = t.map((l) => ({
      ...l,
      Effects: l.Effects.map((f) => ({ ...f })),
      ...l.Points ? { Points: l.Points.map((f) => ({ ...f })) } : {}
    })), p = this.addObject({
      Type: "rect",
      X: i,
      Y: s,
      Width: c,
      Height: d,
      FillColor: "none",
      StrokeColor: "none",
      StrokeWidth: 0
    });
    p.GroupMembers = u;
    for (const l of this.SelectedIds)
      this.removeObject(l);
    this.selectIds([p.Id]), this.announceChange();
  }
  ungroupSelection() {
    const t = [];
    for (const n of this.SelectedIds) {
      const o = this.objectWithId(n);
      if (!o?.GroupMembers) {
        t.push(n);
        continue;
      }
      for (const r of o.GroupMembers) {
        const a = this.addObject(r);
        t.push(a.Id);
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
    E(
      'RealDrawEditor callback "onUndoStateChange"',
      this.Callbacks.onUndoStateChange,
      this.canUndo(),
      this.canRedo()
    );
  }
  /**** announceChange ****/
  announceChange() {
    this.captureSnapshot(), E(
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
      const r = parseInt(o.Id.replace(/^obj-/, ""), 10);
      return isNaN(r) ? n : Math.max(n, r);
    }, 0), this.SelectedIds = this.SelectedIds.filter((n) => this.objectWithId(n) != null), this.#t.clear();
    for (const n of this.ObjectList)
      n.Type === "image" && this.loadImageForObject(n);
    this.requestRendering();
  }
  /**** setValue - replaces the scene without firing "onValueChange" ****/
  setValue(t) {
    nt("scene value", t);
    let n = [];
    if (t.trim() !== "") {
      try {
        n = JSON.parse(t);
      } catch {
        de("InvalidArgument: the given value is not valid JSON");
      }
      Array.isArray(n) || de("InvalidArgument: the given value is not a JSON array");
    }
    this.SelectedIds = [], this.#I(n), this.Snapshots = [t.trim() === "" ? "[]" : t], this.SnapshotIndex = 0, this.announceUndoState();
  }
  /**** importImage - adds an image object from a data URL or Blob ****/
  async importImage(t) {
    let n;
    t instanceof Blob ? n = await new Promise((r) => {
      const a = new FileReader();
      a.onload = () => r(a.result), a.readAsDataURL(t);
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
    const r = this.Viewport;
    this.Viewport = { ox: 0, oy: 0, scale: 1 };
    for (const a of this.ObjectList)
      a.Opacity > 0 && this.#a(o, a);
    return this.Viewport = r, n.convertToBlob({ type: t });
  }
  destroy() {
    this.Canvas?.removeEventListener("pointerdown", this.#p), this.Overlay?.removeEventListener("pointerdown", this.#p), this.Canvas?.removeEventListener("pointermove", this.#k), this.Canvas?.removeEventListener("pointerup", this.#C), this.Canvas?.removeEventListener("dblclick", this.#$), window.removeEventListener("keydown", this.#g);
  }
}
function tn(e, t) {
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
let zs = !1;
function Pb() {
  zs || (zs = !0, $t.registerEffect({
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
      const o = (n.Angle ?? 135) * Math.PI / 180, r = n.Distance ?? 5;
      e.save(), e.shadowColor = n.Color ?? "rgba(0,0,0,0.5)", e.shadowBlur = n.Blur ?? 5, e.shadowOffsetX = Math.cos(o) * r, e.shadowOffsetY = Math.sin(o) * r, tn(e, t), e.fillStyle = "#000", e.fill(), e.restore();
    }
  }), $t.registerEffect({
    Type: "OuterGlow",
    Label: "Outer Glow",
    Phase: "before",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "rgba(255,255,0,0.8)" },
      { Name: "Blur", Type: "number", Label: "Weichheit", Default: 10, Min: 0, Max: 100 },
      { Name: "Spread", Type: "number", Label: "Ausdehnung", Default: 0, Min: 0, Max: 50 }
    ],
    render(e, t, n) {
      e.save(), e.shadowColor = n.Color ?? "rgba(255,255,0,0.8)", e.shadowBlur = n.Blur ?? 10, e.shadowOffsetX = 0, e.shadowOffsetY = 0, tn(e, t), e.fillStyle = n.Color ?? "rgba(255,255,0,0.8)", e.fill(), e.restore();
    }
  }), $t.registerEffect({
    Type: "ColorOverlay",
    Label: "Color Overlay",
    Phase: "overlay",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "#ff0000" },
      { Name: "Opacity", Type: "number", Label: "Deckkraft", Default: 1, Min: 0, Max: 1 }
    ],
    render(e, t, n) {
      e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = n.Opacity ?? 1, tn(e, t), e.fillStyle = n.Color ?? "#ff0000", e.fill(), e.restore();
    }
  }), $t.registerEffect({
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
      const o = (n.GradientAngle ?? 0) * Math.PI / 180, r = t.X + t.Width / 2, a = t.Y + t.Height / 2, i = Math.sqrt(t.Width ** 2 + t.Height ** 2) / 2, s = e.createLinearGradient(
        r - Math.cos(o) * i,
        a - Math.sin(o) * i,
        r + Math.cos(o) * i,
        a + Math.sin(o) * i
      );
      s.addColorStop(0, n.StartColor ?? "#ff0000"), s.addColorStop(1, n.EndColor ?? "#0000ff"), e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = n.Opacity ?? 1, tn(e, t), e.fillStyle = s, e.fill(), e.restore();
    }
  }), $t.registerEffect({
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
      const o = n.Width ?? 2, r = n.Position ?? "outside";
      e.save(), r !== "center" && (e.globalCompositeOperation = r === "outside" ? "destination-over" : "source-atop"), tn(e, t), e.strokeStyle = n.Color ?? "#000000", e.lineWidth = r === "center" ? o : o * 2, e.stroke(), e.restore();
    }
  }), $t.registerEffect({
    Type: "InnerGlow",
    Label: "Inner Glow",
    Phase: "after",
    Parameters: [
      { Name: "Color", Type: "color", Label: "Farbe", Default: "rgba(255,255,255,0.8)" },
      { Name: "Blur", Type: "number", Label: "Weichheit", Default: 8, Min: 0, Max: 100 },
      { Name: "Spread", Type: "number", Label: "Ausdehnung", Default: 0, Min: 0, Max: 50 }
    ],
    render(e, t, n, o) {
      const r = o.getContext("2d");
      r.clearRect(0, 0, o.width, o.height), r.save(), r.shadowColor = n.Color ?? "rgba(255,255,255,0.8)", r.shadowBlur = n.Blur ?? 8, r.shadowOffsetX = 0, r.shadowOffsetY = 0, tn(r, t), r.fillStyle = n.Color ?? "rgba(255,255,255,0.8)", r.fill(), r.restore(), e.save(), e.globalCompositeOperation = "source-atop", e.drawImage(o, 0, 0), e.restore();
    }
  }), $t.registerEffect({
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
      const r = (n.Angle ?? 135) * Math.PI / 180, a = n.Distance ?? 5, i = o.getContext("2d");
      i.clearRect(0, 0, o.width, o.height), tn(i, t), i.fill(), i.save(), i.globalCompositeOperation = "source-out", i.shadowColor = n.Color ?? "rgba(0,0,0,0.5)", i.shadowBlur = n.Blur ?? 5, i.shadowOffsetX = Math.cos(r) * a, i.shadowOffsetY = Math.sin(r) * a, tn(i, t), i.fill(), i.restore(), e.save(), e.globalCompositeOperation = "source-atop", e.drawImage(o, 0, 0), e.restore();
    }
  }));
}
function ey(e) {
  return U(() => {
    dd(), e = K(e);
    const t = D(e.Class) ?? "";
    let n = ae(e.Value);
    const o = ke(e.Width) ?? 800, r = ke(e.Height) ?? 600, a = J(e.readonly) ?? !1, i = J(e.disabled) ?? !1, s = D(e.Tool) ?? "select", c = rn(e.GridSize, 0.01, 1e3) ?? 10, d = J(e.snapToGrid) ?? !1, u = J(e.showGrid) ?? !1, p = Array.isArray(e.extraEffects) ? e.extraEffects : [], l = T(e.onValueChange), f = T(e.onSelectionChange), h = T(e.onToolChange), g = T(e.onUndoStateChange), b = T(e.onTextRequest), m = T(e.onMount), v = T(e.onUnmount), C = q(null), S = q(void 0), j = q({});
    j.current = {
      onValueChange: l,
      onSelectionChange: f,
      onToolChange: h,
      onUndoStateChange: g,
      onTextRequest: b,
      onUnmount: v
    };
    const x = q(n ?? ""), w = q(n ?? "");
    return n != null && n !== x.current && (x.current = n, w.current = n), Ce(() => {
      const R = C.current, L = document.createElement("canvas");
      R.appendChild(L);
      const $ = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      $.setAttribute("class", "jcl-rde-overlay"), R.appendChild($), p.forEach((z) => $t.registerEffect(z));
      const I = new $t();
      if (I.Callbacks = {
        ...Bx(j, [
          // s. "auxiliary functions"
          "onSelectionChange",
          "onToolChange",
          "onUndoStateChange",
          "onTextRequest"
        ]),
        onValueChange: (z) => {
          w.current = z, j.current.onValueChange?.(z);
        }
      }, I.initialiseScene(o, r), I.attachTo(L, $), n != null)
        try {
          I.setValue(n);
        } catch {
        }
      S.current = I;
      const M = new ResizeObserver(() => I.resizeViewCanvas());
      return M.observe(R), E('RealDrawEditor callback "onMount"', m, {
        Editor: I,
        getValue: () => I.getValue(),
        setValue: (z) => I.setValue(z),
        Tool: () => I.currentTool,
        setTool: (z) => I.setTool(z),
        ObjectList: () => [...I.ObjectList],
        addObject: (z) => I.addObject(z),
        removeObject: (z) => I.removeObject(z),
        configureObject: (z, N) => I.configureObject(z, N),
        SelectedIds: () => I.SelectedIds,
        select: (z) => I.selectIds(z),
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
        setZoom: (z) => I.setZoom(z),
        zoomToFit: () => I.zoomToFit(),
        importImage: (z) => I.importImage(z),
        exportedBlob: (z) => I.exportedBlob(z),
        insertText: (z, N, Y) => I.insertText(z, N, Y)
      }), () => {
        E(
          'RealDrawEditor callback "onUnmount"',
          j.current.onUnmount
        ), M.disconnect(), S.current = void 0, I.destroy(), L.remove(), $.remove();
      };
    }, []), Ce(() => {
      const R = S.current;
      R != null && Qb.includes(s) && R.setTool(s);
    }, [s]), Ce(() => {
      const R = S.current;
      R != null && (R.readonly = a, a && (R.DragState = void 0));
    }, [a]), Ce(() => {
      const R = S.current;
      R != null && (R.GridSize = c, R.snapToGrid = d, R.showsGrid = u, R.requestRendering());
    }, [c, d, u]), Ce(() => {
      const R = S.current;
      if (!(R == null || n == null) && n !== w.current) {
        w.current = n;
        try {
          R.setValue(n);
        } catch (L) {
          console.warn("RealDrawEditor: invalid value given", L);
        }
      }
    }, [n]), y`<div
        class="jcl-component realdraweditor ${i ? "disabled" : ""} ${t}"
        ...${e.RestProps} ref=${C}
      />`;
  });
}
const dd = /* @__PURE__ */ Z("jcl-component.realdraweditor", `
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
  `), jr = 80, Ir = 50;
function ty(e) {
  return "" + e.Key;
}
function Ko(e) {
  let t = "";
  return e.FontFamily != null && (t += `font-family:${e.FontFamily}; `), e.FontSize != null && (t += `font-size:${e.FontSize}px; `), e.FontWeight != null && (t += `font-weight:${e.FontWeight}; `), e.LineHeight != null && (t += `line-height:${e.LineHeight}; `), e.ForegroundColor != null && (t += `color:${e.ForegroundColor}; `), e.BackgroundColor != null && (t += `background-color:${e.BackgroundColor}; `), t;
}
function ud(e) {
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
    const { selectionStart: o, selectionEnd: r, value: a } = t;
    t.value = a.slice(0, o) + "	" + a.slice(r), t.selectionStart = t.selectionEnd = o + 1, t.dispatchEvent(new InputEvent("input", { bubbles: !0 }));
  }
}
function ny(e, t, n) {
  return (o, r) => {
    const a = {
      Content: o.Content ?? "",
      onContentChange: n == null ? void 0 : ((i) => E(
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
        return y`<${vi}     ...${a}/>`;
      case "markdown":
        return y`<${fd} ...${a}/>`;
      default:
        return y`<${pd}     ...${a}/>`;
    }
  };
}
function oy(e) {
  return U(() => {
    ay(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Notes, (re) => $e(re, Me)) ?? Te("Notes"), o = T(e.KeyOfNote) ?? ty, r = ke(e.PaneWidth), a = ke(e.PaneHeight), i = D(e.DefaultFontFamily), s = qe(e.DefaultFontSize), c = V(e.DefaultFontWeight, (re) => ut(re) || Ee(re)), d = qe(e.DefaultLineHeight), u = D(e.DefaultForegroundColor), p = D(e.DefaultBackgroundColor);
    let l = V(e.selectedKeys, (re) => $e(re, Ze)) ?? [];
    const f = T(e.onSelectionChange), h = T(e.onNotesChange), g = T(e.onNoteContentChange), b = ke(e.SensorWidth) ?? 20, m = ke(e.maxPanningSpeed) ?? 400, v = f != null, C = h != null, S = {
      FontFamily: i,
      FontSize: s,
      FontWeight: c,
      LineHeight: d,
      ForegroundColor: u,
      BackgroundColor: p
    }, j = T(e.NoteRenderer) ?? ny(o, S, g), x = n.map((re) => String(
      Ke('NoteBoard callback "KeyOfNote"', o, re)
    )), w = Od(x, '"Notes"'), R = /* @__PURE__ */ new Set();
    v && (l = xo(l, w), l.forEach((re) => R.add(re)));
    function L(re, ee) {
      let ie;
      return ee ? ie = R.has(re) ? l.filter(
        (se) => se !== re
      ) : [...l, re] : ie = [re], E(
        'NoteBoard callback "onSelectionChange"',
        f,
        ie
      ), ie;
    }
    const $ = q(null), I = q(void 0), M = ft();
    Ce(() => () => {
      const re = I.current;
      re != null && (re.ChangeRAF != null && cancelAnimationFrame(re.ChangeRAF), re.PanningRAF != null && cancelAnimationFrame(re.PanningRAF), I.current = void 0);
    }, []);
    function _(re) {
      const { Mode: ee, dx: ie, dy: se } = I.current, { x: be, y: me, Width: De, Height: Re } = re;
      return ee === "move" ? {
        x: dt(be + ie, 0, Xe - De),
        y: dt(me + se, 0, rt - Re),
        Width: De,
        Height: Re
      } : {
        // in "DialogView"s resizing logic
        x: be,
        y: me,
        Width: dt(De + ie, jr, Xe - be),
        Height: dt(Re + se, Ir, rt - me)
      };
    }
    function z(re, ee) {
      const ie = I.current?.StartGeometryByKey[ee];
      return ie == null ? {
        x: re.Position.x,
        y: re.Position.y,
        Width: re.Size.Width,
        Height: re.Size.Height
      } : _(ie);
    }
    function N() {
      const re = I.current;
      if (re == null)
        return [];
      const ee = [];
      return n.forEach((ie, se) => {
        const be = re.StartGeometryByKey[x[se]];
        if (be != null) {
          const { x: me, y: De, Width: Re, Height: ze } = _(be);
          ee.push({ ...ie, Position: { x: me, y: De }, Size: { Width: Re, Height: ze } });
        }
      }), ee;
    }
    function Y() {
      const re = I.current;
      re == null || re.ChangeRAF != null || (re.ChangeRAF = requestAnimationFrame(() => {
        const ee = I.current;
        if (ee == null)
          return;
        ee.ChangeRAF = void 0;
        const ie = N();
        ie.length > 0 && E(
          'NoteBoard callback "onNotesChange"',
          h,
          ie
        );
      }));
    }
    function Q(re, ee, ie) {
      let se = [ee];
      if (v) {
        let me = l;
        if (!R.has(ee)) {
          const De = Sn(ie);
          me = L(ee, De);
        }
        me.includes(ee) && (se = me);
      }
      const be = {};
      n.forEach((me, De) => {
        se.includes(x[De]) && (be[x[De]] = {
          x: me.Position.x,
          y: me.Position.y,
          Width: me.Size.Width,
          Height: me.Size.Height
        });
      }), I.current = {
        Mode: re,
        StartGeometryByKey: be,
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, M();
    }
    function fe(re, ee, ie) {
      const se = I.current;
      se != null && (se.dx = re, se.dy = ee, ie != null && (se.lastClientX = ie.clientX, se.lastClientY = ie.clientY), se.Mode === "move" && se.PanningRAF == null && (se.PanningTimestamp = void 0, se.PanningRAF = requestAnimationFrame(
        (be) => pe.current?.(be)
      )), M(), Y());
    }
    function P(re, ee) {
      const ie = I.current;
      if (ie == null)
        return;
      ie.dx = re, ie.dy = ee, ie.ChangeRAF != null && cancelAnimationFrame(ie.ChangeRAF), ie.PanningRAF != null && cancelAnimationFrame(ie.PanningRAF);
      const se = N();
      I.current = void 0, se.length > 0 && E(
        // the final, non-throttled batch update
        'NoteBoard callback "onNotesChange"',
        h,
        se
      ), M();
    }
    function X() {
      const re = I.current;
      if (re == null)
        return;
      re.ChangeRAF != null && cancelAnimationFrame(re.ChangeRAF), re.PanningRAF != null && cancelAnimationFrame(re.PanningRAF);
      const ee = [];
      n.forEach((ie, se) => {
        const be = re.StartGeometryByKey[x[se]];
        if (be != null) {
          const { x: me, y: De, Width: Re, Height: ze } = be;
          ee.push({ ...ie, Position: { x: me, y: De }, Size: { Width: Re, Height: ze } });
        }
      }), I.current = void 0, ee.length > 0 && E(
        'NoteBoard callback "onNotesChange"',
        h,
        ee
      ), M();
    }
    function te(re) {
      const ee = I.current, ie = $.current;
      if (ee == null || ee.Mode !== "move" || ie == null)
        return;
      const { lastClientX: se, lastClientY: be } = ee;
      if (se == null || be == null) {
        ee.PanningRAF = void 0, ee.PanningTimestamp = void 0;
        return;
      }
      const { vx: me, vy: De } = zd(
        ie.getBoundingClientRect(),
        se,
        be,
        b,
        m
      );
      if (me === 0 && De === 0) {
        ee.PanningRAF = void 0, ee.PanningTimestamp = void 0;
        return;
      }
      const Re = Vd(ee, re), ze = ie.scrollLeft, bt = ie.scrollTop;
      ie.scrollLeft = ze + me * Re, ie.scrollTop = bt + De * Re, ee.dx += ie.scrollLeft - ze, ee.dy += ie.scrollTop - bt, M(), ve.current?.(), ee.PanningRAF = requestAnimationFrame(
        (we) => pe.current?.(we)
      );
    }
    const pe = q();
    pe.current = te;
    const ve = q();
    ve.current = Y;
    const Ne = mc($), Xe = r ?? Ne.Width, rt = a ?? Ne.Height;
    function mt(re) {
      return Ko({
        FontFamily: re.FontFamily ?? i,
        FontSize: re.FontSize ?? s,
        FontWeight: re.FontWeight ?? c,
        LineHeight: re.LineHeight ?? d,
        ForegroundColor: re.ForegroundColor ?? u,
        BackgroundColor: re.BackgroundColor ?? p
      });
    }
    return y`<div
        class="jcl-component noteboard ${t}"
        ref=${$} ...${e.RestProps}
      >
        <div class="notepane"
          style="width:${Xe}px; height:${rt}px"
        >
          ${n.map((re, ee) => {
      const ie = x[ee], se = R.has(ie);
      return y`<${ry} key=${ie}
              NoteKey=${ie} Geometry=${z(re, ie)}
              isSelected=${se} isSelectable=${v}
              isDraggable=${C} NoteStyle=${mt(re)}
              ScrollerOf=${() => $.current}
              renderedContent=${Ke(
        'NoteBoard callback "NoteRenderer"',
        j,
        re,
        se
      )}
              onNoteClick=${(be, me, De) => L(
        ie,
        Sn(De)
      )}
              onMoveStart=${(be, me, De, Re, ze) => Q("move", ie, ze)}
              onMoveContinuation=${(be, me, De, Re, ze) => fe(be, me, ze)}
              onMoveFinish=${(be, me) => P(be, me)}
              onMoveCancellation=${() => X()}
              onResizeStart=${(be, me, De, Re, ze) => Q("resize", ie, ze)}
              onResizeContinuation=${(be, me, De, Re, ze) => fe(be, me, ze)}
              onResizeFinish=${(be, me) => P(be, me)}
              onResizeCancellation=${() => X()}
            />`;
    })}
        </>
      </>`;
  });
}
function ry(e) {
  const {
    NoteKey: t,
    Geometry: n,
    isSelected: o,
    isSelectable: r,
    isDraggable: a,
    NoteStyle: i,
    ScrollerOf: s,
    renderedContent: c,
    onNoteClick: d,
    onMoveStart: u,
    onMoveContinuation: p,
    onMoveFinish: l,
    onMoveCancellation: f,
    onResizeStart: h,
    onResizeContinuation: g,
    onResizeFinish: b,
    onResizeCancellation: m
  } = e, v = q(null), C = io({
    ViewRef: v,
    Container: s,
    onlyFrom: ".titlebar",
    onClick: r ? d : void 0,
    onDragStart: a ? u : void 0,
    onDragContinuation: a ? p : void 0,
    onDragFinish: a ? l : void 0,
    onDragCancellation: a ? f : void 0
  }), S = Fn({
    ViewRef: v,
    Container: s,
    onlyFrom: ".resize-handle",
    onDragStart: a ? h : void 0,
    onDragContinuation: a ? g : void 0,
    onDragFinish: a ? b : void 0,
    onDragCancellation: a ? m : void 0
  });
  return y`<div
      class="stickynote${o ? " selected" : ""}"
      style="left:${n.x}px; top:${n.y}px; width:${n.Width}px; height:${n.Height}px; ${i}"
      ref=${v} data-note-key=${t}
      onPointerDown=${(j) => {
    S?.(j), C?.(j);
  }}
    >
      <div class="titlebar"/>
      <div class="content-area">${c}</>
      ${a && y`<div class="resize-handle" aria-hidden="true"/>`}
    </>`;
}
const ay = /* @__PURE__ */ Z("jcl-component.noteboard", `
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
function pd(e) {
  return U(() => {
    e = K(e);
    const t = V(e.Content, Vo) ?? "", n = T(e.onContentChange), o = ke(e.TabWidth) ?? 10, r = !t.includes("	");
    return y`<${mi}
        Class="sticky-note-content sticky-text-note"
        Style=${Ko(e) + (r ? "" : `tab-size:${o}px;`)}
        Value=${t} wrap=${r}
        readonly=${n == null}
        onKeyDown=${ud}
        onValueInput=${(a) => E(
      'stickyTextNote callback "onContentChange"',
      n,
      a
    )}
      />`;
  });
}
function vi(e) {
  return U(() => {
    e = K(e);
    const t = V(e.Content, Vo) ?? "", n = T(e.onContentChange);
    return y`<${Wc}
        Class="sticky-note-content sticky-html-note"
        style=${Ko(e)}
        Value=${t} readonly=${n == null}
        onValueChange=${(o) => E(
      'stickyHTMLNote callback "onContentChange"',
      n,
      o
    )}
      />`;
  });
}
function fd(e) {
  return U(() => {
    e = K(e);
    const t = V(e.Content, Vo) ?? "", n = T(e.onContentChange), { openDialog: o } = lo(), r = Bt(), a = q("");
    a.current = t;
    function i() {
      n != null && o({
        Name: "stickyMarkdownNote-" + r,
        Title: "Markdown",
        isModal: !1,
        isDraggable: !0,
        hasCloseButton: !0,
        isResizable: !0,
        Renderer: () => y`<${mi}
            Class="sticky-markdown-editor"
            Value=${a.current}
            onKeyDown=${ud}
            onValueInput=${(s) => {
          a.current = s, E(
            'stickyMarkdownNote callback "onContentChange"',
            n,
            s
          );
        }}
          />`
      });
    }
    return y`<${_c}
        Class="sticky-note-content sticky-markdown-note"
        style=${Ko(e)}
        Value=${t}
        onDblClick=${i}
      />`;
  });
}
const On = 6, Vs = 2, Es = 9, Ns = 9, iy = 80, sy = jr, ly = Ir, sr = 16, Bs = 20;
function Kn(e, t) {
  const { x: n, y: o } = e.Position, { Width: r, Height: a } = e.Size;
  switch (t.Direction) {
    case "n":
      return { x: n + t.Offset, y: o };
    case "s":
      return { x: n + t.Offset, y: o + a };
    case "w":
      return { x: n, y: o + t.Offset };
    default:
      return { x: n + r, y: o + t.Offset };
  }
}
function fa(e) {
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
function Ws(e, t, n, o) {
  const r = Math.hypot(n.x - e.x, n.y - e.y), a = Math.min(r / 2, iy), i = fa(t), s = {
    x: e.x + a * i.x,
    y: e.y + a * i.y
  };
  let c = n;
  if (o != null) {
    const p = fa(o);
    c = { x: n.x + a * p.x, y: n.y + a * p.y };
  }
  const d = In({
    Anchors: [e, n],
    Controls: [{ c1: s, c2: c }],
    closed: !1
  }), u = (Math.abs(n.x - c.x) + Math.abs(n.y - c.y) < 1e-3 ? Math.atan2(n.y - s.y, n.x - s.x) : Math.atan2(n.y - c.y, n.x - c.x)) * 180 / Math.PI;
  return { Path: d, ArrowAngle: u };
}
function nn(e) {
  return {
    x: e.Position.x,
    y: e.Position.y,
    Width: e.Size.Width,
    Height: e.Size.Height
  };
}
function cy(e, t) {
  return e.length === 0 || t.length === 0 ? { vertical: /* @__PURE__ */ new Map(), horizontal: /* @__PURE__ */ new Map() } : sd(
    e.map(pa),
    t.map(pa),
    1
    // [px] - no zooming here
  );
}
function dy(e) {
  return U(() => {
    yy(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Nodes, (k) => $e(k, Me)) ?? Te("Nodes"), o = V(e.Edges, (k) => $e(k, Me)) ?? Te("Edges"), r = V(e.StickyNotes, (k) => $e(k, Me)) ?? [], a = V(e.Groups, (k) => $e(k, Me)) ?? [], i = ke(e.PaneWidth), s = ke(e.PaneHeight);
    let c = V(e.selectedNodeKeys, (k) => $e(k, Ze)) ?? [], d = V(e.selectedEdgeKeys, (k) => $e(k, Ze)) ?? [], u = V(e.selectedStickyNoteKeys, (k) => $e(k, Ze)) ?? [], p = V(e.selectedGroupKeys, (k) => $e(k, Ze)) ?? [];
    const l = T(e.onSelectionChange), f = T(e.onNodesChange), h = T(e.onEdgesChange), g = T(e.onStickyNotesChange), b = T(e.onStickyNoteContentChange), m = T(e.onGroupsChange), v = T(e.onEdgeCreate), C = T(e.onNodeDoubleClick), S = T(e.PortIsValidTarget), j = D(e.InputFillColor) ?? "#B3E5FC", x = D(e.OutputFillColor) ?? "#FFE0B2", w = D(e.DefaultEdgeColor) ?? "#666666", R = D(e.DefaultFontFamily), L = qe(e.DefaultFontSize), $ = V(e.DefaultFontWeight, (k) => ut(k) || Ee(k)), I = qe(e.DefaultLineHeight), M = D(e.DefaultForegroundColor), _ = D(e.DefaultBackgroundColor), z = ke(e.SensorWidth) ?? 20, N = ke(e.maxPanningSpeed) ?? 400, Y = J(e.SnapToGrid) ?? !1, Q = ke(e.GridWidth) ?? 10, fe = ke(e.GridHeight) ?? 10, P = l != null, X = f != null, te = g != null, pe = v != null, ve = X || te, Ne = {
      // pure fallbacks for StickyNotes
      FontFamily: R,
      FontSize: L,
      FontWeight: $,
      LineHeight: I,
      ForegroundColor: M,
      BackgroundColor: _
    };
    function Xe(k, A) {
      return Od(
        k.map((W) => String(W.Key)),
        A
      );
    }
    const rt = Xe(n, '"Nodes"'), mt = Xe(o, '"Edges"'), re = Xe(r, '"StickyNotes"'), ee = Xe(a, '"Groups"');
    n.forEach((k) => {
      Xe(k.InputPorts ?? [], `input ports of node "${k.Key}"`), Xe(k.OutputPorts ?? [], `output ports of node "${k.Key}"`);
    });
    function ie(k, A = /* @__PURE__ */ new Set()) {
      if (A.has(k))
        return { NodeKeys: [], StickyNoteKeys: [] };
      const W = a.find((ue) => String(ue.Key) === k);
      if (W == null)
        return { NodeKeys: [], StickyNoteKeys: [] };
      A.add(k);
      const B = [...W.NodeKeys ?? []], H = [...W.StickyNoteKeys ?? []];
      return (W.GroupKeys ?? []).forEach((ue) => {
        const ce = ie(String(ue), A);
        B.push(...ce.NodeKeys), H.push(...ce.StickyNoteKeys);
      }), A.delete(k), { NodeKeys: B, StickyNoteKeys: H };
    }
    P ? (c = xo(c, rt), d = xo(d, mt), u = xo(u, re), p = xo(p, ee)) : (c = [], d = [], u = [], p = []);
    const se = new Set(c), be = new Set(d), me = new Set(u), De = new Set(p);
    function Re(k, A, W) {
      function B(ue, ce) {
        return ce.has(A) ? ue.filter((xe) => xe !== A) : [...ue, A];
      }
      let H;
      return W ? H = {
        selectedNodeKeys: k === "node" ? B(c, se) : c,
        selectedEdgeKeys: k === "edge" ? B(d, be) : d,
        selectedStickyNoteKeys: k === "stickyNote" ? B(u, me) : u,
        selectedGroupKeys: k === "group" ? B(p, De) : p
      } : H = {
        selectedNodeKeys: k === "node" ? [A] : [],
        selectedEdgeKeys: k === "edge" ? [A] : [],
        selectedStickyNoteKeys: k === "stickyNote" ? [A] : [],
        selectedGroupKeys: k === "group" ? [A] : []
      }, ze(
        H.selectedNodeKeys,
        H.selectedEdgeKeys,
        H.selectedStickyNoteKeys,
        H.selectedGroupKeys
      ), H;
    }
    function ze(k, A, W, B) {
      E(
        'DataFlowProcessView callback "onSelectionChange"',
        l,
        k,
        A,
        W,
        B
      );
    }
    function bt() {
      (c.length > 0 || d.length > 0 || u.length > 0 || p.length > 0) && ze([], [], [], []);
    }
    const we = q(null), We = q(null), et = q(null), Se = q(void 0), tt = ft();
    Ce(() => () => {
      const k = Se.current;
      k != null && (k.ChangeRAF != null && cancelAnimationFrame(k.ChangeRAF), k.PanningRAF != null && cancelAnimationFrame(k.PanningRAF), Se.current = void 0), ho.current != null && clearTimeout(ho.current);
    }, []);
    function ct(k, A) {
      return Y && A > 0 ? Math.round(k / A) * A : k;
    }
    function _e(k) {
      return {
        minWidth: k.minSize?.Width ?? sy,
        minHeight: k.minSize?.Height ?? ly,
        maxWidth: k.maxSize?.Width ?? 1 / 0,
        maxHeight: k.maxSize?.Height ?? 1 / 0
      };
    }
    const O = {
      // NoteBoard's minimal sizes
      minWidth: jr,
      minHeight: Ir,
      maxWidth: 1 / 0,
      maxHeight: 1 / 0
    };
    function F(k, A) {
      const { Mode: W, Direction: B, dx: H, dy: ue } = Se.current;
      let { x: ce, y: xe, Width: Be, Height: Qe } = k;
      if (W === "move")
        return ce = dt(ct(ce + H, Q), 0, dn - Be), xe = dt(ct(xe + ue, fe), 0, un - Qe), { x: ce, y: xe, Width: Be, Height: Qe };
      const Ve = ce + Be, Fe = xe + Qe;
      if (B.includes("e") && (Be = dt(
        ct(Ve + H, Q),
        ce + A.minWidth,
        Math.min(ce + A.maxWidth, dn)
      ) - ce), B.includes("w")) {
        const It = dt(
          ct(ce + H, Q),
          Math.max(0, Ve - A.maxWidth),
          Ve - A.minWidth
        );
        Be = Ve - It, ce = It;
      }
      if (B.includes("s") && (Qe = dt(
        ct(Fe + ue, fe),
        xe + A.minHeight,
        Math.min(xe + A.maxHeight, un)
      ) - xe), B.includes("n")) {
        const It = dt(
          ct(xe + ue, fe),
          Math.max(0, Fe - A.maxHeight),
          Fe - A.minHeight
        );
        Qe = Fe - It, xe = It;
      }
      return { x: ce, y: xe, Width: Be, Height: Qe };
    }
    function G(k, A, W) {
      const B = Se.current?.StartGeometryByKey?.[k];
      return B == null ? {
        x: A.Position.x,
        y: A.Position.y,
        Width: A.Size.Width,
        Height: A.Size.Height
      } : F(B, W);
    }
    function oe() {
      return n.map((k) => {
        const A = Se.current?.StartGeometryByKey?.["node:" + k.Key];
        if (A == null)
          return k;
        const { x: W, y: B, Width: H, Height: ue } = F(
          A,
          _e(k)
        );
        return { ...k, Position: { x: W, y: B }, Size: { Width: H, Height: ue } };
      });
    }
    function ye() {
      return r.map((k) => {
        const A = Se.current?.StartGeometryByKey?.["stickyNote:" + k.Key];
        if (A == null)
          return k;
        const { x: W, y: B, Width: H, Height: ue } = F(
          A,
          O
        );
        return { ...k, Position: { x: W, y: B }, Size: { Width: H, Height: ue } };
      });
    }
    function Ue() {
      const k = Se.current?.StartGeometryByKey ?? {};
      return Object.keys(k).some(
        (A) => A.startsWith("node:")
      );
    }
    function vt() {
      const k = Se.current?.StartGeometryByKey ?? {};
      return Object.keys(k).some(
        (A) => A.startsWith("stickyNote:")
      );
    }
    function kt() {
      const k = Se.current;
      k == null || k.ChangeRAF != null || (k.ChangeRAF = requestAnimationFrame(() => {
        const A = Se.current;
        A != null && (A.ChangeRAF = void 0, Ei());
      }));
    }
    function Ei() {
      Ue() && E(
        'DataFlowProcessView callback "onNodesChange"',
        f,
        oe()
      ), vt() && E(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        ye()
      );
    }
    function co(k, A, W, B, H) {
      let ue = A === "node" ? [W] : [], ce = A === "stickyNote" ? [W] : [], xe = A === "group" ? [W] : [];
      if (P) {
        let Fe = {
          selectedNodeKeys: c,
          selectedEdgeKeys: d,
          selectedStickyNoteKeys: u,
          selectedGroupKeys: p
        };
        if (!(A === "node" ? se : A === "group" ? De : me).has(W)) {
          const su = Sn(H);
          Fe = Re(A, W, su);
        }
        (A === "node" ? Fe.selectedNodeKeys : A === "group" ? Fe.selectedGroupKeys : Fe.selectedStickyNoteKeys).includes(W) && (ue = Fe.selectedNodeKeys, ce = Fe.selectedStickyNoteKeys, xe = Fe.selectedGroupKeys);
      }
      const Be = new Set(ue), Qe = new Set(ce);
      xe.forEach((Fe) => {
        const It = ie(Fe);
        It.NodeKeys.forEach(
          (er) => Be.add(String(er))
        ), It.StickyNoteKeys.forEach(
          (er) => Qe.add(String(er))
        );
      });
      const Ve = {};
      n.forEach((Fe) => {
        Be.has(String(Fe.Key)) && (Ve["node:" + Fe.Key] = nn(Fe));
      }), r.forEach((Fe) => {
        Qe.has(String(Fe.Key)) && (Ve["stickyNote:" + Fe.Key] = nn(Fe));
      }), Se.current = {
        Mode: k,
        Direction: B,
        StartGeometryByKey: Ve,
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, tt();
    }
    function uo(k, A, W) {
      const B = Se.current;
      B != null && (B.dx = k, B.dy = A, W != null && (B.lastClientX = W.clientX, B.lastClientY = W.clientY), B.Mode === "move" && B.PanningRAF == null && (B.PanningTimestamp = void 0, B.PanningRAF = requestAnimationFrame(
        (H) => Jo.current?.(H)
      )), tt(), kt());
    }
    function po(k, A) {
      const W = Se.current;
      W != null && (W.dx = k, W.dy = A, W.ChangeRAF != null && cancelAnimationFrame(W.ChangeRAF), W.PanningRAF != null && cancelAnimationFrame(W.PanningRAF), Ei(), Se.current = void 0, tt());
    }
    function fo() {
      const k = Se.current;
      if (k == null)
        return;
      k.ChangeRAF != null && cancelAnimationFrame(k.ChangeRAF), k.PanningRAF != null && cancelAnimationFrame(k.PanningRAF);
      const { StartGeometryByKey: A } = k;
      Ue() && E(
        'DataFlowProcessView callback "onNodesChange"',
        f,
        n.map((W) => {
          const B = A["node:" + W.Key];
          return B == null ? W : {
            ...W,
            Position: { x: B.x, y: B.y },
            Size: { Width: B.Width, Height: B.Height }
          };
        })
      ), vt() && E(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        r.map((W) => {
          const B = A["stickyNote:" + W.Key];
          return B == null ? W : {
            ...W,
            Position: { x: B.x, y: B.y },
            Size: { Width: B.Width, Height: B.Height }
          };
        })
      ), Se.current = void 0, tt();
    }
    function Hd(k, A, W, B) {
      Se.current = {
        Mode: "rubberEdge",
        Source: { NodeKey: k, PortKey: A },
        hasMoved: !1,
        PointerPosition: { x: W, y: B },
        StartGeometryByKey: {},
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, tt();
    }
    function Gd(k, A, W) {
      const B = Se.current;
      B == null || B.Mode !== "rubberEdge" || (B.hasMoved = !0, B.PointerPosition = { x: k, y: A }, W != null && (B.lastClientX = W.clientX, B.lastClientY = W.clientY), B.PanningRAF == null && (B.PanningTimestamp = void 0, B.PanningRAF = requestAnimationFrame(
        (H) => Jo.current?.(H)
      )), tt());
    }
    function Ud(k, A) {
      const W = Se.current;
      if (W == null || W.Mode !== "rubberEdge")
        return;
      W.PanningRAF != null && cancelAnimationFrame(W.PanningRAF);
      const B = W.Source;
      Se.current = void 0;
      const H = qd(k, A, B);
      H != null && E(
        'DataFlowProcessView callback "onEdgeCreate"',
        v,
        { Source: B, Target: H }
      ), tt();
    }
    function Kd() {
      const k = Se.current;
      k == null || k.Mode !== "rubberEdge" || (k.PanningRAF != null && cancelAnimationFrame(k.PanningRAF), Se.current = void 0, tt());
    }
    function Ni(k, A, W) {
      return W.disabled == !0 ? !1 : S == null ? !0 : Ke(
        'DataFlowProcessView callback "PortIsValidTarget"',
        S,
        k,
        A
      ) == !0;
    }
    function qd(k, A, W) {
      const B = On + Vs;
      for (let H = en.length - 1; H >= 0; H--) {
        const ue = en[H], ce = (ue.InputPorts ?? []).find((xe) => {
          const Be = Kn(ue, xe);
          return Math.hypot(Be.x - k, Be.y - A) <= B;
        });
        if (ce != null) {
          const xe = { NodeKey: String(ue.Key), PortKey: String(ce.Key) };
          return Ni(W, xe, ce) ? xe : void 0;
        }
      }
    }
    function Xd(k, A) {
      Se.current = {
        Mode: "lasso",
        LassoStart: { x: k, y: A },
        PointerPosition: { x: k, y: A },
        StartGeometryByKey: {},
        dx: 0,
        dy: 0,
        lastClientX: void 0,
        lastClientY: void 0,
        ChangeRAF: void 0,
        PanningRAF: void 0,
        PanningTimestamp: void 0
      }, tt();
    }
    function Yd(k, A) {
      const W = Se.current;
      W == null || W.Mode !== "lasso" || (W.PointerPosition = { x: k, y: A }, tt());
    }
    function Bi(k) {
      const { LassoStart: A, PointerPosition: W } = k;
      return {
        x: Math.min(A.x, W.x),
        y: Math.min(A.y, W.y),
        Width: Math.abs(W.x - A.x),
        Height: Math.abs(W.y - A.y)
      };
    }
    function Jd(k, A) {
      const W = Se.current;
      if (W == null || W.Mode !== "lasso")
        return;
      W.PointerPosition = { x: k, y: A };
      const B = Bi(W);
      Se.current = void 0;
      const H = en.filter(
        (ce) => ua(B, nn(ce))
      ).map((ce) => String(ce.Key)), ue = Po.filter(
        (ce) => ua(B, nn(ce))
      ).map((ce) => String(ce.Key));
      ze(H, [], ue, []), tt();
    }
    function Zd() {
      Se.current?.Mode === "lasso" && (Se.current = void 0, tt());
    }
    function Qd(k, A, W) {
      const B = Sn(W), H = Pd(k, A);
      switch (!0) {
        case H != null:
          Re("edge", H, B);
          break;
        case !B:
          bt();
          break;
        default:
      }
    }
    function Pd(k, A) {
      const W = et.current;
      if (W == null)
        return;
      const B = Array.from(W.querySelectorAll("path[data-edge-key]"));
      for (let H = B.length - 1; H >= 0; H--) {
        const ue = B[H];
        if (typeof ue.isPointInStroke != "function")
          return;
        const ce = W.createSVGPoint();
        ce.x = k, ce.y = A;
        const xe = parseFloat(getComputedStyle(ue).strokeWidth) || 0, Be = ue.getAttribute("stroke-width");
        ue.setAttribute("stroke-width", String(xe + 2 * Vs));
        try {
          if (ue.isPointInStroke(ce))
            return ue.getAttribute("data-edge-key") ?? void 0;
        } finally {
          Be == null ? ue.removeAttribute("stroke-width") : ue.setAttribute("stroke-width", Be);
        }
      }
    }
    const eu = io({
      ViewRef: We,
      Container: () => we.current,
      onlyFrom: ".dfp-pane",
      onClick: P ? Qd : void 0,
      onDragStart: P ? (k, A, W, B) => Xd(W, B) : void 0,
      onDragContinuation: P ? (k, A, W, B) => Yd(W, B) : void 0,
      onDragFinish: P ? (k, A, W, B) => Jd(W, B) : void 0,
      onDragCancellation: P ? () => Zd() : void 0
    });
    function tu(k) {
      const A = Se.current, W = we.current;
      if (A == null || W == null || A.Mode !== "move" && A.Mode !== "rubberEdge")
        return;
      const { lastClientX: B, lastClientY: H } = A;
      if (B == null || H == null) {
        A.PanningRAF = void 0, A.PanningTimestamp = void 0;
        return;
      }
      const { vx: ue, vy: ce } = zd(
        W.getBoundingClientRect(),
        B,
        H,
        z,
        N
      );
      if (ue === 0 && ce === 0) {
        A.PanningRAF = void 0, A.PanningTimestamp = void 0;
        return;
      }
      const xe = Vd(A, k), Be = W.scrollLeft, Qe = W.scrollTop;
      W.scrollLeft = Be + ue * xe, W.scrollTop = Qe + ce * xe;
      const Ve = W.scrollLeft - Be, Fe = W.scrollTop - Qe;
      A.Mode === "move" ? (A.dx += Ve, A.dy += Fe, Wi.current?.()) : A.PointerPosition = {
        // ...is kept in content coordinates
        x: A.PointerPosition.x + Ve,
        y: A.PointerPosition.y + Fe
      }, tt(), A.PanningRAF = requestAnimationFrame(
        (It) => Jo.current?.(It)
      );
    }
    const Jo = q();
    Jo.current = tu;
    const Wi = q();
    Wi.current = kt;
    const Wr = q(!1), ho = q(void 0);
    function Hi(k = 3e3) {
      Wr.current = !0, tt(), clearTimeout(ho.current), ho.current = setTimeout(() => {
        ho.current = void 0, Wr.current = !1, tt();
      }, k);
    }
    function Zo(k, A) {
      const W = new Set(c), B = new Set(u);
      p.forEach((H) => {
        const ue = ie(H);
        ue.NodeKeys.forEach(
          (ce) => W.add(String(ce))
        ), ue.StickyNoteKeys.forEach(
          (ce) => B.add(String(ce))
        );
      }), X && W.size > 0 && E(
        'DataFlowProcessView callback "onNodesChange"',
        f,
        n.map((H) => {
          if (!W.has(String(H.Key)))
            return H;
          const { Width: ue, Height: ce } = H.Size;
          return { ...H, Position: {
            x: dt(H.Position.x + k, 0, dn - ue),
            y: dt(H.Position.y + A, 0, un - ce)
          } };
        })
      ), te && B.size > 0 && E(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        r.map((H) => {
          if (!B.has(String(H.Key)))
            return H;
          const { Width: ue, Height: ce } = H.Size;
          return { ...H, Position: {
            x: dt(H.Position.x + k, 0, dn - ue),
            y: dt(H.Position.y + A, 0, un - ce)
          } };
        })
      ), Hi();
    }
    function Qo(k, A) {
      X && c.length > 0 && E(
        'DataFlowProcessView callback "onNodesChange"',
        f,
        n.map((W) => {
          if (!se.has(String(W.Key)))
            return W;
          const B = _e(W), { x: H, y: ue } = W.Position;
          return { ...W, Size: {
            Width: dt(
              W.Size.Width + k,
              B.minWidth,
              Math.min(B.maxWidth, dn - H)
            ),
            Height: dt(
              W.Size.Height + A,
              B.minHeight,
              Math.min(B.maxHeight, un - ue)
            )
          } };
        })
      ), te && u.length > 0 && E(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        r.map((W) => {
          if (!me.has(String(W.Key)))
            return W;
          const { x: B, y: H } = W.Position;
          return { ...W, Size: {
            Width: dt(
              W.Size.Width + k,
              jr,
              dn - B
            ),
            Height: dt(
              W.Size.Height + A,
              Ir,
              un - H
            )
          } };
        })
      ), Hi();
    }
    function nu(k, A, W, B) {
      let H = k.filter((ce) => !A.has(String(ce.Key))).map((ce) => W.size === 0 && B.size === 0 ? ce : {
        ...ce,
        NodeKeys: W.size === 0 ? ce.NodeKeys ?? [] : (ce.NodeKeys ?? []).filter(
          (xe) => !W.has(String(xe))
        ),
        StickyNoteKeys: B.size === 0 ? ce.StickyNoteKeys ?? [] : (ce.StickyNoteKeys ?? []).filter(
          (xe) => !B.has(String(xe))
        )
      }), ue = !0;
      for (; ue; ) {
        ue = !1;
        const ce = new Set(
          H.map((Be) => String(Be.Key))
        );
        H = H.map((Be) => {
          const Qe = (Be.GroupKeys ?? []).filter(
            (Ve) => ce.has(String(Ve))
          );
          return Qe.length === (Be.GroupKeys ?? []).length ? Be : (ue = !0, { ...Be, GroupKeys: Qe });
        });
        const xe = H.filter((Be) => (Be.NodeKeys ?? []).length > 0 || (Be.StickyNoteKeys ?? []).length > 0 || (Be.GroupKeys ?? []).length > 0);
        xe.length !== H.length && (ue = !0, H = xe);
      }
      return H;
    }
    function ou() {
      const k = new Set(X ? c : []), A = new Set(te ? u : []), W = new Set(m != null ? p : []), B = /* @__PURE__ */ new Set();
      h != null && (d.forEach((H) => B.add(H)), o.forEach((H) => {
        (k.has(String(H.Source?.NodeKey)) || k.has(String(H.Target?.NodeKey))) && B.add(String(H.Key));
      })), k.size > 0 && E(
        'DataFlowProcessView callback "onNodesChange"',
        f,
        n.filter((H) => !k.has(String(H.Key)))
      ), B.size > 0 && E(
        'DataFlowProcessView callback "onEdgesChange"',
        h,
        o.filter((H) => !B.has(String(H.Key)))
      ), A.size > 0 && E(
        'DataFlowProcessView callback "onStickyNotesChange"',
        g,
        r.filter((H) => !A.has(String(H.Key)))
      ), m != null && (W.size > 0 || k.size > 0 || A.size > 0) && E(
        'DataFlowProcessView callback "onGroupsChange"',
        m,
        nu(a, W, k, A)
      ), P && (k.size > 0 || B.size > 0 || A.size > 0 || W.size > 0) && ze(
        c.filter((H) => !k.has(H)),
        d.filter((H) => !B.has(H)),
        u.filter((H) => !A.has(H)),
        p.filter((H) => !W.has(H))
      );
    }
    function ru(k) {
      const A = k.target;
      if (
        // for embedded controls
        A != null && A.closest?.(".dfp-content-area, input, textarea, [contenteditable]") != null
      )
        return;
      const W = (k.shiftKey ? 10 : 1) * (Y ? Q : 1), B = (k.shiftKey ? 10 : 1) * (Y ? fe : 1);
      let H = !0;
      switch (!0) {
        case k.key === "Escape":
          bt();
          break;
        case (k.key === "Delete" || k.key === "Backspace"):
          ou();
          break;
        case k.key === "ArrowLeft":
          k.altKey ? Qo(-W, 0) : Zo(-W, 0);
          break;
        case k.key === "ArrowRight":
          k.altKey ? Qo(W, 0) : Zo(W, 0);
          break;
        case k.key === "ArrowUp":
          k.altKey ? Qo(0, -B) : Zo(0, -B);
          break;
        case k.key === "ArrowDown":
          k.altKey ? Qo(0, B) : Zo(0, B);
          break;
        default:
          H = !1;
      }
      H && k.preventDefault();
    }
    const Gi = mc(we), dn = i ?? Gi.Width, un = s ?? Gi.Height, en = n.map((k) => {
      const { x: A, y: W, Width: B, Height: H } = G(
        "node:" + k.Key,
        k,
        _e(k)
      );
      return { ...k, Position: { x: A, y: W }, Size: { Width: B, Height: H } };
    }), Po = r.map((k) => {
      const { x: A, y: W, Width: B, Height: H } = G(
        "stickyNote:" + k.Key,
        k,
        O
      );
      return { ...k, Position: { x: A, y: W }, Size: { Width: B, Height: H } };
    }), Ui = {};
    en.forEach(
      (k) => {
        Ui[String(k.Key)] = k;
      }
    );
    const Ki = {};
    Po.forEach(
      (k) => {
        Ki[String(k.Key)] = k;
      }
    );
    const qi = {};
    a.forEach(
      (k) => {
        qi[String(k.Key)] = k;
      }
    );
    const go = {};
    function Xi(k, A) {
      if (k in go)
        return go[k];
      if (A.has(k))
        return;
      const W = qi[k];
      if (W == null) {
        go[k] = void 0;
        return;
      }
      A.add(k);
      const B = [];
      let H = -1;
      if ((W.NodeKeys ?? []).forEach((Ve) => {
        const Fe = Ui[String(Ve)];
        Fe != null && B.push(nn(Fe));
      }), (W.StickyNoteKeys ?? []).forEach((Ve) => {
        const Fe = Ki[String(Ve)];
        Fe != null && B.push(nn(Fe));
      }), (W.GroupKeys ?? []).forEach((Ve) => {
        const Fe = Xi(String(Ve), A);
        Fe != null && (B.push(Fe), H = Math.max(H, Fe.Depth));
      }), A.delete(k), B.length === 0) {
        go[k] = void 0;
        return;
      }
      const ue = Math.min(...B.map((Ve) => Ve.x)), ce = Math.min(...B.map((Ve) => Ve.y)), xe = Math.max(...B.map((Ve) => Ve.x + Ve.Width)), Be = Math.max(...B.map((Ve) => Ve.y + Ve.Height)), Qe = {
        x: ue - sr,
        y: ce - sr - Bs,
        Width: xe - ue + 2 * sr,
        Height: Be - ce + 2 * sr + Bs,
        Depth: H + 1
      };
      return go[k] = Qe, Qe;
    }
    const au = a.map((k) => {
      const A = Xi(String(k.Key), /* @__PURE__ */ new Set());
      if (A != null)
        return {
          ...k,
          Position: { x: A.x, y: A.y },
          Size: { Width: A.Width, Height: A.Height },
          Depth: A.Depth
        };
    }).filter(
      (k) => k != null
    ).sort((k, A) => A.Depth - k.Depth), Wt = Se.current;
    let Yi;
    if (Wt?.Mode === "move" || Wr.current) {
      const k = [], A = [], W = (B, H, ue) => {
        B.forEach((ce) => {
          ((Wt?.Mode === "move" ? Wt.StartGeometryByKey[H + ce.Key] != null : ue.has(String(ce.Key))) ? k : A).push(nn(ce));
        });
      };
      W(en, "node:", se), W(Po, "stickyNote:", me), Yi = cy(k, A);
    }
    const Ji = Wt?.Mode === "rubberEdge";
    let Zi;
    if (Ji && Wt?.hasMoved === !0) {
      const k = en.find(
        (W) => String(W.Key) === Wt.Source.NodeKey
      ), A = (k?.OutputPorts ?? []).find(
        (W) => String(W.Key) === Wt.Source.PortKey
      );
      k != null && A != null && (Zi = {
        from: Kn(k, A),
        fromDirection: A.Direction,
        to: Wt.PointerPosition
      });
    }
    const iu = Wt?.Mode === "lasso" ? Bi(Wt) : void 0;
    return y`<div
        class="jcl-component dataflow-process-view ${t}"
        ref=${we} tabindex="0" onKeyDown=${ru}
        ...${e.RestProps}
      >
        <div class="dfp-pane" ref=${We}
          style="width:${dn}px; height:${un}px"
          onPointerDown=${eu}
        >
          <div class="dfp-group-layer">
            ${au.map((k) => {
      const A = String(k.Key), W = De.has(A);
      return y`<${gy} key=${A}
                Group=${k} GroupKey=${A}
                isSelected=${W} isSelectable=${P}
                isDraggable=${ve}
                ScrollerOf=${() => we.current}
                onGroupClick=${(B, H, ue) => Re(
        "group",
        A,
        Sn(ue)
      )}
                onMoveStart=${(B, H, ue, ce, xe) => co("move", "group", A, void 0, xe)}
                onMoveContinuation=${(B, H, ue, ce, xe) => uo(B, H, xe)}
                onMoveFinish=${(B, H) => po(B, H)}
                onMoveCancellation=${() => fo()}
              />`;
    })}
          </>

          <${by}
            SVGRef=${et}
            PaneWidth=${dn} PaneHeight=${un}
            Nodes=${en} Edges=${o}
            EdgeSelectionSet=${be}
            DefaultEdgeColor=${w}
            RubberEdge=${Zi} LassoBox=${iu}
            GuideLines=${Yi}
          />

          <div class="dfp-stickynote-layer">
            ${Po.map((k) => {
      const A = String(k.Key), W = me.has(A);
      return y`<${hy} key=${A}
                Note=${k} NoteKey=${A} Defaults=${Ne}
                isSelected=${W} isSelectable=${P}
                isDraggable=${te}
                onContentChange=${b == null ? void 0 : ((B) => E(
        'DataFlowProcessView callback "onStickyNoteContentChange"',
        b,
        A,
        B
      ))}
                ScrollerOf=${() => we.current}
                onNoteClick=${(B, H, ue) => Re(
        "stickyNote",
        A,
        Sn(ue)
      )}
                onMoveStart=${(B, H, ue, ce, xe) => co("move", "stickyNote", A, void 0, xe)}
                onMoveContinuation=${(B, H, ue, ce, xe) => uo(B, H, xe)}
                onMoveFinish=${(B, H) => po(B, H)}
                onMoveCancellation=${() => fo()}
                onResizeStart=${(B, H, ue, ce, xe) => co("resize", "stickyNote", A, "se", xe)}
                onResizeContinuation=${(B, H, ue, ce, xe) => uo(B, H, xe)}
                onResizeFinish=${(B, H) => po(B, H)}
                onResizeCancellation=${() => fo()}
              />`;
    })}
          </>

          <div class="dfp-node-layer">
            ${en.map((k) => {
      const A = String(k.Key), W = se.has(A);
      return y`<${py} key=${A}
                NodeKey=${A} Title=${k.Title ?? ""}
                Geometry=${nn(k)}
                BackgroundColor=${k.BackgroundColor}
                isDisabled=${k.disabled == !0}
                isSelected=${W} isSelectable=${P}
                isDraggable=${X}
                renderedContent=${Vt(k.Content) ? Ke(
        'DataFlowProcessView callback "Node.Content"',
        k.Content,
        k,
        W
      ) : void 0}
                ScrollerOf=${() => we.current}
                onNodeClick=${(B, H, ue) => Re(
        "node",
        A,
        Sn(ue)
      )}
                onNodeDoubleClick=${C == null ? void 0 : ((B) => E(
        'DataFlowProcessView callback "onNodeDoubleClick"',
        C,
        A,
        B
      ))}
                onMoveStart=${(B, H, ue, ce, xe) => co("move", "node", A, void 0, xe)}
                onMoveContinuation=${(B, H, ue, ce, xe) => uo(B, H, xe)}
                onMoveFinish=${(B, H) => po(B, H)}
                onMoveCancellation=${() => fo()}
                onResizeStart=${(B, H) => co("resize", "node", A, B, H)}
                onResizeContinuation=${(B, H, ue, ce, xe) => uo(B, H, xe)}
                onResizeFinish=${(B, H) => po(B, H)}
                onResizeCancellation=${() => fo()}
              />`;
    })}
          </>

          <div class="dfp-port-layer">
            ${en.map((k) => {
      const A = String(k.Key), W = (B, H) => B.map((ue) => {
        const ce = String(ue.Key), xe = Kn(k, ue);
        let Be;
        return Ji && H === "input" && (Be = Ni(
          Se.current.Source,
          { NodeKey: A, PortKey: ce },
          ue
        ) ? "valid-target" : "locked"), y`<${my}
                    key=${A + ":" + H + ":" + ce}
                    Port=${ue} Kind=${H} Position=${xe}
                    FillColor=${H === "input" ? j : x}
                    TargetState=${Be}
                    mayStartEdges=${pe}
                    ScrollerOf=${() => we.current}
                    onRubberEdgeStart=${(Qe, Ve) => Hd(A, ce, Qe, Ve)}
                    onRubberEdgeContinuation=${(Qe, Ve, Fe) => Gd(Qe, Ve, Fe)}
                    onRubberEdgeFinish=${(Qe, Ve) => Ud(Qe, Ve)}
                    onRubberEdgeCancellation=${() => Kd()}
                  />`;
      });
      return y`
                ${W(k.InputPorts ?? [], "input")}
                ${W(k.OutputPorts ?? [], "output")}
              `;
    })}
          </>
        </>
      </>`;
  });
}
const uy = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
function py(e) {
  const {
    NodeKey: t,
    Title: n,
    Geometry: o,
    BackgroundColor: r,
    isDisabled: a,
    isSelected: i,
    isSelectable: s,
    isDraggable: c,
    renderedContent: d,
    ScrollerOf: u,
    onNodeClick: p,
    onNodeDoubleClick: l,
    onMoveStart: f,
    onMoveContinuation: h,
    onMoveFinish: g,
    onMoveCancellation: b,
    onResizeStart: m,
    onResizeContinuation: v,
    onResizeFinish: C,
    onResizeCancellation: S
  } = e, j = q(null), x = io({
    ViewRef: j,
    Container: u,
    onlyFrom: ".dfp-titlebar",
    onClick: s ? p : void 0,
    onDragStart: c ? f : void 0,
    onDragContinuation: c ? h : void 0,
    onDragFinish: c ? g : void 0,
    onDragCancellation: c ? b : void 0
  });
  return y`<div
      class="dfp-node${i ? " selected" : ""}${a ? " disabled" : ""}"
      style="left:${o.x}px; top:${o.y}px; width:${o.Width}px; height:${o.Height}px; ${r == null ? "" : `background-color:${r};`}"
      ref=${j} data-node-key=${t}
      onPointerDown=${x}
      onDblClick=${l}
    >
      <div class="dfp-titlebar">${n}</>
      <div class="dfp-content-area">${d}</>
      ${i && c && uy.map(
    (w) => y`<${fy} key=${w}
          Direction=${w} ScrollerOf=${u}
          onResizeStart=${m}
          onResizeContinuation=${v}
          onResizeFinish=${C}
          onResizeCancellation=${S}
        />`
  )}
    </>`;
}
function fy(e) {
  const {
    Direction: t,
    ScrollerOf: n,
    onResizeStart: o,
    onResizeContinuation: r,
    onResizeFinish: a,
    onResizeCancellation: i
  } = e, s = q(null), c = Fn({
    ViewRef: s,
    Container: n,
    onlyFrom: `[data-handle="${t}"]`,
    onDragStart: ((d, u, p, l, f) => o(t, f)),
    onDragContinuation: r,
    onDragFinish: a,
    onDragCancellation: i
  });
  return y`<div
      class="dfp-handle handle-${t}" data-handle=${t}
      ref=${s} onPointerDown=${c} aria-hidden="true"
    />`;
}
function hy(e) {
  const {
    Note: t,
    NoteKey: n,
    Defaults: o,
    isSelected: r,
    isSelectable: a,
    isDraggable: i,
    onContentChange: s,
    ScrollerOf: c,
    onNoteClick: d,
    onMoveStart: u,
    onMoveContinuation: p,
    onMoveFinish: l,
    onMoveCancellation: f,
    onResizeStart: h,
    onResizeContinuation: g,
    onResizeFinish: b,
    onResizeCancellation: m
  } = e, v = q(null), C = io({
    ViewRef: v,
    Container: c,
    onlyFrom: ".dfp-titlebar",
    onClick: a ? d : void 0,
    onDragStart: i ? u : void 0,
    onDragContinuation: i ? p : void 0,
    onDragFinish: i ? l : void 0,
    onDragCancellation: i ? f : void 0
  }), S = Fn({
    ViewRef: v,
    Container: c,
    onlyFrom: ".dfp-resize-handle",
    onDragStart: i ? h : void 0,
    onDragContinuation: i ? g : void 0,
    onDragFinish: i ? b : void 0,
    onDragCancellation: i ? m : void 0
  }), j = {
    // note settings first, defaults second
    FontFamily: t.FontFamily ?? o.FontFamily,
    FontSize: t.FontSize ?? o.FontSize,
    FontWeight: t.FontWeight ?? o.FontWeight,
    LineHeight: t.LineHeight ?? o.LineHeight,
    ForegroundColor: t.ForegroundColor ?? o.ForegroundColor,
    BackgroundColor: t.BackgroundColor ?? o.BackgroundColor
  }, x = nn(t);
  return y`<div
      class="dfp-stickynote${r ? " selected" : ""}"
      style="left:${x.x}px; top:${x.y}px; width:${x.Width}px; height:${x.Height}px; ${Ko(j)}"
      ref=${v} data-note-key=${n}
      onPointerDown=${(w) => {
    S?.(w), C?.(w);
  }}
    >
      <div class="dfp-titlebar"/>
      <div class="dfp-content-area">
        <${vi} ...${j}
          Content=${t.Content ?? ""} onContentChange=${s}
        />
      </>
      ${r && i && y`<div class="dfp-resize-handle" aria-hidden="true"/>`}
    </>`;
}
function gy(e) {
  const {
    Group: t,
    GroupKey: n,
    isSelected: o,
    isSelectable: r,
    isDraggable: a,
    ScrollerOf: i,
    onGroupClick: s,
    onMoveStart: c,
    onMoveContinuation: d,
    onMoveFinish: u,
    onMoveCancellation: p
  } = e, l = q(null), f = io({
    ViewRef: l,
    Container: i,
    onlyFrom: ".dfp-group",
    onClick: r ? s : void 0,
    onDragStart: a ? c : void 0,
    onDragContinuation: a ? d : void 0,
    onDragFinish: a ? u : void 0,
    onDragCancellation: a ? p : void 0
  }), h = (t.BorderColor == null ? "" : `border-color:${t.BorderColor};`) + (t.BackgroundColor == null ? "" : `background-color:${t.BackgroundColor};`);
  return y`<div
      class="dfp-group${o ? " selected" : ""}"
      style="left:${t.Position.x}px; top:${t.Position.y}px; width:${t.Size.Width}px; height:${t.Size.Height}px; ${h}"
      ref=${l} data-group-key=${n}
      onPointerDown=${f}
    >${t.Label ?? ""}</>`;
}
function my(e) {
  const {
    Port: t,
    Kind: n,
    Position: o,
    FillColor: r,
    TargetState: a,
    mayStartEdges: i,
    ScrollerOf: s,
    onRubberEdgeStart: c,
    onRubberEdgeContinuation: d,
    onRubberEdgeFinish: u,
    onRubberEdgeCancellation: p
  } = e, l = t.disabled == !0, f = n === "output" && i && !l, h = q(null), g = Fn({
    // "capability follows callback...
    ViewRef: h,
    Container: s,
    onlyFrom: ".dfp-port.output",
    // ...presence"
    onDragStart: f ? (
      // - disabled ports are not wired up
      ((m, v, C, S) => c(C, S))
    ) : void 0,
    onDragContinuation: f ? ((m, v, C, S, j) => d(C, S, j)) : void 0,
    onDragFinish: f ? ((m, v, C, S) => u(C, S)) : void 0,
    onDragCancellation: f ? (() => p()) : void 0
  });
  let b = "";
  return l && (b += " disabled"), f && (b += " draggable"), a != null && (b += " " + a), y`<${wd} Class="dfp-port-wrapper"
      Value=${t.Label ?? String(t.Key)}
      Style="left:${o.x - On}px; top:${o.y - On}px"
    >
      <div class="dfp-port ${n}${b}"
        style="background-color:${r}"
        ref=${h} tabindex=${l ? -1 : 0}
        data-port-key=${t.Key}
        onPointerDown=${g}
      />
    </>`;
}
function by(e) {
  const {
    SVGRef: t,
    PaneWidth: n,
    PaneHeight: o,
    Nodes: r,
    Edges: a,
    EdgeSelectionSet: i,
    DefaultEdgeColor: s,
    RubberEdge: c,
    LassoBox: d,
    GuideLines: u
  } = e, p = {};
  r.forEach((h) => {
    p[String(h.Key)] = h;
  });
  const l = (h, g) => {
    const b = fa(g);
    return {
      x: h.x + On * b.x,
      y: h.y + On * b.y
    };
  }, f = a.map((h) => {
    const g = p[String(h.Source?.NodeKey)], b = p[String(h.Target?.NodeKey)], m = (g?.OutputPorts ?? []).find(
      ($) => String($.Key) === String(h.Source?.PortKey)
    ), v = (b?.InputPorts ?? []).find(
      ($) => String($.Key) === String(h.Target?.PortKey)
    );
    if (m == null || v == null)
      return;
    const C = l(
      Kn(g, m),
      m.Direction
    ), S = l(
      Kn(b, v),
      v.Direction
    ), { Path: j, ArrowAngle: x } = Ws(
      C,
      m.Direction,
      S,
      v.Direction
    ), w = h.Color ?? s, R = i.has(String(h.Key)), L = h.disabled == !0;
    return y`
        ${R && y`<path class="dfp-edge-halo" d=${j}/>`}
        <path class="dfp-edge${R ? " selected" : ""}${L ? " disabled" : ""}"
          data-edge-key=${h.Key} d=${j}
          stroke=${w} stroke-width="2"
        />
        <polygon class="dfp-arrowhead${L ? " disabled" : ""}"
          points="0,0 -${Es},${Ns / 2} -${Es},-${Ns / 2}"
          fill=${w}
          transform="translate(${S.x},${S.y}) rotate(${x})"
        />
      `;
  });
  return y`<svg class="dfp-edge-layer" ref=${t}
      width=${n} height=${o}
      viewBox="0 0 ${n} ${o}"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${f}

      ${u != null && y`
        ${Array.from(u.vertical.entries()).map(
    ([h, g]) => y`<line
            class="dfp-guide ${g}"
            x1=${h} y1="0" x2=${h} y2=${o}
          />`
  )}
        ${Array.from(u.horizontal.entries()).map(
    ([h, g]) => y`<line
            class="dfp-guide ${g}"
            x1="0" y1=${h} x2=${n} y2=${h}
          />`
  )}
      `}

      ${c != null && y`<path class="dfp-rubber-edge"
        d=${Ws(
    l(c.from, c.fromDirection),
    c.fromDirection,
    c.to
  ).Path}
      />`}

      ${d != null && y`<rect class="dfp-lasso"
        x=${d.x} y=${d.y}
        width=${d.Width} height=${d.Height}
      />`}
    </>`;
}
const yy = /* @__PURE__ */ Z("jcl-component.dataflow-process-view", `
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
      display:block; width:${2 * On}px; height:${2 * On}px;
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
function xy(e) {
  return mn(e) || ko(e) && (he(e.Type, ["user", "assistant"]) && mn(e.Text) || e.Type === "annotation" && Vt(e.Renderer));
}
function vy({ Renderer: e }) {
  return U(e);
}
function wy(e) {
  return U(() => {
    ky(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = ae(e.HelloMessage), r = V(e.Messages, (z) => $e(z, xy)) ?? [], a = D(e.Placeholder) ?? "type a message...", i = ke(e.Rows) ?? 3, s = ae(e.Value), c = D(e.SubmitLabel), d = J(e.disabled) ?? !1, u = T(e.onInput), p = T(e.onValueInput), l = T(e.onSubmit), [f, h] = Ge(""), g = s != null, b = g ? s : f, m = q(void 0);
    function v(z) {
      g || h(z.target.value), E('legacyChatView callback "onInput"', u, z), E(
        'legacyChatView callback "onValueInput"',
        p,
        z.target.value,
        z
      );
    }
    function C(z) {
      z.key === "Enter" && !z.shiftKey && !d && (z.preventDefault(), S(z));
    }
    function S(z) {
      d || b.trim() === "" || (E(
        'legacyChatView callback "onSubmit"',
        l,
        b,
        z
      ), g || h(""), m.current?.focus());
    }
    const j = At(e.children), x = (z) => j.find((N) => N?.type === z), w = x(gd), R = x(hd), L = w == null ? void 0 : K(w.props).Renderer, $ = R == null ? void 0 : K(R.props).Renderer, I = x(md), M = [];
    o != null && M.push({ Kind: "message", Text: o, isUser: !1, Index: -1 });
    let _ = !1;
    return r.forEach((z, N) => {
      if (ko(z) && z.Type === "annotation")
        M.push({ Kind: "annotation", Renderer: z.Renderer, isUser: _, Index: N });
      else {
        const Y = ko(z) ? z.Type === "user" : !_, Q = ko(z) ? z.Text : z;
        M.push({ Kind: "message", Text: Q, isUser: Y, Index: N }), _ = Y;
      }
    }), y`<div class="jcl-component legacy-chatview ${t}"
        style=${n} ...${e.RestProps}
      >
        <div class="turns">
          ${M.map((z) => {
      if (z.Kind === "annotation")
        return y`<div class="turn ${z.isUser ? "from-user" : "from-assistant"}">
                <${vy} Renderer=${z.Renderer}/>
              </>`;
      const N = z.isUser ? L : $, Y = N?.(z.Index);
      return y`<div class="turn ${z.isUser ? "from-user" : "from-assistant"}">
              <div class="bubble">${z.Text}</div>
              ${Y == null ? "" : y`<div class="extra">${Y}</div>`}
            </>`;
    })}
        </>
        <div class="footer">
          <textarea ref=${m}
            placeholder=${a} disabled=${d}
            rows=${i} value=${b}
            onInput=${v} onKeyDown=${C}
          />
          <div class="bottom-row">
            ${I ?? y`<div class="controls"/>`}
            <button class="submit" aria-label=${c ?? "send"}
              disabled=${d || b.trim() === ""}
              onClick=${S}
            >
              <span class="send-icon"/>
              ${c == null ? "" : y`<span>${c}</span>`}
            </>
          </>
        </>
      </>`;
  });
}
const ky = /* @__PURE__ */ Z("jcl-component.legacy-chatview", `
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
function hd(e) {
  return "";
}
function gd(e) {
  return "";
}
function md(e) {
  return U(() => {
    Cy(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    return y`<div class="controls ${t}"
        style=${n} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
const Cy = /* @__PURE__ */ Z("jcl-component.legacy-chatview-controls", `
    .jcl-component.legacy-chatview .controls {
      display:flex; align-items:center; flex-wrap:wrap;
      flex:1 1 auto;
      gap:6px;
    }
  `);
let ha, pr;
const $y = Go(() => Promise.all([
  gt("jspreadsheet-ce"),
  gt("@jspreadsheet/formula")
]).then(([e, t]) => {
  ha = e.default ?? e, pr = t.default ?? t, jy();
})), ga = [];
function jy() {
  for (; ga.length > 0; )
    wi(ga.shift());
}
function wi(e) {
  return pr == null ? (ga.push(e), !0) : typeof pr?.setFormula != "function" ? (console.warn(
    '@jspreadsheet/formula: "setFormula" is unavailable - custom formulas could not be registered'
  ), !1) : (pr.setFormula(e), !0);
}
function Iy(e, t) {
  ln("formula name", e), Zt("formula function", t), wi({ [e.toUpperCase()]: t });
}
function Sy(e) {
  St("formula set", e);
  const t = /* @__PURE__ */ Object.create(null);
  for (const [n, o] of Object.entries(e))
    typeof o == "function" && (t[n.toUpperCase()] = o);
  wi(t);
}
function _y(e) {
  return U(() => {
    Dy();
    const t = ao($y);
    e = K(e);
    const n = D(e.Class) ?? "", o = V(e.Data, (v) => Array.isArray(v)) ?? [[]], r = V(e.Columns, (v) => Array.isArray(v)), a = bn(e.minRows) ?? 5, i = bn(e.minColumns), s = J(e.readonly) ?? !1, c = J(e.disabled) ?? !1, d = T(e.onDataChange), u = T(e.onCellChange), p = T(e.onMount), l = T(e.onUnmount), f = q(null), h = q(void 0), g = q(o), b = q(e.Data), m = q({});
    return m.current = { onDataChange: d, onCellChange: u, onUnmount: l }, Ce(() => {
      if (!t)
        return;
      const v = f.current;
      if (v == null)
        return;
      const S = ha(v, {
        worksheets: [{
          data: g.current,
          columns: r,
          minDimensions: [i ?? r?.length ?? 4, a],
          onchange: (R, L, $, I, M) => {
            const _ = h.current;
            g.current = _.getData(), E(
              'Spreadsheet callback "onCellChange"',
              m.current.onCellChange,
              $,
              I,
              M
            ), E(
              'Spreadsheet callback "onDataChange"',
              m.current.onDataChange,
              g.current
            );
          }
        }]
      })[0];
      h.current = S;
      const j = (R) => {
        const L = R.querySelector(
          "input, textarea"
        );
        if (L == null || L.value !== "")
          return;
        const $ = Number(R.getAttribute("data-x")), I = Number(R.getAttribute("data-y")), M = S.getValueFromCoords($, I);
        typeof M == "string" && M !== "" && (L.value = M);
      }, x = new MutationObserver((R) => {
        for (const L of R)
          for (const $ of L.addedNodes) {
            if (!($ instanceof HTMLElement) || $.tagName !== "INPUT" && $.tagName !== "TEXTAREA")
              continue;
            const I = $.closest("td[data-x][data-y]");
            I instanceof HTMLElement && j(I);
          }
      });
      return x.observe(v, { childList: !0, subtree: !0 }), E(
        'Spreadsheet callback "onMount"',
        p,
        {
          instance: S,
          getData: () => S.getData(),
          setData: (R) => {
            g.current = R, b.current = R, S.setData(R);
          },
          getCell: (R, L) => S.getValueFromCoords(R, L),
          setCell: (R, L, $) => {
            S.setValueFromCoords(R, L, $), g.current = S.getData();
          },
          focus: () => f.current?.querySelector("td")?.focus()
        }
      ), () => {
        x.disconnect(), E(
          'Spreadsheet callback "onUnmount"',
          m.current.onUnmount
        ), ha.destroy(v), h.current = void 0;
      };
    }, [t]), Ce(() => {
      const v = h.current;
      v != null && e.Data !== b.current && (b.current = e.Data, g.current = e.Data ?? [[]], v.setData(g.current));
    }), Ce(() => {
      const v = f.current;
      v != null && (v.style.opacity = c ? "0.5" : "", v.style.pointerEvents = s || c ? "none" : "");
    }, [s, c]), y`<div
        class="jcl-component spreadsheeteditor ${c ? "disabled" : ""} ${n}"
        ...${e.RestProps} ref=${f}
      />`;
  });
}
const Dy = /* @__PURE__ */ Z("jcl-component.spreadsheeteditor", `
    .jcl-component.spreadsheeteditor {
      position:relative; overflow:auto;
      background:white; color:black;
      font-size:14px;
    }

    .jcl-component.spreadsheeteditor.disabled {
      opacity:0.6; pointer-events:none;
    }
  `), Zr = "application/x-jcl-kanban-task+json";
function Ly(e, t, n) {
  return e.Id != null ? "" + e.Id : bi(e);
}
function My(e, t, n, o = !1, r = "") {
  return typeof e.toHTML == "function" ? y`<div class="default" dangerouslySetInnerHTML=${{ __html: e.toHTML() }}/>` : y`<div class="default">
        <div class="title">${e.Title ?? "" + e}</>
        ${e.Description != null && y`<div class="description">${e.Description}</>`}
      </>`;
}
function Ay(e, t) {
  return y`<div class="default">
      <div class="title">${e.Title ?? "" + e}</>
      <div class="count">${t.length}${e.Limit != null ? `/${e.Limit}` : ""}</>
    </>`;
}
function Ty(e) {
  return U(() => {
    Ry(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Columns, (_) => $e(_, Me)) ?? Te("Columns"), o = V(e.Tasks, (_) => $e(_, Me)) ?? Te("Tasks"), r = D(e.Placeholder), a = T(e.KeyOfTask) ?? Ly, i = T(e.TaskRenderer) ?? My, s = T(e.ColumnHeaderRenderer) ?? Ay, c = T(e.onTaskClick), d = T(e.onColumnClick), u = J(e.allowsReorder) ?? !0, p = J(e.allowsCrossColumnDrag) ?? !0, l = ke(e.SelectionLimit) ?? 1, f = T(e.TaskMayBeDropped), h = T(e.onTaskMove), g = u && h != null, b = p && h != null;
    Gs(n, '"Columns"'), Gs(o, '"Tasks"');
    const [m, v] = Ge({}), C = q([]);
    function S(_) {
      C.current = [...C.current, _];
    }
    function j(_) {
      const z = [];
      C.current.forEach((N) => {
        N.FromColumn.Id === _ ? E(
          'KanbanBoard callback "onTaskMove"',
          h,
          N.Task,
          N.FromColumn,
          N.ToColumn,
          N.ToIndex
        ) : z.push(N);
      }), C.current = z;
    }
    const x = {};
    n.forEach((_) => {
      x[_.Id] = _;
    });
    const w = {};
    o.forEach((_, z) => {
      w[a(_, o, z)] = _;
    });
    function R(_) {
      return x[_.ColumnId];
    }
    function L(_) {
      return o.filter((z) => z.ColumnId === _);
    }
    function $(_, z) {
      const N = _.target.closest?.(".itemview");
      if (N?.Item == null)
        return z.length;
      const Y = N.getBoundingClientRect().top + N.offsetHeight / 2, Q = _.clientY < Y ? "before" : "after", fe = z.indexOf(N.Item);
      return fe < 0 ? z.length : fe + (Q === "before" ? 0 : 1);
    }
    function I(_) {
      b && _.dataTransfer?.types.includes(Zr) && _.preventDefault();
    }
    function M(_, z) {
      return (N) => {
        if (!b)
          return;
        const Y = N.dataTransfer?.getData(Zr);
        if (Y == null || Y === "")
          return;
        let Q;
        try {
          Q = JSON.parse(Y);
        } catch {
          return;
        }
        const fe = $(N, z);
        Q.forEach((P, X) => {
          const te = w[P];
          if (te == null)
            return;
          const pe = R(te);
          if (pe == null || pe === _)
            return;
          const ve = fe + X;
          f != null && !Ke(
            'KanbanBoard callback "TaskMayBeDropped"',
            f,
            te,
            _,
            ve
          ) || S({ Task: te, FromColumn: pe, ToColumn: _, ToIndex: ve });
        });
      };
    }
    return y`<div class="jcl-component kanbanboard ${t}" ...${e.RestProps}>
        ${n.map((_) => {
      const z = L(_.Id), N = m[_.Id] ?? [];
      return y`<div class="column" key=${_.Id}
            onDragOver=${I} onDrop=${M(_, z)}
            onDragEnd=${() => j(_.Id)}
          >
            <div class="column-header" onClick=${(Y) => E(
        'KanbanBoard callback "onColumnClick"',
        d,
        _,
        Y
      )}>
              ${Ke(
        'KanbanBoard callback "ColumnHeaderRenderer"',
        s,
        _,
        z
      )}
            </div>
            <${zc}
              Class="column-body"
              List=${z} Placeholder=${r}
              KeyOfListItem=${a} ListItemRenderer=${i}
              onListItemClick=${(Y, Q, fe, P) => E('KanbanBoard callback "onTaskClick"', c, Y, _, P)}
              selectedItems=${N} SelectionLimit=${l}
              onSelectionChange=${(Y) => v(
        (Q) => ({ ...Q, [_.Id]: Y })
      )}
              onListItemMove=${g ? (Y, Q) => {
        Q.length !== 0 && Q.forEach((fe) => E(
          'KanbanBoard callback "onTaskMove"',
          h,
          fe,
          _,
          _,
          Y.indexOf(fe)
        ));
      } : void 0}
              DragMIMEType=${b ? Zr : void 0}
              SerializeListItems=${(Y) => JSON.stringify(
        Y.map((Q, fe) => a(Q, Y, fe))
      )}
            />
          </>`;
    })}
      </>`;
  });
}
const Ry = /* @__PURE__ */ Z("jcl-component.kanbanboard", `
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
let bd;
const Fy = Go(() => gt("uqr").then((e) => {
  bd = e.renderSVG;
})), Oy = ["L", "M", "Q", "H"];
function zy(e) {
  return U(() => {
    Vy();
    const t = ao(Fy);
    e = K(e);
    const n = D(e.Class) ?? "", o = ae(e.Value) ?? Te("Value"), r = V(e.ECCLevel, (l) => he(l, [...Oy])) ?? "M", a = ke(e.BorderWidth) ?? 1, i = wr(e.minVersion, 1, 40) ?? 1, s = wr(e.maxVersion, i, 40) ?? 40, c = Dt(e.ForegroundColor) ?? "currentColor", d = Dt(e.BackgroundColor) ?? "transparent", u = D(e.Label), p = Qt(() => t ? bd(o, {
      ecc: r,
      border: a,
      minVersion: i,
      maxVersion: s,
      blackColor: c,
      whiteColor: d
    }) : "", [
      t,
      o,
      r,
      a,
      i,
      s,
      c,
      d
    ]);
    return y`<div
        class="jcl-component legacy-qrcode-view ${n}"
        role="img" aria-label=${u ?? o}
        dangerouslySetInnerHTML=${{ __html: p }}
        ...${e.RestProps}
      />`;
  });
}
const Vy = /* @__PURE__ */ Z("jcl-component.qrcodeview", `
    .jcl-component.legacy-qrcode-view {
      display:inline-block; position:relative;
      width:160px; height:160px;
    }

    .jcl-component.legacy-qrcode-view > svg {
      display:block;
      width:100%; height:100%;
    }
  `), En = /* @__PURE__ */ Z("jcl-component.styled-input", `
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
function yd(e) {
  return U(() => {
    Er(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = V(e.Variant, (s) => he(s, ["default", "destructive", "outline", "secondary", "ghost"])) ?? "default", r = V(e.Size, (s) => he(s, ["xs", "small", "normal", "large"])) ?? "normal", a = e.children, i = ht(r);
    return qo("button", `jcl-component styled-button variant-${o} ${i} ${t}`, void 0, e.RestProps, n, a);
  });
}
const Er = /* @__PURE__ */ Z("jcl-component.styled-button", `
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
function ma(e) {
  return U(() => {
    Ey(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = V(e.Value, (h) => Jt(h) || Je(h));
    const r = V(e.Size, (h) => he(h, ["small", "normal", "large"])) ?? "normal", a = J(e.disabled), i = T(e.onValueInput), s = T(e.onClick);
    o = o ?? wt;
    const { actualValue: c, actualDisabling: d } = lt(o, a), u = c == !0, p = c == null || Je(o), l = le((h) => {
      if (Ae(h, d), d == !0)
        return;
      E('styledCheckbox callback "onClick"', s, h);
      const g = h.target.checked;
      E(
        'styledCheckbox callback "onValueInput"',
        i,
        g,
        h
      );
    }, [d, s, i]), f = ht(r);
    return y`<div class="jcl-component styled-checkbox ${f} ${d ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="checkbox"
          checked=${u} indeterminate=${p}
          disabled=${d} onClick=${l} ...${e.RestProps}
        />
      </>`;
  });
}
const Ey = /* @__PURE__ */ Z("jcl-component.styled-checkbox", `
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
function xd(e) {
  return U(() => {
    Ny(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = V(e.Value, (f) => Jt(f) || Je(f));
    const r = V(e.Size, (f) => he(f, ["small", "normal", "large"])) ?? "normal", a = J(e.disabled), i = T(e.onValueInput), s = T(e.onClick);
    o = o ?? wt;
    const { actualValue: c, actualDisabling: d } = lt(o, a), u = c == !0, p = le((f) => {
      if (Ae(f, d), d == !0)
        return;
      E('styledRadiobutton callback "onClick"', s, f);
      const h = f.target.checked;
      E(
        'styledRadiobutton callback "onValueInput"',
        i,
        h,
        f
      );
    }, [d, s, i]), l = ht(r);
    return y`<div class="jcl-component styled-radiobutton ${l} ${d ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="radio" checked=${u} disabled=${d} onClick=${p} ...${e.RestProps}/>
      </>`;
  });
}
const Ny = /* @__PURE__ */ Z("jcl-component.styled-radiobutton", `
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
function By(e) {
  return U(() => {
    Wy(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = qe(e.Value), r = qe(e.Min ?? e.Minimum), a = qe(e.Low ?? e.lowerBound), i = qe(e.Opt ?? e.Optimum), s = qe(e.High ?? e.upperBound), c = qe(e.Max ?? e.Maximum), d = V(e.Size, (p) => he(p, ["small", "normal", "large"])) ?? "normal", u = ht(d);
    return y`<div class="jcl-component styled-gauge ${u} ${t}" style=${n}>
        <meter
          value=${o} min=${r} low=${a} opt=${i}
          high=${s} max=${c} ...${e.RestProps}
        />
      </>`;
  });
}
const Wy = /* @__PURE__ */ Z("jcl-component.styled-gauge", `
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
function Hy(e) {
  return U(() => {
    Gy(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = qe(e.Value), r = qe(e.Max ?? e.Maximum), a = V(e.Size, (s) => he(s, ["small", "normal", "large"])) ?? "normal", i = ht(a);
    return y`<div class="jcl-component styled-progressbar ${i} ${t}" style=${n}>
        <progress value=${o} max=${r} ...${e.RestProps}/>
      </>`;
  });
}
const Gy = /* @__PURE__ */ Z("jcl-component.styled-progressbar", `
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
function Uy(e) {
  return U(() => {
    Ky(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (I) => ut(I) || Je(I)), r = qe(e.Min ?? e.Minimum), a = V(e.Step, (I) => To(I, 0, 1 / 0, !1, !1)), i = qe(e.Max ?? e.Maximum), s = V(e.Hashmarks, (I) => $e(I, Ee)), c = V(e.Size, (I) => he(I, ["small", "normal", "large"])) ?? "normal", d = J(e.disabled) ?? !1, u = T(e.onValueInput), p = T(e.onInput), l = T(e.onBlur), { ViewRef: f, shownValue: h, ValueToShow: g } = vn(
      Je(o) || o != null && !isNaN(o) ? o : wt
    ), { actualValue: b, actualDisabling: m } = lt(g, d), v = ft(), { _onInput: C, _onBlur: S } = wn({
      Name: "styledSlider",
      actualDisabling: m,
      shownValue: h,
      onInput: p,
      onValueInput: u,
      onBlur: l,
      processedInput: (I) => {
        const M = h.current = parseFloat(I.target.value);
        return v(), M;
      }
    }), j = r ?? 0, x = i ?? 100;
    let w = 0;
    ut(b) && x > j && (w = Math.max(0, Math.min(
      100,
      (b - j) * 100 / (x - j)
    )));
    const { SuggestionId: R, SuggestionList: L } = kn(
      s,
      (I) => {
        const { Value: M, Label: _ } = Tt(I);
        return y`<option value=${M}>${_}</option>`;
      }
    ), $ = ht(c);
    return y`<div class="jcl-component styled-slider ${$} ${t}" style=${n}>
        <input type="range" ref=${f} disabled=${m}
          style="--jcl-slider-fill:${w}%"
          value=${b} min=${r} max=${i} step=${a}
          list=${R}
          onInput=${C} onBlur=${S} ...${e.RestProps}
        />${L}
      </>`;
  });
}
const Ky = /* @__PURE__ */ Z("jcl-component.styled-slider", `
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
  `), qy = /* @__PURE__ */ Rt({
  Name: "styledTextlineInput",
  InputType: "text",
  ClassName: "styled-textline-input",
  ValueIsValid: Ee,
  withSpellChecking: !0,
  Styled: !0
}), Xy = /* @__PURE__ */ Rt({
  Name: "styledPasswordInput",
  InputType: "password",
  ClassName: "styled-password-input",
  ValueIsValid: Ee,
  withSuggestions: !1,
  Styled: !0
});
function Yy(e) {
  return U(() => {
    En(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Value, (_) => ut(_) || Je(_)), o = J(e.invalid), r = D(e.Placeholder), a = J(e.readonly), i = qe(e.Min ?? e.Minimum), s = V(e.Step, (_) => To(_, 0, 1 / 0, !1, !1)), c = qe(e.Max ?? e.Maximum), d = wr(e.Digits, 0, 15), u = J(e.withoutTrailingZeros) ?? !1, p = V(e.Suggestions, (_) => $e(_, ut)), l = V(e.Size, (_) => he(_, ["small", "normal", "large"])) ?? "normal", f = J(e.disabled) ?? !1, h = T(e.onValueInput), g = T(e.onInput), b = T(e.onBlur);
    let m = s;
    if (d != null) {
      const _ = Math.pow(10, -d);
      m = Math.max(s ?? _, _);
    }
    const { ViewRef: v, shownValue: C, ValueToShow: S } = vn(
      Je(n) || n != null && !isNaN(n) ? n : wt,
      (_) => (d != null && ut(_) && (_ = _.toFixed(d), u && (_ = parseFloat(_))), _)
    ), { actualValue: j, actualPlaceholder: x, actualDisabling: w } = lt(S, f, r), { _onInput: R, _onBlur: L } = wn({
      Name: "styledNumberInput",
      actualDisabling: w,
      shownValue: C,
      onInput: g,
      onValueInput: h,
      onBlur: b,
      processedInput: (_) => {
        const z = parseFloat(_.target.value);
        return C.current = isNaN(z) ? void 0 : z, C.current;
      }
    }), { SuggestionId: $, SuggestionList: I } = kn(p), M = ht(l);
    return y`<input type="number" ref=${v}
        class="jcl-component styled-input styled-number-input ${M} ${t} ${o ? "invalid" : ""}"
        value=${j ?? ""} min=${i} max=${c} step=${m}
        readOnly=${a} placeholder=${x}
        disabled=${w} list=${$}
        aria-invalid=${o ? "true" : void 0}
        onInput=${R} onBlur=${L} ...${e.RestProps}
      />${I}`;
  });
}
const Jy = /* @__PURE__ */ Rt({
  Name: "styledEMailAddressInput",
  InputType: "email",
  ClassName: "styled-emailaddress-input",
  ValueIsValid: Tn,
  withMultiple: !0,
  Styled: !0
}), Zy = /* @__PURE__ */ Rt({
  Name: "styledPhoneNumberInput",
  InputType: "tel",
  ClassName: "styled-phonenumber-input",
  ValueIsValid: Mr,
  Styled: !0
}), Qy = /* @__PURE__ */ Rt({
  Name: "styledURLInput",
  InputType: "url",
  ClassName: "styled-url-input",
  ValueIsValid: at,
  Styled: !0
}), Py = /* @__PURE__ */ Pt({
  Name: "styledTimeInput",
  InputType: "time",
  ClassName: "styled-time-input",
  ValueIsValid: Ac,
  Styled: !0
}), e0 = /* @__PURE__ */ Pt({
  Name: "styledDateTimeInput",
  InputType: "datetime-local",
  ClassName: "styled-datetime-input",
  ValueIsValid: Tc,
  Styled: !0
}), t0 = /* @__PURE__ */ Pt({
  Name: "styledDateInput",
  InputType: "date",
  ClassName: "styled-date-input",
  ValueIsValid: zt,
  Pattern: pi,
  Styled: !0
}), n0 = /* @__PURE__ */ Pt({
  Name: "styledWeekInput",
  InputType: "week",
  ClassName: "styled-week-input",
  ValueIsValid: Rc,
  Pattern: fi,
  Styled: !0
}), o0 = /* @__PURE__ */ Pt({
  Name: "styledMonthInput",
  InputType: "month",
  ClassName: "styled-month-input",
  ValueIsValid: gi,
  Pattern: hi,
  Styled: !0
}), r0 = /* @__PURE__ */ Rt({
  Name: "styledSearchInput",
  InputType: "search",
  ClassName: "styled-search-input",
  ValueIsValid: Ee,
  withSpellChecking: !0,
  Styled: !0
});
function a0(e) {
  return U(() => {
    En(), i0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (m) => An(m) || Je(m)), r = J(e.readonly), a = V(e.Suggestions, (m) => $e(m, An));
    let i = ke(e.minWidth);
    const s = V(e.Size, (m) => he(m, ["small", "normal", "large"])) ?? "normal", c = J(e.disabled) ?? !1, d = T(e.onValueInput), u = T(e.onInput), { actualValue: p, actualDisabling: l } = lt(o, c), f = le((m) => {
      if (Ae(m), l == !0)
        return;
      E('styledColorInput callback "onInput"', u, m);
      const v = m.target.value;
      E(
        'styledColorInput callback "onValueInput"',
        d,
        v,
        m
      );
    }, [l, u, d]), { SuggestionId: h, SuggestionList: g } = kn(a);
    i == null && (i = 40 + (a != null && a.length > 0 ? 20 : 0));
    const b = ht(s);
    return y`<input type="color" class="jcl-component styled-input styled-color-input ${b} ${t}"
        style="min-width:${i}px; ${n}"
        value=${p} list=${h}
        disabled=${l} onInput=${f} ...${e.RestProps}
      />${g}`;
  });
}
const i0 = /* @__PURE__ */ Z("jcl-component.styled-color-input", `
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
function s0(e) {
  return U(() => {
    En(), l0(), e = K(e);
    const t = D(e.Class) ?? "", n = V(e.Value, (l) => Ee(l) || Je(l)), o = V(e.Options, (l) => $e(l, Ee)) ?? Te("Options"), r = V(e.Size, (l) => he(l, ["small", "normal", "large"])) ?? "normal", a = J(e.disabled) ?? !1, i = T(e.onValueInput), s = T(e.onInput), { actualValue: c, actualDisabling: d } = lt(n, a), u = le((l) => {
      if (Ae(l), d == !0)
        return;
      E('styledDropDown callback "onInput"', s, l);
      let f = l.target.value;
      E(
        'styledDropDown callback "onValueInput"',
        i,
        f,
        l
      );
    }, [d, s, i]), p = ht(r);
    return y`<div class="jcl-component styled-dropdown ${t}">
        <select class="jcl-component styled-input ${p}"
          disabled=${d} onInput=${u} ...${e.RestProps}
        >${o.map(
      (l) => {
        const {
          Value: f,
          Label: h,
          disabled: g,
          isRuler: b
        } = Tt(l);
        return b ? y`<hr/>` : y`<option value=${f}
                  selected=${f === c} disabled=${g}
                >${h}</option>`;
      }
    )}</select>
      </>`;
  });
}
const l0 = /* @__PURE__ */ Z("jcl-component.styled-dropdown", `
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
      ${Eo}
      ${xt}
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
function c0(e) {
  return U(() => {
    En(), d0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (m) => Ee(m) || Je(m)), r = D(e.Placeholder), a = J(e.multiple), i = D(e.Accept), s = V(e.Size, (m) => he(m, ["small", "normal", "large"])) ?? "normal", c = J(e.disabled) ?? !1, d = T(e.onValueInput), u = T(e.onInput), p = o ?? wt, { actualValue: l, actualPlaceholder: f, actualDisabling: h } = lt(p, c, r), g = le((m) => {
      if (Ae(m), h == !0)
        return;
      E('styledFileInput callback "onInput"', u, m);
      let v = Array.from(m.target.files);
      E(
        'styledFileInput callback "onValueInput"',
        d,
        v,
        m
      ), m.target.value = "";
    }, [h, u, d]), b = ht(s);
    return y`<label class="jcl-component styled-input styled-file-input ${b} ${t} ${h ? "disabled" : ""}"
        style=${n}
      >
        ${l == null ? y`<span class="placeholder">${f ?? ""}</span>` : y`<span>${l}</span>`}
        <input type="file" style="display:none"
          multiple=${a} accept=${i}
          disabled=${h} onInput=${g} ...${e.RestProps}
        />
      </label>`;
  });
}
const d0 = /* @__PURE__ */ Z("jcl-component.styled-file-input", `
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
function u0(e) {
  return U(() => {
    En(), p0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, (L) => mn(L) || Je(L)), r = J(e.invalid), a = D(e.Placeholder), i = J(e.readonly), s = ke(e.minLength), c = ke(e.maxLength), d = J(e.wrap), u = V(e.Resizability, (L) => he(L, ["none", "horizontal", "vertical", "both"])), p = J(e.SpellCheck), l = J(e.disabled) ?? !1, f = T(e.onValueInput), h = T(e.onInput), g = T(e.onBlur), { ViewRef: b, shownValue: m, ValueToShow: v } = vn(o), { actualValue: C, actualPlaceholder: S, actualDisabling: j } = lt(v, l, a), { _onInput: x, _onBlur: w } = wn({
      Name: "styledTextInput",
      actualDisabling: j,
      shownValue: m,
      onInput: h,
      onValueInput: f,
      onBlur: g
    }), R = Bt();
    return y`<textarea class="jcl-component styled-input styled-text-input ${t} ${r ? "invalid" : ""}"
        key=${R} ref=${b}
        style="${d == !0 ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${u ?? "none"}; ${n}"
        value=${C ?? ""} minlength=${s} maxlength=${c}
        readOnly=${i} placeholder=${S}
        spellcheck=${p} disabled=${j}
        aria-invalid=${r ? "true" : void 0}
        onInput=${x} onBlur=${w} ...${e.RestProps}
      />`;
  });
}
const p0 = /* @__PURE__ */ Z("jcl-component.styled-text-input", `
    .jcl-component.styled-text-input {
      height:auto; min-height:64px;      /* shadcn "Textarea" uses "min-h-16" */
      padding:8px 12px;
    }
  `);
function vd(e, t, n, o) {
  const r = D(n.Class) ?? "", a = ae(n.Style), i = Dt(n.Color), s = Rn(n.Label), c = J(n.active) ?? !1, d = J(n.disabled) ?? !1, u = V(n.Variant, (g) => he(g, ["default", "destructive", "outline", "secondary", "ghost"])) ?? "ghost", p = V(n.Size, (g) => he(g, ["xs", "small", "normal", "large"])) ?? "normal", l = T(n.onClick), f = le((g) => {
    if (d)
      return Cn(g);
    E(e + ' callback "onClick"', l, g);
  }, [d, l]), h = ht(p);
  return y`<button
      class="jcl-component styled-button ${t} variant-${u} ${h} ${c ? "active" : ""} ${r}"
      style=${a} disabled=${d}
      aria-label=${s} aria-pressed=${c ? "true" : void 0}
      onClick=${f} ...${n.RestProps}
    >${o(i)}</>`;
}
function f0(e) {
  return U(() => {
    Er(), h0(), e = K(e);
    const t = Vn(e.Value) ?? `${xr}/circle-information.png`;
    return vd(
      "styledIcon",
      "styled-icon",
      e,
      (n) => y`<span style="
          -webkit-mask-image:url(${t}); mask-image:url(${t});
          background-color:${n ?? "currentColor"};
        "/>`
    );
  });
}
const h0 = /* @__PURE__ */ Z("jcl-component.styled-icon", `
    .jcl-component.styled-icon {
      width:36px; height:36px; padding:0px;
    }

    .jcl-component.styled-icon > span {
      display:inline-block; width:16px; height:16px;
      overflow:hidden; pointer-events:none;
      ${xt}
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
function g0(e) {
  return U(() => {
    Er(), m0(), e = K(e);
    const t = V(
      e.Value,
      (n) => he(n, di)
    ) ?? "fa-question-circle-o";
    return vd(
      "styledFAIcon",
      "styled-fa-icon",
      e,
      (n) => y`<span class="fa ${t}" style="color:${n ?? "currentColor"}"/>`
    );
  });
}
const m0 = /* @__PURE__ */ Z("jcl-component.styled-fa-icon", `
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
function cn(e, t, n) {
  return U(() => {
    n = K(n);
    const o = D(n.Class) ?? "", r = ae(n.Style);
    return y`<${e} class="jcl-component ${t} ${o}"
        style=${r} ...${n.RestProps}
      >
        ${n.children}
      </>`;
  });
}
function qo(e, t, n, o, r, a) {
  return r == null ? y`<${e} class="${t}" style=${n} ...${o}>
        ${a}
      </>` : y`<${e} class="${t}" style=${n} ...${o}
        dangerouslySetInnerHTML=${{ __html: r }}
      />`;
}
function b0(e) {
  return U(() => {
    y0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = V(e.Variant, (a) => he(a, ["default", "destructive", "outline", "secondary"])) ?? "default", r = e.children;
    return qo("span", `jcl-component styled-badge variant-${o} ${t}`, void 0, e.RestProps, n, r);
  });
}
const y0 = /* @__PURE__ */ Z("jcl-component.styled-badge", `
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
function x0(e) {
  return U(() => {
    v0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = Dt(e.Color), r = D(e.Label) ?? "Loading", a = V(e.Size, (s) => he(s, ["small", "normal", "large"])) ?? "normal", i = ht(a);
    return y`<svg class="jcl-component styled-spinner ${i} ${t}"
        style=${n} role="status" aria-label=${r}
        viewBox="0 0 24 24" fill="none" stroke=${o ?? "currentColor"}
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        ...${e.RestProps}
      ><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`;
  });
}
const v0 = /* @__PURE__ */ Z("jcl-component.styled-spinner", `
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
function w0(e) {
  return U(() => {
    k0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return qo("kbd", `jcl-component styled-kbd ${t}`, void 0, e.RestProps, n, o);
  });
}
const k0 = /* @__PURE__ */ Z("jcl-component.styled-kbd", `
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
function C0(e) {
  return U(() => {
    $0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = Vn(e.Value), r = D(e.Alt), a = D(e.Fallback), i = V(e.Size, (f) => he(f, ["small", "normal", "large"])) ?? "normal", [s, c] = Ge(!1), d = q(void 0);
    d.current !== o && (d.current = o, s && c(!1));
    const u = le(() => c(!0), []), p = o != null && !s, l = ht(i);
    return y`<div class="jcl-component styled-avatar ${l} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${p ? y`<img src=${o} alt=${r} onError=${u}/>` : y`<span>${a ?? ""}</span>`}
      </>`;
  });
}
const $0 = /* @__PURE__ */ Z("jcl-component.styled-avatar", `
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
function j0(e) {
  return U(() => {
    I0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    return y`<div class="jcl-component styled-skeleton ${t}"
        style=${n} aria-hidden="true" ...${e.RestProps}
      />`;
  });
}
const I0 = /* @__PURE__ */ Z("jcl-component.styled-skeleton", `
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
function wd(e) {
  return U(() => {
    S0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = ae(e.Value) ?? Te("Value"), r = V(e.Placement, (b) => he(b, ["top", "bottom", "left", "right"])) ?? "top", a = ke(e.Delay), i = yt(jt), s = a ?? i?.TooltipDelay ?? 600, c = Bt(), [d, u] = Ge(!1), p = q(void 0);
    function l() {
      p.current != null && (clearTimeout(p.current), p.current = void 0);
    }
    function f() {
      l(), p.current = setTimeout(() => u(!0), s);
    }
    function h() {
      l(), u(!0);
    }
    function g() {
      l(), u(!1);
    }
    return Ce(() => l, []), y`<span class="jcl-component styled-tooltip ${t}"
        style=${n} aria-describedby=${d ? c : void 0}
        onMouseEnter=${f} onMouseLeave=${g}
        onFocusIn=${h} onFocusOut=${g}
        ...${e.RestProps}
      >
        ${e.children}
        ${d && y`<div class="tooltip placement-${r}"
          id=${c} role="tooltip"
        >${o}</div>`}
      </>`;
  });
}
const S0 = /* @__PURE__ */ Z("jcl-component.styled-tooltip", `
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
function ki(e) {
  const { ComponentName: t, Name: n, NamePrefix: o, onOpenChange: r, OverlayFor: a } = e, i = Bt(), s = n ?? o + i, c = q(void 0), { openOverlay: d, closeOverlay: u, OverlayIsOpen: p } = so();
  function l() {
    if (p(s)) {
      u(s);
      return;
    }
    const f = c.current, h = f?.closest(".jcl-component.overlay-base");
    (f == null || h == null) && de(
      `MissingOverlayBase: "${t}" must be used within an "OverlayBase"`
    ), d({
      Name: s,
      isModal: !1,
      ...a(f, h),
      onOpen: () => E(
        t + ' callback "onOpenChange"',
        r,
        !0
      ),
      onClose: () => E(
        t + ' callback "onOpenChange"',
        r,
        !1
      )
    });
  }
  return { OverlayName: s, ViewRef: c, closeOverlay: u, _onClick: l };
}
function kd(e) {
  return U(() => {
    _0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Name), r = T(e.Renderer) ?? Te("Renderer"), a = V(e.Placement, (p) => he(p, ["top", "bottom", "left", "right"])) ?? "bottom", i = ke(e.Width) ?? 288, s = ke(e.Height), c = T(e.onOpenChange), { ViewRef: d, _onClick: u } = ki({
      ComponentName: "styledPopover",
      Name: o,
      NamePrefix: "styled-popover-",
      onOpenChange: c,
      /**** compute the overlay position from the trigger geometry ****/
      OverlayFor: (p, l) => {
        const f = p.getBoundingClientRect(), h = l.getBoundingClientRect(), g = f.left - h.left + l.scrollLeft, b = f.top - h.top + l.scrollTop;
        let m, v;
        switch (!0) {
          case (a === "top" && s != null):
            m = g + f.width / 2 - i / 2, v = b - s - 4;
            break;
          case a === "left":
            m = g - i - 4, v = b + (s == null ? 0 : f.height / 2 - s / 2);
            break;
          case a === "right":
            m = g + f.width + 4, v = b + (s == null ? 0 : f.height / 2 - s / 2);
            break;
          default:
            m = g + f.width / 2 - i / 2, v = b + f.height + 4;
        }
        return {
          Renderer: () => y`<div class="jcl-component styled-popover-panel">
              ${r({})}
            </>`,
          OffsetX: m,
          OffsetY: v,
          Width: i,
          Height: s
        };
      }
    });
    return y`<span ref=${d}
        class="jcl-component styled-popover ${t}"
        style=${n} onClick=${u} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
const _0 = /* @__PURE__ */ Z("jcl-component.styled-popover", `
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
function D0(e) {
  return U(() => {
    Nn(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Name), r = T(e.Renderer) ?? Te("Renderer"), a = T(e.onOpenChange), { OverlayName: i, ViewRef: s, closeOverlay: c, _onClick: d } = ki({
      ComponentName: "styledDropDownMenu",
      Name: o,
      NamePrefix: "styled-dropdown-menu-",
      onOpenChange: a,
      /**** the menu panel opens below the trigger, left-aligned ****/
      OverlayFor: (p, l) => {
        const f = p.getBoundingClientRect(), h = l.getBoundingClientRect(), g = f.left - h.left + l.scrollLeft, b = f.top - h.top + l.scrollTop + f.height + 4;
        return {
          Renderer: () => y`<div class="jcl-component styled-dropdown-menu-panel"
              role="menu" onClick=${u}
            >
              ${r({})}
            </>`,
          OffsetX: g,
          OffsetY: b,
          minWidth: 128
        };
      }
    });
    function u(p) {
      const l = p.target.closest(".styled-dropdown-menu-item");
      l != null && !l.disabled && c(i);
    }
    return y`<span ref=${s}
        class="jcl-component styled-dropdown-menu ${t}"
        style=${n} onClick=${d} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
function L0(e) {
  return U(() => {
    Nn(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Icon), o = D(e.Shortcut), r = V(e.Variant, (c) => he(c, ["default", "destructive"])) ?? "default", a = J(e.disabled) ?? !1, i = T(e.onClick), s = le((c) => {
      if (a)
        return Cn(c);
      E('styledDropDownMenuItem callback "onClick"', i, c);
    }, [a, i]);
    return y`<button role="menuitem"
        class="styled-dropdown-menu-item variant-${r} ${t}"
        disabled=${a} onClick=${s} ...${e.RestProps}
      >
        ${n == null ? "" : y`<span class="icon" aria-hidden="true">${n}</>`}
        ${e.children}
        ${o == null ? "" : y`<span class="shortcut">${o}</span>`}
      </>`;
  });
}
function M0(e) {
  return U(() => {
    Nn(), e = K(e);
    const t = D(e.Class) ?? "";
    return y`<div class="styled-dropdown-menu-separator ${t}"
        role="separator" aria-hidden="true" ...${e.RestProps}
      />`;
  });
}
function A0(e) {
  return U(() => {
    Nn(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Label);
    return y`<div class="styled-dropdown-menu-group ${t}"
        role="group" ...${e.RestProps}
      >
        ${n == null ? "" : y`<div class="label">${n}</div>`}
        ${e.children}
      </>`;
  });
}
function T0(e) {
  return U(() => {
    Nn(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Icon), o = D(e.Label) ?? Te("Label"), r = J(e.disabled) ?? !1, [a, i] = Ge(!1), s = le((c) => {
      Ae(c), r || i((d) => !d);
    }, [r]);
    return y`<div class="styled-dropdown-menu-submenu ${t}"
        onMouseEnter=${r ? void 0 : () => i(!0)}
        onMouseLeave=${() => i(!1)}
        ...${e.RestProps}
      >
        <button class="submenu-trigger" aria-haspopup="menu"
          aria-expanded=${a ? "true" : "false"}
          disabled=${r} onClick=${s}
        >
          ${n == null ? "" : y`<span class="icon" aria-hidden="true">${n}</>`}
          <span>${o}</span>
          <span class="chevron"/>
        </>
        ${a && y`<div class="submenu-panel" role="menu">
          ${e.children}
        </>`}
      </>`;
  });
}
const Nn = /* @__PURE__ */ Z("jcl-component.styled-dropdown-menu", `
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
      ${No}
      ${xt}
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
  `), Cd = /* @__PURE__ */ yn("");
function R0(e) {
  return U(() => {
    Nr(), e = K(e);
    const t = T(e.Renderer) ?? Te("Renderer"), n = D(e.Placeholder) ?? "type a command or search...", o = D(e.EmptyText) ?? "no results found", [r, a] = Ge(""), i = q(void 0);
    function s(c) {
      const d = i.current;
      if (d == null)
        return;
      const u = Array.from(
        d.querySelectorAll(".styled-command-item:not([disabled])")
      );
      if (u.length === 0)
        return;
      const p = u.findIndex(
        (f) => f.classList.contains("highlighted")
      );
      function l(f) {
        p >= 0 && u[p].classList.remove("highlighted"), u[f].classList.add("highlighted"), u[f].scrollIntoView({ block: "nearest" });
      }
      switch (!0) {
        case c.key === "ArrowDown":
          c.preventDefault(), l(Math.min(p + 1, u.length - 1));
          break;
        case c.key === "ArrowUp":
          c.preventDefault(), l(Math.max(p - 1, 0));
          break;
        case c.key === "Enter":
          p >= 0 && (c.preventDefault(), u[p].click());
      }
    }
    return y`<div class="panel" ref=${i}>
        <div class="search">
          <span class="search-icon"/>
          <input type="text" autofocus
            value=${r} placeholder=${n}
            onInput=${(c) => a(c.target.value)}
            onKeyDown=${s}
          />
        </>
        <div class="list">
          <${Cd.Provider} value=${r}>
            ${t({ Filter: r })}
          </>
        </>
        <div class="empty">${o}</div>
      </>`;
  });
}
function F0(e) {
  return U(() => {
    Nr(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Name), r = T(e.Renderer) ?? Te("Renderer"), a = D(e.Placeholder), i = D(e.EmptyText), s = ke(e.Width) ?? 512, c = T(e.onOpenChange), { OverlayName: d, ViewRef: u, closeOverlay: p, _onClick: l } = ki({
      ComponentName: "styledCommandPalette",
      Name: o,
      NamePrefix: "styled-command-palette-",
      onOpenChange: c,
      /**** the palette opens horizontally centered, at 15% from the top ****/
      OverlayFor: (h, g) => {
        const b = g.scrollLeft + Math.max(0, (g.clientWidth - s) / 2), m = g.scrollTop + g.clientHeight * 0.15;
        return {
          Renderer: () => y`<div class="jcl-component styled-command-palette"
              onClick=${f}
            >
              <${R0}
                Renderer=${r} Placeholder=${a} EmptyText=${i}
              />
            </>`,
          OffsetX: b,
          OffsetY: m,
          Width: s
        };
      }
    });
    function f(h) {
      const g = h.target.closest(".styled-command-item");
      g != null && !g.disabled && p(d);
    }
    return y`<span ref=${u}
        class="jcl-component styled-command-palette-trigger ${t}"
        style=${n} onClick=${l} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
function O0(e) {
  return U(() => {
    Nr(), Nn(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Icon), o = D(e.Value) ?? Te("Value"), r = D(e.Keywords), a = D(e.Shortcut), i = J(e.disabled) ?? !1, s = T(e.onClick), c = yt(Cd);
    if (c.trim() !== "" && !(o + " " + (r ?? "")).toLowerCase().includes(c.toLowerCase().trim()))
      return "";
    const d = le((p) => {
      if (i)
        return Cn(p);
      E('styledCommandItem callback "onClick"', s, p);
    }, [i, s]), u = At(e.children);
    return y`<button role="option"
        class="styled-command-item ${t}"
        disabled=${i} onClick=${d}
      >
        ${n == null ? "" : y`<span class="icon" aria-hidden="true">${n}</>`}
        ${u.length === 0 ? o : u}
        ${a == null ? "" : y`<span class="shortcut">${a}</span>`}
      </>`;
  });
}
function z0(e) {
  return U(() => {
    Nr(), Nn(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Label);
    return y`<div class="styled-command-group ${t}" role="group"
        ...${e.RestProps}
      >
        ${n == null ? "" : y`<div class="label">${n}</div>`}
        ${e.children}
      </>`;
  });
}
const Nr = /* @__PURE__ */ Z("jcl-component.styled-command-palette", `
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
      ${xt}
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
function V0(e) {
  return U(() => {
    E0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Title), r = ae(e.Description), a = V(e.Variant, (d) => he(d, ["default", "info", "success", "warning", "destructive"])) ?? "default", i = J(e.closable) ?? !0, s = yt(wc), c = le((d) => {
      Ae(d), s?.closeToast(s.Name);
    }, [s]);
    return y`<div class="jcl-component styled-toast variant-${a} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${a === "default" ? "" : y`<span class="icon"/>`}
        <div class="body">
          ${o == null ? "" : y`<div class="title">${o}</div>`}
          ${r == null ? "" : y`<div class="description">${r}</div>`}
          ${e.children}
        </>
        ${i && y`<button class="close" aria-label="close"
          onClick=${c}
        />`}
      </>`;
  });
}
const E0 = /* @__PURE__ */ Z("jcl-component.styled-toast", `
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
      ${xt}
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
function N0(e) {
  return B0(), cn("div", "styled-card", e);
}
const B0 = /* @__PURE__ */ Z("jcl-component.styled-card", `
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
function W0(e) {
  return Br(), cn("div", "styled-card-header", e);
}
function H0(e) {
  return Br(), cn("div", "styled-card-action", e);
}
function G0(e) {
  return Br(), cn("div", "styled-card-content", e);
}
function U0(e) {
  return Br(), cn("div", "styled-card-footer", e);
}
const Br = /* @__PURE__ */ Z("jcl-component.styled-card-parts", `
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
function K0(e) {
  return U(() => {
    $d(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return qo("div", `jcl-component styled-card-title ${t}`, void 0, e.RestProps, n, o);
  });
}
function q0(e) {
  return U(() => {
    $d(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Value), o = e.children;
    return qo("div", `jcl-component styled-card-description ${t}`, void 0, e.RestProps, n, o);
  });
}
const $d = /* @__PURE__ */ Z("jcl-component.styled-card-texts", `
    .jcl-component.styled-card-title {
      font-weight:600; line-height:1;
    }

    .jcl-component.styled-card-description {
      font-size:14px;
      color:var(--jcl-muted-fg-color,#737373);
    }
  `);
function X0(e) {
  return U(() => {
    Y0(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Side, (h) => he(h, ["left", "right"])) ?? "left", r = V(e.Variant, (h) => he(h, ["default", "floating", "inset"])) ?? "default";
    let a = V(e.collapsible, (h) => Jt(h) || he(h, ["none", "icon", "offcanvas"])) ?? "icon";
    const i = J(e.overlaid) ?? !1;
    let s = J(e.collapsed);
    const c = T(e.onCollapseChange);
    switch (a) {
      // booleans remain supported, but are
      case !0:
        a = "icon";
        break;
      // mapped onto modes
      case !1:
        a = "none";
    }
    const d = a !== "none", u = ft(), p = Ot(s, !1);
    s = p.current;
    const l = le((h) => {
      Ae(h);
      const g = !p.current;
      p.current = g, u(), E(
        'styledSidebar callback "onCollapseChange"',
        c,
        g
      );
    }, [c, u]), f = `jcl-component styled-sidebar side-${o} variant-${r} ` + (d ? `collapsible collapse-${a} ` : "") + (i && d ? "overlaid " : "") + (s && d ? "collapsed " : "") + t;
    return y`<aside class="${f}" style=${n} ...${e.RestProps}>
        ${d && y`<button class="collapse-button"
          aria-label=${s ? "expand sidebar" : "collapse sidebar"}
          aria-expanded=${s ? "false" : "true"}
          onClick=${l}
        ><span class="chevron"/></>`}
        ${e.children}
      </>`;
  });
}
const Y0 = /* @__PURE__ */ Z("jcl-component.styled-sidebar", `
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
      ${Ga}
      ${xt}
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
function J0(e) {
  return Ci(), cn("div", "styled-sidebar-header", e);
}
function Z0(e) {
  return Ci(), cn("div", "styled-sidebar-content", e);
}
function Q0(e) {
  return Ci(), cn("div", "styled-sidebar-footer", e);
}
const Ci = /* @__PURE__ */ Z("jcl-component.styled-sidebar-sections", `
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
function P0(e) {
  return U(() => {
    $i(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Icon), o = ae(e.Value), r = J(e.active) ?? !1, a = J(e.disabled) ?? !1, i = T(e.onClick), s = e.children, c = le((u) => {
      if (a)
        return Cn(u);
      E('styledSidebarItem callback "onClick"', i, u);
    }, [a, i]), d = "jcl-component styled-sidebar-item " + (r ? "active " : "") + t;
    return y`<button class="${d}" disabled=${a}
        aria-current=${r ? "true" : void 0}
        onClick=${c} ...${e.RestProps}
      >
        ${n == null ? "" : y`<span class="icon" aria-hidden="true">${n}</>`}
        ${o == null ? y`<span class="label">${s}</>` : y`<span class="label" dangerouslySetInnerHTML=${{ __html: o }}/>`}
      </>`;
  });
}
function ex(e) {
  return U(() => {
    $i(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    return y`<div class="jcl-component styled-sidebar-separator ${t}"
        style=${n} role="separator" aria-hidden="true" ...${e.RestProps}
      />`;
  });
}
function tx(e) {
  return U(() => {
    $i(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Label);
    return y`<div class="jcl-component styled-sidebar-group ${t}"
        style=${n} ...${e.RestProps}
      >
        ${o == null ? "" : y`<div class="label">${o}</div>`}
        ${e.children}
      </>`;
  });
}
const $i = /* @__PURE__ */ Z("jcl-component.styled-sidebar-parts", `
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
function nx(e) {
  return U(() => {
    ox(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Label), r = ae(e.Description), a = ae(e.Error), i = D(e.for), s = V(e.Orientation, (p) => he(p, ["vertical", "horizontal"])) ?? "vertical", c = J(e.required) ?? !1, d = J(e.disabled) ?? !1, u = a != null && a.trim() !== "";
    return y`<div role="group"
        class="jcl-component styled-field ${s === "horizontal" ? "horizontal" : ""} ${u ? "invalid" : ""} ${d ? "disabled" : ""} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${o == null ? "" : y`<label for=${i}
          class=${c ? "required" : void 0}
        >${o}</label>`}
        ${e.children}
        ${r == null ? "" : y`<p class="description">${r}</p>`}
        ${u ? y`<div class="error" role="alert">${a}</div>` : ""}
      </>`;
  });
}
const ox = /* @__PURE__ */ Z("jcl-component.styled-field", `
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
function rx(e) {
  return U(() => {
    jd(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    return y`<div role="group"
        class="jcl-component styled-input-group ${t}"
        style=${n} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
function ax(e) {
  return U(() => {
    jd(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.align ?? e.Alignment, (a) => he(a, ["start", "end", "top", "bottom"])) ?? "start", r = le((a) => {
      if (a.target.closest("button") != null)
        return;
      a.currentTarget.parentElement?.querySelector("input, textarea, select")?.focus();
    }, []);
    return y`<div role="group"
        class="jcl-component styled-input-group-addon align-${o} ${t}"
        style=${n} onClick=${r} ...${e.RestProps}
      >
        ${e.children}
      </>`;
  });
}
const jd = /* @__PURE__ */ Z("jcl-component.styled-input-group", `
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
function ix(e) {
  return U(() => {
    sx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style);
    let o = V(e.Value, (f) => Jt(f) || Je(f));
    const r = V(e.Size, (f) => he(f, ["small", "normal", "large"])) ?? "normal", a = J(e.disabled), i = T(e.onValueInput), s = T(e.onClick);
    o = o ?? wt;
    const { actualValue: c, actualDisabling: d } = lt(o, a), u = c == !0, p = le((f) => {
      if (Ae(f, d), d == !0)
        return;
      E('styledSwitch callback "onClick"', s, f);
      const h = f.target.checked;
      E(
        'styledSwitch callback "onValueInput"',
        i,
        h,
        f
      );
    }, [d, s, i]), l = ht(r);
    return y`<div class="jcl-component styled-switch ${l} ${d ? "disabled" : ""} ${t}"
        style=${n}
      >
        <input type="checkbox" role="switch"
          checked=${u} disabled=${d}
          onClick=${p} ...${e.RestProps}
        />
      </>`;
  });
}
const sx = /* @__PURE__ */ Z("jcl-component.styled-switch", `
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
function Id(e) {
  return U(() => {
    Sd(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Value), r = V(e.Options, (u) => $e(u, Ee)) ?? Te("Options"), a = V(e.Size, (u) => he(u, ["small", "normal", "large"])) ?? "normal", i = J(e.disabled) ?? !1, s = T(e.onValueInput), c = le((u, p) => {
      Ae(p), E(
        'styledMultiSwitch callback "onValueInput"',
        s,
        u,
        p
      );
    }, [s]), d = ht(a);
    return y`<div role="radiogroup"
        class="jcl-component styled-multi-switch ${d} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${r.map((u) => {
      const {
        Value: p,
        Label: l,
        disabled: f
      } = Tt(u), h = he(l, di);
      return y`<button type="button" role="radio"
            class="option ${p === o ? "selected" : ""}"
            aria-checked=${p === o} aria-label=${p}
            disabled=${i || f}
            onClick=${(g) => c(p, g)}
          >${h ? y`<span class="fa ${l}"/>` : y`<span>${l}</span>`}</>`;
    })}
      </>`;
  });
}
function lx(e) {
  return U(() => {
    Sd(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Size, (i) => he(i, ["small", "normal", "large"])) ?? "normal", { Theme: r, setTheme: a } = Fr();
    return y`<${Id}
        Class=${t} Style=${n} Size=${o}
        Options=${["auto:fa-adjust", "light:fa-sun-o", "dark:fa-moon-o"]}
        Value=${r}
        onValueInput=${(i) => a(i)}
        ...${e.RestProps}
      />`;
  });
}
const Sd = /* @__PURE__ */ Z("jcl-component.styled-multi-switch", `
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
function cx(e) {
  return U(() => {
    dx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Value), r = V(e.Options, (u) => $e(u, Ee)) ?? Te("Options"), a = V(e.Orientation, (u) => he(u, ["vertical", "horizontal"])) ?? "vertical", i = V(e.Size, (u) => he(u, ["small", "normal", "large"])) ?? "normal", s = J(e.disabled) ?? !1, c = T(e.onValueInput), d = le((u, p) => {
      E(
        'styledRadioGroup callback "onValueInput"',
        c,
        u,
        p
      );
    }, [c]);
    return y`<div role="radiogroup"
        class="jcl-component styled-radio-group ${a === "horizontal" ? "horizontal" : ""} ${t}"
        style=${n} ...${e.RestProps}
      >
        ${r.map((u) => {
      const {
        Value: p,
        Label: l,
        disabled: f
      } = Tt(u);
      return y`<label class="option">
            <${xd} Size=${i}
              value=${p === o} disabled=${s || f}
              onClick=${(h) => d(p, h)}
            />
            <span>${l}</span>
          </label>`;
    })}
      </>`;
  });
}
const dx = /* @__PURE__ */ Z("jcl-component.styled-radio-group", `
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
function ux(e) {
  return U(() => {
    px(), fx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Value), r = V(e.Options, (te) => $e(te, Ee)) ?? Te("Options"), a = D(e.Placeholder), i = D(e.EmptyText) ?? "no items found", s = V(e.Size, (te) => he(te, ["small", "normal", "large"])) ?? "normal", c = J(e.disabled) ?? !1, d = T(e.onValueInput), u = r.map((te) => {
      const { Value: pe, Label: ve } = Tt(te);
      return { Value: pe, Label: ve };
    }), p = (te) => u.find((pe) => pe.Value === te)?.Label, [l, f] = Ge(!1), [h, g] = Ge(void 0), [b, m] = Ge(-1), v = q(), C = ft(), S = h ?? p(o) ?? "", j = h == null || h.trim() === "" ? u : u.filter(
      (te) => te.Label.toLowerCase().includes(h.toLowerCase().trim())
    ), x = yt(jt), w = Ho(Rr), R = x ?? w, { Theme: L, SwatchSet: $, Locale: I, Direction: M } = R, _ = Wo(L, $);
    Ce(() => {
      if (l)
        return window.addEventListener("scroll", C, !0), window.addEventListener("resize", C), () => {
          window.removeEventListener("scroll", C, !0), window.removeEventListener("resize", C);
        };
    }, [l]);
    function z() {
      !l && !c && (f(!0), m(-1));
    }
    function N() {
      f(!1), g(void 0), m(-1);
    }
    function Y(te, pe) {
      Ae(pe), N(), E(
        'styledCombobox callback "onValueInput"',
        d,
        te.Value,
        pe
      );
    }
    function Q(te) {
      c || (g(te.target.value), f(!0), m(0));
    }
    function fe(te) {
      switch (!0) {
        case te.key === "ArrowDown":
          te.preventDefault(), z(), m(Math.min(b + 1, j.length - 1));
          break;
        case te.key === "ArrowUp":
          te.preventDefault(), m(Math.max(b - 1, 0));
          break;
        case te.key === "Enter":
          l && b >= 0 && b < j.length && Y(j[b], te);
          break;
        case te.key === "Escape":
          N();
      }
    }
    function P() {
      const te = v.current;
      if (te == null)
        return;
      const pe = te.getBoundingClientRect(), ve = window.innerHeight - pe.bottom - 8, Ne = pe.top - 8, Xe = ve < 160 && Ne > ve, rt = Math.max(
        40,
        Math.min(240, Xe ? Ne : ve)
      ), mt = Xe ? `left:${pe.left}px; bottom:${window.innerHeight - pe.top + 4}px;` : `left:${pe.left}px; top:${pe.bottom + 4}px;`;
      return to(y`
          <${jt.Provider} value=${R}>
            <div class="jcl-combobox-popup" role="listbox"
              dir=${M} lang=${I}
              style="
                ${mt} width:${pe.width}px;
                max-height:${rt}px;
                ${_}
              "
            >
              ${j.length === 0 ? y`<div class="empty">${i}</div>` : j.map((re, ee) => y`<div
                    class="option ${ee === b ? "highlighted" : ""} ${re.Value === o ? "selected" : ""}"
                    role="option" aria-selected=${re.Value === o}
                    onMouseDown=${(ie) => Y(re, ie)}
                    onMouseEnter=${() => m(ee)}
                  >
                    <span>${re.Label}</span>
                  </div>`)}
            </>
          </>
        `, document.body);
    }
    const X = ht(s);
    return y`<div class="jcl-component styled-combobox ${t}" style=${n}>
        <input type="text" class="jcl-component styled-input ${X}"
          role="combobox" aria-expanded=${l} aria-autocomplete="list"
          value=${S} placeholder=${a} disabled=${c}
          ref=${v}
          onClick=${z} onInput=${Q} onKeyDown=${fe}
          onBlur=${N} ...${e.RestProps}
        />
        ${l && P()}
      </>`;
  });
}
const px = /* @__PURE__ */ Z("jcl-component.styled-combobox", `
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
      ${Eo}
      ${xt}
    }
  `), fx = /* @__PURE__ */ Z("jcl-combobox-popup", `
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
      ${Ih}
      ${xt}
    }

    .jcl-combobox-popup > .empty {
      padding:6px 8px;
      font-size:14px; text-align:center;
      color:var(--jcl-muted-fg-color,#737373);
    }
  `);
function hx(e) {
  return U(() => {
    gx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Name), r = V(e.Value, zt), a = V(e.Min ?? e.Minimum, zt), i = V(e.Max ?? e.Maximum, zt), s = D(e.Placeholder) ?? "pick a date", c = J(e.disabled) ?? !1, d = T(e.onValueInput), u = T(e.onOpenChange), p = Bt(), l = o ?? "styled-date-picker-" + p, { closeOverlay: f } = so(), h = yt(jt)?.Locale ?? "en";
    let g = "";
    if (r != null) {
      const [v, C, S] = r.split("-").map(Number);
      g = new Intl.DateTimeFormat(h, { dateStyle: "medium" }).format(new Date(v, C - 1, S));
    }
    const b = () => y`<${Si}
        Value=${r} Min=${a} Max=${i}
        onValueInput=${(v, C) => {
      f(l), E(
        'styledDatePicker callback "onValueInput"',
        d,
        v,
        C
      );
    }}
      />`, m = y`<${yd} Variant="outline"
        Class="styled-date-picker-trigger" disabled=${c}
      >
        <span class="calendar-icon"/>
        ${r == null ? y`<span class="placeholder">${s}</span>` : y`<span>${g}</span>`}
      </>`;
    return c ? y`<span class="jcl-component styled-date-picker ${t}" style=${n}>
          ${m}
        </>` : y`<${kd}
        Class="styled-date-picker ${t}" Style=${n}
        Name=${l} Renderer=${b} Width=${262}
        onOpenChange=${u}
      >
        ${m}
      </>`;
  });
}
const gx = /* @__PURE__ */ Z("jcl-component.styled-date-picker", `
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
      ${xt}
    }

  /**** the month view needs no extra panel padding ****/

    .jcl-component.styled-popover-panel:has(.styled-month-view) {
      padding:0px;
    }
  `);
function mx(e) {
  return U(() => {
    bx(), e = K(e);
    const t = D(e.Class) ?? "";
    let n = ke(e.activeIndex);
    const o = ke(e.GapIndex), r = V(e.Variant, (f) => he(f, ["default", "line"])) ?? "default", a = J(e.accented) ?? !1, i = J(e.disabled) ?? !1, s = T(e.onActivationChange), c = ft(), d = Ot(n, 0);
    n = d.current;
    const u = le((f, h) => {
      if (i)
        return Cn(h);
      d.current = f, c(), E('styledTabStrip callback "onActivationChange"', s, f);
    }, [i, s, c]), p = le((f, h) => {
      (h.key === "Enter" || h.key === " ") && (h.preventDefault(), u(f, h));
    }, [u]), l = At(e.children).filter((f) => f?.type != null || typeof f == "number" || typeof f == "string" && f.trim() !== "");
    return y`<div
        class="jcl-component styled-tabstrip variant-${r} ${a ? "accented" : ""} ${i ? "disabled" : ""} ${t}"
        role="tablist" aria-disabled=${i ? "true" : void 0}
        ...${e.RestProps}
      >
        ${l.map((f, h) => {
      const g = h === o ? y`<div class="gap"/>` : "", b = h === n;
      return y`${g}<div
            class="${b ? "active" : ""} ${i ? "disabled" : ""} tab"
            role="tab" aria-selected=${b ? "true" : "false"}
            tabIndex=${i || b ? -1 : 0}
            onClick=${b ? void 0 : (m) => u(h, m)}
            onKeyDown=${b ? void 0 : (m) => p(h, m)}
          >${f}</>`;
    })}
      </>`;
  });
}
const bx = /* @__PURE__ */ Z("jcl-component.styled-tabstrip", `
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
function yx(e) {
  return U(() => {
    xx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Items, (s) => $e(s, Ee)) ?? Te("Items"), r = T(e.onItemClick), a = le((s, c) => {
      Ae(c), E('styledBreadcrumb callback "onItemClick"', r, s, c);
    }, [r]), i = o.length - 1;
    return y`<nav class="jcl-component styled-breadcrumb ${t}"
        style=${n} aria-label="breadcrumb" ...${e.RestProps}
      ><ol>
        ${o.map((s, c) => {
      const { Value: d, Label: u } = Tt(s), p = u === "..." ? y`<li class="ellipsis" role="presentation" aria-hidden="true">…</li>` : c === i ? y`<li><span role="link" aria-disabled="true" aria-current="page">${u}</span></li>` : y`<li><a href="#" onClick=${(l) => a(d, l)}>${u}</a></li>`;
      return c === 0 ? p : y`<li class="separator" role="presentation" aria-hidden="true"></li>${p}`;
    })}
      </ol></nav>`;
  });
}
const xx = /* @__PURE__ */ Z("jcl-component.styled-breadcrumb", `
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
      ${No}
      ${xt}
    }
  `);
function _d(e) {
  return U(() => {
    Er(), vx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = ke(e.Value) ?? 1, r = ke(e.Count) ?? Te("Count"), a = J(e.accented) ?? !1, i = J(e.disabled) ?? !1, s = T(e.onValueInput), c = Math.min(Math.max(1, o), r), d = a ? "default" : "outline", u = le((l, f) => {
      Ae(f), E(
        'styledPagination callback "onValueInput"',
        s,
        l,
        f
      );
    }, [s]), p = [];
    if (r <= 7)
      for (let l = 1; l <= r; l++)
        p.push(l);
    else {
      p.push(1), c > 3 && p.push("...");
      const l = Math.max(2, c - 1), f = Math.min(r - 1, c + 1);
      for (let h = l; h <= f; h++)
        p.push(h);
      c < r - 2 && p.push("..."), p.push(r);
    }
    return y`<nav role="navigation" aria-label="pagination"
        class="jcl-component styled-pagination ${t}"
        style=${n} ...${e.RestProps}
      ><ul>
        <li><button
          class="jcl-component styled-button variant-ghost page"
          aria-label="go to previous page"
          disabled=${i || c <= 1}
          onClick=${(l) => u(c - 1, l)}
        ><span class="chevron-left"/></></li>

        ${p.map((l) => l === "..." ? y`<li><span class="ellipsis" aria-hidden="true">…</span></li>` : y`<li><button
              class="jcl-component styled-button variant-${l === c ? d : "ghost"} page"
              aria-current=${l === c ? "page" : void 0}
              disabled=${i}
              onClick=${l === c ? void 0 : (f) => u(l, f)}
            >${l}</></li>`)}

        <li><button
          class="jcl-component styled-button variant-ghost page"
          aria-label="go to next page"
          disabled=${i || c >= r}
          onClick=${(l) => u(c + 1, l)}
        ><span class="chevron-right"/></></li>
      </ul></nav>`;
  });
}
const vx = /* @__PURE__ */ Z("jcl-component.styled-pagination", `
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
      ${xt}
    }

    .jcl-component.styled-pagination .chevron-left {
      ${Ga}
    }

    .jcl-component.styled-pagination .chevron-right {
      ${No}
    }
  `);
function wx(e) {
  return cn("div", "styled-accordion", e);
}
function kx(e) {
  return U(() => {
    Cx(), e = K(e);
    const t = D(e.Class) ?? "", n = D(e.Header) ?? Te("Header");
    let o = J(e.expanded);
    const r = J(e.disabled) ?? !1, a = T(e.onExpansionChange), i = ft(), s = Bt(), c = s + "-fold-header", d = s + "-fold-content", u = Ot(o, !1);
    o = u.current;
    const p = le((l) => {
      if (Ae(l), r)
        return;
      const f = !u.current;
      u.current = f, i(), E('styledAccordionFold callback "onExpansionChange"', a, f);
    }, [r, a, i]);
    return y`<div
        class="jcl-component styled-accordion-fold ${r ? "disabled" : ""} ${t}"
        ...${e.RestProps}
      >
        <button class="trigger" id=${c}
          aria-expanded=${o ? "true" : "false"} aria-controls=${d}
          disabled=${r}
          onClick=${p}
        >
          <span class="title">${n}</span>
          <span class="chevron"/>
        </>
        ${o ? y`<div
          id=${d} class="content"
          role="region" aria-labelledby=${c}
        >${e.children}</>` : ""}
      </>`;
  });
}
const Cx = /* @__PURE__ */ Z("jcl-component.styled-accordion", `
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
      ${Eo}
      ${xt}
    }

    .jcl-component.styled-accordion-fold > .trigger[aria-expanded="true"] > .chevron {
      transform:rotate(180deg);
    }

    .jcl-component.styled-accordion-fold > .content {
      padding:0px 0px 16px 0px;
      font-size:14px;
    }
  `);
function Dd(e) {
  return U(() => {
    $x(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = D(e.Caption), r = ke(e.maxHeight), a = J(e.striped) ?? !1, i = (r == null ? "" : "max-height:" + r + "px; ") + (n ?? "");
    return y`<div class="jcl-component styled-table-container ${t}"
        style=${i} ...${e.RestProps}
      >
        <table class="styled-table ${a ? "striped" : ""}">
          ${o == null ? "" : y`<caption>${o}</caption>`}
          ${e.children}
        </table>
      </>`;
  });
}
const $x = /* @__PURE__ */ Z("jcl-component.styled-table", `
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
function ji(e, t) {
  return function(o) {
    return U(() => {
      o = K(o);
      const r = D(o.Class) ?? "", a = ae(o.Style);
      return y`<${e} class="${t} ${r}"
          style=${a} ...${o.RestProps}
        >${o.children}</>`;
    });
  };
}
const Ld = /* @__PURE__ */ ji("thead", "styled-table-header"), Md = /* @__PURE__ */ ji("tbody", "styled-table-body"), jx = /* @__PURE__ */ ji("tfoot", "styled-table-footer");
function fr(e) {
  return U(() => {
    Ii(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = J(e.selected) ?? !1, r = T(e.onClick);
    return y`<tr class="styled-table-row ${o ? "selected" : ""} ${r == null ? "" : "clickable"} ${t}"
        style=${n} aria-selected=${o ? "true" : void 0}
        onClick=${r} ...${e.RestProps}
      >${e.children}</>`;
  });
}
function ba(e) {
  return U(() => {
    Ii(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.align ?? e.Alignment, (i) => he(i, ["left", "center", "right"])), r = ke(e.Width), a = (o == null ? "" : "text-align:" + o + "; ") + (r == null ? "" : "width:" + r + "px; ") + (n ?? "");
    return y`<th class="styled-table-head ${t}"
        style=${a} ...${e.RestProps}
      >${e.children}</>`;
  });
}
function hr(e) {
  return U(() => {
    Ii(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.align ?? e.Alignment, (a) => he(a, ["left", "center", "right"])), r = (o == null ? "" : "text-align:" + o + "; ") + (n ?? "");
    return y`<td class="styled-table-cell ${t}"
        style=${r} ...${e.RestProps}
      >${e.children}</>`;
  });
}
const Ii = /* @__PURE__ */ Z("jcl-component.styled-table-parts", `
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
function Ix(e) {
  return U(() => {
    Sx(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Columns, (X) => $e(X, (te) => Ee(te) || Me(te))) ?? Te("Columns"), r = V(e.Data, (X) => $e(X, Me)) ?? Te("Data");
    let a = D(e.SortKey), i = V(e.SortOrder, (X) => he(X, ["ascending", "descending"]));
    const s = J(e.selectable) ?? !1, c = J(e.striped) ?? !1;
    let d = V(e.Selection, _r);
    const u = ke(e.PageSize);
    let p = ke(e.Page);
    const l = ke(e.maxHeight), f = D(e.EmptyText) ?? "no entries", h = J(e.disabled) ?? !1, g = T(e.onSortChange), b = T(e.onSelectionChange), m = T(e.onPageChange), v = T(e.onRowClick), C = ft(), S = o.map((X) => {
      if (!Ee(X))
        return X;
      const { Value: te, Label: pe } = Tt(X);
      return { Key: te, Label: pe };
    }), j = Ot(a), x = Ot(i, "ascending");
    a = j.current, i = x.current;
    const w = le((X, te) => {
      Ae(te), j.current === X.Key ? x.current = x.current === "ascending" ? "descending" : "ascending" : (j.current = X.Key, x.current = "ascending"), C(), E(
        'styledDataTable callback "onSortChange"',
        g,
        j.current,
        x.current
      );
    }, [g, C]), R = Ot(d, []);
    d = R.current;
    function L(X, te) {
      R.current = X, C(), E(
        'styledDataTable callback "onSelectionChange"',
        b,
        X,
        te
      );
    }
    function $(X, te) {
      L(
        d.includes(X) ? d.filter((pe) => pe !== X) : [...d, X],
        te
      );
    }
    function I(X) {
      const te = r.filter((pe) => d.includes(pe)).length;
      L(te === r.length ? [] : [...r], X);
    }
    const M = yt(jt)?.Locale ?? "en", _ = (X, te) => String(X ?? "").localeCompare(String(te ?? ""), M);
    let z = [...r];
    if (a != null) {
      const te = S.find((ve) => ve.Key === a)?.Comparator ?? _, pe = i === "descending" ? -1 : 1;
      z.sort((ve, Ne) => pe * te(ve[a], Ne[a]));
    }
    const N = u == null ? 1 : Math.max(1, Math.ceil(z.length / u)), Y = Ot(p, 1);
    p = Math.min(Math.max(1, Y.current), N);
    const Q = le((X, te) => {
      Y.current = X, C(), E(
        'styledDataTable callback "onPageChange"',
        m,
        X,
        te
      );
    }, [m, C]);
    u != null && (z = z.slice((p - 1) * u, p * u));
    const fe = r.filter((X) => d.includes(X)).length, P = S.length + (s ? 1 : 0);
    return y`<div class="jcl-component styled-data-table ${t}" style=${n}
        ...${e.RestProps}
      >
        <${Dd} maxHeight=${l} striped=${c}>
          <${Ld}>
            <${fr}>
              ${s && y`<${ba} Width=${36} onClick=${Ae}>
                <${ma}
                  value=${fe === 0 ? !1 : fe === r.length ? !0 : null}
                  disabled=${h} onValueInput=${(X, te) => I(te)}
                />
              </>`}
              ${S.map((X) => y`<${ba}
                Align=${X.Align} Width=${X.Width}
              >${X.sortable == !0 ? y`<button class="sorter" disabled=${h}
                      onClick=${(te) => w(X, te)}
                    >
                      <span>${X.Label ?? X.Key}</span>
                      <span class="indicator ${a === X.Key ? i : ""}"/>
                    </>` : X.Label ?? X.Key}</>`)}
            </>
          </>
          <${Md}>
            ${z.length === 0 ? y`<${fr}>
                  <${hr} Class="empty" colspan=${P}>${f}</>
                </>` : z.map((X) => y`<${fr}
                  selected=${d.includes(X)}
                  onClick=${v == null ? void 0 : (te) => E(
      'styledDataTable callback "onRowClick"',
      v,
      X,
      te
    )}
                >
                  ${s && y`<${hr} onClick=${Ae}>
                    <${ma}
                      value=${d.includes(X)} disabled=${h}
                      onValueInput=${(te, pe) => $(X, pe)}
                    />
                  </>`}
                  ${S.map((te) => y`<${hr} Align=${te.Align}>
                    ${te.Renderer != null ? te.Renderer(X) : X[te.Key]}
                  </>`)}
                </>`)}
          </>
        </>
        ${u != null && N > 1 && y`<${_d}
          Value=${p} Count=${N} disabled=${h}
          onValueInput=${Q}
        />`}
      </>`;
  });
}
const Sx = /* @__PURE__ */ Z("jcl-component.styled-data-table", `
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
      ${xt}
      ${Eo}
    }

    .jcl-component.styled-data-table .sorter > .indicator.ascending {
      opacity:1;
      ${jh}
    }

    .jcl-component.styled-data-table .sorter > .indicator.descending {
      opacity:1;
    }
  `);
function Si(e) {
  return U(() => {
    Ad(), _x(), e = K(e);
    const t = D(e.Class) ?? "", n = ae(e.Style), o = V(e.Value, zt);
    let r = V(e.Month, gi);
    const a = V(e.Min ?? e.Minimum, zt), i = V(e.Max ?? e.Maximum, zt), s = J(e.disabled) ?? !1, c = T(e.onValueInput), d = T(e.onMonthChange), u = ft(), p = (M) => M.getFullYear() + "-" + String(M.getMonth() + 1).padStart(2, "0") + "-" + String(M.getDate()).padStart(2, "0"), l = p(/* @__PURE__ */ new Date()), f = o != null ? o.slice(0, 7) : l.slice(0, 7), h = Ot(r, f);
    r = h.current;
    const [g, b] = r.split("-").map(Number), m = le((M, _) => {
      Ae(_);
      const [z, N] = h.current.split("-").map(Number), Y = new Date(z, N - 1 + M, 1), Q = Y.getFullYear() + "-" + String(Y.getMonth() + 1).padStart(2, "0");
      h.current = Q, u(), E(
        'styledMonthView callback "onMonthChange"',
        d,
        Q
      );
    }, [d, u]), v = le((M, _) => {
      Ae(_), E(
        'styledMonthView callback "onValueInput"',
        c,
        M,
        _
      );
    }, [c]), C = yt(jt)?.Locale ?? "en";
    let S = 1;
    try {
      const M = new Intl.Locale(C);
      S = (M.getWeekInfo?.() ?? M.weekInfo)?.firstDay ?? 1;
    } catch {
    }
    const j = new Intl.DateTimeFormat(C, { month: "long", year: "numeric" }), x = new Intl.DateTimeFormat(C, { weekday: "short" }), w = [];
    for (let M = 0; M < 7; M++) {
      const _ = (S - 1 + M) % 7;
      w.push(
        // 2024-01-01 was a Monday
        x.format(new Date(2024, 0, 1 + _))
      );
    }
    const R = new Date(g, b - 1, 1), $ = ((R.getDay() + 6) % 7 - (S - 1) + 7) % 7, I = [];
    for (let M = 0; M < 42; M++) {
      const _ = new Date(g, b - 1, 1 - $ + M), z = p(_);
      I.push({
        ISODate: z,
        Day: _.getDate(),
        inMonth: _.getMonth() === b - 1,
        isDisabled: s || a != null && z < a || i != null && z > i
      });
    }
    return y`<div class="jcl-component styled-calendar-view styled-month-view ${t}"
        style=${n} ...${e.RestProps}
      >
        <div class="header">
          <button class="nav" aria-label="go to previous month"
            disabled=${s} onClick=${(M) => m(-1, M)}
          ><span class="chevron-left"/></>
          <div class="caption">${j.format(R)}</div>
          <button class="nav" aria-label="go to next month"
            disabled=${s} onClick=${(M) => m(1, M)}
          ><span class="chevron-right"/></>
        </>
        <div class="grid" role="grid">
          ${w.map((M) => y`<div class="weekday">${M}</div>`)}
          ${I.map((M) => y`<button
            class="day ${M.inMonth ? "" : "outside"} ${M.ISODate === o ? "selected" : ""} ${M.ISODate === l ? "today" : ""}"
            aria-selected=${M.ISODate === o ? "true" : void 0}
            disabled=${M.isDisabled}
            onClick=${(_) => v(M.ISODate, _)}
          >${M.Day}</>`)}
        </>
      </>`;
  });
}
const Ad = /* @__PURE__ */ Z("jcl-component.styled-calendar-view", `
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
      ${xt}
    }
    .jcl-component.styled-calendar-view .chevron-left {
      ${Ga}
    }
    .jcl-component.styled-calendar-view .chevron-right {
      ${No}
    }

  /**** multi-month views hide the navigation of their inner month views ****/

    .jcl-component.styled-calendar-view .styled-month-view > .header > .nav {
      display:none;
    }
    .jcl-component.styled-calendar-view .styled-month-view > .header {
      justify-content:center;
    }
  `), _x = /* @__PURE__ */ Z("jcl-component.styled-month-view", `
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
function Td(e) {
  const {
    Name: t,
    ClassName: n,
    PeriodKey: o,
    ValueIsPeriod: r,
    defaultPeriodFor: a,
    shiftedPeriod: i,
    CaptionFor: s,
    MonthsOf: c,
    withOrientation: d = !1,
    ensureStyles: u
  } = e, p = "on" + o + "Change";
  return function(f) {
    return U(() => {
      Ad(), u?.(), f = K(f);
      const h = D(f.Class) ?? "", g = ae(f.Style), b = V(f.Value, zt);
      let m = V(f[o], r);
      const v = V(f.Min ?? f.Minimum, zt), C = V(f.Max ?? f.Maximum, zt), S = d ? V(f.Orientation, (Y) => he(Y, ["horizontal", "vertical"])) ?? "horizontal" : void 0, j = J(f.disabled) ?? !1, x = T(f.onValueInput), w = T(f[p]), R = ft(), L = (/* @__PURE__ */ new Date()).toLocaleDateString("sv"), $ = a(b ?? L), I = Ot(m, $);
      m = I.current;
      const M = le((Y, Q) => {
        Ae(Q);
        const fe = i(I.current, Y);
        I.current = fe, R(), E(
          t + ' callback "' + p + '"',
          w,
          fe
        );
      }, [w, R]), _ = le((Y, Q) => {
        E(
          t + ' callback "onValueInput"',
          x,
          Y,
          Q
        );
      }, [x]), z = c(m), N = n + (d ? ` orientation-${S}` : "");
      return y`<div class="jcl-component styled-calendar-view ${N} ${h}"
          style=${g} ...${f.RestProps}
        >
          <div class="header">
            <button class="nav" aria-label=${"go to previous " + o.toLowerCase()}
              disabled=${j} onClick=${(Y) => M(-1, Y)}
            ><span class="chevron-left"/></>
            <div class="caption">${s(m)}</div>
            <button class="nav" aria-label=${"go to next " + o.toLowerCase()}
              disabled=${j} onClick=${(Y) => M(1, Y)}
            ><span class="chevron-right"/></>
          </>
          <div class="months">
            ${z.map((Y) => y`<${Si}
              Value=${b} Month=${Y} Min=${v} Max=${C}
              disabled=${j} onValueInput=${_}
            />`)}
          </>
        </>`;
    });
  };
}
const Dx = "\\d{4}-Q[1-4]", Lx = /* @__PURE__ */ oo(Dx);
function Mx(e) {
  return st(e, Lx);
}
const Ax = (e) => e.slice(0, 4) + "-Q" + (Math.floor((Number(e.slice(5, 7)) - 1) / 3) + 1), Tx = /* @__PURE__ */ Z("jcl-component.styled-quarter-view", `
    .jcl-component.styled-quarter-view > .months {
      display:flex; flex-flow:row nowrap; align-items:flex-start;
      gap:8px;
    }

    .jcl-component.styled-quarter-view.orientation-vertical > .months {
      flex-flow:column nowrap; align-items:center;
    }
  `), Rx = /* @__PURE__ */ Td({
  Name: "styledQuarterView",
  ClassName: "styled-quarter-view",
  PeriodKey: "Quarter",
  ValueIsPeriod: Mx,
  defaultPeriodFor: Ax,
  shiftedPeriod: (e, t) => {
    const n = Number(e.slice(0, 4)), o = Number(e.slice(6)), r = n * 4 + (o - 1) + t;
    return Math.floor(r / 4) + "-Q" + (r % 4 + 1);
  },
  CaptionFor: (e) => "Q" + e.slice(6) + " " + e.slice(0, 4),
  MonthsOf: (e) => {
    const t = Number(e.slice(0, 4)), n = Number(e.slice(6)), o = [];
    for (let r = 0; r < 3; r++) {
      const a = (n - 1) * 3 + 1 + r;
      o.push(t + "-" + String(a).padStart(2, "0"));
    }
    return o;
  },
  withOrientation: !0,
  ensureStyles: Tx
}), Fx = /* @__PURE__ */ Z("jcl-component.styled-year-view", `
    .jcl-component.styled-year-view > .months {
      display:grid;
      grid-template-columns:repeat(3,min-content);
      gap:8px;
    }
  `), Ox = /* @__PURE__ */ Td({
  Name: "styledYearView",
  ClassName: "styled-year-view",
  PeriodKey: "Year",
  ValueIsPeriod: (e) => Sr(e, 1, 9999),
  defaultPeriodFor: (e) => Number(e.slice(0, 4)),
  shiftedPeriod: (e, t) => e + t,
  CaptionFor: (e) => String(e),
  MonthsOf: (e) => {
    const t = [];
    for (let n = 1; n <= 12; n++)
      t.push(e + "-" + String(n).padStart(2, "0"));
    return t;
  },
  ensureStyles: Fx
});
let Hs = !1;
function zx() {
  Hs || (Hs = !0, kr("en", {
    "jcl.applet.compilation-error.title": "Compilation Error",
    "jcl.applet.compilation-error.prefix": 'Compiling Applet "src" failed with ',
    "jcl.applet.runtime-error.title": "Applet Failure",
    "jcl.applet.runtime-error.prefix": "JCL Applet failed with "
  }), kr("de", {
    "jcl.applet.compilation-error.title": "Kompilierungsfehler",
    "jcl.applet.compilation-error.prefix": "Kompilieren des Applet-Skripts fehlgeschlagen: ",
    "jcl.applet.runtime-error.title": "Laufzeitfehler",
    "jcl.applet.runtime-error.prefix": "JCL-Applet fehlgeschlagen: "
  }));
}
class Vx extends HTMLElement {
  _Renderer;
  constructor() {
    super(), zx();
    const t = Wd(this.getAttribute("src") ?? "");
    if (t.trim() === "") {
      this._Renderer = Rd("");
      return;
    }
    try {
      this._Renderer = new qf("PropSet", t);
    } catch (n) {
      this._Renderer = Ex(
        "compilation-error",
        n.stack ?? n.message ?? String(n)
      );
    }
  }
  connectedCallback() {
    jo(y`<${Fd} renderer=${this._Renderer}/>`, this);
  }
  disconnectedCallback() {
    jo(null, this);
  }
}
function YC() {
  customElements.get("jcl-applet") == null && customElements.define("jcl-applet", Vx);
}
function Rd(e) {
  return e.trim() === "" ? function(t) {
    return "";
  } : function(t) {
    return y`<${gn} Error=${e}/>`;
  };
}
function Ex(e, t) {
  return function(n) {
    const o = typeof navigator < "u" ? navigator.language : "en", r = aa(`jcl.applet.${e}.title`, o) ?? "Error", a = aa(`jcl.applet.${e}.prefix`, o) ?? "", i = r + `

` + a + t;
    return y`<${gn} Error=${i}/>`;
  };
}
function Fd(e) {
  Nx();
  const [t, n] = Ge(void 0), o = q(void 0), r = q(!1), a = Ho(Rr), { Locale: i, Direction: s, Theme: c, SwatchSet: d } = a, u = Wo(c, d);
  Ce(() => {
    const {
      setLocale: h,
      setDirection: g,
      setTheme: b,
      setPointerAccuracy: m,
      setHoverCapability: v,
      setPreferredMotion: C,
      setPreferredContrast: S
    } = a, j = new AbortController();
    if (window.addEventListener("languagechange", () => {
      const x = navigator.language;
      h(x), g(uc(x));
    }, { signal: j.signal }), typeof window.matchMedia == "function") {
      const x = (Q) => b(Q.matches ? "dark" : "light"), w = (Q) => m(Q.matches ? "coarse" : "fine"), R = (Q) => v(Q.matches ? "hover" : "none"), L = () => C(
        Ut("(prefers-reduced-motion: reduce)") ? "reduced" : void 0
      ), $ = () => S(
        Ut("(prefers-contrast: more)") ? "more" : Ut("(prefers-contrast: less)") ? "less" : void 0
      ), I = window.matchMedia("(prefers-color-scheme: dark)"), M = window.matchMedia("(pointer: coarse)"), _ = window.matchMedia("(hover: hover)"), z = window.matchMedia("(prefers-reduced-motion: reduce)"), N = window.matchMedia("(prefers-contrast: more)"), Y = window.matchMedia("(prefers-contrast: less)");
      I.addEventListener("change", x), M.addEventListener("change", w), _.addEventListener("change", R), z.addEventListener("change", L), N.addEventListener("change", $), Y.addEventListener("change", $), j.signal.addEventListener("abort", () => {
        I.removeEventListener("change", x), M.removeEventListener("change", w), _.removeEventListener("change", R), z.removeEventListener("change", L), N.removeEventListener("change", $), Y.removeEventListener("change", $);
      });
    }
    return () => j.abort();
  }, [a]);
  const [p] = Ba(), { localized: l } = qa(a);
  let f;
  switch (!0) {
    case p != null: {
      const h = l("jcl.applet.runtime-error.title"), g = l("jcl.applet.runtime-error.prefix"), b = h + `

` + g + (p.stack ?? p.message ?? String(p));
      f = y`<${gn} Error=${b}/>`;
      break;
    }
    case o.current !== t:
      o.current = t, r.current = !0, f = t;
      break;
    case r.current:
      f = t;
      break;
    default: {
      let h;
      try {
        h = e.renderer({});
      } catch (g) {
        const b = l("jcl.applet.runtime-error.title"), m = l("jcl.applet.runtime-error.prefix"), v = b + `

` + m + (g.stack ?? g.message ?? String(g));
        return f = y`<${gn} Error=${v}/>`, y`<div
              class="jcl-component jcl-applet"
              dir=${s} lang=${i} style=${u}
              role="alert" aria-live="assertive"
            >
             <${jt.Provider} value=${a}>
              ${f}
             </>
            </div>`;
      }
      if (oc(h))
        return h.then((g) => n(g)).catch((g) => {
          const b = l("jcl.applet.runtime-error.title"), m = l("jcl.applet.runtime-error.prefix"), v = b + `

` + m + (g.stack ?? g.message ?? String(g));
          n(y`<${gn} Error=${v}/>`);
        }), y`<div
              class="jcl-component jcl-applet" dir=${s}
              aria-busy="true" aria-live="polite"
            />`;
      f = h;
    }
  }
  return y`<div
      class="jcl-component jcl-applet"
      dir=${s} lang=${i} style=${u}
      aria-live=${p == null ? "polite" : "assertive"}
    >
     <${jt.Provider} value=${a}>
      ${f}
     </>
    </div>`;
}
const Nx = /* @__PURE__ */ Z("jcl-component.jcl-applet", `
    .jcl-component.jcl-applet {
      display:contents;
    }
  `);
function Od(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.has(o) && de(
      `InvalidArguments: the given ${t} contain entries with identical keys`
    ), n.add(o);
  }), n;
}
function Gs(e, t) {
  const n = /* @__PURE__ */ new Set();
  e.forEach((o) => {
    n.has(o) && de(
      `InvalidArguments: the given ${t} contain double entries`
    ), n.add(o);
  });
}
function xo(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.filter((o) => t.has(o) && !n.has(o) ? (n.add(o), !0) : !1);
}
function Sn(e) {
  return e != null && (e.shiftKey || e.metaKey || e.ctrlKey);
}
function dt(e, t, n) {
  return Math.max(t, Math.min(e, Math.max(t, n)));
}
function ht(e) {
  return e === "normal" ? "" : "size-" + e;
}
function zd(e, t, n, o, r) {
  function a(c, d) {
    switch (!0) {
      case c > 0:
        return -r * Math.min(1, c / o);
      case d > 0:
        return r * Math.min(1, d / o);
      default:
        return 0;
    }
  }
  const i = o === 0 ? 0 : a(
    o - (t - e.left),
    o - (e.right - t)
  ), s = o === 0 ? 0 : a(
    o - (n - e.top),
    o - (e.bottom - n)
  );
  return { vx: i, vy: s };
}
function Vd(e, t) {
  const n = Math.min(0.1, e.PanningTimestamp == null ? 0 : (t - e.PanningTimestamp) / 1e3);
  return e.PanningTimestamp = t, n;
}
function Bx(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = ((...r) => e.current[o]?.(...r));
  }), n;
}
function Ae(e, t = !1) {
  e.stopPropagation(), t == !0 && e.preventDefault();
}
const Cn = Ae;
function Ut(e) {
  return typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia(e).matches : !1;
}
function Wx(e) {
  return Lr("value", e), e?.replace(/\n[\s\S]*$/, "").replace(/[\x00-\x1F\x7F]/g, "");
}
function Hx(e) {
  return Lr("value", e), e?.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, "").replace(/\r\n/g, `
`);
}
const JC = {
  render: jo,
  html: y,
  Component: qt,
  createRef: jf,
  createContext: yn,
  toChildArray: At,
  cloneElement: Mf,
  isValidElement: Fa,
  createPortal: to,
  useId: Bt,
  useRef: q,
  useState: Ge,
  useEffect: Ce,
  useLayoutEffect: Na,
  useCallback: le,
  useMemo: Qt,
  useContext: yt,
  useErrorBoundary: Ba,
  loadedLibrary: gt,
  useLibraries: ao,
  useOnlineStatus: ig,
  useWindowSize: sg,
  useRerenderer: ft,
  useCustomization: Fr,
  useI18n: lg,
  useConfiguration: cg,
  useDragging: Fn,
  useClickDragging: io,
  useDataDragSupport: ug,
  useDataDropSupport: pg,
  usePointerDragSupport: hg,
  usePointerDropSupport: gg,
  useFileDropSupport: yg,
  useOverlayContext: so,
  useDialogContext: lo,
  useToastContext: si,
  JCL_PointerDnDContext: Qa,
  JCL_OverlayContext: Or,
  JCL_DialogContext: zr,
  JCL_ToastContext: ii,
  installStylesheetFor: Pa,
  uninstallStylesheetFor: vg,
  safelyRendered: U,
  consumeEvent: Ae,
  consumingEvent: Cn,
  MediaQueryMatches: Ut,
  PseudoRef: Cg,
  JCL_ErrorIndicator: gn,
  normalizedName: Mh,
  parseablePropSet: K,
  TextlineFromString: Wx,
  TextFromString: Hx,
  Customizable: $g,
  OverlayBase: jg,
  DialogBase: _g,
  ToastBase: Rg,
  fullsized: Eg,
  centered: li,
  horizontal: Wg,
  vertical: Gg,
  tabular: Kg,
  selective: Xg,
  stacked: Jg,
  Dummy: Qg,
  Spacer: em,
  expandingSpacer: tm,
  horizontalSeparator: nm,
  verticalSeparator: om,
  Title: rm,
  Subtitle: im,
  Label: lm,
  Description: ci,
  Fineprint: fm,
  TextlineView: dm,
  TextView: gm,
  HTMLView: bm,
  MarkdownView: _c,
  get MarkdownRenderer() {
    return Dn;
  },
  // lazily initialised
  loadMarkdownLibraries: Uo,
  loadedMarkdownRenderer: vm,
  ImageView: km,
  SVGView: $m,
  WebView: _m,
  Icon: Lm,
  FAIcon: Am,
  native: {
    Button: Rm,
    Checkbox: Om,
    Radiobutton: Vm,
    Gauge: Nm,
    Progressbar: Wm,
    Slider: Gm,
    TextlineInput: Km,
    PasswordInput: qm,
    NumberInput: Xm,
    EMailAddressInput: Ym,
    PhoneNumberInput: Jm,
    URLInput: Zm,
    TimeInput: eb,
    DateTimeInput: ob,
    DateInput: ab,
    WeekInput: sb,
    MonthInput: cb,
    SearchInput: db,
    FileInput: ub,
    ColorInput: fb,
    DropDown: gb,
    TextInput: mi
  },
  styled: {
    Button: yd,
    Icon: f0,
    FAIcon: g0,
    Checkbox: ma,
    Radiobutton: xd,
    Gauge: By,
    Progressbar: Hy,
    Slider: Uy,
    TextlineInput: qy,
    PasswordInput: Xy,
    NumberInput: Yy,
    EMailAddressInput: Jy,
    PhoneNumberInput: Zy,
    URLInput: Qy,
    TimeInput: Py,
    DateTimeInput: e0,
    DateInput: t0,
    WeekInput: n0,
    MonthInput: o0,
    SearchInput: r0,
    FileInput: c0,
    ColorInput: a0,
    DropDown: s0,
    TextInput: u0,
    Badge: b0,
    Spinner: x0,
    Kbd: w0,
    Avatar: C0,
    Skeleton: j0,
    Breadcrumb: yx,
    Pagination: _d,
    Tooltip: wd,
    Popover: kd,
    DropDownMenu: D0,
    DropDownMenuItem: L0,
    DropDownMenuSeparator: M0,
    DropDownMenuGroup: A0,
    DropDownMenuSubMenu: T0,
    CommandPalette: F0,
    CommandItem: O0,
    CommandGroup: z0,
    Toast: V0,
    Card: N0,
    CardHeader: W0,
    CardTitle: K0,
    CardDescription: q0,
    CardAction: H0,
    CardContent: G0,
    CardFooter: U0,
    Sidebar: X0,
    SidebarHeader: J0,
    SidebarContent: Z0,
    SidebarFooter: Q0,
    SidebarItem: P0,
    SidebarSeparator: ex,
    SidebarGroup: tx,
    Table: Dd,
    TableHeader: Ld,
    TableBody: Md,
    TableFooter: jx,
    TableRow: fr,
    TableHead: ba,
    TableCell: hr,
    DataTable: Ix,
    Field: nx,
    InputGroup: rx,
    InputGroupAddon: ax,
    Switch: ix,
    MultiSwitch: Id,
    ThemeSwitch: lx,
    RadioGroup: cx,
    Combobox: ux,
    MonthView: Si,
    QuarterView: Rx,
    YearView: Ox,
    DatePicker: hx,
    TabStrip: mx,
    Accordion: wx,
    AccordionFold: kx
  },
  legacy: {
    PseudoFileInput: yb,
    PseudoDropDown: vb,
    FileDropArea: kb,
    TabStrip: $b,
    AccordionFold: Ib,
    FlatListView: zc,
    NestedListView: Mb,
    RichTextEditor: Wc,
    CodeEditor: Hb,
    DrawingEditor: Xb,
    BitmapEditor: Zb,
    RealDrawEditor: ey,
    Spreadsheet: _y,
    KanbanBoard: Ty,
    registerSpreadsheetFormula: Iy,
    registerSpreadsheetFormulas: Sy,
    NoteBoard: oy,
    ChatView: wy,
    ChatViewAssistantExtra: hd,
    ChatViewUserExtra: gd,
    ChatViewControls: md,
    stickyTextNote: pd,
    stickyHTMLNote: vi,
    stickyMarkdownNote: fd,
    DataFlowProcessView: dy,
    WorldPositionOfPort: Kn,
    QRCodeView: zy
  },
  AppletView: Fd,
  AppletFailingWith: Rd
};
function Ed(e, t = !0) {
  return nt("text to be fenced", e), $a("fence insertion flag", t), e = e.replace(/\\/g, "\\\\").replace(/»/g, "\\xBB").replace(/«/g, "\\xAB"), t ? `»»»
${e}
«««` : e;
}
function Gx(e) {
  return nt("text to be unfenced", e), e = e.replace(/^[\s\S]*?»»»/, "").replace(/«««[\s\S]*$/, ""), e.replace(/\\\\|\\xBB|\\xAB/g, (t) => t === "\\\\" ? "\\" : t === "\\xBB" ? "»" : "«").replace(/^\s*\n/, "").replace(/\n\s*$/, `
`);
}
function Ux(e, t) {
  return nt("text to be filled", e), St("variable set", t), e.replace(/\{\{([^}]+)\}\}/g, (n, o) => o === "" ? "{{" : o.startsWith("~") ? (o = o.slice(1), t[o] == null ? n : Ed(t[o])) : t[o] == null ? n : t[o]);
}
const ZC = {
  fencedText: Ed,
  unfencedText: Gx,
  TextFilledFrom: Ux
};
async function Xo(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = () => n(o.error ?? new Error("Loading failed")), o.onabort = () => n(new Error("Loading was aborted")), o.readAsText(e);
  });
}
async function Yo(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = () => n(o.error ?? new Error("Loading failed")), o.onabort = () => n(new Error("Loading was aborted")), o.readAsArrayBuffer(e);
  });
}
async function Kx(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = () => n(o.error ?? new Error("Loading failed")), o.onabort = () => n(new Error("Loading was aborted")), o.readAsDataURL(e);
  });
}
async function qx(e) {
  const t = await Xo(e);
  return _i(t);
}
async function _i(e) {
  return nt("HTML document", e), Nd(e);
}
async function Xx(e) {
  const t = await Xo(e);
  return Di(t);
}
async function Di(e) {
  return nt("HTML document", e), zi(e);
}
async function Yx(e) {
  const t = await Xo(e);
  return Li(t);
}
async function Li(e) {
  nt("markdown document", e);
  try {
    await Uo();
    let t = 0;
    const n = new Cr();
    return n.use({
      gfm: !0,
      breaks: !0,
      renderer: {
        heading(o) {
          return `
${Wn(this.parser.parseInline(o.tokens))}

`;
        },
        paragraph(o) {
          return `${Wn(this.parser.parseInline(o.tokens))}

`;
        },
        list(o) {
          t++;
          let r = "";
          for (const a of o.items)
            r += this.listitem(a);
          return t--, r + `
`;
        },
        listitem(o) {
          const r = "  ".repeat(t - 1), i = o.tokens.some((s) => s.type === "list") ? Wn(this.parser.parse(o.tokens)).trim() : Wn(this.parser.parseInline(o.tokens));
          return `${r}- ${i}
`;
        },
        link(o) {
          return Wn(this.parser.parseInline(o.tokens));
        },
        image(o) {
          return `[${o.text}]`;
        },
        code(o) {
          return `${o.text}

`;
        },
        blockquote(o) {
          return `${Wn(this.parser.parse(o.tokens))}

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
    }), n.use($r({ nonStandard: !1 })), (await n.parse(e)).replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, `

`);
  } catch (t) {
    de("ConversionError: could not convert the given Markdown into plain text, reason: " + t);
  }
}
async function Jx(e) {
  const t = await Xo(e);
  return Mi(t);
}
async function Mi(e) {
  nt("markdown document", e);
  try {
    await Uo();
    const t = new Cr();
    return t.use(sa({
      langPrefix: "hljs language-",
      highlight(n, o) {
        const r = Un.getLanguage(o) ? o : "plaintext";
        return Un.highlight(n, { language: r }).value;
      }
    })), t.setOptions({
      gfm: !0,
      breaks: !0
    }), t.use($r({ nonStandard: !1 })), await t.parse(e);
  } catch (t) {
    de("ConversionError: could not convert the given Markdown into HTML, reason: " + t);
  }
}
function Wn(e) {
  return e.replace(/<[^>]+>/g, "");
}
let Qr;
async function Ai() {
  return Qr == null && (Qr = (await import("./mammoth-z-US_vPy.js").then((e) => e.i)).default), Qr;
}
async function Zx(e) {
  const t = await Yo(e);
  return Ti(t);
}
async function Ti(e) {
  eo("DOCX document", e, ArrayBuffer, "binary buffer");
  try {
    return (await (await Ai()).extractRawText({ arrayBuffer: e })).value;
  } catch (t) {
    de("ConversionError: could not convert the given DOCX file into plain text, reason: " + t);
  }
}
async function Qx(e) {
  const t = await Yo(e);
  return Ri(t);
}
async function Ri(e) {
  eo("DOCX document", e, ArrayBuffer, "binary buffer");
  try {
    return (await (await Ai()).convertToHtml({ arrayBuffer: e })).value;
  } catch (t) {
    de("ConversionError: could not convert the given DOCX file into HTML, reason: " + t);
  }
}
async function Px(e) {
  const t = await Yo(e);
  return Fi(t);
}
async function Fi(e) {
  eo("DOCX document", e, ArrayBuffer, "binary buffer");
  try {
    const n = (await (await Ai()).convertToHtml({ arrayBuffer: e })).value;
    return zi(n);
  } catch (t) {
    de("ConversionError: could not convert the given DOCX file into Markdown, reason: " + t);
  }
}
let Pr;
async function ev() {
  if (Pr == null) {
    const { getDocument: e, GlobalWorkerOptions: t } = await import("./pdfjs-dist-DDf7imjd.js");
    t.workerSrc = new URL(
      /* @vite-ignore */
      "./pdf.worker.min.mjs",
      import.meta.url
    ).href, Pr = e;
  }
  return Pr;
}
async function tv(e) {
  const t = await Yo(e);
  return Oi(t);
}
async function Oi(e) {
  eo("PDF document", e, ArrayBuffer, "binary buffer");
  try {
    const n = await (await ev())({
      data: e,
      wasmUrl: new URL(
        /* @vite-ignore */
        "./vendors/",
        import.meta.url
      ).href
    }).promise;
    let o = "";
    for (let r = 1; r <= n.numPages; r++) {
      const i = await (await n.getPage(r)).getTextContent();
      o += i.items.map((s) => s.str + (s.hasEOL ? `
` : " ")).join("").replace(/ +/g, " ") + `
`;
    }
    return o;
  } catch (t) {
    de("ConversionError: could not convert the given PDF file into plain text, reason: " + t);
  }
}
function Nd(e) {
  nt("HTML document", e), /^\s*<!DOCTYPE/i.test(e) && (e = e.replace(/^\s*<!DOCTYPE[^>]*>/i, "").trim());
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
  let n = "", o = [], r = [], a = !1, i = !1, s = !1, c = !0;
  const d = {
    processStartTag: function(h, g, b, m) {
      if (t[h]) {
        d.ignoredTag = h;
        return;
      }
      if (d.ignoredTag == null)
        switch (h) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            c || p(h === "h1" ? 3 : 2), c = !1;
            break;
          case "section":
            p();
            break;
          case "ul":
            p(), o.push("-");
            break;
          case "ol":
            p(), o.push("1"), r.push(1);
            break;
          case "li":
            switch (p(), n += l(), o[o.length - 1]) {
              case "-":
                n += "- ";
                break;
              case "1":
                n += r[r.length - 1]++ + ". ";
                break;
            }
            break;
          case "table":
            p();
            break;
          case "tr":
            p(), n += "|", s = !0;
            break;
          case "td":
          case "th":
            s || (n += "|", s = !0), n += " ";
            break;
          case "blockquote":
            p();
            break;
          case "pre":
            a = !0, p();
            break;
          case "code":
            i = !0;
            break;
          case "br":
            p();
            break;
          case "hr":
            p(2), n += "----", p(2);
            break;
          case "a":
            d.href = (g.find(
              (S) => S.Name === "href"
            ) || {}).Value;
            break;
          case "img":
            let v = (g.find((S) => S.Name === "alt") || {}).Value || "", C = (g.find((S) => S.Name === "src") || {}).Value || "";
            n += ` (${v}) [${C}] `;
            break;
        }
    },
    processEndTag: function(h) {
      if (d.ignoredTag != null) {
        d.ignoredTag === h && delete d.ignoredTag;
        return;
      }
      switch (h) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          p(2);
          break;
        case "ul":
          o.pop(), p();
          break;
        case "ol":
          o.pop(), r.pop(), p();
          break;
        case "tr":
          n += "|", s = !1;
          break;
        case "td":
        case "th":
          n += "|";
          break;
        case "table":
          p();
          break;
        case "pre":
          p(), a = !1;
          break;
        case "code":
          i = !1;
          break;
        case "a":
          d.href != null && (n += ` [${d.href}]`), delete d.href;
      }
    },
    processText: function(h, g) {
      d.ignoredTag == null && (h.trim() === "" && !a && !i || (u(f(h)), c = !1));
    },
    processComment: function(h) {
    }
  };
  return Vi(e, d), n.replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, `

`);
  function u(h) {
    a || i ? n += h : n += h.replace(/\s+/g, " ");
  }
  function p(h = 1) {
    n = n.replace(a ? /\n*$/ : /\s*$/, ""), n += `
`.repeat(h);
  }
  function l() {
    return "  ".repeat(o.length);
  }
  function f(h) {
    if (typeof document < "u") {
      const g = document.createElement("textarea");
      return g.innerHTML = h, g.value;
    } else
      return h.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (g, b) => String.fromCodePoint(Number(b))).replace(/&#x([0-9a-fA-F]+);/g, (g, b) => String.fromCodePoint(parseInt(b, 16)));
  }
}
function zi(e) {
  nt("HTML document", e), /^\s*<!DOCTYPE/i.test(e) && (e = e.replace(/^\s*<!DOCTYPE[^>]*>/i, "").trim());
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
  let n = "", o = "", r = [], a = [], i = !1, s = !1, c = !1, d = !1, u = !1, p = [], l = [], f = "";
  const h = {
    processStartTag: function(C, S, j, x) {
      if (h.ignoredTag == null) {
        if (t[C]) {
          h.ignoredTag = C;
          return;
        }
        switch (o = "", C) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            g(2), o += "#".repeat(Number(C[1])) + " ";
            break;
          case "section":
            g(2);
            break;
          case "ul":
            g(), r.push("-");
            break;
          case "ol":
            g(), r.push("1"), a.push(1);
            break;
          case "li":
            switch (g(), o += b(), r[r.length - 1]) {
              case "-":
                o += "- ";
                break;
              case "1":
                o += a[a.length - 1]++ + ". ";
                break;
            }
            break;
          case "table":
            c = !0, p = [];
            break;
          case "tr":
            d = c, l = [];
            break;
          case "th":
            u = !0, f = "";
            break;
          case "td":
            c && d && p.length === 0 && p.push([]), u = !0, f = "";
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
            h.href = (S.find(
              (w) => w.Name === "href"
            ) || {}).Value, o += "[";
            break;
          case "img": {
            let w = (S.find((L) => L.Name === "alt") || {}).Value || "", R = (S.find((L) => L.Name === "src") || {}).Value || "";
            o += `![${w}](${R})`;
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
        u ? f += o : n += o;
      }
    },
    processEndTag: function(C) {
      if (h.ignoredTag != null) {
        h.ignoredTag === C && delete h.ignoredTag;
        return;
      }
      switch (o = "", C) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          o += " " + "#".repeat(Number(C[1])), g(2);
          break;
        case "ul":
          r.pop(), g();
          break;
        case "ol":
          r.pop(), a.pop(), g();
          break;
        case "li":
          break;
        // nothing extra
        case "table":
          p.length > 0 && (g(), o += v(p), p = [], g()), c = d = u = !1;
          break;
        case "tr":
          c && p.push(l), d = u = !1, l = [];
          break;
        case "th":
        case "td":
          d && l.push(f), u = !1, f = "";
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
          h.href != null && (o += `](${h.href})`, delete h.href);
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
      u ? f += o : n += o;
    },
    processText: function(C, S) {
      if (h.ignoredTag == null && !(C.trim() === "" && !i && !s)) {
        switch (!0) {
          case i:
            o = C;
            break;
          case s:
            o = C.replace(/`/g, "\\`");
            break;
          default:
            o = m(C).replace(/\s+/g, " ");
        }
        u ? f += o : n += o;
      }
    },
    processComment: function(C) {
    }
  };
  return Vi(e, h), n.replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, `

`);
  function g(C = 1) {
    o = o.trimEnd() + `
`.repeat(C);
  }
  function b() {
    return "  ".repeat(r.length - 1);
  }
  function m(C) {
    if (typeof document < "u") {
      const S = document.createElement("textarea");
      return S.innerHTML = C, S.value;
    } else
      return C.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (S, j) => String.fromCodePoint(Number(j))).replace(/&#x([0-9a-fA-F]+);/g, (S, j) => String.fromCodePoint(parseInt(j, 16)));
  }
  function v(C) {
    if (C.length === 0)
      return "";
    let S, j;
    if (C[0].length > 0)
      S = C[0], j = 1;
    else {
      const R = Math.max(...C.map((L) => L.length));
      S = new Array(R).fill(""), j = 1;
    }
    const x = S.map(() => "---");
    let w = [
      "| " + S.join(" | ") + " |",
      "| " + x.join(" | ") + " |"
    ];
    for (let R = j; R < C.length; R++)
      w.push("| " + C[R].join(" | ") + " |");
    return w.join(`
`) + `
`;
  }
}
function Vi(e, t) {
  const n = /^<([-a-z0-9]+)((?:[\s\xA0]+[-a-z0-9_$:]+(?:[\s\xA0]*=[\s\xA0]*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s\xA0]+))?)*)[\s\xA0]*(\/?)>/i, o = /^<\/([-a-z0-9_]+)[^>]*>/i, r = /([-a-z0-9_$:]+)(?:[\s\xA0]*=[\s\xA0]*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s\xA0]+)))?/gi;
  function a(L) {
    let $ = L.split(","), I = /* @__PURE__ */ Object.create(null);
    for (let M = 0, _ = $.length; M < _; M++)
      I[$[M]] = !0;
    return I;
  }
  const i = a(
    "area,base,basefont,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
  ), s = a(
    "address,article,aside,audio,blockquote,canvas,center,dd,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,isindex,li,main,menu,nav,noframes,noscript,ol,output,p,pre,section,semantics,table,tbody,td,tfoot,th,thead,tr,ul,video,svg,g,defs,symbol,clippath,mask,pattern,lineargradient,radialgradient,filter,switch,text,tspan,textpath,foreignobject"
  ), c = a(
    "a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
  ), d = a(
    "area,base,basefont,bgsound,br,col,colgroup,dd,dt,embed,frame,hr,img,input,isindex,keygen,li,link,menuitem,meta,options,p,param,source,td,tfoot,th,thead,tr,track,wbr,rect,circle,ellipse,line,polyline,polygon,path,stop,use,marker,animate,animatemotion,animatetransform,set,desc,title,feblend,fecolormatrix,fecomponenttransfer,fecomposite,feconvolvematrix,fediffuselighting,fedisplacementmap,fedropshadow,feflood,fegaussianblur,feimage,femerge,femorphology,feoffset,fespecularlighting,fetile,feturbulence,fedistantlight,fepointlight,fespotlight"
  ), u = a(
    "script,style"
  ), p = a(
    "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
  );
  let l = function() {
  }, f = t.processStartTag || l, h = t.processEndTag || l, g = t.processText || l, b = t.processComment || l, m = [];
  m.last = function() {
    return this[this.length - 1];
  };
  let v = "", C = !1;
  function S() {
    v !== "" && (g(v, C), v = "");
  }
  function j(L, $) {
    v !== "" && $ !== C && S(), v += L, C = $;
  }
  function x(L, $, I, M) {
    if ($ = $.toLowerCase(), s[$])
      for (; m.last() != null && c[m.last()]; )
        w("", m.last());
    d[$] && m.last() === $ && w("", $);
    let _ = i[$] || !!M;
    if (_ || m.push($), f !== l) {
      let z = [];
      I.replace(r, function(N, Y, ...Q) {
        let fe = Q[0] ? Q[0] : Q[1] ? Q[1] : Q[2] ? Q[2] : p[Y] ? Y : "";
        return z.push({
          Name: Y,
          Value: fe,
          escapedValue: Bd(fe)
        }), "";
      }), S(), f(
        $,
        z,
        _,
        m.length === (_ ? 0 : 1)
      );
    }
    return "";
  }
  function w(L, $) {
    let I;
    if ($ == null)
      I = 0;
    else
      for ($ = $.toLowerCase(), I = m.length - 1; I >= 0 && m[I] !== $; I--)
        ;
    if (I >= 0) {
      S();
      for (let M = m.length - 1; M >= I; M--)
        h(m[M], M === 0);
      m.length = I;
    }
    return "";
  }
  let R = e;
  for (; e !== ""; ) {
    let L = !0;
    if (m.last() == null || !u[m.last()]) {
      if (e.startsWith("<!--")) {
        let $ = e.indexOf("-->", 4);
        $ > 0 && (S(), b(e.slice(4, $)), e = e.slice($ + 3), L = !1);
      } else if (e.startsWith("<?")) {
        let $ = e.indexOf("?>");
        $ >= 0 && (e = e.slice($ + 2), L = !1);
      } else if (e.startsWith("<!")) {
        let $ = e.indexOf(">");
        $ >= 0 && (e = e.slice($ + 1), L = !1);
      } else if (e.startsWith("</")) {
        let $ = e.match(o);
        $ != null && (e = e.slice($[0].length), $[0].replace(o, w), L = !1);
      } else if (e.startsWith("<")) {
        let $ = e.match(n);
        $ != null && (e = e.slice($[0].length), $[0].replace(n, x), L = !1);
      }
      if (L) {
        let $ = e.indexOf("<"), I = $ < 0 ? e : e.slice(0, $);
        e = $ < 0 ? "" : e.slice($), j(I, m.length === 0);
      }
    } else
      e = e.replace(
        new RegExp(`^((?:.|
)*?)<\\/` + m.last() + "[^>]*>", "i"),
        function($, I) {
          return I = I.replace(/<!--(.*?)-->/g, "$1").replace(/<!\[CDATA\[(.*?)]]>/g, "$1"), j(I, m.length === 0), "";
        }
      ), w("", m.last());
    if (e === R)
      switch (!0) {
        case e.startsWith("<"):
          e = e.slice(1), j("<", m.length === 0);
          break;
        default:
          throw new Error('HTMLParseError: could not parse "' + e + '"');
      }
    R = e;
  }
  S(), w();
}
function QC(e, t) {
  for (let n = 0, o = t.length; n < o; n++) {
    let r = t[n];
    if (r.Name === e)
      return r.Value;
  }
}
function PC(e, t, n) {
  let o = "<" + e;
  for (let r = 0, a = t.length; r < a; r++) {
    let i = t[r];
    o += " " + i.Name + '="' + i.escapedValue + '"';
  }
  return o + (n ? "/>" : ">");
}
function Bd(e) {
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
function Wd(e) {
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
const e1 = {
  readFileAsText: Xo,
  readFileAsBinary: Yo,
  readFileAsDataURL: Kx,
  HTMLasText: _i,
  HTMLasMarkdown: Di,
  HTMLFileReadAsText: qx,
  HTMLFileReadAsMarkdown: Xx,
  MarkdownAsText: Li,
  MarkdownAsHTML: Mi,
  MarkdownFileReadAsText: Yx,
  MarkdownFileReadAsHTML: Jx,
  DOCXasText: Ti,
  DOCXasHTML: Ri,
  DOCXasMarkdown: Fi,
  DOCXFileReadAsText: Zx,
  DOCXFileReadAsHTML: Qx,
  DOCXFileReadAsMarkdown: Px,
  PDFasText: Oi,
  PDFFileReadAsText: tv,
  HTMLtoText: Nd,
  HTMLtoMarkdown: zi,
  parseHTML: Vi,
  escapedHTMLAttribute: Bd,
  unescapedHTMLAttribute: Wd
};
function E(e, t, ...n) {
  if (ln("callback description", e), Oe("callback", t), t != null)
    try {
      return t(...n);
    } catch (o) {
      de(`CallbackFailure: ${e} failed with ${"" + o}`);
    }
}
const Ke = E;
function nv(e) {
  return ln("Textline", e), e.length === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1);
}
export {
  Rd as AppletFailingWith,
  Fd as AppletView,
  qf as AsyncFunction,
  QC as AttributeFrom,
  $o as ColorSet,
  $g as Customizable,
  Qx as DOCXFileReadAsHTML,
  Px as DOCXFileReadAsMarkdown,
  Zx as DOCXFileReadAsText,
  Ri as DOCXasHTML,
  Fi as DOCXasMarkdown,
  Ti as DOCXasText,
  og as DefaultSwatchSet,
  ci as Description,
  ac as DescriptionOfHTTPStatus,
  Ck as DeviceSupportsPassiveEvents,
  $k as DeviceSupportsPointerEvents,
  wf as DeviceSupportsTouchEvents,
  _g as DialogBase,
  uc as DirectionOfLocale,
  Qg as Dummy,
  nC as EnvironmentIsBrowser,
  ph as EnvironmentIsTauri,
  Am as FAIcon,
  fm as Fineprint,
  Bh as FlagEmojiForISOCode,
  HC as FlagEmojiForLocale,
  Ca as FunctionWithName,
  Xx as HTMLFileReadAsMarkdown,
  qx as HTMLFileReadAsText,
  bm as HTMLView,
  Di as HTMLasMarkdown,
  _i as HTMLasText,
  hf as HTMLsafe,
  zi as HTMLtoMarkdown,
  Nd as HTMLtoText,
  ic as HTTPMessageForStatus,
  yf as HexColor,
  Lm as Icon,
  km as ImageView,
  fh as InternetIsAvailable,
  Vx as JCL_AppletElement,
  Jb as JCL_BitmapEditor,
  Yb as JCL_BitmapEditorTools,
  Za as JCL_DataDropEffects,
  pi as JCL_DatePattern,
  rb as JCL_DateRegExp,
  tb as JCL_DateTimePattern,
  nb as JCL_DateTimeRegExp,
  Im as JCL_DefaultSandboxPermissions,
  zr as JCL_DialogContext,
  Ag as JCL_DialogView,
  zh as JCL_Directions,
  qb as JCL_DrawingEditor,
  gn as JCL_ErrorIndicator,
  di as JCL_FAIconNames,
  Ph as JCL_HoverCapabilities,
  Lc as JCL_ImageAlignments,
  Dc as JCL_ImageScalings,
  Mg as JCL_ModalLayer,
  hi as JCL_MonthPattern,
  lb as JCL_MonthRegExp,
  Or as JCL_OverlayContext,
  Ss as JCL_OverlayView,
  Qh as JCL_PointerAccuracies,
  Qa as JCL_PointerDnDContext,
  fg as JCL_PointerDropEffects,
  tg as JCL_PreferredContrasts,
  eg as JCL_PreferredMotions,
  Oy as JCL_QRCodeECCLevels,
  Dx as JCL_QuarterPattern,
  Lx as JCL_QuarterRegExp,
  $t as JCL_RealDrawEditor,
  Qb as JCL_RealDrawEditorTools,
  Sm as JCL_ReferrerPolicies,
  TC as JCL_SwatchKeys,
  fc as JCL_Themes,
  Qm as JCL_TimePattern,
  Pm as JCL_TimeRegExp,
  ii as JCL_ToastContext,
  Sg as JCL_Underlay,
  fi as JCL_WeekPattern,
  ib as JCL_WeekRegExp,
  wt as JCL_empty,
  $h as JCL_mixedValues,
  Ch as JCL_noSelection,
  ih as JCL_supportedHTMLFormats,
  lh as JCL_supportedImageFormats,
  sh as JCL_supportedMarkdownFormats,
  ah as JCL_supportedTextFormats,
  lm as Label,
  mk as MarkDownSafe,
  Mi as MarkdownAsHTML,
  Li as MarkdownAsText,
  Jx as MarkdownFileReadAsHTML,
  Yx as MarkdownFileReadAsText,
  Dn as MarkdownRenderer,
  _c as MarkdownView,
  Ut as MediaQueryMatches,
  mf as ObjectIsEmpty,
  yk as ObjectIsNotEmpty,
  sv as ObjectMergedWith,
  lu as Object_hasOwnProperty,
  cu as Object_isPrototypeOf,
  rv as Object_propertyIsEnumerable,
  av as Object_toLocaleString,
  du as Object_toString,
  iv as Object_valueOf,
  XC as OperationWasConfirmed,
  jg as OverlayBase,
  tv as PDFFileReadAsText,
  Oi as PDFasText,
  es as PointerType,
  Cg as PseudoRef,
  wk as RGBAColor,
  oo as RegExpForPattern,
  $m as SVGView,
  ge as SearXNG,
  rc as ServerIsReachable,
  em as Spacer,
  bf as StringIsEmpty,
  xk as StringIsNotEmpty,
  Z as StylesheetInstallerFor,
  im as Subtitle,
  Ux as TextFilledFrom,
  Hx as TextFromString,
  gm as TextView,
  Wx as TextlineFromString,
  dm as TextlineView,
  rm as Title,
  Rg as ToastBase,
  ne as ValidatorForClassifier,
  lv as ValueExists,
  pv as ValueInheritsFrom,
  dh as ValueIsAbortSignal,
  xu as ValueIsAbsoluteURL,
  xa as ValueIsAnonymousFunction,
  _r as ValueIsArray,
  sl as ValueIsArrayBuffer,
  bl as ValueIsBase64,
  nl as ValueIsBigInt,
  Jt as ValueIsBoolean,
  ya as ValueIsCardinal,
  An as ValueIsColor,
  zt as ValueIsDate,
  Tc as ValueIsDateTime,
  Do as ValueIsDimension,
  tl as ValueIsE164PhoneNumber,
  Tn as ValueIsEMailAddress,
  dv as ValueIsEmptyString,
  Ps as ValueIsError,
  an as ValueIsFiniteNumber,
  Vt as ValueIsFunction,
  Lh as ValueIsGeometry,
  Kk as ValueIsHTMLFormat,
  yl as ValueIsHexString,
  fl as ValueIsHostName,
  ul as ValueIsIPv4Address,
  pl as ValueIsIPv6Address,
  cl as ValueIsISODate,
  th as ValueIsISOLanguageCode,
  dl as ValueIsISOTimestamp,
  Zf as ValueIsIdentifier,
  Xk as ValueIsImageFormat,
  uv as ValueIsInstanceOf,
  Pn as ValueIsInteger,
  Sr as ValueIsIntegerInRange,
  ml as ValueIsJSONString,
  Zs as ValueIsList,
  hu as ValueIsListOf,
  Vk as ValueIsListOfEMailAddresses,
  $e as ValueIsListSatisfying,
  dc as ValueIsLocale,
  _o as ValueIsLocation,
  So as ValueIsMIMEType,
  rl as ValueIsMap,
  qk as ValueIsMarkdownFormat,
  cv as ValueIsMissing,
  gi as ValueIsMonth,
  Us as ValueIsNaN,
  Ha as ValueIsName,
  Xs as ValueIsNamedFunction,
  va as ValueIsNativeFunction,
  qs as ValueIsNonEmptyString,
  ut as ValueIsNumber,
  To as ValueIsNumberInRange,
  ko as ValueIsObject,
  he as ValueIsOneOf,
  hn as ValueIsOrdinal,
  tc as ValueIsPath,
  Mr as ValueIsPhoneNumber,
  Me as ValueIsPlainObject,
  hl as ValueIsPortNumber,
  _h as ValueIsPosition,
  xn as ValueIsPreactRef,
  oc as ValueIsPromise,
  Mx as ValueIsQuarter,
  el as ValueIsRegExp,
  Ys as ValueIsScriptedFunction,
  gl as ValueIsSerializableObject,
  Co as ValueIsSerializableValue,
  al as ValueIsSet,
  Dh as ValueIsSize,
  Je as ValueIsSpecial,
  Ze as ValueIsString,
  st as ValueIsStringMatching,
  ra as ValueIsSwatch,
  Rh as ValueIsSwatchSet,
  ol as ValueIsSymbol,
  mn as ValueIsText,
  Uk as ValueIsTextFormat,
  Vo as ValueIsTextWithTabs,
  Ee as ValueIsTextline,
  Ac as ValueIsTime,
  il as ValueIsTypedArray,
  at as ValueIsURL,
  ll as ValueIsUUID,
  kC as ValueIsVNode,
  Js as ValueIsVanillaObject,
  Rc as ValueIsWeek,
  bk as ValuesAreEqual,
  lr as ValuesDiffer,
  _m as WebView,
  Kn as WorldPositionOfPort,
  Ie as acceptNil,
  J as acceptableBoolean,
  bn as acceptableCardinal,
  Dt as acceptableColor,
  _C as acceptableEMailAddress,
  T as acceptableFunction,
  IC as acceptableInteger,
  wr as acceptableIntegerInRange,
  LC as acceptableName,
  MC as acceptableNameOrIndex,
  qe as acceptableNumber,
  rn as acceptableNumberInRange,
  ke as acceptableOrdinal,
  AC as acceptablePath,
  DC as acceptablePhoneNumber,
  Rn as acceptableString,
  SC as acceptableStringMatching,
  ae as acceptableText,
  D as acceptableTextline,
  Vn as acceptableURL,
  V as acceptableValue,
  ZC as ai,
  uh as allowAbortSignal,
  bp as allowAbsoluteURL,
  Uu as allowAnonymousFunction,
  np as allowArray,
  Lp as allowArrayBuffer,
  Qp as allowBase64,
  vp as allowBigInt,
  on as allowBoolean,
  Dr as allowCardinal,
  fp as allowColor,
  sp as allowDate,
  UC as allowDictionary,
  Lt as allowDimension,
  yp as allowE164PhoneNumber,
  gp as allowEMailAddress,
  cp as allowError,
  Ru as allowFiniteNumber,
  Oe as allowFunction,
  yC as allowGeometry,
  ef as allowHexString,
  Wp as allowHostName,
  Vp as allowIPv4Address,
  Np as allowIPv6Address,
  Rp as allowISODate,
  nh as allowISOLanguageCode,
  Op as allowISOTimestamp,
  Ik as allowIdentifier,
  ap as allowInstanceOf,
  Eu as allowInteger,
  Nu as allowIntegerInRange,
  Jp as allowJSONString,
  op as allowList,
  rp as allowListOf,
  Ht as allowListSatisfying,
  NC as allowLocale,
  vr as allowLocation,
  Wk as allowMIMEType,
  $p as allowMap,
  Ou as allowNaN,
  Pf as allowName,
  qu as allowNamedFunction,
  Yu as allowNativeFunction,
  Bu as allowNonEmptyString,
  Tu as allowNumber,
  Vu as allowNumberInRange,
  Pu as allowObject,
  Ft as allowOneOf,
  kl as allowOrdinal,
  Mk as allowPath,
  Rk as allowPhoneNumber,
  _a as allowPlainObject,
  Gp as allowPortNumber,
  dC as allowPosition,
  CC as allowPreactRef,
  Yk as allowPromise,
  up as allowRegExp,
  Zu as allowScriptedFunction,
  Xp as allowSerializableObject,
  Kp as allowSerializableValue,
  Ip as allowSet,
  hC as allowSize,
  Lr as allowString,
  Hu as allowStringMatching,
  RC as allowSwatch,
  Fh as allowSwatchSet,
  kp as allowSymbol,
  Gu as allowText,
  fn as allowTextline,
  _p as allowTypedArray,
  Hn as allowURL,
  Ap as allowUUID,
  Lu as allowValue,
  ip as allowValueInheritingFrom,
  ep as allowVanillaObject,
  Pk as allowedAbortSignal,
  Dw as allowedAbsoluteURL,
  Hv as allowedAnonymousFunction,
  ow as allowedArray,
  Hw as allowedArrayBuffer,
  uk as allowedBase64,
  Tw as allowedBigInt,
  hv as allowedBoolean,
  Qi as allowedCardinal,
  Cw as allowedColor,
  gw as allowedDate,
  KC as allowedDictionary,
  sC as allowedDimension,
  Mw as allowedE164PhoneNumber,
  jw as allowedEMailAddress,
  bw as allowedError,
  yv as allowedFiniteNumber,
  Bv as allowedFunction,
  xC as allowedGeometry,
  fk as allowedHexString,
  tk as allowedHostName,
  Zw as allowedIPv4Address,
  Pw as allowedIPv6Address,
  qw as allowedISODate,
  Ek as allowedISOLanguageCode,
  Yw as allowedISOTimestamp,
  Sk as allowedIdentifier,
  uw as allowedInstanceOf,
  $v as allowedInteger,
  Iv as allowedIntegerInRange,
  ck as allowedJSONString,
  aw as allowedList,
  cw as allowedListOf,
  sw as allowedListSatisfying,
  BC as allowedLocale,
  rC as allowedLocation,
  Hk as allowedMIMEType,
  zw as allowedMap,
  vv as allowedNaN,
  Dk as allowedName,
  Uv as allowedNamedFunction,
  qv as allowedNativeFunction,
  Tv as allowedNonEmptyString,
  mv as allowedNumber,
  kv as allowedNumberInRange,
  Zv as allowedObject,
  ww as allowedOneOf,
  _v as allowedOrdinal,
  Ak as allowedPath,
  Fk as allowedPhoneNumber,
  Pv as allowedPlainObject,
  ok as allowedPortNumber,
  uC as allowedPosition,
  $C as allowedPreactRef,
  Jk as allowedPromise,
  xw as allowedRegExp,
  Yv as allowedScriptedFunction,
  sk as allowedSerializableObject,
  ak as allowedSerializableValue,
  Ew as allowedSet,
  gC as allowedSize,
  Mv as allowedString,
  Fv as allowedStringMatching,
  FC as allowedSwatch,
  VC as allowedSwatchSet,
  Fw as allowedSymbol,
  zv as allowedText,
  Ev as allowedTextline,
  Bw as allowedTypedArray,
  Sw as allowedURL,
  Uw as allowedUUID,
  fv as allowedValue,
  fw as allowedValueInheritingFrom,
  tw as allowedVanillaObject,
  nv as capitalized,
  li as centered,
  Bo as coercedNumberSatisfying,
  vk as constrained,
  Ae as consumeEvent,
  Cn as consumingEvent,
  YC as defineJCLApplet,
  Pe as escaped,
  Bd as escapedHTMLAttribute,
  E as executeCallback,
  Ke as executedCallback,
  tm as expandingSpacer,
  eC as expectAbortSignal,
  Ll as expectAbsoluteURL,
  Ku as expectAnonymousFunction,
  jl as expectArray,
  Mp as expectArrayBuffer,
  Pp as expectBase64,
  wp as expectBigInt,
  $a as expectBoolean,
  Cl as expectCardinal,
  hp as expectColor,
  lp as expectDate,
  Jh as expectDictionary,
  lC as expectDimension,
  xp as expectE164PhoneNumber,
  mp as expectEMailAddress,
  dp as expectError,
  Fu as expectFiniteNumber,
  Zt as expectFunction,
  vC as expectGeometry,
  tf as expectHexString,
  Hp as expectHostName,
  Ep as expectIPv4Address,
  Bp as expectIPv6Address,
  Fp as expectISODate,
  Nk as expectISOLanguageCode,
  zp as expectISOTimestamp,
  Qf as expectIdentifier,
  eo as expectInstanceOf,
  wl as expectInteger,
  ja as expectIntegerInRange,
  Zp as expectJSONString,
  Il as expectList,
  _l as expectListOf,
  Sl as expectListSatisfying,
  ro as expectLocale,
  aC as expectLocation,
  rh as expectMIMEType,
  jp as expectMap,
  zu as expectNaN,
  Ln as expectName,
  Xu as expectNamedFunction,
  Ju as expectNativeFunction,
  Wu as expectNonEmptyString,
  xl as expectNumber,
  vl as expectNumberInRange,
  $l as expectObject,
  _n as expectOneOf,
  qn as expectOrdinal,
  nc as expectPath,
  Ok as expectPhoneNumber,
  St as expectPlainObject,
  Up as expectPortNumber,
  pC as expectPosition,
  Ar as expectPreactRef,
  Zk as expectPromise,
  pp as expectRegExp,
  Qu as expectScriptedFunction,
  Yp as expectSerializableObject,
  qp as expectSerializableValue,
  Sp as expectSet,
  mC as expectSize,
  Ia as expectString,
  Sa as expectStringMatching,
  OC as expectSwatch,
  Oh as expectSwatchSet,
  Cp as expectSymbol,
  nt as expectText,
  ln as expectTextline,
  Dp as expectTypedArray,
  Da as expectURL,
  Tp as expectUUID,
  Mu as expectValue,
  Dl as expectValueInheritingFrom,
  tp as expectVanillaObject,
  tC as expectedAbortSignal,
  Lw as expectedAbsoluteURL,
  Gv as expectedAnonymousFunction,
  rw as expectedArray,
  Gw as expectedArrayBuffer,
  pk as expectedBase64,
  Rw as expectedBigInt,
  gv as expectedBoolean,
  Lv as expectedCardinal,
  $w as expectedColor,
  mw as expectedDate,
  qC as expectedDictionary,
  cC as expectedDimension,
  Aw as expectedE164PhoneNumber,
  Iw as expectedEMailAddress,
  yw as expectedError,
  xv as expectedFiniteNumber,
  Wv as expectedFunction,
  wC as expectedGeometry,
  hk as expectedHexString,
  nk as expectedHostName,
  Qw as expectedIPv4Address,
  ek as expectedIPv6Address,
  Xw as expectedISODate,
  Bk as expectedISOLanguageCode,
  Jw as expectedISOTimestamp,
  _k as expectedIdentifier,
  pw as expectedInstanceOf,
  jv as expectedInteger,
  Sv as expectedIntegerInRange,
  dk as expectedJSONString,
  iw as expectedList,
  dw as expectedListOf,
  lw as expectedListSatisfying,
  WC as expectedLocale,
  iC as expectedLocation,
  Gk as expectedMIMEType,
  Vw as expectedMap,
  wv as expectedNaN,
  Lk as expectedName,
  Kv as expectedNamedFunction,
  Xv as expectedNativeFunction,
  Rv as expectedNonEmptyString,
  bv as expectedNumber,
  Cv as expectedNumberInRange,
  Qv as expectedObject,
  kw as expectedOneOf,
  Dv as expectedOrdinal,
  Tk as expectedPath,
  zk as expectedPhoneNumber,
  ew as expectedPlainObject,
  rk as expectedPortNumber,
  fC as expectedPosition,
  jC as expectedPreactRef,
  Qk as expectedPromise,
  vw as expectedRegExp,
  Jv as expectedScriptedFunction,
  lk as expectedSerializableObject,
  ik as expectedSerializableValue,
  Nw as expectedSet,
  bC as expectedSize,
  Av as expectedString,
  Ov as expectedStringMatching,
  zC as expectedSwatch,
  EC as expectedSwatchSet,
  Ow as expectedSymbol,
  Vv as expectedText,
  Nv as expectedTextline,
  Ww as expectedTypedArray,
  _w as expectedURL,
  Kw as expectedUUID,
  Au as expectedValue,
  hw as expectedValueInheritingFrom,
  nw as expectedVanillaObject,
  Ed as fencedText,
  Et as fetched,
  vh as fetchedAsHTML,
  wh as fetchedAsMarkdown,
  xh as fetchedAsText,
  mh as fetchedBinary,
  bh as fetchedBlob,
  yh as fetchedDataURL,
  gh as fetchedJSON,
  hh as fetchedText,
  Eg as fullsized,
  ov as global,
  Wg as horizontal,
  nm as horizontalSeparator,
  Pa as installStylesheetFor,
  Ib as legacyAccordionFold,
  Zb as legacyBitmapEditor,
  wy as legacyChatView,
  hd as legacyChatViewAssistantExtra,
  md as legacyChatViewControls,
  gd as legacyChatViewUserExtra,
  Hb as legacyCodeEditor,
  dy as legacyDataFlowProcessView,
  Xb as legacyDrawingEditor,
  kb as legacyFileDropArea,
  zc as legacyFlatListView,
  Ty as legacyKanbanBoard,
  Mb as legacyNestedListView,
  oy as legacyNoteBoard,
  vb as legacyPseudoDropDown,
  yb as legacyPseudoFileInput,
  zy as legacyQRCodeView,
  ey as legacyRealDrawEditor,
  Wc as legacyRichTextEditor,
  _y as legacySpreadsheetEditor,
  $b as legacyTabStrip,
  Uo as loadMarkdownLibraries,
  gt as loadedLibrary,
  vm as loadedMarkdownRenderer,
  Go as memoizedLoader,
  e1 as misc,
  Te as missingProperty,
  Rm as nativeButton,
  Om as nativeCheckbox,
  fb as nativeColorInput,
  ab as nativeDateInput,
  ob as nativeDateTimeInput,
  gb as nativeDropDown,
  Ym as nativeEMailAddressInput,
  ub as nativeFileInput,
  Nm as nativeGauge,
  cb as nativeMonthInput,
  GC as nativeNameForLocale,
  Xm as nativeNumberInput,
  qm as nativePasswordInput,
  Jm as nativePhoneNumberInput,
  Wm as nativeProgressbar,
  Vm as nativeRadiobutton,
  db as nativeSearchInput,
  Gm as nativeSlider,
  mi as nativeTextInput,
  Km as nativeTextlineInput,
  eb as nativeTimeInput,
  Zm as nativeURLInput,
  sb as nativeWeekInput,
  oC as net,
  Mh as normalizedName,
  Vi as parseHTML,
  K as parseablePropSet,
  Tt as parsedOption,
  jk as primaryInput,
  pf as quotable,
  Mt as quoted,
  Yo as readFileAsBinary,
  Kx as readFileAsDataURL,
  Xo as readFileAsText,
  Bb as registerCodeEditorLanguage,
  Iy as registerSpreadsheetFormula,
  Sy as registerSpreadsheetFormulas,
  je as rejectNil,
  lt as resolvedSpecialValue,
  U as safelyRendered,
  Xg as selective,
  PC as serializedTag,
  kk as shortHexColor,
  Jg as stacked,
  vi as stickyHTMLNote,
  fd as stickyMarkdownNote,
  pd as stickyTextNote,
  wx as styledAccordion,
  kx as styledAccordionFold,
  C0 as styledAvatar,
  b0 as styledBadge,
  yx as styledBreadcrumb,
  yd as styledButton,
  N0 as styledCard,
  H0 as styledCardAction,
  G0 as styledCardContent,
  q0 as styledCardDescription,
  U0 as styledCardFooter,
  W0 as styledCardHeader,
  K0 as styledCardTitle,
  ma as styledCheckbox,
  a0 as styledColorInput,
  ux as styledCombobox,
  z0 as styledCommandGroup,
  O0 as styledCommandItem,
  F0 as styledCommandPalette,
  Ix as styledDataTable,
  t0 as styledDateInput,
  hx as styledDatePicker,
  e0 as styledDateTimeInput,
  s0 as styledDropDown,
  D0 as styledDropDownMenu,
  A0 as styledDropDownMenuGroup,
  L0 as styledDropDownMenuItem,
  M0 as styledDropDownMenuSeparator,
  T0 as styledDropDownMenuSubMenu,
  Jy as styledEMailAddressInput,
  g0 as styledFAIcon,
  nx as styledField,
  c0 as styledFileInput,
  By as styledGauge,
  f0 as styledIcon,
  rx as styledInputGroup,
  ax as styledInputGroupAddon,
  w0 as styledKbd,
  o0 as styledMonthInput,
  Si as styledMonthView,
  Id as styledMultiSwitch,
  Yy as styledNumberInput,
  _d as styledPagination,
  Xy as styledPasswordInput,
  Zy as styledPhoneNumberInput,
  kd as styledPopover,
  Hy as styledProgressbar,
  Rx as styledQuarterView,
  cx as styledRadioGroup,
  xd as styledRadiobutton,
  r0 as styledSearchInput,
  X0 as styledSidebar,
  Z0 as styledSidebarContent,
  Q0 as styledSidebarFooter,
  tx as styledSidebarGroup,
  J0 as styledSidebarHeader,
  P0 as styledSidebarItem,
  ex as styledSidebarSeparator,
  j0 as styledSkeleton,
  Uy as styledSlider,
  x0 as styledSpinner,
  ix as styledSwitch,
  mx as styledTabStrip,
  Dd as styledTable,
  Md as styledTableBody,
  hr as styledTableCell,
  jx as styledTableFooter,
  ba as styledTableHead,
  Ld as styledTableHeader,
  fr as styledTableRow,
  u0 as styledTextInput,
  qy as styledTextlineInput,
  lx as styledThemeSwitch,
  Py as styledTimeInput,
  V0 as styledToast,
  wd as styledTooltip,
  Qy as styledURLInput,
  n0 as styledWeekInput,
  Ox as styledYearView,
  Kg as tabular,
  de as throwError,
  Yf as throwReadOnlyError,
  JC as ui,
  gk as unescaped,
  Wd as unescapedHTMLAttribute,
  Gx as unfencedText,
  vg as uninstallStylesheetFor,
  io as useClickDragging,
  cg as useConfiguration,
  Fr as useCustomization,
  ug as useDataDragSupport,
  pg as useDataDropSupport,
  kn as useDatalist,
  lo as useDialogContext,
  Fn as useDragging,
  yg as useFileDropSupport,
  Ot as useHybridValue,
  lg as useI18n,
  wn as useInputCallbacks,
  ao as useLibraries,
  mc as useMeasuredPaneSize,
  ig as useOnlineStatus,
  so as useOverlayContext,
  hg as usePointerDragSupport,
  gg as usePointerDropSupport,
  ft as useRerenderer,
  vn as useShownValue,
  si as useToastContext,
  sg as useWindowSize,
  Du as validatedArgument,
  Gg as vertical,
  om as verticalSeparator
};
//# sourceMappingURL=javascript-code-library.esm.js.map
