import { Component, OnInit } from '@angular/core';
//===start=========
import { TranslateService } from '@ngx-translate/core';
//==========end========
@Component({
  selector: 'app-government-services',
  templateUrl: './government-services.component.html',
  styleUrls: ['./government-services.component.css']
})
export class GovernmentServicesComponent implements OnInit {
  

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
