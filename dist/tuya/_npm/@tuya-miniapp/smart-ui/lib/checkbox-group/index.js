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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/checkbox-group/index.css
var require_checkbox_group = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/checkbox-group/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/checkbox-group/index.css
var require_checkbox_group2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/checkbox-group/index.css"(exports, module) {
    require_checkbox_group();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/checkbox-group/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/checkbox-group/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_checkbox_group2());
    var Component = overrideComponent("checkbox-group-index-4aa2f2");
    Object.defineProperty(exports, "__esModule", { value: true });
    var relation_1 = require_relation();
    var component_1 = require_component();
    (0, component_1.SmartComponent)({
      field: true,
      relation: (0, relation_1.useChildren)("checkbox", function(target) {
        this.updateChild(target);
      }),
      props: {
        max: Number,
        value: {
          type: Array,
          observer: "updateChildren"
        },
        disabled: {
          type: Boolean,
          observer: "updateChildren"
        },
        direction: {
          type: String,
          value: "vertical"
        }
      },
      methods: {
        updateChildren: function() {
          var _this = this;
          this.children.forEach(function(child) {
            return _this.updateChild(child);
          });
        },
        updateChild: function(child) {
          var _a = this.data, value = _a.value, disabled = _a.disabled, direction = _a.direction;
          child.setData({
            value: value.indexOf(child.dataset.name) !== -1,
            parentDisabled: disabled,
            direction
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2hlY2tib3gtZ3JvdXAvaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2hlY2tib3gtZ3JvdXAvaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NoZWNrYm94LWdyb3VwL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWNoZWNrYm94LWdyb3VwLS1ob3Jpem9udGFsIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENJaXdpYzI5MWNtTmxjeUk2V3lKVmMyVnljeTluZFc1emJXOXJaWEl2Ukc5amRXMWxiblJ6TDJkcGRDOURiMjlzYVc1blRXbHpkRTFoZEZCaGJtVnNMMjV2WkdWZmJXOWtkV3hsY3k5QWRIVjVZUzF0YVc1cFlYQndMM050WVhKMExYVnBMMnhwWWk5amFHVmphMkp2ZUMxbmNtOTFjQzlwYm1SbGVDNWpjM01pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVFHbHRjRzl5ZENBbkxpNHZZMjl0Ylc5dUwybHVaR1Y0TG1OemN5YzdMbk50WVhKMExXTm9aV05yWW05NExXZHliM1Z3TFMxb2IzSnBlbTl1ZEdGc2UyUnBjM0JzWVhrNlpteGxlRHRtYkdWNExYZHlZWEE2ZDNKaGNIMGlYU3dpYm1GdFpYTWlPbHRkZlE9PSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdjaGVja2JveC1ncm91cC1pbmRleC00YWEyZjInKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWxhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9yZWxhdGlvblwiKTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246ICgwLCByZWxhdGlvbl8xLnVzZUNoaWxkcmVuKSgnY2hlY2tib3gnLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGQodGFyZ2V0KTtcbiAgICB9KSxcbiAgICBwcm9wczoge1xuICAgICAgICBtYXg6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd2ZXJ0aWNhbCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gX3RoaXMudXBkYXRlQ2hpbGQoY2hpbGQpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2hpbGQ6IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB2YWx1ZSA9IF9hLnZhbHVlLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb247XG4gICAgICAgICAgICBjaGlsZC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUuaW5kZXhPZihjaGlsZC5kYXRhc2V0Lm5hbWUpICE9PSAtMSxcbiAgICAgICAgICAgICAgICBwYXJlbnREaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSwwQkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IsNkJBQTZCO0FBR2pFLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxRQUFJLGFBQWE7QUFDakIsUUFBSSxjQUFjO0FBQ2xCLEtBQUMsR0FBRyxZQUFZLGdCQUFnQjtBQUFBLE1BQzVCLE9BQU87QUFBQSxNQUNQLFdBQVcsR0FBRyxXQUFXLGFBQWEsWUFBWSxTQUFVLFFBQVE7QUFDaEUsYUFBSyxZQUFZLE1BQU07QUFBQSxNQUMzQixDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsUUFDSCxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsVUFDSCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFdBQVc7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsZ0JBQWdCLFdBQVk7QUFDeEIsY0FBSSxRQUFRO0FBQ1osZUFBSyxTQUFTLFFBQVEsU0FBVSxPQUFPO0FBQUUsbUJBQU8sTUFBTSxZQUFZLEtBQUs7QUFBQSxVQUFHLENBQUM7QUFBQSxRQUMvRTtBQUFBLFFBQ0EsYUFBYSxTQUFVLE9BQU87QUFDMUIsY0FBSSxLQUFLLEtBQUssTUFBTSxRQUFRLEdBQUcsT0FBTyxXQUFXLEdBQUcsVUFBVSxZQUFZLEdBQUc7QUFDN0UsZ0JBQU0sUUFBUTtBQUFBLFlBQ1YsT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksTUFBTTtBQUFBLFlBQzdDLGdCQUFnQjtBQUFBLFlBQ2hCO0FBQUEsVUFDSixDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX2NoZWNrYm94X2dyb3VwIl0KfQo=
