import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';
import {HttpClientModule} from "@angular/common/http";

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
