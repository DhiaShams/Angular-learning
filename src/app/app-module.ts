import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

@NgModule({
  declarations: [
    App,
    Signup,
    Login,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
