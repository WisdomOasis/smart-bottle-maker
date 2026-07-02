/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { openBabyDiaryPanel } from "@/utils/openBabyDiaryPanel";
import { BABY_DIARY_SNACKBAR_ICONS } from "./icons";
import styles from "./index.module.less";

interface Props {
  onClose?: () => void;
  /** Baby Diary 虛擬面板產品 PID，未傳則用常量／啟動參數 */
  virtualPid?: string;
}

const BabyDiarySnackbar: React.FC<Props> = ({ onClose, virtualPid }) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  const openDiary = () => {
    openBabyDiaryPanel({
      pid: virtualPid,
      onBeforeOpen: onClose,
    });
  };

  return (
    <View className={styles.bar} onClick={openDiary}>
      <Image
        src={BABY_DIARY_SNACKBAR_ICONS.check}
        className={styles.checkIcon}
      />
      <Text className={styles.message}>{t("snackbar_diary")}</Text>
      <View className={styles.navBtn}>
        <Image
          src={BABY_DIARY_SNACKBAR_ICONS.chevron}
          className={styles.chevronIcon}
        />
      </View>
    </View>
  );
};

export default BabyDiarySnackbar;
