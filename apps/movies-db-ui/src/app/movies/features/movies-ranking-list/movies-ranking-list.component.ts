import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from '../../ui/movie-details/movie-details.component';
import { MovieTableComponent } from '../../ui/movie-table/movie-table.component';
import { TableFiltersComponent } from '@movies/ui/table-filters/table-filters.component';
import { ModalComponent } from '@shared/ui/modal/modal.component';
import { Filter } from '@movies/definitions/filter.model';
import { BehaviorSubject, first, firstValueFrom, map, switchMap } from 'rxjs';
import { MoviesApiService } from '@movies/services/movies-api/movies-api.service';
import { Movie } from '@movies/definitions/movie.model';

@Component({
  selector: 'senikorg-movies-ranking-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieDetailsComponent,
    MovieTableComponent,
    TableFiltersComponent,
    ModalComponent,
  ],
  templateUrl: './movies-ranking-list.component.html',
  styleUrls: ['./movies-ranking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesRankingListComponent {
  public selectedFilterData$ = new BehaviorSubject<Filter | null>(null);

  public selectedMovie$ = new BehaviorSubject<Movie | null>(null);

  public activeFilterType$ = this.selectedFilterData$.pipe(
    map((filter) => filter?.type ?? null)
  );

  public movies$ = this.selectedFilterData$.pipe(
    switchMap((filter) => this.moviesApiService.getMovies(filter))
  );

  constructor(private moviesApiService: MoviesApiService) {}

  // ngOnInit(): void {
  //   firstValueFrom(this.movies$.pipe(map((movies) => movies[0]))).then(
  //     (movie) => this.selectedMovie$.next(movie)
  //   );
  // }

  public onFilterChange(filter: Filter | null): void {
    this.selectedFilterData$.next(filter);
  }

  public onDetailsClick(movie: Movie): void {
    this.selectedMovie$.next(movie);
  }

  public onModalClose(): void {
    this.selectedMovie$.next(null);
  }
}
