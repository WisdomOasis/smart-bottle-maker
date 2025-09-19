import {
  require_utils
} from "/chunk-KNHK5MFR.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
import {
  require_toast
} from "/chunk-CQBMKGKR.js";
import "/chunk-UXQMYNQX.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar/index.css
var require_calendar = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar/index.css
var require_calendar2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar/index.css"(exports, module) {
    require_calendar();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/calendar/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_calendar2());
    var Component = overrideComponent("calendar-index-4ecd13");
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var utils_1 = require_utils();
    var toast_1 = __importDefault(require_toast());
    var dateEdge = (0, utils_1.getInitEdgeDate)("year");
    var getTime = function(date) {
      return date instanceof Date ? date.getTime() : date;
    };
    (0, component_1.SmartComponent)({
      props: {
        title: {
          type: String,
          value: "Select Date"
        },
        color: String,
        show: {
          type: Boolean,
          observer: function(val) {
            if (val) {
              this.initRect();
              this.scrollIntoView();
            }
          }
        },
        locale: {
          type: Object,
          value: {
            shortWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthsFormatter: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec"
            ],
            yearFormatter: "YYYY",
            subFormatter: "YYYY-MM",
            rangeStart: "Start",
            rangeEnd: "End"
          }
        },
        confirmText: {
          type: String,
          value: "Confirm"
        },
        confirmDisabledText: {
          type: String,
          value: "Confirm"
        },
        rangePrompt: String,
        showRangePrompt: {
          type: Boolean,
          value: true
        },
        defaultDate: {
          type: null,
          value: (0, utils_1.getToday)().getTime(),
          observer: function(val) {
            this.setData({ currentDate: val });
            this.scrollIntoView();
          }
        },
        allowSameDay: Boolean,
        type: {
          type: String,
          value: "single",
          observer: "reset"
        },
        minDate: {
          type: Number,
          value: dateEdge.min
        },
        maxDate: {
          type: Number,
          value: dateEdge.max
        },
        position: {
          type: String,
          value: "bottom"
        },
        rowHeight: {
          type: null,
          value: utils_1.ROW_HEIGHT
        },
        round: {
          type: Boolean,
          value: true
        },
        poppable: {
          type: Boolean,
          value: false
        },
        showMark: {
          type: Boolean,
          value: true
        },
        showTitle: {
          type: Boolean,
          value: true
        },
        showConfirm: {
          type: Boolean,
          value: false
        },
        showSubtitle: {
          type: Boolean,
          value: true
        },
        safeAreaInsetBottom: {
          type: Boolean,
          value: true
        },
        closeOnClickOverlay: {
          type: Boolean,
          value: true
        },
        maxRange: {
          type: null,
          value: null
        },
        minRange: {
          type: Number,
          value: 1
        },
        firstDayOfWeek: {
          type: Number,
          value: 0
        },
        readonly: Boolean,
        rootPortal: {
          type: Boolean,
          value: false
        },
        dayClassMap: {
          type: null
        }
      },
      data: {
        subtitle: "",
        currentDate: null,
        scrollIntoView: "",
        visibleIndex: 0,
        months: []
      },
      watch: {
        minDate: function() {
          this.initRect();
        },
        maxDate: function() {
          this.initRect();
        }
      },
      created: function() {
        this.initData();
      },
      mounted: function() {
        this.isMounted = true;
        if (this.data.show || !this.data.poppable) {
          this.initRect();
          this.scrollIntoView();
        }
      },
      methods: {
        onPrev: function() {
          var visibleIndex = this.data.visibleIndex - 1;
          if (this.data.type === "year") {
            this.setData({
              visibleIndex
            });
            return;
          }
          if (this.data.type === "month") {
            var nextDate = new Date(this.data.currentDate);
            nextDate.setFullYear(nextDate.getFullYear() - 1);
            this.select(nextDate, true);
            this.setData({
              visibleIndex,
              currentDate: nextDate
            });
            return;
          }
          if (this.data.months[visibleIndex]) {
            this.setData({
              visibleIndex
            });
          }
        },
        onNext: function() {
          var visibleIndex = this.data.visibleIndex + 1;
          if (this.data.type === "year") {
            this.setData({
              visibleIndex
            });
            return;
          }
          if (this.data.type === "month") {
            var nextDate = new Date(this.data.currentDate);
            nextDate.setFullYear(nextDate.getFullYear() + 1);
            this.select(nextDate, true);
            this.setData({
              visibleIndex,
              currentDate: nextDate
            });
            return;
          }
          if (this.data.months[visibleIndex]) {
            this.setData({
              visibleIndex
            });
          }
        },
        reset: function() {
          this.setData({ currentDate: this.getInitialDate(this.data.defaultDate) });
          this.scrollIntoView();
        },
        initData: function() {
          var currentDate = this.getInitialDate(this.data.defaultDate);
          var months = (0, utils_1.getMonths)(this.data.minDate, this.data.maxDate);
          var visibleIndex = this.data.defaultDate ? (0, utils_1.getCurrentIndex)(currentDate, months) : months.length - 1;
          var isYear = this.data.type === "year";
          var isMonth = this.data.type === "month";
          var data = {
            currentDate,
            months,
            visibleIndex
          };
          if (isYear || isMonth) {
            delete data.visibleIndex;
          }
          this.setData(data);
        },
        initRect: function() {
          if (!this.isMounted)
            return;
          this.initData();
        },
        limitDateRange: function(date, minDate, maxDate) {
          if (minDate === void 0) {
            minDate = null;
          }
          if (maxDate === void 0) {
            maxDate = null;
          }
          var _a = (0, utils_1.getInitEdgeDate)(this.data.type), min = _a.min, max = _a.max;
          minDate = minDate || this.data.minDate || min;
          maxDate = maxDate || this.data.maxDate || max;
          if ((0, utils_1.compareDay)(date, minDate) === -1) {
            return minDate;
          }
          if ((0, utils_1.compareDay)(date, maxDate) === 1) {
            return maxDate;
          }
          return date;
        },
        getInitialDate: function(defaultDate) {
          var _this = this;
          if (defaultDate === void 0) {
            defaultDate = null;
          }
          var _a = this.data, type = _a.type, minDate = _a.minDate, maxDate = _a.maxDate, allowSameDay = _a.allowSameDay;
          if (!defaultDate)
            return [];
          var now = (0, utils_1.getToday)().getTime();
          if (type === "range" || type === "week") {
            if (!Array.isArray(defaultDate)) {
              defaultDate = [];
            }
            var _b = defaultDate || [], startDay = _b[0], endDay = _b[1];
            var startDate = getTime(startDay || now);
            var start = this.limitDateRange(startDate, minDate, allowSameDay ? startDate : (0, utils_1.getPrevDay)(new Date(maxDate)).getTime());
            var date = getTime(endDay || now);
            var end = this.limitDateRange(date, allowSameDay ? date : (0, utils_1.getNextDay)(new Date(minDate)).getTime());
            return [start, end];
          }
          if (type === "multiple") {
            if (Array.isArray(defaultDate)) {
              return defaultDate.map(function(date2) {
                return _this.limitDateRange(date2);
              });
            }
            return [this.limitDateRange(now)];
          }
          if (!defaultDate || Array.isArray(defaultDate)) {
            defaultDate = now;
          }
          return this.limitDateRange(defaultDate);
        },
        scrollIntoView: function() {
        },
        onOpen: function() {
          this.$emit("open");
        },
        onOpened: function() {
          this.$emit("opened");
        },
        onClose: function() {
          this.$emit("close");
        },
        onClosed: function() {
          this.$emit("closed");
        },
        onClickDay: function(event) {
          if (this.data.readonly) {
            return;
          }
          var date = event.detail.date;
          var _a = this.data, type = _a.type, currentDate = _a.currentDate, allowSameDay = _a.allowSameDay;
          if (type === "week") {
            var _b = (0, utils_1.getWeekStartAndEnd)(date), weekStart = _b.weekStart, weekEnd = _b.weekEnd;
            this.select([
              Math.max(getTime(weekStart), getTime(this.data.minDate)),
              Math.min(getTime(weekEnd), getTime(this.data.maxDate))
            ], true);
          } else if (type === "range") {
            var startDay_1 = currentDate[0], endDay = currentDate[1];
            if (startDay_1 && !endDay) {
              var compareToStart = (0, utils_1.compareDay)(date, startDay_1);
              if (compareToStart === 1) {
                var days_1 = this.selectComponent(".month").data.days;
                days_1.some(function(day, index) {
                  var isDisabled = day.type === "disabled" && getTime(startDay_1) < getTime(day.date) && getTime(day.date) < getTime(date);
                  if (isDisabled) {
                    date = days_1[index - 1].date;
                  }
                  return isDisabled;
                });
                this.select([startDay_1, date], true);
              } else if (compareToStart === -1) {
                this.select([date, null]);
              } else if (allowSameDay) {
                this.select([date, date], true);
              }
            } else {
              this.select([date, null]);
            }
          } else if (type === "multiple") {
            var selectedIndex_1;
            var selected = currentDate.some(function(dateItem, index) {
              var equal = (0, utils_1.compareDay)(dateItem, date) === 0;
              if (equal) {
                selectedIndex_1 = index;
              }
              return equal;
            });
            if (selected) {
              var cancelDate = currentDate.splice(selectedIndex_1, 1);
              this.setData({ currentDate });
              this.unselect(cancelDate);
            } else {
              this.select(__spreadArray(__spreadArray([], currentDate, true), [date], false));
            }
          } else {
            this.select(date, true);
          }
        },
        onClickDate: function(event) {
          if (this.data.readonly) {
            return;
          }
          var date = event.detail;
          this.select(date, true);
        },
        unselect: function(dateArray) {
          var date = dateArray[0];
          if (date) {
            this.$emit("unselect", (0, utils_1.copyDates)(date));
          }
        },
        select: function(date, complete) {
          if (complete && this.data.type === "range") {
            var valid = this.checkRange(date);
            if (!valid) {
              if (this.data.showConfirm) {
                this.emit([date[0], (0, utils_1.getDayByOffset)(date[0], this.data.maxRange - 1)]);
              } else {
                this.emit(date);
              }
              return;
            }
          }
          this.emit(date);
          if (complete && !this.data.showConfirm) {
            this.onConfirm();
          }
        },
        emit: function(date) {
          this.setData({
            currentDate: Array.isArray(date) ? date.map(getTime) : getTime(date)
          });
          this.$emit("select", (0, utils_1.copyDates)(date));
        },
        checkRange: function(date) {
          var _a = this.data, maxRange = _a.maxRange, rangePrompt = _a.rangePrompt, showRangePrompt = _a.showRangePrompt;
          if (maxRange && (0, utils_1.calcDateNum)(date) > maxRange) {
            if (showRangePrompt) {
              (0, toast_1.default)({
                context: this,
                message: rangePrompt || "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 ".concat(maxRange, " \u5929")
              });
            }
            this.$emit("over-range");
            return false;
          }
          return true;
        },
        onConfirm: function() {
          var _this = this;
          if (this.data.type === "range" && !this.checkRange(this.data.currentDate)) {
            return;
          }
          wx.nextTick(function() {
            _this.$emit("confirm", (0, utils_1.copyDates)(_this.data.currentDate));
          });
        },
        onClickSubtitle: function(event) {
          this.$emit("click-subtitle", event);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FsZW5kYXIvaW5kZXguY3NzIiwgInN0eWxlLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY2FsZW5kYXIvaW5kZXguY3NzIiwgIm5hdGl2ZS1jb21wb25lbnQ6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NhbGVuZGFyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LWNhbGVuZGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsZW5kYXItYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tYXBwLUI2LCAjZmZmKSk7XG4gIGNvbG9yOiB2YXIoLS1jYWxlbmRhci10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc21hcnQtY2FsZW5kYXJfX2Nsb3NlLWljb24ge1xuICB0b3A6IDExcHg7XG59XG5cbi5zbWFydC1jYWxlbmRhcl9fcG9wdXAtLWJvdHRvbSwgLnNtYXJ0LWNhbGVuZGFyX19wb3B1cC0tdG9wIHtcbiAgaGVpZ2h0OiA4NDhycHg7XG59XG5cbi5zbWFydC1jYWxlbmRhcl9fcG9wdXAtLWxlZnQsIC5zbWFydC1jYWxlbmRhcl9fcG9wdXAtLXJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc21hcnQtY2FsZW5kYXItbW9udGgge1xuICBtYXJnaW4tdG9wOiAwcnB4O1xufVxuXG4uc21hcnQtY2FsZW5kYXJfX2JvZHkge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc21hcnQtY2FsZW5kYXJfX2Zvb3RlciB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy1tZCwgMTZweCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc21hcnQtY2FsZW5kYXJfX2Zvb3Rlci0tc2FmZS1hcmVhLWluc2V0LWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG59XG5cbi5zbWFydC1jYWxlbmRhcl9fZm9vdGVyICsgLnNtYXJ0LWNhbGVuZGFyX19mb290ZXIsIC5zbWFydC1jYWxlbmRhcl9fZm9vdGVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNtYXJ0LWNhbGVuZGFyX19mb290ZXI6ZW1wdHkgKyAuc21hcnQtY2FsZW5kYXJfX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpwdWRXeHNMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPMEZCUVRoQ096czdPenM3T3p0QlFVRXdTenM3T3p0QlFVRnhRenM3T3p0QlFVRjVSVHM3T3p0QlFVRjFSVHM3T3p0QlFVRnpRenM3T3pzN08wRkJRVFJGT3pzN096dEJRVUYxUlRzN096dEJRVUV5UmpzN096dEJRVUV5UmlJc0luTnZkWEpqWlhNaU9sc2lWWE5sY25NdlozVnVjMjF2YTJWeUwwUnZZM1Z0Wlc1MGN5OW5hWFF2UTI5dmJHbHVaMDFwYzNSTllYUlFZVzVsYkM5dWIyUmxYMjF2WkhWc1pYTXZRSFIxZVdFdGJXbHVhV0Z3Y0M5emJXRnlkQzExYVM5c2FXSXZZMkZzWlc1a1lYSXZhVzVrWlhndVkzTnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWtCcGJYQnZjblFnSnk0dUwyTnZiVzF2Ymk5cGJtUmxlQzVqYzNNbk95NXpiV0Z5ZEMxallXeGxibVJoY250aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T25aaGNpZ3RMV05oYkdWdVpHRnlMV0poWTJ0bmNtOTFibVF0WTI5c2IzSXNkbUZ5S0MwdFlYQndMVUkyTENObVptWXBLVHRqYjJ4dmNqcDJZWElvTFMxallXeGxibVJoY2kxMFpYaDBMV052Ykc5eUxDTXdNREFwTzJScGMzQnNZWGs2Wm14bGVEdG1iR1Y0TFdScGNtVmpkR2x2YmpwamIyeDFiVzQ3YUdWcFoyaDBPbUYxZEc5OUxuTnRZWEowTFdOaGJHVnVaR0Z5WDE5amJHOXpaUzFwWTI5dWUzUnZjRG94TVhCNGZTNXpiV0Z5ZEMxallXeGxibVJoY2w5ZmNHOXdkWEF0TFdKdmRIUnZiU3d1YzIxaGNuUXRZMkZzWlc1a1lYSmZYM0J2Y0hWd0xTMTBiM0I3YUdWcFoyaDBPamcwT0hKd2VIMHVjMjFoY25RdFkyRnNaVzVrWVhKZlgzQnZjSFZ3TFMxc1pXWjBMQzV6YldGeWRDMWpZV3hsYm1SaGNsOWZjRzl3ZFhBdExYSnBaMmgwZTJobGFXZG9kRG94TURBbGZTNXpiV0Z5ZEMxallXeGxibVJoY2kxdGIyNTBhSHR0WVhKbmFXNHRkRzl3T2pCeWNIaDlMbk50WVhKMExXTmhiR1Z1WkdGeVgxOWliMlI1ZXkxM1pXSnJhWFF0YjNabGNtWnNiM2N0YzJOeWIyeHNhVzVuT25SdmRXTm9PMlpzWlhnNk1UdHZkbVZ5Wm14dmR6cGhkWFJ2ZlM1emJXRnlkQzFqWVd4bGJtUmhjbDlmWm05dmRHVnllMlpzWlhndGMyaHlhVzVyT2pBN2NHRmtaR2x1Wnpvd0lIWmhjaWd0TFhCaFpHUnBibWN0YldRc01UWndlQ2w5TG5OdFlYSjBMV05oYkdWdVpHRnlYMTltYjI5MFpYSXRMWE5oWm1VdFlYSmxZUzFwYm5ObGRDMWliM1IwYjIxN2NHRmtaR2x1WnkxaWIzUjBiMjA2Wlc1MktITmhabVV0WVhKbFlTMXBibk5sZEMxaWIzUjBiMjBwZlM1emJXRnlkQzFqWVd4bGJtUmhjbDlmWm05dmRHVnlLeTV6YldGeWRDMWpZV3hsYm1SaGNsOWZabTl2ZEdWeUxDNXpiV0Z5ZEMxallXeGxibVJoY2w5ZlptOXZkR1Z5T21WdGNIUjVlMlJwYzNCc1lYazZibTl1WlgwdWMyMWhjblF0WTJGc1pXNWtZWEpmWDJadmIzUmxjanBsYlhCMGVTc3VjMjFoY25RdFkyRnNaVzVrWVhKZlgyWnZiM1JsY250a2FYTndiR0Y1T21Kc2IyTnJJV2x0Y0c5eWRHRnVkSDBpWFN3aWJtRnRaWE1pT2x0ZGZRPT0gKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXG5pbXBvcnQgb3ZlcnJpZGVDb21wb25lbnQgZnJvbSAnL1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL292ZXJsb2FkTmF0aXZlQ29tcG9uZW50Q29uc3RydWN0b3IudmlydHVhbC5qcyc7XG5jb25zdCBDb21wb25lbnQgPSBvdmVycmlkZUNvbXBvbmVudCgnY2FsZW5kYXItaW5kZXgtNGVjZDEzJyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NhbGVuZGFyLXV0aWxzL3V0aWxzXCIpO1xudmFyIHRvYXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3RvYXN0L3RvYXN0XCIpKTtcbnZhciBkYXRlRWRnZSA9ICgwLCB1dGlsc18xLmdldEluaXRFZGdlRGF0ZSkoJ3llYXInKTtcbnZhciBnZXRUaW1lID0gZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIChkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGUuZ2V0VGltZSgpIDogZGF0ZSk7IH07XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdTZWxlY3QgRGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHNob3J0V2Vla0RheXM6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgICAgICAgICAgbW9udGhzRm9ybWF0dGVyOiBbXG4gICAgICAgICAgICAgICAgICAgICdKYW4nLFxuICAgICAgICAgICAgICAgICAgICAnRmViJyxcbiAgICAgICAgICAgICAgICAgICAgJ01hcicsXG4gICAgICAgICAgICAgICAgICAgICdBcHInLFxuICAgICAgICAgICAgICAgICAgICAnTWF5JyxcbiAgICAgICAgICAgICAgICAgICAgJ0p1bicsXG4gICAgICAgICAgICAgICAgICAgICdKdWwnLFxuICAgICAgICAgICAgICAgICAgICAnQXVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NlcHQnLFxuICAgICAgICAgICAgICAgICAgICAnT2N0JyxcbiAgICAgICAgICAgICAgICAgICAgJ05vdicsXG4gICAgICAgICAgICAgICAgICAgICdEZWMnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgeWVhckZvcm1hdHRlcjogJ1lZWVknLFxuICAgICAgICAgICAgICAgIHN1YkZvcm1hdHRlcjogJ1lZWVktTU0nLFxuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQ6ICdTdGFydCcsXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQ6ICdFbmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybVRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnQ29uZmlybScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm1EaXNhYmxlZFRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnQ29uZmlybScsXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmdlUHJvbXB0OiBTdHJpbmcsXG4gICAgICAgIHNob3dSYW5nZVByb21wdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0RGF0ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiAoMCwgdXRpbHNfMS5nZXRUb2RheSkoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnREYXRlOiB2YWwgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWxsb3dTYW1lRGF5OiBCb29sZWFuLFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3Jlc2V0JyxcbiAgICAgICAgfSxcbiAgICAgICAgbWluRGF0ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGVFZGdlLm1pbixcbiAgICAgICAgfSxcbiAgICAgICAgbWF4RGF0ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGVFZGdlLm1heCxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnYm90dG9tJyxcbiAgICAgICAgfSxcbiAgICAgICAgcm93SGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IHV0aWxzXzEuUk9XX0hFSUdIVCxcbiAgICAgICAgfSxcbiAgICAgICAgcm91bmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9wcGFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNYXJrOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dUaXRsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzaG93Q29uZmlybToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd1N1YnRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBtYXhSYW5nZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBtaW5SYW5nZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0RGF5T2ZXZWVrOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIHJvb3RQb3J0YWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRheUNsYXNzTWFwOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzdWJ0aXRsZTogJycsXG4gICAgICAgIGN1cnJlbnREYXRlOiBudWxsLFxuICAgICAgICBzY3JvbGxJbnRvVmlldzogJycsXG4gICAgICAgIHZpc2libGVJbmRleDogMCxcbiAgICAgICAgbW9udGhzOiBbXSxcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIG1pbkRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlY3QoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWF4RGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVjdCgpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93IHx8ICF0aGlzLmRhdGEucG9wcGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblByZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2aXNpYmxlSW5kZXggPSB0aGlzLmRhdGEudmlzaWJsZUluZGV4IC0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUluZGV4OiB2aXNpYmxlSW5kZXgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSAnbW9udGgnKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHREYXRlID0gbmV3IERhdGUodGhpcy5kYXRhLmN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICBuZXh0RGF0ZS5zZXRGdWxsWWVhcihuZXh0RGF0ZS5nZXRGdWxsWWVhcigpIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QobmV4dERhdGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVJbmRleDogdmlzaWJsZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZTogbmV4dERhdGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tb250aHNbdmlzaWJsZUluZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVJbmRleDogdmlzaWJsZUluZGV4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbk5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2aXNpYmxlSW5kZXggPSB0aGlzLmRhdGEudmlzaWJsZUluZGV4ICsgMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUluZGV4OiB2aXNpYmxlSW5kZXgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSAnbW9udGgnKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHREYXRlID0gbmV3IERhdGUodGhpcy5kYXRhLmN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICBuZXh0RGF0ZS5zZXRGdWxsWWVhcihuZXh0RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QobmV4dERhdGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVJbmRleDogdmlzaWJsZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZTogbmV4dERhdGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tb250aHNbdmlzaWJsZUluZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVJbmRleDogdmlzaWJsZUluZGV4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudERhdGU6IHRoaXMuZ2V0SW5pdGlhbERhdGUodGhpcy5kYXRhLmRlZmF1bHREYXRlKSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbERhdGUodGhpcy5kYXRhLmRlZmF1bHREYXRlKTtcbiAgICAgICAgICAgIHZhciBtb250aHMgPSAoMCwgdXRpbHNfMS5nZXRNb250aHMpKHRoaXMuZGF0YS5taW5EYXRlLCB0aGlzLmRhdGEubWF4RGF0ZSk7XG4gICAgICAgICAgICB2YXIgdmlzaWJsZUluZGV4ID0gdGhpcy5kYXRhLmRlZmF1bHREYXRlXG4gICAgICAgICAgICAgICAgPyAoMCwgdXRpbHNfMS5nZXRDdXJyZW50SW5kZXgpKGN1cnJlbnREYXRlLCBtb250aHMpXG4gICAgICAgICAgICAgICAgOiBtb250aHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBpc1llYXIgPSB0aGlzLmRhdGEudHlwZSA9PT0gJ3llYXInO1xuICAgICAgICAgICAgdmFyIGlzTW9udGggPSB0aGlzLmRhdGEudHlwZSA9PT0gJ21vbnRoJztcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlOiBjdXJyZW50RGF0ZSxcbiAgICAgICAgICAgICAgICBtb250aHM6IG1vbnRocyxcbiAgICAgICAgICAgICAgICB2aXNpYmxlSW5kZXg6IHZpc2libGVJbmRleCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNZZWFyIHx8IGlzTW9udGgpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEudmlzaWJsZUluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBpbml0UmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW91bnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0RGF0ZVJhbmdlOiBmdW5jdGlvbiAoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSkge1xuICAgICAgICAgICAgaWYgKG1pbkRhdGUgPT09IHZvaWQgMCkgeyBtaW5EYXRlID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKG1heERhdGUgPT09IHZvaWQgMCkgeyBtYXhEYXRlID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIF9hID0gKDAsIHV0aWxzXzEuZ2V0SW5pdEVkZ2VEYXRlKSh0aGlzLmRhdGEudHlwZSksIG1pbiA9IF9hLm1pbiwgbWF4ID0gX2EubWF4O1xuICAgICAgICAgICAgbWluRGF0ZSA9IG1pbkRhdGUgfHwgdGhpcy5kYXRhLm1pbkRhdGUgfHwgbWluO1xuICAgICAgICAgICAgbWF4RGF0ZSA9IG1heERhdGUgfHwgdGhpcy5kYXRhLm1heERhdGUgfHwgbWF4O1xuICAgICAgICAgICAgaWYgKCgwLCB1dGlsc18xLmNvbXBhcmVEYXkpKGRhdGUsIG1pbkRhdGUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW5EYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgwLCB1dGlsc18xLmNvbXBhcmVEYXkpKGRhdGUsIG1heERhdGUpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heERhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW5pdGlhbERhdGU6IGZ1bmN0aW9uIChkZWZhdWx0RGF0ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0ZSA9PT0gdm9pZCAwKSB7IGRlZmF1bHREYXRlID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB0eXBlID0gX2EudHlwZSwgbWluRGF0ZSA9IF9hLm1pbkRhdGUsIG1heERhdGUgPSBfYS5tYXhEYXRlLCBhbGxvd1NhbWVEYXkgPSBfYS5hbGxvd1NhbWVEYXk7XG4gICAgICAgICAgICBpZiAoIWRlZmF1bHREYXRlKVxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIHZhciBub3cgPSAoMCwgdXRpbHNfMS5nZXRUb2RheSkoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JhbmdlJyB8fCB0eXBlID09PSAnd2VlaycpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGVmYXVsdERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfYiA9IGRlZmF1bHREYXRlIHx8IFtdLCBzdGFydERheSA9IF9iWzBdLCBlbmREYXkgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gZ2V0VGltZShzdGFydERheSB8fCBub3cpO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IHRoaXMubGltaXREYXRlUmFuZ2Uoc3RhcnREYXRlLCBtaW5EYXRlLCBhbGxvd1NhbWVEYXkgPyBzdGFydERhdGUgOiAoMCwgdXRpbHNfMS5nZXRQcmV2RGF5KShuZXcgRGF0ZShtYXhEYXRlKSkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IGdldFRpbWUoZW5kRGF5IHx8IG5vdyk7XG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IHRoaXMubGltaXREYXRlUmFuZ2UoZGF0ZSwgYWxsb3dTYW1lRGF5ID8gZGF0ZSA6ICgwLCB1dGlsc18xLmdldE5leHREYXkpKG5ldyBEYXRlKG1pbkRhdGUpKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbc3RhcnQsIGVuZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRlZmF1bHREYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGUubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBfdGhpcy5saW1pdERhdGVSYW5nZShkYXRlKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5saW1pdERhdGVSYW5nZShub3cpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZGVmYXVsdERhdGUgfHwgQXJyYXkuaXNBcnJheShkZWZhdWx0RGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0RGF0ZSA9IG5vdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbWl0RGF0ZVJhbmdlKGRlZmF1bHREYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGlmICghdGhpcy5pc01vdW50ZWQpIHJldHVybjtcbiAgICAgICAgfSxcbiAgICAgICAgb25PcGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uT3BlbmVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdvcGVuZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlZCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrRGF5OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGV2ZW50LmRldGFpbC5kYXRlO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB0eXBlID0gX2EudHlwZSwgY3VycmVudERhdGUgPSBfYS5jdXJyZW50RGF0ZSwgYWxsb3dTYW1lRGF5ID0gX2EuYWxsb3dTYW1lRGF5O1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9ICgwLCB1dGlsc18xLmdldFdlZWtTdGFydEFuZEVuZCkoZGF0ZSksIHdlZWtTdGFydCA9IF9iLndlZWtTdGFydCwgd2Vla0VuZCA9IF9iLndlZWtFbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoW1xuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChnZXRUaW1lKHdlZWtTdGFydCksIGdldFRpbWUodGhpcy5kYXRhLm1pbkRhdGUpKSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oZ2V0VGltZSh3ZWVrRW5kKSwgZ2V0VGltZSh0aGlzLmRhdGEubWF4RGF0ZSkpLFxuICAgICAgICAgICAgICAgIF0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnREYXlfMSA9IGN1cnJlbnREYXRlWzBdLCBlbmREYXkgPSBjdXJyZW50RGF0ZVsxXTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREYXlfMSAmJiAhZW5kRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wYXJlVG9TdGFydCA9ICgwLCB1dGlsc18xLmNvbXBhcmVEYXkpKGRhdGUsIHN0YXJ0RGF5XzEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVRvU3RhcnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzXzEgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLm1vbnRoJykuZGF0YS5kYXlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c18xLnNvbWUoZnVuY3Rpb24gKGRheSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IGRheS50eXBlID09PSAnZGlzYWJsZWQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRpbWUoc3RhcnREYXlfMSkgPCBnZXRUaW1lKGRheS5kYXRlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUaW1lKGRheS5kYXRlKSA8IGdldFRpbWUoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGUgPSBkYXlzXzFbaW5kZXggLSAxXS5kYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzRGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KFtzdGFydERheV8xLCBkYXRlXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29tcGFyZVRvU3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChbZGF0ZSwgbnVsbF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFsbG93U2FtZURheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoW2RhdGUsIGRhdGVdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoW2RhdGUsIG51bGxdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXhfMTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY3VycmVudERhdGUuc29tZShmdW5jdGlvbiAoZGF0ZUl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcXVhbCA9ICgwLCB1dGlsc18xLmNvbXBhcmVEYXkpKGRhdGVJdGVtLCBkYXRlKSA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4XzEgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXF1YWw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbERhdGUgPSBjdXJyZW50RGF0ZS5zcGxpY2Uoc2VsZWN0ZWRJbmRleF8xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudERhdGU6IGN1cnJlbnREYXRlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2VsZWN0KGNhbmNlbERhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIGN1cnJlbnREYXRlLCB0cnVlKSwgW2RhdGVdLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGRhdGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrRGF0ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRhdGUgPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChkYXRlLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5zZWxlY3Q6IGZ1bmN0aW9uIChkYXRlQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZGF0ZUFycmF5WzBdO1xuICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1bnNlbGVjdCcsICgwLCB1dGlsc18xLmNvcHlEYXRlcykoZGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChkYXRlLCBjb21wbGV0ZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlICYmIHRoaXMuZGF0YS50eXBlID09PSAncmFuZ2UnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5jaGVja1JhbmdlKGRhdGUpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXV0byBzZWxlY3RlZCB0byBtYXggcmFuZ2UgaWYgc2hvd0NvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93Q29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFtkYXRlWzBdLCAoMCwgdXRpbHNfMS5nZXREYXlCeU9mZnNldCkoZGF0ZVswXSwgdGhpcy5kYXRhLm1heFJhbmdlIC0gMSldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGRhdGUpO1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlICYmICF0aGlzLmRhdGEuc2hvd0NvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29uZmlybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0OiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZTogQXJyYXkuaXNBcnJheShkYXRlKSA/IGRhdGUubWFwKGdldFRpbWUpIDogZ2V0VGltZShkYXRlKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgKDAsIHV0aWxzXzEuY29weURhdGVzKShkYXRlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrUmFuZ2U6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG1heFJhbmdlID0gX2EubWF4UmFuZ2UsIHJhbmdlUHJvbXB0ID0gX2EucmFuZ2VQcm9tcHQsIHNob3dSYW5nZVByb21wdCA9IF9hLnNob3dSYW5nZVByb21wdDtcbiAgICAgICAgICAgIGlmIChtYXhSYW5nZSAmJiAoMCwgdXRpbHNfMS5jYWxjRGF0ZU51bSkoZGF0ZSkgPiBtYXhSYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChzaG93UmFuZ2VQcm9tcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHRvYXN0XzEuZGVmYXVsdCkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJhbmdlUHJvbXB0IHx8IFwiXFx1OTAwOVxcdTYyRTlcXHU1OTI5XFx1NjU3MFxcdTRFMERcXHU4MEZEXFx1OEQ4NVxcdThGQzcgXCIuY29uY2F0KG1heFJhbmdlLCBcIiBcXHU1OTI5XCIpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3Zlci1yYW5nZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT09ICdyYW5nZScgJiYgIXRoaXMuY2hlY2tSYW5nZSh0aGlzLmRhdGEuY3VycmVudERhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY29uZmlybScsICgwLCB1dGlsc18xLmNvcHlEYXRlcykoX3RoaXMuZGF0YS5jdXJyZW50RGF0ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tTdWJ0aXRsZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1zdWJ0aXRsZScsIGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsb0JBQUE7QUFBQTtBQUFBO0FBR0EsV0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNIbEI7QUFBQTtBQUNBO0FBRUEsdUJBQU87QUFEUCxRQUFNLFlBQVksa0JBQWtCLHVCQUF1QjtBQUczRCxRQUFJLGdCQUFpQixXQUFRLFFBQUssaUJBQWtCLFNBQVUsSUFBSSxNQUFNLE1BQU07QUFDMUUsVUFBSSxRQUFRLFVBQVUsV0FBVztBQUFHLGlCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksR0FBRyxLQUFLO0FBQ2pGLGNBQUksTUFBTSxFQUFFLEtBQUssT0FBTztBQUNwQixnQkFBSSxDQUFDO0FBQUksbUJBQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEdBQUcsQ0FBQztBQUNuRCxlQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBQSxVQUNsQjtBQUFBLFFBQ0o7QUFDQSxhQUFPLEdBQUcsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssSUFBSSxDQUFDO0FBQUEsSUFDM0Q7QUFD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
