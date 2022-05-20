function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie game!';
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'Player won! rock beats scissors';
    } else {
      return 'Computer won! paper beats rock';
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'Player won! paper beats rock';
    } else {
      return 'Computer won! scissors beats rock';
    }
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return 'Player won! scissors beats paper';
    } else {
      return 'Computer won! rock beats scissors';
    }
  }

  if (playerSelection !== 'rock' || 'paper' || 'scissors' || null) {
    return 'Invalid input';
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Enter rock paper scissors', '');
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let rounds = playRound(playerSelection, computerSelection);

    function result() {
      
    }
  }
}