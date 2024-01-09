'use strict';

// Selecting Elements
/*let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let diceEl = document.querySelector('.dice');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');


// Selecting Conditions
let currentScore, activePlayer, scores, playing;

const init = function() {
  diceEl.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


// Rolling Dice Functionality
btnRoll.addEventListener('click',function(){
  if(playing){
  // Generating a random dice roll
  const dice = Math.floor(Math.random() * 6)+1;
  // console.log(dice);


  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;


  //Check for roll 1
  if(dice !== 1){
  // add dice to currentScore
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  // current0El.textContent = currentScore;

  }
  // switch to the next player
  else{
    switchPlayer();
  }
}
})

btnHold.addEventListener('click', function(){
  if(playing) {
  // Add currentscore to active player's score
  scores[activePlayer] += currentScore;
  console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  //check if player's score >=100
  if(scores[activePlayer] >= 10) {
    // finish the game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  else{
    //switch to another player
    switchPlayer();
  }

}
})

btnNew.addEventListener('click',init) */

//...below trying by myself..

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');

let newBtn = document.querySelector('.btn--new');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');



let currentScore, activePlayer, scores;

const init = function() {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
}
init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0 ;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}


rollBtn.addEventListener('click', function(){
  let randomDice = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${randomDice}.png`;
  dice.classList.remove('hidden');

  if(randomDice !== 1){
    currentScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
  else {
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function(){

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if(scores[activePlayer] >= 10){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    rollBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
    dice.classList.add('hidden');
  }
  else{
    switchPlayer();
  }
});

newBtn.addEventListener('click', function(){
  
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  rollBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  
  init();
})
