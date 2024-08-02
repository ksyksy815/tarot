import { tarotCards } from "@/constants/tarotCards";
import { TarotCard } from "@/types/tarotCard.type";
import { useState } from "react";

const useShuffledCards = () => {
  const [shuffledCards, setShuffledCards] = useState<TarotCard[]>(tarotCards);

  const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleCards = () => {
    const shuffledCards = shuffleArray(tarotCards.slice());
    setShuffledCards(shuffledCards);
  };

  return {
    shuffledCards,
    shuffleCards,
  };
};

export default useShuffledCards;
