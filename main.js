// The user can enter rock, paper, or scissors. An invalid value returns an error message.
function getUserChoice(userInput) {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return (userInput);

    } else {
        return ('ERROR: Please input rock, paper, or scissors.');
    }
};

// The computer's choice is random.
function getComputerChoice() {

    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return ('rock');

    } else if (randomNumber === 1) {
        return ('paper');

    } else if (randomNumber === 2) {
        return ('scissors');
    }
}

// This function takes the inputs of the user and the computer and writes the winner to the console.
function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        console.log('You tied!');
    }

    else if (userChoice === 'rock') {

        if (computerChoice === 'paper')
            console.log('The computer wins!');

        else {
            console.log('You win!');
        }


    } else if (userChoice === 'paper') {

        if (computerChoice === 'scissors')
            console.log('The computer wins!');

        else {
            console.log('You win!');
        }

    } else if (userChoice === 'scissors') {

        if (computerChoice === 'rock')
            console.log('The computer wins!')

        else {
            console.log('You win!');
        }

    } else { // I added this else statement in case the user input is invalid.
        console.log('Try again using valid input.');
    }

}

// Now we can play the game!

function playGame() {

    var userChoice = getUserChoice('RocK'); // Enter rock, paper or scissors here, as desired.
    console.log(`You played: ${userChoice}`);

    var computerChoice = getComputerChoice();
    console.log(`Computer played: ${computerChoice}`);

    determineWinner(userChoice, computerChoice);
}

playGame();

