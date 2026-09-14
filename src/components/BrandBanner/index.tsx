/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import Res from "@/res";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

export interface BrandBannerCustomRatio {
  waterMl: number;
  powderG: number;
}

export interface BrandBannerBrandSummary {
  brand: string;
  series: string;
  stage: string;
}

interface Props {
  /** 使用者是否已點擊過 banner（切換為精簡提示樣式） */
  clicked: boolean;
  /** 自訂配比已儲存時顯示 Custom: Xml / Yg */
  customRatio?: BrandBannerCustomRatio | null;
  /** 一般品牌已儲存時顯示 Brand / Series / Stage */
  brandSummary?: BrandBannerBrandSummary | null;
  onClick: () => void;
}

const applyTemplate = (template: string, values: string[]) => {
  let out = template;
  values.forEach((v, i) => {
    out = out.replace(`{${i}}`, v);
  });
  return out;
};

const BrandBanner: React.FC<Props> = ({
  clicked,
  onClick,
  customRatio,
  brandSummary,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  const hintRow = (label: string) => (
    <View
      className={clsx(styles.banner, styles.bannerHint)}
      style={{
        background:
          "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
        border: "0.4px solid #CBDEEF",
      }}
      onClick={onClick}
    >
      <Text className={styles.hintText}>{label}</Text>
      <View className={styles.hintNavBtn}>
        <Image src={Res.icBrandHintChevronUri} className={styles.hintNavIcon} />
      </View>
    </View>
  );

  if (customRatio) {
    const label = applyTemplate(t("brand_row_custom_ratio"), [
      String(customRatio.waterMl),
      String(customRatio.powderG),
    ]);
    return hintRow(label);
  }

  if (brandSummary) {
    const label = applyTemplate(t("brand_row_brand_summary"), [
      brandSummary.brand,
      brandSummary.series,
      brandSummary.stage,
    ]);
    return hintRow(label);
  }

  if (clicked) {
    return hintRow(t("brand_row_hint"));
  }

  return (
    <View className={clsx(styles.banner, styles.bannerIntro)} onClick={onClick}>
      <View className={styles.introContent}>
        <Image src={Res.icBrandSparkleUri} className={styles.introIcon} />
        <Text className={styles.introText}>{t("brand_banner_intro")}</Text>
      </View>
      <View className={styles.introNavBtn}>
        <Image src={Res.icBrandChevronUri} className={styles.introNavIcon} />
      </View>
    </View>
  );
};

export default BrandBanner;
