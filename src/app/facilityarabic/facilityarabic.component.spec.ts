import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityarabicComponent } from './facilityarabic.component';

describe('FacilityarabicComponent', () => {
  let component: FacilityarabicComponent;
  let fixture: ComponentFixture<FacilityarabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityarabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityarabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
