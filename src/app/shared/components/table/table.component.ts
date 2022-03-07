import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TableConfiguration } from '../../interfaces/table-configuration';
import { TableOptions } from '../../interfaces/table-options';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges, OnInit {

  @Input() dataSource: any = null;
  @Input() tableConfiguration: TableConfiguration | null = null;
  @Input() isLoading: boolean | null = false;

  @Output() buttonClick = new EventEmitter<{ entity: any, columnName: string }>();

  public options: TableOptions[] | null = null;
  public displayed: string[] = [];
  public title: string = '';
  public icon: string = 'home';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.configureTable();
  }

  ngOnInit(): void {

  }
  private configureTable() {
    this.title = this.tableConfiguration?.title ? this.tableConfiguration.title : '';
    if(this.tableConfiguration) {
      this.options = this.tableConfiguration.options;
      this.displayed = this.tableConfiguration.displayedColumns;
    }
  }

  public onClick(options: any, item: any) {
    this.buttonClick.emit({ entity: item, columnName: options.columnName });
  }

  setIconColor(color: string | null | undefined) {
    if(color)
      return color;
    return 'warn';
  }
}
