"use client";

import { useContext } from "react";
import { MainContext } from "./MainContextProvider";

const TemporaryStageTracker = () => {
  const { currentStep } = useContext(MainContext);
  return (
    <div className={"text-white"}>{`Current step is: ${currentStep}`}</div>
  );
};

export default TemporaryStageTracker;
