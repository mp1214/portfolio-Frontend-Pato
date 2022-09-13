import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionacercademiComponent } from './seccionacercademi.component';

describe('SeccionacercademiComponent', () => {
  let component: SeccionacercademiComponent;
  let fixture: ComponentFixture<SeccionacercademiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionacercademiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionacercademiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
