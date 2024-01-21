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

let playerScore = 0;
let computerScore = 0;
let score = 0;

function playerRound(playerSelection = "", computerSelection){

    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        score++;
        return 'You win! Rock beats Scissors.';
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        playerScore++;
        score++;
        return 'You win! Paper beats Rock.';
    } 
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        score++;
        return 'You win! Scissors beat Paper.';
    }
    else if(computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors'){
        computerScore++;
        score++;
        return 'You lose! Rock beats Scissors.'
    }
    else if(computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock'){
        computerScore++;
        score++
        return 'You lose! Paper beats Rock.'
    }
    else if(computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper'){
        computerScore++;
        score++;
        return 'You lose! Scissors beat Paper.'
    }
    else if(computerSelection == playerSelection){
        console.log("Tie. Try again!");
        return playAgain();
    }
    else{
        console.log("Unexpected entry. Try again");
        return playAgain();
    }
}

function playAgain(){
    const computerSelection = getComputerChoice();
    let userInput = prompt("Rock, Paper, Scissors");
    return playerRound(userInput, computerSelection);
}

function game(){
    const computerSelection = getComputerChoice();
    let userInput = prompt("Rock, Paper, Scissors");
    console.log(playerRound(userInput, computerSelection));

        if (score == 5 && playerScore >= 3) {
            return console.log("You win!");
        } else if (score == 5 && computerScore >= 3){
            return console.log("You lose!");
        }
    }
        
