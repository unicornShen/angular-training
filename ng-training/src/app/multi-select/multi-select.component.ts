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

  @Input() title: string; // 表頭.
  @Input() selectList = []; // 來源清單.
  @Input() onSelectItems = []; // 目標清單.

  @Input() isRequired = false;

  selectData: MultiSelectForm = new MultiSelectForm;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnChanges() {
    this.selectData.title = this.title;
    this.selectData.selectList = this.selectList;
    this.selectData.onSelectItems = this.onSelectItems;
  }

  /**
   * 開啟選擇視窗.
   */
  selectOnClick() {
    console.log('selectOnClick()');

    let dialogRef = this.dialog.open(MultiSelectDialogComponent, {
      width: '600px',
      // height: '450px',
      data: this.selectData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('[u] dialog closed...');
    });
  }

  /**
   * 取得顯示文字.
   */
  getWording(): string {
    if (this.onSelectItems.length > 0) {
      return '已選擇 ' + this.onSelectItems.length + '項條件';

    } else {
      return '請選擇...';
    }
  }

}
