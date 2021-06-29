import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartidasComponent } from './page-partidas.component';

describe('PagePartidasComponent', () => {
  let component: PagePartidasComponent;
  let fixture: ComponentFixture<PagePartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePartidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
