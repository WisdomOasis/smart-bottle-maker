import {
  systemInfoSlice_default
} from "/chunk-A7RETWQP.js";
import {
  themeSlice_default
} from "/chunk-Q6S7DES4.js";
import {
  commonInfoSlice_default
} from "/chunk-MWBBQXZO.js";
import {
  configureStore
} from "/chunk-KMYVASEN.js";
import {
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_prop_types,
  require_react_dom
} from "/chunk-B4PAEWTK.js";
import {
  require_react,
  require_react_is
} from "/chunk-AF7SZHRH.js";
import {
  __commonJS,
  __toESM
} from "/chunk-IJV4CEDC.js";

// node_modules/redux-logger/dist/redux-logger.js
var require_redux_logger = __commonJS({
  "node_modules/redux-logger/dist/redux-logger.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.reduxLogger = e.reduxLogger || {});
    }(exports, function(e) {
      "use strict";
      function t(e2, t2) {
        e2.super_ = t2, e2.prototype = Object.create(t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } });
      }
      function r(e2, t2) {
        Object.defineProperty(this, "kind", { value: e2, enumerable: true }), t2 && t2.length && Object.defineProperty(this, "path", { value: t2, enumerable: true });
      }
      function n(e2, t2, r2) {
        n.super_.call(this, "E", e2), Object.defineProperty(this, "lhs", { value: t2, enumerable: true }), Object.defineProperty(this, "rhs", { value: r2, enumerable: true });
      }
      function o(e2, t2) {
        o.super_.call(this, "N", e2), Object.defineProperty(this, "rhs", { value: t2, enumerable: true });
      }
      function i(e2, t2) {
        i.super_.call(this, "D", e2), Object.defineProperty(this, "lhs", { value: t2, enumerable: true });
      }
      function a(e2, t2, r2) {
        a.super_.call(this, "A", e2), Object.defineProperty(this, "index", { value: t2, enumerable: true }), Object.defineProperty(this, "item", { value: r2, enumerable: true });
      }
      function f(e2, t2, r2) {
        var n2 = e2.slice((r2 || t2) + 1 || e2.length);
        return e2.length = t2 < 0 ? e2.length + t2 : t2, e2.push.apply(e2, n2), e2;
      }
      function u(e2) {
        var t2 = "undefined" == typeof e2 ? "undefined" : N(e2);
        return "object" !== t2 ? t2 : e2 === Math ? "math" : null === e2 ? "null" : Array.isArray(e2) ? "array" : "[object Date]" === Object.prototype.toString.call(e2) ? "date" : "function" == typeof e2.toString && /^\/.*\//.test(e2.toString()) ? "regexp" : "object";
      }
      function l(e2, t2, r2, c2, s2, d2, p2) {
        s2 = s2 || [], p2 = p2 || [];
        var g2 = s2.slice(0);
        if ("undefined" != typeof d2) {
          if (c2) {
            if ("function" == typeof c2 && c2(g2, d2))
              return;
            if ("object" === ("undefined" == typeof c2 ? "undefined" : N(c2))) {
              if (c2.prefilter && c2.prefilter(g2, d2))
                return;
              if (c2.normalize) {
                var h2 = c2.normalize(g2, d2, e2, t2);
                h2 && (e2 = h2[0], t2 = h2[1]);
              }
            }
          }
          g2.push(d2);
        }
        "regexp" === u(e2) && "regexp" === u(t2) && (e2 = e2.toString(), t2 = t2.toString());
        var y2 = "undefined" == typeof e2 ? "undefined" : N(e2), v2 = "undefined" == typeof t2 ? "undefined" : N(t2), b2 = "undefined" !== y2 || p2 && p2[p2.length - 1].lhs && p2[p2.length - 1].lhs.hasOwnProperty(d2), m2 = "undefined" !== v2 || p2 && p2[p2.length - 1].rhs && p2[p2.length - 1].rhs.hasOwnProperty(d2);
        if (!b2 && m2)
          r2(new o(g2, t2));
        else if (!m2 && b2)
          r2(new i(g2, e2));
        else if (u(e2) !== u(t2))
          r2(new n(g2, e2, t2));
        else if ("date" === u(e2) && e2 - t2 !== 0)
          r2(new n(g2, e2, t2));
        else if ("object" === y2 && null !== e2 && null !== t2)
          if (p2.filter(function(t3) {
            return t3.lhs === e2;
          }).length)
            e2 !== t2 && r2(new n(g2, e2, t2));
          else {
            if (p2.push({ lhs: e2, rhs: t2 }), Array.isArray(e2)) {
              var w2;
              e2.length;
              for (w2 = 0; w2 < e2.length; w2++)
                w2 >= t2.length ? r2(new a(g2, w2, new i(void 0, e2[w2]))) : l(e2[w2], t2[w2], r2, c2, g2, w2, p2);
              for (; w2 < t2.length; )
                r2(new a(g2, w2, new o(void 0, t2[w2++])));
            } else {
              var x2 = Object.keys(e2), S2 = Object.keys(t2);
              x2.forEach(function(n2, o2) {
                var i2 = S2.indexOf(n2);
                i2 >= 0 ? (l(e2[n2], t2[n2], r2, c2, g2, n2, p2), S2 = f(S2, i2)) : l(e2[n2], void 0, r2, c2, g2, n2, p2);
              }), S2.forEach(function(e3) {
                l(void 0, t2[e3], r2, c2, g2, e3, p2);
              });
            }
            p2.length = p2.length - 1;
          }
        else
          e2 !== t2 && ("number" === y2 && isNaN(e2) && isNaN(t2) || r2(new n(g2, e2, t2)));
      }
      function c(e2, t2, r2, n2) {
        return n2 = n2 || [], l(e2, t2, function(e3) {
          e3 && n2.push(e3);
        }, r2), n2.length ? n2 : void 0;
      }
      function s(e2, t2, r2) {
        if (r2.path && r2.path.length) {
          var n2, o2 = e2[t2], i2 = r2.path.length - 1;
          for (n2 = 0; n2 < i2; n2++)
            o2 = o2[r2.path[n2]];
          switch (r2.kind) {
            case "A":
              s(o2[r2.path[n2]], r2.index, r2.item);
              break;
            case "D":
              delete o2[r2.path[n2]];
              break;
            case "E":
            case "N":
              o2[r2.path[n2]] = r2.rhs;
          }
        } else
          switch (r2.kind) {
            case "A":
              s(e2[t2], r2.index, r2.item);
              break;
            case "D":
              e2 = f(e2, t2);
              break;
            case "E":
            case "N":
              e2[t2] = r2.rhs;
          }
        return e2;
      }
      function d(e2, t2, r2) {
        if (e2 && t2 && r2 && r2.kind) {
          for (var n2 = e2, o2 = -1, i2 = r2.path ? r2.path.length - 1 : 0; ++o2 < i2; )
            "undefined" == typeof n2[r2.path[o2]] && (n2[r2.path[o2]] = "number" == typeof r2.path[o2] ? [] : {}), n2 = n2[r2.path[o2]];
          switch (r2.kind) {
            case "A":
              s(r2.path ? n2[r2.path[o2]] : n2, r2.index, r2.item);
              break;
            case "D":
              delete n2[r2.path[o2]];
              break;
            case "E":
            case "N":
              n2[r2.path[o2]] = r2.rhs;
          }
        }
      }
      function p(e2, t2, r2) {
        if (r2.path && r2.path.length) {
          var n2, o2 = e2[t2], i2 = r2.path.length - 1;
          for (n2 = 0; n2 < i2; n2++)
            o2 = o2[r2.path[n2]];
          switch (r2.kind) {
            case "A":
              p(o2[r2.path[n2]], r2.index, r2.item);
              break;
            case "D":
              o2[r2.path[n2]] = r2.lhs;
              break;
            case "E":
              o2[r2.path[n2]] = r2.lhs;
              break;
            case "N":
              delete o2[r2.path[n2]];
          }
        } else
          switch (r2.kind) {
            case "A":
              p(e2[t2], r2.index, r2.item);
              break;
            case "D":
              e2[t2] = r2.lhs;
              break;
            case "E":
              e2[t2] = r2.lhs;
              break;
            case "N":
              e2 = f(e2, t2);
          }
        return e2;
      }
      function g(e2, t2, r2) {
        if (e2 && t2 && r2 && r2.kind) {
          var n2, o2, i2 = e2;
          for (o2 = r2.path.length - 1, n2 = 0; n2 < o2; n2++)
            "undefined" == typeof i2[r2.path[n2]] && (i2[r2.path[n2]] = {}), i2 = i2[r2.path[n2]];
          switch (r2.kind) {
            case "A":
              p(i2[r2.path[n2]], r2.index, r2.item);
              break;
            case "D":
              i2[r2.path[n2]] = r2.lhs;
              break;
            case "E":
              i2[r2.path[n2]] = r2.lhs;
              break;
            case "N":
              delete i2[r2.path[n2]];
          }
        }
      }
      function h(e2, t2, r2) {
        if (e2 && t2) {
          var n2 = function(n3) {
            r2 && !r2(e2, t2, n3) || d(e2, t2, n3);
          };
          l(e2, t2, n2);
        }
      }
      function y(e2) {
        return "color: " + F[e2].color + "; font-weight: bold";
      }
      function v(e2) {
        var t2 = e2.kind, r2 = e2.path, n2 = e2.lhs, o2 = e2.rhs, i2 = e2.index, a2 = e2.item;
        switch (t2) {
          case "E":
            return [r2.join("."), n2, "\u2192", o2];
          case "N":
            return [r2.join("."), o2];
          case "D":
            return [r2.join(".")];
          case "A":
            return [r2.join(".") + "[" + i2 + "]", a2];
          default:
            return [];
        }
      }
      function b(e2, t2, r2, n2) {
        var o2 = c(e2, t2);
        try {
          n2 ? r2.groupCollapsed("diff") : r2.group("diff");
        } catch (e3) {
          r2.log("diff");
        }
        o2 ? o2.forEach(function(e3) {
          var t3 = e3.kind, n3 = v(e3);
          r2.log.apply(r2, ["%c " + F[t3].text, y(t3)].concat(P(n3)));
        }) : r2.log("\u2014\u2014 no diff \u2014\u2014");
        try {
          r2.groupEnd();
        } catch (e3) {
          r2.log("\u2014\u2014 diff end \u2014\u2014 ");
        }
      }
      function m(e2, t2, r2, n2) {
        switch ("undefined" == typeof e2 ? "undefined" : N(e2)) {
          case "object":
            return "function" == typeof e2[n2] ? e2[n2].apply(e2, P(r2)) : e2[n2];
          case "function":
            return e2(t2);
          default:
            return e2;
        }
      }
      function w(e2) {
        var t2 = e2.timestamp, r2 = e2.duration;
        return function(e3, n2, o2) {
          var i2 = ["action"];
          return i2.push("%c" + String(e3.type)), t2 && i2.push("%c@ " + n2), r2 && i2.push("%c(in " + o2.toFixed(2) + " ms)"), i2.join(" ");
        };
      }
      function x(e2, t2) {
        var r2 = t2.logger, n2 = t2.actionTransformer, o2 = t2.titleFormatter, i2 = void 0 === o2 ? w(t2) : o2, a2 = t2.collapsed, f2 = t2.colors, u2 = t2.level, l2 = t2.diff, c2 = "undefined" == typeof t2.titleFormatter;
        e2.forEach(function(o3, s2) {
          var d2 = o3.started, p2 = o3.startedTime, g2 = o3.action, h2 = o3.prevState, y2 = o3.error, v2 = o3.took, w2 = o3.nextState, x2 = e2[s2 + 1];
          x2 && (w2 = x2.prevState, v2 = x2.started - d2);
          var S2 = n2(g2), k2 = "function" == typeof a2 ? a2(function() {
            return w2;
          }, g2, o3) : a2, j2 = D(p2), E2 = f2.title ? "color: " + f2.title(S2) + ";" : "", A2 = ["color: gray; font-weight: lighter;"];
          A2.push(E2), t2.timestamp && A2.push("color: gray; font-weight: lighter;"), t2.duration && A2.push("color: gray; font-weight: lighter;");
          var O2 = i2(S2, j2, v2);
          try {
            k2 ? f2.title && c2 ? r2.groupCollapsed.apply(r2, ["%c " + O2].concat(A2)) : r2.groupCollapsed(O2) : f2.title && c2 ? r2.group.apply(r2, ["%c " + O2].concat(A2)) : r2.group(O2);
          } catch (e3) {
            r2.log(O2);
          }
          var N2 = m(u2, S2, [h2], "prevState"), P2 = m(u2, S2, [S2], "action"), C2 = m(u2, S2, [y2, h2], "error"), F2 = m(u2, S2, [w2], "nextState");
          if (N2)
            if (f2.prevState) {
              var L2 = "color: " + f2.prevState(h2) + "; font-weight: bold";
              r2[N2]("%c prev state", L2, h2);
            } else
              r2[N2]("prev state", h2);
          if (P2)
            if (f2.action) {
              var T2 = "color: " + f2.action(S2) + "; font-weight: bold";
              r2[P2]("%c action    ", T2, S2);
            } else
              r2[P2]("action    ", S2);
          if (y2 && C2)
            if (f2.error) {
              var M = "color: " + f2.error(y2, h2) + "; font-weight: bold;";
              r2[C2]("%c error     ", M, y2);
            } else
              r2[C2]("error     ", y2);
          if (F2)
            if (f2.nextState) {
              var _ = "color: " + f2.nextState(w2) + "; font-weight: bold";
              r2[F2]("%c next state", _, w2);
            } else
              r2[F2]("next state", w2);
          l2 && b(h2, w2, r2, k2);
          try {
            r2.groupEnd();
          } catch (e3) {
            r2.log("\u2014\u2014 log end \u2014\u2014");
          }
        });
      }
      function S() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = Object.assign({}, L, e2), r2 = t2.logger, n2 = t2.stateTransformer, o2 = t2.errorTransformer, i2 = t2.predicate, a2 = t2.logErrors, f2 = t2.diffPredicate;
        if ("undefined" == typeof r2)
          return function() {
            return function(e3) {
              return function(t3) {
                return e3(t3);
              };
            };
          };
        if (e2.getState && e2.dispatch)
          return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function() {
            return function(e3) {
              return function(t3) {
                return e3(t3);
              };
            };
          };
        var u2 = [];
        return function(e3) {
          var r3 = e3.getState;
          return function(e4) {
            return function(l2) {
              if ("function" == typeof i2 && !i2(r3, l2))
                return e4(l2);
              var c2 = {};
              u2.push(c2), c2.started = O.now(), c2.startedTime = /* @__PURE__ */ new Date(), c2.prevState = n2(r3()), c2.action = l2;
              var s2 = void 0;
              if (a2)
                try {
                  s2 = e4(l2);
                } catch (e5) {
                  c2.error = o2(e5);
                }
              else
                s2 = e4(l2);
              c2.took = O.now() - c2.started, c2.nextState = n2(r3());
              var d2 = t2.diff && "function" == typeof f2 ? f2(r3, l2) : t2.diff;
              if (x(u2, Object.assign({}, t2, { diff: d2 })), u2.length = 0, c2.error)
                throw c2.error;
              return s2;
            };
          };
        };
      }
      var k, j, E = function(e2, t2) {
        return new Array(t2 + 1).join(e2);
      }, A = function(e2, t2) {
        return E("0", t2 - e2.toString().length) + e2;
      }, D = function(e2) {
        return A(e2.getHours(), 2) + ":" + A(e2.getMinutes(), 2) + ":" + A(e2.getSeconds(), 2) + "." + A(e2.getMilliseconds(), 3);
      }, O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date, N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
      }, P = function(e2) {
        if (Array.isArray(e2)) {
          for (var t2 = 0, r2 = Array(e2.length); t2 < e2.length; t2++)
            r2[t2] = e2[t2];
          return r2;
        }
        return Array.from(e2);
      }, C = [];
      k = "object" === ("undefined" == typeof ty ? "undefined" : N(ty)) && ty ? ty : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function() {
        "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0);
      }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, { diff: { value: c, enumerable: true }, observableDiff: { value: l, enumerable: true }, applyDiff: { value: h, enumerable: true }, applyChange: { value: d, enumerable: true }, revertChange: { value: g, enumerable: true }, isConflict: { value: function() {
        return "undefined" != typeof j;
      }, enumerable: true }, noConflict: { value: function() {
        return C && (C.forEach(function(e2) {
          e2();
        }), C = null), c;
      }, enumerable: true } });
      var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, L = { level: "log", logger: console, logErrors: true, collapsed: void 0, predicate: void 0, duration: false, timestamp: true, stateTransformer: function(e2) {
        return e2;
      }, actionTransformer: function(e2) {
        return e2;
      }, errorTransformer: function(e2) {
        return e2;
      }, colors: { title: function() {
        return "inherit";
      }, prevState: function() {
        return "#9E9E9E";
      }, action: function() {
        return "#03A9F4";
      }, nextState: function() {
        return "#4CAF50";
      }, error: function() {
        return "#F20404";
      } }, diff: false, diffPredicate: void 0, transformer: void 0 }, T = function() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = e2.dispatch, r2 = e2.getState;
        return "function" == typeof t2 || "function" == typeof r2 ? S()({ dispatch: t2, getState: r2 }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
      };
      e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is2();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// src/redux/index.ts
var import_redux_logger = __toESM(require_redux_logger());

// node_modules/react-redux/es/components/Provider.js
var import_react3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/react-redux/es/components/Context.js
var import_react = __toESM(require_react());
var ReactReduxContext = /* @__PURE__ */ import_react.default.createContext(null);
if (true) {
  ReactReduxContext.displayName = "ReactRedux";
}

// node_modules/react-redux/es/utils/batch.js
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};

// node_modules/react-redux/es/utils/Subscription.js
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store2, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

// node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
var import_react2 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/react-redux/es/components/Provider.js
function Provider(_ref) {
  var store2 = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = (0, import_react3.useMemo)(function() {
    var subscription = createSubscription(store2);
    return {
      store: store2,
      subscription
    };
  }, [store2]);
  var previousState = (0, import_react3.useMemo)(function() {
    return store2.getState();
  }, [store2]);
  useIsomorphicLayoutEffect(function() {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ import_react3.default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
if (true) {
  Provider.propTypes = {
    store: import_prop_types.default.shape({
      subscribe: import_prop_types.default.func.isRequired,
      dispatch: import_prop_types.default.func.isRequired,
      getState: import_prop_types.default.func.isRequired
    }),
    context: import_prop_types.default.object,
    children: import_prop_types.default.any
  };
}
var Provider_default = Provider;

// node_modules/react-redux/es/components/connectAdvanced.js
init_extends();
init_objectWithoutPropertiesLoose();
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_react4 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());

// node_modules/react-redux/es/connect/connect.js
init_extends();
init_objectWithoutPropertiesLoose();

// node_modules/react-redux/es/connect/mergeProps.js
init_extends();

// node_modules/react-redux/es/connect/selectorFactory.js
init_objectWithoutPropertiesLoose();

// node_modules/react-redux/es/hooks/useStore.js
var import_react6 = __toESM(require_react());

// node_modules/react-redux/es/hooks/useReduxContext.js
var import_react5 = __toESM(require_react());
function useReduxContext() {
  var contextValue = (0, import_react5.useContext)(ReactReduxContext);
  if (!contextValue) {
    throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
  }
  return contextValue;
}

// node_modules/react-redux/es/hooks/useStore.js
function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 = context === ReactReduxContext ? useReduxContext : function() {
    return (0, import_react6.useContext)(context);
  };
  return function useStore2() {
    var _useReduxContext = useReduxContext2(), store2 = _useReduxContext.store;
    return store2;
  };
}
var useStore = /* @__PURE__ */ createStoreHook();

// node_modules/react-redux/es/hooks/useDispatch.js
function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    var store2 = useStore2();
    return store2.dispatch;
  };
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// node_modules/react-redux/es/hooks/useSelector.js
var import_react7 = __toESM(require_react());
var refEquality = function refEquality2(a, b) {
  return a === b;
};
function useSelectorWithStoreAndSubscription(selector, equalityFn, store2, contextSub) {
  var _useReducer = (0, import_react7.useReducer)(function(s) {
    return s + 1;
  }, 0), forceRender = _useReducer[1];
  var subscription = (0, import_react7.useMemo)(function() {
    return createSubscription(store2, contextSub);
  }, [store2, contextSub]);
  var latestSubscriptionCallbackError = (0, import_react7.useRef)();
  var latestSelector = (0, import_react7.useRef)();
  var latestStoreState = (0, import_react7.useRef)();
  var latestSelectedState = (0, import_react7.useRef)();
  var storeState = store2.getState();
  var selectedState;
  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState);
      if (latestSelectedState.current === void 0 || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }
    throw err;
  }
  useIsomorphicLayoutEffect(function() {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect(function() {
    function checkForUpdates() {
      try {
        var newStoreState = store2.getState();
        if (newStoreState === latestStoreState.current) {
          return;
        }
        var _newSelectedState = latestSelector.current(newStoreState);
        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        latestSubscriptionCallbackError.current = err;
      }
      forceRender();
    }
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function() {
      return subscription.tryUnsubscribe();
    };
  }, [store2, subscription]);
  return selectedState;
}
function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 = context === ReactReduxContext ? useReduxContext : function() {
    return (0, import_react7.useContext)(context);
  };
  return function useSelector2(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }
    if (true) {
      if (!selector) {
        throw new Error("You must pass a selector to useSelector");
      }
      if (typeof selector !== "function") {
        throw new Error("You must pass a function as a selector to useSelector");
      }
      if (typeof equalityFn !== "function") {
        throw new Error("You must pass a function as an equality function to useSelector");
      }
    }
    var _useReduxContext = useReduxContext2(), store2 = _useReduxContext.store, contextSub = _useReduxContext.subscription;
    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store2, contextSub);
    (0, import_react7.useDebugValue)(selectedState);
    return selectedState;
  };
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// node_modules/react-redux/es/utils/reactBatchedUpdates.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-redux/es/index.js
setBatch(import_react_dom.unstable_batchedUpdates);

// src/redux/index.ts
var isDev = true;
var logger = (0, import_redux_logger.createLogger)({
  predicate: () => isDev,
  collapsed: true,
  duration: true
});
var middlewares = isDev ? [logger] : [];
var store = configureStore({
  reducer: {
    systemInfo: systemInfoSlice_default,
    theme: themeSlice_default,
    commonInfo: commonInfoSlice_default
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});
var useAppDispatch = () => useDispatch();
var redux_default = store;

export {
  Provider_default,
  useSelector,
  useAppDispatch,
  redux_default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3JlZHV4LWxvZ2dlci9kaXN0L3JlZHV4LWxvZ2dlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsICIuLi8uLi9zcmMvcmVkdXgvaW5kZXgudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvQ29udGV4dC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvYmF0Y2guanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1N1YnNjcmlwdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvY29ubmVjdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tZXJnZVByb3BzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU3RvcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVJlZHV4Q29udGV4dC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlRGlzcGF0Y2guanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVNlbGVjdG9yLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dChlLnJlZHV4TG9nZ2VyPWUucmVkdXhMb2dnZXJ8fHt9KX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUsdCl7ZS5zdXBlcl89dCxlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KX1mdW5jdGlvbiByKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJraW5kXCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pLHQmJnQubGVuZ3RoJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhdGhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gbihlLHQscil7bi5zdXBlcl8uY2FsbCh0aGlzLFwiRVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG8oZSx0KXtvLnN1cGVyXy5jYWxsKHRoaXMsXCJOXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gaShlLHQpe2kuc3VwZXJfLmNhbGwodGhpcyxcIkRcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBhKGUsdCxyKXthLnN1cGVyXy5jYWxsKHRoaXMsXCJBXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpbmRleFwiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIml0ZW1cIix7dmFsdWU6cixlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gZihlLHQscil7dmFyIG49ZS5zbGljZSgocnx8dCkrMXx8ZS5sZW5ndGgpO3JldHVybiBlLmxlbmd0aD10PDA/ZS5sZW5ndGgrdDp0LGUucHVzaC5hcHBseShlLG4pLGV9ZnVuY3Rpb24gdShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSk7cmV0dXJuXCJvYmplY3RcIiE9PXQ/dDplPT09TWF0aD9cIm1hdGhcIjpudWxsPT09ZT9cIm51bGxcIjpBcnJheS5pc0FycmF5KGUpP1wiYXJyYXlcIjpcIltvYmplY3QgRGF0ZV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImRhdGVcIjpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnRvU3RyaW5nJiYvXlxcLy4qXFwvLy50ZXN0KGUudG9TdHJpbmcoKSk/XCJyZWdleHBcIjpcIm9iamVjdFwifWZ1bmN0aW9uIGwoZSx0LHIsYyxzLGQscCl7cz1zfHxbXSxwPXB8fFtdO3ZhciBnPXMuc2xpY2UoMCk7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGQpe2lmKGMpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJmMoZyxkKSlyZXR1cm47aWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgYz9cInVuZGVmaW5lZFwiOk4oYykpKXtpZihjLnByZWZpbHRlciYmYy5wcmVmaWx0ZXIoZyxkKSlyZXR1cm47aWYoYy5ub3JtYWxpemUpe3ZhciBoPWMubm9ybWFsaXplKGcsZCxlLHQpO2gmJihlPWhbMF0sdD1oWzFdKX19fWcucHVzaChkKX1cInJlZ2V4cFwiPT09dShlKSYmXCJyZWdleHBcIj09PXUodCkmJihlPWUudG9TdHJpbmcoKSx0PXQudG9TdHJpbmcoKSk7dmFyIHk9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpLHY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpOKHQpLGI9XCJ1bmRlZmluZWRcIiE9PXl8fHAmJnBbcC5sZW5ndGgtMV0ubGhzJiZwW3AubGVuZ3RoLTFdLmxocy5oYXNPd25Qcm9wZXJ0eShkKSxtPVwidW5kZWZpbmVkXCIhPT12fHxwJiZwW3AubGVuZ3RoLTFdLnJocyYmcFtwLmxlbmd0aC0xXS5yaHMuaGFzT3duUHJvcGVydHkoZCk7aWYoIWImJm0pcihuZXcgbyhnLHQpKTtlbHNlIGlmKCFtJiZiKXIobmV3IGkoZyxlKSk7ZWxzZSBpZih1KGUpIT09dSh0KSlyKG5ldyBuKGcsZSx0KSk7ZWxzZSBpZihcImRhdGVcIj09PXUoZSkmJmUtdCE9PTApcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJvYmplY3RcIj09PXkmJm51bGwhPT1lJiZudWxsIT09dClpZihwLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5saHM9PT1lfSkubGVuZ3RoKWUhPT10JiZyKG5ldyBuKGcsZSx0KSk7ZWxzZXtpZihwLnB1c2goe2xoczplLHJoczp0fSksQXJyYXkuaXNBcnJheShlKSl7dmFyIHc7ZS5sZW5ndGg7Zm9yKHc9MDt3PGUubGVuZ3RoO3crKyl3Pj10Lmxlbmd0aD9yKG5ldyBhKGcsdyxuZXcgaSh2b2lkIDAsZVt3XSkpKTpsKGVbd10sdFt3XSxyLGMsZyx3LHApO2Zvcig7dzx0Lmxlbmd0aDspcihuZXcgYShnLHcsbmV3IG8odm9pZCAwLHRbdysrXSkpKX1lbHNle3ZhciB4PU9iamVjdC5rZXlzKGUpLFM9T2JqZWN0LmtleXModCk7eC5mb3JFYWNoKGZ1bmN0aW9uKG4sbyl7dmFyIGk9Uy5pbmRleE9mKG4pO2k+PTA/KGwoZVtuXSx0W25dLHIsYyxnLG4scCksUz1mKFMsaSkpOmwoZVtuXSx2b2lkIDAscixjLGcsbixwKX0pLFMuZm9yRWFjaChmdW5jdGlvbihlKXtsKHZvaWQgMCx0W2VdLHIsYyxnLGUscCl9KX1wLmxlbmd0aD1wLmxlbmd0aC0xfWVsc2UgZSE9PXQmJihcIm51bWJlclwiPT09eSYmaXNOYU4oZSkmJmlzTmFOKHQpfHxyKG5ldyBuKGcsZSx0KSkpfWZ1bmN0aW9uIGMoZSx0LHIsbil7cmV0dXJuIG49bnx8W10sbChlLHQsZnVuY3Rpb24oZSl7ZSYmbi5wdXNoKGUpfSxyKSxuLmxlbmd0aD9uOnZvaWQgMH1mdW5jdGlvbiBzKGUsdCxyKXtpZihyLnBhdGgmJnIucGF0aC5sZW5ndGgpe3ZhciBuLG89ZVt0XSxpPXIucGF0aC5sZW5ndGgtMTtmb3Iobj0wO248aTtuKyspbz1vW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMob1tyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG9bci5wYXRoW25dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm9bci5wYXRoW25dXT1yLnJoc319ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZT1mKGUsdCk7YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjplW3RdPXIucmhzfXJldHVybiBlfWZ1bmN0aW9uIGQoZSx0LHIpe2lmKGUmJnQmJnImJnIua2luZCl7Zm9yKHZhciBuPWUsbz0tMSxpPXIucGF0aD9yLnBhdGgubGVuZ3RoLTE6MDsrK288aTspXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5bci5wYXRoW29dXSYmKG5bci5wYXRoW29dXT1cIm51bWJlclwiPT10eXBlb2Ygci5wYXRoW29dP1tdOnt9KSxuPW5bci5wYXRoW29dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhyLnBhdGg/bltyLnBhdGhbb11dOm4sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpkZWxldGUgbltyLnBhdGhbb11dO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6bltyLnBhdGhbb11dPXIucmhzfX19ZnVuY3Rpb24gcChlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJFXCI6b1tyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjpkZWxldGUgb1tyLnBhdGhbbl1dfX1lbHNlIHN3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKGVbdF0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjplW3RdPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjplW3RdPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjplPWYoZSx0KX1yZXR1cm4gZX1mdW5jdGlvbiBnKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe3ZhciBuLG8saT1lO2ZvcihvPXIucGF0aC5sZW5ndGgtMSxuPTA7bjxvO24rKylcInVuZGVmaW5lZFwiPT10eXBlb2YgaVtyLnBhdGhbbl1dJiYoaVtyLnBhdGhbbl1dPXt9KSxpPWlbci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChpW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOmlbci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIGlbci5wYXRoW25dXX19fWZ1bmN0aW9uIGgoZSx0LHIpe2lmKGUmJnQpe3ZhciBuPWZ1bmN0aW9uKG4pe3ImJiFyKGUsdCxuKXx8ZChlLHQsbil9O2woZSx0LG4pfX1mdW5jdGlvbiB5KGUpe3JldHVyblwiY29sb3I6IFwiK0ZbZV0uY29sb3IrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCJ9ZnVuY3Rpb24gdihlKXt2YXIgdD1lLmtpbmQscj1lLnBhdGgsbj1lLmxocyxvPWUucmhzLGk9ZS5pbmRleCxhPWUuaXRlbTtzd2l0Y2godCl7Y2FzZVwiRVwiOnJldHVybltyLmpvaW4oXCIuXCIpLG4sXCJcdTIxOTJcIixvXTtjYXNlXCJOXCI6cmV0dXJuW3Iuam9pbihcIi5cIiksb107Y2FzZVwiRFwiOnJldHVybltyLmpvaW4oXCIuXCIpXTtjYXNlXCJBXCI6cmV0dXJuW3Iuam9pbihcIi5cIikrXCJbXCIraStcIl1cIixhXTtkZWZhdWx0OnJldHVybltdfX1mdW5jdGlvbiBiKGUsdCxyLG4pe3ZhciBvPWMoZSx0KTt0cnl7bj9yLmdyb3VwQ29sbGFwc2VkKFwiZGlmZlwiKTpyLmdyb3VwKFwiZGlmZlwiKX1jYXRjaChlKXtyLmxvZyhcImRpZmZcIil9bz9vLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZS5raW5kLG49dihlKTtyLmxvZy5hcHBseShyLFtcIiVjIFwiK0ZbdF0udGV4dCx5KHQpXS5jb25jYXQoUChuKSkpfSk6ci5sb2coXCJcdTIwMTRcdTIwMTQgbm8gZGlmZiBcdTIwMTRcdTIwMTRcIik7dHJ5e3IuZ3JvdXBFbmQoKX1jYXRjaChlKXtyLmxvZyhcIlx1MjAxNFx1MjAxNCBkaWZmIGVuZCBcdTIwMTRcdTIwMTQgXCIpfX1mdW5jdGlvbiBtKGUsdCxyLG4pe3N3aXRjaChcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSkpe2Nhc2VcIm9iamVjdFwiOnJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGVbbl0/ZVtuXS5hcHBseShlLFAocikpOmVbbl07Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gZSh0KTtkZWZhdWx0OnJldHVybiBlfX1mdW5jdGlvbiB3KGUpe3ZhciB0PWUudGltZXN0YW1wLHI9ZS5kdXJhdGlvbjtyZXR1cm4gZnVuY3Rpb24oZSxuLG8pe3ZhciBpPVtcImFjdGlvblwiXTtyZXR1cm4gaS5wdXNoKFwiJWNcIitTdHJpbmcoZS50eXBlKSksdCYmaS5wdXNoKFwiJWNAIFwiK24pLHImJmkucHVzaChcIiVjKGluIFwiK28udG9GaXhlZCgyKStcIiBtcylcIiksaS5qb2luKFwiIFwiKX19ZnVuY3Rpb24geChlLHQpe3ZhciByPXQubG9nZ2VyLG49dC5hY3Rpb25UcmFuc2Zvcm1lcixvPXQudGl0bGVGb3JtYXR0ZXIsaT12b2lkIDA9PT1vP3codCk6byxhPXQuY29sbGFwc2VkLGY9dC5jb2xvcnMsdT10LmxldmVsLGw9dC5kaWZmLGM9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQudGl0bGVGb3JtYXR0ZXI7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8scyl7dmFyIGQ9by5zdGFydGVkLHA9by5zdGFydGVkVGltZSxnPW8uYWN0aW9uLGg9by5wcmV2U3RhdGUseT1vLmVycm9yLHY9by50b29rLHc9by5uZXh0U3RhdGUseD1lW3MrMV07eCYmKHc9eC5wcmV2U3RhdGUsdj14LnN0YXJ0ZWQtZCk7dmFyIFM9bihnKSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YShmdW5jdGlvbigpe3JldHVybiB3fSxnLG8pOmEsaj1EKHApLEU9Zi50aXRsZT9cImNvbG9yOiBcIitmLnRpdGxlKFMpK1wiO1wiOlwiXCIsQT1bXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCJdO0EucHVzaChFKSx0LnRpbWVzdGFtcCYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKSx0LmR1cmF0aW9uJiZBLnB1c2goXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCIpO3ZhciBPPWkoUyxqLHYpO3RyeXtrP2YudGl0bGUmJmM/ci5ncm91cENvbGxhcHNlZC5hcHBseShyLFtcIiVjIFwiK09dLmNvbmNhdChBKSk6ci5ncm91cENvbGxhcHNlZChPKTpmLnRpdGxlJiZjP3IuZ3JvdXAuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXAoTyl9Y2F0Y2goZSl7ci5sb2coTyl9dmFyIE49bSh1LFMsW2hdLFwicHJldlN0YXRlXCIpLFA9bSh1LFMsW1NdLFwiYWN0aW9uXCIpLEM9bSh1LFMsW3ksaF0sXCJlcnJvclwiKSxGPW0odSxTLFt3XSxcIm5leHRTdGF0ZVwiKTtpZihOKWlmKGYucHJldlN0YXRlKXt2YXIgTD1cImNvbG9yOiBcIitmLnByZXZTdGF0ZShoKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW05dKFwiJWMgcHJldiBzdGF0ZVwiLEwsaCl9ZWxzZSByW05dKFwicHJldiBzdGF0ZVwiLGgpO2lmKFApaWYoZi5hY3Rpb24pe3ZhciBUPVwiY29sb3I6IFwiK2YuYWN0aW9uKFMpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbUF0oXCIlYyBhY3Rpb24gICAgXCIsVCxTKX1lbHNlIHJbUF0oXCJhY3Rpb24gICAgXCIsUyk7aWYoeSYmQylpZihmLmVycm9yKXt2YXIgTT1cImNvbG9yOiBcIitmLmVycm9yKHksaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO3JbQ10oXCIlYyBlcnJvciAgICAgXCIsTSx5KX1lbHNlIHJbQ10oXCJlcnJvciAgICAgXCIseSk7aWYoRilpZihmLm5leHRTdGF0ZSl7dmFyIF89XCJjb2xvcjogXCIrZi5uZXh0U3RhdGUodykrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltGXShcIiVjIG5leHQgc3RhdGVcIixfLHcpfWVsc2UgcltGXShcIm5leHQgc3RhdGVcIix3KTtsJiZiKGgsdyxyLGspO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCJcdTIwMTRcdTIwMTQgbG9nIGVuZCBcdTIwMTRcdTIwMTRcIil9fSl9ZnVuY3Rpb24gUygpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PU9iamVjdC5hc3NpZ24oe30sTCxlKSxyPXQubG9nZ2VyLG49dC5zdGF0ZVRyYW5zZm9ybWVyLG89dC5lcnJvclRyYW5zZm9ybWVyLGk9dC5wcmVkaWNhdGUsYT10LmxvZ0Vycm9ycyxmPXQuZGlmZlByZWRpY2F0ZTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgcilyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX19O2lmKGUuZ2V0U3RhdGUmJmUuZGlzcGF0Y2gpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJbcmVkdXgtbG9nZ2VyXSByZWR1eC1sb2dnZXIgbm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIHBhc3MgbG9nZ2VyIGluc3RhbmNlIGFzIG1pZGRsZXdhcmU6XFxuLy8gTG9nZ2VyIHdpdGggZGVmYXVsdCBvcHRpb25zXFxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuLy8gT3IgeW91IGNhbiBjcmVhdGUgeW91ciBvd24gbG9nZ2VyIHdpdGggY3VzdG9tIG9wdGlvbnMgaHR0cDovL2JpdC5seS9yZWR1eC1sb2dnZXItb3B0aW9uc1xcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XFxuICAvLyAuLi5vcHRpb25zXFxufSk7XFxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcXG4gIHJlZHVjZXIsXFxuICBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKVxcbilcXG5cIiksZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX19O3ZhciB1PVtdO3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj1lLmdldFN0YXRlO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmIWkocixsKSlyZXR1cm4gZShsKTt2YXIgYz17fTt1LnB1c2goYyksYy5zdGFydGVkPU8ubm93KCksYy5zdGFydGVkVGltZT1uZXcgRGF0ZSxjLnByZXZTdGF0ZT1uKHIoKSksYy5hY3Rpb249bDt2YXIgcz12b2lkIDA7aWYoYSl0cnl7cz1lKGwpfWNhdGNoKGUpe2MuZXJyb3I9byhlKX1lbHNlIHM9ZShsKTtjLnRvb2s9Ty5ub3coKS1jLnN0YXJ0ZWQsYy5uZXh0U3RhdGU9bihyKCkpO3ZhciBkPXQuZGlmZiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZj9mKHIsbCk6dC5kaWZmO2lmKHgodSxPYmplY3QuYXNzaWduKHt9LHQse2RpZmY6ZH0pKSx1Lmxlbmd0aD0wLGMuZXJyb3IpdGhyb3cgYy5lcnJvcjtyZXR1cm4gc319fX12YXIgayxqLEU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IEFycmF5KHQrMSkuam9pbihlKX0sQT1mdW5jdGlvbihlLHQpe3JldHVybiBFKFwiMFwiLHQtZS50b1N0cmluZygpLmxlbmd0aCkrZX0sRD1mdW5jdGlvbihlKXtyZXR1cm4gQShlLmdldEhvdXJzKCksMikrXCI6XCIrQShlLmdldE1pbnV0ZXMoKSwyKStcIjpcIitBKGUuZ2V0U2Vjb25kcygpLDIpK1wiLlwiK0EoZS5nZXRNaWxsaXNlY29uZHMoKSwzKX0sTz1cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlOkRhdGUsTj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxQPWZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLHI9QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKXJbdF09ZVt0XTtyZXR1cm4gcn1yZXR1cm4gQXJyYXkuZnJvbShlKX0sQz1bXTtrPVwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGdsb2JhbD9cInVuZGVmaW5lZFwiOk4oZ2xvYmFsKSkmJmdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30saj1rLkRlZXBEaWZmLGomJkMucHVzaChmdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBqJiZrLkRlZXBEaWZmPT09YyYmKGsuRGVlcERpZmY9aixqPXZvaWQgMCl9KSx0KG4sciksdChvLHIpLHQoaSxyKSx0KGEsciksT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYyx7ZGlmZjp7dmFsdWU6YyxlbnVtZXJhYmxlOiEwfSxvYnNlcnZhYmxlRGlmZjp7dmFsdWU6bCxlbnVtZXJhYmxlOiEwfSxhcHBseURpZmY6e3ZhbHVlOmgsZW51bWVyYWJsZTohMH0sYXBwbHlDaGFuZ2U6e3ZhbHVlOmQsZW51bWVyYWJsZTohMH0scmV2ZXJ0Q2hhbmdlOnt2YWx1ZTpnLGVudW1lcmFibGU6ITB9LGlzQ29uZmxpY3Q6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGp9LGVudW1lcmFibGU6ITB9LG5vQ29uZmxpY3Q6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIEMmJihDLmZvckVhY2goZnVuY3Rpb24oZSl7ZSgpfSksQz1udWxsKSxjfSxlbnVtZXJhYmxlOiEwfX0pO3ZhciBGPXtFOntjb2xvcjpcIiMyMTk2RjNcIix0ZXh0OlwiQ0hBTkdFRDpcIn0sTjp7Y29sb3I6XCIjNENBRjUwXCIsdGV4dDpcIkFEREVEOlwifSxEOntjb2xvcjpcIiNGNDQzMzZcIix0ZXh0OlwiREVMRVRFRDpcIn0sQTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkFSUkFZOlwifX0sTD17bGV2ZWw6XCJsb2dcIixsb2dnZXI6Y29uc29sZSxsb2dFcnJvcnM6ITAsY29sbGFwc2VkOnZvaWQgMCxwcmVkaWNhdGU6dm9pZCAwLGR1cmF0aW9uOiExLHRpbWVzdGFtcDohMCxzdGF0ZVRyYW5zZm9ybWVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxhY3Rpb25UcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sZXJyb3JUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY29sb3JzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiaW5oZXJpdFwifSxwcmV2U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM5RTlFOUVcIn0sYWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuXCIjMDNBOUY0XCJ9LG5leHRTdGF0ZTpmdW5jdGlvbigpe3JldHVyblwiIzRDQUY1MFwifSxlcnJvcjpmdW5jdGlvbigpe3JldHVyblwiI0YyMDQwNFwifX0sZGlmZjohMSxkaWZmUHJlZGljYXRlOnZvaWQgMCx0cmFuc2Zvcm1lcjp2b2lkIDB9LFQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1lLmRpc3BhdGNoLHI9ZS5nZXRTdGF0ZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByP1MoKSh7ZGlzcGF0Y2g6dCxnZXRTdGF0ZTpyfSk6dm9pZCBjb25zb2xlLmVycm9yKFwiXFxuW3JlZHV4LWxvZ2dlciB2M10gQlJFQUtJTkcgQ0hBTkdFXFxuW3JlZHV4LWxvZ2dlciB2M10gU2luY2UgMy4wLjAgcmVkdXgtbG9nZ2VyIGV4cG9ydHMgYnkgZGVmYXVsdCBsb2dnZXIgd2l0aCBkZWZhdWx0IHNldHRpbmdzLlxcbltyZWR1eC1sb2dnZXIgdjNdIENoYW5nZVxcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbltyZWR1eC1sb2dnZXIgdjNdIHRvXFxuW3JlZHV4LWxvZ2dlciB2M10gaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xcblwiKX07ZS5kZWZhdWx0cz1MLGUuY3JlYXRlTG9nZ2VyPVMsZS5sb2dnZXI9VCxlLmRlZmF1bHQ9VCxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xuIiwgIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwgImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBzeXN0ZW1JbmZvUmVkdWNlciBmcm9tICcuL21vZHVsZXMvc3lzdGVtSW5mb1NsaWNlJztcbmltcG9ydCB0aGVtZVJlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL3RoZW1lU2xpY2UnO1xuaW1wb3J0IGNvbW1vbkluZm9SZWR1Y2VyIGZyb20gJy4vbW9kdWxlcy9jb21tb25JbmZvU2xpY2UnO1xuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xuICBwcmVkaWNhdGU6ICgpID0+IGlzRGV2LFxuICBjb2xsYXBzZWQ6IHRydWUsXG4gIGR1cmF0aW9uOiB0cnVlLFxufSk7XG5cbmNvbnN0IG1pZGRsZXdhcmVzID0gaXNEZXYgPyBbbG9nZ2VyXSA6IFtdO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHN5c3RlbUluZm86IHN5c3RlbUluZm9SZWR1Y2VyLFxuICAgIHRoZW1lOiB0aGVtZVJlZHVjZXIsXG4gICAgY29tbW9uSW5mbzogY29tbW9uSW5mb1JlZHVjZXIsXG4gIH0sXG4gIG1pZGRsZXdhcmU6IGdldERlZmF1bHRNaWRkbGV3YXJlID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KG1pZGRsZXdhcmVzKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBSZWR1eFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpcHRpb24gfSBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuXG5mdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgfTtcbiAgfSwgW3N0b3JlXSk7XG4gIHZhciBwcmV2aW91c1N0YXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCk7XG4gIH0sIFtzdG9yZV0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbjtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIHZhciBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlYWN0UmVkdXhDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1JlYWN0UmVkdXgnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFJlZHV4Q29udGV4dDsiLCAiLy8gRGVmYXVsdCB0byBhIGR1bW15IFwiYmF0Y2hcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGp1c3QgcnVucyB0aGUgY2FsbGJhY2tcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDsgLy8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcblxuZXhwb3J0IHZhciBzZXRCYXRjaCA9IGZ1bmN0aW9uIHNldEJhdGNoKG5ld0JhdGNoKSB7XG4gIHJldHVybiBiYXRjaCA9IG5ld0JhdGNoO1xufTsgLy8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5cbmV4cG9ydCB2YXIgZ2V0QmF0Y2ggPSBmdW5jdGlvbiBnZXRCYXRjaCgpIHtcbiAgcmV0dXJuIGJhdGNoO1xufTsiLCAiaW1wb3J0IHsgZ2V0QmF0Y2ggfSBmcm9tICcuL2JhdGNoJzsgLy8gZW5jYXBzdWxhdGVzIHRoZSBzdWJzY3JpcHRpb24gbG9naWMgZm9yIGNvbm5lY3RpbmcgYSBjb21wb25lbnQgdG8gdGhlIHJlZHV4IHN0b3JlLCBhc1xuLy8gd2VsbCBhcyBuZXN0aW5nIHN1YnNjcmlwdGlvbnMgb2YgZGVzY2VuZGFudCBjb21wb25lbnRzLCBzbyB0aGF0IHdlIGNhbiBlbnN1cmUgdGhlXG4vLyBhbmNlc3RvciBjb21wb25lbnRzIHJlLXJlbmRlciBiZWZvcmUgZGVzY2VuZGFudHNcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICB2YXIgYmF0Y2ggPSBnZXRCYXRjaCgpO1xuICB2YXIgZmlyc3QgPSBudWxsO1xuICB2YXIgbGFzdCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgZmlyc3QgPSBudWxsO1xuICAgICAgbGFzdCA9IG51bGw7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIGJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soKTtcbiAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICB2YXIgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgd2hpbGUgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGFzdCA9IHtcbiAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHt9LFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgdmFyIHVuc3Vic2NyaWJlO1xuICB2YXIgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcblxuICBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0cnlTdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gbGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIGxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih1bnN1YnNjcmliZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlTdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF1bnN1YnNjcmliZSkge1xuICAgICAgdW5zdWJzY3JpYmUgPSBwYXJlbnRTdWIgPyBwYXJlbnRTdWIuYWRkTmVzdGVkU3ViKGhhbmRsZUNoYW5nZVdyYXBwZXIpIDogc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgbGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgdW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XG4gICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIGxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN1YnNjcmlwdGlvbiA9IHtcbiAgICBhZGROZXN0ZWRTdWI6IGFkZE5lc3RlZFN1YixcbiAgICBub3RpZnlOZXN0ZWRTdWJzOiBub3RpZnlOZXN0ZWRTdWJzLFxuICAgIGhhbmRsZUNoYW5nZVdyYXBwZXI6IGhhbmRsZUNoYW5nZVdyYXBwZXIsXG4gICAgaXNTdWJzY3JpYmVkOiBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlOiB0cnlTdWJzY3JpYmUsXG4gICAgdHJ5VW5zdWJzY3JpYmU6IHRyeVVuc3Vic2NyaWJlLFxuICAgIGdldExpc3RlbmVyczogZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9XG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59IiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnOyAvLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci4gV2UgbmVlZCB1c2VMYXlvdXRFZmZlY3QgdG8gZW5zdXJlIHRoZSBzdG9yZVxuLy8gc3Vic2NyaXB0aW9uIGNhbGxiYWNrIGFsd2F5cyBoYXMgdGhlIHNlbGVjdG9yIGZyb20gdGhlIGxhdGVzdCByZW5kZXIgY29tbWl0XG4vLyBhdmFpbGFibGUsIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgaGFwcGVuIGJldHdlZW4gcmVuZGVyIGFuZCB0aGUgZWZmZWN0LFxuLy8gd2hpY2ggbWF5IGNhdXNlIG1pc3NlZCB1cGRhdGVzOyB3ZSBhbHNvIG11c3QgZW5zdXJlIHRoZSBzdG9yZSBzdWJzY3JpcHRpb25cbi8vIGlzIGNyZWF0ZWQgc3luY2hyb25vdXNseSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBvY2N1ciBiZWZvcmUgdGhlXG4vLyBzdWJzY3JpcHRpb24gaXMgY3JlYXRlZCBhbmQgYW4gaW5jb25zaXN0ZW50IHN0YXRlIG1heSBiZSBvYnNlcnZlZFxuXG5leHBvcnQgdmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0OyIsICJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xudmFyIF9leGNsdWRlZCA9IFtcImdldERpc3BsYXlOYW1lXCIsIFwibWV0aG9kTmFtZVwiLCBcInJlbmRlckNvdW50UHJvcFwiLCBcInNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlc1wiLCBcInN0b3JlS2V5XCIsIFwid2l0aFJlZlwiLCBcImZvcndhcmRSZWZcIiwgXCJjb250ZXh0XCJdLFxuICAgIF9leGNsdWRlZDIgPSBbXCJyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXCJdO1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlLCBpc0NvbnRleHRDb25zdW1lciB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCB7IGNyZWF0ZVN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7IC8vIERlZmluZSBzb21lIGNvbnN0YW50IGFycmF5cyBqdXN0IHRvIGF2b2lkIHJlLWNyZWF0aW5nIHRoZXNlXG5cbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcblxudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IGZ1bmN0aW9uIHN0cmluZ2lmeUNvbXBvbmVudChDb21wKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdG9yZVN0YXRlVXBkYXRlc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICB2YXIgdXBkYXRlQ291bnQgPSBzdGF0ZVsxXTtcbiAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZCwgdXBkYXRlQ291bnQgKyAxXTtcbn1cblxuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWZmZWN0RnVuYy5hcHBseSh2b2lkIDAsIGVmZmVjdEFyZ3MpO1xuICB9LCBkZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBhY3R1YWxDaGlsZFByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCkge1xuICAvLyBJZiB3ZSdyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUsIG5vdGhpbmcgdG8gZG8gaGVyZVxuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuOyAvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcblxuICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RUaHJvd25FcnJvciA9IG51bGw7IC8vIFdlJ2xsIHJ1biB0aGlzIGNhbGxiYWNrIGV2ZXJ5IHRpbWUgYSBzdG9yZSBzdWJzY3JpcHRpb24gdXBkYXRlIHByb3BhZ2F0ZXMgdG8gdGhpcyBjb21wb25lbnRcblxuICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgLy8gRG9uJ3QgcnVuIHN0YWxlIGxpc3RlbmVycy5cbiAgICAgIC8vIFJlZHV4IGRvZXNuJ3QgZ3VhcmFudGVlIHVuc3Vic2NyaXB0aW9ucyBoYXBwZW4gdW50aWwgbmV4dCBkaXNwYXRjaC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgc2VsZWN0b3Igd2l0aCB0aGUgbW9zdCByZWNlbnQgc3RvcmUgc3RhdGUgYW5kIHdyYXBwZXIgcHJvcHNcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmVcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IobGF0ZXN0U3RvcmVTdGF0ZSwgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfSAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgaGF2ZW4ndCBjaGFuZ2VkLCBub3RoaW5nIHRvIGRvIGhlcmUgLSBjYXNjYWRlIHRoZSBzdWJzY3JpcHRpb24gdXBkYXRlXG5cblxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4gICAgICAvLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4gICAgICAvLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuICAgICAgLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlOyAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgX2RpZF8gY2hhbmdlIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IpLCB0aGlzIHdyYXBwZXIgY29tcG9uZW50IG5lZWRzIHRvIHJlLXJlbmRlclxuXG4gICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NUT1JFX1VQREFURUQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gQWN0dWFsbHkgc3Vic2NyaWJlIHRvIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3RvciAob3Igc3RvcmUpXG5cblxuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpOyAvLyBQdWxsIGRhdGEgZnJvbSB0aGUgc3RvcmUgYWZ0ZXIgZmlyc3QgcmVuZGVyIGluIGNhc2UgdGhlIHN0b3JlIGhhc1xuICAvLyBjaGFuZ2VkIHNpbmNlIHdlIGJlZ2FuLlxuXG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuXG4gIHZhciB1bnN1YnNjcmliZVdyYXBwZXIgPSBmdW5jdGlvbiB1bnN1YnNjcmliZVdyYXBwZXIoKSB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcblxuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB3ZSBjYXVnaHQgYW4gZXJyb3IgZHVlIHRvIGEgYmFkIG1hcFN0YXRlIGZ1bmN0aW9uLCBidXQgdGhlXG4gICAgICAvLyBwYXJlbnQgcmUtcmVuZGVyZWQgd2l0aG91dCB0aGlzIGNvbXBvbmVudCBhbmQgd2UncmUgYWJvdXQgdG8gdW5tb3VudC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiBhcyBsb25nIGFzIHdlIGRvIHRvcC1kb3duIHN1YnNjcmlwdGlvbnMgY29ycmVjdGx5LCBidXRcbiAgICAgIC8vIGlmIHdlIGV2ZXIgZG8gdGhvc2Ugd3JvbmcsIHRoaXMgdGhyb3cgd2lsbCBzdXJmYWNlIHRoZSBlcnJvciBpbiBvdXIgdGVzdHMuXG4gICAgICAvLyBJbiB0aGF0IGNhc2UsIHRocm93IHRoZSBlcnJvciBmcm9tIGhlcmUgc28gaXQgZG9lc24ndCBnZXQgbG9zdC5cbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cblxudmFyIGluaXRTdGF0ZVVwZGF0ZXMgPSBmdW5jdGlvbiBpbml0U3RhdGVVcGRhdGVzKCkge1xuICByZXR1cm4gW251bGwsIDBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEFkdmFuY2VkKFxuLypcclxuICBzZWxlY3RvckZhY3RvcnkgaXMgYSBmdW5jIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHJldHVybmluZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdXNlZCB0b1xyXG4gIGNvbXB1dGUgbmV3IHByb3BzIGZyb20gc3RhdGUsIHByb3BzLCBhbmQgZGlzcGF0Y2guIEZvciBleGFtcGxlOlxyXG4gICAgICBleHBvcnQgZGVmYXVsdCBjb25uZWN0QWR2YW5jZWQoKGRpc3BhdGNoLCBvcHRpb25zKSA9PiAoc3RhdGUsIHByb3BzKSA9PiAoe1xyXG4gICAgICB0aGluZzogc3RhdGUudGhpbmdzW3Byb3BzLnRoaW5nSWRdLFxyXG4gICAgICBzYXZlVGhpbmc6IGZpZWxkcyA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zYXZlVGhpbmcocHJvcHMudGhpbmdJZCwgZmllbGRzKSksXHJcbiAgICB9KSkoWW91ckNvbXBvbmVudClcclxuICAgIEFjY2VzcyB0byBkaXNwYXRjaCBpcyBwcm92aWRlZCB0byB0aGUgZmFjdG9yeSBzbyBzZWxlY3RvckZhY3RvcmllcyBjYW4gYmluZCBhY3Rpb25DcmVhdG9yc1xyXG4gIG91dHNpZGUgb2YgdGhlaXIgc2VsZWN0b3IgYXMgYW4gb3B0aW1pemF0aW9uLiBPcHRpb25zIHBhc3NlZCB0byBjb25uZWN0QWR2YW5jZWQgYXJlIHBhc3NlZCB0b1xyXG4gIHRoZSBzZWxlY3RvckZhY3RvcnksIGFsb25nIHdpdGggZGlzcGxheU5hbWUgYW5kIFdyYXBwZWRDb21wb25lbnQsIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXHJcbiAgICBOb3RlIHRoYXQgc2VsZWN0b3JGYWN0b3J5IGlzIHJlc3BvbnNpYmxlIGZvciBhbGwgY2FjaGluZy9tZW1vaXphdGlvbiBvZiBpbmJvdW5kIGFuZCBvdXRib3VuZFxyXG4gIHByb3BzLiBEbyBub3QgdXNlIGNvbm5lY3RBZHZhbmNlZCBkaXJlY3RseSB3aXRob3V0IG1lbW9pemluZyByZXN1bHRzIGJldHdlZW4gY2FsbHMgdG8geW91clxyXG4gIHNlbGVjdG9yLCBvdGhlcndpc2UgdGhlIENvbm5lY3QgY29tcG9uZW50IHdpbGwgcmUtcmVuZGVyIG9uIGV2ZXJ5IHN0YXRlIG9yIHByb3BzIGNoYW5nZS5cclxuKi9cbnNlbGVjdG9yRmFjdG9yeSwgLy8gb3B0aW9ucyBvYmplY3Q6XG5fcmVmKSB7XG4gIGlmIChfcmVmID09PSB2b2lkIDApIHtcbiAgICBfcmVmID0ge307XG4gIH1cblxuICB2YXIgX3JlZjIgPSBfcmVmLFxuICAgICAgX3JlZjIkZ2V0RGlzcGxheU5hbWUgPSBfcmVmMi5nZXREaXNwbGF5TmFtZSxcbiAgICAgIGdldERpc3BsYXlOYW1lID0gX3JlZjIkZ2V0RGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFwiQ29ubmVjdEFkdmFuY2VkKFwiICsgbmFtZSArIFwiKVwiO1xuICB9IDogX3JlZjIkZ2V0RGlzcGxheU5hbWUsXG4gICAgICBfcmVmMiRtZXRob2ROYW1lID0gX3JlZjIubWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZE5hbWUgPSBfcmVmMiRtZXRob2ROYW1lID09PSB2b2lkIDAgPyAnY29ubmVjdEFkdmFuY2VkJyA6IF9yZWYyJG1ldGhvZE5hbWUsXG4gICAgICBfcmVmMiRyZW5kZXJDb3VudFByb3AgPSBfcmVmMi5yZW5kZXJDb3VudFByb3AsXG4gICAgICByZW5kZXJDb3VudFByb3AgPSBfcmVmMiRyZW5kZXJDb3VudFByb3AgPT09IHZvaWQgMCA/IHVuZGVmaW5lZCA6IF9yZWYyJHJlbmRlckNvdW50UHJvcCxcbiAgICAgIF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9IF9yZWYyLnNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IF9yZWYyJHNob3VsZEhhbmRsZVN0YSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYyJHNob3VsZEhhbmRsZVN0YSxcbiAgICAgIF9yZWYyJHN0b3JlS2V5ID0gX3JlZjIuc3RvcmVLZXksXG4gICAgICBzdG9yZUtleSA9IF9yZWYyJHN0b3JlS2V5ID09PSB2b2lkIDAgPyAnc3RvcmUnIDogX3JlZjIkc3RvcmVLZXksXG4gICAgICBfcmVmMiR3aXRoUmVmID0gX3JlZjIud2l0aFJlZixcbiAgICAgIHdpdGhSZWYgPSBfcmVmMiR3aXRoUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHdpdGhSZWYsXG4gICAgICBfcmVmMiRmb3J3YXJkUmVmID0gX3JlZjIuZm9yd2FyZFJlZixcbiAgICAgIGZvcndhcmRSZWYgPSBfcmVmMiRmb3J3YXJkUmVmID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGZvcndhcmRSZWYsXG4gICAgICBfcmVmMiRjb250ZXh0ID0gX3JlZjIuY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBfcmVmMiRjb250ZXh0ID09PSB2b2lkIDAgPyBSZWFjdFJlZHV4Q29udGV4dCA6IF9yZWYyJGNvbnRleHQsXG4gICAgICBjb25uZWN0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBfZXhjbHVkZWQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHJlbmRlckNvdW50UHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJDb3VudFByb3AgaXMgcmVtb3ZlZC4gcmVuZGVyIGNvdW50aW5nIGlzIGJ1aWx0IGludG8gdGhlIGxhdGVzdCBSZWFjdCBEZXYgVG9vbHMgcHJvZmlsaW5nIGV4dGVuc2lvblwiKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aFJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aXRoUmVmIGlzIHJlbW92ZWQuIFRvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgdXNlIGEgcmVmIG9uIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuXG4gICAgaWYgKHN0b3JlS2V5ICE9PSAnc3RvcmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0b3JlS2V5IGhhcyBiZWVuIHJlbW92ZWQgYW5kIGRvZXMgbm90IGRvIGFueXRoaW5nLiAnICsgY3VzdG9tU3RvcmVXYXJuaW5nTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBcIiArIChtZXRob2ROYW1lICsgXCIuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyBzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgcHVyZSA9IGNvbm5lY3RPcHRpb25zLnB1cmU7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICB9IC8vIElmIHdlIGFyZW4ndCBydW5uaW5nIGluIFwicHVyZVwiIG1vZGUsIHdlIGRvbid0IHdhbnQgdG8gbWVtb2l6ZSB2YWx1ZXMuXG4gICAgLy8gVG8gYXZvaWQgY29uZGl0aW9uYWxseSBjYWxsaW5nIGhvb2tzLCB3ZSBmYWxsIGJhY2sgdG8gYSB0aW55IHdyYXBwZXJcbiAgICAvLyB0aGF0IGp1c3QgZXhlY3V0ZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGltbWVkaWF0ZWx5LlxuXG5cbiAgICB2YXIgdXNlUHVyZU9ubHlNZW1vID0gcHVyZSA/IHVzZU1lbW8gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIHZhciByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gcHJvcHMucmVhY3RSZWR1eEZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQyKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc107XG4gICAgICB9LCBbcHJvcHNdKSxcbiAgICAgICAgICBwcm9wc0NvbnRleHQgPSBfdXNlTWVtb1swXSxcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gX3VzZU1lbW9bMV0sXG4gICAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZU1lbW9bMl07XG5cbiAgICAgIHZhciBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgaXNDb250ZXh0Q29uc3VtZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbCkpID8gcHJvcHNDb250ZXh0IDogQ29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTsgLy8gUmV0cmlldmUgdGhlIHN0b3JlIGFuZCBhbmNlc3RvciBzdWJzY3JpcHRpb24gdmlhIGNvbnRleHQsIGlmIGF2YWlsYWJsZVxuXG4gICAgICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChDb250ZXh0VG9Vc2UpOyAvLyBUaGUgc3RvcmUgX211c3RfIGV4aXN0IGFzIGVpdGhlciBhIHByb3Agb3IgaW4gY29udGV4dC5cbiAgICAgIC8vIFdlJ2xsIGNoZWNrIHRvIHNlZSBpZiBpdCBfbG9va3NfIGxpa2UgYSBSZWR1eCBzdG9yZSBmaXJzdC5cbiAgICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIHBhc3MgdGhyb3VnaCBhIGBzdG9yZWAgcHJvcCB0aGF0IGlzIGp1c3QgYSBwbGFpbiB2YWx1ZS5cblxuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgXFxcInN0b3JlXFxcIiBpbiB0aGUgY29udGV4dCBvZiBcIiArIChcIlxcXCJcIiArIGRpc3BsYXlOYW1lICsgXCJcXFwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBcIikgKyBcIm9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBcIiArIChcIlJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gXCIgKyBkaXNwbGF5TmFtZSArIFwiIGluIGNvbm5lY3Qgb3B0aW9ucy5cIikpO1xuICAgICAgfSAvLyBCYXNlZCBvbiB0aGUgcHJldmlvdXMgY2hlY2ssIG9uZSBvZiB0aGVzZSBtdXN0IGJlIHRydWVcblxuXG4gICAgICB2YXIgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIHZhciBjaGlsZFByb3BzU2VsZWN0b3IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhlIGNoaWxkIHByb3BzIHNlbGVjdG9yIG5lZWRzIHRoZSBzdG9yZSByZWZlcmVuY2UgYXMgYW4gaW5wdXQuXG4gICAgICAgIC8vIFJlLWNyZWF0ZSB0aGlzIHNlbGVjdG9yIHdoZW5ldmVyIHRoZSBzdG9yZSBjaGFuZ2VzLlxuICAgICAgICByZXR1cm4gY3JlYXRlQ2hpbGRTZWxlY3RvcihzdG9yZSk7XG4gICAgICB9LCBbc3RvcmVdKTtcblxuICAgICAgdmFyIF91c2VNZW1vMiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTsgLy8gVGhpcyBTdWJzY3JpcHRpb24ncyBzb3VyY2Ugc2hvdWxkIG1hdGNoIHdoZXJlIHN0b3JlIGNhbWUgZnJvbTogcHJvcHMgdnMuIGNvbnRleHQuIEEgY29tcG9uZW50XG4gICAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUgdmlhIHByb3BzIHNob3VsZG4ndCB1c2Ugc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dCwgb3IgdmljZSB2ZXJzYS5cblxuICAgICAgICAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBudWxsIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgLy8gYG5vdGlmeU5lc3RlZFN1YnNgIGlzIGR1cGxpY2F0ZWQgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLCB3aGVyZSBgc3Vic2NyaXB0aW9uYCB3aWxsIHRoZW4gYmUgbnVsbC4gVGhpcyBjYW5cbiAgICAgICAgLy8gcHJvYmFibHkgYmUgYXZvaWRlZCBpZiBTdWJzY3JpcHRpb24ncyBsaXN0ZW5lcnMgbG9naWMgaXMgY2hhbmdlZCB0byBub3QgY2FsbCBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdGhhdCBoYXZlIGJlZW4gdW5zdWJzY3JpYmVkIGluIHRoZSAgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcC5cbiAgICAgICAgdmFyIG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKSxcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdXNlTWVtbzJbMF0sXG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyA9IF91c2VNZW1vMlsxXTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cblxuICAgICAgdmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBXZSBuZWVkIHRvIGZvcmNlIHRoaXMgd3JhcHBlciBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW5ldmVyIGEgUmVkdXggc3RvcmUgdXBkYXRlXG4gICAgICAvLyBjYXVzZXMgYSBjaGFuZ2UgdG8gdGhlIGNhbGN1bGF0ZWQgY2hpbGQgY29tcG9uZW50IHByb3BzIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IgaW4gbWFwU3RhdGUpXG5cbiAgICAgIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyLCBFTVBUWV9BUlJBWSwgaW5pdFN0YXRlVXBkYXRlcyksXG4gICAgICAgICAgX3VzZVJlZHVjZXIkID0gX3VzZVJlZHVjZXJbMF0sXG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCA9IF91c2VSZWR1Y2VyJFswXSxcbiAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07IC8vIFByb3BhZ2F0ZSBhbnkgbWFwU3RhdGUvbWFwRGlzcGF0Y2ggZXJyb3JzIHVwd2FyZHNcblxuXG4gICAgICBpZiAocHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCAmJiBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3I7XG4gICAgICB9IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuXG4gICAgICB2YXIgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIHZhciBsYXN0V3JhcHBlclByb3BzID0gdXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICB2YXIgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IHVzZVJlZigpO1xuICAgICAgdmFyIHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIHZhciBhY3R1YWxDaGlsZFByb3BzID0gdXNlUHVyZU9ubHlNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICB9LCBbc3RvcmUsIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgYWN0dWFsQ2hpbGRQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vic10pOyAvLyBPdXIgcmUtc3Vic2NyaWJlIGxvZ2ljIG9ubHkgcnVucyB3aGVuIHRoZSBzdG9yZS9zdWJzY3JpcHRpb24gc2V0dXAgY2hhbmdlc1xuXG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3Moc3Vic2NyaWJlVXBkYXRlcywgW3Nob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2hdLCBbc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yXSk7IC8vIE5vdyB0aGF0IGFsbCB0aGF0J3MgZG9uZSwgd2UgY2FuIGZpbmFsbHkgdHJ5IHRvIGFjdHVhbGx5IHJlbmRlciB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgbWVtb2l6ZSB0aGUgZWxlbWVudHMgZm9yIHRoZSByZW5kZXJlZCBjaGlsZCBjb21wb25lbnQgYXMgYW4gb3B0aW1pemF0aW9uLlxuXG4gICAgICB2YXIgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYWN0dWFsQ2hpbGRQcm9wcywge1xuICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICB9KSk7XG4gICAgICB9LCBbcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pOyAvLyBJZiBSZWFjdCBzZWVzIHRoZSBleGFjdCBzYW1lIGVsZW1lbnQgcmVmZXJlbmNlIGFzIGxhc3QgdGltZSwgaXQgYmFpbHMgb3V0IG9mIHJlLXJlbmRlcmluZ1xuICAgICAgLy8gdGhhdCBjaGlsZCwgc2FtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBSZWFjdC5tZW1vKCkgb3IgcmV0dXJuZWQgZmFsc2UgZnJvbSBzaG91bGRDb21wb25lbnRVcGRhdGUuXG5cbiAgICAgIHZhciByZW5kZXJlZENoaWxkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBzdWJzY3JpYmVkIHRvIHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdG8gcGFzcyBpdHMgb3duXG4gICAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGluc3RhbmNlIGRvd24gdG8gb3VyIGRlc2NlbmRhbnRzLiBUaGF0IG1lYW5zIHJlbmRlcmluZyB0aGUgc2FtZVxuICAgICAgICAgIC8vIENvbnRleHQgaW5zdGFuY2UsIGFuZCBwdXR0aW5nIGEgZGlmZmVyZW50IHZhbHVlIGludG8gdGhlIGNvbnRleHQuXG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWVcbiAgICAgICAgICB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfSAvLyBJZiB3ZSdyZSBpbiBcInB1cmVcIiBtb2RlLCBlbnN1cmUgb3VyIHdyYXBwZXIgY29tcG9uZW50IG9ubHkgcmUtcmVuZGVycyB3aGVuIGluY29taW5nIHByb3BzIGhhdmUgY2hhbmdlZC5cblxuXG4gICAgdmFyIENvbm5lY3QgPSBwdXJlID8gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pIDogQ29ubmVjdEZ1bmN0aW9uO1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IENvbm5lY3RGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIHZhciBmb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbm5lY3QsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwgImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wicHVyZVwiLCBcImFyZVN0YXRlc0VxdWFsXCIsIFwiYXJlT3duUHJvcHNFcXVhbFwiLCBcImFyZVN0YXRlUHJvcHNFcXVhbFwiLCBcImFyZU1lcmdlZFByb3BzRXF1YWxcIl07XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4uL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmltcG9ydCBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwRGlzcGF0Y2hUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwU3RhdGVUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyBmcm9tICcuL21lcmdlUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9zZWxlY3RvckZhY3RvcnknO1xuLypcclxuICBjb25uZWN0IGlzIGEgZmFjYWRlIG92ZXIgY29ubmVjdEFkdmFuY2VkLiBJdCB0dXJucyBpdHMgYXJncyBpbnRvIGEgY29tcGF0aWJsZVxyXG4gIHNlbGVjdG9yRmFjdG9yeSwgd2hpY2ggaGFzIHRoZSBzaWduYXR1cmU6XHJcblxyXG4gICAgKGRpc3BhdGNoLCBvcHRpb25zKSA9PiAobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpID0+IG5leHRGaW5hbFByb3BzXHJcbiAgXHJcbiAgY29ubmVjdCBwYXNzZXMgaXRzIGFyZ3MgdG8gY29ubmVjdEFkdmFuY2VkIGFzIG9wdGlvbnMsIHdoaWNoIHdpbGwgaW4gdHVybiBwYXNzIHRoZW0gdG9cclxuICBzZWxlY3RvckZhY3RvcnkgZWFjaCB0aW1lIGEgQ29ubmVjdCBjb21wb25lbnQgaW5zdGFuY2UgaXMgaW5zdGFudGlhdGVkIG9yIGhvdCByZWxvYWRlZC5cclxuXHJcbiAgc2VsZWN0b3JGYWN0b3J5IHJldHVybnMgYSBmaW5hbCBwcm9wcyBzZWxlY3RvciBmcm9tIGl0cyBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgbWVyZ2VQcm9wcyxcclxuICBtZXJnZVByb3BzRmFjdG9yaWVzLCBhbmQgcHVyZSBhcmdzLlxyXG5cclxuICBUaGUgcmVzdWx0aW5nIGZpbmFsIHByb3BzIHNlbGVjdG9yIGlzIGNhbGxlZCBieSB0aGUgQ29ubmVjdCBjb21wb25lbnQgaW5zdGFuY2Ugd2hlbmV2ZXJcclxuICBpdCByZWNlaXZlcyBuZXcgcHJvcHMgb3Igc3RvcmUgc3RhdGUuXHJcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaChhcmcsIGZhY3RvcmllcywgbmFtZSkge1xuICBmb3IgKHZhciBpID0gZmFjdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhY3Rvcmllc1tpXShhcmcpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBvZiB0eXBlIFwiICsgdHlwZW9mIGFyZyArIFwiIGZvciBcIiArIG5hbWUgKyBcIiBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50IFwiICsgb3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZSArIFwiLlwiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn0gLy8gY3JlYXRlQ29ubmVjdCB3aXRoIGRlZmF1bHQgYXJncyBidWlsZHMgdGhlICdvZmZpY2lhbCcgY29ubmVjdCBiZWhhdmlvci4gQ2FsbGluZyBpdCB3aXRoXG4vLyBkaWZmZXJlbnQgb3B0aW9ucyBvcGVucyB1cCBzb21lIHRlc3RpbmcgYW5kIGV4dGVuc2liaWxpdHkgc2NlbmFyaW9zXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3QoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkY29ubmVjdEhPQyA9IF9yZWYuY29ubmVjdEhPQyxcbiAgICAgIGNvbm5lY3RIT0MgPSBfcmVmJGNvbm5lY3RIT0MgPT09IHZvaWQgMCA/IGNvbm5lY3RBZHZhbmNlZCA6IF9yZWYkY29ubmVjdEhPQyxcbiAgICAgIF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9IF9yZWYubWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBTdGF0ZVRvUHJvcHNGLFxuICAgICAgX3JlZiRtYXBEaXNwYXRjaFRvUHJvID0gX3JlZi5tYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcERpc3BhdGNoVG9Qcm8sXG4gICAgICBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPSBfcmVmLm1lcmdlUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtZXJnZVByb3BzRmFjdG9yaWVzID0gX3JlZiRtZXJnZVByb3BzRmFjdG9yID09PSB2b2lkIDAgPyBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvcixcbiAgICAgIF9yZWYkc2VsZWN0b3JGYWN0b3J5ID0gX3JlZi5zZWxlY3RvckZhY3RvcnksXG4gICAgICBzZWxlY3RvckZhY3RvcnkgPSBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9PT0gdm9pZCAwID8gZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSA6IF9yZWYkc2VsZWN0b3JGYWN0b3J5O1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBfcmVmMikge1xuICAgIGlmIChfcmVmMiA9PT0gdm9pZCAwKSB7XG4gICAgICBfcmVmMiA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcmVmMyA9IF9yZWYyLFxuICAgICAgICBfcmVmMyRwdXJlID0gX3JlZjMucHVyZSxcbiAgICAgICAgcHVyZSA9IF9yZWYzJHB1cmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMyRwdXJlLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlc0VxdWFsID09PSB2b2lkIDAgPyBzdHJpY3RFcXVhbCA6IF9yZWYzJGFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPSBfcmVmMy5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZjMkYXJlT3duUHJvcHNFcXVhID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVPd25Qcm9wc0VxdWEsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9IF9yZWYzLmFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVQcm9wc0VxID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZVByb3BzRXEsXG4gICAgICAgIF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9IF9yZWYzLmFyZU1lcmdlZFByb3BzRXF1YWwsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU1lcmdlZFByb3BzRSxcbiAgICAgICAgZXh0cmFPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIF9leGNsdWRlZCk7XG5cbiAgICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hdGNoKG1hcFN0YXRlVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXRjaChtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWVyZ2VQcm9wcyA9IG1hdGNoKG1lcmdlUHJvcHMsIG1lcmdlUHJvcHNGYWN0b3JpZXMsICdtZXJnZVByb3BzJyk7XG4gICAgcmV0dXJuIGNvbm5lY3RIT0Moc2VsZWN0b3JGYWN0b3J5LCBfZXh0ZW5kcyh7XG4gICAgICAvLyB1c2VkIGluIGVycm9yIG1lc3NhZ2VzXG4gICAgICBtZXRob2ROYW1lOiAnY29ubmVjdCcsXG4gICAgICAvLyB1c2VkIHRvIGNvbXB1dGUgQ29ubmVjdCdzIGRpc3BsYXlOYW1lIGZyb20gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZGlzcGxheU5hbWUuXG4gICAgICBnZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gXCJDb25uZWN0KFwiICsgbmFtZSArIFwiKVwiO1xuICAgICAgfSxcbiAgICAgIC8vIGlmIG1hcFN0YXRlVG9Qcm9wcyBpcyBmYWxzeSwgdGhlIENvbm5lY3QgY29tcG9uZW50IGRvZXNuJ3Qgc3Vic2NyaWJlIHRvIHN0b3JlIHN0YXRlIGNoYW5nZXNcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlczogQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpLFxuICAgICAgLy8gcGFzc2VkIHRocm91Z2ggdG8gc2VsZWN0b3JGYWN0b3J5XG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzOiBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wczogaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzOiBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIHB1cmU6IHB1cmUsXG4gICAgICBhcmVTdGF0ZXNFcXVhbDogYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsOiBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsOiBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsOiBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfSwgZXh0cmFPcHRpb25zKSk7XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovY3JlYXRlQ29ubmVjdCgpOyIsICJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvd25Qcm9wcywgc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFwdXJlIHx8ICFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgfSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTsiLCAiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiaW5pdE1hcFN0YXRlVG9Qcm9wc1wiLCBcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIiwgXCJpbml0TWVyZ2VQcm9wc1wiXTtcbmltcG9ydCB2ZXJpZnlTdWJzZWxlY3RvcnMgZnJvbSAnLi92ZXJpZnlTdWJzZWxlY3RvcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG4gIHZhciBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIHZhciBvd25Qcm9wcztcbiAgdmFyIHN0YXRlUHJvcHM7XG4gIHZhciBkaXNwYXRjaFByb3BzO1xuICB2YXIgbWVyZ2VkUHJvcHM7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgdmFyIHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSwgbmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn0gLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgX2V4Y2x1ZGVkKTtcblxuICB2YXIgbWFwU3RhdGVUb1Byb3BzID0gaW5pdE1hcFN0YXRlVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIG9wdGlvbnMuZGlzcGxheU5hbWUpO1xuICB9XG5cbiAgdmFyIHNlbGVjdG9yRmFjdG9yeSA9IG9wdGlvbnMucHVyZSA/IHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5IDogaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeTtcbiAgcmV0dXJuIHNlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufSIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlUmVkdXhDb250ZXh0ID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gdXNlU3RvcmUoKSB7XG4gICAgdmFyIF91c2VSZWR1eENvbnRleHQgPSB1c2VSZWR1eENvbnRleHQoKSxcbiAgICAgICAgc3RvcmUgPSBfdXNlUmVkdXhDb250ZXh0LnN0b3JlO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xuICB9O1xufVxuLyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgcmVkdXggc3RvcmVcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgRXhhbXBsZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcclxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IHZhciB1c2VTdG9yZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVTdG9yZUhvb2soKTsiLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0Jztcbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxyXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsICJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVN0b3JlID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0U3RvcmUgOiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCk7XG4gIHJldHVybiBmdW5jdGlvbiB1c2VEaXNwYXRjaCgpIHtcbiAgICB2YXIgc3RvcmUgPSB1c2VTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaDtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBgZGlzcGF0Y2hgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fGZ1bmN0aW9ufSByZWR1eCBzdG9yZSdzIGBkaXNwYXRjaGAgZnVuY3Rpb25cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gKiAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gKiAgIGNvbnN0IGluY3JlYXNlQ291bnRlciA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2luY3JlYXNlLWNvdW50ZXInIH0pLCBbXSlcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGRpdj5cclxuICogICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZUNvdW50ZXJ9PkluY3JlYXNlIGNvdW50ZXI8L2J1dHRvbj5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgIClcclxuICogfVxyXG4gKi9cblxuZXhwb3J0IHZhciB1c2VEaXNwYXRjaCA9IC8qI19fUFVSRV9fKi9jcmVhdGVEaXNwYXRjaEhvb2soKTsiLCAiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlUmVmLCB1c2VNZW1vLCB1c2VDb250ZXh0LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpcHRpb24gfSBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuXG52YXIgcmVmRXF1YWxpdHkgPSBmdW5jdGlvbiByZWZFcXVhbGl0eShhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcyArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VSZW5kZXIgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVN1YnNjcmlwdGlvbihzdG9yZSwgY29udGV4dFN1Yik7XG4gIH0sIFtzdG9yZSwgY29udGV4dFN1Yl0pO1xuICB2YXIgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciA9IHVzZVJlZigpO1xuICB2YXIgbGF0ZXN0U2VsZWN0b3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFN0b3JlU3RhdGUgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdGVkU3RhdGUgPSB1c2VSZWYoKTtcbiAgdmFyIHN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICB2YXIgc2VsZWN0ZWRTdGF0ZTtcblxuICB0cnkge1xuICAgIGlmIChzZWxlY3RvciAhPT0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudCB8fCBzdG9yZVN0YXRlICE9PSBsYXRlc3RTdG9yZVN0YXRlLmN1cnJlbnQgfHwgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50KSB7XG4gICAgICB2YXIgbmV3U2VsZWN0ZWRTdGF0ZSA9IHNlbGVjdG9yKHN0b3JlU3RhdGUpOyAvLyBlbnN1cmUgbGF0ZXN0IHNlbGVjdGVkIHN0YXRlIGlzIHJldXNlZCBzbyB0aGF0IGEgY3VzdG9tIGVxdWFsaXR5IGZ1bmN0aW9uIGNhbiByZXN1bHQgaW4gaWRlbnRpY2FsIHJlZmVyZW5jZXNcblxuICAgICAgaWYgKGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8ICFlcXVhbGl0eUZuKG5ld1NlbGVjdGVkU3RhdGUsIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCkpIHtcbiAgICAgICAgc2VsZWN0ZWRTdGF0ZSA9IG5ld1NlbGVjdGVkU3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiICsgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrICsgXCJcXG5cXG5cIjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBsYXRlc3RTZWxlY3Rvci5jdXJyZW50ID0gc2VsZWN0b3I7XG4gICAgbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50ID0gc3RvcmVTdGF0ZTtcbiAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBzZWxlY3RlZFN0YXRlO1xuICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXdTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTsgLy8gQXZvaWQgY2FsbGluZyBzZWxlY3RvciBtdWx0aXBsZSB0aW1lcyBpZiB0aGUgc3RvcmUncyBzdGF0ZSBoYXMgbm90IGNoYW5nZWRcblxuICAgICAgICBpZiAobmV3U3RvcmVTdGF0ZSA9PT0gbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9uZXdTZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudChuZXdTdG9yZVN0YXRlKTtcblxuICAgICAgICBpZiAoZXF1YWxpdHlGbihfbmV3U2VsZWN0ZWRTdGF0ZSwgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IF9uZXdTZWxlY3RlZFN0YXRlO1xuICAgICAgICBsYXRlc3RTdG9yZVN0YXRlLmN1cnJlbnQgPSBuZXdTdG9yZVN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHdlIGlnbm9yZSBhbGwgZXJyb3JzIGhlcmUsIHNpbmNlIHdoZW4gdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBpcyByZS1yZW5kZXJlZCwgdGhlIHNlbGVjdG9ycyBhcmUgY2FsbGVkIGFnYWluLCBhbmRcbiAgICAgICAgLy8gd2lsbCB0aHJvdyBhZ2FpbiwgaWYgbmVpdGhlciBwcm9wcyBub3Igc3RvcmUgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlZFxuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSBlcnI7XG4gICAgICB9XG5cbiAgICAgIGZvcmNlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3N0b3JlLCBzdWJzY3JpcHRpb25dKTtcbiAgcmV0dXJuIHNlbGVjdGVkU3RhdGU7XG59XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXF1YWxpdHlGbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF91c2VSZWR1eENvbnRleHQgPSB1c2VSZWR1eENvbnRleHQoKSxcbiAgICAgICAgc3RvcmUgPSBfdXNlUmVkdXhDb250ZXh0LnN0b3JlLFxuICAgICAgICBjb250ZXh0U3ViID0gX3VzZVJlZHV4Q29udGV4dC5zdWJzY3JpcHRpb247XG5cbiAgICB2YXIgc2VsZWN0ZWRTdGF0ZSA9IHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yik7XG4gICAgdXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZSdzIHN0YXRlLiBUaGlzIGhvb2sgdGFrZXMgYSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBhcyBhbiBhcmd1bWVudC4gVGhlIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBzdG9yZSBzdGF0ZS5cclxuICpcclxuICogVGhpcyBob29rIHRha2VzIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmlzb24gZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogdGhhdCBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHRoZSBzZWxlY3RlZCBzdGF0ZSBpcyBjb21wYXJlZCB0byBkZXRlcm1pbmVcclxuICogd2hldGhlciB0aGUgY29tcG9uZW50IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZWxlY3RvciB0aGUgc2VsZWN0b3IgZnVuY3Rpb25cclxuICogQHBhcmFtIHtGdW5jdGlvbj19IGVxdWFsaXR5Rm4gdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBlcXVhbGl0eVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlcilcclxuICogICByZXR1cm4gPGRpdj57Y291bnRlcn08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IHZhciB1c2VTZWxlY3RvciA9IC8qI19fUFVSRV9fKi9jcmVhdGVTZWxlY3Rvckhvb2soKTsiLCAiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbmV4cG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJzsiLCAiZXhwb3J0ICogZnJvbSAnLi9leHBvcnRzJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSAnLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbmltcG9ydCB7IHNldEJhdGNoIH0gZnJvbSAnLi91dGlscy9iYXRjaCc7IC8vIEVuYWJsZSBiYXRjaGVkIHVwZGF0ZXMgaW4gb3VyIHN1YnNjcmlwdGlvbnMgZm9yIHVzZVxuLy8gd2l0aCBzdGFuZGFyZCBSZWFjdCByZW5kZXJlcnMgKFJlYWN0RE9NLCBSZWFjdCBOYXRpdmUpXG5cbnNldEJhdGNoKGJhdGNoKTtcbmV4cG9ydCB7IGJhdGNoIH07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsa0JBQVUsT0FBTyxXQUFTLGVBQWEsT0FBTyxTQUFPLEVBQUUsT0FBTyxJQUFFLGNBQVksT0FBTyxVQUFRLE9BQU8sTUFBSSxPQUFPLENBQUMsU0FBUyxHQUFFLENBQUMsSUFBRSxFQUFFLEVBQUUsY0FBWSxFQUFFLGVBQWEsQ0FBQyxDQUFDO0FBQUEsSUFBQyxFQUFFLFNBQUssU0FBUyxHQUFFO0FBQUM7QUFBYSxlQUFTLEVBQUVBLElBQUVDLElBQUU7QUFBQyxRQUFBRCxHQUFFLFNBQU9DLElBQUVELEdBQUUsWUFBVSxPQUFPLE9BQU9DLEdBQUUsV0FBVSxFQUFDLGFBQVksRUFBQyxPQUFNRCxJQUFFLFlBQVcsT0FBRyxVQUFTLE1BQUcsY0FBYSxLQUFFLEVBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQyxlQUFTLEVBQUVBLElBQUVDLElBQUU7QUFBQyxlQUFPLGVBQWUsTUFBSyxRQUFPLEVBQUMsT0FBTUQsSUFBRSxZQUFXLEtBQUUsQ0FBQyxHQUFFQyxNQUFHQSxHQUFFLFVBQVEsT0FBTyxlQUFlLE1BQUssUUFBTyxFQUFDLE9BQU1BLElBQUUsWUFBVyxLQUFFLENBQUM7QUFBQSxNQUFDO0FBQUMsZUFBUyxFQUFFRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsVUFBRSxPQUFPLEtBQUssTUFBSyxLQUFJRixFQUFDLEdBQUUsT0FBTyxlQUFlLE1BQUssT0FBTSxFQUFDLE9BQU1DLElBQUUsWUFBVyxLQUFFLENBQUMsR0FBRSxPQUFPLGVBQWUsTUFBSyxPQUFNLEVBQUMsT0FBTUMsSUFBRSxZQUFXLEtBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxlQUFTLEVBQUVGLElBQUVDLElBQUU7QUFBQyxVQUFFLE9BQU8sS0FBSyxNQUFLLEtBQUlELEVBQUMsR0FBRSxPQUFPLGVBQWUsTUFBSyxPQUFNLEVBQUMsT0FBTUMsSUFBRSxZQUFXLEtBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxlQUFTLEVBQUVELElBQUVDLElBQUU7QUFBQyxVQUFFLE9BQU8sS0FBSyxNQUFLLEtBQUlELEVBQUMsR0FBRSxPQUFPLGVBQWUsTUFBSyxPQUFNLEVBQUMsT0FBTUMsSUFBRSxZQUFXLEtBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxlQUFTLEVBQUVELElBQUVDLElBQUVDLElBQUU7QUFBQyxV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IiwgIm0iLCAidyIsICJ4IiwgIlMiLCAibyIsICJpIiwgImEiLCAiZiIsICJ1IiwgImwiLCAiayIsICJqIiwgIkUiLCAiQSIsICJPIiwgIk4iLCAiUCIsICJDIiwgIkYiLCAiTCIsICJUIiwgImlzVmFsaWRFbGVtZW50VHlwZSIsICJpc0NvbnRleHRDb25zdW1lciIsICJyZXF1aXJlX3JlYWN0X2lzIiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJzZXRCYXRjaCIsICJnZXRCYXRjaCIsICJiYXRjaCIsICJub3RpZnkiLCAiZ2V0IiwgInN0b3JlIiwgImltcG9ydF9yZWFjdCIsICJzdG9yZSIsICJSZWFjdCIsICJQcm9wVHlwZXMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAidXNlUmVkdXhDb250ZXh0IiwgInVzZVN0b3JlIiwgInN0b3JlIiwgInVzZVN0b3JlIiwgInVzZURpc3BhdGNoIiwgInN0b3JlIiwgImltcG9ydF9yZWFjdCIsICJyZWZFcXVhbGl0eSIsICJzdG9yZSIsICJ1c2VSZWR1eENvbnRleHQiLCAidXNlU2VsZWN0b3IiXQp9Cg==
