import React, { useEffect, useState } from "react";
import { View, Text, Image, router } from "@ray-js/ray";
import Res from "@/res";
import PetIcon from "@/components/PetIcon";
import {
  setSelectedPet as setSelectedPetGlobal,
  getSelectedPet,
} from "@/utils/petSelection";
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
  const [selectedPet, setSelectedPetState] = useState<string>(petOptions[0].id);

  useEffect(() => {
    const saved = getSelectedPet();
    if (saved) {
      setSelectedPetState(saved);
      router.replace("/home");
    }
  }, []);

  const handleStart = () => {
    setSelectedPetGlobal(selectedPet);
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
        <View className={styles.startButton} onClick={handleStart}>
          <Text className={styles.startText}>開始</Text>
          <Image src={Res.startIcon} className={styles.startIcon} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingPage;
