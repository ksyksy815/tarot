import Card from "@/components/Card";
import { TarotCard } from "@/types/tarotCard.type";

type Props = {
  cards: TarotCard[];
  selectedCards: Set<string>;
  updateSelectedCard: (cardName: string) => void;
};
const CardDeck = ({ cards, selectedCards, updateSelectedCard }: Props) => {
  return (
    <div
      className={`relative w-full flex items-center justify-center flex-wrap overflow-x-scroll scrollbar-hide gap-2 pt-10 px-5 pb-[30vh]`}
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={card.name}
            card={card}
            isSelected={selectedCards.has(card.name)}
            updateSelectedCard={() => updateSelectedCard(card)}
          />
        );
      })}
    </div>
  );
};

export default CardDeck;
