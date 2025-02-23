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

let humanScore = 0;
let computerScore = 0;

function showComputerChoice(selection) {
    const computerChoiceText = document.createElement("p");
    computerChoiceText.textContent = `AI plays ${selection}`;
    results.appendChild(computerChoiceText);
}

function playRound(humanChoice, computerChoice, roundNum) {
    const roundHeader = 
        document.querySelector("div.results > h2") || 
        document.createElement("h2");
    
    roundHeader.textContent = `Round ${roundNum}`;
    results.appendChild(roundHeader);    

    const resultText =
        document.querySelector("div.results > p") ||
        document.createElement("p");
        
    if (computerChoice === 'scissors' && humanChoice === 'rock' ||
        computerChoice === 'paper' && humanChoice === 'scissors' ||
        computerChoice === 'rock' && humanChoice === 'paper') {
        resultText.textContent = "Human wins!";
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'rock' && humanChoice === 'scissors') {
        resultText.textContent = "AI wins!";
        computerScore++;
    } else {
        resultText.textContent = "It's a tie!";
    }
    showComputerChoice(computerChoice);
    results.appendChild(resultText);
    }

buttons.forEach((button) => {button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice(), 1);
    })
});