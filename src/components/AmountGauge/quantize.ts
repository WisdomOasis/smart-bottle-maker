/** 將數值量化到 min/max/step；支援小數 step（如 0.1g） */
export const quantizeValue = (
  raw: number,
  min: number,
  max: number,
  step: number
): number => {
  const safeMax = max > min ? max : min;
  let next = Math.min(safeMax, Math.max(min, raw));
  if (step > 0) {
    next = Math.round((next - min) / step) * step + min;
    const decimals = String(step).includes(".")
      ? String(step).split(".")[1].length
      : 0;
    if (decimals > 0) {
      const factor = 10 ** decimals;
      next = Math.round(next * factor) / factor;
    }
  }
  return Math.min(safeMax, Math.max(min, next));
};

/** 建立分段斷點（含 min/max） */
export const buildStepStops = (
  min: number,
  max: number,
  step: number
): number[] => {
  if (!(step > 0) || max < min) return [min];
  const stops: number[] = [];
  const count = Math.round((max - min) / step);
  for (let i = 0; i <= count; i += 1) {
    stops.push(quantizeValue(min + i * step, min, max, step));
  }
  if (stops[stops.length - 1] !== max) stops.push(max);
  return stops;
};

/**
 * 刻度抽稀：斷點太多時只畫主要刻度，避免弧上過密。
 * 目標約 8–12 個可見刻度。
 */
export const pickTickStops = (stops: number[]): number[] => {
  if (stops.length <= 12) return stops;
  const target = 10;
  const stride = Math.ceil((stops.length - 1) / (target - 1));
  const ticks: number[] = [];
  for (let i = 0; i < stops.length; i += stride) {
    ticks.push(stops[i]);
  }
  const last = stops[stops.length - 1];
  if (ticks[ticks.length - 1] !== last) ticks.push(last);
  return ticks;
};
