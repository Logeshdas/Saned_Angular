import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBgComponent } from './nav-bg.component';

describe('NavBgComponent', () => {
  let component: NavBgComponent;
  let fixture: ComponentFixture<NavBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
