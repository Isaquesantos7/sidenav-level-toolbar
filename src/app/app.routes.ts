import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductsComponent } from './views/products/products.component';
import { StatisctsComponent } from './views/statiscts/statiscts.component';
import { CoupensComponent } from './views/coupens/coupens.component';
import { PageComponent } from './views/page/page.component';
import { MediaComponent } from './views/media/media.component';
import { SettingsComponent } from './views/settings/settings.component';
import { CreateCoupensComponent } from './views/coupens/create-coupens/create-coupens.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard', 
        pathMatch: 'full', 
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products'
    },
    {
        path: 'statistics',
        component: StatisctsComponent,
        title: 'Statistics'
    },
    {
        path: 'coupens',
        component: CoupensComponent,
        title: 'Coupens'
    },
    {
        path: 'create/coupens',
        component: CreateCoupensComponent,
        title: 'Create Coupens'
    },
    {
        path: 'pages',
        component: PageComponent,
        title: 'Pages'
    },
    {
        path: 'media',
        component: MediaComponent,
        title: 'Media'
    },
    {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings'
    },
];
