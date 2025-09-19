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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/radio-group/index.css
var require_radio_group = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/radio-group/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/radio-group/index.css
var require_radio_group2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/radio-group/index.css"(exports, module) {
    require_radio_group();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/radio-group/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/radio-group/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_radio_group2());
    var Component = overrideComponent("radio-group-index-8a83fc");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      field: true,
      relation: (0, relation_1.useChildren)("radio"),
      props: {
        value: {
          type: null,
          observer: "updateChildren"
        },
        direction: String,
        disabled: {
          type: Boolean,
          observer: "updateChildren"
        }
      },
      methods: {
        updateChildren: function() {
          this.children.forEach(function(child) {
            return child.updateFromParent();
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcmFkaW8tZ3JvdXAvaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcmFkaW8tZ3JvdXAvaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3JhZGlvLWdyb3VwL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXJhZGlvLWdyb3VwLS1ob3Jpem9udGFsIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENJaXdpYzI5MWNtTmxjeUk2V3lKVmMyVnljeTluZFc1emJXOXJaWEl2Ukc5amRXMWxiblJ6TDJkcGRDOURiMjlzYVc1blRXbHpkRTFoZEZCaGJtVnNMMjV2WkdWZmJXOWtkV3hsY3k5QWRIVjVZUzF0YVc1cFlYQndMM050WVhKMExYVnBMMnhwWWk5eVlXUnBieTFuY205MWNDOXBibVJsZUM1amMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpUUdsdGNHOXlkQ0FuTGk0dlkyOXRiVzl1TDJsdVpHVjRMbU56Y3ljN0xuTnRZWEowTFhKaFpHbHZMV2R5YjNWd0xTMW9iM0pwZW05dWRHRnNlMlJwYzNCc1lYazZabXhsZUR0bWJHVjRMWGR5WVhBNmQzSmhjSDBpWFN3aWJtRnRaWE1pT2x0ZGZRPT0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXG5pbXBvcnQgb3ZlcnJpZGVDb21wb25lbnQgZnJvbSAnL1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL292ZXJsb2FkTmF0aXZlQ29tcG9uZW50Q29uc3RydWN0b3IudmlydHVhbC5qcyc7XG5jb25zdCBDb21wb25lbnQgPSBvdmVycmlkZUNvbXBvbmVudCgncmFkaW8tZ3JvdXAtaW5kZXgtOGE4M2ZjJyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciByZWxhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9yZWxhdGlvblwiKTtcbigwLCBjb21wb25lbnRfMS5TbWFydENvbXBvbmVudCkoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiAoMCwgcmVsYXRpb25fMS51c2VDaGlsZHJlbikoJ3JhZGlvJyksXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aW9uOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC51cGRhdGVGcm9tUGFyZW50KCk7IH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLHVCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQiwwQkFBMEI7QUFHOUQsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsT0FBTztBQUFBLE1BQ1AsV0FBVyxHQUFHLFdBQVcsYUFBYSxPQUFPO0FBQUEsTUFDN0MsT0FBTztBQUFBLFFBQ0gsT0FBTztBQUFBLFVBQ0gsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsTUFDSjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsZ0JBQWdCLFdBQVk7QUFDeEIsZUFBSyxTQUFTLFFBQVEsU0FBVSxPQUFPO0FBQUUsbUJBQU8sTUFBTSxpQkFBaUI7QUFBQSxVQUFHLENBQUM7QUFBQSxRQUMvRTtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX3JhZGlvX2dyb3VwIl0KfQo=
