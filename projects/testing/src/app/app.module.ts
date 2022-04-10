import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkIdealtimeModule } from 'projects/ak-idealtime/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AkIdealtimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
