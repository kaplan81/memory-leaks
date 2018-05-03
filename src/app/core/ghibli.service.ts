import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class GhibliService {
  private _url = 'https://ghibliapi.herokuapp.com/films';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any> {
    return this.http
      .get<any>(this._url)
      .pipe(
        tap(_ => console.log('All Ghibli films were fetched')),
        catchError(this.handleError('getFilms', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
