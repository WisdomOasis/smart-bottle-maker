const SMART_PREP_DONE_PREFIX = "smart-bottle-maker:smart-prep-setup-done:";

type StorageRuntime = typeof globalThis & {
  ty?: {
    getStorageSync?: (input: { key: string }) => unknown;
    setStorageSync?: (input: { key: string; data: unknown }) => void;
  };
};

const smartPrepDoneKey = (homeId: string, deviceId: string) =>
  `${SMART_PREP_DONE_PREFIX}${encodeURIComponent(homeId)}:${encodeURIComponent(
    deviceId
  )}`;

const readBool = (key: string): boolean => {
  try {
    const value = (globalThis as StorageRuntime).ty?.getStorageSync?.({
      key,
    }) as { data?: unknown } | boolean | undefined;
    return (
      (typeof value === "object" && value !== null ? value.data : value) ===
      true
    );
  } catch {
    return false;
  }
};

const writeBool = (key: string, data: boolean): void => {
  try {
    (globalThis as StorageRuntime).ty?.setStorageSync?.({ key, data });
  } catch {
    // Ignore storage failures; UI falls back to available entry points.
  }
};

/** CryAssist／Smart Prep 連動是否已完成（完成後底部 toast 不再出現） */
export const hasCompletedSmartPrepSetup = (
  homeId: string,
  deviceId: string
): boolean => {
  if (!homeId || !deviceId) return false;
  return readBool(smartPrepDoneKey(homeId, deviceId));
};

export const markSmartPrepSetupComplete = (
  homeId: string,
  deviceId: string
): void => {
  if (!homeId || !deviceId) return;
  writeBool(smartPrepDoneKey(homeId, deviceId), true);
};

export const shouldShowSmartPrepSetupSnackbar = (input: {
  cloudFeaturesAvailable: boolean;
  isOnline: boolean;
  homeId: string;
  deviceId: string;
  completed: boolean;
}): boolean =>
  input.cloudFeaturesAvailable &&
  input.isOnline &&
  Boolean(input.homeId) &&
  Boolean(input.deviceId) &&
  !input.completed;
