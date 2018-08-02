import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { DatepickerVo } from './test-datepicker/model/DatepickerVo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  selectList = [
    {key: '100', value: 'A**'},
    {key: '200', value: 'B**'},
    {key: '300', value: 'C**'},
    {key: '400', value: 'D**'},
    {key: '500', value: 'E**'},
    {key: '600', value: 'F**'},
    {key: '700', value: 'G**'},
    {key: '800', value: 'H**'},
    {key: '900', value: 'I**'},
    {key: '100', value: 'J**'},
    {key: '110', value: 'K**'},
    {key: '120', value: 'L**'},
    {key: '130', value: 'M**'},
    {key: '140', value: 'O**'},
    {key: '150', value: 'P**'},
    {key: '160', value: 'Q**'},
    {key: '170', value: 'R**'},
    {key: '180', value: 'W**'},
    {key: '190', value: 'X**'},
    {key: '200', value: 'Y**'},
    {key: '210', value: 'Z**'},
    {key: '100', value: 'A**'},
    {key: '200', value: 'B**'},
    {key: '300', value: 'C**'},
    {key: '400', value: 'D**'},
    {key: '500', value: 'E**'},
    {key: '600', value: 'F**'},
    {key: '700', value: 'G**'},
    {key: '800', value: 'H**'},
    {key: '900', value: 'I**'},
    {key: '100', value: 'J**'},
    {key: '110', value: 'K**'},
    {key: '120', value: 'L**'},
    {key: '130', value: 'M**'},
    {key: '140', value: 'O**'},
    {key: '150', value: 'P**'},
    {key: '160', value: 'Q**'},
    {key: '170', value: 'R**'},
    {key: '180', value: 'W**'},
    {key: '190', value: 'X**'},
    {key: '200', value: 'Y**'},
    {key: '210', value: 'Z**'},
  ];

  selectItems = [];

  dateObj: DatepickerVo = new DatepickerVo;



  ngOnInit(): void {
    this.dateObj.dateValue= '2018/01/02';
  }
}
