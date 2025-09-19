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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/count-down/index.css
var require_count_down = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/count-down/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/count-down/index.css
var require_count_down2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/count-down/index.css"(exports, module) {
    require_count_down();
    module.exports = {};
  }
});

// node_modules/@tuya-miniapp/smart-ui/lib/count-down/utils.js
var require_utils = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/count-down/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSameSecond = exports.parseFormat = exports.parseTimeData = void 0;
    function padZero(num, targetLength) {
      if (targetLength === void 0) {
        targetLength = 2;
      }
      var str = num + "";
      while (str.length < targetLength) {
        str = "0" + str;
      }
      return str;
    }
    var SECOND = 1e3;
    var MINUTE = 60 * SECOND;
    var HOUR = 60 * MINUTE;
    var DAY = 24 * HOUR;
    function parseTimeData(time) {
      var days = Math.floor(time / DAY);
      var hours = Math.floor(time % DAY / HOUR);
      var minutes = Math.floor(time % HOUR / MINUTE);
      var seconds = Math.floor(time % MINUTE / SECOND);
      var milliseconds = Math.floor(time % SECOND);
      return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      };
    }
    exports.parseTimeData = parseTimeData;
    function parseFormat(format, timeData) {
      var days = timeData.days;
      var hours = timeData.hours, minutes = timeData.minutes, seconds = timeData.seconds, milliseconds = timeData.milliseconds;
      if (format.indexOf("DD") === -1) {
        hours += days * 24;
      } else {
        format = format.replace("DD", padZero(days));
      }
      if (format.indexOf("HH") === -1) {
        minutes += hours * 60;
      } else {
        format = format.replace("HH", padZero(hours));
      }
      if (format.indexOf("mm") === -1) {
        seconds += minutes * 60;
      } else {
        format = format.replace("mm", padZero(minutes));
      }
      if (format.indexOf("ss") === -1) {
        milliseconds += seconds * 1e3;
      } else {
        format = format.replace("ss", padZero(seconds));
      }
      return format.replace("SSS", padZero(milliseconds, 3));
    }
    exports.parseFormat = parseFormat;
    function isSameSecond(time1, time2) {
      return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
    }
    exports.isSameSecond = isSameSecond;
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/count-down/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/count-down/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_count_down2());
    var Component = overrideComponent("count-down-index-60c532");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var utils_1 = require_utils();
    function simpleTick(fn) {
      return setTimeout(fn, 30);
    }
    (0, component_1.SmartComponent)({
      props: {
        useSlot: Boolean,
        millisecond: Boolean,
        time: {
          type: Number,
          observer: "reset"
        },
        format: {
          type: String,
          value: "HH:mm:ss"
        },
        autoStart: {
          type: Boolean,
          value: true
        }
      },
      data: {
        timeData: (0, utils_1.parseTimeData)(0),
        formattedTime: "0"
      },
      destroyed: function() {
        clearTimeout(this.tid);
        this.tid = null;
      },
      methods: {
        // 开始
        start: function() {
          if (this.counting) {
            return;
          }
          this.counting = true;
          this.endTime = Date.now() + this.remain;
          this.tick();
        },
        // 暂停
        pause: function() {
          this.counting = false;
          clearTimeout(this.tid);
        },
        // 重置
        reset: function() {
          this.pause();
          this.remain = this.data.time;
          this.setRemain(this.remain);
          if (this.data.autoStart) {
            this.start();
          }
        },
        tick: function() {
          if (this.data.millisecond) {
            this.microTick();
          } else {
            this.macroTick();
          }
        },
        microTick: function() {
          var _this = this;
          this.tid = simpleTick(function() {
            _this.setRemain(_this.getRemain());
            if (_this.remain !== 0) {
              _this.microTick();
            }
          });
        },
        macroTick: function() {
          var _this = this;
          this.tid = simpleTick(function() {
            var remain = _this.getRemain();
            if (!(0, utils_1.isSameSecond)(remain, _this.remain) || remain === 0) {
              _this.setRemain(remain);
            }
            if (_this.remain !== 0) {
              _this.macroTick();
            }
          });
        },
        getRemain: function() {
          return Math.max(this.endTime - Date.now(), 0);
        },
        setRemain: function(remain) {
          this.remain = remain;
          var timeData = (0, utils_1.parseTimeData)(remain);
          if (this.data.useSlot) {
            this.$emit("change", timeData);
          }
          this.setData({
            formattedTime: (0, utils_1.parseFormat)(this.data.format, timeData)
          });
          if (remain === 0) {
            this.pause();
            this.$emit("finish");
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY291bnQtZG93bi9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9jb3VudC1kb3duL2luZGV4LmNzcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY291bnQtZG93bi91dGlscy5qcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9jb3VudC1kb3duL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWNvdW50LWRvd24ge1xuICBjb2xvcjogdmFyKC0tY291bnQtZG93bi10ZXh0LWNvbG9yLCB2YXIoLS1hcHAtQjYtTjIsIHJnYmEoMCwgMCwgMCwgLjcpKSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY291bnQtZG93bi1mb250LXNpemUsIDE0cHgpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tY291bnQtZG93bi1saW5lLWhlaWdodCwgMjBweCk7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ0lpd2ljMjkxY21ObGN5STZXeUpWYzJWeWN5OW5kVzV6Ylc5clpYSXZSRzlqZFcxbGJuUnpMMmRwZEM5RGIyOXNhVzVuVFdsemRFMWhkRkJoYm1Wc0wyNXZaR1ZmYlc5a2RXeGxjeTlBZEhWNVlTMXRhVzVwWVhCd0wzTnRZWEowTFhWcEwyeHBZaTlqYjNWdWRDMWtiM2R1TDJsdVpHVjRMbU56Y3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SkFhVzF3YjNKMElDY3VMaTlqYjIxdGIyNHZhVzVrWlhndVkzTnpKenN1YzIxaGNuUXRZMjkxYm5RdFpHOTNibnRqYjJ4dmNqcDJZWElvTFMxamIzVnVkQzFrYjNkdUxYUmxlSFF0WTI5c2IzSXNkbUZ5S0MwdFlYQndMVUkyTFU0eUxISm5ZbUVvTUN3d0xEQXNMamNwS1NrN1ptOXVkQzF6YVhwbE9uWmhjaWd0TFdOdmRXNTBMV1J2ZDI0dFptOXVkQzF6YVhwbExERTBjSGdwTzJ4cGJtVXRhR1ZwWjJoME9uWmhjaWd0TFdOdmRXNTBMV1J2ZDI0dGJHbHVaUzFvWldsbmFIUXNNakJ3ZUNsOUlsMHNJbTVoYldWeklqcGJYWDA9ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1NhbWVTZWNvbmQgPSBleHBvcnRzLnBhcnNlRm9ybWF0ID0gZXhwb3J0cy5wYXJzZVRpbWVEYXRhID0gdm9pZCAwO1xuZnVuY3Rpb24gcGFkWmVybyhudW0sIHRhcmdldExlbmd0aCkge1xuICAgIGlmICh0YXJnZXRMZW5ndGggPT09IHZvaWQgMCkgeyB0YXJnZXRMZW5ndGggPSAyOyB9XG4gICAgdmFyIHN0ciA9IG51bSArICcnO1xuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgICAgIHN0ciA9ICcwJyArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbnZhciBTRUNPTkQgPSAxMDAwO1xudmFyIE1JTlVURSA9IDYwICogU0VDT05EO1xudmFyIEhPVVIgPSA2MCAqIE1JTlVURTtcbnZhciBEQVkgPSAyNCAqIEhPVVI7XG5mdW5jdGlvbiBwYXJzZVRpbWVEYXRhKHRpbWUpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IodGltZSAvIERBWSk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigodGltZSAlIERBWSkgLyBIT1VSKTtcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWUgJSBIT1VSKSAvIE1JTlVURSk7XG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lICUgTUlOVVRFKSAvIFNFQ09ORCk7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIFNFQ09ORCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5czogZGF5cyxcbiAgICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzLFxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzLFxuICAgICAgICBtaWxsaXNlY29uZHM6IG1pbGxpc2Vjb25kcyxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZVRpbWVEYXRhID0gcGFyc2VUaW1lRGF0YTtcbmZ1bmN0aW9uIHBhcnNlRm9ybWF0KGZvcm1hdCwgdGltZURhdGEpIHtcbiAgICB2YXIgZGF5cyA9IHRpbWVEYXRhLmRheXM7XG4gICAgdmFyIGhvdXJzID0gdGltZURhdGEuaG91cnMsIG1pbnV0ZXMgPSB0aW1lRGF0YS5taW51dGVzLCBzZWNvbmRzID0gdGltZURhdGEuc2Vjb25kcywgbWlsbGlzZWNvbmRzID0gdGltZURhdGEubWlsbGlzZWNvbmRzO1xuICAgIGlmIChmb3JtYXQuaW5kZXhPZignREQnKSA9PT0gLTEpIHtcbiAgICAgICAgaG91cnMgKz0gZGF5cyAqIDI0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ0REJywgcGFkWmVybyhkYXlzKSk7XG4gICAgfVxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignSEgnKSA9PT0gLTEpIHtcbiAgICAgICAgbWludXRlcyArPSBob3VycyAqIDYwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ0hIJywgcGFkWmVybyhob3VycykpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ21tJykgPT09IC0xKSB7XG4gICAgICAgIHNlY29uZHMgKz0gbWludXRlcyAqIDYwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ21tJywgcGFkWmVybyhtaW51dGVzKSk7XG4gICAgfVxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignc3MnKSA9PT0gLTEpIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzICs9IHNlY29uZHMgKiAxMDAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ3NzJywgcGFkWmVybyhzZWNvbmRzKSk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgnU1NTJywgcGFkWmVybyhtaWxsaXNlY29uZHMsIDMpKTtcbn1cbmV4cG9ydHMucGFyc2VGb3JtYXQgPSBwYXJzZUZvcm1hdDtcbmZ1bmN0aW9uIGlzU2FtZVNlY29uZCh0aW1lMSwgdGltZTIpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lMSAvIDEwMDApID09PSBNYXRoLmZsb29yKHRpbWUyIC8gMTAwMCk7XG59XG5leHBvcnRzLmlzU2FtZVNlY29uZCA9IGlzU2FtZVNlY29uZDtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdjb3VudC1kb3duLWluZGV4LTYwYzUzMicpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuZnVuY3Rpb24gc2ltcGxlVGljayhmbikge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCAzMCk7XG59XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICBwcm9wczoge1xuICAgICAgICB1c2VTbG90OiBCb29sZWFuLFxuICAgICAgICBtaWxsaXNlY29uZDogQm9vbGVhbixcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdyZXNldCcsXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdISDptbTpzcycsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9TdGFydDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0aW1lRGF0YTogKDAsIHV0aWxzXzEucGFyc2VUaW1lRGF0YSkoMCksXG4gICAgICAgIGZvcm1hdHRlZFRpbWU6ICcwJyxcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aWQpO1xuICAgICAgICB0aGlzLnRpZCA9IG51bGw7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vIFx1NUYwMFx1NTlDQlxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvdW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IERhdGUubm93KCkgKyB0aGlzLnJlbWFpbjtcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBcdTY2ODJcdTUwNUNcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpZCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFx1OTFDRFx1N0Y2RVxuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW4gPSB0aGlzLmRhdGEudGltZTtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVtYWluKHRoaXMucmVtYWluKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXV0b1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1pbGxpc2Vjb25kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taWNyb1RpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWFjcm9UaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1pY3JvVGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGlkID0gc2ltcGxlVGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UmVtYWluKF90aGlzLmdldFJlbWFpbigpKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVtYWluICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1pY3JvVGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtYWNyb1RpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnRpZCA9IHNpbXBsZVRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1haW4gPSBfdGhpcy5nZXRSZW1haW4oKTtcbiAgICAgICAgICAgICAgICBpZiAoISgwLCB1dGlsc18xLmlzU2FtZVNlY29uZCkocmVtYWluLCBfdGhpcy5yZW1haW4pIHx8IHJlbWFpbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRSZW1haW4ocmVtYWluKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlbWFpbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYWNyb1RpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVtYWluOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5lbmRUaW1lIC0gRGF0ZS5ub3coKSwgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFJlbWFpbjogZnVuY3Rpb24gKHJlbWFpbikge1xuICAgICAgICAgICAgdGhpcy5yZW1haW4gPSByZW1haW47XG4gICAgICAgICAgICB2YXIgdGltZURhdGEgPSAoMCwgdXRpbHNfMS5wYXJzZVRpbWVEYXRhKShyZW1haW4pO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS51c2VTbG90KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGltZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUaW1lOiAoMCwgdXRpbHNfMS5wYXJzZUZvcm1hdCkodGhpcy5kYXRhLmZvcm1hdCwgdGltZURhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVtYWluID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZpbmlzaCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLHNCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLGVBQWUsUUFBUSxjQUFjLFFBQVEsZ0JBQWdCO0FBQ3JFLGFBQVMsUUFBUSxLQUFLLGNBQWM7QUFDaEMsVUFBSSxpQkFBaUIsUUFBUTtBQUFFLHVCQUFlO0FBQUEsTUFBRztBQUNqRCxVQUFJLE1BQU0sTUFBTTtBQUNoQixhQUFPLElBQUksU0FBUyxjQUFjO0FBQzlCLGNBQU0sTUFBTTtBQUFBLE1BQ2hCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxRQUFJLFNBQVM7QUFDYixRQUFJLFNBQVMsS0FBSztBQUNsQixRQUFJLE9B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QVc7QUFDaEIsZUFBSyxVQUFVLEtBQUssSUFBSSxJQUFJLEtBQUs7QUFDakMsZUFBSyxLQUFLO0FBQUEsUUFDZDtBQUFBO0FBQUEsUUFFQSxPQUFPLFdBQVk7QUFDZixlQUFLLFdBQVc7QUFDaEIsdUJBQWEsS0FBSyxHQUFHO0FBQUEsUUFDekI7QUFBQTtBQUFBLFFBRUEsT0FBTyxXQUFZO0FBQ2YsZUFBSyxNQUFNO0FBQ1gsZUFBSyxTQUFTLEtBQUssS0FBSztBQUN4QixlQUFLLFVBQVUsS0FBSyxNQUFNO0FBQzFCLGNBQUksS0FBSyxLQUFLLFdBQVc7QUFDckIsaUJBQUssTUFBTTtBQUFBLFVBQ2Y7QUFBQSxRQUNKO0FBQUEsUUFDQSxNQUFNLFdBQVk7QUFDZCxjQUFJLEtBQUssS0FBSyxhQUFhO0FBQ3ZCLGlCQUFLLFVBQVU7QUFBQSxVQUNuQixPQUNLO0FBQ0QsaUJBQUssVUFBVTtBQUFBLFVBQ25CO0FBQUEsUUFDSjtBQUFBLFFBQ0EsV0FBVyxXQUFZO0FBQ25CLGNBQUksUUFBUTtBQUNaLGVBQUssTUFBTSxXQUFXLFdBQVk7QUFDOUIsa0JBQU0sVUFBVSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxnQkFBSSxNQUFNLFdBQVcsR0FBRztBQUNwQixvQkFBTSxVQUFVO0FBQUEsWUFDcEI7QUFBQSxVQUNKLENBQUM7QUFBQSxRQUNMO0FBQUEsUUFDQSxXQUFXLFdBQVk7QUFDbkIsY0FBSSxRQUFRO0FBQ1osZUFBSyxNQUFNLFdBQVcsV0FBWTtBQUM5QixnQkFBSSxTQUFTLE1BQU0sVUFBVTtBQUM3QixnQkFBSSxFQUFFLEdBQUcsUUFBUSxjQUFjLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxHQUFHO0FBQ2xFLG9CQUFNLFVBQVUsTUFBTTtBQUFBLFlBQzFCO0FBQ0EsZ0JBQUksTUFBTSxXQUFXLEdBQUc7QUFDcEIsb0JBQU0sVUFBVTtBQUFBLFlBQ3BCO0FBQUEsVUFDSixDQUFDO0FBQUEsUUFDTDtBQUFBLFFBQ0EsV0FBVyxXQUFZO0FBQ25CLGlCQUFPLEtBQUssSUFBSSxLQUFLLFVBQVUsS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUFBLFFBQ2hEO0FBQUEsUUFDQSxXQUFXLFNBQVUsUUFBUTtBQUN6QixlQUFLLFNBQVM7QUFDZCxjQUFJLFlBQVksR0FBRyxRQUFRLGVBQWUsTUFBTTtBQUNoRCxjQUFJLEtBQUssS0FBSyxTQUFTO0FBQ25CLGlCQUFLLE1BQU0sVUFBVSxRQUFRO0FBQUEsVUFDakM7QUFDQSxlQUFLLFFBQVE7QUFBQSxZQUNULGdCQUFnQixHQUFHLFFBQVEsYUFBYSxLQUFLLEtBQUssUUFBUSxRQUFRO0FBQUEsVUFDdEUsQ0FBQztBQUNELGNBQUksV0FBVyxHQUFHO0FBQ2QsaUJBQUssTUFBTTtBQUNYLGlCQUFLLE1BQU0sUUFBUTtBQUFBLFVBQ3ZCO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX2NvdW50X2Rvd24iXQp9Cg==
