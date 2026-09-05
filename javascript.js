function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < 0.33) return "rock";
    else if (randNum >= 0.33 && randNum <= 0.66) return "paper";
    else if (randNum > 0.66) return "scissors";
}

function getHumanChoice() {
    let input = prompt("Please enter the move you want to make: ", "rock");
    return input;
}
