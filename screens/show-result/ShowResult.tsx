import { useContext } from "react";
import { MainContext } from "../home/MainContextProvider";
import TodaysFortuneResult from "../todays-fortune/TodaysFortuneResult";

const ShowResult = () => {
  const { type, cards, result, isLoading } = useContext(MainContext);

  if (type === "todaysFortune") {
    return <TodaysFortuneResult />;
  }

  return <></>;
};

export default ShowResult;
