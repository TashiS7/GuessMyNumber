'use strict';
const secretNum = function(random) {
    random = Math.trunc(Math.random() * 15 + 1);
    return random;
};
console.log(secretNum());
//let secretNum = Math.trunc(Math.random() * 15 + 1);
let score = 15;
let HighScore = 0;

const displayText = function(text) {
    document.querySelector('.text').textContent = text;
};
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
};

//EventListener
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //When there is no input.
    if (!guess) {
        document.querySelector('.text').textContent = '🚫 No number!';

        // When player wins.
    } else if (guess === secretNum()) {
        displayText('👏🏻 Correct Number!');
        displayNumber(secretNum());

        //Background color changes, when the player wins
        document.querySelector('body').style.backgroundColor = '#00ffff';
        //The width increase, when the player wins
        document.querySelector('.number').style.width = '20rem';

        if (score > HighScore) {
            HighScore = score;
            document.querySelector('.highScore').textContent = HighScore;
        }
        //When guess is wrong
    } else if (guess !== secretNum()) {
        if (score > 1) {
            document.querySelector('.text').textContent =
                guess > secretNum() ? 'Too high! 📈' : 'Too low! 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayText('😞 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Play Again. Reset everything back to initial values.
document.querySelector('.again').addEventListener('click', function() {
    score = 15; //Initial value of the score
    secretNum();

    displayText('Start guessing...');
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'rgb(133, 141, 141)';
    document.querySelector('.number').style.width = '10rem';
});