import { useEffect } from "react";
import { usePageEvent } from "@ray-js/ray";
import { hidePanelFloatingButtons } from "@/utils/panelChrome";

/** Re-hide Tuya capsule buttons whenever a page is shown. */
export const useHidePanelFloatingButtons = (): void => {
  useEffect(() => {
    hidePanelFloatingButtons();
  }, []);

  usePageEvent("onShow", () => {
    hidePanelFloatingButtons();
  });
};
