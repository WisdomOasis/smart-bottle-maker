import { authorize, scanCode, showToast } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { pausePanelChromeHide, resumePanelChromeHide } from "./panelChrome";

const t = (key: I18nKey) => Strings.getLang(key);

type ScanFail = {
  errorMsg?: string;
  errorCode?: string | number;
  innerError?: { errorCode?: string | number; errorMsg?: string };
};

const textOf = (value: unknown): string =>
  typeof value === "string" ? value.toLowerCase() : "";

const failMessage = (res?: ScanFail): string =>
  `${textOf(res?.errorMsg)} ${textOf(res?.innerError?.errorMsg)}`;

export const isBarcodeScanCancel = (res?: ScanFail): boolean => {
  const code = res?.errorCode ?? res?.innerError?.errorCode;
  return (
    code === 1 ||
    code === "1" ||
    /cancel|canceled|cancelled|取消/.test(failMessage(res))
  );
};

const requestCameraAccess = (onGranted: () => void, onDenied: () => void) => {
  try {
    authorize({
      scope: "scope.camera",
      success: () => onGranted(),
      fail: () => onDenied(),
    });
  } catch {
    onDenied();
  }
};

/**
 * 先向系統要相機權限，再調起官方掃碼。
 * 權限未授權時 scanCode 會直接 fail，看起來像點了沒反應。
 */
export const runBarcodeScan = (handlers: {
  onResult: (raw: string) => void;
  /** 使用者按返回／取消，未掃到有效條碼 */
  onDismiss?: () => void;
  onComplete?: () => void;
  /** 相機掃碼無法開啟時，改走手動輸入 */
  onUnavailable?: () => void;
}): void => {
  let gotResult = false;
  let dismissed = false;
  let chromePaused = false;

  const pauseChrome = () => {
    if (chromePaused) return;
    chromePaused = true;
    pausePanelChromeHide();
  };

  const resumeChrome = () => {
    if (!chromePaused) return;
    chromePaused = false;
    resumePanelChromeHide();
  };

  const dismissOnce = () => {
    if (gotResult || dismissed) return;
    dismissed = true;
    resumeChrome();
    handlers.onDismiss?.();
  };

  const finishComplete = () => {
    resumeChrome();
    handlers.onComplete?.();
    dismissOnce();
  };

  const openNativeScanner = () => {
    scanCode({
      onlyFromCamera: false,
      scanType: ["barCode", "qrCode"],
      success: (res) => {
        const raw = res.result?.trim() ?? "";
        if (!raw) return;
        gotResult = true;
        resumeChrome();
        handlers.onResult(raw);
      },
      fail: (res) => {
        if (!isBarcodeScanCancel(res)) handlers.onUnavailable?.();
        dismissOnce();
      },
      complete: () => {
        finishComplete();
      },
    });
  };

  try {
    pauseChrome();
    requestCameraAccess(openNativeScanner, () => {
      showToast({ title: t("barcode_camera_denied"), icon: "none" });
      handlers.onUnavailable?.();
      finishComplete();
    });
  } catch {
    showToast({ title: t("barcode_camera_denied"), icon: "none" });
    handlers.onUnavailable?.();
    finishComplete();
  }
};
