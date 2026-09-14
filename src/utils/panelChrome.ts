/** 隱藏 Tuya 面板原生懸浮「…」與標題列 icon（含關閉） */
export const hidePanelFloatingButtons = (): void => {
  const { ty } = globalThis as {
    ty?: Record<string, (p?: Record<string, unknown>) => void>;
  };
  ty?.hideMenuButton?.({});
  ty?.hideBoardTitleIcon?.({});
};
