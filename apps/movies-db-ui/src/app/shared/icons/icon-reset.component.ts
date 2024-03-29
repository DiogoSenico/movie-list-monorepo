import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'senikorg-icon-reset',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <style>
        .a {
          fill: none;
        }
        .b {
          fill: #78849e;
        }
      </style>
    </defs>
    <g transform="translate(-1061 -139)">
      <g transform="translate(1061 139)">
        <path class="a" d="M0,0H24V24H0Z" />
        <path
          class="b"
          d="M12,5V2L8,6l4,4V7a6,6,0,0,1,1,11.91v2.02A8,8,0,0,0,12,5Z"
        />
        <path
          class="b"
          d="M6,13A5.979,5.979,0,0,1,7.76,8.76L6.34,7.34A8,8,0,0,0,11,20.93V18.91A6.007,6.007,0,0,1,6,13Z"
        />
      </g>
    </g>
  </svg>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconResetComponent {}
