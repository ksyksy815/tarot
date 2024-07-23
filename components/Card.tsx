"use client";

import { TarotCard } from "@/types/tarotCard.type";
import { useState } from "react";

type Props = {
  card: TarotCard;
  isSelected: boolean;
  updateSelectedCard: (cardName: string) => void;
  transform: string;
};
const Card = ({ card, isSelected, updateSelectedCard, transform }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`absolute top-0 h-[250px] w-[150px] antialiased cursor-pointer rounded-lg ${
        open ? "bg-neutral-100" : "bg-neutral-500"
      } ${
        isSelected ? "top-[-20px]" : "hover:top-[-20px]"
      } border border-neutral-600 shadow-md`}
      onClick={() => {
        updateSelectedCard(card.name);
      }}
      style={{ transform }}
    >
      {open && <p>{card.name}</p>}
    </div>
  );
};

export default Card;
