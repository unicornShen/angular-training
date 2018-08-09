import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestSelectComponent } from './test-select.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  declarations: [TestSelectComponent],
  exports: [TestSelectComponent]
})
export class TestSelectModule { }
