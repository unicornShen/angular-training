import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  selectForm: FormGroup;
  selectItmes = [
    {key: '1', value: 'A'},
    {key: '2', value: 'B'},
    {key: '3', value: 'C'},
    {key: '4', value: 'D'},
    {key: '5', value: 'E'},
  ];

  constructor(
    private fb: FormBuilder,
  ) {
    this.createSelectForm();
  }

  createSelectForm() {
    this.selectForm = this.fb.group({
      selectA: '1'
    });
  }

  ngOnInit() {
  }

  onSelectChange() {
    console.log(this.selectForm.value);
  }

}
