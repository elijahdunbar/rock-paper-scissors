// Create a function computerPlay that will randomly choose between Rock Paper and Scissors whenever called.
function computerPlay() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let choiceIndex = Math.floor((Math.random()*3));
    return choices[choiceIndex];
}

// Create a function that plays a single round takes computerSelection and playerSelection as parameters
function playRound(computerSelection = computerPlay(), playerSelection = prompt('Please choose between: ROCK, PAPER, SCISSORS').toUpperCase()) {
    // Call computerPlay() and save it to computerSelection
    // Ask user for selection
    // Determin the winner
    if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        return 'PAPER beats ROCK. You win!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'ROCK') {
        return 'Both chose ROCK. It\'s a tie!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        return 'ROCK beats SCISSORS. You lose!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        return 'SCISSORS beats PAPER. You win!!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'PAPER') {
        return 'Both chose PAPER. It\'s a tie!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        return 'PAPER beats ROCK. You lose!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        return 'ROCK beats SCISSORS. You win!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS') {
        return 'Both chose SCISSORS. It\'s a tie!';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        return 'SCISSORS beats PAPER. You lose!';
    }
}
