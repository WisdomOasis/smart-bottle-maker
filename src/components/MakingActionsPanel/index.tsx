/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import Res from "@/res";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  onStop: () => void;
  stopDisabled?: boolean;
  stopLabelKey?: I18nKey;
}

const MakingActionsPanel: React.FC<Props> = ({
  onStop,
  stopDisabled = false,
  stopLabelKey = "action_stop_making",
}) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);

  return (
    <View className={styles.panel}>
      <Text className={styles.hint}>{t("making_leave_hint")}</Text>
      <View
        className={clsx(styles.stopBtn, stopDisabled && styles.stopBtnDisabled)}
        onClick={stopDisabled ? undefined : onStop}
      >
        <Image
          src={Res.actionButtonIcons.stopMaking}
          className={styles.stopIcon}
        />
        <Text className={styles.stopLabel}>{t(stopLabelKey)}</Text>
      </View>
    </View>
  );
};

export default MakingActionsPanel;
