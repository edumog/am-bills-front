import { createAction, props } from "@ngrx/store";
import { Client } from "../models/client";

export const actionTypes = {
    getClients: 'Get clients',
    setClients: 'Set clients',
    searchClient: 'Search client',
    setClient: 'Set client'
}

export const getClients = createAction(
    actionTypes.getClients,
);

export const setClients = createAction(
    actionTypes.setClients,
    props<{ clients: Client[] }>()
);

export const searchClient = createAction(
    actionTypes.searchClient,
    props<{ searchTerm: string }>()                         
);

export const setClient = createAction(
    actionTypes.setClient,
    props<{ client: Client }>()
);