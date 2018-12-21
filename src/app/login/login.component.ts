import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
=======
// import { Login } from '../login';
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
>>>>>>> e5dc73a4fa8d78a88eddcf728a6adb261e9872cb

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    // API_URL  =  'http://localhost:3000';
    public email:any;
    public password:string;
    // memail=this.email;
    
  model: Login = { userid: "email", password: "admin" };
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
    this.loginForm = this.formBuilder.group({
        userid: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.returnUrl = '/about-us';
    //this.AuthService.logout();
}
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


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
        // return  this.httpClient.post(`${this.API_URL}/api/login/`);

        // console.log("Email12334",this.model.userid)
        // console.log("password23452",this.model.password)
        
        // if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
        //    console.log("verify",this.f.userid.value)
        //     console.log("Login successful");
        //     //this.authService.authLogin(this.model);
        //     localStorage.setItem('isLoggedIn', "true");
        //     localStorage.setItem('token', this.f.userid.value);
        //     this.router.navigate([this.returnUrl]);
        // }
        // else{
        //     this.message = "Please check your userid and password";
        // }
    }
}

<<<<<<< HEAD
    // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  model: any = {};
    data: any = {};

    constructor(private  apiService:  APIService,private router: Router) { }

    ngOnInit() {
    }
  
      login(model){
          this.apiService.login(model).subscribe((response) => {
              this.data = response;
              if(this.data.status == "true"){
                  console.log("data=====>",this.data);
                //   alert('Login Successful' );
  
                this.router.navigate(['/government-services']);
                }
               else if(this.data.Message=="Invalid User name")
                {
                        swal("Invalid User name");
                }
               else if(this.data.Message=="Password is Incorrect")
                {
                    swal("Password is Incorrect");
                }

              
              
          });
          
      };
  
  
      onSubmit() {
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
      }
  
  

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

=======
  user:{

  }
  
>>>>>>> e5dc73a4fa8d78a88eddcf728a6adb261e9872cb

}
