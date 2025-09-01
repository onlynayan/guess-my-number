'use strict';

// declaration
let score = 20;
let highScore = 0;
let maxRange = 10;
let secretNumber = Math.trunc(Math.random() * maxRange) + 1;

// difficulty level
document.querySelector('.difficulty').addEventListener('change', function () {
  const level = this.value;
  if (level === 'medium') maxRange = 20;
  else if (level === 'hard') maxRange = 100;
  else maxRange = 10;
  secretNumber = Math.trunc(Math.random() * maxRange) + 1;
  document.querySelector('.between').textContent = 'Choose Wisely!';
  document.querySelector('.again').click();
});

// display function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// check input number with secret number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🍾 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💀 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * maxRange + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
