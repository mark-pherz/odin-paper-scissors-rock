const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rockBtn = document.getElementById("rock");
const table = document.getElementById("table");

let playerScore = 0;
let computerScore = 0;
let playerSelection;

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  table.innerText = playRound(playerSelection, getComputerChoice());
  document.getElementById("playerScr").innerText = playerScore;
  document.getElementById("computerScr").innerText = computerScore;
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  table.innerText = playRound(playerSelection, getComputerChoice());
  document.getElementById("playerScr").innerText = playerScore;
  document.getElementById("computerScr").innerText = computerScore;
});

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  table.innerText = playRound(playerSelection, getComputerChoice());
  document.getElementById("playerScr").innerText = playerScore;
  document.getElementById("computerScr").innerText = computerScore;
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You both chose ${playerSelection}, it's a tie.`;
  }
  switch (playerSelection) {
    case "paper":
      switch (computerSelection) {
        case "scissors":
          computerScore++;
          return "Computer won, scissors cut the paper.";
        case "rock":
          playerScore++;
          return "You win, paper covers the rock.";
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          computerScore++;
          return "Computer won, rock breaks scissors.";
        case "paper":
          playerScore++;
          return "You win, scissors cut paper.";
      }
    case "rock":
      switch (computerSelection) {
        case "paper":
          computerScore++;
          return "Computer won, paper covers the rock.";
        case "scissors":
          playerScore++;
          return "You win, rock breaks scissors.";
      }
  }
}

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
