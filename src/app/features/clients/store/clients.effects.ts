import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, tap, throwError } from "rxjs";
import { HttpService } from "src/app/shared/services/http.service";
import { getClients, setClients, searchClient, setClient } from './clients.actions';


@Injectable()
export class ClientsEffects {
  private endpoint = 'clients';
  private searchEndpoint = `${ this.endpoint }/search`

  constructor(private actions$: Actions, private http: HttpService) { }

  getClients$ = createEffect(() => this.actions$.pipe(
    ofType(getClients),
    mergeMap(() =>
        this.http.getAllEntities(this.endpoint).pipe(
            map((clients: any) => setClients({ clients })),
            catchError((error) => throwError(error))
        )
    )
  ));

  searchClient$ = createEffect(() => this.actions$.pipe(
    ofType(searchClient),
    exhaustMap(action =>
      this.http.searchEntity(this.searchEndpoint, action.searchTerm).pipe(
        tap((client: any) => console.log('Respuesta desde el effect: ', client)),
        map((client: any) => setClient({ client })),
        catchError((error) => throwError(error))
      )
    )
  ));
}

