import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterForm }    from '../register-form';
import swal from 'sweetalert2';
// import { getMaxListeners } from 'cluster';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  styles: [`
      .error { color: crimson; }
      .success { color: green; }
  ` ],
})
export class RegisterFormComponent implements OnInit {

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  model: any = {};
    data: any = {};

    constructor(private  apiService:  APIService,private router: Router) { }

    ngOnInit() {
    }
  
      createContact(model){
          this.apiService.createContact(model).subscribe((response) => {
              this.data = response;
              if(this.data.Message == "User Already Registered"){
                // document.getElementById('id01').style.display='none'
                  console.log("data=====>",this.data);
                  
                  swal(this.data.Message );
  
              
                }
else{
  swal("Please check your email")
  document.getElementById('id02').style.display='block'
}
              // this.router.navigate(['/login']);
              
          });
          
      };

      emailotpverification(model){
        this.apiService.emailotpverification(model).subscribe((response) => {
            this.data = response;
            if(this.data.status == "true"){
                console.log("data=====>",this.data);
                
                swal('Registration Successful' )

                this.router.navigate(['/login']);
              }

           
            
        });
        
    };

      sendotp(model){
        this.apiService.sendotp(model).subscribe((response) => {
            this.data = response;
            if(this.data.code = '200'){
                console.log("data=====>",this.data);
                
              //   alert('OTP sent to email' );

            
              }

            // this.router.navigate(['/login']);
            
        });
        
    };
  
  
      backhome() {
        this.router.navigate(['/login']);
      }
  
  

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

}
export class AppModalContentComponent { }




