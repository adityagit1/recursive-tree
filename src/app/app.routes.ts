import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./tree-component/tree-component').then(m => m.TreeComponent)
    }
];
