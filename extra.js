// function playerChoice() {
//   let input = prompt(`Type rock, paper or scissors`);
//   while (input == null) {
//     input = prompt(`Type rock, paper or scissors`);
//   }
//   input = input.toLowerCase();
//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt("Wrong Selection, Type rock, paper or scissors");
//     while (check == null) {
//       input = prompt("Wrong Selection, Type rock, paper or scissors");
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   return input;
// }

// playerInput.addEventListener('click', (e) => {
//   let myChoice = document.querySelectorAll('.btn')
//     console.log(e.targ)
// })

// function validateInput(choice) {
//     if (choices.includes(choice)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  

// function game() {
//   // play the game
//   // play five rounds
//   // console based
//   for(let i = 0; i < 5;i++) {
//     playRound();
    
//   }
//   logWinner();
// }

// function playRound() {
//   const playersChoice = playerInput(choice);
// }

// function logWinner(){
   
    //     let playerWins = winners.filter((item) => item == `Player Won`  ).length;
    //     let computerWins = winners.filter((item) => item == `Computer Won`).length;
    //     let ties = winners.filter((item) => item == `Its a tie`).length;
    //     console.log(`Bot has won ${computerWins} games`)
    //     console.log(`Player has won ${playerWins} games`)
    //     console.log(`You have tied ${ties} games`)
    // }
    // game();
    // checkWinner()

      //   console.log(computersChoice, playersChoice);
  //   const winner = checkWinner(computersChoice, choice);
  //   winners.push(winner);
  // return winner