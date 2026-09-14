const KEY_PREFIX = "smart-bottle-maker:connected-features-seen:";

type StorageRuntime = typeof globalThis & {
  ty?: {
    getStorageSync?: (input: { key: string }) => unknown;
    setStorageSync?: (input: { key: string; data: unknown }) => void;
  };
};

const storageKey = (homeId: string, deviceId: string) =>
  `${KEY_PREFIX}${encodeURIComponent(homeId)}:${encodeURIComponent(deviceId)}`;

export const hasSeenConnectedFeaturesSetup = (
  homeId: string,
  deviceId: string
): boolean => {
  if (!homeId || !deviceId) return false;
  try {
    const value = (globalThis as StorageRuntime).ty?.getStorageSync?.({
      key: storageKey(homeId, deviceId),
    }) as { data?: unknown } | boolean | undefined;
    return (
      (typeof value === "object" && value !== null ? value.data : value) ===
      true
    );
  } catch {
    return false;
  }
};

export const markConnectedFeaturesSetupSeen = (
  homeId: string,
  deviceId: string
): void => {
  if (!homeId || !deviceId) return;
  try {
    (globalThis as StorageRuntime).ty?.setStorageSync?.({
      key: storageKey(homeId, deviceId),
      data: true,
    });
  } catch {
    // The setup remains available from the home page if storage is unavailable.
  }
};

export const shouldAutoOpenConnectedFeaturesSetup = (input: {
  isOnline: boolean;
  homeId: string;
  deviceId: string;
  hasSeen: boolean;
}): boolean =>
  input.isOnline &&
  Boolean(input.homeId) &&
  Boolean(input.deviceId) &&
  !input.hasSeen;
