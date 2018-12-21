import { Component, OnInit } from '@angular/core';
//===start=========
import { TranslateService } from '@ngx-translate/core';
//==========end========

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
