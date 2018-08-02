import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { TestSortHeaderComponent } from './test-sort-header.component';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
  ],
  declarations: [TestSortHeaderComponent],
  exports: [TestSortHeaderComponent]
})
export class TestSortHeaderModule { }
