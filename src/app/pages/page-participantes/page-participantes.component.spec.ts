import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParticipantesComponent } from './page-participantes.component';

describe('PageParticipantesComponent', () => {
  let component: PageParticipantesComponent;
  let fixture: ComponentFixture<PageParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
