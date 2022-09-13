import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonlogoutComponent } from './botonlogout.component';

describe('BotonlogoutComponent', () => {
  let component: BotonlogoutComponent;
  let fixture: ComponentFixture<BotonlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
