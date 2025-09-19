import {
  require_touch
} from "/chunk-IAUUUNBK.js";
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
import {
  require_validator
} from "/chunk-UXQMYNQX.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabs/index.css
var require_tabs = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabs/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabs/index.css
var require_tabs2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabs/index.css"(exports, module) {
    require_tabs();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabs/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/tabs/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_tabs2());
    var Component = overrideComponent("tabs-index-e19e25");
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
    var component_1 = require_component();
    var touch_1 = require_touch();
    var utils_1 = require_utils();
    var validator_1 = require_validator();
    var relation_1 = require_relation();
    (0, component_1.SmartComponent)({
      mixins: [touch_1.touch],
      classes: ["nav-class", "tab-class", "tab-active-class", "line-class", "wrap-class"],
      relation: (0, relation_1.useChildren)("tab", function() {
        this.updateTabs();
      }),
      props: {
        sticky: Boolean,
        border: Boolean,
        swipeable: Boolean,
        titleActiveColor: String,
        titleInactiveColor: String,
        color: String,
        animated: {
          type: Boolean,
          observer: function() {
            var _this = this;
            this.children.forEach(function(child, index) {
              return child.updateRender(index === _this.data.currentIndex, _this);
            });
          }
        },
        lineWidth: {
          type: null,
          value: 16,
          observer: "resize"
        },
        lineHeight: {
          type: null,
          value: -1
        },
        active: {
          type: null,
          value: 0,
          observer: function(name) {
            if (name !== this.getCurrentName()) {
              this.setCurrentIndexByName(name);
            }
          }
        },
        type: {
          type: String,
          value: "line"
        },
        ellipsis: {
          type: Boolean,
          value: true
        },
        duration: {
          type: Number,
          value: 0.3
        },
        zIndex: {
          type: Number,
          value: 1
        },
        swipeThreshold: {
          type: Number,
          value: 5,
          observer: function(value) {
            this.setData({
              scrollable: this.children.length > value || !this.data.ellipsis
            });
          }
        },
        offsetTop: {
          type: Number,
          value: 0
        },
        lazyRender: {
          type: Boolean,
          value: true
        },
        useBeforeChange: {
          type: Boolean,
          value: false
        },
        inactiveDestroy: {
          type: Boolean,
          value: false
        }
      },
      data: {
        tabs: [],
        scrollLeft: 0,
        scrollable: false,
        currentIndex: 0,
        container: null,
        skipTransition: true,
        scrollWithAnimation: false,
        lineOffsetLeft: 0,
        inited: false
      },
      mounted: function() {
        var _this = this;
        (0, utils_1.requestAnimationFrame)(function() {
          _this.swiping = true;
          _this.setData({
            container: function() {
              return _this.createSelectorQuery().select(".smart-tabs");
            }
          });
          _this.resize();
          _this.scrollIntoView();
        });
      },
      methods: {
        updateTabs: function() {
          var _a = this, _b = _a.children, children = _b === void 0 ? [] : _b, data = _a.data;
          this.setData({
            tabs: children.map(function(child) {
              return child.data;
            }),
            scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
          });
          this.setCurrentIndexByName(data.active || this.getCurrentName());
        },
        trigger: function(eventName, child) {
          var currentIndex = this.data.currentIndex;
          var data = this.getChildData(currentIndex, child);
          if (!(0, validator_1.isDef)(data)) {
            return;
          }
          this.$emit(eventName, data);
        },
        onTap: function(event) {
          var _this = this;
          var index = event.currentTarget.dataset.index;
          var child = this.children[index];
          if (child.data.disabled) {
            this.trigger("disabled", child);
            return;
          }
          this.onBeforeChange(index).then(function() {
            _this.setCurrentIndex(index);
            (0, utils_1.nextTick)(function() {
              _this.trigger("click");
            });
          });
        },
        // correct the index of active tab
        setCurrentIndexByName: function(name) {
          var _a = this.children, children = _a === void 0 ? [] : _a;
          var matched = children.filter(function(child) {
            return child.getComputedName() === name;
          });
          if (matched.length) {
            this.setCurrentIndex(matched[0].index);
          }
        },
        setCurrentIndex: function(currentIndex) {
          var _this = this;
          var _a = this, data = _a.data, _b = _a.children, children = _b === void 0 ? [] : _b;
          if (!(0, validator_1.isDef)(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
            return;
          }
          (0, utils_1.groupSetData)(this, function() {
            var task = [];
            children.forEach(function(item, index) {
              var active = index === currentIndex;
              if (active !== item.data.active || !item.inited) {
                active ? task.push(function() {
                  return item.updateRender(active, _this);
                }) : task.unshift(function() {
                  return item.updateRender(active, _this);
                });
              }
            });
            task.forEach(function(fun) {
              return fun();
            });
          });
          if (currentIndex === data.currentIndex) {
            if (!data.inited) {
              this.resize();
            }
            return;
          }
          var shouldEmitChange = data.currentIndex !== null;
          this.setData({ currentIndex });
          (0, utils_1.requestAnimationFrame)(function() {
            _this.resize();
            _this.scrollIntoView();
          });
          (0, utils_1.nextTick)(function() {
            _this.trigger("input");
            if (shouldEmitChange) {
              _this.trigger("change");
            }
          });
        },
        getCurrentName: function() {
          var activeTab = this.children[this.data.currentIndex];
          if (activeTab) {
            return activeTab.getComputedName();
          }
        },
        resize: function() {
          var _this = this;
          var _a = this.data, currentIndex = _a.currentIndex, ellipsis = _a.ellipsis, skipTransition = _a.skipTransition, type = _a.type;
          Promise.all([
            (0, utils_1.getAllRect)(this, ".smart-tab"),
            type === "line" ? (0, utils_1.getRect)(this, ".smart-tabs__line") : Promise.resolve({ width: 0 })
          ]).then(function(_a2) {
            var _b = _a2[0], rects = _b === void 0 ? [] : _b, lineRect = _a2[1];
            var rect = rects[currentIndex];
            if (rect == null) {
              return;
            }
            var _c = rects[currentIndex], cardWidth = _c.width, cardHeight = _c.height;
            var lineOffsetLeft = rects.slice(0, currentIndex).reduce(function(prev, curr) {
              return prev + curr.width;
            }, 0);
            if (type === "line") {
              lineOffsetLeft += (rect.width - lineRect.width) / 2 + (ellipsis ? 0 : 8);
            }
            _this.setData({ lineOffsetLeft, inited: true, cardWidth, cardHeight });
            _this.swiping = true;
            if (skipTransition) {
              setTimeout(function() {
                _this.setData({ skipTransition: false });
              }, _this.data.duration);
            }
          });
        },
        // scroll active tab into view
        scrollIntoView: function() {
          var _this = this;
          var _a = this.data, currentIndex = _a.currentIndex, scrollable = _a.scrollable, scrollWithAnimation = _a.scrollWithAnimation;
          if (!scrollable) {
            return;
          }
          Promise.all([(0, utils_1.getAllRect)(this, ".smart-tab"), (0, utils_1.getRect)(this, ".smart-tabs__nav")]).then(function(_a2) {
            var tabRects = _a2[0], navRect = _a2[1];
            var tabRect = tabRects[currentIndex];
            var offsetLeft = tabRects.slice(0, currentIndex).reduce(function(prev, curr) {
              return prev + curr.width;
            }, 0);
            _this.setData({
              scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
            });
            if (!scrollWithAnimation) {
              (0, utils_1.nextTick)(function() {
                _this.setData({ scrollWithAnimation: true });
              });
            }
          });
        },
        onTouchScroll: function(event) {
          this.$emit("scroll", event.detail);
        },
        onTouchStart: function(event) {
          if (!this.data.swipeable)
            return;
          this.swiping = true;
          this.touchStart(event);
        },
        onTouchMove: function(event) {
          if (!this.data.swipeable || !this.swiping)
            return;
          this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd: function() {
          var _this = this;
          if (!this.data.swipeable || !this.swiping)
            return;
          var _a = this, direction = _a.direction, deltaX = _a.deltaX, offsetX = _a.offsetX;
          var minSwipeDistance = 50;
          if (direction === "horizontal" && offsetX >= minSwipeDistance) {
            var index_1 = this.getAvaiableTab(deltaX);
            if (index_1 !== -1) {
              this.onBeforeChange(index_1).then(function() {
                return _this.setCurrentIndex(index_1);
              });
            }
          }
          this.swiping = false;
        },
        getAvaiableTab: function(direction) {
          var _a = this.data, tabs = _a.tabs, currentIndex = _a.currentIndex;
          var step = direction > 0 ? -1 : 1;
          for (var i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
            var index = currentIndex + i;
            if (index >= 0 && index < tabs.length && tabs[index] && !tabs[index].disabled) {
              return index;
            }
          }
          return -1;
        },
        onBeforeChange: function(index) {
          var _this = this;
          var useBeforeChange = this.data.useBeforeChange;
          if (!useBeforeChange) {
            return Promise.resolve();
          }
          return new Promise(function(resolve, reject) {
            _this.$emit("before-change", __assign(__assign({}, _this.getChildData(index)), { callback: function(status) {
              return status ? resolve() : reject();
            } }));
          });
        },
        getChildData: function(index, child) {
          var currentChild = child || this.children[index];
          if (!(0, validator_1.isDef)(currentChild)) {
            return;
          }
          return {
            index: currentChild.index,
            name: currentChild.getComputedName(),
            title: currentChild.data.title
          };
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvdGFicy9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi90YWJzL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi90YWJzL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXRhYnMge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbWFydC10YWJzX193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNtYXJ0LXRhYnNfX3dyYXAtLXNjcm9sbGFibGUgLnNtYXJ0LXRhYiB7XG4gIGZsZXg6IDAgMCAyMiU7XG59XG5cbi5zbWFydC10YWJzX193cmFwLS1zY3JvbGxhYmxlIC5zbWFydC10YWItLWNvbXBsZXRlIHtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBmbGV4OiAxIDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uc21hcnQtdGFic19fd3JhcC0tc2Nyb2xsYWJsZSAuc21hcnQtdGFic19fbmF2LS1jb21wbGV0ZSB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5zbWFydC10YWJzX19zY3JvbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWJhY2tncm91bmQtY29sb3IsIHZhcigtLWFwcC1CMywgI2ZmZikpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNtYXJ0LXRhYnNfX3Njcm9sbC0tbGluZSB7XG4gIGJveC1zaXppbmc6IGluaXRpYWw7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTVweCk7XG59XG5cbi5zbWFydC10YWJzX19zY3JvbGwtLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tYXBwLUI2LU45LCByZ2JhKDAsIDAsIDAsIC4wNSkpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGFicy1jYXJkLWJvcmRlci1yYWRpdXMsIDhweCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IHZhcigtLXRhYnMtY2FyZC1wYWRkaW5nLCAycHgpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNtYXJ0LXRhYnNfX3Njcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc21hcnQtdGFic19fbmF2IHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtYXJ0LXRhYnNfX25hdi0tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRhYnMtY2FyZC1ib3JkZXItcmFkaXVzLCA4cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbWFydC10YWJzX19uYXYtLWNhcmQgLnNtYXJ0LXRhYiB7XG4gIGNvbG9yOiB2YXIoLS10YWJzLWNhcmQtdGV4dC1jb2xvciwgdmFyKC0tYXBwLUI2LU4zLCByZ2JhKDAsIDAsIDAsIC41KSkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNtYXJ0LXRhYnNfX25hdi0tY2FyZCAuc21hcnQtdGFiOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5zbWFydC10YWJzX19uYXYtLWNhcmQgLnNtYXJ0LXRhYi5zbWFydC10YWItLWFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10YWJzLWNhcmQtdGV4dC1hY3RpdmUtY29sb3IsIHZhcigtLWFwcC1CNi1OMSwgIzAwMCkpO1xufVxuXG4uc21hcnQtdGFic19fbmF2LS1jYXJkIC5zbWFydC10YWItLWRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yLCB2YXIoLS1hcHAtQjYtTjcsIHJnYmEoMCwgMCwgMCwgLjEpKSk7XG59XG5cbi5zbWFydC10YWJzX19saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFicy1ib3R0b20tYmFyLWNvbG9yLCB2YXIoLS1hcHAtTTQsICMxOTg5ZmEpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGFicy1ib3R0b20tYmFyLWhlaWdodCwgM3B4KTtcbiAgaGVpZ2h0OiB2YXIoLS10YWJzLWJvdHRvbS1iYXItaGVpZ2h0LCAzcHgpO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNtYXJ0LXRhYnNfX2NhcmQtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtYXJ0LXRhYnNfX2NhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWNhcmQtYWN0aXZlLWJhY2tncm91bmQtY29sb3IsIHZhcigtLWFwcC1CMywgI2ZmZikpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10YWJzLWNhcmQtYWN0aXZlLWJvcmRlci1yYWRpdXMsIDZweCk7XG4gIGxlZnQ6IHZhcigtLXRhYnMtY2FyZC1hY3RpdmUtbGVmdCwgMCk7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogdmFyKC0tdGFicy1jYXJkLWFjdGl2ZS10b3AsIDApO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbWFydC10YWJzX190cmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtYXJ0LXRhYnNfX3RyYWNrLS1hbmltYXRlZCB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbWFydC10YWJzX19jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNtYXJ0LXRhYnMtLWxpbmUge1xuICBoZWlnaHQ6IHZhcigtLXRhYnMtbGluZS1oZWlnaHQsIDMycHgpO1xufVxuXG4uc21hcnQtdGFicy0tY2FyZCB7XG4gIGhlaWdodDogdmFyKC0tdGFicy1jYXJkLWhlaWdodCwgMzJweCk7XG59XG5cbi5zbWFydC10YWIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tdGFicy1jYXJkLXRleHQtY29sb3IsIHZhcigtLWFwcC1CNi1OMywgcmdiYSgwLCAwLCAwLCAuNSkpKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IHZhcigtLXRhYi1mb250LXNpemUsIDEzcHgpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tdGFicy1saW5lLWhlaWdodCwgMzJweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbWFydC10YWItLWFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10YWJzLWNhcmQtdGV4dC1hY3RpdmUtY29sb3IsIHZhcigtLWFwcC1CNi1OMSwgIzAwMCkpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCwgNTAwKTtcbn1cblxuLnNtYXJ0LXRhYi0tZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tdGFiLWRpc2FibGVkLXRleHQtY29sb3IsIHZhcigtLWFwcC1CNi1ONywgcmdiYSgwLCAwLCAwLCAuMSkpKTtcbn1cblxuLnNtYXJ0LXRhYl9fdGl0bGVfX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZTYjI5MElqcHVkV3hzTENKdFlYQndhVzVuY3lJNklrRkJRVUU3TzBGQlFUaENPenM3T3p0QlFVRnpSVHM3T3pzN1FVRkJLME03T3pzN1FVRkJjMFE3T3pzN08wRkJRVEJHT3pzN096dEJRVUUwUmpzN096czdRVUZCYlVjN096czdPMEZCUVhORk96czdPenM3T3p0QlFVRnhUenM3T3p0QlFVRnZSRHM3T3pzN096dEJRVUV3UmpzN096czdPMEZCUVRCSE96czdPenM3TzBGQlFUSktPenM3TzBGQlFTdEVPenM3TzBGQlFXMUlPenM3TzBGQlFXbElPenM3T3pzN096czdPenRCUVVGeFR6czdPenM3T3pzN1FVRkJORWM3T3pzN096czdPenM3UVVGQmJWRTdPenM3T3p0QlFVRTBSRHM3T3pzN1FVRkJiVVU3T3pzN1FVRkJjVU03T3pzN1FVRkJjMFE3T3pzN1FVRkJjMFE3T3pzN096czdPenM3T3p0QlFVRnpVRHM3T3pzN1FVRkJNRWc3T3pzN1FVRkJNRVlpTENKemIzVnlZMlZ6SWpwYklsVnpaWEp6TDJkMWJuTnRiMnRsY2k5RWIyTjFiV1Z1ZEhNdloybDBMME52YjJ4cGJtZE5hWE4wVFdGMFVHRnVaV3d2Ym05a1pWOXRiMlIxYkdWekwwQjBkWGxoTFcxcGJtbGhjSEF2YzIxaGNuUXRkV2t2YkdsaUwzUmhZbk12YVc1a1pYZ3VZM056SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklrQnBiWEJ2Y25RZ0p5NHVMMk52YlcxdmJpOXBibVJsZUM1amMzTW5PeTV6YldGeWRDMTBZV0p6ZXkxM1pXSnJhWFF0ZEdGd0xXaHBaMmhzYVdkb2RDMWpiMnh2Y2pwMGNtRnVjM0JoY21WdWREdHdiM05wZEdsdmJqcHlaV3hoZEdsMlpYMHVjMjFoY25RdGRHRmljMTlmZDNKaGNIdGthWE53YkdGNU9tWnNaWGc3YjNabGNtWnNiM2M2YUdsa1pHVnVmUzV6YldGeWRDMTBZV0p6WDE5M2NtRndMUzF6WTNKdmJHeGhZbXhsSUM1emJXRnlkQzEwWVdKN1pteGxlRG93SURBZ01qSWxmUzV6YldGeWRDMTBZV0p6WDE5M2NtRndMUzF6WTNKdmJHeGhZbXhsSUM1emJXRnlkQzEwWVdJdExXTnZiWEJzWlhSbGUyWnNaWGc2TVNBd0lHRjFkRzhoYVcxd2IzSjBZVzUwTzNCaFpHUnBibWM2TUNBeE1uQjRmUzV6YldGeWRDMTBZV0p6WDE5M2NtRndMUzF6WTNKdmJHeGhZbXhsSUM1emJXRnlkQzEwWVdKelgxOXVZWFl0TFdOdmJYQnNaWFJsZTNCaFpHUnBibWN0YkdWbWREbzRjSGc3Y0dGa1pHbHVaeTF5YVdkb2REbzRjSGg5TG5OdFlYSjBMWFJoWW5OZlgzTmpjbTlzYkh0aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T25aaGNpZ3RMWFJoWW5NdFltRmphMmR5YjNWdVpDMWpiMnh2Y2l4MllYSW9MUzFoY0hBdFFqTXNJMlptWmlrcE8yOTJaWEptYkc5M09tRjFkRzk5TG5OdFlYSjBMWFJoWW5OZlgzTmpjbTlzYkMwdGJHbHVaWHRpYjNndGMybDZhVzVuT21sdWFYUnBZV3c3YUdWcFoyaDBPbU5oYkdNb01UQXdKU0FySURFMWNIZ3BmUzV6YldGeWRDMTBZV0p6WDE5elkzSnZiR3d0TFdOaGNtUjdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqcDJZWElvTFMxMFlXSnpMV05oY21RdFltRmphMmR5YjNWdVpDMWpiMnh2Y2l4MllYSW9MUzFoY0hBdFFqWXRUamtzY21kaVlTZ3dMREFzTUN3dU1EVXBLU2s3WW05eVpHVnlMWEpoWkdsMWN6cDJZWElvTFMxMFlXSnpMV05oY21RdFltOXlaR1Z5TFhKaFpHbDFjeXc0Y0hncE8ySnZlQzF6YVhwcGJtYzZZbTl5WkdWeUxXSnZlRHR3WVdSa2FXNW5PblpoY2lndExYUmhZbk10WTJGeVpDMXdZV1JrYVc1bkxESndlQ2s3ZDJsa2RHZzZNVEF3SlgwdWMyMWhjblF0ZEdGaWMxOWZjMk55YjJ4c09qb3RkMlZpYTJsMExYTmpjbTlzYkdKaGNudGthWE53YkdGNU9tNXZibVY5TG5OdFlYSjBMWFJoWW5OZlgyNWhkbnRrYVhOd2JHRjVPbVpzWlhnN2NHOXphWFJwYjI0NmNtVnNZWFJwZG1VN0xYZGxZbXRwZEMxMWMyVnlMWE5sYkdWamREcHViMjVsTzNWelpYSXRjMlZzWldOME9tNXZibVY5TG5OdFlYSjBMWFJoWW5OZlgyNWhkaTB0WTJGeVpIdGliM0prWlhJdGNtRmthWFZ6T25aaGNpZ3RMWFJoWW5NdFkyRnlaQzFpYjNKa1pYSXRjbUZrYVhWekxEaHdlQ2s3WW05NExYTnBlbWx1WnpwaWIzSmtaWEl0WW05NE8yaGxhV2RvZERveE1EQWxmUzV6YldGeWRDMTBZV0p6WDE5dVlYWXRMV05oY21RZ0xuTnRZWEowTFhSaFludGhiR2xuYmkxcGRHVnRjenBqWlc1MFpYSTdZMjlzYjNJNmRtRnlLQzB0ZEdGaWN5MWpZWEprTFhSbGVIUXRZMjlzYjNJc2RtRnlLQzB0WVhCd0xVSTJMVTR6TEhKblltRW9NQ3d3TERBc0xqVXBLU2s3WkdsemNHeGhlVHBtYkdWNE8ycDFjM1JwWm5rdFkyOXVkR1Z1ZERwalpXNTBaWEo5TG5OdFlYSjBMWFJoWW5OZlgyNWhkaTB0WTJGeVpDQXVjMjFoY25RdGRHRmlPbXhoYzNRdFkyaHBiR1I3WW05eVpHVnlMWEpwWjJoME9tNXZibVY5TG5OdFlYSjBMWFJoWW5OZlgyNWhkaTB0WTJGeVpDQXVjMjFoY25RdGRHRmlMbk50WVhKMExYUmhZaTB0WVdOMGFYWmxlMk52Ykc5eU9uWmhjaWd0TFhSaFluTXRZMkZ5WkMxMFpYaDBMV0ZqZEdsMlpTMWpiMnh2Y2l4MllYSW9MUzFoY0hBdFFqWXRUakVzSXpBd01Da3BmUzV6YldGeWRDMTBZV0p6WDE5dVlYWXRMV05oY21RZ0xuTnRZWEowTFhSaFlpMHRaR2x6WVdKc1pXUjdZMjlzYjNJNmRtRnlLQzB0ZEdGaUxXUnBjMkZpYkdWa0xYUmxlSFF0WTI5c2IzSXNkbUZ5S0MwdFlYQndMVUkyTFU0M0xISm5ZbUVvTUN3d0xEQXNMakVwS1NsOUxuTnRZWEowTFhSaFluTmZYMnhwYm1WN1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pwMllYSW9MUzEwWVdKekxXSnZkSFJ2YlMxaVlYSXRZMjlzYjNJc2RtRnlLQzB0WVhCd0xVMDBMQ014T1RnNVptRXBLVHRpYjNKa1pYSXRjbUZrYVhWek9uWmhjaWd0TFhSaFluTXRZbTkwZEc5dExXSmhjaTFvWldsbmFIUXNNM0I0S1R0aWIzUjBiMjA2TUR0b1pXbG5hSFE2ZG1GeUtDMHRkR0ZpY3kxaWIzUjBiMjB0WW1GeUxXaGxhV2RvZEN3emNIZ3BPMnhsWm5RNk1EdHZjR0ZqYVhSNU9qQTdjRzl6YVhScGIyNDZZV0p6YjJ4MWRHVTdlaTFwYm1SbGVEb3hmUzV6YldGeWRDMTBZV0p6WDE5allYSmtMV0p2ZUh0aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T21sdWFYUnBZV3c3YUdWcFoyaDBPakV3TUNVN2NHOXBiblJsY2kxbGRtVnVkSE02Ym05dVpUdHdiM05wZEdsdmJqcHlaV3hoZEdsMlpUdDNhV1IwYURveE1EQWxmUzV6YldGeWRDMTBZV0p6WDE5allYSmtlMkpoWTJ0bmNtOTFibVF0WTI5c2IzSTZkbUZ5S0MwdGRHRmljeTFqWVhKa0xXRmpkR2wyWlMxaVlXTnJaM0p2ZFc1a0xXTnZiRzl5TEhaaGNpZ3RMV0Z3Y0MxQ015d2pabVptS1NrN1ltOXlaR1Z5TFhKaFpHbDFjenAyWVhJb0xTMTBZV0p6TFdOaGNtUXRZV04wYVhabExXSnZjbVJsY2kxeVlXUnBkWE1zTm5CNEtUdHNaV1owT25aaGNpZ3RMWFJoWW5NdFkyRnlaQzFoWTNScGRtVXRiR1ZtZEN3d0tUdHZjR0ZqYVhSNU9qQTdjRzl6YVhScGIyNDZZV0p6YjJ4MWRHVTdkRzl3T25aaGNpZ3RMWFJoWW5NdFkyRnlaQzFoWTNScGRtVXRkRzl3TERBcE8zb3RhVzVrWlhnNk1IMHVjMjFoY25RdGRHRmljMTlmZEhKaFkydDdhR1ZwWjJoME9qRXdNQ1U3Y0c5emFYUnBiMjQ2Y21Wc1lYUnBkbVU3ZDJsa2RHZzZNVEF3SlgwdWMyMWhjblF0ZEdGaWMxOWZkSEpoWTJzdExXRnVhVzFoZEdWa2UyUnBjM0JzWVhrNlpteGxlRHQwY21GdWMybDBhVzl1TFhCeWIzQmxjblI1T214bFpuUjlMbk50WVhKMExYUmhZbk5mWDJOdmJuUmxiblI3YjNabGNtWnNiM2M2YUdsa1pHVnVmUzV6YldGeWRDMTBZV0p6TFMxc2FXNWxlMmhsYVdkb2REcDJZWElvTFMxMFlXSnpMV3hwYm1VdGFHVnBaMmgwTERNeWNIZ3BmUzV6YldGeWRDMTBZV0p6TFMxallYSmtlMmhsYVdkb2REcDJZWElvTFMxMFlXSnpMV05oY21RdGFHVnBaMmgwTERNeWNIZ3BmUzV6YldGeWRDMTBZV0o3WW05NExYTnBlbWx1WnpwaWIzSmtaWEl0WW05NE8yTnZiRzl5T25aaGNpZ3RMWFJoWW5NdFkyRnlaQzEwWlhoMExXTnZiRzl5TEhaaGNpZ3RMV0Z3Y0MxQ05pMU9NeXh5WjJKaEtEQXNNQ3d3TEM0MUtTa3BPMk4xY25OdmNqcHdiMmx1ZEdWeU8yWnNaWGc2TVR0bWIyNTBMWE5wZW1VNmRtRnlLQzB0ZEdGaUxXWnZiblF0YzJsNlpTd3hNM0I0S1R0c2FXNWxMV2hsYVdkb2REcDJZWElvTFMxMFlXSnpMV3hwYm1VdGFHVnBaMmgwTERNeWNIZ3BPMjFwYmkxM2FXUjBhRG93TzNCdmMybDBhVzl1T25KbGJHRjBhWFpsTzNSbGVIUXRZV3hwWjI0NlkyVnVkR1Z5ZlM1emJXRnlkQzEwWVdJdExXRmpkR2wyWlh0amIyeHZjanAyWVhJb0xTMTBZV0p6TFdOaGNtUXRkR1Y0ZEMxaFkzUnBkbVV0WTI5c2IzSXNkbUZ5S0MwdFlYQndMVUkyTFU0eExDTXdNREFwS1R0bWIyNTBMWGRsYVdkb2REcDJZWElvTFMxbWIyNTBMWGRsYVdkb2RDMWliMnhrTERVd01DbDlMbk50WVhKMExYUmhZaTB0WkdsellXSnNaV1I3WTI5c2IzSTZkbUZ5S0MwdGRHRmlMV1JwYzJGaWJHVmtMWFJsZUhRdFkyOXNiM0lzZG1GeUtDMHRZWEJ3TFVJMkxVNDNMSEpuWW1Fb01Dd3dMREFzTGpFcEtTbDlMbk50WVhKMExYUmhZbDlmZEdsMGJHVmZYMmx1Wm05N2NHOXphWFJwYjI0NmNtVnNZWFJwZG1VaGFXMXdiM0owWVc1ME8zUnZjRG90TVhCNElXbHRjRzl5ZEdGdWREdDBjbUZ1YzJadmNtMDZkSEpoYm5Oc1lYUmxXQ2d3S1NGcGJYQnZjblJoYm5SOUlsMHNJbTVoYldWeklqcGJYWDA9ICovIiwgInJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG47XG47XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIlxuaW1wb3J0IG92ZXJyaWRlQ29tcG9uZW50IGZyb20gJy9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL3NyYy9vdmVybG9hZE5hdGl2ZUNvbXBvbmVudENvbnN0cnVjdG9yLnZpcnR1YWwuanMnO1xuY29uc3QgQ29tcG9uZW50ID0gb3ZlcnJpZGVDb21wb25lbnQoJ3RhYnMtaW5kZXgtZTE5ZTI1Jyk7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdG91Y2hfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvdG91Y2hcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG52YXIgdmFsaWRhdG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3ZhbGlkYXRvclwiKTtcbnZhciByZWxhdGlvbl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9yZWxhdGlvblwiKTtcbigwLCBjb21wb25lbnRfMS5TbWFydENvbXBvbmVudCkoe1xuICAgIG1peGluczogW3RvdWNoXzEudG91Y2hdLFxuICAgIGNsYXNzZXM6IFsnbmF2LWNsYXNzJywgJ3RhYi1jbGFzcycsICd0YWItYWN0aXZlLWNsYXNzJywgJ2xpbmUtY2xhc3MnLCAnd3JhcC1jbGFzcyddLFxuICAgIHJlbGF0aW9uOiAoMCwgcmVsYXRpb25fMS51c2VDaGlsZHJlbikoJ3RhYicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYWJzKCk7XG4gICAgfSksXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3RpY2t5OiBCb29sZWFuLFxuICAgICAgICBib3JkZXI6IEJvb2xlYW4sXG4gICAgICAgIHN3aXBlYWJsZTogQm9vbGVhbixcbiAgICAgICAgdGl0bGVBY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICB0aXRsZUluYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnVwZGF0ZVJlbmRlcihpbmRleCA9PT0gX3RoaXMuZGF0YS5jdXJyZW50SW5kZXgsIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiAxNixcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVzaXplJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZUhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSAhPT0gdGhpcy5nZXRDdXJyZW50TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4QnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIGVsbGlwc2lzOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMC4zLFxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICB9LFxuICAgICAgICBzd2lwZVRocmVzaG9sZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdGhpcy5jaGlsZHJlbi5sZW5ndGggPiB2YWx1ZSB8fCAhdGhpcy5kYXRhLmVsbGlwc2lzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgbGF6eVJlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB1c2VCZWZvcmVDaGFuZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGluYWN0aXZlRGVzdHJveToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiczogW10sXG4gICAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICAgIHNjcm9sbGFibGU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgICAgc2tpcFRyYW5zaXRpb246IHRydWUsXG4gICAgICAgIHNjcm9sbFdpdGhBbmltYXRpb246IGZhbHNlLFxuICAgICAgICBsaW5lT2Zmc2V0TGVmdDogMCxcbiAgICAgICAgaW5pdGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgKDAsIHV0aWxzXzEucmVxdWVzdEFuaW1hdGlvbkZyYW1lKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnLnNtYXJ0LXRhYnMnKTsgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMucmVzaXplKCk7XG4gICAgICAgICAgICBfdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlVGFiczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgX2IgPSBfYS5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgZGF0YSA9IF9hLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHRhYnM6IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmRhdGE7IH0pLFxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gZGF0YS5zd2lwZVRocmVzaG9sZCB8fCAhZGF0YS5lbGxpcHNpcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXhCeU5hbWUoZGF0YS5hY3RpdmUgfHwgdGhpcy5nZXRDdXJyZW50TmFtZSgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuY3VycmVudEluZGV4O1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldENoaWxkRGF0YShjdXJyZW50SW5kZXgsIGNoaWxkKTtcbiAgICAgICAgICAgIGlmICghKDAsIHZhbGlkYXRvcl8xLmlzRGVmKShkYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UYXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgaWYgKGNoaWxkLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Rpc2FibGVkJywgY2hpbGQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25CZWZvcmVDaGFuZ2UoaW5kZXgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEN1cnJlbnRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBjb3JyZWN0IHRoZSBpbmRleCBvZiBhY3RpdmUgdGFiXG4gICAgICAgIHNldEN1cnJlbnRJbmRleEJ5TmFtZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuY2hpbGRyZW4sIGNoaWxkcmVuID0gX2EgPT09IHZvaWQgMCA/IFtdIDogX2E7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmdldENvbXB1dGVkTmFtZSgpID09PSBuYW1lOyB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KG1hdGNoZWRbMF0uaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRDdXJyZW50SW5kZXg6IGZ1bmN0aW9uIChjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBkYXRhID0gX2EuZGF0YSwgX2IgPSBfYS5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYjtcbiAgICAgICAgICAgIGlmICghKDAsIHZhbGlkYXRvcl8xLmlzRGVmKShjdXJyZW50SW5kZXgpIHx8IGN1cnJlbnRJbmRleCA+PSBjaGlsZHJlbi5sZW5ndGggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICgwLCB1dGlsc18xLmdyb3VwU2V0RGF0YSkodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gW107XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IGluZGV4ID09PSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IGl0ZW0uZGF0YS5hY3RpdmUgfHwgIWl0ZW0uaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhc2sucHVzaChmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVtLnVwZGF0ZVJlbmRlcihhY3RpdmUsIF90aGlzKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhc2sudW5zaGlmdChmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVtLnVwZGF0ZVJlbmRlcihhY3RpdmUsIF90aGlzKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0YXNrLmZvckVhY2goZnVuY3Rpb24gKGZ1bikgeyByZXR1cm4gZnVuKCk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSBkYXRhLmN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5pbml0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNob3VsZEVtaXRDaGFuZ2UgPSBkYXRhLmN1cnJlbnRJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4IH0pO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEucmVxdWVzdEFuaW1hdGlvbkZyYW1lKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzaXplKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRFbWl0Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDdXJyZW50TmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZVRhYiA9IHRoaXMuY2hpbGRyZW5bdGhpcy5kYXRhLmN1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVRhYi5nZXRDb21wdXRlZE5hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXgsIGVsbGlwc2lzID0gX2EuZWxsaXBzaXMsIHNraXBUcmFuc2l0aW9uID0gX2Euc2tpcFRyYW5zaXRpb24sIHR5cGUgPSBfYS50eXBlO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLmdldEFsbFJlY3QpKHRoaXMsICcuc21hcnQtdGFiJyksXG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2xpbmUnID8gKDAsIHV0aWxzXzEuZ2V0UmVjdCkodGhpcywgJy5zbWFydC10YWJzX19saW5lJykgOiBQcm9taXNlLnJlc29sdmUoeyB3aWR0aDogMCB9KSxcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbMF0sIHJlY3RzID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsIGxpbmVSZWN0ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSByZWN0c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2MgPSByZWN0c1tjdXJyZW50SW5kZXhdLCBjYXJkV2lkdGggPSBfYy53aWR0aCwgY2FyZEhlaWdodCA9IF9jLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgbGluZU9mZnNldExlZnQgPSByZWN0c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY3VycmVudEluZGV4KVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7IHJldHVybiBwcmV2ICsgY3Vyci53aWR0aDsgfSwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgICAgICAgICAgICAgICBsaW5lT2Zmc2V0TGVmdCArPSAocmVjdC53aWR0aCAtIGxpbmVSZWN0LndpZHRoKSAvIDIgKyAoZWxsaXBzaXMgPyAwIDogOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoeyBsaW5lT2Zmc2V0TGVmdDogbGluZU9mZnNldExlZnQsIGluaXRlZDogdHJ1ZSwgY2FyZFdpZHRoOiBjYXJkV2lkdGgsIGNhcmRIZWlnaHQ6IGNhcmRIZWlnaHQgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHNraXBUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXRpbmcgdHJhbnNpdGlvbiBlbmRcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHsgc2tpcFRyYW5zaXRpb246IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBfdGhpcy5kYXRhLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2Nyb2xsIGFjdGl2ZSB0YWIgaW50byB2aWV3XG4gICAgICAgIHNjcm9sbEludG9WaWV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXgsIHNjcm9sbGFibGUgPSBfYS5zY3JvbGxhYmxlLCBzY3JvbGxXaXRoQW5pbWF0aW9uID0gX2Euc2Nyb2xsV2l0aEFuaW1hdGlvbjtcbiAgICAgICAgICAgIGlmICghc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb21pc2UuYWxsKFsoMCwgdXRpbHNfMS5nZXRBbGxSZWN0KSh0aGlzLCAnLnNtYXJ0LXRhYicpLCAoMCwgdXRpbHNfMS5nZXRSZWN0KSh0aGlzLCAnLnNtYXJ0LXRhYnNfX25hdicpXSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFiUmVjdHMgPSBfYVswXSwgbmF2UmVjdCA9IF9hWzFdO1xuICAgICAgICAgICAgICAgIHZhciB0YWJSZWN0ID0gdGFiUmVjdHNbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IHRhYlJlY3RzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHsgcmV0dXJuIHByZXYgKyBjdXJyLndpZHRoOyB9LCAwKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogb2Zmc2V0TGVmdCAtIChuYXZSZWN0LndpZHRoIC0gdGFiUmVjdC53aWR0aCkgLyAyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghc2Nyb2xsV2l0aEFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5uZXh0VGljaykoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7IHNjcm9sbFdpdGhBbmltYXRpb246IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU2Nyb2xsOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSB8fCAhdGhpcy5zd2lwaW5nKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd2F0Y2ggc3dpcGUgdG91Y2ggZW5kXG4gICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUgfHwgIXRoaXMuc3dpcGluZylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb24sIGRlbHRhWCA9IF9hLmRlbHRhWCwgb2Zmc2V0WCA9IF9hLm9mZnNldFg7XG4gICAgICAgICAgICB2YXIgbWluU3dpcGVEaXN0YW5jZSA9IDUwO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIG9mZnNldFggPj0gbWluU3dpcGVEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleF8xID0gdGhpcy5nZXRBdmFpYWJsZVRhYihkZWx0YVgpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleF8xICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlQ2hhbmdlKGluZGV4XzEpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2V0Q3VycmVudEluZGV4KGluZGV4XzEpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN3aXBpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QXZhaWFibGVUYWI6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdGFicyA9IF9hLnRhYnMsIGN1cnJlbnRJbmRleCA9IF9hLmN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIHZhciBzdGVwID0gZGlyZWN0aW9uID4gMCA/IC0xIDogMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGVwOyBjdXJyZW50SW5kZXggKyBpIDwgdGFicy5sZW5ndGggJiYgY3VycmVudEluZGV4ICsgaSA+PSAwOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBjdXJyZW50SW5kZXggKyBpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGFicy5sZW5ndGggJiYgdGFic1tpbmRleF0gJiYgIXRhYnNbaW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVmb3JlQ2hhbmdlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgdXNlQmVmb3JlQ2hhbmdlID0gdGhpcy5kYXRhLnVzZUJlZm9yZUNoYW5nZTtcbiAgICAgICAgICAgIGlmICghdXNlQmVmb3JlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnYmVmb3JlLWNoYW5nZScsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5nZXRDaGlsZERhdGEoaW5kZXgpKSwgeyBjYWxsYmFjazogZnVuY3Rpb24gKHN0YXR1cykgeyByZXR1cm4gKHN0YXR1cyA/IHJlc29sdmUoKSA6IHJlamVjdCgpKTsgfSB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGREYXRhOiBmdW5jdGlvbiAoaW5kZXgsIGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudENoaWxkID0gY2hpbGQgfHwgdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoISgwLCB2YWxpZGF0b3JfMS5pc0RlZikoY3VycmVudENoaWxkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRDaGlsZC5pbmRleCxcbiAgICAgICAgICAgICAgICBuYW1lOiBjdXJyZW50Q2hpbGQuZ2V0Q29tcHV0ZWROYW1lKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGN1cnJlbnRDaGlsZC5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsSUFBQUEsZ0JBQUE7QUFBQTtBQUFBO0FBR0EsV0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNIbEI7QUFBQTtBQUNBO0FBRUEsdUJBQU87QUFEUCxRQUFNLFlBQVksa0JBQWtCLG1CQUFtQjtBQUd2RCxRQUFJLFdBQVksV0FBUSxRQUFLLFlBQWEsV0FBWTtBQUNsRCxpQkFBVyxPQUFPLFVBQVUsU0FBUyxHQUFHO0FBQ3BDLGlCQUFTLEdBQUcsSUFB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QUFjLGdCQUFnQixXQUFXLGtCQUFrQjtBQUMzRCxnQkFBSSxVQUFVLEtBQUssZUFBZSxNQUFNO0FBQ3hDLGdCQUFJLFlBQVksSUFBSTtBQUNoQixtQkFBSyxlQUFlLE9BQU8sRUFBRSxLQUFLLFdBQVk7QUFBRSx1QkFBTyxNQUFNLGdCQUFnQixPQUFPO0FBQUEsY0FBRyxDQUFDO0FBQUEsWUFDNUY7QUFBQSxVQUNKO0FBQ0EsZUFBSyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxRQUNBLGdCQUFnQixTQUFVLFdBQVc7QUFDakMsY0FBSSxLQUFLLEtBQUssTUFBTSxPQUFPLEdBQUcsTUFBTSxlQUFlLEdBQUc7QUFDdEQsY0FBSSxPQUFPLFlBQVksSUFBSSxLQUFLO0FBQ2hDLG1CQUFTLElBQUksTUFBTSxlQUFlLElBQUksS0FBSyxVQUFVLGVBQWUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUNuRixnQkFBSSxRQUFRLGVBQWU7QUFDM0IsZ0JBQUksU0FBUyxLQUFLLFFBQVEsS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsVUFBVTtBQUMzRSxxQkFBTztBQUFBLFlBQ1g7QUFBQSxVQUNKO0FBQ0EsaUJBQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxnQkFBZ0IsU0FBVSxPQUFPO0FBQzdCLGNBQUksUUFBUTtBQUNaLGNBQUksa0JBQWtCLEtBQUssS0FBSztBQUNoQyxjQUFJLENBQUMsaUJBQWlCO0FBQ2xCLG1CQUFPLFFBQVEsUUFBUTtBQUFBLFVBQzNCO0FBQ0EsaUJBQU8sSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQzFDLGtCQUFNLE1BQU0saUJBQWlCLFNBQVMsU0FBUyxDQUFDLEdBQUcsTUFBTSxhQUFhLEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBVSxTQUFVLFFBQVE7QUFBRSxxQkFBUSxTQUFTLFFBQVEsSUFBSSxPQUFPO0FBQUEsWUFBSSxFQUFFLENBQUMsQ0FBQztBQUFBLFVBQy9KLENBQUM7QUFBQSxRQUNMO0FBQUEsUUFDQSxjQUFjLFNBQVUsT0FBTyxPQUFPO0FBQ2xDLGNBQUksZUFBZSxTQUFTLEtBQUssU0FBUyxLQUFLO0FBQy9DLGNBQUksRUFBRSxHQUFHLFlBQVksT0FBTyxZQUFZLEdBQUc7QUFDdkM7QUFBQSxVQUNKO0FBQ0EsaUJBQU87QUFBQSxZQUNILE9BQU8sYUFBYTtBQUFBLFlBQ3BCLE1BQU0sYUFBYSxnQkFBZ0I7QUFBQSxZQUNuQyxPQUFPLGFBQWEsS0FBSztBQUFBLFVBQzdCO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX3RhYnMiLCAiX2EiXQp9Cg==
