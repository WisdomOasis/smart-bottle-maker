import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import {
  require_relation
} from "/chunk-B4TQ7YND.js";
import "/chunk-SOVNIPSZ.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/index.css
var require_collapse_item = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/index.css
var require_collapse_item2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/index.css"(exports, module) {
    require_collapse_item();
    module.exports = {};
  }
});

// node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/animate.js
var require_animate = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/animate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setContentAnimate = void 0;
    var utils_1 = require_utils();
    function useAnimation(context, expanded, mounted, height) {
      var animation = wx.createAnimation({
        duration: 0,
        timingFunction: "ease-in-out"
      });
      if (expanded) {
        if (height === 0) {
          animation.height("auto").top(1).step();
        } else {
          animation.height(height).top(1).step({
            duration: mounted ? 300 : 1
          }).height("auto").step();
        }
        context.setData({
          animation: animation.export()
        });
        return;
      }
      animation.height(height).top(0).step({ duration: 1 }).height(0).step({
        duration: 300
      });
      context.setData({
        animation: animation.export()
      });
    }
    function setContentAnimate(context, expanded, mounted) {
      (0, utils_1.getRect)(context, ".smart-collapse-item__content").then(function(rect) {
        return rect.height;
      }).then(function(height) {
        useAnimation(context, expanded, mounted, height);
      });
    }
    exports.setContentAnimate = setContentAnimate;
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse-item/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_collapse_item2());
    var Component = overrideComponent("collapse-item-index-1d2b0a");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    var animate_1 = require_animate();
    (0, component_1.SmartComponent)({
      classes: ["title-class", "content-class"],
      relation: (0, relation_1.useParent)("collapse"),
      props: {
        size: String,
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
          type: Boolean,
          value: true
        },
        isLink: {
          type: Boolean,
          value: true
        }
      },
      data: {
        expanded: false
      },
      mounted: function() {
        this.updateExpanded();
        this.mounted = true;
      },
      methods: {
        updateExpanded: function() {
          if (!this.parent) {
            return;
          }
          var _a = this.parent.data, value = _a.value, accordion = _a.accordion;
          var _b = this.parent.children, children = _b === void 0 ? [] : _b;
          var name = this.data.name;
          var index = children.indexOf(this);
          var currentName = name == null ? index : name;
          var expanded = accordion ? value === currentName : (value || []).some(function(name2) {
            return name2 === currentName;
          });
          this.setData({ animation: null });
          if (expanded !== this.data.expanded) {
            (0, animate_1.setContentAnimate)(this, expanded, this.mounted);
          }
          this.setData({ index, expanded });
        },
        onClick: function() {
          if (this.data.disabled) {
            return;
          }
          var _a = this.data, name = _a.name, expanded = _a.expanded;
          var index = this.parent.children.indexOf(this);
          var currentName = name == null ? index : name;
          this.parent.switch(currentName, !expanded);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY29sbGFwc2UtaXRlbS9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9jb2xsYXBzZS1pdGVtL2luZGV4LmNzcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY29sbGFwc2UtaXRlbS9hbmltYXRlLmpzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbGxhcHNlLWl0ZW0vaW5kZXguY29tcG9uZW50LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi4vY29tbW9uL2luZGV4LmNzc1wiO1xuXG4uc21hcnQtY29sbGFwc2UtaXRlbV9fdGl0bGUgLnNtYXJ0LWNlbGxfX3JpZ2h0LWljb24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tY29sbGFwc2UtaXRlbS10cmFuc2l0aW9uLWR1cmF0aW9uLCAuM3MpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5zbWFydC1jb2xsYXBzZS1pdGVtX190aXRsZS0tZXhwYW5kZWQgLnNtYXJ0LWNlbGxfX3JpZ2h0LWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4uc21hcnQtY29sbGFwc2UtaXRlbV9fdGl0bGUtLWRpc2FibGVkIC5zbWFydC1jZWxsLCAuc21hcnQtY29sbGFwc2UtaXRlbV9fdGl0bGUtLWRpc2FibGVkIC5zbWFydC1jZWxsX19yaWdodC1pY29uIHtcbiAgY29sb3I6IHZhcigtLWNvbGxhcHNlLWl0ZW0tdGl0bGUtZGlzYWJsZWQtY29sb3IsICNjOGM5Y2MpICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFydC1jb2xsYXBzZS1pdGVtX190aXRsZS0tZGlzYWJsZWQgLnNtYXJ0LWNlbGwtLWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uc21hcnQtY29sbGFwc2UtaXRlbV9fd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbWFydC1jb2xsYXBzZS1pdGVtX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sbGFwc2UtaXRlbS1jb250ZW50LWJhY2tncm91bmQtY29sb3IsIHZhcigtLWFwcC1CNiwgI2ZmZikpO1xuICBjb2xvcjogdmFyKC0tY29sbGFwc2UtaXRlbS1jb250ZW50LXRleHQtY29sb3IsICM5Njk3OTkpO1xuICBmb250LXNpemU6IHZhcigtLWNvbGxhcHNlLWl0ZW0tY29udGVudC1mb250LXNpemUsIDEzcHgpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY29sbGFwc2UtaXRlbS1jb250ZW50LWxpbmUtaGVpZ2h0LCAxLjUpO1xuICBwYWRkaW5nOiB2YXIoLS1jb2xsYXBzZS1pdGVtLWNvbnRlbnQtcGFkZGluZywgMTVweCk7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ096czdPenRCUVVFNFNUczdPenRCUVVGMVJqczdPenRCUVVGclREczdPenRCUVVGNVJqczdPenRCUVVFNFF5SXNJbk52ZFhKalpYTWlPbHNpVlhObGNuTXZaM1Z1YzIxdmEyVnlMMFJ2WTNWdFpXNTBjeTluYVhRdlEyOXZiR2x1WjAxcGMzUk5ZWFJRWVc1bGJDOXViMlJsWDIxdlpIVnNaWE12UUhSMWVXRXRiV2x1YVdGd2NDOXpiV0Z5ZEMxMWFTOXNhV0l2WTI5c2JHRndjMlV0YVhSbGJTOXBibVJsZUM1amMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpUUdsdGNHOXlkQ0FuTGk0dlkyOXRiVzl1TDJsdVpHVjRMbU56Y3ljN0xuTnRZWEowTFdOdmJHeGhjSE5sTFdsMFpXMWZYM1JwZEd4bElDNXpiV0Z5ZEMxalpXeHNYMTl5YVdkb2RDMXBZMjl1ZTNSeVlXNXpabTl5YlRweWIzUmhkR1VvT1RCa1pXY3BPM1J5WVc1emFYUnBiMjQ2ZEhKaGJuTm1iM0p0SUhaaGNpZ3RMV052Ykd4aGNITmxMV2wwWlcwdGRISmhibk5wZEdsdmJpMWtkWEpoZEdsdmJpd3VNM01wZlM1emJXRnlkQzFqYjJ4c1lYQnpaUzFwZEdWdFgxOTBhWFJzWlMwdFpYaHdZVzVrWldRZ0xuTnRZWEowTFdObGJHeGZYM0pwWjJoMExXbGpiMjU3ZEhKaGJuTm1iM0p0T25KdmRHRjBaU2d0T1RCa1pXY3BmUzV6YldGeWRDMWpiMnhzWVhCelpTMXBkR1Z0WDE5MGFYUnNaUzB0WkdsellXSnNaV1FnTG5OdFlYSjBMV05sYkd3c0xuTnRZWEowTFdOdmJHeGhjSE5sTFdsMFpXMWZYM1JwZEd4bExTMWthWE5oWW14bFpDQXVjMjFoY25RdFkyVnNiRjlmY21sbmFIUXRhV052Ym50amIyeHZjanAyWVhJb0xTMWpiMnhzWVhCelpTMXBkR1Z0TFhScGRHeGxMV1JwYzJGaWJHVmtMV052Ykc5eUxDTmpPR001WTJNcElXbHRjRzl5ZEdGdWRIMHVjMjFoY25RdFkyOXNiR0Z3YzJVdGFYUmxiVjlmZEdsMGJHVXRMV1JwYzJGaWJHVmtJQzV6YldGeWRDMWpaV3hzTFMxb2IzWmxjbnRpWVdOclozSnZkVzVrTFdOdmJHOXlPaU5tWm1ZaGFXMXdiM0owWVc1MGZTNXpiV0Z5ZEMxamIyeHNZWEJ6WlMxcGRHVnRYMTkzY21Gd2NHVnllMjkyWlhKbWJHOTNPbWhwWkdSbGJuMHVjMjFoY25RdFkyOXNiR0Z3YzJVdGFYUmxiVjlmWTI5dWRHVnVkSHRpWVdOclozSnZkVzVrTFdOdmJHOXlPblpoY2lndExXTnZiR3hoY0hObExXbDBaVzB0WTI5dWRHVnVkQzFpWVdOclozSnZkVzVrTFdOdmJHOXlMSFpoY2lndExXRndjQzFDTml3alptWm1LU2s3WTI5c2IzSTZkbUZ5S0MwdFkyOXNiR0Z3YzJVdGFYUmxiUzFqYjI1MFpXNTBMWFJsZUhRdFkyOXNiM0lzSXprMk9UYzVPU2s3Wm05dWRDMXphWHBsT25aaGNpZ3RMV052Ykd4aGNITmxMV2wwWlcwdFkyOXVkR1Z1ZEMxbWIyNTBMWE5wZW1Vc01UTndlQ2s3YkdsdVpTMW9aV2xuYUhRNmRtRnlLQzB0WTI5c2JHRndjMlV0YVhSbGJTMWpiMjUwWlc1MExXeHBibVV0YUdWcFoyaDBMREV1TlNrN2NHRmtaR2x1WnpwMllYSW9MUzFqYjJ4c1lYQnpaUzFwZEdWdExXTnZiblJsYm5RdGNHRmtaR2x1Wnl3eE5YQjRLWDBpWFN3aWJtRnRaWE1pT2x0ZGZRPT0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldENvbnRlbnRBbmltYXRlID0gdm9pZCAwO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xuZnVuY3Rpb24gdXNlQW5pbWF0aW9uKGNvbnRleHQsIGV4cGFuZGVkLCBtb3VudGVkLCBoZWlnaHQpIHtcbiAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxuICAgIH0pO1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICBpZiAoaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICBhbmltYXRpb24uaGVpZ2h0KCdhdXRvJykudG9wKDEpLnN0ZXAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIC5oZWlnaHQoaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC50b3AoMSlcbiAgICAgICAgICAgICAgICAuc3RlcCh7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG1vdW50ZWQgPyAzMDAgOiAxLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuaGVpZ2h0KCdhdXRvJylcbiAgICAgICAgICAgICAgICAuc3RlcCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuc2V0RGF0YSh7XG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYW5pbWF0aW9uLmhlaWdodChoZWlnaHQpLnRvcCgwKS5zdGVwKHsgZHVyYXRpb246IDEgfSkuaGVpZ2h0KDApLnN0ZXAoe1xuICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgIH0pO1xuICAgIGNvbnRleHQuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0Q29udGVudEFuaW1hdGUoY29udGV4dCwgZXhwYW5kZWQsIG1vdW50ZWQpIHtcbiAgICAoMCwgdXRpbHNfMS5nZXRSZWN0KShjb250ZXh0LCAnLnNtYXJ0LWNvbGxhcHNlLWl0ZW1fX2NvbnRlbnQnKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjdCkgeyByZXR1cm4gcmVjdC5oZWlnaHQ7IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgICAgICAgdXNlQW5pbWF0aW9uKGNvbnRleHQsIGV4cGFuZGVkLCBtb3VudGVkLCBoZWlnaHQpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zZXRDb250ZW50QW5pbWF0ZSA9IHNldENvbnRlbnRBbmltYXRlO1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ2NvbGxhcHNlLWl0ZW0taW5kZXgtMWQyYjBhJyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciByZWxhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9yZWxhdGlvblwiKTtcbnZhciBhbmltYXRlXzEgPSByZXF1aXJlKFwiLi9hbmltYXRlXCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgY2xhc3NlczogWyd0aXRsZS1jbGFzcycsICdjb250ZW50LWNsYXNzJ10sXG4gICAgcmVsYXRpb246ICgwLCByZWxhdGlvbl8xLnVzZVBhcmVudCkoJ2NvbGxhcHNlJyksXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGlzTGluazoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXhwYW5kZWQoKTtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlRXhwYW5kZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnBhcmVudC5kYXRhLCB2YWx1ZSA9IF9hLnZhbHVlLCBhY2NvcmRpb24gPSBfYS5hY2NvcmRpb247XG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLnBhcmVudC5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYjtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5kYXRhLm5hbWU7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnROYW1lID0gbmFtZSA9PSBudWxsID8gaW5kZXggOiBuYW1lO1xuICAgICAgICAgICAgdmFyIGV4cGFuZGVkID0gYWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgPyB2YWx1ZSA9PT0gY3VycmVudE5hbWVcbiAgICAgICAgICAgICAgICA6ICh2YWx1ZSB8fCBbXSkuc29tZShmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbmFtZSA9PT0gY3VycmVudE5hbWU7IH0pO1xuICAgICAgICAgICAgLy8gXHU2MjY3XHU4ODRDXHU1MkE4XHU3NTNCXHU1MjREXHU2RTA1XHU5NjY0XHU1MTc2XHU0RUQ2XHU2Mjk4XHU1M0UwXHU1NzU3XHU3Njg0XHU1MkE4XHU3NTNCXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBhbmltYXRpb246IG51bGwgfSk7XG4gICAgICAgICAgICBpZiAoZXhwYW5kZWQgIT09IHRoaXMuZGF0YS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICgwLCBhbmltYXRlXzEuc2V0Q29udGVudEFuaW1hdGUpKHRoaXMsIGV4cGFuZGVkLCB0aGlzLm1vdW50ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaW5kZXg6IGluZGV4LCBleHBhbmRlZDogZXhwYW5kZWQgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG5hbWUgPSBfYS5uYW1lLCBleHBhbmRlZCA9IF9hLmV4cGFuZGVkO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TmFtZSA9IG5hbWUgPT0gbnVsbCA/IGluZGV4IDogbmFtZTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN3aXRjaChjdXJyZW50TmFtZSwgIWV4cGFuZGVkKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLHlCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7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Q3pDLGNBQUksV0FBVyxZQUNULFVBQVUsZUFDVCxTQUFTLENBQUMsR0FBRyxLQUFLLFNBQVVDLE9BQU07QUFBRSxtQkFBT0EsVUFBUztBQUFBLFVBQWEsQ0FBQztBQUV6RSxlQUFLLFFBQVEsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUNoQyxjQUFJLGFBQWEsS0FBSyxLQUFLLFVBQVU7QUFDakMsYUFBQyxHQUFHLFVBQVUsbUJBQW1CLE1BQU0sVUFBVSxLQUFLLE9BQU87QUFBQSxVQUNqRTtBQUNBLGVBQUssUUFBUSxFQUFFLE9BQWMsU0FBbUIsQ0FBQztBQUFBLFFBQ3JEO0FBQUEsUUFDQSxTQUFTLFdBQVk7QUFDakIsY0FBSSxLQUFLLEtBQUssVUFBVTtBQUNwQjtBQUFBLFVBQ0o7QUFDQSxjQUFJLEtBQUssS0FBSyxNQUFNLE9BQU8sR0FBRyxNQUFNLFdBQVcsR0FBRztBQUNsRCxjQUFJLFFBQVEsS0FBSyxPQUFPLFNBQVMsUUFBUSxJQUFJO0FBQzdDLGNBQUksY0FBYyxRQUFRLE9BQU8sUUFBUTtBQUN6QyxlQUFLLE9BQU8sT0FBTyxhQUFhLENBQUMsUUFBUTtBQUFBLFFBQzdDO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfY29sbGFwc2VfaXRlbSIsICJuYW1lIl0KfQo=
