import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  public menu: Array<any> = [
    {
      path: '/p/dashboard',
      title: 'Dashboard',
      children: []
    },
    {
      path: '/p/payments',
      title: 'Payments',
      children: []
    },
    {
      path: '/p/users',
      title: 'Users',
      children: []
    },
    {
      path: '/p/reports',
      title: 'Reports',
      children: []
    },
    {
      path: '/p/manage',
      title: 'Manage',
      children: []
    },
  ]
  constructor() { }
}
