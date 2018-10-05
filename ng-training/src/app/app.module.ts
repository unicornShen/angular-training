import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TestSelectModule } from './test-select/test-select.module';
import { MultiSelectModule } from './multi-select/multi-select.module';
import { TestSortHeaderModule } from './test-sort-header/test-sort-header.module';
import { TestDatepickerModule } from './test-datepicker/test-datepicker.module';
import { TestEventEmitterModule } from './test-event-emitter/test-event-emitter.module';
import { TestValidationModule } from './test-validation/test-validation.module';
import { TestDateModule } from './test-date/test-date.module';
import { TestFormGroupInnerModule } from './test-form-group-inner/test-form-group-inner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    TestSelectModule,
    MultiSelectModule,
    TestSortHeaderModule,
    TestDatepickerModule,
    TestEventEmitterModule,
    TestValidationModule,
    TestDateModule,
    TestFormGroupInnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
