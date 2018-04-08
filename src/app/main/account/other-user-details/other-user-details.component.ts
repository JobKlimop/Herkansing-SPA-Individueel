import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../../_services/user.service';
import {User} from '../../../_models/user.model';

@Component({
  selector: 'app-other-user-details',
  templateUrl: './other-user-details.component.html',
  styleUrls: ['./other-user-details.component.css']
})
export class OtherUserDetailsComponent implements OnInit {
  username: string;
  user: User;
  userImageUrl = 'assets/img/No_Profile_Picture.png';

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.username = params['username'];
          this.userService.getOneUserByUsername(this.username)
            .then((response) => {
              this.user = response;
            });
    });
  }

}
