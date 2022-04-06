import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BaseService} from "./shared/base.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'delivery';
  user: any;
  loading: any;

  constructor(private baseService: BaseService,
              private router: Router) {
    baseService.currentLoader.subscribe(u => {
      this.loading = u;
    });
  }

  ngOnInit(): void {
  }
}
