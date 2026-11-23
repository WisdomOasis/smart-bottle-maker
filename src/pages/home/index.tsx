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
  ScrollView,
  showToast,
  router,
  useAppEvent,
  getLaunchOptionsSync,
} from "@ray-js/ray";
import { useActions } from "@ray-js/panel-sdk";
import useDeviceConnectivity from "@/hooks/useDeviceConnectivity";
import Res from "@/res";
import { IC_CONNECTION_OFFLINE_URI } from "@/res/icConnectionOfflineUri";
import { IC_CONNECTION_ONLINE_URI } from "@/res/icConnectionOnlineUri";
import dpCodes from "@/constant/dpCodes";
import {
  GAUGE_POWDER_MAX,
  GAUGE_POWDER_MIN,
  ML_MAX,
  ML_MIN,
  ML_STEP,
  OZ_MAX,
  OZ_MIN,
  OZ_STEP,
} from "@/constant/presets";
import AmountGauge from "@/components/AmountGauge";
import CustomModeSettingsPanel, {
  type CustomModeDraft,
} from "@/components/CustomModeSettingsPanel";
import BrandBanner from "@/components/BrandBanner";
import DeviceStatusAlertToast from "@/components/DeviceStatusAlertToast";
import DeviceStatusBottomPanel from "@/components/DeviceStatusBottomPanel";
import MakingModeBar, {
  type MakingBarVariant,
} from "@/components/MakingModeBar";
import MakingActionsPanel from "@/components/MakingActionsPanel";
import BottleMadeButton from "@/components/BottleMadeButton";
import WaterTemperaturePanel from "@/components/WaterTemperaturePanel";
import PowderCautionPanel from "@/components/PowderCautionPanel";
import BabyDiarySnackbar from "@/components/BabyDiarySnackbar";
import FeedingProfileSheet from "@/components/FeedingProfileSheet";
import FeedingRecordConfirmationModal from "@/components/FeedingRecordConfirmationModal";
import CryAssistFeedRequestModal from "@/components/CryAssistFeedRequestModal";
import HighTempCleanStopButton from "@/components/HighTempCleanStopButton";
import HighTempCleanConfirmModal from "@/components/HighTempCleanConfirmModal";
import PanelNavBar from "@/components/PanelNavBar";
import LayoutFooter from "@/components/LayoutFooter";
import SmartPrepReminderSheet from "@/components/SmartPrepReminderSheet";
import SmartPrepSetupSnackbar from "@/components/SmartPrepSetupSnackbar";
import FormulaSavedToast from "@/components/FormulaSavedToast";
import FirstTimeGuide from "@/components/FirstTimeGuide";
import { useEuropeanCloudAvailability } from "@/hooks/useEuropeanCloudAvailability";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import {
  saveFeedingProfileSelection,
  type FeedingProfileSelection,
} from "@/constant/feedingRecordStorage";
import { parseFeedingContextRaw } from "@/utils/feedingContextValue";
import {
  hasCompletedSmartPrepSetup,
  isSmartPrepPreparedFresh,
  markSmartPrepSetupComplete,
  shouldShowSmartPrepSetupSnackbar,
} from "@/utils/connectedFeaturesSetup";
import {
  hasSeenFirstTimeGuide,
  markFirstTimeGuideSeen,
} from "@/constant/firstTimeGuideStorage";
import {
  prepareSmartPrep,
  type SmartPrepPreparedContext,
} from "@/services/smartPrep";
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
  selectPowderBrandSelection,
  syncBrandBannerEverClicked,
} from "@/redux/modules/powderBrandSlice";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import {
  calcBrewPowderGrams,
  clampMl,
  clampOz,
  formulaRatioToScoopGrams,
  getVolumeFromDp,
  isWorking,
  mlToOz,
  ozToMl,
  parseSensorInstalled,
  parseTemp,
  parseUnit,
  parseWorkMode,
  roundToTenth,
  scoopPowderGramsToFormulaRatio,
  SCOOP_POWDER_STEP_G,
  type TempSet,
  type WorkMode,
} from "@/utils/bottleMaker";
import {
  getAssemblyStatusesForMode,
  hasAssemblyBlocker,
} from "@/utils/deviceAssemblyStatus";
import { createDpSetter, publishDpBatch, setBoolDp } from "@/utils/dpControl";
import {
  buildMilkStartDpPayload,
  resolveMilkRecipeParams,
} from "@/utils/milkRecipe";
import { useCustomNavTopInset } from "@/utils/customNavInset";
import {
  shouldOpenCryAssistReminder,
  shouldResetCryAssistReminder,
} from "@/utils/cryassistReminder";
import {
  buildCryAssistMilkRecipe,
  createCryAssistMilkDraft,
  type CryAssistMilkDraft,
} from "@/utils/cryassistMilkDraft";
import { parseFeedingRecordConfirmation } from "@/utils/feedingRecordConfirmation";
import { executeMilkStart, isMilkStartConfirmed } from "@/utils/milkStart";
import { isEuropeanCloudAvailable } from "@/utils/europeanCloudAvailability";
import {
  isPanelDeviceContextReady,
  resolvePanelDeviceId,
} from "@/utils/panelDeviceContext";
import { hidePanelFloatingButtons } from "@/utils/panelChrome";
import { useHidePanelFloatingButtons } from "@/hooks/useHidePanelFloatingButtons";
import styles from "./index.module.less";

type ActionKind = "milk" | "water" | "powder";
type CompletionKind = "milk" | "water" | "powder" | "clean";
/** 行程結束後感測器回穩前，暫不顯示組裝紅 banner */
const POST_SESSION_BANNER_SETTLE_MS = 5000;
/** 進 App／重新上線／開機後感測器回穩窗，避免誤出紅 banner */
const SENSOR_STATUS_SETTLE_MS = 3000;

/** Survive remounts so storage hydrate only runs once per JS context */
let powderBrandHydratedOnce = false;

const HomePage: React.FC = () => {
  useHidePanelFloatingButtons();
  const t = (key: I18nKey) => Strings.getLang(key);

  const {
    switchOn,
    isOnline,
    panelDisabled,
    devInfo,
    dpState,
    refreshAssemblyStatus,
  } = useDeviceConnectivity();
  const cloudFeatureAvailability = useEuropeanCloudAvailability();
  const cloudFeaturesAvailable = isEuropeanCloudAvailable(
    cloudFeatureAvailability
  );
  const actions = useActions();
  const dispatch = useAppDispatch();
  const brandSet = useSelector(selectPowderBrandConfigured);
  const powderBrandSelection = useSelector(selectPowderBrandSelection);
  const brandBannerClicked = useSelector(selectBrandBannerEverClicked);

  const [customModeOpen, setCustomModeOpen] = useState(false);
  const [deviceStatusPanelOpen, setDeviceStatusPanelOpen] = useState(false);
  /** 状态弹窗 checklist 来源：当前冲泡模式 or 高温清洁 */
  const [statusPanelMode, setStatusPanelMode] = useState<ActionKind | "clean">(
    "milk"
  );
  const [cleanSessionActive, setCleanSessionActive] = useState(false);
  const [sensorsSettling, setSensorsSettling] = useState(false);
  const [bottleMadePhase, setBottleMadePhase] = useState(false);
  const [completionKind, setCompletionKind] = useState<CompletionKind>("milk");
  /** 沖奶／出水／出粉／清潔剛結束：抑制紅 banner，等感測器回穩 */
  const [suppressAssemblyBanners, setSuppressAssemblyBanners] = useState(false);
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
  const [feedingHomeId, setFeedingHomeId] = useState("");
  const [, setFeedingProfileBusy] = useState(false);
  const [, setSmartPrepBusy] = useState(false);
  const [feedingSheetOpen, setFeedingSheetOpen] = useState(false);
  const [cleanConfirmOpen, setCleanConfirmOpen] = useState(false);
  const [smartPrepSheetOpen, setSmartPrepSheetOpen] = useState(false);
  const [smartPrepPrepared, setSmartPrepPrepared] =
    useState<SmartPrepPreparedContext | null>(null);
  const [smartPrepPreparedAt, setSmartPrepPreparedAt] = useState(0);
  const [smartPrepSetupDone, setSmartPrepSetupDone] = useState(false);
  const [cryAssistDeviceAvailable, setCryAssistDeviceAvailable] =
    useState(false);
  const [smartPrepSavedToastVisible, setSmartPrepSavedToastVisible] =
    useState(false);
  const [firstGuideSeen, setFirstGuideSeen] = useState(hasSeenFirstTimeGuide);
  const [guideTargetId, setGuideTargetId] = useState<string | null>(null);
  const [hungryReminderOpen, setHungryReminderOpen] = useState(false);
  const [hungryReminderBusy, setHungryReminderBusy] = useState(false);
  const [hungryStartAwaitingDevice, setHungryStartAwaitingDevice] =
    useState(false);

  const prevWorking = useRef(false);
  const prevWorkMode = useRef<WorkMode>("milk");
  const wasInCleanMode = useRef(false);
  const prevSwitchOn = useRef<boolean | null>(null);
  const prevOnline = useRef<boolean | null>(null);
  const sensorSettleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const sensorSnapshotOnPowerOn = useRef<{
    milkbox: unknown;
    funnel: unknown;
    bottle: unknown;
    watertank: unknown;
  } | null>(null);
  const suppressStaleSensorsAfterPowerOn = useRef(false);
  const lastTrustedSensors = useRef({
    milkbox: true,
    funnel: true,
    bottle: true,
    watertank: true,
  });
  const hungryReminderShown = useRef(false);
  const homeInfoRequestId = useRef(0);
  const cryAssistProbeId = useRef(0);
  const probeCryAssistDevicesRef = useRef<() => void>(() => undefined);
  const beginSensorSettleRef = useRef<() => void>(() => undefined);

  const navTopInset = useCustomNavTopInset();
  const pageEdgeInset = Math.max(navTopInset - 12, 64);

  const isCustomBrand = powderBrandSelection?.brandId === CUSTOM_BRAND_ID;
  const showBrandBanner = !brandSet || Boolean(powderBrandSelection);

  const workMode = parseWorkMode(dpState[dpCodes.workMode]);
  const isMaking = isWorking(dpState[dpCodes.workingStatus]);
  const childLock = isWorking(dpState[dpCodes.childLock]);
  const isCleanSession = isMaking && workMode === "clean";
  const isMakingUi = isMaking && !isCleanSession;
  const unit = parseUnit(dpState[dpCodes.unitSet]);
  const temp = parseTemp(dpState[dpCodes.tempSet]);
  const formulaRatio = Number(dpState[dpCodes.formulaRatio] ?? 130);
  const formulaWaterMl = Number(dpState[dpCodes.formulaWater] ?? 100);
  const volumeMl = getVolumeFromDp(dpState, unit);
  const volumeOz = clampOz(
    Number(dpState[dpCodes.volumeOz] ?? mlToOz(volumeMl))
  );
  const displayVolume = unit === "oz" ? volumeOz : volumeMl;
  /** 主页冲奶单次粉量（PRD：水量 / 每勺水量 × 每勺粉量） */
  const powderG = calcBrewPowderGrams(volumeMl, formulaWaterMl, formulaRatio);
  /** Powder Only：设备 g 设定，对应每勺/单次出粉 2.5–35g */
  const scoopPowderG = formulaRatioToScoopGrams(formulaRatio);
  const feedingDeviceId = resolvePanelDeviceId(
    devInfo?.devId,
    getLaunchOptionsSync()?.query
  );
  const feedingContext = useMemo(
    () => parseFeedingContextRaw(dpState[dpCodes.feedingContext]),
    [dpState]
  );
  const hungryReminderInitialDraft = useMemo(
    () =>
      createCryAssistMilkDraft({
        volumeMl,
        temp,
        formulaWater: formulaWaterMl,
        formulaRatio,
      }),
    [formulaRatio, formulaWaterMl, temp, volumeMl]
  );

  const refreshFeedingRecordStatus = useCallback(() => {
    const requestId = homeInfoRequestId.current + 1;
    homeInfoRequestId.current = requestId;
    try {
      ty.home.getCurrentHomeInfo({
        success: (home: { homeId?: string | number }) => {
          if (homeInfoRequestId.current !== requestId) return;
          setFeedingHomeId(String(home.homeId || ""));
        },
        fail: () => {
          if (homeInfoRequestId.current !== requestId) return;
          setFeedingHomeId("");
        },
      });
    } catch {
      if (homeInfoRequestId.current !== requestId) return;
      setFeedingHomeId("");
    }
  }, []);

  useEffect(() => {
    refreshFeedingRecordStatus();
    hidePanelFloatingButtons();
    return () => {
      homeInfoRequestId.current += 1;
    };
  }, [refreshFeedingRecordStatus]);

  useAppEvent("onShow", () => {
    hidePanelFloatingButtons();
    refreshFeedingRecordStatus();
    probeCryAssistDevicesRef.current();
    /* 回前景重拉 + 回穩，避免同步瞬間用殘值誤出紅 banner */
    refreshAssemblyStatus(true);
    beginSensorSettleRef.current();
  });

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

  useEffect(() => {
    setSmartPrepSetupDone(
      hasCompletedSmartPrepSetup(feedingHomeId, feedingDeviceId)
    );
  }, [feedingDeviceId, feedingHomeId]);

  const showSmartPrepSnackbar = shouldShowSmartPrepSetupSnackbar({
    deviceId: feedingDeviceId,
    completed: smartPrepSetupDone,
    hasCryAssistDevice: cryAssistDeviceAvailable,
  });
  const showFirstGuide =
    !firstGuideSeen &&
    !isMakingUi &&
    !isCleanSession &&
    !customModeOpen &&
    !deviceStatusPanelOpen &&
    !bottleMadePhase &&
    !feedingSheetOpen &&
    !smartPrepSheetOpen &&
    !hungryReminderOpen &&
    !feedingConfirmationPending;
  const finishFirstGuide = useCallback(() => {
    markFirstTimeGuideSeen();
    setFirstGuideSeen(true);
    setGuideTargetId(null);
  }, []);
  const handleGuideTargetChange = useCallback((targetId: string | null) => {
    setGuideTargetId(targetId);
  }, []);

  const probeCryAssistDevices = useCallback(() => {
    if (smartPrepSetupDone || !isOnline) return;
    if (!isPanelDeviceContextReady(feedingHomeId, feedingDeviceId)) return;
    const requestId = cryAssistProbeId.current + 1;
    cryAssistProbeId.current = requestId;
    prepareSmartPrep({
      homeId: feedingHomeId,
      deviceId: feedingDeviceId,
    })
      .then((prepared) => {
        if (cryAssistProbeId.current !== requestId) return;
        const hasDevice = prepared.devices.length > 0;
        setCryAssistDeviceAvailable(hasDevice);
        setSmartPrepPrepared(hasDevice ? prepared : null);
        setSmartPrepPreparedAt(hasDevice ? Date.now() : 0);
      })
      .catch(() => undefined);
  }, [feedingDeviceId, feedingHomeId, isOnline, smartPrepSetupDone]);
  probeCryAssistDevicesRef.current = probeCryAssistDevices;

  useEffect(() => {
    setCryAssistDeviceAvailable(false);
    setSmartPrepPrepared(null);
    setSmartPrepPreparedAt(0);
  }, [feedingDeviceId, feedingHomeId]);

  useEffect(() => {
    probeCryAssistDevices();
  }, [probeCryAssistDevices]);

  const openSmartPrepSheet = useCallback(() => {
    if (!isOnline) {
      showToast({ title: t("status_offline"), icon: "none" });
      return;
    }
    if (!isPanelDeviceContextReady(feedingHomeId, feedingDeviceId)) {
      showToast({
        title: "Device information is still loading. Try again in a moment.",
        icon: "none",
      });
      return;
    }
    setSmartPrepSheetOpen(true);
  }, [feedingDeviceId, feedingHomeId, isOnline, t]);

  const handleFeedingProfileSelection = useCallback(
    (selection: FeedingProfileSelection) => {
      saveFeedingProfileSelection(feedingDeviceId, selection);
    },
    [feedingDeviceId]
  );

  const completeSmartPrepSetup = useCallback(() => {
    markSmartPrepSetupComplete(feedingHomeId, feedingDeviceId);
    setSmartPrepSetupDone(true);
    setSmartPrepSheetOpen(false);
    setSmartPrepSavedToastVisible(true);
  }, [feedingDeviceId, feedingHomeId]);

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
    const mode = awaitingWorkMode;
    const timer = setTimeout(() => {
      setAwaitingWorkMode(null);
      if (mode === "clean") {
        setCleanSessionActive(false);
      }
      const failKey =
        mode === "water"
          ? "toast_start_failed_water"
          : mode === "powder"
          ? "toast_start_failed_powder"
          : mode === "clean"
          ? "toast_start_failed_clean"
          : "toast_start_failed";
      showToast({ title: t(failKey), icon: "none" });
    }, 12000);
    return () => clearTimeout(timer);
  }, [awaitingWorkMode, t]);

  useEffect(() => {
    if (powderBrandHydratedOnce) return;
    powderBrandHydratedOnce = true;
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
      const wasClean = cleanSessionActive || finished === "clean";
      /* 出水／出粉結束後回到 Formula，避免還要再點一次取消 highlight */
      if (wasWater || wasPowder) {
        setSelectedAction("milk");
      }
      if (wasClean) {
        setCleanSessionActive(false);
        setWaterSessionActive(false);
        setPowderSessionActive(false);
        setMilkSessionActive(false);
        setCleanCountdown(HIGH_TEMP_CLEAN_COUNTDOWN_SEC);
        /* 與沖奶完成一致：綠色完成鈕，不用系統黑 toast */
        setCompletionKind("clean");
        setBottleMadePhase(true);
        setSuppressAssemblyBanners(true);
        beginSensorSettleRef.current();
      } else if (finished === "milk") {
        setCompletionKind("milk");
        setBottleMadePhase(true);
        setBabyDiaryToastVisible(true);
        setSuppressAssemblyBanners(true);
        beginSensorSettleRef.current();
      } else if (wasWater) {
        setCompletionKind("water");
        setBottleMadePhase(true);
        /* 出水後水位／奶瓶感測器常短暫抖動，先抑制紅 banner */
        setSuppressAssemblyBanners(true);
        beginSensorSettleRef.current();
      } else if (wasPowder) {
        setCompletionKind("powder");
        setBottleMadePhase(true);
        setSuppressAssemblyBanners(true);
        beginSensorSettleRef.current();
      } else {
        setMilkSessionActive(false);
        setWaterSessionActive(false);
        setPowderSessionActive(false);
        setCleanSessionActive(false);
        setCleanCountdown(HIGH_TEMP_CLEAN_COUNTDOWN_SEC);
      }
      prevWorking.current = isMaking;
      prevWorkMode.current = workMode;
      return;
    }
    prevWorking.current = isMaking;
    prevWorkMode.current = workMode;
  }, [
    cleanSessionActive,
    cloudFeaturesAvailable,
    dpState,
    isMaking,
    setDp,
    t,
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

  const isWaterActionSelected = selectedAction === "water";
  const isPowderActionSelected = selectedAction === "powder";
  const powderPrimary = isPowderActionSelected;

  const gaugeValue = isCleanSession
    ? HIGH_TEMP_CLEAN_TOTAL_ML
    : powderPrimary
    ? scoopPowderG
    : displayVolume;
  const gaugeUnit = powderPrimary
    ? t("unit_g")
    : unit === "oz"
    ? t("unit_oz")
    : t("unit_ml");
  const gaugeLabel = powderPrimary
    ? t("gauge_powder_amount")
    : t("gauge_water_amount");
  const gaugeMin = powderPrimary
    ? GAUGE_POWDER_MIN
    : unit === "oz"
    ? OZ_MIN
    : ML_MIN;
  const gaugeMax = powderPrimary
    ? GAUGE_POWDER_MAX
    : unit === "oz"
    ? OZ_MAX
    : ML_MAX;
  const gaugeStep = powderPrimary
    ? SCOOP_POWDER_STEP_G
    : unit === "oz"
    ? OZ_STEP
    : ML_STEP;
  const gaugeEditable =
    !isCleanSession && !isMakingUi && !panelDisabled && !childLock && isOnline;

  const handleGaugeChange = useCallback(
    (next: number) => {
      if (!gaugeEditable) return;
      if (powderPrimary) {
        setDp(dpCodes.formulaRatio, scoopPowderGramsToFormulaRatio(next));
        return;
      }
      if (unit === "oz") {
        const nextOz = clampOz(next);
        setDp(dpCodes.volumeOz, nextOz);
        setDp(dpCodes.volumeMl, clampMl(ozToMl(nextOz)));
        return;
      }
      const nextMl = clampMl(next);
      setDp(dpCodes.volumeMl, nextMl);
      setDp(dpCodes.volumeOz, clampOz(mlToOz(nextMl)));
    },
    [gaugeEditable, powderPrimary, setDp, unit]
  );

  const handleCustomModeSave = (draft: CustomModeDraft) => {
    const nextMl = clampMl(draft.ml);
    const nextOz = clampOz(mlToOz(nextMl));
    setDp(dpCodes.unitSet, draft.unit);
    setDp(dpCodes.volumeMl, nextMl);
    setDp(dpCodes.volumeOz, nextOz);
    setDp(dpCodes.formulaRatio, draft.formulaRatio);
    setDp(dpCodes.tempSet, draft.temp);
  };

  const openCustomMode = () => {
    if (isMakingUi) return;
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    if (childLock) {
      showToast({ title: t("toast_child_lock_active"), icon: "none" });
      return;
    }
    setCustomModeOpen(true);
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

  const milkboxRaw = dpState[dpCodes.milkboxSensor];
  const funnelRaw = dpState[dpCodes.funnelSensor];
  const bottleRaw = dpState[dpCodes.bottleSensor];
  const watertankRaw = dpState[dpCodes.watertankSensor];

  const beginSensorSettle = useCallback(() => {
    sensorSnapshotOnPowerOn.current = {
      milkbox: milkboxRaw,
      funnel: funnelRaw,
      bottle: bottleRaw,
      watertank: watertankRaw,
    };
    suppressStaleSensorsAfterPowerOn.current = true;
    setSensorsSettling(true);
    if (sensorSettleTimerRef.current) {
      clearTimeout(sensorSettleTimerRef.current);
    }
    sensorSettleTimerRef.current = setTimeout(() => {
      /**
       * 回穩結束：改採信當下 DP。
       * 若仍 suppress，虛擬機／未重報同值時初始 false 會一直被 lastTrusted(預設 true) 蓋掉，紅 banner 不出現。
       */
      suppressStaleSensorsAfterPowerOn.current = false;
      setSensorsSettling(false);
      sensorSettleTimerRef.current = null;
    }, SENSOR_STATUS_SETTLE_MS);
  }, [bottleRaw, funnelRaw, milkboxRaw, watertankRaw]);

  beginSensorSettleRef.current = beginSensorSettle;

  /**
   * DP 規格：關閉功能等同於正常裝配。
   * 關機不採信感測器 false；開機後若尚未收到新感測器上報，避免沿用關機殘留 0。
   */
  useEffect(() => {
    const prev = prevSwitchOn.current;
    prevSwitchOn.current = switchOn;

    if (prev === false && switchOn) {
      beginSensorSettle();
      refreshAssemblyStatus(true);
      return undefined;
    }

    if (!switchOn) {
      if (sensorSettleTimerRef.current) {
        clearTimeout(sensorSettleTimerRef.current);
        sensorSettleTimerRef.current = null;
      }
      setSensorsSettling(false);
      sensorSnapshotOnPowerOn.current = null;
      suppressStaleSensorsAfterPowerOn.current = false;
    }
    return undefined;
  }, [beginSensorSettle, refreshAssemblyStatus, switchOn]);

  /**
   * 剛進 App／重新配網上線：同步感測器並進入回穩窗，避免快取殘值誤出紅 banner。
   */
  useEffect(() => {
    const prev = prevOnline.current;
    prevOnline.current = isOnline;

    if (!isOnline || !switchOn) return undefined;

    const enteredOnline = prev === false || prev === null;
    if (!enteredOnline) return undefined;

    beginSensorSettle();
    refreshAssemblyStatus(true);
    return undefined;
  }, [beginSensorSettle, isOnline, refreshAssemblyStatus, switchOn]);

  useEffect(() => {
    if (!switchOn || !sensorSnapshotOnPowerOn.current) return;
    const snap = sensorSnapshotOnPowerOn.current;
    const changed =
      milkboxRaw !== snap.milkbox ||
      funnelRaw !== snap.funnel ||
      bottleRaw !== snap.bottle ||
      watertankRaw !== snap.watertank;
    if (changed) {
      suppressStaleSensorsAfterPowerOn.current = false;
      setSensorsSettling(false);
      if (sensorSettleTimerRef.current) {
        clearTimeout(sensorSettleTimerRef.current);
        sensorSettleTimerRef.current = null;
      }
    }
  }, [switchOn, milkboxRaw, funnelRaw, bottleRaw, watertankRaw]);

  useEffect(
    () => () => {
      if (sensorSettleTimerRef.current) {
        clearTimeout(sensorSettleTimerRef.current);
      }
    },
    []
  );

  const resolveSensorOk = (
    raw: unknown,
    key: keyof typeof lastTrustedSensors.current
  ) => {
    if (!switchOn || sensorsSettling) return true;
    const parsed = parseSensorInstalled(raw);
    if (parsed) {
      lastTrustedSensors.current[key] = true;
      return true;
    }
    if (suppressStaleSensorsAfterPowerOn.current) {
      return lastTrustedSensors.current[key];
    }
    lastTrustedSensors.current[key] = false;
    return false;
  };

  const milkboxOk = resolveSensorOk(milkboxRaw, "milkbox");
  const funnelOk = resolveSensorOk(funnelRaw, "funnel");
  const bottleOk = resolveSensorOk(bottleRaw, "bottle");
  const watertankOk = resolveSensorOk(watertankRaw, "watertank");

  const sensorInput = useMemo(
    () => ({
      funnelOk,
      watertankOk,
      milkboxOk,
      bottleOk,
    }),
    [bottleOk, funnelOk, milkboxOk, watertankOk]
  );
  const assemblyStatuses = useMemo(
    () => getAssemblyStatusesForMode(selectedAction, sensorInput),
    [selectedAction, sensorInput]
  );
  const cleanAssemblyStatuses = useMemo(
    () => getAssemblyStatusesForMode("clean", sensorInput),
    [sensorInput]
  );
  const actionBlocked = hasAssemblyBlocker(assemblyStatuses);
  const cleanStartBlocked = hasAssemblyBlocker(cleanAssemblyStatuses);
  const statusPanelItems =
    statusPanelMode === "clean" ? cleanAssemblyStatuses : assemblyStatuses;
  /**
   * 不顯示紅 banner：關機／童鎖／行程中／完成動畫／感測器回穩／行程剛結束抑制窗。
   * （發佈版若只同步不回穩，易「經常出現」誤報；出水完成尤甚）
   */
  const statusBannersAllowed =
    !panelDisabled &&
    !childLock &&
    !isMakingUi &&
    !isCleanSession &&
    !bottleMadePhase &&
    !sensorsSettling &&
    !suppressAssemblyBanners;
  const showDeviceStatusToast = statusBannersAllowed && actionBlocked;
  /** 可與沖奶狀態 banner 同時顯示（第二行） */
  const showCleanStatusToast = statusBannersAllowed && cleanStartBlocked;

  /** 行程結束後短暫抑制；回穩後若組裝都 OK 再提前解除（回穩中不提早清） */
  useEffect(() => {
    if (!suppressAssemblyBanners) return undefined;
    if (!sensorsSettling && !actionBlocked && !cleanStartBlocked) {
      setSuppressAssemblyBanners(false);
      return undefined;
    }
    const timer = setTimeout(() => {
      setSuppressAssemblyBanners(false);
    }, POST_SESSION_BANNER_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [
    suppressAssemblyBanners,
    actionBlocked,
    cleanStartBlocked,
    sensorsSettling,
  ]);
  const deviceStatusToastMessage =
    selectedAction === "water"
      ? t("device_status_check_toast_water")
      : selectedAction === "powder"
      ? t("device_status_check_toast_powder")
      : t("device_status_check_toast");
  /** 關機或童鎖：操作類控件一律禁用（童鎖列本身仍可解鎖） */
  const opsLocked = panelDisabled || childLock;
  /**
   * 沖奶／純水／純粉進行中：鎖住會改設定或另啟程的控件；
   * 保留 Stop、狀態顯示、童鎖解鎖、導航。
   */
  const brewBusyLocked = opsLocked || isMakingUi;
  const startDisabled = brewBusyLocked || startAwaiting || actionBlocked;
  const modeSelectDisabled = brewBusyLocked || isCleanSession;
  const cleanDisplayTemp = temp;

  const openStatusPanel = useCallback((mode: ActionKind | "clean") => {
    setStatusPanelMode(mode);
    setDeviceStatusPanelOpen(true);
  }, []);

  const toastIfBlocked = useCallback(
    (forClean = false): boolean => {
      if (panelDisabled) {
        showToast({ title: t("device_power_off"), icon: "none" });
        return true;
      }
      if (childLock) {
        showToast({ title: t("toast_child_lock_active"), icon: "none" });
        return true;
      }
      if (isMaking) return true;
      if (!isOnline) {
        showToast({ title: t("status_offline"), icon: "none" });
        return true;
      }
      if (forClean) {
        if (cleanStartBlocked) {
          openStatusPanel("clean");
          return true;
        }
        return false;
      }
      if (actionBlocked) {
        openStatusPanel(selectedAction);
        return true;
      }
      return false;
    },
    [
      panelDisabled,
      childLock,
      isMaking,
      isOnline,
      actionBlocked,
      cleanStartBlocked,
      openStatusPanel,
      selectedAction,
      t,
    ]
  );

  const handleStartMilk = async () => {
    if (toastIfBlocked() || startDisabled) return false;
    setMilkSessionActive(true);
    setAwaitingWorkMode("milk");
    const recipe = resolveMilkRecipeParams({
      volumeMl,
      temp,
      formulaRatio,
      unitSet: unit,
      powderBrandSelection: brandSet ? powderBrandSelection : null,
    });
    const sent = await publishDpBatch(setDp, buildMilkStartDpPayload(recipe));
    if (!sent) {
      setMilkSessionActive(false);
      setAwaitingWorkMode(null);
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return false;
    }
    return true;
  };

  /**
   * 選模式先同步設備畫面（只改 work_mode／參數，不下發 working_status）。
   * 真正啟動仍由 Start 帶 working_status=true。
   */
  const syncIdleWorkMode = useCallback(
    async (mode: ActionKind) => {
      if (!isOnline || panelDisabled || isMaking) return;
      if (mode === "water") {
        await publishDpBatch(setDp, {
          [dpCodes.volumeMl]: volumeMl,
          [dpCodes.volumeOz]: volumeOz,
          [dpCodes.tempSet]: temp,
          [dpCodes.unitSet]: unit,
          [dpCodes.workMode]: "water",
        });
        return;
      }
      if (mode === "powder") {
        await publishDpBatch(setDp, {
          [dpCodes.formulaWater]: formulaWaterMl,
          [dpCodes.formulaRatio]: formulaRatio,
          [dpCodes.unitSet]: "mL",
          [dpCodes.workMode]: "powder",
        });
        return;
      }
      await publishDpBatch(setDp, {
        [dpCodes.workMode]: "milk",
      });
    },
    [
      formulaRatio,
      formulaWaterMl,
      isMaking,
      isOnline,
      panelDisabled,
      setDp,
      temp,
      unit,
      volumeMl,
      volumeOz,
    ]
  );

  const handleSelectWater = () => {
    if (isMakingUi) return;
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    if (childLock) {
      showToast({ title: t("toast_child_lock_active"), icon: "none" });
      return;
    }
    setAwaitingWorkMode(null);
    const next: ActionKind = selectedAction === "water" ? "milk" : "water";
    setSelectedAction(next);
    syncIdleWorkMode(next).catch(() => undefined);
  };

  const handleSelectPowder = () => {
    if (isMakingUi) return;
    if (panelDisabled) {
      showToast({ title: t("device_power_off"), icon: "none" });
      return;
    }
    if (childLock) {
      showToast({ title: t("toast_child_lock_active"), icon: "none" });
      return;
    }
    setAwaitingWorkMode(null);
    const next: ActionKind = selectedAction === "powder" ? "milk" : "powder";
    setSelectedAction(next);
    syncIdleWorkMode(next).catch(() => undefined);
  };

  const handleWaterTempChange = (next: TempSet) => {
    if (brewBusyLocked) return;
    setDp(dpCodes.tempSet, next);
  };

  const handleStartWater = async () => {
    if (toastIfBlocked() || startDisabled) return;
    setWaterSessionActive(true);
    setAwaitingWorkMode("water");
    const sent = await publishDpBatch(setDp, {
      [dpCodes.volumeMl]: volumeMl,
      [dpCodes.volumeOz]: volumeOz,
      [dpCodes.tempSet]: temp,
      [dpCodes.unitSet]: unit,
      [dpCodes.workMode]: "water",
      [dpCodes.workingStatus]: true,
    });
    if (!sent) {
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
      [dpCodes.formulaWater]: formulaWaterMl,
      [dpCodes.formulaRatio]: formulaRatio,
      [dpCodes.unitSet]: "mL",
      [dpCodes.workMode]: "powder",
      [dpCodes.workingStatus]: true,
    });
    if (!sent) {
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
    if (cleanStartBlocked || brewBusyLocked) return;
    if (toastIfBlocked(true)) return;
    if (brewBusyLocked || !isOnline) return;
    setCleanSessionActive(true);
    setWaterSessionActive(false);
    setPowderSessionActive(false);
    setMilkSessionActive(false);
    setAwaitingWorkMode("clean");
    const sent = await publishDpBatch(setDp, {
      [dpCodes.workMode]: "clean",
      [dpCodes.workingStatus]: true,
    });
    if (!sent) {
      setAwaitingWorkMode(null);
      setCleanSessionActive(false);
      showToast({ title: t("toast_start_failed_clean"), icon: "none" });
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

  const startMilkWithRecipe = async (recipe: {
    volumeMl: number;
    volumeOz?: number;
    temp: TempSet | number;
    formulaWater: number;
    formulaRatio: number;
    unitSet: "mL" | "oz";
  }) => {
    if (toastIfBlocked() || startDisabled) return false;
    setMilkSessionActive(true);
    setAwaitingWorkMode("milk");
    const sent = await executeMilkStart(recipe, (nextRecipe) =>
      publishDpBatch(
        setDp,
        buildMilkStartDpPayload({
          volumeMl: nextRecipe.volumeMl,
          volumeOz: nextRecipe.volumeOz ?? clampOz(mlToOz(nextRecipe.volumeMl)),
          temp: nextRecipe.temp as TempSet,
          formulaWater: nextRecipe.formulaWater,
          formulaRatio: nextRecipe.formulaRatio,
          unitSet: nextRecipe.unitSet,
        })
      )
    );
    if (!sent) {
      setMilkSessionActive(false);
      setAwaitingWorkMode(null);
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return false;
    }
    return true;
  };

  const handleHungryStartMaking = async (draft: CryAssistMilkDraft) => {
    if (hungryReminderBusy) return;
    setHungryReminderBusy(true);
    try {
      const started = await startMilkWithRecipe(
        buildCryAssistMilkRecipe(draft, unit)
      );
      if (started) {
        setSelectedAction("milk");
        setHungryStartAwaitingDevice(true);
        return;
      }
      setHungryReminderBusy(false);
    } catch {
      setHungryReminderBusy(false);
    }
  };

  const handleBrandBanner = () => {
    if (brewBusyLocked) return;
    dispatch(markBrandBannerEverClicked());
    /** Always use unified Formula list (brand + custom together); never old split settings page */
    router.push("/formula");
  };

  return (
    <View className={styles.root}>
      <View
        className={clsx(styles.page, showFirstGuide && styles.pageGuide)}
        style={{
          paddingTop: pageEdgeInset + 8,
          paddingBottom: 0,
        }}
      >
        <PanelNavBar
          mode="home"
          deviceId={devInfo?.devId}
          spotlightFeeding={guideTargetId === "guide-feeding"}
          onFeedingRecordPress={() => {
            setFeedingSheetOpen(true);
          }}
        />
        <View className={styles.header}>
          <View className={styles.titleRow}>
            <View className={styles.titleGroup}>
              <Text className={styles.appTitle}>{t("app_title")}</Text>
            </View>
            <View className={styles.onlineRow}>
              <Image
                src={
                  isOnline
                    ? IC_CONNECTION_ONLINE_URI
                    : IC_CONNECTION_OFFLINE_URI
                }
                className={styles.onlineIcon}
              />
            </View>
          </View>
        </View>

        <ScrollView scrollY className={styles.pageScroll} showScrollbar={false}>
          {(showDeviceStatusToast || showCleanStatusToast) && (
            <View className={styles.deviceStatusToastStack}>
              {showDeviceStatusToast ? (
                <View className={styles.deviceStatusToastWrap}>
                  <DeviceStatusAlertToast
                    message={deviceStatusToastMessage}
                    onPress={() => openStatusPanel(selectedAction)}
                  />
                </View>
              ) : null}
              {showCleanStatusToast ? (
                <View
                  className={clsx(
                    styles.deviceStatusToastWrap,
                    showDeviceStatusToast &&
                      styles.deviceStatusToastWrapAdjacent
                  )}
                >
                  <DeviceStatusAlertToast
                    message={t("device_status_check_toast_clean")}
                    onPress={() => openStatusPanel("clean")}
                  />
                </View>
              ) : null}
            </View>
          )}

          <View
            className={clsx(
              styles.pageBody,
              (showDeviceStatusToast || showCleanStatusToast) &&
                styles.pageBodyWithStatusToast,
              showFirstGuide && styles.pageBodyGuide
            )}
          >
            <View
              className={clsx(
                styles.mainPanel,
                (!isOnline || panelDisabled) && styles.mainPanelOffline
              )}
            >
              <View className={styles.dashboardCard}>
                <View className={styles.panelGaugeCluster}>
                  <View
                    className={clsx(
                      styles.dashboardCardTop,
                      guideTargetId === "guide-gauge" && styles.guideTarget,
                      guideTargetId === "guide-gauge" && styles.guideTargetGauge
                    )}
                  >
                    <View className={styles.gaugeSlot}>
                      <AmountGauge
                        value={gaugeValue}
                        unit={gaugeUnit}
                        label={gaugeLabel}
                        min={gaugeMin}
                        max={gaugeMax}
                        step={gaugeStep}
                        dimmed={
                          panelDisabled || !isOnline || childLock || isMakingUi
                        }
                        onChange={gaugeEditable ? handleGaugeChange : undefined}
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
                            <MakingModeBar variant={makingBarVariant} />
                          </View>
                        ) : isWaterActionSelected ? (
                          <WaterTemperaturePanel
                            temp={temp}
                            disabled={opsLocked}
                            onChange={handleWaterTempChange}
                          />
                        ) : isPowderActionSelected ? (
                          <PowderCautionPanel />
                        ) : (
                          <View className={styles.metrics}>
                            <View className={styles.metric}>
                              <View className={styles.metricValue}>
                                <Text className={styles.metricValueNum}>
                                  {displayVolume}
                                </Text>
                                <Text className={styles.metricValueSuffix}>
                                  {unit === "oz" ? "oz" : "mL"}
                                </Text>
                              </View>
                              <Text className={styles.metricLabel}>
                                {t("metric_water")}
                              </Text>
                            </View>
                            <View className={styles.metric}>
                              <View className={styles.metricValue}>
                                <Text className={styles.metricValueNum}>
                                  {roundToTenth(powderG)}
                                </Text>
                                <Text className={styles.metricValueSuffix}>
                                  g
                                </Text>
                              </View>
                              <Text className={styles.metricLabel}>
                                {t("metric_powder")}
                              </Text>
                            </View>
                            <View className={styles.metric}>
                              <View className={styles.metricValue}>
                                <Text className={styles.metricValueNum}>
                                  {temp}
                                </Text>
                                <Text className={styles.metricValueSuffix}>
                                  °C
                                </Text>
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
                                opsLocked && styles.metricActionDisabled
                              )}
                              onClick={opsLocked ? undefined : openCustomMode}
                            >
                              <View className={styles.metricValue}>
                                <Image
                                  src={Res.icEditUri}
                                  className={styles.metricEditIcon}
                                />
                              </View>
                              <Text
                                className={clsx(
                                  styles.metricLabel,
                                  styles.metricEditLabel
                                )}
                              >
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
                              id="guide-formula"
                              className={clsx(
                                styles.brandBannerSlot,
                                brewBusyLocked && styles.panelBlock,
                                brewBusyLocked && styles.formulaActionDisabled,
                                guideTargetId === "guide-formula" &&
                                  styles.guideTarget
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
                                  brandSet &&
                                  !isCustomBrand &&
                                  powderBrandSelection
                                    ? {
                                        brand: powderBrandSelection.brandLabel,
                                        series:
                                          powderBrandSelection.seriesLabel,
                                        stage: powderBrandSelection.stageLabel,
                                      }
                                    : null
                                }
                                onClick={
                                  brewBusyLocked
                                    ? () => undefined
                                    : handleBrandBanner
                                }
                              />
                            </View>
                          </>
                        ) : null}
                      </View>
                    )}
                </View>
              </View>

              <View className={styles.mainPanelSpacer} />

              <View
                id="guide-actions"
                className={clsx(
                  styles.actions,
                  (isMakingUi || bottleMadePhase) && styles.actionsMaking,
                  guideTargetId === "guide-actions" && styles.guideTarget,
                  guideTargetId === "guide-actions" && styles.guideTargetActions
                )}
              >
                {bottleMadePhase ? (
                  <BottleMadeButton
                    labelKey={
                      completionKind === "water"
                        ? "water_dispensed"
                        : completionKind === "powder"
                        ? "powder_dispensed"
                        : completionKind === "clean"
                        ? "clean_completed"
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
                        modeSelectDisabled && styles.actionDisabled
                      )}
                      onClick={
                        modeSelectDisabled ? undefined : handleSelectWater
                      }
                    >
                      <View className={styles.actionIconRow}>
                        <View
                          className={clsx(
                            styles.sideBtnCircle,
                            isWaterActionSelected &&
                              styles.sideBtnCircleSelected
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
                        (startDisabled || isCleanSession) &&
                          styles.actionDisabled
                      )}
                      onClick={
                        startDisabled || isCleanSession
                          ? undefined
                          : handleStart
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
                        modeSelectDisabled && styles.actionDisabled
                      )}
                      onClick={
                        modeSelectDisabled ? undefined : handleSelectPowder
                      }
                    >
                      <View className={styles.actionIconRow}>
                        <View
                          className={clsx(
                            styles.sideBtnCircle,
                            isPowderActionSelected &&
                              styles.sideBtnCircleSelected
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

            <View className={styles.cardGap} />
            <View
              id="guide-care"
              className={clsx(
                styles.guideCare,
                guideTargetId === "guide-care" && styles.guideTarget,
                guideTargetId === "guide-care" && styles.guideTargetCare
              )}
            >
              <View
                className={clsx(
                  styles.settingsRowCard,
                  isCleanSession && styles.settingsRowCardCleanActive,
                  !isCleanSession &&
                    (brewBusyLocked ||
                      cleanStartBlocked ||
                      awaitingWorkMode === "clean") &&
                    styles.disabled
                )}
                onClick={
                  isCleanSession ||
                  awaitingWorkMode === "clean" ||
                  brewBusyLocked ||
                  cleanStartBlocked
                    ? undefined
                    : () => {
                        setCleanConfirmOpen(true);
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
              <View className={styles.cardGap} />
              {babyDiaryToastVisible ? (
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
            </View>
          </View>
        </ScrollView>

        {customModeOpen && (
          <CustomModeSettingsPanel
            ml={volumeMl}
            unit={unit}
            formulaRatio={formulaRatio}
            formulaWater={formulaWaterMl}
            temp={temp}
            onSave={handleCustomModeSave}
            onClose={() => setCustomModeOpen(false)}
            saveDisabled={opsLocked || isMaking}
          />
        )}
        {deviceStatusPanelOpen ? (
          <DeviceStatusBottomPanel
            items={statusPanelItems}
            titleKey={
              statusPanelMode === "clean"
                ? "device_status_panel_title_clean"
                : statusPanelMode === "powder"
                ? "device_status_panel_title_powder"
                : statusPanelMode === "water"
                ? "device_status_panel_title_water"
                : "device_status_panel_title"
            }
            subtitleKey={
              statusPanelMode === "powder"
                ? "device_status_panel_subtitle_powder"
                : "device_status_panel_subtitle"
            }
            onClose={() => setDeviceStatusPanelOpen(false)}
          />
        ) : null}
      </View>

      <LayoutFooter deviceId={devInfo?.devId} />

      <HighTempCleanConfirmModal
        visible={cleanConfirmOpen}
        onCancel={() => setCleanConfirmOpen(false)}
        onConfirm={() => {
          setCleanConfirmOpen(false);
          handleClean().catch(() => undefined);
        }}
      />

      {feedingSheetOpen ? (
        <FeedingProfileSheet
          deviceId={feedingDeviceId}
          homeId={feedingHomeId}
          isOnline={isOnline}
          currentChildId={
            hasValidFeedingContext ? feedingContext?.childID : undefined
          }
          onClose={() => setFeedingSheetOpen(false)}
          onDismiss={() => setFeedingSheetOpen(false)}
          showBackButton={false}
          onSelectionChange={handleFeedingProfileSelection}
          onBusyChange={setFeedingProfileBusy}
        />
      ) : null}

      {smartPrepSheetOpen ? (
        <SmartPrepReminderSheet
          homeId={feedingHomeId}
          deviceId={feedingDeviceId}
          initialPrepared={
            isSmartPrepPreparedFresh(smartPrepPrepared, smartPrepPreparedAt)
              ? smartPrepPrepared
              : null
          }
          onPreparedChange={(prepared) => {
            setSmartPrepPrepared(prepared);
            if (prepared.devices.some((device) => device.selected)) {
              markSmartPrepSetupComplete(feedingHomeId, feedingDeviceId);
              setSmartPrepSetupDone(true);
            }
          }}
          onBusyChange={setSmartPrepBusy}
          onClose={completeSmartPrepSetup}
          onDismiss={() => setSmartPrepSheetOpen(false)}
          showBackButton={false}
        />
      ) : null}

      <SmartPrepSetupSnackbar
        visible={
          showSmartPrepSnackbar &&
          !babyDiaryToastVisible &&
          !feedingSheetOpen &&
          !smartPrepSheetOpen &&
          !hungryReminderOpen &&
          !feedingConfirmationPending
        }
        spotlight={guideTargetId === "guide-smart-prep"}
        onPress={openSmartPrepSheet}
      />

      <FormulaSavedToast
        visible={smartPrepSavedToastVisible}
        message={t("smart_prep_saved")}
        onDismiss={() => setSmartPrepSavedToastVisible(false)}
      />

      {cloudFeaturesAvailable && feedingConfirmationPending ? (
        <FeedingRecordConfirmationModal
          context={hasValidFeedingContext ? feedingContext : null}
          record={feedingConfirmationRecord}
          isOnline={isOnline}
          clearConfirmation={clearFeedingConfirmation}
        />
      ) : null}

      {cloudFeaturesAvailable &&
      hungryReminderOpen &&
      !isMakingUi &&
      !isCleanSession ? (
        <CryAssistFeedRequestModal
          initialDraft={hungryReminderInitialDraft}
          busy={hungryReminderBusy}
          startDisabled={startDisabled || isMaking}
          onCancel={() => {
            handleHungryNotNow().catch(() => undefined);
          }}
          onStart={(draft) => {
            handleHungryStartMaking(draft).catch(() => undefined);
          }}
        />
      ) : null}

      {showFirstGuide ? (
        <FirstTimeGuide
          includeSmartPrep={showSmartPrepSnackbar}
          onFinish={finishFirstGuide}
          onTargetChange={handleGuideTargetChange}
        />
      ) : null}
    </View>
  );
};

export default HomePage;
