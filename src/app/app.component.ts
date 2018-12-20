import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  
  selector: 'app-root',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6Ld4Jh8TAAAAAD2tURa21kTFwMkKoyJCqaXb0uoK"></re-captcha>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent { 
  resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }
    constructor(private translate: TranslateService) {
      translate.setDefaultLang('en');
    }
    switchLanguage(language: string) {
      this.translate.use(language);
    }
    user={}
}