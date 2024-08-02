import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { MainContext } from "../home/MainContextProvider";

type Props = {
  selectedCards: Set<string>;
};
const SelectedCards = ({ selectedCards }: Props) => {
  const { changeToShowResult } = useContext(MainContext);
  return (
    <footer
      className={`fixed bottom-0 left-0 bg-black/80 backdrop-blur-md h-[30vh] w-full flx flex-col text-white p-5`}
    >
      {`Number of selected cards: ${selectedCards.size}`}

      <Button onClick={changeToShowResult}>See Result</Button>
    </footer>
  );
};

export default SelectedCards;
