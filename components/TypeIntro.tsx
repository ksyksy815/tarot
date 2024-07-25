import { MainContext } from "@/screens/home/MainContextProvider";
import Ground from "@/screens/todays-fortune/Ground";
import { DESCRIPTIONS } from "@/screens/type-intro/constants";
import { useContext } from "react";

const TypeIntro = () => {
  const { type } = useContext(MainContext);

  if (!type) return null;

  if (type === "todays-fortune") {
    return <div>{DESCRIPTIONS.todaysFortune}</div>;
  }

  if (type === "do-or-dont") {
    return <div>{DESCRIPTIONS.doOrDont}</div>;
  }

  return <Ground type={type} />;
};

export default TypeIntro;
