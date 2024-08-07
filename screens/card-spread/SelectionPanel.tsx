import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const SelectionPanel = () => {
  const { selectedCards, handleSubmit, type, min } =
    useContext(PlayGroundContext);

  return (
    <section
      className={`fixed bottom-0 left-0 bg-black/30 backdrop-blur-md h-[30vh] w-full text-white p-5 flex flex-col justify-between`}
    >
      {type === "todaysFortune" && (
        <span>{`Number of selected cards: ${selectedCards.length}`}</span>
      )}

      {type === "doOrDont" && (
        <div>
          <div>
            <span>{`Do: ${
              selectedCards.length >= 1 ? "Selected" : "Not selected"
            }`}</span>
          </div>
          <div>
            <span>{`Don't: ${
              selectedCards.length === 2 ? "Selected" : "Not selected"
            }`}</span>
          </div>
        </div>
      )}

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
