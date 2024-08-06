"use client";
import { PlayGroundContext } from "@/screens/playGround/PalyGroundContextProvider";
import { TarotCard } from "@/types/tarotCard.type";
import { useContext, useState } from "react";

type Props = {
  card: TarotCard;
};

const Card = ({ card }: Props) => {
  const { selectedCards, updateSelectedCards } = useContext(PlayGroundContext);

  const [open, setOpen] = useState(false);
  const [showEffect, setShowEffect] = useState(false);

  const isSelected =
    selectedCards.filter((selectedCard) => selectedCard.index === card.index)
      .length > 0;

  const selectedStyle = ``;
  return (
    <div
      className={`relative h-[50px] w-[30px] md:h-[250px] md:w-[150px] cursor-pointer rounded-lg transition-all duration-300 ${
        isSelected
          ? "bg-violet-300 shadow-card-selected"
          : "shadow-card-default"
      } hover:glow hover:translate-y-[-5px]`}
      onClick={() => {
        updateSelectedCards(card);
      }}
    >
      {open && <p>{card.name}</p>}
    </div>
  );
};

export default Card;
