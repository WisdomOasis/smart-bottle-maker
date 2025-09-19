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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/overlay/index.css
var require_overlay = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/overlay/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/overlay/index.css
var require_overlay2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/overlay/index.css"(exports, module) {
    require_overlay();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/overlay/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/overlay/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_overlay2());
    var Component = overrideComponent("overlay-index-5ec5b7");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    (0, component_1.SmartComponent)({
      props: {
        show: Boolean,
        customStyle: String,
        duration: {
          type: null,
          value: 300
        },
        zIndex: {
          type: Number,
          value: 1
        },
        lockScroll: {
          type: Boolean,
          value: true
        },
        rootPortal: {
          type: Boolean,
          value: false
        }
      },
      methods: {
        onClick: function() {
          this.$emit("click");
        },
        // for prevent touchmove
        noop: function() {
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvb3ZlcmxheS9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9vdmVybGF5L2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9vdmVybGF5L2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsIHJnYmEoMCwgMCwgMCwgLjcpKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ0lpd2ljMjkxY21ObGN5STZXeUpWYzJWeWN5OW5kVzV6Ylc5clpYSXZSRzlqZFcxbGJuUnpMMmRwZEM5RGIyOXNhVzVuVFdsemRFMWhkRkJoYm1Wc0wyNXZaR1ZmYlc5a2RXeGxjeTlBZEhWNVlTMXRhVzVwWVhCd0wzTnRZWEowTFhWcEwyeHBZaTl2ZG1WeWJHRjVMMmx1WkdWNExtTnpjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKQWFXMXdiM0owSUNjdUxpOWpiMjF0YjI0dmFXNWtaWGd1WTNOekp6c3VjMjFoY25RdGIzWmxjbXhoZVh0aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T25aaGNpZ3RMVzkyWlhKc1lYa3RZbUZqYTJkeWIzVnVaQzFqYjJ4dmNpeHlaMkpoS0RBc01Dd3dMQzQzS1NrN2FHVnBaMmgwT2pFd01DVTdiR1ZtZERvd08zQnZjMmwwYVc5dU9tWnBlR1ZrTzNSdmNEb3dPM2RwWkhSb09qRXdNQ1Y5SWwwc0ltNWhiV1Z6SWpwYlhYMD0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXG5pbXBvcnQgb3ZlcnJpZGVDb21wb25lbnQgZnJvbSAnL1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL292ZXJsb2FkTmF0aXZlQ29tcG9uZW50Q29uc3RydWN0b3IudmlydHVhbC5qcyc7XG5jb25zdCBDb21wb25lbnQgPSBvdmVycmlkZUNvbXBvbmVudCgnb3ZlcmxheS1pbmRleC01ZWM1YjcnKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMzAwLFxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICB9LFxuICAgICAgICBsb2NrU2Nyb2xsOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJvb3RQb3J0YWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGZvciBwcmV2ZW50IHRvdWNobW92ZVxuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsbUJBQUE7QUFBQTtBQUFBO0FBR0EsV0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNIbEI7QUFBQTtBQUNBO0FBRUEsdUJBQU87QUFEUCxRQUFNLFlBQVksa0JBQWtCLHNCQUFzQjtBQUcxRCxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsUUFBSSxjQUFjO0FBQ2xCLEtBQUMsR0FBRyxZQUFZLGdCQUFnQjtBQUFBLE1BQzVCLE9BQU87QUFBQSxRQUNILE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUNBLFlBQVk7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsU0FBUyxXQUFZO0FBQ2pCLGVBQUssTUFBTSxPQUFPO0FBQUEsUUFDdEI7QUFBQTtBQUFBLFFBRUEsTUFBTSxXQUFZO0FBQUEsUUFBRTtBQUFBLE1BQ3hCO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZV9vdmVybGF5Il0KfQo=
