import { House } from './char_select/house.js';
import { Character } from './char_select/character.js';
import { navigation } from './util/navigation.js';
import { alert } from './util/alert.js';
const ALERT_BOX = alert();

document.addEventListener('DOMContentLoaded', async function(event) {
  checkQueryParams();
  let playerOneIsSet = false;
  let playerTwoIsSet = false;
  const CHARACTERSTATUS_CONTAINER = document.getElementById('character-status');
  const ALERT_MSG = document.getElementById('alert-msg');
  const BEGIN_BUTTON = document.getElementById('begin-btn');

  navigation();

  const HOUSES = [
    {
      house: 'House Stark of Winterfell',
      characters: ['Arya Stark', 'Jon Snow']
    },
    {
      house: "House Baratheon of Storm's End",
      characters: ['Robert I Baratheon', 'Stannis Baratheon']
    },
    {
      house: 'House Greyjoy of Pyke',
      characters: ['Asha Greyjoy', 'Theon Greyjoy']
    },
    {
      house: 'House Lannister of Casterly Rock',
      characters: ['Cersei Lannister', 'Jaime Lannister']
    },
    {
      house: "House Targaryen of King's Landing",
      characters: ['Daenerys Targaryen', 'Viserys Targaryen']
    }
  ];
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
      displayAlertMsg(
        `${player} is already chosen. Please try one of the others.`
      );
      hideAlertMSg();
      return true;
    }
  }

  function displayAlertMsg(msg) {
    ALERT_MSG.classList.remove('alert-message--hidden');
    ALERT_MSG.querySelector('.alert-message__message').innerHTML = `
      <h3>Woops!</h3>
      <p>${msg}</p>
    `;
  }
  function hideAlertMSg() {
    setTimeout(() => {
      ALERT_MSG.classList.add('alert-message--hidden');
    }, 3000);
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

const URL = 'https://www.anapioficeandfire.com/api/';

async function getResource(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return await data[0];
  } catch (error) {
    console.log(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  }
}

async function getCharacter(name) {
  const nameURL = `${URL}characters?name=${encodeURI(name)}`;
  return await getResource(nameURL);
}

async function getHouse(name) {
  const nameURL = `${URL}houses?name=${encodeURI(name)}`;
  return await getResource(nameURL);
}

function checkQueryParams() {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('error')) {
    ALERT_BOX.displayAlertMsg('peis');
  }
}

function removeLoader() {
  let loader = document.getElementById('dots-loader');
  if (loader) {
    loader.remove();
  }
}
