import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromClients from '../features/clients/store/clients.reducer';
import * as fromBills from '../features/bills/store/bills.reducer'

export interface mainState {
  clients: fromClients.State,
  bills: fromBills.State
}

export const ROOT_RREDUCERS = new InjectionToken<ActionReducerMap<mainState, Action>>(
  'ROOT_REDUCERS_TOKEN',
  {
    factory: () => ({
      clients: fromClients.reducer,
      bills: fromBills.reducer
    })
  }
);
