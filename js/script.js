function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"]
    let choice = Math.random(1, 3) * (3 - 1) + 1    
    return options[choice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toUpperCase()
    computerSelection.toUpperCase()
    
}

function game(numOfRounds) {
    for (let i = 0; i < numOfRounds; i++) {
        playRound(playerSelection, computerSelection)
    }
}

const numOfRounds = 5;
const playerSelection = prompt("Pick your tool: ");
const computerSelection = computerPlay();
