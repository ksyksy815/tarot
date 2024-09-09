import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import usePDFGenerator from "@/hooks/usePDFGenerator";
import { renderMarkdown } from "@/lib/utils";
import router from "next/router";
import { useContext, useRef } from "react";
import CardResult from "../do-or-dont/CardResult";

import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const TodaysFortuneResult = () => {
  const resultPageRef = useRef<HTMLDivElement>(null);
  const { generatePDF } = usePDFGenerator();
  const { isLoading, selectedCards, results } = useContext(PlayGroundContext);

  return (
    <div
      ref={resultPageRef}
      className={`w-full flex flex-col md:flex-row gap-10 p-5 bg-[#201D1C]/80 text-white rounded-lg backdrop-blur-sm`}
    >
      {selectedCards?.map((card, index) => (
        <div
          key={card.name}
          className={`relative flex flex-col items-center w-full gap-y-5`}
        >
          <h2
            className={"mb-2 font-serif italic font-bold text-5xl"}
          >{`Today's Fortune`}</h2>
          <CardResult
            imageUrl={card.image}
            cardName={card.name}
            keywords={card.keywords}
          />
        </div>
      ))}

      <section className={`w-full flex flex-col gap-y-10`}>
        {isLoading && <Skeleton className="w-[100px] h-[20px] rounded-full" />}
        {results && (
          <div
            className={`flex flex-col w-full gap-y-10 md:gap-y-10`}
            dangerouslySetInnerHTML={renderMarkdown(results)}
          ></div>
        )}

        <div className={"flex items-center w-full justify-end gap-x-2"}>
          <Button
            variant={"outline"}
            onClick={() => generatePDF(resultPageRef)}
          >
            Save as PDF
          </Button>
          <Button onClick={() => router.push("/services")}>
            Go back to Services
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TodaysFortuneResult;
