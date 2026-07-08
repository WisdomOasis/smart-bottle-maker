import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import { IC_FORMULA_SAVED_INFO_URI } from "@/res/icFormulaSavedInfoUri";
import styles from "./index.module.less";

interface Props {
  message: string;
  /** Below page header instead of fixed to viewport */
  // eslint-disable-next-line react/require-default-props
  inline?: boolean;
}

const FormulaAlreadySavedToast: React.FC<Props> = ({
  message,
  inline = false,
}) => (
  <View className={clsx(inline ? styles.toastInline : styles.toastFixed)}>
    <Image src={IC_FORMULA_SAVED_INFO_URI} className={styles.icon} />
    <Text className={styles.text}>{message}</Text>
  </View>
);

export default FormulaAlreadySavedToast;
