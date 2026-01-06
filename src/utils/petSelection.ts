let selectedPetId: string | null = null;

export const setSelectedPet = (petId: string): void => {
  selectedPetId = petId;
};

export const getSelectedPet = (): string | null => selectedPetId;
