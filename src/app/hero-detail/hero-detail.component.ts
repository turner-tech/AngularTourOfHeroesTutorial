import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';

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

  constructor() { }

  ngOnInit() {
    this.stopEditingAbilities();
  }
  clearAbilities() {
    this.hero.setAbilities([]);
    this.abilityStr = '';
  }
  formatAbilities() {
    document.getElementById('editAbilitiesButton').innerText = 'Update Abilities';

    if (!this.addAbility) {
      this.abilityStr = this.hero.abilities.join();
    }
    this.hero.abilities = this.abilityStr.split(',');
    this.addAbility = true;
    document.getElementById('stopEditingAbilitiesButton').hidden = false;
  }
  stopEditingAbilities() {
    this.addAbility = false;
    document.getElementById('abilitiesText').hidden = true;
    document.getElementById('stopEditingAbilitiesButton').hidden = true;
    this.editAbilitiesInputVisibility = !this.editAbilitiesInputVisibility;
    alert(document.getElementById('abilitiesText'));
  }



}
