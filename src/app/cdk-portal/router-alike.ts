export const links = [
  {
    path: 'page-1',
    title: 'Page 1',
    loadComponent: () => import('./pages/page-1'),
  },
  {
    path: 'page-2',
    title: 'Page 2',
    loadComponent: () => import('./pages/page-2'),
  },
  {
    path: 'page-3',
    title: 'Page 3',
    loadComponent: () => import('./pages/page-3'),
  },
  {
    path: 'page-4',
    title: 'Page 4',
    loadComponent: () => import('./pages/page-4'),
  },
];
