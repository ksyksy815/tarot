"use client";

import { Button } from "@/components/ui/button";
import { TarotCard } from "@/types/tarotCard.type";
import { useContext } from "react";
import SelectionPanel from "../card-spread/SelectionPanel";
import CardDeck from "../card-spread/SpreadCards";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

type Props = {
  shuffledCards: TarotCard[];
};

const SelectCards = ({ shuffledCards = [] }: Props) => {
  const { selectedCards, resetSelection } = useContext(PlayGroundContext);

  return (
    <div className={`relativew w-full flex flex-col items-start gap-y-5`}>
      <div className={`w-full flex items-center px-5 justify-end`}>
        <Button className={"self-end"} onClick={resetSelection}>
          Reset
        </Button>
      </div>

      <CardDeck shuffledCards={shuffledCards} />

      {selectedCards.length > 0 && <SelectionPanel />}
    </div>
  );
};

export default SelectCards;
