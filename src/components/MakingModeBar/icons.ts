const svgUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

/** 白色圓弧 loading（小程序 Image + CSS 旋轉） */
const IC_LOADING = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C16.9706 3 21 7.02944 21 12" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;

export const MAKING_LOADING_ICON_URI = svgUri(IC_LOADING);
