import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCertificadosComponent } from './modal-certificados.component';

describe('ModalCertificadosComponent', () => {
  let component: ModalCertificadosComponent;
  let fixture: ComponentFixture<ModalCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCertificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
