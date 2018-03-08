import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../_models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

  onEdit() {
    this.user = this.route.snapshot.data['user'];
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
