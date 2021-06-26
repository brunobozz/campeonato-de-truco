import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutMenuComponent } from '../layout-menu/layout-menu.component';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  @Input()
  layoutMenu: LayoutMenuComponent = new LayoutMenuComponent();

  constructor( private router: Router) {}

  public toggleMenu() {
    this.layoutMenu.toggleMenu();
  }

}
