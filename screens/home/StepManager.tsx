"use client";

import Select from "@/components/Select";
import TypeIntro from "@/components/TypeIntro";
import { useContext } from "react";
import ShowResult from "../show-result/ShowResult";
import Ground from "../todays-fortune/Ground";
import { MainContext } from "./MainContextProvider";

const StepManager = () => {
  const { currentStep } = useContext(MainContext);

  if (currentStep === "select-type") {
    return <Select />;
  }

  if (currentStep === "type-intro") {
    return <TypeIntro />;
  }

  if (currentStep === "card-spread") {
    return <Ground />;
  }

  if (currentStep === "show-result") {
    return <ShowResult />;
  }

  return <></>;
};

export default StepManager;
