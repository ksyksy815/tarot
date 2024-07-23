"use client";

import Select from "@/components/Select";
import TypeIntro from "@/components/TypeIntro";
import { useContext } from "react";
import { MainContext } from "./MainContextProvider";

const StepManager = () => {
  const { currentStep } = useContext(MainContext);

  if (currentStep === "select-type") {
    return <Select />;
  }

  if (currentStep === "type-intro") {
    return <TypeIntro />;
  }
  return <div className={`flex flex-col h-full w-full`}></div>;
};

export default StepManager;
