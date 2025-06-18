import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';

const routes: Routes = [
  {
    path:'',component: Signup
  },
  {
    path: 'login', component: Login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
