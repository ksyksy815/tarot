import { tarotCardMap, tarotCards } from "@/constants/tarotCards";
import { TarotCard } from "@/types/tarotCard.type";
import { useState } from "react";

const useResult = () => {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);

  const updateSelectedCards = (cardSet: Set<string>) => {
    let list: TarotCard[] = [];

    cardSet.forEach((cardName) => {
      const index = tarotCardMap.get(cardName)!;
      const card = tarotCards[index];
      list.push(card);
    });

    setSelectedCards(list);
  };

  return {
    chosenCards: selectedCards,
    updateSelectedCards,
  };
};

export default useResult;
