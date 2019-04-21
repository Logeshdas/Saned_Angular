import { Component, OnInit, Inject } from '@angular/core';
// import router from "@angular/router";
//import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  // goSearch() {
  //   this.router.navigate(['search']); (3)
  // }
  // goToUrl(): void {
  //   this.document.location.href = 'http://eservices.spsa.ae';
  // }
  localVar;

  constructor() { }
  // @Inject(DOCUMENT)
  ngOnInit() {
  }

}
