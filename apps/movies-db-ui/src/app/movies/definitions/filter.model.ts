import { FilterType } from './filter.const';

interface FilterBase<T extends FilterType> {
  type: T;
}

export interface FilterRevenue extends FilterBase<FilterType.TOP_REVENUE> {
  amount: number;
}

export interface FilterRevenueByYear
  extends FilterBase<FilterType.TOP_REVENUE_PER_YEAR> {
  amount: number;
  year: number;
}

export type Filter = FilterRevenue | FilterRevenueByYear;
