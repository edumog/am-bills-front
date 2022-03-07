import { TableConfiguration } from "src/app/shared/interfaces/table-configuration";

 export const tableOptions: TableConfiguration = {
  options: [
     {
      columnName: 'code',
      title: 'Código',
      type: 'textField'
     },
     {
      columnName: 'total',
      title: 'Total',
      type: 'textField'
     },
     {
      columnName: 'creationDate',
      title: 'Fecha de creación',
      type: 'textField'
     },
     {
      columnName: 'state',
      title: 'estado',
      type: 'textField'
     },
     {
      columnName: 'id',
      title: 'Cambiar estado',
      type: 'button',
      icon: 'report_problem',
     },
  ],
  displayedColumns: ['code', 'total', 'creationDate', 'state', 'id']
 };
