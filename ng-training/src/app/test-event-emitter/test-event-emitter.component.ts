import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-event-emitter',
  templateUrl: './test-event-emitter.component.html',
  styleUrls: ['./test-event-emitter.component.scss']
})
export class TestEventEmitterComponent implements OnInit {

  @Output() testEmit = new EventEmitter();
  @Output() testEmpty = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  testEmitButton() {
    console.log('[u] TestEventEmitterComponent.testEmitButton()');
    console.log(this.testEmpty);
    console.log(this.testEmit);

    console.log(this.testEmpty.observers.length);
    console.log(this.testEmit.observers.length);

    if (this.testEmpty.observers.length) {
      console.log('test error!!')
    }

    if (this.testEmit.observers.length) {
      this.testEmit.emit('test data.');
    }
  }

  testMethod() {
    console.log('[t] testMethod()');
  }

}
