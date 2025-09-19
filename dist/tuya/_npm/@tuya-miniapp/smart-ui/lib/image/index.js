import {
  require_Loading
} from "/chunk-JT6TWLCG.js";
import {
  require_button
} from "/chunk-K7G5PEWN.js";
import "/chunk-SOVNIPSZ.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/image/index.css
var require_image = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/image/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/image/index.css
var require_image2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/image/index.css"(exports, module) {
    require_image();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/image/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/image/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_image2());
    var Component = overrideComponent("image-index-b28e55");
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var button_1 = require_button();
    var Loading_1 = __importDefault(require_Loading());
    (0, component_1.SmartComponent)({
      mixins: [button_1.button],
      classes: ["custom-class", "loading-class", "error-class", "image-class"],
      props: {
        src: {
          type: String,
          observer: function() {
            this.setData({
              error: false,
              loading: true
            });
          }
        },
        round: Boolean,
        width: null,
        height: null,
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
          type: String,
          value: "fill"
        },
        webp: {
          type: Boolean,
          value: false
        },
        showError: {
          type: Boolean,
          value: true
        },
        showLoading: {
          type: Boolean,
          value: true
        }
      },
      data: {
        error: false,
        loading: true,
        loadingSvg: Loading_1.default,
        viewStyle: ""
      },
      methods: {
        onLoad: function(event) {
          this.setData({
            loading: false
          });
          this.$emit("load", event.detail);
        },
        onError: function(event) {
          this.setData({
            loading: false,
            error: true
          });
          this.$emit("error", event.detail);
        },
        onClick: function(event) {
          this.$emit("click", event.detail);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvaW1hZ2UvaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvaW1hZ2UvaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2ltYWdlL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbWFydC1pbWFnZS0tcm91bmQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbWFydC1pbWFnZS0tcm91bmQgLnNtYXJ0LWltYWdlX19pbWcge1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG4uc21hcnQtaW1hZ2VfX2Vycm9yLCAuc21hcnQtaW1hZ2VfX2ltZywgLnNtYXJ0LWltYWdlX19sb2FkaW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbWFydC1pbWFnZV9fZXJyb3IsIC5zbWFydC1pbWFnZV9fbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltYWdlLXBsYWNlaG9sZGVyLWJhY2tncm91bmQtY29sb3IsICNmN2Y4ZmEpO1xuICBjb2xvcjogdmFyKC0taW1hZ2UtcGxhY2Vob2xkZXItdGV4dC1jb2xvciwgIzk2OTc5OSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2UtcGxhY2Vob2xkZXItZm9udC1zaXplLCAxNHB4KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uc21hcnQtaW1hZ2VfX2xvYWRpbmctaWNvbiB7XG4gIC0taWNvbi1jb2xvcjogdmFyKC0taW1hZ2UtbG9hZGluZy1pY29uLWNvbG9yLCAjZGNkZWUwKTtcbiAgY29sb3I6IHZhcigtLWltYWdlLWxvYWRpbmctaWNvbi1jb2xvciwgI2RjZGVlMCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2UtbG9hZGluZy1pY29uLXNpemUsIDMycHgpICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFydC1pbWFnZV9fZXJyb3ItaW1nIHtcbiAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1lcnJvci1zaXplLCAzMnB4KTtcbiAgd2lkdGg6IHZhcigtLWltYWdlLWVycm9yLXNpemUsIDMycHgpO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3T3p0QlFVRnZSRHM3T3pzN1FVRkJjMFE3T3pzN1FVRkJORVE3T3pzN096dEJRVUZwUnpzN096czdPenM3T3pzN096dEJRVUUyVkRzN096czdPMEZCUVhOTUlpd2ljMjkxY21ObGN5STZXeUpWYzJWeWN5OW5kVzV6Ylc5clpYSXZSRzlqZFcxbGJuUnpMMmRwZEM5RGIyOXNhVzVuVFdsemRFMWhkRkJoYm1Wc0wyNXZaR1ZmYlc5a2RXeGxjeTlBZEhWNVlTMXRhVzVwWVhCd0wzTnRZWEowTFhWcEwyeHBZaTlwYldGblpTOXBibVJsZUM1amMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpUUdsdGNHOXlkQ0FuTGk0dlkyOXRiVzl1TDJsdVpHVjRMbU56Y3ljN0xuTnRZWEowTFdsdFlXZGxlMlJwYzNCc1lYazZhVzVzYVc1bExXSnNiMk5yTzNCdmMybDBhVzl1T25KbGJHRjBhWFpsZlM1emJXRnlkQzFwYldGblpTMHRjbTkxYm1SN1ltOXlaR1Z5TFhKaFpHbDFjem8xTUNVN2IzWmxjbVpzYjNjNmFHbGtaR1Z1ZlM1emJXRnlkQzFwYldGblpTMHRjbTkxYm1RZ0xuTnRZWEowTFdsdFlXZGxYMTlwYldkN1ltOXlaR1Z5TFhKaFpHbDFjenBwYm1obGNtbDBmUzV6YldGeWRDMXBiV0ZuWlY5ZlpYSnliM0lzTG5OdFlYSjBMV2x0WVdkbFgxOXBiV2NzTG5OdFlYSjBMV2x0WVdkbFgxOXNiMkZrYVc1bmUyUnBjM0JzWVhrNllteHZZMnM3YUdWcFoyaDBPakV3TUNVN2QybGtkR2c2TVRBd0pYMHVjMjFoY25RdGFXMWhaMlZmWDJWeWNtOXlMQzV6YldGeWRDMXBiV0ZuWlY5ZmJHOWhaR2x1WjN0aGJHbG5iaTFwZEdWdGN6cGpaVzUwWlhJN1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pwMllYSW9MUzFwYldGblpTMXdiR0ZqWldodmJHUmxjaTFpWVdOclozSnZkVzVrTFdOdmJHOXlMQ05tTjJZNFptRXBPMk52Ykc5eU9uWmhjaWd0TFdsdFlXZGxMWEJzWVdObGFHOXNaR1Z5TFhSbGVIUXRZMjlzYjNJc0l6azJPVGM1T1NrN1pHbHpjR3hoZVRwbWJHVjRPMlpzWlhndFpHbHlaV04wYVc5dU9tTnZiSFZ0Ymp0bWIyNTBMWE5wZW1VNmRtRnlLQzB0YVcxaFoyVXRjR3hoWTJWb2IyeGtaWEl0Wm05dWRDMXphWHBsTERFMGNIZ3BPMnAxYzNScFpua3RZMjl1ZEdWdWREcGpaVzUwWlhJN2JHVm1kRG93TzNCdmMybDBhVzl1T21GaWMyOXNkWFJsTzNSdmNEb3dmUzV6YldGeWRDMXBiV0ZuWlY5ZmJHOWhaR2x1WnkxcFkyOXVleTB0YVdOdmJpMWpiMnh2Y2pwMllYSW9MUzFwYldGblpTMXNiMkZrYVc1bkxXbGpiMjR0WTI5c2IzSXNJMlJqWkdWbE1DazdZMjlzYjNJNmRtRnlLQzB0YVcxaFoyVXRiRzloWkdsdVp5MXBZMjl1TFdOdmJHOXlMQ05rWTJSbFpUQXBPMlp2Ym5RdGMybDZaVHAyWVhJb0xTMXBiV0ZuWlMxc2IyRmthVzVuTFdsamIyNHRjMmw2WlN3ek1uQjRLU0ZwYlhCdmNuUmhiblI5TG5OdFlYSjBMV2x0WVdkbFgxOWxjbkp2Y2kxcGJXZDdhR1ZwWjJoME9uWmhjaWd0TFdsdFlXZGxMV1Z5Y205eUxYTnBlbVVzTXpKd2VDazdkMmxrZEdnNmRtRnlLQzB0YVcxaFoyVXRaWEp5YjNJdGMybDZaU3d6TW5CNEtYMGlYU3dpYm1GdFpYTWlPbHRkZlE9PSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdpbWFnZS1pbmRleC1iMjhlNTUnKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL21peGlucy9idXR0b25cIik7XG52YXIgTG9hZGluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAdHV5YS1taW5pYXBwL2ljb25zL2Rpc3Qvc3ZnL0xvYWRpbmdcIikpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgbWl4aW5zOiBbYnV0dG9uXzEuYnV0dG9uXSxcbiAgICBjbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdsb2FkaW5nLWNsYXNzJywgJ2Vycm9yLWNsYXNzJywgJ2ltYWdlLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJvdW5kOiBCb29sZWFuLFxuICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICByYWRpdXM6IG51bGwsXG4gICAgICAgIGxhenlMb2FkOiBCb29sZWFuLFxuICAgICAgICB1c2VFcnJvclNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHVzZUxvYWRpbmdTbG90OiBCb29sZWFuLFxuICAgICAgICBzaG93TWVudUJ5TG9uZ3ByZXNzOiBCb29sZWFuLFxuICAgICAgICBmaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZmlsbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnA6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dFcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzaG93TG9hZGluZzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvYWRpbmdTdmc6IExvYWRpbmdfMS5kZWZhdWx0LFxuICAgICAgICB2aWV3U3R5bGU6ICcnLFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXJyb3InLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQuZGV0YWlsKTtcbiAgICAg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
