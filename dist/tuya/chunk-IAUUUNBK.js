import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/mixins/touch.js
var require_touch = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/mixins/touch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.touch = void 0;
    var MIN_DISTANCE = 10;
    function getDirection(x, y) {
      if (x > y && x > MIN_DISTANCE) {
        return "horizontal";
      }
      if (y > x && y > MIN_DISTANCE) {
        return "vertical";
      }
      return "";
    }
    exports.touch = Behavior({
      methods: {
        resetTouchStatus: function() {
          this.direction = "";
          this.deltaX = 0;
          this.deltaY = 0;
          this.offsetX = 0;
          this.offsetY = 0;
        },
        touchStart: function(event) {
          this.resetTouchStatus();
          var touch = event.touches[0];
          this.startX = touch.clientX;
          this.startY = touch.clientY;
        },
        touchMove: function(event) {
          var touch = event.touches[0];
          this.deltaX = touch.clientX - this.startX;
          this.deltaY = touch.clientY - this.startY;
          this.offsetX = Math.abs(this.deltaX);
          this.offsetY = Math.abs(this.deltaY);
          this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
        }
      }
    });
  }
});

export {
  require_touch
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL21peGlucy90b3VjaC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvdWNoID0gdm9pZCAwO1xuLy8gQHRzLW5vY2hlY2tcbnZhciBNSU5fRElTVEFOQ0UgPSAxMDtcbmZ1bmN0aW9uIGdldERpcmVjdGlvbih4LCB5KSB7XG4gICAgaWYgKHggPiB5ICYmIHggPiBNSU5fRElTVEFOQ0UpIHtcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKHkgPiB4ICYmIHkgPiBNSU5fRElTVEFOQ0UpIHtcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbmV4cG9ydHMudG91Y2ggPSBCZWhhdmlvcih7XG4gICAgbWV0aG9kczoge1xuICAgICAgICByZXNldFRvdWNoU3RhdHVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kZWx0YVggPSAwO1xuICAgICAgICAgICAgdGhpcy5kZWx0YVkgPSAwO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoU3RhdHVzKCk7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5zdGFydFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSB0b3VjaC5jbGllbnRZO1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaE1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuc3RhcnRYO1xuICAgICAgICAgICAgdGhpcy5kZWx0YVkgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5zdGFydFk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLmFicyh0aGlzLmRlbHRhWCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLmFicyh0aGlzLmRlbHRhWSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uIHx8IGdldERpcmVjdGlvbih0aGlzLm9mZnNldFgsIHRoaXMub2Zmc2V0WSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsWUFBUSxRQUFRO0FBRWhCLFFBQUksZUFBZTtBQUNuQixhQUFTLGFBQWEsR0FBRyxHQUFHO0FBQ3hCLFVBQUksSUFBSSxLQUFLLElBQUksY0FBYztBQUMzQixlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksSUFBSSxLQUFLLElBQUksY0FBYztBQUMzQixlQUFPO0FBQUEsTUFDWDtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQ0EsWUFBUSxRQUFRLFNBQVM7QUFBQSxNQUNyQixTQUFTO0FBQUEsUUFDTCxrQkFBa0IsV0FBWTtBQUMxQixlQUFLLFlBQVk7QUFDakIsZUFBSyxTQUFTO0FBQ2QsZUFBSyxTQUFTO0FBQ2QsZUFBSyxVQUFVO0FBQ2YsZUFBSyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxRQUNBLFlBQVksU0FBVSxPQUFPO0FBQ3pCLGVBQUssaUJBQWlCO0FBQ3RCLGNBQUksUUFBUSxNQUFNLFFBQVEsQ0FBQztBQUMzQixlQUFLLFNBQVMsTUFBTTtBQUNwQixlQUFLLFNBQVMsTUFBTTtBQUFBLFFBQ3hCO0FBQUEsUUFDQSxXQUFXLFNBQVUsT0FBTztBQUN4QixjQUFJLFFBQVEsTUFBTSxRQUFRLENBQUM7QUFDM0IsZUFBSyxTQUFTLE1BQU0sVUFBVSxLQUFLO0FBQ25DLGVBQUssU0FBUyxNQUFNLFVBQVUsS0FBSztBQUNuQyxlQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssTUFBTTtBQUNuQyxlQUFLLFVBQVUsS0FBSyxJQUFJLEtBQUssTUFBTTtBQUNuQyxlQUFLLFlBQVksS0FBSyxhQUFhLGFBQWEsS0FBSyxTQUFTLEtBQUssT0FBTztBQUFBLFFBQzlFO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
