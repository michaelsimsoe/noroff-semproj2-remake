import { Trap } from './trap.js';
export const gameTiles = [
  {
    x: 170,
    y: 370,
    trap: ''
  },
  {
    x: 170,
    y: 310,
    trap: ''
  },
  {
    x: 140,
    y: 260,
    trap: new Trap('Jack', { text: 'Buhu', type: 'return', amount: '2' })
  },
  {
    x: 200,
    y: 260,
    trap: new Trap('Jack', { text: 'Buhu', type: 'return', amount: '2' })
  },
  { x: 200, y: 210, trap: '' },
  {
    x: 250,
    y: 170,
    trap: new Trap('Jack', { text: 'Buhu', type: 'return', amount: '2' })
  },
  {
    x: 270,
    y: 120,
    trap: new Trap('Jack', { text: 'Buhu', type: 'return', amount: '2' })
  },
  {
    x: 310,
    y: 80,
    trap: new Trap('Jack', { text: 'Buhu', type: 'return', amount: '2' })
  },
  { x: 310, y: 50, trap: '' },
  { x: 300, y: 120, trap: '' },
  { x: 300, y: 200, trap: '' },
  {
    x: 260,
    y: 250,
    trap: new Trap('Jack', { text: 'Buhu', type: 'return', amount: '2' })
  },
  { x: 220, y: 300, trap: '' },
  { x: 200, y: 400, trap: '' },
  { x: 180, y: 500, trap: '' },
  {
    x: 170,
    y: 450,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 160, y: 600, trap: '' },
  { x: 160, y: 680, trap: '' },
  {
    x: 170,
    y: 750,
    trap: new Trap('Jack', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 210, y: 820, trap: '' },
  { x: 270, y: 820, trap: '' },
  { x: 320, y: 820, trap: '' },
  { x: 400, y: 820, trap: '' },
  {
    x: 310,
    y: 810,
    trap: new Trap('TRAP', { text: 'Buhu', type: 'freeze', amount: '2' })
  },
  { x: 250, y: 810, trap: '' },
  { x: 200, y: 810, trap: '' },
  { x: 160, y: 700, trap: '' },
  { x: 200, y: 650, trap: '' },
  {
    x: 270,
    y: 610,
    trap: new Trap('Sandor "The Hound" Clegane', {
      text:
        "is charging you. He's massive and angry, and you need to retire back to safety. Back 4 tiles!",
      type: 'return',
      amount: '4'
    })
  },
  { x: 320, y: 570, trap: '' }
];
