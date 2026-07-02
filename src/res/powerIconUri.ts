import { BACKGROUND_ON } from "@/constant/theme";

const svgUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const POWER_PATH =
  '<path d="M12 3v8" stroke="{color}" stroke-width="2" stroke-linecap="round"/><path d="M17.66 7.34a8 8 0 1 1-11.32 0" stroke="{color}" stroke-width="2" stroke-linecap="round" fill="none"/>';

const powerSvg = (color: string) =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${POWER_PATH.replace(
    /\{color\}/g,
    color
  )}</svg>`;

const POWER_ON_COLOR = BACKGROUND_ON;
const POWER_OFF_COLOR = "#E53935";

export const POWER_ICON_URIS = {
  on: svgUri(powerSvg(POWER_ON_COLOR)),
  off: svgUri(powerSvg(POWER_OFF_COLOR)),
} as const;
