const gameTiles = [
  { x: 170, y: 370, traps: [] },
  { x: 170, y: 310, traps: [] },
  { x: 140, y: 260, traps: [] },
  { x: 200, y: 260, traps: [] },
  { x: 200, y: 210, traps: [] },
  { x: 250, y: 170, traps: [] },
  { x: 270, y: 120, traps: [] },
  { x: 310, y: 80, traps: [] },
  { x: 310, y: 50, traps: [] },
  { x: 300, y: 120, traps: [] },
  { x: 300, y: 200, traps: [] },
  { x: 260, y: 250, traps: [] },
  { x: 220, y: 300, traps: [] },
  { x: 200, y: 400, traps: [] },
  { x: 180, y: 500, traps: [] },
  { x: 170, y: 450, traps: [] },
  { x: 160, y: 600, traps: [] },
  { x: 160, y: 680, traps: [] },
  { x: 170, y: 750, traps: [] },
  { x: 210, y: 820, traps: [] },
  { x: 270, y: 820, traps: [] },
  { x: 320, y: 820, traps: [] },
  { x: 400, y: 820, traps: [] },
  { x: 310, y: 810, traps: [] },
  { x: 250, y: 810, traps: [] },
  { x: 200, y: 810, traps: [] },
  { x: 160, y: 700, traps: [] },
  { x: 200, y: 650, traps: [] },
  { x: 270, y: 610, traps: [] },
  { x: 320, y: 570, traps: [] }
];

document.addEventListener('DOMContentLoaded', async function(event) {
  const TOKEN = document.getElementById('player-token-one');
  const DICE_BTN = document.getElementById('dice-btn');

  DICE_BTN.addEventListener('click', function(e) {
    if (document.querySelector('.dice__side--active')) {
      document
        .querySelector('.dice__side--active')
        .classList.remove('dice__side--active');
    }
    rollDiceAndMove(TOKEN);
  });
});

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

function animateDice() {
  const DICE_FIGURE = document.getElementById('dice-figure');
  DICE_FIGURE.classList.add('dice__figure--active');
}

function diceNumberToString(num) {
  return ['one', 'two', 'three', 'four', 'five', 'six'][num - 1];
}

function rollDiceAndMove(token) {
  animateDice();
  let moved = 1;
  setTimeout(() => {
    let moves = getRandomDiceResult();
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
  }, 2400);
}
