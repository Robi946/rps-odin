"use strict";

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
