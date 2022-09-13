import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrabajoComponent } from './modal-trabajo.component';

describe('ModalTrabajoComponent', () => {
  let component: ModalTrabajoComponent;
  let fixture: ComponentFixture<ModalTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
