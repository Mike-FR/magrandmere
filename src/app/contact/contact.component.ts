import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
