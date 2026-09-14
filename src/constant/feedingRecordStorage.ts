const KEY_PREFIX = "smart-bottle-maker:feeding-profile:";

export type FeedingProfileSelection = {
  childId: number;
  childName: string;
  homeId: string;
  imageUrl?: string;
};

const runtime = () =>
  globalThis as typeof globalThis & {
    ty?: {
      getStorageSync?: (o: { key: string }) => unknown;
      setStorageSync?: (o: { key: string; data: unknown }) => void;
    };
  };

export const getFeedingProfileSelection = (
  deviceId: string
): FeedingProfileSelection | null => {
  try {
    const value = runtime().ty?.getStorageSync?.({
      key: KEY_PREFIX + deviceId,
    }) as { data?: unknown } | undefined;
    const data = value?.data ?? value;
    if (!data || typeof data !== "object") return null;
    const selected = data as FeedingProfileSelection;
    if (
      !Number.isInteger(selected.childId) ||
      typeof selected.childName !== "string" ||
      typeof selected.homeId !== "string"
    ) {
      return null;
    }
    return {
      childId: selected.childId,
      childName: selected.childName,
      homeId: selected.homeId,
      imageUrl:
        typeof selected.imageUrl === "string" && selected.imageUrl.trim()
          ? selected.imageUrl.trim()
          : undefined,
    };
  } catch {
    return null;
  }
};

export const saveFeedingProfileSelection = (
  deviceId: string,
  value: FeedingProfileSelection
) => {
  runtime().ty?.setStorageSync?.({ key: KEY_PREFIX + deviceId, data: value });
};
