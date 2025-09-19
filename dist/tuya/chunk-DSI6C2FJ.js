import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import {
  require_validator
} from "/chunk-UXQMYNQX.js";
import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/mixins/page-scroll.js
var require_page_scroll = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/mixins/page-scroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pageScrollMixin = void 0;
    var validator_1 = require_validator();
    var utils_1 = require_utils();
    function onPageScroll(event) {
      var _a = (0, utils_1.getCurrentPage)().smartPageScroller, smartPageScroller = _a === void 0 ? [] : _a;
      smartPageScroller.forEach(function(scroller) {
        if (typeof scroller === "function") {
          scroller(event);
        }
      });
    }
    function pageScrollMixin(scroller) {
      return Behavior({
        attached: function() {
          var page = (0, utils_1.getCurrentPage)();
          if (!(0, utils_1.isDef)(page)) {
            return;
          }
          var _scroller = scroller.bind(this);
          var _a = page.smartPageScroller, smartPageScroller = _a === void 0 ? [] : _a;
          if ((0, validator_1.isFunction)(page.onPageScroll) && page.onPageScroll !== onPageScroll) {
            smartPageScroller.push(page.onPageScroll.bind(page));
          }
          smartPageScroller.push(_scroller);
          page.smartPageScroller = smartPageScroller;
          page.onPageScroll = onPageScroll;
          this._scroller = _scroller;
        },
        detached: function() {
          var _this = this;
          var page = (0, utils_1.getCurrentPage)();
          if (!(0, utils_1.isDef)(page) || !(0, utils_1.isDef)(page.smartPageScroller)) {
            return;
          }
          var smartPageScroller = page.smartPageScroller;
          var index = smartPageScroller.findIndex(function(v) {
            return v === _this._scroller;
          });
          if (index > -1) {
            page.smartPageScroller.splice(index, 1);
          }
          this._scroller = void 0;
        }
      });
    }
    exports.pageScrollMixin = pageScrollMixin;
  }
});

export {
  require_page_scroll
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL21peGlucy9wYWdlLXNjcm9sbC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhZ2VTY3JvbGxNaXhpbiA9IHZvaWQgMDtcbnZhciB2YWxpZGF0b3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdmFsaWRhdG9yXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xuZnVuY3Rpb24gb25QYWdlU2Nyb2xsKGV2ZW50KSB7XG4gICAgdmFyIF9hID0gKDAsIHV0aWxzXzEuZ2V0Q3VycmVudFBhZ2UpKCkuc21hcnRQYWdlU2Nyb2xsZXIsIHNtYXJ0UGFnZVNjcm9sbGVyID0gX2EgPT09IHZvaWQgMCA/IFtdIDogX2E7XG4gICAgc21hcnRQYWdlU2Nyb2xsZXIuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzY3JvbGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2Nyb2xsZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwYWdlU2Nyb2xsTWl4aW4oc2Nyb2xsZXIpIHtcbiAgICByZXR1cm4gQmVoYXZpb3Ioe1xuICAgICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSAoMCwgdXRpbHNfMS5nZXRDdXJyZW50UGFnZSkoKTtcbiAgICAgICAgICAgIGlmICghKDAsIHV0aWxzXzEuaXNEZWYpKHBhZ2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9zY3JvbGxlciA9IHNjcm9sbGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB2YXIgX2EgPSBwYWdlLnNtYXJ0UGFnZVNjcm9sbGVyLCBzbWFydFBhZ2VTY3JvbGxlciA9IF9hID09PSB2b2lkIDAgPyBbXSA6IF9hO1xuICAgICAgICAgICAgaWYgKCgwLCB2YWxpZGF0b3JfMS5pc0Z1bmN0aW9uKShwYWdlLm9uUGFnZVNjcm9sbCkgJiYgcGFnZS5vblBhZ2VTY3JvbGwgIT09IG9uUGFnZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgIHNtYXJ0UGFnZVNjcm9sbGVyLnB1c2gocGFnZS5vblBhZ2VTY3JvbGwuYmluZChwYWdlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzbWFydFBhZ2VTY3JvbGxlci5wdXNoKF9zY3JvbGxlcik7XG4gICAgICAgICAgICBwYWdlLnNtYXJ0UGFnZVNjcm9sbGVyID0gc21hcnRQYWdlU2Nyb2xsZXI7XG4gICAgICAgICAgICBwYWdlLm9uUGFnZVNjcm9sbCA9IG9uUGFnZVNjcm9sbDtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbGVyID0gX3Njcm9sbGVyO1xuICAgICAgICB9LFxuICAgICAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBwYWdlID0gKDAsIHV0aWxzXzEuZ2V0Q3VycmVudFBhZ2UpKCk7XG4gICAgICAgICAgICBpZiAoISgwLCB1dGlsc18xLmlzRGVmKShwYWdlKSB8fCAhKDAsIHV0aWxzXzEuaXNEZWYpKHBhZ2Uuc21hcnRQYWdlU2Nyb2xsZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNtYXJ0UGFnZVNjcm9sbGVyID0gcGFnZS5zbWFydFBhZ2VTY3JvbGxlcjtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHNtYXJ0UGFnZVNjcm9sbGVyLmZpbmRJbmRleChmdW5jdGlvbiAodikgeyByZXR1cm4gdiA9PT0gX3RoaXMuX3Njcm9sbGVyOyB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcGFnZS5zbWFydFBhZ2VTY3JvbGxlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnRzLnBhZ2VTY3JvbGxNaXhpbiA9IHBhZ2VTY3JvbGxNaXhpbjtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsa0JBQWtCO0FBQzFCLFFBQUksY0FBYztBQUNsQixRQUFJLFVBQVU7QUFDZCxhQUFTLGFBQWEsT0FBTztBQUN6QixVQUFJLE1BQU0sR0FBRyxRQUFRLGdCQUFnQixFQUFFLG1CQUFtQixvQkFBb0IsT0FBTyxTQUFTLENBQUMsSUFBSTtBQUNuRyx3QkFBa0IsUUFBUSxTQUFVLFVBQVU7QUFDMUMsWUFBSSxPQUFPLGFBQWEsWUFBWTtBQUVoQyxtQkFBUyxLQUFLO0FBQUEsUUFDbEI7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBQ0EsYUFBUyxnQkFBZ0IsVUFBVTtBQUMvQixhQUFPLFNBQVM7QUFBQSxRQUNaLFVBQVUsV0FBWTtBQUNsQixjQUFJLFFBQVEsR0FBRyxRQUFRLGdCQUFnQjtBQUN2QyxjQUFJLEVBQUUsR0FBRyxRQUFRLE9BQU8sSUFBSSxHQUFHO0FBQzNCO0FBQUEsVUFDSjtBQUNBLGNBQUksWUFBWSxTQUFTLEtBQUssSUFBSTtBQUNsQyxjQUFJLEtBQUssS0FBSyxtQkFBbUIsb0JBQW9CLE9BQU8sU0FBUyxDQUFDLElBQUk7QUFDMUUsZUFBSyxHQUFHLFlBQVksWUFBWSxLQUFLLFlBQVksS0FBSyxLQUFLLGlCQUFpQixjQUFjO0FBQ3RGLDhCQUFrQixLQUFLLEtBQUssYUFBYSxLQUFLLElBQUksQ0FBQztBQUFBLFVBQ3ZEO0FBQ0EsNEJBQWtCLEtBQUssU0FBUztBQUNoQyxlQUFLLG9CQUFvQjtBQUN6QixlQUFLLGVBQWU7QUFDcEIsZUFBSyxZQUFZO0FBQUEsUUFDckI7QUFBQSxRQUNBLFVBQVUsV0FBWTtBQUNsQixjQUFJLFFBQVE7QUFDWixjQUFJLFFBQVEsR0FBRyxRQUFRLGdCQUFnQjtBQUN2QyxjQUFJLEVBQUUsR0FBRyxRQUFRLE9BQU8sSUFBSSxLQUFLLEVBQUUsR0FBRyxRQUFRLE9BQU8sS0FBSyxpQkFBaUIsR0FBRztBQUMxRTtBQUFBLFVBQ0o7QUFDQSxjQUFJLG9CQUFvQixLQUFLO0FBQzdCLGNBQUksUUFBUSxrQkFBa0IsVUFBVSxTQUFVLEdBQUc7QUFBRSxtQkFBTyxNQUFNLE1BQU07QUFBQSxVQUFXLENBQUM7QUFDdEYsY0FBSSxRQUFRLElBQUk7QUFDWixpQkFBSyxrQkFBa0IsT0FBTyxPQUFPLENBQUM7QUFBQSxVQUMxQztBQUNBLGVBQUssWUFBWTtBQUFBLFFBQ3JCO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUNBLFlBQVEsa0JBQWtCO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
