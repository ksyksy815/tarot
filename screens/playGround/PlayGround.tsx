"use client";

import { SPREAD_TYPES } from "@/constants/servicesIntro";
import StepManager from "../home/StepManager";
import PlayGroundContextProvider from "./PalyGroundContextProvider";

type Props = {
  type: keyof typeof SPREAD_TYPES;
};
const PlayGround = ({ type }: Props) => {
  return (
    <PlayGroundContextProvider type={type}>
      <StepManager />
    </PlayGroundContextProvider>
  );
};

export default PlayGround;
