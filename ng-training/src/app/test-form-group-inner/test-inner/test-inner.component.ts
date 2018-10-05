import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-inner',
  templateUrl: './test-inner.component.html',
  styleUrls: ['./test-inner.component.scss']
})
export class TestInnerComponent implements OnChanges {

  @Input() formControl?: FormControl;

  constructor() { }

  ngOnChanges() {
    console.log(this.formControl)
  }

  valueOnChange(value: any) {
    this.formControl.patchValue(value);
  }

}
