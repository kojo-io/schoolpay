import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {RouteGuard} from "../../shared/route-guard.service";

const routes: Routes = [
  {
    path: '',
    canActivate: [RouteGuard],
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
