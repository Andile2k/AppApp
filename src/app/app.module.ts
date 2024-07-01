import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Desktop } from './pages/desktop/desktop';
import { Layout } from './pages/layout/layout';
import { LoginPage } from './auth/loginPage/loginPage';
import { RegisterPage } from './auth/registerPage/registerPage';
import { Tabs } from './ui/tabs/tabs';

@NgModule({
  declarations: [
    AppComponent,
    Desktop,
    Layout,
    LoginPage,
    RegisterPage,
    Tabs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
