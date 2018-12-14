import { Component, OnInit } from '@angular/core';
//===start=========
import { TranslateService } from '@ngx-translate/core';
//==========end========
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  //===================translate start=========
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  //============ translate end============

  ngOnInit() {
  }

}
