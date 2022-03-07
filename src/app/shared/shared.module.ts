import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { InformationDialogComponent } from './components/dialogs/information-dialog/information-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

const MatComponents = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule
];

@NgModule({
  declarations: [
    TableComponent,
    InformationDialogComponent
  ],
  imports: [
    CommonModule,
    ...MatComponents,
    HttpClientModule
  ],
  exports: [
    TableComponent,
    InformationDialogComponent,
    ...MatComponents
  ]
})
export class SharedModule { }
