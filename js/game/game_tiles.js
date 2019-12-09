import { Trap } from './trap.js';
export const gameTiles = [
  {
    x: 170,
    y: 370,
    trap: '',
    position: 'The Twins'
  },
  {
    x: 150,
    y: 330,
    trap: '',
    position: 'Just north-east of The Twins'
  },
  {
    x: 160,
    y: 300,
    trap: '',
    position: 'North of The Twins'
  },
  {
    x: 140,
    y: 260,
    trap: '',
    position: 'South of Winterfell'
  },
  {
    x: 200,
    y: 260,
    trap: new Trap('Dire Wolfs', {
      text: 'A whole pack of them. The army holds them off, but gets delayed.',
      type: 'freeze',
      amount: '1'
    }),
    position: 'Just south of Winterfell'
  },
  {
    x: 200,
    y: 210,
    trap: '',
    position: 'Winterfell'
  },
  {
    x: 250,
    y: 170,
    trap: new Trap('Blizzard', {
      text: 'The weather is impossible to move through. Back to Winterfell',
      type: 'return',
      amount: '1'
    }),
    position: 'Just north of Winterfell'
  },
  {
    x: 270,
    y: 120,
    trap: new Trap('Wildlings', {
      text: 'Their number is not large, but they fight well.',
      type: 'freeze',
      amount: '1'
    }),
    position: 'North of Winterfell'
  },
  {
    x: 310,
    y: 80,
    trap: '',
    position: 'Going north'
  },
  { x: 310, y: 50, trap: '', position: 'Castle Black' },
  {
    x: 300,
    y: 120,
    trap: '',
    position: 'Just south of Castle Black'
  },
  { x: 300, y: 200, trap: '', position: 'Heading south' },
  {
    x: 260,
    y: 250,
    trap: '',
    position: 'Approaching the Riverlands'
  },
  { x: 220, y: 300, trap: '', position: 'Towards the Riverlands' },
  {
    x: 200,
    y: 400,
    trap: new Trap('The Marshes', {
      text: 'It is difficult to move the army forwards.',
      type: 'return',
      amount: '1'
    }),
    position: 'Near Riverrun'
  },
  { x: 180, y: 500, trap: '', position: 'Riverrun' },
  {
    x: 170,
    y: 450,
    trap: new Trap('Brotherhood Without Banners', {
      text: 'Ambushed by the Brotherhood. Retreat is the only option',
      type: 'return',
      amount: '2'
    }),
    position: 'South of Riverrun'
  },
  { x: 160, y: 600, trap: '', position: 'Moving south' },
  { x: 160, y: 680, trap: '', position: 'North of Highgarden' },
  {
    x: 170,
    y: 750,
    trap: new Trap('The Tyrells', {
      text: 'They are putting up a fight',
      type: 'freeze',
      amount: '1'
    }),
    position: 'Highgarden'
  },
  { x: 210, y: 820, trap: '', position: 'Soyth of Highgarden' },
  { x: 270, y: 820, trap: '', position: 'Nearing Dorne' },
  { x: 320, y: 820, trap: '', position: 'West of Sunspear' },
  { x: 400, y: 820, trap: '', position: 'Sunspear' },
  {
    x: 310,
    y: 810,
    trap: new Trap('The Dornish', {
      text: 'An ambush! Typical attrition warfare from the southerners',
      type: 'freeze',
      amount: '1'
    }),
    position: 'West of Sunspear'
  },
  { x: 250, y: 810, trap: '', position: 'Leaving Dorne' },
  { x: 200, y: 810, trap: '', position: 'South of Highgarden' },
  { x: 160, y: 700, trap: '', position: 'Highgarden' },
  { x: 200, y: 650, trap: '', position: 'West of Kings Landing' },
  {
    x: 270,
    y: 610,
    trap: new Trap('Sandor "The Hound" Clegane', {
      text:
        "He is charging! He's massive and angry, and the army need to retire back to safety.",
      type: 'return',
      amount: '3'
    }),
    position: 'Outside the walls of Kings Landing'
  },
  { x: 320, y: 570, trap: '', position: 'Kings Landing' }
];
