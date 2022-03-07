import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromBills from './bills.reducer';

export const billsFeatureKey = 'BILLS_REDUCERS';

export const selectBillsState = createFeatureSelector<fromBills.State>(billsFeatureKey);

export const selectAllEntities = createSelector(
  selectBillsState,
  fromBills.selectAllBills
);

export const selectedBill = createSelector(
  selectBillsState,
  fromBills.getSelectedBill,
);

export const client = createSelector(
  selectBillsState,
  fromBills.getClient,
);

export const LoadIndicator = createSelector(
  selectBillsState,
  fromBills.getLoadingState,
);
