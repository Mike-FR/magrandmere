import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuBackground = false;
  wineBackground = false;
  restaurantBackground = false;

  constructor() { }

  ngOnInit() {
  }

  getMenuBackground() {
    this.menuBackground = !this.menuBackground;
  }

  getWineBackground() {
    this.wineBackground = !this.wineBackground;
  }

  getRestaurantBackground() {
    this.restaurantBackground = !this.restaurantBackground;
  }
}
