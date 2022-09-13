import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeMiComponent } from './acercade-mi.component';

describe('AcercadeMiComponent', () => {
  let component: AcercadeMiComponent;
  let fixture: ComponentFixture<AcercadeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
