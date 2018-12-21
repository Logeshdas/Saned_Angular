import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanservicesComponent } from './amanservices.component';

describe('AmanservicesComponent', () => {
  let component: AmanservicesComponent;
  let fixture: ComponentFixture<AmanservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmanservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmanservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
