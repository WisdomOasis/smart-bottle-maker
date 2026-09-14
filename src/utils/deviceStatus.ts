/** 開關 DP 未回報前預設關機 */
export const parseSwitchOn = (raw: unknown): boolean =>
  raw === true || raw === 1 || raw === "true";

/**
 * 連網狀態：以平台在線事件為準（wifi_status DP 已移除）。
 * 未知時預設離線，僅在平台明確回報在線時為 true。
 */
export const resolveDeviceOnline = (platformOnline?: boolean | null): boolean =>
  platformOnline === true;

export const formatConnectionStatus = (
  isOnline: boolean,
  labels: {
    online: string;
    offline: string;
    connecting: string;
  }
): string => {
  if (!isOnline) return labels.offline;
  return labels.online;
};
