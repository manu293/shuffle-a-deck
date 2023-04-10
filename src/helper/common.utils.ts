// local imports
import { SUITS, RANKS } from "./common.constants";
import { DeckProps } from "./common.interfaces";

export const generateDeck = () => {
  let deck = [];
  for (let suitKey in SUITS) {
    let suit = SUITS[suitKey];
    for (let rank of RANKS) {
      deck.push({
        suit,
        rank,
        img: `https://deckofcardsapi.com/static/img/${rank}${suit}.png`,
      });
    }
  }
  return deck;
};

export const shuffleDeck = (deck: DeckProps) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};
