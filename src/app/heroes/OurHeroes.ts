import { Hero } from '../Hero';


export class OurHeroes {
  static heroes: Hero[] = [
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
}
