import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCmpComponent } from './template-cmp.component';

describe('TemplateCmpComponent', () => {
  let component: TemplateCmpComponent;
  let fixture: ComponentFixture<TemplateCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
