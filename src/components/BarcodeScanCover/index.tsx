import React from "react";
import { View } from "@ray-js/ray";
import styles from "@/styles/barcodeScanCover.module.less";

interface Props {
  visible: boolean;
}

const BarcodeScanCover: React.FC<Props> = ({ visible }) => {
  if (!visible) return null;
  return <View className={styles.pageCover} />;
};

export default BarcodeScanCover;
