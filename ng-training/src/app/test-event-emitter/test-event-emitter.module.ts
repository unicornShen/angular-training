import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestEventEmitterComponent } from './test-event-emitter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestEventEmitterComponent],
  exports: [TestEventEmitterComponent]
})
export class TestEventEmitterModule { }
