const svgUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const IC_WARNING = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.57455 3.21671L1.51622 14.1667C1.3707 14.4186 1.29372 14.7043 1.29297 14.995C1.29222 15.2857 1.36771 15.5718 1.51194 15.8246C1.65617 16.0773 1.86411 16.288 2.11502 16.4356C2.36593 16.5831 2.65119 16.6625 2.94188 16.6659H17.0586C17.3492 16.6625 17.6345 16.5831 17.8854 16.4356C18.1363 16.288 18.3442 16.0773 18.4885 15.8246C18.6327 15.5718 18.7082 15.2857 18.7074 14.995C18.7067 14.7043 18.6297 14.4186 18.4842 14.1667L11.4259 3.21671C11.2771 2.97241 11.0676 2.7704 10.8179 2.63057C10.5681 2.49074 10.2866 2.41797 10.0002 2.41797C9.71382 2.41797 9.43231 2.49074 9.18257 2.63057C8.93283 2.7704 8.72334 2.97241 8.57455 3.21671Z" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 7.5V10.8333" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 14.166H10.0083" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const IC_CHEVRON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const SMART_PREP_SETUP_SNACKBAR_ICONS = {
  warning: svgUri(IC_WARNING),
  chevron: svgUri(IC_CHEVRON),
} as const;
