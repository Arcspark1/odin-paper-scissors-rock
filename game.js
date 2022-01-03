const paperButton = document.querySelector('#button-paper');
const rockButton = document.querySelector('#button-rock');
const scissorsButton = document.querySelector('#button-scissors');

const gameResultText = document.querySelector('#whoWon');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

paperButton.addEventListener('click', function () { game('paper') });
rockButton.addEventListener('click', function () { game('rock') });
scissorsButton.addEventListener('click', function () { game('scissors') });

let counterPlayer = 0;
let counterComputer = 0;

function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}

function playerSelection(text) {
    return text;
}

function playRound(text) {
    let a = computerPlay()
    let b = playerSelection(text)
    let result = ""

    if (a === b) {
        result = "Draw! Both chose " + a + "!"
    }
    else if (b === 'rock' && a === 'paper') {
        result = "Loser! Paper beats Rock!"
    }
    else if (b === 'rock' && a === 'scissors') {
        result = "Winner! Rock beats Scissors!"
    }
    else if (b === 'paper' && a === 'scissors') {
        result = "Loser! Scissors beats Paper!"
    }
    else if (b === 'paper' && a === 'rock') {
        result = "Winner! Paper beats Rock!"
    }
    else if (b === 'scissors' && a === 'rock') {
        result = "Loser! Rock beats Scissors!"
    }
    else if (b === 'scissors' && a === 'paper') {
        result = "Winner! Scissors beats Paper!"
    }
    return result;
}

function game(text) {

    let whoWon = playRound(text);

    if (whoWon.includes("Win")) {
        counterPlayer++;
    }
    else if (whoWon.includes("Lose")) {
        counterComputer++;
    }
    playerScore.textContent =`Your Score: ${counterPlayer}`;
    computerScore.textContent =`Computer Score: ${counterComputer}`;
    gameResultText.textContent = whoWon;
}