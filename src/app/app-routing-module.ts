import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

const routes: Routes = [
  {
    path:'',component: Signup
  },
  {
    path: 'login', component: Login
  },
  {
    path: 'dashboard', component:Dashboard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
