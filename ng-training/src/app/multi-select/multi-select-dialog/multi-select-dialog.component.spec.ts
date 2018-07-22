import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectDialogComponent } from './multi-select-dialog.component';

describe('MultiSelectDialogComponent', () => {
  let component: MultiSelectDialogComponent;
  let fixture: ComponentFixture<MultiSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
