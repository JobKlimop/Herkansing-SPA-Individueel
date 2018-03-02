import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user.model';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = environment.nodeUrl;

  constructor(private http: HttpClient) {

  }

  public getAllUsers(): Promise<User[]> {
    return this.http.get(
      this.url + '/getAllUsers/',
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response as User[];
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  public getOneUserByUsername(userName: string): Promise<User> {
    return this.http.get(
      this.url + '/getUser/' + userName,
      {headers: this.headers})
      .toPromise()
      .then((response) => {
        return response as User;
      })
      .catch((error) => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('error on event.service');
    return Promise.reject(error.message || error);
  }
}
