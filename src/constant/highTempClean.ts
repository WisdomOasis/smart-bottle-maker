/** 清潔流程由設備 firmware 的 clean mode 執行；面板僅顯示預估水量與倒數。 */
export const HIGH_TEMP_CLEAN_HOT_ML = 200;
export const HIGH_TEMP_CLEAN_ROOM_ML = 100;
export const HIGH_TEMP_CLEAN_TOTAL_ML =
  HIGH_TEMP_CLEAN_HOT_ML + HIGH_TEMP_CLEAN_ROOM_ML;
export const HIGH_TEMP_CLEAN_COUNTDOWN_SEC = 120;

export const formatCleanCountdown = (seconds: number): string => {
  const clamped = Math.max(0, Math.floor(seconds));
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
