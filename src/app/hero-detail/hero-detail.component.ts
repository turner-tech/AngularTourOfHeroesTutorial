import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  addAbility = false;
  abilityStr = '';
  editAbilitiesInputVisibility  = false;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  clearAbilities() {
    this.hero.setAbilities([]);
    this.abilityStr = '';
  }
  formatAbilities() {
    document.getElementById('editAbilitiesButton').innerText = 'Update Abilities';
    if (!this.addAbility) {
      document.getElementById('editAbilitiesButton').innerText = 'Stop Editing Abilities';
      this.abilityStr = this.hero.abilities.join();
    }
   this.hero.abilities = this.abilityStr.split(',');
    this.addAbility = !this.addAbility;
    this.editAbilitiesInputVisibility = !this.editAbilitiesInputVisibility;
  }


  save(): void{
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }



}
