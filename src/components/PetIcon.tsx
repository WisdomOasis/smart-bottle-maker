import React from "react";
import { Image } from "@ray-js/ray";
import Res from "@/res";

type PetId =
  | "dog"
  | "cat"
  | "squirrel"
  | "hamster"
  | "rabbit"
  | "bird"
  | "other";

interface Props {
  id: PetId;
  active?: boolean;
  size?: string;
}

const sizeDefault = "33px";

const iconMap: Record<PetId, { normal: string; active: string }> = {
  dog: { normal: Res.petDog, active: Res.petDogActive },
  cat: { normal: Res.petCat, active: Res.petCatActive },
  squirrel: { normal: Res.petSquirrel, active: Res.petSquirrelActive },
  hamster: { normal: Res.petHamster, active: Res.petHamsterActive },
  rabbit: { normal: Res.petRabbit, active: Res.petRabbitActive },
  bird: { normal: Res.petBird, active: Res.petBirdActive },
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
