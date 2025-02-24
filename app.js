const results = document.querySelector("div.results");
const buttons = document.querySelectorAll("button");

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

let roundNum = 0;
let humanScore = 0;
let computerScore = 0;

function showChoice(player, selection) {
    const computerChoiceText = 
        document.querySelector(`div.results > p.${player}`) ||
        document.createElement("p");

    computerChoiceText.classList.add(player);

    computerChoiceText.textContent = `${player} plays ${selection}`;
    return computerChoiceText;
}

function playRound(humanChoice, computerChoice) {
    const roundHeader = 
        document.querySelector("div.results > h2") || 
        document.createElement("h2");
    
    roundNum++;
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
    results.appendChild(document.createElement("br"));
    humanChoiceText = showChoice("You", humanChoice);
    computerChoiceText = showChoice("AI", computerChoice);
    results.appendChild(humanChoiceText);
    results.appendChild(computerChoiceText);
    results.appendChild(resultText);
    }

buttons.forEach((button) => {button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
    })
});