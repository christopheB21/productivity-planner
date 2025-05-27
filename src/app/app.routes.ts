import { Routes } from '@angular/router';
import { ShellMembershipLayoutComponent } from './membership/core/shell-membership/shell-membership.layout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./visitor/homepage/homepage.component').then(component => component.HomepageComponent),
    title: 'Productivity Planner',
  },
  {
    path: 'login',
    loadComponent: () => import('./visitor/login/login.page.component').then(component => component.LoginPageComponent),
    title: 'Login'
  },
  {
    path: 'signup',
    loadComponent: () => import('./visitor/signup/signup.page.component').then(component => component.SignupPageComponent),
    title: 'Signup',
  },
  {
    path: 'app',
    title: 'Productivity Planner',
    component: ShellMembershipLayoutComponent,
    loadChildren: () => import('./membership/membership.routing').then(routes => routes.membershipRoutes),
  },
];