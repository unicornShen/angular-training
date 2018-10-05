import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormGroupInnerComponent } from './test-form-group-inner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestInnerComponent } from './test-inner/test-inner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TestFormGroupInnerComponent, TestInnerComponent],
  exports: [TestFormGroupInnerComponent]
})
export class TestFormGroupInnerModule { }
