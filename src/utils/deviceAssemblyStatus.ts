export type DeviceAssemblyKey =
  | "mixing_chamber"
  /** 仅出粉：混合舱须拆除 */
  | "mixing_chamber_removed"
  /** 水箱已安装且水量充足（同一 DP watertank_sensor） */
  | "water_tank"
  | "milk_powder"
  | "bottle";

export type BrewingActionMode = "milk" | "water" | "powder" | "clean";

export interface DeviceAssemblyStatus {
  key: DeviceAssemblyKey;
  ok: boolean;
}

export interface DeviceSensorInput {
  funnelOk: boolean;
  watertankOk: boolean;
  milkboxOk: boolean;
  bottleOk: boolean;
}

const sortFailFirst = (list: DeviceAssemblyStatus[]): DeviceAssemblyStatus[] =>
  [...list].sort((a, b) => Number(a.ok) - Number(b.ok));

/**
 * milk：混合舱须安装 / 水箱(安装+水位) / 奶粉盒 / 奶瓶
 * water：混合舱须安装 / 奶瓶 / 水箱(安装+水位)（不含奶粉盒）
 * powder：奶粉盒 / 混合舱须拆除（不含水箱、奶瓶）
 * clean：混合舱须安装 / 奶瓶 / 水箱(安装+水位)
 */
export const getAssemblyStatusesForMode = (
  mode: BrewingActionMode,
  input: DeviceSensorInput
): DeviceAssemblyStatus[] => {
  if (mode === "water" || mode === "clean") {
    return sortFailFirst([
      { key: "mixing_chamber", ok: input.funnelOk },
      { key: "bottle", ok: input.bottleOk },
      { key: "water_tank", ok: input.watertankOk },
    ]);
  }

  if (mode === "powder") {
    return sortFailFirst([
      { key: "milk_powder", ok: input.milkboxOk },
      { key: "mixing_chamber_removed", ok: !input.funnelOk },
    ]);
  }

  return sortFailFirst([
    { key: "mixing_chamber", ok: input.funnelOk },
    { key: "water_tank", ok: input.watertankOk },
    { key: "milk_powder", ok: input.milkboxOk },
    { key: "bottle", ok: input.bottleOk },
  ]);
};

/** @deprecated 使用 getAssemblyStatusesForMode('milk', …) */
export const getMilkBrewingAssemblyStatuses = (
  input: DeviceSensorInput
): DeviceAssemblyStatus[] => getAssemblyStatusesForMode("milk", input);

export const hasAssemblyBlocker = (statuses: DeviceAssemblyStatus[]): boolean =>
  statuses.some((item) => !item.ok);

/** @deprecated 使用 hasAssemblyBlocker */
export const hasMilkBrewingBlocker = hasAssemblyBlocker;
