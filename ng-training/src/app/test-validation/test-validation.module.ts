import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestValidationComponent } from './test-validation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [TestValidationComponent],
  exports: [TestValidationComponent]
})
export class TestValidationModule { }
