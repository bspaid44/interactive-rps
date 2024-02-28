let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let results = '';

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
    const drawScorePara = document.getElementById('drawScore');

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    drawScorePara.textContent = `Draws: ${drawScore}`;
}

let updateResults = (phrase) => {
    const resultsPara = document.getElementById('results');

    resultsPara.textContent = 'Results: ' + phrase;
}

let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * choices.length);
    
    return choices[randNum];
};

let playGameRock = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock'

    if (computerChoice == playerChoice) {drawScore++; updateResults(`The computer threw ${computerChoice}, it is a tie.`); updateScore();}
    if (computerChoice == 'scissors') { playerScore++; updateResults(`The computer threw ${computerChoice}, you won!.`); updateScore(); }
    if (computerChoice == 'paper') { computerScore++; updateResults(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

let playGamePaper = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper'

    if (computerChoice == playerChoice) {drawScore++; updateResults(`The computer threw ${computerChoice}, it is a tie.`); updateScore();}
    if (computerChoice == 'rock') { playerScore++; updateResults(`The computer threw ${computerChoice}, you won!.`); updateScore();}
    if (computerChoice == 'scissors') { computerScore++; updateResults(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

let playGameScissors = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors'

    if (computerChoice == playerChoice) {drawScore++; updateResults(`The computer threw ${computerChoice}, it is a tie.`); updateScore();}
    if (computerChoice == 'paper') { playerScore++; updateResults(`The computer threw ${computerChoice}, you won!.`); updateScore();}
    if (computerChoice == 'rock') { computerScore++; updateResults(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}



