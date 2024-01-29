function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "scissors";
  } else if (random === 2) {
    return "paper";
  } else {
    return "rock";
  }
}

const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rockBtn = document.getElementById("rock");

const table = document.getElementById("table");

let playerSelection;

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  table.innerText = playRound(playerSelection, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  table.innerText = playRound(playerSelection, getComputerChoice());
});

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  table.innerText = playRound(playerSelection, getComputerChoice());
});


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You both chose ${playerSelection}, it's a tie.`;
  }
  switch (playerSelection) {
    case "paper":
      switch (computerSelection) {
        case "scissors":
          return "Computer won, scissors cut the paper.";
        case "rock":
          return "You win, paper covers the rock.";
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "Computer won, rock breaks scissors.";
        case "paper":
          return "You win, scissors cut paper;";
      }
    case "rock":
      switch (computerSelection) {
        case "paper":
          return "Computer won, paper covers the rock";
        case "scissors":
          return "You win, rock breaks scissors.";
      }
  }
}
