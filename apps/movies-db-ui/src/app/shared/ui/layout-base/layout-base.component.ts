import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'senikorg-layout-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutBaseComponent {
  @Input() title = '';
}
