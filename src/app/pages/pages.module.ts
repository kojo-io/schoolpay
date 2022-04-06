import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {BadgeModule} from "primeng/badge";
import {ImageCropperModule} from "ngx-image-cropper";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PagesComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BadgeModule,
    ImageCropperModule,
    HttpClientModule
  ]
})
export class PagesModule { }
