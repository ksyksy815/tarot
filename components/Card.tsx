"use client";
import { PlayGroundContext } from "@/screens/playGround/PalyGroundContextProvider";
import { TarotCard } from "@/types/tarotCard.type";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

type Props = {
  card: TarotCard;
  index: number;
};

const Card = ({ card, index }: Props) => {
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

  const leftPosition = `left-[${15 * index}px]`;

  return (
    <div
      className={`absolute ${leftPosition} h-[100px] min-w-[60px] w-[60px] md:h-[250px] md:w-[150px] md:min-w-[150px] cursor-pointer transition-all duration-300 hover:glow hover:translate-y-[-5px] rounded-lg overflow-hidden shadow-sm shadow-slate-900 ${
        isSelected ? "translate-y-[-30px] " : ""
      }`}
      style={{ left: `${15 * index}px` }}
      onClick={() => {
        if (selectedCards.length === max && !isSelected) {
          setShowAlert(true);
          return;
        }
        updateSelectedCards(card);
      }}
    >
      <Image
        src={"/images/tarot-back.png"}
        fill={true}
        alt={"back of tarot card"}
      />

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
