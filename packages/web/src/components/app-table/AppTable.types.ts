export enum SORT_ORDER {
  asc = 'asc',
  desc = 'desc',
}

export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface AppTableColumn {
  dataField: string;
  className?: string;
  headerClasses?: string;
  label: string;
  minWidth?: number;
  align?: Align;
  // TODO fix any
  formatter?: (value: any, values: any) => void;
  title?: string;
  sort?: boolean;
}

export interface SortConfig {
  sortField: string;
  sortOrder: SORT_ORDER;
}

export interface AppTableContextValues {
  sortOrder: SORT_ORDER;
  sortField: string;
  onTableChange?(): void;
}
