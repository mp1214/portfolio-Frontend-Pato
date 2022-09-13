import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasEfectosComponent } from './letras-efectos.component';

describe('LetrasEfectosComponent', () => {
  let component: LetrasEfectosComponent;
  let fixture: ComponentFixture<LetrasEfectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrasEfectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetrasEfectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
