import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: any;

  constructor() { }

  ngOnInit() {
  }

}
