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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse/index.css
var require_collapse = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse/index.css
var require_collapse2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse/index.css"(exports, module) {
    require_collapse();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/collapse/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_collapse2());
    var Component = overrideComponent("collapse-index-dc92b2");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useChildren)("collapse-item"),
      props: {
        value: {
          type: null,
          observer: "updateExpanded"
        },
        accordion: {
          type: Boolean,
          observer: "updateExpanded"
        },
        border: {
          type: Boolean,
          value: true
        }
      },
      methods: {
        updateExpanded: function() {
          this.children.forEach(function(child) {
            child.updateExpanded();
          });
        },
        switch: function(name, expanded) {
          var _a = this.data, accordion = _a.accordion, value = _a.value;
          var changeItem = name;
          if (!accordion) {
            name = expanded ? (value || []).concat(name) : (value || []).filter(function(activeName) {
              return activeName !== name;
            });
          } else {
            name = expanded ? name : "";
          }
          if (expanded) {
            this.$emit("open", changeItem);
          } else {
            this.$emit("close", changeItem);
          }
          this.$emit("change", name);
          this.$emit("input", name);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY29sbGFwc2UvaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY29sbGFwc2UvaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbGxhcHNlL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFaUxDSnpiM1Z5WTJWeklqcGJJbFZ6WlhKekwyZDFibk50YjJ0bGNpOUViMk4xYldWdWRITXZaMmwwTDBOdmIyeHBibWROYVhOMFRXRjBVR0Z1Wld3dmJtOWtaVjl0YjJSMWJHVnpMMEIwZFhsaExXMXBibWxoY0hBdmMyMWhjblF0ZFdrdmJHbGlMMk52Ykd4aGNITmxMMmx1WkdWNExtTnpjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKQWFXMXdiM0owSUNjdUxpOWpiMjF0YjI0dmFXNWtaWGd1WTNOekp6c2lYU3dpYm1GdFpYTWlPbHRkZlE9PSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdjb2xsYXBzZS1pbmRleC1kYzkyYjInKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHJlbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3JlbGF0aW9uXCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgcmVsYXRpb246ICgwLCByZWxhdGlvbl8xLnVzZUNoaWxkcmVuKSgnY29sbGFwc2UtaXRlbScpLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVFeHBhbmRlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGFjY29yZGlvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlRXhwYW5kZWQnLFxuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlRXhwYW5kZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGVFeHBhbmRlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKG5hbWUsIGV4cGFuZGVkKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGFjY29yZGlvbiA9IF9hLmFjY29yZGlvbiwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VJdGVtID0gbmFtZTtcbiAgICAgICAgICAgIGlmICghYWNjb3JkaW9uKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgID8gKHZhbHVlIHx8IFtdKS5jb25jYXQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiAodmFsdWUgfHwgW10pLmZpbHRlcihmdW5jdGlvbiAoYWN0aXZlTmFtZSkgeyByZXR1cm4gYWN0aXZlTmFtZSAhPT0gbmFtZTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZXhwYW5kZWQgPyBuYW1lIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJywgY2hhbmdlSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIGNoYW5nZUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbmFtZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG5hbWUpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLG9CQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQix1QkFBdUI7QUFHM0QsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsV0FBVyxHQUFHLFdBQVcsYUFBYSxlQUFlO0FBQUEsTUFDckQsT0FBTztBQUFBLFFBQ0gsT0FBTztBQUFBLFVBQ0gsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFdBQVc7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNMLGdCQUFnQixXQUFZO0FBQ3hCLGVBQUssU0FBUyxRQUFRLFNBQVUsT0FBTztBQUNuQyxrQkFBTSxlQUFlO0FBQUEsVUFDekIsQ0FBQztBQUFBLFFBQ0w7QUFBQSxRQUNBLFFBQVEsU0FBVSxNQUFNLFVBQVU7QUFDOUIsY0FBSSxLQUFLLEtBQUssTUFBTSxZQUFZLEdBQUcsV0FBVyxRQUFRLEdBQUc7QUFDekQsY0FBSSxhQUFhO0FBQ2pCLGNBQUksQ0FBQyxXQUFXO0FBQ1osbUJBQU8sWUFDQSxTQUFTLENBQUMsR0FBRyxPQUFPLElBQUksS0FDeEIsU0FBUyxDQUFDLEdBQUcsT0FBTyxTQUFVLFlBQVk7QUFBRSxxQkFBTyxlQUFlO0FBQUEsWUFBTSxDQUFDO0FBQUEsVUFDcEYsT0FDSztBQUNELG1CQUFPLFdBQVcsT0FBTztBQUFBLFVBQzdCO0FBQ0EsY0FBSSxVQUFVO0FBQ1YsaUJBQUssTUFBTSxRQUFRLFVBQVU7QUFBQSxVQUNqQyxPQUNLO0FBQ0QsaUJBQUssTUFBTSxTQUFTLFVBQVU7QUFBQSxVQUNsQztBQUNBLGVBQUssTUFBTSxVQUFVLElBQUk7QUFDekIsZUFBSyxNQUFNLFNBQVMsSUFBSTtBQUFBLFFBQzVCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfY29sbGFwc2UiXQp9Cg==
