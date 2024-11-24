import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'booking',
    loadComponent: () => import('./pages/catalog-page/catalog-page.component'),
    pathMatch: 'full'
  },
  {
    path: 'booking/:id',
    loadComponent: () => import('./pages/detail-page/detail-page.component'),
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full'
  }
];
