import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPatoComponent } from './imagen-pato.component';

describe('ImagenPatoComponent', () => {
  let component: ImagenPatoComponent;
  let fixture: ComponentFixture<ImagenPatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenPatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenPatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
