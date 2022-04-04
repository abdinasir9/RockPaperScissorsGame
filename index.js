const choices = ["rock", "paper", "scissors"];
const winners = [];
let playerWins = 0;
let botWins = 0;
let ties = 0 ;
let myScore = document.querySelector('.myScore');
let botScore = document.querySelector('.botScore');
let endGame = document.querySelector('.endGame')

function playGame(){
  let playerWins = 0;
let botWins = 0;
let ties = 0 

console.log('game over')
}

function playRound(choice){

  const computersChoice = computerChoice();
  console.log(`bot chose ${computersChoice} you chose ${choice} .`)
  console.log(checkWinner(computersChoice,choice))
  botScore.innerHTML = botWins;
  myScore.innerHTML = playerWins; 
  if(botWins >= 3 || playerWins >= 3 ){
    if(botWins >= 3){
      endGame.innerHTML = "Game Over! you Lose!"
      botWins = 0 ;
    playerWins = 0;
    ties = 0
    
    }
    else if(playerWins >= 3){
      endGame.innerHTML = "Game Over! you Won!"
      botWins = 0 ;
      playerWins = 0;
      ties = 0;
    }
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


