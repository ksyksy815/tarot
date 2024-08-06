import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const SelectionPanel = () => {
  const { updateStep, selectedCards, handleSubmit } =
    useContext(PlayGroundContext);
  return (
    <footer
      className={`fixed bottom-0 left-0 bg-black/80 backdrop-blur-md h-[30vh] w-full flx flex-col text-white p-5`}
    >
      {`Number of selected cards: ${selectedCards.length}`}

      <Button onClick={() => handleSubmit()}>See Result</Button>
    </footer>
  );
};

export default SelectionPanel;
