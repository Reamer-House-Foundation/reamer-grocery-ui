import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, UserDeets } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    const formData: UserDeets = {
      userEmail: null,
      userPassword: null
    }
    this.loginForm = this.formBuilder.group(formData);
  }

  validateParams(formData: UserDeets) {
    const { userEmail, userPassword } = formData;
    return (
      userEmail
      && userPassword
      && userEmail.length > 0
      && userPassword.length > 0
    );
  }

  onSubmit(formData: UserDeets) {
    if (this.validateParams(formData)) {
      this.authService.loginUser(formData)
        .then(() => {
          this.loginForm.reset();
          this.router.navigate(['/inventory']);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inventory']);
    }
  }
}