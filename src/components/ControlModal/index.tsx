import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import ToggleSwitch from "@/components/ToggleSwitch";
import Res from "@/res";
import Strings from "@/i18n";
import styles from "./index.module.less";

interface Props {
  title: string;
  // eslint-disable-next-line react/require-default-props
  enabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  onToggleEnabled?: (next: boolean) => void;
  onClose: () => void;
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  hideToggle?: boolean;
}

const ControlModal: React.FC<Props> = ({
  title,
  enabled,
  onToggleEnabled,
  onClose,
  children,
  hideToggle = true,
}) => {
  const isOn = Boolean(enabled);

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>{title}</Text>
        {!hideToggle && onToggleEnabled && (
          <ToggleSwitch checked={isOn} onToggle={onToggleEnabled} />
        )}
      </View>
      <View className={styles.content}>{children}</View>
      <View className={styles.closeRow} onClick={onClose}>
        <Text className={styles.closeText}>
          {Strings.getLang("common_close_window")}
        </Text>
        <Image src={Res.icArrowDown} className={styles.closeIcon} />
      </View>
    </View>
  );
};

export default ControlModal;
