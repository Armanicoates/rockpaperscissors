// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
let computerSelection = computerPlay();

function computerPlay() {
  let arr = ['rock', 'paper', 'scissors'];
  let randomArr = Math.floor(Math.random() *3);
  return arr[randomArr] 
  
}

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  console.log("its a tie");
  } else if 
  
   (computerSelection === 'rock' && playerSelection === 'scissors' ||
   computerSelection === 'scissors' && playerSelection === 'paper' ||
  computerSelection === 'paper' && playerSelection === 'rock') {
  
   console.log(
     'you lose!' + computerSelection + 'beats' + playerSelection + '.'
     );
} else {
  console.log(
    'you win!' + playerSelection + 'beats' + computerSelection + '.'
  );
  // console.log('you win!' + playerSelection+'beats' +computerSelection +
  '.';
  }
}  

  

playGame(playerSelection, computerSelection);