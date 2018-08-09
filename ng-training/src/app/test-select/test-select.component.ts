import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  isCheckRequire = false;

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
      selectA: '',
      selectB: '1',
      inputValue: '',
    });
  }

  ngOnInit() {
  }

  onSelectChange() {
    console.log(this.selectForm.value);
  }

}
