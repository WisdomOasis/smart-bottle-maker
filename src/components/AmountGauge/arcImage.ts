import { BACKGROUND_ON, GAUGE_ARC } from "@/constant/theme";
import {
  getArcGeometry,
  getArcImagePadBottom,
  getArcImagePadSide,
  getArcImagePadTop,
  pointOnArc,
} from "./arcGeometry";

export type GaugeArcImageOptions = {
  /** 弧上刻度斷點（已抽稀），進度 0–1 對應 min–max */
  tickRatios?: number[];
};

/** 刻度：貼近軌道淺綠，細短、低對比，不搶進度與圓點 */
const TICK = {
  color: "#B5D4BC",
  width: 1.1,
  inner: 2.75,
  outer: 0.25,
} as const;

/** 產生可在小程序 Image 顯示的 SVG（軌道 + 刻度 + 進度 + 圓點） */
export const buildGaugeArcImageUri = (
  ratio: number,
  options: GaugeArcImageOptions = {}
): string => {
  const arc = getArcGeometry(ratio);
  const padTop = getArcImagePadTop(arc.stroke);
  const padSide = getArcImagePadSide();
  const padBottom = getArcImagePadBottom(arc.stroke);
  const knobR = GAUGE_ARC.knob.size / 2;
  const knobBorder = GAUGE_ARC.knob.border;
  const svgW = arc.width + padSide * 2;
  const svgH = arc.height + padTop + padBottom;

  const tickMarks = (options.tickRatios ?? [])
    .map((tickRatio) => {
      /* 兩端與圓點重疊，不畫刻度 */
      if (tickRatio <= 0.01 || tickRatio >= 0.99) return "";
      const p = pointOnArc(tickRatio, arc.stroke);
      const nx = Math.cos(p.angle);
      const ny = -Math.sin(p.angle);
      const x1 = p.x - nx * TICK.outer;
      const y1 = p.y - ny * TICK.outer;
      const x2 = p.x + nx * TICK.inner;
      const y2 = p.y + ny * TICK.inner;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${TICK.color}" stroke-width="${TICK.width}" stroke-linecap="round"/>`;
    })
    .join("");

  const progressPath =
    arc.progressLength > 0
      ? `<path d="${arc.pathD}" fill="none" stroke="${BACKGROUND_ON}" stroke-width="${arc.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${arc.progressLength} ${arc.arcLength}"/>`
      : "";

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${svgH}" viewBox="${-padSide} ${-padTop} ${svgW} ${svgH}">`,
    `<path d="${arc.pathD}" fill="none" stroke="${GAUGE_ARC.trackColor}" stroke-width="${arc.stroke}" stroke-linecap="round" stroke-linejoin="round"/>`,
    tickMarks,
    progressPath,
    `<circle cx="${arc.knobX}" cy="${arc.knobY}" r="${knobR}" fill="${BACKGROUND_ON}" stroke="${GAUGE_ARC.knob.borderColor}" stroke-width="${knobBorder}"/>`,
    `</svg>`,
  ].join("");

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
