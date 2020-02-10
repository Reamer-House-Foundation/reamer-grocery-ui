import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authenticated: boolean;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authenticated = this.authService.isAuthenticated();
    this.authService.getLoginState()
    .subscribe(loginState => {
      this.authenticated = this.authService.isAuthenticated();
    });
  }
}