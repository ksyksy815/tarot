import { Button } from "@/components/ui/button";
import { renderMarkdown } from "@/lib/utils";
import Image from "next/image";
import { useContext } from "react";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const CARD_REPRESENTATION = ["Do", "Don't", "Advice"];

// TODO: Loading skeleton
// TODO: Card revelation animation
const DoOrDontResult = () => {
  const { isLoading, selectedCards, results } = useContext(PlayGroundContext);

  return (
    <div className={`flex flex-col items-start gap-10 xl:px-0`}>
      <section
        className={
          "flex items-start w-full bg-slate-200 flex-col md:flex-row md:gap-y-10 gap-x-5 py-10 px-10"
        }
      >
        {selectedCards?.map((card, index) => (
          <div
            key={card.name}
            className={`relative flex flex-col items-start justifd-start w-full max-w-[832px] md:max-h-[1456px]`}
          >
            <div className={`relative w-full h-[80vh] max-h-[1456px]`}>
              <Image
                src={card.image}
                fill={true}
                alt={card.name}
                className={"object-cover"}
              />
              <h3
                className={
                  "absolute bottom-0 left-2 font-bold text-[96px] text-white/80 italic tracking-tighter"
                }
              >
                {CARD_REPRESENTATION[index]}
              </h3>
            </div>

            <div className={"w-full flex flex-col py-10 gap-y-4"}>
              <p className={"text-4xl font-bold"}>{card.name}</p>
              <ul
                className={
                  "w-full flex items-center flex-wrap gap-x-2 font-semibold"
                }
              >
                {card.keywords.map((keyword) => (
                  <li key={keyword} className={"text-slate-400 text-xs"}>
                    {`#${keyword}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {isLoading && <div> Loading... </div>}
      <section className={`w-full flex flex-col px-10 xl:px-0 gap-20`}>
        {results && (
          <div
            className={`flex flex-col w-full gap-y-10 md:gap-y-10`}
            dangerouslySetInnerHTML={renderMarkdown(results)}
          ></div>
        )}

        <div className={"flex items-center w-full justify-end gap-x-2"}>
          <Button variant={"outline"}>Copy</Button>
          <Button>Go back to Services</Button>
        </div>
      </section>
    </div>
  );
};

export default DoOrDontResult;
