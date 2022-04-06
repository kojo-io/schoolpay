import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Router, CanActivate } from '@angular/router';
import {finalize, Observable, Subscription} from 'rxjs';
import {SignInService} from "../sign-in/sign-in.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(
    public baseService: BaseService,
    public route: Router,
    private service: SignInService
  ) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.baseService.SetContentType({
      Authorization: `Bearer ${this.baseService.getToken().token}`,
      'Content-Type': 'application/json'
    });
    this.baseService.setLoader(true);
    return new Promise((resolve, reject) => {
      const sub: Subscription = this.service.getUser().pipe(finalize(() => {
        sub.unsubscribe();
        this.baseService.setLoader(false);
      }))
        .subscribe((res: any) => {
          if (res.data) {
            this.baseService.User(res.data);
            resolve(true);
          } else if (res.status != 100) {
            this.route.navigate(['/sign-in']);
            resolve(false);
          }
        })
    });
  }
}
