import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image, router } from "@ray-js/ray";
import { useDevice, useProps, useActions } from "@ray-js/panel-sdk";
import Res from "@/res";
import { getSelectedPet } from "@/utils/petSelection";
import dpCodes from "@/constant/dpCodes";
import PowerSwitch from "@/components/PowerSwitch";
import MistModal from "@/components/MistModal";
import FanModal from "@/components/FanModal";
import CoolingModal from "@/components/CoolingModal";
import DisinfectionCard from "@/components/DisinfectionCard";
import LightCard, { LIGHT_MAP, LightKey } from "@/components/LightCard";
import styles from "./index.module.less";

type TabKey = "climate" | "disinfection" | "light" | "scene";

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

const tabs: TabItem[] = [
  {
    key: "climate",
    label: "温湿度管理",
    actions: ["噴霧", "吹く", "冷房"],
    placeholder: "",
  },
  {
    key: "disinfection",
    label: "速消毒",
    actions: ["迅速消毒", "徹底消毒"],
    placeholder: "",
  },
  {
    key: "light",
    label: "灯",
    actions: ["赤色", "青色", "緑色"],
    placeholder: "",
  },
  // {
  //   key: "scene",
  //   label: "シーン",
  //   actions: ["自動", "急速冷却", "静音"],
  //   placeholder: "",
  // },
];

const fallbackStatus: EnvironmentStatus = {
  temperature: 22,
  humidity: 50,
  connection: "online",
};

const HomePage: React.FC = () => {
  const { devInfo, dpSchema } = useDevice((state) => ({
    devInfo: state.devInfo,
    dpSchema: state.dpSchema,
  }));
  const dpState = useProps();
  const actions = useActions();
  const [activeTab, setActiveTab] = useState<TabKey>("climate");
  const [powerLocal, setPowerLocal] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<
    "mist" | "fan" | "cooling" | null
  >(null);
  const [mistMode, setMistMode] = useState<"single" | "double">("single");
  const [mistEnabled, setMistEnabled] = useState<boolean>(false);
  const [fanEnabled, setFanEnabled] = useState<boolean>(false);
  const [fanLevel, setFanLevel] = useState<number>(1);
  const [coolingEnabled, setCoolingEnabled] = useState<boolean>(false);
  const [coolingMode, setCoolingMode] = useState<1 | 2>(1);
  const [o3Enabled, setO3Enabled] = useState<boolean>(false);
  const [o3Mode, setO3Mode] = useState<"1" | "4">("1");
  const [lightVal, setLightVal] = useState<number | undefined>(undefined);
  const [lightEnabled, setLightEnabled] = useState<boolean>(false);
  const [lastLightKey, setLastLightKey] = useState<LightKey>("blue");
  const isPowerOn = powerLocal;
  const isPetPresent = Boolean(dpState?.[dpCodes.pir]);
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
    if (val === 0 || val === false) {
      setPowerLocal(false);
    } else {
      setPowerLocal(Boolean(val));
    }
  }, [dpState?.[dpCodes.power]]);

  const status = useMemo<EnvironmentStatus>(() => {
    const getNumber = (code: string, fallback: number) => {
      const raw = (dpState as Record<string, any>)?.[code];
      if (typeof raw !== "number") return fallback;
      return raw / 10;
    };

    const temperature = getNumber("temp_current", fallbackStatus.temperature);
    const humidity = getNumber("humidity_value", fallbackStatus.humidity);

    return {
      temperature,
      humidity,
      connection: devInfo?.isOnline ? "online" : fallbackStatus.connection,
    };
  }, [devInfo?.isOnline, dpSchema, dpState]);

  const climateActions = [
    {
      label: "噴霧",
      key: "mist",
      icon: Res.icMist,
      iconActive: Res.icMistActive,
      active: (dpState?.[dpCodes.mist] ?? 0) > 0,
    },
    {
      label: "吹く",
      key: "fan",
      icon: Res.icFan,
      iconActive: Res.icFanActive,
      active: (dpState?.[dpCodes.fan] ?? 0) > 0,
    },
    {
      label: "冷房",
      key: "cooling",
      icon: Res.icCooling,
      iconActive: Res.icCoolingActive,
      active: (dpState?.[dpCodes.cooling] ?? 0) > 0,
    },
  ];

  const temperatureIcon =
    status.temperature >= 18 && status.temperature <= 22
      ? Res.temperatureBalance
      : status.temperature > 27
      ? Res.temperatureHigh
      : Res.temperatureLow;

  const petStrokeIcon = useMemo(() => {
    const petId = getSelectedPet();
    switch (petId) {
      case "cat":
        return Res.petCatWhite;
      case "squirrel":
        return Res.petSquirrelWhite;
      case "hamster":
        return Res.petHamsterWhite;
      case "rabbit":
        return Res.petRabbitWhite;
      case "bird":
        return Res.petBirdWhite;
      case "other":
        return Res.petOtherWhite;
      default:
        return Res.petDogWhite;
    }
  }, []);

  const setDp = (code: string, val: any) => {
    const fn = (actions as any)?.[code]?.set;
    if (typeof fn === "function") {
      fn(val);
    }
  };

  const handleAction = (action: string) => {
    if (!isPowerOn) return;

    switch (activeTab) {
      case "climate": {
        if (action === "噴霧") {
          setActiveModal("mist");
          setMistEnabled((dpState?.[dpCodes.mist] ?? 0) > 0);
          const mistVal = dpState?.[dpCodes.mist] ?? 0;
          setMistMode(mistVal === 2 ? "double" : "single");
          return;
        }
        if (action === "吹く") {
          setActiveModal("fan");
          const fanVal = dpState?.[dpCodes.fan] ?? 0;
          setFanEnabled(fanVal > 0);
          setFanLevel(fanVal > 0 ? Math.min(5, Math.max(1, fanVal)) : 1);
          return;
        }
        if (action === "冷房") {
          setActiveModal("cooling");
          const coolingVal = dpState?.[dpCodes.cooling] ?? 0;
          setCoolingEnabled(coolingVal > 0);
          setCoolingMode(coolingVal === 2 ? 2 : 1);
        }
        break;
      }
      case "disinfection": {
        const hasPet = !!dpState?.[dpCodes.pir];
        if (hasPet) {
          console.log("存在检测中，暂不启动消毒");
          break;
        }
        if (action === "迅速消毒") {
          setDp(dpCodes.o3, 1);
        }
        if (action === "徹底消毒") {
          setDp(dpCodes.o3, 4);
        }
        break;
      }
      case "light": {
        if (action === "赤色") setDp(dpCodes.light, LIGHT_MAP.red);
        if (action === "青色") setDp(dpCodes.light, LIGHT_MAP.blue);
        if (action === "緑色") setDp(dpCodes.light, LIGHT_MAP.green);
        break;
      }
      // case "scene": {
      //   if (action === "自動") {
      //     // simple auto: adjust fan based on temperature/humidity
      //     const autoFan =
      //       status.temperature > 28 ? 5 : status.temperature > 26 ? 4 : 2;
      //     const autoCooling = status.temperature > 26 ? 2 : 0;
      //     setDp(dpCodes.fan, autoFan);
      //     setDp(dpCodes.cooling, autoCooling);
      //   }
      //   if (action === "急速冷却") {
      //     setDp(dpCodes.fan, 5);
      //     setDp(dpCodes.cooling, 2);
      //     setDp(dpCodes.mist, 2);
      //   }
      //   if (action === "静音") {
      //     setDp(dpCodes.fan, 1);
      //     setDp(dpCodes.cooling, 0);
      //   }
      //   break;
      // }
      default:
        break;
    }
  };

  const handleMistModeChange = (mode: "single" | "double") => {
    setMistMode(mode);
    setDp(dpCodes.mist, mode === "single" ? 1 : 2);
  };

  const toggleMistEnabled = () => {
    const next = !mistEnabled;
    setMistEnabled(next);
    if (!next) {
      setDp(dpCodes.mist, 0);
    } else {
      setDp(dpCodes.mist, mistMode === "single" ? 1 : 2);
    }
  };

  const toggleFanEnabled = () => {
    const next = !fanEnabled;
    setFanEnabled(next);
    if (!next) {
      setDp(dpCodes.fan, 0);
    } else {
      setDp(dpCodes.fan, fanLevel);
    }
  };

  const handleFanChange = (val: number) => {
    setFanLevel(val);
    setDp(dpCodes.fan, val);
  };

  const toggleCoolingEnabled = () => {
    const next = !coolingEnabled;
    setCoolingEnabled(next);
    if (!next) {
      setDp(dpCodes.cooling, 0);
    } else {
      setDp(dpCodes.cooling, coolingMode);
    }
  };

  const handleCoolingChange = (mode: 1 | 2) => {
    setCoolingMode(mode);
    setDp(dpCodes.cooling, mode);
  };

  // sync UI with dp updates
  useEffect(() => {
    const mistVal = dpState?.[dpCodes.mist];
    if (typeof mistVal === "number") {
      setMistEnabled(mistVal > 0);
      setMistMode(mistVal === 2 ? "double" : "single");
    }
    const fanVal = dpState?.[dpCodes.fan];
    if (typeof fanVal === "number") {
      setFanEnabled(fanVal > 0);
      setFanLevel(fanVal > 0 ? Math.min(5, Math.max(1, fanVal)) : 1);
    }
    const coolingVal = dpState?.[dpCodes.cooling];
    if (typeof coolingVal === "number") {
      setCoolingEnabled(coolingVal > 0);
      setCoolingMode(coolingVal === 2 ? 2 : coolingVal === 1 ? 1 : coolingMode);
    }
    const o3Val = dpState?.[dpCodes.o3];
    if (typeof o3Val === "number") {
      if (o3Val <= 0) {
        setO3Enabled(false);
      } else {
        setO3Enabled(true);
        setO3Mode(o3Val === 4 ? "4" : "1");
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
  }, [
    coolingMode,
    dpState?.[dpCodes.cooling],
    dpState?.[dpCodes.fan],
    dpState?.[dpCodes.mist],
    dpState?.[dpCodes.o3],
    dpState?.[dpCodes.light],
  ]);

  const handleO3Toggle = () => {
    if (!isPowerOn || isPetPresent) return;
    const next = !o3Enabled;
    setO3Enabled(next);
    setDp(dpCodes.o3, next ? Number(o3Mode) : 0);
  };

  const handleO3ModeChange = (mode: "1" | "4") => {
    setO3Mode(mode);
    if (o3Enabled && isPowerOn && !isPetPresent) {
      setDp(dpCodes.o3, Number(mode));
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

  const handleRechoosePet = () => {
    router.push("/");
  };

  return (
    <View className={styles.container}>
      <View className={styles.navbar}>
        <Image src={Res.airbuggyLogo} className={styles.logo} />
        <View className={styles.navActions}>
          <Text className={styles.navLink} onClick={handleRechoosePet}>
            ペット変更
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
          <Text className={styles.statusLabel}>気温</Text>
        </View>
        <View className={styles.statusBlock}>
          <Text className={styles.statusValue}>
            {formatMetric(status.humidity)}%
          </Text>
          <Text className={styles.statusLabel}>湿度</Text>
        </View>
        <View className={styles.statusBlock}>
          <Image
            src={
              status.connection === "online" ? Res.icConnected : Res.icOffline
            }
            className={styles.statusConnIcon}
          />
          <Text className={styles.statusLabel}>デバイス検出</Text>
        </View>
      </View>

      {!activeModal && (
        <View className={styles.heroCard}>
          <View className={styles.heroImageWrap}>
            <Image src={temperatureIcon} className={styles.heroImage} />
          </View>
          <Image src={petStrokeIcon} className={styles.heroPetIcon} />
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
        enabled={mistEnabled}
        mode={mistMode}
        onToggleEnabled={toggleMistEnabled}
        onChangeMode={(key) => handleMistModeChange(key)}
        onClose={() => setActiveModal(null)}
      />
      <FanModal
        visible={activeTab === "climate" && activeModal === "fan"}
        enabled={fanEnabled}
        value={fanLevel}
        onToggleEnabled={toggleFanEnabled}
        onChange={handleFanChange}
        onClose={() => setActiveModal(null)}
      />
      <CoolingModal
        visible={activeTab === "climate" && activeModal === "cooling"}
        enabled={coolingEnabled}
        mode={coolingMode}
        onToggleEnabled={toggleCoolingEnabled}
        onChangeMode={handleCoolingChange}
        onClose={() => setActiveModal(null)}
      />

      {activeTab === "disinfection" ? (
        <DisinfectionCard
          enabled={o3Enabled}
          mode={o3Mode}
          isPowerOn={isPowerOn}
          isPetPresent={isPetPresent}
          onToggle={handleO3Toggle}
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
                !isPowerOn && styles.disabled
              )}
              onClick={() => handleAction(action.label)}
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
            setDp(dpCodes.power, next ? 1 : 0);
          }}
        />
      </View>
    </View>
  );
};

export default HomePage;
