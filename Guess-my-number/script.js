'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const displayScore = function (msg) {
  document.querySelector('.score').textContent = msg;
};
//check button.
document.querySelector('.check').addEventListener('click', function () {
  let guess = parseInt(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //   console.log(`yo`);
  //when there's no input.
  if (!guess) {
    displayMessage('👾 YOUR INPUT IS EMPTY!!!');
  }
  //when guess is right.
  else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    displayMessage('🏆 WIN');
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong.
  else if (guess !== secretNum) {
    if (score < 1) {
      displayScore('YOU LOST!!!');
    } else {
      score--;
      displayScore(score);
      displayMessage(guess > secretNum ? '🤦‍♂️ guess is big' : '🤷‍♀️ guess is low');
    }
  }
  //when guess is big.
  // else if (guess > secretNum) {
  //   if (score < 1) {
  //     displayScore('YOU LOST!!!');
  //   } else {
  //     score--;
  //     displayScore(score);
  //     displayMessage('🤦‍♂️ guess is big');
  //   }
  // }
  // //when guess is small.
  // else if (guess < secretNum) {
  //   if (score < 1) {
  //     displayScore('YOU LOST!!!');
  //   } else {
  //     score--;
  //     displayScore(score);
  //     displayMessage('🤷‍♀️ guess is low');
  //   }
  // }
});

//again button.
document.querySelector('.again').addEventListener('click', function () {
  // console.log('k');

  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
