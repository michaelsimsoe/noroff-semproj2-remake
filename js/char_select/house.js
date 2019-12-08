export class House {
  characters = [];
  motto = '';
  name = '';
  constructor(house) {
    this.name = house.name;
  }
  displayHouseSigilToDom() {
    return `<div class="houses__house" data-name="${this.name}">
      <h3>${this.name}</h3>
      <figure tabindex="0">
        <img src="assets/sigils/${this.getSigilPath()}.svg" data-name="${
      this.name
    }" alt="The sigil of ${this.name}"/>
      </figure>
    </div>`;
  }

  displayCharacters() {
    return `
      <div data-house="${this.name}">
       ${this.characters[0].displayCharacterCardToDom()}
       ${this.characters[1].displayCharacterCardToDom()}
      </div>
    `;
  }
  getSigilPath() {
    let spaceToUnderscore = this.name.replace(/ /g, '_');
    let removedApostrophes = spaceToUnderscore.replace(/'/g, '');
    return removedApostrophes.toLowerCase();
  }

  addCharacter(character) {
    this.characters.push(character);
  }
}
