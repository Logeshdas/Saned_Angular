import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

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
              if(this.data.code = '200'){
                  console.log("data=====>",this.data);
                  alert('Login Successful' );
  
              
                }

              this.router.navigate(['/government-services']);
              
          });
          
      };
  
  
      onSubmit() {
          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
      }
  
  

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}


}
