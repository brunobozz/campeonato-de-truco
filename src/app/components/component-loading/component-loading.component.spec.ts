import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoadingComponent } from './component-loading.component';

describe('ComponentLoadingComponent', () => {
  let component: ComponentLoadingComponent;
  let fixture: ComponentFixture<ComponentLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
