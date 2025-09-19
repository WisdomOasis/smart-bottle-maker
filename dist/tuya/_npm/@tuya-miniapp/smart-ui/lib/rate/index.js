import {
  require_CheckmarkCircleVoid
} from "/chunk-ULNRVWDU.js";
import {
  require_CheckmarkCircle
} from "/chunk-7XYCPNDH.js";
import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import {
  require_version
} from "/chunk-SOVNIPSZ.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
import "/chunk-UXQMYNQX.js";
import {
  init_overloadNativeComponentConstructor_virtual,
  overrideComponent
} from "/chunk-A73O2J7D.js";
import "/chunk-E3KUK7K6.js";
import "/chunk-AF7SZHRH.js";
import {
  __commonJS,
  __toESM
} from "/chunk-IJV4CEDC.js";

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/rate/index.css
var require_rate = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/rate/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/rate/index.css
var require_rate2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/rate/index.css"(exports, module) {
    require_rate();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/rate/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/rate/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_rate2());
    var Component = overrideComponent("rate-index-1270d9");
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckmarkCircle_1 = __importDefault(require_CheckmarkCircle());
    var CheckmarkCircleVoid_1 = __importDefault(require_CheckmarkCircleVoid());
    var utils_1 = require_utils();
    var component_1 = require_component();
    var version_1 = require_version();
    (0, component_1.SmartComponent)({
      field: true,
      classes: ["icon-class"],
      props: {
        value: {
          type: Number,
          observer: function(value) {
            if (value !== this.data.innerValue) {
              this.setData({ innerValue: value });
            }
          }
        },
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: null,
        icon: {
          type: String,
          value: CheckmarkCircle_1.default
        },
        voidIcon: {
          type: String,
          value: CheckmarkCircleVoid_1.default
        },
        color: {
          type: String,
          value: "var(--app-M4)"
        },
        voidColor: {
          type: String,
          value: "var(--app-B3-N7)"
        },
        disabledColor: {
          type: String,
          value: "var(--app-B3-N7)"
        },
        count: {
          type: Number,
          value: 5,
          observer: function(value) {
            this.setData({ innerCountArray: Array.from({ length: value }) });
          }
        },
        gutter: null,
        touchable: {
          type: Boolean,
          value: true
        }
      },
      data: {
        innerValue: 0,
        innerCountArray: Array.from({ length: 5 })
      },
      methods: {
        onSelect: function(event) {
          var _this = this;
          var data = this.data;
          var score = event.currentTarget.dataset.score;
          if (!data.disabled && !data.readonly) {
            this.setData({ innerValue: score + 1 });
            if ((0, version_1.canIUseModel)()) {
              this.setData({ value: score + 1 });
            }
            wx.nextTick(function() {
              _this.$emit("input", score + 1);
              _this.$emit("change", score + 1);
            });
          }
        },
        onTouchMove: function(event) {
          var _this = this;
          var touchable = this.data.touchable;
          if (!touchable)
            return;
          var clientX = event.touches[0].clientX;
          (0, utils_1.getAllRect)(this, ".smart-rate__icon").then(function(list) {
            var target = list.sort(function(cur, next) {
              return cur.dataset.score - next.dataset.score;
            }).find(function(item) {
              return clientX >= item.left && clientX <= item.right;
            });
            if (target != null) {
              _this.onSelect(__assign(__assign({}, event), { currentTarget: target }));
            }
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcmF0ZS9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9yYXRlL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9yYXRlL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXJhdGUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5zbWFydC1yYXRlX19pdGVtIHtcbiAgcGFkZGluZzogMCB2YXIoLS1yYXRlLWhvcml6b250YWwtcGFkZGluZywgMnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21hcnQtcmF0ZV9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcmF0ZS1pY29uLWd1dHRlciwgNHB4KTtcbn1cblxuLnNtYXJ0LXJhdGVfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tcmF0ZS1pY29uLXZvaWQtY29sb3IsICNjOGM5Y2MpO1xuICBmb250LXNpemU6IHZhcigtLXJhdGUtaWNvbi1zaXplLCAyMHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNtYXJ0LXJhdGVfX2ljb24tLWhhbGYge1xuICBsZWZ0OiB2YXIoLS1yYXRlLWhvcml6b250YWwtcGFkZGluZywgMnB4KTtcbiAgd2lkdGg6IC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc21hcnQtcmF0ZV9faWNvbi0tZnVsbCwgLnNtYXJ0LXJhdGVfX2ljb24tLWhhbGYge1xuICBjb2xvcjogdmFyKC0tcmF0ZS1pY29uLWZ1bGwtY29sb3IsICNlZTBhMjQpO1xufVxuXG4uc21hcnQtcmF0ZV9faWNvbi0tZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tcmF0ZS1pY29uLWRpc2FibGVkLWNvbG9yLCAjYzhjOWNjKTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wRkJRVGhDT3pzN096czdRVUZCTUVVN096czdPMEZCUVdsR096czdPMEZCUVRaRk96czdPenM3TzBGQlFUSklPenM3T3pzN096dEJRVUZ0U0RzN096dEJRVUV3UmlJc0luTnZkWEpqWlhNaU9sc2lWWE5sY25NdlozVnVjMjF2YTJWeUwwUnZZM1Z0Wlc1MGN5OW5hWFF2UTI5dmJHbHVaMDFwYzNSTllYUlFZVzVsYkM5dWIyUmxYMjF2WkhWc1pYTXZRSFIxZVdFdGJXbHVhV0Z3Y0M5emJXRnlkQzExYVM5c2FXSXZjbUYwWlM5cGJtUmxlQzVqYzNNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lRR2x0Y0c5eWRDQW5MaTR2WTI5dGJXOXVMMmx1WkdWNExtTnpjeWM3TG5OdFlYSjBMWEpoZEdWN1pHbHpjR3hoZVRwcGJteHBibVV0Wm14bGVEc3RkMlZpYTJsMExYVnpaWEl0YzJWc1pXTjBPbTV2Ym1VN2RYTmxjaTF6Wld4bFkzUTZibTl1WlgwdWMyMWhjblF0Y21GMFpWOWZhWFJsYlh0d1lXUmthVzVuT2pBZ2RtRnlLQzB0Y21GMFpTMW9iM0pwZW05dWRHRnNMWEJoWkdScGJtY3NNbkI0S1R0d2IzTnBkR2x2YmpweVpXeGhkR2wyWlgwdWMyMWhjblF0Y21GMFpWOWZhWFJsYlRwdWIzUW9PbXhoYzNRdFkyaHBiR1FwZTNCaFpHUnBibWN0Y21sbmFIUTZkbUZ5S0MwdGNtRjBaUzFwWTI5dUxXZDFkSFJsY2l3MGNIZ3BmUzV6YldGeWRDMXlZWFJsWDE5cFkyOXVlMk52Ykc5eU9uWmhjaWd0TFhKaGRHVXRhV052YmkxMmIybGtMV052Ykc5eUxDTmpPR001WTJNcE8yUnBjM0JzWVhrNllteHZZMnM3Wm05dWRDMXphWHBsT25aaGNpZ3RMWEpoZEdVdGFXTnZiaTF6YVhwbExESXdjSGdwTzJobGFXZG9kRG94TURBbGZTNXpiV0Z5ZEMxeVlYUmxYMTlwWTI5dUxTMW9ZV3htZTJ4bFpuUTZkbUZ5S0MwdGNtRjBaUzFvYjNKcGVtOXVkR0ZzTFhCaFpHUnBibWNzTW5CNEtUdHZkbVZ5Wm14dmR6cG9hV1JrWlc0N2NHOXphWFJwYjI0NllXSnpiMngxZEdVN2RHOXdPakE3ZDJsa2RHZzZMalZsYlgwdWMyMWhjblF0Y21GMFpWOWZhV052YmkwdFpuVnNiQ3d1YzIxaGNuUXRjbUYwWlY5ZmFXTnZiaTB0YUdGc1pudGpiMnh2Y2pwMllYSW9MUzF5WVhSbExXbGpiMjR0Wm5Wc2JDMWpiMnh2Y2l3alpXVXdZVEkwS1gwdWMyMWhjblF0Y21GMFpWOWZhV052YmkwdFpHbHpZV0pzWldSN1kyOXNiM0k2ZG1GeUtDMHRjbUYwWlMxcFkyOXVMV1JwYzJGaWJHVmtMV052Ykc5eUxDTmpPR001WTJNcGZTSmRMQ0p1WVcxbGN5STZXMTE5ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ3JhdGUtaW5kZXgtMTI3MGQ5Jyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENoZWNrbWFya0NpcmNsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAdHV5YS1taW5pYXBwL2ljb25zL2Rpc3Qvc3ZnL0NoZWNrbWFya0NpcmNsZVwiKSk7XG52YXIgQ2hlY2ttYXJrQ2lyY2xlVm9pZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAdHV5YS1taW5pYXBwL2ljb25zL2Rpc3Qvc3ZnL0NoZWNrbWFya0NpcmNsZVZvaWRcIikpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi92ZXJzaW9uXCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuZGF0YS5pbm5lclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlubmVyVmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgYWxsb3dIYWxmOiBCb29sZWFuLFxuICAgICAgICBzaXplOiBudWxsLFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogQ2hlY2ttYXJrQ2lyY2xlXzEuZGVmYXVsdCxcbiAgICAgICAgfSxcbiAgICAgICAgdm9pZEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBDaGVja21hcmtDaXJjbGVWb2lkXzEuZGVmYXVsdCxcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFyKC0tYXBwLU00KScsXG4gICAgICAgIH0sXG4gICAgICAgIHZvaWRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd2YXIoLS1hcHAtQjMtTjcpJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd2YXIoLS1hcHAtQjMtTjcpJyxcbiAgICAgICAgfSxcbiAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlubmVyQ291bnRBcnJheTogQXJyYXkuZnJvbSh7IGxlbmd0aDogdmFsdWUgfSkgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXI6IG51bGwsXG4gICAgICAgIHRvdWNoYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBpbm5lclZhbHVlOiAwLFxuICAgICAgICBpbm5lckNvdW50QXJyYXk6IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSksXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHZhciBzY29yZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zY29yZTtcbiAgICAgICAgICAgIGlmICghZGF0YS5kaXNhYmxlZCAmJiAhZGF0YS5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlubmVyVmFsdWU6IHNjb3JlICsgMSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoKDAsIHZlcnNpb25fMS5jYW5JVXNlTW9kZWwpKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWU6IHNjb3JlICsgMSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnaW5wdXQnLCBzY29yZSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY2hhbmdlJywgc2NvcmUgKyAxKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0b3VjaGFibGUgPSB0aGlzLmRhdGEudG91Y2hhYmxlO1xuICAgICAgICAgICAgaWYgKCF0b3VjaGFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5nZXRBbGxSZWN0KSh0aGlzLCAnLnNtYXJ0LXJhdGVfX2ljb24nKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGxpc3RcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGN1ciwgbmV4dCkgeyByZXR1cm4gY3VyLmRhdGFzZXQuc2NvcmUgLSBuZXh0LmRhdGFzZXQuc2NvcmU7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBjbGllbnRYID49IGl0ZW0ubGVmdCAmJiBjbGllbnRYIDw9IGl0ZW0ucmlnaHQ7IH0pO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblNlbGVjdChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXZlbnQpLCB7IGN1cnJlbnRUYXJnZXQ6IHRhcmdldCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLGdCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQixtQkFBbUI7QUFHdkQsUUFBSSxXQUFZLFdBQVEsUUFBSyxZQUFhLFdBQVk7QUFDbEQsaUJBQVcsT0FBTyxVQUFVLFNBQVMsR0FBRztBQUNwQyxpQkFBUyxHQUFHLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUNqRCxjQUFJLFVBQVUsQ0FBQztBQUNmLG1CQUFTLEtBQUs7QUFBRyxnQkFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUcsQ0FBQztBQUMxRCxnQkFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQUEsUUFDbEI7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUNBLGFBQU8sU0FBUyxNQUFNLE1BQU0sU0FBUztBQUFBLElBQ3pDO0FBQ0EsUUFBSSxrQkFBbUIsV0FBUSxRQUFLLG1CQUFvQixTQUFVLEtBQUs7QUFDbkUsYUFBUSxPQUFPLElBQUksYUFBYyxNQUFNLEVBQUUsV0FBVyxJQUFJO0FBQUEsSUFDNUQ7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsUUFBSSxvQkFBb0IsZ0JBQWdCLHlCQUF1RDtBQUMvRixRQUFJLHdCQUF3QixnQkFBZ0IsNkJBQTJEO0FBQ3ZHLFFBQUksVUFBVTtBQUNkLFFBQUksY0FBYztBQUNsQixRQUFJLFlBQVk7QUFDaEIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsT0FBTztBQUFBLE1BQ1AsU0FBUyxDQUFDLFlBQVk7QUFBQSxNQUN0QixPQUFPO0FBQUEsUUFDSCxPQUFPO0FBQUEsVUFDSCxNQUFNO0FBQUEsVUFDTixVQUFVLFNBQVUsT0FBTztBQUN2QixnQkFBSSxVQUFVLEtBQUssS0FBSyxZQUFZO0FBQ2hDLG1CQUFLLFFBQVEsRUFBRSxZQUFZLE1BQU0sQ0FBQztBQUFBLFlBQ3RDO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxRQUNBLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNGLE1BQU07QUFBQSxVQUNOLE9BQU8sa0JBQWtCO0FBQUEsUUFDN0I7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE9BQU8sc0JBQXNCO0FBQUEsUUFDakM7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNILE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxXQUFXO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsZUFBZTtBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNILE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFVBQVUsU0FBVSxPQUFPO0FBQ3ZCLGlCQUFLLFFBQVEsRUFBRSxpQkFBaUIsTUFBTSxLQUFLLEVBQUUsUUFBUSxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQUEsVUFDbkU7QUFBQSxRQUNKO0FBQUEsUUFDQSxRQUFRO0FBQUEsUUFDUixXQUFXO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNGLFlBQVk7QUFBQSxRQUNaLGlCQUFpQixNQUFNLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUFBLE1BQzdDO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDTCxVQUFVLFNBQVUsT0FBTztBQUN2QixjQUFJLFFBQVE7QUFDWixjQUFJLE9BQU8sS0FBSztBQUNoQixjQUFJLFFBQVEsTUFBTSxjQUFjLFFBQVE7QUFDeEMsY0FBSSxDQUFDLEtBQUssWUFBWSxDQUFDLEtBQUssVUFBVTtBQUNsQyxpQkFBSyxRQUFRLEVBQUUsWUFBWSxRQUFRLEVBQUUsQ0FBQztBQUN0QyxpQkFBSyxHQUFHLFVBQVUsY0FBYyxHQUFHO0FBQy9CLG1CQUFLLFFBQVEsRUFBRSxPQUFPLFFBQVEsRUFBRSxDQUFDO0FBQUEsWUFDckM7QUFDQSxlQUFHLFNBQVMsV0FBWTtBQUNwQixvQkFBTSxNQUFNLFNBQVMsUUFBUSxDQUFDO0FBQzlCLG9CQUFNLE1BQU0sVUFBVSxRQUFRLENBQUM7QUFBQSxZQUNuQyxDQUFDO0FBQUEsVUFDTDtBQUFBLFFBQ0o7QUFBQSxRQUNBLGFBQWEsU0FBVSxPQUFPO0FBQzFCLGNBQUksUUFBUTtBQUNaLGNBQUksWUFBWSxLQUFLLEtBQUs7QUFDMUIsY0FBSSxDQUFDO0FBQ0Q7QUFDSixjQUFJLFVBQVUsTUFBTSxRQUFRLENBQUMsRUFBRTtBQUMvQixXQUFDLEdBQUcsUUFBUSxZQUFZLE1BQU0sbUJBQW1CLEVBQUUsS0FBSyxTQUFVLE1BQU07QUFDcEUsZ0JBQUksU0FBUyxLQUNSLEtBQUssU0FBVSxLQUFLLE1BQU07QUFBRSxxQkFBTyxJQUFJLFFBQVEsUUFBUSxLQUFLLFFBQVE7QUFBQSxZQUFPLENBQUMsRUFDNUUsS0FBSyxTQUFVLE1BQU07QUFBRSxxQkFBTyxXQUFXLEtBQUssUUFBUSxXQUFXLEtBQUs7QUFBQSxZQUFPLENBQUM7QUFDbkYsZ0JBQUksVUFBVSxNQUFNO0FBQ2hCLG9CQUFNLFNBQVMsU0FBUyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxlQUFlLE9BQU8sQ0FBQyxDQUFDO0FBQUEsWUFDM0U7QUFBQSxVQUNKLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfcmF0ZSJdCn0K
