import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {PagesModule} from "../pages.module";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {MomentModule} from "ngx-moment";
import {InputNumberModule} from "primeng/inputnumber";
import {SharedModule} from "../../shared/shared.module";
import {NgOtpInputModule} from "ng-otp-input";
import {DropdownModule} from "primeng/dropdown";
import { ClassRoomComponent } from './class-room/class-room.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ClassRoomComponent,
    ConfigurationComponent,
    HolidaysComponent
  ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        FileUploadModule,
        PagesModule,
        InputTextareaModule,
        RippleModule,
        TableModule,
        MomentModule,
        InputNumberModule,
        SharedModule,
        NgOtpInputModule,
        DropdownModule,
        InputSwitchModule
    ]
})
export class SettingsModule { }
