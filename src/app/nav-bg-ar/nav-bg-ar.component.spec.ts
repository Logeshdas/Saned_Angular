import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBgArComponent } from './nav-bg-ar.component';

describe('NavBgArComponent', () => {
  let component: NavBgArComponent;
  let fixture: ComponentFixture<NavBgArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBgArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBgArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
