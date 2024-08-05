"use client";

import TypeIntro from "@/components/TypeIntro";
import { useContext } from "react";
import ShowResult from "../show-result/ShowResult";
import SelectCards from "../todays-fortune/SelectCards";
import { MainContext } from "./MainContextProvider";

const StepManager = () => {
  const { currentStep } = useContext(MainContext);

  // if (currentStep === "select-type") {
  //   return <Select />;
  // }

  if (currentStep === "type-intro") {
    return <TypeIntro />;
  }

  if (currentStep === "card-spread") {
    return <SelectCards />;
  }

  if (currentStep === "show-result") {
    return <ShowResult />;
  }

  return <></>;
};

export default StepManager;
