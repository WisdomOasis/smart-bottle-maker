/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import styles from "./index.module.less";

interface Props {
  checked: boolean;
  onClick?: () => void;
}

const BrandCheckbox: React.FC<Props> = ({ checked, onClick }) => (
  <View
    className={clsx(styles.checkbox, checked && styles.checkboxChecked)}
    onClick={
      onClick
        ? (e: { stopPropagation?: () => void }) => {
            e?.stopPropagation?.();
            onClick();
          }
        : undefined
    }
  >
    {checked ? <Text className={styles.checkMark}>✓</Text> : null}
  </View>
);

export default BrandCheckbox;
