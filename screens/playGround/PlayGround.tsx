"use client";

import { SPREAD_TYPES } from "@/constants/servicesIntro";
import PlayGroundContextProvider from "./PalyGroundContextProvider";
import StepManager from "./StepManager";

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
