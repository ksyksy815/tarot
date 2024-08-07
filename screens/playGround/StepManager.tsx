"use client";

import { Button } from "@/components/ui/button";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useContext } from "react";
import SelectCards from "../todays-fortune/SelectCards";
import TodaysFortuneResult from "../todays-fortune/TodaysFortuneResult";
import { PlayGroundContext } from "./PalyGroundContextProvider";

const StepManager = () => {
  const { step, updateStep } = useContext(PlayGroundContext);
  const { shuffledCards, shuffleCards } = useShuffledCards();

  if (step === "INIT") {
    return (
      <section className={"w-full flex flex-col gap-10 px-[40px] xl:px-0"}>
        <Button
          onClick={() => {
            shuffleCards();
            updateStep("SELECT_CARDS");
          }}
          className={"self-center text-lg px-5"}
        >
          Shuffle
        </Button>
      </section>
    );
  }

  if (step === "SELECT_CARDS") {
    return <SelectCards shuffledCards={shuffledCards} />;
  }

  // * "SHOW-RESULT"
  return <TodaysFortuneResult />;
};

export default StepManager;
