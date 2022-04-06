import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "../environment.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private env: EnvironmentService) { }

  register(info: any): any {
    return this.httpClient.post(`${this.env.apiUrl}Account/Register`,info);
  }

  login(user: any): any {
    return this.httpClient.post(`${this.env.apiUrl}Account/Login`, user);
  }
}
