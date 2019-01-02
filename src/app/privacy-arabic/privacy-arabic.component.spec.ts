import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyArabicComponent } from './privacy-arabic.component';

describe('PrivacyArabicComponent', () => {
  let component: PrivacyArabicComponent;
  let fixture: ComponentFixture<PrivacyArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
