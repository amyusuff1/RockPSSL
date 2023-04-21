/**
 * Options and scores
 */

const options = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;

/** 
 * function to play the game 
 */
function play(playerChoice) {
/**
 * selects computeres choice
 */
    const computerChoice = options[Math.floor(Math.random() * options.length)];

}

/**
 * To determine the winner and update scores
 */

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

/**
 * fuction to restart the game
 */
function restart() {

}
