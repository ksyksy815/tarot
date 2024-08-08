import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {
  cardName: string;
  keywords: string[];
};

const CardLabel = ({ cardName = "", keywords = [] }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: -100,
      duration: 0.5,
      ease: "power3.out",
      opacity: 0,
    });
  });

  return (
    <div
      ref={cardRef}
      className={"w-full flex flex-col py-10 gap-y-4 text-center lg:text-left "}
    >
      <p className={"text-4xl font-bold"}>{cardName}</p>
      <ul
        className={
          "w-full flex justify-center lg:justify-start items-center flex-wrap gap-x-2 font-semibold"
        }
      >
        {keywords.map((keyword) => (
          <li key={keyword} className={"text-slate-600 text-sm"}>
            {`#${keyword}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardLabel;
