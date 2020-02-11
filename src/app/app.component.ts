import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  appName = 'Reamer Grocery App';

  constructor(
    private authService: AuthService,
  ) {
    if (!environment.production) {
      console.log("Production? : ", environment.production);
    }
  }
}
