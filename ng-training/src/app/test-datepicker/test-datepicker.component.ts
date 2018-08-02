import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatepickerVo } from './model/DatepickerVo.model';

@Component({
  selector: 'app-test-datepicker',
  templateUrl: './test-datepicker.component.html',
  styleUrls: ['./test-datepicker.component.scss'],
  providers: [DatePipe]
})
export class TestDatepickerComponent implements OnChanges {
  private isDatePickerShow = false;

  @Input() dt: Date;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() showTwYear = false;

  @Input() dateFormat = 'yyyy/MM/dd';
  @Input() dateObj: DatepickerVo;

  @Input() isDisabled = false;
  @Input() isRequired = false;
  @Input() isHideIcon = false;

  @Output() onChange = new EventEmitter<string>();

  constructor(
    private dp: DatePipe,
  ) {}

  /**
   * On input change.
   */
  ngOnChanges() {
    console.log('[t] F12DatepickerComponent.ngOnChanges()');

    if (this.dateObj && this.dateObj.dateValue) {
      this.dt = new Date(this.dateObj.dateValue);

      setTimeout(() => {
        this.dateObj.dateValue = this.dp.transform(this.dateObj.dateValue, this.dateFormat);
      }, 300);
    }
  }

  /**
   * 當使用者透過日期選擇器選一個日期時
   */
  selectionDone(date: Date): void {
    this.hideDatePicker();
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    this.dateObj.date = d;
    this.dateObj.dateValue = this.dp.transform(d, this.dateFormat);

    this.onChange.emit(this.dateObj.dateValue);
  }

  /**
   * 隱藏日期選擇器
   */
  private hideDatePicker() {
    setTimeout(() => {
      this.isDatePickerShow = false;
    }, 300);
  }

  /**
   * 開啟或關閉日期選擇器
   */
  toggle(): void {
    this.isDatePickerShow = !this.isDatePickerShow;
  }

  /**
   * 判斷日期選擇器是否要出現
   */
  doesDatepickerShow(): boolean {
    return this.isDatePickerShow;
  }

  /**
   * Get data value by format.
   */
  getDateValue(): string {
    return this.dp.transform(this.dt, this.dateFormat);
  }

  /** Check date by format. */
  onBlurCheck(value) {
    try {
      if (value) {
        this.dateObj.dateValue = this.dp.transform(value, this.dateFormat);

      } else {
        this.dateObj.dateValue = '';
      }

    } catch (error) {
      this.dateObj.dateValue = '';
      // this.alertService.showWarning('日期格式錯誤');
      console.log('日期格式錯誤')
    }

  }

}
