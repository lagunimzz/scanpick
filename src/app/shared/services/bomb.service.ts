import { Bomb } from './../../shared/models/Bomb';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of, throwError } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable()
export class BombService {
  warehouseCode: string;
  endPointUrl: string;
  pipe: DatePipe;
  constructor(private _http: HttpClient) {
    this.pipe = new DatePipe('en-US');
    this.endPointUrl = environment.endPointUrl;
    this.warehouseCode = localStorage.getItem('warehouseCode');
  }

  getBomb(deliveryDate: Date): Observable<Bomb[]> {
    return this._http
      .get<Bomb[]>(this.endPointUrl + '/bomb', {
        params: {
          warehousecode: this.warehouseCode,
          deliverydate: this.pipe.transform(deliveryDate, 'yyyyMMdd')
        }
      })
      .pipe(map((res: Response) => res['dataList']));
  }

  // getBomb(deliveryDate: Date): Observable<Bomb[]> {
  //   return of(Bombs);
  // }
}
