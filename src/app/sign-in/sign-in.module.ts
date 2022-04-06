import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {InputMaskModule} from "primeng/inputmask";
import { NgOtpInputModule } from 'ng-otp-input';
import {SharedModule} from "../shared/shared.module";
import {NgxMaskModule} from "ngx-mask";


@NgModule({
  declarations: [
    SignInComponent
  ],
    imports: [
        CommonModule,
        SignInRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        InputMaskModule,
        NgOtpInputModule,
        SharedModule,
        NgxMaskModule
    ]
})
export class SignInModule { }
