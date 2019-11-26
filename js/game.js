import { Trap } from './game/trap.js';
const gameTiles = [
  {
    x: 170,
    y: 370,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  {
    x: 170,
    y: 310,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  {
    x: 140,
    y: 260,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  {
    x: 200,
    y: 260,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 200, y: 210, trap: '' },
  {
    x: 250,
    y: 170,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 270, y: 120, trap: '' },
  { x: 310, y: 80, trap: '' },
  { x: 310, y: 50, trap: '' },
  { x: 300, y: 120, trap: '' },
  { x: 300, y: 200, trap: '' },
  {
    x: 260,
    y: 250,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 220, y: 300, trap: '' },
  { x: 200, y: 400, trap: '' },
  { x: 180, y: 500, trap: '' },
  {
    x: 170,
    y: 450,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 160, y: 600, trap: '' },
  { x: 160, y: 680, trap: '' },
  {
    x: 170,
    y: 750,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 210, y: 820, trap: '' },
  { x: 270, y: 820, trap: '' },
  { x: 320, y: 820, trap: '' },
  { x: 400, y: 820, trap: '' },
  {
    x: 310,
    y: 810,
    trap: new Trap('TRAP', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 250, y: 810, trap: '' },
  { x: 200, y: 810, trap: '' },
  { x: 160, y: 700, trap: '' },
  { x: 200, y: 650, trap: '' },
  {
    x: 270,
    y: 610,
    trap: new Trap('Sandor "The Hound" Clegane', {
      text:
        "is charging you. He's massive and angry, and you need to retire back to safety. Back 4 tiles!",
      type: 'return',
      amount: '4'
    })
  },
  { x: 320, y: 570, trap: '' }
];
let moved = 1;
const DICE_BTN = document.getElementById('dice-btn');
const TOKEN = document.getElementById('player-token-one');
const STORY_BOARD = document.getElementById('story-board-list');
const PLAYER_ONE = getPlayerObject('player-one');
const PLAYER_TWO = getPlayerObject('player-two');

document.addEventListener('DOMContentLoaded', async function(event) {
  DICE_BTN.addEventListener('click', function(e) {
    DICE_BTN.disabled = true;
    checkActiveDiceSideAndRemove();
    rollDiceAndMove(TOKEN);
  });
});

function getPlayerObject(player) {
  let fetchedPlayer = localStorage.getItem(player);
  let playerObject = JSON.parse(fetchedPlayer);
  return playerObject;
}

function checkActiveDiceSideAndRemove() {
  if (document.querySelector('.dice__side--active')) {
    document
      .querySelector('.dice__side--active')
      .classList.remove('dice__side--active');
  }
}

function addGameInteraction(interaction) {
  STORY_BOARD.insertAdjacentHTML(
    'afterbegin',
    `
    <li class="story-board__item">${interaction}</li>
  `
  );
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
    return true;
  }
}

function checkForTraps(pos) {
  if (pos && pos.trap != '') {
    pos.trap.announceTrap();
    let trap = pos.trap.releaseTrap();
    switch (trap.type) {
      case 'freeze':
        addGameInteraction(
          `current player needs to stay for ${trap.amount} turns.`
        );
        break;
      case 'return':
        addGameInteraction(
          `current player needs to go back ${trap.amount} tiles.`
        );
        break;
      default:
        break;
    }
  }
}

function enableDiceBtn() {
  DICE_BTN.disabled = false;
}

function endGame() {
  if (moved >= 30) {
    addGameInteraction('Winner winner chicken dinner');
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
    if (checkForSix(moves)) {
      addGameInteraction('Six, player goes again');
    }
    setTimeout(() => {
      checkForTraps(gameTiles[moved]);
    }, 800 * moves);
    removeAnimationClass();
  }, 2400);
}
