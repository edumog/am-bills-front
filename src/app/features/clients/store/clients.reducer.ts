import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Client } from "../models/client";
import * as actions from './clients.actions';

export interface State extends EntityState<Client> {
    isLoading: boolean;
    selectedEntity: Client | null | undefined
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

const initialState: State = adapter.getInitialState({
    isLoading: false,
    entities: {},
    selectedEntity: null
});

export const clientsReducer = createReducer(
    initialState,
    on(actions.getClients, state => ({ ...state, isLoading: true })),
    on(actions.setClients, (state, { clients }) => {
        return adapter.setAll(clients, { ...state, isLoading: false })
    }),
    on(actions.searchClient, state => ({ ...state, isLoading: true })),
    on(actions.setClient, (state, { client }) => {
        return adapter.setOne(client, { ...state, selectedEntity: client, isLoading: false })
    }),
);

export function reducer(state: State | undefined, action: Action) {
    return clientsReducer(state, action);
}

export const getSelectedClient = (state: State) => state.selectedEntity;

export const getLoadingState = (state: State) => state.isLoading;

export const {
  selectAll,
  selectEntities,
} = adapter.getSelectors();

export const selectAllClients = selectAll;
export const selectClientsEntities = selectEntities;
