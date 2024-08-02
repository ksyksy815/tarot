import { renderMarkdown } from "@/lib/utils";
import Image from "next/image";
import { useContext } from "react";
import { MainContext } from "../home/MainContextProvider";

const TodaysFortuneResult = () => {
  const { cards, result, isLoading } = useContext(MainContext);

  const card = cards[0];

  return (
    <div
      className={`flex flex-col items-start md:flex-row gap-10 md:px-5 xl:px-0`}
    >
      <div
        key={card.name}
        className={`relative w-full max-w-[832px] h-screen max-h-[1456px]`}
      >
        <div className={`relative w-full max-w-[832px] h-auto bg-stone-200`}>
          <Image
            src={card.image}
            fill={true}
            alt={card.name}
            className={"object-cover"}
          />
        </div>
        <div
          className={
            "absolute top-1/2 w-full bg-stone-800/50 grid place-content-center p-5 backdrop-blur-sm"
          }
        >
          <span className={` text-white text-5xl`}>{card.name}</span>
        </div>
      </div>

      <section className={`w-full flex flex-col p-5 md:py-10 xl:px-0`}>
        {isLoading && <div>Loading...</div>}
        {result && (
          <div
            className={`flex flex-col w-full gap-y-5 md:gap-y-10`}
            dangerouslySetInnerHTML={renderMarkdown(result)}
          ></div>
        )}
      </section>
    </div>
  );
};

export default TodaysFortuneResult;
