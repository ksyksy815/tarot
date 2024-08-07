import { Button } from "@/components/ui/button";
import { useContext } from "react";
import SelectionHelper from "../do-or-dont/SelectionHelper";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const SelectionPanel = () => {
  const { selectedCards, handleSubmit, type, min, resetSelection } =
    useContext(PlayGroundContext);

  return (
    <section
      className={`fixed bottom-0 left-0 bg-black/30 backdrop-blur-md h-[30vh] w-full text-white p-5 flex flex-col justify-between`}
    >
      <Button
        onClick={() => resetSelection()}
        className={"self-end"}
        variant={"secondary"}
        disabled={selectedCards.length < min}
      >
        Reset
      </Button>
      {type === "todaysFortune" && (
        <span>{`Number of selected cards: ${selectedCards.length}`}</span>
      )}

      {type === "doOrDont" && <SelectionHelper />}

      <Button
        onClick={() => handleSubmit()}
        className={"self-end"}
        disabled={selectedCards.length < min}
      >
        See Result
      </Button>
    </section>
  );
};

export default SelectionPanel;
