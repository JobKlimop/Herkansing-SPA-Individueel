import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../_models/user.model';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.nodeUrl;
  public loggedIn = false;

  constructor(private http: HttpClient) {

  }

  public login(userName: string, password: string) {
    return this.http.post(
      this.url + '/login',
      {'userName': userName, 'password': password})
      .toPromise()
      .then((response) => {
        this.setSession(response, userName);
        this.loggedIn = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public registerUser(user: User): Promise<any> {
    return this.http.post(
      this.url + '/register',
      JSON.stringify(user),
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private setSession(token, username) {
    localStorage.setItem('token', JSON.stringify(token.token));
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = true;
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    if(token) {
      return this.loggedIn;
    } else {
      return false;
    }
  }
}
