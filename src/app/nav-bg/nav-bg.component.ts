import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bg',
  templateUrl: './nav-bg.component.html',
  styleUrls: ['./nav-bg.component.css']
})
export class NavBgComponent implements OnInit {

  constructor() { }

  @Input() public head;
  @Input() public bg;
  @Input() public nav_arabic;
  Lang:any={};

  ngOnInit() {
  }

}
