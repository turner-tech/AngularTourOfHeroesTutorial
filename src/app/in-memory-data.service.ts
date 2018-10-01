import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import {OurHeroes} from './heroes/OurHeroes';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const heroes: Hero[] = [
        new Hero(1, 'Spiderman',
          ['Spider Webbing', 'Swinging', 'Super Strength', 'Wall Climbing', 'Wittiness']),
        new Hero(2, 'Captain Marvel',
          ['Super Strength', 'Flight']),
        new Hero(3, 'Captain America',
          []),
        new Hero(4, 'Wolverine',
          []),
        new Hero(5, 'Professor X',
          []),
        new Hero(6, 'Superman',
          []),
        new Hero(7, 'Batman',
          []),
        new Hero(8, 'Flash',
          []),
        new Hero(9, 'Nightwing',
          [])
      ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
