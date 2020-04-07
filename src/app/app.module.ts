import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

import { FormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';

import {DataApiService} from './services/data-api.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoPasaralLoginService } from './services/no-pasaral-login.service';
import { AuthService } from './services/auth.service';
import { NoPasaralDashboardService } from './services/no-pasaral-dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    DataApiService, 
    NoPasaralDashboardService, 
    NoPasaralLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
