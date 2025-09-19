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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar/index.css
var require_tabbar = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar/index.css
var require_tabbar2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar/index.css"(exports, module) {
    require_tabbar();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabbar/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_tabbar2());
    var Component = overrideComponent("tabbar-index-d385ca");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    var utils_1 = require_utils();
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useChildren)("tabbar-item", function() {
        this.updateChildren();
      }),
      props: {
        active: {
          type: null,
          observer: "updateChildren"
        },
        activeColor: {
          type: String,
          observer: "updateChildren",
          value: "var(--app-M1)"
        },
        inactiveColor: {
          type: String,
          observer: "updateChildren"
        },
        fixed: {
          type: Boolean,
          value: true,
          observer: "setHeight"
        },
        placeholder: {
          type: Boolean,
          observer: "setHeight"
        },
        border: {
          type: Boolean,
          value: false
        },
        zIndex: {
          type: Number,
          value: 1
        },
        safeAreaInsetBottom: {
          type: Boolean,
          value: true
        }
      },
      data: {
        height: 50
      },
      methods: {
        updateChildren: function() {
          var children = this.children;
          if (!Array.isArray(children) || !children.length) {
            return;
          }
          children.forEach(function(child) {
            return child.updateFromParent();
          });
        },
        setHeight: function() {
          var _this = this;
          if (!this.data.fixed || !this.data.placeholder) {
            return;
          }
          wx.nextTick(function() {
            (0, utils_1.getRect)(_this, ".smart-tabbar").then(function(res) {
              _this.setData({ height: res.height });
            });
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFiYmFyL2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3RhYmJhci9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFiYmFyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXRhYmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmJhci1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1hcHAtQjUsICNmNmY3ZmIpKTtcbiAgYm94LXNpemluZzogaW5pdGlhbDtcbiAgaGVpZ2h0OiB2YXIoLS10YWJiYXItaGVpZ2h0LCA1NXB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbWFydC10YWJiYXItLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zbWFydC10YWJiYXItLXNhZmUge1xuICBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xufVxuXG4uc21hcnQtdGFiYmFyLS1ib3JkZXIge1xuICBib3gtc2hhZG93OiAwIC0uNXB4IDAgMCB2YXIoLS10YWJiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1hcHAtQjYtTjcsIHJnYmEoMCwgMCwgMCwgLjEpKSk7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ096czdPenM3T3p0QlFVRm5TenM3T3pzN08wRkJRVzlFT3pzN08wRkJRU3RFSWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDI1dlpHVmZiVzlrZFd4bGN5OUFkSFY1WVMxdGFXNXBZWEJ3TDNOdFlYSjBMWFZwTDJ4cFlpOTBZV0ppWVhJdmFXNWtaWGd1WTNOeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJa0JwYlhCdmNuUWdKeTR1TDJOdmJXMXZiaTlwYm1SbGVDNWpjM01uT3k1emJXRnlkQzEwWVdKaVlYSjdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqcDJZWElvTFMxMFlXSmlZWEl0WW1GamEyZHliM1Z1WkMxamIyeHZjaXgyWVhJb0xTMWhjSEF0UWpVc0kyWTJaamRtWWlrcE8ySnZlQzF6YVhwcGJtYzZhVzVwZEdsaGJEdGthWE53YkdGNU9tWnNaWGc3YUdWcFoyaDBPblpoY2lndExYUmhZbUpoY2kxb1pXbG5hSFFzTlRWd2VDazdkMmxrZEdnNk1UQXdKWDB1YzIxaGNuUXRkR0ZpWW1GeUxTMW1hWGhsWkh0aWIzUjBiMjA2TUR0c1pXWjBPakE3Y0c5emFYUnBiMjQ2Wm1sNFpXUjlMbk50WVhKMExYUmhZbUpoY2kwdGMyRm1aWHR3WVdSa2FXNW5MV0p2ZEhSdmJUcGxibllvYzJGbVpTMWhjbVZoTFdsdWMyVjBMV0p2ZEhSdmJTbDlMbk50WVhKMExYUmhZbUpoY2kwdFltOXlaR1Z5ZTJKdmVDMXphR0ZrYjNjNk1DQXRMalZ3ZUNBd0lEQWdkbUZ5S0MwdGRHRmlZbUZ5TFdKdmNtUmxjaTFqYjJ4dmNpeDJZWElvTFMxaGNIQXRRall0VGpjc2NtZGlZU2d3TERBc01Dd3VNU2twS1gwaVhTd2libUZ0WlhNaU9sdGRmUT09ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ3RhYmJhci1pbmRleC1kMzg1Y2EnKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHJlbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3JlbGF0aW9uXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgcmVsYXRpb246ICgwLCByZWxhdGlvbl8xLnVzZUNoaWxkcmVuKSgndGFiYmFyLWl0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICB9KSxcbiAgICBwcm9wczoge1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nLFxuICAgICAgICAgICAgdmFsdWU6ICd2YXIoLS1hcHAtTTEpJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbicsXG4gICAgICAgIH0sXG4gICAgICAgIGZpeGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEhlaWdodCcsXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRIZWlnaHQnLFxuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQudXBkYXRlRnJvbVBhcmVudCgpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZml4ZWQgfHwgIXRoaXMuZGF0YS5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5nZXRSZWN0KShfdGhpcywgJy5zbWFydC10YWJiYXInKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7IGhlaWdodDogcmVzLmhlaWdodCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsa0JBQUE7QUFBQTtBQUFBO0FBR0EsV0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNIbEI7QUFBQTtBQUNBO0FBRUEsdUJBQU87QUFEUCxRQUFNLFlBQVksa0JBQWtCLHFCQUFxQjtBQUd6RCxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsUUFBSSxjQUFjO0FBQ2xCLFFBQUksYUFBYTtBQUNqQixRQUFJLFVBQVU7QUFDZCxLQUFDLEdBQUcsWUFBWSxnQkFBZ0I7QUFBQSxNQUM1QixXQUFXLEdBQUcsV0FBVyxhQUFhLGVBQWUsV0FBWTtBQUM3RCxhQUFLLGVBQWU7QUFBQSxNQUN4QixDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsUUFDSCxRQUFRO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsYUFBYTtBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUNBLGVBQWU7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDSCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsYUFBYTtBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EscUJBQXFCO0FBQUEsVUFDakIsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDRixRQUFRO0FBQUEsTUFDWjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsZ0JBQWdCLFdBQVk7QUFDeEIsY0FBSSxXQUFXLEtBQUs7QUFDcEIsY0FBSSxDQUFDLE1BQU0sUUFBUSxRQUFRLEtBQUssQ0FBQyxTQUFTLFFBQVE7QUFDOUM7QUFBQSxVQUNKO0FBQ0EsbUJBQVMsUUFBUSxTQUFVLE9BQU87QUFBRSxtQkFBTyxNQUFNLGlCQUFpQjtBQUFBLFVBQUcsQ0FBQztBQUFBLFFBQzFFO0FBQUEsUUFDQSxXQUFXLFdBQVk7QUFDbkIsY0FBSSxRQUFRO0FBQ1osY0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxLQUFLLGFBQWE7QUFDNUM7QUFBQSxVQUNKO0FBQ0EsYUFBRyxTQUFTLFdBQVk7QUFDcEIsYUFBQyxHQUFHLFFBQVEsU0FBUyxPQUFPLGVBQWUsRUFBRSxLQUFLLFNBQVUsS0FBSztBQUM3RCxvQkFBTSxRQUFRLEVBQUUsUUFBUSxJQUFJLE9BQU8sQ0FBQztBQUFBLFlBQ3hDLENBQUM7QUFBQSxVQUNMLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfdGFiYmFyIl0KfQo=
