import {Injectable, OnDestroy} from '@angular/core';
import {ComponentType} from "@angular/cdk/overlay";
type ContentType<T> = ComponentType<T>
@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnDestroy{

  constructor() { }

  ngOnDestroy(): void {
  }
}
