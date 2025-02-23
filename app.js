const results = document.querySelector("div.results");
const buttons = document.querySelectorAll("Button");

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
    const roundHeader = 
        document.querySelector("div.results > h2") || 
        document.createElement("h2");
    
    roundHeader.textContent = `Round ${roundNum}`;
    results.appendChild(roundHeader);    

    const resultText =
        document.querySelector("div.results > p") ||
        document.createElement("p");
        
    if (computerChoice === 'scissors' && humanChoice === 'rock' || computerChoice === 'paper' && humanChoice === 'scissors' || computerChoice === 'rock' && humanChoice === 'paper') {
        resultText.textContent = "Human wins!";
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper' || computerChoice === 'paper' && humanChoice === 'rock' || computerChoice === 'rock' && humanChoice === 'scissors') {
        resultText.textContent = "AI wins!";
        computerScore++;
    } else {
        resultText.textContent = "It's a tie!";
    }
    results.appendChild(document.createElement("p"));
    }

buttons.forEach((button) => {button.addEventListener("click", playRound)});