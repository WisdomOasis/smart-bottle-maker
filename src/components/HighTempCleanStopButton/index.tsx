/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import Res from "@/res";
import { formatCleanCountdown } from "@/constant/highTempClean";
import styles from "./index.module.less";

interface Props {
  secondsLeft: number;
  disabled?: boolean;
  onStop: () => void;
}

const HighTempCleanStopButton: React.FC<Props> = ({
  secondsLeft,
  disabled = false,
  onStop,
}) => (
  <View
    className={clsx(styles.pill, disabled && styles.pillDisabled)}
    onClick={disabled ? undefined : onStop}
  >
    <Text className={styles.timer}>{formatCleanCountdown(secondsLeft)}</Text>
    <Image
      src={Res.actionButtonIcons.highTempCleanStop}
      className={styles.stopIcon}
      mode="aspectFit"
    />
  </View>
);

export default HighTempCleanStopButton;
