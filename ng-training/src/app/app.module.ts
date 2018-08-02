import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TestSelectModule } from './test-select/test-select.module';
import { MultiSelectModule } from './multi-select/multi-select.module';
import { TestSortHeaderModule } from './test-sort-header/test-sort-header.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    TestSelectModule,
    MultiSelectModule,
    TestSortHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
