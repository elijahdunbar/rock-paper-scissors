// Create a function computerPlay that will randomly choose between Rock Paper and Scissors whenever called.
function computerPlay() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const choiceIndex = Math.floor((Math.random() * 3) + 1);
    return choices[choiceIndex];
}

function playerSelect() {
    return prompt('Choose ROCK, PAPER, or SCISSORS; ').toUpperCase();
}

// Create a function that plays a single round takes computerSelection and playerSelection as parameters
function playRound(computerSelection, playerSelection) {
    // Call computerPlay() and save it to computerSelection
    // Ask user for selection
    // Determin the winner
    if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        console.log('PAPER beats ROCK. You win!');
        return 'USER';
    } else if (computerSelection === 'ROCK' && playerSelection === 'ROCK') {
        return 'Both chose ROCK. It\'s a tie!';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        console.log('ROCK beats SCISSORS. You lose!');
        return 'COMP';
    } else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        console.log('SCISSORS beats PAPER. You win!!');
        return 'USER';
    } else if (computerSelection === 'PAPER' && playerSelection === 'PAPER') {
        return 'Both chose PAPER. It\'s a tie!';
    } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        console.log('PAPER beats ROCK. You lose!');
        return 'COMP';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        console.log('ROCK beats SCISSORS. You win!');
        return 'USER';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'SCISSORS') {
        return 'Both chose SCISSORS';
    } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        console.log('SCISSORS beats PAPER. You lose!');
        return 'COMP';
    }
}

function winner(compWins, playerWins) {
    let loseMessage = 'You Lose! Too Bad :(';
    let winMessage = 'You Win! To the victor goes the spoils!';
    let tie = 'It\'s a tie!';
    if(compWins < playerWins) {
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

    for(let i = 0; i < 5; i++) {
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

    // if (compWins === userWins) {
    //     tieBreaker(computerPlay(), playerSelect);
    // } else {
    //     winner(compWins, userWins)
    // }
}

game();