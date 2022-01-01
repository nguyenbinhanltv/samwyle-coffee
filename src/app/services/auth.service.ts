import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseAPI } from '../models/response.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = {
    id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    token: '',
    password: '',
  };

  authState = new BehaviorSubject(false);
  constructor(private _http: HttpClient, private _router: Router) {
  }

  get getToken() {
    return this.currentUser.token;
  }

  public isAuthenticated(): Promise<boolean> {

		if (this.getToken) {
			this.authState.next(true);
		} else {
			this.authState.next(false);
		}

		return new Promise((resolve) => { resolve(this.authState.value); });
	}

  login(userForm: User): Observable<ResponseAPI> {
    return this._http.post<ResponseAPI>(environment.ApiEndpoint + 'auth', userForm);
  }

  logout() {
    this.currentUser = {
      id: '',
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      token: '',
      password: '',
    };

    localStorage.removeItem('access_token');
    this._router.navigate(['dang-nhap']);
  }

  getUserInfor(accessToken: string): Observable<ResponseAPI> {
    return this._http.get<ResponseAPI>(environment.ApiEndpoint + `auth?access_token=${accessToken}`);
  }

  authenticated(): boolean {
    return this.currentUser.token ? true : false;
  }
}
