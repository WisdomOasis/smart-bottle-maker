import { devices } from "@/devices";

export type DpSetter = (code: string, val: unknown) => Promise<boolean>;

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

/** 透過 useActions.set 下發 DP（與 SmartDeviceModel.publishDps 一致） */
export const createDpSetter = (
  actions: Record<string, { set?: (v: unknown) => unknown }> | undefined
): DpSetter => {
  return async (code: string, val: unknown) => {
    const setFn = actions?.[code]?.set;
    if (typeof setFn === "function") {
      try {
        const result = await Promise.resolve(setFn(val));
        return result !== false;
      } catch {
        return false;
      }
    }
    if (devices.common?.initialized) {
      try {
        const result = await devices.common.publishDps({ [code]: val });
        return result !== false;
      } catch {
        return false;
      }
    }
    return false;
  };
};

/** bool 型 DP 維持指定值（如 child_lock、working_status） */
export const setBoolDp = async (
  setDp: DpSetter,
  code: string,
  value: boolean
): Promise<boolean> => setDp(code, value);

/** bool 型脈衝 DP：true → 約 400ms 後 false */
export const pulseBoolDp = async (
  setDp: DpSetter,
  code: string
): Promise<boolean> => {
  const ok = await setDp(code, true);
  if (!ok) return false;
  await delay(400);
  await setDp(code, false);
  return true;
};

/** 一次下發多個 DP（優先 batch publishDps） */
export const publishDpBatch = async (
  setDp: DpSetter,
  payload: Record<string, unknown>
): Promise<boolean> => {
  if (devices.common?.initialized) {
    try {
      const result = await devices.common.publishDps(payload);
      if (result !== false) return true;
    } catch {
      /* fall through */
    }
  }
  const entries = Object.entries(payload);
  let allOk = entries.length > 0;
  await entries.reduce<Promise<void>>(async (chain, [code, val]) => {
    await chain;
    if (!allOk) return;
    allOk = await setDp(code, val);
  }, Promise.resolve());
  return allOk;
};
