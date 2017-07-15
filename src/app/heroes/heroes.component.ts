import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [ `./heroes.component.scss` ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private service: HeroService
  ) { }

  getAll(): void {
    this.service.getAll().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate([ '/detail', this.selectedHero.id ]);
  }
}



