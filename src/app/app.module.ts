import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PersonComponent } from './app.component';


@NgModule({
  declarations: [
    PersonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PersonComponent]
})
export class AppModule { }
