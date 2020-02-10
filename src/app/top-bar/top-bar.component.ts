import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginState } from '../auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  authenticated: boolean = false;

  constructor(
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getLoginState()
    .subscribe((loginState: LoginState) => {
      this.authenticated = this.authService.isAuthenticated();
    });
  }

  signOut() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}