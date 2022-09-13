import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaFortalezasComponent } from './tarjeta-fortalezas.component';

describe('TarjetaFortalezasComponent', () => {
  let component: TarjetaFortalezasComponent;
  let fixture: ComponentFixture<TarjetaFortalezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaFortalezasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaFortalezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
