import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  navbarOpen = false;
  head = "Privacy Policy";
  bg="bg_img";
  nav_arabic = "/privacy-arabic";
  model: any = {};

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;
  Lang: any = {};


  constructor() { }

  ngOnInit() {
  }

}
