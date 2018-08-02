import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDatepickerComponent } from './test-datepicker.component';

describe('TestDatepickerComponent', () => {
  let component: TestDatepickerComponent;
  let fixture: ComponentFixture<TestDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
