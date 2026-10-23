import React, { useEffect, useState } from "react";
import { Text, View } from "@ray-js/ray";
import clsx from "clsx";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { buildFirstTimeGuideSteps } from "@/constant/firstTimeGuide";
import styles from "./index.module.less";

type Props = {
  includeSmartPrep: boolean;
  onFinish: () => void;
  onTargetChange: (targetId: string | null) => void;
};

const t = (key: I18nKey) => Strings.getLang(key);

const FirstTimeGuide: React.FC<Props> = ({
  includeSmartPrep,
  onFinish,
  onTargetChange,
}) => {
  const steps = buildFirstTimeGuideSteps(includeSmartPrep);
  const [step, setStep] = useState(0);
  const index = Math.min(step, steps.length - 1);
  const current = steps[index];
  const isLast = index >= steps.length - 1;

  useEffect(() => {
    onTargetChange(current.targetId);
  }, [current.targetId, onTargetChange]);

  useEffect(() => () => onTargetChange(null), [onTargetChange]);

  const goNext = () => {
    if (isLast) {
      onFinish();
      return;
    }
    setStep(index + 1);
  };

  return (
    <View>
      <View className={styles.overlay} />
      <View
        className={clsx(
          styles.cardSlot,
          current.cardPlace === "top" && styles.cardTop,
          current.cardPlace === "bottom" && styles.cardBottom,
          current.cardPlace === "center" && styles.cardCenter
        )}
      >
        <View className={styles.card}>
          <View className={styles.dots}>
            {steps.map((item, dotIndex) => (
              <View
                key={item.title}
                className={clsx(
                  styles.dot,
                  dotIndex === index && styles.dotActive
                )}
              />
            ))}
          </View>
          <Text className={styles.title}>{t(current.title)}</Text>
          <Text className={styles.body}>{t(current.body)}</Text>
          <View className={styles.actions}>
            {isLast ? null : (
              <View className={styles.skipButton} onClick={onFinish}>
                <Text className={styles.skipText}>{t("first_guide_skip")}</Text>
              </View>
            )}
            <View
              className={clsx(
                styles.nextButton,
                isLast && styles.nextButtonSolo
              )}
              onClick={goNext}
            >
              <Text className={styles.nextText}>
                {t(isLast ? "first_guide_done" : "first_guide_next")}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FirstTimeGuide;
