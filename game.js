const cardsColor = [
  "red",
  "red",
  "green",
  "green",
  "blue",
  "blue",
  "brown",
  "brown",
  "yellow",
  "yellow",
  "gray",
  "gray",
  "cadetblue",
  "cadetblue",
  "violet",
  "violet",
  "lightgreen",
  "lightgreen"
];

let cards = document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = function() {
  /*one full round*/
  activeCard = this;

  //block double click on one card
  if (activeCard == activeCards[0]) return;

  activeCard.classList.remove("hidden");
  //check if first click
  if (activeCards.length === 0) {
    activeCards[0] = activeCard; //dziala bo activecard dostal thisa
    return;
  }
  //if second click - block clicking on other cards
  else {
    cards.forEach(card => {
      card.removeEventListener("click", clickCard);
      activeCards[1] = activeCard;
      /*delay to show both cards */
      setTimeout(function() {
        //if second click - check if win or loose. if win check if game over
        if (activeCards[0].className === activeCards[1].className) {
          console.log("round won");
          activeCards.forEach(card => card.classList.add("off"));
          //result increment
          gameResult++;

          //exclude clicked cards from cards array
          cards = cards.filter(card => !card.classList.contains("off"));

          //check if game over
          if (gameResult == gamePairs) {
            const endTime = new Date().getTime();
            const gameTime = (endTime - startTime) / 1000;
            alert(`You won! Your score: ${gameTime} seconds`);
            location.reload();
          }
        } else {
          console.log("round lost");
          activeCards.forEach(card => card.classList.add("hidden"));
        }

        //active cards reset
        activeCard = "";
        activeCards.length = 0;

        //bring back event listener
        cards.forEach(card => card.addEventListener("click", clickCard));
      }, 500);
    });
  }
};

const init = function() {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });

  setTimeout(function() {
    cards.forEach(card => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 2000);
};

init();
