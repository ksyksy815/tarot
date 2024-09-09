import { useContext } from "react";
import DoOrDontResult from "../do-or-dont/DoOrDontResult";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";
import TodaysFortuneResult from "./TodaysFortuneResult";

const Results = () => {
  const { type } = useContext(PlayGroundContext);

  if (type === "todaysFortune") {
    return <TodaysFortuneResult />;
  }

  return <DoOrDontResult />;
};

export default Results;
