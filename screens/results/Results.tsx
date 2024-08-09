import { useContext } from "react";
import ChoicesResult from "../choices/ChoicesResult";
import DoOrDontResult from "../do-or-dont/DoOrDontResult";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";
import TodaysFortuneResult from "./TodaysFortuneResult";

const Results = () => {
  const { type } = useContext(PlayGroundContext);

  if (type === "todaysFortune") {
    return <TodaysFortuneResult />;
  }

  if (type === "doOrDont") {
    return <DoOrDontResult />;
  }

  return <ChoicesResult />;
};

export default Results;
