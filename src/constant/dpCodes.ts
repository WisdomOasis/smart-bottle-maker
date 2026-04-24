export default {
  // Smart fan DP set
  tempCurrent: "temp_current", // 当前温度 (0-1000, ℃)
  humidityValue: "humidity_value", // 当前湿度 (0-1000, %)
  fan: "fan", // 风扇 (0-5)
  mist: "mist", // 水雾 (0 关 / 2 双喷)
  cooling: "cooling", // 制冷模式 (0-2)
  light: "light", // 灯光 RGB (0-16777215)
  pir: "pir", // 红外感应
  o3: "o3", // 臭氧 (0 关 / 1 开)
  o3Status: "o3_status", // 臭氧状态 (enum 0-5)
  o3Time: "o3_time", // 臭氧剩余时间（分钟）
  power: "power_switch", // 总电源
  pet: "pet", // 宠物类型 (enum 0/1/2, legacy 3 also maps to other)
  autoMode: "auto_mode", // 自动模式
};
