import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { View, Text, Image, showToast, router } from "@ray-js/ray";
import { useProps, useActions, useDevice } from "@ray-js/panel-sdk";
import useDeviceConnectivity from "@/hooks/useDeviceConnectivity";
import { IC_CONNECTION_OFFLINE_URI } from "@/res/icConnectionOfflineUri";
import { IC_CONNECTION_ONLINE_URI } from "@/res/icConnectionOnlineUri";
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
import DeviceStatusAlertToast from "@/components/DeviceStatusAlertToast";
import DeviceStatusBottomPanel from "@/components/DeviceStatusBottomPanel";
import BabyDiarySnackbar from "@/components/BabyDiarySnackbar";
import FeedRequestModal from "@/components/FeedRequestModal";
import SmartPrepActivateModal from "@/components/SmartPrepActivateModal";
import SmartPrepNoCryDeviceModal from "@/components/SmartPrepNoCryDeviceModal";
import SmartPrepTutorialModal from "@/components/SmartPrepTutorialModal";
import SmartPrepSetupSnackbar from "@/components/SmartPrepSetupSnackbar";
import PanelNavBar from "@/components/PanelNavBar";
import BrandBanner from "@/components/BrandBanner";
import SceneModeTabs, { type SceneTabItem } from "@/components/SceneModeTabs";
import MakingModeBar, {
  type MakingBarVariant,
} from "@/components/MakingModeBar";
import MakingActionsPanel from "@/components/MakingActionsPanel";
import BottleMadeButton from "@/components/BottleMadeButton";
import WaterTemperaturePanel from "@/components/WaterTemperaturePanel";
import PowderCautionPanel from "@/components/PowderCautionPanel";
import HighTempCleanStopButton from "@/components/HighTempCleanStopButton";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import {
  HIGH_TEMP_CLEAN_COUNTDOWN_SEC,
  HIGH_TEMP_CLEAN_TEMP,
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
  buildFormulaSettingDpPayload,
  calcPowderGrams,
  clampMl,
  FORMULA_DENSITY_DEFAULT,
  getVolumeFromDp,
  hasDrinkRecordUpload,
  isActivelyWorking,
  parseErrorCode,
  parseSceneFeedRequest,
  parseSensorInstalled,
  parseTemp,
  parseUnit,
  parseWorkMode,
  parseWorkingStatus,
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
import { formatConnectionStatus, parseSwitchOn } from "@/utils/deviceStatus";
import useSmartPrepSetupGuide from "@/hooks/useSmartPrepSetupGuide";
import styles from "./index.module.less";

type ActionKind = "milk" | "water" | "powder";
type CompletionKind = "milk" | "water" | "powder";

const SHOW_SCENE_MODE_TABS = false;

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
  const childLock = parseSwitchOn(dpState[dpCodes.childLock]);
  const [customModeOpen, setCustomModeOpen] = useState(false);
  const [deviceStatusPanelOpen, setDeviceStatusPanelOpen] = useState(false);
  const [sensorsSettling, setSensorsSettling] = useState(false);
  const [bottleMadePhase, setBottleMadePhase] = useState(false);
  const [completionKind, setCompletionKind] = useState<CompletionKind>("milk");
  const [selectedAction, setSelectedAction] = useState<ActionKind>("milk");
  const [milkSessionActive, setMilkSessionActive] = useState(false);
  const [waterSessionActive, setWaterSessionActive] = useState(false);
  const [powderSessionActive, setPowderSessionActive] = useState(false);
  const [cleanCountdown, setCleanCountdown] = useState(
    HIGH_TEMP_CLEAN_COUNTDOWN_SEC
  );
  const [awaitingWorkMode, setAwaitingWorkMode] = useState<WorkMode | null>(
    null
  );
  const [stopBusy, setStopBusy] = useState(false);
  const [feedRequestDismissed, setFeedRequestDismissed] = useState(false);
  const smartPrepGuide = useSmartPrepSetupGuide({
    // 必須用家庭 homeId；勿用 device.groupId（那是設備群組，不是家庭）
    deviceId: devInfo?.devId,
  });
  const prevWorkingStatus = useRef<boolean | null>(null);
  const wasInCleanMode = useRef(false);
  const prevSwitchOn = useRef<boolean | null>(null);
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

  const workMode = parseWorkMode(dpState[dpCodes.workMode]);
  const workingStatus = parseWorkingStatus(dpState[dpCodes.workingStatus]);
  const sceneFeedRequest = parseSceneFeedRequest(
    dpState[dpCodes.sceneFeedRequest]
  );
  /** 執行中模式：work_mode + working_status；status 為 false 時視為停滯 */
  const isMaking = isActivelyWorking(workMode, workingStatus);
  /** 清潔 UI 僅在 work_mode === clean 且 working_status 為 true 時顯示 */
  const isCleanSession = workMode === "clean" && workingStatus;
  const isMakingUi = isMaking && !isCleanSession;

  useEffect(() => {
    if (sceneFeedRequest === "hungry_pending") {
      setFeedRequestDismissed(false);
    }
  }, [sceneFeedRequest]);

  const showFeedRequestModal =
    sceneFeedRequest === "hungry_pending" &&
    !feedRequestDismissed &&
    !isMakingUi &&
    !isCleanSession;

  const unit = parseUnit(dpState[dpCodes.unitSet]);
  const temp = parseTemp(dpState[dpCodes.tempSet]);
  const formulaRatio = Number(dpState[dpCodes.formulaRatio] ?? 90);
  const formulaWaterMl = Number(dpState[dpCodes.formulaWater] ?? 100);
  const formulaDensity = Number(
    dpState[dpCodes.formulaDensity] ?? FORMULA_DENSITY_DEFAULT
  );
  const volumeMl = getVolumeFromDp(dpState, unit);
  const powderG = calcPowderGrams(
    volumeMl,
    formulaRatio,
    formulaWaterMl,
    formulaDensity
  );
  const preset = SCENE_PRESETS[sceneKey as keyof typeof SCENE_PRESETS];
  const powderPrimary = preset?.powderPrimary ?? false;

  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const resetSceneFeedRequest = useCallback(async () => {
    await setDp(dpCodes.sceneFeedRequest, "none");
  }, [setDp]);

  const dismissFeedRequest = useCallback(async () => {
    setFeedRequestDismissed(true);
    await resetSceneFeedRequest();
  }, [resetSceneFeedRequest]);

  useEffect(() => {
    if (awaitingWorkMode && workMode === awaitingWorkMode && workingStatus) {
      setAwaitingWorkMode(null);
    }
  }, [awaitingWorkMode, workMode, workingStatus]);

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
      setDp(dpCodes.formulaWater, p.formulaWaterMl);
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
    const prev = prevWorkingStatus.current;
    if (prev === true && !workingStatus) {
      setAwaitingWorkMode(null);
      const finished = workMode;
      const wasWater = waterSessionActive || finished === "water";
      const wasPowder = powderSessionActive || finished === "powder";
      const wasClean = finished === "clean";
      if (finished === "milk") {
        setCompletionKind("milk");
        setBottleMadePhase(true);
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
    }
    prevWorkingStatus.current = workingStatus;
  }, [
    workMode,
    workingStatus,
    milkSessionActive,
    waterSessionActive,
    powderSessionActive,
  ]);

  /** 完成後 3 秒收起 Bottle Made */
  useEffect(() => {
    if (!bottleMadePhase) return undefined;
    const timer = setTimeout(() => {
      setBottleMadePhase(false);
      setMilkSessionActive(false);
      setWaterSessionActive(false);
      setPowderSessionActive(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [bottleMadePhase]);

  useEffect(() => {
    const inClean = workMode === "clean" && workingStatus;
    if (inClean && !wasInCleanMode.current) {
      setCleanCountdown(HIGH_TEMP_CLEAN_COUNTDOWN_SEC);
    }
    wasInCleanMode.current = inClean;
  }, [workMode, workingStatus]);

  useEffect(() => {
    if (workMode !== "clean" || !workingStatus) return undefined;
    if (cleanCountdown <= 0) return undefined;
    const timer = setInterval(() => {
      setCleanCountdown((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [workMode, workingStatus, cleanCountdown]);

  const gaugeValue = isCleanSession
    ? HIGH_TEMP_CLEAN_TOTAL_ML
    : powderPrimary
    ? powderG
    : volumeMl;
  const gaugeUnit = powderPrimary ? t("unit_g") : t("unit_ml");
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

  /** 沖奶完成且設備上報 drink_record_upload 時，於 Child Lock 列顯示 Baby Diary snackbar */
  const showBabyDiarySnackbar = useMemo(
    () =>
      bottleMadePhase &&
      completionKind === "milk" &&
      hasDrinkRecordUpload(dpState[dpCodes.drinkRecordUpload]),
    [bottleMadePhase, completionKind, dpState]
  );

  const handleCustomModeSave = (draft: CustomModeDraft) => {
    setSceneKey("custom");
    setDp(dpCodes.volumeMl, clampMl(draft.ml));
    publishDpBatch(setDp, {
      ...buildFormulaSettingDpPayload(
        draft.formulaWaterMl,
        draft.formulaRatio / 10
      ),
      [dpCodes.tempSet]: draft.temp,
      [dpCodes.unitSet]: "mL",
    });
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
  const milkboxRaw = dpState[dpCodes.milkboxSensor];
  const funnelRaw = dpState[dpCodes.funnelSensor];
  const bottleRaw = dpState[dpCodes.bottleSensor];
  const watertankRaw = dpState[dpCodes.watertankSensor];

  /**
   * DP 規格：關閉功能等同於正常裝配。
   * 關機不採信感測器 false；開機後若尚未收到新感測器上報，避免沿用關機殘留 0。
   */
  useEffect(() => {
    const prev = prevSwitchOn.current;
    prevSwitchOn.current = switchOn;

    if (prev === false && switchOn) {
      sensorSnapshotOnPowerOn.current = {
        milkbox: dpState[dpCodes.milkboxSensor],
        funnel: dpState[dpCodes.funnelSensor],
        bottle: dpState[dpCodes.bottleSensor],
        watertank: dpState[dpCodes.watertankSensor],
      };
      suppressStaleSensorsAfterPowerOn.current = true;
      setSensorsSettling(true);
      const timer = setTimeout(() => setSensorsSettling(false), 3000);
      return () => clearTimeout(timer);
    }

    if (!switchOn) {
      setSensorsSettling(false);
      sensorSnapshotOnPowerOn.current = null;
      suppressStaleSensorsAfterPowerOn.current = false;
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchOn]);

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
    }
  }, [switchOn, milkboxRaw, funnelRaw, bottleRaw, watertankRaw]);

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
    // 僅在「剛開機且尚未收到新感測器上報」時，沿用開機前可信狀態
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
  const errorCode = parseErrorCode(dpState[dpCodes.errorCode]);

  const assemblyStatuses = useMemo(
    () =>
      getAssemblyStatusesForMode(selectedAction, {
        funnelOk,
        watertankOk,
        milkboxOk,
        bottleOk,
        errorCode,
      }),
    [selectedAction, funnelOk, watertankOk, milkboxOk, bottleOk, errorCode]
  );
  const actionBlocked = hasAssemblyBlocker(assemblyStatuses);
  const tempUnavailable = errorCode === "Hot";
  const waterLowOnly =
    !watertankOk &&
    errorCode === "none" &&
    (selectedAction === "milk"
      ? funnelOk && milkboxOk && bottleOk
      : selectedAction === "water"
      ? funnelOk && bottleOk
      : false);
  const showTempUnavailableToast =
    !panelDisabled && !isMakingUi && !isCleanSession && tempUnavailable;
  const showWaterLowToast =
    !panelDisabled &&
    !isMakingUi &&
    !isCleanSession &&
    !tempUnavailable &&
    waterLowOnly;
  const showDeviceStatusToast =
    !panelDisabled &&
    !isMakingUi &&
    !isCleanSession &&
    actionBlocked &&
    !showTempUnavailableToast &&
    !showWaterLowToast;
  const deviceStatusToastMessage =
    selectedAction === "water"
      ? t("device_status_check_toast_water")
      : selectedAction === "powder"
      ? t("device_status_check_toast_powder")
      : t("device_status_check_toast");
  const startDisabled =
    panelDisabled ||
    startAwaiting ||
    actionBlocked ||
    tempUnavailable ||
    waterLowOnly;
  const cleanDisplayTemp = HIGH_TEMP_CLEAN_TEMP;

  const toastIfBlocked = useCallback(
    (forClean = false): boolean => {
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
      if (!forClean && actionBlocked && !waterLowOnly && !tempUnavailable) {
        setDeviceStatusPanelOpen(true);
        return true;
      }
      if (forClean) {
        if (!funnelOk) {
          showToast({ title: t("sensor_funnel_missing"), icon: "none" });
          return true;
        }
        if (!bottleOk) {
          showToast({ title: t("sensor_bottle_missing"), icon: "none" });
          return true;
        }
        if (!watertankOk) {
          showToast({ title: t("sensor_watertank_missing"), icon: "none" });
          return true;
        }
      }
      return false;
    },
    [
      panelDisabled,
      childLock,
      isMaking,
      isOnline,
      actionBlocked,
      waterLowOnly,
      tempUnavailable,
      funnelOk,
      bottleOk,
      watertankOk,
      t,
    ]
  );

  const handleStartMilk = async () => {
    if (toastIfBlocked() || startDisabled) return;
    setMilkSessionActive(true);
    setAwaitingWorkMode("milk");
    const recipe = resolveMilkRecipeParams({
      sceneKey,
      volumeMl,
      temp,
      formulaWaterMl,
      formulaRatio,
      formulaDensity,
      powderBrandSelection: brandSet ? powderBrandSelection : null,
    });
    const sent = await publishDpBatch(setDp, buildMilkStartDpPayload(recipe));
    if (!sent) {
      setMilkSessionActive(false);
      setAwaitingWorkMode(null);
      showToast({ title: t("dp_command_failed"), icon: "none" });
    }
  };

  const handleFeedRequestStart = async (draft: {
    ml: number;
    formulaWaterMl: number;
    formulaRatio: number;
    temp: TempSet;
  }) => {
    if (toastIfBlocked() || panelDisabled || childLock || !isOnline) {
      await dismissFeedRequest();
      return;
    }
    setFeedRequestDismissed(true);
    setSceneKey("custom");
    setSelectedAction("milk");
    setMilkSessionActive(true);
    setAwaitingWorkMode("milk");
    const recipe = resolveMilkRecipeParams({
      sceneKey: "custom",
      volumeMl: draft.ml,
      temp: draft.temp,
      formulaWaterMl: draft.formulaWaterMl,
      formulaRatio: draft.formulaRatio,
      formulaDensity,
      powderBrandSelection: brandSet ? powderBrandSelection : null,
    });
    const sent = await publishDpBatch(setDp, {
      ...buildMilkStartDpPayload(recipe),
      [dpCodes.sceneFeedRequest]: "none",
    });
    if (!sent) {
      setMilkSessionActive(false);
      setAwaitingWorkMode(null);
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return;
    }
    await resetSceneFeedRequest();
  };

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
      [dpCodes.volumeMl]: volumeMl,
      ...buildFormulaSettingDpPayload(
        formulaWaterMl,
        formulaRatio / 10,
        formulaDensity
      ),
      [dpCodes.unitSet]: "mL",
      [dpCodes.workMode]: "powder",
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
    if (toastIfBlocked(true)) return;
    if (panelDisabled || childLock || !isOnline) return;
    setAwaitingWorkMode("clean");
    const sent = await publishDpBatch(setDp, {
      [dpCodes.volumeMl]: HIGH_TEMP_CLEAN_TOTAL_ML,
      [dpCodes.unitSet]: "mL",
      [dpCodes.workMode]: "clean",
    });
    if (!sent) {
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

  const handleBrandBanner = () => {
    if (panelDisabled) return;
    dispatch(markBrandBannerEverClicked());
    if (hasSavedPowderBrands) {
      router.push("/formula");
      return;
    }
    router.push("/formula");
  };

  return (
    <View className={styles.page}>
      <PanelNavBar mode="home" deviceId={devInfo?.devId} />
      <View className={styles.header}>
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
            <Image
              src={
                isOnline ? IC_CONNECTION_ONLINE_URI : IC_CONNECTION_OFFLINE_URI
              }
              className={styles.onlineIcon}
            />
            <Text
              className={styles.onlineText}
              style={{ color: isOnline ? "#55A074" : "#BA2F2F" }}
            >
              {statusText}
            </Text>
          </View>
        </View>
      </View>

      {showTempUnavailableToast ? (
        <View className={styles.deviceStatusToastWrap}>
          <DeviceStatusAlertToast
            message={t("device_status_temp_unavailable_toast")}
          />
        </View>
      ) : showWaterLowToast ? (
        <View className={styles.deviceStatusToastWrap}>
          <DeviceStatusAlertToast
            message={t("device_status_water_low_toast")}
          />
        </View>
      ) : showDeviceStatusToast ? (
        <View className={styles.deviceStatusToastWrap}>
          <DeviceStatusAlertToast
            message={deviceStatusToastMessage}
            onPress={() => setDeviceStatusPanelOpen(true)}
          />
        </View>
      ) : null}

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
                            <Text className={styles.metricValueSuffix}>
                              {t("unit_ml")}
                            </Text>
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
                            <Text className={styles.metricValueSuffix}>
                              {t("unit_g")}
                            </Text>
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
                            <Text className={styles.metricValueSuffix}>
                              {t("unit_celsius")}
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
                    {SHOW_SCENE_MODE_TABS ? (
                      <>
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
                      </>
                    ) : null}
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
                  <Text className={styles.startLabel}>{t("action_start")}</Text>
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

        <View
          className={clsx(
            styles.secondaryList,
            panelDisabled && styles.panelBlock
          )}
        >
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
          {showBabyDiarySnackbar ? (
            <View className={styles.diaryToastSlot}>
              <BabyDiarySnackbar />
            </View>
          ) : (
            <View
              className={clsx(
                styles.settingsRowCard,
                panelDisabled && styles.disabled
              )}
              onClick={
                panelDisabled
                  ? undefined
                  : () => {
                      setBoolDp(setDp, dpCodes.childLock, !childLock);
                    }
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

      {customModeOpen && (
        <CustomModeSettingsPanel
          ml={volumeMl}
          formulaWaterMl={formulaWaterMl}
          formulaRatio={formulaRatio}
          temp={temp}
          onSave={handleCustomModeSave}
          onClose={() => setCustomModeOpen(false)}
          saveDisabled={panelDisabled || isMaking || childLock}
        />
      )}
      {deviceStatusPanelOpen ? (
        <DeviceStatusBottomPanel
          items={assemblyStatuses}
          onClose={() => setDeviceStatusPanelOpen(false)}
        />
      ) : null}

      <SmartPrepActivateModal
        visible={smartPrepGuide.showActivateModal}
        onCancel={smartPrepGuide.dismissActivate}
        onEnable={smartPrepGuide.enableReminder}
      />
      <SmartPrepNoCryDeviceModal
        visible={smartPrepGuide.showNoCryModal}
        onOk={smartPrepGuide.dismissNoCryModal}
      />
      <SmartPrepTutorialModal
        visible={smartPrepGuide.showTutorialModal}
        onLater={smartPrepGuide.dismissTutorialLater}
        onOpenRoutines={smartPrepGuide.openRoutinesFromTutorial}
        onMarkDone={smartPrepGuide.markRoutineDone}
      />
      <SmartPrepSetupSnackbar
        visible={
          smartPrepGuide.showSetupSnackbar &&
          !showBabyDiarySnackbar &&
          !smartPrepGuide.showActivateModal &&
          !smartPrepGuide.showNoCryModal &&
          !smartPrepGuide.showTutorialModal &&
          !showFeedRequestModal
        }
        onPress={smartPrepGuide.openTutorialFromSnackbar}
      />
      <FeedRequestModal
        visible={showFeedRequestModal}
        ml={volumeMl}
        formulaWaterMl={formulaWaterMl}
        formulaRatio={formulaRatio}
        temp={temp}
        onCancel={dismissFeedRequest}
        onStart={handleFeedRequestStart}
      />
    </View>
  );
};

export default HomePage;
