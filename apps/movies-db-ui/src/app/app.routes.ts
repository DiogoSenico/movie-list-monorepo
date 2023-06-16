import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ranking',
    loadChildren: () =>
      import('./movies/features/movies-shell/movies-shell.module').then(
        (m) => m.MoviesShellModule
      ),
  },
  {
    path: '**',
    redirectTo: 'ranking',
    pathMatch: 'prefix',
  },
];
