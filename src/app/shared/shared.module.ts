import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from "primeng/toast";
import { AppLoaderComponent } from './app-loader/app-loader.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import { ModalComponent } from './modal/modal.component';
import {ButtonModule} from "primeng/button";



@NgModule({
    declarations: [
        AppLoaderComponent,
        ModalComponent
    ],
  exports: [
    AppLoaderComponent
  ],
    imports: [
        CommonModule,
        ToastModule,
        AutoCompleteModule,
        FormsModule,
        ButtonModule
    ]
})
export class SharedModule { }
