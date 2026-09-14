import type { ErrorCode } from "@/utils/bottleMaker";

export type DeviceAssemblyKey =
  | "mixing_chamber"
  | "water_tank"
  | "water_level"
  | "milk_powder"
  | "bottle"
  | "no_blockage";

export type BrewingActionMode = "milk" | "water" | "powder";

export interface DeviceAssemblyStatus {
  key: DeviceAssemblyKey;
  ok: boolean;
}

export interface DeviceSensorInput {
  funnelOk: boolean;
  watertankOk: boolean;
  milkboxOk: boolean;
  bottleOk: boolean;
  errorCode: ErrorCode;
}

const sortFailFirst = (list: DeviceAssemblyStatus[]): DeviceAssemblyStatus[] =>
  [...list].sort((a, b) => Number(a.ok) - Number(b.ok));

/**
 * milk：漏斗 / 水箱(安装+水位) / 奶粉盒 / 奶瓶 / error_code
 * water：漏斗 / 奶瓶 / 水箱(安装+水位) / error_code（不含奶粉盒）
 * powder：奶粉盒 / 漏斗 / error_code（不含水箱、奶瓶）
 */
export const getAssemblyStatusesForMode = (
  mode: BrewingActionMode,
  input: DeviceSensorInput
): DeviceAssemblyStatus[] => {
  const noBlockage: DeviceAssemblyStatus = {
    key: "no_blockage",
    ok: input.errorCode === "none",
  };

  if (mode === "water") {
    return sortFailFirst([
      { key: "mixing_chamber", ok: input.funnelOk },
      { key: "bottle", ok: input.bottleOk },
      { key: "water_tank", ok: input.watertankOk },
      { key: "water_level", ok: input.watertankOk },
      noBlockage,
    ]);
  }

  if (mode === "powder") {
    return sortFailFirst([
      { key: "milk_powder", ok: input.milkboxOk },
      { key: "mixing_chamber", ok: input.funnelOk },
      noBlockage,
    ]);
  }

  return sortFailFirst([
    { key: "mixing_chamber", ok: input.funnelOk },
    { key: "water_tank", ok: input.watertankOk },
    { key: "water_level", ok: input.watertankOk },
    { key: "milk_powder", ok: input.milkboxOk },
    { key: "bottle", ok: input.bottleOk },
    noBlockage,
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
