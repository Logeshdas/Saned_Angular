import { Component, OnInit } from '@angular/core';
//===start=========
import { TranslateService } from '@ngx-translate/core';
//==========end========

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit() {
  }
  user:{

  }
  //===================translate start=========
 constructor(private translate: TranslateService) {
  translate.setDefaultLang('en');
}
switchLanguage(language: string) {
  this.translate.use(language);
}
//============ translate end============

}
