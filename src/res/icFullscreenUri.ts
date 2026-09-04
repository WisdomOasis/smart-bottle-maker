const makeFullscreenSvg = (stroke: string) =>
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.6V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10.6" stroke="${stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 13.4V19C21 19.5305 20.7893 20.0392 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H13.4" stroke="${stroke}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const IC_FULLSCREEN_URI = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  makeFullscreenSvg("#2D365F")
)}`;

export const IC_FULLSCREEN_WHITE_URI = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  makeFullscreenSvg("#FFFFFF")
)}`;
