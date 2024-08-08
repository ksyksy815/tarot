import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import CardLabel from "./CardLabel";

type Props = {
  imageUrl: string;
  cardName: string;
  keywords: string[];
  subname?: string;
};
const CardResult = ({
  imageUrl = "",
  cardName = "",
  keywords = [],
  subname = "",
}: Props) => {
  const backsideRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLImageElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    if (backsideRef.current && contentRef.current) {
      gsap.to(backsideRef.current, {
        duration: 0.5,
        opacity: 0,
        x: 100,
        onComplete: () => {
          backsideRef.current!.style.display = "none";
        },
      });

      gsap.to(contentRef.current, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        delay: 0.5,
      });
    }

    setIsRevealed(true);
  };

  //max: w-376 h-658
  return (
    <>
      <div
        className={`relative w-full max-w-[376px] h-[80vh] max-h-[658px] rounded-lg overflow-hidden shadow-md shadow-slate-500 aspect-[4/7] hover:translate-y-[-2px]`}
      >
        <Image
          ref={contentRef}
          src={imageUrl}
          fill={true}
          alt={cardName}
          className={"object-contain "}
        />

        {subname !== "" && (
          <h3
            className={
              "absolute bottom-0 left-2 font-bold text-[80px] text-white/80 italic tracking-tighter"
            }
          >
            {subname}
          </h3>
        )}

        <Image
          ref={backsideRef}
          src={"/images/tarot-back.png"}
          fill={true}
          alt={"tarot-back"}
          className={"cursor-pointer"}
          onClick={handleReveal}
        />
      </div>
      {isRevealed && <CardLabel cardName={cardName} keywords={keywords} />}
    </>
  );
};

export default CardResult;
