import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import SelectionHelper from "../do-or-dont/SelectionHelper";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const SelectionPanel = () => {
  const panelRef = useRef<HTMLElement>(null);
  const { selectedCards, handleSubmit, type, min, max, resetSelection } =
    useContext(PlayGroundContext);

  useGSAP(() => {
    gsap.from(panelRef.current, {
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      opacity: 0,
    });
  });

  return (
    <section
      ref={panelRef}
      className={`fixed bottom-0 left-0 bg-indigo-950/50 backdrop-blur-md w-full text-white p-5 flex flex-col justify-between gap-y-10`}
    >
      {type === "todaysFortune" && (
        <span>{`Number of selected cards: ${selectedCards.length}`}</span>
      )}

      {type === "doOrDont" && <SelectionHelper />}

      <div className={"w-full flex items-center justify-end gap-x-2"}>
        <Button
          onClick={() => resetSelection()}
          variant={"secondary"}
          disabled={selectedCards.length < min}
        >
          Reset
        </Button>
        <Button
          onClick={() => handleSubmit()}
          disabled={selectedCards.length < max}
        >
          See Result
        </Button>
      </div>
    </section>
  );
};

export default SelectionPanel;
