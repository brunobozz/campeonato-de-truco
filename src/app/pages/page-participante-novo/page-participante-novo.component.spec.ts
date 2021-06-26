import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParticipanteNovoComponent } from './page-participante-novo.component';

describe('PageParticipanteNovoComponent', () => {
  let component: PageParticipanteNovoComponent;
  let fixture: ComponentFixture<PageParticipanteNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParticipanteNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParticipanteNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
