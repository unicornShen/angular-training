import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTreeComponent } from './test-tree.component';
import { TreeModule } from 'ng2-tree';

@NgModule({
  imports: [
    CommonModule,
    TreeModule,
  ],
  declarations: [TestTreeComponent],
  exports: [TestTreeComponent]
})
export class TestTreeModule { }
