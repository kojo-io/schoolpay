import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import { BaseService } from './base.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {
  contentType: any;
  constructor(public baseService: BaseService,
              private messageService: MessageService,
              private router: Router) {
    baseService.currentContent.subscribe(u => {
      this.contentType = u;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: this.contentType
    });

    return next.handle(request).pipe(
      map(event => {
        if ( event instanceof HttpResponse) {
          if (event.body.message) {
            if (event.body.status === 100) {
              this.messageService.add({severity:'success', summary: 'Success', detail: event.body.message});
            } else if (event.body.status === 102) {
              this.messageService.add({severity:'error', summary: 'Error', detail: event.body.message});
              this.router.navigate(['/']);
            } else if (event.body.status === 105) {
              this.router.navigate(['/verify']);
            } else if (event.body.status === 500) {
              if (String(event.body.message).includes('401')) {
                this.router.navigate(['/sign-in']);
              } else {
                this.messageService.add({severity:'error', summary: 'Error', detail: event.body.message});
              }
            } else if (event.body.status === 106) {
              this.messageService.add({severity:'success', summary: 'Success', detail: event.body.message});
            }
          }
          return event;
        } else {
          return event;
        }
      })
    );
  }
}
