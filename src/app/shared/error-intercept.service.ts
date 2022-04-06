import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {BaseService} from './base.service';
import {Router} from '@angular/router';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptService implements HttpInterceptor{

  constructor(public baseService: BaseService, private router: Router,
              private messageService: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // @ts-ignore
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            console.log(error.status);
            return  throwError(error.error.message);
          } else {
            if (error.status === 401) {
              this.messageService.add({severity:'error', summary: 'Error', detail: 'You do not have access to this resource'});
              this.baseService.clearSessionData();
              this.router.navigate(['/sign-in']);
              return;
            }
            if (error.status === 500) {
              this.messageService.add({severity:'error', summary: 'Error', detail: 'An error occurred at the server side please contact the systems administrator'});
              return;
            }
            if (error.status === 405) {
              this.messageService.add({severity:'error', summary: 'Error', detail: 'The request method not allowed, please contact the systems administrator'});
              return;
            }
          }
        })
    );
  }
}
