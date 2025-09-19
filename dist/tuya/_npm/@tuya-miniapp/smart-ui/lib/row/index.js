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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/row/index.css
var require_row = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/row/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/row/index.css
var require_row2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/row/index.css"(exports, module) {
    require_row();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/row/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/row/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_row2());
    var Component = overrideComponent("row-index-0bee80");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useChildren)("col", function(target) {
        var gutter = this.data.gutter;
        if (gutter) {
          target.setData({ gutter });
        }
      }),
      props: {
        gutter: {
          type: Number,
          observer: "setGutter"
        }
      },
      methods: {
        setGutter: function() {
          var _this = this;
          this.children.forEach(function(col) {
            col.setData(_this.data);
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcm93L2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3Jvdy9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcm93L2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wRkJRVGhDSWl3aWMyOTFjbU5sY3lJNld5SlZjMlZ5Y3k5bmRXNXpiVzlyWlhJdlJHOWpkVzFsYm5SekwyZHBkQzlEYjI5c2FXNW5UV2x6ZEUxaGRGQmhibVZzTDI1dlpHVmZiVzlrZFd4bGN5OUFkSFY1WVMxdGFXNXBZWEJ3TDNOdFlYSjBMWFZwTDJ4cFlpOXliM2N2YVc1a1pYZ3VZM056SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklrQnBiWEJ2Y25RZ0p5NHVMMk52YlcxdmJpOXBibVJsZUM1amMzTW5PeTV6YldGeWRDMXliM2M2WVdaMFpYSjdZMnhsWVhJNlltOTBhRHRqYjI1MFpXNTBPbHdpWENJN1pHbHpjR3hoZVRwMFlXSnNaWDBpWFN3aWJtRnRaWE1pT2x0ZGZRPT0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXG5pbXBvcnQgb3ZlcnJpZGVDb21wb25lbnQgZnJvbSAnL1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL292ZXJsb2FkTmF0aXZlQ29tcG9uZW50Q29uc3RydWN0b3IudmlydHVhbC5qcyc7XG5jb25zdCBDb21wb25lbnQgPSBvdmVycmlkZUNvbXBvbmVudCgncm93LWluZGV4LTBiZWU4MCcpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgcmVsYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vcmVsYXRpb25cIik7XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICByZWxhdGlvbjogKDAsIHJlbGF0aW9uXzEudXNlQ2hpbGRyZW4pKCdjb2wnLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBndXR0ZXIgPSB0aGlzLmRhdGEuZ3V0dGVyO1xuICAgICAgICBpZiAoZ3V0dGVyKSB7XG4gICAgICAgICAgICB0YXJnZXQuc2V0RGF0YSh7IGd1dHRlcjogZ3V0dGVyIH0pO1xuICAgICAgICB9XG4gICAgfSksXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZ3V0dGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEd1dHRlcicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgY29sLnNldERhdGEoX3RoaXMuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxlQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQixrQkFBa0I7QUFHdEQsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsV0FBVyxHQUFHLFdBQVcsYUFBYSxPQUFPLFNBQVUsUUFBUTtBQUMzRCxZQUFJLFNBQVMsS0FBSyxLQUFLO0FBQ3ZCLFlBQUksUUFBUTtBQUNSLGlCQUFPLFFBQVEsRUFBRSxPQUFlLENBQUM7QUFBQSxRQUNyQztBQUFBLE1BQ0osQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBLFFBQ0gsUUFBUTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDTCxXQUFXLFdBQVk7QUFDbkIsY0FBSSxRQUFRO0FBQ1osZUFBSyxTQUFTLFFBQVEsU0FBVSxLQUFLO0FBQ2pDLGdCQUFJLFFBQVEsTUFBTSxJQUFJO0FBQUEsVUFDMUIsQ0FBQztBQUFBLFFBQ0w7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZV9yb3ciXQp9Cg==
