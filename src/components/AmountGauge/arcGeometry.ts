import { GAUGE_ARC } from "@/constant/theme";

/** 與 arcImage viewBox 上留白一致，用於 DOM 圓點對齊 SVG 軌道 */
export const getArcImagePad = (stroke = GAUGE_ARC.stroke) =>
  Math.ceil(stroke / 2 + 2);

/** 將路徑座標映射到 Image 顯示區域（viewBox 含上留白） */
export const mapKnobToDisplay = (
  knobX: number,
  knobY: number,
  height: number,
  stroke = GAUGE_ARC.stroke
) => {
  const pad = getArcImagePad(stroke);
  return {
    x: knobX,
    y: ((knobY + pad) / (height + pad)) * height,
  };
};

export interface ArcGeometry {
  width: number;
  height: number;
  stroke: number;
  pathD: string;
  arcLength: number;
  progressLength: number;
  knobX: number;
  knobY: number;
}

/** 半圓軌道 0% 在左、100% 在右，依 value/max 比例計算進度與圓點位置 */
export const getArcGeometry = (ratio: number): ArcGeometry => {
  const { width } = GAUGE_ARC;
  const { height } = GAUGE_ARC;
  const { stroke } = GAUGE_ARC;
  const cx = width / 2;
  /* 端點上移半個線寬，讓 stroke-linecap:round 的圓頭落在弧底 */
  const cy = height - stroke / 2;
  const radius = (width - stroke) / 2;
  const x0 = stroke / 2;
  const x1 = width - stroke / 2;
  const pathD = `M ${x0} ${cy} A ${radius} ${radius} 0 0 1 ${x1} ${cy}`;
  const arcLength = Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, ratio));
  const progressLength = arcLength * clamped;
  const angle = Math.PI * (1 - clamped);
  const knobX = cx + radius * Math.cos(angle);
  const knobY = cy - radius * Math.sin(angle);

  return {
    width,
    height,
    stroke,
    pathD,
    arcLength,
    progressLength,
    knobX,
    knobY,
  };
};
