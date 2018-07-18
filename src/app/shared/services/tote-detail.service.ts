import { ToteDetail } from './../models/ToteDetail';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

@Injectable()
export class ToteDetailService {
  warehouseCode: string;
  endPointUrl: string;
  pipe: DatePipe;
  constructor(private _http: HttpClient) {
    this.pipe = new DatePipe('en-US');
    this.endPointUrl = environment.endPointUrl;
    this.warehouseCode = localStorage.getItem('warehouseCode');
  }
  saveToteDetail(toteDetail: ToteDetail) {
    return this._http
      .post(this.endPointUrl + '/totedetail', toteDetail)
      .pipe(catchError(this.handleError));
  }

  getToteDetail(toteDetail: ToteDetail): Observable<any> {
    return this._http
      .get<ToteDetail[]>(this.endPointUrl + '/totedetail', {
        params: {
          warehousecode: this.warehouseCode,
          deliverydate: this.pipe.transform(
            toteDetail.deliveryDate,
            'yyyyMMdd'
          ),
          bombid: toteDetail.bombID,
          routeno: toteDetail.routeNo,
          storeid: toteDetail.storeID,
          toteid: toteDetail.toteID
        }
      })
      .pipe(map((res: Response) => res['dataList']));
  }
  addTote(toteDetail: ToteDetail) {
    const formData: FormData = new FormData();
    formData.append('warehousecode', this.warehouseCode);
    formData.append(
      'deliverydate',
      this.pipe.transform(toteDetail.deliveryDate, 'yyyyMMdd')
    );
    formData.append('bombid', toteDetail.bombID);
    formData.append('toteid', toteDetail.toteID);

    return this._http
      .post(this.endPointUrl + '/totedetail', formData)
      .pipe(
        catchError((error: any) => {
          console.log(error.message);
          throw new Error(error.message);
        })
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
