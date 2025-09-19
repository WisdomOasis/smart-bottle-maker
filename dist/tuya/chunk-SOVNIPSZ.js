import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/common/version.js
var require_version = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/common/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.canIUseGetUserProfile = exports.canIUseCanvas2d = exports.canIUseNextTick = exports.canIUseGroupSetData = exports.canIUseAnimate = exports.canIUseFormFieldButton = exports.canIUseModel = exports.getSystemInfoSync = void 0;
    var systemInfo;
    function getSystemInfoSync() {
      if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
      }
      return systemInfo;
    }
    exports.getSystemInfoSync = getSystemInfoSync;
    function compareVersion(v1, v2) {
      v1 = v1.split(".");
      v2 = v2.split(".");
      var len = Math.max(v1.length, v2.length);
      while (v1.length < len) {
        v1.push("0");
      }
      while (v2.length < len) {
        v2.push("0");
      }
      for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i], 10);
        var num2 = parseInt(v2[i], 10);
        if (num1 > num2) {
          return 1;
        }
        if (num1 < num2) {
          return -1;
        }
      }
      return 0;
    }
    function gte(version) {
      var system = getSystemInfoSync();
      return compareVersion(system.SDKVersion, version) >= 0;
    }
    function canIUseModel() {
      return gte("2.9.3");
    }
    exports.canIUseModel = canIUseModel;
    function canIUseFormFieldButton() {
      return gte("2.10.3");
    }
    exports.canIUseFormFieldButton = canIUseFormFieldButton;
    function canIUseAnimate() {
      return gte("2.9.0");
    }
    exports.canIUseAnimate = canIUseAnimate;
    function canIUseGroupSetData() {
      return gte("2.4.0");
    }
    exports.canIUseGroupSetData = canIUseGroupSetData;
    function canIUseNextTick() {
      try {
        return wx.canIUse("nextTick");
      } catch (e) {
        return gte("2.7.1");
      }
    }
    exports.canIUseNextTick = canIUseNextTick;
    function canIUseCanvas2d() {
      return gte("2.9.0");
    }
    exports.canIUseCanvas2d = canIUseCanvas2d;
    function canIUseGetUserProfile() {
      return !!wx.getUserProfile;
    }
    exports.canIUseGetUserProfile = canIUseGetUserProfile;
  }
});

export {
  require_version
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbW1vbi92ZXJzaW9uLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2FuSVVzZUdldFVzZXJQcm9maWxlID0gZXhwb3J0cy5jYW5JVXNlQ2FudmFzMmQgPSBleHBvcnRzLmNhbklVc2VOZXh0VGljayA9IGV4cG9ydHMuY2FuSVVzZUdyb3VwU2V0RGF0YSA9IGV4cG9ydHMuY2FuSVVzZUFuaW1hdGUgPSBleHBvcnRzLmNhbklVc2VGb3JtRmllbGRCdXR0b24gPSBleHBvcnRzLmNhbklVc2VNb2RlbCA9IGV4cG9ydHMuZ2V0U3lzdGVtSW5mb1N5bmMgPSB2b2lkIDA7XG52YXIgc3lzdGVtSW5mbztcbmZ1bmN0aW9uIGdldFN5c3RlbUluZm9TeW5jKCkge1xuICAgIGlmIChzeXN0ZW1JbmZvID09IG51bGwpIHtcbiAgICAgICAgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgfVxuICAgIHJldHVybiBzeXN0ZW1JbmZvO1xufVxuZXhwb3J0cy5nZXRTeXN0ZW1JbmZvU3luYyA9IGdldFN5c3RlbUluZm9TeW5jO1xuZnVuY3Rpb24gY29tcGFyZVZlcnNpb24odjEsIHYyKSB7XG4gICAgdjEgPSB2MS5zcGxpdCgnLicpO1xuICAgIHYyID0gdjIuc3BsaXQoJy4nKTtcbiAgICB2YXIgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpO1xuICAgIHdoaWxlICh2MS5sZW5ndGggPCBsZW4pIHtcbiAgICAgICAgdjEucHVzaCgnMCcpO1xuICAgIH1cbiAgICB3aGlsZSAodjIubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgIHYyLnB1c2goJzAnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgbnVtMSA9IHBhcnNlSW50KHYxW2ldLCAxMCk7XG4gICAgICAgIHZhciBudW0yID0gcGFyc2VJbnQodjJbaV0sIDEwKTtcbiAgICAgICAgaWYgKG51bTEgPiBudW0yKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtMSA8IG51bTIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGd0ZSh2ZXJzaW9uKSB7XG4gICAgdmFyIHN5c3RlbSA9IGdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgcmV0dXJuIGNvbXBhcmVWZXJzaW9uKHN5c3RlbS5TREtWZXJzaW9uLCB2ZXJzaW9uKSA+PSAwO1xufVxuZnVuY3Rpb24gY2FuSVVzZU1vZGVsKCkge1xuICAgIHJldHVybiBndGUoJzIuOS4zJyk7XG59XG5leHBvcnRzLmNhbklVc2VNb2RlbCA9IGNhbklVc2VNb2RlbDtcbmZ1bmN0aW9uIGNhbklVc2VGb3JtRmllbGRCdXR0b24oKSB7XG4gICAgcmV0dXJuIGd0ZSgnMi4xMC4zJyk7XG59XG5leHBvcnRzLmNhbklVc2VGb3JtRmllbGRCdXR0b24gPSBjYW5JVXNlRm9ybUZpZWxkQnV0dG9uO1xuZnVuY3Rpb24gY2FuSVVzZUFuaW1hdGUoKSB7XG4gICAgcmV0dXJuIGd0ZSgnMi45LjAnKTtcbn1cbmV4cG9ydHMuY2FuSVVzZUFuaW1hdGUgPSBjYW5JVXNlQW5pbWF0ZTtcbmZ1bmN0aW9uIGNhbklVc2VHcm91cFNldERhdGEoKSB7XG4gICAgcmV0dXJuIGd0ZSgnMi40LjAnKTtcbn1cbmV4cG9ydHMuY2FuSVVzZUdyb3VwU2V0RGF0YSA9IGNhbklVc2VHcm91cFNldERhdGE7XG5mdW5jdGlvbiBjYW5JVXNlTmV4dFRpY2soKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHd4LmNhbklVc2UoJ25leHRUaWNrJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBndGUoJzIuNy4xJyk7XG4gICAgfVxufVxuZXhwb3J0cy5jYW5JVXNlTmV4dFRpY2sgPSBjYW5JVXNlTmV4dFRpY2s7XG5mdW5jdGlvbiBjYW5JVXNlQ2FudmFzMmQoKSB7XG4gICAgcmV0dXJuIGd0ZSgnMi45LjAnKTtcbn1cbmV4cG9ydHMuY2FuSVVzZUNhbnZhczJkID0gY2FuSVVzZUNhbnZhczJkO1xuZnVuY3Rpb24gY2FuSVVzZUdldFVzZXJQcm9maWxlKCkge1xuICAgIHJldHVybiAhIXd4LmdldFVzZXJQcm9maWxlO1xufVxuZXhwb3J0cy5jYW5JVXNlR2V0VXNlclByb2ZpbGUgPSBjYW5JVXNlR2V0VXNlclByb2ZpbGU7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLHdCQUF3QixRQUFRLGtCQUFrQixRQUFRLGtCQUFrQixRQUFRLHNCQUFzQixRQUFRLGlCQUFpQixRQUFRLHlCQUF5QixRQUFRLGVBQWUsUUFBUSxvQkFBb0I7QUFDL04sUUFBSTtBQUNKLGFBQVMsb0JBQW9CO0FBQ3pCLFVBQUksY0FBYyxNQUFNO0FBQ3BCLHFCQUFhLEdBQUcsa0JBQWtCO0FBQUEsTUFDdEM7QUFDQSxhQUFPO0FBQUEsSUFDWDtBQUNBLFlBQVEsb0JBQW9CO0FBQzVCLGFBQVMsZUFBZSxJQUFJLElBQUk7QUFDNUIsV0FBSyxHQUFHLE1BQU0sR0FBRztBQUNqQixXQUFLLEdBQUcsTUFBTSxHQUFHO0FBQ2pCLFVBQUksTUFBTSxLQUFLLElBQUksR0FBRyxRQUFRLEdBQUcsTUFBTTtBQUN2QyxhQUFPLEdBQUcsU0FBUyxLQUFLO0FBQ3BCLFdBQUcsS0FBSyxHQUFHO0FBQUEsTUFDZjtBQUNBLGFBQU8sR0FBRyxTQUFTLEtBQUs7QUFDcEIsV0FBRyxLQUFLLEdBQUc7QUFBQSxNQUNmO0FBQ0EsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDMUIsWUFBSSxPQUFPLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUM3QixZQUFJLE9BQU8sU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQzdCLFlBQUksT0FBTyxNQUFNO0FBQ2IsaUJBQU87QUFBQSxRQUNYO0FBQ0EsWUFBSSxPQUFPLE1BQU07QUFDYixpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFDQSxhQUFTLElBQUksU0FBUztBQUNsQixVQUFJLFNBQVMsa0JBQWtCO0FBQy9CLGFBQU8sZUFBZSxPQUFPLFlBQVksT0FBTyxLQUFLO0FBQUEsSUFDekQ7QUFDQSxhQUFTLGVBQWU7QUFDcEIsYUFBTyxJQUFJLE9BQU87QUFBQSxJQUN0QjtBQUNBLFlBQVEsZUFBZTtBQUN2QixhQUFTLHlCQUF5QjtBQUM5QixhQUFPLElBQUksUUFBUTtBQUFBLElBQ3ZCO0FBQ0EsWUFBUSx5QkFBeUI7QUFDakMsYUFBUyxpQkFBaUI7QUFDdEIsYUFBTyxJQUFJLE9BQU87QUFBQSxJQUN0QjtBQUNBLFlBQVEsaUJBQWlCO0FBQ3pCLGFBQVMsc0JBQXNCO0FBQzNCLGFBQU8sSUFBSSxPQUFPO0FBQUEsSUFDdEI7QUFDQSxZQUFRLHNCQUFzQjtBQUM5QixhQUFTLGtCQUFrQjtBQUN2QixVQUFJO0FBQ0EsZUFBTyxHQUFHLFFBQVEsVUFBVTtBQUFBLE1BQ2hDLFNBQ08sR0FBRztBQUNOLGVBQU8sSUFBSSxPQUFPO0FBQUEsTUFDdEI7QUFBQSxJQUNKO0FBQ0EsWUFBUSxrQkFBa0I7QUFDMUIsYUFBUyxrQkFBa0I7QUFDdkIsYUFBTyxJQUFJLE9BQU87QUFBQSxJQUN0QjtBQUNBLFlBQVEsa0JBQWtCO0FBQzFCLGFBQVMsd0JBQXdCO0FBQzdCLGFBQU8sQ0FBQyxDQUFDLEdBQUc7QUFBQSxJQUNoQjtBQUNBLFlBQVEsd0JBQXdCO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
