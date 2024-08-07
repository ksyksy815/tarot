export type TarotCard = {
  name: string;
  type: "Major Arcana" | "Minor Arcana";
  image: string;
  index: number;
  keywords: string[];
  suit?: "Wands" | "Cups" | "Swords" | "Pentacles";
  number?: number;
};
