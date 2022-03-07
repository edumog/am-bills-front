import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TableConfiguration } from 'src/app/shared/interfaces/table-configuration';

import * as fromRoot from '../../../../store/index'
import { Bill } from '../../models/bill';
import { Client } from '../../models/client';
import { BillsFacadeService } from '../../services/bills-facade.service';
import { tableOptions } from './table-options';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  private clientId: string = '';
  private client$: Observable<Client | null | undefined> = this.facadeService.getClient();
  public client: Client | null = null;
  public bills$: Observable<Bill[] | null | undefined> = this.facadeService.getBills();
  public options: TableConfiguration = tableOptions;
  public isLoading$: Observable<boolean> = this.facadeService.getLoadIndicator();

  constructor(private activatedRoute: ActivatedRoute, private facadeService: BillsFacadeService) { }

  ngOnInit(): void {
    this.loadInitialData();
    this.manageSubscriptions();
  }
  private loadInitialData() {
    this.clientId = this.activatedRoute.snapshot.params['clientId'];
    console.log('Parametro enviado por ruta: ', this.clientId)
    this.facadeService.loadClient(this.clientId);
  }
  private manageSubscriptions() {
    this.client$.subscribe((client: any) => {
      if(client) {
        this.facadeService.loadBillsByUser(client.id),
        this.client = client;
      }
    });
  }

  public changeStatusBill(event: { entity: Bill, columnName: string }) {
    console.log('Id factura actualizar: ', event.entity.id);
    console.log('Id del cliente dueño de la factura: ', event.entity.clientid);
    this.facadeService.changeBillStatus(event.entity.id, event.entity.clientid);
  }
}
