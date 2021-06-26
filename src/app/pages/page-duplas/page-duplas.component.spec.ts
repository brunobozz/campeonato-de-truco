import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDuplasComponent } from './page-duplas.component';

describe('PageDuplasComponent', () => {
  let component: PageDuplasComponent;
  let fixture: ComponentFixture<PageDuplasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDuplasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDuplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
