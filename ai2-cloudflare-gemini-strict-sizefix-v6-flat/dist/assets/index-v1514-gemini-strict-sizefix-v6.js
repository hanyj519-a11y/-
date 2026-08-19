(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Wp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Yp = { exports: {} },
  gl = {},
  Xp = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ki = Symbol.for("react.element"),
  n1 = Symbol.for("react.portal"),
  r1 = Symbol.for("react.fragment"),
  o1 = Symbol.for("react.strict_mode"),
  i1 = Symbol.for("react.profiler"),
  s1 = Symbol.for("react.provider"),
  l1 = Symbol.for("react.context"),
  a1 = Symbol.for("react.forward_ref"),
  u1 = Symbol.for("react.suspense"),
  c1 = Symbol.for("react.memo"),
  f1 = Symbol.for("react.lazy"),
  Pf = Symbol.iterator;
function d1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pf && e[Pf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kp = Object.assign,
  Qp = {};
function fo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Qp),
    (this.updater = n || Gp));
}
fo.prototype.isReactComponent = {};
fo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zp() {}
Zp.prototype = fo.prototype;
function qu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Qp),
    (this.updater = n || Gp));
}
var Ju = (qu.prototype = new Zp());
Ju.constructor = qu;
Kp(Ju, fo.prototype);
Ju.isPureReactComponent = !0;
var zf = Array.isArray,
  qp = Object.prototype.hasOwnProperty,
  ec = { current: null },
  Jp = { key: !0, ref: !0, __self: !0, __source: !0 };
function eh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qp.call(t, r) && !Jp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: ki,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: ec.current,
  };
}
function p1(e, t) {
  return {
    $$typeof: ki,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function tc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ki;
}
function h1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jf = /\/+/g;
function ea(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? h1("" + e.key)
    : t.toString(36);
}
function ds(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ki:
          case n1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ea(s, 0) : r),
      zf(o)
        ? ((n = ""),
          e != null && (n = e.replace(jf, "$&/") + "/"),
          ds(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (tc(o) &&
            (o = p1(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(jf, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), zf(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + ea(i, l);
      s += ds(i, t, n, a, o);
    }
  else if (((a = d1(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + ea(i, l++)), (s += ds(i, t, n, a, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ds(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function g1(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Je = { current: null },
  ps = { transition: null },
  m1 = {
    ReactCurrentDispatcher: Je,
    ReactCurrentBatchConfig: ps,
    ReactCurrentOwner: ec,
  };
function th() {
  throw Error("act(...) is not supported in production builds of React.");
}
de.Children = {
  map: bi,
  forEach: function (e, t, n) {
    bi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!tc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
de.Component = fo;
de.Fragment = r1;
de.Profiler = i1;
de.PureComponent = qu;
de.StrictMode = o1;
de.Suspense = u1;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1;
de.act = th;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Kp({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = ec.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      qp.call(t, a) &&
        !Jp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ki, type: e.type, key: o, ref: i, props: r, _owner: s };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: l1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: s1, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = eh;
de.createFactory = function (e) {
  var t = eh.bind(null, e);
  return ((t.type = e), t);
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: a1, render: e };
};
de.isValidElement = tc;
de.lazy = function (e) {
  return { $$typeof: f1, _payload: { _status: -1, _result: e }, _init: g1 };
};
de.memo = function (e, t) {
  return { $$typeof: c1, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = ps.transition;
  ps.transition = {};
  try {
    e();
  } finally {
    ps.transition = t;
  }
};
de.unstable_act = th;
de.useCallback = function (e, t) {
  return Je.current.useCallback(e, t);
};
de.useContext = function (e) {
  return Je.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return Je.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return Je.current.useEffect(e, t);
};
de.useId = function () {
  return Je.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return Je.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return Je.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return Je.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return Je.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return Je.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return Je.current.useRef(e);
};
de.useState = function (e) {
  return Je.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return Je.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return Je.current.useTransition();
};
de.version = "18.3.1";
Xp.exports = de;
var z = Xp.exports;
const nh = Wp(z);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y1 = z,
  v1 = Symbol.for("react.element"),
  x1 = Symbol.for("react.fragment"),
  w1 = Object.prototype.hasOwnProperty,
  S1 = y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  k1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function rh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) w1.call(t, r) && !k1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: v1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: S1.current,
  };
}
gl.Fragment = x1;
gl.jsx = rh;
gl.jsxs = rh;
Yp.exports = gl;
var m = Yp.exports,
  oh = { exports: {} },
  ht = {},
  ih = { exports: {} },
  sh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, I) {
    var A = C.length;
    C.push(I);
    e: for (; 0 < A; ) {
      var H = (A - 1) >>> 1,
        b = C[H];
      if (0 < o(b, I)) ((C[H] = I), (C[A] = b), (A = H));
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var I = C[0],
      A = C.pop();
    if (A !== I) {
      C[0] = A;
      e: for (var H = 0, b = C.length, K = b >>> 1; H < K; ) {
        var G = 2 * (H + 1) - 1,
          te = C[G],
          ee = G + 1,
          ne = C[ee];
        if (0 > o(te, A))
          ee < b && 0 > o(ne, te)
            ? ((C[H] = ne), (C[ee] = A), (H = ee))
            : ((C[H] = te), (C[G] = A), (H = G));
        else if (ee < b && 0 > o(ne, A)) ((C[H] = ne), (C[ee] = A), (H = ee));
        else break e;
      }
    }
    return I;
  }
  function o(C, I) {
    var A = C.sortIndex - I.sortIndex;
    return A !== 0 ? A : C.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    p = !1,
    y = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= C)
        (r(u), (I.sortIndex = I.expirationTime), t(a, I));
      else break;
      I = n(u);
    }
  }
  function w(C) {
    if (((x = !1), h(C), !y))
      if (n(a) !== null) ((y = !0), T(_));
      else {
        var I = n(u);
        I !== null && D(w, I.startTime - C);
      }
  }
  function _(C, I) {
    ((y = !1), x && ((x = !1), g(k), (k = -1)), (p = !0));
    var A = f;
    try {
      for (
        h(I), c = n(a);
        c !== null && (!(c.expirationTime > I) || (C && !P()));
      ) {
        var H = c.callback;
        if (typeof H == "function") {
          ((c.callback = null), (f = c.priorityLevel));
          var b = H(c.expirationTime <= I);
          ((I = e.unstable_now()),
            typeof b == "function" ? (c.callback = b) : c === n(a) && r(a),
            h(I));
        } else r(a);
        c = n(a);
      }
      if (c !== null) var K = !0;
      else {
        var G = n(u);
        (G !== null && D(w, G.startTime - I), (K = !1));
      }
      return K;
    } finally {
      ((c = null), (f = A), (p = !1));
    }
  }
  var N = !1,
    M = null,
    k = -1,
    j = 5,
    R = -1;
  function P() {
    return !(e.unstable_now() - R < j);
  }
  function L() {
    if (M !== null) {
      var C = e.unstable_now();
      R = C;
      var I = !0;
      try {
        I = M(!0, C);
      } finally {
        I ? F() : ((N = !1), (M = null));
      }
    } else N = !1;
  }
  var F;
  if (typeof v == "function")
    F = function () {
      v(L);
    };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(),
      $ = E.port2;
    ((E.port1.onmessage = L),
      (F = function () {
        $.postMessage(null);
      }));
  } else
    F = function () {
      S(L, 0);
    };
  function T(C) {
    ((M = C), N || ((N = !0), F()));
  }
  function D(C, I) {
    k = S(function () {
      C(e.unstable_now());
    }, I);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || p || ((y = !0), T(_));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (j = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var A = f;
      f = I;
      try {
        return C();
      } finally {
        f = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, I) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var A = f;
      f = C;
      try {
        return I();
      } finally {
        f = A;
      }
    }),
    (e.unstable_scheduleCallback = function (C, I, A) {
      var H = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? H + A : H))
          : (A = H),
        C)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = A + b),
        (C = {
          id: d++,
          callback: I,
          priorityLevel: C,
          startTime: A,
          expirationTime: b,
          sortIndex: -1,
        }),
        A > H
          ? ((C.sortIndex = A),
            t(u, C),
            n(a) === null &&
              C === n(u) &&
              (x ? (g(k), (k = -1)) : (x = !0), D(w, A - H)))
          : ((C.sortIndex = b), t(a, C), y || p || ((y = !0), T(_))),
        C
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (C) {
      var I = f;
      return function () {
        var A = f;
        f = I;
        try {
          return C.apply(this, arguments);
        } finally {
          f = A;
        }
      };
    }));
})(sh);
ih.exports = sh;
var E1 = ih.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _1 = z,
  dt = E1;
function Y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lh = new Set(),
  Yo = {};
function pr(e, t) {
  (Xr(e, t), Xr(e + "Capture", t));
}
function Xr(e, t) {
  for (Yo[e] = t, e = 0; e < t.length; e++) lh.add(t[e]);
}
var an = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ra = Object.prototype.hasOwnProperty,
  N1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tf = {},
  $f = {};
function C1(e) {
  return Ra.call($f, e)
    ? !0
    : Ra.call(Tf, e)
      ? !1
      : N1.test(e)
        ? ($f[e] = !0)
        : ((Tf[e] = !0), !1);
}
function M1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function I1(e, t, n, r) {
  if (t === null || typeof t > "u" || M1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function et(e, t, n, r, o, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new et(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new et(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new et(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new et(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new et(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new et(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nc = /[\-:]([a-z])/g;
function rc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nc, rc);
    Ue[t] = new et(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nc, rc);
    Ue[t] = new et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(nc, rc);
  Ue[t] = new et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new et(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oc(e, t, n, r) {
  var o = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (I1(t, n, o, r) && (n = null),
    r || o === null
      ? C1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pn = _1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fi = Symbol.for("react.element"),
  Sr = Symbol.for("react.portal"),
  kr = Symbol.for("react.fragment"),
  ic = Symbol.for("react.strict_mode"),
  Oa = Symbol.for("react.profiler"),
  ah = Symbol.for("react.provider"),
  uh = Symbol.for("react.context"),
  sc = Symbol.for("react.forward_ref"),
  ba = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  lc = Symbol.for("react.memo"),
  vn = Symbol.for("react.lazy"),
  ch = Symbol.for("react.offscreen"),
  Lf = Symbol.iterator;
function vo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lf && e[Lf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pe = Object.assign,
  ta;
function Io(e) {
  if (ta === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ta = (t && t[1]) || "";
    }
  return (
    `
` +
    ta +
    e
  );
}
var na = !1;
function ra(e, t) {
  if (!e || na) return "";
  na = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];
      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ((na = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Io(e) : "";
}
function P1(e) {
  switch (e.tag) {
    case 5:
      return Io(e.type);
    case 16:
      return Io("Lazy");
    case 13:
      return Io("Suspense");
    case 19:
      return Io("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = ra(e.type, !1)), e);
    case 11:
      return ((e = ra(e.type.render, !1)), e);
    case 1:
      return ((e = ra(e.type, !0)), e);
    default:
      return "";
  }
}
function Ha(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kr:
      return "Fragment";
    case Sr:
      return "Portal";
    case Oa:
      return "Profiler";
    case ic:
      return "StrictMode";
    case ba:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case uh:
        return (e.displayName || "Context") + ".Consumer";
      case ah:
        return (e._context.displayName || "Context") + ".Provider";
      case sc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lc:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ha(e.type) || "Memo"
        );
      case vn:
        ((t = e._payload), (e = e._init));
        try {
          return Ha(e(t));
        } catch {}
    }
  return null;
}
function z1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ha(t);
    case 8:
      return t === ic ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ln(e) {
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
function fh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function j1(e) {
  var t = fh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Hi(e) {
  e._valueTracker || (e._valueTracker = j1(e));
}
function dh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function js(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Va(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ph(e, t) {
  ((t = t.checked), t != null && oc(e, "checked", t, !1));
}
function Ba(e, t) {
  ph(e, t);
  var n = Ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ua(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ua(e, t.type, Ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Df(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ua(e, t, n) {
  (t !== "number" || js(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Po = Array.isArray;
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Y(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Rf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Y(92));
      if (Po(n)) {
        if (1 < n.length) throw Error(Y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Ln(n) };
}
function hh(e, t) {
  var n = Ln(t.value),
    r = Ln(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Of(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ya(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Vi,
  mh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Vi = Vi || document.createElement("div"),
          Vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lo = {
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
  T1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lo).forEach(function (e) {
  T1.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lo[t] = Lo[e]));
  });
});
function yh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Lo.hasOwnProperty(e) && Lo[e])
      ? ("" + t).trim()
      : t + "px";
}
function vh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = yh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var $1 = Pe(
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
  },
);
function Xa(e, t) {
  if (t) {
    if ($1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Y(62));
  }
}
function Ga(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ka = null;
function ac(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qa = null,
  br = null,
  Fr = null;
function bf(e) {
  if ((e = Ni(e))) {
    if (typeof Qa != "function") throw Error(Y(280));
    var t = e.stateNode;
    t && ((t = wl(t)), Qa(e.stateNode, e.type, t));
  }
}
function xh(e) {
  br ? (Fr ? Fr.push(e) : (Fr = [e])) : (br = e);
}
function wh() {
  if (br) {
    var e = br,
      t = Fr;
    if (((Fr = br = null), bf(e), t)) for (e = 0; e < t.length; e++) bf(t[e]);
  }
}
function Sh(e, t) {
  return e(t);
}
function kh() {}
var oa = !1;
function Eh(e, t, n) {
  if (oa) return e(t, n);
  oa = !0;
  try {
    return Sh(e, t, n);
  } finally {
    ((oa = !1), (br !== null || Fr !== null) && (kh(), wh()));
  }
}
function Go(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(Y(231, t, typeof n));
  return n;
}
var Za = !1;
if (an)
  try {
    var xo = {};
    (Object.defineProperty(xo, "passive", {
      get: function () {
        Za = !0;
      },
    }),
      window.addEventListener("test", xo, xo),
      window.removeEventListener("test", xo, xo));
  } catch {
    Za = !1;
  }
function L1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ao = !1,
  Ts = null,
  $s = !1,
  qa = null,
  A1 = {
    onError: function (e) {
      ((Ao = !0), (Ts = e));
    },
  };
function D1(e, t, n, r, o, i, s, l, a) {
  ((Ao = !1), (Ts = null), L1.apply(A1, arguments));
}
function R1(e, t, n, r, o, i, s, l, a) {
  if ((D1.apply(this, arguments), Ao)) {
    if (Ao) {
      var u = Ts;
      ((Ao = !1), (Ts = null));
    } else throw Error(Y(198));
    $s || (($s = !0), (qa = u));
  }
}
function hr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _h(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ff(e) {
  if (hr(e) !== e) throw Error(Y(188));
}
function O1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hr(e)), t === null)) throw Error(Y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Ff(o), e);
        if (i === r) return (Ff(o), t);
        i = i.sibling;
      }
      throw Error(Y(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ((s = !0), (n = o), (r = i));
          break;
        }
        if (l === r) {
          ((s = !0), (r = o), (n = i));
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            ((s = !0), (n = i), (r = o));
            break;
          }
          if (l === r) {
            ((s = !0), (r = i), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(Y(189));
      }
    }
    if (n.alternate !== r) throw Error(Y(190));
  }
  if (n.tag !== 3) throw Error(Y(188));
  return n.stateNode.current === n ? e : t;
}
function Nh(e) {
  return ((e = O1(e)), e !== null ? Ch(e) : null);
}
function Ch(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ch(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mh = dt.unstable_scheduleCallback,
  Hf = dt.unstable_cancelCallback,
  b1 = dt.unstable_shouldYield,
  F1 = dt.unstable_requestPaint,
  $e = dt.unstable_now,
  H1 = dt.unstable_getCurrentPriorityLevel,
  uc = dt.unstable_ImmediatePriority,
  Ih = dt.unstable_UserBlockingPriority,
  Ls = dt.unstable_NormalPriority,
  V1 = dt.unstable_LowPriority,
  Ph = dt.unstable_IdlePriority,
  ml = null,
  Ut = null;
function B1(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Tt = Math.clz32 ? Math.clz32 : Y1,
  U1 = Math.log,
  W1 = Math.LN2;
function Y1(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((U1(e) / W1) | 0)) | 0);
}
var Bi = 64,
  Ui = 4194304;
function zo(e) {
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
function As(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = zo(l)) : ((i &= s), i !== 0 && (r = zo(i)));
  } else ((s = n & ~o), s !== 0 ? (r = zo(s)) : i !== 0 && (r = zo(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Tt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function X1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function G1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - Tt(i),
      l = 1 << s,
      a = o[s];
    (a === -1
      ? (!(l & n) || l & r) && (o[s] = X1(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l));
  }
}
function Ja(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zh() {
  var e = Bi;
  return ((Bi <<= 1), !(Bi & 4194240) && (Bi = 64), e);
}
function ia(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ei(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Tt(t)),
    (e[t] = n));
}
function K1(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Tt(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function cc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Tt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var ye = 0;
function jh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Th,
  fc,
  $h,
  Lh,
  Ah,
  eu = !1,
  Wi = [],
  Nn = null,
  Cn = null,
  Mn = null,
  Ko = new Map(),
  Qo = new Map(),
  wn = [],
  Q1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Vf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      Mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ko.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qo.delete(t.pointerId);
  }
}
function wo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ni(t)), t !== null && fc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Z1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Nn = wo(Nn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Cn = wo(Cn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Mn = wo(Mn, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (Ko.set(i, wo(Ko.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        Qo.set(i, wo(Qo.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function Dh(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _h(n)), t !== null)) {
          ((e.blockedOn = t),
            Ah(e.priority, function () {
              $h(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ka = r), n.target.dispatchEvent(r), (Ka = null));
    } else return ((t = Ni(n)), t !== null && fc(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Bf(e, t, n) {
  hs(e) && n.delete(t);
}
function q1() {
  ((eu = !1),
    Nn !== null && hs(Nn) && (Nn = null),
    Cn !== null && hs(Cn) && (Cn = null),
    Mn !== null && hs(Mn) && (Mn = null),
    Ko.forEach(Bf),
    Qo.forEach(Bf));
}
function So(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    eu ||
      ((eu = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, q1)));
}
function Zo(e) {
  function t(o) {
    return So(o, e);
  }
  if (0 < Wi.length) {
    So(Wi[0], e);
    for (var n = 1; n < Wi.length; n++) {
      var r = Wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nn !== null && So(Nn, e),
      Cn !== null && So(Cn, e),
      Mn !== null && So(Mn, e),
      Ko.forEach(t),
      Qo.forEach(t),
      n = 0;
    n < wn.length;
    n++
  )
    ((r = wn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < wn.length && ((n = wn[0]), n.blockedOn === null); )
    (Dh(n), n.blockedOn === null && wn.shift());
}
var Hr = pn.ReactCurrentBatchConfig,
  Ds = !0;
function J1(e, t, n, r) {
  var o = ye,
    i = Hr.transition;
  Hr.transition = null;
  try {
    ((ye = 1), dc(e, t, n, r));
  } finally {
    ((ye = o), (Hr.transition = i));
  }
}
function ev(e, t, n, r) {
  var o = ye,
    i = Hr.transition;
  Hr.transition = null;
  try {
    ((ye = 4), dc(e, t, n, r));
  } finally {
    ((ye = o), (Hr.transition = i));
  }
}
function dc(e, t, n, r) {
  if (Ds) {
    var o = tu(e, t, n, r);
    if (o === null) (ga(e, t, r, Rs, n), Vf(e, r));
    else if (Z1(o, e, t, n, r)) r.stopPropagation();
    else if ((Vf(e, r), t & 4 && -1 < Q1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ni(o);
        if (
          (i !== null && Th(i),
          (i = tu(e, t, n, r)),
          i === null && ga(e, t, r, Rs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ga(e, t, r, null, n);
  }
}
var Rs = null;
function tu(e, t, n, r) {
  if (((Rs = null), (e = ac(r)), (e = Gn(e)), e !== null))
    if (((t = hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _h(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Rs = e), null);
}
function Rh(e) {
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
      switch (H1()) {
        case uc:
          return 1;
        case Ih:
          return 4;
        case Ls:
        case V1:
          return 16;
        case Ph:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null,
  pc = null,
  gs = null;
function Oh() {
  if (gs) return gs;
  var e,
    t = pc,
    n = t.length,
    r,
    o = "value" in En ? En.value : En.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (gs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ms(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yi() {
  return !0;
}
function Uf() {
  return !1;
}
function gt(e) {
  function t(n, r, o, i, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Yi
        : Uf),
      (this.isPropagationStopped = Uf),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yi));
      },
      persist: function () {},
      isPersistent: Yi,
    }),
    t
  );
}
var po = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hc = gt(po),
  _i = Pe({}, po, { view: 0, detail: 0 }),
  tv = gt(_i),
  sa,
  la,
  ko,
  yl = Pe({}, _i, {
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
    getModifierState: gc,
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
        : (e !== ko &&
            (ko && e.type === "mousemove"
              ? ((sa = e.screenX - ko.screenX), (la = e.screenY - ko.screenY))
              : (la = sa = 0),
            (ko = e)),
          sa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : la;
    },
  }),
  Wf = gt(yl),
  nv = Pe({}, yl, { dataTransfer: 0 }),
  rv = gt(nv),
  ov = Pe({}, _i, { relatedTarget: 0 }),
  aa = gt(ov),
  iv = Pe({}, po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sv = gt(iv),
  lv = Pe({}, po, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  av = gt(lv),
  uv = Pe({}, po, { data: 0 }),
  Yf = gt(uv),
  cv = {
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
  fv = {
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
  dv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dv[e]) ? !!t[e] : !1;
}
function gc() {
  return pv;
}
var hv = Pe({}, _i, {
    key: function (e) {
      if (e.key) {
        var t = cv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ms(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? fv[e.keyCode] || "Unidentified"
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
    getModifierState: gc,
    charCode: function (e) {
      return e.type === "keypress" ? ms(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ms(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  gv = gt(hv),
  mv = Pe({}, yl, {
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
  Xf = gt(mv),
  yv = Pe({}, _i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gc,
  }),
  vv = gt(yv),
  xv = Pe({}, po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wv = gt(xv),
  Sv = Pe({}, yl, {
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
  kv = gt(Sv),
  Ev = [9, 13, 27, 32],
  mc = an && "CompositionEvent" in window,
  Do = null;
an && "documentMode" in document && (Do = document.documentMode);
var _v = an && "TextEvent" in window && !Do,
  bh = an && (!mc || (Do && 8 < Do && 11 >= Do)),
  Gf = " ",
  Kf = !1;
function Fh(e, t) {
  switch (e) {
    case "keyup":
      return Ev.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Er = !1;
function Nv(e, t) {
  switch (e) {
    case "compositionend":
      return Hh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Kf = !0), Gf);
    case "textInput":
      return ((e = t.data), e === Gf && Kf ? null : e);
    default:
      return null;
  }
}
function Cv(e, t) {
  if (Er)
    return e === "compositionend" || (!mc && Fh(e, t))
      ? ((e = Oh()), (gs = pc = En = null), (Er = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mv = {
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
function Qf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mv[e.type] : t === "textarea";
}
function Vh(e, t, n, r) {
  (xh(r),
    (t = Os(t, "onChange")),
    0 < t.length &&
      ((n = new hc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ro = null,
  qo = null;
function Iv(e) {
  Jh(e, 0);
}
function vl(e) {
  var t = Cr(e);
  if (dh(t)) return e;
}
function Pv(e, t) {
  if (e === "change") return t;
}
var Bh = !1;
if (an) {
  var ua;
  if (an) {
    var ca = "oninput" in document;
    if (!ca) {
      var Zf = document.createElement("div");
      (Zf.setAttribute("oninput", "return;"),
        (ca = typeof Zf.oninput == "function"));
    }
    ua = ca;
  } else ua = !1;
  Bh = ua && (!document.documentMode || 9 < document.documentMode);
}
function qf() {
  Ro && (Ro.detachEvent("onpropertychange", Uh), (qo = Ro = null));
}
function Uh(e) {
  if (e.propertyName === "value" && vl(qo)) {
    var t = [];
    (Vh(t, qo, e, ac(e)), Eh(Iv, t));
  }
}
function zv(e, t, n) {
  e === "focusin"
    ? (qf(), (Ro = t), (qo = n), Ro.attachEvent("onpropertychange", Uh))
    : e === "focusout" && qf();
}
function jv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(qo);
}
function Tv(e, t) {
  if (e === "click") return vl(t);
}
function $v(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function Lv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var At = typeof Object.is == "function" ? Object.is : Lv;
function Jo(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ra.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function Jf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ed(e, t) {
  var n = Jf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Jf(n);
  }
}
function Wh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Wh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Yh() {
  for (var e = window, t = js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = js(e.document);
  }
  return t;
}
function yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Av(e) {
  var t = Yh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ed(n, i)));
        var s = ed(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Dv = an && "documentMode" in document && 11 >= document.documentMode,
  _r = null,
  nu = null,
  Oo = null,
  ru = !1;
function td(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ru ||
    _r == null ||
    _r !== js(r) ||
    ((r = _r),
    "selectionStart" in r && yc(r)
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
    (Oo && Jo(Oo, r)) ||
      ((Oo = r),
      (r = Os(nu, "onSelect")),
      0 < r.length &&
        ((t = new hc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _r))));
}
function Xi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nr = {
    animationend: Xi("Animation", "AnimationEnd"),
    animationiteration: Xi("Animation", "AnimationIteration"),
    animationstart: Xi("Animation", "AnimationStart"),
    transitionend: Xi("Transition", "TransitionEnd"),
  },
  fa = {},
  Xh = {};
an &&
  ((Xh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nr.animationend.animation,
    delete Nr.animationiteration.animation,
    delete Nr.animationstart.animation),
  "TransitionEvent" in window || delete Nr.transitionend.transition);
function xl(e) {
  if (fa[e]) return fa[e];
  if (!Nr[e]) return e;
  var t = Nr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xh) return (fa[e] = t[n]);
  return e;
}
var Gh = xl("animationend"),
  Kh = xl("animationiteration"),
  Qh = xl("animationstart"),
  Zh = xl("transitionend"),
  qh = new Map(),
  nd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function On(e, t) {
  (qh.set(e, t), pr(t, [e]));
}
for (var da = 0; da < nd.length; da++) {
  var pa = nd[da],
    Rv = pa.toLowerCase(),
    Ov = pa[0].toUpperCase() + pa.slice(1);
  On(Rv, "on" + Ov);
}
On(Gh, "onAnimationEnd");
On(Kh, "onAnimationIteration");
On(Qh, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(Zh, "onTransitionEnd");
Xr("onMouseEnter", ["mouseout", "mouseover"]);
Xr("onMouseLeave", ["mouseout", "mouseover"]);
Xr("onPointerEnter", ["pointerout", "pointerover"]);
Xr("onPointerLeave", ["pointerout", "pointerover"]);
pr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
pr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
pr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
pr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  bv = new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));
function rd(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), R1(r, t, void 0, e), (e.currentTarget = null));
}
function Jh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          (rd(o, l, u), (i = a));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          (rd(o, l, u), (i = a));
        }
    }
  }
  if ($s) throw ((e = qa), ($s = !1), (qa = null), e);
}
function ke(e, t) {
  var n = t[au];
  n === void 0 && (n = t[au] = new Set());
  var r = e + "__bubble";
  n.has(r) || (eg(t, e, 2, !1), n.add(r));
}
function ha(e, t, n) {
  var r = 0;
  (t && (r |= 4), eg(n, e, r, t));
}
var Gi = "_reactListening" + Math.random().toString(36).slice(2);
function ei(e) {
  if (!e[Gi]) {
    ((e[Gi] = !0),
      lh.forEach(function (n) {
        n !== "selectionchange" && (bv.has(n) || ha(n, !1, e), ha(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gi] || ((t[Gi] = !0), ha("selectionchange", !1, t));
  }
}
function eg(e, t, n, r) {
  switch (Rh(t)) {
    case 1:
      var o = J1;
      break;
    case 4:
      o = ev;
      break;
    default:
      o = dc;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Za ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function ga(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Gn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Eh(function () {
    var u = i,
      d = ac(n),
      c = [];
    e: {
      var f = qh.get(e);
      if (f !== void 0) {
        var p = hc,
          y = e;
        switch (e) {
          case "keypress":
            if (ms(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = gv;
            break;
          case "focusin":
            ((y = "focus"), (p = aa));
            break;
          case "focusout":
            ((y = "blur"), (p = aa));
            break;
          case "beforeblur":
          case "afterblur":
            p = aa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = rv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = vv;
            break;
          case Gh:
          case Kh:
          case Qh:
            p = sv;
            break;
          case Zh:
            p = wv;
            break;
          case "scroll":
            p = tv;
            break;
          case "wheel":
            p = kv;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = av;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Xf;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          g = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var v = u, h; v !== null; ) {
          h = v;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              g !== null && ((w = Go(v, g)), w != null && x.push(ti(v, w, h)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < x.length &&
          ((f = new p(f, y, null, n, d)), c.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ka &&
            (y = n.relatedTarget || n.fromElement) &&
            (Gn(y) || y[un]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = u),
              (y = y ? Gn(y) : null),
              y !== null &&
                ((S = hr(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((p = null), (y = u)),
          p !== y)
        ) {
          if (
            ((x = Wf),
            (w = "onMouseLeave"),
            (g = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Xf),
              (w = "onPointerLeave"),
              (g = "onPointerEnter"),
              (v = "pointer")),
            (S = p == null ? f : Cr(p)),
            (h = y == null ? f : Cr(y)),
            (f = new x(w, v + "leave", p, n, d)),
            (f.target = S),
            (f.relatedTarget = h),
            (w = null),
            Gn(d) === u &&
              ((x = new x(g, v + "enter", y, n, d)),
              (x.target = h),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            p && y)
          )
            t: {
              for (x = p, g = y, v = 0, h = x; h; h = xr(h)) v++;
              for (h = 0, w = g; w; w = xr(w)) h++;
              for (; 0 < v - h; ) ((x = xr(x)), v--);
              for (; 0 < h - v; ) ((g = xr(g)), h--);
              for (; v--; ) {
                if (x === g || (g !== null && x === g.alternate)) break t;
                ((x = xr(x)), (g = xr(g)));
              }
              x = null;
            }
          else x = null;
          (p !== null && od(c, f, p, x, !1),
            y !== null && S !== null && od(c, S, y, x, !0));
        }
      }
      e: {
        if (
          ((f = u ? Cr(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var _ = Pv;
        else if (Qf(f))
          if (Bh) _ = $v;
          else {
            _ = jv;
            var N = zv;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (_ = Tv);
        if (_ && (_ = _(e, u))) {
          Vh(c, _, n, d);
          break e;
        }
        (N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            Ua(f, "number", f.value));
      }
      switch (((N = u ? Cr(u) : window), e)) {
        case "focusin":
          (Qf(N) || N.contentEditable === "true") &&
            ((_r = N), (nu = u), (Oo = null));
          break;
        case "focusout":
          Oo = nu = _r = null;
          break;
        case "mousedown":
          ru = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ru = !1), td(c, n, d));
          break;
        case "selectionchange":
          if (Dv) break;
        case "keydown":
        case "keyup":
          td(c, n, d);
      }
      var M;
      if (mc)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Er
          ? Fh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (bh &&
          n.locale !== "ko" &&
          (Er || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Er && (M = Oh())
            : ((En = d),
              (pc = "value" in En ? En.value : En.textContent),
              (Er = !0))),
        (N = Os(u, k)),
        0 < N.length &&
          ((k = new Yf(k, e, null, n, d)),
          c.push({ event: k, listeners: N }),
          M ? (k.data = M) : ((M = Hh(n)), M !== null && (k.data = M)))),
        (M = _v ? Nv(e, n) : Cv(e, n)) &&
          ((u = Os(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Yf("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = M))));
    }
    Jh(c, t);
  });
}
function ti(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Os(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Go(e, n)),
      i != null && r.unshift(ti(e, i, o)),
      (i = Go(e, t)),
      i != null && r.push(ti(e, i, o))),
      (e = e.return));
  }
  return r;
}
function xr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function od(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Go(n, i)), a != null && s.unshift(ti(n, a, l)))
        : o || ((a = Go(n, i)), a != null && s.push(ti(n, a, l)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Fv = /\r\n?/g,
  Hv = /\u0000|\uFFFD/g;
function id(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Fv,
      `
`,
    )
    .replace(Hv, "");
}
function Ki(e, t, n) {
  if (((t = id(t)), id(e) !== t && n)) throw Error(Y(425));
}
function bs() {}
var ou = null,
  iu = null;
function su(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var lu = typeof setTimeout == "function" ? setTimeout : void 0,
  Vv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sd = typeof Promise == "function" ? Promise : void 0,
  Bv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sd < "u"
        ? function (e) {
            return sd.resolve(null).then(e).catch(Uv);
          }
        : lu;
function Uv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ma(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Zo(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Zo(t);
}
function In(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ld(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ho = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + ho,
  ni = "__reactProps$" + ho,
  un = "__reactContainer$" + ho,
  au = "__reactEvents$" + ho,
  Wv = "__reactListeners$" + ho,
  Yv = "__reactHandles$" + ho;
function Gn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ld(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = ld(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Ni(e) {
  return (
    (e = e[Bt] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Y(33));
}
function wl(e) {
  return e[ni] || null;
}
var uu = [],
  Mr = -1;
function bn(e) {
  return { current: e };
}
function Ee(e) {
  0 > Mr || ((e.current = uu[Mr]), (uu[Mr] = null), Mr--);
}
function we(e, t) {
  (Mr++, (uu[Mr] = e.current), (e.current = t));
}
var An = {},
  Ke = bn(An),
  ot = bn(!1),
  or = An;
function Gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return An;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function it(e) {
  return ((e = e.childContextTypes), e != null);
}
function Fs() {
  (Ee(ot), Ee(Ke));
}
function ad(e, t, n) {
  if (Ke.current !== An) throw Error(Y(168));
  (we(Ke, t), we(ot, n));
}
function tg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(Y(108, z1(e) || "Unknown", o));
  return Pe({}, n, r);
}
function Hs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || An),
    (or = Ke.current),
    we(Ke, e),
    we(ot, ot.current),
    !0
  );
}
function ud(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Y(169));
  (n
    ? ((e = tg(e, t, or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ee(ot),
      Ee(Ke),
      we(Ke, e))
    : Ee(ot),
    we(ot, n));
}
var en = null,
  Sl = !1,
  ya = !1;
function ng(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Xv(e) {
  ((Sl = !0), ng(e));
}
function Fn() {
  if (!ya && en !== null) {
    ya = !0;
    var e = 0,
      t = ye;
    try {
      var n = en;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((en = null), (Sl = !1));
    } catch (o) {
      throw (en !== null && (en = en.slice(e + 1)), Mh(uc, Fn), o);
    } finally {
      ((ye = t), (ya = !1));
    }
  }
  return null;
}
var Ir = [],
  Pr = 0,
  Vs = null,
  Bs = 0,
  mt = [],
  yt = 0,
  ir = null,
  nn = 1,
  rn = "";
function Wn(e, t) {
  ((Ir[Pr++] = Bs), (Ir[Pr++] = Vs), (Vs = e), (Bs = t));
}
function rg(e, t, n) {
  ((mt[yt++] = nn), (mt[yt++] = rn), (mt[yt++] = ir), (ir = e));
  var r = nn;
  e = rn;
  var o = 32 - Tt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - Tt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (nn = (1 << (32 - Tt(t) + o)) | (n << o) | r),
      (rn = i + e));
  } else ((nn = (1 << i) | (n << o) | r), (rn = e));
}
function vc(e) {
  e.return !== null && (Wn(e, 1), rg(e, 1, 0));
}
function xc(e) {
  for (; e === Vs; )
    ((Vs = Ir[--Pr]), (Ir[Pr] = null), (Bs = Ir[--Pr]), (Ir[Pr] = null));
  for (; e === ir; )
    ((ir = mt[--yt]),
      (mt[yt] = null),
      (rn = mt[--yt]),
      (mt[yt] = null),
      (nn = mt[--yt]),
      (mt[yt] = null));
}
var ft = null,
  ct = null,
  _e = !1,
  It = null;
function og(e, t) {
  var n = vt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function cd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (ct = In(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ir !== null ? { id: nn, overflow: rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fu(e) {
  if (_e) {
    var t = ct;
    if (t) {
      var n = t;
      if (!cd(e, t)) {
        if (cu(e)) throw Error(Y(418));
        t = In(n.nextSibling);
        var r = ft;
        t && cd(e, t)
          ? og(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (ft = e));
      }
    } else {
      if (cu(e)) throw Error(Y(418));
      ((e.flags = (e.flags & -4097) | 2), (_e = !1), (ft = e));
    }
  }
}
function fd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function Qi(e) {
  if (e !== ft) return !1;
  if (!_e) return (fd(e), (_e = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !su(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (cu(e)) throw (ig(), Error(Y(418)));
    for (; t; ) (og(e, t), (t = In(t.nextSibling)));
  }
  if ((fd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = In(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ft ? In(e.stateNode.nextSibling) : null;
  return !0;
}
function ig() {
  for (var e = ct; e; ) e = In(e.nextSibling);
}
function Kr() {
  ((ct = ft = null), (_e = !1));
}
function wc(e) {
  It === null ? (It = [e]) : It.push(e);
}
var Gv = pn.ReactCurrentBatchConfig;
function Eo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Y(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(Y(284));
    if (!n._owner) throw Error(Y(290, e));
  }
  return e;
}
function Zi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      Y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function dd(e) {
  var t = e._init;
  return t(e._payload);
}
function sg(e) {
  function t(g, v) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [v]), (g.flags |= 16)) : h.push(v);
    }
  }
  function n(g, v) {
    if (!e) return null;
    for (; v !== null; ) (t(g, v), (v = v.sibling));
    return null;
  }
  function r(g, v) {
    for (g = new Map(); v !== null; )
      (v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling));
    return g;
  }
  function o(g, v) {
    return ((g = Tn(g, v)), (g.index = 0), (g.sibling = null), g);
  }
  function i(g, v, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < v ? ((g.flags |= 2), v) : h)
            : ((g.flags |= 2), v))
        : ((g.flags |= 1048576), v)
    );
  }
  function s(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function l(g, v, h, w) {
    return v === null || v.tag !== 6
      ? ((v = _a(h, g.mode, w)), (v.return = g), v)
      : ((v = o(v, h)), (v.return = g), v);
  }
  function a(g, v, h, w) {
    var _ = h.type;
    return _ === kr
      ? d(g, v, h.props.children, w, h.key)
      : v !== null &&
          (v.elementType === _ ||
            (typeof _ == "object" &&
              _ !== null &&
              _.$$typeof === vn &&
              dd(_) === v.type))
        ? ((w = o(v, h.props)), (w.ref = Eo(g, v, h)), (w.return = g), w)
        : ((w = Es(h.type, h.key, h.props, null, g.mode, w)),
          (w.ref = Eo(g, v, h)),
          (w.return = g),
          w);
  }
  function u(g, v, h, w) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== h.containerInfo ||
      v.stateNode.implementation !== h.implementation
      ? ((v = Na(h, g.mode, w)), (v.return = g), v)
      : ((v = o(v, h.children || [])), (v.return = g), v);
  }
  function d(g, v, h, w, _) {
    return v === null || v.tag !== 7
      ? ((v = tr(h, g.mode, w, _)), (v.return = g), v)
      : ((v = o(v, h)), (v.return = g), v);
  }
  function c(g, v, h) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((v = _a("" + v, g.mode, h)), (v.return = g), v);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Fi:
          return (
            (h = Es(v.type, v.key, v.props, null, g.mode, h)),
            (h.ref = Eo(g, null, v)),
            (h.return = g),
            h
          );
        case Sr:
          return ((v = Na(v, g.mode, h)), (v.return = g), v);
        case vn:
          var w = v._init;
          return c(g, w(v._payload), h);
      }
      if (Po(v) || vo(v))
        return ((v = tr(v, g.mode, h, null)), (v.return = g), v);
      Zi(g, v);
    }
    return null;
  }
  function f(g, v, h, w) {
    var _ = v !== null ? v.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return _ !== null ? null : l(g, v, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Fi:
          return h.key === _ ? a(g, v, h, w) : null;
        case Sr:
          return h.key === _ ? u(g, v, h, w) : null;
        case vn:
          return ((_ = h._init), f(g, v, _(h._payload), w));
      }
      if (Po(h) || vo(h)) return _ !== null ? null : d(g, v, h, w, null);
      Zi(g, h);
    }
    return null;
  }
  function p(g, v, h, w, _) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return ((g = g.get(h) || null), l(v, g, "" + w, _));
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Fi:
          return (
            (g = g.get(w.key === null ? h : w.key) || null),
            a(v, g, w, _)
          );
        case Sr:
          return (
            (g = g.get(w.key === null ? h : w.key) || null),
            u(v, g, w, _)
          );
        case vn:
          var N = w._init;
          return p(g, v, h, N(w._payload), _);
      }
      if (Po(w) || vo(w)) return ((g = g.get(h) || null), d(v, g, w, _, null));
      Zi(v, w);
    }
    return null;
  }
  function y(g, v, h, w) {
    for (
      var _ = null, N = null, M = v, k = (v = 0), j = null;
      M !== null && k < h.length;
      k++
    ) {
      M.index > k ? ((j = M), (M = null)) : (j = M.sibling);
      var R = f(g, M, h[k], w);
      if (R === null) {
        M === null && (M = j);
        break;
      }
      (e && M && R.alternate === null && t(g, M),
        (v = i(R, v, k)),
        N === null ? (_ = R) : (N.sibling = R),
        (N = R),
        (M = j));
    }
    if (k === h.length) return (n(g, M), _e && Wn(g, k), _);
    if (M === null) {
      for (; k < h.length; k++)
        ((M = c(g, h[k], w)),
          M !== null &&
            ((v = i(M, v, k)),
            N === null ? (_ = M) : (N.sibling = M),
            (N = M)));
      return (_e && Wn(g, k), _);
    }
    for (M = r(g, M); k < h.length; k++)
      ((j = p(M, g, k, h[k], w)),
        j !== null &&
          (e && j.alternate !== null && M.delete(j.key === null ? k : j.key),
          (v = i(j, v, k)),
          N === null ? (_ = j) : (N.sibling = j),
          (N = j)));
    return (
      e &&
        M.forEach(function (P) {
          return t(g, P);
        }),
      _e && Wn(g, k),
      _
    );
  }
  function x(g, v, h, w) {
    var _ = vo(h);
    if (typeof _ != "function") throw Error(Y(150));
    if (((h = _.call(h)), h == null)) throw Error(Y(151));
    for (
      var N = (_ = null), M = v, k = (v = 0), j = null, R = h.next();
      M !== null && !R.done;
      k++, R = h.next()
    ) {
      M.index > k ? ((j = M), (M = null)) : (j = M.sibling);
      var P = f(g, M, R.value, w);
      if (P === null) {
        M === null && (M = j);
        break;
      }
      (e && M && P.alternate === null && t(g, M),
        (v = i(P, v, k)),
        N === null ? (_ = P) : (N.sibling = P),
        (N = P),
        (M = j));
    }
    if (R.done) return (n(g, M), _e && Wn(g, k), _);
    if (M === null) {
      for (; !R.done; k++, R = h.next())
        ((R = c(g, R.value, w)),
          R !== null &&
            ((v = i(R, v, k)),
            N === null ? (_ = R) : (N.sibling = R),
            (N = R)));
      return (_e && Wn(g, k), _);
    }
    for (M = r(g, M); !R.done; k++, R = h.next())
      ((R = p(M, g, k, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && M.delete(R.key === null ? k : R.key),
          (v = i(R, v, k)),
          N === null ? (_ = R) : (N.sibling = R),
          (N = R)));
    return (
      e &&
        M.forEach(function (L) {
          return t(g, L);
        }),
      _e && Wn(g, k),
      _
    );
  }
  function S(g, v, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === kr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Fi:
          e: {
            for (var _ = h.key, N = v; N !== null; ) {
              if (N.key === _) {
                if (((_ = h.type), _ === kr)) {
                  if (N.tag === 7) {
                    (n(g, N.sibling),
                      (v = o(N, h.props.children)),
                      (v.return = g),
                      (g = v));
                    break e;
                  }
                } else if (
                  N.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === vn &&
                    dd(_) === N.type)
                ) {
                  (n(g, N.sibling),
                    (v = o(N, h.props)),
                    (v.ref = Eo(g, N, h)),
                    (v.return = g),
                    (g = v));
                  break e;
                }
                n(g, N);
                break;
              } else t(g, N);
              N = N.sibling;
            }
            h.type === kr
              ? ((v = tr(h.props.children, g.mode, w, h.key)),
                (v.return = g),
                (g = v))
              : ((w = Es(h.type, h.key, h.props, null, g.mode, w)),
                (w.ref = Eo(g, v, h)),
                (w.return = g),
                (g = w));
          }
          return s(g);
        case Sr:
          e: {
            for (N = h.key; v !== null; ) {
              if (v.key === N)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === h.containerInfo &&
                  v.stateNode.implementation === h.implementation
                ) {
                  (n(g, v.sibling),
                    (v = o(v, h.children || [])),
                    (v.return = g),
                    (g = v));
                  break e;
                } else {
                  n(g, v);
                  break;
                }
              else t(g, v);
              v = v.sibling;
            }
            ((v = Na(h, g.mode, w)), (v.return = g), (g = v));
          }
          return s(g);
        case vn:
          return ((N = h._init), S(g, v, N(h._payload), w));
      }
      if (Po(h)) return y(g, v, h, w);
      if (vo(h)) return x(g, v, h, w);
      Zi(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        v !== null && v.tag === 6
          ? (n(g, v.sibling), (v = o(v, h)), (v.return = g), (g = v))
          : (n(g, v), (v = _a(h, g.mode, w)), (v.return = g), (g = v)),
        s(g))
      : n(g, v);
  }
  return S;
}
var Qr = sg(!0),
  lg = sg(!1),
  Us = bn(null),
  Ws = null,
  zr = null,
  Sc = null;
function kc() {
  Sc = zr = Ws = null;
}
function Ec(e) {
  var t = Us.current;
  (Ee(Us), (e._currentValue = t));
}
function du(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vr(e, t) {
  ((Ws = e),
    (Sc = zr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nt = !0), (e.firstContext = null)));
}
function wt(e) {
  var t = e._currentValue;
  if (Sc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zr === null)) {
      if (Ws === null) throw Error(Y(308));
      ((zr = e), (Ws.dependencies = { lanes: 0, firstContext: e }));
    } else zr = zr.next = e;
  return t;
}
var Kn = null;
function _c(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function ag(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _c(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    cn(e, r)
  );
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var xn = !1;
function Nc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ug(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ln(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), me & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      cn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _c(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    cn(e, n)
  );
}
function ys(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), cc(e, n));
  }
}
function pd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ys(e, t, n, r) {
  var o = e.updateQueue;
  xn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    ((a.next = null), s === null ? (i = u) : (s.next = u), (s = a));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var c = o.baseState;
    ((s = 0), (d = u = a = null), (l = i));
    do {
      var f = l.lane,
        p = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            x = l;
          switch (((f = t), (p = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                c = y.call(p, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (f = typeof y == "function" ? y.call(p, c, f) : y),
                f == null)
              )
                break e;
              c = Pe({}, c, f);
              break e;
            case 2:
              xn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        ((p = {
          eventTime: p,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (a = c)) : (d = d.next = p),
          (s |= f));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (a = c),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((lr |= s), (e.lanes = s), (e.memoizedState = c));
  }
}
function hd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(Y(191, o));
        o.call(r);
      }
    }
}
var Ci = {},
  Wt = bn(Ci),
  ri = bn(Ci),
  oi = bn(Ci);
function Qn(e) {
  if (e === Ci) throw Error(Y(174));
  return e;
}
function Cc(e, t) {
  switch ((we(oi, t), we(ri, e), we(Wt, Ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ya(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ya(t, e)));
  }
  (Ee(Wt), we(Wt, t));
}
function Zr() {
  (Ee(Wt), Ee(ri), Ee(oi));
}
function cg(e) {
  Qn(oi.current);
  var t = Qn(Wt.current),
    n = Ya(t, e.type);
  t !== n && (we(ri, e), we(Wt, n));
}
function Mc(e) {
  ri.current === e && (Ee(Wt), Ee(ri));
}
var Me = bn(0);
function Xs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var va = [];
function Ic() {
  for (var e = 0; e < va.length; e++)
    va[e]._workInProgressVersionPrimary = null;
  va.length = 0;
}
var vs = pn.ReactCurrentDispatcher,
  xa = pn.ReactCurrentBatchConfig,
  sr = 0,
  Ie = null,
  De = null,
  Fe = null,
  Gs = !1,
  bo = !1,
  ii = 0,
  Kv = 0;
function We() {
  throw Error(Y(321));
}
function Pc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!At(e[n], t[n])) return !1;
  return !0;
}
function zc(e, t, n, r, o, i) {
  if (
    ((sr = i),
    (Ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vs.current = e === null || e.memoizedState === null ? Jv : ex),
    (e = n(r, o)),
    bo)
  ) {
    i = 0;
    do {
      if (((bo = !1), (ii = 0), 25 <= i)) throw Error(Y(301));
      ((i += 1),
        (Fe = De = null),
        (t.updateQueue = null),
        (vs.current = tx),
        (e = n(r, o)));
    } while (bo);
  }
  if (
    ((vs.current = Ks),
    (t = De !== null && De.next !== null),
    (sr = 0),
    (Fe = De = Ie = null),
    (Gs = !1),
    t)
  )
    throw Error(Y(300));
  return e;
}
function jc() {
  var e = ii !== 0;
  return ((ii = 0), e);
}
function Ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Fe === null ? (Ie.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe);
}
function St() {
  if (De === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Fe === null ? Ie.memoizedState : Fe.next;
  if (t !== null) ((Fe = t), (De = e));
  else {
    if (e === null) throw Error(Y(310));
    ((De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Fe === null ? (Ie.memoizedState = Fe = e) : (Fe = Fe.next = e));
  }
  return Fe;
}
function si(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wa(e) {
  var t = St(),
    n = t.queue;
  if (n === null) throw Error(Y(311));
  n.lastRenderedReducer = e;
  var r = De,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = i.next), (i.next = s));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((sr & d) === d)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((l = a = c), (s = r)) : (a = a.next = c),
          (Ie.lanes |= d),
          (lr |= d));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (s = r) : (a.next = l),
      At(r, t.memoizedState) || (nt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (Ie.lanes |= i), (lr |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Sa(e) {
  var t = St(),
    n = t.queue;
  if (n === null) throw Error(Y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== o);
    (At(i, t.memoizedState) || (nt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function fg() {}
function dg(e, t) {
  var n = Ie,
    r = St(),
    o = t(),
    i = !At(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (nt = !0)),
    (r = r.queue),
    Tc(gg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      li(9, hg.bind(null, n, r, o, t), void 0, null),
      He === null)
    )
      throw Error(Y(349));
    sr & 30 || pg(n, t, o);
  }
  return o;
}
function pg(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function hg(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), mg(t) && yg(e));
}
function gg(e, t, n) {
  return n(function () {
    mg(t) && yg(e);
  });
}
function mg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function yg(e) {
  var t = cn(e, 1);
  t !== null && $t(t, e, 1, -1);
}
function gd(e) {
  var t = Ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: si,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qv.bind(null, Ie, e)),
    [t.memoizedState, e]
  );
}
function li(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vg() {
  return St().memoizedState;
}
function xs(e, t, n, r) {
  var o = Ht();
  ((Ie.flags |= e),
    (o.memoizedState = li(1 | t, n, void 0, r === void 0 ? null : r)));
}
function kl(e, t, n, r) {
  var o = St();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (((i = s.destroy), r !== null && Pc(r, s.deps))) {
      o.memoizedState = li(t, n, i, r);
      return;
    }
  }
  ((Ie.flags |= e), (o.memoizedState = li(1 | t, n, i, r)));
}
function md(e, t) {
  return xs(8390656, 8, e, t);
}
function Tc(e, t) {
  return kl(2048, 8, e, t);
}
function xg(e, t) {
  return kl(4, 2, e, t);
}
function wg(e, t) {
  return kl(4, 4, e, t);
}
function Sg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    kl(4, 4, Sg.bind(null, t, e), n)
  );
}
function $c() {}
function Eg(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _g(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ng(e, t, n) {
  return sr & 21
    ? (At(n, t) || ((n = zh()), (Ie.lanes |= n), (lr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n));
}
function Qv(e, t) {
  var n = ye;
  ((ye = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = xa.transition;
  xa.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ye = n), (xa.transition = r));
  }
}
function Cg() {
  return St().memoizedState;
}
function Zv(e, t, n) {
  var r = jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mg(e))
  )
    Ig(t, n);
  else if (((n = ag(e, t, n, r)), n !== null)) {
    var o = qe();
    ($t(n, e, r, o), Pg(n, t, r));
  }
}
function qv(e, t, n) {
  var r = jn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mg(e)) Ig(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), At(l, s))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), _c(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ag(e, t, o, r)),
      n !== null && ((o = qe()), $t(n, e, r, o), Pg(n, t, r)));
  }
}
function Mg(e) {
  var t = e.alternate;
  return e === Ie || (t !== null && t === Ie);
}
function Ig(e, t) {
  bo = Gs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Pg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), cc(e, n));
  }
}
var Ks = {
    readContext: wt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  Jv = {
    readContext: wt,
    useCallback: function (e, t) {
      return ((Ht().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: wt,
    useEffect: md,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xs(4194308, 4, Sg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ht();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ht();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zv.bind(null, Ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ht();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: gd,
    useDebugValue: $c,
    useDeferredValue: function (e) {
      return (Ht().memoizedState = e);
    },
    useTransition: function () {
      var e = gd(!1),
        t = e[0];
      return ((e = Qv.bind(null, e[1])), (Ht().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ie,
        o = Ht();
      if (_e) {
        if (n === void 0) throw Error(Y(407));
        n = n();
      } else {
        if (((n = t()), He === null)) throw Error(Y(349));
        sr & 30 || pg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        md(gg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        li(9, hg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ht(),
        t = He.identifierPrefix;
      if (_e) {
        var n = rn,
          r = nn;
        ((n = (r & ~(1 << (32 - Tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ii++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Kv++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ex = {
    readContext: wt,
    useCallback: Eg,
    useContext: wt,
    useEffect: Tc,
    useImperativeHandle: kg,
    useInsertionEffect: xg,
    useLayoutEffect: wg,
    useMemo: _g,
    useReducer: wa,
    useRef: vg,
    useState: function () {
      return wa(si);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = St();
      return Ng(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = wa(si)[0],
        t = St().memoizedState;
      return [e, t];
    },
    useMutableSource: fg,
    useSyncExternalStore: dg,
    useId: Cg,
    unstable_isNewReconciler: !1,
  },
  tx = {
    readContext: wt,
    useCallback: Eg,
    useContext: wt,
    useEffect: Tc,
    useImperativeHandle: kg,
    useInsertionEffect: xg,
    useLayoutEffect: wg,
    useMemo: _g,
    useReducer: Sa,
    useRef: vg,
    useState: function () {
      return Sa(si);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = St();
      return De === null ? (t.memoizedState = e) : Ng(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = Sa(si)[0],
        t = St().memoizedState;
      return [e, t];
    },
    useMutableSource: fg,
    useSyncExternalStore: dg,
    useId: Cg,
    unstable_isNewReconciler: !1,
  };
function Nt(e, t) {
  if (e && e.defaultProps) {
    ((t = Pe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pu(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      o = jn(e),
      i = ln(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Pn(e, i, o)),
      t !== null && ($t(t, e, o, r), ys(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      o = jn(e),
      i = ln(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Pn(e, i, o)),
      t !== null && ($t(t, e, o, r), ys(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = qe(),
      r = jn(e),
      o = ln(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Pn(e, o, r)),
      t !== null && ($t(t, e, r, n), ys(t, e, r)));
  },
};
function yd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jo(n, r) || !Jo(o, i)
        : !0
  );
}
function zg(e, t, n) {
  var r = !1,
    o = An,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = wt(i))
      : ((o = it(t) ? or : Ke.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gr(e, o) : An)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function vd(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null));
}
function hu(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Nc(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = wt(i))
    : ((i = it(t) ? or : Ke.current), (o.context = Gr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (pu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && El.enqueueReplaceState(o, o.state, null),
      Ys(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function qr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += P1(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ka(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nx = typeof WeakMap == "function" ? WeakMap : Map;
function jg(e, t, n) {
  ((n = ln(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Zs || ((Zs = !0), (Nu = r)), gu(e, t));
    }),
    n
  );
}
function Tg(e, t, n) {
  ((n = ln(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        gu(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (gu(e, t),
          typeof r != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function xd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nx();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = mx.bind(null, e, t, n)), t.then(e, e));
}
function wd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ln(-1, 1)), (t.tag = 2), Pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rx = pn.ReactCurrentOwner,
  nt = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? lg(t, null, n, r) : Qr(t, e.child, n, r);
}
function kd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Vr(t, o),
    (r = zc(e, t, n, r, i, o)),
    (n = jc()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (_e && n && vc(t), (t.flags |= 1), Ze(e, t, r, o), t.child)
  );
}
function Ed(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), $g(e, t, i, r, o))
      : ((e = Es(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jo), n(s, r) && e.ref === t.ref)
    )
      return fn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $g(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jo(i, r) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (nt = !0);
      else return ((t.lanes = e.lanes), fn(e, t, o));
  }
  return mu(e, t, n, r, o);
}
function Lg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(Tr, at),
        (at |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(Tr, at),
          (at |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(Tr, at),
        (at |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(Tr, at),
      (at |= r));
  return (Ze(e, t, o, n), t.child);
}
function Ag(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mu(e, t, n, r, o) {
  var i = it(n) ? or : Ke.current;
  return (
    (i = Gr(t, i)),
    Vr(t, o),
    (n = zc(e, t, n, r, i, o)),
    (r = jc()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (_e && r && vc(t), (t.flags |= 1), Ze(e, t, n, o), t.child)
  );
}
function _d(e, t, n, r, o) {
  if (it(n)) {
    var i = !0;
    Hs(t);
  } else i = !1;
  if ((Vr(t, o), t.stateNode === null))
    (ws(e, t), zg(t, n, r), hu(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wt(u))
      : ((u = it(n) ? or : Ke.current), (u = Gr(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && vd(t, s, r, u)),
      (xn = !1));
    var f = t.memoizedState;
    ((s.state = f),
      Ys(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || ot.current || xn
        ? (typeof d == "function" && (pu(t, n, d, r), (a = t.memoizedState)),
          (l = xn || yd(t, n, l, r, f, a, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      ug(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Nt(t.type, l)),
      (s.props = u),
      (c = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = wt(a))
        : ((a = it(n) ? or : Ke.current), (a = Gr(t, a))));
    var p = n.getDerivedStateFromProps;
    ((d =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== c || f !== a) && vd(t, s, r, a)),
      (xn = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ys(t, r, s, o));
    var y = t.memoizedState;
    l !== c || f !== y || ot.current || xn
      ? (typeof p == "function" && (pu(t, n, p, r), (y = t.memoizedState)),
        (u = xn || yd(t, n, u, r, f, y, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yu(e, t, n, r, i, o);
}
function yu(e, t, n, r, o, i) {
  Ag(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && ud(t, n, !1), fn(e, t, i));
  ((r = t.stateNode), (rx.current = t));
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Qr(t, e.child, null, i)), (t.child = Qr(t, null, l, i)))
      : Ze(e, t, l, i),
    (t.memoizedState = r.state),
    o && ud(t, n, !0),
    t.child
  );
}
function Dg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ad(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ad(e, t.context, !1),
    Cc(e, t.containerInfo));
}
function Nd(e, t, n, r, o) {
  return (Kr(), wc(o), (t.flags |= 256), Ze(e, t, n, r), t.child);
}
var vu = { dehydrated: null, treeContext: null, retryLane: 0 };
function xu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rg(e, t, n) {
  var r = t.pendingProps,
    o = Me.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Me, o & 1),
    e === null)
  )
    return (
      fu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Cl(s, r, 0, null)),
              (e = tr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = xu(n)),
              (t.memoizedState = vu),
              e)
            : Lc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return ox(e, t, s, r, l, o, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Tn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Tn(l, i)) : ((i = tr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? xu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = vu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Tn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Lc(e, t) {
  return (
    (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qi(e, t, n, r) {
  return (
    r !== null && wc(r),
    Qr(t, e.child, null, n),
    (e = Lc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ox(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ka(Error(Y(422)))), qi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Cl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = tr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Qr(t, e.child, null, s),
          (t.child.memoizedState = xu(s)),
          (t.memoizedState = vu),
          i);
  if (!(t.mode & 1)) return qi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (i = Error(Y(419))),
      (r = ka(i, r, void 0)),
      qi(e, t, s, r)
    );
  }
  if (((l = (s & e.childLanes) !== 0), nt || l)) {
    if (((r = He), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), cn(e, o), $t(r, e, o, -1)));
    }
    return (Fc(), (r = ka(Error(Y(421)))), qi(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yx.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ct = In(o.nextSibling)),
      (ft = t),
      (_e = !0),
      (It = null),
      e !== null &&
        ((mt[yt++] = nn),
        (mt[yt++] = rn),
        (mt[yt++] = ir),
        (nn = e.id),
        (rn = e.overflow),
        (ir = t)),
      (t = Lc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), du(e.return, t, n));
}
function Ea(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Og(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ze(e, t, r.children, n), (r = Me.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cd(e, n, t);
        else if (e.tag === 19) Cd(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((we(Me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Xs(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ea(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Xs(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ea(t, !0, n, null, i);
        break;
      case "together":
        Ea(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ws(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (lr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Tn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function ix(e, t, n) {
  switch (t.tag) {
    case 3:
      (Dg(t), Kr());
      break;
    case 5:
      cg(t);
      break;
    case 1:
      it(t.type) && Hs(t);
      break;
    case 4:
      Cc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (we(Us, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Me, Me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Rg(e, t, n)
            : (we(Me, Me.current & 1),
              (e = fn(e, t, n)),
              e !== null ? e.sibling : null);
      we(Me, Me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Og(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Me, Me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Lg(e, t, n));
  }
  return fn(e, t, n);
}
var bg, wu, Fg, Hg;
bg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
wu = function () {};
Fg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Qn(Wt.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = Va(e, o)), (r = Va(e, r)), (i = []));
        break;
      case "select":
        ((o = Pe({}, o, { value: void 0 })),
          (r = Pe({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = Wa(e, o)), (r = Wa(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = bs);
    }
    Xa(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Yo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else (n || (i || (i = []), i.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Yo.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ke("scroll", e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Hg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _o(e, t) {
  if (!_e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function sx(e, t, n) {
  var r = t.pendingProps;
  switch ((xc(t), t.tag)) {
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
      return (Ye(t), null);
    case 1:
      return (it(t.type) && Fs(), Ye(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Zr(),
        Ee(ot),
        Ee(Ke),
        Ic(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (Iu(It), (It = null)))),
        wu(e, t),
        Ye(t),
        null
      );
    case 5:
      Mc(t);
      var o = Qn(oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Fg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Y(166));
          return (Ye(t), null);
        }
        if (((e = Qn(Wt.current)), Qi(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Bt] = t), (r[ni] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ke("cancel", r), ke("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < jo.length; o++) ke(jo[o], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ke("error", r), ke("load", r));
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              (Af(r, i), ke("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                ke("invalid", r));
              break;
            case "textarea":
              (Rf(r, i), ke("invalid", r));
          }
          (Xa(n, i), (o = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Yo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              (Hi(r), Df(r, i, !0));
              break;
            case "textarea":
              (Hi(r), Of(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = bs);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Bt] = t),
            (e[ni] = r),
            bg(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = Ga(n, r)), n)) {
              case "dialog":
                (ke("cancel", e), ke("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ke("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < jo.length; o++) ke(jo[o], e);
                o = r;
                break;
              case "source":
                (ke("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (ke("error", e), ke("load", e), (o = r));
                break;
              case "details":
                (ke("toggle", e), (o = r));
                break;
              case "input":
                (Af(e, r), (o = Va(e, r)), ke("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Pe({}, r, { value: void 0 })),
                  ke("invalid", e));
                break;
              case "textarea":
                (Rf(e, r), (o = Wa(e, r)), ke("invalid", e));
                break;
              default:
                o = r;
            }
            (Xa(n, o), (l = o));
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? vh(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && mh(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Xo(e, a)
                        : typeof a == "number" && Xo(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Yo.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && ke("scroll", e)
                          : a != null && oc(e, i, a, s));
              }
            switch (n) {
              case "input":
                (Hi(e), Df(e, r, !1));
                break;
              case "textarea":
                (Hi(e), Of(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ln(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Or(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Or(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = bs);
            }
            switch (n) {
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ye(t), null);
    case 6:
      if (e && t.stateNode != null) Hg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Y(166));
        if (((n = Qn(oi.current)), Qn(Wt.current), Qi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (i = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Bt] = t),
            (t.stateNode = r));
      }
      return (Ye(t), null);
    case 13:
      if (
        (Ee(Me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (_e && ct !== null && t.mode & 1 && !(t.flags & 128))
          (ig(), Kr(), (t.flags |= 98560), (i = !1));
        else if (((i = Qi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(Y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(Y(317));
            i[Bt] = t;
          } else
            (Kr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ye(t), (i = !1));
        } else (It !== null && (Iu(It), (It = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Me.current & 1 ? Re === 0 && (Re = 3) : Fc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        Zr(),
        wu(e, t),
        e === null && ei(t.stateNode.containerInfo),
        Ye(t),
        null
      );
    case 10:
      return (Ec(t.type._context), Ye(t), null);
    case 17:
      return (it(t.type) && Fs(), Ye(t), null);
    case 19:
      if ((Ee(Me), (i = t.memoizedState), i === null)) return (Ye(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) _o(i, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Xs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    _o(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (we(Me, (Me.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $e() > Jr &&
            ((t.flags |= 128), (r = !0), _o(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _o(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !_e)
            )
              return (Ye(t), null);
          } else
            2 * $e() - i.renderingStartTime > Jr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _o(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $e()),
          (t.sibling = null),
          (n = Me.current),
          we(Me, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        bc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Y(156, t.tag));
}
function lx(e, t) {
  switch ((xc(t), t.tag)) {
    case 1:
      return (
        it(t.type) && Fs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zr(),
        Ee(ot),
        Ee(Ke),
        Ic(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Mc(t), null);
    case 13:
      if (
        (Ee(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Y(340));
        Kr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Ee(Me), null);
    case 4:
      return (Zr(), null);
    case 10:
      return (Ec(t.type._context), null);
    case 22:
    case 23:
      return (bc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ji = !1,
  Ge = !1,
  ax = typeof WeakSet == "function" ? WeakSet : Set,
  Z = null;
function jr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Te(e, t, r);
      }
    else n.current = null;
}
function Su(e, t, n) {
  try {
    n();
  } catch (r) {
    Te(e, t, r);
  }
}
var Md = !1;
function ux(e, t) {
  if (((ou = Ds), (e = Yh()), yc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              c !== n || (o !== 0 && c.nodeType !== 3) || (l = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (p = c.firstChild) !== null;
            )
              ((f = c), (c = p));
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (l = s),
                f === i && ++d === r && (a = s),
                (p = c.nextSibling) !== null)
              )
                break;
              ((c = f), (f = c.parentNode));
            }
            c = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (iu = { focusedElem: e, selectionRange: n }, Ds = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (Z = e));
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    S = y.memoizedState,
                    g = t.stateNode,
                    v = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Nt(t.type, x),
                      S,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Y(163));
            }
        } catch (w) {
          Te(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (Z = e));
          break;
        }
        Z = t.return;
      }
  return ((y = Md), (Md = !1), y);
}
function Fo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && Su(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function _l(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ku(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vg(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Vg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[ni], delete t[au], delete t[Wv], delete t[Yv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Bg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Id(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Eu(e, t, n), e = e.sibling; e !== null; )
      (Eu(e, t, n), (e = e.sibling));
}
function _u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_u(e, t, n), e = e.sibling; e !== null; )
      (_u(e, t, n), (e = e.sibling));
}
var Ve = null,
  Ct = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) (Ug(e, t, n), (n = n.sibling));
}
function Ug(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ge || jr(n, t);
    case 6:
      var r = Ve,
        o = Ct;
      ((Ve = null),
        gn(e, t, n),
        (Ve = r),
        (Ct = o),
        Ve !== null &&
          (Ct
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ve.removeChild(n.stateNode)));
      break;
    case 18:
      Ve !== null &&
        (Ct
          ? ((e = Ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? ma(e.parentNode, n)
              : e.nodeType === 1 && ma(e, n),
            Zo(e))
          : ma(Ve, n.stateNode));
      break;
    case 4:
      ((r = Ve),
        (o = Ct),
        (Ve = n.stateNode.containerInfo),
        (Ct = !0),
        gn(e, t, n),
        (Ve = r),
        (Ct = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Su(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !Ge &&
        (jr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          Te(n, t, l);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ge = (r = Ge) || n.memoizedState !== null), gn(e, t, n), (Ge = r))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function Pd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new ax()),
      t.forEach(function (r) {
        var o = vx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function _t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Ve = l.stateNode), (Ct = !1));
              break e;
            case 3:
              ((Ve = l.stateNode.containerInfo), (Ct = !0));
              break e;
            case 4:
              ((Ve = l.stateNode.containerInfo), (Ct = !0));
              break e;
          }
          l = l.return;
        }
        if (Ve === null) throw Error(Y(160));
        (Ug(i, s, o), (Ve = null), (Ct = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        Te(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Wg(t, e), (t = t.sibling));
}
function Wg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_t(t, e), bt(e), r & 4)) {
        try {
          (Fo(3, e, e.return), _l(3, e));
        } catch (x) {
          Te(e, e.return, x);
        }
        try {
          Fo(5, e, e.return);
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      break;
    case 1:
      (_t(t, e), bt(e), r & 512 && n !== null && jr(n, n.return));
      break;
    case 5:
      if (
        (_t(t, e),
        bt(e),
        r & 512 && n !== null && jr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xo(o, "");
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && i.type === "radio" && i.name != null && ph(o, i),
              Ga(l, s));
            var u = Ga(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                c = a[s + 1];
              d === "style"
                ? vh(o, c)
                : d === "dangerouslySetInnerHTML"
                  ? mh(o, c)
                  : d === "children"
                    ? Xo(o, c)
                    : oc(o, d, c, u);
            }
            switch (l) {
              case "input":
                Ba(o, i);
                break;
              case "textarea":
                hh(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Or(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Or(o, !!i.multiple, i.defaultValue, !0)
                      : Or(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ni] = i;
          } catch (x) {
            Te(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((_t(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(Y(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (x) {
          Te(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (_t(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zo(t.containerInfo);
        } catch (x) {
          Te(e, e.return, x);
        }
      break;
    case 4:
      (_t(t, e), bt(e));
      break;
    case 13:
      (_t(t, e),
        bt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Rc = $e())),
        r & 4 && Pd(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ge = (u = Ge) || d), _t(t, e), (Ge = u)) : _t(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (Z = e, d = e.child; d !== null; ) {
            for (c = Z = d; Z !== null; ) {
              switch (((f = Z), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fo(4, f, f.return);
                  break;
                case 1:
                  jr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (x) {
                      Te(r, n, x);
                    }
                  }
                  break;
                case 5:
                  jr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jd(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (Z = p)) : jd(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                ((o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = c.stateNode),
                      (a = c.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = yh("display", s))));
              } catch (x) {
                Te(e, e.return, x);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (x) {
                Te(e, e.return, x);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            ((c.child.return = c), (c = c.child));
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            (d === c && (d = null), (c = c.return));
          }
          (d === c && (d = null),
            (c.sibling.return = c.return),
            (c = c.sibling));
        }
      }
      break;
    case 19:
      (_t(t, e), bt(e), r & 4 && Pd(e));
      break;
    case 21:
      break;
    default:
      (_t(t, e), bt(e));
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Y(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xo(o, ""), (r.flags &= -33));
          var i = Id(e);
          _u(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Id(e);
          Eu(e, l, s);
          break;
        default:
          throw Error(Y(161));
      }
    } catch (a) {
      Te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cx(e, t, n) {
  ((Z = e), Yg(e));
}
function Yg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ji;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ge;
        l = Ji;
        var u = Ge;
        if (((Ji = s), (Ge = a) && !u))
          for (Z = o; Z !== null; )
            ((s = Z),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Td(o)
                : a !== null
                  ? ((a.return = s), (Z = a))
                  : Td(o));
        for (; i !== null; ) ((Z = i), Yg(i), (i = i.sibling));
        ((Z = o), (Ji = l), (Ge = u));
      }
      zd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Z = i)) : zd(e);
  }
}
function zd(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || _l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && hd(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hd(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && Zo(c);
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
              throw Error(Y(163));
          }
        Ge || (t.flags & 512 && ku(t));
      } catch (f) {
        Te(t, t.return, f);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (Z = n));
      break;
    }
    Z = t.return;
  }
}
function jd(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (Z = n));
      break;
    }
    Z = t.return;
  }
}
function Td(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (a) {
            Te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Te(t, o, a);
            }
          }
          var i = t.return;
          try {
            ku(t);
          } catch (a) {
            Te(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ku(t);
          } catch (a) {
            Te(t, s, a);
          }
      }
    } catch (a) {
      Te(t, t.return, a);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (Z = l));
      break;
    }
    Z = t.return;
  }
}
var fx = Math.ceil,
  Qs = pn.ReactCurrentDispatcher,
  Ac = pn.ReactCurrentOwner,
  xt = pn.ReactCurrentBatchConfig,
  me = 0,
  He = null,
  Le = null,
  Be = 0,
  at = 0,
  Tr = bn(0),
  Re = 0,
  ai = null,
  lr = 0,
  Nl = 0,
  Dc = 0,
  Ho = null,
  tt = null,
  Rc = 0,
  Jr = 1 / 0,
  Jt = null,
  Zs = !1,
  Nu = null,
  zn = null,
  es = !1,
  _n = null,
  qs = 0,
  Vo = 0,
  Cu = null,
  Ss = -1,
  ks = 0;
function qe() {
  return me & 6 ? $e() : Ss !== -1 ? Ss : (Ss = $e());
}
function jn(e) {
  return e.mode & 1
    ? me & 2 && Be !== 0
      ? Be & -Be
      : Gv.transition !== null
        ? (ks === 0 && (ks = zh()), ks)
        : ((e = ye),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rh(e.type))),
          e)
    : 1;
}
function $t(e, t, n, r) {
  if (50 < Vo) throw ((Vo = 0), (Cu = null), Error(Y(185)));
  (Ei(e, n, r),
    (!(me & 2) || e !== He) &&
      (e === He && (!(me & 2) && (Nl |= n), Re === 4 && Sn(e, Be)),
      st(e, r),
      n === 1 && me === 0 && !(t.mode & 1) && ((Jr = $e() + 500), Sl && Fn())));
}
function st(e, t) {
  var n = e.callbackNode;
  G1(e, t);
  var r = As(e, e === He ? Be : 0);
  if (r === 0)
    (n !== null && Hf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hf(n), t === 1))
      (e.tag === 0 ? Xv($d.bind(null, e)) : ng($d.bind(null, e)),
        Bv(function () {
          !(me & 6) && Fn();
        }),
        (n = null));
    else {
      switch (jh(r)) {
        case 1:
          n = uc;
          break;
        case 4:
          n = Ih;
          break;
        case 16:
          n = Ls;
          break;
        case 536870912:
          n = Ph;
          break;
        default:
          n = Ls;
      }
      n = em(n, Xg.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Xg(e, t) {
  if (((Ss = -1), (ks = 0), me & 6)) throw Error(Y(327));
  var n = e.callbackNode;
  if (Br() && e.callbackNode !== n) return null;
  var r = As(e, e === He ? Be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Js(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = Kg();
    (He !== e || Be !== t) && ((Jt = null), (Jr = $e() + 500), er(e, t));
    do
      try {
        hx();
        break;
      } catch (l) {
        Gg(e, l);
      }
    while (!0);
    (kc(),
      (Qs.current = i),
      (me = o),
      Le !== null ? (t = 0) : ((He = null), (Be = 0), (t = Re)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ja(e)), o !== 0 && ((r = o), (t = Mu(e, o)))), t === 1)
    )
      throw ((n = ai), er(e, 0), Sn(e, r), st(e, $e()), n);
    if (t === 6) Sn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !dx(o) &&
          ((t = Js(e, r)),
          t === 2 && ((i = Ja(e)), i !== 0 && ((r = i), (t = Mu(e, i)))),
          t === 1))
      )
        throw ((n = ai), er(e, 0), Sn(e, r), st(e, $e()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Y(345));
        case 2:
          Yn(e, tt, Jt);
          break;
        case 3:
          if (
            (Sn(e, r), (r & 130023424) === r && ((t = Rc + 500 - $e()), 10 < t))
          ) {
            if (As(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (qe(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = lu(Yn.bind(null, e, tt, Jt), t);
            break;
          }
          Yn(e, tt, Jt);
          break;
        case 4:
          if ((Sn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Tt(r);
            ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
          }
          if (
            ((r = o),
            (r = $e() - r),
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
                          : 1960 * fx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = lu(Yn.bind(null, e, tt, Jt), r);
            break;
          }
          Yn(e, tt, Jt);
          break;
        case 5:
          Yn(e, tt, Jt);
          break;
        default:
          throw Error(Y(329));
      }
    }
  }
  return (st(e, $e()), e.callbackNode === n ? Xg.bind(null, e) : null);
}
function Mu(e, t) {
  var n = Ho;
  return (
    e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    (e = Js(e, t)),
    e !== 2 && ((t = tt), (tt = n), t !== null && Iu(t)),
    e
  );
}
function Iu(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e);
}
function dx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!At(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Sn(e, t) {
  for (
    t &= ~Dc,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Tt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function $d(e) {
  if (me & 6) throw Error(Y(327));
  Br();
  var t = As(e, 0);
  if (!(t & 1)) return (st(e, $e()), null);
  var n = Js(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ja(e);
    r !== 0 && ((t = r), (n = Mu(e, r)));
  }
  if (n === 1) throw ((n = ai), er(e, 0), Sn(e, t), st(e, $e()), n);
  if (n === 6) throw Error(Y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yn(e, tt, Jt),
    st(e, $e()),
    null
  );
}
function Oc(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    ((me = n), me === 0 && ((Jr = $e() + 500), Sl && Fn()));
  }
}
function ar(e) {
  _n !== null && _n.tag === 0 && !(me & 6) && Br();
  var t = me;
  me |= 1;
  var n = xt.transition,
    r = ye;
  try {
    if (((xt.transition = null), (ye = 1), e)) return e();
  } finally {
    ((ye = r), (xt.transition = n), (me = t), !(me & 6) && Fn());
  }
}
function bc() {
  ((at = Tr.current), Ee(Tr));
}
function er(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vv(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((xc(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Fs());
          break;
        case 3:
          (Zr(), Ee(ot), Ee(Ke), Ic());
          break;
        case 5:
          Mc(r);
          break;
        case 4:
          Zr();
          break;
        case 13:
          Ee(Me);
          break;
        case 19:
          Ee(Me);
          break;
        case 10:
          Ec(r.type._context);
          break;
        case 22:
        case 23:
          bc();
      }
      n = n.return;
    }
  if (
    ((He = e),
    (Le = e = Tn(e.current, null)),
    (Be = at = t),
    (Re = 0),
    (ai = null),
    (Dc = Nl = lr = 0),
    (tt = Ho = null),
    Kn !== null)
  ) {
    for (t = 0; t < Kn.length; t++)
      if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = o), (r.next = s));
        }
        n.pending = r;
      }
    Kn = null;
  }
  return e;
}
function Gg(e, t) {
  do {
    var n = Le;
    try {
      if ((kc(), (vs.current = Ks), Gs)) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Gs = !1;
      }
      if (
        ((sr = 0),
        (Fe = De = Ie = null),
        (bo = !1),
        (ii = 0),
        (Ac.current = null),
        n === null || n.return === null)
      ) {
        ((Re = 1), (ai = t), (Le = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Be),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = wd(s);
          if (p !== null) {
            ((p.flags &= -257),
              Sd(p, s, l, i, t),
              p.mode & 1 && xd(i, u, t),
              (t = p),
              (a = u));
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              (x.add(a), (t.updateQueue = x));
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (xd(i, u, t), Fc());
              break e;
            }
            a = Error(Y(426));
          }
        } else if (_e && l.mode & 1) {
          var S = wd(s);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              Sd(S, s, l, i, t),
              wc(qr(a, l)));
            break e;
          }
        }
        ((i = a = qr(a, l)),
          Re !== 4 && (Re = 2),
          Ho === null ? (Ho = [i]) : Ho.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var g = jg(i, a, t);
              pd(i, g);
              break e;
            case 1:
              l = a;
              var v = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (zn === null || !zn.has(h))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var w = Tg(i, l, t);
                pd(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Zg(n);
    } catch (_) {
      ((t = _), Le === n && n !== null && (Le = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Kg() {
  var e = Qs.current;
  return ((Qs.current = Ks), e === null ? Ks : e);
}
function Fc() {
  ((Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    He === null || (!(lr & 268435455) && !(Nl & 268435455)) || Sn(He, Be));
}
function Js(e, t) {
  var n = me;
  me |= 2;
  var r = Kg();
  (He !== e || Be !== t) && ((Jt = null), er(e, t));
  do
    try {
      px();
      break;
    } catch (o) {
      Gg(e, o);
    }
  while (!0);
  if ((kc(), (me = n), (Qs.current = r), Le !== null)) throw Error(Y(261));
  return ((He = null), (Be = 0), Re);
}
function px() {
  for (; Le !== null; ) Qg(Le);
}
function hx() {
  for (; Le !== null && !b1(); ) Qg(Le);
}
function Qg(e) {
  var t = Jg(e.alternate, e, at);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Zg(e) : (Le = t),
    (Ac.current = null));
}
function Zg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lx(n, t)), n !== null)) {
        ((n.flags &= 32767), (Le = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Re = 6), (Le = null));
        return;
      }
    } else if (((n = sx(n, t, at)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function Yn(e, t, n) {
  var r = ye,
    o = xt.transition;
  try {
    ((xt.transition = null), (ye = 1), gx(e, t, n, r));
  } finally {
    ((xt.transition = o), (ye = r));
  }
  return null;
}
function gx(e, t, n, r) {
  do Br();
  while (_n !== null);
  if (me & 6) throw Error(Y(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (K1(e, i),
    e === He && ((Le = He = null), (Be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      es ||
      ((es = !0),
      em(Ls, function () {
        return (Br(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = xt.transition), (xt.transition = null));
    var s = ye;
    ye = 1;
    var l = me;
    ((me |= 4),
      (Ac.current = null),
      ux(e, n),
      Wg(n, e),
      Av(iu),
      (Ds = !!ou),
      (iu = ou = null),
      (e.current = n),
      cx(n),
      F1(),
      (me = l),
      (ye = s),
      (xt.transition = i));
  } else e.current = n;
  if (
    (es && ((es = !1), (_n = e), (qs = o)),
    (i = e.pendingLanes),
    i === 0 && (zn = null),
    B1(n.stateNode),
    st(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Zs) throw ((Zs = !1), (e = Nu), (Nu = null), e);
  return (
    qs & 1 && e.tag !== 0 && Br(),
    (i = e.pendingLanes),
    i & 1 ? (e === Cu ? Vo++ : ((Vo = 0), (Cu = e))) : (Vo = 0),
    Fn(),
    null
  );
}
function Br() {
  if (_n !== null) {
    var e = jh(qs),
      t = xt.transition,
      n = ye;
    try {
      if (((xt.transition = null), (ye = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (qs = 0), me & 6)) throw Error(Y(331));
        var o = me;
        for (me |= 4, Z = e.current; Z !== null; ) {
          var i = Z,
            s = i.child;
          if (Z.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (Z = u; Z !== null; ) {
                  var d = Z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) ((c.return = d), (Z = c));
                  else
                    for (; Z !== null; ) {
                      d = Z;
                      var f = d.sibling,
                        p = d.return;
                      if ((Vg(d), d === u)) {
                        Z = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = p), (Z = f));
                        break;
                      }
                      Z = p;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var S = x.sibling;
                    ((x.sibling = null), (x = S));
                  } while (x !== null);
                }
              }
              Z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (Z = s));
          else
            e: for (; Z !== null; ) {
              if (((i = Z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fo(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                ((g.return = i.return), (Z = g));
                break e;
              }
              Z = i.return;
            }
        }
        var v = e.current;
        for (Z = v; Z !== null; ) {
          s = Z;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) ((h.return = s), (Z = h));
          else
            e: for (s = v; Z !== null; ) {
              if (((l = Z), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(9, l);
                  }
                } catch (_) {
                  Te(l, l.return, _);
                }
              if (l === s) {
                Z = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                ((w.return = l.return), (Z = w));
                break e;
              }
              Z = l.return;
            }
        }
        if (
          ((me = o), Fn(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        )
          try {
            Ut.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ye = n), (xt.transition = t));
    }
  }
  return !1;
}
function Ld(e, t, n) {
  ((t = qr(n, t)),
    (t = jg(e, t, 1)),
    (e = Pn(e, t, 1)),
    (t = qe()),
    e !== null && (Ei(e, 1, t), st(e, t)));
}
function Te(e, t, n) {
  if (e.tag === 3) Ld(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ld(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zn === null || !zn.has(r)))
        ) {
          ((e = qr(n, e)),
            (e = Tg(t, e, 1)),
            (t = Pn(t, e, 1)),
            (e = qe()),
            t !== null && (Ei(t, 1, e), st(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function mx(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    He === e &&
      (Be & n) === n &&
      (Re === 4 || (Re === 3 && (Be & 130023424) === Be && 500 > $e() - Rc)
        ? er(e, 0)
        : (Dc |= n)),
    st(e, t));
}
function qg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ui), (Ui <<= 1), !(Ui & 130023424) && (Ui = 4194304))
      : (t = 1));
  var n = qe();
  ((e = cn(e, t)), e !== null && (Ei(e, t, n), st(e, n)));
}
function yx(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), qg(e, n));
}
function vx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Y(314));
  }
  (r !== null && r.delete(t), qg(e, n));
}
var Jg;
Jg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ot.current) nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((nt = !1), ix(e, t, n));
      nt = !!(e.flags & 131072);
    }
  else ((nt = !1), _e && t.flags & 1048576 && rg(t, Bs, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ws(e, t), (e = t.pendingProps));
      var o = Gr(t, Ke.current);
      (Vr(t, n), (o = zc(null, t, r, e, o, n)));
      var i = jc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(r) ? ((i = !0), Hs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Nc(t),
            (o.updater = El),
            (t.stateNode = o),
            (o._reactInternals = t),
            hu(t, r, e, n),
            (t = yu(null, t, r, !0, i, n)))
          : ((t.tag = 0), _e && i && vc(t), Ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ws(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = wx(r)),
          (e = Nt(r, e)),
          o)
        ) {
          case 0:
            t = mu(null, t, r, e, n);
            break e;
          case 1:
            t = _d(null, t, r, e, n);
            break e;
          case 11:
            t = kd(null, t, r, e, n);
            break e;
          case 14:
            t = Ed(null, t, r, Nt(r.type, e), n);
            break e;
        }
        throw Error(Y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        mu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        _d(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Dg(t), e === null)) throw Error(Y(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          ug(e, t),
          Ys(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = qr(Error(Y(423)), t)), (t = Nd(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = qr(Error(Y(424)), t)), (t = Nd(e, t, r, n, o)));
            break e;
          } else
            for (
              ct = In(t.stateNode.containerInfo.firstChild),
                ft = t,
                _e = !0,
                It = null,
                n = lg(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Kr(), r === o)) {
            t = fn(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cg(t),
        e === null && fu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        su(r, o) ? (s = null) : i !== null && su(r, i) && (t.flags |= 32),
        Ag(e, t),
        Ze(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && fu(t), null);
    case 13:
      return Rg(e, t, n);
    case 4:
      return (
        Cc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qr(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        kd(e, t, r, o, n)
      );
    case 7:
      return (Ze(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ze(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ze(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          we(Us, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (At(i.value, s)) {
            if (i.children === o.children && !ot.current) {
              t = fn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = ln(-1, n & -n)), (a.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      du(i.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(Y(341));
                ((s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  du(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (Ze(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Vr(t, n),
        (o = wt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Nt(r, t.pendingProps)),
        (o = Nt(r.type, o)),
        Ed(e, t, r, o, n)
      );
    case 15:
      return $g(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        ws(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), Hs(t)) : (e = !1),
        Vr(t, n),
        zg(t, r, o),
        hu(t, r, o, n),
        yu(null, t, r, !0, e, n)
      );
    case 19:
      return Og(e, t, n);
    case 22:
      return Lg(e, t, n);
  }
  throw Error(Y(156, t.tag));
};
function em(e, t) {
  return Mh(e, t);
}
function xx(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function vt(e, t, n, r) {
  return new xx(e, t, n, r);
}
function Hc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function wx(e) {
  if (typeof e == "function") return Hc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sc)) return 11;
    if (e === lc) return 14;
  }
  return 2;
}
function Tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Es(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Hc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case kr:
        return tr(n.children, o, i, t);
      case ic:
        ((s = 8), (o |= 8));
        break;
      case Oa:
        return (
          (e = vt(12, n, t, o | 2)),
          (e.elementType = Oa),
          (e.lanes = i),
          e
        );
      case ba:
        return ((e = vt(13, n, t, o)), (e.elementType = ba), (e.lanes = i), e);
      case Fa:
        return ((e = vt(19, n, t, o)), (e.elementType = Fa), (e.lanes = i), e);
      case ch:
        return Cl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ah:
              s = 10;
              break e;
            case uh:
              s = 9;
              break e;
            case sc:
              s = 11;
              break e;
            case lc:
              s = 14;
              break e;
            case vn:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(Y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function tr(e, t, n, r) {
  return ((e = vt(7, e, r, t)), (e.lanes = n), e);
}
function Cl(e, t, n, r) {
  return (
    (e = vt(22, e, r, t)),
    (e.elementType = ch),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _a(e, t, n) {
  return ((e = vt(6, e, null, t)), (e.lanes = n), e);
}
function Na(e, t, n) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sx(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ia(0)),
    (this.expirationTimes = ia(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ia(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Vc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Sx(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = vt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Nc(i),
    e
  );
}
function kx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tm(e) {
  if (!e) return An;
  e = e._reactInternals;
  e: {
    if (hr(e) !== e || e.tag !== 1) throw Error(Y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n)) return tg(e, n, t);
  }
  return t;
}
function nm(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Vc(n, r, !0, e, o, i, s, l, a)),
    (e.context = tm(null)),
    (n = e.current),
    (r = qe()),
    (o = jn(n)),
    (i = ln(r, o)),
    (i.callback = t ?? null),
    Pn(n, i, o),
    (e.current.lanes = o),
    Ei(e, o, r),
    st(e, r),
    e
  );
}
function Ml(e, t, n, r) {
  var o = t.current,
    i = qe(),
    s = jn(o);
  return (
    (n = tm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ln(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pn(o, t, s)),
    e !== null && ($t(e, o, s, i), ys(e, o, s)),
    s
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ad(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bc(e, t) {
  (Ad(e, t), (e = e.alternate) && Ad(e, t));
}
function Ex() {
  return null;
}
var rm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uc(e) {
  this._internalRoot = e;
}
Il.prototype.render = Uc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Y(409));
  Ml(e, t, null, null);
};
Il.prototype.unmount = Uc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (ar(function () {
      Ml(null, e, null, null);
    }),
      (t[un] = null));
  }
};
function Il(e) {
  this._internalRoot = e;
}
Il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++);
    (wn.splice(n, 0, e), n === 0 && Dh(e));
  }
};
function Wc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dd() {}
function _x(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = el(s);
        i.call(u);
      };
    }
    var s = nm(t, r, e, 0, null, !1, !1, "", Dd);
    return (
      (e._reactRootContainer = s),
      (e[un] = s.current),
      ei(e.nodeType === 8 ? e.parentNode : e),
      ar(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = el(a);
      l.call(u);
    };
  }
  var a = Vc(e, 0, !1, null, null, !1, !1, "", Dd);
  return (
    (e._reactRootContainer = a),
    (e[un] = a.current),
    ei(e.nodeType === 8 ? e.parentNode : e),
    ar(function () {
      Ml(t, a, n, r);
    }),
    a
  );
}
function zl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = el(s);
        l.call(a);
      };
    }
    Ml(t, s, e, o);
  } else s = _x(n, t, e, o, r);
  return el(s);
}
Th = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zo(t.pendingLanes);
        n !== 0 &&
          (cc(t, n | 1), st(t, $e()), !(me & 6) && ((Jr = $e() + 500), Fn()));
      }
      break;
    case 13:
      (ar(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var o = qe();
          $t(r, e, 1, o);
        }
      }),
        Bc(e, 1));
  }
};
fc = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = qe();
      $t(t, e, 134217728, n);
    }
    Bc(e, 134217728);
  }
};
$h = function (e) {
  if (e.tag === 13) {
    var t = jn(e),
      n = cn(e, t);
    if (n !== null) {
      var r = qe();
      $t(n, e, t, r);
    }
    Bc(e, t);
  }
};
Lh = function () {
  return ye;
};
Ah = function (e, t) {
  var n = ye;
  try {
    return ((ye = e), t());
  } finally {
    ye = n;
  }
};
Qa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ba(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = wl(r);
            if (!o) throw Error(Y(90));
            (dh(r), Ba(r, o));
          }
        }
      }
      break;
    case "textarea":
      hh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Or(e, !!n.multiple, t, !1));
  }
};
Sh = Oc;
kh = ar;
var Nx = { usingClientEntryPoint: !1, Events: [Ni, Cr, wl, xh, wh, Oc] },
  No = {
    findFiberByHostInstance: Gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Cx = {
    bundleType: No.bundleType,
    version: No.version,
    rendererPackageName: No.rendererPackageName,
    rendererConfig: No.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Nh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: No.findFiberByHostInstance || Ex,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ts.isDisabled && ts.supportsFiber)
    try {
      ((ml = ts.inject(Cx)), (Ut = ts));
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nx;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wc(t)) throw Error(Y(200));
  return kx(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!Wc(e)) throw Error(Y(299));
  var n = !1,
    r = "",
    o = rm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Vc(e, 1, !1, null, null, n, !1, r, o)),
    (e[un] = t.current),
    ei(e.nodeType === 8 ? e.parentNode : e),
    new Uc(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Y(188))
      : ((e = Object.keys(e).join(",")), Error(Y(268, e)));
  return ((e = Nh(t)), (e = e === null ? null : e.stateNode), e);
};
ht.flushSync = function (e) {
  return ar(e);
};
ht.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(Y(200));
  return zl(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!Wc(e)) throw Error(Y(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = rm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = nm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[un] = t.current),
    ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Il(t);
};
ht.render = function (e, t, n) {
  if (!Pl(t)) throw Error(Y(200));
  return zl(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(Y(40));
  return e._reactRootContainer
    ? (ar(function () {
        zl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[un] = null));
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = Oc;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(Y(200));
  if (e == null || e._reactInternals === void 0) throw Error(Y(38));
  return zl(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function om() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om);
    } catch (e) {
      console.error(e);
    }
}
(om(), (oh.exports = ht));
var Mx = oh.exports,
  im,
  Rd = Mx;
((im = Rd.createRoot), Rd.hydrateRoot);
function Ae(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Ae(e[n])) !== "" && (t += (t && " ") + r);
  else for (let n in e) e[n] && (t += (t && " ") + n);
  return t;
}
var Ix = { value: () => {} };
function jl() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new _s(n);
}
function _s(e) {
  this._ = e;
}
function Px(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = "",
        o = n.indexOf(".");
      if (
        (o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))),
        n && !t.hasOwnProperty(n))
      )
        throw new Error("unknown type: " + n);
      return { type: n, name: r };
    });
}
_s.prototype = jl.prototype = {
  constructor: _s,
  on: function (e, t) {
    var n = this._,
      r = Px(e + "", n),
      o,
      i = -1,
      s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; )
        if ((o = (e = r[i]).type) && (o = zx(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if ((o = (e = r[i]).type)) n[o] = Od(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Od(n[o], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new _s(e);
  },
  call: function (e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, i; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  },
};
function zx(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t) return o.value;
}
function Od(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      ((e[r] = Ix), (e = e.slice(0, r).concat(e.slice(r + 1))));
      break;
    }
  return (n != null && e.push({ name: t, value: n }), e);
}
var Pu = "http://www.w3.org/1999/xhtml";
const bd = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function Tl(e) {
  var t = (e += ""),
    n = t.indexOf(":");
  return (
    n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
    bd.hasOwnProperty(t) ? { space: bd[t], local: e } : e
  );
}
function jx(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === Pu && t.documentElement.namespaceURI === Pu
      ? t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function Tx(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function sm(e) {
  var t = Tl(e);
  return (t.local ? Tx : jx)(t);
}
function $x() {}
function Yc(e) {
  return e == null
    ? $x
    : function () {
        return this.querySelector(e);
      };
}
function Lx(e) {
  typeof e != "function" && (e = Yc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (
      var i = t[o], s = i.length, l = (r[o] = new Array(s)), a, u, d = 0;
      d < s;
      ++d
    )
      (a = i[d]) &&
        (u = e.call(a, a.__data__, d, i)) &&
        ("__data__" in a && (u.__data__ = a.__data__), (l[d] = u));
  return new pt(r, this._parents);
}
function Ax(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Dx() {
  return [];
}
function lm(e) {
  return e == null
    ? Dx
    : function () {
        return this.querySelectorAll(e);
      };
}
function Rx(e) {
  return function () {
    return Ax(e.apply(this, arguments));
  };
}
function Ox(e) {
  typeof e == "function" ? (e = Rx(e)) : (e = lm(e));
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && (r.push(e.call(a, a.__data__, u, s)), o.push(a));
  return new pt(r, o);
}
function am(e) {
  return function () {
    return this.matches(e);
  };
}
function um(e) {
  return function (t) {
    return t.matches(e);
  };
}
var bx = Array.prototype.find;
function Fx(e) {
  return function () {
    return bx.call(this.children, e);
  };
}
function Hx() {
  return this.firstElementChild;
}
function Vx(e) {
  return this.select(e == null ? Hx : Fx(typeof e == "function" ? e : um(e)));
}
var Bx = Array.prototype.filter;
function Ux() {
  return Array.from(this.children);
}
function Wx(e) {
  return function () {
    return Bx.call(this.children, e);
  };
}
function Yx(e) {
  return this.selectAll(
    e == null ? Ux : Wx(typeof e == "function" ? e : um(e)),
  );
}
function Xx(e) {
  typeof e != "function" && (e = am(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = (r[o] = []), a, u = 0; u < s; ++u)
      (a = i[u]) && e.call(a, a.__data__, u, i) && l.push(a);
  return new pt(r, this._parents);
}
function cm(e) {
  return new Array(e.length);
}
function Gx() {
  return new pt(this._enter || this._groups.map(cm), this._parents);
}
function tl(e, t) {
  ((this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t));
}
tl.prototype = {
  constructor: tl,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function Kx(e) {
  return function () {
    return e;
  };
}
function Qx(e, t, n, r, o, i) {
  for (var s = 0, l, a = t.length, u = i.length; s < u; ++s)
    (l = t[s]) ? ((l.__data__ = i[s]), (r[s] = l)) : (n[s] = new tl(e, i[s]));
  for (; s < a; ++s) (l = t[s]) && (o[s] = l);
}
function Zx(e, t, n, r, o, i, s) {
  var l,
    a,
    u = new Map(),
    d = t.length,
    c = i.length,
    f = new Array(d),
    p;
  for (l = 0; l < d; ++l)
    (a = t[l]) &&
      ((f[l] = p = s.call(a, a.__data__, l, t) + ""),
      u.has(p) ? (o[l] = a) : u.set(p, a));
  for (l = 0; l < c; ++l)
    ((p = s.call(e, i[l], l, i) + ""),
      (a = u.get(p))
        ? ((r[l] = a), (a.__data__ = i[l]), u.delete(p))
        : (n[l] = new tl(e, i[l])));
  for (l = 0; l < d; ++l) (a = t[l]) && u.get(f[l]) === a && (o[l] = a);
}
function qx(e) {
  return e.__data__;
}
function Jx(e, t) {
  if (!arguments.length) return Array.from(this, qx);
  var n = t ? Zx : Qx,
    r = this._parents,
    o = this._groups;
  typeof e != "function" && (e = Kx(e));
  for (
    var i = o.length,
      s = new Array(i),
      l = new Array(i),
      a = new Array(i),
      u = 0;
    u < i;
    ++u
  ) {
    var d = r[u],
      c = o[u],
      f = c.length,
      p = ew(e.call(d, d && d.__data__, u, r)),
      y = p.length,
      x = (l[u] = new Array(y)),
      S = (s[u] = new Array(y)),
      g = (a[u] = new Array(f));
    n(d, c, x, S, g, p, t);
    for (var v = 0, h = 0, w, _; v < y; ++v)
      if ((w = x[v])) {
        for (v >= h && (h = v + 1); !(_ = S[h]) && ++h < y; );
        w._next = _ || null;
      }
  }
  return ((s = new pt(s, r)), (s._enter = l), (s._exit = a), s);
}
function ew(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function tw() {
  return new pt(this._exit || this._groups.map(cm), this._parents);
}
function nw(e, t, n) {
  var r = this.enter(),
    o = this,
    i = this.exit();
  return (
    typeof e == "function"
      ? ((r = e(r)), r && (r = r.selection()))
      : (r = r.append(e + "")),
    t != null && ((o = t(o)), o && (o = o.selection())),
    n == null ? i.remove() : n(i),
    r && o ? r.merge(o).order() : o
  );
}
function rw(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      o = n.length,
      i = r.length,
      s = Math.min(o, i),
      l = new Array(o),
      a = 0;
    a < s;
    ++a
  )
    for (
      var u = n[a], d = r[a], c = u.length, f = (l[a] = new Array(c)), p, y = 0;
      y < c;
      ++y
    )
      (p = u[y] || d[y]) && (f[y] = p);
  for (; a < o; ++a) l[a] = n[a];
  return new pt(l, this._parents);
}
function ow() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) &&
        (i &&
          s.compareDocumentPosition(i) ^ 4 &&
          i.parentNode.insertBefore(s, i),
        (i = s));
  return this;
}
function iw(e) {
  e || (e = sw);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (
    var n = this._groups, r = n.length, o = new Array(r), i = 0;
    i < r;
    ++i
  ) {
    for (
      var s = n[i], l = s.length, a = (o[i] = new Array(l)), u, d = 0;
      d < l;
      ++d
    )
      (u = s[d]) && (a[d] = u);
    a.sort(t);
  }
  return new pt(o, this._parents).order();
}
function sw(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function lw() {
  var e = arguments[0];
  return ((arguments[0] = this), e.apply(null, arguments), this);
}
function aw() {
  return Array.from(this);
}
function uw() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function cw() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function fw() {
  return !this.node();
}
function dw(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function pw(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function hw(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function gw(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function mw(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function yw(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function vw(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, n);
  };
}
function xw(e, t) {
  var n = Tl(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? hw
        : pw
      : typeof t == "function"
        ? n.local
          ? vw
          : yw
        : n.local
          ? mw
          : gw)(n, t),
  );
}
function fm(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function ww(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function Sw(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function kw(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Ew(e, t, n) {
  return arguments.length > 1
    ? this.each(
        (t == null ? ww : typeof t == "function" ? kw : Sw)(e, t, n ?? ""),
      )
    : eo(this.node(), e);
}
function eo(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    fm(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function _w(e) {
  return function () {
    delete this[e];
  };
}
function Nw(e, t) {
  return function () {
    this[e] = t;
  };
}
function Cw(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function Mw(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? _w : typeof t == "function" ? Cw : Nw)(e, t))
    : this.node()[e];
}
function dm(e) {
  return e.trim().split(/^|\s+/);
}
function Xc(e) {
  return e.classList || new pm(e);
}
function pm(e) {
  ((this._node = e), (this._names = dm(e.getAttribute("class") || "")));
}
pm.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 &&
      (this._names.push(e),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function hm(e, t) {
  for (var n = Xc(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function gm(e, t) {
  for (var n = Xc(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Iw(e) {
  return function () {
    hm(this, e);
  };
}
function Pw(e) {
  return function () {
    gm(this, e);
  };
}
function zw(e, t) {
  return function () {
    (t.apply(this, arguments) ? hm : gm)(this, e);
  };
}
function jw(e, t) {
  var n = dm(e + "");
  if (arguments.length < 2) {
    for (var r = Xc(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? zw : t ? Iw : Pw)(n, t));
}
function Tw() {
  this.textContent = "";
}
function $w(e) {
  return function () {
    this.textContent = e;
  };
}
function Lw(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Aw(e) {
  return arguments.length
    ? this.each(e == null ? Tw : (typeof e == "function" ? Lw : $w)(e))
    : this.node().textContent;
}
function Dw() {
  this.innerHTML = "";
}
function Rw(e) {
  return function () {
    this.innerHTML = e;
  };
}
function Ow(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function bw(e) {
  return arguments.length
    ? this.each(e == null ? Dw : (typeof e == "function" ? Ow : Rw)(e))
    : this.node().innerHTML;
}
function Fw() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Hw() {
  return this.each(Fw);
}
function Vw() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bw() {
  return this.each(Vw);
}
function Uw(e) {
  var t = typeof e == "function" ? e : sm(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ww() {
  return null;
}
function Yw(e, t) {
  var n = typeof e == "function" ? e : sm(e),
    r = t == null ? Ww : typeof t == "function" ? t : Yc(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null,
    );
  });
}
function Xw() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Gw() {
  return this.each(Xw);
}
function Kw() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Qw() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Zw(e) {
  return this.select(e ? Qw : Kw);
}
function qw(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Jw(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function e2(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = "",
        r = t.indexOf(".");
      return (
        r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
        { type: t, name: n }
      );
    });
}
function t2(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        ((i = t[n]),
          (!e.type || i.type === e.type) && i.name === e.name
            ? this.removeEventListener(i.type, i.listener, i.options)
            : (t[++r] = i));
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function n2(e, t, n) {
  return function () {
    var r = this.__on,
      o,
      i = Jw(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          (this.removeEventListener(o.type, o.listener, o.options),
            this.addEventListener(o.type, (o.listener = i), (o.options = n)),
            (o.value = t));
          return;
        }
    }
    (this.addEventListener(e.type, i, n),
      (o = { type: e.type, name: e.name, value: t, listener: i, options: n }),
      r ? r.push(o) : (this.__on = [o]));
  };
}
function r2(e, t, n) {
  var r = e2(e + ""),
    o,
    i = r.length,
    s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var a = 0, u = l.length, d; a < u; ++a)
        for (o = 0, d = l[a]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name) return d.value;
    }
    return;
  }
  for (l = t ? n2 : t2, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function mm(e, t, n) {
  var r = fm(e),
    o = r.CustomEvent;
  (typeof o == "function"
    ? (o = new o(t, n))
    : ((o = r.document.createEvent("Event")),
      n
        ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
        : o.initEvent(t, !1, !1)),
    e.dispatchEvent(o));
}
function o2(e, t) {
  return function () {
    return mm(this, e, t);
  };
}
function i2(e, t) {
  return function () {
    return mm(this, e, t.apply(this, arguments));
  };
}
function s2(e, t) {
  return this.each((typeof t == "function" ? i2 : o2)(e, t));
}
function* l2() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var ym = [null];
function pt(e, t) {
  ((this._groups = e), (this._parents = t));
}
function Mi() {
  return new pt([[document.documentElement]], ym);
}
function a2() {
  return this;
}
pt.prototype = Mi.prototype = {
  constructor: pt,
  select: Lx,
  selectAll: Ox,
  selectChild: Vx,
  selectChildren: Yx,
  filter: Xx,
  data: Jx,
  enter: Gx,
  exit: tw,
  join: nw,
  merge: rw,
  selection: a2,
  order: ow,
  sort: iw,
  call: lw,
  nodes: aw,
  node: uw,
  size: cw,
  empty: fw,
  each: dw,
  attr: xw,
  style: Ew,
  property: Mw,
  classed: jw,
  text: Aw,
  html: bw,
  raise: Hw,
  lower: Bw,
  append: Uw,
  insert: Yw,
  remove: Gw,
  clone: Zw,
  datum: qw,
  on: r2,
  dispatch: s2,
  [Symbol.iterator]: l2,
};
function ut(e) {
  return typeof e == "string"
    ? new pt([[document.querySelector(e)]], [document.documentElement])
    : new pt([[e]], ym);
}
function u2(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function Mt(e, t) {
  if (((e = u2(e)), t === void 0 && (t = e.currentTarget), t)) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return (
        (r.x = e.clientX),
        (r.y = e.clientY),
        (r = r.matrixTransform(t.getScreenCTM().inverse())),
        [r.x, r.y]
      );
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [
        e.clientX - o.left - t.clientLeft,
        e.clientY - o.top - t.clientTop,
      ];
    }
  }
  return [e.pageX, e.pageY];
}
const c2 = { passive: !1 },
  ui = { capture: !0, passive: !1 };
function Ca(e) {
  e.stopImmediatePropagation();
}
function Ur(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function vm(e) {
  var t = e.document.documentElement,
    n = ut(e).on("dragstart.drag", Ur, ui);
  "onselectstart" in t
    ? n.on("selectstart.drag", Ur, ui)
    : ((t.__noselect = t.style.MozUserSelect),
      (t.style.MozUserSelect = "none"));
}
function xm(e, t) {
  var n = e.document.documentElement,
    r = ut(e).on("dragstart.drag", null);
  (t &&
    (r.on("click.drag", Ur, ui),
    setTimeout(function () {
      r.on("click.drag", null);
    }, 0)),
    "onselectstart" in n
      ? r.on("selectstart.drag", null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect));
}
const ns = (e) => () => e;
function zu(
  e,
  {
    sourceEvent: t,
    subject: n,
    target: r,
    identifier: o,
    active: i,
    x: s,
    y: l,
    dx: a,
    dy: u,
    dispatch: d,
  },
) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: a, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d },
  });
}
zu.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function f2(e) {
  return !e.ctrlKey && !e.button;
}
function d2() {
  return this.parentNode;
}
function p2(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function h2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function wm() {
  var e = f2,
    t = d2,
    n = p2,
    r = h2,
    o = {},
    i = jl("start", "drag", "end"),
    s = 0,
    l,
    a,
    u,
    d,
    c = 0;
  function f(w) {
    w.on("mousedown.drag", p)
      .filter(r)
      .on("touchstart.drag", S)
      .on("touchmove.drag", g, c2)
      .on("touchend.drag touchcancel.drag", v)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(w, _) {
    if (!(d || !e.call(this, w, _))) {
      var N = h(this, t.call(this, w, _), w, _, "mouse");
      N &&
        (ut(w.view).on("mousemove.drag", y, ui).on("mouseup.drag", x, ui),
        vm(w.view),
        Ca(w),
        (u = !1),
        (l = w.clientX),
        (a = w.clientY),
        N("start", w));
    }
  }
  function y(w) {
    if ((Ur(w), !u)) {
      var _ = w.clientX - l,
        N = w.clientY - a;
      u = _ * _ + N * N > c;
    }
    o.mouse("drag", w);
  }
  function x(w) {
    (ut(w.view).on("mousemove.drag mouseup.drag", null),
      xm(w.view, u),
      Ur(w),
      o.mouse("end", w));
  }
  function S(w, _) {
    if (e.call(this, w, _)) {
      var N = w.changedTouches,
        M = t.call(this, w, _),
        k = N.length,
        j,
        R;
      for (j = 0; j < k; ++j)
        (R = h(this, M, w, _, N[j].identifier, N[j])) &&
          (Ca(w), R("start", w, N[j]));
    }
  }
  function g(w) {
    var _ = w.changedTouches,
      N = _.length,
      M,
      k;
    for (M = 0; M < N; ++M)
      (k = o[_[M].identifier]) && (Ur(w), k("drag", w, _[M]));
  }
  function v(w) {
    var _ = w.changedTouches,
      N = _.length,
      M,
      k;
    for (
      d && clearTimeout(d),
        d = setTimeout(function () {
          d = null;
        }, 500),
        M = 0;
      M < N;
      ++M
    )
      (k = o[_[M].identifier]) && (Ca(w), k("end", w, _[M]));
  }
  function h(w, _, N, M, k, j) {
    var R = i.copy(),
      P = Mt(j || N, _),
      L,
      F,
      E;
    if (
      (E = n.call(
        w,
        new zu("beforestart", {
          sourceEvent: N,
          target: f,
          identifier: k,
          active: s,
          x: P[0],
          y: P[1],
          dx: 0,
          dy: 0,
          dispatch: R,
        }),
        M,
      )) != null
    )
      return (
        (L = E.x - P[0] || 0),
        (F = E.y - P[1] || 0),
        function $(T, D, C) {
          var I = P,
            A;
          switch (T) {
            case "start":
              ((o[k] = $), (A = s++));
              break;
            case "end":
              (delete o[k], --s);
            case "drag":
              ((P = Mt(C || D, _)), (A = s));
              break;
          }
          R.call(
            T,
            w,
            new zu(T, {
              sourceEvent: D,
              subject: E,
              target: f,
              identifier: k,
              active: A,
              x: P[0] + L,
              y: P[1] + F,
              dx: P[0] - I[0],
              dy: P[1] - I[1],
              dispatch: R,
            }),
            M,
          );
        }
      );
  }
  return (
    (f.filter = function (w) {
      return arguments.length
        ? ((e = typeof w == "function" ? w : ns(!!w)), f)
        : e;
    }),
    (f.container = function (w) {
      return arguments.length
        ? ((t = typeof w == "function" ? w : ns(w)), f)
        : t;
    }),
    (f.subject = function (w) {
      return arguments.length
        ? ((n = typeof w == "function" ? w : ns(w)), f)
        : n;
    }),
    (f.touchable = function (w) {
      return arguments.length
        ? ((r = typeof w == "function" ? w : ns(!!w)), f)
        : r;
    }),
    (f.on = function () {
      var w = i.on.apply(i, arguments);
      return w === i ? f : w;
    }),
    (f.clickDistance = function (w) {
      return arguments.length ? ((c = (w = +w) * w), f) : Math.sqrt(c);
    }),
    f
  );
}
function Gc(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Sm(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ii() {}
var ci = 0.7,
  nl = 1 / ci,
  Wr = "\\s*([+-]?\\d+)\\s*",
  fi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  g2 = /^#([0-9a-f]{3,8})$/,
  m2 = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`),
  y2 = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`),
  v2 = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${fi}\\)$`),
  x2 = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${fi}\\)$`),
  w2 = new RegExp(`^hsl\\(${fi},${Yt},${Yt}\\)$`),
  S2 = new RegExp(`^hsla\\(${fi},${Yt},${Yt},${fi}\\)$`),
  Fd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Gc(Ii, ur, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Hd,
  formatHex: Hd,
  formatHex8: k2,
  formatHsl: E2,
  formatRgb: Vd,
  toString: Vd,
});
function Hd() {
  return this.rgb().formatHex();
}
function k2() {
  return this.rgb().formatHex8();
}
function E2() {
  return km(this).formatHsl();
}
function Vd() {
  return this.rgb().formatRgb();
}
function ur(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = g2.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? Bd(t)
          : n === 3
            ? new rt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? rs(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? rs(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = m2.exec(e))
        ? new rt(t[1], t[2], t[3], 1)
        : (t = y2.exec(e))
          ? new rt(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = v2.exec(e))
            ? rs(t[1], t[2], t[3], t[4])
            : (t = x2.exec(e))
              ? rs(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = w2.exec(e))
                ? Yd(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = S2.exec(e))
                  ? Yd(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Fd.hasOwnProperty(e)
                    ? Bd(Fd[e])
                    : e === "transparent"
                      ? new rt(NaN, NaN, NaN, 0)
                      : null
  );
}
function Bd(e) {
  return new rt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function rs(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new rt(e, t, n, r));
}
function _2(e) {
  return (
    e instanceof Ii || (e = ur(e)),
    e ? ((e = e.rgb()), new rt(e.r, e.g, e.b, e.opacity)) : new rt()
  );
}
function ju(e, t, n, r) {
  return arguments.length === 1 ? _2(e) : new rt(e, t, n, r ?? 1);
}
function rt(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Gc(
  rt,
  ju,
  Sm(Ii, {
    brighter(e) {
      return (
        (e = e == null ? nl : Math.pow(nl, e)),
        new rt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? ci : Math.pow(ci, e)),
        new rt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new rt(nr(this.r), nr(this.g), nr(this.b), rl(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Ud,
    formatHex: Ud,
    formatHex8: N2,
    formatRgb: Wd,
    toString: Wd,
  }),
);
function Ud() {
  return `#${Zn(this.r)}${Zn(this.g)}${Zn(this.b)}`;
}
function N2() {
  return `#${Zn(this.r)}${Zn(this.g)}${Zn(this.b)}${Zn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wd() {
  const e = rl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nr(this.r)}, ${nr(this.g)}, ${nr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function rl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zn(e) {
  return ((e = nr(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function Yd(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Pt(e, t, n, r)
  );
}
function km(e) {
  if (e instanceof Pt) return new Pt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Ii || (e = ur(e)), !e)) return new Pt();
  if (e instanceof Pt) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    o = Math.min(t, n, r),
    i = Math.max(t, n, r),
    s = NaN,
    l = i - o,
    a = (i + o) / 2;
  return (
    l
      ? (t === i
          ? (s = (n - r) / l + (n < r) * 6)
          : n === i
            ? (s = (r - t) / l + 2)
            : (s = (t - n) / l + 4),
        (l /= a < 0.5 ? i + o : 2 - i - o),
        (s *= 60))
      : (l = a > 0 && a < 1 ? 0 : s),
    new Pt(s, l, a, e.opacity)
  );
}
function C2(e, t, n, r) {
  return arguments.length === 1 ? km(e) : new Pt(e, t, n, r ?? 1);
}
function Pt(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Gc(
  Pt,
  C2,
  Sm(Ii, {
    brighter(e) {
      return (
        (e = e == null ? nl : Math.pow(nl, e)),
        new Pt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? ci : Math.pow(ci, e)),
        new Pt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        o = 2 * n - r;
      return new rt(
        Ma(e >= 240 ? e - 240 : e + 120, o, r),
        Ma(e, o, r),
        Ma(e < 120 ? e + 240 : e - 120, o, r),
        this.opacity,
      );
    },
    clamp() {
      return new Pt(Xd(this.h), os(this.s), os(this.l), rl(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = rl(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${Xd(this.h)}, ${os(this.s) * 100}%, ${os(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function Xd(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function os(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ma(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Kc = (e) => () => e;
function M2(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function I2(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function P2(e) {
  return (e = +e) == 1
    ? Em
    : function (t, n) {
        return n - t ? I2(t, n, e) : Kc(isNaN(t) ? n : t);
      };
}
function Em(e, t) {
  var n = t - e;
  return n ? M2(e, n) : Kc(isNaN(e) ? t : e);
}
const ol = (function e(t) {
  var n = P2(t);
  function r(o, i) {
    var s = n((o = ju(o)).r, (i = ju(i)).r),
      l = n(o.g, i.g),
      a = n(o.b, i.b),
      u = Em(o.opacity, i.opacity);
    return function (d) {
      return (
        (o.r = s(d)),
        (o.g = l(d)),
        (o.b = a(d)),
        (o.opacity = u(d)),
        o + ""
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function z2(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    o;
  return function (i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function j2(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function T2(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    o = new Array(r),
    i = new Array(n),
    s;
  for (s = 0; s < r; ++s) o[s] = Bo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function (l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function $2(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Vt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function L2(e, t) {
  var n = {},
    r = {},
    o;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (o in t) o in e ? (n[o] = Bo(e[o], t[o])) : (r[o] = t[o]);
  return function (i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Tu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Ia = new RegExp(Tu.source, "g");
function A2(e) {
  return function () {
    return e;
  };
}
function D2(e) {
  return function (t) {
    return e(t) + "";
  };
}
function _m(e, t) {
  var n = (Tu.lastIndex = Ia.lastIndex = 0),
    r,
    o,
    i,
    s = -1,
    l = [],
    a = [];
  for (e = e + "", t = t + ""; (r = Tu.exec(e)) && (o = Ia.exec(t)); )
    ((i = o.index) > n &&
      ((i = t.slice(n, i)), l[s] ? (l[s] += i) : (l[++s] = i)),
      (r = r[0]) === (o = o[0])
        ? l[s]
          ? (l[s] += o)
          : (l[++s] = o)
        : ((l[++s] = null), a.push({ i: s, x: Vt(r, o) })),
      (n = Ia.lastIndex));
  return (
    n < t.length && ((i = t.slice(n)), l[s] ? (l[s] += i) : (l[++s] = i)),
    l.length < 2
      ? a[0]
        ? D2(a[0].x)
        : A2(t)
      : ((t = a.length),
        function (u) {
          for (var d = 0, c; d < t; ++d) l[(c = a[d]).i] = c.x(u);
          return l.join("");
        })
  );
}
function Bo(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? Kc(t)
    : (n === "number"
        ? Vt
        : n === "string"
          ? (r = ur(t))
            ? ((t = r), ol)
            : _m
          : t instanceof ur
            ? ol
            : t instanceof Date
              ? $2
              : j2(t)
                ? z2
                : Array.isArray(t)
                  ? T2
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? L2
                    : Vt)(e, t);
}
var Gd = 180 / Math.PI,
  $u = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Nm(e, t, n, r, o, i) {
  var s, l, a;
  return (
    (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
    (a = e * n + t * r) && ((n -= e * a), (r -= t * a)),
    (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (a /= l)),
    e * r < t * n && ((e = -e), (t = -t), (a = -a), (s = -s)),
    {
      translateX: o,
      translateY: i,
      rotate: Math.atan2(t, e) * Gd,
      skewX: Math.atan(a) * Gd,
      scaleX: s,
      scaleY: l,
    }
  );
}
var is;
function R2(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + "",
  );
  return t.isIdentity ? $u : Nm(t.a, t.b, t.c, t.d, t.e, t.f);
}
function O2(e) {
  return e == null ||
    (is || (is = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    is.setAttribute("transform", e),
    !(e = is.transform.baseVal.consolidate()))
    ? $u
    : ((e = e.matrix), Nm(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Cm(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, c, f, p, y) {
    if (u !== c || d !== f) {
      var x = p.push("translate(", null, t, null, n);
      y.push({ i: x - 4, x: Vt(u, c) }, { i: x - 2, x: Vt(d, f) });
    } else (c || f) && p.push("translate(" + c + t + f + n);
  }
  function s(u, d, c, f) {
    u !== d
      ? (u - d > 180 ? (d += 360) : d - u > 180 && (u += 360),
        f.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: Vt(u, d) }))
      : d && c.push(o(c) + "rotate(" + d + r);
  }
  function l(u, d, c, f) {
    u !== d
      ? f.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: Vt(u, d) })
      : d && c.push(o(c) + "skewX(" + d + r);
  }
  function a(u, d, c, f, p, y) {
    if (u !== c || d !== f) {
      var x = p.push(o(p) + "scale(", null, ",", null, ")");
      y.push({ i: x - 4, x: Vt(u, c) }, { i: x - 2, x: Vt(d, f) });
    } else (c !== 1 || f !== 1) && p.push(o(p) + "scale(" + c + "," + f + ")");
  }
  return function (u, d) {
    var c = [],
      f = [];
    return (
      (u = e(u)),
      (d = e(d)),
      i(u.translateX, u.translateY, d.translateX, d.translateY, c, f),
      s(u.rotate, d.rotate, c, f),
      l(u.skewX, d.skewX, c, f),
      a(u.scaleX, u.scaleY, d.scaleX, d.scaleY, c, f),
      (u = d = null),
      function (p) {
        for (var y = -1, x = f.length, S; ++y < x; ) c[(S = f[y]).i] = S.x(p);
        return c.join("");
      }
    );
  };
}
var b2 = Cm(R2, "px, ", "px)", "deg)"),
  F2 = Cm(O2, ", ", ")", ")"),
  H2 = 1e-12;
function Kd(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function V2(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function B2(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ns = (function e(t, n, r) {
  function o(i, s) {
    var l = i[0],
      a = i[1],
      u = i[2],
      d = s[0],
      c = s[1],
      f = s[2],
      p = d - l,
      y = c - a,
      x = p * p + y * y,
      S,
      g;
    if (x < H2)
      ((g = Math.log(f / u) / t),
        (S = function (M) {
          return [l + M * p, a + M * y, u * Math.exp(t * M * g)];
        }));
    else {
      var v = Math.sqrt(x),
        h = (f * f - u * u + r * x) / (2 * u * n * v),
        w = (f * f - u * u - r * x) / (2 * f * n * v),
        _ = Math.log(Math.sqrt(h * h + 1) - h),
        N = Math.log(Math.sqrt(w * w + 1) - w);
      ((g = (N - _) / t),
        (S = function (M) {
          var k = M * g,
            j = Kd(_),
            R = (u / (n * v)) * (j * B2(t * k + _) - V2(_));
          return [l + R * p, a + R * y, (u * j) / Kd(t * k + _)];
        }));
    }
    return ((S.duration = (g * 1e3 * t) / Math.SQRT2), S);
  }
  return (
    (o.rho = function (i) {
      var s = Math.max(0.001, +i),
        l = s * s,
        a = l * l;
      return e(s, l, a);
    }),
    o
  );
})(Math.SQRT2, 2, 4);
var to = 0,
  To = 0,
  Co = 0,
  Mm = 1e3,
  il,
  $o,
  sl = 0,
  cr = 0,
  $l = 0,
  di = typeof performance == "object" && performance.now ? performance : Date,
  Im =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Qc() {
  return cr || (Im(U2), (cr = di.now() + $l));
}
function U2() {
  cr = 0;
}
function ll() {
  this._call = this._time = this._next = null;
}
ll.prototype = Pm.prototype = {
  constructor: ll,
  restart: function (e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    ((n = (n == null ? Qc() : +n) + (t == null ? 0 : +t)),
      !this._next &&
        $o !== this &&
        ($o ? ($o._next = this) : (il = this), ($o = this)),
      (this._call = e),
      (this._time = n),
      Lu());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Lu());
  },
};
function Pm(e, t, n) {
  var r = new ll();
  return (r.restart(e, t, n), r);
}
function W2() {
  (Qc(), ++to);
  for (var e = il, t; e; )
    ((t = cr - e._time) >= 0 && e._call.call(void 0, t), (e = e._next));
  --to;
}
function Qd() {
  ((cr = (sl = di.now()) + $l), (to = To = 0));
  try {
    W2();
  } finally {
    ((to = 0), X2(), (cr = 0));
  }
}
function Y2() {
  var e = di.now(),
    t = e - sl;
  t > Mm && (($l -= t), (sl = e));
}
function X2() {
  for (var e, t = il, n, r = 1 / 0; t; )
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (il = n)));
  (($o = e), Lu(r));
}
function Lu(e) {
  if (!to) {
    To && (To = clearTimeout(To));
    var t = e - cr;
    t > 24
      ? (e < 1 / 0 && (To = setTimeout(Qd, e - di.now() - $l)),
        Co && (Co = clearInterval(Co)))
      : (Co || ((sl = di.now()), (Co = setInterval(Y2, Mm))), (to = 1), Im(Qd));
  }
}
function Zd(e, t, n) {
  var r = new ll();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      (o) => {
        (r.stop(), e(o + t));
      },
      t,
      n,
    ),
    r
  );
}
var G2 = jl("start", "end", "cancel", "interrupt"),
  K2 = [],
  zm = 0,
  qd = 1,
  Au = 2,
  Cs = 3,
  Jd = 4,
  Du = 5,
  Ms = 6;
function Ll(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Q2(e, n, {
    name: t,
    index: r,
    group: o,
    on: G2,
    tween: K2,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: zm,
  });
}
function Zc(e, t) {
  var n = Rt(e, t);
  if (n.state > zm) throw new Error("too late; already scheduled");
  return n;
}
function Kt(e, t) {
  var n = Rt(e, t);
  if (n.state > Cs) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Q2(e, t, n) {
  var r = e.__transition,
    o;
  ((r[t] = n), (n.timer = Pm(i, 0, n.time)));
  function i(u) {
    ((n.state = qd),
      n.timer.restart(s, n.delay, n.time),
      n.delay <= u && s(u - n.delay));
  }
  function s(u) {
    var d, c, f, p;
    if (n.state !== qd) return a();
    for (d in r)
      if (((p = r[d]), p.name === n.name)) {
        if (p.state === Cs) return Zd(s);
        p.state === Jd
          ? ((p.state = Ms),
            p.timer.stop(),
            p.on.call("interrupt", e, e.__data__, p.index, p.group),
            delete r[d])
          : +d < t &&
            ((p.state = Ms),
            p.timer.stop(),
            p.on.call("cancel", e, e.__data__, p.index, p.group),
            delete r[d]);
      }
    if (
      (Zd(function () {
        n.state === Cs &&
          ((n.state = Jd), n.timer.restart(l, n.delay, n.time), l(u));
      }),
      (n.state = Au),
      n.on.call("start", e, e.__data__, n.index, n.group),
      n.state === Au)
    ) {
      for (
        n.state = Cs, o = new Array((f = n.tween.length)), d = 0, c = -1;
        d < f;
        ++d
      )
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) &&
          (o[++c] = p);
      o.length = c + 1;
    }
  }
  function l(u) {
    for (
      var d =
          u < n.duration
            ? n.ease.call(null, u / n.duration)
            : (n.timer.restart(a), (n.state = Du), 1),
        c = -1,
        f = o.length;
      ++c < f;
    )
      o[c].call(e, d);
    n.state === Du && (n.on.call("end", e, e.__data__, n.index, n.group), a());
  }
  function a() {
    ((n.state = Ms), n.timer.stop(), delete r[t]);
    for (var u in r) return;
    delete e.__transition;
  }
}
function Is(e, t) {
  var n = e.__transition,
    r,
    o,
    i = !0,
    s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      ((o = r.state > Au && r.state < Du),
        (r.state = Ms),
        r.timer.stop(),
        r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group),
        delete n[s]);
    }
    i && delete e.__transition;
  }
}
function Z2(e) {
  return this.each(function () {
    Is(this, e);
  });
}
function q2(e, t) {
  var n, r;
  return function () {
    var o = Kt(this, e),
      i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          ((r = r.slice()), r.splice(s, 1));
          break;
        }
    }
    o.tween = r;
  };
}
function J2(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function () {
    var i = Kt(this, e),
      s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, a = 0, u = o.length; a < u; ++a)
        if (o[a].name === t) {
          o[a] = l;
          break;
        }
      a === u && o.push(l);
    }
    i.tween = o;
  };
}
function eS(e, t) {
  var n = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var r = Rt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e) return s.value;
    return null;
  }
  return this.each((t == null ? q2 : J2)(n, e, t));
}
function qc(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var o = Kt(this, r);
      (o.value || (o.value = {}))[t] = n.apply(this, arguments);
    }),
    function (o) {
      return Rt(o, r).value[t];
    }
  );
}
function jm(e, t) {
  var n;
  return (
    typeof t == "number"
      ? Vt
      : t instanceof ur
        ? ol
        : (n = ur(t))
          ? ((t = n), ol)
          : _m
  )(e, t);
}
function tS(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function nS(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function rS(e, t, n) {
  var r,
    o = n + "",
    i;
  return function () {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : (i = t((r = s), n));
  };
}
function oS(e, t, n) {
  var r,
    o = n + "",
    i;
  return function () {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : (i = t((r = s), n));
  };
}
function iS(e, t, n) {
  var r, o, i;
  return function () {
    var s,
      l = n(this),
      a;
    return l == null
      ? void this.removeAttribute(e)
      : ((s = this.getAttribute(e)),
        (a = l + ""),
        s === a
          ? null
          : s === r && a === o
            ? i
            : ((o = a), (i = t((r = s), l))));
  };
}
function sS(e, t, n) {
  var r, o, i;
  return function () {
    var s,
      l = n(this),
      a;
    return l == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((s = this.getAttributeNS(e.space, e.local)),
        (a = l + ""),
        s === a
          ? null
          : s === r && a === o
            ? i
            : ((o = a), (i = t((r = s), l))));
  };
}
function lS(e, t) {
  var n = Tl(e),
    r = n === "transform" ? F2 : jm;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (n.local ? sS : iS)(n, r, qc(this, "attr." + e, t))
      : t == null
        ? (n.local ? nS : tS)(n)
        : (n.local ? oS : rS)(n, r, t),
  );
}
function aS(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function uS(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function cS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && uS(e, i)), n);
  }
  return ((o._value = t), o);
}
function fS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && aS(e, i)), n);
  }
  return ((o._value = t), o);
}
function dS(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Tl(e);
  return this.tween(n, (r.local ? cS : fS)(r, t));
}
function pS(e, t) {
  return function () {
    Zc(this, e).delay = +t.apply(this, arguments);
  };
}
function hS(e, t) {
  return (
    (t = +t),
    function () {
      Zc(this, e).delay = t;
    }
  );
}
function gS(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? pS : hS)(t, e))
    : Rt(this.node(), t).delay;
}
function mS(e, t) {
  return function () {
    Kt(this, e).duration = +t.apply(this, arguments);
  };
}
function yS(e, t) {
  return (
    (t = +t),
    function () {
      Kt(this, e).duration = t;
    }
  );
}
function vS(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? mS : yS)(t, e))
    : Rt(this.node(), t).duration;
}
function xS(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    Kt(this, e).ease = t;
  };
}
function wS(e) {
  var t = this._id;
  return arguments.length ? this.each(xS(t, e)) : Rt(this.node(), t).ease;
}
function SS(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Kt(this, e).ease = n;
  };
}
function kS(e) {
  if (typeof e != "function") throw new Error();
  return this.each(SS(this._id, e));
}
function ES(e) {
  typeof e != "function" && (e = am(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = (r[o] = []), a, u = 0; u < s; ++u)
      (a = i[u]) && e.call(a, a.__data__, u, i) && l.push(a);
  return new dn(r, this._parents, this._name, this._id);
}
function _S(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      o = n.length,
      i = Math.min(r, o),
      s = new Array(r),
      l = 0;
    l < i;
    ++l
  )
    for (
      var a = t[l], u = n[l], d = a.length, c = (s[l] = new Array(d)), f, p = 0;
      p < d;
      ++p
    )
      (f = a[p] || u[p]) && (c[p] = f);
  for (; l < r; ++l) s[l] = t[l];
  return new dn(s, this._parents, this._name, this._id);
}
function NS(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf(".");
      return (n >= 0 && (t = t.slice(0, n)), !t || t === "start");
    });
}
function CS(e, t, n) {
  var r,
    o,
    i = NS(t) ? Zc : Kt;
  return function () {
    var s = i(this, e),
      l = s.on;
    (l !== r && (o = (r = l).copy()).on(t, n), (s.on = o));
  };
}
function MS(e, t) {
  var n = this._id;
  return arguments.length < 2
    ? Rt(this.node(), n).on.on(e)
    : this.each(CS(n, e, t));
}
function IS(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function PS() {
  return this.on("end.remove", IS(this._id));
}
function zS(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = Yc(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (
      var l = r[s], a = l.length, u = (i[s] = new Array(a)), d, c, f = 0;
      f < a;
      ++f
    )
      (d = l[f]) &&
        (c = e.call(d, d.__data__, f, l)) &&
        ("__data__" in d && (c.__data__ = d.__data__),
        (u[f] = c),
        Ll(u[f], t, n, f, u, Rt(d, n)));
  return new dn(i, this._parents, t, n);
}
function jS(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = lm(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var a = r[l], u = a.length, d, c = 0; c < u; ++c)
      if ((d = a[c])) {
        for (
          var f = e.call(d, d.__data__, c, a),
            p,
            y = Rt(d, n),
            x = 0,
            S = f.length;
          x < S;
          ++x
        )
          (p = f[x]) && Ll(p, t, n, x, f, y);
        (i.push(f), s.push(d));
      }
  return new dn(i, s, t, n);
}
var TS = Mi.prototype.constructor;
function $S() {
  return new TS(this._groups, this._parents);
}
function LS(e, t) {
  var n, r, o;
  return function () {
    var i = eo(this, e),
      s = (this.style.removeProperty(e), eo(this, e));
    return i === s ? null : i === n && s === r ? o : (o = t((n = i), (r = s)));
  };
}
function Tm(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function AS(e, t, n) {
  var r,
    o = n + "",
    i;
  return function () {
    var s = eo(this, e);
    return s === o ? null : s === r ? i : (i = t((r = s), n));
  };
}
function DS(e, t, n) {
  var r, o, i;
  return function () {
    var s = eo(this, e),
      l = n(this),
      a = l + "";
    return (
      l == null && (a = l = (this.style.removeProperty(e), eo(this, e))),
      s === a ? null : s === r && a === o ? i : ((o = a), (i = t((r = s), l)))
    );
  };
}
function RS(e, t) {
  var n,
    r,
    o,
    i = "style." + t,
    s = "end." + i,
    l;
  return function () {
    var a = Kt(this, e),
      u = a.on,
      d = a.value[i] == null ? l || (l = Tm(t)) : void 0;
    ((u !== n || o !== d) && (r = (n = u).copy()).on(s, (o = d)), (a.on = r));
  };
}
function OS(e, t, n) {
  var r = (e += "") == "transform" ? b2 : jm;
  return t == null
    ? this.styleTween(e, LS(e, r)).on("end.style." + e, Tm(e))
    : typeof t == "function"
      ? this.styleTween(e, DS(e, r, qc(this, "style." + e, t))).each(
          RS(this._id, e),
        )
      : this.styleTween(e, AS(e, r, t), n).on("end.style." + e, null);
}
function bS(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function FS(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return (s !== o && (r = (o = s) && bS(e, s, n)), r);
  }
  return ((i._value = t), i);
}
function HS(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, FS(e, t, n ?? ""));
}
function VS(e) {
  return function () {
    this.textContent = e;
  };
}
function BS(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function US(e) {
  return this.tween(
    "text",
    typeof e == "function"
      ? BS(qc(this, "text", e))
      : VS(e == null ? "" : e + ""),
  );
}
function WS(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function YS(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return (o !== n && (t = (n = o) && WS(o)), t);
  }
  return ((r._value = e), r);
}
function XS(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, YS(e));
}
function GS() {
  for (
    var e = this._name,
      t = this._id,
      n = $m(),
      r = this._groups,
      o = r.length,
      i = 0;
    i < o;
    ++i
  )
    for (var s = r[i], l = s.length, a, u = 0; u < l; ++u)
      if ((a = s[u])) {
        var d = Rt(a, t);
        Ll(a, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease,
        });
      }
  return new dn(r, this._parents, e, n);
}
function KS() {
  var e,
    t,
    n = this,
    r = n._id,
    o = n.size();
  return new Promise(function (i, s) {
    var l = { value: s },
      a = {
        value: function () {
          --o === 0 && i();
        },
      };
    (n.each(function () {
      var u = Kt(this, r),
        d = u.on;
      (d !== e &&
        ((t = (e = d).copy()),
        t._.cancel.push(l),
        t._.interrupt.push(l),
        t._.end.push(a)),
        (u.on = t));
    }),
      o === 0 && i());
  });
}
var QS = 0;
function dn(e, t, n, r) {
  ((this._groups = e), (this._parents = t), (this._name = n), (this._id = r));
}
function $m() {
  return ++QS;
}
var qt = Mi.prototype;
dn.prototype = {
  constructor: dn,
  select: zS,
  selectAll: jS,
  selectChild: qt.selectChild,
  selectChildren: qt.selectChildren,
  filter: ES,
  merge: _S,
  selection: $S,
  transition: GS,
  call: qt.call,
  nodes: qt.nodes,
  node: qt.node,
  size: qt.size,
  empty: qt.empty,
  each: qt.each,
  on: MS,
  attr: lS,
  attrTween: dS,
  style: OS,
  styleTween: HS,
  text: US,
  textTween: XS,
  remove: PS,
  tween: eS,
  delay: gS,
  duration: vS,
  ease: wS,
  easeVarying: kS,
  end: KS,
  [Symbol.iterator]: qt[Symbol.iterator],
};
function ZS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var qS = { time: null, delay: 0, duration: 250, ease: ZS };
function JS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function ek(e) {
  var t, n;
  e instanceof dn
    ? ((t = e._id), (e = e._name))
    : ((t = $m()), ((n = qS).time = Qc()), (e = e == null ? null : e + ""));
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && Ll(a, e, t, u, s, n || JS(a, t));
  return new dn(r, this._parents, e, t);
}
Mi.prototype.interrupt = Z2;
Mi.prototype.transition = ek;
const ss = (e) => () => e;
function tk(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o },
  });
}
function on(e, t, n) {
  ((this.k = e), (this.x = t), (this.y = n));
}
on.prototype = {
  constructor: on,
  scale: function (e) {
    return e === 1 ? this : new on(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0)
      ? this
      : new on(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var Al = new on(1, 0, 0);
Lm.prototype = on.prototype;
function Lm(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Al;
  return e.__zoom;
}
function Pa(e) {
  e.stopImmediatePropagation();
}
function Mo(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function nk(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function rk() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute("viewBox")
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function ep() {
  return this.__zoom || Al;
}
function ok(e) {
  return (
    -e.deltaY *
    (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
    (e.ctrlKey ? 10 : 1)
  );
}
function ik() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function sk(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    o = e.invertX(t[1][0]) - n[1][0],
    i = e.invertY(t[0][1]) - n[0][1],
    s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s),
  );
}
function Am() {
  var e = nk,
    t = rk,
    n = sk,
    r = ok,
    o = ik,
    i = [0, 1 / 0],
    s = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    l = 250,
    a = Ns,
    u = jl("start", "zoom", "end"),
    d,
    c,
    f,
    p = 500,
    y = 150,
    x = 0,
    S = 10;
  function g(E) {
    E.property("__zoom", ep)
      .on("wheel.zoom", k, { passive: !1 })
      .on("mousedown.zoom", j)
      .on("dblclick.zoom", R)
      .filter(o)
      .on("touchstart.zoom", P)
      .on("touchmove.zoom", L)
      .on("touchend.zoom touchcancel.zoom", F)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  ((g.transform = function (E, $, T, D) {
    var C = E.selection ? E.selection() : E;
    (C.property("__zoom", ep),
      E !== C
        ? _(E, $, T, D)
        : C.interrupt().each(function () {
            N(this, arguments)
              .event(D)
              .start()
              .zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $)
              .end();
          }));
  }),
    (g.scaleBy = function (E, $, T, D) {
      g.scaleTo(
        E,
        function () {
          var C = this.__zoom.k,
            I = typeof $ == "function" ? $.apply(this, arguments) : $;
          return C * I;
        },
        T,
        D,
      );
    }),
    (g.scaleTo = function (E, $, T, D) {
      g.transform(
        E,
        function () {
          var C = t.apply(this, arguments),
            I = this.__zoom,
            A =
              T == null
                ? w(C)
                : typeof T == "function"
                  ? T.apply(this, arguments)
                  : T,
            H = I.invert(A),
            b = typeof $ == "function" ? $.apply(this, arguments) : $;
          return n(h(v(I, b), A, H), C, s);
        },
        T,
        D,
      );
    }),
    (g.translateBy = function (E, $, T, D) {
      g.transform(
        E,
        function () {
          return n(
            this.__zoom.translate(
              typeof $ == "function" ? $.apply(this, arguments) : $,
              typeof T == "function" ? T.apply(this, arguments) : T,
            ),
            t.apply(this, arguments),
            s,
          );
        },
        null,
        D,
      );
    }),
    (g.translateTo = function (E, $, T, D, C) {
      g.transform(
        E,
        function () {
          var I = t.apply(this, arguments),
            A = this.__zoom,
            H =
              D == null
                ? w(I)
                : typeof D == "function"
                  ? D.apply(this, arguments)
                  : D;
          return n(
            Al.translate(H[0], H[1])
              .scale(A.k)
              .translate(
                typeof $ == "function" ? -$.apply(this, arguments) : -$,
                typeof T == "function" ? -T.apply(this, arguments) : -T,
              ),
            I,
            s,
          );
        },
        D,
        C,
      );
    }));
  function v(E, $) {
    return (
      ($ = Math.max(i[0], Math.min(i[1], $))),
      $ === E.k ? E : new on($, E.x, E.y)
    );
  }
  function h(E, $, T) {
    var D = $[0] - T[0] * E.k,
      C = $[1] - T[1] * E.k;
    return D === E.x && C === E.y ? E : new on(E.k, D, C);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function _(E, $, T, D) {
    E.on("start.zoom", function () {
      N(this, arguments).event(D).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        N(this, arguments).event(D).end();
      })
      .tween("zoom", function () {
        var C = this,
          I = arguments,
          A = N(C, I).event(D),
          H = t.apply(C, I),
          b = T == null ? w(H) : typeof T == "function" ? T.apply(C, I) : T,
          K = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]),
          G = C.__zoom,
          te = typeof $ == "function" ? $.apply(C, I) : $,
          ee = a(G.invert(b).concat(K / G.k), te.invert(b).concat(K / te.k));
        return function (ne) {
          if (ne === 1) ne = te;
          else {
            var X = ee(ne),
              re = K / X[2];
            ne = new on(re, b[0] - X[0] * re, b[1] - X[1] * re);
          }
          A.zoom(null, ne);
        };
      });
  }
  function N(E, $, T) {
    return (!T && E.__zooming) || new M(E, $);
  }
  function M(E, $) {
    ((this.that = E),
      (this.args = $),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(E, $)),
      (this.taps = 0));
  }
  M.prototype = {
    event: function (E) {
      return (E && (this.sourceEvent = E), this);
    },
    start: function () {
      return (
        ++this.active === 1 &&
          ((this.that.__zooming = this), this.emit("start")),
        this
      );
    },
    zoom: function (E, $) {
      return (
        this.mouse &&
          E !== "mouse" &&
          (this.mouse[1] = $.invert(this.mouse[0])),
        this.touch0 &&
          E !== "touch" &&
          (this.touch0[1] = $.invert(this.touch0[0])),
        this.touch1 &&
          E !== "touch" &&
          (this.touch1[1] = $.invert(this.touch1[0])),
        (this.that.__zoom = $),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return (
        --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
        this
      );
    },
    emit: function (E) {
      var $ = ut(this.that).datum();
      u.call(
        E,
        this.that,
        new tk(E, {
          sourceEvent: this.sourceEvent,
          target: g,
          transform: this.that.__zoom,
          dispatch: u,
        }),
        $,
      );
    },
  };
  function k(E, ...$) {
    if (!e.apply(this, arguments)) return;
    var T = N(this, $).event(E),
      D = this.__zoom,
      C = Math.max(
        i[0],
        Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments))),
      ),
      I = Mt(E);
    if (T.wheel)
      ((T.mouse[0][0] !== I[0] || T.mouse[0][1] !== I[1]) &&
        (T.mouse[1] = D.invert((T.mouse[0] = I))),
        clearTimeout(T.wheel));
    else {
      if (D.k === C) return;
      ((T.mouse = [I, D.invert(I)]), Is(this), T.start());
    }
    (Mo(E),
      (T.wheel = setTimeout(A, y)),
      T.zoom("mouse", n(h(v(D, C), T.mouse[0], T.mouse[1]), T.extent, s)));
    function A() {
      ((T.wheel = null), T.end());
    }
  }
  function j(E, ...$) {
    if (f || !e.apply(this, arguments)) return;
    var T = E.currentTarget,
      D = N(this, $, !0).event(E),
      C = ut(E.view).on("mousemove.zoom", b, !0).on("mouseup.zoom", K, !0),
      I = Mt(E, T),
      A = E.clientX,
      H = E.clientY;
    (vm(E.view),
      Pa(E),
      (D.mouse = [I, this.__zoom.invert(I)]),
      Is(this),
      D.start());
    function b(G) {
      if ((Mo(G), !D.moved)) {
        var te = G.clientX - A,
          ee = G.clientY - H;
        D.moved = te * te + ee * ee > x;
      }
      D.event(G).zoom(
        "mouse",
        n(h(D.that.__zoom, (D.mouse[0] = Mt(G, T)), D.mouse[1]), D.extent, s),
      );
    }
    function K(G) {
      (C.on("mousemove.zoom mouseup.zoom", null),
        xm(G.view, D.moved),
        Mo(G),
        D.event(G).end());
    }
  }
  function R(E, ...$) {
    if (e.apply(this, arguments)) {
      var T = this.__zoom,
        D = Mt(E.changedTouches ? E.changedTouches[0] : E, this),
        C = T.invert(D),
        I = T.k * (E.shiftKey ? 0.5 : 2),
        A = n(h(v(T, I), D, C), t.apply(this, $), s);
      (Mo(E),
        l > 0
          ? ut(this).transition().duration(l).call(_, A, D, E)
          : ut(this).call(g.transform, A, D, E));
    }
  }
  function P(E, ...$) {
    if (e.apply(this, arguments)) {
      var T = E.touches,
        D = T.length,
        C = N(this, $, E.changedTouches.length === D).event(E),
        I,
        A,
        H,
        b;
      for (Pa(E), A = 0; A < D; ++A)
        ((H = T[A]),
          (b = Mt(H, this)),
          (b = [b, this.__zoom.invert(b), H.identifier]),
          C.touch0
            ? !C.touch1 &&
              C.touch0[2] !== b[2] &&
              ((C.touch1 = b), (C.taps = 0))
            : ((C.touch0 = b), (I = !0), (C.taps = 1 + !!d)));
      (d && (d = clearTimeout(d)),
        I &&
          (C.taps < 2 &&
            ((c = b[0]),
            (d = setTimeout(function () {
              d = null;
            }, p))),
          Is(this),
          C.start()));
    }
  }
  function L(E, ...$) {
    if (this.__zooming) {
      var T = N(this, $).event(E),
        D = E.changedTouches,
        C = D.length,
        I,
        A,
        H,
        b;
      for (Mo(E), I = 0; I < C; ++I)
        ((A = D[I]),
          (H = Mt(A, this)),
          T.touch0 && T.touch0[2] === A.identifier
            ? (T.touch0[0] = H)
            : T.touch1 && T.touch1[2] === A.identifier && (T.touch1[0] = H));
      if (((A = T.that.__zoom), T.touch1)) {
        var K = T.touch0[0],
          G = T.touch0[1],
          te = T.touch1[0],
          ee = T.touch1[1],
          ne = (ne = te[0] - K[0]) * ne + (ne = te[1] - K[1]) * ne,
          X = (X = ee[0] - G[0]) * X + (X = ee[1] - G[1]) * X;
        ((A = v(A, Math.sqrt(ne / X))),
          (H = [(K[0] + te[0]) / 2, (K[1] + te[1]) / 2]),
          (b = [(G[0] + ee[0]) / 2, (G[1] + ee[1]) / 2]));
      } else if (T.touch0) ((H = T.touch0[0]), (b = T.touch0[1]));
      else return;
      T.zoom("touch", n(h(A, H, b), T.extent, s));
    }
  }
  function F(E, ...$) {
    if (this.__zooming) {
      var T = N(this, $).event(E),
        D = E.changedTouches,
        C = D.length,
        I,
        A;
      for (
        Pa(E),
          f && clearTimeout(f),
          f = setTimeout(function () {
            f = null;
          }, p),
          I = 0;
        I < C;
        ++I
      )
        ((A = D[I]),
          T.touch0 && T.touch0[2] === A.identifier
            ? delete T.touch0
            : T.touch1 && T.touch1[2] === A.identifier && delete T.touch1);
      if (
        (T.touch1 && !T.touch0 && ((T.touch0 = T.touch1), delete T.touch1),
        T.touch0)
      )
        T.touch0[1] = this.__zoom.invert(T.touch0[0]);
      else if (
        (T.end(),
        T.taps === 2 &&
          ((A = Mt(A, this)), Math.hypot(c[0] - A[0], c[1] - A[1]) < S))
      ) {
        var H = ut(this).on("dblclick.zoom");
        H && H.apply(this, arguments);
      }
    }
  }
  return (
    (g.wheelDelta = function (E) {
      return arguments.length
        ? ((r = typeof E == "function" ? E : ss(+E)), g)
        : r;
    }),
    (g.filter = function (E) {
      return arguments.length
        ? ((e = typeof E == "function" ? E : ss(!!E)), g)
        : e;
    }),
    (g.touchable = function (E) {
      return arguments.length
        ? ((o = typeof E == "function" ? E : ss(!!E)), g)
        : o;
    }),
    (g.extent = function (E) {
      return arguments.length
        ? ((t =
            typeof E == "function"
              ? E
              : ss([
                  [+E[0][0], +E[0][1]],
                  [+E[1][0], +E[1][1]],
                ])),
          g)
        : t;
    }),
    (g.scaleExtent = function (E) {
      return arguments.length
        ? ((i[0] = +E[0]), (i[1] = +E[1]), g)
        : [i[0], i[1]];
    }),
    (g.translateExtent = function (E) {
      return arguments.length
        ? ((s[0][0] = +E[0][0]),
          (s[1][0] = +E[1][0]),
          (s[0][1] = +E[0][1]),
          (s[1][1] = +E[1][1]),
          g)
        : [
            [s[0][0], s[0][1]],
            [s[1][0], s[1][1]],
          ];
    }),
    (g.constrain = function (E) {
      return arguments.length ? ((n = E), g) : n;
    }),
    (g.duration = function (E) {
      return arguments.length ? ((l = +E), g) : l;
    }),
    (g.interpolate = function (E) {
      return arguments.length ? ((a = E), g) : a;
    }),
    (g.on = function () {
      var E = u.on.apply(u, arguments);
      return E === u ? g : E;
    }),
    (g.clickDistance = function (E) {
      return arguments.length ? ((x = (E = +E) * E), g) : Math.sqrt(x);
    }),
    (g.tapDistance = function (E) {
      return arguments.length ? ((S = +E), g) : S;
    }),
    g
  );
}
const Gt = {
    error001: () =>
      "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
    error002: () =>
      "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (e) =>
      `Node type "${e}" not found. Using fallback type "default".`,
    error004: () =>
      "The React Flow parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (e) => `The old edge with id=${e} does not exist.`,
    error009: (e) => `Marker type "${e}" doesn't exist.`,
    error008: (e, { id: t, sourceHandle: n, targetHandle: r }) =>
      `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
    error010: () =>
      "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (e) =>
      `Edge type "${e}" not found. Using fallback type "default".`,
    error012: (e) =>
      `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (e = "react") =>
      `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () =>
      "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
    error015: () =>
      "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  },
  pi = [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ],
  Dm = ["Enter", " ", "Escape"],
  Rm = {
    "node.a11yDescription.default":
      "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.keyboardDisabled":
      "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) =>
      `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
    "edge.a11yDescription.default":
      "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
    "controls.ariaLabel": "Control Panel",
    "controls.zoomIn.ariaLabel": "Zoom In",
    "controls.zoomOut.ariaLabel": "Zoom Out",
    "controls.fitView.ariaLabel": "Fit View",
    "controls.interactive.ariaLabel": "Toggle Interactivity",
    "minimap.ariaLabel": "Mini Map",
    "handle.ariaLabel": "Handle",
  };
var no;
(function (e) {
  ((e.Strict = "strict"), (e.Loose = "loose"));
})(no || (no = {}));
var rr;
(function (e) {
  ((e.Free = "free"), (e.Vertical = "vertical"), (e.Horizontal = "horizontal"));
})(rr || (rr = {}));
var hi;
(function (e) {
  ((e.Partial = "partial"), (e.Full = "full"));
})(hi || (hi = {}));
const Om = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null,
};
var kn;
(function (e) {
  ((e.Bezier = "default"),
    (e.Straight = "straight"),
    (e.Step = "step"),
    (e.SmoothStep = "smoothstep"),
    (e.SimpleBezier = "simplebezier"));
})(kn || (kn = {}));
var sn;
(function (e) {
  ((e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed"));
})(sn || (sn = {}));
var q;
(function (e) {
  ((e.Left = "left"),
    (e.Top = "top"),
    (e.Right = "right"),
    (e.Bottom = "bottom"));
})(q || (q = {}));
const tp = {
  [q.Left]: q.Right,
  [q.Right]: q.Left,
  [q.Top]: q.Bottom,
  [q.Bottom]: q.Top,
};
function bm(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Fm = (e) => "id" in e && "source" in e && "target" in e,
  lk = (e) =>
    "id" in e && "position" in e && !("source" in e) && !("target" in e),
  Jc = (e) =>
    "id" in e && "internals" in e && !("source" in e) && !("target" in e),
  Pi = (e, t = [0, 0]) => {
    const { width: n, height: r } = hn(e),
      o = e.origin ?? t,
      i = n * o[0],
      s = r * o[1];
    return { x: e.position.x - i, y: e.position.y - s };
  },
  ak = (e, t = { nodeOrigin: [0, 0] }) => {
    if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
    const n = e.reduce(
      (r, o) => {
        const i = typeof o == "string";
        let s = !t.nodeLookup && !i ? o : void 0;
        t.nodeLookup &&
          (s = i ? t.nodeLookup.get(o) : Jc(o) ? o : t.nodeLookup.get(o.id));
        const l = s ? al(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
        return Dl(r, l);
      },
      { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
    );
    return Rl(n);
  },
  zi = (e, t = {}) => {
    let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
      r = !1;
    return (
      e.forEach((o) => {
        (t.filter === void 0 || t.filter(o)) && ((n = Dl(n, al(o))), (r = !0));
      }),
      r ? Rl(n) : { x: 0, y: 0, width: 0, height: 0 }
    );
  },
  ef = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
    const l = { ...Ti(t, [n, r, o]), width: t.width / o, height: t.height / o },
      a = [];
    for (const u of e.values()) {
      const { measured: d, selectable: c = !0, hidden: f = !1 } = u;
      if ((s && !c) || f) continue;
      const p = d.width ?? u.width ?? u.initialWidth ?? null,
        y = d.height ?? u.height ?? u.initialHeight ?? null,
        x = gi(l, oo(u)),
        S = (p ?? 0) * (y ?? 0),
        g = i && x > 0;
      (!u.internals.handleBounds || g || x >= S || u.dragging) && a.push(u);
    }
    return a;
  },
  uk = (e, t) => {
    const n = new Set();
    return (
      e.forEach((r) => {
        n.add(r.id);
      }),
      t.filter((r) => n.has(r.source) || n.has(r.target))
    );
  };
function ck(e, t) {
  const n = new Map(),
    r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return (
    e.forEach((o) => {
      o.measured.width &&
        o.measured.height &&
        ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) &&
        (!r || r.has(o.id)) &&
        n.set(o.id, o);
    }),
    n
  );
}
async function fk(
  { nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i },
  s,
) {
  if (e.size === 0) return Promise.resolve(!0);
  const l = ck(e, s),
    a = zi(l),
    u = tf(
      a,
      t,
      n,
      (s == null ? void 0 : s.minZoom) ?? o,
      (s == null ? void 0 : s.maxZoom) ?? i,
      (s == null ? void 0 : s.padding) ?? 0.1,
    );
  return (
    await r.setViewport(u, {
      duration: s == null ? void 0 : s.duration,
      ease: s == null ? void 0 : s.ease,
      interpolate: s == null ? void 0 : s.interpolate,
    }),
    Promise.resolve(!0)
  );
}
function Hm({
  nodeId: e,
  nextPosition: t,
  nodeLookup: n,
  nodeOrigin: r = [0, 0],
  nodeExtent: o,
  onError: i,
}) {
  const s = n.get(e),
    l = s.parentId ? n.get(s.parentId) : void 0,
    { x: a, y: u } = l ? l.internals.positionAbsolute : { x: 0, y: 0 },
    d = s.origin ?? r;
  let c = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l) i == null || i("005", Gt.error005());
    else {
      const p = l.measured.width,
        y = l.measured.height;
      p &&
        y &&
        (c = [
          [a, u],
          [a + p, u + y],
        ]);
    }
  else
    l &&
      io(s.extent) &&
      (c = [
        [s.extent[0][0] + a, s.extent[0][1] + u],
        [s.extent[1][0] + a, s.extent[1][1] + u],
      ]);
  const f = io(c) ? fr(t, c, s.measured) : t;
  return (
    (s.measured.width === void 0 || s.measured.height === void 0) &&
      (i == null || i("015", Gt.error015())),
    {
      position: {
        x: f.x - a + (s.measured.width ?? 0) * d[0],
        y: f.y - u + (s.measured.height ?? 0) * d[1],
      },
      positionAbsolute: f,
    }
  );
}
async function dk({
  nodesToRemove: e = [],
  edgesToRemove: t = [],
  nodes: n,
  edges: r,
  onBeforeDelete: o,
}) {
  const i = new Set(e.map((f) => f.id)),
    s = [];
  for (const f of n) {
    if (f.deletable === !1) continue;
    const p = i.has(f.id),
      y = !p && f.parentId && s.find((x) => x.id === f.parentId);
    (p || y) && s.push(f);
  }
  const l = new Set(t.map((f) => f.id)),
    a = r.filter((f) => f.deletable !== !1),
    d = uk(s, a);
  for (const f of a) l.has(f.id) && !d.find((y) => y.id === f.id) && d.push(f);
  if (!o) return { edges: d, nodes: s };
  const c = await o({ nodes: s, edges: d });
  return typeof c == "boolean"
    ? c
      ? { edges: d, nodes: s }
      : { edges: [], nodes: [] }
    : c;
}
const ro = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
  fr = (e = { x: 0, y: 0 }, t, n) => ({
    x: ro(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
    y: ro(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
  });
function Vm(e, t, n) {
  const { width: r, height: o } = hn(n),
    { x: i, y: s } = n.internals.positionAbsolute;
  return fr(
    e,
    [
      [i, s],
      [i + r, s + o],
    ],
    t,
  );
}
const np = (e, t, n) =>
    e < t
      ? ro(Math.abs(e - t), 1, t) / t
      : e > n
        ? -ro(Math.abs(e - n), 1, t) / t
        : 0,
  Bm = (e, t, n = 15, r = 40) => {
    const o = np(e.x, r, t.width - r) * n,
      i = np(e.y, r, t.height - r) * n;
    return [o, i];
  },
  Dl = (e, t) => ({
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2),
  }),
  Ru = ({ x: e, y: t, width: n, height: r }) => ({
    x: e,
    y: t,
    x2: e + n,
    y2: t + r,
  }),
  Rl = ({ x: e, y: t, x2: n, y2: r }) => ({
    x: e,
    y: t,
    width: n - e,
    height: r - t,
  }),
  oo = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = Jc(e) ? e.internals.positionAbsolute : Pi(e, t);
    return {
      x: n,
      y: r,
      width:
        ((o = e.measured) == null ? void 0 : o.width) ??
        e.width ??
        e.initialWidth ??
        0,
      height:
        ((i = e.measured) == null ? void 0 : i.height) ??
        e.height ??
        e.initialHeight ??
        0,
    };
  },
  al = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = Jc(e) ? e.internals.positionAbsolute : Pi(e, t);
    return {
      x: n,
      y: r,
      x2:
        n +
        (((o = e.measured) == null ? void 0 : o.width) ??
          e.width ??
          e.initialWidth ??
          0),
      y2:
        r +
        (((i = e.measured) == null ? void 0 : i.height) ??
          e.height ??
          e.initialHeight ??
          0),
    };
  },
  Um = (e, t) => Rl(Dl(Ru(e), Ru(t))),
  gi = (e, t) => {
    const n = Math.max(
        0,
        Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x),
      ),
      r = Math.max(
        0,
        Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y),
      );
    return Math.ceil(n * r);
  },
  rp = (e) => zt(e.width) && zt(e.height) && zt(e.x) && zt(e.y),
  zt = (e) => !isNaN(e) && isFinite(e),
  pk = (e, t) => {},
  ji = (e, t = [1, 1]) => ({
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1]),
  }),
  Ti = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
    const l = { x: (e - n) / o, y: (t - r) / o };
    return i ? ji(l, s) : l;
  },
  ul = ({ x: e, y: t }, [n, r, o]) => ({ x: e * o + n, y: t * o + r });
function wr(e, t) {
  if (typeof e == "number") return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) return Math.floor(t * n * 0.01);
  }
  return (
    console.error(
      `[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`,
    ),
    0
  );
}
function hk(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = wr(e, n),
      o = wr(e, t);
    return { top: r, right: o, bottom: r, left: o, x: o * 2, y: r * 2 };
  }
  if (typeof e == "object") {
    const r = wr(e.top ?? e.y ?? 0, n),
      o = wr(e.bottom ?? e.y ?? 0, n),
      i = wr(e.left ?? e.x ?? 0, t),
      s = wr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function gk(e, t, n, r, o, i) {
  const { x: s, y: l } = ul(e, [t, n, r]),
    { x: a, y: u } = ul({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]),
    d = o - a,
    c = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(d),
    bottom: Math.floor(c),
  };
}
const tf = (e, t, n, r, o, i) => {
    const s = hk(i, t, n),
      l = (t - s.x) / e.width,
      a = (n - s.y) / e.height,
      u = Math.min(l, a),
      d = ro(u, r, o),
      c = e.x + e.width / 2,
      f = e.y + e.height / 2,
      p = t / 2 - c * d,
      y = n / 2 - f * d,
      x = gk(e, p, y, d, t, n),
      S = {
        left: Math.min(x.left - s.left, 0),
        top: Math.min(x.top - s.top, 0),
        right: Math.min(x.right - s.right, 0),
        bottom: Math.min(x.bottom - s.bottom, 0),
      };
    return { x: p - S.left + S.right, y: y - S.top + S.bottom, zoom: d };
  },
  mi = () => {
    var e;
    return (
      typeof navigator < "u" &&
      ((e = navigator == null ? void 0 : navigator.userAgent) == null
        ? void 0
        : e.indexOf("Mac")) >= 0
    );
  };
function io(e) {
  return e != null && e !== "parent";
}
function hn(e) {
  var t, n;
  return {
    width:
      ((t = e.measured) == null ? void 0 : t.width) ??
      e.width ??
      e.initialWidth ??
      0,
    height:
      ((n = e.measured) == null ? void 0 : n.height) ??
      e.height ??
      e.initialHeight ??
      0,
  };
}
function Wm(e) {
  var t, n;
  return (
    (((t = e.measured) == null ? void 0 : t.width) ??
      e.width ??
      e.initialWidth) !== void 0 &&
    (((n = e.measured) == null ? void 0 : n.height) ??
      e.height ??
      e.initialHeight) !== void 0
  );
}
function Ym(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e },
    s = r.get(n);
  if (s) {
    const l = s.origin || o;
    ((i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0]),
      (i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1]));
  }
  return i;
}
function op(e, t) {
  if (e.size !== t.size) return !1;
  for (const n of e) if (!t.has(n)) return !1;
  return !0;
}
function mk() {
  let e, t;
  return {
    promise: new Promise((r, o) => {
      ((e = r), (t = o));
    }),
    resolve: e,
    reject: t,
  };
}
function yk(e) {
  return { ...Rm, ...(e || {}) };
}
function Uo(
  e,
  {
    snapGrid: t = [0, 0],
    snapToGrid: n = !1,
    transform: r,
    containerBounds: o,
  },
) {
  const { x: i, y: s } = jt(e),
    l = Ti(
      {
        x: i - ((o == null ? void 0 : o.left) ?? 0),
        y: s - ((o == null ? void 0 : o.top) ?? 0),
      },
      r,
    ),
    { x: a, y: u } = n ? ji(l, t) : l;
  return { xSnapped: a, ySnapped: u, ...l };
}
const nf = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
  Xm = (e) => {
    var t;
    return (
      ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
      (window == null ? void 0 : window.document)
    );
  },
  vk = ["INPUT", "SELECT", "TEXTAREA"];
function Gm(e) {
  var r, o;
  const t =
    ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null
      ? void 0
      : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1
    ? !1
    : vk.includes(t.nodeName) ||
        t.hasAttribute("contenteditable") ||
        !!t.closest(".nokey");
}
const Km = (e) => "clientX" in e,
  jt = (e, t) => {
    var i, s;
    const n = Km(e),
      r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX,
      o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
    return {
      x: r - ((t == null ? void 0 : t.left) ?? 0),
      y: o - ((t == null ? void 0 : t.top) ?? 0),
    };
  },
  ip = (e, t, n, r, o) => {
    const i = t.querySelectorAll(`.${e}`);
    return !i || !i.length
      ? null
      : Array.from(i).map((s) => {
          const l = s.getBoundingClientRect();
          return {
            id: s.getAttribute("data-handleid"),
            type: e,
            nodeId: o,
            position: s.getAttribute("data-handlepos"),
            x: (l.left - n.left) / r,
            y: (l.top - n.top) / r,
            ...nf(s),
          };
        });
  };
function Qm({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: i,
  targetControlX: s,
  targetControlY: l,
}) {
  const a = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125,
    u = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125,
    d = Math.abs(a - e),
    c = Math.abs(u - t);
  return [a, u, d, c];
}
function ls(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function sp({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case q.Left:
      return [t - ls(t - r, i), n];
    case q.Right:
      return [t + ls(r - t, i), n];
    case q.Top:
      return [t, n - ls(n - o, i)];
    case q.Bottom:
      return [t, n + ls(o - n, i)];
  }
}
function Zm({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = q.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = q.Top,
  curvature: s = 0.25,
}) {
  const [l, a] = sp({ pos: n, x1: e, y1: t, x2: r, y2: o, c: s }),
    [u, d] = sp({ pos: i, x1: r, y1: o, x2: e, y2: t, c: s }),
    [c, f, p, y] = Qm({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: l,
      sourceControlY: a,
      targetControlX: u,
      targetControlY: d,
    });
  return [`M${e},${t} C${l},${a} ${u},${d} ${r},${o}`, c, f, p, y];
}
function qm({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2,
    i = n < e ? n + o : n - o,
    s = Math.abs(r - t) / 2,
    l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function xk({
  sourceNode: e,
  targetNode: t,
  selected: n = !1,
  zIndex: r = 0,
  elevateOnSelect: o = !1,
  zIndexMode: i = "basic",
}) {
  if (i === "manual") return r;
  const s = o && n ? r + 1e3 : r,
    l = Math.max(
      e.parentId || (o && e.selected) ? e.internals.z : 0,
      t.parentId || (o && t.selected) ? t.internals.z : 0,
    );
  return s + l;
}
function wk({
  sourceNode: e,
  targetNode: t,
  width: n,
  height: r,
  transform: o,
}) {
  const i = Dl(al(e), al(t));
  (i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1));
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2],
  };
  return gi(s, Rl(i)) > 0;
}
const Sk = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
    `xy-edge__${e}${t || ""}-${n}${r || ""}`,
  kk = (e, t) =>
    t.some(
      (n) =>
        n.source === e.source &&
        n.target === e.target &&
        (n.sourceHandle === e.sourceHandle ||
          (!n.sourceHandle && !e.sourceHandle)) &&
        (n.targetHandle === e.targetHandle ||
          (!n.targetHandle && !e.targetHandle)),
    ),
  Ou = (e, t, n = {}) => {
    if (!e.source || !e.target) return t;
    const r = n.getEdgeId || Sk;
    let o;
    return (
      Fm(e) ? (o = { ...e }) : (o = { ...e, id: r(e) }),
      kk(o, t)
        ? t
        : (o.sourceHandle === null && delete o.sourceHandle,
          o.targetHandle === null && delete o.targetHandle,
          t.concat(o))
    );
  };
function Jm({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = qm({ sourceX: e, sourceY: t, targetX: n, targetY: r });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const lp = {
    [q.Left]: { x: -1, y: 0 },
    [q.Right]: { x: 1, y: 0 },
    [q.Top]: { x: 0, y: -1 },
    [q.Bottom]: { x: 0, y: 1 },
  },
  Ek = ({ source: e, sourcePosition: t = q.Bottom, target: n }) =>
    t === q.Left || t === q.Right
      ? e.x < n.x
        ? { x: 1, y: 0 }
        : { x: -1, y: 0 }
      : e.y < n.y
        ? { x: 0, y: 1 }
        : { x: 0, y: -1 },
  ap = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function _k({
  source: e,
  sourcePosition: t = q.Bottom,
  target: n,
  targetPosition: r = q.Top,
  center: o,
  offset: i,
  stepPosition: s,
}) {
  const l = lp[t],
    a = lp[r],
    u = { x: e.x + l.x * i, y: e.y + l.y * i },
    d = { x: n.x + a.x * i, y: n.y + a.y * i },
    c = Ek({ source: u, sourcePosition: t, target: d }),
    f = c.x !== 0 ? "x" : "y",
    p = c[f];
  let y = [],
    x,
    S;
  const g = { x: 0, y: 0 },
    v = { x: 0, y: 0 },
    [, , h, w] = qm({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y });
  if (l[f] * a[f] === -1) {
    f === "x"
      ? ((x = o.x ?? u.x + (d.x - u.x) * s), (S = o.y ?? (u.y + d.y) / 2))
      : ((x = o.x ?? (u.x + d.x) / 2), (S = o.y ?? u.y + (d.y - u.y) * s));
    const k = [
        { x, y: u.y },
        { x, y: d.y },
      ],
      j = [
        { x: u.x, y: S },
        { x: d.x, y: S },
      ];
    l[f] === p ? (y = f === "x" ? k : j) : (y = f === "x" ? j : k);
  } else {
    const k = [{ x: u.x, y: d.y }],
      j = [{ x: d.x, y: u.y }];
    if (
      (f === "x" ? (y = l.x === p ? j : k) : (y = l.y === p ? k : j), t === r)
    ) {
      const E = Math.abs(e[f] - n[f]);
      if (E <= i) {
        const $ = Math.min(i - 1, i - E);
        l[f] === p
          ? (g[f] = (u[f] > e[f] ? -1 : 1) * $)
          : (v[f] = (d[f] > n[f] ? -1 : 1) * $);
      }
    }
    if (t !== r) {
      const E = f === "x" ? "y" : "x",
        $ = l[f] === a[E],
        T = u[E] > d[E],
        D = u[E] < d[E];
      ((l[f] === 1 && ((!$ && T) || ($ && D))) ||
        (l[f] !== 1 && ((!$ && D) || ($ && T)))) &&
        (y = f === "x" ? k : j);
    }
    const R = { x: u.x + g.x, y: u.y + g.y },
      P = { x: d.x + v.x, y: d.y + v.y },
      L = Math.max(Math.abs(R.x - y[0].x), Math.abs(P.x - y[0].x)),
      F = Math.max(Math.abs(R.y - y[0].y), Math.abs(P.y - y[0].y));
    L >= F
      ? ((x = (R.x + P.x) / 2), (S = y[0].y))
      : ((x = y[0].x), (S = (R.y + P.y) / 2));
  }
  const _ = { x: u.x + g.x, y: u.y + g.y },
    N = { x: d.x + v.x, y: d.y + v.y };
  return [
    [
      e,
      ...(_.x !== y[0].x || _.y !== y[0].y ? [_] : []),
      ...y,
      ...(N.x !== y[y.length - 1].x || N.y !== y[y.length - 1].y ? [N] : []),
      n,
    ],
    x,
    S,
    h,
    w,
  ];
}
function Nk(e, t, n, r) {
  const o = Math.min(ap(e, t) / 2, ap(t, n) / 2, r),
    { x: i, y: s } = t;
  if ((e.x === i && i === n.x) || (e.y === s && s === n.y)) return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1,
      d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const l = e.x < n.x ? 1 : -1,
    a = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * a}Q ${i},${s} ${i + o * l},${s}`;
}
function bu({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = q.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = q.Top,
  borderRadius: s = 5,
  centerX: l,
  centerY: a,
  offset: u = 20,
  stepPosition: d = 0.5,
}) {
  const [c, f, p, y, x] = _k({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: a },
    offset: u,
    stepPosition: d,
  });
  let S = `M${c[0].x} ${c[0].y}`;
  for (let g = 1; g < c.length - 1; g++) S += Nk(c[g - 1], c[g], c[g + 1], s);
  return ((S += `L${c[c.length - 1].x} ${c[c.length - 1].y}`), [S, f, p, y, x]);
}
function up(e) {
  var t;
  return (
    e &&
    !!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
    !!(e.measured.width || e.width || e.initialWidth)
  );
}
function Ck(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!up(t) || !up(n)) return null;
  const r = t.internals.handleBounds || cp(t.handles),
    o = n.internals.handleBounds || cp(n.handles),
    i = fp((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
    s = fp(
      e.connectionMode === no.Strict
        ? ((o == null ? void 0 : o.target) ?? [])
        : ((o == null ? void 0 : o.target) ?? []).concat(
            (o == null ? void 0 : o.source) ?? [],
          ),
      e.targetHandle,
    );
  if (!i || !s)
    return (
      (c = e.onError) == null ||
        c.call(
          e,
          "008",
          Gt.error008(i ? "target" : "source", {
            id: e.id,
            sourceHandle: e.sourceHandle,
            targetHandle: e.targetHandle,
          }),
        ),
      null
    );
  const l = (i == null ? void 0 : i.position) || q.Bottom,
    a = (s == null ? void 0 : s.position) || q.Top,
    u = dr(t, i, l),
    d = dr(n, s, a);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: a,
  };
}
function cp(e) {
  if (!e) return null;
  const t = [],
    n = [];
  for (const r of e)
    ((r.width = r.width ?? 1),
      (r.height = r.height ?? 1),
      r.type === "source" ? t.push(r) : r.type === "target" && n.push(r));
  return { source: t, target: n };
}
function dr(e, t, n = q.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
    i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
    { width: s, height: l } = t ?? hn(e);
  if (r) return { x: o + s / 2, y: i + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case q.Top:
      return { x: o + s / 2, y: i };
    case q.Right:
      return { x: o + s, y: i + l / 2 };
    case q.Bottom:
      return { x: o + s / 2, y: i + l };
    case q.Left:
      return { x: o, y: i + l / 2 };
  }
}
function fp(e, t) {
  return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function Fu(e, t) {
  return e
    ? typeof e == "string"
      ? e
      : `${t ? `${t}__` : ""}${Object.keys(e)
          .sort()
          .map((r) => `${r}=${e[r]}`)
          .join("&")}`
    : "";
}
function Mk(
  e,
  { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o },
) {
  const i = new Set();
  return e
    .reduce(
      (s, l) => (
        [l.markerStart || r, l.markerEnd || o].forEach((a) => {
          if (a && typeof a == "object") {
            const u = Fu(a, t);
            i.has(u) ||
              (s.push({ id: u, color: a.color || n, ...a }), i.add(u));
          }
        }),
        s
      ),
      [],
    )
    .sort((s, l) => s.id.localeCompare(l.id));
}
const e0 = 1e3,
  Ik = 10,
  rf = {
    nodeOrigin: [0, 0],
    nodeExtent: pi,
    elevateNodesOnSelect: !0,
    zIndexMode: "basic",
    defaults: {},
  },
  Pk = { ...rf, checkEquality: !0 };
function of(e, t) {
  const n = { ...e };
  for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function zk(e, t, n) {
  const r = of(rf, n);
  for (const o of e.values())
    if (o.parentId) lf(o, e, t, r);
    else {
      const i = Pi(o, r.nodeOrigin),
        s = io(o.extent) ? o.extent : r.nodeExtent,
        l = fr(i, s, hn(o));
      o.internals.positionAbsolute = l;
    }
}
function jk(e, t) {
  if (!e.handles)
    return e.measured
      ? t == null
        ? void 0
        : t.internals.handleBounds
      : void 0;
  const n = [],
    r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type,
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return { source: n, target: r };
}
function sf(e) {
  return e === "manual";
}
function Hu(e, t, n, r = {}) {
  var d, c;
  const o = of(Pk, r),
    i = { i: 0 },
    s = new Map(t),
    l = o != null && o.elevateNodesOnSelect && !sf(o.zIndexMode) ? e0 : 0;
  let a = e.length > 0,
    u = !1;
  (t.clear(), n.clear());
  for (const f of e) {
    let p = s.get(f.id);
    if (o.checkEquality && f === (p == null ? void 0 : p.internals.userNode))
      t.set(f.id, p);
    else {
      const y = Pi(f, o.nodeOrigin),
        x = io(f.extent) ? f.extent : o.nodeExtent,
        S = fr(y, x, hn(f));
      ((p = {
        ...o.defaults,
        ...f,
        measured: {
          width: (d = f.measured) == null ? void 0 : d.width,
          height: (c = f.measured) == null ? void 0 : c.height,
        },
        internals: {
          positionAbsolute: S,
          handleBounds: jk(f, p),
          z: t0(f, l, o.zIndexMode),
          userNode: f,
        },
      }),
        t.set(f.id, p));
    }
    ((p.measured === void 0 ||
      p.measured.width === void 0 ||
      p.measured.height === void 0) &&
      !p.hidden &&
      (a = !1),
      f.parentId && lf(p, t, n, r, i),
      u || (u = f.selected ?? !1));
  }
  return { nodesInitialized: a, hasSelectedNodes: u };
}
function Tk(e, t) {
  if (!e.parentId) return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function lf(e, t, n, r, o) {
  const {
      elevateNodesOnSelect: i,
      nodeOrigin: s,
      nodeExtent: l,
      zIndexMode: a,
    } = of(rf, r),
    u = e.parentId,
    d = t.get(u);
  if (!d) {
    console.warn(
      `Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  (Tk(e, n),
    o &&
      !d.parentId &&
      d.internals.rootParentIndex === void 0 &&
      a === "auto" &&
      ((d.internals.rootParentIndex = ++o.i),
      (d.internals.z = d.internals.z + o.i * Ik)),
    o &&
      d.internals.rootParentIndex !== void 0 &&
      (o.i = d.internals.rootParentIndex));
  const c = i && !sf(a) ? e0 : 0,
    { x: f, y: p, z: y } = $k(e, d, s, l, c, a),
    { positionAbsolute: x } = e.internals,
    S = f !== x.x || p !== x.y;
  (S || y !== e.internals.z) &&
    t.set(e.id, {
      ...e,
      internals: {
        ...e.internals,
        positionAbsolute: S ? { x: f, y: p } : x,
        z: y,
      },
    });
}
function t0(e, t, n) {
  const r = zt(e.zIndex) ? e.zIndex : 0;
  return sf(n) ? r : r + (e.selected ? t : 0);
}
function $k(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute,
    a = hn(e),
    u = Pi(e, n),
    d = io(e.extent) ? fr(u, e.extent, a) : u;
  let c = fr({ x: s + d.x, y: l + d.y }, r, a);
  e.extent === "parent" && (c = Vm(c, a, t));
  const f = t0(e, o, i),
    p = t.internals.z ?? 0;
  return { x: c.x, y: c.y, z: p >= f ? p + 1 : f };
}
function af(e, t, n, r = [0, 0]) {
  var s;
  const o = [],
    i = new Map();
  for (const l of e) {
    const a = t.get(l.parentId);
    if (!a) continue;
    const u =
        ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? oo(a),
      d = Um(u, l.rect);
    i.set(l.parentId, { expandedRect: d, parent: a });
  }
  return (
    i.size > 0 &&
      i.forEach(({ expandedRect: l, parent: a }, u) => {
        var h;
        const d = a.internals.positionAbsolute,
          c = hn(a),
          f = a.origin ?? r,
          p = l.x < d.x ? Math.round(Math.abs(d.x - l.x)) : 0,
          y = l.y < d.y ? Math.round(Math.abs(d.y - l.y)) : 0,
          x = Math.max(c.width, Math.round(l.width)),
          S = Math.max(c.height, Math.round(l.height)),
          g = (x - c.width) * f[0],
          v = (S - c.height) * f[1];
        ((p > 0 || y > 0 || g || v) &&
          (o.push({
            id: u,
            type: "position",
            position: { x: a.position.x - p + g, y: a.position.y - y + v },
          }),
          (h = n.get(u)) == null ||
            h.forEach((w) => {
              e.some((_) => _.id === w.id) ||
                o.push({
                  id: w.id,
                  type: "position",
                  position: { x: w.position.x + p, y: w.position.y + y },
                });
            })),
          (c.width < l.width || c.height < l.height || p || y) &&
            o.push({
              id: u,
              type: "dimensions",
              setAttributes: !0,
              dimensions: {
                width: x + (p ? f[0] * p - g : 0),
                height: S + (y ? f[1] * y - v : 0),
              },
            }));
      }),
    o
  );
}
function Lk(e, t, n, r, o, i, s) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!l) return { changes: [], updatedInternals: a };
  const u = [],
    d = window.getComputedStyle(l),
    { m22: c } = new window.DOMMatrixReadOnly(d.transform),
    f = [];
  for (const p of e.values()) {
    const y = t.get(p.id);
    if (!y) continue;
    if (y.hidden) {
      (t.set(y.id, {
        ...y,
        internals: { ...y.internals, handleBounds: void 0 },
      }),
        (a = !0));
      continue;
    }
    const x = nf(p.nodeElement),
      S = y.measured.width !== x.width || y.measured.height !== x.height;
    if (
      !!(x.width && x.height && (S || !y.internals.handleBounds || p.force))
    ) {
      const v = p.nodeElement.getBoundingClientRect(),
        h = io(y.extent) ? y.extent : i;
      let { positionAbsolute: w } = y.internals;
      y.parentId && y.extent === "parent"
        ? (w = Vm(w, x, t.get(y.parentId)))
        : h && (w = fr(w, h, x));
      const _ = {
        ...y,
        measured: x,
        internals: {
          ...y.internals,
          positionAbsolute: w,
          handleBounds: {
            source: ip("source", p.nodeElement, v, c, y.id),
            target: ip("target", p.nodeElement, v, c, y.id),
          },
        },
      };
      (t.set(y.id, _),
        y.parentId && lf(_, t, n, { nodeOrigin: o, zIndexMode: s }),
        (a = !0),
        S &&
          (u.push({ id: y.id, type: "dimensions", dimensions: x }),
          y.expandParent &&
            y.parentId &&
            f.push({ id: y.id, parentId: y.parentId, rect: oo(_, o) })));
    }
  }
  if (f.length > 0) {
    const p = af(f, t, n, o);
    u.push(...p);
  }
  return { changes: u, updatedInternals: a };
}
async function Ak({
  delta: e,
  panZoom: t,
  transform: n,
  translateExtent: r,
  width: o,
  height: i,
}) {
  if (!t || (!e.x && !e.y)) return Promise.resolve(!1);
  const s = await t.setViewportConstrained(
      { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
      [
        [0, 0],
        [o, i],
      ],
      r,
    ),
    l = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(l);
}
function dp(e, t, n, r, o, i) {
  let s = o;
  const l = r.get(s) || new Map();
  (r.set(s, l.set(n, t)), (s = `${o}-${e}`));
  const a = r.get(s) || new Map();
  if ((r.set(s, a.set(n, t)), i)) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || new Map();
    r.set(s, u.set(n, t));
  }
}
function n0(e, t, n) {
  (e.clear(), t.clear());
  for (const r of n) {
    const {
        source: o,
        target: i,
        sourceHandle: s = null,
        targetHandle: l = null,
      } = r,
      a = {
        edgeId: r.id,
        source: o,
        target: i,
        sourceHandle: s,
        targetHandle: l,
      },
      u = `${o}-${s}--${i}-${l}`,
      d = `${i}-${l}--${o}-${s}`;
    (dp("source", a, d, e, o, s), dp("target", a, u, e, i, l), t.set(r.id, r));
  }
}
function r0(e, t) {
  if (!e.parentId) return !1;
  const n = t.get(e.parentId);
  return n ? (n.selected ? !0 : r0(n, t)) : !1;
}
function pp(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0;
    if (r === n) return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function Dk(e, t, n, r) {
  const o = new Map();
  for (const [i, s] of e)
    if (
      (s.selected || s.id === r) &&
      (!s.parentId || !r0(s, e)) &&
      (s.draggable || (t && typeof s.draggable > "u"))
    ) {
      const l = e.get(i);
      l &&
        o.set(i, {
          id: i,
          position: l.position || { x: 0, y: 0 },
          distance: {
            x: n.x - l.internals.positionAbsolute.x,
            y: n.y - l.internals.positionAbsolute.y,
          },
          extent: l.extent,
          parentId: l.parentId,
          origin: l.origin,
          expandParent: l.expandParent,
          internals: {
            positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 },
          },
          measured: {
            width: l.measured.width ?? 0,
            height: l.measured.height ?? 0,
          },
        });
    }
  return o;
}
function za({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, a;
  const o = [];
  for (const [u, d] of t) {
    const c = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    c && o.push({ ...c, position: d.position, dragging: r });
  }
  if (!e) return [o[0], o];
  const i = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    i
      ? {
          ...i,
          position:
            ((a = t.get(e)) == null ? void 0 : a.position) || i.position,
          dragging: r,
        }
      : o[0],
    o,
  ];
}
function Rk({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o) return null;
  const i = { x: n - o.distance.x, y: r - o.distance.y },
    s = ji(i, t);
  return { x: s.x - i.x, y: s.y - i.y };
}
function Ok({
  onNodeMouseDown: e,
  getStoreItems: t,
  onDragStart: n,
  onDrag: r,
  onDragStop: o,
}) {
  let i = { x: null, y: null },
    s = 0,
    l = new Map(),
    a = !1,
    u = { x: 0, y: 0 },
    d = null,
    c = !1,
    f = null,
    p = !1,
    y = !1,
    x = null;
  function S({
    noDragClassName: v,
    handleSelector: h,
    domNode: w,
    isSelectable: _,
    nodeId: N,
    nodeClickDistance: M = 0,
  }) {
    f = ut(w);
    function k({ x: L, y: F }) {
      const {
        nodeLookup: E,
        nodeExtent: $,
        snapGrid: T,
        snapToGrid: D,
        nodeOrigin: C,
        onNodeDrag: I,
        onSelectionDrag: A,
        onError: H,
        updateNodePositions: b,
      } = t();
      i = { x: L, y: F };
      let K = !1;
      const G = l.size > 1,
        te = G && $ ? Ru(zi(l)) : null,
        ee = G && D ? Rk({ dragItems: l, snapGrid: T, x: L, y: F }) : null;
      for (const [ne, X] of l) {
        if (!E.has(ne)) continue;
        let re = { x: L - X.distance.x, y: F - X.distance.y };
        D &&
          (re = ee
            ? { x: Math.round(re.x + ee.x), y: Math.round(re.y + ee.y) }
            : ji(re, T));
        let fe = null;
        if (G && $ && !X.extent && te) {
          const { positionAbsolute: oe } = X.internals,
            pe = oe.x - te.x + $[0][0],
            ve = oe.x + X.measured.width - te.x2 + $[1][0],
            he = oe.y - te.y + $[0][1],
            Oe = oe.y + X.measured.height - te.y2 + $[1][1];
          fe = [
            [pe, he],
            [ve, Oe],
          ];
        }
        const { position: ae, positionAbsolute: ie } = Hm({
          nodeId: ne,
          nextPosition: re,
          nodeLookup: E,
          nodeExtent: fe || $,
          nodeOrigin: C,
          onError: H,
        });
        ((K = K || X.position.x !== ae.x || X.position.y !== ae.y),
          (X.position = ae),
          (X.internals.positionAbsolute = ie));
      }
      if (((y = y || K), !!K && (b(l, !0), x && (r || I || (!N && A))))) {
        const [ne, X] = za({ nodeId: N, dragItems: l, nodeLookup: E });
        (r == null || r(x, l, ne, X),
          I == null || I(x, ne, X),
          N || A == null || A(x, X));
      }
    }
    async function j() {
      if (!d) return;
      const {
        transform: L,
        panBy: F,
        autoPanSpeed: E,
        autoPanOnNodeDrag: $,
      } = t();
      if (!$) {
        ((a = !1), cancelAnimationFrame(s));
        return;
      }
      const [T, D] = Bm(u, d, E);
      ((T !== 0 || D !== 0) &&
        ((i.x = (i.x ?? 0) - T / L[2]),
        (i.y = (i.y ?? 0) - D / L[2]),
        (await F({ x: T, y: D })) && k(i)),
        (s = requestAnimationFrame(j)));
    }
    function R(L) {
      var G;
      const {
        nodeLookup: F,
        multiSelectionActive: E,
        nodesDraggable: $,
        transform: T,
        snapGrid: D,
        snapToGrid: C,
        selectNodesOnDrag: I,
        onNodeDragStart: A,
        onSelectionDragStart: H,
        unselectNodesAndEdges: b,
      } = t();
      ((c = !0),
        (!I || !_) &&
          !E &&
          N &&
          (((G = F.get(N)) != null && G.selected) || b()),
        _ && I && N && (e == null || e(N)));
      const K = Uo(L.sourceEvent, {
        transform: T,
        snapGrid: D,
        snapToGrid: C,
        containerBounds: d,
      });
      if (
        ((i = K), (l = Dk(F, $, K, N)), l.size > 0 && (n || A || (!N && H)))
      ) {
        const [te, ee] = za({ nodeId: N, dragItems: l, nodeLookup: F });
        (n == null || n(L.sourceEvent, l, te, ee),
          A == null || A(L.sourceEvent, te, ee),
          N || H == null || H(L.sourceEvent, ee));
      }
    }
    const P = wm()
      .clickDistance(M)
      .on("start", (L) => {
        const {
          domNode: F,
          nodeDragThreshold: E,
          transform: $,
          snapGrid: T,
          snapToGrid: D,
        } = t();
        ((d = (F == null ? void 0 : F.getBoundingClientRect()) || null),
          (p = !1),
          (y = !1),
          (x = L.sourceEvent),
          E === 0 && R(L),
          (i = Uo(L.sourceEvent, {
            transform: $,
            snapGrid: T,
            snapToGrid: D,
            containerBounds: d,
          })),
          (u = jt(L.sourceEvent, d)));
      })
      .on("drag", (L) => {
        const {
            autoPanOnNodeDrag: F,
            transform: E,
            snapGrid: $,
            snapToGrid: T,
            nodeDragThreshold: D,
            nodeLookup: C,
          } = t(),
          I = Uo(L.sourceEvent, {
            transform: E,
            snapGrid: $,
            snapToGrid: T,
            containerBounds: d,
          });
        if (
          ((x = L.sourceEvent),
          ((L.sourceEvent.type === "touchmove" &&
            L.sourceEvent.touches.length > 1) ||
            (N && !C.has(N))) &&
            (p = !0),
          !p)
        ) {
          if ((!a && F && c && ((a = !0), j()), !c)) {
            const A = jt(L.sourceEvent, d),
              H = A.x - u.x,
              b = A.y - u.y;
            Math.sqrt(H * H + b * b) > D && R(L);
          }
          (i.x !== I.xSnapped || i.y !== I.ySnapped) &&
            l &&
            c &&
            ((u = jt(L.sourceEvent, d)), k(I));
        }
      })
      .on("end", (L) => {
        if (
          !(!c || p) &&
          ((a = !1), (c = !1), cancelAnimationFrame(s), l.size > 0)
        ) {
          const {
            nodeLookup: F,
            updateNodePositions: E,
            onNodeDragStop: $,
            onSelectionDragStop: T,
          } = t();
          if ((y && (E(l, !1), (y = !1)), o || $ || (!N && T))) {
            const [D, C] = za({
              nodeId: N,
              dragItems: l,
              nodeLookup: F,
              dragging: !1,
            });
            (o == null || o(L.sourceEvent, l, D, C),
              $ == null || $(L.sourceEvent, D, C),
              N || T == null || T(L.sourceEvent, C));
          }
        }
      })
      .filter((L) => {
        const F = L.target;
        return !L.button && (!v || !pp(F, `.${v}`, w)) && (!h || pp(F, h, w));
      });
    f.call(P);
  }
  function g() {
    f == null || f.on(".drag", null);
  }
  return { update: S, destroy: g };
}
function bk(e, t, n) {
  const r = [],
    o = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 };
  for (const i of t.values()) gi(o, oo(i)) > 0 && r.push(i);
  return r;
}
const Fk = 250;
function Hk(e, t, n, r) {
  var l, a;
  let o = [],
    i = 1 / 0;
  const s = bk(e, n, t + Fk);
  for (const u of s) {
    const d = [
      ...(((l = u.internals.handleBounds) == null ? void 0 : l.source) ?? []),
      ...(((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []),
    ];
    for (const c of d) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id) continue;
      const { x: f, y: p } = dr(u, c, c.position, !0),
        y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(p - e.y, 2));
      y > t ||
        (y < i
          ? ((o = [{ ...c, x: f, y: p }]), (i = y))
          : y === i && o.push({ ...c, x: f, y: p }));
    }
  }
  if (!o.length) return null;
  if (o.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return o.find((d) => d.type === u) ?? o[0];
  }
  return o[0];
}
function o0(e, t, n, r, o, i = !1) {
  var u, d, c;
  const s = r.get(e);
  if (!s) return null;
  const l =
      o === "strict"
        ? (u = s.internals.handleBounds) == null
          ? void 0
          : u[t]
        : [
            ...(((d = s.internals.handleBounds) == null ? void 0 : d.source) ??
              []),
            ...(((c = s.internals.handleBounds) == null ? void 0 : c.target) ??
              []),
          ],
    a =
      (n
        ? l == null
          ? void 0
          : l.find((f) => f.id === n)
        : l == null
          ? void 0
          : l[0]) ?? null;
  return a && i ? { ...a, ...dr(s, a, a.position, !0) } : a;
}
function i0(e, t) {
  return (
    e ||
    (t != null && t.classList.contains("target")
      ? "target"
      : t != null && t.classList.contains("source")
        ? "source"
        : null)
  );
}
function Vk(e, t) {
  let n = null;
  return (t ? (n = !0) : e && !t && (n = !1), n);
}
const s0 = () => !0;
function Bk(
  e,
  {
    connectionMode: t,
    connectionRadius: n,
    handleId: r,
    nodeId: o,
    edgeUpdaterType: i,
    isTarget: s,
    domNode: l,
    nodeLookup: a,
    lib: u,
    autoPanOnConnect: d,
    flowId: c,
    panBy: f,
    cancelConnection: p,
    onConnectStart: y,
    onConnect: x,
    onConnectEnd: S,
    isValidConnection: g = s0,
    onReconnectEnd: v,
    updateConnection: h,
    getTransform: w,
    getFromHandle: _,
    autoPanSpeed: N,
    dragThreshold: M = 1,
    handleDomNode: k,
  },
) {
  const j = Xm(e.target);
  let R = 0,
    P;
  const { x: L, y: F } = jt(e),
    E = i0(i, k),
    $ = l == null ? void 0 : l.getBoundingClientRect();
  let T = !1;
  if (!$ || !E) return;
  const D = o0(o, E, r, a, t);
  if (!D) return;
  let C = jt(e, $),
    I = !1,
    A = null,
    H = !1,
    b = null;
  function K() {
    if (!d || !$) return;
    const [ae, ie] = Bm(C, $, N);
    (f({ x: ae, y: ie }), (R = requestAnimationFrame(K)));
  }
  const G = { ...D, nodeId: o, type: E, position: D.position },
    te = a.get(o);
  let ne = {
    inProgress: !0,
    isValid: null,
    from: dr(te, G, q.Left, !0),
    fromHandle: G,
    fromPosition: G.position,
    fromNode: te,
    to: C,
    toHandle: null,
    toPosition: tp[G.position],
    toNode: null,
    pointer: C,
  };
  function X() {
    ((T = !0),
      h(ne),
      y == null || y(e, { nodeId: o, handleId: r, handleType: E }));
  }
  M === 0 && X();
  function re(ae) {
    if (!T) {
      const { x: Oe, y: Ot } = jt(ae),
        Et = Oe - L,
        Qt = Ot - F;
      if (!(Et * Et + Qt * Qt > M * M)) return;
      X();
    }
    if (!_() || !G) {
      fe(ae);
      return;
    }
    const ie = w();
    ((C = jt(ae, $)),
      (P = Hk(Ti(C, ie, !1, [1, 1]), n, a, G)),
      I || (K(), (I = !0)));
    const oe = l0(ae, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: g,
      doc: j,
      lib: u,
      flowId: c,
      nodeLookup: a,
    });
    ((b = oe.handleDomNode), (A = oe.connection), (H = Vk(!!P, oe.isValid)));
    const pe = a.get(o),
      ve = pe ? dr(pe, G, q.Left, !0) : ne.from,
      he = {
        ...ne,
        from: ve,
        isValid: H,
        to:
          oe.toHandle && H ? ul({ x: oe.toHandle.x, y: oe.toHandle.y }, ie) : C,
        toHandle: oe.toHandle,
        toPosition: H && oe.toHandle ? oe.toHandle.position : tp[G.position],
        toNode: oe.toHandle ? a.get(oe.toHandle.nodeId) : null,
        pointer: C,
      };
    (h(he), (ne = he));
  }
  function fe(ae) {
    if (!("touches" in ae && ae.touches.length > 0)) {
      if (T) {
        (P || b) && A && H && (x == null || x(A));
        const { inProgress: ie, ...oe } = ne,
          pe = { ...oe, toPosition: ne.toHandle ? ne.toPosition : null };
        (S == null || S(ae, pe), i && (v == null || v(ae, pe)));
      }
      (p(),
        cancelAnimationFrame(R),
        (I = !1),
        (H = !1),
        (A = null),
        (b = null),
        j.removeEventListener("mousemove", re),
        j.removeEventListener("mouseup", fe),
        j.removeEventListener("touchmove", re),
        j.removeEventListener("touchend", fe));
    }
  }
  (j.addEventListener("mousemove", re),
    j.addEventListener("mouseup", fe),
    j.addEventListener("touchmove", re),
    j.addEventListener("touchend", fe));
}
function l0(
  e,
  {
    handle: t,
    connectionMode: n,
    fromNodeId: r,
    fromHandleId: o,
    fromType: i,
    doc: s,
    lib: l,
    flowId: a,
    isValidConnection: u = s0,
    nodeLookup: d,
  },
) {
  const c = i === "target",
    f = t
      ? s.querySelector(
          `.${l}-flow__handle[data-id="${a}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
        )
      : null,
    { x: p, y } = jt(e),
    x = s.elementFromPoint(p, y),
    S = x != null && x.classList.contains(`${l}-flow__handle`) ? x : f,
    g = { handleDomNode: S, isValid: !1, connection: null, toHandle: null };
  if (S) {
    const v = i0(void 0, S),
      h = S.getAttribute("data-nodeid"),
      w = S.getAttribute("data-handleid"),
      _ = S.classList.contains("connectable"),
      N = S.classList.contains("connectableend");
    if (!h || !v) return g;
    const M = {
      source: c ? h : r,
      sourceHandle: c ? w : o,
      target: c ? r : h,
      targetHandle: c ? o : w,
    };
    g.connection = M;
    const j =
      _ &&
      N &&
      (n === no.Strict
        ? (c && v === "source") || (!c && v === "target")
        : h !== r || w !== o);
    ((g.isValid = j && u(M)), (g.toHandle = o0(h, v, w, d, n, !0)));
  }
  return g;
}
const Vu = { onPointerDown: Bk, isValid: l0 };
function Uk({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = ut(e);
  function i({
    translateExtent: l,
    width: a,
    height: u,
    zoomStep: d = 1,
    pannable: c = !0,
    zoomable: f = !0,
    inversePan: p = !1,
  }) {
    const y = (h) => {
      if (h.sourceEvent.type !== "wheel" || !t) return;
      const w = n(),
        _ = h.sourceEvent.ctrlKey && mi() ? 10 : 1,
        N =
          -h.sourceEvent.deltaY *
          (h.sourceEvent.deltaMode === 1
            ? 0.05
            : h.sourceEvent.deltaMode
              ? 1
              : 0.002) *
          d,
        M = w[2] * Math.pow(2, N * _);
      t.scaleTo(M);
    };
    let x = [0, 0];
    const S = (h) => {
        (h.sourceEvent.type === "mousedown" ||
          h.sourceEvent.type === "touchstart") &&
          (x = [
            h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
            h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY,
          ]);
      },
      g = (h) => {
        const w = n();
        if (
          (h.sourceEvent.type !== "mousemove" &&
            h.sourceEvent.type !== "touchmove") ||
          !t
        )
          return;
        const _ = [
            h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
            h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY,
          ],
          N = [_[0] - x[0], _[1] - x[1]];
        x = _;
        const M = r() * Math.max(w[2], Math.log(w[2])) * (p ? -1 : 1),
          k = { x: w[0] - N[0] * M, y: w[1] - N[1] * M },
          j = [
            [0, 0],
            [a, u],
          ];
        t.setViewportConstrained({ x: k.x, y: k.y, zoom: w[2] }, j, l);
      },
      v = Am()
        .on("start", S)
        .on("zoom", c ? g : null)
        .on("zoom.wheel", f ? y : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return { update: i, destroy: s, pointer: Mt };
}
const Ol = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
  ja = ({ x: e, y: t, zoom: n }) => Al.translate(e, t).scale(n),
  $r = (e, t) => e.target.closest(`.${t}`),
  a0 = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
  Wk = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
  Ta = (e, t = 0, n = Wk, r = () => {}) => {
    const o = typeof t == "number" && t > 0;
    return (o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e);
  },
  u0 = (e) => {
    const t = e.ctrlKey && mi() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
  };
function Yk({
  zoomPanValues: e,
  noWheelClassName: t,
  d3Selection: n,
  d3Zoom: r,
  panOnScrollMode: o,
  panOnScrollSpeed: i,
  zoomOnPinch: s,
  onPanZoomStart: l,
  onPanZoom: a,
  onPanZoomEnd: u,
}) {
  return (d) => {
    if ($r(d, t)) return (d.ctrlKey && d.preventDefault(), !1);
    (d.preventDefault(), d.stopImmediatePropagation());
    const c = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const S = Mt(d),
        g = u0(d),
        v = c * Math.pow(2, g);
      r.scaleTo(n, v, S, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let p = o === rr.Vertical ? 0 : d.deltaX * f,
      y = o === rr.Horizontal ? 0 : d.deltaY * f;
    (!mi() && d.shiftKey && o !== rr.Vertical && ((p = d.deltaY * f), (y = 0)),
      r.translateBy(n, -(p / c) * i, -(y / c) * i, { internal: !0 }));
    const x = Ol(n.property("__zoom"));
    (clearTimeout(e.panScrollTimeout),
      e.isPanScrolling
        ? (a == null || a(d, x),
          (e.panScrollTimeout = setTimeout(() => {
            (u == null || u(d, x), (e.isPanScrolling = !1));
          }, 150)))
        : ((e.isPanScrolling = !0), l == null || l(d, x)));
  };
}
function Xk({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function (r, o) {
    const i = r.type === "wheel",
      s = !t && i && !r.ctrlKey,
      l = $r(r, e);
    if ((r.ctrlKey && i && l && r.preventDefault(), s || l)) return null;
    (r.preventDefault(), n.call(this, r, o));
  };
}
function Gk({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal) return;
    const o = Ol(r.transform);
    ((e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0),
      (e.isZoomingOrPanning = !0),
      (e.prevViewport = o),
      ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0),
      n && (n == null || n(r.sourceEvent, o)));
  };
}
function Kk({
  zoomPanValues: e,
  panOnDrag: t,
  onPaneContextMenu: n,
  onTransformChange: r,
  onPanZoom: o,
}) {
  return (i) => {
    var s, l;
    ((e.usedRightMouseButton = !!(n && a0(t, e.mouseButton ?? 0))),
      ((s = i.sourceEvent) != null && s.sync) ||
        r([i.transform.x, i.transform.y, i.transform.k]),
      o &&
        !((l = i.sourceEvent) != null && l.internal) &&
        (o == null || o(i.sourceEvent, Ol(i.transform))));
  };
}
function Qk({
  zoomPanValues: e,
  panOnDrag: t,
  panOnScroll: n,
  onDraggingChange: r,
  onPanZoomEnd: o,
  onPaneContextMenu: i,
}) {
  return (s) => {
    var l;
    if (
      !((l = s.sourceEvent) != null && l.internal) &&
      ((e.isZoomingOrPanning = !1),
      i &&
        a0(t, e.mouseButton ?? 0) &&
        !e.usedRightMouseButton &&
        s.sourceEvent &&
        i(s.sourceEvent),
      (e.usedRightMouseButton = !1),
      r(!1),
      o)
    ) {
      const a = Ol(s.transform);
      ((e.prevViewport = a),
        clearTimeout(e.timerId),
        (e.timerId = setTimeout(
          () => {
            o == null || o(s.sourceEvent, a);
          },
          n ? 150 : 0,
        )));
    }
  };
}
function Zk({
  zoomActivationKeyPressed: e,
  zoomOnScroll: t,
  zoomOnPinch: n,
  panOnDrag: r,
  panOnScroll: o,
  zoomOnDoubleClick: i,
  userSelectionActive: s,
  noWheelClassName: l,
  noPanClassName: a,
  lib: u,
  connectionInProgress: d,
}) {
  return (c) => {
    var S;
    const f = e || t,
      p = n && c.ctrlKey,
      y = c.type === "wheel";
    if (
      c.button === 1 &&
      c.type === "mousedown" &&
      ($r(c, `${u}-flow__node`) || $r(c, `${u}-flow__edge`))
    )
      return !0;
    if (
      (!r && !f && !o && !i && !n) ||
      s ||
      (d && !y) ||
      ($r(c, l) && y) ||
      ($r(c, a) && (!y || (o && y && !e))) ||
      (!n && c.ctrlKey && y)
    )
      return !1;
    if (
      !n &&
      c.type === "touchstart" &&
      ((S = c.touches) == null ? void 0 : S.length) > 1
    )
      return (c.preventDefault(), !1);
    if (
      (!f && !o && !p && y) ||
      (!r && (c.type === "mousedown" || c.type === "touchstart")) ||
      (Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
    )
      return !1;
    const x =
      (Array.isArray(r) && r.includes(c.button)) || !c.button || c.button <= 1;
    return (!c.ctrlKey || y) && x;
  };
}
function qk({
  domNode: e,
  minZoom: t,
  maxZoom: n,
  translateExtent: r,
  viewport: o,
  onPanZoom: i,
  onPanZoomStart: s,
  onPanZoomEnd: l,
  onDraggingChange: a,
}) {
  const u = {
      isZoomingOrPanning: !1,
      usedRightMouseButton: !1,
      prevViewport: {},
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: !1,
    },
    d = e.getBoundingClientRect(),
    c = Am().scaleExtent([t, n]).translateExtent(r),
    f = ut(e).call(c);
  v(
    { x: o.x, y: o.y, zoom: ro(o.zoom, t, n) },
    [
      [0, 0],
      [d.width, d.height],
    ],
    r,
  );
  const p = f.on("wheel.zoom"),
    y = f.on("dblclick.zoom");
  c.wheelDelta(u0);
  function x(P, L) {
    return f
      ? new Promise((F) => {
          c == null ||
            c
              .interpolate(
                (L == null ? void 0 : L.interpolate) === "linear" ? Bo : Ns,
              )
              .transform(
                Ta(
                  f,
                  L == null ? void 0 : L.duration,
                  L == null ? void 0 : L.ease,
                  () => F(!0),
                ),
                P,
              );
        })
      : Promise.resolve(!1);
  }
  function S({
    noWheelClassName: P,
    noPanClassName: L,
    onPaneContextMenu: F,
    userSelectionActive: E,
    panOnScroll: $,
    panOnDrag: T,
    panOnScrollMode: D,
    panOnScrollSpeed: C,
    preventScrolling: I,
    zoomOnPinch: A,
    zoomOnScroll: H,
    zoomOnDoubleClick: b,
    zoomActivationKeyPressed: K,
    lib: G,
    onTransformChange: te,
    connectionInProgress: ee,
    paneClickDistance: ne,
    selectionOnDrag: X,
  }) {
    E && !u.isZoomingOrPanning && g();
    const re = $ && !K && !E;
    c.clickDistance(X ? 1 / 0 : !zt(ne) || ne < 0 ? 0 : ne);
    const fe = re
      ? Yk({
          zoomPanValues: u,
          noWheelClassName: P,
          d3Selection: f,
          d3Zoom: c,
          panOnScrollMode: D,
          panOnScrollSpeed: C,
          zoomOnPinch: A,
          onPanZoomStart: s,
          onPanZoom: i,
          onPanZoomEnd: l,
        })
      : Xk({ noWheelClassName: P, preventScrolling: I, d3ZoomHandler: p });
    if ((f.on("wheel.zoom", fe, { passive: !1 }), !E)) {
      const ie = Gk({
        zoomPanValues: u,
        onDraggingChange: a,
        onPanZoomStart: s,
      });
      c.on("start", ie);
      const oe = Kk({
        zoomPanValues: u,
        panOnDrag: T,
        onPaneContextMenu: !!F,
        onPanZoom: i,
        onTransformChange: te,
      });
      c.on("zoom", oe);
      const pe = Qk({
        zoomPanValues: u,
        panOnDrag: T,
        panOnScroll: $,
        onPaneContextMenu: F,
        onPanZoomEnd: l,
        onDraggingChange: a,
      });
      c.on("end", pe);
    }
    const ae = Zk({
      zoomActivationKeyPressed: K,
      panOnDrag: T,
      zoomOnScroll: H,
      panOnScroll: $,
      zoomOnDoubleClick: b,
      zoomOnPinch: A,
      userSelectionActive: E,
      noPanClassName: L,
      noWheelClassName: P,
      lib: G,
      connectionInProgress: ee,
    });
    (c.filter(ae), b ? f.on("dblclick.zoom", y) : f.on("dblclick.zoom", null));
  }
  function g() {
    c.on("zoom", null);
  }
  async function v(P, L, F) {
    const E = ja(P),
      $ = c == null ? void 0 : c.constrain()(E, L, F);
    return ($ && (await x($)), new Promise((T) => T($)));
  }
  async function h(P, L) {
    const F = ja(P);
    return (await x(F, L), new Promise((E) => E(F)));
  }
  function w(P) {
    if (f) {
      const L = ja(P),
        F = f.property("__zoom");
      (F.k !== P.zoom || F.x !== P.x || F.y !== P.y) &&
        (c == null || c.transform(f, L, null, { sync: !0 }));
    }
  }
  function _() {
    const P = f ? Lm(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function N(P, L) {
    return f
      ? new Promise((F) => {
          c == null ||
            c
              .interpolate(
                (L == null ? void 0 : L.interpolate) === "linear" ? Bo : Ns,
              )
              .scaleTo(
                Ta(
                  f,
                  L == null ? void 0 : L.duration,
                  L == null ? void 0 : L.ease,
                  () => F(!0),
                ),
                P,
              );
        })
      : Promise.resolve(!1);
  }
  function M(P, L) {
    return f
      ? new Promise((F) => {
          c == null ||
            c
              .interpolate(
                (L == null ? void 0 : L.interpolate) === "linear" ? Bo : Ns,
              )
              .scaleBy(
                Ta(
                  f,
                  L == null ? void 0 : L.duration,
                  L == null ? void 0 : L.ease,
                  () => F(!0),
                ),
                P,
              );
        })
      : Promise.resolve(!1);
  }
  function k(P) {
    c == null || c.scaleExtent(P);
  }
  function j(P) {
    c == null || c.translateExtent(P);
  }
  function R(P) {
    const L = !zt(P) || P < 0 ? 0 : P;
    c == null || c.clickDistance(L);
  }
  return {
    update: S,
    destroy: g,
    setViewport: h,
    setViewportConstrained: v,
    getViewport: _,
    scaleTo: N,
    scaleBy: M,
    setScaleExtent: k,
    setTranslateExtent: j,
    syncViewport: w,
    setClickDistance: R,
  };
}
var so;
(function (e) {
  ((e.Line = "line"), (e.Handle = "handle"));
})(so || (so = {}));
function Jk({
  width: e,
  prevWidth: t,
  height: n,
  prevHeight: r,
  affectsX: o,
  affectsY: i,
}) {
  const s = e - t,
    l = n - r,
    a = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return (s && o && (a[0] = a[0] * -1), l && i && (a[1] = a[1] * -1), a);
}
function hp(e) {
  const t = e.includes("right") || e.includes("left"),
    n = e.includes("bottom") || e.includes("top"),
    r = e.includes("left"),
    o = e.includes("top");
  return { isHorizontal: t, isVertical: n, affectsX: r, affectsY: o };
}
function mn(e, t) {
  return Math.max(0, t - e);
}
function yn(e, t) {
  return Math.max(0, e - t);
}
function as(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function gp(e, t) {
  return e ? !t : t;
}
function eE(e, t, n, r, o, i, s, l) {
  let { affectsX: a, affectsY: u } = t;
  const { isHorizontal: d, isVertical: c } = t,
    f = d && c,
    { xSnapped: p, ySnapped: y } = n,
    { minWidth: x, maxWidth: S, minHeight: g, maxHeight: v } = r,
    { x: h, y: w, width: _, height: N, aspectRatio: M } = e;
  let k = Math.floor(d ? p - e.pointerX : 0),
    j = Math.floor(c ? y - e.pointerY : 0);
  const R = _ + (a ? -k : k),
    P = N + (u ? -j : j),
    L = -i[0] * _,
    F = -i[1] * N;
  let E = as(R, x, S),
    $ = as(P, g, v);
  if (s) {
    let C = 0,
      I = 0;
    (a && k < 0
      ? (C = mn(h + k + L, s[0][0]))
      : !a && k > 0 && (C = yn(h + R + L, s[1][0])),
      u && j < 0
        ? (I = mn(w + j + F, s[0][1]))
        : !u && j > 0 && (I = yn(w + P + F, s[1][1])),
      (E = Math.max(E, C)),
      ($ = Math.max($, I)));
  }
  if (l) {
    let C = 0,
      I = 0;
    (a && k > 0
      ? (C = yn(h + k, l[0][0]))
      : !a && k < 0 && (C = mn(h + R, l[1][0])),
      u && j > 0
        ? (I = yn(w + j, l[0][1]))
        : !u && j < 0 && (I = mn(w + P, l[1][1])),
      (E = Math.max(E, C)),
      ($ = Math.max($, I)));
  }
  if (o) {
    if (d) {
      const C = as(R / M, g, v) * M;
      if (((E = Math.max(E, C)), s)) {
        let I = 0;
        ((!a && !u) || (a && !u && f)
          ? (I = yn(w + F + R / M, s[1][1]) * M)
          : (I = mn(w + F + (a ? k : -k) / M, s[0][1]) * M),
          (E = Math.max(E, I)));
      }
      if (l) {
        let I = 0;
        ((!a && !u) || (a && !u && f)
          ? (I = mn(w + R / M, l[1][1]) * M)
          : (I = yn(w + (a ? k : -k) / M, l[0][1]) * M),
          (E = Math.max(E, I)));
      }
    }
    if (c) {
      const C = as(P * M, x, S) / M;
      if ((($ = Math.max($, C)), s)) {
        let I = 0;
        ((!a && !u) || (u && !a && f)
          ? (I = yn(h + P * M + L, s[1][0]) / M)
          : (I = mn(h + (u ? j : -j) * M + L, s[0][0]) / M),
          ($ = Math.max($, I)));
      }
      if (l) {
        let I = 0;
        ((!a && !u) || (u && !a && f)
          ? (I = mn(h + P * M, l[1][0]) / M)
          : (I = yn(h + (u ? j : -j) * M, l[0][0]) / M),
          ($ = Math.max($, I)));
      }
    }
  }
  ((j = j + (j < 0 ? $ : -$)),
    (k = k + (k < 0 ? E : -E)),
    o &&
      (f
        ? R > P * M
          ? (j = (gp(a, u) ? -k : k) / M)
          : (k = (gp(a, u) ? -j : j) * M)
        : d
          ? ((j = k / M), (u = a))
          : ((k = j * M), (a = u))));
  const T = a ? h + k : h,
    D = u ? w + j : w;
  return {
    width: _ + (a ? -k : k),
    height: N + (u ? -j : j),
    x: i[0] * k * (a ? -1 : 1) + T,
    y: i[1] * j * (u ? -1 : 1) + D,
  };
}
const c0 = { width: 0, height: 0, x: 0, y: 0 },
  tE = { ...c0, pointerX: 0, pointerY: 0, aspectRatio: 1 };
function nE(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height],
  ];
}
function rE(e, t, n) {
  const r = t.position.x + e.position.x,
    o = t.position.y + e.position.y,
    i = e.measured.width ?? 0,
    s = e.measured.height ?? 0,
    l = n[0] * i,
    a = n[1] * s;
  return [
    [r - l, o - a],
    [r + i - l, o + s - a],
  ];
}
function oE({
  domNode: e,
  nodeId: t,
  getStoreItems: n,
  onChange: r,
  onEnd: o,
}) {
  const i = ut(e);
  let s = {
    controlDirection: hp("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE,
    },
    resizeDirection: void 0,
    keepAspectRatio: !1,
  };
  function l({
    controlPosition: u,
    boundaries: d,
    keepAspectRatio: c,
    resizeDirection: f,
    onResizeStart: p,
    onResize: y,
    onResizeEnd: x,
    shouldResize: S,
  }) {
    let g = { ...c0 },
      v = { ...tE };
    s = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: c,
      controlDirection: hp(u),
    };
    let h,
      w = null,
      _ = [],
      N,
      M,
      k,
      j = !1;
    const R = wm()
      .on("start", (P) => {
        const {
          nodeLookup: L,
          transform: F,
          snapGrid: E,
          snapToGrid: $,
          nodeOrigin: T,
          paneDomNode: D,
        } = n();
        if (((h = L.get(t)), !h)) return;
        w = (D == null ? void 0 : D.getBoundingClientRect()) ?? null;
        const { xSnapped: C, ySnapped: I } = Uo(P.sourceEvent, {
          transform: F,
          snapGrid: E,
          snapToGrid: $,
          containerBounds: w,
        });
        ((g = {
          width: h.measured.width ?? 0,
          height: h.measured.height ?? 0,
          x: h.position.x ?? 0,
          y: h.position.y ?? 0,
        }),
          (v = {
            ...g,
            pointerX: C,
            pointerY: I,
            aspectRatio: g.width / g.height,
          }),
          (N = void 0),
          h.parentId &&
            (h.extent === "parent" || h.expandParent) &&
            ((N = L.get(h.parentId)),
            (M = N && h.extent === "parent" ? nE(N) : void 0)),
          (_ = []),
          (k = void 0));
        for (const [A, H] of L)
          if (
            H.parentId === t &&
            (_.push({ id: A, position: { ...H.position }, extent: H.extent }),
            H.extent === "parent" || H.expandParent)
          ) {
            const b = rE(H, h, H.origin ?? T);
            k
              ? (k = [
                  [Math.min(b[0][0], k[0][0]), Math.min(b[0][1], k[0][1])],
                  [Math.max(b[1][0], k[1][0]), Math.max(b[1][1], k[1][1])],
                ])
              : (k = b);
          }
        p == null || p(P, { ...g });
      })
      .on("drag", (P) => {
        const { transform: L, snapGrid: F, snapToGrid: E, nodeOrigin: $ } = n(),
          T = Uo(P.sourceEvent, {
            transform: L,
            snapGrid: F,
            snapToGrid: E,
            containerBounds: w,
          }),
          D = [];
        if (!h) return;
        const { x: C, y: I, width: A, height: H } = g,
          b = {},
          K = h.origin ?? $,
          {
            width: G,
            height: te,
            x: ee,
            y: ne,
          } = eE(
            v,
            s.controlDirection,
            T,
            s.boundaries,
            s.keepAspectRatio,
            K,
            M,
            k,
          ),
          X = G !== A,
          re = te !== H,
          fe = ee !== C && X,
          ae = ne !== I && re;
        if (!fe && !ae && !X && !re) return;
        if (
          (fe || ae || K[0] === 1 || K[1] === 1) &&
          ((b.x = fe ? ee : g.x),
          (b.y = ae ? ne : g.y),
          (g.x = b.x),
          (g.y = b.y),
          _.length > 0)
        ) {
          const ve = ee - C,
            he = ne - I;
          for (const Oe of _)
            ((Oe.position = {
              x: Oe.position.x - ve + K[0] * (G - A),
              y: Oe.position.y - he + K[1] * (te - H),
            }),
              D.push(Oe));
        }
        if (
          ((X || re) &&
            ((b.width =
              X && (!s.resizeDirection || s.resizeDirection === "horizontal")
                ? G
                : g.width),
            (b.height =
              re && (!s.resizeDirection || s.resizeDirection === "vertical")
                ? te
                : g.height),
            (g.width = b.width),
            (g.height = b.height)),
          N && h.expandParent)
        ) {
          const ve = K[0] * (b.width ?? 0);
          b.x && b.x < ve && ((g.x = ve), (v.x = v.x - (b.x - ve)));
          const he = K[1] * (b.height ?? 0);
          b.y && b.y < he && ((g.y = he), (v.y = v.y - (b.y - he)));
        }
        const ie = Jk({
            width: g.width,
            prevWidth: A,
            height: g.height,
            prevHeight: H,
            affectsX: s.controlDirection.affectsX,
            affectsY: s.controlDirection.affectsY,
          }),
          oe = { ...g, direction: ie };
        (S == null ? void 0 : S(P, oe)) !== !1 &&
          ((j = !0), y == null || y(P, oe), r(b, D));
      })
      .on("end", (P) => {
        j && (x == null || x(P, { ...g }), o == null || o({ ...g }), (j = !1));
      });
    i.call(R);
  }
  function a() {
    i.on(".drag", null);
  }
  return { update: l, destroy: a };
}
var f0 = { exports: {} },
  d0 = {},
  p0 = { exports: {} },
  h0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lo = z;
function iE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sE = typeof Object.is == "function" ? Object.is : iE,
  lE = lo.useState,
  aE = lo.useEffect,
  uE = lo.useLayoutEffect,
  cE = lo.useDebugValue;
function fE(e, t) {
  var n = t(),
    r = lE({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    uE(
      function () {
        ((o.value = n), (o.getSnapshot = t), $a(o) && i({ inst: o }));
      },
      [e, n, t],
    ),
    aE(
      function () {
        return (
          $a(o) && i({ inst: o }),
          e(function () {
            $a(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    cE(n),
    n
  );
}
function $a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sE(e, n);
  } catch {
    return !0;
  }
}
function dE(e, t) {
  return t();
}
var pE =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? dE
    : fE;
h0.useSyncExternalStore =
  lo.useSyncExternalStore !== void 0 ? lo.useSyncExternalStore : pE;
p0.exports = h0;
var hE = p0.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bl = z,
  gE = hE;
function mE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yE = typeof Object.is == "function" ? Object.is : mE,
  vE = gE.useSyncExternalStore,
  xE = bl.useRef,
  wE = bl.useEffect,
  SE = bl.useMemo,
  kE = bl.useDebugValue;
d0.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = xE(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = SE(
    function () {
      function a(p) {
        if (!u) {
          if (((u = !0), (d = p), (p = r(p)), o !== void 0 && s.hasValue)) {
            var y = s.value;
            if (o(y, p)) return (c = y);
          }
          return (c = p);
        }
        if (((y = c), yE(d, p))) return y;
        var x = r(p);
        return o !== void 0 && o(y, x) ? ((d = p), y) : ((d = p), (c = x));
      }
      var u = !1,
        d,
        c,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, o],
  );
  var l = vE(e, i[0], i[1]);
  return (
    wE(
      function () {
        ((s.hasValue = !0), (s.value = l));
      },
      [l],
    ),
    kE(l),
    l
  );
};
f0.exports = d0;
var EE = f0.exports;
const _E = Wp(EE),
  NE = {},
  mp = (e) => {
    let t;
    const n = new Set(),
      r = (d, c) => {
        const f = typeof d == "function" ? d(t) : d;
        if (!Object.is(f, t)) {
          const p = t;
          ((t =
            (c ?? (typeof f != "object" || f === null))
              ? f
              : Object.assign({}, t, f)),
            n.forEach((y) => y(t, p)));
        }
      },
      o = () => t,
      a = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: (d) => (n.add(d), () => n.delete(d)),
        destroy: () => {
          ((NE ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            n.clear());
        },
      },
      u = (t = e(r, o, a));
    return a;
  },
  CE = (e) => (e ? mp(e) : mp),
  { useDebugValue: ME } = nh,
  { useSyncExternalStoreWithSelector: IE } = _E,
  PE = (e) => e;
function g0(e, t = PE, n) {
  const r = IE(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n,
  );
  return (ME(r), r);
}
const yp = (e, t) => {
    const n = CE(e),
      r = (o, i = t) => g0(n, o, i);
    return (Object.assign(r, n), r);
  },
  zE = (e, t) => (e ? yp(e, t) : yp);
function Ne(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const Fl = z.createContext(null),
  jE = Fl.Provider,
  m0 = Gt.error001();
function ge(e, t) {
  const n = z.useContext(Fl);
  if (n === null) throw new Error(m0);
  return g0(n, e, t);
}
function Ce() {
  const e = z.useContext(Fl);
  if (e === null) throw new Error(m0);
  return z.useMemo(
    () => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
    }),
    [e],
  );
}
const vp = { display: "none" },
  TE = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)",
  },
  y0 = "react-flow__node-desc",
  v0 = "react-flow__edge-desc",
  $E = "react-flow__aria-live",
  LE = (e) => e.ariaLiveMessage,
  AE = (e) => e.ariaLabelConfig;
function DE({ rfId: e }) {
  const t = ge(LE);
  return m.jsx("div", {
    id: `${$E}-${e}`,
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: TE,
    children: t,
  });
}
function RE({ rfId: e, disableKeyboardA11y: t }) {
  const n = ge(AE);
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx("div", {
        id: `${y0}-${e}`,
        style: vp,
        children: t
          ? n["node.a11yDescription.default"]
          : n["node.a11yDescription.keyboardDisabled"],
      }),
      m.jsx("div", {
        id: `${v0}-${e}`,
        style: vp,
        children: n["edge.a11yDescription.default"],
      }),
      !t && m.jsx(DE, { rfId: e }),
    ],
  });
}
const Hl = z.forwardRef(
  (
    { position: e = "top-left", children: t, className: n, style: r, ...o },
    i,
  ) => {
    const s = `${e}`.split("-");
    return m.jsx("div", {
      className: Ae(["react-flow__panel", n, ...s]),
      style: r,
      ref: i,
      ...o,
      children: t,
    });
  },
);
Hl.displayName = "Panel";
function OE({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution
    ? null
    : m.jsx(Hl, {
        position: t,
        className: "react-flow__attribution",
        "data-message":
          "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
        children: m.jsx("a", {
          href: "https://reactflow.dev",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "React Flow attribution",
          children: "React Flow",
        }),
      });
}
const bE = (e) => {
    const t = [],
      n = [];
    for (const [, r] of e.nodeLookup)
      r.selected && t.push(r.internals.userNode);
    for (const [, r] of e.edgeLookup) r.selected && n.push(r);
    return { selectedNodes: t, selectedEdges: n };
  },
  us = (e) => e.id;
function FE(e, t) {
  return (
    Ne(e.selectedNodes.map(us), t.selectedNodes.map(us)) &&
    Ne(e.selectedEdges.map(us), t.selectedEdges.map(us))
  );
}
function HE({ onSelectionChange: e }) {
  const t = Ce(),
    { selectedNodes: n, selectedEdges: r } = ge(bE, FE);
  return (
    z.useEffect(() => {
      const o = { nodes: n, edges: r };
      (e == null || e(o),
        t.getState().onSelectionChangeHandlers.forEach((i) => i(o)));
    }, [n, r, e]),
    null
  );
}
const VE = (e) => !!e.onSelectionChangeHandlers;
function BE({ onSelectionChange: e }) {
  const t = ge(VE);
  return e || t ? m.jsx(HE, { onSelectionChange: e }) : null;
}
const Bu = typeof window < "u" ? z.useLayoutEffect : z.useEffect,
  x0 = [0, 0],
  UE = { x: 0, y: 0, zoom: 1 },
  WE = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode",
  ],
  xp = [...WE, "rfId"],
  YE = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  }),
  wp = {
    translateExtent: pi,
    nodeOrigin: x0,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: !0,
    noPanClassName: "nopan",
    rfId: "1",
  };
function XE(e) {
  const {
      setNodes: t,
      setEdges: n,
      setMinZoom: r,
      setMaxZoom: o,
      setTranslateExtent: i,
      setNodeExtent: s,
      reset: l,
      setDefaultNodesAndEdges: a,
    } = ge(YE, Ne),
    u = Ce();
  Bu(
    () => (
      a(e.defaultNodes, e.defaultEdges),
      () => {
        ((d.current = wp), l());
      }
    ),
    [],
  );
  const d = z.useRef(wp);
  return (
    Bu(
      () => {
        for (const c of xp) {
          const f = e[c],
            p = d.current[c];
          f !== p &&
            (typeof e[c] > "u" ||
              (c === "nodes"
                ? t(f)
                : c === "edges"
                  ? n(f)
                  : c === "minZoom"
                    ? r(f)
                    : c === "maxZoom"
                      ? o(f)
                      : c === "translateExtent"
                        ? i(f)
                        : c === "nodeExtent"
                          ? s(f)
                          : c === "ariaLabelConfig"
                            ? u.setState({ ariaLabelConfig: yk(f) })
                            : c === "fitView"
                              ? u.setState({ fitViewQueued: f })
                              : c === "fitViewOptions"
                                ? u.setState({ fitViewOptions: f })
                                : u.setState({ [c]: f })));
        }
        d.current = e;
      },
      xp.map((c) => e[c]),
    ),
    null
  );
}
function Sp() {
  return typeof window > "u" || !window.matchMedia
    ? null
    : window.matchMedia("(prefers-color-scheme: dark)");
}
function GE(e) {
  var r;
  const [t, n] = z.useState(e === "system" ? null : e);
  return (
    z.useEffect(() => {
      if (e !== "system") {
        n(e);
        return;
      }
      const o = Sp(),
        i = () => n(o != null && o.matches ? "dark" : "light");
      return (
        i(),
        o == null || o.addEventListener("change", i),
        () => {
          o == null || o.removeEventListener("change", i);
        }
      );
    }, [e]),
    t !== null ? t : (r = Sp()) != null && r.matches ? "dark" : "light"
  );
}
const kp = typeof document < "u" ? document : null;
function yi(e = null, t = { target: kp, actInsideInputWithModifier: !0 }) {
  const [n, r] = z.useState(!1),
    o = z.useRef(!1),
    i = z.useRef(new Set([])),
    [s, l] = z.useMemo(() => {
      if (e !== null) {
        const u = (Array.isArray(e) ? e : [e])
            .filter((c) => typeof c == "string")
            .map((c) =>
              c
                .replace(
                  "+",
                  `
`,
                )
                .replace(
                  `

`,
                  `
+`,
                ).split(`
`),
            ),
          d = u.reduce((c, f) => c.concat(...f), []);
        return [u, d];
      }
      return [[], []];
    }, [e]);
  return (
    z.useEffect(() => {
      const a = (t == null ? void 0 : t.target) ?? kp,
        u = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
      if (e !== null) {
        const d = (p) => {
            var S, g;
            if (
              ((o.current = p.ctrlKey || p.metaKey || p.shiftKey || p.altKey),
              (!o.current || (o.current && !u)) && Gm(p))
            )
              return !1;
            const x = _p(p.code, l);
            if ((i.current.add(p[x]), Ep(s, i.current, !1))) {
              const v =
                  ((g = (S = p.composedPath) == null ? void 0 : S.call(p)) ==
                  null
                    ? void 0
                    : g[0]) || p.target,
                h =
                  (v == null ? void 0 : v.nodeName) === "BUTTON" ||
                  (v == null ? void 0 : v.nodeName) === "A";
              (t.preventDefault !== !1 &&
                (o.current || !h) &&
                p.preventDefault(),
                r(!0));
            }
          },
          c = (p) => {
            const y = _p(p.code, l);
            (Ep(s, i.current, !0)
              ? (r(!1), i.current.clear())
              : i.current.delete(p[y]),
              p.key === "Meta" && i.current.clear(),
              (o.current = !1));
          },
          f = () => {
            (i.current.clear(), r(!1));
          };
        return (
          a == null || a.addEventListener("keydown", d),
          a == null || a.addEventListener("keyup", c),
          window.addEventListener("blur", f),
          window.addEventListener("contextmenu", f),
          () => {
            (a == null || a.removeEventListener("keydown", d),
              a == null || a.removeEventListener("keyup", c),
              window.removeEventListener("blur", f),
              window.removeEventListener("contextmenu", f));
          }
        );
      }
    }, [e, r]),
    n
  );
}
function Ep(e, t, n) {
  return e
    .filter((r) => n || r.length === t.size)
    .some((r) => r.every((o) => t.has(o)));
}
function _p(e, t) {
  return t.includes(e) ? "code" : "key";
}
const KE = () => {
  const e = Ce();
  return z.useMemo(
    () => ({
      zoomIn: (t) => {
        const { panZoom: n } = e.getState();
        return n ? n.scaleBy(1.2, t) : Promise.resolve(!1);
      },
      zoomOut: (t) => {
        const { panZoom: n } = e.getState();
        return n ? n.scaleBy(1 / 1.2, t) : Promise.resolve(!1);
      },
      zoomTo: (t, n) => {
        const { panZoom: r } = e.getState();
        return r ? r.scaleTo(t, n) : Promise.resolve(!1);
      },
      getZoom: () => e.getState().transform[2],
      setViewport: async (t, n) => {
        const {
          transform: [r, o, i],
          panZoom: s,
        } = e.getState();
        return s
          ? (await s.setViewport(
              { x: t.x ?? r, y: t.y ?? o, zoom: t.zoom ?? i },
              n,
            ),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      getViewport: () => {
        const [t, n, r] = e.getState().transform;
        return { x: t, y: n, zoom: r };
      },
      setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
      fitBounds: async (t, n) => {
        const {
            width: r,
            height: o,
            minZoom: i,
            maxZoom: s,
            panZoom: l,
          } = e.getState(),
          a = tf(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
        return l
          ? (await l.setViewport(a, {
              duration: n == null ? void 0 : n.duration,
              ease: n == null ? void 0 : n.ease,
              interpolate: n == null ? void 0 : n.interpolate,
            }),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      screenToFlowPosition: (t, n = {}) => {
        const {
          transform: r,
          snapGrid: o,
          snapToGrid: i,
          domNode: s,
        } = e.getState();
        if (!s) return t;
        const { x: l, y: a } = s.getBoundingClientRect(),
          u = { x: t.x - l, y: t.y - a },
          d = n.snapGrid ?? o,
          c = n.snapToGrid ?? i;
        return Ti(u, r, c, d);
      },
      flowToScreenPosition: (t) => {
        const { transform: n, domNode: r } = e.getState();
        if (!r) return t;
        const { x: o, y: i } = r.getBoundingClientRect(),
          s = ul(t, n);
        return { x: s.x + o, y: s.y + i };
      },
    }),
    [],
  );
};
function w0(e, t) {
  const n = [],
    r = new Map(),
    o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace") r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove") continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const l = { ...i };
    for (const a of s) QE(a, l);
    n.push(l);
  }
  return (
    o.length &&
      o.forEach((i) => {
        i.index !== void 0
          ? n.splice(i.index, 0, { ...i.item })
          : n.push({ ...i.item });
      }),
    n
  );
}
function QE(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      (typeof e.position < "u" && (t.position = e.position),
        typeof e.dragging < "u" && (t.dragging = e.dragging));
      break;
    }
    case "dimensions": {
      (typeof e.dimensions < "u" &&
        ((t.measured = { ...e.dimensions }),
        e.setAttributes &&
          ((e.setAttributes === !0 || e.setAttributes === "width") &&
            (t.width = e.dimensions.width),
          (e.setAttributes === !0 || e.setAttributes === "height") &&
            (t.height = e.dimensions.height))),
        typeof e.resizing == "boolean" && (t.resizing = e.resizing));
      break;
    }
  }
}
function S0(e, t) {
  return w0(e, t);
}
function k0(e, t) {
  return w0(e, t);
}
function Xn(e, t) {
  return { id: e, type: "select", selected: t };
}
function Lr(e, t = new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) &&
      i.selected !== s &&
      (n && (i.selected = s), r.push(Xn(i.id, s)));
  }
  return r;
}
function Np({ items: e = [], lookup: t }) {
  var o;
  const n = [],
    r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const l = t.get(s.id),
      a =
        ((o = l == null ? void 0 : l.internals) == null
          ? void 0
          : o.userNode) ?? l;
    (a !== void 0 && a !== s && n.push({ id: s.id, item: s, type: "replace" }),
      a === void 0 && n.push({ item: s, type: "add", index: i }));
  }
  for (const [i] of t) r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function Cp(e) {
  return { id: e.id, type: "remove" };
}
const Mp = (e) => lk(e),
  ZE = (e) => Fm(e);
function E0(e) {
  return z.forwardRef(e);
}
function Ip(e) {
  const [t, n] = z.useState(BigInt(0)),
    [r] = z.useState(() => qE(() => n((o) => o + BigInt(1))));
  return (
    Bu(() => {
      const o = r.get();
      o.length && (e(o), r.reset());
    }, [t]),
    r
  );
}
function qE(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      (t.push(n), e());
    },
  };
}
const _0 = z.createContext(null);
function JE({ children: e }) {
  const t = Ce(),
    n = z.useCallback((l) => {
      const {
        nodes: a = [],
        setNodes: u,
        hasDefaultNodes: d,
        onNodesChange: c,
        nodeLookup: f,
        fitViewQueued: p,
        onNodesChangeMiddlewareMap: y,
      } = t.getState();
      let x = a;
      for (const g of l) x = typeof g == "function" ? g(x) : g;
      let S = Np({ items: x, lookup: f });
      for (const g of y.values()) S = g(S);
      (d && u(x),
        S.length > 0
          ? c == null || c(S)
          : p &&
            window.requestAnimationFrame(() => {
              const { fitViewQueued: g, nodes: v, setNodes: h } = t.getState();
              g && h(v);
            }));
    }, []),
    r = Ip(n),
    o = z.useCallback((l) => {
      const {
        edges: a = [],
        setEdges: u,
        hasDefaultEdges: d,
        onEdgesChange: c,
        edgeLookup: f,
      } = t.getState();
      let p = a;
      for (const y of l) p = typeof y == "function" ? y(p) : y;
      d ? u(p) : c && c(Np({ items: p, lookup: f }));
    }, []),
    i = Ip(o),
    s = z.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return m.jsx(_0.Provider, { value: s, children: e });
}
function e_() {
  const e = z.useContext(_0);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const t_ = (e) => !!e.panZoom;
function Vl() {
  const e = KE(),
    t = Ce(),
    n = e_(),
    r = ge(t_),
    o = z.useMemo(() => {
      const i = (c) => t.getState().nodeLookup.get(c),
        s = (c) => {
          n.nodeQueue.push(c);
        },
        l = (c) => {
          n.edgeQueue.push(c);
        },
        a = (c) => {
          var g, v;
          const { nodeLookup: f, nodeOrigin: p } = t.getState(),
            y = Mp(c) ? c : f.get(c.id),
            x = y.parentId
              ? Ym(y.position, y.measured, y.parentId, f, p)
              : y.position,
            S = {
              ...y,
              position: x,
              width: ((g = y.measured) == null ? void 0 : g.width) ?? y.width,
              height:
                ((v = y.measured) == null ? void 0 : v.height) ?? y.height,
            };
          return oo(S);
        },
        u = (c, f, p = { replace: !1 }) => {
          s((y) =>
            y.map((x) => {
              if (x.id === c) {
                const S = typeof f == "function" ? f(x) : f;
                return p.replace && Mp(S) ? S : { ...x, ...S };
              }
              return x;
            }),
          );
        },
        d = (c, f, p = { replace: !1 }) => {
          l((y) =>
            y.map((x) => {
              if (x.id === c) {
                const S = typeof f == "function" ? f(x) : f;
                return p.replace && ZE(S) ? S : { ...x, ...S };
              }
              return x;
            }),
          );
        };
      return {
        getNodes: () => t.getState().nodes.map((c) => ({ ...c })),
        getNode: (c) => {
          var f;
          return (f = i(c)) == null ? void 0 : f.internals.userNode;
        },
        getInternalNode: i,
        getEdges: () => {
          const { edges: c = [] } = t.getState();
          return c.map((f) => ({ ...f }));
        },
        getEdge: (c) => t.getState().edgeLookup.get(c),
        setNodes: s,
        setEdges: l,
        addNodes: (c) => {
          const f = Array.isArray(c) ? c : [c];
          n.nodeQueue.push((p) => [...p, ...f]);
        },
        addEdges: (c) => {
          const f = Array.isArray(c) ? c : [c];
          n.edgeQueue.push((p) => [...p, ...f]);
        },
        toObject: () => {
          const { nodes: c = [], edges: f = [], transform: p } = t.getState(),
            [y, x, S] = p;
          return {
            nodes: c.map((g) => ({ ...g })),
            edges: f.map((g) => ({ ...g })),
            viewport: { x: y, y: x, zoom: S },
          };
        },
        deleteElements: async ({ nodes: c = [], edges: f = [] }) => {
          const {
              nodes: p,
              edges: y,
              onNodesDelete: x,
              onEdgesDelete: S,
              triggerNodeChanges: g,
              triggerEdgeChanges: v,
              onDelete: h,
              onBeforeDelete: w,
            } = t.getState(),
            { nodes: _, edges: N } = await dk({
              nodesToRemove: c,
              edgesToRemove: f,
              nodes: p,
              edges: y,
              onBeforeDelete: w,
            }),
            M = N.length > 0,
            k = _.length > 0;
          if (M) {
            const j = N.map(Cp);
            (S == null || S(N), v(j));
          }
          if (k) {
            const j = _.map(Cp);
            (x == null || x(_), g(j));
          }
          return (
            (k || M) && (h == null || h({ nodes: _, edges: N })),
            { deletedNodes: _, deletedEdges: N }
          );
        },
        getIntersectingNodes: (c, f = !0, p) => {
          const y = rp(c),
            x = y ? c : a(c),
            S = p !== void 0;
          return x
            ? (p || t.getState().nodes).filter((g) => {
                const v = t.getState().nodeLookup.get(g.id);
                if (v && !y && (g.id === c.id || !v.internals.positionAbsolute))
                  return !1;
                const h = oo(S ? g : v),
                  w = gi(h, x);
                return (
                  (f && w > 0) ||
                  w >= h.width * h.height ||
                  w >= x.width * x.height
                );
              })
            : [];
        },
        isNodeIntersecting: (c, f, p = !0) => {
          const x = rp(c) ? c : a(c);
          if (!x) return !1;
          const S = gi(x, f);
          return (
            (p && S > 0) || S >= f.width * f.height || S >= x.width * x.height
          );
        },
        updateNode: u,
        updateNodeData: (c, f, p = { replace: !1 }) => {
          u(
            c,
            (y) => {
              const x = typeof f == "function" ? f(y) : f;
              return p.replace
                ? { ...y, data: x }
                : { ...y, data: { ...y.data, ...x } };
            },
            p,
          );
        },
        updateEdge: d,
        updateEdgeData: (c, f, p = { replace: !1 }) => {
          d(
            c,
            (y) => {
              const x = typeof f == "function" ? f(y) : f;
              return p.replace
                ? { ...y, data: x }
                : { ...y, data: { ...y.data, ...x } };
            },
            p,
          );
        },
        getNodesBounds: (c) => {
          const { nodeLookup: f, nodeOrigin: p } = t.getState();
          return ak(c, { nodeLookup: f, nodeOrigin: p });
        },
        getHandleConnections: ({ type: c, id: f, nodeId: p }) => {
          var y;
          return Array.from(
            ((y = t
              .getState()
              .connectionLookup.get(`${p}-${c}${f ? `-${f}` : ""}`)) == null
              ? void 0
              : y.values()) ?? [],
          );
        },
        getNodeConnections: ({ type: c, handleId: f, nodeId: p }) => {
          var y;
          return Array.from(
            ((y = t
              .getState()
              .connectionLookup.get(
                `${p}${c ? (f ? `-${c}-${f}` : `-${c}`) : ""}`,
              )) == null
              ? void 0
              : y.values()) ?? [],
          );
        },
        fitView: async (c) => {
          const f = t.getState().fitViewResolver ?? mk();
          return (
            t.setState({
              fitViewQueued: !0,
              fitViewOptions: c,
              fitViewResolver: f,
            }),
            n.nodeQueue.push((p) => [...p]),
            f.promise
          );
        },
      };
    }, []);
  return z.useMemo(() => ({ ...o, ...e, viewportInitialized: r }), [r]);
}
const Pp = (e) => e.selected,
  n_ = typeof window < "u" ? window : void 0;
function r_({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = Ce(),
    { deleteElements: r } = Vl(),
    o = yi(e, { actInsideInputWithModifier: !1 }),
    i = yi(t, { target: n_ });
  (z.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      (r({ nodes: l.filter(Pp), edges: s.filter(Pp) }),
        n.setState({ nodesSelectionActive: !1 }));
    }
  }, [o]),
    z.useEffect(() => {
      n.setState({ multiSelectionActive: i });
    }, [i]));
}
function o_(e) {
  const t = Ce();
  z.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (
        !e.current ||
        !(
          ((i = (o = e.current).checkVisibility) == null
            ? void 0
            : i.call(o)) ?? !0
        )
      )
        return !1;
      const r = nf(e.current);
      ((r.height === 0 || r.width === 0) &&
        ((l = (s = t.getState()).onError) == null ||
          l.call(s, "004", Gt.error004())),
        t.setState({ width: r.width || 500, height: r.height || 500 }));
    };
    if (e.current) {
      (n(), window.addEventListener("resize", n));
      const r = new ResizeObserver(() => n());
      return (
        r.observe(e.current),
        () => {
          (window.removeEventListener("resize", n),
            r && e.current && r.unobserve(e.current));
        }
      );
    }
  }, []);
}
const Bl = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  i_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    lib: e.lib,
    connectionInProgress: e.connection.inProgress,
  });
function s_({
  onPaneContextMenu: e,
  zoomOnScroll: t = !0,
  zoomOnPinch: n = !0,
  panOnScroll: r = !1,
  panOnScrollSpeed: o = 0.5,
  panOnScrollMode: i = rr.Free,
  zoomOnDoubleClick: s = !0,
  panOnDrag: l = !0,
  defaultViewport: a,
  translateExtent: u,
  minZoom: d,
  maxZoom: c,
  zoomActivationKeyCode: f,
  preventScrolling: p = !0,
  children: y,
  noWheelClassName: x,
  noPanClassName: S,
  onViewportChange: g,
  isControlledViewport: v,
  paneClickDistance: h,
  selectionOnDrag: w,
}) {
  const _ = Ce(),
    N = z.useRef(null),
    { userSelectionActive: M, lib: k, connectionInProgress: j } = ge(i_, Ne),
    R = yi(f),
    P = z.useRef();
  o_(N);
  const L = z.useCallback(
    (F) => {
      (g == null || g({ x: F[0], y: F[1], zoom: F[2] }),
        v || _.setState({ transform: F }));
    },
    [g, v],
  );
  return (
    z.useEffect(() => {
      if (N.current) {
        P.current = qk({
          domNode: N.current,
          minZoom: d,
          maxZoom: c,
          translateExtent: u,
          viewport: a,
          onDraggingChange: (T) =>
            _.setState((D) => (D.paneDragging === T ? D : { paneDragging: T })),
          onPanZoomStart: (T, D) => {
            const { onViewportChangeStart: C, onMoveStart: I } = _.getState();
            (I == null || I(T, D), C == null || C(D));
          },
          onPanZoom: (T, D) => {
            const { onViewportChange: C, onMove: I } = _.getState();
            (I == null || I(T, D), C == null || C(D));
          },
          onPanZoomEnd: (T, D) => {
            const { onViewportChangeEnd: C, onMoveEnd: I } = _.getState();
            (I == null || I(T, D), C == null || C(D));
          },
        });
        const { x: F, y: E, zoom: $ } = P.current.getViewport();
        return (
          _.setState({
            panZoom: P.current,
            transform: [F, E, $],
            domNode: N.current.closest(".react-flow"),
          }),
          () => {
            var T;
            (T = P.current) == null || T.destroy();
          }
        );
      }
    }, []),
    z.useEffect(() => {
      var F;
      (F = P.current) == null ||
        F.update({
          onPaneContextMenu: e,
          zoomOnScroll: t,
          zoomOnPinch: n,
          panOnScroll: r,
          panOnScrollSpeed: o,
          panOnScrollMode: i,
          zoomOnDoubleClick: s,
          panOnDrag: l,
          zoomActivationKeyPressed: R,
          preventScrolling: p,
          noPanClassName: S,
          userSelectionActive: M,
          noWheelClassName: x,
          lib: k,
          onTransformChange: L,
          connectionInProgress: j,
          selectionOnDrag: w,
          paneClickDistance: h,
        });
    }, [e, t, n, r, o, i, s, l, R, p, S, M, x, k, L, j, w, h]),
    m.jsx("div", {
      className: "react-flow__renderer",
      ref: N,
      style: Bl,
      children: y,
    })
  );
}
const l_ = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function a_() {
  const { userSelectionActive: e, userSelectionRect: t } = ge(l_, Ne);
  return e && t
    ? m.jsx("div", {
        className: "react-flow__selection react-flow__container",
        style: {
          width: t.width,
          height: t.height,
          transform: `translate(${t.x}px, ${t.y}px)`,
        },
      })
    : null;
}
const La = (e, t) => (n) => {
    n.target === t.current && (e == null || e(n));
  },
  u_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    connectionInProgress: e.connection.inProgress,
    dragging: e.paneDragging,
  });
function c_({
  isSelecting: e,
  selectionKeyPressed: t,
  selectionMode: n = hi.Full,
  panOnDrag: r,
  paneClickDistance: o,
  selectionOnDrag: i,
  onSelectionStart: s,
  onSelectionEnd: l,
  onPaneClick: a,
  onPaneContextMenu: u,
  onPaneScroll: d,
  onPaneMouseEnter: c,
  onPaneMouseMove: f,
  onPaneMouseLeave: p,
  children: y,
}) {
  const x = Ce(),
    {
      userSelectionActive: S,
      elementsSelectable: g,
      dragging: v,
      connectionInProgress: h,
    } = ge(u_, Ne),
    w = g && (e || S),
    _ = z.useRef(null),
    N = z.useRef(),
    M = z.useRef(new Set()),
    k = z.useRef(new Set()),
    j = z.useRef(!1),
    R = (C) => {
      if (j.current || h) {
        j.current = !1;
        return;
      }
      (a == null || a(C),
        x.getState().resetSelectedElements(),
        x.setState({ nodesSelectionActive: !1 }));
    },
    P = (C) => {
      if (Array.isArray(r) && r != null && r.includes(2)) {
        C.preventDefault();
        return;
      }
      u == null || u(C);
    },
    L = d ? (C) => d(C) : void 0,
    F = (C) => {
      j.current && (C.stopPropagation(), (j.current = !1));
    },
    E = (C) => {
      var te, ee;
      const { domNode: I } = x.getState();
      if (
        ((N.current = I == null ? void 0 : I.getBoundingClientRect()),
        !N.current)
      )
        return;
      const A = C.target === _.current;
      if (
        (!A && !!C.target.closest(".nokey")) ||
        !e ||
        !((i && A) || t) ||
        C.button !== 0 ||
        !C.isPrimary
      )
        return;
      ((ee = (te = C.target) == null ? void 0 : te.setPointerCapture) == null ||
        ee.call(te, C.pointerId),
        (j.current = !1));
      const { x: K, y: G } = jt(C.nativeEvent, N.current);
      (x.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: K,
          startY: G,
          x: K,
          y: G,
        },
      }),
        A || (C.stopPropagation(), C.preventDefault()));
    },
    $ = (C) => {
      const {
        userSelectionRect: I,
        transform: A,
        nodeLookup: H,
        edgeLookup: b,
        connectionLookup: K,
        triggerNodeChanges: G,
        triggerEdgeChanges: te,
        defaultEdgeOptions: ee,
        resetSelectedElements: ne,
      } = x.getState();
      if (!N.current || !I) return;
      const { x: X, y: re } = jt(C.nativeEvent, N.current),
        { startX: fe, startY: ae } = I;
      if (!j.current) {
        const he = t ? 0 : o;
        if (Math.hypot(X - fe, re - ae) <= he) return;
        (ne(), s == null || s(C));
      }
      j.current = !0;
      const ie = {
          startX: fe,
          startY: ae,
          x: X < fe ? X : fe,
          y: re < ae ? re : ae,
          width: Math.abs(X - fe),
          height: Math.abs(re - ae),
        },
        oe = M.current,
        pe = k.current;
      ((M.current = new Set(
        ef(H, ie, A, n === hi.Partial, !0).map((he) => he.id),
      )),
        (k.current = new Set()));
      const ve = (ee == null ? void 0 : ee.selectable) ?? !0;
      for (const he of M.current) {
        const Oe = K.get(he);
        if (Oe)
          for (const { edgeId: Ot } of Oe.values()) {
            const Et = b.get(Ot);
            Et && (Et.selectable ?? ve) && k.current.add(Ot);
          }
      }
      if (!op(oe, M.current)) {
        const he = Lr(H, M.current, !0);
        G(he);
      }
      if (!op(pe, k.current)) {
        const he = Lr(b, k.current);
        te(he);
      }
      x.setState({
        userSelectionRect: ie,
        userSelectionActive: !0,
        nodesSelectionActive: !1,
      });
    },
    T = (C) => {
      var I, A;
      C.button === 0 &&
        ((A = (I = C.target) == null ? void 0 : I.releasePointerCapture) ==
          null || A.call(I, C.pointerId),
        !S &&
          C.target === _.current &&
          x.getState().userSelectionRect &&
          (R == null || R(C)),
        x.setState({ userSelectionActive: !1, userSelectionRect: null }),
        j.current &&
          (l == null || l(C),
          x.setState({ nodesSelectionActive: M.current.size > 0 })));
    },
    D = r === !0 || (Array.isArray(r) && r.includes(0));
  return m.jsxs("div", {
    className: Ae([
      "react-flow__pane",
      { draggable: D, dragging: v, selection: e },
    ]),
    onClick: w ? void 0 : La(R, _),
    onContextMenu: La(P, _),
    onWheel: La(L, _),
    onPointerEnter: w ? void 0 : c,
    onPointerMove: w ? $ : f,
    onPointerUp: w ? T : void 0,
    onPointerDownCapture: w ? E : void 0,
    onClickCapture: w ? F : void 0,
    onPointerLeave: p,
    ref: _,
    style: Bl,
    children: [y, m.jsx(a_, {})],
  });
}
function Uu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const {
      addSelectedNodes: o,
      unselectNodesAndEdges: i,
      multiSelectionActive: s,
      nodeLookup: l,
      onError: a,
    } = t.getState(),
    u = l.get(e);
  if (!u) {
    a == null || a("012", Gt.error012(e));
    return;
  }
  (t.setState({ nodesSelectionActive: !1 }),
    u.selected
      ? (n || (u.selected && s)) &&
        (i({ nodes: [u], edges: [] }),
        requestAnimationFrame(() => {
          var d;
          return (d = r == null ? void 0 : r.current) == null
            ? void 0
            : d.blur();
        }))
      : o([e]));
}
function N0({
  nodeRef: e,
  disabled: t = !1,
  noDragClassName: n,
  handleSelector: r,
  nodeId: o,
  isSelectable: i,
  nodeClickDistance: s,
}) {
  const l = Ce(),
    [a, u] = z.useState(!1),
    d = z.useRef();
  return (
    z.useEffect(() => {
      d.current = Ok({
        getStoreItems: () => l.getState(),
        onNodeMouseDown: (c) => {
          Uu({ id: c, store: l, nodeRef: e });
        },
        onDragStart: () => {
          u(!0);
        },
        onDragStop: () => {
          u(!1);
        },
      });
    }, []),
    z.useEffect(() => {
      if (!(t || !e.current || !d.current))
        return (
          d.current.update({
            noDragClassName: n,
            handleSelector: r,
            domNode: e.current,
            isSelectable: i,
            nodeId: o,
            nodeClickDistance: s,
          }),
          () => {
            var c;
            (c = d.current) == null || c.destroy();
          }
        );
    }, [n, r, t, i, e, o, s]),
    a
  );
}
const f_ = (e) => (t) =>
  t.selected && (t.draggable || (e && typeof t.draggable > "u"));
function C0() {
  const e = Ce();
  return z.useCallback((n) => {
    const {
        nodeExtent: r,
        snapToGrid: o,
        snapGrid: i,
        nodesDraggable: s,
        onError: l,
        updateNodePositions: a,
        nodeLookup: u,
        nodeOrigin: d,
      } = e.getState(),
      c = new Map(),
      f = f_(s),
      p = o ? i[0] : 5,
      y = o ? i[1] : 5,
      x = n.direction.x * p * n.factor,
      S = n.direction.y * y * n.factor;
    for (const [, g] of u) {
      if (!f(g)) continue;
      let v = {
        x: g.internals.positionAbsolute.x + x,
        y: g.internals.positionAbsolute.y + S,
      };
      o && (v = ji(v, i));
      const { position: h, positionAbsolute: w } = Hm({
        nodeId: g.id,
        nextPosition: v,
        nodeLookup: u,
        nodeExtent: r,
        nodeOrigin: d,
        onError: l,
      });
      ((g.position = h), (g.internals.positionAbsolute = w), c.set(g.id, g));
    }
    a(c);
  }, []);
}
const uf = z.createContext(null),
  d_ = uf.Provider;
uf.Consumer;
const M0 = () => z.useContext(uf),
  p_ = (e) => ({
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName,
    rfId: e.rfId,
  }),
  h_ = (e, t, n) => (r) => {
    const {
        connectionClickStartHandle: o,
        connectionMode: i,
        connection: s,
      } = r,
      { fromHandle: l, toHandle: a, isValid: u } = s,
      d =
        (a == null ? void 0 : a.nodeId) === e &&
        (a == null ? void 0 : a.id) === t &&
        (a == null ? void 0 : a.type) === n;
    return {
      connectingFrom:
        (l == null ? void 0 : l.nodeId) === e &&
        (l == null ? void 0 : l.id) === t &&
        (l == null ? void 0 : l.type) === n,
      connectingTo: d,
      clickConnecting:
        (o == null ? void 0 : o.nodeId) === e &&
        (o == null ? void 0 : o.id) === t &&
        (o == null ? void 0 : o.type) === n,
      isPossibleEndHandle:
        i === no.Strict
          ? (l == null ? void 0 : l.type) !== n
          : e !== (l == null ? void 0 : l.nodeId) ||
            t !== (l == null ? void 0 : l.id),
      connectionInProcess: !!l,
      clickConnectionInProcess: !!o,
      valid: d && u,
    };
  };
function g_(
  {
    type: e = "source",
    position: t = q.Top,
    isValidConnection: n,
    isConnectable: r = !0,
    isConnectableStart: o = !0,
    isConnectableEnd: i = !0,
    id: s,
    onConnect: l,
    children: a,
    className: u,
    onMouseDown: d,
    onTouchStart: c,
    ...f
  },
  p,
) {
  var $, T;
  const y = s || null,
    x = e === "target",
    S = Ce(),
    g = M0(),
    { connectOnClick: v, noPanClassName: h, rfId: w } = ge(p_, Ne),
    {
      connectingFrom: _,
      connectingTo: N,
      clickConnecting: M,
      isPossibleEndHandle: k,
      connectionInProcess: j,
      clickConnectionInProcess: R,
      valid: P,
    } = ge(h_(g, y, e), Ne);
  g ||
    (T = ($ = S.getState()).onError) == null ||
    T.call($, "010", Gt.error010());
  const L = (D) => {
      const {
          defaultEdgeOptions: C,
          onConnect: I,
          hasDefaultEdges: A,
        } = S.getState(),
        H = { ...C, ...D };
      if (A) {
        const { edges: b, setEdges: K } = S.getState();
        K(Ou(H, b));
      }
      (I == null || I(H), l == null || l(H));
    },
    F = (D) => {
      if (!g) return;
      const C = Km(D.nativeEvent);
      if (o && ((C && D.button === 0) || !C)) {
        const I = S.getState();
        Vu.onPointerDown(D.nativeEvent, {
          handleDomNode: D.currentTarget,
          autoPanOnConnect: I.autoPanOnConnect,
          connectionMode: I.connectionMode,
          connectionRadius: I.connectionRadius,
          domNode: I.domNode,
          nodeLookup: I.nodeLookup,
          lib: I.lib,
          isTarget: x,
          handleId: y,
          nodeId: g,
          flowId: I.rfId,
          panBy: I.panBy,
          cancelConnection: I.cancelConnection,
          onConnectStart: I.onConnectStart,
          onConnectEnd: (...A) => {
            var H, b;
            return (b = (H = S.getState()).onConnectEnd) == null
              ? void 0
              : b.call(H, ...A);
          },
          updateConnection: I.updateConnection,
          onConnect: L,
          isValidConnection:
            n ||
            ((...A) => {
              var H, b;
              return (
                ((b = (H = S.getState()).isValidConnection) == null
                  ? void 0
                  : b.call(H, ...A)) ?? !0
              );
            }),
          getTransform: () => S.getState().transform,
          getFromHandle: () => S.getState().connection.fromHandle,
          autoPanSpeed: I.autoPanSpeed,
          dragThreshold: I.connectionDragThreshold,
        });
      }
      C ? d == null || d(D) : c == null || c(D);
    },
    E = (D) => {
      const {
        onClickConnectStart: C,
        onClickConnectEnd: I,
        connectionClickStartHandle: A,
        connectionMode: H,
        isValidConnection: b,
        lib: K,
        rfId: G,
        nodeLookup: te,
        connection: ee,
      } = S.getState();
      if (!g || (!A && !o)) return;
      if (!A) {
        (C == null ||
          C(D.nativeEvent, { nodeId: g, handleId: y, handleType: e }),
          S.setState({
            connectionClickStartHandle: { nodeId: g, type: e, id: y },
          }));
        return;
      }
      const ne = Xm(D.target),
        X = n || b,
        { connection: re, isValid: fe } = Vu.isValid(D.nativeEvent, {
          handle: { nodeId: g, id: y, type: e },
          connectionMode: H,
          fromNodeId: A.nodeId,
          fromHandleId: A.id || null,
          fromType: A.type,
          isValidConnection: X,
          flowId: G,
          doc: ne,
          lib: K,
          nodeLookup: te,
        });
      fe && re && L(re);
      const ae = structuredClone(ee);
      (delete ae.inProgress,
        (ae.toPosition = ae.toHandle ? ae.toHandle.position : null),
        I == null || I(D, ae),
        S.setState({ connectionClickStartHandle: null }));
    };
  return m.jsx("div", {
    "data-handleid": y,
    "data-nodeid": g,
    "data-handlepos": t,
    "data-id": `${w}-${g}-${y}-${e}`,
    className: Ae([
      "react-flow__handle",
      `react-flow__handle-${t}`,
      "nodrag",
      h,
      u,
      {
        source: !x,
        target: x,
        connectable: r,
        connectablestart: o,
        connectableend: i,
        clickconnecting: M,
        connectingfrom: _,
        connectingto: N,
        valid: P,
        connectionindicator: r && (!j || k) && (j || R ? i : o),
      },
    ]),
    onMouseDown: F,
    onTouchStart: F,
    onClick: v ? E : void 0,
    ref: p,
    ...f,
    children: a,
  });
}
const lt = z.memo(E0(g_));
function m_({ data: e, isConnectable: t, sourcePosition: n = q.Bottom }) {
  return m.jsxs(m.Fragment, {
    children: [
      e == null ? void 0 : e.label,
      m.jsx(lt, { type: "source", position: n, isConnectable: t }),
    ],
  });
}
function y_({
  data: e,
  isConnectable: t,
  targetPosition: n = q.Top,
  sourcePosition: r = q.Bottom,
}) {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(lt, { type: "target", position: n, isConnectable: t }),
      e == null ? void 0 : e.label,
      m.jsx(lt, { type: "source", position: r, isConnectable: t }),
    ],
  });
}
function v_() {
  return null;
}
function x_({ data: e, isConnectable: t, targetPosition: n = q.Top }) {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(lt, { type: "target", position: n, isConnectable: t }),
      e == null ? void 0 : e.label,
    ],
  });
}
const cl = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  },
  zp = { input: m_, default: y_, output: x_, group: v_ };
function w_(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0
    ? {
        width:
          e.width ??
          e.initialWidth ??
          ((t = e.style) == null ? void 0 : t.width),
        height:
          e.height ??
          e.initialHeight ??
          ((n = e.style) == null ? void 0 : n.height),
      }
    : {
        width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
        height: e.height ?? ((o = e.style) == null ? void 0 : o.height),
      };
}
const S_ = (e) => {
  const {
    width: t,
    height: n,
    x: r,
    y: o,
  } = zi(e.nodeLookup, { filter: (i) => !!i.selected });
  return {
    width: zt(t) ? t : null,
    height: zt(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`,
  };
};
function k_({
  onSelectionContextMenu: e,
  noPanClassName: t,
  disableKeyboardA11y: n,
}) {
  const r = Ce(),
    {
      width: o,
      height: i,
      transformString: s,
      userSelectionActive: l,
    } = ge(S_, Ne),
    a = C0(),
    u = z.useRef(null);
  z.useEffect(() => {
    var p;
    n || (p = u.current) == null || p.focus({ preventScroll: !0 });
  }, [n]);
  const d = !l && o !== null && i !== null;
  if ((N0({ nodeRef: u, disabled: !d }), !d)) return null;
  const c = e
      ? (p) => {
          const y = r.getState().nodes.filter((x) => x.selected);
          e(p, y);
        }
      : void 0,
    f = (p) => {
      Object.prototype.hasOwnProperty.call(cl, p.key) &&
        (p.preventDefault(),
        a({ direction: cl[p.key], factor: p.shiftKey ? 4 : 1 }));
    };
  return m.jsx("div", {
    className: Ae(["react-flow__nodesselection", "react-flow__container", t]),
    style: { transform: s },
    children: m.jsx("div", {
      ref: u,
      className: "react-flow__nodesselection-rect",
      onContextMenu: c,
      tabIndex: n ? void 0 : -1,
      onKeyDown: n ? void 0 : f,
      style: { width: o, height: i },
    }),
  });
}
const jp = typeof window < "u" ? window : void 0,
  E_ = (e) => ({
    nodesSelectionActive: e.nodesSelectionActive,
    userSelectionActive: e.userSelectionActive,
  });
function I0({
  children: e,
  onPaneClick: t,
  onPaneMouseEnter: n,
  onPaneMouseMove: r,
  onPaneMouseLeave: o,
  onPaneContextMenu: i,
  onPaneScroll: s,
  paneClickDistance: l,
  deleteKeyCode: a,
  selectionKeyCode: u,
  selectionOnDrag: d,
  selectionMode: c,
  onSelectionStart: f,
  onSelectionEnd: p,
  multiSelectionKeyCode: y,
  panActivationKeyCode: x,
  zoomActivationKeyCode: S,
  elementsSelectable: g,
  zoomOnScroll: v,
  zoomOnPinch: h,
  panOnScroll: w,
  panOnScrollSpeed: _,
  panOnScrollMode: N,
  zoomOnDoubleClick: M,
  panOnDrag: k,
  defaultViewport: j,
  translateExtent: R,
  minZoom: P,
  maxZoom: L,
  preventScrolling: F,
  onSelectionContextMenu: E,
  noWheelClassName: $,
  noPanClassName: T,
  disableKeyboardA11y: D,
  onViewportChange: C,
  isControlledViewport: I,
}) {
  const { nodesSelectionActive: A, userSelectionActive: H } = ge(E_, Ne),
    b = yi(u, { target: jp }),
    K = yi(x, { target: jp }),
    G = K || k,
    te = K || w,
    ee = d && G !== !0,
    ne = b || H || ee;
  return (
    r_({ deleteKeyCode: a, multiSelectionKeyCode: y }),
    m.jsx(s_, {
      onPaneContextMenu: i,
      elementsSelectable: g,
      zoomOnScroll: v,
      zoomOnPinch: h,
      panOnScroll: te,
      panOnScrollSpeed: _,
      panOnScrollMode: N,
      zoomOnDoubleClick: M,
      panOnDrag: !b && G,
      defaultViewport: j,
      translateExtent: R,
      minZoom: P,
      maxZoom: L,
      zoomActivationKeyCode: S,
      preventScrolling: F,
      noWheelClassName: $,
      noPanClassName: T,
      onViewportChange: C,
      isControlledViewport: I,
      paneClickDistance: l,
      selectionOnDrag: ee,
      children: m.jsxs(c_, {
        onSelectionStart: f,
        onSelectionEnd: p,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: o,
        onPaneContextMenu: i,
        onPaneScroll: s,
        panOnDrag: G,
        isSelecting: !!ne,
        selectionMode: c,
        selectionKeyPressed: b,
        paneClickDistance: l,
        selectionOnDrag: ee,
        children: [
          e,
          A &&
            m.jsx(k_, {
              onSelectionContextMenu: E,
              noPanClassName: T,
              disableKeyboardA11y: D,
            }),
        ],
      }),
    })
  );
}
I0.displayName = "FlowRenderer";
const __ = z.memo(I0),
  N_ = (e) => (t) =>
    e
      ? ef(
          t.nodeLookup,
          { x: 0, y: 0, width: t.width, height: t.height },
          t.transform,
          !0,
        ).map((n) => n.id)
      : Array.from(t.nodeLookup.keys());
function C_(e) {
  return ge(z.useCallback(N_(e), [e]), Ne);
}
const M_ = (e) => e.updateNodeInternals;
function I_() {
  const e = ge(M_),
    [t] = z.useState(() =>
      typeof ResizeObserver > "u"
        ? null
        : new ResizeObserver((n) => {
            const r = new Map();
            (n.forEach((o) => {
              const i = o.target.getAttribute("data-id");
              r.set(i, { id: i, nodeElement: o.target, force: !0 });
            }),
              e(r));
          }),
    );
  return (
    z.useEffect(
      () => () => {
        t == null || t.disconnect();
      },
      [t],
    ),
    t
  );
}
function P_({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = Ce(),
    i = z.useRef(null),
    s = z.useRef(null),
    l = z.useRef(e.sourcePosition),
    a = z.useRef(e.targetPosition),
    u = z.useRef(t),
    d = n && !!e.internals.handleBounds;
  return (
    z.useEffect(() => {
      i.current &&
        !e.hidden &&
        (!d || s.current !== i.current) &&
        (s.current && (r == null || r.unobserve(s.current)),
        r == null || r.observe(i.current),
        (s.current = i.current));
    }, [d, e.hidden]),
    z.useEffect(
      () => () => {
        s.current && (r == null || r.unobserve(s.current), (s.current = null));
      },
      [],
    ),
    z.useEffect(() => {
      if (i.current) {
        const c = u.current !== t,
          f = l.current !== e.sourcePosition,
          p = a.current !== e.targetPosition;
        (c || f || p) &&
          ((u.current = t),
          (l.current = e.sourcePosition),
          (a.current = e.targetPosition),
          o
            .getState()
            .updateNodeInternals(
              new Map([
                [e.id, { id: e.id, nodeElement: i.current, force: !0 }],
              ]),
            ));
      }
    }, [e.id, t, e.sourcePosition, e.targetPosition]),
    i
  );
}
function z_({
  id: e,
  onClick: t,
  onMouseEnter: n,
  onMouseMove: r,
  onMouseLeave: o,
  onContextMenu: i,
  onDoubleClick: s,
  nodesDraggable: l,
  elementsSelectable: a,
  nodesConnectable: u,
  nodesFocusable: d,
  resizeObserver: c,
  noDragClassName: f,
  noPanClassName: p,
  disableKeyboardA11y: y,
  rfId: x,
  nodeTypes: S,
  nodeClickDistance: g,
  onError: v,
}) {
  const {
    node: h,
    internals: w,
    isParent: _,
  } = ge((X) => {
    const re = X.nodeLookup.get(e),
      fe = X.parentLookup.has(e);
    return { node: re, internals: re.internals, isParent: fe };
  }, Ne);
  let N = h.type || "default",
    M = (S == null ? void 0 : S[N]) || zp[N];
  M === void 0 &&
    (v == null || v("003", Gt.error003(N)),
    (N = "default"),
    (M = (S == null ? void 0 : S.default) || zp.default));
  const k = !!(h.draggable || (l && typeof h.draggable > "u")),
    j = !!(h.selectable || (a && typeof h.selectable > "u")),
    R = !!(h.connectable || (u && typeof h.connectable > "u")),
    P = !!(h.focusable || (d && typeof h.focusable > "u")),
    L = Ce(),
    F = Wm(h),
    E = P_({ node: h, nodeType: N, hasDimensions: F, resizeObserver: c }),
    $ = N0({
      nodeRef: E,
      disabled: h.hidden || !k,
      noDragClassName: f,
      handleSelector: h.dragHandle,
      nodeId: e,
      isSelectable: j,
      nodeClickDistance: g,
    }),
    T = C0();
  if (h.hidden) return null;
  const D = hn(h),
    C = w_(h),
    I = j || k || t || n || r || o,
    A = n ? (X) => n(X, { ...w.userNode }) : void 0,
    H = r ? (X) => r(X, { ...w.userNode }) : void 0,
    b = o ? (X) => o(X, { ...w.userNode }) : void 0,
    K = i ? (X) => i(X, { ...w.userNode }) : void 0,
    G = s ? (X) => s(X, { ...w.userNode }) : void 0,
    te = (X) => {
      const { selectNodesOnDrag: re, nodeDragThreshold: fe } = L.getState();
      (j && (!re || !k || fe > 0) && Uu({ id: e, store: L, nodeRef: E }),
        t && t(X, { ...w.userNode }));
    },
    ee = (X) => {
      if (!(Gm(X.nativeEvent) || y)) {
        if (Dm.includes(X.key) && j) {
          const re = X.key === "Escape";
          Uu({ id: e, store: L, unselect: re, nodeRef: E });
        } else if (
          k &&
          h.selected &&
          Object.prototype.hasOwnProperty.call(cl, X.key)
        ) {
          X.preventDefault();
          const { ariaLabelConfig: re } = L.getState();
          (L.setState({
            ariaLiveMessage: re["node.a11yDescription.ariaLiveMessage"]({
              direction: X.key.replace("Arrow", "").toLowerCase(),
              x: ~~w.positionAbsolute.x,
              y: ~~w.positionAbsolute.y,
            }),
          }),
            T({ direction: cl[X.key], factor: X.shiftKey ? 4 : 1 }));
        }
      }
    },
    ne = () => {
      var pe;
      if (y || !((pe = E.current) != null && pe.matches(":focus-visible")))
        return;
      const {
        transform: X,
        width: re,
        height: fe,
        autoPanOnNodeFocus: ae,
        setCenter: ie,
      } = L.getState();
      if (!ae) return;
      ef(new Map([[e, h]]), { x: 0, y: 0, width: re, height: fe }, X, !0)
        .length > 0 ||
        ie(h.position.x + D.width / 2, h.position.y + D.height / 2, {
          zoom: X[2],
        });
    };
  return m.jsx("div", {
    className: Ae([
      "react-flow__node",
      `react-flow__node-${N}`,
      { [p]: k },
      h.className,
      {
        selected: h.selected,
        selectable: j,
        parent: _,
        draggable: k,
        dragging: $,
      },
    ]),
    ref: E,
    style: {
      zIndex: w.z,
      transform: `translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,
      pointerEvents: I ? "all" : "none",
      visibility: F ? "visible" : "hidden",
      ...h.style,
      ...C,
    },
    "data-id": e,
    "data-testid": `rf__node-${e}`,
    onMouseEnter: A,
    onMouseMove: H,
    onMouseLeave: b,
    onContextMenu: K,
    onClick: te,
    onDoubleClick: G,
    onKeyDown: P ? ee : void 0,
    tabIndex: P ? 0 : void 0,
    onFocus: P ? ne : void 0,
    role: h.ariaRole ?? (P ? "group" : void 0),
    "aria-roledescription": "node",
    "aria-describedby": y ? void 0 : `${y0}-${x}`,
    "aria-label": h.ariaLabel,
    ...h.domAttributes,
    children: m.jsx(d_, {
      value: e,
      children: m.jsx(M, {
        id: e,
        data: h.data,
        type: N,
        positionAbsoluteX: w.positionAbsolute.x,
        positionAbsoluteY: w.positionAbsolute.y,
        selected: h.selected ?? !1,
        selectable: j,
        draggable: k,
        deletable: h.deletable ?? !0,
        isConnectable: R,
        sourcePosition: h.sourcePosition,
        targetPosition: h.targetPosition,
        dragging: $,
        dragHandle: h.dragHandle,
        zIndex: w.z,
        parentId: h.parentId,
        ...D,
      }),
    }),
  });
}
var j_ = z.memo(z_);
const T_ = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError,
});
function P0(e) {
  const {
      nodesDraggable: t,
      nodesConnectable: n,
      nodesFocusable: r,
      elementsSelectable: o,
      onError: i,
    } = ge(T_, Ne),
    s = C_(e.onlyRenderVisibleElements),
    l = I_();
  return m.jsx("div", {
    className: "react-flow__nodes",
    style: Bl,
    children: s.map((a) =>
      m.jsx(
        j_,
        {
          id: a,
          nodeTypes: e.nodeTypes,
          nodeExtent: e.nodeExtent,
          onClick: e.onNodeClick,
          onMouseEnter: e.onNodeMouseEnter,
          onMouseMove: e.onNodeMouseMove,
          onMouseLeave: e.onNodeMouseLeave,
          onContextMenu: e.onNodeContextMenu,
          onDoubleClick: e.onNodeDoubleClick,
          noDragClassName: e.noDragClassName,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
          disableKeyboardA11y: e.disableKeyboardA11y,
          resizeObserver: l,
          nodesDraggable: t,
          nodesConnectable: n,
          nodesFocusable: r,
          elementsSelectable: o,
          nodeClickDistance: e.nodeClickDistance,
          onError: i,
        },
        a,
      ),
    ),
  });
}
P0.displayName = "NodeRenderer";
const $_ = z.memo(P0);
function L_(e) {
  return ge(
    z.useCallback(
      (n) => {
        if (!e) return n.edges.map((o) => o.id);
        const r = [];
        if (n.width && n.height)
          for (const o of n.edges) {
            const i = n.nodeLookup.get(o.source),
              s = n.nodeLookup.get(o.target);
            i &&
              s &&
              wk({
                sourceNode: i,
                targetNode: s,
                width: n.width,
                height: n.height,
                transform: n.transform,
              }) &&
              r.push(o.id);
          }
        return r;
      },
      [e],
    ),
    Ne,
  );
}
const A_ = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const n = { strokeWidth: t, ...(e && { stroke: e }) };
    return m.jsx("polyline", {
      className: "arrow",
      style: n,
      strokeLinecap: "round",
      fill: "none",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4",
    });
  },
  D_ = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const n = { strokeWidth: t, ...(e && { stroke: e, fill: e }) };
    return m.jsx("polyline", {
      className: "arrowclosed",
      style: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4 -5,-4",
    });
  },
  Tp = { [sn.Arrow]: A_, [sn.ArrowClosed]: D_ };
function R_(e) {
  const t = Ce();
  return z.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Tp, e)
      ? Tp[e]
      : ((i = (o = t.getState()).onError) == null ||
          i.call(o, "009", Gt.error009(e)),
        null);
  }, [e]);
}
const O_ = ({
    id: e,
    type: t,
    color: n,
    width: r = 12.5,
    height: o = 12.5,
    markerUnits: i = "strokeWidth",
    strokeWidth: s,
    orient: l = "auto-start-reverse",
  }) => {
    const a = R_(t);
    return a
      ? m.jsx("marker", {
          className: "react-flow__arrowhead",
          id: e,
          markerWidth: `${r}`,
          markerHeight: `${o}`,
          viewBox: "-10 -10 20 20",
          markerUnits: i,
          orient: l,
          refX: "0",
          refY: "0",
          children: m.jsx(a, { color: n, strokeWidth: s }),
        })
      : null;
  },
  z0 = ({ defaultColor: e, rfId: t }) => {
    const n = ge((i) => i.edges),
      r = ge((i) => i.defaultEdgeOptions),
      o = z.useMemo(
        () =>
          Mk(n, {
            id: t,
            defaultColor: e,
            defaultMarkerStart: r == null ? void 0 : r.markerStart,
            defaultMarkerEnd: r == null ? void 0 : r.markerEnd,
          }),
        [n, r, t, e],
      );
    return o.length
      ? m.jsx("svg", {
          className: "react-flow__marker",
          "aria-hidden": "true",
          children: m.jsx("defs", {
            children: o.map((i) =>
              m.jsx(
                O_,
                {
                  id: i.id,
                  type: i.type,
                  color: i.color,
                  width: i.width,
                  height: i.height,
                  markerUnits: i.markerUnits,
                  strokeWidth: i.strokeWidth,
                  orient: i.orient,
                },
                i.id,
              ),
            ),
          }),
        })
      : null;
  };
z0.displayName = "MarkerDefinitions";
var b_ = z.memo(z0);
function j0({
  x: e,
  y: t,
  label: n,
  labelStyle: r,
  labelShowBg: o = !0,
  labelBgStyle: i,
  labelBgPadding: s = [2, 4],
  labelBgBorderRadius: l = 2,
  children: a,
  className: u,
  ...d
}) {
  const [c, f] = z.useState({ x: 1, y: 0, width: 0, height: 0 }),
    p = Ae(["react-flow__edge-textwrapper", u]),
    y = z.useRef(null);
  return (
    z.useEffect(() => {
      if (y.current) {
        const x = y.current.getBBox();
        f({ x: x.x, y: x.y, width: x.width, height: x.height });
      }
    }, [n]),
    n
      ? m.jsxs("g", {
          transform: `translate(${e - c.width / 2} ${t - c.height / 2})`,
          className: p,
          visibility: c.width ? "visible" : "hidden",
          ...d,
          children: [
            o &&
              m.jsx("rect", {
                width: c.width + 2 * s[0],
                x: -s[0],
                y: -s[1],
                height: c.height + 2 * s[1],
                className: "react-flow__edge-textbg",
                style: i,
                rx: l,
                ry: l,
              }),
            m.jsx("text", {
              className: "react-flow__edge-text",
              y: c.height / 2,
              dy: "0.3em",
              ref: y,
              style: r,
              children: n,
            }),
            a,
          ],
        })
      : null
  );
}
j0.displayName = "EdgeText";
const F_ = z.memo(j0);
function Ul({
  path: e,
  labelX: t,
  labelY: n,
  label: r,
  labelStyle: o,
  labelShowBg: i,
  labelBgStyle: s,
  labelBgPadding: l,
  labelBgBorderRadius: a,
  interactionWidth: u = 20,
  ...d
}) {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx("path", {
        ...d,
        d: e,
        fill: "none",
        className: Ae(["react-flow__edge-path", d.className]),
      }),
      u
        ? m.jsx("path", {
            d: e,
            fill: "none",
            strokeOpacity: 0,
            strokeWidth: u,
            className: "react-flow__edge-interaction",
          })
        : null,
      r && zt(t) && zt(n)
        ? m.jsx(F_, {
            x: t,
            y: n,
            label: r,
            labelStyle: o,
            labelShowBg: i,
            labelBgStyle: s,
            labelBgPadding: l,
            labelBgBorderRadius: a,
          })
        : null,
    ],
  });
}
function $p({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === q.Left || e === q.Right
    ? [0.5 * (t + r), n]
    : [t, 0.5 * (n + o)];
}
function T0({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = q.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = q.Top,
}) {
  const [s, l] = $p({ pos: n, x1: e, y1: t, x2: r, y2: o }),
    [a, u] = $p({ pos: i, x1: r, y1: o, x2: e, y2: t }),
    [d, c, f, p] = Qm({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: s,
      sourceControlY: l,
      targetControlX: a,
      targetControlY: u,
    });
  return [`M${e},${t} C${s},${l} ${a},${u} ${r},${o}`, d, c, f, p];
}
function $0(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: s,
      targetPosition: l,
      label: a,
      labelStyle: u,
      labelShowBg: d,
      labelBgStyle: c,
      labelBgPadding: f,
      labelBgBorderRadius: p,
      style: y,
      markerEnd: x,
      markerStart: S,
      interactionWidth: g,
    }) => {
      const [v, h, w] = T0({
          sourceX: n,
          sourceY: r,
          sourcePosition: s,
          targetX: o,
          targetY: i,
          targetPosition: l,
        }),
        _ = e.isInternal ? void 0 : t;
      return m.jsx(Ul, {
        id: _,
        path: v,
        labelX: h,
        labelY: w,
        label: a,
        labelStyle: u,
        labelShowBg: d,
        labelBgStyle: c,
        labelBgPadding: f,
        labelBgBorderRadius: p,
        style: y,
        markerEnd: x,
        markerStart: S,
        interactionWidth: g,
      });
    },
  );
}
const H_ = $0({ isInternal: !1 }),
  L0 = $0({ isInternal: !0 });
H_.displayName = "SimpleBezierEdge";
L0.displayName = "SimpleBezierEdgeInternal";
function A0(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      label: s,
      labelStyle: l,
      labelShowBg: a,
      labelBgStyle: u,
      labelBgPadding: d,
      labelBgBorderRadius: c,
      style: f,
      sourcePosition: p = q.Bottom,
      targetPosition: y = q.Top,
      markerEnd: x,
      markerStart: S,
      pathOptions: g,
      interactionWidth: v,
    }) => {
      const [h, w, _] = bu({
          sourceX: n,
          sourceY: r,
          sourcePosition: p,
          targetX: o,
          targetY: i,
          targetPosition: y,
          borderRadius: g == null ? void 0 : g.borderRadius,
          offset: g == null ? void 0 : g.offset,
          stepPosition: g == null ? void 0 : g.stepPosition,
        }),
        N = e.isInternal ? void 0 : t;
      return m.jsx(Ul, {
        id: N,
        path: h,
        labelX: w,
        labelY: _,
        label: s,
        labelStyle: l,
        labelShowBg: a,
        labelBgStyle: u,
        labelBgPadding: d,
        labelBgBorderRadius: c,
        style: f,
        markerEnd: x,
        markerStart: S,
        interactionWidth: v,
      });
    },
  );
}
const D0 = A0({ isInternal: !1 }),
  R0 = A0({ isInternal: !0 });
D0.displayName = "SmoothStepEdge";
R0.displayName = "SmoothStepEdgeInternal";
function O0(e) {
  return z.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return m.jsx(D0, {
      ...n,
      id: r,
      pathOptions: z.useMemo(() => {
        var i;
        return {
          borderRadius: 0,
          offset: (i = n.pathOptions) == null ? void 0 : i.offset,
        };
      }, [(o = n.pathOptions) == null ? void 0 : o.offset]),
    });
  });
}
const V_ = O0({ isInternal: !1 }),
  b0 = O0({ isInternal: !0 });
V_.displayName = "StepEdge";
b0.displayName = "StepEdgeInternal";
function F0(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      label: s,
      labelStyle: l,
      labelShowBg: a,
      labelBgStyle: u,
      labelBgPadding: d,
      labelBgBorderRadius: c,
      style: f,
      markerEnd: p,
      markerStart: y,
      interactionWidth: x,
    }) => {
      const [S, g, v] = Jm({ sourceX: n, sourceY: r, targetX: o, targetY: i }),
        h = e.isInternal ? void 0 : t;
      return m.jsx(Ul, {
        id: h,
        path: S,
        labelX: g,
        labelY: v,
        label: s,
        labelStyle: l,
        labelShowBg: a,
        labelBgStyle: u,
        labelBgPadding: d,
        labelBgBorderRadius: c,
        style: f,
        markerEnd: p,
        markerStart: y,
        interactionWidth: x,
      });
    },
  );
}
const B_ = F0({ isInternal: !1 }),
  H0 = F0({ isInternal: !0 });
B_.displayName = "StraightEdge";
H0.displayName = "StraightEdgeInternal";
function V0(e) {
  return z.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: s = q.Bottom,
      targetPosition: l = q.Top,
      label: a,
      labelStyle: u,
      labelShowBg: d,
      labelBgStyle: c,
      labelBgPadding: f,
      labelBgBorderRadius: p,
      style: y,
      markerEnd: x,
      markerStart: S,
      pathOptions: g,
      interactionWidth: v,
    }) => {
      const [h, w, _] = Zm({
          sourceX: n,
          sourceY: r,
          sourcePosition: s,
          targetX: o,
          targetY: i,
          targetPosition: l,
          curvature: g == null ? void 0 : g.curvature,
        }),
        N = e.isInternal ? void 0 : t;
      return m.jsx(Ul, {
        id: N,
        path: h,
        labelX: w,
        labelY: _,
        label: a,
        labelStyle: u,
        labelShowBg: d,
        labelBgStyle: c,
        labelBgPadding: f,
        labelBgBorderRadius: p,
        style: y,
        markerEnd: x,
        markerStart: S,
        interactionWidth: v,
      });
    },
  );
}
const U_ = V0({ isInternal: !1 }),
  B0 = V0({ isInternal: !0 });
U_.displayName = "BezierEdge";
B0.displayName = "BezierEdgeInternal";
const Lp = {
    default: B0,
    straight: H0,
    step: b0,
    smoothstep: R0,
    simplebezier: L0,
  },
  Ap = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
  },
  W_ = (e, t, n) => (n === q.Left ? e - t : n === q.Right ? e + t : e),
  Y_ = (e, t, n) => (n === q.Top ? e - t : n === q.Bottom ? e + t : e),
  Dp = "react-flow__edgeupdater";
function Rp({
  position: e,
  centerX: t,
  centerY: n,
  radius: r = 10,
  onMouseDown: o,
  onMouseEnter: i,
  onMouseOut: s,
  type: l,
}) {
  return m.jsx("circle", {
    onMouseDown: o,
    onMouseEnter: i,
    onMouseOut: s,
    className: Ae([Dp, `${Dp}-${l}`]),
    cx: W_(t, r, e),
    cy: Y_(n, r, e),
    r,
    stroke: "transparent",
    fill: "transparent",
  });
}
function X_({
  isReconnectable: e,
  reconnectRadius: t,
  edge: n,
  sourceX: r,
  sourceY: o,
  targetX: i,
  targetY: s,
  sourcePosition: l,
  targetPosition: a,
  onReconnect: u,
  onReconnectStart: d,
  onReconnectEnd: c,
  setReconnecting: f,
  setUpdateHover: p,
}) {
  const y = Ce(),
    x = (w, _) => {
      if (w.button !== 0) return;
      const {
          autoPanOnConnect: N,
          domNode: M,
          connectionMode: k,
          connectionRadius: j,
          lib: R,
          onConnectStart: P,
          cancelConnection: L,
          nodeLookup: F,
          rfId: E,
          panBy: $,
          updateConnection: T,
        } = y.getState(),
        D = _.type === "target",
        C = (H, b) => {
          (f(!1), c == null || c(H, n, _.type, b));
        },
        I = (H) => (u == null ? void 0 : u(n, H)),
        A = (H, b) => {
          (f(!0), d == null || d(w, n, _.type), P == null || P(H, b));
        };
      Vu.onPointerDown(w.nativeEvent, {
        autoPanOnConnect: N,
        connectionMode: k,
        connectionRadius: j,
        domNode: M,
        handleId: _.id,
        nodeId: _.nodeId,
        nodeLookup: F,
        isTarget: D,
        edgeUpdaterType: _.type,
        lib: R,
        flowId: E,
        cancelConnection: L,
        panBy: $,
        isValidConnection: (...H) => {
          var b, K;
          return (
            ((K = (b = y.getState()).isValidConnection) == null
              ? void 0
              : K.call(b, ...H)) ?? !0
          );
        },
        onConnect: I,
        onConnectStart: A,
        onConnectEnd: (...H) => {
          var b, K;
          return (K = (b = y.getState()).onConnectEnd) == null
            ? void 0
            : K.call(b, ...H);
        },
        onReconnectEnd: C,
        updateConnection: T,
        getTransform: () => y.getState().transform,
        getFromHandle: () => y.getState().connection.fromHandle,
        dragThreshold: y.getState().connectionDragThreshold,
        handleDomNode: w.currentTarget,
      });
    },
    S = (w) =>
      x(w, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }),
    g = (w) =>
      x(w, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }),
    v = () => p(!0),
    h = () => p(!1);
  return m.jsxs(m.Fragment, {
    children: [
      (e === !0 || e === "source") &&
        m.jsx(Rp, {
          position: l,
          centerX: r,
          centerY: o,
          radius: t,
          onMouseDown: S,
          onMouseEnter: v,
          onMouseOut: h,
          type: "source",
        }),
      (e === !0 || e === "target") &&
        m.jsx(Rp, {
          position: a,
          centerX: i,
          centerY: s,
          radius: t,
          onMouseDown: g,
          onMouseEnter: v,
          onMouseOut: h,
          type: "target",
        }),
    ],
  });
}
function G_({
  id: e,
  edgesFocusable: t,
  edgesReconnectable: n,
  elementsSelectable: r,
  onClick: o,
  onDoubleClick: i,
  onContextMenu: s,
  onMouseEnter: l,
  onMouseMove: a,
  onMouseLeave: u,
  reconnectRadius: d,
  onReconnect: c,
  onReconnectStart: f,
  onReconnectEnd: p,
  rfId: y,
  edgeTypes: x,
  noPanClassName: S,
  onError: g,
  disableKeyboardA11y: v,
}) {
  let h = ge((ie) => ie.edgeLookup.get(e));
  const w = ge((ie) => ie.defaultEdgeOptions);
  h = w ? { ...w, ...h } : h;
  let _ = h.type || "default",
    N = (x == null ? void 0 : x[_]) || Lp[_];
  N === void 0 &&
    (g == null || g("011", Gt.error011(_)),
    (_ = "default"),
    (N = (x == null ? void 0 : x.default) || Lp.default));
  const M = !!(h.focusable || (t && typeof h.focusable > "u")),
    k =
      typeof c < "u" &&
      (h.reconnectable || (n && typeof h.reconnectable > "u")),
    j = !!(h.selectable || (r && typeof h.selectable > "u")),
    R = z.useRef(null),
    [P, L] = z.useState(!1),
    [F, E] = z.useState(!1),
    $ = Ce(),
    {
      zIndex: T,
      sourceX: D,
      sourceY: C,
      targetX: I,
      targetY: A,
      sourcePosition: H,
      targetPosition: b,
    } = ge(
      z.useCallback(
        (ie) => {
          const oe = ie.nodeLookup.get(h.source),
            pe = ie.nodeLookup.get(h.target);
          if (!oe || !pe) return { zIndex: h.zIndex, ...Ap };
          const ve = Ck({
            id: e,
            sourceNode: oe,
            targetNode: pe,
            sourceHandle: h.sourceHandle || null,
            targetHandle: h.targetHandle || null,
            connectionMode: ie.connectionMode,
            onError: g,
          });
          return {
            zIndex: xk({
              selected: h.selected,
              zIndex: h.zIndex,
              sourceNode: oe,
              targetNode: pe,
              elevateOnSelect: ie.elevateEdgesOnSelect,
              zIndexMode: ie.zIndexMode,
            }),
            ...(ve || Ap),
          };
        },
        [
          h.source,
          h.target,
          h.sourceHandle,
          h.targetHandle,
          h.selected,
          h.zIndex,
        ],
      ),
      Ne,
    ),
    K = z.useMemo(
      () => (h.markerStart ? `url('#${Fu(h.markerStart, y)}')` : void 0),
      [h.markerStart, y],
    ),
    G = z.useMemo(
      () => (h.markerEnd ? `url('#${Fu(h.markerEnd, y)}')` : void 0),
      [h.markerEnd, y],
    );
  if (h.hidden || D === null || C === null || I === null || A === null)
    return null;
  const te = (ie) => {
      var he;
      const {
        addSelectedEdges: oe,
        unselectNodesAndEdges: pe,
        multiSelectionActive: ve,
      } = $.getState();
      (j &&
        ($.setState({ nodesSelectionActive: !1 }),
        h.selected && ve
          ? (pe({ nodes: [], edges: [h] }),
            (he = R.current) == null || he.blur())
          : oe([e])),
        o && o(ie, h));
    },
    ee = i
      ? (ie) => {
          i(ie, { ...h });
        }
      : void 0,
    ne = s
      ? (ie) => {
          s(ie, { ...h });
        }
      : void 0,
    X = l
      ? (ie) => {
          l(ie, { ...h });
        }
      : void 0,
    re = a
      ? (ie) => {
          a(ie, { ...h });
        }
      : void 0,
    fe = u
      ? (ie) => {
          u(ie, { ...h });
        }
      : void 0,
    ae = (ie) => {
      var oe;
      if (!v && Dm.includes(ie.key) && j) {
        const { unselectNodesAndEdges: pe, addSelectedEdges: ve } =
          $.getState();
        ie.key === "Escape"
          ? ((oe = R.current) == null || oe.blur(), pe({ edges: [h] }))
          : ve([e]);
      }
    };
  return m.jsx("svg", {
    style: { zIndex: T },
    children: m.jsxs("g", {
      className: Ae([
        "react-flow__edge",
        `react-flow__edge-${_}`,
        h.className,
        S,
        {
          selected: h.selected,
          animated: h.animated,
          inactive: !j && !o,
          updating: P,
          selectable: j,
        },
      ]),
      onClick: te,
      onDoubleClick: ee,
      onContextMenu: ne,
      onMouseEnter: X,
      onMouseMove: re,
      onMouseLeave: fe,
      onKeyDown: M ? ae : void 0,
      tabIndex: M ? 0 : void 0,
      role: h.ariaRole ?? (M ? "group" : "img"),
      "aria-roledescription": "edge",
      "data-id": e,
      "data-testid": `rf__edge-${e}`,
      "aria-label":
        h.ariaLabel === null
          ? void 0
          : h.ariaLabel || `Edge from ${h.source} to ${h.target}`,
      "aria-describedby": M ? `${v0}-${y}` : void 0,
      ref: R,
      ...h.domAttributes,
      children: [
        !F &&
          m.jsx(N, {
            id: e,
            source: h.source,
            target: h.target,
            type: h.type,
            selected: h.selected,
            animated: h.animated,
            selectable: j,
            deletable: h.deletable ?? !0,
            label: h.label,
            labelStyle: h.labelStyle,
            labelShowBg: h.labelShowBg,
            labelBgStyle: h.labelBgStyle,
            labelBgPadding: h.labelBgPadding,
            labelBgBorderRadius: h.labelBgBorderRadius,
            sourceX: D,
            sourceY: C,
            targetX: I,
            targetY: A,
            sourcePosition: H,
            targetPosition: b,
            data: h.data,
            style: h.style,
            sourceHandleId: h.sourceHandle,
            targetHandleId: h.targetHandle,
            markerStart: K,
            markerEnd: G,
            pathOptions: "pathOptions" in h ? h.pathOptions : void 0,
            interactionWidth: h.interactionWidth,
          }),
        k &&
          m.jsx(X_, {
            edge: h,
            isReconnectable: k,
            reconnectRadius: d,
            onReconnect: c,
            onReconnectStart: f,
            onReconnectEnd: p,
            sourceX: D,
            sourceY: C,
            targetX: I,
            targetY: A,
            sourcePosition: H,
            targetPosition: b,
            setUpdateHover: L,
            setReconnecting: E,
          }),
      ],
    }),
  });
}
var K_ = z.memo(G_);
const Q_ = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError,
});
function U0({
  defaultMarkerColor: e,
  onlyRenderVisibleElements: t,
  rfId: n,
  edgeTypes: r,
  noPanClassName: o,
  onReconnect: i,
  onEdgeContextMenu: s,
  onEdgeMouseEnter: l,
  onEdgeMouseMove: a,
  onEdgeMouseLeave: u,
  onEdgeClick: d,
  reconnectRadius: c,
  onEdgeDoubleClick: f,
  onReconnectStart: p,
  onReconnectEnd: y,
  disableKeyboardA11y: x,
}) {
  const {
      edgesFocusable: S,
      edgesReconnectable: g,
      elementsSelectable: v,
      onError: h,
    } = ge(Q_, Ne),
    w = L_(t);
  return m.jsxs("div", {
    className: "react-flow__edges",
    children: [
      m.jsx(b_, { defaultColor: e, rfId: n }),
      w.map((_) =>
        m.jsx(
          K_,
          {
            id: _,
            edgesFocusable: S,
            edgesReconnectable: g,
            elementsSelectable: v,
            noPanClassName: o,
            onReconnect: i,
            onContextMenu: s,
            onMouseEnter: l,
            onMouseMove: a,
            onMouseLeave: u,
            onClick: d,
            reconnectRadius: c,
            onDoubleClick: f,
            onReconnectStart: p,
            onReconnectEnd: y,
            rfId: n,
            onError: h,
            edgeTypes: r,
            disableKeyboardA11y: x,
          },
          _,
        ),
      ),
    ],
  });
}
U0.displayName = "EdgeRenderer";
const Z_ = z.memo(U0),
  q_ = (e) =>
    `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function J_({ children: e }) {
  const t = ge(q_);
  return m.jsx("div", {
    className: "react-flow__viewport xyflow__viewport react-flow__container",
    style: { transform: t },
    children: e,
  });
}
function eN(e) {
  const t = Vl(),
    n = z.useRef(!1);
  z.useEffect(() => {
    !n.current &&
      t.viewportInitialized &&
      e &&
      (setTimeout(() => e(t), 1), (n.current = !0));
  }, [e, t.viewportInitialized]);
}
const tN = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function nN(e) {
  const t = ge(tN),
    n = Ce();
  return (
    z.useEffect(() => {
      e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
    }, [e, t]),
    null
  );
}
function rN(e) {
  return e.connection.inProgress
    ? { ...e.connection, to: Ti(e.connection.to, e.transform) }
    : { ...e.connection };
}
function oN(e) {
  return rN;
}
function iN(e) {
  const t = oN();
  return ge(t, Ne);
}
const sN = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height,
});
function lN({ containerStyle: e, style: t, type: n, component: r }) {
  const {
    nodesConnectable: o,
    width: i,
    height: s,
    isValid: l,
    inProgress: a,
  } = ge(sN, Ne);
  return !(i && o && a)
    ? null
    : m.jsx("svg", {
        style: e,
        width: i,
        height: s,
        className: "react-flow__connectionline react-flow__container",
        children: m.jsx("g", {
          className: Ae(["react-flow__connection", bm(l)]),
          children: m.jsx(W0, {
            style: t,
            type: n,
            CustomComponent: r,
            isValid: l,
          }),
        }),
      });
}
const W0 = ({
  style: e,
  type: t = kn.Bezier,
  CustomComponent: n,
  isValid: r,
}) => {
  const {
    inProgress: o,
    from: i,
    fromNode: s,
    fromHandle: l,
    fromPosition: a,
    to: u,
    toNode: d,
    toHandle: c,
    toPosition: f,
    pointer: p,
  } = iN();
  if (!o) return;
  if (n)
    return m.jsx(n, {
      connectionLineType: t,
      connectionLineStyle: e,
      fromNode: s,
      fromHandle: l,
      fromX: i.x,
      fromY: i.y,
      toX: u.x,
      toY: u.y,
      fromPosition: a,
      toPosition: f,
      connectionStatus: bm(r),
      toNode: d,
      toHandle: c,
      pointer: p,
    });
  let y = "";
  const x = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: a,
    targetX: u.x,
    targetY: u.y,
    targetPosition: f,
  };
  switch (t) {
    case kn.Bezier:
      [y] = Zm(x);
      break;
    case kn.SimpleBezier:
      [y] = T0(x);
      break;
    case kn.Step:
      [y] = bu({ ...x, borderRadius: 0 });
      break;
    case kn.SmoothStep:
      [y] = bu(x);
      break;
    default:
      [y] = Jm(x);
  }
  return m.jsx("path", {
    d: y,
    fill: "none",
    className: "react-flow__connection-path",
    style: e,
  });
};
W0.displayName = "ConnectionLine";
const aN = {};
function Op(e = aN) {
  (z.useRef(e), Ce(), z.useEffect(() => {}, [e]));
}
function uN() {
  (Ce(), z.useRef(!1), z.useEffect(() => {}, []));
}
function Y0({
  nodeTypes: e,
  edgeTypes: t,
  onInit: n,
  onNodeClick: r,
  onEdgeClick: o,
  onNodeDoubleClick: i,
  onEdgeDoubleClick: s,
  onNodeMouseEnter: l,
  onNodeMouseMove: a,
  onNodeMouseLeave: u,
  onNodeContextMenu: d,
  onSelectionContextMenu: c,
  onSelectionStart: f,
  onSelectionEnd: p,
  connectionLineType: y,
  connectionLineStyle: x,
  connectionLineComponent: S,
  connectionLineContainerStyle: g,
  selectionKeyCode: v,
  selectionOnDrag: h,
  selectionMode: w,
  multiSelectionKeyCode: _,
  panActivationKeyCode: N,
  zoomActivationKeyCode: M,
  deleteKeyCode: k,
  onlyRenderVisibleElements: j,
  elementsSelectable: R,
  defaultViewport: P,
  translateExtent: L,
  minZoom: F,
  maxZoom: E,
  preventScrolling: $,
  defaultMarkerColor: T,
  zoomOnScroll: D,
  zoomOnPinch: C,
  panOnScroll: I,
  panOnScrollSpeed: A,
  panOnScrollMode: H,
  zoomOnDoubleClick: b,
  panOnDrag: K,
  onPaneClick: G,
  onPaneMouseEnter: te,
  onPaneMouseMove: ee,
  onPaneMouseLeave: ne,
  onPaneScroll: X,
  onPaneContextMenu: re,
  paneClickDistance: fe,
  nodeClickDistance: ae,
  onEdgeContextMenu: ie,
  onEdgeMouseEnter: oe,
  onEdgeMouseMove: pe,
  onEdgeMouseLeave: ve,
  reconnectRadius: he,
  onReconnect: Oe,
  onReconnectStart: Ot,
  onReconnectEnd: Et,
  noDragClassName: Qt,
  noWheelClassName: Vn,
  noPanClassName: Bn,
  disableKeyboardA11y: Un,
  nodeExtent: mr,
  rfId: O,
  viewport: B,
  onViewportChange: U,
}) {
  return (
    Op(e),
    Op(t),
    uN(),
    eN(n),
    nN(B),
    m.jsx(__, {
      onPaneClick: G,
      onPaneMouseEnter: te,
      onPaneMouseMove: ee,
      onPaneMouseLeave: ne,
      onPaneContextMenu: re,
      onPaneScroll: X,
      paneClickDistance: fe,
      deleteKeyCode: k,
      selectionKeyCode: v,
      selectionOnDrag: h,
      selectionMode: w,
      onSelectionStart: f,
      onSelectionEnd: p,
      multiSelectionKeyCode: _,
      panActivationKeyCode: N,
      zoomActivationKeyCode: M,
      elementsSelectable: R,
      zoomOnScroll: D,
      zoomOnPinch: C,
      zoomOnDoubleClick: b,
      panOnScroll: I,
      panOnScrollSpeed: A,
      panOnScrollMode: H,
      panOnDrag: K,
      defaultViewport: P,
      translateExtent: L,
      minZoom: F,
      maxZoom: E,
      onSelectionContextMenu: c,
      preventScrolling: $,
      noDragClassName: Qt,
      noWheelClassName: Vn,
      noPanClassName: Bn,
      disableKeyboardA11y: Un,
      onViewportChange: U,
      isControlledViewport: !!B,
      children: m.jsxs(J_, {
        children: [
          m.jsx(Z_, {
            edgeTypes: t,
            onEdgeClick: o,
            onEdgeDoubleClick: s,
            onReconnect: Oe,
            onReconnectStart: Ot,
            onReconnectEnd: Et,
            onlyRenderVisibleElements: j,
            onEdgeContextMenu: ie,
            onEdgeMouseEnter: oe,
            onEdgeMouseMove: pe,
            onEdgeMouseLeave: ve,
            reconnectRadius: he,
            defaultMarkerColor: T,
            noPanClassName: Bn,
            disableKeyboardA11y: Un,
            rfId: O,
          }),
          m.jsx(lN, { style: x, type: y, component: S, containerStyle: g }),
          m.jsx("div", { className: "react-flow__edgelabel-renderer" }),
          m.jsx($_, {
            nodeTypes: e,
            onNodeClick: r,
            onNodeDoubleClick: i,
            onNodeMouseEnter: l,
            onNodeMouseMove: a,
            onNodeMouseLeave: u,
            onNodeContextMenu: d,
            nodeClickDistance: ae,
            onlyRenderVisibleElements: j,
            noPanClassName: Bn,
            noDragClassName: Qt,
            disableKeyboardA11y: Un,
            nodeExtent: mr,
            rfId: O,
          }),
          m.jsx("div", { className: "react-flow__viewport-portal" }),
        ],
      }),
    })
  );
}
Y0.displayName = "GraphView";
const cN = z.memo(Y0),
  bp = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: s,
    fitViewOptions: l,
    minZoom: a = 0.5,
    maxZoom: u = 2,
    nodeOrigin: d,
    nodeExtent: c,
    zIndexMode: f = "basic",
  } = {}) => {
    const p = new Map(),
      y = new Map(),
      x = new Map(),
      S = new Map(),
      g = r ?? t ?? [],
      v = n ?? e ?? [],
      h = d ?? [0, 0],
      w = c ?? pi;
    n0(x, S, g);
    const { nodesInitialized: _ } = Hu(v, p, y, {
      nodeOrigin: h,
      nodeExtent: w,
      zIndexMode: f,
    });
    let N = [0, 0, 1];
    if (s && o && i) {
      const M = zi(p, {
          filter: (P) =>
            !!((P.width || P.initialWidth) && (P.height || P.initialHeight)),
        }),
        {
          x: k,
          y: j,
          zoom: R,
        } = tf(M, o, i, a, u, (l == null ? void 0 : l.padding) ?? 0.1);
      N = [k, j, R];
    }
    return {
      rfId: "1",
      width: o ?? 0,
      height: i ?? 0,
      transform: N,
      nodes: v,
      nodesInitialized: _,
      nodeLookup: p,
      parentLookup: y,
      edges: g,
      edgeLookup: S,
      connectionLookup: x,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: n !== void 0,
      hasDefaultEdges: r !== void 0,
      panZoom: null,
      minZoom: a,
      maxZoom: u,
      translateExtent: pi,
      nodeExtent: w,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionMode: no.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: "nopan",
      nodeOrigin: h,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesReconnectable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      elevateEdgesOnSelect: !0,
      selectNodesOnDrag: !0,
      multiSelectionActive: !1,
      fitViewQueued: s ?? !1,
      fitViewOptions: l,
      fitViewResolver: null,
      connection: { ...Om },
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: "",
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      autoPanOnNodeFocus: !0,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: pk,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: !1,
      ariaLabelConfig: Rm,
      zIndexMode: f,
      onNodesChangeMiddlewareMap: new Map(),
      onEdgesChangeMiddlewareMap: new Map(),
    };
  },
  fN = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: s,
    fitViewOptions: l,
    minZoom: a,
    maxZoom: u,
    nodeOrigin: d,
    nodeExtent: c,
    zIndexMode: f,
  }) =>
    zE((p, y) => {
      async function x() {
        const {
          nodeLookup: S,
          panZoom: g,
          fitViewOptions: v,
          fitViewResolver: h,
          width: w,
          height: _,
          minZoom: N,
          maxZoom: M,
        } = y();
        g &&
          (await fk(
            {
              nodes: S,
              width: w,
              height: _,
              panZoom: g,
              minZoom: N,
              maxZoom: M,
            },
            v,
          ),
          h == null || h.resolve(!0),
          p({ fitViewResolver: null }));
      }
      return {
        ...bp({
          nodes: e,
          edges: t,
          width: o,
          height: i,
          fitView: s,
          fitViewOptions: l,
          minZoom: a,
          maxZoom: u,
          nodeOrigin: d,
          nodeExtent: c,
          defaultNodes: n,
          defaultEdges: r,
          zIndexMode: f,
        }),
        setNodes: (S) => {
          const {
              nodeLookup: g,
              parentLookup: v,
              nodeOrigin: h,
              elevateNodesOnSelect: w,
              fitViewQueued: _,
              zIndexMode: N,
              nodesSelectionActive: M,
            } = y(),
            { nodesInitialized: k, hasSelectedNodes: j } = Hu(S, g, v, {
              nodeOrigin: h,
              nodeExtent: c,
              elevateNodesOnSelect: w,
              checkEquality: !0,
              zIndexMode: N,
            }),
            R = M && j;
          _ && k
            ? (x(),
              p({
                nodes: S,
                nodesInitialized: k,
                fitViewQueued: !1,
                fitViewOptions: void 0,
                nodesSelectionActive: R,
              }))
            : p({ nodes: S, nodesInitialized: k, nodesSelectionActive: R });
        },
        setEdges: (S) => {
          const { connectionLookup: g, edgeLookup: v } = y();
          (n0(g, v, S), p({ edges: S }));
        },
        setDefaultNodesAndEdges: (S, g) => {
          if (S) {
            const { setNodes: v } = y();
            (v(S), p({ hasDefaultNodes: !0 }));
          }
          if (g) {
            const { setEdges: v } = y();
            (v(g), p({ hasDefaultEdges: !0 }));
          }
        },
        updateNodeInternals: (S) => {
          const {
              triggerNodeChanges: g,
              nodeLookup: v,
              parentLookup: h,
              domNode: w,
              nodeOrigin: _,
              nodeExtent: N,
              debug: M,
              fitViewQueued: k,
              zIndexMode: j,
            } = y(),
            { changes: R, updatedInternals: P } = Lk(S, v, h, w, _, N, j);
          P &&
            (zk(v, h, { nodeOrigin: _, nodeExtent: N, zIndexMode: j }),
            k ? (x(), p({ fitViewQueued: !1, fitViewOptions: void 0 })) : p({}),
            (R == null ? void 0 : R.length) > 0 &&
              (M && console.log("React Flow: trigger node changes", R),
              g == null || g(R)));
        },
        updateNodePositions: (S, g = !1) => {
          const v = [];
          let h = [];
          const {
            nodeLookup: w,
            triggerNodeChanges: _,
            connection: N,
            updateConnection: M,
            onNodesChangeMiddlewareMap: k,
          } = y();
          for (const [j, R] of S) {
            const P = w.get(j),
              L = !!(
                P != null &&
                P.expandParent &&
                P != null &&
                P.parentId &&
                R != null &&
                R.position
              ),
              F = {
                id: j,
                type: "position",
                position: L
                  ? {
                      x: Math.max(0, R.position.x),
                      y: Math.max(0, R.position.y),
                    }
                  : R.position,
                dragging: g,
              };
            if (P && N.inProgress && N.fromNode.id === P.id) {
              const E = dr(P, N.fromHandle, q.Left, !0);
              M({ ...N, from: E });
            }
            (L &&
              P.parentId &&
              v.push({
                id: j,
                parentId: P.parentId,
                rect: {
                  ...R.internals.positionAbsolute,
                  width: R.measured.width ?? 0,
                  height: R.measured.height ?? 0,
                },
              }),
              h.push(F));
          }
          if (v.length > 0) {
            const { parentLookup: j, nodeOrigin: R } = y(),
              P = af(v, w, j, R);
            h.push(...P);
          }
          for (const j of k.values()) h = j(h);
          _(h);
        },
        triggerNodeChanges: (S) => {
          const {
            onNodesChange: g,
            setNodes: v,
            nodes: h,
            hasDefaultNodes: w,
            debug: _,
          } = y();
          if (S != null && S.length) {
            if (w) {
              const N = S0(S, h);
              v(N);
            }
            (_ && console.log("React Flow: trigger node changes", S),
              g == null || g(S));
          }
        },
        triggerEdgeChanges: (S) => {
          const {
            onEdgesChange: g,
            setEdges: v,
            edges: h,
            hasDefaultEdges: w,
            debug: _,
          } = y();
          if (S != null && S.length) {
            if (w) {
              const N = k0(S, h);
              v(N);
            }
            (_ && console.log("React Flow: trigger edge changes", S),
              g == null || g(S));
          }
        },
        addSelectedNodes: (S) => {
          const {
            multiSelectionActive: g,
            edgeLookup: v,
            nodeLookup: h,
            triggerNodeChanges: w,
            triggerEdgeChanges: _,
          } = y();
          if (g) {
            const N = S.map((M) => Xn(M, !0));
            w(N);
            return;
          }
          (w(Lr(h, new Set([...S]), !0)), _(Lr(v)));
        },
        addSelectedEdges: (S) => {
          const {
            multiSelectionActive: g,
            edgeLookup: v,
            nodeLookup: h,
            triggerNodeChanges: w,
            triggerEdgeChanges: _,
          } = y();
          if (g) {
            const N = S.map((M) => Xn(M, !0));
            _(N);
            return;
          }
          (_(Lr(v, new Set([...S]))), w(Lr(h, new Set(), !0)));
        },
        unselectNodesAndEdges: ({ nodes: S, edges: g } = {}) => {
          const {
              edges: v,
              nodes: h,
              nodeLookup: w,
              triggerNodeChanges: _,
              triggerEdgeChanges: N,
            } = y(),
            M = S || h,
            k = g || v,
            j = [];
          for (const P of M) {
            if (!P.selected) continue;
            const L = w.get(P.id);
            (L && (L.selected = !1), j.push(Xn(P.id, !1)));
          }
          const R = [];
          for (const P of k) P.selected && R.push(Xn(P.id, !1));
          (_(j), N(R));
        },
        setMinZoom: (S) => {
          const { panZoom: g, maxZoom: v } = y();
          (g == null || g.setScaleExtent([S, v]), p({ minZoom: S }));
        },
        setMaxZoom: (S) => {
          const { panZoom: g, minZoom: v } = y();
          (g == null || g.setScaleExtent([v, S]), p({ maxZoom: S }));
        },
        setTranslateExtent: (S) => {
          var g;
          ((g = y().panZoom) == null || g.setTranslateExtent(S),
            p({ translateExtent: S }));
        },
        resetSelectedElements: () => {
          const {
            edges: S,
            nodes: g,
            triggerNodeChanges: v,
            triggerEdgeChanges: h,
            elementsSelectable: w,
          } = y();
          if (!w) return;
          const _ = g.reduce(
              (M, k) => (k.selected ? [...M, Xn(k.id, !1)] : M),
              [],
            ),
            N = S.reduce((M, k) => (k.selected ? [...M, Xn(k.id, !1)] : M), []);
          (v(_), h(N));
        },
        setNodeExtent: (S) => {
          const {
            nodes: g,
            nodeLookup: v,
            parentLookup: h,
            nodeOrigin: w,
            elevateNodesOnSelect: _,
            nodeExtent: N,
            zIndexMode: M,
          } = y();
          (S[0][0] === N[0][0] &&
            S[0][1] === N[0][1] &&
            S[1][0] === N[1][0] &&
            S[1][1] === N[1][1]) ||
            (Hu(g, v, h, {
              nodeOrigin: w,
              nodeExtent: S,
              elevateNodesOnSelect: _,
              checkEquality: !1,
              zIndexMode: M,
            }),
            p({ nodeExtent: S }));
        },
        panBy: (S) => {
          const {
            transform: g,
            width: v,
            height: h,
            panZoom: w,
            translateExtent: _,
          } = y();
          return Ak({
            delta: S,
            panZoom: w,
            transform: g,
            translateExtent: _,
            width: v,
            height: h,
          });
        },
        setCenter: async (S, g, v) => {
          const { width: h, height: w, maxZoom: _, panZoom: N } = y();
          if (!N) return Promise.resolve(!1);
          const M = typeof (v == null ? void 0 : v.zoom) < "u" ? v.zoom : _;
          return (
            await N.setViewport(
              { x: h / 2 - S * M, y: w / 2 - g * M, zoom: M },
              {
                duration: v == null ? void 0 : v.duration,
                ease: v == null ? void 0 : v.ease,
                interpolate: v == null ? void 0 : v.interpolate,
              },
            ),
            Promise.resolve(!0)
          );
        },
        cancelConnection: () => {
          p({ connection: { ...Om } });
        },
        updateConnection: (S) => {
          p({ connection: S });
        },
        reset: () => p({ ...bp() }),
      };
    }, Object.is);
function X0({
  initialNodes: e,
  initialEdges: t,
  defaultNodes: n,
  defaultEdges: r,
  initialWidth: o,
  initialHeight: i,
  initialMinZoom: s,
  initialMaxZoom: l,
  initialFitViewOptions: a,
  fitView: u,
  nodeOrigin: d,
  nodeExtent: c,
  zIndexMode: f,
  children: p,
}) {
  const [y] = z.useState(() =>
    fN({
      nodes: e,
      edges: t,
      defaultNodes: n,
      defaultEdges: r,
      width: o,
      height: i,
      fitView: u,
      minZoom: s,
      maxZoom: l,
      fitViewOptions: a,
      nodeOrigin: d,
      nodeExtent: c,
      zIndexMode: f,
    }),
  );
  return m.jsx(jE, { value: y, children: m.jsx(JE, { children: p }) });
}
function dN({
  children: e,
  nodes: t,
  edges: n,
  defaultNodes: r,
  defaultEdges: o,
  width: i,
  height: s,
  fitView: l,
  fitViewOptions: a,
  minZoom: u,
  maxZoom: d,
  nodeOrigin: c,
  nodeExtent: f,
  zIndexMode: p,
}) {
  return z.useContext(Fl)
    ? m.jsx(m.Fragment, { children: e })
    : m.jsx(X0, {
        initialNodes: t,
        initialEdges: n,
        defaultNodes: r,
        defaultEdges: o,
        initialWidth: i,
        initialHeight: s,
        fitView: l,
        initialFitViewOptions: a,
        initialMinZoom: u,
        initialMaxZoom: d,
        nodeOrigin: c,
        nodeExtent: f,
        zIndexMode: p,
        children: e,
      });
}
const pN = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0,
};
function hN(
  {
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    className: o,
    nodeTypes: i,
    edgeTypes: s,
    onNodeClick: l,
    onEdgeClick: a,
    onInit: u,
    onMove: d,
    onMoveStart: c,
    onMoveEnd: f,
    onConnect: p,
    onConnectStart: y,
    onConnectEnd: x,
    onClickConnectStart: S,
    onClickConnectEnd: g,
    onNodeMouseEnter: v,
    onNodeMouseMove: h,
    onNodeMouseLeave: w,
    onNodeContextMenu: _,
    onNodeDoubleClick: N,
    onNodeDragStart: M,
    onNodeDrag: k,
    onNodeDragStop: j,
    onNodesDelete: R,
    onEdgesDelete: P,
    onDelete: L,
    onSelectionChange: F,
    onSelectionDragStart: E,
    onSelectionDrag: $,
    onSelectionDragStop: T,
    onSelectionContextMenu: D,
    onSelectionStart: C,
    onSelectionEnd: I,
    onBeforeDelete: A,
    connectionMode: H,
    connectionLineType: b = kn.Bezier,
    connectionLineStyle: K,
    connectionLineComponent: G,
    connectionLineContainerStyle: te,
    deleteKeyCode: ee = "Backspace",
    selectionKeyCode: ne = "Shift",
    selectionOnDrag: X = !1,
    selectionMode: re = hi.Full,
    panActivationKeyCode: fe = "Space",
    multiSelectionKeyCode: ae = mi() ? "Meta" : "Control",
    zoomActivationKeyCode: ie = mi() ? "Meta" : "Control",
    snapToGrid: oe,
    snapGrid: pe,
    onlyRenderVisibleElements: ve = !1,
    selectNodesOnDrag: he,
    nodesDraggable: Oe,
    autoPanOnNodeFocus: Ot,
    nodesConnectable: Et,
    nodesFocusable: Qt,
    nodeOrigin: Vn = x0,
    edgesFocusable: Bn,
    edgesReconnectable: Un,
    elementsSelectable: mr = !0,
    defaultViewport: O = UE,
    minZoom: B = 0.5,
    maxZoom: U = 2,
    translateExtent: V = pi,
    preventScrolling: W = !0,
    nodeExtent: J,
    defaultMarkerColor: le = "#b1b1b7",
    zoomOnScroll: Q = !0,
    zoomOnPinch: ue = !0,
    panOnScroll: ce = !1,
    panOnScrollSpeed: ze = 0.5,
    panOnScrollMode: je = rr.Free,
    zoomOnDoubleClick: Zt = !0,
    panOnDrag: yr = !0,
    onPaneClick: be,
    onPaneMouseEnter: se,
    onPaneMouseMove: xe,
    onPaneMouseLeave: Qe,
    onPaneScroll: vr,
    onPaneContextMenu: ql,
    paneClickDistance: Sf = 1,
    nodeClickDistance: Di = 0,
    children: Ri,
    onReconnect: yo,
    onReconnectStart: vy,
    onReconnectEnd: xy,
    onEdgeContextMenu: wy,
    onEdgeDoubleClick: Sy,
    onEdgeMouseEnter: ky,
    onEdgeMouseMove: Ey,
    onEdgeMouseLeave: _y,
    reconnectRadius: Ny = 10,
    onNodesChange: Cy,
    onEdgesChange: My,
    noDragClassName: Iy = "nodrag",
    noWheelClassName: Py = "nowheel",
    noPanClassName: kf = "nopan",
    fitView: Ef,
    fitViewOptions: _f,
    connectOnClick: zy,
    attributionPosition: jy,
    proOptions: Ty,
    defaultEdgeOptions: $y,
    elevateNodesOnSelect: Ly = !0,
    elevateEdgesOnSelect: Ay = !1,
    disableKeyboardA11y: Nf = !1,
    autoPanOnConnect: Dy,
    autoPanOnNodeDrag: Ry,
    autoPanSpeed: Oy,
    connectionRadius: by,
    isValidConnection: Fy,
    onError: Hy,
    style: Vy,
    id: Cf,
    nodeDragThreshold: By,
    connectionDragThreshold: Uy,
    viewport: Wy,
    onViewportChange: Yy,
    width: Xy,
    height: Gy,
    colorMode: Ky = "light",
    debug: Qy,
    onScroll: Oi,
    ariaLabelConfig: Zy,
    zIndexMode: Mf = "basic",
    ...qy
  },
  Jy,
) {
  const Jl = Cf || "1",
    e1 = GE(Ky),
    t1 = z.useCallback(
      (If) => {
        (If.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }),
          Oi == null || Oi(If));
      },
      [Oi],
    );
  return m.jsx("div", {
    "data-testid": "rf__wrapper",
    ...qy,
    onScroll: t1,
    style: { ...Vy, ...pN },
    ref: Jy,
    className: Ae(["react-flow", o, e1]),
    id: Cf,
    role: "application",
    children: m.jsxs(dN, {
      nodes: e,
      edges: t,
      width: Xy,
      height: Gy,
      fitView: Ef,
      fitViewOptions: _f,
      minZoom: B,
      maxZoom: U,
      nodeOrigin: Vn,
      nodeExtent: J,
      zIndexMode: Mf,
      children: [
        m.jsx(XE, {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          onConnect: p,
          onConnectStart: y,
          onConnectEnd: x,
          onClickConnectStart: S,
          onClickConnectEnd: g,
          nodesDraggable: Oe,
          autoPanOnNodeFocus: Ot,
          nodesConnectable: Et,
          nodesFocusable: Qt,
          edgesFocusable: Bn,
          edgesReconnectable: Un,
          elementsSelectable: mr,
          elevateNodesOnSelect: Ly,
          elevateEdgesOnSelect: Ay,
          minZoom: B,
          maxZoom: U,
          nodeExtent: J,
          onNodesChange: Cy,
          onEdgesChange: My,
          snapToGrid: oe,
          snapGrid: pe,
          connectionMode: H,
          translateExtent: V,
          connectOnClick: zy,
          defaultEdgeOptions: $y,
          fitView: Ef,
          fitViewOptions: _f,
          onNodesDelete: R,
          onEdgesDelete: P,
          onDelete: L,
          onNodeDragStart: M,
          onNodeDrag: k,
          onNodeDragStop: j,
          onSelectionDrag: $,
          onSelectionDragStart: E,
          onSelectionDragStop: T,
          onMove: d,
          onMoveStart: c,
          onMoveEnd: f,
          noPanClassName: kf,
          nodeOrigin: Vn,
          rfId: Jl,
          autoPanOnConnect: Dy,
          autoPanOnNodeDrag: Ry,
          autoPanSpeed: Oy,
          onError: Hy,
          connectionRadius: by,
          isValidConnection: Fy,
          selectNodesOnDrag: he,
          nodeDragThreshold: By,
          connectionDragThreshold: Uy,
          onBeforeDelete: A,
          debug: Qy,
          ariaLabelConfig: Zy,
          zIndexMode: Mf,
        }),
        m.jsx(cN, {
          onInit: u,
          onNodeClick: l,
          onEdgeClick: a,
          onNodeMouseEnter: v,
          onNodeMouseMove: h,
          onNodeMouseLeave: w,
          onNodeContextMenu: _,
          onNodeDoubleClick: N,
          nodeTypes: i,
          edgeTypes: s,
          connectionLineType: b,
          connectionLineStyle: K,
          connectionLineComponent: G,
          connectionLineContainerStyle: te,
          selectionKeyCode: ne,
          selectionOnDrag: X,
          selectionMode: re,
          deleteKeyCode: ee,
          multiSelectionKeyCode: ae,
          panActivationKeyCode: fe,
          zoomActivationKeyCode: ie,
          onlyRenderVisibleElements: ve,
          defaultViewport: O,
          translateExtent: V,
          minZoom: B,
          maxZoom: U,
          preventScrolling: W,
          zoomOnScroll: Q,
          zoomOnPinch: ue,
          zoomOnDoubleClick: Zt,
          panOnScroll: ce,
          panOnScrollSpeed: ze,
          panOnScrollMode: je,
          panOnDrag: yr,
          onPaneClick: be,
          onPaneMouseEnter: se,
          onPaneMouseMove: xe,
          onPaneMouseLeave: Qe,
          onPaneScroll: vr,
          onPaneContextMenu: ql,
          paneClickDistance: Sf,
          nodeClickDistance: Di,
          onSelectionContextMenu: D,
          onSelectionStart: C,
          onSelectionEnd: I,
          onReconnect: yo,
          onReconnectStart: vy,
          onReconnectEnd: xy,
          onEdgeContextMenu: wy,
          onEdgeDoubleClick: Sy,
          onEdgeMouseEnter: ky,
          onEdgeMouseMove: Ey,
          onEdgeMouseLeave: _y,
          reconnectRadius: Ny,
          defaultMarkerColor: le,
          noDragClassName: Iy,
          noWheelClassName: Py,
          noPanClassName: kf,
          rfId: Jl,
          disableKeyboardA11y: Nf,
          nodeExtent: J,
          viewport: Wy,
          onViewportChange: Yy,
        }),
        m.jsx(BE, { onSelectionChange: F }),
        Ri,
        m.jsx(OE, { proOptions: Ty, position: jy }),
        m.jsx(RE, { rfId: Jl, disableKeyboardA11y: Nf }),
      ],
    }),
  });
}
var gN = E0(hN);
function mN(e) {
  const [t, n] = z.useState(e),
    r = z.useCallback((o) => n((i) => S0(o, i)), []);
  return [t, n, r];
}
function yN(e) {
  const [t, n] = z.useState(e),
    r = z.useCallback((o) => n((i) => k0(o, i)), []);
  return [t, n, r];
}
function vN({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return m.jsx("path", {
    strokeWidth: t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
    className: Ae(["react-flow__background-pattern", n, r]),
  });
}
function xN({ radius: e, className: t }) {
  return m.jsx("circle", {
    cx: e,
    cy: e,
    r: e,
    className: Ae(["react-flow__background-pattern", "dots", t]),
  });
}
var $n;
(function (e) {
  ((e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross"));
})($n || ($n = {}));
const wN = { [$n.Dots]: 1, [$n.Lines]: 1, [$n.Cross]: 6 },
  SN = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function G0({
  id: e,
  variant: t = $n.Dots,
  gap: n = 20,
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: l,
  style: a,
  className: u,
  patternClassName: d,
}) {
  const c = z.useRef(null),
    { transform: f, patternId: p } = ge(SN, Ne),
    y = r || wN[t],
    x = t === $n.Dots,
    S = t === $n.Cross,
    g = Array.isArray(n) ? n : [n, n],
    v = [g[0] * f[2] || 1, g[1] * f[2] || 1],
    h = y * f[2],
    w = Array.isArray(i) ? i : [i, i],
    _ = S ? [h, h] : v,
    N = [w[0] * f[2] || 1 + _[0] / 2, w[1] * f[2] || 1 + _[1] / 2],
    M = `${p}${e || ""}`;
  return m.jsxs("svg", {
    className: Ae(["react-flow__background", u]),
    style: {
      ...a,
      ...Bl,
      "--xy-background-color-props": l,
      "--xy-background-pattern-color-props": s,
    },
    ref: c,
    "data-testid": "rf__background",
    children: [
      m.jsx("pattern", {
        id: M,
        x: f[0] % v[0],
        y: f[1] % v[1],
        width: v[0],
        height: v[1],
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${N[0]},-${N[1]})`,
        children: x
          ? m.jsx(xN, { radius: h / 2, className: d })
          : m.jsx(vN, {
              dimensions: _,
              lineWidth: o,
              variant: t,
              className: d,
            }),
      }),
      m.jsx("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: `url(#${M})`,
      }),
    ],
  });
}
G0.displayName = "Background";
const kN = z.memo(G0);
function EN() {
  return m.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    children: m.jsx("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
    }),
  });
}
function _N() {
  return m.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 5",
    children: m.jsx("path", { d: "M0 0h32v4.2H0z" }),
  });
}
function NN() {
  return m.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 30",
    children: m.jsx("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
    }),
  });
}
function CN() {
  return m.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: m.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
    }),
  });
}
function MN() {
  return m.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: m.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
    }),
  });
}
function cs({ children: e, className: t, ...n }) {
  return m.jsx("button", {
    type: "button",
    className: Ae(["react-flow__controls-button", t]),
    ...n,
    children: e,
  });
}
const IN = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig,
});
function K0({
  style: e,
  showZoom: t = !0,
  showFitView: n = !0,
  showInteractive: r = !0,
  fitViewOptions: o,
  onZoomIn: i,
  onZoomOut: s,
  onFitView: l,
  onInteractiveChange: a,
  className: u,
  children: d,
  position: c = "bottom-left",
  orientation: f = "vertical",
  "aria-label": p,
}) {
  const y = Ce(),
    {
      isInteractive: x,
      minZoomReached: S,
      maxZoomReached: g,
      ariaLabelConfig: v,
    } = ge(IN, Ne),
    { zoomIn: h, zoomOut: w, fitView: _ } = Vl(),
    N = () => {
      (h(), i == null || i());
    },
    M = () => {
      (w(), s == null || s());
    },
    k = () => {
      (_(o), l == null || l());
    },
    j = () => {
      (y.setState({
        nodesDraggable: !x,
        nodesConnectable: !x,
        elementsSelectable: !x,
      }),
        a == null || a(!x));
    },
    R = f === "horizontal" ? "horizontal" : "vertical";
  return m.jsxs(Hl, {
    className: Ae(["react-flow__controls", R, u]),
    position: c,
    style: e,
    "data-testid": "rf__controls",
    "aria-label": p ?? v["controls.ariaLabel"],
    children: [
      t &&
        m.jsxs(m.Fragment, {
          children: [
            m.jsx(cs, {
              onClick: N,
              className: "react-flow__controls-zoomin",
              title: v["controls.zoomIn.ariaLabel"],
              "aria-label": v["controls.zoomIn.ariaLabel"],
              disabled: g,
              children: m.jsx(EN, {}),
            }),
            m.jsx(cs, {
              onClick: M,
              className: "react-flow__controls-zoomout",
              title: v["controls.zoomOut.ariaLabel"],
              "aria-label": v["controls.zoomOut.ariaLabel"],
              disabled: S,
              children: m.jsx(_N, {}),
            }),
          ],
        }),
      n &&
        m.jsx(cs, {
          className: "react-flow__controls-fitview",
          onClick: k,
          title: v["controls.fitView.ariaLabel"],
          "aria-label": v["controls.fitView.ariaLabel"],
          children: m.jsx(NN, {}),
        }),
      r &&
        m.jsx(cs, {
          className: "react-flow__controls-interactive",
          onClick: j,
          title: v["controls.interactive.ariaLabel"],
          "aria-label": v["controls.interactive.ariaLabel"],
          children: x ? m.jsx(MN, {}) : m.jsx(CN, {}),
        }),
      d,
    ],
  });
}
K0.displayName = "Controls";
const PN = z.memo(K0);
function zN({
  id: e,
  x: t,
  y: n,
  width: r,
  height: o,
  style: i,
  color: s,
  strokeColor: l,
  strokeWidth: a,
  className: u,
  borderRadius: d,
  shapeRendering: c,
  selected: f,
  onClick: p,
}) {
  const { background: y, backgroundColor: x } = i || {},
    S = s || y || x;
  return m.jsx("rect", {
    className: Ae(["react-flow__minimap-node", { selected: f }, u]),
    x: t,
    y: n,
    rx: d,
    ry: d,
    width: r,
    height: o,
    style: { fill: S, stroke: l, strokeWidth: a },
    shapeRendering: c,
    onClick: p ? (g) => p(g, e) : void 0,
  });
}
const jN = z.memo(zN),
  TN = (e) => e.nodes.map((t) => t.id),
  Aa = (e) => (e instanceof Function ? e : () => e);
function $N({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  nodeComponent: i = jN,
  onClick: s,
}) {
  const l = ge(TN, Ne),
    a = Aa(t),
    u = Aa(e),
    d = Aa(n),
    c =
      typeof window > "u" || window.chrome
        ? "crispEdges"
        : "geometricPrecision";
  return m.jsx(m.Fragment, {
    children: l.map((f) =>
      m.jsx(
        AN,
        {
          id: f,
          nodeColorFunc: a,
          nodeStrokeColorFunc: u,
          nodeClassNameFunc: d,
          nodeBorderRadius: r,
          nodeStrokeWidth: o,
          NodeComponent: i,
          onClick: s,
          shapeRendering: c,
        },
        f,
      ),
    ),
  });
}
function LN({
  id: e,
  nodeColorFunc: t,
  nodeStrokeColorFunc: n,
  nodeClassNameFunc: r,
  nodeBorderRadius: o,
  nodeStrokeWidth: i,
  shapeRendering: s,
  NodeComponent: l,
  onClick: a,
}) {
  const {
    node: u,
    x: d,
    y: c,
    width: f,
    height: p,
  } = ge((y) => {
    const x = y.nodeLookup.get(e);
    if (!x) return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const S = x.internals.userNode,
      { x: g, y: v } = x.internals.positionAbsolute,
      { width: h, height: w } = hn(S);
    return { node: S, x: g, y: v, width: h, height: w };
  }, Ne);
  return !u || u.hidden || !Wm(u)
    ? null
    : m.jsx(l, {
        x: d,
        y: c,
        width: f,
        height: p,
        style: u.style,
        selected: !!u.selected,
        className: r(u),
        color: t(u),
        borderRadius: o,
        strokeColor: n(u),
        strokeWidth: i,
        shapeRendering: s,
        onClick: a,
        id: u.id,
      });
}
const AN = z.memo(LN);
var DN = z.memo($N);
const RN = 200,
  ON = 150,
  bN = (e) => !e.hidden,
  FN = (e) => {
    const t = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2],
    };
    return {
      viewBB: t,
      boundingRect:
        e.nodeLookup.size > 0 ? Um(zi(e.nodeLookup, { filter: bN }), t) : t,
      rfId: e.rfId,
      panZoom: e.panZoom,
      translateExtent: e.translateExtent,
      flowWidth: e.width,
      flowHeight: e.height,
      ariaLabelConfig: e.ariaLabelConfig,
    };
  },
  HN = "react-flow__minimap-desc";
function Q0({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  nodeComponent: l,
  bgColor: a,
  maskColor: u,
  maskStrokeColor: d,
  maskStrokeWidth: c,
  position: f = "bottom-right",
  onClick: p,
  onNodeClick: y,
  pannable: x = !1,
  zoomable: S = !1,
  ariaLabel: g,
  inversePan: v,
  zoomStep: h = 1,
  offsetScale: w = 5,
}) {
  const _ = Ce(),
    N = z.useRef(null),
    {
      boundingRect: M,
      viewBB: k,
      rfId: j,
      panZoom: R,
      translateExtent: P,
      flowWidth: L,
      flowHeight: F,
      ariaLabelConfig: E,
    } = ge(FN, Ne),
    $ = (e == null ? void 0 : e.width) ?? RN,
    T = (e == null ? void 0 : e.height) ?? ON,
    D = M.width / $,
    C = M.height / T,
    I = Math.max(D, C),
    A = I * $,
    H = I * T,
    b = w * I,
    K = M.x - (A - M.width) / 2 - b,
    G = M.y - (H - M.height) / 2 - b,
    te = A + b * 2,
    ee = H + b * 2,
    ne = `${HN}-${j}`,
    X = z.useRef(0),
    re = z.useRef();
  ((X.current = I),
    z.useEffect(() => {
      if (N.current && R)
        return (
          (re.current = Uk({
            domNode: N.current,
            panZoom: R,
            getTransform: () => _.getState().transform,
            getViewScale: () => X.current,
          })),
          () => {
            var oe;
            (oe = re.current) == null || oe.destroy();
          }
        );
    }, [R]),
    z.useEffect(() => {
      var oe;
      (oe = re.current) == null ||
        oe.update({
          translateExtent: P,
          width: L,
          height: F,
          inversePan: v,
          pannable: x,
          zoomStep: h,
          zoomable: S,
        });
    }, [x, S, v, h, P, L, F]));
  const fe = p
      ? (oe) => {
          var he;
          const [pe, ve] = ((he = re.current) == null
            ? void 0
            : he.pointer(oe)) || [0, 0];
          p(oe, { x: pe, y: ve });
        }
      : void 0,
    ae = y
      ? z.useCallback((oe, pe) => {
          const ve = _.getState().nodeLookup.get(pe).internals.userNode;
          y(oe, ve);
        }, [])
      : void 0,
    ie = g ?? E["minimap.ariaLabel"];
  return m.jsx(Hl, {
    position: f,
    style: {
      ...e,
      "--xy-minimap-background-color-props": typeof a == "string" ? a : void 0,
      "--xy-minimap-mask-background-color-props":
        typeof u == "string" ? u : void 0,
      "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
      "--xy-minimap-mask-stroke-width-props":
        typeof c == "number" ? c * I : void 0,
      "--xy-minimap-node-background-color-props":
        typeof r == "string" ? r : void 0,
      "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
      "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0,
    },
    className: Ae(["react-flow__minimap", t]),
    "data-testid": "rf__minimap",
    children: m.jsxs("svg", {
      width: $,
      height: T,
      viewBox: `${K} ${G} ${te} ${ee}`,
      className: "react-flow__minimap-svg",
      role: "img",
      "aria-labelledby": ne,
      ref: N,
      onClick: fe,
      children: [
        ie && m.jsx("title", { id: ne, children: ie }),
        m.jsx(DN, {
          onClick: ae,
          nodeColor: r,
          nodeStrokeColor: n,
          nodeBorderRadius: i,
          nodeClassName: o,
          nodeStrokeWidth: s,
          nodeComponent: l,
        }),
        m.jsx("path", {
          className: "react-flow__minimap-mask",
          d: `M${K - b},${G - b}h${te + b * 2}v${ee + b * 2}h${-te - b * 2}z
        M${k.x},${k.y}h${k.width}v${k.height}h${-k.width}z`,
          fillRule: "evenodd",
          pointerEvents: "none",
        }),
      ],
    }),
  });
}
Q0.displayName = "MiniMap";
const VN = z.memo(Q0),
  BN = (e) => (t) => (e ? `${Math.max(1 / t.transform[2], 1)}` : void 0),
  UN = { [so.Line]: "right", [so.Handle]: "bottom-right" };
function WN({
  nodeId: e,
  position: t,
  variant: n = so.Handle,
  className: r,
  style: o = void 0,
  children: i,
  color: s,
  minWidth: l = 10,
  minHeight: a = 10,
  maxWidth: u = Number.MAX_VALUE,
  maxHeight: d = Number.MAX_VALUE,
  keepAspectRatio: c = !1,
  resizeDirection: f,
  autoScale: p = !0,
  shouldResize: y,
  onResizeStart: x,
  onResize: S,
  onResizeEnd: g,
}) {
  const v = M0(),
    h = typeof e == "string" ? e : v,
    w = Ce(),
    _ = z.useRef(null),
    N = n === so.Handle,
    M = ge(z.useCallback(BN(N && p), [N, p]), Ne),
    k = z.useRef(null),
    j = t ?? UN[n];
  z.useEffect(() => {
    if (!(!_.current || !h))
      return (
        k.current ||
          (k.current = oE({
            domNode: _.current,
            nodeId: h,
            getStoreItems: () => {
              const {
                nodeLookup: P,
                transform: L,
                snapGrid: F,
                snapToGrid: E,
                nodeOrigin: $,
                domNode: T,
              } = w.getState();
              return {
                nodeLookup: P,
                transform: L,
                snapGrid: F,
                snapToGrid: E,
                nodeOrigin: $,
                paneDomNode: T,
              };
            },
            onChange: (P, L) => {
              const {
                  triggerNodeChanges: F,
                  nodeLookup: E,
                  parentLookup: $,
                  nodeOrigin: T,
                } = w.getState(),
                D = [],
                C = { x: P.x, y: P.y },
                I = E.get(h);
              if (I && I.expandParent && I.parentId) {
                const A = I.origin ?? T,
                  H = P.width ?? I.measured.width ?? 0,
                  b = P.height ?? I.measured.height ?? 0,
                  K = {
                    id: I.id,
                    parentId: I.parentId,
                    rect: {
                      width: H,
                      height: b,
                      ...Ym(
                        { x: P.x ?? I.position.x, y: P.y ?? I.position.y },
                        { width: H, height: b },
                        I.parentId,
                        E,
                        A,
                      ),
                    },
                  },
                  G = af([K], E, $, T);
                (D.push(...G),
                  (C.x = P.x ? Math.max(A[0] * H, P.x) : void 0),
                  (C.y = P.y ? Math.max(A[1] * b, P.y) : void 0));
              }
              if (C.x !== void 0 && C.y !== void 0) {
                const A = { id: h, type: "position", position: { ...C } };
                D.push(A);
              }
              if (P.width !== void 0 && P.height !== void 0) {
                const H = {
                  id: h,
                  type: "dimensions",
                  resizing: !0,
                  setAttributes: f
                    ? f === "horizontal"
                      ? "width"
                      : "height"
                    : !0,
                  dimensions: { width: P.width, height: P.height },
                };
                D.push(H);
              }
              for (const A of L) {
                const H = { ...A, type: "position" };
                D.push(H);
              }
              F(D);
            },
            onEnd: ({ width: P, height: L }) => {
              const F = {
                id: h,
                type: "dimensions",
                resizing: !1,
                dimensions: { width: P, height: L },
              };
              w.getState().triggerNodeChanges([F]);
            },
          })),
        k.current.update({
          controlPosition: j,
          boundaries: { minWidth: l, minHeight: a, maxWidth: u, maxHeight: d },
          keepAspectRatio: c,
          resizeDirection: f,
          onResizeStart: x,
          onResize: S,
          onResizeEnd: g,
          shouldResize: y,
        }),
        () => {
          var P;
          (P = k.current) == null || P.destroy();
        }
      );
  }, [j, l, a, u, d, c, x, S, g, y]);
  const R = j.split("-");
  return m.jsx("div", {
    className: Ae(["react-flow__resize-control", "nodrag", ...R, n, r]),
    ref: _,
    style: {
      ...o,
      scale: M,
      ...(s && { [N ? "backgroundColor" : "borderColor"]: s }),
    },
    children: i,
  });
}
z.memo(WN);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YN = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Z0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var XN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GN = z.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a,
  ) =>
    z.createElement(
      "svg",
      {
        ref: a,
        ...XN,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Z0("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => z.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Se = (e, t) => {
  const n = z.forwardRef(({ className: r, ...o }, i) =>
    z.createElement(GN, {
      ref: i,
      iconNode: t,
      className: Z0(`lucide-${YN(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KN = Se("AlignLeft", [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QN = Se("AlignStartHorizontal", [
  [
    "rect",
    { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" },
  ],
  [
    "rect",
    { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" },
  ],
  ["path", { d: "M22 2H2", key: "fhrpnj" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q0 = Se("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w",
    },
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat",
    },
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf",
    },
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZN = Se("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qN = Se("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = Se("Clipboard", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JN = Se("Columns3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eC = Se("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = Se("Crosshair", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tC = Se("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cf = Se("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nC = Se("Grid2x2", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  [
    "rect",
    { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ty = Se("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rC = Se("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t",
    },
  ],
  [
    "circle",
    { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oC = Se("Link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo",
    },
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ao = Se("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iC = Se("MousePointer2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const go = Se("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mo = Se("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sC = Se("Rows3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lC = Se("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fl = Se("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aC = Se("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uC = Se("Ungroup", [
  ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }],
  [
    "rect",
    { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = Se("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vi = Se("WandSparkles", [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6",
      },
    ],
    ["path", { d: "m14 7 3 3", key: "1r5n42" }],
    ["path", { d: "M5 6v4", key: "ilb8ba" }],
    ["path", { d: "M19 14v4", key: "blhpug" }],
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M7 8H3", key: "zfb6yr" }],
    ["path", { d: "M21 16h-4", key: "1cnmox" }],
    ["path", { d: "M11 3H9", key: "1obp7u" }],
  ]),
  ny = "batchrefiner_openai_endpoint_settings_v2",
  cC = "v1.5.14-gemini-strict-sizefix-v6",
  Wl = "comfly-ai-default-platform",
  ff = "blank-openai-compatible-platform",
  ry = ["gpt-image-2", "gemini-3.1-flash-image-preview", "nano-banana-pro"],
  df = ["gpt-image-2", "gemini-3.1-flash-image"],
  fC = Array.from(new Set([...ry, ...df])),
  Wo = ["gemini-3.1-pro-preview"],
  Dn = "default",
  dC = "gemini-t3",
  Da = "Gemini优质",
  oy = {
    "gpt-image-2": Dn,
    "gpt-image-2-4k": Dn,
    "gemini-3.1-flash-image-preview": dC,
    "gemini-3.1-pro-preview": Da,
    "nano-banana-pro": Da,
    "nano-banana-pro-4k": Da,
  },
  pC = ["1:1", "2:3", "3:4", "9:16", "16:9", "4:3", "3:2"],
  hC = [1, 2, 3, 4],
  gC = "nano-banana-pro",
  Yl = "4k",
  Yu = { "1k": 1024, "2k": 2048, "3k": 3072, "4k": 3840 },
  mC = 9437184,
  yC = { "1k": 1024, "2k": 2048, "3k": 3072, "4k": 4096 },
  vC = ["1:1", "2:3", "3:4", "9:16", "16:9", "4:3", "3:2"],
  Xl = [
    {
      id: ff,
      name: "自定义 OpenAI兼容 API",
      baseUrl: "",
      apiKey: "",
      customImageModels: [],
      customTextModels: [],
    },
  ],
  tn = {
    platforms: Xl,
    activePlatformId: ff,
    defaultTextModel: "",
    defaultImageModel: "",
  },
  xC = [
    {
      id: "welcome-text",
      type: "textNode",
      position: { x: -120, y: 80 },
      data: {
        title: "全局提示词",
        text: "图1的蓝色锅全部替换成图2白底图的红色渐变，如果图中已经有红锅就与蓝锅互换位置",
      },
    },
    {
      id: "starter-generator",
      type: "generateNode",
      position: { x: 260, y: 68 },
      data: {
        title: "图片生成",
        prompt: "保留原图构图和光影，生成高端厨房场景商业摄影图。",
        platformId: ff,
        model: "",
        modelSource: "default",
        ratio: "3:4",
        quality: "1k",
        count: 1,
        advancedOpen: !1,
        upstreamImages: [],
        status: "等待运行",
      },
    },
  ],
  wC = [
    {
      id: "welcome-text-to-starter-generator",
      source: "welcome-text",
      target: "starter-generator",
      type: "smoothstep",
      markerEnd: { type: sn.ArrowClosed, width: 18, height: 18 },
      style: { strokeWidth: 2 },
      data: { selectedMiddle: !1 },
    },
  ];
function PM(e) {
  return Array.from(
    new Set(
      (Array.isArray(e) ? e : String(e || "").split(/[\n,，、;；\s]+/))
        .map((t) => String(t || "").trim())
        .filter(Boolean),
    ),
  );
}
function VM(e) {
  return PM(
    (e == null ? void 0 : e.customImageModels) ||
      (e == null ? void 0 : e.imageModels) ||
      [],
  );
}
function BM(e) {
  return PM(
    (e == null ? void 0 : e.customTextModels) ||
      (e == null ? void 0 : e.textModels) ||
      [],
  );
}
function SC(e, t) {
  try {
    return e ? JSON.parse(e) : t;
  } catch {
    return t;
  }
}
function parseApiModels(e) {
  const t = [],
    n = new Set(),
    r = (o, i = 0) => {
      if (!o || i > 4) return;
      if (typeof o == "string") {
        const s = o.trim();
        s && !n.has(s) && (n.add(s), t.push(s));
        return;
      }
      if (Array.isArray(o)) {
        o.forEach((s) => r(s, i + 1));
        return;
      }
      if (typeof o == "object") {
        const s = o.id || o.model || o.name;
        if (typeof s == "string") {
          const l = s.trim();
          l && !n.has(l) && (n.add(l), t.push(l));
        }
        ["data", "models", "items", "results", "list"].forEach((l) => r(o[l], i + 1));
      }
    };
  return (r(e), t);
}
function kC(e = []) {
  const t = new Map();
  return (
    Xl.forEach((n) => t.set(n.id, n)),
    e.forEach((n) => {
      if (!(n != null && n.id)) return;
      let r = { ...(t.get(n.id) || {}), ...n };
      if (String(n.id || "") === Wl || /comfly/i.test(String(n.name || ""))) {
        r = {
          ...(t.get(ff) || Xl[0]),
          ...n,
          id: ff,
          name: (t.get(ff) || Xl[0]).name,
          baseUrl: "",
        };
      }
      t.set(r.id, r);
    }),
    Array.from(t.values())
  );
}
function EC() {
  var d;
  const e = SC(localStorage.getItem(ny), null);
  if (!e) return tn;
  const t = kC((d = e.platforms) != null && d.length ? e.platforms : []),
    n = t.find((c) => c.id === e.activePlatformId),
    r = !!(n && (n.id !== ff || n.baseUrl || n.apiKey)),
    i =
      e.defaultImageModel === "nano-banana-pro-4k"
        ? "nano-banana-pro"
        : e.defaultImageModel === "gemini-3.1-flash-image-preview-4k"
          ? "gemini-3.1-flash-image-preview"
          : e.defaultImageModel,
    l = r ? e.activePlatformId : tn.activePlatformId,
    a = t.find((c) => c.id === l) || t[0],
    u = kt(a),
    o = Up(a),
    s = o.includes(e.defaultTextModel) ? e.defaultTextModel : o[0] || "";
  return {
    ...tn,
    ...e,
    platforms: t,
    activePlatformId: l,
    defaultTextModel: s,
    defaultImageModel: u.includes(i) ? i : u[0] || "",
  };
}
function _C(e) {
  localStorage.setItem(ny, JSON.stringify(e));
}
function Ft(e = "id") {
  return `${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function Ps(e) {
  return (e || "").trim().replace(/\s+/g, "").replace(/\/+$/, "");
}
function NC(e) {
  return (
    String(e || "").startsWith("/") ? String(e || "") : `/${e || ""}`
  ).replace(/^\/v1(?=\/|$)/i, "");
}
function CC(e) {
  const t = [
    "chat/completions",
    "images/generations",
    "images/generation",
    "images/edits",
    "images/variations",
    "images/upscales",
    "models",
  ];
  for (const n of t)
    if (e.endsWith(`/${n}`)) return e.replace(new RegExp(`/${n}$`), "");
  return e;
}
function MC(e, t) {
  const n = Ps(e);
  if (!n) return "";
  const r = NC(t);
  let o = CC(n);
  return (/\/v1$/i.test(o) || (o = `${o}/v1`), `${o}${r}`);
}
function Xt(e, t) {
  const n = typeof e == "object" ? (e == null ? void 0 : e.baseUrl) : e;
  return MC(n, t);
}
function iy(e) {
  return String(e || "")
    .trim()
    .toLowerCase();
}
function Hn(e) {
  if (e && typeof e == "object") {
    if (String(e.id || "") === Wl || /comfly/i.test(String(e.name || "")))
      return !0;
  }
  return !1;
}
function sy(e) {
  return String((e == null ? void 0 : e.id) || "") === ff;
}
function IC(e, t) {
  return (Hn(t) && oy[iy(e)]) || "";
}
function pf(e, t) {
  const n = iy(e);
  return Hn(t) ? oy[n] || "" : sy(t) && df.includes(n) ? Dn : "";
}
function PC(e, t) {
  return !t || t === Dn || !e || typeof e != "object" || e instanceof FormData
    ? e
    : { ...e, group: t };
}
function hf(e) {
  const t = String((e == null ? void 0 : e.message) || e || "").toLowerCase();
  return /unknown parameter|unrecognized|unsupported parameter|extra_forbidden|not permitted|invalid field|未知参数|不支持的参数/.test(
    t,
  );
}
function zC(e = "") {
  return /^[\x20-\x7E]+$/.test(String(e || ""));
}
function ly(e, t = "") {
  return (
    t &&
      zC(t) &&
      ((e["X-Comfly-Group"] = t),
      (e["X-Model-Group"] = t),
      (e["X-Channel-Group"] = t)),
    e
  );
}
function Xu(e, t = "") {
  const n = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${e || ""}`,
  };
  return ly(n, t);
}
function jC(e, t = "") {
  const n = { Authorization: `Bearer ${e || ""}` };
  return ly(n, t);
}
function TC(e) {
  return e ? (e.includes(",") ? e.split(",").pop() : e) : "";
}
function uo(e) {
  return typeof e == "string" && e.startsWith("data:image");
}
function ay(e) {
  return typeof e == "string" && /^https?:\/\//i.test(e.trim());
}
function Gl(e) {
  if (!e || typeof e != "string") return "";
  const t = e.trim().replace(/^['"]|['"]$/g, "");
  if (!t) return "";
  if (/^data:image\//i.test(t) || /^https?:\/\//i.test(t)) return t;
  const n = t.replace(/\s+/g, "");
  return n.length > 200 &&
    /^[A-Za-z0-9+/]+={0,2}$/.test(n) &&
    (n.startsWith("/9j/") ||
      n.startsWith("iVBOR") ||
      n.startsWith("R0lGOD") ||
      n.startsWith("UklGR") ||
      n.startsWith("PHN2Zy"))
    ? `data:${n.startsWith("/9j/") ? "image/jpeg" : n.startsWith("R0lGOD") ? "image/gif" : n.startsWith("UklGR") ? "image/webp" : n.startsWith("PHN2Zy") ? "image/svg+xml" : "image/png"};base64,${n}`
    : "";
}
function Xe(e, t) {
  const n = Gl(t);
  n && e.push(n);
}
function Rn(e = []) {
  const t = new Set();
  return e
    .map((n) => Gl(n))
    .filter(Boolean)
    .filter((n) => (t.has(n) ? !1 : (t.add(n), !0)));
}
function Gu(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    ((r.onload = () => t(r.result)),
      (r.onerror = () => n(new Error("读取图片失败"))),
      r.readAsDataURL(e));
  });
}
function $C(e) {
  const t = TC(e).replace(/\s+/g, "");
  if (!t) return 0;
  const n = t.endsWith("==") ? 2 : t.endsWith("=") ? 1 : 0;
  return Math.max(0, Math.floor((t.length * 3) / 4) - n);
}
function Ku(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    ((r.onload = () => t(r.result)),
      (r.onerror = () => n(new Error("压缩图片失败"))),
      r.readAsDataURL(e));
  });
}
function LC(e, t, n) {
  return new Promise((r, o) => {
    e.toBlob(
      (i) => {
        i ? r(i) : o(new Error("浏览器无法压缩这张图片"));
      },
      t,
      n,
    );
  });
}
function uy(e) {
  return new Promise((t, n) => {
    const r = new Image();
    ((r.onload = () => t(r)),
      (r.onerror = () => n(new Error("图片加载失败，无法压缩"))),
      (r.src = e));
  });
}
async function AC(e, t, n, r) {
  const o = document.createElement("canvas");
  ((o.width = t), (o.height = n));
  const i = o.getContext("2d");
  return (
    (i.fillStyle = "#ffffff"),
    i.fillRect(0, 0, t, n),
    i.drawImage(e, 0, 0, t, n),
    LC(o, "image/jpeg", r)
  );
}
async function DC(e, t = {}) {
  if (!uo(e)) return e;
  const n = t.targetBytes || 700 * 1024,
    r = t.minEdge || 640,
    o = $C(e);
  if (o && o <= n) return e;
  try {
    const i = await uy(e),
      s = i.naturalWidth || i.width || 1024,
      l = i.naturalHeight || i.height || 1024,
      a = Math.max(s, l),
      u = t.maxEdge || 1280;
    let d = Math.min(a, u),
      c = null;
    for (; d >= r; ) {
      const f = Math.min(1, d / a),
        p = Math.max(1, Math.round(s * f)),
        y = Math.max(1, Math.round(l * f));
      let x = t.initialQuality || 0.84;
      for (; x >= (t.minQuality || 0.56); ) {
        const S = await AC(i, p, y, x);
        if (((!c || S.size < c.size) && (c = S), S.size <= n)) return Ku(S);
        x -= 0.08;
      }
      d = Math.round(d * 0.82);
    }
    return c && (!o || c.size < o) ? Ku(c) : e;
  } catch {
    return e;
  }
}
async function cy(e) {
  const t = Rn(e || []),
    n = Math.max(1, t.filter(uo).length),
    r = Math.max(260 * 1024, Math.floor((1280 * 1024) / n)),
    o = r < 420 * 1024 ? 960 : r < 760 * 1024 ? 1280 : 1600,
    i = [];
  for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    uo(l) ? i.push(await DC(l, { targetBytes: r, maxEdge: o })) : i.push(l);
  }
  return Rn(i);
}
function RC(e, t) {
  const n = {
      "1:1": [1024, 1024],
      "2:3": [1024, 1536],
      "3:4": [1024, 1365],
      "9:16": [1024, 1792],
      "16:9": [1792, 1024],
      "4:3": [1365, 1024],
      "3:2": [1536, 1024],
    },
    r = t === "4k" ? 4 : t === "3k" ? 3 : t === "2k" ? 2 : 1,
    [o, i] = n[e] || n["1:1"];
  return `${Math.round(o * r)}x${Math.round(i * r)}`;
}
function gf(e) {
  return e && e !== "自适应" ? e : "";
}
function fy(e, t, n = mC) {
  const r = (a) => Math.max(256, Math.round(a / 16) * 16);
  let o = r(e),
    i = r(t);
  const s = o * i;
  if (s <= n) return { width: o, height: i };
  const l = Math.sqrt(n / s);
  for (o = r(o * l), i = r(i * l); o * i > n && (o > 256 || i > 256); )
    if (o >= i && o > 256) o = Math.max(256, o - 16);
    else if (i > 256) i = Math.max(256, i - 16);
    else break;
  return { width: o, height: i };
}
function OC(e, t) {
  if (e === "自适应") return "auto";
  const n = Yu[String(t).toLowerCase()] || Yu["1k"],
    [r, o] = String(e)
      .split(":")
      .map((d) => Number(d));
  if (!r || !o) return "auto";
  let i, s;
  r >= o
    ? ((i = n), (s = Math.round((n * o) / r)))
    : ((s = n), (i = Math.round((n * r) / o)));
  const l = (d) => Math.max(256, Math.round(d / 16) * 16);
  ((i = l(i)), (s = l(s)));
  const a = Math.max(i, s);
  if (a > n) {
    const d = n / a;
    ((i = l(i * d)), (s = l(s * d)));
  }
  const u = fy(i, s);
  return `${u.width}x${u.height}`;
}
function dy(e) {
  return e === "4k" || e === "3k" ? "high" : e === "2k" ? "medium" : "auto";
}
function qn(e) {
  return String(e || "1k").toUpperCase();
}
function Fp(e) {
  const [t, n] = String(e || "")
    .split(":")
    .map((r) => Number(r));
  return t && n ? t / n : 1;
}
function bC(e, t) {
  const n = (Number(e) || 1) / (Number(t) || 1);
  return vC.reduce((r, o) => {
    const i = Math.abs(Math.log(n / Fp(r)));
    return Math.abs(Math.log(n / Fp(o))) < i ? o : r;
  }, "1:1");
}
function mf(e, t = "", n = null) {
  const r = String(e || "1k").toLowerCase(),
    o = Hn(n) && !Li(t) ? yC : Yu;
  return o[r] || o["1k"];
}
function FC(e, { ratio: t, quality: n }) {
  const r = qn(n),
    o = gf(t) || "1:1",
    i = { image_size: r, imageSize: r, aspect_ratio: o, aspectRatio: o };
  (e.append("size", r),
    e.append("resolution", r),
    e.append("imageSize", r),
    e.append("image_config", JSON.stringify(i)),
    e.append("imageConfig", JSON.stringify(i)),
    e.append(
      "generation_config",
      JSON.stringify({ image_size: r, aspect_ratio: o, image_config: i }),
    ));
}
function Jn(e, t) {
  const n = String(e || "").toLowerCase();
  return (
    !Li(e) &&
    (xf(e) ||
      n.includes("gemini") ||
      n.includes("nano-banana") ||
      n.includes("nanobanana") ||
      /nano.*banana/.test(n))
  );
}
function buildGeminiImageEndpoint(e, t) {
  const n = typeof e == "object" ? e == null ? void 0 : e.baseUrl : e,
    r = Ps(n);
  if (!r) return "";
  let o = CC(r);
  o = o
    .replace(/\/v1beta(?:\/.*)?$/i, "")
    .replace(/\/v1(?:\/.*)?$/i, "")
    .replace(/\/images\/(?:generation|generations|edits)(?:\/.*)?$/i, "");
  return `${o}/v1beta/models/${encodeURIComponent(zs(t))}:generateContent`;
}
function normalizeGeminiBase64(e) {
  let t = String(e || "").trim();
  if (t.includes(",")) t = t.split(",").pop();
  t = t.replace(/^["']|["']$/g, "").replace(/\s+/g, "");
  t = t.replace(/-/g, "+").replace(/_/g, "/");
  const n = t.length % 4;
  n && (t += "=".repeat(4 - n));
  return t;
}
function parseGeminiInlineData(e) {
  const t = Gl(e) || String(e || "");
  if (!t) return null;
  const n = t.match(/^data:([^;,]+);base64,(.*)$/i);
  if (n) {
    return {
      mimeType: String(n[1] || "image/png"),
      data: normalizeGeminiBase64(n[2]),
    };
  }
  const r = normalizeGeminiBase64(t);
  if (!r) return null;
  return { mimeType: "image/jpeg", data: r };
}
async function buildGeminiImageParts(e = []) {
  const t = [];
  for (const n of Rn(e || [])) {
    const r = await JC(n),
      o = parseGeminiInlineData(r);
    o && t.push(o);
  }
  return t;
}
async function buildGeminiImageBody({
  model: e,
  prompt: t,
  ratio: n,
  quality: r,
  images: o = [],
}) {
  const u = qn(r || "1k"),
    a = gf(n) || "1:1",
    d =
      u === "4K"
        ? "Generate the final image in true 4K resolution. Use the highest available image size, keep details sharp and high resolution."
        : u === "3K"
          ? "Generate the final image in true 3K resolution, high resolution and sharp details."
          : u === "2K"
            ? "Generate the final image in true 2K resolution, high resolution and sharp details."
            : "Generate the final image at the selected resolution.";
  const i = [{ text: `${t}

Output requirement: ${d} Aspect ratio: ${a}. Image size: ${u}.` }],
    s = await buildGeminiImageParts(o);
  s.forEach((l) => {
    i.push({ inline_data: { mime_type: l.mimeType, data: l.data } });
  });
  return {
    contents: [{ role: "user", parts: i }],
    generation_config: {
      response_modalities: ["TEXT", "IMAGE"],
      image_config: {
        aspect_ratio: a,
        image_size: u,
      },
    },
  };
}

async function requestGeminiImage({
  platform: e,
  model: t,
  prompt: n,
  ratio: r,
  quality: o,
  images: i = [],
  requestGroup: s = "",
  onRequest: l,
}) {
  const a = buildGeminiImageEndpoint(e, t),
    u = await buildGeminiImageBody({
      model: t,
      prompt: n,
      ratio: r,
      quality: o,
      images: i,
    });
  l == null || l(a);
  return await wi(a, u, e.apiKey, 6e5, s);
}
function Qu({ model: e, prompt: t, ratio: n, quality: r, images: o = [] }) {
  const i = qn(r),
    s = gf(n) || "1:1",
    l = {
      model: e,
      prompt: t,
      response_format: "b64_json",
      aspect_ratio: s,
      image_size: i,
    },
    a = Rn(o || []);
  return (a.length && (l.image = a), l);
}
function py(
  e,
  {
    model: t,
    prompt: n,
    ratio: r,
    quality: o,
    n: i = 1,
    includeNativeImageConfig: s = !1,
  },
) {
  (e.append("model", t),
    e.append("prompt", n),
    e.append("n", String(i)),
    e.append("response_format", "b64_json"),
    e.append("aspect_ratio", gf(r) || "auto"),
    e.append("image_size", qn(o)),
    s && FC(e, { ratio: r, quality: o }));
}
function HC(e, t, n = "4k", r = "", o = null) {
  const i = Math.max(1, Math.round(Number(e) || 0)),
    s = Math.max(1, Math.round(Number(t) || 0));
  if (!i || !s) return "auto";
  const l = mf(n, r, o),
    a = Math.max(i, s),
    u = l / a,
    d = (p) => Math.max(256, Math.round(p / 16) * 16);
  let c = d(i * u),
    f = d(s * u);
  if (Li(r)) {
    const p = fy(c, f);
    ((c = p.width), (f = p.height));
  }
  return `${c}x${f}`;
}
function Zu(e, t = []) {
  var n, r, o, i, s, l, a, u, d;
  if (!e) return t;
  if (typeof e == "string") {
    const c = e.trim();
    return (
      Xe(t, c),
      (
        c.match(/!\[[^\]]*\]\((data:image\/[^)]+|https?:\/\/[^)]+)\)/g) || []
      ).forEach((x) => {
        const S = x.match(/\(([^)]+)\)/);
        S != null && S[1] && Xe(t, S[1]);
      }),
      (
        c.match(/data:image\/[a-zA-Z0-9.+-]+;base64,[a-zA-Z0-9+/=\s]+/g) || []
      ).forEach((x) => Xe(t, x)),
      (c.match(/https?:\/\/[^\s"')<>]+/gi) || []).forEach((x) => {
        (/\.(png|jpg|jpeg|webp|gif|avif|svg)(\?|#|$)/i.test(x) ||
          /\/image|\/images|\/file|\/files|\/media|\/asset|\/assets/i.test(
            x,
          )) &&
          Xe(t, x);
      }),
      t
    );
  }
  return Array.isArray(e)
    ? (e.forEach((c) => Zu(c, t)), t)
    : (typeof e == "object" &&
        (typeof e.b64_json == "string" && Xe(t, e.b64_json),
        typeof e.b64 == "string" && Xe(t, e.b64),
        typeof e.base64 == "string" && Xe(t, e.base64),
        typeof e.image == "string" && Xe(t, e.image),
        typeof e.imageData == "string" && Xe(t, e.imageData),
        typeof e.image_data == "string" && Xe(t, e.image_data),
        typeof e.data == "string" &&
          (r = (n = e.mime_type) == null ? void 0 : n.startsWith) != null &&
          r.call(n, "image/") &&
          Xe(t, `data:${e.mime_type};base64,${e.data}`),
        typeof e.data == "string" &&
          (i = (o = e.mimeType) == null ? void 0 : o.startsWith) != null &&
          i.call(o, "image/") &&
          Xe(t, `data:${e.mimeType};base64,${e.data}`),
        typeof e.url == "string" && Xe(t, e.url),
        e.image_url &&
          (typeof e.image_url == "string" && Xe(t, e.image_url),
          typeof ((s = e.image_url) == null ? void 0 : s.url) == "string" &&
            Xe(t, e.image_url.url)),
        (u =
          (a = (l = e.content) == null ? void 0 : l.type) == null
            ? void 0
            : a.startsWith) != null &&
          u.call(a, "image/") &&
          typeof ((d = e.content) == null ? void 0 : d.data) == "string" &&
          Xe(t, `data:${e.content.type};base64,${e.content.data}`),
        Object.values(e).forEach((c) => Zu(c, t))),
      t);
}
function xi(e) {
  return e
    ? typeof e == "string"
      ? e
      : Array.isArray(e)
        ? e.map(xi).filter(Boolean).join(`
`)
        : typeof e == "object"
          ? typeof e.text == "string"
            ? e.text
            : typeof e.content == "string"
              ? e.content
              : Object.values(e).map(xi).filter(Boolean).join(`
`)
          : ""
    : "";
}
function VC() {
  return typeof window > "u"
    ? !0
    : /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(window.location.hostname);
}
function BC(e = "") {
  return typeof window > "u" ||
    VC() ||
    (typeof e == "string" && e.startsWith("/"))
    ? !1
    : window.location.protocol === "http:" ||
        window.location.protocol === "https:";
}
function $i(e) {
  return BC(e) ? `/api/proxy?url=${encodeURIComponent(e)}` : e;
}
function UC(e) {
  const t = (e == null ? void 0 : e.message) || String(e || "");
  return /FUNCTION_PAYLOAD_TOO_LARGE|Request Entity Too Large|Payload Too Large|413/i.test(
    t,
  )
    ? "请求图片超过上游接口限制。请减少参考图数量，或先用 1k 生成。"
    : /Failed to fetch|NetworkError|Load failed/i.test(t)
      ? "网络请求失败。已走 OpenAI 兼容代理路径；请检查 API 地址是否正确、接口是否支持 CORS/代理访问，或上游服务是否超时。"
      : t;
}
async function hy(e) {
  var r;
  const t = await e.text();
  let n;
  try {
    n = t ? JSON.parse(t) : {};
  } catch {
    n = { raw: t };
  }
  if (!e.ok) {
    const o = String(t || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 800),
      i =
        ((r = n == null ? void 0 : n.error) == null ? void 0 : r.message) ||
        (n == null ? void 0 : n.message) ||
        o ||
        `HTTP ${e.status}`;
    throw new Error(`HTTP ${e.status}：${i}`);
  }
  return n;
}
async function co(e, t = {}, n = 6e4) {
  const r = new AbortController(),
    o = window.setTimeout(() => r.abort(), n),
    i = $i(e);
  try {
    return await fetch(i, { ...t, signal: r.signal });
  } catch (s) {
    if ((s == null ? void 0 : s.name) === "AbortError")
      throw new Error(
        `请求超时（${Math.round(n / 1e3)} 秒） 实际请求地址：${i || e}`,
      );
    const l = UC(s);
    throw new Error(`${l} 实际请求地址：${i || e}`);
  } finally {
    window.clearTimeout(o);
  }
}
async function wi(e, t, n, r = 6e5, o = "") {
  const i = $i(e),
    s = async (l, a = !0) => {
      const u = a ? PC(l, o) : l,
        d = await co(
          e,
          { method: "POST", headers: Xu(n, o), body: JSON.stringify(u) },
          r,
        );
      return await hy(d);
    };
  try {
    return await s(t, !0);
  } catch (l) {
    if (o && o !== Dn && hf(l))
      try {
        return await s(t, !1);
      } catch (a) {
        throw new Error(`${a.message} 实际请求地址：${i || e}`);
      }
    throw new Error(`${l.message} 实际请求地址：${i || e}`);
  }
}
async function gy(e, t, n, r = 6e5, o = "") {
  const i = $i(e),
    s = async (l = !0) => {
      const a = t;
      l && o && o !== Dn && !a.has("group") && a.append("group", o);
      const u = await co(e, { method: "POST", headers: jC(n, o), body: a }, r);
      return await hy(u);
    };
  try {
    return await s(!0);
  } catch (l) {
    if (o && o !== Dn && hf(l))
      try {
        return (t.delete("group"), await s(!1));
      } catch (a) {
        throw new Error(`${a.message} 实际请求地址：${i || e}`);
      }
    throw new Error(`${l.message} 实际请求地址：${i || e}`);
  }
}
function mJ() {
  return typeof window < "u" ? window.__AI2_MJ_API : null;
}
function SJ(e, t) {
  const n = (typeof e == "object" ? e == null ? void 0 : e.baseUrl : e) || "";
  return `${String(n).trim().replace(/\/+$/, "").replace(/\/v1$/i, "")}${t}`;
}
async function yJ(e, t, n) {
  const r = mJ();
  if (!r) throw new Error("Midjourney 运行时模块未加载，请刷新页面后重试。");
  const o = r.parseMidjourneySubmit(t),
    i = await r.pollMidjourneyTask({
      baseUrl: e.baseUrl,
      apiKey: e.apiKey,
      mode: n,
      taskId: o.taskId,
      fetchImpl: (s, l) => co(s, l, 6e5),
    });
  return i;
}
function kJ(e) {
  return typeof e == "string" ? e : String((e == null ? void 0 : e.imageUrl) || (e == null ? void 0 : e.image) || "").trim();
}
function wJ(e) {
  const t = kJ(e);
  return e && typeof e == "object" && e.mjTaskId && t
    ? {
        image: t,
        mjTaskId: e.mjTaskId,
        mjMode: e.mjMode,
        mjButtons: Array.isArray(e.mjButtons) ? e.mjButtons : [],
      }
    : null;
}
async function xJ({ platform: e, model: t, prompt: n, base64Array: r = [], operation: o = "imagine", requestGroup: i = "", onRequest: h }) {
  const s = mJ();
  if (!s) throw new Error("Midjourney 运行时模块未加载，请刷新页面后重试。");
  const l = s.resolveMidjourneyMode(t),
    a = s.buildMidjourneyRequest(
      l,
      o,
      o === "blend" ? { base64Array: r } : { prompt: n, base64Array: r },
    ),
    u = SJ(e, a.path);
  h == null || h(u);
  const d = await yJ(e, await wi(u, a.body, e.apiKey, 6e5), l);
  if (!d.imageUrl)
    throw new Error(d.failReason || "Midjourney 任务已完成，但没有返回图片地址。");
  return {
    imageUrl: d.imageUrl,
    mjTaskId: d.id,
    mjMode: l,
    mjButtons: d.buttons,
  };
}
async function WC(e, t) {
  var i, s, l;
  const r = await (await fetch(e)).blob(),
    o =
      (i = r.type) != null && i.includes("jpeg")
        ? "jpg"
        : (s = r.type) != null && s.includes("webp")
          ? "webp"
          : (l = r.type) != null && l.includes("gif")
            ? "gif"
            : "png";
  return new File([r], `reference-${t + 1}.${o}`, {
    type: r.type || "image/png",
  });
}
function YC(e, t, n, r, o) {
  const i = o
    ? `

上游已连接 ${o} 张参考图。请严格把它们按连接顺序理解为：${Array.from({ length: o }, (s, l) => `图${l + 1}`).join("、")}。如果提示词提到“图一/图1/第一张”，就是第 1 张参考图；提到“图二/图2/第二张”，就是第 2 张参考图。生成时必须明确参考这些上游图片，不要只根据文字想象。`
    : "";
  return `${e}${i}

本次只生成 ${t} 张完整图片。不要把多张结果拼接到同一张画布里，也不要做成上下拼图。画面比例：${n}。画质：${r}。`;
}
function Ar(e) {
  return e.platforms.find((t) => t.id === e.activePlatformId) || e.platforms[0];
}
function Dt(e, t) {
  var n;
  return (
    ((n = e == null ? void 0 : e.platforms) == null
      ? void 0
      : n.find((r) => r.id === t)) || Ar(e)
  );
}
function Kl(e, t) {
  var o;
  return ((o = e == null ? void 0 : e.platforms) != null && o.length
    ? e.platforms
    : Xl
  ).some((i) => i.id === t)
    ? t
    : (e == null ? void 0 : e.activePlatformId) || ff;
}
function kt(e, t = "") {
  return VM(e);
}
function gr(e) {
  return kt(e)[0] || "";
}
function Ql(e) {
  return gr(e);
}
function Hp(e, t) {
  const n = String(e || "").trim();
  if (Hn(t)) {
    if (
      n === "gemini-3.1-flash-image" ||
      n === "gemini-3.1-flash-image-preview-4k"
    )
      return "gemini-3.1-flash-image-preview";
    if (n === "nano-banana-pro-4k") return "nano-banana-pro";
  }
  return n;
}
function Si(e, t = {}, n = "generateNode") {
  const r = Kl(e, t.platformId),
    o = Dt(e, r),
    i = kt(o),
    s = Hp(e == null ? void 0 : e.defaultImageModel, o);
  if (t.modelSource !== "manual") return i.includes(s) ? s : gr(o);
  const l = Hp(t.model, o);
  return i.includes(l) ? l : gr(o);
}
function Vp(e, t = {}, n = "generateNode") {
  const r = Kl(e, t.platformId);
  Dt(e, r);
  const o = Si(e, { ...t, platformId: r }, n),
    i = {
      platformId: r,
      model: o,
      modelSource: t.modelSource === "manual" ? "manual" : "default",
    };
  return (n === "upscaleNode" && (i.quality = t.quality || Yl), i);
}
function Bp(e = {}, t = {}) {
  return Object.keys(t).every((n) => e[n] === t[n]);
}
function XC(e, t) {
  return Hn(t) ? pf(e, t) || Dn : "default";
}
function Up(e, t = "") {
  return BM(e);
}
function yf(e) {
  return (e == null ? void 0 : e.name) || "选择 API";
}
function GC(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((n, r) => n === t[r]);
}
function KC(e = [], t = []) {
  const n = new Set([
      "reverseNode",
      "generateNode",
      "upscaleNode",
      "angleNode",
      "videoNode",
    ]),
    r = e.filter((l) => n.has(l.type)),
    o = new Set(r.map((l) => l.id)),
    i = new Set(o),
    s = [];
  for (; i.size; ) {
    const l = r.filter((u) =>
        i.has(u.id)
          ? !t.some(
              (d) => d.target === u.id && i.has(d.source) && o.has(d.source),
            )
          : !1,
      ),
      a = l.length ? l : r.filter((u) => i.has(u.id)).slice(0, 1);
    (a.forEach((u) => i.delete(u.id)), s.push(a));
  }
  return s;
}
function QC() {
  return new Promise((e) => {
    if (typeof window > "u" || !window.requestAnimationFrame) {
      setTimeout(e, 0);
      return;
    }
    window.requestAnimationFrame(() => window.requestAnimationFrame(e));
  });
}
function vf(e, t) {
  const n = Dt(e, t);
  if (!(n != null && n.baseUrl))
    throw new Error("请先在右上角「API 设置」填写 API 地址。");
  if (!(n != null && n.apiKey))
    throw new Error(`请先在右上角「API 设置」给「${yf(n)}」填写 API 密钥。`);
  return n;
}
function Li(e) {
  return String(e || "")
    .toLowerCase()
    .includes("gpt-image");
}
function ZC(e) {
  return String(e || "")
    .toLowerCase()
    .includes("gpt-image-2-4k");
}
function dl(e) {
  const t = String(e || "").toLowerCase();
  return (
    !!t &&
    (t === "gpt-image-2" ||
      t === "gpt-image-2-4k" ||
      t === "gemini-3.1-flash-image-preview" ||
      t === "gemini-3.1-flash-image-preview-4k" ||
      t === "gemini-3.1-flash-image" ||
      t === "nano-banana-pro" ||
      t === "nano-banana-pro-4k" ||
      /gemini.*image/.test(t) ||
      /nano.*banana/.test(t) ||
      !Wo.includes(e))
  );
}
function xf(e) {
  const t = String(e || "").toLowerCase();
  return (
    t === "gemini-3.1-flash-image-preview" ||
    t === "gemini-3.1-flash-image-preview-4k" ||
    t === "gemini-3.1-flash-image" ||
    t === "nano-banana-pro" ||
    t === "nano-banana-pro-4k" ||
    /gemini.*image/.test(t) ||
    /nano.*banana/.test(t)
  );
}
function pl(e, t, n) {
  if (!sy(n) || Li(t) || !xf(t)) return !1;
  const r = String((e == null ? void 0 : e.message) || e || "");
  return /HTTP 404|HTTP 405|method not allowed|not found|not supported|unsupported endpoint|接口不存在|不支持/i.test(
    r,
  );
}
function qC(e, t = []) {
  const n = [{ type: "text", text: e }];
  return (
    t.filter(Boolean).forEach((r) => {
      n.push({ type: "image_url", image_url: { url: r } });
    }),
    n
  );
}
async function hl({
  platform: e,
  model: t,
  prompt: n,
  images: r = [],
  requestGroup: o = "",
  onRequest: i,
}) {
  const s = Xt(e, "/chat/completions"),
    l = {
      model: t,
      stream: !1,
      messages: [{ role: "user", content: qC(n, r) }],
    };
  i == null || i(s);
  const a = await wi(s, l, e.apiKey, 6e5, o);
  return Yr(a, r);
}
function zs(e) {
  const t = String(e || "").toLowerCase();
  return t === "gpt-image-2-4k"
    ? "gpt-image-2"
    : t === "gemini-3.1-flash-image-preview-4k"
      ? "gemini-3.1-flash-image-preview"
      : t === "nano-banana-pro-4k"
        ? "nano-banana-pro"
        : e;
}
function Yr(e, t = []) {
  const n = Rn(Zu(e));
  if (n.length === 1 && t.includes(n[0]))
    throw new Error("接口返回的是原始参考图，疑似没有真正执行图片处理。");
  if (n.length) return n[0];
  const o = xi(e).slice(0, 800);
  throw new Error(o || "接口返回了内容，但没有解析到图片。");
}
const videoGoogleOmniEndpoint =
  "https://api.wuyinkeji.com/api/async/video_google_omni";
function parseUrlList(e = "") {
  return PM(e).filter((t) => /^https?:\/\//i.test(t));
}
function findVideoUrl(e) {
  if (!e) return "";
  if (typeof e == "string") {
    const t = e.trim();
    return /^https?:\/\//i.test(t) && /\.(mp4|mov|webm|m4v)(\?|#|$)/i.test(t)
      ? t
      : "";
  }
  if (Array.isArray(e)) {
    for (const t of e) {
      const n = findVideoUrl(t);
      if (n) return n;
    }
    return "";
  }
  if (typeof e == "object") {
    for (const t of ["video", "video_url", "videoUrl", "url", "output", "result"]) {
      const n = findVideoUrl(e[t]);
      if (n) return n;
    }
    for (const t of Object.values(e)) {
      const n = findVideoUrl(t);
      if (n) return n;
    }
  }
  return "";
}
function findTaskId(e) {
  if (!e || typeof e != "object") return "";
  return String(
    e.id ||
      e.task_id ||
      e.taskId ||
      e.request_id ||
      e.requestId ||
      (e.data && typeof e.data == "object" ? findTaskId(e.data) : "") ||
      (typeof e.data == "string" && !/^https?:\/\//i.test(e.data) ? e.data : "") ||
      "",
  );
}
function parseVideoResult(e) {
  return { id: findTaskId(e), url: findVideoUrl(e), raw: e };
}
async function runVideoGeneration({
  settings: e,
  nodeData: t,
  upstreamText: n,
  upstreamImages: r,
  onRequest: o,
}) {
  const i = Dt(e, t.platformId || e.activePlatformId);
  if (!(i != null && i.apiKey))
    throw new Error(`请先在右上角「API 设置」给「${yf(i)}」填写 API 密钥。`);
  const s = [n, t.prompt]
    .filter(Boolean)
    .join(`

`)
    .trim();
  if (!s)
    throw new Error(
      "这个视频生成节点没有提示词，请先输入提示词或连接文本节点。",
    );
  const l = parseUrlList(t.imageUrls || ""),
    a = Rn(r || []).filter((u) => ay(u)),
    u = [...l, ...a].slice(0, 7),
    d = {
      prompt: s,
      size: t.size || "1280x720",
      duration: String(t.duration || "10"),
    };
  (u.length && (d.images = u.join(",")),
    t.videoUrl && ay(t.videoUrl) && (d.video = t.videoUrl.trim()));
  const c = `${videoGoogleOmniEndpoint}?key=${encodeURIComponent(i.apiKey || "")}`;
  o == null || o(videoGoogleOmniEndpoint);
  const f = await co(
      c,
      {
        method: "POST",
        headers: {
          Authorization: i.apiKey || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
      },
      6e5,
    ),
    p = await hy(f),
    y = parseVideoResult(p);
  if (!y.id && !y.url)
    throw new Error(
      (p == null ? void 0 : p.msg) ||
        xi(p).slice(0, 800) ||
        "视频接口已返回，但没有解析到任务 ID 或视频地址。",
    );
  return y;
}
function my(e) {
  return new Promise((t) => {
    if (!e || typeof Image > "u") {
      t(null);
      return;
    }
    const n = new Image();
    ((n.onload = () => {
      const r = n.naturalWidth || n.width,
        o = n.naturalHeight || n.height;
      t(r && o ? { width: r, height: o } : null);
    }),
      (n.onerror = () => t(null)),
      (n.src = e));
  });
}
async function yy(e, t = 0) {
  if (uo(e)) return WC(e, t);
  if (ay(e)) {
    const n = await co($i(e), { method: "GET" }, 12e4);
    if (!n.ok) throw new Error(`参考图下载失败：HTTP ${n.status}`);
    const r = await n.blob(),
      o = r.type || "image/png",
      i = o.includes("jpeg") ? "jpg" : o.includes("webp") ? "webp" : "png";
    return new File([r], `reference-${t + 1}.${i}`, { type: o });
  }
  throw new Error("参考图格式不支持，请使用上传图片或可访问的图片 URL。");
}
async function JC(e) {
  if (uo(e)) return e;
  if (ay(e)) {
    const t = await co($i(e), { method: "GET" }, 12e4);
    if (!t.ok) throw new Error(`输出图下载失败：HTTP ${t.status}`);
    return await Ku(await t.blob());
  }
  return Gl(e);
}
async function eM(e, t) {
  const n = await JC(e);
  if (!n) return e;
  const r = await uy(n),
    o = r.naturalWidth || r.width,
    i = r.naturalHeight || r.height,
    s = Math.max(o, i);
  if (!s || s >= t * 0.98) return e;
  const l = t / s,
    a = Math.max(1, Math.round(o * l)),
    u = Math.max(1, Math.round(i * l)),
    d = document.createElement("canvas");
  ((d.width = a), (d.height = u));
  const c = d.getContext("2d");
  return (
    (c.imageSmoothingEnabled = !0),
    (c.imageSmoothingQuality = "high"),
    c.drawImage(r, 0, 0, a, u),
    d.toDataURL("image/jpeg", 0.95)
  );
}
async function fs(e, t, n, r) {
  const o = mf(t, n, r),
    i = await my(e);
  return (i ? Math.max(i.width, i.height) : 0) >= o * 0.98 ? e : await eM(e, o);
}
async function tM({
  settings: e,
  nodeData: t,
  upstreamText: n,
  upstreamImages: r,
  onRequest: o,
}) {
  const i = vf(e, t.platformId),
    s = [n, t.prompt]
      .filter(Boolean)
      .join(
        `

`,
      )
      .trim();
  if (!s && t.mjOperation !== "blend")
    throw new Error(
      "这个图片生成节点没有提示词，请先输入提示词或连接文本节点。",
    );
  const l = Math.max(1, Number(t.count || 1)),
    a = kt(i),
    u = a.includes(e.defaultImageModel) ? e.defaultImageModel : gr(i),
    d = t.model || u,
    c = d && (dl(d) || xf(d) || Jn(d, i)) ? d : u,
    f = pf(c, i),
    p = Rn(r || []),
    y = await cy(p),
    x = t.ratio || "1:1",
    S = t.quality || (ZC(c) ? "4k" : "1k"),
    g = (w) => {
      const _ = zs(w),
        N = Li(_),
        M = OC(x, S),
        k = RC(x, S);
      return {
        requestModel: _,
        size: N ? M : k,
        requestQuality: N ? dy(S) : S,
      };
    },
    v = async () => {
      const w = YC(s, 1, x, S, p.length),
        _ = async (M) => {
          const { requestModel: k, size: j, requestQuality: R } = g(M);
          if (mJ()?.isMidjourneyModel(k))
            return await xJ({
              platform: i,
              model: k,
              prompt: w,
              requestGroup: f,
              onRequest: o,
            });
          if (Jn(k, i) || Jn(M, i)) {
            try {
              const P = await requestGeminiImage({
                platform: i,
                model: k,
                prompt: w,
                ratio: x,
                quality: S,
                images: [],
                requestGroup: f,
                onRequest: o,
              });
              return Yr(P);
            } catch (P) {
              if (pl(P, k, i))
                return await hl({
                  platform: i,
                  model: k,
                  prompt: w,
                  images: [],
                  requestGroup: f,
                  onRequest: o,
                });
              throw P;
            }
          }
          const P = { model: k, prompt: w, n: 1, size: j, quality: R },
            L = Xt(i, "/images/generations");
          o == null || o(L);
          try {
            const F = await wi(L, P, i.apiKey, 6e5, f);
            return Yr(F);
          } catch (F) {
            if (pl(F, k, i))
              return await hl({
                platform: i,
                model: k,
                prompt: w,
                images: [],
                requestGroup: f,
                onRequest: o,
              });
            throw F;
          }
        },
        N = async (M) => {
          const { requestModel: k, size: j, requestQuality: R } = g(M);
          if (mJ()?.isMidjourneyModel(k))
            return await xJ({
              platform: i,
              model: k,
              prompt: w,
              base64Array: y,
              operation: t.mjOperation === "blend" ? "blend" : "imagine",
              requestGroup: f,
              onRequest: o,
            });
          if (Jn(k, i) || Jn(M, i)) {
            try {
              const P = await requestGeminiImage({
                platform: i,
                model: k,
                prompt: w,
                ratio: x,
                quality: S,
                images: y,
                requestGroup: f,
                onRequest: o,
              });
              return Yr(P, p);
            } catch (P) {
              if (pl(P, k, i))
                return await hl({
                  platform: i,
                  model: k,
                  prompt: w,
                  images: y,
                  requestGroup: f,
                  onRequest: o,
                });
              throw P;
            }
          }
          const P = new FormData();
          P.append("model", k),
            P.append("prompt", w),
            P.append("n", "1"),
            P.append("size", j),
            P.append("quality", R);
          const L = await Promise.all(y.map((E, $) => yy(E, $)));
          if (!L.length) throw new Error("没有可用的参考图文件。");
          L.forEach((E) => P.append("image", E));
          const F = Xt(i, "/images/edits");
          o == null || o(F);
          try {
            const E = await gy(F, P, i.apiKey, 6e5, f);
            return mJ()?.isMidjourneyModel(k) ? await yJ(i, E) : Yr(E, p);
          } catch (E) {
            if (pl(E, k, i))
              return await hl({
                platform: i,
                model: k,
                prompt: w,
                images: y,
                requestGroup: f,
                onRequest: o,
              });
            throw E;
          }
        };
      if (dl(c)) return y.length ? await N(c) : await _(c);
      throw new Error(`当前模型 ${c} 没有可用的图片生成路由。`);
    };
  return await Promise.all(
    Array.from({ length: l }, async (w, _) => {
      const N = await v(),
        M = kJ(N) || Gl(N);
      if (!M) throw new Error(`第 ${_ + 1} 张结果没有成功解析成图片。`);
      return wJ(N) || M;
    }),
  );
}
async function nM({
  settings: e,
  nodeData: t,
  upstreamImages: n,
  upstreamMidjourneyTasks: Z = [],
  onRequest: r,
}) {
  const o = vf(e, t.platformId),
    i = Rn(n || [])[0];
  if (!i) throw new Error("高清放大节点需要先连接一张图片。");
  const s = kt(o),
    l = Ql(o),
    a = t.model || l,
    u = a && (dl(a) || xf(a) || Jn(a, o)) ? a : l,
    d = pf(u, o),
    c = zs(u),
    f = t.quality || Yl,
    y = (await cy([i]))[0] || i,
    x = await my(i),
    S = x ? bC(x.width, x.height) : "1:1",
    g = mf(f, c, o),
    v = x ? HC(x.width, x.height, f, c, o) : `${g}x${g}`,
    h = x
      ? `Original image size: ${x.width}x${x.height}. Recreate it at ${qn(f)} resolution with the same aspect ratio. Target long edge is about ${g}px and target size is about ${v}.`
      : `Recreate this image at ${qn(f)} resolution with the same aspect ratio. Target long edge is about ${g}px.`,
    w = `Recreate this reference image as a high-resolution ${qn(f)} image. Keep the same composition, subject, colors, proportions, perspective, structure, and important details. Do not redesign, do not deform, do not add extra elements, and do not change the layout. This is a faithful high-resolution redraw of the original image, not a new design. ${h} Return one single final image.`,
    _ = `Recreate this image in ${qn(f)}. Keep the same composition, subject, proportions, colors, and details. Do not change or redesign anything. Return one image.`,
    N = async (j, R = !1) => {
      const P = new FormData();
      Jn(c, o)
        ? py(P, {
            model: c,
            prompt: j,
            ratio: S,
            quality: f,
            n: 1,
            includeNativeImageConfig: R,
          })
        : (P.append("model", c),
          P.append("prompt", j),
          P.append("n", "1"),
          P.append("size", v),
          P.append("quality", dy(f)));
      const L = await yy(y, 0);
      return (P.append("image", L), P);
    },
    M = async () => {
      const j = async (R) =>
        await requestGeminiImage({
          platform: o,
          model: c,
          prompt: R,
          ratio: S,
          quality: f,
          images: [y],
          requestGroup: d,
          onRequest: r,
        });
      let P;
      try {
        P = await j(w);
      } catch (R) {
        const F = String((R == null ? void 0 : R.message) || "");
        if (
          /HTTP 422|could not generate an image|image safety|given prompt/i.test(
            F,
          )
        )
          P = await j(_);
        else if (pl(R, c, o)) {
          const E = await hl({
            platform: o,
            model: c,
            prompt: w,
            images: [y],
            requestGroup: d,
            onRequest: r,
          });
          return await fs(E, f, c, o);
        } else throw R;
      }
      const L = Yr(P, [i]);
      return await fs(L, f, c, o);
    },
    k = async () => {
      if (Jn(c, o)) return await M();
      if (mJ()?.isMidjourneyModel(c)) {
        const F = Z.find((E) => E.image === i) || Z[0],
          E = mJ();
        if (!F)
          throw new Error(
            "ZX Midjourney 放大需要连接一张由 Midjourney 完成任务生成的图片。",
          );
        const $ = (F.mjButtons || []).find(
          (X) => X.customId === t.mjActionCustomId,
        );
        if (!$)
          throw new Error(
            "请选择原 Midjourney 任务返回的放大、变体或重绘按钮后再运行。",
          );
        const T = E.buildMidjourneyAction(
            { id: F.mjTaskId, buttons: F.mjButtons },
            $,
          ),
          D = E.buildMidjourneyRequest(F.mjMode, "action", T),
          C = SJ(o, D.path);
        r == null || r(C);
        const I = await yJ(
          o,
          await wi(C, D.body, o.apiKey, 6e5),
          F.mjMode,
        );
        return {
          imageUrl: I.imageUrl,
          mjTaskId: I.id,
          mjMode: F.mjMode,
          mjButtons: I.buttons,
        };
      }
      const j = Xt(o, "/images/edits");
      r == null || r(j);
      const R = async (F, E) => {
        const $ = await N(F, E);
        return await gy(j, $, o.apiKey, 6e5, d);
      };
      let P;
      try {
        P = await R(w, Jn(c, o));
      } catch (F) {
        const E = String((F == null ? void 0 : F.message) || "");
        if (
          /HTTP 422|could not generate an image|image safety|given prompt/i.test(
            E,
          )
        )
          P = await R(_, Jn(c, o));
        else if (hf(F)) P = await R(w, !1);
        else if (pl(F, c, o)) {
          const $ = await hl({
            platform: o,
            model: c,
            prompt: w,
            images: [y],
            requestGroup: d,
            onRequest: r,
          });
          return await fs($, f, c, o);
        } else throw F;
      }
      const L = Yr(P, [i]);
      return await fs(L, f, c, o);
    };
  if (dl(c)) return [await k()];
  throw new Error(`当前模型 ${u} 没有可用的高清重绘路由。`);
}
async function rM({ settings: e, nodeData: t, upstreamImages: n }) {
  var d, c, f, p, y, x, S, g;
  const r = vf(e, t.platformId),
    o = Rn(n || [])[0];
  if (!o) throw new Error("反推提示词节点需要先连接一个图片节点。");
  const i = Array.from(
    new Set([...Up(r), ...kt(r).filter((l) => mJ()?.isMidjourneyModel(l))]),
  ).includes(t.model)
    ? t.model
    : e.defaultTextModel;
  if (!i) throw new Error("请先在 API 设置里添加文本模型 / 反推模型。");
  if (mJ()?.isMidjourneyModel(i)) {
    const l = mJ(),
      a = l.resolveMidjourneyMode(i),
      u = (await cy([o]))[0];
    if (!u) throw new Error("无法读取图片，不能执行 Midjourney Describe。");
    const d = l.buildMidjourneyRequest(a, "describe", { base64: u }),
      c = await yJ(
        r,
        await wi(SJ(r, d.path), d.body, r.apiKey, 6e5),
        a,
      );
    if (!c.prompt)
      throw new Error("Midjourney Describe 已完成，但任务没有返回反推提示词。");
    return c.prompt;
  }
  const s = IC(i, r),
    l = {
      model: i,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `请观察这张图片，反推出适合 AI 绘图的中文详细提示词，必须用中文输出。

输出格式固定为：
【简略总览】
用 1-2 句话概括图片主体、场景和整体风格。

【详细提示词】
主体与场景：详细描述画面主体、环境、道具和关键元素。
构图与镜头：描述视角、景别、画幅比例、主体位置、透视关系、焦段/景深。
光影与色彩：描述光源方向、明暗关系、氛围、色调、饱和度、对比度。
材质与细节：描述产品/服装/皮肤/金属/玻璃/水珠/纹理等可见材质。
人物与动作：如果有人物，描述年龄气质、姿势、手部动作、表情、穿搭；没有人物则写“无人物”。
风格与质感：描述商业摄影、海报、写实渲染、时尚大片等风格关键词。
负面限制：列出不要变形、不要多余文字、不要错误结构、不要低清晰度等限制。

要求：不要只给短句，要像可直接复制到生图节点的完整提示词。`,
            },
            { type: "image_url", image_url: { url: o } },
          ],
        },
      ],
    },
    a = await wi(Xt(r, "/chat/completions"), l, r.apiKey, 6e5, s),
    u =
      ((f =
        (c = (d = a == null ? void 0 : a.choices) == null ? void 0 : d[0]) ==
        null
          ? void 0
          : c.message) == null
        ? void 0
        : f.content) ||
      ((x =
        (y = (p = a == null ? void 0 : a.choices) == null ? void 0 : p[0]) ==
        null
          ? void 0
          : y.delta) == null
        ? void 0
        : x.content) ||
      xi(
        (g = (S = a == null ? void 0 : a.choices) == null ? void 0 : S[0]) ==
          null
          ? void 0
          : g.message,
      ) ||
      xi(a);
  if (!u.trim()) throw new Error("接口已返回，但没有解析到中文提示词。");
  return u.trim();
}
function oM(e = "") {
  const t = String(e || "选择模型");
  if (t.includes("-preview-")) {
    const [n, r] = t.split("-preview-");
    return [n, `preview-${r}`];
  }
  if (t.length > 28 && t.includes("-")) {
    const n = t.split("-"),
      r = [],
      o = [];
    let i = 0;
    return (
      n.forEach((s, l) => {
        const a = i < t.length / 2 || !r.length ? r : o;
        (a.push(s), a === r && (i += s.length + (l ? 1 : 0)));
      }),
      [r.join("-"), o.join("-")].filter(Boolean)
    );
  }
  return [t];
}
function Zl({ value: e }) {
  return m.jsx("span", {
    className: "model-label-lines",
    children: oM(e).map((t) => m.jsx("span", { children: t }, t)),
  });
}
function Dr({
  icon: e,
  text: t,
  title: n,
  onClick: r,
  className: o = "",
  active: i = !1,
  children: s,
}) {
  const l = n || (typeof t == "string" ? t : "");
  return m.jsxs("button", {
    className: `icon-badge ${i ? "active" : ""} ${o}`,
    title: l,
    onClick: r,
    type: "button",
    children: [
      e ? m.jsx(e, { size: 13 }) : null,
      m.jsx("span", { className: "badge-text", children: s || t }),
    ],
  });
}
function iM({ ratio: e }) {
  const t = `ratio-visual ratio-${String(e).replace(":", "-")}`;
  return m.jsxs("span", {
    className: "ratio-option-inner",
    children: [
      e === "自适应"
        ? m.jsx("span", { className: "ratio-visual ratio-auto", children: "□" })
        : m.jsx("span", { className: t }),
      m.jsx("span", { children: e }),
    ],
  });
}
function Rr({ type: e, options: t, value: n, onPick: r, onClose: o }) {
  const i = [
    "option-popover",
    e === "model" ? "option-popover-model" : "",
    e === "ratio" ? "option-popover-ratio" : "",
    e === "count" ? "option-popover-count" : "",
    e === "quality" ? "option-popover-quality" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return m.jsx("div", {
    className: `${i} nodrag nopan`,
    children: t.map((s) => {
      const l = typeof s == "object" ? s.value : s,
        a = typeof s == "object" ? s.label : s,
        d = String(l) === String(n);
      return m.jsx(
        "button",
        {
          type: "button",
          className: d ? "active" : "",
          onClick: (c) => {
            (c.stopPropagation(), r(l), o == null || o());
          },
          children:
            e === "model"
              ? m.jsx(Zl, { value: String(a) })
              : e === "ratio"
                ? m.jsx(iM, { ratio: String(a) })
                : m.jsx("span", { children: a }),
        },
        l,
      );
    }),
  });
}
function Lt(e) {
  e.stopPropagation();
}
function Ai({
  children: e,
  title: t,
  icon: n,
  status: r,
  selected: o,
  className: i = "",
}) {
  return m.jsxs("div", {
    className: `node-shell ${o ? "selected" : ""} ${i}`,
    children: [
      m.jsxs("div", {
        className: "node-header",
        children: [
          m.jsxs("div", {
            className: "node-title",
            children: [
              n ? m.jsx(n, { size: 14 }) : null,
              m.jsx("span", { children: t }),
            ],
          }),
          m.jsx("span", { className: "node-status", children: r || "就绪" }),
        ],
      }),
      e,
    ],
  });
}
function sM({ id: e, data: t, selected: n }) {
  const r = z.useRef(null),
    o = async (i) => {
      var l, a, u;
      const s = i == null ? void 0 : i[0];
      if (s) {
        if (!s.type.startsWith("image/")) {
          (l = t.addLog) == null ||
            l.call(t, "失败：请选择图片文件。", "error");
          return;
        }
        try {
          const d = await Gu(s);
          (a = t.updateNode) == null ||
            a.call(t, e, { image: d, fileName: s.name, status: "已上传" });
        } catch (d) {
          (u = t.addLog) == null ||
            u.call(t, `上传失败：${d.message}`, "error");
        }
      }
    };
  return m.jsxs(Ai, {
    title: t.title || "图片节点",
    icon: ty,
    status: t.status,
    selected: n,
    className: "image-node",
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsx("div", {
        className: "image-frame",
        children: t.image
          ? m.jsx("button", {
              className: "image-preview-button",
              type: "button",
              onClick: () => {
                var i;
                return (i = t.openImagePreview) == null
                  ? void 0
                  : i.call(t, t.image, t.fileName || "图片");
              },
              children: m.jsx("img", {
                src: t.image,
                alt: t.fileName || "图片",
                draggable: !1,
              }),
            })
          : m.jsxs("button", {
              className: "upload-empty",
              type: "button",
              onClick: () => {
                var i;
                return (i = r.current) == null ? void 0 : i.click();
              },
              children: [
                m.jsx(Wu, { size: 18 }),
                m.jsx("span", { children: "上传图片" }),
              ],
            }),
      }),
      m.jsx("input", {
        ref: r,
        type: "file",
        accept: "image/*",
        hidden: !0,
        onChange: (i) => o(i.target.files),
      }),
      m.jsxs("div", {
        className: `node-actions image-node-actions ${t.image ? "has-image" : "only-upload"}`,
        children: [
          m.jsxs("button", {
            type: "button",
            onClick: () => {
              var i;
              return (i = r.current) == null ? void 0 : i.click();
            },
            children: [m.jsx(Wu, { size: 13 }), " 上传"],
          }),
          t.image
            ? m.jsxs(m.Fragment, {
                children: [
                  m.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      var i;
                      return (i = t.openImagePreview) == null
                        ? void 0
                        : i.call(t, t.image, t.fileName || "图片");
                    },
                    children: [m.jsx(cf, { size: 13 }), " 放大"],
                  }),
                  m.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      var i;
                      return (i = t.downloadImage) == null
                        ? void 0
                        : i.call(t, t.image, t.fileName || "图片.png");
                    },
                    children: [m.jsx(tC, { size: 13 }), " 下载"],
                  }),
                ],
              })
            : null,
        ],
      }),
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function lM({ id: e, data: t, selected: n }) {
  return m.jsxs(Ai, {
    title: t.title || "文本",
    icon: J0,
    status: t.status,
    selected: n,
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsx("textarea", {
        className: "node-textarea nodrag nopan nowheel",
        value: t.text || "",
        placeholder: "输入提示词，可连接到图片生成节点",
        onPointerDown: Lt,
        onMouseDown: Lt,
        onDoubleClick: Lt,
        onChange: (r) => {
          var o;
          return (o = t.updateNode) == null
            ? void 0
            : o.call(t, e, { text: r.target.value });
        },
      }),
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function wf({ settings: e, value: t, onChange: n }) {
  var i, s;
  const r =
      (i = e == null ? void 0 : e.platforms) != null && i.length
        ? e.platforms
        : Xl,
    o =
      t ||
      (e == null ? void 0 : e.activePlatformId) ||
      ((s = r[0]) == null ? void 0 : s.id);
  return m.jsxs("label", {
    className: "node-api-select-row",
    children: [
      m.jsx("span", { children: "API" }),
      m.jsx("select", {
        value: o,
        onChange: (l) => (n == null ? void 0 : n(l.target.value)),
        onPointerDown: Lt,
        onMouseDown: Lt,
        children: r.map((l) =>
          m.jsx("option", { value: l.id, children: yf(l) }, l.id),
        ),
      }),
    ],
  });
}
function aM({ id: e, data: t, selected: n }) {
  const [r, o] = z.useState(null),
    i = (f) => o((p) => (p === f ? null : f)),
    s = t.settings || tn,
    l = Kl(s, t.platformId),
    a = Dt(s, l),
    u = Si(s, { ...t, platformId: l }, "generateNode"),
    d = kt(a, u),
    c = (f) => {
      var x;
      const p = Dt(s, f),
        y = Si(s, { ...t, platformId: f }, "generateNode");
      (x = t.updateNode) == null ||
        x.call(t, e, {
          platformId: f,
          model: kt(p).includes(y) ? y : gr(p),
          modelSource: "default",
        });
    };
  const f = /^mj_(fast|relax)(?:_|$)/i.test(u),
    p = t.mjOperation === "blend" ? "blend" : "imagine";
  return m.jsxs(Ai, {
    title: t.title || "图片生成",
    icon: fl,
    status: t.status,
    selected: n,
    className: "generate-node",
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsxs("div", {
        className: "preview-row",
        children: [
          (t.upstreamImages || []).map((f, p) =>
            m.jsxs(
              "div",
              {
                className: "preview-thumb",
                children: [
                  m.jsx("img", { src: f, alt: "上游缩略图", draggable: !1 }),
                  m.jsx("button", {
                    type: "button",
                    className: "preview-thumb-remove nodrag nopan",
                    title: "断开这张上游图片的连接",
                    onPointerDown: Lt,
                    onMouseDown: Lt,
                    onClick: (y) => {
                      var x;
                      return (
                        Lt(y),
                        (x = t.removeUpstreamConnection) == null
                          ? void 0
                          : x.call(t, e, f)
                      );
                    },
                    children: "×",
                  }),
                ],
              },
              `${f}-${p}`,
            ),
          ),
          (t.upstreamImages || []).length
            ? null
            : m.jsx("span", {
                className: "empty-preview",
                children: "可连接上游图片作为参考",
              }),
        ],
      }),
      m.jsx("textarea", {
        className: "node-textarea prompt nodrag nopan nowheel",
        value: t.prompt || "",
        placeholder: "输入生图提示词，也可以连接文本节点",
        onPointerDown: Lt,
        onMouseDown: Lt,
        onDoubleClick: Lt,
        onChange: (f) => {
          var p;
          return (p = t.updateNode) == null
            ? void 0
            : p.call(t, e, { prompt: f.target.value });
        },
      }),
      m.jsxs("div", {
        className: "node-option-wrap nodrag nopan",
        children: [
          m.jsx(wf, { settings: s, value: l, onChange: c }),
          m.jsx("div", {
            className: "generate-model-row",
            children: m.jsx(Dr, {
              icon: vi,
              className: "model-badge full",
              text: u || "选择模型",
              title: "模型",
              active: r === "model",
              onClick: () => i("model"),
              children: m.jsx(Zl, { value: u || "选择模型" }),
            }),
          }),
          m.jsxs("div", {
            className: "generate-control-row",
            children: [
              f
                ? m.jsx(Dr, {
                    icon: fl,
                    text: p === "blend" ? "多图融合" : "想象生图",
                    title: "Midjourney 操作",
                    active: r === "mjOperation",
                    onClick: () => i("mjOperation"),
                  })
                : null,
              m.jsx(Dr, {
                icon: cf,
                text: t.quality || "1k",
                title: "画质",
                active: r === "quality",
                onClick: () => i("quality"),
              }),
              m.jsx(Dr, {
                icon: ey,
                text: t.ratio || "1:1",
                title: "尺寸",
                active: r === "ratio",
                onClick: () => i("ratio"),
              }),
              m.jsx(Dr, {
                icon: eC,
                text: `${t.count || 1}张`,
                title: "生成张数",
                active: r === "count",
                onClick: () => i("count"),
              }),
              m.jsxs("button", {
                type: "button",
                className: "run-pill",
                onClick: () => {
                  var f;
                  return (f = t.runNode) == null ? void 0 : f.call(t, e);
                },
                disabled: t.running,
                children: [
                  t.running
                    ? m.jsx(ao, { size: 13, className: "spin" })
                    : m.jsx(go, { size: 13 }),
                  " 运行",
                ],
              }),
            ],
          }),
          r === "model"
            ? m.jsx(Rr, {
                type: "model",
                options: d,
                value: u,
                onPick: (f) => {
                  var p;
                  return (p = t.updateNode) == null
                    ? void 0
                    : p.call(t, e, { model: f, modelSource: "manual" });
                },
                onClose: () => o(null),
              })
            : null,
          r === "mjOperation" && f
            ? m.jsx(Rr, {
                type: "mj-operation",
                options: [
                  { value: "imagine", label: "想象生图" },
                  { value: "blend", label: "多图融合" },
                ],
                value: p,
                onPick: (f) => {
                  var p;
                  return (p = t.updateNode) == null
                    ? void 0
                    : p.call(t, e, { mjOperation: f });
                },
                onClose: () => o(null),
              })
            : null,
          r === "ratio"
            ? m.jsx(Rr, {
                type: "ratio",
                options: [...pC, "自适应"],
                value: t.ratio || "1:1",
                onPick: (f) => {
                  var p;
                  return (p = t.updateNode) == null
                    ? void 0
                    : p.call(t, e, { ratio: f });
                },
                onClose: () => o(null),
              })
            : null,
          r === "count"
            ? m.jsx(Rr, {
                type: "count",
                options: hC.map((f) => `${f}张`),
                value: `${t.count || 1}张`,
                onPick: (f) => {
                  var p;
                  return (p = t.updateNode) == null
                    ? void 0
                    : p.call(t, e, {
                        count: Number(String(f).replace("张", "")),
                      });
                },
                onClose: () => o(null),
              })
            : null,
          r === "quality"
            ? m.jsx(Rr, {
                type: "quality",
                options: ["1k", "2k", "3k", "4k"],
                value: t.quality || "1k",
                onPick: (f) => {
                  var p;
                  return (p = t.updateNode) == null
                    ? void 0
                    : p.call(t, e, { quality: f });
                },
                onClose: () => o(null),
              })
            : null,
        ],
      }),
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function AM({ id: e, data: t, selected: n }) {
  const [r, o] = z.useState(null),
    i = (C) => o((I) => (I === C ? null : C)),
    s = t.settings || tn,
    l = Kl(s, t.platformId),
    a = Dt(s, l),
    u = Si(s, { ...t, platformId: l }, "generateNode"),
    d = kt(a, u),
    c = Number(t.angleYaw || 0),
    f = Number(t.anglePitch || 0),
    p = t.angleScale || "medium",
    y = (t.upstreamImages || [])[0],
    x = () => {
      const C = p === "close" ? "近景特写" : p === "wide" ? "广角远景" : "中景";
      return `多角度生成：请参考上游图片，生成同一主体/同一产品的新角度视图。水平旋转 ${c}°，垂直俯仰 ${f}°，镜头距离：${C}。必须保持主体身份、结构、比例、颜色、材质、品牌标识和关键细节一致，只改变视角、镜头距离和透视关系。不要改变产品设计，不要添加多余文字，不要生成拼图。画面保持商业摄影/高端电商海报质感，边缘清晰，真实光影，细节锐利。`;
    },
    S = (C) => {
      var ee;
      const I = Dt(s, C),
        A = Si(s, { ...t, platformId: C }, "generateNode");
      (ee = t.updateNode) == null ||
        ee.call(t, e, {
          platformId: C,
          model: kt(I).includes(A) ? A : gr(I),
          modelSource: "default",
        });
    },
    g = (C, I) => {
      var A;
      (A = t.updateNode) == null || A.call(t, e, { [C]: I });
    },
    v = (C) => {
      var ne;
      Lt(C);
      const I = C.clientX,
        A = C.clientY,
        H = c,
        b = f,
        K = (ne = C.currentTarget) == null ? void 0 : ne.setPointerCapture;
      K == null || K.call(C.currentTarget, C.pointerId);
      const G = (te) => {
          var re;
          const X = Math.max(
              -180,
              Math.min(180, Math.round((H + (te.clientX - I) / 2) / 5) * 5),
            ),
            ae = Math.max(
              -60,
              Math.min(60, Math.round((b + (te.clientY - A) / 2) / 5) * 5),
            );
          (re = t.updateNode) == null ||
            re.call(t, e, { angleYaw: X, anglePitch: ae });
        },
        te = () => {
          (window.removeEventListener("pointermove", G),
            window.removeEventListener("pointerup", te));
        };
      (window.addEventListener("pointermove", G),
        window.addEventListener("pointerup", te));
    },
    h = p === "close" ? "近景" : p === "wide" ? "广角" : "中景";
  return m.jsxs(Ai, {
    title: t.title || "多角度节点",
    icon: fl,
    status: t.status,
    selected: n,
    className: "generate-node angle-node",
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsxs("div", {
        className: "angle-node-stage-wrap",
        children: [
          m.jsx("div", {
            className: "angle-node-stage nodrag nopan",
            onPointerDown: v,
            title: "按住拖动 3D 立方体可直接转角度",
            children: y
              ? m.jsxs("div", {
                  className: `angle-cube angle-cube-${p}`,
                  style: {
                    transform: `rotateX(${-f}deg) rotateY(${c}deg) scale(${p === "close" ? 1.12 : p === "wide" ? 0.86 : 1})`,
                  },
                  children: [
                    m.jsx("div", {
                      className: "angle-cube-face angle-cube-front",
                      style: { backgroundImage: `url(${y})` },
                    }),
                    m.jsx("div", {
                      className: "angle-cube-face angle-cube-right",
                    }),
                    m.jsx("div", {
                      className: "angle-cube-face angle-cube-top",
                    }),
                    m.jsx("div", { className: "angle-cube-shadow" }),
                  ],
                })
              : m.jsx("span", { children: "连接上游图片后，可在这里拖动旋转" }),
          }),
          m.jsxs("div", {
            className: "angle-mini-values",
            children: ["Yaw ", c, "° / Pitch ", f, "° / ", h],
          }),
        ],
      }),
      m.jsxs("div", {
        className: "angle-slider-grid nodrag nopan",
        children: [
          m.jsxs("label", {
            children: [
              "水平旋转 ",
              c,
              "°",
              m.jsx("input", {
                type: "range",
                min: "-180",
                max: "180",
                step: "5",
                value: c,
                onPointerDown: Lt,
                onMouseDown: Lt,
                onChange: (C) => g("angleYaw", Number(C.target.value)),
              }),
            ],
          }),
          m.jsxs("label", {
            children: [
              "垂直俯仰 ",
              f,
              "°",
              m.jsx("input", {
                type: "range",
                min: "-60",
                max: "60",
                step: "5",
                value: f,
                onPointerDown: Lt,
                onMouseDown: Lt,
                onChange: (C) => g("anglePitch", Number(C.target.value)),
              }),
            ],
          }),
        ],
      }),
      m.jsxs("div", {
        className: "angle-scale-row nodrag nopan",
        children: [
          ["close", "近景"],
          ["medium", "中景"],
          ["wide", "广角"],
        ].map(([C, I]) =>
          m.jsx(
            "button",
            {
              type: "button",
              className: p === C ? "active" : "",
              onPointerDown: Lt,
              onMouseDown: Lt,
              onClick: () => g("angleScale", C),
              children: I,
            },
            C,
          ),
        ),
      }),
      m.jsxs("div", {
        className: "node-option-wrap nodrag nopan",
        children: [
          m.jsx(wf, { settings: s, value: l, onChange: S }),
          m.jsx("div", {
            className: "generate-model-row",
            children: m.jsx(Dr, {
              icon: vi,
              className: "model-badge full",
              text: u || "先在API设置添加图片模型",
              title: "模型",
              active: r === "model",
              onClick: () => i("model"),
              children: m.jsx(Zl, { value: u || "先在API设置添加图片模型" }),
            }),
          }),
          m.jsxs("div", {
            className: "generate-control-row",
            children: [
              m.jsx(Dr, {
                icon: cf,
                text: t.quality || "1k",
                title: "画质",
                active: r === "quality",
                onClick: () => i("quality"),
              }),
              m.jsx(Dr, {
                icon: ey,
                text: t.ratio || "自适应",
                title: "尺寸",
                active: r === "ratio",
                onClick: () => i("ratio"),
              }),
              m.jsx(Dr, {
                icon: eC,
                text: `${t.count || 1}张`,
                title: "生成张数",
                active: r === "count",
                onClick: () => i("count"),
              }),
              m.jsxs("button", {
                type: "button",
                className: "run-pill",
                onClick: () => {
                  var C;
                  return (C = t.runNode) == null ? void 0 : C.call(t, e);
                },
                disabled: t.running,
                children: [
                  t.running
                    ? m.jsx(ao, { size: 13, className: "spin" })
                    : m.jsx(go, { size: 13 }),
                  " 运行",
                ],
              }),
            ],
          }),
          r === "model"
            ? m.jsx(Rr, {
                type: "model",
                options: d,
                value: u,
                onPick: (C) => {
                  var I;
                  return (I = t.updateNode) == null
                    ? void 0
                    : I.call(t, e, { model: C, modelSource: "manual" });
                },
                onClose: () => o(null),
              })
            : null,
          r === "ratio"
            ? m.jsx(Rr, {
                type: "ratio",
                options: [...pC, "自适应"],
                value: t.ratio || "自适应",
                onPick: (C) => {
                  var I;
                  return (I = t.updateNode) == null
                    ? void 0
                    : I.call(t, e, { ratio: C });
                },
                onClose: () => o(null),
              })
            : null,
          r === "count"
            ? m.jsx(Rr, {
                type: "count",
                options: hC.map((C) => `${C}张`),
                value: `${t.count || 1}张`,
                onPick: (C) => {
                  var I;
                  return (I = t.updateNode) == null
                    ? void 0
                    : I.call(t, e, {
                        count: Number(String(C).replace("张", "")),
                      });
                },
                onClose: () => o(null),
              })
            : null,
          r === "quality"
            ? m.jsx(Rr, {
                type: "quality",
                options: ["1k", "2k", "3k", "4k"],
                value: t.quality || "1k",
                onPick: (C) => {
                  var I;
                  return (I = t.updateNode) == null
                    ? void 0
                    : I.call(t, e, { quality: C });
                },
                onClose: () => o(null),
              })
            : null,
          m.jsx("div", { className: "angle-hidden-prompt", children: x() }),
        ],
      }),
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function uM({ id: e, data: t, selected: n }) {
  const [r, o] = z.useState(null),
    i = t.settings || tn,
    s = Kl(i, t.platformId),
    l = Dt(i, s),
    a = Si(i, { ...t, platformId: s }, "upscaleNode"),
    u = kt(l, a),
    d = (c) => {
      var y;
      const f = Dt(i, c),
        p = Si(i, { ...t, platformId: c }, "upscaleNode");
      (y = t.updateNode) == null ||
        y.call(t, e, {
          platformId: c,
          model: kt(f).includes(p) ? p : Ql(f),
          modelSource: "default",
          quality: t.quality || Yl,
        });
    };
  const c = (t.upstreamMidjourneyTasks || [])[0],
    f = c == null ? void 0 : c.mjButtons || [],
    p = f.find((y) => y.customId === t.mjActionCustomId);
  return m.jsxs(Ai, {
    title: t.title || "高清放大",
    icon: fl,
    status: t.status,
    selected: n,
    className: "upscale-node",
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsxs("div", {
        className: "preview-row",
        children: [
          (t.upstreamImages || []).map((c, f) =>
            m.jsx(
              "img",
              { src: c, alt: "待高清放大图片", draggable: !1 },
              `${c}-${f}`,
            ),
          ),
          (t.upstreamImages || []).length
            ? null
            : m.jsx("span", {
                className: "empty-preview",
                children: "连接图片后可一键输出大图，默认 4K 重绘",
              }),
        ],
      }),
      m.jsx("div", {
        className: "upscale-auto-note",
        children:
          "不需要填写提示词。可直接选择 API 和模型，连接图片后点击运行；节点会按 4K 大图重绘思路输出，尽量保持原图比例、构图、主体和细节不变。",
      }),
      m.jsxs("div", {
        className: "node-option-wrap reverse-option-wrap nodrag nopan",
        children: [
          m.jsx(wf, { settings: i, value: s, onChange: d }),
          m.jsx("div", {
            className: "generate-model-row",
            children: m.jsx(Dr, {
              icon: vi,
              className: "model-badge full",
              text: a,
              title: "高清放大模型",
              active: r === "model",
              onClick: () => o((c) => (c === "model" ? null : "model")),
              children: m.jsx(Zl, { value: a }),
            }),
          }),
          r === "model"
            ? m.jsx(Rr, {
                type: "model",
                options: u,
                value: a,
                onPick: (c) => {
                  var f;
                  return (f = t.updateNode) == null
                    ? void 0
                    : f.call(t, e, { model: c, modelSource: "manual" });
                },
                onClose: () => o(null),
              })
            : null,
          c && f.length
            ? m.jsx("div", {
                className: "generate-model-row",
                children: m.jsx(Dr, {
                  icon: fl,
                  className: "model-badge full",
                  text: (p == null ? void 0 : p.label) || "选择 Midjourney 操作",
                  title: "原任务返回的操作按钮",
                  active: r === "mjAction",
                  onClick: () => o((y) => (y === "mjAction" ? null : "mjAction")),
                }),
              })
            : null,
          r === "mjAction" && c && f.length
            ? m.jsx(Rr, {
                type: "mj-action",
                options: f.map((y) => ({ value: y.customId, label: y.label })),
                value: t.mjActionCustomId || "",
                onPick: (y) => {
                  var x;
                  return (x = t.updateNode) == null
                    ? void 0
                    : x.call(t, e, {
                        mjActionCustomId: y,
                        mjTaskId: c.mjTaskId,
                        mjMode: c.mjMode,
                        mjButtons: f,
                      });
                },
                onClose: () => o(null),
              })
            : null,
        ],
      }),
      m.jsx("div", {
        className: "node-actions right reverse-node-actions",
        children: m.jsxs("button", {
          type: "button",
          className: "primary small",
          onClick: () => {
            var c;
            return (c = t.runNode) == null ? void 0 : c.call(t, e);
          },
          disabled: t.running,
          children: [
            t.running
              ? m.jsx(ao, { size: 13, className: "spin" })
              : m.jsx(go, { size: 13 }),
            " 运行",
          ],
        }),
      }),
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function cM({ id: e, data: t, selected: n }) {
  const [r, o] = z.useState(null),
    i = t.settings || tn,
    s = Dt(i, t.platformId),
    l = Array.from(
      new Set([
        ...Up(s),
        ...kt(s).filter((d) => mJ()?.isMidjourneyModel(d)),
      ]),
    ),
    u = l.includes(t.model)
      ? t.model
      : l.includes(i.defaultTextModel)
        ? i.defaultTextModel
        : l[0] || "",
    a = (d) => {
      var c;
      Dt(i, d);
      const f = Array.from(
        new Set([
          ...Up(Dt(i, d)),
          ...kt(Dt(i, d)).filter((p) => mJ()?.isMidjourneyModel(p)),
        ]),
      );
      (c = t.updateNode) == null ||
        c.call(t, e, {
          platformId: d,
          model: f.includes(t.model) ? t.model : f[0] || "",
        });
    };
  return m.jsxs(Ai, {
    title: t.title || "反推提示词",
    icon: vi,
    status: t.status,
    selected: n,
    className: "reverse-node",
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsxs("div", {
        className: "preview-row",
        children: [
          (t.upstreamImages || []).map((u, d) =>
            m.jsx(
              "img",
              { src: u, alt: "反推图片", draggable: !1 },
              `${u}-${d}`,
            ),
          ),
          (t.upstreamImages || []).length
            ? null
            : m.jsx("span", {
                className: "empty-preview",
                children: "连接图片后可反推",
              }),
        ],
      }),
      m.jsxs("div", {
        className: "node-option-wrap reverse-option-wrap nodrag nopan",
        children: [
          m.jsx(wf, {
            settings: i,
            value: t.platformId || i.activePlatformId,
            onChange: a,
          }),
          m.jsx("div", {
            className: "generate-model-row",
            children: m.jsx(Dr, {
              icon: vi,
              className: "model-badge full",
              text: u || "先在API设置添加文本模型",
              title: "反推模型",
              active: r === "model",
              onClick: () => o((u) => (u === "model" ? null : "model")),
              children: m.jsx(Zl, { value: u || "先在API设置添加文本模型" }),
            }),
          }),
          r === "model"
            ? m.jsx(Rr, {
                type: "model",
                options: l,
                value: u,
                onPick: (d) => {
                  var c;
                  return (c = t.updateNode) == null
                    ? void 0
                    : c.call(t, e, { model: d });
                },
                onClose: () => o(null),
              })
            : null,
        ],
      }),
      m.jsx("textarea", {
        className: "node-textarea result nodrag nopan nowheel",
        value: t.text || "",
        placeholder: "运行后这里显示中文反推提示词",
        onPointerDown: Lt,
        onMouseDown: Lt,
        onDoubleClick: Lt,
        onChange: (u) => {
          var d;
          return (d = t.updateNode) == null
            ? void 0
            : d.call(t, e, { text: u.target.value });
        },
      }),
      m.jsx("div", {
        className: "node-actions right reverse-node-actions",
        children: m.jsxs("button", {
          type: "button",
          className: "primary small",
          onClick: () => {
            var u;
            return (u = t.runNode) == null ? void 0 : u.call(t, e);
          },
          children: [
            t.running
              ? m.jsx(ao, { size: 13, className: "spin" })
              : m.jsx(go, { size: 13 }),
            " 运行",
          ],
        }),
      }),
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function bM({ id: e, data: t, selected: n }) {
  const r = t.settings || tn,
    o = Kl(r, t.platformId || r.activePlatformId),
    i = (s, l) => {
      var a;
      (a = t.updateNode) == null || a.call(t, e, { [s]: l });
    };
  return m.jsxs(Ai, {
    title: t.title || "视频生成",
    icon: go,
    status: t.status,
    selected: n,
    className: "video-node",
    children: [
      m.jsx(lt, {
        type: "target",
        position: q.Left,
        className: "handle target",
      }),
      m.jsxs("div", {
        className: "preview-row",
        children: [
          (t.upstreamImages || []).map((s, l) =>
            m.jsx(
              "img",
              { src: s, alt: "视频参考图", draggable: !1 },
              `${s}-${l}`,
            ),
          ),
          (t.upstreamImages || []).length
            ? null
            : m.jsx("span", {
                className: "empty-preview",
                children: "可连接上游图片预览；接口参数请填图片 URL",
              }),
        ],
      }),
      m.jsx("textarea", {
        className: "node-textarea prompt nodrag nopan nowheel",
        value: t.prompt || "",
        placeholder: "输入视频提示词，也可以连接文本节点",
        onPointerDown: Lt,
        onMouseDown: Lt,
        onDoubleClick: Lt,
        onChange: (s) => i("prompt", s.target.value),
      }),
      m.jsx(wf, {
        settings: r,
        value: o,
        onChange: (s) => i("platformId", s),
      }),
      m.jsxs("div", {
        className: "video-field-grid nodrag nopan",
        children: [
          m.jsxs("label", {
            children: [
              "尺寸",
              m.jsx("select", {
                value: t.size || "1280x720",
                onPointerDown: Lt,
                onMouseDown: Lt,
                onChange: (s) => i("size", s.target.value),
                children: ["1280x720", "720x1280", "1920x1080", "1080x1920"].map(
                  (s) => m.jsx("option", { value: s, children: s }, s),
                ),
              }),
            ],
          }),
          m.jsxs("label", {
            children: [
              "时长",
              m.jsx("select", {
                value: String(t.duration || "10"),
                onPointerDown: Lt,
                onMouseDown: Lt,
                onChange: (s) => i("duration", s.target.value),
                children: ["10"].map((s) =>
                  m.jsx("option", { value: s, children: `${s}s` }, s),
                ),
              }),
            ],
          }),
        ],
      }),
      m.jsxs("label", {
        className: "video-url-box nodrag nopan",
        children: [
          "参考图 URL（最多 7 张，每行/逗号分隔）",
          m.jsx("textarea", {
            className: "settings-model-input",
            value: t.imageUrls || "",
            placeholder: "https://example.com/image.png",
            onPointerDown: Lt,
            onMouseDown: Lt,
            onChange: (s) => i("imageUrls", s.target.value),
          }),
        ],
      }),
      m.jsxs("label", {
        className: "video-url-box nodrag nopan",
        children: [
          "参考视频 URL",
          m.jsx("input", {
            value: t.videoUrl || "",
            placeholder: "https://example.com/video.mp4",
            onPointerDown: Lt,
            onMouseDown: Lt,
            onChange: (s) => i("videoUrl", s.target.value),
          }),
        ],
      }),
      t.outputVideo
        ? m.jsx("div", {
            className: "video-frame",
            children: m.jsx("video", { src: t.outputVideo, controls: !0 }),
          })
        : t.outputVideoId
          ? m.jsxs("div", {
              className: "video-task-id",
              children: ["任务 ID：", t.outputVideoId],
            })
          : null,
      m.jsx("div", {
        className: "node-actions right reverse-node-actions",
        children: m.jsxs("button", {
          type: "button",
          className: "primary small",
          onClick: () => {
            var s;
            return (s = t.runNode) == null ? void 0 : s.call(t, e);
          },
          disabled: t.running,
          children: [
            t.running
              ? m.jsx(ao, { size: 13, className: "spin" })
              : m.jsx(go, { size: 13 }),
            " 运行",
          ],
        }),
      }),
      t.outputVideo
        ? m.jsx("div", {
            className: "node-actions right reverse-node-actions",
            children: m.jsxs("button", {
              type: "button",
              onClick: () => {
                var s;
                return (s = t.downloadImage) == null
                  ? void 0
                  : s.call(t, t.outputVideo, `生成视频-${t.outputVideoId || Date.now()}.mp4`);
              },
              children: [m.jsx(tC, { size: 13 }), " 下载视频"],
            }),
          })
        : null,
      m.jsx(lt, {
        type: "source",
        position: q.Right,
        className: "handle source plus-handle",
        children: m.jsx(mo, { size: 12 }),
      }),
    ],
  });
}
function fM({ id: e, data: t, selected: n }) {
  return m.jsx("div", {
    className: `group-node ${n ? "selected" : ""}`,
    style: { width: t.width, height: t.height },
    children: m.jsxs("div", {
      className: "group-title",
      children: [
        m.jsx(q0, { size: 14 }),
        m.jsx("span", { children: t.title || "分组" }),
        m.jsxs("button", {
          type: "button",
          onClick: () => {
            var r;
            return (r = t.runGroup) == null ? void 0 : r.call(t, e);
          },
          children: [m.jsx(go, { size: 12 }), " 整组执行"],
        }),
      ],
    }),
  });
}
function dM({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: o,
  markerEnd: i,
  style: s,
  selected: l,
}) {
  const a = (t + r) / 2,
    u = (n + o) / 2,
    d = `M ${t},${n} C ${t + 90},${n} ${r - 90},${o} ${r},${o}`;
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx("path", {
        id: e,
        className: "react-flow__edge-path custom-edge-path",
        d,
        markerEnd: i,
        style: s,
      }),
      m.jsx("circle", {
        cx: a,
        cy: u,
        r: l ? 7 : 5,
        className: `edge-middle ${l ? "selected" : ""}`,
      }),
    ],
  });
}
function pM({
  logs: e,
  progress: t,
  addImageNodeFromUpload: n,
  runAll: r,
  queueRunning: o,
}) {
  const i = z.useRef(null),
    s = e.slice(0, 8);
  return m.jsxs("aside", {
    className: "run-log-panel nodrag",
    children: [
      m.jsxs("div", {
        className: "run-log-head",
        children: [
          m.jsxs("div", {
            children: [
              m.jsx("b", { children: "运行日志" }),
              m.jsx("span", { children: "任务状态与错误提示" }),
            ],
          }),
          m.jsxs("span", { className: "run-log-progress", children: [t, "%"] }),
        ],
      }),
      m.jsxs("div", {
        className: "run-log-actions",
        children: [
          m.jsxs("button", {
            type: "button",
            onClick: () => {
              var l;
              return (l = i.current) == null ? void 0 : l.click();
            },
            children: [m.jsx(Wu, { size: 14 }), " 上传图片"],
          }),
          m.jsxs("button", {
            className: "primary",
            type: "button",
            onClick: r,
            children: [
              o
                ? m.jsx(ao, { className: "spin", size: 14 })
                : m.jsx(go, { size: 14 }),
              " 运行队列",
            ],
          }),
          m.jsx("input", {
            ref: i,
            hidden: !0,
            type: "file",
            accept: "image/*",
            multiple: !0,
            onChange: (l) => n(l.target.files),
          }),
        ],
      }),
      m.jsx("div", {
        className: "run-log-track",
        children: m.jsx("div", { style: { width: `${t}%` } }),
      }),
      m.jsx("div", {
        className: "run-log-list",
        children: s.length
          ? s.map((l) =>
              m.jsxs(
                "div",
                {
                  className: `log-item ${l.type}`,
                  children: [
                    l.type === "error"
                      ? m.jsx(qN, { size: 14 })
                      : l.type === "success"
                        ? m.jsx(ZN, { size: 14 })
                        : m.jsx(ao, { size: 14 }),
                    m.jsx("span", { children: l.text }),
                  ],
                },
                l.id,
              ),
            )
          : m.jsx("div", {
              className: "log-empty",
              children: "暂无运行日志。运行节点后会显示在这里。",
            }),
      }),
    ],
  });
}
function hM({
  onSettings: e,
  onRunAll: t,
  onGroup: n,
  onUngroup: r,
  onAlign: o,
  onDistribute: i,
  onAutoLayout: s,
  onFit: l,
  queueRunning: a,
}) {
  return m.jsxs("div", {
    className: "top-toolbar",
    children: [
      m.jsxs("button", {
        type: "button",
        onClick: l,
        children: [m.jsx(ey, { size: 15 }), " 适配视图"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: () => o("left"),
        children: [m.jsx(KN, { size: 15 }), " 左对齐"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: () => o("top"),
        children: [m.jsx(QN, { size: 15 }), " 顶对齐"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: () => i("horizontal"),
        children: [m.jsx(JN, { size: 15 }), " 水平分布"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: () => i("vertical"),
        children: [m.jsx(sC, { size: 15 }), " 垂直分布"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: s,
        children: [m.jsx(nC, { size: 15 }), " 自动排版"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: n,
        children: [m.jsx(q0, { size: 15 }), " 打组"],
      }),
      m.jsxs("button", {
        type: "button",
        onClick: r,
        children: [m.jsx(uC, { size: 15 }), " 解组"],
      }),
      m.jsxs("button", {
        type: "button",
        className: "primary",
        onClick: t,
        children: [
          a
            ? m.jsx(ao, { className: "spin", size: 15 })
            : m.jsx(go, { size: 15 }),
          " 全部运行",
        ],
      }),
      m.jsxs("button", {
        type: "button",
        className: "settings-button",
        onClick: e,
        children: [m.jsx(lC, { size: 15 }), " API 设置"],
      }),
    ],
  });
}
function gM({ menu: e, onPick: t, onClose: n }) {
  return e
    ? m.jsxs("div", {
        className: "context-menu",
        style: { left: e.screen.x, top: e.screen.y },
        children: [
          m.jsx("div", {
            className: "context-title",
            children: "选择节点类型",
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("imageNode"),
            children: [m.jsx(ty, { size: 15 }), " 图片节点"],
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("generateNode"),
            children: [m.jsx(fl, { size: 15 }), " 图片生成节点"],
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("videoNode"),
            children: [m.jsx(go, { size: 15 }), " 视频生成节点"],
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("angleNode"),
            children: [m.jsx(fl, { size: 15 }), " 多角度节点"],
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("upscaleNode"),
            children: [m.jsx(fl, { size: 15 }), " 高清放大节点"],
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("reverseNode"),
            children: [m.jsx(vi, { size: 15 }), " 反推提示词节点"],
          }),
          m.jsxs("button", {
            type: "button",
            onClick: () => t("textNode"),
            children: [m.jsx(J0, { size: 15 }), " 文本节点"],
          }),
          m.jsx("button", {
            type: "button",
            className: "ghost",
            onClick: n,
            children: "取消",
          }),
        ],
      })
    : null;
}
function mM({ preview: e, onClose: t }) {
  const [n, r] = z.useState({ x: 0, y: 0 }),
    [o, i] = z.useState(1.35),
    s = z.useRef(null);
  if (
    (z.useEffect(() => {
      e || (r({ x: 0, y: 0 }), i(1.35));
    }, [e]),
    !e)
  )
    return null;
  const l = (a) => {
    (a.preventDefault(),
      (s.current = {
        startX: a.clientX,
        startY: a.clientY,
        originX: n.x,
        originY: n.y,
      }));
    const u = (c) => {
        s.current &&
          r({
            x: s.current.originX + c.clientX - s.current.startX,
            y: s.current.originY + c.clientY - s.current.startY,
          });
      },
      d = () => {
        ((s.current = null),
          window.removeEventListener("mousemove", u),
          window.removeEventListener("mouseup", d));
      };
    (window.addEventListener("mousemove", u),
      window.addEventListener("mouseup", d));
  };
  return m.jsx("div", {
    className: "image-preview-overlay",
    onMouseDown: t,
    children: m.jsxs("div", {
      className: "image-preview-card",
      onMouseDown: (a) => a.stopPropagation(),
      children: [
        m.jsxs("div", {
          className: "image-preview-head",
          children: [
            m.jsx("span", { children: e.name || "图片预览" }),
            m.jsxs("div", {
              children: [
                m.jsx("button", {
                  type: "button",
                  onClick: () =>
                    i((a) => Math.max(0.6, Number((a - 0.25).toFixed(2)))),
                  children: "缩小",
                }),
                m.jsx("button", {
                  type: "button",
                  onClick: () =>
                    i((a) => Math.min(4, Number((a + 0.25).toFixed(2)))),
                  children: "放大",
                }),
                m.jsx("button", {
                  type: "button",
                  onClick: t,
                  children: "关闭",
                }),
              ],
            }),
          ],
        }),
        m.jsx("div", {
          className: "image-preview-stage",
          onWheel: (a) => {
            (a.preventDefault(),
              i((u) =>
                Math.min(
                  4,
                  Math.max(
                    0.6,
                    Number((u + (a.deltaY < 0 ? 0.12 : -0.12)).toFixed(2)),
                  ),
                ),
              ));
          },
          children: m.jsx("img", {
            src: e.image,
            alt: e.name || "图片预览",
            draggable: !1,
            onMouseDown: l,
            style: { transform: `translate(${n.x}px, ${n.y}px) scale(${o})` },
          }),
        }),
      ],
    }),
  });
}
function yM({ open: e, onClose: t, settings: n, setSettings: r, addLog: o }) {
  const [i, s] = z.useState(""),
    [g, v] = z.useState([]),
    [h, w] = z.useState([]),
    l = Ar(n);
  if (!e) return null;
  const a = (P) => {
      const L = {
        ...n,
        platforms: n.platforms.map((F) => (F.id === l.id ? { ...F, ...P } : F)),
      };
      r(L);
    },
    u = () => {
      const P = Ft("platform");
      r({
        ...n,
        activePlatformId: P,
        platforms: [
          ...n.platforms,
          {
            id: P,
            name: `API 平台 ${n.platforms.length + 1}`,
            baseUrl: "",
            apiKey: "",
            customImageModels: [],
            customTextModels: [],
          },
        ],
      });
    },
    d = () => {
      if (n.platforms.length <= 1) return;
      const P = n.platforms.filter((L) => L.id !== l.id),
        F = P[0],
        E = kt(F),
        $ = Up(F);
      r({
        ...n,
        platforms: P,
        activePlatformId: F.id,
        defaultImageModel: E[0] || "",
        defaultTextModel: $[0] || "",
      });
    },
    c = async () => {
      try {
        if ((s("正在测试连接..."), !l.baseUrl || !l.apiKey))
          throw new Error("请先填写 API 地址和密钥。");
        const P = Xt(l, "/models"),
          L = await co(P, { method: "GET", headers: Xu(l.apiKey) }, 3e4),
          F = await L.text();
        if (!L.ok) throw new Error(F || `HTTP ${L.status}`);
        (s("连接成功，可以开始运行节点。"), o("API 连接成功。", "success"));
      } catch (P) {
        const L = `连接失败：${P.message}。请检查 API 地址是否填到 /v1，密钥是否正确，或上游是否支持 OpenAI 兼容接口。`;
        (s(L), o(L, "error"));
      }
    },
    f = async () => {
      try {
        if ((s("正在查询额度..."), !l.baseUrl || !l.apiKey))
          throw new Error("请先填写 API 地址和密钥。");
        const P = Ps(l.baseUrl).replace(/\/v1$/, "");
        let L = "";
        for (const F of [
          Xt(l, "/dashboard/billing/credit_grants"),
          Xt(l, "/usage"),
          `${P}/dashboard/billing/credit_grants`,
          `${Ps(l.baseUrl)}/dashboard/billing/credit_grants`,
          `${Ps(l.baseUrl)}/usage`,
        ])
          try {
            const E = await co(
                F,
                { method: "GET", headers: Xu(l.apiKey) },
                3e4,
              ),
              $ = await E.text();
            if (E.ok) {
              s(`额度接口返回：${$.slice(0, 300) || "空内容"}`);
              return;
            }
            L = $ || `HTTP ${E.status}`;
          } catch (E) {
            L = E.message;
          }
        throw new Error(L || "当前平台不支持额度查询接口。");
      } catch (P) {
        s(`额度查询失败：${P.message}`);
      }
    },
    _ = () => {
      (_C(n), s("API 地址、密钥和模型参数已保存到本地浏览器。"));
      o == null || o("API 设置已保存到本地浏览器。", "success");
    },
    N = async () => {
      try {
        if ((s("正在获取模型列表..."), !l.baseUrl || !l.apiKey))
          throw new Error("请先填写 API 地址和密钥。");
        const P = Xt(l, "/models"),
          L = await co(P, { method: "GET", headers: Xu(l.apiKey) }, 3e4),
          F = await hy(L),
          E = parseApiModels(F);
        if (!E.length) throw new Error("接口已返回，但没有解析到模型名称。");
        (v(E), w(E), s(`已获取 ${E.length} 个模型，可勾选后应用。`));
      } catch (P) {
        const L = `获取模型失败：${P.message}`;
        (s(L), o == null || o(L, "error"));
      }
    },
    M = (P) => {
      w((L) => (L.includes(P) ? L.filter((F) => F !== P) : [...L, P]));
    },
    k = (P) => {
      const L = h.length ? h : g;
      if (!L.length) return s("请先获取并选择模型。");
      P === "image" ? x(L.join("\n")) : S(L.join("\n"));
      s(P === "image" ? "已应用到图片模型列表。" : "已应用到文本模型列表。");
    },
    p = VM(l),
    y = BM(l),
    x = (P) => {
      const L = PM(P),
        F = {
          ...n,
          platforms: n.platforms.map((E) =>
            E.id === l.id ? { ...E, customImageModels: L } : E,
          ),
          defaultImageModel: L.includes(n.defaultImageModel)
            ? n.defaultImageModel
            : L[0] || "",
        };
      r(F);
    },
    S = (P) => {
      const L = PM(P),
        F = {
          ...n,
          platforms: n.platforms.map((E) =>
            E.id === l.id ? { ...E, customTextModels: L } : E,
          ),
          defaultTextModel: L.includes(n.defaultTextModel)
            ? n.defaultTextModel
            : L[0] || "",
        };
      r(F);
    };
  return m.jsx("div", {
    className: "settings-overlay",
    children: m.jsxs("div", {
      className: "settings-panel",
      children: [
        m.jsxs("div", {
          className: "settings-header",
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("b", { children: "API 设置" }),
                m.jsx("span", {
                  children:
                    "纯前端，本页填写的信息只保存在你的浏览器 localStorage。",
                }),
              ],
            }),
            m.jsx("button", { type: "button", onClick: t, children: "关闭" }),
          ],
        }),
        m.jsxs("div", {
          className: "settings-grid",
          children: [
            m.jsxs("div", {
              className: "platform-list",
              children: [
                m.jsx("div", { className: "side-title", children: "API 地址" }),
                n.platforms.map((P) =>
                  m.jsxs(
                    "button",
                    {
                      className: P.id === n.activePlatformId ? "active" : "",
                      type: "button",
                      onClick: () => {
                        const L = Dt(n, P.id),
                          F = kt(L),
                          E = Up(L);
                        (v([]), w([]));
                        r({
                          ...n,
                          activePlatformId: P.id,
                          defaultImageModel: F.includes(n.defaultImageModel)
                            ? n.defaultImageModel
                            : F[0] || "",
                          defaultTextModel: E.includes(n.defaultTextModel)
                            ? n.defaultTextModel
                            : E[0] || "",
                        });
                      },
                      children: [
                        m.jsx(oC, { size: 14 }),
                        " ",
                        P.name || "未命名平台",
                      ],
                    },
                    P.id,
                  ),
                ),
                m.jsxs("button", {
                  type: "button",
                  className: "add-platform",
                  onClick: u,
                  children: [m.jsx(mo, { size: 14 }), " 添加平台"],
                }),
              ],
            }),
            m.jsxs("div", {
              className: "settings-form",
              children: [
                m.jsxs("label", {
                  children: [
                    "平台名称",
                    m.jsx("input", {
                      value: l.name || "",
                      onChange: (P) => a({ name: P.target.value }),
                    }),
                  ],
                }),
                m.jsxs("label", {
                  children: [
                    "总 API 地址",
                    m.jsx("input", {
                      value: l.baseUrl || "",
                      placeholder: "例如：https://你的中转平台/v1",
                      onChange: (P) => a({ baseUrl: P.target.value }),
                    }),
                  ],
                }),
                m.jsxs("label", {
                  children: [
                    "API 密钥",
                    m.jsx("input", {
                      value: l.apiKey || "",
                      type: "password",
                      placeholder: "sk-...",
                      onChange: (P) => a({ apiKey: P.target.value }),
                    }),
                  ],
                }),
                m.jsxs("label", {
                  className: "model-input-box",
                  children: [
                    "图片模型（只用你自己输入的，每行/逗号分隔）",
                    m.jsx("textarea", {
                      className: "settings-model-input",
                      value: p.join("\n"),
                      placeholder: "例如：gpt-image-2\nnano-banana-pro",
                      onPointerDown: Lt,
                      onMouseDown: Lt,
                      onChange: (P) => x(P.target.value),
                    }),
                  ],
                }),
                m.jsxs("label", {
                  className: "model-input-box",
                  children: [
                    "文本模型 / 反推模型（只用你自己输入的，每行/逗号分隔）",
                    m.jsx("textarea", {
                      className: "settings-model-input",
                      value: y.join("\n"),
                      placeholder:
                        "例如：gemini-3.1-pro-preview\ndeepseek-v4-pro",
                      onPointerDown: Lt,
                      onMouseDown: Lt,
                      onChange: (P) => S(P.target.value),
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "model-fetch-box",
                  children: [
                    m.jsxs("div", {
                      className: "model-fetch-actions",
                      children: [
                        m.jsxs("button", {
                          type: "button",
                          onClick: N,
                          children: [m.jsx(rC, { size: 14 }), " 获取模型"],
                        }),
                        m.jsx("button", {
                          type: "button",
                          onClick: () => w(g),
                          disabled: !g.length,
                          children: "全选",
                        }),
                        m.jsx("button", {
                          type: "button",
                          onClick: () => w([]),
                          disabled: !g.length,
                          children: "清空",
                        }),
                        m.jsx("button", {
                          type: "button",
                          onClick: () => k("image"),
                          disabled: !g.length,
                          children: "应用到图片模型",
                        }),
                        m.jsx("button", {
                          type: "button",
                          onClick: () => k("text"),
                          disabled: !g.length,
                          children: "应用到文本模型",
                        }),
                      ],
                    }),
                    g.length
                      ? m.jsx("div", {
                          className: "model-fetch-list",
                          children: g.map((P) =>
                            m.jsxs(
                              "label",
                              {
                                children: [
                                  m.jsx("input", {
                                    type: "checkbox",
                                    checked: h.includes(P),
                                    onChange: () => M(P),
                                  }),
                                  m.jsx("span", { children: P }),
                                ],
                              },
                              P,
                            ),
                          ),
                        })
                      : null,
                  ],
                }),
                m.jsxs("div", {
                  className: "two-cols",
                  children: [
                    m.jsxs("label", {
                      children: [
                        "默认文本 / 反推模型",
                        m.jsx("select", {
                          value: n.defaultTextModel,
                          onChange: (P) =>
                            r({ ...n, defaultTextModel: P.target.value }),
                          children: (y.length ? y : [""]).map((P) =>
                            m.jsx(
                              "option",
                              { value: P, children: P || "请先添加文本模型" },
                              P || "empty-text",
                            ),
                          ),
                        }),
                      ],
                    }),
                    m.jsxs("label", {
                      children: [
                        "默认生图模型",
                        m.jsx("select", {
                          value: n.defaultImageModel,
                          onChange: (P) =>
                            r({ ...n, defaultImageModel: P.target.value }),
                          children: (p.length ? p : [""]).map((P) =>
                            m.jsx(
                              "option",
                              { value: P, children: P || "请先添加图片模型" },
                              P || "empty-image",
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "settings-actions",
                  children: [
                    m.jsxs("button", {
                      type: "button",
                      className: "primary save-settings-button",
                      onClick: _,
                      children: [m.jsx(lC, { size: 15 }), " 保存设置"],
                    }),
                    m.jsxs("button", {
                      type: "button",
                      className: "primary",
                      onClick: c,
                      children: [m.jsx(rC, { size: 15 }), " 测试 API 链接"],
                    }),
                    m.jsxs("button", {
                      type: "button",
                      onClick: f,
                      children: [m.jsx(cf, { size: 15 }), " 查询额度"],
                    }),
                    m.jsxs("button", {
                      type: "button",
                      className: "danger",
                      onClick: d,
                      children: [m.jsx(aC, { size: 15 }), " 删除平台"],
                    }),
                  ],
                }),
                i
                  ? m.jsx("div", { className: "test-status", children: i })
                  : null,
                m.jsxs("div", {
                  className: "notice-box",
                  children: [
                    m.jsx("b", { children: "模型规则：" }),
                    "现在节点模型下拉只显示你在当前 API 平台里手动添加的模型，不再混入任何内置模型。",
                    m.jsx("br", {}),
                    m.jsx("b", { children: "图片模型" }),
                    "会同步到图片生成、高清放大、多角度节点；",
                    m.jsx("b", { children: "文本模型" }),
                    "会同步到反推提示词和默认文本/反推模型。",
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
function vM() {
  var mr;
  const e = Vl(),
    [t, n] = z.useState(EC),
    [r, o, i] = mN(xC),
    [s, l, a] = yN(wC),
    [u, d] = z.useState(null),
    [c, f] = z.useState(!1),
    [p, y] = z.useState([]),
    [x, S] = z.useState(!1),
    g = z.useRef(null),
    v = z.useRef(!1),
    h = z.useRef(null),
    w = z.useRef({ nodes: [], edges: [] }),
    [_, N] = z.useState(null),
    M = z.useCallback((O) => {
      (n(O), _C(O));
    }, []),
    k = z.useCallback((O, B = "info") => {
      y((U) =>
        [
          {
            id: Ft("log"),
            text: O,
            type: B,
            time: new Date().toLocaleTimeString(),
          },
          ...U,
        ].slice(0, 80),
      );
    }, []),
    j = z.useCallback(
      (O, B) => {
        o((U) =>
          U.map((V) => (V.id === O ? { ...V, data: { ...V.data, ...B } } : V)),
        );
      },
      [o],
    ),
    R = z.useCallback(
      async (O, B = "图片.png") => {
        try {
          const U = (B || "图片.png").replace(/[\\/:*?"<>|]/g, "-"),
            V = /\.(png|jpe?g|webp|gif|mp4|mov|webm|m4v)$/i.test(U)
              ? U
              : `${U}.png`;
          let W = O,
            J = "";
          try {
            if (!uo(O)) {
              const Q = await fetch(O, { mode: "cors" });
              Q.ok && ((J = URL.createObjectURL(await Q.blob())), (W = J));
            }
          } catch {}
          const le = document.createElement("a");
          ((le.href = W),
            (le.download = V),
            (le.rel = "noopener"),
            (le.style.display = "none"),
            document.body.appendChild(le),
            le.click(),
            le.remove(),
            J && setTimeout(() => URL.revokeObjectURL(J), 500),
            k("图片已开始下载到本地。", "success"));
        } catch (U) {
          k(`下载失败：${U.message}`, "error");
        }
      },
      [k],
    ),
    P = z.useCallback((O, B = "图片预览") => {
      O && N({ image: O, name: B });
    }, []),
    Y = z.useCallback(
      (O, B) => {
        const U = e.getNodes(),
          V = e.getEdges().filter((W) => W.target === O),
          J = new Map(U.map((W) => [W.id, W]));
        let le = null;
        for (const W of V) {
          const Jt = J.get(W.source);
          if (!Jt) continue;
          if (Jt.type === "imageNode" && Jt.data.image === B) {
            le = W.id;
            break;
          }
          if (
            (Jt.type === "generateNode" ||
              Jt.type === "upscaleNode" ||
              Jt.type === "angleNode") &&
            Array.isArray(Jt.data.outputImages) &&
            Jt.data.outputImages.includes(B)
          ) {
            le = W.id;
            break;
          }
        }
        if (!le && V.length === 1) le = V[0].id;
        return le
          ? (l((W) => W.filter((Jt) => Jt.id !== le)),
            k("已断开这张上游图片的连接。", "success"),
            !0)
          : (k("没有找到可断开的对应连接。", "warn"), !1);
      },
      [e, l, k],
    ),
    L = z.useCallback(
      (O) => ({
        ...O,
        data: {
          ...O.data,
          updateNode: j,
          runNode: (B) => {
            var U;
            return (U = C.current) == null ? void 0 : U.call(C, B);
          },
          runGroup: (B) => {
            var U;
            return (U = b.current) == null ? void 0 : U.call(b, B);
          },
          downloadImage: R,
          openImagePreview: P,
          removeUpstreamConnection: Y,
          addLog: k,
          settings: t,
        },
      }),
      [j, R, P, Y, k, t],
    ),
    F = z.useCallback(
      (O, B, U = {}) => {
        const V = Ft(O),
          W = { id: V, type: O, position: B, selected: !0 },
          J = {
            imageNode: {
              title: "图片节点",
              image: U.image || "",
              fileName: U.fileName || "",
              status: U.image ? "已导入" : "等待上传",
            },
            generateNode: {
              title: "图片生成",
              prompt: "",
              platformId: t.activePlatformId,
              model: kt(Ar(t)).includes(t.defaultImageModel)
                ? t.defaultImageModel
                : gr(Ar(t)),
              modelSource: "default",
              ratio: "1:1",
              quality: "1k",
              count: 1,
              upstreamImages: [],
              status: "等待运行",
            },
            videoNode: {
              title: "视频生成",
              prompt: "",
              platformId: t.activePlatformId,
              size: "1280x720",
              duration: "10",
              imageUrls: "",
              videoUrl: "",
              upstreamImages: [],
              outputVideo: "",
              outputVideoId: "",
              status: "等待运行",
            },
            angleNode: {
              title: "多角度节点",
              prompt: "",
              platformId: t.activePlatformId,
              model: kt(Ar(t)).includes(t.defaultImageModel)
                ? t.defaultImageModel
                : gr(Ar(t)),
              modelSource: "default",
              ratio: "自适应",
              quality: "1k",
              count: 1,
              angleYaw: 0,
              anglePitch: 0,
              angleScale: "medium",
              upstreamImages: [],
              status: "等待运行",
            },
            upscaleNode: {
              title: "高清放大 / 大图重绘",
              platformId: t.activePlatformId,
              model: Ql(Ar(t)),
              modelSource: "default",
              quality: Yl,
              upstreamImages: [],
              status: "等待运行",
            },
            reverseNode: {
              title: "反推提示词",
              platformId: t.activePlatformId,
              model: t.defaultTextModel,
              text: "",
              upstreamImages: [],
              status: "等待运行",
            },
            textNode: { title: "文本", text: "", status: "可编辑" },
          },
          le = L({ ...W, data: { ...(J[O] || J.textNode), ...U } });
        return (
          o((Q) => Q.map((ue) => ({ ...ue, selected: !1 })).concat(le)),
          u != null &&
            u.sourceNodeId &&
            l((Q) =>
              Ou(
                {
                  id: Ft("edge"),
                  source: u.sourceNodeId,
                  target: V,
                  type: "customEdge",
                  markerEnd: { type: sn.ArrowClosed, width: 18, height: 18 },
                  style: { strokeWidth: 2 },
                },
                Q,
              ),
            ),
          d(null),
          V
        );
      },
      [u, l, o, t.activePlatformId, t.defaultImageModel, t.defaultTextModel, L],
    ),
    Z = z.useEffect(() => {
      window.__AI2_CANVAS_BRIDGE = {
        get: () => ({
          nodes: e.getNodes(),
          edges: e.getEdges(),
          settings: t,
          createdAt: Date.now(),
        }),
        load: (O) => {
          try {
            (o((O && O.nodes) || []),
              l((O && O.edges) || []),
              O && O.settings && M(O.settings),
              k("已打开历史画布。", "success"),
              setTimeout(
                () => e.fitView({ padding: 0.25, duration: 500 }),
                80,
              ));
          } catch (B) {
            k(
              `打开历史失败：${(B == null ? void 0 : B.message) || B}`,
              "error",
            );
          }
        },
      };
      return () => {
        window.__AI2_CANVAS_BRIDGE = null;
      };
    }, [e, t, o, l, M, k]),
    E = z.useCallback(
      (O, B = e.getNodes(), U = e.getEdges()) => {
        const V = new Map(B.map((ue) => [ue.id, ue])),
          W = [],
          J = [],
          Zt = [],
          le = new Set(),
          Q = (ue) => {
            if (le.has(ue)) return;
            (le.add(ue),
              U.filter((ze) => ze.target === ue).forEach((ze) => {
                var Zt;
                const je = V.get(ze.source);
                if (je) {
                  if (je.type === "imageNode" && je.data.image) {
                    W.push(je.data.image);
                    je.data.mjTaskId &&
                      Zt.push({
                        image: je.data.image,
                        mjTaskId: je.data.mjTaskId,
                        mjMode: je.data.mjMode,
                        mjButtons: je.data.mjButtons || [],
                      });
                    return;
                  }
                  if (
                    (je.type === "generateNode" ||
                      je.type === "upscaleNode" ||
                      je.type === "angleNode") &&
                    (Zt = je.data.outputImages) != null &&
                    Zt.length
                  ) {
                    W.push(...je.data.outputImages);
                    Array.isArray(je.data.mjTasks) && Zt.push(...je.data.mjTasks);
                    return;
                  }
                  (je.type === "reverseNode" &&
                    je.data.text &&
                    J.push(je.data.text),
                    je.type === "textNode" &&
                      je.data.text &&
                      J.push(je.data.text),
                    Q(je.id));
                }
              }));
          };
        return (
          Q(O),
          {
            images: Rn(W),
            midjourneyTasks: Zt,
            text: J.filter(Boolean).join(`
`),
          }
        );
      },
      [e],
    );
  (z.useEffect(() => {
    o((O) => {
      let B = !1;
      const U = O.map((V) => {
        if (
          ![
            "generateNode",
            "upscaleNode",
            "reverseNode",
            "angleNode",
            "videoNode",
          ].includes(
            V.type,
          )
        )
          return V;
        const { images: W, midjourneyTasks: J } = E(V.id, O, s),
          le = JSON.stringify(J) === JSON.stringify(V.data.upstreamMidjourneyTasks || []);
        return GC(W, V.data.upstreamImages || []) && le
          ? V
          : ((B = !0), {
              ...V,
              data: { ...V.data, upstreamImages: W, upstreamMidjourneyTasks: J },
            });
      });
      return B ? U : O;
    });
  }, [r, s, E, o]),
    z.useEffect(() => {
      o((O) => {
        let B = !1;
        const U = O.map((V) => {
          if (!["generateNode", "upscaleNode", "angleNode"].includes(V.type))
            return V;
          const W = Vp(t, V.data, V.type);
          return Bp(V.data, W)
            ? V
            : ((B = !0), { ...V, data: { ...V.data, ...W } });
        });
        return B ? U : O;
      });
    }, [t.activePlatformId, t.defaultImageModel, t.platforms, o]));
  const $ = z.useCallback(
      (O, B) => {
        const U = O.position.x + 360,
          V = O.position.y,
          W = B.map((le, Q) =>
            L({
              id: Ft("result-image"),
              type: "imageNode",
              position: {
                x: U + (Q % 2) * 220,
                y: V + Math.floor(Q / 2) * 260,
              },
              data: {
                title: `结果图片 ${Q + 1}`,
                image: kJ(le),
                ...(wJ(le) || {}),
                fileName: `生成图片-${Date.now()}-${Q + 1}.png`,
                status: "生成成功",
              },
            }),
          ),
          J = W.map((le) => ({
            id: Ft("edge"),
            source: O.id,
            target: le.id,
            type: "customEdge",
            markerEnd: { type: sn.ArrowClosed, width: 18, height: 18 },
            style: { strokeWidth: 2 },
          }));
        (o((le) => le.concat(W)), l((le) => le.concat(J)));
      },
      [l, o, L],
    ),
    T = z.useRef(new Set()),
    D = z.useCallback(
      async (O) => {
        var W;
        const B = e.getNodes(),
          U = e.getEdges(),
          V = B.find((J) => J.id === O);
        if (V) {
          if (T.current.has(O) || ((W = V.data) != null && W.running)) {
            k("这个节点正在运行中，已忽略重复触发。", "info");
            return;
          }
          T.current.add(O);
          try {
            if (
              ![
                "generateNode",
                "upscaleNode",
                "reverseNode",
                "angleNode",
                "videoNode",
              ].includes(V.type)
            ) {
              k("这个节点不需要运行。", "info");
              return;
            }
            (j(O, { running: !0, status: "运行中..." }),
              k(`开始运行：${V.data.title || V.type}`, "info"));
            const J = E(O, B, U);
            let le = V.data;
            if (V.type === "generateNode" || V.type === "upscaleNode") {
              const Q = Vp(t, V.data, V.type);
              ((le = { ...V.data, ...Q }), Bp(V.data, Q) || j(O, Q));
              const ue = Dt(t, le.platformId);
              k(
                `使用 API：${yf(ue)}；模型：${le.model}；分组：${XC(le.model, ue)}；上游参考图：${J.images.length} 张。`,
                "info",
              );
            }
            if (V.type === "generateNode") {
              let Q = 0;
              const ue = await tM({
                settings: t,
                nodeData: le,
                upstreamText: J.text,
                upstreamImages: J.images,
                onRequest: (ce) => {
                  ((Q += 1), k(`实际请求 ${Q}：${ce}`, "info"));
                },
              });
              (j(O, {
                running: !1,
                status: "生成成功",
                outputImages: ue.map(kJ),
                mjTasks: ue.map(wJ).filter(Boolean),
              }),
                $(V, ue),
                setTimeout(
                  () =>
                    window.dispatchEvent(
                      new CustomEvent("ai2:canvas-autosave-disabled", {
                        detail: { title: "图片生成成功" },
                      }),
                    ),
                  700,
                ),
                k(
                  `生成成功：得到 ${ue.length} 张图片；前端实际发送 ${Q} 次请求。`,
                  Q === 1 ? "success" : "warn",
                ));
            }
            if (V.type === "angleNode") {
              let Q = 0;
              const uePrompt = `多角度生成：请参考上游图片，生成同一主体/同一产品的新角度视图。水平旋转 ${Number(le.angleYaw || 0)}°，垂直俯仰 ${Number(le.anglePitch || 0)}°，镜头距离：${le.angleScale === "close" ? "近景特写" : le.angleScale === "wide" ? "广角远景" : "中景"}。必须保持主体身份、结构、比例、颜色、材质、品牌标识和关键细节一致，只改变视角、镜头距离和透视关系。不要改变产品设计，不要添加多余文字，不要生成拼图。画面保持商业摄影/高端电商海报质感，边缘清晰，真实光影，细节锐利。`,
                ce = { ...le, prompt: uePrompt };
              const xe = await tM({
                settings: t,
                nodeData: ce,
                upstreamText: J.text,
                upstreamImages: J.images,
                onRequest: (Te) => {
                  ((Q += 1), k(`实际请求 ${Q}：${Te}`, "info"));
                },
              });
              (j(O, {
                running: !1,
                status: "多角度完成",
                outputImages: xe.map(kJ),
                mjTasks: xe.map(wJ).filter(Boolean),
              }),
                $(V, xe),
                setTimeout(
                  () =>
                    window.dispatchEvent(
                      new CustomEvent("ai2:canvas-autosave-disabled", {
                        detail: { title: "多角度生成成功" },
                      }),
                    ),
                  700,
                ),
                k(
                  `多角度生成成功：得到 ${xe.length} 张图片；前端实际发送 ${Q} 次请求。`,
                  Q === 1 ? "success" : "warn",
                ));
            }
            if (V.type === "upscaleNode") {
              let Q = 0;
              const ue = await nM({
                settings: t,
                nodeData: le,
                upstreamImages: J.images,
                upstreamMidjourneyTasks: J.midjourneyTasks,
                onRequest: (ce) => {
                  ((Q += 1), k(`实际请求 ${Q}：${ce}`, "info"));
                },
              });
              (j(O, {
                running: !1,
                status: "高清完成",
                outputImages: ue.map(kJ),
                mjTasks: ue.map(wJ).filter(Boolean),
              }),
                $(V, ue),
                setTimeout(
                  () =>
                    window.dispatchEvent(
                      new CustomEvent("ai2:canvas-autosave-disabled", {
                        detail: { title: "高清放大完成" },
                      }),
                    ),
                  700,
                ),
                k(
                  `高清放大 / 大图重绘完成：得到 ${ue.length} 张图片；前端实际发送 ${Q} 次请求。`,
                  Q === 1 ? "success" : "warn",
                ));
            }
            if (V.type === "videoNode") {
              let Q = 0;
              const ue = await runVideoGeneration({
                settings: t,
                nodeData: V.data,
                upstreamText: J.text,
                upstreamImages: J.images,
                onRequest: (ce) => {
                  ((Q += 1), k(`实际请求 ${Q}：${ce}`, "info"));
                },
              });
              (j(O, {
                running: !1,
                status: ue.url ? "视频完成" : "任务已提交",
                outputVideo: ue.url || "",
                outputVideoId: ue.id || "",
                outputRaw: ue.raw,
              }),
                k(
                  ue.url
                    ? "视频生成成功：已解析到视频地址。"
                    : `视频任务已提交：${ue.id}`,
                  "success",
                ));
            }
            if (V.type === "reverseNode") {
              const Q = await rM({
                settings: t,
                nodeData: V.data,
                upstreamImages: J.images,
              });
              (j(O, { running: !1, status: "反推成功", text: Q }),
                k("反推提示词成功。", "success"));
            }
          } catch (J) {
            const le = (J == null ? void 0 : J.message) || String(J);
            (j(O, { running: !1, status: "失败" }),
              k(`运行失败：${le}`, "error"));
          } finally {
            (T.current.delete(O), j(O, { running: !1 }));
          }
        }
      },
      [e, k, j, E, t, $],
    ),
    C = z.useRef(D);
  z.useEffect(() => {
    C.current = D;
  }, [D]);
  const I = z.useCallback(
      async (O, B, U) => {
        var W, J, le;
        if (!O.length) {
          k(U, "info");
          return;
        }
        const V = KC(O, B);
        for (const Q of V)
          (k(
            Q.length > 1
              ? `并行运行 ${Q.length} 个互不依赖的任务。`
              : `运行任务：${((J = (W = Q[0]) == null ? void 0 : W.data) == null ? void 0 : J.title) || ((le = Q[0]) == null ? void 0 : le.type) || "节点"}。`,
            "info",
          ),
            await Promise.all(
              Q.map((ue) => {
                var ce;
                return (ce = C.current) == null ? void 0 : ce.call(C, ue.id);
              }),
            ),
            await QC());
      },
      [k],
    ),
    A = z.useCallback(async () => {
      if (!x) {
        S(!0);
        try {
          const O = e.getNodes(),
            B = e.getEdges(),
            U = O.filter((V) =>
              [
                "reverseNode",
                "generateNode",
                "upscaleNode",
                "angleNode",
                "videoNode",
              ].includes(V.type),
            );
          await I(U, B, "画布里还没有可运行的节点。");
        } finally {
          S(!1);
        }
      }
    }, [x, e, I]),
    H = z.useCallback(
      async (O) => {
        const B = e.getNodes(),
          U = e.getEdges(),
          V = B.filter(
            (W) =>
              W.parentId === O &&
              [
                "reverseNode",
                "generateNode",
                "upscaleNode",
                "angleNode",
                "videoNode",
              ].includes(W.type),
          );
        await I(
          V,
          U,
          "这个分组里没有可运行的图片生成、视频生成、高清放大或反推节点。",
        );
      },
      [e, I],
    ),
    b = z.useRef(H);
  z.useEffect(() => {
    b.current = H;
  }, [H]);
  const K = z.useCallback(
      (O) => {
        ((v.current = !0),
          l((B) =>
            Ou(
              {
                ...O,
                id: Ft("edge"),
                type: "customEdge",
                markerEnd: { type: sn.ArrowClosed, width: 18, height: 18 },
                style: { strokeWidth: 2 },
              },
              B,
            ),
          ));
      },
      [l],
    ),
    G = z.useCallback((O, B) => {
      ((v.current = !1), (g.current = B));
    }, []),
    te = z.useCallback(
      (O) => {
        var Q, ue, ce, ze, je, Zt, yr;
        const B = g.current,
          U =
            O.clientX ??
            ((ue = (Q = O.changedTouches) == null ? void 0 : Q[0]) == null
              ? void 0
              : ue.clientX),
          V =
            O.clientY ??
            ((ze = (ce = O.changedTouches) == null ? void 0 : ce[0]) == null
              ? void 0
              : ze.clientY),
          W = O.target,
          J = !!(
            (je = W == null ? void 0 : W.closest) != null &&
            je.call(W, ".react-flow__handle.target")
          ),
          le = !!(
            (Zt = W == null ? void 0 : W.closest) != null &&
            Zt.call(W, ".react-flow__node")
          );
        if (
          !v.current &&
          B != null &&
          B.nodeId &&
          (B == null ? void 0 : B.handleType) === "source" &&
          !J
        ) {
          const be =
              (yr = h.current) == null ? void 0 : yr.getBoundingClientRect(),
            se = e.screenToFlowPosition({ x: U, y: V });
          (d({
            flow: se,
            screen: {
              x: Math.max(
                12,
                Math.min(
                  (U || 0) - ((be == null ? void 0 : be.left) || 0),
                  ((be == null ? void 0 : be.width) || window.innerWidth) - 210,
                ),
              ),
              y: Math.max(
                72,
                Math.min(
                  (V || 0) - ((be == null ? void 0 : be.top) || 0),
                  ((be == null ? void 0 : be.height) || window.innerHeight) -
                    210,
                ),
              ),
            },
            sourceNodeId: B.nodeId,
          }),
            le && k("未连接到节点左侧输入口，可在菜单里选择新节点。", "info"));
        }
        ((g.current = null), (v.current = !1));
      },
      [e, k],
    ),
    ee = z.useCallback(
      (O, B = null) => {
        var W;
        (O.preventDefault(), O.stopPropagation());
        const U = (W = h.current) == null ? void 0 : W.getBoundingClientRect(),
          V = e.screenToFlowPosition({ x: O.clientX, y: O.clientY });
        d({
          flow: V,
          screen: {
            x: Math.max(
              12,
              Math.min(
                O.clientX - ((U == null ? void 0 : U.left) || 0),
                ((U == null ? void 0 : U.width) || window.innerWidth) - 210,
              ),
            ),
            y: Math.max(
              72,
              Math.min(
                O.clientY - ((U == null ? void 0 : U.top) || 0),
                ((U == null ? void 0 : U.height) || window.innerHeight) - 210,
              ),
            ),
          },
          sourceNodeId: B,
        });
      },
      [e],
    ),
    ne = z.useCallback(
      (O) => {
        ee(O, null);
      },
      [ee],
    ),
    X = z.useCallback(
      (O) => {
        var B, U;
        ((U = (B = O.target) == null ? void 0 : B.closest) != null &&
          U.call(
            B,
            ".react-flow__node, .context-menu, .top-toolbar, .run-log-panel, .react-flow__controls, .react-flow__minimap",
          )) ||
          ee(O, null);
      },
      [ee],
    ),
    re = z.useCallback(
      async (O) => {
        O.preventDefault();
        const B = e.screenToFlowPosition({ x: O.clientX, y: O.clientY }),
          U = Array.from(O.dataTransfer.files || []).filter((W) =>
            W.type.startsWith("image/"),
          );
        if (U.length) {
          for (let W = 0; W < U.length; W += 1)
            try {
              const J = await Gu(U[W]);
              F(
                "imageNode",
                { x: B.x + W * 240, y: B.y + W * 24 },
                { image: J, fileName: U[W].name },
              );
            } catch (J) {
              k(`拖拽上传失败：${J.message}`, "error");
            }
          return;
        }
        const V =
          O.dataTransfer.getData("text/uri-list") ||
          O.dataTransfer.getData("text/plain");
        if (V && /^(https?:\/\/|data:image)/.test(V)) {
          F("imageNode", B, { image: V.trim(), fileName: "外部图片" });
          return;
        }
        k("没有识别到图片，请拖入 png、jpg、webp 等图片文件。", "error");
      },
      [e, F, k],
    ),
    fe = z.useCallback((O) => {
      (O.preventDefault(), (O.dataTransfer.dropEffect = "copy"));
    }, []),
    ae = z.useCallback(
      async (O) => {
        const B = Array.from(O || []).filter((V) =>
          V.type.startsWith("image/"),
        );
        if (!B.length) return;
        const U = e.screenToFlowPosition({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        });
        for (let V = 0; V < B.length; V += 1)
          try {
            const W = await Gu(B[V]);
            F(
              "imageNode",
              { x: U.x + V * 240, y: U.y + V * 30 },
              { image: W, fileName: B[V].name },
            );
          } catch (W) {
            k(`上传失败：${W.message}`, "error");
          }
      },
      [e, F, k],
    ),
    ie = z.useCallback(() => {
      const O = e
          .getNodes()
          .filter((U) => U.selected)
          .map((U) => U.id),
        B = e
          .getEdges()
          .filter((U) => U.selected)
          .map((U) => U.id);
      (!O.length && !B.length) ||
        (o((U) => U.filter((V) => !O.includes(V.id))),
        l((U) =>
          U.filter(
            (V) =>
              !B.includes(V.id) &&
              !O.includes(V.source) &&
              !O.includes(V.target),
          ),
        ));
    }, [e, l, o]),
    oe = z.useCallback(() => {
      const O = e.getNodes().filter((V) => V.selected),
        B = new Set(O.map((V) => V.id)),
        U = e.getEdges().filter((V) => B.has(V.source) && B.has(V.target));
      ((w.current = { nodes: O, edges: U }),
        k(`已复制 ${O.length} 个节点。`, "success"));
    }, [e, k]),
    pe = z.useCallback(() => {
      const O = w.current;
      if (!O.nodes.length) return;
      const B = new Map(),
        U = O.nodes.map((W) => {
          const J = Ft("paste");
          return (
            B.set(W.id, J),
            L({
              ...W,
              id: J,
              parentId: void 0,
              position: { x: W.position.x + 70, y: W.position.y + 70 },
              selected: !0,
              data: {
                ...W.data,
                status: W.type === "imageNode" ? W.data.status : "已粘贴",
              },
            })
          );
        }),
        V = O.edges
          .map((W) => ({
            ...W,
            id: Ft("edge"),
            source: B.get(W.source),
            target: B.get(W.target),
            selected: !1,
          }))
          .filter((W) => W.source && W.target);
      (o((W) => W.map((J) => ({ ...J, selected: !1 })).concat(U)),
        l((W) => W.concat(V)));
    }, [o, l, L]),
    ve = z.useCallback(() => {
      const O = e
        .getNodes()
        .filter((ce) => ce.selected && ce.type !== "groupNode" && !ce.parentId);
      if (O.length < 2) {
        k("请先框选至少 2 个节点，再点击打组。", "error");
        return;
      }
      const B = Math.min(...O.map((ce) => ce.position.x)),
        U = Math.min(...O.map((ce) => ce.position.y)),
        V = Math.max(
          ...O.map((ce) => {
            var ze;
            return (
              ce.position.x +
              (((ze = ce.measured) == null ? void 0 : ze.width) ||
                ce.width ||
                260)
            );
          }),
        ),
        W = Math.max(
          ...O.map((ce) => {
            var ze;
            return (
              ce.position.y +
              (((ze = ce.measured) == null ? void 0 : ze.height) ||
                ce.height ||
                180)
            );
          }),
        ),
        J = Ft("group"),
        le = { x: B - 48, y: U - 64 },
        Q = L({
          id: J,
          type: "groupNode",
          position: le,
          selected: !0,
          data: { title: "分组节点", width: V - B + 96, height: W - U + 120 },
          style: { width: V - B + 96, height: W - U + 120 },
        }),
        ue = new Set(O.map((ce) => ce.id));
      (o((ce) => [
        Q,
        ...ce.map((ze) =>
          ue.has(ze.id)
            ? {
                ...ze,
                selected: !1,
                parentId: J,
                extent: "parent",
                position: { x: ze.position.x - le.x, y: ze.position.y - le.y },
              }
            : { ...ze, selected: !1 },
        ),
      ]),
        k("已打组，可拖动分组整体移动，也可点击整组执行。", "success"));
    }, [e, o, k, L]),
    he = z.useCallback(() => {
      const O = e
        .getNodes()
        .filter((U) => U.selected && U.type === "groupNode");
      if (!O.length) {
        k("请先选中分组节点。", "error");
        return;
      }
      const B = new Map(O.map((U) => [U.id, U]));
      (o((U) =>
        U.filter((V) => !B.has(V.id)).map((V) => {
          const W = B.get(V.parentId);
          return W
            ? {
                ...V,
                parentId: void 0,
                extent: void 0,
                position: {
                  x: V.position.x + W.position.x,
                  y: V.position.y + W.position.y,
                },
              }
            : V;
        }),
      ),
        k("已解组。", "success"));
    }, [e, o, k]),
    Oe = z.useCallback(
      (O) => {
        const B = e
          .getNodes()
          .filter((W) => W.selected && W.type !== "groupNode");
        if (B.length < 2) return;
        const U = Math.min(
            ...(O === "left"
              ? B.map((W) => W.position.x)
              : B.map((W) => W.position.y)),
          ),
          V = new Set(B.map((W) => W.id));
        o((W) =>
          W.map((J) =>
            V.has(J.id)
              ? {
                  ...J,
                  position:
                    O === "left"
                      ? { ...J.position, x: U }
                      : { ...J.position, y: U },
                }
              : J,
          ),
        );
      },
      [e, o],
    ),
    Ot = z.useCallback(
      (O) => {
        const B = e
          .getNodes()
          .filter((Q) => Q.selected && Q.type !== "groupNode");
        if (B.length < 3) return;
        const U = [...B].sort((Q, ue) =>
            O === "horizontal"
              ? Q.position.x - ue.position.x
              : Q.position.y - ue.position.y,
          ),
          V = U[0],
          W = U[U.length - 1],
          J =
            O === "horizontal"
              ? (W.position.x - V.position.x) / (U.length - 1)
              : (W.position.y - V.position.y) / (U.length - 1),
          le = new Map(
            U.map((Q, ue) => [
              Q.id,
              O === "horizontal"
                ? { ...Q.position, x: V.position.x + J * ue }
                : { ...Q.position, y: V.position.y + J * ue },
            ]),
          );
        o((Q) =>
          Q.map((ue) =>
            le.has(ue.id) ? { ...ue, position: le.get(ue.id) } : ue,
          ),
        );
      },
      [e, o],
    ),
    Et = z.useCallback(() => {
      const O = e
          .getNodes()
          .filter((se) => se.type !== "groupNode" && !se.parentId),
        B = e.getEdges(),
        U = new Map(O.map((se) => [se.id, se])),
        V = new Map(O.map((se, xe) => [se.id, xe])),
        W = new Map(O.map((se) => [se.id, []])),
        J = new Map(O.map((se) => [se.id, 0]));
      (B.forEach((se) => {
        !U.has(se.source) ||
          !U.has(se.target) ||
          (W.get(se.source).push(se.target),
          J.set(se.target, (J.get(se.target) || 0) + 1));
      }),
        W.forEach((se) =>
          se.sort((xe, Qe) => (V.get(xe) || 0) - (V.get(Qe) || 0)),
        ));
      const le = O.filter((se) => (J.get(se.id) || 0) === 0).sort(
          (se, xe) =>
            se.position.y - xe.position.y || se.position.x - xe.position.x,
        ),
        Q = new Map(),
        ue = le.map((se) => se.id);
      for (le.forEach((se) => Q.set(se.id, 0)); ue.length; ) {
        const se = ue.shift(),
          xe = Q.get(se) || 0;
        (W.get(se) || []).forEach((Qe) => {
          const vr = Math.max(Q.get(Qe) ?? 0, xe + 1);
          (!Q.has(Qe) || vr > Q.get(Qe)) && (Q.set(Qe, vr), ue.push(Qe));
        });
      }
      O.forEach((se) => {
        Q.has(se.id) || Q.set(se.id, 0);
      });
      const ce = new Map();
      (O.forEach((se) => {
        const xe = Q.get(se.id) || 0;
        (ce.has(xe) || ce.set(xe, []), ce.get(xe).push(se));
      }),
        ce.forEach((se) =>
          se.sort((xe, Qe) => {
            var Di, Ri;
            const vr =
                (Di = B.find((yo) => yo.target === xe.id)) == null
                  ? void 0
                  : Di.source,
              ql =
                (Ri = B.find((yo) => yo.target === Qe.id)) == null
                  ? void 0
                  : Ri.source;
            return (
              (Q.get(vr) || 0) - (Q.get(ql) || 0) ||
              xe.position.y - Qe.position.y ||
              (V.get(xe.id) || 0) - (V.get(Qe.id) || 0)
            );
          }),
        ));
      const ze = -220,
        je = 40,
        Zt = 360,
        yr = 280,
        be = new Map();
      ([...ce.keys()]
        .sort((se, xe) => se - xe)
        .forEach((se) => {
          ce.get(se).forEach((xe, Qe) => {
            be.set(xe.id, { x: ze + se * Zt, y: je + Qe * yr });
          });
        }),
        o((se) =>
          se.map((xe) =>
            be.has(xe.id) ? { ...xe, position: be.get(xe.id) } : xe,
          ),
        ),
        k("已按照连接顺序自动排版。", "success"),
        setTimeout(() => e.fitView({ padding: 0.25, duration: 500 }), 80));
    }, [e, o, k]);
  z.useEffect(() => {
    const O = (B) => {
      var J, le, Q;
      const U =
        (le = (J = B.target) == null ? void 0 : J.tagName) == null
          ? void 0
          : le.toLowerCase();
      if (
        ["input", "textarea", "select"].includes(U) ||
        ((Q = B.target) == null ? void 0 : Q.isContentEditable)
      )
        return;
      const W = B.ctrlKey || B.metaKey;
      (W &&
        B.key.toLowerCase() === "a" &&
        (B.preventDefault(),
        o((ue) => ue.map((ce) => ({ ...ce, selected: !0 })))),
        W && B.key.toLowerCase() === "c" && (B.preventDefault(), oe()),
        W && B.key.toLowerCase() === "v" && (B.preventDefault(), pe()),
        (B.key === "Delete" || B.key === "Backspace") &&
          (B.preventDefault(), ie()),
        B.key === "Escape" && d(null));
    };
    return (
      window.addEventListener("keydown", O),
      () => window.removeEventListener("keydown", O)
    );
  }, [o, oe, pe, ie]);
  const Qt = z.useMemo(() => {
      if (!p.length) return 0;
      const O = p.filter((B) => B.type === "success").length;
      return Math.min(100, Math.round((O / Math.max(p.length, 1)) * 100));
    }, [p]),
    Vn = z.useMemo(
      () => ({
        imageNode: sM,
        textNode: lM,
        generateNode: aM,
        videoNode: bM,
        angleNode: AM,
        upscaleNode: uM,
        reverseNode: cM,
        groupNode: fM,
      }),
      [],
    ),
    Bn = z.useMemo(() => ({ customEdge: dM }), []),
    Un = z.useMemo(() => r.map(L), [r, L]);
  return m.jsxs("div", {
    className: "app-shell",
    children: [
      m.jsx(pM, {
        logs: p,
        progress: Qt,
        addImageNodeFromUpload: ae,
        runAll: A,
        queueRunning: x,
      }),
      m.jsxs("main", {
        className: "canvas-area",
        ref: h,
        onDoubleClickCapture: X,
        children: [
          m.jsx(hM, {
            onSettings: () => f(!0),
            onRunAll: A,
            onGroup: ve,
            onUngroup: he,
            onAlign: Oe,
            onDistribute: Ot,
            onAutoLayout: Et,
            onFit: () => e.fitView({ padding: 0.25, duration: 500 }),
            queueRunning: x,
          }),
          m.jsxs(gN, {
            nodes: Un,
            edges: s,
            onNodesChange: i,
            onEdgesChange: a,
            onConnect: K,
            onConnectStart: G,
            onConnectEnd: te,
            onPaneDoubleClick: ne,
            onPaneClick: () => d(null),
            onDrop: re,
            onDragOver: fe,
            nodeTypes: Vn,
            edgeTypes: Bn,
            fitView: !0,
            selectionOnDrag: !0,
            selectionKeyCode: null,
            panOnDrag: [1],
            zoomOnScroll: !0,
            zoomOnPinch: !0,
            zoomOnDoubleClick: !1,
            deleteKeyCode: null,
            multiSelectionKeyCode: ["Meta", "Control"],
            connectionRadius: 42,
            connectOnClick: !1,
            defaultEdgeOptions: {
              type: "customEdge",
              markerEnd: { type: sn.ArrowClosed },
            },
            children: [
              m.jsx(kN, { color: "#e8e1d8", gap: 20, size: 1.2 }),
              m.jsx(VN, { className: "minimap", pannable: !0, zoomable: !0 }),
              m.jsx(PN, { showInteractive: !1 }),
            ],
          }),
          m.jsx(gM, {
            menu: u,
            onPick: (O) => F(O, u.flow),
            onClose: () => d(null),
          }),
          m.jsxs("div", {
            className: "bottom-status",
            children: [
              m.jsx("span", { className: "dot" }),
              m.jsxs("span", {
                children: [
                  "云端直连：",
                  (mr = Ar(t)) != null && mr.baseUrl ? "已配置" : "未配置",
                ],
              }),
              m.jsx("span", { className: "dot" }),
              m.jsxs("span", { children: ["文本：", t.defaultTextModel] }),
              m.jsx("span", { className: "dot" }),
              m.jsxs("span", { children: ["生图：", t.defaultImageModel] }),
              m.jsxs("span", { children: ["版本：", cC] }),
              m.jsx("span", { children: "V1.5.14-gemini-strict-sizefix-v6" }),
            ],
          }),
        ],
      }),
      m.jsx(mM, { preview: _, onClose: () => N(null) }),
      m.jsx(yM, {
        open: c,
        onClose: () => f(!1),
        settings: t,
        setSettings: M,
        addLog: k,
      }),
      m.jsxs("div", {
        className: "shortcut-help",
        children: [
          m.jsx(iC, { size: 13 }),
          " 双击空白处添加节点 / 中键拖动画布 / 左键框选 / Ctrl+C、Ctrl+V 复制粘贴 / Delete 删除",
        ],
      }),
    ],
  });
}
function xM({ error: e }) {
  return m.jsxs("div", {
    className: "error-page",
    children: [
      m.jsx("h1", { children: "页面出现错误" }),
      m.jsx("p", { children: (e == null ? void 0 : e.message) || "未知错误" }),
      m.jsx("button", {
        type: "button",
        onClick: () => window.location.reload(),
        children: "刷新页面",
      }),
    ],
  });
}
class wM extends nh.Component {
  constructor(t) {
    (super(t), (this.state = { error: null }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  render() {
    return this.state.error
      ? m.jsx(xM, { error: this.state.error })
      : this.props.children;
  }
}
function SM() {
  return m.jsx(wM, { children: m.jsx(X0, { children: m.jsx(vM, {}) }) });
}
im(document.getElementById("root")).render(m.jsx(SM, {}));
