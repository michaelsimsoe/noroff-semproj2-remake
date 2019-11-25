import { Trap } from './game/trap.js';
const gameTiles = [
  {
    x: 170,
    y: 370,
    trap: new Trap('Jack', { text: 'Buhu', type: 'stay', amount: '2' })
  },
  { x: 170, y: 310, trap: '' },
  { x: 140, y: 260, trap: '' },
  { x: 200, y: 260, trap: '' },
  { x: 200, y: 210, trap: '' },
  { x: 250, y: 170, trap: '' },
  { x: 270, y: 120, trap: '' },
  { x: 310, y: 80, trap: '' },
  { x: 310, y: 50, trap: '' },
  { x: 300, y: 120, trap: '' },
  { x: 300, y: 200, trap: '' },
  { x: 260, y: 250, trap: '' },
  { x: 220, y: 300, trap: '' },
  { x: 200, y: 400, trap: '' },
  { x: 180, y: 500, trap: '' },
  { x: 170, y: 450, trap: '' },
  { x: 160, y: 600, trap: '' },
  { x: 160, y: 680, trap: '' },
  { x: 170, y: 750, trap: '' },
  { x: 210, y: 820, trap: '' },
  { x: 270, y: 820, trap: '' },
  { x: 320, y: 820, trap: '' },
  { x: 400, y: 820, trap: '' },
  { x: 310, y: 810, trap: '' },
  { x: 250, y: 810, trap: '' },
  { x: 200, y: 810, trap: '' },
  { x: 160, y: 700, trap: '' },
  { x: 200, y: 650, trap: '' },
  { x: 270, y: 610, trap: '' },
  { x: 320, y: 570, trap: '' }
];
let moved = 1;
const DICE_BTN = document.getElementById('dice-btn');
const TOKEN = document.getElementById('player-token-one');

document.addEventListener('DOMContentLoaded', async function(event) {
  DICE_BTN.addEventListener('click', function(e) {
    DICE_BTN.disabled = true;
    checkActiveDiceSideAndRemove();
    rollDiceAndMove(TOKEN);
  });
});

function checkActiveDiceSideAndRemove() {
  if (document.querySelector('.dice__side--active')) {
    document
      .querySelector('.dice__side--active')
      .classList.remove('dice__side--active');
  }
}

function moveToken(token, pos) {
  if (!pos) return; // Return if there are no more moves left in gameTiles
  token.setAttribute('x', pos.x);
  token.setAttribute('y', pos.y);
  return;
}

function getRandomDiceResult() {
  let randomNumberBetweenOneAndSix = Math.floor(Math.random() * 6) + 1;
  return randomNumberBetweenOneAndSix;
}

function addAnimationClass() {
  const DICE_FIGURE = document.getElementById('dice-figure');
  DICE_FIGURE.classList.add('dice__figure--active');
}

function removeAnimationClass() {
  const DICE_FIGURE = document.getElementById('dice-figure');
  DICE_FIGURE.classList.remove('dice__figure--active');
}

function diceNumberToString(num) {
  return ['one', 'two', 'three', 'four', 'five', 'six'][num - 1];
}

function checkForSix(moves) {
  if (moves === 6) {
    console.log('SIX! THROW AGAIN');
  }
}

function checkForTraps(pos) {
  if (pos && pos.trap != '') {
    pos.trap.announceTrap();
    pos.trap.releaseTrap();
  }
}

function enableDiceBtn() {
  DICE_BTN.disabled = false;
}

function endGame() {
  if (moved >= 30) {
    alert('Winner winner chicken dinner');
  }
}

function rollDiceAndMove(token) {
  if (moved >= 30) return;
  addAnimationClass();

  setTimeout(() => {
    let moves = getRandomDiceResult();
    if (moves + moved >= 30) {
      moves = moves - (moves + moved - 30);
    }
    document
      .querySelector(`.dice__side-${diceNumberToString(moves)}`)
      .classList.add('dice__side--active');

    for (let i = 0; i < moves; i++) {
      (function(i, moveCount) {
        moved++;
        setTimeout(() => {
          moveToken(token, gameTiles[moveCount]);
        }, 801 * i);
      })(i, moved);
    }
    setTimeout(() => {
      endGame();
      enableDiceBtn();
    }, 800 * moves);
    checkForSix(moves);
    checkForTraps(gameTiles[moved]);
    removeAnimationClass();
  }, 2400);
}
