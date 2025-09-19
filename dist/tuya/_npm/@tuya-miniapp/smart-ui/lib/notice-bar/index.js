import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import {
  require_Xmark
} from "/chunk-K3BA3CBS.js";
import "/chunk-SOVNIPSZ.js";
import {
  require_Right
} from "/chunk-AWNCYWEP.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/notice-bar/index.css
var require_notice_bar = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/notice-bar/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/notice-bar/index.css
var require_notice_bar2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/notice-bar/index.css"(exports, module) {
    require_notice_bar();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/notice-bar/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/notice-bar/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_notice_bar2());
    var Component = overrideComponent("notice-bar-index-b5f1d4");
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var utils_1 = require_utils();
    var Xmark_1 = __importDefault(require_Xmark());
    var Right_1 = __importDefault(require_Right());
    (0, component_1.SmartComponent)({
      props: {
        text: {
          type: String,
          value: "",
          observer: "init"
        },
        btnText: {
          type: String,
          value: "",
          observer: "init"
        },
        btnTextColor: {
          type: String,
          value: "",
          observer: "init"
        },
        mode: {
          type: String,
          value: ""
        },
        type: {
          type: String,
          value: "info"
        },
        url: {
          type: String,
          value: ""
        },
        openType: {
          type: String,
          value: "navigateTo"
        },
        rightIconColor: {
          type: String,
          value: "var(--notice-bar-right-icon-color)"
        },
        leftIconColor: {
          type: String,
          value: ""
        },
        delay: {
          type: Number,
          value: 1
        },
        customStyle: {
          type: String,
          value: ""
        },
        customHoverClass: {
          type: String,
          value: ""
        },
        rightIconStyle: {
          type: String,
          value: ""
        },
        leftIconStyle: {
          type: String,
          value: ""
        },
        speed: {
          type: Number,
          value: 60,
          observer: "init"
        },
        scrollable: null,
        leftIcon: {
          type: String,
          value: ""
        },
        color: String,
        background: String,
        wrapable: Boolean
      },
      data: {
        Xmark: Xmark_1.default,
        Right: Right_1.default,
        show: true
      },
      created: function() {
        this.resetAnimation = wx.createAnimation({
          duration: 0,
          timingFunction: "linear"
        });
      },
      destroyed: function() {
        this.timer && clearTimeout(this.timer);
      },
      mounted: function() {
        this.init();
      },
      methods: {
        init: function() {
          var _this = this;
          (0, utils_1.requestAnimationFrame)(function() {
            Promise.all([
              (0, utils_1.getRect)(_this, ".smart-notice-bar__content"),
              (0, utils_1.getRect)(_this, ".smart-notice-bar__wrap")
            ]).then(function(rects) {
              var contentRect = rects[0], wrapRect = rects[1];
              var _a = _this.data, speed = _a.speed, scrollable = _a.scrollable, delay = _a.delay;
              if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width || scrollable === false) {
                return;
              }
              if (scrollable || wrapRect.width < contentRect.width) {
                var duration = (wrapRect.width + contentRect.width) / speed * 1e3;
                _this.wrapWidth = wrapRect.width;
                _this.contentWidth = contentRect.width;
                _this.duration = duration;
                _this.animation = wx.createAnimation({
                  duration,
                  timingFunction: "linear",
                  delay
                });
                _this.scroll(true);
              }
            });
          });
        },
        scroll: function(isInit) {
          var _this = this;
          if (isInit === void 0) {
            isInit = false;
          }
          this.timer && clearTimeout(this.timer);
          this.timer = null;
          this.setData({
            animationData: this.resetAnimation.translateX(isInit ? 0 : this.wrapWidth).step().export()
          });
          (0, utils_1.requestAnimationFrame)(function() {
            _this.setData({
              animationData: _this.animation.translateX(-_this.contentWidth).step().export()
            });
          });
          this.timer = setTimeout(function() {
            _this.scroll();
          }, this.duration + this.data.delay);
        },
        onClickIcon: function(event) {
          if (this.data.mode === "closeable") {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({ show: false });
            this.$emit("close", event.detail);
          }
        },
        onClickBtnText: function(event) {
          this.$emit("btnClick", event);
        },
        onClick: function(event) {
          var _a = this.data, url = _a.url, mode = _a.mode, openType = _a.openType;
          if (mode === "link" && url) {
            if (openType === "redirectTo") {
              wx.redirectTo({ url });
            } else if (openType === "navigateTo") {
              wx.navigateTo({ url });
            }
          }
          this.$emit("click", event);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvbm90aWNlLWJhci9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9ub3RpY2UtYmFyL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9ub3RpY2UtYmFyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LW5vdGljZS1iYXIge1xuICAtLW5vdGljZS1iYXItaW5mby1jb2xvcjogIzE5ODlmYTtcbiAgLS1ub3RpY2UtYmFyLXdhcm5pbmctY29sb3I6ICNmZmEwMDA7XG4gIC0tbm90aWNlLWJhci1lcnJvci1jb2xvcjogI2YwNGM0YztcbiAgLS1ub3RpY2UtYmFyLXJpZ2h0LWljb24tY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpY2UtYmFyLWJhY2tncm91bmQtY29sb3IsIHJnYmEoMjUsIDEzNywgMjUwLCAuMSkpO1xuICBjb2xvcjogdmFyKC0tbm90aWNlLWJhci10ZXh0LWNvbG9yLCB2YXIoLS1hcHAtQjYtTjMsIHJnYmEoMCwgMCwgMCwgLjUpKSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbm90aWNlLWJhci1mb250LXNpemUsIDEycHgpO1xuICBoZWlnaHQ6IHZhcigtLW5vdGljZS1iYXItaGVpZ2h0LCA0MHB4KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLW5vdGljZS1iYXItbGluZS1oZWlnaHQsIDE0cHgpO1xuICBwYWRkaW5nOiB2YXIoLS1ub3RpY2UtYmFyLXBhZGRpbmcsIDAgMTZweCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbWFydC1ub3RpY2UtYmFyLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWNlLWJhci1iYWNrZ3JvdW5kLXdhcm5pbmctY29sb3IsIHJnYmEoMjU1LCAxNjAsIDAsIC4xKSk7XG59XG5cbi5zbWFydC1ub3RpY2UtYmFyLS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGljZS1iYXItYmFja2dyb3VuZC1lcnJvci1jb2xvciwgcmdiYSgyNDAsIDc2LCA3NiwgLjEpKTtcbn1cblxuLnNtYXJ0LW5vdGljZS1iYXItLWhvdmVyIHtcbiAgb3BhY2l0eTogLjY7XG59XG5cbi5zbWFydC1ub3RpY2UtYmFyLS13cmFwYWJsZSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogdmFyKC0tbm90aWNlLWJhci13cmFwYWJsZS1wYWRkaW5nLCA4cHggMTZweCk7XG59XG5cbi5zbWFydC1ub3RpY2UtYmFyLS13cmFwYWJsZSAuc21hcnQtbm90aWNlLWJhcl9fd3JhcCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNtYXJ0LW5vdGljZS1iYXItLXdyYXBhYmxlIC5zbWFydC1ub3RpY2UtYmFyX19jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21hcnQtbm90aWNlLWJhcl9fbGVmdC1pY29uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1ub3RpY2UtYmFyLWljb24tc2l6ZSwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbm90aWNlLWJhci1sZWZ0LWljb24tbWFyZ2luLXJpZ2h0LCA4cHgpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc21hcnQtbm90aWNlLWJhcl9fcmlnaHQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbm90aWNlLWJhci1pY29uLXNpemUsIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tbm90aWNlLWJhci1yaWdodC1pY29uLW1hcmdpbi1sZWZ0LCA4cHgpO1xufVxuXG4uc21hcnQtbm90aWNlLWJhcl9fd3JhcCB7XG4gIGhlaWdodDogdmFyKC0tbm90aWNlLWJhci1saW5lLWhlaWdodCwgMTRweCk7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNtYXJ0LW5vdGljZS1iYXJfX2NvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbWFydC1ub3RpY2UtYmFyX19jb250ZW50LnNtYXJ0LWVsbGlwc2lzIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc21hcnQtbm90aWNlLWJhcl9fY29udGVudF9fYnRuIHtcbiAgY29sb3I6IHZhcigtLW5vdGljZS1iYXItYnRuLWNvbG9yLCB2YXIoLS1hcHAtTTQsICMxOTg5ZmEpKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3T3pzN096czdPenM3T3pzN1FVRkJjMlk3T3pzN1FVRkJNRWM3T3pzN1FVRkJjMGM3T3pzN1FVRkJiME03T3pzN08wRkJRVFJHT3pzN08wRkJRV2RGT3pzN096dEJRVUUwUmpzN096czdPenM3UVVGQmQwdzdPenM3TzBGQlFXdEpPenM3T3pzN08wRkJRVEpIT3pzN096dEJRVUZuUlRzN096dEJRVUY1UkNJc0luTnZkWEpqWlhNaU9sc2lWWE5sY25NdlozVnVjMjF2YTJWeUwwUnZZM1Z0Wlc1MGN5OW5hWFF2UTI5dmJHbHVaMDFwYzNSTllYUlFZVzVsYkM5dWIyUmxYMjF2WkhWc1pYTXZRSFIxZVdFdGJXbHVhV0Z3Y0M5emJXRnlkQzExYVM5c2FXSXZibTkwYVdObExXSmhjaTlwYm1SbGVDNWpjM01pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVFHbHRjRzl5ZENBbkxpNHZZMjl0Ylc5dUwybHVaR1Y0TG1OemN5YzdMbk50WVhKMExXNXZkR2xqWlMxaVlYSjdMUzF1YjNScFkyVXRZbUZ5TFdsdVptOHRZMjlzYjNJNkl6RTVPRGxtWVRzdExXNXZkR2xqWlMxaVlYSXRkMkZ5Ym1sdVp5MWpiMnh2Y2pvalptWmhNREF3T3kwdGJtOTBhV05sTFdKaGNpMWxjbkp2Y2kxamIyeHZjam9qWmpBMFl6UmpPeTB0Ym05MGFXTmxMV0poY2kxeWFXZG9kQzFwWTI5dUxXTnZiRzl5T25KblltRW9NQ3d3TERBc0xqSXBPMkZzYVdkdUxXbDBaVzF6T21ObGJuUmxjanRpWVdOclozSnZkVzVrTFdOdmJHOXlPblpoY2lndExXNXZkR2xqWlMxaVlYSXRZbUZqYTJkeWIzVnVaQzFqYjJ4dmNpeHlaMkpoS0RJMUxERXpOeXd5TlRBc0xqRXBLVHRqYjJ4dmNqcDJZWElvTFMxdWIzUnBZMlV0WW1GeUxYUmxlSFF0WTI5c2IzSXNkbUZ5S0MwdFlYQndMVUkyTFU0ekxISm5ZbUVvTUN3d0xEQXNMalVwS1NrN1pHbHpjR3hoZVRwbWJHVjRPMlp2Ym5RdGMybDZaVHAyWVhJb0xTMXViM1JwWTJVdFltRnlMV1p2Ym5RdGMybDZaU3d4TW5CNEtUdG9aV2xuYUhRNmRtRnlLQzB0Ym05MGFXTmxMV0poY2kxb1pXbG5hSFFzTkRCd2VDazdiR2x1WlMxb1pXbG5hSFE2ZG1GeUtDMHRibTkwYVdObExXSmhjaTFzYVc1bExXaGxhV2RvZEN3eE5IQjRLVHR3WVdSa2FXNW5PblpoY2lndExXNXZkR2xqWlMxaVlYSXRjR0ZrWkdsdVp5d3dJREUyY0hncGZTNXpiV0Z5ZEMxdWIzUnBZMlV0WW1GeUxTMTNZWEp1YVc1bmUySmhZMnRuY205MWJtUXRZMjlzYjNJNmRtRnlLQzB0Ym05MGFXTmxMV0poY2kxaVlXTnJaM0p2ZFc1a0xYZGhjbTVwYm1jdFkyOXNiM0lzY21kaVlTZ3lOVFVzTVRZd0xEQXNMakVwS1gwdWMyMWhjblF0Ym05MGFXTmxMV0poY2kwdFpYSnliM0o3WW1GamEyZHliM1Z1WkMxamIyeHZjanAyWVhJb0xTMXViM1JwWTJVdFltRnlMV0poWTJ0bmNtOTFibVF0WlhKeWIzSXRZMjlzYjNJc2NtZGlZU2d5TkRBc056WXNOellzTGpFcEtYMHVjMjFoY25RdGJtOTBhV05sTFdKaGNpMHRhRzkyWlhKN2IzQmhZMmwwZVRvdU5uMHVjMjFoY25RdGJtOTBhV05sTFdKaGNpMHRkM0poY0dGaWJHVjdhR1ZwWjJoME9tRjFkRzg3Y0dGa1pHbHVaenAyWVhJb0xTMXViM1JwWTJVdFltRnlMWGR5WVhCaFlteGxMWEJoWkdScGJtY3NPSEI0SURFMmNIZ3BmUzV6YldGeWRDMXViM1JwWTJVdFltRnlMUzEzY21Gd1lXSnNaU0F1YzIxaGNuUXRibTkwYVdObExXSmhjbDlmZDNKaGNIdG9aV2xuYUhRNllYVjBiMzB1YzIxaGNuUXRibTkwYVdObExXSmhjaTB0ZDNKaGNHRmliR1VnTG5OdFlYSjBMVzV2ZEdsalpTMWlZWEpmWDJOdmJuUmxiblI3Y0c5emFYUnBiMjQ2Y21Wc1lYUnBkbVU3ZDJocGRHVXRjM0JoWTJVNmJtOXliV0ZzZlM1emJXRnlkQzF1YjNScFkyVXRZbUZ5WDE5c1pXWjBMV2xqYjI1N1lXeHBaMjR0YVhSbGJYTTZZMlZ1ZEdWeU8yUnBjM0JzWVhrNlpteGxlRHRtYjI1MExYTnBlbVU2ZG1GeUtDMHRibTkwYVdObExXSmhjaTFwWTI5dUxYTnBlbVVzTVRad2VDazdiV0Z5WjJsdUxYSnBaMmgwT25aaGNpZ3RMVzV2ZEdsalpTMWlZWEl0YkdWbWRDMXBZMjl1TFcxaGNtZHBiaTF5YVdkb2RDdzRjSGdwTzNabGNuUnBZMkZzTFdGc2FXZHVPbTFwWkdSc1pYMHVjMjFoY25RdGJtOTBhV05sTFdKaGNsOWZjbWxuYUhRdGFXTnZibnRtYjI1MExYTnBlbVU2ZG1GeUtDMHRibTkwYVdObExXSmhjaTFwWTI5dUxYTnBlbVVzTVRad2VDazdiV0Z5WjJsdUxXeGxablE2ZG1GeUtDMHRibTkwYVdObExXSmhjaTF5YVdkb2RDMXBZMjl1TFcxaGNtZHBiaTFzWldaMExEaHdlQ2w5TG5OdFlYSjBMVzV2ZEdsalpTMWlZWEpmWDNkeVlYQjdabXhsZURveE8yaGxhV2RvZERwMllYSW9MUzF1YjNScFkyVXRZbUZ5TFd4cGJtVXRhR1ZwWjJoMExERTBjSGdwTzI5MlpYSm1iRzkzT21ocFpHUmxianR3YjNOcGRHbHZianB5Wld4aGRHbDJaWDB1YzIxaGNuUXRibTkwYVdObExXSmhjbDlmWTI5dWRHVnVkSHR3YjNOcGRHbHZianBoWW5OdmJIVjBaVHQzYUdsMFpTMXpjR0ZqWlRwdWIzZHlZWEI5TG5OdFlYSjBMVzV2ZEdsalpTMWlZWEpmWDJOdmJuUmxiblF1YzIxaGNuUXRaV3hzYVhCemFYTjdiV0Y0TFhkcFpIUm9PakV3TUNWOUxuTnRZWEowTFc1dmRHbGpaUzFpWVhKZlgyTnZiblJsYm5SZlgySjBibnRqYjJ4dmNqcDJZWElvTFMxdWIzUnBZMlV0WW1GeUxXSjBiaTFqYjJ4dmNpeDJZWElvTFMxaGNIQXRUVFFzSXpFNU9EbG1ZU2twTzJScGMzQnNZWGs2YVc1c2FXNWxMV0pzYjJOcmZTSmRMQ0p1WVcxbGN5STZXMTE5ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ25vdGljZS1iYXItaW5kZXgtYjVmMWQ0Jyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcbnZhciBYbWFya18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAdHV5YS1taW5pYXBwL2ljb25zL2Rpc3Qvc3ZnL1htYXJrXCIpKTtcbnZhciBSaWdodF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAdHV5YS1taW5pYXBwL2ljb25zL2Rpc3Qvc3ZnL1JpZ2h0XCIpKTtcbigwLCBjb21wb25lbnRfMS5TbWFydENvbXBvbmVudCkoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnaW5pdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnaW5pdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJ0blRleHRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdpbml0JyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2luZm8nLFxuICAgICAgICB9LFxuICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3BlblR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbmF2aWdhdGVUbycsXG4gICAgICAgIH0sXG4gICAgICAgIHJpZ2h0SWNvbkNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3ZhcigtLW5vdGljZS1iYXItcmlnaHQtaWNvbi1jb2xvciknLFxuICAgICAgICB9LFxuICAgICAgICBsZWZ0SWNvbkNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tU3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tSG92ZXJDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgICByaWdodEljb25TdHlsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsZWZ0SWNvblN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNjAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2luaXQnLFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxhYmxlOiBudWxsLFxuICAgICAgICBsZWZ0SWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBjb2xvcjogU3RyaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kOiBTdHJpbmcsXG4gICAgICAgIHdyYXBhYmxlOiBCb29sZWFuLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBYbWFyazogWG1hcmtfMS5kZWZhdWx0LFxuICAgICAgICBSaWdodDogUmlnaHRfMS5kZWZhdWx0LFxuICAgICAgICBzaG93OiB0cnVlLFxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0QW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmdldFJlY3QpKF90aGlzLCAnLnNtYXJ0LW5vdGljZS1iYXJfX2NvbnRlbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEuZ2V0UmVjdCkoX3RoaXMsICcuc21hcnQtbm90aWNlLWJhcl9fd3JhcCcpLFxuICAgICAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKHJlY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50UmVjdCA9IHJlY3RzWzBdLCB3cmFwUmVjdCA9IHJlY3RzWzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5kYXRhLCBzcGVlZCA9IF9hLnNwZWVkLCBzY3JvbGxhYmxlID0gX2Euc2Nyb2xsYWJsZSwgZGVsYXkgPSBfYS5kZWxheTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRSZWN0ID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBSZWN0ID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICFjb250ZW50UmVjdC53aWR0aCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIXdyYXBSZWN0LndpZHRoIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxhYmxlIHx8IHdyYXBSZWN0LndpZHRoIDwgY29udGVudFJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICgod3JhcFJlY3Qud2lkdGggKyBjb250ZW50UmVjdC53aWR0aCkgLyBzcGVlZCkgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMud3JhcFdpZHRoID0gd3JhcFJlY3Qud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250ZW50V2lkdGggPSBjb250ZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzY3JvbGw6IGZ1bmN0aW9uIChpc0luaXQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoaXNJbml0ID09PSB2b2lkIDApIHsgaXNJbml0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IHRoaXMucmVzZXRBbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZVgoaXNJbml0ID8gMCA6IHRoaXMud3JhcFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIC5leHBvcnQoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEucmVxdWVzdEFuaW1hdGlvbkZyYW1lKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IF90aGlzLmFuaW1hdGlvbi50cmFuc2xhdGVYKC1fdGhpcy5jb250ZW50V2lkdGgpLnN0ZXAoKS5leHBvcnQoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5kdXJhdGlvbiArIHRoaXMuZGF0YS5kZWxheSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tJY29uOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubW9kZSA9PT0gJ2Nsb3NlYWJsZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tCdG5UZXh0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2J0bkNsaWNrJywgZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdXJsID0gX2EudXJsLCBtb2RlID0gX2EubW9kZSwgb3BlblR5cGUgPSBfYS5vcGVuVHlwZTtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAnbGluaycgJiYgdXJsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5UeXBlID09PSAncmVkaXJlY3RUbycpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogdXJsIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcGVuVHlwZSA9PT0gJ25hdmlnYXRlVG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oeyB1cmw6IHVybCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLHNCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFDQTtBQUVBLHVCQUFPO0FBRFAsUUFBTSxZQUFZLGtCQUFrQix5QkFBeUI7QUFHN0QsUUFBSSxrQkFBbUIsV0FBUSxRQUFLLG1CQUFvQixTQUFVLEtBQUs7QUFDbkUsYUFBUSxPQUFPLElBQUksYUFBYyxNQUFNLEVBQUUsV0FBVyxJQUFJO0FBQUEsSUFDNUQ7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsUUFBSSxjQUFjO0FBQ2xCLFFBQUksVUFBVTtBQUNk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
