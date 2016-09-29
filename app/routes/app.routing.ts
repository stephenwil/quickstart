import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent }        from '../components/hero.component';
import { HeroDetailComponent }  from '../components/hero-detail.component';
import { DashboardComponent }   from '../components/dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
