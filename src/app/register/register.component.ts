import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseService} from "../shared/base.service";
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";
import {finalize} from "rxjs";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public passwordVisible = false;
  codeReceived = false;
  selectedIndex = 0;

  public companyForm: FormGroup = this.fb.group({});
  public userForm: FormGroup = this.fb.group({});
  public loading = false;
  otp: any;
  stepsItems: MenuItem[] = [
    {
      label: 'Company Info'
    },
    {
      label: 'User Info'
    }
  ];
  constructor(private fb: FormBuilder,
              public baseService: BaseService,
              private service: RegisterService,
              private router: Router) { }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, Validators.required],
      address: [null, Validators.required],
      image: [null, Validators.required]
    });

    this.userForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      phoneNumber: [null, Validators.required]
    });
  }

  register(): void {
    this.loading = true;
    this.service.register({ account: this.userForm.value, company: this.companyForm.value}).pipe(finalize(() => this.loading = false)).subscribe(
      (u: any) => {
        if (u.status === 106) {
          this.companyForm.reset();
          this.codeReceived = true;
          this.userForm.get('userName')?.setValue(this.userForm.get('phoneNumber')?.value);
        }
      });
  }

  showPassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onUpload(event: any) {
    for(let file of event.files) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.companyForm.get('image')?.setValue(event.target.result);
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  login(otp?: string): void {
   if(otp?.length === 6) {
     this.baseService.clearSessionData();
     this.loading = true;
     this.userForm.get('password')?.setValue(otp?.toUpperCase());
     this.service.login(this.userForm.value).pipe(finalize(() => this.loading = false)).subscribe(
       (u: any) => {
         if (u.status === 100) {
           this.loading = true;
           this.setUserData(u.data);
           this.router.navigate(['/p/dashboard']);
         }
       });
   }
  }

  setUserData(result: any): void {
    this.baseService.setSessionData(result);
  }

  nextStep(): void{
    if (this.companyForm.valid) {
      this.selectedIndex += 1;
    }
  }
}
