import React, { useEffect, useState } from "react";
import { View, Text, Image, router, getStorage, setStorage } from "@ray-js/ray";
import Res from "@/res";
import PetIcon from "@/components/PetIcon";
import styles from "./index.module.less";

interface PetOption {
  id: "dog" | "cat" | "squirrel" | "hamster" | "rabbit" | "bird" | "other";
  label: string;
}

const petOptions: PetOption[] = [
  { id: "dog", label: "犬" },
  { id: "cat", label: "猫" },
  { id: "squirrel", label: "リス" },
  { id: "hamster", label: "ハムスター" },
  { id: "rabbit", label: "兎" },
  { id: "bird", label: "鳥" },
  { id: "other", label: "ほか" },
];

const OnboardingPage: React.FC = () => {
  const [selectedPet, setSelectedPetState] = useState<string | null>(null);

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
        <Text className={styles.step}>準備作業</Text>
        <Text className={styles.description}>
          開始する前に、まずペットの種類を教えてください。
        </Text>
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
          <Text className={styles.startText}>開始</Text>
          <Image src={Res.startIcon} className={styles.startIcon} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingPage;
