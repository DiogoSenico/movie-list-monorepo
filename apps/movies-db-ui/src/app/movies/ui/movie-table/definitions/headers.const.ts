import { TableHeadersLabel } from './headers.model';

export const TableHeadersLabels: TableHeadersLabel = {
  ranking: 'ranking',
  title: 'title',
  year: 'year',
  revenue: 'revenue',
  actions: '',
};

export const TableHeaderOrder: Array<keyof TableHeadersLabel> = [
  'ranking',
  'title',
  'year',
  'revenue',
  'actions',
];
