import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-arabic',
  templateUrl: './privacy-arabic.component.html',
  styleUrls: ['./privacy-arabic.component.css']
})
export class PrivacyArabicComponent implements OnInit {
  navbarOpen = false;
  head = "سياسة خاصة";
  bg="bg_img";
  nav_arabic = "/privacy";
  Lang: any = {};
  model: any = {};

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;

  constructor() { }

  ngOnInit() {
  }

}
