import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  header: string = '';
  words: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Method 1: Using Router Service
    // console.log('Current URL:', this.router.url);

    if (this.router.url === '/auth/sign-in') {
      this.header = 'Welcome back!';
      this.words = 'Log in to continue managing your operations.'
    }else {
      this.header = 'Welcome!';
      this.words = `Join us today and streamline your <br> transportation and logistics operations.`
    };

    // Method 2: Using ActivatedRoute Service
    // console.log('Current Route Snapshot:', this.activatedRoute.snapshot);
    // this.activatedRoute.url.subscribe((url) => {
    //   console.log('URL segments:', url);
    // });

    // Method 3: Using Router Events
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {
      // console.log('Current URL after redirect:', event.urlAfterRedirects);
      if (event.urlAfterRedirects === '/auth/sign-in') {
        this.header = 'Welcome back!';
        this.words = 'Log in to continue managing your operations.'
      }else {
        this.header = 'Welcome!';
        this.words = `Join us today and streamline your <br> transportation and logistics operations.`
      };
    });
  }
}
