import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from '@shared/icons/icon-close.component';

@Component({
  selector: 'senikorg-modal',
  standalone: true,
  imports: [CommonModule, IconCloseComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() title = '';
  @Input() isOpen = false;

  @Output() closed = new EventEmitter();

  public onClose(): void {
    this.closed.emit();
  }
}
