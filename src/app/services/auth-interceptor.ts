import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private snackBar: MatSnackBar
    ) {
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.setAuthorizationHeader(req))
            .pipe(catchError((event) => {
                return this.catch401(event);
            }));
    }

    private setAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + this.authService.getToken() } });
    }

    private catch401(error: HttpErrorResponse): Observable<any> {
        if (error.status === 401) {
            this.authService.logout();
            return empty();
        }
        if (error.status === 422) {
              this.snackBar.open(error.error.message, '', {
                duration: 2000,
              });
        }
        return throwError(error);
    }
}
