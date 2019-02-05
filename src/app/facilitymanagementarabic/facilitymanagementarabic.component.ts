import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: ' facilitymanagementarabic',
  templateUrl: './facilitymanagementarabic.component.html',
  styleUrls: ['./facilitymanagementarabic.component.css']
})
export class facilitymanagementarabicComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, '', this.powers[0], '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}