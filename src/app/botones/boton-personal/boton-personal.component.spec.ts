import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPersonalComponent } from './boton-personal.component';

describe('BotonPersonalComponent', () => {
  let component: BotonPersonalComponent;
  let fixture: ComponentFixture<BotonPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
