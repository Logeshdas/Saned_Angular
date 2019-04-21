import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  model: any = {};
  model_value: any = {};
  Subscribe:any={};
  ngOnInit() {
  }

  goToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }


}
