export const defaultSchema = [
  {
    attr: 1664,
    canTrigger: true,
    code: "speed",
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: "{\"cloudless\":1,\"frequency\":3000}",
    iconname: "icon-dp_wind",
    id: 2,
    mode: "ro",
    name: "速度",
    property: {
      unit: "km/h",
      min: 0,
      max: 2000,
      scale: 1,
      step: 1,
      type: "value"
    },
    type: "obj"
  },
  {
    attr: 1664,
    canTrigger: true,
    code: "mileage_once",
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: "",
    iconname: "icon-tongji2",
    id: 5,
    mode: "ro",
    name: "单次里程",
    property: {
      unit: "KM",
      min: 0,
      max: 2000,
      scale: 1,
      step: 1,
      type: "value"
    },
    type: "obj"
  },
  {
    attr: 1152,
    canTrigger: true,
    code: "temp_current",
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: "",
    iconname: "icon-dp_c",
    id: 18,
    mode: "ro",
    name: "当前温度",
    property: {
      unit: "℃",
      min: -200,
      max: 600,
      scale: 1,
      step: 1,
      type: "value"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "master_fan_speed",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    iconname: "icon-a_mode_fan",
    id: 101,
    mode: "rw",
    name: "主风扇",
    property: {
      unit: "",
      min: 0,
      max: 3,
      scale: 0,
      step: 1,
      type: "value"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "cooling",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    iconname: "icon-a_fan_med",
    id: 103,
    mode: "rw",
    name: "制冷",
    property: {
      type: "bool"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "auto_mode",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "{\"frequency\":180}",
    iconname: "icon-a_fan_auto",
    id: 104,
    mode: "rw",
    name: "自动模式",
    property: {
      type: "bool"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "timmer",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 105,
    mode: "rw",
    name: "倒计时",
    property: {
      unit: "min",
      min: 0,
      max: 120,
      scale: 0,
      step: 1,
      type: "value"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "cooling_fan_speed",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 106,
    mode: "rw",
    name: "侧风扇",
    property: {
      unit: "",
      min: 0,
      max: 3,
      scale: 0,
      step: 1,
      type: "value"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "indicator_light",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 107,
    mode: "rw",
    name: "指示灯",
    property: {
      type: "bool"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "no_water_left",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 108,
    mode: "rw",
    name: "左侧缺水",
    property: {
      type: "bool"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "control_wire_enable",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 109,
    mode: "ro",
    name: "控制线是否插入",
    property: {
      type: "bool"
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "cooling_logic",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 110,
    mode: "rw",
    name: "喷雾逻辑",
    property: {
      type: "raw",
      maxlen: 128
    },
    type: "raw"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "no_water_right",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 111,
    mode: "rw",
    name: "右侧缺水",
    property: {
      type: "bool"
    },
    type: "obj"
  }
] as const;