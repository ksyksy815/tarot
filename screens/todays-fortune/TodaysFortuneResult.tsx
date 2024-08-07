import { renderMarkdown } from "@/lib/utils";
import Image from "next/image";
import { useContext } from "react";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const TodaysFortuneResult = () => {
  const { selectedCards, results } = useContext(PlayGroundContext);

  return (
    <div
      className={`flex flex-col items-start md:flex-row gap-10 md:px-5 xl:px-0`}
    >
      {selectedCards?.map((card) => (
        <div
          key={card.name}
          className={`relative w-full max-w-[832px] h-screen max-h-[1456px]`}
        >
          <div
            className={`relative w-full h-[80vh] max-h-[1456px] bg-stone-200`}
          >
            <Image
              src={card.image}
              fill={true}
              alt={card.name}
              className={"p-5 object-contain"}
            />
          </div>

          <div className={"w-full flex flex-col p-10 gap-y-2"}>
            <p className={"text-4xl font-bold"}>{card.name}</p>
            <ul
              className={
                "w-full flex items-center flex-wrap gap-x-2 font-semibold"
              }
            >
              {card.keywords.map((keyword) => (
                <li key={keyword} className={"text-stone-400 text-xs"}>
                  {`#${keyword}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <section className={`w-full flex flex-col px-10 xl:px-0`}>
        {results && (
          <div
            className={`flex flex-col w-full gap-y-10 md:gap-y-10`}
            dangerouslySetInnerHTML={renderMarkdown(results)}
          ></div>
        )}
      </section>
    </div>
  );
};

export default TodaysFortuneResult;
