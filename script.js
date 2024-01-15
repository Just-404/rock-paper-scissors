function getComputerChoice(){
    let choice  = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        return 'rock';
    }
    else if (choice == 1){
        return 'paper';
    } 
    else {
        return 'scissors';
    }
}

function playerRound(playerSelection = "", computerSelection){


    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        return 'You win! Rock beats Scissors.';
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return 'You win! Paper beats Rock.';
    } 
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        return 'You win! Scissors beat Paper.';
    }
    else if(computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors'){
        return 'You lose! Rock beats Scissors.'
    }
    else if(computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock'){
        return 'You lose! Paper beats Rock.'
    }
    else if(computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper'){
        return 'You lose! Scissors beat Paper.'
    }
    else if(computerSelection == playerSelection){
        console.log("Tie. Try again!");
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper, Scissors")
        return playerRound(playerSelection, computerSelection);
    }
}

const computerSelection = getComputerChoice();

let userInput = prompt("Rock, Paper, Scissors");
console.log(playerRound(userInput, computerSelection));

