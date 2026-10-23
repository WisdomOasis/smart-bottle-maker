export const FIRST_TIME_GUIDE_SEEN_KEY =
  "smart-bottle-maker:first-time-guide-seen-v10";

const readStoredFlag = (key: string): boolean => {
  try {
    const { ty } = globalThis as {
      ty?: { getStorageSync?: (o: { key: string }) => unknown };
    };
    const res = ty?.getStorageSync?.({ key });
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
    const { ty } = globalThis as {
      ty?: { setStorageSync?: (o: { key: string; data: boolean }) => void };
    };
    ty?.setStorageSync?.({ key: FIRST_TIME_GUIDE_SEEN_KEY, data: true });
  } catch {
    /* ignore */
  }
};
