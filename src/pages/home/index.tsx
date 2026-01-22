import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image, router, getStorage } from "@ray-js/ray";
import { useDevice, useProps, useActions } from "@ray-js/panel-sdk";
import Res from "@/res";
import dpCodes from "@/constant/dpCodes";
import PowerSwitch from "@/components/PowerSwitch";
import MistModal from "@/components/MistModal";
import FanModal from "@/components/FanModal";
// import CoolingModal from "@/components/CoolingModal";
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
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const isPowerOn = powerLocal;
  const isPetPresent = Boolean(dpState?.[dpCodes.pir]);
  const isO3Running = o3Mode === "1" || o3Mode === "2";
  const o3Remaining = isO3Running
    ? Math.max(0, o3RemainingMinutes ?? (o3Mode === "1" ? 10 : 40))
    : null;
  const isO3Paused = isO3Running && isPetPresent;
  const showO3Toast = isO3Running && activeTab !== "disinfection";
  const o3ToastText = isPetPresent
    ? "人・動物検知、消毒停止。解除後、再開。"
    : "消毒中、人・動物は遠ざけてください。";
  const formatMetric = (val: number) => {
    const s = val.toFixed(1);
    return s.endsWith(".0") ? s.slice(0, -2) : s;
  };

  useEffect(() => {
    setActiveModal(null);
  }, [activeTab]);

  useEffect(() => {
    getStorage({
      key: "selectedPetId",
      success: (res) => {
        if (res.data) {
          setSelectedPetId(res.data);
        }
      },
    });
  }, []);

  useEffect(() => {
    const val = (dpState as Record<string, any>)?.[dpCodes.power];
    if (val === undefined || val === null) return;
    setPowerLocal(Boolean(val));
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
  }, [selectedPetId]);

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
          const mistVal = dpState?.[dpCodes.mist] ?? 0;
          setMistMode(
            mistVal <= 0 ? "off" : mistVal === 2 ? "double" : "single"
          );
          return;
        }
        if (action === "吹く") {
          setActiveModal("fan");
          const fanVal = dpState?.[dpCodes.fan] ?? 0;
          setFanLevel(Math.min(5, Math.max(0, fanVal)));
        }
        // if (action === "冷房") {
        //   setActiveModal("cooling");
        //   const coolingVal = dpState?.[dpCodes.cooling] ?? 0;
        //   setCoolingMode(coolingVal === 2 ? 2 : 1);
        // }
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
    if (typeof o3TimeVal === "number") {
      setO3RemainingMinutes(o3TimeVal);
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
    dpState?.[dpCodes.o3Time],
    dpState?.[dpCodes.light],
  ]);

  const handleO3ModeChange = (mode: "0" | "1" | "2") => {
    if (!isPowerOn) return;
    // 消毒進行中只能關閉，不能切換到另一模式
    if (isO3Running && mode !== o3Mode && mode !== "0") return;
    setO3Mode(mode);
    if (mode === "1") setO3RemainingMinutes(10);
    if (mode === "2") setO3RemainingMinutes(40);
    if (mode === "0") setO3RemainingMinutes(null);
    setDp(dpCodes.o3, Number(mode));
    if (mode !== "0") {
      setDp(dpCodes.o3Time, mode === "1" ? 10 : 40);
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
          statusLabelOverride={
            o3RecoveryPhase ? "緊急停止後の回復フェーズ" : undefined
          }
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
            setDp(dpCodes.power, next);
          }}
        />
      </View>
    </View>
  );
};

export default HomePage;
