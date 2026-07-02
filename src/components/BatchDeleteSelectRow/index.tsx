/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import styles from "./index.module.less";

interface Props {
  primary: string;
  secondary: string;
  checked: boolean;
  onToggle: () => void;
}

const BatchDeleteSelectRow: React.FC<Props> = ({
  primary,
  secondary,
  checked,
  onToggle,
}) => (
  <View className={styles.row} onClick={onToggle}>
    <View className={styles.textCol}>
      <Text className={styles.primary}>{primary}</Text>
      <Text className={styles.secondary}>{secondary}</Text>
    </View>
    <View className={styles.checkHit}>
      <View
        className={clsx(styles.checkbox, checked && styles.checkboxChecked)}
      >
        {checked ? <Text className={styles.checkMark}>✓</Text> : null}
      </View>
    </View>
  </View>
);

export default BatchDeleteSelectRow;
