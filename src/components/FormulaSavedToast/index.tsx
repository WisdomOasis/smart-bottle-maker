/* eslint-disable react/require-default-props */
import React, { useEffect } from "react";
import { View, Text } from "@ray-js/ray";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  durationMs?: number;
}

const FormulaSavedToast: React.FC<Props> = ({
  visible,
  message,
  onDismiss,
  durationMs = 2500,
}) => {
  useEffect(() => {
    if (!visible) return undefined;
    const timer = setTimeout(onDismiss, durationMs);
    return () => clearTimeout(timer);
  }, [visible, durationMs, onDismiss]);

  if (!visible) return null;

  return (
    <View className={styles.toastWrap}>
      <View className={styles.toast}>
        <Text className={styles.toastText}>{message}</Text>
      </View>
    </View>
  );
};

export default FormulaSavedToast;
