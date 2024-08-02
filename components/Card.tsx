"use client";
import { TarotCard } from "@/types/tarotCard.type";
import { useState } from "react";
type Props = {
  card: TarotCard;
  isSelected: boolean;
  updateSelectedCard: (cardName: string) => void;
};
const Card = ({ card, isSelected, updateSelectedCard }: Props) => {
  const [open, setOpen] = useState(false);
  const [showEffect, setShowEffect] = useState(false);

  const selectedStyle = ``;
  return (
    <div
      className={`relative h-[50px] w-[30px] md:h-[250px] md:w-[150px] cursor-pointer rounded-lg transition-all duration-300 ${
        isSelected
          ? "bg-violet-300 shadow-card-selected"
          : "shadow-card-default"
      } hover:glow hover:translate-y-[-5px]`}
      onClick={() => {
        updateSelectedCard(card.name);
      }}
      // onMouseEnter={() => setShowEffect(true)}
      // onMouseLeave={() => setShowEffect(false)}
    >
      {open && <p>{card.name}</p>}
    </div>
  );
};

export default Card;
