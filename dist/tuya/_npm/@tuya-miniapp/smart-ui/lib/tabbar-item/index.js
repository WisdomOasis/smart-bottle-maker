import {
  require_relation
} from "/chunk-B4TQ7YND.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar-item/index.css
var require_tabbar_item = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar-item/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar-item/index.css
var require_tabbar_item2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar-item/index.css"(exports, module) {
    require_tabbar_item();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar-item/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar-item/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_tabbar_item2());
    var Component = overrideComponent("tabbar-item-index-19e447");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      props: {
        info: null,
        name: null,
        icon: String,
        dot: Boolean,
        url: {
          type: String,
          value: ""
        },
        linkType: {
          type: String,
          value: "redirectTo"
        },
        iconPrefix: {
          type: String,
          value: "smart-icon"
        }
      },
      relation: (0, relation_1.useParent)("tabbar"),
      data: {
        active: false,
        activeColor: "",
        inactiveColor: ""
      },
      methods: {
        onClick: function() {
          var parent = this.parent;
          if (parent) {
            var index = parent.children.indexOf(this);
            var active = this.data.name || index;
            if (active !== this.data.active) {
              parent.$emit("change", active);
            }
          }
          var _a = this.data, url = _a.url, linkType = _a.linkType;
          if (url && wx[linkType]) {
            return wx[linkType]({ url });
          }
          this.$emit("click");
        },
        updateFromParent: function() {
          var parent = this.parent;
          if (!parent) {
            return;
          }
          var index = parent.children.indexOf(this);
          var parentData = parent.data;
          var data = this.data;
          var active = (data.name || index) === parentData.active;
          var patch = {};
          if (active !== data.active) {
            patch.active = active;
          }
          if (parentData.activeColor !== data.activeColor) {
            patch.activeColor = parentData.activeColor;
          }
          if (parentData.inactiveColor !== data.inactiveColor) {
            patch.inactiveColor = parentData.inactiveColor;
          }
          if (Object.keys(patch).length > 0) {
            this.setData(patch);
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFiYmFyLWl0ZW0vaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFiYmFyLWl0ZW0vaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3RhYmJhci1pdGVtL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuXG4uc21hcnQtdGFiYmFyLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0tdGFiYmFyLWl0ZW0tdGV4dC1jb2xvciwgdmFyKC0tYXBwLUI2LU41LCByZ2JhKDAsIDAsIDAsIC4zKSkpO1xuICBmb250LXNpemU6IHZhcigtLXRhYmJhci1pdGVtLWZvbnQtc2l6ZSwgMTJweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLXRhYmJhci1pdGVtLWxpbmUtaGVpZ2h0LCAxKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbWFydC10YWJiYXItaXRlbV9faWNvbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGFiYmFyLWl0ZW0taWNvbi1zaXplLCAyMnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdGFiYmFyLWl0ZW0tbWFyZ2luLWJvdHRvbSwgNHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21hcnQtdGFiYmFyLWl0ZW1fX2ljb25fX2lubmVyIHtcbiAgbWluLXdpZHRoOiAxZW07XG4gIG1pbi1oZWlnaHQ6IDFlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbWFydC10YWJiYXItaXRlbS0tYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXRhYmJhci1pdGVtLWFjdGl2ZS1jb2xvciwgdmFyKC0tYXBwLU0xLCAjMzY3OGUzKSk7XG59XG5cbi5zbWFydC10YWJiYXItaXRlbV9faW5mbyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wRkJRVGhDT3pzN08wRkJRV0U3T3pzN096czdPenM3TzBGQlFYbFJPenM3T3pzN1FVRkJNRWs3T3pzN096dEJRVUV5UlRzN096dEJRVUYxUmlJc0luTnZkWEpqWlhNaU9sc2lWWE5sY25NdlozVnVjMjF2YTJWeUwwUnZZM1Z0Wlc1MGN5OW5hWFF2UTI5dmJHbHVaMDFwYzNSTllYUlFZVzVsYkM5dWIyUmxYMjF2WkhWc1pYTXZRSFIxZVdFdGJXbHVhV0Z3Y0M5emJXRnlkQzExYVM5c2FXSXZkR0ZpWW1GeUxXbDBaVzB2YVc1a1pYZ3VZM056SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklrQnBiWEJ2Y25RZ0p5NHVMMk52YlcxdmJpOXBibVJsZUM1amMzTW5PenBvYjNOMGUyWnNaWGc2TVgwdWMyMWhjblF0ZEdGaVltRnlMV2wwWlcxN1lXeHBaMjR0YVhSbGJYTTZZMlZ1ZEdWeU8yTnZiRzl5T25aaGNpZ3RMWFJoWW1KaGNpMXBkR1Z0TFhSbGVIUXRZMjlzYjNJc2RtRnlLQzB0WVhCd0xVSTJMVTQxTEhKblltRW9NQ3d3TERBc0xqTXBLU2s3WkdsemNHeGhlVHBtYkdWNE8yWnNaWGd0WkdseVpXTjBhVzl1T21OdmJIVnRianRtYjI1MExYTnBlbVU2ZG1GeUtDMHRkR0ZpWW1GeUxXbDBaVzB0Wm05dWRDMXphWHBsTERFeWNIZ3BPMmhsYVdkb2REb3hNREFsTzJwMWMzUnBabmt0WTI5dWRHVnVkRHBqWlc1MFpYSTdiR2x1WlMxb1pXbG5hSFE2ZG1GeUtDMHRkR0ZpWW1GeUxXbDBaVzB0YkdsdVpTMW9aV2xuYUhRc01TbDlMbk50WVhKMExYUmhZbUpoY2kxcGRHVnRYMTlwWTI5dWUyWnZiblF0YzJsNlpUcDJZWElvTFMxMFlXSmlZWEl0YVhSbGJTMXBZMjl1TFhOcGVtVXNNakp3ZUNrN2JXRnlaMmx1TFdKdmRIUnZiVHAyWVhJb0xTMTBZV0ppWVhJdGFYUmxiUzF0WVhKbmFXNHRZbTkwZEc5dExEUndlQ2s3Y0c5emFYUnBiMjQ2Y21Wc1lYUnBkbVY5TG5OdFlYSjBMWFJoWW1KaGNpMXBkR1Z0WDE5cFkyOXVYMTlwYm01bGNudGthWE53YkdGNU9tSnNiMk5yTzIxcGJpMW9aV2xuYUhRNk1XVnRPMjFwYmkxM2FXUjBhRG94WlcxOUxuTnRZWEowTFhSaFltSmhjaTFwZEdWdExTMWhZM1JwZG1WN1kyOXNiM0k2ZG1GeUtDMHRkR0ZpWW1GeUxXbDBaVzB0WVdOMGFYWmxMV052Ykc5eUxIWmhjaWd0TFdGd2NDMU5NU3dqTXpZM09HVXpLU2w5TG5OdFlYSjBMWFJoWW1KaGNpMXBkR1Z0WDE5cGJtWnZlMjFoY21kcGJpMTBiM0E2TW5CNGZTSmRMQ0p1WVcxbGN5STZXMTE5ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ3RhYmJhci1pdGVtLWluZGV4LTE5ZTQ0NycpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgcmVsYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vcmVsYXRpb25cIik7XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICBwcm9wczoge1xuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGRvdDogQm9vbGVhbixcbiAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtUeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JlZGlyZWN0VG8nLFxuICAgICAgICB9LFxuICAgICAgICBpY29uUHJlZml4OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NtYXJ0LWljb24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcmVsYXRpb246ICgwLCByZWxhdGlvbl8xLnVzZVBhcmVudCkoJ3RhYmJhcicpLFxuICAgIGRhdGE6IHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlQ29sb3I6ICcnLFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiAnJyxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmRhdGEubmFtZSB8fCBpbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgYWN0aXZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHVybCA9IF9hLnVybCwgbGlua1R5cGUgPSBfYS5saW5rVHlwZTtcbiAgICAgICAgICAgIGlmICh1cmwgJiYgd3hbbGlua1R5cGVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHd4W2xpbmtUeXBlXSh7IHVybDogdXJsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRnJvbVBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnREYXRhID0gcGFyZW50LmRhdGE7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSAoZGF0YS5uYW1lIHx8IGluZGV4KSA9PT0gcGFyZW50RGF0YS5hY3RpdmU7XG4gICAgICAgICAgICB2YXIgcGF0Y2ggPSB7fTtcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IGRhdGEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2guYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmVudERhdGEuYWN0aXZlQ29sb3IgIT09IGRhdGEuYWN0aXZlQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBwYXRjaC5hY3RpdmVDb2xvciA9IHBhcmVudERhdGEuYWN0aXZlQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50RGF0YS5pbmFjdGl2ZUNvbG9yICE9PSBkYXRhLmluYWN0aXZlQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBwYXRjaC5pbmFjdGl2ZUNvbG9yID0gcGFyZW50RGF0YS5pbmFjdGl2ZUNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhdGNoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHBhdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSx1QkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IsMEJBQTBCO0FBRzlELFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxRQUFJLGNBQWM7QUFDbEIsUUFBSSxhQUFhO0FBQ2pCLEtBQUMsR0FBRyxZQUFZLGdCQUFnQjtBQUFBLE1BQzVCLE9BQU87QUFBQSxRQUNILE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxVQUNELE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsTUFDQSxXQUFXLEdBQUcsV0FBVyxXQUFXLFFBQVE7QUFBQSxNQUM1QyxNQUFNO0FBQUEsUUFDRixRQUFRO0FBQUEsUUFDUixhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsTUFDbkI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNMLFNBQVMsV0FBWTtBQUNqQixjQUFJLFNBQVMsS0FBSztBQUNsQixjQUFJLFFBQVE7QUFDUixnQkFBSSxRQUFRLE9BQU8sU0FBUyxRQUFRLElBQUk7QUFDeEMsZ0JBQUksU0FBUyxLQUFLLEtBQUssUUFBUTtBQUMvQixnQkFBSSxXQUFXLEtBQUssS0FBSyxRQUFRO0FBQzdCLHFCQUFPLE1BQU0sVUFBVSxNQUFNO0FBQUEsWUFDakM7QUFBQSxVQUNKO0FBQ0EsY0FBSSxLQUFLLEtBQUssTUFBTSxNQUFNLEdBQUcsS0FBSyxXQUFXLEdBQUc7QUFDaEQsY0FBSSxPQUFPLEdBQUcsUUFBUSxHQUFHO0FBQ3JCLG1CQUFPLEdBQUcsUUFBUSxFQUFFLEVBQUUsSUFBUyxDQUFDO0FBQUEsVUFDcEM7QUFDQSxlQUFLLE1BQU0sT0FBTztBQUFBLFFBQ3RCO0FBQUEsUUFDQSxrQkFBa0IsV0FBWTtBQUMxQixjQUFJLFNBQVMsS0FBSztBQUNsQixjQUFJLENBQUMsUUFBUTtBQUNUO0FBQUEsVUFDSjtBQUNBLGNBQUksUUFBUSxPQUFPLFNBQVMsUUFBUSxJQUFJO0FBQ3hDLGNBQUksYUFBYSxPQUFPO0FBQ3hCLGNBQUksT0FBTyxLQUFLO0FBQ2hCLGNBQUksVUFBVSxLQUFLLFFBQVEsV0FBVyxXQUFXO0FBQ2pELGNBQUksUUFBUSxDQUFDO0FBQ2IsY0FBSSxXQUFXLEtBQUssUUFBUTtBQUN4QixrQkFBTSxTQUFTO0FBQUEsVUFDbkI7QUFDQSxjQUFJLFdBQVcsZ0JBQWdCLEtBQUssYUFBYTtBQUM3QyxrQkFBTSxjQUFjLFdBQVc7QUFBQSxVQUNuQztBQUNBLGNBQUksV0FBVyxrQkFBa0IsS0FBSyxlQUFlO0FBQ2pELGtCQUFNLGdCQUFnQixXQUFXO0FBQUEsVUFDckM7QUFDQSxjQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUUsU0FBUyxHQUFHO0FBQy9CLGlCQUFLLFFBQVEsS0FBSztBQUFBLFVBQ3RCO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX3RhYmJhcl9pdGVtIl0KfQo=
