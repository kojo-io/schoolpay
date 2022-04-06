import { Component, OnInit } from '@angular/core';
import {PageService} from "./page.service";
import {Router} from "@angular/router";
import {finalize, Subscription} from "rxjs";
import {BaseService} from "../shared/base.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  menu: Array<any> = [];
  public selectedIndex = 0;
  user: any;
  company: any;
  collapse = false;
  showForm = false;
  constructor(private pageService: PageService,
              private router: Router,
              private baseService: BaseService) {
    this.menu = this.pageService.menu;
    baseService.currentUser.subscribe(u => {
      this.user = u.user;
      this.company = u.company;
    });
  }

  ngOnInit(): void {
    const path = window.location.pathname;
    console.log(path);
    if (path !== undefined) {
      console.log(path);
      this.selectedIndex = this.menu.findIndex(page => page.path.toLowerCase() === path.toLowerCase());
    }
  }

  selected(i: any): void {
    this.selectedIndex = i;
  }

  collapseMenu(): void {
    this.collapse = !this.collapse;
  }

  logout(): void {
    this.showForm = true;
    // const sub: Subscription = this.baseService.logout().pipe(finalize(() => sub.unsubscribe())).subscribe((u: any) => {
    //   if (u.status === 100) {
    //     this.baseService.clearSessionData();
    //     this.router.navigate(['/']);
    //   }
    // });
    this.router.navigate(['/']);
  }
}
