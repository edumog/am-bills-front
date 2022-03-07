import { act } from "@ngrx/effects";
import { createAction, props } from "@ngrx/store";
import { Bill } from '../models/bill';
import { Client } from "../models/client";


export const actionTypes = {
    getBills: 'Get bills',
    setBills: 'Set bills',
    updateBill: 'Update bill',
    getClient: 'Get client',
    setClient: 'Set client'
}

export const getBills = createAction(
  actionTypes.getBills,
  props<{ clientId: string }>()
);

export const setBills = createAction(
  actionTypes.setBills,
  props<{ bills: Bill[] }>()
);

export const updateBill = createAction(
  actionTypes.updateBill,
  props<{ billId: string, clientId: string }>()
);

export const getClient = createAction(
  actionTypes.getClient,
  props<{ clientId: string }> ()
);
export const setClient = createAction(
  actionTypes.setClient,
  props<{ client: Client }>()
);
