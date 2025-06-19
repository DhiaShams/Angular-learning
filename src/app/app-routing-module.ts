import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Employees } from './components/employees/employees';
import { Layout } from './components/layout/layout';

const routes: Routes = [
  { path: 'signup', component: Signup },
  { path: '', component: Login },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'list', component: Employees },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
