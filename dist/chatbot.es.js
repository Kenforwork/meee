import je, { useState as G, useEffect as ke } from "react";
var K = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Ce() {
  if (Ee) return R;
  Ee = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function h(E, u, f) {
    var v = null;
    if (f !== void 0 && (v = "" + f), u.key !== void 0 && (v = "" + u.key), "key" in u) {
      f = {};
      for (var b in u)
        b !== "key" && (f[b] = u[b]);
    } else f = u;
    return u = f.ref, {
      $$typeof: c,
      type: E,
      key: v,
      ref: u !== void 0 ? u : null,
      props: f
    };
  }
  return R.Fragment = d, R.jsx = h, R.jsxs = h, R;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Se() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === _e ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case $:
          return "Fragment";
        case ye:
          return "Portal";
        case Q:
          return "Profiler";
        case Z:
          return "StrictMode";
        case U:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case ee:
            return (e.displayName || "Context") + ".Provider";
          case D:
            return (e._context.displayName || "Context") + ".Consumer";
          case W:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case I:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function h(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function E() {
    }
    function u() {
      if (S === 0) {
        oe = console.log, ne = console.info, ae = console.warn, le = console.error, se = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: E,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      S++;
    }
    function f() {
      if (S--, S === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: _({}, e, { value: oe }),
          info: _({}, e, { value: ne }),
          warn: _({}, e, { value: ae }),
          error: _({}, e, { value: le }),
          group: _({}, e, { value: se }),
          groupCollapsed: _({}, e, { value: ie }),
          groupEnd: _({}, e, { value: ue })
        });
      }
      0 > S && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function v(e) {
      if (V === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          V = r && r[1] || "", ce = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + V + e + ce;
    }
    function b(e, r) {
      if (!e || q) return "";
      var t = F.get(e);
      if (t !== void 0) return t;
      q = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = x.H, x.H = null, u();
      try {
        var s = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var p = function() {
                  throw Error();
                };
                if (Object.defineProperty(p.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(p, []);
                  } catch (m) {
                    var N = m;
                  }
                  Reflect.construct(e, [], p);
                } else {
                  try {
                    p.call();
                  } catch (m) {
                    N = m;
                  }
                  e.call(p.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (m) {
                  N = m;
                }
                (p = e()) && typeof p.catch == "function" && p.catch(function() {
                });
              }
            } catch (m) {
              if (m && N && typeof m.stack == "string")
                return [m.stack, N.stack];
            }
            return [null, null];
          }
        };
        s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          s.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          s.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = s.DetermineComponentFrameRoot(), g = o[0], j = o[1];
        if (g && j) {
          var i = g.split(`
`), w = j.split(`
`);
          for (o = a = 0; a < i.length && !i[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < w.length && !w[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === i.length || o === w.length)
            for (a = i.length - 1, o = w.length - 1; 1 <= a && 0 <= o && i[a] !== w[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (i[a] !== w[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || i[a] !== w[o]) {
                    var A = `
` + i[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && F.set(e, A), A;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        q = !1, x.H = n, f(), Error.prepareStackTrace = t;
      }
      return i = (i = e ? e.displayName || e.name : "") ? v(i) : "", typeof e == "function" && F.set(e, i), i;
    }
    function k(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return b(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return v(e);
      switch (e) {
        case U:
          return v("Suspense");
        case z:
          return v("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            return e = b(e.render, !1), e;
          case B:
            return k(e.type);
          case I:
            r = e._payload, e = e._init;
            try {
              return k(e(r));
            } catch {
            }
        }
      return "";
    }
    function C() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function l(e) {
      if (te.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, r) {
      function t() {
        fe || (fe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function P() {
      var e = c(this.type);
      return de[e] || (de[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function me(e, r, t, n, s, a) {
      return t = a.ref, e = {
        $$typeof: M,
        type: e,
        key: r,
        props: a,
        _owner: s
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: P
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function H(e, r, t, n, s, a) {
      if (typeof e == "string" || typeof e == "function" || e === $ || e === Q || e === Z || e === U || e === z || e === xe || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === B || e.$$typeof === ee || e.$$typeof === D || e.$$typeof === W || e.$$typeof === we || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                X(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === M ? (n = "<" + (c(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (te.call(r, "key")) {
        o = c(e);
        var g = Object.keys(r).filter(function(i) {
          return i !== "key";
        });
        n = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", ve[o + n] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          g,
          o
        ), ve[o + n] = !0);
      }
      if (o = null, t !== void 0 && (h(t), o = "" + t), l(r) && (h(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var j in r)
          j !== "key" && (t[j] = r[j]);
      } else t = r;
      return o && y(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), me(e, o, a, s, C(), t);
    }
    function X(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Te) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Y(n) && L(n, r);
          }
        else if (Y(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = re && e[re] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            Y(e.value) && L(e.value, r);
      }
    }
    function Y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === M;
    }
    function L(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = pe(r), !be[r])) {
        be[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== C() && (t = null, typeof e._owner.tag == "number" ? t = c(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = x.getCurrentStack;
        x.getCurrentStack = function() {
          var s = k(e.type);
          return n && (s += n() || ""), s;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), x.getCurrentStack = n;
      }
    }
    function pe(e) {
      var r = "", t = C();
      return t && (t = c(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = c(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var he = je, M = Symbol.for("react.transitional.element"), ye = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), re = Symbol.iterator, _e = Symbol.for("react.client.reference"), x = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, _ = Object.assign, we = Symbol.for("react.client.reference"), J = Array.isArray, S = 0, oe, ne, ae, le, se, ie, ue;
    E.__reactDisabledLog = !0;
    var V, ce, q = !1, F = new (typeof WeakMap == "function" ? WeakMap : Map)(), Te = Symbol.for("react.client.reference"), fe, de = {}, ve = {}, be = {};
    O.Fragment = $, O.jsx = function(e, r, t, n, s) {
      return H(e, r, t, !1, n, s);
    }, O.jsxs = function(e, r, t, n, s) {
      return H(e, r, t, !0, n, s);
    };
  }()), O;
}
process.env.NODE_ENV === "production" ? K.exports = Ce() : K.exports = Se();
var T = K.exports;
const Re = ({ apiBase: c }) => {
  const [d, h] = G(localStorage.getItem("chatbot_api_key") || ""), [E, u] = G(""), [f, v] = G([]);
  ke(() => {
    d || alert("請先設定 API Key！");
  }, [d]);
  const b = (l, y = !1) => {
    v((P) => [
      ...P,
      { text: l, isUser: y }
    ]);
  }, k = () => {
    const l = prompt("請輸入您的 API Key：", d);
    l && (h(l), localStorage.setItem("chatbot_api_key", l), alert("API Key 設定成功！"));
  }, C = async () => {
    if (!(!E.trim() || !d)) {
      b(E, !0), u("");
      try {
        const y = await (await fetch(`${c}/chatbot`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${d}`
          },
          body: JSON.stringify({ message: E })
        })).json();
        b(y.reply || "🤖 無法獲取回應");
      } catch {
        b("❌ API 錯誤，請稍後再試");
      }
    }
  };
  return /* @__PURE__ */ T.jsxs("div", { style: { position: "fixed", bottom: 20, right: 20, width: 300, height: 400, background: "white", borderRadius: 10, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden" }, children: [
    /* @__PURE__ */ T.jsx(
      "button",
      {
        style: { padding: 5, background: "#007BFF", color: "white", border: "none", cursor: "pointer", textAlign: "center", width: "100%" },
        onClick: k,
        children: "🔑 設定 API Key"
      }
    ),
    /* @__PURE__ */ T.jsx("div", { style: { flex: 1, overflowY: "auto", padding: 10 }, children: f.map((l, y) => /* @__PURE__ */ T.jsx(
      "div",
      {
        style: {
          padding: 5,
          margin: 5,
          borderRadius: 5,
          maxWidth: "80%",
          alignSelf: l.isUser ? "flex-end" : "flex-start",
          background: l.isUser ? "#007BFF" : "#f1f1f1",
          color: l.isUser ? "white" : "black"
        },
        children: l.text
      },
      y
    )) }),
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", borderTop: "1px solid #ddd", padding: 5 }, children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "text",
          value: E,
          onChange: (l) => u(l.target.value),
          placeholder: "輸入訊息...",
          style: { flex: 1, padding: 5, border: "none" }
        }
      ),
      /* @__PURE__ */ T.jsx(
        "button",
        {
          onClick: C,
          style: { padding: 5, background: "blue", color: "white", border: "none", cursor: "pointer" },
          children: "發送"
        }
      )
    ] })
  ] });
};
export {
  Re as default
};
