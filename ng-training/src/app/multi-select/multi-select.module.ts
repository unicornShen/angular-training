import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatChipsModule } from '@angular/material';

import { MultiSelectComponent } from './multi-select.component';
import { MultiSelectDialogComponent } from './multi-select-dialog/multi-select-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatChipsModule,
  ],
  declarations: [MultiSelectComponent, MultiSelectDialogComponent],
  exports: [MultiSelectComponent],
  entryComponents: [MultiSelectDialogComponent]
})
export class MultiSelectModule { }
