import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-test-validation',
  templateUrl: './test-validation.component.html',
  styleUrls: ['./test-validation.component.scss']
})
export class TestValidationComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.editForm = this.fb.group({
      inputA: new FormControl('', [Validators.required]),
      inputB: '',
      inputC: new FormControl('', [this.checkInputC(/\S/)]), // \S 非空白字元
      inputD: new FormControl('', [this.checkInputD()]),
      inputE: '',
    });
  }

  ngOnInit() {
  }

  setRequiredButton() {
    // this.editForm.get('inputB').setValidators([Validators.required]); // XX
    console.log(this.editForm.get('inputB').valid);
    console.log(this.editForm.get('inputB').invalid);

    if (this.editForm.get('inputB').valid) {
      this.editForm.setControl('inputB', new FormControl(this.editForm.value.inputB, [Validators.required]));

    } else {
      this.editForm.setControl('inputB', new FormControl(this.editForm.value.inputB, []));
    }
  }

  thisEditForm() {
    console.log(this.editForm);
  }

  checkInputC(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      console.log('[t] checkInputC()');
      console.log(control.value);

      const forbidden = nameRe.test(control.value);
      console.log('[t] forbidden: ' + forbidden);

      return forbidden ? null : {'forbiddenName': {value: control.value}};
    };
  }

  checkInputD(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      console.log('[t] checkInputD()');

      if (this.editForm) {
        console.log(this.editForm.get('inputD').value);

        if (this.editForm.get('inputD').value) {
          return null;

        } else {
          // 在這對 FormGroup 做操作會造成無窮迴圈.
          // this.editForm.setControl('inputE', new FormControl(this.editForm.value.inputE, [Validators.required]));
          return {'forbiddenName': {value: control.value}}
        }
      }
    };
  }

  // UTF8 實際長度計算
  getStrLeng(str: string): number {
    let realLength = 0;
    let len = str.length;
    let charCode = -1;

    for (let i = 0; i < len; i) {
      charCode = str.charCodeAt(i);

      if (charCode >= 0 && charCode <=128) {
        realLength = 1;

      } else {
        // 如果是中文則長度加3
        realLength = 3;
      }

    }

    return realLength;
  }

}
