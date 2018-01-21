import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesTableCmpComponent } from './templates-table-cmp.component';

describe('TemplatesTableCmpComponent', () => {
  let component: TemplatesTableCmpComponent;
  let fixture: ComponentFixture<TemplatesTableCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesTableCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesTableCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
