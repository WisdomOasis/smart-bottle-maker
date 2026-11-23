import { queryDps, syncDeviceInfo } from "@ray-js/ray";

/**
 * 組裝狀態相關 RO DP（schema id）
 * 103 milkbox / 104 funnel / 105 bottle / 106 watertank
 */
export const ASSEMBLY_STATUS_DP_IDS = [103, 104, 105, 106] as const;

const nonEmptyId = (deviceId: unknown): string =>
  typeof deviceId === "string" ? deviceId.trim() : "";

let lastSyncAt = 0;
const SYNC_THROTTLE_MS = 800;

/**
 * 進面板／回前景時同步組裝狀態（業界常見兩段式）：
 * 1. syncDeviceInfo — 拉雲端／主機快取，補齊可能缺失的 DP
 * 2. queryDps — 要求固件重報 RO 感測器；結果走 onDpDataChange 進 model
 *
 * 不阻塞 UI；失敗靜默（虛擬機／離線時常見）。
 */
export const syncAssemblyStatus = (
  deviceId: unknown,
  options?: { force?: boolean }
): void => {
  const id = nonEmptyId(deviceId);
  if (!id) return;

  const now = Date.now();
  if (!options?.force && now - lastSyncAt < SYNC_THROTTLE_MS) return;
  lastSyncAt = now;

  try {
    syncDeviceInfo({
      deviceId: id,
      fail: () => undefined,
    });
  } catch {
    /* host 可能未實作 */
  }

  try {
    queryDps({
      deviceId: id,
      // Ray typings 在 number[] / string[] 間不一致；執行時接受 number
      dpIds: [...ASSEMBLY_STATUS_DP_IDS] as unknown as number[],
      queryType: 0,
      fail: () => undefined,
    });
  } catch {
    /* host 可能未實作 */
  }
};
