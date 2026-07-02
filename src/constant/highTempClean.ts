/** 高溫清潔：70°C 熱水 200mL + 常溫水 100mL */
export const HIGH_TEMP_CLEAN_HOT_ML = 200;
export const HIGH_TEMP_CLEAN_ROOM_ML = 100;
export const HIGH_TEMP_CLEAN_TOTAL_ML =
  HIGH_TEMP_CLEAN_HOT_ML + HIGH_TEMP_CLEAN_ROOM_ML;
export const HIGH_TEMP_CLEAN_TEMP = 70;
export const HIGH_TEMP_CLEAN_COUNTDOWN_SEC = 120;

export const formatCleanCountdown = (seconds: number): string => {
  const clamped = Math.max(0, Math.floor(seconds));
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
