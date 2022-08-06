import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  heroes = HEROES;
  selectedHero? : Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
