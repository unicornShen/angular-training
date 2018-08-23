import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDateComponent } from './test-date.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestDateComponent],
  exports: [TestDateComponent]
})
export class TestDateModule { }
