import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../../store/index';
import * as fromSelectors from '../../store/selectors';
import { getClients, searchClient } from '../../store/clients.actions';
import { Observable } from 'rxjs';
import { Client } from '../../models/client';
import { TableConfiguration } from 'src/app/shared/interfaces/table-configuration';
import { tableOptions } from './table-options';
import { Router } from '@angular/router';
import { ClientsFacadeService } from '../../services/clients-facade.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients$: Observable<Client[] | undefined | null> = this.clientsFacade.getClients();
  public isLoading$: Observable<boolean | null> = this.clientsFacade.getLoadingState();
  public options: TableConfiguration = tableOptions;

  constructor(private clientsFacade: ClientsFacadeService, private router: Router) { }

  ngOnInit(): void {
    this.clientsFacade.loadClients();
  }

  public goToBills(eventResponse: { entity: Client, columnName: string }) {
    this.router.navigateByUrl(`bills/${ eventResponse.entity.nit }`);
  }
}
