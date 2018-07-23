import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MultiSelectDialogComponent } from './multi-select-dialog/multi-select-dialog.component';
import { MultiSelectForm } from './model/MultiSelectForm.model';

/**
 * 多選元件.
 */
@Component({
  selector: 'txn-common-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnChanges {

  @Input() selectList = [];
  @Input() onSelectItems = [];

  selectData: MultiSelectForm = new MultiSelectForm;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnChanges() {
    this.selectData.selectList = this.selectList;
    this.selectData.onSelectItems = this.onSelectItems;
  }

  selectOnClick() {
    console.log('selectOnClick()');

    let dialogRef = this.dialog.open(MultiSelectDialogComponent, {
      width: '600px',
      height: '450px',
      data: this.selectData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('[u] dialog closed...');
    });
  }

}
