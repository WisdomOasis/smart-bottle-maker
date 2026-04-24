import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import { useDevice, useProps, useActions } from "@ray-js/panel-sdk";
import Res from "@/res";
import dpCodes from "@/constant/dpCodes";
import PowerSwitch from "@/components/PowerSwitch";
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

type DisinfectionMode = "quick" | "deep";

const DISINFECTION_DURATION: Record<DisinfectionMode, number> = {
  quick: 60,
  deep: 90,
};
const POST_O3_FAN_DURATION = 5;

const fallbackStatus: EnvironmentStatus = {
  temperature: 22,
  humidity: 50,
  connection: "online",
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
  const [activeModal, setActiveModal] = useState<"fan" | "cooling" | null>(
    null
  );
  const [fanLevel, setFanLevel] = useState<number>(0);
  const [coolingMode, setCoolingMode] = useState<0 | 1 | 2>(0);
  const [o3Enabled, setO3Enabled] = useState<boolean>(false);
  const [disinfectionMode, setDisinfectionMode] =
    useState<DisinfectionMode>("quick");
  const [o3RemainingMinutes, setO3RemainingMinutes] = useState<number | null>(
    null
  );
  const [lightVal, setLightVal] = useState<number | undefined>(undefined);
  const [lightEnabled, setLightEnabled] = useState<boolean>(false);
  const [lastLightKey, setLastLightKey] = useState<LightKey>("blue");
  const [sceneEnabled, setSceneEnabled] = useState<boolean>(false);
  const [scenePending, setScenePending] = useState<boolean>(false);
  const [mistPending, setMistPending] = useState<boolean>(false);
  const isPowerOn = powerLocal;
  const isPetPresent = Boolean(dpState?.[dpCodes.pir]);
  const isO3Running = o3Enabled;
  const o3Remaining = isO3Running
    ? Math.max(0, o3RemainingMinutes ?? DISINFECTION_DURATION[disinfectionMode])
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
      actions: ["disinfection"],
      placeholder: "",
    },
    {
      key: "light",
      label: t("home_tab_light"),
      actions: ["light_white", "light_blue", "light_green"],
      placeholder: "",
    },
  ];

  const climateActions = [
    {
      label: t("home_action_mist"),
      key: "mist",
      icon: Res.icMist,
      iconActive: Res.icMistActive,
      active: Number(dpState?.[dpCodes.mist] ?? 0) === 2,
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
    status.temperature <= 18
      ? Res.temperatureLow
      : status.temperature >= 27
      ? Res.temperatureHigh
      : Res.temperatureBalance;
  const temperatureLabel =
    status.temperature <= 18
      ? t("home_temperature_low")
      : status.temperature >= 27
      ? t("home_temperature_high")
      : t("home_temperature_good");

  const petStrokeIcon = Res.petDogWhite;

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
          if (mistPending) return;
          const raw = dpState?.[dpCodes.mist];
          const mistVal = typeof raw === "number" ? raw : Number(raw ?? 0);
          const cur = mistVal === 2;
          const next = !cur;
          const published = setDp(dpCodes.mist, next ? 2 : 0);
          if (published) {
            setMistPending(true);
          }
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
        if (actionKey === "light_white") setDp(dpCodes.light, LIGHT_MAP.white);
        if (actionKey === "light_blue") setDp(dpCodes.light, LIGHT_MAP.blue);
        if (actionKey === "light_green") setDp(dpCodes.light, LIGHT_MAP.green);
        break;
      }
      default:
        break;
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
  const postO3FanRemaining =
    o3Status === 3
      ? o3RemainingMinutes !== null && o3RemainingMinutes !== undefined
        ? Math.min(POST_O3_FAN_DURATION, Math.max(0, o3RemainingMinutes))
        : POST_O3_FAN_DURATION
      : null;
  const isPostO3FanFinished =
    o3Status === 3 && postO3FanRemaining !== null && postO3FanRemaining <= 0;
  const postO3FanStatusLabel = isPostO3FanFinished
    ? t("home_o3_status_fan_finished")
    : postO3FanRemaining !== null && postO3FanRemaining > 0
    ? Strings.formatValue(
        "home_o3_status_fan_remaining_minutes",
        postO3FanRemaining
      )
    : undefined;
  const o3StatusLabelOverride =
    postO3FanStatusLabel ??
    (o3Status === 5
      ? t("home_o3_status_recovery")
      : o3Status === 3
      ? t("home_o3_status_diffuse")
      : undefined);

  // sync UI with dp updates
  useEffect(() => {
    const mistVal = dpState?.[dpCodes.mist];
    if (typeof mistVal === "number") {
      setMistPending(false);
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
      setO3Enabled(o3Val > 0);
    }
    const o3TimeVal = dpState?.[dpCodes.o3Time];
    if (o3TimeVal !== undefined && o3TimeVal !== null) {
      const parsed =
        typeof o3TimeVal === "number" ? o3TimeVal : Number(o3TimeVal);
      if (!Number.isNaN(parsed)) {
        setO3RemainingMinutes(parsed);
        if (parsed === DISINFECTION_DURATION.quick) {
          setDisinfectionMode("quick");
        } else if (parsed === DISINFECTION_DURATION.deep) {
          setDisinfectionMode("deep");
        }
      }
    }
    const lightState = dpState?.[dpCodes.light];
    if (typeof lightState === "number") {
      setLightVal(lightState);
      setLightEnabled(lightState > 0);
      if (lightState === LIGHT_MAP.white) setLastLightKey("white");
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

  const toggleO3Enabled = () => {
    if (!isPowerOn) return;
    const next = !o3Enabled;
    setO3Enabled(next);
    if (next) {
      const duration = DISINFECTION_DURATION[disinfectionMode];
      setO3RemainingMinutes(duration);
      setDp(dpCodes.o3, 1);
      setDp(dpCodes.o3Time, duration);
    } else {
      setO3RemainingMinutes(null);
      setDp(dpCodes.o3, 0);
    }
  };

  const handleDisinfectionModeChange = (mode: DisinfectionMode) => {
    setDisinfectionMode(mode);
    if (!isPowerOn) return;
    if (!o3Enabled) return;
    const duration = DISINFECTION_DURATION[mode];
    setO3RemainingMinutes(duration);
    setDp(dpCodes.o3Time, duration);
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
        {/* <View className={styles.navActions}>
          <Image src={Res.icNotification} className={styles.navIcon} />
          <Image src={Res.icSettings} className={styles.navIcon} />
        </View> */}
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
            <Text className={styles.heroTemperatureLabel}>
              {temperatureLabel}
            </Text>
          </View>
          <Image src={petStrokeIcon} className={styles.heroPetIcon} />
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
          enabled={o3Enabled}
          isRunning={isO3Running}
          isPaused={isO3Paused}
          mode={disinfectionMode}
          onModeChange={handleDisinfectionModeChange}
          remainingMinutes={o3Remaining ?? undefined}
          statusLabelOverride={o3StatusLabelOverride}
          isPowerOn={isPowerOn}
          isPetPresent={isPetPresent}
          onToggle={toggleO3Enabled}
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
                (!isPowerOn ||
                  (action.key === "auto" && scenePending) ||
                  (action.key === "mist" && mistPending)) &&
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
