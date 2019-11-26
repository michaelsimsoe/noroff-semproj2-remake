import { House } from './char_select/house.js';
import { Character } from './char_select/character.js';

document.addEventListener('DOMContentLoaded', async function(event) {
  let playerOneIsSet = false;
  let playerTwoIsSet = false;
  const hamburgerMenu = document.getElementById('menu');
  const CHARACTERSTATUS_CONTAINER = document.getElementById('character-status');
  let PLAYER_ONE = '';
  let PLAYER_TWO = '';
  hamburgerMenu.addEventListener('click', function(event) {
    hamburgerMenu.classList.toggle('open');
    // navigation.classList.toggle('navigation--open');
  });

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
    HOUSES_CONTAINER.innerHTML += h.displayHouseSigilToDom();
  });

  const CHARACTER_CONTAINER = document.querySelector(
    '.character-select__characters'
  );
  HOUSES_CONTAINER.addEventListener(
    'click',
    function(e) {
      let houseName = e.path.find(el => el.dataset.name).dataset.name;
      let currentHouse = houseArray.find(house => house.name === houseName);
      CHARACTER_CONTAINER.innerHTML = currentHouse.displayCharacters();
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

  function setPlayer(name, house) {
    if (playerOneIsSet && playerTwoIsSet) {
      return;
    }
    if (!playerOneIsSet) {
      CHARACTERSTATUS_CONTAINER.querySelector(
        '#select-player-one'
      ).innerHTML = name;
      localStorage.setItem('player-one', JSON.stringify({ name, house }));
      playerOneIsSet = true;
      return;
    }
    CHARACTERSTATUS_CONTAINER.querySelector(
      '#select-player-two'
    ).innerHTML = name;
    playerTwoIsSet = true;
    localStorage.setItem('player-two', JSON.stringify({ name, house }));
    readyToPlay();
    return;
  }

  function readyToPlay() {
    document.getElementById('begin-btn').classList.remove('begin-btn--hidden');
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
