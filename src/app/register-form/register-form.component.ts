import { Component } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RegisterForm }    from '../register-form';
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
export class RegisterFormComponent  {

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  model = new RegisterForm('', '', '','','','','','');
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

}





