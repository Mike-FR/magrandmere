import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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

}
