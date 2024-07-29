"use client";

import { Button } from "@/components/ui/button";
import useResult from "@/hooks/useResult";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useContext, useState } from "react";
import SelectedCards from "../card-spread/SelectedCards";
import { MainContext } from "../home/MainContextProvider";
import CardDeck from "./CardDeck";
import Result from "./Result";

const Ground = () => {
  const { type } = useContext(MainContext);
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

  const showSeeResultButton = () => {
    if (type === "todays-fortune") {
      return selectedCards.size === 1;
    }
    if (type === "do-or-dont") {
      return selectedCards.size === 2;
    }
    return selectedCards.size >= 2;
  };

  return (
    <div
      className={`relativew w-full h-full flex flex-col items-start gap-y-5 `}
    >
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

      <div className={`w-full flex items-center px-5 justify-end`}>
        {showSeeResultButton() && (
          <Button
            className={"self-end"}
            onClick={() => {
              updateSelectedCards(selectedCards);
              setResultRevealed(true);
            }}
          >
            Show result
          </Button>
        )}
      </div>

      {resultRevealed && <Result chosenCards={chosenCards} />}

      {selectedCards.size > 0 && (
        <SelectedCards selectedCards={selectedCards} />
      )}
    </div>
  );
};

export default Ground;
