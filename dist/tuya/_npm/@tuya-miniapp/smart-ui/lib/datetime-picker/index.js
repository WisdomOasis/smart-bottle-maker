import {
  require_shared
} from "/chunk-SX3VGSIV.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
import {
  require_validator
} from "/chunk-UXQMYNQX.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/datetime-picker/index.css
var require_datetime_picker = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/datetime-picker/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/datetime-picker/index.css
var require_datetime_picker2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/datetime-picker/index.css"(exports, module) {
    require_datetime_picker();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/datetime-picker/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/datetime-picker/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_datetime_picker2());
    var Component = overrideComponent("datetime-picker-index-f94ed3");
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var validator_1 = require_validator();
    var shared_1 = require_shared();
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    function isValidDate(date) {
      return (0, validator_1.isDef)(date) && !isNaN(new Date(date).getTime());
    }
    function range(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    function padZero(val) {
      return "00".concat(val).slice(-2);
    }
    function times(n, iteratee) {
      var index = -1;
      var result = Array(n < 0 ? 0 : n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getTrueValue(formattedValue) {
      if (formattedValue === void 0) {
        formattedValue = "1";
      }
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10);
    }
    function getMonthEndDay(year, month) {
      return 32 - new Date(year, month - 1, 32).getDate();
    }
    var defaultFormatter = function(type, value) {
      return value;
    };
    (0, component_1.SmartComponent)({
      classes: ["active-class", "toolbar-class", "column-class"],
      props: __assign(__assign({}, shared_1.pickerProps), { value: {
        type: null,
        observer: "updateValue"
      }, filter: null, type: {
        type: String,
        value: "datetime",
        observer: "updateValue"
      }, showToolbar: {
        type: Boolean,
        value: true
      }, locale: {
        type: Object
      }, formatter: {
        type: null,
        value: defaultFormatter
      }, minDate: {
        type: Number,
        value: new Date(currentYear - 10, 0, 1).getTime(),
        observer: "updateValue"
      }, maxDate: {
        type: Number,
        value: new Date(currentYear + 10, 11, 31).getTime(),
        observer: "updateValue"
      }, minHour: {
        type: Number,
        value: 0,
        observer: "updateValue"
      }, maxHour: {
        type: Number,
        value: 23,
        observer: "updateValue"
      }, minMinute: {
        type: Number,
        value: 0,
        observer: "updateValue"
      }, maxMinute: {
        type: Number,
        value: 59,
        observer: "updateValue"
      } }),
      data: {
        innerValue: Date.now(),
        columns: []
      },
      methods: {
        updateValue: function() {
          var _this = this;
          var data = this.data;
          var val = this.correctValue(data.value);
          var isEqual = val === data.innerValue;
          this.updateColumnValue(val).then(function() {
            if (!isEqual) {
              _this.$emit("input", val);
            }
          });
        },
        getPicker: function() {
          if (this.picker == null) {
            this.picker = this.selectComponent(".smart-datetime-picker");
            var picker_1 = this.picker;
            var setColumnValues_1 = picker_1.setColumnValues;
            picker_1.setColumnValues = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return setColumnValues_1.apply(picker_1, __spreadArray(__spreadArray([], args, true), [false], false));
            };
          }
          return this.picker;
        },
        updateColumns: function() {
          var _a = this.data, _b = _a.formatter, formatter = _b === void 0 ? defaultFormatter : _b, locale = _a.locale;
          var results = this.getOriginColumns().map(function(column) {
            return {
              values: column.values.map(function(value) {
                return formatter(column.type, value);
              }),
              unit: locale === null || locale === void 0 ? void 0 : locale[column.type]
            };
          });
          return this.set({ columns: results });
        },
        getOriginColumns: function() {
          var filter = this.data.filter;
          var results = this.getRanges().map(function(_a) {
            var type = _a.type, range2 = _a.range;
            var values = times(range2[1] - range2[0] + 1, function(index) {
              var value = range2[0] + index;
              return type === "year" ? "".concat(value) : padZero(value);
            });
            if (filter) {
              values = filter(type, values);
            }
            return { type, values };
          });
          return results;
        },
        getRanges: function() {
          var data = this.data;
          if (data.type === "time") {
            return [
              {
                type: "hour",
                range: [data.minHour, data.maxHour]
              },
              {
                type: "minute",
                range: [data.minMinute, data.maxMinute]
              }
            ];
          }
          var _a = this.getBoundary("max", data.innerValue), maxYear = _a.maxYear, maxDate = _a.maxDate, maxMonth = _a.maxMonth, maxHour = _a.maxHour, maxMinute = _a.maxMinute;
          var _b = this.getBoundary("min", data.innerValue), minYear = _b.minYear, minDate = _b.minDate, minMonth = _b.minMonth, minHour = _b.minHour, minMinute = _b.minMinute;
          var result = [
            {
              type: "year",
              range: [minYear, maxYear]
            },
            {
              type: "month",
              range: [minMonth, maxMonth]
            },
            {
              type: "day",
              range: [minDate, maxDate]
            },
            {
              type: "hour",
              range: [minHour, maxHour]
            },
            {
              type: "minute",
              range: [minMinute, maxMinute]
            }
          ];
          if (data.type === "date")
            result.splice(3, 2);
          if (data.type === "year-month")
            result.splice(2, 3);
          return result;
        },
        correctValue: function(value) {
          var data = this.data;
          var isDateType = data.type !== "time";
          if (isDateType && !isValidDate(value)) {
            value = data.minDate;
          } else if (!isDateType && !value) {
            var minHour = data.minHour;
            value = "".concat(padZero(minHour), ":00");
          }
          if (!isDateType) {
            var _a = value.split(":"), hour = _a[0], minute = _a[1];
            hour = padZero(range(hour, data.minHour, data.maxHour));
            minute = padZero(range(minute, data.minMinute, data.maxMinute));
            return "".concat(hour, ":").concat(minute);
          }
          value = Math.max(value, data.minDate);
          value = Math.min(value, data.maxDate);
          return value;
        },
        getBoundary: function(type, innerValue) {
          var _a;
          var value = new Date(innerValue);
          var boundary = new Date(this.data["".concat(type, "Date")]);
          var year = boundary.getFullYear();
          var month = 1;
          var date = 1;
          var hour = 0;
          var minute = 0;
          if (type === "max") {
            month = 12;
            date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
            hour = 23;
            minute = 59;
          }
          if (value.getFullYear() === year) {
            month = boundary.getMonth() + 1;
            if (value.getMonth() + 1 === month) {
              date = boundary.getDate();
              if (value.getDate() === date) {
                hour = boundary.getHours();
                if (value.getHours() === hour) {
                  minute = boundary.getMinutes();
                }
              }
            }
          }
          return _a = {}, _a["".concat(type, "Year")] = year, _a["".concat(type, "Month")] = month, _a["".concat(type, "Date")] = date, _a["".concat(type, "Hour")] = hour, _a["".concat(type, "Minute")] = minute, _a;
        },
        onCancel: function() {
          this.$emit("cancel");
        },
        onConfirm: function() {
          this.$emit("confirm", this.data.innerValue);
        },
        onChange: function() {
          var _this = this;
          var data = this.data;
          var value;
          var picker = this.getPicker();
          var originColumns = this.getOriginColumns();
          if (data.type === "time") {
            var indexes = picker.getIndexes();
            value = "".concat(+originColumns[0].values[indexes[0]], ":").concat(+originColumns[1].values[indexes[1]]);
          } else {
            var indexes = picker.getIndexes();
            var values = indexes.map(function(value2, index) {
              return originColumns[index].values[value2];
            });
            var year = getTrueValue(values[0]);
            var month = getTrueValue(values[1]);
            var maxDate = getMonthEndDay(year, month);
            var date = getTrueValue(values[2]);
            if (data.type === "year-month") {
              date = 1;
            }
            date = date > maxDate ? maxDate : date;
            var hour = 0;
            var minute = 0;
            if (data.type === "datetime") {
              hour = getTrueValue(values[3]);
              minute = getTrueValue(values[4]);
            }
            value = new Date(year, month - 1, date, hour, minute);
          }
          value = this.correctValue(value);
          this.updateColumnValue(value).then(function() {
            _this.$emit("input", value);
            _this.$emit("change", picker);
          });
        },
        updateColumnValue: function(value) {
          var _this = this;
          var values = [];
          var type = this.data.type;
          var formatter = this.data.formatter || defaultFormatter;
          var picker = this.getPicker();
          if (type === "time") {
            var pair = value.split(":");
            values = [formatter("hour", pair[0]), formatter("minute", pair[1])];
          } else {
            var date = new Date(value);
            values = [
              formatter("year", "".concat(date.getFullYear())),
              formatter("month", padZero(date.getMonth() + 1))
            ];
            if (type === "date") {
              values.push(formatter("day", padZero(date.getDate())));
            }
            if (type === "datetime") {
              values.push(formatter("day", padZero(date.getDate())), formatter("hour", padZero(date.getHours())), formatter("minute", padZero(date.getMinutes())));
            }
          }
          return this.set({ innerValue: value }).then(function() {
            return _this.updateColumns();
          }).then(function() {
            return picker.setValues(values);
          });
        }
      },
      created: function() {
        var _this = this;
        var innerValue = this.correctValue(this.data.value);
        this.updateColumnValue(innerValue).then(function() {
          _this.$emit("input", innerValue);
        });
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvZGF0ZXRpbWUtcGlja2VyL2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2RhdGV0aW1lLXBpY2tlci9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvZGF0ZXRpbWUtcGlja2VyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFaUxDSnpiM1Z5WTJWeklqcGJJbFZ6WlhKekwyZDFibk50YjJ0bGNpOUViMk4xYldWdWRITXZaMmwwTDBOdmIyeHBibWROYVhOMFRXRjBVR0Z1Wld3dmJtOWtaVjl0YjJSMWJHVnpMMEIwZFhsaExXMXBibWxoY0hBdmMyMWhjblF0ZFdrdmJHbGlMMlJoZEdWMGFXMWxMWEJwWTJ0bGNpOXBibVJsZUM1amMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpUUdsdGNHOXlkQ0FuTGk0dlkyOXRiVzl1TDJsdVpHVjRMbU56Y3ljN0lsMHNJbTVoYldWeklqcGJYWDA9ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ2RhdGV0aW1lLXBpY2tlci1pbmRleC1mOTRlZDMnKTtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB2YWxpZGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdmFsaWRhdG9yXCIpO1xudmFyIHNoYXJlZF8xID0gcmVxdWlyZShcIi4uL3BpY2tlci9zaGFyZWRcIik7XG52YXIgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5mdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuICgwLCB2YWxpZGF0b3JfMS5pc0RlZikoZGF0ZSkgJiYgIWlzTmFOKG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKSk7XG59XG5mdW5jdGlvbiByYW5nZShudW0sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cbmZ1bmN0aW9uIHBhZFplcm8odmFsKSB7XG4gICAgcmV0dXJuIFwiMDBcIi5jb25jYXQodmFsKS5zbGljZSgtMik7XG59XG5mdW5jdGlvbiB0aW1lcyhuLCBpdGVyYXRlZSkge1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHZhciByZXN1bHQgPSBBcnJheShuIDwgMCA/IDAgOiBuKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldFRydWVWYWx1ZShmb3JtYXR0ZWRWYWx1ZSkge1xuICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gJzEnO1xuICAgIH1cbiAgICB3aGlsZSAoaXNOYU4ocGFyc2VJbnQoZm9ybWF0dGVkVmFsdWUsIDEwKSkpIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZS5zbGljZSgxKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KGZvcm1hdHRlZFZhbHVlLCAxMCk7XG59XG5mdW5jdGlvbiBnZXRNb250aEVuZERheSh5ZWFyLCBtb250aCkge1xuICAgIHJldHVybiAzMiAtIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMzIpLmdldERhdGUoKTtcbn1cbnZhciBkZWZhdWx0Rm9ybWF0dGVyID0gZnVuY3Rpb24gKHR5cGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbigwLCBjb21wb25lbnRfMS5TbWFydENvbXBvbmVudCkoe1xuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXG4gICAgcHJvcHM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzaGFyZWRfMS5waWNrZXJQcm9wcyksIHsgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgfSwgZmlsdGVyOiBudWxsLCB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RhdGV0aW1lJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICB9LCBzaG93VG9vbGJhcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LCBsb2NhbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgfSwgZm9ybWF0dGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgIH0sIG1pbkRhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShjdXJyZW50WWVhciAtIDEwLCAwLCAxKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVZhbHVlJyxcbiAgICAgICAgfSwgbWF4RGF0ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGN1cnJlbnRZZWFyICsgMTAsIDExLCAzMSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVWYWx1ZScsXG4gICAgICAgIH0sIG1pbkhvdXI6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVWYWx1ZScsXG4gICAgICAgIH0sIG1heEhvdXI6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAyMyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlVmFsdWUnLFxuICAgICAgICB9LCBtaW5NaW51dGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVWYWx1ZScsXG4gICAgICAgIH0sIG1heE1pbnV0ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDU5LFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVWYWx1ZScsXG4gICAgICAgIH0gfSksXG4gICAgZGF0YToge1xuICAgICAgICBpbm5lclZhbHVlOiBEYXRlLm5vdygpLFxuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLmNvcnJlY3RWYWx1ZShkYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIHZhciBpc0VxdWFsID0gdmFsID09PSBkYXRhLmlubmVyVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtblZhbHVlKHZhbCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdpbnB1dCcsIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBpY2tlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGlja2VyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlciA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcuc21hcnQtZGF0ZXRpbWUtcGlja2VyJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBpY2tlcl8xID0gdGhpcy5waWNrZXI7XG4gICAgICAgICAgICAgICAgdmFyIHNldENvbHVtblZhbHVlc18xID0gcGlja2VyXzEuc2V0Q29sdW1uVmFsdWVzO1xuICAgICAgICAgICAgICAgIHBpY2tlcl8xLnNldENvbHVtblZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0Q29sdW1uVmFsdWVzXzEuYXBwbHkocGlja2VyXzEsIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgYXJncywgdHJ1ZSksIFtmYWxzZV0sIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlcjtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29sdW1uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBfYiA9IF9hLmZvcm1hdHRlciwgZm9ybWF0dGVyID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRGb3JtYXR0ZXIgOiBfYiwgbG9jYWxlID0gX2EubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLmdldE9yaWdpbkNvbHVtbnMoKS5tYXAoZnVuY3Rpb24gKGNvbHVtbikgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGNvbHVtbi52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gZm9ybWF0dGVyKGNvbHVtbi50eXBlLCB2YWx1ZSk7IH0pLFxuICAgICAgICAgICAgICAgIHVuaXQ6IGxvY2FsZSA9PT0gbnVsbCB8fCBsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvY2FsZVtjb2x1bW4udHlwZV0sXG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoeyBjb2x1bW5zOiByZXN1bHRzIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRPcmlnaW5Db2x1bW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5kYXRhLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0gdGhpcy5nZXRSYW5nZXMoKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBfYS50eXBlLCByYW5nZSA9IF9hLnJhbmdlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0aW1lcyhyYW5nZVsxXSAtIHJhbmdlWzBdICsgMSwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJhbmdlWzBdICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAneWVhcicgPyBcIlwiLmNvbmNhdCh2YWx1ZSkgOiBwYWRaZXJvKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IGZpbHRlcih0eXBlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlLCB2YWx1ZXM6IHZhbHVlcyB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdob3VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbZGF0YS5taW5Ib3VyLCBkYXRhLm1heEhvdXJdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbZGF0YS5taW5NaW51dGUsIGRhdGEubWF4TWludXRlXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRCb3VuZGFyeSgnbWF4JywgZGF0YS5pbm5lclZhbHVlKSwgbWF4WWVhciA9IF9hLm1heFllYXIsIG1heERhdGUgPSBfYS5tYXhEYXRlLCBtYXhNb250aCA9IF9hLm1heE1vbnRoLCBtYXhIb3VyID0gX2EubWF4SG91ciwgbWF4TWludXRlID0gX2EubWF4TWludXRlO1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5nZXRCb3VuZGFyeSgnbWluJywgZGF0YS5pbm5lclZhbHVlKSwgbWluWWVhciA9IF9iLm1pblllYXIsIG1pbkRhdGUgPSBfYi5taW5EYXRlLCBtaW5Nb250aCA9IF9iLm1pbk1vbnRoLCBtaW5Ib3VyID0gX2IubWluSG91ciwgbWluTWludXRlID0gX2IubWluTWludXRlO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd5ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5ZZWFyLCBtYXhZZWFyXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5Nb250aCwgbWF4TW9udGhdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5EYXRlLCBtYXhEYXRlXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hvdXInLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogW21pbkhvdXIsIG1heEhvdXJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWludXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFttaW5NaW51dGUsIG1heE1pbnV0ZV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnZGF0ZScpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNwbGljZSgzLCAyKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd5ZWFyLW1vbnRoJylcbiAgICAgICAgICAgICAgICByZXN1bHQuc3BsaWNlKDIsIDMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgY29ycmVjdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdmFsdWVcbiAgICAgICAgICAgIHZhciBpc0RhdGVUeXBlID0gZGF0YS50eXBlICE9PSAndGltZSc7XG4gICAgICAgICAgICBpZiAoaXNEYXRlVHlwZSAmJiAhaXNWYWxpZERhdGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhLm1pbkRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghaXNEYXRlVHlwZSAmJiAhdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWluSG91ciA9IGRhdGEubWluSG91cjtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiXCIuY29uY2F0KHBhZFplcm8obWluSG91ciksIFwiOjAwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGltZSB0eXBlXG4gICAgICAgICAgICBpZiAoIWlzRGF0ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB2YWx1ZS5zcGxpdCgnOicpLCBob3VyID0gX2FbMF0sIG1pbnV0ZSA9IF9hWzFdO1xuICAgICAgICAgICAgICAgIGhvdXIgPSBwYWRaZXJvKHJhbmdlKGhvdXIsIGRhdGEubWluSG91ciwgZGF0YS5tYXhIb3VyKSk7XG4gICAgICAgICAgICAgICAgbWludXRlID0gcGFkWmVybyhyYW5nZShtaW51dGUsIGRhdGEubWluTWludXRlLCBkYXRhLm1heE1pbnV0ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChob3VyLCBcIjpcIikuY29uY2F0KG1pbnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkYXRlIHR5cGVcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgodmFsdWUsIGRhdGEubWluRGF0ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHZhbHVlLCBkYXRhLm1heERhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRCb3VuZGFyeTogZnVuY3Rpb24gKHR5cGUsIGlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG5ldyBEYXRlKGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gbmV3IERhdGUodGhpcy5kYXRhW1wiXCIuY29uY2F0KHR5cGUsIFwiRGF0ZVwiKV0pO1xuICAgICAgICAgICAgdmFyIHllYXIgPSBib3VuZGFyeS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gMTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gMTtcbiAgICAgICAgICAgIHZhciBob3VyID0gMDtcbiAgICAgICAgICAgIHZhciBtaW51dGUgPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtYXgnKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSAxMjtcbiAgICAgICAgICAgICAgICBkYXRlID0gZ2V0TW9udGhFbmREYXkodmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGhvdXIgPSAyMztcbiAgICAgICAgICAgICAgICBtaW51dGUgPSA1OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSBib3VuZGFyeS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZ2V0TW9udGgoKSArIDEgPT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBib3VuZGFyeS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5nZXREYXRlKCkgPT09IGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgPSBib3VuZGFyeS5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPT09IGhvdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBib3VuZGFyeS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtcIlwiLmNvbmNhdCh0eXBlLCBcIlllYXJcIildID0geWVhcixcbiAgICAgICAgICAgICAgICBfYVtcIlwiLmNvbmNhdCh0eXBlLCBcIk1vbnRoXCIpXSA9IG1vbnRoLFxuICAgICAgICAgICAgICAgIF9hW1wiXCIuY29uY2F0KHR5cGUsIFwiRGF0ZVwiKV0gPSBkYXRlLFxuICAgICAgICAgICAgICAgIF9hW1wiXCIuY29uY2F0KHR5cGUsIFwiSG91clwiKV0gPSBob3VyLFxuICAgICAgICAgICAgICAgIF9hW1wiXCIuY29uY2F0KHR5cGUsIFwiTWludXRlXCIpXSA9IG1pbnV0ZSxcbiAgICAgICAgICAgICAgICBfYTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCB0aGlzLmRhdGEuaW5uZXJWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICB2YXIgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW5Db2x1bW5zID0gdGhpcy5nZXRPcmlnaW5Db2x1bW5zKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhlcyA9IHBpY2tlci5nZXRJbmRleGVzKCk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIlwiLmNvbmNhdCgrb3JpZ2luQ29sdW1uc1swXS52YWx1ZXNbaW5kZXhlc1swXV0sIFwiOlwiKS5jb25jYXQoK29yaWdpbkNvbHVtbnNbMV0udmFsdWVzW2luZGV4ZXNbMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleGVzID0gcGlja2VyLmdldEluZGV4ZXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkgeyByZXR1cm4gb3JpZ2luQ29sdW1uc1tpbmRleF0udmFsdWVzW3ZhbHVlXTsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHllYXIgPSBnZXRUcnVlVmFsdWUodmFsdWVzWzBdKTtcbiAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBnZXRUcnVlVmFsdWUodmFsdWVzWzFdKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF4RGF0ZSA9IGdldE1vbnRoRW5kRGF5KHllYXIsIG1vbnRoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbMl0pO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICd5ZWFyLW1vbnRoJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUgPiBtYXhEYXRlID8gbWF4RGF0ZSA6IGRhdGU7XG4gICAgICAgICAgICAgICAgdmFyIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBtaW51dGUgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdkYXRldGltZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IGdldFRydWVWYWx1ZSh2YWx1ZXNbM10pO1xuICAgICAgICAgICAgICAgICAgICBtaW51dGUgPSBnZXRUcnVlVmFsdWUodmFsdWVzWzRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUsIGhvdXIsIG1pbnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY29ycmVjdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sdW1uVmFsdWUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY2hhbmdlJywgcGlja2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDb2x1bW5WYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmRhdGEudHlwZTtcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSB0aGlzLmRhdGEuZm9ybWF0dGVyIHx8IGRlZmF1bHRGb3JtYXR0ZXI7XG4gICAgICAgICAgICB2YXIgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFpciA9IHZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW2Zvcm1hdHRlcignaG91cicsIHBhaXJbMF0pLCBmb3JtYXR0ZXIoJ21pbnV0ZScsIHBhaXJbMV0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyKCd5ZWFyJywgXCJcIi5jb25jYXQoZGF0ZS5nZXRGdWxsWWVhcigpKSksXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcignbW9udGgnLCBwYWRaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpKSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goZm9ybWF0dGVyKCdkYXknLCBwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGV0aW1lJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChmb3JtYXR0ZXIoJ2RheScsIHBhZFplcm8oZGF0ZS5nZXREYXRlKCkpKSwgZm9ybWF0dGVyKCdob3VyJywgcGFkWmVybyhkYXRlLmdldEhvdXJzKCkpKSwgZm9ybWF0dGVyKCdtaW51dGUnLCBwYWRaZXJvKGRhdGUuZ2V0TWludXRlcygpKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCh7IGlubmVyVmFsdWU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlQ29sdW1ucygpOyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBpY2tlci5zZXRWYWx1ZXModmFsdWVzKTsgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbm5lclZhbHVlID0gdGhpcy5jb3JyZWN0VmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5WYWx1ZShpbm5lclZhbHVlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLiRlbWl0KCdpbnB1dCcsIGlubmVyVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSwyQkFBQTtBQUFBO0FBQUE7QUFH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QVUsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsR0FBRyxVQUFVLFFBQVEsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxVQUFVLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFDdko7QUFBQSxVQUNKO0FBQ0EsaUJBQU8sS0FBSyxJQUFJLEVBQUUsWUFBWSxNQUFNLENBQUMsRUFDaEMsS0FBSyxXQUFZO0FBQUUsbUJBQU8sTUFBTSxjQUFjO0FBQUEsVUFBRyxDQUFDLEVBQ2xELEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU8sVUFBVSxNQUFNO0FBQUEsVUFBRyxDQUFDO0FBQUEsUUFDOUQ7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTLFdBQVk7QUFDakIsWUFBSSxRQUFRO0FBQ1osWUFBSSxhQUFhLEtBQUssYUFBYSxLQUFLLEtBQUssS0FBSztBQUNsRCxhQUFLLGtCQUFrQixVQUFVLEVBQUUsS0FBSyxXQUFZO0FBQ2hELGdCQUFNLE1BQU0sU0FBUyxVQUFVO0FBQUEsUUFDbkMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX2RhdGV0aW1lX3BpY2tlciIsICJyYW5nZSIsICJ2YWx1ZSJdCn0K
