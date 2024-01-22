//selectors

const userInput = document.querySelectorAll('div input');
const hiddenDiv = document.querySelector('.hidden');
const playBtn = document.querySelector('.play');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const container = document.querySelector('.content');
let output = document.querySelector('.output');

let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let score = 0;

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

playBtn.addEventListener('click', start);

function start(){
    playBtn.classList.toggle('hidden');
    hiddenDiv.classList.toggle('hidden');
    output.textContent = "Choose: ";
}

function restart(){

    playBtn.classList.toggle('hidden');
    playBtn.textContent = "Restart?";
    playBtn.setAttribute('style', 'width: 100px;');

    playBtn.addEventListener('click', () => {
        score = 0;
        computerScore = 0;
        playerScore = 0;     
        playerScoreDiv.textContent = `PlayerScore: ${playerScore}`;
        computerScoreDiv.textContent = `ComputerScore: ${computerScore}`;
        
    });
}

function restartPostGame(){
    hiddenDiv.classList.toggle('hidden');
    container.setAttribute('style', 'width: 968px');
}
userInput.forEach(option => {
    option.addEventListener('click', (e)=>{
        let playerInput;
             
        if (e.target.id === 'rock'){
            playerInput = 'rock';
        }

        else if (e.target.id === 'paper'){
            playerInput = 'paper';
        }

        else{
            playerInput = 'scissors';
        }

        computerSelection = getComputerChoice();
        output.textContent = playerRound(playerInput, computerSelection);
        game();
        
    
    }); 
});   

function increasePlayerScore(){ 
    playerScore++;
    score++;
    playerScoreDiv.textContent = `PlayerScore: ${playerScore}`;
    
}

function increaseComputerScore(){ 
    computerScore++;
    score++;
    computerScoreDiv.textContent = `ComputerScore: ${computerScore}`;
    
}

function playerRound(playerSelection, computerSelection){
    
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        increasePlayerScore();
        return 'You win! Rock beats Scissors.';
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        increasePlayerScore();
        return 'You win! Paper beats Rock.';
    } 
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        increasePlayerScore();
        return 'You win! Scissors beat Paper.';
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissors'){
        increaseComputerScore();
        return 'You lose! Rock beats Scissors.'
    }
    else if(computerSelection == 'paper' && playerSelection == 'rock'){
        increaseComputerScore();
        return 'You lose! Paper beats Rock.'
    }
    else if(computerSelection == 'scissors' && playerSelection == 'paper'){
        increaseComputerScore();
        return 'You lose! Scissors beat Paper.'
    }
    else if(computerSelection == playerSelection){
        
        return "Tie. Try again!";
    }
    else{
        return("Unexpected entry. Try again");
    }
}

function game(){
    if (score == 5 && playerScore >= 3) {
        output.textContent = "You win!";
        
        restartPostGame();
        setTimeout(restart, 2000);

    } else if (score == 5 && computerScore >= 3){
        output.textContent = "You lose!";
        
        restartPostGame();
        setTimeout(restart, 2000);
    }
}
