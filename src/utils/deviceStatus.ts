export type WifiStatus = "offline" | "connecting" | "online";

/** 開關 DP 未回報前預設關機 */
export const parseSwitchOn = (raw: unknown): boolean =>
  raw === true || raw === 1 || raw === "true";

/**
 * 連網狀態：wifi_status DP 優先；未知時預設離線，僅在平台明確回報在線時為 true。
 */
export const resolveDeviceOnline = (
  wifiStatus: unknown,
  platformOnline?: boolean | null
): boolean => {
  if (wifiStatus === "online") return true;
  if (wifiStatus === "offline" || wifiStatus === "connecting") return false;
  return platformOnline === true;
};

export const formatConnectionStatus = (
  isOnline: boolean,
  wifiStatus: unknown,
  labels: {
    online: string;
    offline: string;
    connecting: string;
  }
): string => {
  if (wifiStatus === "connecting") return labels.connecting;
  if (!isOnline) return labels.offline;
  return labels.online;
};
