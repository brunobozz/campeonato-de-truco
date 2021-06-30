import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTabelasComponent } from './page-tabelas.component';

describe('PageTabelasComponent', () => {
  let component: PageTabelasComponent;
  let fixture: ComponentFixture<PageTabelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTabelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTabelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
