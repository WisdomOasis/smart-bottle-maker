import {
  require_Xmark
} from "/chunk-K3BA3CBS.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/cascader/index.css
var require_cascader = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/cascader/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/cascader/index.css
var require_cascader2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/cascader/index.css"(exports, module) {
    require_cascader();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/cascader/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/cascader/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_cascader2());
    var Component = overrideComponent("cascader-index-ff848f");
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var Xmark_1 = __importDefault(require_Xmark());
    (0, component_1.SmartComponent)({
      props: {
        title: String,
        value: {
          type: String
        },
        placeholder: {
          type: String,
          value: "Please select"
        },
        activeColor: {
          type: String,
          value: "#1989fa"
        },
        options: {
          type: Array,
          value: []
        },
        swipeable: {
          type: Boolean,
          value: false
        },
        closeable: {
          type: Boolean,
          value: true
        },
        ellipsis: {
          type: Boolean,
          value: true
        },
        swipeThreshold: {
          type: Number,
          value: 5
        },
        showHeader: {
          type: Boolean,
          value: true
        },
        closeIcon: {
          type: String,
          value: Xmark_1.default
        },
        useTitleSlot: Boolean
      },
      data: {
        tabs: [],
        activeTab: 0,
        innerValue: ""
      },
      watch: {
        options: function() {
          this.updateTabs();
        },
        value: function(newVal) {
          this.updateValue(newVal);
        }
      },
      created: function() {
        this.updateTabs();
      },
      methods: {
        updateValue: function(val) {
          if (val !== void 0) {
            var values = this.data.tabs.map(function(tab) {
              return tab.selected && tab.selected.value;
            });
            if (values.indexOf(val) > -1) {
              return;
            }
          }
          this.innerValue = val;
          this.updateTabs();
        },
        getSelectedOptionsByValue: function(options, value) {
          for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (option.value === value) {
              return [option];
            }
            if (option.options) {
              var selectedOptions = this.getSelectedOptionsByValue(option.options, value);
              if (selectedOptions) {
                return __spreadArray([option], selectedOptions, true);
              }
            }
          }
        },
        updateTabs: function() {
          var _this = this;
          var options = this.data.options;
          var innerValue = this.innerValue;
          if (!options.length) {
            return;
          }
          if (innerValue !== void 0) {
            var selectedOptions = this.getSelectedOptionsByValue(options, innerValue);
            if (selectedOptions) {
              var optionsCursor_1 = options;
              var tabs_1 = selectedOptions.map(function(option) {
                var tab = {
                  options: optionsCursor_1,
                  selected: option
                };
                var next = optionsCursor_1.find(function(item) {
                  return item.value === option.value;
                });
                if (next) {
                  optionsCursor_1 = next.options;
                }
                return tab;
              });
              if (optionsCursor_1) {
                tabs_1.push({
                  options: optionsCursor_1,
                  selected: null
                });
              }
              this.setData({
                tabs: tabs_1
              });
              wx.nextTick(function() {
                _this.setData({
                  activeTab: tabs_1.length - 1
                });
              });
              return;
            }
          }
          this.setData({
            tabs: [
              {
                options,
                selected: null
              }
            ],
            activeTab: 0
          });
        },
        onClose: function() {
          this.$emit("close");
        },
        onClickTab: function(e) {
          var _a = e.detail, tabIndex = _a.index, title = _a.title;
          this.$emit("click-tab", { title, tabIndex });
          this.setData({
            activeTab: tabIndex
          });
        },
        // 选中
        onSelect: function(e) {
          var _this = this;
          var _a = e.currentTarget.dataset, option = _a.option, tabIndex = _a.tabIndex;
          if (option && option.disabled) {
            return;
          }
          var tabs = this.data.tabs;
          tabs[tabIndex].selected = option;
          if (tabs.length > tabIndex + 1) {
            tabs = tabs.slice(0, tabIndex + 1);
          }
          if (option.options) {
            var nextTab = {
              options: option.options,
              selected: null
            };
            if (tabs[tabIndex + 1]) {
              tabs[tabIndex + 1] = nextTab;
            } else {
              tabs.push(nextTab);
            }
            wx.nextTick(function() {
              _this.setData({
                activeTab: tabIndex + 1
              });
            });
          }
          this.setData({
            tabs
          });
          var selectedOptions = tabs.map(function(tab) {
            return tab.selected;
          }).filter(Boolean);
          var value = option.value;
          var params = {
            value,
            tabIndex,
            selectedOptions
          };
          this.innerValue = value;
          this.$emit("change", params);
          if (!option.options) {
            this.$emit("finish", params);
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FzY2FkZXIvaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FzY2FkZXIvaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2Nhc2NhZGVyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWNhc2NhZGVyX19oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc21hcnQtY2FzY2FkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnNtYXJ0LWNhc2NhZGVyX19jbG9zZS1pY29uIHtcbiAgY29sb3I6ICNjOGM5Y2M7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uc21hcnQtY2FzY2FkZXJfX3RhYnMtd3JhcCB7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn1cblxuLnNtYXJ0LWNhc2NhZGVyX190YWIge1xuICAtLXRhYnMtY2FyZC10ZXh0LWNvbG9yOiB2YXIoLS1jYXNjYWRlci10YWItY29sb3IsIHZhcigtLWFwcC1CNi1OMSwgIzAwMCkpO1xuICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLnNtYXJ0LWNhc2NhZGVyX190YWItLXVuc2VsZWN0ZWQge1xuICBjb2xvcjogIzk2OTc5OSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFydC1jYXNjYWRlcl9fb3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNtYXJ0LWNhc2NhZGVyX19vcHRpb246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcbn1cblxuLnNtYXJ0LWNhc2NhZGVyX19vcHRpb24tLXNlbGVjdGVkIHtcbiAgY29sb3I6ICMxOTg5ZmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zbWFydC1jYXNjYWRlcl9fb3B0aW9uLS1kaXNhYmxlZCB7XG4gIGNvbG9yOiAjYzhjOWNjO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc21hcnQtY2FzY2FkZXJfX29wdGlvbi0tZGlzYWJsZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbn1cblxuLnNtYXJ0LWNhc2NhZGVyX19vcHRpb25zIHtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDM4NHB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3T3pzN096dEJRVUZwU0RzN096czdPMEZCUVhWRk96czdPenM3UVVGQmNVVTdPenM3TzBGQlFTdEVPenM3T3pzN08wRkJRV3RMT3pzN096dEJRVUZ0UmpzN096czdPenM3T3p0QlFVRjFTanM3T3p0QlFVRjNSRHM3T3pzN1FVRkJaMFU3T3pzN08wRkJRVzFGT3pzN08wRkJRV3RGSWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDI1dlpHVmZiVzlrZFd4bGN5OUFkSFY1WVMxdGFXNXBZWEJ3TDNOdFlYSjBMWFZwTDJ4cFlpOWpZWE5qWVdSbGNpOXBibVJsZUM1amMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpUUdsdGNHOXlkQ0FuTGk0dlkyOXRiVzl1TDJsdVpHVjRMbU56Y3ljN0xuTnRZWEowTFdOaGMyTmhaR1Z5WDE5b1pXRmtaWEo3WVd4cFoyNHRhWFJsYlhNNlkyVnVkR1Z5TzJScGMzQnNZWGs2Wm14bGVEdG9aV2xuYUhRNk5EaHdlRHRxZFhOMGFXWjVMV052Ym5SbGJuUTZjM0JoWTJVdFltVjBkMlZsYmp0d1lXUmthVzVuT2pBZ01UWndlSDB1YzIxaGNuUXRZMkZ6WTJGa1pYSmZYM1JwZEd4bGUyWnZiblF0YzJsNlpUb3hObkI0TzJadmJuUXRkMlZwWjJoME9qWXdNRHRzYVc1bExXaGxhV2RvZERveU1IQjRmUzV6YldGeWRDMWpZWE5qWVdSbGNsOWZZMnh2YzJVdGFXTnZibnRqYjJ4dmNqb2pZemhqT1dOak8yWnZiblF0YzJsNlpUb3lNbkI0TzJobGFXZG9kRG95TW5CNGZTNXpiV0Z5ZEMxallYTmpZV1JsY2w5ZmRHRmljeTEzY21Gd2UyaGxhV2RvZERvME9IQjRJV2x0Y0c5eWRHRnVkRHR3WVdSa2FXNW5PakFnT0hCNGZTNXpiV0Z5ZEMxallYTmpZV1JsY2w5ZmRHRmlleTB0ZEdGaWN5MWpZWEprTFhSbGVIUXRZMjlzYjNJNmRtRnlLQzB0WTJGelkyRmtaWEl0ZEdGaUxXTnZiRzl5TEhaaGNpZ3RMV0Z3Y0MxQ05pMU9NU3dqTURBd0tTazdabXhsZURwdWIyNWxJV2x0Y0c5eWRHRnVkRHRtYjI1MExYZGxhV2RvZERvMk1EQWhhVzF3YjNKMFlXNTBPM0JoWkdScGJtYzZNQ0E0Y0hnaGFXMXdiM0owWVc1MGZTNXpiV0Z5ZEMxallYTmpZV1JsY2w5ZmRHRmlMUzExYm5ObGJHVmpkR1ZrZTJOdmJHOXlPaU01TmprM09Ua2hhVzF3YjNKMFlXNTBPMlp2Ym5RdGQyVnBaMmgwT2pRd01DRnBiWEJ2Y25SaGJuUjlMbk50WVhKMExXTmhjMk5oWkdWeVgxOXZjSFJwYjI1N1lXeHBaMjR0YVhSbGJYTTZZMlZ1ZEdWeU8yTjFjbk52Y2pwd2IybHVkR1Z5TzJScGMzQnNZWGs2Wm14bGVEdG1iMjUwTFhOcGVtVTZNVFJ3ZUR0cWRYTjBhV1o1TFdOdmJuUmxiblE2YzNCaFkyVXRZbVYwZDJWbGJqdHNhVzVsTFdobGFXZG9kRG95TUhCNE8zQmhaR1JwYm1jNk1UQndlQ0F4Tm5CNGZTNXpiV0Z5ZEMxallYTmpZV1JsY2w5ZmIzQjBhVzl1T21GamRHbDJaWHRpWVdOclozSnZkVzVrTFdOdmJHOXlPaU5tTW1ZelpqVjlMbk50WVhKMExXTmhjMk5oWkdWeVgxOXZjSFJwYjI0dExYTmxiR1ZqZEdWa2UyTnZiRzl5T2lNeE9UZzVabUU3Wm05dWRDMTNaV2xuYUhRNk5qQXdmUzV6YldGeWRDMWpZWE5qWVdSbGNsOWZiM0IwYVc5dUxTMWthWE5oWW14bFpIdGpiMnh2Y2pvall6aGpPV05qTzJOMWNuTnZjanB1YjNRdFlXeHNiM2RsWkgwdWMyMWhjblF0WTJGelkyRmtaWEpmWDI5d2RHbHZiaTB0WkdsellXSnNaV1E2WVdOMGFYWmxlMkpoWTJ0bmNtOTFibVF0WTI5c2IzSTZhVzVwZEdsaGJIMHVjMjFoY25RdFkyRnpZMkZrWlhKZlgyOXdkR2x2Ym5ON0xYZGxZbXRwZEMxdmRtVnlabXh2ZHkxelkzSnZiR3hwYm1jNmRHOTFZMmc3WW05NExYTnBlbWx1WnpwaWIzSmtaWEl0WW05NE8yaGxhV2RvZERvek9EUndlRHR2ZG1WeVpteHZkeTE1T21GMWRHODdjR0ZrWkdsdVp5MTBiM0E2Tm5CNGZTSmRMQ0p1WVcxbGN5STZXMTE5ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ2Nhc2NhZGVyLWluZGV4LWZmODQ4ZicpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgWG1hcmtfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQHR1eWEtbWluaWFwcC9pY29ucy9kaXN0L3N2Zy9YbWFya1wiKSk7XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdQbGVhc2Ugc2VsZWN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnIzE5ODlmYScsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBzd2lwZWFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbGxpcHNpczoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzd2lwZVRocmVzaG9sZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dIZWFkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogWG1hcmtfMS5kZWZhdWx0LFxuICAgICAgICB9LFxuICAgICAgICB1c2VUaXRsZVNsb3Q6IEJvb2xlYW4sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYnM6IFtdLFxuICAgICAgICBhY3RpdmVUYWI6IDAsXG4gICAgICAgIGlubmVyVmFsdWU6ICcnLFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgb3B0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ld1ZhbCk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGFicygpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZGF0YS50YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7IHJldHVybiB0YWIuc2VsZWN0ZWQgJiYgdGFiLnNlbGVjdGVkLnZhbHVlOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmluZGV4T2YodmFsKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWw7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhYnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U2VsZWN0ZWRPcHRpb25zQnlWYWx1ZTogZnVuY3Rpb24gKG9wdGlvbnMsIHZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW29wdGlvbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24ub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnNCeVZhbHVlKG9wdGlvbi5vcHRpb25zLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KFtvcHRpb25dLCBzZWxlY3RlZE9wdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUYWJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmRhdGEub3B0aW9ucztcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gdGhpcy5pbm5lclZhbHVlO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbm5lclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvbnNCeVZhbHVlKG9wdGlvbnMsIGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnNDdXJzb3JfMSA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJzXzEgPSBzZWxlY3RlZE9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc0N1cnNvcl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBvcHRpb25zQ3Vyc29yXzEuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0N1cnNvcl8xID0gbmV4dC5vcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zQ3Vyc29yXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNfMS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zQ3Vyc29yXzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiczogdGFic18xLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJzXzEubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja1RhYjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGUuZGV0YWlsLCB0YWJJbmRleCA9IF9hLmluZGV4LCB0aXRsZSA9IF9hLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stdGFiJywgeyB0aXRsZTogdGl0bGUsIHRhYkluZGV4OiB0YWJJbmRleCB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJJbmRleCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBcdTkwMDlcdTRFMkRcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQsIG9wdGlvbiA9IF9hLm9wdGlvbiwgdGFiSW5kZXggPSBfYS50YWJJbmRleDtcbiAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmRhdGEudGFicztcbiAgICAgICAgICAgIHRhYnNbdGFiSW5kZXhdLnNlbGVjdGVkID0gb3B0aW9uO1xuICAgICAgICAgICAgaWYgKHRhYnMubGVuZ3RoID4gdGFiSW5kZXggKyAxKSB7XG4gICAgICAgICAgICAgICAgdGFicyA9IHRhYnMuc2xpY2UoMCwgdGFiSW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb24ub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0VGFiID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb24ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodGFic1t0YWJJbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYnNbdGFiSW5kZXggKyAxXSA9IG5leHRUYWI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWJzLnB1c2gobmV4dFRhYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IHRhYkluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHRhYnM6IHRhYnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbnMgPSB0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7IHJldHVybiB0YWIuc2VsZWN0ZWQ7IH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM6IHNlbGVjdGVkT3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZmluaXNoJywgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxvQkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IsdUJBQXVCO0FBRzNELFFBQUksZ0JBQWlCLFdBQVEsUUFBSyxpQkFBa0IsU0FBVSxJQUFJLE1BQU0sTUFBTTtBQUMxRSxVQUFJLFFBQVEsVUFBVSxXQUFXO0FBQUcsaUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxHQUFHLEtBQUs7QUFDakYsY0FBSSxNQUFNLEVBQUUsS0FBSyxPQUFPO0FBQ3BCLGdCQUFJLENBQUM7QUFBSSxtQkFBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sR0FBRyxDQUFDO0FBQ25ELGVBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUFBLFVBQ2xCO0FBQUEsUUFDSjtBQUNBLGFBQU8sR0FBRyxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFBQSxJQUMzRDtBQUNBLFFBQUksa0JBQW1CLFdBQVEsUUFBSyxtQkFBb0IsU0FBVSxLQUFLO0FBQ25FLGFBQVEsT0FBTyxJQUFJLGFBQWMsTUFBTSxFQUFFLFdBQVcsSUFBSTtBQUFBLElBQzVEO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8s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
