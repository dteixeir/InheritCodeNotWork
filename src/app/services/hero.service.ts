import { Injectable } from '@angular/core';

// models
import { Hero } from '../models';
import { Heroes } from '../mocks';

@Injectable()
export class HeroService {
  heroes: Hero[];

  getAll(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }

  getSingle(id: number): Promise<Hero> {
    return this.getAll()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
