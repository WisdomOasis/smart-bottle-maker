import React, { useEffect, useState } from "react";
import { View, Text, Image, router } from "@ray-js/ray";
import { useActions, useProps } from "@ray-js/panel-sdk";
import Res from "@/res";
import PetIcon from "@/components/PetIcon";
import dpCodes from "@/constant/dpCodes";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface PetOption {
  id: "dog" | "cat" | "other";
  label: string;
}

const PET_TO_DP: Record<PetOption["id"], string> = {
  dog: "0",
  cat: "1",
  other: "2",
};

const DP_TO_PET: Record<number, PetOption["id"]> = {
  0: "dog",
  1: "cat",
  2: "other",
  3: "other",
};

const normalizePetDpValue = (value: unknown): number | null => {
  if (typeof value === "number" && value in DP_TO_PET) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (!Number.isNaN(parsed) && parsed in DP_TO_PET) return parsed;
  }
  return null;
};

const OnboardingPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const [selectedPet, setSelectedPetState] = useState<PetOption["id"] | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingPet, setPendingPet] = useState<PetOption["id"] | null>(null);
  const dpState = useProps();
  const actions = useActions();
  const petOptions: PetOption[] = [
    { id: "dog", label: t("pet_dog") },
    { id: "cat", label: t("pet_cat") },
    { id: "other", label: t("pet_other") },
  ];

  useEffect(() => {
    const petDp = normalizePetDpValue(dpState?.[dpCodes.pet]);
    if (petDp === null) return;
    const petId = DP_TO_PET[petDp];

    if (isSubmitting && pendingPet === petId) {
      setIsSubmitting(false);
      setPendingPet(null);
      router.replace("/home");
      return;
    }

    if (!isSubmitting) {
      setSelectedPetState(petId);
      router.replace("/home");
    }
  }, [dpState?.[dpCodes.pet], isSubmitting, pendingPet]);

  const handleStart = async () => {
    if (!selectedPet || isSubmitting) return;

    const currentPetDp = normalizePetDpValue(dpState?.[dpCodes.pet]);
    if (currentPetDp !== null && DP_TO_PET[currentPetDp] === selectedPet) {
      router.replace("/home");
      return;
    }

    const fn = (actions as any)?.[dpCodes.pet]?.set;
    if (typeof fn !== "function") return;

    setIsSubmitting(true);
    setPendingPet(selectedPet);
    try {
      await fn(PET_TO_DP[selectedPet]);
    } catch (err) {
      setIsSubmitting(false);
      setPendingPet(null);
    }
  };

  return (
    <View className={styles.container}>
      <View className={styles.navbar}>
        <Image src={Res.airbuggyLogo} className={styles.logo} />
      </View>

      <View className={styles.header}>
        <Text className={styles.step}>{t("onboarding_step_title")}</Text>
        <Text className={styles.description}>{t("onboarding_step_desc")}</Text>
      </View>

      <View className={styles.divider} />

      <View className={styles.petGrid}>
        {petOptions.map((option) => (
          <View
            key={option.id}
            className={`${styles.petCard} ${
              selectedPet === option.id ? styles.active : ""
            }`}
            onClick={() => {
              if (isSubmitting) return;
              setSelectedPetState(option.id);
            }}
          >
            <View className={styles.petCardInner}>
              <PetIcon id={option.id} active={selectedPet === option.id} />
            </View>
            <Text className={styles.petLabel}>{option.label}</Text>
          </View>
        ))}
      </View>

      <View className={styles.footer}>
        <View
          className={`${styles.startButton} ${
            !selectedPet || isSubmitting ? styles.startButtonDisabled : ""
          }`}
          onClick={handleStart}
          aria-disabled={!selectedPet || isSubmitting}
        >
          <Text className={styles.startText}>{t("onboarding_start")}</Text>
          {isSubmitting ? (
            <View className={styles.loadingDot} />
          ) : (
            <Image src={Res.startIcon} className={styles.startIcon} />
          )}
        </View>
      </View>
    </View>
  );
};

export default OnboardingPage;
