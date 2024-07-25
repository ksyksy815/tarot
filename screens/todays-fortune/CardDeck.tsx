import Card from "@/components/Card";
import { TarotCard } from "@/types/tarotCard.type";

type Props = {
  cards: TarotCard[];
  selectedCards: Set<string>;
  updateSelectedCard: (cardName: string) => void;
  resetSelection: () => void;
};
const CardDeck = ({
  cards,
  selectedCards,
  updateSelectedCard,
  resetSelection,
}: Props) => {
  return (
    <>
      <div
        className={`relative h-[250px] w-full flex items-center justify-start flex-wrap`}
      >
        {cards.map((card, index) => {
          return (
            <Card
              key={card.name}
              card={card}
              isSelected={selectedCards.has(card.name)}
              updateSelectedCard={updateSelectedCard}
              transform={`${index * 15}px`}
            />
          );
        })}
      </div>
      <button onClick={() => resetSelection()}>Reset</button>
    </>
  );
};

export default CardDeck;
