const svgUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const IC_CLOSE = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="#81869F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const IC_SEARCH = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21.0002L16.66 16.6602" stroke="#4D7294" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#4D7294" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const IC_CLEAR = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="#868EAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const POWDER_BRAND_SHEET_ICONS = {
  close: svgUri(IC_CLOSE),
  search: svgUri(IC_SEARCH),
  clear: svgUri(IC_CLEAR),
} as const;
