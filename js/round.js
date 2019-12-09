// initiate round
// check if player is on hold
// if player is on hold, change user
if (STATE.currentPlayer.trapped > 0) {
  STATE.currentPlayer.trapped--;
  addGameInteraction(`${STATE.currentPlayer.name} is still waiting`);
  STATE.changePlayer();
  return;
}

// roll dice
// move and animate token
// check if token landed on trap
// check trap
// if move back, move token back and change user
// if hold, set hold and change user
// check if a six was rolled
// if yes, go to roll dice
// change the user
