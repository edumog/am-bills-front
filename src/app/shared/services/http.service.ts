import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'api-url';
  private httpOptions: any;

  constructor(private http: HttpClient) { }

  public getAllEntities(endpoint: string) {
    const url = `${ this.baseUrl}/${ endpoint }`;
    return this.http.get(url);
  }

  public searchEntity(endpoint: string, searchTerm: string) {
    const url = `${ this.baseUrl }/${ endpoint }/${ searchTerm }`;
    return this.http.get(url);
  }

  public updateEntity<T>(endpoint: string, entity: T) {
    const url = `${ this.baseUrl }/${ endpoint }`;
    return this.http.post(url, entity);
  }

}
