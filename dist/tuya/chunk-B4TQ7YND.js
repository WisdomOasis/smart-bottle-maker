import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/common/relation.js
var require_relation = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/common/relation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useChildren = exports.useParent = void 0;
    function useParent(name, onEffect) {
      var _a;
      var path = "../".concat(name, "/index");
      return {
        relations: (_a = {}, _a[path] = {
          type: "ancestor",
          linked: function() {
            onEffect && onEffect.call(this);
          },
          linkChanged: function() {
            onEffect && onEffect.call(this);
          },
          unlinked: function() {
            onEffect && onEffect.call(this);
          }
        }, _a),
        mixin: Behavior({
          created: function() {
            var _this = this;
            Object.defineProperty(this, "parent", {
              get: function() {
                return _this.getRelationNodes(path)[0];
              }
            });
            Object.defineProperty(this, "index", {
              // @ts-ignore
              get: function() {
                var _a2, _b;
                return (_b = (_a2 = _this.parent) === null || _a2 === void 0 ? void 0 : _a2.children) === null || _b === void 0 ? void 0 : _b.indexOf(_this);
              }
            });
          }
        })
      };
    }
    exports.useParent = useParent;
    function useChildren(name, onEffect) {
      var _a;
      var path = "../".concat(name, "/index");
      return {
        relations: (_a = {}, _a[path] = {
          type: "descendant",
          linked: function(target) {
            onEffect && onEffect.call(this, target);
          },
          linkChanged: function(target) {
            onEffect && onEffect.call(this, target);
          },
          unlinked: function(target) {
            onEffect && onEffect.call(this, target);
          }
        }, _a),
        mixin: Behavior({
          created: function() {
            var _this = this;
            Object.defineProperty(this, "children", {
              get: function() {
                return _this.getRelationNodes(path) || [];
              }
            });
          }
        })
      };
    }
    exports.useChildren = useChildren;
  }
});

export {
  require_relation
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbW1vbi9yZWxhdGlvbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZUNoaWxkcmVuID0gZXhwb3J0cy51c2VQYXJlbnQgPSB2b2lkIDA7XG5mdW5jdGlvbiB1c2VQYXJlbnQobmFtZSwgb25FZmZlY3QpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIHBhdGggPSBcIi4uL1wiLmNvbmNhdChuYW1lLCBcIi9pbmRleFwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWxhdGlvbnM6IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbcGF0aF0gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FZmZlY3QgJiYgb25FZmZlY3QuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbmtDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRWZmZWN0ICYmIG9uRWZmZWN0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bmxpbmtlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvbkVmZmVjdCAmJiBvbkVmZmVjdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2EpLFxuICAgICAgICBtaXhpbjogQmVoYXZpb3Ioe1xuICAgICAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdwYXJlbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZ2V0UmVsYXRpb25Ob2RlcyhwYXRoKVswXTsgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2luZGV4Jywge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyB2YXIgX2EsIF9iOyByZXR1cm4gKF9iID0gKF9hID0gX3RoaXMucGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbmRleE9mKF90aGlzKTsgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH07XG59XG5leHBvcnRzLnVzZVBhcmVudCA9IHVzZVBhcmVudDtcbmZ1bmN0aW9uIHVzZUNoaWxkcmVuKG5hbWUsIG9uRWZmZWN0KSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBwYXRoID0gXCIuLi9cIi5jb25jYXQobmFtZSwgXCIvaW5kZXhcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVsYXRpb25zOiAoX2EgPSB7fSxcbiAgICAgICAgICAgIF9hW3BhdGhdID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FZmZlY3QgJiYgb25FZmZlY3QuY2FsbCh0aGlzLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGlua0NoYW5nZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FZmZlY3QgJiYgb25FZmZlY3QuY2FsbCh0aGlzLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FZmZlY3QgJiYgb25FZmZlY3QuY2FsbCh0aGlzLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2EpLFxuICAgICAgICBtaXhpbjogQmVoYXZpb3Ioe1xuICAgICAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjaGlsZHJlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nZXRSZWxhdGlvbk5vZGVzKHBhdGgpIHx8IFtdOyB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbmV4cG9ydHMudXNlQ2hpbGRyZW4gPSB1c2VDaGlsZHJlbjtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsY0FBYyxRQUFRLFlBQVk7QUFDMUMsYUFBUyxVQUFVLE1BQU0sVUFBVTtBQUMvQixVQUFJO0FBQ0osVUFBSSxPQUFPLE1BQU0sT0FBTyxNQUFNLFFBQVE7QUFDdEMsYUFBTztBQUFBLFFBQ0gsWUFBWSxLQUFLLENBQUMsR0FDZCxHQUFHLElBQUksSUFBSTtBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sUUFBUSxXQUFZO0FBQ2hCLHdCQUFZLFNBQVMsS0FBSyxJQUFJO0FBQUEsVUFDbEM7QUFBQSxVQUNBLGFBQWEsV0FBWTtBQUNyQix3QkFBWSxTQUFTLEtBQUssSUFBSTtBQUFBLFVBQ2xDO0FBQUEsVUFDQSxVQUFVLFdBQVk7QUFDbEIsd0JBQVksU0FBUyxLQUFLLElBQUk7QUFBQSxVQUNsQztBQUFBLFFBQ0osR0FDQTtBQUFBLFFBQ0osT0FBTyxTQUFTO0FBQUEsVUFDWixTQUFTLFdBQVk7QUFDakIsZ0JBQUksUUFBUTtBQUNaLG1CQUFPLGVBQWUsTUFBTSxVQUFVO0FBQUEsY0FDbEMsS0FBSyxXQUFZO0FBQUUsdUJBQU8sTUFBTSxpQkFBaUIsSUFBSSxFQUFFLENBQUM7QUFBQSxjQUFHO0FBQUEsWUFDL0QsQ0FBQztBQUNELG1CQUFPLGVBQWUsTUFBTSxTQUFTO0FBQUE7QUFBQSxjQUVqQyxLQUFLLFdBQVk7QUFBRSxvQkFBSUEsS0FBSTtBQUFJLHdCQUFRLE1BQU1BLE1BQUssTUFBTSxZQUFZLFFBQVFBLFFBQU8sU0FBUyxTQUFTQSxJQUFHLGNBQWMsUUFBUSxPQUFPLFNBQVMsU0FBUyxHQUFHLFFBQVEsS0FBSztBQUFBLGNBQUc7QUFBQSxZQUM5SyxDQUFDO0FBQUEsVUFDTDtBQUFBLFFBQ0osQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKO0FBQ0EsWUFBUSxZQUFZO0FBQ3BCLGFBQVMsWUFBWSxNQUFNLFVBQVU7QUFDakMsVUFBSTtBQUNKLFVBQUksT0FBTyxNQUFNLE9BQU8sTUFBTSxRQUFRO0FBQ3RDLGFBQU87QUFBQSxRQUNILFlBQVksS0FBSyxDQUFDLEdBQ2QsR0FBRyxJQUFJLElBQUk7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLFFBQVEsU0FBVSxRQUFRO0FBQ3RCLHdCQUFZLFNBQVMsS0FBSyxNQUFNLE1BQU07QUFBQSxVQUMxQztBQUFBLFVBQ0EsYUFBYSxTQUFVLFFBQVE7QUFDM0Isd0JBQVksU0FBUyxLQUFLLE1BQU0sTUFBTTtBQUFBLFVBQzFDO0FBQUEsVUFDQSxVQUFVLFNBQVUsUUFBUTtBQUN4Qix3QkFBWSxTQUFTLEtBQUssTUFBTSxNQUFNO0FBQUEsVUFDMUM7QUFBQSxRQUNKLEdBQ0E7QUFBQSxRQUNKLE9BQU8sU0FBUztBQUFBLFVBQ1osU0FBUyxXQUFZO0FBQ2pCLGdCQUFJLFFBQVE7QUFDWixtQkFBTyxlQUFlLE1BQU0sWUFBWTtBQUFBLGNBQ3BDLEtBQUssV0FBWTtBQUFFLHVCQUFPLE1BQU0saUJBQWlCLElBQUksS0FBSyxDQUFDO0FBQUEsY0FBRztBQUFBLFlBQ2xFLENBQUM7QUFBQSxVQUNMO0FBQUEsUUFDSixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFDQSxZQUFRLGNBQWM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJfYSJdCn0K
