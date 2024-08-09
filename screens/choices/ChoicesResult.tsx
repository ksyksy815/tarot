import { Button } from "@/components/ui/button";
import usePDFGenerator from "@/hooks/usePDFGenerator";
import { renderMarkdown } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import { FaCommentDots } from "react-icons/fa";
import CardResult from "../do-or-dont/CardResult";
import Skeleton from "../do-or-dont/Skeleton";
import { PlayGroundContext } from "../playGround/PalyGroundContextProvider";

const CARD_REPRESENTATION1 = ["Option 1", "Option 2", "Advice"];
const CARD_REPRESENTATION2 = ["Option 1", "Option 2", "Option 3", "Advice"];

const ChoicesResult = () => {
  const resultPageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { isLoading, selectedCards, results, context } =
    useContext(PlayGroundContext);
  const { generatePDF } = usePDFGenerator();

  useGSAP(() => {
    const timeline = gsap.timeline({ stagger: 0.5 });

    timeline.from(`.card-0`, { opacity: 0, y: 50, duration: 0.5 });
    timeline.from(`.card-1`, { opacity: 0, y: 50, duration: 0.5 });
    timeline.from(`.card-2`, { opacity: 0, y: 50, duration: 0.5 });
  });

  return (
    <div
      ref={resultPageRef}
      className={`flex flex-col items-center gap-10 xl:px-0`}
    >
      <section
        className={`w-full flex flex-col px-[20px] md:flex-row xl:px-0 gap-5`}
      >
        <div className={"w-7 h-7"}>
          <FaCommentDots size={28} />
        </div>

        <h2 className={"text-2xl font-semibold italic"}>{`"${context}"`}</h2>
      </section>

      <section
        className={
          "flex items-center w-full bg-slate-200 flex-col lg:items-start lg:flex-row gap-y-10 gap-x-5 py-10 px-10 rounded-lg"
        }
      >
        {selectedCards?.map((card, index, arr) => (
          <div
            key={card.name}
            className={`card-${index}, relative flex flex-col items-center lg:items-start justifd-start w-full`}
          >
            <h2
              className={
                "mb-2 font-serif italic font-bold text-5xl text-slate-800"
              }
            >{`Card ${index + 1}`}</h2>
            <CardResult
              imageUrl={card.image}
              cardName={card.name}
              keywords={card.keywords}
              subname={
                arr.length === 4
                  ? CARD_REPRESENTATION1[index]
                  : CARD_REPRESENTATION2[index]
              }
            />
          </div>
        ))}
      </section>

      <section className={`w-full flex flex-col px-[20px] xl:px-0 gap-20`}>
        {isLoading && <Skeleton />}

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

export default ChoicesResult;
