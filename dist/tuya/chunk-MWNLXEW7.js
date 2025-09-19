import {
  require_version
} from "/chunk-SOVNIPSZ.js";
import {
  require_validator
} from "/chunk-UXQMYNQX.js";
import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/common/utils.js
var require_utils = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/common/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isWxWork = exports.isPC = exports.getCurrentPage = exports.clamp = exports.addNumber = exports.toPromise = exports.groupSetData = exports.getAllRect = exports.getRect = exports.pickExclude = exports.requestAnimationFrame = exports.addUnit = exports.nextTick = exports.range = exports.getSystemInfoSync = exports.isDef = void 0;
    var validator_1 = require_validator();
    var version_1 = require_version();
    var validator_2 = require_validator();
    Object.defineProperty(exports, "isDef", { enumerable: true, get: function() {
      return validator_2.isDef;
    } });
    var version_2 = require_version();
    Object.defineProperty(exports, "getSystemInfoSync", { enumerable: true, get: function() {
      return version_2.getSystemInfoSync;
    } });
    function range(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    exports.range = range;
    function nextTick(cb) {
      if ((0, version_1.canIUseNextTick)()) {
        wx.nextTick(cb);
      } else {
        setTimeout(function() {
          cb();
        }, 1e3 / 30);
      }
    }
    exports.nextTick = nextTick;
    function addUnit(value) {
      if (!(0, validator_1.isDef)(value)) {
        return void 0;
      }
      value = String(value);
      return (0, validator_1.isNumber)(value) ? "".concat(value, "px") : value;
    }
    exports.addUnit = addUnit;
    function requestAnimationFrame(cb) {
      return setTimeout(function() {
        cb();
      }, 1e3 / 30);
    }
    exports.requestAnimationFrame = requestAnimationFrame;
    function pickExclude(obj, keys) {
      if (!(0, validator_1.isPlainObject)(obj)) {
        return {};
      }
      return Object.keys(obj).reduce(function(prev, key) {
        if (!keys.includes(key)) {
          prev[key] = obj[key];
        }
        return prev;
      }, {});
    }
    exports.pickExclude = pickExclude;
    function getRect(context, selector) {
      return new Promise(function(resolve) {
        wx.createSelectorQuery().in(context).select(selector).boundingClientRect().exec(function(rect) {
          if (rect === void 0) {
            rect = [];
          }
          return resolve(rect[0]);
        });
      });
    }
    exports.getRect = getRect;
    function getAllRect(context, selector) {
      return new Promise(function(resolve) {
        wx.createSelectorQuery().in(context).selectAll(selector).boundingClientRect().exec(function(rect) {
          if (rect === void 0) {
            rect = [];
          }
          return resolve(rect[0]);
        });
      });
    }
    exports.getAllRect = getAllRect;
    function groupSetData(context, cb) {
      if ((0, version_1.canIUseGroupSetData)()) {
        context.groupSetData(cb);
      } else {
        cb();
      }
    }
    exports.groupSetData = groupSetData;
    function toPromise(promiseLike) {
      if ((0, validator_1.isPromise)(promiseLike)) {
        return promiseLike;
      }
      return Promise.resolve(promiseLike);
    }
    exports.toPromise = toPromise;
    function addNumber(num1, num2) {
      var cardinal = Math.pow(10, 10);
      return Math.round((num1 + num2) * cardinal) / cardinal;
    }
    exports.addNumber = addNumber;
    var clamp = function(num, min, max) {
      return Math.min(Math.max(num, min), max);
    };
    exports.clamp = clamp;
    function getCurrentPage() {
      var pages = getCurrentPages();
      return pages[pages.length - 1];
    }
    exports.getCurrentPage = getCurrentPage;
    exports.isPC = ["mac", "windows"].includes((0, version_1.getSystemInfoSync)().platform);
    exports.isWxWork = (0, version_1.getSystemInfoSync)().environment === "wxwork";
  }
});

export {
  require_utils
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbW1vbi91dGlscy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzV3hXb3JrID0gZXhwb3J0cy5pc1BDID0gZXhwb3J0cy5nZXRDdXJyZW50UGFnZSA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmFkZE51bWJlciA9IGV4cG9ydHMudG9Qcm9taXNlID0gZXhwb3J0cy5ncm91cFNldERhdGEgPSBleHBvcnRzLmdldEFsbFJlY3QgPSBleHBvcnRzLmdldFJlY3QgPSBleHBvcnRzLnBpY2tFeGNsdWRlID0gZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBleHBvcnRzLmFkZFVuaXQgPSBleHBvcnRzLm5leHRUaWNrID0gZXhwb3J0cy5yYW5nZSA9IGV4cG9ydHMuZ2V0U3lzdGVtSW5mb1N5bmMgPSBleHBvcnRzLmlzRGVmID0gdm9pZCAwO1xudmFyIHZhbGlkYXRvcl8xID0gcmVxdWlyZShcIi4vdmFsaWRhdG9yXCIpO1xudmFyIHZlcnNpb25fMSA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIik7XG52YXIgdmFsaWRhdG9yXzIgPSByZXF1aXJlKFwiLi92YWxpZGF0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0RlZlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdG9yXzIuaXNEZWY7IH0gfSk7XG52YXIgdmVyc2lvbl8yID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldFN5c3RlbUluZm9TeW5jXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2ZXJzaW9uXzIuZ2V0U3lzdGVtSW5mb1N5bmM7IH0gfSk7XG5mdW5jdGlvbiByYW5nZShudW0sIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcbmZ1bmN0aW9uIG5leHRUaWNrKGNiKSB7XG4gICAgaWYgKCgwLCB2ZXJzaW9uXzEuY2FuSVVzZU5leHRUaWNrKSgpKSB7XG4gICAgICAgIHd4Lm5leHRUaWNrKGNiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSwgMTAwMCAvIDMwKTtcbiAgICB9XG59XG5leHBvcnRzLm5leHRUaWNrID0gbmV4dFRpY2s7XG5mdW5jdGlvbiBhZGRVbml0KHZhbHVlKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdG9yXzEuaXNEZWYpKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgcmV0dXJuICgwLCB2YWxpZGF0b3JfMS5pc051bWJlcikodmFsdWUpID8gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIikgOiB2YWx1ZTtcbn1cbmV4cG9ydHMuYWRkVW5pdCA9IGFkZFVuaXQ7XG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNiKCk7XG4gICAgfSwgMTAwMCAvIDMwKTtcbn1cbmV4cG9ydHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuZnVuY3Rpb24gcGlja0V4Y2x1ZGUob2JqLCBrZXlzKSB7XG4gICAgaWYgKCEoMCwgdmFsaWRhdG9yXzEuaXNQbGFpbk9iamVjdCkob2JqKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShmdW5jdGlvbiAocHJldiwga2V5KSB7XG4gICAgICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBwcmV2W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59XG5leHBvcnRzLnBpY2tFeGNsdWRlID0gcGlja0V4Y2x1ZGU7XG5mdW5jdGlvbiBnZXRSZWN0KGNvbnRleHQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgLmluKGNvbnRleHQpXG4gICAgICAgICAgICAuc2VsZWN0KHNlbGVjdG9yKVxuICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAuZXhlYyhmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgaWYgKHJlY3QgPT09IHZvaWQgMCkgeyByZWN0ID0gW107IH1cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlY3RbMF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0UmVjdCA9IGdldFJlY3Q7XG5mdW5jdGlvbiBnZXRBbGxSZWN0KGNvbnRleHQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgLmluKGNvbnRleHQpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKHNlbGVjdG9yKVxuICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAuZXhlYyhmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgaWYgKHJlY3QgPT09IHZvaWQgMCkgeyByZWN0ID0gW107IH1cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlY3RbMF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0QWxsUmVjdCA9IGdldEFsbFJlY3Q7XG5mdW5jdGlvbiBncm91cFNldERhdGEoY29udGV4dCwgY2IpIHtcbiAgICBpZiAoKDAsIHZlcnNpb25fMS5jYW5JVXNlR3JvdXBTZXREYXRhKSgpKSB7XG4gICAgICAgIGNvbnRleHQuZ3JvdXBTZXREYXRhKGNiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNiKCk7XG4gICAgfVxufVxuZXhwb3J0cy5ncm91cFNldERhdGEgPSBncm91cFNldERhdGE7XG5mdW5jdGlvbiB0b1Byb21pc2UocHJvbWlzZUxpa2UpIHtcbiAgICBpZiAoKDAsIHZhbGlkYXRvcl8xLmlzUHJvbWlzZSkocHJvbWlzZUxpa2UpKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlTGlrZTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9taXNlTGlrZSk7XG59XG5leHBvcnRzLnRvUHJvbWlzZSA9IHRvUHJvbWlzZTtcbi8vIFx1NkQ2RVx1NzBCOVx1NjU3MFx1N0NCRVx1NUVBNlx1NTkwNFx1NzQwNlxuZnVuY3Rpb24gYWRkTnVtYmVyKG51bTEsIG51bTIpIHtcbiAgICB2YXIgY2FyZGluYWwgPSBNYXRoLnBvdygxMCwgMTApO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChudW0xICsgbnVtMikgKiBjYXJkaW5hbCkgLyBjYXJkaW5hbDtcbn1cbmV4cG9ydHMuYWRkTnVtYmVyID0gYWRkTnVtYmVyO1xuLy8gXHU5NjUwXHU1MjM2dmFsdWVcdTU3MjhbbWluLCBtYXhdXHU0RTRCXHU5NUY0XG52YXIgY2xhbXAgPSBmdW5jdGlvbiAobnVtLCBtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpOyB9O1xuZXhwb3J0cy5jbGFtcCA9IGNsYW1wO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgcmV0dXJuIHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xufVxuZXhwb3J0cy5nZXRDdXJyZW50UGFnZSA9IGdldEN1cnJlbnRQYWdlO1xuZXhwb3J0cy5pc1BDID0gWydtYWMnLCAnd2luZG93cyddLmluY2x1ZGVzKCgwLCB2ZXJzaW9uXzEuZ2V0U3lzdGVtSW5mb1N5bmMpKCkucGxhdGZvcm0pO1xuLy8gXHU2NjJGXHU1NDI2XHU0RjAxXHU0RTFBXHU1RkFFXHU0RkUxXG5leHBvcnRzLmlzV3hXb3JrID0gKDAsIHZlcnNpb25fMS5nZXRTeXN0ZW1JbmZvU3luYykoKS5lbnZpcm9ubWVudCA9PT0gJ3d4d29yayc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLFdBQVcsUUFBUSxPQUFPLFFBQVEsaUJBQWlCLFFBQVEsUUFBUSxRQUFRLFlBQVksUUFBUSxZQUFZLFFBQVEsZUFBZSxRQUFRLGFBQWEsUUFBUSxVQUFVLFFBQVEsY0FBYyxRQUFRLHdCQUF3QixRQUFRLFVBQVUsUUFBUSxXQUFXLFFBQVEsUUFBUSxRQUFRLG9CQUFvQixRQUFRLFFBQVE7QUFDeFUsUUFBSSxjQUFjO0FBQ2xCLFFBQUksWUFBWTtBQUNoQixRQUFJLGNBQWM7QUFDbEIsV0FBTyxlQUFlLFNBQVMsU0FBUyxFQUFFLFlBQVksTUFBTSxLQUFLLFdBQVk7QUFBRSxhQUFPLFlBQVk7QUFBQSxJQUFPLEVBQUUsQ0FBQztBQUM1RyxRQUFJLFlBQVk7QUFDaEIsV0FBTyxlQUFlLFNBQVMscUJBQXFCLEVBQUUsWUFBWSxNQUFNLEtBQUssV0FBWTtBQUFFLGFBQU8sVUFBVTtBQUFBLElBQW1CLEVBQUUsQ0FBQztBQUNsSSxhQUFTLE1BQU0sS0FBSyxLQUFLLEtBQUs7QUFD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
