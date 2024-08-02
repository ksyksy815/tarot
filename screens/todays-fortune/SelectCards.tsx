"use client";

import { Button } from "@/components/ui/button";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useState } from "react";
import SelectedCards from "../card-spread/SelectedCards";
import CardDeck from "./CardDeck";

const SelectCards = () => {
  const { cards } = useShuffledCards();

  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  const addSelectedCard = (cardName: string) => {
    setSelectedCards((prev) => new Set(prev.add(cardName)));
  };

  const removeSelectedCard = (cardName: string) => {
    setSelectedCards((prev) => {
      const newSelectedCards = new Set(prev);
      newSelectedCards.delete(cardName);
      return newSelectedCards;
    });
  };

  const updateSelectedCard = (cardName: string) => {
    if (selectedCards.has(cardName)) {
      removeSelectedCard(cardName);
    } else {
      addSelectedCard(cardName);
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
        cards={cards}
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
