export class Trap {
  character = '';
  consequence = {};
  constructor(character, consequence) {
    this.character = character;
    this.consequence = consequence;
  }

  releaseTrap() {
    alert(`${this.character} has you! ${this.consequence.text}`);
  }

  announceTrap() {
    return { type: this.consequence.type, amount: this.consequence.amount };
  }
}
