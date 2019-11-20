export class Character {
  name = '';
  gender = '';
  culture = '';
  titles = [];

  constructor(data) {
    this.name = data.name;
    this.gender = data.gender;
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
