import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public token: string;
  endPointUrl: string;
  constructor(private http: HttpClient, private _router: Router) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.endPointUrl = environment.endPointUrl + '/admin';
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post(this.endPointUrl + '/read_one.php', {
        username: username,
        password: password
      })
      .pipe(
        map((response: Response) => {
          const token = response['token'];
          if (token && response['message'] === 'OK') {
            this.token = token;
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ username: username, token: token })
            );
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    this._router.navigateByUrl('/login');
  }
}
