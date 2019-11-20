export class House {
  characters = [];
  motto = '';
  name = '';
  constructor(house) {
    this.name = house.name;
  }
  displayHouseSigilToDom() {
    return `<div class="house" data-name="${this.name}">
      <h3>${this.name}</h3>
      <figure>
        <img src="assets/sigils/${this.getSigilPath()}.svg" alt=""/>
      </figure>
    </div>`;
  }

  displayCharacters() {
    return `
      <div>
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
