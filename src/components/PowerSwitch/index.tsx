import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import clsx from "clsx";
import Res from "@/res";
import styles from "./index.module.less";

interface Props {
  isOn: boolean;
  onToggle: (next: boolean) => void;
}

const PowerSwitch: React.FC<Props> = ({ isOn, onToggle }) => {
  const leftActive = !isOn;
  const rightActive = isOn;
  const hint = isOn ? "≪ 電源を切る" : "電源を入れる ≫";

  return (
    <View className={styles.power}>
      <View
        className={clsx(
          styles.powerCircle,
          isOn ? styles.powerOffBg : styles.powerOnBg,
          leftActive && styles.powerCircleActive
        )}
        onClick={(e: any) => {
          e?.stopPropagation?.();
          onToggle(false);
        }}
      >
        <Image
          src={leftActive ? Res.icPowerOffActive : Res.icPowerOff}
          className={styles.powerIconImg}
        />
      </View>
      <View
        className={styles.powerHintWrap}
        onClick={(e: any) => {
          e?.stopPropagation?.();
          onToggle(!isOn);
        }}
      >
        <Text className={styles.powerHint}>{hint}</Text>
      </View>
      <View
        className={clsx(
          styles.powerCircle,
          isOn ? styles.powerOnBg : styles.powerOffBg,
          rightActive && styles.powerCircleActive
        )}
        onClick={(e: any) => {
          e?.stopPropagation?.();
          onToggle(true);
        }}
      >
        <Image
          src={rightActive ? Res.icPowerOnActive : Res.icPowerOn}
          className={styles.powerIconImg}
        />
      </View>
    </View>
  );
};

export default PowerSwitch;
