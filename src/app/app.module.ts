import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastModule} from "primeng/toast";
import {ProgressBarModule} from "primeng/progressbar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptService} from "./shared/error-intercept.service";
import {HttpinterceptorService} from "./shared/httpinterceptor.service";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxMaskModule} from "ngx-mask";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastModule,
    ProgressBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptService, multi: true },
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
