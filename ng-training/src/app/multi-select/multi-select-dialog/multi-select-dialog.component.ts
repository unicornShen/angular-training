import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MultiSelectForm } from '../model/MultiSelectForm.model';
import { SelectItemForm } from '../model/SelectItemForm.model';

@Component({
  selector: 'txn-common-multi-select-dialog',
  templateUrl: './multi-select-dialog.component.html',
  styleUrls: ['./multi-select-dialog.component.scss']
})
export class MultiSelectDialogComponent implements OnInit {

  selectData: MultiSelectForm;

  constructor(
    public dialogRef: MatDialogRef<MultiSelectDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public data: MultiSelectForm
  ) { }

  ngOnInit() {
    this.selectData = this.data;
  }

  /**
   * 新增選項﹒
   */
  addItem(item: SelectItemForm) {
    console.log('addItem()');

    const index = this.data.onSelectItems.indexOf(item);
    if(index < 0) {
      this.data.onSelectItems.push(item);

      item.onSelected = true;

      // const selectListIndex = this.data.selectList.indexOf(item);
      // if (selectListIndex >= 0) {
      //   this.data.selectList[selectListIndex].onSelected = true;
      // }
    }
  }

  /**
   * 刪除選項.
   */
  remove(item: SelectItemForm) {
    console.log('remove()');

    const index = this.data.onSelectItems.indexOf(item);
    if (index >= 0) {
      this.data.onSelectItems.splice(index, 1);

      const selectListIndex = this.data.selectList.indexOf(item);
      if (selectListIndex >= 0) {
        this.data.selectList[selectListIndex].onSelected = false;
      }
    }
  }

  /**
   * 關閉.
   */
  close() {
    this.dialogRef.close();
  }

}
