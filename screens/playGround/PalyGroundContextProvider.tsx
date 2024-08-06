"use client";

import useFetchFortune from "@/hooks/useFetchFortune";
import { TarotCard } from "@/types/tarotCard.type";
import { createContext, useState } from "react";

type PlayGroundContextType = {
  step: "INIT" | "SELECT_CARDS" | "SHOW_RESULT";
  type: "todaysFortune" | "doOrDont" | "choices";
  min: 1 | 2;
  max: 1 | 2 | 3;
  selectedCards: TarotCard[];
  context: string;
  updateStep: (newStep: PlayGroundContextType["step"]) => void;
  updateSelectedCards: (newCard: TarotCard) => void;
  resetSelection: () => void;
  handleSubmit: (context?: string) => void;
  results: any;
};

export const PlayGroundContext = createContext<PlayGroundContextType>({
  step: "INIT",
  type: "todaysFortune",
  min: 1,
  max: 1,
  selectedCards: [],
  context: "",
  updateStep: () => {},
  updateSelectedCards: () => {},
  resetSelection: () => {},
  handleSubmit: () => {},
  results: null,
});

const PlayGroundContextProvider = ({
  type,
  children,
}: {
  children: React.ReactNode;
  type: PlayGroundContextType["type"];
}) => {
  const { data, status, fetchFortune } = useFetchFortune();

  const [step, setStep] = useState<PlayGroundContextType["step"]>("INIT");
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);

  const min = () => {
    switch (type) {
      case "todaysFortune":
        return 1;
      case "doOrDont":
        return 2;
      case "choices":
        return 2;
      default:
        return 1;
    }
  };

  const max = () => {
    switch (type) {
      case "todaysFortune":
        return 1;
      case "doOrDont":
        return 2;
      case "choices":
        return 3;
      default:
        return 1;
    }
  };

  const updateStep = (newStep: PlayGroundContextType["step"]) =>
    setStep(newStep);

  const updateSelectedCards = (newCard: TarotCard) => {
    // * If the card is already selected, remove it
    if (selectedCards.some((card) => card.index === newCard.index)) {
      setSelectedCards(
        selectedCards.filter((card) => card.index !== newCard.index)
      );
      return;
    }
    // * If the card is not selected, add it
    setSelectedCards([...selectedCards, newCard]);
  };

  const resetSelection = () => setSelectedCards([]);

  const handleSubmit = (context: string = "") => {
    console.log("submitted data: ", selectedCards, context);

    fetchFortune({
      type,
      cardNames: selectedCards.map((card) => card.name),
      context,
    });

    updateStep("SHOW_RESULT");
  };

  return (
    <PlayGroundContext.Provider
      value={{
        step,
        type,
        min: min(),
        max: max(),
        selectedCards,
        context: "",
        updateStep,
        updateSelectedCards,
        resetSelection,
        handleSubmit,
        results: data,
      }}
    >
      {children}
    </PlayGroundContext.Provider>
  );
};

export default PlayGroundContextProvider;
