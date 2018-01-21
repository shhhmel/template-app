import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundCmpComponent } from './page-not-found-cmp.component';

describe('PageNotFoundCmpComponent', () => {
  let component: PageNotFoundCmpComponent;
  let fixture: ComponentFixture<PageNotFoundCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
