import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapArabicComponent } from './sitemap-arabic.component';

describe('SitemapArabicComponent', () => {
  let component: SitemapArabicComponent;
  let fixture: ComponentFixture<SitemapArabicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemapArabicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
