const itemElement = document.querySelectorAll(".item")
const resetButton = document.getElementById("reset")
const playerElement = document.getElementById("player")
const computerElement = document.getElementById("computer")
const scoreElement = document.getElementById("score")
const playerScore = document.getElementById("playerscore")
const computerScore = document.getElementById("computerscore")
const drawscore = document.getElementById("drawscore")

// variables for storing score values
let computer_score = 0
let player_score = 0
let draw_score = 0

// variable for storing results
let computer
let player
let results


itemElement.forEach((button) => button.addEventListener('click', () => {
    player = button.textContent
    computerFunctionality()
    resultFunctionality()
}))

// a function that computes random rock, paper,scissors

function computerFunctionality(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    switch (randomNumber) {
        case 1:
            computer = "Rock"
            break;
            case 2:
                computer = "Paper"
                break;
                case 3:
                    computer = "Scissors"
                    break;
    }
}

// implementing a function that determines whether the computer or player has won

function resultFunctionality(){
    if (computer === player) {
        scoreElement.innerHTML = "Draw"
        playerElement.innerHTML = `${player}`
        computerElement.innerHTML = `${computer}`
        draw_score += 1        
    } else if (computer === "Rock") {
        if (player === "Scissors") {
            player_score += 1
            playerElement.innerHTML = `${player}`
            computerElement.innerHTML = `${computer}`
            scoreElement.innerHTML = "You win"
        } else{
            scoreElement.innerHTML = "You lose"
            computer_score += 1
        }
    } else if (computer === "Paper") {
        if (player === "Scissors") {
            player_score += 1
            playerElement.innerHTML = `${player}`
            computerElement.innerHTML = `${computer}`
            scoreElement.innerHTML = "You win"            
        } else{
            scoreElement.innerHTML = "You lose"
            computer_score += 1
        }
    } else if (computer === "Scissors") {
        if (player === "Rock") {
            player_score += 1
            playerElement.innerHTML = `${player}`
            computerElement.innerHTML = `${computer}`
            scoreElement.innerHTML = "You win"
        } else{
            scoreElement.innerHTML = "You lose"
            computer_score += 1
        }
    }
}