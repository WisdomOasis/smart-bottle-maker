/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import { IC_BRAND_HINT_CHEVRON_URI } from "@/res/icBrandHintChevronUri";
import styles from "./index.module.less";

interface Props {
  label: string;
  value: string | null;
  disabled?: boolean;
  onPress: () => void;
}

const PowderBrandSelectField: React.FC<Props> = ({
  label,
  value,
  disabled = false,
  onPress,
}) => (
  <View
    className={clsx(styles.field, disabled && styles.fieldDisabled)}
    onClick={disabled ? undefined : onPress}
  >
    <Text className={styles.label}>{label}</Text>
    <View className={styles.valueRow}>
      {value ? <Text className={styles.value}>{value}</Text> : null}
      <Image src={IC_BRAND_HINT_CHEVRON_URI} className={styles.chevron} />
    </View>
  </View>
);

export default PowderBrandSelectField;
