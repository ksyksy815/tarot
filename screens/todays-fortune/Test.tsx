"use client";

import Card from "@/components/Card";
import useShuffledCards from "@/hooks/useShuffledCards";

const Test = () => {
  const { shuffleCards, shuffledCards } = useShuffledCards();
  return (
    <div className={"w-full border border-red-700 py-10 pl-10 "}>
      <div
        className={
          "relative h-[500px] flex items-center w-full overflow-x-scroll scrollbar-hide"
        }
      >
        {shuffledCards.map((card, index) => {
          return <Card key={index} card={card} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Test;
