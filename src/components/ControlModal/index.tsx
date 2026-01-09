import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import ToggleSwitch from "@/components/ToggleSwitch";
import Res from "@/res";
import styles from "./index.module.less";

interface Props {
  title: string;
  enabled: boolean;
  onToggleEnabled: (next: boolean) => void;
  onClose: () => void;
  children: React.ReactNode;
}

const ControlModal: React.FC<Props> = ({
  title,
  enabled,
  onToggleEnabled,
  onClose,
  children,
}) => {
  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>{title}</Text>
        <ToggleSwitch checked={enabled} onToggle={onToggleEnabled} />
      </View>
      <View className={styles.content}>{children}</View>
      <View className={styles.closeRow} onClick={onClose}>
        <Text className={styles.closeText}>ウィンドウを閉じる</Text>
        <Image src={Res.icArrowDown} className={styles.closeIcon} />
      </View>
    </View>
  );
};

export default ControlModal;
