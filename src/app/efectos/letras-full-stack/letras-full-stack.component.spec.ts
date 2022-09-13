import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasFullStackComponent } from './letras-full-stack.component';

describe('LetrasFullStackComponent', () => {
  let component: LetrasFullStackComponent;
  let fixture: ComponentFixture<LetrasFullStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrasFullStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetrasFullStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
