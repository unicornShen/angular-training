import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestSelectComponent } from './test-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [TestSelectComponent],
  exports: [TestSelectComponent]
})
export class TestSelectModule { }
