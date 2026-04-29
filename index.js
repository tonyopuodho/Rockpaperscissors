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
                    break
    }

    console.log(computer)
}
