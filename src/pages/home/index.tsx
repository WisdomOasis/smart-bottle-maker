import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  Image,
  showToast,
  router,
  useAppEvent,
  getLaunchOptionsSync,
} from "@ray-js/ray";
import { useProps, useActions, useDevice } from "@ray-js/panel-sdk";
import useDeviceConnectivity from "@/hooks/useDeviceConnectivity";
import { useEuropeanCloudAvailability } from "@/hooks/useEuropeanCloudAvailability";
import Res from "@/res";
import dpCodes from "@/constant/dpCodes";
import {
  SCENE_PRESETS,
  type ScenePresetKey,
  GAUGE_ML_MAX,
} from "@/constant/presets";
import AmountGauge from "@/components/AmountGauge";
import CustomModeSettingsPanel, {
  type CustomModeDraft,
} from "@/components/CustomModeSettingsPanel";
import BrandBanner from "@/components/BrandBanner";
import SceneModeTabs, { type SceneTabItem } from "@/components/SceneModeTabs";
import MakingModeBar, {
  type MakingBarVariant,
} from "@/components/MakingModeBar";
import MakingActionsPanel from "@/components/MakingActionsPanel";
import BottleMadeButton from "@/components/BottleMadeButton";
import WaterTemperaturePanel from "@/components/WaterTemperaturePanel";
import PowderCautionPanel from "@/components/PowderCautionPanel";
import BabyDiarySnackbar from "@/components/BabyDiarySnackbar";
import FeedingRecordConfirmationModal from "@/components/FeedingRecordConfirmationModal";
import CryAssistFeedRequestModal from "@/components/CryAssistFeedRequestModal";
import ConnectedFeaturesSetupSheet, {
  type ConnectedFeaturesSetupView,
} from "@/components/ConnectedFeaturesSetupSheet";
import HighTempCleanStopButton from "@/components/HighTempCleanStopButton";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import {
  getFeedingProfileSelection,
  saveFeedingProfileSelection,
  type FeedingProfileSelection,
} from "@/constant/feedingRecordStorage";
import { parseFeedingContextValue } from "@/utils/feedingContextValue";
import { parseFeedingRecordConfirmation } from "@/utils/feedingRecordConfirmation";
import { resolveFeedingProfileAvatar } from "@/utils/feedingProfilePresentation";
import {
  hasSeenConnectedFeaturesSetup,
  markConnectedFeaturesSetupSeen,
  shouldAutoOpenConnectedFeaturesSetup,
} from "@/utils/connectedFeaturesSetup";
import {
  HIGH_TEMP_CLEAN_COUNTDOWN_SEC,
  HIGH_TEMP_CLEAN_TOTAL_ML,
} from "@/constant/highTempClean";
import { useAppDispatch } from "@/redux";
import {
  hydratePowderBrandFromStorage,
  markBrandBannerEverClicked,
  selectBrandBannerEverClicked,
  selectPowderBrandConfigured,
  selectPowderBrandEntries,
  selectPowderBrandSelection,
  syncBrandBannerEverClicked,
} from "@/redux/modules/powderBrandSlice";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import {
  calcPowderGrams,
  clampMl,
  getVolumeFromDp,
  isWorking,
  parseTemp,
  parseUnit,
  parseWorkMode,
  type TempSet,
  type WorkMode,
} from "@/utils/bottleMaker";
import { createDpSetter, publishDpBatch, setBoolDp } from "@/utils/dpControl";
import {
  buildMilkStartDpPayload,
  type MilkRecipeParams,
  resolveMilkRecipeParams,
} from "@/utils/milkRecipe";
import { executeMilkStart, isMilkStartConfirmed } from "@/utils/milkStart";
import {
  buildCryAssistMilkRecipe,
  createCryAssistMilkDraft,
  isCryAssistDraftChanged,
  type CryAssistMilkDraft,
} from "@/utils/cryassistMilkDraft";
import { formatConnectionStatus } from "@/utils/deviceStatus";
import {
  shouldOpenCryAssistReminder,
  shouldResetCryAssistReminder,
} from "@/utils/cryassistReminder";
import {
  isPanelDeviceContextReady,
  resolvePanelDeviceId,
} from "@/utils/panelDeviceContext";
import {
  getEuropeanCloudFeatureStatusText,
  isEuropeanCloudAvailable,
} from "@/utils/europeanCloudAvailability";
import styles from "./index.module.less";

type ActionKind = "milk" | "water" | "powder";
type CompletionKind = "milk" | "water" | "powder";

const SCENE_TABS: SceneTabItem[] = [
  {
    key: "standard",
    labelKey: "mode_standard",
    iconUri: Res.sceneTabIcons.standard,
  },
  {
    key: "nighttime",
    labelKey: "mode_nighttime",
    iconUri: Res.sceneTabIcons.nighttime,
  },
  {
    key: "goOut",
    labelKey: "mode_go_out",
    iconUri: Res.sceneTabIcons.goOut,
  },
  {
    key: "doubleFeeding",
    labelKey: "mode_double",
    iconUri: Res.sceneTabIcons.doubleFeeding,
  },
];

const HomePage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);

  const { switchOn, isOnline, panelDisabled } = useDeviceConnectivity();
  const cloudFeatureAvailability = useEuropeanCloudAvailability();
  const cloudFeaturesAvailable = isEuropeanCloudAvailable(
    cloudFeatureAvailability
  );
  const { devInfo } = useDevice((state) => ({ devInfo: state.devInfo }));
  const dpState = useProps() as Record<string, unknown>;
  const actions = useActions();

  const [sceneKey, setSceneKey] = useState<ScenePresetKey>("standard");
  const dispatch = useAppDispatch();
  const brandSet = useSelector(selectPowderBrandConfigured);
  const powderBrandEntries = useSelector(selectPowderBrandEntries);
  const powderBrandSelection = useSelector(selectPowderBrandSelection);
  const brandBannerClicked = useSelector(selectBrandBannerEverClicked);
  const hasSavedPowderBrands = powderBrandEntries.length > 0;
  const isCustomBrand = powderBrandSelection?.brandId === CUSTOM_BRAND_ID;
  const showBrandBanner = !brandSet || Boolean(powderBrandSelection);
  const [customModeOpen, setCustomModeOpen] = useState(false);
  const [bottleMadePhase, setBottleMadePhase] = useState(false);
  const [completionKind, setCompletionKind] = useState<CompletionKind>("milk");
  const [selectedAction, setSelectedAction] = useState<ActionKind>("milk");
  const [milkSessionActive, setMilkSessionActive] = useState(false);
  const [babyDiaryToastVisible, setBabyDiaryToastVisible] = useState(false);
  const [waterSessionActive, setWaterSessionActive] = useState(false);
  const [powderSessionActive, setPowderSessionActive] = useState(false);
  const [cleanCountdown, setCleanCountdown] = useState(
    HIGH_TEMP_CLEAN_COUNTDOWN_SEC
  );
  const [awaitingWorkMode, setAwaitingWorkMode] = useState<WorkMode | null>(
    null
  );
  const [stopBusy, setStopBusy] = useState(false);
  const prevWorking = useRef(false);
  const prevWorkMode = useRef<WorkMode>("milk");
  const wasInCleanMode = useRef(false);

  const workMode = parseWorkMode(dpState[dpCodes.workMode]);
  const isMaking = isWorking(dpState[dpCodes.workingStatus]);
  const childLock = isWorking(dpState[dpCodes.childLock]);
  const isCleanSession = isMaking && workMode === "clean";
  const isMakingUi = isMaking && !isCleanSession;
  const unit = parseUnit(dpState[dpCodes.unitSet]);
  const temp = parseTemp(dpState[dpCodes.tempSet]);
  const formulaWater = Number(dpState[dpCodes.formulaWater] ?? 100);
  const formulaRatio = Number(dpState[dpCodes.formulaRatio] ?? 130);
  const volumeMl = getVolumeFromDp(dpState, unit);
  const powderG = calcPowderGrams(volumeMl, formulaRatio);
  const preset = SCENE_PRESETS[sceneKey as keyof typeof SCENE_PRESETS];
  const powderPrimary = preset?.powderPrimary ?? false;
  const feedingDeviceId = resolvePanelDeviceId(
    devInfo?.devId,
    getLaunchOptionsSync()?.query
  );
  const [feedingProfile, setFeedingProfile] = useState(() =>
    getFeedingProfileSelection(feedingDeviceId)
  );
  const [feedingHomeId, setFeedingHomeId] = useState("");
  const [feedingProfileBusy, setFeedingProfileBusy] = useState(false);
  const [smartPrepBusy, setSmartPrepBusy] = useState(false);
  const [connectedSetupOpen, setConnectedSetupOpen] = useState(false);
  const [connectedSetupInitialView, setConnectedSetupInitialView] =
    useState<ConnectedFeaturesSetupView>("hub");
  const [connectedSetupKey, setConnectedSetupKey] = useState(0);
  const [hungryReminderOpen, setHungryReminderOpen] = useState(false);
  const [hungryReminderBusy, setHungryReminderBusy] = useState(false);
  const [hungryStartAwaitingDevice, setHungryStartAwaitingDevice] =
    useState(false);
  const hungryReminderShown = useRef(false);
  const connectedSetupAutoOpenAttempted = useRef(false);
  const feedingContext = useMemo(
    () => parseFeedingContextValue(dpState[dpCodes.feedingContext]),
    [dpState]
  );
  const hungryReminderInitialDraft = useMemo(
    () =>
      createCryAssistMilkDraft({
        volumeMl,
        temp,
        formulaWater,
        formulaRatio,
      }),
    [formulaRatio, formulaWater, temp, volumeMl]
  );

  const refreshFeedingRecordStatus = useCallback(() => {
    setFeedingProfile(getFeedingProfileSelection(feedingDeviceId));
    ty.home.getCurrentHomeInfo({
      success: (home: { homeId?: string | number }) =>
        setFeedingHomeId(String(home.homeId || "")),
      fail: () => setFeedingHomeId(""),
    });
  }, [feedingDeviceId]);

  useEffect(() => {
    refreshFeedingRecordStatus();
  }, [refreshFeedingRecordStatus]);

  useAppEvent("onShow", refreshFeedingRecordStatus);

  const hasValidFeedingContext = Boolean(
    feedingContext && feedingHomeId && feedingContext.homeID === feedingHomeId
  );
  const feedingConfirmationPending =
    dpState[dpCodes.feedingRecordConfirmation] === "pending";
  const feedingConfirmationRecord = useMemo(
    () =>
      hasValidFeedingContext && feedingContext
        ? parseFeedingRecordConfirmation(
            dpState[dpCodes.drinkRecordUpload],
            feedingContext
          )
        : null,
    [dpState, feedingContext, hasValidFeedingContext]
  );
  const feedingProfileAvatar = resolveFeedingProfileAvatar({
    isOnline,
    homeId: feedingHomeId,
    context: feedingContext,
    selection: feedingProfile,
  });

  useEffect(() => {
    if (connectedSetupAutoOpenAttempted.current) return;
    const hasSeen = hasSeenConnectedFeaturesSetup(
      feedingHomeId,
      feedingDeviceId
    );
    if (
      !shouldAutoOpenConnectedFeaturesSetup({
        cloudFeaturesAvailable,
        isOnline,
        homeId: feedingHomeId,
        deviceId: feedingDeviceId,
        hasSeen,
      })
    ) {
      return;
    }
    connectedSetupAutoOpenAttempted.current = true;
    markConnectedFeaturesSetupSeen(feedingHomeId, feedingDeviceId);
    setConnectedSetupInitialView("hub");
    setConnectedSetupKey((value) => value + 1);
    setConnectedSetupOpen(true);
  }, [cloudFeaturesAvailable, feedingDeviceId, feedingHomeId, isOnline]);

  const openConnectedSetup = useCallback(
    (view: ConnectedFeaturesSetupView) => {
      if (!cloudFeaturesAvailable || !isOnline) return;
      if (!isPanelDeviceContextReady(feedingHomeId, feedingDeviceId)) {
        showToast({
          title: "Device information is still loading. Try again in a moment.",
          icon: "none",
        });
        return;
      }
      connectedSetupAutoOpenAttempted.current = true;
      markConnectedFeaturesSetupSeen(feedingHomeId, feedingDeviceId);
      setConnectedSetupInitialView(view);
      setConnectedSetupKey((value) => value + 1);
      setConnectedSetupOpen(true);
    },
    [cloudFeaturesAvailable, feedingDeviceId, feedingHomeId, isOnline]
  );

  const openFeedingProfileSheet = useCallback(() => {
    openConnectedSetup("feeding");
  }, [openConnectedSetup]);

  const openSmartPrepSheet = useCallback(() => {
    if (!cloudFeaturesAvailable) return;
    if (!isPanelDeviceContextReady(feedingHomeId, feedingDeviceId)) {
      showToast({
        title: "Device information is still loading. Try again in a moment.",
        icon: "none",
      });
      return;
    }
    openConnectedSetup("smartPrep");
  }, [
    cloudFeaturesAvailable,
    feedingDeviceId,
    feedingHomeId,
    openConnectedSetup,
  ]);

  useEffect(() => {
    if (cloudFeaturesAvailable) return;
    setConnectedSetupOpen(false);
    setFeedingProfileBusy(false);
    setSmartPrepBusy(false);
    setHungryReminderOpen(false);
    setHungryReminderBusy(false);
    setHungryStartAwaitingDevice(false);
  }, [cloudFeaturesAvailable]);

  const handleFeedingProfileSelection = useCallback(
    (selection: FeedingProfileSelection) => {
      saveFeedingProfileSelection(feedingDeviceId, selection);
      setFeedingProfile(selection);
    },
    [feedingDeviceId]
  );

  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const clearFeedingConfirmation = useCallback(
    () => setDp(dpCodes.feedingRecordConfirmation, "none"),
    [setDp]
  );

  useEffect(() => {
    if (awaitingWorkMode && isMaking && workMode === awaitingWorkMode) {
      setAwaitingWorkMode(null);
    }
  }, [awaitingWorkMode, isMaking, workMode]);

  useEffect(() => {
    if (!awaitingWorkMode) return undefined;
    const timer = setTimeout(() => setAwaitingWorkMode(null), 12000);
    return () => clearTimeout(timer);
  }, [awaitingWorkMode]);

  const applyPreset = useCallback(
    (key: Exclude<ScenePresetKey, "custom">) => {
      if (panelDisabled) return;
      const p = SCENE_PRESETS[key];
      setSceneKey(key);
      setSelectedAction("milk");
      setDp(dpCodes.volumeMl, p.ml);
      setDp(dpCodes.tempSet, p.temp);
      setDp(dpCodes.formulaRatio, p.formulaRatio);
      setDp(dpCodes.unitSet, "mL");
    },
    [setDp, panelDisabled]
  );

  useEffect(() => {
    dispatch(syncBrandBannerEverClicked());
    dispatch(hydratePowderBrandFromStorage());
  }, [dispatch]);

  useEffect(() => {
    if (prevWorking.current && !isMaking) {
      setAwaitingWorkMode(null);
      if (
        cloudFeaturesAvailable &&
        dpState[dpCodes.sceneFeedRequest] === "hungry_pending"
      ) {
        setDp(dpCodes.sceneFeedRequest, "none").catch(() => undefined);
      }
      const finished = prevWorkMode.current;
      const wasWater = waterSessionActive || finished === "water";
      const wasPowder = powderSessionActive || finished === "powder";
      const wasClean = finished === "clean";
      if (finished === "milk") {
        setCompletionKind("milk");
        setBottleMadePhase(true);
        setBabyDiaryToastVisible(true);
      } else if (wasWater) {
        setCompletionKind("water");
        setBottleMadePhase(true);
      } else if (wasPowder) {
        setCompletionKind("powder");
        setBottleMadePhase(true);
      } else if (wasClean) {
        setCleanCountdown(HIGH_TEMP_CLEAN_COUNTDOWN_SEC);
      } else {
        setMilkSessionActive(false);
        setWaterSessionActive(false);
        setPowderSessionActive(false);
        setCleanCountdown(HIGH_TEMP_CLEAN_COUNTDOWN_SEC);
      }
      prevWorking.current = isMaking;
      prevWorkMode.current = workMode;
      return;
    }
    prevWorking.current = isMaking;
    prevWorkMode.current = workMode;
  }, [
    dpState,
    cloudFeaturesAvailable,
    isMaking,
    setDp,
    workMode,
    milkSessionActive,
    waterSessionActive,
    powderSessionActive,
  ]);

  /** 完成後 3 秒收起 Bottle Made，並關閉 Baby Diary toast */
  useEffect(() => {
    if (!bottleMadePhase) return undefined;
    const timer = setTimeout(() => {
      setBottleMadePhase(false);
      setBabyDiaryToastVisible(false);
      setMilkSessionActive(false);
      setWaterSessionActive(false);
      setPowderSessionActive(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [bottleMadePhase]);

  useEffect(() => {
    const inClean = isMaking && workMode === "clean";
    if (inClean && !wasInCleanMode.current) {
      setCleanCountdown(HIGH_TEMP_CLEAN_COUNTDOWN_SEC);
    }
    wasInCleanMode.current = inClean;
  }, [isMaking, workMode]);

  useEffect(() => {
    if (!isMaking || workMode !== "clean") return undefined;
    if (cleanCountdown <= 0) return undefined;
    const timer = setInterval(() => {
      setCleanCountdown((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isMaking, workMode, cleanCountdown]);

  const gaugeValue = isCleanSession
    ? HIGH_TEMP_CLEAN_TOTAL_ML
    : powderPrimary
    ? powderG
    : volumeMl;
  const gaugeUnit = powderPrimary ? "g" : "mL";
  const gaugeLabel = powderPrimary
    ? t("gauge_powder_amount")
    : t("gauge_water_amount");

  const statusText = useMemo(
    () =>
      formatConnectionStatus(isOnline, {
        online: t("status_online"),
        offline: t("status_offline"),
        connecting: t("status_connecting"),
      }),
    [isOnline, t]
  );

  const activeSceneTab = useMemo(
    () => SCENE_TABS.find((tab) => tab.key === sceneKey),
    [sceneKey]
  );

  const isWaterActionSelected = selectedAction === "water";
  const isPowderActionSelected = selectedAction === "powder";

  const handleCustomModeSave = (draft: CustomModeDraft) => {
    setSceneKey("custom");
    setDp(dpCodes.volumeMl, clampMl(draft.ml));
    setDp(dpCodes.formulaRatio, draft.formulaRatio);
    setDp(dpCodes.tempSet, draft.temp);
    setDp(dpCodes.unitSet, "mL");
  };

  const openCustomMode = () => {
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    setCustomModeOpen(true);
  };

  const cycleTemp = () => {
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    const order: TempSet[] = [20, 25, 30, 35, 40];
    const idx = order.indexOf(temp);
    const next = order[(idx + 1) % order.length];
    setSceneKey("custom");
    setDp(dpCodes.tempSet, next);
  };

  const makingBarVariant: MakingBarVariant =
    workMode === "water"
      ? "water"
      : workMode === "powder"
      ? "powder"
      : workMode === "clean"
      ? "clean"
      : "milk";

  /** 關機或已送出對應 start 等待設備回應時鎖定 Start */
  const startAwaiting = isWaterActionSelected
    ? awaitingWorkMode === "water"
    : isPowderActionSelected
    ? awaitingWorkMode === "powder"
    : awaitingWorkMode === "milk";
  const startDisabled = panelDisabled || startAwaiting;
  const cleanDisplayTemp = temp;

  const toastIfBlocked = useCallback((): boolean => {
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return true;
    }
    if (childLock) {
      showToast({ title: t("child_lock_on"), icon: "none" });
      return true;
    }
    if (isMaking) return true;
    if (!isOnline) {
      showToast({ title: t("status_offline"), icon: "none" });
      return true;
    }
    return false;
  }, [panelDisabled, childLock, isMaking, isOnline, t]);

  const startMilkWithRecipe = async (recipe: MilkRecipeParams) => {
    if (toastIfBlocked() || startDisabled) return false;
    setMilkSessionActive(true);
    setAwaitingWorkMode("milk");
    const sent = await executeMilkStart(
      recipe,
      (nextRecipe) =>
        publishDpBatch(setDp, buildMilkStartDpPayload(nextRecipe)),
      () => setBoolDp(setDp, dpCodes.workingStatus, true)
    );
    if (!sent) {
      setMilkSessionActive(false);
      setAwaitingWorkMode(null);
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return false;
    }
    return true;
  };

  const handleStartMilk = async () =>
    startMilkWithRecipe(
      resolveMilkRecipeParams({
        sceneKey,
        volumeMl,
        temp,
        formulaRatio,
        powderBrandSelection: brandSet ? powderBrandSelection : null,
      })
    );

  const handleSelectWater = () => {
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    setAwaitingWorkMode(null);
    setSelectedAction((prev) => (prev === "water" ? "milk" : "water"));
  };

  const handleSelectPowder = () => {
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    setAwaitingWorkMode(null);
    setSelectedAction((prev) => (prev === "powder" ? "milk" : "powder"));
  };

  const handleWaterTempChange = (next: TempSet) => {
    if (panelDisabled) return;
    setSceneKey("custom");
    setDp(dpCodes.tempSet, next);
  };

  const handleStartWater = async () => {
    if (toastIfBlocked() || startDisabled) return;
    setWaterSessionActive(true);
    setAwaitingWorkMode("water");
    const sent = await publishDpBatch(setDp, {
      [dpCodes.volumeMl]: volumeMl,
      [dpCodes.tempSet]: temp,
      [dpCodes.unitSet]: "mL",
      [dpCodes.workMode]: "water",
    });
    if (!sent || !(await setBoolDp(setDp, dpCodes.workingStatus, true))) {
      setAwaitingWorkMode(null);
      setWaterSessionActive(false);
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handleStartPowder = async () => {
    if (toastIfBlocked() || startDisabled) return;
    setPowderSessionActive(true);
    setAwaitingWorkMode("powder");
    const sent = await publishDpBatch(setDp, {
      [dpCodes.volumeMl]: volumeMl,
      [dpCodes.formulaWater]: 100,
      [dpCodes.formulaRatio]: formulaRatio,
      [dpCodes.unitSet]: "mL",
      [dpCodes.workMode]: "powder",
    });
    if (!sent || !(await setBoolDp(setDp, dpCodes.workingStatus, true))) {
      setAwaitingWorkMode(null);
      setPowderSessionActive(false);
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handleStart = () => {
    if (isWaterActionSelected) {
      handleStartWater();
      return;
    }
    if (isPowderActionSelected) {
      handleStartPowder();
      return;
    }
    handleStartMilk();
  };

  const handleStopMaking = async () => {
    if (panelDisabled || stopBusy) return;
    setStopBusy(true);
    setAwaitingWorkMode(null);
    const sent = await setBoolDp(setDp, dpCodes.workingStatus, false);
    setStopBusy(false);
    if (!sent) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handleClean = async () => {
    if (isCleanSession || awaitingWorkMode === "clean") return;
    if (toastIfBlocked()) return;
    if (panelDisabled || childLock || !isOnline) return;
    setAwaitingWorkMode("clean");
    const paramsSent = await publishDpBatch(setDp, {
      [dpCodes.workMode]: "clean",
    });
    if (!paramsSent || !(await setBoolDp(setDp, dpCodes.workingStatus, true))) {
      setAwaitingWorkMode(null);
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handleCleanStop = async () => {
    if (!isCleanSession || panelDisabled || stopBusy) return;
    setStopBusy(true);
    const sent = await setBoolDp(setDp, dpCodes.workingStatus, false);
    setStopBusy(false);
    if (!sent) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handlePowerToggle = async () => {
    if (!isOnline) {
      showToast({ title: t("status_offline"), icon: "none" });
      return;
    }
    const sent = await setDp(dpCodes.switch, !switchOn);
    if (!sent) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handleChildLockToggle = async () => {
    if (panelDisabled || !isOnline) return;
    if (!(await setBoolDp(setDp, dpCodes.childLock, !childLock))) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const clearHungryReminder = useCallback(async () => {
    const sent = await setDp(dpCodes.sceneFeedRequest, "none");
    if (!sent) showToast({ title: t("dp_command_failed"), icon: "none" });
    return sent;
  }, [setDp, t]);

  useEffect(() => {
    const sceneFeedRequest = dpState[dpCodes.sceneFeedRequest];
    if (!cloudFeaturesAvailable) {
      hungryReminderShown.current = false;
      return;
    }
    if (
      shouldOpenCryAssistReminder(sceneFeedRequest, hungryReminderShown.current)
    ) {
      hungryReminderShown.current = true;
      setHungryReminderOpen(true);
    }
    if (shouldResetCryAssistReminder(sceneFeedRequest)) {
      hungryReminderShown.current = false;
      setHungryReminderOpen(false);
      setHungryReminderBusy(false);
      setHungryStartAwaitingDevice(false);
    }
  }, [cloudFeaturesAvailable, dpState]);

  useEffect(() => {
    if (
      !hungryStartAwaitingDevice ||
      !isMilkStartConfirmed(isMaking, workMode)
    ) {
      return undefined;
    }

    setHungryStartAwaitingDevice(false);
    clearHungryReminder()
      .then((cleared) => {
        if (cleared) setHungryReminderOpen(false);
      })
      .finally(() => setHungryReminderBusy(false));
    return undefined;
  }, [clearHungryReminder, hungryStartAwaitingDevice, isMaking, workMode]);

  useEffect(() => {
    if (!hungryStartAwaitingDevice || !hungryReminderBusy) return undefined;
    const timer = setTimeout(() => {
      setHungryReminderBusy(false);
      showToast({
        title: Strings.getLang("cryassist_feed_start_not_confirmed"),
        icon: "none",
      });
    }, 12000);
    return () => clearTimeout(timer);
  }, [hungryReminderBusy, hungryStartAwaitingDevice]);

  const handleHungryNotNow = async () => {
    if (hungryReminderBusy) return;
    setHungryReminderBusy(true);
    try {
      const cleared = await clearHungryReminder();
      if (cleared) {
        setHungryStartAwaitingDevice(false);
        setHungryReminderOpen(false);
      }
    } finally {
      setHungryReminderBusy(false);
    }
  };

  const handleHungryStartMaking = async (draft: CryAssistMilkDraft) => {
    if (hungryReminderBusy) return;
    setHungryReminderBusy(true);
    try {
      const started = await startMilkWithRecipe(
        buildCryAssistMilkRecipe(draft)
      );
      if (started) {
        if (isCryAssistDraftChanged(hungryReminderInitialDraft, draft)) {
          setSceneKey("custom");
        }
        setHungryStartAwaitingDevice(true);
        return;
      }
      setHungryReminderBusy(false);
    } catch {
      setHungryReminderBusy(false);
    }
  };

  const feedingFeatureStatus = getEuropeanCloudFeatureStatusText(
    cloudFeatureAvailability,
    hasValidFeedingContext && feedingProfile?.childName
      ? feedingProfile.childName
      : "Choose baby profile"
  );
  const smartPrepFeatureStatus = getEuropeanCloudFeatureStatusText(
    cloudFeatureAvailability,
    "Choose CryAssist devices"
  );
  const cloudFeatureInteractionEnabled = cloudFeaturesAvailable && isOnline;

  const handleBrandBanner = () => {
    if (panelDisabled) return;
    dispatch(markBrandBannerEverClicked());
    if (hasSavedPowderBrands) {
      router.push("/powder-brand-settings");
      return;
    }
    router.push("/powder-brand");
  };

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.headerTop}>
          <Image src={Res.maxiCosiLogo} className={styles.logo} />
          <View className={styles.headerIcons}>
            <Image src={Res.icNotification} className={styles.headerIcon} />
            <Image src={Res.icHelp} className={styles.headerIcon} />
          </View>
        </View>
        <View className={styles.titleRow}>
          <View className={styles.titleGroup}>
            <Text className={styles.appTitle}>{t("app_title")}</Text>
            <View
              className={styles.powerTap}
              onClick={() => {
                handlePowerToggle();
              }}
            >
              <Image
                src={switchOn ? Res.powerIcon.on : Res.powerIcon.off}
                className={styles.headerPowerIcon}
              />
            </View>
          </View>
          <View className={styles.onlineRow}>
            <View
              className={clsx(
                styles.onlineDot,
                isOnline && styles.onlineDotActive
              )}
            />
            <Text className={styles.onlineText}>{statusText}</Text>
            <Image
              src={isOnline ? Res.icConnected : Res.icOffline}
              className={styles.headerWifiIcon}
            />
          </View>
        </View>
      </View>

      <View className={styles.pageBody}>
        <View
          className={clsx(
            styles.mainPanel,
            (!isOnline || panelDisabled) && styles.mainPanelOffline
          )}
        >
          <View className={styles.dashboardCard}>
            <View className={styles.panelGaugeCluster}>
              <View className={styles.dashboardCardTop}>
                <View className={styles.gaugeSlot}>
                  <AmountGauge
                    value={gaugeValue}
                    unit={gaugeUnit}
                    label={gaugeLabel}
                    min={0}
                    max={powderPrimary ? 200 : GAUGE_ML_MAX}
                    dimmed={
                      panelDisabled || !isOnline || childLock || isMakingUi
                    }
                  />
                </View>

                <View className={styles.gaugeDivider} />
                <View className={styles.gapAfterDivider} />

                <View className={styles.dashboardMiddle}>
                  <View className={styles.dashboardMiddleInner}>
                    {isCleanSession ? (
                      <WaterTemperaturePanel
                        temp={cleanDisplayTemp}
                        fixedTemp={cleanDisplayTemp}
                        disabled
                        onChange={() => undefined}
                      />
                    ) : isMakingUi ? (
                      <View className={styles.middleContentSpread}>
                        <MakingModeBar
                          variant={makingBarVariant}
                          modeKey={sceneKey}
                          modeLabelKey={activeSceneTab?.labelKey}
                        />
                      </View>
                    ) : isWaterActionSelected ? (
                      <WaterTemperaturePanel
                        temp={temp}
                        disabled={panelDisabled}
                        onChange={handleWaterTempChange}
                      />
                    ) : isPowderActionSelected ? (
                      <PowderCautionPanel />
                    ) : (
                      <View className={styles.metrics}>
                        <View className={styles.metric}>
                          <View className={styles.metricValue}>
                            <Text className={styles.metricValueNum}>
                              {volumeMl}
                            </Text>
                            <Text className={styles.metricValueSuffix}>mL</Text>
                          </View>
                          <Text className={styles.metricLabel}>
                            {t("metric_water")}
                          </Text>
                        </View>
                        <View className={styles.metric}>
                          <View className={styles.metricValue}>
                            <Text className={styles.metricValueNum}>
                              {powderG}
                            </Text>
                            <Text className={styles.metricValueSuffix}>g</Text>
                          </View>
                          <Text className={styles.metricLabel}>
                            {t("metric_powder")}
                          </Text>
                        </View>
                        <View
                          className={clsx(
                            styles.metric,
                            panelDisabled && styles.metricDisabled
                          )}
                          onClick={panelDisabled ? undefined : cycleTemp}
                        >
                          <View className={styles.metricValue}>
                            <Text className={styles.metricValueNum}>
                              {temp}
                            </Text>
                            <Text className={styles.metricValueSuffix}>°C</Text>
                          </View>
                          <Text className={styles.metricLabel}>
                            {t("metric_temp")}
                          </Text>
                        </View>
                        <View
                          className={clsx(
                            styles.metric,
                            styles.metricAfterDivider,
                            styles.metricTap,
                            panelDisabled && styles.metricDisabled
                          )}
                          onClick={panelDisabled ? undefined : openCustomMode}
                        >
                          <View className={styles.metricValue}>
                            <Image
                              src={Res.icEditUri}
                              className={styles.metricEditIcon}
                            />
                          </View>
                          <Text className={styles.metricLabel}>
                            {t("metric_edit")}
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              </View>

              {!isMakingUi &&
                !isCleanSession &&
                !isWaterActionSelected &&
                !isPowderActionSelected && (
                  <View className={styles.dashboardCardFooter}>
                    {showBrandBanner ? (
                      <>
                        <View className={styles.gapMiddleToBrand} />
                        <View
                          className={clsx(
                            styles.brandBannerSlot,
                            panelDisabled && styles.panelBlock
                          )}
                        >
                          <BrandBanner
                            clicked={!brandSet && brandBannerClicked}
                            customRatio={
                              isCustomBrand && powderBrandSelection
                                ? {
                                    waterMl: powderBrandSelection.waterMl,
                                    powderG: powderBrandSelection.powderG,
                                  }
                                : null
                            }
                            brandSummary={
                              brandSet && !isCustomBrand && powderBrandSelection
                                ? {
                                    brand: powderBrandSelection.brandLabel,
                                    series: powderBrandSelection.seriesLabel,
                                    stage: powderBrandSelection.stageLabel,
                                  }
                                : null
                            }
                            onClick={
                              panelDisabled
                                ? () => undefined
                                : handleBrandBanner
                            }
                          />
                        </View>
                      </>
                    ) : null}
                    <View
                      className={
                        showBrandBanner
                          ? styles.gapBrandToTabs
                          : styles.gapMiddleToTabs
                      }
                    />
                    <View
                      className={clsx(
                        styles.modeTabsSlot,
                        panelDisabled && styles.panelBlock
                      )}
                    >
                      <SceneModeTabs
                        tabs={SCENE_TABS}
                        activeKey={sceneKey}
                        onChange={applyPreset}
                        disabled={panelDisabled}
                      />
                    </View>
                  </View>
                )}
            </View>
          </View>

          <View className={styles.mainPanelSpacer} />

          <View
            className={clsx(
              styles.actions,
              (isMakingUi || bottleMadePhase) && styles.actionsMaking
            )}
          >
            {bottleMadePhase ? (
              <BottleMadeButton
                labelKey={
                  completionKind === "water"
                    ? "water_dispensed"
                    : completionKind === "powder"
                    ? "powder_dispensed"
                    : "bottle_made"
                }
              />
            ) : isMakingUi ? (
              <MakingActionsPanel
                onStop={() => {
                  handleStopMaking();
                }}
                stopDisabled={panelDisabled || stopBusy}
                stopLabelKey={
                  workMode === "water"
                    ? "action_stop_water"
                    : workMode === "powder"
                    ? "action_stop_powder"
                    : "action_stop_making"
                }
              />
            ) : (
              <>
                <View
                  className={clsx(
                    styles.sideBtn,
                    isCleanSession && styles.actionDisabled
                  )}
                  onClick={isCleanSession ? undefined : handleSelectWater}
                >
                  <View className={styles.actionIconRow}>
                    <View
                      className={clsx(
                        styles.sideBtnCircle,
                        isWaterActionSelected && styles.sideBtnCircleSelected
                      )}
                    >
                      <View
                        className={clsx(
                          styles.sideBtnCircleInner,
                          isWaterActionSelected &&
                            styles.sideBtnCircleInnerSelected
                        )}
                      >
                        <Image
                          src={
                            isWaterActionSelected
                              ? Res.actionButtonIcons.waterActive
                              : Res.actionButtonIcons.water
                          }
                          className={styles.sideIcon}
                        />
                      </View>
                    </View>
                  </View>
                  <Text className={styles.sideLabel}>
                    {t("action_water_only")}
                  </Text>
                </View>
                <View
                  className={clsx(
                    styles.startCol,
                    (startDisabled || isCleanSession) && styles.actionDisabled
                  )}
                  onClick={
                    startDisabled || isCleanSession ? undefined : handleStart
                  }
                >
                  <View className={styles.actionIconRow}>
                    <View className={styles.startBtn}>
                      <Image
                        src={Res.actionButtonIcons.play}
                        className={styles.startIcon}
                      />
                    </View>
                  </View>
                  <Text
                    className={clsx(
                      styles.startLabel,
                      (startDisabled || isCleanSession) &&
                        styles.actionLabelDisabled
                    )}
                  >
                    {t("action_start")}
                  </Text>
                </View>
                <View
                  className={clsx(
                    styles.sideBtn,
                    isCleanSession && styles.actionDisabled
                  )}
                  onClick={isCleanSession ? undefined : handleSelectPowder}
                >
                  <View className={styles.actionIconRow}>
                    <View
                      className={clsx(
                        styles.sideBtnCircle,
                        isPowderActionSelected && styles.sideBtnCircleSelected
                      )}
                    >
                      <View
                        className={clsx(
                          styles.sideBtnCircleInner,
                          isPowderActionSelected &&
                            styles.sideBtnCircleInnerSelected
                        )}
                      >
                        <Image
                          src={
                            isPowderActionSelected
                              ? Res.actionButtonIcons.powderActive
                              : Res.actionButtonIcons.powder
                          }
                          className={styles.sideIcon}
                        />
                      </View>
                    </View>
                  </View>
                  <Text className={styles.sideLabel}>
                    {t("action_powder_only")}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        <View className={styles.secondaryList}>
          <View
            className={clsx(
              styles.settingsRowCard,
              isCleanSession && styles.settingsRowCardCleanActive,
              (panelDisabled || childLock || awaitingWorkMode === "clean") &&
                !isCleanSession &&
                styles.disabled
            )}
            onClick={
              isCleanSession || awaitingWorkMode === "clean"
                ? undefined
                : () => {
                    handleClean();
                  }
            }
          >
            <View className={styles.cleanRowTextCol}>
              <Text className={styles.settingsRowLabel}>
                {isCleanSession
                  ? t("high_temp_cleaning")
                  : t("row_high_temp_clean")}
              </Text>
              {isCleanSession ? (
                <Text className={styles.cleanRowSubtext}>
                  {t("clean_milk_on_hold")}
                </Text>
              ) : null}
            </View>
            {isCleanSession ? (
              <HighTempCleanStopButton
                secondsLeft={cleanCountdown}
                disabled={panelDisabled || stopBusy}
                onStop={() => {
                  handleCleanStop();
                }}
              />
            ) : (
              <View className={styles.cleanRowBtn}>
                <Image
                  src={Res.actionButtonIcons.clean}
                  className={styles.cleanRowIcon}
                />
              </View>
            )}
          </View>
          {babyDiaryToastVisible && cloudFeaturesAvailable ? (
            <View className={styles.diaryToastSlot}>
              <BabyDiarySnackbar
                onClose={() => {
                  setBabyDiaryToastVisible(false);
                  setMilkSessionActive(false);
                }}
              />
            </View>
          ) : (
            <View
              className={clsx(
                styles.settingsRowCard,
                panelDisabled && styles.disabled
              )}
              onClick={
                panelDisabled || !isOnline
                  ? undefined
                  : () => handleChildLockToggle().catch(() => undefined)
              }
            >
              <Text className={styles.settingsRowLabel}>
                {t("row_child_lock")}
              </Text>
              <View
                className={clsx(
                  styles.cleanRowBtn,
                  childLock && styles.cleanRowBtnActive
                )}
              >
                <Image
                  src={
                    childLock
                      ? Res.actionButtonIcons.lockActive
                      : Res.actionButtonIcons.lock
                  }
                  className={styles.cleanRowIcon}
                />
              </View>
            </View>
          )}
          <View
            className={clsx(
              styles.settingsRowCard,
              !cloudFeatureInteractionEnabled && styles.disabled
            )}
            onClick={
              cloudFeatureInteractionEnabled
                ? openFeedingProfileSheet
                : undefined
            }
          >
            <View className={styles.cleanRowTextCol}>
              <Text className={styles.settingsRowLabel}>Feeding record</Text>
              <Text className={styles.settingsRowSubtext}>
                {feedingFeatureStatus}
              </Text>
            </View>
            <View className={styles.cleanRowBtn}>
              {feedingProfileBusy ? (
                <View className={styles.feedingProfileSpinner} />
              ) : (
                <Image
                  src={feedingProfileAvatar || Res.actionButtonIcons.baby}
                  className={
                    feedingProfileAvatar
                      ? styles.feedingProfileAvatar
                      : styles.cleanRowIcon
                  }
                  mode="aspectFill"
                />
              )}
            </View>
          </View>
          <View
            className={clsx(
              styles.settingsRowCard,
              !cloudFeatureInteractionEnabled && styles.disabled
            )}
            onClick={
              cloudFeatureInteractionEnabled ? openSmartPrepSheet : undefined
            }
          >
            <View className={styles.cleanRowTextCol}>
              <Text className={styles.settingsRowLabel}>
                Smart Prep Reminder
              </Text>
              <Text className={styles.settingsRowSubtext}>
                {smartPrepFeatureStatus}
              </Text>
            </View>
            <View className={styles.cleanRowBtn}>
              {smartPrepBusy ? (
                <View className={styles.feedingProfileSpinner} />
              ) : (
                <Image
                  src={Res.icNotification}
                  className={styles.cleanRowIcon}
                />
              )}
            </View>
          </View>
        </View>
      </View>

      {customModeOpen && (
        <CustomModeSettingsPanel
          ml={volumeMl}
          formulaRatio={formulaRatio}
          temp={temp}
          onSave={handleCustomModeSave}
          onClose={() => setCustomModeOpen(false)}
          saveDisabled={panelDisabled || isMaking || childLock}
        />
      )}

      {cloudFeaturesAvailable && connectedSetupOpen ? (
        <ConnectedFeaturesSetupSheet
          key={connectedSetupKey}
          initialView={connectedSetupInitialView}
          deviceId={feedingDeviceId}
          homeId={feedingHomeId}
          isOnline={isOnline}
          currentChildId={
            hasValidFeedingContext ? feedingContext?.childID : undefined
          }
          feedingProfile={feedingProfile}
          hasValidFeedingContext={hasValidFeedingContext}
          onClose={() => setConnectedSetupOpen(false)}
          onFeedingSelectionChange={handleFeedingProfileSelection}
          onFeedingBusyChange={setFeedingProfileBusy}
          onSmartPrepBusyChange={setSmartPrepBusy}
        />
      ) : null}

      {cloudFeaturesAvailable && feedingConfirmationPending ? (
        <FeedingRecordConfirmationModal
          context={hasValidFeedingContext ? feedingContext : null}
          record={feedingConfirmationRecord}
          isOnline={isOnline}
          clearConfirmation={clearFeedingConfirmation}
        />
      ) : null}

      {cloudFeaturesAvailable && hungryReminderOpen ? (
        <CryAssistFeedRequestModal
          initialDraft={hungryReminderInitialDraft}
          busy={hungryReminderBusy}
          startDisabled={isMaking}
          onCancel={() => handleHungryNotNow().catch(() => undefined)}
          onStart={(draft) =>
            handleHungryStartMaking(draft).catch(() => undefined)
          }
        />
      ) : null}
    </View>
  );
};

export default HomePage;
