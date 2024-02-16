(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bu = { exports: {} },
  sl = {},
  es = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var er = Symbol.for("react.element"),
  _c = Symbol.for("react.portal"),
  kc = Symbol.for("react.fragment"),
  Sc = Symbol.for("react.strict_mode"),
  xc = Symbol.for("react.profiler"),
  Ec = Symbol.for("react.provider"),
  Cc = Symbol.for("react.context"),
  Nc = Symbol.for("react.forward_ref"),
  jc = Symbol.for("react.suspense"),
  Pc = Symbol.for("react.memo"),
  zc = Symbol.for("react.lazy"),
  Ho = Symbol.iterator;
function Lc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ho && e[Ho]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ns = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ts = Object.assign,
  rs = {};
function at(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = rs),
    (this.updater = t || ns);
}
at.prototype.isReactComponent = {};
at.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
at.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ls() {}
ls.prototype = at.prototype;
function Ki(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = rs),
    (this.updater = t || ns);
}
var Yi = (Ki.prototype = new ls());
Yi.constructor = Ki;
ts(Yi, at.prototype);
Yi.isPureReactComponent = !0;
var Ao = Array.isArray,
  is = Object.prototype.hasOwnProperty,
  Xi = { current: null },
  os = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      is.call(n, r) && !os.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: er,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Xi.current,
  };
}
function Tc(e, n) {
  return {
    $$typeof: er,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er;
}
function Rc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Wo = /\/+/g;
function jl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rc("" + e.key)
    : n.toString(36);
}
function Nr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case er:
          case _c:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + jl(o, 0) : r),
      Ao(l)
        ? ((t = ""),
          e != null && (t = e.replace(Wo, "$&/") + "/"),
          Nr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Gi(l) &&
            (l = Tc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Wo, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ao(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + jl(i, u);
      o += Nr(i, n, t, s, l);
    }
  else if (((s = Lc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + jl(i, u++)), (o += Nr(i, n, t, s, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ur(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Nr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function Oc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  jr = { transition: null },
  Mc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: jr,
    ReactCurrentOwner: Xi,
  };
L.Children = {
  map: ur,
  forEach: function (e, n, t) {
    ur(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      ur(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      ur(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = at;
L.Fragment = kc;
L.Profiler = xc;
L.PureComponent = Ki;
L.StrictMode = Sc;
L.Suspense = jc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mc;
L.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ts({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Xi.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      is.call(n, s) &&
        !os.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: er, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ec, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = us;
L.createFactory = function (e) {
  var n = us.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Nc, render: e };
};
L.isValidElement = Gi;
L.lazy = function (e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: Oc };
};
L.memo = function (e, n) {
  return { $$typeof: Pc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = jr.transition;
  jr.transition = {};
  try {
    e();
  } finally {
    jr.transition = n;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.2.0";
es.exports = L;
var Gn = es.exports;
const ln = wc(Gn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic = Gn,
  Dc = Symbol.for("react.element"),
  Fc = Symbol.for("react.fragment"),
  Uc = Object.prototype.hasOwnProperty,
  $c = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Uc.call(n, r) && !Bc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Dc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: $c.current,
  };
}
sl.Fragment = Fc;
sl.jsx = ss;
sl.jsxs = ss;
bu.exports = sl;
var m = bu.exports,
  bl = {},
  as = { exports: {} },
  ge = {},
  cs = { exports: {} },
  fs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, P) {
    var z = E.length;
    E.push(P);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        G = E[W];
      if (0 < l(G, P)) (E[W] = P), (E[z] = G), (z = W);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      z = E.pop();
    if (z !== P) {
      E[0] = z;
      e: for (var W = 0, G = E.length, ir = G >>> 1; W < ir; ) {
        var _n = 2 * (W + 1) - 1,
          Nl = E[_n],
          kn = _n + 1,
          or = E[kn];
        if (0 > l(Nl, z))
          kn < G && 0 > l(or, Nl)
            ? ((E[W] = or), (E[kn] = z), (W = kn))
            : ((E[W] = Nl), (E[_n] = z), (W = _n));
        else if (kn < G && 0 > l(or, z)) (E[W] = or), (E[kn] = z), (W = kn);
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var z = E.sortIndex - P.sortIndex;
    return z !== 0 ? z : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    p = 3,
    w = !1,
    _ = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var P = t(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= E)
        r(c), (P.sortIndex = P.expirationTime), n(s, P);
      else break;
      P = t(c);
    }
  }
  function y(E) {
    if (((k = !1), d(E), !_))
      if (t(s) !== null) (_ = !0), El(x);
      else {
        var P = t(c);
        P !== null && Cl(y, P.startTime - E);
      }
  }
  function x(E, P) {
    (_ = !1), k && ((k = !1), f(j), (j = -1)), (w = !0);
    var z = p;
    try {
      for (
        d(P), h = t(s);
        h !== null && (!(h.expirationTime > P) || (E && !Ne()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var G = W(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === t(s) && r(s),
            d(P);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var ir = !0;
      else {
        var _n = t(c);
        _n !== null && Cl(y, _n.startTime - P), (ir = !1);
      }
      return ir;
    } finally {
      (h = null), (p = z), (w = !1);
    }
  }
  var C = !1,
    N = null,
    j = -1,
    A = 5,
    T = -1;
  function Ne() {
    return !(e.unstable_now() - T < A);
  }
  function pt() {
    if (N !== null) {
      var E = e.unstable_now();
      T = E;
      var P = !0;
      try {
        P = N(!0, E);
      } finally {
        P ? ht() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var ht;
  if (typeof a == "function")
    ht = function () {
      a(pt);
    };
  else if (typeof MessageChannel < "u") {
    var Vo = new MessageChannel(),
      gc = Vo.port2;
    (Vo.port1.onmessage = pt),
      (ht = function () {
        gc.postMessage(null);
      });
  } else
    ht = function () {
      F(pt, 0);
    };
  function El(E) {
    (N = E), C || ((C = !0), ht());
  }
  function Cl(E, P) {
    j = F(function () {
      E(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || w || ((_ = !0), El(x));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var z = p;
      p = P;
      try {
        return E();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = p;
      p = E;
      try {
        return P();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
          : (z = W),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (E = {
          id: v++,
          callback: P,
          priorityLevel: E,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > W
          ? ((E.sortIndex = z),
            n(c, E),
            t(s) === null &&
              E === t(c) &&
              (k ? (f(j), (j = -1)) : (k = !0), Cl(y, z - W)))
          : ((E.sortIndex = G), n(s, E), _ || w || ((_ = !0), El(x))),
        E
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (E) {
      var P = p;
      return function () {
        var z = p;
        p = P;
        try {
          return E.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(fs);
cs.exports = fs;
var Vc = cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ds = Gn,
  ye = Vc;
function g(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ps = new Set(),
  Ft = {};
function Mn(e, n) {
  tt(e, n), tt(e + "Capture", n);
}
function tt(e, n) {
  for (Ft[e] = n, e = 0; e < n.length; e++) ps.add(n[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ei = Object.prototype.hasOwnProperty,
  Hc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qo = {},
  Ko = {};
function Ac(e) {
  return ei.call(Ko, e)
    ? !0
    : ei.call(Qo, e)
    ? !1
    : Hc.test(e)
    ? (Ko[e] = !0)
    : ((Qo[e] = !0), !1);
}
function Wc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Qc(e, n, t, r) {
  if (n === null || typeof n > "u" || Wc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zi = /[\-:]([a-z])/g;
function Ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Zi, Ji);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Zi, Ji);
    ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Zi, Ji);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qi(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Qc(n, t, l, r) && (t = null),
    r || l === null
      ? Ac(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sr = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  bi = Symbol.for("react.strict_mode"),
  ni = Symbol.for("react.profiler"),
  hs = Symbol.for("react.provider"),
  ms = Symbol.for("react.context"),
  eo = Symbol.for("react.forward_ref"),
  ti = Symbol.for("react.suspense"),
  ri = Symbol.for("react.suspense_list"),
  no = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  vs = Symbol.for("react.offscreen"),
  Yo = Symbol.iterator;
function mt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yo && e[Yo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Pl;
function Et(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Pl = (n && n[1]) || "";
    }
  return (
    `
` +
    Pl +
    e
  );
}
var zl = !1;
function Ll(e, n) {
  if (!e || zl) return "";
  zl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? Et(e) : "";
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return Et(e.type);
    case 16:
      return Et("Lazy");
    case 13:
      return Et("Suspense");
    case 19:
      return Et("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ll(e.type, !1)), e;
    case 11:
      return (e = Ll(e.type.render, !1)), e;
    case 1:
      return (e = Ll(e.type, !0)), e;
    default:
      return "";
  }
}
function li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case Fn:
      return "Portal";
    case ni:
      return "Profiler";
    case bi:
      return "StrictMode";
    case ti:
      return "Suspense";
    case ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ms:
        return (e.displayName || "Context") + ".Consumer";
      case hs:
        return (e._context.displayName || "Context") + ".Provider";
      case eo:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case no:
        return (
          (n = e.displayName || null), n !== null ? n : li(e.type) || "Memo"
        );
      case qe:
        (n = e._payload), (e = e._init);
        try {
          return li(e(n));
        } catch {}
    }
  return null;
}
function Yc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return li(n);
    case 8:
      return n === bi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ys(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Xc(e) {
  var n = ys(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = Xc(e));
}
function gs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = ys(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Ur(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ii(e, n) {
  var t = n.checked;
  return V({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Xo(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = mn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function ws(e, n) {
  (n = n.checked), n != null && qi(e, "checked", n, !1);
}
function oi(e, n) {
  ws(e, n);
  var t = mn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ui(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ui(e, n.type, mn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Go(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function ui(e, n, t) {
  (n !== "number" || Ur(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Ct = Array.isArray;
function Zn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + mn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function si(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(g(92));
      if (Ct(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: mn(t) };
}
function _s(e, n) {
  var t = mn(n.value),
    r = mn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Jo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ks(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ai(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ks(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var cr,
  Ss = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        cr = cr || document.createElement("div"),
          cr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Ut(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Pt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pt).forEach(function (e) {
  Gc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Pt[n] = Pt[e]);
  });
});
function xs(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Pt.hasOwnProperty(e) && Pt[e])
    ? ("" + n).trim()
    : n + "px";
}
function Es(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = xs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Zc = V(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function ci(e, n) {
  if (n) {
    if (Zc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function fi(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var di = null;
function to(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pi = null,
  Jn = null,
  qn = null;
function qo(e) {
  if ((e = rr(e))) {
    if (typeof pi != "function") throw Error(g(280));
    var n = e.stateNode;
    n && ((n = pl(n)), pi(e.stateNode, e.type, n));
  }
}
function Cs(e) {
  Jn ? (qn ? qn.push(e) : (qn = [e])) : (Jn = e);
}
function Ns() {
  if (Jn) {
    var e = Jn,
      n = qn;
    if (((qn = Jn = null), qo(e), n)) for (e = 0; e < n.length; e++) qo(n[e]);
  }
}
function js(e, n) {
  return e(n);
}
function Ps() {}
var Tl = !1;
function zs(e, n, t) {
  if (Tl) return e(n, t);
  Tl = !0;
  try {
    return js(e, n, t);
  } finally {
    (Tl = !1), (Jn !== null || qn !== null) && (Ps(), Ns());
  }
}
function $t(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = pl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(g(231, n, typeof t));
  return t;
}
var hi = !1;
if (Qe)
  try {
    var vt = {};
    Object.defineProperty(vt, "passive", {
      get: function () {
        hi = !0;
      },
    }),
      window.addEventListener("test", vt, vt),
      window.removeEventListener("test", vt, vt);
  } catch {
    hi = !1;
  }
function Jc(e, n, t, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (v) {
    this.onError(v);
  }
}
var zt = !1,
  $r = null,
  Br = !1,
  mi = null,
  qc = {
    onError: function (e) {
      (zt = !0), ($r = e);
    },
  };
function bc(e, n, t, r, l, i, o, u, s) {
  (zt = !1), ($r = null), Jc.apply(qc, arguments);
}
function ef(e, n, t, r, l, i, o, u, s) {
  if ((bc.apply(this, arguments), zt)) {
    if (zt) {
      var c = $r;
      (zt = !1), ($r = null);
    } else throw Error(g(198));
    Br || ((Br = !0), (mi = c));
  }
}
function In(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Ls(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function bo(e) {
  if (In(e) !== e) throw Error(g(188));
}
function nf(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = In(e)), n === null)) throw Error(g(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return bo(l), e;
        if (i === r) return bo(l), n;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function Ts(e) {
  return (e = nf(e)), e !== null ? Rs(e) : null;
}
function Rs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Rs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Os = ye.unstable_scheduleCallback,
  eu = ye.unstable_cancelCallback,
  tf = ye.unstable_shouldYield,
  rf = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  lf = ye.unstable_getCurrentPriorityLevel,
  ro = ye.unstable_ImmediatePriority,
  Ms = ye.unstable_UserBlockingPriority,
  Vr = ye.unstable_NormalPriority,
  of = ye.unstable_LowPriority,
  Is = ye.unstable_IdlePriority,
  al = null,
  Ue = null;
function uf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : cf,
  sf = Math.log,
  af = Math.LN2;
function cf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sf(e) / af) | 0)) | 0;
}
var fr = 64,
  dr = 4194304;
function Nt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Nt(u)) : ((i &= o), i !== 0 && (r = Nt(i)));
  } else (o = t & ~l), o !== 0 ? (r = Nt(o)) : i !== 0 && (r = Nt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Te(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function ff(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function df(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & t) || u & r) && (l[o] = ff(u, n))
      : s <= n && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function vi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ds() {
  var e = fr;
  return (fr <<= 1), !(fr & 4194240) && (fr = 64), e;
}
function Rl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function nr(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Te(n)),
    (e[n] = t);
}
function pf(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Te(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function lo(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Te(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function Fs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Us,
  io,
  $s,
  Bs,
  Vs,
  yi = !1,
  pr = [],
  on = null,
  un = null,
  sn = null,
  Bt = new Map(),
  Vt = new Map(),
  en = [],
  hf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function nu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      un = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Bt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vt.delete(n.pointerId);
  }
}
function yt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = rr(n)), n !== null && io(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function mf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (on = yt(on, e, n, t, r, l)), !0;
    case "dragenter":
      return (un = yt(un, e, n, t, r, l)), !0;
    case "mouseover":
      return (sn = yt(sn, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Bt.set(i, yt(Bt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vt.set(i, yt(Vt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Hs(e) {
  var n = En(e.target);
  if (n !== null) {
    var t = In(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Ls(t)), n !== null)) {
          (e.blockedOn = n),
            Vs(e.priority, function () {
              $s(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = gi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (di = r), t.target.dispatchEvent(r), (di = null);
    } else return (n = rr(t)), n !== null && io(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function tu(e, n, t) {
  Pr(e) && t.delete(n);
}
function vf() {
  (yi = !1),
    on !== null && Pr(on) && (on = null),
    un !== null && Pr(un) && (un = null),
    sn !== null && Pr(sn) && (sn = null),
    Bt.forEach(tu),
    Vt.forEach(tu);
}
function gt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    yi ||
      ((yi = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, vf)));
}
function Ht(e) {
  function n(l) {
    return gt(l, e);
  }
  if (0 < pr.length) {
    gt(pr[0], e);
    for (var t = 1; t < pr.length; t++) {
      var r = pr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && gt(on, e),
      un !== null && gt(un, e),
      sn !== null && gt(sn, e),
      Bt.forEach(n),
      Vt.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    Hs(t), t.blockedOn === null && en.shift();
}
var bn = Ge.ReactCurrentBatchConfig,
  Ar = !0;
function yf(e, n, t, r) {
  var l = O,
    i = bn.transition;
  bn.transition = null;
  try {
    (O = 1), oo(e, n, t, r);
  } finally {
    (O = l), (bn.transition = i);
  }
}
function gf(e, n, t, r) {
  var l = O,
    i = bn.transition;
  bn.transition = null;
  try {
    (O = 4), oo(e, n, t, r);
  } finally {
    (O = l), (bn.transition = i);
  }
}
function oo(e, n, t, r) {
  if (Ar) {
    var l = gi(e, n, t, r);
    if (l === null) Hl(e, n, r, Wr, t), nu(e, r);
    else if (mf(l, e, n, t, r)) r.stopPropagation();
    else if ((nu(e, r), n & 4 && -1 < hf.indexOf(e))) {
      for (; l !== null; ) {
        var i = rr(l);
        if (
          (i !== null && Us(i),
          (i = gi(e, n, t, r)),
          i === null && Hl(e, n, r, Wr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, n, r, null, t);
  }
}
var Wr = null;
function gi(e, n, t, r) {
  if (((Wr = null), (e = to(r)), (e = En(e)), e !== null))
    if (((n = In(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Ls(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Wr = e), null;
}
function As(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (lf()) {
        case ro:
          return 1;
        case Ms:
          return 4;
        case Vr:
        case of:
          return 16;
        case Is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  uo = null,
  zr = null;
function Ws() {
  if (zr) return zr;
  var e,
    n = uo,
    t = n.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (zr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Lr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hr() {
  return !0;
}
function ru() {
  return !1;
}
function we(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? hr
        : ru),
      (this.isPropagationStopped = ru),
      this
    );
  }
  return (
    V(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = hr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = hr));
      },
      persist: function () {},
      isPersistent: hr,
    }),
    n
  );
}
var ct = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  so = we(ct),
  tr = V({}, ct, { view: 0, detail: 0 }),
  wf = we(tr),
  Ol,
  Ml,
  wt,
  cl = V({}, tr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ao,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wt &&
            (wt && e.type === "mousemove"
              ? ((Ol = e.screenX - wt.screenX), (Ml = e.screenY - wt.screenY))
              : (Ml = Ol = 0),
            (wt = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  lu = we(cl),
  _f = V({}, cl, { dataTransfer: 0 }),
  kf = we(_f),
  Sf = V({}, tr, { relatedTarget: 0 }),
  Il = we(Sf),
  xf = V({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ef = we(xf),
  Cf = V({}, ct, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nf = we(Cf),
  jf = V({}, ct, { data: 0 }),
  iu = we(jf),
  Pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Tf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Lf[e]) ? !!n[e] : !1;
}
function ao() {
  return Tf;
}
var Rf = V({}, tr, {
    key: function (e) {
      if (e.key) {
        var n = Pf[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Lr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ao,
    charCode: function (e) {
      return e.type === "keypress" ? Lr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Lr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Of = we(Rf),
  Mf = V({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ou = we(Mf),
  If = V({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ao,
  }),
  Df = we(If),
  Ff = V({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uf = we(Ff),
  $f = V({}, cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Bf = we($f),
  Vf = [9, 13, 27, 32],
  co = Qe && "CompositionEvent" in window,
  Lt = null;
Qe && "documentMode" in document && (Lt = document.documentMode);
var Hf = Qe && "TextEvent" in window && !Lt,
  Qs = Qe && (!co || (Lt && 8 < Lt && 11 >= Lt)),
  uu = " ",
  su = !1;
function Ks(e, n) {
  switch (e) {
    case "keyup":
      return Vf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ys(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $n = !1;
function Af(e, n) {
  switch (e) {
    case "compositionend":
      return Ys(n);
    case "keypress":
      return n.which !== 32 ? null : ((su = !0), uu);
    case "textInput":
      return (e = n.data), e === uu && su ? null : e;
    default:
      return null;
  }
}
function Wf(e, n) {
  if ($n)
    return e === "compositionend" || (!co && Ks(e, n))
      ? ((e = Ws()), (zr = uo = tn = null), ($n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Qs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Qf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function au(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Qf[e.type] : n === "textarea";
}
function Xs(e, n, t, r) {
  Cs(r),
    (n = Qr(n, "onChange")),
    0 < n.length &&
      ((t = new so("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Tt = null,
  At = null;
function Kf(e) {
  ia(e, 0);
}
function fl(e) {
  var n = Hn(e);
  if (gs(n)) return e;
}
function Yf(e, n) {
  if (e === "change") return n;
}
var Gs = !1;
if (Qe) {
  var Dl;
  if (Qe) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"),
        (Fl = typeof cu.oninput == "function");
    }
    Dl = Fl;
  } else Dl = !1;
  Gs = Dl && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  Tt && (Tt.detachEvent("onpropertychange", Zs), (At = Tt = null));
}
function Zs(e) {
  if (e.propertyName === "value" && fl(At)) {
    var n = [];
    Xs(n, At, e, to(e)), zs(Kf, n);
  }
}
function Xf(e, n, t) {
  e === "focusin"
    ? (fu(), (Tt = n), (At = t), Tt.attachEvent("onpropertychange", Zs))
    : e === "focusout" && fu();
}
function Gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(At);
}
function Zf(e, n) {
  if (e === "click") return fl(n);
}
function Jf(e, n) {
  if (e === "input" || e === "change") return fl(n);
}
function qf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Oe = typeof Object.is == "function" ? Object.is : qf;
function Wt(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!ei.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, n) {
  var t = du(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = du(t);
  }
}
function Js(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Js(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function qs() {
  for (var e = window, n = Ur(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ur(e.document);
  }
  return n;
}
function fo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function bf(e) {
  var n = qs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Js(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && fo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = pu(t, i));
        var o = pu(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ed = Qe && "documentMode" in document && 11 >= document.documentMode,
  Bn = null,
  wi = null,
  Rt = null,
  _i = !1;
function hu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  _i ||
    Bn == null ||
    Bn !== Ur(r) ||
    ((r = Bn),
    "selectionStart" in r && fo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Rt && Wt(Rt, r)) ||
      ((Rt = r),
      (r = Qr(wi, "onSelect")),
      0 < r.length &&
        ((n = new so("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Bn))));
}
function mr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Vn = {
    animationend: mr("Animation", "AnimationEnd"),
    animationiteration: mr("Animation", "AnimationIteration"),
    animationstart: mr("Animation", "AnimationStart"),
    transitionend: mr("Transition", "TransitionEnd"),
  },
  Ul = {},
  bs = {};
Qe &&
  ((bs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function dl(e) {
  if (Ul[e]) return Ul[e];
  if (!Vn[e]) return e;
  var n = Vn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in bs) return (Ul[e] = n[t]);
  return e;
}
var ea = dl("animationend"),
  na = dl("animationiteration"),
  ta = dl("animationstart"),
  ra = dl("transitionend"),
  la = new Map(),
  mu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yn(e, n) {
  la.set(e, n), Mn(n, [e]);
}
for (var $l = 0; $l < mu.length; $l++) {
  var Bl = mu[$l],
    nd = Bl.toLowerCase(),
    td = Bl[0].toUpperCase() + Bl.slice(1);
  yn(nd, "on" + td);
}
yn(ea, "onAnimationEnd");
yn(na, "onAnimationIteration");
yn(ta, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(ra, "onTransitionEnd");
tt("onMouseEnter", ["mouseout", "mouseover"]);
tt("onMouseLeave", ["mouseout", "mouseover"]);
tt("onPointerEnter", ["pointerout", "pointerover"]);
tt("onPointerLeave", ["pointerout", "pointerover"]);
Mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));
function vu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), ef(r, n, void 0, e), (e.currentTarget = null);
}
function ia(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          vu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          vu(l, u, c), (i = s);
        }
    }
  }
  if (Br) throw ((e = mi), (Br = !1), (mi = null), e);
}
function I(e, n) {
  var t = n[Ci];
  t === void 0 && (t = n[Ci] = new Set());
  var r = e + "__bubble";
  t.has(r) || (oa(n, e, 2, !1), t.add(r));
}
function Vl(e, n, t) {
  var r = 0;
  n && (r |= 4), oa(t, e, r, n);
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Qt(e) {
  if (!e[vr]) {
    (e[vr] = !0),
      ps.forEach(function (t) {
        t !== "selectionchange" && (rd.has(t) || Vl(t, !1, e), Vl(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[vr] || ((n[vr] = !0), Vl("selectionchange", !1, n));
  }
}
function oa(e, n, t, r) {
  switch (As(n)) {
    case 1:
      var l = yf;
      break;
    case 4:
      l = gf;
      break;
    default:
      l = oo;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !hi ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Hl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = En(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  zs(function () {
    var c = i,
      v = to(t),
      h = [];
    e: {
      var p = la.get(e);
      if (p !== void 0) {
        var w = so,
          _ = e;
        switch (e) {
          case "keypress":
            if (Lr(t) === 0) break e;
          case "keydown":
          case "keyup":
            w = Of;
            break;
          case "focusin":
            (_ = "focus"), (w = Il);
            break;
          case "focusout":
            (_ = "blur"), (w = Il);
            break;
          case "beforeblur":
          case "afterblur":
            w = Il;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Df;
            break;
          case ea:
          case na:
          case ta:
            w = Ef;
            break;
          case ra:
            w = Uf;
            break;
          case "scroll":
            w = wf;
            break;
          case "wheel":
            w = Bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Nf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ou;
        }
        var k = (n & 4) !== 0,
          F = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = $t(a, f)), y != null && k.push(Kt(a, y, d)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new w(p, _, null, t, v)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p &&
            t !== di &&
            (_ = t.relatedTarget || t.fromElement) &&
            (En(_) || _[Ke]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((_ = t.relatedTarget || t.toElement),
              (w = c),
              (_ = _ ? En(_) : null),
              _ !== null &&
                ((F = In(_)), _ !== F || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((w = null), (_ = c)),
          w !== _)
        ) {
          if (
            ((k = lu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ou),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (F = w == null ? p : Hn(w)),
            (d = _ == null ? p : Hn(_)),
            (p = new k(y, a + "leave", w, t, v)),
            (p.target = F),
            (p.relatedTarget = d),
            (y = null),
            En(v) === c &&
              ((k = new k(f, a + "enter", _, t, v)),
              (k.target = d),
              (k.relatedTarget = F),
              (y = k)),
            (F = y),
            w && _)
          )
            n: {
              for (k = w, f = _, a = 0, d = k; d; d = Dn(d)) a++;
              for (d = 0, y = f; y; y = Dn(y)) d++;
              for (; 0 < a - d; ) (k = Dn(k)), a--;
              for (; 0 < d - a; ) (f = Dn(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break n;
                (k = Dn(k)), (f = Dn(f));
              }
              k = null;
            }
          else k = null;
          w !== null && yu(h, p, w, k, !1),
            _ !== null && F !== null && yu(h, F, _, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Hn(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var x = Yf;
        else if (au(p))
          if (Gs) x = Jf;
          else {
            x = Gf;
            var C = Xf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = Zf);
        if (x && (x = x(e, c))) {
          Xs(h, x, t, v);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            ui(p, "number", p.value);
      }
      switch (((C = c ? Hn(c) : window), e)) {
        case "focusin":
          (au(C) || C.contentEditable === "true") &&
            ((Bn = C), (wi = c), (Rt = null));
          break;
        case "focusout":
          Rt = wi = Bn = null;
          break;
        case "mousedown":
          _i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_i = !1), hu(h, t, v);
          break;
        case "selectionchange":
          if (ed) break;
        case "keydown":
        case "keyup":
          hu(h, t, v);
      }
      var N;
      if (co)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        $n
          ? Ks(e, t) && (j = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Qs &&
          t.locale !== "ko" &&
          ($n || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && $n && (N = Ws())
            : ((tn = v),
              (uo = "value" in tn ? tn.value : tn.textContent),
              ($n = !0))),
        (C = Qr(c, j)),
        0 < C.length &&
          ((j = new iu(j, e, null, t, v)),
          h.push({ event: j, listeners: C }),
          N ? (j.data = N) : ((N = Ys(t)), N !== null && (j.data = N)))),
        (N = Hf ? Af(e, t) : Wf(e, t)) &&
          ((c = Qr(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new iu("onBeforeInput", "beforeinput", null, t, v)),
            h.push({ event: v, listeners: c }),
            (v.data = N)));
    }
    ia(h, n);
  });
}
function Kt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Qr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = $t(e, t)),
      i != null && r.unshift(Kt(e, i, l)),
      (i = $t(e, n)),
      i != null && r.push(Kt(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = $t(t, i)), s != null && o.unshift(Kt(t, s, u)))
        : l || ((s = $t(t, i)), s != null && o.push(Kt(t, s, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var ld = /\r\n?/g,
  id = /\u0000|\uFFFD/g;
function gu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ld,
      `
`
    )
    .replace(id, "");
}
function yr(e, n, t) {
  if (((n = gu(n)), gu(e) !== n && t)) throw Error(g(425));
}
function Kr() {}
var ki = null,
  Si = null;
function xi(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Ei = typeof setTimeout == "function" ? setTimeout : void 0,
  od = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wu = typeof Promise == "function" ? Promise : void 0,
  ud =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wu < "u"
      ? function (e) {
          return wu.resolve(null).then(e).catch(sd);
        }
      : Ei;
function sd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ht(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ht(n);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ft = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + ft,
  Yt = "__reactProps$" + ft,
  Ke = "__reactContainer$" + ft,
  Ci = "__reactEvents$" + ft,
  ad = "__reactListeners$" + ft,
  cd = "__reactHandles$" + ft;
function En(e) {
  var n = e[Fe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ke] || t[Fe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((t = e[Fe])) return t;
          e = _u(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function rr(e) {
  return (
    (e = e[Fe] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function pl(e) {
  return e[Yt] || null;
}
var Ni = [],
  An = -1;
function gn(e) {
  return { current: e };
}
function D(e) {
  0 > An || ((e.current = Ni[An]), (Ni[An] = null), An--);
}
function M(e, n) {
  An++, (Ni[An] = e.current), (e.current = n);
}
var vn = {},
  le = gn(vn),
  fe = gn(!1),
  zn = vn;
function rt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Yr() {
  D(fe), D(le);
}
function ku(e, n, t) {
  if (le.current !== vn) throw Error(g(168));
  M(le, n), M(fe, t);
}
function ua(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, Yc(e) || "Unknown", l));
  return V({}, t, r);
}
function Xr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vn),
    (zn = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function Su(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t
    ? ((e = ua(e, n, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(fe),
      D(le),
      M(le, e))
    : D(fe),
    M(fe, t);
}
var Ve = null,
  hl = !1,
  Wl = !1;
function sa(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function fd(e) {
  (hl = !0), sa(e);
}
function wn() {
  if (!Wl && Ve !== null) {
    Wl = !0;
    var e = 0,
      n = O;
    try {
      var t = Ve;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (hl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Os(ro, wn), l);
    } finally {
      (O = n), (Wl = !1);
    }
  }
  return null;
}
var Wn = [],
  Qn = 0,
  Gr = null,
  Zr = 0,
  _e = [],
  ke = 0,
  Ln = null,
  He = 1,
  Ae = "";
function Sn(e, n) {
  (Wn[Qn++] = Zr), (Wn[Qn++] = Gr), (Gr = e), (Zr = n);
}
function aa(e, n, t) {
  (_e[ke++] = He), (_e[ke++] = Ae), (_e[ke++] = Ln), (Ln = e);
  var r = He;
  e = Ae;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Te(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Te(n) + l)) | (t << l) | r),
      (Ae = i + e);
  } else (He = (1 << i) | (t << l) | r), (Ae = e);
}
function po(e) {
  e.return !== null && (Sn(e, 1), aa(e, 1, 0));
}
function ho(e) {
  for (; e === Gr; )
    (Gr = Wn[--Qn]), (Wn[Qn] = null), (Zr = Wn[--Qn]), (Wn[Qn] = null);
  for (; e === Ln; )
    (Ln = _e[--ke]),
      (_e[ke] = null),
      (Ae = _e[--ke]),
      (_e[ke] = null),
      (He = _e[--ke]),
      (_e[ke] = null);
}
var ve = null,
  me = null,
  U = !1,
  Le = null;
function ca(e, n) {
  var t = Se(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function xu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ve = e), (me = an(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ve = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Ln !== null ? { id: He, overflow: Ae } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Se(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ve = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pi(e) {
  if (U) {
    var n = me;
    if (n) {
      var t = n;
      if (!xu(e, n)) {
        if (ji(e)) throw Error(g(418));
        n = an(t.nextSibling);
        var r = ve;
        n && xu(e, n)
          ? ca(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (ji(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function gr(e) {
  if (e !== ve) return !1;
  if (!U) return Eu(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !xi(e.type, e.memoizedProps))),
    n && (n = me))
  ) {
    if (ji(e)) throw (fa(), Error(g(418)));
    for (; n; ) ca(e, n), (n = an(n.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              me = an(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ve ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function fa() {
  for (var e = me; e; ) e = an(e.nextSibling);
}
function lt() {
  (me = ve = null), (U = !1);
}
function mo(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var dd = Ge.ReactCurrentBatchConfig;
function Pe(e, n) {
  if (e && e.defaultProps) {
    (n = V({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Jr = gn(null),
  qr = null,
  Kn = null,
  vo = null;
function yo() {
  vo = Kn = qr = null;
}
function go(e) {
  var n = Jr.current;
  D(Jr), (e._currentValue = n);
}
function zi(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function et(e, n) {
  (qr = e),
    (vo = Kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var n = e._currentValue;
  if (vo !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Kn === null)) {
      if (qr === null) throw Error(g(308));
      (Kn = e), (qr.dependencies = { lanes: 0, firstContext: e });
    } else Kn = Kn.next = e;
  return n;
}
var Cn = null;
function wo(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function da(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), wo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ye(e, r)
  );
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function _o(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pa(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ye(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), wo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ye(e, t)
  );
}
function Tr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), lo(e, t);
  }
}
function Cu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function br(e, n, t, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var _ = e,
            k = u;
          switch (((p = n), (w = t), k.tag)) {
            case 1:
              if (((_ = k.payload), typeof _ == "function")) {
                h = _.call(w, h, p);
                break e;
              }
              h = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = k.payload),
                (p = typeof _ == "function" ? _.call(w, h, p) : _),
                p == null)
              )
                break e;
              h = V({}, h, p);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = w), (s = h)) : (v = v.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Rn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Nu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var ha = new ds.Component().refs;
function Li(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : V({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = dn(e),
      i = We(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = cn(e, i, l)),
      n !== null && (Re(n, e, l, r), Tr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = dn(e),
      i = We(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = cn(e, i, l)),
      n !== null && (Re(n, e, l, r), Tr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = dn(e),
      l = We(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = cn(e, l, r)),
      n !== null && (Re(n, e, r, t), Tr(n, e, r));
  },
};
function ju(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Wt(t, r) || !Wt(l, i)
      : !0
  );
}
function ma(e, n, t) {
  var r = !1,
    l = vn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ee(i))
      : ((l = de(n) ? zn : le.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? rt(e, l) : vn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ml),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Pu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && ml.enqueueReplaceState(n, n.state, null);
}
function Ti(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ha), _o(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ee(i))
    : ((i = de(n) ? zn : le.current), (l.context = rt(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (Li(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && ml.enqueueReplaceState(l, l.state, null),
      br(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function _t(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            u === ha && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function wr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function zu(e) {
  var n = e._init;
  return n(e._payload);
}
function va(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = pn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Jl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var x = d.type;
    return x === Un
      ? v(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === qe &&
            zu(x) === a.type))
      ? ((y = l(a, d.props)), (y.ref = _t(f, a, d)), (y.return = f), y)
      : ((y = Fr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = _t(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = ql(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, y, x) {
    return a === null || a.tag !== 7
      ? ((a = Pn(d, f.mode, y, x)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Jl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case sr:
          return (
            (d = Fr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = _t(f, null, a)),
            (d.return = f),
            d
          );
        case Fn:
          return (a = ql(a, f.mode, d)), (a.return = f), a;
        case qe:
          var y = a._init;
          return h(f, y(a._payload), d);
      }
      if (Ct(a) || mt(a))
        return (a = Pn(a, f.mode, d, null)), (a.return = f), a;
      wr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var x = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return x !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case sr:
          return d.key === x ? s(f, a, d, y) : null;
        case Fn:
          return d.key === x ? c(f, a, d, y) : null;
        case qe:
          return (x = d._init), p(f, a, x(d._payload), y);
      }
      if (Ct(d) || mt(d)) return x !== null ? null : v(f, a, d, y, null);
      wr(f, d);
    }
    return null;
  }
  function w(f, a, d, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(a, f, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case sr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, x);
        case Fn:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, x);
        case qe:
          var C = y._init;
          return w(f, a, d, C(y._payload), x);
      }
      if (Ct(y) || mt(y)) return (f = f.get(d) || null), v(a, f, y, x, null);
      wr(a, y);
    }
    return null;
  }
  function _(f, a, d, y) {
    for (
      var x = null, C = null, N = a, j = (a = 0), A = null;
      N !== null && j < d.length;
      j++
    ) {
      N.index > j ? ((A = N), (N = null)) : (A = N.sibling);
      var T = p(f, N, d[j], y);
      if (T === null) {
        N === null && (N = A);
        break;
      }
      e && N && T.alternate === null && n(f, N),
        (a = i(T, a, j)),
        C === null ? (x = T) : (C.sibling = T),
        (C = T),
        (N = A);
    }
    if (j === d.length) return t(f, N), U && Sn(f, j), x;
    if (N === null) {
      for (; j < d.length; j++)
        (N = h(f, d[j], y)),
          N !== null &&
            ((a = i(N, a, j)), C === null ? (x = N) : (C.sibling = N), (C = N));
      return U && Sn(f, j), x;
    }
    for (N = r(f, N); j < d.length; j++)
      (A = w(N, f, j, d[j], y)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? j : A.key),
          (a = i(A, a, j)),
          C === null ? (x = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        N.forEach(function (Ne) {
          return n(f, Ne);
        }),
      U && Sn(f, j),
      x
    );
  }
  function k(f, a, d, y) {
    var x = mt(d);
    if (typeof x != "function") throw Error(g(150));
    if (((d = x.call(d)), d == null)) throw Error(g(151));
    for (
      var C = (x = null), N = a, j = (a = 0), A = null, T = d.next();
      N !== null && !T.done;
      j++, T = d.next()
    ) {
      N.index > j ? ((A = N), (N = null)) : (A = N.sibling);
      var Ne = p(f, N, T.value, y);
      if (Ne === null) {
        N === null && (N = A);
        break;
      }
      e && N && Ne.alternate === null && n(f, N),
        (a = i(Ne, a, j)),
        C === null ? (x = Ne) : (C.sibling = Ne),
        (C = Ne),
        (N = A);
    }
    if (T.done) return t(f, N), U && Sn(f, j), x;
    if (N === null) {
      for (; !T.done; j++, T = d.next())
        (T = h(f, T.value, y)),
          T !== null &&
            ((a = i(T, a, j)), C === null ? (x = T) : (C.sibling = T), (C = T));
      return U && Sn(f, j), x;
    }
    for (N = r(f, N); !T.done; j++, T = d.next())
      (T = w(N, f, j, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? j : T.key),
          (a = i(T, a, j)),
          C === null ? (x = T) : (C.sibling = T),
          (C = T));
    return (
      e &&
        N.forEach(function (pt) {
          return n(f, pt);
        }),
      U && Sn(f, j),
      x
    );
  }
  function F(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Un &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case sr:
          e: {
            for (var x = d.key, C = a; C !== null; ) {
              if (C.key === x) {
                if (((x = d.type), x === Un)) {
                  if (C.tag === 7) {
                    t(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === qe &&
                    zu(x) === C.type)
                ) {
                  t(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = _t(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, C);
                break;
              } else n(f, C);
              C = C.sibling;
            }
            d.type === Un
              ? ((a = Pn(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Fr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = _t(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Fn:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = ql(d, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case qe:
          return (C = d._init), F(f, a, C(d._payload), y);
      }
      if (Ct(d)) return _(f, a, d, y);
      if (mt(d)) return k(f, a, d, y);
      wr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Jl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : t(f, a);
  }
  return F;
}
var it = va(!0),
  ya = va(!1),
  lr = {},
  $e = gn(lr),
  Xt = gn(lr),
  Gt = gn(lr);
function Nn(e) {
  if (e === lr) throw Error(g(174));
  return e;
}
function ko(e, n) {
  switch ((M(Gt, n), M(Xt, e), M($e, lr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ai(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = ai(n, e));
  }
  D($e), M($e, n);
}
function ot() {
  D($e), D(Xt), D(Gt);
}
function ga(e) {
  Nn(Gt.current);
  var n = Nn($e.current),
    t = ai(n, e.type);
  n !== t && (M(Xt, e), M($e, t));
}
function So(e) {
  Xt.current === e && (D($e), D(Xt));
}
var $ = gn(0);
function el(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ql = [];
function xo() {
  for (var e = 0; e < Ql.length; e++)
    Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var Rr = Ge.ReactCurrentDispatcher,
  Kl = Ge.ReactCurrentBatchConfig,
  Tn = 0,
  B = null,
  Y = null,
  Z = null,
  nl = !1,
  Ot = !1,
  Zt = 0,
  pd = 0;
function ne() {
  throw Error(g(321));
}
function Eo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function Co(e, n, t, r, l, i) {
  if (
    ((Tn = i),
    (B = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Rr.current = e === null || e.memoizedState === null ? yd : gd),
    (e = t(r, l)),
    Ot)
  ) {
    i = 0;
    do {
      if (((Ot = !1), (Zt = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Rr.current = wd),
        (e = t(r, l));
    } while (Ot);
  }
  if (
    ((Rr.current = tl),
    (n = Y !== null && Y.next !== null),
    (Tn = 0),
    (Z = Y = B = null),
    (nl = !1),
    n)
  )
    throw Error(g(300));
  return e;
}
function No() {
  var e = Zt !== 0;
  return (Zt = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ce() {
  if (Y === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? B.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(g(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (B.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Jt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Yl(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((Tn & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (B.lanes |= v),
          (Rn |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Oe(r, n.memoizedState) || (ce = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), (Rn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Xl(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Oe(i, n.memoizedState) || (ce = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function wa() {}
function _a(e, n) {
  var t = B,
    r = Ce(),
    l = n(),
    i = !Oe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    jo(xa.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      qt(9, Sa.bind(null, t, r, l, n), void 0, null),
      J === null)
    )
      throw Error(g(349));
    Tn & 30 || ka(t, n, l);
  }
  return l;
}
function ka(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = B.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (B.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function Sa(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Ea(n) && Ca(e);
}
function xa(e, n, t) {
  return t(function () {
    Ea(n) && Ca(e);
  });
}
function Ea(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function Ca(e) {
  var n = Ye(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Lu(e) {
  var n = De();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = vd.bind(null, B, e)),
    [n.memoizedState, e]
  );
}
function qt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = B.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (B.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Na() {
  return Ce().memoizedState;
}
function Or(e, n, t, r) {
  var l = De();
  (B.flags |= e),
    (l.memoizedState = qt(1 | n, t, void 0, r === void 0 ? null : r));
}
function vl(e, n, t, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && Eo(r, o.deps))) {
      l.memoizedState = qt(n, t, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = qt(1 | n, t, i, r));
}
function Tu(e, n) {
  return Or(8390656, 8, e, n);
}
function jo(e, n) {
  return vl(2048, 8, e, n);
}
function ja(e, n) {
  return vl(4, 2, e, n);
}
function Pa(e, n) {
  return vl(4, 4, e, n);
}
function za(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function La(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), vl(4, 4, za.bind(null, n, e), t)
  );
}
function Po() {}
function Ta(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Eo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ra(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Eo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Oa(e, n, t) {
  return Tn & 21
    ? (Oe(t, n) || ((t = Ds()), (B.lanes |= t), (Rn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function hd(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), (Kl.transition = r);
  }
}
function Ma() {
  return Ce().memoizedState;
}
function md(e, n, t) {
  var r = dn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ia(e))
  )
    Da(n, t);
  else if (((t = da(e, n, t, r)), t !== null)) {
    var l = oe();
    Re(t, e, r, l), Fa(t, n, r);
  }
}
function vd(e, n, t) {
  var r = dn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ia(e)) Da(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), wo(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = da(e, n, l, r)),
      t !== null && ((l = oe()), Re(t, e, r, l), Fa(t, n, r));
  }
}
function Ia(e) {
  var n = e.alternate;
  return e === B || (n !== null && n === B);
}
function Da(e, n) {
  Ot = nl = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Fa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), lo(e, t);
  }
}
var tl = {
    readContext: Ee,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  yd = {
    readContext: Ee,
    useCallback: function (e, n) {
      return (De().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ee,
    useEffect: Tu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Or(4194308, 4, za.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Or(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Or(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = md.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Lu,
    useDebugValue: Po,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Lu(!1),
        n = e[0];
      return (e = hd.bind(null, e[1])), (De().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = B,
        l = De();
      if (U) {
        if (t === void 0) throw Error(g(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(g(349));
        Tn & 30 || ka(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Tu(xa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        qt(9, Sa.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = J.identifierPrefix;
      if (U) {
        var t = Ae,
          r = He;
        (t = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Zt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = pd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  gd = {
    readContext: Ee,
    useCallback: Ta,
    useContext: Ee,
    useEffect: jo,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Pa,
    useMemo: Ra,
    useReducer: Yl,
    useRef: Na,
    useState: function () {
      return Yl(Jt);
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var n = Ce();
      return Oa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Jt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: wa,
    useSyncExternalStore: _a,
    useId: Ma,
    unstable_isNewReconciler: !1,
  },
  wd = {
    readContext: Ee,
    useCallback: Ta,
    useContext: Ee,
    useEffect: jo,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Pa,
    useMemo: Ra,
    useReducer: Xl,
    useRef: Na,
    useState: function () {
      return Xl(Jt);
    },
    useDebugValue: Po,
    useDeferredValue: function (e) {
      var n = Ce();
      return Y === null ? (n.memoizedState = e) : Oa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(Jt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: wa,
    useSyncExternalStore: _a,
    useId: Ma,
    unstable_isNewReconciler: !1,
  };
function ut(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Kc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Gl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Ri(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var _d = typeof WeakMap == "function" ? WeakMap : Map;
function Ua(e, n, t) {
  (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      ll || ((ll = !0), (Hi = r)), Ri(e, n);
    }),
    t
  );
}
function $a(e, n, t) {
  (t = We(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Ri(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Ri(e, n),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function Ru(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _d();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Md.bind(null, e, n, t)), n.then(e, e));
}
function Ou(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = We(-1, 1)), (n.tag = 2), cn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var kd = Ge.ReactCurrentOwner,
  ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? ya(n, null, t, r) : it(n, e.child, t, r);
}
function Iu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    et(n, l),
    (r = Co(e, n, t, r, i, l)),
    (t = No()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (U && t && po(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function Du(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Do(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ba(e, n, i, r, l))
      : ((e = Fr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Wt), t(o, r) && e.ref === n.ref)
    )
      return Xe(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = pn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ba(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Wt(i, r) && e.ref === n.ref)
      if (((ce = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (n.lanes = e.lanes), Xe(e, n, l);
  }
  return Oi(e, n, t, r, l);
}
function Va(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Xn, he),
        (he |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          M(Xn, he),
          (he |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        M(Xn, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      M(Xn, he),
      (he |= r);
  return ie(e, n, l, t), n.child;
}
function Ha(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Oi(e, n, t, r, l) {
  var i = de(t) ? zn : le.current;
  return (
    (i = rt(n, i)),
    et(n, l),
    (t = Co(e, n, t, r, i, l)),
    (r = No()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, n, l))
      : (U && r && po(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function Fu(e, n, t, r, l) {
  if (de(t)) {
    var i = !0;
    Xr(n);
  } else i = !1;
  if ((et(n, l), n.stateNode === null))
    Mr(e, n), ma(n, t, r), Ti(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = Ee(c))
      : ((c = de(t) ? zn : le.current), (c = rt(n, c)));
    var v = t.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Pu(n, o, r, c)),
      (be = !1);
    var p = n.memoizedState;
    (o.state = p),
      br(n, r, o, l),
      (s = n.memoizedState),
      u !== r || p !== s || fe.current || be
        ? (typeof v == "function" && (Li(n, t, v, r), (s = n.memoizedState)),
          (u = be || ju(n, t, u, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      pa(e, n),
      (u = n.memoizedProps),
      (c = n.type === n.elementType ? u : Pe(n.type, u)),
      (o.props = c),
      (h = n.pendingProps),
      (p = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Ee(s))
        : ((s = de(t) ? zn : le.current), (s = rt(n, s)));
    var w = t.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Pu(n, o, r, s)),
      (be = !1),
      (p = n.memoizedState),
      (o.state = p),
      br(n, r, o, l);
    var _ = n.memoizedState;
    u !== h || p !== _ || fe.current || be
      ? (typeof w == "function" && (Li(n, t, w, r), (_ = n.memoizedState)),
        (c = be || ju(n, t, c, r, p, _, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, _, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, _, s)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = _)),
        (o.props = r),
        (o.state = _),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Mi(e, n, t, r, i, l);
}
function Mi(e, n, t, r, l, i) {
  Ha(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && Su(n, t, !1), Xe(e, n, i);
  (r = n.stateNode), (kd.current = n);
  var u =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = it(n, e.child, null, i)), (n.child = it(n, null, u, i)))
      : ie(e, n, u, i),
    (n.memoizedState = r.state),
    l && Su(n, t, !0),
    n.child
  );
}
function Aa(e) {
  var n = e.stateNode;
  n.pendingContext
    ? ku(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && ku(e, n.context, !1),
    ko(e, n.containerInfo);
}
function Uu(e, n, t, r, l) {
  return lt(), mo(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wa(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M($, l & 1),
    e === null)
  )
    return (
      Pi(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = wl(o, r, 0, null)),
              (e = Pn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Di(t)),
              (n.memoizedState = Ii),
              e)
            : zo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Sd(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = pn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = pn(u, i)) : ((i = Pn(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Di(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ii),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function zo(e, n) {
  return (
    (n = wl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function _r(e, n, t, r) {
  return (
    r !== null && mo(r),
    it(n, e.child, null, t),
    (e = zo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function Sd(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Gl(Error(g(422)))), _r(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = wl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && it(n, e.child, null, o),
        (n.child.memoizedState = Di(o)),
        (n.memoizedState = Ii),
        i);
  if (!(n.mode & 1)) return _r(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Gl(i, r, void 0)), _r(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), Re(r, e, l, -1));
    }
    return Io(), (r = Gl(Error(g(421)))), _r(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Id.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (me = an(l.nextSibling)),
      (ve = n),
      (U = !0),
      (Le = null),
      e !== null &&
        ((_e[ke++] = He),
        (_e[ke++] = Ae),
        (_e[ke++] = Ln),
        (He = e.id),
        (Ae = e.overflow),
        (Ln = n)),
      (n = zo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function $u(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), zi(e.return, n, t);
}
function Zl(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Qa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, n, r.children, t), (r = $.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $u(e, t, n);
        else if (e.tag === 19) $u(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && el(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Zl(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && el(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Zl(n, !0, t, null, i);
        break;
      case "together":
        Zl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Mr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Xe(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Rn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (
      e = n.child, t = pn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = pn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function xd(e, n, t) {
  switch (n.tag) {
    case 3:
      Aa(n), lt();
      break;
    case 5:
      ga(n);
      break;
    case 1:
      de(n.type) && Xr(n);
      break;
    case 4:
      ko(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      M(Jr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Wa(e, n, t)
          : (M($, $.current & 1),
            (e = Xe(e, n, t)),
            e !== null ? e.sibling : null);
      M($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Va(e, n, t);
  }
  return Xe(e, n, t);
}
var Ka, Fi, Ya, Xa;
Ka = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Fi = function () {};
Ya = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Nn($e.current);
    var i = null;
    switch (t) {
      case "input":
        (l = ii(e, l)), (r = ii(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = si(e, l)), (r = si(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kr);
    }
    ci(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ft.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(c, t)), (t = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ft.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && I("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    t && (i = i || []).push("style", t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Xa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function kt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Ed(e, n, t) {
  var r = n.pendingProps;
  switch ((ho(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return de(n.type) && Yr(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        ot(),
        D(fe),
        D(le),
        xo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Le !== null && (Qi(Le), (Le = null)))),
        Fi(e, n),
        te(n),
        null
      );
    case 5:
      So(n);
      var l = Nn(Gt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ya(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return te(n), null;
        }
        if (((e = Nn($e.current)), gr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Fe] = n), (r[Yt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jt.length; l++) I(jt[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Xo(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              Zo(r, i), I("invalid", r);
          }
          ci(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ft.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (t) {
            case "input":
              ar(r), Go(r, i, !0);
              break;
            case "textarea":
              ar(r), Jo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Kr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ks(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Fe] = n),
            (e[Yt] = r),
            Ka(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = fi(t, r)), t)) {
              case "dialog":
                I("cancel", e), I("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jt.length; l++) I(jt[l], e);
                l = r;
                break;
              case "source":
                I("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (l = r);
                break;
              case "details":
                I("toggle", e), (l = r);
                break;
              case "input":
                Xo(e, r), (l = ii(e, r)), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                Zo(e, r), (l = si(e, r)), I("invalid", e);
                break;
              default:
                l = r;
            }
            ci(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Es(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ss(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Ut(e, s)
                    : typeof s == "number" && Ut(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ft.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && I("scroll", e)
                      : s != null && qi(e, i, s, o));
              }
            switch (t) {
              case "input":
                ar(e), Go(e, r, !1);
                break;
              case "textarea":
                ar(e), Jo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Xa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        if (((t = Nn(Gt.current)), Nn($e.current), gr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Fe] = n),
            (i = r.nodeValue !== t) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Fe] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (D($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && me !== null && n.mode & 1 && !(n.flags & 128))
          fa(), lt(), (n.flags |= 98560), (i = !1);
        else if (((i = gr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Fe] = n;
          } else
            lt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (i = !1);
        } else Le !== null && (Qi(Le), (Le = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : Io())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        ot(), Fi(e, n), e === null && Qt(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return go(n.type._context), te(n), null;
    case 17:
      return de(n.type) && Yr(), te(n), null;
    case 19:
      if ((D($), (i = n.memoizedState), i === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) kt(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = el(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    kt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return M($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > st &&
            ((n.flags |= 128), (r = !0), kt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = el(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              kt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return te(n), null;
          } else
            2 * Q() - i.renderingStartTime > st &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), kt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Q()),
          (n.sibling = null),
          (t = $.current),
          M($, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        Mo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? he & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function Cd(e, n) {
  switch ((ho(n), n.tag)) {
    case 1:
      return (
        de(n.type) && Yr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        ot(),
        D(fe),
        D(le),
        xo(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return So(n), null;
    case 13:
      if ((D($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(g(340));
        lt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return D($), null;
    case 4:
      return ot(), null;
    case 10:
      return go(n.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kr = !1,
  re = !1,
  Nd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Yn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        H(e, n, r);
      }
    else t.current = null;
}
function Ui(e, n, t) {
  try {
    t();
  } catch (r) {
    H(e, n, r);
  }
}
var Bu = !1;
function jd(e, n) {
  if (((ki = Ar), (e = qs()), fo(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            p = null;
          n: for (;;) {
            for (
              var w;
              h !== t || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (p = h), (h = w);
            for (;;) {
              if (h === e) break n;
              if (
                (p === t && ++c === l && (u = o),
                p === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = w;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Si = { focusedElem: e, selectionRange: t }, Ar = !1, S = n; S !== null; )
    if (((n = S), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (S = e);
    else
      for (; S !== null; ) {
        n = S;
        try {
          var _ = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var k = _.memoizedProps,
                    F = _.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? k : Pe(n.type, k),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          H(n, n.return, y);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (S = e);
          break;
        }
        S = n.return;
      }
  return (_ = Bu), (Bu = !1), _;
}
function Mt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ui(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function $i(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ga(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ga(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Fe], delete n[Yt], delete n[Ci], delete n[ad], delete n[cd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Za(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Za(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Kr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, n, t), e = e.sibling; e !== null; ) Bi(e, n, t), (e = e.sibling);
}
function Vi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vi(e, n, t), e = e.sibling; e !== null; ) Vi(e, n, t), (e = e.sibling);
}
var q = null,
  ze = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; ) Ja(e, n, t), (t = t.sibling);
}
function Ja(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(al, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Yn(t, n);
    case 6:
      var r = q,
        l = ze;
      (q = null),
        Ze(e, n, t),
        (q = r),
        (ze = l),
        q !== null &&
          (ze
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (ze
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, t)
              : e.nodeType === 1 && Al(e, t),
            Ht(e))
          : Al(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = ze),
        (q = t.stateNode.containerInfo),
        (ze = !0),
        Ze(e, n, t),
        (q = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ui(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Yn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(t, n, u);
        }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ze(e, n, t), (re = r))
        : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function Hu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Nd()),
      n.forEach(function (r) {
        var l = Dd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function je(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (ze = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(g(160));
        Ja(i, o, l), (q = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        H(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) qa(n, e), (n = n.sibling);
}
function qa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(n, e), Me(e), r & 4)) {
        try {
          Mt(3, e, e.return), yl(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          Mt(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      je(n, e), Me(e), r & 512 && t !== null && Yn(t, t.return);
      break;
    case 5:
      if (
        (je(n, e),
        Me(e),
        r & 512 && t !== null && Yn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ut(l, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ws(l, i),
              fi(u, o);
            var c = fi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? Es(l, h)
                : v === "dangerouslySetInnerHTML"
                ? Ss(l, h)
                : v === "children"
                ? Ut(l, h)
                : qi(l, v, h, c);
            }
            switch (u) {
              case "input":
                oi(l, i);
                break;
              case "textarea":
                _s(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Zn(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zn(l, !!i.multiple, i.defaultValue, !0)
                      : Zn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Yt] = i;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((je(n, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (je(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ht(n.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      je(n, e), Me(e);
      break;
    case 13:
      je(n, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ro = Q())),
        r & 4 && Hu(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || v), je(n, e), (re = c)) : je(n, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((p = S), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mt(4, p, p.return);
                  break;
                case 1:
                  Yn(p, p.return);
                  var _ = p.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (_.props = n.memoizedProps),
                        (_.state = n.memoizedState),
                        _.componentWillUnmount();
                    } catch (k) {
                      H(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Yn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Wu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (S = w)) : Wu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = xs("display", o)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      je(n, e), Me(e), r & 4 && Hu(e);
      break;
    case 21:
      break;
    default:
      je(n, e), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Za(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ut(l, ""), (r.flags &= -33));
          var i = Vu(e);
          Vi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Vu(e);
          Bi(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Pd(e, n, t) {
  (S = e), ba(e);
}
function ba(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || kr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = kr;
        var c = re;
        if (((kr = o), (re = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Qu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Qu(l);
        for (; i !== null; ) (S = i), ba(i), (i = i.sibling);
        (S = l), (kr = u), (re = c);
      }
      Au(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Au(e);
  }
}
function Au(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || yl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Pe(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && Nu(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Nu(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Ht(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        re || (n.flags & 512 && $i(n));
      } catch (p) {
        H(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function Wu(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function Qu(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            yl(4, n);
          } catch (s) {
            H(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(n, l, s);
            }
          }
          var i = n.return;
          try {
            $i(n);
          } catch (s) {
            H(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            $i(n);
          } catch (s) {
            H(n, o, s);
          }
      }
    } catch (s) {
      H(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (S = u);
      break;
    }
    S = n.return;
  }
}
var zd = Math.ceil,
  rl = Ge.ReactCurrentDispatcher,
  Lo = Ge.ReactCurrentOwner,
  xe = Ge.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  he = 0,
  Xn = gn(0),
  X = 0,
  bt = null,
  Rn = 0,
  gl = 0,
  To = 0,
  It = null,
  ae = null,
  Ro = 0,
  st = 1 / 0,
  Be = null,
  ll = !1,
  Hi = null,
  fn = null,
  Sr = !1,
  rn = null,
  il = 0,
  Dt = 0,
  Ai = null,
  Ir = -1,
  Dr = 0;
function oe() {
  return R & 6 ? Q() : Ir !== -1 ? Ir : (Ir = Q());
}
function dn(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : dd.transition !== null
      ? (Dr === 0 && (Dr = Ds()), Dr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : As(e.type))),
        e)
    : 1;
}
function Re(e, n, t, r) {
  if (50 < Dt) throw ((Dt = 0), (Ai = null), Error(g(185)));
  nr(e, t, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (gl |= t), X === 4 && nn(e, b)),
      pe(e, r),
      t === 1 && R === 0 && !(n.mode & 1) && ((st = Q() + 500), hl && wn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  df(e, n);
  var r = Hr(e, e === J ? b : 0);
  if (r === 0)
    t !== null && eu(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && eu(t), n === 1))
      e.tag === 0 ? fd(Ku.bind(null, e)) : sa(Ku.bind(null, e)),
        ud(function () {
          !(R & 6) && wn();
        }),
        (t = null);
    else {
      switch (Fs(r)) {
        case 1:
          t = ro;
          break;
        case 4:
          t = Ms;
          break;
        case 16:
          t = Vr;
          break;
        case 536870912:
          t = Is;
          break;
        default:
          t = Vr;
      }
      t = uc(t, ec.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function ec(e, n) {
  if (((Ir = -1), (Dr = 0), R & 6)) throw Error(g(327));
  var t = e.callbackNode;
  if (nt() && e.callbackNode !== t) return null;
  var r = Hr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = ol(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var i = tc();
    (J !== e || b !== n) && ((Be = null), (st = Q() + 500), jn(e, n));
    do
      try {
        Rd();
        break;
      } catch (u) {
        nc(e, u);
      }
    while (!0);
    yo(),
      (rl.current = i),
      (R = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = vi(e)), l !== 0 && ((r = l), (n = Wi(e, l)))), n === 1)
    )
      throw ((t = bt), jn(e, 0), nn(e, r), pe(e, Q()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ld(l) &&
          ((n = ol(e, r)),
          n === 2 && ((i = vi(e)), i !== 0 && ((r = i), (n = Wi(e, i)))),
          n === 1))
      )
        throw ((t = bt), jn(e, 0), nn(e, r), pe(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          xn(e, ae, Be);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = Ro + 500 - Q()), 10 < n))
          ) {
            if (Hr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ei(xn.bind(null, e, ae, Be), n);
            break;
          }
          xn(e, ae, Be);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ei(xn.bind(null, e, ae, Be), r);
            break;
          }
          xn(e, ae, Be);
          break;
        case 5:
          xn(e, ae, Be);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? ec.bind(null, e) : null;
}
function Wi(e, n) {
  var t = It;
  return (
    e.current.memoizedState.isDehydrated && (jn(e, n).flags |= 256),
    (e = ol(e, n)),
    e !== 2 && ((n = ae), (ae = t), n !== null && Qi(n)),
    e
  );
}
function Qi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function Ld(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~To,
      n &= ~gl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Te(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Ku(e) {
  if (R & 6) throw Error(g(327));
  nt();
  var n = Hr(e, 0);
  if (!(n & 1)) return pe(e, Q()), null;
  var t = ol(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = vi(e);
    r !== 0 && ((n = r), (t = Wi(e, r)));
  }
  if (t === 1) throw ((t = bt), jn(e, 0), nn(e, n), pe(e, Q()), t);
  if (t === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    xn(e, ae, Be),
    pe(e, Q()),
    null
  );
}
function Oo(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && ((st = Q() + 500), hl && wn());
  }
}
function On(e) {
  rn !== null && rn.tag === 0 && !(R & 6) && nt();
  var n = R;
  R |= 1;
  var t = xe.transition,
    r = O;
  try {
    if (((xe.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (xe.transition = t), (R = n), !(R & 6) && wn();
  }
}
function Mo() {
  (he = Xn.current), D(Xn);
}
function jn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), od(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((ho(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yr();
          break;
        case 3:
          ot(), D(fe), D(le), xo();
          break;
        case 5:
          So(r);
          break;
        case 4:
          ot();
          break;
        case 13:
          D($);
          break;
        case 19:
          D($);
          break;
        case 10:
          go(r.type._context);
          break;
        case 22:
        case 23:
          Mo();
      }
      t = t.return;
    }
  if (
    ((J = e),
    (K = e = pn(e.current, null)),
    (b = he = n),
    (X = 0),
    (bt = null),
    (To = gl = Rn = 0),
    (ae = It = null),
    Cn !== null)
  ) {
    for (n = 0; n < Cn.length; n++)
      if (((t = Cn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    Cn = null;
  }
  return e;
}
function nc(e, n) {
  do {
    var t = K;
    try {
      if ((yo(), (Rr.current = tl), nl)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        nl = !1;
      }
      if (
        ((Tn = 0),
        (Z = Y = B = null),
        (Ot = !1),
        (Zt = 0),
        (Lo.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (bt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (
          ((n = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Ou(o);
          if (w !== null) {
            (w.flags &= -257),
              Mu(w, o, u, i, n),
              w.mode & 1 && Ru(i, c, n),
              (n = w),
              (s = c);
            var _ = n.updateQueue;
            if (_ === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else _.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Ru(i, c, n), Io();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var F = Ou(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Mu(F, o, u, i, n),
              mo(ut(s, u));
            break e;
          }
        }
        (i = s = ut(s, u)),
          X !== 4 && (X = 2),
          It === null ? (It = [i]) : It.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = Ua(i, s, n);
              Cu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (fn === null || !fn.has(d))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var y = $a(i, u, n);
                Cu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lc(t);
    } catch (x) {
      (n = x), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function tc() {
  var e = rl.current;
  return (rl.current = tl), e === null ? tl : e;
}
function Io() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Rn & 268435455) && !(gl & 268435455)) || nn(J, b);
}
function ol(e, n) {
  var t = R;
  R |= 2;
  var r = tc();
  (J !== e || b !== n) && ((Be = null), jn(e, n));
  do
    try {
      Td();
      break;
    } catch (l) {
      nc(e, l);
    }
  while (!0);
  if ((yo(), (R = t), (rl.current = r), K !== null)) throw Error(g(261));
  return (J = null), (b = 0), X;
}
function Td() {
  for (; K !== null; ) rc(K);
}
function Rd() {
  for (; K !== null && !tf(); ) rc(K);
}
function rc(e) {
  var n = oc(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    n === null ? lc(e) : (K = n),
    (Lo.current = null);
}
function lc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = Cd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = Ed(t, n, he)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function xn(e, n, t) {
  var r = O,
    l = xe.transition;
  try {
    (xe.transition = null), (O = 1), Od(e, n, t, r);
  } finally {
    (xe.transition = l), (O = r);
  }
  return null;
}
function Od(e, n, t, r) {
  do nt();
  while (rn !== null);
  if (R & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (pf(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      uc(Vr, function () {
        return nt(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = xe.transition), (xe.transition = null);
    var o = O;
    O = 1;
    var u = R;
    (R |= 4),
      (Lo.current = null),
      jd(e, t),
      qa(t, e),
      bf(Si),
      (Ar = !!ki),
      (Si = ki = null),
      (e.current = t),
      Pd(t),
      rf(),
      (R = u),
      (O = o),
      (xe.transition = i);
  } else e.current = t;
  if (
    (Sr && ((Sr = !1), (rn = e), (il = l)),
    (i = e.pendingLanes),
    i === 0 && (fn = null),
    uf(t.stateNode),
    pe(e, Q()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ll) throw ((ll = !1), (e = Hi), (Hi = null), e);
  return (
    il & 1 && e.tag !== 0 && nt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ai ? Dt++ : ((Dt = 0), (Ai = e))) : (Dt = 0),
    wn(),
    null
  );
}
function nt() {
  if (rn !== null) {
    var e = Fs(il),
      n = xe.transition,
      t = O;
    try {
      if (((xe.transition = null), (O = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (il = 0), R & 6)) throw Error(g(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mt(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var p = v.sibling,
                        w = v.return;
                      if ((Ga(v), v === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (S = p);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var _ = i.alternate;
              if (_ !== null) {
                var k = _.child;
                if (k !== null) {
                  _.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mt(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yl(9, u);
                  }
                } catch (x) {
                  H(u, u.return, x);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (S = y);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((R = l), wn(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = t), (xe.transition = n);
    }
  }
  return !1;
}
function Yu(e, n, t) {
  (n = ut(t, n)),
    (n = Ua(e, n, 1)),
    (e = cn(e, n, 1)),
    (n = oe()),
    e !== null && (nr(e, 1, n), pe(e, n));
}
function H(e, n, t) {
  if (e.tag === 3) Yu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Yu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = ut(t, e)),
            (e = $a(n, e, 1)),
            (n = cn(n, e, 1)),
            (e = oe()),
            n !== null && (nr(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Md(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - Ro)
        ? jn(e, 0)
        : (To |= t)),
    pe(e, n);
}
function ic(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = dr), (dr <<= 1), !(dr & 130023424) && (dr = 4194304))
      : (n = 1));
  var t = oe();
  (e = Ye(e, n)), e !== null && (nr(e, n, t), pe(e, t));
}
function Id(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), ic(e, t);
}
function Dd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(n), ic(e, t);
}
var oc;
oc = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), xd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && n.flags & 1048576 && aa(n, Zr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Mr(e, n), (e = n.pendingProps);
      var l = rt(n, le.current);
      et(n, t), (l = Co(null, n, r, e, l, t));
      var i = No();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            de(r) ? ((i = !0), Xr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            _o(n),
            (l.updater = ml),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ti(n, r, e, t),
            (n = Mi(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && po(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Mr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Ud(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            n = Oi(null, n, r, e, t);
            break e;
          case 1:
            n = Fu(null, n, r, e, t);
            break e;
          case 11:
            n = Iu(null, n, r, e, t);
            break e;
          case 14:
            n = Du(null, n, r, Pe(r.type, e), t);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Oi(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Fu(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Aa(n), e === null)) throw Error(g(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          pa(e, n),
          br(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = ut(Error(g(423)), n)), (n = Uu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = ut(Error(g(424)), n)), (n = Uu(e, n, r, t, l));
            break e;
          } else
            for (
              me = an(n.stateNode.containerInfo.firstChild),
                ve = n,
                U = !0,
                Le = null,
                t = ya(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((lt(), r === l)) {
            n = Xe(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ga(n),
        e === null && Pi(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        xi(r, l) ? (o = null) : i !== null && xi(r, i) && (n.flags |= 32),
        Ha(e, n),
        ie(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && Pi(n), null;
    case 13:
      return Wa(e, n, t);
    case 4:
      return (
        ko(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = it(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Iu(e, n, r, l, t)
      );
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          M(Jr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Oe(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, t & -t)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      zi(i.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  zi(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        et(n, t),
        (l = Ee(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Pe(r, n.pendingProps)),
        (l = Pe(r.type, l)),
        Du(e, n, r, l, t)
      );
    case 15:
      return Ba(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Mr(e, n),
        (n.tag = 1),
        de(r) ? ((e = !0), Xr(n)) : (e = !1),
        et(n, t),
        ma(n, r, l),
        Ti(n, r, l, t),
        Mi(null, n, r, !0, e, t)
      );
    case 19:
      return Qa(e, n, t);
    case 22:
      return Va(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function uc(e, n) {
  return Os(e, n);
}
function Fd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, n, t, r) {
  return new Fd(e, n, t, r);
}
function Do(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ud(e) {
  if (typeof e == "function") return Do(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eo)) return 11;
    if (e === no) return 14;
  }
  return 2;
}
function pn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Se(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Fr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Do(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Un:
        return Pn(t.children, l, i, n);
      case bi:
        (o = 8), (l |= 8);
        break;
      case ni:
        return (
          (e = Se(12, t, n, l | 2)), (e.elementType = ni), (e.lanes = i), e
        );
      case ti:
        return (e = Se(13, t, n, l)), (e.elementType = ti), (e.lanes = i), e;
      case ri:
        return (e = Se(19, t, n, l)), (e.elementType = ri), (e.lanes = i), e;
      case vs:
        return wl(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hs:
              o = 10;
              break e;
            case ms:
              o = 9;
              break e;
            case eo:
              o = 11;
              break e;
            case no:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Se(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function Pn(e, n, t, r) {
  return (e = Se(7, e, r, n)), (e.lanes = t), e;
}
function wl(e, n, t, r) {
  return (
    (e = Se(22, e, r, n)),
    (e.elementType = vs),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, n, t) {
  return (e = Se(6, e, null, n)), (e.lanes = t), e;
}
function ql(e, n, t) {
  return (
    (n = Se(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function $d(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Rl(0)),
    (this.expirationTimes = Rl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Rl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new $d(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Se(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _o(i),
    e
  );
}
function Bd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function sc(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(g(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return ua(e, t, n);
  }
  return n;
}
function ac(e, n, t, r, l, i, o, u, s) {
  return (
    (e = Fo(t, r, !0, e, l, i, o, u, s)),
    (e.context = sc(null)),
    (t = e.current),
    (r = oe()),
    (l = dn(t)),
    (i = We(r, l)),
    (i.callback = n ?? null),
    cn(t, i, l),
    (e.current.lanes = l),
    nr(e, l, r),
    pe(e, r),
    e
  );
}
function _l(e, n, t, r) {
  var l = n.current,
    i = oe(),
    o = dn(l);
  return (
    (t = sc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = We(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = cn(l, n, o)),
    e !== null && (Re(e, l, o, i), Tr(e, l, o)),
    o
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Uo(e, n) {
  Xu(e, n), (e = e.alternate) && Xu(e, n);
}
function Vd() {
  return null;
}
var cc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $o(e) {
  this._internalRoot = e;
}
kl.prototype.render = $o.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  _l(e, n, null, null);
};
kl.prototype.unmount = $o.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    On(function () {
      _l(null, e, null, null);
    }),
      (n[Ke] = null);
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Bs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    en.splice(t, 0, e), t === 0 && Hs(e);
  }
};
function Bo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gu() {}
function Hd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ul(o);
        i.call(c);
      };
    }
    var o = ac(n, r, e, 0, null, !1, !1, "", Gu);
    return (
      (e._reactRootContainer = o),
      (e[Ke] = o.current),
      Qt(e.nodeType === 8 ? e.parentNode : e),
      On(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ul(s);
      u.call(c);
    };
  }
  var s = Fo(e, 0, !1, null, null, !1, !1, "", Gu);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Qt(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      _l(n, s, t, r);
    }),
    s
  );
}
function xl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ul(o);
        u.call(s);
      };
    }
    _l(n, o, e, l);
  } else o = Hd(t, n, e, l, r);
  return ul(o);
}
Us = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Nt(n.pendingLanes);
        t !== 0 &&
          (lo(n, t | 1), pe(n, Q()), !(R & 6) && ((st = Q() + 500), wn()));
      }
      break;
    case 13:
      On(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        Uo(e, 1);
  }
};
io = function (e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    Uo(e, 134217728);
  }
};
$s = function (e) {
  if (e.tag === 13) {
    var n = dn(e),
      t = Ye(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    Uo(e, n);
  }
};
Bs = function () {
  return O;
};
Vs = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
pi = function (e, n, t) {
  switch (n) {
    case "input":
      if ((oi(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = pl(r);
            if (!l) throw Error(g(90));
            gs(r), oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      _s(e, t);
      break;
    case "select":
      (n = t.value), n != null && Zn(e, !!t.multiple, n, !1);
  }
};
js = Oo;
Ps = On;
var Ad = { usingClientEntryPoint: !1, Events: [rr, Hn, pl, Cs, Ns, Oo] },
  St = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Wd = {
    bundleType: St.bundleType,
    version: St.version,
    rendererPackageName: St.rendererPackageName,
    rendererConfig: St.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: St.findFiberByHostInstance || Vd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xr.isDisabled && xr.supportsFiber)
    try {
      (al = xr.inject(Wd)), (Ue = xr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
ge.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bo(n)) throw Error(g(200));
  return Bd(e, n, null, t);
};
ge.createRoot = function (e, n) {
  if (!Bo(e)) throw Error(g(299));
  var t = !1,
    r = "",
    l = cc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Fo(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ke] = n.current),
    Qt(e.nodeType === 8 ? e.parentNode : e),
    new $o(n)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = Ts(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return On(e);
};
ge.hydrate = function (e, n, t) {
  if (!Sl(n)) throw Error(g(200));
  return xl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
  if (!Bo(e)) throw Error(g(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = cc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = ac(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[Ke] = n.current),
    Qt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new kl(n);
};
ge.render = function (e, n, t) {
  if (!Sl(n)) throw Error(g(200));
  return xl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (On(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Oo;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!Sl(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return xl(e, n, t, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
function fc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc);
    } catch (e) {
      console.error(e);
    }
}
fc(), (as.exports = ge);
var Qd = as.exports,
  Zu = Qd;
(bl.createRoot = Zu.createRoot), (bl.hydrateRoot = Zu.hydrateRoot);
const Kd = "_wrapper_er1kt_2",
  Yd = "_menuHamburger_er1kt_11",
  Xd = "_wrapper__container_er1kt_36",
  Gd = "_wrapper__container__logo_er1kt_46",
  Zd = "_wrapper__container__buttonsBar_er1kt_55",
  xt = {
    wrapper: Kd,
    menuHamburger: Yd,
    wrapper__container: Xd,
    wrapper__container__logo: Gd,
    wrapper__container__buttonsBar: Zd,
  };
var dc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ju = ln.createContext && ln.createContext(dc),
  hn = function () {
    return (
      (hn =
        Object.assign ||
        function (e) {
          for (var n, t = 1, r = arguments.length; t < r; t++) {
            n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
      hn.apply(this, arguments)
    );
  },
  Jd = function (e, n) {
    var t = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        n.indexOf(r) < 0 &&
        (t[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
        n.indexOf(r[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
          (t[r[l]] = e[r[l]]);
    return t;
  };
function pc(e) {
  return (
    e &&
    e.map(function (n, t) {
      return ln.createElement(n.tag, hn({ key: t }, n.attr), pc(n.child));
    })
  );
}
function dt(e) {
  return function (n) {
    return ln.createElement(qd, hn({ attr: hn({}, e.attr) }, n), pc(e.child));
  };
}
function qd(e) {
  var n = function (t) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = Jd(e, ["attr", "size", "title"]),
      u = l || t.size || "1em",
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      ln.createElement(
        "svg",
        hn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          r,
          o,
          {
            className: s,
            style: hn(hn({ color: e.color || t.color }, t.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && ln.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ju !== void 0
    ? ln.createElement(Ju.Consumer, null, function (t) {
        return n(t);
      })
    : n(dc);
}
function hc(e) {
  return dt({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function bd(e) {
  return dt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Menu_Fries" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z",
            },
          },
          {
            tag: "path",
            attr: {
              d: "M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z",
            },
          },
          {
            tag: "path",
            attr: {
              d: "M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z",
            },
          },
        ],
      },
    ],
  })(e);
}
function ep(e) {
  return dt({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function qu() {
  return window.innerWidth;
}
function np() {
  const [e, n] = Gn.useState(!1),
    [t, r] = Gn.useState(qu());
  return (
    Gn.useEffect(() => {
      function l() {
        r(qu());
      }
      return (
        window.addEventListener("resize", l),
        () => {
          window.removeEventListener("resize", l);
        }
      );
    }, []),
    e
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible"),
    m.jsxs("div", {
      className: xt.wrapper,
      children: [
        e
          ? m.jsxs("div", {
              className: xt.menuHamburger,
              onClick: () => n(!1),
              children: [
                m.jsx("a", { href: "#main", children: "ГЛАВНАЯ" }),
                m.jsx("a", { href: "#aboutme", children: "ОБО МНЕ" }),
                m.jsx("a", { href: "#works", children: "РАБОТЫ" }),
              ],
            })
          : "",
        m.jsxs("div", {
          className: xt.wrapper__container,
          children: [
            m.jsx("div", {
              className: xt.wrapper__container__logo,
              children: m.jsx(hc, {}),
            }),
            m.jsx("div", {
              className: xt.wrapper__container__buttonsBar,
              children:
                t < 500
                  ? m.jsx(m.Fragment, {
                      children: e
                        ? m.jsx(ep, { onClick: () => n(!e) })
                        : m.jsx(bd, { onClick: () => n(!e) }),
                    })
                  : m.jsxs(m.Fragment, {
                      children: [
                        m.jsx("a", { href: "#main", children: "ГЛАВНАЯ" }),
                        m.jsx("a", { href: "#aboutme", children: "ОБО МНЕ" }),
                        m.jsx("a", { href: "#works", children: "РАБОТЫ" }),
                      ],
                    }),
            }),
          ],
        }),
      ],
    })
  );
}
const tp = "_wrapper_16cai_2",
  rp = "_wrapper__container_16cai_7",
  lp = "_container__Leftblock_16cai_17",
  ip = "_container__Rightblock_16cai_59",
  Er = {
    wrapper: tp,
    wrapper__container: rp,
    container__Leftblock: lp,
    container__Rightblock: ip,
  };
function op() {
  return m.jsx("div", {
    className: Er.wrapper,
    id: "main",
    children: m.jsxs("div", {
      className: Er.wrapper__container,
      children: [
        m.jsxs("div", {
          className: Er.container__Leftblock,
          children: [
            m.jsx("h5", { children: "Привет! Меня зовут" }),
            m.jsx("h1", { children: "Антон," }),
            m.jsx("h4", {
              children:
                "увлеченный фронтенд-разработчик, специализирующийся на создании интерактивных, доступных и адаптивных веб-сайтов.",
            }),
            m.jsx("a", { href: "#works", children: "Мои работы" }),
          ],
        }),
        m.jsx("div", {
          className: Er.container__Rightblock,
          children: m.jsx("div", {}),
        }),
      ],
    }),
  });
}
const up = "_wrapper_1odt1_2",
  sp = "_wrapper__container_1odt1_10",
  ap = "_container__line_1odt1_27",
  cp = "_skills_1odt1_32",
  fp = "_container__leftBlock_1odt1_51",
  dp = "_container__rightBlock_1odt1_86",
  pp = "_tech_1odt1_91",
  Je = {
    wrapper: up,
    wrapper__container: sp,
    container__line: ap,
    skills: cp,
    container__leftBlock: fp,
    container__rightBlock: dp,
    tech: pp,
  };
function mc(e) {
  return dt({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z",
        },
      },
    ],
  })(e);
}
function vc(e) {
  return dt({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 248c0-38 26-53 58-55l149 1c9 0 17 6 20 15 34 110 76 178 126 255 3 6 8 9 13 9 4 0 8-2 11-7l3-11 1-173c0-25-12-29-40-33-11-2-18-12-18-22 0-2 0-4 1-6 14-43 58-65 120-65l56-1c46 0 88 20 88 79v227c4 3 8 5 13 5 8 0 18-5 26-18 52-73 111-160 119-206 0-2 1-3 2-5 11-22 39-37 51-41 2-1 5-2 9-2h155l10 1c15 0 26 10 31 19 9 14 7 29 8 35v7c-15 91-119 193-163 259-6 8-9 15-9 22 0 6 3 12 8 18l146 184c8 11 12 24 12 35 0 33-31 52-61 55l-17 1H779c-3 0-5 1-8 1-17 0-31-9-41-19-32-39-63-79-94-118-6-8-8-9-14-13-7 29-13 59-20 89l-3 17c-5 18-18 37-42 42l-14 1h-98C272 830 117 584 8 277c-3-8-5-19-5-29zm601 259c-26 0-55-15-55-43V234c0-27-12-37-45-37l-57 2c-32 0-50 5-65 15 23 11 44 26 44 68v176c-3 35-32 58-60 58-19 0-36-11-46-29-45-68-83-132-116-224l-9-26-133-1c-18 0-16 1-16 10 0 6 1 14 2 19l21 56c109 282 246 467 376 467h100c14 0 13-17 16-27l19-88c4-9 7-17 14-24 8-8 17-11 26-11 19 0 37 15 49 29l85 108c7 11 13 13 17 13h165c16 0 30-5 30-15 0-3-1-7-3-10L818 582c-12-15-17-30-17-45 0-16 6-32 16-46 42-63 132-153 153-227l3-13c-1-5-1-9-2-14H814c-10 4-18 10-24 18l-6 19c-23 64-86 152-131 213-15 14-32 20-49 20z",
        },
      },
    ],
  })(e);
}
function yc(e) {
  return dt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
        },
      },
      {
        tag: "path",
        attr: { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" },
      },
    ],
  })(e);
}
function hp() {
  return m.jsx("div", {
    className: Je.wrapper,
    id: "aboutme",
    children: m.jsxs("div", {
      className: Je.wrapper__container,
      children: [
        m.jsx("h1", { children: "Обо мне" }),
        m.jsx("div", { className: Je.container__line }),
        m.jsx("h4", {
          children:
            "Вы найдете небольшое введение обо мне, а также о навыках и технологиях, которые я использую ежедневно.",
        }),
        m.jsxs("div", {
          className: Je.skills,
          children: [
            m.jsxs("div", {
              className: Je.container__leftBlock,
              children: [
                m.jsx("h1", { children: "Хотите узнать меня поближе?" }),
                m.jsxs("h2", {
                  children: [
                    "Я Frontend-разработчик, увлеченный созданием интерактивных, доступных и адаптивных веб-сайтов. Ознакомьтесь с разделом",
                    " ",
                    m.jsx("a", { href: "#works", children: "мои проекты" }),
                    ", где представлены некоторые из созданных мной веб-сайтов.",
                    m.jsx("br", {}),
                    " ",
                    m.jsx("br", {}),
                    " В настоящее время я открыт для вакансий, где я могу внести свой вклад в ваш бизнес. Не стесняйтесь обращаться ко мне, если вы сочтете мои навыки полезными",
                  ],
                }),
                m.jsx("h4", { children: "Связь со мной" }),
                m.jsxs("div", {
                  children: [
                    m.jsx("a", {
                      href: "https://t.me/yourantosha",
                      children: m.jsx(mc, {}),
                    }),
                    m.jsx("a", {
                      href: "https://vk.com/6old6",
                      children: m.jsx(vc, {}),
                    }),
                  ],
                }),
                m.jsxs("a", {
                  href: "mailto:tacontactta@gmail.com",
                  children: [
                    m.jsx(yc, {}),
                    m.jsx("span", { children: "tacontactta@gmail.com" }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: Je.container__rightBlock,
              children: [
                m.jsx("h1", { children: "Умения и технологии" }),
                m.jsx("h2", {
                  children: "Я активно использую и знаком со следующим:",
                }),
                m.jsx("h1", { children: "Активно использую:" }),
                m.jsxs("div", {
                  className: Je.tech,
                  children: [
                    m.jsx("span", { children: "css" }),
                    m.jsx("span", { children: "scss" }),
                    m.jsx("span", { children: "JavaScript" }),
                    m.jsx("span", { children: "ReactJs" }),
                    m.jsx("span", { children: "Git" }),
                    m.jsx("span", { children: "Figma" }),
                    m.jsx("span", { children: "GIMP" }),
                    m.jsx("span", { children: "Photoshop" }),
                    m.jsx("span", { children: "VSCode" }),
                    m.jsx("span", { children: "БЭМ" }),
                    m.jsx("span", { children: "vite" }),
                    m.jsx("span", { children: "adaptive" }),
                    m.jsx("span", { children: "cross-browser" }),
                    m.jsx("span", { children: "vue" }),
                    m.jsx("span", { children: "tailwindcss" }),
                  ],
                }),
                m.jsx("h1", { children: "Знаком с:" }),
                m.jsxs("div", {
                  className: Je.tech,
                  children: [
                    m.jsx("span", { children: "typescript" }),
                    m.jsx("span", { children: "mysql" }),
                    m.jsx("span", { children: "NextJs" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const mp = "_wrapper_v165j_2",
  vp = "_wrapper__container_v165j_8",
  yp = "_container__leftBlock_v165j_18",
  gp = "_container__rightBlock_v165j_32",
  Cr = {
    wrapper: mp,
    wrapper__container: vp,
    container__leftBlock: yp,
    container__rightBlock: gp,
  };
function wp() {
  return m.jsx("div", {
    className: Cr.wrapper,
    children: m.jsxs("div", {
      className: Cr.wrapper__container,
      children: [
        m.jsxs("div", {
          className: Cr.container__leftBlock,
          children: [
            m.jsx(hc, {}),
            m.jsxs("h4", {
              children: [
                "Спасибо за просмотр моего портфолио. ",
                m.jsx("br", {}),
                " В настоящее время я открыт для работы.",
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className: Cr.container__rightBlock,
          children: [
            m.jsx("h4", { children: "Связь со мной" }),
            m.jsxs("div", {
              children: [
                m.jsx("a", {
                  href: "https://t.me/yourantosha",
                  children: m.jsx(mc, {}),
                }),
                m.jsx("a", {
                  href: "https://vk.com/6old6",
                  children: m.jsx(vc, {}),
                }),
              ],
            }),
            m.jsxs("a", {
              href: "mailto:tacontactta@gmail.com",
              children: [m.jsx(yc, {}), "tacontactta@gmail.com"],
            }),
          ],
        }),
      ],
    }),
  });
}
const _p = "_wrapper_1jaio_2",
  kp = "_wrapper__container_1jaio_8",
  Sp = "_line_1jaio_19",
  xp = "_items_1jaio_33",
  Ep = "_items__project_1jaio_40",
  Cp = "_project__preview_1jaio_46",
  Np = "_project__about_1jaio_54",
  Ie = {
    wrapper: _p,
    wrapper__container: kp,
    line: Sp,
    items: xp,
    items__project: Ep,
    project__preview: Cp,
    project__about: Np,
  };
function jp() {
  return m.jsx("div", {
    className: Ie.wrapper,
    id: "works",
    children: m.jsxs("div", {
      className: Ie.wrapper__container,
      children: [
        m.jsx("h1", { children: "РАБОТЫ" }),
        m.jsx("div", { className: Ie.line }),
        m.jsx("h4", {
          children:
            "Это некоторые из проектов, которые я создал, чтобы практиковаться и совершенствоваться в технологиях, упомянутых выше.",
        }),
        m.jsxs("div", {
          className: Ie.items,
          children: [
            m.jsx("div", {
              className: Ie.items__project,
              children: m.jsx("a", {
                href: "https://coronelee.github.io/transportcompany/",
                children: m.jsx("div", {
                  className: Ie.project__preview,
                  style: { backgroundImage: "../assets/work1.jpg" },
                }),
              }),
            }),
            m.jsx("div", {
              className: Ie.items__project,
              children: m.jsx("a", {
                href: "https://github.com/coronelee/avion",
                children: m.jsx("div", {
                  className: Ie.project__preview,
                  style: { backgroundImage: "../assets/work2.jpeg" },
                }),
              }),
            }),
            m.jsx("div", {
              className: Ie.items__project,
              children: m.jsx("a", {
                href: "https://coronelee.github.io/taskgame/",
                children: m.jsx("div", {
                  className: Ie.project__preview,
                  style: { backgroundImage: "../assets/work3.jpg" },
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
bl.createRoot(document.getElementById("root")).render(
  m.jsxs(ln.StrictMode, {
    children: [
      m.jsx(np, {}),
      m.jsx(op, {}),
      m.jsx(hp, {}),
      m.jsx(jp, {}),
      m.jsx(wp, {}),
    ],
  })
);
