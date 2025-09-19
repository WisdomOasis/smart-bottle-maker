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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-year-list/index.css
var require_calendar_year_list = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-year-list/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-year-list/index.css
var require_calendar_year_list2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-year-list/index.css"(exports, module) {
    require_calendar_year_list();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-year-list/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar-year-list/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_calendar_year_list2());
    var Component = overrideComponent("calendar-year-list-index-4276b7");
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var component_1 = require_component();
    (0, component_1.SmartComponent)({
      /**
       * 组件的属性列表
       */
      props: {
        date: {
          type: null,
          observer: function(newVal, oldVal) {
            if (newVal !== oldVal) {
              this.calcYear();
            }
          }
        },
        readonly: {
          type: Boolean,
          value: false
        },
        minDate: {
          type: null,
          value: new Date((/* @__PURE__ */ new Date()).getFullYear() - 30, 0, 1).getTime()
        },
        maxDate: {
          type: null,
          value: new Date((/* @__PURE__ */ new Date()).getFullYear() + 30, 11, 31).getTime()
        },
        color: {
          type: String,
          value: "#3678e3"
        },
        currentYear: {
          type: null,
          value: (/* @__PURE__ */ new Date()).getFullYear()
        },
        yearFormatter: {
          type: null,
          value: "YYYY"
        },
        visibleIndex: {
          type: Number,
          value: 0,
          observer: function(newVal, oldVal) {
            if (newVal !== oldVal) {
              this.getYearList();
            }
          }
        }
      },
      /**
       * 组件的初始数据
       */
      data: {
        years: [],
        currentYear: null
      },
      created: function() {
        this.getYearList();
        this.calcYear();
      },
      /**
       * 组件的方法列表
       */
      methods: {
        calcYear: function() {
          var date = new Date(this.data.date);
          var cur = date.getFullYear();
          this.setData({
            currentYear: cur
          });
        },
        getYearList: function() {
          var _a = this.data, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.yearFormatter, yearFormatter = _b === void 0 ? "YYYY" : _b, visibleIndex = _a.visibleIndex, date = _a.date;
          var cur = new Date(date).getFullYear();
          var offset = visibleIndex * 12;
          var start = new Date(cur + offset - 5, 0, 1).getTime();
          var end = new Date(cur + offset + 6, 11, 31).getTime();
          var minStart = new Date(minDate).getTime();
          var maxStart = new Date(maxDate).getTime();
          var years = (0, utils_1.getYears)(start, end);
          var yearlist = years.map(function(date2) {
            var yearVal = new Date(date2).getFullYear();
            var curTime = new Date(date2).getTime();
            var isDisabled = false;
            if (minDate && maxDate) {
              isDisabled = curTime <= minStart || curTime >= maxStart;
            }
            return {
              value: date2,
              year: yearVal,
              text: yearFormatter.replace("YYYY", yearVal),
              type: isDisabled ? "disabled" : ""
            };
          });
          this.setData({
            years: yearlist
          });
        },
        onClick: function(event) {
          if (this.data.readonly)
            return;
          var index = event.currentTarget.dataset.index;
          var item = this.data.years[index];
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FsZW5kYXIteWVhci1saXN0L2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NhbGVuZGFyLXllYXItbGlzdC9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FsZW5kYXIteWVhci1saXN0L2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLmNvbnRhaW4ge1xuICBtYXJnaW46IDI0cnB4IDA7XG59XG5cbi5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FsZW5kYXItY2VsbC1pdGVtLWJvcmRlci1yYWRpdXMsIDEwNHJweCk7XG4gIGNvbG9yOiB2YXIoLS1jYWxlbmRhci1jZWxsLWl0ZW0tZm9udC1jb2xvciwgdmFyKC0tYXBwLUI0LU4xLCAjMDAwKSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FsZW5kYXItY2VsbC1pdGVtLWZvbnQtc2l6ZSwgMTVweCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jYWxlbmRhci1kYXktZm9udC13ZWlnaHQsIDUwMCk7XG4gIGhlaWdodDogdmFyKC0tY2FsZW5kYXItY2VsbC1pdGVtLWhlaWdodCwgMTA0cnB4KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGVuZGFyLWNlbGwtaXRlbS1oZWlnaHQsIDEwNHJweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IHZhcigtLWNhbGVuZGFyLWNlbGwtaXRlbS13aWR0aCwgMTA0cnB4KTtcbn1cblxuLml0ZW1fYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMzNjc4ZTM7XG59XG5cbi5pdGVtX2Rpc2FibGVkIHtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5jb2xfaXRlbSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3TzBGQlFYZENPenM3T3pzN096czdPenRCUVVGNVdUczdPenM3UVVGQk1rTTdPenM3UVVGQk1FSWlMQ0p6YjNWeVkyVnpJanBiSWxWelpYSnpMMmQxYm5OdGIydGxjaTlFYjJOMWJXVnVkSE12WjJsMEwwTnZiMnhwYm1kTmFYTjBUV0YwVUdGdVpXd3ZibTlrWlY5dGIyUjFiR1Z6TDBCMGRYbGhMVzFwYm1saGNIQXZjMjFoY25RdGRXa3ZiR2xpTDJOaGJHVnVaR0Z5TFhsbFlYSXRiR2x6ZEM5cGJtUmxlQzVqYzNNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lRR2x0Y0c5eWRDQW5MaTR2WTI5dGJXOXVMMmx1WkdWNExtTnpjeWM3TG1OdmJuUmhhVzU3YldGeVoybHVPakkwY25CNElEQjlMbWwwWlcxN1ltOXlaR1Z5TFhKaFpHbDFjenAyWVhJb0xTMWpZV3hsYm1SaGNpMWpaV3hzTFdsMFpXMHRZbTl5WkdWeUxYSmhaR2wxY3l3eE1EUnljSGdwTzJOdmJHOXlPblpoY2lndExXTmhiR1Z1WkdGeUxXTmxiR3d0YVhSbGJTMW1iMjUwTFdOdmJHOXlMSFpoY2lndExXRndjQzFDTkMxT01Td2pNREF3S1NrN1ptOXVkQzF6YVhwbE9uWmhjaWd0TFdOaGJHVnVaR0Z5TFdObGJHd3RhWFJsYlMxbWIyNTBMWE5wZW1Vc01UVndlQ2s3Wm05dWRDMTNaV2xuYUhRNmRtRnlLQzB0WTJGc1pXNWtZWEl0WkdGNUxXWnZiblF0ZDJWcFoyaDBMRFV3TUNrN2FHVnBaMmgwT25aaGNpZ3RMV05oYkdWdVpHRnlMV05sYkd3dGFYUmxiUzFvWldsbmFIUXNNVEEwY25CNEtUdHNhVzVsTFdobGFXZG9kRHAyWVhJb0xTMWpZV3hsYm1SaGNpMWpaV3hzTFdsMFpXMHRhR1ZwWjJoMExERXdOSEp3ZUNrN2RHVjRkQzFoYkdsbmJqcGpaVzUwWlhJN2QybGtkR2c2ZG1GeUtDMHRZMkZzWlc1a1lYSXRZMlZzYkMxcGRHVnRMWGRwWkhSb0xERXdOSEp3ZUNsOUxtbDBaVzFmWVdOMGFYWmxlMkpoWTJ0bmNtOTFibVE2SXpNMk56aGxNenRqYjJ4dmNqb2pabVptZlM1cGRHVnRYMlJwYzJGaWJHVmtlMjl3WVdOcGRIazZMalY5TG1OdmJGOXBkR1Z0ZTJScGMzQnNZWGs2Wm14bGVEdHFkWE4wYVdaNUxXTnZiblJsYm5RNlkyVnVkR1Z5ZlNKZExDSnVZVzFsY3lJNlcxMTkgKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXG5pbXBvcnQgb3ZlcnJpZGVDb21wb25lbnQgZnJvbSAnL1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL292ZXJsb2FkTmF0aXZlQ29tcG9uZW50Q29uc3RydWN0b3IudmlydHVhbC5qcyc7XG5jb25zdCBDb21wb25lbnQgPSBvdmVycmlkZUNvbXBvbmVudCgnY2FsZW5kYXIteWVhci1saXN0LWluZGV4LTQyNzZiNycpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gY29tcG9uZW50cy9tb250aC1saXN0LmpzXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jYWxlbmRhci11dGlscy91dGlsc1wiKTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgLyoqXG4gICAgICogXHU3RUM0XHU0RUY2XHU3Njg0XHU1QzVFXHU2MDI3XHU1MjE3XHU4ODY4XG4gICAgICovXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjWWVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtaW5EYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDMwLCAwLCAxKS5nZXRUaW1lKCksXG4gICAgICAgIH0sXG4gICAgICAgIG1heERhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMzAsIDExLCAzMSkuZ2V0VGltZSgpLFxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjMzY3OGUzJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFllYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB9LFxuICAgICAgICB5ZWFyRm9ybWF0dGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6ICdZWVlZJyxcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZUluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRZZWFyTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTc2ODRcdTUyMURcdTU5Q0JcdTY1NzBcdTYzNkVcbiAgICAgKi9cbiAgICBkYXRhOiB7XG4gICAgICAgIHllYXJzOiBbXSxcbiAgICAgICAgY3VycmVudFllYXI6IG51bGwsXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2V0WWVhckxpc3QoKTtcbiAgICAgICAgdGhpcy5jYWxjWWVhcigpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogXHU3RUM0XHU0RUY2XHU3Njg0XHU2NUI5XHU2Q0Q1XHU1MjE3XHU4ODY4XG4gICAgICovXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjYWxjWWVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGEuZGF0ZSk7XG4gICAgICAgICAgICB2YXIgY3VyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50WWVhcjogY3VyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFllYXJMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG1pbkRhdGUgPSBfYS5taW5EYXRlLCBtYXhEYXRlID0gX2EubWF4RGF0ZSwgX2IgPSBfYS55ZWFyRm9ybWF0dGVyLCB5ZWFyRm9ybWF0dGVyID0gX2IgPT09IHZvaWQgMCA/ICdZWVlZJyA6IF9iLCB2aXNpYmxlSW5kZXggPSBfYS52aXNpYmxlSW5kZXgsIGRhdGUgPSBfYS5kYXRlO1xuICAgICAgICAgICAgdmFyIGN1ciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdmlzaWJsZUluZGV4ICogMTI7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZShjdXIgKyBvZmZzZXQgLSA1LCAwLCAxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgZW5kID0gbmV3IERhdGUoY3VyICsgb2Zmc2V0ICsgNiwgMTEsIDMxKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgbWluU3RhcnQgPSBuZXcgRGF0ZShtaW5EYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgbWF4U3RhcnQgPSBuZXcgRGF0ZShtYXhEYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgeWVhcnMgPSAoMCwgdXRpbHNfMS5nZXRZZWFycykoc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICB2YXIgeWVhcmxpc3QgPSB5ZWFycy5tYXAoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeWVhclZhbCA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1clRpbWUgPSBuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAobWluRGF0ZSAmJiBtYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQgPSBjdXJUaW1lIDw9IG1pblN0YXJ0IHx8IGN1clRpbWUgPj0gbWF4U3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyVmFsLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB5ZWFyRm9ybWF0dGVyLnJlcGxhY2UoJ1lZWVknLCB5ZWFyVmFsKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogaXNEaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHllYXJzOiB5ZWFybGlzdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVhZG9ubHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmRhdGEueWVhcnNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSw4QkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IsaUNBQWlDO0FBR3JFLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUU1RCxRQUFJLFVBQVU7QUFDZCxRQUFJLGNBQWM7QUFDbEIsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJNUIsT0FBTztBQUFBLFFBQ0gsTUFBTTtBQUFBLFVBQ0YsTUFBTTtBQUFBLFVBQ04sVUFBVSxTQUFVLFFBQVEsUUFBUTtBQUNoQyxnQkFBSSxXQUFXLFFBQVE7QUFDbkIsbUJBQUssU0FBUztBQUFBLFlBQ2xCO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPLElBQUksTUFBSyxvQkFBSSxLQUFLLEdBQUUsWUFBWSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsUUFBUTtBQUFBLFFBQ2pFO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPLElBQUksTUFBSyxvQkFBSSxLQUFLLEdBQUUsWUFBWSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUTtBQUFBLFFBQ25FO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDSCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsYUFBYTtBQUFBLFVBQ1QsTUFB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
