import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalamaservicesComponent } from './salamaservices.component';

describe('SalamaservicesComponent', () => {
  let component: SalamaservicesComponent;
  let fixture: ComponentFixture<SalamaservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalamaservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalamaservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
