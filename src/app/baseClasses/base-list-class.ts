import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

export class BaseListClass implements OnInit {
  protected list: any[];
  protected selectedItem: any;

  constructor(
    protected service: any,
    protected router: Router
  ) {
    this.service = service;
    this.router = router;
  }

  getAll(): void {
    this.service.getAll().then(all => {
      this.list = all;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSelect(item): void {
    this.selectedItem = item;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedItem.id]);
  }
}
