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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tab/index.css
var require_tab = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tab/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tab/index.css
var require_tab2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tab/index.css"(exports, module) {
    require_tab();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tab/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tab/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_tab2());
    var Component = overrideComponent("tab-index-3bb045");
    Object.defineProperty(exports, "__esModule", { value: true });
    var relation_1 = require_relation();
    var component_1 = require_component();
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useParent)("tabs"),
      props: {
        dot: {
          type: Boolean,
          observer: "update"
        },
        info: {
          type: null,
          observer: "update"
        },
        title: {
          type: String,
          observer: "update"
        },
        disabled: {
          type: Boolean,
          observer: "update"
        },
        titleStyle: {
          type: String,
          observer: "update"
        },
        name: {
          type: null,
          value: ""
        }
      },
      data: {
        active: false
      },
      methods: {
        getComputedName: function() {
          if (this.data.name !== "") {
            return this.data.name;
          }
          return this.index;
        },
        updateRender: function(active, parent) {
          var parentData = parent.data;
          this.inited = this.inited || active;
          this.setData({
            active,
            shouldRender: parentData.inactiveDestroy ? active : this.inited || !parentData.lazyRender,
            shouldShow: active || parentData.animated
          });
        },
        update: function() {
          if (this.parent) {
            this.parent.updateTabs();
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFiL2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3RhYi9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFiL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuOmhvc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbWFydC10YWJfX3BhbmUge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1hcHAtQjMpKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXRhYi1wYW5lbC10ZXh0LWNvbG9yLCB2YXIoLS1hcHAtQjMtTjEpKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNtYXJ0LXRhYl9fcGFuZS0tYWN0aXZlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc21hcnQtdGFiX19wYW5lLS1pbmFjdGl2ZSB7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ096czdPenM3UVVGQmNVUTdPenM3T3pzN08wRkJRVFJOT3pzN08wRkJRWEZESWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDI1dlpHVmZiVzlrZFd4bGN5OUFkSFY1WVMxdGFXNXBZWEJ3TDNOdFlYSjBMWFZwTDJ4cFlpOTBZV0l2YVc1a1pYZ3VZM056SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklrQnBiWEJ2Y25RZ0p5NHVMMk52YlcxdmJpOXBibVJsZUM1amMzTW5PenBvYjNOMGUySnZlQzF6YVhwcGJtYzZZbTl5WkdWeUxXSnZlRHRtYkdWNExYTm9jbWx1YXpvd08zZHBaSFJvT2pFd01DVjlMbk50WVhKMExYUmhZbDlmY0dGdVpYc3RkMlZpYTJsMExXOTJaWEptYkc5M0xYTmpjbTlzYkdsdVp6cDBiM1ZqYUR0aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T25aaGNpZ3RMWFJoWWkxd1lXNWxiQzFpWVdOclozSnZkVzVrTFdOdmJHOXlMSFpoY2lndExXRndjQzFDTXlrcE8ySnZlQzF6YVhwcGJtYzZZbTl5WkdWeUxXSnZlRHRqYjJ4dmNqcDJZWElvTFMxMFlXSXRjR0Z1Wld3dGRHVjRkQzFqYjJ4dmNpeDJZWElvTFMxaGNIQXRRak10VGpFcEtUdHZkbVZ5Wm14dmR5MTVPbUYxZEc5OUxuTnRZWEowTFhSaFlsOWZjR0Z1WlMwdFlXTjBhWFpsZTJobGFXZG9kRHBoZFhSdmZTNXpiV0Z5ZEMxMFlXSmZYM0JoYm1VdExXbHVZV04wYVhabGUyaGxhV2RvZERvd08yOTJaWEptYkc5M09uWnBjMmxpYkdWOUlsMHNJbTVoYldWeklqcGJYWDA9ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ3RhYi1pbmRleC0zYmIwNDUnKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWxhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9yZWxhdGlvblwiKTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgcmVsYXRpb246ICgwLCByZWxhdGlvbl8xLnVzZVBhcmVudCkoJ3RhYnMnKSxcbiAgICBwcm9wczoge1xuICAgICAgICBkb3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGUnLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZVN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldENvbXB1dGVkTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5uYW1lICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVSZW5kZXI6IGZ1bmN0aW9uIChhY3RpdmUsIHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudERhdGEgPSBwYXJlbnQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGVkID0gdGhpcy5pbml0ZWQgfHwgYWN0aXZlO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXI6IHBhcmVudERhdGEuaW5hY3RpdmVEZXN0cm95ID8gYWN0aXZlIDogdGhpcy5pbml0ZWQgfHwgIXBhcmVudERhdGEubGF6eVJlbmRlcixcbiAgICAgICAgICAgICAgICBzaG91bGRTaG93OiBhY3RpdmUgfHwgcGFyZW50RGF0YS5hbmltYXRlZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVRhYnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxlQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQixrQkFBa0I7QUFHdEQsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksYUFBYTtBQUNqQixRQUFJLGNBQWM7QUFDbEIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsV0FBVyxHQUFHLFdBQVcsV0FBVyxNQUFNO0FBQUEsTUFDMUMsT0FBTztBQUFBLFFBQ0gsS0FBSztBQUFBLFVBQ0QsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNGLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDSCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFlBQVk7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDRixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNGLFFBQVE7QUFBQSxNQUNaO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDTCxpQkFBaUIsV0FBWTtBQUN6QixjQUFJLEtBQUssS0FBSyxTQUFTLElBQUk7QUFDdkIsbUJBQU8sS0FBSyxLQUFLO0FBQUEsVUFDckI7QUFDQSxpQkFBTyxLQUFLO0FBQUEsUUFDaEI7QUFBQSxRQUNBLGNBQWMsU0FBVSxRQUFRLFFBQVE7QUFDcEMsY0FBSSxhQUFhLE9BQU87QUFDeEIsZUFBSyxTQUFTLEtBQUssVUFBVTtBQUM3QixlQUFLLFFBQVE7QUFBQSxZQUNUO0FBQUEsWUFDQSxjQUFjLFdBQVcsa0JBQWtCLFNBQVMsS0FBSyxVQUFVLENBQUMsV0FBVztBQUFBLFlBQy9FLFlBQVksVUFBVSxXQUFXO0FBQUEsVUFDckMsQ0FBQztBQUFBLFFBQ0w7QUFBQSxRQUNBLFFBQVEsV0FBWTtBQUNoQixjQUFJLEtBQUssUUFBUTtBQUNiLGlCQUFLLE9BQU8sV0FBVztBQUFBLFVBQzNCO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX3RhYiJdCn0K
