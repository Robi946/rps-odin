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

function displayResult(node, string) {
    node.textContent = string;
    body.appendChild(node);
}

function dispatchResultEvent(resultString) {
    let event = new CustomEvent("resultShown", {
        detail: { result: resultString },
    });
    document.dispatchEvent(event);
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                dispatchResultEvent("It's a tie!");
            } else if (computerChoice === "paper") {
                incComputerScore();
                dispatchResultEvent("Paper covers rock. You lose");
            } else if (computerChoice === "scissors") {
                incHumanScore();
                dispatchResultEvent("Rock breaks the scissors. You win!");
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                incHumanScore();
                dispatchResultEvent("Paper covers rock. You win!");
            } else if (computerChoice === "paper") {
                dispatchResultEvent("It's a tie!");
            } else if (computerChoice === "scissors") {
                incComputerScore();
                dispatchResultEvent(
                    "Scissors cut throught the paper. You lose"
                );
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                incComputerScore();
                dispatchResultEvent("Rock breaks the scissors. You lose");
            } else if (computerChoice === "paper") {
                incHumanScore();
                dispatchResultEvent(
                    "Scissors cut throught the paper. You win!"
                );
            } else if (computerChoice === "scissors") {
                dispatchResultEvent("It's a tie!");
            }
            break;
    }
    return;
}

function createButtons() {
    const rockButton = document.createElement("button");
    rockButton.textContent = "Play Rock";
    const paperButton = document.createElement("button");
    paperButton.textContent = "Play Paper";
    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Play Scissors";

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
}

function createParagpaphs() {
    const singleResult = document.createElement("p");
    document.addEventListener("resultShown", (event) => {
        displayResult(singleResult, event.detail.result);
    });

    const para = document.createElement("p");
    document.addEventListener("scoreUpdated", () => {
        displayScore(para);
    });
}

const body = document.querySelector("body");

createButtons();
createParagpaphs();
