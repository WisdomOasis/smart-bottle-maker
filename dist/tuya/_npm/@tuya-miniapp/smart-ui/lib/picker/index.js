import {
  require_shared
} from "/chunk-SX3VGSIV.js";
import {
  require_component
} from "/chunk-JDD2SNXY.js";
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

// css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/picker/index.css
var require_picker = __commonJS({
  "css-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/picker/index.css"(exports, module) {
    module.exports = {};
  }
});

// style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/picker/index.css
var require_picker2 = __commonJS({
  "style-loader:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/picker/index.css"(exports, module) {
    require_picker();
    module.exports = {};
  }
});

// native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/picker/index.component.js
var require_index_component = __commonJS({
  "native-component:/Users/gunsmoker/Documents/git/CoolingMistMatPanel/node_modules/@tuya-miniapp/smart-ui/lib/picker/index.component.js"(exports) {
    init_overloadNativeComponentConstructor_virtual();
    var import_index = __toESM(require_picker2());
    var Component = overrideComponent("picker-index-685639");
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
    var shared_1 = require_shared();
    (0, component_1.SmartComponent)({
      classes: ["active-class", "toolbar-class", "column-class"],
      props: __assign(__assign({}, shared_1.pickerProps), { activeStyle: {
        type: String,
        value: ""
      }, valueKey: {
        type: String,
        value: "text"
      }, toolbarPosition: {
        type: String,
        value: "top"
      }, defaultIndex: {
        type: Number,
        value: 0
      }, activeIndex: {
        type: Number,
        value: -1
      }, unit: {
        type: String,
        value: ""
      }, columns: {
        type: Array,
        value: [],
        observer: function(columns) {
          if (columns === void 0) {
            columns = [];
          }
          this.simple = columns.length && !columns[0].values;
          if (Array.isArray(this.children) && this.children.length) {
            this.setColumns().catch(function() {
            });
          }
        }
      } }),
      beforeCreate: function() {
        var _this = this;
        Object.defineProperty(this, "children", {
          get: function() {
            return _this.selectAllComponents(".smart-picker__column") || [];
          }
        });
      },
      methods: {
        noop: function() {
        },
        setColumns: function() {
          var _this = this;
          var data = this.data;
          var columns = this.simple ? [{ values: data.columns }] : data.columns;
          var stack = columns.map(function(column, index) {
            return _this.setColumnValues(index, column.values);
          });
          return Promise.all(stack);
        },
        emit: function(event) {
          var type = event.currentTarget.dataset.type;
          if (this.simple) {
            this.$emit(type, {
              value: this.getColumnValue(0),
              index: this.getColumnIndex(0)
            });
          } else {
            this.$emit(type, {
              value: this.getValues(),
              index: this.getIndexes()
            });
          }
        },
        onChange: function(event) {
          if (this.simple) {
            this.$emit("change", {
              picker: this,
              value: this.getColumnValue(0),
              index: this.getColumnIndex(0)
            });
          } else {
            this.$emit("change", {
              picker: this,
              value: this.getValues(),
              index: event.currentTarget.dataset.index
            });
          }
        },
        // get column instance by index
        getColumn: function(index) {
          return this.children[index];
        },
        // get column value by index
        getColumnValue: function(index) {
          var column = this.getColumn(index);
          return column && column.getValue();
        },
        // set column value by index
        setColumnValue: function(index, value) {
          var column = this.getColumn(index);
          if (column == null) {
            return Promise.reject(new Error("setColumnValue: The corresponding column does not exist"));
          }
          return column.setValue(value);
        },
        // get column option index by column index
        getColumnIndex: function(columnIndex) {
          return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },
        // set column option index by column index
        setColumnIndex: function(columnIndex, optionIndex) {
          var column = this.getColumn(columnIndex);
          if (column == null) {
            return Promise.reject(new Error("setColumnIndex: The corresponding column does not exist"));
          }
          return column.setIndex(optionIndex);
        },
        // get options of column by index
        getColumnValues: function(index) {
          return (this.children[index] || {}).data.options;
        },
        // set options of column by index
        setColumnValues: function(index, options, needReset) {
          if (needReset === void 0) {
            needReset = true;
          }
          var column = this.children[index];
          if (column == null) {
            return Promise.reject(new Error("setColumnValues: The corresponding column does not exist"));
          }
          var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
          if (isSame) {
            return Promise.resolve();
          }
          return column.set({ options }).then(function() {
            if (needReset) {
              column.setIndex(0);
            }
          });
        },
        // get values of all columns
        getValues: function() {
          return this.children.map(function(child) {
            return child.getValue();
          });
        },
        // set values of all columns
        setValues: function(values) {
          var _this = this;
          var stack = values.map(function(value, index) {
            return _this.setColumnValue(index, value);
          });
          return Promise.all(stack);
        },
        // get indexes of all columns
        getIndexes: function() {
          return this.children.map(function(child) {
            return child.data.currentIndex;
          });
        },
        // set indexes of all columns
        setIndexes: function(indexes) {
          var _this = this;
          var stack = indexes.map(function(optionIndex, columnIndex) {
            return _this.setColumnIndex(columnIndex, optionIndex);
          });
          return Promise.all(stack);
        }
      }
    });
  }
});
export default require_index_component();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY3NzLWxvYWRlcjovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcGlja2VyL2luZGV4LmNzcyIsICJzdHlsZS1sb2FkZXI6L1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvbm9kZV9tb2R1bGVzL0B0dXlhLW1pbmlhcHAvc21hcnQtdWkvbGliL3BpY2tlci9pbmRleC5jc3MiLCAibmF0aXZlLWNvbXBvbmVudDovVXNlcnMvZ3Vuc21va2VyL0RvY3VtZW50cy9naXQvQ29vbGluZ01pc3RNYXRQYW5lbC9ub2RlX21vZHVsZXMvQHR1eWEtbWluaWFwcC9zbWFydC11aS9saWIvcGlja2VyL2luZGV4LmNvbXBvbmVudC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiQGltcG9ydCBcIi4uL2NvbW1vbi9pbmRleC5jc3NcIjtcblxuLnNtYXJ0LXBpY2tlciB7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGlja2VyLWJhY2tncm91bmQtY29sb3IsIHZhcigtLWFwcC1CNCwgI2ZmZikpO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc21hcnQtcGlja2VyX190b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS1waWNrZXItdG9vbGJhci1oZWlnaHQsIDQ0cHgpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tcGlja2VyLXRvb2xiYXItaGVpZ2h0LCA0NHB4KTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc21hcnQtcGlja2VyX19jYW5jZWwsIC5zbWFydC1waWNrZXJfX2NvbmZpcm0ge1xuICBmb250LXNpemU6IHZhcigtLXBpY2tlci1hY3Rpb24tZm9udC1zaXplLCAxNHB4KTtcbiAgcGFkZGluZzogdmFyKC0tcGlja2VyLWFjdGlvbi1wYWRkaW5nLCAwIDE2cHgpO1xufVxuXG4uc21hcnQtcGlja2VyX19jYW5jZWwtLWhvdmVyLCAuc21hcnQtcGlja2VyX19jb25maXJtLS1ob3ZlciB7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4uc21hcnQtcGlja2VyX19jb25maXJtIHtcbiAgY29sb3I6IHZhcigtLXBpY2tlci1jb25maXJtLWFjdGlvbi1jb2xvciwgIzU3NmI5NSk7XG59XG5cbi5zbWFydC1waWNrZXJfX2NhbmNlbCB7XG4gIGNvbG9yOiB2YXIoLS1waWNrZXItY2FuY2VsLWFjdGlvbi1jb2xvciwgIzk2OTc5OSk7XG59XG5cbi5zbWFydC1waWNrZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1waWNrZXItb3B0aW9uLWZvbnQtc2l6ZSwgMTZweCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkZXIsIDcwMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5zbWFydC1waWNrZXJfX2NvbHVtbnMge1xuICBwYWRkaW5nOiAwIHZhcigtLXBpY2tlci1wYWRkaW5nLCAxNnB4KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwKSwgIzAwMCA1MCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwKSwgIzAwMCA1MCUsIHJnYmEoMCwgMCwgMCwgMCkpO1xuICAtd2Via2l0LW1hc2stcG9zaXRpb246IHRvcCwgYm90dG9tO1xuICBtYXNrLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc21hcnQtcGlja2VyX19jb2x1bW4ge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMDtcbn1cblxuLnNtYXJ0LXBpY2tlcl9fbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpY2tlci1sb2FkaW5nLW1hc2stY29sb3IsIHZhcigtLWFwcC1CNCwgI2ZmZikpO1xuICBvcGFjaXR5OiAuOTtcbiAgei1pbmRleDogNDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc21hcnQtcGlja2VyX19mcmFtZSB7XG4gIGxlZnQ6IHZhcigtLXBpY2tlci1wYWRkaW5nLCAxNnB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHJpZ2h0OiB2YXIoLS1waWNrZXItcGFkZGluZywgMTZweCk7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWU2IyOTBJanB1ZFd4c0xDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN08wRkJRVGhDT3pzN096czdPenM3UVVGQk1rdzdPenM3T3pzN1FVRkJlVW83T3pzN08wRkJRWFZKT3pzN08wRkJRWE5GT3pzN08wRkJRWGRGT3pzN08wRkJRWE5GT3pzN096czdPMEZCUVRaSk96czdPenM3T3pzN096czdPenRCUVVFMFdEczdPenM3UVVGQmRVTTdPenM3T3pzN096czdPenM3TzBGQlFYZE9JaXdpYzI5MWNtTmxjeUk2V3lKVmMyVnljeTluZFc1emJXOXJaWEl2Ukc5amRXMWxiblJ6TDJkcGRDOURiMjlzYVc1blRXbHpkRTFoZEZCaGJtVnNMMjV2WkdWZmJXOWtkV3hsY3k5QWRIVjVZUzF0YVc1cFlYQndMM050WVhKMExYVnBMMnhwWWk5d2FXTnJaWEl2YVc1a1pYZ3VZM056SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklrQnBiWEJ2Y25RZ0p5NHVMMk52YlcxdmJpOXBibVJsZUM1amMzTW5PeTV6YldGeWRDMXdhV05yWlhKN0xYZGxZbXRwZEMxMFpYaDBMWE5wZW1VdFlXUnFkWE4wT2pFd01DVTdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqcDJZWElvTFMxd2FXTnJaWEl0WW1GamEyZHliM1Z1WkMxamIyeHZjaXgyWVhJb0xTMWhjSEF0UWpRc0kyWm1aaWtwTzI5MlpYSm1iRzkzT21ocFpHUmxianR3YjNOcGRHbHZianB5Wld4aGRHbDJaVHN0ZDJWaWEybDBMWFZ6WlhJdGMyVnNaV04wT201dmJtVTdkWE5sY2kxelpXeGxZM1E2Ym05dVpYMHVjMjFoY25RdGNHbGphMlZ5WDE5MGIyOXNZbUZ5ZTJScGMzQnNZWGs2Wm14bGVEdG9aV2xuYUhRNmRtRnlLQzB0Y0dsamEyVnlMWFJ2YjJ4aVlYSXRhR1ZwWjJoMExEUTBjSGdwTzJwMWMzUnBabmt0WTI5dWRHVnVkRHB6Y0dGalpTMWlaWFIzWldWdU8yeHBibVV0YUdWcFoyaDBPblpoY2lndExYQnBZMnRsY2kxMGIyOXNZbUZ5TFdobGFXZG9kQ3cwTkhCNEtYMHVjMjFoY25RdGNHbGphMlZ5WDE5allXNWpaV3dzTG5OdFlYSjBMWEJwWTJ0bGNsOWZZMjl1Wm1seWJYdG1iMjUwTFhOcGVtVTZkbUZ5S0MwdGNHbGphMlZ5TFdGamRHbHZiaTFtYjI1MExYTnBlbVVzTVRSd2VDazdjR0ZrWkdsdVp6cDJZWElvTFMxd2FXTnJaWEl0WVdOMGFXOXVMWEJoWkdScGJtY3NNQ0F4Tm5CNEtYMHVjMjFoY25RdGNHbGphMlZ5WDE5allXNWpaV3d0TFdodmRtVnlMQzV6YldGeWRDMXdhV05yWlhKZlgyTnZibVpwY20wdExXaHZkbVZ5ZTI5d1lXTnBkSGs2TGpkOUxuTnRZWEowTFhCcFkydGxjbDlmWTI5dVptbHliWHRqYjJ4dmNqcDJZWElvTFMxd2FXTnJaWEl0WTI5dVptbHliUzFoWTNScGIyNHRZMjlzYjNJc0l6VTNObUk1TlNsOUxuTnRZWEowTFhCcFkydGxjbDlmWTJGdVkyVnNlMk52Ykc5eU9uWmhjaWd0TFhCcFkydGxjaTFqWVc1alpXd3RZV04wYVc5dUxXTnZiRzl5TENNNU5qazNPVGtwZlM1emJXRnlkQzF3YVdOclpYSmZYM1JwZEd4bGUyWnZiblF0YzJsNlpUcDJZWElvTFMxd2FXTnJaWEl0YjNCMGFXOXVMV1p2Ym5RdGMybDZaU3d4Tm5CNEtUdG1iMjUwTFhkbGFXZG9kRHAyWVhJb0xTMW1iMjUwTFhkbGFXZG9kQzFpYjJ4a1pYSXNOekF3S1R0dFlYZ3RkMmxrZEdnNk5UQWxPM1JsZUhRdFlXeHBaMjQ2WTJWdWRHVnlmUzV6YldGeWRDMXdhV05yWlhKZlgyTnZiSFZ0Ym5ON1pHbHpjR3hoZVRwbWJHVjRPMnAxYzNScFpua3RZMjl1ZEdWdWREcGpaVzUwWlhJN0xYZGxZbXRwZEMxdFlYTnJMV2x0WVdkbE9teHBibVZoY2kxbmNtRmthV1Z1ZENnd1pHVm5MSFJ5WVc1emNHRnlaVzUwTENNd01EQWdOVEFsTEhSeVlXNXpjR0Z5Wlc1MEtUdHRZWE5yTFdsdFlXZGxPbXhwYm1WaGNpMW5jbUZrYVdWdWRDZ3daR1ZuTEhSeVlXNXpjR0Z5Wlc1MExDTXdNREFnTlRBbExIUnlZVzV6Y0dGeVpXNTBLVHN0ZDJWaWEybDBMVzFoYzJzdGNHOXphWFJwYjI0NmRHOXdMR0p2ZEhSdmJUdHRZWE5yTFhCdmMybDBhVzl1T25SdmNDeGliM1IwYjIwN0xYZGxZbXRwZEMxdFlYTnJMWEpsY0dWaGREcHVieTF5WlhCbFlYUTdiV0Z6YXkxeVpYQmxZWFE2Ym04dGNtVndaV0YwTzI5MlpYSm1iRzkzT21ocFpHUmxianR3WVdSa2FXNW5PakFnZG1GeUtDMHRjR2xqYTJWeUxYQmhaR1JwYm1jc01UWndlQ2s3Y0c5emFYUnBiMjQ2Y21Wc1lYUnBkbVY5TG5OdFlYSjBMWEJwWTJ0bGNsOWZZMjlzZFcxdWUyWnNaWGc2TVNBeE8zZHBaSFJvT2pCOUxuTnRZWEowTFhCcFkydGxjbDlmYkc5aFpHbHVaM3RoYkdsbmJpMXBkR1Z0Y3pwalpXNTBaWEk3WW1GamEyZHliM1Z1WkMxamIyeHZjanAyWVhJb0xTMXdhV05yWlhJdGJHOWhaR2x1WnkxdFlYTnJMV052Ykc5eUxIWmhjaWd0TFdGd2NDMUNOQ3dqWm1abUtTazdZbTkwZEc5dE9qQTdaR2x6Y0d4aGVUcG1iR1Y0TzJwMWMzUnBabmt0WTI5dWRHVnVkRHBqWlc1MFpYSTdiR1ZtZERvd08yOXdZV05wZEhrNkxqazdjRzl6YVhScGIyNDZZV0p6YjJ4MWRHVTdjbWxuYUhRNk1EdDBiM0E2TUR0NkxXbHVaR1Y0T2pSOUxuTnRZWEowTFhCcFkydGxjbDlmWm5KaGJXVjdiR1ZtZERwMllYSW9MUzF3YVdOclpYSXRjR0ZrWkdsdVp5d3hObkI0S1R0d2IybHVkR1Z5TFdWMlpXNTBjenB1YjI1bE8zQnZjMmwwYVc5dU9tRmljMjlzZFhSbE8zSnBaMmgwT25aaGNpZ3RMWEJwWTJ0bGNpMXdZV1JrYVc1bkxERTJjSGdwTzNSdmNEbzFNQ1U3ZEhKaGJuTm1iM0p0T25SeVlXNXpiR0YwWlZrb0xUVXdKU2s3ZWkxcGJtUmxlRG94ZlNKZExDSnVZVzFsY3lJNlcxMTkgKi8iLCAicmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcbjtcbjtcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiXG5pbXBvcnQgb3ZlcnJpZGVDb21wb25lbnQgZnJvbSAnL1VzZXJzL2d1bnNtb2tlci9Eb2N1bWVudHMvZ2l0L0Nvb2xpbmdNaXN0TWF0UGFuZWwvc3JjL292ZXJsb2FkTmF0aXZlQ29tcG9uZW50Q29uc3RydWN0b3IudmlydHVhbC5qcyc7XG5jb25zdCBDb21wb25lbnQgPSBvdmVycmlkZUNvbXBvbmVudCgncGlja2VyLWluZGV4LTY4NTYzOScpO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHNoYXJlZF8xID0gcmVxdWlyZShcIi4vc2hhcmVkXCIpO1xuKDAsIGNvbXBvbmVudF8xLlNtYXJ0Q29tcG9uZW50KSh7XG4gICAgY2xhc3NlczogWydhY3RpdmUtY2xhc3MnLCAndG9vbGJhci1jbGFzcycsICdjb2x1bW4tY2xhc3MnXSxcbiAgICBwcm9wczogX19hc3NpZ24oX19hc3NpZ24oe30sIHNoYXJlZF8xLnBpY2tlclByb3BzKSwgeyBhY3RpdmVTdHlsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB9LCB2YWx1ZUtleToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0JyxcbiAgICAgICAgfSwgdG9vbGJhclBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RvcCcsXG4gICAgICAgIH0sIGRlZmF1bHRJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIH0sIGFjdGl2ZUluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIH0sIHVuaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgfSwgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKGNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSBbXTsgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2ltcGxlID0gY29sdW1ucy5sZW5ndGggJiYgIWNvbHVtbnNbMF0udmFsdWVzO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRyZW4pICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1ucygpLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSB9KSxcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjaGlsZHJlbicsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2VsZWN0QWxsQ29tcG9uZW50cygnLnNtYXJ0LXBpY2tlcl9fY29sdW1uJykgfHwgW107IH0sXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHNldENvbHVtbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5zaW1wbGUgPyBbeyB2YWx1ZXM6IGRhdGEuY29sdW1ucyB9XSA6IGRhdGEuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBzdGFjayA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldENvbHVtblZhbHVlcyhpbmRleCwgY29sdW1uLnZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb2x1bW5WYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWVzKCksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmdldEluZGV4ZXMoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldENvbHVtblZhbHVlKDApLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5nZXRDb2x1bW5JbmRleCgwKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IGNvbHVtbiBpbnN0YW5jZSBieSBpbmRleFxuICAgICAgICBnZXRDb2x1bW46IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgY29sdW1uIHZhbHVlIGJ5IGluZGV4XG4gICAgICAgIGdldENvbHVtblZhbHVlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uICYmIGNvbHVtbi5nZXRWYWx1ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgY29sdW1uIHZhbHVlIGJ5IGluZGV4XG4gICAgICAgIHNldENvbHVtblZhbHVlOiBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignc2V0Q29sdW1uVmFsdWU6IFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBkb2VzIG5vdCBleGlzdCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uSW5kZXg6IGZ1bmN0aW9uIChjb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCkgfHwge30pLmRhdGEuY3VycmVudEluZGV4O1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uSW5kZXg6IGZ1bmN0aW9uIChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5JbmRleDogVGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uIGRvZXMgbm90IGV4aXN0JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zZXRJbmRleChvcHRpb25JbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBvcHRpb25zIG9mIGNvbHVtbiBieSBpbmRleFxuICAgICAgICBnZXRDb2x1bW5WYWx1ZXM6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNoaWxkcmVuW2luZGV4XSB8fCB7fSkuZGF0YS5vcHRpb25zO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgb3B0aW9ucyBvZiBjb2x1bW4gYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWVzOiBmdW5jdGlvbiAoaW5kZXgsIG9wdGlvbnMsIG5lZWRSZXNldCkge1xuICAgICAgICAgICAgaWYgKG5lZWRSZXNldCA9PT0gdm9pZCAwKSB7IG5lZWRSZXNldCA9IHRydWU7IH1cbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3NldENvbHVtblZhbHVlczogVGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uIGRvZXMgbm90IGV4aXN0JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlzU2FtZSA9IEpTT04uc3RyaW5naWZ5KGNvbHVtbi5kYXRhLm9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldCh7IG9wdGlvbnM6IG9wdGlvbnMgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc2V0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCB2YWx1ZXMgb2YgYWxsIGNvbHVtbnNcbiAgICAgICAgZ2V0VmFsdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5nZXRWYWx1ZSgpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2V0IHZhbHVlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBzZXRWYWx1ZXM6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIF90aGlzLnNldENvbHVtblZhbHVlKGluZGV4LCB2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IGluZGV4ZXMgb2YgYWxsIGNvbHVtbnNcbiAgICAgICAgZ2V0SW5kZXhlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQuZGF0YS5jdXJyZW50SW5kZXg7IH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBzZXRJbmRleGVzOiBmdW5jdGlvbiAoaW5kZXhlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzdGFjayA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uIChvcHRpb25JbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0Q29sdW1uSW5kZXgoY29sdW1uSW5kZXgsIG9wdGlvbkluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxrQkFBQTtBQUFBO0FBQUE7QUFHQSxXQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0hsQjtBQUFBO0FBQ0E7QUFFQSx1QkFBTztBQURQLFFBQU0sWUFBWSxrQkFBa0IscUJBQXFCO0FBR3pELFFBQUksV0FBWSxXQUFRLFFBQUssWUFBYSxXQUFZO0FBQ2xELGlCQUFXLE9BQU8sVUFBVSxTQUFTLEdBQUc7QUFDcEMsaUJBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDakQsY0FBSSxVQUFVLENBQUM7QUFDZixtQkFBUyxLQUFLO0FBQUcsZ0JBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxHQUFHLENBQUM7QUFDMUQsZ0JBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUFBLFFBQ2xCO0FBQ0EsZUFBTztBQUFBLE1BQ1g7QUFDQSxhQUFPLFNBQVMsTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUN6QztBQUNBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxRQUFJLGNBQWM7QUFDbEIsUUFBSSxXQUFXO0FBQ2YsS0FBQyxHQUFHLFlBQVksZ0JBQWdCO0FBQUEsTUFDNUIsU0FBUyxDQUFDLGdCQUFnQixpQkFBaUIsY0FBYztBQUFBLE1BQ3pELE9BQU8sU0FBUyxTQUFTLENBQUMsR0FB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
