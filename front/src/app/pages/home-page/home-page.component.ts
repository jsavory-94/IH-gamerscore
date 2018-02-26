import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  restaurants: Array<any>;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getList()
      .then((restaurants) => {this.restaurants = restaurants});
  }

}
