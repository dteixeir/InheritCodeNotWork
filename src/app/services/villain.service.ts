import { Injectable } from '@angular/core';

// models
import { Villain } from '../models';
import { Villains } from '../mocks';

@Injectable()
export class HeroService {
  villains: Villain[];

  getAll(): Promise<Villain[]> {
    return Promise.resolve(Villains);
  }

  getSingle(id: number): Promise<Villain> {
    return this.getAll()
      .then(villains => villains.find(villain => villain.id === id));
  }
}
