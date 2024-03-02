// Create a program that will player rock, paper, scissors.

// Whiteboard all the possible variations for winning, losing, and draw. You might make a table to organize the results (like tables used to describe the result of two boolean expressions).

// Compare and contrast the Magic 8-ball assignment. What will be similar? What will be different?

// Once you have written your working program, evaluate what parts are being repeated. How can you make your code DRY and not repeat any code?

// Possible Outcomes

// rock vs rock = draw
// rock vs paper = paper wins
// rock vs scissors = rock wins
// paper vs paper = draw
// paper vs rock = paper wins
// paper vs scissors = scissors wins
// scissors vs scissors = draw
// scissors vs paper = scissors wins
// scissors vs rock = rock wins

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame("scissors");
});

function playGame(playerChoice) {
  const compChoice = getCompChoice();
  const result = getWinner(playerChoice, compChoice);
  document.getElementById("result").innerText = result;
}

function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return "Draw!";
  } else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    return "Winner!";
  } else {
    return "Computer wins!";
  }
}
