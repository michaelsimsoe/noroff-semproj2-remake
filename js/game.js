import { gameTiles } from './game/game_tiles.js';
import { navigation } from './util/navigation.js';
import { alert } from './util/alert.js';

const STATE = {
  currentPlayer: '',
  waitingPlayer: '',
  changePlayer() {
    this.updatePlayerCard();
    [this.currentPlayer, this.waitingPlayer] = [
      this.waitingPlayer,
      this.currentPlayer
    ];
    this.currentPlayer.card.classList.add('card--active');
    this.waitingPlayer.card.classList.remove('card--active');
    addGameInteraction(`${this.currentPlayer.name}s turn.`, 'player-change');
    changeButtonText();

    enableDiceBtn();
  },
  updatePlayerCard(currentPlayer = true) {
    let player = this.currentPlayer;
    if (!currentPlayer) {
      player = this.waitingPlayer;
    }
    const name = player.card.querySelector('h3');
    const house = player.card.querySelector('h4');
    const status = player.card.querySelector('h5');
    const position = player.card.querySelector('span');

    name.innerHTML = `${player.name}`;
    house.innerHTML = `of ${player.house}`;
    if (gameTiles[player.moved].position) {
      // Need to decrement moved because of the way it is done in moveTileForwards()
      position.innerHTML = `${gameTiles[player.moved - 1].position}`;
    }
    if (status && player.trapped > 0) {
      status.innerHTML = `${player.name} is waitng for ${player.trapped} turn(s)`;
    }
    if (status && player.trapped < 1) {
      status.innerHTML = '';
    }
  }
};
const ALERT_BOX = alert();
const DICE_BTN = document.getElementById('dice-btn');

const STORY_BOARD = document.getElementById('story-board-list');
const FINALE_MODAL = document.getElementById('finale-modal');
const PLAYER_ONE = getPlayerObject('player-one');
const PLAYER_TWO = getPlayerObject('player-two');
const WESTERORS_DRAWING = document.getElementById('Layer_2');

document.addEventListener('DOMContentLoaded', async function(event) {
  navigation();
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
    moved: 1,
    trapped: 0,
    return: {
      active: false,
      amount: 0
    },
    rollDiceAgain: false
  };
  STATE.waitingPlayer = {
    name: PLAYER_TWO.name,
    house: PLAYER_TWO.house,
    token: TOKEN_PLAYER_TWO,
    card: PLAYER_TWO_CARD,
    moved: 1,
    trapped: 0,
    return: {
      active: false,
      amount: 0
    },
    rollDiceAgain: false
  };
  STATE.updatePlayerCard();
  STATE.updatePlayerCard(false);
  STATE.currentPlayer.card.classList.add('card--active');
  window.__state__ = STATE;
  DICE_BTN.addEventListener('click', function(e) {
    disableDiceBtn();
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
            data-cy="player-token"
            x="170"
            y="370"
            xlink:href="assets/sigils/${houseName}_small.svg"
          ></image>`;
  WESTERORS_DRAWING.insertAdjacentHTML('afterend', token);
  return;
}

function getPlayerObject(player) {
  let fetchedPlayer = localStorage.getItem(player);
  if (fetchedPlayer === null) {
    ALERT_BOX.displayAlertMsg(`
      <p>You need to chose characters first</p>
      <a href="/index.html?error=missingchar">Go to Player Select</a>
    `);
  }
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

function addGameInteraction(interaction, type = '') {
  STORY_BOARD.insertAdjacentHTML(
    'afterbegin',
    `
    <li class="story-board__item interaction${'-' + type}">${interaction}</li>
  `
  );
}
/**
 *
 * @param {element} token The player token to move
 * @param {object} pos The x and y coordinates
 * @param {string} dir Direction on movement (for debug)
 * @param {number} times For consecutive token moves (TODO: make use of in FORWARD as well)
 */
function moveTokenTo(token, pos, dir = 'FORWARDS', times = 1) {
  setTimeout(() => {
    if (!pos) return; // Return if there are no more moves left in gameTiles
    token.setAttribute('x', pos.x);
    token.setAttribute('y', pos.y);
    return;
  }, 800 * times);
}

function getRandomDiceResult() {
  let randomNumberBetweenOneAndSix = Math.floor(Math.random() * 6) + 1;
  // let randomNumberBetweenOneAndSix = Math.floor(Math.random() * 1) + 6;
  return randomNumberBetweenOneAndSix;
}

function addDiceAnimationClass() {
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

function checkForTraps(pos, moves) {
  setTimeout(() => {
    if (pos && pos.trap != '') {
      let trap = pos.trap.releaseTrap();
      switch (trap.type) {
        case 'freeze':
          STATE.currentPlayer.trapped = trap.amount;
          addGameInteraction(
            `${STATE.currentPlayer.name} is held up by ${trap.character} and has to wait for ${trap.amount} turn(s): ${trap.text}`,
            'trap'
          );
          break;
        case 'return':
          STATE.currentPlayer.return.active = true;
          STATE.currentPlayer.return.amount = trap.amount;
          moveTileBackwards();
          addGameInteraction(
            `${STATE.currentPlayer.name} encounters ${trap.character} and has to move back ${trap.amount} tiles: ${trap.text}`,
            'trap'
          );
          break;
        default:
          break;
      }
    }
  }, 800 * moves);
}

function enableDiceBtn() {
  DICE_BTN.disabled = false;
}

function disableDiceBtn() {
  DICE_BTN.disabled = true;
}

function checkForEndGame(moves) {
  setTimeout(() => {
    if (STATE.currentPlayer.moved >= 31) {
      addGameInteraction(`${STATE.currentPlayer.name} has won the throne!`);
      setWinner({
        name: STATE.currentPlayer.name,
        house: STATE.currentPlayer.house
      });
      setTimeout(() => {
        redircetToFinale();
      }, 4000);
      return true;
    } else {
      return false;
    }
  }, 800 * moves);
}

function rollDiceAndMove(token) {
  // check if player is on hold
  //  if player is on hold, change user
  if (STATE.currentPlayer.trapped > 0) {
    STATE.currentPlayer.trapped--;
    addGameInteraction(
      `${STATE.currentPlayer.name} is still waiting`,
      'waiting'
    );
    STATE.changePlayer();
    STATE.updatePlayerCard();
    return;
  }

  // Start animation of dice
  addDiceAnimationClass();

  // Roll the dice
  setTimeout(() => {
    let moves = getRandomDiceResult();
    addGameInteraction(
      `${STATE.currentPlayer.name} rolls a ${diceNumberToString(moves)}`,
      'dice-roll'
    );

    // If player rolls a six, store a status in rollDiceAgain
    STATE.currentPlayer.rollDiceAgain = checkForSix(moves);

    // Check if player is to close to the last tile to complete all moves
    moves = checkIfPlannedMoveIsPastEnd(moves);

    // Reset dice to standard position
    resetDice(moves);

    // Move the player
    moveTileForwards(moves);

    // After all move animations have ended, check if final tile contains trap
    // (Need to decrement moved because of the way it is done in moveTileForwards())
    checkForTraps(gameTiles[STATE.currentPlayer.moved - 1], moves);

    // Checks if current player is at tile 30, if not it enables the dice button
    if (checkForEndGame(moves)) {
      return;
    }

    const IS_RETURNING = gameTiles[STATE.currentPlayer.moved - 1].trap != '';

    setTimeout(() => {
      let playerRolledSixAndIsNotTrapped =
        STATE.currentPlayer.rollDiceAgain &&
        !IS_RETURNING &&
        STATE.currentPlayer.trapped < 1;
      if (playerRolledSixAndIsNotTrapped) {
        addGameInteraction(
          `The six gives ${STATE.currentPlayer.name} a burst of energy! Roll again!`,
          'six-roll'
        );
        enableDiceBtn();
      } else {
        let playerIsNotSetToMoveBack = !STATE.currentPlayer.return.active;
        if (playerIsNotSetToMoveBack) {
          STATE.updatePlayerCard();
          STATE.changePlayer();
          return;
        } else {
          STATE.changePlayer();
        }
      }
    }, 805 * moves);
    removeAnimationClass();
  }, 3000);
}

function moveTileForwards(moves) {
  for (let i = 0; i < moves; i++) {
    (function(i, moveCount) {
      STATE.currentPlayer.moved++;
      setTimeout(() => {
        moveTokenTo(STATE.currentPlayer.token, gameTiles[moveCount]);
      }, 802 * i);
    })(i, STATE.currentPlayer.moved);
  }
}

function moveTileBackwards() {
  let end = STATE.currentPlayer.return.amount;
  console.log(end);
  for (let i = 0; i <= STATE.currentPlayer.return.amount; i++) {
    (function(i) {
      setTimeout(() => {
        console.log('MOVING BACKWARDS', STATE.currentPlayer);
        STATE.currentPlayer.moved--;
        moveTokenTo(
          STATE.currentPlayer.token,
          gameTiles[STATE.currentPlayer.moved],
          'BACKWARDS',
          i
        );
        if (i === +end) {
          STATE.currentPlayer.moved++;
          STATE.currentPlayer.return.amount = 0;
          STATE.currentPlayer.return.active = false;
        }
      }, 0);
    })(i);
  }
}

function checkIfPlayerIsTrapped() {
  if (STATE.currentPlayer.trapped > 0) {
    STATE.currentPlayer.trapped--;
    STATE.changePlayer();
    return;
  }
  // enableDiceBtn();
}

function resetDice(moves) {
  document
    .querySelector(`.dice__side-${diceNumberToString(moves)}`)
    .classList.add('dice__side--active');
}

function checkIfPlannedMoveIsPastEnd(moves) {
  if (moves + STATE.currentPlayer.moved >= 31) {
    moves = moves - (moves + STATE.currentPlayer.moved - 31);
  }
  return moves;
}

function setWinner(player) {
  localStorage.setItem('winner', JSON.stringify({ player }));
  setTimeout(() => {
    displayWinnerModal(player);
  }, 1000);
}

function displayWinnerModal(player) {
  document.getElementById('game-winner').innerHTML = player.name;
  FINALE_MODAL.classList.add('finale-modal--active');
}

function redircetToFinale() {
  window.location.href = 'finale.html';
}

function changeButtonText() {
  if (STATE.currentPlayer.trapped > 0) {
    DICE_BTN.innerHTML = 'WAIT';
  } else {
    DICE_BTN.innerHTML = 'ROLL';
  }
}
