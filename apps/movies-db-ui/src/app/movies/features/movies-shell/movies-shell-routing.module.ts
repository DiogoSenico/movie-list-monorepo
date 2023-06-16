import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesRankingListComponent } from '../movies-ranking-list/movies-ranking-list.component';
import { MoviesShellComponent } from './movies-shell.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesShellComponent,
    children: [
      {
        path: '',
        component: MoviesRankingListComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesShellRoutingModule {}
