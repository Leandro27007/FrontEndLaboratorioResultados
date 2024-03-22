import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService<RequestType, ResponseType> {
  private readonly APIUrl = 'https://localhost:7290/api/' + this.getResourceUrl();
  constructor(protected httpClient: HttpClient) {}

  abstract getResourceUrl(): string;

  obtener(params?: string): Observable<ResponseType> {
    return this.httpClient
      .get<ResponseType>(`${this.APIUrl}` + '/' + (params? params:""))
      .pipe(catchError(this.handleError));
  }

  crear(recurso: Partial<RequestType>): Observable<any> {
    return this.httpClient
      .post(`/${this.APIUrl}}`, recurso)
      .pipe(catchError(this.handleError));
  }

  eliminar(id: string | number): Observable<any> {
    return this.httpClient
      .delete(`/${this.APIUrl}}/${id}`)
      .pipe(catchError(this.handleError));
  }

  actualizar(recurso: Partial<RequestType>) {
    return this.httpClient
      .put(`/${this.APIUrl}}`, recurso)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here

    return throwError(error);
  }
}
