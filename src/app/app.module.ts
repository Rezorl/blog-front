import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateConfigModule} from './config';
import {HttpClientModule} from '@angular/common/http';
import {NavBarModule} from './nav-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateConfigModule,
    HttpClientModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
