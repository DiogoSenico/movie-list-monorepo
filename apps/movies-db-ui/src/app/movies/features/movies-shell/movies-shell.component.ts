import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'senikorg-movies-shell',
  templateUrl: './movies-shell.component.html',
  styleUrls: ['./movies-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesShellComponent {}
