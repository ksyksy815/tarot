import Card from "@/components/Card";
import { TarotCard } from "@/types/tarotCard.type";

type Props = {
  shuffledCards: TarotCard[];
};

const SpreadCards = ({ shuffledCards = [] }: Props) => {
  return (
    <div
      className={`relative w-full flex items-center justify-center flex-wrap overflow-x-scroll scrollbar-hide gap-2 pt-10 px-5 pb-[30vh]`}
    >
      {shuffledCards.map((card) => {
        return <Card key={card.name} card={card} />;
      })}
    </div>
  );
};

export default SpreadCards;
