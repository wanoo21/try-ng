import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./app-shell/app-shell'),
  },
  {
    path: 'signal-form',
    loadComponent: () => import('./signal-form/signal-form'),
  },
];
