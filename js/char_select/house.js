export class House {
  characters = [];
  motto = '';
  name = '';
  constructor(house) {
    this.name = house.name;
  }
  displayHouseSigilToDom() {
    console.log(this.getSigilPath());
    return `<div>
      <figure>
        <img src="assets/sigils/${this.getSigilPath()}.svg" alt=""/>
      </figure>
    </div>`;
  }
  getSigilPath() {
    let spaceToUnderscore = this.name.replace(/ /g, '_');
    let removedApostrophes = spaceToUnderscore.replace(/'/g, '');
    return removedApostrophes.toLowerCase();
  }
}
