import Card from "@/components/Card";
import { TarotCard } from "@/types/tarotCard.type";

type Props = {
  shuffledCards: TarotCard[];
};

const SpreadCards = ({ shuffledCards = [] }: Props) => {
  return (
    <div
      className={
        "flex flex-col gap-y-2 w-full flex-1 py-5 pl-5 md:py-10 md:pl-10 "
      }
    >
      <div className={"self-end"}>Scroll cards</div>
      <div
        className={
          "relative h-[35vh] flex items-start w-full overflow-x-scroll scrollbar-hide"
        }
      >
        {shuffledCards.map((card, index) => {
          return <Card key={index} card={card} index={index} />;
        })}
      </div>
    </div>
  );
};

export default SpreadCards;
