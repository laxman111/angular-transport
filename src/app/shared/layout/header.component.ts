import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title: string;
  private routeTitles: any = {
    '/': 'Home',
    '/about': 'About',
    '/track-order': 'Track Order',
    '/contact-us': 'Contact Us',
    '/login': 'Login',
  };
  constructor(
    public router: Router
  ) {
    this.title = 'home';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.routeTitles[event.url];
      }
    })
  }

  ngOnInit() {
  }
}
