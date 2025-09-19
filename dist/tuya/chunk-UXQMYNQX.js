import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/common/validator.js
var require_validator = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/common/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isVideoUrl = exports.isImageUrl = exports.isBoolean = exports.isNumber = exports.isObj = exports.isDef = exports.isPromise = exports.isPlainObject = exports.isFunction = void 0;
    function isFunction(val) {
      return typeof val === "function";
    }
    exports.isFunction = isFunction;
    function isPlainObject(val) {
      return val !== null && typeof val === "object" && !Array.isArray(val);
    }
    exports.isPlainObject = isPlainObject;
    function isPromise(val) {
      return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
    }
    exports.isPromise = isPromise;
    function isDef(value) {
      return value !== void 0 && value !== null;
    }
    exports.isDef = isDef;
    function isObj(x) {
      var type = typeof x;
      return x !== null && (type === "object" || type === "function");
    }
    exports.isObj = isObj;
    function isNumber(value) {
      return /^\d+(\.\d+)?$/.test(value);
    }
    exports.isNumber = isNumber;
    function isBoolean(value) {
      return typeof value === "boolean";
    }
    exports.isBoolean = isBoolean;
    var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
    function isImageUrl(url) {
      return IMAGE_REGEXP.test(url);
    }
    exports.isImageUrl = isImageUrl;
    function isVideoUrl(url) {
      return VIDEO_REGEXP.test(url);
    }
    exports.isVideoUrl = isVideoUrl;
  }
});

export {
  require_validator
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbW1vbi92YWxpZGF0b3IuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1ZpZGVvVXJsID0gZXhwb3J0cy5pc0ltYWdlVXJsID0gZXhwb3J0cy5pc0Jvb2xlYW4gPSBleHBvcnRzLmlzTnVtYmVyID0gZXhwb3J0cy5pc09iaiA9IGV4cG9ydHMuaXNEZWYgPSBleHBvcnRzLmlzUHJvbWlzZSA9IGV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGV4cG9ydHMuaXNGdW5jdGlvbiA9IHZvaWQgMDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpO1xufVxuZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gaXNQbGFpbk9iamVjdDtcbmZ1bmN0aW9uIGlzUHJvbWlzZSh2YWwpIHtcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnRoZW4pICYmIGlzRnVuY3Rpb24odmFsLmNhdGNoKTtcbn1cbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuZnVuY3Rpb24gaXNEZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNEZWYgPSBpc0RlZjtcbmZ1bmN0aW9uIGlzT2JqKHgpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB4O1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn1cbmV4cG9ydHMuaXNPYmogPSBpc09iajtcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eXFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKTtcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xudmFyIElNQUdFX1JFR0VYUCA9IC9cXC4oanBlZ3xqcGd8Z2lmfHBuZ3xzdmd8d2VicHxqZmlmfGJtcHxkcGcpL2k7XG52YXIgVklERU9fUkVHRVhQID0gL1xcLihtcDR8bXBnfG1wZWd8ZGF0fGFzZnxhdml8cm18cm12Ynxtb3Z8d212fGZsdnxta3YpL2k7XG5mdW5jdGlvbiBpc0ltYWdlVXJsKHVybCkge1xuICAgIHJldHVybiBJTUFHRV9SRUdFWFAudGVzdCh1cmwpO1xufVxuZXhwb3J0cy5pc0ltYWdlVXJsID0gaXNJbWFnZVVybDtcbmZ1bmN0aW9uIGlzVmlkZW9VcmwodXJsKSB7XG4gICAgcmV0dXJuIFZJREVPX1JFR0VYUC50ZXN0KHVybCk7XG59XG5leHBvcnRzLmlzVmlkZW9VcmwgPSBpc1ZpZGVvVXJsO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxhQUFhLFFBQVEsYUFBYSxRQUFRLFlBQVksUUFBUSxXQUFXLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxZQUFZLFFBQVEsZ0JBQWdCLFFBQVEsYUFBYTtBQUVsTCxhQUFTLFdBQVcsS0FBSztBQUNyQixhQUFPLE9BQU8sUUFBUTtBQUFBLElBQzFCO0FBQ0EsWUFBUSxhQUFhO0FBQ3JCLGFBQVMsY0FBYyxLQUFLO0FBQ3hCLGFBQU8sUUFBUSxRQUFRLE9BQU8sUUFBUSxZQUFZLENBQUMsTUFBTSxRQUFRLEdBQUc7QUFBQSxJQUN4RTtBQUNBLFlBQVEsZ0JBQWdCO0FBQ3hCLGFBQVMsVUFBVSxLQUFLO0FBQ3BCLGFBQU8sY0FBYyxHQUFHLEtBQUssV0FBVyxJQUFJLElBQUksS0FBSyxXQUFXLElBQUksS0FBSztBQUFBLElBQzdFO0FBQ0EsWUFBUSxZQUFZO0FBQ3BCLGFBQVMsTUFBTSxPQUFPO0FBQ2xCLGFBQU8sVUFBVSxVQUFhLFVBQVU7QUFBQSxJQUM1QztBQUNBLFlBQVEsUUFBUTtBQUNoQixhQUFTLE1BQU0sR0FBRztBQUNkLFVBQUksT0FBTyxPQUFPO0FBQ2xCLGFBQU8sTUFBTSxTQUFTLFNBQVMsWUFBWSxTQUFTO0FBQUEsSUFDeEQ7QUFDQSxZQUFRLFFBQVE7QUFDaEIsYUFBUyxTQUFTLE9BQU87QUFDckIsYUFBTyxnQkFBZ0IsS0FBSyxLQUFLO0FBQUEsSUFDckM7QUFDQSxZQUFRLFdBQVc7QUFDbkIsYUFBUyxVQUFVLE9BQU87QUFDdEIsYUFBTyxPQUFPLFVBQVU7QUFBQSxJQUM1QjtBQUNBLFlBQVEsWUFBWTtBQUNwQixRQUFJLGVBQWU7QUFDbkIsUUFBSSxlQUFlO0FBQ25CLGFBQVMsV0FBVyxLQUFLO0FBQ3JCLGFBQU8sYUFBYSxLQUFLLEdBQUc7QUFBQSxJQUNoQztBQUNBLFlBQVEsYUFBYTtBQUNyQixhQUFTLFdBQVcsS0FBSztBQUNyQixhQUFPLGFBQWEsS0FBSyxHQUFHO0FBQUEsSUFDaEM7QUFDQSxZQUFRLGFBQWE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
