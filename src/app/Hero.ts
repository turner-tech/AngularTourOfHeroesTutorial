export class Hero {
  id: number;
  name: string;
  abilities: string[];

  constructor(id: number, name: string, abilities: string[]) {
    this.id = id;
    this.name = name;
    this.abilities = abilities;
  }
  setAbilities(abilities: string[]) {
    this.abilities = abilities;
  }

}
