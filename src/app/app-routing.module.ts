import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoPasaralDashboardService } from './services/no-pasaral-dashboard.service';
import { NoPasaralLoginService } from './services/no-pasaral-login.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[NoPasaralDashboardService] },
  { path: 'user/register', component: RegisterComponent, canActivate:[NoPasaralDashboardService] },
  { path: 'dashboard', component: DashboardComponent , canActivate:[NoPasaralLoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
