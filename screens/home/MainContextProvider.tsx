"use client";

import { tarotCards } from "@/constants/tarotCards";
import useFetchFortune from "@/hooks/useFetchFortune";
import useShuffledCards from "@/hooks/useShuffledCards";
import { TarotCard } from "@/types/tarotCard.type";
import { createContext, useState } from "react";

export type LifeCycle =
  | "select-type"
  | "type-intro"
  | "card-spread"
  | "show-result";

export type MainContextType = {
  currentStep: LifeCycle;
  type: "todaysFortune" | "doOrDont" | "choices" | null;
  shuffledCards: TarotCard[]; // 78개의 셔플된 카드들
  cards: TarotCard[]; // 선택된 카드들 (포춘텔링 대상)
  result: any;
  isLoading: boolean;
  changeToTypeIntro: (type: MainContextType["type"]) => void;
  changeToCardSpread: () => void;
  changeToShowResult: (selectedCards: Set<number>) => void;
};

export const MainContext = createContext<MainContextType>({
  currentStep: "select-type",
  type: null,
  shuffledCards: [],
  cards: [],
  result: null,
  isLoading: false,
  changeToTypeIntro: () => {},
  changeToCardSpread: () => {},
  changeToShowResult: () => {},
});

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { shuffledCards, shuffleCards } = useShuffledCards();
  const { data, status, fetchFortune } = useFetchFortune();

  const [currentStep, setCurrentStep] =
    useState<MainContextType["currentStep"]>("select-type");
  const [type, setType] = useState<MainContextType["type"]>(null);
  const [cards, setCards] = useState<TarotCard[]>([]);

  const changeToTypeIntro = (type: MainContextType["type"]) => {
    setType(type);
    setCurrentStep("type-intro");
  };

  const changeToCardSpread = () => {
    shuffleCards();
    setCurrentStep("card-spread");
  };

  const changeToShowResult = (selectedCards: Set<number>) => {
    const cardList = [...selectedCards].map((index) => tarotCards[index]);

    setCards(cardList);

    // TODO: 여기서 AI한테 카드 정보를 전달
    fetchFortune(type, cardList[0].name);

    setCurrentStep("show-result");
  };

  return (
    <MainContext.Provider
      value={{
        currentStep,
        type,
        shuffledCards,
        cards,
        result: data,
        isLoading: status === "pending",
        changeToTypeIntro,
        changeToCardSpread,
        changeToShowResult,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
