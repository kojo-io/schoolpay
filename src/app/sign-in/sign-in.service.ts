import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "../environment.service";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService) { }

  login(user: any): any {
    return this.httpClient.post(`${this.env.apiUrl}Account/Login`, user);
  }

  getUser(): any {
    return this.httpClient.get(`${this.env.apiUrl}Account/LoginUser`);
  }

  getCode(user: any): any {
    return this.httpClient.post(`${this.env.apiUrl}Account/GetCode`, user);
  }
}
