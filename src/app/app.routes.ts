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
    path: 'category',
    loadComponent: () => import('./category/category.page').then( m => m.CategoryPage)
  },
  {
    path: 'category-master',
    loadComponent: () => import('./category/category-master/category-master.page').then( m => m.CategoryMasterPage)
  },
  {
    path: 'material-master',
    loadComponent: () => import('./materials/material-master/material-master.page').then( m => m.MaterialMasterPage)
  },
];
