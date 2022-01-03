import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _authService: AuthService) {
    if(localStorage.getItem('access_token')) {
      this._authService.currentUser.token = localStorage.getItem('access_token') as string;
    }
  }
}
