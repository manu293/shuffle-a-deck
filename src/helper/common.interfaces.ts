export interface CardProps {
  src: string;
}

export interface Suits {
  [key: string]: string;
}

export type DeckProps = {
  suit: string;
  rank: string;
  img: string;
}[];
