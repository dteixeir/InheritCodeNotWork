import { Injectable } from '@angular/core';

// models
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/heroes';

@Injectable()
export class HeroService {
  heroes: Hero[];

  getAll(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getSingle(id: number): Promise<Hero> {
    return this.getAll()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
