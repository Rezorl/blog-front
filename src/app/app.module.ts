import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarModule} from './nav-bar';
import {StoreModule} from '@ngrx/store';
import {AppConfigModule} from './config';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    NavBarModule,
    AppConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
