import { useEffect } from "react";
import { usePageEvent } from "@ray-js/ray";
import { hidePanelFloatingButtons } from "@/utils/panelChrome";

/** Host may remount capsule after navigation / scan; hide again shortly after. */
const rehideAfterHostChrome = (): (() => void) => {
  hidePanelFloatingButtons();
  const t1 = setTimeout(() => hidePanelFloatingButtons(), 300);
  const t2 = setTimeout(() => hidePanelFloatingButtons(), 1200);
  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
  };
};

/** Re-hide Tuya capsule buttons whenever a page is shown. */
export const useHidePanelFloatingButtons = (): void => {
  useEffect(() => rehideAfterHostChrome(), []);

  usePageEvent("onShow", () => {
    rehideAfterHostChrome();
  });
};
