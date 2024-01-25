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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer won! Paper beats rock.";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You won! Rock beats scissors.";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won! Paper beats rock.";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer won! Scissors beat paper.";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer won! Rock beats scissors.";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beat paper.";
  }
  return "please enter either paper, scissors or rock";
}

// const playerSelection = prompt("Choose paper scissors or rock", "scissors");
// const computerSelection = getComputerChoice();

// // console.log(`Your choice is ${playerSelection.toLowerCase()}`);
// console.log(`Computer choice is ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let gameCount = 0;
  let playerScore = 0;
  let computerScore = 0;
  while (gameCount < 5) {
    const playerSelection = prompt("Choose paper scissors or rock", "scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playRound(playerSelection, computerSelection).charAt(0) === "Y") {
      playerScore = playerScore + 1;
    }
    if (playRound(playerSelection, computerSelection).charAt(0) === "C") {
      computerScore = computerScore + 1;
    }
    gameCount++;
  }

  if (playerScore > computerScore) {
    console.log("You won the tournament");
  } else if (computerScore > playerScore) {
    console.log("Computer won the tournament");
  } else {
    console.log("Tournament is a scam.");
  }
}

game();
