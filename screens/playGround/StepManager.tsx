"use client";

import { Button } from "@/components/ui/button";
import { SPREAD_TYPES } from "@/constants/servicesIntro";
import useShuffledCards from "@/hooks/useShuffledCards";
import { useContext } from "react";
import SelectCards from "../todays-fortune/SelectCards";
import TodaysFortuneResult from "../todays-fortune/TodaysFortuneResult";
import ContextForm from "./ContextForm";
import { PlayGroundContext } from "./PalyGroundContextProvider";

const StepManager = () => {
  const { type, step, updateStep, updateContext } =
    useContext(PlayGroundContext);
  const { shuffledCards, shuffleCards } = useShuffledCards();

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
      <>
        <ContextForm />

        <SelectCards shuffledCards={shuffledCards} />
      </>
    );
  }

  // * "SHOW-RESULT"
  // TODO: type에 따라 다른 결과 화면 레이아웃 보여주기
  return <TodaysFortuneResult />;
};

export default StepManager;
