const SMART_PREP_GUIDE_COMPLETED_KEY =
  "smart_bottle_smart_prep_guide_completed";
const SMART_PREP_ENABLED_KEY = "smart_bottle_smart_prep_enabled";
/** 用戶已表示要設定，但尚未標記 Routine 完成 */
const SMART_PREP_SETUP_INTENT_KEY = "smart_bottle_smart_prep_setup_intent";
/** 用戶已確認完成 Routines 設定（只需一次） */
const SMART_PREP_ROUTINE_DONE_KEY = "smart_bottle_smart_prep_routine_done";
/** 底部 snackbar 已顯示次數（最多 3 次） */
const SMART_PREP_SNACKBAR_COUNT_KEY = "smart_bottle_smart_prep_snackbar_count";
/**
 * 曾因「無 CryAssist」結束引導；之後進 Panel 會再搜尋，
 * 找到設備則重新走首次 Activate 引導。
 */
const SMART_PREP_AWAITING_CRY_KEY = "smart_bottle_smart_prep_awaiting_cry";

export const SMART_PREP_SNACKBAR_MAX_SHOWS = 3;

type TyStorage = {
  getStorageSync?: (o: { key: string }) => unknown;
  setStorageSync?: (o: { key: string; data: unknown }) => void;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

const readRaw = (key: string): unknown => {
  try {
    const res = getTy()?.getStorageSync?.({ key });
    if (res && typeof res === "object" && "data" in res) {
      return (res as { data: unknown }).data;
    }
    return res;
  } catch {
    return undefined;
  }
};

const writeRaw = (key: string, value: unknown): void => {
  try {
    getTy()?.setStorageSync?.({ key, data: value });
  } catch {
    /* ignore */
  }
};

const readBool = (key: string): boolean => {
  const data = readRaw(key);
  return data === true || data === "true" || data === 1;
};

const writeBool = (key: string, value: boolean): void => {
  writeRaw(key, value);
};

export const readSmartPrepGuideCompleted = (): boolean =>
  readBool(SMART_PREP_GUIDE_COMPLETED_KEY);

export const writeSmartPrepGuideCompleted = (): void => {
  writeBool(SMART_PREP_GUIDE_COMPLETED_KEY, true);
};

export const clearSmartPrepGuideCompleted = (): void => {
  writeBool(SMART_PREP_GUIDE_COMPLETED_KEY, false);
};

export const readSmartPrepEnabled = (): boolean =>
  readBool(SMART_PREP_ENABLED_KEY);

export const writeSmartPrepEnabled = (enabled: boolean): void => {
  writeBool(SMART_PREP_ENABLED_KEY, enabled);
};

export const readSmartPrepSetupIntent = (): boolean =>
  readBool(SMART_PREP_SETUP_INTENT_KEY);

export const writeSmartPrepSetupIntent = (): void => {
  writeBool(SMART_PREP_SETUP_INTENT_KEY, true);
};

export const readSmartPrepRoutineDone = (): boolean =>
  readBool(SMART_PREP_ROUTINE_DONE_KEY);

export const writeSmartPrepRoutineDone = (): void => {
  writeBool(SMART_PREP_ROUTINE_DONE_KEY, true);
  writeBool(SMART_PREP_ENABLED_KEY, true);
  writeBool(SMART_PREP_GUIDE_COMPLETED_KEY, true);
  writeBool(SMART_PREP_AWAITING_CRY_KEY, false);
};

export const readSmartPrepAwaitingCryDevice = (): boolean =>
  readBool(SMART_PREP_AWAITING_CRY_KEY);

export const writeSmartPrepAwaitingCryDevice = (awaiting: boolean): void => {
  writeBool(SMART_PREP_AWAITING_CRY_KEY, awaiting);
};

export const readSmartPrepSnackbarShowCount = (): number => {
  const data = readRaw(SMART_PREP_SNACKBAR_COUNT_KEY);
  const num = Number(data);
  return Number.isFinite(num) && num > 0 ? Math.floor(num) : 0;
};

/** 若尚未達上限則 +1 並回傳 true；已達上限回傳 false */
export const tryConsumeSmartPrepSnackbarShow = (): boolean => {
  const count = readSmartPrepSnackbarShowCount();
  if (count >= SMART_PREP_SNACKBAR_MAX_SHOWS) return false;
  writeRaw(SMART_PREP_SNACKBAR_COUNT_KEY, count + 1);
  return true;
};

export const canShowSmartPrepSnackbar = (): boolean =>
  readSmartPrepSnackbarShowCount() < SMART_PREP_SNACKBAR_MAX_SHOWS;

/** 清除所有 Smart Prep 本地旗標（方便重測首次引導） */
export const clearAllSmartPrepStorage = (): void => {
  writeBool(SMART_PREP_GUIDE_COMPLETED_KEY, false);
  writeBool(SMART_PREP_ENABLED_KEY, false);
  writeBool(SMART_PREP_SETUP_INTENT_KEY, false);
  writeBool(SMART_PREP_ROUTINE_DONE_KEY, false);
  writeBool(SMART_PREP_AWAITING_CRY_KEY, false);
  writeRaw(SMART_PREP_SNACKBAR_COUNT_KEY, 0);
};
