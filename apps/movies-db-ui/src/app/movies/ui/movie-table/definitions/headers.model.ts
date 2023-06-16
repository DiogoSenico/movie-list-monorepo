import { Movie } from '@movies/definitions/movie.model';

export interface TableHeadersLabel
  extends Partial<Record<keyof Movie, string>> {
  actions: string;
}
