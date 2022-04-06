import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "../../environment.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService) { }

  get(pageSize?: any, pageNumber?: any): any {
    return this.httpClient.get(`${this.env.apiUrl}Account/GetUsers?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }

  register(info: any): any {
    return this.httpClient.post(`${this.env.apiUrl}Account/AccountRegister`,info);
  }

  verifyCode(data: any): any {
    return this.httpClient.post(`${this.env.apiUrl}Account/VerifyPhoneNumber/user`, data);
  }
  getConfig(): any {
    return this.httpClient.get(`${this.env.apiUrl}Account/GetConfig`);
  }
}
