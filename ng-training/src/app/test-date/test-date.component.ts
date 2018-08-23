import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-date',
  templateUrl: './test-date.component.html',
  styleUrls: ['./test-date.component.scss']
})
export class TestDateComponent implements OnInit {

  testDateFormat: any = {};

  okFormat: any = {};

  constructor() { }

  ngOnInit() {
    let date = new Date;
    let date2 = new Date(2017, 11, 22); // -1 day
    let date4 = new Date("20171122"); // null
    let date5 = new Date("2017/11/22"); // -1 day

    // OK.
    let date3 = new Date(1511308800000);
    let date6 = new Date("2017-11-22");

    this.testDateFormat = {
      date: date,
      date2: date2,
      date3: date3,
      date4: date4,
      date5: date5,
      date6: date6,
    };

    console.log(new Date('1970-01-01').getTime());

    const nDate = new Date();
    const dateStr = nDate.getFullYear() + '/' + (nDate.getMonth() + 1) + '/' + nDate.getDate();

    const ans: number = new Date('2018/8/24').getTime() - new Date(dateStr).getTime();
    console.log(ans);
    console.log(ans / 86400000); // 算差幾日

    const y: number = Number.parseInt(ans / 86400000 / 365 + '');
    console.log('y = ' + y);
    const d: number = (ans / 86400000) % 365;
    console.log('d = ' + d);


    // Trace ok date.
    this.okFormat = date3;
    console.log("---------------");
    console.log(this.okFormat);
    console.log(this.okFormat.getFullYear()); // 2017
    console.log(this.okFormat.getMonth()); // 10
    console.log(this.okFormat.getDate()); // 22
    console.log(this.okFormat.getTime()); // 1511308800000
    console.log("---------------");


  }

}

/*
 {
   "date": "2017-12-27T06:51:57.485Z",
   "date2": "2017-12-21T16:00:00.000Z",
   "date3": "2017-11-22T00:00:00.000Z",
   "date4": null,
   "date5": "2017-11-21T16:00:00.000Z",
   "date6": "2017-11-22T00:00:00.000Z"
  }
*/
