import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.login('/dashboard');
  }

  signOut() {
    this.authService.logout();
  }
}