"use client";
import { PlayGroundContext } from "@/screens/playGround/PalyGroundContextProvider";
import { TarotCard } from "@/types/tarotCard.type";
import { useContext } from "react";

type Props = {
  card: TarotCard;
};

const Card = ({ card }: Props) => {
  const { selectedCards, updateSelectedCards } = useContext(PlayGroundContext);

  const isSelected =
    selectedCards.filter((selectedCard) => selectedCard.index === card.index)
      .length > 0;

  const selectedStyle = ``;
  return (
    <div
      className={`relative h-[100px] w-[60px] md:h-[250px] md:w-[150px] cursor-pointer rounded-lg transition-all duration-300 ${
        isSelected
          ? "bg-violet-300 shadow-card-selected"
          : "shadow-card-default"
      } hover:glow hover:translate-y-[-5px]`}
      onClick={() => {
        updateSelectedCards(card);
      }}
    ></div>
  );
};

export default Card;
