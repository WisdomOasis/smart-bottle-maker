import {
  require_relation
} from "/chunk-B4TQ7YND.js";
import {
  require_Check
} from "/chunk-HKMPRLON.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/dropdown-item/index.css
var require_dropdown_item = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/dropdown-item/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/dropdown-item/index.css
var require_dropdown_item2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/dropdown-item/index.css"(exports, module) {
    require_dropdown_item();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/dropdown-item/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/dropdown-item/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_dropdown_item2());
    var Component = overrideComponent("dropdown-item-index-d0e092");
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var relation_1 = require_relation();
    var component_1 = require_component();
    var Check_1 = __importDefault(require_Check());
    (0, component_1.SmartComponent)({
      classes: ["item-title-class"],
      field: true,
      relation: (0, relation_1.useParent)("dropdown-menu", function() {
        this.updateDataFromParent();
      }),
      props: {
        value: {
          type: null,
          observer: "rerender"
        },
        title: {
          type: String,
          observer: "rerender"
        },
        disabled: Boolean,
        titleClass: {
          type: String,
          observer: "rerender"
        },
        options: {
          type: Array,
          value: [],
          observer: "rerender"
        },
        popupStyle: String,
        useBeforeToggle: {
          type: Boolean,
          value: false
        },
        rootPortal: {
          type: Boolean,
          value: false
        }
      },
      data: {
        checkMarkIcon: Check_1.default,
        checkMarkIconColor: "",
        transition: true,
        showPopup: false,
        showWrapper: false,
        displayTitle: "",
        safeAreaTabBar: false
      },
      mounted: function() {
        var _a;
        var themeInfo = (_a = ty === null || ty === void 0 ? void 0 : ty.getThemeInfo()) !== null && _a !== void 0 ? _a : {};
        var checkMarkIconColor = this.data.activeColor || themeInfo["--app-M1"] || "#3678E3";
        this.setData({ checkMarkIconColor });
      },
      methods: {
        rerender: function() {
          var _this = this;
          wx.nextTick(function() {
            var _a;
            (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.updateItemListData();
          });
        },
        updateDataFromParent: function() {
          if (this.parent) {
            var _a = this.parent.data, overlay = _a.overlay, duration = _a.duration, activeColor = _a.activeColor, closeOnClickOverlay = _a.closeOnClickOverlay, direction = _a.direction, safeAreaTabBar = _a.safeAreaTabBar;
            this.setData({
              overlay,
              duration,
              activeColor,
              closeOnClickOverlay,
              direction,
              safeAreaTabBar
            });
          }
        },
        onOpen: function() {
          this.$emit("open");
        },
        onOpened: function() {
          this.$emit("opened");
        },
        onClose: function() {
          this.$emit("close");
        },
        onClosed: function() {
          this.$emit("closed");
          this.setData({ showWrapper: false });
        },
        onOptionTap: function(event) {
          var option = event.currentTarget.dataset.option;
          var value = option.value;
          var shouldEmitChange = this.data.value !== value;
          this.setData({ showPopup: false, value });
          this.$emit("close");
          this.rerender();
          if (shouldEmitChange) {
            this.$emit("change", value);
          }
        },
        toggle: function(show, options) {
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          var showPopup = this.data.showPopup;
          if (typeof show !== "boolean") {
            show = !showPopup;
          }
          if (show === showPopup) {
            return;
          }
          this.onBeforeToggle(show).then(function(status) {
            var _a;
            if (!status) {
              return;
            }
            _this.setData({
              transition: !options.immediate,
              showPopup: show
            });
            if (show) {
              (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.getChildWrapperStyle().then(function(wrapperStyle) {
                _this.setData({ wrapperStyle, showWrapper: true });
                _this.rerender();
              });
            } else {
              _this.rerender();
            }
          });
        },
        onBeforeToggle: function(status) {
          var _this = this;
          var useBeforeToggle = this.data.useBeforeToggle;
          if (!useBeforeToggle) {
            return Promise.resolve(true);
          }
          return new Promise(function(resolve) {
            _this.$emit("before-toggle", {
              status,
              callback: function(value) {
                return resolve(value);
              }
            });
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvZHJvcGRvd24taXRlbS9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9kcm9wZG93bi1pdGVtL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9kcm9wZG93bi1pdGVtL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWRyb3Bkb3duLWl0ZW0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc21hcnQtZHJvcGRvd24taXRlbSAuc21hcnQtZHJvcGRvd24taXRlbV9fdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS10aXRsZS1mb250LXNpemUsIDE0cHgpO1xuICBmb250LXdlaWdodDogdmFyKC0tZHJvcGRvd24tbWVudS1pdGVtLXRpdGxlLWZvbnQtd2VpZ2h0LCBub3JtYWwpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZHJvcGRvd24tbWVudS1pdGVtLXRpdGxlLWxpbmUtaGVpZ2h0LCAyOHB4KTtcbn1cblxuLnNtYXJ0LWRyb3Bkb3duLWl0ZW0gLnNtYXJ0LWRyb3Bkb3duLWl0ZW1fX2ljb24ge1xuICBmb250LXNpemU6IHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS1pY29uLWZvbnQtc2l6ZSwgMjhweCk7XG59XG5cbi5zbWFydC1kcm9wZG93bi1pdGVtX19vcHRpb24ge1xuICAtLWFwcC1CNi1ONzogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtYXJ0LWRyb3Bkb3duLWl0ZW1fX29wdGlvbjphZnRlciB7XG4gIGJvcmRlci10b3A6IHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS1saW5lLXdpZHRoLCAxcHgpIHNvbGlkIHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS1saW5lLWNvbG9yLCByZ2JhKDAsIDAsIDAsIC4wNSkpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc21hcnQtZHJvcGRvd24taXRlbV9fb3B0aW9uLS1maXJzdDphZnRlciB7XG4gIGJvcmRlci10b3A6IHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS1saW5lLXdpZHRoLCAxcHgpIHNvbGlkIHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS1maXJzdC1saW5lLWNvbG9yLCByZ2JhKDAsIDAsIDAsIC4wOCkpO1xufVxuXG4uc21hcnQtZHJvcGRvd24taXRlbV9fb3B0aW9uLS1hY3RpdmUgLnNtYXJ0LWRyb3Bkb3duLWl0ZW1fX2ljb24sIC5zbWFydC1kcm9wZG93bi1pdGVtX19vcHRpb24tLWFjdGl2ZSAuc21hcnQtZHJvcGRvd24taXRlbV9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZHJvcGRvd24tbWVudS1vcHRpb24tYWN0aXZlLWNvbG9yLCB2YXIoLS1hcHAtTTEsICMzNjc4ZTMpKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWRyb3Bkb3duLW1lbnUtaXRlbS10aXRsZS1hY3RpdmUtZm9udC13ZWlnaHQsIDUwMCk7XG59XG5cbi5zbWFydC1kcm9wZG93bi1pdGVtX19vcHRpb24tLXVwOmFmdGVyIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG59XG5cbi5zbWFydC1kcm9wZG93bi1pdGVtLS11cCB7XG4gIHRvcDogMDtcbn1cblxuLnNtYXJ0LWRyb3Bkb3duLWl0ZW0tLWRvd24ge1xuICBib3R0b206IDA7XG59XG5cbi5zbWFydC1kcm9wZG93bi1pdGVtX19pY29uIHtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3T3pzN08wRkJRVzFGT3pzN096czdRVUZCYzA4N096czdRVUZCZDBjN096czdPenRCUVVGMVJqczdPenM3T3pzN096czdPMEZCUVhWUk96czdPMEZCUVN0S096czdPenRCUVVGNVVUczdPenM3UVVGQmVVUTdPenM3UVVGQkswSTdPenM3UVVGQmIwTWlMQ0p6YjNWeVkyVnpJanBiSWxWelpYSnpMMmQxYm5OdGIydGxjaTlFYjJOMWJXVnVkSE12WjJsMEwwTnZiMnhwYm1kTmFYTjBUV0YwVUdGdVpXd3ZibTlrWlY5dGIyUjFiR1Z6TDBCMGRYbGhMVzFwYm1saGNIQXZjMjFoY25RdGRXa3ZiR2xpTDJSeWIzQmtiM2R1TFdsMFpXMHZhVzVrWlhndVkzTnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWtCcGJYQnZjblFnSnk0dUwyTnZiVzF2Ymk5cGJtUmxlQzVqYzNNbk95NXpiV0Z5ZEMxa2NtOXdaRzkzYmkxcGRHVnRlMnhsWm5RNk1EdHZkbVZ5Wm14dmR6cG9hV1JrWlc0N2NHOXphWFJwYjI0NlptbDRaV1E3Y21sbmFIUTZNSDB1YzIxaGNuUXRaSEp2Y0dSdmQyNHRhWFJsYlNBdWMyMWhjblF0WkhKdmNHUnZkMjR0YVhSbGJWOWZkR2wwYkdWN1ptOXVkQzF6YVhwbE9uWmhjaWd0TFdSeWIzQmtiM2R1TFcxbGJuVXRhWFJsYlMxMGFYUnNaUzFtYjI1MExYTnBlbVVzTVRSd2VDazdabTl1ZEMxM1pXbG5hSFE2ZG1GeUtDMHRaSEp2Y0dSdmQyNHRiV1Z1ZFMxcGRHVnRMWFJwZEd4bExXWnZiblF0ZDJWcFoyaDBMRzV2Y20xaGJDazdiR2x1WlMxb1pXbG5hSFE2ZG1GeUtDMHRaSEp2Y0dSdmQyNHRiV1Z1ZFMxcGRHVnRMWFJwZEd4bExXeHBibVV0YUdWcFoyaDBMREk0Y0hncGZTNXpiV0Z5ZEMxa2NtOXdaRzkzYmkxcGRHVnRJQzV6YldGeWRDMWtjbTl3Wkc5M2JpMXBkR1Z0WDE5cFkyOXVlMlp2Ym5RdGMybDZaVHAyWVhJb0xTMWtjbTl3Wkc5M2JpMXRaVzUxTFdsMFpXMHRhV052YmkxbWIyNTBMWE5wZW1Vc01qaHdlQ2w5TG5OdFlYSjBMV1J5YjNCa2IzZHVMV2wwWlcxZlgyOXdkR2x2Ym5zdExXRndjQzFDTmkxT056cDBjbUZ1YzNCaGNtVnVkRHR3YjNOcGRHbHZianB5Wld4aGRHbDJaVHQwWlhoMExXRnNhV2R1T214bFpuUjlMbk50WVhKMExXUnliM0JrYjNkdUxXbDBaVzFmWDI5d2RHbHZianBoWm5SbGNudGliM0prWlhJdGRHOXdPblpoY2lndExXUnliM0JrYjNkdUxXMWxiblV0YVhSbGJTMXNhVzVsTFhkcFpIUm9MREZ3ZUNrZ2MyOXNhV1FnZG1GeUtDMHRaSEp2Y0dSdmQyNHRiV1Z1ZFMxcGRHVnRMV3hwYm1VdFkyOXNiM0lzY21kaVlTZ3dMREFzTUN3dU1EVXBLVHRpYjNndGMybDZhVzVuT21KdmNtUmxjaTFpYjNnN1kyOXVkR1Z1ZERwY0lpQmNJanRzWldaME9qQTdjRzlwYm5SbGNpMWxkbVZ1ZEhNNmJtOXVaVHR3YjNOcGRHbHZianBoWW5OdmJIVjBaVHR5YVdkb2REb3dPM1J2Y0Rvd08zUnlZVzV6Wm05eWJTMXZjbWxuYVc0NlkyVnVkR1Z5ZlM1emJXRnlkQzFrY205d1pHOTNiaTFwZEdWdFgxOXZjSFJwYjI0dExXWnBjbk4wT21GbWRHVnllMkp2Y21SbGNpMTBiM0E2ZG1GeUtDMHRaSEp2Y0dSdmQyNHRiV1Z1ZFMxcGRHVnRMV3hwYm1VdGQybGtkR2dzTVhCNEtTQnpiMnhwWkNCMllYSW9MUzFrY205d1pHOTNiaTF0Wlc1MUxXbDBaVzB0Wm1seWMzUXRiR2x1WlMxamIyeHZjaXh5WjJKaEtEQXNNQ3d3TEM0d09Da3BmUzV6YldGeWRDMWtjbTl3Wkc5M2JpMXBkR1Z0WDE5dmNIUnBiMjR0TFdGamRHbDJaU0F1YzIxaGNuUXRaSEp2Y0dSdmQyNHRhWFJsYlY5ZmFXTnZiaXd1YzIxaGNuUXRaSEp2Y0dSdmQyNHRhWFJsYlY5ZmIzQjBhVzl1TFMxaFkzUnBkbVVnTG5OdFlYSjBMV1J5YjNCa2IzZHVMV2wwWlcxZlgzUnBkR3hsZTJOdmJHOXlPblpoY2lndExXUnliM0JrYjNkdUxXMWxiblV0YjNCMGFXOXVMV0ZqZEdsMlpTMWpiMnh2Y2l4MllYSW9MUzFoY0hBdFRURXNJek0yTnpobE15a3BPMlp2Ym5RdGQyVnBaMmgwT25aaGNpZ3RMV1J5YjNCa2IzZHVMVzFsYm5VdGFYUmxiUzEwYVhSc1pTMWhZM1JwZG1VdFptOXVkQzEzWldsbmFIUXNOVEF3S1gwdWMyMWhjblF0WkhKdmNHUnZkMjR0YVhSbGJWOWZiM0IwYVc5dUxTMTFjRHBoWm5SbGNudGliM1IwYjIwNk1EdDBiM0E2WVhWMGIzMHVjMjFoY25RdFpISnZjR1J2ZDI0dGFYUmxiUzB0ZFhCN2RHOXdPakI5TG5OdFlYSjBMV1J5YjNCa2IzZHVMV2wwWlcwdExXUnZkMjU3WW05MGRHOXRPakI5TG5OdFlYSjBMV1J5YjNCa2IzZHVMV2wwWlcxZlgybGpiMjU3WkdsemNHeGhlVHBpYkc5amF6dHNhVzVsTFdobGFXZG9kRHBwYm1obGNtbDBmU0pkTENKdVlXMWxjeUk2VzExOSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdkcm9wZG93bi1pdGVtLWluZGV4LWQwZTA5MicpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3JlbGF0aW9uXCIpO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgQ2hlY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQHR1eWEtbWluaWFwcC9pY29ucy9kaXN0L3N2Zy9DaGVja1wiKSk7XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICBjbGFzc2VzOiBbJ2l0ZW0tdGl0bGUtY2xhc3MnXSxcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjogKDAsIHJlbGF0aW9uXzEudXNlUGFyZW50KSgnZHJvcGRvd24tbWVudScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhRnJvbVBhcmVudCgpO1xuICAgIH0pLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdyZXJlbmRlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3JlcmVuZGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHRpdGxlQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVyZW5kZXInLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVyZW5kZXInLFxuICAgICAgICB9LFxuICAgICAgICBwb3B1cFN0eWxlOiBTdHJpbmcsXG4gICAgICAgIHVzZUJlZm9yZVRvZ2dsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9vdFBvcnRhbDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgY2hlY2tNYXJrSWNvbjogQ2hlY2tfMS5kZWZhdWx0LFxuICAgICAgICBjaGVja01hcmtJY29uQ29sb3I6ICcnLFxuICAgICAgICB0cmFuc2l0aW9uOiB0cnVlLFxuICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICBzaG93V3JhcHBlcjogZmFsc2UsXG4gICAgICAgIGRpc3BsYXlUaXRsZTogJycsXG4gICAgICAgIHNhZmVBcmVhVGFiQmFyOiBmYWxzZSxcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHZhciB0aGVtZUluZm8gPSAoX2EgPSB0eSA9PT0gbnVsbCB8fCB0eSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHkuZ2V0VGhlbWVJbmZvKCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xuICAgICAgICB2YXIgY2hlY2tNYXJrSWNvbkNvbG9yID0gdGhpcy5kYXRhLmFjdGl2ZUNvbG9yIHx8IHRoZW1lSW5mb1snLS1hcHAtTTEnXSB8fCAnIzM2NzhFMyc7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IGNoZWNrTWFya0ljb25Db2xvcjogY2hlY2tNYXJrSWNvbkNvbG9yIH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICByZXJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgKF9hID0gX3RoaXMucGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXBkYXRlSXRlbUxpc3REYXRhKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRGF0YUZyb21QYXJlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucGFyZW50LmRhdGEsIG92ZXJsYXkgPSBfYS5vdmVybGF5LCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBhY3RpdmVDb2xvciA9IF9hLmFjdGl2ZUNvbG9yLCBjbG9zZU9uQ2xpY2tPdmVybGF5ID0gX2EuY2xvc2VPbkNsaWNrT3ZlcmxheSwgZGlyZWN0aW9uID0gX2EuZGlyZWN0aW9uLCBzYWZlQXJlYVRhYkJhciA9IF9hLnNhZmVBcmVhVGFiQmFyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I6IGFjdGl2ZUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiBjbG9zZU9uQ2xpY2tPdmVybGF5LFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2FmZUFyZWFUYWJCYXI6IHNhZmVBcmVhVGFiQmFyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbk9wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25PcGVuZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW5lZCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsb3NlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2VkJyk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93V3JhcHBlcjogZmFsc2UgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uT3B0aW9uVGFwOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub3B0aW9uO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHNob3VsZEVtaXRDaGFuZ2UgPSB0aGlzLmRhdGEudmFsdWUgIT09IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2hvd1BvcHVwOiBmYWxzZSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgICAgIHRoaXMucmVyZW5kZXIoKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRFbWl0Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uIChzaG93LCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIHZhciBzaG93UG9wdXAgPSB0aGlzLmRhdGEuc2hvd1BvcHVwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzaG93ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBzaG93ID0gIXNob3dQb3B1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaG93ID09PSBzaG93UG9wdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQmVmb3JlVG9nZ2xlKHNob3cpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAhb3B0aW9ucy5pbW1lZGlhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dQb3B1cDogc2hvdyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBfdGhpcy5wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRDaGlsZFdyYXBwZXJTdHlsZSgpLnRoZW4oZnVuY3Rpb24gKHdyYXBwZXJTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7IHdyYXBwZXJTdHlsZTogd3JhcHBlclN0eWxlLCBzaG93V3JhcHBlcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlcmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWZvcmVUb2dnbGU6IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXNlQmVmb3JlVG9nZ2xlID0gdGhpcy5kYXRhLnVzZUJlZm9yZVRvZ2dsZTtcbiAgICAgICAgICAgIGlmICghdXNlQmVmb3JlVG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdiZWZvcmUtdG9nZ2xlJywge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSx5QkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IsNEJBQTRCO0FBR2hFLFFBQUksa0JBQW1CLFdBQVEsUUFBSyxtQkFBb0IsU0FBVSxLQUFLO0FBQ25FLGFBQVEsT0FBTyxJQUFJLGFBQWMsTUFBTSxFQUFFLFdBQVcsSUFBSTtBQUFBLElBQzVEO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksYUFBYTtBQUNqQixRQUFJLGNBQWM7QUFDbEIsUUFBSSxVQUFVLGdCQUFnQixlQUE2QztBQUMzRSxLQUFDLEdBQUcsWUFBWSxnQkFBZ0I7QUFBQSxNQUM1QixTQUFTLENBQUMsa0JBQWtCO0FBQUEsTUFDNUIsT0FBTztBQUFBLE1BQ1AsV0FBVyxHQUFHLFdBQVcsV0FBVyxpQkFBaUIsV0FBWTtBQUM3RCxhQUFLLHFCQUFxQjtBQUFBLE1BQzlCLENBQUM7QUFBQSxNQUNELE9BQU87QUFBQSxRQUNILE9BQU87QUFBQSxVQUNILE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDSCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE9BQU8sQ0FBQztBQUFBLFVBQ1Is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
