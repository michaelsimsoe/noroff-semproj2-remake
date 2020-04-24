export class Trap {
  character = '';
  consequence = {};
  constructor(character, consequence) {
    this.character = character;
    this.consequence = consequence;
  }
  announceTrap() {
    return `${this.character}${this.consequence.text}`;
  }

  releaseTrap() {
    return {
      character: this.character,
      type: this.consequence.type,
      amount: this.consequence.amount,
      text: this.consequence.text
    };
  }
}
