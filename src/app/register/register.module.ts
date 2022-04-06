import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StepsModule} from "primeng/steps";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {InputMaskModule} from "primeng/inputmask";
import {NgOtpInputModule} from "ng-otp-input";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RegisterRoutingModule,
        StepsModule,
        InputTextModule,
        InputTextareaModule,
        FileUploadModule,
        RippleModule,
        InputMaskModule,
        NgOtpInputModule,
        SharedModule
    ]
})
export class RegisterModule { }
