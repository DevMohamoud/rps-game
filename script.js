const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors'];
  let getChoice = Math.floor(Math.random() * arr.length);
  return arr[getChoice];   
}

function getHumanChoice() {
  let getChoice = prompt("Play rock, paper or scissors ");
  return getChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You won ${humanChoice} beats ${computerChoice}🔥`);
    humanScore++;
    console.log(`Human score: ${humanScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won ${humanChoice} beats ${computerChoice}🔥`);
     humanScore++;
     console.log(`Human score: ${humanScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You won ${humanChoice} beats ${computerChoice}🔥`);
     humanScore++;
     console.log(`Human score: ${humanScore}`);
  } else {
    console.log(`You lose ${computerChoice} beats ${humanChoice}🤖`);
    computerScore++;
    console.log(`computer score: ${computerScore}`);
  }
}

function playGame() {
  for (let i=0; i<5; i++) {
    playRound();
  }
}




