import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../_models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userEditForm: FormGroup;
  user: User;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.editMode = true;
    this.initForm();
  }

  onSubmit() {

  }

  private initForm() {
    let userName = '';
    let firstName = '';
    let middleName = '';
    let lastName = '';
    let age: number;
    let email = '';

    if(this.editMode) {
      this.user = this.route.snapshot.data['user'];
      userName = this.user.userName;
      firstName = this.user.firstName;
      middleName = this.user.middleName;
      lastName = this.user.lastName;
      age = this.user.age;
      email = this.user.email;
    }

    this.userEditForm = new FormGroup({
      'userName': new FormControl(userName, Validators.required),
      'firstName': new FormControl(firstName, Validators.required),
      'middleName': new FormControl(middleName),
      'lastName': new FormControl(lastName, Validators.required),
      'age': new FormControl(age, Validators.required),
      'email': new FormControl(email, Validators.required),
    });
  }

}
