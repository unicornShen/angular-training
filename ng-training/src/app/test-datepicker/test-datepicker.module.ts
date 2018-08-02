import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { TestDatepickerComponent } from './test-datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot(),
  ],
  declarations: [TestDatepickerComponent],
  exports: [TestDatepickerComponent]
})
export class TestDatepickerModule { }
