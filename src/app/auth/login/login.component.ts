import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLogin() {
    console.log('1');
    const userData = this.loginForm.value;
    console.log(userData);
    if(userData.userName === '' || userData.password === '') {
      console.log('Vul iets in');
    } else if (userData.userName && userData.password) {
      this.authService.login(userData.userName, userData.password)
        .then(() => {
          this.router.navigateByUrl('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

}
