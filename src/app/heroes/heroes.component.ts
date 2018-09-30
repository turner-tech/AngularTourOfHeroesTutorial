import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
   this.getHeroes();
   this.heroes[0].setAbilities(['Spider Webbing', 'Swinging', 'Super Strength', 'Wall Climbing', 'Wittiness']);

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
