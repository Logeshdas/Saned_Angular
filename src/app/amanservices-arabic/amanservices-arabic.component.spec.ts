import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanservicesArabicComponent } from './amanservices-arabic.component';

describe('AmanservicesArabicComponent', () => {
  let component: AmanservicesArabicComponent;
  let fixture: ComponentFixture<AmanservicesArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmanservicesArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanservicesArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
