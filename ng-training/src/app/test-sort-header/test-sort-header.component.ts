import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-test-sort-header',
  templateUrl: './test-sort-header.component.html',
  styleUrls: ['./test-sort-header.component.scss']
})
export class TestSortHeaderComponent implements OnInit {

  // ----------------------------------
  // ---- Declare.
  // ----------------------------------

  orderByCloumn: string[] = [];

  // ----------------------------------
  // ---- Init.
  // ----------------------------------

  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];

  sortedData;

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit() {

  }

  // ----------------------------------
  // ---- Button.
  // ----------------------------------

  /** 欄位排序. */
  sortData(sort: Sort) {
    console.log(sort);
    // if (this.queryForm.pageCheckFlag === 'S') {
    //   return;
    // }

    // this.queryForm.orderByColumn = this.orderBy(this.queryForm.orderByColumn, sort);
    // this.reQuery.emit();

    this.orderBy(this.orderByCloumn, sort);
  }

  /**
   * Generate order by column string.
   */
  orderBy(sortArray: string[], sort: Sort): string {
    const sortColumn: string[] = sortArray || [];

    if (!sort || !sort.active) {
      return;
    }

    const columnName = sort.active;
    switch (sort.direction) {
      case '':
      sortColumn.filter((value, index, arr) => {
        const valueF = value.replace(' desc', '').replace(' asc', '');
        if (valueF === columnName) {
          sortColumn.splice(index, 1);
        }
        return sortColumn;
      })
      break;

      default:
        if (!this.contains(sortColumn, columnName) ) {
          sortColumn.push(columnName);

        } else {
          sortColumn.filter((value, index, arr) => {
            const valueF = value.replace(' desc', '').replace(' asc', '');
            if (valueF === columnName) {
              sortColumn.splice(index, 1);
            }
            return sortColumn;
          })

          sortColumn.push(columnName + ' ' + sort.direction);
        }
      break;
    }
    console.log(sortColumn);

    let resultStr = '';
    if (sortColumn.length > 0) {
      for (let index = sortColumn.length; index > 0; index--) {
        resultStr += sortColumn[index - 1];

        if(index - 1 != 0){
          resultStr += ', ';
        }

      }
    }

    console.log(resultStr);
    return resultStr;
  }

  contains (list, key: string) {
    let isContains = false;
    const colName = key.replace(' desc', '').replace(' asc', '');

    list.forEach(row => {
      const rowName = row.replace(' desc', '').replace(' asc', '');
      if (rowName === colName) {
        isContains = true;
      }
    });

    return isContains;
  }

}
