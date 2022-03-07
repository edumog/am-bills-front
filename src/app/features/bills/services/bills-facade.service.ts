import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Bill } from '../models/bill';

import * as fromActions from '../store/bills.actions'
import * as fromSelectors from '../store/selectors';
import * as fromRoot from '../../../store/index';


@Injectable({
  providedIn: 'root'
})
export class BillsFacadeService {

  private _client$: Observable<Client | null | undefined> = this.store.select(fromSelectors.client);
  public getClient() { return this._client$ };
  private _bills$: Observable<Bill[] | null | undefined> = this.store.select(fromSelectors.selectAllEntities);
  public getBills() { return this._bills$ };
  private _isLoading$: Observable<boolean> = this.store.select(fromSelectors.LoadIndicator);
  public getLoadIndicator() { return this._isLoading$ }

  constructor(private store: Store<fromRoot.mainState>) { }

  public loadClient(clientId: string) {
    this.store.dispatch(fromActions.getClient({ clientId }));
  }

  public loadBillsByUser(clientId: string) {
    this.store.dispatch(fromActions.getBills({ clientId }));
  }

  public changeBillStatus(billId: string, clientId: string) {
    this.store.dispatch(fromActions.updateBill({ billId, clientId}))
  }
}
