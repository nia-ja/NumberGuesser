/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
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

// Listen for guesses
guessBtn.addEventListener("click", function() {
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess > max || guess < min) {
        setMessage(`Please provide a number between ${min} and ${max}`, "red");
    } else {
        setMessage("");
    }

    // Check if won
    if (guess === winningNum) {
        // Game Over - WON
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = "green";
        // Set message
        setMessage(`${winningNum} is correct. You win!`, "green");
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // Game Over - LOST
            // Disable input
            guessInput.disabled = true;
            // Change border color
            guessInput.style.borderColor = "red";
            // Set message
            setMessage(`${guess} is not correct. You lost! The correct number was ${winningNum }`, "red");
        } else {
            // Game Continues - answer is wrong
            // setMessage
            setMessage(`${guess} is not correct. ${guessesLeft} guess(es) left.`, "red");
            // Change border color
            guessInput.style.borderColor = "red";
            // clean input
            guessInput.value = "";
        }
    }
});

// Game over
function gameOver(won, msg) {
    //  Disabled input
    guessInput.disabled = true;
    let color;
    won === true ? color = "green" : color = "red";
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);
}

// Set message
function setMessage(msg, color = "black") {
    message.style.color = color;
    message.textContent = msg;

}