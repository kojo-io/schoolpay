import { TestBed } from '@angular/core/testing';

import { HttpinterceptorService } from './httpinterceptor.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MessageService} from "primeng/api";

describe('HttpinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],
    providers: [
      MessageService
    ]
  }));

  it('should be created', () => {
    const service: HttpinterceptorService = TestBed.get(HttpinterceptorService);
    expect(service).toBeTruthy();
  });
});
