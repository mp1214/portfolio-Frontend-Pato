import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortalezasydebilidadesComponent } from './fortalezasydebilidades.component';

describe('FortalezasydebilidadesComponent', () => {
  let component: FortalezasydebilidadesComponent;
  let fixture: ComponentFixture<FortalezasydebilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortalezasydebilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortalezasydebilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
