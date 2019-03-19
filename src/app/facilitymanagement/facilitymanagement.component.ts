import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'facilitymanagement',
  templateUrl: './facilitymanagement.component.html',
  styleUrls: ['./facilitymanagement.component.css']
})
export class facilitymanagementComponent implements OnInit {
  navbarOpen = false;
  head = "Integrated Facility Management";
  bg="bg_img";
  nav_arabic = "/facilityarabic";

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;
  Lang: any = {}
  model: any = {};
  pow: any = {};
  constructor() { }

  ngOnInit() {
  }

}
