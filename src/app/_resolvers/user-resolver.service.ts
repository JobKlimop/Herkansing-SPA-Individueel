import {Injectable} from '@angular/core';
import {User} from '../_models/user.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../_services/user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getCurrentUser()
      .then((user) => {
        if (user) {
          return user;
        } else {
          return null;
        }
      });
  }
}
