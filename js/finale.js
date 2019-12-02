document.addEventListener('DOMContentLoaded', function(e) {
  const winnerHeading = document.getElementById('finale-sub-heading');

  let winner = getWinner();
  winnerHeading.innerHTML = `${winner.name} of ${winner.house}`;

  function getWinner() {
    let fetchedWinner = localStorage.getItem('winner');
    let winner = JSON.parse(fetchedWinner);
    return winner.player;
  }
  console.log(getWinner());
});
