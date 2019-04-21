import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
// import { RegisterForm }    from '../register-form';
import swal from 'sweetalert2';



@Component({
  selector: 'app-supplier-register',
  templateUrl: './supplier-register.component.html',
  styleUrls: ['./supplier-register.component.css']
})

export class SupplierRegisterComponent implements OnInit {
  navbarOpen = false;


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }



  localVar;
  model: any = {};
  Lang: any = {};
  data: any = {};
  dateNow: any = {};
  submitted: any = {};
  newVar: any = {};
  onSubmit: any = {};
  minDate: Date;
  trade_license_vdate: any = {};
  keyup = '';

  constructor(private apiService: APIService, private router: Router, private calendar: NgbCalendar) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
  }


  formatsDateTest: string[] = [
    'yyyy/MM/dd',
  ];

  head = "Supplier Registration";
  bg = "bg_img";
  nav_arabic = "/supplier-register-arabic";



  ngOnInit() {
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  newsletter(model) {
    this.apiService.newsletter(model).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
    })
  };
  supplieremailotpverification(model) {
    this.apiService.supplieremailotpverification(model).subscribe((response) => {
      this.data = response;
      console.log("data=====>", this.data.message);

      if (this.data.message == "You are successfully registered") {
        console.log("data=====>", this.data);

        swal("Registration Successful" + "<br>" + "التسجيل ناجح")

        this.router.navigate(['/login']);
      }
      else if (this.data.message == "Invalid one time password") {
        swal("Invalid one time password")
      }

    })
  }
  supplierregister(model) {
    console.log("hello", this.trade_license_vdate)
    this.apiService.supplierregister(model).subscribe((response) => {
      console.log("response", response)
      console.log("Checking", this.data = response)
      this.data = response
      var res_data = this.data.data
      console.log("res_data", res_data)

      // console.log("this.data ", this.data)

      swal(res_data)
      this.router.navigate(['/login']);

    });

  };


  contactNo_mobile() {

    let getdata = this.model.contant_mobile;

    (getdata == undefined) ? (getdata = "") :
      (getdata.length > 10) ? (this.model.contant_mobile = getdata.substring(0, 10)) :
        this.model.contant_mobile = getdata.replace(/\D/g, ""); //getdata.replace(/\D/g, "");

    console.log(this.model.contant_mobile)
  }

  contactNo_no() {
    let getdata = this.model.contact_no;

    (getdata == undefined) ? (getdata = "") :
      (getdata.length > 10) ? (this.model.contact_no = getdata.substring(0, 10)) :
        this.model.contact_no = getdata.replace(/\D/g, "");
  }

  tradeLicenceNO() {
    let getdata = this.model.trade_license_no;

    (getdata == undefined) ? (getdata = "") :
      // (getdata.length > 10) ? ( this.model.trade_license_no = getdata.substring(0,10)) :
      this.model.trade_license_no = getdata.replace(/\D/g, "");
  }

}
