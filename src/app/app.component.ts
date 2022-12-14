import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.setUpGoogleAnalytics();
  }

  private setUpGoogleAnalytics() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-4CPLQ15C7N', { 'page_path': event.urlAfterRedirects });
      }      
    });
  }
}
