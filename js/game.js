import { gameTiles } from './game/game_tiles.js';

const STATE = {
  return: {
    active: false,
    amount: 0
  },
  currentPlayer: '',
  waitingPlayer: '',
  changePlayer() {
    [this.currentPlayer, this.waitingPlayer] = [
      this.waitingPlayer,
      this.currentPlayer
    ];
    this.currentPlayer.card.classList.add('card--active');
    this.waitingPlayer.card.classList.remove('card--active');
  },
  updatePlayerCard() {
    const name = this.currentPlayer.card.querySelector('h3');
    const house = this.currentPlayer.card.querySelector('h4');
    const position = this.currentPlayer.card.querySelector('span');

    name.innerHTML = `${this.currentPlayer.name}`;
    house.innerHTML = `of ${this.currentPlayer.house}`;
    position.innerHTML = `${
      gameTiles[this.currentPlayer.moved].position
        ? gameTiles[this.currentPlayer.moved].position
        : 'unknown'
    }`;
  }
};
let moved = 1;
const DICE_BTN = document.getElementById('dice-btn');

const STORY_BOARD = document.getElementById('story-board-list');
const FINALE_MODAL = document.getElementById('finale-modal');
const PLAYER_ONE = getPlayerObject('player-one');
const PLAYER_TWO = getPlayerObject('player-two');
const WESTERORS_DRAWING = document.getElementById('Layer_2');

document.addEventListener('DOMContentLoaded', async function(event) {
  setUpPlayerToken(PLAYER_ONE, 'one');
  setUpPlayerToken(PLAYER_TWO, 'two');
  const TOKEN_PLAYER_ONE = document.getElementById('player-token-one');
  const TOKEN_PLAYER_TWO = document.getElementById('player-token-two');
  const PLAYER_ONE_CARD = document.getElementById('player-one-card');
  const PLAYER_TWO_CARD = document.getElementById('player-two-card');
  STATE.currentPlayer = {
    name: PLAYER_ONE.name,
    house: PLAYER_ONE.house,
    token: TOKEN_PLAYER_ONE,
    card: PLAYER_ONE_CARD,
    moved: 0,
    trapped: 0,
    rollDiceAgain: false
  };
  STATE.waitingPlayer = {
    name: PLAYER_TWO.name,
    house: PLAYER_TWO.house,
    token: TOKEN_PLAYER_TWO,
    card: PLAYER_TWO_CARD,
    moved: 0,
    trapped: 0,
    rollDiceAgain: false
  };
  DICE_BTN.addEventListener('click', function(e) {
    DICE_BTN.disabled = true;
    checkActiveDiceSideAndRemove();
    rollDiceAndMove(STATE.currentPlayer.token);
  });
});

function setUpPlayerToken(player, num) {
  let houseName = player.house
    .replace(/ /g, '_')
    .replace(/\'/g, '')
    .toLowerCase();
  let token = ` <image
            class="player-token"
            id="player-token-${num}"
            x="170"
            y="370"
            xlink:href="assets/sigils/${houseName}_small.svg"
          ></image>`;
  WESTERORS_DRAWING.insertAdjacentHTML('afterend', token);
  return;
}

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

function moveTokenTo(token, pos, dir = 'FORWARDS') {
  if (!pos) return; // Return if there are no more moves left in gameTiles
  console.log(dir);
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
  return false;
}

function checkForTraps(pos) {
  if (pos && pos.trap != '') {
    pos.trap.announceTrap();
    let trap = pos.trap.releaseTrap();
    switch (trap.type) {
      case 'freeze':
        STATE.currentPlayer.trapped = trap.amount;
        addGameInteraction(
          `${STATE.currentPlayer.name} needs to stay for ${trap.amount} turns.`
        );
        break;
      case 'return':
        STATE.return.active = true;
        STATE.return.amount = trap.amount;
        moveTileBackwards();
        addGameInteraction(
          `${STATE.currentPlayer.name}  needs to go back ${trap.amount} tiles.`
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

function checkForEndGame(moves) {
  if (STATE.currentPlayer.moved >= 30) {
    addGameInteraction(`${STATE.currentPlayer.name} has won the throne!`);
    setWinner({
      name: STATE.currentPlayer.name,
      house: STATE.currentPlayer.house
    });
    setTimeout(() => {
      redircetToFinale();
    }, 4000);
  } else {
    setTimeout(() => {
      enableDiceBtn();
    }, 800 * moves);
  }
}

function rollDiceAndMove(token) {
  checkIfPlayerIsTrapped();
  addAnimationClass();

  setTimeout(() => {
    let moves = getRandomDiceResult();

    // If player rolls a six, store a status in rollDiceAgain
    STATE.currentPlayer.rollDiceAgain = checkForSix(moves);

    // Check if player is to close to the last tile to complete all moves
    moves = checkIfPlannedMoveIsPastEnd(moves);

    resetDice(moves);

    // Move the player
    moveTileForwards(moves);

    // Checks if current player is at tile 30, if not it enables the dice button
    checkForEndGame(moves);

    // After all move animations have ended, check if final tile contains trap
    setTimeout(() => {
      checkForTraps(gameTiles[STATE.currentPlayer.moved]);
    }, 800 * moves);

    setTimeout(() => {
      if (STATE.currentPlayer.rollDiceAgain) {
        addGameInteraction('Six, player goes again');
      } else {
        if (!STATE.return.active) {
          // STATE.return.amount = 0;
          // STATE.return.active = false;
          STATE.changePlayer();

          return;
        } else {
          // STATE.changePlayer();
        }
      }
    }, 800 * moves);
    removeAnimationClass();
  }, 2400);
  STATE.updatePlayerCard();
}

function moveTileForwards(moves) {
  for (let i = 0; i < moves; i++) {
    (function(i, moveCount) {
      STATE.currentPlayer.moved++;
      setTimeout(() => {
        moveTokenTo(STATE.currentPlayer.token, gameTiles[moveCount]);
      }, 801 * i);
    })(i, STATE.currentPlayer.moved);
  }
}

function moveTileBackwards() {
  for (let i = 0; i <= STATE.return.amount; i++) {
    console.log(i);
    (function(i) {
      setTimeout(() => {
        STATE.currentPlayer.moved--;
        moveTokenTo(
          STATE.currentPlayer.token,
          gameTiles[STATE.currentPlayer.moved],
          'BACKWARDS'
        );
        if (i === 2) {
          STATE.currentPlayer.moved++;
          console.log('CHANGING');
          STATE.return.amount = 0;
          STATE.return.active = false;
          STATE.changePlayer();
          console.log(STATE);
        }
      }, 801 * i);
    })(i);
  }
}

function checkIfPlayerIsTrapped() {
  if (STATE.currentPlayer.trapped > 0) {
    STATE.currentPlayer.trapped--;
    // STATE.changePlayer();
    enableDiceBtn();
    return;
  }
}

function resetDice(moves) {
  document
    .querySelector(`.dice__side-${diceNumberToString(moves)}`)
    .classList.add('dice__side--active');
}

function checkIfPlannedMoveIsPastEnd(moves) {
  if (moves + STATE.currentPlayer.moved >= 30) {
    moves = moves - (moves + STATE.currentPlayer.moved - 30);
  }
  return moves;
}

function setWinner(player) {
  localStorage.setItem('winner', JSON.stringify({ player }));
  displayWinnerModal(player);
}

function displayWinnerModal(player) {
  document.getElementById('game-winner').innerHTML = player.name;
  FINALE_MODAL.classList.add('finale-modal--active');
}

function redircetToFinale() {
  window.location.href = '/finale.html';
}
