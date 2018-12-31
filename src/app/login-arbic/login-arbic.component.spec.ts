import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArbicComponent } from './login-arbic.component';

describe('LoginArbicComponent', () => {
  let component: LoginArbicComponent;
  let fixture: ComponentFixture<LoginArbicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginArbicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArbicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
