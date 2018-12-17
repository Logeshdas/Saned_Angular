import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AuthService } from '../auth.service';


import { ApiPostserviceService } from '../api-postservice.service';
//===============login import===============
// import { api-postservice } from './api-postservice';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
// import { Login } from '../login.component';
//import { AuthService } from '../auth.service';
// ================ login import end================

//===start=========
import { TranslateService } from '@ngx-translate/core';
//==========end=======
@Component({
  selector: 'app-loginv2',
  templateUrl: './loginv2.component.html',
  styleUrls: ['./loginv2.component.css']
})
export class Loginv2Component implements OnInit {
  public email:any;
  public password:string;
model:"";
  // model: Login = { userid: "email", password: "admin" };
  loginForm: FormGroup
  message: string;
  returnUrl: string;

  
//===================translate start=========
constructor(private translate: TranslateService,private formBuilder: FormBuilder,private router: Router, public httpClient:HttpClient ) {
  translate.setDefaultLang('en');
}
switchLanguage(language: string) {
  this.translate.use(language);
}
//============ translate end============

  ngOnInit() {
  }
  login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
  }
  else{
    console.log("Enter in to the login page");
        console.log("Email-id",this.email)
        console.log("Email-id",this.password)
        this.httpClient.post('http://127.0.0.1:8084/login', {email: this.email} )
        .subscribe (
            (response) => {
            this.email = response;
            },
            (error) => {
              console.log (error);
            }
      
          );
  }
  }
}
