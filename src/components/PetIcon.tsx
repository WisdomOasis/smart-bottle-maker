import React from "react";
import { Image } from "@ray-js/ray";
import Res from "@/res";

type PetId = "dog" | "cat" | "other";

interface Props {
  id: PetId;
  active?: boolean;
  size?: string;
}

const sizeDefault = "60px";

const iconMap: Record<PetId, { normal: string; active: string }> = {
  dog: { normal: Res.petDog, active: Res.petDogActive },
  cat: { normal: Res.petCat, active: Res.petCatActive },
  other: { normal: Res.petOther, active: Res.petOtherActive },
};

const PetIcon: React.FC<Props> = ({
  id,
  active = false,
  size = sizeDefault,
}) => {
  const { normal, active: activeSrc } = iconMap[id];
  return (
    <Image
      src={active ? activeSrc : normal}
      style={{ width: size, height: size }}
    />
  );
};

PetIcon.defaultProps = {
  active: false,
  size: sizeDefault,
};

export default PetIcon;
