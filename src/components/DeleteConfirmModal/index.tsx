import React from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmModal: React.FC<Props> = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
}) => {
  if (!visible) return null;

  return (
    <View className={styles.overlay} onClick={onCancel}>
      <View
        className={styles.dialog}
        onClick={(e: { stopPropagation?: () => void }) =>
          e?.stopPropagation?.()
        }
      >
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.message}>{message}</Text>
        <View className={styles.actions}>
          <View className={styles.btnCancel} onClick={onCancel}>
            <Text className={styles.btnCancelText}>
              {Strings.getLang("common_cancel")}
            </Text>
          </View>
          <View className={clsx(styles.btnConfirm)} onClick={onConfirm}>
            <Text className={styles.btnConfirmText}>
              {Strings.getLang("common_confirm")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeleteConfirmModal;
