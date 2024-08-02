import { MainContext } from "@/screens/home/MainContextProvider";
import { SPREAD_TYPES } from "@/screens/type-intro/constants";
import { useContext } from "react";
import { Button } from "./ui/button";

const IntroContainer = () => {
  const { type, changeToCardSpread } = useContext(MainContext);

  if (!type) return null;

  return (
    <main>
      <section>
        <h1>{SPREAD_TYPES[type].title || "-"}</h1>
        <p>{SPREAD_TYPES[type].description || "-"}</p>
      </section>

      <Button onClick={() => changeToCardSpread()}>Shuffle</Button>
    </main>
  );
};

export default IntroContainer;
