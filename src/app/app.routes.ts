import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'firt',
    loadChildren: () =>
      import('./module/firt/firt.module').then((m) => m.FirtModule),
  },
  {
    path: 'second',
    loadChildren: () =>
      import('./module/second/second.module').then((m) => m.SecondModule),
  },
  { path: '', redirectTo: 'firt', pathMatch: 'full' },
];
