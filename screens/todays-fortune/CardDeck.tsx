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
      className={`relative w-full flex items-center justify-center flex-wrap overflow-x-scroll scrollbar-hide border gap-2 py-10`}
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={card.name}
            card={card}
            isSelected={selectedCards.has(card.name)}
            updateSelectedCard={updateSelectedCard}
          />
        );
      })}
    </div>
  );
};

export default CardDeck;
