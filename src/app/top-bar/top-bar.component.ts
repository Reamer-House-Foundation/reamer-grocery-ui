import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;

  loggedIn$: Observable<boolean> = this.authService.loggedIn$;
  brandLink$: Observable<string> = this.authService.isAuthenticated$.pipe(
    map((loggedIn: boolean) => (loggedIn ? '/dashboard' : '/'))
  );

  constructor(
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() { }

  signIn() {
    this.authService.login('/inventory');
  }

  signOut() {
    this.authService.logout();
  }
}