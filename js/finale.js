import { navigation } from './util/navigation.js';
document.addEventListener('DOMContentLoaded', function(e) {
  const RETRY_BUTTON = document.getElementById('play-again-btn');
  const winnerHeading = document.getElementById('finale-sub-heading');
  const THRONE = document.querySelector('.throne > g > g');
  let winner = getWinner();
  winnerHeading.innerHTML = `${winner.name} of ${winner.house}`;
  setWinnerSigil(winner.house);
  scrollToButton();
  navigation();
  function getWinner() {
    let fetchedWinner = localStorage.getItem('winner');
    let winner = JSON.parse(fetchedWinner);
    return winner.player;
  }

  function scrollToButton() {
    setTimeout(() => {
      RETRY_BUTTON.scrollIntoView();
    }, 4000);
  }

  function setWinnerSigil(house) {
    let houseName = house
      .replace(/ /g, '_')
      .replace(/\'/g, '')
      .toLowerCase();
    let sigil = ` <image
            class="player-token"
            x="115"
            y="200"
            xlink:href="assets/sigils/${houseName}.svg"
          ></image>`;
    THRONE.insertAdjacentHTML('afterend', sigil);
    console.log('ran');
  }
});
