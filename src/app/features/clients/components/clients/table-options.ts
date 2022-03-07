import { TableConfiguration } from "src/app/shared/interfaces/table-configuration";

 export const tableOptions: TableConfiguration = {
  options: [
     {
      columnName: 'nit',
      title: 'Nit',
      type: 'textField'
     },
     {
      columnName: 'name',
      title: 'Nombre',
      type: 'textField'
     },
     {
      columnName: 'city',
      title: 'Ciudad',
      type: 'textField'
     },
     {
      columnName: 'email',
      title: 'Correo',
      type: 'textField'
     },
     {
      columnName: 'id',
      title: 'Ver facturas',
      type: 'button'
     }
  ],
  title: 'Clientes',
  displayedColumns: ['nit', 'name', 'city', 'email', 'id']
 };
