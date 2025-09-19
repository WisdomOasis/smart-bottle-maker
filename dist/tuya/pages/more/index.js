import {
  _toArray,
  _toConsumableArray,
  init_slicedToArray,
  init_toArray,
  init_toConsumableArray,
  lib_default,
  require_dist,
  require_es_array_concat,
  require_es_array_index_of,
  require_es_array_map,
  require_es_array_reduce,
  require_es_array_slice,
  require_es_array_splice,
  require_es_object_keys,
  require_es_object_to_string,
  require_es_object_values,
  require_es_parse_int,
  require_es_string_repeat,
  require_web_dom_collections_for_each
} from "/chunk-G22KBMUG.js";
import "/chunk-CQBMKGKR.js";
import "/chunk-UXQMYNQX.js";
import {
  isDpExist
} from "/chunk-NUT6VFTF.js";
import "/chunk-HCMI3PT2.js";
import {
  dpCodes_default
} from "/chunk-BLWGS5W2.js";
import {
  i18n_default
} from "/chunk-ULZ52SSS.js";
import {
  Icon_default,
  PageInstance,
  PageInstanceContext,
  ScrollView_default,
  Text_default,
  View_default,
  getSystemInfoSync,
  init_lib,
  init_lib2,
  init_main,
  init_ray,
  lifecycle,
  require_advance_string_index,
  require_an_object,
  require_es_regexp_exec,
  require_fails,
  require_fix_regexp_well_known_symbol_logic,
  require_function_call,
  require_function_uncurry_this,
  require_get_method,
  require_is_null_or_undefined,
  require_regexp_exec_abstract,
  require_regexp_sticky_helpers,
  require_require_object_coercible,
  require_species_constructor,
  require_to_length,
  require_to_string,
  useActions,
  useDevice,
  useProps
} from "/chunk-QY7E24JJ.js";
import {
  createPageConfig,
  usePageEvent
} from "/chunk-E3KUK7K6.js";
import {
  _extends,
  init_extends
} from "/chunk-B4PAEWTK.js";
import {
  require_react
} from "/chunk-AF7SZHRH.js";
import {
  _objectSpread2,
  init_defineProperty,
  init_objectSpread2
} from "/chunk-2NVT6NOP.js";
import "/chunk-DXDVPL6V.js";
import {
  __commonJS,
  __spreadValues,
  __toESM
} from "/chunk-IJV4CEDC.js";

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/components-ty-cell/lib/style.less
var require_style = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/components-ty-cell/lib/style.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/components-ty-cell/lib/style.less
var require_style2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@ray-js/components-ty-cell/lib/style.less"(exports, module) {
    require_style();
    module.exports = {};
  }
});

// node_modules/core-js/modules/es.string.split.js
var require_es_string_split = __commonJS({
  "node_modules/core-js/modules/es.string.split.js"() {
    "use strict";
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
    var anObject = require_an_object();
    var isNullOrUndefined = require_is_null_or_undefined();
    var requireObjectCoercible = require_require_object_coercible();
    var speciesConstructor = require_species_constructor();
    var advanceStringIndex = require_advance_string_index();
    var toLength = require_to_length();
    var toString = require_to_string();
    var getMethod = require_get_method();
    var regExpExec = require_regexp_exec_abstract();
    var stickyHelpers = require_regexp_sticky_helpers();
    var fails = require_fails();
    var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
    var MAX_UINT32 = 4294967295;
    var min = Math.min;
    var push = uncurryThis([].push);
    var stringSlice = uncurryThis("".slice);
    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
      var re = /(?:)/;
      var originalExec = re.exec;
      re.exec = function() {
        return originalExec.apply(this, arguments);
      };
      var result = "ab".split(re);
      return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
    });
    var BUGGY = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    ".".split(/()()/).length > 1 || "".split(/.?/).length;
    fixRegExpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
      var internalSplit = "0".split(void 0, 0).length ? function(separator, limit) {
        return separator === void 0 && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
      } : nativeSplit;
      return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = requireObjectCoercible(this);
          var splitter = isNullOrUndefined(separator) ? void 0 : getMethod(separator, SPLIT);
          return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(string, limit) {
          var rx = anObject(this);
          var S = toString(string);
          if (!BUGGY) {
            var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
            if (res.done)
              return res.value;
          }
          var C = speciesConstructor(rx, RegExp);
          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
          var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
          var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
          if (lim === 0)
            return [];
          if (S.length === 0)
            return regExpExec(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];
          while (q < S.length) {
            splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
            var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
            var e;
            if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              push(A, stringSlice(S, p, q));
              if (A.length === lim)
                return A;
              for (var i = 1; i <= z.length - 1; i++) {
                push(A, z[i]);
                if (A.length === lim)
                  return A;
              }
              q = p = e;
            }
          }
          push(A, stringSlice(S, p));
          return A;
        }
      ];
    }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/more/index.module.less
var require_index_module = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/more/index.module.less"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/more/index.module.less
var require_index_module2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/more/index.module.less"(exports, module) {
    require_index_module();
    var s_container = "container__HEVtAa";
    var s_listItem = "listItem__HEVtAa";
    exports["container"] = s_container;
    exports["listItem"] = s_listItem;
    module.exports = { "container": s_container, "listItem": s_listItem };
  }
});

// entry-file:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/more/index.entry.js
var import_react8 = __toESM(require_react());
init_ray();
init_main();

// src/pages/more/index.tsx
var import_react7 = __toESM(require_react());
init_ray();
var import_smart_ui = __toESM(require_dist());

// node_modules/@ray-js/components-ty-cell/lib/index.tuya.js
var import_style = __toESM(require_style2());

// node_modules/@ray-js/components-ty-cell/lib/List.tuya.js
init_extends();
var import_es_regexp_exec = __toESM(require_es_regexp_exec());
var import_es_string_split = __toESM(require_es_string_split());
var import_es_array_map = __toESM(require_es_array_map());
var import_classnames2 = __toESM(require_classnames());
var import_react6 = __toESM(require_react());
init_lib();

// node_modules/@ray-js/components-ty-config-provider/lib/Config.tuya.js
var import_react3 = __toESM(require_react());

// node_modules/@ray-js/components-ty-config-provider/lib/utils.tuya.js
init_toArray();
init_defineProperty();
init_slicedToArray();
init_toConsumableArray();
init_objectSpread2();
var import_es_array_slice = __toESM(require_es_array_slice());
var import_es_array_concat = __toESM(require_es_array_concat());
var import_es_string_repeat = __toESM(require_es_string_repeat());
var import_es_object_to_string = __toESM(require_es_object_to_string());
var import_es_array_reduce = __toESM(require_es_array_reduce());
var import_es_array_splice = __toESM(require_es_array_splice());
var import_es_parse_int = __toESM(require_es_parse_int());
var import_web_dom_collections_for_each = __toESM(require_web_dom_collections_for_each());
var import_es_object_keys = __toESM(require_es_object_keys());
var import_es_object_values = __toESM(require_es_object_values());
var import_es_array_index_of = __toESM(require_es_array_index_of());
var isObject = function(obj) {
  return obj === Object(obj);
};
var isNil = function(obj) {
  return obj === void 0 || obj === null;
};
var get = function(object, pathString, defaultValue) {
  var parts = "".concat(pathString).split(".");
  var length = parts.length;
  var i = 0;
  var value = object === Object(object) ? object : void 0;
  while (value != null && i < length) {
    value = value[parts[i++]];
  }
  return i && i === length && value !== void 0 ? value : defaultValue;
};
var deepMerge = function(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) {
    return target;
  }
  var output = _objectSpread2({}, target);
  sources.forEach(function(source) {
    if (isObject(source)) {
      Object.keys(source).forEach(function(key) {
        if (isObject(source[key]) && isObject(output[key])) {
          if (!output[key]) {
            output[key] = _objectSpread2({}, source[key]);
          } else {
            output[key] = deepMerge(output[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
  });
  return output;
};
var getConfig = function(props, key, defaultValue) {
  var _key$split = key.split("."), _key$split2 = _toArray(_key$split), namespace = _key$split2[0], path = _key$split2.slice(1);
  var configBasicPath = path.join(".");
  var componentsType = get(props.config, "".concat(namespace, ".type")) || get(props.config, "type", "light");
  var configType = componentsType === "basic" ? "basic" : componentsType === "dark" ? "dark" : "light";
  var configValue;
  var configTypePath;
  if (configType) {
    configTypePath = [namespace, configType].concat(_toConsumableArray(path)).join(".");
  }
  if (!isNil(get(props, configBasicPath))) {
    configValue = get(props, configBasicPath);
  } else if (!isNil(get(props.config, key))) {
    configValue = get(props.config, key);
  } else {
    configValue = get(props.config, configTypePath, defaultValue);
  }
  if (typeof configValue === "function") {
    configValue = configValue(props);
  }
  return configValue;
};

// node_modules/@ray-js/components-ty-config-provider/lib/context/ConfigProvider.tuya.js
var import_react2 = __toESM(require_react());

// node_modules/@ray-js/components-ty-config-provider/lib/base.tuya.js
var theme = {
  M1: "#3678E3",
  // 用于按钮、品牌露出
  M2: "#F04C4C",
  // 用于强警告、提示信息
  M3: "#2DDA86",
  // 用于成功、开关、推荐等
  M4: "#1989FA",
  // 用于正向引导、按钮文字、链接等
  M5: "#FFA000",
  // 用于轻度警告、提示信息
  light: {
    N1: "#000000",
    // 标题
    N2: "rgba(0,0,0,0.7)",
    // 副标题
    N3: "rgba(0,0,0,0.5)",
    // 辅助、说明
    N4: "rgba(0,0,0,0.4)",
    // Disable、提示文字等
    N5: "rgba(0,0,0,0.3)",
    // 导航栏、功能icon
    N6: "rgba(0,0,0,0.2)",
    // 右侧箭头、弹窗关闭等
    N7: "rgba(0,0,0,0.1)",
    // 分割线
    N8: "rgba(0,0,0,0.05)",
    // 补充
    B1: "#F6F7FB",
    // 背景色
    B2: "#FFFFFF",
    // 顶部导航栏
    B3: "#FFFFFF",
    // 卡片
    B4: "#FFFFFF",
    // 弹窗
    B5: "#FFFFFF",
    // 底部导航栏
    B6: "#FFFFFF"
    // 列表
  },
  dark: {
    N1: "rgba(255,255,255,1)",
    N2: "rgba(255,255,255,0.7)",
    N3: "rgba(255,255,255,0.5)",
    N4: "rgba(255,255,255,0.4)",
    N5: "rgba(255,255,255,0.3)",
    N6: "rgba(255,255,255,0.2)",
    N7: "rgba(255,255,255,0.1)",
    N8: "rgba(255,255,255,0.05)",
    B1: "#FFFFFF",
    B2: "rgba(255,255,255,0.12)",
    B3: "rgba(255,255,255,0.12)",
    B4: "rgba(255,255,255,0.12)",
    B5: "rgba(255,255,255,0.12)",
    B6: "rgba(255,255,255,0.12)"
  }
};
var globalVariable = {
  brand: "#FF4800",
  // 品牌色
  background: "#f8f8f8",
  // 背景色
  fontSizeBase: 1,
  // 字体基准比例
  dividerColor: "#e5e5e5",
  // 分隔线颜色
  success: "#00C800",
  warning: "#FAAE17",
  error: "#F4182C",
  fontFamily: void 0,
  // info, // 信息色
  // disabled, // 禁用透明度
  mask: "rgba(0, 0, 0, 0.7)",
  // 遮罩颜色
  text: {
    light: "#333",
    dark: "#fff"
  }
};
var base_tuya_default = {
  type: "light",
  global: globalVariable,
  theme
};

// node_modules/@ray-js/components-ty-config-provider/lib/context/ConfigContext.tuya.js
var import_react = __toESM(require_react());
var ConfigContext = /* @__PURE__ */ import_react.default.createContext();
var ConfigContext_tuya_default = ConfigContext;

// node_modules/@ray-js/components-ty-config-provider/lib/getThemeType.tuya.js
init_lib2();
var rayEnv = {
  isAndroid: false,
  isIOS: false,
  isMiniProgram: true,
  isNative: false,
  isTuya: true,
  isWeb: false,
  isWechat: false
};
var getThemeType = function() {
  try {
    if (rayEnv.isTuya) {
      return getSystemInfoSync().theme;
    }
    if (rayEnv.isWeb) {
      return window.document.documentElement.getAttribute("theme");
    }
  } catch (error) {
    console.log(error);
  }
  return "light";
};

// node_modules/@ray-js/components-ty-config-provider/lib/context/useConfig.tuya.js
var import_react4 = __toESM(require_react());
function useConfig() {
  var config = import_react4.default.useContext(ConfigContext_tuya_default);
  return config;
}

// node_modules/@ray-js/components-ty-config-provider/lib/hooks/useConfigSelector.tuya.js
var deepMerge2 = deepMerge;
var useConfigSelectorFn = function(defaultConfig) {
  var config = useConfig();
  return function(selector) {
    if (config) {
      return getConfig({
        config: deepMerge2(base_tuya_default, defaultConfig, {
          type: getThemeType()
        }, config === null || config === void 0 ? void 0 : config.__value__)
      }, selector);
    }
  };
};

// node_modules/@ray-js/components-ty-cell/lib/ListItem.tuya.js
var import_classnames = __toESM(require_classnames());
var import_react5 = __toESM(require_react());
init_lib();

// node_modules/@ray-js/components-ty-cell/lib/props.tuya.js
var prefix = "rayui-cell";

// node_modules/@ray-js/components-ty-cell/lib/utils/kit.tuya.js
init_objectSpread2();
var import_es_array_reduce2 = __toESM(require_es_array_reduce());
var import_es_object_to_string2 = __toESM(require_es_object_to_string());
var import_es_array_concat2 = __toESM(require_es_array_concat());
var getArray = function(array) {
  return Array.isArray(array) ? array : [];
};
var merge = function() {
  var result = {};
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  for (var _i = 0, _objs = objs; _i < _objs.length; _i++) {
    var obj = _objs[_i];
    result = _objectSpread2(_objectSpread2({}, result), obj || {});
  }
  return result;
};
var joinArray = function(array, split) {
  return getArray(array).reduce(function(acc, cur, index) {
    return index > 0 ? acc.concat(split(cur, index), cur) : acc.concat(cur);
  }, []);
};

// node_modules/@ray-js/components-ty-cell/lib/ListItem.tuya.js
var TextWrap = function(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ import_react5.default.createElement(Text_default, {
    className: "".concat(prefix, "-text-overflow")
  }, children);
};
var ListItem = function(_ref2) {
  var title = _ref2.title, content = _ref2.content, className = _ref2.className, style = _ref2.style, _ref2$gap = _ref2.gap, gap = _ref2$gap === void 0 ? 0 : _ref2$gap, titleStyle = _ref2.titleStyle, contentStyle = _ref2.contentStyle, onClick = _ref2.onClick, onContentClick = _ref2.onContentClick, _ref2$labelCol = _ref2.labelCol, labelCol = _ref2$labelCol === void 0 ? 60 : _ref2$labelCol, _ref2$contentCol = _ref2.contentCol, contentCol = _ref2$contentCol === void 0 ? 40 : _ref2$contentCol, backgroundColor = _ref2.backgroundColor, textColor = _ref2.textColor;
  return /* @__PURE__ */ import_react5.default.createElement(View_default, {
    className: (0, import_classnames.default)("".concat(prefix, "-var-container"), "".concat(prefix, "-item-container"), "".concat(prefix, "-background-color"), className),
    hoverClassName: onClick ? "".concat(prefix, "-item-hover") : null,
    style: merge({
      margin: "".concat(gap, " 0"),
      backgroundColor,
      color: textColor
    }, style),
    onClick
  }, /* @__PURE__ */ import_react5.default.createElement(View_default, {
    className: "".concat(prefix, "-item-container-label"),
    style: {
      width: "".concat(labelCol, "%")
    }
  }, /* @__PURE__ */ import_react5.default.createElement(View_default, {
    className: "".concat(prefix, "-item-container-label-title"),
    style: titleStyle
  }, typeof title === "string" ? /* @__PURE__ */ import_react5.default.createElement(TextWrap, null, title) : title)), /* @__PURE__ */ import_react5.default.createElement(View_default, {
    className: "".concat(prefix, "-item-container-content"),
    style: merge({
      width: "".concat(contentCol, "%")
    }, contentStyle),
    onClick: onContentClick
  }, typeof content === "string" ? /* @__PURE__ */ import_react5.default.createElement(TextWrap, null, content) : content));
};

// node_modules/@ray-js/components-ty-cell/lib/theme.tuya.js
var cell = {
  light: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    splitColor: "rgba(0, 0, 0, 0.1)"
  },
  dark: {
    backgroundColor: "#202020",
    textColor: "#FFFFFF",
    splitColor: "rgba(255, 255, 255, 0.1)"
  }
};
var defaultTheme = {
  type: getThemeType(),
  cell
};

// node_modules/@ray-js/components-ty-cell/lib/List.tuya.js
var Empty = function(_ref) {
  var text = _ref.text;
  return /* @__PURE__ */ import_react6.default.createElement(Text_default, null, text);
};
function List(_ref2) {
  var _ref2$isRow = _ref2.isRow, isRow = _ref2$isRow === void 0 ? false : _ref2$isRow, dataSource = _ref2.dataSource, renderItem = _ref2.renderItem, children = _ref2.children, className = _ref2.className, style = _ref2.style, rowKey = _ref2.rowKey, _ref2$split = _ref2.split, split = _ref2$split === void 0 ? true : _ref2$split, splitStyle = _ref2.splitStyle, _ref2$empty = _ref2.empty, empty = _ref2$empty === void 0 ? "No Data" : _ref2$empty;
  var selectTheme = useConfigSelectorFn(defaultTheme);
  var backgroundColor = selectTheme("cell.backgroundColor");
  var splitColor = selectTheme("cell.splitColor");
  var textColor = selectTheme("cell.textColor");
  var data = getArray(dataSource);
  var defaultRenderItem = function(item) {
    return /* @__PURE__ */ import_react6.default.createElement(ListItem, _extends({
      backgroundColor,
      textColor,
      gap: isRow ? 0 : "16px",
      style: (
        // 如果是row，使用容器的背景
        isRow ? {
          backgroundColor: "transparent"
        } : {}
      )
    }, item));
  };
  var content = typeof empty === "string" ? /* @__PURE__ */ import_react6.default.createElement(Empty, {
    text: empty
  }) : empty;
  if (data.length > 0) {
    var items = data.map(function(item, index) {
      return /* @__PURE__ */ import_react6.default.createElement(View_default, {
        className: "".concat(prefix, "-bfc-wrap"),
        key: typeof rowKey === "function" ? rowKey(item, index) : item[rowKey]
      }, (renderItem || defaultRenderItem)(item, index));
    });
    if (split && isRow) {
      items = joinArray(items, function(item) {
        return /* @__PURE__ */ import_react6.default.createElement(View_default, {
          className: "".concat(prefix, "-split"),
          style: merge({
            borderColor: splitColor
          }, splitStyle),
          key: "".concat(item.key, "_split")
        });
      });
    }
    content = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, items);
  } else if (children) {
    content = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, children);
  }
  return /* @__PURE__ */ import_react6.default.createElement(View_default, {
    className: (0, import_classnames2.default)(
      "".concat(prefix, "-var-container"),
      // 如果是row，容器设置边框
      isRow ? "".concat(prefix, "-border") : null,
      isRow ? "".concat(prefix, "-background-color") : null,
      isRow ? "".concat(prefix, "-row-container") : null,
      className
    ),
    style: merge({
      backgroundColor: isRow ? backgroundColor : null
    }, style)
  }, content);
}
function ListRow(props) {
  return /* @__PURE__ */ import_react6.default.createElement(List, _extends({}, props, {
    isRow: true
  }));
}
List.Item = ListItem;
List.Row = ListRow;
var List_tuya_default = List;

// src/pages/more/index.tsx
var import_index_module = __toESM(require_index_module2());
var {
  headlightSwitch,
  taillightSwitch,
  speedLimitEnum,
  energyRecoveryLevel,
  antiThefSensitivity,
  bucketLock,
  tailBoxLock,
  moveAlarm,
  unitSet,
  cruiseSwitch
} = dpCodes_default;
var MorePage = () => {
  const devInfo = useDevice((device) => device.devInfo);
  const dpSchema = useDevice((device) => device.dpSchema);
  const dpState = useProps();
  const actions = useActions();
  const { devId } = devInfo;
  const [show, setShow] = (0, import_react7.useState)(false);
  const [enumData, setEnumData] = (0, import_react7.useState)([]);
  (0, import_react7.useEffect)(() => {
    ty.setNavigationBarTitle({ title: i18n_default.getLang("more") });
  }, []);
  const listData = [
    {
      key: "deviceInfo",
      onclick: () => lib_default.jumpSubPage.toEquipment({ deviceId: devId }),
      // 设备信息二级页
      isShow: true
    },
    {
      key: "moreLockMethods",
      onclick: () => {
        ty.router({
          url: "tuyaSmart://tsod_additional_unlock_methods?devId=".concat(devId),
          // 更多解锁方式 APP原生页面
          success: (res) => {
            console.log("res :>> ", res);
          },
          fail: (fail) => console.log("fail :>> ", fail)
        });
      },
      isShow: true
    },
    {
      key: "notice",
      onclick: () => lib_default.jumpSubPage.toMessageSwitch({ deviceId: devId }),
      // 通知信息二级页
      isShow: true
    },
    {
      key: "lostMode",
      onclick: () => lib_default.jumpSubPage.toLostMode({ deviceId: devId }),
      // 丢失模式二级页
      isShow: true
    },
    // 其他常见DP设置项
    ...[
      headlightSwitch,
      taillightSwitch,
      cruiseSwitch,
      speedLimitEnum,
      energyRecoveryLevel,
      antiThefSensitivity,
      bucketLock,
      tailBoxLock,
      moveAlarm,
      unitSet
    ].map((item) => ({
      key: item,
      type: "DP",
      onclick: () => {
        var _a, _b, _c, _d;
        const modeRange = ((_b = (_a = dpSchema[item]) == null ? void 0 : _a.property) == null ? void 0 : _b.range) || [];
        const dpType = (_d = (_c = dpSchema[item]) == null ? void 0 : _c.property) == null ? void 0 : _d.type;
        if (dpType === "enum") {
          setShow(true);
          const data = modeRange.map((i) => {
            return {
              value: i,
              key: item,
              name: i,
              checked: dpState[item] === i
            };
          });
          setEnumData(data);
        }
      },
      isShow: isDpExist(item, dpSchema)
    }))
  ].filter((i) => i.isShow);
  const _renderContent = (item) => {
    var _a, _b;
    const dpType = (_b = (_a = dpSchema[item.key]) == null ? void 0 : _a.property) == null ? void 0 : _b.type;
    switch (dpType) {
      case "bool":
        return /* @__PURE__ */ import_react7.default.createElement(
          import_smart_ui.Switch,
          {
            size: "26px",
            checked: dpState[item.key],
            onChange: (d) => actions[item.key].set(d.detail)
          }
        );
      case "enum":
        return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(Text_default, { style: { color: "var(--app-B1-N4)" } }, dpState[item.key]), /* @__PURE__ */ import_react7.default.createElement(Icon_default, { type: "icon-right", color: "var(--app-B1-N4)", size: 18 }));
      default:
        return null;
    }
  };
  return /* @__PURE__ */ import_react7.default.createElement(View_default, { className: import_index_module.default.container }, /* @__PURE__ */ import_react7.default.createElement(ScrollView_default, { scrollY: true }, /* @__PURE__ */ import_react7.default.createElement(
    List_tuya_default,
    {
      style: {
        marginTop: "19px",
        marginBottom: "19px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      rowKey: (_, i) => i,
      dataSource: listData,
      renderItem: (item) => /* @__PURE__ */ import_react7.default.createElement(
        List_tuya_default.Item,
        {
          gap: "5px",
          className: import_index_module.default.listItem,
          title: (item == null ? void 0 : item.type) === "DP" ? i18n_default.getDpLang(item.key) : i18n_default.getLang(item.key),
          titleStyle: { color: "var(--app-B1-N1)", fontSize: "16px", fontWeight: 500 },
          onClick: item.onclick,
          content: /* @__PURE__ */ import_react7.default.createElement(View_default, null, (item == null ? void 0 : item.type) === "DP" ? _renderContent(item) : /* @__PURE__ */ import_react7.default.createElement(Icon_default, { type: "icon-right", color: "var(--app-B1-N4)", size: 18 }))
        }
      )
    }
  )), /* @__PURE__ */ import_react7.default.createElement(
    import_smart_ui.ActionSheet,
    {
      show,
      actions: enumData,
      onClose: () => setShow(false),
      onSelect: (d) => {
        actions[d.detail.key].set(d.detail.value);
      },
      cancelText: i18n_default.getLang("cancel")
    }
  ));
};
var more_default = MorePage;

// entry-file:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/src/pages/more/index.entry.js
var isClassType = (c) => c.prototype && typeof c.prototype.render === "function";
var EntryWrapper = import_react8.default.forwardRef((props, ref) => {
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
  return import_react8.default.createElement(
    PageInstanceContext.Provider,
    { value: { $instance } },
    isClassType(more_default) ? import_react8.default.createElement(more_default, __spreadValues({ ref }, props)) : import_react8.default.createElement(more_default, props)
  );
});
Page(createPageConfig(EntryWrapper, "pages/more/index"));
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHJheS1qcy9jb21wb25lbnRzLXR5LWNlbGwvbGliL3N0eWxlLmxlc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AcmF5LWpzL2NvbXBvbmVudHMtdHktY2VsbC9saWIvc3R5bGUubGVzcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsICJjc3MtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9wYWdlcy9tb3JlL2luZGV4Lm1vZHVsZS5sZXNzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvcGFnZXMvbW9yZS9pbmRleC5tb2R1bGUubGVzcyIsICJlbnRyeS1maWxlOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9wYWdlcy9tb3JlL2luZGV4LmVudHJ5LmpzIiwgIi4uLy4uLy4uLy4uL3NyYy9wYWdlcy9tb3JlL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9jb21wb25lbnRzLXR5LWNlbGwvbGliL2luZGV4LnR1eWEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYXktanMvY29tcG9uZW50cy10eS1jZWxsL2xpYi9MaXN0LnR1eWEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYXktanMvY29tcG9uZW50cy10eS1jb25maWctcHJvdmlkZXIvbGliL0NvbmZpZy50dXlhLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmF5LWpzL2NvbXBvbmVudHMtdHktY29uZmlnLXByb3ZpZGVyL2xpYi91dGlscy50dXlhLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmF5LWpzL2NvbXBvbmVudHMtdHktY29uZmlnLXByb3ZpZGVyL2xpYi9jb250ZXh0L0NvbmZpZ1Byb3ZpZGVyLnR1eWEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYXktanMvY29tcG9uZW50cy10eS1jb25maWctcHJvdmlkZXIvbGliL2Jhc2UudHV5YS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9jb21wb25lbnRzLXR5LWNvbmZpZy1wcm92aWRlci9saWIvY29udGV4dC9Db25maWdDb250ZXh0LnR1eWEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYXktanMvY29tcG9uZW50cy10eS1jb25maWctcHJvdmlkZXIvbGliL2dldFRoZW1lVHlwZS50dXlhLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmF5LWpzL2NvbXBvbmVudHMtdHktY29uZmlnLXByb3ZpZGVyL2xpYi9jb250ZXh0L3VzZUNvbmZpZy50dXlhLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmF5LWpzL2NvbXBvbmVudHMtdHktY29uZmlnLXByb3ZpZGVyL2xpYi9ob29rcy91c2VDb25maWdTZWxlY3Rvci50dXlhLmpzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmF5LWpzL2NvbXBvbmVudHMtdHktY2VsbC9saWIvTGlzdEl0ZW0udHV5YS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9jb21wb25lbnRzLXR5LWNlbGwvbGliL3Byb3BzLnR1eWEuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByYXktanMvY29tcG9uZW50cy10eS1jZWxsL2xpYi91dGlscy9raXQudHV5YS5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHJheS1qcy9jb21wb25lbnRzLXR5LWNlbGwvbGliL3RoZW1lLnR1eWEuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjpyb290IC5yYXl1aS1jZWxsLXZhci1jb250YWluZXIge1xuICAtLW1haW4tYmctY29sb3I6ICNmZmY7XG4gIC0tbWFpbi10ZXh0LWNvbG9yOiAjMDAwO1xuICAtLW1haW4tc3BsaXQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuXG46cm9vdFt0aGVtZT1cImRhcmtcIl0gLnJheXVpLWNlbGwtdmFyLWNvbnRhaW5lciB7XG4gIC0tbWFpbi1iZy1jb2xvcjogIzIwMjAyMDtcbiAgLS1tYWluLXRleHQtY29sb3I6ICNmZmY7XG4gIC0tbWFpbi1zcGxpdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG59XG5cbi5yYXl1aS1jZWxsLWJhY2tncm91bmQtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcbn1cblxuLnJheXVpLWNlbGwtYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG59XG5cbi5yYXl1aS1jZWxsLXJvdy1jb250YWluZXIge1xuICBtYXJnaW46IDMycnB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJheXVpLWNlbGwtaXRlbS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDMycnB4O1xuICBtaW4taGVpZ2h0OiA5MnJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yYXl1aS1jZWxsLWl0ZW0taG92ZXIge1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLnJheXVpLWNlbGwtaXRlbS1jb250YWluZXItbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDI0cnB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5yYXl1aS1jZWxsLWl0ZW0tY29udGFpbmVyLWxhYmVsLXRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmF5dWktY2VsbC1pdGVtLWNvbnRhaW5lci1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmF5dWktY2VsbC1iZmMtd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yYXl1aS1jZWxsLXRleHQtb3ZlcmZsb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yYXl1aS1jZWxsLXNwbGl0IHtcbiAgYm9yZGVyLXRvcDogLjVweCBzb2xpZCB2YXIoLS1tYWluLXNwbGl0LWNvbG9yKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJycHgpO1xuICBsZWZ0OiAzMnJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJSVWs3T3pzN096dEJRVkZGT3pzN096czdRVUZYU2pzN096dEJRVWxCT3pzN08wRkJTVUU3T3pzN08wRkJTMEU3T3pzN096czdPenM3UVVGVlFUczdPenRCUVVsQk96czdPenM3UVVGTlFUczdPenM3TzBGQlRVRTdPenM3T3pzN08wRkJVVUU3T3pzN1FVRkpRVHM3T3pzN096dEJRVTlCSWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDI1dlpHVmZiVzlrZFd4bGN5OUFjbUY1TFdwekwyTnZiWEJ2Ym1WdWRITXRkSGt0WTJWc2JDOXNhV0l2YzNSNWJHVXViR1Z6Y3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5STZjbTl2ZENCN1hHNGdJQzV5WVhsMWFTMWpaV3hzSUh0Y2JpQWdJQ0FtTFhaaGNpMWpiMjUwWVdsdVpYSWdlMXh1SUNBZ0lDQWdMUzF0WVdsdUxXSm5MV052Ykc5eU9pQWpSa1pHUmtaR095QXZLaURtdFlYb2liTG9nNHptbWE4Z0tpOWNiaUFnSUNBZ0lDMHRiV0ZwYmkxMFpYaDBMV052Ykc5eU9pQWpNREF3TURBd095QXZLaURtdDdIb2liTG1sb2ZsclpjZ0tpOWNiaUFnSUNBZ0lDMHRiV0ZwYmkxemNHeHBkQzFqYjJ4dmNqb2djbWRpWVNnd0xDQXdMQ0F3TENBd0xqRXBPeUF2S2lEbXQ3SG9pYkxtbG9mbHJaY2dLaTljYmlBZ0lDQjlYRzRnSUgxY2JpQWdKbHQwYUdWdFpUMG5aR0Z5YXlkZElIdGNiaUFnSUNBdWNtRjVkV2t0WTJWc2JDQjdYRzRnSUNBZ0lDQW1MWFpoY2kxamIyNTBZV2x1WlhJZ2UxeHVJQ0FnSUNBZ0lDQXRMVzFoYVc0dFltY3RZMjlzYjNJNklDTXlNREl3TWpBN0lDOHFJT2Ezc2VpSnN1aURqT2FacnlBcUwxeHVJQ0FnSUNBZ0lDQXRMVzFoYVc0dGRHVjRkQzFqYjJ4dmNqb2dJMFpHUmtaR1Jqc2dMeW9nNXJXRjZJbXk1cGFINWEyWElDb3ZYRzRnSUNBZ0lDQWdJQzB0YldGcGJpMXpjR3hwZEMxamIyeHZjam9nY21kaVlTZ3lOVFVzSURJMU5Td2dNalUxTENBd0xqRXBPeUF2S2lEbXQ3SG9pYkxtbG9mbHJaY2dLaTljYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1TG5KaGVYVnBMV05sYkd3Z2UxeHVYRzRnSUNZdFltRmphMmR5YjNWdVpDMWpiMnh2Y2lCN1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nZG1GeUtDMHRiV0ZwYmkxaVp5MWpiMnh2Y2lsY2JpQWdmVnh1SUNCY2JpQWdKaTFpYjNKa1pYSWdlMXh1SUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURJMGNuQjRPMXh1SUNCOVhHNGdJRnh1SUNBbUxYSnZkeTFqYjI1MFlXbHVaWElnZTF4dUlDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQnRZWEpuYVc0NklETXljbkI0SURBN1hHNGdJSDFjYmlBZ1hHNGdJQ1l0YVhSbGJTMWpiMjUwWVdsdVpYSWdlMXh1SUNBZ0lIQmhaR1JwYm1jNklEQWdNekp5Y0hnN1hHNGdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnSUNCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUhOd1lXTmxMV0psZEhkbFpXNDdYRzRnSUNBZ2JXbHVMV2hsYVdkb2REb2dPVEp5Y0hnN1hHNGdJQ0FnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2p0Y2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUIyWVhJb0xTMXRZV2x1TFdKbkxXTnZiRzl5S1R0Y2JpQWdJQ0JqYjJ4dmNqb2dkbUZ5S0MwdGJXRnBiaTEwWlhoMExXTnZiRzl5S1R0Y2JpQWdmVnh1WEc0Z0lDWXRhWFJsYlMxb2IzWmxjaUI3WEc0Z0lDQWdiM0JoWTJsMGVUb2dNQzQxTzF4dUlDQjlYRzRnSUZ4dUlDQW1MV2wwWlcwdFkyOXVkR0ZwYm1WeUxXeGhZbVZzSUh0Y2JpQWdJQ0J0WVhKbmFXNHRjbWxuYUhRNklESTBjbkI0TzF4dUlDQWdJR1pzWlhndFozSnZkem9nTVR0Y2JpQWdJQ0IzYVdSMGFEb2dOakFsTzF4dUlDQjlYRzRnSUZ4dUlDQW1MV2wwWlcwdFkyOXVkR0ZwYm1WeUxXeGhZbVZzTFhScGRHeGxJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREUyY0hnN1hHNGdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU8xeHVJQ0I5WEc0Z0lGeHVJQ0FtTFdsMFpXMHRZMjl1ZEdGcGJtVnlMV052Ym5SbGJuUWdlMXh1SUNBZ0lHWnNaWGd0WjNKdmR6b2dNVHRjYmlBZ0lDQjNhV1IwYURvZ05EQWxPMXh1SUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3WEc0Z0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQm1iR1Y0TFdWdVpEdGNiaUFnSUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU8xeHVJQ0I5WEc0Z0lGeHVJQ0FtTFdKbVl5MTNjbUZ3SUh0Y2JpQWdJQ0J2ZG1WeVpteHZkem9nYUdsa1pHVnVPMXh1SUNCOVhHNGdJRnh1SUNBbUxYUmxlSFF0YjNabGNtWnNiM2NnZTF4dUlDQWdJSGRvYVhSbExYTndZV05sT2lCdWIzZHlZWEE3WEc0Z0lDQWdiM1psY21ac2IzYzZJR2hwWkdSbGJqdGNiaUFnSUNCMFpYaDBMVzkyWlhKbWJHOTNPaUJsYkd4cGNITnBjenRjYmlBZ0lDQmthWE53YkdGNU9pQmliRzlqYXp0Y2JpQWdmVnh1SUNCY2JpQWdKaTF6Y0d4cGRDQjdYRzRnSUNBZ1ltOXlaR1Z5TFhSdmNEb2dNQzQxY0hnZ2MyOXNhV1FnZG1GeUtDMHRiV0ZwYmkxemNHeHBkQzFqYjJ4dmNpazdYRzRnSUNBZ2FHVnBaMmgwT2lBd0xqVndlRHRjYmlBZ0lDQjNhV1IwYURvZ1kyRnNZeWd4TURBbElDMGdNekp5Y0hncE8xeHVJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0JzWldaME9pQXpNbkp3ZUR0Y2JpQWdmVnh1ZlZ4dUlsMHNJbTVoYldWeklqcGJYWDA9ICovIiwgInJlcXVpcmUoJy4vc3R5bGUubGVzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1k7XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbnZhciBCVUdHWSA9ICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09PSAnYycgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9PSA0IHx8XG4gICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT09IDIgfHxcbiAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPT0gNCB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICcuJy5zcGxpdCgvKCkoKS8pLmxlbmd0aCA+IDEgfHxcbiAgJycuc3BsaXQoLy4/LykubGVuZ3RoO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQgPSAnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGggPyBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogY2FsbChuYXRpdmVTcGxpdCwgdGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0gOiBuYXRpdmVTcGxpdDtcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBpc051bGxPclVuZGVmaW5lZChzZXBhcmF0b3IpID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHNlcGFyYXRvciwgU1BMSVQpO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyXG4gICAgICAgID8gY2FsbChzcGxpdHRlciwgc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBjYWxsKGludGVybmFsU3BsaXQsIHRvU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAoc3RyaW5nLCBsaW1pdCkge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICAgIGlmICghQlVHR1kpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByeCwgUywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoVU5TVVBQT1JURURfWSA/ICdnJyA6ICd5Jyk7XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoVU5TVVBQT1JURURfWSA/ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJyA6IHJ4LCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBVTlNVUFBPUlRFRF9ZID8gMCA6IHE7XG4gICAgICAgIHZhciB6ID0gcmVnRXhwRXhlYyhzcGxpdHRlciwgVU5TVVBQT1JURURfWSA/IHN0cmluZ1NsaWNlKFMsIHEpIDogUyk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChVTlNVUFBPUlRFRF9ZID8gcSA6IDApKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwdXNoKEEsIHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1c2goQSwgc3RyaW5nU2xpY2UoUywgcCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSwgQlVHR1kgfHwgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQywgVU5TVVBQT1JURURfWSk7XG4iLCAiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmIChhcmcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGFwcGVuZENsYXNzKGNsYXNzZXMsIHBhcnNlVmFsdWUoYXJnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZVZhbHVlIChhcmcpIHtcblx0XHRpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiBhcmc7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBhcmcgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHR9XG5cblx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRyZXR1cm4gYXJnLnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGFwcGVuZENsYXNzKGNsYXNzZXMsIGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBlbmRDbGFzcyAodmFsdWUsIG5ld0NsYXNzKSB7XG5cdFx0aWYgKCFuZXdDbGFzcykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUgKyAnICcgKyBuZXdDbGFzcztcblx0XHR9XG5cdFxuXHRcdHJldHVybiB2YWx1ZSArIG5ld0NsYXNzO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwgIi5jb250YWluZXJfX0hFVnRBYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1CMSk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxpc3RJdGVtX19IRVZ0QWEge1xuICB3aWR0aDogNjg2cnB4O1xuICBoZWlnaHQ6IDEzNnJweDtcbiAgYm9yZGVyLXJhZGl1czogMjRycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjEpXCI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN1FVRlRRU0lzSW5OdmRYSmpaWE1pT2xzaVZYTmxjbk12WjNWdWMyMXZhMlZ5TDBSdlkzVnRaVzUwY3k5bmFYUXZRMjl2YkdsdVowMXBjM1JOWVhSUVlXNWxiQzl6Y21NdmNHRm5aWE12Ylc5eVpTOXBibVJsZUM1dGIyUjFiR1V1YkdWemN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl1WTI5dWRHRnBibVZ5SUh0Y2JpQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2JpQWdabXhsZUMxa2FYSmxZM1JwYjI0NklHTnZiSFZ0Ymp0Y2JpQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanRjYmlBZ2NHOXphWFJwYjI0NklHRmljMjlzZFhSbE8xeHVJQ0IzYVdSMGFEb2dNVEF3SlR0Y2JpQWdhR1ZwWjJoME9pQXhNREFsTzF4dUlDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQjJZWElvTFMxaGNIQXRRakVwTzF4dWZWeHVMbXhwYzNSSmRHVnRJSHRjYmlBZ2QybGtkR2c2SURZNE5uSndlRHRjYmlBZ2FHVnBaMmgwT2lBeE16WnljSGc3WEc0Z0lHSnZjbVJsY2kxeVlXUnBkWE02SURJMGNuQjRPMXh1SUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBbmNtZGlZU2d5TlRVc01qVTFMREkxTlN3d0xqRXBKenRjYmlBZ1lXeHBaMjR0YzJWc1pqb2dZMlZ1ZEdWeU8xeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVmVnh1SWwwc0ltNWhiV1Z6SWpwYlhYMD0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5tb2R1bGUubGVzcycpO1xudmFyIHNfY29udGFpbmVyID0gXCJjb250YWluZXJfX0hFVnRBYVwiO1xudmFyIHNfbGlzdEl0ZW0gPSBcImxpc3RJdGVtX19IRVZ0QWFcIjtcbjtcbmV4cG9ydHNbJ2NvbnRhaW5lciddID0gc19jb250YWluZXI7XG5leHBvcnRzWydsaXN0SXRlbSddID0gc19saXN0SXRlbTs7XG5tb2R1bGUuZXhwb3J0cyA9IHsnY29udGFpbmVyJzpzX2NvbnRhaW5lciwnbGlzdEl0ZW0nOnNfbGlzdEl0ZW19O1xuIiwgIlxuOyh0eXBlb2YgdHkgPT09IHR5cGVvZiB3eCk7IC8qIFx1NUI5QVx1NEU0OVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRiwgXHU5MDdGXHU1MTREXHU4OEFCXHU1MzhCXHU3RjI5XHU2REY3XHU2REM2XHU1MUIyXHU3QTgxICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYWdlSW5zdGFuY2VDb250ZXh0LCBQYWdlSW5zdGFuY2UsIGxpZmVjeWNsZSwgdXNlUGFnZUV2ZW50IH0gZnJvbSAnQHJheS1qcy9yYXknO1xuaW1wb3J0IHsgY3JlYXRlUGFnZUNvbmZpZyB9IGZyb20gJ0ByYXktanMvcnVudGltZSc7XG5pbXBvcnQgRW50cnkgZnJvbSAnLi9pbmRleCc7XG5jb25zdCBpc0NsYXNzVHlwZSA9IChjKSA9PiBjLnByb3RvdHlwZSAmJiB0eXBlb2YgYy5wcm90b3R5cGUucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBFbnRyeVdyYXBwZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0ICRpbnN0YW5jZSA9IG5ldyBQYWdlSW5zdGFuY2UoKVxuICB1c2VQYWdlRXZlbnQoJ29uTG9hZCcsICgpID0+IHtcbiAgICBsaWZlY3ljbGUuYWRkSW5zdGFuY2UoJGluc3RhbmNlKVxuICAgIGxpZmVjeWNsZS5lbWl0KHsgbmFtZTogJ29uTG9hZCcsIHVuaXF1ZUlkOiAkaW5zdGFuY2UudW5pcXVlSWQgfSlcbiAgfSlcbiAgdXNlUGFnZUV2ZW50KCdvblVubG9hZCcsICgpID0+IHtcbiAgICBsaWZlY3ljbGUuZW1pdCh7IG5hbWU6ICdvblVubG9hZCcsIHVuaXF1ZUlkOiAkaW5zdGFuY2UudW5pcXVlSWQgfSlcbiAgICBsaWZlY3ljbGUucmVtb3ZlSW5zdGFuY2UoJGluc3RhbmNlKVxuICB9KVxuICB1c2VQYWdlRXZlbnQoJ29uU2hvdycsICgpID0+IHtcbiAgICBsaWZlY3ljbGUuZW1pdCh7IG5hbWU6ICdvblNob3cnLCB1bmlxdWVJZDogJGluc3RhbmNlLnVuaXF1ZUlkIH0pXG4gIH0pXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIFBhZ2VJbnN0YW5jZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgJGluc3RhbmNlOiAkaW5zdGFuY2UgfSB9LFxuICAgIGlzQ2xhc3NUeXBlKEVudHJ5KSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW50cnksIHsgcmVmOiByZWYgLCAuLi5wcm9wc30pIDogUmVhY3QuY3JlYXRlRWxlbWVudChFbnRyeSwgcHJvcHMpXG4gIClcbn0pXG5cblBhZ2UoY3JlYXRlUGFnZUNvbmZpZyhFbnRyeVdyYXBwZXIsICdwYWdlcy9tb3JlL2luZGV4JykpOyIsICJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIEljb24sIFRleHQsIFNjcm9sbFZpZXcgfSBmcm9tICdAcmF5LWpzL3JheSc7XG5pbXBvcnQgeyB1c2VEZXZpY2UsIHVzZVByb3BzLCB1c2VBY3Rpb25zIH0gZnJvbSAnQHJheS1qcy9wYW5lbC1zZGsnO1xuaW1wb3J0IHsgQWN0aW9uU2hlZXQsIFN3aXRjaCB9IGZyb20gJ0ByYXktanMvc21hcnQtdWknO1xuaW1wb3J0IExpc3QgZnJvbSAnQHJheS1qcy9jb21wb25lbnRzLXR5LWNlbGwnO1xuaW1wb3J0IFR5T3V0ZG9vclV0aWxzIGZyb20gJ0ByYXktanMvdHktb3V0ZG9vci11dGlscyc7XG5pbXBvcnQgU3RyaW5ncyBmcm9tICdAL2kxOG4nO1xuaW1wb3J0IGRwQ29kZXMgZnJvbSAnQC9jb25zdGFudC9kcENvZGVzJztcbmltcG9ydCB7IGlzRHBFeGlzdCB9IGZyb20gJ0AvdXRpbHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5sZXNzJztcblxuY29uc3Qge1xuICBoZWFkbGlnaHRTd2l0Y2gsXG4gIHRhaWxsaWdodFN3aXRjaCxcbiAgc3BlZWRMaW1pdEVudW0sXG4gIGVuZXJneVJlY292ZXJ5TGV2ZWwsXG4gIGFudGlUaGVmU2Vuc2l0aXZpdHksXG4gIGJ1Y2tldExvY2ssXG4gIHRhaWxCb3hMb2NrLFxuICBtb3ZlQWxhcm0sXG4gIHVuaXRTZXQsXG4gIGNydWlzZVN3aXRjaCxcbn0gPSBkcENvZGVzO1xuXG5jb25zdCBNb3JlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZGV2SW5mbyA9IHVzZURldmljZShkZXZpY2UgPT4gZGV2aWNlLmRldkluZm8pO1xuICBjb25zdCBkcFNjaGVtYSA9IHVzZURldmljZShkZXZpY2UgPT4gZGV2aWNlLmRwU2NoZW1hKTtcbiAgY29uc3QgZHBTdGF0ZSA9IHVzZVByb3BzKCk7XG4gIGNvbnN0IGFjdGlvbnMgPSB1c2VBY3Rpb25zKCk7XG4gIGNvbnN0IHsgZGV2SWQgfSA9IGRldkluZm87XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VudW1EYXRhLCBzZXRFbnVtRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0eS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogU3RyaW5ncy5nZXRMYW5nKCdtb3JlJykgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsaXN0RGF0YSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdkZXZpY2VJbmZvJyxcbiAgICAgIG9uY2xpY2s6ICgpID0+IFR5T3V0ZG9vclV0aWxzLmp1bXBTdWJQYWdlLnRvRXF1aXBtZW50KHsgZGV2aWNlSWQ6IGRldklkIH0pLCAvLyBcdThCQkVcdTU5MDdcdTRGRTFcdTYwNkZcdTRFOENcdTdFQTdcdTk4NzVcbiAgICAgIGlzU2hvdzogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ21vcmVMb2NrTWV0aG9kcycsXG4gICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgIHR5LnJvdXRlcih7XG4gICAgICAgICAgdXJsOiBgdHV5YVNtYXJ0Oi8vdHNvZF9hZGRpdGlvbmFsX3VubG9ja19tZXRob2RzP2RldklkPSR7ZGV2SWR9YCwgLy8gXHU2NkY0XHU1OTFBXHU4OUUzXHU5NTAxXHU2NUI5XHU1RjBGIEFQUFx1NTM5Rlx1NzUxRlx1OTg3NVx1OTc2MlxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzIDo+PiAnLCByZXMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZmFpbCA9PiBjb25zb2xlLmxvZygnZmFpbCA6Pj4gJywgZmFpbCksXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGlzU2hvdzogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ25vdGljZScsXG4gICAgICBvbmNsaWNrOiAoKSA9PiBUeU91dGRvb3JVdGlscy5qdW1wU3ViUGFnZS50b01lc3NhZ2VTd2l0Y2goeyBkZXZpY2VJZDogZGV2SWQgfSksIC8vIFx1OTAxQVx1NzdFNVx1NEZFMVx1NjA2Rlx1NEU4Q1x1N0VBN1x1OTg3NVxuICAgICAgaXNTaG93OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnbG9zdE1vZGUnLFxuICAgICAgb25jbGljazogKCkgPT4gVHlPdXRkb29yVXRpbHMuanVtcFN1YlBhZ2UudG9Mb3N0TW9kZSh7IGRldmljZUlkOiBkZXZJZCB9KSwgLy8gXHU0RTIyXHU1OTMxXHU2QTIxXHU1RjBGXHU0RThDXHU3RUE3XHU5ODc1XG4gICAgICBpc1Nob3c6IHRydWUsXG4gICAgfSxcbiAgICAvLyBcdTUxNzZcdTRFRDZcdTVFMzhcdTg5QzFEUFx1OEJCRVx1N0Y2RVx1OTg3OVxuICAgIC4uLltcbiAgICAgIGhlYWRsaWdodFN3aXRjaCxcbiAgICAgIHRhaWxsaWdodFN3aXRjaCxcbiAgICAgIGNydWlzZVN3aXRjaCxcbiAgICAgIHNwZWVkTGltaXRFbnVtLFxuICAgICAgZW5lcmd5UmVjb3ZlcnlMZXZlbCxcbiAgICAgIGFudGlUaGVmU2Vuc2l0aXZpdHksXG4gICAgICBidWNrZXRMb2NrLFxuICAgICAgdGFpbEJveExvY2ssXG4gICAgICBtb3ZlQWxhcm0sXG4gICAgICB1bml0U2V0LFxuICAgIF0ubWFwKGl0ZW0gPT4gKHtcbiAgICAgIGtleTogaXRlbSxcbiAgICAgIHR5cGU6ICdEUCcsXG4gICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVSYW5nZSA9IGRwU2NoZW1hW2l0ZW1dPy5wcm9wZXJ0eT8ucmFuZ2UgfHwgW107XG4gICAgICAgIGNvbnN0IGRwVHlwZSA9IGRwU2NoZW1hW2l0ZW1dPy5wcm9wZXJ0eT8udHlwZTtcbiAgICAgICAgaWYgKGRwVHlwZSA9PT0gJ2VudW0nKSB7XG4gICAgICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gbW9kZVJhbmdlLm1hcChpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBpLFxuICAgICAgICAgICAgICBrZXk6IGl0ZW0sXG4gICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgIGNoZWNrZWQ6IGRwU3RhdGVbaXRlbV0gPT09IGksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldEVudW1EYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNTaG93OiBpc0RwRXhpc3QoaXRlbSwgZHBTY2hlbWEpLFxuICAgIH0pKSxcbiAgXS5maWx0ZXIoaSA9PiBpLmlzU2hvdyk7XG5cbiAgY29uc3QgX3JlbmRlckNvbnRlbnQgPSAoaXRlbTogSUtleSkgPT4ge1xuICAgIGNvbnN0IGRwVHlwZSA9IGRwU2NoZW1hW2l0ZW0ua2V5XT8ucHJvcGVydHk/LnR5cGU7XG4gICAgc3dpdGNoIChkcFR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIHNpemU9XCIyNnB4XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2RwU3RhdGVbaXRlbS5rZXldfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2QgPT4gYWN0aW9uc1tpdGVtLmtleV0uc2V0KGQuZGV0YWlsKX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYXBwLUIxLU40KScgfX0+e2RwU3RhdGVbaXRlbS5rZXldfTwvVGV4dD5cbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJpY29uLXJpZ2h0XCIgY29sb3I9XCJ2YXIoLS1hcHAtQjEtTjQpXCIgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFZpZXcgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxTY3JvbGxWaWV3IHNjcm9sbFk+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzE5cHgnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTlweCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcm93S2V5PXsoXywgaSkgPT4gaX1cbiAgICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cbiAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbTogSUtleSkgPT4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgICBnYXA9XCI1cHhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX1cbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0/LnR5cGUgPT09ICdEUCcgPyBTdHJpbmdzLmdldERwTGFuZyhpdGVtLmtleSkgOiBTdHJpbmdzLmdldExhbmcoaXRlbS5rZXkpfVxuICAgICAgICAgICAgICB0aXRsZVN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYXBwLUIxLU4xKScsIGZvbnRTaXplOiAnMTZweCcsIGZvbnRXZWlnaHQ6IDUwMCB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uY2xpY2t9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgICAge2l0ZW0/LnR5cGUgPT09ICdEUCcgPyAoXG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJDb250ZW50KGl0ZW0pXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiaWNvbi1yaWdodFwiIGNvbG9yPVwidmFyKC0tYXBwLUIxLU40KVwiIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgIDxBY3Rpb25TaGVldFxuICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICBhY3Rpb25zPXtlbnVtRGF0YX1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvdyhmYWxzZSl9XG4gICAgICAgIG9uU2VsZWN0PXtkID0+IHtcbiAgICAgICAgICBhY3Rpb25zW2QuZGV0YWlsLmtleV0uc2V0KGQuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2FuY2VsVGV4dD17U3RyaW5ncy5nZXRMYW5nKCdjYW5jZWwnKX1cbiAgICAgIC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9yZVBhZ2U7XG4iLCAiaW1wb3J0ICcuL3N0eWxlLmxlc3MnO1xuZXhwb3J0IHsgTGlzdCwgZGVmYXVsdCB9IGZyb20gJy4vTGlzdCc7XG5leHBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJy4vTGlzdEl0ZW0nOyIsICJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCwgVmlldyB9IGZyb20gJ0ByYXktanMvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VDb25maWdTZWxlY3RvckZuIH0gZnJvbSAnQHJheS1qcy9jb21wb25lbnRzLXR5LWNvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJy4vTGlzdEl0ZW0nO1xuaW1wb3J0IHsgcHJlZml4IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCB7IGdldEFycmF5LCBqb2luQXJyYXksIG1lcmdlIH0gZnJvbSAnLi91dGlscy9raXQnO1xuXG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgdGV4dCA9IF9yZWYudGV4dDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHRleHQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIExpc3QoX3JlZjIpIHtcbiAgdmFyIF9yZWYyJGlzUm93ID0gX3JlZjIuaXNSb3csXG4gICAgICBpc1JvdyA9IF9yZWYyJGlzUm93ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGlzUm93LFxuICAgICAgZGF0YVNvdXJjZSA9IF9yZWYyLmRhdGFTb3VyY2UsXG4gICAgICByZW5kZXJJdGVtID0gX3JlZjIucmVuZGVySXRlbSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYyLnN0eWxlLFxuICAgICAgcm93S2V5ID0gX3JlZjIucm93S2V5LFxuICAgICAgX3JlZjIkc3BsaXQgPSBfcmVmMi5zcGxpdCxcbiAgICAgIHNwbGl0ID0gX3JlZjIkc3BsaXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMiRzcGxpdCxcbiAgICAgIHNwbGl0U3R5bGUgPSBfcmVmMi5zcGxpdFN0eWxlLFxuICAgICAgX3JlZjIkZW1wdHkgPSBfcmVmMi5lbXB0eSxcbiAgICAgIGVtcHR5ID0gX3JlZjIkZW1wdHkgPT09IHZvaWQgMCA/ICdObyBEYXRhJyA6IF9yZWYyJGVtcHR5O1xuICB2YXIgc2VsZWN0VGhlbWUgPSB1c2VDb25maWdTZWxlY3RvckZuKGRlZmF1bHRUaGVtZSk7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RUaGVtZSgnY2VsbC5iYWNrZ3JvdW5kQ29sb3InKTtcbiAgdmFyIHNwbGl0Q29sb3IgPSBzZWxlY3RUaGVtZSgnY2VsbC5zcGxpdENvbG9yJyk7XG4gIHZhciB0ZXh0Q29sb3IgPSBzZWxlY3RUaGVtZSgnY2VsbC50ZXh0Q29sb3InKTtcbiAgdmFyIGRhdGEgPSBnZXRBcnJheShkYXRhU291cmNlKTtcblxuICB2YXIgZGVmYXVsdFJlbmRlckl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgX2V4dGVuZHMoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHRleHRDb2xvcixcbiAgICAgIGdhcDogaXNSb3cgPyAwIDogJzE2cHgnLFxuICAgICAgc3R5bGU6IC8vIFx1NTk4Mlx1Njc5Q1x1NjYyRnJvd1x1RkYwQ1x1NEY3Rlx1NzUyOFx1NUJCOVx1NTY2OFx1NzY4NFx1ODBDQ1x1NjY2RlxuICAgICAgaXNSb3cgPyB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgfSA6IHt9XG4gICAgfSwgaXRlbSkpO1xuICB9O1xuXG4gIHZhciBjb250ZW50ID0gdHlwZW9mIGVtcHR5ID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5LCB7XG4gICAgdGV4dDogZW1wdHlcbiAgfSkgOiBlbXB0eTsgLy8gXHU1OTgyXHU2NzlDXHU0RjdGXHU3NTI4ZGF0YVNvdXJjZVx1RkYwQ1x1NEY3Rlx1NzUyOHJlbmRlckl0ZW1cdTZFMzJcdTY3RDNcblxuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGl0ZW1zID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItYmZjLXdyYXBcIiksXG4gICAgICAgIGtleTogdHlwZW9mIHJvd0tleSA9PT0gJ2Z1bmN0aW9uJyA/IHJvd0tleShpdGVtLCBpbmRleCkgOiBpdGVtW3Jvd0tleV1cbiAgICAgIH0sIChyZW5kZXJJdGVtIHx8IGRlZmF1bHRSZW5kZXJJdGVtKShpdGVtLCBpbmRleCkpO1xuICAgIH0pO1xuXG4gICAgaWYgKHNwbGl0ICYmIGlzUm93KSB7XG4gICAgICBpdGVtcyA9IGpvaW5BcnJheShpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItc3BsaXRcIiksXG4gICAgICAgICAgc3R5bGU6IG1lcmdlKHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBzcGxpdENvbG9yXG4gICAgICAgICAgfSwgc3BsaXRTdHlsZSksXG4gICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChpdGVtLmtleSwgXCJfc3BsaXRcIilcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGl0ZW1zKTtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGNvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoXCJcIi5jb25jYXQocHJlZml4LCBcIi12YXItY29udGFpbmVyXCIpLCAvLyBcdTU5ODJcdTY3OUNcdTY2MkZyb3dcdUZGMENcdTVCQjlcdTU2NjhcdThCQkVcdTdGNkVcdThGQjlcdTY4NDZcbiAgICBpc1JvdyA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItYm9yZGVyXCIpIDogbnVsbCwgaXNSb3cgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLWJhY2tncm91bmQtY29sb3JcIikgOiBudWxsLCBpc1JvdyA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItcm93LWNvbnRhaW5lclwiKSA6IG51bGwsIGNsYXNzTmFtZSksXG4gICAgc3R5bGU6IG1lcmdlKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaXNSb3cgPyBiYWNrZ3JvdW5kQ29sb3IgOiBudWxsXG4gICAgfSwgc3R5bGUpXG4gIH0sIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBMaXN0Um93KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBpc1JvdzogdHJ1ZVxuICB9KSk7XG59XG5cbkxpc3QuSXRlbSA9IExpc3RJdGVtO1xuTGlzdC5Sb3cgPSBMaXN0Um93O1xuZXhwb3J0IGRlZmF1bHQgTGlzdDsiLCAiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQ29uZmlnQ29udGV4dFByb3ZpZGVyIGZyb20gJy4vY29udGV4dC9Db25maWdQcm92aWRlcic7XG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgZ2V0VGhlbWVUeXBlIH0gZnJvbSAnLi9nZXRUaGVtZVR5cGUnO1xudmFyIGRlZXBNZXJnZSA9IFV0aWxzLmRlZXBNZXJnZTtcblxuLy8gY29uZmlnXHU1NDA4XHU1MTY1XHU1MjMwXHU5RUQ4XHU4QkE0Y29uZmlnXG52YXIgQ29uZmlnID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjb25maWcgPSBwcm9wcy5jb25maWcsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICB2YXIgZmluYWxDb25maWcgPSBkZWVwTWVyZ2UoZGVmYXVsdENvbmZpZywge1xuICAgIHR5cGU6IGdldFRoZW1lVHlwZSgpXG4gIH0sIGNvbmZpZywge1xuICAgIF9fdmFsdWVfXzogY29uZmlnXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29udGV4dFByb3ZpZGVyLCB7XG4gICAgY29uZmlnOiBmaW5hbENvbmZpZ1xuICB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7IiwgImltcG9ydCBfdG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9BcnJheVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwZWF0LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNwbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC52YWx1ZXMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG4vKipcbiAqIEBleGFtcGxlXG4gKiB0b0ZpeGVkKCcxMTEnLCA1KVxuICogLy8gJzAwMTExJ1xuICogdG9GaXhlZCgnMzQ1NjExMScsIDUpXG4gKiAvLyAnNTYxMTEnXG4gKiBAcGFyYW0ge1N0cmluZy9OdW1iZXJ9IHN0ciBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IGlzIG51bWJlciwgdGhlIGxlbmd0aCBvZiB0aGUgcmV0dXJuIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xudmFyIHRvRml4ZWQgPSBmdW5jdGlvbiAoc3RyLCBjb3VudCkge1xuICByZXR1cm4gXCJcIi5jb25jYXQoJzAnLnJlcGVhdChjb3VudCkpLmNvbmNhdChzdHIpLnNsaWNlKC0xICogY291bnQpO1xufTtcbi8qKlxuICogQGV4YW1wbGVcbiAqIHRvRmlsbGVkKCcxMTEnLCA1KVxuICogLy8gJzAwMTExJ1xuICogdG9GaWxsZWQoJzM0NTYxMTEnLCA1KVxuICogLy8gJzM0NTYxMTEnXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIGlzIGEgc3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgaXMgbnVtYmVyLCB0aGUgbGVuZ3RoIG9mIHRoZSByZXR1cm4gc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5cblxudmFyIHRvRmlsbGVkID0gZnVuY3Rpb24gKHN0ciwgY291bnQpIHtcbiAgdmFyIHMgPSBzdHI7XG5cbiAgaWYgKHMubGVuZ3RoIDwgY291bnQpIHtcbiAgICBzID0gJzAnLnJlcGVhdChjb3VudCAtIHMubGVuZ3RoKSArIHM7XG4gIH1cblxuICByZXR1cm4gcztcbn07XG4vKipcbiAqIEBleGFtcGxlXG4gKiBwYXJ0aXRpb24oJzEyMzQ1NjcnLCAzKVxuICogLy8gWycxMjMnLCAnNDU2JywgJzcnXVxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBpcyBhIHN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGNodW5rIGlzIG51bWJlciwgdGhlIGxlbmd0aCBvZiB0aGUgcmV0dXJuIHN0cmluZ1xuICogQHJldHVybnMge0FycmF5fSBhIGFycmF5LCBpdGVtIG9mIGl0IGlzIGEgc3Vic3RyaW5nIHdoaWNoIGxlbmd0aCBpcyB0aGUgYGNodW5rYFxuICovXG5cblxudmFyIHBhcnRpdGlvbiA9IGZ1bmN0aW9uIChzdHIsIGNodW5rKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gY2h1bmspIHtcbiAgICByZXMucHVzaChzdHIuc2xpY2UoaSwgaSArIGNodW5rKSk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcbi8qKlxuICogQGV4YW1wbGVcbiAqIGlzT2JqZWN0KCcxMjM0NTY3JywgMylcbiAqIC8vIFsnMTIzJywgJzQ1NicsICc3J11cbiAqIEBwYXJhbSB7QW55fSBvYmogaXMgYSBhbnl0aGluZ1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cblxuXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufTtcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc0RhdGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcblxudmFyIGlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuXG52YXIgaXNOdW1lcmljYWwgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG52YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciBpc05pbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbn07XG4vKipcbiAqIGxvZGFzaCBnZXQgcG9seWZpbGxcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2Rma2F5ZS81OTI2M2I1MWNmMWUwYjYzMzE4MWM1ZjQ0YWUyMDY2YVxuICovXG5cblxudmFyIGdldCA9IGZ1bmN0aW9uIChvYmplY3QsIHBhdGhTdHJpbmcsIGRlZmF1bHRWYWx1ZSkge1xuICAvLyBDb2VyY2UgcGF0aFN0cmluZyB0byBhIHN0cmluZyAoZXZlbiBpdCB0dXJucyBpbnRvIFwiW29iamVjdCBPYmplY3RdXCIpLlxuICB2YXIgcGFydHMgPSBcIlwiLmNvbmNhdChwYXRoU3RyaW5nKS5zcGxpdCgnLicpO1xuICB2YXIgbGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuICB2YXIgaSA9IDA7IC8vIEluIGNhc2Ugb2JqZWN0IGlzbid0IGEgcmVhbCBvYmplY3QsIHNldCBpdCB0byB1bmRlZmluZWQuXG5cbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09PSBPYmplY3Qob2JqZWN0KSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcblxuICB3aGlsZSAodmFsdWUgIT0gbnVsbCAmJiBpIDwgbGVuZ3RoKSB7XG4gICAgdmFsdWUgPSB2YWx1ZVtwYXJ0c1tpKytdXTtcbiAgfVxuICAvKipcbiAgICogbG9kYXNoLmdldCgpIHJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlIGlmXG4gICAqIDEuIGl0ZXJhdGlvbiBoYXBwZW5lZCAoaSA+IDApXG4gICAqIDIuIGl0ZXJhdGlvbiBjb21wbGV0ZWQgKGkgPT09IGxlbmd0aClcbiAgICogMy4gdGhlIHZhbHVlIGF0IHRoZSBwYXRoIGlzIGZvdW5kIGluIHRoZSBkYXRhIHN0cnVjdHVyZSAobm90IHVuZGVmaW5lZCkuIE5vdGUgdGhhdCBpZiB0aGUgcGF0aCBpcyBmb3VuZCBidXQgdGhlXG4gICAqICAgIHZhbHVlIGlzIG51bGwsIHRoZW4gbnVsbCBpcyByZXR1cm5lZC5cbiAgICogSWYgYW55IG9mIHRob3NlIGNoZWNrcyBmYWlscywgcmV0dXJuIHRoZSBkZWZhdWx0VmFsdWUgcGFyYW0sIGlmIHByb3ZpZGVkLlxuICAgKi9cblxuXG4gIHJldHVybiBpICYmIGkgPT09IGxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20veW91LWRvbnQtbmVlZC9Zb3UtRG9udC1OZWVkLUxvZGFzaC1VbmRlcnNjb3JlI19waWNrXG4gKi9cblxuXG52YXIgcGljayA9IGZ1bmN0aW9uIChvYmplY3QsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvYmpba2V5XSA9IG9iamVjdFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBvbWl0ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5cykge1xuICB2YXIgc2hhbGxvd0NvcHkgPSBfb2JqZWN0U3ByZWFkKHt9LCBvYmplY3QpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlbGV0ZSBzaGFsbG93Q29weVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHNoYWxsb3dDb3B5O1xufTtcblxudmFyIGNodW5rID0gZnVuY3Rpb24gKGFycikge1xuICB2YXIgY2h1bmtTaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICB2YXIgY2FjaGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXG4gIHZhciB0bXAgPSBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKTtcblxuICBpZiAoY2h1bmtTaXplIDw9IDApIHJldHVybiBjYWNoZTtcblxuICB3aGlsZSAodG1wLmxlbmd0aCkge1xuICAgIGNhY2hlLnB1c2godG1wLnNwbGljZSgwLCBjaHVua1NpemUpKTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZTtcbn07XG5cbnZhciBjb21wYXJlVmVyc2lvbiA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcbiAgaWYgKHR5cGVvZiB2MSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB2MiAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcbiAgdmFyIG5ld1YxID0gdjEuc3BsaXQoJy4nKTtcbiAgdmFyIG5ld1YyID0gdjIuc3BsaXQoJy4nKTtcbiAgdmFyIGsgPSBNYXRoLm1pbihuZXdWMS5sZW5ndGgsIG5ld1YyLmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrOyArK2kpIHtcbiAgICB2YXIgcmVzMSA9IHBhcnNlSW50KG5ld1YxW2ldLCAxMCk7XG4gICAgdmFyIHJlczIgPSBwYXJzZUludChuZXdWMltpXSwgMTApO1xuICAgIGlmIChyZXMxID4gcmVzMikgcmV0dXJuIDE7XG4gICAgaWYgKHJlczEgPCByZXMyKSByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4gdjEubGVuZ3RoID09PSB2Mi5sZW5ndGggPyAwIDogdjEubGVuZ3RoIDwgdjIubGVuZ3RoID8gLTEgOiAxO1xufTtcblxuZXhwb3J0IHZhciBkZWVwTWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2VzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzb3VyY2VzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9IC8vIG1ha2luZyBzdXJlIHRvIG5vdCBjaGFuZ2UgdGFyZ2V0IChpbW11dGFibGUpXG5cblxuICB2YXIgb3V0cHV0ID0gX29iamVjdFNwcmVhZCh7fSwgdGFyZ2V0KTtcblxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pICYmIGlzT2JqZWN0KG91dHB1dFtrZXldKSkge1xuICAgICAgICAgIGlmICghb3V0cHV0W2tleV0pIHtcbiAgICAgICAgICAgIG91dHB1dFtrZXldID0gX29iamVjdFNwcmVhZCh7fSwgc291cmNlW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXRba2V5XSA9IGRlZXBNZXJnZShvdXRwdXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRwdXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufTtcbi8qKlxuICogQGRlc2MgXHU4OUUzXHU2NzkwXHU0RTBBXHU0RTBCXHU1REU2XHU1M0YzXHU1MDNDXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIC0gXHU0RTBBXHU1M0YzXHU0RTBCXHU1REU2XHU1MDNDXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gXHU2ODM3XHU1RjBGa2V5XHVGRjBDXHU1OTgybWFyZ2luXHUzMDAxcGFkZGluZ1x1N0I0OVxuICovXG5cbmV4cG9ydCB2YXIgcGFyc2VUb1N0eWxlID0gZnVuY3Rpb24gKHZhbHVlcywga2V5KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmICghdmFsdWVzIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgX3ZhbHVlcyA9IF9zbGljZWRUb0FycmF5KHZhbHVlcywgNCksXG4gICAgICB0b3AgPSBfdmFsdWVzWzBdLFxuICAgICAgcmlnaHQgPSBfdmFsdWVzWzFdLFxuICAgICAgYm90dG9tID0gX3ZhbHVlc1syXSxcbiAgICAgIGxlZnQgPSBfdmFsdWVzWzNdO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCBcIlwiLmNvbmNhdChrZXksIFwiVG9wXCIpLCB0b3ApLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgXCJcIi5jb25jYXQoa2V5LCBcIlJpZ2h0XCIpLCByaWdodCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCBcIlwiLmNvbmNhdChrZXksIFwiQm90dG9tXCIpLCBib3R0b20pLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgXCJcIi5jb25jYXQoa2V5LCBcIkxlZnRcIiksIGxlZnQpLCBfcmVmO1xufTtcbi8qKlxuICogQGRlc2MgXHU0RUNFIGNvbmZpZyBcdTRFMkRcdTUzRDZcdTk3MDBcdTg5ODFcdTc2ODQgYGNvbmZpZ2AgXHU1MDNDXHVGRjBDXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gcHJvcHNcdUZGMENcdTVGQzVcdTk4N0JcdTUzMDVcdTU0MkJjb25maWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBjb25maWcga2V5XG4gKiBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gZGVmYXVsdFZhbHVlIC0gXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1MDNDXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBcdTRGMThcdTUxNDhcdTdFQTc6IChcdTRFRTVTbGlkZXJcdTRFM0FcdTRGOEIpXG4gKiBnZXRDb25maWcocHJvcHMsICdzbGlkZXIudGh1bWJUaW50Q29sb3InLCAnI2ZmZicpO1xuICogXG4gKiBwcm9wcy50aHVtYlRpbnRDb2xvciAtPlxuICogcHJvcHMuY29uZmlnLnNsaWRlci50aHVtYlRpbnRDb2xvciAtPlxuICogcHJvcHMuY29uZmlnLnNsaWRlcltwcm9wcy5jb25maWcuc2xpZGVyLnR5cGVdLnRodW1iVGludENvbG9yIC0+XG4gKiBwcm9wcy5jb25maWcuc2xpZGVyW3Byb3BzLmNvbmZpZy50eXBlXS50aHVtYlRpbnRDb2xvclxuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogIGNvbnN0IFN0eWxlZFZpZXcgPSBzdHlsZWQoVmlldylgXG4gKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGdldENvbmZpZyhwcm9wcywgJ3NsaWRlci50aHVtYlRpbnRDb2xvcicsIGRlZmF1bHRDb25maWcuc2xpZGVyLmxpZ2h0LnRodW1iVGludENvbG9yKX07XG4gKiBgO1xuICogYGBgXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gKiAgICB0eXBlOiAnbGlnaHQnLFxuICogICAgc2xpZGVyOiB7XG4gKiAgICAgICB0eXBlOiAnZGFyaycsXG4gKiAgICAgICBsaWdodDoge1xuICogICAgICAgICB0aHVtYlRpbnRDb2xvcjogJyNmZmYnLFxuICogICAgICAgfSxcbiAqICAgICAgIGRhcms6IHtcbiAqICAgICAgICAgdGh1bWJUaW50Q29sb3I6ICcjMzMzJyxcbiAqICAgICAgICAgLy8gdGh1bWJUaW50Q29sb3I6IHByb3BzID0+IHByb3BzLmRpc2FibGVkID8gJyM5OTknIDogJyNmZmYnLFxuICogICAgICAgfVxuICogICAgfVxuICogIH1cbiAqIGBgYFxuICovXG5cbmV4cG9ydCB2YXIgZ2V0Q29uZmlnID0gZnVuY3Rpb24gKHByb3BzLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgX2tleSRzcGxpdCA9IGtleS5zcGxpdCgnLicpLFxuICAgICAgX2tleSRzcGxpdDIgPSBfdG9BcnJheShfa2V5JHNwbGl0KSxcbiAgICAgIG5hbWVzcGFjZSA9IF9rZXkkc3BsaXQyWzBdLFxuICAgICAgcGF0aCA9IF9rZXkkc3BsaXQyLnNsaWNlKDEpO1xuXG4gIHZhciBjb25maWdCYXNpY1BhdGggPSBwYXRoLmpvaW4oJy4nKTtcbiAgdmFyIGNvbXBvbmVudHNUeXBlID0gZ2V0KHByb3BzLmNvbmZpZywgXCJcIi5jb25jYXQobmFtZXNwYWNlLCBcIi50eXBlXCIpKSB8fCBnZXQocHJvcHMuY29uZmlnLCAndHlwZScsICdsaWdodCcpO1xuICB2YXIgY29uZmlnVHlwZSA9IGNvbXBvbmVudHNUeXBlID09PSAnYmFzaWMnID8gJ2Jhc2ljJyA6IGNvbXBvbmVudHNUeXBlID09PSAnZGFyaycgPyAnZGFyaycgOiAnbGlnaHQnO1xuICB2YXIgY29uZmlnVmFsdWU7XG4gIHZhciBjb25maWdUeXBlUGF0aDtcblxuICBpZiAoY29uZmlnVHlwZSkge1xuICAgIGNvbmZpZ1R5cGVQYXRoID0gW25hbWVzcGFjZSwgY29uZmlnVHlwZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXRoKSkuam9pbignLicpO1xuICB9XG5cbiAgaWYgKCFpc05pbChnZXQocHJvcHMsIGNvbmZpZ0Jhc2ljUGF0aCkpKSB7XG4gICAgY29uZmlnVmFsdWUgPSBnZXQocHJvcHMsIGNvbmZpZ0Jhc2ljUGF0aCk7XG4gIH0gZWxzZSBpZiAoIWlzTmlsKGdldChwcm9wcy5jb25maWcsIGtleSkpKSB7XG4gICAgY29uZmlnVmFsdWUgPSBnZXQocHJvcHMuY29uZmlnLCBrZXkpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZ1ZhbHVlID0gZ2V0KHByb3BzLmNvbmZpZywgY29uZmlnVHlwZVBhdGgsIGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNvbmZpZ1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uZmlnVmFsdWUgPSBjb25maWdWYWx1ZShwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnVmFsdWU7XG59O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuZXhwb3J0IHZhciBjcmVhdGVHZXRDb25maWcgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgY29uZmlnS2V5ID0gXCJcIi5jb25jYXQobmFtZXNwYWNlLCBcIi5cIikuY29uY2F0KGtleSk7XG4gICAgcmV0dXJuIGdldENvbmZpZyh7XG4gICAgICBjb25maWc6IHt9XG4gICAgfSwgY29uZmlnS2V5LCBkZWZhdWx0VmFsdWUpO1xuICB9O1xufTtcbmV4cG9ydCB2YXIgZ2V0VmFsdWVGb3JtT2JqZWN0ID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgb2JqZWN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgdmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcbiAgdmFyIGluZGV4ID0ga2V5cy5pbmRleE9mKG5hbWVzcGFjZSk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHJldHVybiB2YWx1ZXNbaW5kZXhdO1xuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgdmFyIGdldFByb3BzRnJvbVN0eWxlID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgc3R5bGUpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAoc3R5bGUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICByZXN1bHQgPSBnZXRWYWx1ZUZvcm1PYmplY3QobmFtZXNwYWNlLCBzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHN0eWxlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICByZXN1bHQgPSBnZXRWYWx1ZUZvcm1PYmplY3QobmFtZXNwYWNlLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgZ2V0QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpID8gYXJyYXkgOiBbXTtcbn07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgb2JqcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIG9ianNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGZvciAodmFyIF9pID0gMCwgX29ianMgPSBvYmpzOyBfaSA8IF9vYmpzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBfb2JqID0gX29ianNbX2ldO1xuICAgIHJlc3VsdCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdWx0KSwgX29iaiB8fCB7fSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHsgZ2V0LCB0b0ZpeGVkLCB0b0ZpbGxlZCwgcGFydGl0aW9uLCBpc09iamVjdCwgaXNBcnJheSwgaXNEYXRlLCBpc1JlZ0V4cCwgaXNCb29sZWFuLCBpc051bWVyaWNhbCwgaXNVbmRlZmluZWQsIGlzTmlsLCBwaWNrLCBvbWl0LCBjaHVuaywgY29tcGFyZVZlcnNpb24sIGdldEFycmF5LCBtZXJnZSB9OyIsICIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuLi9iYXNlJztcbmltcG9ydCBDb25maWdDb250ZXh0IGZyb20gJy4vQ29uZmlnQ29udGV4dCc7XG5cbnZhciBDb25maWdQcm92aWRlciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgX3Byb3BzJGNvbmZpZyA9IHByb3BzLmNvbmZpZyxcbiAgICAgIGNvbmZpZyA9IF9wcm9wcyRjb25maWcgPT09IHZvaWQgMCA/IGRlZmF1bHRDb25maWcgOiBfcHJvcHMkY29uZmlnLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29uZmlnXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Byb3ZpZGVyOyIsICJ2YXIgdGhlbWUgPSB7XG4gIE0xOiAnIzM2NzhFMycsXG4gIC8vIFx1NzUyOFx1NEU4RVx1NjMwOVx1OTRBRVx1MzAwMVx1NTRDMVx1NzI0Q1x1OTczMlx1NTFGQVxuICBNMjogJyNGMDRDNEMnLFxuICAvLyBcdTc1MjhcdTRFOEVcdTVGM0FcdThCNjZcdTU0NEFcdTMwMDFcdTYzRDBcdTc5M0FcdTRGRTFcdTYwNkZcbiAgTTM6ICcjMkREQTg2JyxcbiAgLy8gXHU3NTI4XHU0RThFXHU2MjEwXHU1MjlGXHUzMDAxXHU1RjAwXHU1MTczXHUzMDAxXHU2M0E4XHU4MzUwXHU3QjQ5XG4gIE00OiAnIzE5ODlGQScsXG4gIC8vIFx1NzUyOFx1NEU4RVx1NkI2M1x1NTQxMVx1NUYxNVx1NUJGQ1x1MzAwMVx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1MzAwMVx1OTRGRVx1NjNBNVx1N0I0OVxuICBNNTogJyNGRkEwMDAnLFxuICAvLyBcdTc1MjhcdTRFOEVcdThGN0JcdTVFQTZcdThCNjZcdTU0NEFcdTMwMDFcdTYzRDBcdTc5M0FcdTRGRTFcdTYwNkZcbiAgbGlnaHQ6IHtcbiAgICBOMTogJyMwMDAwMDAnLFxuICAgIC8vIFx1NjgwN1x1OTg5OFxuICAgIE4yOiAncmdiYSgwLDAsMCwwLjcpJyxcbiAgICAvLyBcdTUyNkZcdTY4MDdcdTk4OThcbiAgICBOMzogJ3JnYmEoMCwwLDAsMC41KScsXG4gICAgLy8gXHU4Rjg1XHU1MkE5XHUzMDAxXHU4QkY0XHU2NjBFXG4gICAgTjQ6ICdyZ2JhKDAsMCwwLDAuNCknLFxuICAgIC8vIERpc2FibGVcdTMwMDFcdTYzRDBcdTc5M0FcdTY1ODdcdTVCNTdcdTdCNDlcbiAgICBONTogJ3JnYmEoMCwwLDAsMC4zKScsXG4gICAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHUzMDAxXHU1MjlGXHU4MEZEaWNvblxuICAgIE42OiAncmdiYSgwLDAsMCwwLjIpJyxcbiAgICAvLyBcdTUzRjNcdTRGQTdcdTdCQURcdTU5MzRcdTMwMDFcdTVGMzlcdTdBOTdcdTUxNzNcdTk1RURcdTdCNDlcbiAgICBONzogJ3JnYmEoMCwwLDAsMC4xKScsXG4gICAgLy8gXHU1MjA2XHU1MjcyXHU3RUJGXG4gICAgTjg6ICdyZ2JhKDAsMCwwLDAuMDUpJyxcbiAgICAvLyBcdTg4NjVcdTUxNDVcbiAgICBCMTogJyNGNkY3RkInLFxuICAgIC8vIFx1ODBDQ1x1NjY2Rlx1ODI3MlxuICAgIEIyOiAnI0ZGRkZGRicsXG4gICAgLy8gXHU5ODc2XHU5MEU4XHU1QkZDXHU4MjJBXHU2ODBGXG4gICAgQjM6ICcjRkZGRkZGJyxcbiAgICAvLyBcdTUzNjFcdTcyNDdcbiAgICBCNDogJyNGRkZGRkYnLFxuICAgIC8vIFx1NUYzOVx1N0E5N1xuICAgIEI1OiAnI0ZGRkZGRicsXG4gICAgLy8gXHU1RTk1XHU5MEU4XHU1QkZDXHU4MjJBXHU2ODBGXG4gICAgQjY6ICcjRkZGRkZGJyAvLyBcdTUyMTdcdTg4NjhcblxuICB9LFxuICBkYXJrOiB7XG4gICAgTjE6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgICBOMjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsXG4gICAgTjM6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgIE40OiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxcbiAgICBONTogJ3JnYmEoMjU1LDI1NSwyNTUsMC4zKScsXG4gICAgTjY6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknLFxuICAgIE43OiAncmdiYSgyNTUsMjU1LDI1NSwwLjEpJyxcbiAgICBOODogJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNSknLFxuICAgIEIxOiAnI0ZGRkZGRicsXG4gICAgQjI6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICBCMzogJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgIEI0OiAncmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgQjU6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICBCNjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMiknXG4gIH1cbn07XG4vKipcbiAqIFx1NTE2OFx1NUM0MFx1OTg5Q1x1ODI3Mlx1NTNEOFx1OTFDRlxuICovXG5cbnZhciBnbG9iYWxWYXJpYWJsZSA9IHtcbiAgYnJhbmQ6ICcjRkY0ODAwJyxcbiAgLy8gXHU1NEMxXHU3MjRDXHU4MjcyXG4gIGJhY2tncm91bmQ6ICcjZjhmOGY4JyxcbiAgLy8gXHU4MENDXHU2NjZGXHU4MjcyXG4gIGZvbnRTaXplQmFzZTogMSxcbiAgLy8gXHU1QjU3XHU0RjUzXHU1N0ZBXHU1MUM2XHU2QkQ0XHU0RjhCXG4gIGRpdmlkZXJDb2xvcjogJyNlNWU1ZTUnLFxuICAvLyBcdTUyMDZcdTk2OTRcdTdFQkZcdTk4OUNcdTgyNzJcbiAgc3VjY2VzczogJyMwMEM4MDAnLFxuICB3YXJuaW5nOiAnI0ZBQUUxNycsXG4gIGVycm9yOiAnI0Y0MTgyQycsXG4gIGZvbnRGYW1pbHk6IHVuZGVmaW5lZCxcbiAgLy8gaW5mbywgLy8gXHU0RkUxXHU2MDZGXHU4MjcyXG4gIC8vIGRpc2FibGVkLCAvLyBcdTc5ODFcdTc1MjhcdTkwMEZcdTY2MEVcdTVFQTZcbiAgbWFzazogJ3JnYmEoMCwgMCwgMCwgMC43KScsXG4gIC8vIFx1OTA2RVx1N0Y2OVx1OTg5Q1x1ODI3MlxuICB0ZXh0OiB7XG4gICAgbGlnaHQ6ICcjMzMzJyxcbiAgICBkYXJrOiAnI2ZmZidcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2xpZ2h0JyxcbiAgZ2xvYmFsOiBnbG9iYWxWYXJpYWJsZSxcbiAgdGhlbWU6IHRoZW1lXG59OyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxudmFyIENvbmZpZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgQ29uZmlnQ29udGV4dDsiLCAidmFyIHJheUVudiA9IHtcbiAgaXNBbmRyb2lkOiBmYWxzZSxcbiAgaXNJT1M6IGZhbHNlLFxuICBpc01pbmlQcm9ncmFtOiB0cnVlLFxuICBpc05hdGl2ZTogZmFsc2UsXG4gIGlzVHV5YTogdHJ1ZSxcbiAgaXNXZWI6IGZhbHNlLFxuICBpc1dlY2hhdDogZmFsc2Vcbn07XG5pbXBvcnQgKiBhcyByYXlBcGkgZnJvbSAnQHJheS1qcy9hcGknO1xuZXhwb3J0IHZhciBnZXRUaGVtZVR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHJheUVudi5pc1R1eWEpIHtcbiAgICAgIHJldHVybiByYXlBcGkuZ2V0U3lzdGVtSW5mb1N5bmMoKS50aGVtZTtcbiAgICB9XG5cbiAgICBpZiAocmF5RW52LmlzV2ViKSB7XG4gICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RoZW1lJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiAnbGlnaHQnO1xufTsiLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25maWdDb250ZXh0IGZyb20gJy4vQ29uZmlnQ29udGV4dCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlQ29uZmlnKCkge1xuICB2YXIgY29uZmlnID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgcmV0dXJuIGNvbmZpZztcbn0iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vY29udGV4dC91c2VDb25maWcnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0VGhlbWVUeXBlIH0gZnJvbSAnLi4vZ2V0VGhlbWVUeXBlJztcbmltcG9ydCBiYXNlRGVmYXVsdENvbmZpZyBmcm9tICcuLi9iYXNlJztcbnZhciBkZWVwTWVyZ2UgPSBVdGlscy5kZWVwTWVyZ2U7XG5leHBvcnQgdmFyIHVzZUNvbmZpZ1NlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBzZWxlY3RGbiA9IHVzZUNvbmZpZ1NlbGVjdG9yRm4oZGVmYXVsdENvbmZpZyk7XG4gIHJldHVybiBzZWxlY3RGbihzZWxlY3Rvcik7XG59O1xuLyoqXG4gKiBcdTgzQjdcdTUzRDZjb25maWdcbiAqIFx1NEYxOFx1NTE0OFx1N0VBN1x1RkYxQWNvbnRleHRcdTRGMjBcdTUxNjVcdTkxNERcdTdGNkUgPiBcdTdFQzRcdTRFRjZcdTUxODVcdTlFRDhcdThCQTRcdTkxNERcdTdGNkUgPiBcdTUxNjhcdTVDNDBcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcbiAqL1xuXG5leHBvcnQgdmFyIHVzZUNvbmZpZ1NlbGVjdG9yRm4gPSBmdW5jdGlvbiAoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29uZmlnID0gdXNlQ29uZmlnKCk7IC8vIGNvbnRleHRcblxuICByZXR1cm4gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgcmV0dXJuIGdldENvbmZpZyh7XG4gICAgICAgIGNvbmZpZzogZGVlcE1lcmdlKGJhc2VEZWZhdWx0Q29uZmlnLCBkZWZhdWx0Q29uZmlnLCB7XG4gICAgICAgICAgdHlwZTogZ2V0VGhlbWVUeXBlKClcbiAgICAgICAgfSwgY29uZmlnID09PSBudWxsIHx8IGNvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uZmlnLl9fdmFsdWVfXylcbiAgICAgIH0sIHNlbGVjdG9yKTtcbiAgICB9XG4gIH07XG59OyIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQsIFZpZXcgfSBmcm9tICdAcmF5LWpzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHJlZml4IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vdXRpbHMva2l0JztcblxudmFyIFRleHRXcmFwID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItdGV4dC1vdmVyZmxvd1wiKVxuICB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgdmFyIExpc3RJdGVtID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYyLnRpdGxlLFxuICAgICAgY29udGVudCA9IF9yZWYyLmNvbnRlbnQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYyLnN0eWxlLFxuICAgICAgX3JlZjIkZ2FwID0gX3JlZjIuZ2FwLFxuICAgICAgZ2FwID0gX3JlZjIkZ2FwID09PSB2b2lkIDAgPyAwIDogX3JlZjIkZ2FwLFxuICAgICAgdGl0bGVTdHlsZSA9IF9yZWYyLnRpdGxlU3R5bGUsXG4gICAgICBjb250ZW50U3R5bGUgPSBfcmVmMi5jb250ZW50U3R5bGUsXG4gICAgICBvbkNsaWNrID0gX3JlZjIub25DbGljayxcbiAgICAgIG9uQ29udGVudENsaWNrID0gX3JlZjIub25Db250ZW50Q2xpY2ssXG4gICAgICBfcmVmMiRsYWJlbENvbCA9IF9yZWYyLmxhYmVsQ29sLFxuICAgICAgbGFiZWxDb2wgPSBfcmVmMiRsYWJlbENvbCA9PT0gdm9pZCAwID8gNjAgOiBfcmVmMiRsYWJlbENvbCxcbiAgICAgIF9yZWYyJGNvbnRlbnRDb2wgPSBfcmVmMi5jb250ZW50Q29sLFxuICAgICAgY29udGVudENvbCA9IF9yZWYyJGNvbnRlbnRDb2wgPT09IHZvaWQgMCA/IDQwIDogX3JlZjIkY29udGVudENvbCxcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9yZWYyLmJhY2tncm91bmRDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9yZWYyLnRleHRDb2xvcjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoXCJcIi5jb25jYXQocHJlZml4LCBcIi12YXItY29udGFpbmVyXCIpLCBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLWl0ZW0tY29udGFpbmVyXCIpLCBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLWJhY2tncm91bmQtY29sb3JcIiksIGNsYXNzTmFtZSksXG4gICAgaG92ZXJDbGFzc05hbWU6IG9uQ2xpY2sgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLWl0ZW0taG92ZXJcIikgOiBudWxsLFxuICAgIHN0eWxlOiBtZXJnZSh7XG4gICAgICBtYXJnaW46IFwiXCIuY29uY2F0KGdhcCwgXCIgMFwiKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgY29sb3I6IHRleHRDb2xvclxuICAgIH0sIHN0eWxlKSAvLyBAdHMtaWdub3JlXG4gICAgLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1pdGVtLWNvbnRhaW5lci1sYWJlbFwiKSxcbiAgICBzdHlsZToge1xuICAgICAgd2lkdGg6IFwiXCIuY29uY2F0KGxhYmVsQ29sLCBcIiVcIilcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZpZXcsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItaXRlbS1jb250YWluZXItbGFiZWwtdGl0bGVcIiksXG4gICAgc3R5bGU6IHRpdGxlU3R5bGVcbiAgfSwgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRleHRXcmFwLCBudWxsLCB0aXRsZSkgOiB0aXRsZSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3LCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLWl0ZW0tY29udGFpbmVyLWNvbnRlbnRcIiksXG4gICAgc3R5bGU6IG1lcmdlKHtcbiAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdChjb250ZW50Q29sLCBcIiVcIilcbiAgICB9LCBjb250ZW50U3R5bGUpIC8vIEB0cy1pZ25vcmVcbiAgICAsXG4gICAgb25DbGljazogb25Db250ZW50Q2xpY2tcbiAgfSwgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFdyYXAsIG51bGwsIGNvbnRlbnQpIDogY29udGVudCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtOyIsICJleHBvcnQgdmFyIHByZWZpeCA9ICdyYXl1aS1jZWxsJzsiLCAiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5leHBvcnQgdmFyIGdldEFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KSA/IGFycmF5IDogW107XG59O1xuZXhwb3J0IHZhciBtZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvYmpzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG9ianNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDAsIF9vYmpzID0gb2JqczsgX2kgPCBfb2Jqcy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgb2JqID0gX29ianNbX2ldO1xuICAgIHJlc3VsdCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdWx0KSwgb2JqIHx8IHt9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IHZhciBqb2luQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIHNwbGl0KSB7XG4gIHJldHVybiBnZXRBcnJheShhcnJheSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1ciwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPiAwID8gYWNjLmNvbmNhdChzcGxpdChjdXIsIGluZGV4KSwgY3VyKSA6IGFjYy5jb25jYXQoY3VyKTtcbiAgfSwgW10pO1xufTsiLCAiaW1wb3J0IHsgZ2V0VGhlbWVUeXBlIH0gZnJvbSAnQHJheS1qcy9jb21wb25lbnRzLXR5LWNvbmZpZy1wcm92aWRlci9saWIvZ2V0VGhlbWVUeXBlJztcbnZhciBjZWxsID0ge1xuICBsaWdodDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIHRleHRDb2xvcjogJyMwMDAwMDAnLFxuICAgIHNwbGl0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMSknXG4gIH0sXG4gIGRhcms6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyMDIwJyxcbiAgICB0ZXh0Q29sb3I6ICcjRkZGRkZGJyxcbiAgICBzcGxpdENvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJ1xuICB9XG59O1xuZXhwb3J0IHZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIHR5cGU6IGdldFRoZW1lVHlwZSgpLFxuICBjZWxsOiBjZWxsXG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsaUJBQUE7QUFBQTtBQUFBO0FBR0EsV0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNIbEI7QUFBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPO0FBQ1gsUUFBSSxjQUFjO0FBQ2xCLFFBQUksZ0NBQWdDO0FBQ3BDLFFBQUksV0FBVztBQUNmLFFBQUksb0JBQW9CO0FBQ3hCLFFBQUkseUJBQXlCO0FBQzdCLFFBQUkscUJBQXFCO0FBQ3pCLFFBQUkscUJBQXFCO0FBQ3pCLFFBQUksV0FBVztBQUNmLFFBQUksV0FBVztBQUNmLFFBQUksWUFBWTtBQUNoQixRQUFJLGFBQWE7QUFDakIsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxRQUFRO0FBRVosUUFB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QUUsT0FBYyxNQUFNLElBQUksY0FBQUEsUUFBTSxjQUFjLGNBQU8sS0FBSztBQUFBLEVBQzVHO0FBQ0YsQ0FBQztBQUVELEtBQUssaUJBQWlCLGNBQWMsa0JBQWtCLENBQUM7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfc3R5bGUiLCAicmVxdWlyZV9pbmRleF9tb2R1bGUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfY2xhc3NuYW1lcyIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbml0X2xpYiIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiZGVlcE1lcmdlIiwgImRlZXBNZXJnZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2VzX2FycmF5X3JlZHVjZSIsICJpbXBvcnRfZXNfb2JqZWN0X3RvX3N0cmluZyIsICJpbXBvcnRfZXNfYXJyYXlfY29uY2F0IiwgIlJlYWN0IiwgImNsYXNzbmFtZXMiLCAiUmVhY3QiLCAiY2xhc3NuYW1lcyIsICJSZWFjdCIsICJzdHlsZXMiLCAiUmVhY3QiXQp9Cg==
