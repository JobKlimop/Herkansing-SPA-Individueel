import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../../_models/user.model';

@Component({
  selector: 'app-attending-user-item',
  templateUrl: './attending-user-item.component.html',
  styleUrls: ['./attending-user-item.component.css']
})
export class AttendingUserItemComponent implements OnInit {
  @Input() user: User;
  imageUrl = 'assets/img/No_Profile_Picture.png';

  constructor() { }

  ngOnInit() {
  }

}
