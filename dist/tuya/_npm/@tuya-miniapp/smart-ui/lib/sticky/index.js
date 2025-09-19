import {
  require_page_scroll
} from "/chunk-DSI6C2FJ.js";
import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import "/chunk-SOVNIPSZ.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
import {
  require_validator
} from "/chunk-UXQMYNQX.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sticky/index.css
var require_sticky = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sticky/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sticky/index.css
var require_sticky2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sticky/index.css"(exports, module) {
    require_sticky();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sticky/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sticky/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_sticky2());
    var Component = overrideComponent("sticky-index-eca397");
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var component_1 = require_component();
    var validator_1 = require_validator();
    var page_scroll_1 = require_page_scroll();
    var ROOT_ELEMENT = ".smart-sticky";
    (0, component_1.SmartComponent)({
      props: {
        zIndex: {
          type: Number,
          value: 99
        },
        offsetTop: {
          type: Number,
          value: 0,
          observer: "onScroll"
        },
        disabled: {
          type: Boolean,
          observer: "onScroll"
        },
        container: {
          type: null,
          observer: "onScroll"
        },
        scrollTop: {
          type: null,
          observer: function(val) {
            this.onScroll({ scrollTop: val });
          }
        }
      },
      mixins: [
        (0, page_scroll_1.pageScrollMixin)(function(event) {
          if (this.data.scrollTop != null) {
            return;
          }
          this.onScroll(event);
        })
      ],
      data: {
        height: 0,
        fixed: false,
        transform: 0
      },
      mounted: function() {
        this.onScroll();
      },
      methods: {
        onScroll: function(_a) {
          var _this = this;
          var _b = _a === void 0 ? {} : _a, scrollTop = _b.scrollTop;
          var _c = this.data, container = _c.container, offsetTop = _c.offsetTop, disabled = _c.disabled;
          if (disabled) {
            this.setDataAfterDiff({
              fixed: false,
              transform: 0
            });
            return;
          }
          this.scrollTop = scrollTop || this.scrollTop;
          if (typeof container === "function") {
            Promise.all([(0, utils_1.getRect)(this, ROOT_ELEMENT), this.getContainerRect()]).then(function(_a2) {
              var root = _a2[0], container2 = _a2[1];
              if (offsetTop + root.height > container2.height + container2.top) {
                _this.setDataAfterDiff({
                  fixed: false,
                  transform: container2.height - root.height
                });
              } else if (offsetTop >= root.top) {
                _this.setDataAfterDiff({
                  fixed: true,
                  height: root.height,
                  transform: 0
                });
              } else {
                _this.setDataAfterDiff({ fixed: false, transform: 0 });
              }
            }).catch(function() {
            });
            return;
          }
          (0, utils_1.getRect)(this, ROOT_ELEMENT).then(function(root) {
            if (!(0, validator_1.isDef)(root) || !root.width && !root.height) {
              return;
            }
            if (offsetTop >= root.top) {
              _this.setDataAfterDiff({ fixed: true, height: root.height });
              _this.transform = 0;
            } else {
              _this.setDataAfterDiff({ fixed: false });
            }
          });
        },
        setDataAfterDiff: function(data) {
          var _this = this;
          wx.nextTick(function() {
            var diff = Object.keys(data).reduce(function(prev, key) {
              if (data[key] !== _this.data[key]) {
                prev[key] = data[key];
              }
              return prev;
            }, {});
            if (Object.keys(diff).length > 0) {
              _this.setData(diff);
            }
            _this.$emit("scroll", {
              scrollTop: _this.scrollTop,
              isFixed: data.fixed || _this.data.fixed
            });
          });
        },
        getContainerRect: function() {
          var nodesRef = this.data.container();
          if (!nodesRef) {
            return Promise.reject(new Error("not found container"));
          }
          return new Promise(function(resolve) {
            return nodesRef.boundingClientRect(resolve).exec();
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvc3RpY2t5L2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3N0aWNreS9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvc3RpY2t5L2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXN0aWNreSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtYXJ0LXN0aWNreS13cmFwLS1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ096czdPMEZCUVdkRElpd2ljMjkxY21ObGN5STZXeUpWYzJWeWN5OW5kVzV6Ylc5clpYSXZSRzlqZFcxbGJuUnpMMmRwZEM5RGIyOXNhVzVuVFdsemRFMWhkRkJoYm1Wc0wyNXZaR1ZmYlc5a2RXeGxjeTlBZEhWNVlTMXRhVzVwWVhCd0wzTnRZWEowTFhWcEwyeHBZaTl6ZEdsamEza3ZhVzVrWlhndVkzTnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWtCcGJYQnZjblFnSnk0dUwyTnZiVzF2Ymk5cGJtUmxlQzVqYzNNbk95NXpiV0Z5ZEMxemRHbGphM2w3Y0c5emFYUnBiMjQ2Y21Wc1lYUnBkbVY5TG5OdFlYSjBMWE4wYVdOcmVTMTNjbUZ3TFMxbWFYaGxaSHRzWldaME9qQTdjRzl6YVhScGIyNDZabWw0WldRN2NtbG5hSFE2TUgwaVhTd2libUZ0WlhNaU9sdGRmUT09ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ3N0aWNreS1pbmRleC1lY2EzOTcnKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHZhbGlkYXRvcl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi92YWxpZGF0b3JcIik7XG52YXIgcGFnZV9zY3JvbGxfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvcGFnZS1zY3JvbGxcIik7XG52YXIgUk9PVF9FTEVNRU5UID0gJy5zbWFydC1zdGlja3knO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogOTksXG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ29uU2Nyb2xsJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ29uU2Nyb2xsJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvblNjcm9sbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbFRvcDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNjcm9sbCh7IHNjcm9sbFRvcDogdmFsIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1peGluczogW1xuICAgICAgICAoMCwgcGFnZV9zY3JvbGxfMS5wYWdlU2Nyb2xsTWl4aW4pKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zY3JvbGxUb3AgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25TY3JvbGwoZXZlbnQpO1xuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGRhdGE6IHtcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgIHRyYW5zZm9ybTogMCxcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vblNjcm9sbCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblNjcm9sbDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIHNjcm9sbFRvcCA9IF9iLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZGF0YSwgY29udGFpbmVyID0gX2MuY29udGFpbmVyLCBvZmZzZXRUb3AgPSBfYy5vZmZzZXRUb3AsIGRpc2FibGVkID0gX2MuZGlzYWJsZWQ7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGFBZnRlckRpZmYoe1xuICAgICAgICAgICAgICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHNjcm9sbFRvcCB8fCB0aGlzLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoWygwLCB1dGlsc18xLmdldFJlY3QpKHRoaXMsIFJPT1RfRUxFTUVOVCksIHRoaXMuZ2V0Q29udGFpbmVyUmVjdCgpXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb290ID0gX2FbMF0sIGNvbnRhaW5lciA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0VG9wICsgcm9vdC5oZWlnaHQgPiBjb250YWluZXIuaGVpZ2h0ICsgY29udGFpbmVyLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YUFmdGVyRGlmZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogY29udGFpbmVyLmhlaWdodCAtIHJvb3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2Zmc2V0VG9wID49IHJvb3QudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhQWZ0ZXJEaWZmKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJvb3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YUFmdGVyRGlmZih7IGZpeGVkOiBmYWxzZSwgdHJhbnNmb3JtOiAwIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKDAsIHV0aWxzXzEuZ2V0UmVjdCkodGhpcywgUk9PVF9FTEVNRU5UKS50aGVuKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoMCwgdmFsaWRhdG9yXzEuaXNEZWYpKHJvb3QpIHx8ICghcm9vdC53aWR0aCAmJiAhcm9vdC5oZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFRvcCA+PSByb290LnRvcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhQWZ0ZXJEaWZmKHsgZml4ZWQ6IHRydWUsIGhlaWdodDogcm9vdC5oZWlnaHQgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhQWZ0ZXJEaWZmKHsgZml4ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXREYXRhQWZ0ZXJEaWZmOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZiA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZShmdW5jdGlvbiAocHJldiwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gIT09IF90aGlzLmRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldltrZXldID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGlmZikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKGRpZmYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnc2Nyb2xsJywge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IF90aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNGaXhlZDogZGF0YS5maXhlZCB8fCBfdGhpcy5kYXRhLmZpeGVkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENvbnRhaW5lclJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBub2Rlc1JlZiA9IHRoaXMuZGF0YS5jb250YWluZXIoKTtcbiAgICAgICAgICAgIGlmICghbm9kZXNSZWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdub3QgZm91bmQgY29udGFpbmVyJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzUmVmLmJvdW5kaW5nQ2xpZW50UmVjdChyZXNvbHZlKS5leGVjKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsa0JBQUE7QUFBQTtBQUFBO0FBR0EsV0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNIbEI7QUFBQTtBQUNBO0FBRUEsdUJBQU87QUFEUCxRQUFNLFlBQVksa0JBQWtCLHFCQUFxQjtBQUd6RCxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsUUFBSSxVQUFVO0FBQ2QsUUFBSSxjQUFjO0FBQ2xCLFFBQUksY0FBYztBQUNsQixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLGVBQWU7QUFDbkIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsT0FBTztBQUFBLFFBQ0gsUUFBUTtBQUFBLFVBQ0osTUFB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
