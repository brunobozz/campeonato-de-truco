import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss'],
})
export class LayoutMenuComponent {
  isOpen: boolean = false;
  public menuSelecionado: string = '/participantes';

  constructor() {}

  public toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  clickMenu(menu: string) {
    if (this.isOpen) {
      this.isOpen = !this.isOpen;
    }
    this.menuSelecionado = menu;
  }
}
