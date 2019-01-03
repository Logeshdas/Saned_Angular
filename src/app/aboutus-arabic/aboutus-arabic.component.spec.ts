import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusArabicComponent } from './aboutus-arabic.component';

describe('AboutusArabicComponent', () => {
  let component: AboutusArabicComponent;
  let fixture: ComponentFixture<AboutusArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
