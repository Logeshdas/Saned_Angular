import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormArabicComponent } from './register-form-arabic.component';

describe('RegisterFormArabicComponent', () => {
  let component: RegisterFormArabicComponent;
  let fixture: ComponentFixture<RegisterFormArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
