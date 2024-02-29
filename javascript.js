// Creates global variables for elements we are updating on screen
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let results = '';

// Creates constant for the buttons defined in HTML ands add an event listener to trigger the function when clicked
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playGameRock());
paperButton.addEventListener('click', () => playGamePaper());
scissorsButton.addEventListener('click', () => playGameScissors());

// Defines choices for the computer to randomly select
const choices = ['rock', 'paper', 'scissors'];

// Randomly selects the computer choice
let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * choices.length);
    
    return choices[randNum];
};

// Updates the display for the score variables when called
let updateScore = () => {
    const playerScorePara = document.getElementById('playerScore');
    const computerScorePara = document.getElementById('computerScore');
    const drawScorePara = document.getElementById('drawScore');

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    drawScorePara.textContent = `Draws: ${drawScore}`;
}

// Updates the display for the results variable when called, will display whatever string passed into the function
let updateResults = (phrase) => {
    const resultsPara = document.getElementById('results');

    resultsPara.textContent = phrase;
}

// Game Logic - Seperated into the three different game button events; Will increment the score variable by one if the case is true, and update the results and score displays for the user
let playGameRock = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock'

    if (computerChoice == playerChoice) {drawScore++; updateResults(`The computer threw ${computerChoice}, it is a tie.`); updateScore();}
    if (computerChoice == 'scissors') { playerScore++; updateResults(`The computer threw ${computerChoice}, you won!`); updateScore(); }
    if (computerChoice == 'paper') { computerScore++; updateResults(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

let playGamePaper = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper'

    if (computerChoice == playerChoice) {drawScore++; updateResults(`The computer threw ${computerChoice}, it is a tie.`); updateScore();}
    if (computerChoice == 'rock') { playerScore++; updateResults(`The computer threw ${computerChoice}, you won!`); updateScore();}
    if (computerChoice == 'scissors') { computerScore++; updateResults(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

let playGameScissors = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors'

    if (computerChoice == playerChoice) {drawScore++; updateResults(`The computer threw ${computerChoice}, it is a tie.`); updateScore();}
    if (computerChoice == 'paper') { playerScore++; updateResults(`The computer threw ${computerChoice}, you won!`); updateScore();}
    if (computerChoice == 'rock') { computerScore++; updateResults(`The computer threw ${computerChoice}, you lose.`); updateScore();}
    
}

// Reset score and results to their respective starting values
let resetScore = () => {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    updateResults('');
    updateScore();
}

