import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form-group-inner',
  templateUrl: './test-form-group-inner.component.html',
  styleUrls: ['./test-form-group-inner.component.scss']
})
export class TestFormGroupInnerComponent implements OnInit {

  testForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.testForm = this.fb.group({
      testName: '',
      testInner: '',
      testSeelected: [],
    });
  }

  ngOnInit() {
    console.log(this.testForm);
    console.log(this.testForm.get('testName'));
  }

}
