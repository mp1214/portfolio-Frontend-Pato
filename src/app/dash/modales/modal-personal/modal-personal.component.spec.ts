import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonalComponent } from './modal-personal.component';

describe('ModalPersonalComponent', () => {
  let component: ModalPersonalComponent;
  let fixture: ComponentFixture<ModalPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
