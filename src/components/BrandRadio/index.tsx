/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View } from "@ray-js/ray";
import styles from "./index.module.less";

interface Props {
  checked: boolean;
  onClick?: () => void;
}

const BrandRadio: React.FC<Props> = ({ checked, onClick }) => (
  <View
    className={clsx(styles.radio, checked && styles.radioChecked)}
    onClick={
      onClick
        ? (e: { stopPropagation?: () => void }) => {
            e?.stopPropagation?.();
            onClick();
          }
        : undefined
    }
  >
    {checked ? <View className={styles.radioDot} /> : null}
  </View>
);

export default BrandRadio;
