"use client";

import useShuffledCards from "@/hooks/useShuffledCards";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import DraggableCard from "./DraggableCard";

const Test = () => {
  const { shuffledCards } = useShuffledCards();
  const mainRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const placeRef = useRef<HTMLDivElement>(null);
  const isOverPlaceRef = useRef(false);
  const [isDropped, setIsDropped] = useState(false);
  const [isOverPlace, setIsOverPlace] = useState(false);

  return (
    <main ref={mainRef} className={"w-full"}>
      <section
        className={`flex items-center justify-center h-[40vh] w-full bg-slate-800`}
      >
        <div
          className={cn(
            "flex flex-col border border-dashed rounded-lg items-center gap-y-3 p-5",
            {
              "border-[2px] border-white": isOverPlace,
              "border-[2px] border-solid border-white": isDropped,
            }
          )}
        >
          <div ref={placeRef} className={cn("h-[250px] w-[150px] ")} />

          <span>{`Today's Fortune`}</span>
        </div>
      </section>

      <section
        className={
          "relative h-[50vh] w-full bg-slate-400 p-5 border border-red-700 flex items-center "
        }
      >
        {shuffledCards.map((card, index) => {
          return (
            <DraggableCard
              key={index}
              index={index}
              mainRef={mainRef}
              placeRef={placeRef}
              isOverPlaceRef={{ current: isOverPlaceRef.current }}
              setIsOverPlace={setIsOverPlace}
              setIsDropped={setIsDropped}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Test;
