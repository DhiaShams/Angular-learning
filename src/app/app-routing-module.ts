import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Employees } from './components/employees/employees';

const routes: Routes = [
  {
    path:'',component: Signup
  },
  {
    path:'login',component:Login
  },
  {
    path:'dashboard',component:Dashboard
  },
  {
    path:'list',component:Employees
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
