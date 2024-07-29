import { MainContext } from "@/screens/home/MainContextProvider";
import { DESCRIPTIONS } from "@/screens/type-intro/constants";
import { useContext } from "react";
import { Button } from "./ui/button";

const TypeIntro = () => {
  const { type, changeToCardSpread } = useContext(MainContext);

  if (!type) return null;

  if (type === "todays-fortune") {
    return (
      <>
        <div>{DESCRIPTIONS.todaysFortune}</div>
        <Button onClick={() => changeToCardSpread()}>Shuffle</Button>
      </>
    );
  }

  if (type === "do-or-dont") {
    return <div>{DESCRIPTIONS.doOrDont}</div>;
  }

  if (type === "choices") {
    return <div>{DESCRIPTIONS.choices}</div>;
  }

  return <></>;
};

export default TypeIntro;
