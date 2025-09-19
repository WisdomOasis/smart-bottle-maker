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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/grid/index.css
var require_grid = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/grid/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/grid/index.css
var require_grid2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/grid/index.css"(exports, module) {
    require_grid();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/grid/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/grid/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_grid2());
    var Component = overrideComponent("grid-index-e366c0");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useChildren)("grid-item"),
      props: {
        square: {
          type: Boolean,
          observer: "updateChildren"
        },
        gutter: {
          type: null,
          value: 0,
          observer: "updateChildren"
        },
        clickable: {
          type: Boolean,
          observer: "updateChildren"
        },
        columnNum: {
          type: Number,
          value: 4,
          observer: "updateChildren"
        },
        center: {
          type: Boolean,
          value: true,
          observer: "updateChildren"
        },
        border: {
          type: Boolean,
          value: true,
          observer: "updateChildren"
        },
        direction: {
          type: String,
          observer: "updateChildren"
        },
        iconSize: {
          type: String,
          observer: "updateChildren"
        },
        reverse: {
          type: Boolean,
          value: false,
          observer: "updateChildren"
        }
      },
      methods: {
        updateChildren: function() {
          this.children.forEach(function(child) {
            child.updateStyle();
          });
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvZ3JpZC9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9ncmlkL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9ncmlkL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWdyaWQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ0lpd2ljMjkxY21ObGN5STZXeUpWYzJWeWN5OW5kVzV6Ylc5clpYSXZSRzlqZFcxbGJuUnpMMmRwZEM5RGIyOXNhVzVuVFdsemRFMWhkRkJoYm1Wc0wyNXZaR1ZmYlc5a2RXeGxjeTlBZEhWNVlTMXRhVzVwWVhCd0wzTnRZWEowTFhWcEwyeHBZaTluY21sa0wybHVaR1Y0TG1OemN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpBYVcxd2IzSjBJQ2N1TGk5amIyMXRiMjR2YVc1a1pYZ3VZM056SnpzdWMyMWhjblF0WjNKcFpIdGliM2d0YzJsNmFXNW5PbUp2Y21SbGNpMWliM2c3YjNabGNtWnNiM2M2YUdsa1pHVnVPM0J2YzJsMGFXOXVPbkpsYkdGMGFYWmxmU0pkTENKdVlXMWxjeUk2VzExOSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdncmlkLWluZGV4LWUzNjZjMCcpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgcmVsYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vcmVsYXRpb25cIik7XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICByZWxhdGlvbjogKDAsIHJlbGF0aW9uXzEudXNlQ2hpbGRyZW4pKCdncmlkLWl0ZW0nKSxcbiAgICBwcm9wczoge1xuICAgICAgICBzcXVhcmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2thYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbicsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbHVtbk51bToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvblNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nLFxuICAgICAgICB9LFxuICAgICAgICByZXZlcnNlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlU3R5bGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLGdCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQixtQkFBbUI7QUFHdkQsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsV0FBVyxHQUFHLFdBQVcsYUFBYSxXQUFXO0FBQUEsTUFDakQsT0FBTztBQUFBLFFBQ0gsUUFBUTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxXQUFXO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsV0FBVztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ0EsV0FBVztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxRQUNkO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsUUFDZDtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNMLGdCQUFnQixXQUFZO0FBQ3hCLGVBQUssU0FBUyxRQUFRLFNBQVUsT0FBTztBQUNuQyxrQkFBTSxZQUFZO0FBQUEsVUFDdEIsQ0FBQztBQUFBLFFBQ0w7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZV9ncmlkIl0KfQo=
