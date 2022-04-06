import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteGuard} from "../../shared/route-guard.service";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    // canActivate: [RouteGuard],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
