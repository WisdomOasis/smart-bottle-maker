/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import BrandRadio from "@/components/BrandRadio";
import { IC_BRAND_EDIT_URI } from "@/res/icBrandEditUri";
import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";
import { formatBrandSeriesStage } from "@/i18n/formatters";
import styles from "./index.module.less";

interface Props {
  entry: PowderBrandEntry;
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
}

const BrandListCard: React.FC<Props> = ({
  entry,
  selected,
  onSelect,
  onEdit,
}) => (
  <View className={styles.card}>
    <View className={styles.textCol}>
      <Text className={styles.brandName}>{entry.brandLabel}</Text>
      <Text className={styles.seriesStage}>
        {formatBrandSeriesStage(entry.seriesLabel, entry.stageLabel)}
      </Text>
    </View>
    <View className={styles.actions}>
      <View
        className={styles.iconBtn}
        onClick={(e: { stopPropagation?: () => void }) => {
          e?.stopPropagation?.();
          onEdit();
        }}
      >
        <Image src={IC_BRAND_EDIT_URI} className={styles.icon} />
      </View>
      <BrandRadio checked={selected} onClick={onSelect} />
    </View>
  </View>
);

export default BrandListCard;
