"use strict";

let humanScore = 0;
let computerScore = 0;

function incHumanScore() {
    humanScore++;
    let event = new CustomEvent("scoreUpdated");
    document.dispatchEvent(event);
}

function incComputerScore() {
    computerScore++;
    let event = new CustomEvent("scoreUpdated");
    document.dispatchEvent(event);
}

function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < 0.33) return "rock";
    else if (randNum >= 0.33 && randNum <= 0.66) return "paper";
    else if (randNum > 0.66) return "scissors";
}

function getHumanChoice() {
    while (true) {
        let input = prompt("Please enter the move you want to make: ", "rock");
        if (input.toLowerCase().includes("rock")) return "rock";
        else if (input.toLowerCase().includes("paper")) return "paper";
        else if (input.toLowerCase().includes("scissors")) return "scissors";
        else alert("Please enter a valid move");
    }
}

function displayScore(para) {
    para.textContent = "Human: " + humanScore + " Computer:" + computerScore;
    body.appendChild(para);
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("It's a tie!");
            } else if (computerChoice === "paper") {
                incComputerScore();
                console.log("Paper covers rock. You lose");
            } else if (computerChoice === "scissors") {
                incHumanScore();
                console.log("Rock breaks the scissors. You win!");
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                incHumanScore();
                console.log("Paper covers rock. You win!");
            } else if (computerChoice === "paper") {
                console.log("It's a tie!");
            } else if (computerChoice === "scissors") {
                incComputerScore();
                console.log("Scissors cut throught the paper. You lose");
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                incComputerScore();
                console.log("Rock breaks the scissors. You lose");
            } else if (computerChoice === "paper") {
                incHumanScore();
                console.log("Scissors cut throught the paper. You win!");
            } else if (computerChoice === "scissors") {
                console.log("It's a tie!");
            }
            break;
    }
    return;
}
const body = document.querySelector("body");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

const para = document.createElement("p");
document.addEventListener("scoreUpdated", () => {
    displayScore(para);
});
