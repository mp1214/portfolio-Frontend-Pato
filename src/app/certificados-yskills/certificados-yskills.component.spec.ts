import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosYskillsComponent } from './certificados-yskills.component';

describe('CertificadosYskillsComponent', () => {
  let component: CertificadosYskillsComponent;
  let fixture: ComponentFixture<CertificadosYskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosYskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosYskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
