const gameTiles = [
  { x: 170, y: 370, traps: [] },
  { x: 170, y: 310, traps: [] },
  { x: 140, y: 260, traps: [] },
  { x: 200, y: 260, traps: [] },
  { x: 200, y: 210, traps: [] },
  { x: 250, y: 170, traps: [] },
  { x: 270, y: 120, traps: [] },
  { x: 310, y: 80, traps: [] },
  { x: 310, y: 50, traps: [] },
  { x: 300, y: 120, traps: [] },
  { x: 300, y: 200, traps: [] },
  { x: 220, y: 300, traps: [] },
  { x: 200, y: 400, traps: [] },
  { x: 180, y: 500, traps: [] },
  { x: 160, y: 600, traps: [] },
  { x: 160, y: 680, traps: [] },
  { x: 170, y: 750, traps: [] },
  { x: 210, y: 820, traps: [] },
  { x: 270, y: 820, traps: [] },
  { x: 320, y: 820, traps: [] },
  { x: 400, y: 820, traps: [] },
  { x: 310, y: 810, traps: [] },
  { x: 250, y: 810, traps: [] },
  { x: 200, y: 810, traps: [] },
  { x: 160, y: 700, traps: [] },
  { x: 200, y: 650, traps: [] },
  { x: 270, y: 610, traps: [] },
  { x: 320, y: 570, traps: [] }
];

document.addEventListener('DOMContentLoaded', async function(event) {
  let token = document.getElementById('player-token-one');
  console.log(token.x.animVal.value);
  console.log(token.x);
  console.log(token.x.animVal.value);
  console.log(token.x);

  let count = 0;
  setInterval(() => {
    moveToken(token, gameTiles[count].x, gameTiles[count].y);
    count += 1;
    console.log(count);
  }, 1000);
});

function moveToken(token, x, y) {
  token.setAttribute('x', x);
  token.setAttribute('y', y);
  return;
}
