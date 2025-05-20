import { Routes } from '@angular/router';
import { HomepageComponent } from './visitor/homepage/homepage.component';
import { SignupPageComponent } from './visitor/signup/signup.page.component';
import { DashboardPageComponent } from './membership/dashboard/dashboard.page.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomepageComponent,
        title: 'Productivity Planner'
    },
    {
        path: 'signup',
        component: SignupPageComponent,
        title: 'Signup'
    },
    {
        path: 'app/dashboard',
        component: DashboardPageComponent,
        title: 'Dashboard',
    },

];
