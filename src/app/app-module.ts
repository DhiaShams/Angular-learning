import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ReactiveFormsModule } from '@angular/forms';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { HttpClientModule } from '@angular/common/http';
import { Employees } from './components/employees/employees';
import { Layout } from './components/layout/layout';

@NgModule({
  declarations: [
    App,
    Signup,
    Login,
    Dashboard,
    Employees,
    Layout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
