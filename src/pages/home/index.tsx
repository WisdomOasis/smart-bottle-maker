import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image, router } from "@ray-js/ray";
import { useDevice, useProps, useActions } from "@ray-js/panel-sdk";
import Res from "@/res";
import dpCodes from "@/constant/dpCodes";
import PowerSwitch from "@/components/PowerSwitch";
import MistModal from "@/components/MistModal";
import FanModal from "@/components/FanModal";
// import CoolingModal from "@/components/CoolingModal";
import DisinfectionCard from "@/components/DisinfectionCard";
import LightCard, { LIGHT_MAP, LightKey } from "@/components/LightCard";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

type TabKey = "climate" | "disinfection" | "light";

interface TabItem {
  key: TabKey;
  label: string;
  actions: string[];
  placeholder: string;
}

interface EnvironmentStatus {
  temperature: number;
  humidity: number;
  connection: "online" | "offline";
}

const fallbackStatus: EnvironmentStatus = {
  temperature: 22,
  humidity: 50,
  connection: "online",
};

const PET_DP_TO_ID: Record<number, "dog" | "cat" | "other"> = {
  0: "dog",
  1: "cat",
  2: "other",
  3: "other",
};

const normalizePetDpValue = (value: unknown): number | null => {
  if (typeof value === "number" && value in PET_DP_TO_ID) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (!Number.isNaN(parsed) && parsed in PET_DP_TO_ID) return parsed;
  }
  return null;
};

const HomePage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);

  const { devInfo } = useDevice((state) => ({
    devInfo: state.devInfo,
  }));
  const dpState = useProps();
  const actions = useActions();
  const [activeTab, setActiveTab] = useState<TabKey>("climate");
  const [powerLocal, setPowerLocal] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<
    "mist" | "fan" | "cooling" | null
  >(null);
  const [mistMode, setMistMode] = useState<"off" | "single" | "double">("off");
  const [fanLevel, setFanLevel] = useState<number>(0);
  const [coolingMode, setCoolingMode] = useState<0 | 1 | 2>(0);
  const [o3Mode, setO3Mode] = useState<"0" | "1" | "2">("0");
  const [o3RemainingMinutes, setO3RemainingMinutes] = useState<number | null>(
    null
  );
  const [lightVal, setLightVal] = useState<number | undefined>(undefined);
  const [lightEnabled, setLightEnabled] = useState<boolean>(false);
  const [lastLightKey, setLastLightKey] = useState<LightKey>("blue");
  const [sceneEnabled, setSceneEnabled] = useState<boolean>(false);
  const [scenePending, setScenePending] = useState<boolean>(false);
  const petDpValue = normalizePetDpValue(dpState?.[dpCodes.pet]);
  const selectedPetId = petDpValue !== null ? PET_DP_TO_ID[petDpValue] : null;
  const isPowerOn = powerLocal;
  const isPetPresent = Boolean(dpState?.[dpCodes.pir]);
  const isO3Running = o3Mode === "1" || o3Mode === "2";
  const o3Remaining = isO3Running
    ? Math.max(0, o3RemainingMinutes ?? (o3Mode === "1" ? 10 : 30))
    : null;
  const isO3Paused = isO3Running && isPetPresent;
  const showO3Toast = isO3Running && activeTab !== "disinfection";
  const o3ToastText = isPetPresent
    ? t("home_o3_toast_pause")
    : t("home_o3_toast_running");
  const formatMetric = (val: number) => {
    const s = val.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  };

  useEffect(() => {
    setActiveModal(null);
  }, [activeTab]);

  useEffect(() => {
    const val = (dpState as Record<string, any>)?.[dpCodes.power];
    if (val === undefined || val === null) return;
    setPowerLocal(Boolean(val));
  }, [dpState?.[dpCodes.power]]);

  const status = useMemo<EnvironmentStatus>(() => {
    const getNumber = (code: string, fallback: number) => {
      const raw = (dpState as Record<string, any>)?.[code];
      if (typeof raw !== "number") return fallback;
      // Some devices report direct values (e.g. 22), others report x10 (e.g. 220).
      return raw > 100 ? raw / 10 : raw;
    };

    const temperature = getNumber(
      dpCodes.tempCurrent,
      fallbackStatus.temperature
    );
    const humidity = getNumber(dpCodes.humidityValue, fallbackStatus.humidity);

    return {
      temperature,
      humidity,
      connection: devInfo?.isOnline ? "online" : fallbackStatus.connection,
    };
  }, [devInfo?.isOnline, dpState]);

  const tabs: TabItem[] = [
    {
      key: "climate",
      label: t("home_tab_climate"),
      actions: ["mist", "fan", "cooling"],
      placeholder: "",
    },
    {
      key: "disinfection",
      label: t("home_tab_disinfection"),
      actions: ["disinfection_quick", "disinfection_deep"],
      placeholder: "",
    },
    {
      key: "light",
      label: t("home_tab_light"),
      actions: ["light_red", "light_blue", "light_green"],
      placeholder: "",
    },
  ];

  const climateActions = [
    {
      label: t("home_action_mist"),
      key: "mist",
      icon: Res.icMist,
      iconActive: Res.icMistActive,
      active: (dpState?.[dpCodes.mist] ?? 0) > 0,
    },
    {
      label: t("home_action_fan"),
      key: "fan",
      icon: Res.icFan,
      iconActive: Res.icFanActive,
      active: (dpState?.[dpCodes.fan] ?? 0) > 0,
    },
    {
      label: t("scene_action_auto"),
      key: "auto",
      icon: Res.icAuto,
      iconActive: Res.icAutoActive,
      active: sceneEnabled,
    },
    // {
    //   label: "冷房",
    //   key: "cooling",
    //   icon: Res.icCooling,
    //   iconActive: Res.icCoolingActive,
    //   active: (dpState?.[dpCodes.cooling] ?? 0) > 0,
    // },
  ];
  const temperatureIcon =
    status.temperature >= 18 && status.temperature <= 22
      ? Res.temperatureBalance
      : status.temperature > 27
      ? Res.temperatureHigh
      : Res.temperatureLow;

  const petStrokeIcon = useMemo(() => {
    switch (selectedPetId) {
      case "cat":
        return Res.petCatWhite;
      case "other":
        return Res.petOtherWhite;
      case "dog":
        return Res.petDogWhite;
      default:
        return null;
    }
  }, [selectedPetId]);

  const setDp = (code: string, val: any) => {
    const fn = (actions as any)?.[code]?.set;
    if (typeof fn === "function") {
      fn(val);
      return true;
    }
    return false;
  };

  const handleAction = (actionKey: string) => {
    if (!isPowerOn) return;

    switch (activeTab) {
      case "climate": {
        if (actionKey === "mist") {
          setActiveModal("mist");
          const mistVal = dpState?.[dpCodes.mist] ?? 0;
          setMistMode(
            mistVal <= 0 ? "off" : mistVal === 2 ? "double" : "single"
          );
          return;
        }
        if (actionKey === "fan") {
          setActiveModal("fan");
          const fanVal = dpState?.[dpCodes.fan] ?? 0;
          setFanLevel(Math.min(5, Math.max(0, fanVal)));
        }
        if (actionKey === "auto") {
          if (scenePending) return;
          const next = !sceneEnabled;
          const published = setDp(dpCodes.autoMode, next);
          if (published) {
            setScenePending(true);
          }
        }
        // if (action === "冷房") {
        //   setActiveModal("cooling");
        //   const coolingVal = dpState?.[dpCodes.cooling] ?? 0;
        //   setCoolingMode(coolingVal === 2 ? 2 : 1);
        // }
        break;
      }
      case "light": {
        if (actionKey === "light_red") setDp(dpCodes.light, LIGHT_MAP.red);
        if (actionKey === "light_blue") setDp(dpCodes.light, LIGHT_MAP.blue);
        if (actionKey === "light_green") setDp(dpCodes.light, LIGHT_MAP.green);
        break;
      }
      default:
        break;
    }
  };

  const handleMistModeChange = (mode: "off" | "single" | "double") => {
    setMistMode(mode);
    if (mode === "off") {
      setDp(dpCodes.mist, 0);
    } else {
      setDp(dpCodes.mist, mode === "single" ? 1 : 2);
    }
  };

  const handleFanChange = (val: number) => {
    setFanLevel(val);
    setDp(dpCodes.fan, val);
  };

  // const handleCoolingChange = (mode: 0 | 1 | 2) => {
  //   setCoolingMode(mode);
  //   setDp(dpCodes.cooling, mode);
  // };

  const rawO3Status = dpState?.[dpCodes.o3Status];
  const o3Status =
    typeof rawO3Status === "number"
      ? rawO3Status
      : rawO3Status != null
      ? Number(rawO3Status)
      : undefined;
  const o3RecoveryPhase = o3Status === 5;
  const o3StatusLabelOverride =
    o3Status === 5
      ? t("home_o3_status_recovery")
      : o3Status === 3
      ? t("home_o3_status_diffuse")
      : undefined;

  // sync UI with dp updates
  useEffect(() => {
    const mistVal = dpState?.[dpCodes.mist];
    if (typeof mistVal === "number") {
      if (mistVal <= 0) {
        setMistMode("off");
      } else {
        setMistMode(mistVal === 2 ? "double" : "single");
      }
    }
    const fanVal = dpState?.[dpCodes.fan];
    if (typeof fanVal === "number") {
      setFanLevel(Math.min(5, Math.max(0, fanVal)));
    }
    const coolingVal = dpState?.[dpCodes.cooling];
    if (typeof coolingVal === "number") {
      setCoolingMode(coolingVal === 2 ? 2 : coolingVal === 1 ? 1 : 0);
    }
    const o3Val = dpState?.[dpCodes.o3];
    if (typeof o3Val === "number") {
      if (o3Val <= 0) {
        setO3Mode("0");
      } else if (o3Val === 2) {
        setO3Mode("2");
      } else {
        setO3Mode("1");
      }
    }
    const o3TimeVal = dpState?.[dpCodes.o3Time];
    if (o3TimeVal !== undefined && o3TimeVal !== null) {
      const parsed =
        typeof o3TimeVal === "number" ? o3TimeVal : Number(o3TimeVal);
      if (!Number.isNaN(parsed)) {
        setO3RemainingMinutes(parsed);
      }
    }
    const lightState = dpState?.[dpCodes.light];
    if (typeof lightState === "number") {
      setLightVal(lightState);
      setLightEnabled(lightState > 0);
      if (lightState === LIGHT_MAP.red) setLastLightKey("red");
      else if (lightState === LIGHT_MAP.green) setLastLightKey("green");
      else if (lightState === LIGHT_MAP.blue) setLastLightKey("blue");
    }
    const autoModeVal = dpState?.[dpCodes.autoMode];
    if (autoModeVal !== undefined && autoModeVal !== null) {
      setSceneEnabled(Boolean(autoModeVal));
      setScenePending(false);
    }
  }, [
    coolingMode,
    dpState?.[dpCodes.cooling],
    dpState?.[dpCodes.fan],
    dpState?.[dpCodes.mist],
    dpState?.[dpCodes.o3],
    dpState?.[dpCodes.o3Time],
    dpState?.[dpCodes.light],
    dpState?.[dpCodes.autoMode],
  ]);

  const handleO3ModeChange = (mode: "0" | "1" | "2") => {
    if (!isPowerOn) return;
    // 消毒進行中只能關閉，不能切換到另一模式
    if (isO3Running && mode !== o3Mode && mode !== "0") return;
    setO3Mode(mode);
    if (mode === "1") setO3RemainingMinutes(10);
    if (mode === "2") setO3RemainingMinutes(30);
    if (mode === "0") setO3RemainingMinutes(null);
    setDp(dpCodes.o3, Number(mode));
    if (mode !== "0") {
      setDp(dpCodes.o3Time, mode === "1" ? 10 : 30);
    }
  };

  const toggleLightEnabled = () => {
    const next = !lightEnabled;
    setLightEnabled(next);
    if (!next) {
      setDp(dpCodes.light, 0);
    } else {
      setDp(dpCodes.light, LIGHT_MAP[lastLightKey]);
    }
  };

  const handleLightSelect = (key: LightKey) => {
    setLastLightKey(key);
    if (isPowerOn) {
      setLightEnabled(true);
      setDp(dpCodes.light, LIGHT_MAP[key]);
    }
  };

  const handleRechoosePet = async () => {
    router.push("/");
  };

  // 本地每分鐘倒數，並在設備上報時校正（單位：分鐘）
  useEffect(() => {
    if (!isO3Running || o3RemainingMinutes === null) return;
    const timer = setInterval(() => {
      setO3RemainingMinutes((prev) => {
        if (prev === null) return prev;
        return Math.max(0, prev - 1);
      });
    }, 60 * 1000);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(timer);
  }, [isO3Running, o3RemainingMinutes]);

  return (
    <View className={styles.container}>
      <View className={styles.navbar}>
        <Image src={Res.airbuggyLogo} className={styles.logo} />
        <View className={styles.navActions}>
          <Text className={styles.navLink} onClick={handleRechoosePet}>
            {t("home_nav_change_pet")}
          </Text>
          {/* <Image src={Res.icNotification} className={styles.navIcon} />
          <Image src={Res.icSettings} className={styles.navIcon} /> */}
        </View>
      </View>

      <View className={styles.statusStrip}>
        <View className={styles.statusBlock}>
          <Text className={styles.statusValue}>
            {formatMetric(status.temperature)}°C
          </Text>
          <Text className={styles.statusLabel}>
            {t("home_status_temperature")}
          </Text>
        </View>
        <View className={styles.statusBlock}>
          <Text className={styles.statusValue}>
            {formatMetric(status.humidity)}%
          </Text>
          <Text className={styles.statusLabel}>
            {t("home_status_humidity")}
          </Text>
        </View>
        <View className={styles.statusBlock}>
          <Image
            src={
              status.connection === "online" ? Res.icConnected : Res.icOffline
            }
            className={styles.statusConnIcon}
          />
          <Text className={styles.statusLabel}>{t("home_status_device")}</Text>
        </View>
      </View>

      {!activeModal && (
        <View className={styles.heroCard}>
          <View className={styles.heroImageWrap}>
            <Image src={temperatureIcon} className={styles.heroImage} />
          </View>
          {petStrokeIcon && (
            <Image src={petStrokeIcon} className={styles.heroPetIcon} />
          )}
        </View>
      )}

      {showO3Toast && (
        <View className={styles.o3Toast}>
          <Image src={Res.icInfoRed} className={styles.o3ToastDot} />
          <Text className={styles.o3ToastText}>{o3ToastText}</Text>
        </View>
      )}

      <View className={styles.divider} />

      <View className={styles.tabs}>
        {tabs.map((tab) => (
          <View
            key={tab.key}
            className={clsx(
              styles.tabItem,
              activeTab === tab.key && styles.tabItemActive
            )}
            onClick={() => setActiveTab(tab.key)}
          >
            <Text>{tab.label}</Text>
          </View>
        ))}
      </View>

      <MistModal
        visible={activeTab === "climate" && activeModal === "mist"}
        mode={mistMode}
        onChangeMode={(key) => handleMistModeChange(key)}
        onClose={() => setActiveModal(null)}
        isPowerOn={isPowerOn}
      />
      <FanModal
        visible={activeTab === "climate" && activeModal === "fan"}
        value={fanLevel}
        onChange={handleFanChange}
        onClose={() => setActiveModal(null)}
        isPowerOn={isPowerOn}
      />
      {/* <CoolingModal
        visible={activeTab === "climate" && activeModal === "cooling"}
        mode={coolingMode}
        onChangeMode={handleCoolingChange}
        onClose={() => setActiveModal(null)}
        isPowerOn={isPowerOn}
      /> */}

      {activeTab === "disinfection" ? (
        <DisinfectionCard
          mode={o3Mode}
          isRunning={isO3Running}
          isPaused={isO3Paused}
          remainingMinutes={o3Remaining ?? undefined}
          statusLabelOverride={o3StatusLabelOverride}
          isPowerOn={isPowerOn}
          isPetPresent={isPetPresent}
          onChangeMode={handleO3ModeChange}
        />
      ) : activeTab === "light" ? (
        <LightCard
          value={lightVal}
          isPowerOn={isPowerOn}
          enabled={lightEnabled}
          onToggle={toggleLightEnabled}
          onSelect={(key) => {
            handleLightSelect(key);
          }}
        />
      ) : (
        <View className={styles.actionsRow}>
          {climateActions.map((action) => (
            <View
              key={action.key}
              className={clsx(
                styles.actionBadge,
                action.active && styles.actionBadgeActive,
                activeModal === action.key && styles.actionBadgeExpanded,
                (!isPowerOn || (action.key === "auto" && scenePending)) &&
                  styles.disabled
              )}
              onClick={() => handleAction(action.key)}
            >
              <View
                className={clsx(
                  styles.actionIcon,
                  action.active && styles.actionIconActive
                )}
              >
                <Image
                  src={action.active ? action.iconActive : action.icon}
                  className={styles.actionIconImg}
                />
              </View>
              <Text className={styles.actionLabel}>{action.label}</Text>
            </View>
          ))}
        </View>
      )}

      <View className={styles.powerWrapper}>
        <PowerSwitch
          isOn={isPowerOn}
          onToggle={(next) => {
            setPowerLocal(next);
            setDp(dpCodes.power, next);
          }}
        />
      </View>
    </View>
  );
};

export default HomePage;
