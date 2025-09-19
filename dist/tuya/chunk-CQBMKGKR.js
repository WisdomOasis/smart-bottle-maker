import {
  require_validator
} from "/chunk-UXQMYNQX.js";
import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/toast/toast.js
var require_toast = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/toast/toast.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", { value: true });
    var validator_1 = require_validator();
    var defaultOptions = {
      type: "text",
      mask: false,
      message: "",
      show: true,
      zIndex: 1e3,
      duration: 2e3,
      position: "middle",
      forbidClick: false,
      loadingType: "circular",
      selector: "#smart-toast",
      width: "100%"
    };
    var queue = [];
    var currentOptions = __assign({}, defaultOptions);
    function parseOptions(message) {
      return (0, validator_1.isObj)(message) ? message : { message };
    }
    function getContext() {
      var pages = getCurrentPages();
      return pages[pages.length - 1];
    }
    function Toast(toastOptions) {
      var options = __assign(__assign({}, currentOptions), parseOptions(toastOptions));
      var context = (typeof options.context === "function" ? options.context() : options.context) || getContext();
      var toast = context.selectComponent(options.selector);
      if (!toast) {
        console.warn("\u672A\u627E\u5230 smart-toast \u8282\u70B9\uFF0C\u8BF7\u786E\u8BA4 selector \u53CA context \u662F\u5426\u6B63\u786E");
        return;
      }
      delete options.context;
      delete options.selector;
      toast.clear = function() {
        toast.setData({ show: false });
        if (options.onClose) {
          options.onClose();
        }
      };
      queue.push(toast);
      toast.setData(options);
      clearTimeout(toast.timer);
      if (options.duration != null && options.duration > 0) {
        toast.timer = setTimeout(function() {
          toast.clear();
          queue = queue.filter(function(item) {
            return item !== toast;
          });
        }, options.duration);
      }
      return toast;
    }
    var createMethod = function(type) {
      return function(options) {
        return Toast(__assign({ type }, parseOptions(options)));
      };
    };
    Toast.loading = createMethod("loading");
    Toast.success = createMethod("success");
    Toast.fail = createMethod("fail");
    Toast.warn = createMethod("warn");
    Toast.clear = function() {
      queue.forEach(function(toast) {
        toast.clear();
      });
      queue = [];
    };
    Toast.setDefaultOptions = function(options) {
      Object.assign(currentOptions, options);
    };
    Toast.resetDefaultOptions = function() {
      currentOptions = __assign({}, defaultOptions);
    };
    exports.default = Toast;
  }
});

export {
  require_toast
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3RvYXN0L3RvYXN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdmFsaWRhdG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3ZhbGlkYXRvclwiKTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgbWFzazogZmFsc2UsXG4gICAgbWVzc2FnZTogJycsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgZHVyYXRpb246IDIwMDAsXG4gICAgcG9zaXRpb246ICdtaWRkbGUnLFxuICAgIGZvcmJpZENsaWNrOiBmYWxzZSxcbiAgICBsb2FkaW5nVHlwZTogJ2NpcmN1bGFyJyxcbiAgICBzZWxlY3RvcjogJyNzbWFydC10b2FzdCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbn07XG52YXIgcXVldWUgPSBbXTtcbi8vIEB0cy1leHBlY3QtZXJyb3JcbnZhciBjdXJyZW50T3B0aW9ucyA9IF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyk7XG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMobWVzc2FnZSkge1xuICAgIHJldHVybiAoMCwgdmFsaWRhdG9yXzEuaXNPYmopKG1lc3NhZ2UpID8gbWVzc2FnZSA6IHsgbWVzc2FnZTogbWVzc2FnZSB9O1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICByZXR1cm4gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG59XG5mdW5jdGlvbiBUb2FzdCh0b2FzdE9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyZW50T3B0aW9ucyksIHBhcnNlT3B0aW9ucyh0b2FzdE9wdGlvbnMpKTtcbiAgICB2YXIgY29udGV4dCA9ICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5jb250ZXh0KCkgOiBvcHRpb25zLmNvbnRleHQpIHx8IGdldENvbnRleHQoKTtcbiAgICB2YXIgdG9hc3QgPSBjb250ZXh0LnNlbGVjdENvbXBvbmVudChvcHRpb25zLnNlbGVjdG9yKTtcbiAgICBpZiAoIXRvYXN0KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignXHU2NzJBXHU2MjdFXHU1MjMwIHNtYXJ0LXRvYXN0IFx1ODI4Mlx1NzBCOVx1RkYwQ1x1OEJGN1x1Nzg2RVx1OEJBNCBzZWxlY3RvciBcdTUzQ0EgY29udGV4dCBcdTY2MkZcdTU0MjZcdTZCNjNcdTc4NkUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgb3B0aW9ucy5jb250ZXh0O1xuICAgIGRlbGV0ZSBvcHRpb25zLnNlbGVjdG9yO1xuICAgIHRvYXN0LmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0b2FzdC5zZXREYXRhKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ2xvc2UpIHtcbiAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBxdWV1ZS5wdXNoKHRvYXN0KTtcbiAgICB0b2FzdC5zZXREYXRhKG9wdGlvbnMpO1xuICAgIGNsZWFyVGltZW91dCh0b2FzdC50aW1lcik7XG4gICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT0gbnVsbCAmJiBvcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB0b2FzdC50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9hc3QuY2xlYXIoKTtcbiAgICAgICAgICAgIHF1ZXVlID0gcXVldWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtICE9PSB0b2FzdDsgfSk7XG4gICAgICAgIH0sIG9wdGlvbnMuZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdG9hc3Q7XG59XG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIFRvYXN0KF9fYXNzaWduKHsgdHlwZTogdHlwZSB9LCBwYXJzZU9wdGlvbnMob3B0aW9ucykpKTtcbn07IH07XG5Ub2FzdC5sb2FkaW5nID0gY3JlYXRlTWV0aG9kKCdsb2FkaW5nJyk7XG5Ub2FzdC5zdWNjZXNzID0gY3JlYXRlTWV0aG9kKCdzdWNjZXNzJyk7XG5Ub2FzdC5mYWlsID0gY3JlYXRlTWV0aG9kKCdmYWlsJyk7XG5Ub2FzdC53YXJuID0gY3JlYXRlTWV0aG9kKCd3YXJuJyk7XG5Ub2FzdC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0b2FzdCkge1xuICAgICAgICB0b2FzdC5jbGVhcigpO1xuICAgIH0pO1xuICAgIHF1ZXVlID0gW107XG59O1xuVG9hc3Quc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24oY3VycmVudE9wdGlvbnMsIG9wdGlvbnMpO1xufTtcblRvYXN0LnJlc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGN1cnJlbnRPcHRpb25zID0gX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUb2FzdDtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxXQUFZLFdBQVEsUUFBSyxZQUFhLFdBQVk7QUFDbEQsaUJBQVcsT0FBTyxVQUFVLFNBQVMsR0FBRztBQUNwQyxpQkFBUyxHQUFHLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUNqRCxjQUFJLFVBQVUsQ0FBQztBQUNmLG1CQUFTLEtBQUs7QUFBRyxnQkFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUcsQ0FBQztBQUMxRCxnQkFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQUEsUUFDbEI7QUFDQSxlQUFPO0FBQUEsTUFDWDtBQUNBLGFBQU8sU0FBUyxNQUFNLE1BQU0sU0FBUztBQUFBLElBQ3pDO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFFBQUksY0FBYztBQUNsQixRQUFJLGlCQUFpQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxJQUNYO0FBQ0EsUUFBSSxRQUFRLENBQUM7QUFFYixRQUFJLGlCQUFpQixTQUFTLENBQUMsR0FBRyxjQUFjO0FBQ2hELGFBQVMsYUFBYSxTQUFTO0FBQzNCLGNBQVEsR0FBRyxZQUFZLE9BQU8sT0FBTyxJQUFJLFVBQVUsRUFBRSxRQUFpQjtBQUFBLElBQzFFO0FBQ0EsYUFBUyxhQUFhO0FBQ2xCLFVBQUksUUFBUSxnQkFBZ0I7QUFDNUIsYUFBTyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQUEsSUFDakM7QUFDQSxhQUFTLE1BQU0sY0FBYztBQUN6QixVQUFJLFVBQVUsU0FBUyxTQUFTLENBQUMsR0FBRyxjQUFjLEdBQUcsYUFBYSxZQUFZLENBQUM7QUFDL0UsVUFBSSxXQUFXLE9BQU8sUUFBUSxZQUFZLGFBQWEsUUFBUSxRQUFRLElBQUksUUFBUSxZQUFZLFdBQVc7QUFDMUcsVUFBSSxRQUFRLFFBQVEsZ0JBQWdCLFFBQVEsUUFBUTtBQUNwRCxVQUFJLENBQUMsT0FBTztBQUNSLGdCQUFRLEtBQUssc0hBQWdEO0FBQzdEO0FBQUEsTUFDSjtBQUNBLGFBQU8sUUFBUTtBQUNmLGFBQU8sUUFBUTtBQUNmLFlBQU0sUUFBUSxXQUFZO0FBQ3RCLGNBQU0sUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdCLFlBQUksUUFBUSxTQUFTO0FBQ2pCLGtCQUFRLFFBQVE7QUFBQSxRQUNwQjtBQUFBLE1BQ0o7QUFDQSxZQUFNLEtBQUssS0FBSztBQUNoQixZQUFNLFFBQVEsT0FBTztBQUNyQixtQkFBYSxNQUFNLEtBQUs7QUFDeEIsVUFBSSxRQUFRLFlBQVksUUFBUSxRQUFRLFdBQVcsR0FBRztBQUNsRCxjQUFNLFFBQVEsV0FBVyxXQUFZO0FBQ2pDLGdCQUFNLE1BQU07QUFDWixrQkFBUSxNQUFNLE9BQU8sU0FBVSxNQUFNO0FBQUUsbUJBQU8sU0FBUztBQUFBLFVBQU8sQ0FBQztBQUFBLFFBQ25FLEdBQUcsUUFBUSxRQUFRO0FBQUEsTUFDdkI7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUNBLFFBQUksZUFBZSxTQUFVLE1BQU07QUFBRSxhQUFPLFNBQVUsU0FBUztBQUMzRCxlQUFPLE1BQU0sU0FBUyxFQUFFLEtBQVcsR0FBRyxhQUFhLE9BQU8sQ0FBQyxDQUFDO0FBQUEsTUFDaEU7QUFBQSxJQUFHO0FBQ0gsVUFBTSxVQUFVLGFBQWEsU0FBUztBQUN0QyxVQUFNLFVBQVUsYUFBYSxTQUFTO0FBQ3RDLFVBQU0sT0FBTyxhQUFhLE1BQU07QUFDaEMsVUFBTSxPQUFPLGFBQWEsTUFBTTtBQUNoQyxVQUFNLFFBQVEsV0FBWTtBQUN0QixZQUFNLFFBQVEsU0FBVSxPQUFPO0FBQzNCLGNBQU0sTUFBTTtBQUFBLE1BQ2hCLENBQUM7QUFDRCxjQUFRLENBQUM7QUFBQSxJQUNiO0FBQ0EsVUFBTSxvQkFBb0IsU0FBVSxTQUFTO0FBQ3pDLGFBQU8sT0FBTyxnQkFBZ0IsT0FBTztBQUFBLElBQ3pDO0FBQ0EsVUFBTSxzQkFBc0IsV0FBWTtBQUVwQyx1QkFBaUIsU0FBUyxDQUFDLEdBQUcsY0FBYztBQUFBLElBQ2hEO0FBQ0EsWUFBUSxVQUFVO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
