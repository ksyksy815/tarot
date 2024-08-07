"use client";

import { Button } from "@/components/ui/button";
import { SPREAD_TYPES } from "@/constants/servicesIntro";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useContext } from "react";
import Results from "../results/Results";
import SelectCards from "../todays-fortune/SelectCards";
import ContextForm from "./ContextForm";
import { PlayGroundContext } from "./PalyGroundContextProvider";

const StepManager = () => {
  const { type, step, updateStep, context, updateContext } =
    useContext(PlayGroundContext);
  const { shuffledCards, shuffleCards } = useShuffledCards();

  console.log("context: ", context);

  if (step === "INIT") {
    return (
      <section className={"w-full flex flex-col gap-10 px-[40px] xl:px-0"}>
        <p className={"text-lg"}>{SPREAD_TYPES[type].description || "-"}</p>

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
    if (type === "todaysFortune") {
      return <SelectCards shuffledCards={shuffledCards} />;
    }

    return (
      <section className={"w-full px-10 xl:px-0 flex flex-col"}>
        <ContextForm />
        {context && <SelectCards shuffledCards={shuffledCards} />}
      </section>
    );
  }

  // * "SHOW-RESULT"
  return <Results />;
};

export default StepManager;
