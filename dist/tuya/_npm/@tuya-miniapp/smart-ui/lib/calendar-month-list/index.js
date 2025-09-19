import {
  require_utils
} from "/chunk-KNHK5MFR.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-month-list/index.css
var require_calendar_month_list = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-month-list/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-month-list/index.css
var require_calendar_month_list2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-month-list/index.css"(exports, module) {
    require_calendar_month_list();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-month-list/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-month-list/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_calendar_month_list2());
    var Component = overrideComponent("calendar-month-list-index-1a74dd");
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var component_1 = require_component();
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    var minMonthDate = new Date(currentYear - 10, 1, 1).getTime();
    var maxMonthDate = new Date(currentYear + 10, 12, 31).getTime();
    (0, component_1.SmartComponent)({
      /**
       * 组件的属性列表
       */
      props: {
        date: {
          type: null,
          observer: function(newVal, oldVal) {
            if (newVal !== oldVal) {
              this.getMonthList();
            }
          }
        },
        color: {
          type: String,
          value: "#3678e3"
        },
        minDate: {
          type: null,
          value: minMonthDate
        },
        maxDate: {
          type: null,
          value: maxMonthDate
        },
        readonly: {
          type: Boolean,
          value: false
        },
        monthsFormatter: {
          type: null,
          value: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        }
      },
      /**
       * 组件的初始数据
       */
      data: {
        months: [],
        currentMonth: null
      },
      created: function() {
        this.getMonthList();
      },
      /**
       * 组件的方法列表
       */
      methods: {
        getMonthList: function() {
          var _a = this.data, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.monthsFormatter, monthsFormatter = _b === void 0 ? [] : _b;
          var curDate = new Date(this.data.date);
          var cur = curDate.getFullYear();
          var curMonthDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
          var start = new Date(cur, 0, 1).getTime();
          var end = new Date(cur, 11, 31).getTime();
          var minDateTime = new Date(minDate).getTime();
          var maxDateTime = new Date(maxDate).getTime();
          var months = (0, utils_1.getMonths)(start, end);
          var monthlist = months.map(function(date) {
            var monthVal = new Date(date).getMonth();
            var time = new Date(date).getTime();
            var isDisabled = false;
            if (minDate && maxDate) {
              isDisabled = time < minDateTime || time > maxDateTime;
            }
            return {
              value: date,
              month: monthVal,
              text: monthsFormatter[monthVal] || monthVal + 1,
              type: isDisabled ? "disabled" : ""
            };
          });
          this.setData({
            months: monthlist,
            currentMonth: curMonthDate.getTime()
          });
        },
        onClick: function(event) {
          if (this.data.readonly)
            return;
          var index = event.currentTarget.dataset.index;
          var item = this.data.months[index];
          if (item.type !== "disabled") {
            this.$emit("click", item.value);
            this.setData({
              date: item.value
            });
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FsZW5kYXItbW9udGgtbGlzdC9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9jYWxlbmRhci1tb250aC1saXN0L2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9jYWxlbmRhci1tb250aC1saXN0L2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLmNvbnRhaW4ge1xuICBtYXJnaW46IDI0cnB4IDA7XG59XG5cbi5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FsZW5kYXItY2VsbC1pdGVtLWJvcmRlci1yYWRpdXMsIDEwNHJweCk7XG4gIGNvbG9yOiB2YXIoLS1jYWxlbmRhci1jZWxsLWl0ZW0tZm9udC1jb2xvciwgdmFyKC0tYXBwLUI0LU4xLCAjMDAwKSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsZW5kYXItY2VsbC1pdGVtLWZvbnQtc2l6ZSwgMTVweCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxlbmRhci1kYXktZm9udC13ZWlnaHQsIDUwMCk7XG4gIGhlaWdodDogdmFyKC0tY2FsZW5kYXItY2VsbC1pdGVtLWhlaWdodCwgMTA0cnB4KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGVuZGFyLWNlbGwtaXRlbS1oZWlnaHQsIDEwNHJweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IHZhcigtLWNhbGVuZGFyLWNlbGwtaXRlbS13aWR0aCwgMTA0cnB4KTtcbn1cblxuLml0ZW1fYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMzNjc4ZTM7XG59XG5cbi5pdGVtX2Rpc2FibGVkIHtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5jb2xfaXRlbSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3TzBGQlFYZENPenM3T3pzN096czdPenRCUVVGNVdUczdPenM3UVVGQk1rTTdPenM3UVVGQk1FSWlMQ0p6YjNWeVkyVnpJanBiSWxWelpYSnpMMmQxYm5OdGIydGxjaTlFYjJOMWJXVnVkSE12WjJsMEwwTnZiMnhwYm1kTmFYTjBUV0YwVUdGdVpXd3ZibTlrWlY5dGIyUjFiR1Z6TDBCMGRYbGhMVzFwYm1saGNIQXZjMjFoY25RdGRXa3ZiR2xpTDJOaGJHVnVaR0Z5TFcxdmJuUm9MV3hwYzNRdmFXNWtaWGd1WTNOeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJa0JwYlhCdmNuUWdKeTR1TDJOdmJXMXZiaTlwYm1SbGVDNWpjM01uT3k1amIyNTBZV2x1ZTIxaGNtZHBiam95TkhKd2VDQXdmUzVwZEdWdGUySnZjbVJsY2kxeVlXUnBkWE02ZG1GeUtDMHRZMkZzWlc1a1lYSXRZMlZzYkMxcGRHVnRMV0p2Y21SbGNpMXlZV1JwZFhNc01UQTBjbkI0S1R0amIyeHZjanAyWVhJb0xTMWpZV3hsYm1SaGNpMWpaV3hzTFdsMFpXMHRabTl1ZEMxamIyeHZjaXgyWVhJb0xTMWhjSEF0UWpRdFRqRXNJekF3TUNrcE8yWnZiblF0YzJsNlpUcDJZWElvTFMxallXeGxibVJoY2kxalpXeHNMV2wwWlcwdFptOXVkQzF6YVhwbExERTFjSGdwTzJadmJuUXRkMlZwWjJoME9uWmhjaWd0TFdOaGJHVnVaR0Z5TFdSaGVTMW1iMjUwTFhkbGFXZG9kQ3cxTURBcE8yaGxhV2RvZERwMllYSW9MUzFqWVd4bGJtUmhjaTFqWld4c0xXbDBaVzB0YUdWcFoyaDBMREV3TkhKd2VDazdiR2x1WlMxb1pXbG5hSFE2ZG1GeUtDMHRZMkZzWlc1a1lYSXRZMlZzYkMxcGRHVnRMV2hsYVdkb2RDd3hNRFJ5Y0hncE8zUmxlSFF0WVd4cFoyNDZZMlZ1ZEdWeU8zZHBaSFJvT25aaGNpZ3RMV05oYkdWdVpHRnlMV05sYkd3dGFYUmxiUzEzYVdSMGFDd3hNRFJ5Y0hncGZTNXBkR1Z0WDJGamRHbDJaWHRpWVdOclozSnZkVzVrT2lNek5qYzRaVE03WTI5c2IzSTZJMlptWm4wdWFYUmxiVjlrYVhOaFlteGxaSHR2Y0dGamFYUjVPaTQxZlM1amIyeGZhWFJsYlh0a2FYTndiR0Y1T21ac1pYZzdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9tTmxiblJsY24waVhTd2libUZ0WlhNaU9sdGRmUT09ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ2NhbGVuZGFyLW1vbnRoLWxpc3QtaW5kZXgtMWE3NGRkJyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBjb21wb25lbnRzL21vbnRoLWxpc3QuanNcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NhbGVuZGFyLXV0aWxzL3V0aWxzXCIpO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG52YXIgbWluTW9udGhEYXRlID0gbmV3IERhdGUoY3VycmVudFllYXIgLSAxMCwgMSwgMSkuZ2V0VGltZSgpO1xudmFyIG1heE1vbnRoRGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyICsgMTAsIDEyLCAzMSkuZ2V0VGltZSgpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgLyoqXG4gICAgICogXHU3RUM0XHU0RUY2XHU3Njg0XHU1QzVFXHU2MDI3XHU1MjE3XHU4ODY4XG4gICAgICovXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb250aExpc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjMzY3OGUzJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWluRGF0ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiBtaW5Nb250aERhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIG1heERhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TW9udGhEYXRlLFxuICAgICAgICB9LFxuICAgICAgICByZWFkb25seToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzRm9ybWF0dGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTc2ODRcdTUyMURcdTU5Q0JcdTY1NzBcdTYzNkVcbiAgICAgKi9cbiAgICBkYXRhOiB7XG4gICAgICAgIG1vbnRoczogW10sXG4gICAgICAgIGN1cnJlbnRNb250aDogbnVsbCxcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXRNb250aExpc3QoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFx1N0VDNFx1NEVGNlx1NzY4NFx1NjVCOVx1NkNENVx1NTIxN1x1ODg2OFxuICAgICAqL1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0TW9udGhMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG1pbkRhdGUgPSBfYS5taW5EYXRlLCBtYXhEYXRlID0gX2EubWF4RGF0ZSwgX2IgPSBfYS5tb250aHNGb3JtYXR0ZXIsIG1vbnRoc0Zvcm1hdHRlciA9IF9iID09PSB2b2lkIDAgPyBbXSA6IF9iO1xuICAgICAgICAgICAgdmFyIGN1ckRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGEuZGF0ZSk7XG4gICAgICAgICAgICB2YXIgY3VyID0gY3VyRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgdmFyIGN1ck1vbnRoRGF0ZSA9IG5ldyBEYXRlKGN1ckRhdGUuZ2V0RnVsbFllYXIoKSwgY3VyRGF0ZS5nZXRNb250aCgpLCAxKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKGN1ciwgMCwgMSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IG5ldyBEYXRlKGN1ciwgMTEsIDMxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgbWluRGF0ZVRpbWUgPSBuZXcgRGF0ZShtaW5EYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgbWF4RGF0ZVRpbWUgPSBuZXcgRGF0ZShtYXhEYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgbW9udGhzID0gKDAsIHV0aWxzXzEuZ2V0TW9udGhzKShzdGFydCwgZW5kKTtcbiAgICAgICAgICAgIHZhciBtb250aGxpc3QgPSBtb250aHMubWFwKGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoVmFsID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChtaW5EYXRlICYmIG1heERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IHRpbWUgPCBtaW5EYXRlVGltZSB8fCB0aW1lID4gbWF4RGF0ZVRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogbW9udGhWYWwsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG1vbnRoc0Zvcm1hdHRlclttb250aFZhbF0gfHwgbW9udGhWYWwgKyAxLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpc0Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbW9udGhzOiBtb250aGxpc3QsXG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnRoOiBjdXJNb250aERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5yZWFkb25seSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5tb250aHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSwrQkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0Isa0NBQWtDO0FBR3RFLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUU1RCxRQUFJLFVBQVU7QUFDZCxRQUFJLGNBQWM7QUFDbEIsUUFBSSxlQUFjLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQ3pDLFFBQUksZUFBZSxJQUFJLEtBQUssY0FBYyxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVE7QUFDNUQsUUFBSSxlQUFlLElBQUksS0FBSyxjQUFjLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUTtBQUM5RCxLQUFDLEdBQUcsWUFBWSxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUk1QixPQUFPO0FBQUEsUUFDSCxNQUFNO0FBQUEsVUFDRixNQUFNO0FBQUEsVUFDTixVQUFVLFNBQVUsUUFBUSxRQUFRO0FBQ2hDLGdCQUFJLFdBQVcsUUFBUTtBQUNuQixtQkFBSyxhQUFhO0FBQUEsWUFDdEI7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0gsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUNBLGlCQUFpQjtBQUFBLFVBQ2IsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxRQUFRLE9BQU8sT0FBTyxLQUFLO0FBQUEsUUFDL0Y7QUFBQSxNQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJQSxNQUFNO0FBQUEsUUFDRixRQUFRLENBQUM7QUFBQSxRQUNULGNBQWM7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsU0FBUyxXQUFZO0FBQ2pCLGFBQUssYUFBYTtBQUFBLE1BQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJQSxTQUFTO0FBQUEsUUFDTCxjQUFjLFdBQVk7QUFDdEIsY0FBSSxLQUFLLEtBQUssTUFBTSxVQUFVLEdBQUcsU0FBUyxVQUFVLEdBQUcsU0FBUyxLQUFLLEdBQUcsaUJBQWlCLGtCQUFrQixPQUFPLFNBQVMsQ0FBQyxJQUFJO0FBQ2hJLGNBQUksVUFBVSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUk7QUFDckMsY0FBSSxNQUFNLFFBQVEsWUFBWTtBQUM5QixjQUFJLGVBQWUsSUFBSSxLQUFLLFFBQVEsWUFBWSxHQUFHLFFBQVEsU0FBUyxHQUFHLENBQUM7QUFDeEUsY0FBSSxRQUFRLElBQUksS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFFBQVE7QUFDeEMsY0FBSSxNQUFNLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxFQUFFLFFBQVE7QUFDeEMsY0FBSSxjQUFjLElBQUksS0FBSyxPQUFPLEVBQUUsUUFBUTtBQUM1QyxjQUFJLGNBQWMsSUFBSSxLQUFLLE9BQU8sRUFBRSxRQUFRO0FBQzVDLGNBQUksVUFBVSxHQUFHLFFBQVEsV0FBVyxPQUFPLEdBQUc7QUFDOUMsY0FBSSxZQUFZLE9BQU8sSUFBSSxTQUFVLE1BQU07QUFDdkMsZ0JBQUksV0FBVyxJQUFJLEtBQUssSUFBSSxFQUFFLFNBQVM7QUFDdkMsZ0JBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFLFFBQVE7QUFDbEMsZ0JBQUksYUFBYTtBQUNqQixnQkFBSSxXQUFXLFNBQVM7QUFDcEIsMkJBQWEsT0FBTyxlQUFlLE9BQU87QUFBQSxZQUM5QztBQUNBLG1CQUFPO0FBQUEsY0FDSCxPQUFPO0FBQUEsY0FDUCxPQUFPO0FBQUEsY0FDUCxNQUFNLGdCQUFnQixRQUFRLEtBQUssV0FBVztBQUFBLGNBQzlDLE1BQU0sYUFBYSxhQUFhO0FBQUEsWUFDcEM7QUFBQSxVQUNKLENBQUM7QUFDRCxlQUFLLFFBQVE7QUFBQSxZQUNULFFBQVE7QUFBQSxZQUNSLGNBQWMsYUFBYSxRQUFRO0FBQUEsVUFDdkMsQ0FBQztBQUFBLFFBQ0w7QUFBQSxRQUNBLFNBQVMsU0FBVSxPQUFPO0FBQ3RCLGNBQUksS0FBSyxLQUFLO0FBQ1Y7QUFDSixjQUFJLFFBQVEsTUFBTSxjQUFjLFFBQVE7QUFDeEMsY0FBSSxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUs7QUFDakMsY0FBSSxLQUFLLFNBQVMsWUFBWTtBQUMxQixpQkFBSyxNQUFNLFNBQVMsS0FBSyxLQUFLO0FBQzlCLGlCQUFLLFFBQVE7QUFBQSxjQUNULE1BQU0sS0FBSztBQUFBLFlBQ2YsQ0FBQztBQUFBLFVBQ0w7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmVfY2FsZW5kYXJfbW9udGhfbGlzdCJdCn0K
