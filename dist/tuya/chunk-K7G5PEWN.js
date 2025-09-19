import {
  require_version
} from "/chunk-SOVNIPSZ.js";
import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/mixins/button.js
var require_button = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/mixins/button.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.button = void 0;
    var version_1 = require_version();
    exports.button = Behavior({
      externalClasses: ["hover-class"],
      properties: {
        id: String,
        buttonId: String,
        lang: String,
        businessId: Number,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        ariaLabel: String,
        openType: String,
        getUserProfileDesc: String
      },
      data: {
        canIUseGetUserProfile: (0, version_1.canIUseGetUserProfile)()
      },
      methods: {
        onGetUserInfo: function(event) {
          this.triggerEvent("getuserinfo", event.detail);
        },
        onContact: function(event) {
          this.triggerEvent("contact", event.detail);
        },
        onGetPhoneNumber: function(event) {
          this.triggerEvent("getphonenumber", event.detail);
        },
        onGetRealTimePhoneNumber: function(event) {
          this.triggerEvent("getrealtimephonenumber", event.detail);
        },
        onError: function(event) {
          this.triggerEvent("error", event.detail);
        },
        onLaunchApp: function(event) {
          this.triggerEvent("launchapp", event.detail);
        },
        onOpenSetting: function(event) {
          this.triggerEvent("opensetting", event.detail);
        },
        onAgreePrivacyAuthorization: function(event) {
          this.triggerEvent("agreeprivacyauthorization", event.detail);
        },
        onChooseAvatar: function(event) {
          this.triggerEvent("chooseavatar", event.detail);
        }
      }
    });
  }
});

export {
  require_button
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL21peGlucy9idXR0b24uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5idXR0b24gPSB2b2lkIDA7XG52YXIgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi92ZXJzaW9uXCIpO1xuZXhwb3J0cy5idXR0b24gPSBCZWhhdmlvcih7XG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2hvdmVyLWNsYXNzJ10sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICBidXR0b25JZDogU3RyaW5nLFxuICAgICAgICBsYW5nOiBTdHJpbmcsXG4gICAgICAgIGJ1c2luZXNzSWQ6IE51bWJlcixcbiAgICAgICAgc2Vzc2lvbkZyb206IFN0cmluZyxcbiAgICAgICAgc2VuZE1lc3NhZ2VUaXRsZTogU3RyaW5nLFxuICAgICAgICBzZW5kTWVzc2FnZVBhdGg6IFN0cmluZyxcbiAgICAgICAgc2VuZE1lc3NhZ2VJbWc6IFN0cmluZyxcbiAgICAgICAgc2hvd01lc3NhZ2VDYXJkOiBCb29sZWFuLFxuICAgICAgICBhcHBQYXJhbWV0ZXI6IFN0cmluZyxcbiAgICAgICAgYXJpYUxhYmVsOiBTdHJpbmcsXG4gICAgICAgIG9wZW5UeXBlOiBTdHJpbmcsXG4gICAgICAgIGdldFVzZXJQcm9maWxlRGVzYzogU3RyaW5nLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6ICgwLCB2ZXJzaW9uXzEuY2FuSVVzZUdldFVzZXJQcm9maWxlKSgpLFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkdldFVzZXJJbmZvOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdnZXR1c2VyaW5mbycsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29udGFjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY29udGFjdCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uR2V0UGhvbmVOdW1iZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2dldHBob25lbnVtYmVyJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25HZXRSZWFsVGltZVBob25lTnVtYmVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdnZXRyZWFsdGltZXBob25lbnVtYmVyJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZXJyb3InLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkxhdW5jaEFwcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnbGF1bmNoYXBwJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25PcGVuU2V0dGluZzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb3BlbnNldHRpbmcnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkFncmVlUHJpdmFjeUF1dGhvcml6YXRpb246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2FncmVlcHJpdmFjeWF1dGhvcml6YXRpb24nLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNob29zZUF2YXRhcjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hvb3NlYXZhdGFyJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLFNBQVM7QUFDakIsUUFBSSxZQUFZO0FBQ2hCLFlBQVEsU0FBUyxTQUFTO0FBQUEsTUFDdEIsaUJBQWlCLENBQUMsYUFBYTtBQUFBLE1BQy9CLFlBQVk7QUFBQSxRQUNSLElBQUk7QUFBQSxRQUNKLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLGlCQUFpQjtBQUFBLFFBQ2pCLGdCQUFnQjtBQUFBLFFBQ2hCLGlCQUFpQjtBQUFBLFFBQ2pCLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLG9CQUFvQjtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDRix3QkFBd0IsR0FBRyxVQUFVLHVCQUF1QjtBQUFBLE1BQ2hFO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDTCxlQUFlLFNBQVUsT0FBTztBQUM1QixlQUFLLGFBQWEsZUFBZSxNQUFNLE1BQU07QUFBQSxRQUNqRDtBQUFBLFFBQ0EsV0FBVyxTQUFVLE9BQU87QUFDeEIsZUFBSyxhQUFhLFdBQVcsTUFBTSxNQUFNO0FBQUEsUUFDN0M7QUFBQSxRQUNBLGtCQUFrQixTQUFVLE9BQU87QUFDL0IsZUFBSyxhQUFhLGtCQUFrQixNQUFNLE1BQU07QUFBQSxRQUNwRDtBQUFBLFFBQ0EsMEJBQTBCLFNBQVUsT0FBTztBQUN2QyxlQUFLLGFBQWEsMEJBQTBCLE1BQU0sTUFBTTtBQUFBLFFBQzVEO0FBQUEsUUFDQSxTQUFTLFNBQVUsT0FBTztBQUN0QixlQUFLLGFBQWEsU0FBUyxNQUFNLE1BQU07QUFBQSxRQUMzQztBQUFBLFFBQ0EsYUFBYSxTQUFVLE9BQU87QUFDMUIsZUFBSyxhQUFhLGFBQWEsTUFBTSxNQUFNO0FBQUEsUUFDL0M7QUFBQSxRQUNBLGVBQWUsU0FBVSxPQUFPO0FBQzVCLGVBQUssYUFBYSxlQUFlLE1BQU0sTUFBTTtBQUFBLFFBQ2pEO0FBQUEsUUFDQSw2QkFBNkIsU0FBVSxPQUFPO0FBQzFDLGVBQUssYUFBYSw2QkFBNkIsTUFBTSxNQUFNO0FBQUEsUUFDL0Q7QUFBQSxRQUNBLGdCQUFnQixTQUFVLE9BQU87QUFDN0IsZUFBSyxhQUFhLGdCQUFnQixNQUFNLE1BQU07QUFBQSxRQUNsRDtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
