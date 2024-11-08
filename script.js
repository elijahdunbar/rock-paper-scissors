const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const play = document.querySelector('#play-btn');
const computerScoreboard = document.querySelector('#computer-score');
const playerScoreboard = document.querySelector('#player-score');
let gameOn = false;

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

play.addEventListener('click', toggleGameState);

function computerPlay() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  const choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function updateResult(text, move) {
  const result = document.querySelector('#result');
  const computerMove = document.querySelector('#computer-move');

  result.textContent = text;
  if (move === 'game over') {
    computerMove.textContent = "Game Over."
  } else {
    computerMove.textContent = `Computer move: ${move}`;
  }
  
}

// Create a function that plays a single round takes computerSelection and playerSelection as parameters
function playRound(comp, player) {
  if (gameOn) {
    const result = roundWinner(comp, player);
    
    if (result === 'comp') {
      const winnerScore = updateScore('computer');
      if (!isWinner(winnerScore)) {
        updateResult(`${comp} beats ${player}. You lose!`, comp);
      } else {
        updateResult(`${comp} beats ${player}. You lose!`, 'game over');
        toggleGameState();
      }
      
    } else if (result === 'player') {
      const winnerScore = updateScore('player');
      if (!isWinner(winnerScore)) {
        updateResult(`${player} beats ${comp}. You win!`, comp)
      } else {
        updateResult(`${player} beats ${comp}. You win!`, 'game over');
        toggleGameState();
      }
    } else {
      updateResult(`Both chose ${player}. Tie!`, comp);
    }
  } else {
    alert("Press Play")
  }
}

function roundWinner(comp, player) {
  if (comp === 'ROCK' && player === 'PAPER') {
    return 'player';
  } else if (comp === 'ROCK' && player === 'SCISSORS') {
    return 'comp';
  } else if (comp === 'PAPER' && player === 'SCISSORS') {
    return 'player';
  } else if (comp === 'PAPER' && player === 'ROCK') {
    return 'comp';
  } else if (comp === 'SCISSORS' && player === 'ROCK') {
    return 'player';
  } else if (comp === 'SCISSORS' && player === 'PAPER') {
    return 'comp';
  }
}

function updateScore(scoreboard) {
  if (scoreboard === 'player') {
    playerScoreboard.textContent = Number(playerScoreboard.textContent) + 1;
    return Number(playerScoreboard.textContent);
  } else if (scoreboard === 'computer') {
    computerScoreboard.textContent = Number(computerScoreboard.textContent) + 1;
    return Number(computerScoreboard.textContent);
  } 

}

function isWinner(score) {
  if (score === 5) {
    return true;
  } else {
    return false;
  }
}

function toggleGameState() {
  if (gameOn) {
    play.classList.remove('hidden');
    gameOn = false;
  } else {
    play.classList.add('hidden');
    resetScores();
    gameOn = true;
  }
}

function resetScores() {
  playerScoreboard.textContent = 0;
  computerScoreboard.textContent = 0;
}
