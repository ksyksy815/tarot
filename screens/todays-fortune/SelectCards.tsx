"use client";

import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import SelectedCards from "../card-spread/SelectedCards";
import { MainContext } from "../home/MainContextProvider";
import CardDeck from "./CardDeck";

const SelectCards = () => {
  const { shuffledCards } = useContext(MainContext);
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set());

  const addSelectedCard = (cardIndex: number) => {
    setSelectedCards((prev) => new Set(prev.add(cardIndex)));
  };

  const removeSelectedCard = (cardIndex: number) => {
    setSelectedCards((prev) => {
      const newSelectedCards = new Set(prev);
      newSelectedCards.delete(cardIndex);
      return newSelectedCards;
    });
  };

  const updateSelectedCard = (cardIndex: number) => {
    if (selectedCards.has(cardIndex)) {
      removeSelectedCard(cardIndex);
    } else {
      addSelectedCard(cardIndex);
    }
  };

  const resetSelection = () => {
    setSelectedCards(new Set());
  };

  return (
    <div className={`relativew w-full flex flex-col items-start gap-y-5`}>
      <div className={`w-full flex items-center px-5 justify-end`}>
        <Button className={"self-end"} onClick={resetSelection}>
          Reset
        </Button>
      </div>

      <CardDeck
        cards={shuffledCards}
        selectedCards={selectedCards}
        updateSelectedCard={updateSelectedCard}
      />

      {selectedCards.size > 0 && (
        <SelectedCards selectedCards={selectedCards} />
      )}
    </div>
  );
};

export default SelectCards;
