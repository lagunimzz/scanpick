import { tap, retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      responseType: 'json',
      setHeaders: {
        Authorization: `Bearer 123`,
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        // 'Content-Type': 'application/json'
      }
    });

    return next.handle(request).pipe(
      retry(1),
      tap(
        (event: HttpEvent<any>) => {
          console.log(event['body']);
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
            console.log(err.status);
          }
        }
      )
    );
  }
}
