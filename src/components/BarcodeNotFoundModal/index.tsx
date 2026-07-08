/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  /** 全黑背景（掃碼後顯示，模擬相機頁視覺） */
  darkBackdrop?: boolean;
  onAddFormula: () => void;
  onScanAgain: () => void;
}

const BarcodeNotFoundModal: React.FC<Props> = ({
  visible,
  darkBackdrop = true,
  onAddFormula,
  onScanAgain,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  if (!visible) return null;

  return (
    <View className={clsx(styles.overlay, !darkBackdrop && styles.overlayDim)}>
      <View
        className={styles.sheet}
        onClick={(e: { stopPropagation?: () => void }) =>
          e?.stopPropagation?.()
        }
      >
        <View className={styles.content}>
          <Text className={styles.title}>{t("barcode_not_found_title")}</Text>
          <Text className={styles.message}>{t("barcode_not_found")}</Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onAddFormula}>
            <Text className={styles.btnSecondaryText}>
              {t("barcode_add_formula")}
            </Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onScanAgain}>
            <Text className={styles.btnPrimaryText}>
              {t("barcode_scan_again")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BarcodeNotFoundModal;
