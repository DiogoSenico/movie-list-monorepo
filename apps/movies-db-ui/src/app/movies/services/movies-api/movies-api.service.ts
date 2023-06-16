import { Injectable } from '@angular/core';
import { Filter } from '@movies/definitions/filter.model';
import { Movie } from '@movies/definitions/movie.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  public getMovies(filter: Filter | null): Observable<Movie[]> {
    return of([
      {
        ranking: 1,
        title: 'Star Wars: The Force Awakens',
        year: 2015,
        revenue: 2068223624,
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        description:
          'Thirty years after the Galactic Civil War, the First Order has risen from the fallen Galactic Empire and seeks to end the New Republic. The Resistance, backed by the Republic and led by General Leia Organa, opposes the First Order. Leia searches for her brother, Luke Skywalker, who has gone missing.',
        director: 'J. J. Abrams',
        actors: [
          'Harrison Ford',
          'Mark Hamill',
          'Carrie Fisher',
          'Adam Driver',
        ],
        runtimeMins: 121,
        rating: 8.1,
        votes: 757074,
        metascore: 76,
      },
      {
        ranking: 2,
        title: 'string',
        year: 0,
        revenue: 0,
        genres: ['string'],
        description: 'string',
        director: 'string',
        actors: ['string', 'string'],
        runtimeMins: 0,
        rating: 0,
        votes: 0,
        metascore: 0,
      },
    ]);
  }
}
