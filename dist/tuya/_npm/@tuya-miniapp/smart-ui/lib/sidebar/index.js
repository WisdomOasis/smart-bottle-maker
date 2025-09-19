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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sidebar/index.css
var require_sidebar = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sidebar/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sidebar/index.css
var require_sidebar2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sidebar/index.css"(exports, module) {
    require_sidebar();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sidebar/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/sidebar/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_sidebar2());
    var Component = overrideComponent("sidebar-index-ffd8c3");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useChildren)("sidebar-item", function() {
        this.setActive(this.data.activeKey);
      }),
      props: {
        activeKey: {
          type: Number,
          value: 0,
          observer: "setActive"
        }
      },
      beforeCreate: function() {
        this.currentActive = -1;
      },
      methods: {
        setActive: function(activeKey) {
          var _a = this, children = _a.children, currentActive = _a.currentActive;
          if (!children.length) {
            return Promise.resolve();
          }
          this.currentActive = activeKey;
          var stack = [];
          if (currentActive !== activeKey && children[currentActive]) {
            stack.push(children[currentActive].setActive(false));
          }
          if (children[activeKey]) {
            stack.push(children[activeKey].setActive(true));
          }
          return Promise.all(stack);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvc2lkZWJhci9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9zaWRlYmFyL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9zaWRlYmFyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXNpZGViYXIge1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCwgODBweCk7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ0lpd2ljMjkxY21ObGN5STZXeUpWYzJWeWN5OW5kVzV6Ylc5clpYSXZSRzlqZFcxbGJuUnpMMmRwZEM5RGIyOXNhVzVuVFdsemRFMWhkRkJoYm1Wc0wyNXZaR1ZmYlc5a2RXeGxjeTlBZEhWNVlTMXRhVzVwWVhCd0wzTnRZWEowTFhWcEwyeHBZaTl6YVdSbFltRnlMMmx1WkdWNExtTnpjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKQWFXMXdiM0owSUNjdUxpOWpiMjF0YjI0dmFXNWtaWGd1WTNOekp6c3VjMjFoY25RdGMybGtaV0poY250M2FXUjBhRHAyWVhJb0xTMXphV1JsWW1GeUxYZHBaSFJvTERnd2NIZ3BmU0pkTENKdVlXMWxjeUk2VzExOSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdzaWRlYmFyLWluZGV4LWZmZDhjMycpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgcmVsYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vcmVsYXRpb25cIik7XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICByZWxhdGlvbjogKDAsIHJlbGF0aW9uXzEudXNlQ2hpbGRyZW4pKCdzaWRlYmFyLWl0ZW0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmVLZXkpO1xuICAgIH0pLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZUtleToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEFjdGl2ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gLTE7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEFjdGl2ZTogZnVuY3Rpb24gKGFjdGl2ZUtleSkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgY3VycmVudEFjdGl2ZSA9IF9hLmN1cnJlbnRBY3RpdmU7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IGFjdGl2ZUtleTtcbiAgICAgICAgICAgIHZhciBzdGFjayA9IFtdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgIT09IGFjdGl2ZUtleSAmJiBjaGlsZHJlbltjdXJyZW50QWN0aXZlXSkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGRyZW5bY3VycmVudEFjdGl2ZV0uc2V0QWN0aXZlKGZhbHNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5bYWN0aXZlS2V5XSkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGRyZW5bYWN0aXZlS2V5XS5zZXRBY3RpdmUodHJ1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxtQkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0Isc0JBQXNCO0FBRzFELFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxRQUFJLGNBQWM7QUFDbEIsUUFBSSxhQUFhO0FBQ2pCLEtBQUMsR0FBRyxZQUFZLGdCQUFnQjtBQUFBLE1BQzVCLFdBQVcsR0FBRyxXQUFXLGFBQWEsZ0JBQWdCLFdBQVk7QUFDOUQsYUFBSyxVQUFVLEtBQUssS0FBSyxTQUFTO0FBQUEsTUFDdEMsQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBLFFBQ0gsV0FBVztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFFBQ2Q7QUFBQSxNQUNKO0FBQUEsTUFDQSxjQUFjLFdBQVk7QUFDdEIsYUFBSyxnQkFBZ0I7QUFBQSxNQUN6QjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsV0FBVyxTQUFVLFdBQVc7QUFDNUIsY0FBSSxLQUFLLE1BQU0sV0FBVyxHQUFHLFVBQVUsZ0JBQWdCLEdBQUc7QUFDMUQsY0FBSSxDQUFDLFNBQVMsUUFBUTtBQUNsQixtQkFBTyxRQUFRLFFBQVE7QUFBQSxVQUMzQjtBQUNBLGVBQUssZ0JBQWdCO0FBQ3JCLGNBQUksUUFBUSxDQUFDO0FBQ2IsY0FBSSxrQkFBa0IsYUFBYSxTQUFTLGFBQWEsR0FBRztBQUN4RCxrQkFBTSxLQUFLLFNBQVMsYUFBYSxFQUFFLFVBQVUsS0FBSyxDQUFDO0FBQUEsVUFDdkQ7QUFDQSxjQUFJLFNBQVMsU0FBUyxHQUFHO0FBQ3JCLGtCQUFNLEtBQUssU0FBUyxTQUFTLEVBQUUsVUFBVSxJQUFJLENBQUM7QUFBQSxVQUNsRDtBQUNBLGlCQUFPLFFBQVEsSUFBSSxLQUFLO0FBQUEsUUFDNUI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZV9zaWRlYmFyIl0KfQo=
