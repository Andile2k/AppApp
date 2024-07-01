import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Splash } from 'src/app/pages/splash/splash';
import { LoginPage } from './auth/loginPage/loginPage';
import { RegisterPage } from './auth/registerPage/registerPage';
import { Layout } from './pages/layout/layout';
import { HomePage } from './pages/homePage/homePage';

const routes: Routes = [
  {path: '', component: Splash},
  {path: 'login', component: LoginPage},
  {path: 'register', component: RegisterPage},
  {path: 'dash', component: Layout, children: [
    {path: 'home', component: HomePage},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
