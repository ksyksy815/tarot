"use client";
import { TarotCard } from "@/types/tarotCard.type";
import Image from "next/image";
import { useState } from "react";
type Props = {
  card: TarotCard;
  isSelected: boolean;
  updateSelectedCard: (cardName: string) => void;
};
const Card = ({ card, isSelected, updateSelectedCard }: Props) => {
  const [open, setOpen] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  return (
    <div
      className={`relative h-[250px] w-[150px] cursor-pointer rounded-lg ${
        open ? "bg-neutral-100" : ""
      } border border-neutral-600 shadow-md overflow-hidden transition-all duration-300 hover:glow hover:translate-y-[-5px]`}
      onClick={() => {
        updateSelectedCard(card.name);
      }}
      // onMouseEnter={() => setShowEffect(true)}
      // onMouseLeave={() => setShowEffect(false)}
    >
      {open ? (
        <p>{card.name}</p>
      ) : (
        <Image
          src={"/images/tarot.png"}
          width={150}
          height={250}
          alt={"tarot back"}
          className={`w-full object-cover`}
        />
      )}
    </div>
  );
};

export default Card;
