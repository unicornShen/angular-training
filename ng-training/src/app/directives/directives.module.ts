import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredDirective } from './required/required.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequiredDirective],
  exports: [RequiredDirective]
})
export class DirectivesModule { }
