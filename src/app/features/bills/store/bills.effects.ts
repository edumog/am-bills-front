import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap, throwError } from "rxjs";
import { InformationDialogComponent } from "src/app/shared/components/dialogs/information-dialog/information-dialog.component";
import { HttpService } from "src/app/shared/services/http.service";
import { Bill } from "../models/bill";

import * as actions from "./bills.actions";

@Injectable()
export class BillsEffects {
  private endpoint: string = 'bills/GetByClient';
  private clientEndpoint: string = 'clients/search';
  private notificationEndpoint: string = 'NotificationService/BillStatusChange';

  constructor(private actions$: Actions, private http: HttpService, public dialog: MatDialog) { }

  getBills$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getBills),
    exhaustMap(action =>
      this.http.getAllEntities(`${ this.endpoint }/${ action.clientId }`).pipe(
        map((bills: any) => actions.setBills({ bills })),
        catchError((error) => throwError(error))
      )
    )
  ));

  updateBill$ = createEffect(() => this.actions$.pipe(
    ofType(actions.updateBill),
    exhaustMap(action =>
      this.http.updateEntity<{ billId: string, clientId: string }>(this.notificationEndpoint, { billId: action.billId, clientId: action.clientId }).pipe(
        tap(() => this.dialog.open(InformationDialogComponent)),
        map(() => actions.getBills({ clientId: action.clientId })),
        catchError((error) => throwError(error))
      )
    )
  ));

  getClient$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getClient),
    exhaustMap(action =>
      this.http.searchEntity(`${ this.clientEndpoint }`, action.clientId).pipe(
        map((client: any) => actions.setClient({ client })),
        catchError((error) => throwError(error))
      )
    )
  ));
}
