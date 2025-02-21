function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt('Let\'s play against the AI! Best out of 5! Type "Rock", "Paper", "Scissors":').toLowerCase();
    switch (userInput) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Oops! Try Again! Please type either 'Rock', 'Paper', 'Scissors'");
            getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice, roundNum) {
    console.log(`Round ${roundNum}\n\n\n`);
    if (computerChoice === 'scissors' && humanChoice === 'rock' || computerChoice === 'paper' && humanChoice === 'scissors' || computerChoice === 'rock' && humanChoice === 'paper') {
        console.log('Human wins!');
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('AI Wins!');
        computerScore++;
    } else {
        console.log("It's a tie!");
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, i);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

playGame();