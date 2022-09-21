import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRedesComponent } from './modal-redes.component';

describe('ModalRedesComponent', () => {
  let component: ModalRedesComponent;
  let fixture: ComponentFixture<ModalRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
