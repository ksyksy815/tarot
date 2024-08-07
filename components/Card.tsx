"use client";
import { PlayGroundContext } from "@/screens/playGround/PalyGroundContextProvider";
import { TarotCard } from "@/types/tarotCard.type";
import { useContext, useEffect, useState } from "react";

type Props = {
  card: TarotCard;
};

const Card = ({ card }: Props) => {
  const { selectedCards, updateSelectedCards, max } =
    useContext(PlayGroundContext);
  const [showAlert, setShowAlert] = useState(false);

  const isSelected =
    selectedCards.filter((selectedCard) => selectedCard.index === card.index)
      .length > 0;

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return (
    <div
      className={`relative h-[100px] w-[60px] md:h-[250px] md:w-[150px] cursor-pointer rounded-lg transition-all duration-300 ${
        isSelected
          ? "bg-violet-300 shadow-card-selected"
          : "shadow-card-default"
      } hover:glow hover:translate-y-[-5px]`}
      onClick={() => {
        if (selectedCards.length === max && !isSelected) {
          setShowAlert(true);
          return;
        }
        updateSelectedCards(card);
      }}
    >
      {showAlert && (
        <div
          className={
            "absolute top-[-14px] left-2 text-violet-500 text-[11px] whitespace-nowrap z-10 italic font-semibold"
          }
        >{`You can choose only ${max} ${max === 1 ? "card" : "cards"}!`}</div>
      )}
    </div>
  );
};

export default Card;
