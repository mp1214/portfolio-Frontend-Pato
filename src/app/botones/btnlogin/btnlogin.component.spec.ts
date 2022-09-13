import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnloginComponent } from './btnlogin.component';

describe('BtnloginComponent', () => {
  let component: BtnloginComponent;
  let fixture: ComponentFixture<BtnloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
