import {
  require_page_scroll
} from "/chunk-DSI6C2FJ.js";
import {
  require_utils
} from "/chunk-MWNLXEW7.js";
import {
  require_relation
} from "/chunk-B4TQ7YND.js";
import "/chunk-SOVNIPSZ.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/index-bar/index.css
var require_index_bar = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/index-bar/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/index-bar/index.css
var require_index_bar2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/index-bar/index.css"(exports, module) {
    require_index_bar();
    module.exports = {};
  }
});

// node_modules/@tuya-miniapp/smart-ui/lib/common/color.js
var require_color = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/common/color.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GRAY_DARK = exports.GRAY = exports.ORANGE = exports.GREEN = exports.WHITE = exports.BLUE = exports.RED = void 0;
    exports.RED = "#ee0a24";
    exports.BLUE = "#1989fa";
    exports.WHITE = "#fff";
    exports.GREEN = "#07c160";
    exports.ORANGE = "#ff976a";
    exports.GRAY = "#323233";
    exports.GRAY_DARK = "#969799";
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/index-bar/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/index-bar/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_index_bar2());
    var Component = overrideComponent("index-bar-index-23cf8c");
    Object.defineProperty(exports, "__esModule", { value: true });
    var color_1 = require_color();
    var component_1 = require_component();
    var relation_1 = require_relation();
    var utils_1 = require_utils();
    var page_scroll_1 = require_page_scroll();
    var indexList = function() {
      var indexList2 = [];
      var charCodeOfA = "A".charCodeAt(0);
      for (var i = 0; i < 26; i++) {
        indexList2.push(String.fromCharCode(charCodeOfA + i));
      }
      return indexList2;
    };
    (0, component_1.SmartComponent)({
      relation: (0, relation_1.useChildren)("index-anchor", function() {
        this.updateData();
      }),
      props: {
        sticky: {
          type: Boolean,
          value: true
        },
        zIndex: {
          type: Number,
          value: 1
        },
        highlightColor: {
          type: String,
          value: color_1.GREEN
        },
        stickyOffsetTop: {
          type: Number,
          value: 0
        },
        indexList: {
          type: Array,
          value: indexList()
        }
      },
      mixins: [
        (0, page_scroll_1.pageScrollMixin)(function(event) {
          this.scrollTop = (event === null || event === void 0 ? void 0 : event.scrollTop) || 0;
          this.onScroll();
        })
      ],
      data: {
        activeAnchorIndex: null,
        showSidebar: false
      },
      created: function() {
        this.scrollTop = 0;
      },
      methods: {
        updateData: function() {
          var _this = this;
          wx.nextTick(function() {
            if (_this.timer != null) {
              clearTimeout(_this.timer);
            }
            _this.timer = setTimeout(function() {
              _this.setData({
                showSidebar: !!_this.children.length
              });
              _this.setRect().then(function() {
                _this.onScroll();
              });
            }, 0);
          });
        },
        setRect: function() {
          return Promise.all([this.setAnchorsRect(), this.setListRect(), this.setSiderbarRect()]);
        },
        setAnchorsRect: function() {
          var _this = this;
          return Promise.all(this.children.map(function(anchor) {
            return (0, utils_1.getRect)(anchor, ".smart-index-anchor-wrapper").then(function(rect) {
              Object.assign(anchor, {
                height: rect.height,
                top: rect.top + _this.scrollTop
              });
            });
          }));
        },
        setListRect: function() {
          var _this = this;
          return (0, utils_1.getRect)(this, ".smart-index-bar").then(function(rect) {
            if (!(0, utils_1.isDef)(rect)) {
              return;
            }
            Object.assign(_this, {
              height: rect.height,
              top: rect.top + _this.scrollTop
            });
          });
        },
        setSiderbarRect: function() {
          var _this = this;
          return (0, utils_1.getRect)(this, ".smart-index-bar__sidebar").then(function(res) {
            if (!(0, utils_1.isDef)(res)) {
              return;
            }
            _this.sidebar = {
              height: res.height,
              top: res.top
            };
          });
        },
        setDiffData: function(_a) {
          var target = _a.target, data = _a.data;
          var diffData = {};
          Object.keys(data).forEach(function(key) {
            if (target.data[key] !== data[key]) {
              diffData[key] = data[key];
            }
          });
          if (Object.keys(diffData).length) {
            target.setData(diffData);
          }
        },
        getAnchorRect: function(anchor) {
          return (0, utils_1.getRect)(anchor, ".smart-index-anchor-wrapper").then(function(rect) {
            return {
              height: rect.height,
              top: rect.top
            };
          });
        },
        getActiveAnchorIndex: function() {
          var _a = this, children = _a.children, scrollTop = _a.scrollTop;
          var _b = this.data, sticky = _b.sticky, stickyOffsetTop = _b.stickyOffsetTop;
          for (var i = this.children.length - 1; i >= 0; i--) {
            var preAnchorHeight = i > 0 ? children[i - 1].height : 0;
            var reachTop = sticky ? preAnchorHeight + stickyOffsetTop : 0;
            if (reachTop + scrollTop >= children[i].top) {
              return i;
            }
          }
          return -1;
        },
        onScroll: function() {
          var _this = this;
          var _a = this, _b = _a.children, children = _b === void 0 ? [] : _b, scrollTop = _a.scrollTop;
          if (!children.length) {
            return;
          }
          var _c = this.data, sticky = _c.sticky, stickyOffsetTop = _c.stickyOffsetTop, zIndex = _c.zIndex, highlightColor = _c.highlightColor;
          var active = this.getActiveAnchorIndex();
          this.setDiffData({
            target: this,
            data: {
              activeAnchorIndex: active
            }
          });
          if (sticky) {
            var isActiveAnchorSticky_1 = false;
            if (active !== -1) {
              isActiveAnchorSticky_1 = children[active].top <= stickyOffsetTop + scrollTop;
            }
            children.forEach(function(item, index) {
              if (index === active) {
                var wrapperStyle = "";
                var anchorStyle = "\n              color: ".concat(highlightColor, ";\n            ");
                if (isActiveAnchorSticky_1) {
                  wrapperStyle = "\n                height: ".concat(children[index].height, "px;\n              ");
                  anchorStyle = "\n                position: fixed;\n                top: ".concat(stickyOffsetTop, "px;\n                z-index: ").concat(zIndex, ";\n                color: ").concat(highlightColor, ";\n              ");
                }
                _this.setDiffData({
                  target: item,
                  data: {
                    active: true,
                    anchorStyle,
                    wrapperStyle
                  }
                });
              } else if (index === active - 1) {
                var currentAnchor = children[index];
                var currentOffsetTop = currentAnchor.top;
                var targetOffsetTop = index === children.length - 1 ? _this.top : children[index + 1].top;
                var parentOffsetHeight = targetOffsetTop - currentOffsetTop;
                var translateY = parentOffsetHeight - currentAnchor.height;
                var anchorStyle = "\n              position: relative;\n              transform: translate3d(0, ".concat(translateY, "px, 0);\n              z-index: ").concat(zIndex, ";\n              color: ").concat(highlightColor, ";\n            ");
                _this.setDiffData({
                  target: item,
                  data: {
                    active: true,
                    anchorStyle
                  }
                });
              } else {
                _this.setDiffData({
                  target: item,
                  data: {
                    active: false,
                    anchorStyle: "",
                    wrapperStyle: ""
                  }
                });
              }
            });
          }
        },
        onClick: function(event) {
          this.scrollToAnchor(event.target.dataset.index);
        },
        onTouchMove: function(event) {
          var sidebarLength = this.children.length;
          var touch = event.touches[0];
          var itemHeight = this.sidebar.height / sidebarLength;
          var index = Math.floor((touch.clientY - this.sidebar.top) / itemHeight);
          if (index < 0) {
            index = 0;
          } else if (index > sidebarLength - 1) {
            index = sidebarLength - 1;
          }
          this.scrollToAnchor(index);
        },
        onTouchStop: function() {
          this.scrollToAnchorIndex = null;
        },
        scrollToAnchor: function(index) {
          var _this = this;
          if (typeof index !== "number" || this.scrollToAnchorIndex === index) {
            return;
          }
          this.scrollToAnchorIndex = index;
          var anchor = this.children.find(function(item) {
            return item.data.index === _this.data.indexList[index];
          });
          if (anchor) {
            anchor.scrollIntoView(this.scrollTop);
            this.$emit("select", anchor.data.index);
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvaW5kZXgtYmFyL2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2luZGV4LWJhci9pbmRleC5jc3MiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL2NvbW1vbi9jb2xvci5qcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9pbmRleC1iYXIvaW5kZXguY29tcG9uZW50LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJAaW1wb3J0IFwiLi4vY29tbW9uL2luZGV4LmNzc1wiO1xuXG4uc21hcnQtaW5kZXgtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21hcnQtaW5kZXgtYmFyX19zaWRlYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnNtYXJ0LWluZGV4LWJhcl9faW5kZXgge1xuICBmb250LXNpemU6IHZhcigtLWluZGV4LWJhci1pbmRleC1mb250LXNpemUsIDEwcHgpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogdmFyKC0taW5kZXgtYmFyLWluZGV4LWxpbmUtaGVpZ2h0LCAxNHB4KTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nLWJhc2UsIDRweCkgMCB2YXIoLS1wYWRkaW5nLW1kLCAxNnB4KTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wRkJRVGhDT3pzN08wRkJRVzFET3pzN096czdPenM3T3pzN1FVRkJiVXdpTENKemIzVnlZMlZ6SWpwYklsVnpaWEp6TDJkMWJuTnRiMnRsY2k5RWIyTjFiV1Z1ZEhNdloybDBMME52YjJ4cGJtZE5hWE4wVFdGMFVHRnVaV3d2Ym05a1pWOXRiMlIxYkdWekwwQjBkWGxoTFcxcGJtbGhjSEF2YzIxaGNuUXRkV2t2YkdsaUwybHVaR1Y0TFdKaGNpOXBibVJsZUM1amMzTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpUUdsdGNHOXlkQ0FuTGk0dlkyOXRiVzl1TDJsdVpHVjRMbU56Y3ljN0xuTnRZWEowTFdsdVpHVjRMV0poY250d2IzTnBkR2x2YmpweVpXeGhkR2wyWlgwdWMyMWhjblF0YVc1a1pYZ3RZbUZ5WDE5emFXUmxZbUZ5ZTJScGMzQnNZWGs2Wm14bGVEdG1iR1Y0TFdScGNtVmpkR2x2YmpwamIyeDFiVzQ3Y0c5emFYUnBiMjQ2Wm1sNFpXUTdjbWxuYUhRNk1EdDBaWGgwTFdGc2FXZHVPbU5sYm5SbGNqdDBiM0E2TlRBbE8zUnlZVzV6Wm05eWJUcDBjbUZ1YzJ4aGRHVlpLQzAxTUNVcE95MTNaV0pyYVhRdGRYTmxjaTF6Wld4bFkzUTZibTl1WlR0MWMyVnlMWE5sYkdWamREcHViMjVsZlM1emJXRnlkQzFwYm1SbGVDMWlZWEpmWDJsdVpHVjRlMlp2Ym5RdGMybDZaVHAyWVhJb0xTMXBibVJsZUMxaVlYSXRhVzVrWlhndFptOXVkQzF6YVhwbExERXdjSGdwTzJadmJuUXRkMlZwWjJoME9qVXdNRHRzYVc1bExXaGxhV2RvZERwMllYSW9MUzFwYm1SbGVDMWlZWEl0YVc1a1pYZ3RiR2x1WlMxb1pXbG5hSFFzTVRSd2VDazdjR0ZrWkdsdVp6b3dJSFpoY2lndExYQmhaR1JwYm1jdFltRnpaU3cwY0hncElEQWdkbUZ5S0MwdGNHRmtaR2x1WnkxdFpDd3hObkI0S1gwaVhTd2libUZ0WlhNaU9sdGRmUT09ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HUkFZX0RBUksgPSBleHBvcnRzLkdSQVkgPSBleHBvcnRzLk9SQU5HRSA9IGV4cG9ydHMuR1JFRU4gPSBleHBvcnRzLldISVRFID0gZXhwb3J0cy5CTFVFID0gZXhwb3J0cy5SRUQgPSB2b2lkIDA7XG5leHBvcnRzLlJFRCA9ICcjZWUwYTI0JztcbmV4cG9ydHMuQkxVRSA9ICcjMTk4OWZhJztcbmV4cG9ydHMuV0hJVEUgPSAnI2ZmZic7XG5leHBvcnRzLkdSRUVOID0gJyMwN2MxNjAnO1xuZXhwb3J0cy5PUkFOR0UgPSAnI2ZmOTc2YSc7XG5leHBvcnRzLkdSQVkgPSAnIzMyMzIzMyc7XG5leHBvcnRzLkdSQVlfREFSSyA9ICcjOTY5Nzk5JztcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdpbmRleC1iYXItaW5kZXgtMjNjZjhjJyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29sb3JcIik7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciByZWxhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9yZWxhdGlvblwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcbnZhciBwYWdlX3Njcm9sbF8xID0gcmVxdWlyZShcIi4uL21peGlucy9wYWdlLXNjcm9sbFwiKTtcbnZhciBpbmRleExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluZGV4TGlzdCA9IFtdO1xuICAgIHZhciBjaGFyQ29kZU9mQSA9ICdBJy5jaGFyQ29kZUF0KDApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBpbmRleExpc3QucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlT2ZBICsgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXhMaXN0O1xufTtcbigwLCBjb21wb25lbnRfMS5TbWFydENvbXBvbmVudCkoe1xuICAgIHJlbGF0aW9uOiAoMCwgcmVsYXRpb25fMS51c2VDaGlsZHJlbikoJ2luZGV4LWFuY2hvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfSksXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3RpY2t5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogY29sb3JfMS5HUkVFTixcbiAgICAgICAgfSxcbiAgICAgICAgc3RpY2t5T2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaW5kZXhMaXN0OiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleExpc3QoKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1peGluczogW1xuICAgICAgICAoMCwgcGFnZV9zY3JvbGxfMS5wYWdlU2Nyb2xsTWl4aW4pKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSAoZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LnNjcm9sbFRvcCkgfHwgMDtcbiAgICAgICAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZUFuY2hvckluZGV4OiBudWxsLFxuICAgICAgICBzaG93U2lkZWJhcjogZmFsc2UsXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMDtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMudGltZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaWRlYmFyOiAhIV90aGlzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFJlY3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uU2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbdGhpcy5zZXRBbmNob3JzUmVjdCgpLCB0aGlzLnNldExpc3RSZWN0KCksIHRoaXMuc2V0U2lkZXJiYXJSZWN0KCldKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QW5jaG9yc1JlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgdXRpbHNfMS5nZXRSZWN0KShhbmNob3IsICcuc21hcnQtaW5kZXgtYW5jaG9yLXdyYXBwZXInKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYW5jaG9yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIF90aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpc3RSZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuICgwLCB1dGlsc18xLmdldFJlY3QpKHRoaXMsICcuc21hcnQtaW5kZXgtYmFyJykudGhlbihmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgICAgIGlmICghKDAsIHV0aWxzXzEuaXNEZWYpKHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihfdGhpcywge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgX3RoaXMuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFNpZGVyYmFyUmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiAoMCwgdXRpbHNfMS5nZXRSZWN0KSh0aGlzLCAnLnNtYXJ0LWluZGV4LWJhcl9fc2lkZWJhcicpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmICghKDAsIHV0aWxzXzEuaXNEZWYpKHJlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5zaWRlYmFyID0ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcmVzLnRvcCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldERpZmZEYXRhOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQsIGRhdGEgPSBfYS5kYXRhO1xuICAgICAgICAgICAgdmFyIGRpZmZEYXRhID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmRhdGFba2V5XSAhPT0gZGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmZEYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGlmZkRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXREYXRhKGRpZmZEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QW5jaG9yUmVjdDogZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgcmV0dXJuICgwLCB1dGlsc18xLmdldFJlY3QpKGFuY2hvciwgJy5zbWFydC1pbmRleC1hbmNob3Itd3JhcHBlcicpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRBY3RpdmVBbmNob3JJbmRleDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgc2Nyb2xsVG9wID0gX2Euc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5kYXRhLCBzdGlja3kgPSBfYi5zdGlja3ksIHN0aWNreU9mZnNldFRvcCA9IF9iLnN0aWNreU9mZnNldFRvcDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZUFuY2hvckhlaWdodCA9IGkgPiAwID8gY2hpbGRyZW5baSAtIDFdLmhlaWdodCA6IDA7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWNoVG9wID0gc3RpY2t5ID8gcHJlQW5jaG9ySGVpZ2h0ICsgc3RpY2t5T2Zmc2V0VG9wIDogMDtcbiAgICAgICAgICAgICAgICBpZiAocmVhY2hUb3AgKyBzY3JvbGxUb3AgPj0gY2hpbGRyZW5baV0udG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBfYiA9IF9hLmNoaWxkcmVuLCBjaGlsZHJlbiA9IF9iID09PSB2b2lkIDAgPyBbXSA6IF9iLCBzY3JvbGxUb3AgPSBfYS5zY3JvbGxUb3A7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZGF0YSwgc3RpY2t5ID0gX2Muc3RpY2t5LCBzdGlja3lPZmZzZXRUb3AgPSBfYy5zdGlja3lPZmZzZXRUb3AsIHpJbmRleCA9IF9jLnpJbmRleCwgaGlnaGxpZ2h0Q29sb3IgPSBfYy5oaWdobGlnaHRDb2xvcjtcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZUFuY2hvckluZGV4KCk7XG4gICAgICAgICAgICB0aGlzLnNldERpZmZEYXRhKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVBbmNob3JJbmRleDogYWN0aXZlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNBY3RpdmVBbmNob3JTdGlja3lfMSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlQW5jaG9yU3RpY2t5XzEgPSBjaGlsZHJlblthY3RpdmVdLnRvcCA8PSBzdGlja3lPZmZzZXRUb3AgKyBzY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcHBlclN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5jaG9yU3R5bGUgPSBcIlxcbiAgICAgICAgICAgICAgY29sb3I6IFwiLmNvbmNhdChoaWdobGlnaHRDb2xvciwgXCI7XFxuICAgICAgICAgICAgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlQW5jaG9yU3RpY2t5XzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSBcIlxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiLmNvbmNhdChjaGlsZHJlbltpbmRleF0uaGVpZ2h0LCBcInB4O1xcbiAgICAgICAgICAgICAgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclN0eWxlID0gXCJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgICAgICB0b3A6IFwiLmNvbmNhdChzdGlja3lPZmZzZXRUb3AsIFwicHg7XFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IFwiKS5jb25jYXQoekluZGV4LCBcIjtcXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiKS5jb25jYXQoaGlnaGxpZ2h0Q29sb3IsIFwiO1xcbiAgICAgICAgICAgICAgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGlmZkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yU3R5bGU6IGFuY2hvclN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU6IHdyYXBwZXJTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IGFjdGl2ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50QW5jaG9yID0gY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPZmZzZXRUb3AgPSBjdXJyZW50QW5jaG9yLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRPZmZzZXRUb3AgPSBpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSA/IF90aGlzLnRvcCA6IGNoaWxkcmVuW2luZGV4ICsgMV0udG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudE9mZnNldEhlaWdodCA9IHRhcmdldE9mZnNldFRvcCAtIGN1cnJlbnRPZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IHBhcmVudE9mZnNldEhlaWdodCAtIGN1cnJlbnRBbmNob3IuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvclN0eWxlID0gXCJcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgXCIuY29uY2F0KHRyYW5zbGF0ZVksIFwicHgsIDApO1xcbiAgICAgICAgICAgICAgei1pbmRleDogXCIpLmNvbmNhdCh6SW5kZXgsIFwiO1xcbiAgICAgICAgICAgICAgY29sb3I6IFwiKS5jb25jYXQoaGlnaGxpZ2h0Q29sb3IsIFwiO1xcbiAgICAgICAgICAgIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERpZmZEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclN0eWxlOiBhbmNob3JTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREaWZmRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yU3R5bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9BbmNob3IoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgc2lkZWJhckxlbmd0aCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5zaWRlYmFyLmhlaWdodCAvIHNpZGViYXJMZW5ndGg7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKCh0b3VjaC5jbGllbnRZIC0gdGhpcy5zaWRlYmFyLnRvcCkgLyBpdGVtSGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IHNpZGViYXJMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBzaWRlYmFyTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9BbmNob3IoaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0FuY2hvckluZGV4ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG9BbmNob3I6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuc2Nyb2xsVG9BbmNob3JJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQW5jaG9ySW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSB0aGlzLmNoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uZGF0YS5pbmRleCA9PT0gX3RoaXMuZGF0YS5pbmRleExpc3RbaW5kZXhdOyB9KTtcbiAgICAgICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICAgICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcodGhpcy5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGFuY2hvci5kYXRhLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLHFCQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDSGxCO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMs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ZCxRQUFRO0FBQUEsa0JBQ1IsTUFBTTtBQUFBLG9CQUNGLFFBQVE7QUFBQSxvQkFDUjtBQUFBLGtCQUNKO0FBQUEsZ0JBQ0osQ0FBQztBQUFBLGNBQ0wsT0FDSztBQUNELHNCQUFNLFlBQVk7QUFBQSxrQkFDZCxRQUFRO0FBQUEsa0JBQ1IsTUFBTTtBQUFBLG9CQUNGLFFBQVE7QUFBQSxvQkFDUixhQUFhO0FBQUEsb0JBQ2IsY0FBYztBQUFBLGtCQUNsQjtBQUFBLGdCQUNKLENBQUM7QUFBQSxjQUNMO0FBQUEsWUFDSixDQUFDO0FBQUEsVUFDTDtBQUFBLFFBQ0o7QUFBQSxRQUNBLFNBQVMsU0FBVSxPQUFPO0FBQ3RCLGVBQUssZUFBZSxNQUFNLE9BQU8sUUFBUSxLQUFLO0FBQUEsUUFDbEQ7QUFBQSxRQUNBLGFBQWEsU0FBVSxPQUFPO0FBQzFCLGNBQUksZ0JBQWdCLEtBQUssU0FBUztBQUNsQyxjQUFJLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDM0IsY0FBSSxhQUFhLEtBQUssUUFBUSxTQUFTO0FBQ3ZDLGNBQUksUUFBUSxLQUFLLE9BQU8sTUFBTSxVQUFVLEtBQUssUUFBUSxPQUFPLFVBQVU7QUFDdEUsY0FBSSxRQUFRLEdBQUc7QUFDWCxvQkFBUTtBQUFBLFVBQ1osV0FDUyxRQUFRLGdCQUFnQixHQUFHO0FBQ2hDLG9CQUFRLGdCQUFnQjtBQUFBLFVBQzVCO0FBQ0EsZUFBSyxlQUFlLEtBQUs7QUFBQSxRQUM3QjtBQUFBLFFBQ0EsYUFBYSxXQUFZO0FBQ3JCLGVBQUssc0JBQXNCO0FBQUEsUUFDL0I7QUFBQSxRQUNBLGdCQUFnQixTQUFVLE9BQU87QUFDN0IsY0FBSSxRQUFRO0FBQ1osY0FBSSxPQUFPLFVBQVUsWUFBWSxLQUFLLHdCQUF3QixPQUFPO0FBQ2pFO0FBQUEsVUFDSjtBQUNBLGVBQUssc0JBQXNCO0FBQzNCLGNBQUksU0FBUyxLQUFLLFNBQVMsS0FBSyxTQUFVLE1BQU07QUFBRSxtQkFBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLO0FBQUEsVUFBRyxDQUFDO0FBQzNHLGNBQUksUUFBUTtBQUNSLG1CQUFPLGVBQWUsS0FBSyxTQUFTO0FBQ3BDLGlCQUFLLE1BQU0sVUFBVSxPQUFPLEtBQUssS0FBSztBQUFBLFVBQzFDO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX2luZGV4X2JhciIsICJpbmRleExpc3QiXQp9Cg==
