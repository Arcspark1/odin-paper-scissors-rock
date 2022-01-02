const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

function computerPlay(){
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*choice.length)]
}

function playerSelection(){
    let choice = prompt("Please enter either: rock, paper or scissors")
    choice = choice.toLowerCase()
    return choice
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