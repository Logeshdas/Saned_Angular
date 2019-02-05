import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'facilitymanagement',
  templateUrl: './facilitymanagement.component.html',
  styleUrls: ['./facilitymanagement.component.css']
})
export class facilitymanagementComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;

  model: any = {};
  pow: any = {};
  constructor() { }

  ngOnInit() {
  }

}
