const paperButton = document.querySelector('#button-paper');
const rockButton = document.querySelector('#button-rock');
const scissorsButton = document.querySelector('#button-scissors');
const buttons = document.querySelectorAll('.buttonContainer > button');

paperButton.addEventListener('click', function(e){
    console.log(e);
});

function computerPlay(){
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}

function playerSelection(){
    if(EventTarget)
}

function playRound(){
    let a = computerPlay()
    let b = playerSelection()
    let result = ""

    if (a === b) {
        result = "Draw! Both chose " + a + "!"
    }
    else if (b === ROCK && a === PAPER){
        result = "Loser! Paper beats Rock!"
    }
    else if (b === ROCK && a === SCISSORS){
        result = "Winner! Rock beats Scissors!"
    }
    else if (b === PAPER && a === SCISSORS){
        result = "Loser! Scissors beats Paper!"
    }
    else if (b === PAPER && a === ROCK){
        result = "Winner! Paper beats Rock!"
    }
    else if (b === SCISSORS && a === ROCK){
        result = "Loser! Rock beats Scissors!"
    }
    else if (b === SCISSORS && a === PAPER){
        result = "Winner! Scissors beats Paper!"
    }

    return result
}

function game(){
    let counterPlayer = 0
    let counterComputer = 0
    let whoWon = ""
    
    for (let i = 0; i < 5; i++){
        whoWon = playRound()
        console.log(whoWon)
        if (whoWon.includes("Win")){
            counterPlayer++
        }
        else if(whoWon.includes("Lose")){
            counterComputer++
        }
    }

    if (counterPlayer > counterComputer){
        console.log("You Win the game!")
    }
    else if (counterComputer > counterPlayer){
        console.log("You lose the game!")
    }
    else{
        console.log("It was a draw!")
    }
}