export class Character {
  name = '';
  gender = '';
  culture = '';
  titles = [];
  house = '';

  constructor(data) {
    this.name = data.name;
    this.gender = data.gender;
    this.house = data.house ? data.house : 'The Common people';
  }

  displayCharacterCardToDom() {
    return `
      <div data-character="${this.name}">
        <img src="assets/misc/${this.gender}.svg" alt=""/>
        <h3>${this.name}</h3>
        <button class="char-select-btn">Choose Character</button>
      </div>
    `;
  }
  displayTokenToBoard() {}
}
