import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public menu: Array<any> = [
    {
      title: 'Class rooms',
      description: 'Add class rooms here, you can also make edits here.'
    },
    {
      title: 'Configuration',
      description: 'Change system configuration here.'
    },
    {
      title: 'Holidays',
      description: 'Setup holidays here.'
    }
  ]
  constructor() { }
}
