"use client";

import { TarotCard } from "@/types/tarotCard.type";
import { useContext } from "react";
import SelectionPanel from "../card-spread/SelectionPanel";
import CardDeck from "../card-spread/SpreadCards";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

type Props = {
  shuffledCards: TarotCard[];
};

// TODO: selection panel animation

const SelectCards = ({ shuffledCards = [] }: Props) => {
  const { selectedCards, resetSelection } = useContext(PlayGroundContext);

  return (
    <div className={`relativew w-full flex flex-col items-start gap-y-5`}>
      <CardDeck shuffledCards={shuffledCards} />

      <SelectionPanel />
    </div>
  );
};

export default SelectCards;
