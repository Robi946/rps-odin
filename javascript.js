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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("It's a tie!");
            } else if (computerChoice === "paper") {
                ++computerScore;
                console.log("Paper covers rock. You lose");
            } else if (computerChoice === "scissors") {
                ++humanScore;
                console.log("Rock breaks the scissors. You win!");
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                ++humanScore;
                console.log("Paper covers rock. You win!");
            } else if (computerChoice === "paper") {
                console.log("It's a tie!");
            } else if (computerChoice === "scissors") {
                ++computerScore;
                console.log("Scissors cut throught the paper. You lose");
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                ++computerScore;
                console.log("Rock breaks the scissors. You lose");
            } else if (computerChoice === "paper") {
                ++humanScore;
                console.log("Scissors cut throught the paper. You win!");
            } else if (computerChoice === "scissors") {
                console.log("It's a tie!");
            }
            break;
    }
    return;
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.addEventListener("click", playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", playRound("paper", getComputerChoice()));
scissorsButton.addEventListener(
    "click",
    playRound("scissors", getComputerChoice())
);

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         switch (humanChoice) {
//             case "rock":
//                 if (computerChoice === "rock") {
//                     console.log("It's a tie!");
//                 } else if (computerChoice === "paper") {
//                     ++computerScore;
//                     console.log("Paper covers rock. You lose");
//                 } else if (computerChoice === "scissors") {
//                     ++humanScore;
//                     console.log("Rock breaks the scissors. You win!");
//                 }
//                 break;
//             case "paper":
//                 if (computerChoice === "rock") {
//                     ++humanScore;
//                     console.log("Paper covers rock. You win!");
//                 } else if (computerChoice === "paper") {
//                     console.log("It's a tie!");
//                 } else if (computerChoice === "scissors") {
//                     ++computerScore;
//                     console.log("Scissors cut throught the paper. You lose");
//                 }
//                 break;
//             case "scissors":
//                 if (computerChoice === "rock") {
//                     ++computerScore;
//                     console.log("Rock breaks the scissors. You lose");
//                 } else if (computerChoice === "paper") {
//                     ++humanScore;
//                     console.log("Scissors cut throught the paper. You win!");
//                 } else if (computerChoice === "scissors") {
//                     console.log("It's a tie!");
//                 }
//                 break;
//         }
//         return;
//     }

//     for (let i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     if ((humanScore = computerScore)) console.log("It's a tie overall!");
//     else if (humanScore > computerScore) console.log("You win overall!!!!!");
//     else if (humanScore < computerScore) console.log("You lose overall");
//     return;
// }
