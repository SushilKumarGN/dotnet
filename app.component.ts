import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  
  // showTopNavigation = false;

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       // Check if the current route is '/link1'
  //       this.showTopNavigation = this.router.url === '/top-navigation';
  //     }
  //   });
  // }
  
}
