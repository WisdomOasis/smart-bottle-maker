import { scanCode } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";

type KeyboardBean = {
  title?: string;
  placeholder?: string;
  desc?: string;
  actionText?: string;
};

/** Tuya scanCode 擴展參數（BaseKit typings 未完整收錄） */
type NativeScanCodeParams = {
  onlyFromCamera?: boolean;
  scanType?: string[];
  customTips?: string;
  isShowActionTitle?: boolean;
  isShowTorch?: boolean;
  isShowKeyboard?: boolean;
  keyboardBean?: KeyboardBean;
  success?: (res: { result: string }) => void;
  fail?: (res: { errorMsg?: string }) => void;
  complete?: () => void;
};

const t = (key: I18nKey) => Strings.getLang(key);

/** 對齊客製 Enter Barcode 頁文案，供官方 keyboardBean 使用 */
export const getBarcodeKeyboardBean = (): KeyboardBean => ({
  title: t("barcode_enter_barcode"),
  placeholder: t("barcode_input_placeholder"),
  desc: t("barcode_reference_hint"),
  actionText: t("barcode_search"),
});

/**
 * 調起 Tuya 官方掃碼（全螢幕相機 + 官方 Enter Barcode 手動輸入）。
 * 原生輸入頁僅能改文案，無法完全複製客製樣式。
 */
export const runBarcodeScan = (handlers: {
  onResult: (raw: string) => void;
  /** 使用者按返回／取消，未掃到有效條碼 */
  onDismiss?: () => void;
  onComplete?: () => void;
}): void => {
  let gotResult = false;
  let dismissed = false;

  const dismissOnce = () => {
    if (gotResult || dismissed) return;
    dismissed = true;
    handlers.onDismiss?.();
  };

  const params: NativeScanCodeParams = {
    onlyFromCamera: true,
    scanType: ["barCode", "qrCode"],
    isShowActionTitle: false,
    isShowKeyboard: true,
    keyboardBean: getBarcodeKeyboardBean(),
    success: (res) => {
      const raw = res.result?.trim() ?? "";
      if (!raw) return;
      gotResult = true;
      handlers.onResult(raw);
    },
    fail: () => {
      dismissOnce();
    },
    complete: () => {
      handlers.onComplete?.();
      // iOS 有時僅觸發 complete，不觸發 fail
      dismissOnce();
    },
  };

  scanCode(params as Parameters<typeof scanCode>[0]);
};
