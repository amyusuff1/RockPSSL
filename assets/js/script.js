//// Define options and scores
const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function play(playerChoice) {
  // Get computer's choice
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  // Determine winner and update scores
  if (playerChoice == computerChoice) {
    document.getElementById("result").innerHTML = "It's a tie!";
  } else if (
    (playerChoice == "rock" && (computerChoice == "scissors" || computerChoice == "lizard")) ||
    (playerChoice == "paper" && (computerChoice == "rock" || computerChoice == "spock")) ||
    (playerChoice == "scissors" && (computerChoice == "paper" || computerChoice == "lizard")) ||
    (playerChoice == "lizard" && (computerChoice == "paper" || computerChoice == "spock")) ||
    (playerChoice == "spock" && (computerChoice == "rock" || computerChoice == "scissors"))
  ) {
    document.getElementById("result").innerHTML = "You win!";
    playerScore++;
  } else {
    document.getElementById("result").innerHTML = "Computer wins!";
    computerScore++;
  }

  // Update scores
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("computer-score").innerHTML = computerScore;
}

// Function to restart the game
function restart() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("computer-score").innerHTML = computerScore;
  document.getElementById("result").innerHTML = "";
}
