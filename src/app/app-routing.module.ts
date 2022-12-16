import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'sign-up', pathMatch: 'full', component: SignupComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
