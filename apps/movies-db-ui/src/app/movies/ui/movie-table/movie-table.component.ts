import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '@movies/definitions/movie.model';
import {
  TableHeaderOrder,
  TableHeadersLabels,
} from './definitions/headers.const';
import { IconEyeComponent } from '@shared/icons/icon-eye.component';

@Component({
  selector: 'senikorg-movie-table',
  standalone: true,
  imports: [CommonModule, IconEyeComponent],
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTableComponent {
  @Input() movies: Movie[] = [];

  @Output() detailsClick = new EventEmitter<Movie>();

  public TABLE_HEADERS_ORDER = TableHeaderOrder;
  public TABLE_HEADERS_LABEL = TableHeadersLabels;

  public onDetailsClick(movie: Movie): void {
    this.detailsClick.emit(movie);
  }
}
