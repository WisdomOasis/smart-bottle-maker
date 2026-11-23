/**
 * 升版 key → 發佈後視為「未看過」，First-Time Guide 會再出現一次。
 * （正式本機 flag，不是 mock mode）
 */
export const FIRST_TIME_GUIDE_SEEN_KEY =
  "smart-bottle-maker:first-time-guide-seen-v11";

type TyStorage = {
  getStorageSync?: (o: { key: string }) => unknown;
  setStorageSync?: (o: { key: string; data: boolean }) => void;
  removeStorageSync?: (o: { key: string }) => void;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

const readStoredFlag = (key: string): boolean => {
  try {
    const res = getTy()?.getStorageSync?.({ key });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    return data === true || data === "true" || data === 1;
  } catch {
    return false;
  }
};

export const hasSeenFirstTimeGuide = (): boolean =>
  readStoredFlag(FIRST_TIME_GUIDE_SEEN_KEY);

export const markFirstTimeGuideSeen = (): void => {
  try {
    getTy()?.setStorageSync?.({ key: FIRST_TIME_GUIDE_SEEN_KEY, data: true });
  } catch {
    /* ignore */
  }
};

/** QA：清掉已讀旗標，下次進首頁會再出 First-Time Guide */
export const clearFirstTimeGuideSeen = (): void => {
  try {
    getTy()?.removeStorageSync?.({ key: FIRST_TIME_GUIDE_SEEN_KEY });
  } catch {
    try {
      getTy()?.setStorageSync?.({
        key: FIRST_TIME_GUIDE_SEEN_KEY,
        data: false,
      });
    } catch {
      /* ignore */
    }
  }
};
