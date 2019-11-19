import { House } from './char_select/house.js';

document.addEventListener('DOMContentLoaded', async function(event) {
  const hamburgerMenu = document.getElementById('menu');
  hamburgerMenu.addEventListener('click', function(event) {
    hamburgerMenu.classList.toggle('open');
    // navigation.classList.toggle('navigation--open');
  });

  const HOUSES_CONTAINER = document.querySelector('.houses');
  const CHARACTER_CONTAINER = document.querySelectorAll(
    '.character-select__characters'
  );
  HOUSES_CONTAINER.addEventListener('click', function(e) {
    Array.from(CHARACTER_CONTAINER).forEach(container => {
      container.children[0].innerHTML += e.target.innerHTML;
    });
  });
  const CHARACTERS = [
    'Arya Stark',
    'Jon Snow',
    'Cersei Lannister',
    'Jaime Lannister',
    'Daenerys Targaryen',
    'Viserys Targaryen',
    'Asha Greyjoy',
    'Theon Greyjoy',
    'Robert I Baratheon',
    'Stannis Baratheon'
  ];
  CHARACTERS.forEach(async character => {
    let c = await getCharacter(character);
    console.log(c);
  });
  const HOUSES = [
    // 'House Stark of Winterfell',
    "House Baratheon of Storm's End"
    // 'House Greyjoy of Pyke',
    // 'House Lannister of Casterly Rock',
    // "House Targaryen of King's Landing"
  ];
  HOUSES.forEach(async house => {
    let h = await getHouse(house);
    let newHouse = new House(h);
    HOUSES_CONTAINER.children[0].innerHTML += newHouse.displayHouseSigilToDom();
  });
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
