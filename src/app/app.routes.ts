import { Routes } from '@angular/router';
import { ShellMembershipLayoutComponent } from './membership/core/shell-membership/shell-membership.layout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./visitor/homepage/homepage.component').then(c => c.HomepageComponent),
    title: 'Productivity Planner',
  },
  {
    path: 'login',
    loadComponent: () => import('./visitor/login/login.page.component').then(c => c.LoginPageComponent),
    title: 'Login'
  },
  {
    path: 'signup',
    loadComponent: () => import('./visitor/signup/signup.page.component').then(c => c.SignupPageComponent),
    title: 'Signup',
  },
  {
    path: 'app',
    title: 'Productivity Planner',
    component: ShellMembershipLayoutComponent,
    children: [
{
    path: 'dashboard',
    loadComponent: () => import('./membership/dashboard/dashboard.page.component').then(c => c.DashboardPageComponent),
    title: 'Dashboard',
  },
  {
    path: 'planning',
    loadComponent: () => import('./membership/planning/planning.page.component').then(c => c.PlanningPageComponent),
    title: 'Planning',
  },
  {
    path: 'profile',
    loadComponent: () => import('./membership/profile/profile.page.component').then(c => c.ProfilePageComponent),
    title: 'Profile',
  },
  {
    path: 'settings',
    loadComponent: () => import('./membership/settings/settings.page.component').then(c => c.SettingsPageComponent),
    title: 'Settings',
  },
  {
    path: 'workday',
    loadComponent: () => import('./membership/workday/workday.page.component').then(c => c.WorkdayPageComponent),
    title: 'Workday',
  },
    ]
  },
];