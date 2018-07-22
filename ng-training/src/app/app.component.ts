import { Component } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectList = [
    {key: '1', value: 'A'},
    {key: '2', value: 'B'},
    {key: '3', value: 'C'},
    {key: '4', value: 'D'},
    {key: '5', value: 'E'},
  ];

  selectItems = [];

}
