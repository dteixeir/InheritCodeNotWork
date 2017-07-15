import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { BaseDetailClass } from '../baseClasses/base-detail-class';
import { Hero } from '../models/hero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: `./hero-detail.component.html`,
  styleUrls: [ `./hero-detail.component.scss` ]
})

export class HeroDetailComponent extends BaseDetailClass {
  protected item: Hero;

  constructor(
    protected heroService: HeroService,
    protected route: ActivatedRoute,
    protected location: Location,
  ) {
    super(
      heroService,
      route,
      location
    );
  }

  // ngOnInit(): void {
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => {
  //       return this.heroService.getSingle(+params.get('id'));
  //     })
  //     .subscribe(hero => this.hero = hero);
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}
