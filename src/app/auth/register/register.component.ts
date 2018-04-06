import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.initForm();
      });
  }

  onRegister() {
    this.registerForm.value.email = this.registerForm.value.email.toLowerCase();
    this.authService.registerUser(this.registerForm.value)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private initForm() {
    const userName = '';
    const firstName = '';
    const middleName = '';
    const lastName = '';
    const age = '';
    const email = '';
    const password = '';

    this.registerForm = new FormGroup({
      'userName': new FormControl(userName, Validators.required),
      'firstName': new FormControl(firstName, Validators.required),
      'middleName': new FormControl(middleName),
      'lastName': new FormControl(lastName, Validators.required),
      'age': new FormControl(age, Validators.required),
      'email': new FormControl(email, Validators.required),
      'password': new FormControl(password, Validators.required)
    });
  }
}
