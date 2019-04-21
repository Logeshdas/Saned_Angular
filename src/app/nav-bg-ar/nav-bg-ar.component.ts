import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bg-ar',
  templateUrl: './nav-bg-ar.component.html',
  styleUrls: ['./nav-bg-ar.component.css']
})
export class NavBgArComponent implements OnInit {

  constructor() { }


  @Input() public head;
  @Input() public bg;
  @Input() public nav_arabic;
  Lang: any = {};
  ngOnInit() {
  }

}
