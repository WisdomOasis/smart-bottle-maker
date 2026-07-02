const svgUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const IC_WATER = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.3335 22.7137C14.3226 22.7137 16.2303 21.9236 17.6368 20.517C19.0433 19.1105 19.8335 17.2029 19.8335 15.2137C19.8335 13.0709 18.7621 11.0352 16.6192 9.32087C14.4764 7.60659 12.8692 3.96373 12.3335 1.28516C11.7978 3.96373 10.1906 7.60659 8.04778 9.32087C5.90492 11.0352 4.8335 13.0709 4.8335 15.2137C4.8335 17.2029 5.62367 19.1105 7.03019 20.517C8.43672 21.9236 10.3444 22.7137 12.3335 22.7137Z" stroke="#4D7294" stroke-width="2.4" stroke-linejoin="round"/></svg>`;

const IC_POWDER = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.00012 22L19.0001 21.9998V11L5.00012 11.0002V22Z" stroke="#4D7294" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="6" y1="3" x2="18" y2="3" stroke="#4D7294" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="4" y1="11" x2="20" y2="11" stroke="#4D7294" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 3V4C6 5.65685 7.34315 7 9 7C10.6569 7 12 5.65685 12 4V3" stroke="#4D7294" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const IC_TEMP = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 14.76V3.5C14 2.83696 13.7366 2.20107 13.2678 1.73223C12.7989 1.26339 12.163 1 11.5 1C10.837 1 10.2011 1.26339 9.73223 1.73223C9.26339 2.20107 9 2.83696 9 3.5V14.76C8.19728 15.2963 7.58832 16.0766 7.26307 16.9856C6.93782 17.8946 6.91352 18.8841 7.19376 19.8079C7.47399 20.7317 8.04391 21.541 8.81934 22.1161C9.59476 22.6912 10.5346 23.0017 11.5 23.0017C12.4654 23.0017 13.4052 22.6912 14.1807 22.1161C14.9561 21.541 15.526 20.7317 15.8062 19.8079C16.0865 18.8841 16.0622 17.8946 15.7369 16.9856C15.4117 16.0766 14.8027 15.2963 14 14.76Z" stroke="#4D7294" stroke-width="2.4" stroke-linejoin="round"/></svg>`;

export const CUSTOM_MODE_ICONS = {
  water: svgUri(IC_WATER),
  powder: svgUri(IC_POWDER),
  temp: svgUri(IC_TEMP),
} as const;
