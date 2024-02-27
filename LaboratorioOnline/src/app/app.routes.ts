import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Iniciar Sesion',
        loadComponent: () => import('./pages/login/login.component'),
    },
    {
        path: 'resultado',
        title: 'Iniciar Sesion',
        loadComponent: () => import('./pages/resultado/resultado.component'),
    },
];
