import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FilterType } from '../../definitions/filter.const';
import { Filter } from '@movies/definitions/filter.model';
import { IconResetComponent } from '@shared/icons/icon-reset.component';

@Component({
  selector: 'senikorg-table-filters',
  standalone: true,
  imports: [CommonModule, IconResetComponent],
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFiltersComponent {
  @Input() activeFilter: FilterType | null = null;

  @Output() filterChange = new EventEmitter<Filter | null>();

  public isDropdownOpen$ = new BehaviorSubject<boolean>(false);

  public YEARS = Array.from({ length: 17 }, (_, i) => i + 2000).reverse();

  public FILTER_TYPES = FilterType;

  private FILTER_AMOUNT = 10;

  public onResetFilter(): void {
    this.filterChange.emit(null);
  }

  public onFilterRevenueClick(): void {
    if (this.activeFilter !== FilterType.TOP_REVENUE) {
      this.filterChange.emit({
        type: FilterType.TOP_REVENUE,
        amount: this.FILTER_AMOUNT,
      });
    }
  }

  public onYearClick(year: number): void {
    this.isDropdownOpen$.next(false);
    this.filterChange.emit({
      type: FilterType.TOP_REVENUE_PER_YEAR,
      amount: this.FILTER_AMOUNT,
      year,
    });
  }

  public onFilterRevenuePerYearClick(): void {
    if (this.activeFilter !== FilterType.TOP_REVENUE_PER_YEAR) {
      this.isDropdownOpen$.next(true);
    }
  }

  public onBackgroundClick(): void {
    this.isDropdownOpen$.next(false);
  }
}
