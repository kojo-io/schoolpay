import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignInService} from "./sign-in.service";
import {Router} from "@angular/router";
import {finalize} from "rxjs";
import {BaseService} from "../shared/base.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public passwordVisible = false;
  otp = '';

  codeReceived = false;
  public form: FormGroup = this.fb.group({});
  public loading = false;
  constructor(private fb: FormBuilder,
              public baseService: BaseService,
              private service: SignInService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login(otp?: string): void {
    if (otp?.length === 4) {
      // this.baseService.clearSessionData();
      // this.loading = true;
      // this.form.get('password')?.setValue(String(otp).toUpperCase());
      // this.service.login(this.form.value).pipe(finalize(() => this.loading = false)).subscribe(
      //   (u: any) => {
      //     if (u.status === 100) {
      //       this.baseService.clearSessionData();
      //       this.setUserData(u.data);
      //       this.router.navigate(['/p/dashboard']);
      //     }
      //   });
      this.router.navigate(['/p/dashboard']);
    }
  }

  getCode(): void {
    // this.loading = true;
    // this.service.getCode(this.form.value).pipe(finalize(() => this.loading = false)).subscribe(
    //   (u: any) => {
    //     if (u.status === 100) {
    //       this.codeReceived = true;
    //     }
    //   });

    this.codeReceived = true;
  }

  setUserData(result: any): void {
    this.baseService.setSessionData(result);
  }

  showPassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
