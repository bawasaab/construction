import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'materials',
    loadComponent: () => import('./materials/materials.page').then( m => m.MaterialsPage)
  },
  {
    path: 'types',
    loadComponent: () => import('./types/types.page').then( m => m.TypesPage)
  },
];
