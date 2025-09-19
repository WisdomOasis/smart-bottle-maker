import {
  getCServicesAbility,
  getTrackSegmentList,
  setCServicesPop
} from "/chunk-OUDOTMVW.js";
import {
  _slicedToArray,
  init_slicedToArray,
  lib_default as lib_default2,
  require_dist,
  require_es_array_concat,
  require_es_array_map,
  require_es_number_constructor,
  require_to_style
} from "/chunk-G22KBMUG.js";
import "/chunk-CQBMKGKR.js";
import "/chunk-UXQMYNQX.js";
import {
  checkPermissions,
  getBatInfo,
  getCyclingTime,
  getGpsIcon,
  getWifiIcon,
  isDpExist,
  scaleMileageValue,
  toSvgCssBackground
} from "/chunk-NUT6VFTF.js";
import {
  res_default
} from "/chunk-HCMI3PT2.js";
import {
  dpCodes_default
} from "/chunk-BLWGS5W2.js";
import {
  redux_default,
  useSelector
} from "/chunk-5XTPK7TU.js";
import {
  selectSystemInfo,
  selectSystemInfoByKey
} from "/chunk-A7RETWQP.js";
import {
  selectThemeType
} from "/chunk-Q6S7DES4.js";
import {
  commonCheckInfo,
  updateCommonInfo
} from "/chunk-MWBBQXZO.js";
import "/chunk-KMYVASEN.js";
import {
  i18n_default
} from "/chunk-ULZ52SSS.js";
import {
  Button_default,
  Icon_default,
  Image_default,
  PageInstance,
  PageInstanceContext,
  Text_default,
  View_default,
  clsx_m_default,
  getBLEOnlineState,
  getSystemInfo,
  getSystemInfoSync,
  init_clsx_m,
  init_esm as init_esm2,
  init_main,
  init_ray,
  isMiniProgram,
  isWeb,
  lib_default,
  lifecycle,
  offBLEConnectStatusChange,
  offBluetoothAdapterStateChange,
  offDpDataChange,
  onBLEConnectStatusChange,
  onBluetoothAdapterStateChange,
  onDpDataChange,
  require_classof_raw,
  require_es_regexp_exec,
  require_es_string_replace,
  require_export,
  require_function_uncurry_this_clause,
  require_is_object,
  require_is_pure,
  require_lodash,
  require_object_get_own_property_descriptor,
  require_require_object_coercible,
  require_to_length,
  require_to_string,
  require_well_known_symbol,
  subscribeBLEConnectStatus,
  unsubscribeBLEConnectStatus,
  useActions,
  useDevice,
  useProps
} from "/chunk-QY7E24JJ.js";
import {
  createNativeComponent,
  createPageConfig,
  init_esm,
  useAppEvent,
  usePageEvent
} from "/chunk-E3KUK7K6.js";
import "/chunk-B4PAEWTK.js";
import {
  require_react
} from "/chunk-AF7SZHRH.js";
import {
  _objectSpread2,
  init_objectSpread2
} from "/chunk-2NVT6NOP.js";
import "/chunk-DXDVPL6V.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "/chunk-IJV4CEDC.js";

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/top-bar/index.module.less
var require_index_module = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/top-bar/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/top-bar/index.module.less
var require_index_module2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/top-bar/index.module.less"(exports, module) {
    require_index_module();
    var s_statusBar = "statusBar__EtbGMq";
    var s_topBar = "topBar__EtbGMq";
    var s_topBarWrap = "topBarWrap__EtbGMq";
    exports["statusBar"] = s_statusBar;
    exports["topBar"] = s_topBar;
    exports["topBarWrap"] = s_topBarWrap;
    module.exports = { "statusBar": s_statusBar, "topBar": s_topBar, "topBarWrap": s_topBarWrap };
  }
});

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t3, e2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t3 = "undefined" != typeof globalThis ? globalThis : t3 || self).dayjs = e2();
    }(exports, function() {
      "use strict";
      var t3 = 1e3, e2 = 6e4, n4 = 36e5, r3 = "millisecond", i3 = "second", s3 = "minute", u3 = "hour", a3 = "day", o3 = "week", c3 = "month", f3 = "quarter", h3 = "year", d3 = "date", l3 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t4) {
        var e3 = ["th", "st", "nd", "rd"], n5 = t4 % 100;
        return "[" + t4 + (e3[(n5 - 20) % 10] || e3[n5] || e3[0]) + "]";
      } }, m4 = function(t4, e3, n5) {
        var r4 = String(t4);
        return !r4 || r4.length >= e3 ? t4 : "" + Array(e3 + 1 - r4.length).join(n5) + t4;
      }, v3 = { s: m4, z: function(t4) {
        var e3 = -t4.utcOffset(), n5 = Math.abs(e3), r4 = Math.floor(n5 / 60), i4 = n5 % 60;
        return (e3 <= 0 ? "+" : "-") + m4(r4, 2, "0") + ":" + m4(i4, 2, "0");
      }, m: function t4(e3, n5) {
        if (e3.date() < n5.date())
          return -t4(n5, e3);
        var r4 = 12 * (n5.year() - e3.year()) + (n5.month() - e3.month()), i4 = e3.clone().add(r4, c3), s4 = n5 - i4 < 0, u4 = e3.clone().add(r4 + (s4 ? -1 : 1), c3);
        return +(-(r4 + (n5 - i4) / (s4 ? i4 - u4 : u4 - i4)) || 0);
      }, a: function(t4) {
        return t4 < 0 ? Math.ceil(t4) || 0 : Math.floor(t4);
      }, p: function(t4) {
        return { M: c3, y: h3, w: o3, d: a3, D: d3, h: u3, m: s3, s: i3, ms: r3, Q: f3 }[t4] || String(t4 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t4) {
        return void 0 === t4;
      } }, g3 = "en", D = {};
      D[g3] = M2;
      var p3 = "$isDayjsObject", S = function(t4) {
        return t4 instanceof _3 || !(!t4 || !t4[p3]);
      }, w2 = function t4(e3, n5, r4) {
        var i4;
        if (!e3)
          return g3;
        if ("string" == typeof e3) {
          var s4 = e3.toLowerCase();
          D[s4] && (i4 = s4), n5 && (D[s4] = n5, i4 = s4);
          var u4 = e3.split("-");
          if (!i4 && u4.length > 1)
            return t4(u4[0]);
        } else {
          var a4 = e3.name;
          D[a4] = e3, i4 = a4;
        }
        return !r4 && i4 && (g3 = i4), i4 || !r4 && g3;
      }, O2 = function(t4, e3) {
        if (S(t4))
          return t4.clone();
        var n5 = "object" == typeof e3 ? e3 : {};
        return n5.date = t4, n5.args = arguments, new _3(n5);
      }, b2 = v3;
      b2.l = w2, b2.i = S, b2.w = function(t4, e3) {
        return O2(t4, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _3 = function() {
        function M3(t4) {
          this.$L = w2(t4.locale, null, true), this.parse(t4), this.$x = this.$x || t4.x || {}, this[p3] = true;
        }
        var m5 = M3.prototype;
        return m5.parse = function(t4) {
          this.$d = function(t5) {
            var e3 = t5.date, n5 = t5.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r4 = e3.match($2);
              if (r4) {
                var i4 = r4[2] - 1 || 0, s4 = (r4[7] || "0").substring(0, 3);
                return n5 ? new Date(Date.UTC(r4[1], i4, r4[3] || 1, r4[4] || 0, r4[5] || 0, r4[6] || 0, s4)) : new Date(r4[1], i4, r4[3] || 1, r4[4] || 0, r4[5] || 0, r4[6] || 0, s4);
              }
            }
            return new Date(e3);
          }(t4), this.init();
        }, m5.init = function() {
          var t4 = this.$d;
          this.$y = t4.getFullYear(), this.$M = t4.getMonth(), this.$D = t4.getDate(), this.$W = t4.getDay(), this.$H = t4.getHours(), this.$m = t4.getMinutes(), this.$s = t4.getSeconds(), this.$ms = t4.getMilliseconds();
        }, m5.$utils = function() {
          return b2;
        }, m5.isValid = function() {
          return !(this.$d.toString() === l3);
        }, m5.isSame = function(t4, e3) {
          var n5 = O2(t4);
          return this.startOf(e3) <= n5 && n5 <= this.endOf(e3);
        }, m5.isAfter = function(t4, e3) {
          return O2(t4) < this.startOf(e3);
        }, m5.isBefore = function(t4, e3) {
          return this.endOf(e3) < O2(t4);
        }, m5.$g = function(t4, e3, n5) {
          return b2.u(t4) ? this[e3] : this.set(n5, t4);
        }, m5.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m5.valueOf = function() {
          return this.$d.getTime();
        }, m5.startOf = function(t4, e3) {
          var n5 = this, r4 = !!b2.u(e3) || e3, f4 = b2.p(t4), l4 = function(t5, e4) {
            var i4 = b2.w(n5.$u ? Date.UTC(n5.$y, e4, t5) : new Date(n5.$y, e4, t5), n5);
            return r4 ? i4 : i4.endOf(a3);
          }, $3 = function(t5, e4) {
            return b2.w(n5.toDate()[t5].apply(n5.toDate("s"), (r4 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n5);
          }, y2 = this.$W, M4 = this.$M, m6 = this.$D, v4 = "set" + (this.$u ? "UTC" : "");
          switch (f4) {
            case h3:
              return r4 ? l4(1, 0) : l4(31, 11);
            case c3:
              return r4 ? l4(1, M4) : l4(0, M4 + 1);
            case o3:
              var g4 = this.$locale().weekStart || 0, D2 = (y2 < g4 ? y2 + 7 : y2) - g4;
              return l4(r4 ? m6 - D2 : m6 + (6 - D2), M4);
            case a3:
            case d3:
              return $3(v4 + "Hours", 0);
            case u3:
              return $3(v4 + "Minutes", 1);
            case s3:
              return $3(v4 + "Seconds", 2);
            case i3:
              return $3(v4 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m5.endOf = function(t4) {
          return this.startOf(t4, false);
        }, m5.$set = function(t4, e3) {
          var n5, o4 = b2.p(t4), f4 = "set" + (this.$u ? "UTC" : ""), l4 = (n5 = {}, n5[a3] = f4 + "Date", n5[d3] = f4 + "Date", n5[c3] = f4 + "Month", n5[h3] = f4 + "FullYear", n5[u3] = f4 + "Hours", n5[s3] = f4 + "Minutes", n5[i3] = f4 + "Seconds", n5[r3] = f4 + "Milliseconds", n5)[o4], $3 = o4 === a3 ? this.$D + (e3 - this.$W) : e3;
          if (o4 === c3 || o4 === h3) {
            var y2 = this.clone().set(d3, 1);
            y2.$d[l4]($3), y2.init(), this.$d = y2.set(d3, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l4 && this.$d[l4]($3);
          return this.init(), this;
        }, m5.set = function(t4, e3) {
          return this.clone().$set(t4, e3);
        }, m5.get = function(t4) {
          return this[b2.p(t4)]();
        }, m5.add = function(r4, f4) {
          var d4, l4 = this;
          r4 = Number(r4);
          var $3 = b2.p(f4), y2 = function(t4) {
            var e3 = O2(l4);
            return b2.w(e3.date(e3.date() + Math.round(t4 * r4)), l4);
          };
          if ($3 === c3)
            return this.set(c3, this.$M + r4);
          if ($3 === h3)
            return this.set(h3, this.$y + r4);
          if ($3 === a3)
            return y2(1);
          if ($3 === o3)
            return y2(7);
          var M4 = (d4 = {}, d4[s3] = e2, d4[u3] = n4, d4[i3] = t3, d4)[$3] || 1, m6 = this.$d.getTime() + r4 * M4;
          return b2.w(m6, this);
        }, m5.subtract = function(t4, e3) {
          return this.add(-1 * t4, e3);
        }, m5.format = function(t4) {
          var e3 = this, n5 = this.$locale();
          if (!this.isValid())
            return n5.invalidDate || l3;
          var r4 = t4 || "YYYY-MM-DDTHH:mm:ssZ", i4 = b2.z(this), s4 = this.$H, u4 = this.$m, a4 = this.$M, o4 = n5.weekdays, c4 = n5.months, f4 = n5.meridiem, h4 = function(t5, n6, i5, s5) {
            return t5 && (t5[n6] || t5(e3, r4)) || i5[n6].slice(0, s5);
          }, d4 = function(t5) {
            return b2.s(s4 % 12 || 12, t5, "0");
          }, $3 = f4 || function(t5, e4, n6) {
            var r5 = t5 < 12 ? "AM" : "PM";
            return n6 ? r5.toLowerCase() : r5;
          };
          return r4.replace(y, function(t5, r5) {
            return r5 || function(t6) {
              switch (t6) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b2.s(e3.$y, 4, "0");
                case "M":
                  return a4 + 1;
                case "MM":
                  return b2.s(a4 + 1, 2, "0");
                case "MMM":
                  return h4(n5.monthsShort, a4, c4, 3);
                case "MMMM":
                  return h4(c4, a4);
                case "D":
                  return e3.$D;
                case "DD":
                  return b2.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h4(n5.weekdaysMin, e3.$W, o4, 2);
                case "ddd":
                  return h4(n5.weekdaysShort, e3.$W, o4, 3);
                case "dddd":
                  return o4[e3.$W];
                case "H":
                  return String(s4);
                case "HH":
                  return b2.s(s4, 2, "0");
                case "h":
                  return d4(1);
                case "hh":
                  return d4(2);
                case "a":
                  return $3(s4, u4, true);
                case "A":
                  return $3(s4, u4, false);
                case "m":
                  return String(u4);
                case "mm":
                  return b2.s(u4, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b2.s(e3.$s, 2, "0");
                case "SSS":
                  return b2.s(e3.$ms, 3, "0");
                case "Z":
                  return i4;
              }
              return null;
            }(t5) || i4.replace(":", "");
          });
        }, m5.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m5.diff = function(r4, d4, l4) {
          var $3, y2 = this, M4 = b2.p(d4), m6 = O2(r4), v4 = (m6.utcOffset() - this.utcOffset()) * e2, g4 = this - m6, D2 = function() {
            return b2.m(y2, m6);
          };
          switch (M4) {
            case h3:
              $3 = D2() / 12;
              break;
            case c3:
              $3 = D2();
              break;
            case f3:
              $3 = D2() / 3;
              break;
            case o3:
              $3 = (g4 - v4) / 6048e5;
              break;
            case a3:
              $3 = (g4 - v4) / 864e5;
              break;
            case u3:
              $3 = g4 / n4;
              break;
            case s3:
              $3 = g4 / e2;
              break;
            case i3:
              $3 = g4 / t3;
              break;
            default:
              $3 = g4;
          }
          return l4 ? $3 : b2.a($3);
        }, m5.daysInMonth = function() {
          return this.endOf(c3).$D;
        }, m5.$locale = function() {
          return D[this.$L];
        }, m5.locale = function(t4, e3) {
          if (!t4)
            return this.$L;
          var n5 = this.clone(), r4 = w2(t4, e3, true);
          return r4 && (n5.$L = r4), n5;
        }, m5.clone = function() {
          return b2.w(this.$d, this);
        }, m5.toDate = function() {
          return new Date(this.valueOf());
        }, m5.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m5.toISOString = function() {
          return this.$d.toISOString();
        }, m5.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      }(), k2 = _3.prototype;
      return O2.prototype = k2, [["$ms", r3], ["$s", i3], ["$m", s3], ["$H", u3], ["$W", a3], ["$M", c3], ["$y", h3], ["$D", d3]].forEach(function(t4) {
        k2[t4[1]] = function(e3) {
          return this.$g(e3, t4[0], t4[1]);
        };
      }), O2.extend = function(t4, e3) {
        return t4.$i || (t4(e3, _3, O2), t4.$i = true), O2;
      }, O2.locale = w2, O2.isDayjs = S, O2.unix = function(t4) {
        return O2(1e3 * t4);
      }, O2.en = D[g3], O2.Ls = D, O2.p = {}, O2;
    });
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof ty == "object" && ty && ty.Object === Object && ty;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol = root.Symbol;
    module.exports = Symbol;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n4, iteratee) {
      var index = -1, result = Array(n4);
      while (++index < n4) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module.exports = Set;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/svg/lib/index.less
var require_lib = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/svg/lib/index.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/svg/lib/index.less
var require_lib2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/svg/lib/index.less"(exports, module) {
    require_lib();
    module.exports = {};
  }
});

// node_modules/core-js/internals/is-regexp.js
var require_is_regexp = __commonJS({
  "node_modules/core-js/internals/is-regexp.js"(exports, module) {
    "use strict";
    var isObject = require_is_object();
    var classof = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var MATCH = wellKnownSymbol("match");
    module.exports = function(it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) === "RegExp");
    };
  }
});

// node_modules/core-js/internals/not-a-regexp.js
var require_not_a_regexp = __commonJS({
  "node_modules/core-js/internals/not-a-regexp.js"(exports, module) {
    "use strict";
    var isRegExp = require_is_regexp();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isRegExp(it)) {
        throw new $TypeError("The method doesn't accept regular expressions");
      }
      return it;
    };
  }
});

// node_modules/core-js/internals/correct-is-regexp-logic.js
var require_correct_is_regexp_logic = __commonJS({
  "node_modules/core-js/internals/correct-is-regexp-logic.js"(exports, module) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var MATCH = wellKnownSymbol("match");
    module.exports = function(METHOD_NAME) {
      var regexp = /./;
      try {
        "/./"[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH] = false;
          return "/./"[METHOD_NAME](regexp);
        } catch (error2) {
        }
      }
      return false;
    };
  }
});

// node_modules/core-js/modules/es.string.ends-with.js
var require_es_string_ends_with = __commonJS({
  "node_modules/core-js/modules/es.string.ends-with.js"() {
    "use strict";
    var $2 = require_export();
    var uncurryThis = require_function_uncurry_this_clause();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var toLength = require_to_length();
    var toString = require_to_string();
    var notARegExp = require_not_a_regexp();
    var requireObjectCoercible = require_require_object_coercible();
    var correctIsRegExpLogic = require_correct_is_regexp_logic();
    var IS_PURE = require_is_pure();
    var slice = uncurryThis("".slice);
    var min = Math.min;
    var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith");
    var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
      var descriptor = getOwnPropertyDescriptor(String.prototype, "endsWith");
      return descriptor && !descriptor.writable;
    }();
    $2({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      endsWith: function endsWith(searchString) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : void 0;
        var len = that.length;
        var end = endPosition === void 0 ? len : min(toLength(endPosition), len);
        var search = toString(searchString);
        return slice(that, end - search.length, end) === search;
      }
    });
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/dynamic-number/index.module.less
var require_index_module3 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/dynamic-number/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/dynamic-number/index.module.less
var require_index_module4 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/dynamic-number/index.module.less"(exports, module) {
    require_index_module3();
    var s_number = "number__VQ4zQW";
    exports["number"] = s_number;
    module.exports = { "number": s_number };
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/battery/index.module.less
var require_index_module5 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/battery/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/battery/index.module.less
var require_index_module6 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/battery/index.module.less"(exports, module) {
    require_index_module5();
    var s_batIcon = "batIcon__Kdt8Zq";
    var s_batLeft = "batLeft__Kdt8Zq";
    var s_batNum = "batNum__Kdt8Zq";
    var s_batWarn = "batWarn__Kdt8Zq";
    var s_battery = "battery__Kdt8Zq";
    var s_svg = "svg__Kdt8Zq";
    var s_util = "util__Kdt8Zq";
    exports["batIcon"] = s_batIcon;
    exports["batLeft"] = s_batLeft;
    exports["batNum"] = s_batNum;
    exports["batWarn"] = s_batWarn;
    exports["battery"] = s_battery;
    exports["svg"] = s_svg;
    exports["util"] = s_util;
    module.exports = { "batIcon": s_batIcon, "batLeft": s_batLeft, "batNum": s_batNum, "batWarn": s_batWarn, "battery": s_battery, "svg": s_svg, "util": s_util };
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/signal-view/index.module.less
var require_index_module7 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/signal-view/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/signal-view/index.module.less
var require_index_module8 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/signal-view/index.module.less"(exports, module) {
    require_index_module7();
    var s_bluetoothIcon = "bluetoothIcon__FVjQHq";
    var s_bluetoothView = "bluetoothView__FVjQHq";
    var s_connectText = "connectText__FVjQHq";
    var s_connectTextActive = "connectTextActive__FVjQHq";
    var s_signal = "signal__FVjQHq";
    var s_signalIcon = "signalIcon__FVjQHq";
    exports["bluetoothIcon"] = s_bluetoothIcon;
    exports["bluetoothView"] = s_bluetoothView;
    exports["connectText"] = s_connectText;
    exports["connectTextActive"] = s_connectTextActive;
    exports["signal"] = s_signal;
    exports["signalIcon"] = s_signalIcon;
    module.exports = { "bluetoothIcon": s_bluetoothIcon, "bluetoothView": s_bluetoothView, "connectText": s_connectText, "connectTextActive": s_connectTextActive, "signal": s_signal, "signalIcon": s_signalIcon };
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/unlock-slider/index.module.less
var require_index_module9 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/unlock-slider/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/unlock-slider/index.module.less
var require_index_module10 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/unlock-slider/index.module.less"(exports, module) {
    require_index_module9();
    var s_arrow = "arrow__NqI-Hq";
    var s_arrowAnimation = "arrow-animation__NqI-Hq";
    var s_arrowContainer = "arrowContainer__NqI-Hq";
    var s_arrowLeft = "arrowLeft__NqI-Hq";
    var s_backLeft = "backLeft__NqI-Hq";
    var s_backRight = "backRight__NqI-Hq";
    var s_loading = "loading__NqI-Hq";
    var s_slider = "slider__NqI-Hq";
    var s_sliderIcon = "sliderIcon__NqI-Hq";
    var s_sliderWrap = "sliderWrap__NqI-Hq";
    var s_spin = "spin__NqI-Hq";
    var s_turnLeft = "turnLeft__NqI-Hq";
    var s_turnRight = "turnRight__NqI-Hq";
    var s_unlock = "unlock__NqI-Hq";
    var s_unlockText = "unlockText__NqI-Hq";
    exports["arrow"] = s_arrow;
    exports["arrow-animation"] = s_arrowAnimation;
    exports["arrowContainer"] = s_arrowContainer;
    exports["arrowLeft"] = s_arrowLeft;
    exports["backLeft"] = s_backLeft;
    exports["backRight"] = s_backRight;
    exports["loading"] = s_loading;
    exports["slider"] = s_slider;
    exports["sliderIcon"] = s_sliderIcon;
    exports["sliderWrap"] = s_sliderWrap;
    exports["spin"] = s_spin;
    exports["turnLeft"] = s_turnLeft;
    exports["turnRight"] = s_turnRight;
    exports["unlock"] = s_unlock;
    exports["unlockText"] = s_unlockText;
    module.exports = { "arrow": s_arrow, "arrow-animation": s_arrowAnimation, "arrowContainer": s_arrowContainer, "arrowLeft": s_arrowLeft, "backLeft": s_backLeft, "backRight": s_backRight, "loading": s_loading, "slider": s_slider, "sliderIcon": s_sliderIcon, "sliderWrap": s_sliderWrap, "spin": s_spin, "turnLeft": s_turnLeft, "turnRight": s_turnRight, "unlock": s_unlock, "unlockText": s_unlockText };
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/record/index.module.less
var require_index_module11 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/record/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/record/index.module.less
var require_index_module12 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/record/index.module.less"(exports, module) {
    require_index_module11();
    var s_mileage = "mileage__U4iPvq";
    var s_moreText = "moreText__U4iPvq";
    var s_noData = "noData__U4iPvq";
    var s_num = "num__U4iPvq";
    var s_record = "record__U4iPvq";
    var s_recordItem = "recordItem__U4iPvq";
    var s_recordItemBottom = "recordItemBottom__U4iPvq";
    var s_recordItemBottomLi = "recordItemBottomLi__U4iPvq";
    var s_recordItemTop = "recordItemTop__U4iPvq";
    var s_time = "time__U4iPvq";
    var s_title = "title__U4iPvq";
    exports["mileage"] = s_mileage;
    exports["moreText"] = s_moreText;
    exports["noData"] = s_noData;
    exports["num"] = s_num;
    exports["record"] = s_record;
    exports["recordItem"] = s_recordItem;
    exports["recordItemBottom"] = s_recordItemBottom;
    exports["recordItemBottomLi"] = s_recordItemBottomLi;
    exports["recordItemTop"] = s_recordItemTop;
    exports["time"] = s_time;
    exports["title"] = s_title;
    module.exports = { "mileage": s_mileage, "moreText": s_moreText, "noData": s_noData, "num": s_num, "record": s_record, "recordItem": s_recordItem, "recordItemBottom": s_recordItemBottom, "recordItemBottomLi": s_recordItemBottomLi, "recordItemTop": s_recordItemTop, "time": s_time, "title": s_title };
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/service-toast/index.module.less
var require_index_module13 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/service-toast/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/service-toast/index.module.less
var require_index_module14 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/components/service-toast/index.module.less"(exports, module) {
    require_index_module13();
    var s_toastBtnText = "toastBtnText__IV-Rqa";
    var s_toastLeft = "toastLeft__IV-Rqa";
    var s_toastText = "toastText__IV-Rqa";
    var s_toastView = "toastView__IV-Rqa";
    exports["toastBtnText"] = s_toastBtnText;
    exports["toastLeft"] = s_toastLeft;
    exports["toastText"] = s_toastText;
    exports["toastView"] = s_toastView;
    module.exports = { "toastBtnText": s_toastBtnText, "toastLeft": s_toastLeft, "toastText": s_toastText, "toastView": s_toastView };
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/home/index.module.less
var require_index_module15 = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/home/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/home/index.module.less
var require_index_module16 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/home/index.module.less"(exports, module) {
    require_index_module15();
    var s_carImg = "carImg__5K5zeG";
    var s_carInfoContent = "carInfoContent__5K5zeG";
    var s_carInfoLeft = "carInfoLeft__5K5zeG";
    var s_changeModeBtn = "changeModeBtn__5K5zeG";
    var s_container = "container__5K5zeG";
    var s_defaultCar = "defaultCar__5K5zeG";
    var s_go = "go__5K5zeG";
    var s_goText = "goText__5K5zeG";
    var s_goTextOnline = "goTextOnline__5K5zeG";
    var s_icon = "icon__5K5zeG";
    var s_numberView = "numberView__5K5zeG";
    var s_onlineGo = "onlineGo__5K5zeG";
    var s_operation = "operation__5K5zeG";
    var s_operationLi = "operationLi__5K5zeG";
    var s_signal = "signal__5K5zeG";
    var s_signalLeft = "signalLeft__5K5zeG";
    var s_signalRight = "signalRight__5K5zeG";
    var s_subTitle = "subTitle__5K5zeG";
    var s_text = "text__5K5zeG";
    var s_totalMillageUtil = "totalMillageUtil__5K5zeG";
    var s_unlock = "unlock__5K5zeG";
    var s_util = "util__5K5zeG";
    var s_zeroNum = "zeroNum__5K5zeG";
    exports["carImg"] = s_carImg;
    exports["carInfoContent"] = s_carInfoContent;
    exports["carInfoLeft"] = s_carInfoLeft;
    exports["changeModeBtn"] = s_changeModeBtn;
    exports["container"] = s_container;
    exports["defaultCar"] = s_defaultCar;
    exports["go"] = s_go;
    exports["goText"] = s_goText;
    exports["goTextOnline"] = s_goTextOnline;
    exports["icon"] = s_icon;
    exports["numberView"] = s_numberView;
    exports["onlineGo"] = s_onlineGo;
    exports["operation"] = s_operation;
    exports["operationLi"] = s_operationLi;
    exports["signal"] = s_signal;
    exports["signalLeft"] = s_signalLeft;
    exports["signalRight"] = s_signalRight;
    exports["subTitle"] = s_subTitle;
    exports["text"] = s_text;
    exports["totalMillageUtil"] = s_totalMillageUtil;
    exports["unlock"] = s_unlock;
    exports["util"] = s_util;
    exports["zeroNum"] = s_zeroNum;
    module.exports = { "carImg": s_carImg, "carInfoContent": s_carInfoContent, "carInfoLeft": s_carInfoLeft, "changeModeBtn": s_changeModeBtn, "container": s_container, "defaultCar": s_defaultCar, "go": s_go, "goText": s_goText, "goTextOnline": s_goTextOnline, "icon": s_icon, "numberView": s_numberView, "onlineGo": s_onlineGo, "operation": s_operation, "operationLi": s_operationLi, "signal": s_signal, "signalLeft": s_signalLeft, "signalRight": s_signalRight, "subTitle": s_subTitle, "text": s_text, "totalMillageUtil": s_totalMillageUtil, "unlock": s_unlock, "util": s_util, "zeroNum": s_zeroNum };
  }
});

// entry-file:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/home/index.entry.js
var import_react17 = __toESM(require_react());
init_ray();
init_main();

// src/pages/home/index.tsx
var import_react16 = __toESM(require_react());
init_ray();
var import_smart_ui = __toESM(require_dist());

// src/components/top-bar/index.tsx
var import_react = __toESM(require_react());
init_ray();
var import_lodash = __toESM(require_lodash());

// src/constant/svgConfig.ts
var selectCar = ({ color }) => {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="24" height="24" viewBox="0 0 24 24"><defs><clipPath id="master_svg0_60_7560"><rect x="0" y="0" width="24" height="24" rx="0"/></clipPath></defs><g clip-path="url(#master_svg0_60_7560)"><g><ellipse cx="11.520000457763672" cy="12.000000238418579" rx="8.640000343322754" ry="8.640000343322754" fill="'.concat(color, '" fill-opacity="0.10000000149011612"/><ellipse cx="11.520000457763672" cy="12.000000238418579" rx="8.640000343322754" ry="8.640000343322754" fill-opacity="0" stroke-opacity="1" stroke="').concat(color, '" fill="none" stroke-width="1.125"/></g><g transform="matrix(0,1,1,0,-0.48000001907348633,0.48000001907348633)"><g><path d="M12.529259809265136,11.080799828338623C12.528299809265135,11.095279828338622,12.527329809265137,11.109749828338623,12.527329809265137,11.124229828338624L12.528299809265135,15.548929828338622C12.528299809265135,15.970659828338624,12.876639809265136,16.313249828338623,13.306029809265137,16.313249828338623C13.735429809265137,16.313249828338623,14.083769809265137,15.971619828338623,14.083769809265137,15.548929828338622L14.083769809265137,15.324079828338622L14.085699809265137,15.324079828338622L14.085699809265137,10.935079828338623L15.839939809265136,10.935079828338623L15.837049809265137,10.932179828338622L15.839939809265136,10.932179828338622L12.529259809265136,7.679999828338623L12.529259809265136,11.080799828338623ZM8.955209809265137,8.677041828338623L8.955209809265137,13.067009828338623L7.199999809265137,13.067009828338623L10.505859809265136,16.31629982833862L10.510679809265136,16.320159828338625L10.510679809265136,12.983049828338622C10.516469809265136,12.946379828338623,10.520329809265137,12.909709828338624,10.520329809265137,12.872069828338624L10.520329809265137,8.447362828338623C10.520329809265137,8.025640828338624,10.171989809265137,7.683051588338623,9.742599809265137,7.683051588338623C9.312239809265137,7.683051588338623,8.963899809265136,8.025640828338624,8.963899809265136,8.447362828338623L8.963899809265136,8.677041828338623L8.955209809265137,8.677041828338623Z" fill-rule="evenodd" fill="').concat(color, '" fill-opacity="1"/></g></g></g></svg>');
};

// src/components/top-bar/index.tsx
var import_index_module = __toESM(require_index_module2());
var TopBar = () => {
  const statusBarHeight = useSelector(selectSystemInfoByKey("statusBarHeight"));
  const devInfo = useDevice((device) => device.devInfo);
  const ThemeInfo = ty.getThemeInfo();
  const changeDevice = (0, import_lodash.debounce)(() => {
    ty.outdoor.switchDevice({
      success: () => {
        console.log("\u5207\u6362\u8BBE\u5907\u6210\u529F");
      },
      fail: () => {
        console.log("\u5207\u6362\u8BBE\u5907\u5931\u8D25");
      }
    });
  }, 500);
  return /* @__PURE__ */ import_react.default.createElement(View_default, { className: import_index_module.default.topBarWrap }, /* @__PURE__ */ import_react.default.createElement(View_default, { className: import_index_module.default.statusBar, style: { height: "".concat(statusBarHeight, "px") } }), /* @__PURE__ */ import_react.default.createElement(View_default, { className: import_index_module.default.topBar, onClick: changeDevice }, /* @__PURE__ */ import_react.default.createElement(Text_default, null, devInfo.name || ""), /* @__PURE__ */ import_react.default.createElement(
    View_default,
    {
      style: __spreadProps(__spreadValues({}, toSvgCssBackground(selectCar({ color: ThemeInfo["--app-B1-N3"] }))), {
        width: "24px",
        height: "24px"
      })
    }
  )));
};

// src/components/battery/index.tsx
var import_react9 = __toESM(require_react());
init_ray();

// node_modules/@ray-js/svg/lib/Svg.js
init_objectSpread2();

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(e2, t3) {
  return t3 || (t3 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, {
    raw: {
      value: Object.freeze(t3)
    }
  }));
}

// node_modules/@ray-js/svg/lib/Svg.js
init_slicedToArray();
var import_es_array_concat = __toESM(require_es_array_concat());
var import_react4 = __toESM(require_react());
init_ray();

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n4, l3) {
  for (var u3 in l3)
    n4[u3] = l3[u3];
  return n4;
}
function a(n4) {
  var l3 = n4.parentNode;
  l3 && l3.removeChild(n4);
}
function h(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return v(l3, f3, t3, o3, null);
}
function v(n4, i3, t3, o3, r3) {
  var f3 = { type: n4, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function p(n4) {
  return n4.children;
}
function d(n4, l3) {
  this.props = n4, this.context = l3;
}
function _(n4, l3) {
  if (null == l3)
    return n4.__ ? _(n4.__, n4.__.__k.indexOf(n4) + 1) : null;
  for (var u3; l3 < n4.__k.length; l3++)
    if (null != (u3 = n4.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n4.type ? _(n4) : null;
}
function k(n4) {
  var l3, u3;
  if (null != (n4 = n4.__) && null != n4.__c) {
    for (n4.__e = n4.__c.base = null, l3 = 0; l3 < n4.__k.length; l3++)
      if (null != (u3 = n4.__k[l3]) && null != u3.__e) {
        n4.__e = n4.__c.base = u3.__e;
        break;
      }
    return k(n4);
  }
}
function b(n4) {
  (!n4.__d && (n4.__d = true) && t.push(n4) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n4; g.__r = t.length; )
    n4 = t.sort(function(n5, l3) {
      return n5.__v.__b - l3.__v.__b;
    }), t = [], n4.some(function(n5) {
      var l3, u3, i3, t3, o3, r3;
      n5.__d && (o3 = (t3 = (l3 = n5).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
    });
}
function w(n4, l3, u3, i3, t3, o3, r3, c3, s3, a3) {
  var h3, y, d3, k2, b2, g3, w2, x2 = i3 && i3.__k || e, C2 = x2.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (k2 = u3.__k[h3] = null == (k2 = l3[h3]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2)) {
      if (k2.__ = u3, k2.__b = u3.__b + 1, null === (d3 = x2[h3]) || d3 && k2.key == d3.key && k2.type === d3.type)
        x2[h3] = void 0;
      else
        for (y = 0; y < C2; y++) {
          if ((d3 = x2[y]) && k2.key == d3.key && k2.type === d3.type) {
            x2[y] = void 0;
            break;
          }
          d3 = null;
        }
      j(n4, k2, d3 = d3 || f, t3, o3, r3, c3, s3, a3), b2 = k2.__e, (y = k2.ref) && d3.ref != y && (w2 || (w2 = []), d3.ref && w2.push(d3.ref, null, k2), w2.push(y, k2.__c || b2, k2)), null != b2 ? (null == g3 && (g3 = b2), "function" == typeof k2.type && k2.__k === d3.__k ? k2.__d = s3 = m(k2, s3, n4) : s3 = A(n4, k2, d3, x2, b2, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n4 && (s3 = _(d3));
    }
  for (u3.__e = g3, h3 = C2; h3--; )
    null != x2[h3] && ("function" == typeof u3.type && null != x2[h3].__e && x2[h3].__e == u3.__d && (u3.__d = _(i3, h3 + 1)), N(x2[h3], x2[h3]));
  if (w2)
    for (h3 = 0; h3 < w2.length; h3++)
      M(w2[h3], w2[++h3], w2[++h3]);
}
function m(n4, l3, u3) {
  for (var i3, t3 = n4.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n4, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function A(n4, l3, u3, i3, t3, o3) {
  var r3, f3, e2;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o3 || null == t3.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n4)
        n4.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e2 = 0; (f3 = f3.nextSibling) && e2 < i3.length; e2 += 2)
          if (f3 == t3)
            break n;
        n4.insertBefore(t3, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n4, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || H(n4, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n4, o3, l3[o3], u3[o3], i3);
}
function $(n4, l3, u3) {
  "-" === l3[0] ? n4.setProperty(l3, u3) : n4[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n4, l3, u3, i3, t3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n4.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n4.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n4.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n4.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n4 ? l3.toLowerCase().slice(2) : l3.slice(2), n4.l || (n4.l = {}), n4.l[l3 + o3] = u3, u3 ? i3 || n4.addEventListener(l3, o3 ? T : I, o3) : n4.removeEventListener(l3, o3 ? T : I, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n4)
        try {
          n4[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n5) {
        }
      "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n4.setAttribute(l3, u3) : n4.removeAttribute(l3));
    }
}
function I(n4) {
  this.l[n4.type + false](l.event ? l.event(n4) : n4);
}
function T(n4) {
  this.l[n4.type + true](l.event ? l.event(n4) : n4);
}
function j(n4, u3, i3, t3, o3, r3, f3, e2, c3) {
  var a3, h3, v3, y, _3, k2, b2, g3, m4, x2, A2, C2, $2, H2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e2 = u3.__e = i3.__e, u3.__h = null, r3 = [e2]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof H2) {
        if (g3 = u3.props, m4 = (a3 = H2.contextType) && t3[a3.__c], x2 = a3 ? m4 ? m4.props.value : a3.__ : t3, i3.__c ? b2 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in H2 && H2.prototype.render ? u3.__c = h3 = new H2(g3, x2) : (u3.__c = h3 = new d(g3, x2), h3.constructor = H2, h3.render = O), m4 && m4.sub(h3), h3.props = g3, h3.state || (h3.state = {}), h3.context = x2, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), null == h3.__s && (h3.__s = h3.state), null != H2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, H2.getDerivedStateFromProps(g3, h3.__s))), y = h3.props, _3 = h3.state, v3)
          null == H2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (null == H2.getDerivedStateFromProps && g3 !== y && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g3, x2), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g3, h3.__s, x2) || u3.__v === i3.__v) {
            h3.props = g3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n5) {
              n5 && (n5.__ = u3);
            }), h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(g3, h3.__s, x2), null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y, _3, k2);
          });
        }
        if (h3.context = x2, h3.props = g3, h3.__v = u3, h3.__P = n4, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h3.state = h3.__s, h3.__d = false, A2 && A2(u3), a3 = h3.render(h3.props, h3.state, h3.context);
        else
          do {
            h3.__d = false, A2 && A2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++C2 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k2 = h3.getSnapshotBeforeUpdate(y, _3)), $2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n4, Array.isArray($2) ? $2 : [$2], u3, i3, t3, o3, r3, f3, e2, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n5) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e2, u3.__h = !!c3, r3[r3.indexOf(e2)] = null), l.__e(n5, u3, i3);
  }
}
function z(n4, u3) {
  l.__c && l.__c(u3, n4), n4.some(function(u4) {
    try {
      n4 = u4.__h, u4.__h = [], n4.some(function(n5) {
        n5.call(u4);
      });
    } catch (n5) {
      l.__e(n5, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o3, r3, e2, c3) {
  var s3, h3, v3, y = i3.props, p3 = u3.props, d3 = u3.type, k2 = 0;
  if ("svg" === d3 && (o3 = true), null != r3) {
    for (; k2 < r3.length; k2++)
      if ((s3 = r3[k2]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l3 = s3, r3[k2] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
  }
  if (null === d3)
    y === p3 || c3 && l3.data === p3 || (l3.data = p3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h3 = (y = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y = {}, k2 = 0; k2 < l3.attributes.length; k2++)
          y[l3.attributes[k2].name] = l3.attributes[k2].value;
      (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y, o3, c3), v3)
      u3.__k = [];
    else if (k2 = u3.props.children, w(l3, Array.isArray(k2) ? k2 : [k2], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e2, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k2 = r3.length; k2--; )
        null != r3[k2] && a(r3[k2]);
    c3 || ("value" in p3 && void 0 !== (k2 = p3.value) && (k2 !== l3.value || "progress" === d3 && !k2 || "option" === d3 && k2 !== y.value) && H(l3, "value", k2, y.value, false), "checked" in p3 && void 0 !== (k2 = p3.checked) && k2 !== l3.checked && H(l3, "checked", k2, y.checked, false));
  }
  return l3;
}
function M(n4, u3, i3) {
  try {
    "function" == typeof n4 ? n4(u3) : n4.current = u3;
  } catch (n5) {
    l.__e(n5, i3);
  }
}
function N(n4, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n4), (t3 = n4.ref) && (t3.current && t3.current !== n4.__e || M(t3, null, u3)), null != (t3 = n4.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n5) {
        l.__e(n5, u3);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n4.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, "function" != typeof n4.type);
  i3 || null == n4.__e || a(n4.__e), n4.__e = n4.__d = void 0;
}
function O(n4, l3, u3) {
  return this.constructor(n4, u3);
}
n = e.slice, l = { __e: function(n4, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n4)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n4, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n4 = l4;
      }
  throw n4;
} }, u = 0, i = function(n4) {
  return null != n4 && void 0 === n4.constructor;
}, d.prototype.setState = function(n4, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n4 && (n4 = n4(s({}, u3), this.props)), n4 && s(u3, n4), null != n4 && this.__v && (l3 && this.__h.push(l3), b(this));
}, d.prototype.forceUpdate = function(n4) {
  this.__v && (this.__e = true, n4 && this.__h.push(n4), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// node_modules/preact-render-to-string/dist/index.mjs
var r2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
var n2 = /[&<>"]/;
function o2(e2) {
  var t3 = String(e2);
  return n2.test(t3) ? t3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t3;
}
var a2 = function(e2, t3) {
  return String(e2).replace(/(\n+)/g, "$1" + (t3 || "	"));
};
var i2 = function(e2, t3, r3) {
  return String(e2).length > (t3 || 40) || !r3 && -1 !== String(e2).indexOf("\n") || -1 !== String(e2).indexOf("<");
};
var l2 = {};
function s2(e2) {
  var t3 = "";
  for (var n4 in e2) {
    var o3 = e2[n4];
    null != o3 && "" !== o3 && (t3 && (t3 += " "), t3 += "-" == n4[0] ? n4 : l2[n4] || (l2[n4] = n4.replace(/([A-Z])/g, "-$1").toLowerCase()), t3 += ": ", t3 += o3, "number" == typeof o3 && false === r2.test(n4) && (t3 += "px"), t3 += ";");
  }
  return t3 || void 0;
}
function f2(e2, t3) {
  for (var r3 in t3)
    e2[r3] = t3[r3];
  return e2;
}
function u2(e2, t3) {
  return Array.isArray(t3) ? t3.reduce(u2, e2) : null != t3 && false !== t3 && e2.push(t3), e2;
}
var c2 = { shallow: true };
var p2 = [];
var _2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
var d2 = /[\s\n\\/='"\0<>]/;
function v2() {
  this.__d = true;
}
m2.render = m2;
var g2 = function(e2, t3) {
  return m2(e2, t3, c2);
};
var h2 = [];
function m2(t3, r3, n4) {
  r3 = r3 || {}, n4 = n4 || {};
  var o3 = l.__s;
  l.__s = true;
  var a3 = x(t3, r3, n4);
  return l.__c && l.__c(t3, h2), h2.length = 0, l.__s = o3, a3;
}
function x(r3, n4, l3, c3, g3, h3) {
  if (null == r3 || "boolean" == typeof r3)
    return "";
  if ("object" != typeof r3)
    return o2(r3);
  var m4 = l3.pretty, y = m4 && "string" == typeof m4 ? m4 : "	";
  if (Array.isArray(r3)) {
    for (var b2 = "", S = 0; S < r3.length; S++)
      m4 && S > 0 && (b2 += "\n"), b2 += x(r3[S], n4, l3, c3, g3, h3);
    return b2;
  }
  var k2, w2 = r3.type, O2 = r3.props, C2 = false;
  if ("function" == typeof w2) {
    if (C2 = true, !l3.shallow || !c3 && false !== l3.renderRootComponent) {
      if (w2 === p) {
        var A2 = [];
        return u2(A2, r3.props.children), x(A2, n4, l3, false !== l3.shallowHighOrder, g3, h3);
      }
      var H2, j2 = r3.__c = { __v: r3, context: n4, props: r3.props, setState: v2, forceUpdate: v2, __d: true, __h: [] };
      l.__b && l.__b(r3);
      var F = l.__r;
      if (w2.prototype && "function" == typeof w2.prototype.render) {
        var M2 = w2.contextType, T2 = M2 && n4[M2.__c], $2 = null != M2 ? T2 ? T2.props.value : M2.__ : n4;
        (j2 = r3.__c = new w2(O2, $2)).__v = r3, j2._dirty = j2.__d = true, j2.props = O2, null == j2.state && (j2.state = {}), null == j2._nextState && null == j2.__s && (j2._nextState = j2.__s = j2.state), j2.context = $2, w2.getDerivedStateFromProps ? j2.state = f2(f2({}, j2.state), w2.getDerivedStateFromProps(j2.props, j2.state)) : j2.componentWillMount && (j2.componentWillMount(), j2.state = j2._nextState !== j2.state ? j2._nextState : j2.__s !== j2.state ? j2.__s : j2.state), F && F(r3), H2 = j2.render(j2.props, j2.state, j2.context);
      } else
        for (var L2 = w2.contextType, E = L2 && n4[L2.__c], D = null != L2 ? E ? E.props.value : L2.__ : n4, N2 = 0; j2.__d && N2++ < 25; )
          j2.__d = false, F && F(r3), H2 = w2.call(r3.__c, O2, D);
      return j2.getChildContext && (n4 = f2(f2({}, n4), j2.getChildContext())), l.diffed && l.diffed(r3), x(H2, n4, l3, false !== l3.shallowHighOrder, g3, h3);
    }
    w2 = (k2 = w2).displayName || k2 !== Function && k2.name || function(e2) {
      var t3 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t3) {
        for (var r4 = -1, n5 = p2.length; n5--; )
          if (p2[n5] === e2) {
            r4 = n5;
            break;
          }
        r4 < 0 && (r4 = p2.push(e2) - 1), t3 = "UnnamedComponent" + r4;
      }
      return t3;
    }(k2);
  }
  var P2, R, U = "<" + w2;
  if (O2) {
    var W = Object.keys(O2);
    l3 && true === l3.sortAttributes && W.sort();
    for (var q = 0; q < W.length; q++) {
      var z2 = W[q], I2 = O2[z2];
      if ("children" !== z2) {
        if (!d2.test(z2) && (l3 && l3.allAttributes || "key" !== z2 && "ref" !== z2 && "__self" !== z2 && "__source" !== z2)) {
          if ("defaultValue" === z2)
            z2 = "value";
          else if ("defaultChecked" === z2)
            z2 = "checked";
          else if ("defaultSelected" === z2)
            z2 = "selected";
          else if ("className" === z2) {
            if (void 0 !== O2.class)
              continue;
            z2 = "class";
          } else
            g3 && /^xlink:?./.test(z2) && (z2 = z2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === z2) {
            if (O2.for)
              continue;
            z2 = "for";
          }
          "style" === z2 && I2 && "object" == typeof I2 && (I2 = s2(I2)), "a" === z2[0] && "r" === z2[1] && "boolean" == typeof I2 && (I2 = String(I2));
          var V = l3.attributeHook && l3.attributeHook(z2, I2, n4, l3, C2);
          if (V || "" === V)
            U += V;
          else if ("dangerouslySetInnerHTML" === z2)
            R = I2 && I2.__html;
          else if ("textarea" === w2 && "value" === z2)
            P2 = I2;
          else if ((I2 || 0 === I2 || "" === I2) && "function" != typeof I2) {
            if (!(true !== I2 && "" !== I2 || (I2 = z2, l3 && l3.xml))) {
              U = U + " " + z2;
              continue;
            }
            if ("value" === z2) {
              if ("select" === w2) {
                h3 = I2;
                continue;
              }
              "option" === w2 && h3 == I2 && void 0 === O2.selected && (U += " selected");
            }
            U = U + " " + z2 + '="' + o2(I2) + '"';
          }
        }
      } else
        P2 = I2;
    }
  }
  if (m4) {
    var Z = U.replace(/\n\s*/, " ");
    Z === U || ~Z.indexOf("\n") ? m4 && ~U.indexOf("\n") && (U += "\n") : U = Z;
  }
  if (U += ">", d2.test(w2))
    throw new Error(w2 + " is not a valid HTML tag name in " + U);
  var B, G = _2.test(w2) || l3.voidElements && l3.voidElements.test(w2), J = [];
  if (R)
    m4 && i2(R) && (R = "\n" + y + a2(R, y)), U += R;
  else if (null != P2 && u2(B = [], P2).length) {
    for (var K = m4 && ~U.indexOf("\n"), Q = false, X = 0; X < B.length; X++) {
      var Y = B[X];
      if (null != Y && false !== Y) {
        var ee = x(Y, n4, l3, true, "svg" === w2 || "foreignObject" !== w2 && g3, h3);
        if (m4 && !K && i2(ee) && (K = true), ee)
          if (m4) {
            var te = ee.length > 0 && "<" != ee[0];
            Q && te ? J[J.length - 1] += ee : J.push(ee), Q = te;
          } else
            J.push(ee);
      }
    }
    if (m4 && K)
      for (var re = J.length; re--; )
        J[re] = "\n" + y + a2(J[re], y);
  }
  if (J.length || R)
    U += J.join("");
  else if (l3 && l3.xml)
    return U.substring(0, U.length - 1) + " />";
  return !G || B || R ? (m4 && ~U.indexOf("\n") && (U += "\n"), U = U + "</" + w2 + ">") : U = U.replace(/>$/, " />"), U;
}
m2.shallowRender = g2;

// node_modules/htm/dist/htm.module.js
var n3 = function(t3, s3, r3, e2) {
  var u3;
  s3[0] = 0;
  for (var h3 = 1; h3 < s3.length; h3++) {
    var p3 = s3[h3++], a3 = s3[h3] ? (s3[0] |= p3 ? 1 : 2, r3[s3[h3++]]) : s3[++h3];
    3 === p3 ? e2[0] = a3 : 4 === p3 ? e2[1] = Object.assign(e2[1] || {}, a3) : 5 === p3 ? (e2[1] = e2[1] || {})[s3[++h3]] = a3 : 6 === p3 ? e2[1][s3[++h3]] += a3 + "" : p3 ? (u3 = t3.apply(a3, n3(t3, a3, r3, ["", null])), e2.push(u3), a3[0] ? s3[0] |= 2 : (s3[h3 - 2] = 0, s3[h3] = u3)) : e2.push(a3);
  }
  return e2;
};
var t2 = /* @__PURE__ */ new Map();
function htm_module_default(s3) {
  var r3 = t2.get(this);
  return r3 || (r3 = /* @__PURE__ */ new Map(), t2.set(this, r3)), (r3 = n3(this, r3.get(s3) || (r3.set(s3, r3 = function(n4) {
    for (var t3, s4, r4 = 1, e2 = "", u3 = "", h3 = [0], p3 = function(n5) {
      1 === r4 && (n5 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n5, e2) : 3 === r4 && (n5 || e2) ? (h3.push(3, n5, e2), r4 = 2) : 2 === r4 && "..." === e2 && n5 ? h3.push(4, n5, 0) : 2 === r4 && e2 && !n5 ? h3.push(5, 0, true, e2) : r4 >= 5 && ((e2 || !n5 && 5 === r4) && (h3.push(r4, 0, e2, s4), r4 = 6), n5 && (h3.push(r4, n5, 0, s4), r4 = 6)), e2 = "";
    }, a3 = 0; a3 < n4.length; a3++) {
      a3 && (1 === r4 && p3(), p3(a3));
      for (var l3 = 0; l3 < n4[a3].length; l3++)
        t3 = n4[a3][l3], 1 === r4 ? "<" === t3 ? (p3(), h3 = [h3], r4 = 3) : e2 += t3 : 4 === r4 ? "--" === e2 && ">" === t3 ? (r4 = 1, e2 = "") : e2 = t3 + e2[0] : u3 ? t3 === u3 ? u3 = "" : e2 += t3 : '"' === t3 || "'" === t3 ? u3 = t3 : ">" === t3 ? (p3(), r4 = 1) : r4 && ("=" === t3 ? (r4 = 5, s4 = e2, e2 = "") : "/" === t3 && (r4 < 5 || ">" === n4[a3][l3 + 1]) ? (p3(), 3 === r4 && (h3 = h3[0]), r4 = h3, (h3 = h3[0]).push(2, 0, r4), r4 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (p3(), r4 = 2) : e2 += t3), 3 === r4 && "!--" === e2 && (r4 = 4, h3 = h3[0]);
    }
    return p3(), h3;
  }(s3)), r3), arguments, [])).length > 1 ? r3 : r3[0];
}

// node_modules/htm/preact/index.module.js
var m3 = htm_module_default.bind(h);

// node_modules/@ray-js/svg/lib/Svg.js
init_clsx_m();

// node_modules/ahooks/es/useDeepCompareEffect/index.js
var import_react3 = __toESM(require_react());

// node_modules/ahooks/es/createDeepCompareEffect/index.js
var import_react2 = __toESM(require_react());
var import_isEqual = __toESM(require_isEqual());
var depsEqual = function depsEqual2(aDeps, bDeps) {
  if (aDeps === void 0) {
    aDeps = [];
  }
  if (bDeps === void 0) {
    bDeps = [];
  }
  return (0, import_isEqual.default)(aDeps, bDeps);
};
var createDeepCompareEffect = function createDeepCompareEffect2(hook) {
  return function(effect, deps) {
    var ref = (0, import_react2.useRef)();
    var signalRef = (0, import_react2.useRef)(0);
    if (deps === void 0 || !depsEqual(deps, ref.current)) {
      ref.current = deps;
      signalRef.current += 1;
    }
    hook(effect, [signalRef.current]);
  };
};

// node_modules/ahooks/es/useDeepCompareEffect/index.js
var useDeepCompareEffect_default = createDeepCompareEffect(import_react3.useEffect);

// node_modules/@ray-js/svg/lib/props.js
var defaultProps = {
  width: "300px",
  height: "150px"
};

// node_modules/@ray-js/svg/lib/Svg.js
var import_index = __toESM(require_lib2());
var _templateObject;
var classPrefix = "ray-svg";
function Svg(props) {
  var _this = this;
  var className = props.className, style = props.style, children = props.children, width = props.width, height = props.height, viewBox = props.viewBox;
  var _useState = (0, import_react4.useState)(""), _useState2 = _slicedToArray(_useState, 2), backgroundImage = _useState2[0], setBackgroundImage = _useState2[1];
  useDeepCompareEffect_default(function() {
    var svg = function renderSvg() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return m2(m3.call.apply(m3, [_this].concat(args)));
    }(_templateObject || (_templateObject = _taggedTemplateLiteral(['<svg width="', '" height="', '" viewBox="', '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">', "</svg>"], ['<svg width="', '" height="', '" viewBox="', '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" version="1.1">', "</svg>"])), width, height, viewBox, children);
    var output = 'url("data:image/svg+xml,'.concat(encodeURIComponent(svg), '")');
    setBackgroundImage(output);
  }, [width, height, viewBox, children]);
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(View_default, {
    className: clsx_m_default(classPrefix, className),
    style: _objectSpread2({
      width,
      height
    }, style)
  }, /* @__PURE__ */ import_react4.default.createElement(View_default, {
    className: "".concat(classPrefix, "-image"),
    style: {
      backgroundImage
    }
  })));
}
Svg.defaultProps = defaultProps;
Svg.displayName = "Svg";
var Svg_default = Svg;

// node_modules/@ray-js/svg/lib/Icon.js
var import_es_array_map = __toESM(require_es_array_map());
var import_es_array_concat2 = __toESM(require_es_array_concat());
var import_react7 = __toESM(require_react());
init_clsx_m();
var import_index2 = __toESM(require_lib2());

// node_modules/@ray-js/svg/lib/hooks/useRpx2Px.js
var import_react6 = __toESM(require_react());

// node_modules/@ray-js/svg/lib/hooks/useSystemInfo.js
init_objectSpread2();
init_slicedToArray();
var import_react5 = __toESM(require_react());
init_ray();
var initSysInfo = getSystemInfoSync();
function useSystemInfo() {
  var _useState = (0, import_react5.useState)(initSysInfo), _useState2 = _slicedToArray(_useState, 2), sysInfo = _useState2[0], setSysInfo = _useState2[1];
  var handleThemeChange = (0, import_react5.useCallback)(function(data) {
    setSysInfo(function(curSysInfo) {
      var result = _objectSpread2(_objectSpread2({}, curSysInfo), data);
      return result;
    });
  }, []);
  var handleResize = (0, import_react5.useCallback)(function() {
    getSystemInfo({
      success: function success(data) {
        setSysInfo(function(curSysInfo) {
          var result = _objectSpread2(_objectSpread2({}, curSysInfo), data);
          return result;
        });
      }
    });
  }, []);
  useAppEvent("onThemeChange", handleThemeChange);
  usePageEvent("onResize", handleResize);
  return sysInfo;
}

// node_modules/@ray-js/svg/lib/utils.js
var import_es_string_ends_with = __toESM(require_es_string_ends_with());
var import_es_number_constructor = __toESM(require_es_number_constructor());
var import_es_regexp_exec = __toESM(require_es_regexp_exec());
var import_es_string_replace = __toESM(require_es_string_replace());
init_ray();
init_esm2();
var rpx2px = function(maybeRpx, sysInfo) {
  if (maybeRpx.endsWith("rpx")) {
    var value = Number(maybeRpx.replace(/rpx/g, ""));
    if (isMiniProgram) {
      var systemInfo = sysInfo || getSystemInfoSync();
      return "".concat(value / 750 * systemInfo.windowWidth, "px");
    }
    if (isWeb) {
      return value / 2 + "px";
    }
  }
  return maybeRpx;
};

// node_modules/@ray-js/svg/lib/hooks/useRpx2Px.js
function useRpx2Px() {
  var sysInfo = useSystemInfo();
  var fn = import_react6.default.useCallback(function(maybeRpx) {
    return rpx2px(maybeRpx, sysInfo);
  }, [sysInfo]);
  return fn;
}

// node_modules/@ray-js/svg/lib/Icon.js
var classPrefix2 = "ray-icon";
var Icon = function(props) {
  var style = props.style, className = props.className, d3 = props.d, size = props.size, color = props.color;
  var rpx2px2 = useRpx2Px();
  return /* @__PURE__ */ import_react7.default.createElement(Svg_default, {
    className: clsx_m_default(classPrefix2, className),
    style,
    viewBox: "0 0 1024 1024",
    width: rpx2px2(size),
    height: rpx2px2(size)
  }, Array.isArray(d3) ? d3.map(function(item, index) {
    return /* @__PURE__ */ import_react7.default.createElement("path", {
      key: "".concat(item, "_").concat(index),
      d: item,
      fill: Array.isArray(color) ? color[index] : color,
      "fill-rule": "evenodd"
    });
  }) : /* @__PURE__ */ import_react7.default.createElement("path", {
    d: d3,
    fill: Array.isArray(color) ? color[0] : color,
    "fill-rule": "evenodd"
  }));
};
Icon.displayName = "Icon";
Icon.defaultProps = {
  size: "23px"
};

// node_modules/@ray-js/svg/lib/index.js
var lib_default3 = Svg_default;

// src/components/dynamic-number/index.tsx
var import_react8 = __toESM(require_react());
init_ray();
init_clsx_m();
var import_index_module2 = __toESM(require_index_module4());
var DynamicNumber = ({ counts, time = 1e3, point = 0, className = import_index_module2.default.number }) => {
  const targetNumber = counts;
  const pointNumber = 10 ** point;
  const [count, setCount] = (0, import_react8.useState)(0);
  const [updateNum, setUpdate] = (0, import_react8.useState)(0);
  usePageEvent("onShow", () => {
    setUpdate(updateNum + 1);
  });
  (0, import_react8.useEffect)(() => {
    const startTime = Date.now();
    const duration = time;
    const timer = setInterval(() => {
      setCount(() => {
        let after = Math.ceil((Date.now() - startTime) / duration * targetNumber * pointNumber) / pointNumber;
        if (after > targetNumber) {
          clearInterval(timer);
          after = targetNumber;
        }
        return after;
      });
    }, 16);
    return () => clearInterval(timer);
  }, [counts, updateNum]);
  const cls = clsx_m_default("icon-number", "".concat(className));
  return /* @__PURE__ */ import_react8.default.createElement(Text_default, { className: cls }, count.toFixed(point));
};

// src/components/battery/index.tsx
var import_index_module3 = __toESM(require_index_module6());
var { batteryPercentage } = dpCodes_default;
var Battery = () => {
  const dpState = useProps();
  const devInfo = useDevice((device) => device.devInfo);
  const theme = useSelector(selectThemeType);
  const r3 = 18;
  const circumference = 2 * Math.PI * r3;
  const progress = dpState[batteryPercentage] || 0;
  const strokeColor = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0,0,0,0.1)";
  const visibleLength = progress / 100 * circumference;
  const { color, icon } = getBatInfo(progress, theme);
  const toBatteryPage = () => {
    lib_default2.jumpSubPage.toBattery({
      deviceId: devInfo.devId
    });
  };
  const batView = (0, import_react9.useCallback)(() => {
    return /* @__PURE__ */ import_react9.default.createElement(View_default, null, /* @__PURE__ */ import_react9.default.createElement(DynamicNumber, { counts: progress, point: 0, className: import_index_module3.default.batNum }), /* @__PURE__ */ import_react9.default.createElement(Text_default, { className: import_index_module3.default.util }, "%"));
  }, [progress]);
  return /* @__PURE__ */ import_react9.default.createElement(View_default, { className: import_index_module3.default.battery, onClick: toBatteryPage }, /* @__PURE__ */ import_react9.default.createElement(View_default, { className: import_index_module3.default.batLeft }, /* @__PURE__ */ import_react9.default.createElement(lib_default3, { width: "96px", height: "96px", className: import_index_module3.default.svg }, /* @__PURE__ */ import_react9.default.createElement(
    "circle",
    {
      cx: "48",
      cy: "48",
      r: r3,
      stroke: strokeColor,
      strokeWidth: "6",
      fill: "none",
      strokeDasharray: circumference,
      strokeLinecap: "round"
    }
  ), /* @__PURE__ */ import_react9.default.createElement(
    "circle",
    {
      cx: "48",
      cy: "48",
      r: r3,
      stroke: color,
      strokeWidth: "6",
      fill: "none",
      style: "stroke-dasharray: ".concat(visibleLength, ", ").concat(circumference * 2),
      strokeLinecap: "round",
      transform: "rotate(-90, 48, 48) scaleX(1) scaleY(1)"
    }
  )), /* @__PURE__ */ import_react9.default.createElement(Image_default, { src: icon, className: import_index_module3.default.batIcon })), batView(), /* @__PURE__ */ import_react9.default.createElement(Image_default, { src: theme === "dark" ? res_default.batWarn : res_default.batWarnLight, className: import_index_module3.default.batWarn }));
};

// src/components/signal-view/index.tsx
var import_react10 = __toESM(require_react());
init_ray();
var import_index_module4 = __toESM(require_index_module8());
var { signalStrength4g, signalStrengthGps } = dpCodes_default;
var SignalView = import_react10.default.memo(({ isBleOnline }) => {
  var _a, _b, _c, _d;
  const capability = useDevice((device) => device.devInfo.capability);
  const theme = useSelector(selectThemeType);
  const isSupportBle = [1024, 1048576, 1049600].indexOf(capability) !== -1;
  const dpState = useProps();
  const dpSchema = useDevice((device) => device.dpSchema);
  const signalData = [
    {
      name: "wifi",
      icon: getWifiIcon(dpState[signalStrength4g], theme),
      isShow: isDpExist(signalStrength4g, dpSchema)
    },
    {
      name: "gps",
      icon: getGpsIcon(
        dpState[signalStrengthGps],
        theme,
        (_b = (_a = dpSchema[signalStrengthGps]) == null ? void 0 : _a.property) == null ? void 0 : _b.max,
        (_d = (_c = dpSchema[signalStrengthGps]) == null ? void 0 : _c.property) == null ? void 0 : _d.min
      ),
      isShow: isDpExist(signalStrengthGps, dpSchema)
    }
  ].filter((i3) => i3.isShow);
  return /* @__PURE__ */ import_react10.default.createElement(View_default, { className: import_index_module4.default.signal }, signalData.map((i3) => /* @__PURE__ */ import_react10.default.createElement(Image_default, { key: i3.name, src: i3.icon, className: import_index_module4.default.signalIcon })), isSupportBle && /* @__PURE__ */ import_react10.default.createElement(View_default, { className: import_index_module4.default.bluetoothView }, /* @__PURE__ */ import_react10.default.createElement(
    Image_default,
    {
      src: isBleOnline ? res_default.bluetooth : res_default.bluetoothDisconnect,
      className: import_index_module4.default.bluetoothIcon
    }
  ), /* @__PURE__ */ import_react10.default.createElement(Text_default, { className: "".concat(import_index_module4.default.connectText, " ").concat(isBleOnline && import_index_module4.default.connectTextActive) }, isBleOnline ? i18n_default.getLang("hasConnected") : i18n_default.getLang("unConnected"))));
});

// src/components/unlock-slider/index.tsx
var import_react12 = __toESM(require_react());
init_ray();

// src/components/sjs-slider/index.tsx
var import_to_style = __toESM(require_to_style());
var import_react11 = __toESM(require_react());

// src/components/sjs-slider/slider/index.js
init_esm();
var slider_default = createNativeComponent("slider-index-c700dc");

// src/components/sjs-slider/index.tsx
var toStyle = (obj) => {
  const result = {};
  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }
  return (0, import_to_style.string)(result);
};
var Slider = ({
  isVertical = false,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  maxTrackWidth = "100%",
  maxTrackHeight = "4px",
  maxTrackRadius = "4px",
  minTrackWidth = "28px",
  minTrackHeight = "4px",
  minTrackRadius = "inherit",
  thumbWidth = "28px",
  thumbHeight = "28px",
  thumbRadius = "28px",
  thumbBorderStyle = "0px solid #ffffff",
  thumbBoxShadowStyle = "0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12)",
  isShowTicks = false,
  tickWidth = "4px",
  tickHeight = "12px",
  tickRadius = "2px",
  thumbStyleRenderValueScale = 1,
  thumbStyleRenderFormatter = null,
  thumbStyleRenderValueStart = 0,
  thumbStyleRenderValueReverse = false,
  hideThumbButton = null,
  className = "",
  currentDpValue = false,
  value = 0,
  onChange = null,
  onBeforeChange = null,
  onAfterChange = null,
  maxTrackColor = "#d8d8d8",
  trackStyle = {},
  minTrackColor = "#158CFB",
  barStyle = {},
  thumbColor = "#ffffff",
  thumbStyle = {},
  enableTouch = true,
  thumbWrapStyle = {},
  maxTrackTickColor = "#158CFB",
  minTrackTickColor = "#ffffff"
}) => {
  const instanceId = (0, import_react11.useRef)(
    "Color_".concat(String(+/* @__PURE__ */ new Date()).slice(-4), "_").concat(String(Math.random()).slice(-2))
  );
  return /* @__PURE__ */ import_react11.default.createElement(
    slider_default,
    {
      currentDpValue,
      instanceId: instanceId.current,
      className,
      direction: isVertical ? "vertical" : "horizontal",
      end: value,
      min,
      reverse: isVertical,
      max,
      step,
      thumbStyleRenderValueScale,
      thumbStyleRenderFormatter,
      thumbStyleRenderValueStart,
      thumbStyleRenderValueReverse,
      hideThumbButton,
      disable: disabled,
      bindmove: (event) => {
        if (onChange) {
          onChange(event.detail.end, event.detail.from);
        }
      },
      bindstart: (event) => {
        if (onBeforeChange) {
          onBeforeChange(event.detail.end);
        }
      },
      bindend: (event) => {
        if (onAfterChange) {
          onAfterChange(event.detail.end, event.detail.from);
        }
      },
      trackStyle: toStyle(__spreadValues({
        width: maxTrackWidth,
        height: maxTrackHeight,
        borderRadius: maxTrackRadius,
        background: maxTrackColor
      }, trackStyle || {})),
      barStyle: toStyle(__spreadValues({
        width: minTrackWidth,
        height: minTrackHeight,
        borderRadius: minTrackRadius,
        background: minTrackColor
      }, barStyle || {})),
      thumbStyle: toStyle(__spreadValues({
        width: thumbWidth,
        height: thumbHeight,
        borderRadius: thumbRadius,
        background: thumbColor,
        borderStyle: thumbBorderStyle,
        boxShadow: thumbBoxShadowStyle
      }, thumbStyle || {})),
      enableTouch: enableTouch != null ? enableTouch : true,
      thumbWrapStyle,
      showSteps: isShowTicks,
      stepStyle: toStyle({
        width: tickWidth,
        height: tickHeight,
        borderRadius: tickRadius,
        background: maxTrackTickColor
      }),
      activeStepStyle: toStyle({
        width: tickWidth,
        height: tickHeight,
        borderRadius: tickRadius,
        background: minTrackTickColor
      })
    }
  );
};
var sjs_slider_default = Slider;

// src/components/unlock-slider/index.tsx
var import_index_module5 = __toESM(require_index_module10());
var { blelockSwitch } = dpCodes_default;
var openLoadingTimer;
var closeLoadingTimer;
var UnlockSlider = ({ isBleOnline, inService, isPidHadVAS, dpSchema }) => {
  const actions = useActions();
  const theme = useSelector(selectThemeType);
  const isOnline = useDevice((device) => device.devInfo.isOnline);
  const switchDpSchema = useDevice((device) => device.dpSchema[blelockSwitch]);
  const blelockSwitchDpVal = useProps((props) => props[blelockSwitch]);
  const [isLoading, setLoading] = (0, import_react12.useState)(false);
  const [value, setValue] = (0, import_react12.useState)(blelockSwitchDpVal ? 100 : 1);
  const [isMoving, setMoving] = (0, import_react12.useState)(false);
  const sliderMax = 90;
  const sliderMin = 10;
  (0, import_react12.useEffect)(() => {
    onDpDataChange((res) => {
      handDpChange(res);
    });
    return () => {
      offDpDataChange((res) => handDpChange(res));
    };
  }, []);
  const handDpChange = (res) => {
    const { dps } = res;
    if (Object.keys(dps) && Object.keys(dps).includes("1")) {
      clearTimeout(openLoadingTimer);
      clearTimeout(closeLoadingTimer);
      console.log("dpset, set\u503C :>> ", dps["1"] === true ? 100 : 1);
      dps["1"] === true ? setValue(100) : setValue(1);
      setLoading(false);
    }
  };
  const changeDp = (val) => {
    const { extContent } = switchDpSchema;
    const isExtNull = extContent === "" || extContent === void 0;
    const route = isExtNull ? 0 : JSON.parse(extContent).route;
    if (route > 0 && isBleOnline) {
      actions[blelockSwitch].set(val, { pipelines: [6, 5, 4, 3, 2, 1] });
    } else {
      actions[blelockSwitch].set(val);
    }
  };
  const openLock = () => {
    checkPermissions({
      dpCode: "blelock_switch",
      inService,
      isPidHadVAS,
      dpSchema,
      isBleOnline,
      successCb: () => {
        setLoading(true);
        changeDp(true);
        clearTimeout(openLoadingTimer);
        openLoadingTimer = setTimeout(() => {
          setValue(1);
          setLoading(false);
        }, 5e3);
      },
      cancelCb: () => {
        setValue(100);
        setTimeout(() => {
          setValue(1);
        }, 50);
      }
    });
  };
  const closeLock = () => {
    setLoading(true);
    changeDp(false);
    clearTimeout(closeLoadingTimer);
    closeLoadingTimer = setTimeout(() => {
      setValue(100);
      setLoading(false);
    }, 5e3);
  };
  const onChangeEnd = (val, from) => {
    if (value === val)
      return;
    if (val >= sliderMax && !blelockSwitchDpVal) {
      openLock();
    }
    if (val <= sliderMin && blelockSwitchDpVal) {
      closeLock();
    }
    if (!blelockSwitchDpVal && val < sliderMax) {
      setValue(val);
      setTimeout(() => {
        setValue(1);
      }, 50);
    }
    if (blelockSwitchDpVal && val > sliderMin) {
      setValue(val);
      setTimeout(() => {
        setValue(100);
      }, 50);
    }
  };
  const arrowRight = () => {
    return /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.arrowContainer, style: { right: 70 } }, /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.arrow }), /* @__PURE__ */ import_react12.default.createElement(
      View_default,
      {
        className: import_index_module5.default.arrow,
        style: { opacity: 0.3, marginLeft: 6, animationDelay: "200ms" }
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      View_default,
      {
        className: import_index_module5.default.arrow,
        style: { opacity: 0.1, marginLeft: 8, animationDelay: "400ms" }
      }
    ));
  };
  const arrowLeft = () => {
    return /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.arrowContainer, style: { left: 82 } }, /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.arrowLeft, style: { opacity: 0.1, animationDelay: "400ms" } }), /* @__PURE__ */ import_react12.default.createElement(
      View_default,
      {
        className: import_index_module5.default.arrowLeft,
        style: { opacity: 0.3, marginLeft: 6, animationDelay: "200ms" }
      }
    ), /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.arrowLeft, style: { opacity: 1, marginLeft: 8 } }));
  };
  const LoadingView = () => {
    return /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.loading });
  };
  return /* @__PURE__ */ import_react12.default.createElement(
    View_default,
    {
      className: import_index_module5.default.unlock,
      style: { backgroundColor: theme === "dark" ? "#202124" : "var(--app-M1)" }
    },
    isLoading && LoadingView(),
    !isLoading && /* @__PURE__ */ import_react12.default.createElement(View_default, { className: import_index_module5.default.sliderWrap }, blelockSwitchDpVal && arrowLeft(), /* @__PURE__ */ import_react12.default.createElement(Text_default, { className: import_index_module5.default.unlockText }, blelockSwitchDpVal ? i18n_default.getLang("closeLock") : i18n_default.getLang("openLock")), !blelockSwitchDpVal && arrowRight(), /* @__PURE__ */ import_react12.default.createElement(
      sjs_slider_default,
      {
        disabled: isLoading || !isOnline,
        currentDpValue: blelockSwitchDpVal,
        value,
        step: 1,
        min: 1,
        max: 100,
        enableTouch: false,
        trackStyle: {
          width: "".concat(464, "rpx"),
          height: "".concat(116, "rpx"),
          borderRadius: "".concat(28, "rpx"),
          background: "transparent"
        },
        barStyle: {
          background: "transparent",
          width: "".concat(464, "rpx")
        },
        thumbStyle: {
          width: "116rpx",
          height: "116rpx",
          borderRadius: "28rpx",
          background: "#fff"
        },
        thumbWrapStyle: {
          transition: isMoving ? "none" : "left 0.3s linear"
        },
        onBeforeChange: () => {
          setMoving(true);
        },
        onAfterChange: (val, from) => {
          onChangeEnd(val, from);
          setMoving(false);
        }
      }
    ))
  );
};

// src/components/record/index.tsx
var import_react13 = __toESM(require_react());
var import_dayjs = __toESM(require_dayjs_min());
init_ray();
var import_index_module6 = __toESM(require_index_module12());
var { mileageOnce } = dpCodes_default;
var Record = ({ deviceId, mileageUnit, dpSchema, isKm = false }) => {
  const [data, setData] = (0, import_react13.useState)();
  (0, import_react13.useEffect)(() => {
    getTrackSegmentList(deviceId).then((res) => {
      console.log("getTrackSegmentList", res);
      res && (res == null ? void 0 : res.segmentList) && (res == null ? void 0 : res.segmentList.length) > 0 && setData(res.segmentList[0]);
    }).catch((e2) => console.log(e2));
  }, []);
  return /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.record }, /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.title }, /* @__PURE__ */ import_react13.default.createElement(Text_default, null, i18n_default.getLang("records")), data && /* @__PURE__ */ import_react13.default.createElement(
    View_default,
    {
      className: import_index_module6.default.moreText,
      onClick: () => lib_default2.jumpSubPage.toCyclingRecord({ deviceId })
    },
    /* @__PURE__ */ import_react13.default.createElement(Text_default, null, i18n_default.getLang("moreText")),
    /* @__PURE__ */ import_react13.default.createElement(Icon_default, { type: "icon-right", color: "var(--app-B1-N4)", size: 18 })
  )), /* @__PURE__ */ import_react13.default.createElement(
    View_default,
    {
      className: import_index_module6.default.recordItem,
      onClick: () => data && lib_default2.jumpSubPage.toTrajectoryPlayback(__spreadProps(__spreadValues({}, data), {
        deviceId,
        unitType: mileageUnit
      }))
    },
    data ? /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.recordItemTop }, /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.mileage }, scaleMileageValue(mileageOnce, data == null ? void 0 : data.mileage, dpSchema, isKm), /* @__PURE__ */ import_react13.default.createElement(Text_default, null, mileageUnit)), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.time }, (0, import_dayjs.default)(data == null ? void 0 : data.startTime).format("YYYY/MM/DD"), " ", (0, import_dayjs.default)(data == null ? void 0 : data.startTime).format("HH:mm"), "-", (0, import_dayjs.default)(data == null ? void 0 : data.endTime).format("HH:mm"))), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.recordItemBottom }, /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.recordItemBottomLi }, /* @__PURE__ */ import_react13.default.createElement(Text_default, null, i18n_default.getLang("cyclingTime")), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.num }, getCyclingTime(((data == null ? void 0 : data.endTime) - (data == null ? void 0 : data.startTime)) / 1e3))), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.recordItemBottomLi }, /* @__PURE__ */ import_react13.default.createElement(Text_default, null, i18n_default.getLang("averageSpeed")), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.num }, scaleMileageValue(mileageOnce, data == null ? void 0 : data.speed, dpSchema, isKm), /* @__PURE__ */ import_react13.default.createElement(Text_default, null, i18n_default.getLang("speedUnit_".concat(mileageUnit))))), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.recordItemBottomLi }, /* @__PURE__ */ import_react13.default.createElement(Text_default, null, i18n_default.getLang("powerConsumption")), /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.num }, data == null ? void 0 : data.battery, /* @__PURE__ */ import_react13.default.createElement(Text_default, null, "%"))))) : /* @__PURE__ */ import_react13.default.createElement(View_default, { className: import_index_module6.default.noData }, /* @__PURE__ */ import_react13.default.createElement(View_default, null, i18n_default.getLang("noRecord")), /* @__PURE__ */ import_react13.default.createElement(View_default, null, i18n_default.getLang("startRide")))
  ));
};

// src/components/service-toast/index.tsx
var import_react14 = __toESM(require_react());
init_ray();
var import_index_module7 = __toESM(require_index_module14());
var ServiceToast = ({ devId, theme, statusBarHeight }) => {
  const { dispatch } = redux_default;
  const commonInfo = useSelector(commonCheckInfo);
  const { inService, isPidHadVAS, commodityUrl } = commonInfo;
  usePageEvent("onShow", () => {
    checkServiceAbility();
  });
  const checkServiceAbility = () => {
    getCServicesAbility(devId).then(async (res) => {
      const { inService: inService2, isPidHadVAS: isPidHadVAS2, commodityUrl: commodityUrl2, hadPopup } = res;
      dispatch(updateCommonInfo({ inService: inService2, isPidHadVAS: isPidHadVAS2, commodityUrl: commodityUrl2 || "" }));
      if (!hadPopup && isPidHadVAS2 && inService2) {
        if (commodityUrl2 && commodityUrl2 !== "") {
          ty.showModal({
            title: "",
            content: i18n_default.getLang("serviceActive"),
            confirmText: i18n_default.getLang("goCheck"),
            cancelText: i18n_default.getLang("confirm"),
            showCancel: true,
            cancelColor: theme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
            success: ({ confirm, cancel }) => {
              if (confirm) {
                ty.openInnerH5({ url: commodityUrl2 });
              }
            }
          });
        } else {
          ty.showModal({
            title: "",
            content: i18n_default.getLang("serviceActive"),
            showCancel: false,
            confirmText: i18n_default.getLang("confirm")
          });
        }
        await setCServicesPop(devId);
      }
    }).catch((e2) => console.log(e2));
  };
  return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, !inService && isPidHadVAS ? /* @__PURE__ */ import_react14.default.createElement(
    View_default,
    {
      className: import_index_module7.default.toastView,
      style: { background: "var(--app-B4)", top: "".concat(statusBarHeight + 39, "px") }
    },
    /* @__PURE__ */ import_react14.default.createElement(View_default, { className: import_index_module7.default.toastLeft }, /* @__PURE__ */ import_react14.default.createElement(Icon_default, { size: 22, type: "icon-warning", color: "#FF4444" }), /* @__PURE__ */ import_react14.default.createElement(Text_default, { className: import_index_module7.default.toastText, style: { color: "var(--app-B1-N1)" } }, commodityUrl && commodityUrl !== "" ? i18n_default.getLang("serviceExpire") : i18n_default.getLang("serviceExpireBrand"))),
    /* @__PURE__ */ import_react14.default.createElement(View_default, null, commodityUrl && commodityUrl !== "" && /* @__PURE__ */ import_react14.default.createElement(
      View_default,
      {
        className: import_index_module7.default.toastBtnText,
        onClick: () => ty.openInnerH5({ url: commodityUrl })
      },
      i18n_default.getLang("clickRenew")
    ))
  ) : null);
};

// src/hooks/useBleOnline.ts
var import_react15 = __toESM(require_react());
init_ray();
var useBleOnline = (devId) => {
  const [isBleOnline, setIsBleOnline] = (0, import_react15.useState)(false);
  const handleBluetoothAdapterStateChange = (0, import_react15.useCallback)(
    (data) => {
      if (!data.available) {
        setIsBleOnline(false);
      }
      if (!isBleOnline && data.available) {
        setIsBleOnline(true);
      }
    },
    [isBleOnline, setIsBleOnline]
  );
  const handleBleConnectStatusChange = (0, import_react15.useCallback)(
    (data) => {
      if (data.deviceId === devId) {
        setIsBleOnline(data.status === "CONNECTED");
      }
    },
    [devId]
  );
  (0, import_react15.useEffect)(() => {
    subscribeBLEConnectStatus({ deviceId: devId });
    getBLEOnlineState({
      deviceId: devId,
      success: (data) => {
        if (typeof data.isOnline !== "undefined") {
          setIsBleOnline(data.isOnline);
        }
      }
    });
    onBluetoothAdapterStateChange(handleBluetoothAdapterStateChange);
    onBLEConnectStatusChange(handleBleConnectStatusChange);
    return () => {
      unsubscribeBLEConnectStatus({ deviceId: devId });
      offBluetoothAdapterStateChange(handleBluetoothAdapterStateChange);
      offBLEConnectStatusChange(handleBleConnectStatusChange);
    };
  }, []);
  return { isBleOnline };
};
var useBleOnline_default = useBleOnline;

// src/pages/home/index.tsx
var import_index_module8 = __toESM(require_index_module16());
var { enduranceMileage, mileageTotal, level, unitSet, blelockSwitch: blelockSwitch2 } = dpCodes_default;
var HomePage = () => {
  const systemInfo = useSelector(selectSystemInfo);
  const { devInfo, dpSchema } = useDevice((state) => ({
    devInfo: state.devInfo,
    dpSchema: state.dpSchema
  }));
  const commonInfo = useSelector(commonCheckInfo);
  const { inService, isPidHadVAS } = commonInfo;
  const dpState = useProps();
  const { devId } = devInfo;
  const { theme, statusBarHeight } = systemInfo;
  const actions = useActions();
  const { isBleOnline = false } = useBleOnline_default(devId);
  const [showLevelSelect, setShowLevelSelect] = (0, import_react16.useState)(false);
  const levelEnumData = (0, import_react16.useMemo)(() => {
    var _a, _b;
    const range = ((_b = (_a = dpSchema[level]) == null ? void 0 : _a.property) == null ? void 0 : _b.range) || [];
    return range.map((i3) => {
      return {
        id: i3,
        name: i18n_default.getDpLang(i3),
        checked: dpState[level] === i3
      };
    });
  }, [dpState[level], dpSchema]);
  const totalMileageValue = (0, import_react16.useMemo)(
    () => isDpExist(mileageTotal, dpSchema) ? scaleMileageValue(
      mileageTotal,
      dpState[mileageTotal],
      dpSchema,
      dpState[unitSet] !== "km"
    ) : 0,
    [dpState[mileageTotal], dpState[unitSet], dpSchema]
  );
  const enduranceMileageValue = (0, import_react16.useMemo)(
    () => isDpExist(enduranceMileage, dpSchema) ? scaleMileageValue(
      enduranceMileage,
      dpState[enduranceMileage],
      dpSchema,
      dpState[unitSet] !== "km"
    ) : 0,
    [dpState[enduranceMileage], dpState[unitSet], dpSchema]
  );
  return /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.container }, /* @__PURE__ */ import_react16.default.createElement(TopBar, null), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.content }, /* @__PURE__ */ import_react16.default.createElement(ServiceToast, { devId, theme, statusBarHeight }), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.signal }, /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.signalLeft }, /* @__PURE__ */ import_react16.default.createElement(SignalView, { isBleOnline })), isDpExist(mileageTotal, dpSchema) && /* @__PURE__ */ import_react16.default.createElement(View_default, null, totalMileageValue, /* @__PURE__ */ import_react16.default.createElement(Text_default, null, dpState[unitSet] === "km" ? "Km" : "Mile"))), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.carInfoContent }, /* @__PURE__ */ import_react16.default.createElement(
    Image_default,
    {
      src: (devInfo == null ? void 0 : devInfo.iconUrl) || res_default.defaultCar,
      className: (devInfo == null ? void 0 : devInfo.iconUrl) ? import_index_module8.default.carImg : import_index_module8.default.defaultCar
    }
  ), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.carInfoLeft }, /* @__PURE__ */ import_react16.default.createElement(Battery, null), isDpExist(enduranceMileage, dpSchema) && /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.numberView }, /* @__PURE__ */ import_react16.default.createElement(Text_default, { className: import_index_module8.default.zeroNum }, enduranceMileageValue), /* @__PURE__ */ import_react16.default.createElement(Text_default, { className: import_index_module8.default.util }, dpState[unitSet] === "km" ? "Km" : "Mile")), /* @__PURE__ */ import_react16.default.createElement(Text_default, { className: import_index_module8.default.subTitle }, i18n_default.getLang("enduranceMileage"))), isDpExist(level, dpSchema) && /* @__PURE__ */ import_react16.default.createElement(
    Button_default,
    {
      type: "primary",
      className: import_index_module8.default.changeModeBtn,
      onClick: () => setShowLevelSelect(true)
    },
    /* @__PURE__ */ import_react16.default.createElement(Text_default, { className: import_index_module8.default.text }, i18n_default.getDpLang(dpState[level])),
    /* @__PURE__ */ import_react16.default.createElement(
      Image_default,
      {
        className: import_index_module8.default.icon,
        src: theme === "dark" ? res_default.modeChange : res_default.modeChangeLight
      }
    )
  ))), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.operation }, /* @__PURE__ */ import_react16.default.createElement(
    View_default,
    {
      className: import_index_module8.default.operationLi,
      onClick: () => lib_default2.jumpSubPage.toUniversalTargeting({ deviceId: devInfo == null ? void 0 : devInfo.devId })
    },
    /* @__PURE__ */ import_react16.default.createElement(Image_default, { src: theme === "dark" ? res_default.iconLocation : res_default.iconLocationLight }),
    /* @__PURE__ */ import_react16.default.createElement(Text_default, null, i18n_default.getLang("locationCar"))
  ), /* @__PURE__ */ import_react16.default.createElement(
    View_default,
    {
      className: import_index_module8.default.operationLi,
      onClick: () => lib_default2.jumpSubPage.toVehicleExamine({ deviceId: devId, isEnable: "" })
    },
    /* @__PURE__ */ import_react16.default.createElement(Image_default, { src: theme === "dark" ? res_default.iconTracks : res_default.iconTracksLight }),
    /* @__PURE__ */ import_react16.default.createElement(Text_default, null, i18n_default.getLang("vehicleExamine"))
  ), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.operationLi, onClick: () => lib_default.push("/more") }, /* @__PURE__ */ import_react16.default.createElement(Image_default, { src: theme === "dark" ? res_default.iconSet : res_default.iconSetLight }), /* @__PURE__ */ import_react16.default.createElement(Text_default, null, i18n_default.getLang("more")))), /* @__PURE__ */ import_react16.default.createElement(
    Record,
    {
      deviceId: devId,
      mileageUnit: dpState[unitSet],
      dpSchema,
      isKm: dpState[unitSet] !== "km"
    }
  ), /* @__PURE__ */ import_react16.default.createElement(View_default, { className: import_index_module8.default.unlock }, isDpExist(blelockSwitch2, dpSchema) && /* @__PURE__ */ import_react16.default.createElement(
    UnlockSlider,
    {
      isBleOnline,
      inService,
      isPidHadVAS,
      dpSchema
    }
  ), /* @__PURE__ */ import_react16.default.createElement(
    View_default,
    {
      className: "".concat(import_index_module8.default.go, " ").concat((devInfo == null ? void 0 : devInfo.isOnline) && import_index_module8.default.onlineGo),
      onClick: () => {
        ty.router({
          url: "tuyaSmart://tsod_cycling_navigation?devId=".concat(devInfo == null ? void 0 : devInfo.devId)
        });
      },
      style: {
        backgroundColor: theme === "dark" ? "#202124" : "#fff",
        width: isDpExist(blelockSwitch2, dpSchema) ? "95px" : "100%"
      }
    },
    /* @__PURE__ */ import_react16.default.createElement(Text_default, { className: "".concat(import_index_module8.default.goText, " ").concat((devInfo == null ? void 0 : devInfo.isOnline) && import_index_module8.default.goTextOnline) }, "GO")
  ))), /* @__PURE__ */ import_react16.default.createElement(
    import_smart_ui.ActionSheet,
    {
      show: showLevelSelect,
      actions: levelEnumData,
      onClose: () => setShowLevelSelect(false),
      onSelect: (d3) => checkPermissions({
        dpCode: level,
        dpSchema,
        inService,
        isPidHadVAS,
        isBleOnline,
        successCb: () => actions[level].set(d3.detail.id)
      }),
      cancelText: i18n_default.getLang("cancel")
    }
  ));
};
var home_default = HomePage;

// entry-file:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/home/index.entry.js
var isClassType = (c3) => c3.prototype && typeof c3.prototype.render === "function";
var EntryWrapper = import_react17.default.forwardRef((props, ref) => {
  const $instance = new PageInstance();
  usePageEvent("onLoad", () => {
    lifecycle.addInstance($instance);
    lifecycle.emit({ name: "onLoad", uniqueId: $instance.uniqueId });
  });
  usePageEvent("onUnload", () => {
    lifecycle.emit({ name: "onUnload", uniqueId: $instance.uniqueId });
    lifecycle.removeInstance($instance);
  });
  usePageEvent("onShow", () => {
    lifecycle.emit({ name: "onShow", uniqueId: $instance.uniqueId });
  });
  return import_react17.default.createElement(
    PageInstanceContext.Provider,
    { value: { $instance } },
    isClassType(home_default) ? import_react17.default.createElement(home_default, __spreadValues({ ref }, props)) : import_react17.default.createElement(home_default, props)
  );
});
Page(createPageConfig(EntryWrapper, "pages/home/index"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvY29tcG9uZW50cy90b3AtYmFyL2luZGV4Lm1vZHVsZS5sZXNzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvY29tcG9uZW50cy90b3AtYmFyL2luZGV4Lm1vZHVsZS5sZXNzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsICJjc3MtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AcmF5LWpzL3N2Zy9saWIvaW5kZXgubGVzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0ByYXktanMvc3ZnL2xpYi9pbmRleC5sZXNzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuZW5kcy13aXRoLmpzIiwgImNzcy1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL2NvbXBvbmVudHMvZHluYW1pYy1udW1iZXIvaW5kZXgubW9kdWxlLmxlc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL2R5bmFtaWMtbnVtYmVyL2luZGV4Lm1vZHVsZS5sZXNzIiwgImNzcy1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL2NvbXBvbmVudHMvYmF0dGVyeS9pbmRleC5tb2R1bGUubGVzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL2NvbXBvbmVudHMvYmF0dGVyeS9pbmRleC5tb2R1bGUubGVzcyIsICJjc3MtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL3NpZ25hbC12aWV3L2luZGV4Lm1vZHVsZS5sZXNzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvY29tcG9uZW50cy9zaWduYWwtdmlldy9pbmRleC5tb2R1bGUubGVzcyIsICJjc3MtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL3VubG9jay1zbGlkZXIvaW5kZXgubW9kdWxlLmxlc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL3VubG9jay1zbGlkZXIvaW5kZXgubW9kdWxlLmxlc3MiLCAiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvY29tcG9uZW50cy9yZWNvcmQvaW5kZXgubW9kdWxlLmxlc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL3JlY29yZC9pbmRleC5tb2R1bGUubGVzcyIsICJjc3MtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL3NlcnZpY2UtdG9hc3QvaW5kZXgubW9kdWxlLmxlc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9jb21wb25lbnRzL3NlcnZpY2UtdG9hc3QvaW5kZXgubW9kdWxlLmxlc3MiLCAiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvcGFnZXMvaG9tZS9pbmRleC5tb2R1bGUubGVzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL3BhZ2VzL2hvbWUvaW5kZXgubW9kdWxlLmxlc3MiLCAiZW50cnktZmlsZTovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvcGFnZXMvaG9tZS9pbmRleC5lbnRyeS5qcyIsICIuLi8uLi8uLi8uLi9zcmMvcGFnZXMvaG9tZS9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdG9wLWJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vc3JjL2NvbnN0YW50L3N2Z0NvbmZpZy50cyIsICIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9iYXR0ZXJ5L2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9zdmcvbGliL1N2Zy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy91dGlsLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL29wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29tcG9uZW50LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1jb250ZXh0LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jbG9uZS1lbGVtZW50LmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2F0Y2gtZXJyb3IuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1yZW5kZXItdG8tc3RyaW5nL3NyYy91dGlsLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcmVuZGVyLXRvLXN0cmluZy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bS9kaXN0L2h0bS5tb2R1bGUuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bS9wcmVhY3QvaW5kZXgubW9kdWxlLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlRGVlcENvbXBhcmVFZmZlY3QvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy9jcmVhdGVEZWVwQ29tcGFyZUVmZmVjdC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9zdmcvbGliL3Byb3BzLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmF5LWpzL3N2Zy9saWIvSWNvbi5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9zdmcvbGliL2hvb2tzL3VzZVJweDJQeC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9zdmcvbGliL2hvb2tzL3VzZVN5c3RlbUluZm8uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYXktanMvc3ZnL2xpYi91dGlscy5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9zdmcvbGliL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2R5bmFtaWMtbnVtYmVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zaWduYWwtdmlldy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdW5sb2NrLXNsaWRlci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2pzLXNsaWRlci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc2pzLXNsaWRlci9zbGlkZXIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcmVjb3JkL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlLXRvYXN0L2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9zcmMvaG9va3MvdXNlQmxlT25saW5lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIudG9wQmFyV3JhcF9fRXRiR01xIHtcbiAgY29sb3I6IHZhcigtLWluZGV4LXRpdGxlLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kZXgtdGl0bGUtYmcpO1xufVxuXG4udG9wQmFyV3JhcF9fRXRiR01xIC50b3BCYXJfX0V0YkdNcSB7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLWxlZnQ6IDMycnB4O1xuICBmb250LXNpemU6IDM0cnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9wQmFyV3JhcF9fRXRiR01xIC50b3BCYXJfX0V0YkdNcSB0ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiA0NjBycHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9wQmFyV3JhcF9fRXRiR01xIC5zdGF0dXNCYXJfX0V0YkdNcSB7XG4gIGhlaWdodDogMjBweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPMEZCUVVFN096czdPenM3T3pzN1FVRkJRVHM3T3pzN096dEJRVUZCSWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDNOeVl5OWpiMjF3YjI1bGJuUnpMM1J2Y0MxaVlYSXZhVzVrWlhndWJXOWtkV3hsTG14bGMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTG5SdmNFSmhjbGR5WVhBZ2UxeHVJQ0JqYjJ4dmNqb2dkbUZ5S0MwdGFXNWtaWGd0ZEdsMGJHVXRZMjlzYjNJcE8xeHVJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUIyWVhJb0xTMXBibVJsZUMxMGFYUnNaUzFpWnlrN1hHNWNiaUFnTG5SdmNFSmhjaUI3WEc0Z0lDQWdhR1ZwWjJoME9pQTBOSEI0TzF4dUlDQWdJR1JwYzNCc1lYazZJR1pzWlhnN1hHNGdJQ0FnYldGeVoybHVMV3hsWm5RNklETXljbkI0TzF4dUlDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF6TkhKd2VEdGNiaUFnSUNCbWIyNTBMWGRsYVdkb2REb2dZbTlzWkR0Y2JpQWdJQ0IzYVdSMGFEb2dNVEF3ZG5jN1hHNGdJQ0FnZEdWNGRDQjdYRzRnSUNBZ0lDQjNhR2wwWlMxemNHRmpaVG9nYm05M2NtRndPMXh1SUNBZ0lDQWdiV0Y0TFhkcFpIUm9PaUEwTmpCeWNIZzdYRzRnSUNBZ0lDQnZkbVZ5Wm14dmR6b2dhR2xrWkdWdU8xeHVJQ0FnSUNBZ2RHVjRkQzF2ZG1WeVpteHZkem9nWld4c2FYQnphWE03WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTG5OMFlYUjFjMEpoY2lCN1hHNGdJQ0FnYUdWcFoyaDBPaUF5TUhCNE8xeHVJQ0I5WEc1OVhHNGlYU3dpYm1GdFpYTWlPbHRkZlE9PSAqLyIsICJyZXF1aXJlKCcuL2luZGV4Lm1vZHVsZS5sZXNzJyk7XG52YXIgc19zdGF0dXNCYXIgPSBcInN0YXR1c0Jhcl9fRXRiR01xXCI7XG52YXIgc190b3BCYXIgPSBcInRvcEJhcl9fRXRiR01xXCI7XG52YXIgc190b3BCYXJXcmFwID0gXCJ0b3BCYXJXcmFwX19FdGJHTXFcIjtcbjtcbmV4cG9ydHNbJ3N0YXR1c0JhciddID0gc19zdGF0dXNCYXI7XG5leHBvcnRzWyd0b3BCYXInXSA9IHNfdG9wQmFyO1xuZXhwb3J0c1sndG9wQmFyV3JhcCddID0gc190b3BCYXJXcmFwOztcbm1vZHVsZS5leHBvcnRzID0geydzdGF0dXNCYXInOnNfc3RhdHVzQmFyLCd0b3BCYXInOnNfdG9wQmFyLCd0b3BCYXJXcmFwJzpzX3RvcEJhcldyYXB9O1xuIiwgIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGM9XCJtb250aFwiLGY9XCJxdWFydGVyXCIsaD1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixjKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGMpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpjLHk6aCx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6Zn1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPVwiJGlzRGF5anNPYmplY3RcIixTPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX3x8ISghdHx8IXRbcF0pfSx3PWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiBnO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJihnPWkpLGl8fCFyJiZnfSxPPWZ1bmN0aW9uKHQsZSl7aWYoUyh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LGI9djtiLmw9dyxiLmk9UyxiLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9dyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpLHRoaXMuJHg9dGhpcy4keHx8dC54fHx7fSx0aGlzW3BdPSEwfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoYi51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKCQpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBifSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PWwpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPU8odCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8Tyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIGIudSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhYi51KGUpfHxlLGY9Yi5wKHQpLGw9ZnVuY3Rpb24odCxlKXt2YXIgaT1iLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBiLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELHY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChmKXtjYXNlIGg6cmV0dXJuIHI/bCgxLDApOmwoMzEsMTEpO2Nhc2UgYzpyZXR1cm4gcj9sKDEsTSk6bCgwLE0rMSk7Y2FzZSBvOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxEPSh5PGc/eSs3OnkpLWc7cmV0dXJuIGwocj9tLUQ6bSsoNi1EKSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiAkKHYrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gJCh2K1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gJCh2K1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gJCh2K1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPWIucCh0KSxmPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxsPShuPXt9LG5bYV09ZitcIkRhdGVcIixuW2RdPWYrXCJEYXRlXCIsbltjXT1mK1wiTW9udGhcIixuW2hdPWYrXCJGdWxsWWVhclwiLG5bdV09ZitcIkhvdXJzXCIsbltzXT1mK1wiTWludXRlc1wiLG5baV09ZitcIlNlY29uZHNcIixuW3JdPWYrXCJNaWxsaXNlY29uZHNcIixuKVtvXSwkPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Y3x8bz09PWgpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkW2xdKCQpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgbCYmdGhpcy4kZFtsXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbYi5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGYpe3ZhciBkLGw9dGhpcztyPU51bWJlcihyKTt2YXIgJD1iLnAoZikseT1mdW5jdGlvbih0KXt2YXIgZT1PKGwpO3JldHVybiBiLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksbCl9O2lmKCQ9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJE0rcik7aWYoJD09PWgpcmV0dXJuIHRoaXMuc2V0KGgsdGhpcy4keStyKTtpZigkPT09YSlyZXR1cm4geSgxKTtpZigkPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVskXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gYi53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8bDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1iLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGM9bi5tb250aHMsZj1uLm1lcmlkaWVtLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIGIucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1mfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fGZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlXCJZWVwiOnJldHVybiBTdHJpbmcoZS4keSkuc2xpY2UoLTIpO2Nhc2VcIllZWVlcIjpyZXR1cm4gYi5zKGUuJHksNCxcIjBcIik7Y2FzZVwiTVwiOnJldHVybiBhKzE7Y2FzZVwiTU1cIjpyZXR1cm4gYi5zKGErMSwyLFwiMFwiKTtjYXNlXCJNTU1cIjpyZXR1cm4gaChuLm1vbnRoc1Nob3J0LGEsYywzKTtjYXNlXCJNTU1NXCI6cmV0dXJuIGgoYyxhKTtjYXNlXCJEXCI6cmV0dXJuIGUuJEQ7Y2FzZVwiRERcIjpyZXR1cm4gYi5zKGUuJEQsMixcIjBcIik7Y2FzZVwiZFwiOnJldHVybiBTdHJpbmcoZS4kVyk7Y2FzZVwiZGRcIjpyZXR1cm4gaChuLndlZWtkYXlzTWluLGUuJFcsbywyKTtjYXNlXCJkZGRcIjpyZXR1cm4gaChuLndlZWtkYXlzU2hvcnQsZS4kVyxvLDMpO2Nhc2VcImRkZGRcIjpyZXR1cm4gb1tlLiRXXTtjYXNlXCJIXCI6cmV0dXJuIFN0cmluZyhzKTtjYXNlXCJISFwiOnJldHVybiBiLnMocywyLFwiMFwiKTtjYXNlXCJoXCI6cmV0dXJuIGQoMSk7Y2FzZVwiaGhcIjpyZXR1cm4gZCgyKTtjYXNlXCJhXCI6cmV0dXJuICQocyx1LCEwKTtjYXNlXCJBXCI6cmV0dXJuICQocyx1LCExKTtjYXNlXCJtXCI6cmV0dXJuIFN0cmluZyh1KTtjYXNlXCJtbVwiOnJldHVybiBiLnModSwyLFwiMFwiKTtjYXNlXCJzXCI6cmV0dXJuIFN0cmluZyhlLiRzKTtjYXNlXCJzc1wiOnJldHVybiBiLnMoZS4kcywyLFwiMFwiKTtjYXNlXCJTU1NcIjpyZXR1cm4gYi5zKGUuJG1zLDMsXCIwXCIpO2Nhc2VcIlpcIjpyZXR1cm4gaX1yZXR1cm4gbnVsbH0odCl8fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCxsKXt2YXIgJCx5PXRoaXMsTT1iLnAoZCksbT1PKHIpLHY9KG0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtbSxEPWZ1bmN0aW9uKCl7cmV0dXJuIGIubSh5LG0pfTtzd2l0Y2goTSl7Y2FzZSBoOiQ9RCgpLzEyO2JyZWFrO2Nhc2UgYzokPUQoKTticmVhaztjYXNlIGY6JD1EKCkvMzticmVhaztjYXNlIG86JD0oZy12KS82MDQ4ZTU7YnJlYWs7Y2FzZSBhOiQ9KGctdikvODY0ZTU7YnJlYWs7Y2FzZSB1OiQ9Zy9uO2JyZWFrO2Nhc2UgczokPWcvZTticmVhaztjYXNlIGk6JD1nL3Q7YnJlYWs7ZGVmYXVsdDokPWd9cmV0dXJuIGw/JDpiLmEoJCl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihjKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9dyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIGIudyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksaz1fLnByb3RvdHlwZTtyZXR1cm4gTy5wcm90b3R5cGU9ayxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGNdLFtcIiR5XCIsaF0sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7a1t0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLE8uZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyxPKSx0LiRpPSEwKSxPfSxPLmxvY2FsZT13LE8uaXNEYXlqcz1TLE8udW5peD1mdW5jdGlvbih0KXtyZXR1cm4gTygxZTMqdCl9LE8uZW49RFtnXSxPLkxzPUQsTy5wPXt9LE99KSk7IiwgIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsICIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsICJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwgInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsICJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwgInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwgInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsICJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwgInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwgIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsICIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsICIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCAidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwgInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCAidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwgIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwgInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCAidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsICJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwgInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwgIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsICJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwgIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwgInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwgInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCAidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsICJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsICIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCAidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsICJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwgInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsICJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsICJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsICJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwgInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsICJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwgInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwgInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCAidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsICJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsICJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsICIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsICIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCAidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCAiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCAidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIGFyclN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICB2YXIgb3RoU3RhY2tlZCA9IHN0YWNrLmdldChvdGhlcik7XG4gIGlmIChhcnJTdGFja2VkICYmIG90aFN0YWNrZWQpIHtcbiAgICByZXR1cm4gYXJyU3RhY2tlZCA9PSBvdGhlciAmJiBvdGhTdGFja2VkID09IGFycmF5O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsICJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwgIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsICIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCAidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwgIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsICJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCAiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwgIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwgInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCAiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwgInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwgInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsICIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwgInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsICIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsICIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCAidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCAiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsICJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsICJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsICJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCAiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwgIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCAidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwgInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwgInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwgInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsICJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCAidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBvYmpTdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIHZhciBvdGhTdGFja2VkID0gc3RhY2suZ2V0KG90aGVyKTtcbiAgaWYgKG9ialN0YWNrZWQgJiYgb3RoU3RhY2tlZCkge1xuICAgIHJldHVybiBvYmpTdGFja2VkID09IG90aGVyICYmIG90aFN0YWNrZWQgPT0gb2JqZWN0O1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsICJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwgInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCAidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsICJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwgInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsICJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCAidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwgInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG4iLCAiLnJheS1zdmcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucmF5LXN2Zy1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJheS1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJSVU03T3pzN1FVRkZRenM3T3pzN08wRkJVMFFpTENKemIzVnlZMlZ6SWpwYklsVnpaWEp6TDJkMWJuTnRiMnRsY2k5RWIyTjFiV1Z1ZEhNdloybDBMME52YjJ4cGJtZE5hWE4wVFdGMFVHRnVaV3d2Ym05a1pWOXRiMlIxYkdWekwwQnlZWGt0YW5NdmMzWm5MMnhwWWk5cGJtUmxlQzVzWlhOeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJa0JqYkdGemN5MXdjbVZtYVhndGNtRjVMWE4yWnpvZ2ZpZHlZWGt0YzNabkp6dGNibHh1TGtCN1kyeGhjM010Y0hKbFptbDRMWEpoZVMxemRtZDlJSHRjYmlBZ1ltOTRMWE5wZW1sdVp6b2dZbTl5WkdWeUxXSnZlRHRjYmlBZ0ppMXBiV0ZuWlNCN1hHNGdJQ0FnZDJsa2RHZzZJREV3TUNVN1hHNGdJQ0FnYUdWcFoyaDBPaUF4TURBbE8xeHVJQ0FnSUdKaFkydG5jbTkxYm1RdGMybDZaVG9nWTI5dWRHRnBianRjYmlBZ2ZWeHVmVnh1WEc1QVkyeGhjM010Y0hKbFptbDRMWEpoZVMxcFkyOXVPaUIrSjNKaGVTMXBZMjl1Snp0Y2JseHVMa0I3WTJ4aGMzTXRjSEpsWm1sNExYSmhlUzFwWTI5dWZTQjdYRzRnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNibjFjYmlKZExDSnVZVzFsY3lJNlcxMTkgKi8iLCAicmVxdWlyZSgnLi9pbmRleC5sZXNzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09PSAnUmVnRXhwJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgc2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgbWluID0gTWF0aC5taW47XG5cbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyA9IGNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdlbmRzV2l0aCcpO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvcHVsbC83MDJcbnZhciBNRE5fUE9MWUZJTExfQlVHID0gIUlTX1BVUkUgJiYgIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDICYmICEhZnVuY3Rpb24gKCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihTdHJpbmcucHJvdG90eXBlLCAnZW5kc1dpdGgnKTtcbiAgcmV0dXJuIGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3Iud3JpdGFibGU7XG59KCk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5lbmRzd2l0aFxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFNRE5fUE9MWUZJTExfQlVHICYmICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyB9LCB7XG4gIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pIHtcbiAgICB2YXIgdGhhdCA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgIG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKTtcbiAgICB2YXIgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGVuID0gdGhhdC5sZW5ndGg7XG4gICAgdmFyIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBtaW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xuICAgIHZhciBzZWFyY2ggPSB0b1N0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiBzbGljZSh0aGF0LCBlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuIiwgIi5udW1iZXJfX1ZRNHpRVyB7XG4gIGZvbnQtZmFtaWx5OiBVcmJhbmlzdDtcbiAgZm9udC1zaXplOiA2NHJweDtcbiAgbGluZS1oZWlnaHQ6IDc2cnB4O1xuICBjb2xvcjogdmFyKC0taW5kZXgtdGl0bGUtY29sb3IpO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUVpTENKemIzVnlZMlZ6SWpwYklsVnpaWEp6TDJkMWJuTnRiMnRsY2k5RWIyTjFiV1Z1ZEhNdloybDBMME52YjJ4cGJtZE5hWE4wVFdGMFVHRnVaV3d2YzNKakwyTnZiWEJ2Ym1WdWRITXZaSGx1WVcxcFl5MXVkVzFpWlhJdmFXNWtaWGd1Ylc5a2RXeGxMbXhsYzNNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMbTUxYldKbGNpQjdYRzRnSUdadmJuUXRabUZ0YVd4NU9pQlZjbUpoYm1semREdGNiaUFnWm05dWRDMXphWHBsT2lBMk5ISndlRHRjYmlBZ2JHbHVaUzFvWldsbmFIUTZJRGMyY25CNE8xeHVJQ0JqYjJ4dmNqb2dkbUZ5S0MwdGFXNWtaWGd0ZEdsMGJHVXRZMjlzYjNJcE8xeHVJQ0F2THlCM2FXUjBhRG9nTVRrMGNuQjRPMXh1SUNBdkx5QjBaWGgwTFdGc2FXZHVPaUJ5YVdkb2REdGNibjFjYmlKZExDSnVZVzFsY3lJNlcxMTkgKi8iLCAicmVxdWlyZSgnLi9pbmRleC5tb2R1bGUubGVzcycpO1xudmFyIHNfbnVtYmVyID0gXCJudW1iZXJfX1ZRNHpRV1wiO1xuO1xuZXhwb3J0c1snbnVtYmVyJ10gPSBzX251bWJlcjs7XG5tb2R1bGUuZXhwb3J0cyA9IHsnbnVtYmVyJzpzX251bWJlcn07XG4iLCAiLmJhdHRlcnlfX0tkdDhacSB7XG4gIGhlaWdodDogOTZycHg7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5iYXR0ZXJ5X19LZHQ4WnEgLmJhdExlZnRfX0tkdDhacSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYXR0ZXJ5X19LZHQ4WnEgLnN2Z19fS2R0OFpxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmF0dGVyeV9fS2R0OFpxIC5iYXROdW1fX0tkdDhacSB7XG4gIGNvbG9yOiB2YXIoLS1pbmRleC10aXRsZS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBVcmJhbmlzdDtcbiAgZm9udC1zaXplOiA0NHJweDtcbiAgbGluZS1oZWlnaHQ6IDUycnB4O1xuICBtYXJnaW4tbGVmdDogMjBycHg7XG59XG5cbi5iYXR0ZXJ5X19LZHQ4WnEgLnV0aWxfX0tkdDhacSB7XG4gIGNvbG9yOiB2YXIoLS1pbmRleC10aXRsZS1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBVcmJhbmlzdDtcbiAgZm9udC1zaXplOiA0NHJweDtcbiAgbGluZS1oZWlnaHQ6IDUycnB4O1xufVxuXG4uYmF0dGVyeV9fS2R0OFpxIC5iYXRJY29uX19LZHQ4WnEge1xuICB3aWR0aDogNDJycHg7XG4gIGhlaWdodDogNDJycHg7XG4gIG1hcmdpbi1sZWZ0OiAycnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYXR0ZXJ5X19LZHQ4WnEgLmJhdFdhcm5fX0tkdDhacSB7XG4gIG1hcmdpbi1sZWZ0OiA0cnB4O1xuICB3aWR0aDogMjRycHg7XG4gIGhlaWdodDogMjRycHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wRkJRVUU3T3pzN096czdPenM3UVVGQlFUczdPenRCUVVGQk96czdPenM3T3p0QlFVRkJPenM3T3pzN08wRkJRVUU3T3pzN096czdRVUZCUVNJc0luTnZkWEpqWlhNaU9sc2lWWE5sY25NdlozVnVjMjF2YTJWeUwwUnZZM1Z0Wlc1MGN5OW5hWFF2UTI5dmJHbHVaMDFwYzNSTllYUlFZVzVsYkM5emNtTXZZMjl0Y0c5dVpXNTBjeTlpWVhSMFpYSjVMMmx1WkdWNExtMXZaSFZzWlM1c1pYTnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk1aVlYUjBaWEo1SUh0Y2JpQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdhR1ZwWjJoME9pQTVObkp3ZUR0Y2JpQWdabXhsZUMxa2FYSmxZM1JwYjI0NklISnZkenRjYmlBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqdGNiaUFnZWkxcGJtUmxlRG9nTVR0Y2JpQWdMbUpoZEV4bFpuUWdlMXh1SUNBZ0lIZHBaSFJvT2lBME9IQjRPMXh1SUNBZ0lHaGxhV2RvZERvZ05EaHdlRHRjYmlBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQmpaVzUwWlhJN1hHNGdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsTzF4dUlDQWdJRzkyWlhKbWJHOTNPaUJvYVdSa1pXNDdYRzRnSUgxY2JpQWdMbk4yWnlCN1hHNGdJQ0FnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4dUlDQjlYRzRnSUM1aVlYUk9kVzBnZTF4dUlDQWdJR052Ykc5eU9pQjJZWElvTFMxcGJtUmxlQzEwYVhSc1pTMWpiMnh2Y2lrN1hHNGdJQ0FnWm05dWRDMW1ZVzFwYkhrNklGVnlZbUZ1YVhOME8xeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ05EUnljSGc3WEc0Z0lDQWdiR2x1WlMxb1pXbG5hSFE2SURVeWNuQjRPMXh1SUNBZ0lHMWhjbWRwYmkxc1pXWjBPaUF5TUhKd2VEdGNiaUFnZlZ4dUlDQXVkWFJwYkNCN1hHNGdJQ0FnWTI5c2IzSTZJSFpoY2lndExXbHVaR1Y0TFhScGRHeGxMV052Ykc5eUtUdGNiaUFnSUNCbWIyNTBMV1poYldsc2VUb2dWWEppWVc1cGMzUTdYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQTBOSEp3ZUR0Y2JpQWdJQ0JzYVc1bExXaGxhV2RvZERvZ05USnljSGc3WEc0Z0lIMWNiaUFnTG1KaGRFbGpiMjRnZTF4dUlDQWdJSGRwWkhSb09pQTBNbkp3ZUR0Y2JpQWdJQ0JvWldsbmFIUTZJRFF5Y25CNE8xeHVJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0J0WVhKbmFXNHRiR1ZtZERvZ01uSndlRHRjYmlBZ2ZWeHVJQ0F1WW1GMFYyRnliaUI3WEc0Z0lDQWdiV0Z5WjJsdUxXeGxablE2SURSeWNIZzdYRzRnSUNBZ2QybGtkR2c2SURJMGNuQjRPMXh1SUNBZ0lHaGxhV2RvZERvZ01qUnljSGc3WEc0Z0lIMWNibjFjYmlKZExDSnVZVzFsY3lJNlcxMTkgKi8iLCAicmVxdWlyZSgnLi9pbmRleC5tb2R1bGUubGVzcycpO1xudmFyIHNfYmF0SWNvbiA9IFwiYmF0SWNvbl9fS2R0OFpxXCI7XG52YXIgc19iYXRMZWZ0ID0gXCJiYXRMZWZ0X19LZHQ4WnFcIjtcbnZhciBzX2JhdE51bSA9IFwiYmF0TnVtX19LZHQ4WnFcIjtcbnZhciBzX2JhdFdhcm4gPSBcImJhdFdhcm5fX0tkdDhacVwiO1xudmFyIHNfYmF0dGVyeSA9IFwiYmF0dGVyeV9fS2R0OFpxXCI7XG52YXIgc19zdmcgPSBcInN2Z19fS2R0OFpxXCI7XG52YXIgc191dGlsID0gXCJ1dGlsX19LZHQ4WnFcIjtcbjtcbmV4cG9ydHNbJ2JhdEljb24nXSA9IHNfYmF0SWNvbjtcbmV4cG9ydHNbJ2JhdExlZnQnXSA9IHNfYmF0TGVmdDtcbmV4cG9ydHNbJ2JhdE51bSddID0gc19iYXROdW07XG5leHBvcnRzWydiYXRXYXJuJ10gPSBzX2JhdFdhcm47XG5leHBvcnRzWydiYXR0ZXJ5J10gPSBzX2JhdHRlcnk7XG5leHBvcnRzWydzdmcnXSA9IHNfc3ZnO1xuZXhwb3J0c1sndXRpbCddID0gc191dGlsOztcbm1vZHVsZS5leHBvcnRzID0geydiYXRJY29uJzpzX2JhdEljb24sJ2JhdExlZnQnOnNfYmF0TGVmdCwnYmF0TnVtJzpzX2JhdE51bSwnYmF0V2Fybic6c19iYXRXYXJuLCdiYXR0ZXJ5JzpzX2JhdHRlcnksJ3N2Zyc6c19zdmcsJ3V0aWwnOnNfdXRpbH07XG4iLCAiLnNpZ25hbF9fRlZqUUhxIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWduYWxJY29uX19GVmpRSHEge1xuICB3aWR0aDogMzJycHg7XG4gIGhlaWdodDogMzJycHg7XG4gIG1hcmdpbi1yaWdodDogMTZycHg7XG59XG5cbi5ibHVldG9vdGhWaWV3X19GVmpRSHEge1xuICBoZWlnaHQ6IDMycnB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmx1ZXRvb3RoSWNvbl9fRlZqUUhxIHtcbiAgd2lkdGg6IDMycnB4O1xuICBoZWlnaHQ6IDMycnB4O1xufVxuXG4uY29ubmVjdFRleHRfX0ZWalFIcSB7XG4gIGNvbG9yOiAjODQ4NDg0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uY29ubmVjdFRleHRBY3RpdmVfX0ZWalFIcSB7XG4gIGNvbG9yOiAjMTBhOGZlO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096dEJRVXRCT3pzN096czdRVUZMUVRzN096czdPenRCUVUxQk96czdPenRCUVVsQk96czdPenM3TzBGQlRVRWlMQ0p6YjNWeVkyVnpJanBiSWxWelpYSnpMMmQxYm5OdGIydGxjaTlFYjJOMWJXVnVkSE12WjJsMEwwTnZiMnhwYm1kTmFYTjBUV0YwVUdGdVpXd3ZjM0pqTDJOdmJYQnZibVZ1ZEhNdmMybG5ibUZzTFhacFpYY3ZhVzVrWlhndWJXOWtkV3hsTG14bGMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTG5OcFoyNWhiQ0I3WEc0Z0lHUnBjM0JzWVhrNklHWnNaWGc3WEc0Z0lHWnNaWGd0WkdseVpXTjBhVzl1T2lCeWIzYzdYRzRnSUdGc2FXZHVMV2wwWlcxek9pQm1iR1Y0TFhOMFlYSjBPMXh1ZlZ4dUxuTnBaMjVoYkVsamIyNGdlMXh1SUNCM2FXUjBhRG9nTXpKeWNIZzdYRzRnSUdobGFXZG9kRG9nTXpKeWNIZzdYRzRnSUcxaGNtZHBiaTF5YVdkb2REb2dNVFp5Y0hnN1hHNTlYRzR1WW14MVpYUnZiM1JvVm1sbGR5QjdYRzRnSUdScGMzQnNZWGs2SUdac1pYZzdYRzRnSUdac1pYZ3RaR2x5WldOMGFXOXVPaUJ5YjNjN1hHNGdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lHaGxhV2RvZERvZ016SnljSGc3WEc1OVhHNHVZbXgxWlhSdmIzUm9TV052YmlCN1hHNGdJSGRwWkhSb09pQXpNbkp3ZUR0Y2JpQWdhR1ZwWjJoME9pQXpNbkp3ZUR0Y2JuMWNiaTVqYjI1dVpXTjBWR1Y0ZENCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTVRKd2VEdGNiaUFnWm05dWRDMTNaV2xuYUhRNklEWXdNRHRjYmlBZ2JHbHVaUzFvWldsbmFIUTZJREUwY0hnN1hHNGdJR052Ykc5eU9pQWpPRFE0TkRnME8xeHVmVnh1TG1OdmJtNWxZM1JVWlhoMFFXTjBhWFpsSUh0Y2JpQWdZMjlzYjNJNklDTXhNR0U0Wm1VN1hHNTlYRzRpWFN3aWJtRnRaWE1pT2x0ZGZRPT0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5tb2R1bGUubGVzcycpO1xudmFyIHNfYmx1ZXRvb3RoSWNvbiA9IFwiYmx1ZXRvb3RoSWNvbl9fRlZqUUhxXCI7XG52YXIgc19ibHVldG9vdGhWaWV3ID0gXCJibHVldG9vdGhWaWV3X19GVmpRSHFcIjtcbnZhciBzX2Nvbm5lY3RUZXh0ID0gXCJjb25uZWN0VGV4dF9fRlZqUUhxXCI7XG52YXIgc19jb25uZWN0VGV4dEFjdGl2ZSA9IFwiY29ubmVjdFRleHRBY3RpdmVfX0ZWalFIcVwiO1xudmFyIHNfc2lnbmFsID0gXCJzaWduYWxfX0ZWalFIcVwiO1xudmFyIHNfc2lnbmFsSWNvbiA9IFwic2lnbmFsSWNvbl9fRlZqUUhxXCI7XG47XG5leHBvcnRzWydibHVldG9vdGhJY29uJ10gPSBzX2JsdWV0b290aEljb247XG5leHBvcnRzWydibHVldG9vdGhWaWV3J10gPSBzX2JsdWV0b290aFZpZXc7XG5leHBvcnRzWydjb25uZWN0VGV4dCddID0gc19jb25uZWN0VGV4dDtcbmV4cG9ydHNbJ2Nvbm5lY3RUZXh0QWN0aXZlJ10gPSBzX2Nvbm5lY3RUZXh0QWN0aXZlO1xuZXhwb3J0c1snc2lnbmFsJ10gPSBzX3NpZ25hbDtcbmV4cG9ydHNbJ3NpZ25hbEljb24nXSA9IHNfc2lnbmFsSWNvbjs7XG5tb2R1bGUuZXhwb3J0cyA9IHsnYmx1ZXRvb3RoSWNvbic6c19ibHVldG9vdGhJY29uLCdibHVldG9vdGhWaWV3JzpzX2JsdWV0b290aFZpZXcsJ2Nvbm5lY3RUZXh0JzpzX2Nvbm5lY3RUZXh0LCdjb25uZWN0VGV4dEFjdGl2ZSc6c19jb25uZWN0VGV4dEFjdGl2ZSwnc2lnbmFsJzpzX3NpZ25hbCwnc2lnbmFsSWNvbic6c19zaWduYWxJY29ufTtcbiIsICIudW5sb2NrX19OcUktSHEge1xuICB3aWR0aDogNDgwcnB4O1xuICBoZWlnaHQ6IDEzMnJweDtcbiAgYm9yZGVyLXJhZGl1czogMzJycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogOHJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51bmxvY2tUZXh0X19OcUktSHEge1xuICBjb2xvcjogdmFyKC0taW5kZXgtc3ViVGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDI0cnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNsaWRlcldyYXBfX05xSS1IcSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbGlkZXJfX05xSS1IcSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2tMZWZ0X19OcUktSHEge1xuICBhbmltYXRpb246IC42cyBlYXNlLWluIHR1cm5MZWZ0X19OcUktSHE7XG59XG5cbi5iYWNrUmlnaHRfX05xSS1IcSB7XG4gIGFuaW1hdGlvbjogLjZzIGVhc2UtaW4gdHVyblJpZ2h0X19OcUktSHE7XG59XG5cbi5zbGlkZXJJY29uX19OcUktSHEge1xuICB3aWR0aDogNDhycHg7XG4gIGhlaWdodDogNDhycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYXJyb3dDb250YWluZXJfX05xSS1IcSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFycm93TGVmdF9fTnFJLUhxIHtcbiAgd2lkdGg6IDE0cnB4O1xuICBoZWlnaHQ6IDE0cnB4O1xuICBib3JkZXItYm90dG9tOiAzcnB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1sZWZ0OiAzcnB4IHNvbGlkICNkOWQ5ZDk7XG4gIGFuaW1hdGlvbjogMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhcnJvdy1hbmltYXRpb25fX05xSS1IcTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uYXJyb3dfX05xSS1IcSB7XG4gIHdpZHRoOiAxNHJweDtcbiAgaGVpZ2h0OiAxNHJweDtcbiAgYm9yZGVyLXRvcDogM3JweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmlnaHQ6IDNycHggc29saWQgI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uOiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFycm93LWFuaW1hdGlvbl9fTnFJLUhxO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5sb2FkaW5nX19OcUktSHEge1xuICB3aWR0aDogNTBycHg7XG4gIGhlaWdodDogNTBycHg7XG4gIGJvcmRlcjogNXJweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItdG9wOiA1cnB4IHNvbGlkIHZhcigtLWFwcC1NMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiAxcyBsaW5lYXIgaW5maW5pdGUgc3Bpbl9fTnFJLUhxO1xufVxuXG5Aa2V5ZnJhbWVzIGFycm93LWFuaW1hdGlvbl9fTnFJLUhxIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IC4zO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogLjE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0dXJuTGVmdF9fTnFJLUhxIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhycHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdHVyblJpZ2h0X19OcUktSHEge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzU2cnB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5fX05xSS1IcSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN08wRkJWMEU3T3pzN096czdPMEZCVDBFN096czdPenM3UVVGTlFUczdPenRCUVVkQk96czdPMEZCUjBFN096czdRVUZKUVRzN096czdPenRCUVU5Qk96czdPenM3UVVGTlFUczdPenM3T3pzN08wRkJVVUU3T3pzN096czdPenM3UVVGVlFUczdPenM3T3pzN08wRkJVMEU3T3pzN096czdPenM3T3pzN08wRkJXVUU3T3pzN096dEJRVTFCT3pzN096czdRVUZOUVNJc0luTnZkWEpqWlhNaU9sc2lWWE5sY25NdlozVnVjMjF2YTJWeUwwUnZZM1Z0Wlc1MGN5OW5hWFF2UTI5dmJHbHVaMDFwYzNSTllYUlFZVzVsYkM5emNtTXZZMjl0Y0c5dVpXNTBjeTkxYm14dlkyc3RjMnhwWkdWeUwybHVaR1Y0TG0xdlpIVnNaUzVzWlhOeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTUxYm14dlkyc2dlMXh1SUNCM2FXUjBhRG9nTkRnd2NuQjRPMXh1SUNCb1pXbG5hSFE2SURFek1uSndlRHRjYmlBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTXpKeWNIZzdYRzRnSUdScGMzQnNZWGs2SUdac1pYZzdYRzRnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN1hHNGdJR3AxYzNScFpua3RZMjl1ZEdWdWREb2dZMlZ1ZEdWeU8xeHVJQ0JqZFhKemIzSTZJSEJ2YVc1MFpYSTdYRzRnSUhCaFpHUnBibWM2SURoeWNIZzdYRzU5WEc1Y2JpNTFibXh2WTJ0VVpYaDBJSHRjYmlBZ1kyOXNiM0k2SUhaaGNpZ3RMV2x1WkdWNExYTjFZbFJwZEd4bExXTnZiRzl5S1R0Y2JpQWdabTl1ZEMxemFYcGxPaUF5TkhKd2VEdGNiaUFnWm05dWRDMTNaV2xuYUhRNklEVXdNRHRjYmlBZ2JHbHVaUzFvWldsbmFIUTZJREk0Y25CNE8xeHVJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEc1OVhHNHVjMnhwWkdWeVYzSmhjQ0I3WEc0Z0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUdGNiaUFnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2p0Y2JpQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQmpaVzUwWlhJN1hHNGdJR1JwYzNCc1lYazZJR1pzWlhnN1hHNTlYRzR1YzJ4cFpHVnlJSHRjYmlBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE8xeHVmVnh1TG1KaFkydE1aV1owSUh0Y2JpQWdZVzVwYldGMGFXOXVPaUIwZFhKdVRHVm1kQ0F3TGpaeklHVmhjMlV0YVc0N1hHNTlYRzR1WW1GamExSnBaMmgwSUh0Y2JpQWdZVzVwYldGMGFXOXVPaUIwZFhKdVVtbG5hSFFnTUM0MmN5QmxZWE5sTFdsdU8xeHVmVnh1WEc0dWMyeHBaR1Z5U1dOdmJpQjdYRzRnSUhkcFpIUm9PaUEwT0hKd2VEdGNiaUFnYUdWcFoyaDBPaUEwT0hKd2VEdGNiaUFnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4dUlDQjBiM0E2SURBN1hHNTlYRzVjYmk1aGNuSnZkME52Ym5SaGFXNWxjaUI3WEc0Z0lHUnBjM0JzWVhrNklHWnNaWGc3WEc0Z0lHWnNaWGd0WkdseVpXTjBhVzl1T2lCeWIzYzdYRzRnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JuMWNibHh1TG1GeWNtOTNUR1ZtZENCN1hHNGdJSGRwWkhSb09pQXhOSEp3ZUR0Y2JpQWdhR1ZwWjJoME9pQXhOSEp3ZUR0Y2JpQWdkSEpoYm5ObWIzSnRPaUJ5YjNSaGRHVW9ORFZrWldjcE8xeHVJQ0JpYjNKa1pYSXRZbTkwZEc5dE9pQXpjbkI0SUhOdmJHbGtJQ05rT1dRNVpEazdYRzRnSUdKdmNtUmxjaTFzWldaME9pQXpjbkI0SUhOdmJHbGtJQ05rT1dRNVpEazdYRzRnSUdGdWFXMWhkR2x2YmpvZ1lYSnliM2N0WVc1cGJXRjBhVzl1SURFdU5YTWdaV0Z6WlMxcGJpMXZkWFFnYVc1bWFXNXBkR1U3WEc1OVhHNHVZWEp5YjNjZ2UxeHVJQ0IzYVdSMGFEb2dNVFJ5Y0hnN1hHNGdJR2hsYVdkb2REb2dNVFJ5Y0hnN1hHNGdJSFJ5WVc1elptOXliVG9nY205MFlYUmxLRFExWkdWbktUdGNiaUFnWW05eVpHVnlMWFJ2Y0RvZ00zSndlQ0J6YjJ4cFpDQWpaRGxrT1dRNU8xeHVJQ0JpYjNKa1pYSXRjbWxuYUhRNklETnljSGdnYzI5c2FXUWdJMlE1WkRsa09UdGNiaUFnYjNCaFkybDBlVG9nTVR0Y2JpQWdZVzVwYldGMGFXOXVPaUJoY25KdmR5MWhibWx0WVhScGIyNGdNUzQxY3lCbFlYTmxMV2x1TFc5MWRDQnBibVpwYm1sMFpUdGNibjFjYmx4dUxteHZZV1JwYm1jZ2UxeHVJQ0IzYVdSMGFEb2dOVEJ5Y0hnN1hHNGdJR2hsYVdkb2REb2dOVEJ5Y0hnN1hHNGdJR0p2Y21SbGNqb2dOWEp3ZUNCemIyeHBaQ0FqWmpObU0yWXpPMXh1SUNCaWIzSmtaWEl0ZEc5d09pQTFjbkI0SUhOdmJHbGtJSFpoY2lndExXRndjQzFOTVNrN1hHNGdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHRjYmlBZ1lXNXBiV0YwYVc5dU9pQnpjR2x1SURGeklHeHBibVZoY2lCcGJtWnBibWwwWlR0Y2JuMWNibHh1UUd0bGVXWnlZVzFsY3lCaGNuSnZkeTFoYm1sdFlYUnBiMjRnZTF4dUlDQXdKU0I3WEc0Z0lDQWdiM0JoWTJsMGVUb2dNVHRjYmlBZ2ZWeHVJQ0ExTUNVZ2UxeHVJQ0FnSUc5d1lXTnBkSGs2SURBdU16dGNiaUFnZlZ4dUlDQXhNREFsSUh0Y2JpQWdJQ0J2Y0dGamFYUjVPaUF3TGpFN1hHNGdJSDFjYm4xY2JseHVRR3RsZVdaeVlXMWxjeUIwZFhKdVRHVm1kQ0I3WEc0Z0lERXdNQ1VnZTF4dUlDQWdJSFJ5WVc1elptOXliVG9nZEhKaGJuTnNZWFJsV0NnNGNuQjRLVHRjYmlBZ2ZWeHVmVnh1WEc1QWEyVjVabkpoYldWeklIUjFjbTVTYVdkb2RDQjdYRzRnSURFd01DVWdlMXh1SUNBZ0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5Oc1lYUmxXQ2d6TlRaeWNIZ3BPMXh1SUNCOVhHNTlYRzVjYmtCclpYbG1jbUZ0WlhNZ2MzQnBiaUI3WEc0Z0lEQWxJSHRjYmlBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3daR1ZuS1R0Y2JpQWdmVnh1SUNBeE1EQWxJSHRjYmlBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3pOakJrWldjcE8xeHVJQ0I5WEc1OVhHNGlYU3dpYm1GdFpYTWlPbHRkZlE9PSAqLyIsICJyZXF1aXJlKCcuL2luZGV4Lm1vZHVsZS5sZXNzJyk7XG52YXIgc19hcnJvdyA9IFwiYXJyb3dfX05xSS1IcVwiO1xudmFyIHNfYXJyb3dBbmltYXRpb24gPSBcImFycm93LWFuaW1hdGlvbl9fTnFJLUhxXCI7XG52YXIgc19hcnJvd0NvbnRhaW5lciA9IFwiYXJyb3dDb250YWluZXJfX05xSS1IcVwiO1xudmFyIHNfYXJyb3dMZWZ0ID0gXCJhcnJvd0xlZnRfX05xSS1IcVwiO1xudmFyIHNfYmFja0xlZnQgPSBcImJhY2tMZWZ0X19OcUktSHFcIjtcbnZhciBzX2JhY2tSaWdodCA9IFwiYmFja1JpZ2h0X19OcUktSHFcIjtcbnZhciBzX2xvYWRpbmcgPSBcImxvYWRpbmdfX05xSS1IcVwiO1xudmFyIHNfc2xpZGVyID0gXCJzbGlkZXJfX05xSS1IcVwiO1xudmFyIHNfc2xpZGVySWNvbiA9IFwic2xpZGVySWNvbl9fTnFJLUhxXCI7XG52YXIgc19zbGlkZXJXcmFwID0gXCJzbGlkZXJXcmFwX19OcUktSHFcIjtcbnZhciBzX3NwaW4gPSBcInNwaW5fX05xSS1IcVwiO1xudmFyIHNfdHVybkxlZnQgPSBcInR1cm5MZWZ0X19OcUktSHFcIjtcbnZhciBzX3R1cm5SaWdodCA9IFwidHVyblJpZ2h0X19OcUktSHFcIjtcbnZhciBzX3VubG9jayA9IFwidW5sb2NrX19OcUktSHFcIjtcbnZhciBzX3VubG9ja1RleHQgPSBcInVubG9ja1RleHRfX05xSS1IcVwiO1xuO1xuZXhwb3J0c1snYXJyb3cnXSA9IHNfYXJyb3c7XG5leHBvcnRzWydhcnJvdy1hbmltYXRpb24nXSA9IHNfYXJyb3dBbmltYXRpb247XG5leHBvcnRzWydhcnJvd0NvbnRhaW5lciddID0gc19hcnJvd0NvbnRhaW5lcjtcbmV4cG9ydHNbJ2Fycm93TGVmdCddID0gc19hcnJvd0xlZnQ7XG5leHBvcnRzWydiYWNrTGVmdCddID0gc19iYWNrTGVmdDtcbmV4cG9ydHNbJ2JhY2tSaWdodCddID0gc19iYWNrUmlnaHQ7XG5leHBvcnRzWydsb2FkaW5nJ10gPSBzX2xvYWRpbmc7XG5leHBvcnRzWydzbGlkZXInXSA9IHNfc2xpZGVyO1xuZXhwb3J0c1snc2xpZGVySWNvbiddID0gc19zbGlkZXJJY29uO1xuZXhwb3J0c1snc2xpZGVyV3JhcCddID0gc19zbGlkZXJXcmFwO1xuZXhwb3J0c1snc3BpbiddID0gc19zcGluO1xuZXhwb3J0c1sndHVybkxlZnQnXSA9IHNfdHVybkxlZnQ7XG5leHBvcnRzWyd0dXJuUmlnaHQnXSA9IHNfdHVyblJpZ2h0O1xuZXhwb3J0c1sndW5sb2NrJ10gPSBzX3VubG9jaztcbmV4cG9ydHNbJ3VubG9ja1RleHQnXSA9IHNfdW5sb2NrVGV4dDs7XG5tb2R1bGUuZXhwb3J0cyA9IHsnYXJyb3cnOnNfYXJyb3csJ2Fycm93LWFuaW1hdGlvbic6c19hcnJvd0FuaW1hdGlvbiwnYXJyb3dDb250YWluZXInOnNfYXJyb3dDb250YWluZXIsJ2Fycm93TGVmdCc6c19hcnJvd0xlZnQsJ2JhY2tMZWZ0JzpzX2JhY2tMZWZ0LCdiYWNrUmlnaHQnOnNfYmFja1JpZ2h0LCdsb2FkaW5nJzpzX2xvYWRpbmcsJ3NsaWRlcic6c19zbGlkZXIsJ3NsaWRlckljb24nOnNfc2xpZGVySWNvbiwnc2xpZGVyV3JhcCc6c19zbGlkZXJXcmFwLCdzcGluJzpzX3NwaW4sJ3R1cm5MZWZ0JzpzX3R1cm5MZWZ0LCd0dXJuUmlnaHQnOnNfdHVyblJpZ2h0LCd1bmxvY2snOnNfdW5sb2NrLCd1bmxvY2tUZXh0JzpzX3VubG9ja1RleHR9O1xuIiwgIi5yZWNvcmRfX1U0aVB2cSB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjRycHgpO1xuICBtYXJnaW46IDAgMzJycHg7XG59XG5cbi5yZWNvcmRfX1U0aVB2cSAudGl0bGVfX1U0aVB2cSB7XG4gIG1hcmdpbi10b3A6IDQwcnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVjb3JkX19VNGlQdnEgLm1vcmVUZXh0X19VNGlQdnEge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogdmFyKC0tYXBwLUIxLU4zKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yZWNvcmRfX1U0aVB2cSAucmVjb3JkSXRlbV9fVTRpUHZxIHtcbiAgYm9yZGVyLXJhZGl1czogMzJycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1CMik7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMnJweDtcbn1cblxuLnJlY29yZF9fVTRpUHZxIC5yZWNvcmRJdGVtX19VNGlQdnEgLnJlY29yZEl0ZW1Ub3BfX1U0aVB2cSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlY29yZF9fVTRpUHZxIC5yZWNvcmRJdGVtX19VNGlQdnEgLnJlY29yZEl0ZW1Ub3BfX1U0aVB2cSAubWlsZWFnZV9fVTRpUHZxIHtcbiAgZm9udC1zaXplOiA0OHJweDtcbn1cblxuLnJlY29yZF9fVTRpUHZxIC5yZWNvcmRJdGVtX19VNGlQdnEgLnJlY29yZEl0ZW1Ub3BfX1U0aVB2cSAubWlsZWFnZV9fVTRpUHZxIHRleHQge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogdmFyKC0tYXBwLUIxLU4zKTtcbn1cblxuLnJlY29yZF9fVTRpUHZxIC5yZWNvcmRJdGVtX19VNGlQdnEgLnJlY29yZEl0ZW1Ub3BfX1U0aVB2cSAudGltZV9fVTRpUHZxIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6IHZhcigtLWFwcC1CMS1OMyk7XG59XG5cbi5yZWNvcmRfX1U0aVB2cSAucmVjb3JkSXRlbV9fVTRpUHZxIC5yZWNvcmRJdGVtQm90dG9tX19VNGlQdnEge1xuICBtYXJnaW4tdG9wOiAxMHJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVjb3JkX19VNGlQdnEgLnJlY29yZEl0ZW1fX1U0aVB2cSAucmVjb3JkSXRlbUJvdHRvbV9fVTRpUHZxIC5yZWNvcmRJdGVtQm90dG9tTGlfX1U0aVB2cSB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiB2YXIoLS1hcHAtQjEtTjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWNvcmRfX1U0aVB2cSAucmVjb3JkSXRlbV9fVTRpUHZxIC5yZWNvcmRJdGVtQm90dG9tX19VNGlQdnEgLnJlY29yZEl0ZW1Cb3R0b21MaV9fVTRpUHZxIC5udW1fX1U0aVB2cSB7XG4gIGNvbG9yOiB2YXIoLS1hcHAtQjEtTjEpO1xufVxuXG4ucmVjb3JkX19VNGlQdnEgLnJlY29yZEl0ZW1fX1U0aVB2cSAubm9EYXRhX19VNGlQdnEge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN08wRkJRVUU3T3pzN096czdPMEZCUVVFN096czdPenM3TzBGQlFVRTdPenM3T3pzN1FVRkJRVHM3T3pzN08wRkJRVUU3T3pzN1FVRkJRVHM3T3pzN1FVRkJRVHM3T3pzN1FVRkJRVHM3T3pzN096dEJRVUZCT3pzN096czdRVUZCUVRzN096dEJRVUZCSWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDNOeVl5OWpiMjF3YjI1bGJuUnpMM0psWTI5eVpDOXBibVJsZUM1dGIyUjFiR1V1YkdWemN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl1Y21WamIzSmtJSHRjYmlBZ2QybGtkR2c2SUdOaGJHTW9NVEF3ZG5jZ0xTQTJOSEp3ZUNrN1hHNGdJRzFoY21kcGJqb2dNQ0F6TW5Kd2VEdGNiaUFnTG5ScGRHeGxJSHRjYmlBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQnpjR0ZqWlMxaVpYUjNaV1Z1TzF4dUlDQWdJRzFoY21kcGJpMTBiM0E2SURRd2NuQjRPMXh1SUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURJd2NuQjRPMXh1SUNCOVhHNGdJQzV0YjNKbFZHVjRkQ0I3WEc0Z0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5TzF4dUlDQWdJR3AxYzNScFpua3RZMjl1ZEdWdWREb2dZMlZ1ZEdWeU8xeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01qUnljSGc3WEc0Z0lDQWdZMjlzYjNJNklIWmhjaWd0TFdGd2NDMUNNUzFPTXlrN1hHNGdJSDFjYmlBZ0xuSmxZMjl5WkVsMFpXMGdlMXh1SUNBZ0lIZHBaSFJvT2lBeE1EQWxPMXh1SUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURNeWNuQjRPMXh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklIWmhjaWd0TFdGd2NDMUNNaWs3WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNekp5Y0hnN1hHNGdJQ0FnTG5KbFkyOXlaRWwwWlcxVWIzQWdlMXh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN1hHNGdJQ0FnSUNCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUhOd1lXTmxMV0psZEhkbFpXNDdYRzRnSUNBZ0lDQXViV2xzWldGblpTQjdYRzRnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTkRoeWNIZzdYRzRnSUNBZ0lDQWdJSFJsZUhRZ2UxeHVJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWpoeWNIZzdYRzRnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJSFpoY2lndExXRndjQzFDTVMxT015azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJQzUwYVcxbElIdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TkhKd2VEdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklIWmhjaWd0TFdGd2NDMUNNUzFPTXlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJQzV5WldOdmNtUkpkR1Z0UW05MGRHOXRJSHRjYmlBZ0lDQWdJR1JwYzNCc1lYazZJR1pzWlhnN1hHNGdJQ0FnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU8xeHVJQ0FnSUNBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCemNHRmpaUzFpWlhSM1pXVnVPMXh1SUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTVRCeWNIZzdYRzRnSUNBZ0lDQXVjbVZqYjNKa1NYUmxiVUp2ZEhSdmJVeHBJSHRjYmlBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeU5ISndlRHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSTZJSFpoY2lndExXRndjQzFDTVMxT015azdYRzRnSUNBZ0lDQWdJSFJsZUhRdFlXeHBaMjQ2SUdObGJuUmxjanRjYmlBZ0lDQWdJQ0FnTG01MWJTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJSFpoY2lndExXRndjQzFDTVMxT01TazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ0xtNXZSR0YwWVNCN1hHNGdJQ0FnSUNCb1pXbG5hSFE2SURZd2NIZzdYRzRnSUNBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQWdJQ0FnWm14bGVDMWthWEpsWTNScGIyNDZJR052YkhWdGJqdGNiaUFnSUNBZ0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ1kyVnVkR1Z5TzF4dUlDQWdJQ0FnWm05dWRDMXphWHBsT2lBeU5ISndlRHRjYmlBZ0lDQjlYRzRnSUgxY2JuMWNiaUpkTENKdVlXMWxjeUk2VzExOSAqLyIsICJyZXF1aXJlKCcuL2luZGV4Lm1vZHVsZS5sZXNzJyk7XG52YXIgc19taWxlYWdlID0gXCJtaWxlYWdlX19VNGlQdnFcIjtcbnZhciBzX21vcmVUZXh0ID0gXCJtb3JlVGV4dF9fVTRpUHZxXCI7XG52YXIgc19ub0RhdGEgPSBcIm5vRGF0YV9fVTRpUHZxXCI7XG52YXIgc19udW0gPSBcIm51bV9fVTRpUHZxXCI7XG52YXIgc19yZWNvcmQgPSBcInJlY29yZF9fVTRpUHZxXCI7XG52YXIgc19yZWNvcmRJdGVtID0gXCJyZWNvcmRJdGVtX19VNGlQdnFcIjtcbnZhciBzX3JlY29yZEl0ZW1Cb3R0b20gPSBcInJlY29yZEl0ZW1Cb3R0b21fX1U0aVB2cVwiO1xudmFyIHNfcmVjb3JkSXRlbUJvdHRvbUxpID0gXCJyZWNvcmRJdGVtQm90dG9tTGlfX1U0aVB2cVwiO1xudmFyIHNfcmVjb3JkSXRlbVRvcCA9IFwicmVjb3JkSXRlbVRvcF9fVTRpUHZxXCI7XG52YXIgc190aW1lID0gXCJ0aW1lX19VNGlQdnFcIjtcbnZhciBzX3RpdGxlID0gXCJ0aXRsZV9fVTRpUHZxXCI7XG47XG5leHBvcnRzWydtaWxlYWdlJ10gPSBzX21pbGVhZ2U7XG5leHBvcnRzWydtb3JlVGV4dCddID0gc19tb3JlVGV4dDtcbmV4cG9ydHNbJ25vRGF0YSddID0gc19ub0RhdGE7XG5leHBvcnRzWydudW0nXSA9IHNfbnVtO1xuZXhwb3J0c1sncmVjb3JkJ10gPSBzX3JlY29yZDtcbmV4cG9ydHNbJ3JlY29yZEl0ZW0nXSA9IHNfcmVjb3JkSXRlbTtcbmV4cG9ydHNbJ3JlY29yZEl0ZW1Cb3R0b20nXSA9IHNfcmVjb3JkSXRlbUJvdHRvbTtcbmV4cG9ydHNbJ3JlY29yZEl0ZW1Cb3R0b21MaSddID0gc19yZWNvcmRJdGVtQm90dG9tTGk7XG5leHBvcnRzWydyZWNvcmRJdGVtVG9wJ10gPSBzX3JlY29yZEl0ZW1Ub3A7XG5leHBvcnRzWyd0aW1lJ10gPSBzX3RpbWU7XG5leHBvcnRzWyd0aXRsZSddID0gc190aXRsZTs7XG5tb2R1bGUuZXhwb3J0cyA9IHsnbWlsZWFnZSc6c19taWxlYWdlLCdtb3JlVGV4dCc6c19tb3JlVGV4dCwnbm9EYXRhJzpzX25vRGF0YSwnbnVtJzpzX251bSwncmVjb3JkJzpzX3JlY29yZCwncmVjb3JkSXRlbSc6c19yZWNvcmRJdGVtLCdyZWNvcmRJdGVtQm90dG9tJzpzX3JlY29yZEl0ZW1Cb3R0b20sJ3JlY29yZEl0ZW1Cb3R0b21MaSc6c19yZWNvcmRJdGVtQm90dG9tTGksJ3JlY29yZEl0ZW1Ub3AnOnNfcmVjb3JkSXRlbVRvcCwndGltZSc6c190aW1lLCd0aXRsZSc6c190aXRsZX07XG4iLCAiLnRvYXN0Vmlld19fSVYtUnFhIHtcbiAgd2lkdGg6IDY2MHJweDtcbiAgcGFkZGluZzogMjRycHggMzJycHg7XG4gIGJvcmRlci1yYWRpdXM6IDcwcnB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3OHB4O1xuICBib3gtc2hhZG93OiAycHggNXB4IDE0cHggcmdiYSgwLCAwLCAwLCAuMDgpO1xufVxuXG4udG9hc3RMZWZ0X19JVi1ScWEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9hc3RUZXh0X19JVi1ScWEge1xuICBmb250LXNpemU6IDI0cnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNnJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRvYXN0QnRuVGV4dF9fSVYtUnFhIHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwODVmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN096czdRVUZaUVRzN096czdRVUZKUVRzN096czdPenM3UVVGUFFTSXNJbk52ZFhKalpYTWlPbHNpVlhObGNuTXZaM1Z1YzIxdmEyVnlMMFJ2WTNWdFpXNTBjeTluYVhRdlEyOXZiR2x1WjAxcGMzUk5ZWFJRWVc1bGJDOXpjbU12WTI5dGNHOXVaVzUwY3k5elpYSjJhV05sTFhSdllYTjBMMmx1WkdWNExtMXZaSFZzWlM1c1pYTnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk1MGIyRnpkRlpwWlhjZ2UxeHVJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEc0Z0lIUnZjRG9nTnpod2VEdGNiaUFnZDJsa2RHZzZJRFkyTUhKd2VEdGNiaUFnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnWm14bGVDMWthWEpsWTNScGIyNDZJSEp2ZHp0Y2JpQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanRjYmlBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCemNHRmpaUzFpWlhSM1pXVnVPMXh1SUNCd1lXUmthVzVuT2lBeU5ISndlQ0F6TW5Kd2VEdGNiaUFnWW05eVpHVnlMWEpoWkdsMWN6b2dOekJ5Y0hnN1hHNGdJR0p2ZUMxemFHRmtiM2M2SURKd2VDQTFjSGdnTVRSd2VDQXdjSGdnY21kaVlTZ3dMQ0F3TENBd0xDQXdMakE0S1R0Y2JuMWNiaTUwYjJGemRFeGxablFnZTF4dUlDQmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPMXh1SUNCa2FYTndiR0Y1T2lCbWJHVjRPMXh1ZlZ4dUxuUnZZWE4wVkdWNGRDQjdYRzRnSUdadmJuUXRjMmw2WlRvZ01qUnljSGc3WEc0Z0lHWnZiblF0ZDJWcFoyaDBPaUJ1YjNKdFlXdzdYRzRnSUhSbGVIUXRkSEpoYm5ObWIzSnRPaUJqWVhCcGRHRnNhWHBsTzF4dUlDQnNaWFIwWlhJdGMzQmhZMmx1WnpvZ01IQjRPMXh1SUNCdFlYSm5hVzR0YkdWbWREb2dNVFp5Y0hnN1hHNTlYRzR1ZEc5aGMzUkNkRzVVWlhoMElIdGNiaUFnWm05dWRDMXphWHBsT2lBeU5ISndlRHRjYmlBZ1ptOXVkQzEzWldsbmFIUTZJRFV3TUR0Y2JpQWdkR1Y0ZEMxMGNtRnVjMlp2Y20wNklHTmhjR2wwWVd4cGVtVTdYRzRnSUd4bGRIUmxjaTF6Y0dGamFXNW5PaUF3Y0hnN1hHNGdJR052Ykc5eU9pQWpNREE0TldabU8xeHVmVnh1SWwwc0ltNWhiV1Z6SWpwYlhYMD0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5tb2R1bGUubGVzcycpO1xudmFyIHNfdG9hc3RCdG5UZXh0ID0gXCJ0b2FzdEJ0blRleHRfX0lWLVJxYVwiO1xudmFyIHNfdG9hc3RMZWZ0ID0gXCJ0b2FzdExlZnRfX0lWLVJxYVwiO1xudmFyIHNfdG9hc3RUZXh0ID0gXCJ0b2FzdFRleHRfX0lWLVJxYVwiO1xudmFyIHNfdG9hc3RWaWV3ID0gXCJ0b2FzdFZpZXdfX0lWLVJxYVwiO1xuO1xuZXhwb3J0c1sndG9hc3RCdG5UZXh0J10gPSBzX3RvYXN0QnRuVGV4dDtcbmV4cG9ydHNbJ3RvYXN0TGVmdCddID0gc190b2FzdExlZnQ7XG5leHBvcnRzWyd0b2FzdFRleHQnXSA9IHNfdG9hc3RUZXh0O1xuZXhwb3J0c1sndG9hc3RWaWV3J10gPSBzX3RvYXN0Vmlldzs7XG5tb2R1bGUuZXhwb3J0cyA9IHsndG9hc3RCdG5UZXh0JzpzX3RvYXN0QnRuVGV4dCwndG9hc3RMZWZ0JzpzX3RvYXN0TGVmdCwndG9hc3RUZXh0JzpzX3RvYXN0VGV4dCwndG9hc3RWaWV3JzpzX3RvYXN0Vmlld307XG4iLCAiLmNvbnRhaW5lcl9fNUs1emVHIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLUIxKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLnRvdGFsTWlsbGFnZVV0aWxfXzVLNXplRyB7XG4gIGNvbG9yOiB2YXIoLS1hcHAtQjEtTjIpO1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLnNpZ25hbF9fNUs1emVHIHtcbiAgbWFyZ2luOiAyMHJweCAzMnJweCAwIDMycnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuc2lnbmFsX181SzV6ZUcgLnNpZ25hbExlZnRfXzVLNXplRyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuc2lnbmFsX181SzV6ZUcgLnNpZ25hbFJpZ2h0X181SzV6ZUcge1xuICBmb250LXNpemU6IDMycnB4O1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLnNpZ25hbF9fNUs1emVHIC5zaWduYWxSaWdodF9fNUs1emVHIHRleHQge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogdmFyKC0tYXBwLUIxLU4yKTtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5jYXJJbmZvQ29udGVudF9fNUs1emVHIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQ0cnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuY2FySW5mb0NvbnRlbnRfXzVLNXplRyAuY2FySW5mb0xlZnRfXzVLNXplRyB7XG4gIG1hcmdpbi1sZWZ0OiAzNnJweDtcbiAgaGVpZ2h0OiAzNzhycHg7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuY2FySW5mb0NvbnRlbnRfXzVLNXplRyAuZGVmYXVsdENhcl9fNUs1emVHIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzc4cnB4O1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5jYXJJbmZvQ29udGVudF9fNUs1emVHIC5jYXJJbWdfXzVLNXplRyB7XG4gIHdpZHRoOiAzNzhycHg7XG4gIGhlaWdodDogMzc4cnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuY2FySW5mb0NvbnRlbnRfXzVLNXplRyAubnVtYmVyVmlld19fNUs1emVHIHtcbiAgbWFyZ2luLXRvcDogNDRycHg7XG4gIGhlaWdodDogNzZycHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5jYXJJbmZvQ29udGVudF9fNUs1emVHIC5udW1iZXJWaWV3X181SzV6ZUcgLnV0aWxfXzVLNXplRyB7XG4gIGZvbnQtZmFtaWx5OiBVcmJhbmlzdDtcbiAgZm9udC1zaXplOiAzMnJweDtcbiAgbGluZS1oZWlnaHQ6IDM4cnB4O1xuICBtYXJnaW4tdG9wOiAzMHJweDtcbiAgbWFyZ2luLWxlZnQ6IDRycHg7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuY2FySW5mb0NvbnRlbnRfXzVLNXplRyAubnVtYmVyVmlld19fNUs1emVHIC56ZXJvTnVtX181SzV6ZUcge1xuICBmb250LWZhbWlseTogVXJiYW5pc3Q7XG4gIGZvbnQtc2l6ZTogNjRycHg7XG4gIGxpbmUtaGVpZ2h0OiA3NnJweDtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5jYXJJbmZvQ29udGVudF9fNUs1emVHIC5zdWJUaXRsZV9fNUs1emVHIHtcbiAgbWFyZ2luLXRvcDogOHJweDtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cnB4O1xuICBjb2xvcjogdmFyKC0tYXBwLUIxLU4yKTtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5jYXJJbmZvQ29udGVudF9fNUs1emVHIC5jaGFuZ2VNb2RlQnRuX181SzV6ZUcge1xuICB3aWR0aDogMTQ2cnB4O1xuICBoZWlnaHQ6IDYwcnB4O1xuICBtYXJnaW4tdG9wOiAyNHJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLUIxLU4zKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuY2FySW5mb0NvbnRlbnRfXzVLNXplRyAuY2hhbmdlTW9kZUJ0bl9fNUs1emVHIC50ZXh0X181SzV6ZUcge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjhycHg7XG4gIG1hcmdpbi1yaWdodDogNHJweDtcbiAgY29sb3I6IHZhcigtLWFwcC1CMS1OMSk7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAuY2FySW5mb0NvbnRlbnRfXzVLNXplRyAuY2hhbmdlTW9kZUJ0bl9fNUs1emVHIC5pY29uX181SzV6ZUcge1xuICB3aWR0aDogMjRycHg7XG4gIGhlaWdodDogMjRycHg7XG59XG5cbi5jb250YWluZXJfXzVLNXplRyAudW5sb2NrX181SzV6ZUcge1xuICBib3R0b206IDI4cnB4O1xuICBoZWlnaHQ6IDE4MHJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMzJycHg7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLnVubG9ja19fNUs1emVHIC5nb19fNUs1emVHIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cnB4O1xuICBib3JkZXItcmFkaXVzOiAzMnJweDtcbiAgaGVpZ2h0OiAxMzJycHg7XG4gIHdpZHRoOiAxOTBycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLnVubG9ja19fNUs1emVHIC5vbmxpbmVHb19fNUs1emVHIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLU0xKTtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC51bmxvY2tfXzVLNXplRyAuZ29UZXh0X181SzV6ZUcge1xuICBmb250LXNpemU6IDQ4cnB4O1xuICBmb250LXdlaWdodDogMTAwMDtcbiAgbGluZS1oZWlnaHQ6IDU4cnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC51bmxvY2tfXzVLNXplRyAuZ29UZXh0T25saW5lX181SzV6ZUcge1xuICBjb2xvcjogdmFyKC0tYXBwLU0xKTtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5vcGVyYXRpb25fXzVLNXplRyB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjRycHgpO1xuICBtYXJnaW46IDAgMzJycHg7XG4gIGhlaWdodDogMTU2cnB4O1xuICBib3JkZXItcmFkaXVzOiAzMnJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLUIyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lcl9fNUs1emVHIC5vcGVyYXRpb25fXzVLNXplRyAub3BlcmF0aW9uTGlfXzVLNXplRyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzMuMzMlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLm9wZXJhdGlvbl9fNUs1emVHIC5vcGVyYXRpb25MaV9fNUs1emVHIGltYWdlIHtcbiAgd2lkdGg6IDQ4cnB4O1xuICBoZWlnaHQ6IDQ4cnB4O1xufVxuXG4uY29udGFpbmVyX181SzV6ZUcgLm9wZXJhdGlvbl9fNUs1emVHIC5vcGVyYXRpb25MaV9fNUs1emVHIHRleHQge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBtYXJnaW4tdG9wOiAxMnJweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenRCUVVGQk96czdPMEZCUVVFN096czdPenM3UVVGQlFUczdPenM3UVVGQlFUczdPenRCUVVGQk96czdPenRCUVVGQk96czdPenM3TzBGQlFVRTdPenM3T3pzN08wRkJRVUU3T3pzN096czdPenRCUVVGQk96czdPenM3T3p0QlFVRkJPenM3T3pzN096dEJRVUZCT3pzN096czdPenRCUVVGQk96czdPenM3UVVGQlFUczdPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3T3p0QlFVRkJPenM3T3pzN096dEJRVUZCT3pzN096dEJRVUZCT3pzN096czdPenM3T3pzN08wRkJRVUU3T3pzN096czdPenM3TzBGQlFVRTdPenM3UVVGQlFUczdPenM3T3p0QlFVRkJPenM3TzBGQlFVRTdPenM3T3pzN096czdRVUZCUVRzN096czdPenM3UVVGQlFUczdPenM3UVVGQlFTSXNJbk52ZFhKalpYTWlPbHNpVlhObGNuTXZaM1Z1YzIxdmEyVnlMMFJ2WTNWdFpXNTBjeTluYVhRdlEyOXZiR2x1WjAxcGMzUk5ZWFJRWVc1bGJDOXpjbU12Y0dGblpYTXZhRzl0WlM5cGJtUmxlQzV0YjJSMWJHVXViR1Z6Y3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXVZMjl1ZEdGcGJtVnlJSHRjYmlBZ2FHVnBaMmgwT2lBeE1EQjJhRHRjYmlBZ2QybGtkR2c2SURFd01IWjNPMXh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCMllYSW9MUzFoY0hBdFFqRXBPMXh1SUNBdWRHOTBZV3hOYVd4c1lXZGxWWFJwYkNCN1hHNGdJQ0FnWTI5c2IzSTZJSFpoY2lndExXRndjQzFDTVMxT01pazdYRzRnSUgxY2JpQWdMbk5wWjI1aGJDQjdYRzRnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjYmlBZ0lDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklITndZV05sTFdKbGRIZGxaVzQ3WEc0Z0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanRjYmlBZ0lDQnRZWEpuYVc0NklESXdjbkI0SURNeWNuQjRJREFnTXpKeWNIZzdYRzRnSUNBZ0xuTnBaMjVoYkV4bFpuUWdlMXh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN1hHNGdJQ0FnZlZ4dUlDQWdJQzV6YVdkdVlXeFNhV2RvZENCN1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklETXljbkI0TzF4dUlDQWdJQ0FnZEdWNGRDQjdYRzRnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWpoeWNIZzdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQjJZWElvTFMxaGNIQXRRakV0VGpJcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDNWpZWEpKYm1adlEyOXVkR1Z1ZENCN1hHNGdJQ0FnZDJsa2RHZzZJREV3TUNVN1hHNGdJQ0FnYldGeVoybHVMWFJ2Y0RvZ05EUnljSGc3WEc0Z0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh1SUNBZ0lHOTJaWEptYkc5M09pQm9hV1JrWlc0N1hHNWNiaUFnSUNBdVkyRnlTVzVtYjB4bFpuUWdlMXh1SUNBZ0lDQWdiV0Z5WjJsdUxXeGxablE2SURNMmNuQjRPMXh1SUNBZ0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdJQ0FnSUdac1pYZ3RaR2x5WldOMGFXOXVPaUJqYjJ4MWJXNDdYRzRnSUNBZ0lDQm9aV2xuYUhRNklETTNPSEp3ZUR0Y2JpQWdJQ0FnSUhvdGFXNWtaWGc2SURFN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTG1SbFptRjFiSFJEWVhJZ2UxeHVJQ0FnSUNBZ2QybGtkR2c2SURFd01DVTdYRzRnSUNBZ0lDQm9aV2xuYUhRNklETTNPSEp3ZUR0Y2JpQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0FnSUhSdmNEb2dNRHRjYmlBZ0lDQWdJR3hsWm5RNklEQTdYRzRnSUNBZ0lDQjZMV2x1WkdWNE9pQXdPMXh1SUNBZ0lIMWNiaUFnSUNBdVkyRnlTVzFuSUh0Y2JpQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0FnSUhkcFpIUm9PaUF6TnpoeWNIZzdYRzRnSUNBZ0lDQm9aV2xuYUhRNklETTNPSEp3ZUR0Y2JpQWdJQ0FnSUhKcFoyaDBPaUF3TzF4dUlDQWdJQ0FnWW05MGRHOXRPaUF3TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzV1ZFcxaVpYSldhV1YzSUh0Y2JpQWdJQ0FnSUcxaGNtZHBiaTEwYjNBNklEUTBjbkI0TzF4dUlDQWdJQ0FnYUdWcFoyaDBPaUEzTm5Kd2VEdGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3WEc0Z0lDQWdJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2djbTkzTzF4dUlDQWdJQ0FnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUJtYkdWNExYTjBZWEowTzF4dVhHNGdJQ0FnSUNBdWRYUnBiQ0I3WEc0Z0lDQWdJQ0FnSUdadmJuUXRabUZ0YVd4NU9pQlZjbUpoYm1semREdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF6TW5Kd2VEdGNiaUFnSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURNNGNuQjRPMXh1SUNBZ0lDQWdJQ0J0WVhKbmFXNHRkRzl3T2lBek1ISndlRHRjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNklEUnljSGc3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0F1ZW1WeWIwNTFiU0I3WEc0Z0lDQWdJQ0FnSUdadmJuUXRabUZ0YVd4NU9pQlZjbUpoYm1semREdGNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUEyTkhKd2VEdGNiaUFnSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURjMmNuQjRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDNXpkV0pVYVhSc1pTQjdYRzRnSUNBZ0lDQnRZWEpuYVc0dGRHOXdPaUE0Y25CNE8xeHVJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXlOSEp3ZUR0Y2JpQWdJQ0FnSUdadmJuUXRkMlZwWjJoME9pQTBNREE3WEc0Z0lDQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01qaHljSGc3WEc0Z0lDQWdJQ0JqYjJ4dmNqb2dkbUZ5S0MwdFlYQndMVUl4TFU0eUtUdGNiaUFnSUNCOVhHNGdJQ0FnTG1Ob1lXNW5aVTF2WkdWQ2RHNGdlMXh1SUNBZ0lDQWdkMmxrZEdnNklERTBObkp3ZUR0Y2JpQWdJQ0FnSUdobGFXZG9kRG9nTmpCeWNIZzdYRzRnSUNBZ0lDQnRZWEpuYVc0dGRHOXdPaUF5TkhKd2VEdGNiaUFnSUNBZ0lIQmhaR1JwYm1jNklEQTdYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtPaUIwY21GdWMzQmhjbVZ1ZER0Y2JpQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREUzY0hnN1hHNGdJQ0FnSUNCaWIzSmtaWEk2SURGd2VDQnpiMnhwWkNCMllYSW9MUzFoY0hBdFFqRXRUak1wTzF4dUlDQWdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnSUNBZ0lHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdYRzRnSUNBZ0lDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklHTmxiblJsY2p0Y2JpQWdJQ0FnSUM1MFpYaDBJSHRjYmlBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeU5ISndlRHRjYmlBZ0lDQWdJQ0FnWm05dWRDMTNaV2xuYUhRNklEWXdNRHRjYmlBZ0lDQWdJQ0FnYkdsdVpTMW9aV2xuYUhRNklESTRjbkI0TzF4dUlDQWdJQ0FnSUNCdFlYSm5hVzR0Y21sbmFIUTZJRFJ5Y0hnN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCMllYSW9MUzFoY0hBdFFqRXRUakVwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnTG1samIyNGdlMXh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dNalJ5Y0hnN1hHNGdJQ0FnSUNBZ0lHaGxhV2RvZERvZ01qUnljSGc3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTG5WdWJHOWpheUI3WEc0Z0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh1SUNBZ0lHSnZkSFJ2YlRvZ01qaHljSGc3WEc0Z0lDQWdhR1ZwWjJoME9pQXhPREJ5Y0hnN1hHNGdJQ0FnZDJsa2RHZzZJREV3TUNVN1hHNGdJQ0FnY0dGa1pHbHVaem9nTUNBek1uSndlRHRjYmlBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQWdJR1pzWlhndFpHbHlaV04wYVc5dU9pQnliM2M3WEc0Z0lDQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanRjYmlBZ0lDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklITndZV05sTFdKbGRIZGxaVzQ3WEc0Z0lDQWdlaTFwYm1SbGVEb2dNVHRjYmlBZ0lDQXVaMjhnZTF4dUlDQWdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnSUNBZ0lHMWhjbWRwYmkxc1pXWjBPaUF4Tm5Kd2VEdGNiaUFnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURNeWNuQjRPMXh1SUNBZ0lDQWdhR1ZwWjJoME9pQXhNekp5Y0hnN1hHNGdJQ0FnSUNCM2FXUjBhRG9nTVRrd2NuQjRPMXh1SUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJekl3TWpFeU5EdGNiaUFnSUNBZ0lHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdYRzRnSUNBZ0lDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklHTmxiblJsY2p0Y2JpQWdJQ0I5WEc0Z0lDQWdMbTl1YkdsdVpVZHZJSHRjYmlBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSFpoY2lndExXRndjQzFOTVNrN1hHNGdJQ0FnZlZ4dUlDQWdJQzVuYjFSbGVIUWdlMXh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPaUEwT0hKd2VEdGNiaUFnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPaUF4TURBd08xeHVJQ0FnSUNBZ2JHbHVaUzFvWldsbmFIUTZJRFU0Y25CNE8xeHVJQ0FnSUNBZ2JHVjBkR1Z5TFhOd1lXTnBibWM2SURCd2VEdGNiaUFnSUNCOVhHNGdJQ0FnTG1kdlZHVjRkRTl1YkdsdVpTQjdYRzRnSUNBZ0lDQmpiMnh2Y2pvZ2RtRnlLQzB0WVhCd0xVMHhLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F1YjNCbGNtRjBhVzl1SUh0Y2JpQWdJQ0IzYVdSMGFEb2dZMkZzWXlneE1EQjJkeUF0SURZMGNuQjRLVHRjYmlBZ0lDQnRZWEpuYVc0NklEQWdNekp5Y0hnN1hHNGdJQ0FnYUdWcFoyaDBPaUF4TlRaeWNIZzdYRzRnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTXpKeWNIZzdYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ2RtRnlLQzB0WVhCd0xVSXlLVHRjYmlBZ0lDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQWdJR0ZzYVdkdUxXbDBaVzF6T2lCalpXNTBaWEk3WEc0Z0lDQWdMbTl3WlhKaGRHbHZia3hwSUh0Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUdac1pYZzdYRzRnSUNBZ0lDQm1iR1Y0TFdScGNtVmpkR2x2YmpvZ1kyOXNkVzF1TzF4dUlDQWdJQ0FnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2p0Y2JpQWdJQ0FnSUdwMWMzUnBabmt0WTI5dWRHVnVkRG9nWTJWdWRHVnlPMXh1SUNBZ0lDQWdkMmxrZEdnNklETXpMak16SlR0Y2JpQWdJQ0FnSUdsdFlXZGxJSHRjYmlBZ0lDQWdJQ0FnZDJsa2RHZzZJRFE0Y25CNE8xeHVJQ0FnSUNBZ0lDQm9aV2xuYUhRNklEUTRjbkI0TzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdWNGRDQjdYRzRnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWpSeWNIZzdYRzRnSUNBZ0lDQWdJRzFoY21kcGJpMTBiM0E2SURFeWNuQjRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVJbDBzSW01aGJXVnpJanBiWFgwPSAqLyIsICJyZXF1aXJlKCcuL2luZGV4Lm1vZHVsZS5sZXNzJyk7XG52YXIgc19jYXJJbWcgPSBcImNhckltZ19fNUs1emVHXCI7XG52YXIgc19jYXJJbmZvQ29udGVudCA9IFwiY2FySW5mb0NvbnRlbnRfXzVLNXplR1wiO1xudmFyIHNfY2FySW5mb0xlZnQgPSBcImNhckluZm9MZWZ0X181SzV6ZUdcIjtcbnZhciBzX2NoYW5nZU1vZGVCdG4gPSBcImNoYW5nZU1vZGVCdG5fXzVLNXplR1wiO1xudmFyIHNfY29udGFpbmVyID0gXCJjb250YWluZXJfXzVLNXplR1wiO1xudmFyIHNfZGVmYXVsdENhciA9IFwiZGVmYXVsdENhcl9fNUs1emVHXCI7XG52YXIgc19nbyA9IFwiZ29fXzVLNXplR1wiO1xudmFyIHNfZ29UZXh0ID0gXCJnb1RleHRfXzVLNXplR1wiO1xudmFyIHNfZ29UZXh0T25saW5lID0gXCJnb1RleHRPbmxpbmVfXzVLNXplR1wiO1xudmFyIHNfaWNvbiA9IFwiaWNvbl9fNUs1emVHXCI7XG52YXIgc19udW1iZXJWaWV3ID0gXCJudW1iZXJWaWV3X181SzV6ZUdcIjtcbnZhciBzX29ubGluZUdvID0gXCJvbmxpbmVHb19fNUs1emVHXCI7XG52YXIgc19vcGVyYXRpb24gPSBcIm9wZXJhdGlvbl9fNUs1emVHXCI7XG52YXIgc19vcGVyYXRpb25MaSA9IFwib3BlcmF0aW9uTGlfXzVLNXplR1wiO1xudmFyIHNfc2lnbmFsID0gXCJzaWduYWxfXzVLNXplR1wiO1xudmFyIHNfc2lnbmFsTGVmdCA9IFwic2lnbmFsTGVmdF9fNUs1emVHXCI7XG52YXIgc19zaWduYWxSaWdodCA9IFwic2lnbmFsUmlnaHRfXzVLNXplR1wiO1xudmFyIHNfc3ViVGl0bGUgPSBcInN1YlRpdGxlX181SzV6ZUdcIjtcbnZhciBzX3RleHQgPSBcInRleHRfXzVLNXplR1wiO1xudmFyIHNfdG90YWxNaWxsYWdlVXRpbCA9IFwidG90YWxNaWxsYWdlVXRpbF9fNUs1emVHXCI7XG52YXIgc191bmxvY2sgPSBcInVubG9ja19fNUs1emVHXCI7XG52YXIgc191dGlsID0gXCJ1dGlsX181SzV6ZUdcIjtcbnZhciBzX3plcm9OdW0gPSBcInplcm9OdW1fXzVLNXplR1wiO1xuO1xuZXhwb3J0c1snY2FySW1nJ10gPSBzX2NhckltZztcbmV4cG9ydHNbJ2NhckluZm9Db250ZW50J10gPSBzX2NhckluZm9Db250ZW50O1xuZXhwb3J0c1snY2FySW5mb0xlZnQnXSA9IHNfY2FySW5mb0xlZnQ7XG5leHBvcnRzWydjaGFuZ2VNb2RlQnRuJ10gPSBzX2NoYW5nZU1vZGVCdG47XG5leHBvcnRzWydjb250YWluZXInXSA9IHNfY29udGFpbmVyO1xuZXhwb3J0c1snZGVmYXVsdENhciddID0gc19kZWZhdWx0Q2FyO1xuZXhwb3J0c1snZ28nXSA9IHNfZ287XG5leHBvcnRzWydnb1RleHQnXSA9IHNfZ29UZXh0O1xuZXhwb3J0c1snZ29UZXh0T25saW5lJ10gPSBzX2dvVGV4dE9ubGluZTtcbmV4cG9ydHNbJ2ljb24nXSA9IHNfaWNvbjtcbmV4cG9ydHNbJ251bWJlclZpZXcnXSA9IHNfbnVtYmVyVmlldztcbmV4cG9ydHNbJ29ubGluZUdvJ10gPSBzX29ubGluZUdvO1xuZXhwb3J0c1snb3BlcmF0aW9uJ10gPSBzX29wZXJhdGlvbjtcbmV4cG9ydHNbJ29wZXJhdGlvbkxpJ10gPSBzX29wZXJhdGlvbkxpO1xuZXhwb3J0c1snc2lnbmFsJ10gPSBzX3NpZ25hbDtcbmV4cG9ydHNbJ3NpZ25hbExlZnQnXSA9IHNfc2lnbmFsTGVmdDtcbmV4cG9ydHNbJ3NpZ25hbFJpZ2h0J10gPSBzX3NpZ25hbFJpZ2h0O1xuZXhwb3J0c1snc3ViVGl0bGUnXSA9IHNfc3ViVGl0bGU7XG5leHBvcnRzWyd0ZXh0J10gPSBzX3RleHQ7XG5leHBvcnRzWyd0b3RhbE1pbGxhZ2VVdGlsJ10gPSBzX3RvdGFsTWlsbGFnZVV0aWw7XG5leHBvcnRzWyd1bmxvY2snXSA9IHNfdW5sb2NrO1xuZXhwb3J0c1sndXRpbCddID0gc191dGlsO1xuZXhwb3J0c1snemVyb051bSddID0gc196ZXJvTnVtOztcbm1vZHVsZS5leHBvcnRzID0geydjYXJJbWcnOnNfY2FySW1nLCdjYXJJbmZvQ29udGVudCc6c19jYXJJbmZvQ29udGVudCwnY2FySW5mb0xlZnQnOnNfY2FySW5mb0xlZnQsJ2NoYW5nZU1vZGVCdG4nOnNfY2hhbmdlTW9kZUJ0biwnY29udGFpbmVyJzpzX2NvbnRhaW5lciwnZGVmYXVsdENhcic6c19kZWZhdWx0Q2FyLCdnbyc6c19nbywnZ29UZXh0JzpzX2dvVGV4dCwnZ29UZXh0T25saW5lJzpzX2dvVGV4dE9ubGluZSwnaWNvbic6c19pY29uLCdudW1iZXJWaWV3JzpzX251bWJlclZpZXcsJ29ubGluZUdvJzpzX29ubGluZUdvLCdvcGVyYXRpb24nOnNfb3BlcmF0aW9uLCdvcGVyYXRpb25MaSc6c19vcGVyYXRpb25MaSwnc2lnbmFsJzpzX3NpZ25hbCwnc2lnbmFsTGVmdCc6c19zaWduYWxMZWZ0LCdzaWduYWxSaWdodCc6c19zaWduYWxSaWdodCwnc3ViVGl0bGUnOnNfc3ViVGl0bGUsJ3RleHQnOnNfdGV4dCwndG90YWxNaWxsYWdlVXRpbCc6c190b3RhbE1pbGxhZ2VVdGlsLCd1bmxvY2snOnNfdW5sb2NrLCd1dGlsJzpzX3V0aWwsJ3plcm9OdW0nOnNfemVyb051bX07XG4iLCAiXG47KHR5cGVvZiB0eSA9PT0gdHlwZW9mIHd4KTsgLyogXHU1QjlBXHU0RTQ5XHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGLCBcdTkwN0ZcdTUxNERcdTg4QUJcdTUzOEJcdTdGMjlcdTZERjdcdTZEQzZcdTUxQjJcdTdBODEgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhZ2VJbnN0YW5jZUNvbnRleHQsIFBhZ2VJbnN0YW5jZSwgbGlmZWN5Y2xlLCB1c2VQYWdlRXZlbnQgfSBmcm9tICdAcmF5LWpzL3JheSc7XG5pbXBvcnQgeyBjcmVhdGVQYWdlQ29uZmlnIH0gZnJvbSAnQHJheS1qcy9ydW50aW1lJztcbmltcG9ydCBFbnRyeSBmcm9tICcuL2luZGV4JztcbmNvbnN0IGlzQ2xhc3NUeXBlID0gKGMpID0+IGMucHJvdG90eXBlICYmIHR5cGVvZiBjLnByb3RvdHlwZS5yZW5kZXIgPT09ICdmdW5jdGlvbic7XG5cbmNvbnN0IEVudHJ5V3JhcHBlciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgJGluc3RhbmNlID0gbmV3IFBhZ2VJbnN0YW5jZSgpXG4gIHVzZVBhZ2VFdmVudCgnb25Mb2FkJywgKCkgPT4ge1xuICAgIGxpZmVjeWNsZS5hZGRJbnN0YW5jZSgkaW5zdGFuY2UpXG4gICAgbGlmZWN5Y2xlLmVtaXQoeyBuYW1lOiAnb25Mb2FkJywgdW5pcXVlSWQ6ICRpbnN0YW5jZS51bmlxdWVJZCB9KVxuICB9KVxuICB1c2VQYWdlRXZlbnQoJ29uVW5sb2FkJywgKCkgPT4ge1xuICAgIGxpZmVjeWNsZS5lbWl0KHsgbmFtZTogJ29uVW5sb2FkJywgdW5pcXVlSWQ6ICRpbnN0YW5jZS51bmlxdWVJZCB9KVxuICAgIGxpZmVjeWNsZS5yZW1vdmVJbnN0YW5jZSgkaW5zdGFuY2UpXG4gIH0pXG4gIHVzZVBhZ2VFdmVudCgnb25TaG93JywgKCkgPT4ge1xuICAgIGxpZmVjeWNsZS5lbWl0KHsgbmFtZTogJ29uU2hvdycsIHVuaXF1ZUlkOiAkaW5zdGFuY2UudW5pcXVlSWQgfSlcbiAgfSlcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgUGFnZUluc3RhbmNlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyAkaW5zdGFuY2U6ICRpbnN0YW5jZSB9IH0sXG4gICAgaXNDbGFzc1R5cGUoRW50cnkpID8gUmVhY3QuY3JlYXRlRWxlbWVudChFbnRyeSwgeyByZWY6IHJlZiAsIC4uLnByb3BzfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEVudHJ5LCBwcm9wcylcbiAgKVxufSlcblxuUGFnZShjcmVhdGVQYWdlQ29uZmlnKEVudHJ5V3JhcHBlciwgJ3BhZ2VzL2hvbWUvaW5kZXgnKSk7IiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVmlldywgVGV4dCwgSW1hZ2UsIHJvdXRlciwgQnV0dG9uIH0gZnJvbSAnQHJheS1qcy9yYXknO1xuaW1wb3J0IHsgQWN0aW9uU2hlZXQgfSBmcm9tICdAcmF5LWpzL3NtYXJ0LXVpJztcbmltcG9ydCB7IHVzZURldmljZSwgdXNlUHJvcHMsIHVzZUFjdGlvbnMgfSBmcm9tICdAcmF5LWpzL3BhbmVsLXNkayc7XG5pbXBvcnQgVHlPdXRkb29yVXRpbHMgZnJvbSAnQHJheS1qcy90eS1vdXRkb29yLXV0aWxzJztcbmltcG9ydCB7IHNlbGVjdFN5c3RlbUluZm8gfSBmcm9tICdAL3JlZHV4L21vZHVsZXMvc3lzdGVtSW5mb1NsaWNlJztcbmltcG9ydCB7IGNvbW1vbkNoZWNrSW5mbyB9IGZyb20gJ0AvcmVkdXgvbW9kdWxlcy9jb21tb25JbmZvU2xpY2UnO1xuaW1wb3J0IHsgc2NhbGVNaWxlYWdlVmFsdWUsIGlzRHBFeGlzdCwgY2hlY2tQZXJtaXNzaW9ucyB9IGZyb20gJ0AvdXRpbHMnO1xuaW1wb3J0IHsgVW5sb2NrU2xpZGVyLCBUb3BCYXIsIFNpZ25hbFZpZXcsIEJhdHRlcnksIFJlY29yZCwgU2VydmljZVRvYXN0IH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCB1c2VCbGVPbmxpbmUgZnJvbSAnQC9ob29rcy91c2VCbGVPbmxpbmUnO1xuaW1wb3J0IFJlcyBmcm9tICdAL3Jlcyc7XG5pbXBvcnQgU3RyaW5ncyBmcm9tICdAL2kxOG4nO1xuaW1wb3J0IGRwQ29kZXMgZnJvbSAnQC9jb25zdGFudC9kcENvZGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IHsgZW5kdXJhbmNlTWlsZWFnZSwgbWlsZWFnZVRvdGFsLCBsZXZlbCwgdW5pdFNldCwgYmxlbG9ja1N3aXRjaCB9ID0gZHBDb2RlcztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN5c3RlbUluZm8gPSB1c2VTZWxlY3RvcihzZWxlY3RTeXN0ZW1JbmZvKTtcbiAgY29uc3QgeyBkZXZJbmZvLCBkcFNjaGVtYSB9ID0gdXNlRGV2aWNlKHN0YXRlID0+ICh7XG4gICAgZGV2SW5mbzogc3RhdGUuZGV2SW5mbyxcbiAgICBkcFNjaGVtYTogc3RhdGUuZHBTY2hlbWEsXG4gIH0pKTtcblxuICBjb25zdCBjb21tb25JbmZvID0gdXNlU2VsZWN0b3IoY29tbW9uQ2hlY2tJbmZvKTtcbiAgY29uc3QgeyBpblNlcnZpY2UsIGlzUGlkSGFkVkFTIH0gPSBjb21tb25JbmZvO1xuICBjb25zdCBkcFN0YXRlID0gdXNlUHJvcHMoKTtcbiAgY29uc3QgeyBkZXZJZCB9ID0gZGV2SW5mbztcbiAgY29uc3QgeyB0aGVtZSwgc3RhdHVzQmFySGVpZ2h0IH0gPSBzeXN0ZW1JbmZvO1xuICBjb25zdCBhY3Rpb25zID0gdXNlQWN0aW9ucygpO1xuICBjb25zdCB7IGlzQmxlT25saW5lID0gZmFsc2UgfSA9IHVzZUJsZU9ubGluZShkZXZJZCk7XG4gIC8vIFx1Njg2M1x1NEY0RFx1OTAwOVx1NjJFOVxuICBjb25zdCBbc2hvd0xldmVsU2VsZWN0LCBzZXRTaG93TGV2ZWxTZWxlY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBcdTY4NjNcdTRGNEREUFx1Njc5QVx1NEUzRVx1NjU3MFx1NjM2RVxuICBjb25zdCBsZXZlbEVudW1EYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBkcFNjaGVtYVtsZXZlbF0/LnByb3BlcnR5Py5yYW5nZSB8fCBbXTtcbiAgICByZXR1cm4gcmFuZ2UubWFwKGkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGksXG4gICAgICAgIG5hbWU6IFN0cmluZ3MuZ2V0RHBMYW5nKGkpLFxuICAgICAgICBjaGVja2VkOiBkcFN0YXRlW2xldmVsXSA9PT0gaSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFtkcFN0YXRlW2xldmVsXSwgZHBTY2hlbWFdKTtcblxuICAvLyBcdTYwM0JcdTkxQ0NcdTdBMEJcbiAgY29uc3QgdG90YWxNaWxlYWdlVmFsdWUgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBpc0RwRXhpc3QobWlsZWFnZVRvdGFsLCBkcFNjaGVtYSlcbiAgICAgICAgPyBzY2FsZU1pbGVhZ2VWYWx1ZShcbiAgICAgICAgICAgIG1pbGVhZ2VUb3RhbCxcbiAgICAgICAgICAgIGRwU3RhdGVbbWlsZWFnZVRvdGFsXSxcbiAgICAgICAgICAgIGRwU2NoZW1hLFxuICAgICAgICAgICAgZHBTdGF0ZVt1bml0U2V0XSAhPT0gJ2ttJ1xuICAgICAgICAgIClcbiAgICAgICAgOiAwLFxuICAgIFtkcFN0YXRlW21pbGVhZ2VUb3RhbF0sIGRwU3RhdGVbdW5pdFNldF0sIGRwU2NoZW1hXVxuICApO1xuXG4gIC8vIFx1N0VFRFx1ODIyQVx1OTFDQ1x1N0EwQlxuICBjb25zdCBlbmR1cmFuY2VNaWxlYWdlVmFsdWUgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBpc0RwRXhpc3QoZW5kdXJhbmNlTWlsZWFnZSwgZHBTY2hlbWEpXG4gICAgICAgID8gc2NhbGVNaWxlYWdlVmFsdWUoXG4gICAgICAgICAgICBlbmR1cmFuY2VNaWxlYWdlLFxuICAgICAgICAgICAgZHBTdGF0ZVtlbmR1cmFuY2VNaWxlYWdlXSxcbiAgICAgICAgICAgIGRwU2NoZW1hLFxuICAgICAgICAgICAgZHBTdGF0ZVt1bml0U2V0XSAhPT0gJ2ttJ1xuICAgICAgICAgIClcbiAgICAgICAgOiAwLFxuICAgIFtkcFN0YXRlW2VuZHVyYW5jZU1pbGVhZ2VdLCBkcFN0YXRlW3VuaXRTZXRdLCBkcFNjaGVtYV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8VG9wQmFyIC8+XG4gICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgey8qIFx1N0VFRFx1OEQzOVx1NjcwRFx1NTJBMVx1NUYzOVx1N0E5NyAqL31cbiAgICAgICAgPFNlcnZpY2VUb2FzdCBkZXZJZD17ZGV2SWR9IHRoZW1lPXt0aGVtZX0gc3RhdHVzQmFySGVpZ2h0PXtzdGF0dXNCYXJIZWlnaHR9IC8+XG5cbiAgICAgICAgey8qIFx1NEZFMVx1NTNGN1x1MzAwMVx1ODRERFx1NzI1OVx1NzJCNlx1NjAwMVx1MzAwMVx1NjAzQlx1OTFDQ1x1N0EwQlx1NjU3MCAqL31cbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmFsfT5cbiAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5zaWduYWxMZWZ0fT5cbiAgICAgICAgICAgIDxTaWduYWxWaWV3IGlzQmxlT25saW5lPXtpc0JsZU9ubGluZX0gLz5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAge2lzRHBFeGlzdChtaWxlYWdlVG90YWwsIGRwU2NoZW1hKSAmJiAoXG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAge3RvdGFsTWlsZWFnZVZhbHVlfVxuICAgICAgICAgICAgICA8VGV4dD57ZHBTdGF0ZVt1bml0U2V0XSA9PT0gJ2ttJyA/ICdLbScgOiAnTWlsZSd9PC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVmlldz5cbiAgICAgICAgey8qIFx1NzUzNVx1NkM2MFx1MzAwMVx1OEY2Nlx1OEY4Nlx1NEZFMVx1NjA2RiAqL31cbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMuY2FySW5mb0NvbnRlbnR9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtkZXZJbmZvPy5pY29uVXJsIHx8IFJlcy5kZWZhdWx0Q2FyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtkZXZJbmZvPy5pY29uVXJsID8gc3R5bGVzLmNhckltZyA6IHN0eWxlcy5kZWZhdWx0Q2FyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMuY2FySW5mb0xlZnR9PlxuICAgICAgICAgICAgPEJhdHRlcnkgLz5cbiAgICAgICAgICAgIHtpc0RwRXhpc3QoZW5kdXJhbmNlTWlsZWFnZSwgZHBTY2hlbWEpICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJWaWV3fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17c3R5bGVzLnplcm9OdW19PntlbmR1cmFuY2VNaWxlYWdlVmFsdWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudXRpbH0+e2RwU3RhdGVbdW5pdFNldF0gPT09ICdrbScgPyAnS20nIDogJ01pbGUnfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMuc3ViVGl0bGV9PntTdHJpbmdzLmdldExhbmcoJ2VuZHVyYW5jZU1pbGVhZ2UnKX08L1RleHQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtpc0RwRXhpc3QobGV2ZWwsIGRwU2NoZW1hKSAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbmdlTW9kZUJ0bn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TGV2ZWxTZWxlY3QodHJ1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57U3RyaW5ncy5nZXREcExhbmcoZHBTdGF0ZVtsZXZlbF0pfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICAgICAgICBzcmM9e3RoZW1lID09PSAnZGFyaycgPyBSZXMubW9kZUNoYW5nZSA6IFJlcy5tb2RlQ2hhbmdlTGlnaHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICB7LyogXHU1RkVCXHU2Mzc3XHU2NENEXHU0RjVDICovfVxuICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5vcGVyYXRpb259PlxuICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vcGVyYXRpb25MaX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAoKSA9PiBUeU91dGRvb3JVdGlscy5qdW1wU3ViUGFnZS50b1VuaXZlcnNhbFRhcmdldGluZyh7IGRldmljZUlkOiBkZXZJbmZvPy5kZXZJZCB9KSAvLyBcdTVCOUFcdTRGNERcdTRFOENcdTdFQTdcdTk4NzVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGVtZSA9PT0gJ2RhcmsnID8gUmVzLmljb25Mb2NhdGlvbiA6IFJlcy5pY29uTG9jYXRpb25MaWdodH0gLz5cbiAgICAgICAgICAgIDxUZXh0PntTdHJpbmdzLmdldExhbmcoJ2xvY2F0aW9uQ2FyJyl9PC9UZXh0PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMub3BlcmF0aW9uTGl9XG4gICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgKCkgPT4gVHlPdXRkb29yVXRpbHMuanVtcFN1YlBhZ2UudG9WZWhpY2xlRXhhbWluZSh7IGRldmljZUlkOiBkZXZJZCwgaXNFbmFibGU6ICcnIH0pIC8vIFx1OEY2Nlx1OEY4Nlx1NEY1M1x1NjhDMFxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoZW1lID09PSAnZGFyaycgPyBSZXMuaWNvblRyYWNrcyA6IFJlcy5pY29uVHJhY2tzTGlnaHR9IC8+XG4gICAgICAgICAgICA8VGV4dD57U3RyaW5ncy5nZXRMYW5nKCd2ZWhpY2xlRXhhbWluZScpfTwvVGV4dD5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMub3BlcmF0aW9uTGl9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvbW9yZScpfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoZW1lID09PSAnZGFyaycgPyBSZXMuaWNvblNldCA6IFJlcy5pY29uU2V0TGlnaHR9IC8+XG4gICAgICAgICAgICA8VGV4dD57U3RyaW5ncy5nZXRMYW5nKCdtb3JlJyl9PC9UZXh0PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICB7LyogXHU5QTkxXHU4ODRDXHU4QkIwXHU1RjU1ICovfVxuICAgICAgICA8UmVjb3JkXG4gICAgICAgICAgZGV2aWNlSWQ9e2RldklkfVxuICAgICAgICAgIG1pbGVhZ2VVbml0PXtkcFN0YXRlW3VuaXRTZXRdfVxuICAgICAgICAgIGRwU2NoZW1hPXtkcFNjaGVtYX1cbiAgICAgICAgICBpc0ttPXtkcFN0YXRlW3VuaXRTZXRdICE9PSAna20nfVxuICAgICAgICAvPlxuICAgICAgICB7LyogXHU2RUQxXHU1MkE4XHU1RjAwXHU5NTAxICovfVxuICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy51bmxvY2t9PlxuICAgICAgICAgIHtpc0RwRXhpc3QoYmxlbG9ja1N3aXRjaCwgZHBTY2hlbWEpICYmIChcbiAgICAgICAgICAgIDxVbmxvY2tTbGlkZXJcbiAgICAgICAgICAgICAgaXNCbGVPbmxpbmU9e2lzQmxlT25saW5lfVxuICAgICAgICAgICAgICBpblNlcnZpY2U9e2luU2VydmljZX1cbiAgICAgICAgICAgICAgaXNQaWRIYWRWQVM9e2lzUGlkSGFkVkFTfVxuICAgICAgICAgICAgICBkcFNjaGVtYT17ZHBTY2hlbWF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmdvfSAke2RldkluZm8/LmlzT25saW5lICYmIHN0eWxlcy5vbmxpbmVHb31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAvLyBcdTlBOTFcdTg4NENcdTVCRkNcdTgyMkEgQVBQXHU1MzlGXHU3NTFGXHU0RThDXHU3RUE3XHU5ODc1XG4gICAgICAgICAgICAgIHR5LnJvdXRlcih7XG4gICAgICAgICAgICAgICAgdXJsOiBgdHV5YVNtYXJ0Oi8vdHNvZF9jeWNsaW5nX25hdmlnYXRpb24/ZGV2SWQ9JHtkZXZJbmZvPy5kZXZJZH1gLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lID09PSAnZGFyaycgPyAnIzIwMjEyNCcgOiAnI2ZmZicsXG4gICAgICAgICAgICAgIHdpZHRoOiBpc0RwRXhpc3QoYmxlbG9ja1N3aXRjaCwgZHBTY2hlbWEpID8gJzk1cHgnIDogJzEwMCUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2Ake3N0eWxlcy5nb1RleHR9ICR7ZGV2SW5mbz8uaXNPbmxpbmUgJiYgc3R5bGVzLmdvVGV4dE9ubGluZX1gfT5cbiAgICAgICAgICAgICAgR09cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICAgIDxBY3Rpb25TaGVldFxuICAgICAgICBzaG93PXtzaG93TGV2ZWxTZWxlY3R9XG4gICAgICAgIGFjdGlvbnM9e2xldmVsRW51bURhdGF9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dMZXZlbFNlbGVjdChmYWxzZSl9XG4gICAgICAgIG9uU2VsZWN0PXtkID0+XG4gICAgICAgICAgY2hlY2tQZXJtaXNzaW9ucyh7XG4gICAgICAgICAgICBkcENvZGU6IGxldmVsLFxuICAgICAgICAgICAgZHBTY2hlbWEsXG4gICAgICAgICAgICBpblNlcnZpY2UsXG4gICAgICAgICAgICBpc1BpZEhhZFZBUyxcbiAgICAgICAgICAgIGlzQmxlT25saW5lLFxuICAgICAgICAgICAgc3VjY2Vzc0NiOiAoKSA9PiBhY3Rpb25zW2xldmVsXS5zZXQoZC5kZXRhaWwuaWQpLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsVGV4dD17U3RyaW5ncy5nZXRMYW5nKCdjYW5jZWwnKX1cbiAgICAgIC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGV4dCwgVmlldyB9IGZyb20gJ0ByYXktanMvcmF5JztcbmltcG9ydCB7IHVzZURldmljZSB9IGZyb20gJ0ByYXktanMvcGFuZWwtc2RrJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNlbGVjdFN5c3RlbUluZm9CeUtleSB9IGZyb20gJ0AvcmVkdXgvbW9kdWxlcy9zeXN0ZW1JbmZvU2xpY2UnO1xuaW1wb3J0IHsgdG9TdmdDc3NCYWNrZ3JvdW5kIH0gZnJvbSAnQC91dGlscyc7XG5pbXBvcnQgeyBzZWxlY3RDYXIgfSBmcm9tICdAL2NvbnN0YW50L3N2Z0NvbmZpZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmxlc3MnO1xuXG5leHBvcnQgY29uc3QgVG9wQmFyID0gKCkgPT4ge1xuICBjb25zdCBzdGF0dXNCYXJIZWlnaHQgPSB1c2VTZWxlY3RvcihzZWxlY3RTeXN0ZW1JbmZvQnlLZXkoJ3N0YXR1c0JhckhlaWdodCcpKTtcbiAgY29uc3QgZGV2SW5mbyA9IHVzZURldmljZShkZXZpY2UgPT4gZGV2aWNlLmRldkluZm8pO1xuICBjb25zdCBUaGVtZUluZm8gPSB0eS5nZXRUaGVtZUluZm8oKTtcblxuICBjb25zdCBjaGFuZ2VEZXZpY2UgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgdHkub3V0ZG9vci5zd2l0Y2hEZXZpY2Uoe1xuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnXHU1MjA3XHU2MzYyXHU4QkJFXHU1OTA3XHU2MjEwXHU1MjlGJyk7XG4gICAgICB9LFxuICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnXHU1MjA3XHU2MzYyXHU4QkJFXHU1OTA3XHU1OTMxXHU4RDI1Jyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LCA1MDApO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFyV3JhcH0+XG4gICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNCYXJ9IHN0eWxlPXt7IGhlaWdodDogYCR7c3RhdHVzQmFySGVpZ2h0fXB4YCB9fSAvPlxuICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFyfSBvbkNsaWNrPXtjaGFuZ2VEZXZpY2V9PlxuICAgICAgICA8VGV4dD57ZGV2SW5mby5uYW1lIHx8ICcnfTwvVGV4dD5cbiAgICAgICAgPFZpZXdcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udG9TdmdDc3NCYWNrZ3JvdW5kKHNlbGVjdENhcih7IGNvbG9yOiBUaGVtZUluZm9bJy0tYXBwLUIxLU4zJ10gfSkpLFxuICAgICAgICAgICAgd2lkdGg6ICcyNHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzI0cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9WaWV3PlxuICApO1xufTtcbiIsICJleHBvcnQgY29uc3Qgc2lnbmFsNEcgPSAoeyBjb2xvciB9KSA9PiB7XG4gIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbD1cIm5vbmVcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cIm1hc3Rlcl9zdmcwXzU0XzM3OTZcIj48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgcng9XCIwXCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD1cInVybCgjbWFzdGVyX3N2ZzBfNTRfMzc5NilcIj48Zz48cGF0aCBkPVwiTTMsMTEuMDgwNEMzLDExLjA4MDQsNSwxMS4wODA0LDUsMTEuMDgwNEM1LDExLjA4MDQsNSwxNC45NzQ3LDUsMTQuOTc0N0M1LDE0Ljk3NDcsMywxNC45NzQ3LDMsMTQuOTc0N0MzLDE0Ljk3NDcsMywxMS4wODA0LDMsMTEuMDgwNFpNNi40NzgxNSw4Ljk1NjM2QzYuNDc4MTUsOC45NTYzNiw4LjQ3ODE1LDguOTU2MzYsOC40NzgxNSw4Ljk1NjM2QzguNDc4MTUsOC45NTYzNiw4LjQ3ODE1LDE0Ljk3NDcsOC40NzgxNSwxNC45NzQ3QzguNDc4MTUsMTQuOTc0Nyw2LjQ3ODE1LDE0Ljk3NDcsNi40NzgxNSwxNC45NzQ3QzYuNDc4MTUsMTQuOTc0Nyw2LjQ3ODE1LDguOTU2MzYsNi40NzgxNSw4Ljk1NjM2QzYuNDc4MTUsOC45NTYzNiw2LjQ3ODE1LDguOTU2MzYsNi40NzgxNSw4Ljk1NjM2Wk05Ljk1NjMsNi40NzgxNUM5Ljk1NjMsNi40NzgxNSwxMS45NTYzLDYuNDc4MTUsMTEuOTU2Myw2LjQ3ODE1QzExLjk1NjMsNi40NzgxNSwxMS45NTYzLDE0Ljk3NDcsMTEuOTU2MywxNC45NzQ3QzExLjk1NjMsMTQuOTc0Nyw5Ljk1NjMsMTQuOTc0Nyw5Ljk1NjMsMTQuOTc0N0M5Ljk1NjMsMTQuOTc0Nyw5Ljk1NjMsNi40NzgxNSw5Ljk1NjMsNi40NzgxNVpNMTMuNDM2Myw0QzEzLjQzNjMsNCwxNS40MzYzLDQsMTUuNDM2Myw0QzE1LjQzNjMsNCwxNS40MzYzLDE0Ljk3NDcsMTUuNDM2MywxNC45NzQ3QzE1LjQzNjMsMTQuOTc0NywxMy40MzYzLDE0Ljk3NDcsMTMuNDM2MywxNC45NzQ3QzEzLjQzNjMsMTQuOTc0NywxMy40MzYzLDQsMTMuNDM2Myw0Wk0zLjIxMjc4LDEuMDg4MDA4MUMzLjIxMjc4LDEuMDg4MDA4MSwxLDMuOTU0NTYsMSwzLjk1NDU2QzEsMy45NTQ1NiwxLDQuNjAyMDUsMSw0LjYwMjA1QzEsNC42MDIwNSwzLjE4NzYzLDQuNjAyMDUsMy4xODc2Myw0LjYwMjA1QzMuMTg3NjMsNC42MDIwNSwzLjE4NzYzLDUuNTc2NDIsMy4xODc2Myw1LjU3NjQyQzMuMTg3NjMsNS41NzY0MiwzLjg0MTQxLDUuNTc2NDIsMy44NDE0MSw1LjU3NjQyQzMuODQxNDEsNS41NzY0MiwzLjg0MTQxLDQuNjAyMDUsMy44NDE0MSw0LjYwMjA1QzMuODQxNDEsNC42MDIwNSw0LjUyMDMyOTk5OTk5OTk5OTUsNC42MDIwNSw0LjUyMDMyOTk5OTk5OTk5OTUsNC42MDIwNUM0LjUyMDMyOTk5OTk5OTk5OTUsNC42MDIwNSw0LjUyMDMyOTk5OTk5OTk5OTUsNC4wNTUxNCw0LjUyMDMyOTk5OTk5OTk5OTUsNC4wNTUxNEM0LjUyMDMyOTk5OTk5OTk5OTUsNC4wNTUxNCwzLjg0MTQxLDQuMDU1MTQsMy44NDE0MSw0LjA1NTE0QzMuODQxNDEsNC4wNTUxNCwzLjg0MTQxLDEuMDg4MDA4MSwzLjg0MTQxLDEuMDg4MDA4MUMzLjg0MTQxLDEuMDg4MDA4MSwzLjIxMjc4LDEuMDg4MDA4MSwzLjIxMjc4LDEuMDg4MDA4MVpNMy4xNjg3NywxLjk1NTUxN0MzLjE2ODc3LDEuOTU1NTE3LDMuMTg3NjMsMS45NTU1MTcsMy4xODc2MywxLjk1NTUxN0MzLjE4NzYzLDEuOTU1NTE3LDMuMTg3NjMsNC4wNTUxNCwzLjE4NzYzLDQuMDU1MTRDMy4xODc2Myw0LjA1NTE0LDEuNTU5NDgsNC4wNTUxNCwxLjU1OTQ4LDQuMDU1MTRDMS41NTk0OCw0LjA1NTE0LDMuMTY4NzcsMS45NTU1MTcsMy4xNjg3NywxLjk1NTUxN1pNNy4wMjYxLDFDNi4zNjYwNCwxLDUuODM3OTksMS4yMjYzMDcsNS40NDgyNCwxLjY5MTQ5M0M1LjA3NzM1LDIuMTI1MjUwMDAwMDAwMDAwMyw0Ljg5NTA0OTk5OTk5OTk5OTUsMi42Nzg0NCw0Ljg5NTA0OTk5OTk5OTk5OTUsMy4zNTEwOEM0Ljg5NTA0OTk5OTk5OTk5OTUsNC4wMTc0MTk5OTk5OTk5OTk1LDUuMDc3MzUsNC41NjQzMyw1LjQ0ODI0LDQuOTg1NTFDNS44NDQyOCw1LjQzODEzLDYuMzk3NDcsNS42NjQ0Myw3LjExNDExLDUuNjY0NDNDNy41MDM4Niw1LjY2NDQzLDcuODYyMTgsNS42MTQxNCw4LjE4OTA3MDAwMDAwMDAwMSw1LjUxMzU2QzguNDk3MSw1LjQxMjk4LDguNzY3NDEsNS4yNzQ2OCw5LDUuMDkyMzhDOSw1LjA5MjM4LDksMy4yMDY0OSw5LDMuMjA2NDlDOSwzLjIwNjQ5LDcuMDc2MzksMy4yMDY0OSw3LjA3NjM5LDMuMjA2NDlDNy4wNzYzOSwzLjIwNjQ5LDcuMDc2MzksMy43OTExMiw3LjA3NjM5LDMuNzkxMTJDNy4wNzYzOSwzLjc5MTEyLDguMzE0NzksMy43OTExMiw4LjMxNDc5LDMuNzkxMTJDOC4zMTQ3OSwzLjc5MTEyLDguMzE0NzksNC43NjU0OSw4LjMxNDc5LDQuNzY1NDlDOC4xNjM5MjAwMDAwMDAwMDEsNC44NTk3OSw4LjAwMDQ4LDQuOTM1MjIsNy44MTE4OSw0Ljk4NTUxQzcuNjE3MDEsNS4wMzU4LDcuNDA5NTcsNS4wNjcyMyw3LjE4OTU1LDUuMDY3MjNDNi42MzAwNyw1LjA2NzIzLDYuMjE1MTcsNC45MTAwOCw1Ljk1MTE1LDQuNTk1NzZDNS42OTk2OSw0LjMwNjU5LDUuNTgwMjUsMy44OTE3LDUuNTgwMjUsMy4zNTEwOEM1LjU4MDI1LDIuNzk3ODgsNS43MTIyNywyLjM2NDEzMDAwMDAwMDAwMDMsNS45ODg4NiwyLjA0OTgxQzYuMjQ2NiwxLjc0ODA2OSw2LjU5MjM1LDEuNjAzNDg1LDcuMDI2MSwxLjYwMzQ4NUM3LjM3ODE0LDEuNjAzNDg1LDcuNjY3MzEsMS42Nzg5Miw3Ljg4MTA0LDEuODM2MDc4QzguMDk0NzcsMS45ODY5NDksOC4yMzMwNywyLjIxMzI2LDguMjk1OTMsMi41MTQ5OTk5OTk5OTk5OTk3QzguMjk1OTMsMi41MTQ5OTk5OTk5OTk5OTk3LDguOTg3NDMsMi41MTQ5OTk5OTk5OTk5OTk3LDguOTg3NDMsMi41MTQ5OTk5OTk5OTk5OTk3QzguOTA1NywyLjAxMjA4OTk5OTk5OTk5OTcsOC43MDQ1NCwxLjY0MTIwMiw4LjM4MzkzOTk5OTk5OTk5OSwxLjM4OTc1MUM4LjA1MDc3LDEuMTI1NzI2LDcuNTk4MTYsMSw3LjAyNjEsMVpcIiBmaWxsPVwiJHtjb2xvcn1cIiBmaWxsLW9wYWNpdHk9XCIxXCIvPjwvZz48L2c+PC9zdmc+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBzaWduYWxXaWZpID0gKHsgY29sb3IgfSkgPT4ge1xuICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGZpbGw9XCJub25lXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48ZGVmcz48Y2xpcFBhdGggaWQ9XCJtYXN0ZXJfc3ZnMF82MF83NzE0XCI+PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMFwiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9XCJ1cmwoI21hc3Rlcl9zdmcwXzYwXzc3MTQpXCI+PGc+PHBhdGggZD1cIk0xMi41MTI1MjI0NTExNzE4NzYsNC41MDM0N0MxMS40NzQ5OTI0NTExNzE4NzUsMy40NTc3MiwxMC4xODM1ODI0NTExNzE4NzYsMi43MDA5MDcsOC43NjU0OTI0NTExNzE4NzUsMi4zMDc1NTVDNy4zNDc0MTI0NTExNzE4NzUsMS45MTQyMDMzOTk5OTk5OTk5LDUuODUxNTUyNDUxMTcxODc1LDEuODk3ODg0LDQuNDI1MjYyNDUxMTcxODc1LDIuMjYwMjA1QzQuNDI1MjYyNDUxMTcxODc1LDIuMjYwMjA1LDQuNjY2MDA3NDUxMTcxODc1LDMuMzA1ODcsNC42NjYwMDc0NTExNzE4NzUsMy4zMDU4N0M1LjkxNjM0MjQ1MTE3MTg3NSwyLjk4OTAwNiw3LjIyNzM0MjQ1MTE3MTg3NSwzLjAwMzEyLDguNDcwNjAyNDUxMTcxODc0LDMuMzQ2ODI5OTk5OTk5OTk5N0M5LjcxMzg1MjQ1MTE3MTg3NCwzLjY5MDUzLDEwLjg0NjcxMjQ1MTE3MTg3NSw0LjM1MjA1LDExLjc1ODIwMjQ1MTE3MTg3Niw1LjI2NjU2QzEyLjY2OTY5MjQ1MTE3MTg3NCw2LjE4MTA4LDEzLjMyODU0MjQ1MTE3MTg3Niw3LjMxNzIzLDEzLjY3MDIyMjQ1MTE3MTg3Niw4LjU2MzczQzE0LjAxMTkxMjQ1MTE3MTg3Niw5LjgxMDIyMDAwMDAwMDAwMSwxNC4wMjQ2OTI0NTExNzE4NzUsMTEuMTI0MywxMy43MDczMzI0NTExNzE4NzQsMTIuMzc3MkMxMy43MDczMzI0NTExNzE4NzQsMTIuMzc3MiwxNC43NDE2NjI0NTExNzE4NzUsMTIuNjE4NSwxNC43NDE2NjI0NTExNzE4NzUsMTIuNjE4NUMxNS4xMDE0NjI0NTExNzE4NzUsMTEuMTg4MTMsMTUuMDg1MTYyNDUxMTcxODc1LDkuNjg4NjcsMTQuNjk0NDYyNDUxMTcxODc1LDguMjY2NDNDMTQuMzAzODIyNDUxMTcxODc1LDYuODQ0MTgsMTMuNTUyMDYyNDUxMTcxODc0LDUuNTQ3NzEsMTIuNTEyNTIyNDUxMTcxODc2LDQuNTAzNDdaTTUuMDA0ODM0NDUxMTcxODc1LDQuNzM1ODRDNS4wMDQ4MzQ0NTExNzE4NzUsNC43MzU4NCw1LjI0NTU4MDQ1MTE3MTg3NSw1Ljc3MjU2LDUuMjQ1NTgwNDUxMTcxODc1LDUuNzcyNTZDNi4wNzk4NDI0NTExNzE4NzUsNS41NDc5NDAwMDAwMDAwMDA1LDYuOTU4NDkyNDUxMTcxODc1LDUuNTQ4MTcsNy43OTI2MjI0NTExNzE4NzUsNS43NzMyNUM4LjYyNjc2MjQ1MTE3MTg3NCw1Ljk5ODMyLDkuMzg2NzkyNDUxMTcxODc1LDYuNDQwMjUsOS45OTU4MDI0NTExNzE4NzYsNy4wNTQzQzEwLjYwNDgxMjQ1MTE3MTg3NCw3LjY2ODM2LDExLjA0MTE5MjQ1MTE3MTg3NCw4LjQzMjc3LDExLjI2MDc5MjQ1MTE3MTg3NSw5LjI3MDE3QzExLjQ4MDQwMjQ1MTE3MTg3NSwxMC4xMDc1NywxMS40NzU0MjI0NTExNzE4NzUsMTAuOTg4MjYsMTEuMjQ2MzgyNDUxMTcxODc2LDExLjgyMzEyQzExLjI0NjM4MjQ1MTE3MTg3NiwxMS44MjMxMiwxMi4yODA2OTI0NTExNzE4NzUsMTIuMDY0NCwxMi4yODA2OTI0NTExNzE4NzUsMTIuMDY0NEMxMi41NTA1NTI0NTExNzE4NzUsMTEuMDUzMzMsMTIuNTUwODgyNDUxMTcxODc1LDkuOTg4OTQsMTIuMjgxNjQyNDUxMTcxODc1LDguOTc3NjdDMTIuMDEyNDEyNDUxMTcxODc2LDcuOTY2NDEsMTEuNDgzMDUyNDUxMTcxODc2LDcuMDQzNywxMC43NDY0ODI0NTExNzE4NzUsNi4zMDE3OUMxMC4wMDk5MTI0NTExNzE4NzUsNS41NTk4OSw5LjA5MTk1MjQ1MTE3MTg3NCw1LjAyNDc4OTk5OTk5OTk5OSw4LjA4NDM3MjQ1MTE3MTg3NSw0Ljc0OTk4QzcuMDc2NzkyNDUxMTcxODc1LDQuNDc1MTgsNi4wMTQ4OTI0NTExNzE4NzUsNC40NzAzLDUuMDA0ODM0NDUxMTcxODc1LDQuNzM1ODRaTTkuODgyMTYyNDUxMTcxODc2LDExLjQ3NDU2QzEwLjA1MjU2MjQ1MTE3MTg3NSwxMC44NzQ4MSwxMC4wNTk3NDI0NTExNzE4NzUsMTAuMjQwMjgsOS45MDI5NTI0NTExNzE4NzQsOS42MzY4MDAwMDAwMDAwMDFDOS43NDYxNjI0NTExNzE4NzUsOS4wMzMzMyw5LjQzMTEyMjQ1MTE3MTg3NSw4LjQ4MjkxLDguOTkwNTEyNDUxMTcxODc0LDguMDQyNjM5OTk5OTk5OTk5QzguNTQ3NTQyNDUxMTcxODc1LDcuNjA5NTIsNy45OTk3NzI0NTExNzE4NzUsNy4yOTkzNyw3LjQwMTAyMjQ1MTE3MTg3NSw3LjE0MjY3QzYuODAyMjgyNDUxMTcxODc1LDYuOTg1OTgsNi4xNzMxNjI0NTExNzE4NzUsNi45ODgxMyw1LjU3NTQ5MjQ1MTE3MTg3NTUsNy4xNDg5MUM1LjU3NTQ5MjQ1MTE3MTg3NTUsNy4xNDg5MSw1LjgxNjIzMjQ1MTE3MTg3NSw4LjE5NDU2OTk5OTk5OTk5OSw1LjgxNjIzMjQ1MTE3MTg3NSw4LjE5NDU2OTk5OTk5OTk5OUM2LjIzOTM1MjQ1MTE3MTg3NSw4LjA3MTc0LDYuNjg3NjAyNDUxMTcxODc1LDguMDY1MDAwMDAwMDAwMDAxLDcuMTE0MjEyNDUxMTcxODc1LDguMTc1MDRDNy41NDA4MTI0NTExNzE4NzUsOC4yODUwOCw3LjkzMDEzMjQ1MTE3MTg3NSw4LjUwNzg4LDguMjQxNTIyNDUxMTcxODc1LDguODIwMThDOC41NTA2OTI0NTExNzE4NzUsOS4xMzU3NjAwMDAwMDAwMDEsOC43NzEyNDI0NTExNzE4NzYsOS41Mjc1OSw4Ljg4MDg0MjQ1MTE3MTg3Niw5Ljk1NjAxOTk5OTk5OTk5OUM4Ljk5MDQ0MjQ1MTE3MTg3NSwxMC4zODQ0Niw4Ljk4NTIxMjQ1MTE3MTg3NiwxMC44MzQzMSw4Ljg2NTY4MjQ1MTE3MTg3NSwxMS4yNjAwN0M4Ljg2NTY4MjQ1MTE3MTg3NSwxMS4yNjAwNyw5Ljg4MjE2MjQ1MTE3MTg3NiwxMS40NzQ1Niw5Ljg4MjE2MjQ1MTE3MTg3NiwxMS40NzQ1NlpcIiBmaWxsPVwiJHtjb2xvcn1cIiBmaWxsLW9wYWNpdHk9XCIxXCIvPjwvZz48Zz48cGF0aCBkPVwiTTcuMTQ3NzI5NDIzODI4MTI1LDkuODQ3NTc2ODcwMTE3MTg3QzcuMDM1OTQ5NDIzODI4MTI1LDkuNzM1Mzc2ODcwMTE3MTg4LDYuOTAzMTg5NDIzODI4MTI1LDkuNjQ2MzY2ODcwMTE3MTg4LDYuNzU3MDU5NDIzODI4MTI1LDkuNTg1NjM2ODcwMTE3MTg4QzYuNjEwOTI5NDIzODI4MTI1LDkuNTI0OTA2ODcwMTE3MTg3LDYuNDU0Mjg5NDIzODI4MTI1LDkuNDkzNjQ2ODcwMTE3MTg3LDYuMjk2MDk5NDIzODI4MTI1LDkuNDkzNjQ2ODcwMTE3MTg3QzYuMTM3ODk5NDIzODI4MTI1LDkuNDkzNjQ2ODcwMTE3MTg3LDUuOTgxMjU5NDIzODI4MTI1LDkuNTI0OTA2ODcwMTE3MTg3LDUuODM1MTI5NDIzODI4MTI1LDkuNTg1NjM2ODcwMTE3MTg4QzUuNjg4OTk5NDIzODI4MTI1LDkuNjQ2MzY2ODcwMTE3MTg4LDUuNTU2MjQ5NDIzODI4MTI1LDkuNzM1Mzc2ODcwMTE3MTg4LDUuNDQ0NDY5NDIzODI4MTI0LDkuODQ3NTc2ODcwMTE3MTg3QzUuNDQ0NDY5NDIzODI4MTI0LDkuODQ3NTc2ODcwMTE3MTg3LDMuMTE0Nzk5NDIzODI4MTI1LDcuNTA1NDE2ODcwMTE3MTg3NSwzLjExNDc5OTQyMzgyODEyNSw3LjUwNTQxNjg3MDExNzE4NzVDMi4zNjEzNjc0MjM4MjgxMjUsOC4zNjUxOTk4NzAxMTcxODgsMS45NjE3NjI3MjM4MjgxMjUsOS40Nzk2NjY4NzAxMTcxODcsMS45OTY3ODA4MjM4MjgxMjUsMTAuNjIzNDc2ODcwMTE3MTg3QzIuMDMxNzk4OTIzODI4MTI1LDExLjc2NzI4Njg3MDExNzE4OCwyLjQ5ODgyNjQyMzgyODEyNSwxMi44NTUwOTY4NzAxMTcxODcsMy4zMDM0Mjk0MjM4MjgxMjUsMTMuNjY2OTU2ODcwMTE3MTg2QzQuMTA4MDM5NDIzODI4MTI0LDE0LjQ3ODgxNjg3MDExNzE4Nyw1LjE5MDE4OTQyMzgyODEyNSwxNC45NTQxNTY4NzAxMTcxODgsNi4zMzEwNzk0MjM4MjgxMjUsMTQuOTk2ODU2ODcwMTE3MTg4QzcuNDcxOTY5NDIzODI4MTI1LDE1LjAzOTU1Njg3MDExNzE4OCw4LjU4NjQ3OTQyMzgyODEyNSwxNC42NDY0MjY4NzAxMTcxODcsOS40NDkyNDk0MjM4MjgxMjUsMTMuODk2OTY2ODcwMTE3MTg2QzkuNDQ5MjQ5NDIzODI4MTI1LDEzLjg5Njk2Njg3MDExNzE4Niw3LjE0NzcyOTQyMzgyODEyNSwxMS41NTQ4MTY4NzAxMTcxODgsNy4xNDc3Mjk0MjM4MjgxMjUsMTEuNTU0ODE2ODcwMTE3MTg4QzcuMjU5NjY5NDIzODI4MTI1LDExLjQ0Mjc2Njg3MDExNzE4OCw3LjM0ODQ2OTQyMzgyODEyNSwxMS4zMDk3MDY4NzAxMTcxODcsNy40MDkwNTk0MjM4MjgxMjUsMTEuMTYzMjM2ODcwMTE3MTg4QzcuNDY5NjQ5NDIzODI4MTI1LDExLjAxNjc2Njg3MDExNzE4OCw3LjUwMDgzOTQyMzgyODEyNSwxMC44NTk3NTY4NzAxMTcxODgsNy41MDA4Mzk0MjM4MjgxMjUsMTAuNzAxMTk2ODcwMTE3MTg3QzcuNTAwODM5NDIzODI4MTI1LDEwLjU0MjYyNjg3MDExNzE4Nyw3LjQ2OTY0OTQyMzgyODEyNSwxMC4zODU2MjY4NzAxMTcxODcsNy40MDkwNTk0MjM4MjgxMjUsMTAuMjM5MTU2ODcwMTE3MTg4QzcuMzQ4NDY5NDIzODI4MTI1LDEwLjA5MjY3Njg3MDExNzE4OCw3LjI1OTY2OTQyMzgyODEyNSw5Ljk1OTYxNjg3MDExNzE4OCw3LjE0NzcyOTQyMzgyODEyNSw5Ljg0NzU3Njg3MDExNzE4N1pcIiBmaWxsPVwiJHtjb2xvcn1cIiBmaWxsLW9wYWNpdHk9XCIxXCIvPjwvZz48L2c+PC9zdmc+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBibHVldG9vdGggPSAoKSA9PiB7XG4gIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbD1cIm5vbmVcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cIm1hc3Rlcl9zdmcwXzYwXzc3MThcIj48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgcng9XCIwXCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD1cInVybCgjbWFzdGVyX3N2ZzBfNjBfNzcxOClcIj48Zz48L2c+PGc+PHBhdGggZD1cIk0xMiw0Ljk5N0MxMiw0Ljk5Nyw3Ljk1NjczLDEsNy45NTY3MywxQzcuOTU2NzMsMSw3LjI0ODYyLDEsNy4yNDg2MiwxQzcuMjQ4NjIsMSw3LjI0ODYyLDYuMzEzLDcuMjQ4NjIsNi4zMTNDNy4yNDg2Miw2LjMxMywzLjk5ODQyNjAwMDAwMDAwMDMsMy4xLDMuOTk4NDI2MDAwMDAwMDAwMywzLjFDMy45OTg0MjYwMDAwMDAwMDAzLDMuMSwzLDQuMDg3LDMsNC4wODdDMyw0LjA4Nyw2Ljk1ODI5OTk5OTk5OTk5OTUsOCw2Ljk1ODI5OTk5OTk5OTk5OTUsOEM2Ljk1ODI5OTk5OTk5OTk5OTUsOCwzLDExLjkxMywzLDExLjkxM0MzLDExLjkxMywzLjk5ODQyNjAwMDAwMDAwMDMsMTIuOSwzLjk5ODQyNjAwMDAwMDAwMDMsMTIuOUMzLjk5ODQyNjAwMDAwMDAwMDMsMTIuOSw3LjI0ODYyLDkuNjg3LDcuMjQ4NjIsOS42ODdDNy4yNDg2Miw5LjY4Nyw3LjI0ODYyLDE1LDcuMjQ4NjIsMTVDNy4yNDg2MiwxNSw3Ljk1NjczLDE1LDcuOTU2NzMsMTVDNy45NTY3MywxNSwxMiwxMS4wMDMsMTIsMTEuMDAzQzEyLDExLjAwMyw4Ljk1NTE1LDgsOC45NTUxNSw4QzguOTU1MTUsOCwxMiw0Ljk5NywxMiw0Ljk5N1pNOC42NjQ4MywzLjY4MUM4LjY2NDgzLDMuNjgxLDkuOTk2MDcsNC45OTcsOS45OTYwNyw0Ljk5N0M5Ljk5NjA3LDQuOTk3LDguNjY0ODMsNi4zMTMsOC42NjQ4Myw2LjMxM0M4LjY2NDgzLDYuMzEzLDguNjY0ODMsMy42ODEsOC42NjQ4MywzLjY4MVpNOS45OTYwNywxMS4wMDNDOS45OTYwNywxMS4wMDMsOC42NjQ4MywxMi4zMTksOC42NjQ4MywxMi4zMTlDOC42NjQ4MywxMi4zMTksOC42NjQ4Myw5LjY4Nyw4LjY2NDgzLDkuNjg3QzguNjY0ODMsOS42ODcsOS45OTYwNywxMS4wMDMsOS45OTYwNywxMS4wMDNaXCIgZmlsbD1cIiMxMEE4RkVcIiBmaWxsLW9wYWNpdHk9XCIxXCIvPjwvZz48L2c+PC9zdmc+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDYXIgPSAoeyBjb2xvciB9KSA9PiB7XG4gIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgZmlsbD1cIm5vbmVcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxkZWZzPjxjbGlwUGF0aCBpZD1cIm1hc3Rlcl9zdmcwXzYwXzc1NjBcIj48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcng9XCIwXCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD1cInVybCgjbWFzdGVyX3N2ZzBfNjBfNzU2MClcIj48Zz48ZWxsaXBzZSBjeD1cIjExLjUyMDAwMDQ1Nzc2MzY3MlwiIGN5PVwiMTIuMDAwMDAwMjM4NDE4NTc5XCIgcng9XCI4LjY0MDAwMDM0MzMyMjc1NFwiIHJ5PVwiOC42NDAwMDAzNDMzMjI3NTRcIiBmaWxsPVwiJHtjb2xvcn1cIiBmaWxsLW9wYWNpdHk9XCIwLjEwMDAwMDAwMTQ5MDExNjEyXCIvPjxlbGxpcHNlIGN4PVwiMTEuNTIwMDAwNDU3NzYzNjcyXCIgY3k9XCIxMi4wMDAwMDAyMzg0MTg1NzlcIiByeD1cIjguNjQwMDAwMzQzMzIyNzU0XCIgcnk9XCI4LjY0MDAwMDM0MzMyMjc1NFwiIGZpbGwtb3BhY2l0eT1cIjBcIiBzdHJva2Utb3BhY2l0eT1cIjFcIiBzdHJva2U9XCIke2NvbG9yfVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMS4xMjVcIi8+PC9nPjxnIHRyYW5zZm9ybT1cIm1hdHJpeCgwLDEsMSwwLC0wLjQ4MDAwMDAxOTA3MzQ4NjMzLDAuNDgwMDAwMDE5MDczNDg2MzMpXCI+PGc+PHBhdGggZD1cIk0xMi41MjkyNTk4MDkyNjUxMzYsMTEuMDgwNzk5ODI4MzM4NjIzQzEyLjUyODI5OTgwOTI2NTEzNSwxMS4wOTUyNzk4MjgzMzg2MjIsMTIuNTI3MzI5ODA5MjY1MTM3LDExLjEwOTc0OTgyODMzODYyMywxMi41MjczMjk4MDkyNjUxMzcsMTEuMTI0MjI5ODI4MzM4NjI0TDEyLjUyODI5OTgwOTI2NTEzNSwxNS41NDg5Mjk4MjgzMzg2MjJDMTIuNTI4Mjk5ODA5MjY1MTM1LDE1Ljk3MDY1OTgyODMzODYyNCwxMi44NzY2Mzk4MDkyNjUxMzYsMTYuMzEzMjQ5ODI4MzM4NjIzLDEzLjMwNjAyOTgwOTI2NTEzNywxNi4zMTMyNDk4MjgzMzg2MjNDMTMuNzM1NDI5ODA5MjY1MTM3LDE2LjMxMzI0OTgyODMzODYyMywxNC4wODM3Njk4MDkyNjUxMzcsMTUuOTcxNjE5ODI4MzM4NjIzLDE0LjA4Mzc2OTgwOTI2NTEzNywxNS41NDg5Mjk4MjgzMzg2MjJMMTQuMDgzNzY5ODA5MjY1MTM3LDE1LjMyNDA3OTgyODMzODYyMkwxNC4wODU2OTk4MDkyNjUxMzcsMTUuMzI0MDc5ODI4MzM4NjIyTDE0LjA4NTY5OTgwOTI2NTEzNywxMC45MzUwNzk4MjgzMzg2MjNMMTUuODM5OTM5ODA5MjY1MTM2LDEwLjkzNTA3OTgyODMzODYyM0wxNS44MzcwNDk4MDkyNjUxMzcsMTAuOTMyMTc5ODI4MzM4NjIyTDE1LjgzOTkzOTgwOTI2NTEzNiwxMC45MzIxNzk4MjgzMzg2MjJMMTIuNTI5MjU5ODA5MjY1MTM2LDcuNjc5OTk5ODI4MzM4NjIzTDEyLjUyOTI1OTgwOTI2NTEzNiwxMS4wODA3OTk4MjgzMzg2MjNaTTguOTU1MjA5ODA5MjY1MTM3LDguNjc3MDQxODI4MzM4NjIzTDguOTU1MjA5ODA5MjY1MTM3LDEzLjA2NzAwOTgyODMzODYyM0w3LjE5OTk5OTgwOTI2NTEzNywxMy4wNjcwMDk4MjgzMzg2MjNMMTAuNTA1ODU5ODA5MjY1MTM2LDE2LjMxNjI5OTgyODMzODYyTDEwLjUxMDY3OTgwOTI2NTEzNiwxNi4zMjAxNTk4MjgzMzg2MjVMMTAuNTEwNjc5ODA5MjY1MTM2LDEyLjk4MzA0OTgyODMzODYyMkMxMC41MTY0Njk4MDkyNjUxMzYsMTIuOTQ2Mzc5ODI4MzM4NjIzLDEwLjUyMDMyOTgwOTI2NTEzNywxMi45MDk3MDk4MjgzMzg2MjQsMTAuNTIwMzI5ODA5MjY1MTM3LDEyLjg3MjA2OTgyODMzODYyNEwxMC41MjAzMjk4MDkyNjUxMzcsOC40NDczNjI4MjgzMzg2MjNDMTAuNTIwMzI5ODA5MjY1MTM3LDguMDI1NjQwODI4MzM4NjI0LDEwLjE3MTk4OTgwOTI2NTEzNyw3LjY4MzA1MTU4ODMzODYyMyw5Ljc0MjU5OTgwOTI2NTEzNyw3LjY4MzA1MTU4ODMzODYyM0M5LjMxMjIzOTgwOTI2NTEzNyw3LjY4MzA1MTU4ODMzODYyMyw4Ljk2Mzg5OTgwOTI2NTEzNiw4LjAyNTY0MDgyODMzODYyNCw4Ljk2Mzg5OTgwOTI2NTEzNiw4LjQ0NzM2MjgyODMzODYyM0w4Ljk2Mzg5OTgwOTI2NTEzNiw4LjY3NzA0MTgyODMzODYyM0w4Ljk1NTIwOTgwOTI2NTEzNyw4LjY3NzA0MTgyODMzODYyM1pcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZmlsbD1cIiR7Y29sb3J9XCIgZmlsbC1vcGFjaXR5PVwiMVwiLz48L2c+PC9nPjwvZz48L3N2Zz5gO1xufTtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0LCBWaWV3LCBJbWFnZSB9IGZyb20gJ0ByYXktanMvcmF5JztcbmltcG9ydCBTdmcgZnJvbSAnQHJheS1qcy9zdmcnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VQcm9wcywgdXNlRGV2aWNlIH0gZnJvbSAnQHJheS1qcy9wYW5lbC1zZGsnO1xuaW1wb3J0IFR5T3V0ZG9vclV0aWxzIGZyb20gJ0ByYXktanMvdHktb3V0ZG9vci11dGlscyc7XG5pbXBvcnQgeyBzZWxlY3RUaGVtZVR5cGUgfSBmcm9tICdAL3JlZHV4L21vZHVsZXMvdGhlbWVTbGljZSc7XG5pbXBvcnQgUmVzIGZyb20gJ0AvcmVzJztcbmltcG9ydCB7IGdldEJhdEluZm8gfSBmcm9tICdAL3V0aWxzJztcbmltcG9ydCBkcENvZGVzIGZyb20gJ0AvY29uc3RhbnQvZHBDb2Rlcyc7XG5pbXBvcnQgeyBEeW5hbWljTnVtYmVyIH0gZnJvbSAnLi4vZHluYW1pYy1udW1iZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5sZXNzJztcblxuY29uc3QgeyBiYXR0ZXJ5UGVyY2VudGFnZSB9ID0gZHBDb2RlcztcbmV4cG9ydCBjb25zdCBCYXR0ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBkcFN0YXRlID0gdXNlUHJvcHMoKTtcbiAgY29uc3QgZGV2SW5mbyA9IHVzZURldmljZShkZXZpY2UgPT4gZGV2aWNlLmRldkluZm8pO1xuICBjb25zdCB0aGVtZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFRoZW1lVHlwZSk7XG4gIGNvbnN0IHIgPSAxODsgLy8gXHU1MzRBXHU1Rjg0XHU1OTI3XHU1QzBGXG4gIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIHI7XG4gIGNvbnN0IHByb2dyZXNzID0gZHBTdGF0ZVtiYXR0ZXJ5UGVyY2VudGFnZV0gfHwgMDsgLy8gXHU4RkRCXHU1RUE2XHU3NjdFXHU1MjA2XHU2QkQ0XG4gIGNvbnN0IHN0cm9rZUNvbG9yID0gdGhlbWUgPT09ICdkYXJrJyA/ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknIDogJ3JnYmEoMCwwLDAsMC4xKSc7IC8vIFx1OEZEQlx1NUVBNlx1Njc2MVx1OTg5Q1x1ODI3MlxuICBjb25zdCB2aXNpYmxlTGVuZ3RoID0gKHByb2dyZXNzIC8gMTAwKSAqIGNpcmN1bWZlcmVuY2U7IC8vIFx1NTNFRlx1ODlDMVx1OTBFOFx1NTIwNlx1NzY4NFx1OTU3Rlx1NUVBNlxuICBjb25zdCB7IGNvbG9yLCBpY29uIH0gPSBnZXRCYXRJbmZvKHByb2dyZXNzLCB0aGVtZSk7XG5cbiAgLy8gXHU4REYzXHU4RjZDXHU3NTM1XHU2QzYwXHU0RThDXHU3RUE3XHU5ODc1XG4gIGNvbnN0IHRvQmF0dGVyeVBhZ2UgPSAoKSA9PiB7XG4gICAgVHlPdXRkb29yVXRpbHMuanVtcFN1YlBhZ2UudG9CYXR0ZXJ5KHtcbiAgICAgIGRldmljZUlkOiBkZXZJbmZvLmRldklkLFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBiYXRWaWV3ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Vmlldz5cbiAgICAgICAgPER5bmFtaWNOdW1iZXIgY291bnRzPXtwcm9ncmVzc30gcG9pbnQ9ezB9IGNsYXNzTmFtZT17c3R5bGVzLmJhdE51bX0gLz5cbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudXRpbH0+JTwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9LCBbcHJvZ3Jlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLmJhdHRlcnl9IG9uQ2xpY2s9e3RvQmF0dGVyeVBhZ2V9PlxuICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMuYmF0TGVmdH0+XG4gICAgICAgIDxTdmcgd2lkdGg9XCI5NnB4XCIgaGVpZ2h0PVwiOTZweFwiIGNsYXNzTmFtZT17c3R5bGVzLnN2Z30+XG4gICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgY3g9XCI0OFwiXG4gICAgICAgICAgICBjeT1cIjQ4XCJcbiAgICAgICAgICAgIHI9e3J9XG4gICAgICAgICAgICBzdHJva2U9e3N0cm9rZUNvbG9yfVxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI2XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT17Y2lyY3VtZmVyZW5jZX1cbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjeD1cIjQ4XCJcbiAgICAgICAgICAgIGN5PVwiNDhcIlxuICAgICAgICAgICAgcj17cn1cbiAgICAgICAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjZcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgLyogc3Ryb2tlRGFzaGFycmF5PXtgJHt2aXNpYmxlTGVuZ3RofSwgJHtjaXJjdW1mZXJlbmNlICogMn1gfSAqL1xuICAgICAgICAgICAgc3R5bGU9e2BzdHJva2UtZGFzaGFycmF5OiAke3Zpc2libGVMZW5ndGh9LCAke2NpcmN1bWZlcmVuY2UgKiAyfWB9XG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKC05MCwgNDgsIDQ4KSBzY2FsZVgoMSkgc2NhbGVZKDEpXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N2Zz5cbiAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gY2xhc3NOYW1lPXtzdHlsZXMuYmF0SWNvbn0gLz5cbiAgICAgIDwvVmlldz5cbiAgICAgIHtiYXRWaWV3KCl9XG4gICAgICA8SW1hZ2Ugc3JjPXt0aGVtZSA9PT0gJ2RhcmsnID8gUmVzLmJhdFdhcm4gOiBSZXMuYmF0V2FybkxpZ2h0fSBjbGFzc05hbWU9e3N0eWxlcy5iYXRXYXJufSAvPlxuICAgIDwvVmlldz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuXG52YXIgX3RlbXBsYXRlT2JqZWN0O1xuXG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnQHJheS1qcy9yYXknO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdwcmVhY3QtcmVuZGVyLXRvLXN0cmluZyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHVzZURlZXBDb21wYXJlRWZmZWN0IH0gZnJvbSAnYWhvb2tzJztcbmltcG9ydCB7IGRlZmF1bHRQcm9wcyB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xudmFyIGNsYXNzUHJlZml4ID0gJ3JheS1zdmcnO1xuXG5mdW5jdGlvbiBTdmcocHJvcHMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB3aWR0aCA9IHByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgdmlld0JveCA9IHByb3BzLnZpZXdCb3g7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCcnKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgYmFja2dyb3VuZEltYWdlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldEJhY2tncm91bmRJbWFnZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRGVlcENvbXBhcmVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdmcgPSBmdW5jdGlvbiByZW5kZXJTdmcoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlclRvU3RyaW5nKGh0bWwuY2FsbC5hcHBseShodG1sLCBbX3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIH0oX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIjxzdmcgd2lkdGg9XFxcIlwiLCBcIlxcXCIgaGVpZ2h0PVxcXCJcIiwgXCJcXFwiIHZpZXdCb3g9XFxcIlwiLCBcIlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIj5cIiwgXCI8L3N2Zz5cIl0sIFtcIjxzdmcgd2lkdGg9XFxcIlwiLCBcIlxcXCIgaGVpZ2h0PVxcXCJcIiwgXCJcXFwiIHZpZXdCb3g9XFxcIlwiLCBcIlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFxcXFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFxcXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiPlwiLCBcIjwvc3ZnPlwiXSkpLCB3aWR0aCwgaGVpZ2h0LCB2aWV3Qm94LCBjaGlsZHJlbik7XG5cbiAgICB2YXIgb3V0cHV0ID0gXCJ1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCxcIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHN2ZyksIFwiXFxcIilcIik7XG4gICAgc2V0QmFja2dyb3VuZEltYWdlKG91dHB1dCk7XG4gIH0sIFt3aWR0aCwgaGVpZ2h0LCB2aWV3Qm94LCBjaGlsZHJlbl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3NQcmVmaXgsIGNsYXNzTmFtZSksXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9LCBzdHlsZSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY2xhc3NQcmVmaXgsIFwiLWltYWdlXCIpLFxuICAgIHN0eWxlOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmRJbWFnZVxuICAgIH1cbiAgfSkpKTtcbn1cblxuU3ZnLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblN2Zy5kaXNwbGF5TmFtZSA9ICdTdmcnO1xuZXhwb3J0IGRlZmF1bHQgU3ZnOyIsICJmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKGUsIHQpIHtcbiAgcmV0dXJuIHQgfHwgKHQgPSBlLnNsaWNlKDApKSwgT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZSh0KVxuICAgIH1cbiAgfSkpO1xufVxuZXhwb3J0IHsgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCBhcyBkZWZhdWx0IH07IiwgImV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSB7fTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IEVNUFRZX0FSUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdC8vIEB0cy1pZ25vcmUgV2UgY2hhbmdlIHRoZSB0eXBlIG9mIGBvYmpgIHRvIGJlIGBPICYgUGBcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC4gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yXG4gKiBJRTExIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlKClgLiBVc2luZyB0aGlzIGZ1bmN0aW9uXG4gKiBpcyBzbWFsbGVyIHRoYW4gaW5jbHVkaW5nIGEgZGVkaWNhdGVkIHBvbHlmaWxsLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBjb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gbnVsbCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBudWxsKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0Ly8gX25leHREb20gbXVzdCBiZSBpbml0aWFsaXplZCB0byB1bmRlZmluZWQgYi9jIGl0IHdpbGwgZXZlbnR1YWxseVxuXHRcdC8vIGJlIHNldCB0byBkb20ubmV4dFNpYmxpbmcgd2hpY2ggY2FuIHJldHVybiBgbnVsbGAgYW5kIGl0IGlzIGltcG9ydGFudFxuXHRcdC8vIHRvIGJlIGFibGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhbiB1bmluaXRpYWxpemVkIF9uZXh0RG9tIGFuZFxuXHRcdC8vIGEgX25leHREb20gdGhhdCBoYXMgYmVlbiBzZXQgdG8gYG51bGxgXG5cdFx0X25leHREb206IHVuZGVmaW5lZCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdF9oeWRyYXRpbmc6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IG51bGwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBudWxsICYmIG9wdGlvbnMudm5vZGUgIT0gbnVsbCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBudWxsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IG51bGwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBjb21wb25lbnQgc3RhdGUgYW5kIHNjaGVkdWxlIGEgcmUtcmVuZGVyLlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7b2JqZWN0IHwgKChzOiBvYmplY3QsIHA6IG9iamVjdCkgPT4gb2JqZWN0KX0gdXBkYXRlIEEgaGFzaCBvZiBzdGF0ZVxuICogcHJvcGVydGllcyB0byB1cGRhdGUgd2l0aCBuZXcgdmFsdWVzIG9yIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiB0aGUgY3VycmVudFxuICogc3RhdGUgYW5kIHByb3BzIHJldHVybnMgYSBuZXcgcGFydGlhbCBzdGF0ZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzXG4gKiB1cGRhdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbih1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gbnVsbCAmJiB0aGlzLl9uZXh0U3RhdGUgIT09IHRoaXMuc3RhdGUpIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB1cGRhdGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYGltbWVyYCBtYXJrIHRoZSBjdXJyZW50IHN0YXRlIGFzIHJlYWRvbmx5LFxuXHRcdC8vIHByZXZlbnRpbmcgdXMgZnJvbSBtdXRhdGluZyBpdCwgc28gd2UgbmVlZCB0byBjbG9uZSBpdC4gU2VlICMyNzE2XG5cdFx0dXBkYXRlID0gdXBkYXRlKGFzc2lnbih7fSwgcyksIHRoaXMucHJvcHMpO1xuXHR9XG5cblx0aWYgKHVwZGF0ZSkge1xuXHRcdGFzc2lnbihzLCB1cGRhdGUpO1xuXHR9XG5cblx0Ly8gU2tpcCB1cGRhdGUgaWYgdXBkYXRlciBmdW5jdGlvbiByZXR1cm5lZCBudWxsXG5cdGlmICh1cGRhdGUgPT0gbnVsbCkgcmV0dXJuO1xuXG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpc1xuICogcmUtcmVuZGVyZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdC8vIFNldCByZW5kZXIgbW9kZSBzbyB0aGF0IHdlIGNhbiBkaWZmZXJlbnRpYXRlIHdoZXJlIHRoZSByZW5kZXIgcmVxdWVzdFxuXHRcdC8vIGlzIGNvbWluZyBmcm9tLiBXZSBuZWVkIHRoaXMgYmVjYXVzZSBmb3JjZVVwZGF0ZSBzaG91bGQgbmV2ZXIgY2FsbFxuXHRcdC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuXHRcdHRoaXMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cbiAqIFZpcnR1YWwgRE9NIGlzIGdlbmVyYWxseSBjb25zdHJ1Y3RlZCB2aWEgW0pTWF0oaHR0cDovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuICogZWxlbWVudC9jb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG4gKiBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW5kZXgnKS5Db21wb25lbnRDaGlsZHJlbiB8IHZvaWR9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IG51bGwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9wYXJlbnQuX2NoaWxkcmVuLmluZGV4T2Yodm5vZGUpICsgMSlcblx0XHRcdDogbnVsbDtcblx0fVxuXG5cdGxldCBzaWJsaW5nO1xuXHRmb3IgKDsgY2hpbGRJbmRleCA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuXHRcdHNpYmxpbmcgPSB2bm9kZS5fY2hpbGRyZW5bY2hpbGRJbmRleF07XG5cblx0XHRpZiAoc2libGluZyAhPSBudWxsICYmIHNpYmxpbmcuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHQvLyBTaW5jZSB1cGRhdGVQYXJlbnREb21Qb2ludGVycyBrZWVwcyBfZG9tIHBvaW50ZXIgY29ycmVjdCxcblx0XHRcdC8vIHdlIGNhbiByZWx5IG9uIF9kb20gdG8gdGVsbCB1cyBpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYVxuXHRcdFx0Ly8gcmVuZGVyZWQgRE9NIG5vZGUsIGFuZCB3aGF0IHRoZSBmaXJzdCByZW5kZXJlZCBET00gbm9kZSBpc1xuXHRcdFx0cmV0dXJuIHNpYmxpbmcuX2RvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBnZXQgaGVyZSwgd2UgaGF2ZSBub3QgZm91bmQgYSBET00gbm9kZSBpbiB0aGlzIHZub2RlJ3MgY2hpbGRyZW4uXG5cdC8vIFdlIG11c3QgcmVzdW1lIGZyb20gdGhpcyB2bm9kZSdzIHNpYmxpbmcgKGluIGl0J3MgcGFyZW50IF9jaGlsZHJlbiBhcnJheSlcblx0Ly8gT25seSBjbGltYiB1cCBhbmQgc2VhcmNoIHRoZSBwYXJlbnQgaWYgd2UgYXJlbid0IHNlYXJjaGluZyB0aHJvdWdoIGEgRE9NXG5cdC8vIFZOb2RlIChtZWFuaW5nIHdlIHJlYWNoZWQgdGhlIERPTSBwYXJlbnQgb2YgdGhlIG9yaWdpbmFsIHZub2RlIHRoYXQgYmVnYW5cblx0Ly8gdGhlIHNlYXJjaClcblx0cmV0dXJuIHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicgPyBnZXREb21TaWJsaW5nKHZub2RlKSA6IG51bGw7XG59XG5cbi8qKlxuICogVHJpZ2dlciBpbi1wbGFjZSByZS1yZW5kZXJpbmcgb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRsZXQgdm5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdG9sZERvbSA9IHZub2RlLl9kb20sXG5cdFx0cGFyZW50RG9tID0gY29tcG9uZW50Ll9wYXJlbnREb207XG5cblx0aWYgKHBhcmVudERvbSkge1xuXHRcdGxldCBjb21taXRRdWV1ZSA9IFtdO1xuXHRcdGNvbnN0IG9sZFZOb2RlID0gYXNzaWduKHt9LCB2bm9kZSk7XG5cdFx0b2xkVk5vZGUuX29yaWdpbmFsID0gdm5vZGUuX29yaWdpbmFsICsgMTtcblxuXHRcdGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHR2bm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Y29tcG9uZW50Ll9nbG9iYWxDb250ZXh0LFxuXHRcdFx0cGFyZW50RG9tLm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkLFxuXHRcdFx0dm5vZGUuX2h5ZHJhdGluZyAhPSBudWxsID8gW29sZERvbV0gOiBudWxsLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20gPT0gbnVsbCA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogb2xkRG9tLFxuXHRcdFx0dm5vZGUuX2h5ZHJhdGluZ1xuXHRcdCk7XG5cdFx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUpO1xuXG5cdFx0aWYgKHZub2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0XHR1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpIHtcblx0aWYgKCh2bm9kZSA9IHZub2RlLl9wYXJlbnQpICE9IG51bGwgJiYgdm5vZGUuX2NvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0dm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IG51bGw7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjaGlsZCA9IHZub2RlLl9jaGlsZHJlbltpXTtcblx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLl9kb20gIT0gbnVsbCkge1xuXHRcdFx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gY2hpbGQuX2RvbTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSByZW5kZXIgcXVldWVcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fVxuICovXG5sZXQgcmVyZW5kZXJRdWV1ZSA9IFtdO1xuXG4vKlxuICogVGhlIHZhbHVlIG9mIGBDb21wb25lbnQuZGVib3VuY2VgIG11c3QgYXN5bmNocm9ub3VzbHkgaW52b2tlIHRoZSBwYXNzZWQgaW4gY2FsbGJhY2suIEl0IGlzXG4gKiBpbXBvcnRhbnQgdGhhdCBjb250cmlidXRvcnMgdG8gUHJlYWN0IGNhbiBjb25zaXN0ZW50bHkgcmVhc29uIGFib3V0IHdoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCwgZXRjLlxuICogZG8sIGFuZCB3aGVuIHRoZWlyIGVmZmVjdHMgd2lsbCBiZSBhcHBsaWVkLiBTZWUgdGhlIGxpbmtzIGJlbG93IGZvciBzb21lIGZ1cnRoZXIgcmVhZGluZyBvbiBkZXNpZ25pbmdcbiAqIGFzeW5jaHJvbm91cyBBUElzLlxuICogKiBbRGVzaWduaW5nIEFQSXMgZm9yIEFzeW5jaHJvbnldKGh0dHBzOi8vYmxvZy5penMubWUvMjAxMy8wOC9kZXNpZ25pbmctYXBpcy1mb3ItYXN5bmNocm9ueSlcbiAqICogW0NhbGxiYWNrcyBzeW5jaHJvbm91cyBhbmQgYXN5bmNocm9ub3VzXShodHRwczovL2Jsb2cub21ldGVyLmNvbS8yMDExLzA3LzI0L2NhbGxiYWNrcy1zeW5jaHJvbm91cy1hbmQtYXN5bmNocm9ub3VzLylcbiAqL1xuXG5sZXQgcHJldkRlYm91bmNlO1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPT0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ1xuXHQpIHtcblx0XHRwcmV2RGVib3VuY2UgPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nO1xuXHRcdChwcmV2RGVib3VuY2UgfHwgc2V0VGltZW91dCkocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHRsZXQgcXVldWU7XG5cdHdoaWxlICgocHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoKSkge1xuXHRcdHF1ZXVlID0gcmVyZW5kZXJRdWV1ZS5zb3J0KChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGgpO1xuXHRcdHJlcmVuZGVyUXVldWUgPSBbXTtcblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRpZiAoYy5fZGlydHkpIHJlbmRlckNvbXBvbmVudChjKTtcblx0XHR9KTtcblx0fVxufVxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjb250ZXh0SWQpIHtcblx0Y29udGV4dElkID0gJ19fY0MnICsgaSsrO1xuXG5cdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0X2lkOiBjb250ZXh0SWQsXG5cdFx0X2RlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0Q29uc3VtZXIocHJvcHMsIGNvbnRleHRWYWx1ZSkge1xuXHRcdFx0Ly8gcmV0dXJuIHByb3BzLmNoaWxkcmVuKFxuXHRcdFx0Ly8gXHRjb250ZXh0W2NvbnRleHRJZF0gPyBjb250ZXh0W2NvbnRleHRJZF0ucHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWVcblx0XHRcdC8vICk7XG5cdFx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0XHR9LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0UHJvdmlkZXIocHJvcHMpIHtcblx0XHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdFx0bGV0IHN1YnMgPSBbXTtcblx0XHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0XHRjdHhbY29udGV4dElkXSA9IHRoaXM7XG5cblx0XHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihfcHJvcHMpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHQvLyBJIHRoaW5rIHRoZSBmb3JjZWQgdmFsdWUgcHJvcGFnYXRpb24gaGVyZSB3YXMgb25seSBuZWVkZWQgd2hlbiBgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ2Agd2FzIGJlaW5nIGJ5cGFzc2VkOlxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9jb21taXQvNGQzMzlmYjgwM2JlYTA5ZTlmMTk4YWJmMzhjYTFiZjhlYTRiNzc3MSNkaWZmLTU0NjgyY2UzODA5MzVhNzE3ZTQxYjhiZmM1NDczN2Y2UjM1OFxuXHRcdFx0XHRcdFx0Ly8gSW4gdGhvc2UgY2FzZXMgdGhvdWdoLCBldmVuIHdpdGggdGhlIHZhbHVlIGNvcnJlY3RlZCwgd2UncmUgZG91YmxlLXJlbmRlcmluZyBhbGwgbm9kZXMuXG5cdFx0XHRcdFx0XHQvLyBJdCBtaWdodCBiZSBiZXR0ZXIgdG8ganVzdCB0ZWxsIGZvbGtzIG5vdCB0byB1c2UgZm9yY2Utc3luYyBtb2RlLlxuXHRcdFx0XHRcdFx0Ly8gQ3VycmVudGx5LCB1c2luZyBgdXNlQ29udGV4dCgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudCB3aWxsIG92ZXJ3cml0ZSBpdHMgYHRoaXMuY29udGV4dGAgdmFsdWUuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dCA9IF9wcm9wcy52YWx1ZTtcblx0XHRcdFx0XHRcdC8vIFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHRcdC8vIH0pO1xuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dFtjb250ZXh0SWRdID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0XHRzdWJzLnNvbWUoZW5xdWV1ZVJlbmRlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdFx0c3Vicy5wdXNoKGMpO1xuXHRcdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzdWJzLnNwbGljZShzdWJzLmluZGV4T2YoYyksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0fTtcblxuXHQvLyBEZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHdoZW4gaXRcblx0Ly8gZW5jb3VudGVycyBhIFByb3ZpZGVyLiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBzdXBwb3J0XG5cdC8vIHNldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiB0aGUgY29udGV4dCBvYmplY3QgaW5zdGVhZFxuXHQvLyBvZiBvbiB0aGUgY29tcG9uZW50IGl0c2VsZi4gU2VlOlxuXHQvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sI2NvbnRleHRkaXNwbGF5bmFtZVxuXG5cdHJldHVybiAoY29udGV4dC5Qcm92aWRlci5fY29udGV4dFJlZiA9IGNvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPSBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBkaWZmLCB1bm1vdW50LCBhcHBseVJlZiB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgRU1QVFlfT0JKLCBFTVBUWV9BUlIgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbi8qKlxuICogRGlmZiB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgd2hvc2VcbiAqIGNoaWxkcmVuIGFyZSBiZWluZyBkaWZmZWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1BhcmVudFZOb2RlIFRoZSBuZXcgdmlydHVhbFxuICogbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgZGlmZidlZCBhZ2FpbnN0IG9sZFBhcmVudFZOb2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkUGFyZW50Vk5vZGUgVGhlIG9sZCB2aXJ0dWFsXG4gKiBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSBkaWZmJ2VkIGFnYWluc3QgbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0IC0gbW9kaWZpZWQgYnkgZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTVxuICogZWxlbWVudCBhbnkgbmV3IGRvbSBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdFxuICogcmVuZGVyIChleGNlcHQgd2hlbiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZ1xuICogRnJhZ21lbnRzIHRoYXQgaGF2ZSBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGlsZHJlbihcblx0cGFyZW50RG9tLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRvbGRQYXJlbnRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZ1xuKSB7XG5cdGxldCBpLCBqLCBvbGRWTm9kZSwgY2hpbGRWTm9kZSwgbmV3RG9tLCBmaXJzdENoaWxkRG9tLCByZWZzO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0bGV0IG9sZENoaWxkcmVuID0gKG9sZFBhcmVudFZOb2RlICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbikgfHwgRU1QVFlfQVJSO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0Zm9yIChpID0gMDsgaSA8IHJlbmRlclJlc3VsdC5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSByZW5kZXJSZXN1bHRbaV07XG5cblx0XHRpZiAoY2hpbGRWTm9kZSA9PSBudWxsIHx8IHR5cGVvZiBjaGlsZFZOb2RlID09ICdib29sZWFuJykge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIElmIHRoaXMgbmV3Vk5vZGUgaXMgYmVpbmcgcmV1c2VkIChlLmcuIDxkaXY+e3JldXNlfXtyZXVzZX08L2Rpdj4pIGluIHRoZSBzYW1lIGRpZmYsXG5cdFx0Ly8gb3Igd2UgYXJlIHJlbmRlcmluZyBhIGNvbXBvbmVudCAoZS5nLiBzZXRTdGF0ZSkgY29weSB0aGUgb2xkVk5vZGVzIHNvIGl0IGNhbiBoYXZlXG5cdFx0Ly8gaXQncyBvd24gRE9NICYgZXRjLiBwb2ludGVyc1xuXHRcdGVsc2UgaWYgKFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ3N0cmluZycgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdudW1iZXInIHx8XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYmlnaW50J1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5fZGVwdGggPiAwKSB7XG5cdFx0XHQvLyBWTm9kZSBpcyBhbHJlYWR5IGluIHVzZSwgY2xvbmUgaXQuIFRoaXMgY2FuIGhhcHBlbiBpbiB0aGUgZm9sbG93aW5nXG5cdFx0XHQvLyBzY2VuYXJpbzpcblx0XHRcdC8vICAgY29uc3QgcmV1c2UgPSA8ZGl2IC8+XG5cdFx0XHQvLyAgIDxkaXY+e3JldXNlfTxzcGFuIC8+e3JldXNlfTwvZGl2PlxuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUsXG5cdFx0XHRcdGNoaWxkVk5vZGUucHJvcHMsXG5cdFx0XHRcdGNoaWxkVk5vZGUua2V5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNoaWxkVk5vZGU7XG5cdFx0fVxuXG5cdFx0Ly8gVGVyc2VyIHJlbW92ZXMgdGhlIGBjb250aW51ZWAgaGVyZSBhbmQgd3JhcHMgdGhlIGxvb3AgYm9keVxuXHRcdC8vIGluIGEgYGlmIChjaGlsZFZOb2RlKSB7IC4uLiB9IGNvbmRpdGlvblxuXHRcdGlmIChjaGlsZFZOb2RlID09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIENoZWNrIGlmIHdlIGZpbmQgYSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgaW4gb2xkQ2hpbGRyZW4uXG5cdFx0Ly8gSWYgZm91bmQsIGRlbGV0ZSB0aGUgYXJyYXkgaXRlbSBieSBzZXR0aW5nIHRvIGB1bmRlZmluZWRgLlxuXHRcdC8vIFdlIHVzZSBgdW5kZWZpbmVkYCwgYXMgYG51bGxgIGlzIHJlc2VydmVkIGZvciBlbXB0eSBwbGFjZWhvbGRlcnNcblx0XHQvLyAoaG9sZXMpLlxuXHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5baV07XG5cblx0XHRpZiAoXG5cdFx0XHRvbGRWTm9kZSA9PT0gbnVsbCB8fFxuXHRcdFx0KG9sZFZOb2RlICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUua2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGUpXG5cdFx0KSB7XG5cdFx0XHRvbGRDaGlsZHJlbltpXSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRWl0aGVyIG9sZFZOb2RlID09PSB1bmRlZmluZWQgb3Igb2xkQ2hpbGRyZW5MZW5ndGggPiAwLFxuXHRcdFx0Ly8gc28gYWZ0ZXIgdGhpcyBsb29wIG9sZFZOb2RlID09IG51bGwgb3Igb2xkVk5vZGUgaXMgYSB2YWxpZCB2YWx1ZS5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBvbGRDaGlsZHJlbkxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bal07XG5cdFx0XHRcdC8vIElmIGNoaWxkVk5vZGUgaXMgdW5rZXllZCwgd2Ugb25seSBtYXRjaCBzaW1pbGFybHkgdW5rZXllZCBub2Rlcywgb3RoZXJ3aXNlIHdlIG1hdGNoIGJ5IGtleS5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIG1hdGNoIGJ5IHR5cGUgKGluIGVpdGhlciBjYXNlKS5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG9sZFZOb2RlICYmXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlID09PSBvbGRWTm9kZS50eXBlXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdG9sZENoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9sZFZOb2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvbGRWTm9kZSA9IG9sZFZOb2RlIHx8IEVNUFRZX09CSjtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRpc1N2Zyxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20sXG5cdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdCk7XG5cblx0XHRuZXdEb20gPSBjaGlsZFZOb2RlLl9kb207XG5cblx0XHRpZiAoKGogPSBjaGlsZFZOb2RlLnJlZikgJiYgb2xkVk5vZGUucmVmICE9IGopIHtcblx0XHRcdGlmICghcmVmcykgcmVmcyA9IFtdO1xuXHRcdFx0aWYgKG9sZFZOb2RlLnJlZikgcmVmcy5wdXNoKG9sZFZOb2RlLnJlZiwgbnVsbCwgY2hpbGRWTm9kZSk7XG5cdFx0XHRyZWZzLnB1c2goaiwgY2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSwgY2hpbGRWTm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG5ld0RvbSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBudWxsKSB7XG5cdFx0XHRcdGZpcnN0Q2hpbGREb20gPSBuZXdEb207XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2NoaWxkcmVuID09PSBvbGRWTm9kZS5fY2hpbGRyZW5cblx0XHRcdCkge1xuXHRcdFx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gb2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKFxuXHRcdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRcdHBhcmVudERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkRG9tID0gcGxhY2VDaGlsZChcblx0XHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdFx0XHRuZXdEb20sXG5cdFx0XHRcdFx0b2xkRG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgbmV3UGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIEJlY2F1c2UgdGhlIG5ld1BhcmVudFZOb2RlIGlzIEZyYWdtZW50LWxpa2UsIHdlIG5lZWQgdG8gc2V0IGl0J3Ncblx0XHRcdFx0Ly8gX25leHREb20gcHJvcGVydHkgdG8gdGhlIG5leHRTaWJsaW5nIG9mIGl0cyBsYXN0IGNoaWxkIERPTSBub2RlLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBgb2xkRG9tYCBjb250YWlucyB0aGUgY29ycmVjdCB2YWx1ZSBoZXJlIGJlY2F1c2UgaWYgdGhlIGxhc3QgY2hpbGRcblx0XHRcdFx0Ly8gaXMgYSBGcmFnbWVudC1saWtlLCB0aGVuIG9sZERvbSBoYXMgYWxyZWFkeSBiZWVuIHNldCB0byB0aGF0IGNoaWxkJ3MgX25leHREb20uXG5cdFx0XHRcdC8vIElmIHRoZSBsYXN0IGNoaWxkIGlzIGEgRE9NIFZOb2RlLCB0aGVuIG9sZERvbSB3aWxsIGJlIHNldCB0byB0aGF0IERPTVxuXHRcdFx0XHQvLyBub2RlJ3MgbmV4dFNpYmxpbmcuXG5cdFx0XHRcdG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tID0gb2xkRG9tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRvbGREb20gJiZcblx0XHRcdG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tICYmXG5cdFx0XHRvbGREb20ucGFyZW50Tm9kZSAhPSBwYXJlbnREb21cblx0XHQpIHtcblx0XHRcdC8vIFRoZSBhYm92ZSBjb25kaXRpb24gaXMgdG8gaGFuZGxlIG51bGwgcGxhY2Vob2xkZXJzLiBTZWUgdGVzdCBpbiBwbGFjZWhvbGRlci50ZXN0LmpzOlxuXHRcdFx0Ly8gYGVmZmljaWVudGx5IHJlcGxhY2UgbnVsbCBwbGFjZWhvbGRlcnMgaW4gcGFyZW50IHJlcmVuZGVyc2Bcblx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS5cblx0Zm9yIChpID0gb2xkQ2hpbGRyZW5MZW5ndGg7IGktLTsgKSB7XG5cdFx0aWYgKG9sZENoaWxkcmVuW2ldICE9IG51bGwpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIG5ld1BhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0XHRvbGRDaGlsZHJlbltpXS5fZG9tICE9IG51bGwgJiZcblx0XHRcdFx0b2xkQ2hpbGRyZW5baV0uX2RvbSA9PSBuZXdQYXJlbnRWTm9kZS5fbmV4dERvbVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIElmIHRoZSBuZXdQYXJlbnRWTm9kZS5fX25leHREb20gcG9pbnRzIHRvIGEgZG9tIG5vZGUgdGhhdCBpcyBhYm91dCB0b1xuXHRcdFx0XHQvLyBiZSB1bm1vdW50ZWQsIHRoZW4gZ2V0IHRoZSBuZXh0IHNpYmxpbmcgb2YgdGhhdCB2bm9kZSBhbmQgc2V0XG5cdFx0XHRcdC8vIF9uZXh0RG9tIHRvIGl0XG5cdFx0XHRcdG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tID0gZ2V0RG9tU2libGluZyhvbGRQYXJlbnRWTm9kZSwgaSArIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHR1bm1vdW50KG9sZENoaWxkcmVuW2ldLCBvbGRDaGlsZHJlbltpXSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHJlZnMgb25seSBhZnRlciB1bm1vdW50XG5cdGlmIChyZWZzKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHJlZnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFwcGx5UmVmKHJlZnNbaV0sIHJlZnNbKytpXSwgcmVmc1srK2ldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVvcmRlckNoaWxkcmVuKGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tKSB7XG5cdC8vIE5vdGU6IFZOb2RlcyBpbiBuZXN0ZWQgc3VzcGVuZGVkIHRyZWVzIG1heSBiZSBtaXNzaW5nIF9jaGlsZHJlbi5cblx0bGV0IGMgPSBjaGlsZFZOb2RlLl9jaGlsZHJlbjtcblx0bGV0IHRtcCA9IDA7XG5cdGZvciAoOyBjICYmIHRtcCA8IGMubGVuZ3RoOyB0bXArKykge1xuXHRcdGxldCB2bm9kZSA9IGNbdG1wXTtcblx0XHRpZiAodm5vZGUpIHtcblx0XHRcdC8vIFdlIHR5cGljYWxseSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0Ly8gb2xkVk5vZGUuX2NoaWxkcmVuIHRvIG5ld1ZOb2RlLl9jaGlsZHJlbi4gSWYgdGhhdCBpcyB0aGUgY2FzZSwgd2UgbmVlZFxuXHRcdFx0Ly8gdG8gdXBkYXRlIHRoZSBvbGQgY2hpbGRyZW4ncyBfcGFyZW50IHBvaW50ZXIgdG8gcG9pbnQgdG8gdGhlIG5ld1ZOb2RlXG5cdFx0XHQvLyAoY2hpbGRWTm9kZSBoZXJlKS5cblx0XHRcdHZub2RlLl9wYXJlbnQgPSBjaGlsZFZOb2RlO1xuXG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRvbGREb20gPSByZW9yZGVyQ2hpbGRyZW4odm5vZGUsIG9sZERvbSwgcGFyZW50RG9tKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9sZERvbSA9IHBsYWNlQ2hpbGQoXG5cdFx0XHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0XHRcdHZub2RlLFxuXHRcdFx0XHRcdHZub2RlLFxuXHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0dm5vZGUuX2RvbSxcblx0XHRcdFx0XHRvbGREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW5kIGxvb3AgdGhyb3VnaCB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWRcbiAqIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBudWxsIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBwbGFjZUNoaWxkKFxuXHRwYXJlbnREb20sXG5cdGNoaWxkVk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0bmV3RG9tLFxuXHRvbGREb21cbikge1xuXHRsZXQgbmV4dERvbTtcblx0aWYgKGNoaWxkVk5vZGUuX25leHREb20gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIE9ubHkgRnJhZ21lbnRzIG9yIGNvbXBvbmVudHMgdGhhdCByZXR1cm4gRnJhZ21lbnQgbGlrZSBWTm9kZXMgd2lsbFxuXHRcdC8vIGhhdmUgYSBub24tdW5kZWZpbmVkIF9uZXh0RG9tLiBDb250aW51ZSB0aGUgZGlmZiBmcm9tIHRoZSBzaWJsaW5nXG5cdFx0Ly8gb2YgbGFzdCBET00gY2hpbGQgb2YgdGhpcyBjaGlsZCBWTm9kZVxuXHRcdG5leHREb20gPSBjaGlsZFZOb2RlLl9uZXh0RG9tO1xuXG5cdFx0Ly8gRWFnZXJseSBjbGVhbnVwIF9uZXh0RG9tLiBXZSBkb24ndCBuZWVkIHRvIHBlcnNpc3QgdGhlIHZhbHVlIGJlY2F1c2Vcblx0XHQvLyBpdCBpcyBvbmx5IHVzZWQgYnkgYGRpZmZDaGlsZHJlbmAgdG8gZGV0ZXJtaW5lIHdoZXJlIHRvIHJlc3VtZSB0aGUgZGlmZiBhZnRlclxuXHRcdC8vIGRpZmZpbmcgQ29tcG9uZW50cyBhbmQgRnJhZ21lbnRzLiBPbmNlIHdlIHN0b3JlIGl0IHRoZSBuZXh0RE9NIGxvY2FsIHZhciwgd2Vcblx0XHQvLyBjYW4gY2xlYW4gdXAgdGhlIHByb3BlcnR5XG5cdFx0Y2hpbGRWTm9kZS5fbmV4dERvbSA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmIChcblx0XHRvbGRWTm9kZSA9PSBudWxsIHx8XG5cdFx0bmV3RG9tICE9IG9sZERvbSB8fFxuXHRcdG5ld0RvbS5wYXJlbnROb2RlID09IG51bGxcblx0KSB7XG5cdFx0b3V0ZXI6IGlmIChvbGREb20gPT0gbnVsbCB8fCBvbGREb20ucGFyZW50Tm9kZSAhPT0gcGFyZW50RG9tKSB7XG5cdFx0XHRwYXJlbnREb20uYXBwZW5kQ2hpbGQobmV3RG9tKTtcblx0XHRcdG5leHREb20gPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBgajxvbGRDaGlsZHJlbkxlbmd0aDsgais9MmAgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gYGorKzxvbGRDaGlsZHJlbkxlbmd0aC8yYFxuXHRcdFx0Zm9yIChcblx0XHRcdFx0bGV0IHNpYkRvbSA9IG9sZERvbSwgaiA9IDA7XG5cdFx0XHRcdChzaWJEb20gPSBzaWJEb20ubmV4dFNpYmxpbmcpICYmIGogPCBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRcdGogKz0gMlxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChzaWJEb20gPT0gbmV3RG9tKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHBhcmVudERvbS5pbnNlcnRCZWZvcmUobmV3RG9tLCBvbGREb20pO1xuXHRcdFx0bmV4dERvbSA9IG9sZERvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIHByZS1jYWxjdWxhdGVkIHRoZSBuZXh0RE9NIG5vZGUsIHVzZSBpdC4gRWxzZSBjYWxjdWxhdGUgaXQgbm93XG5cdC8vIFN0cmljdGx5IGNoZWNrIGZvciBgdW5kZWZpbmVkYCBoZXJlIGN1eiBgbnVsbGAgaXMgYSB2YWxpZCB2YWx1ZSBvZiBgbmV4dERvbWAuXG5cdC8vIFNlZSBtb3JlIGRldGFpbCBpbiBjcmVhdGUtZWxlbWVudC5qczpjcmVhdGVWTm9kZVxuXHRpZiAobmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2xkRG9tID0gbmV4dERvbTtcblx0fSBlbHNlIHtcblx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuIiwgImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBEaWZmIHRoZSBvbGQgYW5kIG5ldyBwcm9wZXJ0aWVzIG9mIGEgVk5vZGUgYW5kIGFwcGx5IGNoYW5nZXMgdG8gdGhlIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIGFwcGx5XG4gKiBjaGFuZ2VzIHRvXG4gKiBAcGFyYW0ge29iamVjdH0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IG9sZFByb3BzIFRoZSBvbGQgcHJvcHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh5ZHJhdGUgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvbiBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmUHJvcHMoZG9tLCBuZXdQcm9wcywgb2xkUHJvcHMsIGlzU3ZnLCBoeWRyYXRlKSB7XG5cdGxldCBpO1xuXG5cdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdGlmIChpICE9PSAnY2hpbGRyZW4nICYmIGkgIT09ICdrZXknICYmICEoaSBpbiBuZXdQcm9wcykpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbnVsbCwgb2xkUHJvcHNbaV0sIGlzU3ZnKTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGkgaW4gbmV3UHJvcHMpIHtcblx0XHRpZiAoXG5cdFx0XHQoIWh5ZHJhdGUgfHwgdHlwZW9mIG5ld1Byb3BzW2ldID09ICdmdW5jdGlvbicpICYmXG5cdFx0XHRpICE9PSAnY2hpbGRyZW4nICYmXG5cdFx0XHRpICE9PSAna2V5JyAmJlxuXHRcdFx0aSAhPT0gJ3ZhbHVlJyAmJlxuXHRcdFx0aSAhPT0gJ2NoZWNrZWQnICYmXG5cdFx0XHRvbGRQcm9wc1tpXSAhPT0gbmV3UHJvcHNbaV1cblx0XHQpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbmV3UHJvcHNbaV0sIG9sZFByb3BzW2ldLCBpc1N2Zyk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXlbMF0gPT09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIGlzU3ZnKSB7XG5cdGxldCB1c2VDYXB0dXJlO1xuXG5cdG86IGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9PSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PT0gJ28nICYmIG5hbWVbMV0gPT09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKG5hbWUudG9Mb3dlckNhc2UoKSBpbiBkb20pIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlciA9IHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHk7XG5cdFx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBoYW5kbGVyID0gdXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eTtcblx0XHRcdGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lICE9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKGlzU3ZnKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPT0gJ2hyZWYnICYmXG5cdFx0XHRuYW1lICE9PSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT09ICdmb3JtJyAmJlxuXHRcdFx0Ly8gRGVmYXVsdCB2YWx1ZSBpbiBicm93c2VycyBpcyBgLTFgIGFuZCBhbiBlbXB0eSBzdHJpbmcgaXNcblx0XHRcdC8vIGNhc3QgdG8gYDBgIGluc3RlYWRcblx0XHRcdG5hbWUgIT09ICd0YWJJbmRleCcgJiZcblx0XHRcdG5hbWUgIT09ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgaW4gZG9tXG5cdFx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkb21bbmFtZV0gPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0Ly8gbGFiZWxsZWQgYnJlYWsgaXMgMWIgc21hbGxlciBoZXJlIHRoYW4gYSByZXR1cm4gc3RhdGVtZW50IChzb3JyeSlcblx0XHRcdFx0YnJlYWsgbztcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIGhhdmUgYSBkaWZmZXJlbnQgbm90aW9uIG9mIGJvb2xlYW4gdmFsdWVzLlxuXHRcdC8vIFRoZSB2YWx1ZSBgZmFsc2VgIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhdHRyaWJ1dGUgbm90XG5cdFx0Ly8gZXhpc3Rpbmcgb24gdGhlIERPTSwgc28gd2UgY2FuJ3QgcmVtb3ZlIGl0LiBGb3Igbm9uLWJvb2xlYW5cblx0XHQvLyBBUklBLWF0dHJpYnV0ZXMgd2UgY291bGQgdHJlYXQgZmFsc2UgYXMgYSByZW1vdmFsLCBidXQgdGhlXG5cdFx0Ly8gYW1vdW50IG9mIGV4Y2VwdGlvbnMgd291bGQgY29zdCB1cyB0b28gbWFueSBieXRlcy4gT24gdG9wIG9mXG5cdFx0Ly8gdGhhdCBvdGhlciBWRE9NIGZyYW1ld29ya3MgYWxzbyBhbHdheXMgc3RyaW5naWZ5IGBmYWxzZWAuXG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0dmFsdWUgIT0gbnVsbCAmJlxuXHRcdFx0KHZhbHVlICE9PSBmYWxzZSB8fCAobmFtZVswXSA9PT0gJ2EnICYmIG5hbWVbMV0gPT09ICdyJykpXG5cdFx0KSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0dGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIGZhbHNlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuXG5mdW5jdGlvbiBldmVudFByb3h5Q2FwdHVyZShlKSB7XG5cdHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB0cnVlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuIiwgImltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IGRpZmZQcm9wcywgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgcGFyZW50IG9mIHRoZSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieSBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNIeWRyYXRpbmddIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5faHlkcmF0aW5nICE9IG51bGwpIHtcblx0XHRpc0h5ZHJhdGluZyA9IG9sZFZOb2RlLl9oeWRyYXRpbmc7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0Ly8gaWYgd2UgcmVzdW1lLCB3ZSB3YW50IHRoZSB0cmVlIHRvIGJlIFwidW5sb2NrZWRcIlxuXHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSBudWxsO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdHRyeSB7XG5cdFx0b3V0ZXI6IGlmICh0eXBlb2YgbmV3VHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgYywgaXNOZXcsIG9sZFByb3BzLCBvbGRTdGF0ZSwgc25hcHNob3QsIGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbjtcblx0XHRcdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXG5cdFx0XHQvLyBOZWNlc3NhcnkgZm9yIGNyZWF0ZUNvbnRleHQgYXBpLiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgd2lsbCBwYXNzXG5cdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdHRtcCA9IG5ld1R5cGUuY29udGV4dFR5cGU7XG5cdFx0XHRsZXQgcHJvdmlkZXIgPSB0bXAgJiYgZ2xvYmFsQ29udGV4dFt0bXAuX2lkXTtcblx0XHRcdGxldCBjb21wb25lbnRDb250ZXh0ID0gdG1wXG5cdFx0XHRcdD8gcHJvdmlkZXJcblx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0OiB0bXAuX2RlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ6IGdsb2JhbENvbnRleHQ7XG5cblx0XHRcdC8vIEdldCBjb21wb25lbnQgYW5kIHNldCBpdCB0byBgY2Bcblx0XHRcdGlmIChvbGRWTm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdGMgPSBuZXdWTm9kZS5fY29tcG9uZW50ID0gb2xkVk5vZGUuX2NvbXBvbmVudDtcblx0XHRcdFx0Y2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3BlbmRpbmdFcnJvcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEluc3RhbnRpYXRlIHRoZSBuZXcgY29tcG9uZW50XG5cdFx0XHRcdGlmICgncHJvdG90eXBlJyBpbiBuZXdUeXBlICYmIG5ld1R5cGUucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmUgVGhlIGNoZWNrIGFib3ZlIHZlcmlmaWVzIHRoYXQgbmV3VHlwZSBpcyBzdXBwb3NlIHRvIGJlIGNvbnN0cnVjdGVkXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgbmV3VHlwZShuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmUgVHJ1c3QgbWUsIENvbXBvbmVudCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2Ugd2Ugd2FudFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IENvbXBvbmVudChuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdFx0Yy5jb25zdHJ1Y3RvciA9IG5ld1R5cGU7XG5cdFx0XHRcdFx0Yy5yZW5kZXIgPSBkb1JlbmRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJvdmlkZXIpIHByb3ZpZGVyLnN1YihjKTtcblxuXHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IG51bGwpIHtcblx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdH1cblx0XHRcdGlmIChuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXG5cdFx0XHQvLyBJbnZva2UgcHJlLXJlbmRlciBsaWZlY3ljbGUgbWV0aG9kc1xuXHRcdFx0aWYgKGlzTmV3KSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBudWxsICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQgIT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50RGlkTW91bnQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuY29tcG9uZW50RGlkTW91bnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gbnVsbCAmJlxuXHRcdFx0XHRcdG5ld1Byb3BzICE9PSBvbGRQcm9wcyAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gbnVsbCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKSB8fFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRcdC8vIE1vcmUgaW5mbyBhYm91dCB0aGlzIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0pvdmlEZUNyb29jay9iZWM1ZjJjZTkzNTQ0ZDJlNjA3MGVmOGUwMDM2ZTRlOFxuXHRcdFx0XHRcdGlmIChuZXdWTm9kZS5fb3JpZ2luYWwgIT09IG9sZFZOb2RlLl9vcmlnaW5hbCkgYy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRjLl92bm9kZSA9IG5ld1ZOb2RlO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uZm9yRWFjaCh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cdFx0XHRjLl9wYXJlbnREb20gPSBwYXJlbnREb207XG5cblx0XHRcdGxldCByZW5kZXJIb29rID0gb3B0aW9ucy5fcmVuZGVyLFxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRpZiAoJ3Byb3RvdHlwZScgaW4gbmV3VHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0fSB3aGlsZSAoYy5fZGlydHkgJiYgKytjb3VudCA8IDI1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblxuXHRcdFx0aWYgKGMuZ2V0Q2hpbGRDb250ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCA9IGFzc2lnbihhc3NpZ24oe30sIGdsb2JhbENvbnRleHQpLCBjLmdldENoaWxkQ29udGV4dCgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpc1RvcExldmVsRnJhZ21lbnQgPVxuXHRcdFx0XHR0bXAgIT0gbnVsbCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBudWxsO1xuXHRcdFx0bGV0IHJlbmRlclJlc3VsdCA9IGlzVG9wTGV2ZWxGcmFnbWVudCA/IHRtcC5wcm9wcy5jaGlsZHJlbiA6IHRtcDtcblxuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkocmVuZGVyUmVzdWx0KSA/IHJlbmRlclJlc3VsdCA6IFtyZW5kZXJSZXN1bHRdLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cblx0XHRcdGMuYmFzZSA9IG5ld1ZOb2RlLl9kb207XG5cblx0XHRcdC8vIFdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZCB0aGlzIFZOb2RlLCB1bnNldCBhbnkgc3RvcmVkIGh5ZHJhdGlvbi9iYWlsb3V0IHN0YXRlOlxuXHRcdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9IG51bGw7XG5cblx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdFx0Yy5fcGVuZGluZ0Vycm9yID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGMuX2ZvcmNlID0gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID09IG51bGwgJiZcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdFx0KSB7XG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRcdG9sZFZOb2RlLl9kb20sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCh0bXAgPSBvcHRpb25zLmRpZmZlZCkpIHRtcChuZXdWTm9kZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBudWxsO1xuXHRcdC8vIGlmIGh5ZHJhdGluZyBvciBjcmVhdGluZyBpbml0aWFsIHRyZWUsIGJhaWxvdXQgcHJlc2VydmVzIERPTTpcblx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZERvbTtcblx0XHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSAhIWlzSHlkcmF0aW5nO1xuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IG51bGw7XG5cdFx0XHQvLyBeIGNvdWxkIHBvc3NpYmx5IGJlIHNpbXBsaWZpZWQgdG86XG5cdFx0XHQvLyBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGggPSAwO1xuXHRcdH1cblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIG5ld1ZOb2RlLCBvbGRWTm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0Um9vdChjb21taXRRdWV1ZSwgcm9vdCkge1xuXHRpZiAob3B0aW9ucy5fY29tbWl0KSBvcHRpb25zLl9jb21taXQocm9vdCwgY29tbWl0UXVldWUpO1xuXG5cdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgUmV1c2UgdGhlIGNvbW1pdFF1ZXVlIHZhcmlhYmxlIGhlcmUgc28gdGhlIHR5cGUgY2hhbmdlc1xuXHRcdFx0Y29tbWl0UXVldWUgPSBjLl9yZW5kZXJDYWxsYmFja3M7XG5cdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoY2IgPT4ge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFNlZSBhYm92ZSB0cy1pZ25vcmUgb24gY29tbWl0UXVldWVcblx0XHRcdFx0Y2IuY2FsbChjKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgYy5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyByZXByZXNlbnRpbmcgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nXG4gKiB0aGUgdmlydHVhbCBub2RlcyBiZWluZyBkaWZmZWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0geyp9IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZGlmZkVsZW1lbnROb2Rlcyhcblx0ZG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHM7XG5cdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXHRsZXQgbm9kZVR5cGUgPSBuZXdWTm9kZS50eXBlO1xuXHRsZXQgaSA9IDA7XG5cblx0Ly8gVHJhY2tzIGVudGVyaW5nIGFuZCBleGl0aW5nIFNWRyBuYW1lc3BhY2Ugd2hlbiBkZXNjZW5kaW5nIHRocm91Z2ggdGhlIHRyZWUuXG5cdGlmIChub2RlVHlwZSA9PT0gJ3N2ZycpIGlzU3ZnID0gdHJ1ZTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdGZvciAoOyBpIDwgZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNoaWxkID0gZXhjZXNzRG9tQ2hpbGRyZW5baV07XG5cblx0XHRcdC8vIGlmIG5ld1ZOb2RlIG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiBvciB0aGUgYGRvbWBcblx0XHRcdC8vIGFyZ3VtZW50IG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiwgcmVtb3ZlIGl0IGZyb21cblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuIHNvIGl0IGlzbid0IGxhdGVyIHJlbW92ZWQgaW4gZGlmZkNoaWxkcmVuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNoaWxkICYmXG5cdFx0XHRcdCdzZXRBdHRyaWJ1dGUnIGluIGNoaWxkID09PSAhIW5vZGVUeXBlICYmXG5cdFx0XHRcdChub2RlVHlwZSA/IGNoaWxkLmxvY2FsTmFtZSA9PT0gbm9kZVR5cGUgOiBjaGlsZC5ub2RlVHlwZSA9PT0gMylcblx0XHRcdCkge1xuXHRcdFx0XHRkb20gPSBjaGlsZDtcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoZG9tID09IG51bGwpIHtcblx0XHRpZiAobm9kZVR5cGUgPT09IG51bGwpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgY3JlYXRlVGV4dE5vZGUgcmV0dXJucyBUZXh0LCB3ZSBleHBlY3QgUHJlYWN0RWxlbWVudFxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1Byb3BzKTtcblx0XHR9XG5cblx0XHRpZiAoaXNTdmcpIHtcblx0XHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdFx0J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSBrbm93IGBuZXdWTm9kZS50eXBlYCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRub2RlVHlwZVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSBrbm93IGBuZXdWTm9kZS50eXBlYCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRub2RlVHlwZSxcblx0XHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2UgY3JlYXRlZCBhIG5ldyBwYXJlbnQsIHNvIG5vbmUgb2YgdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgY2hpbGRyZW4gY2FuIGJlIHJldXNlZDpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IG51bGw7XG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpbiBjYXNlIHdlIGFyZSBoeWRyYXRpbmcpLCB0aGlzIGRlb3B0cyB0aGUgaHlkcmF0ZVxuXHRcdGlzSHlkcmF0aW5nID0gZmFsc2U7XG5cdH1cblxuXHRpZiAobm9kZVR5cGUgPT09IG51bGwpIHtcblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCB3ZSBzdGlsbCBoYXZlIHRvIHNwbGl0IG1lcmdlZCB0ZXh0IGZyb20gU1NSJ2QgSFRNTC5cblx0XHRpZiAob2xkUHJvcHMgIT09IG5ld1Byb3BzICYmICghaXNIeWRyYXRpbmcgfHwgZG9tLmRhdGEgIT09IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHRvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcblxuXHRcdGxldCBvbGRIdG1sID0gb2xkUHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cdFx0bGV0IG5ld0h0bWwgPSBuZXdQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblxuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHByb3BzIGFyZSBub3QgZGlmZmVkIGF0IGFsbCAoaW5jbHVkaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKVxuXHRcdC8vIEBUT0RPIHdlIHNob3VsZCB3YXJuIGluIGRlYnVnIG1vZGUgd2hlbiBwcm9wcyBkb24ndCBtYXRjaCBoZXJlLlxuXHRcdGlmICghaXNIeWRyYXRpbmcpIHtcblx0XHRcdC8vIEJ1dCwgaWYgd2UgYXJlIGluIGEgc2l0dWF0aW9uIHdoZXJlIHdlIGFyZSB1c2luZyBleGlzdGluZyBET00gKGUuZy4gcmVwbGFjZU5vZGUpXG5cdFx0XHQvLyB3ZSBzaG91bGQgcmVhZCB0aGUgZXhpc3RpbmcgRE9NIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZG9tLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvbGRQcm9wc1tkb20uYXR0cmlidXRlc1tpXS5uYW1lXSA9IGRvbS5hdHRyaWJ1dGVzW2ldLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdIdG1sIHx8IG9sZEh0bWwpIHtcblx0XHRcdFx0Ly8gQXZvaWQgcmUtYXBwbHlpbmcgdGhlIHNhbWUgJ19faHRtbCcgaWYgaXQgZGlkIG5vdCBjaGFuZ2VkIGJldHdlZW4gcmUtcmVuZGVyXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhbmV3SHRtbCB8fFxuXHRcdFx0XHRcdCgoIW9sZEh0bWwgfHwgbmV3SHRtbC5fX2h0bWwgIT0gb2xkSHRtbC5fX2h0bWwpICYmXG5cdFx0XHRcdFx0XHRuZXdIdG1sLl9faHRtbCAhPT0gZG9tLmlubmVySFRNTClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0ZG9tLmlubmVySFRNTCA9IChuZXdIdG1sICYmIG5ld0h0bWwuX19odG1sKSB8fCAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRpZmZQcm9wcyhkb20sIG5ld1Byb3BzLCBvbGRQcm9wcywgaXNTdmcsIGlzSHlkcmF0aW5nKTtcblxuXHRcdC8vIElmIHRoZSBuZXcgdm5vZGUgZGlkbid0IGhhdmUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIGRpZmYgaXRzIGNoaWxkcmVuXG5cdFx0aWYgKG5ld0h0bWwpIHtcblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpID0gbmV3Vk5vZGUucHJvcHMuY2hpbGRyZW47XG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdGRvbSxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShpKSA/IGkgOiBbaV0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcgJiYgbm9kZVR5cGUgIT09ICdmb3JlaWduT2JqZWN0Jyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cblx0XHRcdC8vIFJlbW92ZSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgcGFydCBvZiBhbnkgdm5vZGUuXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldICE9IG51bGwpIHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gKGFzIGFib3ZlLCBkb24ndCBkaWZmIHByb3BzIGR1cmluZyBoeWRyYXRpb24pXG5cdFx0aWYgKCFpc0h5ZHJhdGluZykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQndmFsdWUnIGluIG5ld1Byb3BzICYmXG5cdFx0XHRcdChpID0gbmV3UHJvcHMudmFsdWUpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0Ly8gIzI3NTYgRm9yIHRoZSA8cHJvZ3Jlc3M+LWVsZW1lbnQgdGhlIGluaXRpYWwgdmFsdWUgaXMgMCxcblx0XHRcdFx0Ly8gZGVzcGl0ZSB0aGUgYXR0cmlidXRlIG5vdCBiZWluZyBwcmVzZW50LiBXaGVuIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gaXMgbWlzc2luZyB0aGUgcHJvZ3Jlc3MgYmFyIGlzIHRyZWF0ZWQgYXMgaW5kZXRlcm1pbmF0ZS5cblx0XHRcdFx0Ly8gVG8gZml4IHRoYXQgd2UnbGwgYWx3YXlzIHVwZGF0ZSBpdCB3aGVuIGl0IGlzIDAgZm9yIHByb2dyZXNzIGVsZW1lbnRzXG5cdFx0XHRcdChpICE9PSBkb20udmFsdWUgfHxcblx0XHRcdFx0XHQobm9kZVR5cGUgPT09ICdwcm9ncmVzcycgJiYgIWkpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT09ICdvcHRpb24nICYmIGkgIT09IG9sZFByb3BzLnZhbHVlKSlcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sICd2YWx1ZScsIGksIG9sZFByb3BzLnZhbHVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCdjaGVja2VkJyBpbiBuZXdQcm9wcyAmJlxuXHRcdFx0XHQoaSA9IG5ld1Byb3BzLmNoZWNrZWQpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0aSAhPT0gZG9tLmNoZWNrZWRcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sICdjaGVja2VkJywgaSwgb2xkUHJvcHMuY2hlY2tlZCwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykgcmVmKHZhbHVlKTtcblx0XHRlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBwYXJlbnRWTm9kZSBUaGUgcGFyZW50IG9mIHRoZSBWTm9kZSB0aGF0XG4gKiBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PT0gdm5vZGUuX2RvbSkgYXBwbHlSZWYociwgbnVsbCwgcGFyZW50Vk5vZGUpO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gbnVsbCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IG51bGw7XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY2hpbGRyZW4pKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAocltpXSkge1xuXHRcdFx0XHR1bm1vdW50KHJbaV0sIHBhcmVudFZOb2RlLCB0eXBlb2Ygdm5vZGUudHlwZSAhPSAnZnVuY3Rpb24nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIXNraXBSZW1vdmUgJiYgdm5vZGUuX2RvbSAhPSBudWxsKSByZW1vdmVOb2RlKHZub2RlLl9kb20pO1xuXG5cdC8vIE11c3QgYmUgc2V0IHRvIGB1bmRlZmluZWRgIHRvIHByb3Blcmx5IGNsZWFuIHVwIGBfbmV4dERvbWBcblx0Ly8gZm9yIHdoaWNoIGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlLiBTZWUgY29tbWVudCBpbiBgY3JlYXRlLWVsZW1lbnQuanNgXG5cdHZub2RlLl9kb20gPSB2bm9kZS5fbmV4dERvbSA9IHVuZGVmaW5lZDtcbn1cblxuLyoqIFRoZSBgLnJlbmRlcigpYCBtZXRob2QgZm9yIGEgUEZDIGJhY2tpbmcgaW5zdGFuY2UuICovXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuIiwgImltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbW1pdFJvb3QsIGRpZmYgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogUmVuZGVyIGEgUHJlYWN0IHZpcnR1YWwgbm9kZSBpbnRvIGEgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG9cbiAqIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09PSAnZnVuY3Rpb24nO1xuXG5cdC8vIFRvIGJlIGFibGUgdG8gc3VwcG9ydCBjYWxsaW5nIGByZW5kZXIoKWAgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWVcblx0Ly8gRE9NIG5vZGUsIHdlIG5lZWQgdG8gb2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyB0cmVlLiBXZSBkb1xuXHQvLyB0aGlzIGJ5IGFzc2lnbmluZyBhIG5ldyBgX2NoaWxkcmVuYCBwcm9wZXJ0eSB0byBET00gbm9kZXMgd2hpY2ggcG9pbnRzXG5cdC8vIHRvIHRoZSBsYXN0IHJlbmRlcmVkIHRyZWUuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCwgd2hpY2hcblx0Ly8gbWVhbnMgdGhhdCB3ZSBhcmUgbW91bnRpbmcgYSBuZXcgdHJlZSBmb3IgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBvbGRWTm9kZSA9IGlzSHlkcmF0aW5nXG5cdFx0PyBudWxsXG5cdFx0OiAocmVwbGFjZU5vZGUgJiYgcmVwbGFjZU5vZGUuX2NoaWxkcmVuKSB8fCBwYXJlbnREb20uX2NoaWxkcmVuO1xuXG5cdHZub2RlID0gKFxuXHRcdCghaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGUpIHx8XG5cdFx0cGFyZW50RG9tXG5cdCkuX2NoaWxkcmVuID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgW3Zub2RlXSk7XG5cblx0Ly8gTGlzdCBvZiBlZmZlY3RzIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgZGlmZmluZy5cblx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IFtyZXBsYWNlTm9kZV1cblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdD8gbnVsbFxuXHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZFxuXHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0OiBudWxsLFxuXHRcdGNvbW1pdFF1ZXVlLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyByZXBsYWNlTm9kZVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkLFxuXHRcdGlzSHlkcmF0aW5nXG5cdCk7XG5cblx0Ly8gRmx1c2ggYWxsIHF1ZXVlZCBlZmZlY3RzXG5cdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvXG4gKiB1cGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUodm5vZGUsIHBhcmVudERvbSkge1xuXHRyZW5kZXIodm5vZGUsIHBhcmVudERvbSwgaHlkcmF0ZSk7XG59XG4iLCAiaW1wb3J0IHsgYXNzaWduLCBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHMgY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZCBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdG51bGxcblx0KTtcbn1cbiIsICIvKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXdcbiAqIHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdCBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyXG4gKiBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmcgdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsIGN0b3IsIGhhbmRsZWQ7XG5cblx0Zm9yICg7ICh2bm9kZSA9IHZub2RlLl9wYXJlbnQpOyApIHtcblx0XHRpZiAoKGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQpICYmICFjb21wb25lbnQuX3Byb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGN0b3IgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG5cblx0XHRcdFx0aWYgKGN0b3IgJiYgY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRTdGF0ZShjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikpO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8gfHwge30pO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBhbiBlcnJvciBib3VuZGFyeS4gTWFyayBpdCBhcyBoYXZpbmcgYmFpbGVkIG91dCwgYW5kIHdoZXRoZXIgaXQgd2FzIG1pZC1oeWRyYXRpb24uXG5cdFx0XHRcdGlmIChoYW5kbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChjb21wb25lbnQuX3BlbmRpbmdFcnJvciA9IGNvbXBvbmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRocm93IGVycm9yO1xufVxuIiwgIi8vIERPTSBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIE5PVCBoYXZlIFwicHhcIiBhZGRlZCB3aGVuIG51bWVyaWNcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxeLS0vaTtcblxuY29uc3QgRU5DT0RFRF9FTlRJVElFUyA9IC9bJjw+XCJdLztcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKGlucHV0KSB7XG5cdGNvbnN0IHMgPSBTdHJpbmcoaW5wdXQpO1xuXHRpZiAoIUVOQ09ERURfRU5USVRJRVMudGVzdChzKSkge1xuXHRcdHJldHVybiBzO1xuXHR9XG5cdHJldHVybiBzXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59XG5cbmV4cG9ydCBsZXQgaW5kZW50ID0gKHMsIGNoYXIpID0+XG5cdFN0cmluZyhzKS5yZXBsYWNlKC8oXFxuKykvZywgJyQxJyArIChjaGFyIHx8ICdcXHQnKSk7XG5cbmV4cG9ydCBsZXQgaXNMYXJnZVN0cmluZyA9IChzLCBsZW5ndGgsIGlnbm9yZUxpbmVzKSA9PlxuXHRTdHJpbmcocykubGVuZ3RoID4gKGxlbmd0aCB8fCA0MCkgfHxcblx0KCFpZ25vcmVMaW5lcyAmJiBTdHJpbmcocykuaW5kZXhPZignXFxuJykgIT09IC0xKSB8fFxuXHRTdHJpbmcocykuaW5kZXhPZignPCcpICE9PSAtMTtcblxuY29uc3QgSlNfVE9fQ1NTID0ge307XG5cbi8vIENvbnZlcnQgYW4gT2JqZWN0IHN0eWxlIHRvIGEgQ1NTVGV4dCBzdHJpbmdcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZU9ialRvQ3NzKHMpIHtcblx0bGV0IHN0ciA9ICcnO1xuXHRmb3IgKGxldCBwcm9wIGluIHMpIHtcblx0XHRsZXQgdmFsID0gc1twcm9wXTtcblx0XHRpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xuXHRcdFx0aWYgKHN0cikgc3RyICs9ICcgJztcblx0XHRcdC8vIHN0ciArPSBqc1RvQ3NzKHByb3ApO1xuXHRcdFx0c3RyICs9XG5cdFx0XHRcdHByb3BbMF0gPT0gJy0nXG5cdFx0XHRcdFx0PyBwcm9wXG5cdFx0XHRcdFx0OiBKU19UT19DU1NbcHJvcF0gfHxcblx0XHRcdFx0XHQgIChKU19UT19DU1NbcHJvcF0gPSBwcm9wLnJlcGxhY2UoLyhbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0c3RyICs9ICc6ICc7XG5cdFx0XHRzdHIgKz0gdmFsO1xuXHRcdFx0aWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIElTX05PTl9ESU1FTlNJT05BTC50ZXN0KHByb3ApID09PSBmYWxzZSkge1xuXHRcdFx0XHRzdHIgKz0gJ3B4Jztcblx0XHRcdH1cblx0XHRcdHN0ciArPSAnOyc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHIgfHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENvcHkgYWxsIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIG9udG8gYG9iamAuXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIE9iamVjdCBvbnRvIHdoaWNoIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvcGllZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBPYmplY3QgZnJvbSB3aGljaCB0byBjb3B5IHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEdldCBmbGF0dGVuZWQgY2hpbGRyZW4gZnJvbSB0aGUgY2hpbGRyZW4gcHJvcFxuICogQHBhcmFtIHtBcnJheX0gYWNjdW11bGF0b3JcbiAqIEBwYXJhbSB7YW55fSBjaGlsZHJlbiBBIGBwcm9wcy5jaGlsZHJlbmAgb3BhcXVlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gYWNjdW11bGF0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbihhY2N1bXVsYXRvciwgY2hpbGRyZW4pIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4ucmVkdWNlKGdldENoaWxkcmVuLCBhY2N1bXVsYXRvcik7XG5cdH0gZWxzZSBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gZmFsc2UpIHtcblx0XHRhY2N1bXVsYXRvci5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gYWNjdW11bGF0b3I7XG59XG4iLCAiaW1wb3J0IHtcblx0ZW5jb2RlRW50aXRpZXMsXG5cdGluZGVudCxcblx0aXNMYXJnZVN0cmluZyxcblx0c3R5bGVPYmpUb0Nzcyxcblx0YXNzaWduLFxuXHRnZXRDaGlsZHJlblxufSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgncHJlYWN0JykuVk5vZGV9IFZOb2RlICovXG5cbmNvbnN0IFNIQUxMT1cgPSB7IHNoYWxsb3c6IHRydWUgfTtcblxuLy8gY29tcG9uZW50cyB3aXRob3V0IG5hbWVzLCBrZXB0IGFzIGEgaGFzaCBmb3IgbGF0ZXIgY29tcGFyaXNvbiB0byByZXR1cm4gY29uc2lzdGVudCBVbm5hbWVkQ29tcG9uZW50WFggbmFtZXMuXG5jb25zdCBVTk5BTUVEID0gW107XG5cbmNvbnN0IFZPSURfRUxFTUVOVFMgPVxuXHQvXihhcmVhfGJhc2V8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW18c291cmNlfHRyYWNrfHdicikkLztcblxuY29uc3QgVU5TQUZFX05BTUUgPSAvW1xcc1xcblxcXFwvPSdcIlxcMDw+XS87XG5cbmZ1bmN0aW9uIG1hcmtBc0RpcnR5KCkge1xuXHR0aGlzLl9fZCA9IHRydWU7XG59XG5cbi8qKiBSZW5kZXIgUHJlYWN0IEpTWCArIENvbXBvbmVudHMgdG8gYW4gSFRNTCBzdHJpbmcuXG4gKlx0QG5hbWUgcmVuZGVyXG4gKlx0QGZ1bmN0aW9uXG4gKlx0QHBhcmFtIHtWTm9kZX0gdm5vZGVcdEpTWCBWTm9kZSB0byByZW5kZXIuXG4gKlx0QHBhcmFtIHtPYmplY3R9IFtjb250ZXh0PXt9XVx0T3B0aW9uYWxseSBwYXNzIGFuIGluaXRpYWwgY29udGV4dCBvYmplY3QgdGhyb3VnaCB0aGUgcmVuZGVyIHBhdGguXG4gKlx0QHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XVx0UmVuZGVyaW5nIG9wdGlvbnNcbiAqXHRAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnNoYWxsb3c9ZmFsc2VdXHRJZiBgdHJ1ZWAsIHJlbmRlcnMgbmVzdGVkIENvbXBvbmVudHMgYXMgSFRNTCBlbGVtZW50cyAoYDxGb28gYT1cImJcIiAvPmApLlxuICpcdEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMueG1sPWZhbHNlXVx0XHRJZiBgdHJ1ZWAsIHVzZXMgc2VsZi1jbG9zaW5nIHRhZ3MgZm9yIGVsZW1lbnRzIHdpdGhvdXQgY2hpbGRyZW4uXG4gKlx0QHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5wcmV0dHk9ZmFsc2VdXHRcdElmIGB0cnVlYCwgYWRkcyB3aGl0ZXNwYWNlIGZvciByZWFkYWJpbGl0eVxuICpcdEBwYXJhbSB7UmVnRXhwfHVuZGVmaW5lZH0gW29wdGlvbnMudm9pZEVsZW1lbnRzXSAgICAgICBSZWdlRXggdGhhdCBtYXRjaGVzIGVsZW1lbnRzIHRoYXQgYXJlIGNvbnNpZGVyZWQgdm9pZCAoc2VsZi1jbG9zaW5nKVxuICovXG5yZW5kZXJUb1N0cmluZy5yZW5kZXIgPSByZW5kZXJUb1N0cmluZztcblxuLyoqIE9ubHkgcmVuZGVyIGVsZW1lbnRzLCBsZWF2aW5nIENvbXBvbmVudHMgaW5saW5lIGFzIGA8Q29tcG9uZW50TmFtZSAuLi4gLz5gLlxuICpcdFRoaXMgbWV0aG9kIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBhbGlhcyBmb3IgYHJlbmRlcih2bm9kZSwgY29udGV4dCwgeyBzaGFsbG93OnRydWUgfSlgXG4gKlx0QG5hbWUgc2hhbGxvd1xuICpcdEBmdW5jdGlvblxuICpcdEBwYXJhbSB7Vk5vZGV9IHZub2RlXHRKU1ggVk5vZGUgdG8gcmVuZGVyLlxuICpcdEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dD17fV1cdE9wdGlvbmFsbHkgcGFzcyBhbiBpbml0aWFsIGNvbnRleHQgb2JqZWN0IHRocm91Z2ggdGhlIHJlbmRlciBwYXRoLlxuICovXG5sZXQgc2hhbGxvd1JlbmRlciA9ICh2bm9kZSwgY29udGV4dCkgPT4gcmVuZGVyVG9TdHJpbmcodm5vZGUsIGNvbnRleHQsIFNIQUxMT1cpO1xuXG5jb25zdCBFTVBUWV9BUlIgPSBbXTtcbmZ1bmN0aW9uIHJlbmRlclRvU3RyaW5nKHZub2RlLCBjb250ZXh0LCBvcHRzKSB7XG5cdGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHQvLyBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGByZW5kZXJUb1N0cmluZ2AgaXMgc3luY2hyb25vdXMgYW5kIHdlXG5cdC8vIHRoZXJlZm9yZSBkb24ndCBleGVjdXRlIGFueSBlZmZlY3RzLiBUbyBkbyB0aGF0IHdlIHBhc3MgYW4gZW1wdHlcblx0Ly8gYXJyYXkgdG8gYG9wdGlvbnMuX2NvbW1pdGAgKGBfX2NgKS4gQnV0IHdlIGNhbiBnbyBvbmUgc3RlcCBmdXJ0aGVyXG5cdC8vIGFuZCBhdm9pZCBhIGxvdCBvZiBkaXJ0eSBjaGVja3MgYW5kIGFsbG9jYXRpb25zIGJ5IHNldHRpbmdcblx0Ly8gYG9wdGlvbnMuX3NraXBFZmZlY3RzYCAoYF9fc2ApIHRvby5cblx0Y29uc3QgcHJldmlvdXNTa2lwRWZmZWN0cyA9IG9wdGlvbnMuX19zO1xuXHRvcHRpb25zLl9fcyA9IHRydWU7XG5cblx0Y29uc3QgcmVzID0gX3JlbmRlclRvU3RyaW5nKHZub2RlLCBjb250ZXh0LCBvcHRzKTtcblxuXHQvLyBvcHRpb25zLl9jb21taXQsIHdlIGRvbid0IHNjaGVkdWxlIGFueSBlZmZlY3RzIGluIHRoaXMgbGlicmFyeSByaWdodCBub3csXG5cdC8vIHNvIHdlIGNhbiBwYXNzIGFuIGVtcHR5IHF1ZXVlIHRvIHRoaXMgaG9vay5cblx0aWYgKG9wdGlvbnMuX19jKSBvcHRpb25zLl9fYyh2bm9kZSwgRU1QVFlfQVJSKTtcblx0RU1QVFlfQVJSLmxlbmd0aCA9IDA7XG5cdG9wdGlvbnMuX19zID0gcHJldmlvdXNTa2lwRWZmZWN0cztcblx0cmV0dXJuIHJlcztcbn1cblxuLyoqIFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBhbiBhbGlhcyBvZiBgcmVuZGVyKClgLiAqL1xuZnVuY3Rpb24gX3JlbmRlclRvU3RyaW5nKHZub2RlLCBjb250ZXh0LCBvcHRzLCBpbm5lciwgaXNTdmdNb2RlLCBzZWxlY3RWYWx1ZSkge1xuXHRpZiAodm5vZGUgPT0gbnVsbCB8fCB0eXBlb2Ygdm5vZGUgPT09ICdib29sZWFuJykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8vICN0ZXh0IG5vZGVzXG5cdGlmICh0eXBlb2Ygdm5vZGUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGVuY29kZUVudGl0aWVzKHZub2RlKTtcblx0fVxuXG5cdGxldCBwcmV0dHkgPSBvcHRzLnByZXR0eSxcblx0XHRpbmRlbnRDaGFyID0gcHJldHR5ICYmIHR5cGVvZiBwcmV0dHkgPT09ICdzdHJpbmcnID8gcHJldHR5IDogJ1xcdCc7XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG5cdFx0bGV0IHJlbmRlcmVkID0gJyc7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2bm9kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHByZXR0eSAmJiBpID4gMCkgcmVuZGVyZWQgPSByZW5kZXJlZCArICdcXG4nO1xuXHRcdFx0cmVuZGVyZWQgPVxuXHRcdFx0XHRyZW5kZXJlZCArXG5cdFx0XHRcdF9yZW5kZXJUb1N0cmluZyh2bm9kZVtpXSwgY29udGV4dCwgb3B0cywgaW5uZXIsIGlzU3ZnTW9kZSwgc2VsZWN0VmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVuZGVyZWQ7XG5cdH1cblxuXHRsZXQgbm9kZU5hbWUgPSB2bm9kZS50eXBlLFxuXHRcdHByb3BzID0gdm5vZGUucHJvcHMsXG5cdFx0aXNDb21wb25lbnQgPSBmYWxzZTtcblxuXHQvLyBjb21wb25lbnRzXG5cdGlmICh0eXBlb2Ygbm9kZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0aWYgKG9wdHMuc2hhbGxvdyAmJiAoaW5uZXIgfHwgb3B0cy5yZW5kZXJSb290Q29tcG9uZW50ID09PSBmYWxzZSkpIHtcblx0XHRcdG5vZGVOYW1lID0gZ2V0Q29tcG9uZW50TmFtZShub2RlTmFtZSk7XG5cdFx0fSBlbHNlIGlmIChub2RlTmFtZSA9PT0gRnJhZ21lbnQpIHtcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdFx0XHRnZXRDaGlsZHJlbihjaGlsZHJlbiwgdm5vZGUucHJvcHMuY2hpbGRyZW4pO1xuXHRcdFx0cmV0dXJuIF9yZW5kZXJUb1N0cmluZyhcblx0XHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdG9wdHMsXG5cdFx0XHRcdG9wdHMuc2hhbGxvd0hpZ2hPcmRlciAhPT0gZmFsc2UsXG5cdFx0XHRcdGlzU3ZnTW9kZSxcblx0XHRcdFx0c2VsZWN0VmFsdWVcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCByZW5kZXJlZDtcblxuXHRcdFx0bGV0IGMgPSAodm5vZGUuX19jID0ge1xuXHRcdFx0XHRfX3Y6IHZub2RlLFxuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0XHRwcm9wczogdm5vZGUucHJvcHMsXG5cdFx0XHRcdC8vIHNpbGVudGx5IGRyb3Agc3RhdGUgdXBkYXRlc1xuXHRcdFx0XHRzZXRTdGF0ZTogbWFya0FzRGlydHksXG5cdFx0XHRcdGZvcmNlVXBkYXRlOiBtYXJrQXNEaXJ0eSxcblx0XHRcdFx0X19kOiB0cnVlLFxuXHRcdFx0XHQvLyBob29rc1xuXHRcdFx0XHRfX2g6IFtdXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gb3B0aW9ucy5fZGlmZlxuXHRcdFx0aWYgKG9wdGlvbnMuX19iKSBvcHRpb25zLl9fYih2bm9kZSk7XG5cblx0XHRcdC8vIG9wdGlvbnMuX3JlbmRlclxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9fcjtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbm9kZU5hbWUucHJvdG90eXBlIHx8XG5cdFx0XHRcdHR5cGVvZiBub2RlTmFtZS5wcm90b3R5cGUucmVuZGVyICE9PSAnZnVuY3Rpb24nXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gTmVjZXNzYXJ5IGZvciBjcmVhdGVDb250ZXh0IGFwaS4gU2V0dGluZyB0aGlzIHByb3BlcnR5IHdpbGwgcGFzc1xuXHRcdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdFx0bGV0IGN4VHlwZSA9IG5vZGVOYW1lLmNvbnRleHRUeXBlO1xuXHRcdFx0XHRsZXQgcHJvdmlkZXIgPSBjeFR5cGUgJiYgY29udGV4dFtjeFR5cGUuX19jXTtcblx0XHRcdFx0bGV0IGNjdHggPVxuXHRcdFx0XHRcdGN4VHlwZSAhPSBudWxsXG5cdFx0XHRcdFx0XHQ/IHByb3ZpZGVyXG5cdFx0XHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHRcdFx0OiBjeFR5cGUuX19cblx0XHRcdFx0XHRcdDogY29udGV4dDtcblxuXHRcdFx0XHQvLyBJZiBhIGhvb2sgaW52b2tlcyBzZXRTdGF0ZSgpIHRvIGludmFsaWRhdGUgdGhlIGNvbXBvbmVudCBkdXJpbmcgcmVuZGVyaW5nLFxuXHRcdFx0XHQvLyByZS1yZW5kZXIgaXQgdXAgdG8gMjUgdGltZXMgdG8gYWxsb3cgXCJzZXR0bGluZ1wiIG9mIG1lbW9pemVkIHN0YXRlcy5cblx0XHRcdFx0Ly8gTm90ZTpcblx0XHRcdFx0Ly8gICBUaGlzIHdpbGwgbmVlZCB0byBiZSB1cGRhdGVkIGZvciBQcmVhY3QgMTEgdG8gdXNlIGludGVybmFsLmZsYWdzIHJhdGhlciB0aGFuIGNvbXBvbmVudC5fZGlydHk6XG5cdFx0XHRcdC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9ibG9iL2Q0Y2E2ZmRiMTliYzcxNWU0OWZkMTQ0ZTY5ZjcyOTZiMmY0ZGFhNDAvc3JjL2RpZmYvY29tcG9uZW50LmpzI0wzNS1MNDRcblx0XHRcdFx0bGV0IGNvdW50ID0gMDtcblx0XHRcdFx0d2hpbGUgKGMuX19kICYmIGNvdW50KysgPCAyNSkge1xuXHRcdFx0XHRcdGMuX19kID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayh2bm9kZSk7XG5cblx0XHRcdFx0XHQvLyBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnRzXG5cdFx0XHRcdFx0cmVuZGVyZWQgPSBub2RlTmFtZS5jYWxsKHZub2RlLl9fYywgcHJvcHMsIGNjdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjbGFzcy1iYXNlZCBjb21wb25lbnRzXG5cdFx0XHRcdGxldCBjeFR5cGUgPSBub2RlTmFtZS5jb250ZXh0VHlwZTtcblx0XHRcdFx0bGV0IHByb3ZpZGVyID0gY3hUeXBlICYmIGNvbnRleHRbY3hUeXBlLl9fY107XG5cdFx0XHRcdGxldCBjY3R4ID1cblx0XHRcdFx0XHRjeFR5cGUgIT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0XHRcdDogY3hUeXBlLl9fXG5cdFx0XHRcdFx0XHQ6IGNvbnRleHQ7XG5cblx0XHRcdFx0Ly8gYyA9IG5ldyBub2RlTmFtZShwcm9wcywgY29udGV4dCk7XG5cdFx0XHRcdGMgPSB2bm9kZS5fX2MgPSBuZXcgbm9kZU5hbWUocHJvcHMsIGNjdHgpO1xuXHRcdFx0XHRjLl9fdiA9IHZub2RlO1xuXHRcdFx0XHQvLyB0dXJuIG9mZiBzdGF0ZWZ1bCByZS1yZW5kZXJpbmc6XG5cdFx0XHRcdGMuX2RpcnR5ID0gYy5fX2QgPSB0cnVlO1xuXHRcdFx0XHRjLnByb3BzID0gcHJvcHM7XG5cdFx0XHRcdGlmIChjLnN0YXRlID09IG51bGwpIGMuc3RhdGUgPSB7fTtcblxuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IG51bGwgJiYgYy5fX3MgPT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGMuX19zID0gYy5zdGF0ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGMuY29udGV4dCA9IGNjdHg7XG5cdFx0XHRcdGlmIChub2RlTmFtZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMpXG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGFzc2lnbihcblx0XHRcdFx0XHRcdGFzc2lnbih7fSwgYy5zdGF0ZSksXG5cdFx0XHRcdFx0XHRub2RlTmFtZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoYy5wcm9wcywgYy5zdGF0ZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRlbHNlIGlmIChjLmNvbXBvbmVudFdpbGxNb3VudCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGUgdXNlciBjYWxsZWQgc2V0U3RhdGUgaW4gY1dNIHdlIG5lZWQgdG8gZmx1c2ggcGVuZGluZyxcblx0XHRcdFx0XHQvLyBzdGF0ZSB1cGRhdGVzLiBUaGlzIGlzIHRoZSBzYW1lIGJlaGF2aW91ciBpbiBSZWFjdC5cblx0XHRcdFx0XHRjLnN0YXRlID1cblx0XHRcdFx0XHRcdGMuX25leHRTdGF0ZSAhPT0gYy5zdGF0ZVxuXHRcdFx0XHRcdFx0XHQ/IGMuX25leHRTdGF0ZVxuXHRcdFx0XHRcdFx0XHQ6IGMuX19zICE9PSBjLnN0YXRlXG5cdFx0XHRcdFx0XHRcdD8gYy5fX3Ncblx0XHRcdFx0XHRcdFx0OiBjLnN0YXRlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sodm5vZGUpO1xuXG5cdFx0XHRcdHJlbmRlcmVkID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGMuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHRcdGNvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBjb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRpb25zLmRpZmZlZCkgb3B0aW9ucy5kaWZmZWQodm5vZGUpO1xuXHRcdFx0cmV0dXJuIF9yZW5kZXJUb1N0cmluZyhcblx0XHRcdFx0cmVuZGVyZWQsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdG9wdHMsXG5cdFx0XHRcdG9wdHMuc2hhbGxvd0hpZ2hPcmRlciAhPT0gZmFsc2UsXG5cdFx0XHRcdGlzU3ZnTW9kZSxcblx0XHRcdFx0c2VsZWN0VmFsdWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gcmVuZGVyIEpTWCB0byBIVE1MXG5cdGxldCBzID0gJzwnICsgbm9kZU5hbWUsXG5cdFx0cHJvcENoaWxkcmVuLFxuXHRcdGh0bWw7XG5cblx0aWYgKHByb3BzKSB7XG5cdFx0bGV0IGF0dHJzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXG5cdFx0Ly8gYWxsb3cgc29ydGluZyBsZXhpY29ncmFwaGljYWxseSBmb3IgbW9yZSBkZXRlcm1pbmlzbSAodXNlZnVsIGZvciB0ZXN0cywgc3VjaCBhcyB2aWEgcHJlYWN0LWpzeC1jaGFpKVxuXHRcdGlmIChvcHRzICYmIG9wdHMuc29ydEF0dHJpYnV0ZXMgPT09IHRydWUpIGF0dHJzLnNvcnQoKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBuYW1lID0gYXR0cnNbaV0sXG5cdFx0XHRcdHYgPSBwcm9wc1tuYW1lXTtcblx0XHRcdGlmIChuYW1lID09PSAnY2hpbGRyZW4nKSB7XG5cdFx0XHRcdHByb3BDaGlsZHJlbiA9IHY7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoVU5TQUZFX05BTUUudGVzdChuYW1lKSkgY29udGludWU7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0IShvcHRzICYmIG9wdHMuYWxsQXR0cmlidXRlcykgJiZcblx0XHRcdFx0KG5hbWUgPT09ICdrZXknIHx8XG5cdFx0XHRcdFx0bmFtZSA9PT0gJ3JlZicgfHxcblx0XHRcdFx0XHRuYW1lID09PSAnX19zZWxmJyB8fFxuXHRcdFx0XHRcdG5hbWUgPT09ICdfX3NvdXJjZScpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRpZiAobmFtZSA9PT0gJ2RlZmF1bHRWYWx1ZScpIHtcblx0XHRcdFx0bmFtZSA9ICd2YWx1ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKG5hbWUgPT09ICdkZWZhdWx0Q2hlY2tlZCcpIHtcblx0XHRcdFx0bmFtZSA9ICdjaGVja2VkJztcblx0XHRcdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2RlZmF1bHRTZWxlY3RlZCcpIHtcblx0XHRcdFx0bmFtZSA9ICdzZWxlY3RlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgcHJvcHMuY2xhc3MgIT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcblx0XHRcdFx0bmFtZSA9ICdjbGFzcyc7XG5cdFx0XHR9IGVsc2UgaWYgKGlzU3ZnTW9kZSAmJiAvXnhsaW5rOj8uLy50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXnhsaW5rOj8vLCAneGxpbms6Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcblx0XHRcdFx0aWYgKHByb3BzLmZvcikgY29udGludWU7XG5cdFx0XHRcdG5hbWUgPSAnZm9yJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5hbWUgPT09ICdzdHlsZScgJiYgdiAmJiB0eXBlb2YgdiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0diA9IHN0eWxlT2JqVG9Dc3Modik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFsd2F5cyB1c2Ugc3RyaW5nIHZhbHVlcyBpbnN0ZWFkIG9mIGJvb2xlYW5zIGZvciBhcmlhIGF0dHJpYnV0ZXNcblx0XHRcdC8vIGFsc28gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvcHVsbC8yMzQ3L2ZpbGVzXG5cdFx0XHRpZiAobmFtZVswXSA9PT0gJ2EnICYmIG5hbWVbJzEnXSA9PT0gJ3InICYmIHR5cGVvZiB2ID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0diA9IFN0cmluZyh2KTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGhvb2tlZCA9XG5cdFx0XHRcdG9wdHMuYXR0cmlidXRlSG9vayAmJlxuXHRcdFx0XHRvcHRzLmF0dHJpYnV0ZUhvb2sobmFtZSwgdiwgY29udGV4dCwgb3B0cywgaXNDb21wb25lbnQpO1xuXHRcdFx0aWYgKGhvb2tlZCB8fCBob29rZWQgPT09ICcnKSB7XG5cdFx0XHRcdHMgPSBzICsgaG9va2VkO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5hbWUgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0aHRtbCA9IHYgJiYgdi5fX2h0bWw7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGVOYW1lID09PSAndGV4dGFyZWEnICYmIG5hbWUgPT09ICd2YWx1ZScpIHtcblx0XHRcdFx0Ly8gPHRleHRhcmVhIHZhbHVlPVwiYSZiXCI+IC0tPiA8dGV4dGFyZWE+YSZhbXA7YjwvdGV4dGFyZWE+XG5cdFx0XHRcdHByb3BDaGlsZHJlbiA9IHY7XG5cdFx0XHR9IGVsc2UgaWYgKCh2IHx8IHYgPT09IDAgfHwgdiA9PT0gJycpICYmIHR5cGVvZiB2ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGlmICh2ID09PSB0cnVlIHx8IHYgPT09ICcnKSB7XG5cdFx0XHRcdFx0diA9IG5hbWU7XG5cdFx0XHRcdFx0Ly8gaW4gbm9uLXhtbCBtb2RlLCBhbGxvdyBib29sZWFuIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRpZiAoIW9wdHMgfHwgIW9wdHMueG1sKSB7XG5cdFx0XHRcdFx0XHRzID0gcyArICcgJyArIG5hbWU7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobmFtZSA9PT0gJ3ZhbHVlJykge1xuXHRcdFx0XHRcdGlmIChub2RlTmFtZSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdFx0XHRcdHNlbGVjdFZhbHVlID0gdjtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHQvLyBJZiB3ZSdyZSBsb29raW5nIGF0IGFuIDxvcHRpb24+IGFuZCBpdCdzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb25lXG5cdFx0XHRcdFx0XHRub2RlTmFtZSA9PT0gJ29wdGlvbicgJiZcblx0XHRcdFx0XHRcdHNlbGVjdFZhbHVlID09IHYgJiZcblx0XHRcdFx0XHRcdC8vIGFuZCB0aGUgPG9wdGlvbj4gZG9lc24ndCBhbHJlYWR5IGhhdmUgYSBzZWxlY3RlZCBhdHRyaWJ1dGUgb24gaXRcblx0XHRcdFx0XHRcdHR5cGVvZiBwcm9wcy5zZWxlY3RlZCA9PT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHMgPSBzICsgYCBzZWxlY3RlZGA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHMgPSBzICsgYCAke25hbWV9PVwiJHtlbmNvZGVFbnRpdGllcyh2KX1cImA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gYWNjb3VudCBmb3IgPjEgbXVsdGlsaW5lIGF0dHJpYnV0ZVxuXHRpZiAocHJldHR5KSB7XG5cdFx0bGV0IHN1YiA9IHMucmVwbGFjZSgvXFxuXFxzKi8sICcgJyk7XG5cdFx0aWYgKHN1YiAhPT0gcyAmJiAhfnN1Yi5pbmRleE9mKCdcXG4nKSkgcyA9IHN1Yjtcblx0XHRlbHNlIGlmIChwcmV0dHkgJiYgfnMuaW5kZXhPZignXFxuJykpIHMgPSBzICsgJ1xcbic7XG5cdH1cblxuXHRzID0gcyArICc+JztcblxuXHRpZiAoVU5TQUZFX05BTUUudGVzdChub2RlTmFtZSkpXG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke25vZGVOYW1lfSBpcyBub3QgYSB2YWxpZCBIVE1MIHRhZyBuYW1lIGluICR7c31gKTtcblxuXHRsZXQgaXNWb2lkID1cblx0XHRWT0lEX0VMRU1FTlRTLnRlc3Qobm9kZU5hbWUpIHx8XG5cdFx0KG9wdHMudm9pZEVsZW1lbnRzICYmIG9wdHMudm9pZEVsZW1lbnRzLnRlc3Qobm9kZU5hbWUpKTtcblx0bGV0IHBpZWNlcyA9IFtdO1xuXG5cdGxldCBjaGlsZHJlbjtcblx0aWYgKGh0bWwpIHtcblx0XHQvLyBpZiBtdWx0aWxpbmUsIGluZGVudC5cblx0XHRpZiAocHJldHR5ICYmIGlzTGFyZ2VTdHJpbmcoaHRtbCkpIHtcblx0XHRcdGh0bWwgPSAnXFxuJyArIGluZGVudENoYXIgKyBpbmRlbnQoaHRtbCwgaW5kZW50Q2hhcik7XG5cdFx0fVxuXHRcdHMgPSBzICsgaHRtbDtcblx0fSBlbHNlIGlmIChcblx0XHRwcm9wQ2hpbGRyZW4gIT0gbnVsbCAmJlxuXHRcdGdldENoaWxkcmVuKChjaGlsZHJlbiA9IFtdKSwgcHJvcENoaWxkcmVuKS5sZW5ndGhcblx0KSB7XG5cdFx0bGV0IGhhc0xhcmdlID0gcHJldHR5ICYmIH5zLmluZGV4T2YoJ1xcbicpO1xuXHRcdGxldCBsYXN0V2FzVGV4dCA9IGZhbHNlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cblx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkICE9PSBmYWxzZSkge1xuXHRcdFx0XHRsZXQgY2hpbGRTdmdNb2RlID1cblx0XHRcdFx0XHRcdG5vZGVOYW1lID09PSAnc3ZnJ1xuXHRcdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdFx0OiBub2RlTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnXG5cdFx0XHRcdFx0XHRcdD8gZmFsc2Vcblx0XHRcdFx0XHRcdFx0OiBpc1N2Z01vZGUsXG5cdFx0XHRcdFx0cmV0ID0gX3JlbmRlclRvU3RyaW5nKFxuXHRcdFx0XHRcdFx0Y2hpbGQsXG5cdFx0XHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0XHRcdFx0b3B0cyxcblx0XHRcdFx0XHRcdHRydWUsXG5cdFx0XHRcdFx0XHRjaGlsZFN2Z01vZGUsXG5cdFx0XHRcdFx0XHRzZWxlY3RWYWx1ZVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKHByZXR0eSAmJiAhaGFzTGFyZ2UgJiYgaXNMYXJnZVN0cmluZyhyZXQpKSBoYXNMYXJnZSA9IHRydWU7XG5cblx0XHRcdFx0Ly8gU2tpcCBpZiB3ZSByZWNlaXZlZCBhbiBlbXB0eSBzdHJpbmdcblx0XHRcdFx0aWYgKHJldCkge1xuXHRcdFx0XHRcdGlmIChwcmV0dHkpIHtcblx0XHRcdFx0XHRcdGxldCBpc1RleHQgPSByZXQubGVuZ3RoID4gMCAmJiByZXRbMF0gIT0gJzwnO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzLCBvdGhlcndpc2UgZWFjaCBwaWVjZSB3b3VsZCBiZSBwcmludGVkXG5cdFx0XHRcdFx0XHQvLyBvbiBhIG5ldyBsaW5lLlxuXHRcdFx0XHRcdFx0aWYgKGxhc3RXYXNUZXh0ICYmIGlzVGV4dCkge1xuXHRcdFx0XHRcdFx0XHRwaWVjZXNbcGllY2VzLmxlbmd0aCAtIDFdICs9IHJldDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHBpZWNlcy5wdXNoKHJldCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxhc3RXYXNUZXh0ID0gaXNUZXh0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwaWVjZXMucHVzaChyZXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocHJldHR5ICYmIGhhc0xhcmdlKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gcGllY2VzLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0cGllY2VzW2ldID0gJ1xcbicgKyBpbmRlbnRDaGFyICsgaW5kZW50KHBpZWNlc1tpXSwgaW5kZW50Q2hhcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHBpZWNlcy5sZW5ndGggfHwgaHRtbCkge1xuXHRcdHMgPSBzICsgcGllY2VzLmpvaW4oJycpO1xuXHR9IGVsc2UgaWYgKG9wdHMgJiYgb3B0cy54bWwpIHtcblx0XHRyZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArICcgLz4nO1xuXHR9XG5cblx0aWYgKGlzVm9pZCAmJiAhY2hpbGRyZW4gJiYgIWh0bWwpIHtcblx0XHRzID0gcy5yZXBsYWNlKC8+JC8sICcgLz4nKTtcblx0fSBlbHNlIHtcblx0XHRpZiAocHJldHR5ICYmIH5zLmluZGV4T2YoJ1xcbicpKSBzID0gcyArICdcXG4nO1xuXHRcdHMgPSBzICsgYDwvJHtub2RlTmFtZX0+YDtcblx0fVxuXG5cdHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudCkge1xuXHRyZXR1cm4gKFxuXHRcdGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fFxuXHRcdChjb21wb25lbnQgIT09IEZ1bmN0aW9uICYmIGNvbXBvbmVudC5uYW1lKSB8fFxuXHRcdGdldEZhbGxiYWNrQ29tcG9uZW50TmFtZShjb21wb25lbnQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldEZhbGxiYWNrQ29tcG9uZW50TmFtZShjb21wb25lbnQpIHtcblx0bGV0IHN0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbXBvbmVudCksXG5cdFx0bmFtZSA9IChzdHIubWF0Y2goL15cXHMqZnVuY3Rpb25cXHMrKFteKCBdKykvKSB8fCAnJylbMV07XG5cdGlmICghbmFtZSkge1xuXHRcdC8vIHNlYXJjaCBmb3IgYW4gZXhpc3RpbmcgaW5kZXhlZCBuYW1lIGZvciB0aGUgZ2l2ZW4gY29tcG9uZW50OlxuXHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdGZvciAobGV0IGkgPSBVTk5BTUVELmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdGlmIChVTk5BTUVEW2ldID09PSBjb21wb25lbnQpIHtcblx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gbm90IGZvdW5kLCBjcmVhdGUgYSBuZXcgaW5kZXhlZCBuYW1lOlxuXHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdGluZGV4ID0gVU5OQU1FRC5wdXNoKGNvbXBvbmVudCkgLSAxO1xuXHRcdH1cblx0XHRuYW1lID0gYFVubmFtZWRDb21wb25lbnQke2luZGV4fWA7XG5cdH1cblx0cmV0dXJuIG5hbWU7XG59XG5yZW5kZXJUb1N0cmluZy5zaGFsbG93UmVuZGVyID0gc2hhbGxvd1JlbmRlcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVG9TdHJpbmc7XG5cbmV4cG9ydCB7XG5cdHJlbmRlclRvU3RyaW5nIGFzIHJlbmRlcixcblx0cmVuZGVyVG9TdHJpbmcgYXMgcmVuZGVyVG9TdGF0aWNNYXJrdXAsXG5cdHJlbmRlclRvU3RyaW5nLFxuXHRzaGFsbG93UmVuZGVyXG59O1xuIiwgInZhciBuPWZ1bmN0aW9uKHQscyxyLGUpe3ZhciB1O3NbMF09MDtmb3IodmFyIGg9MTtoPHMubGVuZ3RoO2grKyl7dmFyIHA9c1toKytdLGE9c1toXT8oc1swXXw9cD8xOjIscltzW2grK11dKTpzWysraF07Mz09PXA/ZVswXT1hOjQ9PT1wP2VbMV09T2JqZWN0LmFzc2lnbihlWzFdfHx7fSxhKTo1PT09cD8oZVsxXT1lWzFdfHx7fSlbc1srK2hdXT1hOjY9PT1wP2VbMV1bc1srK2hdXSs9YStcIlwiOnA/KHU9dC5hcHBseShhLG4odCxhLHIsW1wiXCIsbnVsbF0pKSxlLnB1c2godSksYVswXT9zWzBdfD0yOihzW2gtMl09MCxzW2hdPXUpKTplLnB1c2goYSl9cmV0dXJuIGV9LHQ9bmV3IE1hcDtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzKXt2YXIgcj10LmdldCh0aGlzKTtyZXR1cm4gcnx8KHI9bmV3IE1hcCx0LnNldCh0aGlzLHIpKSwocj1uKHRoaXMsci5nZXQocyl8fChyLnNldChzLHI9ZnVuY3Rpb24obil7Zm9yKHZhciB0LHMscj0xLGU9XCJcIix1PVwiXCIsaD1bMF0scD1mdW5jdGlvbihuKXsxPT09ciYmKG58fChlPWUucmVwbGFjZSgvXlxccypcXG5cXHMqfFxccypcXG5cXHMqJC9nLFwiXCIpKSk/aC5wdXNoKDAsbixlKTozPT09ciYmKG58fGUpPyhoLnB1c2goMyxuLGUpLHI9Mik6Mj09PXImJlwiLi4uXCI9PT1lJiZuP2gucHVzaCg0LG4sMCk6Mj09PXImJmUmJiFuP2gucHVzaCg1LDAsITAsZSk6cj49NSYmKChlfHwhbiYmNT09PXIpJiYoaC5wdXNoKHIsMCxlLHMpLHI9NiksbiYmKGgucHVzaChyLG4sMCxzKSxyPTYpKSxlPVwiXCJ9LGE9MDthPG4ubGVuZ3RoO2ErKyl7YSYmKDE9PT1yJiZwKCkscChhKSk7Zm9yKHZhciBsPTA7bDxuW2FdLmxlbmd0aDtsKyspdD1uW2FdW2xdLDE9PT1yP1wiPFwiPT09dD8ocCgpLGg9W2hdLHI9Myk6ZSs9dDo0PT09cj9cIi0tXCI9PT1lJiZcIj5cIj09PXQ/KHI9MSxlPVwiXCIpOmU9dCtlWzBdOnU/dD09PXU/dT1cIlwiOmUrPXQ6J1wiJz09PXR8fFwiJ1wiPT09dD91PXQ6XCI+XCI9PT10PyhwKCkscj0xKTpyJiYoXCI9XCI9PT10PyhyPTUscz1lLGU9XCJcIik6XCIvXCI9PT10JiYocjw1fHxcIj5cIj09PW5bYV1bbCsxXSk/KHAoKSwzPT09ciYmKGg9aFswXSkscj1oLChoPWhbMF0pLnB1c2goMiwwLHIpLHI9MCk6XCIgXCI9PT10fHxcIlxcdFwiPT09dHx8XCJcXG5cIj09PXR8fFwiXFxyXCI9PT10PyhwKCkscj0yKTplKz10KSwzPT09ciYmXCIhLS1cIj09PWUmJihyPTQsaD1oWzBdKX1yZXR1cm4gcCgpLGh9KHMpKSxyKSxhcmd1bWVudHMsW10pKS5sZW5ndGg+MT9yOnJbMF19XG4iLCAiaW1wb3J0e2ggYXMgcixDb21wb25lbnQgYXMgbyxyZW5kZXIgYXMgdH1mcm9tXCJwcmVhY3RcIjtleHBvcnR7aCxyZW5kZXIsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2ltcG9ydCBlIGZyb21cImh0bVwiO3ZhciBtPWUuYmluZChyKTtleHBvcnR7bSBhcyBodG1sfTtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVEZWVwQ29tcGFyZUVmZmVjdCB9IGZyb20gJy4uL2NyZWF0ZURlZXBDb21wYXJlRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURlZXBDb21wYXJlRWZmZWN0KHVzZUVmZmVjdCk7IiwgImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcblxudmFyIGRlcHNFcXVhbCA9IGZ1bmN0aW9uIGRlcHNFcXVhbChhRGVwcywgYkRlcHMpIHtcbiAgaWYgKGFEZXBzID09PSB2b2lkIDApIHtcbiAgICBhRGVwcyA9IFtdO1xuICB9XG5cbiAgaWYgKGJEZXBzID09PSB2b2lkIDApIHtcbiAgICBiRGVwcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGlzRXF1YWwoYURlcHMsIGJEZXBzKTtcbn07XG5cbmV4cG9ydCB2YXIgY3JlYXRlRGVlcENvbXBhcmVFZmZlY3QgPSBmdW5jdGlvbiBjcmVhdGVEZWVwQ29tcGFyZUVmZmVjdChob29rKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZWZmZWN0LCBkZXBzKSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICAgIHZhciBzaWduYWxSZWYgPSB1c2VSZWYoMCk7XG5cbiAgICBpZiAoZGVwcyA9PT0gdW5kZWZpbmVkIHx8ICFkZXBzRXF1YWwoZGVwcywgcmVmLmN1cnJlbnQpKSB7XG4gICAgICByZWYuY3VycmVudCA9IGRlcHM7XG4gICAgICBzaWduYWxSZWYuY3VycmVudCArPSAxO1xuICAgIH1cblxuICAgIGhvb2soZWZmZWN0LCBbc2lnbmFsUmVmLmN1cnJlbnRdKTtcbiAgfTtcbn07IiwgImV4cG9ydCB2YXIgZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogJzMwMHB4JyxcbiAgaGVpZ2h0OiAnMTUwcHgnXG59OyIsICJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVua25vd24tcHJvcGVydHkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBTdmcgZnJvbSAnLi9TdmcnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuaW1wb3J0IHsgdXNlUnB4MlB4IH0gZnJvbSAnLi9ob29rcy91c2VScHgyUHgnO1xudmFyIGNsYXNzUHJlZml4ID0gJ3JheS1pY29uJztcblxudmFyIEljb24gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkID0gcHJvcHMuZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcjtcbiAgdmFyIHJweDJweCA9IHVzZVJweDJQeCgpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3ZnLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzUHJlZml4LCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICB3aWR0aDogcnB4MnB4KHNpemUpLFxuICAgIGhlaWdodDogcnB4MnB4KHNpemUpXG4gIH0sIEFycmF5LmlzQXJyYXkoZCkgPyBkLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGtleTogXCJcIi5jb25jYXQoaXRlbSwgXCJfXCIpLmNvbmNhdChpbmRleCksXG4gICAgICBkOiBpdGVtLFxuICAgICAgZmlsbDogQXJyYXkuaXNBcnJheShjb2xvcikgPyBjb2xvcltpbmRleF0gOiBjb2xvcixcbiAgICAgIFwiZmlsbC1ydWxlXCI6IFwiZXZlbm9kZFwiXG4gICAgfSk7XG4gIH0pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBkLFxuICAgIGZpbGw6IEFycmF5LmlzQXJyYXkoY29sb3IpID8gY29sb3JbMF0gOiBjb2xvcixcbiAgICBcImZpbGwtcnVsZVwiOiBcImV2ZW5vZGRcIlxuICB9KSk7XG59O1xuXG5JY29uLmRpc3BsYXlOYW1lID0gJ0ljb24nO1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6ICcyM3B4J1xufTtcbmV4cG9ydCBkZWZhdWx0IEljb247IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTeXN0ZW1JbmZvIH0gZnJvbSAnLi91c2VTeXN0ZW1JbmZvJztcbmltcG9ydCB7IHJweDJweCB9IGZyb20gJy4uL3V0aWxzJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJweDJQeCgpIHtcbiAgdmFyIHN5c0luZm8gPSB1c2VTeXN0ZW1JbmZvKCk7XG4gIHZhciBmbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChtYXliZVJweCkge1xuICAgIHJldHVybiBycHgycHgobWF5YmVScHgsIHN5c0luZm8pO1xuICB9LCBbc3lzSW5mb10pO1xuICByZXR1cm4gZm47XG59IiwgImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwcEV2ZW50LCB1c2VQYWdlRXZlbnQsIGdldFN5c3RlbUluZm8sIGdldFN5c3RlbUluZm9TeW5jIH0gZnJvbSAnQHJheS1qcy9yYXknO1xudmFyIGluaXRTeXNJbmZvID0gZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VTeXN0ZW1JbmZvKCkge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoaW5pdFN5c0luZm8pLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzeXNJbmZvID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFN5c0luZm8gPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBoYW5kbGVUaGVtZUNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2V0U3lzSW5mbyhmdW5jdGlvbiAoY3VyU3lzSW5mbykge1xuICAgICAgdmFyIHJlc3VsdCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY3VyU3lzSW5mbyksIGRhdGEpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgc2V0U3lzSW5mbyhmdW5jdGlvbiAoY3VyU3lzSW5mbykge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGN1clN5c0luZm8pLCBkYXRhKTtcblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7IC8vIEB0cy1pZ25vcmVcblxuICB1c2VBcHBFdmVudCgnb25UaGVtZUNoYW5nZScsIGhhbmRsZVRoZW1lQ2hhbmdlKTtcbiAgdXNlUGFnZUV2ZW50KCdvblJlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIHJldHVybiBzeXNJbmZvO1xufSIsICJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmVuZHMtd2l0aC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5jb25zdHJ1Y3Rvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanNcIjtcbmltcG9ydCB7IGdldFN5c3RlbUluZm9TeW5jIH0gZnJvbSAnQHJheS1qcy9yYXknO1xuaW1wb3J0IHsgaXNNaW5pUHJvZ3JhbSwgaXNXZWIgfSBmcm9tICdAcmF5LWpzL2Vudic7XG4vKipcbiAqIFx1NTM1NVx1NEY0RFx1OEY2Q1x1NjM2MlxuICogQGxpbmsgaHR0cHM6Ly9qdWVqaW4uY24vcG9zdC82ODQ0OTAzODU2NDA5NjczNzM2XG4gKiBAZGVwcmVjYXRlZCB1c2UgdXNlUnB4MlB4IGhvb2tzIGluc3RlYWQgb2YgcnB4MnB4XG4gKi9cblxuZXhwb3J0IHZhciBycHgycHggPSBmdW5jdGlvbiAobWF5YmVScHgsIHN5c0luZm8pIHtcbiAgaWYgKG1heWJlUnB4LmVuZHNXaXRoKCdycHgnKSkge1xuICAgIHZhciB2YWx1ZSA9IE51bWJlcihtYXliZVJweC5yZXBsYWNlKC9ycHgvZywgJycpKTtcblxuICAgIGlmIChpc01pbmlQcm9ncmFtKSB7XG4gICAgICB2YXIgc3lzdGVtSW5mbyA9IHN5c0luZm8gfHwgZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSAvIDc1MCAqIHN5c3RlbUluZm8ud2luZG93V2lkdGgsIFwicHhcIik7XG4gICAgfVxuXG4gICAgaWYgKGlzV2ViKSB7XG4gICAgICByZXR1cm4gdmFsdWUgLyAyICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF5YmVScHg7XG59OyIsICJpbXBvcnQgU3ZnIGZyb20gJy4vU3ZnJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbiB9IGZyb20gJy4vSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN2ZyB9IGZyb20gJy4vU3ZnJztcbmV4cG9ydCB7IHJweDJweCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgdXNlUnB4MlB4IH0gZnJvbSAnLi9ob29rcy91c2VScHgyUHgnO1xuZXhwb3J0IGRlZmF1bHQgU3ZnOyIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQsIHVzZVBhZ2VFdmVudCB9IGZyb20gJ0ByYXktanMvcmF5JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5sZXNzJztcblxuZXhwb3J0IGNvbnN0IER5bmFtaWNOdW1iZXIgPSAoeyBjb3VudHMsIHRpbWUgPSAxMDAwLCBwb2ludCA9IDAsIGNsYXNzTmFtZSA9IHN0eWxlcy5udW1iZXIgfSkgPT4ge1xuICAvLyBjb3VudHNcdUZGMUFcdTRGMjBcdTUxNjVcdTc2ODRcdTY1NzBcdTVCNTdcdUZGMEN0aW1lOiBcdTlFRDhcdThCQTQxMDAwXHU2QkVCXHU3OUQyXHU0RTRCXHU1MTg1XHU2NTc0XHU0RTJBXHU1MkE4XHU3NTNCXHU1QjhDXHU2MjEwXG4gIGNvbnN0IHRhcmdldE51bWJlciA9IGNvdW50cztcbiAgLy8gXHU2NjNFXHU3OTNBXHU1QzBGXHU2NTcwXHU3MEI5XHU1NDBFXHU1MUUwXHU0RjREXG4gIGNvbnN0IHBvaW50TnVtYmVyID0gMTAgKiogcG9pbnQ7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1cGRhdGVOdW0sIHNldFVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VQYWdlRXZlbnQoJ29uU2hvdycsICgpID0+IHtcbiAgICBzZXRVcGRhdGUodXBkYXRlTnVtICsgMSk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRpbWU7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDb3VudCgoKSA9PiB7XG4gICAgICAgIC8vIFx1NjU3MFx1NUI1N1x1NTg5RVx1OTU3Rlx1OTAzQlx1OEY5MVx1RkYxQS5cdTVCOUFcdTY1RjZcdTY0Q0RcdTRGNUNcbiAgICAgICAgbGV0IGFmdGVyID1cbiAgICAgICAgICBNYXRoLmNlaWwoKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKSAqIHRhcmdldE51bWJlciAqIHBvaW50TnVtYmVyKSAvXG4gICAgICAgICAgcG9pbnROdW1iZXI7XG4gICAgICAgIGlmIChhZnRlciA+IHRhcmdldE51bWJlcikge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgIGFmdGVyID0gdGFyZ2V0TnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZnRlcjtcbiAgICAgIH0pO1xuICAgIH0sIDE2KTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtjb3VudHMsIHVwZGF0ZU51bV0pO1xuXG4gIGNvbnN0IGNscyA9IGNsc3goJ2ljb24tbnVtYmVyJywgYCR7Y2xhc3NOYW1lfWApO1xuICByZXR1cm4gPFRleHQgY2xhc3NOYW1lPXtjbHN9Pntjb3VudC50b0ZpeGVkKHBvaW50KX08L1RleHQ+O1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCwgVmlldywgSW1hZ2UgfSBmcm9tICdAcmF5LWpzL3JheSc7XG5pbXBvcnQgeyB1c2VEZXZpY2UsIHVzZVByb3BzIH0gZnJvbSAnQHJheS1qcy9wYW5lbC1zZGsnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RUaGVtZVR5cGUgfSBmcm9tICdAL3JlZHV4L21vZHVsZXMvdGhlbWVTbGljZSc7XG5pbXBvcnQgZHBDb2RlcyBmcm9tICdAL2NvbnN0YW50L2RwQ29kZXMnO1xuaW1wb3J0IHsgZ2V0V2lmaUljb24sIGdldEdwc0ljb24sIGlzRHBFeGlzdCB9IGZyb20gJ0AvdXRpbHMnO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSAnQC9pMThuJztcbmltcG9ydCBSZXMgZnJvbSAnQC9yZXMnO1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5sZXNzJztcblxuY29uc3QgeyBzaWduYWxTdHJlbmd0aDRnLCBzaWduYWxTdHJlbmd0aEdwcyB9ID0gZHBDb2RlcztcblxuZXhwb3J0IGNvbnN0IFNpZ25hbFZpZXcgPSBSZWFjdC5tZW1vKCh7IGlzQmxlT25saW5lIH06IHsgaXNCbGVPbmxpbmU6IGJvb2xlYW4gfSkgPT4ge1xuICBjb25zdCBjYXBhYmlsaXR5ID0gdXNlRGV2aWNlKGRldmljZSA9PiBkZXZpY2UuZGV2SW5mby5jYXBhYmlsaXR5KTtcbiAgY29uc3QgdGhlbWUgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZVR5cGUpO1xuICBjb25zdCBpc1N1cHBvcnRCbGUgPSBbMTAyNCwgMTA0ODU3NiwgMTA0OTYwMF0uaW5kZXhPZihjYXBhYmlsaXR5KSAhPT0gLTE7IC8vIFx1NjYyRlx1NTQyNlx1NjUyRlx1NjMwMVx1ODRERFx1NzI1OVxuICBjb25zdCBkcFN0YXRlID0gdXNlUHJvcHMoKTtcbiAgY29uc3QgZHBTY2hlbWEgPSB1c2VEZXZpY2UoZGV2aWNlID0+IGRldmljZS5kcFNjaGVtYSk7XG4gIGNvbnN0IHNpZ25hbERhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpZmknLFxuICAgICAgaWNvbjogZ2V0V2lmaUljb24oZHBTdGF0ZVtzaWduYWxTdHJlbmd0aDRnXSwgdGhlbWUpLFxuICAgICAgaXNTaG93OiBpc0RwRXhpc3Qoc2lnbmFsU3RyZW5ndGg0ZywgZHBTY2hlbWEpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2dwcycsXG4gICAgICBpY29uOiBnZXRHcHNJY29uKFxuICAgICAgICBkcFN0YXRlW3NpZ25hbFN0cmVuZ3RoR3BzXSxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIGRwU2NoZW1hW3NpZ25hbFN0cmVuZ3RoR3BzXT8ucHJvcGVydHk/Lm1heCxcbiAgICAgICAgZHBTY2hlbWFbc2lnbmFsU3RyZW5ndGhHcHNdPy5wcm9wZXJ0eT8ubWluXG4gICAgICApLFxuICAgICAgaXNTaG93OiBpc0RwRXhpc3Qoc2lnbmFsU3RyZW5ndGhHcHMsIGRwU2NoZW1hKSxcbiAgICB9LFxuICBdLmZpbHRlcihpID0+IGkuaXNTaG93KTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IGNsYXNzTmFtZT17U3R5bGVzLnNpZ25hbH0+XG4gICAgICB7c2lnbmFsRGF0YS5tYXAoaSA9PiAoXG4gICAgICAgIDxJbWFnZSBrZXk9e2kubmFtZX0gc3JjPXtpLmljb259IGNsYXNzTmFtZT17U3R5bGVzLnNpZ25hbEljb259IC8+XG4gICAgICApKX1cbiAgICAgIHtpc1N1cHBvcnRCbGUgJiYgKFxuICAgICAgICA8VmlldyBjbGFzc05hbWU9e1N0eWxlcy5ibHVldG9vdGhWaWV3fT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17aXNCbGVPbmxpbmUgPyBSZXMuYmx1ZXRvb3RoIDogUmVzLmJsdWV0b290aERpc2Nvbm5lY3R9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5ibHVldG9vdGhJY29ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY29ubmVjdFRleHR9ICR7aXNCbGVPbmxpbmUgJiYgU3R5bGVzLmNvbm5lY3RUZXh0QWN0aXZlfWB9PlxuICAgICAgICAgICAge2lzQmxlT25saW5lID8gU3RyaW5ncy5nZXRMYW5nKCdoYXNDb25uZWN0ZWQnKSA6IFN0cmluZ3MuZ2V0TGFuZygndW5Db25uZWN0ZWQnKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVmlldz5cbiAgICAgICl9XG4gICAgPC9WaWV3PlxuICApO1xufSk7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0LCBWaWV3LCBvbkRwRGF0YUNoYW5nZSwgb2ZmRHBEYXRhQ2hhbmdlIH0gZnJvbSAnQHJheS1qcy9yYXknO1xuaW1wb3J0IHsgdXNlQWN0aW9ucywgdXNlUHJvcHMsIHVzZURldmljZSB9IGZyb20gJ0ByYXktanMvcGFuZWwtc2RrJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VsZWN0VGhlbWVUeXBlIH0gZnJvbSAnQC9yZWR1eC9tb2R1bGVzL3RoZW1lU2xpY2UnO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSAnQC9pMThuJztcbmltcG9ydCBkcENvZGVzIGZyb20gJ0AvY29uc3RhbnQvZHBDb2Rlcyc7XG5pbXBvcnQgeyBjaGVja1Blcm1pc3Npb25zIH0gZnJvbSAnQC91dGlscyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL3Nqcy1zbGlkZXInO1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5sZXNzJztcblxuY29uc3QgeyBibGVsb2NrU3dpdGNoIH0gPSBkcENvZGVzO1xubGV0IG9wZW5Mb2FkaW5nVGltZXI7XG5sZXQgY2xvc2VMb2FkaW5nVGltZXI7XG5cbmV4cG9ydCBjb25zdCBVbmxvY2tTbGlkZXIgPSAoeyBpc0JsZU9ubGluZSwgaW5TZXJ2aWNlLCBpc1BpZEhhZFZBUywgZHBTY2hlbWEgfSkgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gdXNlQWN0aW9ucygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVNlbGVjdG9yKHNlbGVjdFRoZW1lVHlwZSk7XG4gIGNvbnN0IGlzT25saW5lID0gdXNlRGV2aWNlKGRldmljZSA9PiBkZXZpY2UuZGV2SW5mby5pc09ubGluZSk7XG4gIGNvbnN0IHN3aXRjaERwU2NoZW1hID0gdXNlRGV2aWNlKGRldmljZSA9PiBkZXZpY2UuZHBTY2hlbWFbYmxlbG9ja1N3aXRjaF0pO1xuICBjb25zdCBibGVsb2NrU3dpdGNoRHBWYWwgPSB1c2VQcm9wcyhwcm9wcyA9PiBwcm9wc1tibGVsb2NrU3dpdGNoXSk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoYmxlbG9ja1N3aXRjaERwVmFsID8gMTAwIDogMSk7XG4gIGNvbnN0IFtpc01vdmluZywgc2V0TW92aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzbGlkZXJNYXggPSA5MDtcbiAgY29uc3Qgc2xpZGVyTWluID0gMTA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkRwRGF0YUNoYW5nZShyZXMgPT4ge1xuICAgICAgaGFuZERwQ2hhbmdlKHJlcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9mZkRwRGF0YUNoYW5nZShyZXMgPT4gaGFuZERwQ2hhbmdlKHJlcykpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kRHBDaGFuZ2UgPSByZXMgPT4ge1xuICAgIGNvbnN0IHsgZHBzIH0gPSByZXM7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRwcykgJiYgT2JqZWN0LmtleXMoZHBzKS5pbmNsdWRlcygnMScpKSB7XG4gICAgICBjbGVhclRpbWVvdXQob3BlbkxvYWRpbmdUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQoY2xvc2VMb2FkaW5nVGltZXIpO1xuICAgICAgY29uc29sZS5sb2coJ2Rwc2V0LCBzZXRcdTUwM0MgOj4+ICcsIGRwc1snMSddID09PSB0cnVlID8gMTAwIDogMSk7XG4gICAgICBkcHNbJzEnXSA9PT0gdHJ1ZSA/IHNldFZhbHVlKDEwMCkgOiBzZXRWYWx1ZSgxKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VEcCA9IHZhbCA9PiB7XG4gICAgY29uc3QgeyBleHRDb250ZW50IH0gPSBzd2l0Y2hEcFNjaGVtYTtcbiAgICBjb25zdCBpc0V4dE51bGwgPSBleHRDb250ZW50ID09PSAnJyB8fCBleHRDb250ZW50ID09PSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgcm91dGUgPSBpc0V4dE51bGwgPyAwIDogSlNPTi5wYXJzZShleHRDb250ZW50KS5yb3V0ZTtcbiAgICBpZiAocm91dGUgPiAwICYmIGlzQmxlT25saW5lKSB7XG4gICAgICBhY3Rpb25zW2JsZWxvY2tTd2l0Y2hdLnNldCh2YWwsIHsgcGlwZWxpbmVzOiBbNiwgNSwgNCwgMywgMiwgMV0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbnNbYmxlbG9ja1N3aXRjaF0uc2V0KHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9wZW5Mb2NrID0gKCkgPT4ge1xuICAgIGNoZWNrUGVybWlzc2lvbnMoe1xuICAgICAgZHBDb2RlOiAnYmxlbG9ja19zd2l0Y2gnLFxuICAgICAgaW5TZXJ2aWNlLFxuICAgICAgaXNQaWRIYWRWQVMsXG4gICAgICBkcFNjaGVtYSxcbiAgICAgIGlzQmxlT25saW5lLFxuICAgICAgc3VjY2Vzc0NiOiAoKSA9PiB7XG4gICAgICAgIC8vIFx1NUYwMFx1OTUwMVxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBjaGFuZ2VEcCh0cnVlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9wZW5Mb2FkaW5nVGltZXIpO1xuICAgICAgICBvcGVuTG9hZGluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gXHU1RjAwXHU5NTAxXHU4RDg1XHU2NUY2c2V0MVxuICAgICAgICAgIHNldFZhbHVlKDEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0sXG4gICAgICBjYW5jZWxDYjogKCkgPT4ge1xuICAgICAgICAvLyBcdTg4QUJcdTc5ODFcdTc1MjhcdTZFRDFcdTU3NTdcdThGRDRcdTU2REVcbiAgICAgICAgc2V0VmFsdWUoMTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0VmFsdWUoMSk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VMb2NrID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY2hhbmdlRHAoZmFsc2UpO1xuICAgIGNsZWFyVGltZW91dChjbG9zZUxvYWRpbmdUaW1lcik7XG4gICAgY2xvc2VMb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFx1NTE3M1x1OTUwMVx1OEQ4NVx1NjVGNlxuICAgICAgc2V0VmFsdWUoMTAwKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDUwMDApO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlRW5kID0gKHZhbCwgZnJvbSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gdmFsKSByZXR1cm47XG4gICAgaWYgKHZhbCA+PSBzbGlkZXJNYXggJiYgIWJsZWxvY2tTd2l0Y2hEcFZhbCkge1xuICAgICAgb3BlbkxvY2soKTtcbiAgICB9XG4gICAgaWYgKHZhbCA8PSBzbGlkZXJNaW4gJiYgYmxlbG9ja1N3aXRjaERwVmFsKSB7XG4gICAgICBjbG9zZUxvY2soKTtcbiAgICB9XG4gICAgaWYgKCFibGVsb2NrU3dpdGNoRHBWYWwgJiYgdmFsIDwgc2xpZGVyTWF4KSB7XG4gICAgICBzZXRWYWx1ZSh2YWwpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFx1NkNBMVx1NTIxMlx1NTIzMFx1NEY0RFx1RkYwQ1x1OEZENFx1NTZERVx1NURFNlx1OEZCOVxuICAgICAgICBzZXRWYWx1ZSgxKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gICAgaWYgKGJsZWxvY2tTd2l0Y2hEcFZhbCAmJiB2YWwgPiBzbGlkZXJNaW4pIHtcbiAgICAgIHNldFZhbHVlKHZhbCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gXHU2Q0ExXHU1MjEyXHU1MjMwXHU0RjREXHVGRjBDXHU4RkQ0XHU1NkRFXHU1M0YzXHU4RkI5XG4gICAgICAgIHNldFZhbHVlKDEwMCk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFycm93UmlnaHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IGNsYXNzTmFtZT17U3R5bGVzLmFycm93Q29udGFpbmVyfSBzdHlsZT17eyByaWdodDogNzAgfX0+XG4gICAgICAgIDxWaWV3IGNsYXNzTmFtZT17U3R5bGVzLmFycm93fSAvPlxuICAgICAgICA8Vmlld1xuICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLmFycm93fVxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAuMywgbWFyZ2luTGVmdDogNiwgYW5pbWF0aW9uRGVsYXk6ICcyMDBtcycgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFZpZXdcbiAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5hcnJvd31cbiAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiAwLjEsIG1hcmdpbkxlZnQ6IDgsIGFuaW1hdGlvbkRlbGF5OiAnNDAwbXMnIH19XG4gICAgICAgIC8+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBhcnJvd0xlZnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IGNsYXNzTmFtZT17U3R5bGVzLmFycm93Q29udGFpbmVyfSBzdHlsZT17eyBsZWZ0OiA4MiB9fT5cbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtTdHlsZXMuYXJyb3dMZWZ0fSBzdHlsZT17eyBvcGFjaXR5OiAwLjEsIGFuaW1hdGlvbkRlbGF5OiAnNDAwbXMnIH19IC8+XG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXMuYXJyb3dMZWZ0fVxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAuMywgbWFyZ2luTGVmdDogNiwgYW5pbWF0aW9uRGVsYXk6ICcyMDBtcycgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtTdHlsZXMuYXJyb3dMZWZ0fSBzdHlsZT17eyBvcGFjaXR5OiAxLCBtYXJnaW5MZWZ0OiA4IH19IC8+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBMb2FkaW5nVmlldyA9ICgpID0+IHtcbiAgICByZXR1cm4gPFZpZXcgY2xhc3NOYW1lPXtTdHlsZXMubG9hZGluZ30gLz47XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFZpZXdcbiAgICAgIGNsYXNzTmFtZT17U3R5bGVzLnVubG9ja31cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhlbWUgPT09ICdkYXJrJyA/ICcjMjAyMTI0JyA6ICd2YXIoLS1hcHAtTTEpJyB9fVxuICAgID5cbiAgICAgIHtpc0xvYWRpbmcgJiYgTG9hZGluZ1ZpZXcoKX1cbiAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtTdHlsZXMuc2xpZGVyV3JhcH0+XG4gICAgICAgICAge2JsZWxvY2tTd2l0Y2hEcFZhbCAmJiBhcnJvd0xlZnQoKX1cbiAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e1N0eWxlcy51bmxvY2tUZXh0fT5cbiAgICAgICAgICAgIHtibGVsb2NrU3dpdGNoRHBWYWwgPyBTdHJpbmdzLmdldExhbmcoJ2Nsb3NlTG9jaycpIDogU3RyaW5ncy5nZXRMYW5nKCdvcGVuTG9jaycpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICB7IWJsZWxvY2tTd2l0Y2hEcFZhbCAmJiBhcnJvd1JpZ2h0KCl9XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCAhaXNPbmxpbmV9XG4gICAgICAgICAgICBjdXJyZW50RHBWYWx1ZT17YmxlbG9ja1N3aXRjaERwVmFsfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgZW5hYmxlVG91Y2g9e2ZhbHNlfVxuICAgICAgICAgICAgdHJhY2tTdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogYCR7NDY0fXJweGAsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7MTE2fXJweGAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogYCR7Mjh9cnB4YCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBiYXJTdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICB3aWR0aDogYCR7NDY0fXJweGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGh1bWJTdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzExNnJweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogJzExNnJweCcsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI4cnB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRodW1iV3JhcFN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGlzTW92aW5nID8gJ25vbmUnIDogJ2xlZnQgMC4zcyBsaW5lYXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQmVmb3JlQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE1vdmluZyh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXsodmFsLCBmcm9tKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlRW5kKHZhbCwgZnJvbSk7XG4gICAgICAgICAgICAgIHNldE1vdmluZyhmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVmlldz5cbiAgICAgICl9XG4gICAgPC9WaWV3PlxuICApO1xufTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSAndG8tc3R5bGUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCBTanNTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG5leHBvcnQgY29uc3QgdG9TdHlsZSA9IG9iaiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHJpbmcocmVzdWx0KTtcbn07XG5cbmNvbnN0IFNsaWRlcjogRkM8SVByb3BzPiA9ICh7XG4gIGlzVmVydGljYWwgPSBmYWxzZSxcbiAgbWluID0gMCxcbiAgbWF4ID0gMTAwLFxuICBzdGVwID0gMSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgbWF4VHJhY2tXaWR0aCA9ICcxMDAlJyxcbiAgbWF4VHJhY2tIZWlnaHQgPSAnNHB4JyxcbiAgbWF4VHJhY2tSYWRpdXMgPSAnNHB4JyxcbiAgbWluVHJhY2tXaWR0aCA9ICcyOHB4JyxcbiAgbWluVHJhY2tIZWlnaHQgPSAnNHB4JyxcbiAgbWluVHJhY2tSYWRpdXMgPSAnaW5oZXJpdCcsXG4gIHRodW1iV2lkdGggPSAnMjhweCcsXG4gIHRodW1iSGVpZ2h0ID0gJzI4cHgnLFxuICB0aHVtYlJhZGl1cyA9ICcyOHB4JyxcbiAgdGh1bWJCb3JkZXJTdHlsZSA9ICcwcHggc29saWQgI2ZmZmZmZicsXG4gIHRodW1iQm94U2hhZG93U3R5bGUgPSAnMHB4IDAuNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggNnB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIGlzU2hvd1RpY2tzID0gZmFsc2UsXG4gIHRpY2tXaWR0aCA9ICc0cHgnLFxuICB0aWNrSGVpZ2h0ID0gJzEycHgnLFxuICB0aWNrUmFkaXVzID0gJzJweCcsXG4gIHRodW1iU3R5bGVSZW5kZXJWYWx1ZVNjYWxlID0gMSxcbiAgdGh1bWJTdHlsZVJlbmRlckZvcm1hdHRlciA9IG51bGwsXG4gIHRodW1iU3R5bGVSZW5kZXJWYWx1ZVN0YXJ0ID0gMCxcbiAgdGh1bWJTdHlsZVJlbmRlclZhbHVlUmV2ZXJzZSA9IGZhbHNlLFxuICBoaWRlVGh1bWJCdXR0b24gPSBudWxsLFxuICBjbGFzc05hbWUgPSAnJyxcbiAgY3VycmVudERwVmFsdWUgPSBmYWxzZSxcbiAgdmFsdWUgPSAwLFxuICBvbkNoYW5nZSA9IG51bGwsXG4gIG9uQmVmb3JlQ2hhbmdlID0gbnVsbCxcbiAgb25BZnRlckNoYW5nZSA9IG51bGwsXG4gIG1heFRyYWNrQ29sb3IgPSAnI2Q4ZDhkOCcsXG4gIHRyYWNrU3R5bGUgPSB7fSxcbiAgbWluVHJhY2tDb2xvciA9ICcjMTU4Q0ZCJyxcbiAgYmFyU3R5bGUgPSB7fSxcbiAgdGh1bWJDb2xvciA9ICcjZmZmZmZmJyxcbiAgdGh1bWJTdHlsZSA9IHt9LFxuICBlbmFibGVUb3VjaCA9IHRydWUsXG4gIHRodW1iV3JhcFN0eWxlID0ge30sXG4gIG1heFRyYWNrVGlja0NvbG9yID0gJyMxNThDRkInLFxuICBtaW5UcmFja1RpY2tDb2xvciA9ICcjZmZmZmZmJyxcbn0pID0+IHtcbiAgY29uc3QgaW5zdGFuY2VJZCA9IHVzZVJlZihcbiAgICBgQ29sb3JfJHtTdHJpbmcoK25ldyBEYXRlKCkpLnNsaWNlKC00KX1fJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoLTIpfWBcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8U2pzU2xpZGVyXG4gICAgICBjdXJyZW50RHBWYWx1ZT17Y3VycmVudERwVmFsdWV9XG4gICAgICBpbnN0YW5jZUlkPXtpbnN0YW5jZUlkLmN1cnJlbnR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRpcmVjdGlvbj17aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCd9XG4gICAgICBlbmQ9e3ZhbHVlfVxuICAgICAgbWluPXttaW59XG4gICAgICByZXZlcnNlPXtpc1ZlcnRpY2FsfVxuICAgICAgbWF4PXttYXh9XG4gICAgICBzdGVwPXtzdGVwfVxuICAgICAgdGh1bWJTdHlsZVJlbmRlclZhbHVlU2NhbGU9e3RodW1iU3R5bGVSZW5kZXJWYWx1ZVNjYWxlfVxuICAgICAgdGh1bWJTdHlsZVJlbmRlckZvcm1hdHRlcj17dGh1bWJTdHlsZVJlbmRlckZvcm1hdHRlcn1cbiAgICAgIHRodW1iU3R5bGVSZW5kZXJWYWx1ZVN0YXJ0PXt0aHVtYlN0eWxlUmVuZGVyVmFsdWVTdGFydH1cbiAgICAgIHRodW1iU3R5bGVSZW5kZXJWYWx1ZVJldmVyc2U9e3RodW1iU3R5bGVSZW5kZXJWYWx1ZVJldmVyc2V9XG4gICAgICBoaWRlVGh1bWJCdXR0b249e2hpZGVUaHVtYkJ1dHRvbn1cbiAgICAgIGRpc2FibGU9e2Rpc2FibGVkfVxuICAgICAgYmluZG1vdmU9e2V2ZW50ID0+IHtcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoZXZlbnQuZGV0YWlsLmVuZCwgZXZlbnQuZGV0YWlsLmZyb20pO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgYmluZHN0YXJ0PXtldmVudCA9PiB7XG4gICAgICAgIGlmIChvbkJlZm9yZUNoYW5nZSkge1xuICAgICAgICAgIG9uQmVmb3JlQ2hhbmdlKGV2ZW50LmRldGFpbC5lbmQpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgYmluZGVuZD17ZXZlbnQgPT4ge1xuICAgICAgICBpZiAob25BZnRlckNoYW5nZSkge1xuICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2UoZXZlbnQuZGV0YWlsLmVuZCwgZXZlbnQuZGV0YWlsLmZyb20pO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgdHJhY2tTdHlsZT17dG9TdHlsZSh7XG4gICAgICAgIHdpZHRoOiBtYXhUcmFja1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IG1heFRyYWNrSGVpZ2h0LFxuICAgICAgICBib3JkZXJSYWRpdXM6IG1heFRyYWNrUmFkaXVzLFxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXhUcmFja0NvbG9yLFxuICAgICAgICAuLi4odHJhY2tTdHlsZSB8fCB7fSksXG4gICAgICB9KX1cbiAgICAgIGJhclN0eWxlPXt0b1N0eWxlKHtcbiAgICAgICAgd2lkdGg6IG1pblRyYWNrV2lkdGgsXG4gICAgICAgIGhlaWdodDogbWluVHJhY2tIZWlnaHQsXG4gICAgICAgIGJvcmRlclJhZGl1czogbWluVHJhY2tSYWRpdXMsXG4gICAgICAgIGJhY2tncm91bmQ6IG1pblRyYWNrQ29sb3IsXG4gICAgICAgIC4uLihiYXJTdHlsZSB8fCB7fSksXG4gICAgICB9KX1cbiAgICAgIHRodW1iU3R5bGU9e3RvU3R5bGUoe1xuICAgICAgICB3aWR0aDogdGh1bWJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aHVtYkhlaWdodCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aHVtYlJhZGl1cyxcbiAgICAgICAgYmFja2dyb3VuZDogdGh1bWJDb2xvcixcbiAgICAgICAgYm9yZGVyU3R5bGU6IHRodW1iQm9yZGVyU3R5bGUsXG4gICAgICAgIGJveFNoYWRvdzogdGh1bWJCb3hTaGFkb3dTdHlsZSxcbiAgICAgICAgLi4uKHRodW1iU3R5bGUgfHwge30pLFxuICAgICAgfSl9XG4gICAgICBlbmFibGVUb3VjaD17ZW5hYmxlVG91Y2ggPz8gdHJ1ZX1cbiAgICAgIHRodW1iV3JhcFN0eWxlPXt0aHVtYldyYXBTdHlsZX1cbiAgICAgIHNob3dTdGVwcz17aXNTaG93VGlja3N9XG4gICAgICBzdGVwU3R5bGU9e3RvU3R5bGUoe1xuICAgICAgICB3aWR0aDogdGlja1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRpY2tIZWlnaHQsXG4gICAgICAgIGJvcmRlclJhZGl1czogdGlja1JhZGl1cyxcbiAgICAgICAgYmFja2dyb3VuZDogbWF4VHJhY2tUaWNrQ29sb3IsXG4gICAgICB9KX1cbiAgICAgIGFjdGl2ZVN0ZXBTdHlsZT17dG9TdHlsZSh7XG4gICAgICAgIHdpZHRoOiB0aWNrV2lkdGgsXG4gICAgICAgIGhlaWdodDogdGlja0hlaWdodCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aWNrUmFkaXVzLFxuICAgICAgICBiYWNrZ3JvdW5kOiBtaW5UcmFja1RpY2tDb2xvcixcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG4iLCAiaW1wb3J0IHsgY3JlYXRlTmF0aXZlQ29tcG9uZW50IH0gZnJvbSAnQHJheS1jb3JlL3J1bnRpbWUnO1xuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF0aXZlQ29tcG9uZW50KCdzbGlkZXItaW5kZXgtYzcwMGRjJyk7IiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCB7IFZpZXcsIFRleHQsIEljb24gfSBmcm9tICdAcmF5LWpzL3JheSc7XG5pbXBvcnQgVHlPdXRkb29yVXRpbHMgZnJvbSAnQHJheS1qcy90eS1vdXRkb29yLXV0aWxzJztcbmltcG9ydCBTdHJpbmdzIGZyb20gJ0AvaTE4bic7XG5pbXBvcnQgeyBnZXRUcmFja1NlZ21lbnRMaXN0IH0gZnJvbSAnQC9hcGkvcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRDeWNsaW5nVGltZSwgc2NhbGVNaWxlYWdlVmFsdWUgfSBmcm9tICdAL3V0aWxzJztcbmltcG9ydCBkcENvZGVzIGZyb20gJ0AvY29uc3RhbnQvZHBDb2Rlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmxlc3MnO1xuXG5jb25zdCB7IG1pbGVhZ2VPbmNlIH0gPSBkcENvZGVzO1xuZXhwb3J0IGNvbnN0IFJlY29yZCA9ICh7IGRldmljZUlkLCBtaWxlYWdlVW5pdCwgZHBTY2hlbWEsIGlzS20gPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPElUcmFja1NlZ21lbnRJdGVtPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VHJhY2tTZWdtZW50TGlzdChkZXZpY2VJZClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRUcmFja1NlZ21lbnRMaXN0JywgcmVzKTtcbiAgICAgICAgcmVzICYmIHJlcz8uc2VnbWVudExpc3QgJiYgcmVzPy5zZWdtZW50TGlzdC5sZW5ndGggPiAwICYmIHNldERhdGEocmVzLnNlZ21lbnRMaXN0WzBdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZH0+XG4gICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIDxUZXh0PntTdHJpbmdzLmdldExhbmcoJ3JlY29yZHMnKX08L1RleHQ+XG4gICAgICAgIHtkYXRhICYmIChcbiAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9yZVRleHR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBUeU91dGRvb3JVdGlscy5qdW1wU3ViUGFnZS50b0N5Y2xpbmdSZWNvcmQoeyBkZXZpY2VJZCB9KX0gLy8gXHU5QTkxXHU4ODRDXHU4QkIwXHU1RjU1XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHQ+e1N0cmluZ3MuZ2V0TGFuZygnbW9yZVRleHQnKX08L1RleHQ+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiaWNvbi1yaWdodFwiIGNvbG9yPVwidmFyKC0tYXBwLUIxLU40KVwiIHNpemU9ezE4fSAvPlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKX1cbiAgICAgIDwvVmlldz5cbiAgICAgIDxWaWV3XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZEl0ZW19XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICBkYXRhICYmXG4gICAgICAgICAgICBUeU91dGRvb3JVdGlscy5qdW1wU3ViUGFnZS50b1RyYWplY3RvcnlQbGF5YmFjayh7XG4gICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgIGRldmljZUlkLFxuICAgICAgICAgICAgICB1bml0VHlwZTogbWlsZWFnZVVuaXQsXG4gICAgICAgICAgICB9KSAvLyBcdThGNjhcdThGRjlcdTU2REVcdTY1M0VcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7ZGF0YSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMucmVjb3JkSXRlbVRvcH0+XG4gICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLm1pbGVhZ2V9PlxuICAgICAgICAgICAgICAgIHtzY2FsZU1pbGVhZ2VWYWx1ZShtaWxlYWdlT25jZSwgZGF0YT8ubWlsZWFnZSwgZHBTY2hlbWEsIGlzS20pfVxuICAgICAgICAgICAgICAgIDxUZXh0PnttaWxlYWdlVW5pdH08L1RleHQ+XG4gICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XG4gICAgICAgICAgICAgICAge2RheWpzKGRhdGE/LnN0YXJ0VGltZSkuZm9ybWF0KCdZWVlZL01NL0REJyl9eycgJ31cbiAgICAgICAgICAgICAgICB7ZGF5anMoZGF0YT8uc3RhcnRUaW1lKS5mb3JtYXQoJ0hIOm1tJyl9LXtkYXlqcyhkYXRhPy5lbmRUaW1lKS5mb3JtYXQoJ0hIOm1tJyl9XG4gICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZEl0ZW1Cb3R0b219PlxuICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5yZWNvcmRJdGVtQm90dG9tTGl9PlxuICAgICAgICAgICAgICAgIDxUZXh0PntTdHJpbmdzLmdldExhbmcoJ2N5Y2xpbmdUaW1lJyl9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLm51bX0+XG4gICAgICAgICAgICAgICAgICB7Z2V0Q3ljbGluZ1RpbWUoKGRhdGE/LmVuZFRpbWUgLSBkYXRhPy5zdGFydFRpbWUpIC8gMTAwMCl9XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZEl0ZW1Cb3R0b21MaX0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e1N0cmluZ3MuZ2V0TGFuZygnYXZlcmFnZVNwZWVkJyl9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLm51bX0+XG4gICAgICAgICAgICAgICAgICB7c2NhbGVNaWxlYWdlVmFsdWUobWlsZWFnZU9uY2UsIGRhdGE/LnNwZWVkLCBkcFNjaGVtYSwgaXNLbSl9XG4gICAgICAgICAgICAgICAgICA8VGV4dD57U3RyaW5ncy5nZXRMYW5nKGBzcGVlZFVuaXRfJHttaWxlYWdlVW5pdH1gKX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLnJlY29yZEl0ZW1Cb3R0b21MaX0+XG4gICAgICAgICAgICAgICAgPFRleHQ+e1N0cmluZ3MuZ2V0TGFuZygncG93ZXJDb25zdW1wdGlvbicpfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy5udW19PlxuICAgICAgICAgICAgICAgICAge2RhdGE/LmJhdHRlcnl9XG4gICAgICAgICAgICAgICAgICA8VGV4dD4lPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17c3R5bGVzLm5vRGF0YX0+XG4gICAgICAgICAgICA8Vmlldz57U3RyaW5ncy5nZXRMYW5nKCdub1JlY29yZCcpfTwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PntTdHJpbmdzLmdldExhbmcoJ3N0YXJ0UmlkZScpfTwvVmlldz5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICl9XG4gICAgICA8L1ZpZXc+XG4gICAgPC9WaWV3PlxuICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCB1c2VQYWdlRXZlbnQsIEljb24gfSBmcm9tICdAcmF5LWpzL3JheSc7XG5pbXBvcnQgeyB1cGRhdGVDb21tb25JbmZvLCBjb21tb25DaGVja0luZm8gfSBmcm9tICdAL3JlZHV4L21vZHVsZXMvY29tbW9uSW5mb1NsaWNlJztcbmltcG9ydCB7IGdldENTZXJ2aWNlc0FiaWxpdHksIHNldENTZXJ2aWNlc1BvcCB9IGZyb20gJ0AvYXBpL3JlcXVlc3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ0AvcmVkdXgnO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSAnQC9pMThuJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUubGVzcyc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlVG9hc3QgPSAoeyBkZXZJZCwgdGhlbWUsIHN0YXR1c0JhckhlaWdodCB9KSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHN0b3JlO1xuICBjb25zdCBjb21tb25JbmZvID0gdXNlU2VsZWN0b3IoY29tbW9uQ2hlY2tJbmZvKTtcbiAgY29uc3QgeyBpblNlcnZpY2UsIGlzUGlkSGFkVkFTLCBjb21tb2RpdHlVcmwgfSA9IGNvbW1vbkluZm87XG5cbiAgdXNlUGFnZUV2ZW50KCdvblNob3cnLCAoKSA9PiB7XG4gICAgY2hlY2tTZXJ2aWNlQWJpbGl0eSgpO1xuICB9KTtcblxuICAvLyBDXHU3QUVGXHU3RUVEXHU4RDM5XHU4MEZEXHU1MjlCXHU1MjI0XHU2NUFEIFx1RkYwOFx1NjcyQVx1OEQyRFx1NEU3MFx1NTg5RVx1NTAzQ1x1NjcwRFx1NTJBMVx1NjIxNlx1NjcwRFx1NTJBMVx1NURGMlx1OEZDN1x1NjcxRiBcdTVGMzlcdTdBOTdcdTYzRDBcdTc5M0FcdUZGMDlcbiAgY29uc3QgY2hlY2tTZXJ2aWNlQWJpbGl0eSA9ICgpID0+IHtcbiAgICBnZXRDU2VydmljZXNBYmlsaXR5KGRldklkKVxuICAgICAgLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICAgICAgY29uc3QgeyBpblNlcnZpY2UsIGlzUGlkSGFkVkFTLCBjb21tb2RpdHlVcmwsIGhhZFBvcHVwIH0gPSByZXM7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUNvbW1vbkluZm8oeyBpblNlcnZpY2UsIGlzUGlkSGFkVkFTLCBjb21tb2RpdHlVcmw6IGNvbW1vZGl0eVVybCB8fCAnJyB9KSk7XG4gICAgICAgIGlmICghaGFkUG9wdXAgJiYgaXNQaWRIYWRWQVMgJiYgaW5TZXJ2aWNlKSB7XG4gICAgICAgICAgLy8gXHU1NEMxXHU3MjRDXHU2NUI5XHU2NzA5XHU5MTREXHU3RjZFQ1x1N0FFRlx1NzUyOFx1NjIzN1x1N0VFRFx1OEQzOVx1NTk1N1x1OTkxMFx1NjcwOVx1OEQ2MFx1OTAwMVxuICAgICAgICAgIGlmIChjb21tb2RpdHlVcmwgJiYgY29tbW9kaXR5VXJsICE9PSAnJykge1xuICAgICAgICAgICAgdHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICBjb250ZW50OiBTdHJpbmdzLmdldExhbmcoJ3NlcnZpY2VBY3RpdmUnKSxcbiAgICAgICAgICAgICAgY29uZmlybVRleHQ6IFN0cmluZ3MuZ2V0TGFuZygnZ29DaGVjaycpLFxuICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBTdHJpbmdzLmdldExhbmcoJ2NvbmZpcm0nKSxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgY2FuY2VsQ29sb3I6IHRoZW1lID09PSAnZGFyaycgPyAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyA6ICdyZ2JhKDAsMCwwLDAuNSknLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAoeyBjb25maXJtLCBjYW5jZWwgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAvLyBcdThERjNcdThGNkNcdThCRTZcdTYwQzVcbiAgICAgICAgICAgICAgICAgIHR5Lm9wZW5Jbm5lckg1KHsgdXJsOiBjb21tb2RpdHlVcmwgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFx1NkQ4Mlx1OUUyNlx1OUVEOFx1OEJBNFx1OEQ2MFx1OTAwMVxuICAgICAgICAgICAgdHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICBjb250ZW50OiBTdHJpbmdzLmdldExhbmcoJ3NlcnZpY2VBY3RpdmUnKSxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBTdHJpbmdzLmdldExhbmcoJ2NvbmZpcm0nKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBzZXRDU2VydmljZXNQb3AoZGV2SWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshaW5TZXJ2aWNlICYmIGlzUGlkSGFkVkFTID8gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvYXN0Vmlld31cbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0tYXBwLUI0KScsIHRvcDogYCR7c3RhdHVzQmFySGVpZ2h0ICsgMzl9cHhgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VmlldyBjbGFzc05hbWU9e3N0eWxlcy50b2FzdExlZnR9PlxuICAgICAgICAgICAgPEljb24gc2l6ZT17MjJ9IHR5cGU9XCJpY29uLXdhcm5pbmdcIiBjb2xvcj1cIiNGRjQ0NDRcIiAvPlxuICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudG9hc3RUZXh0fSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWFwcC1CMS1OMSknIH19PlxuICAgICAgICAgICAgICB7Y29tbW9kaXR5VXJsICYmIGNvbW1vZGl0eVVybCAhPT0gJydcbiAgICAgICAgICAgICAgICA/IFN0cmluZ3MuZ2V0TGFuZygnc2VydmljZUV4cGlyZScpXG4gICAgICAgICAgICAgICAgOiBTdHJpbmdzLmdldExhbmcoJ3NlcnZpY2VFeHBpcmVCcmFuZCcpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgIHtjb21tb2RpdHlVcmwgJiYgY29tbW9kaXR5VXJsICE9PSAnJyAmJiAoXG4gICAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9hc3RCdG5UZXh0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHR5Lm9wZW5Jbm5lckg1KHsgdXJsOiBjb21tb2RpdHlVcmwgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7U3RyaW5ncy5nZXRMYW5nKCdjbGlja1JlbmV3Jyl9XG4gICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBnZXRCTEVPbmxpbmVTdGF0ZSxcbiAgb25CTEVDb25uZWN0U3RhdHVzQ2hhbmdlLFxuICBvZmZCTEVDb25uZWN0U3RhdHVzQ2hhbmdlLFxuICBvbkJsdWV0b290aEFkYXB0ZXJTdGF0ZUNoYW5nZSxcbiAgb2ZmQmx1ZXRvb3RoQWRhcHRlclN0YXRlQ2hhbmdlLFxuICBzdWJzY3JpYmVCTEVDb25uZWN0U3RhdHVzLFxuICB1bnN1YnNjcmliZUJMRUNvbm5lY3RTdGF0dXMsXG59IGZyb20gJ0ByYXktanMvcmF5JztcblxuY29uc3QgdXNlQmxlT25saW5lID0gZGV2SWQgPT4ge1xuICBjb25zdCBbaXNCbGVPbmxpbmUsIHNldElzQmxlT25saW5lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVCbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBkYXRhID0+IHtcbiAgICAgIGlmICghZGF0YS5hdmFpbGFibGUpIHtcbiAgICAgICAgc2V0SXNCbGVPbmxpbmUoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0JsZU9ubGluZSAmJiBkYXRhLmF2YWlsYWJsZSkge1xuICAgICAgICBzZXRJc0JsZU9ubGluZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0JsZU9ubGluZSwgc2V0SXNCbGVPbmxpbmVdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQmxlQ29ubmVjdFN0YXR1c0NoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuZGV2aWNlSWQgPT09IGRldklkKSB7XG4gICAgICAgIHNldElzQmxlT25saW5lKGRhdGEuc3RhdHVzID09PSAnQ09OTkVDVEVEJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGV2SWRdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdWJzY3JpYmVCTEVDb25uZWN0U3RhdHVzKHsgZGV2aWNlSWQ6IGRldklkIH0pO1xuICAgIGdldEJMRU9ubGluZVN0YXRlKHtcbiAgICAgIGRldmljZUlkOiBkZXZJZCxcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEuaXNPbmxpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2V0SXNCbGVPbmxpbmUoZGF0YS5pc09ubGluZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gICAgb25CbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UoaGFuZGxlQmx1ZXRvb3RoQWRhcHRlclN0YXRlQ2hhbmdlKTtcbiAgICBvbkJMRUNvbm5lY3RTdGF0dXNDaGFuZ2UoaGFuZGxlQmxlQ29ubmVjdFN0YXR1c0NoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlQkxFQ29ubmVjdFN0YXR1cyh7IGRldmljZUlkOiBkZXZJZCB9KTtcbiAgICAgIG9mZkJsdWV0b290aEFkYXB0ZXJTdGF0ZUNoYW5nZShoYW5kbGVCbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UpO1xuICAgICAgb2ZmQkxFQ29ubmVjdFN0YXR1c0NoYW5nZShoYW5kbGVCbGVDb25uZWN0U3RhdHVzQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgaXNCbGVPbmxpbmUgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VCbGVPbmxpbmU7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsd0JBQUE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksV0FBVztBQUNmLFFBQUksZUFBZTtBQUVuQixZQUFRLFdBQVcsSUFBSTtBQUN2QixZQUFRLFFBQVEsSUFBSTtBQUNwQixZQUFRLFlBQVksSUFBSTtBQUN4QixXQUFPLFVBQVUsRUFBQyxhQUFZLGFBQVksVUFBUyxVQUFTLGNBQWEsYUFBWTtBQUFBO0FBQUE7OztBQ1JyRjtBQUFBO0FBQUEsS0FBQyxTQUFTQyxJQUFFQyxJQUFFO0FBQUMsa0JBQVUsT0FBTyxXQUFTLGVBQWEsT0FBTyxTQUFPLE9BQU8sVUFBUUEsR0FBRSxJQUFFLGNBQVksT0FBTyxVQUFRLE9BQU8sTUFBSSxPQUFPQSxFQUFDLEtBQUdELEtBQUUsZUFBYSxPQUFPLGFBQVcsYUFBV0EsTUFBRyxNQUFNLFFBQU1DLEdBQUU7QUFBQSxJQUFDLEVBQUUsU0FBTSxXQUFVO0FBQUM7QUFBYSxVQUFJRCxLQUFFLEtBQUlDLEtBQUUsS0FBSUMsS0FBRSxNQUFLQyxLQUFFLGVBQWNDLEtBQUUsVUFBU0MsS0FBRSxVQUFTQyxLQUFFLFFBQU9DLEtBQUUsT0FBTUMsS0FBRSxRQUFPQyxLQUFFLFNBQVFDLEtBQUUsV0FBVUMsS0FBRSxRQUFPQyxLQUFFLFFBQU9DLEtBQUUsZ0JBQWVD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R0MsS0FBRSxDQUFDLENBQUMsR0FBRUMsS0FBRSxTQUFTUCxJQUFFO0FBQUMsWUFBSUcsT0FBSUgsT0FBSUksS0FBRUEsR0FBRSxRQUFRLHdCQUF1QixFQUFFLE1BQUlFLEdBQUUsS0FBSyxHQUFFTixJQUFFSSxFQUFDLElBQUUsTUFBSUQsT0FBSUgsTUFBR0ksT0FBSUUsR0FBRSxLQUFLLEdBQUVOLElBQUVJLEVBQUMsR0FBRUQsS0FBRSxLQUFHLE1BQUlBLE1BQUcsVUFBUUMsTUFBR0osS0FBRU0sR0FBRSxLQUFLLEdBQUVOLElBQUUsQ0FBQyxJQUFFLE1BQUlHLE1BQUdDLE1BQUcsQ0FBQ0osS0FBRU0sR0FBRSxLQUFLLEdBQUUsR0FBRSxNQUFHRixFQUFDLElBQUVELE1BQUcsT0FBS0MsTUFBRyxDQUFDSixNQUFHLE1BQUlHLFFBQUtHLEdBQUUsS0FBS0gsSUFBRSxHQUFFQyxJQUFFRixFQUFDLEdBQUVDLEtBQUUsSUFBR0gsT0FBSU0sR0FBRSxLQUFLSCxJQUFFSCxJQUFFLEdBQUVFLEVBQUMsR0FBRUMsS0FBRSxLQUFJQyxLQUFFO0FBQUEsSUFBRSxHQUFFSSxLQUFFLEdBQUVBLEtBQUVSLEdBQUUsUUFBT1EsTUFBSTtBQUFDLE1BQUFBLE9BQUksTUFBSUwsTUFBR0ksR0FBRSxHQUFFQSxHQUFFQyxFQUFDO0FBQUcsZUFBUUMsS0FBRSxHQUFFQSxLQUFFVCxHQUFFUSxFQUFDLEVBQUUsUUFBT0M7QUFBSSxRQUFBUixLQUFFRCxHQUFFUSxFQUFDLEVBQUVDLEVBQUMsR0FBRSxNQUFJTixLQUFFLFFBQU1GLE1BQUdNLEdBQUUsR0FBRUQsS0FBRSxDQUFDQSxFQUFDLEdBQUVILEtBQUUsS0FBR0MsTUFBR0gsS0FBRSxNQUFJRSxLQUFFLFNBQU9DLE1BQUcsUUFBTUgsTUFBR0UsS0FBRSxHQUFFQyxLQUFFLE1BQUlBLEtBQUVILEtBQUVHLEdBQUUsQ0FBQyxJQUFFQyxLQUFFSixPQUFJSSxLQUFFQSxLQUFFLEtBQUdELE1BQUdILEtBQUUsUUFBTUEsTUFBRyxRQUFNQSxLQUFFSSxLQUFFSixLQUFF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LElBQUksZUFBQUEsUUFBTSxjQUFjLGNBQU8saUJBQUUsT0FBYyxNQUFNLElBQUksZUFBQUEsUUFBTSxjQUFjLGNBQU8sS0FBSztBQUFBLEVBQzVHO0FBQ0YsQ0FBQztBQUVELEtBQUssaUJBQWlCLGNBQWMsa0JBQWtCLENBQUM7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfaW5kZXhfbW9kdWxlIiwgInQiLCAiZSIsICJuIiwgInIiLCAiaSIsICJzIiwgInUiLCAiYSIsICJvIiwgImMiLCAiZiIsICJoIiwgImQiLCAibCIsICIkIiwgIk0iLCAibSIsICJ2IiwgImciLCAicCIsICJfIiwgInciLCAiTyIsICJiIiwgInkiLCAiRCIsICJrIiwgImUiLCAiZSIsICJNYXAiLCAiTWFwIiwgIk1hcCIsICJvdGhWYWx1ZSIsICJuIiwgImUiLCAiUHJvbWlzZSIsICJNYXAiLCAiUHJvbWlzZSIsICJpc0VxdWFsIiwgInJlcXVpcmVfbGliIiwgIiQiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJzdHlsZXMiLCAiaW1wb3J0X3JlYWN0IiwgImUiLCAidCIsICJpbXBvcnRfcmVhY3QiLCAic2xpY2UiLCAib3B0aW9ucyIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJldkRlYm91bmNlIiwgImkiLCAiRU1QVFlfT0JKIiwgIkVNUFRZX0FSUiIsICJJU19OT05fRElNRU5TSU9OQUwiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJyZW1vdmVOb2RlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2hpbGRyZW4iLCAia2V5IiwgInJlZiIsICJub3JtYWxpemVkUHJvcHMiLCAiYXJndW1lbnRzIiwgImxlbmd0aCIsICJjYWxsIiwgImRlZmF1bHRQcm9wcyIsICJjcmVhdGVWTm9kZSIsICJvcmlnaW5hbCIsICJ2bm9kZSIsICJ1bmRlZmluZWQiLCAiY29uc3RydWN0b3IiLCAiRnJhZ21lbnQiLCAicHJvcHMiLCAiY2hpbGRyZW4iLCAiQ29tcG9uZW50IiwgImNvbnRleHQiLCAiZ2V0RG9tU2libGluZyIsICJ2bm9kZSIsICJjaGlsZEluZGV4IiwgImluZGV4T2YiLCAic2libGluZyIsICJsZW5ndGgiLCAidHlwZSIsICJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsICJpIiwgImNoaWxkIiwgImJhc2UiLCAiZW5xdWV1ZVJlbmRlciIsICJjIiwgInJlcmVuZGVyUXVldWUiLCAicHVzaCIsICJwcm9jZXNzIiwgInByZXZEZWJvdW5jZSIsICJvcHRpb25zIiwgImRlYm91bmNlUmVuZGVyaW5nIiwgInNldFRpbWVvdXQiLCAicXVldWUiLCAic29ydCIsICJhIiwgImIiLCAic29tZSIsICJjb21wb25lbnQiLCAiY29tbWl0UXVldWUiLCAib2xkVk5vZGUiLCAib2xkRG9tIiwgInBhcmVudERvbSIsICJhc3NpZ24iLCAiZGlmZiIsICJvd25lclNWR0VsZW1lbnQiLCAiY29tbWl0Um9vdCIsICJkaWZmQ2hpbGRyZW4iLCAicmVuZGVyUmVzdWx0IiwgIm5ld1BhcmVudFZOb2RlIiwgIm9sZFBhcmVudFZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAiaXNTdmciLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiaXNIeWRyYXRpbmciLCAiaiIsICJjaGlsZFZOb2RlIiwgIm5ld0RvbSIsICJmaXJzdENoaWxkRG9tIiwgInJlZnMiLCAib2xkQ2hpbGRyZW4iLCAiRU1QVFlfQVJSIiwgIm9sZENoaWxkcmVuTGVuZ3RoIiwgImNyZWF0ZVZOb2RlIiwgIkFycmF5IiwgImlzQXJyYXkiLCAia2V5IiwgInVuZGVmaW5lZCIsICJFTVBUWV9PQkoiLCAicmVmIiwgInJlb3JkZXJDaGlsZHJlbiIsICJwbGFjZUNoaWxkIiwgInBhcmVudE5vZGUiLCAidW5tb3VudCIsICJhcHBseVJlZiIsICJ0bXAiLCAicGxhY2VDaGlsZCIsICJwYXJlbnREb20iLCAiY2hpbGRWTm9kZSIsICJvbGRWTm9kZSIsICJvbGRDaGlsZHJlbiIsICJuZXdEb20iLCAib2xkRG9tIiwgIm5leHREb20iLCAic2liRG9tIiwgImoiLCAicGFyZW50Tm9kZSIsICJvdXRlciIsICJhcHBlbmRDaGlsZCIsICJuZXh0U2libGluZyIsICJsZW5ndGgiLCAiaW5zZXJ0QmVmb3JlIiwgImRpZmZQcm9wcyIsICJkb20iLCAibmV3UHJvcHMiLCAib2xkUHJvcHMiLCAiaXNTdmciLCAiaHlkcmF0ZSIsICJpIiwgInNldFByb3BlcnR5IiwgInNldFN0eWxlIiwgInN0eWxlIiwgImtleSIsICJ2YWx1ZSIsICJJU19OT05fRElNRU5TSU9OQUwiLCAidGVzdCIsICJuYW1lIiwgIm9sZFZhbHVlIiwgInVzZUNhcHR1cmUiLCAibyIsICJjc3NUZXh0IiwgInJlcGxhY2UiLCAidG9Mb3dlckNhc2UiLCAic2xpY2UiLCAiX2xpc3RlbmVycyIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImV2ZW50UHJveHkiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJlIiwgInNldEF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAidHlwZSIsICJvcHRpb25zIiwgImV2ZW50IiwgImRpZmYiLCAibmV3Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJleGNlc3NEb21DaGlsZHJlbiIsICJjb21taXRRdWV1ZSIsICJpc0h5ZHJhdGluZyIsICJ0bXAiLCAiYyIsICJpc05ldyIsICJvbGRTdGF0ZSIsICJzbmFwc2hvdCIsICJjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24iLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgInJlbmRlclJlc3VsdCIsICJuZXdUeXBlIiwgImNvbnN0cnVjdG9yIiwgInByb3BzIiwgImNvbnRleHRUeXBlIiwgInByb3RvdHlwZSIsICJyZW5kZXIiLCAiQ29tcG9uZW50IiwgImRvUmVuZGVyIiwgInN1YiIsICJzdGF0ZSIsICJjb250ZXh0IiwgImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsICJhc3NpZ24iLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvbXBvbmVudERpZE1vdW50IiwgInB1c2giLCAiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiZm9yRWFjaCIsICJ2bm9kZSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgImNvbXBvbmVudERpZFVwZGF0ZSIsICJnZXRDaGlsZENvbnRleHQiLCAiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCAiRnJhZ21lbnQiLCAiY2hpbGRyZW4iLCAiZGlmZkNoaWxkcmVuIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiYmFzZSIsICJkaWZmRWxlbWVudE5vZGVzIiwgImRpZmZlZCIsICJpbmRleE9mIiwgImNvbW1pdFJvb3QiLCAicm9vdCIsICJzb21lIiwgImNiIiwgImNhbGwiLCAiY2hpbGQiLCAib2xkSHRtbCIsICJuZXdIdG1sIiwgIm5vZGVUeXBlIiwgImxvY2FsTmFtZSIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50TlMiLCAiY3JlYXRlRWxlbWVudCIsICJpcyIsICJkYXRhIiwgImNoaWxkTm9kZXMiLCAiRU1QVFlfT0JKIiwgImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwgImF0dHJpYnV0ZXMiLCAiaW5uZXJIVE1MIiwgImdldERvbVNpYmxpbmciLCAicmVtb3ZlTm9kZSIsICJjaGVja2VkIiwgImFwcGx5UmVmIiwgInJlZiIsICJjdXJyZW50IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAic2tpcFJlbW92ZSIsICJyIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInVuZGVmaW5lZCIsICJ0aGlzIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgImNvbnN0cnVjdG9yIiwgImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsICJzZXRTdGF0ZSIsICJjb21wb25lbnREaWRDYXRjaCIsICJlIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAiQ29tcG9uZW50IiwgInByb3RvdHlwZSIsICJ1cGRhdGUiLCAiY2FsbGJhY2siLCAicyIsICJ0aGlzIiwgInN0YXRlIiwgImFzc2lnbiIsICJwcm9wcyIsICJwdXNoIiwgImVucXVldWVSZW5kZXIiLCAiZm9yY2VVcGRhdGUiLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJvY2VzcyIsICJpIiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJFTkNPREVEX0VOVElUSUVTIiwgImVuY29kZUVudGl0aWVzIiwgImlucHV0IiwgInMiLCAiU3RyaW5nIiwgInRlc3QiLCAicmVwbGFjZSIsICJpbmRlbnQiLCAiY2hhciIsICJpc0xhcmdlU3RyaW5nIiwgImxlbmd0aCIsICJpZ25vcmVMaW5lcyIsICJpbmRleE9mIiwgIkpTX1RPX0NTUyIsICJzdHlsZU9ialRvQ3NzIiwgInN0ciIsICJwcm9wIiwgInZhbCIsICJ0b0xvd2VyQ2FzZSIsICJ1bmRlZmluZWQiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJpIiwgImdldENoaWxkcmVuIiwgImFjY3VtdWxhdG9yIiwgImNoaWxkcmVuIiwgIkFycmF5IiwgImlzQXJyYXkiLCAicmVkdWNlIiwgInB1c2giLCAiU0hBTExPVyIsICJzaGFsbG93IiwgIlVOTkFNRUQiLCAiVk9JRF9FTEVNRU5UUyIsICJVTlNBRkVfTkFNRSIsICJtYXJrQXNEaXJ0eSIsICJ0aGlzIiwgIl9fZCIsICJyZW5kZXJUb1N0cmluZyIsICJyZW5kZXIiLCAic2hhbGxvd1JlbmRlciIsICJ2bm9kZSIsICJjb250ZXh0IiwgIkVNUFRZX0FSUiIsICJvcHRzIiwgInByZXZpb3VzU2tpcEVmZmVjdHMiLCAib3B0aW9ucyIsICJfX3MiLCAicmVzIiwgIl9yZW5kZXJUb1N0cmluZyIsICJfX2MiLCAiaW5uZXIiLCAiaXNTdmdNb2RlIiwgInNlbGVjdFZhbHVlIiwgInByZXR0eSIsICJpbmRlbnRDaGFyIiwgInJlbmRlcmVkIiwgImNvbXBvbmVudCIsICJub2RlTmFtZSIsICJ0eXBlIiwgImlzQ29tcG9uZW50IiwgInJlbmRlclJvb3RDb21wb25lbnQiLCAiRnJhZ21lbnQiLCAic2hhbGxvd0hpZ2hPcmRlciIsICJjIiwgIl9fdiIsICJzZXRTdGF0ZSIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAiX19iIiwgInJlbmRlckhvb2siLCAiX19yIiwgInByb3RvdHlwZSIsICJjeFR5cGUiLCAiY29udGV4dFR5cGUiLCAicHJvdmlkZXIiLCAiY2N0eCIsICJ2YWx1ZSIsICJfXyIsICJfZGlydHkiLCAic3RhdGUiLCAiX25leHRTdGF0ZSIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvdW50IiwgImNhbGwiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgImRpZmZlZCIsICJkaXNwbGF5TmFtZSIsICJGdW5jdGlvbiIsICJuYW1lIiwgInRvU3RyaW5nIiwgIm1hdGNoIiwgImluZGV4IiwgInByb3BDaGlsZHJlbiIsICJodG1sIiwgImF0dHJzIiwgIk9iamVjdCIsICJrZXlzIiwgInNvcnRBdHRyaWJ1dGVzIiwgInNvcnQiLCAidiIsICJhbGxBdHRyaWJ1dGVzIiwgImhvb2tlZCIsICJhdHRyaWJ1dGVIb29rIiwgIl9faHRtbCIsICJ4bWwiLCAic2VsZWN0ZWQiLCAic3ViIiwgIkVycm9yIiwgImlzVm9pZCIsICJ2b2lkRWxlbWVudHMiLCAicGllY2VzIiwgImhhc0xhcmdlIiwgImxhc3RXYXNUZXh0IiwgImNoaWxkIiwgInJldCIsICJpc1RleHQiLCAiam9pbiIsICJzdWJzdHJpbmciLCAibiIsICJ0IiwgInMiLCAiciIsICJlIiwgInUiLCAiaCIsICJwIiwgImEiLCAibCIsICJtIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiZGVwc0VxdWFsIiwgImlzRXF1YWwiLCAiY3JlYXRlRGVlcENvbXBhcmVFZmZlY3QiLCAibSIsICJSZWFjdCIsICJpbXBvcnRfZXNfYXJyYXlfY29uY2F0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfaW5kZXgiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbml0X2VzbSIsICJSZWFjdCIsICJjbGFzc1ByZWZpeCIsICJkIiwgInJweDJweCIsICJSZWFjdCIsICJsaWJfZGVmYXVsdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2luZGV4X21vZHVsZSIsICJzdHlsZXMiLCAiUmVhY3QiLCAiaW1wb3J0X2luZGV4X21vZHVsZSIsICJyIiwgImxpYl9kZWZhdWx0IiwgIlJlYWN0IiwgInN0eWxlcyIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2luZGV4X21vZHVsZSIsICJSZWFjdCIsICJpIiwgIlN0eWxlcyIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9pbmRleF9tb2R1bGUiLCAiUmVhY3QiLCAiU3R5bGVzIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfaW5kZXhfbW9kdWxlIiwgImUiLCAiUmVhY3QiLCAic3R5bGVzIiwgImxpYl9kZWZhdWx0IiwgImRheWpzIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfaW5kZXhfbW9kdWxlIiwgImluU2VydmljZSIsICJpc1BpZEhhZFZBUyIsICJjb21tb2RpdHlVcmwiLCAiZSIsICJSZWFjdCIsICJzdHlsZXMiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9pbmRleF9tb2R1bGUiLCAiYmxlbG9ja1N3aXRjaCIsICJpIiwgIlJlYWN0IiwgInN0eWxlcyIsICJsaWJfZGVmYXVsdCIsICJkIiwgImMiLCAiUmVhY3QiXQp9Cg==
