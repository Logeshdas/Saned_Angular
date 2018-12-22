import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      forgetpassword(model){
        this.apiService.forgetpassword(model).subscribe((response) => {
            this.data = response;
            if(this.data.Message == "Password should not be a previously used one"){
             
                console.log("data=====>",this.data);
                
                swal(this.data.Message+"<br>"+"كلمة المرور لا يجب أن تكون كلمة مرور سبق استخدامها" );

              
              }
              if(this.data.Message == "password is updated"){
swal(this.data.Message+"<br>"+"")
              }
              if(this.data.Message == "password doesn't match"){
                swal(this.data.Message+"<br>"+"")
                              }
            
        });
        if(this.data.Message == "Invalid User Name"){
            swal(this.data.Message+"<br>"+"")
                          }
    };
  
  
      onSubmit() {
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
      }
  
  

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}


}