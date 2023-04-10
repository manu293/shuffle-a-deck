# Deck of Cards Shuffler

This project is a simple React application that displays a deck of cards and allows the user to shuffle the deck and reveal one card at a time. The deck of cards is shuffled using the Fisher-Yates shuffle algorithm.

## Approach

- A standard deck of 52 playing cards is generated using a helper function.
- The deck is stored in the state of the main React component.
- A "Shuffle Deck" button triggers the shuffling of the deck using the Fisher-Yates shuffle algorithm.
- The application initially displays a face-down card. Clicking on the "Shuffle Deck" button reveals the first card in the shuffled deck.
- Clicking on the card reveals the next card in the shuffled deck until all cards have been revealed.
- Card images are sourced from a third-party service (deckofcardsapi), and are only rendered once the image has been fully downloaded, ensuring a seamless user experience.

## Steps to Run the Project Locally

### Clone the repository:

`git clone https://github.com/yourusername/deck-of-cards-shuffler.git`

### Change Directory

`cd deck-of-cards-shuffler`

### Install the dependencies:

`npm install`

### Start the development server:

`npm start`

Open your browser and navigate to http://localhost:3000 to view the running application
