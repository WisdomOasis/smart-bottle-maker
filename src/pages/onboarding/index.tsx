import React, { useEffect, useState } from "react";
import { View, Text, Image, router, getStorage, setStorage } from "@ray-js/ray";
import Res from "@/res";
import PetIcon from "@/components/PetIcon";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface PetOption {
  id: "dog" | "cat" | "squirrel" | "hamster" | "rabbit" | "bird" | "other";
  label: string;
}

const OnboardingPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const [selectedPet, setSelectedPetState] = useState<string | null>(null);
  const petOptions: PetOption[] = [
    { id: "dog", label: t("pet_dog") },
    { id: "cat", label: t("pet_cat") },
    { id: "squirrel", label: t("pet_squirrel") },
    { id: "hamster", label: t("pet_hamster") },
    { id: "rabbit", label: t("pet_rabbit") },
    { id: "bird", label: t("pet_bird") },
    { id: "other", label: t("pet_other") },
  ];

  useEffect(() => {
    getStorage({
      key: "selectedPetId",
      success: (res) => {
        if (res.data) {
          setSelectedPetState(res.data);
          router.replace("/home");
        }
      },
    });
  }, []);

  const handleStart = async () => {
    if (!selectedPet) return;
    setStorage({
      key: "selectedPetId",
      data: selectedPet,
    });
    router.replace("/home");
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
            onClick={() => setSelectedPetState(option.id)}
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
            !selectedPet ? styles.startButtonDisabled : ""
          }`}
          onClick={handleStart}
          aria-disabled={!selectedPet}
        >
          <Text className={styles.startText}>{t("onboarding_start")}</Text>
          <Image src={Res.startIcon} className={styles.startIcon} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingPage;
