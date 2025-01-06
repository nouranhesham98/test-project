// import { Component } from '@angular/core';

import { Router } from "@angular/router";

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { timer } from "rxjs";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:false
  
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  phoneNumber: any;
  reCaptchaVerifier!: any;
  errorr:string = '';
  errMsg: string = '';
  isLoading: boolean = false;
  loginForm!: FormGroup; // Important: Make sure this is defined



  constructor(private auth: AuthService,private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void { 
  this.loginForm = this.fb.group({ // Initialize in ngOnInit
    username: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: new FormControl( '', [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)] ),
  });
  }
  // loginForm:FormGroup 
  // = new FormGroup({
    
  //   phoneNumber: new FormControl( '', [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)] ),

  // }   );


  handleForm():void {
    this.isLoading = true;
    const userData = this.loginForm.value;

  // this.registerForm.value: the value that the backend expects 
  // This step is necessary to avoid any XSS ayyacks or SQL injections through inspect
    if(this.loginForm.valid == true )
    {
      this.router.navigate(['/authenication'])
      this.isLoading = false;
      this.email = '';
      this.password = '';
    }
    else {    
        this.errorr='Please Enter Mobile Number *';
        timer(3000);
        this.isLoading = false;
        // return;
        // this.email = '';
        // this.password = ''; 
    }

  }

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }

  loginNumber(phoneNumber: string) {}

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
  signInWithFacebook() {
    this.auth.facebookSignIn();
  }
}

