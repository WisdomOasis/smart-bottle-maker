import React, { useEffect } from "react";
import { router } from "@ray-js/ray";
import { useHidePanelFloatingButtons } from "@/hooks/useHidePanelFloatingButtons";

/** 舊路由相容：掃碼已改由 Formula 頁直接調起官方 scanCode */
const ScanBarcodePage: React.FC = () => {
  useHidePanelFloatingButtons();
  useEffect(() => {
    router.replace("/formula");
  }, []);

  return null;
};

export default ScanBarcodePage;
