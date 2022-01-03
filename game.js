const paperButton = document.querySelector('#button-paper');
const rockButton = document.querySelector('#button-rock');
const scissorsButton = document.querySelector('#button-scissors');

const gameResultText = document.querySelector('#whoWon');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const mainGame = document.getElementById("main-game");

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

    if(counterPlayer == 5){
        document.querySelector('body').style.backgroundColor = 'green';
        document.getElementById('main-game').style.display = 'none';
        restartScreen('win');
        counterComputer = 0;
        counterPlayer = 0;
        playerScore.textContent =`Your Score: ${counterPlayer}`;
        computerScore.textContent =`Computer Score: ${counterComputer}`;
    
    } else if(counterComputer == 5){
        document.querySelector('body').style.backgroundColor = 'red';
        document.getElementById('main-game').style.display = 'none';
        restartScreen('lose');
        counterComputer = 0;
        counterPlayer = 0;
        playerScore.textContent =`Your Score: ${counterPlayer}`;
        computerScore.textContent =`Computer Score: ${counterComputer}`;
    }
}

function restartScreen(winOrLose){
    const restartWrapper = document.createElement('div');
    restartWrapper.setAttribute('id', 'restartWrapper');
    const titleText = document.createElement('h1');
    const restartButton = document.createElement('button');
    document.querySelector('body').appendChild(restartWrapper);
    restartWrapper.appendChild(titleText);
    restartWrapper.appendChild(restartButton);

    restartWrapper.style.cssText = 'display: flex;justify-content: center;' +
    'align-items:center; gap: 5rem; height: 100vh; flex-direction: column'

    if(winOrLose =='win') {
        titleText.textContent = 'You Win! You lucky dawg';
    } else if(winOrLose =='lose') {
        titleText.textContent = 'You Lost! Unlucky mate';
    }
    titleText.style.cssText = 'font-size: 5rem; font-weight:900;text-align:center;'
    restartButton.textContent = 'Play Again'
    restartButton.style.cssText = 'font-size: 3.25rem; border-radius: 0.5rem;'
    restartButton.addEventListener('click', function(){
        document.getElementById('main-game').style.display = 'flex';
        let temp = document.getElementById('restartWrapper');
        while (temp.firstChild){
            temp.removeChild(temp.lastChild);
        }
        temp.remove();
        document.querySelector('body').style.backgroundColor = '#5aa8ad';
    })
}

