// Create a function computerPlay that will randomly choose between Rock Paper and Scissors whenever called.
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const play = document.querySelector('#play-btn');
const win = true;
const lose = true;
const tie = true;

rock.addEventListener('click', () => {
  const computerMove = computerPlay();
  playRound(computerMove, 'ROCK');
});

paper.addEventListener('click', () => {
  const computerMove = computerPlay();
  playRound(computerMove, 'PAPER');
});

scissors.addEventListener('click', () => {
  const computerMove = computerPlay();
  playRound(computerMove, 'SCISSORS');
});

function computerPlay() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  const choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function updateResult(text, move) {
  const result = document.querySelector('#result');
  const computerMove = document.querySelector('#computer-move');

  result.textContent = text;
  computerMove.textContent = `Computer move: ${move}`;
}

// Create a function that plays a single round takes computerSelection and playerSelection as parameters
function playRound(computerSelection, playerSelection) {

  if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
    updateResult(`${playerSelection} beats ${computerSelection}. You win!`, computerSelection);
    return win;
  } else if (computerSelection === 'ROCK' && playerSelection === 'ROCK') {
    updateResult(`Both chose ${playerSelection}. Tie!`, computerSelection);
    return tie;
  } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
    updateResult(`${computerSelection} beats ${playerSelection}. You lose!`, computerSelection);
    return lose;
  } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
    updateResult(`${playerSelection} beats ${computerSelection}. You win!`, computerSelection);
    return win;
  } else if (computerSelection === 'PAPER' && playerSelection === 'PAPER') {
    updateResult(`Both chose ${playerSelection}. Tie!`, computerSelection);
    return tie;
  } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
    updateResult(`${computerSelection} beats ${playerSelection}. You lose!`, computerSelection);
    return lose;
  } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
    updateResult(`${playerSelection} beats ${computerSelection}. You win!`, computerSelection);
    return win;
  } else if (
    computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS') {
    updateResult(`Both chose ${playerSelection}. Tie!`, computerSelection);
    return tie;
  } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
    updateResult(`${computerSelection} beats ${playerSelection}. You lose!`, computerSelection);
    return lose;
  }
}

function winner(compWins, playerWins) {
  let loseMessage = 'You Lose! Too Bad :(';
  let winMessage = 'You Win! To the victor goes the spoils!';
  let tie = "It's a tie!";
  if (compWins < playerWins) {
    console.log(winMessage);
  } else if (compWins < playerWins) {
    console.log(loseMessage);
  } else {
    console.log(tie);
  }
}

function game() {
  let compWins = 0;
  let userWins = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound(computerPlay(), playerSelect());
    if (result === 'USER') {
      userWins += 1;
    } else if (result === 'COMP') {
      compWins += 1;
    } else {
      console.log(result);
    }
  }
  winner(compWins, userWins);
}

// game();
