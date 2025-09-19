import {
  __commonJS
} from "/chunk-IJV4CEDC.js";

// node_modules/@tuya-miniapp/smart-ui/lib/mixins/basic.js
var require_basic = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/mixins/basic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.basic = void 0;
    exports.basic = Behavior({
      methods: {
        $emit: function(name, detail, options) {
          this.triggerEvent(name, detail, options);
        },
        set: function(data) {
          this.setData(data);
          return new Promise(function(resolve) {
            return wx.nextTick(resolve);
          });
        },
        // high performance setData
        setView: function(data, callback) {
          var _this = this;
          var target = {};
          var hasChange = false;
          Object.keys(data).forEach(function(key) {
            if (data[key] !== _this.data[key]) {
              target[key] = data[key];
              hasChange = true;
            }
          });
          if (hasChange) {
            return this.setData(target, callback);
          }
          return callback && callback();
        }
      }
    });
  }
});

// node_modules/@tuya-miniapp/smart-ui/lib/common/component.js
var require_component = __commonJS({
  "node_modules/@tuya-miniapp/smart-ui/lib/common/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SmartComponent = void 0;
    var basic_1 = require_basic();
    function mapKeys(source, target, map) {
      Object.keys(map).forEach(function(key) {
        if (source[key]) {
          target[map[key]] = source[key];
        }
      });
    }
    function SmartComponent(smartOptions) {
      var options = {};
      mapKeys(smartOptions, options, {
        data: "data",
        props: "properties",
        watch: "observers",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        destroyed: "detached",
        classes: "externalClasses"
      });
      options.externalClasses = options.externalClasses || [];
      options.externalClasses.push("custom-class");
      options.behaviors = options.behaviors || [];
      options.behaviors.push(basic_1.basic);
      var relation = smartOptions.relation;
      if (relation) {
        options.relations = relation.relations;
        options.behaviors.push(relation.mixin);
      }
      options.options = {
        multipleSlots: true,
        addGlobalClass: true
      };
      Component(options);
    }
    exports.SmartComponent = SmartComponent;
  }
});

export {
  require_component
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL21peGlucy9iYXNpYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvY29tbW9uL2NvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJhc2ljID0gdm9pZCAwO1xuZXhwb3J0cy5iYXNpYyA9IEJlaGF2aW9yKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICRlbWl0OiBmdW5jdGlvbiAobmFtZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuYW1lLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHd4Lm5leHRUaWNrKHJlc29sdmUpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gaGlnaCBwZXJmb3JtYW5jZSBzZXREYXRhXG4gICAgICAgIHNldFZpZXc6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICAgICAgICAgIHZhciBoYXNDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gIT09IF90aGlzLmRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChoYXNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREYXRhKHRhcmdldCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TbWFydENvbXBvbmVudCA9IHZvaWQgMDtcbnZhciBiYXNpY18xID0gcmVxdWlyZShcIi4uL21peGlucy9iYXNpY1wiKTtcbmZ1bmN0aW9uIG1hcEtleXMoc291cmNlLCB0YXJnZXQsIG1hcCkge1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgICAgICAgdGFyZ2V0W21hcFtrZXldXSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBTbWFydENvbXBvbmVudChzbWFydE9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIG1hcEtleXMoc21hcnRPcHRpb25zLCBvcHRpb25zLCB7XG4gICAgICAgIGRhdGE6ICdkYXRhJyxcbiAgICAgICAgcHJvcHM6ICdwcm9wZXJ0aWVzJyxcbiAgICAgICAgd2F0Y2g6ICdvYnNlcnZlcnMnLFxuICAgICAgICBtaXhpbnM6ICdiZWhhdmlvcnMnLFxuICAgICAgICBtZXRob2RzOiAnbWV0aG9kcycsXG4gICAgICAgIGJlZm9yZUNyZWF0ZTogJ2NyZWF0ZWQnLFxuICAgICAgICBjcmVhdGVkOiAnYXR0YWNoZWQnLFxuICAgICAgICBtb3VudGVkOiAncmVhZHknLFxuICAgICAgICBkZXN0cm95ZWQ6ICdkZXRhY2hlZCcsXG4gICAgICAgIGNsYXNzZXM6ICdleHRlcm5hbENsYXNzZXMnLFxuICAgIH0pO1xuICAgIC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xuICAgIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XG4gICAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMucHVzaCgnY3VzdG9tLWNsYXNzJyk7XG4gICAgLy8gYWRkIGRlZmF1bHQgYmVoYXZpb3JzXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMgPSBvcHRpb25zLmJlaGF2aW9ycyB8fCBbXTtcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJhc2ljXzEuYmFzaWMpO1xuICAgIC8vIGFkZCByZWxhdGlvbnNcbiAgICB2YXIgcmVsYXRpb24gPSBzbWFydE9wdGlvbnMucmVsYXRpb247XG4gICAgaWYgKHJlbGF0aW9uKSB7XG4gICAgICAgIG9wdGlvbnMucmVsYXRpb25zID0gcmVsYXRpb24ucmVsYXRpb25zO1xuICAgICAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKHJlbGF0aW9uLm1peGluKTtcbiAgICB9XG4gICAgLy8gbWFwIGZpZWxkIHRvIGZvcm0tZmllbGQgYmVoYXZpb3JcbiAgICAvLyBpZiAoc21hcnRPcHRpb25zLmZpZWxkKSB7XG4gICAgLy8gICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKCd3eDovL2Zvcm0tZmllbGQnKTtcbiAgICAvLyB9XG4gICAgLy8gYWRkIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMub3B0aW9ucyA9IHtcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXG4gICAgfTtcbiAgICBDb21wb25lbnQob3B0aW9ucyk7XG59XG5leHBvcnRzLlNtYXJ0Q29tcG9uZW50ID0gU21hcnRDb21wb25lbnQ7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxZQUFRLFFBQVE7QUFDaEIsWUFBUSxRQUFRLFNBQVM7QUFBQSxNQUNyQixTQUFTO0FBQUEsUUFDTCxPQUFPLFNBQVUsTUFBTSxRQUFRLFNBQVM7QUFDcEMsZUFBSyxhQUFhLE1BQU0sUUFBUSxPQUFPO0FBQUEsUUFDM0M7QUFBQSxRQUNBLEtBQUssU0FBVSxNQUFNO0FBQ2pCLGVBQUssUUFBUSxJQUFJO0FBQ2pCLGlCQUFPLElBQUksUUFBUSxTQUFVLFNBQVM7QUFBRSxtQkFBTyxHQUFHLFNBQVMsT0FBTztBQUFBLFVBQUcsQ0FBQztBQUFBLFFBQzFFO0FBQUE7QUFBQSxRQUVBLFNBQVMsU0FBVSxNQUFNLFVBQVU7QUFDL0IsY0FBSSxRQUFRO0FBQ1osY0FBSSxTQUFTLENBQUM7QUFDZCxjQUFJLFlBQVk7QUFDaEIsaUJBQU8sS0FBSyxJQUFJLEVBQUUsUUFBUSxTQUFVLEtBQUs7QUFDckMsZ0JBQUksS0FBSyxHQUFHLE1BQU0sTUFBTSxLQUFLLEdBQUcsR0FBRztBQUMvQixxQkFBTyxHQUFHLElBQUksS0FBSyxHQUFHO0FBQ3RCLDBCQUFZO0FBQUEsWUFDaEI7QUFBQSxVQUNKLENBQUM7QUFDRCxjQUFJLFdBQVc7QUFDWCxtQkFBTyxLQUFLLFFBQVEsUUFBUSxRQUFRO0FBQUEsVUFDeEM7QUFDQSxpQkFBTyxZQUFZLFNBQVM7QUFBQSxRQUNoQztBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQTtBQUFBOzs7QUM3QkQ7QUFBQTtBQUFBO0FBQ0EsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQVEsaUJBQWlCO0FBQ3pCLFFBQUksVUFBVTtBQUNkLGFBQVMsUUFBUSxRQUFRLFFBQVEsS0FBSztBQUNsQyxhQUFPLEtBQUssR0FBRyxFQUFFLFFBQVEsU0FBVSxLQUFLO0FBQ3BDLFlBQUksT0FBTyxHQUFHLEdBQUc7QUFDYixpQkFBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRztBQUFBLFFBQ2pDO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUNBLGFBQVMsZUFBZSxjQUFjO0FBQ2xDLFVBQUksVUFBVSxDQUFDO0FBQ2YsY0FBUSxjQUFjLFNBQVM7QUFBQSxRQUMzQixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsTUFDYixDQUFDO0FBRUQsY0FBUSxrQkFBa0IsUUFBUSxtQkFBbUIsQ0FBQztBQUN0RCxjQUFRLGdCQUFnQixLQUFLLGNBQWM7QUFFM0MsY0FBUSxZQUFZLFFBQVEsYUFBYSxDQUFDO0FBQzFDLGNBQVEsVUFBVSxLQUFLLFFBQVEsS0FBSztBQUVwQyxVQUFJLFdBQVcsYUFBYTtBQUM1QixVQUFJLFVBQVU7QUFDVixnQkFBUSxZQUFZLFNBQVM7QUFDN0IsZ0JBQVEsVUFBVSxLQUFLLFNBQVMsS0FBSztBQUFBLE1BQ3pDO0FBTUEsY0FBUSxVQUFVO0FBQUEsUUFDZCxlQUFlO0FBQUEsUUFDZixnQkFBZ0I7QUFBQSxNQUNwQjtBQUNBLGdCQUFVLE9BQU87QUFBQSxJQUNyQjtBQUNBLFlBQVEsaUJBQWlCO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
