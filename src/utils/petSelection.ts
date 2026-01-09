import { getStorageSync, setStorageSync, removeStorageSync } from "@ray-js/ray";

const STORAGE_KEY = "selectedPetId";
let selectedPetId: string | null = null;

export const setSelectedPet = (petId: string): void => {
  selectedPetId = petId;
  try {
    setStorageSync?.({ key: STORAGE_KEY, data: petId });
  } catch (e) {
    // ignore storage failure, keep in-memory
  }
};

export const getSelectedPet = (): string | null => {
  if (selectedPetId) return selectedPetId;
  try {
    const res = getStorageSync?.({ key: STORAGE_KEY }) as any;
    if (res && typeof res.data === "string") {
      selectedPetId = res.data;
      return selectedPetId;
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const clearSelectedPet = (): void => {
  selectedPetId = null;
  try {
    removeStorageSync?.({ key: STORAGE_KEY });
  } catch (e) {
    // ignore
  }
};
