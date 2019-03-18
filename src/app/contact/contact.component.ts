import { Component, OnInit } from '@angular/core';
// import { Props } from '../props';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 

  head = "Integrated Facility Management";
  bg = "bg_img";
  nav_arabic = "/supplier-register-arabic";

  
  constructor() { }

  ngOnInit() {
  }

  

}
