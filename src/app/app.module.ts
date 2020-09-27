import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkshayComponent } from './akshay/akshay.component';
import { AartiComponent } from './aarti/aarti.component';
import { AkaarComponent } from './akaar/akaar.component';

@NgModule({
  declarations: [
    AppComponent,
    AkshayComponent,
    AartiComponent,
    AkaarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
