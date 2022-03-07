import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromClients from './clients.reducer';

export const clientsFeatureKey = 'CLIENTS_REDUCERS';

export const selectClientsState = createFeatureSelector<fromClients.State>(clientsFeatureKey);

export const selectAllEntities = createSelector(
  selectClientsState,
  fromClients.selectAllClients
);

export const selecteClient = createSelector(
  selectClientsState,
  fromClients.getSelectedClient,
);

export const LoadIndicator = createSelector(
  selectClientsState,
  fromClients.getLoadingState,
);
