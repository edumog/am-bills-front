import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Bill } from "../models/bill";
import { Client } from "../models/client";

import * as actions from "./bills.actions"

export interface State extends EntityState<Bill> {
  isLoading: boolean,
  selectedEntity: Bill | null | undefined,
  client: Client | null | undefined
}

export const adapter: EntityAdapter<Bill> = createEntityAdapter<Bill>();

const initialState: State = adapter.getInitialState({
  entities: {},
  selectedEntity: null,
  selectedEntityId: '',
  client: null,
  isLoading: false
});

export const billsReducer = createReducer(
  initialState,
  on(actions.getBills, state => ({ ...state, isLoading: true })),
  on(actions.setBills, (state, { bills }) => {
    return adapter.setAll(bills, { ...state, isLoading: false });
  }),
  on(actions.getClient, state => ({ ...state, isLoading: true})),
  on(actions.setClient, (state, { client }) => ({ ...state, client, isLoading: false })),
);

export function reducer(state: State | undefined, action: Action) {
  return billsReducer(state, action);
}

export const getSelectedBill = (state: State) => state.selectedEntity;

export const getLoadingState = (state: State) => state.isLoading;

export const getClient = (state: State) => state.client;

export const {
selectAll,
selectEntities,
} = adapter.getSelectors();

export const selectAllBills = selectAll;
export const selectBillsEntities = selectEntities;
