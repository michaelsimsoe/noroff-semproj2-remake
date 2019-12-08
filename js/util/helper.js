export function checkQueryParams(param) {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has(param)) {
    return true;
  }
  return false;
}

function removeLoader() {
  let loader = document.getElementById('dots-loader');
  if (loader) {
    loader.remove();
  }
}

function showMainContent() {
  let houses = document.getElementById('character-select-houses');
  let status = document.getElementById('character-status');
  if (houses && status) {
    houses.classList.remove('hidden-content');
    status.classList.remove('hidden-content');
  }
}

export function displayShowCharacterButton() {
  removeLoader();

  let introSection = document.getElementById('intro-section');
  let button = `<button class="show-character-button" id="show-character-button">Play the Game</button>`;
  introSection.insertAdjacentHTML('beforeend', button);
  document
    .getElementById('show-character-button')
    .addEventListener('click', function(e) {
      e.preventDefault();
      removeIntro();
      showMainContent();
    });
}

function removeIntro() {
  let introSection = document.getElementById('intro-section');
  if (introSection) {
    introSection.classList.add('hidden-content');
  }
}
