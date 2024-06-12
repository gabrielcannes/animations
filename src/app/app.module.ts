import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionsComponent } from './components/transitions/transitions.component';
import { AnimationsComponent } from './components/animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    TransitionsComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
