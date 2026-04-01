function Uo(o, a) {
    return function () {
        return o.apply(a, arguments)
    }
}
const { toString: $u } = Object.prototype
    , { getPrototypeOf: bs } = Object
    , ln = (o => a => {
        const c = $u.call(a);
        return o[c] || (o[c] = c.slice(8, -1).toLowerCase())
    }
    )(Object.create(null))
    , Ut = o => (o = o.toLowerCase(),
        a => ln(a) === o)
    , cn = o => a => typeof a === o
    , { isArray: Me } = Array
    , mi = cn("undefined");
function ku(o) {
    return o !== null && !mi(o) && o.constructor !== null && !mi(o.constructor) && Mt(o.constructor.isBuffer) && o.constructor.isBuffer(o)
}
const qo = Ut("ArrayBuffer");
function Su(o) {
    let a;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(o) : a = o && o.buffer && qo(o.buffer),
        a
}
const Eu = cn("string")
    , Mt = cn("function")
    , Wo = cn("number")
    , hn = o => o !== null && typeof o == "object"
    , Tu = o => o === !0 || o === !1
    , en = o => {
        if (ln(o) !== "object")
            return !1;
        const a = bs(o);
        return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in o) && !(Symbol.iterator in o)
    }
    , Cu = Ut("Date")
    , Ou = Ut("File")
    , Au = Ut("Blob")
    , Pu = Ut("FileList")
    , Iu = o => hn(o) && Mt(o.pipe)
    , _u = o => {
        let a;
        return o && (typeof FormData == "function" && o instanceof FormData || Mt(o.append) && ((a = ln(o)) === "formdata" || a === "object" && Mt(o.toString) && o.toString() === "[object FormData]"))
    }
    , Ru = Ut("URLSearchParams")
    , [Nu, Du, Bu, Fu] = ["ReadableStream", "Request", "Response", "Headers"].map(Ut)
    , Mu = o => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gi(o, a, { allOwnKeys: c = !1 } = {}) {
    if (o === null || typeof o > "u")
        return;
    let h, f;
    if (typeof o != "object" && (o = [o]),
        Me(o))
        for (h = 0,
            f = o.length; h < f; h++)
            a.call(null, o[h], h, o);
    else {
        const p = c ? Object.getOwnPropertyNames(o) : Object.keys(o)
            , m = p.length;
        let y;
        for (h = 0; h < m; h++)
            y = p[h],
                a.call(null, o[y], y, o)
    }
}
function Vo(o, a) {
    a = a.toLowerCase();
    const c = Object.keys(o);
    let h = c.length, f;
    for (; h-- > 0;)
        if (f = c[h],
            a === f.toLowerCase())
            return f;
    return null
}
const xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
    , Jo = o => !mi(o) && o !== xe;
function ds() {
    const { caseless: o } = Jo(this) && this || {}
        , a = {}
        , c = (h, f) => {
            const p = o && Vo(a, f) || f;
            en(a[p]) && en(h) ? a[p] = ds(a[p], h) : en(h) ? a[p] = ds({}, h) : Me(h) ? a[p] = h.slice() : a[p] = h
        }
        ;
    for (let h = 0, f = arguments.length; h < f; h++)
        arguments[h] && gi(arguments[h], c);
    return a
}
const Lu = (o, a, c, { allOwnKeys: h } = {}) => (gi(a, (f, p) => {
    c && Mt(f) ? o[p] = Uo(f, c) : o[p] = f
}
    , {
        allOwnKeys: h
    }),
    o)
    , zu = o => (o.charCodeAt(0) === 65279 && (o = o.slice(1)),
        o)
    , Hu = (o, a, c, h) => {
        o.prototype = Object.create(a.prototype, h),
            o.prototype.constructor = o,
            Object.defineProperty(o, "super", {
                value: a.prototype
            }),
            c && Object.assign(o.prototype, c)
    }
    , ju = (o, a, c, h) => {
        let f, p, m;
        const y = {};
        if (a = a || {},
            o == null)
            return a;
        do {
            for (f = Object.getOwnPropertyNames(o),
                p = f.length; p-- > 0;)
                m = f[p],
                    (!h || h(m, o, a)) && !y[m] && (a[m] = o[m],
                        y[m] = !0);
            o = c !== !1 && bs(o)
        } while (o && (!c || c(o, a)) && o !== Object.prototype);
        return a
    }
    , Uu = (o, a, c) => {
        o = String(o),
            (c === void 0 || c > o.length) && (c = o.length),
            c -= a.length;
        const h = o.indexOf(a, c);
        return h !== -1 && h === c
    }
    , qu = o => {
        if (!o)
            return null;
        if (Me(o))
            return o;
        let a = o.length;
        if (!Wo(a))
            return null;
        const c = new Array(a);
        for (; a-- > 0;)
            c[a] = o[a];
        return c
    }
    , Wu = (o => a => o && a instanceof o)(typeof Uint8Array < "u" && bs(Uint8Array))
    , Vu = (o, a) => {
        const h = (o && o[Symbol.iterator]).call(o);
        let f;
        for (; (f = h.next()) && !f.done;) {
            const p = f.value;
            a.call(o, p[0], p[1])
        }
    }
    , Ju = (o, a) => {
        let c;
        const h = [];
        for (; (c = o.exec(a)) !== null;)
            h.push(c);
        return h
    }
    , Xu = Ut("HTMLFormElement")
    , Ku = o => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (c, h, f) {
        return h.toUpperCase() + f
    })
    , Ao = (({ hasOwnProperty: o }) => (a, c) => o.call(a, c))(Object.prototype)
    , Gu = Ut("RegExp")
    , Xo = (o, a) => {
        const c = Object.getOwnPropertyDescriptors(o)
            , h = {};
        gi(c, (f, p) => {
            let m;
            (m = a(f, p, o)) !== !1 && (h[p] = m || f)
        }
        ),
            Object.defineProperties(o, h)
    }
    , Yu = o => {
        Xo(o, (a, c) => {
            if (Mt(o) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
                return !1;
            const h = o[c];
            if (Mt(h)) {
                if (a.enumerable = !1,
                    "writable" in a) {
                    a.writable = !1;
                    return
                }
                a.set || (a.set = () => {
                    throw Error("Can not rewrite read-only method '" + c + "'")
                }
                )
            }
        }
        )
    }
    , Zu = (o, a) => {
        const c = {}
            , h = f => {
                f.forEach(p => {
                    c[p] = !0
                }
                )
            }
            ;
        return Me(o) ? h(o) : h(String(o).split(a)),
            c
    }
    , Qu = () => { }
    , tf = (o, a) => o != null && Number.isFinite(o = +o) ? o : a;
function ef(o) {
    return !!(o && Mt(o.append) && o[Symbol.toStringTag] === "FormData" && o[Symbol.iterator])
}
const nf = o => {
    const a = new Array(10)
        , c = (h, f) => {
            if (hn(h)) {
                if (a.indexOf(h) >= 0)
                    return;
                if (!("toJSON" in h)) {
                    a[f] = h;
                    const p = Me(h) ? [] : {};
                    return gi(h, (m, y) => {
                        const A = c(m, f + 1);
                        !mi(A) && (p[y] = A)
                    }
                    ),
                        a[f] = void 0,
                        p
                }
            }
            return h
        }
        ;
    return c(o, 0)
}
    , sf = Ut("AsyncFunction")
    , rf = o => o && (hn(o) || Mt(o)) && Mt(o.then) && Mt(o.catch)
    , Ko = ((o, a) => o ? setImmediate : a ? ((c, h) => (xe.addEventListener("message", ({ source: f, data: p }) => {
        f === xe && p === c && h.length && h.shift()()
    }
        , !1),
        f => {
            h.push(f),
                xe.postMessage(c, "*")
        }
    ))(`axios@${Math.random()}`, []) : c => setTimeout(c))(typeof setImmediate == "function", Mt(xe.postMessage))
    , of = typeof queueMicrotask < "u" ? queueMicrotask.bind(xe) : typeof process < "u" && process.nextTick || Ko
    , b = {
        isArray: Me,
        isArrayBuffer: qo,
        isBuffer: ku,
        isFormData: _u,
        isArrayBufferView: Su,
        isString: Eu,
        isNumber: Wo,
        isBoolean: Tu,
        isObject: hn,
        isPlainObject: en,
        isReadableStream: Nu,
        isRequest: Du,
        isResponse: Bu,
        isHeaders: Fu,
        isUndefined: mi,
        isDate: Cu,
        isFile: Ou,
        isBlob: Au,
        isRegExp: Gu,
        isFunction: Mt,
        isStream: Iu,
        isURLSearchParams: Ru,
        isTypedArray: Wu,
        isFileList: Pu,
        forEach: gi,
        merge: ds,
        extend: Lu,
        trim: Mu,
        stripBOM: zu,
        inherits: Hu,
        toFlatObject: ju,
        kindOf: ln,
        kindOfTest: Ut,
        endsWith: Uu,
        toArray: qu,
        forEachEntry: Vu,
        matchAll: Ju,
        isHTMLForm: Xu,
        hasOwnProperty: Ao,
        hasOwnProp: Ao,
        reduceDescriptors: Xo,
        freezeMethods: Yu,
        toObjectSet: Zu,
        toCamelCase: Ku,
        noop: Qu,
        toFiniteNumber: tf,
        findKey: Vo,
        global: xe,
        isContextDefined: Jo,
        isSpecCompliantForm: ef,
        toJSONObject: nf,
        isAsyncFn: sf,
        isThenable: rf,
        setImmediate: Ko,
        asap: of
    };
function D(o, a, c, h, f) {
    Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
        this.message = o,
        this.name = "AxiosError",
        a && (this.code = a),
        c && (this.config = c),
        h && (this.request = h),
        f && (this.response = f,
            this.status = f.status ? f.status : null)
}
b.inherits(D, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: b.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Go = D.prototype
    , Yo = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(o => {
    Yo[o] = {
        value: o
    }
}
);
Object.defineProperties(D, Yo);
Object.defineProperty(Go, "isAxiosError", {
    value: !0
});
D.from = (o, a, c, h, f, p) => {
    const m = Object.create(Go);
    return b.toFlatObject(o, m, function (A) {
        return A !== Error.prototype
    }, y => y !== "isAxiosError"),
        D.call(m, o.message, a, c, h, f),
        m.cause = o,
        m.name = o.name,
        p && Object.assign(m, p),
        m
}
    ;
const af = null;
function ps(o) {
    return b.isPlainObject(o) || b.isArray(o)
}
function Zo(o) {
    return b.endsWith(o, "[]") ? o.slice(0, -2) : o
}
function Po(o, a, c) {
    return o ? o.concat(a).map(function (f, p) {
        return f = Zo(f),
            !c && p ? "[" + f + "]" : f
    }).join(c ? "." : "") : a
}
function lf(o) {
    return b.isArray(o) && !o.some(ps)
}
const cf = b.toFlatObject(b, {}, null, function (a) {
    return /^is[A-Z]/.test(a)
});
function un(o, a, c) {
    if (!b.isObject(o))
        throw new TypeError("target must be an object");
    a = a || new FormData,
        c = b.toFlatObject(c, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function (R, O) {
            return !b.isUndefined(O[R])
        });
    const h = c.metaTokens
        , f = c.visitor || x
        , p = c.dots
        , m = c.indexes
        , A = (c.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(a);
    if (!b.isFunction(f))
        throw new TypeError("visitor must be a function");
    function $(T) {
        if (T === null)
            return "";
        if (b.isDate(T))
            return T.toISOString();
        if (!A && b.isBlob(T))
            throw new D("Blob is not supported. Use a Buffer instead.");
        return b.isArrayBuffer(T) || b.isTypedArray(T) ? A && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T
    }
    function x(T, R, O) {
        let z = T;
        if (T && !O && typeof T == "object") {
            if (b.endsWith(R, "{}"))
                R = h ? R : R.slice(0, -2),
                    T = JSON.stringify(T);
            else if (b.isArray(T) && lf(T) || (b.isFileList(T) || b.endsWith(R, "[]")) && (z = b.toArray(T)))
                return R = Zo(R),
                    z.forEach(function (Q, xt) {
                        !(b.isUndefined(Q) || Q === null) && a.append(m === !0 ? Po([R], xt, p) : m === null ? R : R + "[]", $(Q))
                    }),
                    !1
        }
        return ps(T) ? !0 : (a.append(Po(O, R, p), $(T)),
            !1)
    }
    const P = []
        , S = Object.assign(cf, {
            defaultVisitor: x,
            convertValue: $,
            isVisitable: ps
        });
    function J(T, R) {
        if (!b.isUndefined(T)) {
            if (P.indexOf(T) !== -1)
                throw Error("Circular reference detected in " + R.join("."));
            P.push(T),
                b.forEach(T, function (z, Z) {
                    (!(b.isUndefined(z) || z === null) && f.call(a, z, b.isString(Z) ? Z.trim() : Z, R, S)) === !0 && J(z, R ? R.concat(Z) : [Z])
                }),
                P.pop()
        }
    }
    if (!b.isObject(o))
        throw new TypeError("data must be an object");
    return J(o),
        a
}
function Io(o) {
    const a = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function (h) {
        return a[h]
    })
}
function ys(o, a) {
    this._pairs = [],
        o && un(o, this, a)
}
const Qo = ys.prototype;
Qo.append = function (a, c) {
    this._pairs.push([a, c])
}
    ;
Qo.toString = function (a) {
    const c = a ? function (h) {
        return a.call(this, h, Io)
    }
        : Io;
    return this._pairs.map(function (f) {
        return c(f[0]) + "=" + c(f[1])
    }, "").join("&")
}
    ;
function hf(o) {
    return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function ta(o, a, c) {
    if (!a)
        return o;
    const h = c && c.encode || hf;
    b.isFunction(c) && (c = {
        serialize: c
    });
    const f = c && c.serialize;
    let p;
    if (f ? p = f(a, c) : p = b.isURLSearchParams(a) ? a.toString() : new ys(a, c).toString(h),
        p) {
        const m = o.indexOf("#");
        m !== -1 && (o = o.slice(0, m)),
            o += (o.indexOf("?") === -1 ? "?" : "&") + p
    }
    return o
}
class _o {
    constructor() {
        this.handlers = []
    }
    use(a, c, h) {
        return this.handlers.push({
            fulfilled: a,
            rejected: c,
            synchronous: h ? h.synchronous : !1,
            runWhen: h ? h.runWhen : null
        }),
            this.handlers.length - 1
    }
    eject(a) {
        this.handlers[a] && (this.handlers[a] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(a) {
        b.forEach(this.handlers, function (h) {
            h !== null && a(h)
        })
    }
}
const ea = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
    , uf = typeof URLSearchParams < "u" ? URLSearchParams : ys
    , ff = typeof FormData < "u" ? FormData : null
    , df = typeof Blob < "u" ? Blob : null
    , pf = {
        isBrowser: !0,
        classes: {
            URLSearchParams: uf,
            FormData: ff,
            Blob: df
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }
    , xs = typeof window < "u" && typeof document < "u"
    , ms = typeof navigator == "object" && navigator || void 0
    , mf = xs && (!ms || ["ReactNative", "NativeScript", "NS"].indexOf(ms.product) < 0)
    , gf = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
    , vf = xs && window.location.href || "http://localhost"
    , wf = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: xs,
        hasStandardBrowserEnv: mf,
        hasStandardBrowserWebWorkerEnv: gf,
        navigator: ms,
        origin: vf
    }, Symbol.toStringTag, {
        value: "Module"
    }))
    , kt = {
        ...wf,
        ...pf
    };
function bf(o, a) {
    return un(o, new kt.classes.URLSearchParams, Object.assign({
        visitor: function (c, h, f, p) {
            return kt.isNode && b.isBuffer(c) ? (this.append(h, c.toString("base64")),
                !1) : p.defaultVisitor.apply(this, arguments)
        }
    }, a))
}
function yf(o) {
    return b.matchAll(/\w+|\[(\w*)]/g, o).map(a => a[0] === "[]" ? "" : a[1] || a[0])
}
function xf(o) {
    const a = {}
        , c = Object.keys(o);
    let h;
    const f = c.length;
    let p;
    for (h = 0; h < f; h++)
        p = c[h],
            a[p] = o[p];
    return a
}
function ia(o) {
    function a(c, h, f, p) {
        let m = c[p++];
        if (m === "__proto__")
            return !0;
        const y = Number.isFinite(+m)
            , A = p >= c.length;
        return m = !m && b.isArray(f) ? f.length : m,
            A ? (b.hasOwnProp(f, m) ? f[m] = [f[m], h] : f[m] = h,
                !y) : ((!f[m] || !b.isObject(f[m])) && (f[m] = []),
                    a(c, h, f[m], p) && b.isArray(f[m]) && (f[m] = xf(f[m])),
                    !y)
    }
    if (b.isFormData(o) && b.isFunction(o.entries)) {
        const c = {};
        return b.forEachEntry(o, (h, f) => {
            a(yf(h), f, c, 0)
        }
        ),
            c
    }
    return null
}
function $f(o, a, c) {
    if (b.isString(o))
        try {
            return (a || JSON.parse)(o),
                b.trim(o)
        } catch (h) {
            if (h.name !== "SyntaxError")
                throw h
        }
    return (c || JSON.stringify)(o)
}
const vi = {
    transitional: ea,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (a, c) {
        const h = c.getContentType() || ""
            , f = h.indexOf("application/json") > -1
            , p = b.isObject(a);
        if (p && b.isHTMLForm(a) && (a = new FormData(a)),
            b.isFormData(a))
            return f ? JSON.stringify(ia(a)) : a;
        if (b.isArrayBuffer(a) || b.isBuffer(a) || b.isStream(a) || b.isFile(a) || b.isBlob(a) || b.isReadableStream(a))
            return a;
        if (b.isArrayBufferView(a))
            return a.buffer;
        if (b.isURLSearchParams(a))
            return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                a.toString();
        let y;
        if (p) {
            if (h.indexOf("application/x-www-form-urlencoded") > -1)
                return bf(a, this.formSerializer).toString();
            if ((y = b.isFileList(a)) || h.indexOf("multipart/form-data") > -1) {
                const A = this.env && this.env.FormData;
                return un(y ? {
                    "files[]": a
                } : a, A && new A, this.formSerializer)
            }
        }
        return p || f ? (c.setContentType("application/json", !1),
            $f(a)) : a
    }
    ],
    transformResponse: [function (a) {
        const c = this.transitional || vi.transitional
            , h = c && c.forcedJSONParsing
            , f = this.responseType === "json";
        if (b.isResponse(a) || b.isReadableStream(a))
            return a;
        if (a && b.isString(a) && (h && !this.responseType || f)) {
            const m = !(c && c.silentJSONParsing) && f;
            try {
                return JSON.parse(a)
            } catch (y) {
                if (m)
                    throw y.name === "SyntaxError" ? D.from(y, D.ERR_BAD_RESPONSE, this, null, this.response) : y
            }
        }
        return a
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: kt.classes.FormData,
        Blob: kt.classes.Blob
    },
    validateStatus: function (a) {
        return a >= 200 && a < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], o => {
    vi.headers[o] = {}
}
);
const kf = b.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
    , Sf = o => {
        const a = {};
        let c, h, f;
        return o && o.split(`
`).forEach(function (m) {
            f = m.indexOf(":"),
                c = m.substring(0, f).trim().toLowerCase(),
                h = m.substring(f + 1).trim(),
                !(!c || a[c] && kf[c]) && (c === "set-cookie" ? a[c] ? a[c].push(h) : a[c] = [h] : a[c] = a[c] ? a[c] + ", " + h : h)
        }),
            a
    }
    , Ro = Symbol("internals");
function pi(o) {
    return o && String(o).trim().toLowerCase()
}
function nn(o) {
    return o === !1 || o == null ? o : b.isArray(o) ? o.map(nn) : String(o)
}
function Ef(o) {
    const a = Object.create(null)
        , c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let h;
    for (; h = c.exec(o);)
        a[h[1]] = h[2];
    return a
}
const Tf = o => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function hs(o, a, c, h, f) {
    if (b.isFunction(h))
        return h.call(this, a, c);
    if (f && (a = c),
        !!b.isString(a)) {
        if (b.isString(h))
            return a.indexOf(h) !== -1;
        if (b.isRegExp(h))
            return h.test(a)
    }
}
function Cf(o) {
    return o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, c, h) => c.toUpperCase() + h)
}
function Of(o, a) {
    const c = b.toCamelCase(" " + a);
    ["get", "set", "has"].forEach(h => {
        Object.defineProperty(o, h + c, {
            value: function (f, p, m) {
                return this[h].call(this, a, f, p, m)
            },
            configurable: !0
        })
    }
    )
}
let At = class {
    constructor(a) {
        a && this.set(a)
    }
    set(a, c, h) {
        const f = this;
        function p(y, A, $) {
            const x = pi(A);
            if (!x)
                throw new Error("header name must be a non-empty string");
            const P = b.findKey(f, x);
            (!P || f[P] === void 0 || $ === !0 || $ === void 0 && f[P] !== !1) && (f[P || A] = nn(y))
        }
        const m = (y, A) => b.forEach(y, ($, x) => p($, x, A));
        if (b.isPlainObject(a) || a instanceof this.constructor)
            m(a, c);
        else if (b.isString(a) && (a = a.trim()) && !Tf(a))
            m(Sf(a), c);
        else if (b.isHeaders(a))
            for (const [y, A] of a.entries())
                p(A, y, h);
        else
            a != null && p(c, a, h);
        return this
    }
    get(a, c) {
        if (a = pi(a),
            a) {
            const h = b.findKey(this, a);
            if (h) {
                const f = this[h];
                if (!c)
                    return f;
                if (c === !0)
                    return Ef(f);
                if (b.isFunction(c))
                    return c.call(this, f, h);
                if (b.isRegExp(c))
                    return c.exec(f);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(a, c) {
        if (a = pi(a),
            a) {
            const h = b.findKey(this, a);
            return !!(h && this[h] !== void 0 && (!c || hs(this, this[h], h, c)))
        }
        return !1
    }
    delete(a, c) {
        const h = this;
        let f = !1;
        function p(m) {
            if (m = pi(m),
                m) {
                const y = b.findKey(h, m);
                y && (!c || hs(h, h[y], y, c)) && (delete h[y],
                    f = !0)
            }
        }
        return b.isArray(a) ? a.forEach(p) : p(a),
            f
    }
    clear(a) {
        const c = Object.keys(this);
        let h = c.length
            , f = !1;
        for (; h--;) {
            const p = c[h];
            (!a || hs(this, this[p], p, a, !0)) && (delete this[p],
                f = !0)
        }
        return f
    }
    normalize(a) {
        const c = this
            , h = {};
        return b.forEach(this, (f, p) => {
            const m = b.findKey(h, p);
            if (m) {
                c[m] = nn(f),
                    delete c[p];
                return
            }
            const y = a ? Cf(p) : String(p).trim();
            y !== p && delete c[p],
                c[y] = nn(f),
                h[y] = !0
        }
        ),
            this
    }
    concat(...a) {
        return this.constructor.concat(this, ...a)
    }
    toJSON(a) {
        const c = Object.create(null);
        return b.forEach(this, (h, f) => {
            h != null && h !== !1 && (c[f] = a && b.isArray(h) ? h.join(", ") : h)
        }
        ),
            c
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([a, c]) => a + ": " + c).join(`
`)
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(a) {
        return a instanceof this ? a : new this(a)
    }
    static concat(a, ...c) {
        const h = new this(a);
        return c.forEach(f => h.set(f)),
            h
    }
    static accessor(a) {
        const h = (this[Ro] = this[Ro] = {
            accessors: {}
        }).accessors
            , f = this.prototype;
        function p(m) {
            const y = pi(m);
            h[y] || (Of(f, m),
                h[y] = !0)
        }
        return b.isArray(a) ? a.forEach(p) : p(a),
            this
    }
}
    ;
At.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(At.prototype, ({ value: o }, a) => {
    let c = a[0].toUpperCase() + a.slice(1);
    return {
        get: () => o,
        set(h) {
            this[c] = h
        }
    }
}
);
b.freezeMethods(At);
function us(o, a) {
    const c = this || vi
        , h = a || c
        , f = At.from(h.headers);
    let p = h.data;
    return b.forEach(o, function (y) {
        p = y.call(c, p, f.normalize(), a ? a.status : void 0)
    }),
        f.normalize(),
        p
}
function na(o) {
    return !!(o && o.__CANCEL__)
}
function Le(o, a, c) {
    D.call(this, o ?? "canceled", D.ERR_CANCELED, a, c),
        this.name = "CanceledError"
}
b.inherits(Le, D, {
    __CANCEL__: !0
});
function sa(o, a, c) {
    const h = c.config.validateStatus;
    !c.status || !h || h(c.status) ? o(c) : a(new D("Request failed with status code " + c.status, [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4], c.config, c.request, c))
}
function Af(o) {
    const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return a && a[1] || ""
}
function Pf(o, a) {
    o = o || 10;
    const c = new Array(o)
        , h = new Array(o);
    let f = 0, p = 0, m;
    return a = a !== void 0 ? a : 1e3,
        function (A) {
            const $ = Date.now()
                , x = h[p];
            m || (m = $),
                c[f] = A,
                h[f] = $;
            let P = p
                , S = 0;
            for (; P !== f;)
                S += c[P++],
                    P = P % o;
            if (f = (f + 1) % o,
                f === p && (p = (p + 1) % o),
                $ - m < a)
                return;
            const J = x && $ - x;
            return J ? Math.round(S * 1e3 / J) : void 0
        }
}
function If(o, a) {
    let c = 0, h = 1e3 / a, f, p;
    const m = ($, x = Date.now()) => {
        c = x,
            f = null,
            p && (clearTimeout(p),
                p = null),
            o.apply(null, $)
    }
        ;
    return [(...$) => {
        const x = Date.now()
            , P = x - c;
        P >= h ? m($, x) : (f = $,
            p || (p = setTimeout(() => {
                p = null,
                    m(f)
            }
                , h - P)))
    }
        , () => f && m(f)]
}
const on = (o, a, c = 3) => {
    let h = 0;
    const f = Pf(50, 250);
    return If(p => {
        const m = p.loaded
            , y = p.lengthComputable ? p.total : void 0
            , A = m - h
            , $ = f(A)
            , x = m <= y;
        h = m;
        const P = {
            loaded: m,
            total: y,
            progress: y ? m / y : void 0,
            bytes: A,
            rate: $ || void 0,
            estimated: $ && y && x ? (y - m) / $ : void 0,
            event: p,
            lengthComputable: y != null,
            [a ? "download" : "upload"]: !0
        };
        o(P)
    }
        , c)
}
    , No = (o, a) => {
        const c = o != null;
        return [h => a[0]({
            lengthComputable: c,
            total: o,
            loaded: h
        }), a[1]]
    }
    , Do = o => (...a) => b.asap(() => o(...a))
    , _f = kt.hasStandardBrowserEnv ? ((o, a) => c => (c = new URL(c, kt.origin),
        o.protocol === c.protocol && o.host === c.host && (a || o.port === c.port)))(new URL(kt.origin), kt.navigator && /(msie|trident)/i.test(kt.navigator.userAgent)) : () => !0
    , Rf = kt.hasStandardBrowserEnv ? {
        write(o, a, c, h, f, p) {
            const m = [o + "=" + encodeURIComponent(a)];
            b.isNumber(c) && m.push("expires=" + new Date(c).toGMTString()),
                b.isString(h) && m.push("path=" + h),
                b.isString(f) && m.push("domain=" + f),
                p === !0 && m.push("secure"),
                document.cookie = m.join("; ")
        },
        read(o) {
            const a = document.cookie.match(new RegExp("(^|;\\s*)(" + o + ")=([^;]*)"));
            return a ? decodeURIComponent(a[3]) : null
        },
        remove(o) {
            this.write(o, "", Date.now() - 864e5)
        }
    } : {
        write() { },
        read() {
            return null
        },
        remove() { }
    };
function Nf(o) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o)
}
function Df(o, a) {
    return a ? o.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : o
}
function ra(o, a, c) {
    let h = !Nf(a);
    return o && (h || c == !1) ? Df(o, a) : a
}
const Bo = o => o instanceof At ? {
    ...o
} : o;
function ke(o, a) {
    a = a || {};
    const c = {};
    function h($, x, P, S) {
        return b.isPlainObject($) && b.isPlainObject(x) ? b.merge.call({
            caseless: S
        }, $, x) : b.isPlainObject(x) ? b.merge({}, x) : b.isArray(x) ? x.slice() : x
    }
    function f($, x, P, S) {
        if (b.isUndefined(x)) {
            if (!b.isUndefined($))
                return h(void 0, $, P, S)
        } else
            return h($, x, P, S)
    }
    function p($, x) {
        if (!b.isUndefined(x))
            return h(void 0, x)
    }
    function m($, x) {
        if (b.isUndefined(x)) {
            if (!b.isUndefined($))
                return h(void 0, $)
        } else
            return h(void 0, x)
    }
    function y($, x, P) {
        if (P in a)
            return h($, x);
        if (P in o)
            return h(void 0, $)
    }
    const A = {
        url: p,
        method: p,
        data: p,
        baseURL: m,
        transformRequest: m,
        transformResponse: m,
        paramsSerializer: m,
        timeout: m,
        timeoutMessage: m,
        withCredentials: m,
        withXSRFToken: m,
        adapter: m,
        responseType: m,
        xsrfCookieName: m,
        xsrfHeaderName: m,
        onUploadProgress: m,
        onDownloadProgress: m,
        decompress: m,
        maxContentLength: m,
        maxBodyLength: m,
        beforeRedirect: m,
        transport: m,
        httpAgent: m,
        httpsAgent: m,
        cancelToken: m,
        socketPath: m,
        responseEncoding: m,
        validateStatus: y,
        headers: ($, x, P) => f(Bo($), Bo(x), P, !0)
    };
    return b.forEach(Object.keys(Object.assign({}, o, a)), function (x) {
        const P = A[x] || f
            , S = P(o[x], a[x], x);
        b.isUndefined(S) && P !== y || (c[x] = S)
    }),
        c
}
const oa = o => {
    const a = ke({}, o);
    let { data: c, withXSRFToken: h, xsrfHeaderName: f, xsrfCookieName: p, headers: m, auth: y } = a;
    a.headers = m = At.from(m),
        a.url = ta(ra(a.baseURL, a.url, a.allowAbsoluteUrls), o.params, o.paramsSerializer),
        y && m.set("Authorization", "Basic " + btoa((y.username || "") + ":" + (y.password ? unescape(encodeURIComponent(y.password)) : "")));
    let A;
    if (b.isFormData(c)) {
        if (kt.hasStandardBrowserEnv || kt.hasStandardBrowserWebWorkerEnv)
            m.setContentType(void 0);
        else if ((A = m.getContentType()) !== !1) {
            const [$, ...x] = A ? A.split(";").map(P => P.trim()).filter(Boolean) : [];
            m.setContentType([$ || "multipart/form-data", ...x].join("; "))
        }
    }
    if (kt.hasStandardBrowserEnv && (h && b.isFunction(h) && (h = h(a)),
        h || h !== !1 && _f(a.url))) {
        const $ = f && p && Rf.read(p);
        $ && m.set(f, $)
    }
    return a
}
    , Bf = typeof XMLHttpRequest < "u"
    , Ff = Bf && function (o) {
        return new Promise(function (c, h) {
            const f = oa(o);
            let p = f.data;
            const m = At.from(f.headers).normalize();
            let { responseType: y, onUploadProgress: A, onDownloadProgress: $ } = f, x, P, S, J, T;
            function R() {
                J && J(),
                    T && T(),
                    f.cancelToken && f.cancelToken.unsubscribe(x),
                    f.signal && f.signal.removeEventListener("abort", x)
            }
            let O = new XMLHttpRequest;
            O.open(f.method.toUpperCase(), f.url, !0),
                O.timeout = f.timeout;
            function z() {
                if (!O)
                    return;
                const Q = At.from("getAllResponseHeaders" in O && O.getAllResponseHeaders())
                    , dt = {
                        data: !y || y === "text" || y === "json" ? O.responseText : O.response,
                        status: O.status,
                        statusText: O.statusText,
                        headers: Q,
                        config: o,
                        request: O
                    };
                sa(function (Tt) {
                    c(Tt),
                        R()
                }, function (Tt) {
                    h(Tt),
                        R()
                }, dt),
                    O = null
            }
            "onloadend" in O ? O.onloadend = z : O.onreadystatechange = function () {
                !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(z)
            }
                ,
                O.onabort = function () {
                    O && (h(new D("Request aborted", D.ECONNABORTED, o, O)),
                        O = null)
                }
                ,
                O.onerror = function () {
                    h(new D("Network Error", D.ERR_NETWORK, o, O)),
                        O = null
                }
                ,
                O.ontimeout = function () {
                    let xt = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded";
                    const dt = f.transitional || ea;
                    f.timeoutErrorMessage && (xt = f.timeoutErrorMessage),
                        h(new D(xt, dt.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, o, O)),
                        O = null
                }
                ,
                p === void 0 && m.setContentType(null),
                "setRequestHeader" in O && b.forEach(m.toJSON(), function (xt, dt) {
                    O.setRequestHeader(dt, xt)
                }),
                b.isUndefined(f.withCredentials) || (O.withCredentials = !!f.withCredentials),
                y && y !== "json" && (O.responseType = f.responseType),
                $ && ([S, T] = on($, !0),
                    O.addEventListener("progress", S)),
                A && O.upload && ([P, J] = on(A),
                    O.upload.addEventListener("progress", P),
                    O.upload.addEventListener("loadend", J)),
                (f.cancelToken || f.signal) && (x = Q => {
                    O && (h(!Q || Q.type ? new Le(null, o, O) : Q),
                        O.abort(),
                        O = null)
                }
                    ,
                    f.cancelToken && f.cancelToken.subscribe(x),
                    f.signal && (f.signal.aborted ? x() : f.signal.addEventListener("abort", x)));
            const Z = Af(f.url);
            if (Z && kt.protocols.indexOf(Z) === -1) {
                h(new D("Unsupported protocol " + Z + ":", D.ERR_BAD_REQUEST, o));
                return
            }
            O.send(p || null)
        }
        )
    }
    , Mf = (o, a) => {
        const { length: c } = o = o ? o.filter(Boolean) : [];
        if (a || c) {
            let h = new AbortController, f;
            const p = function ($) {
                if (!f) {
                    f = !0,
                        y();
                    const x = $ instanceof Error ? $ : this.reason;
                    h.abort(x instanceof D ? x : new Le(x instanceof Error ? x.message : x))
                }
            };
            let m = a && setTimeout(() => {
                m = null,
                    p(new D(`timeout ${a} of ms exceeded`, D.ETIMEDOUT))
            }
                , a);
            const y = () => {
                o && (m && clearTimeout(m),
                    m = null,
                    o.forEach($ => {
                        $.unsubscribe ? $.unsubscribe(p) : $.removeEventListener("abort", p)
                    }
                    ),
                    o = null)
            }
                ;
            o.forEach($ => $.addEventListener("abort", p));
            const { signal: A } = h;
            return A.unsubscribe = () => b.asap(y),
                A
        }
    }
    , Lf = function* (o, a) {
        let c = o.byteLength;
        if (c < a) {
            yield o;
            return
        }
        let h = 0, f;
        for (; h < c;)
            f = h + a,
                yield o.slice(h, f),
                h = f
    }
    , zf = async function* (o, a) {
        for await (const c of Hf(o))
            yield* Lf(c, a)
    }
    , Hf = async function* (o) {
        if (o[Symbol.asyncIterator]) {
            yield* o;
            return
        }
        const a = o.getReader();
        try {
            for (; ;) {
                const { done: c, value: h } = await a.read();
                if (c)
                    break;
                yield h
            }
        } finally {
            await a.cancel()
        }
    }
    , Fo = (o, a, c, h) => {
        const f = zf(o, a);
        let p = 0, m, y = A => {
            m || (m = !0,
                h && h(A))
        }
            ;
        return new ReadableStream({
            async pull(A) {
                try {
                    const { done: $, value: x } = await f.next();
                    if ($) {
                        y(),
                            A.close();
                        return
                    }
                    let P = x.byteLength;
                    if (c) {
                        let S = p += P;
                        c(S)
                    }
                    A.enqueue(new Uint8Array(x))
                } catch ($) {
                    throw y($),
                    $
                }
            },
            cancel(A) {
                return y(A),
                    f.return()
            }
        }, {
            highWaterMark: 2
        })
    }
    , fn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
    , aa = fn && typeof ReadableStream == "function"
    , jf = fn && (typeof TextEncoder == "function" ? (o => a => o.encode(a))(new TextEncoder) : async o => new Uint8Array(await new Response(o).arrayBuffer()))
    , la = (o, ...a) => {
        try {
            return !!o(...a)
        } catch {
            return !1
        }
    }
    , Uf = aa && la(() => {
        let o = !1;
        const a = new Request(kt.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return o = !0,
                    "half"
            }
        }).headers.has("Content-Type");
        return o && !a
    }
    )
    , Mo = 64 * 1024
    , gs = aa && la(() => b.isReadableStream(new Response("").body))
    , an = {
        stream: gs && (o => o.body)
    };
fn && (o => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(a => {
        !an[a] && (an[a] = b.isFunction(o[a]) ? c => c[a]() : (c, h) => {
            throw new D(`Response type '${a}' is not supported`, D.ERR_NOT_SUPPORT, h)
        }
        )
    }
    )
}
)(new Response);
const qf = async o => {
    if (o == null)
        return 0;
    if (b.isBlob(o))
        return o.size;
    if (b.isSpecCompliantForm(o))
        return (await new Request(kt.origin, {
            method: "POST",
            body: o
        }).arrayBuffer()).byteLength;
    if (b.isArrayBufferView(o) || b.isArrayBuffer(o))
        return o.byteLength;
    if (b.isURLSearchParams(o) && (o = o + ""),
        b.isString(o))
        return (await jf(o)).byteLength
}
    , Wf = async (o, a) => {
        const c = b.toFiniteNumber(o.getContentLength());
        return c ?? qf(a)
    }
    , Vf = fn && (async o => {
        let { url: a, method: c, data: h, signal: f, cancelToken: p, timeout: m, onDownloadProgress: y, onUploadProgress: A, responseType: $, headers: x, withCredentials: P = "same-origin", fetchOptions: S } = oa(o);
        $ = $ ? ($ + "").toLowerCase() : "text";
        let J = Mf([f, p && p.toAbortSignal()], m), T;
        const R = J && J.unsubscribe && (() => {
            J.unsubscribe()
        }
        );
        let O;
        try {
            if (A && Uf && c !== "get" && c !== "head" && (O = await Wf(x, h)) !== 0) {
                let dt = new Request(a, {
                    method: "POST",
                    body: h,
                    duplex: "half"
                }), Pt;
                if (b.isFormData(h) && (Pt = dt.headers.get("content-type")) && x.setContentType(Pt),
                    dt.body) {
                    const [Tt, Zt] = No(O, on(Do(A)));
                    h = Fo(dt.body, Mo, Tt, Zt)
                }
            }
            b.isString(P) || (P = P ? "include" : "omit");
            const z = "credentials" in Request.prototype;
            T = new Request(a, {
                ...S,
                signal: J,
                method: c.toUpperCase(),
                headers: x.normalize().toJSON(),
                body: h,
                duplex: "half",
                credentials: z ? P : void 0
            });
            let Z = await fetch(T);
            const Q = gs && ($ === "stream" || $ === "response");
            if (gs && (y || Q && R)) {
                const dt = {};
                ["status", "statusText", "headers"].forEach(Jt => {
                    dt[Jt] = Z[Jt]
                }
                );
                const Pt = b.toFiniteNumber(Z.headers.get("content-length"))
                    , [Tt, Zt] = y && No(Pt, on(Do(y), !0)) || [];
                Z = new Response(Fo(Z.body, Mo, Tt, () => {
                    Zt && Zt(),
                        R && R()
                }
                ), dt)
            }
            $ = $ || "text";
            let xt = await an[b.findKey(an, $) || "text"](Z, o);
            return !Q && R && R(),
                await new Promise((dt, Pt) => {
                    sa(dt, Pt, {
                        data: xt,
                        headers: At.from(Z.headers),
                        status: Z.status,
                        statusText: Z.statusText,
                        config: o,
                        request: T
                    })
                }
                )
        } catch (z) {
            throw R && R(),
            z && z.name === "TypeError" && /fetch/i.test(z.message) ? Object.assign(new D("Network Error", D.ERR_NETWORK, o, T), {
                cause: z.cause || z
            }) : D.from(z, z && z.code, o, T)
        }
    }
    )
    , vs = {
        http: af,
        xhr: Ff,
        fetch: Vf
    };
b.forEach(vs, (o, a) => {
    if (o) {
        try {
            Object.defineProperty(o, "name", {
                value: a
            })
        } catch { }
        Object.defineProperty(o, "adapterName", {
            value: a
        })
    }
}
);
const Lo = o => `- ${o}`
    , Jf = o => b.isFunction(o) || o === null || o === !1
    , ca = {
        getAdapter: o => {
            o = b.isArray(o) ? o : [o];
            const { length: a } = o;
            let c, h;
            const f = {};
            for (let p = 0; p < a; p++) {
                c = o[p];
                let m;
                if (h = c,
                    !Jf(c) && (h = vs[(m = String(c)).toLowerCase()],
                        h === void 0))
                    throw new D(`Unknown adapter '${m}'`);
                if (h)
                    break;
                f[m || "#" + p] = h
            }
            if (!h) {
                const p = Object.entries(f).map(([y, A]) => `adapter ${y} ` + (A === !1 ? "is not supported by the environment" : "is not available in the build"));
                let m = a ? p.length > 1 ? `since :
` + p.map(Lo).join(`
`) : " " + Lo(p[0]) : "as no adapter specified";
                throw new D("There is no suitable adapter to dispatch the request " + m, "ERR_NOT_SUPPORT")
            }
            return h
        }
        ,
        adapters: vs
    };
function fs(o) {
    if (o.cancelToken && o.cancelToken.throwIfRequested(),
        o.signal && o.signal.aborted)
        throw new Le(null, o)
}
function zo(o) {
    return fs(o),
        o.headers = At.from(o.headers),
        o.data = us.call(o, o.transformRequest),
        ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1),
        ca.getAdapter(o.adapter || vi.adapter)(o).then(function (h) {
            return fs(o),
                h.data = us.call(o, o.transformResponse, h),
                h.headers = At.from(h.headers),
                h
        }, function (h) {
            return na(h) || (fs(o),
                h && h.response && (h.response.data = us.call(o, o.transformResponse, h.response),
                    h.response.headers = At.from(h.response.headers))),
                Promise.reject(h)
        })
}
const ha = "1.8.4"
    , dn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((o, a) => {
    dn[o] = function (h) {
        return typeof h === o || "a" + (a < 1 ? "n " : " ") + o
    }
}
);
const Ho = {};
dn.transitional = function (a, c, h) {
    function f(p, m) {
        return "[Axios v" + ha + "] Transitional option '" + p + "'" + m + (h ? ". " + h : "")
    }
    return (p, m, y) => {
        if (a === !1)
            throw new D(f(m, " has been removed" + (c ? " in " + c : "")), D.ERR_DEPRECATED);
        return c && !Ho[m] && (Ho[m] = !0,
            console.warn(f(m, " has been deprecated since v" + c + " and will be removed in the near future"))),
            a ? a(p, m, y) : !0
    }
}
    ;
dn.spelling = function (a) {
    return (c, h) => (console.warn(`${h} is likely a misspelling of ${a}`),
        !0)
}
    ;
function Xf(o, a, c) {
    if (typeof o != "object")
        throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
    const h = Object.keys(o);
    let f = h.length;
    for (; f-- > 0;) {
        const p = h[f]
            , m = a[p];
        if (m) {
            const y = o[p]
                , A = y === void 0 || m(y, p, o);
            if (A !== !0)
                throw new D("option " + p + " must be " + A, D.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (c !== !0)
            throw new D("Unknown option " + p, D.ERR_BAD_OPTION)
    }
}
const sn = {
    assertOptions: Xf,
    validators: dn
}
    , Vt = sn.validators;
let $e = class {
    constructor(a) {
        this.defaults = a,
            this.interceptors = {
                request: new _o,
                response: new _o
            }
    }
    async request(a, c) {
        try {
            return await this._request(a, c)
        } catch (h) {
            if (h instanceof Error) {
                let f = {};
                Error.captureStackTrace ? Error.captureStackTrace(f) : f = new Error;
                const p = f.stack ? f.stack.replace(/^.+\n/, "") : "";
                try {
                    h.stack ? p && !String(h.stack).endsWith(p.replace(/^.+\n.+\n/, "")) && (h.stack += `
` + p) : h.stack = p
                } catch { }
            }
            throw h
        }
    }
    _request(a, c) {
        typeof a == "string" ? (c = c || {},
            c.url = a) : c = a || {},
            c = ke(this.defaults, c);
        const { transitional: h, paramsSerializer: f, headers: p } = c;
        h !== void 0 && sn.assertOptions(h, {
            silentJSONParsing: Vt.transitional(Vt.boolean),
            forcedJSONParsing: Vt.transitional(Vt.boolean),
            clarifyTimeoutError: Vt.transitional(Vt.boolean)
        }, !1),
            f != null && (b.isFunction(f) ? c.paramsSerializer = {
                serialize: f
            } : sn.assertOptions(f, {
                encode: Vt.function,
                serialize: Vt.function
            }, !0)),
            c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = !0),
            sn.assertOptions(c, {
                baseUrl: Vt.spelling("baseURL"),
                withXsrfToken: Vt.spelling("withXSRFToken")
            }, !0),
            c.method = (c.method || this.defaults.method || "get").toLowerCase();
        let m = p && b.merge(p.common, p[c.method]);
        p && b.forEach(["delete", "get", "head", "post", "put", "patch", "common"], T => {
            delete p[T]
        }
        ),
            c.headers = At.concat(m, p);
        const y = [];
        let A = !0;
        this.interceptors.request.forEach(function (R) {
            typeof R.runWhen == "function" && R.runWhen(c) === !1 || (A = A && R.synchronous,
                y.unshift(R.fulfilled, R.rejected))
        });
        const $ = [];
        this.interceptors.response.forEach(function (R) {
            $.push(R.fulfilled, R.rejected)
        });
        let x, P = 0, S;
        if (!A) {
            const T = [zo.bind(this), void 0];
            for (T.unshift.apply(T, y),
                T.push.apply(T, $),
                S = T.length,
                x = Promise.resolve(c); P < S;)
                x = x.then(T[P++], T[P++]);
            return x
        }
        S = y.length;
        let J = c;
        for (P = 0; P < S;) {
            const T = y[P++]
                , R = y[P++];
            try {
                J = T(J)
            } catch (O) {
                R.call(this, O);
                break
            }
        }
        try {
            x = zo.call(this, J)
        } catch (T) {
            return Promise.reject(T)
        }
        for (P = 0,
            S = $.length; P < S;)
            x = x.then($[P++], $[P++]);
        return x
    }
    getUri(a) {
        a = ke(this.defaults, a);
        const c = ra(a.baseURL, a.url, a.allowAbsoluteUrls);
        return ta(c, a.params, a.paramsSerializer)
    }
}
    ;
b.forEach(["delete", "get", "head", "options"], function (a) {
    $e.prototype[a] = function (c, h) {
        return this.request(ke(h || {}, {
            method: a,
            url: c,
            data: (h || {}).data
        }))
    }
});
b.forEach(["post", "put", "patch"], function (a) {
    function c(h) {
        return function (p, m, y) {
            return this.request(ke(y || {}, {
                method: a,
                headers: h ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: p,
                data: m
            }))
        }
    }
    $e.prototype[a] = c(),
        $e.prototype[a + "Form"] = c(!0)
});
let Kf = class ua {
    constructor(a) {
        if (typeof a != "function")
            throw new TypeError("executor must be a function.");
        let c;
        this.promise = new Promise(function (p) {
            c = p
        }
        );
        const h = this;
        this.promise.then(f => {
            if (!h._listeners)
                return;
            let p = h._listeners.length;
            for (; p-- > 0;)
                h._listeners[p](f);
            h._listeners = null
        }
        ),
            this.promise.then = f => {
                let p;
                const m = new Promise(y => {
                    h.subscribe(y),
                        p = y
                }
                ).then(f);
                return m.cancel = function () {
                    h.unsubscribe(p)
                }
                    ,
                    m
            }
            ,
            a(function (p, m, y) {
                h.reason || (h.reason = new Le(p, m, y),
                    c(h.reason))
            })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(a) {
        if (this.reason) {
            a(this.reason);
            return
        }
        this._listeners ? this._listeners.push(a) : this._listeners = [a]
    }
    unsubscribe(a) {
        if (!this._listeners)
            return;
        const c = this._listeners.indexOf(a);
        c !== -1 && this._listeners.splice(c, 1)
    }
    toAbortSignal() {
        const a = new AbortController
            , c = h => {
                a.abort(h)
            }
            ;
        return this.subscribe(c),
            a.signal.unsubscribe = () => this.unsubscribe(c),
            a.signal
    }
    static source() {
        let a;
        return {
            token: new ua(function (f) {
                a = f
            }
            ),
            cancel: a
        }
    }
}
    ;
function Gf(o) {
    return function (c) {
        return o.apply(null, c)
    }
}
function Yf(o) {
    return b.isObject(o) && o.isAxiosError === !0
}
const ws = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(ws).forEach(([o, a]) => {
    ws[a] = o
}
);
function fa(o) {
    const a = new $e(o)
        , c = Uo($e.prototype.request, a);
    return b.extend(c, $e.prototype, a, {
        allOwnKeys: !0
    }),
        b.extend(c, a, null, {
            allOwnKeys: !0
        }),
        c.create = function (f) {
            return fa(ke(o, f))
        }
        ,
        c
}
const ut = fa(vi);
ut.Axios = $e;
ut.CanceledError = Le;
ut.CancelToken = Kf;
ut.isCancel = na;
ut.VERSION = ha;
ut.toFormData = un;
ut.AxiosError = D;
ut.Cancel = ut.CanceledError;
ut.all = function (a) {
    return Promise.all(a)
}
    ;
ut.spread = Gf;
ut.isAxiosError = Yf;
ut.mergeConfig = ke;
ut.AxiosHeaders = At;
ut.formToJSON = o => ia(b.isHTMLForm(o) ? new FormData(o) : o);
ut.getAdapter = ca.getAdapter;
ut.HttpStatusCode = ws;
ut.default = ut;
const { Axios: rd, AxiosError: od, CanceledError: ad, isCancel: ld, CancelToken: cd, VERSION: hd, all: ud, Cancel: fd, isAxiosError: dd, spread: pd, toFormData: md, AxiosHeaders: gd, HttpStatusCode: vd, formToJSON: wd, getAdapter: bd, mergeConfig: yd } = ut;
window.axios = ut;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
function Zf(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o
}
var rn = {
    exports: {}
};
/*! UIkit 3.16.26 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
var Qf = rn.exports, jo;
function td() {
    return jo || (jo = 1,
        function (o, a) {
            (function (c, h) {
                o.exports = h()
            }
            )(Qf, function () {
                const { hasOwnProperty: c, toString: h } = Object.prototype;
                function f(t, e) {
                    return c.call(t, e)
                }
                const p = /\B([A-Z])/g
                    , m = Lt(t => t.replace(p, "-$1").toLowerCase())
                    , y = /-(\w)/g
                    , A = Lt(t => (t.charAt(0).toLowerCase() + t.slice(1)).replace(y, (e, i) => i.toUpperCase()))
                    , $ = Lt(t => t.charAt(0).toUpperCase() + t.slice(1));
                function x(t, e) {
                    var i;
                    return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e)
                }
                function P(t, e) {
                    var i;
                    return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e)
                }
                function S(t, e) {
                    var i;
                    return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e)
                }
                function J(t, e) {
                    var i;
                    return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e)
                }
                const { isArray: T, from: R } = Array
                    , { assign: O } = Object;
                function z(t) {
                    return typeof t == "function"
                }
                function Z(t) {
                    return t !== null && typeof t == "object"
                }
                function Q(t) {
                    return h.call(t) === "[object Object]"
                }
                function xt(t) {
                    return Z(t) && t === t.window
                }
                function dt(t) {
                    return Zt(t) === 9
                }
                function Pt(t) {
                    return Zt(t) >= 1
                }
                function Tt(t) {
                    return Zt(t) === 1
                }
                function Zt(t) {
                    return !xt(t) && Z(t) && t.nodeType
                }
                function Jt(t) {
                    return typeof t == "boolean"
                }
                function tt(t) {
                    return typeof t == "string"
                }
                function ze(t) {
                    return typeof t == "number"
                }
                function qt(t) {
                    return ze(t) || tt(t) && !isNaN(t - parseFloat(t))
                }
                function He(t) {
                    return !(T(t) ? t.length : Z(t) && Object.keys(t).length)
                }
                function gt(t) {
                    return t === void 0
                }
                function pn(t) {
                    return Jt(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
                }
                function Xt(t) {
                    const e = Number(t);
                    return isNaN(e) ? !1 : e
                }
                function F(t) {
                    return parseFloat(t) || 0
                }
                function ot(t) {
                    return H(t)[0]
                }
                function H(t) {
                    return Pt(t) ? [t] : Array.from(t || []).filter(Pt)
                }
                function Se(t) {
                    if (xt(t))
                        return t;
                    t = ot(t);
                    const e = dt(t) ? t : t == null ? void 0 : t.ownerDocument;
                    return (e == null ? void 0 : e.defaultView) || window
                }
                function wi(t, e) {
                    return t === e || Z(t) && Z(e) && Object.keys(t).length === Object.keys(e).length && Qt(t, (i, n) => i === e[n])
                }
                function mn(t, e, i) {
                    return t.replace(new RegExp(`${e}|${i}`, "g"), n => n === e ? i : e)
                }
                function Ee(t) {
                    return t[t.length - 1]
                }
                function Qt(t, e) {
                    for (const i in t)
                        if (e(t[i], i) === !1)
                            return !1;
                    return !0
                }
                function bi(t, e) {
                    return t.slice().sort(({ [e]: i = 0 }, { [e]: n = 0 }) => i > n ? 1 : n > i ? -1 : 0)
                }
                function ne(t, e) {
                    return t.reduce((i, n) => i + F(z(e) ? e(n) : n[e]), 0)
                }
                function $s(t, e) {
                    const i = new Set;
                    return t.filter(({ [e]: n }) => i.has(n) ? !1 : i.add(n))
                }
                function gn(t, e) {
                    return e.reduce((i, n) => ({
                        ...i,
                        [n]: t[n]
                    }), {})
                }
                function $t(t, e = 0, i = 1) {
                    return Math.min(Math.max(Xt(t) || 0, e), i)
                }
                function j() { }
                function vn(...t) {
                    return [["bottom", "top"], ["right", "left"]].every(([e, i]) => Math.min(...t.map(({ [e]: n }) => n)) - Math.max(...t.map(({ [i]: n }) => n)) > 0)
                }
                function yi(t, e) {
                    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
                }
                function wn(t, e, i) {
                    const n = e === "width" ? "height" : "width";
                    return {
                        [n]: t[e] ? Math.round(i * t[n] / t[e]) : t[n],
                        [e]: i
                    }
                }
                function ks(t, e) {
                    t = {
                        ...t
                    };
                    for (const i in t)
                        t = t[i] > e[i] ? wn(t, i, e[i]) : t;
                    return t
                }
                function da(t, e) {
                    t = ks(t, e);
                    for (const i in t)
                        t = t[i] < e[i] ? wn(t, i, e[i]) : t;
                    return t
                }
                const xi = {
                    ratio: wn,
                    contain: ks,
                    cover: da
                };
                function It(t, e, i = 0, n = !1) {
                    e = H(e);
                    const { length: s } = e;
                    return s ? (t = qt(t) ? Xt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? s - 1 : e.indexOf(ot(t)),
                        n ? $t(t, 0, s - 1) : (t %= s,
                            t < 0 ? t + s : t)) : -1
                }
                function Lt(t) {
                    const e = Object.create(null);
                    return i => e[i] || (e[i] = t(i))
                }
                function C(t, e, i) {
                    var n;
                    if (Z(e)) {
                        for (const s in e)
                            C(t, s, e[s]);
                        return
                    }
                    if (gt(i))
                        return (n = ot(t)) == null ? void 0 : n.getAttribute(e);
                    for (const s of H(t))
                        z(i) && (i = i.call(s, C(s, e))),
                            i === null ? je(s, e) : s.setAttribute(e, i)
                }
                function Wt(t, e) {
                    return H(t).some(i => i.hasAttribute(e))
                }
                function je(t, e) {
                    H(t).forEach(i => i.removeAttribute(e))
                }
                function St(t, e) {
                    for (const i of [e, `data-${e}`])
                        if (Wt(t, i))
                            return C(t, i)
                }
                function L(t, ...e) {
                    Ss(t, e, "add")
                }
                function it(t, ...e) {
                    Ss(t, e, "remove")
                }
                function bn(t, e) {
                    C(t, "class", i => (i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""))
                }
                function yn(t, ...e) {
                    e[0] && it(t, e[0]),
                        e[1] && L(t, e[1])
                }
                function X(t, e) {
                    return [e] = xn(e),
                        !!e && H(t).some(i => i.classList.contains(e))
                }
                function ft(t, e, i) {
                    const n = xn(e);
                    gt(i) || (i = !!i);
                    for (const s of H(t))
                        for (const r of n)
                            s.classList.toggle(r, i)
                }
                function Ss(t, e, i) {
                    e = e.reduce((n, s) => n.concat(xn(s)), []);
                    for (const n of H(t))
                        n.classList[i](...e)
                }
                function xn(t) {
                    return String(t).split(/[ ,]/).filter(Boolean)
                }
                const pa = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                };
                function $n(t) {
                    return H(t).some(e => pa[e.tagName.toLowerCase()])
                }
                function ct(t) {
                    return H(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                const Ue = "input,select,textarea,button";
                function kn(t) {
                    return H(t).some(e => q(e, Ue))
                }
                const qe = `${Ue},a[href],[tabindex]`;
                function $i(t) {
                    return q(t, qe)
                }
                function K(t) {
                    var e;
                    return (e = ot(t)) == null ? void 0 : e.parentElement
                }
                function We(t, e) {
                    return H(t).filter(i => q(i, e))
                }
                function q(t, e) {
                    return H(t).some(i => i.matches(e))
                }
                function pt(t, e) {
                    return Tt(t) ? t.closest(x(e, ">") ? e.slice(1) : e) : H(t).map(i => pt(i, e)).filter(Boolean)
                }
                function et(t, e) {
                    return tt(e) ? !!pt(t, e) : ot(e).contains(ot(t))
                }
                function Te(t, e) {
                    const i = [];
                    for (; t = K(t);)
                        (!e || q(t, e)) && i.push(t);
                    return i
                }
                function W(t, e) {
                    t = ot(t);
                    const i = t ? R(t.children) : [];
                    return e ? We(i, e) : i
                }
                function Ce(t, e) {
                    return e ? H(t).indexOf(ot(e)) : W(K(t)).indexOf(t)
                }
                function Oe(t) {
                    return t = ot(t),
                        t && ["origin", "pathname", "search"].every(e => t[e] === location[e])
                }
                function Sn(t) {
                    if (Oe(t)) {
                        t = ot(t);
                        const e = decodeURIComponent(t.hash).substring(1);
                        return document.getElementById(e) || document.getElementsByName(e)[0]
                    }
                }
                function _t(t, e) {
                    return En(t, Ts(t, e))
                }
                function Ve(t, e) {
                    return Je(t, Ts(t, e))
                }
                function En(t, e) {
                    return ot(Cs(t, ot(e), "querySelector"))
                }
                function Je(t, e) {
                    return H(Cs(t, ot(e), "querySelectorAll"))
                }
                const ma = /(^|[^\\],)\s*[!>+~-]/
                    , Es = Lt(t => t.match(ma));
                function Ts(t, e = document) {
                    return tt(t) && Es(t) || dt(e) ? e : e.ownerDocument
                }
                const ga = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g
                    , va = Lt(t => t.replace(ga, "$1 *"));
                function Cs(t, e = document, i) {
                    if (!t || !tt(t))
                        return t;
                    if (t = va(t),
                        Es(t)) {
                        const n = ba(t);
                        t = "";
                        for (let s of n) {
                            let r = e;
                            if (s[0] === "!") {
                                const l = s.substr(1).trim().split(" ");
                                if (r = pt(K(e), l[0]),
                                    s = l.slice(1).join(" ").trim(),
                                    !s.length && n.length === 1)
                                    return r
                            }
                            if (s[0] === "-") {
                                const l = s.substr(1).trim().split(" ")
                                    , u = (r || e).previousElementSibling;
                                r = q(u, s.substr(1)) ? u : null,
                                    s = l.slice(1).join(" ")
                            }
                            r && (t += `${t ? "," : ""}${ya(r)} ${s}`)
                        }
                        e = document
                    }
                    try {
                        return e[i](t)
                    } catch {
                        return null
                    }
                }
                const wa = /.*?[^\\](?:,|$)/g
                    , ba = Lt(t => t.match(wa).map(e => e.replace(/,$/, "").trim()));
                function ya(t) {
                    const e = [];
                    for (; t.parentNode;) {
                        const i = C(t, "id");
                        if (i) {
                            e.unshift(`#${Tn(i)}`);
                            break
                        } else {
                            let { tagName: n } = t;
                            n !== "HTML" && (n += `:nth-child(${Ce(t) + 1})`),
                                e.unshift(n),
                                t = t.parentNode
                        }
                    }
                    return e.join(" > ")
                }
                function Tn(t) {
                    return tt(t) ? CSS.escape(t) : ""
                }
                function M(...t) {
                    let [e, i, n, s, r = !1] = Cn(t);
                    s.length > 1 && (s = $a(s)),
                        r != null && r.self && (s = ka(s)),
                        n && (s = xa(n, s));
                    for (const l of i)
                        for (const u of e)
                            u.addEventListener(l, s, r);
                    return () => se(e, i, s, r)
                }
                function se(...t) {
                    let [e, i, , n, s = !1] = Cn(t);
                    for (const r of i)
                        for (const l of e)
                            l.removeEventListener(r, n, s)
                }
                function ht(...t) {
                    const [e, i, n, s, r = !1, l] = Cn(t)
                        , u = M(e, i, n, d => {
                            const g = !l || l(d);
                            g && (u(),
                                s(d, g))
                        }
                            , r);
                    return u
                }
                function _(t, e, i) {
                    return On(t).every(n => n.dispatchEvent(re(e, !0, !0, i)))
                }
                function re(t, e = !0, i = !1, n) {
                    return tt(t) && (t = new CustomEvent(t, {
                        bubbles: e,
                        cancelable: i,
                        detail: n
                    })),
                        t
                }
                function Cn(t) {
                    return t[0] = On(t[0]),
                        tt(t[1]) && (t[1] = t[1].split(" ")),
                        z(t[2]) && t.splice(2, 0, !1),
                        t
                }
                function xa(t, e) {
                    return i => {
                        const n = t[0] === ">" ? Je(t, i.currentTarget).reverse().filter(s => et(i.target, s))[0] : pt(i.target, t);
                        n && (i.current = n,
                            e.call(this, i),
                            delete i.current)
                    }
                }
                function $a(t) {
                    return e => T(e.detail) ? t(e, ...e.detail) : t(e)
                }
                function ka(t) {
                    return function (e) {
                        if (e.target === e.currentTarget || e.target === e.current)
                            return t.call(null, e)
                    }
                }
                function Os(t) {
                    return t && "addEventListener" in t
                }
                function Sa(t) {
                    return Os(t) ? t : ot(t)
                }
                function On(t) {
                    return T(t) ? t.map(Sa).filter(Boolean) : tt(t) ? Je(t) : Os(t) ? [t] : H(t)
                }
                function Kt(t) {
                    return t.pointerType === "touch" || !!t.touches
                }
                function Ae(t) {
                    var e, i;
                    const { clientX: n, clientY: s } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
                    return {
                        x: n,
                        y: s
                    }
                }
                const Ea = {
                    "animation-iteration-count": !0,
                    "column-count": !0,
                    "fill-opacity": !0,
                    "flex-grow": !0,
                    "flex-shrink": !0,
                    "font-weight": !0,
                    "line-height": !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    "stroke-dasharray": !0,
                    "stroke-dashoffset": !0,
                    widows: !0,
                    "z-index": !0,
                    zoom: !0
                };
                function v(t, e, i, n) {
                    const s = H(t);
                    for (const r of s)
                        if (tt(e)) {
                            if (e = ki(e),
                                gt(i))
                                return getComputedStyle(r).getPropertyValue(e);
                            r.style.setProperty(e, qt(i) && !Ea[e] ? `${i}px` : i || ze(i) ? i : "", n)
                        } else if (T(e)) {
                            const l = {};
                            for (const u of e)
                                l[u] = v(r, u);
                            return l
                        } else
                            Z(e) && (n = i,
                                Qt(e, (l, u) => v(r, u, l, n)));
                    return s[0]
                }
                const ki = Lt(t => Ta(t));
                function Ta(t) {
                    if (x(t, "--"))
                        return t;
                    t = m(t);
                    const { style: e } = document.documentElement;
                    if (t in e)
                        return t;
                    for (const i of ["webkit", "moz"]) {
                        const n = `-${i}-${t}`;
                        if (n in e)
                            return n
                    }
                }
                function Ca(t, e, i = 400, n = "linear") {
                    return i = Math.round(i),
                        Promise.all(H(t).map(s => new Promise((r, l) => {
                            for (const d in e) {
                                const g = v(s, d);
                                g === "" && v(s, d, g)
                            }
                            const u = setTimeout(() => _(s, "transitionend"), i);
                            ht(s, "transitionend transitioncanceled", ({ type: d }) => {
                                clearTimeout(u),
                                    it(s, "uk-transition"),
                                    v(s, {
                                        transitionProperty: "",
                                        transitionDuration: "",
                                        transitionTimingFunction: ""
                                    }),
                                    d === "transitioncanceled" ? l() : r(s)
                            }
                                , {
                                    self: !0
                                }),
                                L(s, "uk-transition"),
                                v(s, {
                                    transitionProperty: Object.keys(e).map(ki).join(","),
                                    transitionDuration: `${i}ms`,
                                    transitionTimingFunction: n,
                                    ...e
                                })
                        }
                        )))
                }
                const V = {
                    start: Ca,
                    async stop(t) {
                        _(t, "transitionend"),
                            await Promise.resolve()
                    },
                    async cancel(t) {
                        _(t, "transitioncanceled"),
                            await Promise.resolve()
                    },
                    inProgress(t) {
                        return X(t, "uk-transition")
                    }
                }
                    , Xe = "uk-animation-";
                function As(t, e, i = 200, n, s) {
                    return Promise.all(H(t).map(r => new Promise((l, u) => {
                        _(r, "animationcanceled");
                        const d = setTimeout(() => _(r, "animationend"), i);
                        ht(r, "animationend animationcanceled", ({ type: g }) => {
                            clearTimeout(d),
                                g === "animationcanceled" ? u() : l(r),
                                v(r, "animationDuration", ""),
                                bn(r, `${Xe}\\S*`)
                        }
                            , {
                                self: !0
                            }),
                            v(r, "animationDuration", `${i}ms`),
                            L(r, e, Xe + (s ? "leave" : "enter")),
                            x(e, Xe) && (n && L(r, `uk-transform-origin-${n}`),
                                s && L(r, `${Xe}reverse`))
                    }
                    )))
                }
                const Oa = new RegExp(`${Xe}(enter|leave)`)
                    , Ht = {
                        in: As,
                        out(t, e, i, n) {
                            return As(t, e, i, n, !0)
                        },
                        inProgress(t) {
                            return Oa.test(C(t, "class"))
                        },
                        cancel(t) {
                            _(t, "animationcanceled")
                        }
                    };
                function Aa(t) {
                    if (document.readyState !== "loading") {
                        t();
                        return
                    }
                    ht(document, "DOMContentLoaded", t)
                }
                function vt(t, ...e) {
                    return e.some(i => {
                        var n;
                        return ((n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toLowerCase()) === i.toLowerCase()
                    }
                    )
                }
                function An(t) {
                    return t = N(t),
                        t.innerHTML = "",
                        t
                }
                function oe(t, e) {
                    return gt(e) ? N(t).innerHTML : at(An(t), e)
                }
                const Pa = Ti("prepend")
                    , at = Ti("append")
                    , Si = Ti("before")
                    , Ei = Ti("after");
                function Ti(t) {
                    return function (e, i) {
                        var n;
                        const s = H(tt(i) ? ae(i) : i);
                        return (n = N(e)) == null || n[t](...s),
                            Ps(s)
                    }
                }
                function Rt(t) {
                    H(t).forEach(e => e.remove())
                }
                function Ci(t, e) {
                    for (e = ot(Si(t, e)); e.firstChild;)
                        e = e.firstChild;
                    return at(e, t),
                        e
                }
                function Pn(t, e) {
                    return H(H(t).map(i => i.hasChildNodes() ? Ci(R(i.childNodes), e) : at(i, e)))
                }
                function Ke(t) {
                    H(t).map(K).filter((e, i, n) => n.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
                }
                const Ia = /^\s*<(\w+|!)[^>]*>/
                    , _a = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
                function ae(t) {
                    const e = _a.exec(t);
                    if (e)
                        return document.createElement(e[1]);
                    const i = document.createElement("div");
                    return Ia.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t,
                        Ps(i.childNodes)
                }
                function Ps(t) {
                    return t.length > 1 ? t : t[0]
                }
                function Gt(t, e) {
                    if (Tt(t))
                        for (e(t),
                            t = t.firstElementChild; t;) {
                            const i = t.nextElementSibling;
                            Gt(t, e),
                                t = i
                        }
                }
                function N(t, e) {
                    return Is(t) ? ot(ae(t)) : En(t, e)
                }
                function st(t, e) {
                    return Is(t) ? H(ae(t)) : Je(t, e)
                }
                function Is(t) {
                    return tt(t) && x(t.trim(), "<")
                }
                const le = {
                    width: ["left", "right"],
                    height: ["top", "bottom"]
                };
                function B(t) {
                    const e = Tt(t) ? ot(t).getBoundingClientRect() : {
                        height: Et(t),
                        width: Ge(t),
                        top: 0,
                        left: 0
                    };
                    return {
                        height: e.height,
                        width: e.width,
                        top: e.top,
                        left: e.left,
                        bottom: e.top + e.height,
                        right: e.left + e.width
                    }
                }
                function G(t, e) {
                    e && v(t, {
                        left: 0,
                        top: 0
                    });
                    const i = B(t);
                    if (t) {
                        const { scrollY: n, scrollX: s } = Se(t)
                            , r = {
                                height: n,
                                width: s
                            };
                        for (const l in le)
                            for (const u of le[l])
                                i[u] += r[l]
                    }
                    if (!e)
                        return i;
                    for (const n of ["left", "top"])
                        v(t, n, e[n] - i[n])
                }
                function In(t) {
                    let { top: e, left: i } = G(t);
                    const { ownerDocument: { body: n, documentElement: s }, offsetParent: r } = ot(t);
                    let l = r || s;
                    for (; l && (l === n || l === s) && v(l, "position") === "static";)
                        l = l.parentNode;
                    if (Tt(l)) {
                        const u = G(l);
                        e -= u.top + F(v(l, "borderTopWidth")),
                            i -= u.left + F(v(l, "borderLeftWidth"))
                    }
                    return {
                        top: e - F(v(t, "marginTop")),
                        left: i - F(v(t, "marginLeft"))
                    }
                }
                function ce(t) {
                    t = ot(t);
                    const e = [t.offsetTop, t.offsetLeft];
                    for (; t = t.offsetParent;)
                        if (e[0] += t.offsetTop + F(v(t, "borderTopWidth")),
                            e[1] += t.offsetLeft + F(v(t, "borderLeftWidth")),
                            v(t, "position") === "fixed") {
                            const i = Se(t);
                            return e[0] += i.scrollY,
                                e[1] += i.scrollX,
                                e
                        }
                    return e
                }
                const Et = _s("height")
                    , Ge = _s("width");
                function _s(t) {
                    const e = $(t);
                    return (i, n) => {
                        if (gt(n)) {
                            if (xt(i))
                                return i[`inner${e}`];
                            if (dt(i)) {
                                const s = i.documentElement;
                                return Math.max(s[`offset${e}`], s[`scroll${e}`])
                            }
                            return i = ot(i),
                                n = v(i, t),
                                n = n === "auto" ? i[`offset${e}`] : F(n) || 0,
                                n - Pe(i, t)
                        } else
                            return v(i, t, !n && n !== 0 ? "" : +n + Pe(i, t) + "px")
                    }
                }
                function Pe(t, e, i = "border-box") {
                    return v(t, "boxSizing") === i ? ne(le[e].map($), n => F(v(t, `padding${n}`)) + F(v(t, `border${n}Width`))) : 0
                }
                function Oi(t) {
                    for (const e in le)
                        for (const i in le[e])
                            if (le[e][i] === t)
                                return le[e][1 - i];
                    return t
                }
                function Nt(t, e = "width", i = window, n = !1) {
                    return tt(t) ? ne(Na(t), s => {
                        const r = Ba(s);
                        return r ? Fa(r === "vh" ? Ma() : r === "vw" ? Ge(Se(i)) : n ? i[`offset${$(e)}`] : B(i)[e], s) : s
                    }
                    ) : F(t)
                }
                const Ra = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g
                    , Na = Lt(t => t.toString().replace(/\s/g, "").match(Ra) || [])
                    , Da = /(?:v[hw]|%)$/
                    , Ba = Lt(t => (t.match(Da) || [])[0]);
                function Fa(t, e) {
                    return t * F(e) / 100
                }
                let Ye, Ie;
                function Ma() {
                    return Ye || (Ie || (Ie = N("<div>"),
                        v(Ie, {
                            height: "100vh",
                            position: "fixed"
                        }),
                        M(window, "resize", () => Ye = null)),
                        at(document.body, Ie),
                        Ye = Ie.clientHeight,
                        Rt(Ie),
                        Ye)
                }
                const he = typeof window < "u"
                    , wt = he && document.dir === "rtl"
                    , ue = he && "ontouchstart" in window
                    , _e = he && window.PointerEvent
                    , jt = _e ? "pointerdown" : ue ? "touchstart" : "mousedown"
                    , Ai = _e ? "pointermove" : ue ? "touchmove" : "mousemove"
                    , te = _e ? "pointerup" : ue ? "touchend" : "mouseup"
                    , fe = _e ? "pointerenter" : ue ? "" : "mouseenter"
                    , Ze = _e ? "pointerleave" : ue ? "" : "mouseleave"
                    , Pi = _e ? "pointercancel" : "touchcancel"
                    , bt = {
                        reads: [],
                        writes: [],
                        read(t) {
                            return this.reads.push(t),
                                Rn(),
                                t
                        },
                        write(t) {
                            return this.writes.push(t),
                                Rn(),
                                t
                        },
                        clear(t) {
                            Ns(this.reads, t),
                                Ns(this.writes, t)
                        },
                        flush: _n
                    };
                function _n(t) {
                    Rs(bt.reads),
                        Rs(bt.writes.splice(0)),
                        bt.scheduled = !1,
                        (bt.reads.length || bt.writes.length) && Rn(t + 1)
                }
                const La = 4;
                function Rn(t) {
                    bt.scheduled || (bt.scheduled = !0,
                        t && t < La ? Promise.resolve().then(() => _n(t)) : requestAnimationFrame(() => _n(1)))
                }
                function Rs(t) {
                    let e;
                    for (; e = t.shift();)
                        try {
                            e()
                        } catch (i) {
                            console.error(i)
                        }
                }
                function Ns(t, e) {
                    const i = t.indexOf(e);
                    return ~i && t.splice(i, 1)
                }
                function Nn() { }
                Nn.prototype = {
                    positions: [],
                    init() {
                        this.positions = [];
                        let t;
                        this.unbind = M(document, "mousemove", e => t = Ae(e)),
                            this.interval = setInterval(() => {
                                t && (this.positions.push(t),
                                    this.positions.length > 5 && this.positions.shift())
                            }
                                , 50)
                    },
                    cancel() {
                        var t;
                        (t = this.unbind) == null || t.call(this),
                            clearInterval(this.interval)
                    },
                    movesTo(t) {
                        if (this.positions.length < 2)
                            return !1;
                        const e = t.getBoundingClientRect()
                            , { left: i, right: n, top: s, bottom: r } = e
                            , [l] = this.positions
                            , u = Ee(this.positions)
                            , d = [l, u];
                        return yi(u, e) ? !1 : [[{
                            x: i,
                            y: s
                        }, {
                            x: n,
                            y: r
                        }], [{
                            x: i,
                            y: r
                        }, {
                            x: n,
                            y: s
                        }]].some(w => {
                            const k = za(d, w);
                            return k && yi(k, e)
                        }
                        )
                    }
                };
                function za([{ x: t, y: e }, { x: i, y: n }], [{ x: s, y: r }, { x: l, y: u }]) {
                    const d = (u - r) * (i - t) - (l - s) * (n - e);
                    if (d === 0)
                        return !1;
                    const g = ((l - s) * (e - r) - (u - r) * (t - s)) / d;
                    return g < 0 ? !1 : {
                        x: t + g * (i - t),
                        y: e + g * (n - e)
                    }
                }
                function Ds(t, e, i = {}, { intersecting: n = !0 } = {}) {
                    const s = new IntersectionObserver(n ? (r, l) => {
                        r.some(u => u.isIntersecting) && e(r, l)
                    }
                        : e, i);
                    for (const r of H(t))
                        s.observe(r);
                    return s
                }
                const Ha = he && window.ResizeObserver;
                function Ii(t, e, i = {
                    box: "border-box"
                }) {
                    if (Ha)
                        return Fs(ResizeObserver, t, e, i);
                    const n = [M(window, "load resize", e), M(document, "loadedmetadata load", e, !0)];
                    return {
                        disconnect: () => n.map(s => s())
                    }
                }
                function Dn(t) {
                    return {
                        disconnect: M([window, window.visualViewport], "resize", t)
                    }
                }
                function Bs(t, e, i) {
                    return Fs(MutationObserver, t, e, i)
                }
                function Fs(t, e, i, n) {
                    const s = new t(i);
                    for (const r of H(e))
                        s.observe(r, n);
                    return s
                }
                function Ms(t) {
                    if (Ri(t) && Bn(t, {
                        func: "playVideo",
                        method: "play"
                    }),
                        _i(t))
                        try {
                            t.play().catch(j)
                        } catch { }
                }
                function Ls(t) {
                    Ri(t) && Bn(t, {
                        func: "pauseVideo",
                        method: "pause"
                    }),
                        _i(t) && t.pause()
                }
                function zs(t) {
                    Ri(t) && Bn(t, {
                        func: "mute",
                        method: "setVolume",
                        value: 0
                    }),
                        _i(t) && (t.muted = !0)
                }
                function Hs(t) {
                    return _i(t) || Ri(t)
                }
                function _i(t) {
                    return vt(t, "video")
                }
                function Ri(t) {
                    return vt(t, "iframe") && (js(t) || Us(t))
                }
                function js(t) {
                    return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
                }
                function Us(t) {
                    return !!t.src.match(/vimeo\.com\/video\/.*/)
                }
                async function Bn(t, e) {
                    await Ua(t),
                        qs(t, e)
                }
                function qs(t, e) {
                    try {
                        t.contentWindow.postMessage(JSON.stringify({
                            event: "command",
                            ...e
                        }), "*")
                    } catch { }
                }
                const Fn = "_ukPlayer";
                let ja = 0;
                function Ua(t) {
                    if (t[Fn])
                        return t[Fn];
                    const e = js(t)
                        , i = Us(t)
                        , n = ++ja;
                    let s;
                    return t[Fn] = new Promise(r => {
                        e && ht(t, "load", () => {
                            const l = () => qs(t, {
                                event: "listening",
                                id: n
                            });
                            s = setInterval(l, 100),
                                l()
                        }
                        ),
                            ht(window, "message", r, !1, ({ data: l }) => {
                                try {
                                    return l = JSON.parse(l),
                                        e && (l == null ? void 0 : l.id) === n && l.event === "onReady" || i && Number(l == null ? void 0 : l.player_id) === n
                                } catch { }
                            }
                            ),
                            t.src = `${t.src}${S(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${n}`}`
                    }
                    ).then(() => clearInterval(s))
                }
                function Mn(t, e = 0, i = 0) {
                    return ct(t) ? vn(...de(t).map(n => {
                        const { top: s, left: r, bottom: l, right: u } = Dt(n);
                        return {
                            top: s - e,
                            left: r - i,
                            bottom: l + e,
                            right: u + i
                        }
                    }
                    ).concat(G(t))) : !1
                }
                function Ws(t, { offset: e = 0 } = {}) {
                    const i = ct(t) ? Re(t, !1, ["hidden"]) : [];
                    return i.reduce((l, u, d) => {
                        const { scrollTop: g, scrollHeight: w, offsetHeight: k } = u
                            , E = Dt(u)
                            , I = w - E.height
                            , { height: Y, top: nt } = i[d - 1] ? Dt(i[d - 1]) : G(t);
                        let rt = Math.ceil(nt - E.top - e + g);
                        return e > 0 && k < Y + e ? rt += e : e = 0,
                            rt > I ? (e -= rt - I,
                                rt = I) : rt < 0 && (e -= rt,
                                    rt = 0),
                            () => n(u, rt - g).then(l)
                    }
                        , () => Promise.resolve())();
                    function n(l, u) {
                        return new Promise(d => {
                            const g = l.scrollTop
                                , w = s(Math.abs(u))
                                , k = Date.now();
                            (function E() {
                                const I = r($t((Date.now() - k) / w));
                                l.scrollTop = g + u * I,
                                    I === 1 ? d() : requestAnimationFrame(E)
                            }
                            )()
                        }
                        )
                    }
                    function s(l) {
                        return 40 * Math.pow(l, .375)
                    }
                    function r(l) {
                        return .5 * (1 - Math.cos(Math.PI * l))
                    }
                }
                function Ln(t, e = 0, i = 0) {
                    if (!ct(t))
                        return 0;
                    const n = Yt(t, !0)
                        , { scrollHeight: s, scrollTop: r } = n
                        , { height: l } = Dt(n)
                        , u = s - l
                        , d = ce(t)[0] - ce(n)[0]
                        , g = Math.max(0, d - l + e)
                        , w = Math.min(u, d + t.offsetHeight - i);
                    return $t((r - g) / (w - g))
                }
                function Re(t, e = !1, i = []) {
                    const n = Vs(t);
                    let s = Te(t).reverse();
                    s = s.slice(s.indexOf(n) + 1);
                    const r = J(s, l => v(l, "position") === "fixed");
                    return ~r && (s = s.slice(r)),
                        [n].concat(s.filter(l => v(l, "overflow").split(" ").some(u => S(["auto", "scroll", ...i], u)) && (!e || l.scrollHeight > Dt(l).height))).reverse()
                }
                function Yt(...t) {
                    return Re(...t)[0]
                }
                function de(t) {
                    return Re(t, !1, ["hidden", "clip"])
                }
                function Dt(t) {
                    const e = Se(t)
                        , { visualViewport: i, document: { documentElement: n } } = e;
                    let s = t === Vs(t) ? e : t;
                    if (xt(s) && i) {
                        let { height: l, width: u, scale: d, pageTop: g, pageLeft: w } = i;
                        return l = Math.round(l * d),
                            u = Math.round(u * d),
                        {
                            height: l,
                            width: u,
                            top: g,
                            left: w,
                            bottom: g + l,
                            right: w + u
                        }
                    }
                    let r = G(s);
                    if (v(s, "display") === "inline")
                        return r;
                    for (let [l, u, d, g] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
                        xt(s) ? s = n : r[d] += F(v(s, `border-${d}-width`));
                        const w = r[l] % 1;
                        r[l] = r[u] = s[`client${$(l)}`] - (w ? w < .5 ? -w : 1 - w : 0),
                            r[g] = r[l] + r[d]
                    }
                    return r
                }
                function Vs(t) {
                    return Se(t).document.scrollingElement
                }
                const Bt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
                function Js(t, e, i) {
                    i = {
                        attach: {
                            element: ["left", "top"],
                            target: ["left", "top"],
                            ...i.attach
                        },
                        offset: [0, 0],
                        placement: [],
                        ...i
                    },
                        T(e) || (e = [e, e]),
                        G(t, Xs(t, e, i))
                }
                function Xs(t, e, i) {
                    const n = Ks(t, e, i)
                        , { boundary: s, viewportOffset: r = 0, placement: l } = i;
                    let u = n;
                    for (const [d, [g, , w, k]] of Object.entries(Bt)) {
                        const E = qa(t, e[d], r, s, d);
                        if (Ni(n, E, d))
                            continue;
                        let I = 0;
                        if (l[d] === "flip") {
                            const Y = i.attach.target[d];
                            if (Y === k && n[k] <= E[k] || Y === w && n[w] >= E[w])
                                continue;
                            I = Va(t, e, i, d)[w] - n[w];
                            const nt = Wa(t, e[d], r, d);
                            if (!Ni(zn(n, I, d), nt, d)) {
                                if (Ni(n, nt, d))
                                    continue;
                                if (i.recursion)
                                    return !1;
                                const rt = Ja(t, e, i);
                                if (rt && Ni(rt, nt, 1 - d))
                                    return rt;
                                continue
                            }
                        } else if (l[d] === "shift") {
                            const Y = G(e[d])
                                , { offset: nt } = i;
                            I = $t($t(n[w], E[w], E[k] - n[g]), Y[w] - n[g] + nt[d], Y[k] - nt[d]) - n[w]
                        }
                        u = zn(u, I, d)
                    }
                    return u
                }
                function Ks(t, e, i) {
                    let { attach: n, offset: s } = {
                        attach: {
                            element: ["left", "top"],
                            target: ["left", "top"],
                            ...i.attach
                        },
                        offset: [0, 0],
                        ...i
                    }
                        , r = G(t);
                    for (const [l, [u, , d, g]] of Object.entries(Bt)) {
                        const w = n.target[l] === n.element[l] ? Dt(e[l]) : G(e[l]);
                        r = zn(r, w[d] - r[d] + Gs(n.target[l], g, w[u]) - Gs(n.element[l], g, r[u]) + +s[l], l)
                    }
                    return r
                }
                function zn(t, e, i) {
                    const [, n, s, r] = Bt[i]
                        , l = {
                            ...t
                        };
                    return l[s] = t[n] = t[s] + e,
                        l[r] += e,
                        l
                }
                function Gs(t, e, i) {
                    return t === "center" ? i / 2 : t === e ? i : 0
                }
                function qa(t, e, i, n, s) {
                    let r = Zs(...Ys(t, e).map(Dt));
                    return i && (r[Bt[s][2]] += i,
                        r[Bt[s][3]] -= i),
                        n && (r = Zs(r, G(T(n) ? n[s] : n))),
                        r
                }
                function Wa(t, e, i, n) {
                    const [s, r, l, u] = Bt[n]
                        , [d] = Ys(t, e)
                        , g = Dt(d);
                    return ["auto", "scroll"].includes(v(d, `overflow-${r}`)) && (g[l] -= d[`scroll${$(l)}`],
                        g[u] = g[l] + d[`scroll${$(s)}`]),
                        g[l] += i,
                        g[u] -= i,
                        g
                }
                function Ys(t, e) {
                    return de(e).filter(i => et(t, i))
                }
                function Zs(...t) {
                    let e = {};
                    for (const i of t)
                        for (const [, , n, s] of Bt)
                            e[n] = Math.max(e[n] || 0, i[n]),
                                e[s] = Math.min(...[e[s], i[s]].filter(Boolean));
                    return e
                }
                function Ni(t, e, i) {
                    const [, , n, s] = Bt[i];
                    return t[n] >= e[n] && t[s] <= e[s]
                }
                function Va(t, e, { offset: i, attach: n }, s) {
                    return Ks(t, e, {
                        attach: {
                            element: Qs(n.element, s),
                            target: Qs(n.target, s)
                        },
                        offset: Xa(i, s)
                    })
                }
                function Ja(t, e, i) {
                    return Xs(t, e, {
                        ...i,
                        attach: {
                            element: i.attach.element.map(tr).reverse(),
                            target: i.attach.target.map(tr).reverse()
                        },
                        offset: i.offset.reverse(),
                        placement: i.placement.reverse(),
                        recursion: !0
                    })
                }
                function Qs(t, e) {
                    const i = [...t]
                        , n = Bt[e].indexOf(t[e]);
                    return ~n && (i[e] = Bt[e][1 - n % 2 + 2]),
                        i
                }
                function tr(t) {
                    for (let e = 0; e < Bt.length; e++) {
                        const i = Bt[e].indexOf(t);
                        if (~i)
                            return Bt[1 - e][i % 2 + 2]
                    }
                }
                function Xa(t, e) {
                    return t = [...t],
                        t[e] *= -1,
                        t
                }
                var Ka = Object.freeze({
                    __proto__: null,
                    $: N,
                    $$: st,
                    Animation: Ht,
                    Dimensions: xi,
                    MouseTracker: Nn,
                    Transition: V,
                    addClass: L,
                    after: Ei,
                    append: at,
                    apply: Gt,
                    assign: O,
                    attr: C,
                    before: Si,
                    boxModelAdjust: Pe,
                    camelize: A,
                    children: W,
                    clamp: $t,
                    closest: pt,
                    createEvent: re,
                    css: v,
                    data: St,
                    dimensions: B,
                    each: Qt,
                    empty: An,
                    endsWith: P,
                    escape: Tn,
                    fastdom: bt,
                    filter: We,
                    find: En,
                    findAll: Je,
                    findIndex: J,
                    flipPosition: Oi,
                    fragment: ae,
                    getEventPos: Ae,
                    getIndex: It,
                    getTargetedElement: Sn,
                    hasAttr: Wt,
                    hasClass: X,
                    hasOwn: f,
                    hasTouch: ue,
                    height: Et,
                    html: oe,
                    hyphenate: m,
                    inBrowser: he,
                    includes: S,
                    index: Ce,
                    intersectRect: vn,
                    isArray: T,
                    isBoolean: Jt,
                    isDocument: dt,
                    isElement: Tt,
                    isEmpty: He,
                    isEqual: wi,
                    isFocusable: $i,
                    isFunction: z,
                    isInView: Mn,
                    isInput: kn,
                    isNode: Pt,
                    isNumber: ze,
                    isNumeric: qt,
                    isObject: Z,
                    isPlainObject: Q,
                    isRtl: wt,
                    isSameSiteAnchor: Oe,
                    isString: tt,
                    isTag: vt,
                    isTouch: Kt,
                    isUndefined: gt,
                    isVideo: Hs,
                    isVisible: ct,
                    isVoidElement: $n,
                    isWindow: xt,
                    last: Ee,
                    matches: q,
                    memoize: Lt,
                    mute: zs,
                    noop: j,
                    observeIntersection: Ds,
                    observeMutation: Bs,
                    observeResize: Ii,
                    observeViewportResize: Dn,
                    off: se,
                    offset: G,
                    offsetPosition: ce,
                    offsetViewport: Dt,
                    on: M,
                    once: ht,
                    overflowParents: de,
                    parent: K,
                    parents: Te,
                    pause: Ls,
                    pick: gn,
                    play: Ms,
                    pointInRect: yi,
                    pointerCancel: Pi,
                    pointerDown: jt,
                    pointerEnter: fe,
                    pointerLeave: Ze,
                    pointerMove: Ai,
                    pointerUp: te,
                    position: In,
                    positionAt: Js,
                    prepend: Pa,
                    propName: ki,
                    query: _t,
                    queryAll: Ve,
                    ready: Aa,
                    remove: Rt,
                    removeAttr: je,
                    removeClass: it,
                    removeClasses: bn,
                    replaceClass: yn,
                    scrollIntoView: Ws,
                    scrollParent: Yt,
                    scrollParents: Re,
                    scrolledOver: Ln,
                    selFocusable: qe,
                    selInput: Ue,
                    sortBy: bi,
                    startsWith: x,
                    sumBy: ne,
                    swap: mn,
                    toArray: R,
                    toBoolean: pn,
                    toEventTargets: On,
                    toFloat: F,
                    toNode: ot,
                    toNodes: H,
                    toNumber: Xt,
                    toPx: Nt,
                    toWindow: Se,
                    toggleClass: ft,
                    trigger: _,
                    ucfirst: $,
                    uniqueBy: $s,
                    unwrap: Ke,
                    width: Ge,
                    within: et,
                    wrapAll: Ci,
                    wrapInner: Pn
                })
                    , Ct = {
                        connected() {
                            L(this.$el, this.$options.id)
                        }
                    };
                const Ga = ["days", "hours", "minutes", "seconds"];
                var Ya = {
                    mixins: [Ct],
                    props: {
                        date: String,
                        clsWrapper: String,
                        role: String
                    },
                    data: {
                        date: "",
                        clsWrapper: ".uk-countdown-%unit%",
                        role: "timer"
                    },
                    connected() {
                        C(this.$el, "role", this.role),
                            this.date = F(Date.parse(this.$props.date)),
                            this.end = !1,
                            this.start()
                    },
                    disconnected() {
                        this.stop()
                    },
                    events: {
                        name: "visibilitychange",
                        el() {
                            return document
                        },
                        handler() {
                            document.hidden ? this.stop() : this.start()
                        }
                    },
                    methods: {
                        start() {
                            this.stop(),
                                this.update(),
                                this.timer || (_(this.$el, "countdownstart"),
                                    this.timer = setInterval(this.update, 1e3))
                        },
                        stop() {
                            this.timer && (clearInterval(this.timer),
                                _(this.$el, "countdownstop"),
                                this.timer = null)
                        },
                        update() {
                            const t = Za(this.date);
                            t.total || (this.stop(),
                                this.end || (_(this.$el, "countdownend"),
                                    this.end = !0));
                            for (const e of Ga) {
                                const i = N(this.clsWrapper.replace("%unit%", e), this.$el);
                                if (!i)
                                    continue;
                                let n = String(Math.trunc(t[e]));
                                n = n.length < 2 ? `0${n}` : n,
                                    i.textContent !== n && (n = n.split(""),
                                        n.length !== i.children.length && oe(i, n.map(() => "<span></span>").join("")),
                                        n.forEach((s, r) => i.children[r].textContent = s))
                            }
                        }
                    }
                };
                function Za(t) {
                    const e = Math.max(0, t - Date.now()) / 1e3;
                    return {
                        total: e,
                        seconds: e % 60,
                        minutes: e / 60 % 60,
                        hours: e / 60 / 60 % 24,
                        days: e / 60 / 60 / 24
                    }
                }
                const mt = {};
                mt.events = mt.watch = mt.observe = mt.created = mt.beforeConnect = mt.connected = mt.beforeDisconnect = mt.disconnected = mt.destroy = Hn,
                    mt.args = function (t, e) {
                        return e !== !1 && Hn(e || t)
                    }
                    ,
                    mt.update = function (t, e) {
                        return bi(Hn(t, z(e) ? {
                            read: e
                        } : e), "order")
                    }
                    ,
                    mt.props = function (t, e) {
                        if (T(e)) {
                            const i = {};
                            for (const n of e)
                                i[n] = String;
                            e = i
                        }
                        return mt.methods(t, e)
                    }
                    ,
                    mt.computed = mt.methods = function (t, e) {
                        return e ? t ? {
                            ...t,
                            ...e
                        } : e : t
                    }
                    ,
                    mt.i18n = mt.data = function (t, e, i) {
                        return i ? er(t, e, i) : e ? t ? function (n) {
                            return er(t, e, n)
                        }
                            : e : t
                    }
                    ;
                function er(t, e, i) {
                    return mt.computed(z(t) ? t.call(i, i) : t, z(e) ? e.call(i, i) : e)
                }
                function Hn(t, e) {
                    return t = t && !T(t) ? [t] : t,
                        e ? t ? t.concat(e) : T(e) ? e : [e] : t
                }
                function Qa(t, e) {
                    return gt(e) ? t : e
                }
                function Qe(t, e, i) {
                    const n = {};
                    if (z(e) && (e = e.options),
                        e.extends && (t = Qe(t, e.extends, i)),
                        e.mixins)
                        for (const r of e.mixins)
                            t = Qe(t, r, i);
                    for (const r in t)
                        s(r);
                    for (const r in e)
                        f(t, r) || s(r);
                    function s(r) {
                        n[r] = (mt[r] || Qa)(t[r], e[r], i)
                    }
                    return n
                }
                function ti(t, e = []) {
                    try {
                        return t ? x(t, "{") ? JSON.parse(t) : e.length && !S(t, ":") ? {
                            [e[0]]: t
                        } : t.split(";").reduce((i, n) => {
                            const [s, r] = n.split(/:(.*)/);
                            return s && !gt(r) && (i[s.trim()] = r.trim()),
                                i
                        }
                            , {}) : {}
                    } catch {
                        return {}
                    }
                }
                function jn(t, e) {
                    return t === Boolean ? pn(e) : t === Number ? Xt(e) : t === "list" ? tl(e) : t === Object && tt(e) ? ti(e) : t ? t(e) : e
                }
                function tl(t) {
                    return T(t) ? t : tt(t) ? t.split(/,(?![^(]*\))/).map(e => qt(e) ? Xt(e) : pn(e.trim())) : [t]
                }
                function zt(t) {
                    return ni(Ii, t, "resize")
                }
                function ei(t) {
                    return ni(Ds, t)
                }
                function ir(t) {
                    return ni(Bs, t)
                }
                function ii(t = {}) {
                    return ei({
                        handler: function (e, i) {
                            const { targets: n = this.$el, preload: s = 5 } = t;
                            for (const r of H(z(n) ? n(this) : n))
                                st('[loading="lazy"]', r).slice(0, s - 1).forEach(l => je(l, "loading"));
                            for (const r of e.filter(({ isIntersecting: l }) => l).map(({ target: l }) => l))
                                i.unobserve(r)
                        },
                        ...t
                    })
                }
                function nr() {
                    return ni((t, e) => Dn(e))
                }
                function Di(t) {
                    return ni((e, i) => ({
                        disconnect: M(il(e), "scroll", i, {
                            passive: !0,
                            capture: !0
                        })
                    }), t, "scroll")
                }
                function sr(t) {
                    return {
                        observe(e, i) {
                            return {
                                observe: j,
                                unobserve: j,
                                disconnect: M(e, jt, i, {
                                    passive: !0
                                })
                            }
                        },
                        handler(e) {
                            if (!Kt(e))
                                return;
                            const i = Ae(e)
                                , n = "tagName" in e.target ? e.target : K(e.target);
                            ht(document, `${te} ${Pi} scroll`, s => {
                                const { x: r, y: l } = Ae(s);
                                (s.type !== "scroll" && n && r && Math.abs(i.x - r) > 100 || l && Math.abs(i.y - l) > 100) && setTimeout(() => {
                                    _(n, "swipe"),
                                        _(n, `swipe${el(i.x, i.y, r, l)}`)
                                }
                                )
                            }
                            )
                        },
                        ...t
                    }
                }
                function ni(t, e, i) {
                    return {
                        observe: t,
                        handler() {
                            this.$emit(i)
                        },
                        ...e
                    }
                }
                function el(t, e, i, n) {
                    return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down"
                }
                function il(t) {
                    return H(t).map(e => {
                        const { ownerDocument: i } = e
                            , n = Yt(e, !0);
                        return n === i.scrollingElement ? i : n
                    }
                    )
                }
                var rr = {
                    props: {
                        margin: String,
                        firstColumn: Boolean
                    },
                    data: {
                        margin: "uk-margin-small-top",
                        firstColumn: "uk-first-column"
                    },
                    observe: [ir({
                        options: {
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ["style"]
                        }
                    }), zt({
                        target: ({ $el: t }) => [t, ...W(t)]
                    })],
                    update: {
                        read() {
                            const t = Un(this.$el.children);
                            return {
                                rows: t,
                                columns: nl(t)
                            }
                        },
                        write({ columns: t, rows: e }) {
                            for (const i of e)
                                for (const n of i)
                                    ft(n, this.margin, e[0] !== i),
                                        ft(n, this.firstColumn, t[0].includes(n))
                        },
                        events: ["resize"]
                    }
                };
                function Un(t) {
                    return or(t, "top", "bottom")
                }
                function nl(t) {
                    const e = [];
                    for (const i of t) {
                        const n = or(i, "left", "right");
                        for (let s = 0; s < n.length; s++)
                            e[s] = e[s] ? e[s].concat(n[s]) : n[s]
                    }
                    return wt ? e.reverse() : e
                }
                function or(t, e, i) {
                    const n = [[]];
                    for (const s of t) {
                        if (!ct(s))
                            continue;
                        let r = Bi(s);
                        for (let l = n.length - 1; l >= 0; l--) {
                            const u = n[l];
                            if (!u[0]) {
                                u.push(s);
                                break
                            }
                            let d;
                            if (u[0].offsetParent === s.offsetParent ? d = Bi(u[0]) : (r = Bi(s, !0),
                                d = Bi(u[0], !0)),
                                r[e] >= d[i] - 1 && r[e] !== d[e]) {
                                n.push([s]);
                                break
                            }
                            if (r[i] - 1 > d[e] || r[e] === d[e]) {
                                u.push(s);
                                break
                            }
                            if (l === 0) {
                                n.unshift([s]);
                                break
                            }
                        }
                    }
                    return n
                }
                function Bi(t, e = !1) {
                    let { offsetTop: i, offsetLeft: n, offsetHeight: s, offsetWidth: r } = t;
                    return e && ([i, n] = ce(t)),
                    {
                        top: i,
                        left: n,
                        bottom: i + s,
                        right: n + r
                    }
                }
                const qn = "uk-transition-leave"
                    , Wn = "uk-transition-enter";
                function ar(t, e, i, n = 0) {
                    const s = Fi(e, !0)
                        , r = {
                            opacity: 1
                        }
                        , l = {
                            opacity: 0
                        }
                        , u = w => () => s === Fi(e) ? w() : Promise.reject()
                        , d = u(async () => {
                            L(e, qn),
                                await Promise.all(cr(e).map((w, k) => new Promise(E => setTimeout(() => V.start(w, l, i / 2, "ease").then(E), k * n)))),
                                it(e, qn)
                        }
                        )
                        , g = u(async () => {
                            const w = Et(e);
                            L(e, Wn),
                                t(),
                                v(W(e), {
                                    opacity: 0
                                }),
                                await sl();
                            const k = W(e)
                                , E = Et(e);
                            v(e, "alignContent", "flex-start"),
                                Et(e, w);
                            const I = cr(e);
                            v(k, l);
                            const Y = I.map(async (nt, rt) => {
                                await rl(rt * n),
                                    await V.start(nt, r, i / 2, "ease")
                            }
                            );
                            w !== E && Y.push(V.start(e, {
                                height: E
                            }, i / 2 + I.length * n, "ease")),
                                await Promise.all(Y).then(() => {
                                    it(e, Wn),
                                        s === Fi(e) && (v(e, {
                                            height: "",
                                            alignContent: ""
                                        }),
                                            v(k, {
                                                opacity: ""
                                            }),
                                            delete e.dataset.transition)
                                }
                                )
                        }
                        );
                    return X(e, qn) ? lr(e).then(g) : X(e, Wn) ? lr(e).then(d).then(g) : d().then(g)
                }
                function Fi(t, e) {
                    return e && (t.dataset.transition = 1 + Fi(t)),
                        Xt(t.dataset.transition) || 0
                }
                function lr(t) {
                    return Promise.all(W(t).filter(V.inProgress).map(e => new Promise(i => ht(e, "transitionend transitioncanceled", i))))
                }
                function cr(t) {
                    return Un(W(t)).reduce((e, i) => e.concat(bi(i.filter(n => Mn(n)), "offsetLeft")), [])
                }
                function sl() {
                    return new Promise(t => requestAnimationFrame(t))
                }
                function rl(t) {
                    return new Promise(e => setTimeout(e, t))
                }
                async function ol(t, e, i) {
                    await fr();
                    let n = W(e);
                    const s = n.map(E => hr(E, !0))
                        , r = {
                            ...v(e, ["height", "padding"]),
                            display: "block"
                        };
                    await Promise.all(n.concat(e).map(V.cancel)),
                        t(),
                        n = n.concat(W(e).filter(E => !S(n, E))),
                        await Promise.resolve(),
                        bt.flush();
                    const l = C(e, "style")
                        , u = v(e, ["height", "padding"])
                        , [d, g] = al(e, n, s)
                        , w = n.map(E => ({
                            style: C(E, "style")
                        }));
                    n.forEach((E, I) => g[I] && v(E, g[I])),
                        v(e, r),
                        _(e, "scroll"),
                        bt.flush(),
                        await fr();
                    const k = n.map((E, I) => K(E) === e && V.start(E, d[I], i, "ease")).concat(V.start(e, u, i, "ease"));
                    try {
                        await Promise.all(k),
                            n.forEach((E, I) => {
                                C(E, w[I]),
                                    K(E) === e && v(E, "display", d[I].opacity === 0 ? "none" : "")
                            }
                            ),
                            C(e, "style", l)
                    } catch {
                        C(n, "style", ""),
                            ll(e, r)
                    }
                }
                function hr(t, e) {
                    const i = v(t, "zIndex");
                    return ct(t) ? {
                        display: "",
                        opacity: e ? v(t, "opacity") : "0",
                        pointerEvents: "none",
                        position: "absolute",
                        zIndex: i === "auto" ? Ce(t) : i,
                        ...ur(t)
                    } : !1
                }
                function al(t, e, i) {
                    const n = e.map((r, l) => K(r) && l in i ? i[l] ? ct(r) ? ur(r) : {
                        opacity: 0
                    } : {
                        opacity: ct(r) ? 1 : 0
                    } : !1)
                        , s = n.map((r, l) => {
                            const u = K(e[l]) === t && (i[l] || hr(e[l]));
                            if (!u)
                                return !1;
                            if (!r)
                                delete u.opacity;
                            else if (!("opacity" in r)) {
                                const { opacity: d } = u;
                                d % 1 ? r.opacity = 1 : delete u.opacity
                            }
                            return u
                        }
                        );
                    return [n, s]
                }
                function ll(t, e) {
                    for (const i in e)
                        v(t, i, "")
                }
                function ur(t) {
                    const { height: e, width: i } = G(t);
                    return {
                        height: e,
                        width: i,
                        transform: "",
                        ...In(t),
                        ...v(t, ["marginTop", "marginLeft"])
                    }
                }
                function fr() {
                    return new Promise(t => requestAnimationFrame(t))
                }
                var dr = {
                    props: {
                        duration: Number,
                        animation: Boolean
                    },
                    data: {
                        duration: 150,
                        animation: "slide"
                    },
                    methods: {
                        animate(t, e = this.$el) {
                            const i = this.animation;
                            return (i === "fade" ? ar : i === "delayed-fade" ? (...s) => ar(...s, 40) : i ? ol : () => (t(),
                                Promise.resolve()))(t, e, this.duration).catch(j)
                        }
                    }
                };
                const U = {
                    TAB: 9,
                    ESC: 27,
                    SPACE: 32,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40
                };
                var cl = {
                    mixins: [dr],
                    args: "target",
                    props: {
                        target: String,
                        selActive: Boolean
                    },
                    data: {
                        target: "",
                        selActive: !1,
                        attrItem: "uk-filter-control",
                        cls: "uk-active",
                        duration: 250
                    },
                    computed: {
                        toggles({ attrItem: t }, e) {
                            return st(`[${t}],[data-${t}]`, e)
                        },
                        children({ target: t }, e) {
                            return st(`${t} > *`, e)
                        }
                    },
                    watch: {
                        toggles(t) {
                            this.updateState();
                            const e = st(this.selActive, this.$el);
                            for (const i of t) {
                                this.selActive !== !1 && ft(i, this.cls, S(e, i));
                                const n = ml(i);
                                vt(n, "a") && C(n, "role", "button")
                            }
                        },
                        children(t, e) {
                            e && this.updateState()
                        }
                    },
                    events: {
                        name: "click keydown",
                        delegate() {
                            return `[${this.attrItem}],[data-${this.attrItem}]`
                        },
                        handler(t) {
                            t.type === "keydown" && t.keyCode !== U.SPACE || pt(t.target, "a,button") && (t.preventDefault(),
                                this.apply(t.current))
                        }
                    },
                    methods: {
                        apply(t) {
                            const e = this.getState()
                                , i = mr(t, this.attrItem, this.getState());
                            hl(e, i) || this.setState(i)
                        },
                        getState() {
                            return this.toggles.filter(t => X(t, this.cls)).reduce((t, e) => mr(e, this.attrItem, t), {
                                filter: {
                                    "": ""
                                },
                                sort: []
                            })
                        },
                        async setState(t, e = !0) {
                            t = {
                                filter: {
                                    "": ""
                                },
                                sort: [],
                                ...t
                            },
                                _(this.$el, "beforeFilter", [this, t]);
                            for (const i of this.toggles)
                                ft(i, this.cls, fl(i, this.attrItem, t));
                            await Promise.all(st(this.target, this.$el).map(i => {
                                const n = () => {
                                    ul(t, i, W(i)),
                                        this.$update(this.$el)
                                }
                                    ;
                                return e ? this.animate(n, i) : n()
                            }
                            )),
                                _(this.$el, "afterFilter", [this])
                        },
                        updateState() {
                            bt.write(() => this.setState(this.getState(), !1))
                        }
                    }
                };
                function pr(t, e) {
                    return ti(St(t, e), ["filter"])
                }
                function hl(t, e) {
                    return ["filter", "sort"].every(i => wi(t[i], e[i]))
                }
                function ul(t, e, i) {
                    const n = dl(t);
                    i.forEach(l => v(l, "display", n && !q(l, n) ? "none" : ""));
                    const [s, r] = t.sort;
                    if (s) {
                        const l = pl(i, s, r);
                        wi(l, i) || at(e, l)
                    }
                }
                function mr(t, e, i) {
                    const { filter: n, group: s, sort: r, order: l = "asc" } = pr(t, e);
                    return (n || gt(r)) && (s ? n ? (delete i.filter[""],
                        i.filter[s] = n) : (delete i.filter[s],
                            (He(i.filter) || "" in i.filter) && (i.filter = {
                                "": n || ""
                            })) : i.filter = {
                                "": n || ""
                            }),
                        gt(r) || (i.sort = [r, l]),
                        i
                }
                function fl(t, e, { filter: i = {
                    "": ""
                }, sort: [n, s] }) {
                    const { filter: r = "", group: l = "", sort: u, order: d = "asc" } = pr(t, e);
                    return gt(u) ? l in i && r === i[l] || !r && l && !(l in i) && !i[""] : n === u && s === d
                }
                function dl({ filter: t }) {
                    let e = "";
                    return Qt(t, i => e += i || ""),
                        e
                }
                function pl(t, e, i) {
                    return [...t].sort((n, s) => St(n, e).localeCompare(St(s, e), void 0, {
                        numeric: !0
                    }) * (i === "asc" || -1))
                }
                function ml(t) {
                    return N("a,button", t) || t
                }
                var si = {
                    props: {
                        container: Boolean
                    },
                    data: {
                        container: !0
                    },
                    computed: {
                        container({ container: t }) {
                            return t === !0 && this.$container || t && N(t)
                        }
                    }
                };
                let Vn;
                function gr(t) {
                    const e = M(t, "touchmove", n => {
                        if (n.targetTouches.length !== 1 || q(n.target, 'input[type="range"'))
                            return;
                        let { scrollHeight: s, clientHeight: r } = Yt(n.target);
                        r >= s && n.cancelable && n.preventDefault()
                    }
                        , {
                            passive: !1
                        });
                    if (Vn)
                        return e;
                    Vn = !0;
                    const { scrollingElement: i } = document;
                    return v(i, {
                        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
                        touchAction: "none",
                        paddingRight: Ge(window) - i.clientWidth || ""
                    }),
                        () => {
                            Vn = !1,
                                e(),
                                v(i, {
                                    overflowY: "",
                                    touchAction: "",
                                    paddingRight: ""
                                })
                        }
                }
                var pe = {
                    props: {
                        cls: Boolean,
                        animation: "list",
                        duration: Number,
                        velocity: Number,
                        origin: String,
                        transition: String
                    },
                    data: {
                        cls: !1,
                        animation: [!1],
                        duration: 200,
                        velocity: .2,
                        origin: !1,
                        transition: "ease",
                        clsEnter: "uk-togglabe-enter",
                        clsLeave: "uk-togglabe-leave"
                    },
                    computed: {
                        hasAnimation({ animation: t }) {
                            return !!t[0]
                        },
                        hasTransition({ animation: t }) {
                            return ["slide", "reveal"].some(e => x(t[0], e))
                        }
                    },
                    methods: {
                        async toggleElement(t, e, i) {
                            try {
                                return await Promise.all(H(t).map(n => {
                                    const s = Jt(e) ? e : !this.isToggled(n);
                                    if (!_(n, `before${s ? "show" : "hide"}`, [this]))
                                        return Promise.reject();
                                    const r = (z(i) ? i : i === !1 || !this.hasAnimation ? gl : this.hasTransition ? vl : wl)(n, s, this)
                                        , l = s ? this.clsEnter : this.clsLeave;
                                    L(n, l),
                                        _(n, s ? "show" : "hide", [this]);
                                    const u = () => {
                                        it(n, l),
                                            _(n, s ? "shown" : "hidden", [this])
                                    }
                                        ;
                                    return r ? r.then(u, () => (it(n, l),
                                        Promise.reject())) : u()
                                }
                                )),
                                    !0
                            } catch {
                                return !1
                            }
                        },
                        isToggled(t = this.$el) {
                            return t = ot(t),
                                X(t, this.clsEnter) ? !0 : X(t, this.clsLeave) ? !1 : this.cls ? X(t, this.cls.split(" ")[0]) : ct(t)
                        },
                        _toggle(t, e) {
                            if (!t)
                                return;
                            e = !!e;
                            let i;
                            this.cls ? (i = S(this.cls, " ") || e !== X(t, this.cls),
                                i && ft(t, this.cls, S(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden,
                                    i && (t.hidden = !e)),
                                st("[autofocus]", t).some(n => ct(n) ? n.focus() || !0 : n.blur()),
                                i && _(t, "toggled", [e, this])
                        }
                    }
                };
                function gl(t, e, { _toggle: i }) {
                    return Ht.cancel(t),
                        V.cancel(t),
                        i(t, e)
                }
                async function vl(t, e, { animation: i, duration: n, velocity: s, transition: r, _toggle: l }) {
                    var u;
                    const [d = "reveal", g = "top"] = ((u = i[0]) == null ? void 0 : u.split("-")) || []
                        , w = [["left", "right"], ["top", "bottom"]]
                        , k = w[S(w[0], g) ? 0 : 1]
                        , E = k[1] === g
                        , Y = ["width", "height"][w.indexOf(k)]
                        , nt = `margin-${k[0]}`
                        , rt = `margin-${g}`;
                    let ie = B(t)[Y];
                    const ls = V.inProgress(t);
                    await V.cancel(t),
                        e && l(t, !0);
                    const xu = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", nt, rt].map(Oo => [Oo, t.style[Oo]]))
                        , di = B(t)
                        , cs = F(v(t, nt))
                        , Eo = F(v(t, rt))
                        , ye = di[Y] + Eo;
                    !ls && !e && (ie += Eo);
                    const [tn] = Pn(t, "<div>");
                    v(tn, {
                        boxSizing: "border-box",
                        height: di.height,
                        width: di.width,
                        ...v(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", rt])
                    }),
                        v(t, {
                            padding: 0,
                            border: 0,
                            minWidth: 0,
                            minHeight: 0,
                            [rt]: 0,
                            width: di.width,
                            height: di.height,
                            overflow: "hidden",
                            [Y]: ie
                        });
                    const To = ie / ye;
                    n = (s * ye + n) * (e ? 1 - To : To);
                    const Co = {
                        [Y]: e ? ye : 0
                    };
                    E && (v(t, nt, ye - ie + cs),
                        Co[nt] = e ? cs : ye + cs),
                        !E ^ d === "reveal" && (v(tn, nt, -ye + ie),
                            V.start(tn, {
                                [nt]: e ? 0 : -ye
                            }, n, r));
                    try {
                        await V.start(t, Co, n, r)
                    } finally {
                        v(t, xu),
                            Ke(tn.firstChild),
                            e || l(t, !1)
                    }
                }
                function wl(t, e, i) {
                    Ht.cancel(t);
                    const { animation: n, duration: s, _toggle: r } = i;
                    return e ? (r(t, !0),
                        Ht.in(t, n[0], s, i.origin)) : Ht.out(t, n[1] || n[0], s, i.origin).then(() => r(t, !1))
                }
                const Ot = [];
                var Jn = {
                    mixins: [Ct, si, pe],
                    props: {
                        selPanel: String,
                        selClose: String,
                        escClose: Boolean,
                        bgClose: Boolean,
                        stack: Boolean,
                        role: String
                    },
                    data: {
                        cls: "uk-open",
                        escClose: !0,
                        bgClose: !0,
                        overlay: !0,
                        stack: !1,
                        role: "dialog"
                    },
                    computed: {
                        panel({ selPanel: t }, e) {
                            return N(t, e)
                        },
                        transitionElement() {
                            return this.panel
                        },
                        bgClose({ bgClose: t }) {
                            return t && this.panel
                        }
                    },
                    connected() {
                        C(this.panel || this.$el, "role", this.role),
                            this.overlay && C(this.panel || this.$el, "aria-modal", !0)
                    },
                    beforeDisconnect() {
                        S(Ot, this) && this.toggleElement(this.$el, !1, !1)
                    },
                    events: [{
                        name: "click",
                        delegate() {
                            return `${this.selClose},a[href*="#"]`
                        },
                        handler(t) {
                            const { current: e, defaultPrevented: i } = t
                                , { hash: n } = e;
                            !i && n && Oe(e) && !et(n, this.$el) && N(n, document.body) ? this.hide() : q(e, this.selClose) && (t.preventDefault(),
                                this.hide())
                        }
                    }, {
                        name: "toggle",
                        self: !0,
                        handler(t) {
                            t.defaultPrevented || (t.preventDefault(),
                                this.isToggled() === S(Ot, this) && this.toggle())
                        }
                    }, {
                        name: "beforeshow",
                        self: !0,
                        handler(t) {
                            if (S(Ot, this))
                                return !1;
                            !this.stack && Ot.length ? (Promise.all(Ot.map(e => e.hide())).then(this.show),
                                t.preventDefault()) : Ot.push(this)
                        }
                    }, {
                        name: "show",
                        self: !0,
                        handler() {
                            this.stack && v(this.$el, "zIndex", F(v(this.$el, "zIndex")) + Ot.length);
                            const t = [this.overlay && yl(this), this.overlay && gr(this.$el), this.bgClose && xl(this), this.escClose && $l(this)];
                            ht(this.$el, "hidden", () => t.forEach(e => e && e()), {
                                self: !0
                            }),
                                L(document.documentElement, this.clsPage)
                        }
                    }, {
                        name: "shown",
                        self: !0,
                        handler() {
                            $i(this.$el) || C(this.$el, "tabindex", "-1"),
                                q(this.$el, ":focus-within") || this.$el.focus()
                        }
                    }, {
                        name: "hidden",
                        self: !0,
                        handler() {
                            S(Ot, this) && Ot.splice(Ot.indexOf(this), 1),
                                v(this.$el, "zIndex", ""),
                                Ot.some(t => t.clsPage === this.clsPage) || it(document.documentElement, this.clsPage)
                        }
                    }],
                    methods: {
                        toggle() {
                            return this.isToggled() ? this.hide() : this.show()
                        },
                        show() {
                            return this.container && K(this.$el) !== this.container ? (at(this.container, this.$el),
                                new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, vr)
                        },
                        hide() {
                            return this.toggleElement(this.$el, !1, vr)
                        }
                    }
                };
                function vr(t, e, { transitionElement: i, _toggle: n }) {
                    return new Promise((s, r) => ht(t, "show hide", () => {
                        var l;
                        (l = t._reject) == null || l.call(t),
                            t._reject = r,
                            n(t, e);
                        const u = ht(i, "transitionstart", () => {
                            ht(i, "transitionend transitioncancel", s, {
                                self: !0
                            }),
                                clearTimeout(d)
                        }
                            , {
                                self: !0
                            })
                            , d = setTimeout(() => {
                                u(),
                                    s()
                            }
                                , bl(v(i, "transitionDuration")))
                    }
                    )).then(() => delete t._reject)
                }
                function bl(t) {
                    return t ? P(t, "ms") ? F(t) : F(t) * 1e3 : 0
                }
                function yl(t) {
                    return M(document, "focusin", e => {
                        Ee(Ot) === t && !et(e.target, t.$el) && t.$el.focus()
                    }
                    )
                }
                function xl(t) {
                    return M(document, jt, ({ target: e }) => {
                        Ee(Ot) !== t || t.overlay && !et(e, t.$el) || et(e, t.panel) || ht(document, `${te} ${Pi} scroll`, ({ defaultPrevented: i, type: n, target: s }) => {
                            !i && n === te && e === s && t.hide()
                        }
                            , !0)
                    }
                    )
                }
                function $l(t) {
                    return M(document, "keydown", e => {
                        e.keyCode === 27 && Ee(Ot) === t && t.hide()
                    }
                    )
                }
                var Xn = {
                    slide: {
                        show(t) {
                            return [{
                                transform: lt(t * -100)
                            }, {
                                transform: lt()
                            }]
                        },
                        percent(t) {
                            return ri(t)
                        },
                        translate(t, e) {
                            return [{
                                transform: lt(e * -100 * t)
                            }, {
                                transform: lt(e * 100 * (1 - t))
                            }]
                        }
                    }
                };
                function ri(t) {
                    return Math.abs(v(t, "transform").split(",")[4] / t.offsetWidth) || 0
                }
                function lt(t = 0, e = "%") {
                    return t += t ? e : "",
                        `translate3d(${t}, 0, 0)`
                }
                function Ne(t) {
                    return `scale3d(${t}, ${t}, 1)`
                }
                function kl(t, e, i, { animation: n, easing: s }) {
                    const { percent: r, translate: l, show: u = j } = n
                        , d = u(i);
                    let g;
                    return {
                        dir: i,
                        show(w, k = 0, E) {
                            const I = E ? "linear" : s;
                            return w -= Math.round(w * $t(k, -1, 1)),
                                this.translate(k),
                                Mi(e, "itemin", {
                                    percent: k,
                                    duration: w,
                                    timing: I,
                                    dir: i
                                }),
                                Mi(t, "itemout", {
                                    percent: 1 - k,
                                    duration: w,
                                    timing: I,
                                    dir: i
                                }),
                                new Promise(Y => {
                                    g || (g = Y),
                                        Promise.all([V.start(e, d[1], w, I), V.start(t, d[0], w, I)]).then(() => {
                                            this.reset(),
                                                g()
                                        }
                                            , j)
                                }
                                )
                        },
                        cancel() {
                            return V.cancel([e, t])
                        },
                        reset() {
                            for (const w in d[0])
                                v([e, t], w, "")
                        },
                        async forward(w, k = this.percent()) {
                            return await this.cancel(),
                                this.show(w, k, !0)
                        },
                        translate(w) {
                            this.reset();
                            const k = l(w, i);
                            v(e, k[1]),
                                v(t, k[0]),
                                Mi(e, "itemtranslatein", {
                                    percent: w,
                                    dir: i
                                }),
                                Mi(t, "itemtranslateout", {
                                    percent: 1 - w,
                                    dir: i
                                })
                        },
                        percent() {
                            return r(t || e, e, i)
                        },
                        getDistance() {
                            return t == null ? void 0 : t.offsetWidth
                        }
                    }
                }
                function Mi(t, e, i) {
                    _(t, re(e, !1, !1, i))
                }
                var Li = {
                    props: {
                        i18n: Object
                    },
                    data: {
                        i18n: null
                    },
                    methods: {
                        t(t, ...e) {
                            var i, n, s;
                            let r = 0;
                            return ((s = ((i = this.i18n) == null ? void 0 : i[t]) || ((n = this.$options.i18n) == null ? void 0 : n[t])) == null ? void 0 : s.replace(/%s/g, () => e[r++] || "")) || ""
                        }
                    }
                }
                    , Sl = {
                        props: {
                            autoplay: Boolean,
                            autoplayInterval: Number,
                            pauseOnHover: Boolean
                        },
                        data: {
                            autoplay: !1,
                            autoplayInterval: 7e3,
                            pauseOnHover: !0
                        },
                        connected() {
                            C(this.list, "aria-live", this.autoplay ? "off" : "polite"),
                                this.autoplay && this.startAutoplay()
                        },
                        disconnected() {
                            this.stopAutoplay()
                        },
                        update() {
                            C(this.slides, "tabindex", "-1")
                        },
                        events: [{
                            name: "visibilitychange",
                            el() {
                                return document
                            },
                            filter() {
                                return this.autoplay
                            },
                            handler() {
                                document.hidden ? this.stopAutoplay() : this.startAutoplay()
                            }
                        }],
                        methods: {
                            startAutoplay() {
                                this.stopAutoplay(),
                                    this.interval = setInterval(() => {
                                        this.stack.length || this.draggable && q(this.$el, ":focus-within") || this.pauseOnHover && q(this.$el, ":hover") || this.show("next")
                                    }
                                        , this.autoplayInterval)
                            },
                            stopAutoplay() {
                                clearInterval(this.interval)
                            }
                        }
                    };
                const Kn = {
                    passive: !1,
                    capture: !0
                }
                    , wr = {
                        passive: !0,
                        capture: !0
                    }
                    , El = "touchstart mousedown"
                    , Gn = "touchmove mousemove"
                    , br = "touchend touchcancel mouseup click input scroll";
                var Tl = {
                    props: {
                        draggable: Boolean
                    },
                    data: {
                        draggable: !0,
                        threshold: 10
                    },
                    created() {
                        for (const t of ["start", "move", "end"]) {
                            const e = this[t];
                            this[t] = i => {
                                const n = Ae(i).x * (wt ? -1 : 1);
                                this.prevPos = n === this.pos ? this.prevPos : this.pos,
                                    this.pos = n,
                                    e(i)
                            }
                        }
                    },
                    events: [{
                        name: El,
                        passive: !0,
                        delegate() {
                            return `${this.selList} > *`
                        },
                        handler(t) {
                            !this.draggable || !Kt(t) && Cl(t.target) || pt(t.target, Ue) || t.button > 0 || this.length < 2 || this.start(t)
                        }
                    }, {
                        name: "dragstart",
                        handler(t) {
                            t.preventDefault()
                        }
                    }, {
                        name: Gn,
                        el() {
                            return this.list
                        },
                        handler: j,
                        ...Kn
                    }],
                    methods: {
                        start() {
                            this.drag = this.pos,
                                this._transitioner ? (this.percent = this._transitioner.percent(),
                                    this.drag += this._transitioner.getDistance() * this.percent * this.dir,
                                    this._transitioner.cancel(),
                                    this._transitioner.translate(this.percent),
                                    this.dragging = !0,
                                    this.stack = []) : this.prevIndex = this.index,
                                M(document, Gn, this.move, Kn),
                                M(document, br, this.end, wr),
                                v(this.list, "userSelect", "none")
                        },
                        move(t) {
                            const e = this.pos - this.drag;
                            if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
                                return;
                            v(this.list, "pointerEvents", "none"),
                                t.cancelable && t.preventDefault(),
                                this.dragging = !0,
                                this.dir = e < 0 ? 1 : -1;
                            let { slides: i, prevIndex: n } = this
                                , s = Math.abs(e)
                                , r = this.getIndex(n + this.dir)
                                , l = this._getDistance(n, r);
                            for (; r !== n && s > l;)
                                this.drag -= l * this.dir,
                                    n = r,
                                    s -= l,
                                    r = this.getIndex(n + this.dir),
                                    l = this._getDistance(n, r);
                            this.percent = s / l;
                            const u = i[n]
                                , d = i[r]
                                , g = this.index !== r
                                , w = n === r;
                            let k;
                            for (const E of [this.index, this.prevIndex])
                                S([r, n], E) || (_(i[E], "itemhidden", [this]),
                                    w && (k = !0,
                                        this.prevIndex = n));
                            (this.index === n && this.prevIndex !== n || k) && _(i[this.index], "itemshown", [this]),
                                g && (this.prevIndex = n,
                                    this.index = r,
                                    !w && _(u, "beforeitemhide", [this]),
                                    _(d, "beforeitemshow", [this])),
                                this._transitioner = this._translate(Math.abs(this.percent), u, !w && d),
                                g && (!w && _(u, "itemhide", [this]),
                                    _(d, "itemshow", [this]))
                        },
                        end() {
                            if (se(document, Gn, this.move, Kn),
                                se(document, br, this.end, wr),
                                this.dragging)
                                if (this.dragging = null,
                                    this.index === this.prevIndex)
                                    this.percent = 1 - this.percent,
                                        this.dir *= -1,
                                        this._show(!1, this.index, !0),
                                        this._transitioner = null;
                                else {
                                    const t = (wt ? this.dir * (wt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                                    this.index = t ? this.index : this.prevIndex,
                                        t && (this.percent = 1 - this.percent),
                                        this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                                }
                            v(this.list, {
                                userSelect: "",
                                pointerEvents: ""
                            }),
                                this.drag = this.percent = null
                        },
                        _getDistance(t, e) {
                            return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth
                        }
                    }
                };
                function Cl(t) {
                    return v(t, "userSelect") !== "none" && R(t.childNodes).some(e => e.nodeType === 3 && e.textContent.trim())
                }
                function Ol(t) {
                    t._data = {},
                        t._updates = [...t.$options.update || []]
                }
                function Al(t, e) {
                    t._updates.unshift(e)
                }
                function Pl(t) {
                    delete t._data
                }
                function zi(t, e = "update") {
                    t._connected && t._updates.length && (t._queued || (t._queued = new Set,
                        bt.read(() => {
                            t._connected && Il(t, t._queued),
                                delete t._queued
                        }
                        )),
                        t._queued.add(e.type || e))
                }
                function Il(t, e) {
                    for (const { read: i, write: n, events: s = [] } of t._updates) {
                        if (!e.has("update") && !s.some(l => e.has(l)))
                            continue;
                        let r;
                        i && (r = i.call(t, t._data, e),
                            r && Q(r) && O(t._data, r)),
                            n && r !== !1 && bt.write(() => {
                                t._connected && n.call(t, t._data, e)
                            }
                            )
                    }
                }
                function _l(t) {
                    t._watches = [];
                    for (const e of t.$options.watch || [])
                        for (const [i, n] of Object.entries(e))
                            yr(t, n, i);
                    t._initial = !0
                }
                function yr(t, e, i) {
                    t._watches.push({
                        name: i,
                        ...Q(e) ? e : {
                            handler: e
                        }
                    })
                }
                function Rl(t, e) {
                    for (const { name: i, handler: n, immediate: s = !0 } of t._watches)
                        (t._initial && s || f(e, i) && !wi(e[i], t[i])) && n.call(t, t[i], e[i]);
                    t._initial = !1
                }
                function Nl(t) {
                    const { computed: e } = t.$options;
                    if (t._computed = {},
                        e)
                        for (const i in e)
                            xr(t, i, e[i])
                }
                function xr(t, e, i) {
                    t._hasComputed = !0,
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            get() {
                                const { _computed: n, $props: s, $el: r } = t;
                                return f(n, e) || (n[e] = (i.get || i).call(t, s, r)),
                                    n[e]
                            },
                            set(n) {
                                const { _computed: s } = t;
                                s[e] = i.set ? i.set.call(t, n) : n,
                                    gt(s[e]) && delete s[e]
                            }
                        })
                }
                function Dl(t) {
                    t._hasComputed && (Al(t, {
                        read: () => Rl(t, $r(t)),
                        events: ["resize", "computed"]
                    }),
                        Fl(),
                        oi.add(t))
                }
                function Bl(t) {
                    oi == null || oi.delete(t),
                        $r(t)
                }
                function $r(t) {
                    const e = {
                        ...t._computed
                    };
                    return t._computed = {},
                        e
                }
                let Yn, oi;
                function Fl() {
                    Yn || (oi = new Set,
                        Yn = new MutationObserver(() => {
                            for (const t of oi)
                                zi(t, "computed")
                        }
                        ),
                        Yn.observe(document, {
                            childList: !0,
                            subtree: !0
                        }))
                }
                function Ml(t) {
                    t._events = [];
                    for (const e of t.$options.events || [])
                        if (f(e, "handler"))
                            Zn(t, e);
                        else
                            for (const i in e)
                                Zn(t, e[i], i)
                }
                function Ll(t) {
                    t._events.forEach(e => e()),
                        delete t._events
                }
                function Zn(t, e, i) {
                    let { name: n, el: s, handler: r, capture: l, passive: u, delegate: d, filter: g, self: w } = Q(e) ? e : {
                        name: i,
                        handler: e
                    };
                    if (s = z(s) ? s.call(t, t) : s || t.$el,
                        T(s)) {
                        s.forEach(k => Zn(t, {
                            ...e,
                            el: k
                        }, i));
                        return
                    }
                    !s || g && !g.call(t) || t._events.push(M(s, n, d ? tt(d) ? d : d.call(t, t) : null, tt(r) ? t[r] : r.bind(t), {
                        passive: u,
                        capture: l,
                        self: w
                    }))
                }
                function zl(t) {
                    t._observers = [];
                    for (const e of t.$options.observe || [])
                        if (f(e, "handler"))
                            Sr(t, e);
                        else
                            for (const i of e)
                                Sr(t, i)
                }
                function kr(t, ...e) {
                    t._observers.push(...e)
                }
                function Hl(t) {
                    for (const e of t._observers)
                        e.disconnect()
                }
                function Sr(t, e) {
                    let { observe: i, target: n = t.$el, handler: s, options: r, filter: l, args: u } = e;
                    if (l && !l.call(t, t))
                        return;
                    const d = `_observe${t._observers.length}`;
                    z(n) && !f(t, d) && xr(t, d, () => n.call(t, t)),
                        s = tt(s) ? t[s] : s.bind(t),
                        z(r) && (r = r.call(t, t));
                    const g = f(t, d) ? t[d] : n
                        , w = i(g, s, r, u);
                    z(n) && T(t[d]) && w.unobserve && yr(t, {
                        handler: jl(w),
                        immediate: !1
                    }, d),
                        kr(t, w)
                }
                function jl(t) {
                    return (e, i) => {
                        for (const n of i)
                            !S(e, n) && t.unobserve(n);
                        for (const n of e)
                            !S(i, n) && t.observe(n)
                    }
                }
                function Ul(t) {
                    const e = Er(t.$options);
                    for (let n in e)
                        gt(e[n]) || (t.$props[n] = e[n]);
                    const i = [t.$options.computed, t.$options.methods];
                    for (let n in t.$props)
                        n in e && ql(i, n) && (t[n] = t.$props[n])
                }
                function Er(t) {
                    const e = {}
                        , { args: i = [], props: n = {}, el: s, id: r } = t;
                    if (!n)
                        return e;
                    for (const u in n) {
                        const d = m(u);
                        let g = St(s, d);
                        gt(g) || (g = n[u] === Boolean && g === "" ? !0 : jn(n[u], g),
                            !(d === "target" && x(g, "_")) && (e[u] = g))
                    }
                    const l = ti(St(s, r), i);
                    for (const u in l) {
                        const d = A(u);
                        gt(n[d]) || (e[d] = jn(n[d], l[u]))
                    }
                    return e
                }
                function ql(t, e) {
                    return t.every(i => !i || !f(i, e))
                }
                function Wl(t) {
                    const { $options: e, $props: i } = t
                        , { id: n, props: s, el: r } = e;
                    if (!s)
                        return;
                    const l = Object.keys(s)
                        , u = l.map(g => m(g)).concat(n)
                        , d = new MutationObserver(g => {
                            const w = Er(e);
                            g.some(({ attributeName: k }) => {
                                const E = k.replace("data-", "");
                                return (E === n ? l : [A(E), A(k)]).some(I => !gt(w[I]) && w[I] !== i[I])
                            }
                            ) && t.$reset()
                        }
                        );
                    d.observe(r, {
                        attributes: !0,
                        attributeFilter: u.concat(u.map(g => `data-${g}`))
                    }),
                        kr(t, d)
                }
                function De(t, e) {
                    var i;
                    (i = t.$options[e]) == null || i.forEach(n => n.call(t))
                }
                function Qn(t) {
                    t._connected || (Ul(t),
                        De(t, "beforeConnect"),
                        t._connected = !0,
                        Ml(t),
                        Ol(t),
                        _l(t),
                        zl(t),
                        Wl(t),
                        Dl(t),
                        De(t, "connected"),
                        zi(t))
                }
                function ts(t) {
                    t._connected && (De(t, "beforeDisconnect"),
                        Ll(t),
                        Pl(t),
                        Hl(t),
                        Bl(t),
                        De(t, "disconnected"),
                        t._connected = !1)
                }
                let Vl = 0;
                function Tr(t, e = {}) {
                    e.data = Kl(e, t.constructor.options),
                        t.$options = Qe(t.constructor.options, e, t),
                        t.$props = {},
                        t._uid = Vl++,
                        Jl(t),
                        Xl(t),
                        Nl(t),
                        De(t, "created"),
                        e.el && t.$mount(e.el)
                }
                function Jl(t) {
                    const { data: e = {} } = t.$options;
                    for (const i in e)
                        t.$props[i] = t[i] = e[i]
                }
                function Xl(t) {
                    const { methods: e } = t.$options;
                    if (e)
                        for (const i in e)
                            t[i] = e[i].bind(t)
                }
                function Kl({ data: t = {} }, { args: e = [], props: i = {} }) {
                    T(t) && (t = t.slice(0, e.length).reduce((n, s, r) => (Q(s) ? O(n, s) : n[e[r]] = s,
                        n), {}));
                    for (const n in t)
                        gt(t[n]) ? delete t[n] : i[n] && (t[n] = jn(i[n], t[n]));
                    return t
                }
                const Ft = function (t) {
                    Tr(this, t)
                };
                Ft.util = Ka,
                    Ft.options = {},
                    Ft.version = "3.16.26";
                const Gl = "uk-"
                    , me = "__uikit__"
                    , Be = {};
                function Cr(t, e) {
                    var i;
                    const n = Gl + m(t);
                    if (!e)
                        return Q(Be[n]) && (Be[n] = Ft.extend(Be[n])),
                            Be[n];
                    t = A(t),
                        Ft[t] = (r, l) => ai(t, r, l);
                    const s = Q(e) ? {
                        ...e
                    } : e.options;
                    return s.id = n,
                        s.name = t,
                        (i = s.install) == null || i.call(s, Ft, s, t),
                        Ft._initialized && !s.functional && requestAnimationFrame(() => ai(t, `[${n}],[data-${n}]`)),
                        Be[n] = s
                }
                function ai(t, e, i, ...n) {
                    const s = Cr(t);
                    return s.options.functional ? new s({
                        data: Q(e) ? e : [e, i, ...n]
                    }) : e ? st(e).map(r)[0] : r();
                    function r(l) {
                        const u = Hi(l, t);
                        if (u)
                            if (i)
                                u.$destroy();
                            else
                                return u;
                        return new s({
                            el: l,
                            data: i
                        })
                    }
                }
                function ge(t) {
                    return (t == null ? void 0 : t[me]) || {}
                }
                function Hi(t, e) {
                    return ge(t)[e]
                }
                function Yl(t, e) {
                    t[me] || (t[me] = {}),
                        t[me][e.$options.name] = e
                }
                function Zl(t, e) {
                    var i;
                    (i = t[me]) == null || delete i[e.$options.name],
                        He(t[me]) || delete t[me]
                }
                function Ql(t) {
                    t.component = Cr,
                        t.getComponents = ge,
                        t.getComponent = Hi,
                        t.update = Or,
                        t.use = function (i) {
                            if (!i.installed)
                                return i.call(null, this),
                                    i.installed = !0,
                                    this
                        }
                        ,
                        t.mixin = function (i, n) {
                            n = (tt(n) ? this.component(n) : n) || this,
                                n.options = Qe(n.options, i)
                        }
                        ,
                        t.extend = function (i) {
                            i || (i = {});
                            const n = this
                                , s = function (l) {
                                    Tr(this, l)
                                };
                            return s.prototype = Object.create(n.prototype),
                                s.prototype.constructor = s,
                                s.options = Qe(n.options, i),
                                s.super = n,
                                s.extend = n.extend,
                                s
                        }
                        ;
                    let e;
                    Object.defineProperty(t, "container", {
                        get() {
                            return e || document.body
                        },
                        set(i) {
                            e = N(i)
                        }
                    })
                }
                function Or(t, e) {
                    t = t ? ot(t) : document.body;
                    for (const i of Te(t).reverse())
                        Ar(i, e);
                    Gt(t, i => Ar(i, e))
                }
                function Ar(t, e) {
                    const i = ge(t);
                    for (const n in i)
                        zi(i[n], e)
                }
                function tc(t) {
                    t.prototype.$mount = function (e) {
                        const i = this;
                        Yl(e, i),
                            i.$options.el = e,
                            et(e, document) && Qn(i)
                    }
                        ,
                        t.prototype.$destroy = function (e = !1) {
                            const i = this
                                , { el: n } = i.$options;
                            n && ts(i),
                                De(i, "destroy"),
                                Zl(n, i),
                                e && Rt(i.$el)
                        }
                        ,
                        t.prototype.$create = ai,
                        t.prototype.$emit = function (e) {
                            zi(this, e)
                        }
                        ,
                        t.prototype.$update = function (e = this.$el, i) {
                            Or(e, i)
                        }
                        ,
                        t.prototype.$reset = function () {
                            ts(this),
                                Qn(this)
                        }
                        ,
                        t.prototype.$getComponent = Hi,
                        Object.defineProperties(t.prototype, {
                            $el: {
                                get() {
                                    return this.$options.el
                                }
                            },
                            $container: Object.getOwnPropertyDescriptor(t, "container")
                        })
                }
                function ee(t, e = t.$el, i = "") {
                    if (e.id)
                        return e.id;
                    let n = `${t.$options.id}-${t._uid}${i}`;
                    return N(`#${n}`) && (n = ee(t, e, `${i}-2`)),
                        n
                }
                var ec = {
                    i18n: {
                        next: "Next slide",
                        previous: "Previous slide",
                        slideX: "Slide %s",
                        slideLabel: "%s of %s",
                        role: "String"
                    },
                    data: {
                        selNav: !1,
                        role: "region"
                    },
                    computed: {
                        nav({ selNav: t }, e) {
                            return N(t, e)
                        },
                        navChildren() {
                            return W(this.nav)
                        },
                        selNavItem({ attrItem: t }) {
                            return `[${t}],[data-${t}]`
                        },
                        navItems(t, e) {
                            return st(this.selNavItem, e)
                        }
                    },
                    watch: {
                        nav(t, e) {
                            C(t, "role", "tablist"),
                                e && this.$emit()
                        },
                        list(t) {
                            C(t, "role", "presentation")
                        },
                        navChildren(t) {
                            C(t, "role", "presentation")
                        },
                        navItems(t) {
                            for (const e of t) {
                                const i = St(e, this.attrItem)
                                    , n = N("a,button", e) || e;
                                let s, r = null;
                                if (qt(i)) {
                                    const l = Xt(i)
                                        , u = this.slides[l];
                                    u && (u.id || (u.id = ee(this, u, `-item-${i}`)),
                                        r = u.id),
                                        s = this.t("slideX", F(i) + 1),
                                        C(n, "role", "tab")
                                } else
                                    this.list && (this.list.id || (this.list.id = ee(this, this.list, "-items")),
                                        r = this.list.id),
                                        s = this.t(i);
                                C(n, {
                                    "aria-controls": r,
                                    "aria-label": C(n, "aria-label") || s
                                })
                            }
                        },
                        slides(t) {
                            t.forEach((e, i) => C(e, {
                                role: this.nav ? "tabpanel" : "group",
                                "aria-label": this.t("slideLabel", i + 1, this.length),
                                "aria-roledescription": this.nav ? null : "slide"
                            }))
                        },
                        length(t) {
                            const e = this.navChildren.length;
                            if (this.nav && t !== e) {
                                An(this.nav);
                                for (let i = 0; i < t; i++)
                                    at(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`)
                            }
                        }
                    },
                    connected() {
                        C(this.$el, {
                            role: this.role,
                            "aria-roledescription": "carousel"
                        })
                    },
                    update: [{
                        write() {
                            this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)),
                                this.updateNav()
                        },
                        events: ["resize"]
                    }],
                    events: [{
                        name: "click keydown",
                        delegate() {
                            return this.selNavItem
                        },
                        handler(t) {
                            pt(t.target, "a,button") && (t.type === "click" || t.keyCode === U.SPACE) && (t.preventDefault(),
                                this.show(St(t.current, this.attrItem)))
                        }
                    }, {
                        name: "itemshow",
                        handler: "updateNav"
                    }, {
                        name: "keydown",
                        delegate() {
                            return this.selNavItem
                        },
                        handler(t) {
                            const { current: e, keyCode: i } = t
                                , n = St(e, this.attrItem);
                            if (!qt(n))
                                return;
                            let s = i === U.HOME ? 0 : i === U.END ? "last" : i === U.LEFT ? "previous" : i === U.RIGHT ? "next" : -1;
                            ~s && (t.preventDefault(),
                                this.show(s))
                        }
                    }],
                    methods: {
                        updateNav() {
                            const t = this.getValidIndex();
                            for (const e of this.navItems) {
                                const i = St(e, this.attrItem)
                                    , n = N("a,button", e) || e;
                                if (qt(i)) {
                                    const r = Xt(i) === t;
                                    ft(e, this.clsActive, r),
                                        C(n, {
                                            "aria-selected": r,
                                            tabindex: r ? null : -1
                                        }),
                                        r && n && q(K(e), ":focus-within") && n.focus()
                                } else
                                    ft(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex))
                            }
                        }
                    }
                }
                    , Pr = {
                        mixins: [Sl, Tl, ec, Li],
                        props: {
                            clsActivated: Boolean,
                            easing: String,
                            index: Number,
                            finite: Boolean,
                            velocity: Number
                        },
                        data: () => ({
                            easing: "ease",
                            finite: !1,
                            velocity: 1,
                            index: 0,
                            prevIndex: -1,
                            stack: [],
                            percent: 0,
                            clsActive: "uk-active",
                            clsActivated: !1,
                            Transitioner: !1,
                            transitionOptions: {}
                        }),
                        connected() {
                            this.prevIndex = -1,
                                this.index = this.getValidIndex(this.$props.index),
                                this.stack = []
                        },
                        disconnected() {
                            it(this.slides, this.clsActive)
                        },
                        computed: {
                            duration({ velocity: t }, e) {
                                return Ir(e.offsetWidth / t)
                            },
                            list({ selList: t }, e) {
                                return N(t, e)
                            },
                            maxIndex() {
                                return this.length - 1
                            },
                            slides() {
                                return W(this.list)
                            },
                            length() {
                                return this.slides.length
                            }
                        },
                        watch: {
                            slides(t, e) {
                                e && this.$emit()
                            }
                        },
                        observe: zt(),
                        methods: {
                            show(t, e = !1) {
                                var i;
                                if (this.dragging || !this.length)
                                    return;
                                const { stack: n } = this
                                    , s = e ? 0 : n.length
                                    , r = () => {
                                        n.splice(s, 1),
                                            n.length && this.show(n.shift(), !0)
                                    }
                                    ;
                                if (n[e ? "unshift" : "push"](t),
                                    !e && n.length > 1) {
                                    n.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                                    return
                                }
                                const l = this.getIndex(this.index)
                                    , u = X(this.slides, this.clsActive) && this.slides[l]
                                    , d = this.getIndex(t, this.index)
                                    , g = this.slides[d];
                                if (u === g) {
                                    r();
                                    return
                                }
                                if (this.dir = ic(t, l),
                                    this.prevIndex = l,
                                    this.index = d,
                                    u && !_(u, "beforeitemhide", [this]) || !_(g, "beforeitemshow", [this, u])) {
                                    this.index = this.prevIndex,
                                        r();
                                    return
                                }
                                const w = this._show(u, g, e).then(() => {
                                    u && _(u, "itemhidden", [this]),
                                        _(g, "itemshown", [this]),
                                        n.shift(),
                                        this._transitioner = null,
                                        requestAnimationFrame(() => n.length && this.show(n.shift(), !0))
                                }
                                );
                                return u && _(u, "itemhide", [this]),
                                    _(g, "itemshow", [this]),
                                    w
                            },
                            getIndex(t = this.index, e = this.index) {
                                return $t(It(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex))
                            },
                            getValidIndex(t = this.index, e = this.prevIndex) {
                                return this.getIndex(t, e)
                            },
                            _show(t, e, i) {
                                if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                                    easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                                    ...this.transitionOptions
                                }),
                                    !i && !t)
                                    return this._translate(1),
                                        Promise.resolve();
                                const { length: n } = this.stack;
                                return this._transitioner[n > 1 ? "forward" : "show"](n > 1 ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent)
                            },
                            _translate(t, e = this.prevIndex, i = this.index) {
                                const n = this._getTransitioner(e === i ? !1 : e, i);
                                return n.translate(t),
                                    n
                            },
                            _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, n = this.transitionOptions) {
                                return new this.Transitioner(ze(t) ? this.slides[t] : t, ze(e) ? this.slides[e] : e, i * (wt ? -1 : 1), n)
                            }
                        }
                    };
                function ic(t, e) {
                    return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
                }
                function Ir(t) {
                    return .5 * t + 300
                }
                var _r = {
                    mixins: [Pr],
                    props: {
                        animation: String
                    },
                    data: {
                        animation: "slide",
                        clsActivated: "uk-transition-active",
                        Animations: Xn,
                        Transitioner: kl
                    },
                    computed: {
                        animation({ animation: t, Animations: e }) {
                            return {
                                ...e[t] || e.slide,
                                name: t
                            }
                        },
                        transitionOptions() {
                            return {
                                animation: this.animation
                            }
                        }
                    },
                    events: {
                        beforeitemshow({ target: t }) {
                            L(t, this.clsActive)
                        },
                        itemshown({ target: t }) {
                            L(t, this.clsActivated)
                        },
                        itemhidden({ target: t }) {
                            it(t, this.clsActive, this.clsActivated)
                        }
                    }
                }
                    , Rr = {
                        ...Xn,
                        fade: {
                            show() {
                                return [{
                                    opacity: 0
                                }, {
                                    opacity: 1
                                }]
                            },
                            percent(t) {
                                return 1 - v(t, "opacity")
                            },
                            translate(t) {
                                return [{
                                    opacity: 1 - t
                                }, {
                                    opacity: t
                                }]
                            }
                        },
                        scale: {
                            show() {
                                return [{
                                    opacity: 0,
                                    transform: Ne(1 - .2)
                                }, {
                                    opacity: 1,
                                    transform: Ne(1)
                                }]
                            },
                            percent(t) {
                                return 1 - v(t, "opacity")
                            },
                            translate(t) {
                                return [{
                                    opacity: 1 - t,
                                    transform: Ne(1 - .2 * t)
                                }, {
                                    opacity: t,
                                    transform: Ne(1 - .2 + .2 * t)
                                }]
                            }
                        }
                    }
                    , Nr = {
                        mixins: [Jn, _r],
                        functional: !0,
                        props: {
                            delayControls: Number,
                            preload: Number,
                            videoAutoplay: Boolean,
                            template: String
                        },
                        data: () => ({
                            preload: 1,
                            videoAutoplay: !1,
                            delayControls: 3e3,
                            items: [],
                            cls: "uk-open",
                            clsPage: "uk-lightbox-page",
                            selList: ".uk-lightbox-items",
                            attrItem: "uk-lightbox-item",
                            selClose: ".uk-close-large",
                            selCaption: ".uk-lightbox-caption",
                            pauseOnHover: !1,
                            velocity: 2,
                            Animations: Rr,
                            template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                        }),
                        created() {
                            const t = N(this.template)
                                , e = N(this.selList, t);
                            this.items.forEach(() => at(e, "<li>"));
                            const i = N("[uk-close]", t)
                                , n = this.t("close");
                            i && n && (i.dataset.i18n = JSON.stringify({
                                label: n
                            })),
                                this.$mount(at(this.container, t))
                        },
                        computed: {
                            caption({ selCaption: t }, e) {
                                return N(t, e)
                            }
                        },
                        events: [{
                            name: `${Ai} ${jt} keydown`,
                            handler: "showControls"
                        }, {
                            name: "click",
                            self: !0,
                            delegate() {
                                return `${this.selList} > *`
                            },
                            handler(t) {
                                t.defaultPrevented || this.hide()
                            }
                        }, {
                            name: "shown",
                            self: !0,
                            handler() {
                                this.showControls()
                            }
                        }, {
                            name: "hide",
                            self: !0,
                            handler() {
                                this.hideControls(),
                                    it(this.slides, this.clsActive),
                                    V.stop(this.slides)
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler() {
                                this.$destroy(!0)
                            }
                        }, {
                            name: "keyup",
                            el() {
                                return document
                            },
                            handler({ keyCode: t }) {
                                if (!this.isToggled(this.$el) || !this.draggable)
                                    return;
                                let e = -1;
                                t === U.LEFT ? e = "previous" : t === U.RIGHT ? e = "next" : t === U.HOME ? e = 0 : t === U.END && (e = "last"),
                                    ~e && this.show(e)
                            }
                        }, {
                            name: "beforeitemshow",
                            handler(t) {
                                this.isToggled() || (this.draggable = !1,
                                    t.preventDefault(),
                                    this.toggleElement(this.$el, !0, !1),
                                    this.animation = Rr.scale,
                                    it(t.target, this.clsActive),
                                    this.stack.splice(1, 0, this.index))
                            }
                        }, {
                            name: "itemshow",
                            handler() {
                                oe(this.caption, this.getItem().caption || "");
                                for (let t = -this.preload; t <= this.preload; t++)
                                    this.loadItem(this.index + t)
                            }
                        }, {
                            name: "itemshown",
                            handler() {
                                this.draggable = this.$props.draggable
                            }
                        }, {
                            name: "itemload",
                            async handler(t, e) {
                                const { source: i, type: n, alt: s = "", poster: r, attrs: l = {} } = e;
                                if (this.setItem(e, "<span uk-spinner></span>"),
                                    !i)
                                    return;
                                let u;
                                const d = {
                                    allowfullscreen: "",
                                    style: "max-width: 100%; box-sizing: border-box;",
                                    "uk-responsive": "",
                                    "uk-video": `${this.videoAutoplay}`
                                };
                                if (n === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                                    const g = li("img", {
                                        src: i,
                                        alt: s,
                                        ...l
                                    });
                                    M(g, "load", () => this.setItem(e, g)),
                                        M(g, "error", () => this.setError(e))
                                } else if (n === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                                    const g = li("video", {
                                        src: i,
                                        poster: r,
                                        controls: "",
                                        playsinline: "",
                                        "uk-video": `${this.videoAutoplay}`,
                                        ...l
                                    });
                                    M(g, "loadedmetadata", () => this.setItem(e, g)),
                                        M(g, "error", () => this.setError(e))
                                } else if (n === "iframe" || i.match(/\.(html|php)($|\?)/i))
                                    this.setItem(e, li("iframe", {
                                        src: i,
                                        allowfullscreen: "",
                                        class: "uk-lightbox-iframe",
                                        ...l
                                    }));
                                else if (u = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
                                    this.setItem(e, li("iframe", {
                                        src: `https://www.youtube${u[1] || ""}.com/embed/${u[2]}${u[3] ? `?${u[3]}` : ""}`,
                                        width: 1920,
                                        height: 1080,
                                        ...d,
                                        ...l
                                    }));
                                else if (u = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
                                    try {
                                        const { height: g, width: w } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                                            credentials: "omit"
                                        })).json();
                                        this.setItem(e, li("iframe", {
                                            src: `https://player.vimeo.com/video/${u[1]}${u[2] ? `?${u[2]}` : ""}`,
                                            width: w,
                                            height: g,
                                            ...d,
                                            ...l
                                        }))
                                    } catch {
                                        this.setError(e)
                                    }
                            }
                        }],
                        methods: {
                            loadItem(t = this.index) {
                                const e = this.getItem(t);
                                this.getSlide(e).childElementCount || _(this.$el, "itemload", [e])
                            },
                            getItem(t = this.index) {
                                return this.items[It(t, this.slides)]
                            },
                            setItem(t, e) {
                                _(this.$el, "itemloaded", [this, oe(this.getSlide(t), e)])
                            },
                            getSlide(t) {
                                return this.slides[this.items.indexOf(t)]
                            },
                            setError(t) {
                                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                            },
                            showControls() {
                                clearTimeout(this.controlsTimer),
                                    this.controlsTimer = setTimeout(this.hideControls, this.delayControls),
                                    L(this.$el, "uk-active", "uk-transition-active")
                            },
                            hideControls() {
                                it(this.$el, "uk-active", "uk-transition-active")
                            }
                        }
                    };
                function li(t, e) {
                    const i = ae(`<${t}>`);
                    return C(i, e),
                        i
                }
                var nc = {
                    install: sc,
                    props: {
                        toggle: String
                    },
                    data: {
                        toggle: "a"
                    },
                    computed: {
                        toggles({ toggle: t }, e) {
                            return st(t, e)
                        }
                    },
                    watch: {
                        toggles(t) {
                            this.hide();
                            for (const e of t)
                                vt(e, "a") && C(e, "role", "button")
                        }
                    },
                    disconnected() {
                        this.hide()
                    },
                    events: {
                        name: "click",
                        delegate() {
                            return `${this.toggle}:not(.uk-disabled)`
                        },
                        handler(t) {
                            t.preventDefault(),
                                this.show(t.current)
                        }
                    },
                    methods: {
                        show(t) {
                            const e = $s(this.toggles.map(Dr), "source");
                            if (Tt(t)) {
                                const { source: i } = Dr(t);
                                t = J(e, ({ source: n }) => i === n)
                            }
                            return this.panel = this.panel || this.$create("lightboxPanel", {
                                ...this.$props,
                                items: e
                            }),
                                M(this.panel.$el, "hidden", () => this.panel = null),
                                this.panel.show(t)
                        },
                        hide() {
                            var t;
                            return (t = this.panel) == null ? void 0 : t.hide()
                        }
                    }
                };
                function sc(t, e) {
                    t.lightboxPanel || t.component("lightboxPanel", Nr),
                        O(e.props, t.component("lightboxPanel").options.props)
                }
                function Dr(t) {
                    const e = {};
                    for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
                        e[i === "href" ? "source" : i] = St(t, i);
                    return e.attrs = ti(e.attrs),
                        e
                }
                var rc = {
                    mixins: [si],
                    functional: !0,
                    args: ["message", "status"],
                    data: {
                        message: "",
                        status: "",
                        timeout: 5e3,
                        group: null,
                        pos: "top-center",
                        clsContainer: "uk-notification",
                        clsClose: "uk-notification-close",
                        clsMsg: "uk-notification-message"
                    },
                    install: oc,
                    computed: {
                        marginProp({ pos: t }) {
                            return `margin${x(t, "top") ? "Top" : "Bottom"}`
                        },
                        startProps() {
                            return {
                                opacity: 0,
                                [this.marginProp]: -this.$el.offsetHeight
                            }
                        }
                    },
                    created() {
                        const t = `${this.clsContainer}-${this.pos}`;
                        let e = N(`.${t}`, this.container);
                        (!e || !ct(e)) && (e = at(this.container, `<div class="${this.clsContainer} ${t}"></div>`)),
                            this.$mount(at(e, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`))
                    },
                    async connected() {
                        const t = F(v(this.$el, this.marginProp));
                        await V.start(v(this.$el, this.startProps), {
                            opacity: 1,
                            [this.marginProp]: t
                        }),
                            this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                    },
                    events: {
                        click(t) {
                            pt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
                                this.close()
                        },
                        [fe]() {
                            this.timer && clearTimeout(this.timer)
                        },
                        [Ze]() {
                            this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                        }
                    },
                    methods: {
                        async close(t) {
                            const e = i => {
                                const n = K(i);
                                _(i, "close", [this]),
                                    Rt(i),
                                    n != null && n.hasChildNodes() || Rt(n)
                            }
                                ;
                            this.timer && clearTimeout(this.timer),
                                t || await V.start(this.$el, this.startProps),
                                e(this.$el)
                        }
                    }
                };
                function oc(t) {
                    t.notification.closeAll = function (e, i) {
                        Gt(document.body, n => {
                            const s = t.getComponent(n, "notification");
                            s && (!e || e === s.group) && s.close(i)
                        }
                        )
                    }
                }
                var ji = {
                    props: {
                        media: Boolean
                    },
                    data: {
                        media: !1
                    },
                    connected() {
                        const t = ac(this.media, this.$el);
                        if (this.matchMedia = !0,
                            t) {
                            this.mediaObj = window.matchMedia(t);
                            const e = () => {
                                this.matchMedia = this.mediaObj.matches,
                                    _(this.$el, re("mediachange", !1, !0, [this.mediaObj]))
                            }
                                ;
                            this.offMediaObj = M(this.mediaObj, "change", () => {
                                e(),
                                    this.$emit("resize")
                            }
                            ),
                                e()
                        }
                    },
                    disconnected() {
                        var t;
                        (t = this.offMediaObj) == null || t.call(this)
                    }
                };
                function ac(t, e) {
                    if (tt(t)) {
                        if (x(t, "@"))
                            t = F(v(e, `--uk-breakpoint-${t.substr(1)}`));
                        else if (isNaN(t))
                            return t
                    }
                    return t && qt(t) ? `(min-width: ${t}px)` : ""
                }
                function Br(t) {
                    return Math.ceil(Math.max(0, ...st("[stroke]", t).map(e => {
                        try {
                            return e.getTotalLength()
                        } catch {
                            return 0
                        }
                    }
                    )))
                }
                const Ui = {
                    x: qi,
                    y: qi,
                    rotate: qi,
                    scale: qi,
                    color: es,
                    backgroundColor: es,
                    borderColor: es,
                    blur: ve,
                    hue: ve,
                    fopacity: ve,
                    grayscale: ve,
                    invert: ve,
                    saturate: ve,
                    sepia: ve,
                    opacity: cc,
                    stroke: hc,
                    bgx: Lr,
                    bgy: Lr
                }
                    , { keys: Fr } = Object;
                var Mr = {
                    mixins: [ji],
                    props: Ur(Fr(Ui), "list"),
                    data: Ur(Fr(Ui), void 0),
                    computed: {
                        props(t, e) {
                            const i = {};
                            for (const s in t)
                                s in Ui && !gt(t[s]) && (i[s] = t[s].slice());
                            const n = {};
                            for (const s in i)
                                n[s] = Ui[s](s, e, i[s], i);
                            return n
                        }
                    },
                    events: {
                        load() {
                            this.$emit()
                        }
                    },
                    methods: {
                        reset() {
                            for (const t in this.getCss(0))
                                v(this.$el, t, "")
                        },
                        getCss(t) {
                            const e = {
                                transform: "",
                                filter: ""
                            };
                            for (const i in this.props)
                                this.props[i](e, $t(t));
                            return e.willChange = Object.keys(e).filter(i => e[i] !== "").map(ki).join(","),
                                e
                        }
                    }
                };
                function qi(t, e, i) {
                    let n = Vi(i) || {
                        x: "px",
                        y: "px",
                        rotate: "deg"
                    }[t] || "", s;
                    return t === "x" || t === "y" ? (t = `translate${$(t)}`,
                        s = r => F(F(r).toFixed(n === "px" ? 0 : 6))) : t === "scale" && (n = "",
                            s = r => Vi([r]) ? Nt(r, "width", e, !0) / e.offsetWidth : F(r)),
                        i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
                        i = Fe(i, s),
                        (r, l) => {
                            r.transform += ` ${t}(${ci(i, l)}${n})`
                        }
                }
                function es(t, e, i) {
                    return i.length === 1 && i.unshift(hi(e, t, "")),
                        i = Fe(i, n => lc(e, n)),
                        (n, s) => {
                            const [r, l, u] = jr(i, s)
                                , d = r.map((g, w) => (g += u * (l[w] - g),
                                    w === 3 ? F(g) : parseInt(g, 10))).join(",");
                            n[t] = `rgba(${d})`
                        }
                }
                function lc(t, e) {
                    return hi(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(F)
                }
                function ve(t, e, i) {
                    i.length === 1 && i.unshift(0);
                    const n = Vi(i) || {
                        blur: "px",
                        hue: "deg"
                    }[t] || "%";
                    return t = {
                        fopacity: "opacity",
                        hue: "hue-rotate"
                    }[t] || t,
                        i = Fe(i),
                        (s, r) => {
                            const l = ci(i, r);
                            s.filter += ` ${t}(${l + n})`
                        }
                }
                function cc(t, e, i) {
                    return i.length === 1 && i.unshift(hi(e, t, "")),
                        i = Fe(i),
                        (n, s) => {
                            n[t] = ci(i, s)
                        }
                }
                function hc(t, e, i) {
                    i.length === 1 && i.unshift(0);
                    const n = Vi(i)
                        , s = Br(e);
                    return i = Fe(i.reverse(), r => (r = F(r),
                        n === "%" ? r * s / 100 : r)),
                        i.some(([r]) => r) ? (v(e, "strokeDasharray", s),
                            (r, l) => {
                                r.strokeDashoffset = ci(i, l)
                            }
                        ) : j
                }
                function Lr(t, e, i, n) {
                    i.length === 1 && i.unshift(0);
                    const s = t === "bgy" ? "height" : "width";
                    n[t] = Fe(i, u => Nt(u, s, e));
                    const r = ["bgx", "bgy"].filter(u => u in n);
                    if (r.length === 2 && t === "bgx")
                        return j;
                    if (hi(e, "backgroundSize", "") === "cover")
                        return uc(t, e, i, n);
                    const l = {};
                    for (const u of r)
                        l[u] = zr(e, u);
                    return Hr(r, l, n)
                }
                function uc(t, e, i, n) {
                    const s = fc(e);
                    if (!s.width)
                        return j;
                    const r = {
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }
                        , l = ["bgx", "bgy"].filter(w => w in n)
                        , u = {};
                    for (const w of l) {
                        const k = n[w].map(([rt]) => rt)
                            , E = Math.min(...k)
                            , I = Math.max(...k)
                            , Y = k.indexOf(E) < k.indexOf(I)
                            , nt = I - E;
                        u[w] = `${(Y ? -nt : 0) - (Y ? E : I)}px`,
                            r[w === "bgy" ? "height" : "width"] += nt
                    }
                    const d = xi.cover(s, r);
                    for (const w of l) {
                        const k = w === "bgy" ? "height" : "width"
                            , E = d[k] - r[k];
                        u[w] = `max(${zr(e, w)},-${E}px) + ${u[w]}`
                    }
                    const g = Hr(l, u, n);
                    return (w, k) => {
                        g(w, k),
                            w.backgroundSize = `${d.width}px ${d.height}px`,
                            w.backgroundRepeat = "no-repeat"
                    }
                }
                function zr(t, e) {
                    return hi(t, `background-position-${e.substr(-1)}`, "")
                }
                function Hr(t, e, i) {
                    return function (n, s) {
                        for (const r of t) {
                            const l = ci(i[r], s);
                            n[`background-position-${r.substr(-1)}`] = `calc(${e[r]} + ${l}px)`
                        }
                    }
                }
                const Wi = {};
                function fc(t) {
                    const e = v(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                    if (Wi[e])
                        return Wi[e];
                    const i = new Image;
                    return e && (i.src = e,
                        !i.naturalWidth) ? (i.onload = () => {
                            Wi[e] = is(i),
                                _(t, re("load", !1))
                        }
                            ,
                            is(i)) : Wi[e] = is(i)
                }
                function is(t) {
                    return {
                        width: t.naturalWidth,
                        height: t.naturalHeight
                    }
                }
                function Fe(t, e = F) {
                    const i = []
                        , { length: n } = t;
                    let s = 0;
                    for (let r = 0; r < n; r++) {
                        let [l, u] = tt(t[r]) ? t[r].trim().split(/ (?![^(]*\))/) : [t[r]];
                        if (l = e(l),
                            u = u ? F(u) / 100 : null,
                            r === 0 ? u === null ? u = 0 : u && i.push([l, 0]) : r === n - 1 && (u === null ? u = 1 : u !== 1 && (i.push([l, u]),
                                u = 1)),
                            i.push([l, u]),
                            u === null)
                            s++;
                        else if (s) {
                            const d = i[r - s - 1][1]
                                , g = (u - d) / (s + 1);
                            for (let w = s; w > 0; w--)
                                i[r - w][1] = d + g * (s - w + 1);
                            s = 0
                        }
                    }
                    return i
                }
                function jr(t, e) {
                    const i = J(t.slice(1), ([, n]) => e <= n) + 1;
                    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
                }
                function ci(t, e) {
                    const [i, n, s] = jr(t, e);
                    return i + Math.abs(i - n) * s * (i < n ? 1 : -1)
                }
                const dc = /^-?\d+(?:\.\d+)?(\S+)?/;
                function Vi(t, e) {
                    var i;
                    for (const n of t) {
                        const s = (i = n.match) == null ? void 0 : i.call(n, dc);
                        if (s)
                            return s[1]
                    }
                    return e
                }
                function hi(t, e, i) {
                    const n = t.style[e]
                        , s = v(v(t, e, i), e);
                    return t.style[e] = n,
                        s
                }
                function Ur(t, e) {
                    return t.reduce((i, n) => (i[n] = e,
                        i), {})
                }
                var pc = {
                    mixins: [Mr],
                    props: {
                        target: String,
                        viewport: Number,
                        easing: Number,
                        start: String,
                        end: String
                    },
                    data: {
                        target: !1,
                        viewport: 1,
                        easing: 1,
                        start: 0,
                        end: 0
                    },
                    computed: {
                        target({ target: t }, e) {
                            return qr(t && _t(t, e) || e)
                        },
                        start({ start: t }) {
                            return Nt(t, "height", this.target, !0)
                        },
                        end({ end: t, viewport: e }) {
                            return Nt(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0)
                        }
                    },
                    observe: [nr(), Di({
                        target: ({ target: t }) => t
                    }), zt({
                        target: ({ $el: t, target: e }) => [t, e, Yt(e, !0)]
                    })],
                    update: {
                        read({ percent: t }, e) {
                            if (e.has("scroll") || (t = !1),
                                !ct(this.$el))
                                return !1;
                            if (!this.matchMedia)
                                return;
                            const i = t;
                            return t = mc(Ln(this.target, this.start, this.end), this.easing),
                            {
                                percent: t,
                                style: i === t ? !1 : this.getCss(t)
                            }
                        },
                        write({ style: t }) {
                            if (!this.matchMedia) {
                                this.reset();
                                return
                            }
                            t && v(this.$el, t)
                        },
                        events: ["scroll", "resize"]
                    }
                };
                function mc(t, e) {
                    return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
                }
                function qr(t) {
                    return t ? "offsetTop" in t ? t : qr(K(t)) : document.documentElement
                }
                var Wr = {
                    update: {
                        write() {
                            if (this.stack.length || this.dragging)
                                return;
                            const t = this.getValidIndex(this.index);
                            !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index)
                        },
                        events: ["resize"]
                    }
                }
                    , Vr = {
                        observe: ii({
                            target: ({ slides: t }) => t,
                            targets: t => t.getAdjacentSlides()
                        })
                    };
                function gc(t, e, i, { center: n, easing: s, list: r }) {
                    const l = t ? ui(t, r, n) : ui(e, r, n) + B(e).width * i
                        , u = e ? ui(e, r, n) : l + B(t).width * i * (wt ? -1 : 1);
                    let d;
                    return {
                        dir: i,
                        show(g, w = 0, k) {
                            const E = k ? "linear" : s;
                            return g -= Math.round(g * $t(w, -1, 1)),
                                this.translate(w),
                                w = t ? w : $t(w, 0, 1),
                                ns(this.getItemIn(), "itemin", {
                                    percent: w,
                                    duration: g,
                                    timing: E,
                                    dir: i
                                }),
                                t && ns(this.getItemIn(!0), "itemout", {
                                    percent: 1 - w,
                                    duration: g,
                                    timing: E,
                                    dir: i
                                }),
                                new Promise(I => {
                                    d || (d = I),
                                        V.start(r, {
                                            transform: lt(-u * (wt ? -1 : 1), "px")
                                        }, g, E).then(d, j)
                                }
                                )
                        },
                        cancel() {
                            return V.cancel(r)
                        },
                        reset() {
                            v(r, "transform", "")
                        },
                        async forward(g, w = this.percent()) {
                            return await this.cancel(),
                                this.show(g, w, !0)
                        },
                        translate(g) {
                            const w = this.getDistance() * i * (wt ? -1 : 1);
                            v(r, "transform", lt($t(-u + (w - w * g), -Ji(r), B(r).width) * (wt ? -1 : 1), "px"));
                            const k = this.getActives()
                                , E = this.getItemIn()
                                , I = this.getItemIn(!0);
                            g = t ? $t(g, -1, 1) : 0;
                            for (const Y of W(r)) {
                                const nt = S(k, Y)
                                    , rt = Y === E
                                    , ie = Y === I
                                    , ls = rt || !ie && (nt || i * (wt ? -1 : 1) === -1 ^ Xi(Y, r) > Xi(t || e));
                                ns(Y, `itemtranslate${ls ? "in" : "out"}`, {
                                    dir: i,
                                    percent: ie ? 1 - g : rt ? g : nt ? 1 : 0
                                })
                            }
                        },
                        percent() {
                            return Math.abs((v(r, "transform").split(",")[4] * (wt ? -1 : 1) + l) / (u - l))
                        },
                        getDistance() {
                            return Math.abs(u - l)
                        },
                        getItemIn(g = !1) {
                            let w = this.getActives()
                                , k = Xr(r, ui(e || t, r, n));
                            if (g) {
                                const E = w;
                                w = k,
                                    k = E
                            }
                            return k[J(k, E => !S(w, E))]
                        },
                        getActives() {
                            return Xr(r, ui(t || e, r, n))
                        }
                    }
                }
                function ui(t, e, i) {
                    const n = Xi(t, e);
                    return i ? n - vc(t, e) : Math.min(n, Jr(e))
                }
                function Jr(t) {
                    return Math.max(0, Ji(t) - B(t).width)
                }
                function Ji(t) {
                    return ne(W(t), e => B(e).width)
                }
                function vc(t, e) {
                    return B(e).width / 2 - B(t).width / 2
                }
                function Xi(t, e) {
                    return t && (In(t).left + (wt ? B(t).width - B(e).width : 0)) * (wt ? -1 : 1) || 0
                }
                function Xr(t, e) {
                    e -= 1;
                    const i = B(t).width
                        , n = e + i + 2;
                    return W(t).filter(s => {
                        const r = Xi(s, t)
                            , l = r + Math.min(B(s).width, i);
                        return r >= e && l <= n
                    }
                    )
                }
                function ns(t, e, i) {
                    _(t, re(e, !1, !1, i))
                }
                var wc = {
                    mixins: [Ct, Pr, Wr, Vr],
                    props: {
                        center: Boolean,
                        sets: Boolean
                    },
                    data: {
                        center: !1,
                        sets: !1,
                        attrItem: "uk-slider-item",
                        selList: ".uk-slider-items",
                        selNav: ".uk-slider-nav",
                        clsContainer: "uk-slider-container",
                        Transitioner: gc
                    },
                    computed: {
                        avgWidth() {
                            return Ji(this.list) / this.length
                        },
                        finite({ finite: t }) {
                            return t || bc(this.list, this.center)
                        },
                        maxIndex() {
                            if (!this.finite || this.center && !this.sets)
                                return this.length - 1;
                            if (this.center)
                                return Ee(this.sets);
                            let t = 0;
                            const e = Jr(this.list)
                                , i = J(this.slides, n => {
                                    if (t >= e)
                                        return !0;
                                    t += B(n).width
                                }
                                );
                            return ~i ? i : this.length - 1
                        },
                        sets({ sets: t }) {
                            if (!t)
                                return;
                            let e = 0;
                            const i = []
                                , n = B(this.list).width;
                            for (let s = 0; s < this.length; s++) {
                                const r = B(this.slides[s]).width;
                                e + r > n && (e = 0),
                                    this.center ? e < n / 2 && e + r + B(It(+s + 1, this.slides)).width / 2 > n / 2 && (i.push(+s),
                                        e = n / 2 - r / 2) : e === 0 && i.push(Math.min(+s, this.maxIndex)),
                                    e += r
                            }
                            if (i.length)
                                return i
                        },
                        transitionOptions() {
                            return {
                                center: this.center,
                                list: this.list
                            }
                        },
                        slides() {
                            return W(this.list).filter(ct)
                        }
                    },
                    connected() {
                        ft(this.$el, this.clsContainer, !N(`.${this.clsContainer}`, this.$el))
                    },
                    observe: zt({
                        target: ({ slides: t }) => t
                    }),
                    update: {
                        write() {
                            for (const t of this.navItems) {
                                const e = Xt(St(t, this.attrItem));
                                e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !S(this.sets, e))
                            }
                            this.length && !this.dragging && !this.stack.length && (this.reorder(),
                                this._translate(1)),
                                this.updateActiveClasses()
                        },
                        events: ["resize"]
                    },
                    events: {
                        beforeitemshow(t) {
                            !this.dragging && this.sets && this.stack.length < 2 && !S(this.sets, this.index) && (this.index = this.getValidIndex());
                            const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                            if (!this.dragging && e > 1) {
                                for (let n = 0; n < e; n++)
                                    this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                                t.preventDefault();
                                return
                            }
                            const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                            this.duration = Ir(this.avgWidth / this.velocity) * (B(this.slides[i]).width / this.avgWidth),
                                this.reorder()
                        },
                        itemshow() {
                            ~this.prevIndex && L(this._getTransitioner().getItemIn(), this.clsActive)
                        },
                        itemshown() {
                            this.updateActiveClasses()
                        }
                    },
                    methods: {
                        reorder() {
                            if (this.finite) {
                                v(this.slides, "order", "");
                                return
                            }
                            const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                            if (this.slides.forEach((s, r) => v(s, "order", this.dir > 0 && r < t ? 1 : this.dir < 0 && r >= this.index ? -1 : "")),
                                !this.center)
                                return;
                            const e = this.slides[t];
                            let i = B(this.list).width / 2 - B(e).width / 2
                                , n = 0;
                            for (; i > 0;) {
                                const s = this.getIndex(--n + t, t)
                                    , r = this.slides[s];
                                v(r, "order", s > t ? -2 : -1),
                                    i -= B(r).width
                            }
                        },
                        updateActiveClasses() {
                            const t = this._getTransitioner(this.index).getActives()
                                , e = [this.clsActive, (!this.sets || S(this.sets, F(this.index))) && this.clsActivated || ""];
                            for (const i of this.slides) {
                                const n = S(t, i);
                                ft(i, e, n),
                                    C(i, "aria-hidden", !n);
                                for (const s of st(qe, i))
                                    f(s, "_tabindex") || (s._tabindex = C(s, "tabindex")),
                                        C(s, "tabindex", n ? s._tabindex : -1)
                            }
                        },
                        getValidIndex(t = this.index, e = this.prevIndex) {
                            if (t = this.getIndex(t, e),
                                !this.sets)
                                return t;
                            let i;
                            do {
                                if (S(this.sets, t))
                                    return t;
                                i = t,
                                    t = this.getIndex(t + this.dir, e)
                            } while (t !== i);
                            return t
                        },
                        getAdjacentSlides() {
                            const { width: t } = B(this.list)
                                , e = -t
                                , i = t * 2
                                , n = B(this.slides[this.index]).width
                                , s = this.center ? t / 2 - n / 2 : 0
                                , r = new Set;
                            for (const l of [-1, 1]) {
                                let u = s + (l > 0 ? n : 0)
                                    , d = 0;
                                do {
                                    const g = this.slides[this.getIndex(this.index + l + d++ * l)];
                                    u += B(g).width * l,
                                        r.add(g)
                                } while (this.length > d && u > e && u < i)
                            }
                            return Array.from(r)
                        }
                    }
                };
                function bc(t, e) {
                    if (!t || t.length < 2)
                        return !0;
                    const { width: i } = B(t);
                    if (!e)
                        return Math.ceil(Ji(t)) < Math.trunc(i + yc(t));
                    const n = W(t)
                        , s = Math.trunc(i / 2);
                    for (const r in n) {
                        const l = n[r]
                            , u = B(l).width
                            , d = new Set([l]);
                        let g = 0;
                        for (const w of [-1, 1]) {
                            let k = u / 2
                                , E = 0;
                            for (; k < s;) {
                                const I = n[It(+r + w + E++ * w, n)];
                                if (d.has(I))
                                    return !0;
                                k += B(I).width,
                                    d.add(I)
                            }
                            g = Math.max(g, u / 2 + B(n[It(+r + w, n)]).width / 2 - (k - s))
                        }
                        if (g > ne(n.filter(w => !d.has(w)), w => B(w).width))
                            return !0
                    }
                    return !1
                }
                function yc(t) {
                    return Math.max(0, ...W(t).map(e => B(e).width))
                }
                var Kr = {
                    mixins: [Mr],
                    data: {
                        selItem: "!li"
                    },
                    beforeConnect() {
                        this.item = _t(this.selItem, this.$el)
                    },
                    disconnected() {
                        this.item = null
                    },
                    events: [{
                        name: "itemin itemout",
                        self: !0,
                        el() {
                            return this.item
                        },
                        handler({ type: t, detail: { percent: e, duration: i, timing: n, dir: s } }) {
                            bt.read(() => {
                                if (!this.matchMedia)
                                    return;
                                const r = this.getCss(Yr(t, s, e))
                                    , l = this.getCss(Gr(t) ? .5 : s > 0 ? 1 : 0);
                                bt.write(() => {
                                    v(this.$el, r),
                                        V.start(this.$el, l, i, n).catch(j)
                                }
                                )
                            }
                            )
                        }
                    }, {
                        name: "transitioncanceled transitionend",
                        self: !0,
                        el() {
                            return this.item
                        },
                        handler() {
                            V.cancel(this.$el)
                        }
                    }, {
                        name: "itemtranslatein itemtranslateout",
                        self: !0,
                        el() {
                            return this.item
                        },
                        handler({ type: t, detail: { percent: e, dir: i } }) {
                            bt.read(() => {
                                if (!this.matchMedia) {
                                    this.reset();
                                    return
                                }
                                const n = this.getCss(Yr(t, i, e));
                                bt.write(() => v(this.$el, n))
                            }
                            )
                        }
                    }]
                };
                function Gr(t) {
                    return P(t, "in")
                }
                function Yr(t, e, i) {
                    return i /= 2,
                        Gr(t) ^ e < 0 ? i : 1 - i
                }
                var xc = {
                    ...Xn,
                    fade: {
                        show() {
                            return [{
                                opacity: 0,
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }]
                        },
                        percent(t) {
                            return 1 - v(t, "opacity")
                        },
                        translate(t) {
                            return [{
                                opacity: 1 - t,
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }]
                        }
                    },
                    scale: {
                        show() {
                            return [{
                                opacity: 0,
                                transform: Ne(1 + .5),
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }]
                        },
                        percent(t) {
                            return 1 - v(t, "opacity")
                        },
                        translate(t) {
                            return [{
                                opacity: 1 - t,
                                transform: Ne(1 + .5 * t),
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }]
                        }
                    },
                    pull: {
                        show(t) {
                            return t < 0 ? [{
                                transform: lt(30),
                                zIndex: -1
                            }, {
                                transform: lt(),
                                zIndex: 0
                            }] : [{
                                transform: lt(-100),
                                zIndex: 0
                            }, {
                                transform: lt(),
                                zIndex: -1
                            }]
                        },
                        percent(t, e, i) {
                            return i < 0 ? 1 - ri(e) : ri(t)
                        },
                        translate(t, e) {
                            return e < 0 ? [{
                                transform: lt(30 * t),
                                zIndex: -1
                            }, {
                                transform: lt(-100 * (1 - t)),
                                zIndex: 0
                            }] : [{
                                transform: lt(-t * 100),
                                zIndex: 0
                            }, {
                                transform: lt(30 * (1 - t)),
                                zIndex: -1
                            }]
                        }
                    },
                    push: {
                        show(t) {
                            return t < 0 ? [{
                                transform: lt(100),
                                zIndex: 0
                            }, {
                                transform: lt(),
                                zIndex: -1
                            }] : [{
                                transform: lt(-30),
                                zIndex: -1
                            }, {
                                transform: lt(),
                                zIndex: 0
                            }]
                        },
                        percent(t, e, i) {
                            return i > 0 ? 1 - ri(e) : ri(t)
                        },
                        translate(t, e) {
                            return e < 0 ? [{
                                transform: lt(t * 100),
                                zIndex: 0
                            }, {
                                transform: lt(-30 * (1 - t)),
                                zIndex: -1
                            }] : [{
                                transform: lt(-30 * t),
                                zIndex: -1
                            }, {
                                transform: lt(100 * (1 - t)),
                                zIndex: 0
                            }]
                        }
                    }
                }
                    , $c = {
                        mixins: [Ct, _r, Wr, Vr],
                        props: {
                            ratio: String,
                            minHeight: Number,
                            maxHeight: Number
                        },
                        data: {
                            ratio: "16:9",
                            minHeight: !1,
                            maxHeight: !1,
                            selList: ".uk-slideshow-items",
                            attrItem: "uk-slideshow-item",
                            selNav: ".uk-slideshow-nav",
                            Animations: xc
                        },
                        update: {
                            read() {
                                if (!this.list)
                                    return !1;
                                let [t, e] = this.ratio.split(":").map(Number);
                                return e = e * this.list.offsetWidth / t || 0,
                                    this.minHeight && (e = Math.max(this.minHeight, e)),
                                    this.maxHeight && (e = Math.min(this.maxHeight, e)),
                                {
                                    height: e - Pe(this.list, "height", "content-box")
                                }
                            },
                            write({ height: t }) {
                                t > 0 && v(this.list, "minHeight", t)
                            },
                            events: ["resize"]
                        },
                        methods: {
                            getAdjacentSlides() {
                                return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                            }
                        }
                    }
                    , kc = {
                        mixins: [Ct, dr],
                        props: {
                            group: String,
                            threshold: Number,
                            clsItem: String,
                            clsPlaceholder: String,
                            clsDrag: String,
                            clsDragState: String,
                            clsBase: String,
                            clsNoDrag: String,
                            clsEmpty: String,
                            clsCustom: String,
                            handle: String
                        },
                        data: {
                            group: !1,
                            threshold: 5,
                            clsItem: "uk-sortable-item",
                            clsPlaceholder: "uk-sortable-placeholder",
                            clsDrag: "uk-sortable-drag",
                            clsDragState: "uk-drag",
                            clsBase: "uk-sortable",
                            clsNoDrag: "uk-sortable-nodrag",
                            clsEmpty: "uk-sortable-empty",
                            clsCustom: "",
                            handle: !1,
                            pos: {}
                        },
                        created() {
                            for (const t of ["init", "start", "move", "end"]) {
                                const e = this[t];
                                this[t] = i => {
                                    O(this.pos, Ae(i)),
                                        e(i)
                                }
                            }
                        },
                        events: {
                            name: jt,
                            passive: !1,
                            handler: "init"
                        },
                        computed: {
                            target() {
                                return (this.$el.tBodies || [this.$el])[0]
                            },
                            items() {
                                return W(this.target)
                            },
                            isEmpty() {
                                return He(this.items)
                            },
                            handles({ handle: t }, e) {
                                return t ? st(t, e) : this.items
                            }
                        },
                        watch: {
                            isEmpty(t) {
                                ft(this.target, this.clsEmpty, t)
                            },
                            handles(t, e) {
                                v(e, {
                                    touchAction: "",
                                    userSelect: ""
                                }),
                                    v(t, {
                                        touchAction: ue ? "none" : "",
                                        userSelect: "none"
                                    })
                            }
                        },
                        update: {
                            write(t) {
                                if (!this.drag || !K(this.placeholder))
                                    return;
                                const { pos: { x: e, y: i }, origin: { offsetTop: n, offsetLeft: s }, placeholder: r } = this;
                                v(this.drag, {
                                    top: i - n,
                                    left: e - s
                                });
                                const l = this.getSortable(document.elementFromPoint(e, i));
                                if (!l)
                                    return;
                                const { items: u } = l;
                                if (u.some(V.inProgress))
                                    return;
                                const d = Cc(u, {
                                    x: e,
                                    y: i
                                });
                                if (u.length && (!d || d === r))
                                    return;
                                const g = this.getSortable(r)
                                    , w = Oc(l.target, d, r, e, i, l === g && t.moved !== d);
                                w !== !1 && (w && r === w || (l !== g ? (g.remove(r),
                                    t.moved = d) : delete t.moved,
                                    l.insert(r, w),
                                    this.touched.add(l)))
                            },
                            events: ["move"]
                        },
                        methods: {
                            init(t) {
                                const { target: e, button: i, defaultPrevented: n } = t
                                    , [s] = this.items.filter(r => et(e, r));
                                !s || n || i > 0 || kn(e) || et(e, `.${this.clsNoDrag}`) || this.handle && !et(e, this.handle) || (t.preventDefault(),
                                    this.touched = new Set([this]),
                                    this.placeholder = s,
                                    this.origin = {
                                        target: e,
                                        index: Ce(s),
                                        ...this.pos
                                    },
                                    M(document, Ai, this.move),
                                    M(document, te, this.end),
                                    this.threshold || this.start(t))
                            },
                            start(t) {
                                this.drag = Tc(this.$container, this.placeholder);
                                const { left: e, top: i } = this.placeholder.getBoundingClientRect();
                                O(this.origin, {
                                    offsetLeft: this.pos.x - e,
                                    offsetTop: this.pos.y - i
                                }),
                                    L(this.drag, this.clsDrag, this.clsCustom),
                                    L(this.placeholder, this.clsPlaceholder),
                                    L(this.items, this.clsItem),
                                    L(document.documentElement, this.clsDragState),
                                    _(this.$el, "start", [this, this.placeholder]),
                                    Sc(this.pos),
                                    this.move(t)
                            },
                            move(t) {
                                this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                            },
                            end() {
                                if (se(document, Ai, this.move),
                                    se(document, te, this.end),
                                    !this.drag)
                                    return;
                                Ec();
                                const t = this.getSortable(this.placeholder);
                                this === t ? this.origin.index !== Ce(this.placeholder) && _(this.$el, "moved", [this, this.placeholder]) : (_(t.$el, "added", [t, this.placeholder]),
                                    _(this.$el, "removed", [this, this.placeholder])),
                                    _(this.$el, "stop", [this, this.placeholder]),
                                    Rt(this.drag),
                                    this.drag = null;
                                for (const { clsPlaceholder: e, clsItem: i } of this.touched)
                                    for (const n of this.touched)
                                        it(n.items, e, i);
                                this.touched = null,
                                    it(document.documentElement, this.clsDragState)
                            },
                            insert(t, e) {
                                L(this.items, this.clsItem);
                                const i = () => e ? Si(e, t) : at(this.target, t);
                                this.animate(i)
                            },
                            remove(t) {
                                et(t, this.target) && this.animate(() => Rt(t))
                            },
                            getSortable(t) {
                                do {
                                    const e = this.$getComponent(t, "sortable");
                                    if (e && (e === this || this.group !== !1 && e.group === this.group))
                                        return e
                                } while (t = K(t))
                            }
                        }
                    };
                let Zr;
                function Sc(t) {
                    let e = Date.now();
                    Zr = setInterval(() => {
                        let { x: i, y: n } = t;
                        n += document.scrollingElement.scrollTop;
                        const s = (Date.now() - e) * .3;
                        e = Date.now(),
                            Re(document.elementFromPoint(i, t.y)).reverse().some(r => {
                                let { scrollTop: l, scrollHeight: u } = r;
                                const { top: d, bottom: g, height: w } = Dt(r);
                                if (d < n && d + 35 > n)
                                    l -= s;
                                else if (g > n && g - 35 < n)
                                    l += s;
                                else
                                    return;
                                if (l > 0 && l < u - w)
                                    return r.scrollTop = l,
                                        !0
                            }
                            )
                    }
                        , 15)
                }
                function Ec() {
                    clearInterval(Zr)
                }
                function Tc(t, e) {
                    let i;
                    if (vt(e, "li", "tr")) {
                        i = N("<div>"),
                            at(i, e.cloneNode(!0).children);
                        for (const n of e.getAttributeNames())
                            C(i, n, e.getAttribute(n))
                    } else
                        i = e.cloneNode(!0);
                    return at(t, i),
                        v(i, "margin", "0", "important"),
                        v(i, {
                            boxSizing: "border-box",
                            width: e.offsetWidth,
                            height: e.offsetHeight,
                            padding: v(e, "padding")
                        }),
                        Et(i.firstElementChild, Et(e.firstElementChild)),
                        i
                }
                function Cc(t, e) {
                    return t[J(t, i => yi(e, i.getBoundingClientRect()))]
                }
                function Oc(t, e, i, n, s, r) {
                    if (!W(t).length)
                        return;
                    const l = e.getBoundingClientRect();
                    if (!r)
                        return Ac(t, i) || s < l.top + l.height / 2 ? e : e.nextElementSibling;
                    const u = i.getBoundingClientRect()
                        , d = Qr([l.top, l.bottom], [u.top, u.bottom])
                        , [g, w, k, E] = d ? [n, "width", "left", "right"] : [s, "height", "top", "bottom"]
                        , I = u[w] < l[w] ? l[w] - u[w] : 0;
                    return u[k] < l[k] ? I && g < l[k] + I ? !1 : e.nextElementSibling : I && g > l[E] - I ? !1 : e
                }
                function Ac(t, e) {
                    const i = W(t).length === 1;
                    i && at(t, e);
                    const n = W(t)
                        , s = n.some((r, l) => {
                            const u = r.getBoundingClientRect();
                            return n.slice(l + 1).some(d => {
                                const g = d.getBoundingClientRect();
                                return !Qr([u.left, u.right], [g.left, g.right])
                            }
                            )
                        }
                        );
                    return i && Rt(e),
                        s
                }
                function Qr(t, e) {
                    return t[1] > e[0] && e[1] > t[0]
                }
                var to = {
                    props: {
                        pos: String,
                        offset: null,
                        flip: Boolean,
                        shift: Boolean,
                        inset: Boolean
                    },
                    data: {
                        pos: `bottom-${wt ? "right" : "left"}`,
                        offset: !1,
                        flip: !0,
                        shift: !0,
                        inset: !1
                    },
                    connected() {
                        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2),
                            [this.dir, this.align] = this.pos,
                            this.axis = S(["top", "bottom"], this.dir) ? "y" : "x"
                    },
                    methods: {
                        positionAt(t, e, i) {
                            let n = [this.getPositionOffset(t), this.getShiftOffset(t)];
                            const s = [this.flip && "flip", this.shift && "shift"]
                                , r = {
                                    element: [this.inset ? this.dir : Oi(this.dir), this.align],
                                    target: [this.dir, this.align]
                                };
                            if (this.axis === "y") {
                                for (const d in r)
                                    r[d].reverse();
                                n.reverse(),
                                    s.reverse()
                            }
                            const l = Pc(t)
                                , u = B(t);
                            v(t, {
                                top: -u.height,
                                left: -u.width
                            }),
                                Js(t, e, {
                                    attach: r,
                                    offset: n,
                                    boundary: i,
                                    placement: s,
                                    viewportOffset: this.getViewportOffset(t)
                                }),
                                l()
                        },
                        getPositionOffset(t) {
                            return Nt(this.offset === !1 ? v(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (S(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1)
                        },
                        getShiftOffset(t) {
                            return this.align === "center" ? 0 : Nt(v(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (S(["left", "top"], this.align) ? 1 : -1)
                        },
                        getViewportOffset(t) {
                            return Nt(v(t, "--uk-position-viewport-offset"))
                        }
                    }
                };
                function Pc(t) {
                    const e = Yt(t)
                        , { scrollTop: i } = e;
                    return () => {
                        i !== e.scrollTop && (e.scrollTop = i)
                    }
                }
                var Ic = {
                    mixins: [si, pe, to],
                    args: "title",
                    props: {
                        delay: Number,
                        title: String
                    },
                    data: {
                        pos: "top",
                        title: "",
                        delay: 0,
                        animation: ["uk-animation-scale-up"],
                        duration: 100,
                        cls: "uk-active"
                    },
                    beforeConnect() {
                        this.id = ee(this, {}),
                            this._hasTitle = Wt(this.$el, "title"),
                            C(this.$el, {
                                title: "",
                                "aria-describedby": this.id
                            }),
                            _c(this.$el)
                    },
                    disconnected() {
                        this.hide(),
                            C(this.$el, "title") || C(this.$el, "title", this._hasTitle ? this.title : null)
                    },
                    methods: {
                        show() {
                            this.isToggled(this.tooltip || null) || !this.title || (clearTimeout(this.showTimer),
                                this.showTimer = setTimeout(this._show, this.delay))
                        },
                        async hide() {
                            q(this.$el, "input:focus") || (clearTimeout(this.showTimer),
                                this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1),
                                Rt(this.tooltip),
                                this.tooltip = null)
                        },
                        async _show() {
                            this.tooltip = at(this.container, `<div id="${this.id}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${this.title}</div> </div>`),
                                M(this.tooltip, "toggled", (t, e) => {
                                    if (!e)
                                        return;
                                    const i = () => this.positionAt(this.tooltip, this.$el);
                                    i();
                                    const [n, s] = Rc(this.tooltip, this.$el, this.pos);
                                    this.origin = this.axis === "y" ? `${Oi(n)}-${s}` : `${s}-${Oi(n)}`;
                                    const r = [ht(document, `keydown ${jt}`, this.hide, !1, l => l.type === jt && !et(l.target, this.$el) || l.type === "keydown" && l.keyCode === U.ESC), M([document, ...de(this.$el)], "scroll", i, {
                                        passive: !0
                                    })];
                                    ht(this.tooltip, "hide", () => r.forEach(l => l()), {
                                        self: !0
                                    })
                                }
                                ),
                                await this.toggleElement(this.tooltip, !0) || this.hide()
                        }
                    },
                    events: {
                        focus: "show",
                        blur: "hide",
                        [`${fe} ${Ze}`](t) {
                            Kt(t) || this[t.type === fe ? "show" : "hide"]()
                        },
                        [jt](t) {
                            Kt(t) && this.show()
                        }
                    }
                };
                function _c(t) {
                    $i(t) || C(t, "tabindex", "0")
                }
                function Rc(t, e, [i, n]) {
                    const s = G(t)
                        , r = G(e)
                        , l = [["left", "right"], ["top", "bottom"]];
                    for (const d of l) {
                        if (s[d[0]] >= r[d[1]]) {
                            i = d[1];
                            break
                        }
                        if (s[d[1]] <= r[d[0]]) {
                            i = d[0];
                            break
                        }
                    }
                    const u = S(l[0], i) ? l[1] : l[0];
                    return s[u[0]] === r[u[0]] ? n = u[0] : s[u[1]] === r[u[1]] ? n = u[1] : n = "center",
                        [i, n]
                }
                var Nc = {
                    mixins: [Li],
                    i18n: {
                        invalidMime: "Invalid File Type: %s",
                        invalidName: "Invalid File Name: %s",
                        invalidSize: "Invalid File Size: %s Kilobytes Max"
                    },
                    props: {
                        allow: String,
                        clsDragover: String,
                        concurrent: Number,
                        maxSize: Number,
                        method: String,
                        mime: String,
                        multiple: Boolean,
                        name: String,
                        params: Object,
                        type: String,
                        url: String
                    },
                    data: {
                        allow: !1,
                        clsDragover: "uk-dragover",
                        concurrent: 1,
                        maxSize: 0,
                        method: "POST",
                        mime: !1,
                        multiple: !1,
                        name: "files[]",
                        params: {},
                        type: "",
                        url: "",
                        abort: j,
                        beforeAll: j,
                        beforeSend: j,
                        complete: j,
                        completeAll: j,
                        error: j,
                        fail: j,
                        load: j,
                        loadEnd: j,
                        loadStart: j,
                        progress: j
                    },
                    events: {
                        change(t) {
                            q(t.target, 'input[type="file"]') && (t.preventDefault(),
                                t.target.files && this.upload(t.target.files),
                                t.target.value = "")
                        },
                        drop(t) {
                            Ki(t);
                            const e = t.dataTransfer;
                            e != null && e.files && (it(this.$el, this.clsDragover),
                                this.upload(e.files))
                        },
                        dragenter(t) {
                            Ki(t)
                        },
                        dragover(t) {
                            Ki(t),
                                L(this.$el, this.clsDragover)
                        },
                        dragleave(t) {
                            Ki(t),
                                it(this.$el, this.clsDragover)
                        }
                    },
                    methods: {
                        async upload(t) {
                            if (t = R(t),
                                !t.length)
                                return;
                            _(this.$el, "upload", [t]);
                            for (const n of t) {
                                if (this.maxSize && this.maxSize * 1e3 < n.size) {
                                    this.fail(this.t("invalidSize", this.maxSize));
                                    return
                                }
                                if (this.allow && !eo(this.allow, n.name)) {
                                    this.fail(this.t("invalidName", this.allow));
                                    return
                                }
                                if (this.mime && !eo(this.mime, n.type)) {
                                    this.fail(this.t("invalidMime", this.mime));
                                    return
                                }
                            }
                            this.multiple || (t = t.slice(0, 1)),
                                this.beforeAll(this, t);
                            const e = Dc(t, this.concurrent)
                                , i = async n => {
                                    const s = new FormData;
                                    n.forEach(r => s.append(this.name, r));
                                    for (const r in this.params)
                                        s.append(r, this.params[r]);
                                    try {
                                        const r = await Bc(this.url, {
                                            data: s,
                                            method: this.method,
                                            responseType: this.type,
                                            beforeSend: l => {
                                                const { xhr: u } = l;
                                                M(u.upload, "progress", this.progress);
                                                for (const d of ["loadStart", "load", "loadEnd", "abort"])
                                                    M(u, d.toLowerCase(), this[d]);
                                                return this.beforeSend(l)
                                            }
                                        });
                                        this.complete(r),
                                            e.length ? await i(e.shift()) : this.completeAll(r)
                                    } catch (r) {
                                        this.error(r)
                                    }
                                }
                                ;
                            await i(e.shift())
                        }
                    }
                };
                function eo(t, e) {
                    return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"))
                }
                function Dc(t, e) {
                    const i = [];
                    for (let n = 0; n < t.length; n += e)
                        i.push(t.slice(n, n + e));
                    return i
                }
                function Ki(t) {
                    t.preventDefault(),
                        t.stopPropagation()
                }
                function Bc(t, e) {
                    const i = {
                        data: null,
                        method: "GET",
                        headers: {},
                        xhr: new XMLHttpRequest,
                        beforeSend: j,
                        responseType: "",
                        ...e
                    };
                    return Promise.resolve().then(() => i.beforeSend(i)).then(() => Fc(t, i))
                }
                function Fc(t, e) {
                    return new Promise((i, n) => {
                        const { xhr: s } = e;
                        for (const r in e)
                            if (r in s)
                                try {
                                    s[r] = e[r]
                                } catch { }
                        s.open(e.method.toUpperCase(), t);
                        for (const r in e.headers)
                            s.setRequestHeader(r, e.headers[r]);
                        M(s, "load", () => {
                            s.status === 0 || s.status >= 200 && s.status < 300 || s.status === 304 ? i(s) : n(O(Error(s.statusText), {
                                xhr: s,
                                status: s.status
                            }))
                        }
                        ),
                            M(s, "error", () => n(O(Error("Network Error"), {
                                xhr: s
                            }))),
                            M(s, "timeout", () => n(O(Error("Network Timeout"), {
                                xhr: s
                            }))),
                            s.send(e.data)
                    }
                    )
                }
                var Mc = Object.freeze({
                    __proto__: null,
                    Countdown: Ya,
                    Filter: cl,
                    Lightbox: nc,
                    LightboxPanel: Nr,
                    Notification: rc,
                    Parallax: pc,
                    Slider: wc,
                    SliderParallax: Kr,
                    Slideshow: $c,
                    SlideshowParallax: Kr,
                    Sortable: kc,
                    Tooltip: Ic,
                    Upload: Nc
                });
                function Lc(t) {
                    he && window.MutationObserver && (document.body ? requestAnimationFrame(() => io(t)) : new MutationObserver((e, i) => {
                        document.body && (io(t),
                            i.disconnect())
                    }
                    ).observe(document.documentElement, {
                        childList: !0
                    }))
                }
                function io(t) {
                    _(document, "uikit:init", t),
                        document.body && Gt(document.body, no),
                        new MutationObserver(e => e.forEach(zc)).observe(document, {
                            childList: !0,
                            subtree: !0
                        }),
                        new MutationObserver(e => e.forEach(Hc)).observe(document, {
                            attributes: !0,
                            subtree: !0
                        }),
                        t._initialized = !0
                }
                function zc({ addedNodes: t, removedNodes: e }) {
                    for (const i of t)
                        Gt(i, no);
                    for (const i of e)
                        Gt(i, jc)
                }
                function Hc({ target: t, attributeName: e }) {
                    var i;
                    const n = so(e);
                    if (n) {
                        if (Wt(t, e)) {
                            ai(n, t);
                            return
                        }
                        (i = Hi(t, n)) == null || i.$destroy()
                    }
                }
                function no(t) {
                    const e = ge(t);
                    for (const i in ge(t))
                        Qn(e[i]);
                    for (const i of t.getAttributeNames()) {
                        const n = so(i);
                        n && ai(n, t)
                    }
                }
                function jc(t) {
                    const e = ge(t);
                    for (const i in ge(t))
                        ts(e[i])
                }
                function so(t) {
                    x(t, "data-") && (t = t.slice(5));
                    const e = Be[t];
                    return e && (Q(e) ? e : e.options).name
                }
                Ql(Ft),
                    tc(Ft);
                var ro = {
                    mixins: [Ct, pe],
                    props: {
                        animation: Boolean,
                        targets: String,
                        active: null,
                        collapsible: Boolean,
                        multiple: Boolean,
                        toggle: String,
                        content: String,
                        offset: Number
                    },
                    data: {
                        targets: "> *",
                        active: !1,
                        animation: !0,
                        collapsible: !0,
                        multiple: !1,
                        clsOpen: "uk-open",
                        toggle: "> .uk-accordion-title",
                        content: "> .uk-accordion-content",
                        offset: 0
                    },
                    computed: {
                        items({ targets: t }, e) {
                            return st(t, e)
                        },
                        toggles({ toggle: t }) {
                            return this.items.map(e => N(t, e))
                        },
                        contents({ content: t }) {
                            return this.items.map(e => {
                                var i;
                                return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || N(t, e)
                            }
                            )
                        }
                    },
                    watch: {
                        items(t, e) {
                            if (e || X(t, this.clsOpen))
                                return;
                            const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                            i && this.toggle(i, !1)
                        },
                        toggles() {
                            this.$emit()
                        },
                        contents(t) {
                            for (const e of t) {
                                const i = X(this.items.find(n => et(e, n)), this.clsOpen);
                                Gi(e, !i)
                            }
                            this.$emit()
                        }
                    },
                    observe: ii(),
                    events: [{
                        name: "click keydown",
                        delegate() {
                            return `${this.targets} ${this.$props.toggle}`
                        },
                        async handler(t) {
                            var e;
                            t.type === "keydown" && t.keyCode !== U.SPACE || (t.preventDefault(),
                                (e = this._off) == null || e.call(this),
                                this._off = qc(t.target),
                                await this.toggle(Ce(this.toggles, t.current)),
                                this._off())
                        }
                    }, {
                        name: "shown hidden",
                        self: !0,
                        delegate() {
                            return this.targets
                        },
                        handler() {
                            this.$emit()
                        }
                    }],
                    update() {
                        const t = We(this.items, `.${this.clsOpen}`);
                        for (const e in this.items) {
                            const i = this.toggles[e]
                                , n = this.contents[e];
                            if (!i || !n)
                                continue;
                            i.id = ee(this, i, `-title-${e}`),
                                n.id = ee(this, n, `-content-${e}`);
                            const s = S(t, this.items[e]);
                            C(i, {
                                role: vt(i, "a") ? "button" : null,
                                "aria-controls": n.id,
                                "aria-expanded": s,
                                "aria-disabled": !this.collapsible && t.length < 2 && s
                            }),
                                C(n, {
                                    role: "region",
                                    "aria-labelledby": i.id
                                }),
                                vt(n, "ul") && C(W(n), "role", "presentation")
                        }
                    },
                    methods: {
                        toggle(t, e) {
                            t = this.items[It(t, this.items)];
                            let i = [t];
                            const n = We(this.items, `.${this.clsOpen}`);
                            if (!this.multiple && !S(n, i[0]) && (i = i.concat(n)),
                                !(!this.collapsible && n.length < 2 && S(n, t)))
                                return Promise.all(i.map(s => this.toggleElement(s, !S(n, s), (r, l) => {
                                    if (ft(r, this.clsOpen, l),
                                        e === !1 || !this.animation) {
                                        Gi(N(this.content, r), !l);
                                        return
                                    }
                                    return Uc(r, l, this)
                                }
                                )))
                        }
                    }
                };
                function Gi(t, e) {
                    t && (t.hidden = e)
                }
                async function Uc(t, e, { content: i, duration: n, velocity: s, transition: r }) {
                    var l;
                    i = ((l = t._wrapper) == null ? void 0 : l.firstElementChild) || N(i, t),
                        t._wrapper || (t._wrapper = Ci(i, "<div>"));
                    const u = t._wrapper;
                    v(u, "overflow", "hidden");
                    const d = F(v(u, "height"));
                    await V.cancel(u),
                        Gi(i, !1);
                    const g = ne(["marginTop", "marginBottom"], k => v(i, k)) + B(i).height
                        , w = d / g;
                    n = (s * g + n) * (e ? 1 - w : w),
                        v(u, "height", d),
                        await V.start(u, {
                            height: e ? g : 0
                        }, n, r),
                        Ke(i),
                        delete t._wrapper,
                        e || Gi(i, !0)
                }
                function qc(t) {
                    const e = Yt(t, !0);
                    let i;
                    return function n() {
                        i = requestAnimationFrame(() => {
                            const { top: s } = t.getBoundingClientRect();
                            s < 0 && (e.scrollTop += s),
                                n()
                        }
                        )
                    }(),
                        () => requestAnimationFrame(() => cancelAnimationFrame(i))
                }
                var Wc = {
                    mixins: [Ct, pe],
                    args: "animation",
                    props: {
                        animation: Boolean,
                        close: String
                    },
                    data: {
                        animation: !0,
                        selClose: ".uk-alert-close",
                        duration: 150
                    },
                    events: {
                        name: "click",
                        delegate() {
                            return this.selClose
                        },
                        handler(t) {
                            t.preventDefault(),
                                this.close()
                        }
                    },
                    methods: {
                        async close() {
                            await this.toggleElement(this.$el, !1, Vc),
                                this.$destroy(!0)
                        }
                    }
                };
                function Vc(t, e, { duration: i, transition: n, velocity: s }) {
                    const r = F(v(t, "height"));
                    return v(t, "height", r),
                        V.start(t, {
                            height: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderTop: 0,
                            borderBottom: 0,
                            opacity: 0
                        }, s * r + i, n)
                }
                var oo = {
                    args: "autoplay",
                    props: {
                        automute: Boolean,
                        autoplay: Boolean
                    },
                    data: {
                        automute: !1,
                        autoplay: !0
                    },
                    connected() {
                        this.inView = this.autoplay === "inview",
                            this.inView && !Wt(this.$el, "preload") && (this.$el.preload = "none"),
                            vt(this.$el, "iframe") && !Wt(this.$el, "allow") && (this.$el.allow = "autoplay"),
                            this.automute && zs(this.$el)
                    },
                    observe: [ei({
                        args: {
                            intersecting: !1
                        }
                    }), zt()],
                    update: {
                        read({ visible: t }) {
                            return Hs(this.$el) ? {
                                prev: t,
                                visible: ct(this.$el),
                                inView: this.inView && Mn(this.$el)
                            } : !1
                        },
                        write({ prev: t, visible: e, inView: i }) {
                            !e || this.inView && !i ? Ls(this.$el) : (this.autoplay === !0 && !t || i) && Ms(this.$el)
                        },
                        events: ["resize"]
                    }
                }
                    , Jc = {
                        mixins: [oo],
                        props: {
                            width: Number,
                            height: Number
                        },
                        data: {
                            automute: !0
                        },
                        events: {
                            "load loadedmetadata"() {
                                this.$emit("resize")
                            }
                        },
                        observe: zt({
                            target: ({ $el: t }) => [ao(t) || K(t)]
                        }),
                        update: {
                            read() {
                                const { ratio: t, cover: e } = xi
                                    , { $el: i, width: n, height: s } = this;
                                let r = {
                                    width: n,
                                    height: s
                                };
                                if (!n || !s) {
                                    const g = {
                                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                                    };
                                    n ? r = t(g, "width", n) : s ? r = t(g, "height", s) : r = g
                                }
                                const { offsetHeight: l, offsetWidth: u } = ao(i) || K(i)
                                    , d = e(r, {
                                        width: u + (u % 2 ? 1 : 0),
                                        height: l + (l % 2 ? 1 : 0)
                                    });
                                return !d.width || !d.height ? !1 : d
                            },
                            write({ height: t, width: e }) {
                                v(this.$el, {
                                    height: t,
                                    width: e
                                })
                            },
                            events: ["resize"]
                        }
                    };
                function ao(t) {
                    for (; t = K(t);)
                        if (v(t, "position") !== "static")
                            return t
                }
                let yt;
                var lo = {
                    mixins: [si, to, pe],
                    args: "pos",
                    props: {
                        mode: "list",
                        toggle: Boolean,
                        boundary: Boolean,
                        boundaryX: Boolean,
                        boundaryY: Boolean,
                        target: Boolean,
                        targetX: Boolean,
                        targetY: Boolean,
                        stretch: Boolean,
                        delayShow: Number,
                        delayHide: Number,
                        autoUpdate: Boolean,
                        clsDrop: String,
                        animateOut: Boolean,
                        bgScroll: Boolean
                    },
                    data: {
                        mode: ["click", "hover"],
                        toggle: "- *",
                        boundary: !1,
                        boundaryX: !1,
                        boundaryY: !1,
                        target: !1,
                        targetX: !1,
                        targetY: !1,
                        stretch: !1,
                        delayShow: 0,
                        delayHide: 800,
                        autoUpdate: !0,
                        clsDrop: !1,
                        animateOut: !1,
                        bgScroll: !0,
                        animation: ["uk-animation-fade"],
                        cls: "uk-open",
                        container: !1
                    },
                    computed: {
                        boundary({ boundary: t, boundaryX: e, boundaryY: i }, n) {
                            return [_t(e || t, n) || window, _t(i || t, n) || window]
                        },
                        target({ target: t, targetX: e, targetY: i }, n) {
                            return e || (e = t || this.targetEl),
                                i || (i = t || this.targetEl),
                                [e === !0 ? window : _t(e, n), i === !0 ? window : _t(i, n)]
                        }
                    },
                    created() {
                        this.tracker = new Nn
                    },
                    beforeConnect() {
                        this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`
                    },
                    connected() {
                        L(this.$el, "uk-drop", this.clsDrop),
                            this.toggle && !this.targetEl && (this.targetEl = Gc(this)),
                            this._style = gn(this.$el.style, ["width", "height"])
                    },
                    disconnected() {
                        this.isActive() && (this.hide(!1),
                            yt = null),
                            v(this.$el, this._style)
                    },
                    observe: ii({
                        target: ({ toggle: t, $el: e }) => _t(t, e),
                        targets: ({ $el: t }) => t
                    }),
                    events: [{
                        name: "click",
                        delegate() {
                            return ".uk-drop-close"
                        },
                        handler(t) {
                            t.preventDefault(),
                                this.hide(!1)
                        }
                    }, {
                        name: "click",
                        delegate() {
                            return 'a[href*="#"]'
                        },
                        handler({ defaultPrevented: t, current: e }) {
                            const { hash: i } = e;
                            !t && i && Oe(e) && !et(i, this.$el) && this.hide(!1)
                        }
                    }, {
                        name: "beforescroll",
                        handler() {
                            this.hide(!1)
                        }
                    }, {
                        name: "toggle",
                        self: !0,
                        handler(t, e) {
                            t.preventDefault(),
                                this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1)
                        }
                    }, {
                        name: "toggleshow",
                        self: !0,
                        handler(t, e) {
                            t.preventDefault(),
                                this.show(e == null ? void 0 : e.$el)
                        }
                    }, {
                        name: "togglehide",
                        self: !0,
                        handler(t) {
                            t.preventDefault(),
                                q(this.$el, ":focus,:hover") || this.hide()
                        }
                    }, {
                        name: `${fe} focusin`,
                        filter() {
                            return S(this.mode, "hover")
                        },
                        handler(t) {
                            Kt(t) || this.clearTimers()
                        }
                    }, {
                        name: `${Ze} focusout`,
                        filter() {
                            return S(this.mode, "hover")
                        },
                        handler(t) {
                            !Kt(t) && t.relatedTarget && this.hide()
                        }
                    }, {
                        name: "toggled",
                        self: !0,
                        handler(t, e) {
                            C(this.targetEl, "aria-expanded", e ? !0 : null),
                                e && (this.clearTimers(),
                                    this.position())
                        }
                    }, {
                        name: "show",
                        self: !0,
                        handler() {
                            yt = this,
                                this.tracker.init();
                            const t = [Yc(this), Qc(this), th(this), this.autoUpdate && Zc(this), !this.bgScroll && gr(this.$el)];
                            ht(this.$el, "hide", () => t.forEach(e => e && e()), {
                                self: !0
                            })
                        }
                    }, {
                        name: "beforehide",
                        self: !0,
                        handler() {
                            this.clearTimers()
                        }
                    }, {
                        name: "hide",
                        handler({ target: t }) {
                            if (this.$el !== t) {
                                yt = yt === null && et(t, this.$el) && this.isToggled() ? this : yt;
                                return
                            }
                            yt = this.isActive() ? null : yt,
                                this.tracker.cancel()
                        }
                    }],
                    update: {
                        write() {
                            this.isToggled() && !X(this.$el, this.clsEnter) && this.position()
                        }
                    },
                    methods: {
                        show(t = this.targetEl, e = !0) {
                            if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1),
                                this.targetEl = t,
                                this.clearTimers(),
                                !this.isActive()) {
                                if (yt) {
                                    if (e && yt.isDelaying) {
                                        this.showTimer = setTimeout(() => q(t, ":hover") && this.show(), 10);
                                        return
                                    }
                                    let i;
                                    for (; yt && i !== yt && !et(this.$el, yt.$el);)
                                        i = yt,
                                            yt.hide(!1, !1)
                                }
                                this.container && K(this.$el) !== this.container && at(this.container, this.$el),
                                    this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                            }
                        },
                        hide(t = !0, e = !0) {
                            const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
                            this.clearTimers(),
                                this.isDelaying = Xc(this.$el).some(n => this.tracker.movesTo(n)),
                                t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
                        },
                        clearTimers() {
                            clearTimeout(this.showTimer),
                                clearTimeout(this.hideTimer),
                                this.showTimer = null,
                                this.hideTimer = null,
                                this.isDelaying = !1
                        },
                        isActive() {
                            return yt === this
                        },
                        position() {
                            it(this.$el, "uk-drop-stack"),
                                v(this.$el, this._style),
                                this.$el.hidden = !0;
                            const t = this.target.map(s => Kc(this.$el, s))
                                , e = this.getViewportOffset(this.$el)
                                , i = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
                            for (const [s, [r, l]] of i)
                                this.axis !== r && S([r, !0], this.stretch) && v(this.$el, {
                                    [l]: Math.min(G(this.boundary[s])[l], t[s][l] - 2 * e),
                                    [`overflow-${r}`]: "auto"
                                });
                            const n = t[0].width - 2 * e;
                            this.$el.hidden = !1,
                                v(this.$el, "maxWidth", ""),
                                this.$el.offsetWidth > n && L(this.$el, "uk-drop-stack"),
                                v(this.$el, "maxWidth", n),
                                this.positionAt(this.$el, this.target, this.boundary);
                            for (const [s, [r, l, u, d]] of i)
                                if (this.axis === r && S([r, !0], this.stretch)) {
                                    const g = Math.abs(this.getPositionOffset(this.$el))
                                        , w = G(this.target[s])
                                        , k = G(this.$el);
                                    v(this.$el, {
                                        [l]: (w[u] > k[u] ? w[this.inset ? d : u] - Math.max(G(this.boundary[s])[u], t[s][u] + e) : Math.min(G(this.boundary[s])[d], t[s][d] - e) - w[this.inset ? u : d]) - g,
                                        [`overflow-${r}`]: "auto"
                                    }),
                                        this.positionAt(this.$el, this.target, this.boundary)
                                }
                        }
                    }
                };
                function Xc(t) {
                    const e = [];
                    return Gt(t, i => v(i, "position") !== "static" && e.push(i)),
                        e
                }
                function Kc(t, e) {
                    return Dt(de(e).find(i => et(t, i)))
                }
                function Gc(t) {
                    const { $el: e } = t.$create("toggle", _t(t.toggle, t.$el), {
                        target: t.$el,
                        mode: t.mode
                    });
                    return C(e, "aria-haspopup", !0),
                        e
                }
                function Yc(t) {
                    const e = () => t.$emit()
                        , i = [Dn(e), Ii(de(t.$el).concat(t.target), e)];
                    return () => i.map(n => n.disconnect())
                }
                function Zc(t) {
                    return M([document, ...de(t.$el)], "scroll", () => t.$emit(), {
                        passive: !0
                    })
                }
                function Qc(t) {
                    return M(document, "keydown", e => {
                        e.keyCode === U.ESC && t.hide(!1)
                    }
                    )
                }
                function th(t) {
                    return M(document, jt, ({ target: e }) => {
                        et(e, t.$el) || ht(document, `${te} ${Pi} scroll`, ({ defaultPrevented: i, type: n, target: s }) => {
                            !i && n === te && e === s && !(t.targetEl && et(e, t.targetEl)) && t.hide(!1)
                        }
                            , !0)
                    }
                    )
                }
                var co = {
                    mixins: [Ct, si],
                    props: {
                        align: String,
                        clsDrop: String,
                        boundary: Boolean,
                        dropbar: Boolean,
                        dropbarAnchor: Boolean,
                        duration: Number,
                        mode: Boolean,
                        offset: Boolean,
                        stretch: Boolean,
                        delayShow: Boolean,
                        delayHide: Boolean,
                        target: Boolean,
                        targetX: Boolean,
                        targetY: Boolean,
                        animation: Boolean,
                        animateOut: Boolean
                    },
                    data: {
                        align: wt ? "right" : "left",
                        clsDrop: "uk-dropdown",
                        clsDropbar: "uk-dropnav-dropbar",
                        boundary: !0,
                        dropbar: !1,
                        dropbarAnchor: !1,
                        duration: 200,
                        container: !1,
                        selNavItem: "> li > a, > ul > li > a"
                    },
                    computed: {
                        dropbarAnchor({ dropbarAnchor: t }, e) {
                            return _t(t, e) || e
                        },
                        dropbar({ dropbar: t }) {
                            return t ? (t = this._dropbar || _t(t, this.$el) || N(`+ .${this.clsDropbar}`, this.$el),
                                t || (this._dropbar = N("<div></div>"))) : null
                        },
                        dropContainer(t, e) {
                            return this.container || e
                        },
                        dropdowns({ clsDrop: t }, e) {
                            var i;
                            const n = st(`.${t}`, e);
                            if (this.dropContainer !== e)
                                for (const s of st(`.${t}`, this.dropContainer)) {
                                    const r = (i = this.getDropdown(s)) == null ? void 0 : i.targetEl;
                                    !S(n, s) && r && et(r, this.$el) && n.push(s)
                                }
                            return n
                        },
                        items({ selNavItem: t }, e) {
                            return st(t, e)
                        }
                    },
                    watch: {
                        dropbar(t) {
                            L(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`)
                        },
                        dropdowns() {
                            this.initializeDropdowns()
                        }
                    },
                    connected() {
                        this.initializeDropdowns()
                    },
                    disconnected() {
                        Rt(this._dropbar),
                            delete this._dropbar
                    },
                    events: [{
                        name: "mouseover focusin",
                        delegate() {
                            return this.selNavItem
                        },
                        handler({ current: t }) {
                            const e = this.getActive();
                            e && S(e.mode, "hover") && e.targetEl && !et(e.targetEl, t) && !e.isDelaying && e.hide(!1)
                        }
                    }, {
                        name: "keydown",
                        self: !0,
                        delegate() {
                            return this.selNavItem
                        },
                        handler(t) {
                            var e;
                            const { current: i, keyCode: n } = t
                                , s = this.getActive();
                            n === U.DOWN && (s == null ? void 0 : s.targetEl) === i && (t.preventDefault(),
                                (e = N(qe, s.$el)) == null || e.focus()),
                                ho(t, this.items, s)
                        }
                    }, {
                        name: "keydown",
                        el() {
                            return this.dropContainer
                        },
                        delegate() {
                            return `.${this.clsDrop}`
                        },
                        handler(t) {
                            var e;
                            const { current: i, keyCode: n } = t;
                            if (!S(this.dropdowns, i))
                                return;
                            const s = this.getActive();
                            let r = -1;
                            if (n === U.HOME ? r = 0 : n === U.END ? r = "last" : n === U.UP ? r = "previous" : n === U.DOWN ? r = "next" : n === U.ESC && ((e = s.targetEl) == null || e.focus()),
                                ~r) {
                                t.preventDefault();
                                const l = st(qe, i);
                                l[It(r, l, J(l, u => q(u, ":focus")))].focus()
                            }
                            ho(t, this.items, s)
                        }
                    }, {
                        name: "mouseleave",
                        el() {
                            return this.dropbar
                        },
                        filter() {
                            return this.dropbar
                        },
                        handler() {
                            const t = this.getActive();
                            t && S(t.mode, "hover") && !this.dropdowns.some(e => q(e, ":hover")) && t.hide()
                        }
                    }, {
                        name: "beforeshow",
                        el() {
                            return this.dropContainer
                        },
                        filter() {
                            return this.dropbar
                        },
                        handler({ target: t }) {
                            this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Ei(this.dropbarAnchor, this.dropbar),
                                L(t, `${this.clsDrop}-dropbar`))
                        }
                    }, {
                        name: "show",
                        el() {
                            return this.dropContainer
                        },
                        filter() {
                            return this.dropbar
                        },
                        handler({ target: t }) {
                            if (!this.isDropbarDrop(t))
                                return;
                            const e = this.getDropdown(t)
                                , i = () => {
                                    const n = Te(t, `.${this.clsDrop}`).concat(t).map(u => G(u))
                                        , s = Math.min(...n.map(({ top: u }) => u))
                                        , r = Math.max(...n.map(({ bottom: u }) => u))
                                        , l = G(this.dropbar);
                                    v(this.dropbar, "top", this.dropbar.offsetTop - (l.top - s)),
                                        this.transitionTo(r - s + F(v(t, "marginBottom")), t)
                                }
                                ;
                            this._observer = Ii([e.$el, ...e.target], i),
                                i()
                        }
                    }, {
                        name: "beforehide",
                        el() {
                            return this.dropContainer
                        },
                        filter() {
                            return this.dropbar
                        },
                        handler(t) {
                            const e = this.getActive();
                            q(this.dropbar, ":hover") && e.$el === t.target && !this.items.some(i => e.targetEl !== i && q(i, ":focus")) && t.preventDefault()
                        }
                    }, {
                        name: "hide",
                        el() {
                            return this.dropContainer
                        },
                        filter() {
                            return this.dropbar
                        },
                        handler({ target: t }) {
                            var e;
                            if (!this.isDropbarDrop(t))
                                return;
                            (e = this._observer) == null || e.disconnect();
                            const i = this.getActive();
                            (!i || i.$el === t) && this.transitionTo(0)
                        }
                    }],
                    methods: {
                        getActive() {
                            var t;
                            return S(this.dropdowns, (t = yt) == null ? void 0 : t.$el) && yt
                        },
                        async transitionTo(t, e) {
                            const { dropbar: i } = this
                                , n = Et(i);
                            e = n < t && e,
                                await V.cancel([e, i]),
                                v(e, "clipPath", `polygon(0 0,100% 0,100% ${n}px,0 ${n}px)`),
                                Et(i, n),
                                await Promise.all([V.start(i, {
                                    height: t
                                }, this.duration), V.start(e, {
                                    clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                                }, this.duration).finally(() => v(e, {
                                    clipPath: ""
                                }))]).catch(j)
                        },
                        getDropdown(t) {
                            return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                        },
                        isDropbarDrop(t) {
                            return this.getDropdown(t) && X(t, this.clsDrop)
                        },
                        initializeDropdowns() {
                            this.$create("drop", this.dropdowns.filter(t => !this.getDropdown(t)), {
                                ...this.$props,
                                flip: !1,
                                shift: !0,
                                pos: `bottom-${this.align}`,
                                boundary: this.boundary === !0 ? this.$el : this.boundary
                            })
                        }
                    }
                };
                function ho(t, e, i) {
                    var n, s, r;
                    const { current: l, keyCode: u } = t;
                    let d = -1;
                    u === U.HOME ? d = 0 : u === U.END ? d = "last" : u === U.LEFT ? d = "previous" : u === U.RIGHT ? d = "next" : u === U.TAB && ((n = i.targetEl) == null || n.focus(),
                        (s = i.hide) == null || s.call(i, !1)),
                        ~d && (t.preventDefault(),
                            (r = i.hide) == null || r.call(i, !1),
                            e[It(d, e, e.indexOf(i.targetEl || l))].focus())
                }
                var eh = {
                    mixins: [Ct],
                    args: "target",
                    props: {
                        target: Boolean
                    },
                    data: {
                        target: !1
                    },
                    computed: {
                        input(t, e) {
                            return N(Ue, e)
                        },
                        state() {
                            return this.input.nextElementSibling
                        },
                        target({ target: t }, e) {
                            return t && (t === !0 && K(this.input) === e && this.input.nextElementSibling || N(t, e))
                        }
                    },
                    update() {
                        var t;
                        const { target: e, input: i } = this;
                        if (!e)
                            return;
                        let n;
                        const s = kn(e) ? "value" : "textContent"
                            , r = e[s]
                            , l = (t = i.files) != null && t[0] ? i.files[0].name : q(i, "select") && (n = st("option", i).filter(u => u.selected)[0]) ? n.textContent : i.value;
                        r !== l && (e[s] = l)
                    },
                    events: [{
                        name: "change",
                        handler() {
                            this.$emit()
                        }
                    }, {
                        name: "reset",
                        el() {
                            return pt(this.$el, "form")
                        },
                        handler() {
                            this.$emit()
                        }
                    }]
                }
                    , ih = {
                        extends: rr,
                        mixins: [Ct],
                        name: "grid",
                        props: {
                            masonry: Boolean,
                            parallax: Number
                        },
                        data: {
                            margin: "uk-grid-margin",
                            clsStack: "uk-grid-stack",
                            masonry: !1,
                            parallax: 0
                        },
                        connected() {
                            this.masonry && L(this.$el, "uk-flex-top uk-flex-wrap-top")
                        },
                        observe: Di({
                            filter: ({ parallax: t }) => t
                        }),
                        update: [{
                            write({ columns: t }) {
                                ft(this.$el, this.clsStack, t.length < 2)
                            },
                            events: ["resize"]
                        }, {
                            read(t) {
                                let { columns: e, rows: i } = t;
                                if (!e.length || !this.masonry && !this.parallax || uo(this.$el))
                                    return t.translates = !1,
                                        !1;
                                let n = !1;
                                const s = W(this.$el)
                                    , r = e.map(g => ne(g, "offsetHeight"))
                                    , l = sh(s, this.margin) * (i.length - 1)
                                    , u = Math.max(...r) + l;
                                this.masonry && (e = e.map(g => bi(g, "offsetTop")),
                                    n = nh(i, e));
                                let d = Math.abs(this.parallax);
                                return d && (d = r.reduce((g, w, k) => Math.max(g, w + l + (k % 2 ? d : d / 8) - u), 0)),
                                {
                                    padding: d,
                                    columns: e,
                                    translates: n,
                                    height: n ? u : ""
                                }
                            },
                            write({ height: t, padding: e }) {
                                v(this.$el, "paddingBottom", e || ""),
                                    t !== !1 && v(this.$el, "height", t)
                            },
                            events: ["resize"]
                        }, {
                            read() {
                                return this.parallax && uo(this.$el) ? !1 : {
                                    scrolled: this.parallax ? Ln(this.$el) * Math.abs(this.parallax) : !1
                                }
                            },
                            write({ columns: t, scrolled: e, translates: i }) {
                                e === !1 && !i || t.forEach((n, s) => n.forEach((r, l) => v(r, "transform", !e && !i ? "" : `translateY(${(i && -i[s][l]) + (e ? s % 2 ? e : e / 8 : 0)}px)`)))
                            },
                            events: ["scroll", "resize"]
                        }]
                    };
                function uo(t) {
                    return W(t).some(e => v(e, "position") === "absolute")
                }
                function nh(t, e) {
                    const i = t.map(n => Math.max(...n.map(s => s.offsetHeight)));
                    return e.map(n => {
                        let s = 0;
                        return n.map((r, l) => s += l ? i[l - 1] - n[l - 1].offsetHeight : 0)
                    }
                    )
                }
                function sh(t, e) {
                    const [i] = t.filter(n => X(n, e));
                    return F(i ? v(i, "marginTop") : v(t[0], "paddingLeft"))
                }
                var rh = {
                    args: "target",
                    props: {
                        target: String,
                        row: Boolean
                    },
                    data: {
                        target: "> *",
                        row: !0
                    },
                    computed: {
                        elements({ target: t }, e) {
                            return st(t, e)
                        }
                    },
                    observe: zt({
                        target: ({ $el: t, elements: e }) => [t, ...e]
                    }),
                    update: {
                        read() {
                            return {
                                rows: (this.row ? Un(this.elements) : [this.elements]).map(oh)
                            }
                        },
                        write({ rows: t }) {
                            for (const { heights: e, elements: i } of t)
                                i.forEach((n, s) => v(n, "minHeight", e[s]))
                        },
                        events: ["resize"]
                    }
                };
                function oh(t) {
                    if (t.length < 2)
                        return {
                            heights: [""],
                            elements: t
                        };
                    let e = t.map(ah);
                    const i = Math.max(...e);
                    return {
                        heights: t.map((n, s) => e[s].toFixed(2) === i.toFixed(2) ? "" : i),
                        elements: t
                    }
                }
                function ah(t) {
                    const e = gn(t.style, ["display", "minHeight"]);
                    ct(t) || v(t, "display", "block", "important"),
                        v(t, "minHeight", "");
                    const i = B(t).height - Pe(t, "height", "content-box");
                    return v(t, e),
                        i
                }
                var lh = {
                    props: {
                        expand: Boolean,
                        offsetTop: Boolean,
                        offsetBottom: Boolean,
                        minHeight: Number
                    },
                    data: {
                        expand: !1,
                        offsetTop: !1,
                        offsetBottom: !1,
                        minHeight: 0
                    },
                    observe: zt({
                        target: ({ $el: t }) => [t, ...Re(t)]
                    }),
                    update: {
                        read() {
                            if (!ct(this.$el))
                                return !1;
                            let t = "";
                            const e = Pe(this.$el, "height", "content-box")
                                , { body: i, scrollingElement: n } = document
                                , s = Yt(this.$el)
                                , { height: r } = Dt(s === i ? n : s);
                            if (this.expand)
                                t = `${r - (B(s).height - B(this.$el).height) - e}px`;
                            else {
                                const l = n === s || i === s;
                                if (t = `calc(${l ? "100vh" : `${r}px`}`,
                                    this.offsetTop)
                                    if (l) {
                                        const u = ce(this.$el)[0] - ce(s)[0];
                                        t += u > 0 && u < r / 2 ? ` - ${u}px` : ""
                                    } else
                                        t += ` - ${v(s, "paddingTop")}`;
                                this.offsetBottom === !0 ? t += ` - ${B(this.$el.nextElementSibling).height}px` : qt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && P(this.offsetBottom, "px") ? t += ` - ${F(this.offsetBottom)}px` : tt(this.offsetBottom) && (t += ` - ${B(_t(this.offsetBottom, this.$el)).height}px`),
                                    t += `${e ? ` - ${e}px` : ""})`
                            }
                            return {
                                minHeight: t
                            }
                        },
                        write({ minHeight: t }) {
                            v(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`)
                        },
                        events: ["resize"]
                    }
                }
                    , ch = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>'
                    , hh = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>'
                    , uh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
                    , fh = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>'
                    , dh = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>'
                    , ph = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
                    , mh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>'
                    , gh = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>'
                    , vh = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>'
                    , wh = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>'
                    , bh = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>'
                    , yh = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>'
                    , xh = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>'
                    , $h = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>'
                    , kh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>'
                    , Sh = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>'
                    , Eh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>'
                    , Th = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>'
                    , Ch = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>'
                    , Oh = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>'
                    , fo = {
                        args: "src",
                        props: {
                            width: Number,
                            height: Number,
                            ratio: Number
                        },
                        data: {
                            ratio: 1
                        },
                        connected() {
                            this.svg = this.getSvg().then(t => {
                                if (!this._connected)
                                    return;
                                const e = Ah(t, this.$el);
                                return this.svgEl && e !== this.svgEl && Rt(this.svgEl),
                                    Ph.call(this, e, t),
                                    this.svgEl = e
                            }
                                , j)
                        },
                        disconnected() {
                            this.svg.then(t => {
                                this._connected || ($n(this.$el) && (this.$el.hidden = !1),
                                    Rt(t),
                                    this.svgEl = null)
                            }
                            ),
                                this.svg = null
                        },
                        methods: {
                            async getSvg() { }
                        }
                    };
                function Ah(t, e) {
                    if ($n(e) || vt(e, "canvas")) {
                        e.hidden = !0;
                        const n = e.nextElementSibling;
                        return po(t, n) ? n : Ei(e, t)
                    }
                    const i = e.lastElementChild;
                    return po(t, i) ? i : at(e, t)
                }
                function po(t, e) {
                    return vt(t, "svg") && vt(e, "svg") && t.innerHTML === e.innerHTML
                }
                function Ph(t, e) {
                    const i = ["width", "height"];
                    let n = i.map(r => this[r]);
                    n.some(r => r) || (n = i.map(r => C(e, r)));
                    const s = C(e, "viewBox");
                    s && !n.some(r => r) && (n = s.split(" ").slice(2)),
                        n.forEach((r, l) => C(t, i[l], F(r) * this.ratio || null))
                }
                const Yi = {
                    spinner: Ch,
                    totop: Oh,
                    marker: fh,
                    "close-icon": ch,
                    "close-large": hh,
                    "drop-parent-icon": uh,
                    "nav-parent-icon": ph,
                    "nav-parent-icon-large": dh,
                    "navbar-parent-icon": mh,
                    "navbar-toggle-icon": gh,
                    "overlay-icon": vh,
                    "pagination-next": wh,
                    "pagination-previous": bh,
                    "search-icon": yh,
                    "search-large": xh,
                    "search-navbar": $h,
                    "slidenav-next": Sh,
                    "slidenav-next-large": kh,
                    "slidenav-previous": Th,
                    "slidenav-previous-large": Eh
                }
                    , ss = {
                        install: zh,
                        mixins: [fo],
                        args: "icon",
                        props: {
                            icon: String
                        },
                        isIcon: !0,
                        beforeConnect() {
                            L(this.$el, "uk-icon")
                        },
                        methods: {
                            async getSvg() {
                                const t = Hh(this.icon);
                                if (!t)
                                    throw "Icon not found.";
                                return t
                            }
                        }
                    }
                    , we = {
                        args: !1,
                        extends: ss,
                        data: t => ({
                            icon: m(t.constructor.options.name)
                        }),
                        beforeConnect() {
                            L(this.$el, this.$options.id)
                        }
                    }
                    , Ih = {
                        extends: we,
                        beforeConnect() {
                            const t = this.$props.icon;
                            this.icon = pt(this.$el, ".uk-nav-primary") ? `${t}-large` : t
                        }
                    }
                    , _h = {
                        extends: we,
                        mixins: [Li],
                        i18n: {
                            toggle: "Open Search",
                            submit: "Submit Search"
                        },
                        beforeConnect() {
                            if (this.icon = X(this.$el, "uk-search-icon") && Te(this.$el, ".uk-search-large").length ? "search-large" : Te(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon,
                                !Wt(this.$el, "aria-label"))
                                if (X(this.$el, "uk-search-toggle") || X(this.$el, "uk-navbar-toggle")) {
                                    const t = this.t("toggle");
                                    C(this.$el, "aria-label", t)
                                } else {
                                    const t = pt(this.$el, "a,button");
                                    if (t) {
                                        const e = this.t("submit");
                                        C(t, "aria-label", e)
                                    }
                                }
                        }
                    }
                    , Rh = {
                        extends: we,
                        beforeConnect() {
                            C(this.$el, "role", "status")
                        },
                        methods: {
                            async getSvg() {
                                const t = await ss.methods.getSvg.call(this);
                                return this.ratio !== 1 && v(N("circle", t), "strokeWidth", 1 / this.ratio),
                                    t
                            }
                        }
                    }
                    , be = {
                        extends: we,
                        mixins: [Li],
                        beforeConnect() {
                            const t = pt(this.$el, "a,button");
                            C(t, "role", this.role !== null && vt(t, "a") ? "button" : this.role);
                            const e = this.t("label");
                            e && !Wt(t, "aria-label") && C(t, "aria-label", e)
                        }
                    }
                    , mo = {
                        extends: be,
                        beforeConnect() {
                            L(this.$el, "uk-slidenav");
                            const t = this.$props.icon;
                            this.icon = X(this.$el, "uk-slidenav-large") ? `${t}-large` : t
                        }
                    }
                    , Nh = {
                        extends: be,
                        i18n: {
                            label: "Open menu"
                        }
                    }
                    , Dh = {
                        extends: be,
                        i18n: {
                            label: "Close"
                        },
                        beforeConnect() {
                            this.icon = `close-${X(this.$el, "uk-close-large") ? "large" : "icon"}`
                        }
                    }
                    , Bh = {
                        extends: be,
                        i18n: {
                            label: "Open"
                        }
                    }
                    , Fh = {
                        extends: be,
                        i18n: {
                            label: "Back to top"
                        }
                    }
                    , Mh = {
                        extends: be,
                        i18n: {
                            label: "Next page"
                        },
                        data: {
                            role: null
                        }
                    }
                    , Lh = {
                        extends: be,
                        i18n: {
                            label: "Previous page"
                        },
                        data: {
                            role: null
                        }
                    }
                    , Zi = {};
                function zh(t) {
                    t.icon.add = (e, i) => {
                        const n = tt(e) ? {
                            [e]: i
                        } : e;
                        Qt(n, (s, r) => {
                            Yi[r] = s,
                                delete Zi[r]
                        }
                        ),
                            t._initialized && Gt(document.body, s => Qt(t.getComponents(s), r => {
                                r.$options.isIcon && r.icon in n && r.$reset()
                            }
                            ))
                    }
                }
                function Hh(t) {
                    return Yi[t] ? (Zi[t] || (Zi[t] = N((Yi[jh(t)] || Yi[t]).trim())),
                        Zi[t].cloneNode(!0)) : null
                }
                function jh(t) {
                    return wt ? mn(mn(t, "left", "right"), "previous", "next") : t
                }
                const Uh = he && "loading" in HTMLImageElement.prototype;
                var qh = {
                    args: "dataSrc",
                    props: {
                        dataSrc: String,
                        sources: String,
                        margin: String,
                        target: String,
                        loading: String
                    },
                    data: {
                        dataSrc: "",
                        sources: !1,
                        margin: "50%",
                        target: !1,
                        loading: "lazy"
                    },
                    connected() {
                        if (this.loading !== "lazy") {
                            this.load();
                            return
                        }
                        Uh && Qi(this.$el) && (this.$el.loading = "lazy",
                            rs(this.$el)),
                            Kh(this.$el)
                    },
                    disconnected() {
                        this.img && (this.img.onload = ""),
                            delete this.img
                    },
                    observe: ei({
                        target: ({ $el: t, $props: e }) => [t, ...Ve(e.target, t)],
                        handler(t, e) {
                            this.load(),
                                e.disconnect()
                        },
                        options: ({ margin: t }) => ({
                            rootMargin: t
                        }),
                        filter: ({ loading: t }) => t === "lazy"
                    }),
                    methods: {
                        load() {
                            if (this.img)
                                return this.img;
                            const t = Qi(this.$el) ? this.$el : Vh(this.$el, this.dataSrc, this.sources);
                            return je(t, "loading"),
                                rs(this.$el, t.currentSrc),
                                this.img = t
                        }
                    }
                };
                function rs(t, e) {
                    if (Qi(t)) {
                        const i = K(t);
                        (vt(i, "picture") ? W(i) : [t]).forEach(s => go(s, s))
                    } else
                        e && !S(t.style.backgroundImage, e) && (v(t, "backgroundImage", `url(${Tn(e)})`),
                            _(t, re("load", !1)))
                }
                const Wh = ["data-src", "data-srcset", "sizes"];
                function go(t, e) {
                    for (const i of Wh) {
                        const n = St(t, i);
                        n && C(e, i.replace(/^(data-)+/, ""), n)
                    }
                }
                function Vh(t, e, i) {
                    const n = new Image;
                    return Jh(n, i),
                        go(t, n),
                        n.onload = () => {
                            rs(t, n.currentSrc)
                        }
                        ,
                        C(n, "src", e),
                        n
                }
                function Jh(t, e) {
                    if (e = Xh(e),
                        e.length) {
                        const i = ae("<picture>");
                        for (const n of e) {
                            const s = ae("<source>");
                            C(s, n),
                                at(i, s)
                        }
                        at(i, t)
                    }
                }
                function Xh(t) {
                    if (!t)
                        return [];
                    if (x(t, "["))
                        try {
                            t = JSON.parse(t)
                        } catch {
                            t = []
                        }
                    else
                        t = ti(t);
                    return T(t) || (t = [t]),
                        t.filter(e => !He(e))
                }
                function Kh(t) {
                    Qi(t) && !Wt(t, "src") && C(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
                }
                function Qi(t) {
                    return vt(t, "img")
                }
                var Gh = {
                    mixins: [Ct, ji],
                    props: {
                        fill: String
                    },
                    data: {
                        fill: "",
                        clsWrapper: "uk-leader-fill",
                        clsHide: "uk-leader-hide",
                        attrFill: "data-fill"
                    },
                    computed: {
                        fill({ fill: t }) {
                            return t || v(this.$el, "--uk-leader-fill-content")
                        }
                    },
                    connected() {
                        [this.wrapper] = Pn(this.$el, `<span class="${this.clsWrapper}">`)
                    },
                    disconnected() {
                        Ke(this.wrapper.childNodes)
                    },
                    observe: zt(),
                    update: {
                        read() {
                            return {
                                width: Math.trunc(this.$el.offsetWidth / 2),
                                fill: this.fill,
                                hide: !this.matchMedia
                            }
                        },
                        write({ width: t, fill: e, hide: i }) {
                            ft(this.wrapper, this.clsHide, i),
                                C(this.wrapper, this.attrFill, new Array(t).join(e))
                        },
                        events: ["resize"]
                    }
                }
                    , Yh = {
                        install: Zh,
                        mixins: [Jn],
                        data: {
                            clsPage: "uk-modal-page",
                            selPanel: ".uk-modal-dialog",
                            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
                        },
                        events: [{
                            name: "show",
                            self: !0,
                            handler() {
                                X(this.panel, "uk-margin-auto-vertical") ? L(this.$el, "uk-flex") : v(this.$el, "display", "block"),
                                    Et(this.$el)
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler() {
                                v(this.$el, "display", ""),
                                    it(this.$el, "uk-flex")
                            }
                        }]
                    };
                function Zh({ modal: t }) {
                    t.dialog = function (i, n) {
                        const s = t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`, {
                            stack: !0,
                            role: "alertdialog",
                            ...n
                        });
                        return s.show(),
                            M(s.$el, "hidden", async () => {
                                await Promise.resolve(),
                                    s.$destroy(!0)
                            }
                                , {
                                    self: !0
                                }),
                            s
                    }
                        ,
                        t.alert = function (i, n) {
                            return e(({ i18n: s }) => `<div class="uk-modal-body">${tt(i) ? i : oe(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${s.ok}</button> </div>`, n)
                        }
                        ,
                        t.confirm = function (i, n) {
                            return e(({ i18n: s }) => `<form> <div class="uk-modal-body">${tt(i) ? i : oe(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${s.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${s.ok}</button> </div> </form>`, n, () => Promise.reject())
                        }
                        ,
                        t.prompt = function (i, n, s) {
                            const r = e(({ i18n: d }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${tt(i) ? i : oe(i)}</label> <input class="uk-input" value="${n || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${d.cancel}</button> <button class="uk-button uk-button-primary">${d.ok}</button> </div> </form>`, s, () => null, () => u.value)
                                , { $el: l } = r.dialog
                                , u = N("input", l);
                            return M(l, "show", () => u.select()),
                                r
                        }
                        ,
                        t.i18n = {
                            ok: "Ok",
                            cancel: "Cancel"
                        };
                    function e(i, n, s = j, r = j) {
                        n = {
                            bgClose: !1,
                            escClose: !0,
                            ...n,
                            i18n: {
                                ...t.i18n,
                                ...n == null ? void 0 : n.i18n
                            }
                        };
                        const l = t.dialog(i(n), n);
                        return O(new Promise(u => {
                            const d = M(l.$el, "hide", () => u(s()));
                            M(l.$el, "submit", "form", g => {
                                g.preventDefault(),
                                    u(r(l)),
                                    d(),
                                    l.hide()
                            }
                            )
                        }
                        ), {
                            dialog: l
                        })
                    }
                }
                var Qh = {
                    extends: ro,
                    data: {
                        targets: "> .uk-parent",
                        toggle: "> a",
                        content: "> ul"
                    }
                }
                    , tu = {
                        extends: co,
                        data: {
                            clsDrop: "uk-navbar-dropdown",
                            selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"
                        },
                        watch: {
                            items() {
                                const t = X(this.$el, "uk-navbar-justify");
                                for (const e of st(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el))
                                    v(e, "flexGrow", t ? st(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", e).length : "")
                            }
                        }
                    }
                    , eu = {
                        mixins: [Jn],
                        args: "mode",
                        props: {
                            mode: String,
                            flip: Boolean,
                            overlay: Boolean,
                            swiping: Boolean
                        },
                        data: {
                            mode: "slide",
                            flip: !1,
                            overlay: !1,
                            clsPage: "uk-offcanvas-page",
                            clsContainer: "uk-offcanvas-container",
                            selPanel: ".uk-offcanvas-bar",
                            clsFlip: "uk-offcanvas-flip",
                            clsContainerAnimation: "uk-offcanvas-container-animation",
                            clsSidebarAnimation: "uk-offcanvas-bar-animation",
                            clsMode: "uk-offcanvas",
                            clsOverlay: "uk-offcanvas-overlay",
                            selClose: ".uk-offcanvas-close",
                            container: !1,
                            swiping: !0
                        },
                        computed: {
                            clsFlip({ flip: t, clsFlip: e }) {
                                return t ? e : ""
                            },
                            clsOverlay({ overlay: t, clsOverlay: e }) {
                                return t ? e : ""
                            },
                            clsMode({ mode: t, clsMode: e }) {
                                return `${e}-${t}`
                            },
                            clsSidebarAnimation({ mode: t, clsSidebarAnimation: e }) {
                                return t === "none" || t === "reveal" ? "" : e
                            },
                            clsContainerAnimation({ mode: t, clsContainerAnimation: e }) {
                                return t !== "push" && t !== "reveal" ? "" : e
                            },
                            transitionElement({ mode: t }) {
                                return t === "reveal" ? K(this.panel) : this.panel
                            }
                        },
                        observe: sr({
                            filter: ({ swiping: t }) => t
                        }),
                        update: {
                            read() {
                                this.isToggled() && !ct(this.$el) && this.hide()
                            },
                            events: ["resize"]
                        },
                        events: [{
                            name: "touchmove",
                            self: !0,
                            passive: !1,
                            filter() {
                                return this.overlay
                            },
                            handler(t) {
                                t.cancelable && t.preventDefault()
                            }
                        }, {
                            name: "show",
                            self: !0,
                            handler() {
                                this.mode === "reveal" && !X(K(this.panel), this.clsMode) && (Ci(this.panel, "<div>"),
                                    L(K(this.panel), this.clsMode));
                                const { body: t, scrollingElement: e } = document;
                                L(t, this.clsContainer, this.clsFlip),
                                    v(t, "touch-action", "pan-y pinch-zoom"),
                                    v(this.$el, "display", "block"),
                                    v(this.panel, "maxWidth", e.clientWidth),
                                    L(this.$el, this.clsOverlay),
                                    L(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode),
                                    Et(t),
                                    L(t, this.clsContainerAnimation),
                                    this.clsContainerAnimation && iu()
                            }
                        }, {
                            name: "hide",
                            self: !0,
                            handler() {
                                it(document.body, this.clsContainerAnimation),
                                    v(document.body, "touch-action", "")
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler() {
                                this.clsContainerAnimation && nu(),
                                    this.mode === "reveal" && Ke(this.panel),
                                    it(this.panel, this.clsSidebarAnimation, this.clsMode),
                                    it(this.$el, this.clsOverlay),
                                    v(this.$el, "display", ""),
                                    v(this.panel, "maxWidth", ""),
                                    it(document.body, this.clsContainer, this.clsFlip)
                            }
                        }, {
                            name: "swipeLeft swipeRight",
                            handler(t) {
                                this.isToggled() && P(t.type, "Left") ^ this.flip && this.hide()
                            }
                        }]
                    };
                function iu() {
                    vo().content += ",user-scalable=0"
                }
                function nu() {
                    const t = vo();
                    t.content = t.content.replace(/,user-scalable=0$/, "")
                }
                function vo() {
                    return N('meta[name="viewport"]', document.head) || at(document.head, '<meta name="viewport">')
                }
                var su = {
                    mixins: [Ct],
                    props: {
                        selContainer: String,
                        selContent: String,
                        minHeight: Number
                    },
                    data: {
                        selContainer: ".uk-modal",
                        selContent: ".uk-modal-dialog",
                        minHeight: 150
                    },
                    computed: {
                        container({ selContainer: t }, e) {
                            return pt(e, t)
                        },
                        content({ selContent: t }, e) {
                            return pt(e, t)
                        }
                    },
                    observe: zt({
                        target: ({ container: t, content: e }) => [t, e]
                    }),
                    update: {
                        read() {
                            return !this.content || !this.container || !ct(this.$el) ? !1 : {
                                max: Math.max(this.minHeight, Et(this.container) - (B(this.content).height - Et(this.$el)))
                            }
                        },
                        write({ max: t }) {
                            v(this.$el, {
                                minHeight: this.minHeight,
                                maxHeight: t
                            })
                        },
                        events: ["resize"]
                    }
                }
                    , ru = {
                        props: ["width", "height"],
                        connected() {
                            L(this.$el, "uk-responsive-width")
                        },
                        observe: zt({
                            target: ({ $el: t }) => [t, K(t)]
                        }),
                        update: {
                            read() {
                                return ct(this.$el) && this.width && this.height ? {
                                    width: Ge(K(this.$el)),
                                    height: this.height
                                } : !1
                            },
                            write(t) {
                                Et(this.$el, xi.contain({
                                    height: this.height,
                                    width: this.width
                                }, t).height)
                            },
                            events: ["resize"]
                        }
                    }
                    , ou = {
                        props: {
                            offset: Number
                        },
                        data: {
                            offset: 0
                        },
                        connected() {
                            au(this)
                        },
                        disconnected() {
                            lu(this)
                        },
                        methods: {
                            async scrollTo(t) {
                                t = t && N(t) || document.body,
                                    _(this.$el, "beforescroll", [this, t]) && (await Ws(t, {
                                        offset: this.offset
                                    }),
                                        _(this.$el, "scrolled", [this, t]))
                            }
                        }
                    };
                const fi = new Set;
                function au(t) {
                    fi.size || M(document, "click", wo),
                        fi.add(t)
                }
                function lu(t) {
                    fi.delete(t),
                        fi.size || se(document, "click", wo)
                }
                function wo(t) {
                    if (!t.defaultPrevented)
                        for (const e of fi)
                            et(t.target, e.$el) && Oe(e.$el) && (t.preventDefault(),
                                window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href),
                                e.scrollTo(Sn(e.$el)))
                }
                var cu = {
                    args: "cls",
                    props: {
                        cls: String,
                        target: String,
                        hidden: Boolean,
                        margin: String,
                        repeat: Boolean,
                        delay: Number
                    },
                    data: () => ({
                        cls: "",
                        target: !1,
                        hidden: !0,
                        margin: "-1px",
                        repeat: !1,
                        delay: 0,
                        inViewClass: "uk-scrollspy-inview"
                    }),
                    computed: {
                        elements({ target: t }, e) {
                            return t ? st(t, e) : [e]
                        }
                    },
                    watch: {
                        elements(t) {
                            this.hidden && v(We(t, `:not(.${this.inViewClass})`), "opacity", 0)
                        }
                    },
                    connected() {
                        this.elementData = new Map
                    },
                    disconnected() {
                        for (const [t, e] of this.elementData.entries())
                            it(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
                        delete this.elementData
                    },
                    observe: ei({
                        target: ({ elements: t }) => t,
                        handler(t) {
                            const e = this.elementData;
                            for (const { target: i, isIntersecting: n } of t) {
                                e.has(i) || e.set(i, {
                                    cls: St(i, "uk-scrollspy-class") || this.cls
                                });
                                const s = e.get(i);
                                !this.repeat && s.show || (s.show = n)
                            }
                            this.$emit()
                        },
                        options: t => ({
                            rootMargin: t.margin
                        }),
                        args: {
                            intersecting: !1
                        }
                    }),
                    update: [{
                        write(t) {
                            for (const [e, i] of this.elementData.entries())
                                i.show && !i.inview && !i.queued ? (i.queued = !0,
                                    t.promise = (t.promise || Promise.resolve()).then(() => new Promise(n => setTimeout(n, this.delay))).then(() => {
                                        this.toggle(e, !0),
                                            setTimeout(() => {
                                                i.queued = !1,
                                                    this.$emit()
                                            }
                                                , 300)
                                    }
                                    )) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                        }
                    }],
                    methods: {
                        toggle(t, e) {
                            var i;
                            const n = this.elementData.get(t);
                            if (n) {
                                if ((i = n.off) == null || i.call(n),
                                    v(t, "opacity", !e && this.hidden ? 0 : ""),
                                    ft(t, this.inViewClass, e),
                                    ft(t, n.cls),
                                    /\buk-animation-/.test(n.cls)) {
                                    const s = () => bn(t, "uk-animation-[\\w-]+");
                                    e ? n.off = ht(t, "animationcancel animationend", s) : s()
                                }
                                _(t, e ? "inview" : "outview"),
                                    n.inview = e,
                                    this.$update(t)
                            }
                        }
                    }
                }
                    , hu = {
                        props: {
                            cls: String,
                            closest: String,
                            scroll: Boolean,
                            overflow: Boolean,
                            offset: Number
                        },
                        data: {
                            cls: "uk-active",
                            closest: !1,
                            scroll: !1,
                            overflow: !0,
                            offset: 0
                        },
                        computed: {
                            links(t, e) {
                                return st('a[href*="#"]', e).filter(i => i.hash && Oe(i))
                            },
                            elements({ closest: t }) {
                                return pt(this.links, t || "*")
                            }
                        },
                        watch: {
                            links(t) {
                                this.scroll && this.$create("scroll", t, {
                                    offset: this.offset || 0
                                })
                            }
                        },
                        observe: [ei(), Di()],
                        update: [{
                            read() {
                                const t = this.links.map(Sn).filter(Boolean)
                                    , { length: e } = t;
                                if (!e || !ct(this.$el))
                                    return !1;
                                const i = Yt(t, !0)
                                    , { scrollTop: n, scrollHeight: s } = i
                                    , r = Dt(i)
                                    , l = s - r.height;
                                let u = !1;
                                if (n === l)
                                    u = e - 1;
                                else {
                                    for (let d = 0; d < t.length && !(G(t[d]).top - r.top - this.offset > 0); d++)
                                        u = +d;
                                    u === !1 && this.overflow && (u = 0)
                                }
                                return {
                                    active: u
                                }
                            },
                            write({ active: t }) {
                                const e = t !== !1 && !X(this.elements[t], this.cls);
                                this.links.forEach(i => i.blur());
                                for (let i = 0; i < this.elements.length; i++)
                                    ft(this.elements[i], this.cls, +i === t);
                                e && _(this.$el, "active", [t, this.elements[t]])
                            },
                            events: ["scroll", "resize"]
                        }]
                    }
                    , uu = {
                        mixins: [Ct, ji],
                        props: {
                            position: String,
                            top: null,
                            bottom: null,
                            start: null,
                            end: null,
                            offset: String,
                            overflowFlip: Boolean,
                            animation: String,
                            clsActive: String,
                            clsInactive: String,
                            clsFixed: String,
                            clsBelow: String,
                            selTarget: String,
                            showOnUp: Boolean,
                            targetOffset: Number
                        },
                        data: {
                            position: "top",
                            top: !1,
                            bottom: !1,
                            start: !1,
                            end: !1,
                            offset: 0,
                            overflowFlip: !1,
                            animation: "",
                            clsActive: "uk-active",
                            clsInactive: "",
                            clsFixed: "uk-sticky-fixed",
                            clsBelow: "uk-sticky-below",
                            selTarget: "",
                            showOnUp: !1,
                            targetOffset: !1
                        },
                        computed: {
                            selTarget({ selTarget: t }, e) {
                                return t && N(t, e) || e
                            }
                        },
                        connected() {
                            this.start = bo(this.start || this.top),
                                this.end = bo(this.end || this.bottom),
                                this.placeholder = N("+ .uk-sticky-placeholder", this.$el) || N('<div class="uk-sticky-placeholder"></div>'),
                                this.isFixed = !1,
                                this.setActive(!1)
                        },
                        beforeDisconnect() {
                            this.isFixed && (this.hide(),
                                it(this.selTarget, this.clsInactive)),
                                yo(this.$el),
                                Rt(this.placeholder),
                                this.placeholder = null
                        },
                        observe: [nr(), Di({
                            target: () => document.scrollingElement
                        }), zt({
                            target: ({ $el: t }) => [t, document.scrollingElement]
                        })],
                        events: [{
                            name: "load hashchange popstate",
                            el() {
                                return window
                            },
                            filter() {
                                return this.targetOffset !== !1
                            },
                            handler() {
                                const { scrollingElement: t } = document;
                                !location.hash || t.scrollTop === 0 || setTimeout(() => {
                                    const e = G(N(location.hash))
                                        , i = G(this.$el);
                                    this.isFixed && vn(e, i) && (t.scrollTop = e.top - i.height - Nt(this.targetOffset, "height", this.placeholder) - Nt(this.offset, "height", this.placeholder))
                                }
                                )
                            }
                        }, {
                            name: "transitionstart",
                            capture: !0,
                            handler() {
                                this.transitionInProgress = ht(this.$el, "transitionend transitioncancel", () => this.transitionInProgress = null)
                            }
                        }],
                        update: [{
                            read({ height: t, width: e, margin: i, sticky: n }) {
                                if (this.inactive = !this.matchMedia || !ct(this.$el),
                                    this.inactive)
                                    return;
                                const s = this.isFixed && !this.transitionInProgress;
                                s && (xo(this.selTarget),
                                    this.hide()),
                                    this.active || ({ height: t, width: e } = G(this.$el),
                                        i = v(this.$el, "margin")),
                                    s && this.show();
                                const r = Nt("100vh", "height")
                                    , l = Et(window)
                                    , u = document.scrollingElement.scrollHeight - r;
                                let d = this.position;
                                this.overflowFlip && t > r && (d = d === "top" ? "bottom" : "top");
                                const g = this.isFixed ? this.placeholder : this.$el;
                                let w = Nt(this.offset, "height", n ? this.$el : g);
                                d === "bottom" && (t < l || this.overflowFlip) && (w += l - t);
                                const k = this.overflowFlip ? 0 : Math.max(0, t + w - r)
                                    , E = G(g).top
                                    , I = G(this.$el).height
                                    , Y = (this.start === !1 ? E : os(this.start, this.$el, E)) - w
                                    , nt = this.end === !1 ? u : Math.min(u, os(this.end, this.$el, E + t, !0) - I - w + k);
                                return n = u && !this.showOnUp && Y + w === E && nt === Math.min(u, os("!*", this.$el, 0, !0) - I - w + k) && v(K(this.$el), "overflowY") === "visible",
                                {
                                    start: Y,
                                    end: nt,
                                    offset: w,
                                    overflow: k,
                                    topOffset: E,
                                    height: t,
                                    elHeight: I,
                                    width: e,
                                    margin: i,
                                    top: ce(g)[0],
                                    sticky: n
                                }
                            },
                            write({ height: t, width: e, margin: i, offset: n, sticky: s }) {
                                if ((this.inactive || s || !this.isFixed) && yo(this.$el),
                                    this.inactive)
                                    return;
                                s && (t = e = i = 0,
                                    v(this.$el, {
                                        position: "sticky",
                                        top: n
                                    }));
                                const { placeholder: r } = this;
                                v(r, {
                                    height: t,
                                    width: e,
                                    margin: i
                                }),
                                    et(r, document) || (r.hidden = !0),
                                    (s ? Si : Ei)(this.$el, r)
                            },
                            events: ["resize"]
                        }, {
                            read({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: n = 0, start: s, end: r }) {
                                const l = document.scrollingElement.scrollTop;
                                return {
                                    dir: t <= l ? "down" : "up",
                                    prevDir: e,
                                    scroll: l,
                                    prevScroll: t,
                                    offsetParentTop: G((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                                    overflowScroll: $t(n + $t(l, s, r) - $t(t, s, r), 0, i)
                                }
                            },
                            write(t, e) {
                                const i = e.has("scroll")
                                    , { initTimestamp: n = 0, dir: s, prevDir: r, scroll: l, prevScroll: u = 0, top: d, start: g, topOffset: w, height: k } = t;
                                if (l < 0 || l === u && i || this.showOnUp && !i && !this.isFixed)
                                    return;
                                const E = Date.now();
                                if ((E - n > 300 || s !== r) && (t.initScroll = l,
                                    t.initTimestamp = E),
                                    !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - l) <= 30 && Math.abs(u - l) <= 10))
                                    if (this.inactive || l < g || this.showOnUp && (l <= g || s === "down" && i || s === "up" && !this.isFixed && l <= w + k)) {
                                        if (!this.isFixed) {
                                            Ht.inProgress(this.$el) && d > l && (Ht.cancel(this.$el),
                                                this.hide());
                                            return
                                        }
                                        this.animation && l > w ? (Ht.cancel(this.$el),
                                            Ht.out(this.$el, this.animation).then(() => this.hide(), j)) : this.hide()
                                    } else
                                        this.isFixed ? this.update() : this.animation && l > w ? (Ht.cancel(this.$el),
                                            this.show(),
                                            Ht.in(this.$el, this.animation).catch(j)) : (xo(this.selTarget),
                                                this.show())
                            },
                            events: ["resize", "resizeViewport", "scroll"]
                        }],
                        methods: {
                            show() {
                                this.isFixed = !0,
                                    this.update(),
                                    this.placeholder.hidden = !1
                            },
                            hide() {
                                const { offset: t, sticky: e } = this._data;
                                this.setActive(!1),
                                    it(this.$el, this.clsFixed, this.clsBelow),
                                    e ? v(this.$el, "top", t) : v(this.$el, {
                                        position: "",
                                        top: "",
                                        width: "",
                                        marginTop: ""
                                    }),
                                    this.placeholder.hidden = !0,
                                    this.isFixed = !1
                            },
                            update() {
                                let { width: t, scroll: e = 0, overflow: i, overflowScroll: n = 0, start: s, end: r, offset: l, topOffset: u, height: d, elHeight: g, offsetParentTop: w, sticky: k } = this._data;
                                const E = s !== 0 || e > s;
                                if (!k) {
                                    let I = "fixed";
                                    e > r && (l += r - w,
                                        I = "absolute"),
                                        v(this.$el, {
                                            position: I,
                                            width: t,
                                            marginTop: 0
                                        }, "important")
                                }
                                i && (l -= n),
                                    v(this.$el, "top", l),
                                    this.setActive(E),
                                    ft(this.$el, this.clsBelow, e > u + (k ? Math.min(d, g) : d)),
                                    L(this.$el, this.clsFixed)
                            },
                            setActive(t) {
                                const e = this.active;
                                this.active = t,
                                    t ? (yn(this.selTarget, this.clsInactive, this.clsActive),
                                        e !== t && _(this.$el, "active")) : (yn(this.selTarget, this.clsActive, this.clsInactive),
                                            e !== t && _(this.$el, "inactive"))
                            }
                        }
                    };
                function os(t, e, i, n) {
                    if (!t)
                        return 0;
                    if (qt(t) || tt(t) && t.match(/^-?\d/))
                        return i + Nt(t, "height", e, !0);
                    {
                        const s = t === !0 ? K(e) : _t(t, e);
                        return G(s).bottom - (n && s && et(e, s) ? F(v(s, "paddingBottom")) : 0)
                    }
                }
                function bo(t) {
                    return t === "true" ? !0 : t === "false" ? !1 : t
                }
                function yo(t) {
                    v(t, {
                        position: "",
                        top: "",
                        marginTop: "",
                        width: ""
                    })
                }
                function xo(t) {
                    v(t, "transition", "0s"),
                        requestAnimationFrame(() => v(t, "transition", ""))
                }
                var fu = {
                    mixins: [fo],
                    args: "src",
                    props: {
                        src: String,
                        icon: String,
                        attributes: "list",
                        strokeAnimation: Boolean
                    },
                    data: {
                        strokeAnimation: !1
                    },
                    observe: [ir({
                        async handler() {
                            const t = await this.svg;
                            t && $o.call(this, t)
                        },
                        options: {
                            attributes: !0,
                            attributeFilter: ["id", "class", "style"]
                        }
                    })],
                    async connected() {
                        S(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
                        const t = await this.svg;
                        t && ($o.call(this, t),
                            this.strokeAnimation && gu(t))
                    },
                    methods: {
                        async getSvg() {
                            return vt(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => ht(this.$el, "load", () => t(this.getSvg()))) : pu(await du(this.src), this.icon) || Promise.reject("SVG not found.")
                        }
                    }
                };
                function $o(t) {
                    const { $el: e } = this;
                    L(t, C(e, "class"), "uk-svg");
                    for (let i = 0; i < e.style.length; i++) {
                        const n = e.style[i];
                        v(t, n, v(e, n))
                    }
                    for (const i in this.attributes) {
                        const [n, s] = this.attributes[i].split(":", 2);
                        C(t, n, s)
                    }
                    this.$el.id || je(t, "id")
                }
                const du = Lt(async t => t ? x(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
                function pu(t, e) {
                    return e && S(t, "<symbol") && (t = mu(t)[e] || t),
                        t = N(t.substr(t.indexOf("<svg"))),
                        (t == null ? void 0 : t.hasChildNodes()) && t
                }
                const ko = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g
                    , mu = Lt(function (t) {
                        const e = {};
                        ko.lastIndex = 0;
                        let i;
                        for (; i = ko.exec(t);)
                            e[i[3]] = `<svg ${i[1]}svg>`;
                        return e
                    });
                function gu(t) {
                    const e = Br(t);
                    e && v(t, "--uk-animation-stroke", e)
                }
                const as = ".uk-disabled *, .uk-disabled, [disabled]";
                var So = {
                    mixins: [pe],
                    args: "connect",
                    props: {
                        connect: String,
                        toggle: String,
                        itemNav: String,
                        active: Number,
                        followFocus: Boolean,
                        swiping: Boolean
                    },
                    data: {
                        connect: "~.uk-switcher",
                        toggle: "> * > :first-child",
                        itemNav: !1,
                        active: 0,
                        cls: "uk-active",
                        attrItem: "uk-switcher-item",
                        selVertical: ".uk-nav",
                        followFocus: !1,
                        swiping: !0
                    },
                    computed: {
                        connects({ connect: t }, e) {
                            return Ve(t, e)
                        },
                        connectChildren() {
                            return this.connects.map(t => W(t)).flat()
                        },
                        toggles({ toggle: t }, e) {
                            return st(t, e)
                        },
                        children() {
                            return W(this.$el).filter(t => this.toggles.some(e => et(e, t)))
                        }
                    },
                    watch: {
                        connects(t) {
                            this.swiping && v(t, "touchAction", "pan-y pinch-zoom"),
                                this.$emit()
                        },
                        connectChildren() {
                            let t = Math.max(0, this.index());
                            for (const e of this.connects)
                                W(e).forEach((i, n) => ft(i, this.cls, n === t));
                            this.$emit()
                        },
                        toggles(t) {
                            this.$emit();
                            const e = this.index();
                            this.show(~e ? e : t[this.active] || t[0])
                        }
                    },
                    connected() {
                        C(this.$el, "role", "tablist")
                    },
                    observe: [ii({
                        targets: ({ connectChildren: t }) => t
                    }), sr({
                        target: ({ connects: t }) => t,
                        filter: ({ swiping: t }) => t
                    })],
                    events: [{
                        name: "click keydown",
                        delegate() {
                            return this.toggle
                        },
                        handler(t) {
                            !q(t.current, as) && (t.type === "click" || t.keyCode === U.SPACE) && (t.preventDefault(),
                                this.show(t.current))
                        }
                    }, {
                        name: "keydown",
                        delegate() {
                            return this.toggle
                        },
                        handler(t) {
                            const { current: e, keyCode: i } = t
                                , n = q(this.$el, this.selVertical);
                            let s = i === U.HOME ? 0 : i === U.END ? "last" : i === U.LEFT && !n || i === U.UP && n ? "previous" : i === U.RIGHT && !n || i === U.DOWN && n ? "next" : -1;
                            if (~s) {
                                t.preventDefault();
                                const r = this.toggles.filter(u => !q(u, as))
                                    , l = r[It(s, r, r.indexOf(e))];
                                l.focus(),
                                    this.followFocus && this.show(l)
                            }
                        }
                    }, {
                        name: "click",
                        el() {
                            return this.connects.concat(this.itemNav ? Ve(this.itemNav, this.$el) : [])
                        },
                        delegate() {
                            return `[${this.attrItem}],[data-${this.attrItem}]`
                        },
                        handler(t) {
                            pt(t.target, "a,button") && (t.preventDefault(),
                                this.show(St(t.current, this.attrItem)))
                        }
                    }, {
                        name: "swipeRight swipeLeft",
                        filter() {
                            return this.swiping
                        },
                        el() {
                            return this.connects
                        },
                        handler({ type: t }) {
                            this.show(P(t, "Left") ? "next" : "previous")
                        }
                    }],
                    update() {
                        var t;
                        C(this.connects, "role", "presentation"),
                            C(W(this.$el), "role", "presentation");
                        for (const e in this.toggles) {
                            const i = this.toggles[e]
                                , n = (t = this.connects[0]) == null ? void 0 : t.children[e];
                            C(i, "role", "tab"),
                                n && (i.id = ee(this, i, `-tab-${e}`),
                                    n.id = ee(this, n, `-tabpanel-${e}`),
                                    C(i, "aria-controls", n.id),
                                    C(n, {
                                        role: "tabpanel",
                                        "aria-labelledby": i.id
                                    }))
                        }
                        C(this.$el, "aria-orientation", q(this.$el, this.selVertical) ? "vertical" : null)
                    },
                    methods: {
                        index() {
                            return J(this.children, t => X(t, this.cls))
                        },
                        show(t) {
                            const e = this.toggles.filter(l => !q(l, as))
                                , i = this.index()
                                , n = It(!Pt(t) || S(e, t) ? t : 0, e, It(this.toggles[i], e))
                                , s = It(e[n], this.toggles);
                            this.children.forEach((l, u) => {
                                ft(l, this.cls, s === u),
                                    C(this.toggles[u], {
                                        "aria-selected": s === u,
                                        tabindex: s === u ? null : -1
                                    })
                            }
                            );
                            const r = i >= 0 && i !== n;
                            this.connects.forEach(async ({ children: l }) => {
                                const u = R(l).filter((d, g) => g !== s && X(d, this.cls));
                                await this.toggleElement(u, !1, r),
                                    await this.toggleElement(l[s], !0, r)
                            }
                            )
                        }
                    }
                }
                    , vu = {
                        mixins: [Ct],
                        extends: So,
                        props: {
                            media: Boolean
                        },
                        data: {
                            media: 960,
                            attrItem: "uk-tab-item",
                            selVertical: ".uk-tab-left,.uk-tab-right"
                        },
                        connected() {
                            const t = X(this.$el, "uk-tab-left") ? "uk-tab-left" : X(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
                            t && this.$create("toggle", this.$el, {
                                cls: t,
                                mode: "media",
                                media: this.media
                            })
                        }
                    };
                const wu = 32;
                var bu = {
                    mixins: [ji, pe],
                    args: "target",
                    props: {
                        href: String,
                        target: null,
                        mode: "list",
                        queued: Boolean
                    },
                    data: {
                        href: !1,
                        target: !1,
                        mode: "click",
                        queued: !0
                    },
                    computed: {
                        target({ target: t }, e) {
                            return t = Ve(t || e.hash, e),
                                t.length && t || [e]
                        }
                    },
                    connected() {
                        S(this.mode, "media") || ($i(this.$el) || C(this.$el, "tabindex", "0"),
                            !this.cls && vt(this.$el, "a") && C(this.$el, "role", "button"))
                    },
                    observe: ii({
                        target: ({ target: t }) => t
                    }),
                    events: [{
                        name: jt,
                        filter() {
                            return S(this.mode, "hover")
                        },
                        handler(t) {
                            this._preventClick = null,
                                !(!Kt(t) || Jt(this._showState) || this.$el.disabled) && (_(this.$el, "focus"),
                                    ht(document, jt, () => _(this.$el, "blur"), !0, e => !et(e.target, this.$el)),
                                    S(this.mode, "click") && (this._preventClick = !0))
                        }
                    }, {
                        name: `mouseenter mouseleave ${fe} ${Ze} focus blur`,
                        filter() {
                            return S(this.mode, "hover")
                        },
                        handler(t) {
                            if (Kt(t) || this.$el.disabled)
                                return;
                            const e = S(["mouseenter", fe, "focus"], t.type)
                                , i = this.isToggled(this.target);
                            if (!e && (!Jt(this._showState) || t.type !== "blur" && q(this.$el, ":focus") || t.type === "blur" && q(this.$el, ":hover"))) {
                                i === this._showState && (this._showState = null);
                                return
                            }
                            e && Jt(this._showState) && i !== this._showState || (this._showState = e ? i : null,
                                this.toggle(`toggle${e ? "show" : "hide"}`))
                        }
                    }, {
                        name: "keydown",
                        filter() {
                            return S(this.mode, "click") && !vt(this.$el, "input")
                        },
                        handler(t) {
                            t.keyCode === wu && (t.preventDefault(),
                                this.$el.click())
                        }
                    }, {
                        name: "click",
                        filter() {
                            return ["click", "hover"].some(t => S(this.mode, t))
                        },
                        handler(t) {
                            let e;
                            (this._preventClick || pt(t.target, 'a[href="#"], a[href=""]') || (e = pt(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && q(this.target, e.hash))) && t.preventDefault(),
                                !this._preventClick && S(this.mode, "click") && this.toggle()
                        }
                    }, {
                        name: "mediachange",
                        filter() {
                            return S(this.mode, "media")
                        },
                        el() {
                            return this.target
                        },
                        handler(t, e) {
                            e.matches ^ this.isToggled(this.target) && this.toggle()
                        }
                    }],
                    methods: {
                        async toggle(t) {
                            if (!_(this.target, t || "toggle", [this]))
                                return;
                            if (Wt(this.$el, "aria-expanded") && C(this.$el, "aria-expanded", !this.isToggled(this.target)),
                                !this.queued)
                                return this.toggleElement(this.target);
                            const e = this.target.filter(n => X(n, this.clsLeave));
                            if (e.length) {
                                for (const n of this.target) {
                                    const s = S(e, n);
                                    this.toggleElement(n, s, s)
                                }
                                return
                            }
                            const i = this.target.filter(this.isToggled);
                            await this.toggleElement(i, !1) && await this.toggleElement(this.target.filter(n => !S(i, n)), !0)
                        }
                    }
                }
                    , yu = Object.freeze({
                        __proto__: null,
                        Accordion: ro,
                        Alert: Wc,
                        Close: Dh,
                        Cover: Jc,
                        Drop: lo,
                        DropParentIcon: we,
                        Dropdown: lo,
                        Dropnav: co,
                        FormCustom: eh,
                        Grid: ih,
                        HeightMatch: rh,
                        HeightViewport: lh,
                        Icon: ss,
                        Img: qh,
                        Leader: Gh,
                        Margin: rr,
                        Marker: Bh,
                        Modal: Yh,
                        Nav: Qh,
                        NavParentIcon: Ih,
                        Navbar: tu,
                        NavbarParentIcon: we,
                        NavbarToggleIcon: Nh,
                        Offcanvas: eu,
                        OverflowAuto: su,
                        OverlayIcon: we,
                        PaginationNext: Mh,
                        PaginationPrevious: Lh,
                        Responsive: ru,
                        Scroll: ou,
                        Scrollspy: cu,
                        ScrollspyNav: hu,
                        SearchIcon: _h,
                        SlidenavNext: mo,
                        SlidenavPrevious: mo,
                        Spinner: Rh,
                        Sticky: uu,
                        Svg: fu,
                        Switcher: So,
                        Tab: vu,
                        Toggle: bu,
                        Totop: Fh,
                        Video: oo
                    });
                return Qt(yu, (t, e) => Ft.component(e, t)),
                    Lc(Ft),
                    Qt(Mc, (t, e) => Ft.component(e, t)),
                    Ft
            })
        }(rn)),
        rn.exports
}
var ed = td();
const id = Zf(ed);
id.container = ".uk-scope";
