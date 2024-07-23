"use client";

import useResult from "@/hooks/useResult";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CardDeck from "./CardDeck";
import Result from "./Result";
import ShuffleButton from "./ShuffleButton";

const Ground = () => {
  const router = useRouter();
  const { cards, getShuffledTarotCards } = useShuffledCards();
  const { chosenCards, updateSelectedCards } = useResult();
  const [isShuffled, setIsShuffled] = useState(false);
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  const [resultRevealed, setResultRevealed] = useState(false);

  const handleClickShuffle = () => {
    getShuffledTarotCards();
    setIsShuffled(true);
  };

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
    <div className={`relativew-full h-full flex flex-col`}>
      {isShuffled ? (
        <CardDeck
          cards={cards}
          selectedCards={selectedCards}
          updateSelectedCard={updateSelectedCard}
          resetSelection={resetSelection}
        />
      ) : (
        <ShuffleButton onClick={handleClickShuffle} />
      )}

      {selectedCards.size === 1 && (
        <button
          className={`fixed top-1/2 left-1/2`}
          onClick={() => {
            updateSelectedCards(selectedCards);
            setResultRevealed(true);
          }}
        >
          Show result
        </button>
      )}

      {resultRevealed && <Result chosenCards={chosenCards} />}
    </div>
  );
};

export default Ground;
