import { useCallback, useEffect, useRef, useState } from "react";
import { showToast } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import {
  SMART_PREP_FORCE_RESET_STORAGE,
  SMART_PREP_GUIDE_TEST_MODE,
} from "@/constant/smartPrepSetup";
import {
  canShowSmartPrepSnackbar,
  clearAllSmartPrepStorage,
  clearSmartPrepGuideCompleted,
  readSmartPrepAwaitingCryDevice,
  readSmartPrepGuideCompleted,
  readSmartPrepRoutineDone,
  readSmartPrepSetupIntent,
  tryConsumeSmartPrepSnackbarShow,
  writeSmartPrepAwaitingCryDevice,
  writeSmartPrepGuideCompleted,
  writeSmartPrepRoutineDone,
  writeSmartPrepSetupIntent,
} from "@/constant/smartPrepSetupStorage";
import {
  openSmartPrepRoutineSetup,
  searchCryTranslationDevices,
} from "@/utils/smartPrepSetup";
import { resolveAccountContext } from "@/utils/accountContext";

export type SmartPrepGuideStep = "idle" | "activate" | "done";

const SNACKBAR_VISIBLE_MS = 5000;

interface Options {
  /** 家庭 homeId（勿傳 device.groupId） */
  homeId?: string;
  deviceId?: string;
}

const t = (key: I18nKey) => Strings.getLang(key);

const useSmartPrepSetupGuide = ({ homeId, deviceId }: Options) => {
  const [step, setStep] = useState<SmartPrepGuideStep>("idle");
  const [searching, setSearching] = useState(false);
  const [opening, setOpening] = useState(false);
  const [showNoCryModal, setShowNoCryModal] = useState(false);
  const [showTutorialModal, setShowTutorialModal] = useState(false);
  const [showSetupSnackbar, setShowSetupSnackbar] = useState(false);
  const [cryAssistDeviceId, setCryAssistDeviceId] = useState("");
  const bootstrappedRef = useRef(false);

  const needsSetupReminder = useCallback(() => {
    if (!readSmartPrepSetupIntent() || readSmartPrepRoutineDone()) {
      return false;
    }
    if (!canShowSmartPrepSnackbar()) return false;
    if (SMART_PREP_GUIDE_TEST_MODE) return true;
    return readSmartPrepGuideCompleted();
  }, []);

  /** 消耗一次提醒配額後顯示 snackbar；已達 3 次則不顯示 */
  const maybeShowSetupSnackbar = useCallback(() => {
    if (!readSmartPrepSetupIntent() || readSmartPrepRoutineDone()) return;
    if (!tryConsumeSmartPrepSnackbarShow()) return;
    setShowSetupSnackbar(true);
  }, []);

  /**
   * 啟動：
   * - Routine 已完成 → 結束
   * - 曾因無 CryAssist 結束 → 再搜尋；找到則重跑首次 Activate
   * - 已完成引導且有 setup intent → snackbar（最多 3 次）
   * - 否則 → 首次 Activate
   */
  useEffect(() => {
    if (bootstrappedRef.current) return undefined;
    bootstrappedRef.current = true;

    let cancelled = false;

    const bootstrap = async () => {
      if (SMART_PREP_FORCE_RESET_STORAGE) {
        clearAllSmartPrepStorage();
      }

      if (!SMART_PREP_GUIDE_TEST_MODE && readSmartPrepRoutineDone()) {
        if (!cancelled) setStep("done");
        return;
      }

      const awaitingCry =
        !SMART_PREP_GUIDE_TEST_MODE &&
        readSmartPrepAwaitingCryDevice() &&
        !readSmartPrepRoutineDone() &&
        !readSmartPrepSetupIntent();

      if (awaitingCry) {
        const result = await searchCryTranslationDevices(homeId);
        if (cancelled) return;
        if (result.count > 0) {
          // 之後有了 CryAssist → 清 awaiting，重跑首次引導
          writeSmartPrepAwaitingCryDevice(false);
          clearSmartPrepGuideCompleted();
          setStep("activate");
          return;
        }
        // 仍無設備 → 保持安靜，不反覆彈窗
        setStep("done");
        return;
      }

      if (!SMART_PREP_GUIDE_TEST_MODE && readSmartPrepGuideCompleted()) {
        setStep("done");
        if (needsSetupReminder()) {
          maybeShowSetupSnackbar();
        }
        return;
      }

      setTimeout(() => {
        if (!cancelled) setStep("activate");
      }, 500);
    };

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, [homeId, maybeShowSetupSnackbar, needsSetupReminder]);

  useEffect(() => {
    if (!showSetupSnackbar || SMART_PREP_GUIDE_TEST_MODE) return undefined;
    const timer = setTimeout(
      () => setShowSetupSnackbar(false),
      SNACKBAR_VISIBLE_MS
    );
    return () => clearTimeout(timer);
  }, [showSetupSnackbar]);

  const completeGuide = useCallback(() => {
    if (!SMART_PREP_GUIDE_TEST_MODE) {
      writeSmartPrepGuideCompleted();
    }
    setStep("done");
  }, []);

  const dismissActivate = useCallback(() => {
    // 用戶主動取消：不再因無設備邏輯重跑（除非之後走 enable→無設備）
    writeSmartPrepAwaitingCryDevice(false);
    completeGuide();
  }, [completeGuide]);

  const dismissNoCryModal = useCallback(() => {
    setShowNoCryModal(false);
    // 無設備結束：記住「等設備」，之後有 CryAssist 再走首次引導
    writeSmartPrepAwaitingCryDevice(true);
    completeGuide();
  }, [completeGuide]);

  const dismissTutorialLater = useCallback(() => {
    setShowTutorialModal(false);
    writeSmartPrepAwaitingCryDevice(false);
    writeSmartPrepSetupIntent();
    completeGuide();
    maybeShowSetupSnackbar();
  }, [completeGuide, maybeShowSetupSnackbar]);

  const markRoutineDone = useCallback(() => {
    setShowTutorialModal(false);
    setShowSetupSnackbar(false);
    writeSmartPrepAwaitingCryDevice(false);
    writeSmartPrepRoutineDone();
    completeGuide();
    showToast({ title: t("smart_prep_marked_done"), icon: "success" });
  }, [completeGuide]);

  /** Enable Reminder → 搜尋哭聲設備 → 有設備才教學；無設備僅提示後結束 */
  const enableReminder = useCallback(async () => {
    if (searching) return;
    setSearching(true);
    setStep("done");
    try {
      const result = await searchCryTranslationDevices(homeId);

      if (SMART_PREP_GUIDE_TEST_MODE) {
        const account = await resolveAccountContext();
        const pidHint = result.matchedProductIds.slice(0, 2).join(",") || "-";
        showToast({
          title: `uid=${account.userId || "null"} home=${
            account.homeId || "null"
          } m=${result.method} n=${result.count} pid=${pidHint}`.slice(0, 120),
          icon: "none",
          duration: 4500,
        });
      }

      if (result.count <= 0) {
        // 無 CryAssist：不寫 setup intent、不開教學／snackbar；等之後有設備再引導
        writeSmartPrepAwaitingCryDevice(true);
        setShowNoCryModal(true);
        return;
      }

      writeSmartPrepAwaitingCryDevice(false);
      setCryAssistDeviceId(result.matchedDeviceIds[0] || "");
      writeSmartPrepSetupIntent();
      setShowTutorialModal(true);
    } finally {
      setSearching(false);
    }
  }, [homeId, searching]);

  const openRoutinesFromTutorial = useCallback(async () => {
    if (opening) return;
    setOpening(true);
    setShowTutorialModal(false);
    try {
      const openResult = await openSmartPrepRoutineSetup({
        deviceId,
        cryAssistDeviceId,
      });

      if (SMART_PREP_GUIDE_TEST_MODE) {
        showToast({
          title: `open=${openResult.path} ok=${openResult.ok ? 1 : 0} scene=${
            openResult.sceneId || "EMPTY"
          } ${openResult.reason || ""}`.slice(0, 120),
          icon: "none",
          duration: 4000,
        });
      }

      writeSmartPrepAwaitingCryDevice(false);
      writeSmartPrepSetupIntent();
      completeGuide();

      if (openResult.ok) {
        showToast({ title: t("smart_prep_opened_routines"), icon: "success" });
        maybeShowSetupSnackbar();
        return;
      }
      showToast({ title: t("smart_prep_setup_failed"), icon: "none" });
      maybeShowSetupSnackbar();
    } finally {
      setOpening(false);
    }
  }, [
    completeGuide,
    cryAssistDeviceId,
    deviceId,
    maybeShowSetupSnackbar,
    opening,
  ]);

  const openTutorialFromSnackbar = useCallback(() => {
    setShowSetupSnackbar(false);
    setShowTutorialModal(true);
  }, []);

  return {
    step,
    searching,
    opening,
    showActivateModal: step === "activate",
    showNoCryModal,
    showTutorialModal,
    showSetupSnackbar,
    dismissActivate,
    dismissNoCryModal,
    dismissTutorialLater,
    markRoutineDone,
    enableReminder,
    openRoutinesFromTutorial,
    openTutorialFromSnackbar,
  };
};

export default useSmartPrepSetupGuide;
