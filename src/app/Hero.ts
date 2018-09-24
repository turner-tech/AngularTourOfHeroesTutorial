export class Hero {
  id: number;
  name: string;
  abilities: string[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  setAbilities(abilities: string[]) {
    this.abilities = abilities;
  }

}
