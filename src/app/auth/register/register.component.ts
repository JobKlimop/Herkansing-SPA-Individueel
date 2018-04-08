import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.initForm();
      });
  }

  onRegister() {
    const username = this.registerForm.value.userName;
    const password = this.registerForm.value.password;

    this.registerForm.value.email = this.registerForm.value.email.toLowerCase();
    this.authService.registerUser(this.registerForm.value)
      .then((response) => {
        this.authService.login(username, password)
          .then(() => {
            this.router.navigateByUrl('/');
          });
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
