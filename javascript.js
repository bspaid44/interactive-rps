let tied = 0;
let won = 0;
let lost = 0;

let results = ['This is the result'];

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playGameRock());
paperButton.addEventListener('click', () => playGamePaper());
scissorsButton.addEventListener('click', () => playGameScissors());

const choices = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * choices.length);
    
    return choices[randNum];
};

let playGameRock = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock'

    if (computerChoice == playerChoice) {tied ++; console.log(`The computer threw ${computerChoice}, it is a tie.`)}
    if (computerChoice == 'scissors') { won++; console.log(`The computer threw ${computerChoice}, you won!.`) }
    if (computerChoice == 'paper') { lost++; console.log(`The computer threw ${computerChoice}, you lose.`)}
    
}

let playGamePaper = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper'

    if (computerChoice == playerChoice) {tied ++; console.log(`The computer threw ${computerChoice}, it is a tie.`)}
    if (computerChoice == 'rock') { won++; console.log(`The computer threw ${computerChoice}, you won!.`)}
    if (computerChoice == 'scissors') { lost++; console.log(`The computer threw ${computerChoice}, you lose.`)}
    
}

let playGameScissors = () => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors'

    if (computerChoice == playerChoice) {tied ++; console.log(`The computer threw ${computerChoice}, it is a tie.`)}
    if (computerChoice == 'paper') { won++; console.log(`The computer threw ${computerChoice}, you won!.`)}
    if (computerChoice == 'rock') { lost++; console.log(`The computer threw ${computerChoice}, you lose.`)}
    
}

