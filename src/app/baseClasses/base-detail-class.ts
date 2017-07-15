import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

export class BaseDetailClass implements OnInit {
  protected item: any;

  constructor(
    protected service: any,
    protected route: ActivatedRoute,
    protected location: Location,
  ) {
    this.service = service;
    this.route = route;
    this.location = location;
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.service.getSingle(+params.get('id'));
      })
      .subscribe(data => {
        this.item = data;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
