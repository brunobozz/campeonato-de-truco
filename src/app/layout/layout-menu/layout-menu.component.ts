import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss'],
})
export class LayoutMenuComponent {
  isOpen: boolean = false;
  public menuSelecionado: string = '/participantes';

  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe(() => {
      if (this.location.path() !== '') {
        this.menuSelecionado = '/' + location.path().substring(1);
      } else {
        this.menuSelecionado = '/participantes';
      }
    });
  }
}
