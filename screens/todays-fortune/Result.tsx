import { TarotCard } from "@/types/tarotCard.type";

type Props = {
  chosenCards: TarotCard[];
};
const Result = ({ chosenCards = [] }: Props) => {
  return (
    <div>
      {chosenCards.map(({ name, type, suit = "", number = 0 }) => {
        return (
          <div key={name}>
            <h3>{name}</h3>
            <p>{type}</p>
            {suit !== "" && <p>{suit}</p>}
            {number !== 0 && <p>{number}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Result;
