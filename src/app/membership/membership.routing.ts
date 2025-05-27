import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard/dashboard.page.component";
import { PlanningPageComponent } from "./planning/planning.page.component";
import { ProfilePageComponent } from "./profile/profile.page.component";
import { SettingsPageComponent } from "./settings/settings.page.component";
import { WorkdayPageComponent } from "./workday/workday.page.component";

export const membershipRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        title: 'Dashboard',
    },
    {
        path: 'planning',
        component: PlanningPageComponent,
        title: 'Planning',
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        title: 'Profile',
    },
    {
        path: 'settings',
        component: SettingsPageComponent,
        title: 'Settings',
    },
    {
        path: 'workday',
        component: WorkdayPageComponent,
        title: 'Workday',
    },
]