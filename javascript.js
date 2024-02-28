let playerScore = 0;
let computerScore = 0;

let results = ['This is the result'];

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playGameRock());
paperButton.addEventListener('click', () => playGamePaper());
scissorsButton.addEventListener('click', () => playGameScissors());

const choices = ['rock', 'paper', 'scissors'];

let updateScore = () => {
    const playerScorePara = document.getElementById('playerScore');
    const computerScorePara = document.getElementById('computerScore');

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * choices.length);
    
    return choices[randNum];
};

let playGameRock = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock'

    if (computerChoice == playerChoice) {console.log(`The computer threw ${computerChoice}, it is a tie.`)}
    if (computerChoice == 'scissors') { playerScore++; console.log(`The computer threw ${computerChoice}, you playerScore!.`); updateScore(); }
    if (computerChoice == 'paper') { computerScore++; console.log(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

let playGamePaper = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper'

    if (computerChoice == playerChoice) {console.log(`The computer threw ${computerChoice}, it is a tie.`)}
    if (computerChoice == 'rock') { playerScore++; console.log(`The computer threw ${computerChoice}, you playerScore!.`); updateScore();}
    if (computerChoice == 'scissors') { computerScore++; console.log(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

let playGameScissors = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors'

    if (computerChoice == playerChoice) {console.log(`The computer threw ${computerChoice}, it is a tie.`)}
    if (computerChoice == 'paper') { playerScore++; console.log(`The computer threw ${computerChoice}, you playerScore!.`); updateScore();}
    if (computerChoice == 'rock') { computerScore++; console.log(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}



