import { TestBed } from '@angular/core/testing';

import { RouteGuard } from './route-guard.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('RouteGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RouteGuard = TestBed.get(RouteGuard);
    expect(service).toBeTruthy();
  });
});
