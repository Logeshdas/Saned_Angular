import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalamaservicesArabicComponent } from './salamaservices-arabic.component';

describe('SalamaservicesArabicComponent', () => {
  let component: SalamaservicesArabicComponent;
  let fixture: ComponentFixture<SalamaservicesArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalamaservicesArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalamaservicesArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
