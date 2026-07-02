/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import BrandRadio from "@/components/BrandRadio";
import { IC_BRAND_EDIT_URI } from "@/res/icBrandEditUri";
import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";
import Strings from "@/i18n";
import brandListStyles from "@/components/BrandListCard/index.module.less";

interface Props {
  entry: PowderBrandEntry;
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
}

const CustomRatioListCard: React.FC<Props> = ({
  entry,
  selected,
  onSelect,
  onEdit,
}) => {
  const customLabel = Strings.getLang("powder_brand_custom_label");

  return (
    <View className={brandListStyles.card}>
      <View className={brandListStyles.textCol}>
        <Text className={brandListStyles.brandName}>
          {`${entry.waterMl}ml / ${entry.powderG}g`}
        </Text>
        <Text className={brandListStyles.seriesStage}>{customLabel}</Text>
      </View>
      <View className={brandListStyles.actions}>
        <View
          className={brandListStyles.iconBtn}
          onClick={(e: { stopPropagation?: () => void }) => {
            e?.stopPropagation?.();
            onEdit();
          }}
        >
          <Image src={IC_BRAND_EDIT_URI} className={brandListStyles.icon} />
        </View>
        <BrandRadio checked={selected} onClick={onSelect} />
      </View>
    </View>
  );
};

export default CustomRatioListCard;
