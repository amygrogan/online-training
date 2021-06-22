/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'), 
      maxNum = document.querySelector('.max-num'), 
      guessBtn = document.querySelector('#guess-btn'), 
      guessInput = document.querySelector('#guess-input'), 
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    //console.log(1);
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //console.log(guess);

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'green');
    }

    // check if won
    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct! YOU WIN!`);

        // Game Over - Won
        // // disable input
        // guessInput.disabled = true;
        // // change border color
        // guessInput.style.borderColor = 'green';
        // // set message
        // setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
    } else {
        // wrong number
        guessesLeft = guessesLeft -1;
        if(guessesLeft ===  0){
            // Game Over -  Lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

        } else {
            // Game Continues - Answer Wrong
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    let xNum = Math.floor(Math.random()*(max-min+1)+min);
    console.log(xNum);
    return xNum;
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}