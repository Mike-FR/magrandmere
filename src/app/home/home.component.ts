import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuBackground = false;
  wineBackground = false;
  restaurantBackground = false;
  navbarScroll: boolean;

  constructor() {
    this.navbarScroll = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    if (!this.navbarScroll && $event.pageY > 825) {
      this.navbarScroll = true;
    } else if (this.navbarScroll && $event.pageY < 825) {
      this.navbarScroll = false;
    }
  }

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
