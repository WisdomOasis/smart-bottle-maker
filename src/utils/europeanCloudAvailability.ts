export type EuropeanCloudAvailability =
  | "loading"
  | "eu"
  | "unsupported"
  | "unavailable";

type AccountUserInfo = {
  regionCode?: unknown;
};

export type GetAccountUserInfo = (params: {
  success?: (user: AccountUserInfo) => void;
  fail?: (error: unknown) => void;
  failure?: (error: unknown) => void;
}) => unknown;

type AccountRuntime = typeof globalThis & {
  ty?: {
    getUserInfo?: GetAccountUserInfo;
  };
};

export const getAccountUserInfo = (): GetAccountUserInfo | undefined => {
  const runtime = (globalThis as AccountRuntime).ty;
  return typeof runtime?.getUserInfo === "function"
    ? runtime.getUserInfo.bind(runtime)
    : undefined;
};

export const resolveEuropeanCloudAvailability = (
  getUserInfo: GetAccountUserInfo | undefined = getAccountUserInfo(),
  timeoutMs = 5000
): Promise<Exclude<EuropeanCloudAvailability, "loading">> =>
  new Promise((resolve) => {
    if (!getUserInfo) {
      resolve("unavailable");
      return;
    }

    let settled = false;
    const finish = (result: Exclude<EuropeanCloudAvailability, "loading">) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(result);
    };

    const timer = setTimeout(() => finish("unavailable"), timeoutMs);
    try {
      getUserInfo({
        success: (user) => {
          const regionCode =
            typeof user?.regionCode === "string"
              ? user.regionCode.trim().toUpperCase()
              : "";
          finish(
            regionCode === "EU"
              ? "eu"
              : regionCode
              ? "unsupported"
              : "unavailable"
          );
        },
        fail: () => finish("unavailable"),
        failure: () => finish("unavailable"),
      });
    } catch {
      finish("unavailable");
    }
  });

export const isEuropeanCloudAvailable = (
  availability: EuropeanCloudAvailability
): boolean => availability === "eu";

export const getEuropeanCloudFeatureStatusText = (
  availability: EuropeanCloudAvailability,
  availableText: string
): string => {
  if (availability === "eu") return availableText;
  if (availability === "loading") return "Checking availability";
  if (availability === "unsupported") return "Available in Europe only";
  return "Currently unavailable";
};
