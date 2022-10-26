const message3 = document.getElementById("message3");
const message2 = document.getElementById("message2");
const message1 = document.getElementById("message1");

const answer = Math.floor(Math.random() * 100) + 1;
const no_of_guesses = 0;
const guessed_nums = [];

function play() {
  const user_guess = document.getElementById("guess").value; //flytta??
  if (user_guess < 0 || user_guess > 100) {
    alert("Please enter a number between 0 and 100.");
  } else {
  }
}
