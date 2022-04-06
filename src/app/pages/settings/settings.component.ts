import { Component, OnInit } from '@angular/core';
import {SettingsService} from "./settings.service";
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  menu: Array<any> = [];
  public selectedIndex = 0;
  user: any;
  constructor(private service: SettingsService) {
    this.menu = this.service.menu;
  }

  ngOnInit(): void {
  }

  selected(i: any): void {
    this.selectedIndex = i;
  }
}
