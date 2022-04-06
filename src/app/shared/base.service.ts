import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {EnvironmentService} from "../environment.service";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  key = 'static-2345trgkhh-46rgh40585725-dhd83e6';
  constructor(private router: Router, private httpClient: HttpClient, private environment: EnvironmentService) {
  }
  public config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: true,
    disableAutoFocus: false,
    placeholder: '•',
    inputClass : 'border-none bg-gray-300 outline-none',
    containerClass: 'ml-1'
  };

  private userSource = new BehaviorSubject<any>(null);
  currentUser = this.userSource.asObservable();

  private menuSource = new BehaviorSubject<any>([]);
  currentMenu = this.menuSource.asObservable();

  private currentLoaderSource = new BehaviorSubject<any>(false);
  currentLoader = this.currentLoaderSource.asObservable();


  private contentSource = new BehaviorSubject<any>({
    Authorization: `Bearer ${this.getToken().token}`,
    'Content-Type': 'application/json'
  });
  currentContent = this.contentSource.asObservable();

  setLoader(load: any): void {
    this.currentLoaderSource.next(load);
  }

  User(user: any): void {
    this.userSource.next(user);
  }

  Menu(menu: any): void {
    this.menuSource.next(menu);
  }

  SetContentType(type: any): void {
    this.contentSource.next(type);
  }

  setSessionData(data: any): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  setSession(value: any, data: any): void {
    localStorage.setItem(value, JSON.stringify(data));
  }

  removeSession(value: any): void {
    localStorage.removeItem(value);
  }

  getSessionData(): any {
    if (localStorage.getItem(this.key)) {
      return JSON.parse(localStorage.getItem(this.key) as string);
    }
    return false;
  }

  getSession(value: any): any {
    if (localStorage.getItem(value)) {
      return JSON.parse(localStorage.getItem(value) as string);
    }
    return false;
  }

  clearSessionData(): void {
    localStorage.removeItem(this.key);
  }

  getToken(): any {
    if (this.getSessionData()) {
      return this.getSessionData().accesstoken;
    }
    return false;
  }

  locate(info: any): any {
    return this.httpClient.get(`https://photon.komoot.io/api/?q=${info}`);
  }

  reverseLocate(info: any): any {
    return this.httpClient.get(`https://photon.komoot.io/reverse?lon=${info.lng}&lat=${info.lat}`)
  }

  logout(): any {
    return this.httpClient.get(`${this.environment.apiUrl}Account/Logout`);
  }

  getConfig(): any {
    return this.httpClient.get(`${this.environment.apiUrl}Account/GetConfig`);
  }

  log(data: any) {
    if (!this.environment.production) {
      console.log(data);
    }
  }
}
