import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import { useDevice, useProps, useActions } from "@ray-js/panel-sdk";
import Res from "@/res";
import { getSelectedPet } from "@/utils/petSelection";
import dpCodes from "@/constant/dpCodes";
import PowerSwitch from "@/components/PowerSwitch";
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
  {
    key: "scene",
    label: "シーン",
    actions: ["自動", "急速冷却", "静音"],
    placeholder: "",
  },
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
  const isPowerOn = powerLocal;

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
      const scale = (dpSchema as any)?.[code]?.property?.scale || 0;
      return raw / 10 ** scale;
    };

    const temperature = getNumber("temp_current", fallbackStatus.temperature);
    const humidity = getNumber("humidity_value", fallbackStatus.humidity);

    return {
      temperature,
      humidity,
      connection: devInfo?.isOnline ? "online" : fallbackStatus.connection,
    };
  }, [devInfo?.isOnline, dpSchema, dpState]);

  const activeTabConfig = useMemo(
    () => tabs.find((tab) => tab.key === activeTab) || tabs[0],
    [activeTab]
  );

  const temperatureIcon =
    status.temperature >= 20 && status.temperature <= 26
      ? Res.temperatureBalance
      : status.temperature > 26
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
          const next = ((dpState?.[dpCodes.mist] ?? 0) + 1) % 3;
          setDp(dpCodes.mist, next);
        }
        if (action === "吹く") {
          const next = ((dpState?.[dpCodes.fan] ?? 0) + 1) % 6;
          setDp(dpCodes.fan, next);
        }
        if (action === "冷房") {
          const next = ((dpState?.[dpCodes.cooling] ?? 0) + 1) % 3; // 0: off,1:intermittent,2:always
          setDp(dpCodes.cooling, next);
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
          setDp(dpCodes.o3, 1); // start
        }
        if (action === "徹底消毒") {
          setDp(dpCodes.o3, 2); // stronger/stage
        }
        break;
      }
      case "light": {
        if (action === "赤色") setDp(dpCodes.light, 0xff0000);
        if (action === "青色") setDp(dpCodes.light, 0x0000ff);
        if (action === "緑色") setDp(dpCodes.light, 0x00ff00);
        break;
      }
      case "scene": {
        if (action === "自動") {
          // simple auto: adjust fan based on temperature/humidity
          const autoFan =
            status.temperature > 28 ? 5 : status.temperature > 26 ? 4 : 2;
          const autoCooling = status.temperature > 26 ? 2 : 0;
          setDp(dpCodes.fan, autoFan);
          setDp(dpCodes.cooling, autoCooling);
        }
        if (action === "急速冷却") {
          setDp(dpCodes.fan, 5);
          setDp(dpCodes.cooling, 2);
          setDp(dpCodes.mist, 2);
        }
        if (action === "静音") {
          setDp(dpCodes.fan, 1);
          setDp(dpCodes.cooling, 0);
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <View className={styles.container}>
      <View className={styles.navbar}>
        <Image src={Res.airbuggyLogo} className={styles.logo} />
        <View className={styles.navActions}>
          <Image src={Res.icNotification} className={styles.navIcon} />
          <Image src={Res.icSettings} className={styles.navIcon} />
        </View>
      </View>

      <View className={styles.statusStrip}>
        <View className={styles.statusBlock}>
          <Text className={styles.statusValue}>
            {status.temperature.toFixed(0)}°C
          </Text>
          <Text className={styles.statusLabel}>気温</Text>
        </View>
        <View className={styles.statusBlock}>
          <Text className={styles.statusValue}>
            {status.humidity.toFixed(0)}%
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

      <View className={styles.heroCard}>
        <Image src={temperatureIcon} className={styles.heroImage} />
        <Image src={petStrokeIcon} className={styles.heroPetIcon} />
      </View>

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

      <View className={styles.actionsRow}>
        {activeTabConfig.actions.map((action) => (
          <View
            key={action}
            className={clsx(styles.actionBadge, !isPowerOn && styles.disabled)}
            onClick={() => handleAction(action)}
          >
            <Text>{action}</Text>
          </View>
        ))}
      </View>

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
