/* eslint-disable react/require-default-props */
import React, { useCallback } from "react";
import { View, Text } from "@ray-js/ray";
import BrandRadio from "@/components/BrandRadio";
import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { formatFormulaStageRatio } from "@/utils/formulaEntrySearch";
import { formatLabeledValue } from "@/i18n/formatters";
import styles from "./index.module.less";

interface Props {
  entry: PowderBrandEntry;
  selected: boolean;
  onOpenDetails: () => void;
  onSelect: () => void;
}

const FormulaBrandCard: React.FC<Props> = ({
  entry,
  selected,
  onOpenDetails,
  onSelect,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  const handleOpenDetails = useCallback(
    (e: { stopPropagation?: () => void }) => {
      e?.stopPropagation?.();
      onOpenDetails();
    },
    [onOpenDetails]
  );

  const handleSelect = useCallback(
    (e: { stopPropagation?: () => void }) => {
      e?.stopPropagation?.();
      onSelect();
    },
    [onSelect]
  );

  return (
    <View className={styles.card}>
      <View className={styles.textCol} onClick={handleOpenDetails}>
        <Text className={styles.brandName}>{entry.brandLabel}</Text>
        <Text className={styles.stageRatio}>
          {formatFormulaStageRatio(
            entry.stageLabel,
            entry.powderG,
            entry.waterMl
          )}
        </Text>
        {entry.barcode ? (
          <Text className={styles.barcode}>
            {formatLabeledValue(
              t("barcode_result_barcode_label"),
              entry.barcode
            )}
          </Text>
        ) : null}
      </View>
      <View className={styles.radioHit} onClick={handleSelect}>
        <BrandRadio checked={selected} />
      </View>
    </View>
  );
};

export default FormulaBrandCard;
