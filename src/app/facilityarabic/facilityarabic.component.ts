import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilityarabic',
  templateUrl: './facilityarabic.component.html',
  styleUrls: ['./facilityarabic.component.css']
})
export class FacilityarabicComponent implements OnInit {

  head = "إدارة المرافق المتكاملة";
  bg="bg_img";
  nav_arabic = "/facilitymanagement";
  
  constructor() { }
  Lang: any = {};
  ngOnInit() {
  }

}
