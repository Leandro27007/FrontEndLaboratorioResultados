import { Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './service/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import ResultadoComponent from './pages/resultado/resultado.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'login' , pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate: [authGuard]
            },
            {
                path:'resultado',
                component:ResultadoComponent,
                canActivate: [authGuard]
            },
            {
                path:'logout',
                component:ResultadoComponent,
                canActivate: [authGuard]
            }
        ]
    }
];
