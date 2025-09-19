import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/mixins/link.js
var require_link = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/mixins/link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.link = void 0;
    exports.link = Behavior({
      properties: {
        url: String,
        linkType: {
          type: String,
          value: "navigateTo"
        }
      },
      methods: {
        jumpLink: function(urlKey) {
          if (urlKey === void 0) {
            urlKey = "url";
          }
          var url = this.data[urlKey];
          if (url) {
            if (this.data.linkType === "navigateTo" && getCurrentPages().length > 9) {
              wx.redirectTo({ url });
            } else {
              wx[this.data.linkType]({ url });
            }
          }
        }
      }
    });
  }
});

export {
  require_link
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL21peGlucy9saW5rLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubGluayA9IHZvaWQgMDtcbmV4cG9ydHMubGluayA9IEJlaGF2aW9yKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHVybDogU3RyaW5nLFxuICAgICAgICBsaW5rVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICduYXZpZ2F0ZVRvJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAganVtcExpbms6IGZ1bmN0aW9uICh1cmxLZXkpIHtcbiAgICAgICAgICAgIGlmICh1cmxLZXkgPT09IHZvaWQgMCkgeyB1cmxLZXkgPSAndXJsJzsgfVxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuZGF0YVt1cmxLZXldO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubGlua1R5cGUgPT09ICduYXZpZ2F0ZVRvJyAmJiBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGggPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oeyB1cmw6IHVybCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4W3RoaXMuZGF0YS5saW5rVHlwZV0oeyB1cmw6IHVybCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxPQUFPO0FBQ2YsWUFBUSxPQUFPLFNBQVM7QUFBQSxNQUNwQixZQUFZO0FBQUEsUUFDUixLQUFLO0FBQUEsUUFDTCxVQUFVO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNMLFVBQVUsU0FBVSxRQUFRO0FBQ3hCLGNBQUksV0FBVyxRQUFRO0FBQUUscUJBQVM7QUFBQSxVQUFPO0FBQ3pDLGNBQUksTUFBTSxLQUFLLEtBQUssTUFBTTtBQUMxQixjQUFJLEtBQUs7QUFDTCxnQkFBSSxLQUFLLEtBQUssYUFBYSxnQkFBZ0IsZ0JBQWdCLEVBQUUsU0FBUyxHQUFHO0FBQ3JFLGlCQUFHLFdBQVcsRUFBRSxJQUFTLENBQUM7QUFBQSxZQUM5QixPQUNLO0FBQ0QsaUJBQUcsS0FBSyxLQUFLLFFBQVEsRUFBRSxFQUFFLElBQVMsQ0FBQztBQUFBLFlBQ3ZDO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
