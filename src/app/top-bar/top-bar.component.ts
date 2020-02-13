import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;

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