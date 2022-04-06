import { TestBed } from '@angular/core/testing';

import { ErrorInterceptService } from './error-intercept.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MessageService} from "primeng/api";

describe('ErrorInterceptService', () => {
  let service: ErrorInterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        MessageService
      ]
    });
    service = TestBed.inject(ErrorInterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
