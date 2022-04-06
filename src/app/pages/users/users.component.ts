import { Component, OnInit } from '@angular/core';
import {LazyLoadEvent} from "primeng/api";
import {UsersService} from "./users.service";
import {finalize, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../../shared/base.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  lazyLoadEvent: LazyLoadEvent | any;
  mainData: any;
  otp: any;
  data: Array<any> = [];
  selectedItem: any;
  showForm = false;
  loading = false;
  passwordVisible = false;
  codeReceived = false;
  form: FormGroup = this.fb.group({});
  constructor(private service: UsersService,
              public baseService: BaseService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getData();
    this.form = this.fb.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      phoneNumber: [null, Validators.required]
    });
  }

  getData(): void{
    this.loading = true;
    const subscription : Subscription = this.service.
    get().pipe(finalize(() => {
      subscription.unsubscribe();
      this.loading = false;
    })).subscribe((res: any) => {
      this.data = res.data;
    })
  }

  modal(): void {
    this.showForm = !this.showForm;
  }

  showPassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  newUser(): void {
    this.loading = true;
    this.service.register(this.form.value).
    pipe(finalize(() => this.loading = false)).
    subscribe(
      (res: any) => {
        if (res.status === 106) {
          this.modal();
          this.codeReceived = true;
          this.form.get('id')?.setValue(res.data);
          this.form.get('password')?.setValue(null);
        }
      });
  }

  verifyCode(otp?: string): void {
    if(otp?.length === 6) {
      this.loading = true;
      this.form.get('password')?.setValue(otp.toUpperCase());
      this.service.verifyCode(this.form.value).
      pipe(finalize(() => {
        this.loading = false;
      })).subscribe((res: any) => {
        if (res.status === 100) {
          this.form.reset();
          this.codeReceived = false;
          this.getData();
        }
      });
    }
  }
}
