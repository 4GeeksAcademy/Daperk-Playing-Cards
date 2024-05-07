/* eslint-disable */
import "./style.css";

window.onload = () => {
  let card = document.querySelector(".Card");
  card.classList.add(generaterandomsuit());
  card.innerHTML = generaterandomnumber();
};

let generaterandomnumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generaterandomsuit = () => {
  let suits = ["heart", "spade", "club", "diamond"];

  let indexSuit = Math.floor(Math.random() * suits.length);

  return suits[indexSuit];
};
