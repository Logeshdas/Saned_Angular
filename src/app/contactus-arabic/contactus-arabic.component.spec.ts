import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusArabicComponent } from './contactus-arabic.component';

describe('ContactusArabicComponent', () => {
  let component: ContactusArabicComponent;
  let fixture: ComponentFixture<ContactusArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
