import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import {
  require_validator
} from "/chunk-UXQMYNQX.js";
import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/mixins/transition.js
var require_transition = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/mixins/transition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transition = void 0;
    var utils_1 = require_utils();
    var validator_1 = require_validator();
    var getClassNames = function(name) {
      return {
        enter: "smart-".concat(name, "-enter smart-").concat(name, "-enter-active enter-class enter-active-class"),
        "enter-to": "smart-".concat(name, "-enter-to smart-").concat(name, "-enter-active enter-to-class enter-active-class"),
        leave: "smart-".concat(name, "-leave smart-").concat(name, "-leave-active leave-class leave-active-class"),
        "leave-to": "smart-".concat(name, "-leave-to smart-").concat(name, "-leave-active leave-to-class leave-active-class")
      };
    };
    function transition(showDefaultValue) {
      return Behavior({
        properties: {
          customStyle: String,
          // @ts-ignore
          show: {
            type: Boolean,
            value: showDefaultValue,
            observer: "observeShow"
          },
          // @ts-ignore
          duration: {
            type: null,
            value: 300
          },
          name: {
            type: String,
            value: "fade"
          }
        },
        data: {
          type: "",
          inited: false,
          display: false
        },
        ready: function() {
          if (this.data.show === true) {
            this.observeShow(true, false);
          }
        },
        methods: {
          observeShow: function(value, old) {
            if (value === old) {
              return;
            }
            value ? this.enter() : this.leave();
          },
          enter: function() {
            var _this = this;
            if (this.enterFinishedPromise)
              return;
            this.enterFinishedPromise = new Promise(function(resolve) {
              var _a = _this.data, duration = _a.duration, name = _a.name;
              var classNames = getClassNames(name);
              var currentDuration = (0, validator_1.isObj)(duration) ? duration.enter : duration;
              if (_this.status === "enter") {
                return;
              }
              _this.status = "enter";
              _this.$emit("before-enter");
              (0, utils_1.requestAnimationFrame)(function() {
                if (_this.status !== "enter") {
                  return;
                }
                _this.$emit("enter");
                _this.setData({
                  inited: true,
                  display: true,
                  classes: classNames.enter,
                  currentDuration
                });
                (0, utils_1.requestAnimationFrame)(function() {
                  if (_this.status !== "enter") {
                    return;
                  }
                  _this.transitionEnded = false;
                  _this.setData({ classes: classNames["enter-to"] });
                  resolve();
                });
              });
            });
          },
          leave: function() {
            var _this = this;
            if (!this.enterFinishedPromise)
              return;
            this.enterFinishedPromise.then(function() {
              if (!_this.data.display) {
                return;
              }
              var _a = _this.data, duration = _a.duration, name = _a.name;
              var classNames = getClassNames(name);
              var currentDuration = (0, validator_1.isObj)(duration) ? duration.leave : duration;
              _this.status = "leave";
              _this.$emit("before-leave");
              (0, utils_1.requestAnimationFrame)(function() {
                if (_this.status !== "leave") {
                  return;
                }
                _this.$emit("leave");
                _this.setData({
                  classes: classNames.leave,
                  currentDuration
                });
                (0, utils_1.requestAnimationFrame)(function() {
                  if (_this.status !== "leave") {
                    return;
                  }
                  _this.transitionEnded = false;
                  setTimeout(function() {
                    _this.onTransitionEnd();
                    _this.enterFinishedPromise = null;
                  }, currentDuration);
                  _this.setData({ classes: classNames["leave-to"] });
                });
              });
            });
          },
          onTransitionEnd: function() {
            if (this.transitionEnded) {
              return;
            }
            this.transitionEnded = true;
            this.$emit("after-".concat(this.status));
            var _a = this.data, show = _a.show, display = _a.display;
            if (!show && display) {
              this.setData({ display: false });
            }
          }
        }
      });
    }
    exports.transition = transition;
  }
});

export {
  require_transition
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL21peGlucy90cmFuc2l0aW9uLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHJhbnNpdGlvbiA9IHZvaWQgMDtcbi8vIEB0cy1ub2NoZWNrXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG52YXIgdmFsaWRhdG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3ZhbGlkYXRvclwiKTtcbnZhciBnZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICh7XG4gICAgZW50ZXI6IFwic21hcnQtXCIuY29uY2F0KG5hbWUsIFwiLWVudGVyIHNtYXJ0LVwiKS5jb25jYXQobmFtZSwgXCItZW50ZXItYWN0aXZlIGVudGVyLWNsYXNzIGVudGVyLWFjdGl2ZS1jbGFzc1wiKSxcbiAgICAnZW50ZXItdG8nOiBcInNtYXJ0LVwiLmNvbmNhdChuYW1lLCBcIi1lbnRlci10byBzbWFydC1cIikuY29uY2F0KG5hbWUsIFwiLWVudGVyLWFjdGl2ZSBlbnRlci10by1jbGFzcyBlbnRlci1hY3RpdmUtY2xhc3NcIiksXG4gICAgbGVhdmU6IFwic21hcnQtXCIuY29uY2F0KG5hbWUsIFwiLWxlYXZlIHNtYXJ0LVwiKS5jb25jYXQobmFtZSwgXCItbGVhdmUtYWN0aXZlIGxlYXZlLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc1wiKSxcbiAgICAnbGVhdmUtdG8nOiBcInNtYXJ0LVwiLmNvbmNhdChuYW1lLCBcIi1sZWF2ZS10byBzbWFydC1cIikuY29uY2F0KG5hbWUsIFwiLWxlYXZlLWFjdGl2ZSBsZWF2ZS10by1jbGFzcyBsZWF2ZS1hY3RpdmUtY2xhc3NcIiksXG59KTsgfTtcbmZ1bmN0aW9uIHRyYW5zaXRpb24oc2hvd0RlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBCZWhhdmlvcih7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDMwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZVNob3codHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvYnNlcnZlU2hvdzogZnVuY3Rpb24gKHZhbHVlLCBvbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG9sZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID8gdGhpcy5lbnRlcigpIDogdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbnRlckZpbmlzaGVkUHJvbWlzZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJGaW5pc2hlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5kYXRhLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBuYW1lID0gX2EubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZXMgPSBnZXRDbGFzc05hbWVzKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudER1cmF0aW9uID0gKDAsIHZhbGlkYXRvcl8xLmlzT2JqKShkdXJhdGlvbikgPyBkdXJhdGlvbi5lbnRlciA6IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3RhdHVzID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdHVzID0gJ2VudGVyJztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2JlZm9yZS1lbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0dXMgIT09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXMuZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudER1cmF0aW9uOiBjdXJyZW50RHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLnJlcXVlc3RBbmltYXRpb25GcmFtZSkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0dXMgIT09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHsgY2xhc3NlczogY2xhc3NOYW1lc1snZW50ZXItdG8nXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbnRlckZpbmlzaGVkUHJvbWlzZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJGaW5pc2hlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZGF0YS5kaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuZGF0YSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbiwgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWVzID0gZ2V0Q2xhc3NOYW1lcyhuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREdXJhdGlvbiA9ICgwLCB2YWxpZGF0b3JfMS5pc09iaikoZHVyYXRpb24pID8gZHVyYXRpb24ubGVhdmUgOiBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdHVzID0gJ2xlYXZlJztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2JlZm9yZS1sZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0dXMgIT09ICdsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnbGVhdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXMubGVhdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudER1cmF0aW9uOiBjdXJyZW50RHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLnJlcXVlc3RBbmltYXRpb25GcmFtZSkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0dXMgIT09ICdsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVudGVyRmluaXNoZWRQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjdXJyZW50RHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoeyBjbGFzc2VzOiBjbGFzc05hbWVzWydsZWF2ZS10byddIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25FbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXItXCIuY29uY2F0KHRoaXMuc3RhdHVzKSk7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBzaG93ID0gX2Euc2hvdywgZGlzcGxheSA9IF9hLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgaWYgKCFzaG93ICYmIGRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZGlzcGxheTogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbmV4cG9ydHMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGFBQWE7QUFFckIsUUFBSSxVQUFVO0FBQ2QsUUFBSSxjQUFjO0FBQ2xCLFFBQUksZ0JBQWdCLFNBQVUsTUFBTTtBQUFFLGFBQVE7QUFBQSxRQUMxQyxPQUFPLFNBQVMsT0FBTyxNQUFNLGVBQWUsRUFBRSxPQUFPLE1BQU0sOENBQThDO0FBQUEsUUFDekcsWUFBWSxTQUFTLE9BQU8sTUFBTSxrQkFBa0IsRUFBRSxPQUFPLE1BQU0saURBQWlEO0FBQUEsUUFDcEgsT0FBTyxTQUFTLE9BQU8sTUFBTSxlQUFlLEVBQUUsT0FBTyxNQUFNLDhDQUE4QztBQUFBLFFBQ3pHLFlBQVksU0FBUyxPQUFPLE1BQU0sa0JBQWtCLEVBQUUsT0FBTyxNQUFNLGlEQUFpRDtBQUFBLE1BQ3hIO0FBQUEsSUFBSTtBQUNKLGFBQVMsV0FB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
