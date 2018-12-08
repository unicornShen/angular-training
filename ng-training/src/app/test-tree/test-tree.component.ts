import { Component, OnInit } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'app-test-tree',
  templateUrl: './test-tree.component.html',
  styleUrls: ['./test-tree.component.scss']
})
export class TestTreeComponent implements OnInit {

  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    settings: {
      static: true,
      rightMenu: false,
    },
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
