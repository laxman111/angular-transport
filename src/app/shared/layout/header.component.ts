import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService, User } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  title: string;
  currentUser: User;
  private routeTitles: any = {
    '/': 'Home',
    '/about': 'About',
    '/track-order': 'Track Order',
    '/contact-us': 'Contact Us',
    '/login': 'Login',
    '/orders': 'Orders',
  };
  constructor(
    public router: Router,
    private userService: UserService
  ) {
    this.title = 'home';
    this.currentUser = null;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.routeTitles[event.url];
      }
    })
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = (userData && userData.username) ? userData : null;
      }
    );
  }

  logoutClick() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
    location.reload();
  }
}
