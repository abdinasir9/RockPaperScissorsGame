const choices = ["rock", "paper", "scissors"];
const winners = [];
let playerWins = 0;
let botWins = 0;
let ties = 0 ;
let myScore = document.querySelector('.myScore');
let botScore = document.querySelector('.botScore');

function playGame(){
  let playerWins = 0;
let botWins = 0;
let ties = 0 

console.log('game over')
}

function playRound(choice){

  const computersChoice = computerChoice();
  console.log(`bot chose ${computersChoice} you chose ${choice} .`)
  botScore.innerHTML = botWins;
  myScore.innerHTML = playerWins;
  console.log(checkWinner(computersChoice,choice))
  if(botWins >= 3 || playerWins >= 3 ){
    console.log(`gameOver`)
    alert('Game over Start a new game')
    botWins = 0 ;
    playerWins = 0;
  }
   
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}


function checkWinner(botsChoice, yourChoice) {
  if (botsChoice == yourChoice) {
    ++ties
    return (`Its a tie ${ties}`);
  } else if (
    (botsChoice == "rock" && yourChoice == "scissors") ||
    (botsChoice == "paper" && yourChoice == "rock") ||
    (botsChoice == "scissors" && yourChoice == "paper")
  ) {
    ++botWins
    return (`Bot Won ${botWins}`);
   
  } 
    ++playerWins
    return (`Player Won ${playerWins}`);
  
}


