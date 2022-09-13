import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosExperienciaComponent } from './estudios-experiencia.component';

describe('EstudiosExperienciaComponent', () => {
  let component: EstudiosExperienciaComponent;
  let fixture: ComponentFixture<EstudiosExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
