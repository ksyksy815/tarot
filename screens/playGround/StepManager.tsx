"use client";

import { Button } from "@/components/ui/button";
import { SPREAD_TYPES } from "@/constants/servicesIntro";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useContext } from "react";
import ChoicesForm from "../choices/ChoicesForm";
import DoOrDontForm from "../do-or-dont/DoOrDontForm";
import Results from "../results/Results";
import SelectCards from "../todays-fortune/SelectCards";
import { PlayGroundContext } from "./PalyGroundContextProvider";

const StepManager = () => {
  const { type, step, updateStep, context, updateContext } =
    useContext(PlayGroundContext);
  const { shuffledCards, shuffleCards } = useShuffledCards();

  if (step === "INIT") {
    return (
      <section className={"w-full flex flex-col gap-10 px-[20px] xl:px-0"}>
        <p className={"text-lg"}>{SPREAD_TYPES[type].description || "-"}</p>

        <Button
          variant={"secondary"}
          onClick={() => {
            shuffleCards();
            updateStep("SELECT_CARDS");
          }}
          className={"self-center text-lg px-5"}
          disabled={type === "choices"}
        >
          {type === "todaysFortune" ? "Select Cards" : "Start"}
        </Button>
      </section>
    );
  }

  if (step === "SELECT_CARDS") {
    if (type === "todaysFortune") {
      return <SelectCards shuffledCards={shuffledCards} />;
    }

    if (type === "doOrDont") {
      return (
        <section className={"w-full px-[20px] xl:px-0 flex flex-col gap-y-10"}>
          <DoOrDontForm />
          {context && <SelectCards shuffledCards={shuffledCards} />}
        </section>
      );
    }

    return (
      <section className={"w-full px-[20px] xl:px-0 flex flex-col gap-y-10"}>
        <ChoicesForm />
        {context && <SelectCards shuffledCards={shuffledCards} />}
      </section>
    );
  }

  // * "SHOW-RESULT"
  return <Results />;
};

export default StepManager;
