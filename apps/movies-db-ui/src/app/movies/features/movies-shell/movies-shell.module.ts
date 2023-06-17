import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesShellRoutingModule } from './movies-shell-routing.module';
import { MoviesShellComponent } from './movies-shell.component';
import { LayoutBaseComponent } from '@shared/ui/layout-base/layout-base.component';

@NgModule({
  declarations: [MoviesShellComponent],
  imports: [CommonModule, MoviesShellRoutingModule, LayoutBaseComponent],
})
export class MoviesShellModule {}
