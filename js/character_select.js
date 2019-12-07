import { House } from './char_select/house.js';
import { Character } from './char_select/character.js';
import { HOUSES } from './char_select/houses.js';
import { getCharacter, getHouse } from './char_select/fetchResources.js';
import { navigation } from './util/navigation.js';
import { alert } from './util/alert.js';
import { checkQueryParams, removeLoader } from './util/helper.js';
const ALERT_BOX = alert();

document.addEventListener('DOMContentLoaded', async function(event) {
  if (checkQueryParams('error')) {
    ALERT_BOX.displayAlertMsg('Please choose a character to play the game');
    ALERT_BOX.hideAlertMSg();
  }
  let playerOneIsSet = false;
  let playerTwoIsSet = false;
  const CHARACTERSTATUS_CONTAINER = document.getElementById('character-status');
  const BEGIN_BUTTON = document.getElementById('begin-btn');

  navigation();

  let houseArray = [];
  const HOUSES_CONTAINER = document.querySelector('.houses');
  HOUSES.forEach(async house => {
    let h = new House(await getHouse(house.house));
    house.characters.forEach(async char => {
      h.addCharacter(new Character(await getCharacter(char)));
    });

    houseArray.push(h);
    removeLoader();
    HOUSES_CONTAINER.innerHTML += h.displayHouseSigilToDom();
  });

  const CHARACTER_CONTAINER = document.querySelector(
    '.character-select__characters'
  );

  HOUSES_CONTAINER.addEventListener(
    'click',
    function(e) {
      // To catch click events in both chrome and firefox
      let path = e.path || (e.composedPath && e.composedPath());
      let houseName = path.find(el => el.dataset.name).dataset.name;
      let currentHouse = houseArray.find(house => house.name === houseName);
      CHARACTER_CONTAINER.innerHTML = currentHouse.displayCharacters();
      HOUSES_CONTAINER.scrollIntoView();
    },
    false
  );

  CHARACTER_CONTAINER.addEventListener('click', function(e) {
    if (e.target.classList.contains('char-select-btn')) {
      let player = e.target.parentElement.dataset.character;
      let house = e.target.parentElement.parentElement.dataset.house;
      setPlayer(player, house);
    }
  });

  function isPlayerTaken(player) {
    const playerOne = CHARACTERSTATUS_CONTAINER.querySelector(
      '#select-player-one'
    ).innerHTML;
    const playerTwo = CHARACTERSTATUS_CONTAINER.querySelector(
      '#select-player-two'
    ).innerHTML;

    if (playerOne.match(player) || playerTwo.match(player)) {
      ALERT_BOX.displayAlertMsg(
        `${player} is already chosen. Please try one of the others.`
      );
      ALERT_BOX.hideAlertMSg();
      return true;
    }
  }

  function setPlayer(name, house) {
    if (playerOneIsSet && playerTwoIsSet) {
      return;
    }
    if (!playerOneIsSet) {
      let one = CHARACTERSTATUS_CONTAINER.querySelector('#select-player-one');
      one.classList.remove('character-status__player--hidden');
      one.innerHTML = `<h4>Player One</h4><p>${name}</p>`;
      localStorage.setItem('player-one', JSON.stringify({ name, house }));
      playerOneIsSet = true;
      return;
    }
    if (isPlayerTaken(name)) return;
    let two = CHARACTERSTATUS_CONTAINER.querySelector('#select-player-two');
    two.innerHTML = `<h4>Player Two</h4><p>${name}</p>`;
    two.classList.remove('character-status__player--hidden');
    playerTwoIsSet = true;
    localStorage.setItem('player-two', JSON.stringify({ name, house }));
    setTimeout(() => {
      BEGIN_BUTTON.scrollIntoView();
    }, 400);
    readyToPlay();
    return;
  }

  function readyToPlay() {
    BEGIN_BUTTON.classList.remove('begin-btn--hidden');
  }
});
