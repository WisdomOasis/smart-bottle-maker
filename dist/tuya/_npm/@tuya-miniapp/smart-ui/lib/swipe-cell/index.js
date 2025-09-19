import {
  require_touch
} from "/chunk-IAUUUNBK.js";
import {
  require_utils
} from "/chunk-MWNLXEW7.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/swipe-cell/index.css
var require_swipe_cell = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/swipe-cell/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/swipe-cell/index.css
var require_swipe_cell2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/swipe-cell/index.css"(exports, module) {
    require_swipe_cell();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/swipe-cell/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/swipe-cell/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_swipe_cell2());
    var Component = overrideComponent("swipe-cell-index-41d915");
    Object.defineProperty(exports, "__esModule", { value: true });
    var component_1 = require_component();
    var touch_1 = require_touch();
    var utils_1 = require_utils();
    var THRESHOLD = 0.3;
    var ARRAY = [];
    (0, component_1.SmartComponent)({
      props: {
        disabled: Boolean,
        leftWidth: {
          type: Number,
          value: 0,
          observer: function(leftWidth) {
            if (leftWidth === void 0) {
              leftWidth = 0;
            }
            if (this.offset > 0) {
              this.swipeMove(leftWidth);
            }
          }
        },
        rightWidth: {
          type: Number,
          value: 0,
          observer: function(rightWidth) {
            if (rightWidth === void 0) {
              rightWidth = 0;
            }
            if (this.offset < 0) {
              this.swipeMove(-rightWidth);
            }
          }
        },
        asyncClose: Boolean,
        name: {
          type: null,
          value: ""
        }
      },
      mixins: [touch_1.touch],
      data: {
        catchMove: false,
        wrapperStyle: ""
      },
      created: function() {
        this.offset = 0;
        ARRAY.push(this);
      },
      destroyed: function() {
        var _this = this;
        ARRAY = ARRAY.filter(function(item) {
          return item !== _this;
        });
      },
      methods: {
        open: function(position) {
          var _a = this.data, leftWidth = _a.leftWidth, rightWidth = _a.rightWidth;
          var offset = position === "left" ? leftWidth : -rightWidth;
          this.swipeMove(offset);
          this.$emit("open", {
            position,
            name: this.data.name
          });
        },
        close: function() {
          this.swipeMove(0);
        },
        swipeMove: function(offset) {
          if (offset === void 0) {
            offset = 0;
          }
          this.offset = (0, utils_1.range)(offset, -this.data.rightWidth, this.data.leftWidth);
          var transform = "translate3d(".concat(this.offset, "px, 0, 0)");
          var transition = this.dragging ? "none" : "transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)";
          this.setData({
            wrapperStyle: "\n        -webkit-transform: ".concat(transform, ";\n        -webkit-transition: ").concat(transition, ";\n        transform: ").concat(transform, ";\n        transition: ").concat(transition, ";\n      ")
          });
        },
        swipeLeaveTransition: function() {
          var _a = this.data, leftWidth = _a.leftWidth, rightWidth = _a.rightWidth;
          var offset = this.offset;
          if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
            this.open("right");
          } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
            this.open("left");
          } else {
            this.swipeMove(0);
          }
          this.setData({ catchMove: false });
        },
        startDrag: function(event) {
          if (this.data.disabled) {
            return;
          }
          this.startOffset = this.offset;
          this.touchStart(event);
        },
        noop: function() {
        },
        onDrag: function(event) {
          var _this = this;
          if (this.data.disabled) {
            return;
          }
          this.touchMove(event);
          if (this.direction !== "horizontal") {
            return;
          }
          this.dragging = true;
          ARRAY.filter(function(item) {
            return item !== _this && item.offset !== 0;
          }).forEach(function(item) {
            return item.close();
          });
          this.setData({ catchMove: true });
          this.swipeMove(this.startOffset + this.deltaX);
        },
        endDrag: function() {
          if (this.data.disabled || !this.dragging) {
            return;
          }
          this.dragging = false;
          this.swipeLeaveTransition();
        },
        onClick: function(event) {
          var _a = event.currentTarget.dataset.key, position = _a === void 0 ? "outside" : _a;
          this.$emit("click", position);
          if (!this.offset) {
            return;
          }
          if (this.data.asyncClose) {
            this.$emit("close", {
              position,
              instance: this,
              name: this.data.name
            });
          } else {
            this.swipeMove(0);
          }
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvc3dpcGUtY2VsbC9pbmRleC5jc3MiLCAic3R5bGUtbG9hZGVyOi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9zd2lwZS1jZWxsL2luZGV4LmNzcyIsICJuYXRpdmUtY29tcG9uZW50Oi9Vc2Vycy9ndW5zbW9rZXIvRG9jdW1lbnRzL2dpdC9Db29saW5nTWlzdE1hdFBhbmVsL25vZGVfbW9kdWxlcy9AdHV5YS1taW5pYXBwL3NtYXJ0LXVpL2xpYi9zd2lwZS1jZWxsL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXN3aXBlLWNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbWFydC1zd2lwZS1jZWxsX19sZWZ0LCAuc21hcnQtc3dpcGUtY2VsbF9fcmlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uc21hcnQtc3dpcGUtY2VsbF9fbGVmdCB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xufVxuXG4uc21hcnQtc3dpcGUtY2VsbF9fcmlnaHQge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wRkJRVGhDT3pzN096dEJRVUZ2UkRzN096czdPMEZCUVhGR096czdPenRCUVVGblJTSXNJbk52ZFhKalpYTWlPbHNpVlhObGNuTXZaM1Z1YzIxdmEyVnlMMFJ2WTNWdFpXNTBjeTluYVhRdlEyOXZiR2x1WjAxcGMzUk5ZWFJRWVc1bGJDOXViMlJsWDIxdlpIVnNaWE12UUhSMWVXRXRiV2x1YVdGd2NDOXpiV0Z5ZEMxMWFTOXNhV0l2YzNkcGNHVXRZMlZzYkM5cGJtUmxlQzVqYzNNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lRR2x0Y0c5eWRDQW5MaTR2WTI5dGJXOXVMMmx1WkdWNExtTnpjeWM3TG5OdFlYSjBMWE4zYVhCbExXTmxiR3g3YjNabGNtWnNiM2M2YUdsa1pHVnVPM0J2YzJsMGFXOXVPbkpsYkdGMGFYWmxmUzV6YldGeWRDMXpkMmx3WlMxalpXeHNYMTlzWldaMExDNXpiV0Z5ZEMxemQybHdaUzFqWld4c1gxOXlhV2RvZEh0b1pXbG5hSFE2TVRBd0pUdHdiM05wZEdsdmJqcGhZbk52YkhWMFpUdDBiM0E2TUgwdWMyMWhjblF0YzNkcGNHVXRZMlZzYkY5ZmJHVm1kSHRzWldaME9qQTdkSEpoYm5ObWIzSnRPblJ5WVc1emJHRjBaVE5rS0MweE1EQWxMREFzTUNsOUxuTnRZWEowTFhOM2FYQmxMV05sYkd4ZlgzSnBaMmgwZTNKcFoyaDBPakE3ZEhKaGJuTm1iM0p0T25SeVlXNXpiR0YwWlROa0tERXdNQ1VzTUN3d0tYMGlYU3dpYm1GdFpYTWlPbHRkZlE9PSAqLyIsICJyZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICJcbmltcG9ydCBvdmVycmlkZUNvbXBvbmVudCBmcm9tICcvVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9zcmMvb3ZlcmxvYWROYXRpdmVDb21wb25lbnRDb25zdHJ1Y3Rvci52aXJ0dWFsLmpzJztcbmNvbnN0IENvbXBvbmVudCA9IG92ZXJyaWRlQ29tcG9uZW50KCdzd2lwZS1jZWxsLWluZGV4LTQxZDkxNScpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdG91Y2hfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvdG91Y2hcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG52YXIgVEhSRVNIT0xEID0gMC4zO1xudmFyIEFSUkFZID0gW107XG4oMCwgY29tcG9uZW50XzEuU21hcnRDb21wb25lbnQpKHtcbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgbGVmdFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobGVmdFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlZnRXaWR0aCA9PT0gdm9pZCAwKSB7IGxlZnRXaWR0aCA9IDA7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKGxlZnRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHRXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHJpZ2h0V2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRXaWR0aCA9PT0gdm9pZCAwKSB7IHJpZ2h0V2lkdGggPSAwOyB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSgtcmlnaHRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmNDbG9zZTogQm9vbGVhbixcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1peGluczogW3RvdWNoXzEudG91Y2hdLFxuICAgIGRhdGE6IHtcbiAgICAgICAgY2F0Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgd3JhcHBlclN0eWxlOiAnJyxcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICBBUlJBWS5wdXNoKHRoaXMpO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFSUkFZID0gQVJSQVkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtICE9PSBfdGhpczsgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBsZWZ0V2lkdGggPSBfYS5sZWZ0V2lkdGgsIHJpZ2h0V2lkdGggPSBfYS5yaWdodFdpZHRoO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBvc2l0aW9uID09PSAnbGVmdCcgPyBsZWZ0V2lkdGggOiAtcmlnaHRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKG9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJywge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGEubmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlTW92ZTogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDA7IH1cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gKDAsIHV0aWxzXzEucmFuZ2UpKG9mZnNldCwgLXRoaXMuZGF0YS5yaWdodFdpZHRoLCB0aGlzLmRhdGEubGVmdFdpZHRoKTtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCh0aGlzLm9mZnNldCwgXCJweCwgMCwgMClcIik7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXMuZHJhZ2dpbmcgPyAnbm9uZScgOiAndHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMSknO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU6IFwiXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogXCIuY29uY2F0KHRyYW5zZm9ybSwgXCI7XFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IFwiKS5jb25jYXQodHJhbnNpdGlvbiwgXCI7XFxuICAgICAgICB0cmFuc2Zvcm06IFwiKS5jb25jYXQodHJhbnNmb3JtLCBcIjtcXG4gICAgICAgIHRyYW5zaXRpb246IFwiKS5jb25jYXQodHJhbnNpdGlvbiwgXCI7XFxuICAgICAgXCIpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlTGVhdmVUcmFuc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGxlZnRXaWR0aCA9IF9hLmxlZnRXaWR0aCwgcmlnaHRXaWR0aCA9IF9hLnJpZ2h0V2lkdGg7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICBpZiAocmlnaHRXaWR0aCA+IDAgJiYgLW9mZnNldCA+IHJpZ2h0V2lkdGggKiBUSFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZWZ0V2lkdGggPiAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCAqIFRIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbignbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXRjaE1vdmU6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydERyYWc6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgb25EcmFnOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIEFSUkFZLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbSAhPT0gX3RoaXMgJiYgaXRlbS5vZmZzZXQgIT09IDA7IH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uY2xvc2UoKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXRjaE1vdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSh0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5kZWx0YVgpO1xuICAgICAgICB9LFxuICAgICAgICBlbmREcmFnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkIHx8ICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zd2lwZUxlYXZlVHJhbnNpdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXksIHBvc2l0aW9uID0gX2EgPT09IHZvaWQgMCA/ICdvdXRzaWRlJyA6IF9hO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxzQkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IseUJBQXlCO0FBRzdELFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxRQUFJLGNBQWM7QUFDbEIsUUFBSSxVQUFVO0FBQ2QsUUFBSSxVQUFVO0FBQ2QsUUFBSSxZQUFZO0FBQ2hCLFFBQUksUUFBUSxDQUFDO0FBQ2IsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsT0FBTztBQUFBLFFBQ0gsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsVUFBVSxTQUFVLFdBQVc7QUFDM0IsZ0JBQUksY0FBYyxRQUFRO0FBQUUsMEJBQVk7QUFBQSxZQUFHO0FBQzNDLGdCQUFJLEtBQUssU0FBUyxHQUFHO0FBQ2pCLG1CQUFLLFVBQVUsU0FBUztBQUFBLFlBQzVCO0FBQUEsVUFD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
