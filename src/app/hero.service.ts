import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {OurHeroes} from './heroes/OurHeroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of (OurHeroes.heroes.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(OurHeroes.heroes);
  }


}
