import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRegisterArabicComponent } from './supplier-register-arabic.component';

describe('SupplierRegisterArabicComponent', () => {
  let component: SupplierRegisterArabicComponent;
  let fixture: ComponentFixture<SupplierRegisterArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierRegisterArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierRegisterArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
