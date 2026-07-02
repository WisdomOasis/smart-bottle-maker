const svgUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const IC_CHECK = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#diary_check_clip)"><path d="M18.3333 9.23355V10.0002C18.3323 11.7972 17.7504 13.5458 16.6744 14.9851C15.5984 16.4244 14.086 17.4773 12.3628 17.9868C10.6395 18.4963 8.79768 18.4351 7.11202 17.8124C5.42636 17.1896 3.98717 16.0386 3.00909 14.5311C2.03101 13.0236 1.56645 11.2403 1.68469 9.44714C1.80293 7.65402 2.49763 5.94715 3.66519 4.58111C4.83275 3.21506 6.41061 2.26303 8.16345 1.867C9.91629 1.47097 11.7502 1.65216 13.3916 2.38355" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3333 3.33398L10 11.6757L7.5 9.17565" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="diary_check_clip"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>`;

const IC_CHEVRON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const BABY_DIARY_SNACKBAR_ICONS = {
  check: svgUri(IC_CHECK),
  chevron: svgUri(IC_CHEVRON),
} as const;
