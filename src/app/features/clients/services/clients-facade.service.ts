import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

import * as fromActions from '../store/clients.actions'
import * as fromSelectors from '../store/selectors';
import * as fromRoot from '../../../store/index';

@Injectable({
  providedIn: 'root'
})
export class ClientsFacadeService {
  private clients$: Observable<Client[] | undefined | null> = this.store.select(fromSelectors.selectAllEntities);
  public getClients() { return this.clients$ }
  private isLoading$: Observable<boolean | null> = this.store.select(fromSelectors.LoadIndicator);
  public getLoadingState() { return this.isLoading$ }

  constructor(private store: Store<fromRoot.mainState>) { }

  public loadClients() {
    this.store.dispatch(fromActions.getClients());
  }
}
