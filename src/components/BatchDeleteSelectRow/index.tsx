/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import { IC_BATCH_CHECK_URI } from "@/res/icBatchCheckUri";
import styles from "./index.module.less";

interface Props {
  primary: string;
  secondary: string;
  tertiary?: string;
  checked: boolean;
  onToggle: () => void;
}

const BatchDeleteSelectRow: React.FC<Props> = ({
  primary,
  secondary,
  tertiary,
  checked,
  onToggle,
}) => (
  <View className={styles.row} onClick={onToggle}>
    <View className={styles.textCol}>
      <Text className={styles.primary}>{primary}</Text>
      <Text className={styles.secondary}>{secondary}</Text>
      {tertiary ? <Text className={styles.tertiary}>{tertiary}</Text> : null}
    </View>
    <View className={styles.checkHit}>
      <View
        className={clsx(styles.checkbox, checked && styles.checkboxChecked)}
      >
        {checked ? (
          <Image src={IC_BATCH_CHECK_URI} className={styles.checkIcon} />
        ) : null}
      </View>
    </View>
  </View>
);

export default BatchDeleteSelectRow;
