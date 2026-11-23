import { GAUGE_ARC } from "@/constant/theme";

/** 圓點外緣半徑（含 stroke 半寬） */
const knobOuterR = () => GAUGE_ARC.knob.size / 2 + GAUGE_ARC.knob.border / 2;

/** 上留白：圓點外緣 + 緩衝（頂點在最高處） */
export const getArcImagePadTop = (stroke = GAUGE_ARC.stroke) =>
  Math.ceil(stroke / 2 + knobOuterR() + 2);

/** 左右留白：避免端點圓點被裁切 */
export const getArcImagePadSide = () => Math.ceil(knobOuterR() + 4);

/**
 * 下留白：端點圓點中心在 cy = height - stroke/2，
 * 外緣再向下 knobOuterR，需超出原 height 的部分。
 */
export const getArcImagePadBottom = (stroke = GAUGE_ARC.stroke) =>
  Math.ceil(knobOuterR() - stroke / 2 + 4);

/** @deprecated 使用 getArcImagePadTop */
export const getArcImagePad = getArcImagePadTop;

export interface ArcGeometry {
  width: number;
  height: number;
  stroke: number;
  pathD: string;
  arcLength: number;
  progressLength: number;
  knobX: number;
  knobY: number;
  cx: number;
  cy: number;
  radius: number;
}

/** 半圓軌道中心線：0% 左、100% 右 */
export const getArcGeometry = (ratio: number): ArcGeometry => {
  const { width, height, stroke } = GAUGE_ARC;
  const cx = width / 2;
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
    cx,
    cy,
    radius,
  };
};

/** 弧進度 t 上某一點座標（軌道中心線） */
export const pointOnArc = (
  ratio: number,
  stroke = GAUGE_ARC.stroke
): { x: number; y: number; angle: number } => {
  const { width, height } = GAUGE_ARC;
  const cx = width / 2;
  const cy = height - stroke / 2;
  const radius = (width - stroke) / 2;
  const clamped = Math.min(1, Math.max(0, ratio));
  const angle = Math.PI * (1 - clamped);
  return {
    x: cx + radius * Math.cos(angle),
    y: cy - radius * Math.sin(angle),
    angle,
  };
};

/**
 * 觸點 → 弧進度（左=0、右=1）。
 * local 座標為路徑座標系（不含 viewBox 平移）。
 *
 * 注意：手指略低於直徑時 atan2 為負角；若直接 clamp 到 [0,π]
 * 會變成 0（右端／最大值），造成「拉到最小卻跳到最大」。
 * 下半平面改依左右貼近對應端點。
 */
export const ratioFromArcPoint = (
  localX: number,
  localY: number,
  stroke = GAUGE_ARC.stroke
): number => {
  const { width, height } = GAUGE_ARC;
  const cx = width / 2;
  const cy = height - stroke / 2;
  const angle = Math.atan2(cy - localY, localX - cx);

  let clampedAngle: number;
  if (angle < 0) {
    clampedAngle = localX <= cx ? Math.PI : 0;
  } else {
    clampedAngle = Math.min(Math.PI, angle);
  }

  return 1 - clampedAngle / Math.PI;
};
