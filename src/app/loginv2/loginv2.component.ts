import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

import swal from 'sweetalert2';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-loginv2',
  templateUrl: './loginv2.component.html',
  styleUrls: ['./loginv2.component.css']
})
export class Loginv2Component implements OnInit {
  email: any = {};
  password: any = {};
  data: any = {};
  user: any = {};
  login: any = {};
  model: any = {};
  email_id: any = {}

  model_value: any = {}
  constructor(private apiService: APIService, private router: Router, ) { }

  ngOnInit() {
  }

  goToTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  Subscribe(model_value) {
    console.log("hello", this.email_id)
    this.apiService.Subscribe(model_value).subscribe((response) => {
      console.log("response", response)
      console.log("Checking", this.data = response)
      this.data = response
      var res_data = this.data.data
      console.log("res_data", res_data)

      // console.log("this.data ", this.data)

      swal(res_data)
      window.location.reload();
      //this.router.navigate(['/login']);

      // if (this.data.Message == "User Already Registered") {

      //   console.log("data=====>", this.data);

      //   swal(this.data.Message + "<br>" + "مستخدم مسجل بالفعل");


      // }
      // else if (this.data.message == "Please provide an Emailid") {
      //   console.log("email")
      //   swal("Please fill the Mandatory fields")
      // }

      // else if (this.data.Message == "please check your email for one time password") {
      //   swal("please check your email for one time password")
      //   document.getElementById('id01').style.display = 'block'
      // }
      // // this.router.navigate(['/login']);

    });

  };
}
