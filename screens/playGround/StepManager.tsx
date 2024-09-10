"use client";

import { Button } from "@/components/ui/button";
import { SPREAD_TYPES } from "@/constants/servicesIntro";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useContext } from "react";
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
      <section className={"w-full flex flex-col gap-10 px-[20px] text-white"}>
        <h1
          className={
            "text-4xl lg:text-5xl font-serif font-bold border-l-4 px-6"
          }
        >
          {SPREAD_TYPES[type].title || "-"}
        </h1>

        <div className={"flex flex-col gap-y-10 md:gap-y-15 lg:gap-y-20"}>
          {SPREAD_TYPES[type].description.map((text, index) => (
            <p
              key={index}
              className={`max-w-[90%] text-3xl md:max-w-[65%] leading-[40px] lg:max-w-[50%] lg:text-4xl lg:leading-[50px]`}
            >
              {text}
            </p>
          ))}
        </div>

        <Button
          variant={"secondary"}
          onClick={() => {
            shuffleCards();
            updateStep("SELECT_CARDS");
          }}
          className={
            "z-20 text-2xl border text-white border-white self-start py-1 px-10 rounded-lg bg-white/10 hover:bg-white/20"
          }
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

    return (
      <section className={"w-full xl:px-0 flex flex-col gap-y-10"}>
        <DoOrDontForm />
        {context && <SelectCards shuffledCards={shuffledCards} />}
      </section>
    );
  }

  // * "SHOW-RESULT"
  return <Results />;
};

export default StepManager;
