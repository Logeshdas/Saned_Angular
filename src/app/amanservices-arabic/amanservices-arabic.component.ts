import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';
@Component({
  selector: 'app-amanservices-arabic',
  templateUrl: './amanservices-arabic.component.html',
  styleUrls: ['./amanservices-arabic.component.css']
})
export class AmanservicesArabicComponent implements OnInit {
  navbarOpen = false;
  head = "أمـــــان";
  bg="bg_img";
  nav_arabic = "/amanservices";

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;

  model: any = {};
  data: any = {};
  Lang: any = {};
  constructor(private apiService: APIService, private router: Router, private sg: SimpleGlobal) { }

  ngOnInit() {
  }
  newsletter(model) {
    this.apiService.newsletter(model).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
    })
  };
}
