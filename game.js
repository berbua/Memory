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
  activeCard.classList.remove("hidden");
  //check if first click
  if (activeCards.length === 0) {
    activeCards[0] == activeCard;
    return;
  }
  //if second click - block clicking on other cards
  else {
  }

  //if second click - block for click
  //if second click - check if win or loose. if fin check if game over
  //block double click on one card
  //block click on class hidden
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
