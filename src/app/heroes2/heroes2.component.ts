import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';

import { BaseListClass } from '../baseClasses/base-list-class';

@Component({
  selector: 'heroes2',
  templateUrl: `./heroes2.component.html`,
  styleUrls: [`./heroes2.component.scss`]
})

export class Heroes2Component extends BaseListClass {
  protected list: Hero[];
  protected selectedItem: Hero;

  constructor(
    protected router: Router,
    protected service: HeroService
  ) {
    super(service, router);
  }

  // getAll(): void {
  //   this.service.getAll().then(all => {
  //     this.list = all;
  //   });
  // }

  // ngOnInit(): void {
  //   this.getAll();
  // }

  // onSelect(item): void {
  //   this.selectedItem = item;
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedItem.id]);
  // }
}
