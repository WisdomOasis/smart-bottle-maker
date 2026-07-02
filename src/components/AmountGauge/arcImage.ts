import { BACKGROUND_ON, GAUGE_ARC } from "@/constant/theme";
import { getArcGeometry, getArcImagePad } from "./arcGeometry";

/** 產生可在小程序 Image 元件顯示的 SVG 弧線（軌道 + 進度 + 圓點） */
export const buildGaugeArcImageUri = (ratio: number): string => {
  const arc = getArcGeometry(ratio);
  const progressPath =
    arc.progressLength > 0
      ? `<path d="${arc.pathD}" fill="none" stroke="${BACKGROUND_ON}" stroke-width="${arc.stroke}" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${arc.progressLength} ${arc.arcLength}"/>`
      : "";

  const pad = getArcImagePad(arc.stroke);
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${arc.width}" height="${
      arc.height
    }" viewBox="0 ${-pad} ${arc.width} ${arc.height + pad}">`,
    `<path d="${arc.pathD}" fill="none" stroke="${GAUGE_ARC.trackColor}" stroke-width="${arc.stroke}" stroke-linecap="round" stroke-linejoin="round"/>`,
    progressPath,
    `</svg>`,
  ].join("");

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
