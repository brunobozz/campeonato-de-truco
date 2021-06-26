import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDuplaNovaComponent } from './page-dupla-nova.component';

describe('PageDuplaNovaComponent', () => {
  let component: PageDuplaNovaComponent;
  let fixture: ComponentFixture<PageDuplaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDuplaNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDuplaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
