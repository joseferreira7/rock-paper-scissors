let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2: 
            return "scissors"
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        
        playerScore++;
        computerScore++;
        return "It's a TIE";

    } 
    
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        
        playerScore++;
        return `You WIN, ${playerSelection} beats ${computerSelection}`;
    
    } 
    
    else {
        
        computerScore++;
        return `You LOSE, ${computerSelection} beats ${playerSelection}`;
    
    }
}

function game() {

    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt(`Round ${i}: What is your move?`);
        playerSelection = playerSelection.toLowerCase();

        while(!(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')) {
            playerSelection = prompt("Not a valid move, try again.");
        }
        
        computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));
        
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations, you won the game!");        
    } else if (playerScore == computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Too bad, you lost the game!");
    }

}