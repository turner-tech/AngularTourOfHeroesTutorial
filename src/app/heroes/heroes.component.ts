import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {OurHeroes} from './OurHeroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = OurHeroes.heroes;
  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
    this.heroes[0].setAbilities(['Spider Webbing', 'Swinging', 'Super Strength', 'Wall Climbing', 'Wittiness']);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
