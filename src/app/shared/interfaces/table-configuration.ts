import { TableOptions } from "./table-options";

export interface TableConfiguration {
  options: TableOptions[],
  title?: string;
  displayedColumns: string[],
}
