"use client";

import { createContext, useState } from "react";

export type LifeCycle =
  | "select-type"
  | "type-intro"
  | "card-spread"
  | "show-result";

export type MainContextType = {
  currentStep: LifeCycle;
  type: "todays-fortune" | "do-or-dont" | "choices" | null;
  changeToTypeIntro: (type: MainContextType["type"]) => void;
};

export const MainContext = createContext<MainContextType>({
  currentStep: "select-type",
  type: null,
  changeToTypeIntro: () => {},
});

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] =
    useState<MainContextType["currentStep"]>("select-type");
  const [type, setType] = useState<MainContextType["type"]>(null);

  const changeToTypeIntro = (type: MainContextType["type"]) => {
    setType(type);
    setCurrentStep("type-intro");
  };

  return (
    <MainContext.Provider value={{ currentStep, type, changeToTypeIntro }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
