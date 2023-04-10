// imports
import React, { useState } from "react";

// local imports
import {
  CardContainer,
  Container,
  Card,
  ButtonContainer,
  Button,
} from "./App.css";
import { generateDeck, shuffleDeck } from "../helper/common.utils";
import { FACE_DOWN_CARD, HEADER_TEXT } from "../helper/common.constants";

const App = () => {
  const [deck, setDeck] = useState(generateDeck());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faceUp, setFaceUp] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleShuffle = () => {
    setDeck(shuffleDeck([...deck]));
    setFaceUp(true);
    setCurrentIndex(0);
  };

  const showNextCard = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleImageLoad = () => {
    console.log("This is called");
    setImageLoaded(true);
  };

  const currentCard = deck[currentIndex];

  return (
    <CardContainer>
      <ButtonContainer>
        <Button onClick={handleShuffle}>{HEADER_TEXT}</Button>
      </ButtonContainer>
      <Container>
        {faceUp && (
          <span>
            {currentIndex + 1} of {deck.length}
          </span>
        )}
        {imageLoaded ? (
          <Card
            src={faceUp ? currentCard.img : FACE_DOWN_CARD}
            onClick={showNextCard}
          />
        ) : (
          <Card
            src={faceUp ? currentCard.img : FACE_DOWN_CARD}
            onClick={showNextCard}
            onLoad={handleImageLoad}
            style={{ filter: "blur(10px)" }}
          />
        )}
      </Container>
    </CardContainer>
  );
};

export default App;
