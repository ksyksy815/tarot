export type TarotCard = {
  name: string;
  type: "Major Arcana" | "Minor Arcana";
  suit?: "Wands" | "Cups" | "Swords" | "Pentacles";
  number?: number;
};
